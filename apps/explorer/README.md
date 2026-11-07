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
