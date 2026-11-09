(() => {
  'use strict';
  const d = document, b = d.body;
  const controls = [...d.querySelectorAll('input, button, select, textarea')];
  const labels = [...d.querySelectorAll('label.sidenote-toggle')];
  const clean = [];
  let closed = false;
  function close(clear = false) {
    if (closed) return;
    closed = true;
    clean.splice(0).forEach(fn => fn());
    controls.forEach(el => { el.disabled = true; });
    labels.forEach(el => { el.tabIndex = -1; el.setAttribute('aria-disabled', 'true'); });
    if (clear) b.replaceChildren();
  }
  function fail() {
    close();
    const message = d.createElement('p');
    message.setAttribute('role', 'alert');
    message.textContent = '阅读控件暂不可用；正文仍可阅读。';
    b.prepend(message);
  }
  function on(el, type, fn) {
    if (!el) throw new Error('Required reading control missing');
    const guarded = event => {
      if (closed) return;
      try { fn(event); } catch (_) { event.preventDefault(); fail(); }
    };
    el.addEventListener(type, guarded);
    clean.push(() => el.removeEventListener(type, guarded));
  }
  try {
    const dark = d.getElementById('dark-mode-toggle');
    const font = d.getElementById('typeface-toggle');
    const typeface = d.getElementById('typeface');
    if (!dark || !font || !typeface) throw new Error('Reading toolbar incomplete');
    on(dark, 'click', () => {
      b.classList.toggle('latex-dark');
      dark.setAttribute('aria-pressed', String(b.classList.contains('latex-dark')));
    });
    on(font, 'click', () => {
      if (!d.getElementById('typeface')) throw new Error('Typeface output missing');
      b.classList.toggle('libertinus');
      typeface.textContent = b.classList.contains('libertinus') ? 'Times New Roman (system)' : 'Georgia (system)';
      font.setAttribute('aria-pressed', String(b.classList.contains('libertinus')));
    });
    for (const el of [dark, font]) el.setAttribute('aria-pressed', 'false');
    for (const lab of labels) {
      const input = d.getElementById(lab.htmlFor);
      if (!(input instanceof HTMLInputElement) || input.type !== 'checkbox') throw new Error('Sidenote control missing');
      on(input, 'change', () => lab.setAttribute('aria-expanded', String(input.checked)));
      on(lab, 'keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); input.click(); }
      });
    }
    for (const a of d.querySelectorAll('a[href^="#"]')) on(a, 'click', event => {
      event.preventDefault();
      const target = d.getElementById(a.getAttribute('href').slice(1));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        target.scrollIntoView?.({ block: 'start', behavior: 'auto' });
      }
    });
    on(window, 'pagehide', () => close(true));
  } catch (_) { fail(); }
})();
