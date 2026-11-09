# 静态替代媒体修复

本场景此前把既有原创 SVG 示意图 URL 放进 video.src，视频元素无法将 SVG 作为视频播放。本次仅将该元素改为 img，并增加准确替代素材 alt；原 SVG URL/字节、布局 class/width/height 不改，没有生成或编辑图像，没有请求原视频。

这只是静态示意图，不等于上游视频效果。原摄影/视频内容仍待素材复核；图鉴保持待复核，不宣称完整原素材已恢复。没有增加 CSP 或 sandbox 权限。

当前首选适配源码为 dusk-features-three.adapted.tsx，MEDIA-CHANGE.diff 标明局部变更。既有 source.zip 为历史版本，未改动。runtime 为唯一断言命中的编译 JSX 元素替换，非整库重新构建。共享运行包的其他三项不改变。
