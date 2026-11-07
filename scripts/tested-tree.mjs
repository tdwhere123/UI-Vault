import { readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { projectFiles } from './evidence.mjs';
import { sha256, manifestDigest } from '../dist/packages/core/src/identity.js';

const root = process.cwd();
const files = [];
for (const path of (await projectFiles(root)).filter(path => !path.startsWith('evidence/'))) {
  const bytes = await readFile(path);
  files.push({ path, size: bytes.length, sha256: sha256(bytes) });
}
const digest = manifestDigest(files);
const target = 'evidence/metadata-contract/tested-tree.json';
if (process.argv[2] === 'capture') {
  const record = { scope: 'all project files except evidence/, .git/, all node_modules/, root dist/',
    baseline: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(),
    sourceIndexTree: execFileSync('git', ['write-tree'], { encoding: 'utf8' }).trim(),
    sha256: digest, files };
  await writeFile(target, JSON.stringify(record, null, 2) + '\n');
  console.log(`CAPTURED tested source: ${files.length} files; SHA256=${digest}; Git index tree=${record.sourceIndexTree}`);
} else if (process.argv[2] === 'verify') {
  const record = JSON.parse(await readFile(target, 'utf8'));
  if (record.sha256 !== digest || JSON.stringify(record.files) !== JSON.stringify(files)) throw new Error('Tested tree changed');
  console.log(`VERIFIED tested source: ${files.length} files; SHA256=${digest}`);
} else throw new Error('Usage: node scripts/tested-tree.mjs capture|verify');
