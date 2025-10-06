// Verify that webhook utilities are properly exported
const sdk = require('../../dist/index.js');

if (!sdk.verifyWebhookSignature) {
  throw new Error('verifyWebhookSignature not exported');
}

if (!sdk.generateWebhookSignature) {
  throw new Error('generateWebhookSignature not exported');
}

console.log('✅ Webhook utilities exported correctly');
