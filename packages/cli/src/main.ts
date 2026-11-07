import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { MetadataSchema, validateMetadata, validateSources, assembleMetadata, projectCatalog, verifyLicenseEvidence } from '../../core/src/index.js';

const root = new URL('../../../../', import.meta.url);
const load = async (path: string): Promise<unknown> => JSON.parse(await readFile(new URL(path, root), 'utf8'));

async function main(): Promise<void> {
  const [command, ...args] = process.argv.slice(2);
  if (command === 'sources' && !args.length) {
    const sources = validateSources(await load('config/sources.json'));
    for (const source of sources) console.log(`${source.sourceId}\t${source.checkStatus}\t${source.rights.can_archive_source.state}`);
    console.log(`sources=${sources.length}; live_verified=0 (seed inventory only)`);
  } else if (command === 'validate' && !args.length) {
    const sources = validateSources(await load('config/sources.json'));
    const fixture = validateMetadata(await load('fixtures/metadata.json'));
    validateMetadata(await load('fixtures/empty-inventory.json'));
    await verifyLicenseEvidence(fixture, fileURLToPath(root));
    console.log(`VALID: ${sources.length} source seeds; ${fixture.entries.length} fictional entry; metadata+cross-record invariants checked`);
  } else if (command === 'index' && args.length <= 1) {
    const metadata = args[0] ? await load(args[0]) : assembleMetadata(await load('config/sources.json'), await load('inventory/metadata.json'));
    console.log(JSON.stringify(projectCatalog(metadata), null, 2));
  } else if (command === 'schema' && !args.length) {
    console.log(JSON.stringify(MetadataSchema, null, 2));
  } else {
    throw new Error(`Usage: pnpm vault sources|validate|schema|index [metadata.json] (project root: ${fileURLToPath(root)})`);
  }
}
main().catch(error => { console.error(error instanceof Error ? error.message : error); process.exitCode = 1; });
