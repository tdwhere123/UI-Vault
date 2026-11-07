#!/bin/sh
set -e
cd "$(dirname "$0")/../../.."
# Repository-input read-only validation; source negative controls write external scratch.
# Deliberately no build: pnpm build writes dist and is NOT read-only.
python3 inventory/reference-correction-evidence-20261107/scripts/check-current.py
