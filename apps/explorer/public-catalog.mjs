import { matchesCatalogQuery, catalogSearchText } from '../../dist/packages/core/src/query-view.js';
import validateQuery from './query-validator.mjs';

// Exact reviewed upstream entry points, not an arbitrary external-link allowlist.
export const upstreamLinks = Object.freeze({
  'agent-elements': 'https://github.com/21st-dev/agent-elements',
  'arc-library-reference': 'https://github.com/kuratlielia/arc-library',
  'bencho': 'https://github.com/cabralorenzo/bencho',
  'beui-reference': 'https://pro.beui.dev/'
});
function object(value, required, optional = []) {
  if (!value || typeof value !== 'object' || Array.isArray(value)
    || required.some(key => !Object.hasOwn(value, key))
    || Object.keys(value).some(key => ![...required, ...optional].includes(key))) throw new Error('Invalid public fields');
}
function text(value) {
  if (typeof value !== 'string' || !value.length || value.length > 200
    || /[\\/\x00-\x1f\x7f]|https?:|file:|data:|[A-Za-z]:/.test(value)) throw new Error('Unsafe public text');
}
function strings(value) {
  if (!Array.isArray(value)) throw new Error('Invalid public list');
  value.forEach(text);
}
function oneOf(value, values) { if (!values.includes(value)) throw new Error('Invalid public state'); }

/** A display/query boundary only; deliberately cannot satisfy CatalogSchema. */
export function validatePublicCatalog(input) {
  const data = structuredClone(input);
  object(data, ['sources','components']);
  if (!Array.isArray(data.sources) || !Array.isArray(data.components)) throw new Error('Invalid public catalog');
  const sources = new Set(); const ids = new Set();
  for (const source of data.sources) {
    object(source,['id','name','upstreamUrl']); text(source.id); text(source.name);
    if (!Object.hasOwn(upstreamLinks,source.id) || source.upstreamUrl !== upstreamLinks[source.id]
      || sources.has(source.id)) throw new Error('Unreviewed public source');
    sources.add(source.id);
  }
  for (const item of data.components) {
    object(item,['id','sourceId','name','category','tags','dependencies','assetKind','licenseStatus','availability','restoreStatus','upstreamUrl'],['techStack']);
    for (const key of ['name','category']) text(item[key]);
    if (typeof item.id !== 'string' || !/^[a-z0-9:-]+$/.test(item.id)) throw new Error('Invalid public id');
    if (!sources.has(item.sourceId) || ids.has(item.id) || item.upstreamUrl !== upstreamLinks[item.sourceId]) throw new Error('Invalid public source identity');
    ids.add(item.id); strings(item.tags);
    oneOf(item.assetKind,['source','reference']); oneOf(item.licenseStatus,['allowed','unknown','restricted']);
    oneOf(item.availability,['source_snapshot','registration_only','reference']);
    oneOf(item.restoreStatus,['not_checked']);
    if (!item.dependencies || typeof item.dependencies !== 'object' || Array.isArray(item.dependencies)) throw new Error('Invalid dependencies');
    for (const [name,version] of Object.entries(item.dependencies)) {
      if (!/^(?:@[a-z0-9._-]+\/)?[a-z0-9._-]+$/.test(name) || typeof version !== 'string'
        || !/^[0-9A-Za-z.+-]+$/.test(version)) throw new Error('Invalid public dependency');
    }
    if (Object.hasOwn(item,'techStack')) {
      object(item.techStack,['frameworks','languages','styling']);
      for (const values of Object.values(item.techStack)) if (values !== null) strings(values);
    }
  }
  return data;
}

export function searchPublicCatalog(input, options = {}) {
  const catalog = validatePublicCatalog(input);
  const filters = structuredClone(options);
  if (!validateQuery(filters)) throw new Error('Invalid catalog query');
  return catalog.components.filter(item => matchesCatalogQuery({ ...item, searchText: catalogSearchText(item) },filters));
}
