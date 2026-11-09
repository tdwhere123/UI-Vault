(() => {
  'use strict';
  const labels = [...document.querySelectorAll('label.margin-toggle')];
  const removers = [];
  let ended = false;
  const status = document.getElementById('lifecycle-status');
  function listen(target, event, handler) {
    target.addEventListener(event, handler);
    removers.push(() => target.removeEventListener(event, handler));
  }
  function stop() {
    if (ended) return;
    ended = true;
    removers.splice(0).forEach(remove => remove());
    labels.forEach(label => {
      label.tabIndex = -1;
      label.setAttribute('aria-disabled', 'true');

    });
    document.querySelectorAll('input.margin-toggle').forEach(input => { input.disabled = true; });
  }
  try {
    for (const label of labels) {
      const input = document.getElementById(label.htmlFor);
      const aside = document.getElementById(label.getAttribute('aria-controls'));
      if (!(input instanceof HTMLInputElement) || input.type !== 'checkbox' || !aside || input.nextElementSibling !== aside) {
        throw new Error('Invalid note association');
      }
      const sync = () => label.setAttribute('aria-expanded', String(input.checked));
      sync();
      listen(input, 'change', sync);
      listen(label, 'keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          if (!ended) input.click();
        }
      });
    }
    listen(window, 'pagehide', stop);
    if (status) status.textContent = '旁注交互已就绪；排版与像素尚未人工视觉验收。';
  } catch (_) {
    stop();
    if (status) status.textContent = '旁注交互不可用；正文仍可阅读。';
  }
})();
