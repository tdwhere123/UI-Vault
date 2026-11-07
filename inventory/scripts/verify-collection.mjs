// Parse imports as data: no upstream module is imported or evaluated.
import ts from 'typescript';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve, dirname, extname } from 'node:path';
import { validateCatalog } from '../../dist/packages/core/src/catalog.js';

const root = resolve(import.meta.dirname, '../..');
const catalog = JSON.parse(readFileSync(resolve(root, process.argv[2] ?? 'inventory/collection.json'), 'utf8'));
validateCatalog(catalog);
const sourceComponents = catalog.components.filter(c => c.assetKind === 'source');
const references = catalog.components.filter(c => c.assetKind === 'reference');
const sourceIds = new Set(sourceComponents.map(c => c.sourceId));
assert.equal(sourceIds.size, 2, 'Expected two source-code origins');
assert.equal(sourceComponents.length, 20, 'Expected 20 source components');
for (const sourceId of sourceIds) {
  assert.equal(sourceComponents.filter(c => c.sourceId === sourceId).length, 10);
}
assert.equal(references.length, 6, 'Expected six aesthetic/interaction references');
for (const reference of references) {
  // Field shape and forbidden source material are owned by validateCatalog above.
  assert.deepEqual(reference.localAssetPaths, [], 'No licensed local reference assets acquired');
  assert.equal(reference.isInference, true, 'Internal implementation remains inference');
  console.log(`PASS reference ${reference.id}: metadata only; no snapshot/files/dependencies/local assets`);
}
let fileCount = 0;
let edgeCount = 0;
let mutationRejected = 0;
const packageName = spec => spec.startsWith('@') ? spec.split('/').slice(0, 2).join('/') : spec.split('/')[0];

function verifyFiles(component, bytes = file => readFileSync(file)) {
  const base = resolve(root, component.snapshotPath);
  for (const record of component.files) {
    const data = bytes(resolve(base, record.path));
    assert.equal(data.length, record.size, record.path);
    assert.equal(createHash('sha256').update(data).digest('hex'), record.sha256, record.path);
  }
}

function checkModule(file, component, manifest) {
  const source = ts.createSourceFile(file, readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true,
    extname(file) === '.tsx' ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  assert.equal(source.parseDiagnostics.length, 0, `Syntax: ${file}`);
  function check(spec) {
    edgeCount++;
    if (!spec.startsWith('.')) {
      assert.ok(component.dependencies[packageName(spec)], `Undeclared package ${spec}`);
      return;
    }
    const target = resolve(dirname(file), spec);
    const choices = [target, target + '.ts', target + '.tsx', resolve(target, 'index.ts'), resolve(target, 'index.tsx')];
    assert.ok(choices.some(p => manifest.has(p)), `Missing internal dependency: ${file} -> ${spec}`);
  }
  function visit(node) {
    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier) {
      assert.ok(ts.isStringLiteral(node.moduleSpecifier));
      check(node.moduleSpecifier.text);
    }
    if (ts.isCallExpression(node) && (node.expression.kind === ts.SyntaxKind.ImportKeyword || node.expression.getText(source) === 'require')) {
      assert.ok(ts.isStringLiteral(node.arguments[0]), `Dynamic unresolved import in ${file}`);
      check(node.arguments[0].text);
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
}

for (const component of sourceComponents) {
  assert.equal(component.license.status, 'allowed');
  const base = resolve(root, component.snapshotPath);
  const manifest = new Set(component.files.map(file => resolve(base, file.path)));
  assert.ok(manifest.has(resolve(root, component.license.evidencePath)));
  for (const notice of component.license.noticePaths) assert.ok(manifest.has(resolve(root, notice)));
  verifyFiles(component);
  const first = resolve(base, component.files[0].path);
  assert.throws(() => verifyFiles(component, file => file === first ? Buffer.from('changed') : readFileSync(file)));
  mutationRejected++;
  for (const file of manifest) {
    fileCount++;
    if (/\.(ts|tsx)$/.test(file)) checkModule(file, component, manifest);
    if (/\.(tsx?|css)$/.test(file) && component.sourceId === 'bencho') {
      assert.ok(!readFileSync(file, 'utf8').includes('/lab/'), `Unarchived website asset: ${file}`);
    }
  }
  const css = component.sourceId === 'agent-elements' ? 'lib/agent-ui/agent-ui.css' : 'tokens.css';
  assert.ok(manifest.has(resolve(base, css)));
  if (component.sourceId === 'bencho') {
    assert.ok(component.files.some(f => /^blocks\/[^/]+\/[^/]+\.css$/.test(f.path)));
    assert.match(readFileSync(resolve(base, 'LICENSE'), 'utf8'), /Not covered by this licence/);
    assert.ok(existsSync(resolve(base, 'THIRD_PARTY.md')));
  }
  const actualFiles = [];
  function walk(dir) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = resolve(dir, e.name);
      assert.ok(!e.isSymbolicLink());
      if (e.isDirectory()) walk(p); else actualFiles.push(p);
    }
  }
  walk(base);
  assert.deepEqual(actualFiles.sort(), [...manifest].sort(), 'Manifest omits physical file');
  console.log(`PASS ${component.id}: ${component.files.length} bytes-verified files; styles + notices + import closure`);
}
console.log(`PASS total: 2 sources, 20 real components, 6 references, ${fileCount} files, ${edgeCount} import edges, ${mutationRejected} tamper negative controls`);
