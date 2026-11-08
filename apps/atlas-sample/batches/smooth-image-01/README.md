# SmoothUI · 本地图片批次状态演示

恢复旧 `smoothui:image-generation-panel`，只算一个完整 UI 家族，不按四张图或状态数量计数。

固定原来源：https://github.com/educlopez/smoothui/tree/c45420a8523ec60a92f7724a2418ab83edaa1425/packages/smoothui/components/image-generation-panel

[原 MIT](LICENSE.txt)、[完整运行与CSS依赖许可证](THIRD-PARTY-NOTICES.txt)、[固定来源哈希/实际依赖版本](SOURCE-EVIDENCE.json)。原面板/MIT与官方固定 raw 对照；旧 ZIP 末尾换行差异透明保留。本地保留全部选定源码、host、lock、测试，不挂未上传源码ZIP。

## 原实现和宿主的边界
保留原ImageGenerationPanel、AIPromptInput、AILoader、SmoothButton及其状态/预设/比例/选中交互；保留原 tileProgress 错峰公式、模糊/透明度/scale锐化、扫描带与原布局Tailwind类。不是将普通灰色占位卡重新冒充上游组件。

宿主只有明确的本地虚构状态驱动：idle → queued → generating → done，另可勾选模拟error并Retry。这没有任何AI模型、凭据、后台或网络，也不代表真实Agent任务。四幅原创纯文本SVG设计练习预先写好，不是prompt生成结果，改prompt不会产生不同艺术品。原preview fallback用同一SVG，**不宣称实际生成了低分辨率栅格缩略图**。原CSS pixelated/blur仍保留。

原下载链接删除，不做假下载，也不提供没有真实后端的variations；原Select则真实切换选中UI并更新本地选中说明。原扫描带在error时停止（原逻辑只判断局部进度，会一直扫），保留未完成图的模糊进度，不假装成功。表单没有附件上传/剪贴板能力。

## 中断与安全
宿主同一时刻只允许一条本地队列，running ref拒绝重复提交；generation编号阻止旧任务晚到；每个timeout归属当前集合。Stop/重置/blur/hidden/退出清除计时器，清空预览，不会取消后又出现“完成”。退出卸载原Motion组件，原循环随之清理。

无外链、下载/文件写入、外部图片、网络请求、存储、媒体权限、动态eval或二进制包装；默认CSP不变。SVG由本地文字构造并URI转义，不是编码现成二进制。

## 去重与视觉边界
508全目录比对：原350余候选已有smoothui:image-generation-panel但尚未接入；已有Bencho单图玻璃显影侧重单幅指针视觉，SmoothUI这里是原完整输入/预设/比例/四张错峰状态与选择/失败重试 UI。仍明确分享“图片显影”语言，不声称全新生成技术。

normal/reduced/production通过：原比例与预设改变、queued/generating/done/error、实际原多tile filter错峰差异、重复提交不增队列、Stop后延时不回写、选中aria-pressed、失败与Retry、hidden中断、队列中pagehide与重复退出。最终timeout/RAF0、fetch/XHR/Worker/open0。生产分支读取最终runtime。

JSDOM运行真实React/Motion状态与DOM样式；没有真实SVG解码、原生图像绘制、blur/扫描带合成、移动端或像素验收。减少动态保留原组件逻辑。此项须由用户在网站查看，不能把状态测试称作视觉验收。

实际11个JS包（含motion转导出包），另完整Tailwind CSS许可。class-variance-authority 0.7.1 为 Apache-2.0（全文已附），不是MIT。Lucide ISC与包内Feather MIT原条款一并保留。motion12.23.24解析到framer-motion12.43.0等，按实际lock披露；不假称全部12.23.24。
