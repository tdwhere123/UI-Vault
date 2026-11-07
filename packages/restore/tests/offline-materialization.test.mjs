import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { access, chmod, link, mkdir, mkdtemp, readFile, rename, stat, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { restoreComponent, verifyComponent, readSnapshotFile } from '../dist/index.js';
import { SafeDirectory } from '../dist/safe-directory.js';

const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const commit = 'a'.repeat(40);

async function fixture() {
  const root = await mkdtemp(join(tmpdir(), 'vault-restore-'));
  const snapshotPath = 'archive/example/button';
  const files = { 'src/button.tsx': 'export const Button = () => null;\n',
    'src/style.css': '.button { display: block; }\n', LICENSE: 'Synthetic test license; not a collected UI.\n' };
  for (const [path, content] of Object.entries(files)) {
    const target = join(root, snapshotPath, path);
    await mkdir(join(target, '..'), { recursive: true });
    await writeFile(target, content);
  }
  const component = {
    assetKind: 'source', id: 'example:button', sourceId: 'example', name: 'Button', category: 'input-form', tags: ['test'],
    upstreamUrl: 'https://example.invalid/button', upstreamCommit: commit,
    license: { status: 'allowed', evidencePath: `${snapshotPath}/LICENSE`, noticePaths: [] },
    snapshotPath, files: Object.entries(files).map(([path, bytes]) => ({ path, sha256: digest(bytes), size: Buffer.byteLength(bytes) })),
    dependencies: {}, limitations: ['Synthetic safety fixture; never counts toward real collection.']
  };
  const catalog = { sources: [{ id: 'example', name: 'Example', upstreamUrl: 'https://example.invalid', upstreamCommit: commit }], components: [component] };
  return { root, snapshotPath, files, component, catalog, componentId: component.id,
    archiveRoot: root, destination: join(root, 'output') };
}

function failureText(error) {
  return [error?.message, error?.cause && failureText(error.cause)].filter(Boolean).join(' | ');
}
async function rejects(promise, pattern) {
  await assert.rejects(promise, error => { assert.match(failureText(error), pattern); return true; });
}
async function absent(path) { await assert.rejects(access(path), { code: 'ENOENT' }); }

test('offline restoration preserves source and style bytes, repeats without replacing files, and never executes source', async () => {
  const input = await fixture();
  const marker = join(input.root, 'executed');
  const script = `import {writeFileSync} from 'node:fs'; writeFileSync(${JSON.stringify(marker)}, 'bad');`;
  await writeFile(join(input.root, input.snapshotPath, 'payload.mjs'), script);
  input.component.files.push({ path: 'payload.mjs', sha256: digest(script), size: Buffer.byteLength(script) });
  const priorFetch = globalThis.fetch;
  globalThis.fetch = () => { throw new Error('Network unavailable'); };
  try {
    const first = await restoreComponent(input);
    assert.equal(first.created.length, 4);
    assert.deepEqual(first.unchanged, []);
    const before = await stat(join(input.destination, 'src/button.tsx'));
    const second = await restoreComponent(input);
    assert.deepEqual(second.created, []);
    assert.equal(second.unchanged.length, 4);
    const after = await stat(join(input.destination, 'src/button.tsx'));
    assert.equal(before.ino, after.ino);
    assert.equal(before.mtimeMs, after.mtimeMs);
    for (const file of input.component.files) {
      const bytes = await readFile(join(input.destination, file.path));
      assert.equal(digest(bytes), file.sha256);
      assert.equal(bytes.length, file.size);
      assert.equal((await stat(join(input.destination, file.path))).mode & 0o111, 0);
    }
    await absent(marker);
  } finally { globalThis.fetch = priorFetch; }
});

test('a same-size source corruption fails hashing before creating destination', async () => {
  const input = await fixture();
  const file = input.component.files[0];
  await writeFile(join(input.root, input.snapshotPath, file.path), Buffer.alloc(file.size, 120));
  await rejects(restoreComponent(input), /SHA256 mismatch/);
  await absent(input.destination);
});

test('missing and wrong-size snapshot files fail without writing destination', async () => {
  const input = await fixture();
  input.component.files.push({ path: 'missing.tsx', size: 1, sha256: digest('x') });
  await rejects(restoreComponent(input), /file set/);
  await absent(input.destination);
  const other = await fixture();
  await writeFile(join(other.root, other.snapshotPath, 'src/button.tsx'), 'short');
  await rejects(restoreComponent(other), /expected size/);
  await absent(other.destination);
});

test('catalog path traversal, absolute paths, duplicate files, and file-directory collisions are rejected', async () => {
  for (const path of ['../escape', '/escape', 'src/../../escape', 'C:\\escape', 'src//escape', 'src/./escape']) {
    const input = await fixture();
    input.component.files[0].path = path;
    await rejects(restoreComponent(input), /Unsafe path/);
    await absent(input.destination);
  }
  for (const path of ['src/button.tsx', 'src']) {
    const input = await fixture();
    input.component.files.push({ path, size: 0, sha256: digest('') });
    await rejects(restoreComponent(input), /Duplicate file path|mapping conflict/);
    await absent(input.destination);
  }
});

test('unknown and restricted records cannot materialize even if files are supplied', async () => {
  for (const status of ['unknown', 'restricted']) {
    const input = await fixture();
    input.component.license.status = status;
    await rejects(restoreComponent(input), /registration only/);
    input.component.files = [];
    input.component.snapshotPath = null;
    await rejects(restoreComponent(input), /Only allowed/);
    await absent(input.destination);
  }
});

test('license and notices must be included in the hashed snapshot', async () => {
  const input = await fixture();
  input.component.license.noticePaths = [`${input.snapshotPath}/NOTICE`];
  await rejects(restoreComponent(input), /not in the hashed snapshot/);
  await absent(input.destination);
  input.component.license.noticePaths = [];
  input.component.license.evidencePath = 'inventory/LICENSE';
  await rejects(restoreComponent(input), /not in the hashed snapshot/);
  await absent(input.destination);
});

test('source symlink files, symlink directories, and hardlinks are rejected', async () => {
  for (const kind of ['file', 'directory', 'hardlink']) {
    const input = await fixture();
    const outside = join(input.root, 'outside');
    await mkdir(outside);
    const bytes = Buffer.from('x');
    await writeFile(join(outside, 'x'), bytes);
    const relative = kind === 'directory' ? 'linked/x' : 'linked';
    const target = join(input.root, input.snapshotPath, 'linked');
    if (kind === 'hardlink') await link(join(outside, 'x'), target);
    else await symlink(kind === 'directory' ? outside : join(outside, 'x'), target);
    input.component.files.push({ path: relative, size: 1, sha256: digest(bytes) });
    await rejects(restoreComponent(input), /ELOOP|ENOTDIR|single regular file|not a regular/);
    await absent(input.destination);
    assert.equal(await readFile(join(outside, 'x'), 'utf8'), 'x');
  }
});

test('destination symlink roots and parent directories never write to an outside target', async () => {
  for (const rootLink of [true, false]) {
    const input = await fixture();
    const outside = join(input.root, 'outside');
    await mkdir(outside);
    if (rootLink) await symlink(outside, input.destination);
    else {
      await mkdir(input.destination);
      await symlink(outside, join(input.destination, 'src'));
    }
    await rejects(restoreComponent(input), /ENOTDIR|ELOOP/);
    await absent(join(outside, 'button.tsx'));
    await absent(join(outside, 'LICENSE'));
  }
});

test('existing destination conflicts are not overwritten and prevent new payload writes', async () => {
  const input = await fixture();
  await mkdir(join(input.destination, 'src'), { recursive: true });
  const target = join(input.destination, 'src/style.css');
  const original = 'x'.repeat(input.files['src/style.css'].length);
  await writeFile(target, original);
  await rejects(restoreComponent(input), /Destination conflict/);
  assert.equal(await readFile(target, 'utf8'), original);
  await absent(join(input.destination, 'src/button.tsx'));
  await absent(join(input.destination, 'LICENSE'));
});

test('an existing matching subset resumes without replacing already restored files', async () => {
  const input = await fixture();
  await mkdir(join(input.destination, 'src'), { recursive: true });
  await writeFile(join(input.destination, 'src/button.tsx'), input.files['src/button.tsx']);
  const result = await restoreComponent(input);
  assert.deepEqual(result.unchanged, ['src/button.tsx']);
  assert.equal(result.created.length, 2);
});

test('archive overlap and byte limits reject before output writes', async () => {
  const input = await fixture();
  for (const destination of [input.root, join(input.root, 'archive'), join(input.root, input.snapshotPath, 'restored')]) {
    await rejects(restoreComponent({ ...input, destination }), /overlap/);
  }
  input.component.files[0].size = 16 * 1024 * 1024 + 1;
  await rejects(restoreComponent(input), /byte limit/);
  await absent(input.destination);
});

test('directory descriptors stay pinned when their visible path is replaced by a symlink', async () => {
  const input = await fixture();
  const inside = join(input.root, 'pinned');
  const outside = join(input.root, 'outside');
  await mkdir(inside);
  await mkdir(outside);
  await writeFile(join(inside, 'x'), 'good');
  await writeFile(join(outside, 'x'), 'evil');
  const handle = await SafeDirectory.open(inside);
  try {
    await rename(inside, `${inside}-moved`);
    await symlink(outside, inside);
    assert.equal((await handle.read('x', 4)).toString(), 'good');
    await handle.create('new', Buffer.from('safe'));
    assert.equal(await readFile(join(`${inside}-moved`, 'new'), 'utf8'), 'safe');
    await absent(join(outside, 'new'));
  } finally { await handle.close(); }
});

test('destination file symlinks and hardlinks reject without modifying their targets', async () => {
  for (const hardlink of [false, true]) {
    const input = await fixture();
    const outside = join(input.root, 'outside.tsx');
    await writeFile(outside, input.files['src/button.tsx']);
    await mkdir(join(input.destination, 'src'), { recursive: true });
    if (hardlink) await link(outside, join(input.destination, 'src/button.tsx'));
    else await symlink(outside, join(input.destination, 'src/button.tsx'));
    await rejects(restoreComponent(input), /ELOOP|single regular file/);
    assert.equal(await readFile(outside, 'utf8'), input.files['src/button.tsx']);
    await absent(join(input.destination, 'LICENSE'));
  }
});

test('write failure reports partial output and a repeat resumes after filesystem repair', async () => {
  const input = await fixture();
  input.component.files.sort((a, b) => a.path.localeCompare(b.path, 'en'));
  await mkdir(join(input.destination, 'src'), { recursive: true });
  await chmod(join(input.destination, 'src'), 0o500);
  try {
    await rejects(restoreComponent(input), /may be partial.*EACCES/);
    assert.equal(await readFile(join(input.destination, 'LICENSE'), 'utf8'), input.files.LICENSE);
    await absent(join(input.destination, 'src/button.tsx'));
  } finally { await chmod(join(input.destination, 'src'), 0o700); }
  const result = await restoreComponent(input);
  assert.deepEqual(result.unchanged, ['LICENSE']);
  assert.deepEqual(result.created, ['src/button.tsx', 'src/style.css']);
});

test('reference records remain view-only even when their license status is allowed', async () => {
  const input = await fixture();
  input.component = { ...input.component, assetKind: 'reference', upstreamCommit: null,
    snapshotPath: null, files: [], dependencies: {}, publicUrl: 'https://example.invalid/reference',
    isInference: true, interactionFlow: ['Open reference'],
    visualNotes: { layout: 'Test', colors: 'Test', typography: 'Test', motion: 'Test' },
    useCases: ['Test'], implementationNotes: 'Reference only' };
  input.catalog.components = [input.component];
  await rejects(restoreComponent(input), /Reference records cannot/);
  await absent(input.destination);
});

test('unlisted source files and directories fail the exact manifest set check', async () => {
  for (const directory of [false, true]) {
    const input = await fixture();
    const extra = join(input.root, input.snapshotPath, 'unlisted');
    if (directory) await mkdir(extra);
    else await writeFile(extra, 'not in manifest');
    await rejects(restoreComponent(input), /file set/);
    await rejects(verifyComponent(input), /file set/);
    await rejects(readSnapshotFile({ ...input, filePath: 'src/button.tsx' }), /file set/);
    await absent(input.destination);
  }
});

test('read-only verification and Explorer reads share integrity checks and never materialize output', async () => {
  const input = await fixture();
  const result = await verifyComponent(input);
  assert.equal(result.files, 3);
  assert.equal(result.bytes, Object.values(input.files).reduce((sum, bytes) => sum + Buffer.byteLength(bytes), 0));
  assert.equal((await readSnapshotFile({ ...input, filePath: 'src/button.tsx' })).toString(), input.files['src/button.tsx']);
  await rejects(readSnapshotFile({ ...input, filePath: '../LICENSE' }), /not declared/);
  await rejects(readSnapshotFile({ ...input, filePath: 'package.json' }), /not declared/);
  const file = input.component.files[0];
  await writeFile(join(input.root, input.snapshotPath, file.path), Buffer.alloc(file.size, 120));
  await rejects(verifyComponent(input), /SHA256 mismatch/);
  await rejects(readSnapshotFile({ ...input, filePath: 'LICENSE' }), /SHA256 mismatch/);
  await absent(input.destination);
});
