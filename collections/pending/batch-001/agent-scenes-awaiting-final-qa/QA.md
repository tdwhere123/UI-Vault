# Agent scenes QA

## Source and scope

- Affect UI: official `flohoeller/affectui`, MIT, commit `7ac87beb0ffaef2dd0305e508b4e3d471f269d84`.
- Agent Elements: official `21st-dev/agent-elements`, MIT; exact revision in item metadata and ADAPTATION.md.
- Only free MIT source was copied. Affect UI Pro components were not fetched or included.
- Runtime and samples use local state only. No real email, file upload, shell command, model, search or payment occurs.
- Source ZIPs include originals, adapted composition, exact npm lock, MIT and dependency license notices. Local-path locks and traversal paths checked: none.

## Actual browser review, 2026-11-08

Used independent tab121 at supported local preview4173, native screenshots and actual clicks/input, not just successful compilation.

| Item | Result | Observed behavior |
|---|---|---|
| decision-inbox | Recommended | Attractive inset card/tray, 3→2→1 decisions; choose first, second and last; All caught up and empty state after completion. |
| email-draft | Recommended | Tone Friendly→Short changes body; remove attachment switches to attach control; simulated Send→receipt; Undo restores short draft; Discard→discarded receipt. No send request. Recipient switching and inline editing not yet individually exercised. |
| smart-recommendation | Recommended | Alternatives opens menu; Full rebuild changes explanation/signal; Accept→accepted; Undo restores controls. |
| comment-thread | Recommended | Expand Reviewed 3 sections; submit synthetic comment; local thinking state, then fixed demo response; count2→3→4. No real AI. |
| notification-stack | Recommended | Distinct patterned stacked cards; dismiss first/second/third in order; next card transitions; final empty stack. Initial animated geometry settles without lasting overlap. |
| tool-call-card | Recommended | Group of3, one failed; expand arguments/error; Retry→running timer→success at900ms; group failure badge clears; result JSON appears. |
| change-summary | Excluded | Renders correctly with row entrance, but final result is a conventional static four-row table. Not counted as refined independent material. |
| agent-elements:research-workflow | Pending | Production build and15-source recursive closure pass; composed full local workflow counts once. Browser QA not completed. |

## Remaining boundaries

Browser became unresponsive on follow-up (Page.enable then DOMSnapshot timeout), so narrow390px frame and real atlas opaque sandbox have not yet been checked. Do not claim those pass. `sandbox-qa.html` uses the production createPreviewLoader and allow-scripts-only iframe; `mobile-qa.html` contains a390px viewport fixture. Both are QA-only, not inventory entries.

The six accepted Affect scenes are in items-recommended.json. All source candidates are separate. Agent composite remains in items-agent-candidates.json pending actual review. No source changes have been made since browser review; only notices were added to ZIPs.
