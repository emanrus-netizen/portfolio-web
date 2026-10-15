
import "server-only";

import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const DAILY_EMAIL_LIMIT = 20;

let emailQuota: Ratelimit | undefined;

function getEmailQuota() {
  if (emailQuota) return emailQuota;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    throw new Error("Redis configuration is missing.");
  }

  const redis = new Redis({ url, token });

  emailQuota = new Ratelimit({
    redis,

    // At most 20 attempts per fixed 1-day window.
    limiter: Ratelimit.fixedWindow(
      DAILY_EMAIL_LIMIT,
      "1 d"
    ),

    // Separate development tests from production.
    prefix:
      process.env.VERCEL_ENV === "production"
        ? "portfolio:email-quota:production:v1"
        : "portfolio:email-quota:development:v1",

    analytics: false,
  });

  return emailQuota;
}

/**
 * Reserve one global email attempt.
 *
 * All visitors use the same identifier.
 * Failed SMTP attempts still consume quota.
 */
export async function checkEmailQuota() {
  const result = await getEmailQuota().limit(
    "all-visitors"
  );

  return {
    allowed: result.success,
    remaining: result.remaining,
    retryAfter: Math.max(
      1,
      Math.ceil((result.reset - Date.now()) / 1000)
    ),
  };
}
