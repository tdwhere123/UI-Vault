#!/bin/sh
set -e
cd "$(dirname "$0")/../../.."
# Read-only rerun; raw streams go to stdout. Do not overwrite frozen evidence.
pnpm build
pnpm typecheck
pnpm unit
pnpm schema
node inventory/scripts/verify-collection.mjs
node inventory/reference-evidence-20261107/scripts/negative-controls.mjs
python3 inventory/scripts/check-negative-controls.py
