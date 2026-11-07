import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFile, mkdtemp, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { promisify } from 'node:util';
import { test } from 'node:test';
import { validateCatalog } from '../../core/dist/index.js';
import { restoreComponent } from '../dist/index.js';

const exec = promisify(execFile);
const digest = bytes => createHash('sha256').update(bytes).digest('hex');

test('all real collected components restore twice with origin access deliberately unavailable', async () => {
  const root = resolve(import.meta.dirname, '../../..');
  const catalogPath = resolve(root, process.env.UI_VAULT_CATALOG ?? 'catalog.json');
  const catalog = validateCatalog(JSON.parse(await readFile(catalogPath, 'utf8')));
  const allowed = catalog.components.filter(item => item.assetKind === 'source' && item.license.status === 'allowed');
  assert.equal(allowed.length, 20);
  const sourceIds = new Set(allowed.map(item => item.sourceId));
  assert.equal(sourceIds.size, 2);
  const sources = catalog.sources.filter(source => sourceIds.has(source.id));
  assert.equal(sources.length, 2);
  const output = await mkdtemp(join(tmpdir(), 'vault-real-offline-'));
  let connections = 0;
  const proxy = createServer();
  proxy.on('connect', (request, socket) => {
    connections++;
    console.log(`Denied origin connection: ${request.url}`);
    socket.end('HTTP/1.1 503 Service Unavailable\r\nConnection: close\r\nContent-Length: 0\r\n\r\n');
  });
  await new Promise(resolve => proxy.listen(0, '127.0.0.1', resolve));
  const proxyUrl = `http://127.0.0.1:${proxy.address().port}`;
  const priorFetch = globalThis.fetch;
  let fetchAttempts = 0;
  globalThis.fetch = () => { fetchAttempts++; throw new Error('Offline test prohibits fetch'); };
  try {
    // Real upstream identities from the catalog; the controlled proxy denies egress.
    // This proves offline recovery under denied access, not a natural upstream outage.
    for (const source of sources) {
      await assert.rejects(exec('curl', ['--silent', '--show-error', '--max-time', '4',
        '--noproxy', '', '--proxy', proxyUrl, source.upstreamUrl]), error => {
        console.log(`Origin inaccessible: ${source.id} ${source.upstreamUrl}; curl=${error.code}; ${error.stderr.trim()}`);
        assert.equal(error.code, 56);
        return true;
      });
    }
    let fileCount = 0;
    let totalBytes = 0;
    for (const component of allowed) {
      assert.ok(component.snapshotPath.startsWith(`archive/${component.sourceId}/${component.upstreamCommit}/`));
      assert.ok(component.files.some(file => /\.(tsx?|jsx?|css)$/.test(file.path)));
      const options = { catalog, componentId: component.id, archiveRoot: root,
        destination: join(output, component.sourceId, component.id.split(':').at(-1)) };
      const first = await restoreComponent(options);
      assert.equal(first.created.length, component.files.length);
      assert.equal(first.unchanged.length, 0);
      const before = new Map();
      for (const file of component.files) before.set(file.path, await stat(join(options.destination, file.path)));
      const second = await restoreComponent(options);
      assert.equal(second.created.length, 0);
      assert.equal(second.unchanged.length, component.files.length);
      for (const file of component.files) {
        const path = join(options.destination, file.path);
        const bytes = await readFile(path);
        const after = await stat(path);
        assert.equal(bytes.length, file.size);
        assert.equal(digest(bytes), file.sha256);
        assert.equal(after.ino, before.get(file.path).ino);
        assert.equal(after.mtimeMs, before.get(file.path).mtimeMs);
      }
      fileCount += component.files.length;
      totalBytes += first.bytes;
      console.log(`Restored twice: ${component.id}; commit=${component.upstreamCommit}; files=${component.files.length}; bytes=${first.bytes}; unchanged=${second.unchanged.length}`);
    }
    assert.equal(fetchAttempts, 0);
    assert.equal(connections, sources.length);
    console.log(`Real offline collection: sources=${sources.length}; components=${allowed.length}; files=${fileCount}; bytes=${totalBytes}; fetchAttempts=${fetchAttempts}; output=${output}`);
  } finally {
    globalThis.fetch = priorFetch;
    await new Promise((resolve, reject) => proxy.close(error => error ? reject(error) : resolve()));
  }
});
