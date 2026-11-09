# Maki · offline original SVG browser

One existing family `maki:cartographic-poi-family`, 215 original SVG files from fixed revision `28e2a3602e4bde033a1dd388e86e9c117b425e34`. This is the entire `icons/*.svg` directory at that commit, not all future Maki versions. The host search/pagination/detail controls are newly authored; the icon geometry is original, not redrawn.

## Source and rights
Full upstream CC0 text is LICENSE.txt. Every original UTF-8 file is preserved verbatim in ORIGINALS.json, with source path, Git blob SHA1 and SHA256. PROVENANCE.json also records the source commit and complete inventory. The runtime contains the same original text for offline rendering; it is not base64, binary, an image substitute or a remote font. CSS preview size/color does not edit original paths. All 215 use only SVG+path elements, no script, events, style, links, use or external resources.

CC0 provides no trademark/patent/third-party rights guarantee. Names cover general map POI, sports and religious/geographic signs; no identified brand-specific glyph was included as an exception. This viewer conveys no endorsement, services or medical/official status. No location permission or map service is used.

## Viewer
Search English source names, 30 tiles per page, select/enlarge, 15/30/45px display and color preview. No clipboard writes, downloads, network, timers, storage, Workers, permissions or external fonts. Hidden pages defer rendering; pagehide or atlas:dispose releases listeners and DOM. Invalid XML/data and runtime createElement/importNode errors fail closed and release all listeners/cache/DOM. Grid clicks are delegated once: no per-tile event bindings. Tests exercise 100 search/page/selection/reset cycles with exactly 10 fixed application listeners and zero disconnected listener targets. Empty/no-results and reset are supported.

Exactly seven public text assets: index.html, runtime.js, runtime.css, ORIGINALS.json, PROVENANCE.json, LICENSE.txt, README.md. Tests and manifest are separate integration evidence. DOM/source tests are not browser pixel verification; no screenshot or cover was produced.

## Host license
MIT License, Copyright (c) 2026 UI-Vault viewer contributors.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
