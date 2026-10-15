import "server-only"

import { createHmac } from "node:crypto"
import { ipAddress } from "@vercel/functions"
import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"

let limiter: Ratelimit | undefined;


function getLimiter(): Ratelimit {
    if (limiter) return limiter;

    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!url || !token) {
        throw new Error("Redis configuration is missing.");
    }

    const redis = new Redis({
        url,
        token
    });

    limiter = new Ratelimit({
        redis,

        // Maximum five requests within a rolling 10 minutes.
        limiter: Ratelimit.slidingWindow(5, "10 m"),

        // Separate our contact limits from other Redis data.
        prefix: "portfolio:contact:ip:v1",

        analytics: false

    });


    return limiter

}

export async function checkContactRateLimit(
    request: Request
) {
    /**
     * Use Vercel's request IP helper.
     *
     * The fallback is ONLY for local development.
     * Production requests must have a usable IP.
     */

    const ip = ipAddress(request) ?? (
        process.env.NODE_ENV === "development" ? "local-development" : undefined
    );

    if (!ip) {
        throw new Error("Client IP is unavailable");
    }

    const secret = process.env.RATE_LIMIT_HASH_SECRET;

    if (!secret) {
        throw new Error("Rate-limit secret is missing.");
    }

    const identifier = createHmac("sha256", secret)
        .update(ip)
        .digest("hex");

    const result = await getLimiter().limit(identifier);


    return {
        allowed: result.success,
        remaining: result.remaining,
        retryAfter: Math.max(
            1,
            Math.ceil((result.reset - Date.now()) / 1000)
        )
    };
}