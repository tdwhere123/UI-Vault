
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

      // Styles every Chart.js chart on the page from AdminLTE's CSS variables —
      // font, text, gridlines, tooltip and legend — and keeps them in step with the
      // colour mode (ColorMode, the OS in auto mode, or your own code) and with
      // `dir="rtl"`. Canvas can't read CSS, so the values are resolved here and
      // re-applied to every chart whenever <html data-bs-theme> or dir changes.
      (() => {
        'use strict';
        const { Chart } = globalThis;
        if (!Chart) {
          return;
        }

        const root = document.documentElement;
        const cssVar = (name, fallback = '') =>
          getComputedStyle(root).getPropertyValue(name).trim() || fallback;

        // "#0d6efd" (or "#06f") + 0.3 -> "rgba(13, 110, 253, 0.3)"; anything else is returned as is.
        const alpha = (color, opacity) => {
          let hex = String(color).trim().replace(/^#/, '');
          if (!/^[\da-f]{3}([\da-f]{3})?$/i.test(hex)) {
            return color;
          }

          if (hex.length === 3) {
            hex = [...hex].map((c) => c + c).join('');
          }

          const [r, g, b] = [0, 2, 4].map((i) => Number.parseInt(hex.slice(i, i + 2), 16));
          return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        };

        // Scriptable backgroundColor for area charts: the line colour fading to transparent.
        const areaFill =
          (color, from = 0.35, to = 0) =>
          (context) => {
            const { ctx, chartArea } = context.chart;
            if (!chartArea) {
              return alpha(color, from);
            }

            const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
            gradient.addColorStop(0, alpha(color, from));
            gradient.addColorStop(1, alpha(color, to));
            return gradient;
          };

        // The theme colours currently in Chart.defaults.
        let applied = [];

        const apply = () => {
          const text = cssVar('--bs-secondary-color', '#6c757d');
          const body = cssVar('--bs-body-color', '#212529');
          const surface = cssVar('--bs-body-bg', '#fff');
          const grid = `rgba(${cssVar('--bs-emphasis-color-rgb', '0, 0, 0')}, 0.08)`;
          const rtl = root.getAttribute('dir') === 'rtl';
          const d = Chart.defaults;
          applied = [text, grid];

          d.font.family = cssVar('--bs-body-font-family', d.font.family);
          d.font.size = 12;
          d.color = text;
          d.borderColor = grid;
          d.maintainAspectRatio = false;

          d.scale.grid.color = grid;
          d.scale.border.color = grid;
          d.scale.ticks.padding = 8;
          // Value axes float, category axes keep only their baseline.
          d.set('scales.linear', { border: { display: false } });
          d.set('scales.category', { grid: { display: false } });

          d.elements.line.borderWidth = 2;
          d.elements.point.radius = 0;
          d.elements.point.hoverRadius = 5;
          d.elements.point.hitRadius = 8;
          d.elements.point.hoverBorderWidth = 2;
          d.elements.point.borderColor = surface;
          d.elements.bar.borderRadius = 4;
          d.elements.arc.borderColor = surface;
          d.elements.arc.borderWidth = 2;

          const { legend, tooltip } = d.plugins;
          legend.position = 'bottom';
          legend.rtl = rtl;
          Object.assign(legend.labels, {
            color: body,
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 8,
            boxHeight: 8,
            padding: 16,
          });

          Object.assign(tooltip, {
            rtl,
            backgroundColor: surface,
            borderColor: cssVar('--bs-border-color', '#dee2e6'),
            borderWidth: 1,
            titleColor: cssVar('--bs-emphasis-color', '#000'),
            bodyColor: body,
            titleFont: { weight: '600' },
            padding: 10,
            cornerRadius: 6,
            caretSize: 5,
            boxPadding: 4,
            usePointStyle: true,
          });

          // Line and bar charts share one tooltip per x value, like a dashboard should.
          for (const type of ['line', 'bar']) {
            Chart.overrides[type].interaction = { mode: 'index', intersect: false };
          }
        };

        // Chart.js copies the scale defaults (tick, grid, border and title colours)
        // into each chart's config when the chart is created, so new defaults alone
        // never reach an existing chart's axes. Drop the copies that still hold the
        // previous theme's colours; update() then copies the new ones in. Colours a
        // chart set for itself are left alone.
        const forgetThemeColors = (options, stale) => {
          for (const [key, value] of Object.entries(options)) {
            if (value && typeof value === 'object' && !Array.isArray(value)) {
              forgetThemeColors(value, stale);
            } else if (/color$/i.test(key) && stale.includes(value)) {
              delete options[key];
            }
          }
        };

        const refresh = () => {
          const stale = applied;
          apply();
          for (const chart of Object.values(Chart.instances)) {
            forgetThemeColors(chart.config.options.scales || {}, stale);
            chart.update('none');
          }
        };

        apply();
        new MutationObserver(refresh).observe(root, {
          attributes: true,
          attributeFilter: ['data-bs-theme', 'dir'],
        });
        // The web font may arrive after the first draw; redraw so labels use it.
        document.fonts?.addEventListener('loadingdone', refresh);

        // Helpers for the page's own chart code.
        // eslint-disable-next-line unicorn/no-global-object-property-assignment
        globalThis.lteChartTheme = { cssVar, alpha, areaFill, refresh };
      })();
    
;

      // NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
      // IT'S ALL JUST JUNK FOR DEMO
      // ++++++++++++++++++++++++++++++++++++++++++

      /* Chart.js
       * --------
       * A small showcase of the most common Chart.js chart types.
       * Each canvas sits in a wrapper with a fixed height; the charts
       * fill it and follow its width (sidebar toggle included).
       */

      const { cssVar, alpha, areaFill } = globalThis.lteChartTheme;
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const thousands = (value) => `$${Math.round(value / 1000)}k`;
      const dollars = (context) =>
        ` ${context.dataset.label}: $${context.parsed.y.toLocaleString()}`;

      //--------------
      // - LINE CHART -
      //--------------

      new Chart(document.querySelector('#line-chart'), {
        type: 'line',
        data: {
          labels: months,
          datasets: [
            {
              label: 'Revenue',
              data: [
                31200, 34800, 32600, 39400, 42100, 45800, 44300, 49700, 52400, 56900, 60200, 65800,
              ],
              borderColor: '#0d6efd',
              backgroundColor: '#0d6efd',
              borderWidth: 3,
              pointRadius: 4,
            },
          ],
        },
        options: {
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: dollars } },
          },
          scales: {
            y: { ticks: { callback: thousands } },
          },
        },
      });

      //------------------
      // - END LINE CHART -
      //------------------

      //--------------
      // - AREA CHART -
      //--------------

      new Chart(document.querySelector('#area-chart'), {
        type: 'line',
        data: {
          labels: months.slice(0, 7).map((month) => `${month} '25`),
          datasets: [
            {
              label: 'New Visitors',
              data: [8100, 9300, 8700, 10400, 12200, 11600, 13900],
              borderColor: '#0d6efd',
              backgroundColor: areaFill('#0d6efd'),
              pointBackgroundColor: '#0d6efd',
              fill: true,
              tension: 0.4,
            },
            {
              label: 'Returning Visitors',
              data: [4200, 4600, 5100, 4900, 5800, 6300, 6900],
              borderColor: '#20c997',
              backgroundColor: areaFill('#20c997'),
              pointBackgroundColor: '#20c997',
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          plugins: {
            tooltip: {
              callbacks: {
                title: ([item]) =>
                  `${new Date(2025, item.dataIndex).toLocaleString('en', { month: 'long' })} 2025`,
              },
            },
          },
          scales: {
            y: { beginAtZero: true },
          },
        },
      });

      //------------------
      // - END AREA CHART -
      //------------------

      //----------------
      // - COLUMN CHART -
      //----------------

      new Chart(document.querySelector('#column-chart'), {
        type: 'bar',
        data: {
          labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'],
          datasets: [
            {
              label: 'Online Store',
              data: [44300, 55600, 57200, 61400],
              backgroundColor: '#6f42c1',
            },
            {
              label: 'Retail Stores',
              data: [35100, 41200, 36800, 45300],
              backgroundColor: '#20c997',
            },
          ],
        },
        options: {
          datasets: {
            bar: { categoryPercentage: 0.55, barPercentage: 0.9 },
          },
          plugins: {
            tooltip: { callbacks: { label: dollars } },
          },
          scales: {
            y: { ticks: { callback: thousands } },
          },
        },
      });

      //--------------------
      // - END COLUMN CHART -
      //--------------------

      //---------------
      // - DONUT CHART -
      //---------------

      new Chart(document.querySelector('#donut-chart'), {
        type: 'doughnut',
        data: {
          labels: ['Organic Search', 'Direct', 'Referral', 'Social Media', 'Email'],
          datasets: [
            {
              label: 'Sessions',
              data: [3450, 2210, 1160, 940, 620],
              backgroundColor: ['#0d6efd', '#20c997', '#ffc107', '#d63384', '#6f42c1'],
            },
          ],
        },
        options: {
          cutout: '65%',
          plugins: {
            legend: { position: 'right' },
          },
        },
      });

      //-------------------
      // - END DONUT CHART -
      //-------------------

      //--------------------
      // - RADIAL BAR CHART -
      //--------------------

      // Concentric doughnut rings, one per value, each drawn over a track.
      // A tiny inline plugin writes the average in the middle.
      const radial_values = [76, 67, 61];
      const radial_labels = ['Sales', 'Marketing', 'Support'];
      const radial_colors = ['#0d6efd', '#20c997', '#ffc107'];
      const radial_track = () => cssVar('--bs-secondary-bg', '#e9ecef');

      const centerText = {
        id: 'centerText',
        afterDatasetsDraw(chart, args, options) {
          const { ctx, chartArea } = chart;
          const x = (chartArea.left + chartArea.right) / 2;
          const y = (chartArea.top + chartArea.bottom) / 2;
          ctx.save();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = cssVar('--bs-secondary-color');
          ctx.font = `14px ${Chart.defaults.font.family}`;
          ctx.fillText(options.label, x, y - 14);
          ctx.fillStyle = cssVar('--bs-emphasis-color');
          ctx.font = `600 24px ${Chart.defaults.font.family}`;
          ctx.fillText(options.value, x, y + 12);
          ctx.restore();
        },
      };

      new Chart(document.querySelector('#radialbar-chart'), {
        type: 'doughnut',
        data: {
          labels: ['value', 'rest'],
          datasets: radial_values.map((value, index) => ({
            label: radial_labels[index],
            data: [value, 100 - value],
            // A function, so the track colour is re-read when the colour mode changes.
            backgroundColor: (context) =>
              context.dataIndex === 0 ? radial_colors[index] : radial_track(),
            hoverBackgroundColor: (context) =>
              context.dataIndex === 0 ? radial_colors[index] : radial_track(),
            borderWidth: 4,
            hoverBorderWidth: 4,
          })),
        },
        options: {
          cutout: '50%',
          plugins: {
            legend: { display: false },
            centerText: {
              label: 'Average',
              value: `${Math.round(radial_values.reduce((sum, value) => sum + value, 0) / radial_values.length)}%`,
            },
            tooltip: {
              filter: (item) => item.dataIndex === 0,
              callbacks: {
                title: () => '',
                label: (item) => ` ${item.dataset.label}: ${item.raw}%`,
                labelColor: (item) => ({
                  backgroundColor: radial_colors[item.datasetIndex],
                  borderColor: radial_colors[item.datasetIndex],
                }),
              },
            },
          },
        },
        plugins: [centerText],
      });

      //------------------------
      // - END RADIAL BAR CHART -
      //------------------------

      //---------------
      // - MIXED CHART -
      //---------------

      new Chart(document.querySelector('#mixed-chart'), {
        type: 'bar',
        data: {
          labels: months.slice(0, 9),
          datasets: [
            {
              label: 'Orders',
              data: [440, 505, 414, 671, 227, 413, 201, 352, 752],
              backgroundColor: alpha('#20c997', 0.85),
              hoverBackgroundColor: '#20c997',
              categoryPercentage: 0.55,
              yAxisID: 'y',
              order: 1,
            },
            {
              type: 'line',
              label: 'Revenue',
              data: [23100, 26200, 22800, 34100, 18300, 24400, 15600, 21900, 38200],
              borderColor: '#0d6efd',
              backgroundColor: '#0d6efd',
              borderWidth: 3,
              tension: 0.4,
              yAxisID: 'y1',
              order: 0,
            },
          ],
        },
        options: {
          plugins: {
            // `order` puts the line on top of the bars; list them in dataset order.
            legend: {
              labels: { sort: (a, b) => a.datasetIndex - b.datasetIndex },
            },
            tooltip: {
              itemSort: (a, b) => a.datasetIndex - b.datasetIndex,
              callbacks: {
                label: (context) =>
                  context.dataset.yAxisID === 'y1'
                    ? dollars(context)
                    : ` ${context.dataset.label}: ${context.parsed.y}`,
              },
            },
          },
          scales: {
            y: {
              position: 'left',
              title: { display: true, text: 'Orders' },
            },
            y1: {
              position: 'right',
              title: { display: true, text: 'Revenue' },
              grid: { drawOnChartArea: false },
              ticks: { callback: thousands },
            },
          },
        },
      });

      //-------------------
      // - END MIXED CHART -
      //-------------------
    