import pathlib, subprocess, json, hashlib, stat
R=pathlib.Path(__file__).resolve().parents[3]
E=pathlib.Path(__file__).resolve().parents[1]
base='63d327058afa7515cf8848d6c32e3b0d914850fd'
old=json.loads(subprocess.check_output(['git','show',base+':inventory/collection.json'],cwd=R))
new=json.loads((R/'inventory/collection.json').read_bytes())
canonical=lambda x:json.dumps(x,sort_keys=True,separators=(',',':'),ensure_ascii=False).encode()
assert [canonical(c) for c in new['components'] if c['assetKind']=='source']==[canonical(c) for c in old['components']]
assert new['sources'][:2]==old['sources']
manifest=json.loads((E/'protected-before.json').read_text())
for name,v in manifest.items():
 p=R/name
 assert hashlib.sha256(p.read_bytes()).hexdigest()==v['sha256'],name
 assert oct(stat.S_IMODE(p.stat().st_mode))==v['mode'],name
print('PASS source objects 20/20 canonical byte-equal; original 2 source records unchanged')
print('PASS protected bytes and modes: '+str(len(manifest))+' files; archive='+str(sum(p.startswith('archive/') for p in manifest))+'; old evidence='+str(sum(p.startswith('inventory/acquisition-evidence/') for p in manifest)))
