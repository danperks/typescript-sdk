const fs = require('fs');
const path = require('path');

let content = fs.readFileSync(path.join(__dirname, 'src/_generated_documents.graphql'), 'utf-8');

// Remove operations that have required arguments but don't provide them
// These are nested operations that can't work without parent context
const problematicPatterns = [
  // Match query blocks that reference fields with required args
  /query [^\{]*\{[^\}]*\b(apiKey|threadTimelineChanges|timelineChanges|customerCardInstanceChanges|customerChanges)\b[^\}]*\}(?=\s*query|\s*mutation|\s*fragment|\s*$)/gs,
];

let removed = 0;
problematicPatterns.forEach((pattern) => {
  const matches = content.match(pattern);
  if (matches) {
    removed += matches.length;
    content = content.replace(pattern, '');
  }
});

// Clean up multiple blank lines
content = content.replace(/\n\n\n+/g, '\n\n');

fs.writeFileSync(path.join(__dirname, 'src/_generated_documents.graphql'), content);
console.log(`Removed ${removed} invalid operations`);
