#!/usr/bin/env node
// File-level check of the 55 Galaxy routes and download ZIPs in a retained export tree.
// This does not perform browser visual or interaction QA.
import {readFileSync, existsSync, statSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ATLAS = join(REPO, 'apps/atlas-sample');
const BATCH = 'uiverse-galaxy-20261112';
const REVISION = 'adbd2adde0a299a3956ea288fb444ec01891ca41';
const LICENSE_SHA = '7feadcd7a611d37a4546c99f63a162bdf65656137828ebcba92e57dccfa368a4';
const sha256 = (buf) => createHash('sha256').update(buf).digest('hex');
const readZip = (fsPath, member) => execFileSync('python3', ['-c', 'import sys,zipfile; sys.stdout.buffer.write(zipfile.ZipFile(sys.argv[1]).read(sys.argv[2]))', fsPath, member], {maxBuffer: 16 * 1024 * 1024});
const listZip = (fsPath) => execFileSync('python3', ['-c', 'import sys,zipfile; print("\\n".join(zipfile.ZipFile(sys.argv[1]).namelist()))', fsPath], {encoding: 'utf8'}).split(/\n/).filter(Boolean);

const exportDir = process.argv[2] ? resolve(process.argv[2]) : '';
if (!exportDir) {
  console.error('Usage: node scripts/verify-uiverse-galaxy-55-export.mjs EXPORT_DIR');
  process.exit(2);
}

const failures = [];
const note = (ok, msg) => {
  if (!ok) failures.push(msg);
  console.log(`${ok ? 'OK' : 'FAIL'} ${msg}`);
};

const frozen = JSON.parse(readFileSync(join(ATLAS, `batches/${BATCH}/FROZEN-SOURCES.json`), 'utf8'));
note(frozen.items.length === 55, `frozen item count ${frozen.items.length}`);

const versionPath = join(exportDir, 'version.json');
note(existsSync(versionPath), `version.json exists at ${versionPath}`);
let version = null;
if (existsSync(versionPath)) {
  version = JSON.parse(readFileSync(versionPath, 'utf8'));
  note(version.worktreeDirty === false, `worktreeDirty=${version.worktreeDirty}`);
  note(version.collectionAccounting?.verifiedNewIndependentUIs === 40, `verifiedNewIndependentUIs=${version.collectionAccounting?.verifiedNewIndependentUIs}`);
  note(version.materials === 276, `materials=${version.materials}`);
  note(version.candidates === 1281, `candidates=${version.candidates}`);
  note(typeof version.codeSha === 'string' && /^[0-9a-f]{40}$/.test(version.codeSha), `codeSha=${version.codeSha}`);
}

const exportCatalogPath = join(exportDir, 'candidate-catalog.json');
note(existsSync(exportCatalogPath), 'export candidate-catalog.json exists');
const exportCatalog = existsSync(exportCatalogPath) ? JSON.parse(readFileSync(exportCatalogPath, 'utf8')) : [];
const byId = new Map(exportCatalog.map((x) => [x.id, x]));
note(exportCatalog.filter((x) => x.batch === BATCH).length === 55, 'export catalog contains 55 batch entries');

const readme = join(exportDir, `batches/${BATCH}/README.md`);
note(existsSync(readme), 'export batch README exists');
if (existsSync(readme)) {
  const text = readFileSync(readme, 'utf8');
  note(!text.includes('/workspace/ui-vault-collection-20261111-work'), 'export batch README has no historical workspace checkout path');
}

let routes = 0;
let downloads = 0;
for (const item of frozen.items) {
  const preview = join(exportDir, item.preview);
  const code = join(exportDir, item.code);
  const archive = join(exportDir, item.archive);
  const entry = byId.get(item.id);
  if (!entry) {
    failures.push(`export catalog missing ${item.id}`);
    console.log(`FAIL export catalog missing ${item.id}`);
    continue;
  }
  const previewOk = existsSync(preview) && sha256(readFileSync(preview)) === item.previewSha256;
  const codeOk = existsSync(code) && sha256(readFileSync(code)) === item.officialSha256;
  let zipOk = false;
  if (existsSync(archive) && statSync(archive).isFile()) {
    const names = listZip(archive);
    const need = ['original.html', 'preview.html', 'LICENSE.txt', 'NOTICE.txt', 'runtime.css', 'runtime.js'];
    zipOk = need.every((n) => names.includes(n))
      && sha256(readZip(archive, 'original.html')) === item.officialSha256
      && sha256(readZip(archive, 'LICENSE.txt')) === LICENSE_SHA
      && Buffer.compare(readZip(archive, 'preview.html'), readFileSync(preview)) === 0;
  }
  const mapOk = entry.preview === item.preview && entry.code === item.code && entry.archive === item.archive && entry.revision === REVISION;
  note(previewOk, `${item.id} export preview ${item.preview}`);
  note(codeOk, `${item.id} export official source ${item.code}`);
  note(zipOk, `${item.id} export zip ${item.archive}`);
  note(mapOk, `${item.id} export catalog path mapping`);
  if (previewOk) routes += 1;
  if (zipOk) downloads += 1;
}

const runtimeCss = join(exportDir, `batches/${BATCH}/runtime.css`);
const runtimeJs = join(exportDir, `batches/${BATCH}/runtime.js`);
note(existsSync(runtimeCss) && existsSync(runtimeJs), 'export batch runtime.css and runtime.js exist');

console.log(JSON.stringify({
  exportDir,
  revision: REVISION,
  routesOk: routes,
  downloadsOk: downloads,
  expected: 55,
  version,
  failures: failures.length,
  visualOrInteractionQA: 'not_run_no_browser',
}, null, 2));

if (failures.length) {
  console.error(`verify-uiverse-galaxy-55-export failed: ${failures.length} check(s)`);
  process.exit(1);
}
console.log('verify-uiverse-galaxy-55-export passed (file-level only; no visual or interaction QA)');
