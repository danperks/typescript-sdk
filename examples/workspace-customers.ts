import { createPlainClient } from "../src";

/**
 * Example: Complete workspace customer and thread exploration
 *
 * This example demonstrates complete SDK usage by:
 * 1. Fetching workspace information (optional)
 * 2. Finding customers with threads
 * 3. Displaying customer details with company info
 * 4. Showing thread information and timeline
 * 5. Displaying labels, assignments, and chat details
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
		console.log("🚀 Plain SDK - Complete Workspace Example\n");

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

		// Step 2: Find a customer with threads
		console.log("🔍 Finding a customer with threads...\n");

		let customerWithThreads = null;
		let customerId = null;

		// Look through customers to find one with threads
		const customersResult = await client.customers({ first: 50 });

		for (const edge of customersResult.customers.edges) {
			const customer = edge.node;

			// Try to get threads for this customer
			const threadsResult = await client.threads({
				filters: { customerIds: [customer.id] },
				first: 1,
			});

			if (threadsResult.threads.edges.length > 0) {
				customerWithThreads = customer;
				customerId = customer.id;
				console.log(`✓ Found customer with threads: ${customer.fullName || customer.shortName}`);
				console.log(`  Customer ID: ${customerId}\n`);
				break;
			}
		}

		if (!customerWithThreads) {
			console.log("⚠️  No customers with threads found");
			console.log("💡 Try creating a thread first or use a workspace with existing data\n");
			process.exit(0);
		}

		// Step 3: Display detailed customer information
		console.log("👤 Customer Details:");
		console.log("─".repeat(50));
		console.log(`Name: ${customerWithThreads.fullName || customerWithThreads.shortName}`);
		console.log(`Email: ${customerWithThreads.email.email}`);
		console.log(`Verified: ${customerWithThreads.email.isVerified ? "Yes ✓" : "No ✗"}`);
		console.log(`Anonymous: ${customerWithThreads.isAnonymous ? "Yes" : "No"}`);

		if (customerWithThreads.company) {
			console.log(`Company: ${customerWithThreads.company.name}`);
			if (customerWithThreads.company.domainName) {
				console.log(`  Domain: ${customerWithThreads.company.domainName}`);
			}
		}

		if (customerWithThreads.externalId) {
			console.log(`External ID: ${customerWithThreads.externalId}`);
		}

		console.log(`Created: ${new Date(customerWithThreads.createdAt.iso8601).toLocaleString()}`);
		console.log();

		// Step 4: Get and display threads for this customer
		console.log("💬 Customer Threads:");
		console.log("─".repeat(50));

		const threadsResult = await client.threads({
			filters: { customerIds: [customerId!] },
			first: 5,
		});

		let threadCount = 0;
		for (const threadEdge of threadsResult.threads.edges) {
			const thread = threadEdge.node;
			threadCount++;

			console.log(`\n${threadCount}. Thread: ${thread.title || "(No title)"}`);
			console.log(`   ID: ${thread.id}`);
			console.log(`   Status: ${thread.status}`);
			console.log(`   Priority: ${thread.priority}`);
			console.log(`   Created: ${new Date(thread.createdAt.iso8601).toLocaleString()}`);

			// Show assignment
			if (thread.assignedAt) {
				console.log(`   Assigned: ${new Date(thread.assignedAt.iso8601).toLocaleString()}`);
			}

			// Show labels
			if (thread.labels && thread.labels.length > 0) {
				const labelNames = thread.labels.map((l) => l.labelType.name).join(", ");
				console.log(`   Labels: ${labelNames}`);
			}

			// Show preview text if available
			if (thread.previewText) {
				const preview =
					thread.previewText.length > 80
						? thread.previewText.substring(0, 80) + "..."
						: thread.previewText;
				console.log(`   Preview: ${preview}`);
			}
		}

		console.log(`\n📊 Total threads for customer: ${threadsResult.threads.edges.length}`);
		if (threadsResult.threads.pageInfo.hasNextPage) {
			console.log("   (More threads available - use pagination to see all)");
		}

		// Step 5: Get detailed information about the first thread
		if (threadsResult.threads.edges.length > 0) {
			const firstThread = threadsResult.threads.edges[0].node;
			console.log(`\n🔍 Detailed Thread Information:`);
			console.log("─".repeat(50));

			const threadDetail = await client.thread({ threadId: firstThread.id });

			if (threadDetail.thread) {
				const thread = threadDetail.thread;

				console.log(`Title: ${thread.title || "(No title)"}`);
				console.log(`ID: ${thread.id}`);
				console.log(`Status: ${thread.status}`);
				console.log(`Priority: ${thread.priority}`);

				// Customer info
				console.log(`\nCustomer:`);
				console.log(`  Name: ${thread.customer.fullName || thread.customer.shortName}`);
				console.log(`  Email: ${thread.customer.email.email}`);

				// Channel info
				if (thread.channel) {
					console.log(`\nChannel: ${thread.channel}`);
				}

				// Labels
				if (thread.labels && thread.labels.length > 0) {
					console.log(`\nLabels:`);
					thread.labels.forEach((label) => {
						console.log(`  • ${label.labelType.name} (${label.labelType.type})`);
					});
				}

				// Thread fields (custom fields)
				if (thread.threadFields && thread.threadFields.length > 0) {
					console.log(`\nCustom Fields:`);
					thread.threadFields.forEach((field) => {
						console.log(`  • ${field.key}: ${field.stringValue || field.booleanValue || "(empty)"}`);
					});
				}

				console.log(`\nTimestamps:`);
				console.log(`  Created: ${new Date(thread.createdAt.iso8601).toLocaleString()}`);
				console.log(`  Updated: ${new Date(thread.updatedAt.iso8601).toLocaleString()}`);

				if (thread.statusChangedAt) {
					console.log(`  Status Changed: ${new Date(thread.statusChangedAt.iso8601).toLocaleString()}`);
				}

				// Step 6: Show timeline entries (messages/events)
				console.log(`\n💬 Thread Timeline:`);
				console.log("─".repeat(50));

				const timelineResult = await client.timelineEntries({
					customerId: customerId!,
					first: 5,
				});

				if (timelineResult.timelineEntries.edges.length > 0) {
					let entryCount = 0;
					for (const edge of timelineResult.timelineEntries.edges) {
						const entry = edge.node;
						entryCount++;

						console.log(`\n${entryCount}. ${entry.__typename}`);
						console.log(`   Time: ${new Date(entry.timestamp.iso8601).toLocaleString()}`);
						console.log(`   ID: ${entry.id}`);

						// Show LLM-extracted text if available
						if (entry.llmText) {
							const preview = entry.llmText.length > 150
								? entry.llmText.substring(0, 150) + "..."
								: entry.llmText;
							console.log(`   Content: ${preview}`);
						}
					}

					console.log(`\n   Total timeline entries: ${timelineResult.timelineEntries.edges.length}`);
					if (timelineResult.timelineEntries.pageInfo.hasNextPage) {
						console.log(`   (More entries available - use pagination)`);
					}
				} else {
					console.log(`   No timeline entries found`);
				}
			}
		}

		console.log("\n✅ Complete!");
	} catch (error) {
		console.error("❌ Error:", error);
		process.exit(1);
	}
}

main();
