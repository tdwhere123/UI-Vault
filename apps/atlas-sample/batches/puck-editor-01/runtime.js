if(window.__puckLifecycle){try{var Tbe=`

/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* bundle/index.css */

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_gr1cb_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_gr1cb_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_gr1cb_30 + ._ActionBar-label_gr1cb_17 {
  padding-inline-start: 0;
}
._ActionBar-label_gr1cb_17 + ._ActionBarAction_gr1cb_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_gr1cb_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_gr1cb_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_gr1cb_38:empty {
  display: none;
}
._ActionBarAction_gr1cb_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_gr1cb_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction--grab_gr1cb_83 {
  cursor: grab;
  touch-action: none;
}
._ActionBarAction-icon_gr1cb_88 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}
._ActionBarAction_gr1cb_30 svg {
  max-width: none !important;
}
._ActionBarAction_gr1cb_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_gr1cb_30:hover:not(._ActionBarAction--disabled_gr1cb_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_gr1cb_30:active:not(._ActionBarAction--disabled_gr1cb_74),
._ActionBarAction--active_gr1cb_114 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_gr1cb_38 * {
  margin: 0;
}
._ActionBar-separator_gr1cb_127 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/styles.module.css/#css-module-data */
._InputWrapper_1e4q5_2:not([data-puck-field-group-collapsible]) + ._InputWrapper_1e4q5_2:not([data-puck-field-group-collapsible]) {
  margin-top: var(--puck-space-3);
}
._InputWrapper_1e4q5_2[data-puck-field-group-collapsible]:has(+ ._InputWrapper_1e4q5_2) {
  --_puck-field-group-inset-bottom: var(--puck-space-3);
  --_puck-field-group-collapsed-flush-inset-bottom: calc( var(--puck-space-3) + var(--puck-space-2) );
}
._InputWrapper_1e4q5_2:not([data-puck-field-group-collapsible]) + ._InputWrapper_1e4q5_2[data-puck-field-group-collapsible] {
  --_puck-field-group-inset-top: var(--puck-space-3);
}
._Input-label_1e4q5_21 {
  align-items: center;
  color: var(--puck-field-label-color-text, var(--puck-color-text-secondary));
  display: flex;
  padding-bottom: var(--puck-field-label-space-y, var(--puck-space-3));
  font-size: var(--puck-field-label-font-size, var(--puck-font-size-xxs));
  font-weight: var( --puck-field-label-font-weight, var(--puck-font-weight-semibold) );
}
._Input-labelIcon_1e4q5_33 {
  color: var(--puck-field-label-color-icon, var(--puck-color-text-subtle));
  display: flex;
  margin-inline-end: var(--puck-space-1);
  padding-inline-start: var(--puck-space-1);
}
._Input-disabledIcon_1e4q5_40 {
  color: var(--puck-color-text-muted);
  margin-inline-start: auto;
}
._Input-labelEndIcon_1e4q5_45 {
  color: var(--puck-field-label-color-icon, var(--puck-color-text-subtle));
  display: flex;
  margin-inline-start: auto;
}
._Input-disabledIcon_1e4q5_40 + ._Input-labelEndIcon_1e4q5_45 {
  margin-inline-start: var(--puck-space-1);
}
._Input-input_1e4q5_56 {
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  color: var(--puck-field-color-text, var(--puck-color-text));
  font-family: inherit;
  font-size: var(--puck-font-size-xs);
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
}
@media (min-width: 458px) {
  ._Input-input_1e4q5_56 {
    font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  }
}
._Input-select_1e4q5_88 {
  position: relative;
  width: 100%;
}
select._Input-input_1e4q5_56 {
  appearance: none;
  cursor: pointer;
}
._Input-selectIcon_1e4q5_98 {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  fill: var(--puck-field-color-border, var(--puck-color-border));
  stroke-width: 0;
}
._Input-selectIcon_1e4q5_98:dir(rtl) {
  right: auto;
  left: 12px;
}
@media (hover: hover) and (pointer: fine) {
  ._Input_1e4q5_2:has(> input):hover ._Input-input_1e4q5_56:not([readonly]),
  ._Input_1e4q5_2:has(> textarea):hover ._Input-input_1e4q5_56:not([readonly]) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_1e4q5_2:has(> ._Input-select_1e4q5_88):hover ._Input-input_1e4q5_56:not([disabled]) {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_1e4q5_2:not(._Input--readOnly_1e4q5_138):has(> ._Input-select_1e4q5_88):hover ._Input-selectIcon_1e4q5_98 {
    fill: var(--puck-field-color-border-hover, var(--puck-color-border-hover));
  }
}
._Input-input_1e4q5_56:focus {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
._Input--readOnly_1e4q5_138 > ._Input-input_1e4q5_56,
._Input--readOnly_1e4q5_138 > ._Input-select_1e4q5_88 > select._Input-input_1e4q5_56 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
  cursor: default;
  opacity: 1;
  outline: 0;
  transition: none;
}
._Input--readOnly_1e4q5_138 > ._Input-select_1e4q5_88 > select._Input-input_1e4q5_56 ~ ._Input-selectIcon_1e4q5_98 {
  fill: var(--puck-field-color-text-disabled, var(--puck-color-text-secondary));
}
._Input-radioGroupItems_1e4q5_177 {
  --_puck-field-radio-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-radio-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-radio-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  display: flex;
  border: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  border-radius: var(--_puck-field-radio-radius);
  flex-wrap: wrap;
}
._Input-radio_1e4q5_177 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  flex-grow: 1;
}
._Input-radio_1e4q5_177:first-of-type {
  border-bottom-left-radius: var(--_puck-field-radio-radius);
  border-top-left-radius: var(--_puck-field-radio-radius);
}
._Input-radio_1e4q5_177:first-of-type ._Input-radioInner_1e4q5_206 {
  border-bottom-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radio_1e4q5_177:last-of-type {
  border-bottom-right-radius: var(--_puck-field-radio-radius);
  border-inline-end: 0;
  border-top-right-radius: var(--_puck-field-radio-radius);
}
._Input-radio_1e4q5_177:last-of-type ._Input-radioInner_1e4q5_206 {
  border-bottom-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radioInner_1e4q5_206 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-radio-border-width)) );
  text-align: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Input-radio_1e4q5_177:has(:focus-visible) {
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._Input-radioInner_1e4q5_206:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._Input--readOnly_1e4q5_138 ._Input-radioGroupItems_1e4q5_177 {
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._Input--readOnly_1e4q5_138 ._Input-radioInner_1e4q5_206 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text-secondary));
  cursor: default;
}
._Input--readOnly_1e4q5_138 ._Input-radio_1e4q5_177 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--puck-field-color-border-disabled, var(--puck-color-border));
}
._Input--readOnly_1e4q5_138 ._Input-radio_1e4q5_177:last-of-type {
  border-inline-end: 0;
}
._Input-radio_1e4q5_177 ._Input-radioInput_1e4q5_288:checked ~ ._Input-radioInner_1e4q5_206 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-medium);
}
._Input--readOnly_1e4q5_138 ._Input-radioInput_1e4q5_288:checked ~ ._Input-radioInner_1e4q5_206 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._Input-radio_1e4q5_177 ._Input-radioInput_1e4q5_288 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
._Input-checkboxGroupItems_1e4q5_318 {
  display: flex;
  flex-direction: column;
  gap: var(--puck-space-2);
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-style: solid;
  border-width: var(--puck-field-border-width, 1px);
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-space-3);
}
._Input-checkbox_1e4q5_318 {
  align-items: center;
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  display: flex;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  gap: var(--puck-space-2);
}
._Input-checkboxInput_1e4q5_338 {
  --_puck-field-checkbox-color-bg: var( --puck-field-checkbox-color-bg, var(--puck-color-interactive) );
  --_puck-field-checkbox-color-check: var( --puck-field-checkbox-color-check, var(--puck-color-text-inverse) );
  appearance: none;
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  cursor: inherit;
  display: grid;
  flex-shrink: 0;
  height: 16px;
  margin: 0;
  place-content: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 16px;
}
._Input-checkboxInput_1e4q5_338::after {
  border: solid var(--_puck-field-checkbox-color-check);
  border-width: 0 2px 2px 0;
  content: "";
  height: 8px;
  margin-top: -2px;
  transform: rotate(45deg);
  visibility: hidden;
  width: 4px;
}
._Input-checkboxInput_1e4q5_338:checked {
  background-color: var(--_puck-field-checkbox-color-bg);
  border-color: var(--_puck-field-checkbox-color-bg);
}
._Input-checkboxInput_1e4q5_338:checked::after {
  visibility: visible;
}
@media (hover: hover) and (pointer: fine) {
  ._Input-checkbox_1e4q5_318:hover ._Input-checkboxInput_1e4q5_338:not(:checked, :disabled) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
}
._Input-checkboxInput_1e4q5_338:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  outline-offset: var(--puck-border-width-focus);
}
._Input--readOnly_1e4q5_138 ._Input-checkboxInput_1e4q5_338 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._Input--readOnly_1e4q5_138 ._Input-checkboxInput_1e4q5_338:checked {
  background-color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
  border-color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._Input--readOnly_1e4q5_138 ._Input-checkbox_1e4q5_318 {
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
  cursor: default;
}
textarea._Input-input_1e4q5_56 {
  margin-bottom: calc(var(--puck-space-1) * -1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ArrayField/styles.module.css/#css-module-data */
._ArrayField_xob4n_5 {
  --_puck-field-array-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  --_puck-field-array-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-array-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-array-radius-inner: calc( var(--_puck-field-array-radius) - var(--_puck-field-array-border-width) );
  display: flex;
  flex-direction: column;
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  border: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-radius: var(--_puck-field-array-radius);
}
._ArrayField--isDraggingFrom_xob4n_30 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  overflow: hidden;
}
._ArrayField-addButton_xob4n_38 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: none;
  border-radius: var(--_puck-field-array-radius-inner);
  display: flex;
  color: var(--puck-field-array-add-color-icon, var(--puck-color-interactive));
  justify-content: center;
  cursor: pointer;
  width: 100%;
  margin: 0;
  padding: calc(var(--puck-field-space-y, var(--puck-space-3)) + 2px) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  text-align: left;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayField--hasItems_xob4n_58 > ._ArrayField-addButton_xob4n_38 {
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayField-addButton_xob4n_38:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayField_xob4n_5:not(._ArrayField--isDraggingFrom_xob4n_30) > ._ArrayField-addButton_xob4n_38:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayField_xob4n_5:not(._ArrayField--isDraggingFrom_xob4n_30) > ._ArrayField-addButton_xob4n_38:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayField-inner_xob4n_93 {
  margin-top: -1px;
}
._ArrayFieldItem_xob4n_101 {
  display: block;
  position: relative;
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
}
._ArrayFieldItem--isDragging_xob4n_110 {
  border-top: transparent;
}
._ArrayFieldItem--isExpanded_xob4n_114::before {
  display: none;
}
._ArrayFieldItem--isExpanded_xob4n_114 {
  border-bottom: 0;
  outline-offset: 0px !important;
  outline: var(--_puck-field-array-border-width) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring)) !important;
  z-index: 2;
}
._ArrayFieldItem--isDragging_xob4n_110 {
  outline: var(--puck-border-width-focus) var(--puck-field-color-border-dragging, var(--puck-color-selection-border)) solid !important;
}
._ArrayFieldItem--isDragging_xob4n_110 ._ArrayFieldItem-summary_xob4n_132:active {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
}
._ArrayFieldItem_xob4n_101 + ._ArrayFieldItem_xob4n_101 {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayFieldItem-summary_xob4n_132 {
  --_puck-drag-icon-color: var(--puck-field-color-text, var(--puck-color-text));
  --_puck-drag-icon-color-hover: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: space-between;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  list-style: none;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  position: relative;
  overflow: hidden;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayFieldItem--noFields_xob4n_167 > ._ArrayFieldItem-summary_xob4n_132 {
  cursor: grab;
}
._ArrayFieldItem_xob4n_101:first-of-type > ._ArrayFieldItem-summary_xob4n_132 {
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_xob4n_176 > ._ArrayField-inner_xob4n_93 > ._ArrayFieldItem_xob4n_101:last-of-type:not(._ArrayFieldItem--isExpanded_xob4n_114) > ._ArrayFieldItem-summary_xob4n_132 {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_xob4n_176 > ._ArrayField-inner_xob4n_93 > ._ArrayFieldItem--isExpanded_xob4n_114:last-of-type {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayFieldItem-summary_xob4n_132:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayFieldItem-summary_xob4n_132:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayFieldItem-summary_xob4n_132:active {
  background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayFieldItem--isExpanded_xob4n_114 > ._ArrayFieldItem-summary_xob4n_132 {
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-semibold);
  transition: none;
}
._ArrayFieldItem-body_xob4n_228 {
  background: var(--puck-field-color-surface, var(--puck-color-surface));
  display: none;
}
._ArrayFieldItem--isExpanded_xob4n_114 > ._ArrayFieldItem-body_xob4n_228 {
  display: block;
}
._ArrayFieldItem-fieldset_xob4n_237 {
  border: none;
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  --_puck-field-group-guide-width: 0px;
  --_puck-field-group-guide-space: 0px;
}
._ArrayFieldItem-rhs_xob4n_253 {
  display: flex;
  gap: var(--puck-space-1);
  align-items: center;
}
._ArrayFieldItem-actions_xob4n_259 {
  color: var(--puck-color-text-secondary);
  display: flex;
  gap: var(--puck-space-1);
  opacity: 0;
}
._ArrayFieldItem-summary_xob4n_132:focus-within > ._ArrayFieldItem-rhs_xob4n_253 > ._ArrayFieldItem-actions_xob4n_259,
._ArrayFieldItem-summary_xob4n_132:hover > ._ArrayFieldItem-rhs_xob4n_253 > ._ArrayFieldItem-actions_xob4n_259 {
  opacity: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/IconButton/IconButton.module.css/#css-module-data */
._IconButton_1pxxt_1 {
  align-items: center;
  background: var(--puck-iconbutton-color-bg, transparent);
  border: none;
  border-radius: var(--puck-iconbutton-radius, var(--puck-radius-m));
  color: var(--puck-iconbutton-color-icon, currentColor);
  display: flex;
  font-family: var(--puck-font-family);
  justify-content: center;
  padding: var(--puck-iconbutton-space, var(--puck-space-1));
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._IconButton--active_1pxxt_15 {
  color: var( --puck-iconbutton-color-icon-active, var(--puck-color-interactive) );
}
._IconButton_1pxxt_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._IconButton_1pxxt_1:hover:not(._IconButton--disabled_1pxxt_28) {
    background: var( --_puck-iconbutton-color-bg-hover, var( --puck-iconbutton-color-bg-hover, var(--puck-color-interactive-neutral-hover) ) );
    color: var( --puck-iconbutton-color-icon-hover, var(--puck-color-interactive) );
    cursor: pointer;
    transition: none;
  }
}
._IconButton_1pxxt_1:active {
  background: var( --puck-iconbutton-color-bg-active, var(--puck-color-interactive-soft) );
  transition: none;
}
._IconButton--disabled_1pxxt_28 {
  color: var( --puck-iconbutton-color-icon-disabled, var(--puck-color-text-subtle) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DragIcon/styles.module.css/#css-module-data */
._DragIcon_5e515_1 {
  color: var(--_puck-drag-icon-color, var(--puck-color-text-muted));
  cursor: grab;
  padding: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
}
._DragIcon--disabled_5e515_10 {
  cursor: no-drop;
}
@media (hover: hover) and (pointer: fine) {
  ._DragIcon_5e515_1:not(._DragIcon--disabled_5e515_10):hover {
    color: var(--_puck-drag-icon-color-hover, var(--puck-color-focus-ring));
  }
}

/* components/Sortable/styles.css */
[data-dnd-placeholder]:not([data-puck-line-drag] *) * {
  opacity: 0 !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --_puck-field-array-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ExternalInput/styles.module.css/#css-module-data */
._ExternalInput-actions_143vl_1 {
  display: flex;
}
._ExternalInput-button_143vl_5 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  font-weight: var(--puck-font-weight-medium);
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  cursor: pointer;
}
._ExternalInput--dataSelected_143vl_34 ._ExternalInput-button_143vl_5 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  display: block;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
._ExternalInput--readOnly_143vl_41 ._ExternalInput-button_143vl_5 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
}
._ExternalInput-detachButton_143vl_48 {
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-bottom-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  background-color: var( --puck-field-external-detach-color-bg, var(--puck-color-surface-subtle) );
  color: var( --puck-field-external-detach-color-text, var(--puck-color-text-muted) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  padding: var(--puck-space-2) var(--puck-space-3);
  position: relative;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  margin-inline-start: -1px;
  cursor: pointer;
}
._ExternalInput-button_143vl_5:focus-visible,
._ExternalInput-detachButton_143vl_48:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  z-index: 1;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover,
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    transition: none;
  }
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-external-detach-color-text, var(--puck-color-text-muted)) );
  }
  ._ExternalInput--dataSelected_143vl_34:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  }
}
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:active,
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ExternalInputModal_143vl_118 {
  color: var(--puck-color-text);
  display: grid;
  grid-template-rows: min-content minmax(128px, 100%) min-content;
  grid-template-columns: 100%;
  position: relative;
  min-height: 50dvh;
  max-height: 90dvh;
}
._ExternalInputModal-grid_143vl_128 {
  display: flex;
  flex-direction: column;
}
@media (min-width: 458px) {
  ._ExternalInputModal-grid_143vl_128 {
    display: grid;
    grid-template-columns: 100%;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-grid_143vl_128 {
    grid-template-columns: 25% 75%;
  }
}
._ExternalInputModal-filters_143vl_144 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}
._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
  display: none;
}
@media (min-width: 458px) {
  ._ExternalInputModal-filters_143vl_144 {
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
    display: none;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
    display: block;
  }
}
._ExternalInputModal-masthead_143vl_164 {
  background-color: var(--puck-color-surface-subtle);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-5);
  padding: var(--puck-space-5);
}
._ExternalInputModal-tableWrapper_143vl_173 {
  position: relative;
  overflow-x: auto;
  overflow-y: auto;
  flex-grow: 1;
}
._ExternalInputModal-table_143vl_173 {
  border-collapse: unset;
  border-spacing: 0px;
  color: var(--puck-color-text);
  position: relative;
  z-index: 0;
  min-width: 100%;
}
._ExternalInputModal-thead_143vl_189 {
  background-color: var(--puck-color-surface);
  position: sticky;
  top: 0;
  z-index: 1;
}
._ExternalInputModal-th_143vl_189 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-td_143vl_204 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-tr_143vl_210 ._ExternalInputModal-td_143vl_204:first-of-type {
  font-weight: var(--puck-font-weight-medium);
  width: 1%;
  white-space: nowrap;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover {
    background: var(--puck-color-interactive-soft-hover);
    color: var(--puck-color-interactive);
    cursor: pointer;
    position: relative;
    margin-inline-start: -5px;
  }
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover ._ExternalInputModal-td_143vl_204:first-of-type {
    border-inline-start: var(--puck-border-width-strong) solid var(--puck-color-interactive);
    padding-inline-start: 20px;
  }
}
._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:last-of-type ._ExternalInputModal-td_143vl_204 {
  border-bottom: none;
}
._ExternalInputModal-tableWrapper_143vl_173 {
  display: none;
}
._ExternalInputModal--hasData_143vl_244 ._ExternalInputModal-tableWrapper_143vl_173 {
  display: block;
}
._ExternalInputModal-loadingBanner_143vl_248 {
  display: none;
  background-color: color-mix(in srgb, var(--puck-color-surface) 90%, transparent);
  padding: 64px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
._ExternalInputModal--isLoading_143vl_265 ._ExternalInputModal-loadingBanner_143vl_248 {
  display: flex;
}
._ExternalInputModal-searchForm_143vl_269 {
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-3);
  flex-grow: 1;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchForm_143vl_269 {
    flex-wrap: nowrap;
  }
}
._ExternalInputModal-search_143vl_269 {
  display: flex;
  background: var(--puck-color-surface);
  border-width: var(--puck-border-width-regular);
  border-style: solid;
  border-color: var(--puck-color-border);
  border-radius: var(--puck-radius-m);
  flex-grow: 1;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within {
  border-color: var(--puck-color-border-hover);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover {
    border-color: var(--puck-color-border-hover);
    transition: none;
  }
}
._ExternalInputModal-searchIcon_143vl_306 {
  align-items: center;
  background: var(--puck-color-surface-subtle);
  border-bottom-left-radius: var(--puck-radius-m);
  border-top-left-radius: var(--puck-radius-m);
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-subtle);
  display: flex;
  justify-content: center;
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within ._ExternalInputModal-searchIcon_143vl_306 {
  color: var(--puck-color-text-secondary);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover ._ExternalInputModal-searchIcon_143vl_306 {
    color: var(--puck-color-text-secondary);
    transition: none;
  }
}
._ExternalInputModal-searchIconText_143vl_333 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
._ExternalInputModal-searchInput_143vl_343 {
  border: none;
  border-radius: var(--puck-radius-m);
  background: var(--puck-color-surface);
  font-family: inherit;
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  width: 100%;
}
._ExternalInputModal-searchInput_143vl_343:focus {
  outline: 0;
}
._ExternalInputModal-searchActions_143vl_358 {
  display: flex;
  gap: var(--puck-space-2);
  height: 44px;
  width: 100%;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchActions_143vl_358 {
    width: auto;
  }
}
._ExternalInputModal-searchActionIcon_143vl_371 {
  align-self: center;
}
._ExternalInputModal-footerContainer_143vl_375 {
  background-color: var(--puck-color-surface-subtle);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
}
._ExternalInputModal-footer_143vl_375 {
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  text-align: right;
}
._ExternalInputModal-field_143vl_388 {
  color: var(--puck-color-text-secondary);
  margin: var(--puck-space-4);
  margin-bottom: var(--puck-space-3);
  display: block;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Modal/styles.module.css/#css-module-data */
._Modal_g5xob_1 {
  background: var(--puck-color-overlay-backdrop);
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 32px;
}
._Modal--isOpen_g5xob_15 {
  display: flex;
}
._Modal-inner_g5xob_19 {
  width: 100%;
  max-width: 1024px;
  border-radius: var(--puck-radius-l);
  overflow: hidden;
  background: var(--puck-color-surface);
  display: flex;
  flex-direction: column;
  max-height: 90dvh;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Heading/styles.module.css/#css-module-data */
._Heading_97eh4_1 {
  display: block;
  color: var(--_puck-heading-color, var(--puck-color-text));
  font-weight: var(--puck-font-weight-bold);
  margin: 0;
}
._Heading_97eh4_1 b {
  font-weight: var(--puck-font-weight-bold);
}
._Heading--xxxxl_97eh4_12 {
  font-size: var(--puck-font-size-xxxxl);
  letter-spacing: var(--puck-letter-spacing-heading);
  font-weight: var(--puck-font-weight-heavy);
}
._Heading--xxxl_97eh4_18 {
  font-size: var(--puck-font-size-xxxl);
}
._Heading--xxl_97eh4_22 {
  font-size: var(--puck-font-size-xxl);
}
._Heading--xl_97eh4_26 {
  font-size: var(--puck-font-size-xl);
}
._Heading--l_97eh4_30 {
  font-size: var(--puck-font-size-l);
}
._Heading--m_97eh4_34 {
  font-size: var(--puck-font-size-m);
}
._Heading--s_97eh4_38 {
  font-size: var(--puck-font-size-s);
}
._Heading--xs_97eh4_42 {
  font-size: var(--puck-font-size-xs);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Button/Button.module.css/#css-module-data */
._Button_oe4qj_1 {
  --_puck-button-default-space-x: 20px;
  --_puck-button-default-font-size: var(--puck-font-size-xxs);
  --_puck-button-default-font-weight: var(--puck-font-weight-regular);
  --_puck-button-default-color-bg-disabled: var(--puck-color-bg-disabled);
  --_puck-button-default-color-text-disabled: var(--puck-color-text-disabled);
  appearance: none;
  background: none;
  border: var(--puck-border-width-regular) solid transparent;
  border-radius: var(--puck-button-radius, var(--puck-radius-m));
  color: var(--puck-color-text-inverse);
  display: inline-flex;
  align-items: center;
  gap: var(--puck-space-2);
  letter-spacing: var(--puck-letter-spacing-ui);
  font-family: var(--puck-font-family);
  box-sizing: border-box;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  cursor: pointer;
  white-space: nowrap;
  margin: 0;
}
._Button_oe4qj_1:hover,
._Button_oe4qj_1:active {
  transition: none;
}
._Button--medium_oe4qj_34 {
  min-height: 34px;
  padding-bottom: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-medium-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-medium-font-size, var(--_puck-button-default-font-size) );
}
._Button--large_oe4qj_62 {
  padding-bottom: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-large-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-large-font-size, var(--_puck-button-default-font-size) );
}
._Button-icon_oe4qj_89 {
  margin-top: 2px;
}
._Button--primary_oe4qj_93 {
  background: var( --puck-button-primary-color-bg, var(--puck-color-interactive) );
  border-color: var(--puck-button-primary-color-border, transparent);
  color: var(--puck-button-primary-color-text, var(--puck-color-text-inverse));
}
._Button_oe4qj_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--primary_oe4qj_93:hover {
    background-color: var( --puck-button-primary-color-bg-hover, var(--puck-color-interactive-hover) );
  }
}
._Button--primary_oe4qj_93:active {
  background-color: var( --puck-button-primary-color-bg-active, var(--puck-color-interactive-active) );
}
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123,
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-primary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-primary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--secondary_oe4qj_135 {
  background: var(--puck-button-secondary-color-bg, transparent);
  border-color: var(--puck-button-secondary-color-border, currentColor);
  color: var(--puck-button-secondary-color-text, currentColor);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--secondary_oe4qj_135:hover {
    background-color: var( --puck-button-secondary-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var(--puck-button-secondary-color-text, var(--puck-color-text));
  }
}
._Button--secondary_oe4qj_135:active {
  background-color: var( --puck-button-secondary-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-button-secondary-color-text, var(--puck-color-text));
}
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123,
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-secondary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-secondary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--flush_oe4qj_171 {
  border-radius: var(--puck-radius-none);
}
._Button--disabled_oe4qj_123:hover {
  cursor: not-allowed;
}
._Button--fullWidth_oe4qj_179 {
  justify-content: center;
  width: 100%;
}
._Button-spinner_oe4qj_184 {
  padding-inline-start: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Select/styles.module.css/#css-module-data */
._Select_1n4iv_1 {
  position: relative;
  z-index: 1;
}
._Select-buttonInner_1n4iv_6 {
  align-items: center;
  display: flex;
}
._Select-buttonIcon_1n4iv_11 {
  align-items: center;
  display: flex;
  justify-content: center;
}
._Select--standalone_1n4iv_17 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Select--actionBar_1n4iv_22 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}
._Select-items_1n4iv_27 {
  background: var(--puck-color-surface);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-l);
  margin: 10px 8px;
  margin-left: 0;
  padding: var(--puck-space-1);
  z-index: 2;
  list-style: none;
}
._SelectItem_1n4iv_38 {
  background: transparent;
  border-radius: var(--puck-radius-m);
  border: none;
  color: var(--puck-color-text-secondary);
  cursor: pointer;
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  font-size: var(--puck-font-size-xxs);
  margin: 0;
  padding: var(--puck-space-2) var(--puck-space-3);
  width: 100%;
}
._SelectItem--isSelected_1n4iv_53 {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
  font-weight: var(--puck-font-weight-medium);
}
._SelectItem--isSelected_1n4iv_53 ._SelectItem-icon_1n4iv_59 {
  color: var(--puck-color-interactive);
}
._SelectItem_1n4iv_38:hover {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextEditor/styles.module.css/#css-module-data */
._RichTextEditor_5wzos_1 .ProseMirror {
  white-space: pre-wrap;
  word-wrap: break-word;
  cursor: text;
  outline: none;
  position: relative;
}
._RichTextEditor_5wzos_1 .rich-text * {
  white-space: pre-wrap;
  user-select: auto;
  -webkit-user-select: auto;
}
._RichTextEditor_5wzos_1 .rich-text blockquote {
  margin: 1em 0;
  padding: 0 1em;
  border-left: var(--puck-border-width-strong) solid var(--puck-color-border);
}
._RichTextEditor_5wzos_1 .rich-text code {
  background-color: var(--puck-color-surface-muted);
  padding: var(--puck-space-1) var(--puck-space-2);
  border-radius: var(--puck-radius-m);
}
._RichTextEditor_5wzos_1 .rich-text p:empty::before {
  content: "\\a0";
}
._RichTextEditor_5wzos_1 .rich-text pre code {
  display: block;
  padding: var(--puck-space-2) var(--puck-space-3);
}
._RichTextEditor_5wzos_1 .rich-text > *:first-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:first-child,
._RichTextEditor_5wzos_1 .rich-text * p:first-of-type {
  margin-top: 0;
}
._RichTextEditor_5wzos_1 .rich-text > *:last-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:last-child,
._RichTextEditor_5wzos_1 .rich-text * p:last-of-type {
  margin-bottom: 0;
}
._RichTextEditor--editor_5wzos_50 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  resize: vertical;
  text-align: initial;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
  min-height: 128px;
}
._RichTextEditor--editor_5wzos_50 .rich-text {
  flex-grow: 1;
}
._RichTextEditor--editor_5wzos_50 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50 .rich-text .ProseMirror {
  height: 100%;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}
._RichTextEditor--editor_5wzos_50 .rich-text ul,
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  padding-left: var(--puck-space-5);
}
._RichTextEditor--editor_5wzos_50 .rich-text li {
  line-height: 1.5;
}
._RichTextEditor--editor_5wzos_50 .rich-text p {
  margin-block: var(--puck-space-3);
}
._RichTextEditor--editor_5wzos_50 .rich-text ul {
  list-style: disc;
}
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  list-style: decimal;
}
._RichTextEditor--editor_5wzos_50:focus-within {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._RichTextEditor--editor_5wzos_50:hover:not(._RichTextEditor--disabled_5wzos_123) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 {
  background: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text .ProseMirror {
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .ProseMirror[contenteditable=false] {
  cursor: default;
}
._RichTextEditor_5wzos_1:not(:focus-within):not(._RichTextEditor--isActive_5wzos_159) .ProseMirror ::selection {
  background-color: transparent;
}
._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  position: sticky;
  top: 0;
  z-index: 1;
}
._RichTextEditor--disabled_5wzos_123 ._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/FieldGroup/styles.module.css/#css-module-data */
._FieldGroup-box_gwfyv_1 {
  display: flex;
  flex-direction: column;
  margin: 0 var(--_puck-field-group-inset-x, 0px) var(--_puck-field-group-inset-bottom, 0px);
}
._FieldGroup-box--card_gwfyv_9 {
  background-color: var(--puck-field-color-surface, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
}
._FieldGroup-fieldset_gwfyv_16 {
  border: none;
  margin: 0;
  min-width: 0;
  padding: 0;
  --_puck-field-group-inset-x: 0px;
  --_puck-field-group-inset-top: 0px;
  --_puck-field-group-inset-bottom: 0px;
  --_puck-field-group-collapsed-flush-inset-bottom: 0px;
  --_puck-field-group-guide-width: 0px;
  --_puck-field-group-guide-space: 0px;
}
._FieldGroup-box--card_gwfyv_9 > ._FieldGroup-fieldset_gwfyv_16 {
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}
._FieldGroup-box--flush_gwfyv_42:not(:first-child) {
  margin-top: var(--puck-space-2);
}
._FieldGroup-box--flush_gwfyv_42 > ._FieldGroup-fieldset_gwfyv_16 {
  --_puck-field-group-guide-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-group-guide-space: var(--puck-space-3);
}
._FieldGroup-box--flush_gwfyv_42 {
  border-inline-start: var(--_puck-field-group-guide-width, 0px) solid var(--puck-color-border-muted);
  padding-inline-start: var(--_puck-field-group-guide-space, 0px);
}
._FieldGroup-fieldset_gwfyv_16 > :not([data-puck-field-group-collapsible]) + :not([data-puck-field-group-collapsible]) {
  margin-top: var(--puck-space-3);
}
._FieldGroup-fieldset_gwfyv_16 > [data-puck-field-group-collapsible]:not(:last-child) {
  --_puck-field-group-inset-bottom: var(--puck-space-3);
  --_puck-field-group-collapsed-flush-inset-bottom: calc( var(--puck-space-3) + var(--puck-space-2) );
}
._FieldGroup-fieldset_gwfyv_16 > :not([data-puck-field-group-collapsible]) + [data-puck-field-group-collapsible] {
  --_puck-field-group-inset-top: var(--puck-space-3);
}
._FieldGroup--collapsed_gwfyv_85 {
  --puck-field-label-space-y: 0;
}
._FieldGroup--expanded_gwfyv_90 {
  display: flow-root;
}
._FieldGroup-toggle_gwfyv_94 {
  appearance: none;
  background: none;
  border: none;
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  display: block;
  font: inherit;
  margin: 0;
  padding: var(--_puck-field-group-inset-top, 0px) var(--_puck-field-group-inset-x, 0px) var(--_puck-field-group-inset-bottom, 0px);
  text-align: start;
  width: 100%;
}
._FieldGroup--expanded_gwfyv_90 > ._FieldGroup-toggle_gwfyv_94 {
  padding-bottom: 0;
}
._FieldGroup--flush_gwfyv_119._FieldGroup--collapsed_gwfyv_85 > ._FieldGroup-toggle_gwfyv_94 {
  padding-bottom: var( --_puck-field-group-collapsed-flush-inset-bottom, var(--_puck-field-group-inset-bottom, 0px) );
}
._FieldGroup-toggle_gwfyv_94:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._FieldGroup-toggle_gwfyv_94:hover {
    --puck-field-label-color-text: var(--puck-color-text);
    --puck-field-label-color-icon: var(--puck-color-text);
  }
}
._FieldGroup-toggleIcon_gwfyv_138 {
  display: flex;
}
._FieldGroup--expanded_gwfyv_90 > ._FieldGroup-toggle_gwfyv_94 ._FieldGroup-toggleIcon_gwfyv_138 {
  transform: rotate(180deg);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Tabs/styles.module.css/#css-module-data */
._Tabs-list_x7mqh_1,
._Tabs-list_x7mqh_1 * {
  box-sizing: border-box;
}
._Tabs-list_x7mqh_1 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: flex;
  overflow-x: auto;
  padding: var(--puck-space-2);
  gap: var(--puck-space-1);
}
._Tabs-tab_x7mqh_14 {
  appearance: none;
  background: var(--puck-fieldtabs-color-bg, none);
  border: none;
  border-radius: var(--puck-fieldtabs-radius, var(--puck-radius-m));
  color: var(--puck-fieldtabs-color-text, var(--puck-color-text-secondary));
  cursor: pointer;
  flex-shrink: 0;
  font: inherit;
  font-size: var(--puck-fieldtabs-font-size, var(--puck-font-size-xxxs));
  font-weight: var( --puck-fieldtabs-font-weight, var(--puck-font-weight-medium) );
  padding: var(--puck-fieldtabs-space, var(--puck-space-2));
  white-space: nowrap;
}
._Tabs-tab--selected_x7mqh_32 {
  background: var( --puck-fieldtabs-color-bg-selected, var(--puck-color-interactive-soft) );
  color: var( --puck-fieldtabs-color-text-selected, var(--puck-color-interactive) );
}
._Tabs-tab_x7mqh_14:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Tabs-tab_x7mqh_14:not(._Tabs-tab--selected_x7mqh_32):hover {
    background: var( --puck-fieldtabs-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var( --puck-fieldtabs-color-text-hover, var(--puck-color-text-secondary) );
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_ckmoo_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent_ckmoo_1[popover] {
  opacity: 0.75 !important;
  background: transparent;
  border: 0;
  bottom: auto;
  color: inherit;
  margin: 0;
  overflow: visible;
  padding: 0;
  right: auto;
}
._DraggableComponent-overlayWrapper_ckmoo_19 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_ckmoo_19 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_ckmoo_1:focus-visible > ._DraggableComponent-overlayWrapper_ckmoo_19 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_ckmoo_51 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_ckmoo_67 > ._DraggableComponent-overlayWrapper_ckmoo_19 > ._DraggableComponent-overlay_ckmoo_19 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_ckmoo_85 > ._DraggableComponent-overlayWrapper_ckmoo_19 > ._DraggableComponent-overlay_ckmoo_19 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_ckmoo_1:has(._DraggableComponent--hover_ckmoo_67 > ._DraggableComponent-overlayWrapper_ckmoo_19) > ._DraggableComponent-overlayWrapper_ckmoo_19 {
  display: none;
}
._DraggableComponent-actionsOverlay_ckmoo_102 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_ckmoo_85 ._DraggableComponent-actionsOverlay_ckmoo_102 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_ckmoo_102 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_ckmoo_124 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_blawx_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
  overflow-wrap: inherit;
}
[data-dnd-dragging] ._InlineTextField_blawx_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_blawx_1::selection {
  display: none;
}
._InlineTextField_blawx_1:empty::before {
  content: attr(data-placeholder);
  opacity: 0.5;
  pointer-events: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Fields/styles.module.css/#css-module-data */
._PuckFields_1tz2l_1 {
  position: relative;
  font-family: var(--puck-font-family);
}
._PuckFields--isLoading_1tz2l_6 {
  min-height: 48px;
}
._PuckFields-loadingOverlay_1tz2l_10 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  top: 0px;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}
._PuckFields-loadingOverlayInner_1tz2l_25 {
  display: flex;
  padding: var(--puck-space-4);
  position: sticky;
  top: 0;
}
._PuckFields-field_1tz2l_32 * {
  box-sizing: border-box;
}
._PuckFields-rows_1tz2l_37 {
  display: contents;
}
._PuckFields--wrapFields_1tz2l_41 ._PuckFields-rows_1tz2l_37 > * {
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
}
._PuckFields--wrapFields_1tz2l_41 ._PuckFields-rows_1tz2l_37 > :not([data-puck-tab-marker]) ~ :not([data-puck-tab-marker]) {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
}
._PuckFields--wrapFields_1tz2l_41 ._PuckFields-rows_1tz2l_37 > [data-puck-field-group-collapsible] {
  padding: 0;
  --_puck-field-group-inset-x: var(--puck-space-4);
  --_puck-field-group-inset-top: var(--puck-space-4);
  --_puck-field-group-inset-bottom: var(--puck-space-4);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ComponentList/styles.module.css/#css-module-data */
._ComponentList_htktj_1 {
  max-width: 100%;
}
._ComponentList--isExpanded_htktj_5 + ._ComponentList_htktj_1 {
  margin-top: var(--puck-space-3);
}
._ComponentList-content_htktj_9 {
  display: none;
}
._ComponentList--isExpanded_htktj_5 > ._ComponentList-content_htktj_9 {
  display: block;
}
._ComponentList-title_htktj_17 {
  background-color: transparent;
  border: 0;
  color: var(--puck-drawer-category-color-text, var(--puck-color-text-muted));
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: var(--puck-drawer-category-font-size, var(--puck-font-size-xxxs));
  list-style: none;
  margin-bottom: 6px;
  padding: var(--puck-drawer-category-space, var(--puck-space-2));
  text-transform: uppercase;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  gap: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  width: 100%;
}
._ComponentList-title_htktj_17:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ComponentList-title_htktj_17:hover {
    background-color: var( --puck-drawer-category-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var( --puck-drawer-category-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._ComponentList-title_htktj_17:active {
  background-color: var( --puck-drawer-category-color-bg-active, var(--puck-color-interactive-subtle) );
  transition: none;
}
._ComponentList-titleIcon_htktj_63 {
  margin-inline-start: auto;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Preview/styles.module.css/#css-module-data */
._PuckPreview_zbic3_1 {
  position: relative;
  height: 100%;
}
._PuckPreview-frame_zbic3_6 {
  border: none;
  height: 100%;
  width: 100%;
}
._PuckPreview-frame_zbic3_6[data-puck-outline-dragging] {
  pointer-events: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/drop-line/styles.module.css/#css-module-data */
._DropLine_eyz3q_2 {
  background: var(--_puck-outline-color-drop-indicator);
  border-radius: calc(var(--_puck-outline-drop-indicator-size) / 2);
  height: var(--_puck-outline-drop-indicator-size);
  inset-inline: 0;
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropLine--top_eyz3q_12 {
  top: 0;
}
._DropLine--bottom_eyz3q_16 {
  bottom: 0;
}
._DropLine--top_eyz3q_12._DropLine--outset_eyz3q_20 {
  top: calc(-1 * var(--_puck-outline-drop-indicator-size));
}
._DropLine--bottom_eyz3q_16._DropLine--outset_eyz3q_20 {
  bottom: calc(-1 * var(--_puck-outline-drop-indicator-size));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/empty-zone-placeholder/styles.module.css/#css-module-data */
._LayerTree-helper_1m7e4_2 {
  color: var(--puck-outline-color-text-helper, var(--puck-color-text-subtle));
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-helperRoot_1m7e4_11 {
  padding-inline-start: var(--puck-space-3);
}
._LayerTree-helper_1m7e4_2[data-puck-drop-target] {
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer/styles.module.css/#css-module-data */
._Layer_onfgu_1 {
  position: relative;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
}
._Layer-inner_onfgu_8 {
  align-items: center;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Layer--isSortable_onfgu_18 > ._Layer-inner_onfgu_8 {
  cursor: grab;
}
._Layer-content_onfgu_22 {
  display: flex;
  gap: var(--puck-space-4);
  flex: 1 1 auto;
  min-width: 0;
}
._Layer-clickable_onfgu_29 {
  align-items: center;
  background: none;
  border: 0;
  border-radius: var(--_puck-outline-radius);
  color: inherit;
  cursor: inherit;
  display: flex;
  flex: 1 1 auto;
  font: inherit;
  min-width: 0;
  padding: 0;
}
[data-puck-dnd-disabled] ._Layer-inner_onfgu_8,
[data-puck-dnd-disabled] ._Layer-clickable_onfgu_29 {
  cursor: pointer;
}
._Layer-clickable_onfgu_29:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
  z-index: 1;
}
._Layer-caret_onfgu_57 {
  visibility: hidden;
  display: flex;
  flex-shrink: 0;
}
._Layer-caret_onfgu_57 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-content_onfgu_22 {
  font-weight: var(--puck-font-weight-bold);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 {
  visibility: visible;
}
._Layer-title_onfgu_76 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  margin: var(--puck-space-1);
  cursor: pointer;
}
._Layer-name_onfgu_85 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._Layer-icon_onfgu_91 {
  color: var(--puck-outline-color-icon, var(--puck-color-text-subtle));
  margin-top: var(--puck-space-1);
}
._Layer-icon_onfgu_91 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._Layer-zones_onfgu_101 {
  display: none;
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-4));
}
._Layer--isExpanded_onfgu_106 > ._Layer-zones_onfgu_101 {
  display: block;
}
._Layer--isExpanded_onfgu_106 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 svg {
  transform: rotate(90deg);
}
@media (hover: hover) and (pointer: fine) {
  ._Layer_onfgu_1:not(._Layer--isSelected_onfgu_115) > ._Layer-inner_onfgu_8:hover {
    --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-hover);
    border-color: var(--_puck-outline-color-border-hover);
    background: var(--_puck-outline-color-bg-hover);
    transition: none;
  }
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  border-color: var( --puck-outline-color-border-selected, var(--puck-color-selection-border) );
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-selected);
  background: var(--_puck-outline-color-bg-selected);
}
._Layer--isExpandCandidate_onfgu_138 > ._Layer-inner_onfgu_8 {
  border-color: var(--_puck-outline-color-border-hover);
  background: var(--_puck-outline-color-bg-hover);
}
._Layer--isDragSource_onfgu_143 > ._Layer-inner_onfgu_8 {
  color: var(--puck-color-text-muted);
  background: transparent;
}
._Layer--isDragSource_onfgu_143 > ._Layer-zones_onfgu_101 {
  opacity: 0.5;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-actions/styles.module.css/#css-module-data */
._LayerActions_d90t9_2 {
  position: sticky;
  inset-inline-end: calc(var(--puck-space-1) * -1);
  padding-inline: var(--puck-space-1);
  display: flex;
  visibility: hidden;
  flex-shrink: 0;
  color: var(--_puck-outline-color-text);
  background: var(--_puck-outline-actions-color-bg);
  border-top-right-radius: var(--_puck-outline-radius);
  border-bottom-right-radius: var(--_puck-outline-radius);
}
._LayerActions--visible_d90t9_18 {
  visibility: visible;
}
._LayerActions_d90t9_2 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-items/styles.module.css/#css-module-data */
._LayerTree_o5tyt_1 {
  color: var(--_puck-outline-color-text);
  font-family: var(--puck-outline-font-family, var(--puck-font-family));
  font-size: var(--puck-outline-font-size, var(--puck-font-size-xxxs));
  margin: 0;
  position: relative;
  list-style: none;
  padding: 0;
}
._LayerTree--nested_o5tyt_12 {
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-3));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-zone/styles.module.css/#css-module-data */
._LayerTree-zoneTitle_fvhlh_2 {
  color: var(--_puck-outline-zone-color-text);
  font-size: var( --puck-outline-zone-font-size, calc(var(--puck-font-size-xxxs) * 0.9) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-zoneIcon_fvhlh_19 {
  margin-top: var(--puck-space-1);
}
._LayerTree-zoneIcon_fvhlh_19 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._LayerTree-zoneTitle_fvhlh_2[data-puck-drop-target] {
  color: var(--_puck-outline-color-text-hover);
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/styles.module.css/#css-module-data */
._LayerTreeRoot_1qowl_1 {
  min-width: max-content;
  --_puck-iconbutton-color-bg-hover: transparent;
  --_puck-outline-color-text: var( --puck-outline-color-text, var(--puck-color-text-primary) );
  --_puck-outline-border-width: var( --puck-outline-border-width, var(--puck-border-width-regular) );
  --_puck-outline-radius: var(--puck-outline-radius, var(--puck-radius-m));
  --_puck-outline-caret-size: var( --puck-outline-action-size, var(--puck-icon-size-s) );
  --_puck-outline-icon-size: var( --puck-outline-icon-size, var(--puck-icon-size-xs) );
  --_puck-outline-color-bg-selected: var( --puck-outline-color-bg-selected, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-bg-hover: var( --puck-outline-color-bg-hover, var(--puck-color-interactive-soft) );
  --_puck-outline-color-border-hover: var( --puck-outline-color-border-hover, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-text-hover: var( --puck-outline-color-text-hover, var(--puck-color-interactive) );
  --_puck-outline-color-drop-indicator: var( --puck-outline-color-drop-indicator, var(--puck-color-line-placeholder) );
  --_puck-outline-drop-indicator-size: var(--puck-line-placeholder-width);
  --_puck-outline-zone-color-text: var( --puck-outline-zone-color-text, var(--puck-color-text-muted) );
  --_puck-outline-actions-color-bg: transparent;
  --_puck-outline-caret-slot: calc( var(--_puck-outline-caret-size) + var(--puck-iconbutton-space, var(--puck-space-1)) * 2 );
  --_puck-outline-label-indent: calc( var(--_puck-outline-caret-slot) + var(--puck-space-2) + var(--_puck-outline-border-width) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/collapse-all/styles.module.css/#css-module-data */
._CollapseAll_1r4cy_1 {
  visibility: hidden;
}
._CollapseAll-icon_1r4cy_5 {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._CollapseAll--visible_1r4cy_10 {
  visibility: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/outline-header/styles.module.css/#css-module-data */
._OutlineHeader_ntv8r_1 {
  display: flex;
  align-items: center;
  width: 100%;
  gap: var(--puck-space-2);
  padding-block: var(--puck-space-3);
  padding-inline: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/styles.module.css/#css-module-data */
._OutlineWrapper_b9ln0_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
}
._OutlineWrapper-collapseAll_b9ln0_9 {
  display: flex;
  align-items: center;
  margin-inline-start: auto;
}
._OutlineWrapper-layers_b9ln0_15 {
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  padding: var(--puck-space-1);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Layout/styles.module.css/#css-module-data */
._Puck_tzaxg_19 {
  font-family: var(--puck-font-family);
  overflow-x: hidden;
  visibility: visible !important;
}
@media (min-width: 766px) {
  ._Puck_tzaxg_19 {
    overflow-x: auto;
  }
}
._Puck-portal_tzaxg_31 {
  position: relative;
  z-index: 2;
}
._PuckLayout_tzaxg_36 {
  height: 100dvh;
}
._PuckLayout-inner_tzaxg_40 {
  --puck-frame-width: auto;
  --puck-pluginbar-width: min-content;
  --puck-sidebar-width: 0px;
  --puck-sidebar-left-width: var( --puck-user-sidebar-left-width, var(--puck-sidebar-width) );
  --puck-sidebar-right-width: var( --puck-user-sidebar-right-width, var(--puck-sidebar-width) );
  background-color: var(--puck-color-surface-subtle);
  display: grid;
  grid-template-areas: "header" "editor" "left" "right" "sidenav";
  grid-template-columns: var(--puck-frame-width);
  grid-template-rows: min-content auto 0 0 var(--puck-pluginbar-width);
  height: 100%;
  position: relative;
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-exit);
  z-index: 0;
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 68px;
    grid-template-areas: "header header header header" "sidenav left editor right";
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) 0;
    grid-template-rows: min-content auto;
  }
  ._Puck--hidePlugins_tzaxg_73 ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 0;
  }
}
._PuckLayout--mounted_tzaxg_78 ._PuckLayout-inner_tzaxg_40 {
  --puck-sidebar-width: 186px;
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 30% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 55% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto min-content 0 var(--puck-pluginbar-width);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
@media (min-width: 638px) {
  ._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 458px) {
  ._PuckLayout-mounted_tzaxg_156 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: minmax(266px, auto);
  }
}
@media (min-width: 638px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: minmax(186px, 250px);
  }
}
@media (min-width: 766px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: auto;
  }
}
@media (min-width: 990px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 256px;
  }
}
@media (min-width: 1198px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 274px;
  }
}
@media (min-width: 1398px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 290px;
  }
}
@media (min-width: 1598px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 320px;
  }
}
._PuckLayout-nav_tzaxg_197 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  background-color: var( --puck-pluginbar-color-bg, var(--puck-color-surface-subtle) );
  grid-area: sidenav;
  overflow: hidden;
  width: 100%;
}
@media (min-width: 638px) {
  ._PuckLayout-nav_tzaxg_197 {
    border-top: 0;
    border-right: var(--puck-border-width-regular) solid var(--puck-color-border);
    box-sizing: border-box;
  }
}
._PuckLayout-header_tzaxg_217 {
  grid-area: header;
}
._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
    overflow: auto;
  }
}
._PuckPluginTab_tzaxg_231 {
  display: none;
  flex-grow: 1;
  max-height: 100%;
}
._PuckPluginTab--visible_tzaxg_237 {
  display: flex;
  flex-direction: column;
  min-height: 0;
}
._PuckPluginTab-body_tzaxg_243 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 100%;
  min-height: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/MenuBar/styles.module.css/#css-module-data */
._MenuBar_1hxnj_1 {
  background-color: var(--_puck-menu-bar-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: none;
  left: 0;
  margin-top: 1px;
  padding: var(--puck-space-2) var(--puck-space-4);
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;
}
._MenuBar--menuOpen_1hxnj_14 {
  display: block;
}
@media (min-width: 638px) {
  ._MenuBar_1hxnj_1 {
    border: none;
    display: block;
    margin-top: 0;
    overflow-y: visible;
    padding: 0;
    position: static;
  }
}
._MenuBar-inner_1hxnj_29 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-2) var(--puck-space-4);
  justify-content: flex-end;
}
@media (min-width: 638px) {
  ._MenuBar-inner_1hxnj_29 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
._MenuBar-history_1hxnj_45 {
  display: flex;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Header/styles.module.css/#css-module-data */
._PuckHeader_c2nei_1 {
  --_puck-menu-bar-color-bg: var( --puck-header-color-bg, var(--puck-color-surface) );
  background: var(--puck-header-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-header-color-text, var(--puck-color-text));
  --_puck-heading-color: var(--puck-header-color-text, var(--puck-color-text));
  grid-area: header;
  position: relative;
  max-width: 100vw;
}
@media (min-width: 638px) {
  ._PuckHeader_c2nei_1 {
    padding-left: 67px;
  }
  ._PuckHeader--hidePlugins_c2nei_21 {
    padding-left: 0;
  }
}
._PuckHeader-inner_c2nei_26 {
  align-items: end;
  display: grid;
  gap: var(--puck-space-chrome-gutter);
  grid-template-areas: "left middle right";
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  padding: var(--puck-space-chrome-gutter);
}
@media (min-width: 638px) {
  ._PuckHeader-inner_c2nei_26 {
    border-left: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
  ._PuckHeader--hidePlugins_c2nei_21 ._PuckHeader-inner_c2nei_26 {
    border-left: none;
  }
}
._PuckHeader-toggle_c2nei_46 {
  display: flex;
  margin-inline-start: calc(var(--puck-space-1) * -1);
  padding-top: 2px;
}
._PuckHeader-rightSideBarToggle_c2nei_52,
._PuckHeader-leftSideBarToggle_c2nei_53 {
  display: none;
}
@media (min-width: 638px) {
  ._PuckHeader-rightSideBarToggle_c2nei_52,
  ._PuckHeader-leftSideBarToggle_c2nei_53 {
    display: block;
  }
}
._PuckHeader-title_c2nei_64 {
  align-self: center;
}
._PuckHeader-path_c2nei_68 {
  font-family: var(--puck-font-family-monospaced);
  font-size: var(--puck-font-size-xxs);
  font-weight: normal;
  word-break: break-all;
}
._PuckHeader-tools_c2nei_75 {
  display: flex;
  gap: var(--puck-space-4);
  justify-content: flex-end;
}
._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text-muted);
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._PuckHeader--menuOpen_c2nei_86 ._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text);
}
@media (min-width: 638px) {
  ._PuckHeader-menuButton_c2nei_81 {
    display: none;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/SidebarSection/styles.module.css/#css-module-data */
._SidebarSection_1fbnz_1 {
  display: flex;
  position: relative;
  flex-direction: column;
  color: var(--puck-color-text);
}
._SidebarSection_1fbnz_1:last-of-type {
  flex-grow: 1;
}
._SidebarSection-title_1fbnz_12 {
  background: var(--_puck-sidebar-section-color-bg, var(--puck-color-surface));
  padding: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  overflow-x: auto;
}
._SidebarSection-title_1fbnz_12:has(+ * [data-puck-tablist]) {
  border-bottom: none;
  padding-bottom: var(--puck-space-2);
}
._SidebarSection--noBorderTop_1fbnz_25 > ._SidebarSection-title_1fbnz_12 {
  border-top: 0px;
}
._SidebarSection-content_1fbnz_29:last-child {
  padding-bottom: var(--puck-space-1);
}
._SidebarSection_1fbnz_1:last-of-type ._SidebarSection-content_1fbnz_29 {
  border-bottom: none;
  flex-grow: 1;
}
._SidebarSection-breadcrumbLabel_1fbnz_38 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._SidebarSection-breadcrumbLabel_1fbnz_38:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._SidebarSection-breadcrumbLabel_1fbnz_38:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._SidebarSection-breadcrumbLabel_1fbnz_38:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._SidebarSection-breadcrumbs_1fbnz_67 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-breadcrumb_1fbnz_38 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-heading_1fbnz_79 {
  padding-inline-end: var(--puck-space-4);
}
._SidebarSection-loadingOverlay_1fbnz_83 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Breadcrumbs/styles.module.css/#css-module-data */
._Breadcrumbs_8c6w5_1 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Breadcrumbs-breadcrumbLabel_8c6w5_7:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._Breadcrumbs-breadcrumb_8c6w5_7 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ViewportControls/styles.module.css/#css-module-data */
._ViewportControls_v26yb_1 {
  position: relative;
}
._ViewportControls--fullScreen_v26yb_5 {
  border-radius: 32px;
  display: flex;
  position: absolute;
  bottom: var(--puck-space-3);
  right: var(--puck-space-3);
  overflow: hidden;
}
._ViewportControls-toggleButton_v26yb_14 {
  display: none;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14 {
  align-items: center;
  background-color: var(--puck-color-surface-inverse);
  border: var(--puck-border-width-regular) solid var(--puck-color-border-inverse);
  border-radius: var(--puck-radius-pill);
  cursor: pointer;
  color: var(--puck-color-text-inverse);
  display: flex;
  justify-content: center;
  width: 42px;
  height: 42px;
  z-index: 1;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14:hover {
  color: var(--puck-color-interactive-inverse-hover);
  border: var(--puck-border-width-regular) solid var(--puck-color-interactive-inverse-hover);
}
._ViewportControls-actions_v26yb_39 {
  display: flex;
}
._ViewportControls-actionsInner_v26yb_43 {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  overflow: hidden;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  background: var(--puck-color-surface-muted);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-pill);
  margin-left: none;
  margin-right: none;
  padding-right: 42px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(100%);
  transition: transform var(--puck-duration-medium) var(--puck-ease-emphasized);
}
._ViewportControls--fullScreen_v26yb_5._ViewportControls--isExpanded_v26yb_67 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(42px);
}
._ViewportControls-divider_v26yb_72 {
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-bottom: var(--puck-space-2);
  margin-top: var(--puck-space-2);
}
._ViewportControls-zoomSelect_v26yb_79 {
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23c3c3c3'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat;
  background-size: 10px;
  color: currentColor;
  background-position: calc(100% - 12px) calc(50% + 3px);
  background-repeat: no-repeat;
  border: 0;
  font-size: var(--puck-font-size-xxxs);
  padding: 0;
  padding-left: var(--puck-space-2);
  width: 96px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
  display: none;
}
@media (min-width: 638px) {
  ._ViewportControls-zoom_v26yb_79,
  ._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
    display: flex;
    justify-content: center;
  }
}
._ViewportControls-zoomSelect_v26yb_79:dir(rtl) {
  background-position: 12px calc(50% + 3px);
}
._ViewportButton-inner_v26yb_110 {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
}
._ViewportButton--isActive_v26yb_118 ._ViewportButton-inner_v26yb_110 {
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Canvas/styles.module.css/#css-module-data */
._PuckCanvas_zw9iy_1 {
  color: var(--puck-canvas-color-text, var(--puck-color-text));
  background: var(--puck-canvas-color-bg, var(--puck-color-surface-muted));
  display: flex;
  grid-area: editor;
  flex-direction: column;
  padding: var(--puck-space-chrome-gutter);
  position: relative;
  overflow: auto;
}
@media (min-width: 1198px) {
  ._PuckCanvas_zw9iy_1 {
    padding: calc(var(--puck-space-chrome-gutter) * 1.5);
    padding-top: calc(var(--puck-space-chrome-gutter) * 0.5);
  }
  ._PuckCanvas_zw9iy_1:not(._PuckCanvas_zw9iy_1:has(._PuckCanvas-controls_zw9iy_18)) {
    padding-top: calc(var(--puck-space-chrome-gutter) * 1.5);
  }
}
._PuckCanvas--fullScreen_zw9iy_23 {
  padding: 0;
  overflow: hidden;
}
@media (min-width: 1198px) {
  ._PuckCanvas--fullScreen_zw9iy_23 {
    padding: 0;
  }
}
._PuckCanvas-inner_zw9iy_34 {
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 288px;
  position: relative;
  width: 100%;
}
._PuckCanvas-root_zw9iy_43 {
  background: var(--puck-canvas-preview-color-bg, var(--puck-color-surface));
  outline: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: content-box;
  min-width: 321px;
  position: absolute;
  pointer-events: none;
  transform-origin: top;
  top: 0;
  bottom: 0;
  opacity: 0;
}
@media (min-width: 1198px) {
  ._PuckCanvas-root_zw9iy_43 {
    min-width: unset;
  }
}
@media (prefers-reduced-motion: reduce) {
  ._PuckCanvas-root_zw9iy_43 {
    transition: none !important;
  }
}
._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-root_zw9iy_43 {
  pointer-events: unset;
  opacity: 1;
}
._PuckCanvas-loader_zw9iy_73 {
  align-items: center;
  color: var(--puck-color-text-subtle);
  display: flex;
  height: 100%;
  justify-content: center;
  transition: opacity var(--puck-duration-slow) var(--puck-ease-entrance);
  opacity: 0;
  pointer-events: none;
}
._PuckCanvas--showLoader_zw9iy_84 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 1;
}
._PuckCanvas--showLoader_zw9iy_84._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 0;
  height: 0;
  transition: none;
}
._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: calc(var(--puck-space-chrome-gutter) * 0.5);
}
._PuckCanvas--fullScreen_zw9iy_23 ._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: 0;
  z-index: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/ResizeHandle/styles.module.css/#css-module-data */
@media (min-width: 766px) {
  ._ResizeHandle_144bf_2 {
    position: absolute;
    width: 5px;
    height: 100%;
    cursor: col-resize;
    z-index: 10;
    background: transparent;
    top: 0;
  }
  ._ResizeHandle_144bf_2:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  ._ResizeHandle--left_144bf_16 {
    right: -3px;
  }
  ._ResizeHandle--right_144bf_20 {
    left: -3px;
  }
}

/* components/Puck/components/ResizeHandle/styles.css */
[data-resize-overlay] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  cursor: col-resize;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Sidebar/styles.module.css/#css-module-data */
._Sidebar_16oed_1 {
  border-block-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  position: relative;
  display: none;
  flex-direction: column;
  overflow-y: auto;
}
._Sidebar--isVisible_16oed_10 {
  display: flex;
}
._Sidebar--left_16oed_14 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-left-color-bg, var(--puck-color-surface) );
  background: var( --puck-sidebar-left-color-bg, var(--puck-color-surface-subtle) );
  grid-area: left;
}
@media (min-width: 766px) {
  ._Sidebar--left_16oed_14 {
    border-block-start: 0;
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar--right_16oed_34 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-right-color-bg, var(--puck-color-surface) );
  background: var(--puck-sidebar-right-color-bg, var(--puck-color-surface));
  grid-area: right;
}
@media (min-width: 766px) {
  ._Sidebar--right_16oed_34 {
    border-block-start: 0;
    border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar-resizeHandle_16oed_51 {
  position: absolute;
  height: 100%;
}
._Sidebar--left_16oed_14 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: left;
  justify-self: end;
}
._Sidebar--right_16oed_34 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: right;
  justify-self: start;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Nav/styles.module.css/#css-module-data */
._Nav_vll2r_1 {
  display: flex;
}
._Nav-list_vll2r_5 {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  gap: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._Nav-list_vll2r_5 {
    padding-top: 32px;
    flex-direction: column;
    gap: var(--puck-space-4);
    width: 100%;
  }
}
._Nav-mobileActions_vll2r_23 {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-inline-start: auto;
  padding: var(--puck-space-1) var(--puck-space-4);
  border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
}
@media (min-width: 638px) {
  ._Nav-mobileActions_vll2r_23 {
    display: none;
  }
}
._NavItem-link_vll2r_39 {
  text-align: center;
  align-items: center;
  color: var(--puck-pluginbar-color-text, var(--puck-color-text-secondary));
  display: flex;
  gap: var(--puck-space-2);
  text-decoration: none;
  cursor: pointer;
  border-radius: var(--puck-radius-m);
  padding: var(--puck-space-2) var(--puck-space-1);
  width: 64px;
  box-sizing: border-box;
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    width: auto;
  }
}
._NavItem_vll2r_39:first-of-type {
  padding-left: var(--puck-space-4);
}
._NavItem_vll2r_39:last-of-type {
  padding-right: var(--puck-space-4);
}
@media (min-width: 638px) {
  ._NavItem_vll2r_39:first-of-type,
  ._NavItem_vll2r_39:last-of-type {
    padding: 0;
  }
}
._NavItem-link_vll2r_39 {
  border-top: var(--puck-border-width-strong) solid transparent;
  border-bottom: var(--puck-border-width-strong) solid transparent;
  border-radius: var(--puck-radius-none);
  flex-direction: column;
  font-size: var(--puck-pluginbar-font-size, var(--puck-font-size-xxxs));
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    border: 0;
    border-left: var(--puck-border-width-strong) solid transparent;
    border-right: var(--puck-border-width-strong) solid transparent;
  }
}
._NavItem-linkIcon_vll2r_90 {
  height: 2em;
  width: 2em;
}
._NavItem-linkIcon_vll2r_90 svg {
  height: 100%;
  width: 100%;
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: var(--puck-color-interactive-subtle);
  color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  font-weight: var(--puck-font-weight-semibold);
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: transparent;
  border-top-color: var(--puck-color-interactive);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-weight: var(--puck-font-weight-semibold);
}
@media (min-width: 638px) {
  ._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
    border-top-color: transparent;
    border-right-color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  }
}
._NavItem_vll2r_39:not(._NavItem--active_vll2r_100) > ._NavItem-link_vll2r_39:hover {
  background-color: var( --puck-pluginbar-color-bg-hover, var(--puck-color-interactive-soft) );
  color: var(--puck-pluginbar-color-text-hover, var(--puck-color-interactive));
}
@media (min-width: 638px) {
  ._NavItem--mobileOnly_vll2r_136 {
    display: none;
  }
}
._NavItem--desktopOnly_vll2r_141 {
  display: none;
}
@media (min-width: 638px) {
  ._NavItem--desktopOnly_vll2r_141 {
    display: block;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/blocks/styles.module.css/#css-module-data */
._BlocksPlugin_9af19_1 {
  padding: var(--puck-drawer-space, var(--puck-space-4));
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/outline/styles.module.css/#css-module-data */
._OutlinePlugin_1ylsc_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
  position: relative;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/fields/styles.module.css/#css-module-data */
._FieldsPlugin_1q574_1 {
  background: var(--puck-color-surface);
  height: 100%;
  overflow-y: auto;
}
._FieldsPlugin-header_1q574_7 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  font-weight: var(--puck-font-weight-semibold);
  padding-bottom: var(--puck-space-2);
  padding-left: var(--puck-space-4);
  padding-right: var(--puck-space-4);
  padding-top: var(--puck-space-2);
}
._FieldsPlugin-header_1q574_7:has(+ * [data-puck-tablist]) {
  border-bottom: none;
}
@media (min-width: 638px) {
  ._FieldsPlugin-header_1q574_7 {
    padding: var(--puck-space-4);
  }
}`,Mbe=`/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_gr1cb_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_gr1cb_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_gr1cb_30 + ._ActionBar-label_gr1cb_17 {
  padding-inline-start: 0;
}
._ActionBar-label_gr1cb_17 + ._ActionBarAction_gr1cb_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_gr1cb_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_gr1cb_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_gr1cb_38:empty {
  display: none;
}
._ActionBarAction_gr1cb_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_gr1cb_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction--grab_gr1cb_83 {
  cursor: grab;
  touch-action: none;
}
._ActionBarAction-icon_gr1cb_88 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}
._ActionBarAction_gr1cb_30 svg {
  max-width: none !important;
}
._ActionBarAction_gr1cb_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_gr1cb_30:hover:not(._ActionBarAction--disabled_gr1cb_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_gr1cb_30:active:not(._ActionBarAction--disabled_gr1cb_74),
._ActionBarAction--active_gr1cb_114 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_gr1cb_38 * {
  margin: 0;
}
._ActionBar-separator_gr1cb_127 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_ckmoo_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent_ckmoo_1[popover] {
  opacity: 0.75 !important;
  background: transparent;
  border: 0;
  bottom: auto;
  color: inherit;
  margin: 0;
  overflow: visible;
  padding: 0;
  right: auto;
}
._DraggableComponent-overlayWrapper_ckmoo_19 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_ckmoo_19 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_ckmoo_1:focus-visible > ._DraggableComponent-overlayWrapper_ckmoo_19 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_ckmoo_51 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_ckmoo_67 > ._DraggableComponent-overlayWrapper_ckmoo_19 > ._DraggableComponent-overlay_ckmoo_19 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_ckmoo_85 > ._DraggableComponent-overlayWrapper_ckmoo_19 > ._DraggableComponent-overlay_ckmoo_19 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_ckmoo_1:has(._DraggableComponent--hover_ckmoo_67 > ._DraggableComponent-overlayWrapper_ckmoo_19) > ._DraggableComponent-overlayWrapper_ckmoo_19 {
  display: none;
}
._DraggableComponent-actionsOverlay_ckmoo_102 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_ckmoo_85 ._DraggableComponent-actionsOverlay_ckmoo_102 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_ckmoo_102 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_ckmoo_124 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_blawx_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
  overflow-wrap: inherit;
}
[data-dnd-dragging] ._InlineTextField_blawx_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_blawx_1::selection {
  display: none;
}
._InlineTextField_blawx_1:empty::before {
  content: attr(data-placeholder);
  opacity: 0.5;
  pointer-events: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}`,fZ="data-puck-style-source",pZ="puck",Obe="data-puck-style-id",hZ={uiDefault:"ui-default",iframeInteractions:"iframe-styles"},yG=new WeakMap,Dbe=e=>{if(e)return e;if(typeof document!="undefined")return document},Rbe=e=>{let t=yG.get(e);if(t)return t;let r=new Map;return yG.set(e,r),r},mZ=(e,t,r=!1)=>{let n=e.head;if(n){if(t.parentElement!==n){r?n.prepend(t):n.append(t);return}r&&n.firstChild!==t&&n.prepend(t),!r&&n.lastChild!==t&&n.append(t)}},zbe=(e,t,r,n=!1)=>{let o=e.createElement("style");return o.setAttribute(fZ,pZ),o.setAttribute(Obe,t),o.textContent=r,mZ(e,o,n),o},gZ=e=>(e==null?void 0:e.getAttribute(fZ))===pZ,vZ=e=>{let t=Dbe(e==null?void 0:e.document);(0,yw.useInsertionEffect)(()=>{if(!e||!t)return;let r=Rbe(t),n=r.get(e.id);if(n)n.count=n.count+1,n.el.textContent!==e.cssText&&(n.el.textContent=e.cssText),mZ(t,n.el,e.prepend);else{let o=zbe(t,e.id,e.cssText,e.prepend);r.set(e.id,{count:1,el:o})}return()=>{let o=r.get(e.id);o&&(o.count=o.count-1,o.count<=0&&(o.el.remove(),r.delete(e.id)))}},[e==null?void 0:e.cssText,e==null?void 0:e.id,e==null?void 0:e.prepend,e==null?void 0:e.document,t])},D1=null,Pbe=()=>D1!==null?D1:typeof document=="undefined"?!1:(D1=getComputedStyle(document.documentElement).getPropertyValue("--_puck-styles-loaded").trim()!=="",D1),Nbe=()=>{let e=Pbe();vZ(e?null:{cssText:Tbe,id:hZ.uiDefault,prepend:!0}),(0,yw.useEffect)(()=>{},[])},Bbe=e=>{vZ(e?{cssText:Mbe,document:e,id:hZ.iframeInteractions}:null)},AD='style, link[rel="stylesheet"]',FO="data-puck-style-mirror",yZ=e=>!e.matches(AD)||gZ(e)?!1:e.tagName==="STYLE"?!!e.innerHTML.trim():!0,Fbe=e=>{let t=[];return e.querySelectorAll(AD).forEach(r=>{yZ(r)&&t.push(r)}),t},bG=e=>Array.from(document.styleSheets).find(t=>t.ownerNode.href===e.href),jbe=e=>{if(e)try{return Array.from(e.cssRules).map(t=>t.cssText).join("")}catch(t){console.warn("Access to stylesheet %s is denied. Ignoring\u2026",e.href)}return""},_G=(e,t)=>{let r=e.attributes;(r==null?void 0:r.length)>0&&Array.from(r).forEach(n=>{t.setAttribute(n.name,n.value)})},xG=e=>setTimeout(e,0),Hbe=({children:e,debug:t=!1,onStylesLoaded:r=()=>null,syncHostStyles:n=!0})=>{let{document:o,window:a}=qbe();return Bbe(o),(0,No.useEffect)(()=>{if(!a||!o)return()=>{};let i=[],s={},l=()=>{i.forEach(({mirror:v})=>{v.remove()}),i=[],Array.from(o.head.querySelectorAll(`[${FO}="true"]`)).forEach(v=>{v.remove()}),Object.keys(s).forEach(v=>{delete s[v]})},c=v=>i.findIndex(k=>k.original===v),u=(v,k=!1)=>ct(null,null,function*(){let x;if(v.nodeName==="LINK"&&k){x=document.createElement("style"),x.type="text/css";let w=bG(v);w||(yield new Promise(L=>{let I=()=>{L(),v.removeEventListener("load",I)};v.addEventListener("load",I)}),w=bG(v));let S=jbe(w);if(!S){t&&console.warn("Tried to load styles for link element, but couldn't find them. Skipping...");return}x.innerHTML=S,x.setAttribute("data-href",v.getAttribute("href"))}else x=v.cloneNode(!0);return x.setAttribute(FO,"true"),x}),d=v=>ct(null,null,function*(){let k=c(v);if(k>-1){t&&console.log("Tried to add an element that was already mirrored. Updating instead..."),i[k].mirror.innerText=v.innerText;return}let x=yield u(v);if(!x)return;let w=(0,K1.default)(x.outerHTML);if(s[w]){t&&console.log("iframe already contains element that is being mirrored. Skipping...");return}s[w]=!0,o.head.append(x),i.push({original:v,mirror:x}),t&&console.log(`Added style node ${v.outerHTML}`)}),f=v=>{var k,x;let w=c(v);if(w===-1){t&&console.log("Tried to remove an element that did not exist. Skipping...");return}let S=(0,K1.default)(v.outerHTML);(x=(k=i[w])==null?void 0:k.mirror)==null||x.remove(),delete s[S],t&&console.log(`Removed style node ${v.outerHTML}`)},p=new MutationObserver(v=>{v.forEach(k=>{k.type==="childList"&&(k.addedNodes.forEach(x=>{if(x.nodeType===Node.TEXT_NODE||x.nodeType===Node.ELEMENT_NODE){let w=x.nodeType===Node.TEXT_NODE?x.parentElement:x;w&&yZ(w)&&xG(()=>d(w))}}),k.removedNodes.forEach(x=>{if(x.nodeType===Node.TEXT_NODE||x.nodeType===Node.ELEMENT_NODE){let w=x.nodeType===Node.TEXT_NODE?x.parentElement:x;w&&w.matches(AD)&&!gZ(w)&&xG(()=>f(w))}}))})});if(!n)return r(),()=>{p.disconnect(),l()};let h=a.parent.document,m=Fbe(h),y=[],g=0,_=h.getElementsByTagName("html")[0];_G(_,o.documentElement);let b=h.getElementsByTagName("body")[0];return _G(b,o.body),Promise.all(m.map((v,k)=>ct(null,null,function*(){if(v.nodeName==="LINK"){let w=v.href;if(y.indexOf(w)>-1)return;y.push(w)}let x=yield u(v);if(x)return i.push({original:v,mirror:x}),x}))).then(v=>{let k=v.filter(x=>typeof x!="undefined");k.forEach(x=>{x.onload=()=>{g=g+1,g>=k.length&&r()},x.onerror=()=>{let w=x instanceof HTMLLinkElement?x.href:void 0;console.warn(`AutoFrame couldn't load a stylesheet${w?`: ${w}`:""}. This can happen if the parent document's stylesheet is blocked by the iframe's CSP, returns a non-2xx status, or fails to reach the network.`),g=g+1,g>=k.length&&r()}}),o.head.querySelectorAll(`[${FO}="true"]`).forEach(x=>{x.remove()}),o.head.append(...k),k.forEach(x=>{x.nodeName==="STYLE"&&(g=g+1)}),g>=k.length&&r(),p.observe(h.head,{childList:!0,subtree:!0}),k.forEach(x=>{let w=(0,K1.default)(x.outerHTML);s[w]=!0})}),()=>{p.disconnect(),l()}},[n]),(0,ld.jsx)(ld.Fragment,{children:e})},TD=(0,No.createContext)({}),qbe=()=>(0,No.useContext)(TD);
bZ.displayName="AutoFrame";
var Ube=bZ;
C();
var Vbe=()=>{let e=U(a=>a.config),t=U(a=>a.metadata),r=U(a=>a.state.data),o=U(a=>a.fieldTransforms);return(0,_Z.jsx)(jK,{data:r,config:e,metadata:t,fieldTransforms:o})},Wbe=Vbe;
C();
var $be=()=>{var e,t;let r=U(Ze(l=>{var c;return(c=l.state.indexes.nodes.root)==null?void 0:c.flatData.props})),n=U(l=>l.config),o=U(l=>l.metadata),a=(0,oD.useMemo)(()=>{let l=ns({props:r!=null?r:{}});return HI(l)},[r]),i=TK({component:a}),s=(0,oD.useMemo)(()=>j(A({},i),{children:(0,dy.jsx)(YO,{zone:Or}),puck:{renderDropZone:YO,isEditing:!0,dragRef:null,metadata:o},editMode:!0}),[i,o]);return(e=n.root)!=null&&e.render?(t=n.root)==null?void 0:t.render(j(A({},s),{id:"puck-root"})):(0,dy.jsx)(dy.Fragment,{children:s.children})},Gbe=$be;
C();
var Kbe={PuckPreview:"_PuckPreview_zbic3_1","PuckPreview-frame":"_PuckPreview-frame_zbic3_6"},jO=ae("PuckPreview",Kbe),Zbe=e=>{let t=U(r=>r.status);(0,hc.useEffect)(()=>{if(e.current&&t==="READY"){let r=e.current,n=i=>{let s=new vK("pointermove",j(A({},i),{bubbles:!0,cancelable:!1,clientX:i.clientX,clientY:i.clientY,pointerId:i.pointerId,pointerType:i.pointerType,isPrimary:i.isPrimary,originalTarget:i.target}));r.dispatchEvent(s)},o=()=>{var i;a(),(i=r.contentDocument)==null||i.addEventListener("pointermove",n,{capture:!0})},a=()=>{var i;(i=r.contentDocument)==null||i.removeEventListener("pointermove",n)};return o(),()=>{a()}}},[t])},Xbe=e=>{let t=U(o=>o.state.ui.previewMode),r=U(o=>o.status),n=U(o=>o.iframe.enabled);(0,hc.useEffect)(()=>{var o,a;let i=n?(a=(o=e.current)==null?void 0:o.contentDocument)==null?void 0:a.querySelector("[data-puck-entry]"):e.current;i==null||i.setAttribute("data-puck-preview-mode",t)},[t,r,n])},xZ=({id:e="puck-preview"})=>{let t=U(c=>c.dispatch),r=U(c=>c.setStatus),n=U(c=>c.iframe),o=U(c=>c.overrides),a=U(c=>c.state.ui.previewMode==="edit"),i=(0,hc.useMemo)(()=>o.iframe,[o]),s=(0,hc.useRef)(null);Zbe(s),Xbe(s);let l=a?(0,oc.jsx)(Gbe,{}):(0,oc.jsx)(Wbe,{});return(0,hc.useEffect)(()=>{n.enabled||r("READY")},[n.enabled]),(0,oc.jsx)("div",{className:jO(),id:e,"data-puck-preview":!0,onClick:c=>{let u=c.target;!u.hasAttribute("data-puck-component")&&!u.hasAttribute("data-puck-dropzone")&&t({type:"setUi",ui:{itemSelector:null}})},children:n.enabled?(0,oc.jsx)(Ube,{id:"preview-frame",className:jO("frame"),"data-rfd-iframe":!0,syncHostStyles:n.syncHostStyles,onReady:()=>{r("READY")},onNotReady:()=>{r("MOUNTED")},frameRef:s,children:(0,oc.jsx)(TD.Consumer,{children:({document:c})=>i?(0,oc.jsx)(i,{document:c,children:l}):l})}):(0,oc.jsx)("div",{id:"preview-frame",className:`${jO("frame")} notranslate`,ref:s,"data-puck-entry":!0,translate:"no",children:l})})};
C();
C();
var kG=(e,t)=>n=>{let o=t?t(n):n.children;return e?e(j(A({},n),{children:o})):o},Ybe=({overrides:e,plugins:t})=>{let r=A({},e);e!=null&&e.fieldTypes&&(r.fieldTypes=A({},e.fieldTypes));let n=A({},e==null?void 0:e.fieldTypes);return t==null||t.forEach(o=>{o.overrides&&Object.keys(o.overrides).forEach(a=>{var i;let s=a;if(!((i=o.overrides)!=null&&i[s]))return;if(s==="fieldTypes"){let u=o.overrides.fieldTypes;Object.keys(u).forEach(d=>{if(r.fieldTypes=r.fieldTypes||{},WG(u,d)){r.fieldTypes[d]=null;return}let f=n[d],p=u[d],h=kG(p,f);r.fieldTypes[d]=h,n[d]=h});return}let l=r[s],c=kG(o.overrides[s],l);r[s]=c})}),r},Jbe=({overrides:e,plugins:t})=>(0,kZ.useMemo)(()=>Ybe({overrides:e,plugins:t}),[t,e]);
C();
C();
var MD={Puck:"_Puck_tzaxg_19","Puck-portal":"_Puck-portal_tzaxg_31",PuckLayout:"_PuckLayout_tzaxg_36","PuckLayout-inner":"_PuckLayout-inner_tzaxg_40","Puck--hidePlugins":"_Puck--hidePlugins_tzaxg_73","PuckLayout--mounted":"_PuckLayout--mounted_tzaxg_78","PuckLayout--mobilePanelHeightToggle":"_PuckLayout--mobilePanelHeightToggle_tzaxg_82","PuckLayout--leftSideBarVisible":"_PuckLayout--leftSideBarVisible_tzaxg_82","PuckLayout--isExpanded":"_PuckLayout--isExpanded_tzaxg_90","PuckLayout--mobilePanelHeightMinContent":"_PuckLayout--mobilePanelHeightMinContent_tzaxg_110","PuckLayout--rightSideBarVisible":"_PuckLayout--rightSideBarVisible_tzaxg_137","PuckLayout-mounted":"_PuckLayout-mounted_tzaxg_156","PuckLayout-nav":"_PuckLayout-nav_tzaxg_197","PuckLayout-header":"_PuckLayout-header_tzaxg_217",PuckPluginTab:"_PuckPluginTab_tzaxg_231","PuckPluginTab--visible":"_PuckPluginTab--visible_tzaxg_237","PuckPluginTab-body":"_PuckPluginTab-body_tzaxg_243"};
C();
var aD=({children:e})=>(0,bw.jsx)(bw.Fragment,{children:e});
C();
var Qbe=()=>{let e=je(),t=(0,wZ.useCallback)(()=>{let r=e.getState().dispatch;r({type:"setUi",ui:n=>({previewMode:n.previewMode==="edit"?"interactive":"edit"})})},[e]);Ta({meta:!0,i:!0},t),Ta({ctrl:!0,i:!0},t)};
C();
C();
C();
var e_e={MenuBar:"_MenuBar_1hxnj_1","MenuBar--menuOpen":"_MenuBar--menuOpen_1hxnj_14","MenuBar-inner":"_MenuBar-inner_1hxnj_29","MenuBar-history":"_MenuBar-history_1hxnj_45"},HO=ae("MenuBar",e_e);
C();
var r_e={PuckHeader:"_PuckHeader_c2nei_1","PuckHeader--hidePlugins":"_PuckHeader--hidePlugins_c2nei_21","PuckHeader-inner":"_PuckHeader-inner_c2nei_26","PuckHeader-toggle":"_PuckHeader-toggle_c2nei_46","PuckHeader-rightSideBarToggle":"_PuckHeader-rightSideBarToggle_c2nei_52","PuckHeader-leftSideBarToggle":"_PuckHeader-leftSideBarToggle_c2nei_53","PuckHeader-title":"_PuckHeader-title_c2nei_64","PuckHeader-path":"_PuckHeader-path_c2nei_68","PuckHeader-tools":"_PuckHeader-tools_c2nei_75","PuckHeader-menuButton":"_PuckHeader-menuButton_c2nei_81","PuckHeader--menuOpen":"_PuckHeader--menuOpen_c2nei_86"},Fs=ae("PuckHeader",r_e),n_e=({hidePlugins:e})=>{let{onPublish:t,renderHeader:r,renderHeaderActions:n,headerTitle:o,headerPath:a,iframe:i}=_w(),s=U(S=>S.dispatch),l=je(),c=(0,Ws.useMemo)(()=>r?(console.warn("`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"),L=>{var I=L,{actions:M}=I,D=hn(I,["actions"]);let N=r,z=U(B=>B.state);return(0,Fe.jsx)(N,j(A({},D),{dispatch:s,state:z,children:M}))}):aD,[r]),u=(0,Ws.useMemo)(()=>n?(console.warn("`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."),L=>{let I=n,M=U(D=>D.state);return(0,Fe.jsx)(I,j(A({},L),{dispatch:s,state:M}))}):aD,[n]),d=U(S=>S.overrides.header||c),f=U(S=>S.overrides.headerActions||u),[p,h]=(0,Ws.useState)(!1),m=U(S=>{var L,I;return(I=((L=S.state.indexes.nodes.root)==null?void 0:L.data).props.title)!=null?I:""}),y=U(S=>S.state.ui.leftSideBarVisible),g=U(S=>S.state.ui.rightSideBarVisible),_=(0,Ws.useCallback)(S=>{let L=window.matchMedia("(min-width: 638px)").matches,I=S==="left"?y:g,M=S==="left"?"rightSideBarVisible":"leftSideBarVisible";s({type:"setUi",ui:A({[`${S}SideBarVisible`]:!I},L?{}:{[M]:!1})})},[s,y,g]),b=oe("header-publish"),v=oe("label-page"),k=oe("header-toggle-leftsidebar"),x=oe("header-toggle-rightsidebar"),w=oe("header-toggle-menubar");return(0,Fe.jsx)(d,{actions:(0,Fe.jsx)(Fe.Fragment,{children:(0,Fe.jsx)(f,{children:(0,Fe.jsx)(Z1,{onClick:()=>{let S=l.getState().state.data;t&&t(S)},icon:(0,Fe.jsx)(uE,{size:"14px"}),children:b})})}),children:(0,Fe.jsx)("header",{className:Fs({leftSideBarVisible:y,rightSideBarVisible:g,hidePlugins:e}),children:(0,Fe.jsxs)("div",{className:Fs("inner"),children:[(0,Fe.jsxs)("div",{className:Fs("toggle"),children:[(0,Fe.jsx)("div",{className:Fs("leftSideBarToggle"),children:(0,Fe.jsx)(ur,{type:"button",onClick:()=>{_("left")},title:k,children:(0,Fe.jsx)(_6,{focusable:"false"})})}),(0,Fe.jsx)("div",{className:Fs("rightSideBarToggle"),children:(0,Fe.jsx)(ur,{type:"button",onClick:()=>{_("right")},title:x,children:(0,Fe.jsx)(x6,{focusable:"false"})})})]}),(0,Fe.jsx)("div",{className:Fs("title"),children:(0,Fe.jsxs)(sw,{rank:"2",size:"xs",children:[o||m||v,a&&(0,Fe.jsxs)(Fe.Fragment,{children:[" ",(0,Fe.jsx)("code",{className:Fs("path"),children:a})]})]})}),(0,Fe.jsxs)("div",{className:Fs("tools"),children:[(0,Fe.jsx)("div",{className:Fs("menuButton"),children:(0,Fe.jsx)(ur,{type:"button",onClick:()=>h(!p),title:w,children:p?(0,Fe.jsx)(cE,{focusable:"false"}):(0,Fe.jsx)(iu,{focusable:"false"})})}),(0,Fe.jsx)(t_e,{dispatch:s,onPublish:t,menuOpen:p,renderHeaderActions:()=>(0,Fe.jsx)(f,{children:(0,Fe.jsx)(Z1,{onClick:()=>{let S=l.getState().state.data;t&&t(S)},icon:(0,Fe.jsx)(uE,{size:"14px"}),children:b})}),setMenuOpen:h})]})]})})})},o_e=(0,Ws.memo)(n_e);
C();
C();
var a_e={SidebarSection:"_SidebarSection_1fbnz_1","SidebarSection-title":"_SidebarSection-title_1fbnz_12","SidebarSection--noBorderTop":"_SidebarSection--noBorderTop_1fbnz_25","SidebarSection-content":"_SidebarSection-content_1fbnz_29","SidebarSection-breadcrumbLabel":"_SidebarSection-breadcrumbLabel_1fbnz_38","SidebarSection-breadcrumbs":"_SidebarSection-breadcrumbs_1fbnz_67","SidebarSection-breadcrumb":"_SidebarSection-breadcrumb_1fbnz_38","SidebarSection-heading":"_SidebarSection-heading_1fbnz_79","SidebarSection-loadingOverlay":"_SidebarSection-loadingOverlay_1fbnz_83"},ch=ae("SidebarSection",a_e),i_e=({children:e,title:t,background:r,showBreadcrumbs:n,noBorderTop:o,isLoading:a})=>(0,Ua.jsxs)("div",{className:ch({noBorderTop:o}),style:{background:r},children:[(0,Ua.jsx)("div",{className:ch("title"),children:(0,Ua.jsxs)("div",{className:ch("breadcrumbs"),children:[n&&(0,Ua.jsx)(cZ,{}),(0,Ua.jsx)("div",{className:ch("heading"),children:(0,Ua.jsx)(sw,{rank:"2",size:"xs",children:t})})]})}),(0,Ua.jsx)("div",{className:ch("content"),children:e}),a&&(0,Ua.jsx)("div",{className:ch("loadingOverlay"),children:(0,Ua.jsx)(Tl,{size:32})})]});
C();
C();
C();
var SZ={ViewportControls:"_ViewportControls_v26yb_1","ViewportControls--fullScreen":"_ViewportControls--fullScreen_v26yb_5","ViewportControls-toggleButton":"_ViewportControls-toggleButton_v26yb_14","ViewportControls-actions":"_ViewportControls-actions_v26yb_39","ViewportControls-actionsInner":"_ViewportControls-actionsInner_v26yb_43","ViewportControls--isExpanded":"_ViewportControls--isExpanded_v26yb_67","ViewportControls-divider":"_ViewportControls-divider_v26yb_72","ViewportControls-zoomSelect":"_ViewportControls-zoomSelect_v26yb_79","ViewportControls-zoom":"_ViewportControls-zoom_v26yb_79","ViewportButton-inner":"_ViewportButton-inner_v26yb_110","ViewportButton--isActive":"_ViewportButton--isActive_v26yb_118"},wG={Smartphone:(0,St.jsx)(E6,{size:16}),Tablet:(0,St.jsx)(M6,{size:16}),Monitor:(0,St.jsx)(pE,{size:16}),FullWidth:(0,St.jsx)(n6,{size:16})},nc=ae("ViewportControls",SZ),SG=ae("ViewportButton",SZ),iD=({children:e,title:t,onClick:r,isActive:n,disabled:o})=>(0,St.jsx)("span",{className:SG({isActive:n}),suppressHydrationWarning:!0,children:(0,St.jsx)(ur,{type:"button",title:t,disabled:o||n,onClick:r,suppressHydrationWarning:!0,children:(0,St.jsx)("span",{className:SG("inner"),children:e})})}),CG=[{label:"25%",value:.25},{label:"50%",value:.5},{label:"75%",value:.75},{label:"100%",value:1},{label:"125%",value:1.25},{label:"150%",value:1.5},{label:"200%",value:2}],s_e=({viewport:e,isActive:t,onClick:r})=>{var n;let o=oe("viewport-switch",{label:(n=e.label)!=null?n:""}),a=oe("viewport-switch-default");return(0,St.jsx)(iD,{title:e.label?o:a,onClick:r,isActive:t,children:typeof e.icon=="string"?wG[e.icon]||e.icon:e.icon||wG.Smartphone})},l_e=({autoZoom:e,zoom:t,onViewportChange:r,onZoom:n,fullScreen:o})=>{var a,i;let s=U(b=>b.viewports),l=U(b=>b.state.ui.viewports),c=CG.find(b=>b.value===e),u=oe("viewport-zoom-auto",{zoom:(e*100).toFixed(0)}),d=(0,hd.useMemo)(()=>[...CG,...c?[]:[{value:e,label:u}]].filter(b=>b.value<=e).sort((b,v)=>b.value>v.value?1:-1),[e,u]),[f,p]=(0,hd.useState)(l.current.width);(0,hd.useEffect)(()=>{p(l.current.width)},[l.current]);let[h,m]=(0,hd.useState)(!1),y=oe("viewport-zoom-out"),g=oe("viewport-zoom-in"),_=oe("viewport-toggle-menu");return(0,St.jsxs)("div",{className:nc({isExpanded:h,fullScreen:o}),suppressHydrationWarning:!0,children:[(0,St.jsx)("div",{className:nc("actions"),children:(0,St.jsxs)("div",{className:nc("actionsInner"),children:[s.map((b,v)=>(0,St.jsx)(s_e,{viewport:b,onClick:()=>{p(b.width),r(b)},isActive:f===b.width},v)),(0,St.jsx)("div",{className:nc("divider")}),(0,St.jsx)(iD,{title:y,disabled:t<=((a=d[0])==null?void 0:a.value),onClick:b=>{b.stopPropagation(),n(d[Math.max(d.findIndex(v=>v.value===t)-1,0)].value)},children:(0,St.jsx)(N6,{size:16})}),(0,St.jsx)(iD,{title:g,disabled:t>=((i=d[d.length-1])==null?void 0:i.value),onClick:b=>{b.stopPropagation(),n(d[Math.min(d.findIndex(v=>v.value===t)+1,d.length-1)].value)},children:(0,St.jsx)(P6,{size:16})}),(0,St.jsxs)("div",{className:nc("zoom"),children:[(0,St.jsx)("div",{className:nc("divider")}),(0,St.jsx)("select",{className:nc("zoomSelect"),value:t.toString(),onClick:b=>{b.stopPropagation()},onChange:b=>{n(parseFloat(b.currentTarget.value))},children:d.map(b=>(0,St.jsx)("option",{value:b.value,label:b.label},b.label))})]})]})}),(0,St.jsx)("button",{className:nc("toggleButton"),title:_,onClick:()=>m(b=>!b),children:h?(0,St.jsx)(z6,{size:16}):(0,St.jsx)(pE,{size:16})})]})};
C();
var c_e={PuckCanvas:"_PuckCanvas_zw9iy_1","PuckCanvas-controls":"_PuckCanvas-controls_zw9iy_18","PuckCanvas--fullScreen":"_PuckCanvas--fullScreen_zw9iy_23","PuckCanvas-inner":"_PuckCanvas-inner_zw9iy_34","PuckCanvas-root":"_PuckCanvas-root_zw9iy_43","PuckCanvas--ready":"_PuckCanvas--ready_zw9iy_68","PuckCanvas-loader":"_PuckCanvas-loader_zw9iy_73","PuckCanvas--showLoader":"_PuckCanvas--showLoader_zw9iy_84"};
C();
var IZ=(0,mc.createContext)(null),u_e=({children:e})=>{let t=(0,mc.useRef)(null),r=(0,mc.useMemo)(()=>({frameRef:t}),[]);return(0,CZ.jsx)(IZ.Provider,{value:r,children:e})},LZ=()=>{let e=(0,mc.useContext)(IZ);if(e===null)throw new Error("useCanvasFrame must be used within a FrameProvider");return e},ty=ae("PuckCanvas",c_e),IG=!0,qO=150,d_e=()=>{var e;let{frameRef:t}=LZ(),r=kE(t),{viewports:n=Kc,ui:o}=_w(),{dispatch:a,overrides:i,setUi:s,zoomConfig:l,setZoomConfig:c,status:u,iframe:d,_experimentalFullScreenCanvas:f}=U(Ze(M=>({dispatch:M.dispatch,overrides:M.overrides,setUi:M.setUi,zoomConfig:M.zoomConfig,setZoomConfig:M.setZoomConfig,status:M.status,iframe:M.iframe,_experimentalFullScreenCanvas:M._experimentalFullScreenCanvas}))),{leftSideBarVisible:p,rightSideBarVisible:h,leftSideBarWidth:m,rightSideBarWidth:y,viewports:g}=U(Ze(M=>({leftSideBarVisible:M.state.ui.leftSideBarVisible,rightSideBarVisible:M.state.ui.rightSideBarVisible,leftSideBarWidth:M.state.ui.leftSideBarWidth,rightSideBarWidth:M.state.ui.rightSideBarWidth,viewports:M.state.ui.viewports}))),[_,b]=(0,cn.useState)(!1),v=(0,cn.useRef)(!1),k=(0,cn.useMemo)(()=>({children:D})=>(0,co.jsx)(co.Fragment,{children:D}),[]),x=(0,cn.useMemo)(()=>i.preview||k,[i]),w=(0,cn.useCallback)(()=>{if(t.current){let M=t.current,D=xE(M);return{width:D.contentBox.width,height:D.contentBox.height}}return{width:0,height:0}},[t]);(0,cn.useEffect)(()=>{r()},[t,p,h,m,y,g]),(0,cn.useEffect)(()=>{let{height:M}=w();g.current.height==="auto"&&c(j(A({},l),{rootHeight:M/l.zoom}))},[l.zoom,w,c]),(0,cn.useEffect)(()=>{IG&&r()},[g.current.width,g]),(0,cn.useEffect)(()=>{if(!t.current)return;let M=new ResizeObserver(()=>{v.current||r()});return M.observe(t.current),()=>{M.disconnect()}},[t.current]);let[S,L]=(0,cn.useState)(!1);(0,cn.useEffect)(()=>{setTimeout(()=>{L(!0)},500)},[]);let I=je();return(0,cn.useEffect)(()=>{var M,D;if(typeof window=="undefined"||(M=o==null?void 0:o.viewports)!=null&&M.current)return;let N=window.innerWidth,z=(D=t.current)==null?void 0:D.getBoundingClientRect().width;if(!N||!z||n.length===0)return;let B=Object.values(n).find(J=>J.width==="100%"),F=!!B,H=Object.entries(n).filter(([J,K])=>K.width!=="100%").map(([J,K])=>({key:J,diff:Math.abs(N-(typeof K.width=="string"?N:K.width)),value:K})).sort((J,K)=>J.diff>K.diff?1:-1)[0].value;if(H.width<z&&F&&(H=B),d.enabled){let J=I.getState(),K={state:j(A({},J.state),{ui:j(A({},J.state.ui),{viewports:j(A({},J.state.ui.viewports),{current:j(A({},J.state.ui.viewports.current),{height:(H==null?void 0:H.height)||"auto",width:H==null?void 0:H.width})})})})},me=J.history;J.history.histories.length===1&&(me=j(A({},me),{histories:[K]})),I.setState(j(A({},K),{history:me}))}},[n,t.current,d,I,(e=o==null?void 0:o.viewports)==null?void 0:e.current]),(0,co.jsxs)("div",{className:ty({ready:u==="READY"||!d.enabled||!d.waitForStyles,showLoader:S,fullScreen:f}),onClick:M=>{let D=M.target;!D.hasAttribute("data-puck-component")&&!D.hasAttribute("data-puck-dropzone")&&a({type:"setUi",ui:{itemSelector:null},recordHistory:!1})},children:[g.controlsVisible&&d.enabled&&(0,co.jsx)("div",{className:ty("controls"),children:(0,co.jsx)(l_e,{fullScreen:f,autoZoom:l.autoZoom,zoom:l.zoom,onViewportChange:M=>{b(!0),v.current=!0;let D=j(A({},M),{height:M.height||"auto",zoom:l.zoom}),N={viewports:j(A({},g),{current:D})};s(N),IG&&r({viewports:j(A({},g),{current:D})})},onZoom:M=>{b(!0),v.current=!0,c(j(A({},l),{zoom:M}))}})}),(0,co.jsxs)("div",{className:ty("inner"),ref:t,children:[(0,co.jsx)("div",{className:ty("root"),style:{width:d.enabled?g.current.width:"100%",height:l.rootHeight,transform:d.enabled?`scale(${l.zoom})`:void 0,transition:_?`width ${qO}ms ease-out, height ${qO}ms ease-out, transform ${qO}ms ease-out`:"",overflow:d.enabled?void 0:"auto"},suppressHydrationWarning:!0,id:"puck-canvas-root",onTransitionEnd:()=>{b(!1),v.current=!1},children:(0,co.jsx)(x,{children:(0,co.jsx)(xZ,{})})}),(0,co.jsx)("div",{className:ty("loader"),children:(0,co.jsx)(Tl,{size:24})})]})]})};
C();
C();
C();
C();
var f_e={ResizeHandle:"_ResizeHandle_144bf_2","ResizeHandle--left":"_ResizeHandle--left_144bf_16","ResizeHandle--right":"_ResizeHandle--right_144bf_20"},p_e=ae("ResizeHandle",f_e),h_e=({position:e,sidebarRef:t,onResize:r,onResizeEnd:n})=>{let{frameRef:o}=LZ(),a=kE(o),i=(0,Us.useRef)(null),s=(0,Us.useRef)(!1),l=(0,Us.useRef)(0),c=(0,Us.useRef)(0),u=(0,Us.useCallback)(p=>{if(!s.current)return;let h=p.clientX-l.current,m=e==="left"?c.current+h:c.current-h,y=Math.max(192,m);r(y),p.preventDefault()},[r,e]),d=(0,Us.useCallback)(()=>{var p;if(!s.current)return;s.current=!1,document.body.style.cursor="",document.body.style.userSelect="";let h=document.getElementById("resize-overlay");h&&document.body.removeChild(h),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d);let m=((p=t.current)==null?void 0:p.getBoundingClientRect().width)||0;n(m),a()},[n]),f=(0,Us.useCallback)(p=>{var h;s.current=!0,l.current=p.clientX,c.current=((h=t.current)==null?void 0:h.getBoundingClientRect().width)||0,document.body.style.cursor="col-resize",document.body.style.userSelect="none";let m=document.createElement("div");m.id="resize-overlay",m.setAttribute("data-resize-overlay",""),document.body.appendChild(m),document.addEventListener("mousemove",u),document.addEventListener("mouseup",d),p.preventDefault()},[e,u,d]);return(0,EZ.jsx)("div",{ref:i,className:p_e({[e]:!0}),onMouseDown:f})};
C();
var m_e={Sidebar:"_Sidebar_16oed_1","Sidebar--isVisible":"_Sidebar--isVisible_16oed_10","Sidebar--left":"_Sidebar--left_16oed_14","Sidebar--right":"_Sidebar--right_16oed_34","Sidebar-resizeHandle":"_Sidebar-resizeHandle_16oed_51"},EG=ae("Sidebar",m_e),AG=({position:e,sidebarRef:t,isVisible:r,onResize:n,onResizeEnd:o,children:a})=>(0,fc.jsxs)(fc.Fragment,{children:[(0,fc.jsx)("div",{ref:t,className:EG({[e]:!0,isVisible:r}),children:a}),(0,fc.jsx)("div",{className:`${EG("resizeHandle")}`,children:(0,fc.jsx)(h_e,{position:e,sidebarRef:t,onResize:n,onResizeEnd:o})})]});
C();
var g_e=e=>{let t=e;for(;t&&t!==document.body;){let r=window.getComputedStyle(t);if(r.display==="none"||r.visibility==="hidden"||r.opacity==="0"||t.getAttribute("aria-hidden")==="true"||t.hasAttribute("hidden"))return!1;t=t.parentElement}return!0},v_e=e=>{var t;if(e instanceof HTMLElement)return!0;let r=(t=e==null?void 0:e.ownerDocument)==null?void 0:t.defaultView;return!!r&&e instanceof r.HTMLElement},y_e=e=>{var t;if(e!=null&&e.defaultPrevented)return!0;let r=((t=e==null?void 0:e.composedPath)==null?void 0:t.call(e)[0])||(e==null?void 0:e.target)||document.activeElement;if(v_e(r)){let o=r.tagName.toLowerCase();if(o==="input"||o==="textarea"||o==="select"||r.isContentEditable)return!0;let a=r.getAttribute("role");if(a==="textbox"||a==="combobox"||a==="searchbox"||a==="listbox"||a==="grid")return!0}let n=document.querySelector('dialog[open], [aria-modal="true"], [role="dialog"], [role="alertdialog"]');return!!(n&&g_e(n))},b_e=()=>{let e=je(),t=(0,AZ.useCallback)(r=>{var n;if(y_e(r))return!1;let{state:o,dispatch:a,permissions:i,selectedItem:s}=e.getState(),l=(n=o.ui)==null?void 0:n.itemSelector;return!(l!=null&&l.zone)||!s||!i.getPermissions({item:s}).delete||a({type:"remove",index:l.index,zone:l.zone}),!0},[e]);Ta({delete:!0},t),Ta({backspace:!0},t)};
C();
C();
var TZ={Nav:"_Nav_vll2r_1","Nav-list":"_Nav-list_vll2r_5","Nav-mobileActions":"_Nav-mobileActions_vll2r_23","NavItem-link":"_NavItem-link_vll2r_39",NavItem:"_NavItem_vll2r_39","NavItem-linkIcon":"_NavItem-linkIcon_vll2r_90","NavItem--active":"_NavItem--active_vll2r_100","NavItem--mobileOnly":"_NavItem--mobileOnly_vll2r_136","NavItem--desktopOnly":"_NavItem--desktopOnly_vll2r_141"},UO=ae("Nav",TZ),R1=ae("NavItem",TZ),__e=({label:e,icon:t,onClick:r,isActive:n,mobileOnly:o,desktopOnly:a})=>(0,Di.jsx)("li",{className:R1({active:n,mobileOnly:o,desktopOnly:a}),children:r&&(0,Di.jsxs)("div",{className:R1("link"),onClick:r,children:[t&&(0,Di.jsx)("span",{className:R1("linkIcon"),children:t}),(0,Di.jsx)("span",{className:R1("linkLabel"),children:e})]})}),x_e=({items:e,mobileActions:t})=>(0,Di.jsxs)("nav",{className:UO(),children:[(0,Di.jsx)("ul",{className:UO("list"),children:Object.entries(e).map(([r,n])=>(0,Di.jsx)(__e,A({},n),r))}),t&&(0,Di.jsx)("div",{className:UO("mobileActions"),children:t})]});
C();
var MZ=e=>A({enabled:!0,waitForStyles:!0,syncHostStyles:!0},e),TG=ae("Puck",MD),z1=ae("PuckLayout",MD),MG=ae("PuckPluginTab",MD),k_e=typeof window=="undefined"?fo.useEffect:fo.useLayoutEffect,w_e=()=>{let e=oe("label-page"),t=U(r=>{var n,o,a;return r.selectedItem?(o=(n=r.config.components[r.selectedItem.type])==null?void 0:n.label)!=null?o:r.selectedItem.type.toString():(a=r.config.root)==null?void 0:a.label});return(0,yt.jsx)(i_e,{noBorderTop:!0,showBreadcrumbs:!0,title:t||e,children:(0,yt.jsx)(ED,{})})},S_e=({children:e,visible:t,mobileOnly:r})=>(0,yt.jsx)("div",{className:MG({visible:t,mobileOnly:r}),children:(0,yt.jsx)("div",{className:MG("body"),children:e})}),OZ=({children:e})=>{var t,r;let{iframe:n,initialHistory:o,plugins:a,height:i}=_w(),s=U(le=>le.dnd),l=(0,fo.useMemo)(()=>MZ(n),[n]);Nbe();let c=U(le=>le.dispatch),u=U(le=>le.state.ui.leftSideBarVisible),d=U(le=>le.state.ui.rightSideBarVisible),f=U(le=>le.instanceId),{width:p,setWidth:h,sidebarRef:m,handleResizeEnd:y}=LG("left",c),{width:g,setWidth:_,sidebarRef:b,handleResizeEnd:v}=LG("right",c);(0,fo.useEffect)(()=>{window.matchMedia("(min-width: 638px)").matches||c({type:"setUi",ui:{leftSideBarVisible:!1,rightSideBarVisible:!1}});let le=()=>{window.matchMedia("(min-width: 638px)").matches||c({type:"setUi",ui:G=>A(A({},G),G.rightSideBarVisible?{leftSideBarVisible:!1}:{})})};return window.addEventListener("resize",le),()=>{window.removeEventListener("resize",le)}},[]);let k=U(le=>le.overrides),x=(0,fo.useMemo)(()=>k.puck||aD,[k]),[w,S]=(0,fo.useState)(!1);k_e(()=>{S(!0)},[]);let L=U(le=>le.status==="READY");U6(),(0,fo.useEffect)(()=>{if(L&&l.enabled){let le=uo();if(le)return vE(le)}},[L,l.enabled]),Qbe(),b_e();let I={};p&&(I["--puck-user-sidebar-left-width"]=`${p}px`),g&&(I["--puck-user-sidebar-right-width"]=`${g}px`);let M=U(le=>le.setUi),D=U(le=>{var G;return(G=le.state.ui.plugin)==null?void 0:G.current}),N=je(),z=(0,fo.useMemo)(()=>!!(a!=null&&a.find(le=>le.name==="legacy-side-bar")),[a]),B=oe("plugin-blocks"),F=oe("plugin-outline"),q=oe("plugin-fields"),H=(0,fo.useMemo)(()=>{let le={},G=[WK({label:B}),sZ({label:F})],E=R=>R.name==="legacy-side-bar"?-1:0,O=[...G,...a!=null?a:[]].sort((R,Y)=>E(R)-E(Y));return a!=null&&a.some(R=>R.name==="fields")||O.push(uZ({label:q})),O==null||O.forEach(R=>{var Y,W,ee;R.name&&R.render&&(le[R.name]&&delete le[R.name],le[R.name]={label:(Y=R.label)!=null?Y:R.name,icon:(W=R.icon)!=null?W:(0,yt.jsx)(O6,{}),onClick:()=>{R.name===D?M(u?{leftSideBarVisible:!1}:{leftSideBarVisible:!0}):R.name&&M({plugin:{current:R.name},leftSideBarVisible:!0})},isActive:u&&D===R.name,render:R.render,mobilePanelHeight:(ee=R.mobilePanelHeight)!=null?ee:"toggle",mobileOnly:z||R.mobileOnly,desktopOnly:R.name==="legacy-side-bar"||R.desktopOnly})}),le},[a,D,N,u,B,F,q]),J=D!=null?D:Object.keys(H)[0],K=(r=(t=H[J])==null?void 0:t.mobilePanelHeight)!=null?r:"toggle";(0,fo.useEffect)(()=>{if(!D){let le=Object.keys(H);M({plugin:{current:le[0]}})}},[H,D]);let me=H.fields&&H.fields.mobileOnly===!1,Ie=U(le=>{var G;return(G=le.state.ui.mobilePanelExpanded)!=null?G:!1}),ve=oe("layout-maximize"),Ne=oe("layout-minimize");return(0,yt.jsxs)("div",{className:`Puck notranslate ${TG({hidePlugins:z})}`,id:f,translate:"no",style:{height:i,visibility:"hidden"},children:[(0,yt.jsx)(Mve,{disableAutoScroll:s==null?void 0:s.disableAutoScroll,behavior:s==null?void 0:s.behavior,children:(0,yt.jsx)(x,{children:e||(0,yt.jsx)(u_e,{children:(0,yt.jsx)("div",{className:z1({leftSideBarVisible:u,mounted:w,rightSideBarVisible:!me&&d,isExpanded:Ie,mobilePanelHeightToggle:K==="toggle",mobilePanelHeightMinContent:K==="min-content"}),style:{height:i},children:(0,yt.jsxs)("div",{className:z1("inner"),style:I,children:[(0,yt.jsx)("div",{className:z1("header"),children:(0,yt.jsx)(o_e,{hidePlugins:z})}),(0,yt.jsx)("div",{className:z1("nav"),children:(0,yt.jsx)(x_e,{items:H,mobileActions:u&&K==="toggle"&&(0,yt.jsx)(ur,{type:"button",title:Ie?Ne:ve,onClick:()=>{M({mobilePanelExpanded:!Ie})},children:Ie?(0,yt.jsx)(y6,{size:21}):(0,yt.jsx)(v6,{size:21})})})}),(0,yt.jsx)(AG,{position:"left",sidebarRef:m,isVisible:u,onResize:h,onResizeEnd:y,children:Object.entries(H).map(([le,{mobileOnly:G,render:E,label:O}])=>(0,yt.jsx)(S_e,{visible:D===le,mobileOnly:G,children:(0,yt.jsx)(E,{})},le))}),(0,yt.jsx)(d_e,{}),!me&&(0,yt.jsx)(AG,{position:"right",sidebarRef:b,isVisible:d,onResize:_,onResizeEnd:v,children:(0,yt.jsx)(w_e,{})})]})})})})}),(0,yt.jsx)("div",{id:"puck-portal-root",className:TG("portal")})]})},DZ=(0,or.createContext)({});
var _w=()=>(0,or.useContext)(DZ);
gc.Components=VK;
gc.Fields=ED;
gc.Layout=OZ;
gc.Outline=iZ;
gc.Preview=xZ;
C();
C();
C();
C();
C();
C();
C();
C();
C();
C();
C();
C();
C();
Ek();
If();
kp();
$f();
Gf();
Kf();
Eo();
as();
ci();
Io();
Yo();
qt();
C();
var FZ=T(V());
var zZ={Section:"r","Section-inner":"e","Section--spaced":"t","Section--subtle":"i","Section--inverse":"c","Section--grid":"o"};
var NZ=T(PZ());
var E_e=(e,t,r={baseClass:""})=>(n={})=>{if(typeof n=="string"){let o=n;return t[`${e}-${o}`]&&r.baseClass+t[`${e}-${o}`]||""}else if(typeof n=="object"){let o=n,a={};for(let s in o)a[t[`${e}--${s}`]]=o[s];let i=t[e];return r.baseClass+(0,NZ.default)(P({[i]:!!i},a))}else return r.baseClass+t[e]||""},Bo=E_e;
var OD=T($()),BZ=Bo("Section",zZ);
var vc=(0,FZ.forwardRef)(({children:e,className:t,maxWidth:r="1280px",style:n={},background:o="default",backdrop:a="none",spaced:i=!1,padding:s},l)=>(0,OD.jsx)("div",{className:`${BZ({subtle:o==="subtle",inverse:o==="inverse",grid:a==="grid",spaced:i})}${t?` ${t}`:""}`,style:P(P({},n),s?{"--section-padding":s}:{}),ref:l,children:(0,OD.jsx)("div",{className:BZ("inner"),style:{maxWidth:r},children:e})}));
var jZ={Heading:"n","Heading--xxxl":"l","Heading--xxl":"u","Heading--xl":"d","Heading--l":"p","Heading--m":"s","Heading--s":"_","Heading--xs":"v"};
var UZ=T(V());
var kw=[{label:"8px",value:"8px"},{label:"16px",value:"16px"},{label:"24px",value:"24px"},{label:"32px",value:"32px"},{label:"40px",value:"40px"},{label:"48px",value:"48px"},{label:"56px",value:"56px"},{label:"64px",value:"64px"},{label:"72px",value:"72px"},{label:"80px",value:"80px"},{label:"88px",value:"88px"},{label:"96px",value:"96px"},{label:"104px",value:"104px"},{label:"112px",value:"112px"},{label:"120px",value:"120px"},{label:"128px",value:"128px"},{label:"136px",value:"136px"},{label:"144px",value:"144px"},{label:"152px",value:"152px"},{label:"160px",value:"160px"}];
var HZ=T(V());
var Ri=T($()),yd=e=>HZ.Children.toArray(e).length>0,ma=({content:e,data:t,appearance:r,backgroundGroup:n,layoutGroup:o})=>(0,Ri.jsxs)(Ri.Fragment,{children:[yd(e)&&(0,Ri.jsx)(my,{label:"Content",children:e}),yd(t)&&(0,Ri.jsx)(my,{label:"Data",children:t}),(yd(r)||yd(n)||yd(o))&&(0,Ri.jsxs)(my,{label:"Appearance",children:[r,yd(n)&&(0,Ri.jsx)(py,{label:"Background",defaultExpanded:!0,children:n}),yd(o)&&(0,Ri.jsx)(py,{label:"Layout",defaultExpanded:!0,children:o})]})]});
var qZ={Layout:"k"};
var vy=T($()),M_e=Bo("Layout",qZ),O_e=()=>null,D_e={type:"select",label:"Vertical padding",options:[{label:"0px",value:"0px"},...kw],ai:{required:!1,instructions:"Vertical padding inside this component. Avoid padding both a parent and its child."}},zi={type:"object",label:"Layout",labelIcon:(0,vy.jsx)(O_e,{}),collapsible:!0,defaultExpanded:!0,variant:"flush",objectFields:{spanCol:{label:"Grid columns",type:"number",min:1,max:12,ai:{required:!1,instructions:"Applies only when this component is a direct child of a Grid. Do not exceed that Grid's numColumns value."}},spanRow:{label:"Grid rows",type:"number",min:1,max:12,ai:{required:!1,instructions:"Applies only when this component is a direct child of a Grid. Sets how many rows this component spans. The Grid creates rows automatically as its items wrap."}},grow:{label:"Flex grow",type:"radio",options:[{label:"True",value:!0},{label:"False",value:!1}],ai:{required:!1,instructions:"Applies only when this component is a direct child of a Flex. Use true to fill available space."}},padding:D_e}},VZ=(0,UZ.forwardRef)(({children:e,className:t,layout:r,style:n},o)=>(0,vy.jsx)("div",{className:t,style:P({gridColumn:r!=null&&r.spanCol?`span ${Math.max(Math.min(r.spanCol,12),1)}`:void 0,gridRow:r!=null&&r.spanRow?`span ${Math.max(Math.min(r.spanRow,12),1)}`:void 0,paddingTop:r==null?void 0:r.padding,paddingBottom:r==null?void 0:r.padding,flex:r!=null&&r.grow?"1 1 0":void 0},n),ref:o,children:e}));
VZ.displayName="Layout";
var ww=T($()),R_e=Bo("Heading",jZ),z_e=[{value:"xxxl",label:"XXXL"},{value:"xxl",label:"XXL"},{value:"xl",label:"XL"},{value:"l",label:"L"},{value:"m",label:"M"},{value:"s",label:"S"},{value:"xs",label:"XS"}],P_e=[{label:"",value:""},{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"},{label:"6",value:"6"}],N_e={ai:{instructions:"Displays a heading (h1-h6 element). Don't use this unless asked by the user explicitly."},fields:{text:{type:"textarea",label:"Text",contentEditable:!0},size:{type:"select",label:"Size",options:z_e},level:{type:"select",label:"Level",options:P_e,ai:{required:!0,instructions:"Choose an h1-h6 level that follows the page hierarchy. The empty value renders text without a heading tag."}},align:{type:"radio",label:"Align",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]}},renderFields:({fields:e})=>(0,ww.jsx)(ma,{content:[e.text,e.level],appearance:[e.size,e.align,e.layout]}),defaultProps:{align:"left",text:"Heading",size:"m",layout:{padding:"8px"}},render:({align:e,text:t,size:r,level:n})=>{let o=n?`h${n}`:"span";return(0,ww.jsx)(vc,{children:(0,ww.jsx)(o,{className:R_e({[r]:!0}),style:{textAlign:e},children:t})})}},DD=yc(N_e);
var Cw=T(V());
var WZ=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sw=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();
var yy=T(V());
var $Z={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
var GZ=(0,yy.forwardRef)((c,l)=>{var u=c,{color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:o="",children:a,iconNode:i}=u,s=xe(u,["color","size","strokeWidth","absoluteStrokeWidth","className","children","iconNode"]);return(0,yy.createElement)("svg",P(Q(P({ref:l},$Z),{width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:Sw("lucide",o)}),s),[...i.map(([d,f])=>(0,yy.createElement)(d,f)),...Array.isArray(a)?a:[a]])});
var Iw=(e,t)=>{let r=(0,Cw.forwardRef)((i,a)=>{var s=i,{className:n}=s,o=xe(s,["className"]);return(0,Cw.createElement)(GZ,P({ref:a,iconNode:t,className:Sw(`lucide-${WZ(e)}`,n)},o))});return r.displayName=`${e}`,r};
var by=Iw("ALargeSmall",[["path",{d:"M21 14h-5",key:"1vh23k"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",key:"1wh10o"}],["path",{d:"M4.5 13h6",key:"dfilno"}],["path",{d:"m3 16 4.5-9 4.5 9",key:"2dxa0e"}]]);
var _y=Iw("AlignLeft",[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);
var Mh=T($()),B_e={ai:{instructions:"Shows plain text. Don't use this unless asked by the user explicitly."},fields:{text:{type:"textarea",label:"Text",contentEditable:!0},size:{type:"select",label:"Size",labelIcon:(0,Mh.jsx)(by,{size:16}),options:[{label:"S",value:"s"},{label:"M",value:"m"}],ai:{required:!1,instructions:"Use 'm' for 20px text or 's' for 16px text."}},align:{type:"radio",label:"Align",labelIcon:(0,Mh.jsx)(_y,{size:16}),options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},color:{type:"radio",label:"Color",ai:{instructions:"Use 'default' for regular text or 'muted' for grey supporting text."},options:[{label:"Default",value:"default"},{label:"Muted",value:"muted"}]},maxWidth:{type:"text",label:"Max width",ai:{required:!1,instructions:"Set a CSS width, such as '916px', to constrain the text. Omit this field to use the 1280px default. An empty string removes the width limit."}}},renderFields:({fields:e})=>(0,Mh.jsx)(ma,{content:[e.text],appearance:[e.size,e.align,e.color,e.maxWidth,e.layout]}),defaultProps:{align:"left",text:"Text",size:"m",color:"default"},render:({align:e,color:t,text:r,size:n,maxWidth:o})=>(0,Mh.jsx)(vc,{maxWidth:o,children:(0,Mh.jsx)("span",{style:{color:t==="default"?"inherit":"var(--site-color-text-muted)",display:"flex",textAlign:e,width:"100%",fontSize:n==="m"?"20px":"16px",maxWidth:o,justifyContent:e==="center"?"center":e==="right"?"flex-end":"flex-start"},children:r})})},Lw=yc(B_e);
var KZ={Grid:"a"};
var xy=T($()),j_e=Bo("Grid",KZ),H_e=e=>(0,xy.jsx)("span",P({},e)),q_e={ai:{instructions:"Lays out children in equal-width columns that stack below 768px. Don't use this unless asked by the user explicitly."},fields:{numColumns:{type:"number",label:"Number of columns",min:1,max:12},gap:{label:"Gap",type:"number",min:0,ai:{instructions:"The gap between children, in pixels."}},items:{type:"slot",disallow:["Hero","Stats","Logos","FeatureGrid","CTA","FAQ","Steps","FeatureSplit","Bento"]}},renderFields:({fields:e})=>(0,xy.jsx)(ma,{appearance:[e.numColumns,e.gap,e.layout]}),defaultProps:{numColumns:4,gap:24,items:[]},render:({gap:e,numColumns:t,items:r})=>(0,xy.jsx)(vc,{children:(0,xy.jsx)(r,{as:H_e,className:j_e(),style:{gap:e,gridTemplateColumns:`repeat(${t}, 1fr)`}})})},RD=yc(q_e);
var ZZ={Flex:"b","Flex-item":"g"};
var Ew=T($()),V_e=Bo("Flex",ZZ),W_e={ai:{instructions:"Lays out children in a flexible row or column. Don't use this unless asked by the user explicitly."},fields:{direction:{label:"Direction",type:"radio",options:[{label:"Row",value:"row"},{label:"Column",value:"column"}]},justifyContent:{label:"Justify content",type:"radio",options:[{label:"Start",value:"start"},{label:"Center",value:"center"},{label:"End",value:"end"}],ai:{instructions:"Controls how the flex container distributes space along the main axis (horizontal for row, vertical for column)."}},alignItems:{label:"Align items",type:"radio",options:[{label:"Start",value:"start"},{label:"Center",value:"center"},{label:"End",value:"end"}],ai:{instructions:"Controls how the flex container aligns items along the cross axis (vertical for row, horizontal for column)."}},gap:{label:"Gap",type:"number",min:0,ai:{instructions:"The gap between children, in pixels."}},wrap:{label:"Wrap",type:"radio",ai:{instructions:"Use 'wrap' to move children onto new lines when needed, or 'nowrap' to keep them on one line."},options:[{label:"True",value:"wrap"},{label:"False",value:"nowrap"}]},items:{type:"slot",disallow:["Hero","Stats","Logos","FeatureGrid","CTA","FAQ","Steps","FeatureSplit","Bento"]}},renderFields:({fields:e})=>(0,Ew.jsx)(ma,{appearance:[e.direction,e.justifyContent,e.alignItems,e.gap,e.wrap,e.layout]}),defaultProps:{justifyContent:"start",alignItems:"start",direction:"row",gap:24,wrap:"wrap",layout:{grow:!0},items:[]},render:({justifyContent:e,direction:t,gap:r,wrap:n,alignItems:o,items:a})=>(0,Ew.jsx)(vc,{style:{height:"100%"},children:(0,Ew.jsx)(a,{className:V_e(),style:{justifyContent:e,flexDirection:t,gap:r,flexWrap:n,alignItems:o}})})},XZ=yc(W_e);
var YZ={Space:"f","Space--vertical":"h","Space--horizontal":"x"};
var zD=T($()),G_e=Bo("Space",YZ),JZ={ai:{instructions:"Adds empty space between components. Don't use this unless asked by the user explicitly. Inside Flex or Grid, use the container's gap instead of a Space."},label:"Space",fields:{size:{type:"select",label:"Size",options:kw},directions:{type:"checkbox",label:"Directions",options:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],ai:{instructions:"Use 'vertical' in a column, 'horizontal' in a row, or the empty value when both axes need spacing."}}},renderFields:({fields:e})=>(0,zD.jsx)(ma,{appearance:[e.size,e.directions]}),defaultProps:{directions:["vertical","horizontal"],size:"24px"},inline:!0,render:({directions:e,size:t,puck:r})=>{let n=(e==null?void 0:e.length)===1?e[0]:null;return(0,zD.jsx)("div",{ref:r.dragRef,className:G_e(n?{[n]:!0}:{}),style:{"--size":t}})}};
var PD=T($()),Aw=window.__puckLifecycle,Oh=document.getElementById("root"),Gs,eX=!1;
Aw.registerCleanup(()=>{eX=!0;try{Gs==null||Gs.unmount()}finally{Oh==null||Oh.replaceChildren(),delete window.__puckTest,delete window.__puckLifecycle}});
if(!Oh)throw Error("Missing root");
var K_e={categories:{typography:{title:"Typography",components:["Heading","Text"]},layout:{title:"Layout",components:["Grid","Flex","Space"]}},components:{Heading:DD,Text:Lw,Grid:RD,Flex:XZ,Space:JZ}},Z_e={content:[{type:"Heading",props:Q(P({},DD.defaultProps),{id:"heading-original",text:"Exodus \xB7 \u672C\u5730\u8D44\u6599\u9875",level:"1"})},{type:"Text",props:Q(P({},Lw.defaultProps),{id:"text-original",text:"\u9009\u4E2D\u5185\u5BB9\u7F16\u8F91\u5B57\u6BB5\uFF0C\u63D2\u5165\u7EC4\u4EF6\u5E76\u8C03\u6574\u5E03\u5C40\u3002\u4EC5\u5F53\u524D\u4F1A\u8BDD\uFF0C\u65E0\u4E91\u7AEF\u53D1\u5E03\u3002"})},{type:"Grid",props:Q(P({},RD.defaultProps),{id:"grid-original",numColumns:2,items:[{type:"Text",props:Q(P({},Lw.defaultProps),{id:"nested-text",text:"\u539F Grid \u5D4C\u5957 Slot \u5185\u5BB9"})}]})}],root:{props:{}}};
tX();
document.addEventListener("visibilitychange",()=>{if(!eX)try{document.hidden?(Gs==null||Gs.unmount(),Gs=null,Oh.replaceChildren(),Aw.pauseTasks()):(Aw.resumeTasks(),tX())}catch(e){Aw.fatal(e)}});
}catch(e){window.__puckLifecycle?.fatal(e)}}