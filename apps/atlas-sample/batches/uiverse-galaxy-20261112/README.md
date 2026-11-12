# Uiverse Galaxy 55（uiverse-galaxy-20261112）

本目录将 [uiverse-io/galaxy](https://github.com/uiverse-io/galaxy) 固定修订 `adbd2adde0a299a3956ea288fb444ec01891ca41` 中 55 条官方 HTML 片段接入候选目录，供站内预览与 ZIP 下载。

- 许可：MIT（Copyright (c) 2023 Uiverse.io）。批内 `LICENSE.txt` 为官方 LICENSE 原文。
- 性质：source-path 新覆盖。不是自动独立合格，也不是视觉或交互验收通过。不计入正式 40/500，不改 items / catalog / 合格账本。
- 分类：按官方目录（Buttons、Cards、Checkboxes、Forms、Inputs、Notifications、Patterns、Radio-buttons、Toggle-switches、Tooltips、loaders）各取 5 条已自包含 CSS、且不含远程渲染资源的片段。官方 433 条无本地 CSS（多为 Tailwind 工具类）及含远程渲染资源的文件未纳入本批。
- 已在库中的 3 条 Uiverse 材质条目（`uiverse:book-material`、`uiverse:water-material`、`uiverse:clock-material`）路径未重复封装。
- 预览：在官方片段外包一层最小文档壳、居中背景，并接线批内 `runtime.css` / `runtime.js`。宿主脚本只拦截链接跳转与表单提交，不新增业务动作。
- 原件与 ZIP 内 `original.html` 必须与官方冻结字节一致。
- 本批未做浏览器视觉或交互验收。
- 片段若提及 Font Awesome 等第三方图标字体或商标，该部分不在本批 MIT 授权范围内，不得视为已随包授权。

官方仓库：https://github.com/uiverse-io/galaxy
固定修订：adbd2adde0a299a3956ea288fb444ec01891ca41
站点：https://uiverse.io
