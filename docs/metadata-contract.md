# 元数据合同 v2（工程复核候选，未冻结）

## 权威与版本

`schema.ts` 的 TypeBox 值为唯一机器结构 Schema；TS `Static` 从中派生。
枚举类型由同一值数组的 `T[number]` 派生，无第二份手写元数据类型。
`validation.ts` 持有全图一致性；`rights-policy.ts` 持有证据范围、条件和法律聚合；
`authorization.ts` 持有操作就绪和真实证据/履约校验。消费者只能用公共入口，不另写同义许可规则。
`identity.ts` 持有稳定ID、路径和摘要材料，`file-mapping.ts` 持有可恢复路径映射约束。
JSON/JSONL 是事实权威，catalog/Explorer 只派生。Source唯一配置是 `config/sources.json`，
替代PLAN建议YAML；`inventory/metadata.json` 不允许 sources 字段，由 `assembleMetadata` 严格装配，避免重复权威。

v2 是未冻结合同的显式修订：强制四权的scope/conditionRefs、Entry.restrictions、Snapshot.preview、
LicenseEvidence.applicableRights。v1 数据不会自动补成允许；历史 evidence/g0 不迁移、不改写。
生产尚无真实采集数据；本轮只更新现有种子与明确虚构 fixtures。PLAN.md 保持原哈希。

| 对象 | 必要语义 |
|---|---|
| Source | sourceId、website、entrypoints、priority、riskGroup、lastCheckedAt、checkStatus、rights |
| Entry | §4身份/分类/标签/描述/框架/exodusUseCases；entryUrl、status、rights、restrictions |
| Snapshot | componentId、snapshotId、upstream、fetchedAt、provenanceUrl、rights、archive、offline_runtime_complete、preview、files、dependencies |
| File | path/originalPath/type/size/sha256/internalReferences/rights |
| Dependency | internal/asset已保存路径；npm固定name/version/integrity/peerConstraint；remote/unresolved原因 |
| LicenseEvidence | evidenceId/sourceUrl/retrievedAt/upstreamVersion/scope/textPath/sha256/review/spdx/applicableRights/obligations/notices |

## 法律许可与操作就绪分离

只用§5.4四字段：can_archive_source、can_modify_and_use、can_use_commercially、can_redistribute_component_collection。
每权 `{state: allowed|denied|unknown, scope, evidenceRefs, conditionRefs}`。
三态是工程补充，不声称PLAN原文定义过此类型；unknown≠false≠true，不用truthy或默认值折叠。
allowed/denied有证据；unknown可无证据。决策scope须与所属Source/Entry/Snapshot/File精确一致。
证据范围可更宽，不能更窄或属于另一对象；用于Snapshot/File的upstreamVersion必须匹配snapshotId。

LicenseEvidence中的obligations是该审查记录的条件原文，不是自动已履行；applicableRights明确其审查针对哪些权利。
同一许可证原文字节可对应不同具名审查记录（不同权利、范围、条款解释），不能用一个再分发条件推定私人归档也被禁止。
决策引用只允许覆盖该权利的证据。每个条件ID=`SHA256(UTF8("obligation\0"+evidenceId+"\0"+obligationText))`。
\0是NUL字节；conditionRefs必须精确等于被引用证据全部obligations的条件ID集合，遗漏/虚构均拒绝。
条件文字只有证据一处权威；四权引用条件ID，不另复制一套判断。
Source权利是来源审查摘要，不代替具体对象许可；具体法律判断聚合Entry+Snapshot+所有File和适用restrictions。

- `assessLegalPermission`：全图验证后返回legal=allowed/denied/unknown、具scope的conditions、evidenceRefs、reasons。
- `authorize`：异步返回同一法律判断，另加readiness=ready/blocked/unknown和逐条件fulfillment。
- 缺vaultRoot或履约上下文、缺条件履约、缺证据文件保留unknown；明确未履约、哈希不符、链接等失败为blocked。
- 条件未履行仍可legal=allowed，但不能ready；条件满足且真实证据通过才ready，不能只读legal当操作通行证。
- fixture永不ready。未完整归档的快照不ready；此入口用于已存快照操作，不是未来采集器的前置落盘许可。

履约上下文 `{vaultRoot, fulfillments:[{conditionId, scope, state:satisfied|unsatisfied|unknown, proof:{path,sha256}|null}]}`。
receipt须精确匹配被请求条件的对象scope；重复或越界receipt拒绝。satisfied但无proof仍unknown，proof路径/字节SHA256必须实读核对。
receipt是受信审查人的履约声明，哈希不证明法律判断正确或声明人可信；后续执行器仍负责调用者身份、实际动作和合规流程。

## 发现状态与局部权利限制

Entry.status保留PLAN的发现/许可/失败状态；不能靠一个status字符串另建全权禁止/允许策略。
pro_only/restricted/license_unknown必须有显式restrictions，否则是矛盾输入；license_unknown至少有一项unknown限制。
每限制携带scope、rights、denied/unknown、reason和证据引用；scope只限该Entry/其Snapshot/File。
判断某权时仅聚合覆盖目标且包含该权的限制，denied优先于unknown优先于allowed。
例：文件商用未知可以保持合法私人归档ready，但商用unknown不ready；不会把商业限制扩大到全部权利。
fetch_failed是本次取得失败，不会改写旧快照法律许可；状态不能反向绕过有scope的限制。

## 稳定身份与摘要

componentId=`sourceId:upstreamSlug`，不含版本；slug可用规范路径消歧。
snapshotId从上游固定证据精确派生：git完整小写40/64位；npm固定包@精确semver+规范sha256/sha512 SRI；registry原始响应字节SHA256。
拒绝分支、短SHA、latest/range。格式通过不证明上游真实性；fixture固定SHA只是虚构测试。
目录=`archive/components/<sourceId>/c-<SHA256(component\0+componentId)>/s-<SHA256(snapshot\0+snapshotId)>`，不直接拼带冒号斜线的ID。

文件sha256对原字节计算，不改编码、换行或空白。
archive.sha256=`SHA256(UTF8(JSON.stringify(sortedTuples)))`，tuple=[path,size,sha256]，按ASCII path码点升序。
路径拒绝绝对路径、盘符、反斜线、空分段、`.`/`..`、百分号编码、控制字符、保留设备名、尾点。
每快照的path和originalPath各自唯一且无文件/目录前缀冲突；拒绝两个存储文件还原到同一原路径。
磁盘文件集合与manifest双向一致，缺文件/孤儿均拒绝，再检查大小/哈希。
锁不等于快照不可变：未来同ID复采须逐字节/manifest/来源许可元数据一致才幂等，否则拒写并查明新版本证据；本轮没有写入器。

## 四条独立状态轴

- archive.status：not_archived / archived_partial / archived_complete。
- archive.offlineRestorable：null未验证、false恢复失败、true验证通过。
- offline_runtime_complete：null未验证、false离线运行不完整、true离线运行完整。
- preview.status：not_built / preview_ready / preview_unavailable / needs_adapter / unsafe_to_run，另有localPath/upstreamUrl/lastCheckedAt/reason。

完整归档仍要求非空文件、保存许可/NOTICE、归档权限、无unresolved、offlineRestorable=true，
但可有remote依赖且offline_runtime_complete=false。离线运行true不得有remote/unresolved。
preview_ready需要已核验的本地或上游demo位置；在线demo可ready而本地运行不完整，not_built/unsafe也不抹掉已保存源码。
该合同验证声明一致性，不假称运行了第三方Demo、完整依赖分析或真实断网materialize。

## 实文件与安全入口

`verifyLicenseEvidence`先跑全图scope验证，再按库根逐段lstat/realpath实读textPath，拒绝缺失、非普通文件、哈希不符、路径/符号链接/根祖先逃逸。
`authorize`校验所需许可证原文、目标快照全部实文件及履约proof；不能只凭shape通过真实授权。
`verifySnapshotFiles`的root是该快照文件根；许可证textPath和proof.path的root是vaultRoot，二者不能混淆。
notices记录原始NOTICE路径；完整快照保存对应notice文件并经文件校验；后续独立NOTICE证据需扩展内容记录，不能省略现有保留政策。
FS检查只用于可信静止根，仍有lstat/read TOCTOU；没有实现对抗并发写入、解压、原子落盘、大小预算和执行隔离。
未来写入/采集/恢复必须另经真实FS安全主责，这些只读合同不代替实际写入护栏。

## 最小派生index

`pnpm --silent vault index`从config/sources.json + inventory/metadata.json构建确定性JSON projection；
`pnpm vault index fixtures/metadata.json`展示虚构样本。都调用core的全图校验和法律评估，不维护第二套许可/状态逻辑。
projection输出readiness=not_checked，不是可导出列表；随时可删除重建。不做完整搜索、Explorer或采集。

## 证据版本与经验

新证据在evidence/metadata-contract；current SUMS的scope.json显式覆盖全库普通文件，排除根.git、全部node_modules、根dist及各SUMS文件自身。
旧evidence/g0保持逐字节不变，只按完整Git提交0bd1e87ea5506b2d6194781f8d503f6dd713d3ef的历史scope核验，不能宣称覆盖当前工作树。
SUMS和manifest均双向查漏。
