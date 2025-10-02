import { createPlainClient } from "../src";

/**
 * Example: List customers for a workspace
 *
 * This example demonstrates how to:
 * 1. Connect to Plain API with workspace context
 * 2. List all customers with pagination
 * 3. Display customer information in the terminal
 *
 * Required environment variables:
 * - PLAIN_API_KEY: Your Plain API key
 * - WORKSPACE_ID: The workspace ID to query (optional, uses default workspace if not set)
 *
 * Usage:
 *   export PLAIN_API_KEY="plainApiKey_xxx"
 *   export WORKSPACE_ID="w_123"  # Optional
 *   npx tsx examples/workspace-customers.ts
 */

// Check for required API key
if (!process.env.PLAIN_API_KEY) {
	console.error("❌ Error: PLAIN_API_KEY environment variable is required");
	console.log("");
	console.log("Usage:");
	console.log('  export PLAIN_API_KEY="plainApiKey_xxx"');
	console.log('  export WORKSPACE_ID="w_123"  # Optional');
	console.log("  npx tsx examples/workspace-customers.ts");
	process.exit(1);
}

const WORKSPACE_ID = process.env.WORKSPACE_ID;

// Initialize the Plain SDK client
const client = createPlainClient({
	apiKey: process.env.PLAIN_API_KEY,
});

async function main() {
	try {
		console.log("🚀 Plain SDK - Workspace Customers Example\n");

		// Step 1: Get workspace information (if workspace ID provided)
		if (WORKSPACE_ID) {
			console.log(`📋 Fetching workspace: ${WORKSPACE_ID}`);
			const workspaceResult = await client.workspace({
				workspaceId: WORKSPACE_ID,
			});

			if (workspaceResult.workspace) {
				console.log(`   Name: ${workspaceResult.workspace.name}`);
				console.log(`   Public Name: ${workspaceResult.workspace.publicName}\n`);
			} else {
				console.log("   ⚠️  Workspace not found\n");
			}
		} else {
			console.log("ℹ️  No WORKSPACE_ID provided, using default workspace\n");
		}

		// Step 2: List customers
		console.log("👥 Fetching customers...\n");

		let hasMore = true;
		let after: string | undefined;
		let totalCustomers = 0;
		const pageSize = 10;

		while (hasMore) {
			const result = await client.customers({
				first: pageSize,
				after,
			});

			const { edges, pageInfo } = result.customers;

			// Display customers
			for (const edge of edges) {
				const customer = edge.node;
				totalCustomers++;

				console.log(`${totalCustomers}. ${customer.fullName || customer.shortName}`);
				console.log(`   ID: ${customer.id}`);
				console.log(`   Email: ${customer.email.email} ${customer.email.isVerified ? "✓" : "✗"}`);

				if (customer.company) {
					console.log(`   Company: ${customer.company.name}`);
				}

				if (customer.externalId) {
					console.log(`   External ID: ${customer.externalId}`);
				}

				console.log(
					`   Created: ${new Date(customer.createdAt.iso8601).toLocaleDateString()}`,
				);

				if (customer.markedAsSpamAt) {
					console.log(
						`   ⚠️  Marked as spam: ${new Date(customer.markedAsSpamAt.iso8601).toLocaleDateString()}`,
					);
				}

				console.log(); // Empty line between customers
			}

			// Check if there are more pages
			hasMore = pageInfo.hasNextPage;
			after = pageInfo.endCursor || undefined;

			// Show pagination info
			if (hasMore) {
				console.log(`📄 Loaded ${totalCustomers} customers so far...`);
				console.log(`   Fetching next page...\n`);
			}
		}

		// Summary
		console.log("✅ Done!");
		console.log(`   Total customers: ${totalCustomers}`);

		// Step 3: Show example of getting a specific customer
		if (totalCustomers > 0) {
			console.log("\n📝 Example: Fetching first customer again by ID...");

			const firstResult = await client.customers({ first: 1 });
			const firstCustomer = firstResult.customers.edges[0]?.node;

			if (firstCustomer) {
				const customerDetail = await client.customer({
					customerId: firstCustomer.id,
				});

				if (customerDetail.customer) {
					console.log(`   Name: ${customerDetail.customer.fullName}`);
					console.log(`   Email: ${customerDetail.customer.email.email}`);
					console.log(`   Anonymous: ${customerDetail.customer.isAnonymous ? "Yes" : "No"}`);

					// Show tenant memberships if any
					const tenantMemberships =
						customerDetail.customer.tenantMemberships?.edges || [];
					if (tenantMemberships.length > 0) {
						console.log(`   Tenant memberships: ${tenantMemberships.length}`);
					}

					// Show customer group memberships if any
					const groupMemberships =
						customerDetail.customer.customerGroupMemberships?.edges || [];
					if (groupMemberships.length > 0) {
						console.log(`   Group memberships: ${groupMemberships.length}`);
					}
				}
			}
		}

		console.log("\n💡 SDK Usage Tips:");
		console.log("   - Use pagination with 'first' and 'after' for large datasets");
		console.log("   - Filter customers with 'filters' parameter");
		console.log("   - Sort customers with 'sortBy' parameter");
		console.log("   - All methods are fully typed for autocomplete");
	} catch (error) {
		console.error("❌ Error:", error);
		process.exit(1);
	}
}

main();
