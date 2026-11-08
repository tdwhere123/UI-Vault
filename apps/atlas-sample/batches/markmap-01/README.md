# Local Markdown workbench

Original Markmap v0.18.9, fixed commit 4247555f57017ffc9297e5e5e031c4119de3ebaf, MIT ©2020 Gerald. Official owner markmap/markmap (formerly gera2ld/markmap). Original packages retained in the local delivery. This is a single document-authoring scene, not one item per fixture.

Actual runtime Transformer from markmap-lib/no-plugins with Transformer([]), followed by original Markmap SVG layout/rendering. The editor updates headings/lists to tree nodes; source text is never executed. All plugins disabled, raw HTML/linkify disabled, markdown-it image/link/autolink/html rules disabled. Each generated node content additionally passes through inert template textContent extraction then HTML escaping; payload removed. Thus foreignObject contains plain text, not user markup. Limit 12000 characters. No assets/getUsedAssets/loadJS/loadCSS are invoked. No autoloader. Two local original note fixtures.

Original view handles branch folding, pan, zoom, fit, 250ms transitions. Host has update/fixture/zoom/fit/mount controls and pagehide cleanup. Cleanup interrupts root and descendant D3 transitions using original instance, then calls original destroy; async update uses generation guard. Tests cover malicious image/link/rawHTML attempts and confirm no resource requests.

Bundled markmap-common retains an unused UrlBuilder CDN-probe fetch method and CDN URL constants; it is not reachable from UI and no asset/plugin methods are called. No network request occurs in tested initialization, editing or hostile inputs. Do not enable resource/autoload plugins or broaden CSP. Runtime requires no eval/new Function/Worker/WASM.

Build: npm ci --ignore-scripts; node build.mjs. Test uses JSDOM path in source/test.mjs. DOM validation uses mocked SVG geometry, not actual visual layout. D3 scheduler is allowed 50ms after immediate mid-zoom destroy to settle global housekeeping; all timers/RAF and observer targets clear. Browser pointer gestures, pixel layout and motion remain unverified. No visual acceptance claimed.

All runtime dependency notices, including bundled d3-flextree, npm2url and jsx-dom included. No backend, storage, upload or real personal content.

Published assets are the actual runtime, notices and test evidence. The complete build/source tree remains in the local delivery; no source ZIP download is claimed.
