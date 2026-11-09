# Mantine responsive mega navigation

Restores existing `mantine-ui:responsive-mega-navigation` as one original UI family, not separate desktop/mobile entries. Source: mantinedev/ui.mantine.dev at `963b955c5cef4bcc6008d40a0431e46ef771c254`, complete MIT included. Original HeaderMegaMenu.tsx/CSS, six feature descriptions, MantineLogo, desktop hover dropdown, mobile Drawer/Collapse remain. Chinese host labels placeholder destinations and unavailable authentication. No routing, account action, network or storage.

## Changes
- Original # anchors prevent navigation; unchanged no-route destination. Original Get started/Log in/Sign up have no handlers and are visibly disabled.
- Original malformed calc(100vh - 80px missing final parenthesis corrected.
- Original Header CSS module compiled via identical Contact PostCSS pipeline; full core and MantineLogo CSS included. System font; no font downloads.
- Original MantineLogo geometry/colors and Tabler icons kept. MIT does not confer trademark/endorsement rights.
- Contact isolation/bootstrap, memory-only MantineProvider and hidden unmount reused unchanged; no new global storage/network capabilities.

## Exact dependencies and license delta
Uses @mantine/core/hooks 9.7.3, React/DOM 19.3.1 and Tabler 3.36.1 as Contact. Adds only @mantinex/mantine-logo 2.0.0 to the parsed dependency set. Its npm package omits LICENSE; the full official Mantine root MIT at npm gitHead 345808e2a258142b12c0b9b145e7c982f4c34d1e is supplied with exact URL/hash, not represented as packaged LICENSE. The previously verified react-remove-scroll-bar 2.3.8 missing-license supplement is retained from official fixed 8ca9ba5ea52de03308fe8ced94f7b159a44d28ff, not its inaccessible npm gitHead. All 23 conservative parsed notices included, plus emitted bytes per actual build input. Distribution MIT; 0BSD. Logo trademark rights not granted.

## Component verification
Actual547 composePreview and unchanged CSP. Real original native mouseenter opens six-feature HoverCard; drawer button opens Navigation; Features toggles original Collapse; Escape dispatched from dialog closes drawer. Placeholder anchor preventDefault; auth actions disabled. Hide while open disposes UI, restore resets; retained old burger cannot reopen. Final dispose while drawer open clears exact owned listeners/tasks/observers/media subscriptions and old trigger cannot revive. Shared Contact framework was already failure-tested and is reused without repeating its 100-cycle/full failure matrix. No screenshots/native browser or pixel claim. CSS-selector native top-layer JSDOM workaround retained only in test harness, not production.

- Browser hover geometry, narrow/wide visual layout, native focus traversal and CSS transitions are not visually verified.
- Menu links and actions are upstream placeholders, not functional routes, login or registration.
- HoverCard desktop and Drawer mobile CSS branches retain original responsive behavior; JSDOM sees both DOM branches without proving breakpoint pixels.
