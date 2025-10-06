/**
 * Plain Webhooks Module
 *
 * This module provides utilities for handling Plain webhooks, including:
 * - Type-safe webhook event types and payloads
 * - Signature verification using HMAC-SHA256
 * - Helper functions for webhook processing
 *
 * @example
 * ```typescript
 * import { verifyWebhookSignature, type WebhookRequest } from '@team-plain/typescript-sdk';
 *
 * // Verify webhook signature
 * const isValid = verifyWebhookSignature({
 *   body: JSON.stringify(req.body),
 *   signature: req.headers['plain-request-signature'],
 *   secret: process.env.PLAIN_HMAC_SECRET
 * });
 *
 * // Type-safe webhook handling
 * const webhook: WebhookRequest = req.body;
 * if (webhook.type === 'thread.thread_created') {
 *   console.log('New thread:', webhook.payload.thread.title);
 * }
 * ```
 *
 * @see https://www.plain.com/docs/webhooks
 * @see https://www.plain.com/docs/request-signing
 */

export * from './types';
export * from './verify';
