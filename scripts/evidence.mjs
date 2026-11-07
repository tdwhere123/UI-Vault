import { readdir, readFile, writeFile, lstat, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const defaultDirectory = 'evidence/metadata-contract';
const scope = { version: 1, mode: 'current-project', include: 'all regular project files',
  exclude: ['root .git/', 'all node_modules/', 'root dist/', 'all SUMS.sha256 files'] };
const excluded = path => path === '.git' || path.startsWith('.git/') || path === 'dist' || path.startsWith('dist/') ||
  path.split('/').includes('node_modules') || path.split('/').at(-1) === 'SUMS.sha256';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const safe = path => /^[A-Za-z0-9_@+.-]+(?:\/[A-Za-z0-9_@+.-]+)*$/.test(path) && !path.split('/').some(s => s === '.' || s === '..');
function directoryPath(directory) {
  if (!/^evidence\/[a-z0-9-]+$/.test(directory) || directory === 'evidence/g0') throw new Error('Historical evidence is immutable; choose a new scoped evidence directory');
  return directory;
}
export async function projectFiles(root, prefix = '') {
  const files = [];
  for (const name of (await readdir(resolve(root, prefix))).sort()) {
    const path = prefix ? `${prefix}/${name}` : name;
    if (excluded(path)) continue;
    const stat = await lstat(resolve(root, path));
    if (stat.isSymbolicLink()) throw new Error(`Symlink in evidence scope: ${path}`);
    if (stat.isDirectory()) files.push(...await projectFiles(root, path));
    else if (stat.isFile()) files.push(path);
    else throw new Error(`Special file in evidence scope: ${path}`);
  }
  return files.sort();
}
function parseSums(text) {
  const records = new Map();
  for (const line of text.trimEnd().split('\n')) {
    const match = /^([a-f0-9]{64})  (.+)$/.exec(line);
    if (!match || !safe(match[2]) || excluded(match[2]) || records.has(match[2])) throw new Error('Invalid/duplicate/excluded SUMS record');
    records.set(match[2], match[1]);
  }
  return records;
}
function exactMembership(files, records) {
  if (JSON.stringify(files) !== JSON.stringify([...records.keys()].sort())) throw new Error('SUMS scope mismatch: omitted or orphan record');
}
export async function writeSums(root, directory = defaultDirectory) {
  directoryPath(directory);
  await mkdir(resolve(root, directory), { recursive: true });
  await writeFile(resolve(root, directory, 'scope.json'), JSON.stringify(scope, null, 2) + '\n');
  const files = await projectFiles(root);
  const records = await Promise.all(files.map(async path => `${hash(await readFile(resolve(root, path)))}  ${path}\n`));
  await writeFile(resolve(root, directory, 'SUMS.sha256'), records.join(''));
  return files.length;
}
export async function verifySums(root, directory = defaultDirectory) {
  directoryPath(directory);
  const recordedScope = JSON.parse(await readFile(resolve(root, directory, 'scope.json'), 'utf8'));
  if (JSON.stringify(recordedScope) !== JSON.stringify(scope)) throw new Error('Unsupported or altered evidence scope');
  const records = parseSums(await readFile(resolve(root, directory, 'SUMS.sha256'), 'utf8'));
  const files = await projectFiles(root); exactMembership(files, records);
  for (const path of files) if (hash(await readFile(resolve(root, path))) !== records.get(path)) throw new Error(`SUMS hash mismatch: ${path}`);
  return files.length;
}
export async function verifyHistoricalSums(root, ref, manifest) {
  if (!/^[a-f0-9]{40}$/.test(ref) || !safe(manifest)) throw new Error('Historical scope requires full immutable commit and safe manifest path');
  const git = args => execFileSync('git', ['-C', root, ...args]);
  const records = parseSums(git(['show', `${ref}:${manifest}`]).toString('utf8'));
  const paths = git(['ls-tree', '-r', ref]).toString('utf8').trimEnd().split('\n').map(line => {
    const match = /^(100644|100755) blob [a-f0-9]+\t(.+)$/.exec(line);
    if (!match || !safe(match[2])) throw new Error('Historical scope contains unsupported file type or path');
    return match[2];
  }).filter(path => !excluded(path)).sort();
  exactMembership(paths, records);
  for (const path of paths) if (hash(git(['show', `${ref}:${path}`])) !== records.get(path)) throw new Error(`Historical SUMS hash mismatch: ${path}`);
  return paths.length;
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = fileURLToPath(new URL('../', import.meta.url));
  try {
    const [command, ref, manifest] = process.argv.slice(2);
    let count;
    if (command === 'historical') count = await verifyHistoricalSums(root, ref, manifest);
    else if (command === 'write') count = await writeSums(root);
    else if (command === 'verify') count = await verifySums(root);
    else throw new Error('Usage: node scripts/evidence.mjs write|verify|historical <full-commit> <manifest>');
    console.log(`SUMS ${command}: ${count} files; exact membership + SHA256; ${command === 'historical' ? 'immutable Git commit scope, not current checkout' : 'scope=evidence/metadata-contract/scope.json; all SUMS excluded'}`);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
