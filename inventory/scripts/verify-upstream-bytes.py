"""Compare every recorded file with independently opened fixed-commit archives."""
import hashlib
import json
import sys
import tarfile
from pathlib import Path

root = Path(__file__).resolve().parents[2]
catalog = json.loads((root / 'inventory/collection.json').read_text())
provenance = json.loads((root / 'inventory/acquisition-evidence/provenance.json').read_text())
count = 0
for source in provenance['sources']:
    archive = Path(sys.argv[1]) / (source['id'] + '-' + source['commit'] + '.tgz')
    assert hashlib.sha256(archive.read_bytes()).hexdigest() == source['sha256']
    with tarfile.open(archive) as tar:
        prefix = tar.getmembers()[0].name.split('/')[0]
        for component in catalog['components']:
            if component['sourceId'] != source['id']:
                continue
            for record in component['files']:
                member = tar.getmember(prefix + '/' + record['path'])
                assert member.isfile(), record['path']
                original = tar.extractfile(member).read()
                actual = (root / component['snapshotPath'] / record['path']).read_bytes()
                assert original == actual, (component['id'], record['path'])
                count += 1
            print('PASS upstream bytes', component['id'])
print('PASS', count, 'recorded files byte-identical to two fixed commit tarballs')
