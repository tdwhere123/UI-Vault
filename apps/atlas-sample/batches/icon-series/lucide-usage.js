// Lucide · ISC + MIT (Feather-derived icons) · Lucide Contributors
// Full unmodified icons.json/info.json and license are in the source ZIP.
// Browse this collection, select an icon, then select its SVG source.
// This example uses a trusted bundled vector, not arbitrary user HTML.
export const iconName = "a-arrow-down";
export const svgSource = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m14 12l4 4l4-4m-4 4V7M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m-7.696-3h6.392\"/></svg>";
export function mountIcon(container, size = 24) {
  const parsed = new DOMParser().parseFromString(svgSource, "image/svg+xml");
  const svg = document.importNode(parsed.documentElement, true);
  svg.setAttribute("width", String(size));
  svg.setAttribute("height", String(size));
  container.replaceChildren(svg);
}
