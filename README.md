# UI-Vault · 精选界面素材图鉴

网站：<https://tdwhere123.github.io/UI-Vault/>

当前已收录 **65件独立素材：45件精选＋20件保留基础素材**。继续扩充到至少200件有设计感的独立素材，尚未完成目标。源码候选、不同配色与框架版本不充数。

## 当前内容

Looseleaf 14件、Magic UI 11件、HyperUI 20件、Kokonut UI 12件、Bencho 8件。

精选包含纸张手绘界面、真实交互和动效，不只是普通按钮表单。每项提供隔离运行预览、行为范围、上游来源、原件代码和完整源码下载。静态展示项不冒充交互；前端演示不连接真实账号、支付或后台。

前端按紧凑图鉴结构独立实现，没有复制LeiBox受限制代码。桌面三列、手机单列与抽屉分类；分类搜索、来源筛选、可直达详情。每页12条，最多6个可见卡片运行，离屏或切源码后释放预览，避免大量动画同时拖慢页面。返回保留页码与筛选。

[旧图库与70份源码](https://tdwhere123.github.io/UI-Vault/legacy/)仍保留；旧包多项依赖不完整、运行状态未验证，不与本图鉴相加声称完成迁移。仓库archive、原始目录和许可证据未删除。

## 本地运行

Node.js 22或24，pnpm 10.34.6：

```sh
pnpm install --ignore-scripts --frozen-lockfile
pnpm build
python3 -m http.server 8080 --bind 127.0.0.1 --directory apps/atlas-sample
```

完整发布预览包括旧库：

```sh
node scripts/export-pages.mjs /tmp/ui-vault-pages /
python3 -m http.server 8080 --bind 127.0.0.1 --directory /tmp/ui-vault-pages
```

导出目标目录需为空。托管工作环境可用其支持的预览服务。不要用file://打开需要读取JSON的图库。

## 验证与发布

```sh
pnpm build
pnpm typecheck
pnpm unit
pnpm test:gallery
node --test apps/atlas-sample/*.test.mjs
```

`.github/workflows/pages.yml`在main更新时构建GitHub Pages。线上`version.json`给出实际提交和条目数。构建测试不等于视觉验收，具体边界见`apps/atlas-sample/VERIFICATION.md`。

## 素材与源码

- `apps/atlas-sample/items.json`是当前库存；`batches/`按小批次共享运行资源，每项仍有独立入口与上游源文件。
- `featured/`保留首4件；`originals/`、`previews/`、`bundles/`保留20件基础素材。
- 原件和演示适配分开，下载包含源文件、依赖锁与许可证，不包含node_modules。重建仍须安装对应构建工具与依赖。
- 每个来源和字体按原许可证保存，详情与`LICENSES.md`给出来源。根目录某个MIT文件不覆盖第三方材料。
- 未通过动态验收的WebGL降级项暂不计入已发布库存。候选站清单不等于已收录。
