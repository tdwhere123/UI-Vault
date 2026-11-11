import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { test } from 'node:test';
import { collectionAccountingFrom, formatCollectionAccountingStatus, loadCollectionAccounting } from './collection-accounting.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const REPO = join(ROOT, '../..');
const SOURCE_COMMIT = '3695f76d56133051c9bd7bdacb05fddcfaf0c9d2';
const E5 = 'e5f0ee43bd1957e70bbb6e012270e54d80e3c618';
const EXPECTED_IDS = ['mantine-ui:table-sort', 'mantine-ui:double-navbar', 'mantine-ui:footer-links'];
const PENDING_IDS = ['daisyui:accordion', 'hyperui:application-modals'];
const BODY_PATHS = [
  'batches/mantine-20261111-j/bundles/table-sort.zip',
  'batches/mantine-20261111-j/bundles/double-navbar.zip',
  'batches/mantine-20261111-j/bundles/footer-links.zip',
  'batches/mantine-20261111-j/table-sort/index.html',
  'batches/mantine-20261111-j/table-sort/runtime.js',
  'batches/mantine-20261111-j/table-sort/runtime.css',
  'batches/mantine-20261111-j/double-navbar/index.html',
  'batches/mantine-20261111-j/double-navbar/runtime.js',
  'batches/mantine-20261111-j/double-navbar/runtime.css',
  'batches/mantine-20261111-j/footer-links/index.html',
  'batches/mantine-20261111-j/footer-links/runtime.js',
  'batches/mantine-20261111-j/footer-links/runtime.css',
  'batches/mantine-20261111-j/originals/TableSort/TableSort.tsx',
  'batches/mantine-20261111-j/originals/DoubleNavbar/DoubleNavbar.tsx',
  'batches/mantine-20261111-j/originals/FooterLinks/FooterLinks.tsx',
  'thumbnails/mantine-ui--table-sort.webp',
  'thumbnails/mantine-ui--double-navbar.webp',
  'thumbnails/mantine-ui--footer-links.webp',
];

function sha256(buf) {
  return createHash('sha256').update(buf).digest('hex');
}

function gitBlob(tip, rel) {
  return execFileSync('git', ['show', `${tip}:${rel}`], { cwd: REPO, maxBuffer: 32 * 1024 * 1024 });
}

test('named limited-countable records are the authority for the verified new independent count', async () => {
  const acc = await loadCollectionAccounting({
    atlasDir: ROOT,
    readFile: (name) => readFile(join(ROOT, name), 'utf8'),
  });
  const ids = acc.verifiedNewIndependentRecords.map((r) => r.id);
  assert.deepEqual(ids, EXPECTED_IDS);
  assert.equal(acc.verifiedNewIndependentUIs, 3);
  assert.equal(new Set(ids).size, 3);
  assert.equal(acc.covers, 0);
  assert.equal(acc.browserVisualQA, 0);
  assert.equal(acc.newCatalogConnects, 554);
  assert.equal(acc.oldSourceReconnects, 22);
  assert.equal(acc.duplicateOriginalExclusions, 1);
  assert.equal(acc.novelSourceIdentityUpperBound, 531);
  assert.equal(acc.catalogRecordCount, 1226);
  for (const pending of PENDING_IDS) assert.equal(ids.includes(pending), false);
  for (const record of acc.verifiedNewIndependentRecords) {
    assert.equal(record.sourceCommit, SOURCE_COMMIT);
    assert.match(record.scope, /限定范围|完整/);
    assert.match(record.exclusions, /当前提交的整矩阵或线上复验/);
    const ev = record.evidence;
    assert.equal(sha256(readFileSync(join(ROOT, ev.archive))), ev.archiveSha256);
    assert.equal(sha256(readFileSync(join(ROOT, ev.thumbnail))), ev.thumbnailSha256);
    assert.equal(readFileSync(join(ROOT, ev.preview)).byteLength > 0, true);
    assert.equal(readFileSync(join(ROOT, ev.runtimeCss)).byteLength > 0, true);
    assert.equal(readFileSync(join(ROOT, ev.runtimeJs)).byteLength > 0, true);
  }
  const footer = acc.verifiedNewIndependentRecords.find((r) => r.id === 'mantine-ui:footer-links');
  assert.match(footer.scope, /静态多栏|Features 悬停/);
  assert.match(footer.exclusions, /链接导航或社交/);
  assert.doesNotMatch(footer.scope, /点击导航|社交目标成功|真实后台/);
  const catalog = JSON.parse(readFileSync(join(ROOT, 'candidate-catalog.json'), 'utf8'));
  const items = JSON.parse(readFileSync(join(ROOT, 'items.json'), 'utf8'));
  assert.equal(items.length, 241);
  const itemIds = new Set(items.map((x) => x.id));
  for (const id of EXPECTED_IDS) {
    const entry = catalog.find((x) => x.id === id);
    assert.ok(entry, id);
    assert.equal(itemIds.has(id), false, id);
    assert.equal(entry.browserVisualQA, 'not_run');
    assert.match(entry.buildStatus, /完整视觉与交互验收仍未接受/);
    assert.match(entry.description, /限定范围计入已核新增独立 UI/);
    assert.ok(entry.thumbnail, id);
  }
  const status = formatCollectionAccountingStatus(acc);
  assert.match(status, /已核新增独立 UI 3，均为限定可计/);
  assert.match(status, /封面 0/);
  assert.match(status, /实测 0/);
  assert.doesNotMatch(status, /已核新增\/封面\/实测为 0/);
});

test('accounting rejects duplicate, unknown, or count-mismatched acceptance records', () => {
  const candidates = JSON.parse(readFileSync(join(ROOT, 'candidate-catalog.json'), 'utf8'));
  const ledger = JSON.parse(readFileSync(join(ROOT, 'COLLECTION-LEDGER.json'), 'utf8'));
  const base = collectionAccountingFrom(candidates, ledger);
  assert.equal(base.verifiedNewIndependentUIs, 3);
  const dup = structuredClone(ledger);
  dup.verifiedNewIndependentRecords.push(dup.verifiedNewIndependentRecords[0]);
  dup.accounts.verifiedNewIndependentUIs = 4;
  assert.throws(() => collectionAccountingFrom(candidates, dup), /duplicate verifiedNewIndependent id/);
  const unknown = structuredClone(ledger);
  unknown.verifiedNewIndependentRecords[0].id = 'not-a-catalog:item';
  unknown.accounts.verifiedNewIndependentUIs = 3;
  assert.throws(() => collectionAccountingFrom(candidates, unknown), /not in the catalog/);
  const mismatch = structuredClone(ledger);
  mismatch.accounts.verifiedNewIndependentUIs = 0;
  assert.throws(() => collectionAccountingFrom(candidates, mismatch), /does not match named records/);
  // A copied Daisy record with a matching count is accepted: the parser does not reject unverified IDs.
  const pending = structuredClone(ledger);
  const extra = structuredClone(ledger.verifiedNewIndependentRecords[0]);
  extra.id = 'daisyui:accordion';
  extra.scope = 'copied record used only as a parser control';
  pending.verifiedNewIndependentRecords.push(extra);
  pending.accounts.verifiedNewIndependentUIs = 4;
  const inflated = collectionAccountingFrom(candidates, pending);
  assert.equal(inflated.verifiedNewIndependentUIs, 4);
  const productIds = ledger.verifiedNewIndependentRecords.map((r) => r.id);
  assert.equal(productIds.includes('daisyui:accordion'), false);
  assert.equal(productIds.includes('hyperui:application-modals'), false);
});


test('accounting rejects a verified count above a zero identity upper bound', () => {
  const candidates = JSON.parse(readFileSync(join(ROOT, 'candidate-catalog.json'), 'utf8'));
  const ledger = JSON.parse(readFileSync(join(ROOT, 'COLLECTION-LEDGER.json'), 'utf8'));
  const over = structuredClone(ledger);
  over.accounts.newCatalogConnectsThisLine = 23;
  over.accounts.novelSourceIdentityUpperBound = 0;
  assert.throws(() => collectionAccountingFrom(candidates, over), /exceeds novel source identity upper bound/);
  const negative = structuredClone(ledger);
  negative.accounts.newCatalogConnectsThisLine = 20;
  assert.throws(() => collectionAccountingFrom(candidates, negative), /novel-source identity upper bound is invalid/);
});

test('accounting rejects explicit null records and accepts missing or empty records with a zero count', () => {
  const candidates = JSON.parse(readFileSync(join(ROOT, 'candidate-catalog.json'), 'utf8'));
  const ledger = JSON.parse(readFileSync(join(ROOT, 'COLLECTION-LEDGER.json'), 'utf8'));
  const nulled = structuredClone(ledger);
  nulled.verifiedNewIndependentRecords = null;
  nulled.accounts.verifiedNewIndependentUIs = 0;
  assert.throws(() => collectionAccountingFrom(candidates, nulled), /must not be null/);
  const missing = structuredClone(ledger);
  delete missing.verifiedNewIndependentRecords;
  missing.accounts.verifiedNewIndependentUIs = 0;
  const fromMissing = collectionAccountingFrom(candidates, missing);
  assert.deepEqual(fromMissing.verifiedNewIndependentRecords, []);
  assert.equal(fromMissing.verifiedNewIndependentUIs, 0);
  const empty = structuredClone(ledger);
  empty.verifiedNewIndependentRecords = [];
  empty.accounts.verifiedNewIndependentUIs = 0;
  const fromEmpty = collectionAccountingFrom(candidates, empty);
  assert.deepEqual(fromEmpty.verifiedNewIndependentRecords, []);
  assert.equal(fromEmpty.verifiedNewIndependentUIs, 0);
  const badShape = structuredClone(ledger);
  badShape.verifiedNewIndependentRecords = { id: 'mantine-ui:table-sort' };
  assert.throws(() => collectionAccountingFrom(candidates, badShape), /must be an array/);
});

test('public consumers current fields match the limited countable ledger', () => {
  const ledger = JSON.parse(readFileSync(join(ROOT, 'COLLECTION-LEDGER.json'), 'utf8'));
  const catalog = JSON.parse(readFileSync(join(ROOT, 'candidate-catalog.json'), 'utf8'));
  const readme = readFileSync(join(ROOT, 'README.md'), 'utf8');
  const manifest = JSON.parse(readFileSync(join(ROOT, 'batches/mantine-20261111-j/manifest.json'), 'utf8'));
  assert.equal(ledger.accounts.verifiedNewIndependentUIs, 3);
  assert.equal(ledger.accounts.covers, 0);
  assert.equal(ledger.accounts.browserVisualQA, 0);
  assert.match(readme, /已核新增独立 UI 3/);
  assert.doesNotMatch(readme, /已核新增独立 UI 0/);
  assert.match(readme, /已核库存仍为 241/);
  assert.match(readme, /封面 0/);
  assert.match(readme, /真实浏览器整矩阵实测 0/);
  assert.equal(manifest.items.length, 52);
  for (const id of EXPECTED_IDS) {
    const entry = catalog.find((x) => x.id === id);
    const man = manifest.items.find((x) => x.id === id);
    assert.ok(entry && man, id);
    assert.equal(entry.browserVisualQA, 'not_run');
    for (const gaps of [entry.gaps, man.gaps]) {
      assert.match(gaps[0], /当时初筛记录/);
      assert.match(gaps[0], /限定范围计入已核新增独立 UI/);
      assert.match(gaps[0], /3695f76d56133051c9bd7bdacb05fddcfaf0c9d2/);
      assert.doesNotMatch(gaps[0], /不能称为已核独立/);
      const joined = gaps.join('\n');
      assert.match(joined, /限定范围计入已核新增独立 UI/);
      assert.doesNotMatch(joined, /不能称为已核独立/);
      assert.doesNotMatch(joined, /也不是已核独立/);
      assert.doesNotMatch(joined, /或已核独立/);
    }
  }
  const otherManifest = manifest.items.filter((x) => !EXPECTED_IDS.includes(x.id));
  assert.equal(otherManifest.length, 49);
  for (const item of otherManifest) {
    assert.match(item.gaps[0], /不能称为已核独立/);
  }
});

test('accepted runtime inputs remain the frozen source bytes', () => {
  for (const rel of BODY_PATHS) {
    const live = readFileSync(join(ROOT, rel));
    const frozen = gitBlob(E5, `apps/atlas-sample/${rel}`);
    const source = gitBlob(SOURCE_COMMIT, `apps/atlas-sample/${rel}`);
    assert.deepEqual(live, frozen, rel);
    assert.deepEqual(live, source, rel);
  }
  const liveManifest = JSON.parse(readFileSync(join(ROOT, 'batches/mantine-20261111-j/manifest.json'), 'utf8'));
  const frozenManifest = JSON.parse(gitBlob('1237bcea229b24f8e4edf983fffecda95b6d58e7', 'apps/atlas-sample/batches/mantine-20261111-j/manifest.json').toString('utf8'));
  assert.equal(liveManifest.itemCount, 52);
  assert.equal(frozenManifest.itemCount, 52);
  const changed = [];
  for (let i = 0; i < frozenManifest.items.length; i++) {
    const live = liveManifest.items[i];
    const frozen = frozenManifest.items[i];
    if (EXPECTED_IDS.includes(frozen.id)) {
      const { gaps: liveGaps, ...liveRest } = live;
      const { gaps: frozenGaps, ...frozenRest } = frozen;
      assert.deepEqual(liveRest, frozenRest, frozen.id);
      assert.notDeepEqual(liveGaps, frozenGaps, frozen.id);
      changed.push(frozen.id);
    } else {
      assert.deepEqual(live, frozen, frozen.id);
    }
  }
  assert.deepEqual(changed.sort(), [...EXPECTED_IDS].sort());
});

test('page export projects the named limited-countable records and leaves covers and visual QA at zero', async () => {
  const { exportPages } = await import('../../scripts/export-pages.mjs');
  const out = await mkdtemp(join(tmpdir(), 'ui-vault-export-acceptances-'));
  try {
    const version = await exportPages(out);
    assert.equal(version.collectionAccounting.verifiedNewIndependentUIs, 3);
    assert.deepEqual(version.collectionAccounting.verifiedNewIndependentRecords.map((r) => r.id), EXPECTED_IDS);
    assert.equal(version.collectionAccounting.covers, 0);
    assert.equal(version.collectionAccounting.browserVisualQA, 0);
    assert.equal(version.materials, 241);
    assert.equal(version.posters, 241);
    assert.notEqual(version.candidates, 241);
    const exportedLedger = JSON.parse(await readFile(join(out, 'COLLECTION-LEDGER.json'), 'utf8'));
    assert.deepEqual(exportedLedger.accounts, JSON.parse(readFileSync(join(ROOT, 'COLLECTION-LEDGER.json'), 'utf8')).accounts);
    const exportedReadme = await readFile(join(out, 'README.md'), 'utf8');
    assert.match(exportedReadme, /已核新增独立 UI 3/);
    assert.doesNotMatch(exportedReadme, /已核新增独立 UI 0/);
    const exportedCatalog = JSON.parse(await readFile(join(out, 'candidate-catalog.json'), 'utf8'));
    const exportedManifest = JSON.parse(await readFile(join(out, 'batches/mantine-20261111-j/manifest.json'), 'utf8'));
    for (const id of EXPECTED_IDS) {
      const gaps = exportedCatalog.find((x) => x.id === id).gaps;
      const manGaps = exportedManifest.items.find((x) => x.id === id).gaps;
      assert.match(gaps[0], /限定范围计入已核新增独立 UI/);
      assert.doesNotMatch(gaps[0], /不能称为已核独立/);
      assert.match(manGaps[0], /限定范围计入已核新增独立 UI/);
      assert.doesNotMatch(manGaps.join('\n'), /不能称为已核独立/);
    }
    for (const rel of [
      'thumbnails/mantine-ui--table-sort.webp',
      'batches/mantine-20261111-j/table-sort/runtime.js',
      'batches/mantine-20261111-j/bundles/footer-links.zip',
    ]) {
      assert.deepEqual(await readFile(join(out, rel)), readFileSync(join(ROOT, rel)));
    }
  } finally {
    await rm(out, { recursive: true, force: true });
  }
});
