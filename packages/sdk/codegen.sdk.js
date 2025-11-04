const path = require('path');

module.exports = {
  overwrite: true,
  schema: './src/schema.graphql',
  documents: './src/_generated_documents.graphql',
  config: {
    documentFile: './_generated_documents',
  },
  generates: {
    'src/_generated_sdk.ts': {
      plugins: [
        path.resolve(__dirname, '../codegen-sdk/dist/index-cjs.min.js'),
      ],
    },
  },
};
