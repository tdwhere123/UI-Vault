# 虚构职位目录与详情

恢复原 `smoothui:job-listing-component`，一个族、三个本地fixture不算三项。SmoothUI官方固定 c45420a8523ec60a92f7724a2418ab83edaa1425，原路径packages/smoothui/components/job-listing-component/index.tsx。完整根MIT、实际运行依赖全文另附。

保留原列表→共享layoutId详情放大、logo同步转场、背景模糊层、薪资/地点/工时字段及描述、useOnClickOutside、Escape关闭、原Motion曲线/参数/reduced分支。不是从截图重新绘制。原公司商标导出删除，三个虚构公司、中文岗位说明及原创字形是宿主fixture，不是上游招聘内容；无摄影替换或媒体授权假定。无真实招聘、筛选、投递、联系、付款或外部服务。

适配增加列表role/button和Enter/Space、详情焦点、关闭按钮及关闭后的原触发卡焦点恢复。不声称完整modal焦点陷阱或无障碍审计；原背景卡仍在DOM。页面隐藏卸载并重挂空状态，退出卸载根；不会锁body滚动。原源码保存在独立工作目录，未假称公开源码ZIP。

构建固定包版本见package-lock及SOURCE-EVIDENCE各runtimePackages。usehooks-ts原模块有与本组件无关的lodash.debounce静态导入，含Function全局探测回退。构建时仅移除此未使用导入，保留useOnClickOutside/useEventListener原函数逐字实现，tree-shake其他未用hook；最终bundle无该依赖或Function回退，不放宽CSP。

原monorepo别名接本地cn（clsx/tailwind-merge），原设计tokens经Tailwind编译，仅静态UTF8资产。CSP不扩，无network/eval/worker/外部字体/二进制包装。

测试normal/reduced/production真实组件选择状态、Enter/Space、描述、Escape/点外/按钮关闭、焦点恢复、重复/快速切换、隐藏和退出中断。测试为共享布局提供明确几何stub（600px宽、卡片80/详情350px高）；零几何JSDOM无法正常结束原共享layout退出，加入stub后原序列通过。这不是修复或替换原动画，也不是像素证据。JSDOM不是实际浏览器排版，背景模糊与共享布局几何/移动端像素仍待视觉验收。
