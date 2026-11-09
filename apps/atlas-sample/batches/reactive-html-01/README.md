# Reactive Resume · original HTML sharing templates

Fixed source: reactive-resume/reactive-resume@fed8ab5aa02248b6d2198757d4608cf6a700aedf.
Original entry: `packages/pdf/src/html/web-page.tsx` + `html/document.ts`, corresponding to `apps/web/src/features/resume/share/web-page-preview.tsx`.

This restores the existing catalog ID with a **different, explicitly named official HTML branch**, not the original PDF paper-design editor. The real original `ResumeDocument`, 18 templates, React host reconciler, schema parser, semantic styling and `toHtml` draw the résumé. The original renderer merges main and sidebar sections into one responsive web layout, NOT PDF pages.

## What works
- Original 18 HTML template layouts with a populated fictional résumé: header, summary, work, education, project, skills.
- Computer/390px Phone view, template change, local name/headline/summary/accent edits, original contact-redaction helper, reset.
- All content stays in the isolated local document. No accounts, persistence, cloud save, sharing/upload/export, AI or backend success is claimed. Inputs are bounded plain text, escaped before the original rich-text rendering boundary. No user private data is supplied.

## Adaptation boundaries
The application controls and sample are authored local adapters, not the full original builder form. The original sharing view's nested iframe is replaced with a Shadow DOM document surface so the host CSP and sandbox need no expansion. Original HTML document styles are retained; width media queries become equivalent named container width queries, with a 390px phone container. This is a compatibility adaptation, not a new resume renderer. Original scripts, favicon requests, action/download/share buttons and external anchor destinations are removed from the inert rendered document.

Original font-face rules are removed and system fonts explicitly applied. No font or image binaries are embedded, encoded or fetched. Thus typography is NOT pixel-identical. Profile photo is intentionally absent. Original regular Phosphor SVG markup remains. Brands in the underlying icon library are not endorsements.

Original generated icon module imports are made eager local imports (same complete records); the large JSON map is assembled in natural Object.assign groups without changing its values. All five runtime files are complete ordinary JavaScript statements, independently parseable, with no binary/base64 packing or dynamic chunk decoding. Zod performs one `Function` capability probe, rejected under the unchanged CSP; its official non-JIT fallback still renders all 18 templates. No CSP expansion is needed or made. Hoisted functions retain mutable outer bindings through anonymous function expressions, not named self-shadowing functions.

**Still unavailable:** original PDF/WASM page rendering, PDF positioning/editing, exact downloaded fonts, exports and original full server-backed application. No claim that the earlier paper editor's Forme WASM obstacle was solved. Forme React/shared helpers emitted here are JavaScript only; the mandatory PDF WASM engine is not invoked or shipped.

## Verification
Actual `ui-vault-579` adapter, composePreview and default loader/cache used. Cache HTML/CSS/five scripts: see VERIFICATION.json (under unchanged 8 MiB UTF16 budget). Failure/retry/remount and independently sequenced scripts pass. Functional DOM tests check all 18 templates, actual edits/redaction/reset, text-injection safety, phone/computer state, hidden retention, early/missing-root/late failures, and old controls after exit. Final timers and application connected listeners are zero; JSDOM's own selector/load listeners are excluded. No requests/storage/clipboard used. The independent CSP trap audit observed exactly one denied `Function` capability probe from ZodObjectJIT, followed by the working non-JIT fallback; dynamic capability attempts are NOT claimed zero.

JSDOM tests are NOT native layout, responsive rasterization, accessibility certification or pixel QA. No native browser or screenshots were attempted. Container CSS rules are verified as rules/state only, not actual pixel positioning.

## Source and notices
Root MIT and 17 actual emitted npm dependency notices, including BSD-2/BSD-3, are complete in NOTICES.txt. Original generated Phosphor source and actual upstream npm license are attributed. Three packages omit LICENSE in npm; exact official repository root MIT at the npm gitHead is included, NOT a fabricated copyright or a claim the package contained it. SOURCE.json records the mapping and fixed source evidence.

Rebuild in this worker: ordinary npm install from package.json/package-lock.json, then `node build.mjs`, `node finalize.mjs`, copy delivery.css as runtime.css; `node legal.py`. Original files are verified by Git blob and SHA256. Builder uses esbuild 0.25.0 and Acorn 8.14.0 from the shared tooling directory. Runtime entry/adapter modifications are listed in SOURCE.json. No remote repository was changed by this worker.
