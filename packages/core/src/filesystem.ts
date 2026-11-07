import { lstat, readdir, readFile, realpath } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';
import { assertRelativePath, manifestDigest, sha256 } from './identity.js';
import { validateMetadata } from './validation.js';

function inside(root: string, candidate: string): void {
  const rel = relative(root, candidate);
  if (rel === '..' || rel.startsWith(`..${sep}`) || rel.startsWith(sep)) throw new Error('Filesystem root escape');
}

async function checkedRoot(root: string): Promise<string> {
  const absolute = resolve(root);
  // Reject links even in an ancestor of the supplied root.
  let current = absolute;
  while (true) {
    const stat = await lstat(current);
    if (stat.isSymbolicLink()) throw new Error('Symlink root/ancestor rejected');
    const parent = resolve(current, '..');
    if (parent === current) break;
    current = parent;
  }
  if (!(await lstat(absolute)).isDirectory()) throw new Error('Root is not directory');
  return realpath(absolute);
}

async function checkedPath(root: string, path: string): Promise<string> {
  assertRelativePath(path);
  let current = root;
  for (const part of path.split('/')) {
    current = resolve(current, part);
    inside(root, current);
    if ((await lstat(current)).isSymbolicLink()) throw new Error('Symlink rejected');
  }
  inside(root, await realpath(current));
  return current;
}

async function walk(root: string, prefix = ''): Promise<string[]> {
  const result: string[] = [];
  for (const item of await readdir(prefix ? await checkedPath(root, prefix) : root, { withFileTypes: true })) {
    const path = prefix ? `${prefix}/${item.name}` : item.name;
    const full = await checkedPath(root, path);
    if (item.isDirectory()) result.push(...await walk(root, path));
    else if (item.isFile()) result.push(path);
    else throw new Error(`Unsupported filesystem entry: ${full}`);
  }
  return result;
}

// Read-only verifier, not a writer/materializer. Caller must ensure a quiescent, trusted root.
export async function verifySnapshotFiles(input: unknown, component: string, snapshot: string, root: string): Promise<void> {
  const data = validateMetadata(input);
  const snap = data.snapshots.find(s => s.componentId === component && s.snapshotId === snapshot);
  if (!snap) throw new Error('Snapshot absent');
  const base = await checkedRoot(root);
  const actual = (await walk(base)).sort();
  const expected = snap.files.map(f => f.path).sort();
  if (JSON.stringify(actual) !== JSON.stringify(expected)) throw new Error('Manifest/files mismatch: missing or orphan file');
  for (const file of snap.files) {
    const bytes = await readFile(await checkedPath(base, file.path));
    if (bytes.length !== file.size || sha256(bytes) !== file.sha256) throw new Error(`File hash/size mismatch: ${file.path}`);
  }
  if (manifestDigest(snap.files) !== snap.archive.sha256) throw new Error('Manifest digest mismatch');
}

export async function readVaultFile(root: string, path: string): Promise<Buffer> {
  const base = await checkedRoot(root);
  const full = await checkedPath(base, path);
  if (!(await lstat(full)).isFile()) throw new Error('Evidence is not a regular file');
  return readFile(full);
}

export async function verifyEvidenceRecords(data: import('./schema.js').Metadata, root: string, ids: readonly string[]): Promise<void> {
  for (const id of ids) {
    const evidence = data.licenseEvidence.find(e => e.evidenceId === id);
    if (!evidence) throw new Error('Missing evidence record');
    if (sha256(await readVaultFile(root, evidence.textPath)) !== evidence.sha256) throw new Error(`License evidence hash mismatch: ${id}`);
  }
}

export async function verifyLicenseEvidence(input: unknown, root: string): Promise<void> {
  const data = validateMetadata(input);
  await verifyEvidenceRecords(data, root, data.licenseEvidence.map(e => e.evidenceId));
}
