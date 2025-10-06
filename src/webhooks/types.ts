/**
 * Plain Webhook Types
 * Based on https://core-api.uk.plain.com/webhooks/schema/latest.json
 */

// Event Type Enum
export type WebhookEventType =
  | 'thread.thread_created'
  | 'thread.thread_status_transitioned'
  | 'thread.thread_assignment_transitioned'
  | 'thread.email_received'
  | 'thread.email_sent'
  | 'thread.slack_message_received'
  | 'thread.slack_message_sent'
  | 'thread.slack_message_updated'
  | 'thread.discord_message_received'
  | 'thread.discord_message_sent'
  | 'thread.discord_message_updated'
  | 'thread.ms_teams_message_sent'
  | 'thread.ms_teams_message_received'
  | 'thread.chat_sent'
  | 'thread.chat_received'
  | 'thread.note_created'
  | 'thread.thread_labels_changed'
  | 'thread.thread_priority_changed'
  | 'thread.thread_field_created'
  | 'thread.thread_field_updated'
  | 'thread.thread_field_deleted'
  | 'thread.service_level_agreement_status_transitioned'
  | 'customer.customer_created'
  | 'customer.customer_updated'
  | 'customer.customer_deleted'
  | 'customer.customer_changed'
  | 'customer.customer_group_changed'
  | 'customer.customer_group_memberships_changed'
  | 'timeline.timeline_entry_changed';

// Webhook Metadata
export interface WebhookMetadata {
  /**
   * The ID of the webhook target this webhook request is being sent to
   */
  webhookTargetId: string;

  /**
   * The version of the webhook target this webhook request is being sent to
   */
  webhookTargetVersion: string;

  /**
   * The ID of the delivery attempt. It will be different on every delivery attempt
   */
  webhookDeliveryAttemptId: string;

  /**
   * The current delivery attempt number (starts at 1)
   */
  webhookDeliveryAttemptNumber: string;

  /**
   * The time at which the delivery attempt was made
   */
  webhookDeliveryAttemptTimestamp: string;
}

// Main Webhook Request Interface
export interface WebhookRequest {
  /**
   * The ID of the Plain event. It remains the same across all delivery attempts
   */
  id: string;

  /**
   * The Plain event's type
   */
  type: WebhookEventType;

  /**
   * Metadata associated with the webhook request
   */
  webhookMetadata: WebhookMetadata;

  /**
   * The Plain event's timestamp (ISO8601 format)
   */
  timestamp: string;

  /**
   * The ID of the workspace where the Plain event originated
   */
  workspaceId: string;

  /**
   * The Plain event's payload - use type to narrow the payload shape
   */
  payload: Record<string, any>;
}

// Type-safe webhook event handlers
export type WebhookHandler = (
  event: WebhookRequest
) => void | Promise<void>;
