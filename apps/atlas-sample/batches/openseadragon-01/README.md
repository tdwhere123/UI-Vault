# OpenSeadragon · 单图空间阅读

一个 UI 家族，不按图中 20 个研究标记计数。原版 OpenSeadragon 6.1.1 Viewer / HTMLDrawer / Navigator / Button / MouseTracker / Viewport，在离线原创 SVG 样例上运行。不是上游完整成品页面：标题、配色、研究图、三个按钮图像属于本次原创宿主与素材替换；原控制位置、缩放/平移/回到全图、导航小地图使用上游实现。

拖动/滚轮/双击或左上按钮控制视角，右上 Navigator 显示定位框。没有文件导入、外链、服务器或全文检索。不宣称多级瓦片、高分辨率照片或已验实际像素。

固定源：https://github.com/openseadragon/openseadragon/tree/201d47833e3f10e9fa55159cd4203630521926b8
npm openseadragon 6.1.1，包内构建头同 gitHead。官方固定 SHA LICENSE.txt 与发布包逐字相同。源文件和原 source map、npm integrity、补丁与测试保存在本地，没有伪称源码 ZIP 已公开。

[原 BSD-3-Clause](LICENSE.txt) / [完整运行许可与归属](THIRD-PARTY-NOTICES.txt)

原库包含 jQuery 片段 MIT (John Resig)、Matt Snider MIT 与 Gregg Tavares BSD-3-Clause，全条款保留。无额外运行 npm 依赖。

## 安全与修改
- 单幅 percent-encoded 纯文本原创 SVG，useCanvas:false/buildPyramid:false；HTML drawer 主图与 Navigator 真运行。未包装 PNG、字体或其他二进制。PNG 原按钮由官方 navImages 配置替换，fullpage/旋转/翻转/序列入口不启用。
- 默认 CSP 不变。没有网络 URL 输入/凭据/后端/剪贴板/持久化/媒体权限。上游通用网络功能仍存在代码内，但宿主只提供本地受控 image 对象，无入口激活远程源。
- 原 Button fading 延迟计时器/RAF 未在 destroy 清理，最小源码补丁为按钮记录 timer Set 和 frame，并在 destroy 停止与清理。没有重写视角或图像渲染算法。
- 主 Viewer 及 Navigator 禁止自动隐藏 controls，避免原 auto-hide 延迟工作在退出后遗留。pagehide 立即 destroy，移除监听并清空宿主，重复销毁无副作用。

## 验证边界
四分支 normal/error/pending/production 通过。实际原 Viewport、ImageTileSource、主 HTMLDrawer 与 Navigator 图像 DOM、原 Button click、缩放上下约束、pan/home、重复操作、动画中退出、加载未完退出、错误状态运行；最终全局 timeout/RAF 0，fetch/XHR/Worker 调用 0。production 分支读取最终 runtime.js。

JSDOM 的 Image 成功/失败与 2400×1600 尺寸、DOM 几何为 mock。没有真实 SVG 解码/指针拖拽几何/触屏/浏览器像素验收，也不将这些测试说成可视验收。宿主文案明确加载失败，不用静态截图冒充成功。
