# Original DMN decision-table workspace

Existing `dmn-js:decision-table-editor`. Full original Check Order 4-rule/2-input/2-output fixture in official dmn-js18.0.2 decision editor, including editable FEEL cells, annotations, hit-policy and context editing UI. No empty table or fabricated backend.

Actual complete fixed source and official matching-version npm editor, dependencies pinned in private lockfile. Complete bpmn.io license, MIT/ISC package texts and OFL glyph attribution. Watermark code/link is unmodified and visible in its original placement; no host control overlays.

Critical lifecycle correction transparently recorded in SOURCE: original shared LiteralExpression lacked CodeMirror teardown and propagated programmatic setValue back into modeling, destroying redo. Add unmount/disposed/sync guards only, retaining original editor and modeling.

Tests run actual ui-vault-547 composePreview with ordered plain scripts: original table, actual CodeMirror transaction edit then undo/redo, real annotation input, hostile plaintext paste, hidden snapshot/resume, reset, old callbacks/nodes after exit, all resource ledgers zero. No eval/Function/network/storage.

- JSDOM controlled geometry/innerText fixtures, not native browser typography, pointer precision, accessibility or pixel verification.
- Only original decision table editor is exposed, not whole DMN DRD/literal/boxed suite. No decision execution, cloud/storage saving, file import/export or external service.
- Hidden rebuild preserves committed local XML but resets undo history and in-progress uncommitted field state.
- Original bpmn.io watermark and links retained under mandatory license condition. Cannot remove or cover it in downstream reuse.
- dmn-font original SVG outlines converted to OFL CSS masks rather than binary font; system body font.
