import { createHash } from 'node:crypto';
import { isAbsolute, relative, resolve } from 'node:path';
import { validateCatalog, type SourceComponent } from '../../core/dist/index.js';
import { SafeDirectory, isMissing } from './safe-directory.js';

export interface VerifyOptions {
  catalog: unknown;
  componentId: string;
  /** Repository root; catalog snapshotPath and license paths are relative to it. */
  archiveRoot: string;
}
export interface RestoreOptions extends VerifyOptions { destination: string }
export interface ReadSnapshotOptions extends VerifyOptions { filePath: string }
export interface VerifyResult { componentId: string; files: number; bytes: number }
export interface RestoreResult {
  componentId: string;
  destination: string;
  created: string[];
  unchanged: string[];
  bytes: number;
}

const fileLimit = 16 * 1024 * 1024;
const totalLimit = 128 * 1024 * 1024;
const hash = (bytes: Buffer): string => createHash('sha256').update(bytes).digest('hex');

function overlaps(left: string, right: string): boolean {
  const within = (base: string, path: string): boolean => {
    const rel = relative(base, path);
    return !isAbsolute(rel) && rel !== '..' && !rel.startsWith('../');
  };
  return within(left, right) || within(right, left);
}

function checkLimits(component: SourceComponent): void {
  let total = 0;
  for (const file of component.files) {
    if (file.size > fileLimit) throw new Error(`File exceeds restoration byte limit: ${file.path}`);
    total += file.size;
    if (total > totalLimit) throw new Error('Snapshot exceeds restoration byte limit');
  }
}

async function readFile(directory: SafeDirectory, path: string, size: number): Promise<Buffer> {
  const parent = await directory.parent(path);
  try { return await parent.directory.read(parent.name, size); }
  finally { await parent.directory.close(); }
}

async function existingFile(directory: SafeDirectory, path: string, bytes: Buffer): Promise<boolean> {
  try {
    const existing = await readFile(directory, path, bytes.length);
    if (!existing.equals(bytes)) throw new Error(`Destination conflict: ${path}`);
    return true;
  } catch (error) {
    if (isMissing(error)) return false;
    throw error;
  }
}

async function verifyFileSet(directory: SafeDirectory, paths: string[]): Promise<void> {
  const expected = new Map<string, string[]>();
  for (const path of paths) {
    const [name, ...rest] = path.split('/');
    const group = expected.get(name!) ?? [];
    group.push(rest.join('/'));
    expected.set(name!, group);
  }
  const entries = await directory.entries();
  if (entries.length !== expected.size || entries.some(entry => !expected.has(entry.name))) {
    throw new Error('Snapshot file set does not match the catalog');
  }
  for (const entry of entries) {
    const children = expected.get(entry.name)!;
    if (children[0] === '') {
      if (!entry.isFile()) throw new Error(`Snapshot entry is not a regular file: ${entry.name}`);
    } else {
      if (!entry.isDirectory()) throw new Error(`Snapshot entry is not a regular directory: ${entry.name}`);
      const child = await directory.child(entry.name);
      try { await verifyFileSet(child, children); }
      finally { await child.close(); }
    }
  }
}

async function snapshotBytes(root: SafeDirectory, component: SourceComponent): Promise<Map<string, Buffer>> {
  // Evidence must be part of the hashed snapshot, not an unchecked external file.
  const prefix = `${component.snapshotPath!}/`;
  for (const evidence of [component.license.evidencePath!, ...component.license.noticePaths]) {
    if (!evidence.startsWith(prefix)
      || !component.files.some(file => file.path === evidence.slice(prefix.length))) {
      throw new Error(`License evidence is not in the hashed snapshot: ${evidence}`);
    }
  }
  const parent = await root.parent(component.snapshotPath!);
  let snapshot: SafeDirectory | undefined;
  try {
    snapshot = await parent.directory.child(parent.name);
    await verifyFileSet(snapshot, component.files.map(file => file.path));
  } finally {
    await snapshot?.close();
    await parent.directory.close();
  }
  const bytes = new Map<string, Buffer>();
  for (const file of component.files) {
    const content = await readFile(root, `${prefix}${file.path}`, file.size);
    if (hash(content) !== file.sha256) throw new Error(`Snapshot SHA256 mismatch: ${file.path}`);
    bytes.set(file.path, content);
  }
  return bytes;
}

async function materialize(destination: string, bytes: Map<string, Buffer>, componentId: string): Promise<RestoreResult> {
  const result: RestoreResult = { componentId, destination, created: [], unchanged: [], bytes: 0 };
  let output: SafeDirectory | undefined;
  try {
    try { output = await SafeDirectory.open(destination); }
    catch (error) { if (!isMissing(error)) throw error; }
    // Check every existing payload before writing any new one. Never replace files.
    if (output) for (const [path, content] of bytes) await existingFile(output, path, content);
    output ??= await SafeDirectory.open(destination, true);
    for (const [path, content] of bytes) {
      if (await existingFile(output, path, content)) result.unchanged.push(path);
      else {
        const parent = await output.parent(path, true);
        try { await parent.directory.create(parent.name, content); }
        finally { await parent.directory.close(); }
        result.created.push(path);
      }
      result.bytes += content.length;
    }
    // A success reports observed disk contents, not just successful write calls.
    for (const [path, content] of bytes) {
      if (!await existingFile(output, path, content)) throw new Error(`Restored file disappeared: ${path}`);
    }
    return result;
  } catch (cause) {
    throw new Error(`Restoration failed; no files were overwritten; destination may be partial: ${destination}`, { cause });
  } finally { await output?.close(); }
}

async function verifiedSnapshot(options: VerifyOptions): Promise<{ component: SourceComponent; bytes: Map<string, Buffer> }> {
  const catalog = validateCatalog(options.catalog);
  const component = catalog.components.find(item => item.id === options.componentId);
  if (!component) throw new Error(`Unknown component: ${options.componentId}`);
  if (component.assetKind !== 'source') throw new Error('Reference records cannot be restored as source');
  if (component.license.status !== 'allowed') throw new Error('Only allowed snapshots can be restored');
  checkLimits(component);
  const root = await SafeDirectory.open(resolve(options.archiveRoot));
  try { return { component, bytes: await snapshotBytes(root, component) }; }
  finally { await root.close(); }
}

/** Uses the same admission, filesystem and integrity checks as materialization. */
export async function verifyComponent(options: VerifyOptions): Promise<VerifyResult> {
  const { component, bytes } = await verifiedSnapshot(options);
  return { componentId: component.id, files: bytes.size,
    bytes: [...bytes.values()].reduce((sum, value) => sum + value.length, 0) };
}

/** Returns verified bytes for text display; does not execute or write payloads. */
export async function readSnapshotFile(options: ReadSnapshotOptions): Promise<Buffer> {
  const { bytes } = await verifiedSnapshot(options);
  const file = bytes.get(options.filePath);
  if (!file) throw new Error(`File is not declared in the snapshot: ${options.filePath}`);
  return file;
}

/** Copies verified bytes only. No network, package installation, or source execution. */
export async function restoreComponent(options: RestoreOptions): Promise<RestoreResult> {
  const repository = resolve(options.archiveRoot);
  const destination = resolve(options.destination);
  if (overlaps(resolve(repository, 'archive'), destination)) {
    throw new Error('Destination must not overlap the archive');
  }
  const { component, bytes } = await verifiedSnapshot(options);
  return materialize(destination, bytes, component.id);
}
