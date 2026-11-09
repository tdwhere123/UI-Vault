# Actual · 自动化规则编辑

固定 actualbudget/actual@7d4c52647b18f1abeae5cb8f09fdd16a6d6b334b 的原 AutomationEditorPane → TypePicker / ActiveEditor / 九种完整表单。原组件、原样式令牌/主题、SVG图标、templateReducer、validateAutomation、金额格式与算术解析器保留。宿主只提供虚构类别/提醒和内存规则列表，并展示JSON表单状态。

这是准确缩为原桌面编辑组件的预览，不是原 BudgetAutomationsModal 或预算服务。没有月度预算计算、贡献金额预览、保存生效、数据库、账户、真实交易、同步、登录、存储或任何外发。旧场景核心dry-run后端依赖没有被返回0假替代。原分类候选中余额显示及相关sheet订阅明确移除，而非假造余额；没有“成功保存”回执。

可编辑原固定周期、提醒、截止日期、收入百分比、历史规则、补足上限、剩余分配、上限和长期目标表单；切换原类型、金额表达式/周期、日期、原本地校验、优先级与说明，添加/删除/重置仅宿主内存。固定示例起始日2026-11-01，日期校验使用本机当前日期；无用户真实财务资料。

透明隔离：useGlobalPref/useSyncedPref/useCategories用固定本地fixture，不接Redux或查询。只展示原桌面分支，窄窗口横向滚动，不提供整App移动端modal；不把移动版伪装已接。原GenericInput仅保留本组件实际调用的date/string分支，DateSelect原日历组件与交互保留，删除未用的账户/收款人/报告等分支。英文日期locale只捆绑原date-fns enUS，系统字体，无外部字体或图片。TypePicker和表单核心未重画，所有原首选源码/适配差异hash见SOURCE。

原声明React19.3.0，实际React/ReactDOM19.3.1；其余实际运行版本逐包见SOURCE（29包），完整MIT/Apache2/BSD3正文均在LICENSE。Actual根MIT仅覆盖实际选取公共源，不混入另有许可的sync-server。依赖没有用主MIT覆盖。

运行包以原生UTF8顶层完整语句分2片，各独立可parse且<650KiB，不编码、不跨函数切割、不放宽CSP。宿主框架复用已验证的Shadcn Admin本地生命周期隔离。隐藏卸载、返回重置本地示例；退出清理原事件/任务/observer。

验证：实际571 compose normal/missing/late关键测试；九表单真实Enter切类型、原算术输入200+50→250、优先级非负约束、原周期菜单选择weeks、说明文本安全、本地增删重置、hidden恢复/旧节点/退出，监听/timeout/RAF/observer0、禁止网络/storage/cookie/eval/Function调用0。另真实script元素执行的早期React模块异常有可见fallback；分片直接HTML顺序加载和生产loader缓存/释放通过。JSDOM布局/观察器是测试环境，不是浏览器像素/触摸或完整键盘辅助技术验收。

公开仅运行文本、完整许可与来源/验证说明；完整原件、改后源码、构建脚本和测试保存在本地工作区，不假称源码ZIP已上传。
