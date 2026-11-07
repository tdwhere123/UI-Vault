import { Ajv } from 'ajv';
import { readFileSync } from 'node:fs';
import lengthModule from 'ajv/dist/runtime/ucs2length.js';
import standalone from 'ajv/dist/standalone/index.js';
import { CatalogQuerySchema } from '../../dist/packages/core/src/catalog.js';

export function compileQueryValidator() {
  const ajv = new Ajv({ strict: true, allErrors: true, code: { source: true, esm: true } });
  const output=standalone(ajv, ajv.compile(CatalogQuerySchema));
  const runtime='require("ajv/dist/runtime/ucs2length").default';
  const code=output.replaceAll(runtime, `(${lengthModule.default.toString()})`);
  if (code.includes('require(')) throw new Error('Unexpected browser validator dependency');
  const notice=readFileSync(new URL('../../node_modules/ajv/LICENSE',import.meta.url),'utf8');
  return `/* AJV runtime license:\n${notice}*/\n` + '// Generated from core CatalogQuerySchema by compile-query-validator.mjs; do not edit.\n'
    + code + '\n';
}
