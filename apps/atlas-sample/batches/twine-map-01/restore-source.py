import pathlib,json
base=pathlib.Path(__file__).parent;target=base/'restored-source';target.mkdir(exist_ok=True)
for part in sorted(base.glob('source-part-*.json')):
 for name,text in json.load(open(part)).items():
  p=pathlib.PurePosixPath(name)
  if p.is_absolute()or '..'in p.parts:raise ValueError(name)
  dest=target/p;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(text)
print(target)
