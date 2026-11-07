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

## 证据与边界

- 开工基线：`c3f9fd5b8f2ba683d4dee004235265bd8e9c53c9`。仅本目录属于本次前端改动；集成依赖当时尚未全部提交，具体输入见 `evidence/dependency-SHA256SUMS`，不是独立可运行的完整仓库交付。
- `evidence/test-raw.txt`：构建、类型检查、语法检查、12项自测（renderer DOM stub、真实HTTP、合成快照真实FS）。包括参考分标/推测提示/无源码入口、纯文本、查询失败、竞态、跨来源拒绝、完整快照篡改失败与修复恢复。
- 同日志的真实目录冒烟：catalog SHA256 `6e65ac00f2bcb300d7893a106f38ecb4746ee755e78d628bcae99676d6165689`；两来源20份 source 快照，共142个文件，经真实HTTP读取后独立对比登记 SHA256。不是恢复物化或第三方组件可运行性验收。
- `catalog-smoke.mjs` 不更改真实快照、不访问源站；合成数据只用于回归，不计真实组件数量。实际源码/许可采集主责为领域，恢复与安全校验主责为执行与安全。
- NOT_VERIFIED：浏览器实机布局、键盘/读屏、窄屏、截图；没有运行第三方组件或安装其依赖。reference 当前真实目录中无样本，显示/拒绝仅经合成数据验证。首次新增 Explorer，无已有版本的改前失败日志，不主张已完成历史缺陷的红绿回归。
- 元数据每次请求重读；分类/来源选项初始化后需刷新页面更新。并发修改 catalog/快照可返回422，修复后可重试；不缓存为成功缺席。错误统一隐藏本地绝对路径。
- 0模型请求；未push/未合并。集成状态以当前提交及构建结果为准。
