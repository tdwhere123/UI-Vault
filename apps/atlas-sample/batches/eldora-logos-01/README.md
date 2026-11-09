# 错峰品牌轨道

恢复既有 eldora:logo-cloud-04，不增加新来源。固定原 LogoCloud04 整页、LogoCarousel、AnimatedLogoColumn 三文件，保原三列、六素材轮转分配、100ms计时、每项2000ms、200ms列错位、入场/退出 Motion 弹簧与布局；原两种尺寸不拆条。此页是品牌列动画而非业务操作或合作客户证明。

原 Google/GitHub/Amazon/Netflix/YouTube/Instagram 六远端素材权利未闭，未下载或声称根 MIT 覆盖它们。此适配明确更换为固定 Simple Icons 1bb2f6e6ea50f920de8d2f3d273ae48564a5eaee 中逐图 metadata明确CC0的 .NET / ActivityPub / Codeberg / Markdown / Simple Icons / SourceHut 六个真实图形。保完整原 SVG 字节，通过 XML 白名单及固定 Gitblob核验，正常UTF8内联，不是截图、占位、自画或二进制包装。Simple Icons根CC0全文与免责声明俱附；品牌商标属于各自权利人，不声称商标许可、赞助或背书。原“TRUSTED BY”不实背书文案已改本地示例说明。

next/image改为固定安全SVG span，保原尺寸/类和实际图形；cn保原clsx+tailwind-merge语义，去不相关服务工具。复用原主题Tailwind配置和系统字体回退。原Motion入口12.23.24所解析实际Framer Motion12.43.0、motion-dom12.43.0、motion-utils12.39.0明确记录，不伪精确同锁版本。

生命周期：隐藏卸载停止计时/动画，恢复原第一组；reduced-motion不建周期计时且初始为静态显示；动态减动重挂。退出逐资源释放，已有取消的旧interval/RAF晚送不复活。错误/缺宿主明确不可用。没有网络、登录、存储或假交互。

## 验证
实际571兼容compose六模式 normal/reduced/early/missing/failure/production。原三列首组与21tick后第二组真实DOM断言、隐藏停止/恢复首组、旧回调回送无影响、退出所有ledger/timer/RAF/observer零、禁止API调用零。真实createPreviewLoader缓存/释放通过。Motion在JSDOM时钟/几何桩运行，不是原生像素/悬浮视觉验收。八实际emitted npm包全文，加Motion入口/编译CSS许可。
