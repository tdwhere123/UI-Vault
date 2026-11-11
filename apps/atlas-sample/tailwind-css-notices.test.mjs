import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { test } from 'node:test';
import { execFileSync, spawnSync } from 'node:child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = process.env.ATLAS_SAMPLE_ROOT || HERE;
const ATLAS_REPO = process.env.ATLAS_REPO || join(HERE, '../..');
const BASELINE_COMMIT = '50a53e2646a560e9c042dc69aa801e3e21393eec';
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

const LIST_FEATURES_SHA = '49894c1f7d869ac863e93a6df9f21d1df47f4ca4dc90d8a2a08ba6c17f8b170a';
const REVIEWED_NOTICE_PACKAGES = [
  { id: 'hyperui:marketing-footers', rel: 'batches/hyperui-20261111/bundles/marketing-footers.zip', originalSha256: 'b195398978a8b1281750f52cd3a395b15fe831df884a4c3fe906cce9cffbfbe2', candidateSha256: '77bc99bb7b31dc9df331a02eb38bfcb4d2478a5dd25055e1300d62412e86d051', cssSha256: '97e0a9ac533a2fe8853abf5d41e943354142485d0590606712966750ad484a0a' },
  { id: 'hyperui:marketing-feature-grids', rel: 'batches/hyperui-20261111/bundles/marketing-feature-grids.zip', originalSha256: 'bc1c41a306449af02e1d8d51989279c0c70d445effb83743df4e806e52b281e6', candidateSha256: '32e9293e78bb1d9e3e0036bfd75212f4b0d245c84fcdcb96b742831babdee821', cssSha256: '97e0a9ac533a2fe8853abf5d41e943354142485d0590606712966750ad484a0a' },
  { id: 'hyperui:application-stats', rel: 'batches/hyperui-20261111/bundles/application-stats.zip', originalSha256: '94a2a5eae833cb0869d30ef67aac7b7f9cefa86c70e5d111036237ee67dac5dd', candidateSha256: 'b27de69493cb3bd1de2b0434d0e46d088ef3f884f26ec177c8ddce4518703d26', cssSha256: '97e0a9ac533a2fe8853abf5d41e943354142485d0590606712966750ad484a0a' },
  { id: 'hyperui:application-empty-states', rel: 'batches/hyperui-20261111/bundles/application-empty-states.zip', originalSha256: 'ff4d0c6b458b7ded7abbda3b80090add5143d290b273838fc7ae9fce75740c3d', candidateSha256: '35ece7c8776f124c401a75b1adc6315447276f2d2e03c9c6e6502a2183540caf', cssSha256: '97e0a9ac533a2fe8853abf5d41e943354142485d0590606712966750ad484a0a' },
  { id: 'daisyui:footer', rel: 'batches/daisyui-20261111/bundles/footer.zip', originalSha256: '95194e2016a6b2a36e047741a8833b2eef656b0d26a39dd4ab937ccb4ae1c611', candidateSha256: 'f9bfcbce43a537eb0c8bd35a83be11b176cb4364e392d281cb859008f8fc8d1f', cssSha256: 'd05b5c0fe8e8a71d3f91c3b60a733cf45d964156b44f2416b9d32d8d79b79927' },
  { id: 'daisyui:hero', rel: 'batches/daisyui-20261111/bundles/hero.zip', originalSha256: '087e83ef22735b87190c5eabb0707c8a2b5b99c85e969804e39a61696cd65fca', candidateSha256: 'f363ee7cddf807723ae95ccdfa275e8c89771816405de637671cf14322c0a723', cssSha256: 'd05b5c0fe8e8a71d3f91c3b60a733cf45d964156b44f2416b9d32d8d79b79927' },
  { id: 'daisyui:steps', rel: 'batches/daisyui-20261111/bundles/steps.zip', originalSha256: 'a16de60cb5b3cce5cdf9a4cf8ffd6162e32239f5e84cb0f6f18c6bc7115a15cc', candidateSha256: '59ebce6b92225dd1d7b9348027209eb3b69c29a7c5964d56ce36b277ca04a84f', cssSha256: 'd05b5c0fe8e8a71d3f91c3b60a733cf45d964156b44f2416b9d32d8d79b79927' },
];

function gitShowBaseline(rel) {
  return execFileSync('git', ['show', `${BASELINE_COMMIT}:${rel}`], { cwd: ATLAS_REPO, maxBuffer: 32 * 1024 * 1024 });
}

test('reviewed HyperUI and DaisyUI download packages add official Tailwind license members without licensing Chart or Popper', () => {
  for (const item of REVIEWED_NOTICE_PACKAGES) {
    const live = readFileSync(join(ROOT, item.rel));
    const frozen = gitShowBaseline(`apps/atlas-sample/${item.rel}`);
    assert.equal(sha256(frozen), item.originalSha256, `${item.id} baseline original`);
    assert.equal(sha256(live), item.candidateSha256, `${item.id} must be the reviewed package bytes`);
    assert.notEqual(sha256(live), item.originalSha256, `${item.id} must differ from the baseline package`);
    const abs = join(ROOT, item.rel);
    const namesPy = 'import sys, zipfile, json; print(json.dumps(zipfile.ZipFile(sys.argv[1]).namelist()))';
    const namesRun = spawnSync('python3', ['-c', namesPy, abs], { encoding: 'utf8' });
    assert.equal(namesRun.status, 0, namesRun.stderr);
    const names = JSON.parse(namesRun.stdout);
    assert.equal(names.includes('licenses/tailwindcss-v4.3.3/LICENSE.txt'), true, item.id);
    assert.equal(names.includes('TAILWIND-CSS-NOTICE.md'), true, item.id);
    assert.equal(sha256(zipMember(abs, 'licenses/tailwindcss-v4.3.3/LICENSE.txt')), AUTHORITY_SHA, item.id);
    const notice = zipMember(abs, 'TAILWIND-CSS-NOTICE.md').toString('utf8');
    assert.match(notice, new RegExp(item.cssSha256), item.id);
    assert.match(notice, new RegExp(AUTHORITY_SHA), item.id);
    assert.doesNotMatch(notice, /this notice licenses Popper|this notice licenses Chart/i);
  }
});

test('Flowbite list-features package stays without official Tailwind full text', () => {
  const rel = 'batches/flowbite-20261111/bundles/list-features.zip';
  const live = readFileSync(join(ROOT, rel));
  const frozen = gitShowBaseline(`apps/atlas-sample/${rel}`);
  assert.equal(sha256(live), LIST_FEATURES_SHA);
  assert.deepEqual(live, frozen);
  const abs = join(ROOT, rel);
  const namesPy = 'import sys, zipfile, json; print(json.dumps(zipfile.ZipFile(sys.argv[1]).namelist()))';
  const namesRun = spawnSync('python3', ['-c', namesPy, abs], { encoding: 'utf8' });
  assert.equal(namesRun.status, 0, namesRun.stderr);
  const names = JSON.parse(namesRun.stdout);
  assert.equal(names.includes('licenses/tailwindcss-v4.3.3/LICENSE.txt'), false);
  assert.equal(names.includes('TAILWIND-CSS-NOTICE.md'), false);
  for (const name of names) {
    assert.notEqual(sha256(zipMember(abs, name)), AUTHORITY_SHA, name);
  }
});

test('public license notes name the reviewed HyperUI and DaisyUI packages and keep Flowbite list-features partial', () => {
  const licenses = readFileSync(join(ROOT, 'LICENSES.md'), 'utf8');
  assert.match(licenses, /batches\/hyperui-20261111\/bundles\/marketing-footers\.zip/);
  assert.match(licenses, /batches\/hyperui-20261111\/bundles\/marketing-feature-grids\.zip/);
  assert.match(licenses, /batches\/hyperui-20261111\/bundles\/application-stats\.zip/);
  assert.match(licenses, /batches\/hyperui-20261111\/bundles\/application-empty-states\.zip/);
  assert.match(licenses, /batches\/daisyui-20261111\/bundles\/footer\.zip/);
  assert.match(licenses, /batches\/daisyui-20261111\/bundles\/hero\.zip/);
  assert.match(licenses, /batches\/daisyui-20261111\/bundles\/steps\.zip/);
  assert.match(licenses, /batches\/flowbite-20261111\/bundles\/list-features\.zip/);
  assert.match(licenses, /仍无该官方全文/);
  assert.match(licenses, /仍为 partial/);
  assert.doesNotMatch(licenses, /因此关闭 Chart|图像权利已核|Logo 已授权/);
});
