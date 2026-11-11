/* Local preview adapter only. The official HyperUI application/dropdown/1.html
   example is a static open menu, and official public/component.js only intercepts
   links and forms — it does not toggle this menu. This file is not upstream
   source. It must not loosen the link/form intercept in runtime.js. */
(function (root) {
  function bindDropdownMenuPreview(doc) {
    if (!doc || typeof doc.querySelector !== 'function') {
      return;
    }
    const button = doc.querySelector('button[aria-label="Menu"]');
    const menu = doc.querySelector('[role="menu"]');
    if (!button || !menu) {
      return;
    }
    if (button.getAttribute('data-preview-menu-bound') === 'true') {
      return;
    }
    button.setAttribute('data-preview-menu-bound', 'true');

    const menuId = menu.id || 'application-dropdown-menu';
    if (!menu.id) {
      menu.id = menuId;
    }
    button.setAttribute('aria-haspopup', 'menu');
    button.setAttribute('aria-controls', menuId);

    const setOpen = function (open) {
      menu.hidden = !open;
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    setOpen(false);

    button.addEventListener('click', function (event) {
      if (event && typeof event.stopPropagation === 'function') {
        event.stopPropagation();
      }
      if (event && typeof event.preventDefault === 'function') {
        event.preventDefault();
      }
      setOpen(button.getAttribute('aria-expanded') !== 'true');
    });

    menu.addEventListener('click', function (event) {
      const target = event && event.target;
      if (!target || typeof target.closest !== 'function') {
        return;
      }
      if (target.closest('[role="menuitem"], a, button')) {
        setOpen(false);
      }
    });

    doc.addEventListener('click', function (event) {
      if (button.getAttribute('aria-expanded') !== 'true') {
        return;
      }
      const target = event && event.target;
      if (target && (button.contains(target) || menu.contains(target))) {
        return;
      }
      setOpen(false);
    });

    doc.addEventListener('keydown', function (event) {
      if (event && event.key === 'Escape') {
        setOpen(false);
      }
    });
  }

  root.bindDropdownMenuPreview = bindDropdownMenuPreview;

  if (typeof document !== 'undefined') {
    const body = document.body;
    const demo = body && (body.getAttribute('data-demo') || (body.dataset && body.dataset.demo));
    if (demo === 'application-dropdown') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
          bindDropdownMenuPreview(document);
        });
      } else {
        bindDropdownMenuPreview(document);
      }
    }
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
