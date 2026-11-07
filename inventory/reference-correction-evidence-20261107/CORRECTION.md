> Public portability/disclosure revision. Original records and original checksum manifests are archived privately; this text is not the original sealed execution record and does not claim those checksums still match the public tree.

# Evidence correction (current-state only)

Frozen delivery being corrected: 74b4fa9f6d95805d3d9e34750b150ac392afa9c6.
Correction pre-commit HEAD: bec8fa81d2c42bf5088a24c5f8c4c7817ee116b7.
Only this new directory changed. No existing file unlocked or changed; no append, build, acquisition, push or message performed.

## Confirmed defect and withdrawal
Old append-and-verify.py lines 49–51 do not invoke the schema probe and reuse the negative result. The frozen script must fail at its contradictory assertions. Its schema-mapping.raw.txt cannot be generated as claimed by THAT frozen script. Old CLAIMS assertions that the frozen script reproduces the complete generation chain, including schema-mapping.raw.txt, are withdrawn. Existing SHA256SUMS proves byte integrity only, not provenance or execution. Historical current-state test results are not converted into authenticated historical generation evidence.
Old run-checks.sh's Read-only comment is wrong: pnpm build writes dist. New run-current-checks.sh omits build, performs repository-input read-only checks; source negative controls create external scratch. No historical frozen file is repaired in place.

## Historical source investigation
The privately archived history-generation-excerpt.txt transcribes the relevant original Shell tool arguments visible in this executor conversation: the initially executed script DID contain subprocess.run for the schema probe, and the foreground invocation returned exit 0. Its exact generation time and durable original terminal locator are Unknown; original foreground record was not found in the local terminal exact-path search. This excerpt is not a signed or independent historical attestation.
The privately archived history-edit-command-record.txt copies this task's own saved terminal [private audit source record; original bytes retained outside the publication repository]. It records a later global str.replace of the identical subprocess.run line, unintentionally removing both the redundant invocation and the required schema probe invocation. That edit explains why the frozen script differs from the earlier executed version. Saved edit execution was 2026-11-07 21:25:07.600–21:25:21.717 Asia/Taipei (converted from UTC terminal header). This establishes the later edit record, not authentication of the full earlier chain. No history is amended or fabricated.

## Actual new evidence
New schema-probes.mjs actually invokes shared validateCatalog on CURRENT collection and compares all 6 references/2 origins against the supplied external mapping. Six mutations require Invalid catalog errors identifying snapshotPath/upstreamCommit/publicUrl/layout/files/dependencies. check-current.py captures exact command arrays, Asia/Taipei times, complete stdout/stderr and exit codes. Also reruns collection closure and four existing source negative controls. No one-shot append script is needed or supplied.
Raw: current-checks.raw.txt. All 3 commands exit 0; schema and field-specific negatives pass; closure verifies 20 source / 6 reference / 142 files / 78 import edges / 20 tamper negatives. Preservation verifies all pre-existing frozen inputs/evidence/archive bytes AND modes unchanged (protected-before.json == protected-after.json).
Reproduce: `sh inventory/reference-correction-evidence-20261107/scripts/run-current-checks.sh` from repository root. Emits stdout; do not redirect into frozen evidence. Requires existing dist and installed dependencies, plus supplied external mapping. No build or independent-commit buildability proof. Depends on concurrent worktree schema/dist, not historical state. No offline recovery, image provenance, interaction or licensing claims.

All new evidence files and scripts are covered by SHA256SUMS except the manifest itself. chmod a-w is an owner-mode lock, not immutable protection.
