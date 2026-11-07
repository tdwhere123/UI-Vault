import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { CatalogSchema, validateCatalog, buildCatalog, searchCatalog, getSourceComponents, validateCatalogQuery } from '../../core/src/index.js';

// Paths are relative to the caller's repository directory, never the compiled file.
async function load(path: string): Promise<unknown> { return JSON.parse(await readFile(resolve(path), 'utf8')); }
// The active CLI emits under root dist/packages/cli/src, while restore has package-local dist.
async function restoreService(): Promise<typeof import('../../restore/dist/index.js')> {
  return import(new URL('../../../../packages/restore/dist/index.js', import.meta.url).href);
}
function counts(catalog: ReturnType<typeof validateCatalog>): string {
  const sources = getSourceComponents(catalog).length;
  return `${catalog.sources.length} sources; ${sources} source components; ${catalog.components.length - sources} references`;
}
function queryArguments(args: string[], allowText: boolean): ReturnType<typeof validateCatalogQuery> {
  const names: Record<string, string> = {
    '--source': 'sourceId', '--category': 'category', '--tag': 'tag', '--dependency': 'dependency',
    '--framework': 'framework', '--language': 'language', '--styling': 'styling',
    '--kind': 'assetKind', '--license': 'licenseStatus', '--availability': 'availability', '--query': 'query'
  };
  const options: Record<string, unknown> = {};
  for (let index = 0; index < args.length; index++) {
    const arg = args[index]!;
    if (!arg.startsWith('--')) {
      if (!allowText || Object.hasOwn(options, 'query')) throw new Error('Only search accepts one text argument');
      options.query = arg; continue;
    }
    const key = names[arg], value = args[++index];
    if (!key || value === undefined || value.startsWith('--')) throw new Error(`Unknown filter or missing value: ${arg}`);
    if (Object.hasOwn(options, key)) throw new Error(`Duplicate filter: ${arg}`);
    options[key] = ['framework', 'language', 'styling'].includes(key) && value === 'unknown' ? null : value;
  }
  return validateCatalogQuery(options);
}
async function main(): Promise<void> {
  const [command, ...args] = process.argv.slice(2);
  if (command === 'schema' && !args.length) console.log(JSON.stringify(CatalogSchema, null, 2));
  else if (command === 'index' && args.length <= 1) {
    const catalog = buildCatalog(await load(args[0] ?? 'inventory/collection.json'));
    await writeFile('catalog.json', `${JSON.stringify(catalog, null, 2)}\n`, { flag: 'w' });
    console.log(`catalog.json: ${counts(catalog)}`);
  } else if (command === 'validate' && args.length <= 1) {
    const catalog = validateCatalog(await load(args[0] ?? 'catalog.json'));
    console.log(`VALID: ${counts(catalog)}; filesystem and license review are separate checks`);
  } else if (command === 'search' || command === 'list') {
    console.log(JSON.stringify(searchCatalog(await load('catalog.json'), queryArguments(args, command === 'search')), null, 2));
  } else if (command === 'inspect' && args.length === 1) {
    const catalog = validateCatalog(await load('catalog.json'));
    const component = catalog.components.find(item => item.id === args[0]);
    if (!component) throw new Error(`Unknown component: ${args[0]}`);
    console.log(JSON.stringify(component, null, 2));
  } else if (command === 'verify' && args.length === 1) {
    const catalog = await load('catalog.json');
    const service = await restoreService();
    console.log(JSON.stringify(await service.verifyComponent({
      catalog, componentId: args[0]!, archiveRoot: resolve('.')
    }), null, 2));
  } else if (command === 'materialize' && args.length === 2) {
    const catalog = await load('catalog.json');
    const service = await restoreService();
    console.log(JSON.stringify(await service.restoreComponent({
      catalog, componentId: args[0]!, archiveRoot: resolve('.'), destination: resolve(args[1]!)
    }), null, 2));

  } else throw new Error('Usage: pnpm vault schema|index [inventory/collection.json]|validate [catalog.json]|list [filters]|search [text] [filters]|inspect <id>|verify <id>|materialize <id> <destination>; filters: --source --category --framework --language --styling --dependency --tag --kind --license --availability; stack unknown means unrecorded');
}
main().catch(error => { console.error(error instanceof Error ? error.message : error); process.exitCode = 1; });
