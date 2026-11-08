# Blode · Reading markers

Existing candidate blode:markers; update that entry rather than count another family.
Fixed source: https://github.com/mblode/experiments/tree/d4baef572c4e692dcfe5f3a1e424e641d6013b18/app/markers
Original files: markers-block.tsx and markers.module.css. Upstream MIT full text in LICENSE, actual runtime dependency licenses in THIRD_PARTY_NOTICES.txt.

Preserves original document scroll progress calculation, 120px reveal threshold, proportional chapter-marker positions, fixed edge rail, hover/focus label reveal, click-to-scroll and reduced-motion auto versus smooth scroll behavior. The CSS module is unchanged and bundled with esbuild's CSS module naming. The one code fix retains both initial RAF IDs so unmount can cancel the first AND second scheduled measurement.

Local adaptations: tiny cn class joiner instead of importing the whole application helper; standalone article typography/host with original CSS variables; original Lorem Ipsum data replaced by five sections of clearly authored local reading-guide prose. No external documents, invented user/project facts, network services, binary assets, fonts or images are included. The actual original React component logic is retained rather than recreating the UI from a screenshot. React root unmounts on pagehide and triggers scroll/resize listeners and queued frame cleanup.

IMPORTANT responsive behavior: original CSS hides chapter indicators at <=820px. The reading-progress rail remains. This delivery does NOT claim mobile still shows chapter ticks. Above that breakpoint labels reveal on hover/focus as designed. Progress is document-relative inside the lazy-loaded iframe; no attempt is made to track the parent catalog's scroll.

Verification: production IIFE build/parse and actual delivered React runtime in opaque-origin JSDOM. Document scrollHeight/viewport/section rectangles are controlled fixtures; scrollIntoView records target and behavior rather than moving a real browser. Tests check five chapters, initial hidden/non-tabbed markers, 25% progress at known scroll, chapter proportions, focusable reveal, actual focus and correct chapter click target, resize reposition, zero-scrollable-height gives scaleY(0) not NaN, hide-again, pagehide unmount and no remaining scroll/resize listeners. Repeated with reduced-motion=true to verify auto scrolling. No errors/fetch. These are algorithm/data/DOM checks, NOT pixel acceptance: real browser scroll geometry, hover visuals, typography/mobile and full accessibility remain UNVERIFIED. Explicit head supports host CSP injection.
