/* THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. */

import type { VariablesOf, ResultOf } from '@graphql-typed-document-node/core';
import type { Context } from './context';
import type { PlainSDKError } from './error';
import {
  AcceptWorkspaceInviteDocument,
  ActiveThreadClusterDocument,
  AddAdditionalAssigneesDocument,
  AddCustomerToCustomerGroupsDocument,
  AddCustomerToTenantsDocument,
  AddGeneratedReplyDocument,
  AddLabelsDocument,
  AddLabelsToUserDocument,
  AddMembersToTierDocument,
  AddUserToActiveBillingRotaDocument,
  AddWorkspaceAlternateSupportEmailAddressDocument,
  ArchiveLabelTypeDocument,
  AssignRolesToUserDocument,
  AssignThreadDocument,
  AutoresponderDocument,
  AutorespondersDocument,
  BillingPlansDocument,
  BulkJoinSlackChannelsDocument,
  BulkUpsertThreadFieldsDocument,
  BusinessHoursDocument,
  BusinessHoursSlotsDocument,
  CalculateRoleChangeCostDocument,
  ChangeBillingPlanDocument,
  ChangeThreadCustomerDocument,
  ChangeThreadPriorityDocument,
  ChangeUserStatusDocument,
  ChatAppDocument,
  ChatAppSecretDocument,
  ChatAppsDocument,
  CompaniesDocument,
  CompanyDocument,
  CompleteServiceAuthorizationDocument,
  ConnectedDiscordChannelsDocument,
  ConnectedMsTeamsChannelsDocument,
  ConnectedSlackChannelDocument,
  ConnectedSlackChannelsDocument,
  CreateAiFeatureFeedbackDocument,
  CreateApiKeyDocument,
  CreateAttachmentDownloadUrlDocument,
  CreateAttachmentUploadUrlDocument,
  CreateAutoresponderDocument,
  CreateBillingPortalSessionDocument,
  CreateChatAppDocument,
  CreateChatAppSecretDocument,
  CreateCheckoutSessionDocument,
  CreateCustomRoleDocument,
  CreateCustomerCardConfigDocument,
  CreateCustomerEventDocument,
  CreateCustomerGroupDocument,
  CreateCustomerSurveyDocument,
  CreateEmailPreviewUrlDocument,
  CreateEscalationPathDocument,
  CreateGithubUserAuthIntegrationDocument,
  CreateHelpCenterArticleGroupDocument,
  CreateHelpCenterDocument,
  CreateIndexedDocumentDocument,
  CreateIssueTrackerIssueDocument,
  CreateKnowledgeSourceDocument,
  CreateLabelTypeDocument,
  CreateMachineUserDocument,
  CreateMyFavoritePageDocument,
  CreateMyLinearIntegrationDocument,
  CreateMyMsTeamsIntegrationDocument,
  CreateMySlackIntegrationDocument,
  CreateNoteDocument,
  CreateSavedThreadsViewDocument,
  CreateServiceLevelAgreementDocument,
  CreateSnippetDocument,
  CreateThreadChannelAssociationDocument,
  CreateThreadDiscussionDocument,
  CreateThreadDocument,
  CreateThreadEventDocument,
  CreateThreadFieldSchemaDocument,
  CreateThreadLinkDocument,
  CreateTierDocument,
  CreateUserAccountDocument,
  CreateUserAuthDiscordChannelIntegrationDocument,
  CreateUserAuthSlackIntegrationDocument,
  CreateWebhookTargetDocument,
  CreateWorkflowRuleDocument,
  CreateWorkspaceCursorIntegrationDocument,
  CreateWorkspaceDiscordChannelIntegrationDocument,
  CreateWorkspaceDiscordIntegrationDocument,
  CreateWorkspaceDocument,
  CreateWorkspaceEmailDomainSettingsDocument,
  CreateWorkspaceFileUploadUrlDocument,
  CreateWorkspaceMsTeamsIntegrationDocument,
  CreateWorkspaceSlackChannelIntegrationDocument,
  CreateWorkspaceSlackIntegrationDocument,
  CursorRepositoriesDocument,
  CustomRoleDocument,
  CustomRolesDocument,
  CustomerByEmailDocument,
  CustomerByExternalIdDocument,
  CustomerCardConfigDocument,
  CustomerCardConfigsDocument,
  CustomerCardInstancesDocument,
  CustomerDocument,
  CustomerGroupDocument,
  CustomerGroupsDocument,
  CustomerSurveyDocument,
  CustomerSurveysDocument,
  CustomersDocument,
  DeleteApiKeyDocument,
  DeleteAutoresponderDocument,
  DeleteBusinessHoursDocument,
  DeleteChatAppDocument,
  DeleteChatAppSecretDocument,
  DeleteCompanyDocument,
  DeleteCustomRoleDocument,
  DeleteCustomerCardConfigDocument,
  DeleteCustomerDocument,
  DeleteCustomerGroupDocument,
  DeleteCustomerSurveyDocument,
  DeleteEscalationPathDocument,
  DeleteGithubUserAuthIntegrationDocument,
  DeleteHelpCenterArticleDocument,
  DeleteHelpCenterArticleGroupDocument,
  DeleteHelpCenterDocument,
  DeleteKnowledgeSourceDocument,
  DeleteMachineUserDocument,
  DeleteMyFavoritePageDocument,
  DeleteMyLinearIntegrationDocument,
  DeleteMyMsTeamsIntegrationDocument,
  DeleteMyServiceAuthorizationDocument,
  DeleteMySlackIntegrationDocument,
  DeleteNoteDocument,
  DeleteSavedThreadsViewDocument,
  DeleteServiceAuthorizationDocument,
  DeleteServiceLevelAgreementDocument,
  DeleteSnippetDocument,
  DeleteTenantDocument,
  DeleteTenantFieldDocument,
  DeleteTenantFieldSchemaDocument,
  DeleteThreadChannelAssociationDocument,
  DeleteThreadDocument,
  DeleteThreadFieldDocument,
  DeleteThreadFieldSchemaDocument,
  DeleteThreadLinkDocument,
  DeleteTierDocument,
  DeleteUserAuthDiscordChannelIntegrationDocument,
  DeleteUserAuthSlackIntegrationDocument,
  DeleteUserDocument,
  DeleteWebhookTargetDocument,
  DeleteWorkflowRuleDocument,
  DeleteWorkspaceCursorIntegrationDocument,
  DeleteWorkspaceDiscordChannelIntegrationDocument,
  DeleteWorkspaceDiscordIntegrationDocument,
  DeleteWorkspaceEmailDomainSettingsDocument,
  DeleteWorkspaceFileDocument,
  DeleteWorkspaceInviteDocument,
  DeleteWorkspaceMsTeamsIntegrationDocument,
  DeleteWorkspaceSlackChannelIntegrationDocument,
  DeleteWorkspaceSlackIntegrationDocument,
  EscalateThreadDocument,
  EscalationPathDocument,
  EscalationPathsDocument,
  ForkThreadDocument,
  GenerateHelpCenterArticleDocument,
  GeneratedRepliesDocument,
  GetMsTeamsMembersForChannelDocument,
  GithubUserAuthIntegrationDocument,
  HeatmapMetricDocument,
  HelpCenterArticleBySlugDocument,
  HelpCenterArticleDocument,
  HelpCenterArticleGroupBySlugDocument,
  HelpCenterArticleGroupDocument,
  HelpCenterDocument,
  HelpCenterIndexDocument,
  HelpCentersDocument,
  IndexedDocumentsDocument,
  InviteUserToWorkspaceDocument,
  IssueTrackerFieldsDocument,
  KnowledgeSourceDocument,
  KnowledgeSourcesDocument,
  LabelTypeDocument,
  LabelTypesDocument,
  MachineUserDocument,
  MachineUsersDocument,
  MarkCustomerAsSpamDocument,
  MarkThreadAsDoneDocument,
  MarkThreadAsTodoDocument,
  MarkThreadDiscussionAsResolvedDocument,
  MoveLabelTypeDocument,
  MyBillingRotaDocument,
  MyBillingSubscriptionDocument,
  MyEmailSignatureDocument,
  MyFavoritePagesDocument,
  MyJiraIntegrationTokenDocument,
  MyLinearInstallationInfoDocument,
  MyLinearIntegrationDocument,
  MyLinearIntegrationTokenDocument,
  MyMachineUserDocument,
  MyMsTeamsInstallationInfoDocument,
  MyMsTeamsIntegrationDocument,
  MyPaymentMethodDocument,
  MyPermissionsDocument,
  MySlackInstallationInfoDocument,
  MySlackIntegrationDocument,
  MyUserAccountDocument,
  MyUserDocument,
  MyWorkspaceDocument,
  MyWorkspaceInvitesDocument,
  MyWorkspacesDocument,
  PermissionsDocument,
  PreviewBillingPlanChangeDocument,
  RefreshConnectedDiscordChannelsDocument,
  RefreshWorkspaceSlackChannelIntegrationDocument,
  RegenerateWorkspaceHmacDocument,
  RelatedThreadsDocument,
  ReloadCustomerCardInstanceDocument,
  RemoveAdditionalAssigneesDocument,
  RemoveCustomerFromCustomerGroupsDocument,
  RemoveCustomerFromTenantsDocument,
  RemoveLabelsDocument,
  RemoveLabelsFromUserDocument,
  RemoveMembersFromTierDocument,
  RemoveTenantFieldSchemaMappingDocument,
  RemoveUserFromActiveBillingRotaDocument,
  RemoveWorkspaceAlternateSupportEmailAddressDocument,
  ReorderAutorespondersDocument,
  ReorderCustomerCardConfigsDocument,
  ReorderCustomerSurveysDocument,
  ReorderThreadFieldSchemasDocument,
  ReplyToEmailDocument,
  ReplyToThreadDocument,
  ResolveCustomerForMsTeamsChannelDocument,
  ResolveCustomerForSlackChannelDocument,
  RolesDocument,
  SavedThreadsViewDocument,
  SavedThreadsViewsDocument,
  SearchCompaniesDocument,
  SearchCustomersDocument,
  SearchKnowledgeSourcesDocument,
  SearchSlackUsersDocument,
  SearchTenantsDocument,
  SearchThreadLinkCandidatesDocument,
  SearchThreadSlackUsersDocument,
  SearchThreadsDocument,
  SendBulkEmailDocument,
  SendChatDocument,
  SendCustomerChatDocument,
  SendDiscordMessageDocument,
  SendMsTeamsMessageDocument,
  SendNewEmailDocument,
  SendSlackMessageDocument,
  SendThreadDiscussionMessageDocument,
  ServiceAuthorizationDocument,
  ServiceAuthorizationsDocument,
  SetCustomerTenantsDocument,
  SettingDocument,
  SetupTenantFieldSchemaMappingDocument,
  ShareThreadToUserInSlackDocument,
  SingleValueMetricDocument,
  SlackUserDocument,
  SnippetDocument,
  SnippetsDocument,
  SnoozeThreadDocument,
  StartServiceAuthorizationDocument,
  SubscriptionEventTypesDocument,
  SyncBusinessHoursSlotsDocument,
  TenantDocument,
  TenantFieldSchemasDocument,
  TenantsDocument,
  ThreadByExternalIdDocument,
  ThreadByRefDocument,
  ThreadClusterDocument,
  ThreadClustersDocument,
  ThreadClustersPaginatedDocument,
  ThreadDiscussionDocument,
  ThreadDocument,
  ThreadFieldSchemaDocument,
  ThreadFieldSchemasDocument,
  ThreadLinkGroupsDocument,
  ThreadSlackUserDocument,
  ThreadsDocument,
  TierDocument,
  TiersDocument,
  TimeSeriesMetricDocument,
  TimelineEntriesDocument,
  TimelineEntryDocument,
  ToggleSlackMessageReactionDocument,
  ToggleWorkflowRulePublishedDocument,
  UnarchiveLabelTypeDocument,
  UnassignThreadDocument,
  UnmarkCustomerAsSpamDocument,
  UpdateActiveBillingRotaDocument,
  UpdateApiKeyDocument,
  UpdateAutoresponderDocument,
  UpdateChatAppDocument,
  UpdateCompanyTierDocument,
  UpdateConnectedDiscordChannelDocument,
  UpdateConnectedSlackChannelDocument,
  UpdateCustomRoleDocument,
  UpdateCustomerCardConfigDocument,
  UpdateCustomerCompanyDocument,
  UpdateCustomerGroupDocument,
  UpdateCustomerSurveyDocument,
  UpdateEscalationPathDocument,
  UpdateGeneratedReplyDocument,
  UpdateHelpCenterArticleGroupDocument,
  UpdateHelpCenterCustomDomainNameDocument,
  UpdateHelpCenterDocument,
  UpdateHelpCenterIndexDocument,
  UpdateLabelTypeDocument,
  UpdateMachineUserDocument,
  UpdateMyUserDocument,
  UpdateSavedThreadsViewDocument,
  UpdateServiceLevelAgreementDocument,
  UpdateSettingDocument,
  UpdateSnippetDocument,
  UpdateTenantTierDocument,
  UpdateThreadEscalationPathDocument,
  UpdateThreadFieldSchemaDocument,
  UpdateThreadTenantDocument,
  UpdateThreadTierDocument,
  UpdateThreadTitleDocument,
  UpdateTierDocument,
  UpdateUserDefaultSavedThreadsViewDocument,
  UpdateWebhookTargetDocument,
  UpdateWorkflowRuleDocument,
  UpdateWorkspaceDocument,
  UpdateWorkspaceEmailSettingsDocument,
  UpsertBusinessHoursDocument,
  UpsertCompanyDocument,
  UpsertCustomerDocument,
  UpsertCustomerGroupDocument,
  UpsertHelpCenterArticleDocument,
  UpsertMyEmailSignatureDocument,
  UpsertRoleScopesDocument,
  UpsertTenantDocument,
  UpsertTenantFieldDocument,
  UpsertTenantFieldSchemaDocument,
  UpsertThreadFieldDocument,
  UserAuthDiscordChannelInstallationInfoDocument,
  UserAuthDiscordChannelIntegrationDocument,
  UserAuthDiscordChannelIntegrationsDocument,
  UserAuthSlackInstallationInfoDocument,
  UserAuthSlackIntegrationByThreadIdDocument,
  UserAuthSlackIntegrationDocument,
  UserByEmailDocument,
  UserDocument,
  UserSlackChannelMembershipsDocument,
  UsersDocument,
  VerifyHelpCenterCustomDomainNameDocument,
  VerifyWorkspaceEmailDnsSettingsDocument,
  VerifyWorkspaceEmailForwardingSettingsDocument,
  WebhookTargetDocument,
  WebhookTargetsDocument,
  WebhookVersionsDocument,
  WorkflowRuleDocument,
  WorkflowRulesDocument,
  WorkspaceChatSettingsDocument,
  WorkspaceCursorIntegrationDocument,
  WorkspaceDiscordChannelInstallationInfoDocument,
  WorkspaceDiscordChannelIntegrationDocument,
  WorkspaceDiscordChannelIntegrationsDocument,
  WorkspaceDiscordIntegrationDocument,
  WorkspaceDiscordIntegrationsDocument,
  WorkspaceDocument,
  WorkspaceEmailSettingsDocument,
  WorkspaceHmacDocument,
  WorkspaceInvitesDocument,
  WorkspaceMsTeamsInstallationInfoDocument,
  WorkspaceMsTeamsIntegrationDocument,
  WorkspaceSlackChannelInstallationInfoDocument,
  WorkspaceSlackChannelIntegrationDocument,
  WorkspaceSlackChannelIntegrationsDocument,
  WorkspaceSlackInstallationInfoDocument,
  WorkspaceSlackIntegrationDocument,
  WorkspaceSlackIntegrationsDocument,
  type PageInfoPartsFragment,
  type UpsertResult,
} from './graphql/types';
import { request } from './request';
import type { Result } from './result';

type SDKResult<T> = Promise<Result<T, PlainSDKError>>;

function nonNullable<T>(x: T | null | undefined): T {
  if (x === null || x === undefined) {
    throw new Error('Expected value to be non nullable');
  }
  return x;
}

function unwrapData<T, X>(
  result: Result<T, PlainSDKError>,
  unwrapFn: (data: T) => X
): Result<X, PlainSDKError> {
  if (result.error) {
    return { error: result.error };
  }
  return { data: unwrapFn(result.data) };
}

export class PlainClientGenerated {
  #ctx: Context;

  constructor(ctx: Context) {
    this.#ctx = ctx;
  }

  /**
   * get My User Account
   */
  async getMyUserAccount(): SDKResult<ResultOf<typeof MyUserAccountDocument>['myUserAccount']> {
    const res = await request(this.#ctx, {
      query: MyUserAccountDocument,
      
    });

    return unwrapData(res, (q) => q.myUserAccount);
  }

  /**
   * get My User
   */
  async getMyUser(): SDKResult<ResultOf<typeof MyUserDocument>['myUser']> {
    const res = await request(this.#ctx, {
      query: MyUserDocument,
      
    });

    return unwrapData(res, (q) => q.myUser);
  }

  /**
   * get My Machine User
   */
  async getMyMachineUser(): SDKResult<ResultOf<typeof MyMachineUserDocument>['myMachineUser']> {
    const res = await request(this.#ctx, {
      query: MyMachineUserDocument,
      
    });

    return unwrapData(res, (q) => q.myMachineUser);
  }

  /**
   * get My Workspace
   */
  async getMyWorkspace(): SDKResult<ResultOf<typeof MyWorkspaceDocument>['myWorkspace']> {
    const res = await request(this.#ctx, {
      query: MyWorkspaceDocument,
      
    });

    return unwrapData(res, (q) => q.myWorkspace);
  }

  /**
   * get My Permissions
   */
  async getMyPermissions(): SDKResult<ResultOf<typeof MyPermissionsDocument>['myPermissions']> {
    const res = await request(this.#ctx, {
      query: MyPermissionsDocument,
      
    });

    return unwrapData(res, (q) => q.myPermissions);
  }

  /**
   * get My Workspaces
   */
  async getMyWorkspaces(
    variables: VariablesOf<typeof MyWorkspacesDocument>
  ): SDKResult<{
    myWorkspaces: ResultOf<typeof MyWorkspacesDocument>['myWorkspaces']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: MyWorkspacesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      myWorkspaces: q.myWorkspaces.edges.map((edge) => edge.node),
      pageInfo: q.myWorkspaces.pageInfo,
    }));
  }

  /**
   * get My Workspace Invites
   */
  async getMyWorkspaceInvites(
    variables: VariablesOf<typeof MyWorkspaceInvitesDocument>
  ): SDKResult<{
    myWorkspaceInvites: ResultOf<typeof MyWorkspaceInvitesDocument>['myWorkspaceInvites']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: MyWorkspaceInvitesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      myWorkspaceInvites: q.myWorkspaceInvites.edges.map((edge) => edge.node),
      pageInfo: q.myWorkspaceInvites.pageInfo,
    }));
  }

  /**
   * get My Slack Integration
   */
  async getMySlackIntegration(): SDKResult<ResultOf<typeof MySlackIntegrationDocument>['mySlackIntegration']> {
    const res = await request(this.#ctx, {
      query: MySlackIntegrationDocument,
      
    });

    return unwrapData(res, (q) => q.mySlackIntegration);
  }

  /**
   * get My Slack Installation Info
   */
  async getMySlackInstallationInfo(
    variables: VariablesOf<typeof MySlackInstallationInfoDocument>
  ): SDKResult<ResultOf<typeof MySlackInstallationInfoDocument>['mySlackInstallationInfo']> {
    const res = await request(this.#ctx, {
      query: MySlackInstallationInfoDocument,
      variables,
    });

    return unwrapData(res, (q) => q.mySlackInstallationInfo);
  }

  /**
   * get My Linear Integration
   */
  async getMyLinearIntegration(): SDKResult<ResultOf<typeof MyLinearIntegrationDocument>['myLinearIntegration']> {
    const res = await request(this.#ctx, {
      query: MyLinearIntegrationDocument,
      
    });

    return unwrapData(res, (q) => q.myLinearIntegration);
  }

  /**
   * get My Linear Installation Info
   */
  async getMyLinearInstallationInfo(
    variables: VariablesOf<typeof MyLinearInstallationInfoDocument>
  ): SDKResult<ResultOf<typeof MyLinearInstallationInfoDocument>['myLinearInstallationInfo']> {
    const res = await request(this.#ctx, {
      query: MyLinearInstallationInfoDocument,
      variables,
    });

    return unwrapData(res, (q) => q.myLinearInstallationInfo);
  }

  /**
   * get My Linear Integration Token
   */
  async getMyLinearIntegrationToken(): SDKResult<ResultOf<typeof MyLinearIntegrationTokenDocument>['myLinearIntegrationToken']> {
    const res = await request(this.#ctx, {
      query: MyLinearIntegrationTokenDocument,
      
    });

    return unwrapData(res, (q) => q.myLinearIntegrationToken);
  }

  /**
   * get Github User Auth Integration
   */
  async getGithubUserAuthIntegration(): SDKResult<ResultOf<typeof GithubUserAuthIntegrationDocument>['githubUserAuthIntegration']> {
    const res = await request(this.#ctx, {
      query: GithubUserAuthIntegrationDocument,
      
    });

    return unwrapData(res, (q) => q.githubUserAuthIntegration);
  }

  /**
   * get Workspace Cursor Integration
   */
  async getWorkspaceCursorIntegration(): SDKResult<ResultOf<typeof WorkspaceCursorIntegrationDocument>['workspaceCursorIntegration']> {
    const res = await request(this.#ctx, {
      query: WorkspaceCursorIntegrationDocument,
      
    });

    return unwrapData(res, (q) => q.workspaceCursorIntegration);
  }

  /**
   * get Cursor Repositories
   */
  async getCursorRepositories(
    variables: VariablesOf<typeof CursorRepositoriesDocument>
  ): SDKResult<ResultOf<typeof CursorRepositoriesDocument>['cursorRepositories']> {
    const res = await request(this.#ctx, {
      query: CursorRepositoriesDocument,
      variables,
    });

    return unwrapData(res, (q) => q.cursorRepositories);
  }

  /**
   * get My Jira Integration Token
   */
  async getMyJiraIntegrationToken(): SDKResult<ResultOf<typeof MyJiraIntegrationTokenDocument>['myJiraIntegrationToken']> {
    const res = await request(this.#ctx, {
      query: MyJiraIntegrationTokenDocument,
      
    });

    return unwrapData(res, (q) => q.myJiraIntegrationToken);
  }

  /**
   * get My Email Signature
   */
  async getMyEmailSignature(): SDKResult<ResultOf<typeof MyEmailSignatureDocument>['myEmailSignature']> {
    const res = await request(this.#ctx, {
      query: MyEmailSignatureDocument,
      
    });

    return unwrapData(res, (q) => q.myEmailSignature);
  }

  /**
   * get My Favorite Pages
   */
  async getMyFavoritePages(
    variables: VariablesOf<typeof MyFavoritePagesDocument>
  ): SDKResult<{
    myFavoritePages: ResultOf<typeof MyFavoritePagesDocument>['myFavoritePages']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: MyFavoritePagesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      myFavoritePages: q.myFavoritePages.edges.map((edge) => edge.node),
      pageInfo: q.myFavoritePages.pageInfo,
    }));
  }

  /**
   * get Billing Plans
   */
  async getBillingPlans(
    variables: VariablesOf<typeof BillingPlansDocument>
  ): SDKResult<{
    billingPlans: ResultOf<typeof BillingPlansDocument>['billingPlans']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: BillingPlansDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      billingPlans: q.billingPlans.edges.map((edge) => edge.node),
      pageInfo: q.billingPlans.pageInfo,
    }));
  }

  /**
   * get My Billing Subscription
   */
  async getMyBillingSubscription(): SDKResult<ResultOf<typeof MyBillingSubscriptionDocument>['myBillingSubscription']> {
    const res = await request(this.#ctx, {
      query: MyBillingSubscriptionDocument,
      
    });

    return unwrapData(res, (q) => q.myBillingSubscription);
  }

  /**
   * get My Billing Rota
   */
  async getMyBillingRota(): SDKResult<ResultOf<typeof MyBillingRotaDocument>['myBillingRota']> {
    const res = await request(this.#ctx, {
      query: MyBillingRotaDocument,
      
    });

    return unwrapData(res, (q) => q.myBillingRota);
  }

  /**
   * get My Payment Method
   */
  async getMyPaymentMethod(): SDKResult<ResultOf<typeof MyPaymentMethodDocument>['myPaymentMethod']> {
    const res = await request(this.#ctx, {
      query: MyPaymentMethodDocument,
      
    });

    return unwrapData(res, (q) => q.myPaymentMethod);
  }

  /**
   * get Label Types
   */
  async getLabelTypes(
    variables: VariablesOf<typeof LabelTypesDocument>
  ): SDKResult<{
    labelTypes: ResultOf<typeof LabelTypesDocument>['labelTypes']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: LabelTypesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      labelTypes: q.labelTypes.edges.map((edge) => edge.node),
      pageInfo: q.labelTypes.pageInfo,
    }));
  }

  /**
   * get Label Type
   */
  async getLabelType(
    variables: VariablesOf<typeof LabelTypeDocument>
  ): SDKResult<ResultOf<typeof LabelTypeDocument>['labelType']> {
    const res = await request(this.#ctx, {
      query: LabelTypeDocument,
      variables,
    });

    return unwrapData(res, (q) => q.labelType);
  }

  /**
   * get Roles
   */
  async getRoles(
    variables: VariablesOf<typeof RolesDocument>
  ): SDKResult<{
    roles: ResultOf<typeof RolesDocument>['roles']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: RolesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      roles: q.roles.edges.map((edge) => edge.node),
      pageInfo: q.roles.pageInfo,
    }));
  }

  /**
   * get Custom Roles
   */
  async getCustomRoles(
    variables: VariablesOf<typeof CustomRolesDocument>
  ): SDKResult<{
    customRoles: ResultOf<typeof CustomRolesDocument>['customRoles']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: CustomRolesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      customRoles: q.customRoles.edges.map((edge) => edge.node),
      pageInfo: q.customRoles.pageInfo,
    }));
  }

  /**
   * get Custom Role
   */
  async getCustomRole(
    variables: VariablesOf<typeof CustomRoleDocument>
  ): SDKResult<ResultOf<typeof CustomRoleDocument>['customRole']> {
    const res = await request(this.#ctx, {
      query: CustomRoleDocument,
      variables,
    });

    return unwrapData(res, (q) => q.customRole);
  }

  /**
   * get Timeline Entries
   */
  async getTimelineEntries(
    variables: VariablesOf<typeof TimelineEntriesDocument>
  ): SDKResult<{
    timelineEntries: ResultOf<typeof TimelineEntriesDocument>['timelineEntries']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: TimelineEntriesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      timelineEntries: q.timelineEntries.edges.map((edge) => edge.node),
      pageInfo: q.timelineEntries.pageInfo,
    }));
  }

  /**
   * get Timeline Entry
   */
  async getTimelineEntry(
    variables: VariablesOf<typeof TimelineEntryDocument>
  ): SDKResult<ResultOf<typeof TimelineEntryDocument>['timelineEntry']> {
    const res = await request(this.#ctx, {
      query: TimelineEntryDocument,
      variables,
    });

    return unwrapData(res, (q) => q.timelineEntry);
  }

  /**
   * get Workspace
   */
  async getWorkspace(
    variables: VariablesOf<typeof WorkspaceDocument>
  ): SDKResult<ResultOf<typeof WorkspaceDocument>['workspace']> {
    const res = await request(this.#ctx, {
      query: WorkspaceDocument,
      variables,
    });

    return unwrapData(res, (q) => q.workspace);
  }

  /**
   * get User
   */
  async getUser(
    variables: VariablesOf<typeof UserDocument>
  ): SDKResult<ResultOf<typeof UserDocument>['user']> {
    const res = await request(this.#ctx, {
      query: UserDocument,
      variables,
    });

    return unwrapData(res, (q) => q.user);
  }

  /**
   * Returns a user by email or null if the user is not found.

Deleted users are also returned, see isDeleted, deletedAt and deletedBy fields on the User type.
   */
  async getUserByEmail(
    variables: VariablesOf<typeof UserByEmailDocument>
  ): SDKResult<ResultOf<typeof UserByEmailDocument>['userByEmail']> {
    const res = await request(this.#ctx, {
      query: UserByEmailDocument,
      variables,
    });

    return unwrapData(res, (q) => q.userByEmail);
  }

  /**
   * get Users
   */
  async getUsers(
    variables: VariablesOf<typeof UsersDocument>
  ): SDKResult<{
    users: ResultOf<typeof UsersDocument>['users']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: UsersDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      users: q.users.edges.map((edge) => edge.node),
      pageInfo: q.users.pageInfo,
    }));
  }

  /**
   * get Workspace Invites
   */
  async getWorkspaceInvites(
    variables: VariablesOf<typeof WorkspaceInvitesDocument>
  ): SDKResult<{
    workspaceInvites: ResultOf<typeof WorkspaceInvitesDocument>['workspaceInvites']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: WorkspaceInvitesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      workspaceInvites: q.workspaceInvites.edges.map((edge) => edge.node),
      pageInfo: q.workspaceInvites.pageInfo,
    }));
  }

  /**
   * get Customer
   */
  async getCustomer(
    variables: VariablesOf<typeof CustomerDocument>
  ): SDKResult<ResultOf<typeof CustomerDocument>['customer']> {
    const res = await request(this.#ctx, {
      query: CustomerDocument,
      variables,
    });

    return unwrapData(res, (q) => q.customer);
  }

  /**
   * get Customers
   */
  async getCustomers(
    variables: VariablesOf<typeof CustomersDocument>
  ): SDKResult<{
    customers: ResultOf<typeof CustomersDocument>['customers']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
    totalCount: number;
  }> {
    const res = await request(this.#ctx, {
      query: CustomersDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      customers: q.customers.edges.map((edge) => edge.node),
      pageInfo: q.customers.pageInfo,
      totalCount: q.customers.totalCount,
    }));
  }

  /**
   * get Customer By Email
   */
  async getCustomerByEmail(
    variables: VariablesOf<typeof CustomerByEmailDocument>
  ): SDKResult<ResultOf<typeof CustomerByEmailDocument>['customerByEmail']> {
    const res = await request(this.#ctx, {
      query: CustomerByEmailDocument,
      variables,
    });

    return unwrapData(res, (q) => q.customerByEmail);
  }

  /**
   * Get a customer by its external ID. A customer's external ID is unique within a workspace.
   */
  async getCustomerByExternalId(
    variables: VariablesOf<typeof CustomerByExternalIdDocument>
  ): SDKResult<ResultOf<typeof CustomerByExternalIdDocument>['customerByExternalId']> {
    const res = await request(this.#ctx, {
      query: CustomerByExternalIdDocument,
      variables,
    });

    return unwrapData(res, (q) => q.customerByExternalId);
  }

  /**
   * Get a customer group by ID.
   */
  async getCustomerGroup(
    variables: VariablesOf<typeof CustomerGroupDocument>
  ): SDKResult<ResultOf<typeof CustomerGroupDocument>['customerGroup']> {
    const res = await request(this.#ctx, {
      query: CustomerGroupDocument,
      variables,
    });

    return unwrapData(res, (q) => q.customerGroup);
  }

  /**
   * Get a paginated list of customer groups.
   */
  async getCustomerGroups(
    variables: VariablesOf<typeof CustomerGroupsDocument>
  ): SDKResult<{
    customerGroups: ResultOf<typeof CustomerGroupsDocument>['customerGroups']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: CustomerGroupsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      customerGroups: q.customerGroups.edges.map((edge) => edge.node),
      pageInfo: q.customerGroups.pageInfo,
    }));
  }

  /**
   * get Thread Field Schemas
   */
  async getThreadFieldSchemas(
    variables: VariablesOf<typeof ThreadFieldSchemasDocument>
  ): SDKResult<{
    threadFieldSchemas: ResultOf<typeof ThreadFieldSchemasDocument>['threadFieldSchemas']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: ThreadFieldSchemasDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      threadFieldSchemas: q.threadFieldSchemas.edges.map((edge) => edge.node),
      pageInfo: q.threadFieldSchemas.pageInfo,
    }));
  }

  /**
   * get Thread Field Schema
   */
  async getThreadFieldSchema(
    variables: VariablesOf<typeof ThreadFieldSchemaDocument>
  ): SDKResult<ResultOf<typeof ThreadFieldSchemaDocument>['threadFieldSchema']> {
    const res = await request(this.#ctx, {
      query: ThreadFieldSchemaDocument,
      variables,
    });

    return unwrapData(res, (q) => q.threadFieldSchema);
  }

  /**
   * Loads the customer's card instances.

This query will return any cards that are loaded and within their expiry time.
For cards that are past their expiry or are errored it will request a load of the cards and
return a `CustomerCardInstanceLoading`.

A maximum of 25 card instances will be returned, due to only allowing 25 customer card configs.
   */
  async getCustomerCardInstances(
    variables: VariablesOf<typeof CustomerCardInstancesDocument>
  ): SDKResult<unknown> {
    const res = await request(this.#ctx, {
      query: CustomerCardInstancesDocument,
      variables,
    });

    return res;
  }

  /**
   * Search for customers based on the provided query. Returned customers are sorted by how recently
they changed status (most recent first).
   */
  async searchCustomers(
    variables: VariablesOf<typeof SearchCustomersDocument>
  ): SDKResult<{
    searchCustomers: ResultOf<typeof SearchCustomersDocument>['searchCustomers']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: SearchCustomersDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      searchCustomers: q.searchCustomers.edges.map((edge) => edge.node),
      pageInfo: q.searchCustomers.pageInfo,
    }));
  }

  /**
   * get Snippets
   */
  async getSnippets(
    variables: VariablesOf<typeof SnippetsDocument>
  ): SDKResult<{
    snippets: ResultOf<typeof SnippetsDocument>['snippets']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: SnippetsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      snippets: q.snippets.edges.map((edge) => edge.node),
      pageInfo: q.snippets.pageInfo,
    }));
  }

  /**
   * get Snippet
   */
  async getSnippet(
    variables: VariablesOf<typeof SnippetDocument>
  ): SDKResult<ResultOf<typeof SnippetDocument>['snippet']> {
    const res = await request(this.#ctx, {
      query: SnippetDocument,
      variables,
    });

    return unwrapData(res, (q) => q.snippet);
  }

  /**
   * get Workspace Email Settings
   */
  async getWorkspaceEmailSettings(): SDKResult<ResultOf<typeof WorkspaceEmailSettingsDocument>['workspaceEmailSettings']> {
    const res = await request(this.#ctx, {
      query: WorkspaceEmailSettingsDocument,
      
    });

    return unwrapData(res, (q) => q.workspaceEmailSettings);
  }

  /**
   * get Workspace Chat Settings
   */
  async getWorkspaceChatSettings(): SDKResult<ResultOf<typeof WorkspaceChatSettingsDocument>['workspaceChatSettings']> {
    const res = await request(this.#ctx, {
      query: WorkspaceChatSettingsDocument,
      
    });

    return unwrapData(res, (q) => q.workspaceChatSettings);
  }

  /**
   * get Machine User
   */
  async getMachineUser(
    variables: VariablesOf<typeof MachineUserDocument>
  ): SDKResult<ResultOf<typeof MachineUserDocument>['machineUser']> {
    const res = await request(this.#ctx, {
      query: MachineUserDocument,
      variables,
    });

    return unwrapData(res, (q) => q.machineUser);
  }

  /**
   * get Machine Users
   */
  async getMachineUsers(
    variables: VariablesOf<typeof MachineUsersDocument>
  ): SDKResult<{
    machineUsers: ResultOf<typeof MachineUsersDocument>['machineUsers']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: MachineUsersDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      machineUsers: q.machineUsers.edges.map((edge) => edge.node),
      pageInfo: q.machineUsers.pageInfo,
    }));
  }

  /**
   * get Permissions
   */
  async getPermissions(): SDKResult<ResultOf<typeof PermissionsDocument>['permissions']> {
    const res = await request(this.#ctx, {
      query: PermissionsDocument,
      
    });

    return unwrapData(res, (q) => q.permissions);
  }

  /**
   * get Workspace M S Teams Installation Info
   */
  async getWorkspaceMSTeamsInstallationInfo(
    variables: VariablesOf<typeof WorkspaceMsTeamsInstallationInfoDocument>
  ): SDKResult<ResultOf<typeof WorkspaceMsTeamsInstallationInfoDocument>['workspaceMSTeamsInstallationInfo']> {
    const res = await request(this.#ctx, {
      query: WorkspaceMsTeamsInstallationInfoDocument,
      variables,
    });

    return unwrapData(res, (q) => q.workspaceMSTeamsInstallationInfo);
  }

  /**
   * get Workspace M S Teams Integration
   */
  async getWorkspaceMSTeamsIntegration(): SDKResult<ResultOf<typeof WorkspaceMsTeamsIntegrationDocument>['workspaceMSTeamsIntegration']> {
    const res = await request(this.#ctx, {
      query: WorkspaceMsTeamsIntegrationDocument,
      
    });

    return unwrapData(res, (q) => q.workspaceMSTeamsIntegration);
  }

  /**
   * get My M S Teams Installation Info
   */
  async getMyMSTeamsInstallationInfo(
    variables: VariablesOf<typeof MyMsTeamsInstallationInfoDocument>
  ): SDKResult<ResultOf<typeof MyMsTeamsInstallationInfoDocument>['myMSTeamsInstallationInfo']> {
    const res = await request(this.#ctx, {
      query: MyMsTeamsInstallationInfoDocument,
      variables,
    });

    return unwrapData(res, (q) => q.myMSTeamsInstallationInfo);
  }

  /**
   * get My M S Teams Integration
   */
  async getMyMSTeamsIntegration(): SDKResult<ResultOf<typeof MyMsTeamsIntegrationDocument>['myMSTeamsIntegration']> {
    const res = await request(this.#ctx, {
      query: MyMsTeamsIntegrationDocument,
      
    });

    return unwrapData(res, (q) => q.myMSTeamsIntegration);
  }

  /**
   * get Connected M S Teams Channels
   */
  async getConnectedMSTeamsChannels(
    variables: VariablesOf<typeof ConnectedMsTeamsChannelsDocument>
  ): SDKResult<{
    connectedMSTeamsChannels: ResultOf<typeof ConnectedMsTeamsChannelsDocument>['connectedMSTeamsChannels']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
    totalCount: number;
  }> {
    const res = await request(this.#ctx, {
      query: ConnectedMsTeamsChannelsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      connectedMSTeamsChannels: q.connectedMSTeamsChannels.edges.map((edge) => edge.node),
      pageInfo: q.connectedMSTeamsChannels.pageInfo,
      totalCount: q.connectedMSTeamsChannels.totalCount,
    }));
  }

  /**
   * get M S Teams Members For Channel
   */
  async getMSTeamsMembersForChannel(
    variables: VariablesOf<typeof GetMsTeamsMembersForChannelDocument>
  ): SDKResult<ResultOf<typeof GetMsTeamsMembersForChannelDocument>['getMSTeamsMembersForChannel']> {
    const res = await request(this.#ctx, {
      query: GetMsTeamsMembersForChannelDocument,
      variables,
    });

    return unwrapData(res, (q) => q.getMSTeamsMembersForChannel);
  }

  /**
   * get Workspace Slack Installation Info
   */
  async getWorkspaceSlackInstallationInfo(
    variables: VariablesOf<typeof WorkspaceSlackInstallationInfoDocument>
  ): SDKResult<ResultOf<typeof WorkspaceSlackInstallationInfoDocument>['workspaceSlackInstallationInfo']> {
    const res = await request(this.#ctx, {
      query: WorkspaceSlackInstallationInfoDocument,
      variables,
    });

    return unwrapData(res, (q) => q.workspaceSlackInstallationInfo);
  }

  /**
   * get Workspace Slack Integrations
   */
  async getWorkspaceSlackIntegrations(
    variables: VariablesOf<typeof WorkspaceSlackIntegrationsDocument>
  ): SDKResult<{
    workspaceSlackIntegrations: ResultOf<typeof WorkspaceSlackIntegrationsDocument>['workspaceSlackIntegrations']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: WorkspaceSlackIntegrationsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      workspaceSlackIntegrations: q.workspaceSlackIntegrations.edges.map((edge) => edge.node),
      pageInfo: q.workspaceSlackIntegrations.pageInfo,
    }));
  }

  /**
   * get Workspace Slack Integration
   */
  async getWorkspaceSlackIntegration(
    variables: VariablesOf<typeof WorkspaceSlackIntegrationDocument>
  ): SDKResult<ResultOf<typeof WorkspaceSlackIntegrationDocument>['workspaceSlackIntegration']> {
    const res = await request(this.#ctx, {
      query: WorkspaceSlackIntegrationDocument,
      variables,
    });

    return unwrapData(res, (q) => q.workspaceSlackIntegration);
  }

  /**
   * get Workspace Slack Channel Installation Info
   */
  async getWorkspaceSlackChannelInstallationInfo(
    variables: VariablesOf<typeof WorkspaceSlackChannelInstallationInfoDocument>
  ): SDKResult<ResultOf<typeof WorkspaceSlackChannelInstallationInfoDocument>['workspaceSlackChannelInstallationInfo']> {
    const res = await request(this.#ctx, {
      query: WorkspaceSlackChannelInstallationInfoDocument,
      variables,
    });

    return unwrapData(res, (q) => q.workspaceSlackChannelInstallationInfo);
  }

  /**
   * get Workspace Slack Channel Integration
   */
  async getWorkspaceSlackChannelIntegration(
    variables: VariablesOf<typeof WorkspaceSlackChannelIntegrationDocument>
  ): SDKResult<ResultOf<typeof WorkspaceSlackChannelIntegrationDocument>['workspaceSlackChannelIntegration']> {
    const res = await request(this.#ctx, {
      query: WorkspaceSlackChannelIntegrationDocument,
      variables,
    });

    return unwrapData(res, (q) => q.workspaceSlackChannelIntegration);
  }

  /**
   * get Workspace Slack Channel Integrations
   */
  async getWorkspaceSlackChannelIntegrations(
    variables: VariablesOf<typeof WorkspaceSlackChannelIntegrationsDocument>
  ): SDKResult<{
    workspaceSlackChannelIntegrations: ResultOf<typeof WorkspaceSlackChannelIntegrationsDocument>['workspaceSlackChannelIntegrations']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: WorkspaceSlackChannelIntegrationsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      workspaceSlackChannelIntegrations: q.workspaceSlackChannelIntegrations.edges.map((edge) => edge.node),
      pageInfo: q.workspaceSlackChannelIntegrations.pageInfo,
    }));
  }

  /**
   * get Workspace Discord Channel Installation Info
   */
  async getWorkspaceDiscordChannelInstallationInfo(
    variables: VariablesOf<typeof WorkspaceDiscordChannelInstallationInfoDocument>
  ): SDKResult<ResultOf<typeof WorkspaceDiscordChannelInstallationInfoDocument>['workspaceDiscordChannelInstallationInfo']> {
    const res = await request(this.#ctx, {
      query: WorkspaceDiscordChannelInstallationInfoDocument,
      variables,
    });

    return unwrapData(res, (q) => q.workspaceDiscordChannelInstallationInfo);
  }

  /**
   * get Workspace Discord Channel Integration
   */
  async getWorkspaceDiscordChannelIntegration(
    variables: VariablesOf<typeof WorkspaceDiscordChannelIntegrationDocument>
  ): SDKResult<ResultOf<typeof WorkspaceDiscordChannelIntegrationDocument>['workspaceDiscordChannelIntegration']> {
    const res = await request(this.#ctx, {
      query: WorkspaceDiscordChannelIntegrationDocument,
      variables,
    });

    return unwrapData(res, (q) => q.workspaceDiscordChannelIntegration);
  }

  /**
   * get Workspace Discord Channel Integrations
   */
  async getWorkspaceDiscordChannelIntegrations(
    variables: VariablesOf<typeof WorkspaceDiscordChannelIntegrationsDocument>
  ): SDKResult<{
    workspaceDiscordChannelIntegrations: ResultOf<typeof WorkspaceDiscordChannelIntegrationsDocument>['workspaceDiscordChannelIntegrations']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: WorkspaceDiscordChannelIntegrationsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      workspaceDiscordChannelIntegrations: q.workspaceDiscordChannelIntegrations.edges.map((edge) => edge.node),
      pageInfo: q.workspaceDiscordChannelIntegrations.pageInfo,
    }));
  }

  /**
   * get User Auth Discord Channel Integration
   */
  async getUserAuthDiscordChannelIntegration(
    variables: VariablesOf<typeof UserAuthDiscordChannelIntegrationDocument>
  ): SDKResult<ResultOf<typeof UserAuthDiscordChannelIntegrationDocument>['userAuthDiscordChannelIntegration']> {
    const res = await request(this.#ctx, {
      query: UserAuthDiscordChannelIntegrationDocument,
      variables,
    });

    return unwrapData(res, (q) => q.userAuthDiscordChannelIntegration);
  }

  /**
   * get User Auth Discord Channel Integrations
   */
  async getUserAuthDiscordChannelIntegrations(
    variables: VariablesOf<typeof UserAuthDiscordChannelIntegrationsDocument>
  ): SDKResult<{
    userAuthDiscordChannelIntegrations: ResultOf<typeof UserAuthDiscordChannelIntegrationsDocument>['userAuthDiscordChannelIntegrations']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: UserAuthDiscordChannelIntegrationsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      userAuthDiscordChannelIntegrations: q.userAuthDiscordChannelIntegrations.edges.map((edge) => edge.node),
      pageInfo: q.userAuthDiscordChannelIntegrations.pageInfo,
    }));
  }

  /**
   * get User Auth Discord Channel Installation Info
   */
  async getUserAuthDiscordChannelInstallationInfo(
    variables: VariablesOf<typeof UserAuthDiscordChannelInstallationInfoDocument>
  ): SDKResult<ResultOf<typeof UserAuthDiscordChannelInstallationInfoDocument>['userAuthDiscordChannelInstallationInfo']> {
    const res = await request(this.#ctx, {
      query: UserAuthDiscordChannelInstallationInfoDocument,
      variables,
    });

    return unwrapData(res, (q) => q.userAuthDiscordChannelInstallationInfo);
  }

  /**
   * Searches for slack users in a thread based on a search term.
The search term can be part of either the slack's handle or full name.
   */
  async searchThreadSlackUsers(
    variables: VariablesOf<typeof SearchThreadSlackUsersDocument>
  ): SDKResult<{
    searchThreadSlackUsers: ResultOf<typeof SearchThreadSlackUsersDocument>['searchThreadSlackUsers']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: SearchThreadSlackUsersDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      searchThreadSlackUsers: q.searchThreadSlackUsers.edges.map((edge) => edge.node),
      pageInfo: q.searchThreadSlackUsers.pageInfo,
    }));
  }

  /**
   * Searches for slack users in a slack channel based on a search term.
The search term can be part of either the slack's handle or full name.
   */
  async searchSlackUsers(
    variables: VariablesOf<typeof SearchSlackUsersDocument>
  ): SDKResult<{
    searchSlackUsers: ResultOf<typeof SearchSlackUsersDocument>['searchSlackUsers']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: SearchSlackUsersDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      searchSlackUsers: q.searchSlackUsers.edges.map((edge) => edge.node),
      pageInfo: q.searchSlackUsers.pageInfo,
    }));
  }

  /**
   * Gets all slack channels for this workspace, which match the specified filters.
   */
  async getConnectedSlackChannels(
    variables: VariablesOf<typeof ConnectedSlackChannelsDocument>
  ): SDKResult<{
    connectedSlackChannels: ResultOf<typeof ConnectedSlackChannelsDocument>['connectedSlackChannels']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
    totalCount: number;
  }> {
    const res = await request(this.#ctx, {
      query: ConnectedSlackChannelsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      connectedSlackChannels: q.connectedSlackChannels.edges.map((edge) => edge.node),
      pageInfo: q.connectedSlackChannels.pageInfo,
      totalCount: q.connectedSlackChannels.totalCount,
    }));
  }

  /**
   * get Connected Slack Channel
   */
  async getConnectedSlackChannel(
    variables: VariablesOf<typeof ConnectedSlackChannelDocument>
  ): SDKResult<ResultOf<typeof ConnectedSlackChannelDocument>['connectedSlackChannel']> {
    const res = await request(this.#ctx, {
      query: ConnectedSlackChannelDocument,
      variables,
    });

    return unwrapData(res, (q) => q.connectedSlackChannel);
  }

  /**
   * Gets a single slack user within a thread based on their slack user ID.
   */
  async getThreadSlackUser(
    variables: VariablesOf<typeof ThreadSlackUserDocument>
  ): SDKResult<ResultOf<typeof ThreadSlackUserDocument>['threadSlackUser']> {
    const res = await request(this.#ctx, {
      query: ThreadSlackUserDocument,
      variables,
    });

    return unwrapData(res, (q) => q.threadSlackUser);
  }

  /**
   * Gets a single slack user within a channel based on their slack user ID.
   */
  async getSlackUser(
    variables: VariablesOf<typeof SlackUserDocument>
  ): SDKResult<ResultOf<typeof SlackUserDocument>['slackUser']> {
    const res = await request(this.#ctx, {
      query: SlackUserDocument,
      variables,
    });

    return unwrapData(res, (q) => q.slackUser);
  }

  /**
   * Gets a list of Slack channels where the specified user is a member.
This is a proxy to the Slack API's users.conversations endpoint.
   */
  async getUserSlackChannelMemberships(
    variables: VariablesOf<typeof UserSlackChannelMembershipsDocument>
  ): SDKResult<ResultOf<typeof UserSlackChannelMembershipsDocument>['userSlackChannelMemberships']> {
    const res = await request(this.#ctx, {
      query: UserSlackChannelMembershipsDocument,
      variables,
    });

    return unwrapData(res, (q) => q.userSlackChannelMemberships);
  }

  /**
   * get User Auth Slack Integration
   */
  async getUserAuthSlackIntegration(
    variables: VariablesOf<typeof UserAuthSlackIntegrationDocument>
  ): SDKResult<ResultOf<typeof UserAuthSlackIntegrationDocument>['userAuthSlackIntegration']> {
    const res = await request(this.#ctx, {
      query: UserAuthSlackIntegrationDocument,
      variables,
    });

    return unwrapData(res, (q) => q.userAuthSlackIntegration);
  }

  /**
   * get User Auth Slack Integration By Thread Id
   */
  async getUserAuthSlackIntegrationByThreadId(
    variables: VariablesOf<typeof UserAuthSlackIntegrationByThreadIdDocument>
  ): SDKResult<ResultOf<typeof UserAuthSlackIntegrationByThreadIdDocument>['userAuthSlackIntegrationByThreadId']> {
    const res = await request(this.#ctx, {
      query: UserAuthSlackIntegrationByThreadIdDocument,
      variables,
    });

    return unwrapData(res, (q) => q.userAuthSlackIntegrationByThreadId);
  }

  /**
   * get User Auth Slack Installation Info
   */
  async getUserAuthSlackInstallationInfo(
    variables: VariablesOf<typeof UserAuthSlackInstallationInfoDocument>
  ): SDKResult<ResultOf<typeof UserAuthSlackInstallationInfoDocument>['userAuthSlackInstallationInfo']> {
    const res = await request(this.#ctx, {
      query: UserAuthSlackInstallationInfoDocument,
      variables,
    });

    return unwrapData(res, (q) => q.userAuthSlackInstallationInfo);
  }

  /**
   * get Workspace Discord Integrations
   */
  async getWorkspaceDiscordIntegrations(
    variables: VariablesOf<typeof WorkspaceDiscordIntegrationsDocument>
  ): SDKResult<{
    workspaceDiscordIntegrations: ResultOf<typeof WorkspaceDiscordIntegrationsDocument>['workspaceDiscordIntegrations']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: WorkspaceDiscordIntegrationsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      workspaceDiscordIntegrations: q.workspaceDiscordIntegrations.edges.map((edge) => edge.node),
      pageInfo: q.workspaceDiscordIntegrations.pageInfo,
    }));
  }

  /**
   * get Workspace Discord Integration
   */
  async getWorkspaceDiscordIntegration(
    variables: VariablesOf<typeof WorkspaceDiscordIntegrationDocument>
  ): SDKResult<ResultOf<typeof WorkspaceDiscordIntegrationDocument>['workspaceDiscordIntegration']> {
    const res = await request(this.#ctx, {
      query: WorkspaceDiscordIntegrationDocument,
      variables,
    });

    return unwrapData(res, (q) => q.workspaceDiscordIntegration);
  }

  /**
   * Gets all Discord channels for this workspace, which match the specified filters.
   */
  async getConnectedDiscordChannels(
    variables: VariablesOf<typeof ConnectedDiscordChannelsDocument>
  ): SDKResult<{
    connectedDiscordChannels: ResultOf<typeof ConnectedDiscordChannelsDocument>['connectedDiscordChannels']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: ConnectedDiscordChannelsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      connectedDiscordChannels: q.connectedDiscordChannels.edges.map((edge) => edge.node),
      pageInfo: q.connectedDiscordChannels.pageInfo,
    }));
  }

  /**
   * get Customer Card Configs
   */
  async getCustomerCardConfigs(): SDKResult<ResultOf<typeof CustomerCardConfigsDocument>['customerCardConfigs']> {
    const res = await request(this.#ctx, {
      query: CustomerCardConfigsDocument,
      
    });

    return unwrapData(res, (q) => q.customerCardConfigs);
  }

  /**
   * get Customer Card Config
   */
  async getCustomerCardConfig(
    variables: VariablesOf<typeof CustomerCardConfigDocument>
  ): SDKResult<ResultOf<typeof CustomerCardConfigDocument>['customerCardConfig']> {
    const res = await request(this.#ctx, {
      query: CustomerCardConfigDocument,
      variables,
    });

    return unwrapData(res, (q) => q.customerCardConfig);
  }

  /**
   * Gets a single setting based on the code and the scope.
   */
  async getSetting(
    variables: VariablesOf<typeof SettingDocument>
  ): SDKResult<unknown> {
    const res = await request(this.#ctx, {
      query: SettingDocument,
      variables,
    });

    return res;
  }

  /**
   * List webhook versions.
   */
  async getWebhookVersions(
    variables: VariablesOf<typeof WebhookVersionsDocument>
  ): SDKResult<{
    webhookVersions: ResultOf<typeof WebhookVersionsDocument>['webhookVersions']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: WebhookVersionsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      webhookVersions: q.webhookVersions.edges.map((edge) => edge.node),
      pageInfo: q.webhookVersions.pageInfo,
    }));
  }

  /**
   * Gets a webhook target.
   */
  async getWebhookTarget(
    variables: VariablesOf<typeof WebhookTargetDocument>
  ): SDKResult<ResultOf<typeof WebhookTargetDocument>['webhookTarget']> {
    const res = await request(this.#ctx, {
      query: WebhookTargetDocument,
      variables,
    });

    return unwrapData(res, (q) => q.webhookTarget);
  }

  /**
   * List webhook targets.
   */
  async getWebhookTargets(
    variables: VariablesOf<typeof WebhookTargetsDocument>
  ): SDKResult<{
    webhookTargets: ResultOf<typeof WebhookTargetsDocument>['webhookTargets']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: WebhookTargetsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      webhookTargets: q.webhookTargets.edges.map((edge) => edge.node),
      pageInfo: q.webhookTargets.pageInfo,
    }));
  }

  /**
   * List all the events types you can subscribe to.
   */
  async getSubscriptionEventTypes(): SDKResult<ResultOf<typeof SubscriptionEventTypesDocument>['subscriptionEventTypes']> {
    const res = await request(this.#ctx, {
      query: SubscriptionEventTypesDocument,
      
    });

    return unwrapData(res, (q) => q.subscriptionEventTypes);
  }

  /**
   * Get a workflow rule by id.
   */
  async getWorkflowRule(
    variables: VariablesOf<typeof WorkflowRuleDocument>
  ): SDKResult<ResultOf<typeof WorkflowRuleDocument>['workflowRule']> {
    const res = await request(this.#ctx, {
      query: WorkflowRuleDocument,
      variables,
    });

    return unwrapData(res, (q) => q.workflowRule);
  }

  /**
   * List workflow rules.
   */
  async getWorkflowRules(
    variables: VariablesOf<typeof WorkflowRulesDocument>
  ): SDKResult<{
    workflowRules: ResultOf<typeof WorkflowRulesDocument>['workflowRules']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: WorkflowRulesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      workflowRules: q.workflowRules.edges.map((edge) => edge.node),
      pageInfo: q.workflowRules.pageInfo,
    }));
  }

  /**
   * Get a chat app by id.
   */
  async getChatApp(
    variables: VariablesOf<typeof ChatAppDocument>
  ): SDKResult<ResultOf<typeof ChatAppDocument>['chatApp']> {
    const res = await request(this.#ctx, {
      query: ChatAppDocument,
      variables,
    });

    return unwrapData(res, (q) => q.chatApp);
  }

  /**
   * List chat apps.
   */
  async getChatApps(
    variables: VariablesOf<typeof ChatAppsDocument>
  ): SDKResult<{
    chatApps: ResultOf<typeof ChatAppsDocument>['chatApps']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: ChatAppsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      chatApps: q.chatApps.edges.map((edge) => edge.node),
      pageInfo: q.chatApps.pageInfo,
    }));
  }

  /**
   * Get a chat app secret by chat app id.
   */
  async getChatAppSecret(
    variables: VariablesOf<typeof ChatAppSecretDocument>
  ): SDKResult<ResultOf<typeof ChatAppSecretDocument>['chatAppSecret']> {
    const res = await request(this.#ctx, {
      query: ChatAppSecretDocument,
      variables,
    });

    return unwrapData(res, (q) => q.chatAppSecret);
  }

  /**
   * Get a thread by its ID.
   */
  async getThread(
    variables: VariablesOf<typeof ThreadDocument>
  ): SDKResult<ResultOf<typeof ThreadDocument>['thread']> {
    const res = await request(this.#ctx, {
      query: ThreadDocument,
      variables,
    });

    return unwrapData(res, (q) => q.thread);
  }

  /**
   * Get a thread by its ref.
   */
  async getThreadByRef(
    variables: VariablesOf<typeof ThreadByRefDocument>
  ): SDKResult<ResultOf<typeof ThreadByRefDocument>['threadByRef']> {
    const res = await request(this.#ctx, {
      query: ThreadByRefDocument,
      variables,
    });

    return unwrapData(res, (q) => q.threadByRef);
  }

  /**
   * Get a thread by its external ID. A thread's external ID is unique within a customer, hence why the customer ID is required.
   */
  async getThreadByExternalId(
    variables: VariablesOf<typeof ThreadByExternalIdDocument>
  ): SDKResult<ResultOf<typeof ThreadByExternalIdDocument>['threadByExternalId']> {
    const res = await request(this.#ctx, {
      query: ThreadByExternalIdDocument,
      variables,
    });

    return unwrapData(res, (q) => q.threadByExternalId);
  }

  /**
   * get Threads
   */
  async getThreads(
    variables: VariablesOf<typeof ThreadsDocument>
  ): SDKResult<{
    threads: ResultOf<typeof ThreadsDocument>['threads']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
    totalCount: number;
  }> {
    const res = await request(this.#ctx, {
      query: ThreadsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      threads: q.threads.edges.map((edge) => edge.node),
      pageInfo: q.threads.pageInfo,
      totalCount: q.threads.totalCount,
    }));
  }

  /**
   * search Threads
   */
  async searchThreads(
    variables: VariablesOf<typeof SearchThreadsDocument>
  ): SDKResult<{
    searchThreads: ResultOf<typeof SearchThreadsDocument>['searchThreads']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: SearchThreadsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      searchThreads: q.searchThreads.edges.map((edge) => edge.node),
      pageInfo: q.searchThreads.pageInfo,
    }));
  }

  /**
   * get Autoresponder
   */
  async getAutoresponder(
    variables: VariablesOf<typeof AutoresponderDocument>
  ): SDKResult<ResultOf<typeof AutoresponderDocument>['autoresponder']> {
    const res = await request(this.#ctx, {
      query: AutoresponderDocument,
      variables,
    });

    return unwrapData(res, (q) => q.autoresponder);
  }

  /**
   * get Autoresponders
   */
  async getAutoresponders(
    variables: VariablesOf<typeof AutorespondersDocument>
  ): SDKResult<{
    autoresponders: ResultOf<typeof AutorespondersDocument>['autoresponders']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: AutorespondersDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      autoresponders: q.autoresponders.edges.map((edge) => edge.node),
      pageInfo: q.autoresponders.pageInfo,
    }));
  }

  /**
   * get Time Series Metric
   */
  async getTimeSeriesMetric(
    variables: VariablesOf<typeof TimeSeriesMetricDocument>
  ): SDKResult<ResultOf<typeof TimeSeriesMetricDocument>['timeSeriesMetric']> {
    const res = await request(this.#ctx, {
      query: TimeSeriesMetricDocument,
      variables,
    });

    return unwrapData(res, (q) => q.timeSeriesMetric);
  }

  /**
   * get Single Value Metric
   */
  async getSingleValueMetric(
    variables: VariablesOf<typeof SingleValueMetricDocument>
  ): SDKResult<ResultOf<typeof SingleValueMetricDocument>['singleValueMetric']> {
    const res = await request(this.#ctx, {
      query: SingleValueMetricDocument,
      variables,
    });

    return unwrapData(res, (q) => q.singleValueMetric);
  }

  /**
   * get Heatmap Metric
   */
  async getHeatmapMetric(
    variables: VariablesOf<typeof HeatmapMetricDocument>
  ): SDKResult<ResultOf<typeof HeatmapMetricDocument>['heatmapMetric']> {
    const res = await request(this.#ctx, {
      query: HeatmapMetricDocument,
      variables,
    });

    return unwrapData(res, (q) => q.heatmapMetric);
  }

  /**
   * get Companies
   */
  async getCompanies(
    variables: VariablesOf<typeof CompaniesDocument>
  ): SDKResult<{
    companies: ResultOf<typeof CompaniesDocument>['companies']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: CompaniesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      companies: q.companies.edges.map((edge) => edge.node),
      pageInfo: q.companies.pageInfo,
    }));
  }

  /**
   * get Company
   */
  async getCompany(
    variables: VariablesOf<typeof CompanyDocument>
  ): SDKResult<ResultOf<typeof CompanyDocument>['company']> {
    const res = await request(this.#ctx, {
      query: CompanyDocument,
      variables,
    });

    return unwrapData(res, (q) => q.company);
  }

  /**
   * search Companies
   */
  async searchCompanies(
    variables: VariablesOf<typeof SearchCompaniesDocument>
  ): SDKResult<{
    searchCompanies: ResultOf<typeof SearchCompaniesDocument>['searchCompanies']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: SearchCompaniesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      searchCompanies: q.searchCompanies.edges.map((edge) => edge.node),
      pageInfo: q.searchCompanies.pageInfo,
    }));
  }

  /**
   * get Tenants
   */
  async getTenants(
    variables: VariablesOf<typeof TenantsDocument>
  ): SDKResult<{
    tenants: ResultOf<typeof TenantsDocument>['tenants']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: TenantsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      tenants: q.tenants.edges.map((edge) => edge.node),
      pageInfo: q.tenants.pageInfo,
    }));
  }

  /**
   * get Tenant
   */
  async getTenant(
    variables: VariablesOf<typeof TenantDocument>
  ): SDKResult<ResultOf<typeof TenantDocument>['tenant']> {
    const res = await request(this.#ctx, {
      query: TenantDocument,
      variables,
    });

    return unwrapData(res, (q) => q.tenant);
  }

  /**
   * get Tenant Field Schemas
   */
  async getTenantFieldSchemas(
    variables: VariablesOf<typeof TenantFieldSchemasDocument>
  ): SDKResult<{
    tenantFieldSchemas: ResultOf<typeof TenantFieldSchemasDocument>['tenantFieldSchemas']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: TenantFieldSchemasDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      tenantFieldSchemas: q.tenantFieldSchemas.edges.map((edge) => edge.node),
      pageInfo: q.tenantFieldSchemas.pageInfo,
    }));
  }

  /**
   * search Tenants
   */
  async searchTenants(
    variables: VariablesOf<typeof SearchTenantsDocument>
  ): SDKResult<{
    searchTenants: ResultOf<typeof SearchTenantsDocument>['searchTenants']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: SearchTenantsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      searchTenants: q.searchTenants.edges.map((edge) => edge.node),
      pageInfo: q.searchTenants.pageInfo,
    }));
  }

  /**
   * get Thread Discussion
   */
  async getThreadDiscussion(
    variables: VariablesOf<typeof ThreadDiscussionDocument>
  ): SDKResult<ResultOf<typeof ThreadDiscussionDocument>['threadDiscussion']> {
    const res = await request(this.#ctx, {
      query: ThreadDiscussionDocument,
      variables,
    });

    return unwrapData(res, (q) => q.threadDiscussion);
  }

  /**
   * get Service Authorization
   */
  async getServiceAuthorization(
    variables: VariablesOf<typeof ServiceAuthorizationDocument>
  ): SDKResult<ResultOf<typeof ServiceAuthorizationDocument>['serviceAuthorization']> {
    const res = await request(this.#ctx, {
      query: ServiceAuthorizationDocument,
      variables,
    });

    return unwrapData(res, (q) => q.serviceAuthorization);
  }

  /**
   * get Service Authorizations
   */
  async getServiceAuthorizations(
    variables: VariablesOf<typeof ServiceAuthorizationsDocument>
  ): SDKResult<{
    serviceAuthorizations: ResultOf<typeof ServiceAuthorizationsDocument>['serviceAuthorizations']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: ServiceAuthorizationsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      serviceAuthorizations: q.serviceAuthorizations.edges.map((edge) => edge.node),
      pageInfo: q.serviceAuthorizations.pageInfo,
    }));
  }

  /**
   * get Tiers
   */
  async getTiers(
    variables: VariablesOf<typeof TiersDocument>
  ): SDKResult<{
    tiers: ResultOf<typeof TiersDocument>['tiers']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: TiersDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      tiers: q.tiers.edges.map((edge) => edge.node),
      pageInfo: q.tiers.pageInfo,
    }));
  }

  /**
   * get Tier
   */
  async getTier(
    variables: VariablesOf<typeof TierDocument>
  ): SDKResult<ResultOf<typeof TierDocument>['tier']> {
    const res = await request(this.#ctx, {
      query: TierDocument,
      variables,
    });

    return unwrapData(res, (q) => q.tier);
  }

  /**
   * get Business Hours
   * @deprecated Use businessHoursSlots instead.
   */
  async getBusinessHours(): SDKResult<ResultOf<typeof BusinessHoursDocument>['businessHours']> {
    const res = await request(this.#ctx, {
      query: BusinessHoursDocument,
      
    });

    return unwrapData(res, (q) => q.businessHours);
  }

  /**
   * get Business Hours Slots
   */
  async getBusinessHoursSlots(): SDKResult<ResultOf<typeof BusinessHoursSlotsDocument>['businessHoursSlots']> {
    const res = await request(this.#ctx, {
      query: BusinessHoursSlotsDocument,
      
    });

    return unwrapData(res, (q) => q.businessHoursSlots);
  }

  /**
   * get Workspace Hmac
   */
  async getWorkspaceHmac(): SDKResult<ResultOf<typeof WorkspaceHmacDocument>['workspaceHmac']> {
    const res = await request(this.#ctx, {
      query: WorkspaceHmacDocument,
      
    });

    return unwrapData(res, (q) => q.workspaceHmac);
  }

  /**
   * get Thread Link Groups
   */
  async getThreadLinkGroups(
    variables: VariablesOf<typeof ThreadLinkGroupsDocument>
  ): SDKResult<{
    threadLinkGroups: ResultOf<typeof ThreadLinkGroupsDocument>['threadLinkGroups']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: ThreadLinkGroupsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      threadLinkGroups: q.threadLinkGroups.edges.map((edge) => edge.node),
      pageInfo: q.threadLinkGroups.pageInfo,
    }));
  }

  /**
   * get Related Threads
   */
  async getRelatedThreads(
    variables: VariablesOf<typeof RelatedThreadsDocument>
  ): SDKResult<ResultOf<typeof RelatedThreadsDocument>['relatedThreads']> {
    const res = await request(this.#ctx, {
      query: RelatedThreadsDocument,
      variables,
    });

    return unwrapData(res, (q) => q.relatedThreads);
  }

  /**
   * search Knowledge Sources
   */
  async searchKnowledgeSources(
    variables: VariablesOf<typeof SearchKnowledgeSourcesDocument>
  ): SDKResult<unknown> {
    const res = await request(this.#ctx, {
      query: SearchKnowledgeSourcesDocument,
      variables,
    });

    return res;
  }

  /**
   * This API is in beta and may change without notice.
   */
  async getThreadClusters(
    variables: VariablesOf<typeof ThreadClustersDocument>
  ): SDKResult<ResultOf<typeof ThreadClustersDocument>['threadClusters']> {
    const res = await request(this.#ctx, {
      query: ThreadClustersDocument,
      variables,
    });

    return unwrapData(res, (q) => q.threadClusters);
  }

  /**
   * This API is in beta and may change without notice.
   */
  async getThreadCluster(
    variables: VariablesOf<typeof ThreadClusterDocument>
  ): SDKResult<ResultOf<typeof ThreadClusterDocument>['threadCluster']> {
    const res = await request(this.#ctx, {
      query: ThreadClusterDocument,
      variables,
    });

    return unwrapData(res, (q) => q.threadCluster);
  }

  /**
   * This API is in beta and may change without notice.
   */
  async getActiveThreadCluster(
    variables: VariablesOf<typeof ActiveThreadClusterDocument>
  ): SDKResult<ResultOf<typeof ActiveThreadClusterDocument>['activeThreadCluster']> {
    const res = await request(this.#ctx, {
      query: ActiveThreadClusterDocument,
      variables,
    });

    return unwrapData(res, (q) => q.activeThreadCluster);
  }

  /**
   * This API is in beta and may change without notice.
   */
  async getThreadClustersPaginated(
    variables: VariablesOf<typeof ThreadClustersPaginatedDocument>
  ): SDKResult<{
    threadClustersPaginated: ResultOf<typeof ThreadClustersPaginatedDocument>['threadClustersPaginated']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: ThreadClustersPaginatedDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      threadClustersPaginated: q.threadClustersPaginated.edges.map((edge) => edge.node),
      pageInfo: q.threadClustersPaginated.pageInfo,
    }));
  }

  /**
   * This API is in beta and may change without notice.
   */
  async getGeneratedReplies(
    variables: VariablesOf<typeof GeneratedRepliesDocument>
  ): SDKResult<ResultOf<typeof GeneratedRepliesDocument>['generatedReplies']> {
    const res = await request(this.#ctx, {
      query: GeneratedRepliesDocument,
      variables,
    });

    return unwrapData(res, (q) => q.generatedReplies);
  }

  /**
   * get Indexed Documents
   */
  async getIndexedDocuments(
    variables: VariablesOf<typeof IndexedDocumentsDocument>
  ): SDKResult<{
    indexedDocuments: ResultOf<typeof IndexedDocumentsDocument>['indexedDocuments']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: IndexedDocumentsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      indexedDocuments: q.indexedDocuments.edges.map((edge) => edge.node),
      pageInfo: q.indexedDocuments.pageInfo,
    }));
  }

  /**
   * get Knowledge Source
   */
  async getKnowledgeSource(
    variables: VariablesOf<typeof KnowledgeSourceDocument>
  ): SDKResult<unknown> {
    const res = await request(this.#ctx, {
      query: KnowledgeSourceDocument,
      variables,
    });

    return res;
  }

  /**
   * get Knowledge Sources
   */
  async getKnowledgeSources(
    variables: VariablesOf<typeof KnowledgeSourcesDocument>
  ): SDKResult<{
    knowledgeSources: ResultOf<typeof KnowledgeSourcesDocument>['knowledgeSources']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: KnowledgeSourcesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      knowledgeSources: q.knowledgeSources.edges.map((edge) => edge.node),
      pageInfo: q.knowledgeSources.pageInfo,
    }));
  }

  /**
   * get Saved Threads Views
   */
  async getSavedThreadsViews(
    variables: VariablesOf<typeof SavedThreadsViewsDocument>
  ): SDKResult<{
    savedThreadsViews: ResultOf<typeof SavedThreadsViewsDocument>['savedThreadsViews']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: SavedThreadsViewsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      savedThreadsViews: q.savedThreadsViews.edges.map((edge) => edge.node),
      pageInfo: q.savedThreadsViews.pageInfo,
    }));
  }

  /**
   * get Saved Threads View
   */
  async getSavedThreadsView(
    variables: VariablesOf<typeof SavedThreadsViewDocument>
  ): SDKResult<ResultOf<typeof SavedThreadsViewDocument>['savedThreadsView']> {
    const res = await request(this.#ctx, {
      query: SavedThreadsViewDocument,
      variables,
    });

    return unwrapData(res, (q) => q.savedThreadsView);
  }

  /**
   * search Thread Link Candidates
   */
  async searchThreadLinkCandidates(
    variables: VariablesOf<typeof SearchThreadLinkCandidatesDocument>
  ): SDKResult<{
    searchThreadLinkCandidates: ResultOf<typeof SearchThreadLinkCandidatesDocument>['searchThreadLinkCandidates']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: SearchThreadLinkCandidatesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      searchThreadLinkCandidates: q.searchThreadLinkCandidates.edges.map((edge) => edge.node),
      pageInfo: q.searchThreadLinkCandidates.pageInfo,
    }));
  }

  /**
   * get Help Centers
   */
  async getHelpCenters(
    variables: VariablesOf<typeof HelpCentersDocument>
  ): SDKResult<{
    helpCenters: ResultOf<typeof HelpCentersDocument>['helpCenters']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: HelpCentersDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      helpCenters: q.helpCenters.edges.map((edge) => edge.node),
      pageInfo: q.helpCenters.pageInfo,
    }));
  }

  /**
   * get Help Center
   */
  async getHelpCenter(
    variables: VariablesOf<typeof HelpCenterDocument>
  ): SDKResult<ResultOf<typeof HelpCenterDocument>['helpCenter']> {
    const res = await request(this.#ctx, {
      query: HelpCenterDocument,
      variables,
    });

    return unwrapData(res, (q) => q.helpCenter);
  }

  /**
   * get Help Center Article
   */
  async getHelpCenterArticle(
    variables: VariablesOf<typeof HelpCenterArticleDocument>
  ): SDKResult<ResultOf<typeof HelpCenterArticleDocument>['helpCenterArticle']> {
    const res = await request(this.#ctx, {
      query: HelpCenterArticleDocument,
      variables,
    });

    return unwrapData(res, (q) => q.helpCenterArticle);
  }

  /**
   * get Help Center Article Group
   */
  async getHelpCenterArticleGroup(
    variables: VariablesOf<typeof HelpCenterArticleGroupDocument>
  ): SDKResult<ResultOf<typeof HelpCenterArticleGroupDocument>['helpCenterArticleGroup']> {
    const res = await request(this.#ctx, {
      query: HelpCenterArticleGroupDocument,
      variables,
    });

    return unwrapData(res, (q) => q.helpCenterArticleGroup);
  }

  /**
   * get Help Center Index
   */
  async getHelpCenterIndex(
    variables: VariablesOf<typeof HelpCenterIndexDocument>
  ): SDKResult<ResultOf<typeof HelpCenterIndexDocument>['helpCenterIndex']> {
    const res = await request(this.#ctx, {
      query: HelpCenterIndexDocument,
      variables,
    });

    return unwrapData(res, (q) => q.helpCenterIndex);
  }

  /**
   * Get a help center article by its slug.
   */
  async getHelpCenterArticleBySlug(
    variables: VariablesOf<typeof HelpCenterArticleBySlugDocument>
  ): SDKResult<ResultOf<typeof HelpCenterArticleBySlugDocument>['helpCenterArticleBySlug']> {
    const res = await request(this.#ctx, {
      query: HelpCenterArticleBySlugDocument,
      variables,
    });

    return unwrapData(res, (q) => q.helpCenterArticleBySlug);
  }

  /**
   * Get a help center article group by its slug.
   */
  async getHelpCenterArticleGroupBySlug(
    variables: VariablesOf<typeof HelpCenterArticleGroupBySlugDocument>
  ): SDKResult<ResultOf<typeof HelpCenterArticleGroupBySlugDocument>['helpCenterArticleGroupBySlug']> {
    const res = await request(this.#ctx, {
      query: HelpCenterArticleGroupBySlugDocument,
      variables,
    });

    return unwrapData(res, (q) => q.helpCenterArticleGroupBySlug);
  }

  /**
   * get Issue Tracker Fields
   */
  async getIssueTrackerFields(
    variables: VariablesOf<typeof IssueTrackerFieldsDocument>
  ): SDKResult<ResultOf<typeof IssueTrackerFieldsDocument>['issueTrackerFields']> {
    const res = await request(this.#ctx, {
      query: IssueTrackerFieldsDocument,
      variables,
    });

    return unwrapData(res, (q) => q.issueTrackerFields);
  }

  /**
   * get Customer Surveys
   */
  async getCustomerSurveys(
    variables: VariablesOf<typeof CustomerSurveysDocument>
  ): SDKResult<{
    customerSurveys: ResultOf<typeof CustomerSurveysDocument>['customerSurveys']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: CustomerSurveysDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      customerSurveys: q.customerSurveys.edges.map((edge) => edge.node),
      pageInfo: q.customerSurveys.pageInfo,
    }));
  }

  /**
   * get Customer Survey
   */
  async getCustomerSurvey(
    variables: VariablesOf<typeof CustomerSurveyDocument>
  ): SDKResult<ResultOf<typeof CustomerSurveyDocument>['customerSurvey']> {
    const res = await request(this.#ctx, {
      query: CustomerSurveyDocument,
      variables,
    });

    return unwrapData(res, (q) => q.customerSurvey);
  }

  /**
   * get Escalation Paths
   */
  async getEscalationPaths(
    variables: VariablesOf<typeof EscalationPathsDocument>
  ): SDKResult<{
    escalationPaths: ResultOf<typeof EscalationPathsDocument>['escalationPaths']['edges'][number]['node'][];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: EscalationPathsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      escalationPaths: q.escalationPaths.edges.map((edge) => edge.node),
      pageInfo: q.escalationPaths.pageInfo,
    }));
  }

  /**
   * get Escalation Path
   */
  async getEscalationPath(
    variables: VariablesOf<typeof EscalationPathDocument>
  ): SDKResult<ResultOf<typeof EscalationPathDocument>['escalationPath']> {
    const res = await request(this.#ctx, {
      query: EscalationPathDocument,
      variables,
    });

    return unwrapData(res, (q) => q.escalationPath);
  }

  /**
   * create User Account
   */
  async createUserAccount(
    input: VariablesOf<typeof CreateUserAccountDocument>['input']
  ): SDKResult<ResultOf<typeof CreateUserAccountDocument>['createUserAccount']['userAccount']> {
    const res = await request(this.#ctx, {
      query: CreateUserAccountDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createUserAccount.userAccount);
  }

  /**
   * change User Status
   */
  async changeUserStatus(
    input: VariablesOf<typeof ChangeUserStatusDocument>['input']
  ): SDKResult<ResultOf<typeof ChangeUserStatusDocument>['changeUserStatus']['user']> {
    const res = await request(this.#ctx, {
      query: ChangeUserStatusDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.changeUserStatus.user);
  }

  /**
   * update My User
   */
  async updateMyUser(
    input: VariablesOf<typeof UpdateMyUserDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateMyUserDocument>['updateMyUser']['user']> {
    const res = await request(this.#ctx, {
      query: UpdateMyUserDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateMyUser.user);
  }

  /**
   * update User Default Saved Threads View
   */
  async updateUserDefaultSavedThreadsView(
    input: VariablesOf<typeof UpdateUserDefaultSavedThreadsViewDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateUserDefaultSavedThreadsViewDocument>['updateUserDefaultSavedThreadsView']['user']> {
    const res = await request(this.#ctx, {
      query: UpdateUserDefaultSavedThreadsViewDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateUserDefaultSavedThreadsView.user);
  }

  /**
   * create Workspace
   */
  async createWorkspace(
    input: VariablesOf<typeof CreateWorkspaceDocument>['input']
  ): SDKResult<ResultOf<typeof CreateWorkspaceDocument>['createWorkspace']['workspace']> {
    const res = await request(this.#ctx, {
      query: CreateWorkspaceDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createWorkspace.workspace);
  }

  /**
   * update Workspace
   */
  async updateWorkspace(
    input: VariablesOf<typeof UpdateWorkspaceDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateWorkspaceDocument>['updateWorkspace']['workspace']> {
    const res = await request(this.#ctx, {
      query: UpdateWorkspaceDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateWorkspace.workspace);
  }

  /**
   * invite User To Workspace
   */
  async inviteUserToWorkspace(
    input: VariablesOf<typeof InviteUserToWorkspaceDocument>['input']
  ): SDKResult<ResultOf<typeof InviteUserToWorkspaceDocument>['inviteUserToWorkspace']['invite']> {
    const res = await request(this.#ctx, {
      query: InviteUserToWorkspaceDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.inviteUserToWorkspace.invite);
  }

  /**
   * accept Workspace Invite
   */
  async acceptWorkspaceInvite(
    input: VariablesOf<typeof AcceptWorkspaceInviteDocument>['input']
  ): SDKResult<ResultOf<typeof AcceptWorkspaceInviteDocument>['acceptWorkspaceInvite']['invite']> {
    const res = await request(this.#ctx, {
      query: AcceptWorkspaceInviteDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.acceptWorkspaceInvite.invite);
  }

  /**
   * delete Workspace Invite
   */
  async deleteWorkspaceInvite(
    input: VariablesOf<typeof DeleteWorkspaceInviteDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteWorkspaceInviteDocument>['deleteWorkspaceInvite']['invite']> {
    const res = await request(this.#ctx, {
      query: DeleteWorkspaceInviteDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteWorkspaceInvite.invite);
  }

  /**
   * delete User
   */
  async deleteUser(
    input: VariablesOf<typeof DeleteUserDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteUserDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * assign Roles To User
   */
  async assignRolesToUser(
    input: VariablesOf<typeof AssignRolesToUserDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: AssignRolesToUserDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Custom Role
   */
  async createCustomRole(
    input: VariablesOf<typeof CreateCustomRoleDocument>['input']
  ): SDKResult<ResultOf<typeof CreateCustomRoleDocument>['createCustomRole']['role']> {
    const res = await request(this.#ctx, {
      query: CreateCustomRoleDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createCustomRole.role);
  }

  /**
   * update Custom Role
   */
  async updateCustomRole(
    input: VariablesOf<typeof UpdateCustomRoleDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateCustomRoleDocument>['updateCustomRole']['role']> {
    const res = await request(this.#ctx, {
      query: UpdateCustomRoleDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateCustomRole.role);
  }

  /**
   * delete Custom Role
   */
  async deleteCustomRole(
    input: VariablesOf<typeof DeleteCustomRoleDocument>['input']
  ): SDKResult<string | null> {
    const res = await request(this.#ctx, {
      query: DeleteCustomRoleDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteCustomRole.deletedCustomRoleId);
  }

  /**
   * upsert Role Scopes
   */
  async upsertRoleScopes(
    input: VariablesOf<typeof UpsertRoleScopesDocument>['input']
  ): SDKResult<ResultOf<typeof UpsertRoleScopesDocument>['upsertRoleScopes']['role']> {
    const res = await request(this.#ctx, {
      query: UpsertRoleScopesDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.upsertRoleScopes.role);
  }

  /**
   * create Label Type
   */
  async createLabelType(
    input: VariablesOf<typeof CreateLabelTypeDocument>['input']
  ): SDKResult<ResultOf<typeof CreateLabelTypeDocument>['createLabelType']['labelType']> {
    const res = await request(this.#ctx, {
      query: CreateLabelTypeDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createLabelType.labelType);
  }

  /**
   * archive Label Type
   */
  async archiveLabelType(
    input: VariablesOf<typeof ArchiveLabelTypeDocument>['input']
  ): SDKResult<ResultOf<typeof ArchiveLabelTypeDocument>['archiveLabelType']['labelType']> {
    const res = await request(this.#ctx, {
      query: ArchiveLabelTypeDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.archiveLabelType.labelType);
  }

  /**
   * unarchive Label Type
   */
  async unarchiveLabelType(
    input: VariablesOf<typeof UnarchiveLabelTypeDocument>['input']
  ): SDKResult<ResultOf<typeof UnarchiveLabelTypeDocument>['unarchiveLabelType']['labelType']> {
    const res = await request(this.#ctx, {
      query: UnarchiveLabelTypeDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.unarchiveLabelType.labelType);
  }

  /**
   * update Label Type
   */
  async updateLabelType(
    input: VariablesOf<typeof UpdateLabelTypeDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateLabelTypeDocument>['updateLabelType']['labelType']> {
    const res = await request(this.#ctx, {
      query: UpdateLabelTypeDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateLabelType.labelType);
  }

  /**
   * move Label Type
   */
  async moveLabelType(
    input: VariablesOf<typeof MoveLabelTypeDocument>['input']
  ): SDKResult<ResultOf<typeof MoveLabelTypeDocument>['moveLabelType']['labelType']> {
    const res = await request(this.#ctx, {
      query: MoveLabelTypeDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.moveLabelType.labelType);
  }

  /**
   * add Labels
   */
  async addLabels(
    input: VariablesOf<typeof AddLabelsDocument>['input']
  ): SDKResult<ResultOf<typeof AddLabelsDocument>['addLabels']['labels']> {
    const res = await request(this.#ctx, {
      query: AddLabelsDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.addLabels.labels);
  }

  /**
   * add Labels To User
   */
  async addLabelsToUser(
    input: VariablesOf<typeof AddLabelsToUserDocument>['input']
  ): SDKResult<ResultOf<typeof AddLabelsToUserDocument>['addLabelsToUser']['labels']> {
    const res = await request(this.#ctx, {
      query: AddLabelsToUserDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.addLabelsToUser.labels);
  }

  /**
   * remove Labels
   */
  async removeLabels(
    input: VariablesOf<typeof RemoveLabelsDocument>['input']
  ): SDKResult<ResultOf<typeof RemoveLabelsDocument>['removeLabels']['thread']> {
    const res = await request(this.#ctx, {
      query: RemoveLabelsDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.removeLabels.thread);
  }

  /**
   * remove Labels From User
   */
  async removeLabelsFromUser(
    input: VariablesOf<typeof RemoveLabelsFromUserDocument>['input']
  ): SDKResult<ResultOf<typeof RemoveLabelsFromUserDocument>['removeLabelsFromUser']['labels']> {
    const res = await request(this.#ctx, {
      query: RemoveLabelsFromUserDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.removeLabelsFromUser.labels);
  }

  /**
   * create Thread Link
   */
  async createThreadLink(
    input: VariablesOf<typeof CreateThreadLinkDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: CreateThreadLinkDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * delete Thread Link
   */
  async deleteThreadLink(
    input: VariablesOf<typeof DeleteThreadLinkDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteThreadLinkDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Note
   */
  async createNote(
    input: VariablesOf<typeof CreateNoteDocument>['input']
  ): SDKResult<ResultOf<typeof CreateNoteDocument>['createNote']['note']> {
    const res = await request(this.#ctx, {
      query: CreateNoteDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createNote.note);
  }

  /**
   * delete Note
   */
  async deleteNote(
    input: VariablesOf<typeof DeleteNoteDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteNoteDocument>['deleteNote']['note']> {
    const res = await request(this.#ctx, {
      query: DeleteNoteDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteNote.note);
  }

  /**
   * create Saved Threads View
   */
  async createSavedThreadsView(
    input: VariablesOf<typeof CreateSavedThreadsViewDocument>['input']
  ): SDKResult<ResultOf<typeof CreateSavedThreadsViewDocument>['createSavedThreadsView']['savedThreadsView']> {
    const res = await request(this.#ctx, {
      query: CreateSavedThreadsViewDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createSavedThreadsView.savedThreadsView);
  }

  /**
   * update Saved Threads View
   */
  async updateSavedThreadsView(
    input: VariablesOf<typeof UpdateSavedThreadsViewDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateSavedThreadsViewDocument>['updateSavedThreadsView']['savedThreadsView']> {
    const res = await request(this.#ctx, {
      query: UpdateSavedThreadsViewDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateSavedThreadsView.savedThreadsView);
  }

  /**
   * delete Saved Threads View
   */
  async deleteSavedThreadsView(
    input: VariablesOf<typeof DeleteSavedThreadsViewDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteSavedThreadsViewDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create My Favorite Page
   */
  async createMyFavoritePage(
    input: VariablesOf<typeof CreateMyFavoritePageDocument>['input']
  ): SDKResult<ResultOf<typeof CreateMyFavoritePageDocument>['createMyFavoritePage']['favoritePage']> {
    const res = await request(this.#ctx, {
      query: CreateMyFavoritePageDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createMyFavoritePage.favoritePage);
  }

  /**
   * delete My Favorite Page
   */
  async deleteMyFavoritePage(
    input: VariablesOf<typeof DeleteMyFavoritePageDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteMyFavoritePageDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Snippet
   */
  async createSnippet(
    input: VariablesOf<typeof CreateSnippetDocument>['input']
  ): SDKResult<ResultOf<typeof CreateSnippetDocument>['createSnippet']['snippet']> {
    const res = await request(this.#ctx, {
      query: CreateSnippetDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createSnippet.snippet);
  }

  /**
   * delete Snippet
   */
  async deleteSnippet(
    input: VariablesOf<typeof DeleteSnippetDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteSnippetDocument>['deleteSnippet']['snippet']> {
    const res = await request(this.#ctx, {
      query: DeleteSnippetDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteSnippet.snippet);
  }

  /**
   * update Snippet
   */
  async updateSnippet(
    input: VariablesOf<typeof UpdateSnippetDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateSnippetDocument>['updateSnippet']['snippet']> {
    const res = await request(this.#ctx, {
      query: UpdateSnippetDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateSnippet.snippet);
  }

  /**
   * Creates or updates a customer.
   */
  async upsertCustomer(
    input: VariablesOf<typeof UpsertCustomerDocument>['input']
  ): SDKResult<UpsertResult | null> {
    const res = await request(this.#ctx, {
      query: UpsertCustomerDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.upsertCustomer.result);
  }

  /**
   * Changes the company of a customer.
   */
  async updateCustomerCompany(
    input: VariablesOf<typeof UpdateCustomerCompanyDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateCustomerCompanyDocument>['updateCustomerCompany']['customer']> {
    const res = await request(this.#ctx, {
      query: UpdateCustomerCompanyDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateCustomerCompany.customer);
  }

  /**
   * Deletes a customer and all of their data stored on Plain. This action cannot be reversed.
   */
  async deleteCustomer(
    input: VariablesOf<typeof DeleteCustomerDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteCustomerDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * Marks a customer as spam.
   */
  async markCustomerAsSpam(
    input: VariablesOf<typeof MarkCustomerAsSpamDocument>['input']
  ): SDKResult<ResultOf<typeof MarkCustomerAsSpamDocument>['markCustomerAsSpam']['customer']> {
    const res = await request(this.#ctx, {
      query: MarkCustomerAsSpamDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.markCustomerAsSpam.customer);
  }

  /**
   * Removes the spam mark from a customer.
   */
  async unmarkCustomerAsSpam(
    input: VariablesOf<typeof UnmarkCustomerAsSpamDocument>['input']
  ): SDKResult<ResultOf<typeof UnmarkCustomerAsSpamDocument>['unmarkCustomerAsSpam']['customer']> {
    const res = await request(this.#ctx, {
      query: UnmarkCustomerAsSpamDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.unmarkCustomerAsSpam.customer);
  }

  /**
   * Creates or updates a customer group.
   */
  async upsertCustomerGroup(
    input: VariablesOf<typeof UpsertCustomerGroupDocument>['input']
  ): SDKResult<ResultOf<typeof UpsertCustomerGroupDocument>['upsertCustomerGroup']['customerGroup']> {
    const res = await request(this.#ctx, {
      query: UpsertCustomerGroupDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.upsertCustomerGroup.customerGroup);
  }

  /**
   * Create a new customer group.
   */
  async createCustomerGroup(
    input: VariablesOf<typeof CreateCustomerGroupDocument>['input']
  ): SDKResult<ResultOf<typeof CreateCustomerGroupDocument>['createCustomerGroup']['customerGroup']> {
    const res = await request(this.#ctx, {
      query: CreateCustomerGroupDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createCustomerGroup.customerGroup);
  }

  /**
   * Update a customer group.
   */
  async updateCustomerGroup(
    input: VariablesOf<typeof UpdateCustomerGroupDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateCustomerGroupDocument>['updateCustomerGroup']['customerGroup']> {
    const res = await request(this.#ctx, {
      query: UpdateCustomerGroupDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateCustomerGroup.customerGroup);
  }

  /**
   * Delete a customer group by ID.
   */
  async deleteCustomerGroup(
    input: VariablesOf<typeof DeleteCustomerGroupDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteCustomerGroupDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * Add a customer to a customer group.
   */
  async addCustomerToCustomerGroups(
    input: VariablesOf<typeof AddCustomerToCustomerGroupsDocument>['input']
  ): SDKResult<ResultOf<typeof AddCustomerToCustomerGroupsDocument>['addCustomerToCustomerGroups']['customerGroupMemberships']> {
    const res = await request(this.#ctx, {
      query: AddCustomerToCustomerGroupsDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.addCustomerToCustomerGroups.customerGroupMemberships);
  }

  /**
   * Remove a customer from a customer group.
   */
  async removeCustomerFromCustomerGroups(
    input: VariablesOf<typeof RemoveCustomerFromCustomerGroupsDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: RemoveCustomerFromCustomerGroupsDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Thread Field Schema
   */
  async createThreadFieldSchema(
    input: VariablesOf<typeof CreateThreadFieldSchemaDocument>['input']
  ): SDKResult<ResultOf<typeof CreateThreadFieldSchemaDocument>['createThreadFieldSchema']['threadFieldSchema']> {
    const res = await request(this.#ctx, {
      query: CreateThreadFieldSchemaDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createThreadFieldSchema.threadFieldSchema);
  }

  /**
   * update Thread Field Schema
   */
  async updateThreadFieldSchema(
    input: VariablesOf<typeof UpdateThreadFieldSchemaDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateThreadFieldSchemaDocument>['updateThreadFieldSchema']['threadFieldSchema']> {
    const res = await request(this.#ctx, {
      query: UpdateThreadFieldSchemaDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateThreadFieldSchema.threadFieldSchema);
  }

  /**
   * delete Thread Field Schema
   */
  async deleteThreadFieldSchema(
    input: VariablesOf<typeof DeleteThreadFieldSchemaDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteThreadFieldSchemaDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * reorder Thread Field Schemas
   */
  async reorderThreadFieldSchemas(
    input: VariablesOf<typeof ReorderThreadFieldSchemasDocument>['input']
  ): SDKResult<ResultOf<typeof ReorderThreadFieldSchemasDocument>['reorderThreadFieldSchemas']['threadFieldSchemas']> {
    const res = await request(this.#ctx, {
      query: ReorderThreadFieldSchemasDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.reorderThreadFieldSchemas.threadFieldSchemas);
  }

  /**
   * upsert Thread Field
   */
  async upsertThreadField(
    input: VariablesOf<typeof UpsertThreadFieldDocument>['input']
  ): SDKResult<ResultOf<typeof UpsertThreadFieldDocument>['upsertThreadField']['threadField']> {
    const res = await request(this.#ctx, {
      query: UpsertThreadFieldDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.upsertThreadField.threadField);
  }

  /**
   * bulk Upsert Thread Fields
   */
  async bulkUpsertThreadFields(
    input: VariablesOf<typeof BulkUpsertThreadFieldsDocument>['input']
  ): SDKResult<ResultOf<typeof BulkUpsertThreadFieldsDocument>['bulkUpsertThreadFields']['results']> {
    const res = await request(this.#ctx, {
      query: BulkUpsertThreadFieldsDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.bulkUpsertThreadFields.results);
  }

  /**
   * delete Thread Field
   */
  async deleteThreadField(
    input: VariablesOf<typeof DeleteThreadFieldDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteThreadFieldDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Escalation Path
   */
  async createEscalationPath(
    input: VariablesOf<typeof CreateEscalationPathDocument>['input']
  ): SDKResult<ResultOf<typeof CreateEscalationPathDocument>['createEscalationPath']['escalationPath']> {
    const res = await request(this.#ctx, {
      query: CreateEscalationPathDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createEscalationPath.escalationPath);
  }

  /**
   * update Escalation Path
   */
  async updateEscalationPath(
    input: VariablesOf<typeof UpdateEscalationPathDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateEscalationPathDocument>['updateEscalationPath']['escalationPath']> {
    const res = await request(this.#ctx, {
      query: UpdateEscalationPathDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateEscalationPath.escalationPath);
  }

  /**
   * delete Escalation Path
   */
  async deleteEscalationPath(
    input: VariablesOf<typeof DeleteEscalationPathDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteEscalationPathDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Workflow Rule
   */
  async createWorkflowRule(
    input: VariablesOf<typeof CreateWorkflowRuleDocument>['input']
  ): SDKResult<ResultOf<typeof CreateWorkflowRuleDocument>['createWorkflowRule']['workflowRule']> {
    const res = await request(this.#ctx, {
      query: CreateWorkflowRuleDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createWorkflowRule.workflowRule);
  }

  /**
   * update Workflow Rule
   */
  async updateWorkflowRule(
    input: VariablesOf<typeof UpdateWorkflowRuleDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateWorkflowRuleDocument>['updateWorkflowRule']['workflowRule']> {
    const res = await request(this.#ctx, {
      query: UpdateWorkflowRuleDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateWorkflowRule.workflowRule);
  }

  /**
   * toggle Workflow Rule Published
   */
  async toggleWorkflowRulePublished(
    input: VariablesOf<typeof ToggleWorkflowRulePublishedDocument>['input']
  ): SDKResult<ResultOf<typeof ToggleWorkflowRulePublishedDocument>['toggleWorkflowRulePublished']['workflowRule']> {
    const res = await request(this.#ctx, {
      query: ToggleWorkflowRulePublishedDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.toggleWorkflowRulePublished.workflowRule);
  }

  /**
   * delete Workflow Rule
   */
  async deleteWorkflowRule(
    input: VariablesOf<typeof DeleteWorkflowRuleDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteWorkflowRuleDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * send Chat
   */
  async sendChat(
    input: VariablesOf<typeof SendChatDocument>['input']
  ): SDKResult<ResultOf<typeof SendChatDocument>['sendChat']['chat']> {
    const res = await request(this.#ctx, {
      query: SendChatDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.sendChat.chat);
  }

  /**
   * send Customer Chat
   */
  async sendCustomerChat(
    input: VariablesOf<typeof SendCustomerChatDocument>['input']
  ): SDKResult<ResultOf<typeof SendCustomerChatDocument>['sendCustomerChat']['chat']> {
    const res = await request(this.#ctx, {
      query: SendCustomerChatDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.sendCustomerChat.chat);
  }

  /**
   * create Chat App
   */
  async createChatApp(
    input: VariablesOf<typeof CreateChatAppDocument>['input']
  ): SDKResult<ResultOf<typeof CreateChatAppDocument>['createChatApp']['chatApp']> {
    const res = await request(this.#ctx, {
      query: CreateChatAppDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createChatApp.chatApp);
  }

  /**
   * update Chat App
   */
  async updateChatApp(
    input: VariablesOf<typeof UpdateChatAppDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateChatAppDocument>['updateChatApp']['chatApp']> {
    const res = await request(this.#ctx, {
      query: UpdateChatAppDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateChatApp.chatApp);
  }

  /**
   * delete Chat App
   */
  async deleteChatApp(
    input: VariablesOf<typeof DeleteChatAppDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteChatAppDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Chat App Secret
   */
  async createChatAppSecret(
    input: VariablesOf<typeof CreateChatAppSecretDocument>['input']
  ): SDKResult<ResultOf<typeof CreateChatAppSecretDocument>['createChatAppSecret']['chatAppSecret']> {
    const res = await request(this.#ctx, {
      query: CreateChatAppSecretDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createChatAppSecret.chatAppSecret);
  }

  /**
   * delete Chat App Secret
   */
  async deleteChatAppSecret(
    input: VariablesOf<typeof DeleteChatAppSecretDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteChatAppSecretDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * send M S Teams Message
   */
  async sendMSTeamsMessage(
    input: VariablesOf<typeof SendMsTeamsMessageDocument>['input']
  ): SDKResult<ResultOf<typeof SendMsTeamsMessageDocument>['sendMSTeamsMessage']['msTeamsMessage']> {
    const res = await request(this.#ctx, {
      query: SendMsTeamsMessageDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.sendMSTeamsMessage.msTeamsMessage);
  }

  /**
   * send Slack Message
   */
  async sendSlackMessage(
    input: VariablesOf<typeof SendSlackMessageDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: SendSlackMessageDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * share Thread To User In Slack
   */
  async shareThreadToUserInSlack(
    input: VariablesOf<typeof ShareThreadToUserInSlackDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: ShareThreadToUserInSlackDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * send Discord Message
   */
  async sendDiscordMessage(
    input: VariablesOf<typeof SendDiscordMessageDocument>['input']
  ): SDKResult<ResultOf<typeof SendDiscordMessageDocument>['sendDiscordMessage']['discordMessage']> {
    const res = await request(this.#ctx, {
      query: SendDiscordMessageDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.sendDiscordMessage.discordMessage);
  }

  /**
   * Adds or removes a reaction from a slack message timeline entry.
   */
  async toggleSlackMessageReaction(
    input: VariablesOf<typeof ToggleSlackMessageReactionDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: ToggleSlackMessageReactionDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * fork Thread
   */
  async forkThread(
    input: VariablesOf<typeof ForkThreadDocument>['input']
  ): SDKResult<ResultOf<typeof ForkThreadDocument>['forkThread']['thread']> {
    const res = await request(this.#ctx, {
      query: ForkThreadDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.forkThread.thread);
  }

  /**
   * update Connected Slack Channel
   */
  async updateConnectedSlackChannel(
    input: VariablesOf<typeof UpdateConnectedSlackChannelDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateConnectedSlackChannelDocument>['updateConnectedSlackChannel']['connectedSlackChannel']> {
    const res = await request(this.#ctx, {
      query: UpdateConnectedSlackChannelDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateConnectedSlackChannel.connectedSlackChannel);
  }

  /**
   * bulk Join Slack Channels
   */
  async bulkJoinSlackChannels(
    input: VariablesOf<typeof BulkJoinSlackChannelsDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: BulkJoinSlackChannelsDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * Create a new customer event.
   */
  async createCustomerEvent(
    input: VariablesOf<typeof CreateCustomerEventDocument>['input']
  ): SDKResult<ResultOf<typeof CreateCustomerEventDocument>['createCustomerEvent']['customerEvent']> {
    const res = await request(this.#ctx, {
      query: CreateCustomerEventDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createCustomerEvent.customerEvent);
  }

  /**
   * Create a new thread event.
   */
  async createThreadEvent(
    input: VariablesOf<typeof CreateThreadEventDocument>['input']
  ): SDKResult<ResultOf<typeof CreateThreadEventDocument>['createThreadEvent']['threadEvent']> {
    const res = await request(this.#ctx, {
      query: CreateThreadEventDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createThreadEvent.threadEvent);
  }

  /**
   * create Workspace Email Domain Settings
   */
  async createWorkspaceEmailDomainSettings(
    input: VariablesOf<typeof CreateWorkspaceEmailDomainSettingsDocument>['input']
  ): SDKResult<ResultOf<typeof CreateWorkspaceEmailDomainSettingsDocument>['createWorkspaceEmailDomainSettings']['workspaceEmailDomainSettings']> {
    const res = await request(this.#ctx, {
      query: CreateWorkspaceEmailDomainSettingsDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createWorkspaceEmailDomainSettings.workspaceEmailDomainSettings);
  }

  /**
   * delete Workspace Email Domain Settings
   */
  async deleteWorkspaceEmailDomainSettings(): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteWorkspaceEmailDomainSettingsDocument,
      
    });

    return unwrapData(res, () => null);
  }

  /**
   * verify Workspace Email Forwarding Settings
   */
  async verifyWorkspaceEmailForwardingSettings(
    input: VariablesOf<typeof VerifyWorkspaceEmailForwardingSettingsDocument>['input']
  ): SDKResult<ResultOf<typeof VerifyWorkspaceEmailForwardingSettingsDocument>['verifyWorkspaceEmailForwardingSettings']['workspaceEmailDomainSettings']> {
    const res = await request(this.#ctx, {
      query: VerifyWorkspaceEmailForwardingSettingsDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.verifyWorkspaceEmailForwardingSettings.workspaceEmailDomainSettings);
  }

  /**
   * verify Workspace Email Dns Settings
   */
  async verifyWorkspaceEmailDnsSettings(): SDKResult<ResultOf<typeof VerifyWorkspaceEmailDnsSettingsDocument>['verifyWorkspaceEmailDnsSettings']['workspaceEmailDomainSettings']> {
    const res = await request(this.#ctx, {
      query: VerifyWorkspaceEmailDnsSettingsDocument,
      
    });

    return unwrapData(res, (q) => q.verifyWorkspaceEmailDnsSettings.workspaceEmailDomainSettings);
  }

  /**
   * update Workspace Email Settings
   */
  async updateWorkspaceEmailSettings(
    input: VariablesOf<typeof UpdateWorkspaceEmailSettingsDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateWorkspaceEmailSettingsDocument>['updateWorkspaceEmailSettings']['workspaceEmailSettings']> {
    const res = await request(this.#ctx, {
      query: UpdateWorkspaceEmailSettingsDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateWorkspaceEmailSettings.workspaceEmailSettings);
  }

  /**
   * add Workspace Alternate Support Email Address
   */
  async addWorkspaceAlternateSupportEmailAddress(
    input: VariablesOf<typeof AddWorkspaceAlternateSupportEmailAddressDocument>['input']
  ): SDKResult<ResultOf<typeof AddWorkspaceAlternateSupportEmailAddressDocument>['addWorkspaceAlternateSupportEmailAddress']['workspaceEmailDomainSettings']> {
    const res = await request(this.#ctx, {
      query: AddWorkspaceAlternateSupportEmailAddressDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.addWorkspaceAlternateSupportEmailAddress.workspaceEmailDomainSettings);
  }

  /**
   * remove Workspace Alternate Support Email Address
   */
  async removeWorkspaceAlternateSupportEmailAddress(
    input: VariablesOf<typeof RemoveWorkspaceAlternateSupportEmailAddressDocument>['input']
  ): SDKResult<ResultOf<typeof RemoveWorkspaceAlternateSupportEmailAddressDocument>['removeWorkspaceAlternateSupportEmailAddress']['workspaceEmailDomainSettings']> {
    const res = await request(this.#ctx, {
      query: RemoveWorkspaceAlternateSupportEmailAddressDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.removeWorkspaceAlternateSupportEmailAddress.workspaceEmailDomainSettings);
  }

  /**
   * send New Email
   */
  async sendNewEmail(
    input: VariablesOf<typeof SendNewEmailDocument>['input']
  ): SDKResult<ResultOf<typeof SendNewEmailDocument>['sendNewEmail']['email']> {
    const res = await request(this.#ctx, {
      query: SendNewEmailDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.sendNewEmail.email);
  }

  /**
   * reply To Email
   */
  async replyToEmail(
    input: VariablesOf<typeof ReplyToEmailDocument>['input']
  ): SDKResult<ResultOf<typeof ReplyToEmailDocument>['replyToEmail']['email']> {
    const res = await request(this.#ctx, {
      query: ReplyToEmailDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.replyToEmail.email);
  }

  /**
   * create Email Preview Url
   */
  async createEmailPreviewUrl(
    input: VariablesOf<typeof CreateEmailPreviewUrlDocument>['input']
  ): SDKResult<ResultOf<typeof CreateEmailPreviewUrlDocument>['createEmailPreviewUrl']['emailPreviewUrl']> {
    const res = await request(this.#ctx, {
      query: CreateEmailPreviewUrlDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createEmailPreviewUrl.emailPreviewUrl);
  }

  /**
   * send Bulk Email
   */
  async sendBulkEmail(
    input: VariablesOf<typeof SendBulkEmailDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: SendBulkEmailDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Attachment Download Url
   */
  async createAttachmentDownloadUrl(
    input: VariablesOf<typeof CreateAttachmentDownloadUrlDocument>['input']
  ): SDKResult<ResultOf<typeof CreateAttachmentDownloadUrlDocument>['createAttachmentDownloadUrl']['attachmentDownloadUrl']> {
    const res = await request(this.#ctx, {
      query: CreateAttachmentDownloadUrlDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createAttachmentDownloadUrl.attachmentDownloadUrl);
  }

  /**
   * create Attachment Upload Url
   */
  async createAttachmentUploadUrl(
    input: VariablesOf<typeof CreateAttachmentUploadUrlDocument>['input']
  ): SDKResult<ResultOf<typeof CreateAttachmentUploadUrlDocument>['createAttachmentUploadUrl']['attachmentUploadUrl']> {
    const res = await request(this.#ctx, {
      query: CreateAttachmentUploadUrlDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createAttachmentUploadUrl.attachmentUploadUrl);
  }

  /**
   * create Machine User
   */
  async createMachineUser(
    input: VariablesOf<typeof CreateMachineUserDocument>['input']
  ): SDKResult<ResultOf<typeof CreateMachineUserDocument>['createMachineUser']['machineUser']> {
    const res = await request(this.#ctx, {
      query: CreateMachineUserDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createMachineUser.machineUser);
  }

  /**
   * delete Machine User
   */
  async deleteMachineUser(
    input: VariablesOf<typeof DeleteMachineUserDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteMachineUserDocument>['deleteMachineUser']['machineUser']> {
    const res = await request(this.#ctx, {
      query: DeleteMachineUserDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteMachineUser.machineUser);
  }

  /**
   * update Machine User
   */
  async updateMachineUser(
    input: VariablesOf<typeof UpdateMachineUserDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateMachineUserDocument>['updateMachineUser']['machineUser']> {
    const res = await request(this.#ctx, {
      query: UpdateMachineUserDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateMachineUser.machineUser);
  }

  /**
   * create Api Key
   */
  async createApiKey(
    input: VariablesOf<typeof CreateApiKeyDocument>['input']
  ): SDKResult<ResultOf<typeof CreateApiKeyDocument>['createApiKey']['apiKey']> {
    const res = await request(this.#ctx, {
      query: CreateApiKeyDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createApiKey.apiKey);
  }

  /**
   * update Api Key
   */
  async updateApiKey(
    input: VariablesOf<typeof UpdateApiKeyDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateApiKeyDocument>['updateApiKey']['apiKey']> {
    const res = await request(this.#ctx, {
      query: UpdateApiKeyDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateApiKey.apiKey);
  }

  /**
   * delete Api Key
   */
  async deleteApiKey(
    input: VariablesOf<typeof DeleteApiKeyDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteApiKeyDocument>['deleteApiKey']['apiKey']> {
    const res = await request(this.#ctx, {
      query: DeleteApiKeyDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteApiKey.apiKey);
  }

  /**
   * create My Slack Integration
   */
  async createMySlackIntegration(
    input: VariablesOf<typeof CreateMySlackIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof CreateMySlackIntegrationDocument>['createMySlackIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: CreateMySlackIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createMySlackIntegration.integration);
  }

  /**
   * delete My Slack Integration
   */
  async deleteMySlackIntegration(): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteMySlackIntegrationDocument,
      
    });

    return unwrapData(res, () => null);
  }

  /**
   * create User Auth Slack Integration
   */
  async createUserAuthSlackIntegration(
    input: VariablesOf<typeof CreateUserAuthSlackIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof CreateUserAuthSlackIntegrationDocument>['createUserAuthSlackIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: CreateUserAuthSlackIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createUserAuthSlackIntegration.integration);
  }

  /**
   * delete User Auth Slack Integration
   */
  async deleteUserAuthSlackIntegration(
    input: VariablesOf<typeof DeleteUserAuthSlackIntegrationDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteUserAuthSlackIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Workspace Slack Integration
   */
  async createWorkspaceSlackIntegration(
    input: VariablesOf<typeof CreateWorkspaceSlackIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof CreateWorkspaceSlackIntegrationDocument>['createWorkspaceSlackIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: CreateWorkspaceSlackIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createWorkspaceSlackIntegration.integration);
  }

  /**
   * delete Workspace Slack Integration
   */
  async deleteWorkspaceSlackIntegration(
    input: VariablesOf<typeof DeleteWorkspaceSlackIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteWorkspaceSlackIntegrationDocument>['deleteWorkspaceSlackIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: DeleteWorkspaceSlackIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteWorkspaceSlackIntegration.integration);
  }

  /**
   * create Workspace Slack Channel Integration
   */
  async createWorkspaceSlackChannelIntegration(
    input: VariablesOf<typeof CreateWorkspaceSlackChannelIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof CreateWorkspaceSlackChannelIntegrationDocument>['createWorkspaceSlackChannelIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: CreateWorkspaceSlackChannelIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createWorkspaceSlackChannelIntegration.integration);
  }

  /**
   * refresh Workspace Slack Channel Integration
   */
  async refreshWorkspaceSlackChannelIntegration(
    input: VariablesOf<typeof RefreshWorkspaceSlackChannelIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof RefreshWorkspaceSlackChannelIntegrationDocument>['refreshWorkspaceSlackChannelIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: RefreshWorkspaceSlackChannelIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.refreshWorkspaceSlackChannelIntegration.integration);
  }

  /**
   * delete Workspace Slack Channel Integration
   */
  async deleteWorkspaceSlackChannelIntegration(
    input: VariablesOf<typeof DeleteWorkspaceSlackChannelIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteWorkspaceSlackChannelIntegrationDocument>['deleteWorkspaceSlackChannelIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: DeleteWorkspaceSlackChannelIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteWorkspaceSlackChannelIntegration.integration);
  }

  /**
   * create Workspace Discord Channel Integration
   */
  async createWorkspaceDiscordChannelIntegration(
    input: VariablesOf<typeof CreateWorkspaceDiscordChannelIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof CreateWorkspaceDiscordChannelIntegrationDocument>['createWorkspaceDiscordChannelIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: CreateWorkspaceDiscordChannelIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createWorkspaceDiscordChannelIntegration.integration);
  }

  /**
   * delete Workspace Discord Channel Integration
   */
  async deleteWorkspaceDiscordChannelIntegration(
    input: VariablesOf<typeof DeleteWorkspaceDiscordChannelIntegrationDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteWorkspaceDiscordChannelIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create User Auth Discord Channel Integration
   */
  async createUserAuthDiscordChannelIntegration(
    input: VariablesOf<typeof CreateUserAuthDiscordChannelIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof CreateUserAuthDiscordChannelIntegrationDocument>['createUserAuthDiscordChannelIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: CreateUserAuthDiscordChannelIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createUserAuthDiscordChannelIntegration.integration);
  }

  /**
   * delete User Auth Discord Channel Integration
   */
  async deleteUserAuthDiscordChannelIntegration(
    input: VariablesOf<typeof DeleteUserAuthDiscordChannelIntegrationDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteUserAuthDiscordChannelIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * refresh Connected Discord Channels
   */
  async refreshConnectedDiscordChannels(
    input: VariablesOf<typeof RefreshConnectedDiscordChannelsDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: RefreshConnectedDiscordChannelsDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * update Connected Discord Channel
   */
  async updateConnectedDiscordChannel(
    input: VariablesOf<typeof UpdateConnectedDiscordChannelDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateConnectedDiscordChannelDocument>['updateConnectedDiscordChannel']['connectedDiscordChannel']> {
    const res = await request(this.#ctx, {
      query: UpdateConnectedDiscordChannelDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateConnectedDiscordChannel.connectedDiscordChannel);
  }

  /**
   * create Workspace Discord Integration
   */
  async createWorkspaceDiscordIntegration(
    input: VariablesOf<typeof CreateWorkspaceDiscordIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof CreateWorkspaceDiscordIntegrationDocument>['createWorkspaceDiscordIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: CreateWorkspaceDiscordIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createWorkspaceDiscordIntegration.integration);
  }

  /**
   * delete Workspace Discord Integration
   */
  async deleteWorkspaceDiscordIntegration(
    input: VariablesOf<typeof DeleteWorkspaceDiscordIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteWorkspaceDiscordIntegrationDocument>['deleteWorkspaceDiscordIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: DeleteWorkspaceDiscordIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteWorkspaceDiscordIntegration.integration);
  }

  /**
   * create My Linear Integration
   */
  async createMyLinearIntegration(
    input: VariablesOf<typeof CreateMyLinearIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof CreateMyLinearIntegrationDocument>['createMyLinearIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: CreateMyLinearIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createMyLinearIntegration.integration);
  }

  /**
   * delete My Linear Integration
   */
  async deleteMyLinearIntegration(): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteMyLinearIntegrationDocument,
      
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Github User Auth Integration
   */
  async createGithubUserAuthIntegration(
    input: VariablesOf<typeof CreateGithubUserAuthIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof CreateGithubUserAuthIntegrationDocument>['createGithubUserAuthIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: CreateGithubUserAuthIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createGithubUserAuthIntegration.integration);
  }

  /**
   * delete Github User Auth Integration
   */
  async deleteGithubUserAuthIntegration(): SDKResult<string | null> {
    const res = await request(this.#ctx, {
      query: DeleteGithubUserAuthIntegrationDocument,
      
    });

    return unwrapData(res, (q) => q.deleteGithubUserAuthIntegration.deletedIntegrationId);
  }

  /**
   * create Workspace Cursor Integration
   */
  async createWorkspaceCursorIntegration(
    input: VariablesOf<typeof CreateWorkspaceCursorIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof CreateWorkspaceCursorIntegrationDocument>['createWorkspaceCursorIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: CreateWorkspaceCursorIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createWorkspaceCursorIntegration.integration);
  }

  /**
   * delete Workspace Cursor Integration
   */
  async deleteWorkspaceCursorIntegration(
    variables: VariablesOf<typeof DeleteWorkspaceCursorIntegrationDocument>
  ): SDKResult<string | null> {
    const res = await request(this.#ctx, {
      query: DeleteWorkspaceCursorIntegrationDocument,
      variables,
    });

    return unwrapData(res, (q) => q.deleteWorkspaceCursorIntegration.id);
  }

  /**
   * create My M S Teams Integration
   */
  async createMyMSTeamsIntegration(
    input: VariablesOf<typeof CreateMyMsTeamsIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof CreateMyMsTeamsIntegrationDocument>['createMyMSTeamsIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: CreateMyMsTeamsIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createMyMSTeamsIntegration.integration);
  }

  /**
   * delete My M S Teams Integration
   */
  async deleteMyMSTeamsIntegration(): SDKResult<ResultOf<typeof DeleteMyMsTeamsIntegrationDocument>['deleteMyMSTeamsIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: DeleteMyMsTeamsIntegrationDocument,
      
    });

    return unwrapData(res, (q) => q.deleteMyMSTeamsIntegration.integration);
  }

  /**
   * create Workspace M S Teams Integration
   */
  async createWorkspaceMSTeamsIntegration(
    input: VariablesOf<typeof CreateWorkspaceMsTeamsIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof CreateWorkspaceMsTeamsIntegrationDocument>['createWorkspaceMSTeamsIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: CreateWorkspaceMsTeamsIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createWorkspaceMSTeamsIntegration.integration);
  }

  /**
   * delete Workspace M S Teams Integration
   */
  async deleteWorkspaceMSTeamsIntegration(
    input: VariablesOf<typeof DeleteWorkspaceMsTeamsIntegrationDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteWorkspaceMsTeamsIntegrationDocument>['deleteWorkspaceMSTeamsIntegration']['integration']> {
    const res = await request(this.#ctx, {
      query: DeleteWorkspaceMsTeamsIntegrationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteWorkspaceMSTeamsIntegration.integration);
  }

  /**
   * Updates a setting.
   */
  async updateSetting(
    input: VariablesOf<typeof UpdateSettingDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: UpdateSettingDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * Creates a customer card config. A maximum of 25 card configs can be created.
   */
  async createCustomerCardConfig(
    input: VariablesOf<typeof CreateCustomerCardConfigDocument>['input']
  ): SDKResult<ResultOf<typeof CreateCustomerCardConfigDocument>['createCustomerCardConfig']['customerCardConfig']> {
    const res = await request(this.#ctx, {
      query: CreateCustomerCardConfigDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createCustomerCardConfig.customerCardConfig);
  }

  /**
   * Partially updates a customer card config.
   */
  async updateCustomerCardConfig(
    input: VariablesOf<typeof UpdateCustomerCardConfigDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateCustomerCardConfigDocument>['updateCustomerCardConfig']['customerCardConfig']> {
    const res = await request(this.#ctx, {
      query: UpdateCustomerCardConfigDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateCustomerCardConfig.customerCardConfig);
  }

  /**
   * Deletes a customer card config.
   */
  async deleteCustomerCardConfig(
    input: VariablesOf<typeof DeleteCustomerCardConfigDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteCustomerCardConfigDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * Reorders customer card configs.

The input can be a partial input and in that case not all configs will be reordered.
For example this allows two configs to be swapped with each other.

Note: Duplicate orders are allowed by the API.
   */
  async reorderCustomerCardConfigs(
    input: VariablesOf<typeof ReorderCustomerCardConfigsDocument>['input']
  ): SDKResult<ResultOf<typeof ReorderCustomerCardConfigsDocument>['reorderCustomerCardConfigs']['customerCardConfigs']> {
    const res = await request(this.#ctx, {
      query: ReorderCustomerCardConfigsDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.reorderCustomerCardConfigs.customerCardConfigs);
  }

  /**
   * Reloads a customer card for a customer.

Will discard whatever is in the cache and reload it from the configured API URL.
   */
  async reloadCustomerCardInstance(
    input: VariablesOf<typeof ReloadCustomerCardInstanceDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: ReloadCustomerCardInstanceDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * Creates a webhook target.
   */
  async createWebhookTarget(
    input: VariablesOf<typeof CreateWebhookTargetDocument>['input']
  ): SDKResult<ResultOf<typeof CreateWebhookTargetDocument>['createWebhookTarget']['webhookTarget']> {
    const res = await request(this.#ctx, {
      query: CreateWebhookTargetDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createWebhookTarget.webhookTarget);
  }

  /**
   * Updates a webhook target.
   */
  async updateWebhookTarget(
    input: VariablesOf<typeof UpdateWebhookTargetDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateWebhookTargetDocument>['updateWebhookTarget']['webhookTarget']> {
    const res = await request(this.#ctx, {
      query: UpdateWebhookTargetDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateWebhookTarget.webhookTarget);
  }

  /**
   * Deletes a webhook target.
   */
  async deleteWebhookTarget(
    input: VariablesOf<typeof DeleteWebhookTargetDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteWebhookTargetDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Thread
   */
  async createThread(
    input: VariablesOf<typeof CreateThreadDocument>['input']
  ): SDKResult<ResultOf<typeof CreateThreadDocument>['createThread']['thread']> {
    const res = await request(this.#ctx, {
      query: CreateThreadDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createThread.thread);
  }

  /**
   * assign Thread
   */
  async assignThread(
    input: VariablesOf<typeof AssignThreadDocument>['input']
  ): SDKResult<ResultOf<typeof AssignThreadDocument>['assignThread']['thread']> {
    const res = await request(this.#ctx, {
      query: AssignThreadDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.assignThread.thread);
  }

  /**
   * unassign Thread
   */
  async unassignThread(
    input: VariablesOf<typeof UnassignThreadDocument>['input']
  ): SDKResult<ResultOf<typeof UnassignThreadDocument>['unassignThread']['thread']> {
    const res = await request(this.#ctx, {
      query: UnassignThreadDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.unassignThread.thread);
  }

  /**
   * add Additional Assignees
   */
  async addAdditionalAssignees(
    input: VariablesOf<typeof AddAdditionalAssigneesDocument>['input']
  ): SDKResult<ResultOf<typeof AddAdditionalAssigneesDocument>['addAdditionalAssignees']['thread']> {
    const res = await request(this.#ctx, {
      query: AddAdditionalAssigneesDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.addAdditionalAssignees.thread);
  }

  /**
   * remove Additional Assignees
   */
  async removeAdditionalAssignees(
    input: VariablesOf<typeof RemoveAdditionalAssigneesDocument>['input']
  ): SDKResult<ResultOf<typeof RemoveAdditionalAssigneesDocument>['removeAdditionalAssignees']['thread']> {
    const res = await request(this.#ctx, {
      query: RemoveAdditionalAssigneesDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.removeAdditionalAssignees.thread);
  }

  /**
   * snooze Thread
   */
  async snoozeThread(
    input: VariablesOf<typeof SnoozeThreadDocument>['input']
  ): SDKResult<ResultOf<typeof SnoozeThreadDocument>['snoozeThread']['thread']> {
    const res = await request(this.#ctx, {
      query: SnoozeThreadDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.snoozeThread.thread);
  }

  /**
   * mark Thread As Done
   */
  async markThreadAsDone(
    input: VariablesOf<typeof MarkThreadAsDoneDocument>['input']
  ): SDKResult<ResultOf<typeof MarkThreadAsDoneDocument>['markThreadAsDone']['thread']> {
    const res = await request(this.#ctx, {
      query: MarkThreadAsDoneDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.markThreadAsDone.thread);
  }

  /**
   * mark Thread As Todo
   */
  async markThreadAsTodo(
    input: VariablesOf<typeof MarkThreadAsTodoDocument>['input']
  ): SDKResult<ResultOf<typeof MarkThreadAsTodoDocument>['markThreadAsTodo']['thread']> {
    const res = await request(this.#ctx, {
      query: MarkThreadAsTodoDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.markThreadAsTodo.thread);
  }

  /**
   * change Thread Customer
   */
  async changeThreadCustomer(
    input: VariablesOf<typeof ChangeThreadCustomerDocument>['input']
  ): SDKResult<ResultOf<typeof ChangeThreadCustomerDocument>['changeThreadCustomer']['thread']> {
    const res = await request(this.#ctx, {
      query: ChangeThreadCustomerDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.changeThreadCustomer.thread);
  }

  /**
   * change Thread Priority
   */
  async changeThreadPriority(
    input: VariablesOf<typeof ChangeThreadPriorityDocument>['input']
  ): SDKResult<ResultOf<typeof ChangeThreadPriorityDocument>['changeThreadPriority']['thread']> {
    const res = await request(this.#ctx, {
      query: ChangeThreadPriorityDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.changeThreadPriority.thread);
  }

  /**
   * update Thread Title
   */
  async updateThreadTitle(
    input: VariablesOf<typeof UpdateThreadTitleDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateThreadTitleDocument>['updateThreadTitle']['thread']> {
    const res = await request(this.#ctx, {
      query: UpdateThreadTitleDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateThreadTitle.thread);
  }

  /**
   * update Thread Tenant
   */
  async updateThreadTenant(
    input: VariablesOf<typeof UpdateThreadTenantDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateThreadTenantDocument>['updateThreadTenant']['thread']> {
    const res = await request(this.#ctx, {
      query: UpdateThreadTenantDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateThreadTenant.thread);
  }

  /**
   * update Thread Tier
   */
  async updateThreadTier(
    input: VariablesOf<typeof UpdateThreadTierDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateThreadTierDocument>['updateThreadTier']['thread']> {
    const res = await request(this.#ctx, {
      query: UpdateThreadTierDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateThreadTier.thread);
  }

  /**
   * update Thread Escalation Path
   */
  async updateThreadEscalationPath(
    input: VariablesOf<typeof UpdateThreadEscalationPathDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateThreadEscalationPathDocument>['updateThreadEscalationPath']['thread']> {
    const res = await request(this.#ctx, {
      query: UpdateThreadEscalationPathDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateThreadEscalationPath.thread);
  }

  /**
   * Deletes a thread and all of its data stored on Plain. This action cannot be reversed.
   */
  async deleteThread(
    input: VariablesOf<typeof DeleteThreadDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteThreadDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Thread Discussion
   */
  async createThreadDiscussion(
    input: VariablesOf<typeof CreateThreadDiscussionDocument>['input']
  ): SDKResult<ResultOf<typeof CreateThreadDiscussionDocument>['createThreadDiscussion']['threadDiscussion']> {
    const res = await request(this.#ctx, {
      query: CreateThreadDiscussionDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createThreadDiscussion.threadDiscussion);
  }

  /**
   * send Thread Discussion Message
   */
  async sendThreadDiscussionMessage(
    input: VariablesOf<typeof SendThreadDiscussionMessageDocument>['input']
  ): SDKResult<ResultOf<typeof SendThreadDiscussionMessageDocument>['sendThreadDiscussionMessage']['threadDiscussionMessage']> {
    const res = await request(this.#ctx, {
      query: SendThreadDiscussionMessageDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.sendThreadDiscussionMessage.threadDiscussionMessage);
  }

  /**
   * mark Thread Discussion As Resolved
   */
  async markThreadDiscussionAsResolved(
    input: VariablesOf<typeof MarkThreadDiscussionAsResolvedDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: MarkThreadDiscussionAsResolvedDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * Reply to the last message in a thread. This mutation supports replying to threads where the last message is
a Slack message, an email or a form submission. If the thread is empty, it will send an email to the customer.
   */
  async replyToThread(
    input: VariablesOf<typeof ReplyToThreadDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: ReplyToThreadDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * upsert My Email Signature
   */
  async upsertMyEmailSignature(
    input: VariablesOf<typeof UpsertMyEmailSignatureDocument>['input']
  ): SDKResult<ResultOf<typeof UpsertMyEmailSignatureDocument>['upsertMyEmailSignature']['emailSignature']> {
    const res = await request(this.#ctx, {
      query: UpsertMyEmailSignatureDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.upsertMyEmailSignature.emailSignature);
  }

  /**
   * create Autoresponder
   */
  async createAutoresponder(
    input: VariablesOf<typeof CreateAutoresponderDocument>['input']
  ): SDKResult<ResultOf<typeof CreateAutoresponderDocument>['createAutoresponder']['autoresponder']> {
    const res = await request(this.#ctx, {
      query: CreateAutoresponderDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createAutoresponder.autoresponder);
  }

  /**
   * update Autoresponder
   */
  async updateAutoresponder(
    input: VariablesOf<typeof UpdateAutoresponderDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateAutoresponderDocument>['updateAutoresponder']['autoresponder']> {
    const res = await request(this.#ctx, {
      query: UpdateAutoresponderDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateAutoresponder.autoresponder);
  }

  /**
   * delete Autoresponder
   */
  async deleteAutoresponder(
    input: VariablesOf<typeof DeleteAutoresponderDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteAutoresponderDocument>['deleteAutoresponder']['autoresponder']> {
    const res = await request(this.#ctx, {
      query: DeleteAutoresponderDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteAutoresponder.autoresponder);
  }

  /**
   * reorder Autoresponders
   */
  async reorderAutoresponders(
    input: VariablesOf<typeof ReorderAutorespondersDocument>['input']
  ): SDKResult<ResultOf<typeof ReorderAutorespondersDocument>['reorderAutoresponders']['autoresponders']> {
    const res = await request(this.#ctx, {
      query: ReorderAutorespondersDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.reorderAutoresponders.autoresponders);
  }

  /**
   * upsert Tenant
   */
  async upsertTenant(
    input: VariablesOf<typeof UpsertTenantDocument>['input']
  ): SDKResult<ResultOf<typeof UpsertTenantDocument>['upsertTenant']['tenant']> {
    const res = await request(this.#ctx, {
      query: UpsertTenantDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.upsertTenant.tenant);
  }

  /**
   * delete Tenant
   */
  async deleteTenant(
    input: VariablesOf<typeof DeleteTenantDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteTenantDocument>['deleteTenant']['tenant']> {
    const res = await request(this.#ctx, {
      query: DeleteTenantDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteTenant.tenant);
  }

  /**
   * add Customer To Tenants
   */
  async addCustomerToTenants(
    input: VariablesOf<typeof AddCustomerToTenantsDocument>['input']
  ): SDKResult<ResultOf<typeof AddCustomerToTenantsDocument>['addCustomerToTenants']['customer']> {
    const res = await request(this.#ctx, {
      query: AddCustomerToTenantsDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.addCustomerToTenants.customer);
  }

  /**
   * remove Customer From Tenants
   */
  async removeCustomerFromTenants(
    input: VariablesOf<typeof RemoveCustomerFromTenantsDocument>['input']
  ): SDKResult<ResultOf<typeof RemoveCustomerFromTenantsDocument>['removeCustomerFromTenants']['customer']> {
    const res = await request(this.#ctx, {
      query: RemoveCustomerFromTenantsDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.removeCustomerFromTenants.customer);
  }

  /**
   * set Customer Tenants
   */
  async setCustomerTenants(
    input: VariablesOf<typeof SetCustomerTenantsDocument>['input']
  ): SDKResult<ResultOf<typeof SetCustomerTenantsDocument>['setCustomerTenants']['customer']> {
    const res = await request(this.#ctx, {
      query: SetCustomerTenantsDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.setCustomerTenants.customer);
  }

  /**
   * upsert Tenant Field Schema
   */
  async upsertTenantFieldSchema(
    input: VariablesOf<typeof UpsertTenantFieldSchemaDocument>['input']
  ): SDKResult<ResultOf<typeof UpsertTenantFieldSchemaDocument>['upsertTenantFieldSchema']['tenantFieldSchemas']> {
    const res = await request(this.#ctx, {
      query: UpsertTenantFieldSchemaDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.upsertTenantFieldSchema.tenantFieldSchemas);
  }

  /**
   * delete Tenant Field Schema
   */
  async deleteTenantFieldSchema(
    input: VariablesOf<typeof DeleteTenantFieldSchemaDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteTenantFieldSchemaDocument>['deleteTenantFieldSchema']['tenantFieldSchema']> {
    const res = await request(this.#ctx, {
      query: DeleteTenantFieldSchemaDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteTenantFieldSchema.tenantFieldSchema);
  }

  /**
   * upsert Tenant Field
   */
  async upsertTenantField(
    input: VariablesOf<typeof UpsertTenantFieldDocument>['input']
  ): SDKResult<ResultOf<typeof UpsertTenantFieldDocument>['upsertTenantField']['tenantField']> {
    const res = await request(this.#ctx, {
      query: UpsertTenantFieldDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.upsertTenantField.tenantField);
  }

  /**
   * delete Tenant Field
   */
  async deleteTenantField(
    input: VariablesOf<typeof DeleteTenantFieldDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteTenantFieldDocument>['deleteTenantField']['tenantField']> {
    const res = await request(this.#ctx, {
      query: DeleteTenantFieldDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteTenantField.tenantField);
  }

  /**
   * setup Tenant Field Schema Mapping
   */
  async setupTenantFieldSchemaMapping(
    input: VariablesOf<typeof SetupTenantFieldSchemaMappingDocument>['input']
  ): SDKResult<ResultOf<typeof SetupTenantFieldSchemaMappingDocument>['setupTenantFieldSchemaMapping']['tenantFieldSchema']> {
    const res = await request(this.#ctx, {
      query: SetupTenantFieldSchemaMappingDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.setupTenantFieldSchemaMapping.tenantFieldSchema);
  }

  /**
   * remove Tenant Field Schema Mapping
   */
  async removeTenantFieldSchemaMapping(
    input: VariablesOf<typeof RemoveTenantFieldSchemaMappingDocument>['input']
  ): SDKResult<ResultOf<typeof RemoveTenantFieldSchemaMappingDocument>['removeTenantFieldSchemaMapping']['tenantFieldSchema']> {
    const res = await request(this.#ctx, {
      query: RemoveTenantFieldSchemaMappingDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.removeTenantFieldSchemaMapping.tenantFieldSchema);
  }

  /**
   * upsert Company
   */
  async upsertCompany(
    input: VariablesOf<typeof UpsertCompanyDocument>['input']
  ): SDKResult<ResultOf<typeof UpsertCompanyDocument>['upsertCompany']['company']> {
    const res = await request(this.#ctx, {
      query: UpsertCompanyDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.upsertCompany.company);
  }

  /**
   * delete Company
   */
  async deleteCompany(
    input: VariablesOf<typeof DeleteCompanyDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteCompanyDocument>['deleteCompany']['company']> {
    const res = await request(this.#ctx, {
      query: DeleteCompanyDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteCompany.company);
  }

  /**
   * start Service Authorization
   */
  async startServiceAuthorization(
    input: VariablesOf<typeof StartServiceAuthorizationDocument>['input']
  ): SDKResult<ResultOf<typeof StartServiceAuthorizationDocument>['startServiceAuthorization']['connectionDetails']> {
    const res = await request(this.#ctx, {
      query: StartServiceAuthorizationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.startServiceAuthorization.connectionDetails);
  }

  /**
   * complete Service Authorization
   */
  async completeServiceAuthorization(
    input: VariablesOf<typeof CompleteServiceAuthorizationDocument>['input']
  ): SDKResult<ResultOf<typeof CompleteServiceAuthorizationDocument>['completeServiceAuthorization']['serviceAuthorization']> {
    const res = await request(this.#ctx, {
      query: CompleteServiceAuthorizationDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.completeServiceAuthorization.serviceAuthorization);
  }

  /**
   * Delete the workspace service authorization.
   */
  async deleteServiceAuthorization(
    input: VariablesOf<typeof DeleteServiceAuthorizationDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteServiceAuthorizationDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * Delete personal service authorizations for the current user.
   */
  async deleteMyServiceAuthorization(
    input: VariablesOf<typeof DeleteMyServiceAuthorizationDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteMyServiceAuthorizationDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Tier
   */
  async createTier(
    input: VariablesOf<typeof CreateTierDocument>['input']
  ): SDKResult<ResultOf<typeof CreateTierDocument>['createTier']['tier']> {
    const res = await request(this.#ctx, {
      query: CreateTierDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createTier.tier);
  }

  /**
   * update Tier
   */
  async updateTier(
    input: VariablesOf<typeof UpdateTierDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateTierDocument>['updateTier']['tier']> {
    const res = await request(this.#ctx, {
      query: UpdateTierDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateTier.tier);
  }

  /**
   * delete Tier
   */
  async deleteTier(
    input: VariablesOf<typeof DeleteTierDocument>['input']
  ): SDKResult<ResultOf<typeof DeleteTierDocument>['deleteTier']['tier']> {
    const res = await request(this.#ctx, {
      query: DeleteTierDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.deleteTier.tier);
  }

  /**
   * create Service Level Agreement
   */
  async createServiceLevelAgreement(
    input: VariablesOf<typeof CreateServiceLevelAgreementDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: CreateServiceLevelAgreementDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * update Service Level Agreement
   */
  async updateServiceLevelAgreement(
    input: VariablesOf<typeof UpdateServiceLevelAgreementDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: UpdateServiceLevelAgreementDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * delete Service Level Agreement
   */
  async deleteServiceLevelAgreement(
    input: VariablesOf<typeof DeleteServiceLevelAgreementDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteServiceLevelAgreementDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * add Members To Tier
   */
  async addMembersToTier(
    input: VariablesOf<typeof AddMembersToTierDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: AddMembersToTierDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * remove Members From Tier
   */
  async removeMembersFromTier(
    input: VariablesOf<typeof RemoveMembersFromTierDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: RemoveMembersFromTierDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * update Company Tier
   */
  async updateCompanyTier(
    input: VariablesOf<typeof UpdateCompanyTierDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateCompanyTierDocument>['updateCompanyTier']['companyTierMembership']> {
    const res = await request(this.#ctx, {
      query: UpdateCompanyTierDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateCompanyTier.companyTierMembership);
  }

  /**
   * update Tenant Tier
   */
  async updateTenantTier(
    input: VariablesOf<typeof UpdateTenantTierDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateTenantTierDocument>['updateTenantTier']['tenantTierMembership']> {
    const res = await request(this.#ctx, {
      query: UpdateTenantTierDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateTenantTier.tenantTierMembership);
  }

  /**
   * upsert Business Hours
   * @deprecated Use syncBusinessHoursSlots instead.
   */
  async upsertBusinessHours(
    input: VariablesOf<typeof UpsertBusinessHoursDocument>['input']
  ): SDKResult<ResultOf<typeof UpsertBusinessHoursDocument>['upsertBusinessHours']['businessHours']> {
    const res = await request(this.#ctx, {
      query: UpsertBusinessHoursDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.upsertBusinessHours.businessHours);
  }

  /**
   * delete Business Hours
   * @deprecated Use syncBusinessHoursSlots instead.
   */
  async deleteBusinessHours(): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteBusinessHoursDocument,
      
    });

    return unwrapData(res, () => null);
  }

  /**
   * sync Business Hours Slots
   */
  async syncBusinessHoursSlots(
    input: VariablesOf<typeof SyncBusinessHoursSlotsDocument>['input']
  ): SDKResult<ResultOf<typeof SyncBusinessHoursSlotsDocument>['syncBusinessHoursSlots']['slots']> {
    const res = await request(this.#ctx, {
      query: SyncBusinessHoursSlotsDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.syncBusinessHoursSlots.slots);
  }

  /**
   * create Checkout Session
   */
  async createCheckoutSession(
    input: VariablesOf<typeof CreateCheckoutSessionDocument>['input']
  ): SDKResult<string | null> {
    const res = await request(this.#ctx, {
      query: CreateCheckoutSessionDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createCheckoutSession.sessionClientSecret);
  }

  /**
   * create Billing Portal Session
   */
  async createBillingPortalSession(): SDKResult<string | null> {
    const res = await request(this.#ctx, {
      query: CreateBillingPortalSessionDocument,
      
    });

    return unwrapData(res, (q) => q.createBillingPortalSession.billingPortalSessionUrl);
  }

  /**
   * calculate Role Change Cost
   */
  async calculateRoleChangeCost(
    input: VariablesOf<typeof CalculateRoleChangeCostDocument>['input']
  ): SDKResult<ResultOf<typeof CalculateRoleChangeCostDocument>['calculateRoleChangeCost']['roleChangeCost']> {
    const res = await request(this.#ctx, {
      query: CalculateRoleChangeCostDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.calculateRoleChangeCost.roleChangeCost);
  }

  /**
   * add User To Active Billing Rota
   */
  async addUserToActiveBillingRota(
    input: VariablesOf<typeof AddUserToActiveBillingRotaDocument>['input']
  ): SDKResult<ResultOf<typeof AddUserToActiveBillingRotaDocument>['addUserToActiveBillingRota']['billingRota']> {
    const res = await request(this.#ctx, {
      query: AddUserToActiveBillingRotaDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.addUserToActiveBillingRota.billingRota);
  }

  /**
   * remove User From Active Billing Rota
   */
  async removeUserFromActiveBillingRota(
    input: VariablesOf<typeof RemoveUserFromActiveBillingRotaDocument>['input']
  ): SDKResult<ResultOf<typeof RemoveUserFromActiveBillingRotaDocument>['removeUserFromActiveBillingRota']['billingRota']> {
    const res = await request(this.#ctx, {
      query: RemoveUserFromActiveBillingRotaDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.removeUserFromActiveBillingRota.billingRota);
  }

  /**
   * update Active Billing Rota
   */
  async updateActiveBillingRota(
    input: VariablesOf<typeof UpdateActiveBillingRotaDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateActiveBillingRotaDocument>['updateActiveBillingRota']['billingRota']> {
    const res = await request(this.#ctx, {
      query: UpdateActiveBillingRotaDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateActiveBillingRota.billingRota);
  }

  /**
   * change Billing Plan
   */
  async changeBillingPlan(
    input: VariablesOf<typeof ChangeBillingPlanDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: ChangeBillingPlanDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * preview Billing Plan Change
   */
  async previewBillingPlanChange(
    input: VariablesOf<typeof PreviewBillingPlanChangeDocument>['input']
  ): SDKResult<ResultOf<typeof PreviewBillingPlanChangeDocument>['previewBillingPlanChange']['preview']> {
    const res = await request(this.#ctx, {
      query: PreviewBillingPlanChangeDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.previewBillingPlanChange.preview);
  }

  /**
   * regenerate Workspace Hmac
   */
  async regenerateWorkspaceHmac(): SDKResult<ResultOf<typeof RegenerateWorkspaceHmacDocument>['regenerateWorkspaceHmac']['workspaceHmac']> {
    const res = await request(this.#ctx, {
      query: RegenerateWorkspaceHmacDocument,
      
    });

    return unwrapData(res, (q) => q.regenerateWorkspaceHmac.workspaceHmac);
  }

  /**
   * create Indexed Document
   */
  async createIndexedDocument(
    input: VariablesOf<typeof CreateIndexedDocumentDocument>['input']
  ): SDKResult<ResultOf<typeof CreateIndexedDocumentDocument>['createIndexedDocument']['indexedDocument']> {
    const res = await request(this.#ctx, {
      query: CreateIndexedDocumentDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createIndexedDocument.indexedDocument);
  }

  /**
   * update Generated Reply
   */
  async updateGeneratedReply(
    input: VariablesOf<typeof UpdateGeneratedReplyDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateGeneratedReplyDocument>['updateGeneratedReply']['generatedReply']> {
    const res = await request(this.#ctx, {
      query: UpdateGeneratedReplyDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateGeneratedReply.generatedReply);
  }

  /**
   * create Knowledge Source
   */
  async createKnowledgeSource(
    input: VariablesOf<typeof CreateKnowledgeSourceDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: CreateKnowledgeSourceDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * delete Knowledge Source
   */
  async deleteKnowledgeSource(
    input: VariablesOf<typeof DeleteKnowledgeSourceDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteKnowledgeSourceDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Thread Channel Association
   */
  async createThreadChannelAssociation(
    input: VariablesOf<typeof CreateThreadChannelAssociationDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: CreateThreadChannelAssociationDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * delete Thread Channel Association
   */
  async deleteThreadChannelAssociation(
    input: VariablesOf<typeof DeleteThreadChannelAssociationDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteThreadChannelAssociationDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Workspace File Upload Url
   */
  async createWorkspaceFileUploadUrl(
    input: VariablesOf<typeof CreateWorkspaceFileUploadUrlDocument>['input']
  ): SDKResult<ResultOf<typeof CreateWorkspaceFileUploadUrlDocument>['createWorkspaceFileUploadUrl']['workspaceFileUploadUrl']> {
    const res = await request(this.#ctx, {
      query: CreateWorkspaceFileUploadUrlDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createWorkspaceFileUploadUrl.workspaceFileUploadUrl);
  }

  /**
   * delete Workspace File
   */
  async deleteWorkspaceFile(
    input: VariablesOf<typeof DeleteWorkspaceFileDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteWorkspaceFileDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * Resolves a customer for a Slack channel by finding or creating a customer associated with one of the Slack users in the channel.
   */
  async resolveCustomerForSlackChannel(
    input: VariablesOf<typeof ResolveCustomerForSlackChannelDocument>['input']
  ): SDKResult<ResultOf<typeof ResolveCustomerForSlackChannelDocument>['resolveCustomerForSlackChannel']['customer']> {
    const res = await request(this.#ctx, {
      query: ResolveCustomerForSlackChannelDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.resolveCustomerForSlackChannel.customer);
  }

  /**
   * resolve Customer For M S Teams Channel
   */
  async resolveCustomerForMSTeamsChannel(
    input: VariablesOf<typeof ResolveCustomerForMsTeamsChannelDocument>['input']
  ): SDKResult<ResultOf<typeof ResolveCustomerForMsTeamsChannelDocument>['resolveCustomerForMSTeamsChannel']['customer']> {
    const res = await request(this.#ctx, {
      query: ResolveCustomerForMsTeamsChannelDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.resolveCustomerForMSTeamsChannel.customer);
  }

  /**
   * create Help Center
   */
  async createHelpCenter(
    input: VariablesOf<typeof CreateHelpCenterDocument>['input']
  ): SDKResult<ResultOf<typeof CreateHelpCenterDocument>['createHelpCenter']['helpCenter']> {
    const res = await request(this.#ctx, {
      query: CreateHelpCenterDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createHelpCenter.helpCenter);
  }

  /**
   * update Help Center
   */
  async updateHelpCenter(
    input: VariablesOf<typeof UpdateHelpCenterDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateHelpCenterDocument>['updateHelpCenter']['helpCenter']> {
    const res = await request(this.#ctx, {
      query: UpdateHelpCenterDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateHelpCenter.helpCenter);
  }

  /**
   * delete Help Center
   */
  async deleteHelpCenter(
    input: VariablesOf<typeof DeleteHelpCenterDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteHelpCenterDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * update Help Center Custom Domain Name
   */
  async updateHelpCenterCustomDomainName(
    input: VariablesOf<typeof UpdateHelpCenterCustomDomainNameDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateHelpCenterCustomDomainNameDocument>['updateHelpCenterCustomDomainName']['helpCenter']> {
    const res = await request(this.#ctx, {
      query: UpdateHelpCenterCustomDomainNameDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateHelpCenterCustomDomainName.helpCenter);
  }

  /**
   * verify Help Center Custom Domain Name
   */
  async verifyHelpCenterCustomDomainName(
    input: VariablesOf<typeof VerifyHelpCenterCustomDomainNameDocument>['input']
  ): SDKResult<ResultOf<typeof VerifyHelpCenterCustomDomainNameDocument>['verifyHelpCenterCustomDomainName']['helpCenter']> {
    const res = await request(this.#ctx, {
      query: VerifyHelpCenterCustomDomainNameDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.verifyHelpCenterCustomDomainName.helpCenter);
  }

  /**
   * update Help Center Index
   */
  async updateHelpCenterIndex(
    input: VariablesOf<typeof UpdateHelpCenterIndexDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateHelpCenterIndexDocument>['updateHelpCenterIndex']['helpCenterIndex']> {
    const res = await request(this.#ctx, {
      query: UpdateHelpCenterIndexDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateHelpCenterIndex.helpCenterIndex);
  }

  /**
   * upsert Help Center Article
   */
  async upsertHelpCenterArticle(
    input: VariablesOf<typeof UpsertHelpCenterArticleDocument>['input']
  ): SDKResult<ResultOf<typeof UpsertHelpCenterArticleDocument>['upsertHelpCenterArticle']['helpCenterArticle']> {
    const res = await request(this.#ctx, {
      query: UpsertHelpCenterArticleDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.upsertHelpCenterArticle.helpCenterArticle);
  }

  /**
   * delete Help Center Article
   */
  async deleteHelpCenterArticle(
    input: VariablesOf<typeof DeleteHelpCenterArticleDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteHelpCenterArticleDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * generate Help Center Article
   */
  async generateHelpCenterArticle(
    input: VariablesOf<typeof GenerateHelpCenterArticleDocument>['input']
  ): SDKResult<ResultOf<typeof GenerateHelpCenterArticleDocument>['generateHelpCenterArticle']['helpCenterArticles']> {
    const res = await request(this.#ctx, {
      query: GenerateHelpCenterArticleDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.generateHelpCenterArticle.helpCenterArticles);
  }

  /**
   * create Help Center Article Group
   */
  async createHelpCenterArticleGroup(
    input: VariablesOf<typeof CreateHelpCenterArticleGroupDocument>['input']
  ): SDKResult<ResultOf<typeof CreateHelpCenterArticleGroupDocument>['createHelpCenterArticleGroup']['helpCenterArticleGroup']> {
    const res = await request(this.#ctx, {
      query: CreateHelpCenterArticleGroupDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createHelpCenterArticleGroup.helpCenterArticleGroup);
  }

  /**
   * update Help Center Article Group
   */
  async updateHelpCenterArticleGroup(
    input: VariablesOf<typeof UpdateHelpCenterArticleGroupDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateHelpCenterArticleGroupDocument>['updateHelpCenterArticleGroup']['helpCenterArticleGroup']> {
    const res = await request(this.#ctx, {
      query: UpdateHelpCenterArticleGroupDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateHelpCenterArticleGroup.helpCenterArticleGroup);
  }

  /**
   * delete Help Center Article Group
   */
  async deleteHelpCenterArticleGroup(
    input: VariablesOf<typeof DeleteHelpCenterArticleGroupDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteHelpCenterArticleGroupDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * create Issue Tracker Issue
   */
  async createIssueTrackerIssue(
    input: VariablesOf<typeof CreateIssueTrackerIssueDocument>['input']
  ): SDKResult<ResultOf<typeof CreateIssueTrackerIssueDocument>['createIssueTrackerIssue']['threadLinkCandidate']> {
    const res = await request(this.#ctx, {
      query: CreateIssueTrackerIssueDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createIssueTrackerIssue.threadLinkCandidate);
  }

  /**
   * create Customer Survey
   */
  async createCustomerSurvey(
    input: VariablesOf<typeof CreateCustomerSurveyDocument>['input']
  ): SDKResult<ResultOf<typeof CreateCustomerSurveyDocument>['createCustomerSurvey']['customerSurvey']> {
    const res = await request(this.#ctx, {
      query: CreateCustomerSurveyDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createCustomerSurvey.customerSurvey);
  }

  /**
   * update Customer Survey
   */
  async updateCustomerSurvey(
    input: VariablesOf<typeof UpdateCustomerSurveyDocument>['input']
  ): SDKResult<ResultOf<typeof UpdateCustomerSurveyDocument>['updateCustomerSurvey']['customerSurvey']> {
    const res = await request(this.#ctx, {
      query: UpdateCustomerSurveyDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.updateCustomerSurvey.customerSurvey);
  }

  /**
   * delete Customer Survey
   */
  async deleteCustomerSurvey(
    input: VariablesOf<typeof DeleteCustomerSurveyDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteCustomerSurveyDocument,
      variables: { input },
    });

    return unwrapData(res, () => null);
  }

  /**
   * reorder Customer Surveys
   */
  async reorderCustomerSurveys(
    input: VariablesOf<typeof ReorderCustomerSurveysDocument>['input']
  ): SDKResult<ResultOf<typeof ReorderCustomerSurveysDocument>['reorderCustomerSurveys']['customerSurveys']> {
    const res = await request(this.#ctx, {
      query: ReorderCustomerSurveysDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.reorderCustomerSurveys.customerSurveys);
  }

  /**
   * add Generated Reply
   */
  async addGeneratedReply(
    input: VariablesOf<typeof AddGeneratedReplyDocument>['input']
  ): SDKResult<ResultOf<typeof AddGeneratedReplyDocument>['addGeneratedReply']['generatedReply']> {
    const res = await request(this.#ctx, {
      query: AddGeneratedReplyDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.addGeneratedReply.generatedReply);
  }

  /**
   * escalate Thread
   */
  async escalateThread(
    input: VariablesOf<typeof EscalateThreadDocument>['input']
  ): SDKResult<ResultOf<typeof EscalateThreadDocument>['escalateThread']['thread']> {
    const res = await request(this.#ctx, {
      query: EscalateThreadDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.escalateThread.thread);
  }

  /**
   * create Ai Feature Feedback
   */
  async createAiFeatureFeedback(
    input: VariablesOf<typeof CreateAiFeatureFeedbackDocument>['input']
  ): SDKResult<ResultOf<typeof CreateAiFeatureFeedbackDocument>['createAiFeatureFeedback']['aiFeatureFeedback']> {
    const res = await request(this.#ctx, {
      query: CreateAiFeatureFeedbackDocument,
      variables: { input },
    });

    return unwrapData(res, (q) => q.createAiFeatureFeedback.aiFeatureFeedback);
  }
}
