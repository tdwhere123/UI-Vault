# 卡片材质与虚构余额遮罩

恢复旧 `smoothui:wallet-card`，一个族；三账户/六成员不算多条UI。原SmoothUI固定 c45420a8523ec60a92f7724a2418ab83edaa1425，原路径packages/smoothui/components/wallet-card/index.tsx，完整原MIT保留。

原组件的手持卡片深度/升起、EMV芯片、通用网络图形、SVG feTurbulence颗粒、指针弹簧光泽、逐字余额遮罩、键盘环绕选择与焦点、成员溢出展开保留。不是纯换色卡堆，也不是银行客户端。所有金额、公司/成员、卡号末4位均为宿主虚构数据，不连接真实金融账户，不输入/存储真实卡号，不转账/充值/付款。未传actions插槽，不放假交易按钮。

账户只选原generic网络图形，不渲染Mastercard/Visa/Amex分支；原文件里的这些其他分支仍作为原代码保留，未重新宣称设计版权或金融商标授权。没有照片、生成图、封面或二进制包装。颗粒纹理是原组件文本SVG滤镜，非下载图片。

适配仅给原AccountCard增onPointerCancel调用既有pointer-leave归位函数；未改原弹簧/材质/布局算法。宿主标题、虚构fixture、空账户边界开关新增；blur/hidden卸载并重挂原组件初态，pagehide卸载根，打断选择/余额动画。原内部可控/非可控API保留，这一例使用原非可控状态。

完整运行依赖11包+Tailwind CSS原文见THIRD-PARTY-NOTICES.txt。React19.3.1；motion12.23.24实际解析framer-motion12.43.0/motion-dom12.43.0/motion-utils12.39.0，精确版本逐项列出。Lucide0.545.0 ISC及其内嵌Feather MIT全文保留；class-variance-authority0.7.1 Apache-2.0，整体MIT AND ISC AND Apache-2.0。没有假公开源码ZIP。

normal/reduced/production测试真实控制状态：键盘右移/左移/环绕及焦点、余额隐显与aria、成员列表开闭、指针光泽值变化（reduced保持不动）、cancel/blur/hidden重复中断、空账户键盘/隐显、恢复与动画中退出。最终RAF/timeout/禁止网络调用0。几何为400×252模拟，原生CSS 3D/纹理/光泽合成、触摸和窄屏像素未视觉验收；不把JSDOM称视觉通过。默认iframe/CSP不扩张。
