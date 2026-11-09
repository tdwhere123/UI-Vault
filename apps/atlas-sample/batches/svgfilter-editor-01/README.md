# SVG Filter Editor · original local workspace

Fixed poletaevvlad/svg-filter-editor@ecc2a0ce171680da51dad0276dbcfa5c6d04fc30. Existing ID svgfilter:node-material-editor. Complete original application, no backend shell.

- Controlled JSDOM geometry only; no native SVG filter raster/performance, actual pointer accuracy or pixel QA.
- Original complete node/filter editor retained with original primitives, connection engine, parameter controls, shape/background/color editors and SVG code view. Authored initial SourceGraphic → GaussianBlur → Output chain is not an upstream preset.
- Original CJS/ES import mixing converted to equivalent ESM exports; unused babel-polyfill generatorRuntime import removed, native generators retained. Original algorithms otherwise unchanged except bounded local input/node safeguards.
- Original Less/SVG icon assets compiled to ordinary percent-encoded UTF8 SVG CSS resources; no binary images/screenshots. External Google fonts omitted for system fallback.
- Image primitive remains available but only local fragment references reach feImage; no remote media fetching, uploads, file export, cloud or storage. External About links nonnavigating.
- Inputs bounded to 64 nodes, integer parameters ±32, floating parameters ±1000. Reaching node cap fails clearly and requires reopen; no claim arbitrary-scale production authoring.
- Hidden releases focus/drag through original blur handling but retains editable graph/state; no continuous application animation. Explicit disposal unmounts React and removes all iframe listeners/timers/RAF; old nodes cannot restart work.

13 positive-emitted runtime package roots; all actual license texts retained, MIT and material-colors ISC. Exact direct versions match original lock; transitive versions pinned in adaptation lock and identified individually.
