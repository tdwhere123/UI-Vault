# Animata 交易列表形变收据：恢复既有候选

固定来源 codse/animata revision25c27e5a874c60a56dcc1609df3b2c4f5f8456f8 的 animata/list/transaction-list.tsx，原件字节与git show核对一致，完整MIT。沿用已有animata:transaction-list ID，476仍只有来源链接无runtime；这是恢复一条，不新增候选记录。

## 保留的原设计
保留原300px圆角白卡、行布局、原共享layoutId(card/icon/name/type/amount)、spring stiffness350/damping30、AnimatePresence状态切换、收据虚线、金额/时间/支付信息层次。实际selectedId决定从哪一行展开，返回关闭同一详情。没有重新绘制外观或用截图冒充。

## 最小适配
- 原“All Transactions”按钮没有handler。本适配增加可选onAllTransactions和label props，接为本地三条/五条列表切换，保持原按钮样式和悬停/按压过渡。
- 返回按钮补中文aria-label，不改变原关闭状态逻辑。
- 原Storybook品牌账务改为明确的原创虚构五条记录，金额只作演示USD样式；卡尾0000、Demo Card不对应真实账户。不会付款、发起交易或连接服务。
- 删除原Visa/Mastercard品牌SVG实现与调用，换为小DEMO文字徽章，避免把第三方品牌图形当作MIT授权资产。布局主结构不变；Lucide通用图标按原许可分发，并附Feather MIT来源版权全文。
- 外围标题/柔和背景/说明是本适配新增，明确区别于原组件。源码仍含完整未改原件供核对。
- MotionConfig reducedMotion=user尊重系统设置；正常模式保留原共享布局位移/弹簧，reduced模式减少transform/layout运动，透明度仍可能变化。不是两个新增变体或两条记录。

## 验证
分别在normal-motion与reduced-motion环境执行8项状态/安全/清理检查：三条挂载、全部按钮真实展开五条与收起三条、点第五条显示正确金额/单号/时间/虚构支付、返回后保留展开列表、切换另一条无旧详情残留、无远程图片/账户链接/表单输入、pagehide卸载React根且RAF归零、禁Function/eval/fetch/XHR/Worker/storage/动态script均无调用。

JSDOM几何和ResizeObserver使用桩。上述两种模式的状态完成不代表共享布局像素、弹簧轨迹或真实设备视觉验收通过，也未进行完整辅助技术验收。保持显式head、离线UTF8 IIFE、默认CSP，不增加sandbox权限。

完整Animata/React/Motion/Lucide/Feather/Tailwind与实际依赖许可证附上。源码ZIP仅本地，未挂虚构下载；xterm仍是下轮候选，不在本批计完成。JS333522B/gzip106808B/CSS12751B，详情独立加载。
