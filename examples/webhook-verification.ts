import {
	type WebhookRequest,
	verifyWebhookSignature,
	generateWebhookSignature,
} from "../src";

/**
 * Example: Webhook Signature Verification and Type-Safe Event Handling
 *
 * This example demonstrates how to verify webhook signatures and handle events
 * from Plain with full type safety.
 *
 * See the README for detailed integration guides with Express, Next.js, and other frameworks.
 *
 * Usage:
 *   export PLAIN_HMAC_SECRET="your-hmac-secret"
 *   npx tsx examples/webhook-verification.ts
 */

if (!process.env.PLAIN_HMAC_SECRET) {
	console.log("Set PLAIN_HMAC_SECRET environment variable to run this example.");
	console.log('Example: export PLAIN_HMAC_SECRET="your-hmac-secret"\n');
	process.exit(0);
}

// Example webhook payload
const testWebhook: WebhookRequest = {
	id: "evt_01JXAMPLE123456789",
	type: "thread.thread_created",
	timestamp: new Date().toISOString(),
	workspaceId: "w_01JXAMPLE123456789",
	webhookMetadata: {
		webhookTargetId: "wht_01JXAMPLE123456789",
		webhookTargetVersion: "1",
		webhookDeliveryAttemptId: "wda_01JXAMPLE123456789",
		webhookDeliveryAttemptNumber: "1",
		webhookDeliveryAttemptTimestamp: new Date().toISOString(),
	},
	payload: {
		thread: {
			id: "th_01JXAMPLE123456789",
			title: "Example Thread",
			priority: 2,
		},
	},
};

const secret = process.env.PLAIN_HMAC_SECRET;
const body = JSON.stringify(testWebhook);

// Generate a signature for the webhook body
const signature = generateWebhookSignature(body, secret);
console.log("Generated signature:", signature.substring(0, 32) + "...\n");

// Verify the signature (should pass)
const isValid = verifyWebhookSignature({ body, signature, secret });
console.log("✅ Signature verification:", isValid ? "PASSED" : "FAILED");

// Verify with wrong secret (should fail)
const isInvalid = verifyWebhookSignature({
	body,
	signature,
	secret: "wrong-secret",
});
console.log("✅ Wrong secret detection:", !isInvalid ? "PASSED" : "FAILED");

// Type-safe event handling
console.log("\n--- Event Handling Example ---\n");

function handleWebhook(webhook: WebhookRequest) {
	console.log(`Event: ${webhook.type}`);
	console.log(`Event ID: ${webhook.id}`);
	console.log(`Workspace: ${webhook.workspaceId}`);

	switch (webhook.type) {
		case "thread.thread_created":
			console.log(`Thread created: ${webhook.payload.thread.title}`);
			break;
		case "customer.customer_created":
			console.log(`Customer created: ${webhook.payload.customer.fullName}`);
			break;
		case "thread.email_received":
			console.log(`Email received from: ${webhook.payload.email.from.email}`);
			break;
		default:
			console.log("Unhandled event type");
	}
}

handleWebhook(testWebhook);

console.log("\n📚 See README.md for integration examples with Express, Next.js, and more.");
