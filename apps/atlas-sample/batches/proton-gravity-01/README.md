# 十六引力井轨迹

原 Proton 完整 linebug 场景；按住并拖动改变吸引点，释放停止吸引。减少动态时仅绘制原场景一帧。

Original emitter,16 GravityWell ring,central Repulsion,300 particles,colors and CustomRenderer drawing retained; built fixed ES modules,not redrawn particle substitute.

Stats FPS overlay and legacy rAF polyfill omitted; native rAF used. Original mousedown/layer coordinates normalized to pointer events and bounding rectangle; pointercancel/window-up/blur release included.

Hidden/zero-size pause,reduced motion single original frame,early/late failure and exit destroy(false) cleanup;canvas bounded1800x1200. Resize preserves original fixed force-center geometry behavior,not an adaptive reinterpretation.

JSDOM Canvas2D command recording proves actual engine300 particle draws and lifecycle,not native color blending or pixel acceptance. No media/fonts/network/backend.

Integration Euler math cites RosettaCode as algorithm reference; unchanged original module retains that comment. EventDispatcher CreateJS reference supplemental notice included.