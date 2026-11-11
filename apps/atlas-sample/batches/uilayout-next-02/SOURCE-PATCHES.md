# Source adaptations included in this archive (not originals/)

This package’s `src/` demos and helpers are the build recipe. The following
already-proven preview corrections are included here so a clean `npm ci && npm run build`
does not drop them. `originals/` is unchanged historical upstream source.
This is not a claim that a rebuild is byte-identical to the current atlas
production runtime.js.

## timeline-animation (src/components/ui/timeline-animation.tsx + src/styles.css)

`TimelineAnimation` sets `data-timeline-visible-first` to `entered` or `waiting`.
CSS scoped to `body[data-demo="timeline-animation-index"]` keeps
`opacity:1` and `filter:none` so first-screen content stays readable; IO
entry does not remove the protection. Fade and blur are intentionally
cancelled; original movement delays remain. Other demos in this batch are
not selected by that selector.

## mac/genie-effect (src/demos/mac/genie-effect.tsx)

On snapshot failure the dock is not enabled via `onReady([])`. A
`role="alert"` with `data-genie-snapshot-error` explains that original
window snapshots could not be prepared and to reload to retry. Successful
snapshot behaviour is otherwise unchanged. See also genie-effect.PATCH.md.
