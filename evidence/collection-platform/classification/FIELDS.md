# Frontend/CLI collection field contract

This extends the single CatalogSchema in packages/core/src/catalog.ts. No parallel taxonomy or metadata file is authoritative.

- `category: string`: existing purpose/main class, still required and backward compatible. Keep current values until domain approves enriching all 20 source records; do not introduce another purpose field. Suggested user-facing purpose names can be labels for actual stored category values, not an inferred classification.
- `tags: string[]`: existing multiple tags; Chinese and English tags may coexist. No automatic translation or inferred tags.
- `dependencies: Record<string, exactVersion>`: existing recorded package/style dependencies, not proof of framework or language.
- `techStack?: { frameworks: string[] | null; languages: string[] | null; styling: string[] | null }`: optional single catalog extension. Omitted object or null dimension = unknown; [] = explicitly recorded empty set, not unknown. All three dimensions required if the object is present. Values are recorded facts, not inferred from tags, dependency names, filenames or reference appearance. Existing records stay unchanged/readable and technology-unknown.
- Existing details remain `assetKind`, `license`, `upstreamUrl`, `upstreamCommit`, `snapshotPath`, `files`, `dependencies`, `limitations`. Same-name labels must append existing `sourceId` or source name.
- `getComponentAvailability(component): 'source_snapshot' | 'registration_only' | 'reference'` is the sole derived availability classifier. `source_snapshot` means an allowed record with listed snapshot/files, NOT verified disk or successful recovery. `reference` can never be restored as source.
- No restoration-success field is persisted. Before a real restore result the frontend must show **未实测 / not_checked**, never success inferred from license, catalog validation or snapshot presence. Real restore output describes that call/destination only; do not fabricate or cache it as catalog truth.

## Query

`CatalogQuerySchema`, `validateCatalogQuery` and `searchCatalog` are the only query authority. Query shape:

```ts
{
  query?: string; category?: string; sourceId?: string;
  tag?: string; dependency?: string;
  framework?: string | null; language?: string | null; styling?: string | null;
  assetKind?: 'source' | 'reference';
  licenseStatus?: 'allowed' | 'unknown' | 'restricted';
  availability?: 'source_snapshot' | 'registration_only' | 'reference';
}
```

All provided filters are ANDed. category/sourceId empty strings retain existing Explorer no-filter behavior. tag/dependency are exact recorded matches. Technology filters match only explicit techStack dimensions; null filters unknown, undefined means no filter. No dependency-to-framework inference. Free text is case-insensitive across existing names/categories/tags, explicit stack/dependency names and reference descriptions. Results remain detached copies.

CLI `search [text] [filters]` and `list [filters]` accept `--source`, `--category`, `--tag`, `--dependency`, `--framework`, `--language`, `--styling`, `--kind`, `--license`, `--availability`. Technology argument `unknown` maps to null. Query validation rejects unsupported statuses such as restored/free, unknown flags and missing/duplicate values.

## Scope / pending work

No archive/inventory/catalog data, Explorer or restore implementation changed in this increment. Existing two coarse categories, sparse tags and missing techStack are not silently enriched. Domain approval and evidence-backed per-component classification are still needed; exactly 20 real source records must remain. Six external reference proposals remain outside the repository and are not claimed as ingested.
