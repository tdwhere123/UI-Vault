# Tabler theme URL adaptation

This is a call-site preview adaptation, not a global History wrapper.

- Official source (`originals/`, ZIP `original.html`) keeps the upstream `window.history.pushState({}, "", url)` writes.
- Preview consumers (`*.html` or `page-*.js`, and the ZIP `preview.html` / `page-*.js` members) define `writeThemeUrl` next to those official theme URL writes.
- In opaque / `about:srcdoc` previews, the URL cannot be updated. Theme changes still apply to local display state only.
- Same-origin path: `history.pushState` runs as usual.
- Unexpected `SecurityError` is rethrown.
- `runtime.js` / `opaque-storage-adapter.js` are generated from `apps/atlas-sample/preview-adapters.mjs` and do not wrap `history.pushState` or `history.replaceState`.

This is not a claim that URL persistence succeeded in the sandboxed preview.
