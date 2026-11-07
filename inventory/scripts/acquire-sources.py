"""Copy reviewed, fixed upstream files; never install or execute their code."""
import hashlib
import json
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
IMPORTS = re.compile(r"(?:from\s*|import\s*(?:\(\s*)?)[\"']([^\"']+)[\"']")
SOURCES = [
    ("agent-elements", "21st-dev/agent-elements", "b04b36cb6381a1dd1a0e86cc7c90564ddcd56d37"),
    ("bencho", "cabralorenzo/bencho", "c65992417427bb09e661674ffa800bef29adef49"),
]
AGENT_ENTRIES = [
    "error-message", "text-shimmer", "input/input-typing", "input/send-button",
    "input/suggestions", "input/attachment-button", "question/question-prompt",
    "tools/bash-tool", "tools/generic-tool", "tools/thinking-tool",
]
BENCHO_ENTRIES = [
    "ascii-wake", "escape", "eye-tracker", "folding-bill", "generate",
    "heat-word", "particles", "slosh", "step-player", "wake-slider",
]


def imports(path):
    return IMPORTS.findall(path.read_text()) if path.suffix in (".ts", ".tsx", ".css") else []


def closure(source, entry):
    pending, files, packages = [entry], set(), set()
    while pending:
        path = pending.pop()
        if path in files:
            continue
        files.add(path)
        for spec in imports(source / path):
            if spec.startswith("."):
                base = (source / path).parent / spec
                choices = [base, Path(str(base) + ".ts"), Path(str(base) + ".tsx"), base / "index.ts", base / "index.tsx"]
                target = next((p.resolve() for p in choices if p.is_file()), None)
                if target is None:
                    raise ValueError(f"Unresolved import: {path} -> {spec}")
                pending.append(target.relative_to(source.resolve()).as_posix())
            else:
                packages.add("/".join(spec.split("/")[:2]) if spec.startswith("@") else spec.split("/")[0])
    return files, packages


def locked_versions(source):
    # Root importer only; preserve the lock itself beside every relevant closure.
    text = (source / "pnpm-lock.yaml").read_text().split("\npackages:")[0]
    pattern = r"^      '?([^'\n:]+)'?:\n        specifier: [^\n]+\n        version: ([0-9]+\.[0-9]+\.[0-9]+)"
    return dict(re.findall(pattern, text, re.M))


def write_component(source, sid, repo, commit, slug, entry, selected, packages, versions):
    snap = Path("archive") / sid / commit / slug
    dest = ROOT / snap
    if dest.exists():
        raise ValueError(f"Refusing snapshot overwrite: {dest}")
    dest.mkdir(parents=True)
    records = []
    for rel in sorted(selected):
        src = source / rel
        if src.is_symlink() or not src.is_file():
            raise ValueError(f"Not a regular source file: {src}")
        target = dest / rel
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(src, target)
        data = target.read_bytes()
        records.append({"path": rel, "sha256": hashlib.sha256(data).hexdigest(), "size": len(data)})
    limitations = [
        "Static source archive only; upstream scripts and components were not executed or visually tested.",
        "dependencies pins direct imports and documented host style/peer requirements; npm transitive packages are not vendored. Offline source recovery is not offline dependency installation.",
        "Entry: " + entry,
    ]
    if sid == "agent-elements":
        limitations += ["Import lib/agent-ui/agent-ui.css in a Tailwind CSS 4 host; preserve original lib/agent-ui relative layout. No host app or API integration included."]
    else:
        limitations += ["Import tokens.css and the component CSS explicitly; keep blocks/<name>/ layout. React 19.2.8 is a collection pin within upstream ^19.2.8, not an upstream lockfile.",
                        "No Bencho Pro, name/mark assets, website photographs or sounds included; see LICENSE exclusions and THIRD_PARTY.md."]
    return {
        "assetKind": "source", "id": sid + ":" + slug, "sourceId": sid, "name": slug.replace("-", " ").title(),
        "category": "agent-ui" if sid == "agent-elements" else "interactive-ui", "tags": ["react", sid],
        "upstreamUrl": f"https://github.com/{repo}/blob/{commit}/{entry}", "upstreamCommit": commit,
        "license": {"status": "allowed", "evidencePath": (snap / "LICENSE").as_posix(),
                    "noticePaths": [(snap / "LICENSE").as_posix()] + ([(snap / "THIRD_PARTY.md").as_posix()] if sid == "bencho" else [])},
        "snapshotPath": snap.as_posix(), "files": records,
        "dependencies": {name: versions[name] for name in sorted(packages)}, "limitations": limitations,
    }


def main():
    input_root = Path(sys.argv[1]).resolve()
    result = {"sources": [], "components": []}
    for sid, repo, commit in SOURCES:
        source = input_root / sid / (repo.split("/")[1] + "-" + commit)
        license_text = (source / "LICENSE").read_text()
        if "MIT License" not in license_text or "Permission is hereby granted" not in license_text:
            raise ValueError("Reviewed license missing")
        result["sources"].append({"id": sid, "name": sid, "upstreamUrl": f"https://github.com/{repo}", "upstreamCommit": commit})
        if sid == "agent-elements":
            versions = locked_versions(source)
            for name in AGENT_ENTRIES:
                entry = "lib/agent-ui/components/" + name + ".tsx"
                selected, packages = closure(source, entry)
                selected.update(["LICENSE", "package.json", "pnpm-lock.yaml", "lib/agent-ui/agent-ui.css"])
                packages.update(["react", "react-dom", "tailwindcss"])
                result["components"].append(write_component(source, sid, repo, commit, name.split("/")[-1], entry, selected, packages, versions))
        else:
            for name in BENCHO_ENTRIES:
                files = {p.relative_to(source).as_posix() for p in (source / "blocks" / name).iterdir() if p.is_file()}
                entry = next(p for p in sorted(files) if p.endswith(".tsx"))
                selected, packages = closure(source, entry)
                selected.update(files | {"LICENSE", "THIRD_PARTY.md", "package.json", "tokens.css"})
                packages.update(["react", "react-dom"])
                result["components"].append(write_component(source, sid, repo, commit, name, entry, selected, packages, {"react": "19.2.8", "react-dom": "19.2.8", "three": "0.169.0"}))
    out = ROOT / "inventory/collection.json"
    if out.exists():
        raise ValueError("Refusing inventory overwrite")
    out.write_text(json.dumps(result, indent=2) + "\n")
    print(f"Acquired {len(result['sources'])} sources / {len(result['components'])} components")
    for item in result["components"]:
        print(item["id"], len(item["files"]), "files", json.dumps(item["dependencies"], sort_keys=True))


if __name__ == "__main__":
    main()
