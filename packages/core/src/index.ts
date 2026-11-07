// Public contract surface for future collectors, catalog, CLI and Explorer.
export * from './schema.js';
export { validateMetadata, validateSources, authorize } from './validation.js';
export { componentId, snapshotId, archiveDirectory, manifestDigest, sha256, assertRelativePath } from './identity.js';
export { verifySnapshotFiles } from './filesystem.js';
