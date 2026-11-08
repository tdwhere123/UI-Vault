# Tambo local fixture adaptation
Upstream https://github.com/tambo-ai/tambo
Pinned commit: 6e2c1bff3b68a00c094b6d876788cc8f33f7bb02
MIT Copyright (c) 2025 Fractal Dynamics Inc. Original LICENSE retained.

Original registry component implementation is unmodified. Elicitation additionally bundles its original react-ui-base validation primitives. A new local demonstration host supplies synthetic Exodus task data, renders callback payloads, and provides graph mode/dataset controls. These fixture controls are adaptations, not claimed as official showcase examples.
Form's SDK useTambo/useTamboComponentState are deliberately replaced by a tiny documented local React-state adapter (idle=true), not a remote provider. UI supports local changes and form payload preview only. No actual agent execution, MCP connection, inference, remote saving, credentials or network action is provided. Elicitation response choices do not authorize real external actions.
Upstream Tailwind v4 theme is preserved and compiled locally. Fonts are system fonts. All three chart types are grouped as one family; single/multiple elicitation modes are grouped as one family.

Verification: production IIFE build; node --check; opaque-origin JSDOM mount, no console errors or network calls. Form text/selection/Yes edits and local payload callback; elicitation single boolean accept, required-field submit disabled, decline; graph SVG mount, bar→pie→line switching and dataset updates verified. Canvas/layout stubs are not pixel verification. No real-browser visual, responsive layout, chart hover tooltip or full accessibility acceptance. Do not claim visual QA.
