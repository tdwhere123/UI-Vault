import { Type, type Static } from '@sinclair/typebox';
import { Ajv } from 'ajv';

const text = Type.String({ minLength: 1 });
const path = Type.String({ minLength: 1 });
const commit = Type.String({ pattern: '^(?:[a-f0-9]{40}|[a-f0-9]{64})$' });
const url = Type.String({ pattern: '^https://[^\\s]+$' });
// SemVer numeric core/prerelease identifiers cannot have leading zeroes.
const numeric = '(?:0|[1-9][0-9]*)';
const prerelease = `(?:${numeric}|[0-9]*[A-Za-z-][0-9A-Za-z-]*)`;
const fixedVersion = Type.String({ pattern: `^${numeric}\\.${numeric}\\.${numeric}(?:-${prerelease}(?:\\.${prerelease})*)?(?:\\+[0-9A-Za-z-]+(?:\\.[0-9A-Za-z-]+)*)?$` });
const object = <T extends Parameters<typeof Type.Object>[0]>(properties: T) => Type.Object(properties, { additionalProperties: false });
const license = object({ status: Type.Union([Type.Literal('allowed'), Type.Literal('unknown'), Type.Literal('restricted')]),
  evidencePath: Type.Union([path, Type.Null()]), noticePaths: Type.Array(path) });
const description = {
  id: text, sourceId: text, name: text, category: text, tags: Type.Array(text), upstreamUrl: url,
  license, limitations: Type.Array(text)
};
const sourceComponent = object({
  ...description, assetKind: Type.Literal('source'), upstreamCommit: commit,
  snapshotPath: Type.Union([path, Type.Null()]),
  files: Type.Array(object({ path, sha256: Type.String({ pattern: '^[a-f0-9]{64}$' }), size: Type.Integer({ minimum: 0, maximum: Number.MAX_SAFE_INTEGER }) })),
  dependencies: Type.Record(Type.String({ pattern: '^(?:@[a-z0-9._-]+/)?[a-z0-9._-]+$' }), fixedVersion, { additionalProperties: false })
});
const referenceComponent = object({
  ...description, assetKind: Type.Literal('reference'), upstreamCommit: Type.Null(),
  snapshotPath: Type.Null(), files: Type.Array(Type.Never(), { maxItems: 0 }), dependencies: object({}),
  publicUrl: url, isInference: Type.Boolean(),
  screenshotUrls: Type.Optional(Type.Array(url)), demoUrls: Type.Optional(Type.Array(url)),
  localAssetPaths: Type.Optional(Type.Array(path)), interactionFlow: Type.Array(text, { minItems: 1 }),
  visualNotes: object({ layout: text, colors: text, typography: text, motion: text }),
  useCases: Type.Array(text, { minItems: 1 }), implementationNotes: text
});
export const CatalogSchema = object({
  sources: Type.Array(object({ id: text, name: text, upstreamUrl: url, upstreamCommit: commit })),
  components: Type.Array(Type.Union([sourceComponent, referenceComponent]))
});
export type Catalog = Static<typeof CatalogSchema>;
export type CatalogComponent = Catalog['components'][number];
export type SourceComponent = Extract<CatalogComponent, { assetKind: 'source' }>;
export type CatalogQuery = { query?: string; category?: string; sourceId?: string };
const validator = new Ajv({ strict: true, allErrors: true }).compile<Catalog>(CatalogSchema);

function unique(values: string[], label: string): void {
  if (new Set(values).size !== values.length) throw new Error(`Duplicate ${label}`);
}

export function assertCatalogPath(value: string): void {
  if (value.startsWith('/') || value.includes(String.fromCharCode(92))
    || [...value].some(char => char.charCodeAt(0) < 32 || char.charCodeAt(0) === 127 || ':*?"<>|'.includes(char))
    || value.split('/').some(part => !part || part === '.' || part === '..' || /[. ]$/.test(part)
      || /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:[.]|$)/i.test(part))) {
    throw new Error(`Unsafe path: ${value}`);
  }
}

function checkComponent(component: CatalogComponent, sources: Set<string>): void {
  if (!sources.has(component.sourceId)) throw new Error(`Missing source: ${component.sourceId}`);
  if (component.license.evidencePath !== null) assertCatalogPath(component.license.evidencePath);
  component.license.noticePaths.forEach(assertCatalogPath);
  if (component.assetKind === 'reference') {
    component.localAssetPaths?.forEach(assertCatalogPath);
    return;
  }
  if (component.license.status !== 'allowed') {
    if (component.snapshotPath !== null || component.files.length) throw new Error('Unknown or restricted source is registration only');
    return;
  }
  if (!component.license.evidencePath || !component.snapshotPath || !component.files.length) throw new Error('Snapshot requires permission evidence and files');
  assertCatalogPath(component.snapshotPath);
  if (!component.snapshotPath.startsWith('archive/')) throw new Error('Snapshot must be under archive/');
  component.files.forEach(file => assertCatalogPath(file.path));
  // Reject aliases and parent conflicts on case-insensitive filesystems too.
  const paths = component.files.map(file => file.path.normalize('NFC').toLowerCase());
  unique(paths, 'file path');
  const filePaths = new Set(paths);
  for (const file of paths) {
    const parts = file.split('/');
    for (let index = 1; index < parts.length; index++) {
      if (filePaths.has(parts.slice(0, index).join('/'))) throw new Error('File/directory mapping conflict');
    }
  }
}

// This is a collection record check, not a legal review or filesystem verification.
export function validateCatalog(input: unknown): Catalog {
  const captured: unknown = structuredClone(input);
  if (!validator(captured)) throw new Error(`Invalid catalog: ${JSON.stringify(validator.errors)}`);
  unique(captured.sources.map(source => source.id), 'source id');
  unique(captured.components.map(component => component.id), 'component id');
  const sources = new Set(captured.sources.map(source => source.id));
  captured.components.forEach(component => checkComponent(component, sources));
  return captured;
}

const compare = (a: string, b: string): number => a < b ? -1 : a > b ? 1 : 0;

export function buildCatalog(input: unknown): Catalog {
  const result = validateCatalog(input);
  result.sources.sort((a, b) => compare(a.id, b.id));
  result.components.sort((a, b) => compare(a.id, b.id));
  for (const component of result.components) {
    component.files.sort((a, b) => compare(a.path, b.path));
    if (component.assetKind === 'reference') {
      component.screenshotUrls?.sort(); component.demoUrls?.sort(); component.localAssetPaths?.sort();
    }
    component.tags.sort();
    component.license.noticePaths.sort();
    component.dependencies = Object.fromEntries(Object.entries(component.dependencies).sort(([a], [b]) => compare(a, b)));
  }
  return result;
}

export function searchCatalog(input: unknown, options: CatalogQuery = {}): CatalogComponent[] {
  const catalog = validateCatalog(input);
  const query = options.query?.trim().toLowerCase() ?? '';
  return catalog.components.filter(component => (!options.category || component.category === options.category)
    && (!options.sourceId || component.sourceId === options.sourceId)
    && (!query || searchableText(component)
      .some(value => value.toLowerCase().includes(query))));
}

function searchableText(component: CatalogComponent): string[] {
  const common = [component.id, component.name, component.sourceId, component.category, ...component.tags];
  return component.assetKind === 'source' ? common : [...common, component.publicUrl,
    ...component.interactionFlow, ...Object.values(component.visualNotes), ...component.useCases, component.implementationNotes];
}

/** Source records only, including registration-only records; not a restoration permit. */
export function getSourceComponents(input: unknown): SourceComponent[] {
  return validateCatalog(input).components.filter((item): item is SourceComponent => item.assetKind === 'source');
}
