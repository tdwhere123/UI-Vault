import { validateMetadata } from './validation.js';
import { assessLegalPermission } from './authorization.js';
import { rightNames } from './schema.js';

// A rebuildable projection, never a second inventory or a readiness/export authority.
export function projectCatalog(input: unknown) {
  const data = validateMetadata(input);
  const compare = (a: string, b: string) => a < b ? -1 : a > b ? 1 : 0;
  return {
    projectionVersion: 1, metadataVersion: data.schemaVersion, fixture: data.fixture,
    sources: data.sources.map(s => s.sourceId).sort(compare),
    entries: [...data.entries].sort((a, b) => compare(a.componentId, b.componentId)).map(entry => ({
      componentId: entry.componentId, sourceId: entry.sourceId, upstreamName: entry.upstreamName,
      status: entry.status,
      snapshots: data.snapshots.filter(s => s.componentId === entry.componentId).sort((a, b) => compare(a.snapshotId, b.snapshotId)).map(snapshot => ({
        snapshotId: snapshot.snapshotId, archive: snapshot.archive, offline_runtime_complete: snapshot.offline_runtime_complete,
        preview: snapshot.preview,
        rights: Object.fromEntries(rightNames.map(right => [right, assessLegalPermission(data, entry.componentId, snapshot.snapshotId, right)])),
        readiness: 'not_checked' as const,
      })),
    })),
  };
}
