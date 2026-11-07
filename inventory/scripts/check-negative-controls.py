"""Run destructive manifest scenarios on scratch copies, not archived files."""
import copy
import json
import subprocess
import argparse
import tempfile
from pathlib import Path

root = Path(__file__).resolve().parents[2]
catalog = json.loads((root / 'inventory/collection.json').read_text())
parser = argparse.ArgumentParser(description='Run collection negatives on isolated temporary inputs')
parser.add_argument('--scratch-parent', help='Optional existing writable scratch parent; default OS temporary directory')
args = parser.parse_args()
scratch_context = tempfile.TemporaryDirectory(prefix='ui-vault-negative-', dir=args.scratch_parent)
scratch = Path(scratch_context.name)
subprocess.run(['node', 'inventory/scripts/verify-collection.mjs'], cwd=root, check=True, capture_output=True)
print('PASS original manifest positive control before mutations')
scenarios = [
    ('missing-internal-dependency', 'agent-elements:bash-tool', lambda c: c.update(files=[f for f in c['files'] if not f['path'].endswith('tool-approval-footer.tsx')])),
    ('missing-style', 'bencho:escape', lambda c: c.update(files=[f for f in c['files'] if f['path'] != 'tokens.css'])),
    ('missing-license', 'bencho:escape', lambda c: c.update(files=[f for f in c['files'] if f['path'] != 'LICENSE'])),
    ('missing-dynamic-package', 'bencho:folding-bill', lambda c: c['dependencies'].pop('three')),
]
for name, identity, mutate in scenarios:
    altered = copy.deepcopy(catalog)
    component = next(c for c in altered['components'] if c['id'] == identity)
    before = json.dumps(component, sort_keys=True)
    mutate(component)
    assert before != json.dumps(component, sort_keys=True), name + ' did not change fixture'
    path = scratch / (name + '.json')
    path.write_text(json.dumps(altered))
    run = subprocess.run(['node', 'inventory/scripts/verify-collection.mjs', str(path)], cwd=root, text=True, capture_output=True)
    print('SCENARIO', name, 'exit', run.returncode)
    print(run.stdout, run.stderr)
    assert run.returncode != 0, name + ' unexpectedly accepted'
    print('PASS rejected', name)
print('PASS 4 malformed manifest controls; original files unchanged')
