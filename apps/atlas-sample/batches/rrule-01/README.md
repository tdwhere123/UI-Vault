# UTC recurrence workbench

Actual original RRule/RRuleSet TypeScript engine, commit 9f2061febeeb363d03352efe33d30c33073a0242, version2.8.0. Full BSD3 and included python-dateutil-derived notices retained. Original engine files are copied unchanged. Local original interface, not upstream official UI.

One rule family workbench, not one item per variation. Weekly selected weekdays every N weeks, or monthly Nth weekday (e.g. second Tuesday, not Nth business day). COUNT or inclusive UNTIL, click date to exclude via original RRuleSet.exdate, click again or restore to undo. Serialized rule is original engine output. All dates explicitly UTC 09:00; initial sample January4 2027 is visible, not inferred user timezone. COUNT counts before exclusions, so EXDATE may leave fewer results.

Host validates real ISO dates, interval integers1–12, counts1–50, nonempty weekdays, supported monthly positions, UNTIL>=start and <=5year horizon. Preview scope is the first50 original rule occurrences (rule.all iterator callback limit). RRuleSet.between(start,last displayed candidate,inclusive) computes included dates only within that displayed scope. Exclusions never refill from candidate51 onward, including UNTIL rules: excluding one of50 displays49/50. The5year bound limits the underlying recurrence range. No execution, reminders, calendar writes, network, storage or user data. Changing rule clears exclusions; invalid input clears results rather than showing stale plans.

Tests verify exact weekly and biweekly dates starting Nov9 2026, exact monthly second-Tuesday dates Nov10/Dec8/Jan12, inclusive cutoff, exclusion/restore semantics, error constraints, repeated operations, switching families and pagehide cleanup. No timers/RAF/observers created. Eval, Function, Worker and network APIs trapped before runtime load with zero calls. Visual browser acceptance pending.

Build npm ci --ignore-scripts; node build.mjs. Test JSDOM path in test.mjs. Source/originals and scripts are included in this local delivery only, not represented as a public downloadable source artifact.
