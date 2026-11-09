# 书架双列表编排

恢复BookStack旧条目shelf-book-organization，选固定原form.blade.php中的完整shelf-sort区域与原shelf-sort-book-item.blade.php。原ShelfSort、multi-lists、Dropdown及KeyboardNavigationHandler/DOM工具实际运行，Sortable1.15.7保原handle/group/animation配置。原书架五本虚构书目，搜索候选、加入/移除、上移/下移、按名称/创建/更新排序与再次点击反序、原hidden books字段回传顺序。不是BookStack整站或服务器保存，也未接书籍正文/章节阅读。

Blade不是浏览器运行时：固定模板中本地foreach/转义变量/trans标签/icon在构建期透明替换为固定fixture，保原DOM/classes/refs，不称PHP/Laravel完整执行。未引入外围name/description富编辑器、封面、标签编辑、权限/CSRF、提交/取消真实路由；不以封面占位充数。宿主中文说明、标题与窄屏外框是明确适配。

原样式原SCSS编译，系统字体回退。原7功能图标可能源于Material图形但固定仓暂无逐图许可证明，因此仅功能图标透明替换为已核Tabler1.119.0原SVG（同语义，不冒称原字形），原按钮/间距保持。排除不适用input/富正文callout的base64 PNG/SVG背景声明，不重编码这些素材；原CSS percent-encoded SVG纸纹为原文本样式，不是截图或二进制包装。Eric Meyer reset原public-domain头保留在来源与NOTICES；无字体文件/CDN/媒体。

透明生命周期修复：ShelfSort保存两个原Sortable实例并逐项destroy，即使首项异常仍销毁后续；宿主菜单、拖拽、监听资源各自尽力释放，部分清理错误显示明确停止状态；Dropdown原每次show新增匿名window click改为同引用，hide即时移除click/mouseleave；其余原排序/移动/过滤算法不改。隐藏时关闭菜单、destroy拖拽并暂停动画，保本地书目/筛选/顺序；恢复只重建拖拽实例，不重复原事件注册。隐藏时capture阻止输入/指针/键盘事件，退出完整清理宿主与库监听、计时器、RAF和observer。早期/缺root/晚期错误failclosed。

## 验证
actual571 compose七模式（另含destroy-failure首实例与菜单销毁故障）normal/reduced/early/missing/failure/production。原按钮添加/移动/删除改变真实DOM与hidden顺序；搜索过滤、创建时间排序/反序、原Dropdown打开与Escape关闭、隐藏保值/停止拖拽/恢复两实例、旧RAF回送与退出旧节点不复活，资源全0，禁止API调用0。真实createPreviewLoader缓存重挂/释放通过。Sortable生产代码真实保留，但JSDOM仅布局桩，未声称原生拖动几何/触屏/像素验证；键盘按钮点击和菜单事件有实际DOM验证。

固定原文件hash与URL、实际唯一npm runtime Sortable1.15.7 MIT全文、TablerMIT与Sass构建许可齐全。DOM工具中cyrb53等无关函数被tree-shake，不把整仓第三方代码当已发出。无网络/存储/剪贴板/后台，不提供假源码ZIP。
