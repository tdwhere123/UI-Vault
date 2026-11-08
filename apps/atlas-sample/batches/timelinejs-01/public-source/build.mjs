import esbuild from 'esbuild';import fs from 'node:fs';fs.mkdirSync('delivery',{recursive:true});const r=await esbuild.build({entryPoints:['main.js'],bundle:true,minify:true,format:'iife',outfile:'delivery/runtime.js',metafile:true});fs.writeFileSync('meta.json',JSON.stringify(r.metafile,null,2));
fs.copyFileSync('index.html','delivery/index.html');
