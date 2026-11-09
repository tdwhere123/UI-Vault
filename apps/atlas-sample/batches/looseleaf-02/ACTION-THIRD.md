# 本地行为反馈修正

保留原视觉与本地状态，不增加服务/网络/权限。Sketchpad复制仅await成功才Copied，缺失或拒绝明确Copy unavailable；SVG下载按钮禁用且移除实际UI handler。原绘画、工具、撤销和缩略图不改。未使用download源码helper保留，不作为可用功能。此前Peel修复保留。

当前同名TSX为修后源码，ACTION-THIRD.diff记录差异；原source.zip历史版本不改。共享runtime按唯一命中替换，不是全库重新编译。浏览器剪贴板/图像视觉未作原生验收。
