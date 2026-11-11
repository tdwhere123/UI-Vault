import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {execFileSync} from 'node:child_process';

const root = dirname(fileURLToPath(import.meta.url));
const fixture = JSON.parse(readFileSync(join(root, 'test-fixtures/tabler-lib-assembly/untracked-official-dist-prefixes.json'), 'utf8'));
const tablerDir = join(root, 'batches/tabler-20261111');
const assemblyFiles = [
  'hugerte-plugins.js',
  'hugerte-theme-icons.js',
  'vendor/hugerte-plugins.js',
  'vendor/hugerte-theme-icons.js',
];

function readZipText(fsPath, member) {
  return execFileSync('python3', ['-c', 'import sys,zipfile; z=zipfile.ZipFile(sys.argv[1]); sys.stdout.write(z.read(sys.argv[2]).decode())', fsPath, member], {maxBuffer: 16 * 1024 * 1024}).toString();
}

function assemblyComments(source) {
  return source.split(/\n/).filter((line) => {
    const t = line.trim();
    return t.startsWith('/* official:') || t.startsWith('/* generated official-build output') || t.startsWith('/* local official build output');
  });
}

function githubBlobRefs(source) {
  const refs = [];
  const re = /https:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([0-9a-f]{7,40})\/(\S+?)(?=\s|;|$|\*)/gi;
  for (const match of source.matchAll(re)) {
    refs.push({
      owner: match[1],
      repo: match[2],
      revision: match[3],
      path: match[4],
    });
  }
  return refs;
}

function sameRevision(a, b) {
  const n = Math.min(a.length, b.length);
  return n >= 7 && a.slice(0, n) === b.slice(0, n);
}

test('Tabler library assembly comments do not present untracked official build output as git blobs', () => {
  const sources = {};
  for (const rel of assemblyFiles) {
    sources[rel] = readFileSync(join(tablerDir, rel), 'utf8');
  }
  const zip = join(tablerDir, 'bundles/email-inbox.zip');
  for (const rel of assemblyFiles) {
    assert.equal(readZipText(zip, rel), sources[rel], rel + ' zip member must match the in-tree file');
  }
  assert.equal(sources['hugerte-plugins.js'], sources['vendor/hugerte-plugins.js']);
  assert.equal(sources['hugerte-theme-icons.js'], sources['vendor/hugerte-theme-icons.js']);

  const prefixes = fixture.untrackedBuildOutputPrefixes;
  const allowedRecipe = new Set(fixture.trackedRecipePaths);
  for (const [rel, source] of Object.entries(sources)) {
    const comments = assemblyComments(source);
    assert.ok(comments.length > 0, rel + ' must keep assembly source comments');
    const commentText = comments.join('\n');
    for (const ref of githubBlobRefs(commentText)) {
      if (ref.repo !== fixture.repository.split('/')[1] || !sameRevision(ref.revision, fixture.revision)) continue;
      const isUntrackedOutput = prefixes.some((prefix) => ref.path === prefix || ref.path.startsWith(prefix));
      assert.equal(
        isUntrackedOutput,
        false,
        `${rel} must not present ${ref.path} as a GitHub blob of ${ref.revision}; that path is local official build output, not a git-tracked file`,
      );
      assert.ok(allowedRecipe.has(ref.path), `${rel} blob path ${ref.path} is not a recorded tracked recipe file`);
    }
    assert.match(commentText, /not git-tracked|not a git-tracked file|generated official-build output/);
    assert.match(commentText, /core\/dist\/libs\/hugerte\//);
    assert.match(commentText, /not claimed as a byte-for-byte official git original/);
  }
});
