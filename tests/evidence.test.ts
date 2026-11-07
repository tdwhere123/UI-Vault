import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, unlink, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
// Dynamic import keeps the project-local evidence script executable without a second implementation.
const evidencePath: string = new URL('../../scripts/evidence.mjs', import.meta.url).href;
const { writeSums, verifySums } = await import(evidencePath);

test('evidence SUMS verifies exact membership and detects omissions, orphan records and tampering', async () => {
  const root = await mkdtemp(join(tmpdir(), 'ui-vault-evidence-'));
  try {
    await mkdir(join(root, 'evidence/metadata-contract'), { recursive: true });
    await writeFile(join(root, 'a.txt'), 'a');
    assert.equal(await writeSums(root), 2);
    assert.equal(await verifySums(root), 2);
    await writeFile(join(root, 'b.txt'), 'b');
    await assert.rejects(verifySums(root), /scope mismatch/);
    await writeSums(root); await unlink(join(root, 'b.txt'));
    await assert.rejects(verifySums(root), /scope mismatch/);
    await writeSums(root); await writeFile(join(root, 'a.txt'), 'changed');
    await assert.rejects(verifySums(root), /hash mismatch/);
    await writeSums(root);
    const sums = await readFile(join(root, 'evidence/metadata-contract/SUMS.sha256'), 'utf8');
    await writeFile(join(root, 'evidence/metadata-contract/SUMS.sha256'), sums + sums);
    await assert.rejects(verifySums(root), /duplicate/);
  } finally { await rm(root, { recursive: true, force: true }); }
});

test('historical SUMS verifies its immutable Git scope instead of incorrectly asserting current-checkout coverage', async () => {
  const { execFileSync } = await import('node:child_process');
  const root = await mkdtemp(join(tmpdir(), 'ui-vault-historical-evidence-'));
  const git = (...args: string[]) => execFileSync('git', ['-C', root, ...args], { encoding: 'utf8' }).trim();
  try {
    git('init', '-b', 'main');
    await writeFile(join(root, 'record.json'), '{}');
    await writeSums(root); git('add', '.');
    git('-c', 'user.name=Evidence Fixture', '-c', 'user.email=fixture@localhost', 'commit', '-m', 'save evidence fixture');
    const baseline = git('rev-parse', 'HEAD');
    await writeFile(join(root, 'record.json'), '{"changed":true}');
    await writeFile(join(root, 'new-record.json'), '{}');
    assert.equal(await (await import(evidencePath)).verifyHistoricalSums(root, baseline, 'evidence/metadata-contract/SUMS.sha256'), 2);
    await assert.rejects(verifySums(root), /scope mismatch/);
    await assert.rejects(writeSums(root, 'evidence/g0'), /Historical evidence is immutable/);
    await writeSums(root);
    const manifestPath = join(root, 'evidence/metadata-contract/SUMS.sha256');
    const contents = await readFile(manifestPath, 'utf8');
    await writeFile(manifestPath, contents.split('\n').filter(line => !line.endsWith('  record.json')).join('\n'));
    git('add', '.'); git('-c', 'user.name=Evidence Fixture', '-c', 'user.email=fixture@localhost', 'commit', '-m', 'save omitted evidence fixture');
    await assert.rejects((await import(evidencePath)).verifyHistoricalSums(root, git('rev-parse', 'HEAD'), 'evidence/metadata-contract/SUMS.sha256'), /scope mismatch/);
  } finally { await rm(root, { recursive: true, force: true }); }
});

test('current scope cannot silently exclude additional files by changing the scope declaration', async () => {
  const root = await mkdtemp(join(tmpdir(), 'ui-vault-scope-'));
  try {
    await writeFile(join(root, 'record.json'), '{}'); await writeSums(root);
    const scope = join(root, 'evidence/metadata-contract/scope.json');
    await writeFile(scope, '{"mode":"all-files-but-ignore-any-failures"}');
    await assert.rejects(verifySums(root), /altered evidence scope/);
  } finally { await rm(root, { recursive: true, force: true }); }
});
