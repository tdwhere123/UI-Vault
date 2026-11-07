> Public portability/disclosure revision. Original records and original checksum manifests are archived privately; this text is not the original sealed execution record and does not claim those checksums still match the public tree.

# 元数据合同批次复核报告

结论：本地修订候选已具备复核证据，未冻结合同、未独立验收。
时间：2026-11-07 20:50（Asia/Taipei）。
路径：./；同一main，无远端mutation，未碰其他项目。
基线：0bd1e87ea5506b2d6194781f8d503f6dd713d3ef。
最终完整SHA以本地HEAD及交付回复为准，报告内不自引用最终提交。
受测源码SHA256：537e43d9546844ef48ce29455626cd554f1b5804cfc37284858df1ad317b02a1（34文件，tested-tree.json）。
提交前index tree：1daa2138ed3e9dd3af630eef765a02fcf03b608d；此Git树包含保留的历史g0证据，但不含本轮新增证据。
日志和源码树双向定位见bindings.json，含改前/改后日志、树清单、原红测试的独立SHA256。

## 自己复核后的逐项结论

| 事项 | 原行为实证与判断 | 本地闭合 |
|---|---|---|
| 附条件许可被无条件授权 | 确认：旧authorize忽略obligations，真实行为红true≠false | rights-policy统一scope/逐权conditionRefs；法律allowed与readiness分离，履约unknown/unsatisfied/satisfied+实proof；条件可满足后ready，不一概法律denied |
| 发现状态与四权矛盾绕过 | 确认：旧pro_only仍可集合导出；同一旧分支也不读restricted/license_unknown | 三类状态必须有具right/scope的restrictions；非法矛盾图拒绝；具体操作只聚合相应权利/文件范围，商用限制不误封私人归档 |
| 原路径映射不可恢复 | 确认：originalPath重复和路径前缀冲突旧validator不抛错 | file-mapping主责同时拒绝path/originalPath重名与文件/目录前缀冲突，保留双向manifest检查 |
| 最小派生index | 确认缺失，归为新API合同缺口，不冒充编译失败 | projectCatalog + CLI index读唯一JSON并调用core；空库12来源、fixture样本均两次字节相同；readiness固定not_checked而非可导出承诺 |
| Preview轴 | 确认缺失，独立于旧行为漏洞 | PreviewSchema纳入Snapshot，PLAN五状态、位置/时间/原因校验，与归档/恢复/离线运行分别保留 |
| LicenseEvidence.textPath实读 | 确认：旧authorize忽略篡改/缺文件/符号链接，真实FS红 | verifyLicenseEvidence按vault根实读、哈希、普通文件/链接/根逃逸检查；authorize复用并校验快照真实字节及履约proof，scope仍走唯一全图校验 |
| 历史SUMS与当前全库矛盾 | 确认：新增文件后旧“当前全库”scope失效 | 新current scope覆盖当前全库（排除各SUMS自身）；historical按完整Git提交树双向查漏/哈希，不声称旧SUMS覆盖当前checkout |

## 红绿与原始输出

before.log：旧源+新增测试先build成功，再7测试中0通过/7失败（exit=1）。
其中6项为实际授权/验证行为错误；1项明确NEW_CONTRACT_API缺失，非TypeScript编译失败。
原7测试文本保存在before-tests.ts，SHA与before-tree记录完全相同；当前测试文件原7项的文本未改，只追加后续范围/履约/投影等用例。
fixture/schema/API显式迁移到v2；测试桥仅观察旧boolean与新结构化结果，不在生产保留旧授权旁路。

after.log：原7项全绿；针对性文件16/16绿；全套tests44/pass44/fail0；build/typecheck/schema EXIT_CODE=0。
negative-control.log：移除法律三态守卫、移除manifest集合守卫各产生预期断言失败，finally恢复；最终全套在恢复后的实现上通过。
类型/输入边界、条件refs遗漏、错right证据、未知/未满足/满足/缺proof/坏proof、错scope、局部商用限制、合法归档均有正反例。
真实FS涵盖许可证据成功、缺失、篡改、穿越、外链接、链接根；快照FS仍有成功/失败/孤儿/缺失/链接覆盖。
完整clone/采集/恢复/第三方运行未发生，不用fixture声称真实第三方验收。

## 证据scope

新SUMS在evidence/metadata-contract/SUMS.sha256；scope.json为固定v1 current-project范围。
覆盖当前全库普通文件（含历史g0原文件、新红绿日志/绑定/报告/schema/projection），排除根.git、所有node_modules、根dist和任何SUMS.sha256。
核验必须双向查实际集合和每项字节哈希，不能仅sha256sum -c。scope擅加排除项会拒绝；历史写入g0入口会拒绝。
当前SUMS本身和旧SUMS本身不在新清单内，避免互相/自身引用；旧SUMS字节仍保留且单独按历史提交核验。
旧g0固定基线核验通过34文件，且git diff baseline -- evidence/g0为空；旧报告不回写当前事实。

```sh
pnpm evidence:verify
node scripts/evidence.mjs historical 0bd1e87ea5506b2d6194781f8d503f6dd713d3ef evidence/g0/SUMS.sha256
node scripts/tested-tree.mjs verify
pnpm --silent vault index
```

所有手写源/脚本/测试<500行；validateMetadata约73行，经复核为纯、顺序的跨图一致性验证，无副作用混杂，保留内聚；未引入utils目录。
原始TAP空白行可能含空格，最终whitespace检查排除evidence/**/*.log，不裁剪raw。生成Schema审计副本不受手写行数门槛，不是第二权威。

## 保留缺口与风险

- 仍待工程组长review及后续独立验收；此处不重新冻结合同。
- receipts是受信审查人的履约声明，字节哈希并不证明法律判断正确、身份真实性或真正完成线下义务；执行器授权/审计仍待其主责。
- 只读FS需要可信静止根，有TOCTOU；未实现并发恶意写入防护、解压/原子写入、大小预算、采集器、完整搜索/Explorer或真实断网物化。
- Preview只验证声明，不代表执行了Demo；版本形状不证明上游SHA/npm/Registry真实性。
- 来源12/12种子全部unknown、0 live许可核验；fixtures始终标虚构（测试仅在内存切换以测生产门槛）。
- 无远端创建/push/PR/merge/权限变更；账户/同名私有库仍未知，未新增外部查询或读凭据。
- 模型请求0，未用远程执行工具/上游脚本，未向其他人发消息；PLAN字节未改。
