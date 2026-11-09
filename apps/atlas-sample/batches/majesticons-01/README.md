# Majesticons · complete fixed-version line / solid browser

One existing family `majesticons:official-series`: 380 base names, two styles and 760 SVG files. Complete `line/` and `solid/` directories of halfmage/majesticons at `c4b63e565fd03be0bdc9da578da1e52efbcd8856`, not a claim about future versions. The browsing shell is original UI-Vault code, not an upstream official application. No glyph variants are counted as separate UI entries.

## Original artwork and rights
All 760 UTF-8 SVG texts are preserved verbatim in ORIGINALS.json, with source paths, exact Git blob hashes, SHA256, style and rights annotations. Each source byte sequence matches the fixed official tree. PROVENANCE.json contains the acquisition and complete per-file verification. LICENSE.txt is the complete upstream MIT license. No geometry, fill, stroke or SVG source attribute is changed.

SVG files are rendered as individually isolated image documents using `data:image/svg+xml;charset=utf-8,` plus percent-encoded original text. This is readable vector text encoding, not base64 or binary packaging. Internal clipPath `id=a` references remain within their own image, never joined in a shared inline SVG DOM. XML safety checks allow only approved shape/defs/clipPath tags and attributes; all resource references must resolve to an internal ID. No scripts, foreignObject, external references, font or remote image are used. White backing supports original black/default currentColor. No color override control is supplied.

Technology/product and cryptocurrency names such as bluetooth, chromecast, iphone-old-apps, iphone-x-apps, bitcoin-circle, etherium-circle (original spelling) and usb have explicit detail notices. MIT does not grant trademark rights, imply endorsement, or provide financial/investment advice. Names are preserved, not renamed as generic originals.

## Controls and boundaries
Search source names, 24 base names per page, choose a tile, switch its line/solid style, change display size, inspect enlarged image and readonly exact SVG source. Reset restores line style/search/page/selection. The shell never writes to clipboard, downloads, stores data, executes user code or contacts a service. Browser default copy of readonly text is not an application clipboard action.

Hidden pages defer rendering until visible, preserving state. pagehide and atlas:dispose clear the host, abort owned listeners and release the SVG cache. Synchronous setup failures and later rendering failures show an explicit stop message and clear listeners. Old detached controls cannot revive the view. There are no application timers, RAF loops, observers or Workers.

## Verification
`python ui-majesticons-browser-adapt/build.py`
`node ui-majesticons-browser-adapt/test.mjs`
`python ui-majesticons-browser-adapt/package.py`

Tests use the actual ui-vault-536 composePreview and its unchanged CSP. They verify all 760 rendered image URI decodes equal original SVG text, and parsed XML trees/attributes equal originals; both styles and all 16 pages per style are traversed. 100 repeated search/page/selection/reset/style cycles keep a bounded fixed listener count and no disconnected listener targets. Malicious query strings stay text; source is readonly; brand notices, hidden resume, early DOM-creation failure, late image-creation failure and disposal are exercised. All owned event listeners return to zero; network/storage/eval/Function/Worker/timer/RAF calls are trapped. JSDOM does not enforce browser CSP or validate image rasterization: pixels, clip rendering, native keyboard defaults and visual appearance remain unverified. No screenshot or cover exists.

Seven public text assets only. Build/tests and adaptation source remain local, not falsely advertised as a public source archive.

## Original viewer code license (does not replace upstream artwork notice)
MIT License
Copyright (c) 2026 UI-Vault viewer contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
