# Akar · complete fixed-version original SVG browser

One existing family `akar-icons:official-series`, all 454 original SVG files in `artcoholic/akar-icons/src/svg/` at fixed commit `a88023a51bfc3cb86c3bbb3db8fce39b1a58729b`. This is a file/glyph count, not 454 distinct semantic concepts or UI entries. There is no invented style system or style toggle. Case-sensitive names and original aliases remain intact, including linkedIn/linkedin variants, receipt/reciept and shipping-box variants.

## Sources and rights
Official fixed-commit codeload archive, only 454 original text SVG and root LICENSE extracted. All original bytes independently match the untruncated fixed Git tree blob hashes. ORIGINALS.json preserves each original SVG text plus path, SHA256 and Git blob hash. PROVENANCE.json contains full acquisition/source mapping and XML audit. LICENSE.txt is the full upstream MIT notice for Arturo Wibawa. No SVG path, geometry, fill, stroke or source attribute is modified.

Each original UTF-8 SVG is percent-encoded into its own image data URI, not base64 or encoded binary. Internal clipPath IDs are isolated within individual SVG image documents; shared id strings cannot collide in a common inline DOM. Runtime uses an exact tag/attribute allowlist, rejects scripts/foreignObject/external resources, rejects duplicate internal IDs and requires full-value url(#id) references to close locally. White backing accommodates original default black/currentColor; no color override. Browser pixels and clip rendering remain unverified.

All 454 source names were reviewed. Brand/product/technology/cryptocurrency-associated names are flagged in selection details, including AirPlay/AirPods, Android, Angular, Bluetooth, technology shields, Octocat, all original LinkedIn variants and other platforms. This is not exhaustive trademark clearance. MIT covers copyright use, not trademark authorization, endorsement or investment advice. All original names remain unchanged. The browsing shell is newly authored, not an upstream official application.

## Local viewer
Search original names, paginate 24 per page (19 pages), select an enlarged symbol, choose display size and read exact readonly SVG source/hash/path. Reset restores default size36/search/page/selection. Hidden pages defer painting and preserve state; final pagehide/atlas:dispose abort owned listeners, clear DOM and release the SVG cache. Setup or render exceptions stop safely with a visible message. No network, clipboard writes, downloads, storage, font, timers, RAF, Worker or executable user code.

## Verification
`python ui-akar-local/build.py`
`node ui-akar-local/test.mjs`
`python ui-akar-local/package.py`

Tests use actual ui-vault-537 composePreview with unchanged CSP. All 454 rendered image URI values decode byte-for-byte to their originals and parsed XML element/attribute trees match. 100 search/page/selection/reset cycles retain a bounded fixed listener count and no disconnected listener targets. Tests also cover malicious query strings, selection source, flagged name notice, size/reset, hidden resume, early DOM setup failure, late image-creation failure, early disposal and old-node events after exit. All owned listeners end at zero; network/storage/eval/Function/Worker/timer/RAF traps record no calls. JSDOM cannot verify browser rasterization, CSP enforcement or native keyboard default activation. No visual acceptance, screenshot or cover is claimed.

Seven public text assets. Build/test/adaptation sources remain local, not advertised as a public source ZIP.

## Original viewer host license (separate from original artwork notice)
MIT License
Copyright (c) 2026 UI-Vault viewer contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
