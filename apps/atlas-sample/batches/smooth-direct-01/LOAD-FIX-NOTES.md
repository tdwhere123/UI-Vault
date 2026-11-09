# Pixel Brush 指针与上下文修复

只修改原 Pixel Brush 组件，原像素算法/工具/键盘行为保持。缺失 2D 上下文时显示错误并停止绘画；统一单活动指针捕获，处理 cancel/lostcapture/blur/隐藏/卸载；重复 up 不再提交，拒绝非有限坐标及零尺寸画布。完整源差异见 `PIXEL-BRUSH-FIX.diff`。

使用原锁定依赖复建，修改前原样复建与旧 runtime 逐字一致；没有新增或升级依赖。共享运行文件的其它五个组件源码、所有 HTML/CSS 均未改。
旧 runtime SHA256：80c05a741bcb1c1edab67a1969bb0d2fcc54c1760dcf0b8b618847a2b6cbb6eb。
新 runtime SHA256：d38588a3f60c4a9e194c543e3bd68069f1dd24e4cce24389c60128f76024a09a。

JSDOM 事件/状态及 Canvas 命令替身测试通过，覆盖正常与 null 上下文、线/矩形、取消、重复结束、多指针隔离和同批六组件。尚未完成原生 PointerCapture 路由或 Canvas 光栅验收；未证实历史 0 painted pixels 的具体原因，不以此声明线上视觉故障全部解决。
