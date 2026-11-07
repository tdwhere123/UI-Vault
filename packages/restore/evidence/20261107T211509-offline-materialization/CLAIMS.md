> Public portability/disclosure revision. Original records and original checksum manifests are archived privately; this text is not the original sealed execution record and does not claim those checksums still match the public tree.

# Verified offline source materialization

Code SHA: `7d7711e0559acbfe982f37d29adbf1f2dba0eefd`.
Task baseline: `c3f9fd5b8f2ba683d4dee004235265bd8e9c53c9`.
Direct parent: `bd2435c70d71dee3b87da43230b747fe58f7970a`.
Required catalog authority: `749aefa2b6be29ea77e96695a23a11b306e6a10d`.
Real source acquisition commit: `63d3270` (full parent history is in Git).
Only this role's eight exact packages/restore code/test/doc files were committed.
No push, merge, cloud agent, model request, upstream script execution, or deletion.

## Evidence scope

- `raw/candidate-build.log`, `raw/candidate-typecheck.log`: repository build/typecheck pass.
- `raw/candidate-core-unit.log`: core tests 20/20 pass.
- `raw/candidate-restore.log`: restore tests 18/18 pass, none skipped.
- Real catalog: 20 allowed source components, 2 actual source IDs,
  142 files, 3624327 bytes.
  All restore twice; second run keeps all existing inodes and mtimes and rechecks
  every file's size/hash. Sources/styles/licenses/notices are copied, never executed.
- Actual source URLs from the catalog are attempted with curl through a controlled
  CONNECT-denying loopback proxy: both return curl 56 / proxy 503. Restores then
  succeed using only local bytes, with zero fetch calls. This is deliberately
  unavailable access, NOT a claim that public upstreams suffered a natural outage
  or that the entire host was in a network namespace with networking disabled.
- Real filesystem negatives cover traversal/absolute paths, source/destination
  symlinks and hardlinks, same-size corruption, missing/wrong-size/unlisted files,
  actual write-permission failure and repair/retry, destination conflicts, archive
  overlap, byte limits, unknown/restricted/reference admission, readonly reads,
  and a pinned directory's visible path being replaced with a symlink.
- `raw/candidate-negative-control.log`: removing only the SHA256 comparison in a
  temporary compiled copy causes the corruption test to fail. Baseline had no
  restore package, so this is a behavior-sensitive mutation check, NOT fabricated
  historical before-fix output. Production files were never mutated for this test.
- `raw/cli-verify.log`, `raw/cli-materialize.log`, `raw/cli-repeat.log`: actual CLI
  verify/materialize/repeat on agent-elements:error-message; 6 unchanged files on repeat.
- `INPUTS.sha256` pins 161 exact input files including catalog, real archive,
  code, runtime core authority and build/CLI inputs; input hashes passed again after
  candidate tests (`raw/input-integrity.log`). Catalog is generated from inventory,
  not a second restoration schema.

## Boundary

Core owns catalog/schema/path spelling; restoration owns local filesystem access,
file-set completeness, byte verification and output creation. CLI and Explorer use
verifyComponent/readSnapshotFile/restoreComponent, not separate integrity rules.
No old approval, fulfillment, revocation, transaction, or version migration work.
Package-local safety fixtures are clearly synthetic and do not count as real UI.
The initial raw files predate the code commit but contain the same code; candidate-*
logs are the code-SHA-bound rerun. `candidate.txt` records actual local time.

See `RISKS.md` for material limitations. This is engineering self-test, not an
independent verification verdict. Submission is managed by the repository maintainer.
