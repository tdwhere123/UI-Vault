import { createHash } from 'node:crypto';
import type { Upstream, File } from './schema.js';

// Portable, canonical, case-sensitive paths; no percent-decoding is performed.
export const relativePathPattern = '^(?!.*(?:^|/)\\.{1,2}(?:/|$))[A-Za-z0-9_@+.-]+(?:/[A-Za-z0-9_@+.-]+)*$(?![\\s\\S])';
export const sourceIdPattern = '^[a-z][a-z0-9-]*$(?![\\s\\S])';
export const sha256Pattern = '^[a-f0-9]{64}$(?![\\s\\S])';
export const gitShaPattern = '^(?:[a-f0-9]{40}|[a-f0-9]{64})$(?![\\s\\S])';
export const packageNamePattern = '^(?:@[a-z0-9-][a-z0-9._-]*/)?[a-z0-9-][a-z0-9._-]*$(?![\\s\\S])';
export const versionPattern = '^(?:0|[1-9][0-9]*)\\.(?:0|[1-9][0-9]*)\\.(?:0|[1-9][0-9]*)(?:-(?:0|[1-9][0-9]*|[0-9]*[A-Za-z-][0-9A-Za-z-]*)(?:\\.(?:0|[1-9][0-9]*|[0-9]*[A-Za-z-][0-9A-Za-z-]*))*)?(?:\\+[0-9A-Za-z-]+(?:\\.[0-9A-Za-z-]+)*)?$(?![\\s\\S])';
export const integrityPattern = '^(?:sha256-[A-Za-z0-9+/]{43}=|sha512-[A-Za-z0-9+/]{86}==)$(?![\\s\\S])';

export function assertRelativePath(path: string): void {
  if (!new RegExp(relativePathPattern).test(path)) throw new Error(`Unsafe relative path: ${path}`);
  if (path.split('/').some(s => /[.]$/.test(s) || /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(s))) {
    throw new Error(`Non-portable relative path: ${path}`);
  }
}

export function componentId(sourceId: string, upstreamSlug: string): string {
  if (!new RegExp(sourceIdPattern).test(sourceId)) throw new Error('Invalid sourceId');
  assertRelativePath(sourceId);
  assertRelativePath(upstreamSlug);
  return `${sourceId}:${upstreamSlug}`;
}


function matches(value: string, pattern: string): void {
  if (!new RegExp(pattern).test(value)) throw new Error('Unpinned or invalid upstream identity');
}

export function snapshotId(upstream: Upstream): string {
  switch (upstream.kind) {
    case 'git':
      matches(upstream.commit, gitShaPattern);
      return `git:${upstream.commit}`;
    case 'npm': {
      matches(upstream.name, packageNamePattern);
      matches(upstream.version, versionPattern);
      matches(upstream.integrity, integrityPattern);
      const [algorithm, digest] = upstream.integrity.split('-');
      if (Buffer.from(digest!, 'base64').toString('base64') !== digest) throw new Error('Noncanonical integrity');
      if (!algorithm) throw new Error('Missing integrity algorithm');
      return `npm:${upstream.name}@${upstream.version}+${upstream.integrity}`;
    }
    case 'registry':
      matches(upstream.sha256, sha256Pattern);
      return `registry:sha256:${upstream.sha256}`;
  }
}

export function sha256(content: string | Uint8Array): string {
  return createHash('sha256').update(content).digest('hex');
}

// IDs never become raw path segments. Domain separation prevents namespace collisions.
export function archiveDirectory(source: string, component: string, snapshot: string): string {
  if (!new RegExp(sourceIdPattern).test(source) || !component.startsWith(`${source}:`)) throw new Error('Identity mismatch');
  assertRelativePath(source);
  return `archive/components/${source}/c-${sha256(`component\0${component}`)}/s-${sha256(`snapshot\0${snapshot}`)}`;
}

export type DigestFile = Pick<File, 'path' | 'size' | 'sha256'>;

// Raw-byte file digests; manifest digest is SHA256(UTF8(JSON.stringify(sorted tuples))).
export function manifestDigest(files: readonly DigestFile[]): string {
  const seen = new Set<string>();
  const tuples = files.map(file => {
    assertRelativePath(file.path);
    matches(file.sha256, sha256Pattern);
    if (!Number.isSafeInteger(file.size) || file.size < 0 || seen.has(file.path)) throw new Error('Invalid or duplicate manifest file');
    seen.add(file.path);
    return [file.path, file.size, file.sha256] as const;
  }).sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
  return sha256(JSON.stringify(tuples));
}
