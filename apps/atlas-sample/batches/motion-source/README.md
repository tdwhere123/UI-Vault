# Motion Primitives 学习素材批次

本批30个独立组件，来自 ibelick/motion-primitives 的固定提交，MIT许可。官方示例变体不重复算条目。

## 目录
- originals/motion-primitives：未经修改的官方组件、示例、本地依赖、许可与上游锁文件。
- adapted-runtime：为 UI-Vault 编译的隔离预览。远程第三方照片替换为自制 SVG，保留原组件交互逻辑；布局和少量文案为展示适配。
- manifest.json：来源版本、文件闭包、依赖、资源风险。

## 重建
在 adapted-runtime 中运行 npm ci，再运行 npm run build。需要Node.js 22+。构建输出在 ../delivery/batches/motion-01 至 motion-05。

## 验证边界
5个生产IIFE与CSS批次均编译成功，每批6组件。编译通过不代表每个交互/样式均通过浏览器验收，接入后必须逐项检查。
原示例中图片URL仅保留在originals的源码文本中，没有下载或分发相应图片。运行预览不请求这些图片。
组件源码与所有依赖的许可须一并保留。完整 npm 传递依赖通过 package-lock.json 锁定，并非随包离线保存 node_modules。
