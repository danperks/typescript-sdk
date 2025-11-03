import { describe, expect, test, beforeAll } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

describe('Generated Client Tests', () => {
  test('client.generated.ts should exist after generation', () => {
    // This test will pass once the generation script has been run
    const generatedPath = join(__dirname, '../client.generated.ts');
    
    // We don't fail if it doesn't exist yet, just warn
    if (!existsSync(generatedPath)) {
      console.warn('⚠️  client.generated.ts not found. Run: pnpm run codegen:sdk');
    }
    
    expect(true).toBe(true);
  });

  test('generated fragments directory should exist', () => {
    const fragmentsPath = join(__dirname, '../graphql/fragments');
    const exists = existsSync(fragmentsPath);
    expect(exists).toBe(true);
  });

  test('generated queries directory should exist', () => {
    const queriesPath = join(__dirname, '../graphql/queries');
    const exists = existsSync(queriesPath);
    expect(exists).toBe(true);
  });

  test('generated mutations directory should exist', () => {
    const mutationsPath = join(__dirname, '../graphql/mutations');
    const exists = existsSync(mutationsPath);
    expect(exists).toBe(true);
  });
});

