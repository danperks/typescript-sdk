const fs = require('fs');
const path = require('path');
const { parse, visit } = require('graphql');

// Read files
const schemaContent = fs.readFileSync(path.join(__dirname, 'src/schema.graphql'), 'utf-8');
const generatedContent = fs.readFileSync(path.join(__dirname, 'src/_generated_documents.graphql'), 'utf-8');

// Parse schema
const schemaAST = parse(schemaContent);

// Get all existing fragments
const existingFragments = new Set();
const fragmentPattern = /^fragment (\w+) on/gm;
let match;
while ((match = fragmentPattern.exec(generatedContent)) !== null) {
  existingFragments.add(match[1]);
}

// Get all referenced fragments
const referencedFragments = new Set();
const referencePattern = /\.\.\. on (\w+)|\.\.\.(\w+)/g;
while ((match = referencePattern.exec(generatedContent)) !== null) {
  const fragName = match[1] || match[2];
  if (fragName && fragName !== '__typename') {
    referencedFragments.add(fragName);
  }
}

// Find types in schema
const typeDefinitions = {};
visit(schemaAST, {
  ObjectTypeDefinition(node) {
    const typeName = node.name.value;
    const fields = node.fields || [];
    
    typeDefinitions[typeName] = {
      name: typeName,
      fields: fields.map(f => ({
        name: f.name.value,
        type: getTypeName(f.type),
        nonNull: f.type.kind === 'NonNullType',
        list: isListType(f.type),
      })),
    };
  },
  InterfaceTypeDefinition(node) {
    const typeName = node.name.value;
    const fields = node.fields || [];
    
    typeDefinitions[typeName] = {
      name: typeName,
      fields: fields.map(f => ({
        name: f.name.value,
        type: getTypeName(f.type),
        nonNull: f.type.kind === 'NonNullType',
        list: isListType(f.type),
      })),
    };
  },
});

function getTypeName(typeNode) {
  if (typeNode.kind === 'NonNullType') return getTypeName(typeNode.type);
  if (typeNode.kind === 'ListType') return getTypeName(typeNode.type);
  if (typeNode.kind === 'NamedType') return typeNode.name.value;
  return 'Unknown';
}

function isListType(typeNode) {
  if (typeNode.kind === 'ListType') return true;
  if (typeNode.kind === 'NonNullType') return isListType(typeNode.type);
  return false;
}

// Generate missing fragments
const missing = [...referencedFragments].filter(t => !existingFragments.has(t));
console.log(`Found ${missing.length} missing fragments:`, missing.sort());

const newFragments = [];
const scalarTypes = ['String', 'Int', 'Float', 'Boolean', 'ID'];

missing.forEach(typeName => {
  const typeDef = typeDefinitions[typeName];
  
  if (!typeDef) {
    console.warn(`Warning: No type definition found for ${typeName}`);
    return;
  }
  
  const fieldStrings = typeDef.fields.map(field => {
    // Scalar fields - just the name
    if (scalarTypes.includes(field.type)) {
      return field.name;
    }
    
    // Reference to object with fragment (avoid circular refs)
    if (existingFragments.has(field.type) && !field.list) {
      return `${field.name} {\n    ...${field.type}\n  }`;
    }
    
    // Connection or list types - just get id
    if (field.list || field.type.endsWith('Connection')) {
      return `${field.name} {\n    id\n  }`;
    }
    
    // Other object types - just get id to avoid issues
    if (typeDefinitions[field.type]) {
      return `${field.name} {\n    id\n  }`;
    }
    
    // Default - just the field name
    return field.name;
  });
  
  const fragment = `
fragment ${typeName} on ${typeName} {
  __typename
  ${fieldStrings.join('\n  ')}
}`;
  
  newFragments.push(fragment);
});

// Append to file
if (newFragments.length > 0) {
  fs.appendFileSync(
    path.join(__dirname, 'src/_generated_documents.graphql'),
    '\n\n# Auto-fixed missing fragments\n' + newFragments.join('\n')
  );
  console.log(`Added ${newFragments.length} fragments`);
}
