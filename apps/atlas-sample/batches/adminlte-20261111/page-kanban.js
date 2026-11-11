
      (() => {
        'use strict';
        const root = document.documentElement;

        // Applications with their own theming opt out of AdminLTE's color mode
        // entirely, here as well as in the bundle.
        if (root.getAttribute('data-lte-color-mode') === 'off') {
          return;
        }

        const STORAGE_KEY = 'lte-theme';
        let stored = null;
        try {
          stored = localStorage.getItem(STORAGE_KEY);
        } catch {
          // localStorage may be unavailable (private mode, sandboxed iframe).
        }
        // Mirror the precedence in color-mode.ts: the visitor's stored choice
        // wins, then a theme this page declared itself, then the OS preference.
        const authored = root.getAttribute('data-bs-theme');
        let resolved = 'light';
        if (stored === 'dark' || stored === 'light') {
          resolved = stored;
        } else if (authored === 'dark' || authored === 'light') {
          resolved = authored;
        } else if (globalThis.matchMedia('(prefers-color-scheme: dark)').matches) {
          resolved = 'dark';
        }
        root.setAttribute('data-bs-theme', resolved);
        root.style.colorScheme = resolved;
        // Flag values computed here, so the bundle does not mistake them for a
        // theme the page declared and stop following the OS preference.
        if (resolved !== authored) {
          root.setAttribute('data-lte-theme-resolved', '');
        }
      })();
    
;

      const SELECTOR_SIDEBAR_WRAPPER = '.sidebar-wrapper';
      const Default = {
        scrollbarTheme: 'os-theme-light',
        scrollbarAutoHide: 'leave',
        scrollbarClickScroll: true,
      };
      document.addEventListener('DOMContentLoaded', function () {
        const sidebarWrapper = document.querySelector(SELECTOR_SIDEBAR_WRAPPER);

        // Disable OverlayScrollbars on mobile devices to prevent touch interference
        const isMobile = window.innerWidth <= 992;

        if (
          sidebarWrapper &&
          globalThis.OverlayScrollbarsGlobal?.OverlayScrollbars !== undefined &&
          !isMobile
        ) {
          OverlayScrollbarsGlobal.OverlayScrollbars(sidebarWrapper, {
            scrollbars: {
              theme: Default.scrollbarTheme,
              autoHide: Default.scrollbarAutoHide,
              clickScroll: Default.scrollbarClickScroll,
            },
          });
        }
      });
    
;

      const updateLaneCount = (laneEl) => {
        const lane = laneEl.closest('.kanban-lane');
        const badge = lane.querySelector('.kanban-lane-header .badge');
        badge.textContent = laneEl.children.length;
      };

      document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.kanban-cards').forEach((el) => {
          new Sortable(el, {
            group: 'kanban',
            animation: 150,
            ghostClass: 'sortable-ghost',
            dragClass: 'sortable-drag',
            onEnd: (evt) => {
              updateLaneCount(evt.from);
              if (evt.from !== evt.to) updateLaneCount(evt.to);
            },
          });
        });

        document.querySelectorAll('[data-add-card-for]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const title = prompt('Card title:');
            if (!title) return;
            const laneId = btn.dataset.addCardFor;
            const lane = document.querySelector(`.kanban-cards[data-lane-id="${laneId}"]`);
            const card = document.createElement('article');
            card.className = 'kanban-card';
            card.innerHTML = `
              <p class="fw-semibold mb-1 small">${title.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' })[c])}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="kanban-assignees">
                  <span class="kanban-assignee" title="You">YO</span>
                </div>
                <small class="text-body-secondary">just now</small>
              </div>
            `;
            lane.append(card);
            updateLaneCount(lane);
          });
        });
      });
    