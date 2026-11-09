# iro.js 多柄色轮：实际原源码离线适配

旧 ID `iro:multi-handle-color-wheel`，一族，非按四方向色轮/颜色/通道计数。
固定 jaames/iro.js@9f0ae6c8dc22fd819885731966357f06fa0b4943（5.5.2），原 demo/demo.js 的整个选项对象与布局保留：RGB 三色柄、四个方向/角度色轮、Box、通道滑杆及水平滑杆。原图形、HSV/alpha/Kelvin 运算和鼠标/触摸取值实现不重画。原 demo 仅裸 div，宿主标题、说明、CSS 网格排布、颜色文字/按钮和焦点可见样式为原创；去除原 console 记录，无媒体替换或模型调用。同步色轮代表同一组三色，不是智能生成配色。

## 完整来源与公开源码义务
根 MPL-2.0 完整文本 LICENSE.txt；受覆盖的实际首选源码公开在 `public-source/src/upstream/*`，不是本地 ZIP 或只提供仓库链接。iro-core 1.2.1 npm 官方 source map 的七个 sourcesContent 原文也逐字公开在 `public-source/src/core/*`，本地 index.ts 仅聚合导出。构建直接编译这些 TS/TSX，而非附不对应源码再运行另一个版本。SOURCE-EVIDENCE.json 保存版本/源码 hash/实际依赖图；完整 MIT 和 MPL 依赖文本见 THIRD-PARTY-NOTICES.txt。

两处 iro MPL 源级修改记录于 public-source/ADAPTATION.diff：
1. createWidget 加真实 Preact unmount/destroy、可取消 DOMContentLoaded、可销毁容器、渲染 ErrorBoundary，并让异常后停止而非重试。
2. ComponentWrapper 保留原 handleEvent 取值算法，改为 componentDidMount 绑定稳定原生监听，卸载移除起始/全局拖动监听，disposed 守卫使旧节点无效；补 touchcancel 安全结束。没有更改色轮/Box/Slider几何算法。
原 demo 事件仅打印 console，移除并由宿主实时文本同步替代。外壳 host.ts/CSS/HTML 与本地聚合文件为 UI-Vault 2026 原创，按 MIT 提供（同附 MIT 条款）；MPL 覆盖文件仍归原作者，不被 MIT 重许可。TinyColor regexp 与 Neil Bartlett Kelvin 来源原注释保留，补充各官方完整 MIT 文本，未声称借用历史版本已精确对应。

## 重建
在公开 `public-source` 目录运行 `npm ci --ignore-scripts --no-audit --no-fund`，然后 `node build.mjs`，输出本目录 `delivery/runtime.js/runtime.css/index.html`。package-lock 精确固定依赖与完整性。构建工具 esbuild 不参与浏览器执行；运行时实际仅 Preact 10.0.0 与公开 iro/iro-core。没有外部字体、图片、worker、网络、账户、存储或导出。不能只上传七件而漏掉 public-source，完整 manifest.publicFiles 必须一起公开。

## 行为/验证及限制
production 七模式 normal/reduced/early/hidden-early/failure/latefail/missing-root，通过真实 atlas composePreview 拼装。原 SVG 鼠标拖动在固定 290px 测试几何下改变真实颜色值；三色柄选择、HEX8输入/alpha、重置、拖动中隐藏卸载、恢复值、五轮重建、旧按钮/节点、首次挂载前退出、初始隐藏退出、SVG创建失败/稍后重挂失败均测试。应用监听退出为0（只排除精确 JSDOM nwsapi/Window内部注册）。请求、Worker、eval、Function、定时器、RAF、存储尝试0。没有自动播放/动画循环；reduced 与正常保留即时原图形控制，CSS禁动效。hidden 销毁实际原控件并保存三色/活动色；visible 重建，pagehide/atlas:dispose 彻底退出。

真实浏览器 CSS/SVG 像素、原生触摸、窄屏、键盘操作原轮盘、完整无障碍未验。新增文本颜色输入和选柄/重置可用键盘，不宣称轮盘具备原生键盘导航。JSDOM与固定几何不等于截图或原生手势验收。

缺失 #app 初始化错误也安全停止：使用 body 显示明确失败提示，先中止控制器，不二次访问空 root。新增 missing-root 生产分支已验证。
