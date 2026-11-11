import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { test } from 'node:test';
import { spawnSync } from 'node:child_process';

const ROOT = dirname(fileURLToPath(import.meta.url));
const AUTHORITY_REL = 'licenses/tailwindcss-v4.3.3/LICENSE.txt';
const AUTHORITY_SHA = '60e0b68c0f35c078eef3a5d29419d0b03ff84ec1df9c3f9d6e39a519a5ae7985';
const ONLINE_CSS = [
  'batches/flowbite-20261111/runtime.css',
  'batches/hyperui-20261111/runtime.css',
  'batches/daisyui-20261111/runtime.css',
];
const DISTINCT_ZIP_CSS = [
  'batches/flowbite-20261111/bundles/drawer.zip',
  'batches/flowbite-20261111/bundles/mega-menu.zip',
];
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

function markdownHrefs(md) {
  return [...md.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)].map((m) => m[1]);
}

function tailwindNoticeSection(md) {
  const start = md.indexOf('- **Tailwind CSS v4.3.3**');
  assert.notEqual(start, -1, 'public LICENSES.md must name Tailwind CSS v4.3.3');
  const rest = md.slice(start + 1);
  const next = rest.search(/\n- \*\*/);
  return md.slice(start, next === -1 ? md.length : start + 1 + next);
}

test('tree authority is official Tailwind v4.3.3 LICENSE bytes', async () => {
  const buf = await readFile(join(ROOT, AUTHORITY_REL));
  assert.equal(buf.byteLength, 1071);
  assert.equal(sha256(buf), AUTHORITY_SHA);
  assert.match(buf.toString('utf8'), /Copyright \(c\) Tailwind Labs, Inc\./);
  assert.match(buf.toString('utf8'), /The above copyright notice and this permission notice/);
});

test('download packages retain CSS-bound official license notices', () => {
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

test('preview thumbnails preserve source image bytes', async () => {
  const vis = await readFile(join(ROOT, 'thumbnails/vis-timeline--local-task-planner.webp'));
  const silver = await readFile(join(ROOT, 'thumbnails/silverbullet--document-navigation-workspace.webp'));
  assert.equal(sha256(vis), '6f1fa35bb80ec5a7ff76112f54add74387e0f3693a8364b52124e3c900ceb08b');
  assert.equal(vis.byteLength, 7202);
  assert.equal(sha256(silver), 'aa3e9778fcb1e6a51eba18e1e2916827752528a7748c64481fa4a9524894085e');
  assert.equal(silver.byteLength, 10776);
});

test('published license notes bind official Tailwind text to the online CSS distributions', async () => {
  const notices = await readFile(join(ROOT, 'LICENSES.md'), 'utf8');
  const authority = await readFile(join(ROOT, AUTHORITY_REL));
  const authoritySha = sha256(authority);
  assert.equal(authoritySha, AUTHORITY_SHA);
  const section = tailwindNoticeSection(notices);
  assert.match(section, new RegExp(`\\]\\(${AUTHORITY_REL.replaceAll('.', '\\.')}\\)`));
  assert.match(section, new RegExp(authoritySha));
  const onlineShas = [];
  for (const rel of ONLINE_CSS) {
    const buf = await readFile(join(ROOT, rel));
    const digest = sha256(buf);
    onlineShas.push(digest);
    assert.match(section, new RegExp(digest), rel);
    assert.match(section, new RegExp(`\\]\\(${rel.replaceAll('.', '\\.')}\\)`), rel);
  }
  const flowbiteOnline = onlineShas[0];
  const zipCssShas = DISTINCT_ZIP_CSS.map((rel) => sha256(zipMember(join(ROOT, rel), 'runtime.css')));
  assert.equal(new Set(zipCssShas).size, 1);
  assert.notEqual(zipCssShas[0], flowbiteOnline);
  assert.match(section, new RegExp(zipCssShas[0]));
  assert.match(section, new RegExp(flowbiteOnline));
  const hrefs = markdownHrefs(section);
  assert.ok(hrefs.length >= 4, 'section must link the official license and the three online CSS files');
  for (const href of hrefs) {
    assert.equal(href.includes('://'), false, href);
    const abs = join(ROOT, href);
    assert.equal(existsSync(abs), true, href);
  }
});

test('page export retains the official Tailwind license and the public notice bindings', async () => {
  const script = await readFile(new URL('../../scripts/export-pages.mjs', import.meta.url), 'utf8');
  assert.match(script, /'thumbnails','licenses'/);
  const { exportPages } = await import('../../scripts/export-pages.mjs');
  const out = await mkdtemp(join(tmpdir(), 'ui-vault-export-notices-'));
  try {
    await exportPages(out);
    const compare = [AUTHORITY_REL, 'LICENSES.md', ...ONLINE_CSS];
    for (const rel of compare) {
      const src = await readFile(join(ROOT, rel));
      const exported = await readFile(join(out, rel));
      assert.deepEqual(exported, src, rel);
    }
    const section = tailwindNoticeSection(await readFile(join(out, 'LICENSES.md'), 'utf8'));
    for (const href of markdownHrefs(section)) {
      const src = await readFile(join(ROOT, href));
      const exported = await readFile(join(out, href));
      assert.deepEqual(exported, src, href);
    }
  } finally {
    await rm(out, { recursive: true, force: true });
  }
});
