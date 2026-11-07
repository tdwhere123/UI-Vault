import { Type, type Static, type TSchema } from '@sinclair/typebox';
import { relativePathPattern, sourceIdPattern, sha256Pattern, gitShaPattern,
  packageNamePattern, versionPattern, integrityPattern } from './identity.js';

const object = <T extends Record<string, TSchema>>(properties: T) => Type.Object(properties, { additionalProperties: false });
const text = Type.String({ minLength: 1 });
const sourceId = Type.String({ pattern: sourceIdPattern });
const path = Type.String({ pattern: relativePathPattern });
const hash = Type.String({ pattern: sha256Pattern });
const url = Type.String({ pattern: '^https://[^\\s/#?]+(?:/[^\\s]*)?$' });
const instant = Type.String({ pattern: '^\\d{4}-\\d\\d-\\d\\dT\\d\\d:\\d\\d:\\d\\d(?:\\.\\d{3})?Z$' });
const strings = () => Type.Array(text, { uniqueItems: true });
const component = Type.String({ pattern: '^[a-z][a-z0-9-]*:[A-Za-z0-9_@+./-]+$' });
const snapshot = text;
const enumeration = <const T extends readonly string[]>(values: T) => Type.Unsafe<T[number]>(Type.Union(values.map(v => Type.Literal(v))));

export const rightNames = ['can_archive_source', 'can_modify_and_use', 'can_use_commercially',
  'can_redistribute_component_collection'] as const;
export type RightName = typeof rightNames[number];
export const ScopeSchema = Type.Union([
  object({ kind: Type.Literal('source'), sourceId }),
  object({ kind: Type.Literal('entry'), componentId: component }),
  object({ kind: Type.Literal('snapshot'), componentId: component, snapshotId: snapshot }),
  object({ kind: Type.Literal('file'), componentId: component, snapshotId: snapshot, path }),
]);
export type Scope = Static<typeof ScopeSchema>;

export const RightDecisionSchema = object({ state: enumeration(['allowed', 'denied', 'unknown']), evidenceRefs: strings(), scope: ScopeSchema, conditionRefs: strings() });
export const RightsSchema = object({
  can_archive_source: RightDecisionSchema,
  can_modify_and_use: RightDecisionSchema,
  can_use_commercially: RightDecisionSchema,
  can_redistribute_component_collection: RightDecisionSchema,
});
export type Rights = Static<typeof RightsSchema>;

export const LicenseEvidenceSchema = object({
  evidenceId: text, sourceUrl: url, retrievedAt: instant,
  upstreamVersion: text, scope: ScopeSchema, textPath: path, sha256: hash,
  review: object({ method: enumeration(['manual', 'programmatic']), reviewer: text, notes: text }),
  applicableRights: Type.Array(enumeration(rightNames), { minItems: 1, uniqueItems: true }),
  spdx: Type.Union([text, Type.Null()]), obligations: strings(), notices: Type.Array(path, { uniqueItems: true }),
});
export const SourceSchema = object({
  sourceId, website: url,
  entrypoints: Type.Array(object({ url, adapter: enumeration(['github-tree', 'shadcn-registry', 'npm-package', 'public-site-index']) }), { minItems: 1 }),
  priority: enumeration(['P0', 'P1']), riskGroup: text,
  lastCheckedAt: Type.Union([instant, Type.Null()]), checkStatus: enumeration(['not_live_verified', 'checked', 'blocked']),
  rights: RightsSchema,
});
export const categories = ['foundation', 'input-form', 'navigation-layout', 'chat-ai', 'agent-workflow',
  'data-visualization', 'editor-files', 'feedback-motion', 'media-visual', 'page-pattern'] as const;
export const RestrictionSchema = object({
  scope: ScopeSchema, rights: Type.Array(enumeration(rightNames), { minItems: 1, uniqueItems: true }),
  state: enumeration(['denied', 'unknown']), reason: text, evidenceRefs: strings(),
});
export const PreviewSchema = object({
  status: enumeration(['not_built', 'preview_ready', 'preview_unavailable', 'needs_adapter', 'unsafe_to_run']),
  localPath: Type.Union([path, Type.Null()]), upstreamUrl: Type.Union([url, Type.Null()]),
  lastCheckedAt: Type.Union([instant, Type.Null()]), reason: Type.Union([text, Type.Null()]),
});
export const EntrySchema = object({
  schemaVersion: Type.Literal(2), componentId: component, sourceId,
  upstreamName: text, upstreamSlug: path,
  kind: enumeration(['component', 'block', 'template', 'effect', 'icon', 'sound', 'pattern', 'library']),
  primaryCategory: enumeration(categories), secondaryCategories: Type.Array(enumeration(categories), { uniqueItems: true }),
  tags: strings(), descriptionZh: text, frameworks: strings(), exodusUseCases: strings(), entryUrl: url,
  status: enumeration(['discovered', 'license_reviewed', 'pro_only', 'restricted', 'license_unknown', 'source_missing', 'fetch_failed', 'unsafe_to_run']),
  rights: RightsSchema, restrictions: Type.Array(RestrictionSchema),
});
export const UpstreamSchema = Type.Union([
  object({ kind: Type.Literal('git'), commit: Type.String({ pattern: gitShaPattern }) }),
  object({ kind: Type.Literal('npm'), name: Type.String({ pattern: packageNamePattern }),
    version: Type.String({ pattern: versionPattern }), integrity: Type.String({ pattern: integrityPattern }) }),
  object({ kind: Type.Literal('registry'), sha256: hash }),
]);
export const FileSchema = object({
  path, originalPath: path, type: enumeration(['source', 'style', 'asset', 'license', 'notice', 'metadata', 'demo']),
  size: Type.Integer({ minimum: 0, maximum: Number.MAX_SAFE_INTEGER }), sha256: hash,
  internalReferences: Type.Array(path, { uniqueItems: true }), rights: RightsSchema,
});
export const DependencySchema = Type.Union([
  object({ kind: Type.Literal('internal'), path }),
  object({ kind: Type.Literal('npm'), name: Type.String({ pattern: packageNamePattern }),
    version: Type.String({ pattern: versionPattern }), integrity: Type.String({ pattern: integrityPattern }), peerConstraint: Type.Union([text, Type.Null()]) }),
  object({ kind: Type.Literal('asset'), path }),
  object({ kind: Type.Literal('remote'), url, reason: text }),
  object({ kind: Type.Literal('unresolved'), specifier: text, reason: text }),
]);
export const SnapshotSchema = object({
  componentId: component, snapshotId: snapshot, upstream: UpstreamSchema,
  fetchedAt: instant, provenanceUrl: url, rights: RightsSchema,
  archive: object({ status: enumeration(['not_archived', 'archived_partial', 'archived_complete']),
    path, sha256: hash, offlineRestorable: Type.Union([Type.Boolean(), Type.Null()]) }),
  preview: PreviewSchema,
  offline_runtime_complete: Type.Union([Type.Boolean(), Type.Null()]),
  files: Type.Array(FileSchema), dependencies: Type.Array(DependencySchema),
});
export const MetadataSchema = object({
  schemaVersion: Type.Literal(2), fixture: Type.Boolean(), sources: Type.Array(SourceSchema),
  entries: Type.Array(EntrySchema), snapshots: Type.Array(SnapshotSchema), licenseEvidence: Type.Array(LicenseEvidenceSchema),
});
export const AuthorizationContextSchema = object({
  vaultRoot: text,
  fulfillments: Type.Array(object({ conditionId: hash, scope: ScopeSchema,
    state: enumeration(['satisfied', 'unsatisfied', 'unknown']),
    proof: Type.Union([object({ path, sha256: hash }), Type.Null()]),
  })),
});
export const InventorySchema = Type.Omit(MetadataSchema, ['sources']);
export type AuthorizationContext = Static<typeof AuthorizationContextSchema>;
export type Restriction = Static<typeof RestrictionSchema>;
export const SourcesSchema = Type.Array(SourceSchema, { minItems: 1 });
export type Upstream = Static<typeof UpstreamSchema>;
export type Source = Static<typeof SourceSchema>;
export type Entry = Static<typeof EntrySchema>;
export type Snapshot = Static<typeof SnapshotSchema>;
export type File = Static<typeof FileSchema>;
export type Dependency = Static<typeof DependencySchema>;
export type LicenseEvidence = Static<typeof LicenseEvidenceSchema>;
export type Metadata = Static<typeof MetadataSchema>;
