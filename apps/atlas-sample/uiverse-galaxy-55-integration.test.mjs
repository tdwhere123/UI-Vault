import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {Script} from 'node:vm';
import {adaptCandidate} from './candidate-adapter.mjs';
import {composePreview} from './preview-runtime.mjs';
import {localizeItem, displayLabel} from './display-names.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const FROZEN_ITEMS = '9d9fa4dd6e2de6fd8ac8a55973b1241232657d13d55d14790b536310fa0b1586';
const FROZEN_CATALOG = '8b20860df7fa1fac67e263ad8863ebaa3ebf88080078e3a6685ccc0a3a50c7be';
const FROZEN_LEDGER = '4d128edd162ef406db6f1b2e146eddb11c21991416408ee58085f3f915f6f40c';
const REVISION = 'adbd2adde0a299a3956ea288fb444ec01891ca41';
const LICENSE_SHA = '7feadcd7a611d37a4546c99f63a162bdf65656137828ebcba92e57dccfa368a4';
const BATCH = 'uiverse-galaxy-20261112';
const LATIN = /[a-z]/i;

const sha256 = (buf) => createHash('sha256').update(buf).digest('hex');
const read = (rel) => readFileSync(join(ROOT, rel));
const readText = (rel) => readFileSync(join(ROOT, rel), 'utf8');
const listZip = (fsPath) => execFileSync('python3', ['-c', 'import sys,zipfile; print("\\n".join(zipfile.ZipFile(sys.argv[1]).namelist()))', fsPath], {encoding: 'utf8'}).split(/\n/).filter(Boolean);
const readZip = (fsPath, member) => execFileSync('python3', ['-c', 'import sys,zipfile; sys.stdout.buffer.write(zipfile.ZipFile(sys.argv[1]).read(sys.argv[2]))', fsPath, member], {maxBuffer: 16 * 1024 * 1024});

function loadFrozen() {
  const frozen = JSON.parse(readText(`batches/${BATCH}/FROZEN-SOURCES.json`));
  assert.equal(frozen.count, 55);
  assert.equal(frozen.items.length, 55);
  assert.equal(frozen.revision, REVISION);
  assert.equal(frozen.licenseSha256, LICENSE_SHA);
  return frozen;
}

function skipResourceRef(ref) {
  const r = (ref || '').trim();
  if (!r || r.startsWith('#')) return true;
  if (/^(data:|blob:|javascript:|mailto:|tel:)/i.test(r)) return true;
  if (/^[a-z][a-z0-9+.-]*:/i.test(r)) return true;
  if (r.startsWith('/')) return true;
  return false;
}

function resourceRefs(html) {
  const refs = [];
  for (const m of html.matchAll(/(?:src|href)\s*=\s*['"]([^'"]+)['"]/gi)) refs.push(m[1]);
  for (const m of html.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/gi)) refs.push(m[1]);
  return refs;
}

test('formal items, catalog and ledger hashes stay frozen at 40/500', () => {
  assert.equal(sha256(read('items.json')), FROZEN_ITEMS);
  assert.equal(sha256(read('catalog.json')), FROZEN_CATALOG);
  assert.equal(sha256(read('COLLECTION-LEDGER.json')), FROZEN_LEDGER);
  const ledger = JSON.parse(readText('COLLECTION-LEDGER.json'));
  assert.equal(ledger.accounts.verifiedNewIndependentUIs, 40);
  assert.equal(JSON.parse(readText('items.json')).length, 276);
});

test('55 official source files and ZIP original.html match the frozen official bytes', () => {
  const frozen = loadFrozen();
  assert.equal(sha256(read(`batches/${BATCH}/LICENSE.txt`)), LICENSE_SHA);
  const seen = new Set();
  for (const item of frozen.items) {
    assert.equal(seen.has(item.id), false, item.id);
    seen.add(item.id);
    const official = read(item.code);
    assert.equal(sha256(official), item.officialSha256, item.id);
    const zipPath = join(ROOT, item.archive);
    const names = listZip(zipPath);
    for (const need of ['original.html', 'preview.html', 'LICENSE.txt', 'NOTICE.txt', 'runtime.css', 'runtime.js']) {
      assert(names.includes(need), `${item.id} missing ${need}`);
    }
    const zipOriginal = readZip(zipPath, 'original.html');
    assert.equal(Buffer.compare(zipOriginal, official), 0, item.id);
    assert.equal(sha256(zipOriginal), item.officialSha256, item.id);
    assert.equal(sha256(readZip(zipPath, 'LICENSE.txt')), LICENSE_SHA, item.id);
    const notice = readZip(zipPath, 'NOTICE.txt').toString('utf8');
    assert(notice.includes(item.officialPath), item.id);
    assert(notice.includes(REVISION), item.id);
    if (item.mentionsFontAwesome) {
      assert.match(notice, /Font Awesome/i, item.id);
    }
  }
  assert.equal(seen.size, 55);
});

test('55 path classifications map to unique candidate catalog entries and preview routes', () => {
  const frozen = loadFrozen();
  const catalog = JSON.parse(readText('candidate-catalog.json'));
  const items = JSON.parse(readText('items.json'));
  const itemIds = new Set(items.map((x) => x.id));
  const byId = new Map(catalog.map((x) => [x.id, x]));
  const familyCounts = new Map();
  for (const item of frozen.items) {
    assert.equal(itemIds.has(item.id), false, `id leaked into items.json: ${item.id}`);
    const entry = byId.get(item.id);
    assert(entry, `missing catalog entry ${item.id}`);
    assert.equal(entry.batch, BATCH);
    assert.equal(entry.revision, REVISION);
    assert.equal(entry.preview, item.preview);
    assert.equal(entry.code, item.code);
    assert.equal(entry.archive, item.archive);
    assert.equal(entry.category, item.atlasCategory);
    assert.equal(entry.format, '组件与效果');
    assert.equal(entry.kind, '组件');
    assert.equal(entry.license, 'MIT');
    assert.equal(entry.upstream, item.upstream);
    assert.equal(entry.title, item.title);
    assert.doesNotMatch(entry.title, LATIN, item.id);
    const localized = localizeItem(entry);
    assert.doesNotMatch(localized.title, LATIN, item.id);
    for (const key of ['category', 'format', 'kind']) {
      assert.doesNotMatch(displayLabel(entry[key]), LATIN, `${item.id} ${key}`);
    }
    const adapted = adaptCandidate(entry);
    assert.equal(adapted.bundle, item.archive, item.id);
    assert.equal(adapted.runtime.css, `batches/${BATCH}/runtime.css`);
    assert.equal(adapted.runtime.js, `batches/${BATCH}/runtime.js`);
    assert(existsSync(join(ROOT, entry.preview)), item.id);
    assert(existsSync(join(ROOT, entry.code)), item.id);
    assert(existsSync(join(ROOT, entry.archive)), item.id);
    familyCounts.set(item.officialCategory, (familyCounts.get(item.officialCategory) || 0) + 1);
  }
  assert.equal(familyCounts.size, 11);
  for (const [family, count] of familyCounts) assert.equal(count, 5, family);
  const reserved = ['uiverse:book-material', 'uiverse:water-material', 'uiverse:clock-material'];
  for (const id of reserved) {
    assert(byId.has(id), id);
    assert.equal(frozen.items.some((x) => x.id === id), false);
  }
  assert.equal(catalog.filter((x) => x.batch === BATCH).length, 55);
});

test('55 previews keep official CSS and wire local runtime resources', () => {
  const frozen = loadFrozen();
  const css = readText(`batches/${BATCH}/runtime.css`);
  const js = readText(`batches/${BATCH}/runtime.js`);
  assert(css.length > 0);
  new Script(js);
  const runtime = {
    css: `batches/${BATCH}/runtime.css`,
    js: `batches/${BATCH}/runtime.js`,
    cssHref: 'runtime.css',
    scriptSrc: 'runtime.js',
  };
  for (const item of frozen.items) {
    const official = readText(item.code);
    const preview = readText(item.preview);
    assert(preview.includes(official), `${item.id} preview lost official bytes`);
    assert.match(preview, /<link rel="stylesheet" href="runtime.css">/);
    assert.match(preview, /<script src="runtime.js"><\/script>/);
    assert(preview.includes('<style>'), item.id);
    for (const ref of resourceRefs(preview)) {
      if (skipResourceRef(ref)) continue;
      const base = join(ROOT, item.preview, '..', ref.split('?')[0]);
      assert(existsSync(base), `${item.id} missing preview resource ${ref}`);
    }
    const composed = composePreview(preview, css, js, runtime);
    assert(composed.includes("connect-src 'none'"), item.id);
    assert(!composed.includes('src="runtime.js"'), item.id);
    assert(composed.includes(official), item.id);
  }
});
