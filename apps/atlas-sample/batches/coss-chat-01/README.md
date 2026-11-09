# Coss UI 原版完整群聊（本地演示）

恢复既有 `cossui:group-chat-demo`，一个族，不把15个情境或成员数量计作新UI。固定官方仓库 cosscom/ui @ fe6ffa81f434a4afe1c01564c13bb237564c42e2。选定原 `apps/ui/registry/default/chat-demo/chat-demo.tsx` 及递归55个TS/TSX模块、原globals.css。无Next/文档站后台或真实群服务。

## 原版保留
原Drawer整体群聊、回复聚焦及原位置返回、reaction计数与选择、回执详情、成员列表及本地管理、消息长文本、固定情境、失败重试、contenteditable mention输入、模拟发送/输入中/自动回复。原英文字段和首字母头像均保留，不是自制替身；没有远程照片、截图占位或虚假生成。群成员和权限、收据、送达、重连均只改官方本地fixture状态，不影响真实用户或账号。

## 有限适配
- 原scenario枚举经原DrawerTrigger/Button展示为宿主选择入口；中文提示新增。隐藏页面时卸载旧demo并重挂初态，pagehide卸载整个React根。
- 系统剪贴板停用：原复制MenuItem明确disabled且显示Copy text (disabled)；onCopy不再调用navigator.clipboard；宿主捕获copy/cut/paste阻止原composer剪贴板分支，不读取/写入剪贴板或请求权限。手动文字输入、mention仍用原逻辑。
- 原回复退出只在onAnimationComplete中safeToRemove；精确零位移返回没有改变动画值，可能不产生回调。补useEffect仅在“不在场+返回原位+origin===0”时移除。其余原Motion位移/opacity/时长不改。快速取消后开启另一条回复时，旧onExitComplete原来会清空新replyFocus；增加replyTo非null时不清空的所有权检查。原件与改件分别保留。
- 原主题tokens和CSS保留并用Tailwind重新编译；系统字体替代文档站字体。不下载或编码新字体/照片。

## 许可和来源
完整根MIT原文；19个实际运行包全文（Base UI1.9.0、utils/FloatingUI、Motion14、React19.3.1等MIT），Lucide0.555.0实际LICENSE同时含ISC与Feather MIT全文，CVA0.7.1为Apache-2.0。Tailwind4.3.0生成CSS全文MIT另附。整体标注MIT AND ISC AND Apache-2.0，不能把原根MIT当整包许可。无假源码ZIP；本地原件及hash在SOURCE-EVIDENCE.json。

## 验证及边界
真实组件DOM/React状态测试：输入发送/原自动回复、回复取消、reaction人数变化、成员抽屉/返回、失败重试至送达、消息收据详情、禁用copy、paste捕获、mention三候选及token插入、隐藏重置、再次打开、HTML形态输入安全呈现、发送等待中退出及计时器/RAF清理。normal/reduced/narrow/production/zero-origin分支详见本地验证日志。

JSDOM模拟了字体事件、visualViewport、Range/元素几何、ResizeObserver/IntersectionObserver、getAnimations空列表与滚动API。对真实原生动画/共享布局、背景模糊、触摸/拖动抽屉、IME与手机键盘、CSS像素未视觉验收；窄屏分支只是媒体条件模拟。没有用截图或测试hook冒充真实UI，不承诺所有15情境/全部权限组合已穷尽测试。保持默认CSP/iframe权限，禁止网络、eval/Function、worker、外部链接。源码仍保留未调用的composer剪贴板实现，但宿主捕获层阻止其事件执行。
