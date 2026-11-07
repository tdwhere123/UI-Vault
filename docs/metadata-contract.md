# 元数据合同 v1

## 权威与消费者

`packages/core/src/schema.ts` 的 TypeBox 值是唯一机器结构 Schema；TS `Static` 类型从其派生。
`validation.ts` 唯一持有跨记录不变量与授权聚合；不得只跑 JSON Schema 就声明业务合同有效。
`identity.ts` 唯一持有 ID、路径、文件/manifest 摘要材料规范。
`filesystem.ts` 是只读实文件验证，不是写入器。`index.ts` 只暴露未来消费者公共合同。
JSON/JSONL 记录是事实权威。Source 种子只在 `config/sources.json`，不另存 YAML；
原件 §2/§9 的 YAML 是建议形态，此调整不改变来源事实。派生索引可丢弃重建。

| 对象 | 必要语义 |
|---|---|
| Source | sourceId、website、entrypoints/url/adapter、priority、riskGroup、lastCheckedAt、checkStatus、rights |
| Entry | §4 componentId/sourceId/upstreamName/upstreamSlug/kind/primaryCategory/secondaryCategories/tags/descriptionZh/frameworks/exodusUseCases；entryUrl、status、rights |
| Snapshot | componentId、snapshotId、upstream、fetchedAt、provenanceUrl、rights、archive、offline_runtime_complete、files、dependencies |
| File | path/originalPath/type/size/sha256/internalReferences/rights |
| Dependency | internal/asset 的已保存文件路径；npm 的固定 name/version/integrity/peerConstraint；remote 与 unresolved 的原因 |
| LicenseEvidence | evidenceId/sourceUrl/retrievedAt/upstreamVersion/scope/textPath/sha256/review/spdx/obligations/notices |

URL、许可文本副本、授权判断分开记录；scope 不从 URL 推断。LicenseEvidence.textPath 为库内相对路径，
notices 为原始 NOTICE 路径，完整快照必须保留相应 `notice` 文件；许可文本以 digest 对照 `license` 文件。
spdx=null 是未得出 SPDX 结论，非 MIT 默认值。review 是明确审查记录，不是机器替代法律判断。
结构验证不会联网确认 URL/commit 真实性，也不会证明许可审查结论正确。

## 四权与三态

仅用 §5.4 原字段：
`can_archive_source`、`can_modify_and_use`、`can_use_commercially`、`can_redistribute_component_collection`。
每权是 `{state: allowed|denied|unknown, evidenceRefs: string[]}`。
三态是 G0 工程补充；原文规定四权与 license_unknown，并未定义这组三态类型。
未知不等于禁止，也不等于许可；不可用 truthy、`!!`、`Boolean` 或默认 false 归并。
allowed/denied 必须有证据，unknown 可无证据；每个引用都必须存在且覆盖该对象。
范围分 source/entry/snapshot/file；窄证据不能授权宽对象，任何用于快照/文件判断的证据（含来源级证据）其 upstreamVersion 必须匹配 snapshotId。
source 权利是来源层审查摘要，不强行把混合来源定为一张通行证；具体操作检查 Entry+Snapshot+所有 File，
每一项都必须该权 allowed。来源 unknown 不能替代任何具体对象授权，来源 denied 也不能掩盖文件例外。
`authorize` 先验证全图，再聚合具体权利；fixture 永不授权真实操作。
它是元数据前置许可条件，不是执行器、法律审核或物理归档完整性的替代；不得绕过后续文件/隔离检查。
§4.3 示例旧布尔别名不继续维护第二套语义。

## 身份与版本

componentId=`sourceId:upstreamSlug`，slug 可以是规范相对路径以消歧，身份不含版本。
snapshotId 精确从 upstream 派生：
- git: 完整小写40位（Git SHA1）或64位（Git SHA256）提交哈希，拒绝分支、短 SHA。
- npm: 固定包名@精确三段版本+规范 SRI（sha256/sha512），拒绝 latest/range，保留 peer 约束但不拿它当版本。
- registry: 保存的原始响应字节 SHA256，不是 URL 或抓取时间。

ID 格式通过不等于真实上游存在；未来采集器必须保存官方取得证据，不能拿 fixture 占位符当采集结果。
归档目录固定为 `archive/components/<sourceId>/c-<SHA256(component\0+componentId)>/s-<SHA256(snapshot\0+snapshotId)>`；
上述 `\0` 是单个 NUL 字节，输入 UTF8，不是两个字符。原始含冒号、斜线的 ID 不直接拼路径。
文件名和原路径严格校验；未来不支持的上游名字须先设计无损映射，不能静默清洗成同名。
旧 snapshot 不覆盖；相同 ID 复采须比较全部已保存字节、manifest 和来源/许可元数据，完全相同才幂等，
否则拒写/查明版本证据并另建有真实依据的新快照；锁目录本身不是不可变保证。G0 没有写入器。

## 摘要与路径

文件 sha256：原始字节 SHA256 小写 hex；不改换行、编码或空白。
archive.sha256：`SHA256(UTF8(JSON.stringify(sortedTuples)))`，tuple=`[path,size,sha256]`。
按经过验证的 ASCII path 原码点升序，重复路径拒绝；不依赖 locale、对象字段顺序、目录枚举顺序。
路径必须相对、非空、正斜线分段，拒绝 `. / ..`、绝对路径、盘符、反斜线、空分段、百分号编码、
控制字符、保留设备名、尾点。不对输入做 percent decode 或静默 normalize。
Manifest 声明与磁盘文件集合必须双向相等，漏项/孤儿均拒绝，再检查各文件大小和字节哈希。

## 三轴与状态约束

- archive.status：not_archived / archived_partial / archived_complete。
- archive.offlineRestorable：null=未验证，false=恢复失败，true=恢复验证通过。
- offline_runtime_complete：null=未验证，false=离线运行不完整，true=已证明离线运行完整。

完整归档要求非空文件、许可副本、归档权限、无 unresolved、offlineRestorable=true；
但可有 remote 依赖且 offline_runtime_complete=false。恢复成功不代表 Demo 运行成功。
完整离线运行声明不可存在 remote/unresolved 且必须完整归档；实际运行证据由后续隔离执行主责保存。
null/false/true 都保留，不 coerce；空数组仅表示已声明无成员，不自动证明依赖解析已穷尽。
Entry.status 是发现/许可/失败结果；Snapshot 三轴另存历史事实，采集失败不能改写旧快照许可。
该版本验证声明的一致性，不实现完整发现任务调度状态机或依赖分析器。

## 安全边界与版本界限

只读 verifySnapshotFiles 逐段 lstat+realpath，拒绝文件/目录/根及根祖先符号链接，校验根内范围。
测试经真实临时文件系统覆盖成功、缺文件、孤儿、内容变更、符号链接内外逃逸。
调用者必须持有可信、静止的根；存在 lstat/read 之间的 TOCTOU，不得用于对抗并发恶意写入。
**不提供写入、解压、物化、权限隔离或资源预算护栏**；未来采集/恢复必须有真实 FS 的原子写入、
拒绝跟随链接、根约束、大小限额和不可变冲突处理。这些合同不能代替实际写入护栏。
完整快照的许可证哈希检查只证明声明对应保存字节，不验证法律事实；实际证据路径内容仍要按库根实读校验。
fixture=true 和 example.invalid 的记录是假数据，内容及 Git SHA 都不是采集事实。

## 经验使用

证据文件↔SUMS 双向查漏；manifest↔实文件双向查漏。
三态为工程扩展，不伪称原文。
