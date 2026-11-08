// Tabler Icons · MIT · Paweł Kuna
// Full unmodified icons.json/info.json and license are in the source ZIP.
// Browse this collection, select an icon, then select its SVG source.
// This example uses a trusted bundled vector, not arbitrary user HTML.
export const iconName = "a-b";
export const svgSource = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 16v-5.5a2.5 2.5 0 0 1 5 0V16m0-4H3m9-6v12m4-2V8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3\"/></svg>";
export function mountIcon(container, size = 24) {
  const parsed = new DOMParser().parseFromString(svgSource, "image/svg+xml");
  const svg = document.importNode(parsed.documentElement, true);
  svg.setAttribute("width", String(size));
  svg.setAttribute("height", String(size));
  container.replaceChildren(svg);
}
