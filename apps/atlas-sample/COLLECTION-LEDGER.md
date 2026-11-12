# 本线采集分账（F1/F2/F8）

记录时区：Asia/Taipei（UTC+8）。基线 `56d4a215487cf1ea3a07d1a50ae612d33e93cc3b`。工程 review 冻结 tip 为 `7be468859b88b31926148cf6f5775a75276f0ce6`。本文件在共因修复后更新，不把旧日志改名当作新绑定。

## 四项计数

| 分账 | 数量 | 说明 |
| --- | ---: | --- |
| 新增接站 | 554 | 本线写入 `candidate-catalog.json` 的新 ID，不等于新原件，更不是已核独立 UI |
| 旧源补接 | 22 | 基线已有源码包仅补目录接站（Animata 10、Kokonut 4、Magic UI 2、Motion 5、HyperUI 1），不计本轮新增原件 |
| 重复排除 | 1 | `oxbow:signin-password` 与 `oxbow:signin-magic-link` 字节相同，只保留一个原件身份；文件与目录条目均保留 |
| 闭包缺口 / 新原件身份上限 | 531 | 554 − 22 − 1，仅为身份上限，不是已核独立或闭包合格数 |

已核新增独立 UI = 40，仅下列具名限定范围可计：

- `mantine-ui:table-sort`：完整三列本地搜索与 Name 列双向排序；16 行演示数据。不包括真实后台、其他列全部排序、完整无障碍或当前提交整矩阵复验。源码对照提交 `3695f76d56133051c9bd7bdacb05fddcfaf0c9d2`。
- `mantine-ui:double-navbar`：完整常驻双轨导航；Analytics 一级与 Clients 二级本地选中；右侧空白。不包括真实后台导航业务或当前提交整矩阵复验。源码对照提交 `3695f76d56133051c9bd7bdacb05fddcfaf0c9d2`。
- `mantine-ui:footer-links`：完整静态多栏页脚；展示与普通 Features 悬停。不包括点击导航、社交业务或当前提交整矩阵复验。源码对照提交 `3695f76d56133051c9bd7bdacb05fddcfaf0c9d2`。
- `daisyui:accordion`：完整原生 radio 三问问答组件；保持一项选中。不包括第三项未在原验收中点选、移动或完整无障碍、或当前提交整矩阵复验。源码对照提交 `e5f0ee43bd1957e70bbb6e012270e54d80e3c618`。不把 57c9 截图会话当作 e5 新跑。
- `hyperui:application-modals`：完整居中原生 dialog；灰遮罩与有界关闭（Escape 与点遮罩）。不包括完整业务矩阵、键盘无障碍全路径，也不因本条计入而关闭 Chart.js 等第三方权利或当前提交整矩阵复验。源码对照提交 `e5f0ee43bd1957e70bbb6e012270e54d80e3c618`。

以上原5条保持原证据且不迁库存。本次仅追加下列35项具名限定资格；40项资格与276库存不是同一本账，35项同时归入既有库存用途分类。7个通知包与新图本身不升为可计；封面账=0，真实浏览器整矩阵=0。


## 本次具名限定范围（其余20项不计）

- `mantine-ui:actions-grid`：限定范围：完整 3×3 Services，Credit cards 只 hover。
- `mantine-ui:card-gradient`：限定范围：渐变卡完整，只 hover。
- `mantine-ui:cookies-banner`：限定范围：完整面板/按钮仅 hover，不是同意/偏好保存。
- `mantine-ui:features-grid`：限定范围：标题+五卡以滚动帧合看；单底帧封面不含标题。Pokemon 占位非业务。无核心动作。
- `mantine-ui:features-images`：限定范围：四职业 SVG 与占位文案展示，不称真实营销。无核心动作。
- `mantine-ui:features-title`：限定范围：标题/四图标/CTA 展示；不签 CTA 业务，不点击。
- `mantine-ui:footer-centered`：限定范围：Logo/五文字链/三社交展示与 hover，非外链业务。
- `mantine-ui:header-menu`：限定范围：Learn hover 展开四子项；子项未点（不要求点）。
- `mantine-ui:header-simple`：限定范围：新07:57:26–07:58:55台北、起末version.png示dde/dirtyfalse的观察窗口：Features蓝底→Learn蓝底→Features蓝底，正常详情中的compose iframe。URL/frame about:blank不变是观察者记录，PNG自身没有地址栏/工具输出；未测外链业务/窄屏。旧混版Learn版本仍Unknown。
- `mantine-ui:hero-title`：限定范围：标题、说明、双 CTA 在滚动后单帧完整；未点击、不跟 GitHub 外链；不与残缺首帧拼接。
- `mantine-ui:navbar-minimal`：限定范围：Tooltip/Calendar 本地 active 与底部项悬停可见，未点底控件（不要求点 Logout）。
- `mantine-ui:navbar-segmented`：限定范围：Account→System 七项列表切换，本地状态。
- `mantine-ui:nothing-found-background`：限定范围：404 背景/标题/说明/CTA 完整，只 hover 未导航。
- `mantine-ui:progress-card`：限定范围：月目标与进度条静态完整。
- `mantine-ui:authentication-title`：限定范围：空占位完整；中态勾选 Remember me，后态恢复；未登录/注册。
- `mantine-ui:contact-us`：限定范围：联系信息与空表单静态全含；空白占位不补字，不联系、不发送。
- `mantine-ui:forgot-password`：限定范围：静态+hover；空邮箱占位，不编已填/发信/重置成功。
- `mantine-ui:get-in-touch-simple`：限定范围：四空字段与 Send 完整展示；禁止 submit/Enter/校验动作。
- `mantine-ui:stats-card`：限定范围：游泳挑战卡数字与进度静态完整。
- `mantine-ui:stats-controls`：限定范围：初态封面只含 24 October；24→25→24 三态在观察报告，不在封面。复用报告，不因封面未含三态重跑。
- `mantine-ui:stats-grid`：限定范围：四统计卡正负/箭头完整；仅静态演示非查询。
- `mantine-ui:stats-group`：限定范围：三段组静态示例文字完整；无核心动作。
- `mantine-ui:stats-ring`：限定范围：三环统计静态完整。
- `mantine-ui:stats-ring-card`：限定范围：1887/447/76/81% 初态静态完整；不把算术合计当屏幕外事实；无核心动作。
- `mantine-ui:stats-segments`：限定范围：分段占比静态完整。
- `mantine-ui:switches-card`：限定范围：Messages OFF→ON→OFF，非持久化保存。
- `mantine-ui:dnd-list`：限定范围：C-N-Y-Ba-Ce→N-C-Y-Ba-Ce→原序；只改本地次序。
- `mantine-ui:dnd-table`：限定范围：同上，只改本地次序。
- `mantine-ui:table-of-contents-floating`：限定范围：干净静图未点击。旧 Usage 动作图保留，blob 全等下复用；不把新静帧当动作证书。
- `mantine-ui:table-reviews`：限定范围：五列六行与比例静态齐；不签链接/查询/排序。干净图只去遮挡，不补动作。
- `mantine-ui:table-scroll-area`：限定范围：有限滚动视口；已签头部同位置及更多行/恢复，不拼接 30 行。
- `hyperui:marketing-footers`：限定范围：主帧无底部 copyright（上下帧合看但不拼接）。Sign Up 禁止 submit。静态/空输入即可，不造订阅业务。
- `hyperui:application-stats`：限定范围：镜像演示金额静态完整；不是实账。
- `hyperui:application-empty-states`：限定范围：空状态与 CTA 文案齐；无创建/链接动作结果，不造创建业务。
- `daisyui:steps`：限定范围：四步骤为固定展示，不是可用向导或购买结果。无核心动作。

所有条目的排除范围、源码对照与证据摘要见 `COLLECTION-LEDGER.json`，该文件是计数唯一权威。候选原件目录保留，主图鉴库存优先去重；不迁旧5、不授精选、不改788分类规则。余20的三档为有条件通过4/不通过16；事实为partial5/合并非代表11/身份Unknown4，不折成新增资格。

## 本轮不做什么

禁止在具名限定资格以外扩数。不碰阿衡树，不 push / 发布 / 网络探针，不物理删除原件或条目，不用改几个字的已有源码重新计数。

## 本轮已修的闭包（仍非视觉验收）

- Kokonut 新包改为真实单项入口，并保留完整 Vite/lock/UI 依赖。
- Animata 新包补齐构建工程、官方 story 挂载与内部 CSS/模块源码，不只提供 compiled runtime。
- 预览适配实际消费 `window.__atlasAssets`（含查询后缀），不改 CSP。
- Tabler 不透明沙箱 `localStorage` 走单一内存降级适配，不加 `allow-same-origin`，不把平台判成功。
- 实际编译依赖保存完整原许可证；字体/图/商标 Unknown 保留。
- 21 个旧源补接批次补了与包/源码/运行绑定的真实 manifest。
