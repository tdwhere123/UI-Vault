# Looper · 径向相位点阵

恢复既有 `looper:radial-phase-field` 来源，一族，不重复新增来源。
原作者 Jaume Sanchez，固定 https://github.com/spite/looper/tree/9fc2130c4e087113623c508fefd9d154876bb937 。原 Loop18 不是截图：按同心环径向相位偏移与缩放黑色圆点，Canvas2D直接绘制。不是物理流体，也不是Agent真实任务或数据。

## 原版与适配
原 draw 函数、2秒周期、半径3/间距3/幅度20、800×800画布不改。只删除没有使用的 easings 导入；原件仍本地保留。宿主中文说明、播放/暂停、重置、手动相位、响应式CSS和生命周期管理为本次适配，不称为原网站完整UI。未修改主图鉴/封面，没有任何图片或二进制。

画布通过原真实 Canvas2D 绘制。初次/后续失败或 contextlost 会停帧并明确不可用，不以静态图片代替。隐藏停止绘制，恢复时按原播放状态继续；减少动态时只绘制静态帧且禁播放，仍可手动调相位，偏好关闭后不会擅自恢复动画。反复重置只保留一条RAF；退出删除canvas与全部宿主监听。

## 许可与资源
原MIT全文在 LICENSE.txt / THIRD-PARTY-NOTICES.txt。实际运行只有原Loop18、原context2d及本地主代码，没有React/Three/图像/字体/远程请求或新CSP权限。原不用的easings未打包。源码/修改/工具信息见 SOURCE-EVIDENCE.json。不提供不存在的公共ZIP。

## 真实测试及边界
六分支：normal/reduced/unsupported/early/drawfail/contextlost。使用生产IIFE运行原draw；Canvas2D为命令记录桩，确认每帧超过一万个有限数arc，0/500/1000ms原首点位置及半径符合算法，暂停/相位/隐藏/重置/减动/晚失败/退出与旧节点不复活。无真实Canvas像素或浏览器性能/合成/清晰度验收，不能称视觉通过。原算法绘制量较大，设备帧率尚未实测。无截图或封面工作。
