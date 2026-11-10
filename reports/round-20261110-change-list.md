# UI-Vault 本轮最终变化清单（2026-11-10 收口）

时间：2026-11-10 16:49:03（Asia/Taipei, UTC+8）
功能分支：[`fix/browser-retest-20261110-aheng`](https://github.com/tdwhere123/UI-Vault/tree/fix/browser-retest-20261110-aheng)
冻结线上基线：`56d4a215487cf1ea3a07d1a50ae612d33e93cc3b`（https://tdwhere123.github.io/UI-Vault/ ）
目标 tip（封面映射资格）：`887f5b5ae9d83de8517b09915476e5a2bae51237`
精确 feature tip 提交链接以该分支最新提交为准；本清单与封面、取证图、待复核规则一并提交。未合并 main，未发布，没有审批发布。

## 1. 代码改动（仅候选，未真实修后回归）

代码修复提交：[`c8ba47c3`](https://github.com/tdwhere123/UI-Vault/commit/c8ba47c350e9771a7c41dd5f22c21976ff7eb119)。未放宽 CSP / sandbox / form-action。本地图库访问（127.0.0.1:18771）仍 blocked，不得用线上旧站证明已修好。后续 [`887f5b5a`](https://github.com/tdwhere123/UI-Vault/commit/887f5b5ae9d83de8517b09915476e5a2bae51237) 只做 26 张 hash 复用映射并核对已有待复核原因。

十类候选修复：

1. `formity:branching-loop-interview`：访谈 Next 改为按钮点击路径，不再走 iframe 内原生 form submit。
2. `copilotkit:resume-job-match`：简历上传控件改为 type=button 点击，不再走原生 submit。
3. `pdfjs:local-text-reader`：PDF 文本搜索不再只依赖 form submit。
4. `ai-elements prompt-input`：提示提交不再调用 requestSubmit。
5. `aicanvas:peel-corner-reveal`：揭页控件改为真实 button 并响应 click，不只依赖 onTap/onKeyDown。
6. `vis-timeline:local-task-planner`：时间线容器给予明确尺寸并延迟重绘。仍因核心呈现/影响文件变化未能线上补拍，且本就在待复核。
7. `astryx:library`：缩略图改为本地装饰 SVG fixture，不再指向 template-assets。受限：不是原模板摄影，不能称原视觉已修复；本就在待复核。
8. `uilayout:timeline-animation-index`：中文展示名改为符合官方 FAQ 目录首屏的实际内容。该项本就在待复核，封面按 FAQ 首屏以 partial 接入，未见滚动时间线动效。
9. `featured/kanban`：看板箭头点击停止父级拖拽，并允许 unset dataTransfer。
10. `fancy:elastic-line`：弹性线描边在无 pathLength=0 开场的情况下可见。影响文件已变且本就在待复核，未用线上旧站映射封面。

受限项：`astryx:library` 现缩略图是本地装饰 SVG，不是原模板摄影；`silverbullet` 与 `minipaint` 本就因核心视觉不可用而在待复核，只保留/核对原因，不是新增淘汰或删除。

## 2. 封面分区（788 是有 preview 的总数，不是缺封面数）

- 最终已映射 **773**，仍缺 **15**。
- 公式：c8ba47 已映射 470 + 同 hash 真实复用 26 + 线上实拍成功映射 277 = 773。
- 线上实拍尝试 **279** = 239 complete + 38 partial + 2 failed；成功映射 277；原 13 项排除未拍；2 项失败未映射。
- 15 缺口 = 原排除 13 + 新失败 2，与实测一致，未凑数。
- 全部已映射封面均为 `awaiting_user_review`，交互未测。不称 0 故障或全恢复。**38 张 partial 不是完整参考。**

### 26 张 hash 复用（不是新的视觉验收）

依据：在 tip `c8ba47c3` 上，当前 preview / runtime sha256 与既有 capture record 一致，且 680×440 webp 仍在该 tip；于 `887f5b5a` 映射。共享 runtime 已改变的项未复用。

- [`animata:aperture-reveal`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/animata--aperture-reveal.webp) — 光圈揭幕滚动首屏
- [`animata:product-features`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/animata--product-features.webp) — 立体商品展示首屏
- [`assistant-elements:research-report`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/assistant-elements--research-report.webp) — 研究报告生成态
- [`assistant-elements:stopped-run`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/assistant-elements--stopped-run.webp) — 中断输出富显示
- [`assistant-elements:terminal-block`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/assistant-elements--terminal-block.webp) — 逐行终端输出
- [`assistant-elements:tool-call`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/assistant-elements--tool-call.webp) — 工具调用详情
- [`assistant-elements:tool-group`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/assistant-elements--tool-group.webp) — 并行工具组
- [`assistant-elements:web-preview`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/assistant-elements--web-preview.webp) — 网页预览容器
- [`assistant-elements:web-search`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/assistant-elements--web-search.webp) — 搜索结果流
- [`blode:lighting`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/blode--lighting.webp) — Blode · 窗景透视与光影材质
- [`blode:markers`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/blode--markers.webp) — Blode · 长文阅读刻度与章节轨道
- [`cult:feature-carousel`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/cult--feature-carousel.webp) — 多层空间编排功能轮播
- [`cult:floating-panel`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/cult--floating-panel.webp) — floating-panel
- [`cult:marketing-hero-analytics`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/cult--marketing-hero-analytics.webp) — marketing-hero-analytics
- [`cult:side-panel`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/cult--side-panel.webp) — 页内上下文摘要侧栏
- [`cult:toolbar-expandable`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/cult--toolbar-expandable.webp) — toolbar-expandable
- [`excalidraw:local-board`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/excalidraw--local-board.webp) — Excalidraw · 本地草图编辑（限定功能）
- [`paperjs:boolean-material`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/paperjs--boolean-material.webp) — 布尔材质 · 交叠与负空间
- [`react-piano:local-note-keyboard`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/react-piano--local-note-keyboard.webp) — React Piano · 本地音高键盘
- [`spring:notification-hub`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/spring--notification-hub.webp) — React Spring · 消息各有寿命
- [`surveyjs:project-decision-survey`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/surveyjs--project-decision-survey.webp) — SurveyJS · 动态项目决策问卷
- [`timelinejs:research-story`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/timelinejs--research-story.webp) — TimelineJS · 研究故事时间线
- [`uilayout:scroll-animation-repeat-scroll`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/uilayout--scroll-animation-repeat-scroll.webp) — scroll-animation-repeat-scroll
- [`uilayout:scroll-animation-sticky-hero-scroll`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/uilayout--scroll-animation-sticky-hero-scroll.webp) — scroll-animation-sticky-hero-scroll
- [`uiverse:book-material`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/uiverse--book-material.webp) — 翻页书 · 阅读等待动效
- [`wgo:branching-go-study`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/wgo--branching-go-study.webp) — WGo · 分支棋谱阅读

### 15 个未处理缺口的精确原因

影响文件已变（不能用线上 56d4 映射到目标 887f5b）：

- `fancy:css-box-carousel`
- `fancy:media-between-text`
- `fancy:screensaver`（本就在待复核；只排除补拍，不是新增淘汰）
- `smoothui:image-metadata-preview`（本就在待复核）
- `smoothui:pixel-brush-canvas`（本就在待复核）

待修核心坏，且影响文件已变：

- `fancy:elastic-line`（本就在待复核）
- `astryx:library`（本就在待复核；替代 SVG 不是原模板摄影）
- `copilotkit:resume-job-match`（本就在待复核）
- `formity:branching-loop-interview`
- `vis-timeline:local-task-planner`（本就在待复核）

待修核心坏（未用线上同内容补拍）：

- `silverbullet:document-navigation-workspace`：本就在待复核（编辑区视觉空白）。不是新增淘汰，也不是删除。
- `minipaint:original-layered-paint-workspace`：本就在待复核（多次拖绘无可见笔迹）。不是新增淘汰，也不是删除。

不确定即排除，未自动淘汰：

- `blocknote:document-comments-workspace`：本就在待复核；证据不足故不列入线上可拍。

本收口新失败、未映射为正常封面（错误界面只作取证）：

- [`svar:gantt-task-editor`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/evidence/svar--gantt-task-editor.failed-preview.png)：预览内仅见 ResizeObserver 错误句，无 Gantt 主 UI。[记录](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/records/svar--gantt-task-editor.json)
- [`jsoncrack:structured-data-atlas`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/evidence/jsoncrack--structured-data-atlas.failed-preview.png)：预览内仅见 JSON viewer unavailable，无结构化数据主 UI。[记录](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/records/jsoncrack--structured-data-atlas.json)

## 3. 待复核分类：既有 36 / 先前新增 7 / 本收口新增 2

既有 36 项隔离保持不变，不是本轮新下架。`silverbullet` 与 `minipaint` 都在这 36 项里。原件条目与路由全部保留。合计 36+7+2=45。

### 先前新增 7（局部缺失的封面，仍映射为 partial）

- [`cult:illustration-fluid-rendering`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/cult--illustration-fluid-rendering.webp)：连接插画可见，主内容盒呈空白灰占位，预期标签未显示。（[记录](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/records/cult--illustration-fluid-rendering.json））
- [`cult:fluid-ai-workloads`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/cult--fluid-ai-workloads.webp)：连接插画可见，较大内容卡为空白灰占位，工作负载细节未显示。（[记录](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/records/cult--fluid-ai-workloads.json））
- [`cult:illustration-graph`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/cult--illustration-graph.webp)：仅见中央蓝线，预期坐标轴、标签与数值均未显示。（[记录](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/records/cult--illustration-graph.json））
- [`cult:hero-heatmap`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/cult--hero-heatmap.webp)：首屏文案可见，预期 WebGL2 热力图形区域空白，未见明确失败提示。不把空白 WebGL 写成已证实的设备或引擎损坏。（[记录](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/records/cult--hero-heatmap.json））
- [`cult:hero-liquid-metal`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/cult--hero-liquid-metal.webp)：首屏文案与 CTA 可见，预期 WebGL2 液态金属图形区域空白，未见明确失败提示。不把空白 WebGL 写成已证实的设备或引擎损坏。（[记录](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/records/cult--hero-liquid-metal.json））
- [`zulip:topic-organized-collaboration`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/zulip--topic-organized-collaboration.webp)：页头与话题控件可见并显示 6 条消息计数，大面积会话/消息区空白。（[记录](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/records/zulip--topic-organized-collaboration.json））
- [`astryx-core:stepper`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/apps/atlas-sample/thumbnails/astryx-core--stepper.webp)：三步标签与控件可见，各步骤标记显示为 NaN 而非有效序号。（[记录](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/records/astryx-core--stepper.json））

### 本收口实际新增 2（此环境预览失败，未做正常封面）

- [`svar:gantt-task-editor`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/evidence/svar--gantt-task-editor.failed-preview.png)：#demo 几乎为空白白底，仅见「预览发生错误：ResizeObserver loop completed with undelivered notifications.」，未见 Gantt 主界面。 仅记录此环境预览失败，根因未知。不能凭单条 ResizeObserver 信息判定上游源码已损坏。错误界面原截图只作取证，不作为正常 UI 封面，不用库存旧图充数。（[记录](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/records/svar--gantt-task-editor.json））
- [`jsoncrack:structured-data-atlas`](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/evidence/jsoncrack--structured-data-atlas.failed-preview.png)：#demo 为深色空窗，仅见 “JSON viewer unavailable. Close and reopen.” 及关闭/重开控件，未见结构化数据图谱或编辑主界面。 仅记录此环境预览失败，根因未知。不能凭单条错误文案判定上游源码已损坏。错误界面原截图只作取证，不作为正常 UI 封面，不用库存旧图充数。（[记录](https://github.com/tdwhere123/UI-Vault/blob/fix/browser-retest-20261110-aheng/reports/thumbnail-capture/records/jsoncrack--structured-data-atlas.json））

未因需用户输入的空初态一刀切淘汰。batch06 的 7 张 partial 均有实际 UI 参考内容并已映射：

- `svgfilter:node-material-editor`：节点图可见，结果窗空白并提示连接到 Result；需用户连接的空初态，不算功能故障，未淘汰。
- `wavedrom:timing-diagram-editor`：编辑器与波形可见，但顶端 clk 轨迹在边界被裁切。
- `piskel:pixel-animation-workspace`：编辑控件可见，32×32 画布为空且未加载示例；空初态不算功能故障。本就在待复核，未新增淘汰。
- `tfplayground:decision-boundary-training`：网络、数据集与决策边界图可见，但本视口控件行标签重叠。
- `uilayout:timeline-animation-index`：首屏为 FAQ 目录与宣传条，未见滚动时间线动效。本就在待复核，未新增淘汰。
- `react-page:multilingual-cell-editor`：外壳与语言选择可见，中央画布无单元格；空初态不算功能故障。本就在待复核，未新增淘汰。
- `drawdb:relational-schema-workspace`：外壳与五表侧栏可见，画布大部分在视口外（仅裁到 blog_posts），logo 损坏，图库提示部分资源未载入。保留为 partial 范围，未一刀切淘汰。

## 4. 不做的事

- 不发布、不合并 main、没有审批发布。
- 不再补测、重拍、扩大修复、新开服务或改 preview/runtime/CSP。
- 不把 contain 拟合、空初态、单条日志或代码测试写成功能已修好或源码已坏。
- 本轮此处收口，无自动下一步。
