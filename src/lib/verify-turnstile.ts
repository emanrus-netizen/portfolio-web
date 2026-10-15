
import "server-only";

type TurnstileResult = {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
};

const TEST_SECRET =
  "1x0000000000000000000000000000000AA";

/**
 * Verify a Turnstile token with Cloudflare.
 *
 * Returns:
 * true  - Verification passed.
 * false - Token was rejected.
 *
 * Throws when the service or configuration fails.
 */
export async function verifyTurnstileToken(
  token: string
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    throw new Error("Turnstile secret key is missing.");
  }

  // Never use test credentials on a live website.
  if (
    process.env.NODE_ENV === "production" &&
    secret === TEST_SECRET
  ) {
    throw new Error(
      "Test Turnstile credentials cannot be used in production."
    );
  }

  // Cloudflare expects form-encoded data.
  const body = new URLSearchParams({
    secret,
    response: token,
  });

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded",
      },
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    }
  );

  if (!response.ok) {
    throw new Error("Cloudflare verification unavailable.");
  }

  const result =
    (await response.json()) as TurnstileResult;

  if (!result.success) {
    return false;
  }

  // Only allow tokens from our real portfolio hostname.
  if (process.env.NODE_ENV === "production") {
    const expectedHostname =
      process.env.TURNSTILE_EXPECTED_HOSTNAME;

    if (
      !expectedHostname ||
      result.hostname !== expectedHostname
    ) {
      return false;
    }
  }

  return true;
}
