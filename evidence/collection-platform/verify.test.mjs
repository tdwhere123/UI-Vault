import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { collectFiles, writeManifest, verifyManifest } from './verify.mjs';
async function fixture() {
 const root=await mkdtemp(join(tmpdir(),'vault-evidence-'));
 await mkdir(join(root,'sources'));await writeFile(join(root,'sources/a.txt'),'one');
 const scope={files:[],directories:['sources'],excludedNames:['dist','node_modules','.git'],excludedPaths:['SUMS.sha256']};
 await writeManifest(root,scope,'SUMS.sha256');return {root,scope};
}
test('evidence verifies exact membership and hashes in an explicitly scoped tree',async()=>{
 const {root,scope}=await fixture();assert.equal(await verifyManifest(root,scope,'SUMS.sha256'),1);
 assert.deepEqual(await collectFiles(root,scope),['sources/a.txt']);
});
test('a manifest omission cannot pass merely because all recorded hashes match',async()=>{
 const {root,scope}=await fixture();await writeFile(join(root,'sources/b.txt'),'two');
 await assert.rejects(verifyManifest(root,scope,'SUMS.sha256'),/membership/);
});
test('orphan and duplicate manifest records are rejected before file reads',async()=>{
 const {root,scope}=await fixture();const original=await readFile(join(root,'SUMS.sha256'),'utf8');
 await writeFile(join(root,'SUMS.sha256'),original+'a'.repeat(64)+'  sources/orphan.txt\n');
 await assert.rejects(verifyManifest(root,scope,'SUMS.sha256'),/membership/);
 await writeFile(join(root,'SUMS.sha256'),original+original);
 await assert.rejects(verifyManifest(root,scope,'SUMS.sha256'),/duplicate/);
});
test('same-size modified bytes fail verification',async()=>{
 const {root,scope}=await fixture();await writeFile(join(root,'sources/a.txt'),'two');
 await assert.rejects(verifyManifest(root,scope,'SUMS.sha256'),/hash mismatch/);
});
test('symlinks are rejected and generated directory exclusions are explicit',async()=>{
 const {root,scope}=await fixture();await mkdir(join(root,'sources/dist'));await writeFile(join(root,'sources/dist/generated'),'ignored');
 assert.deepEqual(await collectFiles(root,scope),['sources/a.txt']);
 await symlink(join(root,'sources/a.txt'),join(root,'sources/alias'));
 await assert.rejects(collectFiles(root,scope),/Symlink/);
});
