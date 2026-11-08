# Phosphor Duotone · Exodus curated 200

## Origin and permission

Official raw art repository https://github.com/phosphor-icons/core at `2b75f3ad12b420c9504ef05df8d2564a28f8500e`. Root MIT ©2023 Phosphor Icons retained verbatim. Its README explicitly identifies the repository as the raw SVG source of truth and basis of Phosphor framework ports. Only `assets/duotone/*-duotone.svg` used. No third-party logo glyphs selected. Original files, source URLs and SHA256 are retained per glyph; copy remains byte-identical.

## Scope and honest counts

200 curated distinct named artwork files, 10 categories of 20, ONE icon family. Not 200 Agent UI pages. Only Duotone weight; no regular/bold/fill/thin copies, sizes, color variants or animation states counted. Local color selector changes inherited currentColor only. Repeated base-purpose variants were avoided (for example, eye-slash and shield-warning were not included as extra states).

Phosphor and Lucide naturally share many semantics. 73 confirmed existing Lucide name/alias matches are labeled in each item's detail and index. Remaining 127 are explicitly **not audited as semantically unique**. Do not sum 200 as new unique functions on top of Lucide. Complete file/shape hashes distinguish artwork, not conceptual novelty.

## Runtime

Plain JavaScript IIFE, CSS and complete HTML with explicit head/body. Exact runtime.css / runtime.js tags support the atlas CSP/iframe composer. No React, fonts, runtime dependencies, remote assets, animation loops, model calls, storage, prompts, clipboard permission assumptions or additional iframe permissions. Mount only in the selected atlas detail, not every main card. Embedded source strings are ~238KB raw/~62KB gzip, but only36 SVG DOM trees maximum on a page; sixth page20. Selection displays source text without mounting another SVG. The original SVG is placed unchanged inside a wrapper; only rendered root accessibility attributes aria-hidden/focusable are added. Source textarea preserves original string.

Native clipboard is tried when supported; allow-scripts-only sandbox fallback selects text with clear manual Ctrl/Cmd+C guidance. No fake download link. All source provenance is displayed as text, so external navigation is not needed. Font is system fallback.

## Validation and limits

All200 SVG XML allowlist checked: no script, resource, event, href or style attributes. File hashes unique; originals copied unchanged. JS syntax check, six-page200-glyph traversal, <=36 total SVG, no animation, Chinese/English search, category/reset, empty states, selection, copy fallback, color invariance and DOM focus tested in JSDOM. Browser visual/pixel/mobile and native keyboard activation are not yet accepted. See VERIFICATION.json.

`source.zip` is a local artifact until actually published. Contains originals, index, author-written gallery source, licenses, and `build-offline.py` which recreates assets from the archive without network or packages. It is not an installed font or a mirrored entire icon library. Official upstream sparse checkout is retained outside delivery; only200 selected originals are in this delivery.
