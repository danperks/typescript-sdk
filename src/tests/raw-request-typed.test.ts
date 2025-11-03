import { print } from 'graphql';
import { describe, expect, test } from 'vitest';
import { PlainClient } from '..';
import { CustomerByIdDocument, type CustomerPartsFragment } from '../graphql/types';
import { testHelpers } from './test-helpers';

describe('Enhanced rawRequest with TypedDocumentNode', () => {
  test('should accept typed document node', async () => {
    const customerId = 'c_123';

    const response: { data: { customer: CustomerPartsFragment } } = {
      data: {
        customer: {
          __typename: 'Customer',
          id: customerId,
          fullName: 'Ike Torphy',
          shortName: 'Ike',
          externalId: 'ike-torphy',
          email: {
            email: 'test@gmail.com',
            isVerified: true,
            verifiedAt: {
              __typename: 'DateTime',
              iso8601: '2023-03-20T13:06:37.918Z',
              unixTimestamp: '1699890305',
            },
          },
          company: null,
          updatedAt: {
            __typename: 'DateTime',
            iso8601: '2023-05-01T09:54:51.715Z',
            unixTimestamp: '1699890305',
          },
          createdAt: {
            __typename: 'DateTime',
            iso8601: '2023-03-20T13:06:37.961Z',
            unixTimestamp: '1699890305',
          },
          createdBy: {},
          markedAsSpamAt: null,
        },
      },
    };

    const { fetchSpy, expectRequest } = testHelpers.createFetch({
      responseStatus: 200,
      responseBody: response,
    });

    globalThis.fetch = fetchSpy;

    const client = new PlainClient({ apiKey: 'abc' });
    
    // Use rawRequest with typed document node
    const result = await client.rawRequest({
      query: CustomerByIdDocument,
      variables: { customerId },
    });

    expectRequest({
      apiKey: 'abc',
      responseBody: {
        query: print(CustomerByIdDocument),
        variables: { customerId },
      },
    });

    expect(result.error).toBeUndefined();
    expect(result.data).toEqual(response.data);
  });

  test('should accept raw string query (backwards compatibility)', async () => {
    const response = {
      data: {
        myWorkspace: {
          id: 'w_123',
          name: 'Test Workspace',
        },
      },
    };

    const { fetchSpy } = testHelpers.createFetch({
      responseStatus: 200,
      responseBody: response,
    });

    globalThis.fetch = fetchSpy;

    const client = new PlainClient({ apiKey: 'abc' });
    
    // Use rawRequest with raw string (backwards compatibility)
    const result = await client.rawRequest({
      query: 'query { myWorkspace { id name } }',
      variables: {},
    });

    expect(result.error).toBeUndefined();
    expect(result.data).toEqual(response.data);
  });
});

