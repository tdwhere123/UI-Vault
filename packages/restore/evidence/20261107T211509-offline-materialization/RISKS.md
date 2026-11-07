# Known risks and uncovered behavior

- Linux with /proc/self/fd only; unsupported platforms fail closed. No Windows,
  macOS, network-filesystem or power-loss durability verification.
- Caller-controlled local output, not a sandbox against a hostile same-user process,
  concurrent directory relocation/mount changes, or concurrent mutation of output.
  Concurrent restores may reject an exclusive-create conflict; no lock/transaction.
- I/O failure can leave partial output. Matching-file retries are supported, but a
  truncated or conflicting file is never overwritten or automatically removed;
  choose a new destination or repair it manually. Unlisted output files are retained.
- Payload bytes are buffered: 16 MiB/file, 128 MiB/component. Larger collections
  fail closed. The complete source snapshot is verified even for one Explorer read.
- Allowed licensing status is the catalog producer's recorded assessment; the
  restorer verifies the declared license/notice bytes, not a legal opinion or
  upstream authenticity beyond the recorded hash/commit. It does not infer SPDX
  permission, validate license wording, or prove source dependency closure.
- Source recovery is not offline npm installation, rendering, visual fidelity,
  executable behavior, or an air-gapped-host proof. No upstream script was run.
- Build/CLI input includes the shared working tree's platform integration changes;
  precise hashes are pinned. The platform integrator must bind its final candidate
  commit and rerun affected checks. No remote CI or external publication was run.
- Existing historical authorization files/evidence were preserved and not modified.
