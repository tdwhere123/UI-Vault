# LaTeX.css scholarly article · offline adaptation

Original complete LaTeX.css demonstration layout by Vincent Dörig, MIT. Fixed revision: `1fbe1d74f8ca33595a1d50c677810033da40aa52`.

The original long-document HTML composition and CSS remain: abstract, nested contents, numbered theorem/proof/definition styles, paragraph and table examples, captions, footnotes and three responsive sidenotes. This is not a new editor or a formula engine.

## Explicit adaptations
- Remove all font-face resources; Georgia and Times New Roman system stacks replace Latin Modern and Libertinus. Font button retains the original class toggle and labels the actual substitute. The result is not exact LaTeX font fidelity.
- Preserve original dark-mode class toggle; add aria-pressed. Sidenote labels retain original checkbox/CSS mechanism and additionally support Enter/Space. Native label click remains. Internal links focus and scroll to real targets without relying on iframe hash navigation.
- Remove external MathJax and Prism scripts/styles. Formula examples are static Unicode/HTML expressions, not computed or typeset by an engine. Code examples are plain preformatted text, not syntax-highlighted.
- Replace quoted mathematical proofs, dictionary definition and attributed quotation with original short demonstration text. Preserve two footnote references/backlinks with accurate original-fixture notes.
- Replace the remote photograph with one original inline SVG geometric landscape, visibly labelled. No downloaded image/font or encoded binary.
- External/example links are rendered as inert text. Original documentation snippets may display URLs as text only. No fetch, storage, worker, eval, API, submission, clipboard or download behavior.
- On pagehide first disable every original native control (including sidenote checkboxes), remove all adaptation listeners, then clear document content. Detached labels cannot change old checkbox state. Startup and interaction failures perform the same idempotent cleanup, display a readable alert and retain article content. No timers, observers or async jobs are started.

## Verification and limits
Three independent JSDOM mounts passed repeated theme/font toggles, sidenote mouse/keyboard open-close, every remaining anchor target, repeated pagehide and detached native labels/buttons; additional missing-control startup, partial-listener failure, immediate exit and late interaction-failure cases verify cleanup and fallback. eval/Function/network/storage/worker/timers/RAF trapped with zero calls. Resource attributes and CSS checked for external resource paths. VERIFICATION.json describes exact scope.

Browser visual QA not run. JSDOM proves DOM/focus and scrollIntoView calls, not browser scrolling, narrow-screen side-note layout, glyph shapes or pixels. Actual system fallback fonts vary. No claim of original mathematical engine or exact font appearance.

## Source and license
https://github.com/vincentdoerig/latex-css/tree/1fbe1d74f8ca33595a1d50c677810033da40aa52

Full root MIT is LICENSE.txt. Original selected source, exact Git-blob verification, reproducible transformation script, test and local diffs are retained in the local workspace; they are not falsely advertised as a public source archive. The adaptation text/SVG and small controls are supplied under the same MIT terms. Seven public UTF-8 assets only; no screenshot or cover.
