# MENISCUS · 液面底部导航

恢复已有 `meniscus:liquid-navigation`，不新增重复来源。原 Hasib MIT，固定 https://github.com/hasib41/meniscus-liquid-nav/tree/1ef85a14c98e3b097022d1dc00ae1775ab0374ba 。这是原版导航交互演示，五页面文案为原演示，不连接用户账号、消息、摄像头或设置服务。

## 保留
原五个tab/panel与内联SVG、渐变、配色；按实际导航条/标签尺寸测量位置；原三相切圆弧组成的单条液面轮廓；原速度驱动左右肩部、珠子体积保持形变和图标升降；原弹簧K/C与细分积分；点击、箭头/Home/End循环roving focus、拖动后最近槽位吸附。没有重新绘制静态替身。

## 本地修改
- 添加隔离IIFE、事件账本、ResizeObserver释放与旧API失效。公开select句柄对任意有限整数正规双取模，非有限值忽略，小数截断；修正原负索引小于-5会越界的问题。
- HTML样式入口使用宿主要求的非自闭合link标签，仅序列化格式兼容。
- 零尺寸显示等待有效布局，resize恢复；真正测量/绘制异常停止并禁用交互，非成功占位。
- 追踪并取消原panel WAAPI动画，连续切换不会堆积；不支持WAAPI时只省略panel淡入，原spring导航仍可工作。
- hidden/blur/减少动态取消RAF/timeout/动画、释放capture并归到当前选择；减少动态拖动直接画目标位置，不持续RAF。隐藏恢复按原选中项重新测量，不后台持续运动。
- 原click-suppression零延时任务被记账；fonts.ready晚到在退出后不回写。退出删除原公开handle，旧DOM和已保存handle不再生效。
- 外部Google字体改用原CSS已有system fallback，原grain.png略去，favicon/社交预览远程URL删除。保留原SVG与其渐变。没有字体/PNG编码包装、截图或封面。

完整许可见 LICENSE.txt / NOTICES.txt，固定原件hash和修改范围见 SOURCE-EVIDENCE.json。零运行外包，默认CSP不扩大，没有网络/存储/剪贴板/后台或摄像头权限。

## 验证边界
normal/narrow/reduced/zero/failure五分支测试实际原spring积分、单path变化、键盘/焦点/面板、拖动capture与最近槽位、cancel、blur/hidden/reduced停止、300px几何重测、真实SVG写入异常、ResizeObserver断开、晚到fonts与退出旧节点/API不复活，记录的RAF/timeout/监听/WAAPI对象归零。
JSDOM bounds为受控几何、pointer capture和WAAPI为状态桩；不是浏览器原生拖动、触摸、字体度量、完整无障碍或像素验收。原系统字体替换后的真实排版/光泽及原GPU/合成成本未验。前台不显示通用QA警示。
