# Apache ECharts · 多维策略区间刷选

## 来源与去重
Apache ECharts6.1.0，固定官方发布revision c5a48f5f97d23e5379720870b8444cd05b50ffb4。仅导入 ParallelChart、ParallelComponent、TooltipComponent、SVGRenderer，原布局、刷选action、series active计算、图形渲染与高亮未改写。

已完整读取470 candidate-catalog。已有 d3-sankey:workload-flow，故撤回初始Sankey设想，选择不同任务的四维平行坐标交集筛选。不把绘图引擎下普通变体各计一项，整页只计一个工具。

此页面明确是原创界面壳＋原始开源引擎，不是上游成品整页。12条策略是原创虚构数据，标题/画面/详情均声明不是实际模型或产品评测。四轴为演示成本点数、延迟、覆盖率、稳定度，没有真实人物或敏感评价。

## 原生交互
图形SVG由ECharts生成。用户原生拖动轴区间，或预设/数字范围按钮调用同一个原生 axisAreaSelect action。联动结果来自原 ParallelSeries.getRawIndicesByActiveState(active/normal)，该方法在上游源码明确用于 axisAreaSelected 事件读取；没有用另一份自写过滤算法冒充引擎状态。

读取原parallelAxis.activeIntervals呈现当前区间。结果选择调用原highlight/downplay；每次筛选更新会清除旧手动高亮。数字参数改变时保留上次已应用选择，并明确提示待应用；点击应用才替换轴区间。清空刷选恢复全体。无数据上传、保存、外链、生成式建议或真实决策执行。

默认CSP/sandbox权限即可。Tooltip为原richText/SVG模式，不注入自定义HTML。字体为本地system-ui；SVG渲染仍可能调用Canvas进行文字测量，不需要外部字体或二进制资源。

## 许可与原件
完整ECharts Apache LICENSE及NOTICE；ECharts许可证列明的D3子组件BSD全文（包含实际会用到的number工具）；zrender6.1.0 BSD全文；tslib2.3.0 0BSD及CopyrightNotice均附。esbuild metafile确认实际运行依赖仅echarts/zrender/tslib。保留固定TS组件原件及实际打包JS模块SHA256、锁文件和源码ZIP；ZIP只本地，不挂虚假下载。

## 验证与清理
14项JSDOM真实引擎状态/清理测试：12条线SVG挂载；原轴action低延迟4条、预算覆盖交集1条、稳定度3条、严格交集0条；双范围预期E/H两条；当前区间模型读取；参数待应用保留旧选择；高亮/清除；结果详情；无外部资产；销毁后ResizeObserver断开、原chart.dispose清除SVG、renderer RAF归零；禁Function/eval/fetch/XHR/Worker/storage/动态script均无调用。

未运行真实浏览器视觉验收，也没有把按钮dispatchAction测试冒称真实鼠标拖刷手感验证。JSDOM对元素几何与Canvas文字测量使用桩。原生轴拖刷与触摸交互代码保留，实际视觉、字符排版、手指操作仍待验收。

详情独立按需加载：JS491229B，gzip168498B，CSS2951B。没有全站常驻图表或同时播放动画。pagehide解除事件、断开观察器、dispose原引擎并清空DOM，不留下渲染循环。
