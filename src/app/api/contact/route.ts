
import { NextResponse } from "next/server";
import {
    readLimitedJson,
    PayloadTooLargeError,
} from "@/lib/read-limited-json";
import { checkContactRateLimit } from "@/lib/contact-rate-limit";
import { sendContactEmail } from "@/lib/mail";
import { verifyTurnstileToken } from "@/lib/verify-turnstile";
import { checkEmailQuota } from "@/lib/email-quota";
/**
 * POST /api/contact
 *
 * Receives contact information from the frontend.
 *
 * Important:
 * Never trust incoming data just because the
 * frontend already validated it.
 */


export async function POST(request: Request) {
    if (process.env.CONTACT_FORM_ENABLED !== "true") {
        return NextResponse.json(
            {
                success: false,
                message: "Contact form is temporarily unavailable.",
            },
            { status: 503 }
        );
    }
    try {
        const rateLimit = await checkContactRateLimit(request);

        if (!rateLimit.allowed) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Too many request. Please try again later"
                },
                {
                    status: 429,
                    headers: {
                        "Retry-After": String(rateLimit.retryAfter),
                        "Cache-Control": "no-store",
                    }
                }
            )
        }
    } catch (error) {
        /**
         * Fail closed:
         *
         * If Redis is unavailable, do not continue
         * to Gmail delivery without rate limiting.
         */

        return NextResponse.json(
            {
                success: false,
                message:
                    "Contact service is temporarily unavailable."
            },
            {
                status: 503
            }
        )
    }

    // We expect JSON, not HTML form data.
    const contentType =
        request.headers.get("content-type") ?? "";

    if (!contentType.includes("application/json")) {
        return NextResponse.json(
            {
                success: false,
                message: "Content-Type must be application/json.",
            },
            { status: 415 }
        );
    }

    // Request bodies can contain malformed JSON.
    // Parsing must be handled safely.
    let payload: unknown;

    try {
        payload = await readLimitedJson(request);
    } catch (error) {
        const tooLarge = error instanceof PayloadTooLargeError;

        return NextResponse.json(
            {
                success: false,
                message: tooLarge
                    ? "Your message is too large."
                    : "Invalid JSON request body.",
            },
            {
                status: tooLarge ? 413 : 400,
            }
        );
    }
    // Check that the payload is an object.
    if (
        typeof payload !== "object" ||
        payload === null ||
        Array.isArray(payload)
    ) {
        return NextResponse.json(
            {
                success: false,
                message: "Invalid contact information.",
            },
            { status: 400 }
        );
    }

    const data = payload as Record<string, unknown>;
    /**
     * HONEYPOT VALIDATION
     *
     * Real users should leave the website field empty.
     * Some bots automatically fill every form input.
     *
     * Reject non-empty honeypot values before sending
     * any email.
     */
    if (data.website !== undefined && (
        typeof data.website !== "string" || data.website.trim() !== ""
    )) {
        return NextResponse.json(
            {
                success: false,
                message: "Invalid submission"
            },
            {
                status: 400
            }
        )
    }
    // Runtime type validation.
    if (
        typeof data.name !== "string" ||
        typeof data.email !== "string" ||
        typeof data.message !== "string"
    ) {
        return NextResponse.json(
            {
                success: false,
                message: "All fields must be text.",
            },
            { status: 400 }
        );
    }

    // Normalize submitted values.
    const name = data.name.trim();
    const email = data.email.trim();
    const message = data.message.trim();

    // Required field validation.
    if (!name || !email || !message) {
        return NextResponse.json(
            {
                success: false,
                message: "Please fill in all fields.",
            },
            { status: 400 }
        );
    }

    // Limit field lengths to avoid excessive input.
    if (
        name.length > 100 ||
        email.length > 254 ||
        message.length > 5000
    ) {
        return NextResponse.json(
            {
                success: false,
                message: "One or more fields are too long.",
            },
            { status: 400 }
        );
    }

    // Basic email format validation.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return NextResponse.json(
            {
                success: false,
                message: "Please enter a valid email address.",
            },
            { status: 400 }
        );
    }

    // Get the token submitted by the frontend.
    const token = data.turnstileToken;

    // Ensure the token exists and has the correct type.
    if (
        typeof token !== "string" ||
        token.length === 0 ||
        token.length > 2048
    ) {
        return NextResponse.json(
            {
                success: false,
                message: "Security verification is required.",
            },
            { status: 400 }
        );
    }

    // Ask Cloudflare to verify the token.
    let verified: boolean;

    try {
        verified = await verifyTurnstileToken(token);
    } catch {
        return NextResponse.json(
            {
                success: false,
                message:
                    "Security verification is temporarily unavailable.",
            },
            { status: 503 }
        );
    }

    // Reject invalid or expired tokens.
    if (!verified) {
        return NextResponse.json(
            {
                success: false,
                message: "Security verification failed.",
            },
            { status: 403 }
        );
    }

    /**
     * GLOBAL EMAIL QUOTA
     *
     * Only verified submissions reach this point.
     * Every accepted attempt consumes quota.
     */
    let quota;

    try {
        quota = await checkEmailQuota();
    } catch {
        // Fail closed if Redis is unavailable.
        return NextResponse.json(
            {
                success: false,
                message:
                    "Contact service is temporarily unavailable.",
            },
            { status: 503 }
        );
    }

    if (!quota.allowed) {
        return NextResponse.json(
            {
                success: false,
                message:
                    "The contact form has reached its daily limit. Please try again later.",
            },
            {
                status: 429,
                headers: {
                    "Retry-After": String(quota.retryAfter),
                    "Cache-Control": "no-store",
                },
            }
        );
    }

    try {
        await sendContactEmail({
            name,
            email,
            message,
        });

        return NextResponse.json(
            {
                success: true,
                message: "Message accepted for delivery.",
            },
            { status: 200 }
        );
    } catch (error) {
        // Log the failure without exposing credentials
        // or submitted contact information.
        console.error(
            "Contact email failed:",
            error instanceof Error ? error.name : "Unknown error"
        );

        return NextResponse.json(
            {
                success: false,
                message: "Unable to send your message right now.",
            },
            { status: 502 }
        );
    }
}
