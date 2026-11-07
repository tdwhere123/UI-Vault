# Offline source restoration

`restoreComponent({ catalog, componentId, archiveRoot, destination })` consumes the
core package's validated catalog. `archiveRoot` is the repository root, not the
`archive/` directory. It returns `{ componentId, destination, created, unchanged,
bytes }`. Only `assetKind: source` records with `license.status: allowed` can be
materialized. Reference records stay view-only.

The actual snapshot directory and declared manifest must match in both directions.
All snapshot files, including license evidence and notices, must be listed with
SHA256 and size. Evidence paths are repository-relative and must refer to files
inside the component snapshot. Every input is checked before creating output.
The result is original source bytes, not an installed or runnable application.
No third-party script, package manager, network fetch, or component is executed.

The catalog's `assertCatalogPath` owns portable path spelling and aliases. Local
filesystem access uses Linux directory descriptors under `/proc/self/fd`, opens
each directory and file with `O_NOFOLLOW`, rejects non-regular files and hardlinks,
and creates new payloads exclusively with mode `0600`. Unsupported systems fail
closed. Destinations cannot overlap `archive/`; parents must not contain symlinks.
The limits are 16 MiB per file and 128 MiB per component (verified bytes are buffered).

Existing matching files remain unchanged; conflicts are never overwritten.
Existing listed files are preflighted before new payload writes. A later I/O
failure can leave partial output and is reported with its cause; this is not a
transaction or automatic rollback. A repeat restores missing files after repair.
Truncated/conflicting files require a user-chosen new destination or manual repair;
this package never deletes or replaces them. Unlisted destination files remain.
This is not isolation against an adversarial same-user process changing directory
ownership/mounts or writing concurrently, and it is not a power-loss durability
promise. The caller must provide a destination it controls.

`verifyComponent({ catalog, componentId, archiveRoot })` applies the same checks
without output writes and returns `{ componentId, files, bytes }`.
`readSnapshotFile({ catalog, componentId, archiveRoot, filePath })` returns a Buffer
for a declared snapshot-relative path after verifying the entire snapshot. Explorer
must serve it as text, never import or execute it.

Build core first, then `pnpm --dir packages/restore build` and
`pnpm --dir packages/restore test`. `test:real` reads the final root `catalog.json`,
expects the requested two sources/twenty allowed source components, denies access
to their actual upstream URLs through a local HTTP CONNECT proxy, then restores
and verifies each twice. `UI_VAULT_CATALOG` selects a repository-relative input for
an explicit integration run. This is controlled unavailable access, not evidence
of a natural upstream outage. Synthetic safety fixtures never count as real UIs.
`node packages/restore/tests/hash-negative-control.mjs` mutates only a temporary
compiled copy: removing the hash comparison must make the corruption test fail.
