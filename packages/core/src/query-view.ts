import type { CatalogQuery, CatalogAvailability } from './catalog.js';

/** Query-only facts: never accepted as a catalog, restoration or permission input. */
export interface CatalogQueryFields {
  id: string; sourceId: string; name: string; category: string; tags: string[];
  dependencies: Record<string, string>;
  techStack?: { frameworks: string[] | null; languages: string[] | null; styling: string[] | null };
}
export interface CatalogQueryView extends CatalogQueryFields {
  assetKind: 'source' | 'reference'; licenseStatus: 'allowed' | 'unknown' | 'restricted';
  availability: CatalogAvailability; searchText: string[];
}

export function catalogSearchText(component: CatalogQueryFields): string[] {
  return [component.id, component.name, component.sourceId, component.category, ...component.tags,
    ...Object.keys(component.dependencies), ...Object.values(component.techStack ?? {}).flatMap(values => values ?? [])];
}

/** The sole filtering predicate; callers validate their own input boundary and query. */
export function matchesCatalogQuery(component: CatalogQueryView, filters: CatalogQuery): boolean {
  const keys = { framework: 'frameworks', language: 'languages', styling: 'styling' } as const;
  const technologyMatches = (Object.keys(keys) as (keyof typeof keys)[]).every(key => {
    const requested = filters[key];
    if (requested === undefined) return true;
    const known = component.techStack?.[keys[key]];
    return requested === null ? known == null : known?.includes(requested) === true;
  });
  const query = filters.query?.trim().toLowerCase() ?? '';
  return (!filters.category || component.category === filters.category)
    && (!filters.sourceId || component.sourceId === filters.sourceId)
    && (!filters.assetKind || component.assetKind === filters.assetKind)
    && (!filters.licenseStatus || component.licenseStatus === filters.licenseStatus)
    && (!filters.availability || component.availability === filters.availability)
    && (!filters.tag || component.tags.includes(filters.tag))
    && (!filters.dependency || Object.hasOwn(component.dependencies, filters.dependency))
    && technologyMatches
    && (!query || component.searchText.some(value => value.toLowerCase().includes(query)));
}
