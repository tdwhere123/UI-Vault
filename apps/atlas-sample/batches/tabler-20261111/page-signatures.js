
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
        const signatureKey = "default";
        const canvasId = "signature-default";
        const clearId = "signature-default-clear";
        const clear = true;
        const event = "DOMContentLoaded";

        window.tabler_signature ??= {};

        function resizeCanvas(canvas, signaturePad) {
          const ratio = Math.max(window.devicePixelRatio || 1, 1);

          canvas.width = canvas.offsetWidth * ratio;
          canvas.height = canvas.offsetHeight * ratio;
          canvas.getContext("2d").scale(ratio, ratio);
          signaturePad.fromData(signaturePad.toData());
        }

        function initSignature() {
          const canvas = document.getElementById(canvasId);

          if (!canvas) {
            return;
          }

          let signaturePad = window.tabler_signature[signatureKey];

          if (!signaturePad) {
            signaturePad = new SignaturePad(canvas, {
              backgroundColor: "transparent",
              penColor: getComputedStyle(canvas).color,
            });

            window.tabler_signature[signatureKey] = signaturePad;

            if (clear) {
              document
                .getElementById(clearId)
                ?.addEventListener("click", function () {
                  signaturePad.clear();
                });
            }

            window.addEventListener("resize", function () {
              resizeCanvas(canvas, signaturePad);
            });
          }

          resizeCanvas(canvas, signaturePad);
        }

        if (event === "DOMContentLoaded") {
          document.readyState !== "loading"
            ? initSignature()
            : document.addEventListener("DOMContentLoaded", initSignature, {
                once: true,
              });
        } else {
          document.addEventListener(event, initSignature);
        }
      })();
    
;

      (function () {
        const signatureKey = "advanced";
        const canvasId = "signature-advanced";
        const clearId = "signature-advanced-clear";
        const clear = true;
        const event = "DOMContentLoaded";

        window.tabler_signature ??= {};

        function resizeCanvas(canvas, signaturePad) {
          const ratio = Math.max(window.devicePixelRatio || 1, 1);

          canvas.width = canvas.offsetWidth * ratio;
          canvas.height = canvas.offsetHeight * ratio;
          canvas.getContext("2d").scale(ratio, ratio);
          signaturePad.fromData(signaturePad.toData());
        }

        function initSignature() {
          const canvas = document.getElementById(canvasId);

          if (!canvas) {
            return;
          }

          let signaturePad = window.tabler_signature[signatureKey];

          if (!signaturePad) {
            signaturePad = new SignaturePad(canvas, {
              backgroundColor: "transparent",
              penColor: getComputedStyle(canvas).color,
            });

            window.tabler_signature[signatureKey] = signaturePad;

            if (clear) {
              document
                .getElementById(clearId)
                ?.addEventListener("click", function () {
                  signaturePad.clear();
                });
            }

            window.addEventListener("resize", function () {
              resizeCanvas(canvas, signaturePad);
            });
          }

          resizeCanvas(canvas, signaturePad);
        }

        if (event === "DOMContentLoaded") {
          document.readyState !== "loading"
            ? initSignature()
            : document.addEventListener("DOMContentLoaded", initSignature, {
                once: true,
              });
        } else {
          document.addEventListener(event, initSignature);
        }
      })();
    
;

      (function () {
        const signatureImage =
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA1OTIgMjAwIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjYSkiPgogICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEzMi4wOTIgNzkuMDY1YzAgLjMwNC0uMzU1IDEuNDAzLTEuMDYzIDMuMjk4LS42OTQgMS44OTQtMS4xNDIgMy4wMjItMS4zNDUgMy4zODQtMi4zNDIgMy44NDctNi43NiA3LjE4LTEzLjI1MiAxMC4wMDEtNS4zNjUgMi4yMjctMTMuNDU1IDUuNTktMjQuMjcgMTAuMDg4YTE0OC4xOSAxNDguMTkgMCAwIDAtMTAuMzQ3IDMuMTI0Yy0yLjY5Ljg4Mi02LjU4NiAyLjk1LTExLjY5IDYuMjA0YTE4Ny42NiAxODcuNjYgMCAwIDAtMS4wNjMgMTAuMTk2IDQwNy40OSA0MDcuNDkgMCAwIDEtMS40MzIgMTUuMzM4Yy0uODgyIDEuMTg2LTEuOTg4IDEuNzc5LTMuMzE4IDEuNzc5LjExNSAwIC4xNzMtLjAxNS4xNzMtLjA0NC0uMjAyLS4xMDEtLjg5Ni0uMjgyLTIuMDgyLS41NDJ2LTIuODg1YzAtMi43MDUuMjMxLTUuNDYuNjk0LTguMjY2IDAtLjA1Ny4yNTMtLjc3My43Ni0yLjE0Ny41MDUtMS4zMzEuNzU4LTIuMTQxLjc1OC0yLjQzIDAtMS42MDUtLjI5Ni0zLjI0LS44ODktNC45MDMtLjM5IDEuMTI4LTEuMTEzIDEuODU5LTIuMTY5IDIuMTkxLTEuMjQ0LS43MjMtMS44NjUtMS45ODgtMS44NjUtMy43OTYgMC0uMjAzIDEuMDQ4LTEuNzI5IDMuMTQ1LTQuNTc4IDIuMTQtMi45NjUgMy4zODMtNS4wMDQgMy43My02LjExNy4yNzUtLjgxLjc2Ny0zLjQ1IDEuNDc1LTcuOTE5IDEuMDQxLTYuNjEgMS45Ni0xMS40NCAyLjc1NS0xNC40OTEgMS42OTItNi42MzkgMy42OTQtMTAuODYyIDYuMDA4LTEyLjY3bDIuNDMgMS44MjN2MS44NjVjLTEuNTA1IDEuMTU3LTIuNTY3IDMuMjYyLTMuMTkgNi4zMTMtLjE4Ny45NC0uNjM2IDMuMzQxLTEuMzQ0IDcuMjAzLS4xNDUuNzA4LS43MjMgMi41NDUtMS43MzUgNS41MS0uOTExIDIuNjAzLTEuMzY3IDQuMTg3LTEuMzY3IDQuNzUxdjUuNDI0Yy4yNi4yNDUuNS4zNjguNzE2LjM2OCAxLjIxNSAwIDMuMTA5LS41MDYgNS42ODMtMS41MTggMy4wOC0xLjE1NyA1LjAxNy0xLjg1MSA1LjgxMy0yLjA4MyAxMy4wNzEtMy4zODQgMjMuMTUtNy4yMzggMzAuMjM1LTExLjU2MyA2LjIxOC0zLjc0NiA5Ljk5Mi02LjI5OCAxMS4zMjItNy42NTggMS41NzYtMS41NjIgMi4zNjQtMy42NjYgMi4zNjQtNi4zMTMgMC00LjY3MS0yLjEwNC04LjU2OS02LjMxMi0xMS42OTMtMy44Ni0yLjkwNy04LjE5MS00LjM2LTEyLjk5Mi00LjM2LTMuNzg4IDAtOC4yNzEuNDYyLTEzLjQ0NyAxLjM4OC02LjY2NiAxLjIxNS0xMi45MiAyLjkwNy0xOC43NjIgNS4wNzYtOC44NjQgMy4yODQtMTMuNzM2IDYuODM0LTE0LjYxOCAxMC42NTJsLTEuMDg1LjgwM0M1OC44MzkgNzguNDIyIDU4IDc3LjA2MiA1OCA3NS43OWMwLTEuODA4IDEuODgtNC4wMTQgNS42NC02LjYxNyAzLjA4LTIuMTQgNS44Mi0zLjU2NSA4LjIyLTQuMjc0IDE1Ljk0OS00LjkxNyAyNy44NjQtNy4zNzYgMzUuNzQ0LTcuMzc2IDcuNDYxIDAgMTMuNDEyIDEuOTUzIDE3Ljg1MSA1Ljg1NyA0LjQyNCAzLjg2MiA2LjYzNyA5LjA5IDYuNjM3IDE1LjY4NVptMzIuMjk1IDU1LjQwN3YxLjkwOWMtLjU5Mi44MjQtMS4yNDMgMS4yMzYtMS45NTIgMS4yMzYtLjQ0OCAwLTEuOTczLTEuMzU5LTQuNTc2LTQuMDc4LTIuNjAzLTIuNzMzLTQuMzM4LTQuMS01LjIwNi00LjEgMCAuMDU4LTMuMDggMS4yNDQtOS4yMzkgMy41NTgtNi4zMDUgMi4zNDMtMTAuMzE3IDMuNTE0LTEyLjAzOCAzLjUxNC0xLjQxNyAwLTIuOTg2LS42OTQtNC43MDctMi4wODMtMS43Mi0xLjM3NC0yLjU4MS0yLjY2OC0yLjU4MS0zLjg4MyAwLTMuMTM4IDMuNDM0LTYuNzk3IDEwLjMwMy0xMC45NzcgNi40MzQtMy45NjMgMTEuMzQzLTUuOTQ0IDE0LjcyNy01Ljk0NCAxLjQxNyAwIDIuNjkuODEgMy44MTcgMi40M3YxLjgyMmMtLjU2NC44MS0xLjIxNCAxLjIxNS0xLjk1MiAxLjIxNS0uMTMgMC0uNjE0LS4xODEtMS40NTMtLjU0My0uODM5LS4zNzYtMS4zMzctLjU2NC0xLjQ5Ni0uNTY0LTEuMTI4IDAtMy43MTcgMS4xNjUtNy43NjUgMy40OTMtMy44MzIgMi4xNjktNi4zOTkgMy43ODktNy43IDQuODYtMS4zMDIgMS4xMjgtMi4xMzMgMi40MTUtMi40OTQgMy44NjEuOTgzLjkyNiAyLjE1NCAxLjM4OCAzLjUxMyAxLjM4OC43MDkgMCA0LjEwNy0xLjE3MSAxMC4xOTQtMy41MTQgNi4wNzMtMi4zNzIgOS43NDYtMy41NTggMTEuMDE5LTMuNTU4IDEuODY1IDAgMy4yMS40NyA0LjAzNCAxLjQxLjE4OC4yMTcuOTA0IDEuNDkgMi4xNDcgMy44MThhMjEuOTAyIDIxLjkwMiAwIDAgMCAzLjQwNSA0LjczWm02OS44ODQtMTkuNzQydjEuOTUzYy0yLjk5MyAyLjQ1OC01Ljg5OSA1LjIxMy04LjcxOSA4LjI2NS04Ljc2MiA5LjQ1OS0xNC42NjIgMTQuMTg4LTE3LjY5OSAxNC4xODgtMi40NTggMC01LjE5OC0yLjIyLTguMjItNi42NmwtNi41MjgtOS42NTRjLTEuMjQ0LjIwMy0zLjQ5MiAyLjQ2Ni02Ljc0NiA2Ljc5LTMuMDUxIDQuMTIyLTUuODQyIDYuMTgzLTguMzcyIDYuMTgzbC0xLjE5My0uNjI5Yy0uODgyLTEuNjItMi41MzgtNS4xNy00Ljk2Ny0xMC42NTItMi42NDYtNS45MjktMy45NjktOS4zMDYtMy45NjktMTAuMTMxIDAtMS40MzIuODQ2LTIuNjE4IDIuNTM4LTMuNTU4IDEuNjkxIDIuMDQgMy4zNTQgNC44NjcgNC45ODggOC40ODMgMi40NTggNS4zMzYgMy44NzUgOC4zMyA0LjI1MSA4Ljk4MWgyLjA2MWMuNTY0LTEuMDQxIDEuODk0LTIuNjU0IDMuOTkxLTQuODM4LjczNy0xLjEyOCAxLjgyMi0yLjY5IDMuMjUzLTQuNjg2IDEuNjc3LTIuMzcyIDMuMDk1LTMuNTU3IDQuMjUxLTMuNTU3IDEuMDcgMCAxLjk3NC41OTIgMi43MTEgMS43NzggMS4wNzEgMS42OTMgMi45ODYgNC43MyA1Ljc0OCA5LjExMiAzLjA1MSA0Ljc0NCA1LjMgNy4xMTYgNi43NDYgNy4xMTYgMS4wNyAwIDUuMDgyLTMuMDgxIDEyLjAzNy05LjI0MiA2Ljk3LTYuMTYxIDEwLjc5NS05LjI0MiAxMS40NzQtOS4yNDJoMi4zNjRabTQ0LjU3MyAxOS41MjVjLTEuMDQyIDEuMjQ0LTIuNDAxIDEuODY2LTQuMDc4IDEuODY2aC0xNC45ODhjLTMuNDcgMC03LjMzOC0uNTIxLTExLjYwNC0xLjU2Mi01LjU5NS0xLjM2LTguNzYyLTMuMDY3LTkuNS01LjEyLS44MDktMi4zMTQtMS4yMTQtNC41MzQtMS4yMTQtNi42NiAwLTQuMjY3IDEuODM2LTcuNTQzIDUuNTA5LTkuODI4IDMuMDk0LTEuOTgxIDYuODc2LTIuOTcyIDExLjM0NC0yLjk3MiAzLjg0NiAwIDYuODk3LjgzMiA5LjE1MyAyLjQ5NSAyLjI1NSAxLjY0OSAzLjM4MyAzLjg5OCAzLjM4MyA2Ljc0NyAwIDEuNTkxLTIuNzExIDMuMzI2LTguMTMzIDUuMjA2LTQuNDgzIDEuNjItNy43NDQgMi40My05Ljc4MiAyLjQzYTQuNDkgNC40OSAwIDAgMS0uNjczLS4wNDNjMCAuMzktLjMxMS44NjgtLjkzMiAxLjQzMi4zMzIuNTY0IDEuOTgxIDEuMjE0IDQuOTQ1IDEuOTUyIDIuNjYuNjggNC41NTUgMS4wMiA1LjY4MiAxLjAyaDEzLjQ3YzAgLjAyOSAxLjY5OS4yODIgNS4wOTcuNzU5IDEuMDcuNjggMS44NDMgMS40MzkgMi4zMjEgMi4yNzhabS0xNy40NjEtMTYuOWMtMS41NzYtMS42MDUtNC4xMTMtMi40MDgtNy42MTMtMi40MDgtMi40NTggMC00LjczNS40NzctNi44MzIgMS40MzItMi43MDQgMS4yNDQtNC4wNTYgMi45MjktNC4wNTYgNS4wNTUgMCAuNzUyLjI1MyAxLjI4Ny43NTkgMS42MDVoMi43MTFjLjk1NSAwIDMuNTUtLjgwMyA3Ljc4Ny0yLjQwOCA0LjIzNy0xLjYyIDYuNjUyLTIuNzEyIDcuMjQ0LTMuMjc2Wm0zMi40OTEtNTMuMzAyLTIuNDA3IDUzLjU2M2MtLjE0NS4xMTUtLjIxNy40NTUtLjIxNyAxLjAxOSAwIC41NjQuMDcyIDEuMzM4LjIxNyAyLjMyMS4zMDQgMi42NjIgMS4wNDEgNy42OTUgMi4yMTIgMTUuMDk5LS4wNTguMjQ2LS41NDIuNTI4LTEuNDUzLjg0N2EyLjkyIDIuOTIgMCAwIDEtLjQ1NS4wNDNjLTIuOTY1IDAtNC44ODgtMy40MjEtNS43Ny0xMC4yNjEtLjAyOS0uMTQ1LS4wNDMtLjQyNy0uMDQzLS44NDYgMC0xLjMzMS4wNzItNC4wNTcuMjE3LTguMTc5LjIwMi01LjMwOC40NDEtMTAuODYyLjcxNS0xNi42NjEuMDg3LTIuMTk4LjQxMi02LjI5MS45NzYtMTIuMjc5LjUzNS01LjQ4MS44MDMtOS41NTIuODAzLTEyLjIxNCAwLTguMDk5LjUzNS0xMy43NiAxLjYwNS0xNi45ODZsLjY1MS0uMDQzaC4xOTVjLjk2OSAwIDEuNjE5LjUzNSAxLjk1MiAxLjYwNS4yNi43MDkuNTI4IDEuNy44MDIgMi45NzJabTExNC4yMTggNjguMTg0Yy0uNjggMS4zMDItMS41MTEgMS45NTMtMi40OTQgMS45NTMtLjQ5MiAwLTEuNjQyLS4zNjktMy40NDktMS4xMDctMi4xNjktLjg4Mi0zLjQzNC0xLjM4MS0zLjc5Ni0xLjQ5Ny0xLjU5LS4zOS0zLjk3Ni0uNzM3LTcuMTU3LTEuMDQxLTMuODQ3LS4zNzYtNi4yMzItLjY4Ny03LjE1OC0uOTMzLTQuNDk3LTEuMTEzLTEwLjAyLTIuNC0xNi41NzEtMy44NjEtMy4wOC0uNjgtNy4wMi0yLjMyMS0xMS44MjEtNC45MjUtNS44Ny0zLjE4Mi04LjgwNi01LjgwNy04LjgwNi03Ljg3NSAwLS40MTkgMy42OC0zLjgxMSAxMS4wNC0xMC4xNzQgOC4wMjYtNi45MTMgMTIuMjc3LTEwLjYwOSAxMi43NTQtMTEuMDg2LjQ2My0uNzA5IDEuMi0xLjcxNCAyLjIxMi0zLjAxNS4yNzUtLjI2IDIuNTc0LTIuMzY1IDYuODk4LTYuMzEzIDMuNDg0LTMuMTk3IDYuMzY5LTUuNzEzIDguNjU0LTcuNTUgMy41NTctMi44NzggNi43MTYtNC45NjggOS40NzgtNi4yNy40MDUuMzc3Ljg0Ni41ODYgMS4zMjMuNjN2My4xMDJsLS4zOS4yMTdhNTkuMDEgNTkuMDEgMCAwIDAtNi4zMTIgNC40NDdjLTYuOTEyIDUuNjI2LTE5LjczIDE3LjgwNC0zOC40NTYgMzYuNTMzIDUuNTM4IDMuOTQ4IDEzLjE3MyA2Ljg4NCAyMi45MDUgOC44MDggMS4wMjYuMTg4IDcuMTg2IDEuNzI4IDE4LjQ3OSA0LjYyMSAxLjM4OC4zMzIgNC4wNDIuOTc2IDcuOTYgMS45My4yODkuMDg3IDEuODU4IDEuMjIyIDQuNzA3IDMuNDA2Wm0tNTguNTQtNTMuMzQ1LTYuNjU5IDU3LjIyOWMtLjQ0OC40NjItMS4yNjUuNjk0LTIuNDUxLjY5NC0yLjAxIDAtMy4wMTUtLjcyMy0zLjAxNS0yLjE3IDAtLjU2NC40NDEtNC4yODEgMS4zMjMtMTEuMTUuMzYyLTIuNTYgMS40NDYtOS45NzIgMy4yNTQtMjIuMjM3LjMxOC0yLjUxNi45MTEtNy4wMjEgMS43NzgtMTMuNTE1LjczOC01LjEyIDEuOC05LjUxIDMuMTg5LTEzLjE2OCAxLjc0OS4zNjEgMi42MjQgMS41MTggMi42MjQgMy40NyAwIC4zMDQtLjAxNC41ODYtLjA0My44NDdabTk5LjQyNSAzMy43MTJjMCAxLjE4Ni0yLjE0NyA0LjE1OC02LjQ0MiA4LjkxNi0zLjc4OCA0LjE4LTYuNjAxIDYuOTQzLTguNDM3IDguMjg4LS45MjYuNjc5LTIuOTE0IDIuMTU1LTUuOTY1IDQuNDI1LTEuMjcyLjg5Ny0zLjIyNCAxLjc4Ni01Ljg1NiAyLjY2OS0yLjY3NS44NjctNC43NzkgMS4zMDEtNi4zMTIgMS4zMDEtMi44NzcgMC01LjI2My0xLjg1MS03LjE1Ny01LjU1NC0xLjU0OC0zLjAyMi0yLjMyMS02LjE2OC0yLjMyMS05LjQzNiAwLTIuNzE5LjU2NC01LjUwMyAxLjY5Mi04LjM1My40MTkgMCAuODUzLS4xOTUgMS4zMDEtLjU4NS41MzUuMzAzIDEuMjcyLjg5NiAyLjIxMiAxLjc3OS0uMjg5IDIuMjI3LS40MzMgNC4xNzItLjQzMyA1LjgzNSAwIDYuODQxIDIuMjE5IDEwLjI2MiA2LjY1OCAxMC4yNjIgNC4yOTUgMCA5LjQ1LTIuNjY5IDE1LjQ2NS04LjAwNi45NTQtLjg1MyA1LjQ3My01LjA3NiAxMy41NTYtMTIuNjY5aC42NzJjLjkxMSAwIDEuMzY3LjM3NiAxLjM2NyAxLjEyOFptMzguNDEyIDEuMDJjMCAuNTkzLS4yOTYgMy45Ny0uODg5IDEwLjEzMWE3MjIuMzI4IDcyMi4zMjggMCAwIDEtMS44NjUgMTYuNzA0Yy0uMDU4LjQ0OS0uNTA3LjY3My0xLjM0NS42NzMtMS4wOTkgMC0yLjAwMy0xLjM4OS0yLjcxMS00LjE2NS0uNTM1LTIuMTEyLS44MDMtMy45ODUtLjgwMy01LjYxOSAwLS42MjIuMzU0LTIuODU3IDEuMDYzLTYuNzA0LjcyMy0zLjgzMiAxLjA4NC02LjA1MiAxLjA4NC02LjY2IDAtMS42NjMtLjQ0OC0yLjQ5NC0xLjM0NC0yLjQ5NC0xLjE1NyAwLTMuNjMgMS4wMDUtNy40MTggMy4wMTUtMy4yODMgMS43NS01LjY2OSAzLjE3NS03LjE1OCA0LjI3NC0yLjg0OCAyLjA5Ny02LjA4IDUuMjUtOS42OTUgOS40NTgtLjU5My42OC0xLjc1NyAxLjk3NC0zLjQ5MiAzLjg4NC0uNjY1LjcwOC0yLjAwMyAxLjA3Ny00LjAxMyAxLjEwNnYtMi44NDJjMC0xLjMxNiAyLjU5Ni00LjIzOCA3Ljc4Ny04Ljc2NGExMTMuMjg2IDExMy4yODYgMCAwIDEgMTMuMDU3LTkuODI4YzYuMzc3LTQuMTUxIDExLjEyLTYuMjI2IDE0LjIyOC02LjIyNi44MjUgMCAxLjYxMy40NDggMi4zNjUgMS4zNDUuNzY2LjkxMSAxLjE0OSAxLjgxNSAxLjE0OSAyLjcxMlpNNTM0IDEzNC40NzJ2MS45MDljLS41OTMuODI0LTEuMjQzIDEuMjM2LTEuOTUyIDEuMjM2LS40NDggMC0xLjk3NC0xLjM1OS00LjU3Ny00LjA3OC0yLjYwMi0yLjczMy00LjMzNy00LjEtNS4yMDUtNC4xIDAgLjA1OC0zLjA4IDEuMjQ0LTkuMjQgMy41NTgtNi4zMDQgMi4zNDMtMTAuMzE3IDMuNTE0LTEyLjAzOCAzLjUxNC0xLjQxNyAwLTIuOTg1LS42OTQtNC43MDYtMi4wODMtMS43MjEtMS4zNzQtMi41ODEtMi42NjgtMi41ODEtMy44ODMgMC0zLjEzOCAzLjQzNC02Ljc5NyAxMC4zMDItMTAuOTc3IDYuNDM1LTMuOTYzIDExLjM0NC01Ljk0NCAxNC43MjgtNS45NDQgMS40MTcgMCAyLjY4OS44MSAzLjgxNyAyLjQzdjEuODIyYy0uNTY0LjgxLTEuMjE1IDEuMjE1LTEuOTUyIDEuMjE1LS4xMyAwLS42MTUtLjE4MS0xLjQ1My0uNTQzLS44MzktLjM3Ni0xLjMzOC0uNTY0LTEuNDk3LS41NjQtMS4xMjggMC0zLjcxNiAxLjE2NS03Ljc2NSAzLjQ5My0zLjgzMiAyLjE2OS02LjM5OCAzLjc4OS03LjcgNC44Ni0xLjMwMSAxLjEyOC0yLjEzMiAyLjQxNS0yLjQ5NCAzLjg2MS45ODMuOTI2IDIuMTU1IDEuMzg4IDMuNTE0IDEuMzg4LjcwOCAwIDQuMTA2LTEuMTcxIDEwLjE5NC0zLjUxNCA2LjA3My0yLjM3MiA5Ljc0Ni0zLjU1OCAxMS4wMTgtMy41NTggMS44NjYgMCAzLjIxLjQ3IDQuMDM1IDEuNDEuMTg3LjIxNy45MDMgMS40OSAyLjE0NyAzLjgxOGEyMS45MDIgMjEuOTAyIDAgMCAwIDMuNDA1IDQuNzNaIi8+CiAgPC9nPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJhIj4KICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTU4IDQ5aDQ3NnYxMDJINTh6Ii8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+";

        function download(dataURL, filename) {
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = dataURL;
          a.download = filename;

          document.body.appendChild(a);
          a.click();
          a.remove();
        }

        function initSignatureDemo() {
          const signatures = window.tabler_signature ?? {};

          signatures.default?.fromDataURL(signatureImage);

          const advanced = signatures.advanced;

          if (!advanced) {
            return;
          }

          document
            .getElementById("signature-advanced-color")
            ?.addEventListener("input", function (e) {
              advanced.penColor = e.target.value;
            });

          document
            .getElementById("signature-advanced-svg")
            ?.addEventListener("click", function () {
              download(advanced.toDataURL("image/svg+xml"), "signature.svg");
            });

          document
            .getElementById("signature-advanced-png")
            ?.addEventListener("click", function () {
              download(advanced.toDataURL(), "signature.png");
            });
        }

        document.readyState !== "loading"
          ? initSignatureDemo()
          : document.addEventListener("DOMContentLoaded", initSignatureDemo, {
              once: true,
            });
      })();
    
;

      (function () {
        const signatureKey = "modal";
        const canvasId = "signature-modal";
        const clearId = "signature-modal-clear";
        const clear = true;
        const event = "shown.bs.modal";

        window.tabler_signature ??= {};

        function resizeCanvas(canvas, signaturePad) {
          const ratio = Math.max(window.devicePixelRatio || 1, 1);

          canvas.width = canvas.offsetWidth * ratio;
          canvas.height = canvas.offsetHeight * ratio;
          canvas.getContext("2d").scale(ratio, ratio);
          signaturePad.fromData(signaturePad.toData());
        }

        function initSignature() {
          const canvas = document.getElementById(canvasId);

          if (!canvas) {
            return;
          }

          let signaturePad = window.tabler_signature[signatureKey];

          if (!signaturePad) {
            signaturePad = new SignaturePad(canvas, {
              backgroundColor: "transparent",
              penColor: getComputedStyle(canvas).color,
            });

            window.tabler_signature[signatureKey] = signaturePad;

            if (clear) {
              document
                .getElementById(clearId)
                ?.addEventListener("click", function () {
                  signaturePad.clear();
                });
            }

            window.addEventListener("resize", function () {
              resizeCanvas(canvas, signaturePad);
            });
          }

          resizeCanvas(canvas, signaturePad);
        }

        if (event === "DOMContentLoaded") {
          document.readyState !== "loading"
            ? initSignature()
            : document.addEventListener("DOMContentLoaded", initSignature, {
                once: true,
              });
        } else {
          document.addEventListener(event, initSignature);
        }
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
    