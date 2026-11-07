> Public portability/disclosure revision. Original records and original checksum manifests are archived privately; this text is not the original sealed execution record and does not claim those checksums still match the public tree.

# Local Explorer

只读浏览根目录 `catalog.json`。Node 侧调用 `@ui-vault/core` 的 `validateCatalog/searchCatalog`，源码通过 `packages/restore` 的 `readSnapshotFile` 完整核验后，以 UTF-8 纯文本展示；没有第三方组件预览、执行、源码导出或审批系统。

## 复现

在仓库根目录，使用现有依赖环境（Node 22–24，pnpm 10.34.6）：

```sh
pnpm build
pnpm typecheck
node --test apps/explorer/test/*.test.mjs
node apps/explorer/test/catalog-smoke.mjs
pnpm --dir apps/explorer start
```

浏览器打开 `http://127.0.0.1:4173`。服务仅绑定 IPv4 loopback，固定静态资源路由，不公开 archive 文件目录。搜索、分类、来源过滤均由共用 catalog 搜索入口处理。第三方源码使用 `textContent`；外部链接仅显式点击后打开，不嵌入图片/演示/iframe。NUL 或非法 UTF-8 文件拒绝显示。

`source` 与 `reference` 同时搜索；后者醒目标记“审美/交互参考”，展示交互/布局/配色/字体/动效、用途与推测属性，不显示源码选择器。许可证为登记信息，不把 allowed 或 files 数量解释为法律复核/恢复成功。

## 初版证据与边界（bd2435c）

- 开工基线：`c3f9fd5b8f2ba683d4dee004235265bd8e9c53c9`。仅本目录属于本次前端改动；集成依赖当时尚未全部提交，具体输入见 `evidence/dependency-SHA256SUMS`，不是独立可运行的完整仓库交付。
- `evidence/test-raw.txt`：构建、类型检查、语法检查、12项自测（renderer DOM stub、真实HTTP、合成快照真实FS）。包括参考分标/推测提示/无源码入口、纯文本、查询失败、竞态、跨来源拒绝、完整快照篡改失败与修复恢复。
- 同日志的真实目录冒烟：catalog SHA256 `6e65ac00f2bcb300d7893a106f38ecb4746ee755e78d628bcae99676d6165689`；两来源20份 source 快照，共142个文件，经真实HTTP读取后独立对比登记 SHA256。不是恢复物化或第三方组件可运行性验收。
- `catalog-smoke.mjs` 不更改真实快照、不访问源站；合成数据只用于回归，不计真实组件数量。实际源码/许可采集主责为领域，恢复与安全校验主责为执行与安全。
- NOT_VERIFIED：浏览器实机布局、键盘/读屏、窄屏、截图；没有运行第三方组件或安装其依赖。reference 当前真实目录中无样本，显示/拒绝仅经合成数据验证。首次新增 Explorer，无已有版本的改前失败日志，不主张已完成历史缺陷的红绿回归。
- 元数据每次请求重读；分类/来源选项初始化后需刷新页面更新。并发修改 catalog/快照可返回422，修复后可重试；不缓存为成功缺席。错误统一隐藏本地绝对路径。
- 0模型请求；未push/未合并。集成状态以当前提交及构建结果为准。

## 分类筛选补充

补充开工 HEAD 为 `6f39ff6734d446fb42547dd7b7ab697bbb7fc84c`，前端行为基线为 `bd2435c70d71dee3b87da43230b747fe58f7970a`。只消费 core 新契约，不改分类登记或研究材料。

- 来源、用途/category、多语言标签、依赖、框架、语言、样式、类型、许可、可取用状态可组合筛选。选项只来自 catalog 已登记值；没有从依赖推断 React 或从文件名推断语言。
- 技术维度缺省/null 显示“未知（未登记）”；显式 `[]` 显示“明确无”。技术筛选未知对应 core 的 null，不等同明确空。
- `/api/components` 将 querystring 委托 `searchCatalog` 校验/查询。技术维度的 HTTP 参数为 JSON 值，如 `framework=null` 或 `framework=%22React%22`；未提供表示不筛选。重复参数或未支持的字段拒绝，不静默忽略。
- `/api/catalog` 和 `/api/components` 的组件只是 API 投影，额外 `availability` 来自 `getComponentAvailability`；`restoreStatus` 固定 `not_checked`。它们不写回 catalog。源码读取仍使用未经投影的 catalog。
- 列表/详情带 sourceId，避免跨源重名。详情展示实际登记路径、类型、许可、commit、依赖、技术栈以及“本次恢复状态：未实测 / not_checked”；源码读取成功也不变成恢复成功。
- 最新原始日志为 `evidence/classification/after-raw.txt`：build/typecheck、14/14 自测及真实20快照/142文件 HTTP/hash 复验、6条实际参考拒绝源码读取。`before-raw.txt` 是实现前新增测试2项失败；`baseline-final-tests-raw.txt` 用冻结旧 Explorer 加同一最终测试重放，3项预期失败（包含既有列表期望新增来源/状态的更新）。未替换真实快照或执行上游源码。
- 当前证据输入钉在 `evidence/classification/dependency-SHA256SUMS`；测试后再次校验，避免并发输入漂移。该 core/CLI 补充尚未在本提交中冻结，不声称前端提交单独可构建。
- NOT_VERIFIED 仍包括浏览器实机、键盘/读屏/窄屏；新增技术栈/参考显示由合成数据验证，最新真实 catalog 含20source及6reference（4个登记来源，其中2个提供源码）；未登记的技术栈不补猜。根目录 catalog 更新后需刷新筛选选项。

并发记录：一次测试中 catalog 由20source更新为20source+6reference，依赖SUMS复核按预期报不一致，原始输出保留在 `evidence/classification/concurrent-catalog-change-raw.txt`；最终结果以重新钉定输入并复跑的 `after-raw.txt` 为准。


## 公开静态审核目录（仅本地产物，不是发布授权）

从干净候选 SHA 编译后，在仓库外新建空输出目录：

```sh
pnpm build
node apps/explorer/static-export.mjs /absolute/new/output /UI-Vault/
```

支持 `/` 与以 `/` 起止的子目录；页面/模块/数据采用相对 URL，子目录入口须带尾斜杠（托管方重定向未核）。复用 Explorer 的 HTML、CSS、筛选布局；静态 renderer 只呈现公开字段，不打包本地源码阅读器。没有自动部署 workflow，无下载/源码 API；源码入口明确 disabled。禁止把仓库根、普通 dist、archive 或本地 Explorer 原 API 一起上传。

### 安全边界与语义权威

- `public-review.json` 是逐项审定字段的精确锁，不是完整 catalog。投影显式挑字段，输出必须与审定值完全一致；新增记录、名称、分类、依赖、技术栈或许可/availability 变化须重新审查该锁，不能自动“批准”。任意内部说明、限制、证据路径、快照文件/哈希、截图、上游演示链接均不输出。审定公开链接仅四个上游入口，不使用组件原 URL（其可能为截图或 Demo）；不是允许任意外链。
- 公开字段：sources 的 id/name/upstreamUrl；components 的 id/sourceId/name/category/tags/dependencies/assetKind/licenseStatus/availability/restoreStatus/upstreamUrl，以及原有可选 techStack。所有字段及嵌套字段拒绝未知键，所有文字另经安全形状检查。精确锁才是任意文字的发布审核边界；敏感词扫描不是授权证明。
- `getComponentAvailability` 仍是唯一登记状态派生函数。source_snapshot 仅表示登记了快照，不代表已恢复；全体 restoreStatus 固定 not_checked。未知/Pro 留可见警示。公开查询视图不满足 CatalogSchema，绝不可作为恢复、许可、归档输入。
- `query-view.ts` 是唯一筛选谓词与公共可搜索字段构造；查询验证器从原 CatalogQuerySchema 生成（含 AJV MIT 运行时许可），无另一套查询校验规则。生成命令：`node --input-type=module -e "import {writeFileSync} from 'node:fs'; import {compileQueryValidator} from './apps/explorer/compile-query-validator.mjs'; writeFileSync('apps/explorer/query-validator.mjs',compileQueryValidator())"`。测试逐字节核验生成结果，避免漂移；浏览器不带 AJV 整包或完整 CatalogSchema。
- **检索范围有意不同**：内部 searchCatalog 仍先完整校验，并保留 reference publicUrl、交互、视觉、用途、实现说明的全文检索。公开页仅搜索审定 id/name/sourceId/category/tags、依赖名及显式技术栈；内部 reference 文字不可检出。精确筛选条件及 undefined/null/[] 语义共用同一谓词；缺省或子字段 null 为未知，[] 为明确空，不从名字/依赖推断。没有接受原 schema 不支持的 techStack 整对象 null。

### 全产物审核与版本

导出仅九个固定文件：index.html、style.css、app.js、public-catalog.js、query-view.js、query-validator.js、catalog.json、version.json、manifest.json。没有 source map、图片、截图、完整输入 catalog、测试、源组件或内部路径。version.json 标记完整候选 codeSha、输入和审定锁 SHA256、basePath 与 worktreeDirty。dirty 构建只供工程自测，不能作为冻结送审产物。

manifest.json 记录其余八个文件的长度与 SHA256（不能循环哈希自身）；导出 stdout 审核报告另列全部九个文件，包括 manifest 自身 SHA256。`auditStatic(output)` 枚举全部目录项，拒额外文件、目录和符号链接，逐字节重建比对固定输入，再核 JSON 字段与 manifest，不只是对 manifest 自洽或整串敏感词检查。**输入编译文件须先通过 build/测试和 review**；字节一致不替代代码审核、许可或上线批准。

本地真实 HTTP 测试覆盖根与子目录页面/资产读取、查询数据与 20 source + 6 reference、不可用端点返回404及哈希核对；其 HTTP server 仅为工程测试夹具，不配置正式托管/响应头。Node 查询与 DOM 测试不冒充浏览器实机。托管资格、公开上线、CDN/响应头、缓存/回滚与浏览器实机视觉仍须独立验证。源仓库保持 private，无 Pages 启用或付费操作。
