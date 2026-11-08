# UI Layouts pending batch: offline audit

No browser QA performed in this pass. Accepted count remains 0 of 15. Runtime assets frozen; this file is not acceptance evidence.

## Archive checks
All three source.zip archives pass ZIP integrity. Each contains 62 files, including 20 upstream demo originals, LICENSE, ADAPTATION.md, package.json and package-lock.json. Locks have no local file:/workspace/tmp references or linked package entries. Build entry is vite build. Existing production IIFE builds succeeded; clean-environment npm ci/rebuild has not been repeated in this pass. Current archives contain unused demos too; production entries select only five demos per batch.

## Findings requiring action before acceptance
- timeline-animation/index.tsx still loads a remote Google Noto animated fire GIF. Replace with disclosed local neutral decoration or preserve original only with its applicable license; current runtime is not completely offline.
- Unused clip-path demo still references Pexels MP4. It is not in any runtime entry. Remove unused adapted demo from final minimal source package or clearly document it is not a packaged runnable example.
- creative-hover-card explicitly credits Cruip tutorial. Verify original tutorial license before redistribution; repository MIT alone should not silently erase source attribution.
- framer-horizontal-scroll explicitly says based on Cole Turner gist. Check its licensing/provenance before acceptance.
- Shared CSS contains /noise.gif reference. Check whether any accepted demo uses the class; remove unused reference or supply licensed asset.
- mac-genie uses html-to-image and canvas snapshots. Initial desktop and hover were observed earlier, but opening/minimizing/restoring windows was not verified before browser failure. Do not count it yet.

## QA priority and core pass criteria
1. mac-genie-effect: open two distinct windows, drag, minimize to dock, restore; screenshot capture errors and stalled animations are failures.
2. swapy-handle: drag handle swaps actual panels, other content is not an accidental drag handle; verify subsequent swap still works.
3. linear-modal-standalone: open form, interact with fields/choice controls, escape or close and reopen; no real submission.
4. nested-vaul-drawer: open parent, open child, dismiss child independently, dismiss parent, keyboard focus usable.
5. sticky-hero-scroll: scroll both ways through complete transition; text/image readable and no trapped page.
6. repeat-scroll: complete section transition and reverse; retain only if genuinely different from existing stacked-scroll examples.
7. drag-items: drag at least two independent objects, inspect collision/bounds or ordering as provided; distinguish from current drag examples.
8. timeline-animation: localized asset first; scroll reveal and final stage, no broken media.
9. responsive-header: expand, switch item, collapse, narrow width; exclude if merely basic menu styling.
10. image-reveal: pointer movement/reveal and leave reset; exclude if duplicates existing reveal card.
11. raws-color-picker: select/edit and verify actual preview updates; include only if complete useful interaction, not ordinary form.
12. animated-logo-footer: scroll/hover effect and links layout; may be reference rather than refined component.
13. product-card4: examine actual meaningful actions; static product card is not enough.
14. creative-hover-card: provenance check first; likely duplicate hover treatment, low priority.
15. framer-horizontal-scroll: provenance check first, then full vertical-to-horizontal progression; do not count if redundant.

All outgoing demo links are references, not assets; do not follow purchase/sponsor/social actions during QA. No shared browser, server, main tree or published assets changed by this audit.

## Closure repair completed
Three isolated batches rebuilt successfully. Remote Noto GIF replaced by plain decorative text star (disclosed), unused adapted demos removed, Cruip/gist-credited entries removed from runtime and source ZIP pending licensing. Runtime scan confirms no fonts.gstatic.com, Pexels video, or noise.gif. Original research files remain outside distribution; selected upstream originals preserved in ZIP. Source archives repacked and ZIP integrity passes. No browser QA; accepted remains empty. Runtime changes exist only in isolated delivery, not preview or production.
