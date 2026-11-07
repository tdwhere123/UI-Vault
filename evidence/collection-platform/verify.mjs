import { createHash } from 'node:crypto';
import { lstat, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const evidenceDirectory = 'evidence/collection-platform/final';
export const collectionScope = {
  version: 1,
  mode: 'explicit-active-collection',
  files: ['package.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', 'tsconfig.collection.json', 'catalog.json',
    'inventory/collection.json', 'packages/core/package.json', 'packages/core/tsconfig.build.json',
    'packages/core/src/catalog.ts', 'packages/core/src/index.ts', 'packages/cli/package.json', 'packages/cli/src/main.ts'],
  directories: ['packages/core/tests', 'packages/restore', 'apps/explorer', 'archive',
    'inventory/acquisition-evidence', 'inventory/reference-evidence-20261107', 'inventory/reference-correction-evidence-20261107', 'inventory/scripts', 'evidence/collection-platform'],
  excludedNames: ['.git', 'node_modules', 'dist'],
  excludedPaths: [`${evidenceDirectory}/SUMS.sha256`, `${evidenceDirectory}/commit-binding.json`, `${evidenceDirectory}/verification.log`],
  outsideScope: ['Stopped complex core modules, root tests/, fixtures/, inventory/metadata.json and root tsconfig.json',
    'Historical evidence/g0, evidence/metadata-contract, evidence/fact-boundaries and legacy docs/scripts',
    'External six-reference preparation and all files not under the exact files/directories above'],
  tailRecords: 'commit-binding.json and verification.log are unsealed post-commit observations, not authority or substitutes for a fresh verify'
};
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;

export async function collectFiles(root, scope) {
  const selected = new Set();
  async function visit(path) {
    if (scope.excludedPaths.includes(path) || path.split('/').some(part => scope.excludedNames.includes(part))) return;
    const info = await lstat(resolve(root, path));
    if (info.isSymbolicLink()) throw new Error(`Symlink in evidence scope: ${path}`);
    if (info.isDirectory()) for (const name of (await readdir(resolve(root, path))).sort(compare)) await visit(`${path}/${name}`);
    else if (info.isFile()) selected.add(path);
    else throw new Error(`Special file in evidence scope: ${path}`);
  }
  for (const path of [...scope.files, ...scope.directories]) await visit(path);
  return [...selected].sort(compare);
}

function parseManifest(text) {
  const records = new Map();
  for (const line of text.trimEnd().split('\n')) {
    const match = /^([a-f0-9]{64})  ([^\r\n\0]+)$/.exec(line);
    if (!match || records.has(match[2])) throw new Error('Invalid or duplicate manifest record');
    records.set(match[2], match[1]);
  }
  return records;
}
function assertMembership(files, records) {
  const listed = [...records.keys()].sort(compare);
  if (JSON.stringify(files) !== JSON.stringify(listed)) {
    const missing = files.filter(path => !records.has(path));
    const actual = new Set(files), orphan = listed.filter(path => !actual.has(path));
    throw new Error(`Manifest membership mismatch: omitted=${JSON.stringify(missing)} orphan=${JSON.stringify(orphan)}`);
  }
}
export async function writeManifest(root, scope, manifestPath) {
  const files = await collectFiles(root, scope);
  const lines = [];
  for (const path of files) lines.push(`${sha256(await readFile(resolve(root, path)))}  ${path}\n`);
  await writeFile(resolve(root, manifestPath), lines.join(''));
  return files.length;
}
export async function verifyManifest(root, scope, manifestPath) {
  const records = parseManifest(await readFile(resolve(root, manifestPath), 'utf8'));
  const files = await collectFiles(root, scope);
  assertMembership(files, records);
  for (const path of files) if (sha256(await readFile(resolve(root, path))) !== records.get(path)) {
    throw new Error(`Manifest hash mismatch: ${path}`);
  }
  return files.length;
}

function isInput(path) {
  return (!path.startsWith('evidence/') && !path.includes('/evidence/') && !path.startsWith('inventory/acquisition-evidence/') && !path.startsWith('inventory/reference-evidence-20261107/') && !path.startsWith('inventory/reference-correction-evidence-20261107/'))
    || (path.startsWith('evidence/collection-platform/') && path.endsWith('.mjs'));
}
async function inputRecords(root) {
  const files = (await collectFiles(root, collectionScope)).filter(isInput);
  const records = [];
  for (const path of files) {
    const bytes = await readFile(resolve(root, path));
    records.push({ path, sha256: sha256(bytes), size: bytes.length });
  }
  return records;
}
async function writeEvidence(root) {
  await mkdir(resolve(root, evidenceDirectory), { recursive: true });
  await writeFile(resolve(root, evidenceDirectory, 'scope.json'), JSON.stringify(collectionScope, null, 2) + '\n');
  const git = args => execFileSync('git', ['-C', root, ...args], { encoding: 'utf8' }).trim();
  const tree = { version: 1, status: 'tested-worktree-not-final-commit', observedHead: git(['rev-parse', 'HEAD']),
    integrationBase: git(['rev-parse', 'HEAD']), lineageBase: '6f39ff6734d446fb42547dd7b7ab697bbb7fc84c',
    notice: 'Input bytes, not a claim every acquisition/provenance script was executed; commands and bounded results are in REPORT.md and raw/. Final candidate SHA must be bound after parent commit.',
    files: await inputRecords(root) };
  await writeFile(resolve(root, evidenceDirectory, 'tested-tree.json'), JSON.stringify(tree, null, 2) + '\n');
  return writeManifest(root, collectionScope, `${evidenceDirectory}/SUMS.sha256`);
}
async function verifyEvidence(root) {
  const recorded = JSON.parse(await readFile(resolve(root, evidenceDirectory, 'scope.json'), 'utf8'));
  if (JSON.stringify(recorded) !== JSON.stringify(collectionScope)) throw new Error('Unsupported or modified evidence scope');
  const count = await verifyManifest(root, collectionScope, `${evidenceDirectory}/SUMS.sha256`);
  const tree = JSON.parse(await readFile(resolve(root, evidenceDirectory, 'tested-tree.json'), 'utf8'));
  if (JSON.stringify(tree.files) !== JSON.stringify(await inputRecords(root))) throw new Error('Tested input tree mismatch');
  return count;
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const root = fileURLToPath(new URL('../../', import.meta.url));
    // verify.mjs resides in evidence/collection-platform, two levels below the repository.
    const command = process.argv[2];
    if (!['write', 'verify'].includes(command) || process.argv.length !== 3) throw new Error('Usage: node evidence/collection-platform/verify.mjs write|verify');
    const count = command === 'write' ? await writeEvidence(root) : await verifyEvidence(root);
    console.log(`Collection SUMS ${command}: ${count} files; bidirectional membership + SHA256 + explicit active scope; not whole worktree, not acceptance`);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
