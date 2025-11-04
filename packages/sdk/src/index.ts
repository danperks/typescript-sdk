// Export main client
export { PlainClient } from './client';

// Export base classes from generated SDK
export { Request, Connection, PlainConnection } from './_generated_sdk';

// Export types
export type { Context } from './context';
export type { PlainSDKError } from './error';
export type { Result } from './result';
export type { PlainRequest, PlainFetch, PlainConnectionVariables } from './_generated_sdk';

// Export webhooks
export * from './webhooks';

// Re-export all generated types and models
// Note: Some operations may be duplicated between documents and sdk, using sdk version
export type * from './_generated_documents';
export * from './_generated_sdk';
