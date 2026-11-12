(() => {
  'use strict';
  const owned = [];
  let stopped = false;
  function listen(el, type, fn) {
    const wrapped = (event) => { if (!stopped) fn(event); };
    el.addEventListener(type, wrapped);
    owned.push(() => el.removeEventListener(type, wrapped));
  }
  function dispose() {
    if (stopped) return;
    stopped = true;
    owned.splice(0).forEach((fn) => fn());
  }
  listen(window, 'atlas:dispose', dispose);
  listen(window, 'pagehide', dispose);
  listen(document, 'submit', (event) => event.preventDefault());
  listen(document, 'click', (event) => {
    const link = event.target && event.target.closest && event.target.closest('a[href]');
    if (link) event.preventDefault();
  });
})();
