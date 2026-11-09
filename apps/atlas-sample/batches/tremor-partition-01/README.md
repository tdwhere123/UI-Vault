# Tremor Blocks · original partition allocation example

Fixed source: https://github.com/tremorlabs/tremor-blocks/blob/b319e8d3d3678a4f60f4802f7e85bc1abc52d598/src/content/components/billing-usage/billing-usage-10.tsx

One existing `tremor-blocks:partition-allocation`. Original System/Data30/70 input and Slider composition, decorative split icon, ring/shadow framing, labels and control layout are preserved. It is a local fixed100GB example, not a real capacity reading, partitioning service or database creation workflow. Apply/Cancel had no upstream handlers: they are visibly disabled, not falsely presented as working actions.

## State and adaptation
Names remain editable. Either numeric field or original Radix slider updates the other to total100. Original empty-input conversion Number('')=0 is retained. A finite-number guard prevents NaN/Infinity entering state; values clamp0–100. Browser invalid number text normally becomes empty. Fractions entered in fields remain permitted as upstream; sliders step by1. IDs and aria-describedby units are unique, text and slider labels added without changing visual composition. GB remains the original unit.

Original Button/Input/Label/Slider/cx and Tailwind config/global styles are retained. Unverified JetBrains font-face removed; system sans fallback and simple host padding used, no font download. Build-time forms plugin includes only original percent-encoded SVG controls, no binary fonts/media. Reduced-motion CSS stops transitions. No network, storage, eval, Worker, clipboard, submission or real disk operation.

Radix useSize's original observer can partially initialize before observe throws. A minimal source patch cleans up that path, ignores callbacks after unmount, disconnects the observer and sends genuine callback errors to the error boundary. Original slider state/geometry is not rewritten. Hidden unmount resets names and allocation to original30/70 on return. pagehide/atlas:dispose and terminal failure remove precisely captured root/global handlers. React invalid handlers may remain on detached INPUT nodes retained by the test ledger; counts are reported and old events are inert, never described as all-listener zero.

## Verification
`node ui-tremor-pair-local/partition/build.mjs`
`node ui-tremor-pair-local/partition/test.mjs`
`python ui-tremor-pair-local/partition/pack.py`

Actual ui-vault-543 composePreview with unchanged CSP. Six modes cover real input updates, empty/invalid/out-of-range/fractional values, original Radix ArrowRight/ArrowUp/Home/End keyboard handlers, name editing, complementary totals, unique units IDs,100 edits, hidden reset/old nodes/late observer callbacks, early disposal, actual DOM initialization and late rendering failures, observer-constructor and partial-observe failure. Owned global/connected-root listeners, observers, timers and RAF end at zero; forbidden API traps remain untouched. JSDOM observer/geometry fixtures do not prove native pointer dragging, browser pixels, keyboard defaults or actual CSP enforcement. No visual acceptance/screenshot/cover is claimed.

## Licenses and source scope
Root MIT full text, every positive-emission runtime package license and separate build CSS/plugin notices are combined in LICENSE.txt. Remix React4.6.0 package declares Apache2 but lacks LICENSE and its npm gitHead raw is unavailable; official v4.6.0 fixed commit8bc436bdd329cf342958d8effdd078bfa74354c6 has full Apache2 and all five imported icon path sets match package text, including split-cells-horizontal. This does not use or claim the latest Remix license. Radix packages omit LICENSE; complete fixed monorepo MIT supplemented transparently. Exact versions and notice sources in SOURCE.json; parsed/installed unused packages are not called runtime dependencies. Full originals, patches, build/tests remain local, not falsely advertised as a public source ZIP. Seven public text files only.
