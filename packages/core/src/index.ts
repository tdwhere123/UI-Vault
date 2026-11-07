// Public contract surface for future collectors, catalog, CLI and Explorer.
export * from './schema.js';
export { validateMetadata, validateSources, assembleMetadata } from './validation.js';
export { componentId, snapshotId, archiveDirectory, manifestDigest, sha256, assertRelativePath } from './identity.js';
export { verifySnapshotFiles, verifyLicenseEvidence } from './filesystem.js';
export { authorize, assessLegalPermission, type AuthorizationResult } from './authorization.js';
export { projectCatalog } from './catalog-projection.js';
export { conditionId } from './rights-policy.js';
