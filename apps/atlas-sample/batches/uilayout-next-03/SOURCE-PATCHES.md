# Source adaptations included in this archive (not originals/)

This package’s `src/` demos are the build recipe. The following already-proven
preview correction is included here so a clean `npm ci && npm run build` does
not drop it. `originals/` is unchanged historical upstream source. This is not
a claim that a rebuild is byte-identical to the current atlas production
runtime.js.

## color-picker/raws-color-picker (src/demos/color-picker/raws-color-picker.tsx)

`copyToClipboard` waits for `navigator.clipboard.writeText` to resolve before
the success toast. Missing clipboard API or a rejected write shows
“Copy unavailable” and instructs selecting the HEX field to copy manually.
HSV/HEX pointer behaviour is otherwise unchanged. See also raws-color-picker.PATCH.md.
