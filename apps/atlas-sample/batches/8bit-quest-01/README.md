# 8bitcn QuestLogExample · 原四任务场景

恢复 `8bitcn:quest-log`，一族，不按四个任务/状态计数。固定 TheOrcDev/8bitcn-ui@9642217f41d66d5410cc3fb54a4d582c14bd8d18，原 components/examples/quest-log.tsx、QuestLog 和全部本地组件逻辑逐字保留。原排序只把 active 提前，其他顺序不变；四个状态是固定故事fixture，不修改游戏任务状态、执行任务或连接Agent。

原Radix multiple Accordion真实展开/收起，原 active badge、ScrollArea与Card/Badge像素边条保留。原传入maxHeight=500px没有被QuestLog使用，实际原ScrollArea h400保留，不宣称500生效。测试专用empty包仅验证原EmptyState，不是公开产品模式，不计额外族。

## 适配范围
删 retro.css 的 Google 字体 import 与 Press Start 2P 名称，使用其原 system-ui/-apple-system/sans-serif fallback。字形不等同原像素字体，没有打包/编码字体。原Tailwind组件classes与default主题tokens保留；仅去除整个官网fumadocs文档壳样式导入及无关主题预设，没有额外重画任务外观。宿主标题、说明、留白、焦点框为本地新增；上游默认未独立定义的accordion动画没有伪造，功能状态由原Radix决定。

utils只保留原 cn 包导出，去除无关站点URL helper。运行时精确23包的完整LICENSE/NOTICE以及Tailwind生成样式许可在THIRD-PARTY-NOTICES；CVA为Apache-2.0、Lucide为ISC且保留Feather MIT，不能统一称MIT。8bitcn根MIT全文保留，shadcn派生基础helpers补官方完整MIT（不冒称后者commit为组件来源）。无媒体、远程字体、账号、网络或外部API。

## 生命周期与测试
host封装React边界。hidden卸载，visible以原四fixture重挂，因此展开状态会重置；重复visible事件幂等，不再次挂载；pagehide/atlas:dispose卸载并移除React根委托handler和同步注册的document handler。记录的listener仅用于该iframe内实际控件生命周期，未永久修改EventTarget全局。顶层原模块初始化错误、缺root/首次按钮渲染失败/后来重挂失败明确显示停止，无无限重试。

`node test.mjs normal`（或reduced/early/hidden-early/failure/missing-root/latefail/early-module）：8个生产分支每次实际调用ui-vault-535 composePreview，exact无defer runtime标签与原CSP不变。四fixture/active排首/1 Active、真实展开描述、ArrowDown/ArrowUp/Home/End焦点移动、重复12次开关、隐藏旧节点及4次重挂、早退、错误分支均通过。Enter/Space浏览器默认按钮激活、真实滚动条拖动没有作原生输入验收。另`node build-empty.mjs && node test.mjs empty`只对测试入口把quests改[]，验证原EmptyState，不污染生产bundle。

记录的应用listener、timeout、RAF、ResizeObserver退出均0；请求/存储/Worker/open/eval/Function尝试0。测试mock ResizeObserver（计数生命周期但不伪称几何通过）、scrollIntoView，JSDOM不代表浏览器CSP强制执行或像素。未做真实浏览器字体/原生手势/窄屏/屏幕阅读器验收，无截图或封面。减少运动CSS禁transition/animation，功能不变，没有主动动画循环。

## 重建与证据
私有工作目录：`npm ci --ignore-scripts`，`python prepare.py`，`node build.mjs`，`npx --no-install @tailwindcss/cli -i styles.css -o delivery/runtime.css --minify`。SOURCE-EVIDENCE包含固定源哈希、包版本、许可哈希、lock及实际metafile输入，根manifest给7个公开文本资产。prepare依赖保留在本目录的upstream，并不引用用户媒体。原源码MIT允许编译分发，完整版权声明不省略。
