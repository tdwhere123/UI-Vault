import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { validateCatalog, searchCatalog } from '../../dist/packages/core/src/index.js';

const assets = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/app.js', ['app.js', 'text/javascript; charset=utf-8']],
  ['/style.css', ['style.css', 'text/css; charset=utf-8']],
]);
const publicDirectory = fileURLToPath(new URL('./public/', import.meta.url));
const csp = "default-src 'none'; script-src 'self'; style-src 'self'; connect-src 'self'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'";
function respond(response, status, body, contentType = 'application/json; charset=utf-8') {
  response.writeHead(status, {
    'Content-Type': contentType, 'Content-Security-Policy': csp,
    'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-store',
    'Referrer-Policy': 'no-referrer',
  });
  response.end(typeof body === 'string' || Buffer.isBuffer(body) ? body : JSON.stringify(body));
}

// The caller supplies the restore package's verified reader, never a raw file read.
export function createExplorer({ catalogPath, readSource, port = 4173 }) {
  return createServer(async (request, response) => {
    const address = request.socket.localAddress;
    const actualPort = request.socket.localPort ?? port;
    const validHosts = new Set([`127.0.0.1:${actualPort}`, `localhost:${actualPort}`, `[::1]:${actualPort}`]);
    if (!validHosts.has(request.headers.host) || (address && !['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(address))) {
      respond(response, 403, { error: '仅允许本地访问' }); return;
    }
    if (request.headers.origin && ![...validHosts].some(host => request.headers.origin === `http://${host}`)) {
      respond(response, 403, { error: '拒绝跨来源请求' }); return;
    }
    if (request.method !== 'GET') { respond(response, 405, { error: '只读 Explorer，仅支持 GET' }); return; }
    try {
      const url = new URL(request.url, 'http://localhost');
      const asset = assets.get(url.pathname);
      if (asset) { respond(response, 200, await readFile(resolve(publicDirectory, asset[0])), asset[1]); return; }
      if (!['/api/catalog', '/api/components', '/api/source'].includes(url.pathname)) {
        respond(response, 404, { error: '未找到' }); return;
      }
      const catalog = validateCatalog(JSON.parse(await readFile(catalogPath, 'utf8')));
      if (url.pathname === '/api/catalog') { respond(response, 200, catalog); return; }
      if (url.pathname === '/api/components') {
        const query = Object.fromEntries(['query', 'category', 'sourceId'].map(key => [key, url.searchParams.get(key) ?? '']));
        respond(response, 200, searchCatalog(catalog, query)); return;
      }
      if (typeof readSource !== 'function') { respond(response, 503, { error: '安全源码读取入口未接通' }); return; }
      const result = await readSource(catalog, url.searchParams.get('id') ?? '', url.searchParams.get('path') ?? '');
      respond(response, 200, { text: result });
    } catch {
      respond(response, 422, { error: 'catalog 或源码读取失败；请核对本地登记、快照及校验结果' });
    }
  });
}
