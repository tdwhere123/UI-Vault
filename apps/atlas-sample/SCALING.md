# Bounded preview lifecycle

- Search/classification runs over the full inventory; only12 cards are created per page. Pagination preserves the active query/facets. Returning from detail leaves the page and scroll position intact.
- IntersectionObserver starts only visible cards. At most6 live card documents exist. Offscreen cards, hidden tabs and the hidden collection are released to about:blank, stopping their animation timers rather than merely hiding CSS.
- Detail owns one independent iframe. Switching to source, navigating away or hiding the browser tab releases it. Source fetch happens on demand and is aborted on navigation.
- Shared runtime text uses an8MiB/20-entry LRU cache. Failed loads can retry. Generation tokens prevent late async work from remounting a released iframe.
- Every frame stays sandboxed with allow-scripts only. Per-batch resources are read by the parent and embedded into opaque srcdoc with no network access. No same-origin escape is added.

## New batch contract

Add `runtime:{key,css,js,cssHref,scriptSrc}` to an item. `css`/`js` are same-origin artifact paths, e.g. batches/magicui-01/runtime.css. `cssHref`/`scriptSrc` are the exact local names in the light HTML entry. Use a production IIFE, not ESM; include registry animation rules and test their computed motion in a browser. Split large cohorts into6–8-component runtime groups. Do not place200 components in one bundle.

Legacy first-four items have a compatibility runtime definition and their source/assets remain unchanged. Optional batches/ is copied by the static exporter, and every declared preview/code/download/runtime path must exist. Count is derived from unique material identities, not hardcoded to24 or inflated to200.

The lifecycle tests simulate240 records, viewport entry/exit, active-frame caps, hidden state, cache eviction, failed retries, stale resolution and detail release. They do not replace real visual/interaction QA.
