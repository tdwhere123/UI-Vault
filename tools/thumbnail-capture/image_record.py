#!/usr/bin/env python3
"""Process manually captured real previews. Never opens or drives a browser."""
import argparse
import hashlib
import io
import json
import re
from pathlib import Path
from PIL import Image

LIMIT = 250000
SIZE = (680, 440)
ID_PATTERN = re.compile(r"[a-z0-9][a-z0-9-]*:[a-z0-9][a-z0-9-]*\Z")


def exclusive(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("xb") as stream:
        stream.write(data)


def safe_target(root, relative):
    path = root / relative
    if not path.resolve().is_relative_to(root.resolve()):
        raise ValueError("target escapes repository")
    if path.exists() or path.is_symlink():
        raise FileExistsError(path)
    return path


def positive_int(value):
    return type(value) is int and value > 0


def process(repo, scratch, spec):
    repo, scratch = Path(repo).resolve(), Path(scratch).resolve()
    if scratch.is_relative_to(repo):
        raise ValueError("raw evidence must stay outside repository")
    identity = spec.get("id", "")
    if not ID_PATTERN.fullmatch(identity):
        raise ValueError("invalid component ID")
    slug = identity.replace(":", "--")
    record_rel = f"reports/thumbnail-capture/records/{slug}.json"
    record_path = safe_target(repo, record_rel)
    # The filename is derived only from a validated ID, never caller input.
    relative = f"apps/atlas-sample/thumbnails/{slug}.webp"
    image_path = safe_target(repo, relative)
    viewport = spec.get("viewport", {})
    known_viewport = all(positive_int(viewport.get(k)) for k in ("width", "height"))
    unknown_viewport = viewport.get("status") == "unknown" and all(viewport.get(k) is None for k in ("width", "height"))
    if not (known_viewport or unknown_viewport):
        raise ValueError("viewport needs measured dimensions or explicit unknown status")
    actions = spec.get("actions")
    if not isinstance(actions, list) or not all(isinstance(a, str) for a in actions):
        raise ValueError("actions must be an explicit string list")
    state = spec.get("render_state")
    if not isinstance(state, str) or not state.strip():
        raise ValueError("render_state required")
    record = {"id": identity, "path": None, "status": "failed",
              "screenshot_status": spec.get("screenshot_status"),
              "compression_status": "not_attempted", "viewport": viewport,
              "actions": actions, "render_state": state,
              "interaction_acceptance": "not_tested",
              "failure_reason": spec.get("failure_reason"),
              "source_screenshot_sha256": None}
    if record["screenshot_status"] == "failed":
        if not isinstance(record["failure_reason"], str) or not record["failure_reason"].strip():
            raise ValueError("failed screenshot requires failure_reason")
        exclusive(record_path, (json.dumps(record, ensure_ascii=False, indent=2)+"\n").encode())
        return record
    if record["screenshot_status"] != "captured_render_confirmed":
        raise ValueError("explicit manual render confirmation required")
    if record["failure_reason"]:
        raise ValueError("successful capture cannot have failure_reason")
    raw = Path(spec["screenshot"]).read_bytes()
    digest = hashlib.sha256(raw).hexdigest()
    evidence = scratch / "raw-evidence" / f"{slug}-{digest}.source"
    if not evidence.resolve().is_relative_to(scratch) or evidence.resolve().is_relative_to(repo):
        raise ValueError("evidence path escapes scratch")
    if evidence.exists() or evidence.is_symlink():
        raise FileExistsError(evidence)
    with Image.open(io.BytesIO(raw)) as opened:
        image = opened.convert("RGB")
    rect = spec.get("rect")
    if not isinstance(rect, list) or len(rect) != 4 or not all(type(v) is int for v in rect):
        raise ValueError("rect must be [x,y,width,height] integer pixels")
    x, y, width, height = rect
    if x < 0 or y < 0 or width <= 0 or height <= 0 or x+width > image.width or y+height > image.height:
        raise ValueError("crop outside screenshot")
    fit = spec.get("fit", "cover")
    if fit not in ("cover", "contain"):
        raise ValueError("fit must be cover or contain")
    if fit == "contain":
        # Faithful whole-region resize on explicit neutral canvas; never synthesize content.
        background = spec.get("background", [255, 255, 255])
        if not isinstance(background, list) or len(background) != 3 or not all(type(v) is int and 0 <= v <= 255 for v in background):
            raise ValueError("background must be three RGB integers")
        box = (x, y, x+width, y+height)
        scale = min(SIZE[0]/width, SIZE[1]/height)
        fitted_size = (max(1, round(width*scale)), max(1, round(height*scale)))
        content = image.crop(box).resize(fitted_size, Image.Resampling.LANCZOS)
        offset = ((SIZE[0]-fitted_size[0])//2, (SIZE[1]-fitted_size[1])//2)
        result = Image.new("RGB", SIZE, tuple(background))
        result.paste(content, offset)
        placement = {"content_size": list(fitted_size), "offset": list(offset), "background_rgb": background}
    else:
        if width * SIZE[1] > height * SIZE[0]:
            fitted_w, fitted_h = height * SIZE[0] / SIZE[1], float(height)
        else:
            fitted_w, fitted_h = float(width), width * SIZE[1] / SIZE[0]
        left, top = x+(width-fitted_w)/2, y+(height-fitted_h)/2
        box = (left, top, left+fitted_w, top+fitted_h)
        result = image.resize(SIZE, Image.Resampling.LANCZOS, box=box)
        placement = None
    encoded = None
    for quality in (86, 80, 72, 64, 54, 42, 28, 12, 1):
        output = io.BytesIO()
        result.save(output, "WEBP", quality=quality, method=6)
        if len(output.getvalue()) < LIMIT:
            encoded = output.getvalue()
            break
    if encoded is None:
        raise ValueError("cannot meet strict byte budget; no cover or success record written")
    record.update({"path": relative, "status": "render_capture_processed",
                   "compression_status": "passed", "source_screenshot_sha256": digest,
                   "source_dimensions": list(image.size), "requested_rect": rect,
                   "fitted_crop_box": list(box), "resize": list(SIZE),
                   "fit": fit, "placement": placement,
                   "detail_url": spec.get("detail_url"),
                   "baseline": spec.get("baseline"),
                   "resource_verification": spec.get("resource_verification"),
                   "cover_visual_review": "pending",
                   "webp_quality": quality, "bytes": len(encoded),
                   "sha256": hashlib.sha256(encoded).hexdigest()})
    # Exclusive writes protect against existing work. An I/O error can leave newly
    # written evidence/image, but never fabricates a completed record; inspect before retry.
    exclusive(evidence, raw)
    exclusive(image_path, encoded)
    exclusive(record_path, (json.dumps(record, ensure_ascii=False, indent=2)+"\n").encode())
    return record


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", required=True)
    parser.add_argument("--scratch", required=True)
    parser.add_argument("--spec", required=True, help="External JSON with explicit screenshot/crop/observations")
    args = parser.parse_args()
    record = process(args.repo, args.scratch, json.loads(Path(args.spec).read_text()))
    print(json.dumps(record, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
