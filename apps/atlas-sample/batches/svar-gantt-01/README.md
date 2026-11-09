# SVAR · 原任务依赖甘特与编辑侧栏

旧 ID svar:gantt-task-editor；固定官方 c595a2f5fcfe3294af622526b2f0dbd6a91336d8 / 2.8.2。原 demos/cases/GanttEditor.jsx、getData、Gantt/Editor/Willow 与组件源码未修改，直接真实构建。不是自画时间轴，不拆多项，也不宣称执行项目后台。

保留原任务、依赖线、时间尺度、分组、双击任务打开 General/Links 编辑、名称/描述/类型/日期/时长/进度、原新增任务后打开编辑器和删除。原本地 fixture 含2026年项目，新增任务沿原默认日期逻辑，可能在当前时间窗外；不伪造自动滚到可见结果。拖动几何、精确像素和所有高级功能未逐项验收。

获准的明确视觉适配：原 wx-icons 只有二进制字体，未下载/编码/转换。必需 wxi 功能图标统一用正式 lucide-static 0.468.0 原 SVG，通过纯文本 percent-encoded CSS mask 渲染；几何未重画，但不是原 wx-icons 字形。SOURCE列逐类映射/原SVG/hash，Lucide ISC与Feather MIT完整保留。Roboto/Open Sans字体链接与font-face移除，Willow原 fonts=false，系统Arial/sans-serif回退；原布局、配色、控件机制不改。

运行唯一适配宿主沿既有已测隔离框架，添加中文范围说明、React错误边界、暂停隐藏定时器/RAF但不卸载用户编辑状态、退出统一清理。原2D Canvas网格背景代码保留，原toDataURL是浏览器本地渲染流程，不是上传二进制包装。失败时有明确提示，不以桩画布冒称真实图像成功。无后台、上传、联网、存储、Worker或动态eval。

许可：原MIT；实际20包发出代码，15包有原全文，5包只附MIT metadata（lib-dom/lib-state/lib-react/core-locales/grid-locales）。这5包的原版本/声明/作者字段/metadata hash均保留，并明确补充标准MIT正文，不伪称原包有LICENSE、不虚构版权年份。前三npm gitHead原license.txt查询404，随后正常Git树查询403已停止，没有代理/换路重试。包元数据未发现相反限制。Lucide替换另有完整ISC/Feather MIT，不由SVAR根MIT覆盖。未把productTrial metadata擅当商业授权，实际公开代码和依赖声明均核MIT。

actual560 compose关键检查：原行双击→编辑名称真正更新任务行、Links切换、日历打开、关闭、新增→自动编辑→跨页签保留新名称→删除，隐藏恢复保持已编辑任务；立即退出、缺root、原Canvas初始化失败、旧按钮/节点退出无复活。所有实际监听、timer、RAF退出0，网络尝试0。测试仅JSDOM数据/DOM/事件，Canvas2D/尺寸/ResizeObserver是明确桩；现代CSS解析在JSDOM有局限，生产CSS未删改来迁就它。browserVisualQA: not-run。

7公开文本：index.html/runtime.js/runtime.css/README.md/LICENSE.txt/SOURCE.json/VERIFICATION.json。完整原件归档、依赖安装、lock、构建和测试仅本地；不声称公开源码ZIP。来源图和运行依赖见SOURCE，官方源5个先前证据文件除抓取时多1个末尾LF外逐字复核；其余归档源hash不冒称独立Git树核验。
