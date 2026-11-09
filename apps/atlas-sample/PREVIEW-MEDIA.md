# Fixed preview raster assets

`runtime.assets` is an optional, reviewed static inventory, not a URL discovery API:

```js
assets: [{key:'AlphaBar.png', path:'batches/svgedit-01/assets/jgraduate/AlphaBar.png',
  mime:'image/png', bytes:1699,
  sha256:'f0e21c8d7b3f45aee7bc9bc004f05e1662d761c27eb0aa1ffe84b986999267e4'}]
```

Register an entry only after the original asset is legitimately present in the repository and its license is checked. No encoded binary payloads, proxying or remote URLs. The host fetches without credentials, rejects redirects, verifies MIME, exact byte length, raster signature and SHA-256, then supplies `window.__atlasAssets[key]` as a read-only Blob URL mapping before the preview script executes. Preview adapters explicitly use that mapping; direct-open pages may retain their original same-directory fallback. There is no automatic textual URL replacement.

Limits: 64 files, 1 MiB per file, 8 MiB aggregate per mounted preview; PNG/GIF/JPEG/WebP only. All declarations validate before any media fetch. Responses are read incrementally and cancelled on overrun. A failed batch releases earlier Blob URLs. Frame release, stale completion, cancellation and compose failure release all owned media. Existing pool visibility behavior releases hidden/offscreen frames. Blob bytes are not added to the persistent text cache.

The iframe sandbox, CSP, script budget and live-card cap remain unchanged. This mechanism is not visual QA and does not make an unverified component complete. Source artwork, licensing and actual render checks remain separate responsibilities.
