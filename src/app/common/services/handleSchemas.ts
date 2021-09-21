import { Schema } from '../types/schema';

const handleSchemas = (schema: Schema, type: 'validation' | 'value') => {
  return Object.keys(schema).reduce((acc, cur) => {
    acc[cur] = schema[cur][type];

    return acc;
  }, {} as any);
};

export default handleSchemas;
