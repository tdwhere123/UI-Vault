import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { spawnSync } from 'node:child_process';

const ROOT = dirname(fileURLToPath(import.meta.url));
const AUTHORITY_SHA = '60e0b68c0f35c078eef3a5d29419d0b03ff84ec1df9c3f9d6e39a519a5ae7985';
const ZIPS = [
  'batches/flowbite-20261111/bundles/dropdown.zip',
  'batches/flowbite-20261111/bundles/drawer.zip',
  'batches/flowbite-20261111/bundles/mega-menu.zip',
  'batches/flowbite-20261111/bundles/footer.zip',
  'batches/flowbite-20261111/bundles/carousel.zip',
  'batches/flowbite-20261111/bundles/accordion.zip',
  'batches/flowbite-20261111/bundles/tabs.zip',
  'batches/hyperui-20261111/bundles/application-modals.zip',
  'batches/hyperui-20261111/bundles/application-dropdown.zip',
  'batches/daisyui-20261111/bundles/accordion.zip',
  'batches/daisyui-20261111/bundles/tabs.zip',
];

function sha256(buf) {
  return createHash('sha256').update(buf).digest('hex');
}

function zipMember(absPath, name) {
  const py = `
import sys, zipfile
z = zipfile.ZipFile(sys.argv[1])
sys.stdout.buffer.write(z.read(sys.argv[2]))
`;
  const r = spawnSync('python3', ['-c', py, absPath, name], { encoding: 'buffer', maxBuffer: 16 * 1024 * 1024 });
  if (r.status !== 0) {
    throw new Error(`zip member ${absPath}:${name} failed: ${r.stderr}`);
  }
  return r.stdout;
}

test('tree authority is official Tailwind v4.3.3 LICENSE bytes', async () => {
  const buf = await readFile(join(ROOT, 'licenses/tailwindcss-v4.3.3/LICENSE.txt'));
  assert.equal(buf.byteLength, 1071);
  assert.equal(sha256(buf), AUTHORITY_SHA);
  assert.match(buf.toString('utf8'), /Copyright \(c\) Tailwind Labs, Inc\./);
  assert.match(buf.toString('utf8'), /The above copyright notice and this permission notice/);
});

test('eleven frozen settlement ZIPs bind that LICENSE to their runtime.css', () => {
  for (const rel of ZIPS) {
    const abs = join(ROOT, rel);
    const css = zipMember(abs, 'runtime.css');
    const cssSha = sha256(css);
    const lic = zipMember(abs, 'licenses/tailwindcss-v4.3.3/LICENSE.txt');
    assert.equal(sha256(lic), AUTHORITY_SHA, rel);
    const notice = zipMember(abs, 'TAILWIND-CSS-NOTICE.md').toString('utf8');
    assert.match(notice, new RegExp(cssSha), rel);
    assert.match(notice, new RegExp(AUTHORITY_SHA), rel);
    assert.match(notice, /Copyright \(c\) Tailwind Labs, Inc\./);
    assert.doesNotMatch(notice, /this notice licenses Popper/i);
  }
});

test('two hooked e9fd cover files keep the exact candidate crop bytes', async () => {
  const vis = await readFile(join(ROOT, 'thumbnails/vis-timeline--local-task-planner.webp'));
  const silver = await readFile(join(ROOT, 'thumbnails/silverbullet--document-navigation-workspace.webp'));
  assert.equal(sha256(vis), '6f1fa35bb80ec5a7ff76112f54add74387e0f3693a8364b52124e3c900ceb08b');
  assert.equal(vis.byteLength, 7202);
  assert.equal(sha256(silver), 'aa3e9778fcb1e6a51eba18e1e2916827752528a7748c64481fa4a9524894085e');
  assert.equal(silver.byteLength, 10776);
});
