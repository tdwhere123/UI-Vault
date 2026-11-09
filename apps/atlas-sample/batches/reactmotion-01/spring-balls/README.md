# ReactMotion · 原版弹簧重排

Original demo2 11-ball grid, colors, reinsertion logic and original ReactMotion spring solver preserved. Babel only strips Flow. React 16.14 compatibility runtime. Host adds reset, blur/touchcancel release, unmount cleanup, snapshot order preservation while hidden, immediate numeric targets for reduced motion, caught render/host/module-initialization failures; iframe-owned scheduler timeout cancellation on all exits including early module failure. No keyboard reorder is claimed. DOM mouse events use original handlers; controlled RAF timestamps are not native touch or pixel trajectory verification.

Source: https://github.com/chenglou/react-motion/tree/9e3ce95bacaa9a1b259f969870a21c727232cc68

No network, backend, clipboard, binary assets, worker, or new CSP permissions. Original engine plus documented host adaptations, not a replacement reimplementation. Browser pixel QA not run. atlas:dispose/pagehide permanently cleans the preview. See SOURCE-EVIDENCE.json and NOTICES.txt for fixed provenance and full licenses.
