# FullCalendar · Local week planner

One family, not one entry per calendar view. Original FullCalendar 6.1.19 standard editor/viewer; no premium or scheduler packages. Source release: https://github.com/fullcalendar/fullcalendar/tree/ca76fbf6c3e27f8e5671432dbbadec19ce768d3f . Official annotated v6.1.19 tag object `6073bdee49395ccbf8229efd4fa528022206588e` resolves to this commit. Actual runtime packages are official npm @fullcalendar/{core,timegrid,daygrid,interaction,list} 6.1.19 and preact10.12.1 (including compat/hooks submodules). All are MIT. Full texts are included; source release root LICENSE byte-matches the npm core license. Version/source provenance is not a claim that npm generated JS is byte-identical to the original TypeScript.

## What remains original

FullCalendar itself renders the time grid, slot/event geometry, toolbar, week/day/agenda views, event layout, selection mirrors and drag/resize handles. Its actual date/event model, interaction engine, view switching, range selection, drag/drop and resizing implementation are retained. This is not a handmade image of a calendar. Initial mode is the weekly hour grid, distinct from a simple month date picker or horizontal project timeline.

The host is explicitly adapted: original local sample event text, soft system-font theme, object count/status line and a native HTML dialog for local title/start/end editing. That form is our small integration using the official select/eventClick and EventApi methods, **not claimed as an original FullCalendar built-in form**. The three example events are authored fixtures, not real user calendar data. New blocks default to 15:00 on the currently displayed range's start day. No backend, account, remote event source, upload, persistence, alerts or real reminders.

UTC is explicit in both the original calendar configuration and the form. datetime-local field values are interpreted as UTC, not browser-local time. Initial sample week is 2026-11-09. End is exclusive; blank title, invalid date or end not later than start is rejected before state changes. Applying, deleting, moving or resizing affects current iframe memory only. Closing/reloading discards changes. The native form Cancel/Escape does not mutate the event. The day/week/agenda buttons are three presentations of the same local event model, not three counted families.

## Asset / lifecycle adaptations

The official core CSS includes a base64 TTF icon font. It is **not shipped here**: build removes that single unused @font-face rule, and the supported `buttonIcons:false` option selects text labels (Earlier/Later instead of chevron font glyphs). No replacement binary/font is encoded or uploaded. This limited CSS change and local theme are transparent differences from defaults. No upstream interaction JavaScript was replaced or rewritten.

On pagehide the host closes its dialog, destroys the original Calendar, removes host listeners, clears the root and invokes a standalone-iframe listener ledger to remove residual original module-level window/document handlers. The ledger restores the previous add/remove listener functions. It is intended for an isolated preview document, not to run inside an unrelated application's shared DOM. No autoplay/now-indicator loop or background task is enabled.

Runtime is offline UTF-8 JS/CSS/HTML with explicit head and exact runtime.css/runtime.js references. Uses existing default CSP; no network/worker/eval/media capability increase, no binary wrapping. The plugin package dependencies and licenses are in THIRD_PARTY_NOTICES.txt. Original framework CSS is injected by the original runtime (permitted inline styles), while the host theme is runtime.css.

## Verification and honest limits

**Visual and native browser acceptance remain pending.** JSDOM has no actual browser layout. Tests substitute fixed element rectangles/client sizes and elementFromPoint, plus native-dialog methods. These substitutions do not establish rendered appearance, real pointer hit geometry, touch/mobile scrolling, native modal focus trapping, resize-handle pixel accuracy or accessibility across browsers.

Passed original model/UI tests: original weekly grid and toolbar mount; exact UTC start/end values; original selection callback opens form; submit creates actual event with exact exclusive range; actual original event DOM click opens edit; invalid reversed end is rejected; title/end edits, Cancel preservation and delete; actual original moveDates/moveEnd methods preserve the tested date/duration semantics; original day/agenda/week and earlier/later controls change view/range. Model movement/extension tests are **not** represented as native drag/resize success.

Under fixed synthetic geometry, actual original drag handlers reach eventDragStart and create the original mirror. An outside invalid drop leaves the date unchanged and removes the mirror. A separate case exits while the original drag is active. These are real original handler/state paths under substituted hit geometry, not real mouse/touch visual acceptance. A native resize gesture was not tested. Reentering a second synthetic drag immediately after the invalid-drop case was not reliable with the fixed-geometry harness; cancellation and active-exit tests run in separate documents, and drag reentry is not claimed verified.

All four suites (state/form, invalid-drop cancellation, active-drag exit, production-no-test-API) instrument attempts to fetch, XHR, Worker, eval, Function, window.open, clipboard and browser storage. Counts were zero. After pagehide and a settle interval, tracked timers/intervals/RAF and all recorded added global listeners are zero, with no captured JSDOM/runtime errors. This tests the exercised paths, not an exhaustive proof of every upstream branch. Test-only API exposure is absent from the production bundle.

Reproduction from workspace: `node ui-fullcalendar-local/build.cjs`; `TEST=1 node ui-fullcalendar-local/build.cjs`; `node ui-fullcalendar-local/verify.cjs`. Local build records/lockfile/tests are not required public runtime files. Do not call these DOM tests pixel review or imply this schedules real work.
