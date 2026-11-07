import { execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, writeFile, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectionScope, collectFiles } from './verify.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const output = await mkdtemp(join(tmpdir(), 'vault-active-tree-'));
for (const path of await collectFiles(root, collectionScope)) {
  const target = join(output, path);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, await readFile(join(root, path)));
}
// Reuse installed lockfile dependencies only; no old sources, configs or compiled outputs.
await symlink(join(root, 'node_modules'), join(output, 'node_modules'));
console.log(`Source-only reproduction: ${output}; installed dependencies reused; no install/network`);
for (const args of [['build'], ['typecheck'], ['unit'], ['vault', 'index'], ['smoke:collection']]) {
  console.log(`$ pnpm ${args.join(' ')}`);
  process.stdout.write(execFileSync('pnpm', args, { cwd: output, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }));
}
console.log('PASS: active source/config snapshot builds and tests without root tsconfig.json, stopped modules, legacy tests or pre-existing dist');
