# Manual preview capture processing

This tool never controls a browser. A human/computer-use operator must open the real gallery detail and confirm the component actually renders inside `#demo`. One preview at a time; return to the gallery or leave the detail to release it.

Requires Python 3 and Pillow. No package or shared entry changes are needed.

Create an external JSON specification (never commit screenshot absolute paths):

```json
{
  "id": "astryx:ai-chat",
  "screenshot": "/external/path/to/real-screen.png",
  "screenshot_status": "captured_render_confirmed",
  "rect": [100, 200, 1000, 600],
  "viewport": {"width": 1440, "height": 1000},
  "actions": ["Opened gallery detail; confirmed #demo rendered", "Returned to gallery after capture"],
  "render_state": "Describe actual visible content, not an assumed state",
  "failure_reason": null
}
```

`rect` is x/y/width/height in screenshot image pixels, not necessarily CSS pixels. Viewport width/height are observed browser CSS pixels. Coordinates above are illustrative, not approved crops. Record browser zoom/device pixel ratio in viewport if relevant.

```sh
python3 tools/thumbnail-capture/image_record.py --repo "$PWD" --scratch /external/evidence-directory --spec /external/actual-capture.json
PYTHONDONTWRITEBYTECODE=1 python3 -m unittest discover -s tools/thumbnail-capture -p 'test_*.py' -v
```

Outputs:
- New `apps/atlas-sample/thumbnails/<source>--<component>.webp`: 680×440, strictly below 250000 bytes. Explicit crop is center-trimmed to output aspect then isotropically resized, never stretched. Review fitted crop before accepting composition. Upscaling is possible for small regions; inspect readability rather than assuming success.
- New `reports/thumbnail-capture/records/<source>--<component>.json`: ID, relative image path, source screenshot SHA-256, requested rect, exact fitted crop box, source/output dimensions, quality, bytes, output hash, viewport/actions/render state and separate screenshot/compression statuses. No source machine absolute paths are copied into the record. Output is render-capture evidence only; interaction acceptance is always `not_tested`.
- External scratch `raw-evidence/<slug>-<sha256>.source`: byte-identical raw screenshot. Pillow detects format by content. These are outside the repository and not part of cover count; retain alongside the external spec.

A failed screenshot specification uses `screenshot_status: "failed"` and a non-empty `failure_reason`, plus explicit viewport/actions/render_state; it writes only a failure record, no cover. Do not fabricate a screenshot file for unsupported rendering. A preexisting record or image blocks processing. IDs use lowercase `source:component` with letters/digits/hyphens only; path traversal and target symlink escapes are rejected.

Exclusive creation never overwrites files. I/O interruption can leave newly written raw evidence or image without a record; inspect and report rather than auto-delete/overwrite/retry. Compression failures raise an error and do not create a success record. Synthetic unittest artifacts exist only in temporary directories and are never real covers. A static image cannot establish full dynamic, WebGL, audio, pointer or keyboard behavior.

Before delivery, review actual pixels, verify new-only diff allowlist, run the requested build/export checks, and report success/failure/unprocessed independently. This preparation alone is not delivery and must not be committed as completed covers.

For wide two-column previews specify `"fit": "contain", "background": [255,255,255]`. The entire explicit rectangle is uniformly resized and centered on a plain canvas; mapping records the content dimensions, offsets and padding color. No columns are discarded. Default `cover` preserves the prior center-trim behavior. `cover_visual_review` stays pending until a separate human/parent review. Optional detail_url, baseline and resource_verification preserve capture provenance; never put private absolute paths in those fields.

When CSS viewport is unmeasured use `"viewport": {"width": null, "height": null, "status": "unknown"}`. Actual screenshot pixels are independently recorded as source_dimensions.
