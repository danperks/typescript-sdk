import {
	type CustomerFieldsFragment,
	createPlainClient,
	type ThreadFieldsFragment,
} from "../src";

// Check for API key
if (!process.env.PLAIN_API_KEY) {
	console.log("✅ SDK imports work correctly!");
	console.log("");
	console.log("To run the examples, set PLAIN_API_KEY environment variable:");
	console.log('  export PLAIN_API_KEY="your-api-key"');
	console.log("  npx tsx examples/basic-usage.ts");
	process.exit(0);
}

// Initialize the client
const client = createPlainClient({
	apiKey: process.env.PLAIN_API_KEY!,
});

// Example 1: Get a customer using the CustomerFieldsFragment type
async function getCustomerExample() {
	const result = await client.customer({
		customerId: "c_01K2MEXWJ5XHJ6JVB5EKTA9PJA",
	});

	// The result.customer is typed as CustomerFieldsFragment | null
	if (result.customer) {
		const customer: CustomerFieldsFragment = result.customer;
		console.log("Customer:", customer.fullName);
		console.log("Email:", customer.email.email);
		console.log("Created:", customer.createdAt.iso8601);
	}
}

// Example 2: Create a thread and work with typed responses
async function createThreadExample() {
	const result = await client.createThread({
		input: {
			customerIdentifier: {
				customerId: "c_123",
			},
			title: "Need help with billing",
			components: [
				{
					componentText: {
						text: "I have a question about my invoice.",
					},
				},
			],
		},
	});

	if (result.createThread.error) {
		console.error("Error:", result.createThread.error.message);
		if (result.createThread.error.fields) {
			result.createThread.error.fields.forEach((field) => {
				console.error(`  ${field.field}: ${field.message}`);
			});
		}
		return;
	}

	// The result.createThread.thread is typed as ThreadFieldsFragment | null
	if (result.createThread.thread) {
		const thread: ThreadFieldsFragment = result.createThread.thread;
		console.log("Thread created:", thread.id);
		console.log("Title:", thread.title);
		console.log("Status:", thread.status);
		console.log("Priority:", thread.priority);
	}
}

// Example 3: Working with paginated results
async function listThreadsExample() {
	const result = await client.threads({ first: 10 });

	// Access the PageInfo fragment
	console.log("Has next page:", result.threads.pageInfo.hasNextPage);

	// Each node is typed as ThreadFieldsFragment
	for (const edge of result.threads.edges) {
		const thread: ThreadFieldsFragment = edge.node;
		console.log(`- ${thread.title} (${thread.status})`);
	}

	// Load next page if available
	if (result.threads.pageInfo.hasNextPage) {
		const nextPage = await client.threads({
			first: 10,
			after: result.threads.pageInfo.endCursor!,
		});
		console.log(
			"Loaded next page with",
			nextPage.threads.edges.length,
			"threads",
		);
	}
}

// Example 4: Using fragment types for type safety
function processCustomer(customer: CustomerFieldsFragment) {
	// All fields from the CustomerFieldsFragment are available and typed
	return {
		id: customer.id,
		name: customer.fullName,
		email: customer.email.email,
		isVerified: customer.email.isVerified,
		createdDate: new Date(customer.createdAt.iso8601),
		status: customer.status,
	};
}

// Example 5: Upsert customer with full type safety
async function upsertCustomerExample() {
	const result = await client.upsertCustomer({
		input: {
			identifier: {
				emailAddress: "john@example.com",
			},
			onCreate: {
				fullName: "John Doe",
				email: {
					email: "john@example.com",
					isVerified: true,
				},
			},
			onUpdate: {
				fullName: {
					value: "John Doe Updated",
				},
			},
		},
	});

	if (result.upsertCustomer.error) {
		console.error(
			"Failed to upsert customer:",
			result.upsertCustomer.error.message,
		);
		return;
	}

	if (result.upsertCustomer.customer) {
		const processed = processCustomer(result.upsertCustomer.customer);
		console.log("Processed customer:", processed);
	}
}

// Example 6: Working with companies
async function companyExample() {
	// Get a single company
	const companyResult = await client.company({ companyId: "comp_123" });

	if (companyResult.company) {
		console.log("Company:", companyResult.company.name);
		console.log("Domain:", companyResult.company.domainName);
	}

	// List all companies
	const companiesResult = await client.companies({ first: 10 });

	for (const edge of companiesResult.companies.edges) {
		console.log(`- ${edge.node.name}`);
	}
}

// Example 7: Thread operations with labels
async function threadLabelsExample() {
	const threadId = "th_123";

	// Add labels
	const addResult = await client.addLabels({
		input: {
			threadId,
			labelTypeIds: ["lt_urgent", "lt_billing"],
		},
	});

	if (addResult.addLabels.labels) {
		console.log(
			"Added labels:",
			addResult.addLabels.labels.map((l) => l.labelType.name),
		);
	}

	// Remove labels
	const removeResult = await client.removeLabels({
		input: {
			threadId,
			labelTypeIds: ["lt_billing"],
		},
	});

	if (removeResult.removeLabels.thread) {
		console.log("Thread updated:", removeResult.removeLabels.thread.id);
	}
}

// Run examples
async function main() {
	try {
		await getCustomerExample();
		// await createThreadExample();
		// await listThreadsExample();
		// await upsertCustomerExample();
		// await companyExample();
		// await threadLabelsExample();
	} catch (error) {
		console.error("Error:", error);
	}
}

// Uncomment to run:
main();
