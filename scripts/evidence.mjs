import { readdir, readFile, writeFile, lstat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const excluded = (path) => path === '.git' || path.startsWith('.git/') ||
  path === 'dist' || path.startsWith('dist/') || path.split('/').includes('node_modules') ||
  path === 'evidence/g0/SUMS.sha256';
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');

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

export async function writeSums(root) {
  const files = await projectFiles(root);
  const records = await Promise.all(files.map(async path => `${hash(await readFile(resolve(root, path)))}  ${path}\n`));
  await writeFile(resolve(root, 'evidence/g0/SUMS.sha256'), records.join(''));
  return files.length;
}

export async function verifySums(root) {
  const text = await readFile(resolve(root, 'evidence/g0/SUMS.sha256'), 'utf8');
  const records = new Map();
  for (const line of text.trimEnd().split('\n')) {
    const match = /^([a-f0-9]{64})  ([A-Za-z0-9_@+./-]+)$/.exec(line);
    if (!match || match[2].split('/').some(s => s === '.' || s === '..' || !s) || excluded(match[2]) || records.has(match[2])) {
      throw new Error('Invalid/duplicate/excluded SUMS record');
    }
    records.set(match[2], match[1]);
  }
  const files = await projectFiles(root);
  if (JSON.stringify(files) !== JSON.stringify([...records.keys()].sort())) throw new Error('SUMS scope mismatch: omitted or orphan record');
  for (const path of files) {
    if (hash(await readFile(resolve(root, path))) !== records.get(path)) throw new Error(`SUMS hash mismatch: ${path}`);
  }
  return files.length;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(fileURLToPath(new URL('../', import.meta.url)));
  try {
    const command = process.argv[2];
    if (!['write', 'verify'].includes(command)) throw new Error('Usage: node scripts/evidence.mjs write|verify');
    const count = await (command === 'write' ? writeSums(root) : verifySums(root));
    console.log(`SUMS ${command}: ${count} files; exact membership + SHA256; excludes .git/, all node_modules/, dist/, SUMS itself`);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
