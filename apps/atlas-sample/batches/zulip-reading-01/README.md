# Zulip · 频道与话题阅读

固定 Zulip f0f02bcb08cb99ea161baec9a6c2edd008217dda 的完整 message_group → recipient_row → single_message → message_body Handlebars 模板，使用原消息流、标题、Markdown、配色与组件 CSS。真实 Handlebars 4.7.8 在构建时渲染三话题、六条明确虚构中文消息，包含引用、列表与代码。没有将后端模板手写成相似页面。

范围是原话题分组阅读视图，不是完整 Zulip 服务。频道/话题点击由薄宿主本地筛选已渲染分组，重置可恢复全部；这段筛选不是原 narrow_state 引擎。无登录、真实发送、同步、持久化、用户卡、消息操作菜单或服务端搜索。上述服务按钮明确禁用，不返回假成功。隐藏暂停操作，返回保留选中范围，退出禁用旧链接和按钮并移除自有监听。

媒体/图标透明改动：使用虚构消息的无附件、无状态emoji、无reaction分支；原头像模板里的图片位替换为已授权 Lucide user 原SVG，不伪称原作者头像或原Zulip字形。所有出现的功能字体图标也以Lucide0.468.0原SVG透明替换，保留原布局/类名；详见映射与源码hash。无字体文件，系统字体回退。只删本场景未使用的CSS资源URL声明（视频/图片预览、checkbox、resize等），逐条保留在SOURCE；未删除消息正文。

CSS通过原PostCSS extend/simple-vars/preset-env链和固定css_variables断点编译，再用esbuild标准压缩。没有运行时npm依赖、Handlebars eval或动态模板编译。全部模板预先渲染；宿主是本地原生事件，所有输入fixture固定可信，不支持任意HTML导入。

## 许可与验证
原Apache2全文、原NOTICE和docs/THIRDPARTY完整包含；后者是上游全项目第三方范围说明，不代表本交付发出了每个包。实际SVG为Lucide ISC与Feather MIT；Handlebars构建器MIT附全文但不在运行包。源码/构建脚本/测试只在本地工作目录，不冒称已公开ZIP。

actual571 compose normal/missing/late三模式关键验证通过：3组6消息、原引用与代码、频道与话题本地过滤、12次重置、hidden暂停/恢复、旧节点退出无复活、监听0及禁止API调用0。CSS经esbuild语法解析；JSDOM不支持部分现代CSS，仅该stylesheet解析诊断不作为视觉失败。没有实际浏览器视觉、字体/排版像素验收。
