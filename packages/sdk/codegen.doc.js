const path = require('path');

module.exports = {
  overwrite: true,
  schema: './src/schema.graphql',
  config: {
    skipComments: [],
    skipFields: [
      'customerCardInstanceChanges',
      'threadTimelineChanges', 
      'timelineChanges',
      'customerChanges',
      'apiKey'
    ],
    dedupeFragments: true,
  },
  generates: {
    'src/_generated_documents.graphql': {
      plugins: [
        path.resolve(__dirname, '../codegen-doc/dist/index-cjs.min.js'),
      ],
    },
  },
};
