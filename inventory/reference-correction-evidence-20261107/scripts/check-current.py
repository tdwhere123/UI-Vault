import pathlib,subprocess,json,hashlib,stat,sys,datetime
R=pathlib.Path(__file__).resolve().parents[3]
E=pathlib.Path(__file__).resolve().parents[1]
# No build: build writes dist. Validators only read repository data; Python negative controls create external scratch.
commands=[['node',str(E/'scripts/schema-probes.mjs')],['node','inventory/scripts/verify-collection.mjs'],['python3','inventory/scripts/check-negative-controls.py']]
for cmd in commands:
 print('COMMAND '+json.dumps(cmd),flush=True)
 print('TIME '+datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=8))).isoformat()+' Asia/Taipei',flush=True)
 result=subprocess.run(cmd,cwd=R,capture_output=True,text=True)
 print('STDOUT\n'+result.stdout+'STDERR\n'+result.stderr+'EXIT_CODE '+str(result.returncode),flush=True)
 if result.returncode:sys.exit(result.returncode)
manifest=json.loads((E/'protected-before.json').read_text())
for name,v in manifest.items():
 p=R/name
 assert hashlib.sha256(p.read_bytes()).hexdigest()==v['sha256'],name
 assert oct(stat.S_IMODE(p.stat().st_mode))==v['mode'],name
print('PASS protected files bytes/modes unchanged: '+str(len(manifest)))
print('PASS no append, build, acquisition or repository input write performed')
