# UI-Vault · 精选界面素材图鉴

网站：<https://tdwhere123.github.io/UI-Vault/>

当前共收录 **654 条**：其中 **522 条可打开预览（241 条原始素材＋281 条后续接入预览）**，另有 **132 条仅来源记录**，不计入主图鉴预览数。原始 241 件包括 215 件精选界面、20 件保留基础素材、6 套图标系列。正在向 1000 件优质素材扩充；图标按系列单列，字重、尺寸和单枚 glyph 不凑数。已有图标重叠暂留待统一整理。

## 当前内容

Looseleaf 39件、Magic UI 36件、HyperUI 20件、Kokonut UI 49件、Bencho 27件、Motion Primitives 5件、Solid Glass 6件、AI Elements 27件、Animata 18件、Tailark 8件，另有Lucide、Tabler、Phosphor、Heroicons、Octicons、Bootstrap Icons六套图标系列。

其中46件保留在跨用途的Agent工作流集合，覆盖对话、推理、工具调用、审阅、状态与任务流程；首页优先呈现这些素材。演示是本地UI，不冒充已接入真实模型。

精选包含纸张手绘界面、真实交互和动效，不只是普通按钮表单。可预览项提供隔离运行入口、行为范围与上游来源；原件或下载是否已发布以各条目实际资源为准，不把仅来源条目当可运行归档。静态展示项不冒充交互；前端演示不连接真实账号、支付或后台。

前端按紧凑图鉴结构独立实现，没有复制LeiBox受限制代码。桌面三列、手机单列与抽屉分类；分类搜索、来源筛选、可直达详情。每页12条，支持直接输入页码跳转。有封面项显示轻量图片；无封面且有实际预览的项使用有界实时卡片，列表最多同时运行1项，离开视口或分页即释放。进入详情后运行单个隔离预览，切源码或离开后释放。列表采用独立轻目录，完整依赖与原件信息按需读取。返回保留页码与筛选。

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

### Panorama inspection and original image-editing batch

The main gallery now contains **496 preview entries** (241 original + 255 added previews). The candidate catalog has 342 records, with 87 source-only records excluded. This batch adds two independent media-viewing/editing families; icon counts are unchanged.

- **Pannellum 2.5.7** retains the original panorama viewer, view-angle/FOV math, compass, local hotspots and mouse controls. Six authored SVG faces are explicitly synthetic direction references, not photographs or model outputs. Fullscreen, sensors and external navigation are disabled. Original CSS3D fallback state and unsupported-error paths passed tests, but Image/Canvas were substituted: actual WebGL, texture pixels and native pointer behavior remain unverified. Original MIT is published in `batches/pannellum-01/`.
- **TOAST UI Image Editor 3.15.3** retains the configured original crop/rotate/flip/draw/shape/text/filter/history interface. It uses an authored local SVG still life, with Load/Download and usage statistics disabled. Eight original-control/state tests, original Fabric RGBA-array filter calculations, Canvas-unavailable fallback, and initial-load/crop-reload interruption tests passed. Testing exposed original lingering crop listeners and a delayed Image.onload callback accessing a destroyed canvas; both were repaired before publication. Actual Canvas pixels, native gestures and responsive appearance remain unverified. Local canvas.toDataURL processing is original runtime behavior, not a pre-encoded uploaded raster asset.

TOAST is **not MIT-only**: its Fabric dependency contains Mozilla/Andrea Bogazzi MPL-2.0 path code, and embedded ImageTracer carries the Unlicense. The full terms and real covered source are published, not merely promised in a local ZIP:
- [Fabric 4.2.0 preferred path source](apps/atlas-sample/batches/toast-image-01/public-source/fabric/src/util/path.js)
- [Complete unmodified Fabric browser source](apps/atlas-sample/batches/toast-image-01/public-source/fabric/fabric.js)
- [Full MPL-2.0](apps/atlas-sample/batches/toast-image-01/public-source/fabric/MPL-2.0.txt)
- [Fabric MIT notice](apps/atlas-sample/batches/toast-image-01/public-source/fabric/LICENSE-MIT.txt)

The covered source was published before the TOAST executable preview assets and verified byte-for-byte against the installed original package. Other adaptation/build/source archives remain local only. Static gallery covers, detail-only loading and default sandbox/CSP remain unchanged. These are pending-visual-review previews, not claims of completed browser pixel acceptance.


## Original note input, weekly planning and API reading · 499 previews

The main gallery now contains **499 preview entries** (241 original + 258 added previews). The candidate catalog has 345 records; 87 source-only records remain excluded. Three independent families are added, not a count of notes, calendar views or endpoints. Icon-family and glyph counts are unchanged.

- **React Piano 3.1.3** keeps the original thirteen-key C4–C5 keyboard, input mapping and polyphony callbacks. The host supplies explicitly opt-in, local sine-wave synthesis, not sampled piano or generated music. Seven original-component/audio-lifecycle branches passed, including delayed old rejection after a newer context and partial-node creation failures. Review found and fixed both lifecycle problems. AudioContext is mocked in tests: actual sound, device behavior and pixels remain unverified. Blur, hiding, cancellation and exit stop and close audio. Eight actual runtime packages have full MIT notices.
- **FullCalendar 6.1.19** keeps the original UTC weekly/day time grid, agenda, selection and event model, with a small disclosed local editing dialog. Four state/form, invalid-drop, active-drag-exit and production tests passed, including Los Angeles and Shanghai process timezones. Drag tests use substituted hit geometry; real pointer/resize gestures and immediate second-drag reentry are not claimed verified. Standard MIT plugins and Preact only, no premium package. The unused binary icon font is removed through text-button configuration, not re-encoded.
- **RapiDoc 12.1.1** keeps the original parser and full OpenAPI reader for five authored local endpoints, search, models, response codes and examples. Eight state/UI tests and initial/reload interruption tests passed. Try, authentication, external specifications/references, import/export, clipboard and outbound links are disabled. It is not a live API. Complete upstream MIT/BSD-3-Clause/ISC dependency notices are published with the original root license.

These are actual original components with disclosed host fixtures, not static stand-ins. Browser pixels, native gestures and audio still await acceptance. All source/build/test archives for this batch remain local, not advertised as hosted ZIPs. Static list covers, detail-only loading, sandbox and CSP are unchanged.


## Original spatial reading and evidence annotation · 502 previews

The main gallery now contains **502 preview entries** (241 original + 261 added previews). The candidate catalog has 348 records, with 87 source-only records excluded. This batch adds three distinct families, not a count of map markers, comments or PDF pages. Icon counts are unchanged.

- **OpenSeadragon 6.1.1** retains its original HTML drawer, Navigator, Viewport and control logic on an authored single SVG research map. Four original state/error/pending/production tests passed. Original PNG button artwork is replaced through supported configuration by disclosed text SVG; no binary wrapping or multilevel-tile claim. Button fading timers/RAF were fixed to stop on destruction. Full BSD-3-Clause and embedded MIT notices are present. Image decoding and geometry were mocked; actual pixels and pointer gestures await acceptance.
- **RecogitoJS 1.8.4** retains original text selection, quote/position anchoring, highlights and client-core comment/tag editor. Eight original interaction tests plus two selection/touch interruption branches passed. Tests cover editing, cancellation, hostile literal comment text, exact-range reselection preserving identity and deletion. Original observer, touch and relation-layer lifecycle leaks were repaired. The report is an authored fixture, memory-only, not a shared persistent annotation service. Root/core BSD notices, all runtime notices and full icon CC BY 4.0 terms/attribution are included; upstream did not specify an exact historical IcoFont version, and no exact version is invented.
- **React PDF Highlighter 8.0.0-rc.0 / PDF.js 4.4.168** retains original paginated Canvas rendering, text layers, text/area annotation UI and location logic. Three local pages are generated from authored ASCII source, not uploaded binary PDF wrapping. A real missing-glyph path was fixed: original system-font rendering now issues Canvas text commands, and forced named-font rejection retains generic sans-serif fallback. Main interactions and eight interruption/error branches passed, including document-destroy failure with explicit partial status and guaranteed host cleanup. PDF.js runs its statically supplied original handler on the main thread, with eval disabled and zero attempted Worker/network/eval calls in tested paths. Full MIT/Apache notices are included.

Canvas raster, screenshot content, Image decoding and layout are substituted in tests. The 584 PDF text drawing calls prove the original rendering-command path, not readable pixel acceptance. Native selection, drag/resize, mobile layouts and visual output remain unverified and labeled accordingly. Source/build/test archives remain local, not claimed as hosted ZIPs. Static list covers, lazy detail loading, sandbox and CSP stay unchanged.


## Original organic spring material · 503 previews

The main gallery now contains **503 preview entries** (241 original + 262 added previews). There are 349 candidate records, with 87 source-only records excluded. Icon counts are unchanged.

**React Spring official goo-blobs** preserves the original three-stage useTrail mass/tension relationship, circles, lightcoral material and SVG blur/alpha matrix. This is one decorative pointer-following material family, not three items, a physical fluid solver or an Agent task-progress UI. It shares goo/spring techniques with existing tabs, particle repulsion and liquid-slider examples, but its original chained lag/fusion behavior is distinct.

Added host controls pause the effect on pointer cancellation/leaving, blur or hiding; reduced motion is static with no continuing RAF. Independent review found that a fixed initial center clipped the static shape on narrow screens. This was corrected using actual measured dimensions, tested at 320px then 280px, with normal-flow layout to avoid title overlap. The original spring/filter relationships remain unchanged.

Normal, reduced, narrow and exact-production tests passed. A separate audit verified root MIT plus all eleven runtime-package licenses and zero forbidden eval/Function/storage/network calls. Animation, measurement observers, media-query listeners, timers and host listeners clean up; persistent React/JSDOM baseline listeners are not misreported as zero. Actual SVG pixel compositing and native touch remain unverified. The fixed source has been compared with the archived original; extra archive trailing newlines are disclosed, not claimed byte-identical. Source/test archives remain local only. Static list covers, detail-only loading, sandbox and CSP are unchanged.

Screening does not count as collection: Spin Wheel was not added because its design benefit and two third-party source-license attributions remain insufficiently established. The original speedscope adaptation remains in testing and is not counted or published in this batch.


## Original flamegraph and restored spatial material · 505 previews

The main gallery now has **505 preview entries** (241 original + 264 added previews). There are 350 candidate records and 86 source-only records excluded. This batch adds speedscope and restores the existing `motioncore:rubiks-cube` record, not a duplicate candidate. Icon counts remain unchanged.

- **speedscope 1.25.0** preserves the original Time Order, Left Heavy and Sandwich views, model, GLSL/Canvas renderer, search, profiles and zoom. Two authored local Agent traces are explicitly synthetic, not measured performance. File/URL/paste import, export, external navigation, persistence, embedded fonts and demangling/WASM paths are removed. Original GL resource tracking and shader/initialization failure handling were repaired. Four state/production/unsupported/shader-failure branches passed; failed rendering shows an unavailable message, not a substitute graph. Seven actual package notices plus the GPU-port notice are included. Aphrodite's explicit MIT declaration/copyright is supplemented with standard MIT text because its package has no full license file; string-hash retains its CC0 declaration and full terms. This provenance gap is disclosed rather than inventing an upstream license file.
- **Motion Core Rubiks Cube** restores the original rounded geometry, 27-piece/9-piece-layer transform and commit mechanics, Fresnel shader and OGL Orbit control. It is one decorative spatial material, not a solvable puzzle or real task progress. Only the selected Svelte scene/helper is built; no GSAP or MediaPipe. Complete MIT and OGL Unlicense notices are present. Independent review found that WebGL context loss did not throw and left an animation loop running. The corrected path now stops, releases resources, removes listeners and displays an honest error; repeated loss produces no further drawing. Eight branches and a separate context-loss injection passed.

Original math, model and rendering commands are exercised, but Canvas/WebGL status and layout are test substitutes. Actual shaders, GPU output, pixels and native gestures remain unverified. Source/build/test archives remain local; no hosted ZIP claim. List covers, detail-only loading, sandbox and CSP remain unchanged. BPMN modeling is still under separate evaluation and is not counted or published here.


## Original BPMN Modeler · 506 previews

The main gallery now has **506 preview entries** (241 original + 265 added previews), with 351 candidate records and 86 source-only records excluded. This adds one semantic BPMN modeler family, not 109 icon entries. Icon counts remain unchanged.

**bpmn-js 18.31.1** retains the original palette, context-pad, task/sequence-flow append, direct labels and command history on an authored local non-executable process. It models diagrams only; no workflow execution, external XML, upload/export or persistence. Nine original interaction tests, initial/reset import interruption tests and 109 original glyph-path mapping checks passed. Pending local import settles before the single original destroy call; the host hides immediately and late results cannot update UI. Snapping debounce is cancelled on disposal.

The main license is the **custom bpmn.io license, not MIT**. Mandatory watermark, original backlink handlers/hrefs and powered-by lightbox code remain byte-for-byte unchanged and visible. The existing iframe sandbox can block new windows; permissions are not widened, and successful in-frame external navigation is not claimed. The gallery now displays an explicit project-website link outside the preview for records with an HTTP(S) website, including https://bpmn.io/ . Both upstream source and website remain available.

Original bpmn-font 0.13.0 SVG-font text is published with full SIL OFL 1.1 and attribution. The unchanged 109 glyph paths use a disclosed coordinate-format adapter for SVG masks; these are not invented independent upstream SVG files or encoded binary fonts. Nineteen actual runtime-package licenses/notices are included, including the Adobe Snap.svg Apache-2.0 derivation notice in path-intersection. Actual pointer geometry, icon appearance, focus and browser pixels remain unverified. All broader source/build/test archives remain local, not advertised as hosted ZIPs. Lazy previews and sandbox/CSP are unchanged.


## Restored original Cara parallax page · 507 previews

The main gallery now has **507 preview entries** (241 original + 266 added previews). Candidate records remain 351; 85 source-only records are excluded. Existing `leko:cara-complete-site` is restored, not duplicated. Its four sections, five screens and seven SVG symbols count as one page family. Icon counts are unchanged.

The original LekoArts Cara Hero/Projects/About/Contact composition, five-page Parallax offsets, slanted color fields, wave paths, geometric SVG placement, gradient project cards, Theme UI palette and light/dark switch remain. This is a standalone React adapter, not a complete Gatsby build: GraphQL/SEO/build-time MDX are removed, with clearly fictional local Exodus briefing content. Cards navigate locally to About; Contact does not send messages. System fonts and text attribution replace external font/media dependencies. The original fixed-revision SVG sprite is publicly included under the example's 0BSD license, with theme MIT and all 34 actual runtime-package notices, including BSD-3-Clause where applicable.

Four normal/reduced/narrow/production tests passed on actual Parallax controllers, layers, scrollTo/current, local card navigation and color-mode state. Original resize timer/RAF and layer-controller teardown gaps were repaired. Blur/hidden stops animation; reduced motion uses stationary layers and immediate navigation. JSDOM viewport geometry is simulated: real scroll feel, wave path compatibility, wrapping and mobile pixels still await visual acceptance. The earlier source archive remains recorded as `originalSourceArchive`; it is not advertised as the current adapter's complete download. Current adaptation/build/test archives remain local. Static covers, lazy previews and sandbox/CSP remain unchanged.

TimelineJS is still under separate licensing/source-form and lifecycle verification; it is not counted or published in this batch.


## Original narrative TimelineJS with public source · 508 previews

The main gallery now has **508 preview entries** (241 original + 267 added previews), with 352 candidate records and 85 source-only records excluded. One narrative-reading family is added; dates/slides/icons are not separately counted. Icon counts remain unchanged.

**TimelineJS 3.9.13** retains original story slides, dated markers, chronological scale, zoom, next/previous, first/last and keyboard controls on one fictional local research notebook. This is a restricted text-story edition, not the arbitrary-input TimelineJS distribution. Structured date objects and predefined unique ASCII IDs are required; remote/CSV configuration, generic ISO-string parsing, automatic slug generation and media dispatch are removed. The original date/scale engine is retained. Questionable inherited slug/parser sections and historical configuration keys are not included in this public edition or a reverse patch.

The real **MPL-2.0 corresponding source is published**, not promised as a local ZIP: [77 preferred-source files and hashes](apps/atlas-sample/batches/timelinejs-01/PUBLIC-SOURCE.json), [source/build/lock directory](apps/atlas-sample/batches/timelinejs-01/public-source/), [changes](apps/atlas-sample/batches/timelinejs-01/CHANGES.md), and [complete mixed notices](apps/atlas-sample/batches/timelinejs-01/notices/INDEX.md). Source and notices were uploaded and byte-verified before executable assets. Independent review copied only the public source, rebuilt using the locked dependency installation, and obtained byte-identical JS/CSS. The gallery source tab exposes the actual published adapted Timeline.js; it does not imply a hosted full-source ZIP.

Original keydown instance lookup and cleanup for listeners, observer, preload/tick timers and Morpheus animations were corrected. Seven original interaction checks, pending-initialization teardown and missing/duplicate-ID/media-URL rejection tests passed. Native inert is required; no global polyfill is claimed. Five selected original icon paths have their own CC BY 4.0/Apache terms and attribution. Full embedded Morpheus, Penner/KeySpline, Leaflet, LazyLoad, Zepto and DOMPurify notices are included, with historical-version/supplement limitations disclosed rather than assuming root MPL covers everything.

Actual time-axis layout, browser inert/focus, native touch and SVG/icon pixels remain unverified. Tests use layout/observer substitutes, not visual acceptance. Static covers, lazy previews and sandbox/CSP remain unchanged.


## Image-task states and branching teaching content · 510 previews

The main gallery now contains **510 preview entries** (241 original + 269 added previews). Candidate records total 353, with 84 source-only records excluded. Existing SmoothUI image-generation-panel is restored rather than duplicated; WGo adds one independent teaching-content reader. Four sample images, seven control icons and board variations do not inflate the item count. Icon-series counts are unchanged.

- **SmoothUI image batch panel** retains the original prompt, presets, ratio controls, loader, per-tile staggered progress/sharpening and selection interface. The host drives an explicitly simulated local queue, failure and retry. Four prewritten original SVGs are not model output; changing the prompt does not generate new art. No fake download or variations action remains. Repeated submit, Stop→immediate restart, late callbacks, blur/hidden and exit were tested; timers/RAF clean up. Error scanning was corrected to stop rather than visually continue a failed job. Complete actual package/CSS licenses are included; review corrected the metadata to include class-variance-authority Apache-2.0 in addition to MIT/ISC. Three normal/reduced/production tests and independent stress checks passed.
- **WGo.js 2.3.1** retains the original BasicPlayer, SGF rules/variation model, comment panel and navigation on a local fictional 9×9 teaching setup. Capture/reversal, A/B continuations, first/last/keyboard, resize, coordinates menu and touch-repeat cancellation were exercised. Original SHELL Canvas stones and official solid background require no external images. Seven Lucide SVG controls transparently replace the old mixed Fontello font, with complete ISC/Feather MIT alongside the project MIT. Repeated touch-start and cancel/exit lifecycle gaps were repaired. It is not an online opponent, AI analysis, editor or arbitrary-file import/export service.

Actual SVG decoding, blur/scan compositing, Canvas pixels, touch targeting and mobile layout remain visually unverified. Tests run original state/model paths with geometry/raster substitutes. Source/build/test archives for this batch remain local, not promised as hosted ZIPs. Static covers, lazy detail previews and sandbox/CSP remain unchanged.

## Original Jodie portfolio restored · 511 previews

The main gallery now contains **511 preview entries** (241 original + 270 added previews). There are 353 candidates, with 83 source-only records excluded. The existing Jodie candidate is restored in place; its six projects, seven original SVG fixtures and internal routes count as one complete-page design family, not separate items. Icon counts are unchanged.

Jodie 5.1.9 retains its original asymmetric divisor/modifyGrid homepage, responsive grid CSS, sidebar navigation and project/index/about templates. The Gatsby query/image pipeline is explicitly replaced by local data, ordinary images and an in-memory route adapter. Seven locally authored SVG design studies replace unverified photography; they are not upstream photographs or model output. Actual SVG source and hashes are included. Original attribution and complete MIT/BSD-3-Clause notices for 26 runtime packages are retained.

Normal, narrow, reduced-motion, failed-image and production tests cover navigation, rapid route changes, return scroll/card focus, invalid route rejection, error feedback and interrupted/repeated teardown. These use simulated layout/scroll and do not establish native image decoding, responsive pixels or physical focus behavior. Visual acceptance remains pending. Static covers, lazy details, iframe sandbox and CSP remain unchanged. No Gatsby backend, contact submission, file upload, network requests or hosted adapted-source ZIP is claimed.

Five remaining UI Layouts source-only records also received fixed-source factual reviews, without increasing the gallery count: attachment input has no sender/upload service, tools tabs are image switches rather than a tool workspace, magnified tabs need asset/external-navigation review, the progressive carousel needs pause boundaries, and media-modal needs asset and scroll-lock review. Root MIT is not treated as permission for unrelated remote media.

## Original notification lifecycle · 512 previews

The main gallery now contains **512 preview entries** (241 original + 271 added previews), with 353 candidates and 82 source-only records excluded. Existing `spring:notification-hub` is restored in place as one design family, not one item per message or animation state. Icon counts are unchanged.

The official React Spring demo retains its original styled layout, individual height-spring entry, gradient lifetime bar, fade-out and collapse sequence. The host adds only manually triggered local messages, a six-active-message cap (original leaving animations can briefly overlap with new entries), cancellation and background/exit cleanup. Lifetime is not task progress; no browser notification permission, backend event or network is involved. Reduced-motion mode is static and manually dismissed. Spring 9.7.5 and styled-components 6.1.19 are disclosed compatibility choices, not a reconstruction of the old environment. Complete licenses cover 18 runtime packages (MIT/0BSD), the separate tslib copyright notice and the Feather glyph origin.

Three normal/reduced/production branches exercise actual Spring controllers, lifetime interpolation, repeated additions/cancellation, expiry and interrupted cleanup. Measured heights are mocked; real layout, animation pixels and mobile presentation remain unverified. Initial reduced-motion preference is read; dynamic preference changes are not implemented. Static covers, detail-only loading, iframe sandbox and CSP remain unchanged.

Three source-only records were also corrected without increasing counts: Cuicui dynamic-settings has an unfinished dimensions panel and no real apply operation; its advanced bottom-action default demo is placeholder tabs with the menu composition commented out; SmoothUI rich-popover is a citation card, not an image/video player, and overlaps existing source popovers. They are not labeled as completed previews.

## Job details, one new icon series and source-only research · 514 previews

The gallery now has **514 preview entries** (241 original + 273 added), with 356 candidate records and 83 source-only records excluded from the preview count. SmoothUI job-listing-component is restored in place; Ionicons adds exactly one series, not one entry per glyph. Per the user's latest direction, existing icon entries remain unchanged until the separate cover batch is complete. The current 11 icon entry points include two previously identified overlapping implementations (Phosphor duotone selection and Lucide animations); their consolidation is audited but deferred, not silently counted as new design families. No covers or screenshots are created or attached in this batch.

- **SmoothUI job details** preserve the original list-to-detail shared layout, logo transition, fields, description, Escape/outside closing and Motion parameters. Three explicitly fictional roles and authored glyphs replace company branding; there is no real recruiting, submission or payment. Keyboard entry/close/focus restoration and hidden/exit teardown are added. Three state/lifecycle tests and independent production/early-exit checks passed with explicit geometry substitutes, not native animation or accessibility certification. Complete MIT notices cover ten runtime packages and Tailwind. An unused debounce import was removed while the original hooks used by this component remain unchanged; no eval permission is added.
- **Ionicons 8.1.0** contains all 1,357 original published SVGs: 421 base shapes in filled/outline/sharp plus 94 brand marks. Local search, 24-item pagination, native variant switching and readonly SVG source are presented in an authored browsing shell. All original text and hashes are public, with complete Ionic MIT. The npm tarball integrity is the exact asset provenance; the official v8.1.0 tag reports package version 8.0.13 and has differently optimized SVG text, so it is not misrepresented as byte-identical source. Brand rights/endorsement are not granted by MIT. Tests compare all 1,357 rendered SVG trees/attributes and all 57 pages, plus state/cleanup; pixels remain unverified.
- **Puck and miniPaint** are newly researched source-only candidates, not functioning previews. Fixed official source paths and complete root MIT were checked; iframe/CSP integration, runtime dependency licenses, remote assets and application capabilities remain unresolved. Selected source files are collected locally, not a promised complete hosted archive. They do not increase the 514 preview count.

Static covers, lazy detail loading and the current opaque sandbox/CSP remain unchanged. Existing cover mappings and the deferred icon-consolidation work are untouched.

## OpenMoji selection and focused source research · 515 previews

The gallery now has **515 preview entries** (241 original + 274 added), with 358 candidate records and 84 source-only records excluded. OpenMoji adds one expressly curated icon series: **120 base designs, 240 original color/black SVGs**, not the complete 4,495-design collection and not 240 UI entries. Current icon entry points total 12; two existing overlapping implementations remain untouched under the user's instruction to defer consolidation until the independent cover batch is done. No screenshots, cover files or cover mappings are changed.

Original OpenMoji graphics and metadata remain CC BY-SA 4.0, with the complete legal text, per-image authors/dates/source links and unchanged original SVG text/hashes published. The independently authored browser shell has its own MIT license; that grant does not cover the embedded graphics/data. No upstream LGPL helper/test code is incorporated. All 240 SVG blobs match the fixed official 17.0.0 source tree. Paging, groups/tags/hexcode search, original style switching and source inspection were tested with all SVG trees/attributes; no browser pixel acceptance is claimed. Attribution links have correct URIs, but popup opening inside the unchanged sandbox is not claimed.

Coss UI's official group-chat scenario is newly collected as one source-only family, not individual message/composer subitems. Fixed source and complete root MIT are verified; full Base UI/React/Motion/Lucide dependency licensing, native contenteditable/focus behavior, asset paths and interrupted message-state flows remain untested. Origin UI's move into the same repository is not counted as a second source.

Puck remains source-only, but its status is more precise: the official no-iframe configuration actually mounted the original minimal editor in a geometry-substituted DOM pilot with no internal iframe/network/worker calls. That does not validate the full Bento configuration, drag-and-drop, history or native browser behavior. Side-panel storage attempts and 81 runtime-package license records still need closure; its npm runtime integrity is recorded separately from the fixed source commit rather than falsely equated. Source collection continues without calling this unfinished preview complete.

## Original group-chat workflow and Pepicons · 517 previews

The gallery now contains **517 preview entries** (241 original + 276 added), with 362 candidate records and 86 source-only records excluded. Coss group-chat is restored from an existing source-only candidate, and Pepicons adds one selected icon series. Three new source-only records are not previews. Existing icon entries and all cover files/mappings remain untouched; 13 current icon entry points include two previously identified overlaps deliberately deferred until Grok's cover batch is complete.

- **Coss UI group chat** retains 55 original source modules for the conversation drawer, replies, reactions, receipts, members, mention input, failed-message retry and simulated message states. Only three original files carry minimal patches: disabled clipboard UI, safe removal of zero-distance reply exits, and preventing an old canceled reply's exit from clearing a newer reply. Five branches and independent production/rapid-reply/early-exit checks passed with explicit layout/font/viewport substitutes. All roles, member changes and deliveries are local fixtures, not real accounts or messages. Clipboard copy/cut/paste is visibly disabled; ordinary typing and mentions remain. Complete notices cover 19 runtime packages and Tailwind, including Lucide ISC/Feather MIT and CVA Apache-2.0. Native pixels, IME, touch, all 15 scenarios and every permission combination are not claimed as tested.
- **Pepicons Exodus selection** contains 113 original base shapes in pencil/pop/print, 339 SVGs total, counted as one series and not the complete 1,275-base collection. All selected assets match the correctly resolved official v3.1.6 commit; the npm metadata's older gitHead is explicitly not used as release provenance. Original CyCraft graphics retain complete CC BY 4.0 attribution terms; the authored browser shell is separately MIT. Every original SVG text/tree/attribute, all five pages, original categories/search/style switching and cleanup were tested. No rendered-pixel or sandbox-popup success is claimed.

New source-only research includes **BlockNote's block-document/comments workspace** (selected MPL-2.0 core/react/mantine, explicitly excluding GPL/commercial XL packages), **Coss event-type ordering/undo/visibility** (not a complete booking/create product), and **React Arborist's controlled budget hierarchy** (a functional reserve with plain styling, not an aesthetic priority). Their fixed source and complete applicable root licenses were read; no runtime/remote collaboration, financial account, image or complete dependency audit is implied. The official BlockNote collaboration auth endpoint was read in source but not contacted or run. These candidates remain outside the runnable count.

All real browser visual acceptance remains pending where marked. Static covers, lazy detail previews and current sandbox/CSP are unchanged; all cover work remains with Grok.

## Original wallet interaction · 518 previews

The gallery now contains **518 preview entries** (241 original +277 added), with 364 candidate records and 87 source-only records excluded. One existing SmoothUI wallet-card family is restored, not three entries for its three fictional accounts. Existing 13 icon entry points and all covers remain untouched.

Original depth/material, text-SVG grain, spring-driven sheen, balance masking, keyboard account selection/focus and member overflow remain. All balances, last-four digits and members are fictional local fixtures; no account connection, real card input or payment action exists. The generic network shape is used instead of brand marks. Only pointer-cancel reset is patched in the original component. Normal/reduced/production tests and lifecycle interruption checks pass with mocked geometry, not native pixel acceptance. Full 11 runtime-package and Tailwind notices preserve MIT/ISC/Apache-2.0 obligations.

New source-only candidates are DMN-js decision-rule tables (custom bpmn.io license with mandatory visible watermark, not plain MIT) and Diff2Html multi-file patch reading (root MIT; runtime/embedded icon closure unfinished). Their exact source and full root licenses are reviewed; no remote parsing, complete dependency audit or runnable preview is claimed. They do not count toward 518.

All cover work remains with Grok; existing icon overlaps remain deferred. Real browser visual acceptance is still pending where marked.

## Fluent professional color icons · 519 previews

The gallery contains **519 preview entries** (241 original + 278 added), with 365 candidates and 87 source-only records excluded. Fluent UI System Icons Color contributes one selected series: 100 original 24px base icons, not 100 UI entries, not the complete collection and not Fluent Emoji. There are now 14 icon entry points representing 12 distinct design series; two older overlaps remain intentionally deferred.

Fixed Microsoft source assets retain their complete MIT license and upstream NOTICE. All 100 SVGs were independently re-fetched at the exact commit and matched byte-for-byte. Each original UTF-8 SVG is displayed in an isolated image data URI, preserving its gradients/filter and internal IDs without changing geometry or colors. This is original text-vector content, not a screenshot or binary packaging. All 416 local references resolve within their original SVG; no script, foreignObject, external image/resource or href is present.

Search, three explicitly curated categories, five pages, details and readonly source use a dependency-free authored browser shell. All 100 grid/detail source values decode to the exact original text; repeated state changes and detached old nodes after exit were checked. These DOM/source checks do not establish native image decoding, gradients/filter rendering or pixel acceptance. All covers remain with Grok, and existing icon entries remain unchanged.

## Multi-file review and organic character · 521 previews

The gallery contains **521 preview entries** (241 original + 280 added), with 366 candidates and 86 source-only records excluded. Two existing candidates are restored: Diff2Html multi-file patch reading and AI Canvas Curious AI. Neither files, character states nor configuration variants are counted as extra entries. The existing 14 icon entry points / 12 design series and all covers remain unchanged.

- **Diff2Html** uses the exact original TypeScript parser/renderers/UI and 19 build-time-precompiled Mustache templates, preserving the official demo layout/configuration controls. Its three-file patch is an explicit local fixture, not a fetched PR. File navigation, Viewed folding, side-by-side/line view, syntax highlighting, matching controls and synchronized scroll are real original behavior. Remote URL loading/history and custom templates are disabled; runtime Hogan cannot compile. Full MIT/BSD-3-Clause/Apache-2.0 notices include original Octicons paths, independently compared with the old 16px release. Eight production tests and independent detached-node/listener checks passed. DOM scroll state and stubbed scrollIntoView do not establish native browser layout/scroll or pixel acceptance. No code is applied, executed or submitted.
- **Curious AI** retains original Three geometry, shader source and glowing-eye pointer/idle states. It is a local visual character, not an AI backend. Complete original project, seven runtime-package and Ashima/Stefan noise-family MIT licenses are preserved. Original VERT/FRAG strings remain byte-identical; the reference noise source family is not falsely equated byte-for-byte. Initialization/render/shader/context-loss/resize failure now stops work and shows explicit unsupported status rather than eye-only success. Hidden pages unmount and visible pages reset; touch grace timers are canceled correctly. Ten modes and independent old-node/hidden/exit tests passed. Only unsupported execution uses the actual production renderer; GPU-dependent tests use an explicitly separate test renderer, never shipped in production. No GPU compilation, material pixels or native geometry acceptance is claimed. Reduced motion does not imply all gaze/rotation is static.

**Formity** is one newly collected source-only candidate for selected-item-dependent interview loops with back navigation, not another completed survey. Its fixed source and root/workspace MIT texts were read; dependencies, CSP compatibility and runtime remain unaudited. Existing Cuicui settings/action-menu, SmoothUI book/stack/popover and Cult keyboard records now state precise source-review limitations (including TODO or placeholder actions where present), without deleting their source entries or pretending to restore them.

All screenshot/cover work remains with Grok. No existing icon consolidation or sandbox/CSP expansion is included.


## Broader source collection and Formity · 522 previews / 626 collected

There are **626 collected entries**: 241 original items + 385 candidate records. Of these, **522 have previews** and **104 are source-only**. The 19 newly collected original scenes are not counted as runnable previews. One existing Formity candidate is restored. These two counts must not be conflated when tracking the 1,000 goal; existing icon overlaps are still deferred.

The new source-only batch covers six distinct CopilotKit rich-content/coauthoring scenes, ChatUI's mobile service conversation, React Avatar Editor's original crop studio, official historical shadcn Mail/Music scenes, Vercel Commerce product/cart design, two conditional Shadcn Admin scene references, two Tailwind Blog editorial pages, and Milkdown Crepe / Sandpack / Mermaid Live / Novel workspaces. Each record carries its fixed source, complete root-license evidence and explicit limitations. Root MIT or Apache-2.0 does not stand in for transitive dependency, media, trademark or service permission. Original placeholders, backend/AI/upload connections, iframe/worker/CSP constraints and semantic overlap are disclosed. The two conditional admin layouts are design references, not working settings or messaging services. No source-only record claims a hosted runnable bundle, source ZIP or screenshot.

**Formity** retains the original dark focused interview and selection-dependent loop, including required fields/ranges, back navigation that can reduce the selected languages, empty-language boundaries, the non-developer Listbox branch, local result output and restart. Fixed react/system workspace sources are built directly; production contains no expry or dynamic compiler. Original input console logging is removed, and the isolated preview releases listeners/overlays on exit. Complete notices cover 23 actual runtime packages, React Aria's Apache obligations, Prism's embedded MIT notice, Tailwind and the original workspaces. Production flow tests and independent old-form/old-popup/early-exit checks passed; native focus geometry, IME, touch and pixels remain unverified. Use only fictional local information; no model or account service is connected.

This batch is based on **76b1232**, preserving direct page jumping, normalized presentation and the bounded-live-preview changes and all 229 Grok thumbnail mappings, 503 image files and capture reports. Thus 470 preview entries retain mapped posters (241 original + 229 candidates), while 52 have no poster and follow the bounded-live behavior, at most one visible live card. No covers were created or modified. Current icon entry points remain 14, representing 12 design series with older overlaps intentionally retained.

## Bulk source round 523 · 522 previews / 654 collected

Added **28 source-only entries** after fixed-source and applicable license review. There are now **654 collected entries: 522 previews and 132 source-only records**. Preview count, 470 mapped covers, 52 posterless live-card entries and all existing icon entries are unchanged. Source records are not runnable previews or uploaded source ZIPs.

The batch covers original document revision/streaming tools, rich email/report scenes, animated presentation and cell-layout editors, Agent rich results/workspaces, and six distinct new icon series, plus the selected original application scenes recorded in the catalog. Each icon family is one source record, not each glyph/size/weight. Concepts may overlap prior sources; differences and original placeholder/backend actions are disclosed, not marketed as entirely new functionality.

Source licenses do not settle all runtime, font, media, trademark or service obligations. React Mosaic provides an original Apache declaration, with standard full terms kept separately in research rather than falsely called the original root file. Restricted Square UI, current css.gg and Unicons sources were excluded. No restricted source is republished. No new runtime, image, sandbox permission or frontend warning label was added. Covers remain with Grok, and existing icon consolidation remains deferred.
