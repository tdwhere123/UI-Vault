import { constants } from 'node:fs';
import { mkdir, open, readdir, type FileHandle } from 'node:fs/promises';
import { resolve } from 'node:path';
import { assertCatalogPath } from '../../core/dist/index.js';

export function pathParts(path: string): string[] {
  assertCatalogPath(path);
  return path.split('/');
}

export function isMissing(error: unknown): boolean {
  return (error as NodeJS.ErrnoException)?.code === 'ENOENT';
}

/** Directory descriptors keep every lookup anchored while rejecting user symlinks. */
export class SafeDirectory {
  private constructor(private readonly handle: FileHandle) {}

  static async open(path: string, create = false): Promise<SafeDirectory> {
    if (process.platform !== 'linux') throw new Error('Safe restoration requires Linux /proc/self/fd');
    let directory = new SafeDirectory(await open('/', constants.O_RDONLY | constants.O_DIRECTORY));
    try {
      for (const part of resolve(path).split('/').filter(Boolean)) {
        const next = await directory.child(part, create);
        await directory.close();
        directory = next;
      }
      // Check the descriptor surface before reading or creating any payload.
      const probe = await open(directory.entry('.'), constants.O_RDONLY | constants.O_DIRECTORY);
      await probe.close();
      return directory;
    } catch (error) {
      await directory.close();
      throw error;
    }
  }

  private entry(name: string): string {
    return `/proc/self/fd/${this.handle.fd}/${name}`;
  }

  async child(name: string, create = false): Promise<SafeDirectory> {
    if (pathParts(name).length !== 1) throw new Error('Expected one directory segment');
    if (create) {
      try { await mkdir(this.entry(name), { mode: 0o700 }); }
      catch (error) { if ((error as NodeJS.ErrnoException).code !== 'EEXIST') throw error; }
    }
    return new SafeDirectory(await open(this.entry(name),
      constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW));
  }

  async parent(path: string, create = false): Promise<{ directory: SafeDirectory; name: string }> {
    const parts = pathParts(path);
    let directory = new SafeDirectory(await open(this.entry('.'), constants.O_RDONLY | constants.O_DIRECTORY));
    try {
      for (const part of parts.slice(0, -1)) {
        const next = await directory.child(part, create);
        await directory.close();
        directory = next;
      }
      return { directory, name: parts.at(-1)! };
    } catch (error) {
      await directory.close();
      throw error;
    }
  }

  async read(name: string, expectedSize: number): Promise<Buffer> {
    if (pathParts(name).length !== 1) throw new Error('Expected one file segment');
    const file = await open(this.entry(name), constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
    try {
      const stat = await file.stat();
      if (!stat.isFile() || stat.nlink !== 1 || stat.size !== expectedSize) {
        throw new Error(`Not a single regular file of expected size: ${name}`);
      }
      const buffer = Buffer.alloc(expectedSize + 1);
      let count = 0;
      while (count < buffer.length) {
        const { bytesRead } = await file.read(buffer, count, buffer.length - count, count);
        if (!bytesRead) break;
        count += bytesRead;
      }
      if (count !== expectedSize) throw new Error(`File size changed while reading: ${name}`);
      return buffer.subarray(0, count);
    } finally { await file.close(); }
  }

  async create(name: string, bytes: Buffer): Promise<void> {
    if (pathParts(name).length !== 1) throw new Error('Expected one file segment');
    const file = await open(this.entry(name),
      constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | constants.O_NOFOLLOW, 0o600);
    try {
      await file.writeFile(bytes);
      await file.sync();
    } finally { await file.close(); }
  }

  async entries() { return readdir(this.entry('.'), { withFileTypes: true }); }

  async close(): Promise<void> { await this.handle.close(); }
}
