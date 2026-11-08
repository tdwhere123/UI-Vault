# UI-Vault · 界面素材图鉴

**网站：<https://tdwhere123.github.io/UI-Vault/>**

一个用来浏览、试用和拆解界面素材的收藏库。当前主页面是第一批 **20 件独立样板**，不是已完成的 200+ 组件库。

## 现在有什么

- 20 件 HyperUI MIT 素材，覆盖交互、表单、数据展示、导航和页面区块；同款配色/框架不会重复计数。
- 中文/英文搜索、分类与类型筛选、真实 HTML 预览、原始源码阅读及源码 ZIP 下载。
- 原件、预览适配版、依赖和许可证分开保存。ZIP 包含原件、可独立打开的 `preview.html`、CSS/脚本和说明。
- 静态表格、标签导航等只展示原站提供的外观，不声称具有后台数据或未实现的交互。
- [旧图库与70份源码下载](https://tdwhere123.github.io/UI-Vault/legacy/)保留于 `legacy/`，没有删除仓库 `archive/`、旧 `catalog.json` 或许可证据。

旧库70份源码包中，多项依赖并不完整，运行/恢复状态仍为 `not_tested`；换了入口不代表它们已经成为可运行组件。旧库数量不能与20件样板直接相加当作迁移完成数量。

## 本地运行

Node.js 22 或 24，pnpm 10.34.6。

```sh
pnpm install --ignore-scripts --frozen-lockfile
pnpm build
# 直接查看新样板
python3 -m http.server 8080 --bind 127.0.0.1 --directory apps/atlas-sample
```

打开 <http://127.0.0.1:8080/>。运行完整发布版（同时包括旧图库）：

```sh
# 目标目录必须为空
node scripts/export-pages.mjs /tmp/ui-vault-pages /
python3 -m http.server 8080 --bind 127.0.0.1 --directory /tmp/ui-vault-pages
```

## 检查与发布

```sh
pnpm build
pnpm typecheck
pnpm unit
pnpm test:gallery
node --test apps/atlas-sample/sample.test.mjs
```

`.github/workflows/pages.yml` 在 main 更新时构建并发布现有 GitHub Pages。`scripts/export-pages.mjs` 将新图鉴作为根入口，旧审计导出器的结果放入 `legacy/`。发布成败以对应提交的 Actions 为准；线上 `version.json` 用于核对实际版本。

## 文件位置

- `apps/atlas-sample/items.json`：20件样板的统一条目数据。
- `apps/atlas-sample/originals/`：上游原件与MIT许可证。
- `apps/atlas-sample/previews/`、`assets/`、`bundles/`：隔离预览、依赖与下载包。
- `apps/atlas-sample/VERIFICATION.md`：测试结果和验证边界。
- `apps/atlas-sample/planning/source-candidates.json`：用户提供的20个候选网站，不计入已收录组件数。
- `archive/`、`apps/explorer/`、`inventory/`、`evidence/`：保留的旧素材和历史记录，不代表新图鉴已完成迁移。

## 后续目标

先确认这20件样板的浏览体验，再逐批扩展到 **至少200个有真实素材、去重的组件**，完整页面另列。增加手绘、玻璃、动效及Agent界面等来源；允许时保存源码及所需依赖，不允许时保留来源索引和实现空位。截图展示、付费部分和再分发权限分别核验，不把网站推荐或宣传数量当作授权和库存。

目前没有完成全量旧素材迁移，也没有完成200+目标。第三方原件与自实现须保持区分，各素材遵循各自许可证。
