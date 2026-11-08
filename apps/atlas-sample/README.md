# UI-Vault · 精选界面素材图鉴

网站：<https://tdwhere123.github.io/UI-Vault/>

当前已收录 **241件独立素材：215件精选界面＋20件保留基础素材＋6套完整图标系列**。正在向1000+件优质素材扩充；图标按完整系列单列统计，不按单枚凑数。源码候选、不同配色与框架版本不充数。

## 当前内容

Looseleaf 39件、Magic UI 36件、HyperUI 20件、Kokonut UI 49件、Bencho 27件、Motion Primitives 5件、Solid Glass 6件、AI Elements 27件、Animata 18件、Tailark 8件，另有Lucide、Tabler、Phosphor、Heroicons、Octicons、Bootstrap Icons六套图标系列。

其中46件保留在跨用途的Agent工作流集合，覆盖对话、推理、工具调用、审阅、状态与任务流程；首页优先呈现这些素材。演示是本地UI，不冒充已接入真实模型。

精选包含纸张手绘界面、真实交互和动效，不只是普通按钮表单。每项提供隔离运行预览、行为范围、上游来源、原件代码和完整源码下载。静态展示项不冒充交互；前端演示不连接真实账号、支付或后台。

前端按紧凑图鉴结构独立实现，没有复制LeiBox受限制代码。桌面三列、手机单列与抽屉分类；分类搜索、来源筛选、可直达详情。每页12条，列表只展示实际浏览器拍摄的轻量封面，不加载各组件运行包；进入详情后才启动单个隔离预览，切源码或离开后释放。列表采用独立轻目录，完整依赖与原件信息按需读取。返回保留页码与筛选。

旧版图库、70份旧包与其专用归档工具链已按用户要求退出当前工作树；可从 Git 历史 `3a2e440` 恢复。新版素材运行资源、原件下载和许可证均保留，不将旧包冒充已迁移素材。

## 本地运行

Node.js 22或24；图库和测试不需要安装第三方依赖：

```sh
npm run build
python3 -m http.server 8080 --bind 127.0.0.1 --directory apps/atlas-sample
```

导出当前图库预览：

```sh
node scripts/export-pages.mjs /tmp/ui-vault-pages /
python3 -m http.server 8080 --bind 127.0.0.1 --directory /tmp/ui-vault-pages
```

导出目标目录需为空。托管工作环境可用其支持的预览服务。不要用file://打开需要读取JSON的图库。

## 验证与发布

```sh
npm run build
```

`.github/workflows/pages.yml`在main更新时构建GitHub Pages。线上`version.json`给出实际提交和条目数。构建测试不等于视觉验收，具体边界见`apps/atlas-sample/VERIFICATION.md`。

## 素材与源码

- `apps/atlas-sample/items.json`是当前库存；`batches/`按小批次共享运行资源，每项仍有独立入口与上游源文件。
- `featured/`保留首4件；`originals/`、`previews/`、`bundles/`保留20件基础素材。
- 原件和演示适配分开，下载包含源文件、依赖锁与许可证，不包含node_modules。重建仍须安装对应构建工具与依赖。
- 每个来源和字体按原许可证保存，详情与`LICENSES.md`给出来源。根目录某个MIT文件不覆盖第三方材料。
- 未通过动态验收的WebGL降级项暂不计入已发布库存。候选站清单不等于已收录。

## 图标系列

完整系列作为一个条目，搜索与原生变体在系列内浏览。6套包共21,910条原始SVG记录（含原生样式、尺寸及旧名），另有506别名，不计作额外界面素材。每页仅绘制60枚，支持原始SVG查看和16/24/32px展示。图标包可用Python标准库离线重建。

## 分类与站壳

用途导航统一为Agent与对话、输入与选择、导航与组织、数据与状态、展示与媒体、产品与营销、视觉与动效。图标系列独立入口。纸张、光效、几何空间等属于风格标签，来源和完整页面/区块/组件属于独立筛选，避免把用途与材质混在一张分类表里。站壳使用已收Lucide原生SVG子集，分类导航沿用已保存HyperUI轻量菜单语义，不将整套示例React包加载为导航依赖。
