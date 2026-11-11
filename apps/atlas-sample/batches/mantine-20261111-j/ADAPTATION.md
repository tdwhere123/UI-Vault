# Adaptation

Official source in `originals/` is unchanged. `src/entry.tsx` is preview engineering:
- MantineProvider uses a memory color-scheme manager and `forceColorScheme="light"` so the preview does not read or write localStorage.
- Theme fontFamily is system UI only; no remote font is fetched.
- The prebuilt `runtime.js` / `runtime.css` can run the preview without the host media bridge.
- `package.json` lists only this item's direct bare imports taken from the esbuild metafile of `src/entry.tsx` and official sources. It is not a batch-wide fixed list.
- `dependency-lock.json` and `THIRD-PARTY-LICENSES.md` cover the actual compile graph from that metafile, including transitive packages and distinct rights holders.
- Rebuilding `build.mjs` must resolve only from this package's declared dependencies (and their locked, already-cached closure). Do not borrow an upstream work tree's extra node_modules. This zip is not a self-contained offline install tree and does not include node_modules.
- Links and forms are official placeholders. This is not a business-success claim, login, mail, upload, or consent.
