# AI Canvas · Stack Tower

Existing candidate aicanvas:stack-tower, not a new count or 12 separate variants.
Fixed original: https://github.com/aicanvas-me/aicanvas/tree/8164f1e423e4e654dd0828a941ba5cdda69f08fe/components-workspace/stack-tower

The upstream root README explicitly defines components-workspace as free components and licenses the free library MIT. This exact component is in that path. Full upstream LICENSE and complete actual bundle dependency license texts are included. No premium/root injection/hooks or package lifecycle scripts ran.

Retains original 12 alternating STACK / TOWER layers, sinusoidal phase offsets, scale/skew/translation formula, local-pull hover expansion/easing, color interpolation, original theme palettes/fade masks and system typography. This is a kinetic visual reference, not a task/navigation/AI status feature. No remote images, fonts, characters, binary assets or media substitutions are required.

Local adaptations: standalone header/controls and CSS utilities; first render paused, explicit Resume motion. Replace unconditional useAnimationFrame callback with cancellable RAF effect using the original advance math. Pause and document hidden cancel scheduling; resume resets previous timestamp to avoid a hidden-time jump. System reduced-motion keeps original static phase arrangement and does not start a loop even on Resume. Hover/focus can emphasize a row while paused/reduced; focus/blur are keyboard equivalents. Stop & clear unmounts all phases/observers; restart remounts fresh state. Pagehide unmounts React root. Original theme MutationObservers and media-query listeners retain their cleanup. No network, persistence or eval.

Verification: production IIFE parse/build; real delivered React/Motion runtime inserted in opaque-origin JSDOM, no window.eval. Actual transform strings change during playback and focus interaction. Checks cover 12 layers, initially paused, focus/blur emphasis, play/pause, hidden hold/visible resume, stop/unmount/restart, pagehide cleanup, no errors/fetch. Repeated with reduced-motion=true verifies playback remains static while keyboard emphasis still works. This is DOM/numeric evidence, NOT browser visual acceptance; actual pixels, touch, frame smoothness and complete accessibility remain UNVERIFIED. Explicit HTML head supports host CSP injection.
