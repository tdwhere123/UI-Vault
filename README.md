# UI-Vault

站点入口：https://tdwhere123.github.io/UI-Vault/

## 线上与本地候选分开

按本地交接记录及2026-11-08 14:21（台北 UTC+8）任务说明，线上仍为 `7d807659d7214b5c24c8903829031d0a3258cac0` 的内容。本轮未联网复查现场；不要把本地候选当作已发布站点。新增50个Arc主体及合计70个源码下载（20 Agent＋50 Arc）尚未上线。

本地候选提供50项原源码文本浏览和70项源码包下载，不承诺可运行或恢复。`partial` 表示只保存了明确列出的原件，不是完整依赖闭包；每包 `SOURCE.json` / README逐项列出缺失的相对模块、npm/宿主依赖及基础样式等要求，未知状态不当作合法空。`runtime` / `restore` 均为 `not_tested`，第三方依赖和素材权利不因根MIT自动通过。

## 本地候选使用

仅使用已安装依赖，先 `pnpm build`。通过现有静态导出入口，例如：

```sh
node apps/explorer/static-export.mjs /tmp/ui-vault-candidate /
python3 -m http.server 8080 --bind 127.0.0.1 --directory /tmp/ui-vault-candidate
```

在本地HTTP页面的源码下载区按来源＋canonical身份选择条目，点击“浏览原源码文本”查看原文件及具名缺依赖；文本转义展示，不执行其中的源码。下载tar.gz后先读README、SOURCE.json、原LICENSE及SHA256SUMS，不将“可下载”理解为“可运行”。新Arc50均无预览，既有7图不代表这50项的运行或视觉证明。上述命令是本地使用说明，不涉及发布；使用空闲端口并在结束后关闭自己的服务。

以下是保留的早期合同基座记录，其中空库/未采集等描述属于当时阶段，不代表当前本地候选库存。

# 历史合同基座说明

独立私人 UI 源码资产项目；目前仅元数据合同与本地命令，不是采集交付。

```sh
pnpm install --ignore-scripts --frozen-lockfile
pnpm build
pnpm typecheck
pnpm unit
pnpm schema
pnpm vault sources
pnpm vault validate
pnpm vault schema > /tmp/ui-vault-metadata.schema.json
pnpm evidence:verify
```

Node 22/24，pnpm 10.34.6。安装禁生命周期脚本；不运行任何来源项目脚本。
`schema` 脚本验证12来源、明确虚构示例及空库；`vault schema` 从唯一合同输出机器 JSON Schema。
配置 `config/sources.json` 是来源种子唯一权威，代替原件推荐的 YAML，避免 JSON/YAML 双份事实。
12/12 已登记，0/12 live 核验，全部权利 unknown；Watermelon 两仓入口均保留。
网址与风险提示只是 PLAN 种子，不是当前存在性或许可结论，无真实组件采集。
`fixtures/` 均为虚构；许可证样本不代表 MIT 或任何来源授权。

合同见 [docs/metadata-contract.md](docs/metadata-contract.md)，许可保留政策见 [docs/third-party-policy.md](docs/third-party-policy.md)。
生产来源/条目/快照将以 JSON/JSONL 保持权威，后续 catalog、Explorer、CLI 派生，不产生平行事实。
当前 sources/validate/index 直接消费权威记录；只做最小可重建projection，不实现完整catalog搜索、采集、恢复或Explorer。
不修改 Exodus/Alaya，不执行外部模型请求，不设置远端或公开服务。
远端账户/同名私有库查询被中断，状态未知；未创建、push、PR 或 merge，待用户本人授权。

## 证据与合同版本

当前合同候选v2见 docs/metadata-contract.md，待工程复核，不是冻结/验收结论。
`pnpm --silent vault index`从唯一JSON记录生成最小确定性projection（空库列12来源）；
`pnpm vault index fixtures/metadata.json`是虚构示例，不是真实采集，不包含操作就绪授权。
`authorize`已替换为异步结构化结果：法律allowed不等于readiness=ready，真实许可证据/快照/履约均需校验。

当前证据：evidence/metadata-contract/，包含改前红、改后绿、源码树、scope和SUMS。
`pnpm evidence:verify`双向核对当前全库范围，排除根.git/、所有node_modules/、根dist/、各SUMS自身。
旧evidence/g0文件不改，仅为历史基线；核验命令：

```sh
node scripts/evidence.mjs historical 0bd1e87ea5506b2d6194781f8d503f6dd713d3ef evidence/g0/SUMS.sha256
```

自有代码未选定开源许可证；不要将私人或可访问等同于授权。
