import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.mjs',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      json(),
      esbuild({
        target: 'es2020',
      }),
    ],
    external: [
      'graphql',
      'graphql/language/ast',
      '@graphql-typed-document-node/core',
      'ajv',
      'ajv-formats',
      'zod',
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];
