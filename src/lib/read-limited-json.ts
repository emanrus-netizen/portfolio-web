
import "server-only";

export class PayloadTooLargeError extends Error {
  constructor() {
    super("Request body is too large.");
    this.name = "PayloadTooLargeError";
  }
}

/**
 * Reads JSON without allowing an unlimited body size.
 *
 * We count incoming bytes BEFORE parsing JSON.
 * This protects the application from unnecessarily
 * reading very large request bodies.
 */
export async function readLimitedJson(
  request: Request,
  maxBytes = 32_768
): Promise<unknown> {
  const reader = request.body?.getReader();

  if (!reader) {
    throw new SyntaxError("Missing request body.");
  }

  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      totalBytes += value.byteLength;

      if (totalBytes > maxBytes) {
        await reader.cancel().catch(() => {});
        throw new PayloadTooLargeError();
      }

      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  // Combine the accepted chunks into one byte array.
  const bytes = new Uint8Array(totalBytes);
  let offset = 0;

  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  // Decode UTF-8 and parse JSON.
  return JSON.parse(
    new TextDecoder("utf-8", { fatal: true }).decode(bytes)
  );
}
