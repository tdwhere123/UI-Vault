import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { promisify } from 'node:util';

const exec = promisify(execFile);
const root = resolve(import.meta.dirname, '..');
const temporary = await mkdtemp(join(tmpdir(), 'vault-hash-negative-'));
const guard = 'if (hash(content) !== file.sha256)';
let implementation = await readFile(join(root, 'dist/index.js'), 'utf8');
assert.equal(implementation.split(guard).length, 2, 'Exactly one hash guard must be changed');
implementation = implementation.replace(guard, 'if (false)')
  .replace('../../core/dist/index.js', pathToFileURL(resolve(root, '../core/dist/index.js')).href)
  .replace('./safe-directory.js', pathToFileURL(join(root, 'dist/safe-directory.js')).href);
const mutant = join(temporary, 'without-hash-check.mjs');
await writeFile(mutant, implementation);
let tests = await readFile(join(root, 'tests/offline-materialization.test.mjs'), 'utf8');
tests = tests.replace('../dist/index.js', pathToFileURL(mutant).href)
  .replace('../dist/safe-directory.js', pathToFileURL(join(root, 'dist/safe-directory.js')).href);
const testFile = join(temporary, 'hash-integrity.test.mjs');
await writeFile(testFile, tests);
try {
  await exec(process.execPath, ['--test', '--test-name-pattern=same-size source corruption', testFile]);
  throw new Error('Negative control unexpectedly passed');
} catch (error) {
  process.stdout.write(error.stdout ?? '');
  process.stderr.write(error.stderr ?? '');
  assert.equal(error.code, 1);
  assert.match(error.stdout, /not ok.*same-size source corruption/);
  assert.match(error.stdout, /Missing expected rejection/);
  console.log('Negative control confirmed: removing only the SHA256 comparison makes the corruption test fail.');
}
