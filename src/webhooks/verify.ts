import { createHmac, timingSafeEqual } from 'crypto';

/**
 * Options for verifying a webhook signature
 */
export interface VerifyWebhookSignatureOptions {
  /**
   * The raw request body as a string or Buffer
   */
  body: string | Buffer;

  /**
   * The signature from the Plain-Request-Signature header
   */
  signature: string;

  /**
   * Your workspace's HMAC secret key from Settings → Request signing
   */
  secret: string;
}

/**
 * Verifies the authenticity of a Plain webhook request using HMAC-SHA256 signature verification.
 *
 * Plain signs all webhook requests with an HMAC-SHA256 signature using your workspace's secret key.
 * This function verifies that the signature in the `Plain-Request-Signature` header matches
 * the expected signature for the request body.
 *
 * @param options - Verification options including body, signature, and secret
 * @returns `true` if the signature is valid, `false` otherwise
 *
 * @example
 * ```typescript
 * import { verifyWebhookSignature } from '@team-plain/typescript-sdk';
 *
 * // In your webhook handler (e.g., Express)
 * app.post('/webhooks/plain', (req, res) => {
 *   const signature = req.headers['plain-request-signature'] as string;
 *   const body = JSON.stringify(req.body);
 *   const secret = process.env.PLAIN_HMAC_SECRET!;
 *
 *   const isValid = verifyWebhookSignature({
 *     body,
 *     signature,
 *     secret
 *   });
 *
 *   if (!isValid) {
 *     return res.status(403).send('Invalid signature');
 *   }
 *
 *   // Process the webhook...
 *   res.status(200).send('OK');
 * });
 * ```
 *
 * @see https://www.plain.com/docs/request-signing
 */
export function verifyWebhookSignature(options: VerifyWebhookSignatureOptions): boolean {
  const { body, signature, secret } = options;

  if (!signature || !secret) {
    return false;
  }

  try {
    // Ensure body is a string for HMAC computation
    const bodyString = typeof body === 'string' ? body : body.toString('utf8');

    // Compute the expected signature using HMAC-SHA256
    const expectedSignature = createHmac('sha256', secret)
      .update(bodyString)
      .digest('hex');

    // Use timing-safe comparison to prevent timing attacks
    const signatureBuffer = Buffer.from(signature, 'utf8');
    const expectedBuffer = Buffer.from(expectedSignature, 'utf8');

    // Ensure both buffers are the same length before comparison
    if (signatureBuffer.length !== expectedBuffer.length) {
      return false;
    }

    return timingSafeEqual(signatureBuffer, expectedBuffer);
  } catch (error) {
    // If any error occurs during verification, treat as invalid
    return false;
  }
}

/**
 * Generates an HMAC-SHA256 signature for a given body and secret.
 * This is primarily used for testing webhook signature verification.
 *
 * @param body - The request body to sign
 * @param secret - The HMAC secret key
 * @returns The hexadecimal signature string
 *
 * @example
 * ```typescript
 * const signature = generateWebhookSignature(
 *   JSON.stringify(webhookBody),
 *   'your-hmac-secret'
 * );
 * ```
 */
export function generateWebhookSignature(body: string | Buffer, secret: string): string {
  const bodyString = typeof body === 'string' ? body : body.toString('utf8');

  return createHmac('sha256', secret)
    .update(bodyString)
    .digest('hex');
}
