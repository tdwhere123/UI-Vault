import type { File } from './schema.js';
import { assertRelativePath } from './identity.js';

// Each stored file maps to exactly one original file; neither namespace may also denote a directory.
export function validateFileMapping(files: readonly File[]): void {
  for (const field of ['path', 'originalPath'] as const) {
    const seen = new Set<string>();
    for (const file of files) {
      const path = file[field]; assertRelativePath(path);
      if (seen.has(path)) throw new Error(`Duplicate file mapping ${field}: ${path}`);
      seen.add(path);
    }
    for (const path of seen) {
      const segments = path.split('/');
      for (let index = 1; index < segments.length; index++) {
        if (seen.has(segments.slice(0, index).join('/'))) throw new Error(`File/directory prefix conflict in mapping ${field}: ${path}`);
      }
    }
  }
}
