// Octicons · MIT · GitHub
// Full unmodified icons.json/info.json and license are in the source ZIP.
// Browse this collection, select an icon, then select its SVG source.
// This example uses a trusted bundled vector, not arbitrary user HTML.
export const iconName = "accessibility-16";
export const svgSource = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M9.923 5.302q.094.095.178.198H14A.75.75 0 0 1 14 7h-3.3l.578 5.163l.362 2.997a.75.75 0 0 1-1.49.18L9.868 13H6.132l-.282 2.34a.75.75 0 0 1-1.49-.18l.362-2.997L5.3 7H2a.75.75 0 0 1 0-1.5h3.9a3 3 0 0 1 .176-.198a3 3 0 1 1 3.847 0M9.2 7.073a1.206 1.206 0 0 0-2.398 0L6.305 11.5h3.39ZM9.5 3a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 3\"/></svg>";
export function mountIcon(container, size = 24) {
  const parsed = new DOMParser().parseFromString(svgSource, "image/svg+xml");
  const svg = document.importNode(parsed.documentElement, true);
  svg.setAttribute("width", String(size));
  svg.setAttribute("height", String(size));
  container.replaceChildren(svg);
}
