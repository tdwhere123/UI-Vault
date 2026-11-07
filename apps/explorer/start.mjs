import { fileURLToPath } from 'node:url';
import { createLocalExplorer } from './local-explorer.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const server = createLocalExplorer({ root });
server.on('error', error => { console.error(`Explorer 启动失败：${error.code ?? '未知错误'}`); process.exitCode = 1; });
server.listen(4173, '127.0.0.1', () => console.log('Explorer: http://127.0.0.1:4173（只读，不执行第三方源码）'));
