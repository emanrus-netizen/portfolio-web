
import { NextResponse } from "next/server";

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
    payload = await request.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid JSON request body.",
      },
      { status: 400 }
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

  /**
   * At this point, the data passed validation.
   *
   * Day 15:
   * Add an email provider to deliver the message.
   *
   * Don't log submitted contact information or
   * claim email delivery before it actually happens.
   */
  return NextResponse.json(
    {
      success: true,
      message:
        "Server validation passed. Email delivery is not configured yet.",
    },
    { status: 200 }
  );
}
