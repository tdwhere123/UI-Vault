# 本地服务会话

原 Alibaba ChatUI 固定06c3126ad25a0735c9b48f40582075371ad04cf3 demo/src/demo/Chat.tsx 的文字富消息子流程，恢复旧ID，不是完整多媒体客服应用。原会话/输入/快捷短语替换/历史消息/五张技能卡/消息评价保留；发送后500ms原输入提示、5000ms原固定回复均只是原本地模拟，不是AI或真人客服。原无处理器的猜你想问与卡片按钮不伪造操作，卡片按钮禁用。

## 透明适配
移除原图片消息、CardMedia、商品选择器、远程头像、相机/图片/录音工具与无实际目标的导航按钮。不用占位图冒充媒体；用原可省略avatar分支。原五技能卡、原卡片文字/布局与组件CSS保留。原阿里字体外载删除，系统sans回退。必要功能图标为已核Tabler1.119.0原SVG文本映射到原symbol ID，不宣称原ChatUI字形；没有截图或二进制包装。品牌与虚构客服文字只是原演示，无关联/背书，不可据此联系服务。

原React17.0.2保留；DOMPurify从原^2.3.8兼容更新到3.4.17，选择Apache-2.0许可，不开放任意HTML接口。原已过时IntersectionObserver polyfill未发出，使用现代浏览器原生API，缺失时明确不可用。原无后端；不请求网络、权限、存储或剪贴板。

修复demo两次延时回调和useTitleTyping递归定时器卸载清理，保原时序与消息算法。隐藏卸载并恢复初始消息（非持久会话）；宿主有界跟踪监听/timeout/interval/RAF/observer/WAAPI，早晚失败及退出清理，已取消旧回调不得复活。reduced-motion仅CSS静止，不改变文本回复。

## 验证
actual571 compose五模式normal/reduced/early/failure/production：原textarea受控输入、真实mousedown发送、5000ms固定回复、快捷短语q1替换、隐藏恢复/旧节点与旧RAF、模块早期失败、晚期错误和退出全部通过；禁用API调用0，完整监听/计时器/RAF/observer账本0。JSDOM几何与观察器受控桩，仅DOM状态与生命周期，不代表原生IME/触摸拖动、字体或像素验收。历史加载/滚动机制保留源码，原生拖动手势未验。

完整固定原文件存工作区original，SHA见SOURCE；构建使用src/App.tsx/main.tsx/build.mjs与package-lock，prepare.py仅早期提取记录不可覆盖最终文件。没有假ZIP下载。
