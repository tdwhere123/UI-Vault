"""Public portability revision of a historical writer, not a current build entry.
Original execution evidence is preserved privately; historical generation gaps remain unknown.
Explicit inputs and historical-write opt-in do not override the frozen baseline guard.
"""
import json, hashlib, subprocess, pathlib, os, tempfile, stat, argparse
R=pathlib.Path(__file__).resolve().parents[3]
E=pathlib.Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser(description='Historical writer; never use on the current collection')
parser.add_argument('--mapping', help='Explicit external mapping JSON; never inferred from current catalog')
parser.add_argument('--research', help='Explicit external research JSON; not vendored')
parser.add_argument('--allow-historical-write', action='store_true', help='Explicitly opt into writes, still subject to the original baseline guard')
args=parser.parse_args()
if not args.mapping: parser.error('MISSING_REFERENCE_MAPPING: --mapping PATH is required')
if not args.research: parser.error('MISSING_REFERENCE_RESEARCH: --research PATH is required')
mp=pathlib.Path(args.mapping).resolve()
rp=pathlib.Path(args.research).resolve()
if not mp.is_file(): parser.error('MISSING_REFERENCE_MAPPING: supplied file is absent')
if not rp.is_file(): parser.error('MISSING_REFERENCE_RESEARCH: supplied file is absent')
if not args.allow_historical_write: parser.error('HISTORICAL_TOOL: explicit --allow-historical-write required; not a current workflow')
os.chdir(R)
BASE='63d327058afa7515cf8848d6c32e3b0d914850fd'
if subprocess.check_output(['git','rev-parse','HEAD'],cwd=R).decode().strip()!=BASE: parser.error('HISTORICAL_BASELINE_MISMATCH: original baseline required before any evidence or collection write')
def sha(b): return hashlib.sha256(b).hexdigest()
def gitfile(p): return subprocess.check_output(['git','show',BASE+':'+p])
def manifest():
    result={}
    for folder in ['archive','inventory/acquisition-evidence','inventory/scripts']:
        for p in sorted(pathlib.Path(folder).rglob('*')):
            if p.is_file() and str(p)!='inventory/scripts/verify-collection.mjs':
                result[str(p)]={'sha256':sha(p.read_bytes()),'mode':oct(stat.S_IMODE(p.stat().st_mode))}
    return result
before=manifest()
(E/'protected-before.json').write_text(json.dumps(before,indent=2)+'\n')
old=json.loads(gitfile('inventory/collection.json'))
assert pathlib.Path('inventory/collection.json').read_bytes()==gitfile('inventory/collection.json')
assert pathlib.Path('inventory/scripts/verify-collection.mjs').read_bytes()==gitfile('inventory/scripts/verify-collection.mjs')
assert sha(mp.read_bytes())=='1d798a2a8c7f8c8428036f44262040dcb75bd294739df921755956e3a91c95b8'
assert sha(rp.read_bytes())=='39158bf90207913864c2a8387e3c090942ba4ac659ade6b799c7e4bcb48e9414'
m=json.loads(mp.read_bytes()); research=json.loads(rp.read_bytes())
assert len(m['sources'])==2 and len(m['components'])==len(research)==6
for c,r in zip(m['components'],research):
    assert c['id']=='reference:'+r['id'] and c['name']==r['name']
    assert c['upstreamUrl']==r['source_url']
    assert c['visualNotes']['layout']==r['visual_facts']['layout']
    assert c['visualNotes']['colors']==r['visual_facts']['color']
    assert c['interactionFlow']==[r['flow']['description'],r['flow']['basis_status']]
    assert r['limitations'] in c['limitations'] and r['observation_status'] in c['limitations']
    assert c['publicUrl']==r.get('official_readme_url',r['source_url'])
    assert c['localAssetPaths']==[] and c['isInference'] is True
    assert c['snapshotPath'] is None and c['files']==[] and c['dependencies']=={} and c['upstreamCommit'] is None
print('PASS mapping: 6 research ids/names/URLs/layout/colors/flows/limitations; no local assets; inference retained')
(E/'input-summary.json').write_text(json.dumps({'mapping':str(mp),'mappingSHA256':sha(mp.read_bytes()),'research':str(rp),'researchSHA256':sha(rp.read_bytes()),'sourceIds':[s['id'] for s in m['sources']],'referenceIds':[c['id'] for c in m['components']]},indent=2)+'\n')
new={'sources':old['sources']+m['sources'],'components':old['components']+m['components']}
oldscript=gitfile('inventory/scripts/verify-collection.mjs').decode()
with tempfile.TemporaryDirectory(prefix='reference-controls-') as temp:
    scratch=pathlib.Path(temp)/'catalog.json'; scratch.write_text(json.dumps(new))
    code=oldscript.replace("'../../dist/packages/core/src/catalog.js'",repr((R/'dist/packages/core/src/catalog.js').as_uri())).replace("resolve(import.meta.dirname, '../..')",repr(str(R)))
    # node -e shifts argv; the verifier expects argv[2]. Supply placeholder.
    result=subprocess.run(['node','--input-type=module','-e',code,'placeholder',str(scratch)],capture_output=True,text=True)
    (E/'before-negative.raw.txt').write_text(result.stdout+result.stderr+'\nexit='+str(result.returncode)+'\n')
    assert result.returncode!=0 and '4 !== 2' in result.stderr,result.stderr
    print('PASS before negative: appended scratch rejected by old fixed source count: 4 !== 2')
    # Shared schema must accept the mapping before authorized files change.
    code="import {validateCatalog} from './dist/packages/core/src/catalog.js'; import {readFileSync} from 'node:fs'; validateCatalog(JSON.parse(readFileSync(process.argv[1]))); console.log('PASS shared schema mapping');"
    (E/'schema-mapping.raw.txt').write_text(result.stdout+result.stderr)
    assert result.returncode==0,result.stderr
for p in ['inventory/collection.json','inventory/scripts/verify-collection.mjs']: os.chmod(p,0o644)
pathlib.Path('inventory/collection.json').write_text(json.dumps(new,ensure_ascii=False,indent=2)+'\n')
script=oldscript.replace("assert.equal(catalog.sources.length, 2);\nassert.equal(catalog.components.length, 20);\nfor (const source of catalog.sources) {\n  assert.equal(catalog.components.filter(c => c.sourceId === source.id).length, 10);\n}","""const sourceComponents = catalog.components.filter(c => c.assetKind === 'source');
const references = catalog.components.filter(c => c.assetKind === 'reference');
const sourceIds = new Set(sourceComponents.map(c => c.sourceId));
assert.equal(sourceIds.size, 2, 'Expected two source-code origins');
assert.equal(sourceComponents.length, 20, 'Expected 20 source components');
for (const sourceId of sourceIds) {
  assert.equal(sourceComponents.filter(c => c.sourceId === sourceId).length, 10);
}
assert.equal(references.length, 6, 'Expected six aesthetic/interaction references');
for (const reference of references) {
  // Field shape and forbidden source material are owned by validateCatalog above.
  assert.deepEqual(reference.localAssetPaths, [], 'No licensed local reference assets acquired');
  assert.equal(reference.isInference, true, 'Internal implementation remains inference');
  console.log(`PASS reference ${reference.id}: metadata only; no snapshot/files/dependencies/local assets`);
}""").replace('for (const component of catalog.components) {','for (const component of sourceComponents) {').replace('20 real components, ${fileCount}', '20 real components, 6 references, ${fileCount}')
assert script!=oldscript
pathlib.Path('inventory/scripts/verify-collection.mjs').write_text(script)
current=json.loads(pathlib.Path('inventory/collection.json').read_bytes())
assert current['components'][:20]==old['components']
canonical=lambda x:json.dumps(x,sort_keys=True,separators=(',',':'),ensure_ascii=False).encode()
assert [canonical(c) for c in current['components'] if c['assetKind']=='source']==[canonical(c) for c in old['components']]
print('PASS source objects: 20/20 canonical JSON byte-equal to '+BASE)
after=manifest(); assert before==after
(E/'protected-after.json').write_text(json.dumps(after,indent=2)+'\n')
for name,v in before.items():
    if name.startswith(('archive/','inventory/acquisition-evidence/')): assert sha(gitfile(name))==v['sha256'],name
print('PASS protected bytes/modes unchanged: '+str(len(before))+' files; archive='+str(sum(p.startswith('archive/') for p in before))+'; old evidence='+str(sum(p.startswith('inventory/acquisition-evidence/') for p in before)))
print('PASS archive and old evidence bytes also match frozen baseline git objects')
