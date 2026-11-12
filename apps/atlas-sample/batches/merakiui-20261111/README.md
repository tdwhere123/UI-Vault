# Meraki UI 本地预览批 · 2026-11-11

固定来源 `https://github.com/merakiui/merakiui` @ `fe0472efe93f6cd275424ecbdfa7f6cb8da6f908`，MIT 原文见 `LICENSE.txt`。
本批 15 个独立条目：源码原件已保存，本地预览可在 HTTP 服务下打开。

尚未做真实浏览器视觉与核心交互验收，也没有真实运行页面 WebP 封面；不能计入已验证库存，也未写入主图鉴目录。
远程照片或站点标识未当作已授权素材保存，预览中替换为本地原创 SVG 占位图，并在各包 README 说明。
构建通过或文件存在不等于运行验收。

| 标识 | 标题 | 预览 | 原件 |
|---|---|---|---|
| `merakiui:cookies-banner` | 隐私同意条 | [cookies-banner.html](cookies-banner.html) | [originals/cookies-banner.html](originals/cookies-banner.html) |
| `merakiui:error-404` | 404找不到页面 | [error-404.html](error-404.html) | [originals/error-404.html](originals/error-404.html) |
| `merakiui:skeleton-card` | 卡片骨架屏 | [skeleton-card.html](skeleton-card.html) | [originals/skeleton-card.html](originals/skeleton-card.html) |
| `merakiui:sign-in` | 登录页 | [sign-in.html](sign-in.html) | [originals/sign-in.html](originals/sign-in.html) |
| `merakiui:sign-up` | 注册页 | [sign-up.html](sign-up.html) | [originals/sign-up.html](originals/sign-up.html) |
| `merakiui:sign-in-select-user` | 选择账户登录 | [sign-in-select-user.html](sign-in-select-user.html) | [originals/sign-in-select-user.html](originals/sign-in-select-user.html) |
| `merakiui:alerts-error` | 全宽错误提示 | [alerts-error.html](alerts-error.html) | [originals/alerts-error.html](originals/alerts-error.html) |
| `merakiui:email-invite` | 邀请邮件 | [email-invite.html](email-invite.html) | [originals/email-invite.html](originals/email-invite.html) |
| `merakiui:email-verification` | 验证码邮件 | [email-verification.html](email-verification.html) | [originals/email-verification.html](originals/email-verification.html) |
| `merakiui:email-news` | 新闻邮件 | [email-news.html](email-news.html) | [originals/email-news.html](originals/email-news.html) |
| `merakiui:email-notification` | 通知邮件 | [email-notification.html](email-notification.html) | [originals/email-notification.html](originals/email-notification.html) |
| `merakiui:hero-pattern` | 图案背景首屏 | [hero-pattern.html](hero-pattern.html) | [originals/hero-pattern.html](originals/hero-pattern.html) |
| `merakiui:form-search` | 搜索框 | [form-search.html](form-search.html) | [originals/form-search.html](originals/form-search.html) |
| `merakiui:form-account-settings` | 账户设置表单 | [form-account-settings.html](form-account-settings.html) | [originals/form-account-settings.html](originals/form-account-settings.html) |
| `merakiui:blog-single-post` | 博文阅读页 | [blog-single-post.html](blog-single-post.html) | [originals/blog-single-post.html](originals/blog-single-post.html) |

## 2026-11-12 alerts-error 关闭按钮（上游范围）
公开站 GUI（见证据目录 public-gui-six/REPORT.md 原件，本处只引用）观察：点击关闭后提示仍在，仅见焦点样式。对照原件与预览，关闭按钮均无 onclick / 关闭脚本 / Alpine 接线，与上游静态标记一致。此为仅呈现，不补造关闭业务动作，不因此判整批失败，也不称为交互通过。
