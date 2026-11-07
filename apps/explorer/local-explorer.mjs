import { resolve } from 'node:path';
import { readSnapshotFile } from '../../packages/restore/dist/index.js';
import { createExplorer } from './server.mjs';

// Source display shares restore's full snapshot admission and integrity boundary.
export function createLocalExplorer({ root, port = 4173 }) {
  return createExplorer({
    catalogPath: resolve(root, 'catalog.json'), port,
    readSource: async (catalog, componentId, filePath) => {
      const bytes = await readSnapshotFile({ catalog, componentId, filePath, archiveRoot: root });
      if (bytes.includes(0)) throw new Error('Binary file cannot be displayed as text');
      return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    },
  });
}
