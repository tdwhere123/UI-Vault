import {build} from 'esbuild';import fs from 'node:fs';
await build({entryPoints:['src/host.ts'],bundle:true,alias:{'@irojs/iro-core':'./src/core/index.ts'},format:'iife',outfile:'delivery/runtime.js',minify:true,legalComments:'inline',jsxFactory:'h',jsxFragment:'Fragment',define:{VERSION:'"5.5.2"'},metafile:true}).then(r=>fs.writeFileSync('metafile.json',JSON.stringify(r.metafile,null,2)));
fs.copyFileSync('style.css','delivery/runtime.css');fs.copyFileSync('index.html','delivery/index.html');
