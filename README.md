# UI-Vault（本地合同基座）

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
