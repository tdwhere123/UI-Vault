"""Extract corresponding UTF-8 source to a new directory; no network or execution."""
import pathlib,json,hashlib,sys
here=pathlib.Path(__file__).resolve().parent;out=pathlib.Path(sys.argv[1]);out.mkdir(exist_ok=False)
for name,info in json.loads((here/'source-index.json').read_text()).items():
 data=(here/name).read_bytes();assert hashlib.sha256(data).hexdigest()==info['sha256']
 for rel,text in json.loads(data).items():
  p=pathlib.PurePosixPath(rel);assert not p.is_absolute() and '..' not in p.parts
  assert hashlib.sha256(text.encode()).hexdigest()==info['files'][rel]
  target=out/p;target.parent.mkdir(parents=True,exist_ok=True);target.write_text(text)
print('Extracted to',out,'; install esbuild 0.25.0 and acorn 8.14.0, then npm run build')
