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
import { adaptCandidate } from './candidate-adapter.mjs';
import { localizeItem } from './display-names.mjs';
import { applyCuration } from './curation-policy.mjs';
import curationRules from './curation-rules.mjs';
import { composePreview, runtimeFor } from './preview-runtime.mjs';
import { loadMediaAssets } from './preview-media.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = process.env.ATLAS_SAMPLE_ROOT || HERE;
const REPO = process.env.ATLAS_REPO || join(HERE, '../..');
const BASELINE_COMMIT = '50a53e2646a560e9c042dc69aa801e3e21393eec';
const SOURCE_COMMIT = '3695f76d56133051c9bd7bdacb05fddcfaf0c9d2';
const E5 = 'e5f0ee43bd1957e70bbb6e012270e54d80e3c618';
const PREVIOUSLY_ACCEPTED_IDS = ['mantine-ui:table-sort', 'mantine-ui:double-navbar', 'mantine-ui:footer-links', 'daisyui:accordion', 'hyperui:application-modals'];
const CLASSIFIED_SCOPES = JSON.parse(readFileSync(new URL('test-fixtures/curation/qualified-inventory-scopes.json', import.meta.url), 'utf8')).qualified;
const CLASSIFIED_IDS = CLASSIFIED_SCOPES.map(x => x.id);
const EXPECTED_IDS = [...PREVIOUSLY_ACCEPTED_IDS, ...CLASSIFIED_IDS];
const CLASSIFIED_SOURCE_COMMIT = 'dde400f413f00fbc0d9c58a6ca6086c741b86304';
const CLASSIFIED_REVIEW_SHA256 = 'e9196e0c31068b7b8841213ebfc7ca075a1fffaeb02e593b456183aa51fd6098';
const CLASSIFIED_INPUT_MANIFEST_SHA256 = '80254f618bcca23ee5580c36a52cb7f8c044accc38eddc83fa6fff3f4fd5a61f';
const CLASSIFIED_QUALIFICATION_TABLE_SHA256 = 'fefc6d747aa352347c2d3be1fdacd96f3aba041f603fc658078e259146ea9b48';
const MANTINE_IDS = ['mantine-ui:table-sort', 'mantine-ui:double-navbar', 'mantine-ui:footer-links'];
const ADDITIONAL_LIMITED_COUNTABLE_IDS = ['daisyui:accordion', 'hyperui:application-modals'];
const POSTER_MANTINE_MANIFEST_IDS = [
  'mantine-ui:actions-grid', 'mantine-ui:card-gradient', 'mantine-ui:cookies-banner', 'mantine-ui:double-header',
  'mantine-ui:features-asymmetrical', 'mantine-ui:features-cards', 'mantine-ui:features-grid', 'mantine-ui:features-images',
  'mantine-ui:features-title', 'mantine-ui:footer-centered', 'mantine-ui:footer-simple', 'mantine-ui:footer-social',
  'mantine-ui:header-menu', 'mantine-ui:header-search', 'mantine-ui:header-simple', 'mantine-ui:hero-text',
  'mantine-ui:hero-title', 'mantine-ui:navbar-links-group', 'mantine-ui:navbar-minimal', 'mantine-ui:navbar-segmented',
  'mantine-ui:navbar-simple', 'mantine-ui:not-found-title', 'mantine-ui:nothing-found-background', 'mantine-ui:progress-card',
  'mantine-ui:authentication-title', 'mantine-ui:contact-us', 'mantine-ui:dropzone-button', 'mantine-ui:forgot-password',
  'mantine-ui:get-in-touch-simple', 'mantine-ui:server-error', 'mantine-ui:server-overload', 'mantine-ui:stats-card',
  'mantine-ui:stats-controls', 'mantine-ui:stats-grid', 'mantine-ui:stats-grid-icons', 'mantine-ui:stats-group',
  'mantine-ui:stats-ring', 'mantine-ui:stats-ring-card', 'mantine-ui:stats-segments', 'mantine-ui:switches-card',
  'mantine-ui:dnd-list', 'mantine-ui:dnd-list-handle', 'mantine-ui:dnd-table', 'mantine-ui:table-of-contents',
  'mantine-ui:table-of-contents-floating', 'mantine-ui:table-reviews', 'mantine-ui:table-scroll-area',
];
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

/** Catalog contract for limited-countable entries: original three must keep browserVisualQA = 'not_run'; the two appended records may omit the field and must not be 'passed'. */
function assertLimitedCountableCatalogBrowserVisualQA(catalog) {
  for (const id of MANTINE_IDS) {
    const entry = catalog.find((x) => x.id === id);
    assert.ok(entry, id);
    assert.equal(entry.browserVisualQA, 'not_run', id);
  }
  for (const id of ADDITIONAL_LIMITED_COUNTABLE_IDS) {
    const entry = catalog.find((x) => x.id === id);
    assert.ok(entry, id);
    assert.equal(entry.browserVisualQA, undefined, id);
    assert.notEqual(entry.browserVisualQA, 'passed', id);
  }
}


/** Sealed raw SHA-256 of each qualifying REVIEW and of the input manifest that REVIEW names.
 *  These are already-verified sealed-object constants, not a second inventory or a normalized collection fingerprint.
 *  The qualifying REVIEW's named FIXED-INPUTS.json input manifest (251 Git inputs) is distinct from that seal SHA256SUMS file (452 entries).
 */
const MANTINE_LIMITED_COUNTABLE_REVIEW_SHA256 = '83a41207a9eb5e18df3364cb9a041cd00794930f912153a2b0b1bebddb274ea6';
const MANTINE_LIMITED_COUNTABLE_INPUT_MANIFEST_SHA256 = 'd2405b32d1707a71b88b0a9c954fa96e77cf444a1945a0a1ba1ef4d2fb036025';
const ADDITIONAL_LIMITED_COUNTABLE_REVIEW_SHA256 = 'bdd3c47aaa729754062f59df7df7b3f513aff2aeb58415f158b1bfc233579822';
const ADDITIONAL_LIMITED_COUNTABLE_INPUT_MANIFEST_SHA256 = 'b71e61397d0a957cd03c6d8e8a5f37356eecaa58f5dc9ed9a166638626f40689';
const UNSUPPORTED_APPENDED_INPUT_MANIFEST_SHA256 = '202dc651413919eeb28fe1eba021c8ec1d7d2acd51cbf9fcff3eebb618bfb799';
const MANTINE_NORMALIZED_ISOLATION_COLLECTION_FINGERPRINT_SHA256 = 'f4837b9ed6d1140918fb92c596e575679179c2697453c46472de1b66ab0888ad';
const ADDITIONAL_LIMITED_COUNTABLE_SEAL_SHA256SUMS_SHA256 = '3f5ef14d58e414df7252952c3bfb97b500aa71c52fdbf38c6fb8b8ea736a535c';

/** Qualifying evidence contract: reviewSha256 and frozenPathsSha256 bind as a pair to that acceptance's REVIEW and the input manifest it names. */
function assertLimitedCountableQualifyingEvidence(records) {
  for (const record of records) {
    const ev = record.evidence;
    assert.ok(ev && typeof ev === 'object' && !Array.isArray(ev), record.id);
    if (MANTINE_IDS.includes(record.id)) {
      assert.equal(ev.reviewSha256, MANTINE_LIMITED_COUNTABLE_REVIEW_SHA256, record.id);
      assert.equal(ev.frozenPathsSha256, MANTINE_LIMITED_COUNTABLE_INPUT_MANIFEST_SHA256, record.id);
    } else if (ADDITIONAL_LIMITED_COUNTABLE_IDS.includes(record.id)) {
      assert.equal(ev.reviewSha256, ADDITIONAL_LIMITED_COUNTABLE_REVIEW_SHA256, record.id);
      assert.equal(ev.frozenPathsSha256, ADDITIONAL_LIMITED_COUNTABLE_INPUT_MANIFEST_SHA256, record.id);
    } else if (CLASSIFIED_IDS.includes(record.id)) {
      assert.equal(ev.reviewSha256, CLASSIFIED_REVIEW_SHA256, record.id);
      assert.equal(ev.frozenPathsSha256, CLASSIFIED_INPUT_MANIFEST_SHA256, record.id);
      assert.equal(ev.qualificationTableSha256, CLASSIFIED_QUALIFICATION_TABLE_SHA256, record.id);
    } else {
      assert.fail(`unexpected limited-countable id ${record.id}`);
    }
  }
}


test('named limited-countable records are the authority for the verified new independent count', async () => {
  const acc = await loadCollectionAccounting({
    atlasDir: ROOT,
    readFile: (name) => readFile(join(ROOT, name), 'utf8'),
  });
  const ids = acc.verifiedNewIndependentRecords.map((r) => r.id);
  assert.deepEqual(ids, EXPECTED_IDS);
  assert.equal(acc.verifiedNewIndependentUIs, 40);
  assert.equal(new Set(ids).size, 40);
  assert.equal(acc.covers, 0);
  assert.equal(acc.browserVisualQA, 0);
  assert.equal(acc.newCatalogConnects, 554);
  assert.equal(acc.oldSourceReconnects, 22);
  assert.equal(acc.duplicateOriginalExclusions, 1);
  assert.equal(acc.novelSourceIdentityUpperBound, 531);
  // Catalog record count is not the formal 40 or the identity upper bound.
  assert.equal(acc.catalogRecordCount, 1281);
  for (const id of ADDITIONAL_LIMITED_COUNTABLE_IDS) assert.equal(ids.includes(id), true);
  for (const record of acc.verifiedNewIndependentRecords) {
    if (MANTINE_IDS.includes(record.id)) assert.equal(record.sourceCommit, SOURCE_COMMIT);
    else if (ADDITIONAL_LIMITED_COUNTABLE_IDS.includes(record.id)) assert.equal(record.sourceCommit, E5);
    else assert.equal(record.sourceCommit, CLASSIFIED_SOURCE_COMMIT);
    assert.match(record.scope, /限定范围|完整/);
    assert.match(record.exclusions, /当前提交的整矩阵或线上复验/);
    const ev = record.evidence;
    assert.equal(sha256(readFileSync(join(ROOT, ev.archive))), ev.archiveSha256);
    assert.equal(sha256(readFileSync(join(ROOT, ev.thumbnail))), ev.thumbnailSha256);
    assert.equal(readFileSync(join(ROOT, ev.preview)).byteLength > 0, true);
    assert.equal(readFileSync(join(ROOT, ev.runtimeCss)).byteLength > 0, true);
    assert.equal(readFileSync(join(ROOT, ev.runtimeJs)).byteLength > 0, true);
  }
  assertLimitedCountableQualifyingEvidence(acc.verifiedNewIndependentRecords);
  for (const id of ADDITIONAL_LIMITED_COUNTABLE_IDS) {
    const unsupported = structuredClone(acc.verifiedNewIndependentRecords);
    unsupported.find((r) => r.id === id).evidence.frozenPathsSha256 = UNSUPPORTED_APPENDED_INPUT_MANIFEST_SHA256;
    assert.throws(() => assertLimitedCountableQualifyingEvidence(unsupported), { name: 'AssertionError' }, id);
  }
  for (const id of MANTINE_IDS) {
    const normalized = structuredClone(acc.verifiedNewIndependentRecords);
    normalized.find((r) => r.id === id).evidence.frozenPathsSha256 = MANTINE_NORMALIZED_ISOLATION_COLLECTION_FINGERPRINT_SHA256;
    assert.throws(() => assertLimitedCountableQualifyingEvidence(normalized), { name: 'AssertionError' }, id);
  }
  for (const id of ADDITIONAL_LIMITED_COUNTABLE_IDS) {
    for (const wrong of [MANTINE_LIMITED_COUNTABLE_INPUT_MANIFEST_SHA256, ADDITIONAL_LIMITED_COUNTABLE_SEAL_SHA256SUMS_SHA256]) {
      const crossed = structuredClone(acc.verifiedNewIndependentRecords);
      crossed.find((r) => r.id === id).evidence.frozenPathsSha256 = wrong;
      assert.throws(() => assertLimitedCountableQualifyingEvidence(crossed), { name: 'AssertionError' }, `${id} ${wrong}`);
    }
  }
  const footer = acc.verifiedNewIndependentRecords.find((r) => r.id === 'mantine-ui:footer-links');
  assert.match(footer.scope, /静态多栏|Features 悬停/);
  assert.match(footer.exclusions, /链接导航或社交/);
  assert.doesNotMatch(footer.scope, /点击导航|社交目标成功|真实后台/);
  const catalog = JSON.parse(readFileSync(join(ROOT, 'candidate-catalog.json'), 'utf8'));
  const items = JSON.parse(readFileSync(join(ROOT, 'items.json'), 'utf8'));
  assert.equal(items.length, 276);
  const itemIds = new Set(items.map((x) => x.id));
  for (const id of PREVIOUSLY_ACCEPTED_IDS) {
    const entry = catalog.find((x) => x.id === id);
    assert.ok(entry, id);
    assert.equal(itemIds.has(id), false, id);
    assert.match(entry.buildStatus, /完整视觉与交互验收仍未接受/);
    assert.match(entry.description, /限定范围计入已核新增独立 UI/);
    assert.ok(entry.thumbnail, id);
  }
  assertLimitedCountableCatalogBrowserVisualQA(catalog);
  for (const id of MANTINE_IDS) {
    const stripped = structuredClone(catalog);
    delete stripped.find((x) => x.id === id).browserVisualQA;
    assert.throws(() => assertLimitedCountableCatalogBrowserVisualQA(stripped), { name: 'AssertionError' }, id);
  }
  const status = formatCollectionAccountingStatus(acc);
  assert.match(status, /已核新增独立 UI 40，均为限定可计/);
  assert.match(status, /封面 0/);
  assert.match(status, /实测 0/);
  assert.doesNotMatch(status, /已核新增\/封面\/实测为 0/);
});

test('accounting rejects duplicate, unknown, or count-mismatched acceptance records', () => {
  const candidates = JSON.parse(readFileSync(join(ROOT, 'candidate-catalog.json'), 'utf8'));
  const ledger = JSON.parse(readFileSync(join(ROOT, 'COLLECTION-LEDGER.json'), 'utf8'));
  const base = collectionAccountingFrom(candidates, ledger);
  assert.equal(base.verifiedNewIndependentUIs, 40);
  const dup = structuredClone(ledger);
  dup.verifiedNewIndependentRecords.push(dup.verifiedNewIndependentRecords[0]);
  assert.equal(dup.verifiedNewIndependentRecords.length, 41);
  dup.accounts.verifiedNewIndependentUIs = dup.verifiedNewIndependentRecords.length;
  assert.throws(() => collectionAccountingFrom(candidates, dup), /duplicate verifiedNewIndependent id/);
  const unknown = structuredClone(ledger);
  unknown.verifiedNewIndependentRecords[0].id = 'not-a-catalog:item';
  unknown.accounts.verifiedNewIndependentUIs = 40;
  assert.throws(() => collectionAccountingFrom(candidates, unknown), /not in the catalog/);
  const mismatch = structuredClone(ledger);
  mismatch.accounts.verifiedNewIndependentUIs = 0;
  assert.throws(() => collectionAccountingFrom(candidates, mismatch), /does not match named records/);
  // A copied Daisy record with a matching count is accepted: the parser does not reject unverified IDs.
  const pending = structuredClone(ledger);
  const extra = structuredClone(ledger.verifiedNewIndependentRecords[0]);
  extra.id = 'daisyui:tabs';
  extra.scope = 'copied record used only as a parser control';
  pending.verifiedNewIndependentRecords.push(extra);
  pending.accounts.verifiedNewIndependentUIs = 41;
  const inflated = collectionAccountingFrom(candidates, pending);
  assert.equal(inflated.verifiedNewIndependentUIs, 41);
  const productIds = ledger.verifiedNewIndependentRecords.map((r) => r.id);
  assert.equal(productIds.includes('daisyui:accordion'), true);
  assert.equal(productIds.includes('hyperui:application-modals'), true);
  assert.equal(productIds.includes('daisyui:tabs'), false);
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
  assert.equal(ledger.accounts.verifiedNewIndependentUIs, 40);
  assert.equal(ledger.accounts.covers, 0);
  assert.equal(ledger.accounts.browserVisualQA, 0);
  assert.match(readme, /已核新增独立 UI 40/);
  assert.doesNotMatch(readme, /已核新增独立 UI 3/);
  assert.doesNotMatch(readme, /已核新增独立 UI 0/);
  assert.match(readme, /已核库存现为 276/);
  assert.match(readme, /封面 0/);
  assert.match(readme, /真实浏览器整矩阵实测 0/);
  assert.equal(manifest.items.length, 52);
  for (const id of MANTINE_IDS) {
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
  const daisyManifest = JSON.parse(readFileSync(join(ROOT, 'batches/daisyui-20261111/manifest.json'), 'utf8'));
  const hyperManifest = JSON.parse(readFileSync(join(ROOT, 'batches/hyperui-20261111/manifest.json'), 'utf8'));
  for (const [id, man] of [['daisyui:accordion', daisyManifest.items.find((x) => x.id === 'daisyui:accordion')], ['hyperui:application-modals', hyperManifest.items.find((x) => x.id === 'hyperui:application-modals')]]) {
    const entry = catalog.find((x) => x.id === id);
    assert.ok(entry && man, id);
    const joined = [...(entry.gaps || []), ...(man.gaps || [])].join('\n');
    assert.match(joined, /限定范围计入已核新增独立 UI/);
    assert.match(joined, /e5f0ee43bd1957e70bbb6e012270e54d80e3c618/);
    assert.doesNotMatch(joined, /不能称为已核独立/);
    assert.doesNotMatch(joined, /也不是已核独立/);
  }
  const otherManifest = manifest.items.filter((x) => !MANTINE_IDS.includes(x.id) && !CLASSIFIED_IDS.includes(x.id));
  assert.equal(otherManifest.length, 18);
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
  const posterGapChanged = [];
  for (let i = 0; i < frozenManifest.items.length; i++) {
    const live = liveManifest.items[i];
    const frozen = frozenManifest.items[i];
    if (MANTINE_IDS.includes(frozen.id)) {
      const { gaps: liveGaps, ...liveRest } = live;
      const { gaps: frozenGaps, ...frozenRest } = frozen;
      assert.deepEqual(liveRest, frozenRest, frozen.id);
      assert.notDeepEqual(liveGaps, frozenGaps, frozen.id);
      changed.push(frozen.id);
    } else if (POSTER_MANTINE_MANIFEST_IDS.includes(frozen.id)) {
      const { gaps: liveGaps, ...liveRest } = live;
      const { gaps: frozenGaps, ...frozenRest } = frozen;
      assert.deepEqual(liveRest, frozenRest, frozen.id);
      assert.notDeepEqual(liveGaps, frozenGaps, frozen.id);
      assert.doesNotMatch(liveGaps.join('\n'), /也没有真实运行页封面/);
      assert.match(frozenGaps.join('\n'), /也没有真实运行页封面/);
      posterGapChanged.push(frozen.id);
    } else {
      assert.deepEqual(live, frozen, frozen.id);
    }
  }
  assert.deepEqual(changed.sort(), [...MANTINE_IDS].sort());
  assert.deepEqual(posterGapChanged.sort(), [...POSTER_MANTINE_MANIFEST_IDS].sort());
});

test('page export projects the named limited-countable records and leaves covers and visual QA at zero', async () => {
  const { exportPages } = await import('../../scripts/export-pages.mjs');
  const out = await mkdtemp(join(tmpdir(), 'ui-vault-export-acceptances-'));
  try {
    const version = await exportPages(out);
    assert.equal(version.collectionAccounting.verifiedNewIndependentUIs, 40);
    assert.deepEqual(version.collectionAccounting.verifiedNewIndependentRecords.map((r) => r.id), EXPECTED_IDS);
    assert.equal(version.collectionAccounting.covers, 0);
    assert.equal(version.collectionAccounting.browserVisualQA, 0);
    assert.equal(version.materials, 276);
    assert.equal(version.posters, 276);
    assert.notEqual(version.candidates, 276);
    const exportedLedger = JSON.parse(await readFile(join(out, 'COLLECTION-LEDGER.json'), 'utf8'));
    assert.deepEqual(exportedLedger.accounts, JSON.parse(readFileSync(join(ROOT, 'COLLECTION-LEDGER.json'), 'utf8')).accounts);
    const exportedReadme = await readFile(join(out, 'README.md'), 'utf8');
    assert.match(exportedReadme, /已核新增独立 UI 40/);
    assert.doesNotMatch(exportedReadme, /已核新增独立 UI 3/);
    assert.doesNotMatch(exportedReadme, /已核新增独立 UI 0/);
    const exportedCatalog = JSON.parse(await readFile(join(out, 'candidate-catalog.json'), 'utf8'));
    const exportedManifest = JSON.parse(await readFile(join(out, 'batches/mantine-20261111-j/manifest.json'), 'utf8'));
    const exportedDaisy = JSON.parse(await readFile(join(out, 'batches/daisyui-20261111/manifest.json'), 'utf8'));
    const exportedHyper = JSON.parse(await readFile(join(out, 'batches/hyperui-20261111/manifest.json'), 'utf8'));
    for (const id of MANTINE_IDS) {
      const gaps = exportedCatalog.find((x) => x.id === id).gaps;
      const manGaps = exportedManifest.items.find((x) => x.id === id).gaps;
      assert.match(gaps[0], /限定范围计入已核新增独立 UI/);
      assert.doesNotMatch(gaps[0], /不能称为已核独立/);
      assert.match(manGaps[0], /限定范围计入已核新增独立 UI/);
      assert.doesNotMatch(manGaps.join('\n'), /不能称为已核独立/);
    }
    for (const [id, man] of [['daisyui:accordion', exportedDaisy.items.find((x) => x.id === 'daisyui:accordion')], ['hyperui:application-modals', exportedHyper.items.find((x) => x.id === 'hyperui:application-modals')]]) {
      const gaps = exportedCatalog.find((x) => x.id === id).gaps.join('\n');
      assert.match(gaps, /限定范围计入已核新增独立 UI/);
      assert.doesNotMatch(gaps, /不能称为已核独立/);
      assert.doesNotMatch((man.gaps || []).join('\n'), /不能称为已核独立/);
      assert.match((man.gaps || []).join('\n'), /限定范围计入已核新增独立 UI/);
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


const ADDITIONAL_LIMITED_COUNTABLE_SCOPES = {
  'daisyui:accordion': {
    sourceCommit: E5,
    scope: '完整原生 radio 三问问答组件；保持一项选中。',
    exclusions: '第三项未在原验收中点选；移动或完整无障碍；当前提交的整矩阵或线上复验。',
    preview: 'batches/daisyui-20261111/accordion.html',
    composedSha256: 'ddb3b6a44d437298831d3ee7b29e6e88d566fa0ad8180d410f1a4a36f1d9683b',
    composedBytes: 135952,
    htmlSha256: '4c9d081d91ad4cf7ad5d2e96e266e6f3949daaa012760493990d7a3d1443f2ec',
    cssSha256: 'd05b5c0fe8e8a71d3f91c3b60a733cf45d964156b44f2416b9d32d8d79b79927',
    jsSha256: '3cb42e2b9cba44f749ddaf7e1a2323480c4bf6f8a7f77e893a5bfd3b971fb4a3',
    runtime: {
      allowLocalMedia: false,
      key: 'batches/daisyui-20261111',
      css: 'batches/daisyui-20261111/runtime.css',
      js: 'batches/daisyui-20261111/runtime.js',
      cssHref: 'runtime.css',
      scriptSrc: 'runtime.js',
      assets: [],
    },
  },
  'hyperui:application-modals': {
    sourceCommit: E5,
    scope: '完整居中原生 dialog；灰遮罩与有界关闭（Escape 与点遮罩）。',
    exclusions: '完整业务矩阵或键盘无障碍全路径；Chart.js 等第三方权利不因本条计入而关闭；当前提交的整矩阵或线上复验。',
    preview: 'batches/hyperui-20261111/application-modals.html',
    composedSha256: '725cd11c2b5e963c7169237d270b3d1373fbcca015299524dd7bbf0120989d61',
    composedBytes: 266444,
    htmlSha256: 'a4f76084615fe60bdbf9a57c2f34a869810f893795da44a99f39a96d17ea8dac',
    cssSha256: '97e0a9ac533a2fe8853abf5d41e943354142485d0590606712966750ad484a0a',
    jsSha256: '0dbfa8dd73b14b5844e8a1ccff2a3c90491d1415001e939d999e8c12a0007fb0',
    runtime: {
      allowLocalMedia: false,
      key: 'batches/hyperui-20261111',
      css: 'batches/hyperui-20261111/runtime.css',
      js: 'batches/hyperui-20261111/runtime.js',
      cssHref: 'runtime.css',
      scriptSrc: 'runtime.js',
    },
  },
};

const HOST_UNCHANGED_FROM_QUALIFYING_SOURCE_TO_BASELINE = [
  'apps/atlas-sample/preview-runtime.mjs',
  'apps/atlas-sample/preview-adapters.mjs',
  'apps/atlas-sample/preview-media.mjs',
  'apps/atlas-sample/candidate-adapter.mjs',
  'apps/atlas-sample/display-names.mjs',
  'apps/atlas-sample/curation-policy.mjs',
  'apps/atlas-sample/curation-rules.mjs',
  'apps/atlas-sample/app.js',
  'apps/atlas-sample/index.html',
];

test('ledger retains the earlier frozen records and appends unique scoped qualifications without duplication', () => {
  const ledger = JSON.parse(readFileSync(join(ROOT, 'COLLECTION-LEDGER.json'), 'utf8'));
  const frozen = JSON.parse(gitBlob(BASELINE_COMMIT, 'apps/atlas-sample/COLLECTION-LEDGER.json').toString('utf8'));
  assert.equal(frozen.accounts.verifiedNewIndependentUIs, 3);
  assert.equal(frozen.verifiedNewIndependentRecords.length, 3);
  assert.deepEqual(ledger.verifiedNewIndependentRecords.slice(0, 3), frozen.verifiedNewIndependentRecords);
  for (const record of frozen.verifiedNewIndependentRecords) {
    assert.equal(record.sourceCommit, SOURCE_COMMIT);
  }
  const ids = ledger.verifiedNewIndependentRecords.map((r) => r.id);
  assert.deepEqual(ids, EXPECTED_IDS);
  assert.equal(ids.length, 40);
  assert.equal(new Set(ids).size, 40);
  assert.equal(ledger.accounts.verifiedNewIndependentUIs, 40);
  assert.equal(ledger.accounts.covers, 0);
  assert.equal(ledger.accounts.browserVisualQA, 0);
  for (const id of ADDITIONAL_LIMITED_COUNTABLE_IDS) {
    const rec = ledger.verifiedNewIndependentRecords.find((r) => r.id === id);
    assert.equal(rec.sourceCommit, ADDITIONAL_LIMITED_COUNTABLE_SCOPES[id].sourceCommit);
    assert.equal(rec.scope, ADDITIONAL_LIMITED_COUNTABLE_SCOPES[id].scope);
    assert.equal(rec.exclusions, ADDITIONAL_LIMITED_COUNTABLE_SCOPES[id].exclusions);
    const copies = ledger.verifiedNewIndependentRecords.filter((r) => r.id === id);
    assert.equal(copies.length, 1, id);
  }
});

test('page-head status and ledger markdown project the same named limited records', () => {
  const acc = collectionAccountingFrom(
    JSON.parse(readFileSync(join(ROOT, 'candidate-catalog.json'), 'utf8')),
    JSON.parse(readFileSync(join(ROOT, 'COLLECTION-LEDGER.json'), 'utf8')),
  );
  const status = formatCollectionAccountingStatus(acc);
  assert.match(status, /已核新增独立 UI 40，均为限定可计/);
  assert.match(status, /封面 0/);
  assert.doesNotMatch(status, /已核新增独立 UI 3/);
  const ledgerMd = readFileSync(join(ROOT, 'COLLECTION-LEDGER.md'), 'utf8');
  assert.match(ledgerMd, /已核新增独立 UI = 40/);
  assert.doesNotMatch(ledgerMd, /已核新增独立 UI = 3/);
  const page = readFileSync(join(ROOT, 'candidates.html'), 'utf8');
  assert.match(page, /id="collection-accounting"/);
  const script = readFileSync(join(ROOT, 'candidates.js'), 'utf8');
  assert.match(script, /formatCollectionAccountingStatus\(acc\)/);
  assert.doesNotMatch(script, /已核新增\/封面\/实测为 0/);
});

test('accepted DaisyUI and HyperUI previews compose through the live host adapter and media loader to the frozen output hash', async () => {
  for (const rel of HOST_UNCHANGED_FROM_QUALIFYING_SOURCE_TO_BASELINE) {
    const live = readFileSync(join(REPO, rel));
    const baseline = gitBlob(BASELINE_COMMIT, rel);
    const source = gitBlob(E5, rel);
    assert.deepEqual(live, baseline, rel);
    assert.deepEqual(live, source, rel);
  }
  const liveCandidatesJs = readFileSync(join(ROOT, 'candidates.js'), 'utf8');
  const baselineCandidatesJs = gitBlob(BASELINE_COMMIT, 'apps/atlas-sample/candidates.js').toString('utf8');
  const qualifyingSourceCandidatesJs = gitBlob(E5, 'apps/atlas-sample/candidates.js').toString('utf8');
  assert.equal(liveCandidatesJs, baselineCandidatesJs);
  assert.notEqual(baselineCandidatesJs, qualifyingSourceCandidatesJs);
  assert.match(baselineCandidatesJs, /formatCollectionAccountingStatus/);
  assert.match(qualifyingSourceCandidatesJs, /已核新增\/封面\/实测为 0/);
  // Accounting 3→5 is a ledger projection. It is not evidence that host version text is unchanged.
  // version.json is written only at export from the ledger. candidates.js only formats that projection.

  const catalog = JSON.parse(readFileSync(join(ROOT, 'candidate-catalog.json'), 'utf8'));
  const items = JSON.parse(readFileSync(join(ROOT, 'items.json'), 'utf8')).map(localizeItem);
  const collected = catalog.filter((x) => x.preview).map(adaptCandidate).map(localizeItem);
  for (const id of ADDITIONAL_LIMITED_COUNTABLE_IDS) {
    const expect = ADDITIONAL_LIMITED_COUNTABLE_SCOPES[id];
    const detail = applyCuration([...items, ...collected], curationRules).filter((x) => x.id === id);
    assert.equal(detail.length, 1, id);
    const item = detail[0];
    const runtime = runtimeFor(item);
    assert.deepEqual(runtime, expect.runtime, id);
    assert.equal(item.preview, expect.preview, id);
    const html = readFileSync(join(ROOT, item.preview), 'utf8');
    const css = readFileSync(join(ROOT, runtime.css), 'utf8');
    const js = readFileSync(join(ROOT, runtime.js), 'utf8');
    assert.equal(sha256(html), expect.htmlSha256, id);
    assert.equal(sha256(css), expect.cssSha256, id);
    assert.equal(sha256(js), expect.jsSha256, id);
    for (const rel of [item.preview, runtime.css, runtime.js]) {
      assert.deepEqual(readFileSync(join(ROOT, rel)), gitBlob(E5, `apps/atlas-sample/${rel}`), rel);
      assert.deepEqual(readFileSync(join(ROOT, rel)), gitBlob(BASELINE_COMMIT, `apps/atlas-sample/${rel}`), rel);
    }
    let mapping;
    if (runtime.assets) {
      const assets = await loadMediaAssets(runtime.assets);
      mapping = assets.mapping;
      assets.dispose();
    }
    const composed = composePreview(html, css, js, runtime, mapping);
    assert.equal(sha256(composed), expect.composedSha256, id);
    assert.equal(Buffer.byteLength(composed), expect.composedBytes, id);
  }
});

// The source-input index covers 55; the sealed verdict table selects only 35.
test('classified evidence rejects a source index or verdict table substituted for the qualifying pair', () => {
  const records = JSON.parse(readFileSync(join(ROOT, 'COLLECTION-LEDGER.json'), 'utf8')).verifiedNewIndependentRecords;
  const earlier = JSON.parse(gitBlob(CLASSIFIED_SOURCE_COMMIT, 'apps/atlas-sample/COLLECTION-LEDGER.json')).verifiedNewIndependentRecords;
  assert.deepEqual(records.slice(0, 5), earlier);
  for (const {id, scope} of CLASSIFIED_SCOPES) {
    const record = records.find(x => x.id === id);
    assert.equal(record.scope, '限定范围：' + scope, id);
    for (const [field, wrong] of [
      ['reviewSha256', CLASSIFIED_INPUT_MANIFEST_SHA256],
      ['frozenPathsSha256', CLASSIFIED_QUALIFICATION_TABLE_SHA256],
      ['qualificationTableSha256', CLASSIFIED_INPUT_MANIFEST_SHA256],
    ]) {
      const changed = structuredClone(records);
      changed.find(x => x.id === id).evidence[field] = wrong;
      assert.throws(() => assertLimitedCountableQualifyingEvidence(changed), {name:'AssertionError'}, id+' '+field);
    }
  }
});
