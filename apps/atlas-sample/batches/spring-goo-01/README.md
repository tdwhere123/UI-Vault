# React Spring · 弹簧融合液团

原版官方 `goo-blobs`，一个视觉机制，不按三个液团计数。适合 Exodus 的指针跟随/装饰反馈，不是真实流体求解、任务执行进度或声音输入。

固定来源：https://github.com/pmndrs/react-spring/tree/eb09c7914721c2e5957c4bc817d7abddf317576c/demo/src/sandboxes/goo-blobs

原 App / CSS / LICENSE 已与固定 SHA 官方 raw 对照。旧 ZIP 文件比官方多末尾换行，保留两份，不假称字节完全一致。[原 MIT](LICENSE.txt) 和 [11 个实际运行包完整许可证](THIRD-PARTY-NOTICES.txt)。原 `@react-spring/web:*` 锁定 9.7.5，React 18.3.1 / react-use-measure 2.1.1 与源 demo 相同；精确包及原件哈希见 [SOURCE-EVIDENCE.json](SOURCE-EVIDENCE.json)。源码/测试/lock 本地保存，没有公开 ZIP 下载声明。

## 原作与适配
保留原 useTrail(3)、首段 tension1200/friction40、后段 mass10/tension200/friction50 的跟随关系、xy transform、60/125/75px 圆形、lightcoral/半透明/高光、SVG blur30 与原 alpha 矩阵 `...30 -7`。原 CSS 材质并非重新仿画。

新增暖色宿主/标题/暂停恢复、将初始位置按实际容器宽高居中，resize 时先停止弹簧再立即重置至新中心；画布高度420px、正常文档流置于标题后、relative容器、touch-action:none。原 onMouseMove 改为 PointerMove 接纳指针/触控，坐标仍由原 useMeasure 计算。PointerLeave/Cancel/TouchCancel、blur、hidden 时 stop(true) 并暂停，需按钮恢复。减少动态模式保留静态形状，禁用恢复，不持续 RAF。pagehide unmount 后原弹簧/测量 observer 与宿主 listeners 全清理。

## 去重依据
已检查 502 的全部 241 catalog 与 348 candidate。未收录 goo-blobs。相近源码：Animata gooey-tabs 使用 SVG goo 但服务于标签选择与 motion 位置状态；Bencho particles 是多个粒子受指针排斥后回家，不是三级串联 useTrail；Kokonut liquid-slider 是有数值含义的液面/速度弹簧。这里公开承认共享“goo/弹簧”技法，但保留原三质量追随与融合材质，不宣称首创技术或全新任务功能。

## 验证边界
normal/reduced/narrow/production 分支：真实 React Spring controller/原三段参数与滞后差异、DOM transform、原滤镜参数、暂停后指针不更新、反复恢复/blur、pointer cancel/out、hidden、动画中退出、重复退出。320px reduced 初始中心 x160、缩至280px后 x140，均为静态且不留 RAF。最终 RAF/ResizeObserver/媒体监听全部 0，无 fetch/XHR/Worker。生产测试读取发布 runtime.js，无测试 API。

JSDOM 仅替代几何、ResizeObserver 和 matchMedia；未验证真实浏览器 SVG 像素合成、滤镜边界、原生触控/PointerCapture 或手机布局。不能把状态测试视作视觉验收。画布离开后暂停是明确的安全适配，不宣称原作自带。
