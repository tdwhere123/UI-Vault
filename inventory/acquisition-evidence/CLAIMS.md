> Public portability/disclosure revision. Original records and original checksum manifests are archived privately; this text is not the original sealed execution record and does not claim those checksums still match the public tree.

# 真实源码收藏领域交件

记录时间：2026-11-07T21:14:16+08:00（Asia/Taipei）。基线 c3f9fd5b8f2ba683d4dee004235265bd8e9c53c9，同 main 本地分支。
唯一原始登记 inventory/collection.json；最终 catalog 由平台派生，不新建第二份入口。

## 已证实
- 两源各10个真实组件，共20个；142归档文件（包括每组件保留的公共依赖/许可，公共文件不计组件数），与固定commit的tarball逐字节一致：raw/upstream-bytes-final.log。
- LICENSE及Bencho THIRD_PARTY.md均在各组件files内有sha256；Bencho商用/名称标记/照片排除项已阅读且未收，未收Pro/声音。原件是本次许可依据，不引用历史项目许可作替代。
- TypeScript AST解析import/export/dynamic import，78条导入边；真实内部文件、样式、许可均在清单，磁盘文件和登记双向核对。20个字节篡改负对照拒绝：raw/verify-delivery.log。
- 缺内部依赖、样式、许可、动态外部依赖四种负对照拒绝；先证未改清单通过，仅改scratch复制品：raw/negative-delivery.log。
- 初检抓出folding-bill动态import(three)漏登，补three@0.169.0后通过；raw/verify.log保留改前失败。
- 原始build/typecheck日志无错误；最新unit原始输出为13/13、fail0（raw/unit-final.log）。早期并发集成9/13失败保留raw/unit.log；最新Schema增加assetKind后旧清单失败保留raw/verify-current-core.log，现20条显式source通过。

## 版本与复现
- agent-elements b04b36cb6381a1dd1a0e86cc7c90564ddcd56d37；直接依赖从归档pnpm-lock root importer取值。
- bencho c65992417427bb09e661674ffa800bef29adef49；React/React DOM 19.2.8、three 0.169.0为收藏固定版本，不伪称上游lock。版本存在证明及tarball下载摘要见provenance.json。
- 将provenance.json两个archiveUrl下载至scratch，核sha后安全解包，首次采集可运行python3 inventory/scripts/acquire-sources.py <解包父目录>；脚本拒绝覆盖既有快照。
- 校验命令：pnpm build；node inventory/scripts/verify-collection.mjs；python3 inventory/scripts/check-negative-controls.py；python3 inventory/scripts/verify-upstream-bytes.py <tgz目录>；pnpm typecheck；pnpm unit。
- CLOSURES.md由唯一原始登记派生，列逐组件实际文件与限制，不是第二份可编辑登记。

## 风险与未覆盖
- 本次仓库构建/类型/unit是在同分支并发平台worktree上完成；只提交领域精确路径，不夹带平台改动。依赖在制core Schema，不能声称此领域提交单独checkout即可构建。观测输入摘要见integration-inputs.json；最终集成SHA由平台/组长统一验证。
- 未执行上游安装/构建脚本或组件，未render、视觉/浏览器测试；只收藏源码，不承诺即插即用。
- npm传递依赖未vendored，离线源码恢复不等于离线安装依赖；两源React pin不同，由宿主整合。
- agent-elements须Tailwind CSS 4 +原lib/agent-ui相对布局，Bencho显式导入tokens.css和block CSS。SendButton仅状态视觉组件，不当成发送业务逻辑。
- 原样第三方归档文件可超过500行，非本项目手写实现；不为结构指标拆改其字节。
- 路径安全、离线物化、源站不可达/重复恢复验收由安全岗负责，本包不代替其边界或卡级验收。
- raw/acquire.log为首次采集，尚未包含后来AST发现的three；最终collection.json/verify-delivery为准。负对照初版挑错文件名的失败保留，不当成产品缺陷。
- 验证方法：来源/许可追溯、实际文件与清单双向核对、交付后不改原证据。研究候选不重复计数，不等其补量。
- 0模型请求；不动旧项目、不删文件、不push、不合并。
