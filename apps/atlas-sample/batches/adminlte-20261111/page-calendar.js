
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

      // Keep all-day dates local; UTC conversion can shift them by a day.
      const isoDate = (d) =>
        [
          d.getFullYear(),
          String(d.getMonth() + 1).padStart(2, '0'),
          String(d.getDate()).padStart(2, '0'),
        ].join('-');

      document.addEventListener('DOMContentLoaded', () => {
        const cellObservers = new WeakMap();
        const calendarEl = document.getElementById('calendar');
        const externalEl = document.getElementById('external-events');
        const removeAfterDrop = document.getElementById('remove-after-drop');

        new FullCalendar.Interaction.Draggable(externalEl, {
          itemSelector: '.draggable-event',
          eventData: (el) => ({
            title: el.textContent.trim(),
            color: el.dataset.color,
          }),
        });

        const today = new Date();
        const offsetDay = (n) => {
          const d = new Date(today);
          d.setDate(today.getDate() + n);
          return isoDate(d);
        };

        const calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          buttons: { today: { hint: 'Today' } },
          // Date cells also contain event titles. Include that visible text in
          // their accessible names, including after drag, edit, or navigation.
          dayCellDidMount: ({ el }) => {
            const dateLabel = el.getAttribute('aria-label') || '';
            const syncLabel = () => {
              const visibleText = el.textContent.replace(/\s+/g, ' ').trim();
              el.setAttribute('aria-label', `${dateLabel} ${visibleText}`.trim());
            };
            const observer = new MutationObserver(syncLabel);
            observer.observe(el, { childList: true, subtree: true, characterData: true });
            cellObservers.set(el, observer);
            syncLabel();
          },
          dayCellWillUnmount: ({ el }) => {
            cellObservers.get(el)?.disconnect();
            cellObservers.delete(el);
          },
          headerToolbar: {
            start: 'prev,next today',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          },
          height: 700,
          editable: true,
          droppable: true,
          dayMaxEvents: 3,
          drop: (info) => {
            if (removeAfterDrop.checked) {
              info.draggedEl.remove();
            }
          },
          dateClick: (info) => {
            const title = prompt('Event title:');
            if (title) {
              calendar.addEvent({
                title: title,
                start: info.dateStr,
                allDay: info.allDay,
              });
            }
          },
          eventClick: (info) => {
            if (confirm(`Delete "${info.event.title}"?`)) {
              info.event.remove();
            }
          },
          events: [
            { title: 'Quarterly planning', start: offsetDay(-2), color: '#0d6efd' },
            { title: 'Onboarding session', start: offsetDay(1), color: '#198754' },
            {
              title: 'Design review',
              start: offsetDay(3),
              end: offsetDay(4),
              color: '#ffc107',
              contrastColor: '#000',
            },
            { title: 'Release v2.5', start: offsetDay(7), color: '#dc3545' },
            { title: 'All-hands', start: offsetDay(10), color: '#6f42c1' },
          ],
        });

        calendar.render();
      });
    