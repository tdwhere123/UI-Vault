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
    await mkdir(join(root, 'evidence/g0'), { recursive: true });
    await writeFile(join(root, 'a.txt'), 'a');
    assert.equal(await writeSums(root), 1);
    assert.equal(await verifySums(root), 1);
    await writeFile(join(root, 'b.txt'), 'b');
    await assert.rejects(verifySums(root), /scope mismatch/);
    await writeSums(root); await unlink(join(root, 'b.txt'));
    await assert.rejects(verifySums(root), /scope mismatch/);
    await writeSums(root); await writeFile(join(root, 'a.txt'), 'changed');
    await assert.rejects(verifySums(root), /hash mismatch/);
    await writeSums(root);
    const sums = await readFile(join(root, 'evidence/g0/SUMS.sha256'), 'utf8');
    await writeFile(join(root, 'evidence/g0/SUMS.sha256'), sums + sums);
    await assert.rejects(verifySums(root), /duplicate/);
  } finally { await rm(root, { recursive: true, force: true }); }
});
