import "server-only";


/**
 * Rate-limit configuration.
 *
 * Allow at most five requests in a
 * 60-second fixed window.
 */
const MAX_REQUEST = 5
const WINDOW_MS = 60_000;


/**
 * Each entry remembers:
 *
 * count   - Number of requests received.
 * resetAt - Timestamp when a new window begins.
 */

type RateLimitEntry = {
    count: number;
    resetAt: number;
}

const request = new Map<string, RateLimitEntry>()

export type RateLimitResult = {
    allowed: boolean;
    remaining: number;
    retryAfter: number;
}


/**
 * Check whether another request is allowed.
 *
 * SECURITY:
 * This implementation is for local development.
 * Map is not shared across server processes or
 * serverless instances.
 */

export function checkRateLimit(key: string): RateLimitResult {
    const now = Date.now();

    const existing = request.get(key);

    if (!existing || now >= existing.resetAt) {
        request.set(
            key, {
            count: 1,
            resetAt: now + WINDOW_MS
        }
        );
        return {
            allowed: true,
            remaining: MAX_REQUEST - 1,
            retryAfter: 0
        }
    }

    if (existing.count >= MAX_REQUEST) {
        return {
            allowed: false,
            remaining: 0,
            retryAfter: Math.ceil(
                (existing.resetAt - now) / 1000
            )
        }
    }

    existing.count += 1

    return {
        allowed: true,
        remaining: MAX_REQUEST - 1,
        retryAfter: 0
    }
}