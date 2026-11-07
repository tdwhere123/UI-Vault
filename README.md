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
当前 sources/validate 直接消费权威配置，不抢先实现 catalog/index、采集、恢复或 Explorer。
不修改 Exodus/Alaya，不执行外部模型请求，不设置远端或公开服务。
远端账户/同名私有库查询被中断，状态未知；未创建、push、PR 或 merge，待用户本人授权。

## 证据

`evidence/g0/raw.log` 是本地命令原始输出，`tested-tree.json` 绑定受测文件内容。
`evidence/g0/SUMS.sha256` 双向核对实际文件集合与哈希，而非仅 `sha256sum -c`。
范围是仓库所有普通文件，排除 `.git/`、所有 `node_modules/`、根 `dist/` 和 SUMS 自身；
包含所有源码、配置、文档、锁文件、fixtures、原始日志与受测树绑定，明确不证明依赖包或编译产物的再分发完整性。
`pnpm evidence:verify` 可重核；验证报告见 `evidence/g0/report.md`。

自有代码未选定开源许可证；不要将私人或可访问等同于授权。
