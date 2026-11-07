> Public portability/disclosure revision. Original records and original checksum manifests are archived privately; this text is not the original sealed execution record and does not claim those checksums still match the public tree.

# UI-Vault 本地合同基座报告

时间：2026-11-07 20:35（Asia/Taipei）。结论：本地可运行候选已备，等待工程 review；非独立验收。

- 本地：`./`，初始化前目标不存在；独立 `main`，未动其他业务库。
- 初始基线：`417c92c4d816219c79665ff83770fa4ada511404`（仅原件 PLAN）。
- 受测源码 Git index tree：`4dd3eb8759d5e0c0fc58d9fef8700e590f78c207`。
- 受测源码 SHA256：`1a763346b9467180500c6947ba4ad797f5ac892cd6b109f9a684d94e76fc1b23`，28个文件逐项绑定在 tested-tree.json；该树不含后生成证据。
- 最终提交包含同一受测源码及证据；最终完整 SHA 请以本地 Git HEAD / 交付回复为准，避免提交内自引用。
- PLAN 原件全文已读；副本 SHA256=`5fce6e6328b8f8bf793706b7dfa9aa106b20016a846140f14564636ad93f1973`。
- GitHub 已授权账户/同名私有库/真实链接：未知，provider 查询被中断而无结果；详 remote-status.md，不能声称不存在。
- 无用户本人远端创建确认，未建远端或设置 remote；未 push/PR/merge，未改可见性。

## 实际产物

| 已做 | 证据 |
|---|---|
| TS/pnpm 最小私人工程，12来源、Watermelon双仓入口 | config/sources.json、pnpm-lock.yaml；所有权利 unknown，0/12 live 核验 |
| Source/Rights/Entry/Snapshot/File/Dependency/LicenseEvidence 单一机器 Schema 与派生类型 | packages/core/src/schema.ts、schema-export.json（生成审计副本，非权威） |
| 四权三态、逐权证据/作用域/版本约束，稳定 ID、SHA256/排序/安全目录 | packages/core/src/identity.ts、validation.ts、docs/metadata-contract.md |
| 明确虚构示例与空库、来源列出/验证命令 | fixtures/、packages/cli/ |
| 只读实文件哈希与 manifest 双向核查，拒绝符号链接/逃逸 | packages/core/src/filesystem.ts、tests/metadata.test.ts |
| LICENSE/NOTICE 保留政策，无自选开源许可证 | docs/third-party-policy.md |
| SUMS 实际文件↔清单双向核查 | scripts/evidence.mjs、tests/evidence.test.ts |

来源配置选择 JSON 代替原件建议 YAML，避免双份权威；没有另做同义元数据/权利规则。
G0 不需要额外最小索引即可 sources/validate；未抢做完整 catalog、采集器、Explorer 或 materialize。

## 本地原始验证

原始输出 raw.log（270行），绑定上述受测源码树；负控原始输出 negative-control.log。

```text
pnpm install --ignore-scripts --frozen-lockfile  EXIT_CODE=0
pnpm build                                   EXIT_CODE=0
pnpm typecheck                               EXIT_CODE=0
pnpm unit: # tests 26; # pass 26; # fail 0     EXIT_CODE=0
pnpm schema: VALID: 12 source seeds; 1 fictional entry
pnpm vault sources: sources=12; live_verified=0 (seed inventory only)
pnpm vault validate: VALID
node scripts/tested-tree.mjs verify: VERIFIED tested source: 28 files
```

真实临时 FS 覆盖成功、缺文件、孤儿、大小/内容变更、文件与目录链接、根和根祖先链接；无 mock 替代。
两个可复现故障注入：把 allowed 精确比较改为 truthy、移除 manifest 双向集合检查，
各对应测试真实失败（exit=1、not ok）；脚本 finally 恢复编译输出，最终全套26测试通过。
这证明测试能抓住两个被移除的行为，不伪称已经有历史改前/改后回归；初始空库仅有 PLAN。
所有手写源/脚本/测试文件 <500行；未跑远程 CI。
源码/文档 whitespace 检查通过；包含原始日志的全库 diff --check 会报告 TAP 输出空白行含空格，
为保留原始输出不作裁剪，最终 whitespace 检查仅排除 evidence/g0/*.log。

## SUMS 口径

`SUMS.sha256` 覆盖本库所有普通文件；唯一排除：根 `.git/`、任意 `node_modules/`、根 `dist/`、SUMS自身。
源码、配置、锁文件、文档、fixtures、raw、负控、schema导出、受测树和本报告均包含。
使用 `pnpm evidence:verify` 同时核文件集合与每项哈希，漏项/孤儿/重复记录都失败。
它不证明 node_modules 或 dist 的再分发完整性，也不等于第三方来源覆盖完整。
本报告/其他证据不写 SUMS 自身哈希，最终回复可给它的摘要。

## 风险与未覆盖

1. 0真实组件/源码采集、0 live许可审核；fixtures 的 Git SHA 和许可文本均虚构，不是第三方资产交付。
2. Git/npm/Registry 身份验证仅检查固定版本形状与本地一致性，不证明上游真实性或法律审核正确。
3. 完整三轴是声明一致性约束，不代表 G0 运行过第三方 Demo 或真实断网 materialize。
4. 只读 FS 检查需可信静止目录，有 lstat/read TOCTOU；没有实现写入/解压/资源限额/原子不可变落盘护栏。
5. 许可 evidence 路径内容须在后续按库根实读验证；本轮检查 fixture 快照内许可副本哈希与保留条件。
6. 远端账号/同名私有库未知，创建待用户本人确认；不能把 内部检索未命中或查询中断当作不存在。
7. 自有代码许可证未选；没有开放发布、托管或第三方执行授权。

## 经验与偏离

使用：SUMS和manifest双向查漏；锁不等于不可变；来源URL/许可文本/授权范围分记；三态标为工程补充。
偏离仅 JSON 替代建议 YAML、G0不另建派生索引、远端只读未完成/不创建，均按本轮范围收窄。
外部模型请求=0；未用远程执行工具、付费后备或上游项目脚本；未向其他代理/外部人发消息。
