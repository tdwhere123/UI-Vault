
      // onclick, not addEventListener: a page with several navbars runs this once per navbar,
      // and assigning the property keeps it at one handler per button.
      for (const close of document.querySelectorAll(
        "[data-navbar-notifications-close]",
      )) {
        close.onclick = () => {
          const toggle = close
            .closest(".dropdown")
            .querySelector('[data-bs-toggle="dropdown"]');
          window.tabler.bootstrap.Dropdown.getOrCreateInstance(toggle).hide();
        };
      }
    
;

      (function () {
        const listId = "table-default";
        const valueNames = [
          "sort-name",
          "sort-type",
          "sort-city",
          "sort-score",
          { attr: "data-date", name: "sort-date" },
          { attr: "data-progress", name: "sort-progress" },
          "sort-quantity",
        ];

        function initTablerList() {
          window.tabler_list ??= {};
          window.tabler_list[listId] = new List(listId, {
            sortClass: "table-sort",
            listClass: "table-tbody",
            valueNames,
          });
        }

        document.readyState !== "loading"
          ? initTablerList()
          : document.addEventListener("DOMContentLoaded", initTablerList, {
              once: true,
            });
      })();
    
;

      (function () {
        // Preview adaptation at the official Tabler theme URL write site only.
        // Opaque / about:srcdoc cannot persist theme in the URL. Local display
        // state (document + Storage fallback) is already applied above and remains
        // the only theme result. This is not a business-success claim for URL
        // persistence. Same-origin history.pushState is unchanged. Unexpected
        // SecurityError still throws. Not a History wrapper for other consumers.
        function writeThemeUrl(url) {
          try {
            window.history.pushState({}, "", url);
          } catch (err) {
            var href = "";
            try { href = String((window.location && window.location.href) || ""); } catch (eLoc) { href = ""; }
            var opaque = false;
            try {
              var origin = window.origin;
              opaque = !origin || origin === "null" || href.indexOf("about:srcdoc") === 0;
            } catch (eOrigin) { opaque = true; }
            if (!(opaque && err && err.name === "SecurityError")) throw err;
          }
        }
        const themeDefaults = {
          theme: "auto",
          "theme-base": "neutral",
          "theme-font": "sans-serif",
          "theme-primary": "blue",
          "theme-radius": "1",
          layout: "default",
          navbar: "default",
          "navbar-position": "horizontal",
          "navbar-style": "default",
          "navbar-theme": "default",
          "offcanvas-style": "default",
          sidebar: "default",
        };
        const themePresets = {
          scheme: {
            auto: { theme: "auto", "navbar-theme": "default" },
            light: { theme: "light", "navbar-theme": "default" },
            dark: { theme: "dark", "navbar-theme": "default" },
            "dark-nav": { theme: "light", "navbar-theme": "dark" },
            colored: { theme: "light", "navbar-theme": "primary" },
          },
        };
        const sidebarOnlyKeys = ["sidebar"];
        const navbarOnlyKeys = ["navbar"];

        /*
			This script handles the theme settings offcanvas functionality
			It saves the selected settings to localStorage and applies them to the document
			It also updates the URL with the selected settings as query parameters
			It also has a reset button to clear all settings and revert to default

			This is just a demo script to show how to implement theme settings. You can modify it as needed.
			*/
        document.addEventListener("DOMContentLoaded", function () {
          var url = new URL(window.location);
          var form = document.getElementById("offcanvas-settings");
          var resetButton = document.getElementById("reset-changes");

          // Same rule as the theme script: the default state is the absence of the
          // attribute, so only a non-default value is written.
          var applyValue = function (key, value) {
            var applied = value;

            if (key === "theme" && value === "auto") {
              applied = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light";
            }

            if (applied !== themeDefaults[key]) {
              document.documentElement.setAttribute("data-bs-" + key, applied);
            } else {
              document.documentElement.removeAttribute("data-bs-" + key);
            }
          };

          // Same precedence as the theme script: a stored choice wins, otherwise
          // the attribute the page rendered for its own layout, otherwise the
          // default. Reading the attribute matters on the layout demo pages,
          // where the page states its variant and nothing is stored yet.
          //
          // Color mode is the exception: data-bs-theme holds the resolved value,
          // so "auto" on a light system looks exactly like an explicit "light"
          // and reading it back would silently turn the default into a choice.
          var currentValue = function (key) {
            var stored = window.localStorage["tabler-" + key];
            var rendered =
              key === "theme"
                ? null
                : document.documentElement.getAttribute("data-bs-" + key);

            return stored || rendered || themeDefaults[key];
          };

          // Some settings only do something with one of the navigations on
          // screen; the others are hidden rather than left to do nothing.
          var toggleSidebarSettings = function () {
            var vertical = currentValue("navbar-position") === "vertical";
            var setHidden = function (keys, hidden) {
              keys.forEach(function (key) {
                var fieldset = form.querySelector(
                  '[data-theme-setting="' + key + '"]',
                );

                if (fieldset) {
                  fieldset.hidden = hidden;
                }
              });
            };

            setHidden(sidebarOnlyKeys, !vertical);
            setHidden(navbarOnlyKeys, vertical);
          };

          var setValue = function (key, value) {
            applyValue(key, value);
            window.localStorage.setItem("tabler-" + key, value);
            url.searchParams.set(key, value);
          };

          // A preset tile stands for several keys; it reads as checked only
          // while every one of them holds the tile's value.
          var presetMatches = function (values) {
            return Object.keys(values).every(function (key) {
              return currentValue(key) === values[key];
            });
          };

          var checkItems = function () {
            for (var key in themeDefaults) {
              var value = currentValue(key);

              form
                .querySelectorAll('[name="' + key + '"]')
                .forEach(function (radio) {
                  radio.checked = radio.value === value;
                });
            }

            for (var name in themePresets) {
              form
                .querySelectorAll('[name="' + name + '"]')
                .forEach(function (radio) {
                  radio.checked = presetMatches(
                    themePresets[name][radio.value],
                  );
                });
            }

            toggleSidebarSettings();
          };

          form.addEventListener("change", function (event) {
            var target = event.target,
              name = target.name,
              value = target.value;

            if (name in themePresets) {
              var values = themePresets[name][value];

              for (var presetKey in values) {
                setValue(presetKey, values[presetKey]);
              }
            } else if (name in themeDefaults) {
              setValue(name, value);
            }

            toggleSidebarSettings();
            // Plugins that measured the old width (charts, maps) need a nudge.
            window.dispatchEvent(new Event("resize"));
            writeThemeUrl(url);
          });

          resetButton.addEventListener("click", function () {
            for (var key in themeDefaults) {
              applyValue(key, themeDefaults[key]);
              window.localStorage.removeItem("tabler-" + key);
              url.searchParams.delete(key);
            }

            checkItems();

            window.dispatchEvent(new Event("resize"));
            writeThemeUrl(url);
          });

          checkItems();
        });
      })();
    