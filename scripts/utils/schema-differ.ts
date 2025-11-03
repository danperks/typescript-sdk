import {
  type GraphQLSchema,
  type GraphQLField,
  type GraphQLNamedType,
  type GraphQLEnumType,
  buildSchema,
  isEnumType,
  isObjectType,
} from 'graphql';

export interface OperationChange {
  name: string;
  type: 'query' | 'mutation';
  changeType: 'added' | 'removed' | 'modified';
  details?: string[];
}

export interface TypeChange {
  name: string;
  changeType: 'added' | 'removed' | 'modified';
  details?: string[];
}

export interface SchemaDiff {
  operations: OperationChange[];
  types: TypeChange[];
  breaking: boolean;
}

function getOperations(
  schema: GraphQLSchema
): Map<string, { field: GraphQLField<unknown, unknown>; type: 'query' | 'mutation' }> {
  const operations = new Map();

  const queryType = schema.getQueryType();
  if (queryType) {
    const fields = queryType.getFields();
    for (const [name, field] of Object.entries(fields)) {
      operations.set(name, { field, type: 'query' });
    }
  }

  const mutationType = schema.getMutationType();
  if (mutationType) {
    const fields = mutationType.getFields();
    for (const [name, field] of Object.entries(fields)) {
      operations.set(name, { field, type: 'mutation' });
    }
  }

  return operations;
}

function compareOperations(
  oldOps: Map<string, { field: GraphQLField<unknown, unknown>; type: 'query' | 'mutation' }>,
  newOps: Map<string, { field: GraphQLField<unknown, unknown>; type: 'query' | 'mutation' }>
): OperationChange[] {
  const changes: OperationChange[] = [];

  // Find added operations
  for (const [name, { type }] of newOps) {
    if (!oldOps.has(name)) {
      changes.push({
        name,
        type,
        changeType: 'added',
      });
    }
  }

  // Find removed operations
  for (const [name, { type }] of oldOps) {
    if (!newOps.has(name)) {
      changes.push({
        name,
        type,
        changeType: 'removed',
      });
    }
  }

  // Find modified operations
  for (const [name, { field: newField, type }] of newOps) {
    const oldOp = oldOps.get(name);
    if (oldOp) {
      const details: string[] = [];

      // Compare arguments
      const oldArgs = new Set(oldOp.field.args.map((a) => a.name));
      const newArgs = new Set(newField.args.map((a) => a.name));

      for (const arg of newField.args) {
        if (!oldArgs.has(arg.name)) {
          details.push(`Added argument: ${arg.name}`);
        }
      }

      for (const arg of oldOp.field.args) {
        if (!newArgs.has(arg.name)) {
          details.push(`Removed argument: ${arg.name}`);
        }
      }

      // Compare return type (simple string comparison)
      const oldReturnType = oldOp.field.type.toString();
      const newReturnType = newField.type.toString();
      if (oldReturnType !== newReturnType) {
        details.push(`Return type changed: ${oldReturnType} -> ${newReturnType}`);
      }

      if (details.length > 0) {
        changes.push({
          name,
          type,
          changeType: 'modified',
          details,
        });
      }
    }
  }

  return changes;
}

function compareTypes(oldSchema: GraphQLSchema, newSchema: GraphQLSchema): TypeChange[] {
  const changes: TypeChange[] = [];

  const oldTypes = oldSchema.getTypeMap();
  const newTypes = newSchema.getTypeMap();

  // Find added types
  for (const [name, type] of Object.entries(newTypes)) {
    if (!name.startsWith('__') && !oldTypes[name]) {
      changes.push({
        name,
        changeType: 'added',
      });
    }
  }

  // Find removed types
  for (const [name, type] of Object.entries(oldTypes)) {
    if (!name.startsWith('__') && !newTypes[name]) {
      changes.push({
        name,
        changeType: 'removed',
      });
    }
  }

  // Find modified enums (common breaking change)
  for (const [name, newType] of Object.entries(newTypes)) {
    if (!name.startsWith('__') && oldTypes[name]) {
      const oldType = oldTypes[name];
      const details: string[] = [];

      if (isEnumType(newType) && isEnumType(oldType)) {
        const oldValues = new Set(oldType.getValues().map((v) => v.name));
        const newValues = new Set(newType.getValues().map((v) => v.name));

        for (const value of newType.getValues()) {
          if (!oldValues.has(value.name)) {
            details.push(`Added enum value: ${value.name}`);
          }
        }

        for (const value of oldType.getValues()) {
          if (!newValues.has(value.name)) {
            details.push(`Removed enum value: ${value.name}`);
          }
        }
      }

      if (details.length > 0) {
        changes.push({
          name,
          changeType: 'modified',
          details,
        });
      }
    }
  }

  return changes;
}

export function diffSchemas(oldSchemaString: string, newSchemaString: string): SchemaDiff {
  const oldSchema = buildSchema(oldSchemaString);
  const newSchema = buildSchema(newSchemaString);

  const oldOps = getOperations(oldSchema);
  const newOps = getOperations(newSchema);

  const operations = compareOperations(oldOps, newOps);
  const types = compareTypes(oldSchema, newSchema);

  // Determine if there are breaking changes
  const breaking =
    operations.some((op) => op.changeType === 'removed') ||
    operations.some((op) => op.details?.some((d) => d.includes('Removed argument'))) ||
    types.some((t) => t.changeType === 'removed') ||
    types.some((t) => t.details?.some((d) => d.includes('Removed enum value')));

  return {
    operations,
    types,
    breaking,
  };
}

