# Next Steps

## immediate actions

### 1. test the sdk
create a simple test file to verify lazy loading works:

```bash
cd packages/sdk
cat > test-sdk.ts << 'TSEOF'
import { PlainClient } from './src/index';

async function test() {
  const client = new PlainClient({ 
    apiKey: process.env.PLAIN_API_KEY || 'test_key' 
  });
  
  try {
    // test basic query
    const customer = await client.customer({ customerId: 'c_01' });
    console.log('✓ customer fetched:', customer.fullName);
    
    // test lazy loading
    const company = await customer.company;
    console.log('✓ lazy loaded company:', company?.name);
    
  } catch (err) {
    console.error('test failed:', err.message);
  }
}

test();
TSEOF

npx tsx test-sdk.ts
```

### 2. clean up temporary files
```bash
cd packages/sdk
rm -f fix-*.js comprehensive-fix.js add-missing-fragments.js generate-all-missing-fragments.js remove-invalid-operations.js
```

### 3. update package scripts (done)
scripts now include post-processing:
- `codegen:doc` → generates + fixes
- `codegen:types` → generates types
- `codegen:sdk` → generates + fixes [object object]

### 4. show plain team
prepare demo showing:
1. lazy loading example
2. pagination example
3. how it compares to linear's sdk
4. migration path from v5

## before production

### must-do
- [ ] write comprehensive tests
- [ ] handle plain's error patterns (mutationerror, result<t, e>)
- [ ] test webhook parsing integration
- [ ] verify all mutations work
- [ ] test connection pagination thoroughly

### nice-to-have
- [ ] eliminate post-processing scripts
  - fix printTypescriptType to always return strings
  - improve fragment ordering to avoid missing refs
- [ ] add request caching
- [ ] add request batching/deduping
- [ ] performance benchmarks vs v5

## documentation to add

- [ ] migration guide from v5 → v6
- [ ] example recipes (common patterns)
- [ ] troubleshooting guide
- [ ] contributing guide for schema updates

## schema feedback for plain

suggest to plain team:
1. avoid bidirectional refs where possible (reduces cycles)
2. consistent naming for actor types
3. mark fields that require context with directives
4. consider simpler union structures

## maintenance

when plain's schema updates:
```bash
cd packages/sdk

# download new schema
curl https://core-api.uk.plain.com/graphql/v1/schema.graphql > src/schema.graphql

# regenerate everything
pnpm run codegen

# test
pnpm run typecheck
pnpm test

# if new errors appear:
# - check comprehensive-fix.js
# - update skipfields in codegen.doc.js
# - add new field aliases if needed
```

## estimated time to production-ready

- basic testing: 1-2h
- comprehensive tests: 3-4h
- error handling polish: 1-2h
- documentation: 1-2h

**total: 6-10h additional work**

current state: **proof-of-concept ready** ✓
next milestone: **production-ready**
