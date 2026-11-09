# Twine 原故事地图与段落编辑，本地选段
保留固定原 StoryEditRoute、PassageMap、链接解析、原 reducer/undo、passage dialogs/标签、zoom、查找、创建编辑等。3个初始分支是原创本地文字fixture，不是上游现成故事。只当前会话；隐藏重开重置。不开放播放、StoryFormat执行、发布、文件导入导出、持久存储、云端或外链帮助。
使用原 prefs.useCodeMirror=false textarea 模式。CodeMirror仍因原顶层imports打包但不启用，不能称已验CodeMirror编辑器。系统字体替代未分发Nunito。原SVG图纸格纹和Tabler图标保持文本几何。segseg仅数学helper用独立标准实现替换，独立10010样本等价；不分发存疑原helper。
默认图鉴sandbox/CSP未变，实际clean572 loader普通3脚本约1.65MB缓存。测试DOM和真实状态不是native像素/拖拽几何验收，固定几何/observer/animation/scroll接口替身。对应源码与许可见SOURCE-README、SOURCE及NOTICES。

## 最终验证
原New从3卡到4卡；原Undo/Redo在200ms离场过渡后真实3/4；选择新卡→Edit原textarea→输入[[A new branch]]，原1000ms debounce及链接解析创建第5卡。再次修改后20ms内隐藏，晚到任务/旧textarea不复活，重开1150ms仍初始3卡。生产/reduced/独立script/early/missing-root/late-failure六分支通过；退出计数RAF/timer/observer/应用listener零，能力陷阱fetch/XHR/Worker/eval/Function/open/storage零。不以测试替身声称浏览器实际拖拽、字体或像素通过。
公开restore后用现有精确依赖与固定构建工具重建，3 JS/CSS/index逐字相同。未另行从零网络npm ci，但完整lock锁定47实际运行版本并补固定构建工具；React历史发行构建未重跑，第三方精确官方首选源位置/取得证据另列。

原 CodeMirror 未启用分支中的透明拖动图像原为1px GIF，构建时仅该文件精确一次替换为原创透明1px UTF8 SVG；未改编辑/地图算法，不在公开源码补丁携原二进制payload。
