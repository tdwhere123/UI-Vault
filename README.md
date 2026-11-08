# UI-Vault · 精选界面素材图鉴

网站：<https://tdwhere123.github.io/UI-Vault/>

当前已收录 **241件独立素材：215件精选界面＋20件保留基础素材＋6套完整图标系列**。正在向1000+件优质素材扩充；图标按完整系列单列统计，不按单枚凑数。源码候选、不同配色与框架版本不充数。

## 当前内容

Looseleaf 39件、Magic UI 36件、HyperUI 20件、Kokonut UI 49件、Bencho 27件、Motion Primitives 5件、Solid Glass 6件、AI Elements 27件、Animata 18件、Tailark 8件，另有Lucide、Tabler、Phosphor、Heroicons、Octicons、Bootstrap Icons六套图标系列。

其中46件保留在跨用途的Agent工作流集合，覆盖对话、推理、工具调用、审阅、状态与任务流程；首页优先呈现这些素材。演示是本地UI，不冒充已接入真实模型。

精选包含纸张手绘界面、真实交互和动效，不只是普通按钮表单。每项提供隔离运行预览、行为范围、上游来源、原件代码和完整源码下载。静态展示项不冒充交互；前端演示不连接真实账号、支付或后台。

前端按紧凑图鉴结构独立实现，没有复制LeiBox受限制代码。桌面三列、手机单列与抽屉分类；分类搜索、来源筛选、可直达详情。每页12条，列表只展示实际浏览器拍摄的轻量封面，不加载各组件运行包；进入详情后才启动单个隔离预览，切源码或离开后释放。列表采用独立轻目录，完整依赖与原件信息按需读取。返回保留页码与筛选。

旧版图库、70份旧包与其专用归档工具链已按用户要求退出当前工作树；可从 Git 历史 `3a2e440` 恢复。新版素材运行资源、原件下载和许可证均保留，不将旧包冒充已迁移素材。

## 本地运行

Node.js 22或24；图库和测试不需要安装第三方依赖：

```sh
npm run build
python3 -m http.server 8080 --bind 127.0.0.1 --directory apps/atlas-sample
```

导出当前图库预览：

```sh
node scripts/export-pages.mjs /tmp/ui-vault-pages /
python3 -m http.server 8080 --bind 127.0.0.1 --directory /tmp/ui-vault-pages
```

导出目标目录需为空。托管工作环境可用其支持的预览服务。不要用file://打开需要读取JSON的图库。

## 验证与发布

```sh
npm run build
```

`.github/workflows/pages.yml`在main更新时构建GitHub Pages。线上`version.json`给出实际提交和条目数。构建测试不等于视觉验收，具体边界见`apps/atlas-sample/VERIFICATION.md`。

## 素材与源码

- `apps/atlas-sample/items.json`是当前库存；`batches/`按小批次共享运行资源，每项仍有独立入口与上游源文件。
- `featured/`保留首4件；`originals/`、`previews/`、`bundles/`保留20件基础素材。
- 原件和演示适配分开，下载包含源文件、依赖锁与许可证，不包含node_modules。重建仍须安装对应构建工具与依赖。
- 每个来源和字体按原许可证保存，详情与`LICENSES.md`给出来源。根目录某个MIT文件不覆盖第三方材料。
- 未通过动态验收的WebGL降级项暂不计入已发布库存。候选站清单不等于已收录。

## 图标系列

完整系列作为一个条目，搜索与原生变体在系列内浏览。6套包共21,910条原始SVG记录（含原生样式、尺寸及旧名），另有506别名，不计作额外界面素材。每页仅绘制60枚，支持原始SVG查看和16/24/32px展示。图标包可用Python标准库离线重建。

## 分类与站壳

用途导航统一为Agent与对话、输入与选择、导航与组织、数据与状态、展示与媒体、产品与营销、视觉与动效。图标系列独立入口。纸张、光效、几何空间等属于风格标签，来源和完整页面/区块/组件属于独立筛选，避免把用途与材质混在一张分类表里。站壳使用已收Lucide原生SVG子集，分类导航沿用已保存HyperUI轻量菜单语义，不将整套示例React包加载为导航依赖。

## 持续收集的候选源码

新增研究资料按约 100 个独立候选族分批归档，先保存来源、许可与源码，再做实际验收。参见[待验证源码档案](collections/pending/README.md)。这些候选不计入已验证在线图鉴，也不会增加首页加载量。

## 主图鉴收录状态

保留原241条图鉴，仅把具备本地预览的新增条目接入同一分类、搜索和详情，数量由在线目录与version.json给出。所有新增内容尚未完成真实浏览器视觉复验；区分本地交互、原版脚本/静态富显示与后台功能。

Exodus相关扩充包括assistant-ui表单/消息内富组件、Orb本地流程、Thinking Orbs状态家族、AstryX完整页面和SpatialBoard空间场景。AstryX明确为0.7.12固定模板+官方0.7.11组件/主题的兼容适配。其余未适配来源不进入主图鉴。

动效图标单独口径：一个pqoqubbw图标家族、466基础glyph、468原始实现，两对状态合并；不是466个页面，也不声称比既有静态Lucide多466种设计。最多36SVG/页、最多1枚动效。第二批92组源码ZIP以及新图标源码ZIP尚未上传；不要把本地归档当成在线下载。

补充图标系列：Phosphor Duotone精选200原图，单一weight，每页最多36枚；73个已确认与Lucide对应语义，其余不宣称语义独有。图标系列、glyph和UI条目分别计数，禁止把总和说成独立页面数。主图鉴关键词支持在两套新增系列内按图形名称/中文标签发现所属系列。

后续本地适配含Kibo日历/甘特/表格/树/编辑器/裁剪等8个复合工具，以及React Flow5种不同空间关系编辑原语。拖动几何、canvas像素和原生剪贴板体验不因DOM测试通过而视为视觉验收。

新增媒体家族只允许播放器/转录两个明确标记条目的本地blob媒体；默认预览仍无media-src，connect-src始终none，不增iframe权限、不允许远程媒体。合成测试音不含语音，预置转录不是识别结果。HTMLMediaElement/Canvas测试替身和PCM结构检查不等于实际声音、解码或视觉验收。

新增完整本地工作台包括CodeMirror双侧差异合并、JSONEditor树/文本/预览编辑；不执行或上传编辑内容，不需unsafe-eval/worker。JSON语法校验不等同Schema验证，Jspreadsheet动态公式引擎未接入。部分旧候选经复核发现固定来源目录缺失，保留记录并明确待恢复，不计主图鉴完成数。

后续本地工具：原UIW Markdown工具栏与安全源码预览、ReactGrid单元格/范围编辑（无公式）、formBuilder字段设计与本地填写。Markdown外部图片和链接导航禁用；表单属性采用纯文本安全路径。formBuilder预捆绑mi18n实际MIT发布声明及lock完整性已核实，但原LICENSE全文缺失，附有明确标注的补充标准MIT条款及作者证据，不伪称找到原件。详细版本头差异与许可来源见对应ADAPTATION。

新增氛围/空间交互保留原始实现：长虹玻璃参数台、轨道图像轮盘、灯阵、跑道起飞动画、实体网格、iOS展开卡片、胶囊撤销及二维惯性色盘。每个家族只算一条，不按配色/灯阵图案拆数。玻璃使用真实Paper WebGL2引擎及明确不支持提示，GPU/像素未验；iOS共享布局关闭仅在reduced-motion测试状态通过，正常动画待验。上述DOM/GL测试桩不等于浏览器验收。素材用本地原创图替换未经核实的远程照片，不连接真实任务、账户删除、设备或外部服务。

新增独立来源包括WinBox多窗任务室、Mind Elixir原生分支导图，以及Beautiful UI胶囊输入与选文上下文改写。浮窗、节点编辑和本地接受/放弃状态可操作，但不冒充模型回复、真实听写、附件上传或服务连接。选择器/工作区按完整独立族计数，不按窗口、树节点、主题或固定回复拆数。

Emoji Mart 为一个完整本地表情检索/分类/肤色/消息草稿工具，不把其1870条基础Unicode元数据或肤色变体算作新增图标。采用操作系统原生字形，不再分发表情艺术图片；显示依设备字体而异。草稿不发送、不上传、不持久化；运行库与数据版本分别固定，完整许可见该批适配说明。

后续独立交互包括原vis-timeline的本地分组时序计划、原Shiki Magic Move的预编译token代码演进，以及原D3 Sankey引擎的带状工作量图。代码仅展示不执行；时间和工作量都是虚构样例。Sankey界面壳为明确标注的原创适配，不冒充上游成品。拖动几何、CSS真实位移和浏览器像素仍待验。

Annotorious 使用真实区域标注引擎，矩形/多边形是同一工具的不同形状，不单独计数。底图为原创SVG，可选本地PNG/JPEG/WebP，但图像只在内存中，切图清空标注，无上传、识别或模型调用。实际文件解码和浏览器几何效果仍待验。

新增原生引擎集成包含：MiniSearch真实本地倒排检索、Driver页面锚点聚光解释、Markmap实时Markdown转换导图、D3 Geo上下文地球仪。界面壳/示例语料明确区分为原创适配。MiniSearch分数不是概率或可信度；Markmap禁用HTML、图片、链接与资源插件；地球仪仅公共地形与虚构任务，不定位或追踪用户。每项按一个完整工具计数，不按城市、步骤或文档拆数。

Uiverse Galaxy 原始HTML/CSS筛为三族等待/材质视觉，四份原件完整保留作者与源码哈希；气泡checkbox和装饰水滴合计一族。Verlet布料保留原约束物理与材质绘制，作为纯视觉交互参考。jsondiffpatch则提供真实结构化delta、数组移动和正反补丁，原HTML formatter去掉内联脚本，保留文字移动标记。这些均无后台或真实任务进度，物理/伪元素像素与完整视觉仍待验。

新增Mafs原贝塞尔构造保留四控制点、分层插值与SVG曲线，作为交互数学富消息参考；Zdog原双屋几何插画支持投影转视，不是建筑工具。Zdog官方源码/npm/文档均明确MIT却未附完整LICENSE原件，已透明附标准条款及原版权声明证据。ECharts多轴平行坐标依据原引擎active集合筛选虚构策略，原创外壳与样本明确标注，不冒充上游成品或真实模型评测。三者均按完整族计数，实际像素与触摸/鼠标拖刷仍待验收。

新增venn.js原集合优化布局用于证据交汇探索，精确成员数量与近似交叠面积分开标注，不把重叠数当可信度。Paper.js保留真实并/交/差路径运算与可拖动负空间材质，不把多种运算各计一条。PDF.js原解析器则提供原创3页文档的分页文本提取与搜索跳转，明确不保留PDF版式、不含OCR和任意文件上传；主线程处理器预载，无Worker/eval/外部资源调用，不放宽预览权限。实际视觉与触控仍待验。

恢复原Animata交易行形变收据与AI Canvas Stack Tower两个既有候选，沿用原ID，不额外创建重复族。收据仅虚构交易、DEMO徽章，无支付或账户；字层保留原错相公式与设计，默认暂停/主动播放且尊重减少动态，只作视觉参考。另新增RRule真实重复规则工作台，固定UTC本地计算，不创建日历或提醒；每月第N个星期X与第N个工作日语义明确区分，COUNT先于排除、预览最多前50个原始候选。正常与减少动态测试不代表浏览器形变/帧平滑验收。

恢复Blode阅读章节刻度、UI Layouts纵向胶片素材墙、Cult多层步骤展示三个原版候选，均沿用原ID。阅读刻度保留原比例算法和小屏隐藏规则；素材墙保留原共享布局与纵向拖动逻辑，原创SVG设计稿替代未授权照片并明确非模型产物；步骤展示保留原多层编排，补完整步骤跳转/暂停和隐藏清理。动效、拖动几何及实际阅读滚动视觉仍待验，不将DOM状态通过表述为视觉验收。

恢复Cult页内上下文侧栏和Blode窗景光影两个旧候选。侧栏通过原children展示本地摘要而非远程视频；窗景保留原几何和指针光影公式，视频明确替换为原创渐变天空，非原片。新增xterm原ANSI解析/缓冲区回放与SearchAddon检索，只有受控虚构日志，无Shell、输入、网络或剪贴板读取；默认OSC链接处理显式禁用，不能把它当真实终端。三者保留实际交互并完成状态/清理测试，像素、合成和浏览器布局仍待验。

新增impress原空间阅读/overview上下文与Uppy原批量附件准备。简报坐标、缩放旋转来自原示例，正文为原创本地样例；附件卡片/元数据/校验/移除真实可用，但没有上传器、远程来源或持久化，图片仅文件图标。新增IconPark一个原版多彩图标系列，精选94枚glyph，实际ORIGINALS.json及原作者/Apache许可随预览发布；24个英文名称与已收两系完全重合，语义重合可能更多，不把94枚当成94页面或新语义。每页最多24缩略图，只读原SVG；全部新项仍待浏览器视觉验收。

### Original condition editing, code walkthrough and hand-drawn paper batch

The main gallery now contains **491 preview entries**: the original 241 plus 250 added previews. The candidate catalog has 337 records; 87 source-only candidates remain excluded from the main gallery. This batch adds two new source families and restores the existing `blode:sticky-notes` record, without duplicate IDs. Icon counts are unchanged and are not added to the UI-entry count.

- **React Awesome Query Builder**: original Query/Builder/BasicConfig and default stylesheet, nested AND/OR/NOT groups, typed fields, deletion/reset and read-only JSON. This is local rule authoring, not query execution. The original lightweight skin is retained rather than advertised as a new luxury design. Seven original-control/state/lifecycle checks passed; native drag reordering and pixels remain unverified. Original MIT and all 21 actual dependency notices are published under `apps/atlas-sample/batches/raqb-01/`.
- **Code Hike official scrollycoding**: original seven-section example, click/keyboard/scroll selection, sticky code pane and original highlighter/token transitions. Fixed content is highlighted at build time; this is neither a live editor nor code execution. Normal and reduced-motion behavior/cleanup checks passed with observer/animation geometry simulated. Actual scrolling/pixels remain unverified. Full runtime MIT licenses are published under `apps/atlas-sample/batches/codehike-01/`; the build-only lighter license-file gap is disclosed in ADAPTATION.md and that engine is not included in the runtime.
- **Blode sticky notes**: original 25-sheet stack, pressure-aware SVG drawing, five paper colors and byte-identical original curl shaders. The local SVG-to-Blob-to-CanvasTexture route stays intact and needs no CSP expansion. Drawing/state and asynchronous texture cleanup checks passed; Image decoding/Canvas2D were mocked in the resource tests. **Actual WebGL/GLSL compilation, texture rasterization and page-curl pixels have not been tested.** WebGL2-unavailable browsers show a clear warning and retain drawing instead of a fake curl. Original MIT and 16 dependency notices are published under `apps/atlas-sample/batches/blode-sticky-01/`.

Each is one design family, not a count of chapters, rules, paper sheets or colors. Static gallery covers and lazy detail previews remain unchanged. Full source/build archives for this batch are local only, not advertised as uploaded ZIP downloads. All three are marked pending visual acceptance.

### Conditional questionnaire and original pixel-grid icon batch

The main gallery now contains **493 preview entries**: original 241 plus 252 added previews. The candidate catalog has 339 records; 87 source-only records are still excluded. This batch adds one original SurveyJS questionnaire runner and **one** Pixelarticons series, not a count of questionnaire pages, rows or icon meanings.

- SurveyJS Form Library 3.2.4 retains the original runner and full default styling, with a synthetic three-page project brief, editable 1–5 row matrix, cross-field budget validation, conditional branches, back/next and local JSON completion. It is not the paid Creator or a real submission service. Seven workflow checks passed. An independent repeat exposed a fixed-delay test that could click an already removed but not yet detached row button; the test now waits for actual row identities/counts and old-node detachment, including rapid repeated and detached-node clicks. Runtime code did not change. Five consecutive runs plus independent repeats passed; evidence and full original/runtime licenses are published in `batches/surveyjs-01/`.
- Pixelarticons contributes 64 byte-identical original SVG glyphs from the free MIT set, selected as one visually distinct 24×24 pixel-grid family. Original paths are unchanged. The authored browser provides four curated categories, search, pagination, readonly raw SVG and 24/48/96 display sizes. Chinese labels are our curation, not official translations. `batches/pixelart-01/ORIGINALS.json` genuinely contains all 64 original SVG strings; separate SVG/build files remain local. English-name comparisons cover only three recent sets, not semantic deduplication across the whole gallery. These 64 glyphs are not 64 new UI pages or unique actions.

Both passed DOM/state/security/lifecycle checks but remain pending real browser visual and mobile/native-keyboard acceptance. Static covers and detail-only lazy loading, sandbox and CSP remain unchanged. Existing icon-family counts are otherwise unchanged; UI entries and glyph counts remain separate.

### Restricted original Excalidraw follow-on

The main gallery now contains **494 preview entries** (241 original + 253 added previews; 340 candidate records, with 87 source-only records excluded). Icon-family and glyph counts are unchanged from the preceding 493 batch.

One original Excalidraw 0.17.6 editor family now appears in `batches/excalidraw-01/`. It retains original scene geometry/model, selection/property UI, shapes, text, arrow binding, freehand, grouping and history. This is an explicitly restricted local preview: system Helvetica replaces original handwritten fonts, and import/export/download, system clipboard, links, embedded media, remote libraries and Mermaid are disabled. It is not a full Excalidraw installation; drawings live only in the current iframe memory and disappear on closing/reloading.

Original API/model state, undo/redo/group actions, link/clipboard/action gates and production mount/cleanup passed independent tests. Actual attempts to use network, workers, eval/Function, window.open, clipboard or storage were counted at zero; tracked timers/RAF/observers/global listeners were cleared on pagehide. **Canvas/Path2D and geometry were test substitutes, so native drawing gestures, hit testing, Canvas pixels, IME and mobile behavior remain unverified.** No screenshot or real drawing acceptance is claimed.

Original MIT and 66 dependency-graph notices are included. The missing react-remove-scroll-bar 2.3.8 package license file is transparently supplemented with the same official project's complete MIT text from its 2.3.7-labeled source line; all 24 distributed code/declaration files were independently byte-compared and identical between the two npm versions. This is not presented as an exact 2.3.8 source checkout or original package LICENSE. Original embedded raster checkerboards were replaced with pure CSS and inactive font-export templates removed. Sandbox/CSP are unchanged. Source/build archives remain local, not a claimed hosted ZIP.
