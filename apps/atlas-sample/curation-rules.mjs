export default [
  {
    "id": "chatui:rich-service-conversation",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "富文字客服会话与快捷短语",
    "reason": "虚构原回复；隐藏重置。可参考文字消息，不能代表完整富媒体客服体验",
    "deliveredScope": "文字会话、快捷短语、5技能卡、评价和固定延时回复；移除商品选择/图片/头像/录音，卡片原无handler按钮禁用",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/chatui-service-01/chat/README.md",
      "ui-vault-581/apps/atlas-sample/batches/chatui-service-01/chat/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "quartz-v4:linked-knowledge-garden",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "笔记目录搜索与双向链接",
    "reason": "知识阅读信息结构有用，但图谱是关键卖点且不能拿模拟renderer证明可看",
    "deliveredScope": "原SSR结构+搜索/目录/回链，3篇宿主笔记；原Pixi/D3图谱仅实际测unsupported及测试renderer清理",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/quartz-garden-01/garden/README.md",
      "ui-vault-581/apps/atlas-sample/batches/quartz-garden-01/garden/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "bruno:request-response-workspace",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "请求参数编辑与文字响应",
    "reason": "参数编辑有参考价值；固定响应不体现真实请求工具，虚拟表和CM输入只有几何桩",
    "deliveredScope": "抽取Params/Headers/纯文本Body、原CM5与reducers；宿主固定collection双栏，响应固定文字，不发请求",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/bruno-workspace-01/workspace/README.md",
      "ui-vault-581/apps/atlas-sample/batches/bruno-workspace-01/workspace/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "silverbullet:document-navigation-workspace",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "文档树导航与本地编辑",
    "reason": "与一般CM文档树高度重叠，SilverBullet独特知识机制没有展示",
    "deliveredScope": "原TopBar/TreeView+text-document分支，宿主3文档两栏；移除page-live-preview、SpaceLua/Vim/插件/同步",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/silverbullet-documents-01/README.md",
      "ui-vault-581/apps/atlas-sample/batches/silverbullet-documents-01/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "bookstack:shelf-book-organization",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "书架双列表编排",
    "reason": "原目标本就书架组织，双列表有用；不要说知识库完成。拖拽只有逻辑证据",
    "deliveredScope": "原shelf-sort双列表、排序搜索/菜单；排除名称说明/封面/标签/权限/提交、章节阅读",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/bookstack-shelf-01/README.md",
      "ui-vault-581/apps/atlas-sample/batches/bookstack-shelf-01/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "githistory:file-version-time-travel",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "代码版本历史漫游",
    "reason": "代码结果对比适合Exodus；关键动画像素与滚轮效果仍未经native",
    "deliveredScope": "原差异高亮、虚拟行、弹簧、键盘导航，3固定提交，无头像外链/更多加载",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/git-history-01/README.md",
      "ui-vault-581/apps/atlas-sample/batches/git-history-01/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "pizzicato:audio-effect-playground",
    "recommendation": "review",
    "layer": "experiment",
    "scopeLabel": "合成波形与声效参数面板",
    "reason": "声效反馈可参考，但实际可听完全未验且不是语音或原音乐演示",
    "deliveredScope": "精选Waveform/Attack-Release/Delay/LowPass四段；后两音乐改合成测试音，其他段不收",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/pizzicato-effects-01/audio/README.md",
      "ui-vault-581/apps/atlas-sample/batches/pizzicato-effects-01/audio/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "jupyterlab:notebook-document-scene",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "本地笔记本文档与单元编辑",
    "reason": "单元编辑有独立价值，但7.06MB UTF16较重、用户可能期待执行代码，隐藏丢编辑",
    "deliveredScope": "原Notebook/CM/单元动作+工具栏命令面板；宿主Panel替服务Panel，2格样例无内核/保存/补全",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/jupyter-notebook-01/notebook/README.md",
      "ui-vault-581/apps/atlas-sample/batches/jupyter-notebook-01/notebook/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "react-page:multilingual-cell-editor",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "多语言单元内容编辑器",
    "reason": "适合内容编排，主卖点移动/缩放和IME未native验，隐藏重置",
    "deliveredScope": "真实双语/Slate/custom单元/样式表单/模式；去image，4固定schema预编译",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/reactpage-language-01/editor/README.md",
      "ui-vault-581/apps/atlas-sample/batches/reactpage-language-01/editor/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "blocknote:document-comments-workspace",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "文档编辑与评论线程",
    "reason": "Exodus批注价值高；多数评论深操作用test-only API验证，真实用户选区建评论仍需检查",
    "deliveredScope": "原编辑器/CommentsExtension/YjsThreadStore，本地Y.Doc、线程回复解决重开/角色；无远程协作/媒体",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/blocknote-comments-01/comments/README.md",
      "ui-vault-581/apps/atlas-sample/batches/blocknote-comments-01/comments/SOURCE-EVIDENCE.json",
      "ui-vault-581/apps/atlas-sample/batches/blocknote-comments-01/comments/SOURCE-PATCHES.json"
    ]
  },
  {
    "id": "copilotkit:presentation-coauthor",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "文字幻灯片与讲稿编辑",
    "reason": "作为简单文字slide可用，但与原视觉展示差距大，生成协作主价值未展示",
    "deliveredScope": "原正文/讲稿编辑、增删导航，照片栏收起，生成研究朗读禁用",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/presentation-text-01/editor/README.md",
      "ui-vault-581/apps/atlas-sample/batches/presentation-text-01/editor/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "copilotkit:a2ui-document-surfaces",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "协议驱动文档结果面板",
    "reason": "协议动态UI有独立参考价值，不能把3行数据说成PDF分析",
    "deliveredScope": "原SurfaceCanvas/catalog+真实协议renderer；宿主3文档和绑定动作，无PDF/AI",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/a2ui-surfaces-01/surfaces/README.md",
      "ui-vault-581/apps/atlas-sample/batches/a2ui-surfaces-01/surfaces/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "copilotkit:resume-job-match",
    "recommendation": "review",
    "layer": "experiment",
    "scopeLabel": "简历样例校验与职位结果",
    "reason": "几乎只能看固定提交态；职位匹配属于假结果，适配价值低于完整原流程",
    "deliveredScope": "原表单/结果表，真实picker禁用；内造File经原校验，300ms模拟返回2职位",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/resume-local-01/resume/README.md",
      "ui-vault-581/apps/atlas-sample/batches/resume-local-01/resume/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "copilotkit:connected-tool-results",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "工具执行结果富卡片",
    "reason": "静态富消息本就是原职责，适合Exodus，不必要求执行邮件才有价值",
    "deliveredScope": "原7导出卡/解析/数量上限保留，宿主虚构props，href移除",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/tool-results-01/results/README.md",
      "ui-vault-581/apps/atlas-sample/batches/tool-results-01/results/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "copilotkit:repo-doctor-tool-approval",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "工具请求审批与文件差异",
    "reason": "Exodus审批人机交互直接相关；本地Approved不得误解为实际执行",
    "deliveredScope": "原批准拒绝备注/失败重试/真实Shiki差异，宿主3虚构请求与Promise",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/repo-approval-01/approval/README.md",
      "ui-vault-581/apps/atlas-sample/batches/repo-approval-01/approval/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "copilotkit:research-artifact-workspace",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "研究任务与产物阅读工作区",
    "reason": "研究产物阅读结构有价值，不是研究服务或真实证据",
    "deliveredScope": "完整Workspace/Section/Todo/File/Source/Modal，虚构Markdown；下载与引用外跳禁用",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/research-workspace-01/workspace/README.md",
      "ui-vault-581/apps/atlas-sample/batches/research-workspace-01/workspace/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "copilotkit:research-sections-canvas",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "分节研究报告编辑画布",
    "reason": "富内容人工修改价值明确；流状态为演示不应当真实研究",
    "deliveredScope": "原全文/单节/缩略导航与标题Markdown编辑，虚构内容和模拟流状态",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/research-sections-01/README.md",
      "ui-vault-581/apps/atlas-sample/batches/research-sections-01/SOURCE.json"
    ]
  },
  {
    "id": "copilotkit:discourse-evidence-report",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "论点分布与引用阅读报告",
    "reason": "结果设计适合Exodus；原数据非真实，不能把比例作可信度证据",
    "deliveredScope": "原双列支持比例与引用阅读，虚构讨论，首字母fallback、无外链",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/discourse-report-01/README.md",
      "ui-vault-581/apps/atlas-sample/batches/discourse-report-01/SOURCE.json"
    ]
  },
  {
    "id": "aicanvas:ai-job-cards",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "职位叠卡轮换与收藏",
    "reason": "视觉叠卡有参考价值但不是招聘工具；动画/手势native未验",
    "deliveredScope": "原9卡/品牌SVG/书签/轮换/拖阈值；原View无动作改禁用，招聘是虚构",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/ai-jobs-01/job-cards/README.md",
      "ui-vault-581/apps/atlas-sample/batches/ai-jobs-01/job-cards/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "cossui:group-chat-demo",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Coss UI · 本地完整群聊状态演示",
    "reason": "Exodus对话交互价值高；Motion布局、抽屉触摸、mention IME仍未native验",
    "deliveredScope": "原Drawer/回复/反应/回执/成员/mention/失败重试/模拟发送；停剪贴板",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/coss-chat-01/README.md",
      "ui-vault-581/apps/atlas-sample/batches/coss-chat-01/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "cossui:event-type-ordering",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "事件目录排序与撤销",
    "reason": "排序撤销可复用；业务按钮大量不可用但原也无实现，不宜硬造",
    "deliveredScope": "完整5行原排序/撤销/显隐；原菜单noop及路由禁用",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/coss-events-01/events/README.md",
      "ui-vault-581/apps/atlas-sample/batches/coss-events-01/events/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "eldora:logo-cloud-04",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "错峰品牌轨道",
    "reason": "装饰反馈非Exodus任务工具；替换轮廓破坏原视觉平衡可能性未验",
    "deliveredScope": "原3列时序/弹簧，原6品牌全部换为有授权6技术品牌SVG",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/eldora-logos-01/README.md",
      "ui-vault-581/apps/atlas-sample/batches/eldora-logos-01/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "astryx:library",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "AstryX · 素材库浏览与筛选",
    "reason": "iframe CSP 阻断预览图，卡片预览区破图/空白，核心视觉缺失，不做封面",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/astryx--library.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "historical-render-failure",
    "historicalCapture": {
      "status": "failed",
      "reason": "iframe CSP 阻断预览图，卡片预览区破图/空白，核心视觉缺失，不做封面",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "历史截图记录，不是本轮原生复验；相同资产不保证不同宿主/视口/时机的结果相同。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/astryx-next-01/library/index.html",
          "captureSHA256": "6e24039b24fe033e6b41a9a1f7c69932a15d2b923afb6ae5a10c2f7fb9261e2d",
          "snapshot581SHA256": "6e24039b24fe033e6b41a9a1f7c69932a15d2b923afb6ae5a10c2f7fb9261e2d",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/astryx-next-01/library/runtime.css",
          "captureSHA256": "55fef27d9cf782bd7cd2637a5db7b14706a6e3fc7164269149bf6d6be596ae0a",
          "snapshot581SHA256": "55fef27d9cf782bd7cd2637a5db7b14706a6e3fc7164269149bf6d6be596ae0a",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/astryx-next-01/library/runtime.js",
          "captureSHA256": "fa3c6f404ff432c2c307a626a0174f0a7d0df0d675e8dee19fbd40b4bc9893dd",
          "snapshot581SHA256": "fa3c6f404ff432c2c307a626a0174f0a7d0df0d675e8dee19fbd40b4bc9893dd",
          "sameBytes": true
        }
      ]
    }
  },
  {
    "id": "fancy:screensaver",
    "recommendation": "review",
    "layer": "experiment",
    "scopeLabel": "fancy:screensaver",
    "reason": "原404屏保实验自身显示 page not found；动画、尺寸与参考价值待复核，不能据此判定路由404或当前渲染失败。",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/fancy--screensaver.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "historical-failure-disputed",
    "historicalCapture": {
      "status": "failed",
      "reason": "The iframe explicitly renders “page not found” instead of the screensaver component.",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "保留历史 failed 原记录；原JSX反证说明 page not found 是设计文案，不是路由404。待复核动画/尺寸/参考价值，无本轮原生复验。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/fancy-next-01/screensaver.html",
          "captureSHA256": "139719649c285e0962ce641bcbb6300eebe5f7d64320623e0bd6ed2305d5ee0a",
          "snapshot581SHA256": "139719649c285e0962ce641bcbb6300eebe5f7d64320623e0bd6ed2305d5ee0a",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/fancy-next-01/runtime.css",
          "captureSHA256": "cce34d3a24574ca7548b9e424b9e8c848648fdb91dbc859d2b56e067de165dd5",
          "snapshot581SHA256": "cce34d3a24574ca7548b9e424b9e8c848648fdb91dbc859d2b56e067de165dd5",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/fancy-next-01/runtime.js",
          "captureSHA256": "0992e28dc6c0c5e8779b168b7359e691e309ef7a9a4704a74bee4ac076c35f75",
          "snapshot581SHA256": "0992e28dc6c0c5e8779b168b7359e691e309ef7a9a4704a74bee4ac076c35f75",
          "sameBytes": true
        }
      ],
      "counterEvidence": {
        "source": "audit_formity source/registry review relayed by parent",
        "registryResolution": "gD matched screensaver entry",
        "originalJSX": "Original demo h1 contains page not found and bouncing image",
        "interpretation": "Original designed 404 screensaver text, not evidence of missing route. Historical Grok failed record retained, inference disputed.",
        "routeFailureInferred": false
      }
    }
  },
  {
    "id": "smoothui:pixel-brush-canvas",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "像素画板与撤销",
    "reason": "本地笔画仍为空（0 painted pixels），空画布不算成品封面",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/smoothui--pixel-brush-canvas.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "historical-render-failure",
    "historicalCapture": {
      "status": "failed",
      "reason": "本地笔画仍为空（0 painted pixels），空画布不算成品封面",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "历史截图记录，不是本轮原生复验；相同资产不保证不同宿主/视口/时机的结果相同。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/smooth-direct-01/pixel-brush-canvas.html",
          "captureSHA256": "dd7842e5a860a959b741ce042a7ef1d6cb85d774cd4bcd4de147874715938d7f",
          "snapshot581SHA256": "dd7842e5a860a959b741ce042a7ef1d6cb85d774cd4bcd4de147874715938d7f",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/smooth-direct-01/runtime.css",
          "captureSHA256": "8ab6a6ab0edd0c31408e5a3cceef0ec4fe90d563e49e4e51d0c2e0c0e35ee241",
          "snapshot581SHA256": "8ab6a6ab0edd0c31408e5a3cceef0ec4fe90d563e49e4e51d0c2e0c0e35ee241",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/smooth-direct-01/runtime.js",
          "captureSHA256": "80c05a741bcb1c1edab67a1969bb0d2fcc54c1760dcf0b8b618847a2b6cbb6eb",
          "snapshot581SHA256": "80c05a741bcb1c1edab67a1969bb0d2fcc54c1760dcf0b8b618847a2b6cbb6eb",
          "sameBytes": true
        }
      ]
    }
  },
  {
    "id": "uilayout:timeline-animation-index",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "timeline-animation-index",
    "reason": "Iframe screenshot is blank despite some accessibility text being present.",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/uilayout--timeline-animation-index.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "historical-render-failure",
    "historicalCapture": {
      "status": "failed",
      "reason": "Iframe screenshot is blank despite some accessibility text being present.",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "历史截图记录，不是本轮原生复验；相同资产不保证不同宿主/视口/时机的结果相同。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/uilayout-next-02/timeline-animation-index.html",
          "captureSHA256": "e69a33b1b694fa4a3723ac1adf40544b4ee0b2746f71f767d0aaaf594e43f461",
          "snapshot581SHA256": "e69a33b1b694fa4a3723ac1adf40544b4ee0b2746f71f767d0aaaf594e43f461",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/uilayout-next-02/runtime.css",
          "captureSHA256": "49ac10fb226d12bb57164f9e591ca75592e91aa888e6d7a6248ade5ad7a2938f",
          "snapshot581SHA256": "49ac10fb226d12bb57164f9e591ca75592e91aa888e6d7a6248ade5ad7a2938f",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/uilayout-next-02/runtime.js",
          "captureSHA256": "6b066a383be8557449bb0c2517373717b75e13eb547d0c6852c352059bd313bd",
          "snapshot581SHA256": "6b066a383be8557449bb0c2517373717b75e13eb547d0c6852c352059bd313bd",
          "sameBytes": true
        }
      ]
    }
  },
  {
    "id": "vis-timeline:local-task-planner",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "可编辑任务时间轴 · 分组时序计划",
    "reason": "Timeline plot region blank after Fit all tasks; no usable #demo subject for cover.",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/vis-timeline--local-task-planner.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "historical-render-failure",
    "historicalCapture": {
      "status": "failed",
      "reason": "Timeline plot region blank after Fit all tasks; no usable #demo subject for cover.",
      "newBrowserVerification": false,
      "resourceContinuity": "unknown-no-recorded-hashes",
      "currentFailureConfirmed": false,
      "note": "历史失败无记录资源hash，不能推断当前版本必坏。",
      "resources": []
    }
  },
  {
    "id": "aicanvas:stack-tower",
    "recommendation": "review",
    "layer": "experiment",
    "scopeLabel": "Stack Tower · 错相字层动态雕塑",
    "reason": "partial_content_overflow",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/aicanvas--stack-tower.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "needs-recapture",
    "historicalCapture": {
      "status": "needs_recapture",
      "reason": "partial_content_overflow",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "历史截图记录，不是本轮原生复验；相同资产不保证不同宿主/视口/时机的结果相同。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/aicanvas-tower-01/index.html",
          "captureSHA256": "6e5640994465d0345ecdf9f96a1aed370371f656d6c752deaa1ba1112b44d7fc",
          "snapshot581SHA256": "6e5640994465d0345ecdf9f96a1aed370371f656d6c752deaa1ba1112b44d7fc",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/aicanvas-tower-01/runtime.css",
          "captureSHA256": "fc582931e3e923a19bffc68b34935cdae7c2db62d479de13add542ae47187209",
          "snapshot581SHA256": "fc582931e3e923a19bffc68b34935cdae7c2db62d479de13add542ae47187209",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/aicanvas-tower-01/runtime.js",
          "captureSHA256": "ee4e4874d1252218f5d3d0d4d82b5e1827a67926e81a25d3a897b8dd8e7b7a0b",
          "snapshot581SHA256": "ee4e4874d1252218f5d3d0d4d82b5e1827a67926e81a25d3a897b8dd8e7b7a0b",
          "sameBytes": true
        }
      ]
    }
  },
  {
    "id": "blode:dnd-grid",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "实体面板 · 拖动缩放网格",
    "reason": "DnD grid after scroll; upper tile A still truncated at iframe top.",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/blode--dnd-grid.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "needs-recapture",
    "historicalCapture": {
      "status": "needs_recapture",
      "reason": "DnD grid after scroll; upper tile A still truncated at iframe top.",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "历史截图记录，不是本轮原生复验；相同资产不保证不同宿主/视口/时机的结果相同。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/blode-spatial-01/dnd-grid/index.html",
          "captureSHA256": "ff0f949d7f0f30784fb72a4efba96f5f93928c7cf35b5b6018d61add91ec01ba",
          "snapshot581SHA256": "ff0f949d7f0f30784fb72a4efba96f5f93928c7cf35b5b6018d61add91ec01ba",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/blode-spatial-01/dnd-grid/runtime.css",
          "captureSHA256": "fbbbe2789790369b56e597b94b9979be3488d8153c013325004cb9a4a912d445",
          "snapshot581SHA256": "fbbbe2789790369b56e597b94b9979be3488d8153c013325004cb9a4a912d445",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/blode-spatial-01/dnd-grid/runtime.js",
          "captureSHA256": "657028a43d075b943e69f6a9dd56b0252873a8d5b591807236509f3931e2344e",
          "snapshot581SHA256": "657028a43d075b943e69f6a9dd56b0252873a8d5b591807236509f3931e2344e",
          "sameBytes": true
        }
      ]
    }
  },
  {
    "id": "blode:omni-color-picker",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "Omni 二维惯性主题颜色选择器",
    "reason": "partial_content_overflow",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/blode--omni-color-picker.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "needs-recapture",
    "historicalCapture": {
      "status": "needs_recapture",
      "reason": "partial_content_overflow",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "历史截图记录，不是本轮原生复验；相同资产不保证不同宿主/视口/时机的结果相同。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/blode-practical-01/omni/index.html",
          "captureSHA256": "bd6ddb60aeda53e881865ef24c14010ee5343b246eb13735fdab7c4a7b54260c",
          "snapshot581SHA256": "bd6ddb60aeda53e881865ef24c14010ee5343b246eb13735fdab7c4a7b54260c",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/blode-practical-01/omni/runtime.css",
          "captureSHA256": "aeab130e3191fc2cd1c0577b509541c0fcf257f02a6426736b54999939c8e9a9",
          "snapshot581SHA256": "aeab130e3191fc2cd1c0577b509541c0fcf257f02a6426736b54999939c8e9a9",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/blode-practical-01/omni/runtime.js",
          "captureSHA256": "e7320c7a53cc828d37e58f0d1eb9263ba29a90f7dcb3b9cb28f0bb1865c9c1a8",
          "snapshot581SHA256": "e7320c7a53cc828d37e58f0d1eb9263ba29a90f7dcb3b9cb28f0bb1865c9c1a8",
          "sameBytes": true
        }
      ]
    }
  },
  {
    "id": "smoothui:image-metadata-preview",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "图片元数据展开卡",
    "reason": "Image+metadata preview after upward scroll; illustration/meta still partially clipped.",
    "evidence": [
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/records/smoothui--image-metadata-preview.json",
      "/workspace/scratch/15f43349f656/ui-vault-581/reports/thumbnail-capture/final-closeout-summary.json"
    ],
    "evidenceStatus": "needs-recapture",
    "historicalCapture": {
      "status": "needs_recapture",
      "reason": "Image+metadata preview after upward scroll; illustration/meta still partially clipped.",
      "newBrowserVerification": false,
      "resourceContinuity": "same-581-bytes",
      "currentFailureConfirmed": false,
      "note": "历史截图记录，不是本轮原生复验；相同资产不保证不同宿主/视口/时机的结果相同。",
      "resources": [
        {
          "path": "apps/atlas-sample/batches/smooth-direct-01/image-metadata-preview.html",
          "captureSHA256": "566fd1ede7c61f9a2bc0ec0543dd70afc14584ed1955c8e4ee13bed009d38259",
          "snapshot581SHA256": "566fd1ede7c61f9a2bc0ec0543dd70afc14584ed1955c8e4ee13bed009d38259",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/smooth-direct-01/runtime.css",
          "captureSHA256": "8ab6a6ab0edd0c31408e5a3cceef0ec4fe90d563e49e4e51d0c2e0c0e35ee241",
          "snapshot581SHA256": "8ab6a6ab0edd0c31408e5a3cceef0ec4fe90d563e49e4e51d0c2e0c0e35ee241",
          "sameBytes": true
        },
        {
          "path": "apps/atlas-sample/batches/smooth-direct-01/runtime.js",
          "captureSHA256": "80c05a741bcb1c1edab67a1969bb0d2fcc54c1760dcf0b8b618847a2b6cbb6eb",
          "snapshot581SHA256": "80c05a741bcb1c1edab67a1969bb0d2fcc54c1760dcf0b8b618847a2b6cbb6eb",
          "sameBytes": true
        }
      ]
    }
  },
  {
    "id": "uppy:local-attachment-preparation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "批量附件准备与元数据编辑",
    "reason": "原准备流程保留度高，壳导航/配色为宿主。禁止上传符合本条local-attachment目标，不应单因无后台降级；图像文件仅类型图标，不能称媒体预览。",
    "deliveredScope": "原文件卡/列表、逐项元数据编辑、移除、数量/格式限制；2个内造File，无上传器/provider/图像缩略图",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/uppy-01/ADAPTATION.md",
      "ui-uppy-local/preview/main.js"
    ]
  },
  {
    "id": "surveyjs:project-decision-survey",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "条件校验问卷本地示例",
    "reason": "题目是宿主原创而非官方成品；真实原引擎和完整默认视觉，无自造替身。作为问卷范式参考价值清晰，不把JSONfixture冒称官方业务调查。",
    "deliveredScope": "原Survey与Model渲染宿主3页项目JSON，动态矩阵/条件/跨字段校验/本地完成结果",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/surveyjs-01/README.md",
      "ui-survey-adapt/src/main.jsx"
    ]
  },
  {
    "id": "excalidraw:local-board",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "受限本地绘图画布",
    "reason": "主要绘图机制仍完整，不是静态壳；Helvetica代Virgil明显改变手绘气质。禁保存不等于无交互价值，但不应叫完整Excalidraw服务。",
    "deliveredScope": "原绘图/选择/几何/文本/箭头/历史/画布导航；禁导入导出、媒体、库、嵌入、链接和协作",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/excalidraw-01/ADAPTATION.md",
      "ui-excalidraw-local/build/main.tsx"
    ]
  },
  {
    "id": "puck:official-visual-page-builder",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "原版页面构建器本地示例",
    "reason": "原Puck与5官方无媒体组件、字段编辑/复制/删除/历史保留；核心指针拖入/排序/嵌套的验收尚未闭合，合成几何测试未插入成功，不据此断言当前原生拖放已坏。",
    "deliveredScope": "原Puck与5官方无媒体blocks、Outline/字段/复制删除/历史；iframe官方关闭，宿主内容、无发布",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/puck-editor-01/README.md",
      "ui-puck-editor-local/src/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/puck-editor-01/SOURCE.json",
      "ui-puck-editor-local/src/main.tsx"
    ]
  },
  {
    "id": "formity:branching-loop-interview",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "条件循环访谈页面",
    "reason": "保留完整原演示页面及真实流程，不依赖虚构后端成功。原示例本就是本地问卷，范围与目标一致；布局未native不是单独降级依据。",
    "deliveredScope": "原flow/App/控件、条件追问/多选循环/回退/校验/结果重启；本地数据",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/formity-01/interview/README.md",
      "ui-formity-local/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/formity-01/interview/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "copilotkit:trip-intake-itinerary",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "虚构行程需求与结果卡",
    "reason": "原表单与结果结构保留，真正状态闭环；结果不是规划算法。Exodus富结果参考有价值，但不能称实际推荐或预订。",
    "deliveredScope": "原1–7天/1–15人/预算/必填校验，原Itinerary/MealItem；宿主同步虚构行程餐厅",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/copilot-trip-01/trip-intake/README.md",
      "ui-trip-demo-local/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/copilot-trip-01/trip-intake/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "milkdown:crepe-document-workspace",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "块式文档本地编辑",
    "reason": "整体不是窄壳，主要编辑价值高；但默认数学等功能可达时字体缺失是实质内容完整性风险，不是泛泛native未验。171包体量也需实际输入响应确认。 源码进一步确认：Crepe defaultFeatures[latex]=true，宿主未关闭；build.mjs显式移除所有@font-face。是可达默认数学特性与排版资产不完整的矛盾，不是单凭未做native测试。",
    "deliveredScope": "原ProseMirror/Crepe slash/格式/表格/代码，AI关闭，图片上传/远程关闭；KaTeX CSS保留而数学字体去除",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/milkdown-crepe-01/README.md",
      "ui-milkdown-workspace-local/src/main.js",
      "ui-vault-581/apps/atlas-sample/batches/milkdown-crepe-01/SOURCE.json",
      "ui-milkdown-workspace-local/node_modules/@milkdown/crepe/lib/esm/index.js",
      "ui-milkdown-workspace-local/build.mjs"
    ]
  },
  {
    "id": "novel:selection-writing-workspace",
    "recommendation": "review",
    "layer": "experiment",
    "scopeLabel": "预录回应的选区写作演示",
    "reason": "原编辑器真实，但选项语义不同却返回同文是高模拟边界；媒体不可用文字与缺KaTeX字体影响原整文档观感。不能作为智能写作效果样本。",
    "deliveredScope": "原advanced editor、选区菜单与替换/插入/丢弃；所有AI选项同一预录结果，原媒体替不可用文字",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/novel-workspace-01/README.md",
      "ui-novel-workspace-local/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/novel-workspace-01/SOURCE.json",
      "ui-novel-workspace-local/app/components/tailwind/generative/ai-selector.tsx"
    ]
  },
  {
    "id": "copilotkit:flight-choice-confirmation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "虚构航班选择与确认卡",
    "reason": "原可复用状态链与设计保真较高；预订未接不是缩水成静态图。必须避免Confirm/CONFIRMED被当实际预订。",
    "deliveredScope": "原3组件完整交互，2个虚构航班，本地setBooked，不含服务",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/copilot-flight-01/flight-choice/README.md",
      "ui-flight-demo-local/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/copilot-flight-01/flight-choice/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "actual:budget-automation-editor",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "预算规则表单本地编辑",
    "reason": "九表单并非无价值，原视觉保留；但原自动化用途最关键的规则效果反馈完全缺，且壳为宿主，不能等同BudgetAutomationsModal。",
    "deliveredScope": "原AutomationEditorPane与9表单/校验/reducer，宿主规则列表+JSON；无dry-run、贡献金额、余额、保存",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/actual-automation-01/README.md",
      "ui-actual-local/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/actual-automation-01/SOURCE.json",
      "ui-actual-local/main.tsx"
    ]
  },
  {
    "id": "memos:personal-knowledge-timeline",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "便笺时间线与标签阅读",
    "reason": "目标入口本为阅读卡，原组件不是Home空壳；读范围对知识引用有价值。不能把知识timeline文字说成完整笔记编辑器。",
    "deliveredScope": "原MemoHeader/Body/Markdown、长文展开、标签过滤/单条导航，3文；无编辑发布附件评论",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/memos-reader-01/README.md",
      "ui-memos-timeline-local/src/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/memos-reader-01/SOURCE.json"
    ]
  },
  {
    "id": "chainlit:execution-message-tree",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "公开执行步骤富消息树",
    "reason": "原目标就是富消息显示而非整站，后台未接不影响原组件价值。排除代码高亮/LaTeX会缩小富内容种类，须保标签。",
    "deliveredScope": "原递归步骤/折叠/运行错误完成态、受限Markdown；本地fixture开关，无agent",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/chainlit-tree-01/README.md",
      "ui-chainlit-tree-local/src/main.tsx",
      "ui-vault-581/apps/atlas-sample/batches/chainlit-tree-01/SOURCE.json"
    ]
  },
  {
    "id": "drawdb:relational-schema-workspace",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "本地关系模型编辑页面",
    "reason": "主工作区而非替壳，原关系编辑仍有实质价值。数据取官方模板而非空模型；禁保存需要清楚，不伪成功。",
    "deliveredScope": "原Editor/provider/Workspace/SidePanel/Canvas/关系/历史/布局，原Blog5表5关系；禁持久化/SQL导入导出等",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/drawdb-workspace-01/README.md",
      "ui-drawdb-workspace-local/entry.jsx",
      "ui-vault-581/apps/atlas-sample/batches/drawdb-workspace-01/SOURCE.json"
    ]
  },
  {
    "id": "miniflux:feed-reading-workspace",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "本地订阅列表与全文阅读",
    "reason": "原阅读主体与布局完整，数据替换有意义而无媒体空框。无抓取不应让整个阅读参考失去资格。",
    "deliveredScope": "真实原Go模板，列表/收藏/历史/全文/键盘/标记；3虚构文章，本地路由",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/miniflux-reader-01/README.md",
      "ui-miniflux-local/src/main.js",
      "ui-vault-581/apps/atlas-sample/batches/miniflux-reader-01/SOURCE.json"
    ]
  },
  {
    "id": "wallabag:saved-article-reading",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "文章精读与主题侧栏",
    "reason": "阅读页面核心完整，图标替Lucide、字体系统回退有视觉差异但非核心缺失。Exodus资料深阅可参考。",
    "deliveredScope": "真实原Twig阅读主体，Materialize侧栏/主题/进度，虚构文章；无保存批注抓取",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/wallabag-reader-01/README.md",
      "ui-wallabag-local/src/main.js",
      "ui-vault-581/apps/atlas-sample/batches/wallabag-reader-01/SOURCE.json"
    ]
  },
  {
    "id": "twine:branching-story-map",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "分支故事地图与段落编辑",
    "reason": "地图+结构编辑主要机制保留，textarea是官方支持分支不是新造替代；缺故事播放与全应用明确。",
    "deliveredScope": "原StoryEditRoute/PassageMap/reducer/undo/段落链接创建，原textarea偏好模式；3本地分支，无播放发布",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/twine-map-01/README.md",
      "ui-twine-map-local/src/app.tsx",
      "ui-vault-581/apps/atlas-sample/batches/twine-map-01/SOURCE.json"
    ]
  },
  {
    "id": "reactive-resume:paper-design-editor",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "简历模板 HTML 本地预览",
    "reason": "是实际原HTML引擎但不是原PDF页、分页/字体或完整builder表单；更换分支后的目标错位是硬证据，不能按原paper-design完成口径。",
    "deliveredScope": "改选官方HTML sharing分支，18模板原渲染，宿主4字段编辑/颜色/手机宽度；ShadowDOM代iframe",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/reactive-html-01/README.md",
      "ui-reactive-html-local/entry.ts",
      "ui-vault-581/apps/atlas-sample/batches/reactive-html-01/SOURCE.json",
      "ui-reactive-html-local/entry.ts"
    ]
  },
  {
    "id": "tambo:form",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "任务字段表单组件",
    "reason": "原动态表单可用，数据非官方完整应用；SDK替身不代表Agent联动。对生成式UI可参考但不是首创表单。",
    "deliveredScope": "原组件不改，宿主6字段与payload；SDK状态明确替本地React state",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/tambo-01/form/ADAPTATION.md",
      "ui-tambo-adapt/build/form.tsx"
    ]
  },
  {
    "id": "tambo:elicitation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "澄清回应与确认组件",
    "reason": "组件本身作用就是收集用户回应，本地fixture合理，不必连真实MCP才展示价值。",
    "deliveredScope": "原validation primitives/accept/decline/提交态，宿主props与结果",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/tambo-01/elicitation/ADAPTATION.md",
      "ui-tambo-adapt/build/elicitation.tsx"
    ]
  },
  {
    "id": "tambo:graph",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "多类型图表结果组件",
    "reason": "原结果组件范围较准，不因普通图表或虚构数据直接降级；图表悬停响应仍需查但非已知故障。",
    "deliveredScope": "原bar/pie/line一个族，宿主数据与切换控制，无数据查询",
    "evidence": [
      "ui-vault-581/apps/atlas-sample/batches/tambo-01/graph/ADAPTATION.md",
      "ui-tambo-adapt/build/graph.tsx"
    ]
  },
  {
    "id": "hyperui:application-accordions",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "折叠问答（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。点击展开问题答案",
    "deliveredScope": "点击展开问题答案",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-accordions",
      "previews/application-accordions.html",
      "originals/application-accordions.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-toggles",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "设置开关（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。原生复选框驱动状态切换",
    "deliveredScope": "原生复选框驱动状态切换",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-toggles",
      "previews/application-toggles.html",
      "originals/application-toggles.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-radio-groups",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "选项卡片（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。原生单选组",
    "deliveredScope": "原生单选组",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-radio-groups",
      "previews/application-radio-groups.html",
      "originals/application-radio-groups.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-range-inputs",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "范围滑块（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。拖动或键盘调整",
    "deliveredScope": "拖动或键盘调整",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-range-inputs",
      "previews/application-range-inputs.html",
      "originals/application-range-inputs.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-checkboxes",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "勾选控件（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。原生勾选状态",
    "deliveredScope": "原生勾选状态",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-checkboxes",
      "previews/application-checkboxes.html",
      "originals/application-checkboxes.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-inputs",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "文本输入（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。输入与焦点样式",
    "deliveredScope": "输入与焦点样式",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-inputs",
      "previews/application-inputs.html",
      "originals/application-inputs.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-selects",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "下拉选择（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。原生选择控件",
    "deliveredScope": "原生选择控件",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-selects",
      "previews/application-selects.html",
      "originals/application-selects.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-quantity-inputs",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "数量输入（原组件参考）",
    "reason": "原生数字输入保留；图鉴适配为原两侧按钮补充本地 stepDown/stepUp，并在组件内明确标注本地步进演示。退出时移除监听并禁用按钮，不冒称上游原有行为。",
    "deliveredScope": "数字可直接编辑，两侧按钮执行本地加减步进；步进为明确标注的图鉴适配。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-quantity-inputs",
      "previews/application-quantity-inputs.html",
      "originals/application-quantity-inputs.html",
      "ui-local-action-next-fix/VERIFICATION.json",
      "ui-local-action-next-fix/HANDOFF.md"
    ],
    "nativeVerified": false,
    "requiresPatch": "ui-local-action-next-fix/FILES.json"
  },
  {
    "id": "hyperui:application-tables",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "数据表格（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。静态表格样式，无后台数据",
    "deliveredScope": "静态表格样式，无后台数据",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-tables",
      "previews/application-tables.html",
      "originals/application-tables.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-details-list",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "信息明细（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。静态键值信息",
    "deliveredScope": "静态键值信息",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-details-list",
      "previews/application-details-list.html",
      "originals/application-details-list.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-progress-bars",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "进度指示（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。静态进度值",
    "deliveredScope": "静态进度值",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-progress-bars",
      "previews/application-progress-bars.html",
      "originals/application-progress-bars.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-timelines",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "时间线（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。静态事件时间线",
    "deliveredScope": "静态事件时间线",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-timelines",
      "previews/application-timelines.html",
      "originals/application-timelines.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-vertical-menu",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "纵向导航（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。展示导航样式，演示链接不跳转",
    "deliveredScope": "展示导航样式，演示链接不跳转",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-vertical-menu",
      "previews/application-vertical-menu.html",
      "originals/application-vertical-menu.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-tabs",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "标签导航（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。静态导航外观，不宣称面板切换",
    "deliveredScope": "静态导航外观，不宣称面板切换",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-tabs",
      "previews/application-tabs.html",
      "originals/application-tabs.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:application-button-groups",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "分组按钮（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。静态按钮外观",
    "deliveredScope": "静态按钮外观",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:application-button-groups",
      "previews/application-button-groups.html",
      "originals/application-button-groups.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:marketing-stats",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "指标区块（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。完整静态指标区块",
    "deliveredScope": "完整静态指标区块",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:marketing-stats",
      "previews/marketing-stats.html",
      "originals/marketing-stats.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:marketing-newsletter-signup",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "邮件订阅区块（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。本地表单演示，不提交数据",
    "deliveredScope": "本地表单演示，不提交数据",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:marketing-newsletter-signup",
      "previews/marketing-newsletter-signup.html",
      "originals/marketing-newsletter-signup.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:marketing-contact-forms",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "联系表单（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。本地表单演示，不提交数据",
    "deliveredScope": "本地表单演示，不提交数据",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:marketing-contact-forms",
      "previews/marketing-contact-forms.html",
      "originals/marketing-contact-forms.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:marketing-announcements",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "公告栏（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。静态公告区块",
    "deliveredScope": "静态公告区块",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:marketing-announcements",
      "previews/marketing-announcements.html",
      "originals/marketing-announcements.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "hyperui:marketing-polls",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "投票表单（原组件参考）",
    "reason": "原HTML区块/基本控件，不是整页服务；现behavior边界与源控件吻合。原生选项演示，不发送投票",
    "deliveredScope": "原生选项演示，不发送投票",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#hyperui:marketing-polls",
      "previews/marketing-polls.html",
      "originals/marketing-polls.html"
    ],
    "nativeVerified": false
  },
  {
    "id": "looseleaf:peel-corner",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可揭角优惠券（原组件参考）",
    "reason": "保留原受控揭角组件；复制处理等待 clipboard 写入成功才显示 Copied，能力缺失或拒绝显示 Copy unavailable 并捕获异常，不增加剪贴板权限或替代通道。",
    "deliveredScope": "揭角优惠券交互；复制成功才显示成功状态，不可用或被拒绝时显示失败提示。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#looseleaf:peel-corner",
      "batches/looseleaf-02/peel-corner.tsx",
      "batches/looseleaf-02/source.zip",
      "ui-looseleaf-action-fix/VERIFICATION.json",
      "ui-looseleaf-action-fix/HANDOFF.md"
    ],
    "nativeVerified": false,
    "requiresPatch": "ui-looseleaf-action-fix/FILES.json"
  },
  {
    "id": "bencho:voice-note",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "语音手势波形演示（交互实验）",
    "reason": "原声明A CONCEPT NOT A RECORDER，standIn数值波形+录制手势/播放游标。目录已写模拟/不申请麦克风，保留手势参考，不能宣称可听录音。",
    "deliveredScope": "长按模拟录音、左滑丢弃、松手回放波形；不申请真实麦克风。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#bencho:voice-note",
      "batches/bencho-01/voice-note.tsx",
      "batches/bencho-01/source.zip"
    ],
    "nativeVerified": false
  },
  {
    "id": "looseleaf:profile-page",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "纸张个人主页（本地页面场景）",
    "reason": "原个人主页场景含Activity/Notebooks/Stickers三Tab和本地following，保留页面主体参考价值；onMessage可选，不能默认可发送。",
    "deliveredScope": "已验证奖励贴纸标签切换；资料和成就均为本地示例。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#looseleaf:profile-page",
      "batches/looseleaf-03/profile-page.tsx",
      "batches/looseleaf-03/source.zip"
    ],
    "nativeVerified": false
  },
  {
    "id": "looseleaf:checkout-01",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "纸张结账页面（本地页面场景）",
    "reason": "保留原本地结账表单、数量与总价、校验及收据布局；操作和完成文案明确为模拟，不再声称已付款或发送确认邮件。收据图形是演示，不连接支付、订单或邮件服务。",
    "deliveredScope": "本地商品数量、总价、表单校验与模拟收据展示；仅使用虚构资料，不产生付款、订单或邮件。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#looseleaf:checkout-01",
      "batches/looseleaf-04/checkout-01.tsx",
      "batches/looseleaf-04/source.zip",
      "ui-local-action-next-fix/VERIFICATION.json",
      "ui-local-action-next-fix/HANDOFF.md"
    ],
    "nativeVerified": false,
    "requiresPatch": "ui-local-action-next-fix/FILES.json"
  },
  {
    "id": "looseleaf:pricing-01",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "纸张定价方案（原组件参考）",
    "reason": "原月年切换+三价格卡+FAQ区块；period驱动数据，选择仅setChosen/onChoose可选，目录不发起订阅说明准确。不是完整支付服务。",
    "deliveredScope": "已验证年付切换同步价格与计费说明；不发起订阅。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#looseleaf:pricing-01",
      "batches/looseleaf-04/pricing-01.tsx",
      "batches/looseleaf-04/source.zip"
    ],
    "nativeVerified": false
  },
  {
    "id": "looseleaf:newsletter-01",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "纸张订阅区（原组件参考）",
    "reason": "保留原信纸订阅表单及本地完成、信封状态；完成文案明确没有发送邮件或创建订阅，不冒称邮件服务成功。",
    "deliveredScope": "本地订阅表单及完成状态演示；不发送邮件、不创建订阅。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#looseleaf:newsletter-01",
      "batches/looseleaf-05/newsletter-01.tsx",
      "batches/looseleaf-05/source.zip",
      "ui-looseleaf-action-fix/VERIFICATION.json",
      "ui-looseleaf-action-fix/HANDOFF.md"
    ],
    "nativeVerified": false,
    "requiresPatch": "ui-looseleaf-action-fix/FILES.json"
  },
  {
    "id": "looseleaf:dashboard-analytics",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "手绘数据仪表盘（本地页面场景）",
    "reason": "保留原样例图表与日期范围切换；CSV 按钮已禁用并明确提示隔离预览不提供下载，无可触发导出处理，不扩展宿主权限。",
    "deliveredScope": "本地样例指标和图表随日期范围切换；CSV 下载在此预览中明确禁用。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#looseleaf:dashboard-analytics",
      "batches/looseleaf-05/dashboard-analytics.tsx",
      "batches/looseleaf-05/source.zip",
      "ui-local-action-next-fix/VERIFICATION.json",
      "ui-local-action-next-fix/HANDOFF.md"
    ],
    "nativeVerified": false,
    "requiresPatch": "ui-local-action-next-fix/FILES.json"
  },
  {
    "id": "bencho:generate",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "玻璃下图像显影（交互实验）",
    "reason": "原单幅生成动效实验，说明已写仅本地动画；Generate/pct用本地动画，不当模型生成工具或完整页面。",
    "deliveredScope": "点击生成，观察图像从粗到细浮现；仅本地动画。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#bencho:generate",
      "batches/bencho-03/generate.tsx",
      "batches/bencho-03/source.zip"
    ],
    "nativeVerified": false
  },
  {
    "id": "ai-elements:web-preview",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent生成网页预览（原组件参考）",
    "reason": "原WebPreview组合组件，实际demo提供本地静态srcDoc、refresh版本号与主题，非浏览器/网站生成器。原源码默认宽sandbox被demo sandbox空字符串覆盖；外层策略不放宽。",
    "deliveredScope": "刷新按钮递增本地草稿版本，主题按钮切换实际iframe内容底色；使用本地srcDoc且sandbox为空，不加载外站、不执行生成JS。",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#ai-elements:web-preview",
      "batches/ai-elements-05/web-preview.tsx",
      "batches/ai-elements-05/source.zip"
    ],
    "nativeVerified": false
  },
  {
    "id": "animata:vpn-widget",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "VPN连接状态卡（交互实验）",
    "reason": "原210px级模拟状态小组件，controlled/internalConnected+switch；没有VPN服务，目录准确为模拟状态，不按全应用。",
    "deliveredScope": "切换模拟连接状态",
    "evidence": [
      "ui-original241-quality-audit/focused-30.json#animata:vpn-widget",
      "batches/animata-03/vpn-widget.tsx",
      "batches/animata-03/source.zip"
    ],
    "nativeVerified": false
  },
  {
    "id": "pdfjs:local-text-reader",
    "recommendation": "review",
    "layer": "experiment",
    "scopeLabel": "真实PDF.js解析/提取+原创文字阅读壳",
    "reason": "可作文本解析实验；原版精致UI筛选应暂待复核，勿当原PDF页面展示。",
    "deliveredScope": "真实PDF.js解析/提取+原创文字阅读壳，不是原官方PDFViewer。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/pdfjs-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/pdfjs-01/VERIFICATION.json"
    ]
  },
  {
    "id": "pannellum:synthetic-space-viewer",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原全景viewer/yaw/pitch/热点",
    "reason": "保留为合成空间交互实验，非摄影全景；实际GPU/纹理解码未验。",
    "deliveredScope": "原全景viewer/yaw/pitch/热点，六张明确原创方向SVG立方贴图。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/pannellum-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/pannellum-01/ADAPTATION.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/pannellum-01/VERIFICATION.json"
    ]
  },
  {
    "id": "react-pdf-highlighter:local-evidence-notes",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "实际PDFViewer+原文本/区域批注层；三页原创ASCII PDF",
    "reason": "保留本地批注组件；不是任意PDF兼容/文档管理产品。",
    "deliveredScope": "实际PDFViewer+原文本/区域批注层；三页原创ASCII PDF，宿主侧栏明确自制。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/pdf-evidence-01/ADAPTATION.md"
    ]
  },
  {
    "id": "minipaint:original-layered-paint-workspace",
    "recommendation": "review",
    "layer": "page",
    "scopeLabel": "原画笔/图层/历史完整",
    "reason": "真实可画不等于原版外观；广泛资产改动可能显著影响工具可读性，优先原生复验。",
    "deliveredScope": "原画笔/图层/历史完整，但功能图标/位图/字体全部改系统文字符号，默认平滑helper也有透明替换。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/minipaint-workspace-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/minipaint-workspace-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/minipaint-workspace-01/VERIFICATION.json"
    ]
  },
  {
    "id": "mermaid-live:diagram-authoring-workspace",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "官方MobileEditor CodeMirror+原flowchart/Dagre/配置/缩放",
    "reason": "保留移动分支编辑场景，非桌面Monaco全站/全格式。",
    "deliveredScope": "官方MobileEditor CodeMirror+原flowchart/Dagre/配置/缩放，原创外围按钮。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/mermaid-mobile-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/mermaid-mobile-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/mermaid-mobile-01/VERIFICATION.json"
    ]
  },
  {
    "id": "plate:document-revisions",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "固定官方源码完整版本历史demo",
    "reason": "本地20快照上限，无云协作；组件价值未因无后台消失。",
    "deliveredScope": "固定官方源码完整版本历史demo，真实异步diff/比较/恢复。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/plate-revisions-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/plate-revisions-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/plate-revisions-01/VERIFICATION.json"
    ]
  },
  {
    "id": "plate:structured-stream-replay",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "原默认columns流式场景真实；公开说明可选远程图/embed无法加载",
    "reason": "需厘清现有可选控件失败表现及冷加载，不能泛称所有场景可预览。",
    "deliveredScope": "原默认columns流式场景真实；公开说明可选远程图/embed无法加载，体积11568078 UTF16。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/plate-stream-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/plate-stream-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/plate-stream-01/VERIFICATION.json"
    ]
  },
  {
    "id": "vanta:spatial-network-field",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原NET点线/相机跟随和材质数学保留",
    "reason": "是环境动效非真实Agent拓扑；GL桩不等于GPU通过，但不能仅因此降级。",
    "deliveredScope": "原NET点线/相机跟随和材质数学保留，无图片缺口。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/spatial-gpu-02/vanta-net/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/spatial-gpu-02/vanta-net/SOURCE.json"
    ]
  },
  {
    "id": "react-three-csg:live-solid-boolean",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Updating故事Box减Sphere/逐帧布尔+Orbit；CPU真实布尔非假几何。",
    "reason": "保留几何实验；原64细分逐帧计算有具体性能优先复验点，非完整建模器。",
    "deliveredScope": "原Updating故事Box减Sphere/逐帧布尔+Orbit；CPU真实布尔非假几何。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/csg-boolean-01/live-solid-boolean/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/csg-boolean-01/live-solid-boolean/SOURCE.json"
    ]
  },
  {
    "id": "jsoncrack:structured-data-atlas",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "官方Chrome扩展Raw/Graph+节点详情",
    "reason": "保留结构查看场景，不称官网Monaco全编辑器；同步布局输入上限与冷启动需关注。",
    "deliveredScope": "官方Chrome扩展Raw/Graph+节点详情，原解析与ELK，本地输入明确宿主。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/jsoncrack-extension-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/jsoncrack-extension-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/jsoncrack-extension-01/VERIFICATION.json"
    ]
  },
  {
    "id": "piskel:pixel-animation-workspace",
    "recommendation": "review",
    "layer": "page",
    "scopeLabel": "原画笔/帧/图层/撤销可运行；PNG sprite/IcoMoon/Noun图标全去",
    "reason": "完整本地像素编辑有价值；大量原视觉资产替换需实看工具可辨识性，不能算原视觉复刻。",
    "deliveredScope": "原画笔/帧/图层/撤销可运行；PNG sprite/IcoMoon/Noun图标全去，改系统字样。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/piskel-local-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/piskel-local-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/piskel-local-01/VERIFICATION.json"
    ]
  },
  {
    "id": "beepbox:pattern-song-composer",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原SongEditor谱格/音色/节奏/撤销及真实静态合成函数表。",
    "reason": "空白乐曲是可创作合法初始状态；非假空壳。音频设备/原生指针未验。",
    "deliveredScope": "原SongEditor谱格/音色/节奏/撤销及真实静态合成函数表。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/beepbox-local-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/beepbox-local-01/SOURCE.json"
    ]
  },
  {
    "id": "fieldplay:vector-flow-explorer",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Vue/CodeMirror GLSL/粒子积分/WebGL管线",
    "reason": "保留可编程速度场，非数据应用；真实shader/性能优先复验。",
    "deliveredScope": "原Vue/CodeMirror GLSL/粒子积分/WebGL管线，独立HSV有限替换已披露。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/fieldplay-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/fieldplay-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/fieldplay-01/VERIFICATION.json"
    ]
  },
  {
    "id": "tonejs:envelope-visual-scene",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Tone包络合成与p5波形/形状",
    "reason": "主动播放才音画，停音静帧不是空壳；PCM逻辑证据非硬件听验。",
    "deliveredScope": "原Tone包络合成与p5波形/形状，四参数抽屉。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/tone-envelope-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/tone-envelope-01/SOURCE.json"
    ]
  },
  {
    "id": "netron:model-structure-explorer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原.netron JSON reader、图/属性/搜索/缩放",
    "reason": "保留模型图查看器，不推理、不支持全格式或冒称官方模型样本。",
    "deliveredScope": "原.netron JSON reader、图/属性/搜索/缩放，原创4算子模型。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/netron-local-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/netron-local-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/netron-local-01/VERIFICATION.json"
    ]
  },
  {
    "id": "cindyjs:julia-orbit-explanation",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Julia CindyScript/Free点C/CindyGL shader",
    "reason": "固定尺寸数学交互实验，非响应式整站；原生GPU/拖点几何需实看。",
    "deliveredScope": "原Julia CindyScript/Free点C/CindyGL shader，500×500固定端口。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/cindy-julia-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/cindy-julia-01/SOURCE.json"
    ]
  },
  {
    "id": "astryx-core:button",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "官方button文档实例",
    "reason": "独立按钮状态展示是有效组件，不称发送邀请服务。",
    "deliveredScope": "官方button文档实例，实挂4按钮，有静态邀请语义但无业务handler。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-01/button/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-01/button/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "astryx:table-page",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原完整数据表模板及本地fixture/state；原Export等无handler。",
    "reason": "保留页面参考，静态业务按钮须维持示范说明，非后端表管理。",
    "deliveredScope": "原完整数据表模板及本地fixture/state；原Export等无handler。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-02/table-page/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-02/table-page/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "astryx-core:icon",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Icon语义SVG选择",
    "reason": "保留语义图标组件，不把它叫完整图标美术库，也不拆glyph计数。",
    "deliveredScope": "原Icon语义SVG选择，host最小API fixture，无外部图片。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/icon/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/icon/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "astryx-core:thumbnail",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "真实Thumbnail只给label/alt/onRemove",
    "reason": "原Thumbnail无图fallback与删除/恢复有价值，当前明确标题为占位示例。review只针对原Thumbnail正常src图像展示核心路径未交付；不是资源加载错误，也不否定该fallback组件，应保留可搜索访问。",
    "deliveredScope": "真实Thumbnail只给label/alt/onRemove，没有src，始终原no-image fallback。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-data-01/thumbnail/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-data-01/thumbnail/SOURCE-EVIDENCE.json",
      "ui-astryx-data-local/src/thumbnail.tsx"
    ]
  },
  {
    "id": "astryx-core:table",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Table配两列两行",
    "reason": "保留原表格API组件，非排序/后台CRUD/完整工作台。",
    "deliveredScope": "原Table配两列两行，host本地添加/重置，实测tr由3增至4。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-data-01/table/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-data-01/table/SOURCE-EVIDENCE.json",
      "ui-astryx-data-local/src/table.tsx"
    ]
  },
  {
    "id": "astryx-core:app-shell",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原AppShell/SideNav/TopNav；host切换仅改变一个h2标题",
    "reason": "原AppShell/SideNav/TopNav与本地标题切换是有效布局导航组件示例；不宣称完整业务工作流，示例内容简单不是降级理由。",
    "deliveredScope": "原AppShell/SideNav/TopNav；host切换仅改变一个h2标题，主体只有一段说明。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/app-shell/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/app-shell/SOURCE-EVIDENCE.json",
      "ui-astryx-layout-local/src/app-shell.tsx"
    ]
  },
  {
    "id": "astryx-core:carousel",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Carousel仅四个240px文本框Alpha/Beta/Gamma/Delta",
    "reason": "原Carousel真实滚动/导航API用文字内容示例，有效基础组件；不是完整图片轮播页面。四文本框不构成降级理由，原生scroll snap几何尚未验。",
    "deliveredScope": "原Carousel仅四个240px文本框Alpha/Beta/Gamma/Delta，无图内容，host计数按钮。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/carousel/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/carousel/SOURCE-EVIDENCE.json",
      "ui-astryx-layout-local/src/carousel.tsx"
    ]
  },
  {
    "id": "astryx-core:chat",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原ChatMessageList/Bubble/Composer",
    "reason": "保留聊天输入组件，不生成AI回复/附件上传；无后台不应一律降级。",
    "deliveredScope": "原ChatMessageList/Bubble/Composer，本地用户文本append，固定assistant示例。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/chat/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/chat/SOURCE-EVIDENCE.json",
      "ui-astryx-layout-local/src/chat.tsx"
    ]
  },
  {
    "id": "astryx-core:lightbox",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Lightbox+固定同库两SVG标志",
    "reason": "是有效查看器组件，图像解码/原生缩放未验，商标不代表授权。",
    "deliveredScope": "原Lightbox+固定同库两SVG标志，真实open/index/close；DOM实际打开。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-lightbox-01/lightbox/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-lightbox-01/lightbox/SOURCE-EVIDENCE.json",
      "ui-astryx-lightbox-local/src/lightbox.tsx"
    ]
  },
  {
    "id": "astryx:dashboard",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "完整原分析页",
    "reason": "固定数据可作为完整页面参考；Reload无handler不冒称实时。",
    "deliveredScope": "完整原分析页，指标/用户线/人口条/页面事件表固定数据。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-dashboard-01/dashboard/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-dashboard-01/dashboard/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "astryx:login-sso",
    "recommendation": "review",
    "layer": "page",
    "scopeLabel": "原email-domain分支/密码失败；原SSO Continue只进入loading而无完成。",
    "reason": "具体悬置交互需明示不可连接或禁用，不把无限loading当成功流程；素材中性占位已披露。",
    "deliveredScope": "原email-domain分支/密码失败；原SSO Continue只进入loading而无完成。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-flow-fallback-01/login-sso/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-flow-fallback-01/login-sso/SOURCE-EVIDENCE.json",
      "ui-astryx-flow-fallback-local/src/login-sso.tsx:207"
    ]
  },
  {
    "id": "astryx:checkout-wizard",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原四步购物车/优惠/金额/地址校验/付款格式/本地完成fixture。",
    "reason": "保留完整流程模板，非实际收款；仅虚构输入，原辅助图片中性占位不冒充摄影。",
    "deliveredScope": "原四步购物车/优惠/金额/地址校验/付款格式/本地完成fixture。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-flow-fallback-01/checkout-wizard/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-flow-fallback-01/checkout-wizard/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "astryx:detail-page",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原完整订单详情/活动侧栏/折叠",
    "reason": "保留完整信息结构；tab仅选中不滤内容、业务动作无handler不能当真实订单操作。",
    "deliveredScope": "原完整订单详情/活动侧栏/折叠，五辅助缩略图官方中性占位。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-order-detail-01/detail-page/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-order-detail-01/detail-page/SOURCE-EVIDENCE.json"
    ]
  },
  {
    "id": "astryx:contact-form",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原完整联系申请表",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原完整联系申请表；姓名/邮箱/公司/电话/目标/时间/预算本地必填校验，提交仅标记校验、不发送。",
    "evidence": [
      "ui-astryx-batch-local/src/contact-form.tsx",
      "ui-astryx-batch-local/src/entry-contact-form.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-01/contact-form/README.md"
    ]
  },
  {
    "id": "astryx:documentation-technical",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原技术文档页、代码块、目录定位/活跃项",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原技术文档页、代码块、目录定位/活跃项；复制按钮禁用、opaque iframe的history写入移除，滚动保留。",
    "evidence": [
      "ui-astryx-batch-local/src/documentation-technical.tsx",
      "ui-astryx-batch-local/src/entry-documentation-technical.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-01/documentation-technical/README.md"
    ]
  },
  {
    "id": "astryx:settings-sidebar",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原设置侧栏/移动主从、编辑行、Save/Cancel、语言币种时区与隐私开关",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原设置侧栏/移动主从、编辑行、Save/Cancel、语言币种时区与隐私开关；仅内存状态，不改真实账户。",
    "evidence": [
      "ui-astryx-batch-local/src/settings-sidebar.tsx",
      "ui-astryx-batch-local/src/entry-settings-sidebar.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-01/settings-sidebar/README.md"
    ]
  },
  {
    "id": "astryx:dashboard-scorecard",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原KPI/OKR/趋势/叙事评审页",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原KPI/OKR/趋势/叙事评审页；WoW/MoM/QoQ切换原fixture指标与文案，非真实企业数据。",
    "evidence": [
      "ui-astryx-batch-local/src/dashboard-scorecard.tsx",
      "ui-astryx-batch-local/src/entry-dashboard-scorecard.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-01/dashboard-scorecard/README.md"
    ]
  },
  {
    "id": "astryx:table-grouped",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原任务分组/折叠/行详情与可调侧栏",
    "reason": "原分组表格与详情主体保留；图鉴透明接通原筛选器的五字段本地 AND 比较，状态/优先级精确匹配、标题/指派人/项目按文字包含。只处理本地示例行，不连接后台。",
    "deliveredScope": "原分组表、折叠、详情及五字段本地筛选/清空/零结果；不是实际工单服务。",
    "evidence": [
      "ui-astryx-batch-local/src/table-grouped.tsx",
      "ui-astryx-batch-local/src/entry-table-grouped.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-01/table-grouped/README.md"
    ],
    "requiresPatch": "ui-grouped-filter-fix"
  },
  {
    "id": "astryx:form-wizard",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原四步工作区/邀请/方案/复核向导",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原四步工作区/邀请/方案/复核向导，逐步校验与本地价格推导；不发邀请或购买。",
    "evidence": [
      "ui-astryx-batch-local/src/form-wizard.tsx",
      "ui-astryx-batch-local/src/entry-form-wizard.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-01/form-wizard/README.md"
    ]
  },
  {
    "id": "astryx-core:card",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原三张支付/退款/调整Card+Grid例",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原三张支付/退款/调整Card+Grid例，长ID截断及静态金额，非支付操作。",
    "evidence": [
      "ui-astryx-core-local/src/card.tsx",
      "ui-astryx-core-local/src/entry-card.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-01/card/README.md"
    ]
  },
  {
    "id": "astryx-core:segmented-control",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原四段Workspace view与SUMMARY内容切换",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原四段Workspace view与SUMMARY内容切换，非团队后台。",
    "evidence": [
      "ui-astryx-core-local/src/segmented-control.tsx",
      "ui-astryx-core-local/src/entry-segmented-control.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-01/segmented-control/README.md"
    ]
  },
  {
    "id": "astryx-core:calendar",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原波斯历useCalendarNavigation/useCalendarDays完整月份导航例",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原波斯历useCalendarNavigation/useCalendarDays完整月份导航例，非预订/通用日期输入。",
    "evidence": [
      "ui-astryx-core-local/src/calendar.tsx",
      "ui-astryx-core-local/src/entry-calendar.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-01/calendar/README.md"
    ]
  },
  {
    "id": "astryx-core:popover",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Recent files Popover完整示例",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Recent files Popover完整示例，两个文件名ListItem；不是文件下载器。",
    "evidence": [
      "ui-astryx-core-local/src/popover.tsx",
      "ui-astryx-core-local/src/entry-popover.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-01/popover/README.md"
    ]
  },
  {
    "id": "astryx-core:drawer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Drawer/DrawerHeader/Layout开关示例",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Drawer/DrawerHeader/Layout开关示例，明确Escape/scrim/close语义；原生焦点层未验。",
    "evidence": [
      "ui-astryx-core-local/src/drawer.tsx",
      "ui-astryx-core-local/src/entry-drawer.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-01/drawer/README.md"
    ]
  },
  {
    "id": "astryx-core:field",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原OrdersFilterBar TextInput+3Selector",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原OrdersFilterBar TextInput+3Selector，局部值可变；无订单数据集过滤承诺。",
    "evidence": [
      "ui-astryx-core-next-local/src/field.tsx",
      "ui-astryx-core-next-local/src/entry-field.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-02/field/README.md"
    ]
  },
  {
    "id": "astryx-core:layout",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原AppShell内Layout header/end/content分区例",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原AppShell内Layout header/end/content分区例，订单说明静态、导航无业务handler。",
    "evidence": [
      "ui-astryx-core-next-local/src/layout.tsx",
      "ui-astryx-core-next-local/src/entry-layout.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-02/layout/README.md"
    ]
  },
  {
    "id": "astryx-core:markdown",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Markdown inline例+明确宿主固定heading/list",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Markdown inline例+明确宿主固定heading/list，不接受任意用户Markdown。",
    "evidence": [
      "ui-astryx-core-next-local/src/markdown.tsx",
      "ui-astryx-core-next-local/src/entry-markdown.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-02/markdown/README.md"
    ]
  },
  {
    "id": "astryx-core:timer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原elapsed/clock/inherit三个Timer组合成一族",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原elapsed/clock/inherit三个Timer组合成一族，隐藏卸载重启计时，不是任务引擎。",
    "evidence": [
      "ui-astryx-core-next-local/src/timer.tsx",
      "ui-astryx-core-next-local/src/entry-timer.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-02/timer/README.md"
    ]
  },
  {
    "id": "astryx-core:banner",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原异步结果Banner+useAnnounce",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原异步结果Banner+useAnnounce；宿主补本地成功/失败模拟并明示nothing saved。",
    "evidence": [
      "ui-astryx-core-next-local/src/banner.tsx",
      "ui-astryx-core-next-local/src/entry-banner.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-02/banner/README.md"
    ]
  },
  {
    "id": "astryx-core:avatar",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原AvatarGroup/overflow+本地样本首字母fallback",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原AvatarGroup/overflow+本地样本首字母fallback；无真人照片，无头像加载成功承诺。",
    "evidence": [
      "ui-astryx-core-third-local/src/avatar.tsx",
      "ui-astryx-core-third-local/src/entry-avatar.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-03/avatar/README.md"
    ]
  },
  {
    "id": "astryx-core:bottom-sheet",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原BottomSheet open/onOpenChange",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原BottomSheet open/onOpenChange，宿主checkbox FilterControls/Close；无服务器过滤。",
    "evidence": [
      "ui-astryx-core-third-local/src/bottom-sheet.tsx",
      "ui-astryx-core-third-local/src/entry-bottom-sheet.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-03/bottom-sheet/README.md"
    ]
  },
  {
    "id": "astryx-core:checkbox",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原CheckboxList rich-label/Badge例+受控多选及output",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原CheckboxList rich-label/Badge例+受控多选及output；非订阅或方案提交。",
    "evidence": [
      "ui-astryx-core-third-local/src/checkbox.tsx",
      "ui-astryx-core-third-local/src/entry-checkbox.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-03/checkbox/README.md"
    ]
  },
  {
    "id": "astryx-core:dialog",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Dialog/DialogHeader/Layout与明确宿主开关/关闭内容",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Dialog/DialogHeader/Layout与明确宿主开关/关闭内容；不保存真实设置。",
    "evidence": [
      "ui-astryx-core-third-local/src/dialog.tsx",
      "ui-astryx-core-third-local/src/entry-dialog.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-03/dialog/README.md"
    ]
  },
  {
    "id": "astryx-core:indicator",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Checkbox/Radio/Check三个装饰指示器+宿主state选择",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Checkbox/Radio/Check三个装饰指示器+宿主state选择；不冒称独立交互表单控件。",
    "evidence": [
      "ui-astryx-core-third-local/src/indicator.tsx",
      "ui-astryx-core-third-local/src/entry-indicator.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-03/indicator/README.md"
    ]
  },
  {
    "id": "astryx-core:power-search",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原PowerSearch可配置过滤条件构建器",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原PowerSearch可配置过滤条件构建器，Status enum/Title string本地schema与输出；无搜索结果服务。",
    "evidence": [
      "ui-astryx-core-third-local/src/power-search.tsx",
      "ui-astryx-core-third-local/src/entry-power-search.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-core-03/power-search/README.md"
    ]
  },
  {
    "id": "astryx-core:number-input",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原NumberInput数量0–10步长1+受控输出",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原NumberInput数量0–10步长1+受控输出，独立输入组件。",
    "evidence": [
      "ui-astryx-controls-local/src/number-input.tsx",
      "ui-astryx-controls-local/src/entry-number-input.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/number-input/README.md"
    ]
  },
  {
    "id": "astryx-core:radio",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原RadioList Draft/Review受控单选示例。",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原RadioList Draft/Review受控单选示例。",
    "evidence": [
      "ui-astryx-controls-local/src/radio.tsx",
      "ui-astryx-controls-local/src/entry-radio.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/radio/README.md"
    ]
  },
  {
    "id": "astryx-core:selector",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Selector Draft/Review/Complete受控选项示例。",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Selector Draft/Review/Complete受控选项示例。",
    "evidence": [
      "ui-astryx-controls-local/src/selector.tsx",
      "ui-astryx-controls-local/src/entry-selector.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/selector/README.md"
    ]
  },
  {
    "id": "astryx-core:slider",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Slider强度0–100步长10与文本值显示",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Slider强度0–100步长10与文本值显示，原生pointer几何未验。",
    "evidence": [
      "ui-astryx-controls-local/src/slider.tsx",
      "ui-astryx-controls-local/src/entry-slider.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/slider/README.md"
    ]
  },
  {
    "id": "astryx-core:switch",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Switch本地布尔偏好切换",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Switch本地布尔偏好切换，不改变用户真实设置。",
    "evidence": [
      "ui-astryx-controls-local/src/switch.tsx",
      "ui-astryx-controls-local/src/entry-switch.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/switch/README.md"
    ]
  },
  {
    "id": "astryx-core:text-area",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原TextArea本地文字及80字符上限、输出",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原TextArea本地文字及80字符上限、输出，不发送。",
    "evidence": [
      "ui-astryx-controls-local/src/text-area.tsx",
      "ui-astryx-controls-local/src/entry-text-area.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/text-area/README.md"
    ]
  },
  {
    "id": "astryx-core:text-input",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原TextInput受控本地标题及输出",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原TextInput受控本地标题及输出，不发送。",
    "evidence": [
      "ui-astryx-controls-local/src/text-input.tsx",
      "ui-astryx-controls-local/src/entry-text-input.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/text-input/README.md"
    ]
  },
  {
    "id": "astryx-core:time-input",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原TimeInput 09:30初始本地时间值及输出",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原TimeInput 09:30初始本地时间值及输出，不创建日程。",
    "evidence": [
      "ui-astryx-controls-local/src/time-input.tsx",
      "ui-astryx-controls-local/src/entry-time-input.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/time-input/README.md"
    ]
  },
  {
    "id": "astryx-core:pagination",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Pagination 95项/pageSize10本地页码",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Pagination 95项/pageSize10本地页码，非远程数据分页。",
    "evidence": [
      "ui-astryx-controls-local/src/pagination.tsx",
      "ui-astryx-controls-local/src/entry-pagination.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/pagination/README.md"
    ]
  },
  {
    "id": "astryx-core:progress-bar",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原ProgressBar 25起始/手动+25/Reset",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原ProgressBar 25起始/手动+25/Reset，明确模拟非真实后台进度。",
    "evidence": [
      "ui-astryx-controls-local/src/progress-bar.tsx",
      "ui-astryx-controls-local/src/entry-progress-bar.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-controls-01/progress-bar/README.md"
    ]
  },
  {
    "id": "astryx-core:badge",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Badge neutral/success/error/purple属性展示",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Badge neutral/success/error/purple属性展示，宿主select仅切样式。",
    "evidence": [
      "ui-astryx-display-local/src/badge.tsx",
      "ui-astryx-display-local/src/entry-badge.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/badge/README.md"
    ]
  },
  {
    "id": "astryx-core:blockquote",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Blockquote与明确虚构文字/cite切换",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Blockquote与明确虚构文字/cite切换，不冒用真实名人引语。",
    "evidence": [
      "ui-astryx-display-local/src/blockquote.tsx",
      "ui-astryx-display-local/src/entry-blockquote.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/blockquote/README.md"
    ]
  },
  {
    "id": "astryx-core:breadcrumbs",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Breadcrumbs本地路径选择与current项",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Breadcrumbs本地路径选择与current项，非外部网站导航。",
    "evidence": [
      "ui-astryx-display-local/src/breadcrumbs.tsx",
      "ui-astryx-display-local/src/entry-breadcrumbs.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/breadcrumbs/README.md"
    ]
  },
  {
    "id": "astryx-core:code",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原内联Code npm install/build文字切换",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原内联Code npm install/build文字切换，不执行命令。",
    "evidence": [
      "ui-astryx-display-local/src/code.tsx",
      "ui-astryx-display-local/src/entry-code.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/code/README.md"
    ]
  },
  {
    "id": "astryx-core:divider",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Divider分节label切换",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Divider分节label切换，基础排版组件。",
    "evidence": [
      "ui-astryx-display-local/src/divider.tsx",
      "ui-astryx-display-local/src/entry-divider.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/divider/README.md"
    ]
  },
  {
    "id": "astryx-core:empty-state",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原EmptyState两种明确样本文案",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原EmptyState两种明确样本文案，不伪装请求结果。",
    "evidence": [
      "ui-astryx-display-local/src/empty-state.tsx",
      "ui-astryx-display-local/src/entry-empty-state.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/empty-state/README.md"
    ]
  },
  {
    "id": "astryx-core:kbd",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Kbd键字符串显示",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Kbd键字符串显示，不注册快捷键或执行系统命令。",
    "evidence": [
      "ui-astryx-display-local/src/kbd.tsx",
      "ui-astryx-display-local/src/entry-kbd.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/kbd/README.md"
    ]
  },
  {
    "id": "astryx-core:skeleton",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Skeleton尺寸例与宿主内容toggle",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Skeleton尺寸例与宿主内容toggle，明确样本非真实loading任务。",
    "evidence": [
      "ui-astryx-display-local/src/skeleton.tsx",
      "ui-astryx-display-local/src/entry-skeleton.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/skeleton/README.md"
    ]
  },
  {
    "id": "astryx-core:spinner",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Spinner md/lg尺寸切换",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原Spinner md/lg尺寸切换，无后台任务声明。",
    "evidence": [
      "ui-astryx-display-local/src/spinner.tsx",
      "ui-astryx-display-local/src/entry-spinner.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/spinner/README.md"
    ]
  },
  {
    "id": "astryx-core:status-dot",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原StatusDot neutral/success/warning/error/accent",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原StatusDot neutral/success/warning/error/accent，非服务健康监控。",
    "evidence": [
      "ui-astryx-display-local/src/status-dot.tsx",
      "ui-astryx-display-local/src/entry-status-dot.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-display-01/status-dot/README.md"
    ]
  },
  {
    "id": "astryx:documentation-design",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原设计组件文档页/示例tab/Dialog/目录定位",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原设计组件文档页/示例tab/Dialog/目录定位；复制/history关闭但原本地展示完整。",
    "evidence": [
      "ui-astryx-pages-next-local/src/documentation-design.tsx",
      "ui-astryx-pages-next-local/src/entry-documentation-design.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-02/documentation-design/README.md"
    ]
  },
  {
    "id": "astryx:table-collapsible",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原账户分组折叠与时间窗口趋势/净值信息",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原账户分组折叠与时间窗口趋势/净值信息，固定fixture，不接银行。",
    "evidence": [
      "ui-astryx-pages-next-local/src/table-collapsible.tsx",
      "ui-astryx-pages-next-local/src/entry-table-collapsible.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-02/table-collapsible/README.md"
    ]
  },
  {
    "id": "astryx:table-comparison",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原模型对比slots、分组折叠、最佳值highlight",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原模型对比slots、分组折叠、最佳值highlight，固定原比较数据非实时benchmark。",
    "evidence": [
      "ui-astryx-pages-next-local/src/table-comparison.tsx",
      "ui-astryx-pages-next-local/src/entry-table-comparison.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-02/table-comparison/README.md"
    ]
  },
  {
    "id": "astryx:dashboard-alert-rail",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原服务健康页时间窗/环境/区域改变fixture指标及主机行",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原服务健康页时间窗/环境/区域改变fixture指标及主机行，告警非真实监控。",
    "evidence": [
      "ui-astryx-pages-next-local/src/dashboard-alert-rail.tsx",
      "ui-astryx-pages-next-local/src/entry-dashboard-alert-rail.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-02/dashboard-alert-rail/README.md"
    ]
  },
  {
    "id": "astryx:dashboard-cohort-funnel",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原漏斗/掉落步骤/转化趋势/队列表",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原漏斗/掉落步骤/转化趋势/队列表，segment/window真实局部推导，导出按钮原无业务handler。",
    "evidence": [
      "ui-astryx-pages-next-local/src/dashboard-cohort-funnel.tsx",
      "ui-astryx-pages-next-local/src/entry-dashboard-cohort-funnel.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-02/dashboard-cohort-funnel/README.md"
    ]
  },
  {
    "id": "astryx:form-wizard-dialog",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原isInline三步报告/周期日期/收件人向导",
    "reason": "保留真实原组件/API与明确样本范围；简单、静态或无后台本身不是降级理由。",
    "deliveredScope": "原isInline三步报告/周期日期/收件人向导，完成toast/reset；不是可打开modal，也不真的发报告。",
    "evidence": [
      "ui-astryx-pages-third-local/src/form-wizard-dialog.tsx",
      "ui-astryx-pages-third-local/src/entry-form-wizard-dialog.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-03/form-wizard-dialog/README.md"
    ]
  },
  {
    "id": "astryx:form-wizard-inline",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原六步CI局部simulation",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原六步CI局部simulation，真实timer检查/内存不足failure/retry及返回配置，不连接仓库或执行CI。",
    "evidence": [
      "ui-astryx-pages-third-local/src/form-wizard-inline.tsx",
      "ui-astryx-pages-third-local/src/entry-form-wizard-inline.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-03/form-wizard-inline/README.md"
    ]
  },
  {
    "id": "astryx:dashboard-progress",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原项目阶段过滤Gantt/工作流/风险列表、任务环/燃尽图",
    "reason": "保留原主要页面与本地状态/fixture，范围不是完整线上服务；不把无后台当空壳。",
    "deliveredScope": "原项目阶段过滤Gantt/工作流/风险列表、任务环/燃尽图，固定本地数据非项目服务。",
    "evidence": [
      "ui-astryx-pages-third-local/src/dashboard-progress.tsx",
      "ui-astryx-pages-third-local/src/entry-dashboard-progress.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-03/dashboard-progress/README.md"
    ]
  },
  {
    "id": "assistant-elements:elicitation-form",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原文本/选择/toggle与required禁用检查，accept/decline本地回执；组件承诺与边界匹配，不因非MCP服务降级。",
    "scopeLabel": "工具前字段确认组件",
    "deliveredScope": "原文本/选择/toggle与required禁用检查，accept/decline本地回执；组件承诺与边界匹配，不因非MCP服务降级。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/elicitation-form.html",
      "ui-assistant-elements/src/components/demo/elements/elicitation-form.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/elicitation-form.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:question-flow",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原3步单选/多选minSelections约束、onComplete收集答案并回执；自动重置明确，本地组件完整。",
    "scopeLabel": "多步单多选组件",
    "deliveredScope": "原3步单选/多选minSelections约束、onComplete收集答案并回执；自动重置明确，本地组件完整。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/question-flow.html",
      "ui-assistant-elements/src/components/demo/elements/question-flow.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/question-flow.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:option-list",
    "recommendation": "retain",
    "layer": "component",
    "reason": "单选处理方案及异步本地确认。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "单选处理方案及异步本地确认。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/option-list.html",
      "ui-assistant-elements/src/components/demo/elements/option-list.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/option-list.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:reviewable-diff",
    "recommendation": "retain",
    "layer": "component",
    "reason": "保留/丢弃代码块，全部决定后本地应用并重置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "保留/丢弃代码块，全部决定后本地应用并重置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/reviewable-diff.html",
      "ui-assistant-elements/src/components/demo/elements/reviewable-diff.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/reviewable-diff.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:image-gallery",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原画廊组件和灯箱；图片为明确标注的原创几何SVG替代素材。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原画廊组件和灯箱；图片为明确标注的原创几何SVG替代素材。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/image-gallery.html",
      "ui-assistant-elements/src/components/demo/elements/image-gallery.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/image-gallery.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:artifact-card",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版脚本展示写入状态到产物元数据；不打开实际文档。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版脚本展示写入状态到产物元数据；不打开实际文档。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/artifact-card.html",
      "ui-assistant-elements/src/components/demo/elements/artifact-card.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/artifact-card.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:approval-card",
    "recommendation": "retain",
    "layer": "component",
    "reason": "允许/拒绝仅演示状态，绝不运行命令或保存授权。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "允许/拒绝仅演示状态，绝不运行命令或保存授权。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/approval-card.html",
      "ui-assistant-elements/src/components/demo/elements/approval-card.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/approval-card.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:comparison-card",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版静态方案对照富显示，不虚构交互。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版静态方案对照富显示，不虚构交互。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/comparison-card.html",
      "ui-assistant-elements/src/components/demo/elements/comparison-card.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/comparison-card.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:memory-chips",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版动态记忆标签，添加本地遗忘状态。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版动态记忆标签，添加本地遗忘状态。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/memory-chips.html",
      "ui-assistant-elements/src/components/demo/elements/memory-chips.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/memory-chips.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:agent-plan",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版脚本驱动执行进度，不运行Agent。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版脚本驱动执行进度，不运行Agent。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/agent-plan.html",
      "ui-assistant-elements/src/components/demo/elements/agent-plan.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/agent-plan.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:todo-list",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版脚本驱动待办状态，不执行任务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版脚本驱动待办状态，不执行任务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/todo-list.html",
      "ui-assistant-elements/src/components/demo/elements/todo-list.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/todo-list.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:file-tree",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版脚本驱动变更文件展示，不访问文件系统。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版脚本驱动变更文件展示，不访问文件系统。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/file-tree.html",
      "ui-assistant-elements/src/components/demo/elements/file-tree.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/file-tree.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:checkpoint-history",
    "recommendation": "retain",
    "layer": "component",
    "reason": "恢复仅切换本地检查点选中态。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "恢复仅切换本地检查点选中态。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/checkpoint-history.html",
      "ui-assistant-elements/src/components/demo/elements/checkpoint-history.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/checkpoint-history.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:message-queue",
    "recommendation": "retain",
    "layer": "component",
    "reason": "移除排队消息；最后一项移除后原例自动重置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "移除排队消息；最后一项移除后原例自动重置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/message-queue.html",
      "ui-assistant-elements/src/components/demo/elements/message-queue.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/message-queue.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:conversation-search",
    "recommendation": "retain",
    "layer": "component",
    "reason": "现description已明确固定命中/非全文检索；原结果导航有用，不按未实现搜索服务降级。标题及输入框仍易误解，建议可见提示“任意非空输入展示相同预置命中”，或另授权加本地filter；不要默称已真搜索。",
    "scopeLabel": "固定命中导航示例",
    "deliveredScope": "现description已明确固定命中/非全文检索；原结果导航有用，不按未实现搜索服务降级。标题及输入框仍易误解，建议可见提示“任意非空输入展示相同预置命中”，或另授权加本地filter；不要默称已真搜索。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/conversation-search.html",
      "ui-assistant-elements/src/components/demo/elements/conversation-search.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/conversation-search.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:data-table",
    "recommendation": "retain",
    "layer": "component",
    "reason": "列排序和趋势展示，模型与价格是原例静态示例，不保证现实准确。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "列排序和趋势展示，模型与价格是原例静态示例，不保证现实准确。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/data-table.html",
      "ui-assistant-elements/src/components/demo/elements/data-table.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/data-table.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:document-reference",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地页码引用选择，无实际PDF读取。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地页码引用选择，无实际PDF读取。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/document-reference.html",
      "ui-assistant-elements/src/components/demo/elements/document-reference.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/document-reference.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:edit-message",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版消息编辑保存/取消，本地状态，不发出消息。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版消息编辑保存/取消，本地状态，不发出消息。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/edit-message.html",
      "ui-assistant-elements/src/components/demo/elements/edit-message.tsx",
      "ui-assistant-elements/src/components/assistant-ui/elements/edit-message.tsx",
      "ui-assistant-elements/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:feedback-dialog",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原因多选、备注和本地发送回执。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原因多选、备注和本地发送回执。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/feedback-dialog.html",
      "ui-assistant-elements/src2/components/demo/elements/feedback-dialog.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/feedback-dialog.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:command-palette",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地命令筛选和选中，不创建线程或执行命令。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地命令筛选和选中，不创建线程或执行命令。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/command-palette.html",
      "ui-assistant-elements/src2/components/demo/elements/command-palette.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/command-palette.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:model-picker",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地模型选择；名称与价格是原例假设fixture，不保证真实存在或准确。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地模型选择；名称与价格是原例假设fixture，不保证真实存在或准确。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/model-picker.html",
      "ui-assistant-elements/src2/components/demo/elements/model-picker.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/model-picker.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:reasoning-effort",
    "recommendation": "retain",
    "layer": "component",
    "reason": "推理预算选择与脚本驱动消耗展示，不改变模型参数。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "推理预算选择与脚本驱动消耗展示，不改变模型参数。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/reasoning-effort.html",
      "ui-assistant-elements/src2/components/demo/elements/reasoning-effort.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/reasoning-effort.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:message-branches",
    "recommendation": "retain",
    "layer": "component",
    "reason": "三份真实不同文本分支切换，不调用模型。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "三份真实不同文本分支切换，不调用模型。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/message-branches.html",
      "ui-assistant-elements/src2/components/demo/elements/message-branches.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/message-branches.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:draft-restore",
    "recommendation": "retain",
    "layer": "component",
    "reason": "description已明确两动作都隐藏且不写编辑器。保留原提示组件，建议按钮附近明示仅预览提示状态，恢复内容不是已交付功能。",
    "scopeLabel": "草稿恢复提示状态示例",
    "deliveredScope": "description已明确两动作都隐藏且不写编辑器。保留原提示组件，建议按钮附近明示仅预览提示状态，恢复内容不是已交付功能。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/draft-restore.html",
      "ui-assistant-elements/src2/components/demo/elements/draft-restore.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/draft-restore.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:quote-reply",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原例模拟文本选区，引用动作生成本地引用，不是系统级划词。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原例模拟文本选区，引用动作生成本地引用，不是系统级划词。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/quote-reply.html",
      "ui-assistant-elements/src2/components/demo/elements/quote-reply.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/quote-reply.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:prompt-library",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地提示词搜索与内容选择，不发出prompt。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地提示词搜索与内容选择，不发出prompt。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/prompt-library.html",
      "ui-assistant-elements/src2/components/demo/elements/prompt-library.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/prompt-library.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:settings-panel",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地模型、系统提示、温度和开关设置，不持久化任何配置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地模型、系统提示、温度和开关设置，不持久化任何配置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/settings-panel.html",
      "ui-assistant-elements/src2/components/demo/elements/settings-panel.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/settings-panel.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:permission-grant",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地权限范围选择和回执，不授予真实权限。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地权限范围选择和回执，不授予真实权限。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/permission-grant.html",
      "ui-assistant-elements/src2/components/demo/elements/permission-grant.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/permission-grant.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:mcp-server-panel",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地服务展开及模拟授权状态，不连接任何MCP。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地服务展开及模拟授权状态，不连接任何MCP。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/mcp-server-panel.html",
      "ui-assistant-elements/src2/components/demo/elements/mcp-server-panel.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/mcp-server-panel.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:composer-attachments",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地输入、移除/恢复预置附件、模拟上传进度，发送只清空输入，不打开文件选择器、不上传。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地输入、移除/恢复预置附件、模拟上传进度，发送只清空输入，不打开文件选择器、不上传。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/composer-attachments.html",
      "ui-assistant-elements/src2/components/demo/elements/composer-attachments.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/composer.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:message-attachment",
    "recommendation": "retain",
    "layer": "component",
    "reason": "description明确no-op/无预览下载，原附件布局可参考。可逆改善为禁用无handler点击或标只读，非必须替换整组件。",
    "scopeLabel": "只读附件元数据组件",
    "deliveredScope": "description明确no-op/无预览下载，原附件布局可参考。可逆改善为禁用无handler点击或标只读，非必须替换整组件。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/message-attachment.html",
      "ui-assistant-elements/src2/components/demo/elements/message-attachment.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/message-attachment.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:tool-call",
    "recommendation": "retain",
    "layer": "component",
    "reason": "PHASES2200/1400/3000/0按单次推进；用户展开会takeOver脚本。Grok运行中截图不是功能失败，不因无真工具降级。",
    "scopeLabel": "工具请求结果折叠组件",
    "deliveredScope": "PHASES2200/1400/3000/0按单次推进；用户展开会takeOver脚本。Grok运行中截图不是功能失败，不因无真工具降级。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/tool-call.html",
      "ui-assistant-elements/src2/components/demo/elements/tool-call.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/tool-call.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:tool-error",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地错误重试计数，不请求文本中的远程地址。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地错误重试计数，不请求文本中的远程地址。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/tool-error.html",
      "ui-assistant-elements/src2/components/demo/elements/tool-error.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/tool-error.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:tool-group",
    "recommendation": "retain",
    "layer": "component",
    "reason": "2400ms后原running工具转换完成；真实open切换。历史中间帧只说明截图时机，不能自动降级。",
    "scopeLabel": "多工具状态折叠组件",
    "deliveredScope": "2400ms后原running工具转换完成；真实open切换。历史中间帧只说明截图时机，不能自动降级。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/tool-group.html",
      "ui-assistant-elements/src2/components/demo/elements/tool-group.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/tool-group.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:terminal-block",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原5条本地LINES逐条可见，最终done；不运行终端已披露，复制权限不等于日志显示失败。",
    "scopeLabel": "终端日志状态组件",
    "deliveredScope": "原5条本地LINES逐条可见，最终done；不运行终端已披露，复制权限不等于日志显示失败。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/terminal-block.html",
      "ui-assistant-elements/src2/components/demo/elements/terminal-block.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/terminal-block.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:retrieval-chunks",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版脚本驱动检索片段与分数，不检索真实文档。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版脚本驱动检索片段与分数，不检索真实文档。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/retrieval-chunks.html",
      "ui-assistant-elements/src2/components/demo/elements/retrieval-chunks.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/retrieval-chunks.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:sources",
    "recommendation": "retain",
    "layer": "component",
    "reason": "来源列表展开，外链点击被阻止避免离开图鉴。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "来源列表展开，外链点击被阻止避免离开图鉴。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/sources.html",
      "ui-assistant-elements/src2/components/demo/elements/sources.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/sources.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:schedule-card",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地暂停/恢复状态，不创建真实定时任务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地暂停/恢复状态，不创建真实定时任务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/schedule-card.html",
      "ui-assistant-elements/src2/components/demo/elements/schedule-card.tsx",
      "ui-assistant-elements/src2/components/assistant-ui/elements/schedule-card.tsx",
      "ui-assistant-elements/src2/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-02/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:agent-card",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地连接回执及能力说明，不实际连接Agent。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地连接回执及能力说明，不实际连接Agent。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/agent-card.html",
      "ui-assistant-elements/src3/components/demo/elements/agent-card.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/agent-card.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:agent-handoff",
    "recommendation": "retain",
    "layer": "component",
    "reason": "脚本驱动交接状态与携带资料说明，不执行委派。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "脚本驱动交接状态与携带资料说明，不执行委派。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/agent-handoff.html",
      "ui-assistant-elements/src3/components/demo/elements/agent-handoff.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/agent-handoff.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:background-inbox",
    "recommendation": "retain",
    "layer": "component",
    "reason": "description及host caveat明确收取no-op，任务分组/状态为原组件价值；建议无动作按钮disabled/说明，不以无真实任务管理直接降级。",
    "scopeLabel": "后台任务状态列表",
    "deliveredScope": "description及host caveat明确收取no-op，任务分组/状态为原组件价值；建议无动作按钮disabled/说明，不以无真实任务管理直接降级。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/background-inbox.html",
      "ui-assistant-elements/src3/components/demo/elements/background-inbox.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/background-inbox.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:job-progress",
    "recommendation": "retain",
    "layer": "component",
    "reason": "脚本驱动分阶段进度，取消冻结本地状态，不执行CI。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "脚本驱动分阶段进度，取消冻结本地状态，不执行CI。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/job-progress.html",
      "ui-assistant-elements/src3/components/demo/elements/job-progress.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/job-progress.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:onboarding",
    "recommendation": "retain",
    "layer": "component",
    "reason": "下一步与跳过本地引导，不配置真实项目。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "下一步与跳过本地引导，不配置真实项目。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/onboarding.html",
      "ui-assistant-elements/src3/components/demo/elements/onboarding.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/onboarding.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:regenerate-menu",
    "recommendation": "retain",
    "layer": "component",
    "reason": "description及host明确选择只关闭菜单；原菜单选择展示仍可留。可增加选择回执但非现有承诺的模型调用。",
    "scopeLabel": "本地模型重生成菜单示例",
    "deliveredScope": "description及host明确选择只关闭菜单；原菜单选择展示仍可留。可增加选择回执但非现有承诺的模型调用。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/regenerate-menu.html",
      "ui-assistant-elements/src3/components/demo/elements/regenerate-menu.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/regenerate-menu.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:recommendation-card",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地采纳回执，不修改代码或真实设置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地采纳回执，不修改代码或真实设置。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/recommendation-card.html",
      "ui-assistant-elements/src3/components/demo/elements/recommendation-card.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/recommendation-card.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:thread-list",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地会话选中/删除；重命名按钮已明确禁用并提示沙箱不支持原生prompt，不读改真实会话。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地会话选中/删除；重命名按钮已明确禁用并提示沙箱不支持原生prompt，不读改真实会话。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/thread-list.html",
      "ui-assistant-elements/src3/components/demo/elements/thread-list.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/thread-list.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:thread-search",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原threads.filter按query真实过滤，选择更新Open thread文字，和固定命中conversation-search有实质区别。",
    "scopeLabel": "本地会话搜索组件",
    "deliveredScope": "原threads.filter按query真实过滤，选择更新Open thread文字，和固定命中conversation-search有实质区别。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/thread-search.html",
      "ui-assistant-elements/src3/components/demo/elements/thread-search.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/thread-search.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:shared-conversation",
    "recommendation": "retain",
    "layer": "component",
    "reason": "title/description/host已称只读且Continue不创建聊天，完整共享会话阅读结构可留；无绑定Continue建议disabled或局部文字说明。",
    "scopeLabel": "共享会话只读组件",
    "deliveredScope": "title/description/host已称只读且Continue不创建聊天，完整共享会话阅读结构可留；无绑定Continue建议disabled或局部文字说明。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/shared-conversation.html",
      "ui-assistant-elements/src3/components/demo/elements/shared-conversation.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/shared-conversation.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:subagent-list",
    "recommendation": "retain",
    "layer": "component",
    "reason": "脚本驱动多Agent工作进度，不启动Agent。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "脚本驱动多Agent工作进度，不启动Agent。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/subagent-list.html",
      "ui-assistant-elements/src3/components/demo/elements/subagent-list.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/subagent-list.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:task-card",
    "recommendation": "retain",
    "layer": "component",
    "reason": "任务详情展开与脚本状态，不启动真实任务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "任务详情展开与脚本状态，不启动真实任务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/task-card.html",
      "ui-assistant-elements/src3/components/demo/elements/task-card.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/task-card.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:stopped-run",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "title与description准确称中断态，未承诺继续执行，host亦披露按钮无绑定。保留组件；Grok blank仍需真实延迟后复验，但不能仅初始空判故障。",
    "scopeLabel": "中断输出状态组件",
    "deliveredScope": "title与description准确称中断态，未承诺继续执行，host亦披露按钮无绑定。保留组件；Grok blank仍需真实延迟后复验，但不能仅初始空判故障。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/stopped-run.html",
      "ui-assistant-elements/src3/components/demo/elements/stopped-run.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/stopped-run.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:context-breakdown",
    "recommendation": "retain",
    "layer": "component",
    "reason": "脚本驱动上下文分项及余量，不读取真实token使用量。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "脚本驱动上下文分项及余量，不读取真实token使用量。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/context-breakdown.html",
      "ui-assistant-elements/src3/components/demo/elements/context-breakdown.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/context-breakdown.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:confidence-marker",
    "recommendation": "retain",
    "layer": "component",
    "reason": "焦点/悬停显示结论依据，置信度是fixture而非自动判断。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "焦点/悬停显示结论依据，置信度是fixture而非自动判断。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/confidence-marker.html",
      "ui-assistant-elements/src3/components/demo/elements/confidence-marker.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/confidence-marker.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:research-report",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "实际title是研究报告生成态，非完整报告；第四节固定writing符合展示进行中状态。保留原状态设计，补可见“最后一节故意停在生成态”即可，不把无第四正文称坏报告。",
    "scopeLabel": "研究报告生成中状态组件",
    "deliveredScope": "实际title是研究报告生成态，非完整报告；第四节固定writing符合展示进行中状态。保留原状态设计，补可见“最后一节故意停在生成态”即可，不把无第四正文称坏报告。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/research-report.html",
      "ui-assistant-elements/src3/components/demo/elements/research-report.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/research-report.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:spec-sheet",
    "recommendation": "retain",
    "layer": "component",
    "reason": "逐行显示原版规格fixture，模型名称、参数、日期和价格不保证存在或准确。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "逐行显示原版规格fixture，模型名称、参数、日期和价格不保证存在或准确。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/spec-sheet.html",
      "ui-assistant-elements/src3/components/demo/elements/spec-sheet.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/spec-sheet.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:timeline",
    "recommendation": "retain",
    "layer": "component",
    "reason": "脚本驱动过去/现在/未来事件，不查询真实工作记录。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "脚本驱动过去/现在/未来事件，不查询真实工作记录。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/timeline.html",
      "ui-assistant-elements/src3/components/demo/elements/timeline.tsx",
      "ui-assistant-elements/src3/components/assistant-ui/elements/timeline.tsx",
      "ui-assistant-elements/src3/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-03/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:chain-of-thought",
    "recommendation": "retain",
    "layer": "component",
    "reason": "上游固定示例内容；非模型真实推理。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "上游固定示例内容；非模型真实推理。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/chain-of-thought/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/chain-of-thought/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/chain-of-thought.tsx",
      "ui-exodus-next/preview/src/entry-chain-of-thought.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:steps",
    "recommendation": "retain",
    "layer": "component",
    "reason": "上游固定步骤；折叠可用，不执行仓库扫描。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "上游固定步骤；折叠可用，不执行仓库扫描。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/steps/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/steps/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/steps.tsx",
      "ui-exodus-next/preview/src/entry-steps.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:response-stream",
    "recommendation": "retain",
    "layer": "component",
    "reason": "本地文字播放；不是远程模型响应。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "本地文字播放；不是远程模型响应。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/response-stream/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/response-stream/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/response-stream.tsx",
      "ui-exodus-next/preview/src/entry-response-stream.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:jsx-preview",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "原parser实际响应本地markup，静态/inert限制ADAPTATION已明确，不要求执行JS。修description旧视频样例叙述为当前宿主Exodus示例；文案陈旧不自动降级有效组件。",
    "scopeLabel": "静态白名单JSX预览组件",
    "deliveredScope": "原parser实际响应本地markup，静态/inert限制ADAPTATION已明确，不要求执行JS。修description旧视频样例叙述为当前宿主Exodus示例；文案陈旧不自动降级有效组件。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/jsx-preview/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/jsx-preview/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/jsx-preview.tsx",
      "ui-exodus-next/preview/src/entry-jsx-preview.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "promptkit:composer",
    "recommendation": "retain",
    "layer": "component",
    "reason": "真实本地files数组/移除/文本输入，发送2秒后清空，loading disabled避免伪Stop。原功能边界已披露，不因无上传服务降级；不可叫完整聊天应用。",
    "scopeLabel": "本地附件输入组件",
    "deliveredScope": "真实本地files数组/移除/文本输入，发送2秒后清空，loading disabled避免伪Stop。原功能边界已披露，不因无上传服务降级；不可叫完整聊天应用。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/composer/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/composer/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/prompt-input.tsx",
      "ui-exodus-next/preview/src/entry-composer.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "promptkit:loader",
    "recommendation": "retain",
    "layer": "component",
    "reason": "12 种动画归为一个族，非 12 个组件。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "12 种动画归为一个族，非 12 个组件。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/loader/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/loader/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/loader.tsx",
      "ui-exodus-next/preview/src/entry-loader.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:thinking-bar",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原组件，本地启动/停止和展开回调，不调用模型。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原组件，本地启动/停止和展开回调，不调用模型。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/thinking-bar/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/thinking-bar/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/thinking-bar.tsx",
      "ui-exodus-next/preview/src/entry-thinking-bar.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:system-message",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原组件，本地展开政策/隐藏警告，无外部动作。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原组件，本地展开政策/隐藏警告，无外部动作。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/system-message/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/system-message/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/system-message.tsx",
      "ui-exodus-next/preview/src/entry-system-message.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:feedback-bar",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原组件，本地投票/关闭/重置，不提交反馈。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原组件，本地投票/关闭/重置，不提交反馈。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/feedback-bar/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/feedback-bar/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/feedback-bar.tsx",
      "ui-exodus-next/preview/src/entry-feedback-bar.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "promptkit:source",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原组件；远程 favicon 替换为原创内联文档 SVG；悬浮内容是本地 fixture。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原组件；远程 favicon 替换为原创内联文档 SVG；悬浮内容是本地 fixture。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/source/index.html",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/source/preview.tsx",
      "ui-exodus-next/preview/src/components/prompt-kit/source.tsx",
      "ui-exodus-next/preview/src/entry-source.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/promptkit-01/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:chart",
    "recommendation": "retain",
    "layer": "component",
    "reason": "真实SVG面积图，原版固定数列逐点显示；不取实时数据。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "真实SVG面积图，原版固定数列逐点显示；不取实时数据。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/chart.html",
      "ui-assistant-elements/src4/components/demo/elements/chart.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/chart.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:diagram",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版SVG架构图，缩放/重置/放大至160%，不申请浏览器全屏。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版SVG架构图，缩放/重置/放大至160%，不申请浏览器全屏。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/diagram.html",
      "ui-assistant-elements/src4/components/demo/elements/diagram.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/diagram.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:math-block",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版分数、上下标与逐步公式推导富显示，不执行数学求解。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版分数、上下标与逐步公式推导富显示，不执行数学求解。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/math-block.html",
      "ui-assistant-elements/src4/components/demo/elements/math-block.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/math-block.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:web-preview",
    "recommendation": "review",
    "layer": "experiment",
    "reason": "历史观察待复验，非当前故障复现：保留review仅因Grok匹配资源下持续Loading的真实观察待解释，不因无真实网站或禁用外开。源码1500ms应显示child不是复验结果；真实显示后即可retain容器组件。",
    "scopeLabel": "浏览器容器与本地child展示",
    "deliveredScope": "保留review仅因Grok匹配资源下持续Loading的真实观察待解释，不因无真实网站或禁用外开。源码1500ms应显示child不是复验结果；真实显示后即可retain容器组件。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/web-preview.html",
      "ui-assistant-elements/src4/components/demo/elements/web-preview.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/web-preview.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read",
    "historicalCapture": {
      "record": "ui-runtime-health-integration/reports/thumbnail-capture/records/assistant-elements--web-preview.json",
      "observedAt": null,
      "observationDateStatus": "原记录未提供采集日期，不以文件mtime或当前审计日期代填",
      "baseline": "77ada4cd095d383cf1e9c774f7cc1518da9b1b55",
      "renderState": "partial_content | 整 iframe contain；presentation=partial；awaiting_user_review；interaction not_tested；Preview pane remains at “Loading preview”; no external page opened.",
      "interactionAcceptance": "not_tested",
      "resourceHashesMatchCurrent": true,
      "resourceCount": 3,
      "currentNativeReproduction": false,
      "currentDOMExecution": false
    }
  },
  {
    "id": "assistant-elements:map-answer",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版SVG示意路线与地点选择，不是真实地图、定位或导航服务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版SVG示意路线与地点选择，不是真实地图、定位或导航服务。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/map-answer.html",
      "ui-assistant-elements/src4/components/demo/elements/map-answer.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/map-answer.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:code-runner",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "实际title代码运行回执，description与host清楚预定义输出/不执行代码，原输出及状态UI有用，撤回按无执行器给review的建议。",
    "scopeLabel": "预录代码输出与运行状态组件",
    "deliveredScope": "实际title代码运行回执，description与host清楚预定义输出/不执行代码，原输出及状态UI有用，撤回按无执行器给review的建议。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/code-runner.html",
      "ui-assistant-elements/src4/components/demo/elements/code-runner.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/code-runner.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:computer-use",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "description及host明确示意屏幕与脚本轨迹，非实际电脑操作；保留原可视反馈实验，不要求接屏幕服务。",
    "scopeLabel": "脚本操作轨迹状态实验",
    "deliveredScope": "description及host明确示意屏幕与脚本轨迹，非实际电脑操作；保留原可视反馈实验，不要求接屏幕服务。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/computer-use.html",
      "ui-assistant-elements/src4/components/demo/elements/computer-use.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/computer-use.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "assistant-elements:cost-meter",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版静态成本分项和占比；模型名称、token量和成本均为示例。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版静态成本分项和占比；模型名称、token量和成本均为示例。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/cost-meter.html",
      "ui-assistant-elements/src4/components/demo/elements/cost-meter.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/cost-meter.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:flow-graph",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版SVG节点连线和状态推进，不执行工作流。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版SVG节点连线和状态推进，不执行工作流。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/flow-graph.html",
      "ui-assistant-elements/src4/components/demo/elements/flow-graph.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/flow-graph.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:score-breakdown",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版加权评分与维度明细逐步展示，评分为预置示例非真实评估。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版加权评分与维度明细逐步展示，评分为预置示例非真实评估。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/score-breakdown.html",
      "ui-assistant-elements/src4/components/demo/elements/score-breakdown.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/score-breakdown.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:trace-waterfall",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原版层级trace跨度、时长及状态逐步展示，不采集运行数据。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "scopeLabel": "原富内容/输入组件，非完整页面",
    "deliveredScope": "原版层级trace跨度、时长及状态逐步展示，不采集运行数据。；快速源码范围覆盖，未发现应仅因无后台而降级的依据，非全面质量放行。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/trace-waterfall.html",
      "ui-assistant-elements/src4/components/demo/elements/trace-waterfall.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/trace-waterfall.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "entry-demo-component-structural-scan"
  },
  {
    "id": "assistant-elements:web-search",
    "recommendation": "retain",
    "layer": "component",
    "reason": "1800/500/500/500后最终3结果且searching=false。历史中间帧需重看最终态，不因未远程搜索降级。",
    "scopeLabel": "搜索结果流状态组件",
    "deliveredScope": "1800/500/500/500后最终3结果且searching=false。历史中间帧需重看最终态，不因未远程搜索降级。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/web-search.html",
      "ui-assistant-elements/src4/components/demo/elements/web-search.tsx",
      "ui-assistant-elements/src4/components/assistant-ui/elements/web-search.tsx",
      "ui-assistant-elements/src4/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/assistant-elements-04/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "fancy:elastic-line",
    "recommendation": "review",
    "layer": "experiment",
    "reason": "历史观察待复验，非当前故障复现：原SVG二次曲线与pathLength动画存在，useDimensions依赖首次几何及resize；匹配资源的Grok只见大字未见线，需真实几何/线段复验，尚未证明根因。",
    "scopeLabel": "弹性曲线排版实验",
    "deliveredScope": "原SVG二次曲线与pathLength动画存在，useDimensions依赖首次几何及resize；匹配资源的Grok只见大字未见线，需真实几何/线段复验，尚未证明根因。",
    "evidence": [
      "/tmp/ui-fancy-adapt/src/fancy/components/physics/elastic-line.tsx",
      "/tmp/ui-fancy-adapt/src/hooks/use-dimensions.ts"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read",
    "historicalCapture": {
      "record": "ui-runtime-health-integration/reports/thumbnail-capture/records/fancy--elastic-line.json",
      "observedAt": null,
      "observationDateStatus": "原记录未提供采集日期，不以文件mtime或当前审计日期代填",
      "baseline": "77ada4cd095d383cf1e9c774f7cc1518da9b1b55",
      "renderState": "partial_content | 整 iframe contain；presentation=partial；awaiting_user_review；interaction not_tested；Expected elastic-line interaction is not visible; iframe shows only generic Fancy Components header/text.",
      "interactionAcceptance": "not_tested",
      "resourceHashesMatchCurrent": true,
      "resourceCount": 3,
      "currentNativeReproduction": false,
      "currentDOMExecution": false
    }
  },
  {
    "id": "fancy:css-box-carousel",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "原CSSBox六面本来就是文字而非填充盒体；保留3D排版/拖动与模式切换，不将无实体背景误判缺画面。",
    "scopeLabel": "CSS三维文字面与轮播实验",
    "deliveredScope": "原CSSBox六面本来就是文字而非填充盒体；保留3D排版/拖动与模式切换，不将无实体背景误判缺画面。",
    "evidence": [
      "/tmp/ui-fancy-adapt/src/fancy/examples/blocks/css-box-demo.tsx",
      "/tmp/ui-fancy-adapt/src/fancy/components/blocks/css-box.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "fancy:media-between-text",
    "recommendation": "retain",
    "layer": "component",
    "reason": "媒体默认宽度0，hover后展开30/100px；初始截帧无媒体是预期。原创本地SVG替代已披露，触屏可达性未实测。",
    "scopeLabel": "文字间悬停媒体展开",
    "deliveredScope": "媒体默认宽度0，hover后展开30/100px；初始截帧无媒体是预期。原创本地SVG替代已披露，触屏可达性未实测。",
    "evidence": [
      "/tmp/ui-fancy-adapt/src/fancy/components/blocks/media-between-text.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "cult:floating-panel",
    "recommendation": "retain",
    "layer": "component",
    "reason": "Add Note/Choose Color原触发器控制面板；初始关闭不等于加载失败，原提交只示例回调，不称笔记保存服务。",
    "scopeLabel": "浮动输入与选择面板",
    "deliveredScope": "Add Note/Choose Color原触发器控制面板；初始关闭不等于加载失败，原提交只示例回调，不称笔记保存服务。",
    "evidence": [
      "/tmp/ui-cult-adapt/src2/registry/default/example/floating-panel-demo.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "cult:side-panel",
    "recommendation": "retain",
    "layer": "component",
    "reason": "真实受控打开/关闭与Escape、焦点返回；原创文字children替代官方视频已披露，保留侧面板非视频页面。",
    "scopeLabel": "受控侧面板",
    "deliveredScope": "真实受控打开/关闭与Escape、焦点返回；原创文字children替代官方视频已披露，保留侧面板非视频页面。",
    "evidence": [
      "ui-cult-sidepanel-adapt/src/main.tsx",
      "ui-cult-sidepanel-adapt/src/ui/side-panel.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "cult:toolbar-expandable",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原可展开工具栏/步骤与字段保留，Initialize/Save无部署handler；保留面板组件，不称实际部署流程，建议无动作按钮就近提示。",
    "scopeLabel": "可展开操作面板",
    "deliveredScope": "原可展开工具栏/步骤与字段保留，Initialize/Save无部署handler；保留面板组件，不称实际部署流程，建议无动作按钮就近提示。",
    "evidence": [
      "/tmp/ui-cult-adapt/src3/registry/default/example/toolbar-expandable-demo.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "cult:marketing-hero-analytics",
    "recommendation": "review",
    "layer": "component",
    "reason": "历史观察待复验，非当前故障复现：原数据生成SVG折线和60ms可见状态确实存在；Grok只见网格/部分图形尚未解释，需复验布局/opacity，不据静态源码宣称已修。",
    "scopeLabel": "数据折线营销首屏区块",
    "deliveredScope": "原数据生成SVG折线和60ms可见状态确实存在；Grok只见网格/部分图形尚未解释，需复验布局/opacity，不据静态源码宣称已修。",
    "evidence": [
      "/tmp/ui-cult-adapt/src/registry/default/ui/marketing-hero-analytics.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read",
    "historicalCapture": {
      "record": "ui-runtime-health-integration/reports/thumbnail-capture/records/cult--marketing-hero-analytics.json",
      "observedAt": null,
      "observationDateStatus": "原记录未提供采集日期，不以文件mtime或当前审计日期代填",
      "baseline": "77ada4cd095d383cf1e9c774f7cc1518da9b1b55",
      "renderState": "partial_content | 整 iframe contain；presentation=partial；awaiting_user_review；interaction not_tested；Chart area appears as grid with hero text; analytics graphic is not visibly complete.",
      "interactionAcceptance": "not_tested",
      "resourceHashesMatchCurrent": true,
      "resourceCount": 3,
      "currentNativeReproduction": false,
      "currentDOMExecution": false
    }
  },
  {
    "id": "spring:notification-hub",
    "recommendation": "retain",
    "layer": "component",
    "reason": "初始空通知为原交互起点，手动新增、3秒寿命与移除是真状态；最多6活动消息，离场可短暂额外DOM，不是系统通知服务。",
    "scopeLabel": "手动通知过渡组件",
    "deliveredScope": "初始空通知为原交互起点，手动新增、3秒寿命与移除是真状态；最多6活动消息，离场可短暂额外DOM，不是系统通知服务。",
    "evidence": [
      "ui-spring-notification-local/App.tsx",
      "ui-spring-notification-local/main.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "blode:lighting",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "原窗口/指针与阴影公式保留，原创CSS天空替视频已明示；浅色/低对比不能直接判空白，保留材质实验。",
    "scopeLabel": "窗口光影材质实验",
    "deliveredScope": "原窗口/指针与阴影公式保留，原创CSS天空替视频已明示；浅色/低对比不能直接判空白，保留材质实验。",
    "evidence": [
      "ui-blode-lighting/build/Lighting.tsx",
      "ui-blode-lighting/build/art.ts"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "blode:markers",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原120px滚动揭示与<=820px章节刻度隐藏；680宽iframe/页面顶部无刻度是规则，不是加载失败。",
    "scopeLabel": "滚动阅读进度刻度",
    "deliveredScope": "原120px滚动揭示与<=820px章节刻度隐藏；680宽iframe/页面顶部无刻度是规则，不是加载失败。",
    "evidence": [
      "ui-blode-markers/build/Markers.tsx",
      "ui-blode-markers/build/markers.module.css"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "uiverse:book-material",
    "recommendation": "retain",
    "layer": "experiment",
    "reason": "原书本侧视容器高度13px、页2px，宿主默认暂停；薄条是原等待动画侧视范围，不是书籍阅读器缺页。",
    "scopeLabel": "侧视翻页等待动画",
    "deliveredScope": "原书本侧视容器高度13px、页2px，宿主默认暂停；薄条是原等待动画侧视范围，不是书籍阅读器缺页。",
    "evidence": [
      "ui-uiverse-adapt/delivery/original-book.html",
      "ui-uiverse-adapt/delivery/runtime.js"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "aicanvas:peel-corner-reveal",
    "recommendation": "review",
    "layer": "component",
    "reason": "历史观察待复验，非当前故障复现：原isOpen/hover弹簧与揭角几何保留；Grok匹配资源明确partial_interaction_failed未成功揭开，需实际输入/几何复验。虚构WiFi/QR非真实凭证。",
    "scopeLabel": "卷角揭示交互",
    "deliveredScope": "原isOpen/hover弹簧与揭角几何保留；Grok匹配资源明确partial_interaction_failed未成功揭开，需实际输入/几何复验。虚构WiFi/QR非真实凭证。",
    "evidence": [
      "ui-aicanvas-next/build/peel-corner-reveal-component.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read",
    "historicalCapture": {
      "record": "ui-runtime-health-integration/reports/thumbnail-capture/records/aicanvas--peel-corner-reveal.json",
      "observedAt": null,
      "observationDateStatus": "原记录未提供采集日期，不以文件mtime或当前审计日期代填",
      "baseline": "77ada4cd095d383cf1e9c774f7cc1518da9b1b55",
      "renderState": "partial_interaction_failed | 仅初始卷角代表态；不声称揭开动作成功",
      "interactionAcceptance": "not_tested",
      "resourceHashesMatchCurrent": true,
      "resourceCount": 3,
      "currentNativeReproduction": false,
      "currentDOMExecution": false
    }
  },
  {
    "id": "kibo:gantt",
    "recommendation": "retain",
    "layer": "component",
    "reason": "handleMoveFeature更新真实本地start/end，onMove已连接；固定合成项目、无逻辑按钮已移除或禁用，不称项目后端。",
    "scopeLabel": "本地甘特时间移动组件",
    "deliveredScope": "handleMoveFeature更新真实本地start/end，onMove已连接；固定合成项目、无逻辑按钮已移除或禁用，不称项目后端。",
    "evidence": [
      "ui-kibo-adapt/src/demos/gantt.tsx",
      "ui-kibo-adapt/src/packages/gantt/index.tsx"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "smoothui:image-generation-panel",
    "recommendation": "retain",
    "layer": "component",
    "reason": "原任务卡/提示输入保留，宿主真实本地队列/失败/Retry状态；四幅预置SVG且无模型已明示，保留任务反馈组件而非生成服务。",
    "scopeLabel": "预置图像任务状态面板",
    "deliveredScope": "原任务卡/提示输入保留，宿主真实本地队列/失败/Retry状态；四幅预置SVG且无模型已明示，保留任务反馈组件而非生成服务。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-image-01/README.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "astryx:table-inbox",
    "recommendation": "retain",
    "layer": "page",
    "reason": "原多层收件箱模板与本地选择保留；历史两张模板图CSP失败但有fallback且主要结构完整，单列媒体修复不把整页判空白。",
    "scopeLabel": "本地收件箱页面模板",
    "deliveredScope": "原多层收件箱模板与本地选择保留；历史两张模板图CSP失败但有fallback且主要结构完整，单列媒体修复不把整页判空白。",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-next-01/table-inbox/page.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-next-01/table-inbox/ADAPTATION.md"
    ],
    "reviewBasis": "源代码与范围说明核查；本轮未做native视觉或DOM实测",
    "sourceReadDepth": "focused-source-read"
  },
  {
    "id": "ai-elements:chain-of-thought",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "研究工作流步骤（原组件参考）",
    "reason": "原折叠步骤/状态组件；fixture明确不是私有思维，无模型推理实现。",
    "deliveredScope": "点击标题折叠再展开步骤；图标/引用标签仍可读。显示的是演示流程摘要，不是模型私有思维。",
    "evidence": [
      "batches/ai-elements-01/chain-of-thought.tsx",
      "batches/ai-elements-01/source.zip!/src/demos/chain-of-thought.tsx",
      "batches/ai-elements-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:confirmation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "人工审批决策卡（原组件参考）",
    "reason": "Approve/Reject/Reset只写decision；完成提示明确local preview，没有文件操作。",
    "deliveredScope": "点Approve或Reject后对应状态出现、操作按钮消失；Reset恢复并可选另一决定。仅本地状态，不操作文件。",
    "evidence": [
      "batches/ai-elements-01/confirmation.tsx",
      "batches/ai-elements-01/source.zip!/src/demos/confirmation.tsx",
      "batches/ai-elements-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:plan",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent执行计划（原组件参考）",
    "reason": "原完整计划正文保留；footer本地built开关明确Simulate，不执行Solid迁移。",
    "deliveredScope": "展开/收起计划；点击Simulate plan approval在本地完成/重置文字之间切换。不真正构建项目。",
    "evidence": [
      "batches/ai-elements-01/plan.tsx",
      "batches/ai-elements-01/source.zip!/src/demos/plan.tsx",
      "batches/ai-elements-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:queue",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "待处理任务队列（原组件参考）",
    "reason": "原消息+todo队列，删除为filter；Send now仅console.log和删除。目录已声明不发送；按钮语义仍易误读，建议后续改Simulate send而非加服务。",
    "deliveredScope": "展开队列；移除或Send now减少本地列表数量，Todo可删除；不发送真实消息。",
    "evidence": [
      "batches/ai-elements-01/queue.tsx",
      "batches/ai-elements-01/source.zip!/src/demos/queue.tsx",
      "batches/ai-elements-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:file-tree",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent项目文件树（原组件参考）",
    "reason": "原目录展开与selectedPath；不是文件管理器，无读写。",
    "deliveredScope": "展开hooks/lib目录、选择不同文件，选择样式跟随；无文件读写。",
    "evidence": [
      "batches/ai-elements-01/file-tree.tsx",
      "batches/ai-elements-01/source.zip!/src/demos/file-tree.tsx",
      "batches/ai-elements-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:terminal",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "流式运行终端（原组件参考）",
    "reason": "原ANSI显示/clear/逐10字节20ms流；固定编译输出，不是shell。原复制guard+catch防假Copied，缺少失败回显可优化。",
    "deliveredScope": "挂载后ANSI文字逐步流出；clear清空且停止流式；复制权限受iframe限制，不要求真实shell。",
    "evidence": [
      "batches/ai-elements-01/terminal.tsx",
      "batches/ai-elements-01/source.zip!/src/demos/terminal.tsx",
      "batches/ai-elements-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:agent",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent配置与工具清单（原组件参考）",
    "reason": "原Agent配置/三个Zod工具schema展开；工具不执行，模型名为样例标签。",
    "deliveredScope": "展开web_search/read_url/summarize工具查看真实参数Schema；代码块应有本地Shiki语法高亮。配置展示不连接模型。",
    "evidence": [
      "batches/ai-elements-02/agent.tsx",
      "batches/ai-elements-02/source.zip!/src/demos/agent.tsx",
      "batches/ai-elements-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:tool",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "工具调用输入与输出（原组件参考）",
    "reason": "Tool输入/输出原组件；done本地切换且按钮写Simulate，未伪装SQL/模型执行。",
    "deliveredScope": "展开输入；Simulate tool result切换为完成并显示输出，Reset可重复。纯本地状态，不执行查询。",
    "evidence": [
      "batches/ai-elements-02/tool.tsx",
      "batches/ai-elements-02/source.zip!/src/demos/tool.tsx",
      "batches/ai-elements-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:task",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "项目任务检查轨迹（原组件参考）",
    "reason": "原折叠任务文件列表，扫描52/2files为静态标签，无真实扫描。",
    "deliveredScope": "点击Found project files收起/展开文件检查列表；代码文件标记可见。",
    "evidence": [
      "batches/ai-elements-02/task.tsx",
      "batches/ai-elements-02/source.zip!/src/demos/task.tsx",
      "batches/ai-elements-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:sources",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "检索证据来源列表（原组件参考）",
    "reason": "原三引用折叠列表，每Source onClick.preventDefault明确不跳转；可参考引用布局。",
    "deliveredScope": "点击来源计数折叠/展开3条引用。链接仅展示标签，预览拦截跳转。",
    "evidence": [
      "batches/ai-elements-02/sources.tsx",
      "batches/ai-elements-02/source.zip!/src/demos/sources.tsx",
      "batches/ai-elements-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:inline-citation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "行内引用与来源轮播（原组件参考）",
    "reason": "原HoverCard/Embla六来源轮播，来源文本为样例而非核实研究；demo父级阻止a导航，React portal冒泡路径需原生复验，不误判链接点击失效为核心坏。",
    "deliveredScope": "hover或键盘聚焦引用徽标弹出来源卡；点击下一条改变轮播索引，前后可重复。",
    "evidence": [
      "batches/ai-elements-02/inline-citation.tsx",
      "batches/ai-elements-02/source.zip!/src/demos/inline-citation.tsx",
      "batches/ai-elements-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:checkpoint",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "工作区检查点恢复（原组件参考）",
    "reason": "原Checkpoint触发器+宿主revision1/3摘要；不是文件历史恢复，预览明确No real workspace modified。",
    "deliveredScope": "点Restore切到revision1并改变摘要，Reapply回到revision3；仅本地演示状态。",
    "evidence": [
      "batches/ai-elements-02/checkpoint.tsx",
      "batches/ai-elements-02/source.zip!/src/demos/checkpoint.tsx",
      "batches/ai-elements-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:question",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent澄清问题与多选（原组件参考）",
    "reason": "原多选/文字输入与QuestionResponse；本地summary+Ask again重置，不建立项目/支付服务。",
    "deliveredScope": "选择多个项目、输入补充说明、Answer显示所选文本；Ask again回到问题。提交仅本地状态。",
    "evidence": [
      "batches/ai-elements-03/question.tsx",
      "batches/ai-elements-03/source.zip!/src/demos/question.tsx",
      "batches/ai-elements-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:test-results",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent测试结果面板（原组件参考）",
    "reason": "原suite折叠/错误/进度；summary总15与展开列出的8个样本不同，是固定演示摘要，非测试执行器/当前测试通过证据。",
    "deliveredScope": "切换Authentication/User API/Database测试组，查看失败错误与进度分段；数据为官方模拟，不执行测试。",
    "evidence": [
      "batches/ai-elements-03/test-results.tsx",
      "batches/ai-elements-03/source.zip!/src/demos/test-results.tsx",
      "batches/ai-elements-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:schema-display",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "API Schema参数浏览器（原组件参考）",
    "reason": "原request/response嵌套schema阅读，不POST。/api路径为静态展示。",
    "deliveredScope": "展开request metadata及response author嵌套字段；必填标识/类型可见，不发送API请求。",
    "evidence": [
      "batches/ai-elements-03/schema-display.tsx",
      "batches/ai-elements-03/source.zip!/src/demos/schema-display.tsx",
      "batches/ai-elements-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:model-selector",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "模型选择与搜索器（原组件参考）",
    "reason": "原Dialog+搜索命令列表选择setSelectedModel并关闭；logo换几何色块已披露，只有选项参考不连接模型。",
    "deliveredScope": "打开模型弹窗、输入搜索词、选择模型后关闭并更新触发按钮；Escape关闭。品牌logo用本地几何标记，无远程图片。",
    "evidence": [
      "batches/ai-elements-03/model-selector.tsx",
      "batches/ai-elements-03/source.zip!/src/demos/model-selector.tsx",
      "batches/ai-elements-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:context",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "上下文Token预算（原组件参考）",
    "reason": "原Context hover内容；固定40000/128000 tokens和modelId，不读取真实账单。",
    "deliveredScope": "hover或聚焦Context百分比，显示输入/输出Token明细和容量百分比；固定模拟用量，不读取真实账户。",
    "evidence": [
      "batches/ai-elements-03/context.tsx",
      "batches/ai-elements-03/source.zip!/src/demos/context.tsx",
      "batches/ai-elements-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:attachments",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent附件预览与移除（原组件参考）",
    "reason": "原grid4附件删除，2张本地原创SVG、PDF/MP4仅文件图标且URL空；不能当PDF/video播放器，现范围为附件展示删除。",
    "deliveredScope": "hover附件显示移除按钮，点击后对应本地条目消失；图像为本地自绘SVG，不上传文件。",
    "evidence": [
      "batches/ai-elements-03/attachments.tsx",
      "batches/ai-elements-03/source.zip!/src/demos/attachments.tsx",
      "batches/ai-elements-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:commit",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent代码变更提交卡（原组件参考）",
    "reason": "原文件增删统计/折叠，hash为样例非真实Git；复制guard/try-catch不假成功，但无onError回显。",
    "deliveredScope": "点击提交头展开/收起文件变更，显示增删统计。仅模拟commit，不访问Git仓库；复制受iframe权限限制。",
    "evidence": [
      "batches/ai-elements-04/commit.tsx",
      "batches/ai-elements-04/source.zip!/src/demos/commit.tsx",
      "batches/ai-elements-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:package-info",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "依赖升级提案（原组件参考）",
    "reason": "原三类依赖变化卡，本地待审按钮，不安装。非完整依赖管理应用。",
    "deliveredScope": "展示版本变更与依赖；Mark proposal在本地标记为待审并可重置，不安装任何软件。",
    "evidence": [
      "batches/ai-elements-04/package-info.tsx",
      "batches/ai-elements-04/source.zip!/src/demos/package-info.tsx",
      "batches/ai-elements-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:artifact",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可切换源码的生成产物（原组件参考）",
    "reason": "原Artifact容器+本地version/source/result切换；结果是宿主固定简报，不运行生成代码，明确no generated API response。",
    "deliveredScope": "点击Toggle artifact view切换源码/可视结果；Simulate revision递增本地版本并同步源码，不运行生成代码或API。",
    "evidence": [
      "batches/ai-elements-04/artifact.tsx",
      "batches/ai-elements-04/source.zip!/src/demos/artifact.tsx",
      "batches/ai-elements-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:sandbox",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "工具执行沙箱结果（本地状态实验）",
    "reason": "原Code/Output tabs与四state本地切换；固定Python示例配JavaScript错误栈，不能当真实运行结果。只保留多状态UI实验。",
    "deliveredScope": "切换Code/Output；选择output-error显示错误栈、output-available显示示例结果；仅本地状态，不执行Python。",
    "evidence": [
      "batches/ai-elements-04/sandbox.tsx",
      "batches/ai-elements-04/source.zip!/src/demos/sandbox.tsx",
      "batches/ai-elements-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:stack-trace",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "异常堆栈定位器（原组件参考）",
    "reason": "原堆栈解析/展开，点击frame写宿主location；不打开IDE。copy已guard+catch但无失败回显。",
    "deliveredScope": "展开/折叠堆栈；点击应用文件路径顶部显示所选文件行列。不打开IDE、不读取真实文件。",
    "evidence": [
      "batches/ai-elements-04/stack-trace.tsx",
      "batches/ai-elements-04/source.zip!/src/demos/stack-trace.tsx",
      "batches/ai-elements-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:environment-variables",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "环境变量脱敏浏览（原组件参考）",
    "reason": "原隐藏/显示+固定占位API_KEY，无真实秘密；copy guard/try-catch防假成功，权限拒绝没有可见错误可优化。",
    "deliveredScope": "切换显示/隐藏变量值；示例API_KEY为占位文本，不读取用户凭据。复制按钮仅在浏览器允许时可用。",
    "evidence": [
      "batches/ai-elements-04/environment-variables.tsx",
      "batches/ai-elements-04/source.zip!/src/demos/environment-variables.tsx",
      "batches/ai-elements-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:prompt-input",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent任务输入框（原组件参考）",
    "reason": "原输入组件+本地回执和research开关；未挂文件上传UI，不应据原primitive未用fetch死路径判当前请求风险。",
    "deliveredScope": "输入内容后Enter或提交按钮把文字写到下方本地回执并清空输入；Research mode切换本地开关。不调用API、不启用截图或文件上传。",
    "evidence": [
      "batches/ai-elements-05/prompt-input.tsx",
      "batches/ai-elements-05/source.zip!/src/demos/prompt-input.tsx",
      "batches/ai-elements-05/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "ai-elements:conversation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "自动跟随的会话时间线（原组件参考）",
    "reason": "原Conversation滚动容器+宿主交替8消息/Add/Clear；不是实际AI聊天，样本标fixture。",
    "deliveredScope": "Add追加样本消息并自动滚到底部；向上滚后出现Scroll to latest；Clear清空后显示空态，再Add可恢复。",
    "evidence": [
      "batches/ai-elements-05/conversation.tsx",
      "batches/ai-elements-05/source.zip!/src/demos/conversation.tsx",
      "batches/ai-elements-05/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:warp",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "光束透视空间（原组件参考）",
    "reason": "原WarpBackground透视CSS+宿主原创卡片文案，不是原完整营销网站。",
    "deliveredScope": "彩色光束穿过透视网格，衬托中央内容卡片。",
    "evidence": [
      "featured/warp.tsx",
      "featured/featured-source.zip!/build/src/vault/main.tsx",
      "featured/featured-source.zip!/build/src/vault/main.tsx"
    ]
  },
  {
    "id": "magicui:orbit",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "双层轨道环绕（原组件参考）",
    "reason": "原OrbitingCircles双环+宿主字符图标与V核心，图标不是品牌原件；保留轨道机制。",
    "deliveredScope": "内外轨道以不同方向和速度持续环绕。",
    "evidence": [
      "featured/orbit.tsx",
      "featured/featured-source.zip!/build/src/vault/main.tsx",
      "featured/featured-source.zip!/build/src/vault/main.tsx"
    ]
  },
  {
    "id": "magicui:neon-gradient-card",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "霓虹渐变边缘卡片（原组件参考）",
    "reason": "原渐变边框卡+标题，resize测量；不提供导航或业务操作。",
    "deliveredScope": "检查两个背景动画节点computed animationName=background-position-spin，间隔1秒background-position变化。",
    "evidence": [
      "batches/magicui-01/neon-gradient-card.tsx",
      "batches/magicui-01/source.zip!/src/demos/neon-gradient-card.tsx",
      "batches/magicui-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:animated-beam",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "流动光束连接图（原组件参考）",
    "reason": "原六路SVG渐变连接+七节点；品牌图标用NodeIcon几何标记替换，非真实平台连接。",
    "deliveredScope": "至少6条SVG路径可见；间隔1秒渐变坐标变化；缩放窗口后曲线重新贴合节点。",
    "evidence": [
      "batches/magicui-01/animated-beam.tsx",
      "batches/magicui-01/source.zip!/src/demos/animated-beam.tsx",
      "batches/magicui-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:glyph-matrix",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "字符矩阵画布（原组件参考）",
    "reason": "原2DCanvas字符阵列；probe/getContext为核心路径，无原生像素本轮不判成功或失败。",
    "deliveredScope": "canvas存在且尺寸非零；间隔1秒截图字符分布变化，鼠标/窗口变化不报错。",
    "evidence": [
      "batches/magicui-01/glyph-matrix.tsx",
      "batches/magicui-01/source.zip!/src/demos/glyph-matrix.tsx",
      "batches/magicui-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:floating-3d-particles",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "漂浮立体粒子场（原组件参考）",
    "reason": "原2DCanvas伪3D粒子，不需WebGL；Get Started是无handler装饰按钮，保背景场景不称落地流程。",
    "deliveredScope": "canvas非空；连续截图粒子位置变化，前景按钮可聚焦。",
    "evidence": [
      "batches/magicui-01/floating-3d-particles.tsx",
      "batches/magicui-01/source.zip!/src/demos/floating-3d-particles.tsx",
      "batches/magicui-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:text-3d-flip",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "立体逐字翻转（原组件参考）",
    "reason": "原分字hover翻面，鼠标事件与spring；是文字动效而非整页。",
    "deliveredScope": "鼠标移入文字，各字出现3D翻面；移出恢复；computed transform非identity。",
    "evidence": [
      "batches/magicui-02/text-3d-flip.tsx",
      "batches/magicui-02/source.zip!/src/demos/text-3d-flip.tsx",
      "batches/magicui-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:morphing-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "液态文字变形（原组件参考）",
    "reason": "原RAF双span模糊融合+固定9词；无输入业务，保留动效组件。",
    "deliveredScope": "间隔2秒可见文字变化；两个span的blur/opacity随帧变化。",
    "evidence": [
      "batches/magicui-02/morphing-text.tsx",
      "batches/magicui-02/source.zip!/src/demos/morphing-text.tsx",
      "batches/magicui-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:terminal",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "逐行生成终端（本地状态实验）",
    "reason": "原固定shadcn安装日志逐字/分段动画；Success只是演示文本，不执行安装。",
    "deliveredScope": "打开后命令逐字增加，随后出现多行检查结果；重载可从头播放。",
    "evidence": [
      "batches/magicui-02/terminal.tsx",
      "batches/magicui-02/source.zip!/src/demos/terminal.tsx",
      "batches/magicui-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:border-beam",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "环绕边缘光束卡片（原组件参考）",
    "reason": "原BorderBeam放在静态Login卡；Register/Login无handler且在form外。不能当登录表单流程，保持边框效果参考。",
    "deliveredScope": "computed offset-distance或transform随帧变化；email/password可输入，按钮仅演示不提交。",
    "evidence": [
      "batches/magicui-02/border-beam.tsx",
      "batches/magicui-02/source.zip!/src/demos/border-beam.tsx",
      "batches/magicui-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:sparkles-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "星芒闪烁标题（原组件参考）",
    "reason": "原100ms更新星芒参数的文字效果；未测真实像素/动画节奏。",
    "deliveredScope": "多个星芒SVG可见；连续截图位置/opacity/scale变化。",
    "evidence": [
      "batches/magicui-02/sparkles-text.tsx",
      "batches/magicui-02/source.zip!/src/demos/sparkles-text.tsx",
      "batches/magicui-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:kinetic-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "逐字响应弹性标题（原组件参考）",
    "reason": "原Nostalgia字重/间距hover效果；真实用途是排版组件。",
    "deliveredScope": "鼠标移入单个字母，对比font-weight、padding-inline与-webkit-text-stroke-width；移出恢复。",
    "evidence": [
      "batches/magicui-03/kinetic-text.tsx",
      "batches/magicui-03/source.zip!/src/demos/kinetic-text.tsx",
      "batches/magicui-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:aurora-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "极光流色标题（原组件参考）",
    "reason": "原渐变背景文字，单个h1；不是完整hero页面。",
    "deliveredScope": "实际承载animate-aurora的span computed animationName=aurora；间隔1秒background-position和transform变化。",
    "evidence": [
      "batches/magicui-03/aurora-text.tsx",
      "batches/magicui-03/source.zip!/src/demos/aurora-text.tsx",
      "batches/magicui-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:meteors",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "斜向流星背景（原组件参考）",
    "reason": "原30随机延时流星+标题容器，非动态内容流。",
    "deliveredScope": "等待首轮随机delay后观察30个meteor节点；computed animationName=meteor，间隔1秒transform/opacity变化。",
    "evidence": [
      "batches/magicui-03/meteors.tsx",
      "batches/magicui-03/source.zip!/src/demos/meteors.tsx",
      "batches/magicui-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:line-shadow-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "流动线纹阴影字（原组件参考）",
    "reason": "原data-text与伪元素阴影动画；去主题依赖固定black已由demo体现。",
    "deliveredScope": "检查data-text节点::after computed animationName=line-shadow，15s周期，间隔1秒background-position变化。",
    "evidence": [
      "batches/magicui-03/line-shadow-text.tsx",
      "batches/magicui-03/source.zip!/src/demos/line-shadow-text.tsx",
      "batches/magicui-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:interactive-grid-pattern",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "指针感应斜网格（原组件参考）",
    "reason": "原SVG格子hover setHoveredSquare，离开清空；不是自动随机栅格。",
    "deliveredScope": "鼠标移入多个SVG rect，观察目标rect fill/opacity或class变化，离开后恢复。非自动播放。",
    "evidence": [
      "batches/magicui-03/interactive-grid-pattern.tsx",
      "batches/magicui-03/source.zip!/src/demos/interactive-grid-pattern.tsx",
      "batches/magicui-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:flickering-grid",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "闪烁像素网格（原组件参考）",
    "reason": "原2DCanvas方格随机透明度；getContext必要，不能用canvas节点存在当视觉证明。",
    "deliveredScope": "canvas宽高非零，间隔1秒截图像素透明度分布变化。2D canvas，不需WebGL。",
    "evidence": [
      "batches/magicui-03/flickering-grid.tsx",
      "batches/magicui-03/source.zip!/src/demos/flickering-grid.tsx",
      "batches/magicui-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:retro-grid",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "复古透视地网（原组件参考）",
    "reason": "原WebGL渲染与CSS fallback真实存在，含contextlost/restored监听；不能只看WebGL缺失一律判空白。",
    "deliveredScope": "优先WebGL画布；若环境不支持，原组件CSS fallback仍用retro-grid-fallback-scroll动画。检查canvas像素或data-retro-grid-scroll节点transform两帧变化；明确记录走哪条路径。",
    "evidence": [
      "batches/magicui-04/retro-grid.tsx",
      "batches/magicui-04/source.zip!/src/demos/retro-grid.tsx",
      "batches/magicui-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:animated-list",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "逐条通知堆叠（原组件参考）",
    "reason": "原逐项AnimatedList，4通知复制10组共40仅演示，不是40独立来源/业务消息。",
    "deliveredScope": "打开/进入视野后等待3秒，列表可见条目数量增加且新卡opacity/transform有入场过渡。",
    "evidence": [
      "batches/magicui-04/animated-list.tsx",
      "batches/magicui-04/source.zip!/src/demos/animated-list.tsx",
      "batches/magicui-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:particles",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "指针牵引粒子（原组件参考）",
    "reason": "原2DCanvas100粒子与鼠标跟随，context资源/像素未原生复测，不按DOM宣称绘制成功。",
    "deliveredScope": "canvas尺寸非零；间隔1秒像素变化，再移动指针观察粒子位置响应。2D canvas，不需WebGL。",
    "evidence": [
      "batches/magicui-04/particles.tsx",
      "batches/magicui-04/source.zip!/src/demos/particles.tsx",
      "batches/magicui-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:hyper-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "解码翻字符标题（原组件参考）",
    "reason": "原hover随机字母并恢复，单句文字效果。",
    "deliveredScope": "hover Hover Me! 文本，短时间textContent出现随机字母并恢复；再次hover能重播。",
    "evidence": [
      "batches/magicui-04/hyper-text.tsx",
      "batches/magicui-04/source.zip!/src/demos/hyper-text.tsx",
      "batches/magicui-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:spinning-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "环形旋转文字（原组件参考）",
    "reason": "原环形字母持续旋转，固定文案，不是导航菜单。",
    "deliveredScope": "环形字母可见，外层motion节点computed transform隔1秒不同；文字布局不挤成直线。",
    "evidence": [
      "batches/magicui-04/spinning-text.tsx",
      "batches/magicui-04/source.zip!/src/demos/spinning-text.tsx",
      "batches/magicui-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:light-rays",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "柔光放射背景（原组件参考）",
    "reason": "原Motion光线+静态标题段落，无操作承诺；参考材质背景组件。",
    "deliveredScope": "等待首轮延迟后，检查多条motion光线的transform/opacity两时点变化。",
    "evidence": [
      "batches/magicui-05/light-rays.tsx",
      "batches/magicui-05/source.zip!/src/demos/light-rays.tsx",
      "batches/magicui-05/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "magicui:scroll-based-velocity",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "滚动速度文字带（原组件参考）",
    "reason": "原两行相反方向文字，useScroll速度反馈；预览增加滚动高度，iframe滚动几何本轮未原生复验。",
    "deliveredScope": "在独立预览或详情iframe内部滚动；观察两行translateX持续变化，快速滚动后速度短暂增大。预览适配增加可滚动高度。",
    "evidence": [
      "batches/magicui-05/scroll-based-velocity.tsx",
      "batches/magicui-05/source.zip!/src/demos/scroll-based-velocity.tsx",
      "batches/magicui-05/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kibo:calendar",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "合成任务月历",
    "reason": "20条seeded Faker任务，原月/年状态及上一月下一月跨年；不是实际日历连接，日期依当前时间而非永久固定数据。",
    "deliveredScope": "20条seeded Faker任务，原月/年状态及上一月下一月跨年；不是实际日历连接，日期依当前时间而非永久固定数据。",
    "evidence": [
      "ui-kibo-adapt/src/demos/calendar.tsx",
      "ui-kibo-adapt/src/packages/calendar/index.tsx",
      "ui-kibo-adapt/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/kibo-direct-01/README.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "kibo:deck",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可滑动卡堆",
    "reason": "原Deck受控index与swipe，宿主补Previous/Next；5幅原创几何SVG代照片，非真实照片集。",
    "deliveredScope": "原Deck受控index与swipe，宿主补Previous/Next；5幅原创几何SVG代照片，非真实照片集。",
    "evidence": [
      "ui-kibo-adapt/src/demos/deck.tsx",
      "ui-kibo-adapt/src/packages/deck/index.tsx",
      "ui-kibo-adapt/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/kibo-direct-01/README.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "kibo:dialog-stack",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "三级对话框导航",
    "reason": "原Show me、Next/Previous与三层标题状态，完整组件示例而非业务提交向导。",
    "deliveredScope": "原Show me、Next/Previous与三层标题状态，完整组件示例而非业务提交向导。",
    "evidence": [
      "ui-kibo-adapt/src/demos/dialog-stack.tsx",
      "ui-kibo-adapt/src/packages/dialog-stack/index.tsx",
      "ui-kibo-adapt/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/kibo-direct-01/README.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "kibo:editor",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地富文本编辑组件",
    "reason": "原Tiptap文档/格式/列表/表格工具及onUpdate存本地JSON；没有协作或持久保存，链接导航阻止。",
    "deliveredScope": "原Tiptap文档/格式/列表/表格工具及onUpdate存本地JSON；没有协作或持久保存，链接导航阻止。",
    "evidence": [
      "ui-kibo-adapt/src/demos/editor.tsx",
      "ui-kibo-adapt/src/packages/editor/index.tsx",
      "ui-kibo-adapt/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/kibo-direct-01/README.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "kibo:image-crop",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地图像裁剪组件",
    "reason": "原ReactCrop选区与Canvas PNG流程，默认原创SVG，可选本地文件，onCrop显示裁剪结果；此前DOM只验选区初始化，不冒称真实像素已验。",
    "deliveredScope": "原ReactCrop选区与Canvas PNG流程，默认原创SVG，可选本地文件，onCrop显示裁剪结果；此前DOM只验选区初始化，不冒称真实像素已验。",
    "evidence": [
      "ui-kibo-adapt/src/demos/image-crop.tsx",
      "ui-kibo-adapt/src/packages/image-crop/index.tsx",
      "ui-kibo-adapt/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/kibo-direct-01/README.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "kibo:table",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "合成任务排序表格",
    "reason": "原TanStack列排序菜单、20条合成记录与原创头像SVG；无真实项目查询或持久编辑。",
    "deliveredScope": "原TanStack列排序菜单、20条合成记录与原创头像SVG；无真实项目查询或持久编辑。",
    "evidence": [
      "ui-kibo-adapt/src/demos/table.tsx",
      "ui-kibo-adapt/src/packages/table/index.tsx",
      "ui-kibo-adapt/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/kibo-direct-01/README.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "kibo:tree",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可展开文件结构树",
    "reason": "原expandedIds/selectedId与节点层级，文件名为本地示例而非真实文件系统；不承诺打开编辑文件。",
    "deliveredScope": "原expandedIds/selectedId与节点层级，文件名为本地示例而非真实文件系统；不承诺打开编辑文件。",
    "evidence": [
      "ui-kibo-adapt/src/demos/tree.tsx",
      "ui-kibo-adapt/src/packages/tree/index.tsx",
      "ui-kibo-adapt/src/main.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/kibo-direct-01/README.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "uilayout:drag-drag-items",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "拖拽重排列表",
    "reason": "原Reorder.Group/setItems及专用手柄，列表文案示例不是社交任务执行；Click是原外链，沙箱不承诺真实站点访问。",
    "deliveredScope": "原Reorder.Group/setItems及专用手柄，列表文案示例不是社交任务执行；Click是原外链，沙箱不承诺真实站点访问。",
    "evidence": [
      "ui-full-quality-B2-spatial/archived-source/01/src/demos/drag/drag-items.tsx",
      "ui-full-quality-B2-spatial/archived-source/01/src/main.tsx",
      "ui-full-quality-B2-spatial/archived-source/01/ADAPTATION.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "uilayout:swapy-swapy-handle",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "六块手柄交换布局",
    "reason": "原Swapy hover交换与6块彩色内容；onSwap只日志，DOM交换由引擎执行，不是假装保存布局。",
    "deliveredScope": "原Swapy hover交换与6块彩色内容；onSwap只日志，DOM交换由引擎执行，不是假装保存布局。",
    "evidence": [
      "ui-full-quality-B2-spatial/archived-source/01/src/demos/swapy/swapy-handle.tsx",
      "ui-full-quality-B2-spatial/archived-source/01/src/main.tsx",
      "ui-full-quality-B2-spatial/archived-source/01/ADAPTATION.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "uilayout:scroll-animation-sticky-hero-scroll",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "双层滚动首屏实验",
    "reason": "原200vh布局和两层scale/rotate映射，第二屏4照片已改原创SVG；顶部Scroll Please并非空白，需滚动看完整实验。",
    "deliveredScope": "原200vh布局和两层scale/rotate映射，第二屏4照片已改原创SVG；顶部Scroll Please并非空白，需滚动看完整实验。",
    "evidence": [
      "ui-full-quality-B2-spatial/archived-source/01/src/demos/scroll-animation/sticky-hero-scroll.tsx",
      "ui-full-quality-B2-spatial/archived-source/01/src/main.tsx",
      "ui-full-quality-B2-spatial/archived-source/01/ADAPTATION.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "uilayout:scroll-animation-repeat-scroll",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "重复入视网格实验",
    "reason": "500px提示区后原三列入视动画，原照片换几何SVG。首帧仅Scroll Down不是失败，媒体审美已改变，非原摄影排版。",
    "deliveredScope": "500px提示区后原三列入视动画，原照片换几何SVG。首帧仅Scroll Down不是失败，媒体审美已改变，非原摄影排版。",
    "evidence": [
      "ui-full-quality-B2-spatial/archived-source/01/src/demos/scroll-animation/repeat-scroll.tsx",
      "ui-full-quality-B2-spatial/archived-source/01/src/main.tsx",
      "ui-full-quality-B2-spatial/archived-source/01/ADAPTATION.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "uilayout:mac-genie-effect",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "Dock窗口精灵形变实验",
    "reason": "原6应用示意窗口、html-to-image快照和Canvas逐行形变/打开最小化；不是实际桌面应用。保留实验范围，快照异常路径需修，不声称当前已原生失败。",
    "deliveredScope": "原6应用示意窗口、html-to-image快照和Canvas逐行形变/打开最小化；不是实际桌面应用。保留实验范围，快照异常路径需修，不声称当前已原生失败。",
    "evidence": [
      "ui-full-quality-B2-spatial/archived-source/02/src/demos/mac/genie-effect.tsx",
      "ui-full-quality-B2-spatial/archived-source/02/src/main.tsx",
      "ui-full-quality-B2-spatial/archived-source/02/ADAPTATION.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "uilayout:linear-modal-standalone-version",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "共享布局卡片模态框",
    "reason": "原三卡点击展开、Escape/背景关闭与拖动轮播；图像明确替换原创SVG，未打开的封面不是加载失败。",
    "deliveredScope": "原三卡点击展开、Escape/背景关闭与拖动轮播；图像明确替换原创SVG，未打开的封面不是加载失败。",
    "evidence": [
      "ui-full-quality-B2-spatial/archived-source/02/src/demos/linear-modal/standalone-version.tsx",
      "ui-full-quality-B2-spatial/archived-source/02/src/main.tsx",
      "ui-full-quality-B2-spatial/archived-source/02/ADAPTATION.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "uilayout:image-reveal-image-reveal",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "鼠标跟随图像揭示",
    "reason": "原4行标签mouseenter/move设透明度与弹簧坐标；初态src空且opacity0，鼠标进入才显示原创替代SVG。键盘/触摸无对应原入口，保留指针实验。",
    "deliveredScope": "原4行标签mouseenter/move设透明度与弹簧坐标；初态src空且opacity0，鼠标进入才显示原创替代SVG。键盘/触摸无对应原入口，保留指针实验。",
    "evidence": [
      "ui-full-quality-B2-spatial/archived-source/02/src/demos/image-reveal/image-reveal.tsx",
      "ui-full-quality-B2-spatial/archived-source/02/src/main.tsx",
      "ui-full-quality-B2-spatial/archived-source/02/ADAPTATION.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "uilayout:drawer-nested-vaul-drawer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "三级嵌套抽屉",
    "reason": "原Vaul Root与两级NestedRoot开关/拖拽；初始关闭正常，文档外链非本站导航服务。",
    "deliveredScope": "原Vaul Root与两级NestedRoot开关/拖拽；初始关闭正常，文档外链非本站导航服务。",
    "evidence": [
      "ui-full-quality-B2-spatial/archived-source/02/src/demos/drawer/nested-vaul-drawer.tsx",
      "ui-full-quality-B2-spatial/archived-source/02/src/main.tsx",
      "ui-full-quality-B2-spatial/archived-source/02/ADAPTATION.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "uilayout:drawer-responsive-header",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "响应式导航抽屉",
    "reason": "原768px breakpoint与受控HeaderDrawer/关闭按钮/导航布局；原链接只是普通a，未实现完整多页面站点。",
    "deliveredScope": "原768px breakpoint与受控HeaderDrawer/关闭按钮/导航布局；原链接只是普通a，未实现完整多页面站点。",
    "evidence": [
      "ui-full-quality-B2-spatial/archived-source/03/src/demos/drawer/responsive-header.tsx",
      "ui-full-quality-B2-spatial/archived-source/03/src/main.tsx",
      "ui-full-quality-B2-spatial/archived-source/03/ADAPTATION.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "uilayout:footers-animated-logo-footer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "动画标志页脚区块",
    "reason": "原useInView逐字Logo、导航/社交链接和newsletter输入。提交仅FormData+reset，Send注释，成功Toast整个JSX也注释，故不是已订阅或真实接收；保留页面区块。",
    "deliveredScope": "原useInView逐字Logo、导航/社交链接和newsletter输入。提交仅FormData+reset，Send注释，成功Toast整个JSX也注释，故不是已订阅或真实接收；保留页面区块。",
    "evidence": [
      "ui-full-quality-B2-spatial/archived-source/03/src/demos/footers/animated-logo-footer.tsx",
      "ui-full-quality-B2-spatial/archived-source/03/src/main.tsx",
      "ui-full-quality-B2-spatial/archived-source/03/ADAPTATION.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "uilayout:card-product-card4",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "商品收藏卡片",
    "reason": "原爱心isActive切换；Add to cart未绑定，图片已换几何SVG而文字仍Nike Air Max/鞋图alt，不能称原鞋款媒体或电商交易。",
    "deliveredScope": "原爱心isActive切换；Add to cart未绑定，图片已换几何SVG而文字仍Nike Air Max/鞋图alt，不能称原鞋款媒体或电商交易。",
    "evidence": [
      "ui-full-quality-B2-spatial/archived-source/03/src/demos/card/product-card4.tsx",
      "ui-full-quality-B2-spatial/archived-source/03/src/main.tsx",
      "ui-full-quality-B2-spatial/archived-source/03/ADAPTATION.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "uilayout:color-picker-raws-color-picker",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "HSV与HEX取色组件",
    "reason": "原HSV/HEX转换、面板鼠标选择与输入状态有效；剪贴板回执原未await的最小修补已独立准备，保留取色组件不因可选能力降级。",
    "deliveredScope": "原HSV/HEX转换、面板鼠标选择与输入状态有效；剪贴板回执原未await的最小修补已独立准备，保留取色组件不因可选能力降级。",
    "evidence": [
      "ui-full-quality-B2-spatial/archived-source/03/src/demos/color-picker/raws-color-picker.tsx",
      "ui-full-quality-B2-spatial/archived-source/03/src/main.tsx",
      "ui-full-quality-B2-spatial/archived-source/03/ADAPTATION.md"
    ],
    "reviewBasis": "实际demo/宿主源码范围核查，未做本轮DOM或native"
  },
  {
    "id": "cult:agent-suggest-card-stack",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent建议卡堆SVG展示",
    "reason": "完整静态视觉有参考价值；Apply不是可操作按钮，不称建议执行流程。",
    "deliveredScope": "原3条建议/进度/成功混合错误状态与Apply字样全为SVG绘制，没有提交handler。",
    "evidence": "/tmp/ui-cult-adapt/src/main.tsx; /tmp/ui-cult-adapt/src/registry/default/example/agent-suggest-card-stack-demo.tsx; /tmp/ui-cult-adapt/src/registry/default/ui/agent-suggest-card-stack.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-direct-01/ADAPTATION.md"
  },
  {
    "id": "cult:ai-instructions",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地AI指令菜单",
    "reason": "真实本地输入流程可保；Grok下拉末项被iframe底边裁切待视口复核，不是已证功能失败。",
    "deliveredScope": "原Instructions状态数组、选中开关、搜索与Create表单；只更新本地指令。",
    "evidence": "ui-cult-forms/src/main.tsx; ui-cult-forms/src/registry/default/example/ai-instructions-demo.tsx; ui-cult-forms/src/registry/default/ui/ai-instructions.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-forms-01/README.md"
  },
  {
    "id": "cult:analytics-chart",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "多数据集分析曲线组件",
    "reason": "保留原图表组件，数据为fixture而非真实分析服务；历史只抓默认Clicks未测tab。",
    "deliveredScope": "原示例ecommerce等tab切换数据与标题，原图hover索引/tooltip/入场动画。",
    "evidence": "/tmp/ui-cult-adapt/src3/main.tsx; /tmp/ui-cult-adapt/src3/registry/default/example/analytics-chart-demo.tsx; /tmp/ui-cult-adapt/src3/registry/default/ui/analytics-chart.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-direct-03/ADAPTATION.md"
  },
  {
    "id": "cult:collab-toolbar",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "协作工具栏视觉组件",
    "reason": "工具栏设计可保，但不是协同编辑器；建议显著注明图标仅展示，不能把点击无动作当协作完成。",
    "deliveredScope": "原图标按钮hover与头像排布；CollabToolbarIcon无onClick；头像换本地几何SVG。",
    "evidence": "/tmp/ui-cult-adapt/src2/main.tsx; /tmp/ui-cult-adapt/src2/registry/default/example/collab-toolbar-demo.tsx; /tmp/ui-cult-adapt/src2/registry/default/ui/collab-toolbar.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-direct-02/ADAPTATION.md"
  },
  {
    "id": "cult:dynamic-island",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "动态岛形态切换实验",
    "reason": "真实形态实验可保，无账户功能；历史loading静帧不代表cycle失败，原生转场待验。",
    "deliveredScope": "原reducer与cycleBlobStates多阶段尺寸/内容变换；medium的Login/Join按钮无handler。",
    "evidence": "/tmp/ui-cult-adapt/src2/main.tsx; /tmp/ui-cult-adapt/src2/registry/default/example/dynamic-island-demo.tsx; /tmp/ui-cult-adapt/src2/registry/default/ui/dynamic-island.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-direct-02/ADAPTATION.md"
  },
  {
    "id": "cult:expandable-screen",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "共享布局展开表单",
    "reason": "展开表单组件完整，不是waitlist服务；原trigger是div与关闭动画/焦点质量尚待真浏览器核查。",
    "deliveredScope": "原点击展开/close、姓名邮箱公司规模与留言表单，host捕获submit并回显不发送。",
    "evidence": "/tmp/ui-cult-adapt/src3/main.tsx; /tmp/ui-cult-adapt/src3/registry/default/example/expandable-screen-demo.tsx; /tmp/ui-cult-adapt/src3/registry/default/ui/expandable-screen.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-direct-03/ADAPTATION.md"
  },
  {
    "id": "cult:family-drawer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "多视图设置抽屉",
    "reason": "准确披露字段临时不持久化，原视图导航可保，不因无保存服务降级。",
    "deliveredScope": "host仅CustomViewsExample：default/settings/profile/about，Save/Update setView(default)；非同文件其它上传或删除账户demo。",
    "evidence": "ui-cult-forms/src/main.tsx; ui-cult-forms/src/registry/default/example/family-drawer-demo.tsx; ui-cult-forms/src/registry/default/ui/family-drawer.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-forms-01/README.md"
  },
  {
    "id": "cult:fluted-glass",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "长虹玻璃材质参数台",
    "reason": "保留真实材质实验，替代图明确；Grok仅默认静态capture，不等于所有参数/GPU接受。",
    "deliveredScope": "原FlutedGlass/Paper shader、预设与参数controls；5张本地原创SVG替远程素材，remote URL输入禁用；无GL显式notice。",
    "evidence": "ui-cult-glass-adapt/src/main.tsx; ui-cult-glass-adapt/src/registry/default/example/fluted-glass-demo.tsx; ui-cult-glass-adapt/src/registry/default/ui/fluted-glass.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-glass-01/README.md"
  },
  {
    "id": "cult:hero-color-panel",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "彩色面板Shader首屏组",
    "reason": "完整首屏组件组而非完整应用，营销文案/徽章原样不代表产品能力；无nativeGPU不单独降级。",
    "deliveredScope": "原Default/ConfiguredViaProps/组合API首屏展示、Paper ColorPanels与CTA；CTA本地提示不导航。",
    "evidence": "ui-gpu-heros-local/main.tsx; ui-gpu-heros-local/src/color-panels.tsx; ui-gpu-heros-local/src/hero-color-panel.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/gpu-heros-01/color-panels/README.md"
  },
  {
    "id": "cult:hero-heatmap",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "热力轮廓Shader首屏组",
    "reason": "原构图与算法保留，不是AI生成服务；真实设备渲染待验，命令桩不能代表像素。",
    "deliveredScope": "原3组Demo、原Cult/diamond矢量、原图像预处理及Paper shader，CTA仅说明。",
    "evidence": "ui-cult-image-heroes-local/main.tsx; ui-cult-image-heroes-local/src/hero-heatmap-demo.tsx; ui-cult-image-heroes-local/src/hero-heatmap.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-image-heroes-01/heatmap/README.md"
  },
  {
    "id": "cult:intro-disclosure",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "逐步介绍披露弹层",
    "reason": "完整本地导览组件可保，不是页面几何锚点tour；本地SVG替截图已明示。",
    "deliveredScope": "原desktop/mobile步骤tab/前后/完成/跳过/重开，存储改模块memory；路由被阻止。",
    "evidence": "ui-cult-next/src/main.tsx; ui-cult-next/src/registry/default/example/intro-disclosure-demo.tsx; ui-cult-next/src/registry/default/ui/intro-disclosure.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-next-01/README.md"
  },
  {
    "id": "cult:marketing-feature-code",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "网络策略营销代码区块",
    "reason": "静态section可保，非代码执行/安全产品；剪贴板不支持时缺可见错误属局部体验待改善。",
    "deliveredScope": "原标题图解/代码样例；Copy调用navigator.clipboard，失败只重置copied不提示。",
    "evidence": "/tmp/ui-cult-adapt/src/main.tsx; /tmp/ui-cult-adapt/src/registry/default/example/marketing-feature-code-demo.tsx; /tmp/ui-cult-adapt/src/registry/default/ui/marketing-feature-code.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-direct-01/ADAPTATION.md"
  },
  {
    "id": "cult:morph-surface",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "形变反馈输入面板",
    "reason": "占位文字明确不传消息，成功是本地状态演示；保形变输入组件，建议成功文案仍显式本地。",
    "deliveredScope": "host只一个原MorphSurface非多demo；输入/展开/关闭，未传onSubmit时直接原onSuccess。",
    "evidence": "/tmp/ui-cult-adapt/src/main.tsx; /tmp/ui-cult-adapt/src/main.tsx; /tmp/ui-cult-adapt/src/registry/default/ui/morph-surface.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-direct-01/ADAPTATION.md"
  },
  {
    "id": "cult:onboarding",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "三步本地产品引导",
    "reason": "实际步骤组件完整，插画为本地几何替代已说明，不称完成项目配置。",
    "deliveredScope": "原功能tab、角色/目标选择、Tips，完成setOpen(false)，无账户/路由。",
    "evidence": "ui-cult-next/src/main.tsx; ui-cult-next/src/registry/default/example/onboarding-demo.tsx; ui-cult-next/src/registry/default/ui/onboarding.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-next-01/README.md"
  },
  {
    "id": "cult:prompt-library",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地提示词检索创建",
    "reason": "选择文本有真实本地回传，保留组件；不声称已复制或发送模型。",
    "deliveredScope": "原PromptLibrary状态列表/搜索/Create，onSelect展示lastSelected；剪贴板分支明确移除。",
    "evidence": "ui-cult-next/src/main.tsx; ui-cult-next/src/registry/default/example/prompt-library-demo.tsx; ui-cult-next/src/registry/default/ui/prompt-library.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-next-01/README.md"
  },
  {
    "id": "cult:security-checkpoint",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "安全检查点装饰插画",
    "reason": "原静态插画有独立用途，ADAPTATION与Grok明确非挑战/审批，不要求伪造安全服务。",
    "deliveredScope": "原安全卡片/尺寸测量/视觉图形，无CAPTCHA验证逻辑。",
    "evidence": "/tmp/ui-cult-adapt/src/main.tsx; /tmp/ui-cult-adapt/src/registry/default/example/security-checkpoint-demo.tsx; /tmp/ui-cult-adapt/src/registry/default/ui/security-checkpoint.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-direct-01/ADAPTATION.md"
  },
  {
    "id": "cult:three-d-carousel",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "三维图片轮播与放大",
    "reason": "原交互结构保留，素材风格变化已披露；历史默认帧未测放大，不能称视觉全验。",
    "deliveredScope": "原旋转/选中activeImg和overlay关闭，远程照片换本地SVG几何图。",
    "evidence": "/tmp/ui-cult-adapt/src2/main.tsx; /tmp/ui-cult-adapt/src2/registry/default/example/three-d-carousel-demo.tsx; /tmp/ui-cult-adapt/src2/registry/default/ui/three-d-carousel.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-direct-02/ADAPTATION.md"
  },
  {
    "id": "cult:feature-carousel",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "四步骤特性轮播组合",
    "reason": "保原组合组件；Grok卡片低部超iframe提示裁切，优先真实视口复核，不因无真实产品输出删项。",
    "deliveredScope": "原FeatureCarousel图层/切换/样式，6图片槽绑定5本地矢量作品，不是原产品截图。",
    "evidence": "ui-cult-carousel-adapt/src/main.tsx; ui-cult-carousel-adapt/src/Demo.tsx; ui-cult-carousel-adapt/src/ui/feature-carousel.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-carousel-01/README.md"
  },
  {
    "id": "cult:tabs-illustration-vercel",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Text/Image/Audio生成态选项卡",
    "reason": "保生成态组件非真实生成；catalog旧“源码已归档”说明滞后，应改实际本地tab范围。",
    "deliveredScope": "原activeTab/panelKey/progress、逐字文本及媒体状态插画，切换触发本地脚本。",
    "evidence": "/tmp/ui-cult-adapt/src3/main.tsx; /tmp/ui-cult-adapt/src3/registry/default/example/tabs-illustration-vercel-demo.tsx; /tmp/ui-cult-adapt/src3/registry/default/ui/tabs-illustration-vercel.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-direct-03/ADAPTATION.md"
  },
  {
    "id": "cult:fluid-ai-workloads",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "工作负载流体SVG插画",
    "reason": "metadata准确静态插画，保留，不因无交互降级。",
    "deliveredScope": "原400×200 SVG曲线/层级/标记，示例仅传尺寸，无任务执行handler。",
    "evidence": "ui-cult-static-local/main.template.tsx; ui-cult-static-local/src/fluid-ai-workloads-demo.tsx; ui-cult-static-local/src/fluid-ai-workloads.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-static-01/fluid-ai-workloads/README.md"
  },
  {
    "id": "cult:illustration-fluid-rendering",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "流体渲染SVG插画",
    "reason": "保静态组件，不是实时渲染性能图或商务服务。",
    "deliveredScope": "原完整SVG图形/滤镜/Shopify等装饰标记，wrapper只挂原FluidRendering。",
    "evidence": "ui-cult-static-next-local/main.template.tsx; ui-cult-static-next-local/src/illustration-fluid-rendering-demo.tsx; ui-cult-static-next-local/src/illustration-fluid-rendering.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-static-02/illustration-fluid-rendering/README.md"
  },
  {
    "id": "cult:hero-liquid-metal",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "液态金属Shader首屏组",
    "reason": "保首屏组与真实Shader，不称整站；设备失败有明确停止，mockGPU非像素。",
    "deliveredScope": "原3组Demo/图像轮廓预处理/Paper着色器、原SVG资产与静态CTA。",
    "evidence": "ui-cult-image-heroes-local/main.tsx; ui-cult-image-heroes-local/src/hero-liquid-metal-demo.tsx; ui-cult-image-heroes-local/src/hero-liquid-metal.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-image-heroes-01/liquid-metal/README.md"
  },
  {
    "id": "cult:illustration-card-grid",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "三卡Gateway营销图文组件",
    "reason": "metadata明确营销示例，静态图文有效，不应因为非服务而降级。",
    "deliveredScope": "原One API key/failovers/list price三文案与Gateway子SVG，无API/计费动作。",
    "evidence": "ui-cult-static-next-local/main.template.tsx; ui-cult-static-next-local/src/illustration-card-grid-demo.tsx; ui-cult-static-next-local/src/illustration-card-grid.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-static-02/illustration-card-grid/README.md"
  },
  {
    "id": "cult:apple-keyboard",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "键盘造型与按压样式",
    "reason": "范围已明确不模拟输入，保造型组件；不作为可输入虚拟键盘推荐。",
    "deliveredScope": "原完整键帽/Tabler图标、CSS active按压，Key/TouchID没有文字输入或生物识别handler。",
    "evidence": "ui-cult-static-local/main.template.tsx; ui-cult-static-local/src/apple-keyboard-demo.tsx; ui-cult-static-local/src/apple-keyboard.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-static-01/apple-keyboard/README.md"
  },
  {
    "id": "cult:illustration-graph",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "图结构SVG插画",
    "reason": "静态图形范围准确，保留不冒充图编辑器。",
    "deliveredScope": "原节点/线条/filter的SVG与默认wrapper，不提供拖动或图数据编辑。",
    "evidence": "ui-cult-static-local/main.template.tsx; ui-cult-static-local/src/illustration-graph-demo.tsx; ui-cult-static-local/src/illustration-graph.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-static-01/illustration-graph/README.md"
  },
  {
    "id": "cult:circuit-board",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "电路技术栈营销插画",
    "reason": "保原section；catalog归档描述应更新为可看静态图与禁导航范围，不称真实技术检测。",
    "deliveredScope": "原Circuit SVG与React/Turbo/SWC介绍卡；外链由host阻止并显示status。",
    "evidence": "/tmp/ui-cult-adapt/src3/main.tsx; /tmp/ui-cult-adapt/src3/registry/default/example/circuit-board-demo.tsx; /tmp/ui-cult-adapt/src3/registry/default/ui/circuit-board.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/cult-direct-03/ADAPTATION.md"
  },
  {
    "id": "uilayout:liquid-glass-system",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "半透明展开卡组件",
    "reason": "保留原材质与展开组件；不是全套玻璃系统或运行通知服务，替代资源在页脚明确。",
    "deliveredScope": "原LiquidGlassCard过滤/blur/边框和410×90→410×335点击展开；draggable=false；宿主原创研究通知/背景/轨道SVG，不是原照片或实际任务结果。",
    "evidence": "ui-layout-final-audit/build/liquid-glass-system.tsx; ui-layout-final-audit/source/components/ui/liquid-glass.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/uilayout-direct-01/liquid-glass-system/ADAPTATION.md"
  },
  {
    "id": "uilayout:tree-code-viewer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "文件树与代码高亮组件",
    "reason": "真实本地浏览组件可保，不是文件系统或IDE；代码片段内Sign in只是显示代码，不当可运行页面。",
    "deliveredScope": "原TreeProvider单选/目录展开与selectedFile联动，固定本地源码经Shiki高亮；copy受沙箱约束回退选择文本。",
    "evidence": "ui-layout-final-audit/build/tree-code-viewer.tsx; ui-layout-final-audit/build/tree-demo.tsx; ui-layout-final-audit/source/components/ui/tree-view-code.tsx; ui-layout-final-audit/source/components/ui/tree.tsx; ui-layout-final-audit/source/lib/shiki-highlighter.ts; ui-layout-final-audit/source/components/website/code-components/copy-button.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/uilayout-direct-01/tree-code-viewer/ADAPTATION.md"
  },
  {
    "id": "uilayout:gallery-modal-slider",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "图片墙与展开拖选组件",
    "reason": "原布局交互保留，媒体风格变化已明确；Grok只见默认网格，不能当拖动/模态视觉验收。",
    "deliveredScope": "原3列前8张图墙、共享layout展开、纵向缩略条拖选/newItem切换；原远程照片替原创SVG，关闭/Escape及焦点回返适配。",
    "evidence": "ui-uilayout-gallery/preview/src/main.tsx; ui-uilayout-gallery/preview/src/gallery.tsx; ui-uilayout-gallery/preview/src/fixtures.ts; ui-runtime-health-integration/apps/atlas-sample/batches/uilayout-gallery-01/ADAPTATION.md"
  },
  {
    "id": "uilayout:trading-price-flow",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "价格与涨跌数字动效",
    "reason": "只数值变动展示，不是交易/行情/账户；已明确固定fixture，组件完整无需金融服务。",
    "deliveredScope": "原三组numbers=[124.23,41.75,2125.95]及diffs循环，Shuffle本地递增index；NumberFlow USD/百分比、红绿pill与箭头旋转。",
    "evidence": "ui-trading-local/main.tsx; ui-trading-local/Trading.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/trading-01/price-flow/README.md"
  },
  {
    "id": "uilayout:attachment-composer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地附件与文本输入组件",
    "reason": "本地真实文件输入而非预置假附件；页面明确nothing sent，保留附件准备组件，不叫聊天发送或上传完成流程。",
    "deliveredScope": "原FileUploader/Dropzone/缩略图/移除+文本input；JPEG/PNG最多4个各1MB，签名字节检查、原File对象Blob URL，解码错误移除。没有发送按钮或远程上传。",
    "evidence": "ui-uilayout-attachment-adapt/src/main.tsx; ui-uilayout-attachment-adapt/src/Scene.tsx; ui-uilayout-attachment-adapt/src/file-upload.tsx; ui-uilayout-attachment-adapt/src/local-files.ts; ui-runtime-health-integration/apps/atlas-sample/batches/uilayout-attachment-01/README.md"
  },
  {
    "id": "uilayout:terminal-intro-sequence",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "终端启动序列实验",
    "reason": "可见中文明确本地模拟日志，原序列与进度展示有用，不因没有终端服务降级。",
    "deliveredScope": "原SEQUENCE的divider/三组3000msbar/固定日志/typewriter，宿主停止、重启和完成回执；没有命令执行/Agent启动。",
    "evidence": "ui-uilayout-terminal-adapt/src/main.tsx; ui-uilayout-terminal-adapt/src/terminal-intro-sequence.tsx; ui-uilayout-terminal-adapt/src/shimmer-loader.tsx; ui-uilayout-terminal-adapt/src/typing-writter.tsx; ui-runtime-health-integration/apps/atlas-sample/batches/uilayout-terminal-01/README.md"
  },
  {
    "id": "motioncore:plasma-grid",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原版plasma-grid视觉场景",
    "reason": "原全屏GLSL噪声网格与时间uniform，不是数据看板；官方Demo仅默认props，无可见调参面板；宿主Pause/Restart为新增生命周期控件，unsupported显示错误不替假效果。原生shader编译/像素未验，旧GL桩只能说明状态和资源路径。",
    "deliveredScope": "原全屏GLSL噪声网格与时间uniform，不是数据看板；官方Demo仅默认props，无可见调参面板；宿主Pause/Restart为新增生命周期控件，unsupported显示错误不替假效果。原生shader编译/像素未验，旧GL桩只能说明状态和资源路径。",
    "evidence": [
      "ui-motioncore-gpu-local/src/components/plasma-grid/PlasmaGridScene.svelte",
      "ui-motioncore-gpu-local/src/components/plasma-grid/PlasmaGrid.svelte",
      "ui-motioncore-gpu-local/main.js",
      "ui-motioncore-gpu-local/manifest.json"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "motioncore:god-rays",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原版god-rays视觉场景",
    "reason": "原光束/粒噪shader时间场景，不是现实光线测量；官方Demo仅默认props，无可见调参面板；宿主Pause/Restart为新增生命周期控件，unsupported显示错误不替假效果。原生shader编译/像素未验，旧GL桩只能说明状态和资源路径。",
    "deliveredScope": "原光束/粒噪shader时间场景，不是现实光线测量；官方Demo仅默认props，无可见调参面板；宿主Pause/Restart为新增生命周期控件，unsupported显示错误不替假效果。原生shader编译/像素未验，旧GL桩只能说明状态和资源路径。",
    "evidence": [
      "ui-motioncore-gpu-local/src/components/god-rays/GodRaysScene.svelte",
      "ui-motioncore-gpu-local/src/components/god-rays/GodRays.svelte",
      "ui-motioncore-gpu-local/main.js",
      "ui-motioncore-gpu-local/manifest.json"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "motioncore:lava-lamp",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原版lava-lamp视觉场景",
    "reason": "原metaball融合与Fresnel材质的GPU视觉场景；官方Demo仅默认props，无可见调参面板；宿主Pause/Restart为新增生命周期控件，unsupported显示错误不替假效果。原生shader编译/像素未验，旧GL桩只能说明状态和资源路径。",
    "deliveredScope": "原metaball融合与Fresnel材质的GPU视觉场景；官方Demo仅默认props，无可见调参面板；宿主Pause/Restart为新增生命周期控件，unsupported显示错误不替假效果。原生shader编译/像素未验，旧GL桩只能说明状态和资源路径。",
    "evidence": [
      "ui-motioncore-gpu-local/src/components/lava-lamp/LavaLampScene.svelte",
      "ui-motioncore-gpu-local/src/components/lava-lamp/LavaLamp.svelte",
      "ui-motioncore-gpu-local/main.js",
      "ui-motioncore-gpu-local/manifest.json"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "motioncore:liquid-metal",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原版liquid-metal视觉场景",
    "reason": "原液态金属波动shader与颜色/速度uniform；官方Demo仅默认props，无可见调参面板；宿主Pause/Restart为新增生命周期控件，unsupported显示错误不替假效果。原生shader编译/像素未验，旧GL桩只能说明状态和资源路径。",
    "deliveredScope": "原液态金属波动shader与颜色/速度uniform；官方Demo仅默认props，无可见调参面板；宿主Pause/Restart为新增生命周期控件，unsupported显示错误不替假效果。原生shader编译/像素未验，旧GL桩只能说明状态和资源路径。",
    "evidence": [
      "ui-motioncore-gpu-local/src/components/liquid-metal/LiquidMetalScene.svelte",
      "ui-motioncore-gpu-local/src/components/liquid-metal/LiquidMetal.svelte",
      "ui-motioncore-gpu-local/main.js",
      "ui-motioncore-gpu-local/manifest.json"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "motioncore:fluid-simulation",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原版fluid-simulation视觉场景",
    "reason": "原指针splat、双缓冲RenderTarget速度/压力迭代流体，真实依赖GPU及浮点纹理能力；官方Demo仅默认props，无可见调参面板；宿主Pause/Restart为新增生命周期控件，unsupported显示错误不替假效果。原生shader编译/像素未验，旧GL桩只能说明状态和资源路径。",
    "deliveredScope": "原指针splat、双缓冲RenderTarget速度/压力迭代流体，真实依赖GPU及浮点纹理能力；官方Demo仅默认props，无可见调参面板；宿主Pause/Restart为新增生命周期控件，unsupported显示错误不替假效果。原生shader编译/像素未验，旧GL桩只能说明状态和资源路径。",
    "evidence": [
      "ui-motioncore-gpu-local/src/components/fluid-simulation/FluidSimulationScene.svelte",
      "ui-motioncore-gpu-local/src/components/fluid-simulation/FluidSimulation.svelte",
      "ui-motioncore-gpu-local/main.js",
      "ui-motioncore-gpu-local/manifest.json"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "motioncore:glitter-cloth",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "闪光粒子布料实验",
    "reason": "原GlitterCloth粒子/形变shader，默认参数与宿主Pause/Restart；不是实际布料求解产品，GL不可用有失败说明，未把mockGL当真实渲染。",
    "deliveredScope": "原GlitterCloth粒子/形变shader，默认参数与宿主Pause/Restart；不是实际布料求解产品，GL不可用有失败说明，未把mockGL当真实渲染。",
    "evidence": [
      "ui-motioncore-glitter-local/src/components/glitter-cloth/GlitterClothScene.svelte",
      "ui-motioncore-glitter-local/main.js"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "motioncore:rubiks-cube",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "三维层旋转魔方实验",
    "reason": "原27块OGL几何、9块层转动commit与Orbit；本地数学/状态逻辑，不是CSS代绘。上下文失败明确停止，真实GPU/指针像素仍未验。",
    "deliveredScope": "原27块OGL几何、9块层转动commit与Orbit；本地数学/状态逻辑，不是CSS代绘。上下文失败明确停止，真实GPU/指针像素仍未验。",
    "evidence": [
      "ui-motion-cube-local/src/Scene.svelte",
      "ui-motion-cube-local/build.mjs"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "motioncore:underlay-navigation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "底层展开导航组件",
    "reason": "原UnderlayNavigation布局与GSAP动画，children为明确原创文字Field Notes；href均本地#示意，不称原照片Demo或可用多路由网站。",
    "deliveredScope": "原UnderlayNavigation布局与GSAP动画，children为明确原创文字Field Notes；href均本地#示意，不称原照片Demo或可用多路由网站。",
    "evidence": [
      "ui-underlay-navigation-local/src/App.svelte",
      "ui-underlay-navigation-local/src/components/underlay-navigation/UnderlayNavigation.svelte"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "aicanvas:radial-toolbar",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "径向工具选择",
    "reason": "原开合/hover/active工具状态；选中只改变原工具标记，不操作实际编辑画布，保留本地组件展示。",
    "deliveredScope": "原开合/hover/active工具状态；选中只改变原工具标记，不操作实际编辑画布，保留本地组件展示。",
    "evidence": [
      "ui-aicanvas-adapt/build/radial-toolbar.tsx",
      "ui-aicanvas-adapt/upstream/components-workspace/radial-toolbar/index.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "aicanvas:task-cards",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可拨动任务卡堆",
    "reason": "原四任务order轮换/拖拽离场与预置进度计数；不标记真实任务完成，保留本地组件展示。",
    "deliveredScope": "原四任务order轮换/拖拽离场与预置进度计数；不标记真实任务完成，保留本地组件展示。",
    "evidence": [
      "ui-aicanvas-adapt/build/task-cards.tsx",
      "ui-aicanvas-adapt/upstream/components-workspace/task-cards/index.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "aicanvas:slide-deck",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "层叠幻灯卡片",
    "reason": "原固定SLIDES、左右拖动/页点切换与过渡；不是幻灯编辑或发布工具，保留本地组件展示。",
    "deliveredScope": "原固定SLIDES、左右拖动/页点切换与过渡；不是幻灯编辑或发布工具，保留本地组件展示。",
    "evidence": [
      "ui-aicanvas-adapt/build/slide-deck.tsx",
      "ui-aicanvas-adapt/upstream/components-workspace/slide-deck/index.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "aicanvas:flip-calendar",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "数字翻页日历材质",
    "reason": "原1到31循环与上下拖动翻片；不代表真实年月日/排程，也不连日历服务，保留本地组件展示。",
    "deliveredScope": "原1到31循环与上下拖动翻片；不代表真实年月日/排程，也不连日历服务，保留本地组件展示。",
    "evidence": [
      "ui-aicanvas-adapt/build/flip-calendar.tsx",
      "ui-aicanvas-adapt/upstream/components-workspace/flip-calendar/index.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "aicanvas:new-project-modal",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地新建项目表单",
    "reason": "原弹层/名称描述/颜色/私密状态，适配onCreated把真实本地输入JSON回显并关闭；无项目保存服务，宿主明确no project is saved。",
    "deliveredScope": "原弹层/名称描述/颜色/私密状态，适配onCreated把真实本地输入JSON回显并关闭；无项目保存服务，宿主明确no project is saved。",
    "evidence": [
      "ui-aicanvas-adapt/build/new-project-modal.tsx",
      "ui-aicanvas-adapt/build/new-project-component.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "aicanvas:paper-wall",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "纸张渐变卡片展开",
    "reason": "原五张Sunset/Ocean等渐变色卡的堆叠/扇展、hover抬升/点击选择放大；原件本就非摄影，不虚构照片缺失。不是实际媒体管理或笔记持久化。",
    "deliveredScope": "原五张Sunset/Ocean等渐变色卡的堆叠/扇展、hover抬升/点击选择放大；原件本就非摄影，不虚构照片缺失。不是实际媒体管理或笔记持久化。",
    "evidence": [
      "ui-aicanvas-next/build/polaroid-stack.tsx",
      "ui-aicanvas-next/build/polaroid-stack-component.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "aicanvas:emotion-visualization",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "情绪球罐物理示意",
    "reason": "原Matter圆形emoji/罐壁及按钮交互，宿主Stop/Restart；只是视觉状态隐喻，不采集/分析用户心理或情绪。",
    "deliveredScope": "原Matter圆形emoji/罐壁及按钮交互，宿主Stop/Restart；只是视觉状态隐喻，不采集/分析用户心理或情绪。",
    "evidence": [
      "ui-aicanvas-next/build/jar-of-emotions.tsx",
      "ui-aicanvas-next/build/jar-of-emotions-component.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "aicanvas:charging-widget",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "双波充电状态演示",
    "reason": "原双SVG波与0→78动画/暂停循环，非真实电池API；reduced静态与宿主重播，完成百分比只预置示例。",
    "deliveredScope": "原双SVG波与0→78动画/暂停循环，非真实电池API；reduced静态与宿主重播，完成百分比只预置示例。",
    "evidence": [
      "ui-charging-widget-local/main.tsx",
      "ui-charging-widget-local/src/ChargingWidget.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "aicanvas:crypto-swap",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地兑换流程状态组件",
    "reason": "原输入/币种互换/滑点和计时success动画，随机演示行情/固定余额；宿主明显标模拟且不连钱包，不把success当交易成功。",
    "deliveredScope": "原输入/币种互换/滑点和计时success动画，随机演示行情/固定余额；宿主明显标模拟且不连钱包，不把success当交易成功。",
    "evidence": [
      "ui-crypto-swap-local/src/main.tsx",
      "ui-crypto-swap-local/src/Component.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "aicanvas:curious-ai",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "有机角色指针反馈",
    "reason": "原Three Icosahedron+GLSL与眼睛/指针感应；不是有真实智能的Agent。unsupported隐藏角色眼睛并明确无WebGL，非GPU替身画面。",
    "deliveredScope": "原Three Icosahedron+GLSL与眼睛/指针感应；不是有真实智能的Agent。unsupported隐藏角色眼睛并明确无WebGL，非GPU替身画面。",
    "evidence": [
      "ui-curious-adapt/main.tsx",
      "ui-curious-adapt/src/Curious.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "aicanvas:runway-loader",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "跑道起飞等待动画",
    "reason": "原飞机滑行/起飞/重置时序与主动播放停止；初始暂停有说明。纯计时状态演示，不代表实际任务进度。",
    "deliveredScope": "原飞机滑行/起飞/重置时序与主动播放停止；初始暂停有说明。纯计时状态演示，不代表实际任务进度。",
    "evidence": [
      "ui-runway-next/build/main.tsx",
      "ui-runway-next/build/component.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "reactflow:auto-layout",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "自动关系图布局",
    "reason": "原Dagre TB/LR位置更新、连线/marker与fitView；原React Flow示例组件，保留本地交互，不称完整后台应用。",
    "deliveredScope": "原Dagre TB/LR位置更新、连线/marker与fitView；原React Flow示例组件，保留本地交互，不称完整后台应用。",
    "evidence": [
      "ui-xyflow-adapt/build/auto-layout.tsx",
      "ui-xyflow-adapt/build/Layouting/index.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "reactflow:grow-nodes",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "拖线生长节点",
    "reason": "原onConnectEnd检查空白pane，screenToFlowPosition后添加节点与边；当前实现仅clientX/Y分支，不承诺移动端触摸全覆盖；原React Flow示例组件，保留本地交互，不称完整后台应用。",
    "deliveredScope": "原onConnectEnd检查空白pane，screenToFlowPosition后添加节点与边；当前实现仅clientX/Y分支，不承诺移动端触摸全覆盖；原React Flow示例组件，保留本地交互，不称完整后台应用。",
    "evidence": [
      "ui-xyflow-adapt/build/grow-nodes.tsx",
      "ui-xyflow-adapt/build/AddNodeOnEdgeDrop/index.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "reactflow:nested-groups",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "嵌套图节点分组",
    "reason": "原父节点移动、隐藏/恢复子节点、重置/换色；toObject只console日志不是导出；原React Flow示例组件，保留本地交互，不称完整后台应用。",
    "deliveredScope": "原父节点移动、隐藏/恢复子节点、重置/换色；toObject只console日志不是导出；原React Flow示例组件，保留本地交互，不称完整后台应用。",
    "evidence": [
      "ui-xyflow-adapt/build/nested-groups.tsx",
      "ui-xyflow-adapt/build/Subflow/index.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "reactflow:floating-network",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "边界浮动连线",
    "reason": "原节点位置与边界交点计算/拖动关系图，不是远程网络监控；原React Flow示例组件，保留本地交互，不称完整后台应用。",
    "deliveredScope": "原节点位置与边界交点计算/拖动关系图，不是远程网络监控；原React Flow示例组件，保留本地交互，不称完整后台应用。",
    "evidence": [
      "ui-xyflow-adapt/build/floating-network.tsx",
      "ui-xyflow-adapt/build/FloatingEdges/index.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "reactflow:text-pipeline",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地文本变换图",
    "reason": "原updateNodeData/useNodesData依赖传递，输入接uppercase和结果；真实本地字符串变换，不执行任意工作流或Agent；原React Flow示例组件，保留本地交互，不称完整后台应用。",
    "deliveredScope": "原updateNodeData/useNodesData依赖传递，输入接uppercase和结果；真实本地字符串变换，不执行任意工作流或Agent；原React Flow示例组件，保留本地交互，不称完整后台应用。",
    "evidence": [
      "ui-xyflow-adapt/build/text-pipeline.tsx",
      "ui-xyflow-adapt/build/UseNodesData/index.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "spatialboard:custom-nodes",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "数字乘法数据流画布",
    "reason": "原6×4 Number→Multiply→Gauge传递与按钮；usePersistentBoard适配为内存，BoardShell明确Local session only，不暗示已保存。",
    "deliveredScope": "原6×4 Number→Multiply→Gauge传递与按钮；usePersistentBoard适配为内存，BoardShell明确Local session only，不暗示已保存。",
    "evidence": [
      "ui-spatial-adapt/build/custom/App.tsx",
      "ui-spatial-adapt/build/custom/usePersistentBoard.ts",
      "ui-spatial-adapt/build/custom/BoardShell.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "spatialboard:whiteboard",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "手绘白板工具场景",
    "reason": "原whiteboard exemplar图形/便签/连线与原SpatialBoard工具栏；本地重置和编辑，不是协作服务或真实持久白板。",
    "deliveredScope": "原whiteboard exemplar图形/便签/连线与原SpatialBoard工具栏；本地重置和编辑，不是协作服务或真实持久白板。",
    "evidence": [
      "ui-spatial-adapt/build/WhiteboardApp.tsx",
      "ui-spatial-adapt/build/whiteboard-exemplar.ts"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "spatialboard:collab",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "同页双端协作示例",
    "reason": "原两个Y.Doc/awareness及模拟延迟/离线重连；TabBridge.enable已禁用且UI说Same-page sync only，不伪称真实跨用户网络协作。",
    "deliveredScope": "原两个Y.Doc/awareness及模拟延迟/离线重连；TabBridge.enable已禁用且UI说Same-page sync only，不伪称真实跨用户网络协作。",
    "evidence": [
      "ui-spatial-adapt/build/collab/App.tsx",
      "ui-spatial-adapt/build/collab/net/tabBridge.ts",
      "ui-spatial-adapt/build/collab/ui/NetworkBar.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "leko:cara-complete-site",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "五屏视差作品集页面",
    "reason": "原Hero/Projects/About/Contact及五屏Parallax；宿主章节导航，本地项目文字与原SVG装饰，非真实作者在线业务站。",
    "deliveredScope": "原Hero/Projects/About/Contact及五屏Parallax；宿主章节导航，本地项目文字与原SVG装饰，非真实作者在线业务站。",
    "evidence": [
      "ui-cara-local/main.tsx",
      "ui-cara-local/src/components/hero.tsx",
      "ui-cara-local/src/components/projects.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "leko:jodie-complete-site",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "非对称作品集与项目阅读",
    "reason": "原首页网格/侧栏/项目详情与本地路由/返回焦点，原创6组SVG替摄影已可见披露；保页面模板，不称原作者摄影或可联系生产站。",
    "deliveredScope": "原首页网格/侧栏/项目详情与本地路由/返回焦点，原创6组SVG替摄影已可见披露；保页面模板，不称原作者摄影或可联系生产站。",
    "evidence": [
      "ui-jodie-local/main.tsx",
      "ui-jodie-local/src/components/homepage.tsx",
      "ui-jodie-local/src/components/project.tsx"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "smoothui:book",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "3D书封造型",
    "reason": "保留书封材质与造型，不把封面当完整电子书。",
    "deliveredScope": "原Book条纹/简版/颜色场景，宿主切换示例；没有翻页阅读器。",
    "evidence": [
      "ui-smooth-pair-local/book/src/main.tsx",
      "ui-smooth-pair-local/book/src/Scene.tsx",
      "ui-smooth-pair-local/book/src/Book.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-book-01/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "smoothui:dither-chart",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "抖动纹理Canvas图表",
    "reason": "真实图表算法有用；历史Canvas命令/合成RGBA验证不是实际像素验收。",
    "deliveredScope": "原TRAFFIC/Visitors/Signups固定数据、原Bayeralpha与900ms绘图；宿主仅默认line示例。",
    "evidence": [
      "ui-smooth-canvas-local/main-dither-chart.tsx",
      "ui-smooth-canvas-local/src/dither-chart-demo.tsx",
      "ui-smooth-canvas-local/src/dither-chart.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-canvas-01/dither-chart/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "smoothui:drawing-cursor",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "衰减绘画光标",
    "reason": "保原动效实验，不将旧命令桩说成原生指针光栅成功。",
    "deliveredScope": "原指针轨迹、随时间衰减笔迹与Clear；不是持久画布或文档编辑器。",
    "evidence": [
      "ui-smooth-canvas-local/main-drawing-cursor.tsx",
      "ui-smooth-canvas-local/src/drawing-cursor-demo.tsx",
      "ui-smooth-canvas-local/src/drawing-cursor.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-canvas-01/drawing-cursor/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "smoothui:interactive-image-selector",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "图片选择与本地移除",
    "reason": "素材替代明确，保选择组件而非真实分享服务；Share通知可进一步写明未发送。",
    "deliveredScope": "5本地原创几何SVG，原多选/移除/重置；Share仅展示所选ID通知。",
    "evidence": [
      "ui-smooth-adapt/src/main.tsx",
      "ui-smooth-adapt/src/demos/interactive-image-selector.tsx",
      "ui-smooth-adapt/src/components/interactive-image-selector/index.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-direct-01/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "smoothui:job-listing-component",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "职位列表到详情转场",
    "reason": "真实列表详情组件保留，绝非真实招聘。",
    "deliveredScope": "原Jobs共享布局详情/关闭，3虚构雇主薪资与原创字形替品牌标识，无投递。",
    "evidence": [
      "ui-smooth-jobs-local/src/main.tsx",
      "ui-smooth-jobs-local/src/components/job-listing-component/index.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-jobs-01/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "smoothui:orbital-image-wheel",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "轨道图片选择轮",
    "reason": "保空间选择组件，真实触控与像素未验不单独降级。",
    "deliveredScope": "8原创几何SVG替图片，原rotation/惯性/指针键盘/activate；宿主启停。",
    "evidence": [
      "ui-smooth-atmosphere-adapt/src/main.tsx",
      "ui-smooth-atmosphere-adapt/src/demos/orbital-image-wheel.tsx",
      "ui-smooth-atmosphere-adapt/src/components/orbital-image-wheel/index.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-atmosphere-01/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "smoothui:pinned-list",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "置顶列表",
    "reason": "本地状态和列表组织完整，不需要真实账户后台。",
    "deliveredScope": "原固定成员、controlled pinned数组、pin/unpin/max限制与全部取消/重置。",
    "evidence": [
      "ui-smooth-adapt/src/main.tsx",
      "ui-smooth-adapt/src/demos/pinned-list.tsx",
      "ui-smooth-adapt/src/components/pinned-list/index.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-direct-01/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "smoothui:rich-popover",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "文章富链接弹层",
    "reason": "已声明上游文章不代表当前发布消息，保阅读组件非视频播放器。",
    "deliveredScope": "原hover/click富链接标题简介/时段，原GPT5文章fixture；host不打开外站/播放视频。",
    "evidence": [
      "ui-smooth-pair-local/rich-popover/src/main.tsx",
      "ui-smooth-pair-local/rich-popover/src/demo.tsx",
      "ui-smooth-pair-local/rich-popover/src/rich-popover.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-rich-popover-01/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "smoothui:scrubber",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "拖动数值调节器",
    "reason": "保交互输入组件，不承诺外部设计软件控制。",
    "deliveredScope": "原Opacity/Scale/Rotation受控状态与pointer/keyboard调值；演示三个数值。",
    "evidence": [
      "ui-smooth-adapt/src/main.tsx",
      "ui-smooth-adapt/src/demos/scrubber.tsx",
      "ui-smooth-adapt/src/components/scrubber/index.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-direct-01/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "smoothui:switchboard-card",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "灯阵卡片",
    "reason": "有效环境视觉实验，不是实体设备开关。",
    "deliveredScope": "原随机18×5灯阵和NEXT固定pattern，定时状态变化，未绑定设备按钮；host整体启停。",
    "evidence": [
      "ui-smooth-atmosphere-adapt/src/main.tsx",
      "ui-smooth-atmosphere-adapt/src/demos/switchboard-card.tsx",
      "ui-smooth-atmosphere-adapt/src/components/switchboard-card/index.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-atmosphere-01/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "smoothui:vector-editor-toolbar",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "向量工具栏与小画布",
    "reason": "保真实本地编辑示例，原生笔/命中几何待验，不称完整矢量软件。",
    "deliveredScope": "原SVG seed shapes、工具flyout、选中/形状绘制/笔点/样式/Clear；非仅工具按钮图片。",
    "evidence": [
      "ui-smooth-adapt/src/main.tsx",
      "ui-smooth-adapt/src/demos/vector-editor-toolbar.tsx",
      "ui-smooth-adapt/src/components/vector-editor-toolbar/index.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-direct-01/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "smoothui:wallet-card",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "钱包卡片材质与隐私",
    "reason": "不是金融账户或付款；此scope已可见明确，保原材质交互。",
    "deliveredScope": "原账户选择/余额逐字遮罩/光泽/成员展开，3虚构账户generic网络和空账户边界。",
    "evidence": [
      "ui-smooth-wallet-local/src/main.tsx",
      "ui-smooth-wallet-local/src/components/wallet-card/index.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-wallet-01/wallet-card/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "cuicui:advanced-bottom-action-menu",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "底部双入口导航",
    "reason": "不是账号密码修改，宿主显式说明，可保动效导航。",
    "deliveredScope": "原Account/Password入口展开、RadixTabs内容/Close，只有本地说明切换。",
    "evidence": [
      "ui-cuicui-pair-local/advanced/src/main.tsx",
      "ui-cuicui-pair-local/advanced/src/Scene.tsx",
      "ui-cuicui-pair-local/advanced/src/Original.tsx",
      "ui-cuicui-pair-local/advanced/src/custom-tabs-content.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/cuicui-advanced-01/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "cuicui:arc-color-picker",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "弧形色彩调节器",
    "reason": "本地颜色组件完整，不要求设置外部主题。",
    "deliveredScope": "原selectedColor和grainIntensity受控状态，弧形选色与颗粒度调节。",
    "evidence": [
      "ui-cuicui-adapt/src/main.tsx",
      "ui-cuicui-adapt/src/cuicui/application-ui/color-picker/arc-color-picker/arc-color-picker.variant.tsx",
      "ui-cuicui-adapt/src/cuicui/application-ui/color-picker/arc-color-picker/arc-color-picker.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/cuicui-direct-01/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "cuicui:dynamic-settings",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "动态设置菜单",
    "reason": "可保菜单形变与输入设计，不称设置已生效；Dimensions未实现应继续可见披露。",
    "deliveredScope": "原Dimensions/AspectRatio/Prompt三栏；Dimensions源TODO，比例/文本仅UI状态；Apply固定演示toast。",
    "evidence": [
      "ui-cuicui-pair-local/settings/src/main.tsx",
      "ui-cuicui-pair-local/settings/src/settings.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/cuicui-settings-01/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "cuicui:react-signature",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地手写轨迹",
    "reason": "不是法律签署，不保存/下载；页面明确手写demo，保轨迹组件。",
    "deliveredScope": "原uiw Signature路径、Validate切只读/Reset及Clear；导出/复制按钮未挂载。",
    "evidence": [
      "ui-cuicui-adapt/src/main.tsx",
      "ui-cuicui-adapt/src/cuicui/application-ui/signature/react-signature/react-signature.variant.tsx",
      "ui-cuicui-adapt/src/cuicui/application-ui/signature/react-signature/react-signature.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/cuicui-direct-01/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "cuicui:messaging-like-qna",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "消息气泡FAQ",
    "reason": "不是即时聊天或模型回复；完整本地问答展示可保。",
    "deliveredScope": "原Radix单开Accordion controlled openItem，固定问答气泡与动效。",
    "evidence": [
      "ui-cuicui-adapt/src/main.tsx",
      "ui-cuicui-adapt/src/cuicui/marketing-ui/questions-and-answers/messaging-like-qna/messaging-like-qna.variant.tsx",
      "ui-cuicui-adapt/src/cuicui/marketing-ui/questions-and-answers/messaging-like-qna/messaging-like-qna.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/cuicui-direct-01/README.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "smoothui:chat-template",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "本地脚本聊天模板",
    "reason": "原完整聊天页面范围保留，明确不是模型调用；任意输入固定回复不能当智能服务。",
    "deliveredScope": "原sidebar/thread/composer、切换会话/新会话，固定chat-data回复经tool与streaming阶段。",
    "evidence": [
      "ui-smooth-chat-adapt/src/main.tsx",
      "ui-smooth-chat-adapt/src/templates/chat-template/index.tsx",
      "ui-smooth-chat-adapt/src/templates/chat-template/chat-thread.tsx",
      "ui-smooth-chat-adapt/src/templates/chat-template/chat-data.ts",
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-chat-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/smooth-chat-01/runtime.js（直接读生产聊天与移动drawer分支）"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "astryx:ai-chat",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "聊天与产物阅读页面模板",
    "reason": "原页面有用，但发送未接模型/本地回复；应显著标发送仅展示，不冒可对话应用。",
    "deliveredScope": "原消息/工具卡/composer模式、可调整artifact侧栏与窄屏dialog；onSubmit原no-op。",
    "evidence": [
      "ui-astryx-recovery/preview/src/entry-ai-chat.tsx",
      "ui-astryx-recovery/preview/src/ai-chat.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-01/ADAPTATION.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "astryx:ai-chat-landing",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "AI输入首页模板",
    "reason": "保原完整landing设计，发送无结果需明显示例标记；非真实AI首页服务。",
    "deliveredScope": "原类别建议/模式/mention/附件名称，Writing等选择与文本插入；onSubmit no-op。",
    "evidence": [
      "ui-astryx-recovery/preview/src/entry-ai-chat-landing.tsx",
      "ui-astryx-recovery/preview/src/ai-chat-landing.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-01/ADAPTATION.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "astryx:canvas-editor",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "本地画布编辑模板",
    "reason": "原编辑面板逻辑丰富可保；不能称上传/导出/真实文档保存，核心素材替代需常驻说明。",
    "deliveredScope": "原layers/selectedID、属性/颜色/文字/缩放/chrome/doc tabs；原照片替原创SVG。文件选择只更新imageName不换图。",
    "evidence": [
      "ui-astryx-recovery/preview/src/entry-canvas-editor.tsx",
      "ui-astryx-recovery/preview/src/canvas-editor.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-01/ADAPTATION.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "astryx:ide",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "代码与终端布局模板",
    "reason": "保IDE页面设计而非可运行开发环境；没有真实文件系统或执行器。",
    "deliveredScope": "原文件选择/代码展示/terminal及history/properties切换；源码样例中的Increment是代码文本。",
    "evidence": [
      "ui-astryx-recovery/preview/src/entry-ide.tsx",
      "ui-astryx-recovery/preview/src/ide.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-01/ADAPTATION.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "astryx:kanban-board",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "本地任务看板模板",
    "reason": "保主要看板移动流程，未完成工具按钮应标示，不因无项目后台整页降级。",
    "deliveredScope": "原items状态、pointer拖动与move-to-column菜单；Addtask/部分filter/search等为placeholder。",
    "evidence": [
      "ui-astryx-recovery/preview/src/entry-kanban-board.tsx",
      "ui-astryx-recovery/preview/src/kanban-board.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-01/ADAPTATION.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "astryx:file-explorer",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "多列文件浏览模板",
    "reason": "保留本地文件信息架构与原模板设计，不是设备文件浏览器；未接线的视图切换与搜索操作需明确范围，不假称已经搜索。",
    "deliveredScope": "原 selectedPath 多列导航与选文件预览；视图切换控件回调未接线，搜索是没有动作处理的图标按钮，不是已实现的搜索输入。",
    "evidence": [
      "ui-astryx-recovery/preview/src/entry-file-explorer.tsx",
      "ui-astryx-recovery/preview/src/file-explorer.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-next-01/file-explorer/ADAPTATION.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "astryx:messaging-shell",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "团队消息页面框架",
    "reason": "原多栏页面可参考，非可用消息系统；channel/DM选择不等于真实会话发送。",
    "deliveredScope": "原频道/DM选中、线程开关、输入；主与线程onSubmit都no-op，多工具onClick空。",
    "evidence": [
      "ui-astryx-recovery/preview/src/entry-messaging-shell.tsx",
      "ui-astryx-recovery/preview/src/messaging-shell.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-next-01/messaging-shell/ADAPTATION.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "astryx:settings-dialog",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "多分类设置页面模板",
    "reason": "可保完整设置表面，2FA/API开关仅样例状态，不给真实权限或保存承诺。",
    "deliveredScope": "原activePanel/settings状态与搜索导航、快捷键覆盖、外观/通知/隐私字段；无账号/持久化。",
    "evidence": [
      "ui-astryx-recovery/preview/src/entry-settings-dialog.tsx",
      "ui-astryx-recovery/preview/src/settings-dialog.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-next-01/settings-dialog/ADAPTATION.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "astryx:table-filter",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "本地过滤表格工作台",
    "reason": "过滤/列配置真实有用，沙箱modal不支持alert导致操作无反馈属明确待改善，不冒真实派单。",
    "deliveredScope": "原PowerSearch/query/filter/sort/group/选择/保存视图本地状态；Newjob及批量assign等仍alert占位。",
    "evidence": [
      "ui-astryx-recovery/preview/src/entry-table-filter.tsx",
      "ui-astryx-recovery/preview/src/table-filter.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-next-01/table-filter/ADAPTATION.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "astryx:table-tree",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "树表与仓库信息模板",
    "reason": "保本地树表页面，不读取仓库或clone；无动作按钮建议禁用说明。",
    "deliveredScope": "原query/展开/选择/列宽/文件详情readme tabs；若干topic/action按钮no-op。",
    "evidence": [
      "ui-astryx-recovery/preview/src/entry-table-tree.tsx",
      "ui-astryx-recovery/preview/src/table-tree.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-next-01/table-tree/ADAPTATION.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "astryx:work-item-detail",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "任务详情页面模板",
    "reason": "本地详情字段可保，不称已更新项目或已发评论。",
    "deliveredScope": "原status/priority/assignee/labels、subtask checkbox、评论文本和侧栏/dialog；没有真实提交服务。",
    "evidence": [
      "ui-astryx-recovery/preview/src/entry-work-item-detail.tsx",
      "ui-astryx-recovery/preview/src/work-item-detail.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-next-01/work-item-detail/ADAPTATION.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "astryx:editor",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "本地页面区块编辑模板",
    "reason": "原完整编辑页面可保，保存字样不代表持久化/发布。",
    "deliveredScope": "原blocks新增/移动/删除/选择与heading等字段、viewport切换、pageTitle；不部署网站。",
    "evidence": [
      "ui-astryx-recovery/preview/src/entry-editor.tsx",
      "ui-astryx-recovery/preview/src/editor.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-next-01/editor/ADAPTATION.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "astryx:incident-console",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "本地事件过滤与检查台",
    "reason": "实际本地筛选成立，非实时监控或事件处理后台。",
    "deliveredScope": "原INCIDENTS、状态filter与PowerSearch applyFilters、选中详情/可调侧栏。",
    "evidence": [
      "ui-astryx-recovery/preview/src/entry-incident-console.tsx",
      "ui-astryx-recovery/preview/src/incident-console.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-next-01/incident-console/ADAPTATION.md"
    ],
    "reviewBasis": "实际源与宿主范围核查；本轮未DOM/native复验"
  },
  {
    "id": "looseleaf:kanban",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "纸张便笺看板（本地页面场景）",
    "reason": "原三列看板，新增/前后移卡/拖放/清空Done均写本地notes，头像为原文字fallback；可参考完整任务面板，不是协作服务。",
    "deliveredScope": "本地便笺新增、跨列移动与清空已完成项。",
    "evidence": [
      "featured/kanban.tsx",
      "featured/featured-source.zip!/build/src/vault/main.tsx",
      "featured/featured-source.zip!/build/src/blocks/kanban-board/page.tsx"
    ]
  },
  {
    "id": "looseleaf:vocabulary",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "手绘翻面词卡（组件参考）",
    "reason": "原四张法英词卡，前后循环时先恢复正面，翻面看答案；是学习组件不是课程应用。",
    "deliveredScope": "四张词卡前后切换和翻面。",
    "evidence": [
      "featured/vocabulary.tsx",
      "featured/featured-source.zip!/build/src/vault/main.tsx",
      "featured/featured-source.zip!/build/src/docs/examples/flip-card/03-vocabulary-deck.tsx"
    ]
  },
  {
    "id": "looseleaf:notebook",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "旅行装订清单（组件参考）",
    "reason": "原五项Packing list，前两项defaultChecked；有真实checkbox而非整本笔记编辑器。",
    "deliveredScope": "纸张清单勾选。",
    "evidence": [
      "batches/looseleaf-01/notebook.tsx",
      "batches/looseleaf-01/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-01/source.zip!/build/src/docs/examples/notebook/04-trip-planner.tsx"
    ]
  },
  {
    "id": "looseleaf:corkboard",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可移动软木板（组件参考）",
    "reason": "原四便笺受控位置+JSON读出+Reset，布局仅内存，不保存/分享至服务器。",
    "deliveredScope": "移动四张便笺、查看布局数值并重置。",
    "evidence": [
      "batches/looseleaf-01/corkboard.tsx",
      "batches/looseleaf-01/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-01/source.zip!/build/src/docs/examples/corkboard/03-saved-layout.tsx"
    ]
  },
  {
    "id": "looseleaf:desk",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "晨间书桌场景（本地页面场景）",
    "reason": "原完整晨间桌面构图，纸页/便笺/咖啡与铅笔；Reminder的Done无handler。保留静态场景，不称任务应用。",
    "deliveredScope": "完整静态纸张桌面场景；Done按钮是原外观样例。",
    "evidence": [
      "batches/looseleaf-01/desk.tsx",
      "batches/looseleaf-01/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-01/source.zip!/build/src/docs/examples/desk/04-morning-desk.tsx"
    ]
  },
  {
    "id": "looseleaf:envelope",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "交互信封收件箱（组件参考）",
    "reason": "原两封本地信件，打开更新read且同时仅一封展开；Close them all有状态处理，不收发邮件。",
    "deliveredScope": "信封展开、已读状态和关闭。",
    "evidence": [
      "batches/looseleaf-01/envelope.tsx",
      "batches/looseleaf-01/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-01/source.zip!/build/src/docs/examples/envelope/04-inbox.tsx"
    ]
  },
  {
    "id": "looseleaf:folder",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "展开文件夹（组件参考）",
    "reason": "原Tasks/Notes/Files三页签与checkbox；Add a task无handler，Files仅三个文件名文本，不是文件浏览器。",
    "deliveredScope": "文件夹页签与任务勾选；新增按钮和文件名仅作展示。",
    "evidence": [
      "batches/looseleaf-01/folder.tsx",
      "batches/looseleaf-01/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-01/source.zip!/build/src/docs/examples/folder/04-project-files.tsx"
    ]
  },
  {
    "id": "looseleaf:polaroid",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "拍立得照片墙（组件参考）",
    "reason": "原三个PolaroidImage场景house/sea/night就是绘制图形，非缺失照片占位；可保留照片墙组合参考。",
    "deliveredScope": "三张原绘制场景的拍立得纸张构图。",
    "evidence": [
      "batches/looseleaf-01/polaroid.tsx",
      "batches/looseleaf-01/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-01/source.zip!/build/src/docs/examples/polaroid/04-photo-wall.tsx"
    ]
  },
  {
    "id": "looseleaf:sketchpad",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可绘画明信片（组件参考）",
    "reason": "保留原组件参考，本轮透明修正本地动作反馈，不冒称外部操作成功。",
    "deliveredScope": "本地笔迹绘制与 JSON 复制；只有剪贴板成功才提示 Copied，缺失/拒绝明确失败。SVG 下载在隔离预览禁用，未扩权限。",
    "evidence": [
      "batches/looseleaf-02/sketchpad.tsx",
      "batches/looseleaf-02/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-02/source.zip!/build/src/docs/examples/sketchpad/05-postcard.tsx"
    ],
    "requiresPatch": "ui-local-action-third-fix/FILES.json"
  },
  {
    "id": "looseleaf:signature-pad",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "手绘签名板（组件参考）",
    "reason": "原SignaturePad默认组合支持绘制、输入姓名模式、Clear；没有法律文书提交，不应称签署服务。已查内部mode/value/Clear路径，未做原生笔迹复验。",
    "deliveredScope": "本地笔迹/文字签名外观与清空，不签署文件。",
    "evidence": [
      "batches/looseleaf-02/signature-pad.tsx",
      "batches/looseleaf-02/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-02/source.zip!/build/src/docs/examples/signature-pad/01-default.tsx",
      "batches/looseleaf-02/source.zip!/build/src/components/ui/signature-pad.tsx"
    ]
  },
  {
    "id": "looseleaf:sticker-board",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "贴纸奖励板（组件参考）",
    "reason": "实际demo为五贴纸readOnly奖励展示，不是可拖动编辑板；原无handles/toolbar可保静态参考。",
    "deliveredScope": "五张奖励贴纸的只读纸张布局。",
    "evidence": [
      "batches/looseleaf-02/sticker-board.tsx",
      "batches/looseleaf-02/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-02/source.zip!/build/src/docs/examples/sticker-board/03-reward-chart.tsx"
    ]
  },
  {
    "id": "looseleaf:tear-off",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "可撕优惠券册（本地交互实验）",
    "reason": "原撕票受控torn+计数+New coupon重置；Coupon redeemed只是本地动画状态，不核销真实优惠券。",
    "deliveredScope": "模拟撕券、计数和彩纸效果，可重置。",
    "evidence": [
      "batches/looseleaf-02/tear-off.tsx",
      "batches/looseleaf-02/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-02/source.zip!/build/src/docs/examples/tear-off/03-coupon-book.tsx"
    ]
  },
  {
    "id": "looseleaf:ticket",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "活动票券（组件参考）",
    "reason": "原三门票卡，Scan at the door只将used设true并显示打孔，未接摄像头/二维码/票务系统。",
    "deliveredScope": "本地门票已使用状态和打孔样式切换。",
    "evidence": [
      "batches/looseleaf-02/ticket.tsx",
      "batches/looseleaf-02/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-02/source.zip!/build/src/docs/examples/ticket/04-event-tickets.tsx"
    ]
  },
  {
    "id": "looseleaf:chat-app",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "手绘聊天工作台（本地页面场景）",
    "reason": "原会话列表/消息富内容/输入完整保留；useChatApp按固定reply脚本85ms逐词与700ms步骤回显，Attach按钮只加入预置文件元数据。不是实时聊天、模型或文件上传。",
    "deliveredScope": "本地会话选择、输入、固定脚本回复/停止与示例附件。",
    "evidence": [
      "batches/looseleaf-03/chat-app.tsx",
      "batches/looseleaf-03/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-03/source.zip!/build/src/blocks/chat-app/page.tsx",
      "batches/looseleaf-03/source.zip!/build/src/blocks/chat-app/components/chat-app-thread.tsx",
      "batches/looseleaf-03/source.zip!/build/src/blocks/chat-app/components/chat-app-state.ts"
    ]
  },
  {
    "id": "looseleaf:inbox",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "纸张邮件收件箱（本地页面场景）",
    "reason": "保留原组件参考，本轮透明修正本地动作反馈，不冒称外部操作成功。",
    "deliveredScope": "本地收件箱阅读、筛选及回复列表演示；回复明确仅本地预览、没有发邮件。",
    "evidence": [
      "batches/looseleaf-03/inbox.tsx",
      "batches/looseleaf-03/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-03/source.zip!/build/src/blocks/inbox/page.tsx",
      "batches/looseleaf-03/source.zip!/build/src/blocks/inbox/components/inbox-reading-pane.tsx"
    ],
    "requiresPatch": "ui-local-action-third-fix/FILES.json"
  },
  {
    "id": "looseleaf:notes-app",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "笔记本应用（本地页面场景）",
    "reason": "原笔记列表、书架、阅读/编辑/新建/删除面板完整，commit只setNotes和可选回调；有页面参考价值，无云保存。",
    "deliveredScope": "本地笔记选择、新建、编辑与删除。",
    "evidence": [
      "batches/looseleaf-03/notes-app.tsx",
      "batches/looseleaf-03/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-03/source.zip!/build/src/blocks/notes-app/page.tsx"
    ]
  },
  {
    "id": "looseleaf:calendar-planner",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "手绘日历规划器（本地页面场景）",
    "reason": "原日历/当日议程/新增编辑删除对话框，save/remove写本地all；TODAY是样例日期，不接外部日历或邀请。",
    "deliveredScope": "示例日期日历、事件表单与本地议程管理。",
    "evidence": [
      "batches/looseleaf-03/calendar-planner.tsx",
      "batches/looseleaf-03/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-03/source.zip!/build/src/blocks/calendar-planner/page.tsx"
    ]
  },
  {
    "id": "looseleaf:file-explorer",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "文件夹资源管理器（本地页面场景）",
    "reason": "原文件夹树/路径/排序搜索/多选/新建/删除撤销完整，数据仅FileNode数组；文件激活仅选中，不读取实际内容。",
    "deliveredScope": "本地样例文件结构浏览和整理，不操作磁盘文件。",
    "evidence": [
      "batches/looseleaf-03/file-explorer.tsx",
      "batches/looseleaf-03/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-03/source.zip!/build/src/blocks/file-explorer/page.tsx"
    ]
  },
  {
    "id": "looseleaf:onboarding-01",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "手绘新手引导（组件参考）",
    "reason": "五项清单/进度/折叠恢复有实现；步骤按钮只onAction可选，entry未提供，Start writing为#write。不是完成开户/邀请的流程。",
    "deliveredScope": "五项设置清单勾选、进度、折叠和恢复；步骤业务入口仅展示。",
    "evidence": [
      "batches/looseleaf-04/onboarding-01.tsx",
      "batches/looseleaf-04/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-04/source.zip!/build/src/blocks/onboarding-01/page.tsx",
      "batches/looseleaf-04/source.zip!/build/src/blocks/onboarding-01/components/onboarding-01-steps.tsx"
    ]
  },
  {
    "id": "looseleaf:landing-hero-02",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "手绘产品首页首屏（组件参考）",
    "reason": "原完整hero区块+Today/This week和勾选进度小窗；Try/Book是#start/#demo占位，不是完整营销站或预约服务。",
    "deliveredScope": "纸张首屏区块与本地任务小窗，行动链接为示例。",
    "evidence": [
      "batches/looseleaf-04/landing-hero-02.tsx",
      "batches/looseleaf-04/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-04/source.zip!/build/src/blocks/landing-hero-02/page.tsx",
      "batches/looseleaf-04/source.zip!/build/src/blocks/landing-hero-02/components/landing-hero-02-window.tsx"
    ]
  },
  {
    "id": "looseleaf:testimonials-01",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "手绘评价墙（组件参考）",
    "reason": "原静态评价墙，4.9/2300为原演示文案；#reviews不是实际评论目录。不能当真实用户背书。",
    "deliveredScope": "纸张评价墙布局和样例评分。",
    "evidence": [
      "batches/looseleaf-04/testimonials-01.tsx",
      "batches/looseleaf-04/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-04/source.zip!/build/src/blocks/testimonials-01/page.tsx"
    ]
  },
  {
    "id": "looseleaf:features-01",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "纸张功能介绍（组件参考）",
    "reason": "entry无variant参数，实际仅默认cards三卡，不是bento变体合集；协作/历史/分享是营销文案，链接为锚点。",
    "deliveredScope": "三张纸张功能说明卡，不执行协作或分享。",
    "evidence": [
      "batches/looseleaf-04/features-01.tsx",
      "batches/looseleaf-04/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-04/source.zip!/build/src/blocks/features-01/page.tsx",
      "batches/looseleaf-04/source.zip!/build/src/blocks/features-01/components/features-01-cards.tsx"
    ]
  },
  {
    "id": "looseleaf:faq-01",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "手绘问答区（组件参考）",
    "reason": "原六问Accordion和帮助卡，包含定价/备份等虚构产品文案，mailto为.example；保阅读组件，不称真实服务承诺。",
    "deliveredScope": "六问折叠FAQ及静态帮助卡。",
    "evidence": [
      "batches/looseleaf-05/faq-01.tsx",
      "batches/looseleaf-05/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-05/source.zip!/build/src/blocks/faq-01/page.tsx",
      "batches/looseleaf-05/source.zip!/build/src/blocks/faq-01/components/faq-01-help.tsx",
      "batches/looseleaf-05/source.zip!/build/src/blocks/faq-01/components/faq-01-sheet.tsx"
    ]
  },
  {
    "id": "looseleaf:footer-01",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "手绘页脚（组件参考）",
    "reason": "原完整页脚排版，社交和法律链接为#或.example邮件，All systems normal静态徽章；不表示实际平台健康。",
    "deliveredScope": "原纸张页脚与示例链接/状态徽章。",
    "evidence": [
      "batches/looseleaf-05/footer-01.tsx",
      "batches/looseleaf-05/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-05/source.zip!/build/src/blocks/footer-01/page.tsx"
    ]
  },
  {
    "id": "looseleaf:settings-appearance",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "手绘外观设置（本地页面场景）",
    "reason": "原受控/非受控Appearance设置+实时局部preview+provider代码；未ready主题明确disabled soon。不会改变网站全局持久设置。",
    "deliveredScope": "局部纸张、密度、方向等设置预览和代码读出。",
    "evidence": [
      "batches/looseleaf-05/settings-appearance.tsx",
      "batches/looseleaf-05/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-05/source.zip!/build/src/blocks/settings-appearance/page.tsx"
    ]
  },
  {
    "id": "looseleaf:napkin",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "餐巾纸留言（组件参考）",
    "reason": "保留原组件参考，本轮透明修正本地动作反馈，不冒称外部操作成功。",
    "deliveredScope": "本地便笺输入及预览状态；明确 not sent，不连接厨房或任何发送服务。",
    "evidence": [
      "batches/looseleaf-05/napkin.tsx",
      "batches/looseleaf-05/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-05/source.zip!/build/src/docs/examples/napkin/04-table-card.tsx"
    ],
    "requiresPatch": "ui-local-action-third-fix/FILES.json"
  },
  {
    "id": "looseleaf:receipt",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "手绘订单收据（组件参考）",
    "reason": "原三商品数量、非负减量和实时total，收据条码是样例字符串，不支付/下单。",
    "deliveredScope": "本地数量加减与收据金额计算展示。",
    "evidence": [
      "batches/looseleaf-06/receipt.tsx",
      "batches/looseleaf-06/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-06/source.zip!/build/src/docs/examples/receipt/04-order-summary.tsx"
    ]
  },
  {
    "id": "looseleaf:seal",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "蜡封验证标记（组件参考）",
    "reason": "原verified/best/certificate三种印章构图，全是静态视觉标记而非验证服务。",
    "deliveredScope": "纸张头像徽章、商品奖章和证书印章样例。",
    "evidence": [
      "batches/looseleaf-06/seal.tsx",
      "batches/looseleaf-06/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-06/source.zip!/build/src/docs/examples/seal/03-verified-in-the-ui.tsx"
    ]
  },
  {
    "id": "looseleaf:stamp",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "文档印章（组件参考）",
    "reason": "原发票+stamp-paid静态叠印，不产生支付。此类静态材质仍有参考价值。",
    "deliveredScope": "发票上的已付印章样式演示。",
    "evidence": [
      "batches/looseleaf-06/stamp.tsx",
      "batches/looseleaf-06/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-06/source.zip!/build/src/docs/examples/stamp/03-on-a-document.tsx"
    ]
  },
  {
    "id": "looseleaf:sticker-sheet",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可剥离贴纸页（组件参考）",
    "reason": "原九贴纸sheet到board，点击/拖入和turn/size/layer/delete；删除回到sheet。真实本地编辑，非上传服务。",
    "deliveredScope": "本地贴纸剥离、摆放、旋转缩放和删除。",
    "evidence": [
      "batches/looseleaf-06/sticker-sheet.tsx",
      "batches/looseleaf-06/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-06/source.zip!/build/src/docs/examples/sticker-sheet/03-sheet-to-board.tsx"
    ]
  },
  {
    "id": "looseleaf:confetti",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "完成任务纸屑（组件参考）",
    "reason": "原三checkbox最后项触发局部Confetti，取消再勾可重播；不是任务服务。",
    "deliveredScope": "清单完成状态和彩纸动效。",
    "evidence": [
      "batches/looseleaf-06/confetti.tsx",
      "batches/looseleaf-06/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-06/source.zip!/build/src/docs/examples/confetti/03-task-done.tsx"
    ]
  },
  {
    "id": "looseleaf:lettering",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "手绘海报字（组件参考）",
    "reason": "原Paper Club海报字形/贴纸构图，无操作承诺；保静态排版参考。",
    "deliveredScope": "手绘字体与纸张海报。",
    "evidence": [
      "batches/looseleaf-07/lettering.tsx",
      "batches/looseleaf-07/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-07/source.zip!/build/src/docs/examples/lettering/03-poster.tsx"
    ]
  },
  {
    "id": "looseleaf:signature",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "书信签名（组件参考）",
    "reason": "原固定姓名动画+Sign again以60ms重新挂载，非用户笔迹签署；此短timer未见组件内清理，属下一层资源风险而非已证加载失败。",
    "deliveredScope": "固定姓名书写动画重播，不签署真实文件。",
    "evidence": [
      "batches/looseleaf-07/signature.tsx",
      "batches/looseleaf-07/source.zip!/build/src/vault-batch/main.tsx",
      "batches/looseleaf-07/source.zip!/build/src/docs/examples/signature/03-letter.tsx"
    ]
  },
  {
    "id": "magicui:text-reveal",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "滚动逐词显影（组件参考）",
    "reason": "原单句按滚动进度逐字显现，200vh容器；无完整文章。不能仅等待加载就判断未动。",
    "deliveredScope": "滚动驱动的单句文字揭示。",
    "evidence": [
      "batches/magicui-05/text-reveal.tsx",
      "batches/magicui-05/source.zip!/src/main.tsx",
      "batches/magicui-05/source.zip!/src/demos/text-reveal.tsx"
    ]
  },
  {
    "id": "magicui:smooth-cursor",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "弹性跟随指针（组件参考）",
    "reason": "原跟随指针弹簧/旋转，触摸分支禁用；不是空白故障。",
    "deliveredScope": "桌面指针平滑跟随，触摸设备不显示。",
    "evidence": [
      "batches/magicui-05/smooth-cursor.tsx",
      "batches/magicui-05/source.zip!/src/main.tsx",
      "batches/magicui-05/source.zip!/src/demos/smooth-cursor.tsx"
    ]
  },
  {
    "id": "magicui:lens",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "局部放大镜卡片（组件参考）",
    "reason": "原Lens逻辑保留，照片已换本地原创山景SVG；两CTA无handler，仅放大镜参考，不是露营服务页。",
    "deliveredScope": "鼠标移入/移动放大本地示意插画，移出关闭。",
    "evidence": [
      "batches/magicui-05/lens.tsx",
      "batches/magicui-05/source.zip!/src/main.tsx",
      "batches/magicui-05/source.zip!/src/demos/lens.tsx"
    ]
  },
  {
    "id": "magicui:pixel-image",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "像素拼片显色（组件参考）",
    "reason": "原24格渐显与灰度过渡；默认图为本地原创SVG，非原照片。",
    "deliveredScope": "24格图像揭示和灰度过渡，素材为替代示意图。",
    "evidence": [
      "batches/magicui-05/pixel-image.tsx",
      "batches/magicui-05/source.zip!/src/main.tsx",
      "batches/magicui-05/source.zip!/src/demos/pixel-image.tsx"
    ]
  },
  {
    "id": "magicui:marquee",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "双向评价流（组件参考）",
    "reason": "原双行评论轨道/hover暂停，六头像都是同一本地通用SVG；评价是样例，不是六真实推荐。",
    "deliveredScope": "双向评论滚动与悬停暂停。",
    "evidence": [
      "batches/magicui-04/marquee.tsx",
      "batches/magicui-04/source.zip!/src/main.tsx",
      "batches/magicui-04/source.zip!/src/demos/marquee.tsx"
    ]
  },
  {
    "id": "magicui:icon-cloud",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可暂停球形图标云（组件参考）",
    "reason": "原Canvas图标球/拖动和暂停，20本地Lucide替代上游品牌图；不是新图标系列。",
    "deliveredScope": "本地通用图标球旋转、拖动、暂停。",
    "evidence": [
      "batches/magicui-06/icon-cloud.tsx",
      "batches/magicui-06/source.zip!/src/main.tsx",
      "batches/magicui-06/source.zip!/src/demos/icon-cloud.tsx"
    ]
  },
  {
    "id": "magicui:dock",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "磁性放大工具栏（组件参考）",
    "reason": "原Dock弹簧放大和Tooltip；品牌位置改通用图标，所有href#，不启动应用。",
    "deliveredScope": "Dock邻近放大与工具提示，导航为示例。",
    "evidence": [
      "batches/magicui-06/dock.tsx",
      "batches/magicui-06/source.zip!/src/main.tsx",
      "batches/magicui-06/source.zip!/src/demos/dock.tsx"
    ]
  },
  {
    "id": "magicui:highlighter",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "手绘标注文字（组件参考）",
    "reason": "原rough-notation underline/highlight，非编辑器；支持测量变化重画。",
    "deliveredScope": "两种手绘文字标记动画。",
    "evidence": [
      "batches/magicui-06/highlighter.tsx",
      "batches/magicui-06/source.zip!/src/main.tsx",
      "batches/magicui-06/source.zip!/src/demos/highlighter.tsx"
    ]
  },
  {
    "id": "magicui:dotted-map",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "点阵城市标记地图（组件参考）",
    "reason": "原静态SVG世界点阵和Seoul/NYC标记；旗帜改国家代码徽标。不是地理查询服务。",
    "deliveredScope": "静态点阵世界地图与两城市标记。",
    "evidence": [
      "batches/magicui-06/dotted-map.tsx",
      "batches/magicui-06/source.zip!/src/main.tsx",
      "batches/magicui-06/source.zip!/src/demos/dotted-map.tsx"
    ]
  },
  {
    "id": "magicui:backlight",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "彩色背光卡片（组件参考）",
    "reason": "原Backlight静态滤镜，宿主加blur22/0切换；不是原上游动画。",
    "deliveredScope": "背景光晕静态组件与本地开关。",
    "evidence": [
      "batches/magicui-06/backlight.tsx",
      "batches/magicui-06/source.zip!/src/main.tsx",
      "batches/magicui-06/source.zip!/src/demos/backlight.tsx"
    ]
  },
  {
    "id": "magicui:glare-hover",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "掠光定价卡片（组件参考）",
    "reason": "原掠光套在Pro价格卡，Get started无handler；保光效不称订阅流程。",
    "deliveredScope": "悬停掠光价格卡，价格和CTA为示例。",
    "evidence": [
      "batches/magicui-06/glare-hover.tsx",
      "batches/magicui-06/source.zip!/src/main.tsx",
      "batches/magicui-06/source.zip!/src/demos/glare-hover.tsx"
    ]
  },
  {
    "id": "magicui:code-comparison",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "语法高亮代码对照（组件参考）",
    "reason": "原双栏固定代码和Shiki标注，非代码执行或编辑；成功高亮与fallback源码路径分开。",
    "deliveredScope": "固定代码的双栏高亮/增删标记和焦点效果。",
    "evidence": [
      "batches/magicui-06/code-comparison.tsx",
      "batches/magicui-06/source.zip!/src/main.tsx",
      "batches/magicui-06/source.zip!/src/demos/code-comparison.tsx"
    ]
  },
  {
    "id": "motion-primitives:toolbar-dynamic",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "动态宽度工具条（组件参考）",
    "reason": "原工具栏展开到搜索框与外点关闭；输入不检索数据，User按钮已disabled。",
    "deliveredScope": "伸缩搜索输入外观，不执行搜索。",
    "evidence": [
      "batches/motion-source/toolbar-dynamic.tsx",
      "batches/motion-source/motion-primitives-source.zip!/adapted-runtime/src/motion-04.tsx",
      "batches/motion-source/motion-primitives-source.zip!/adapted-runtime/src/components/core/toolbar-dynamic.tsx"
    ]
  },
  {
    "id": "motion-primitives:toolbar-expandable",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "弹性展开工具条（组件参考）",
    "reason": "原四面板选择、外点关闭与测量动画；Edit/View more/Manage/View Transactions均无handler，余额为样例。",
    "deliveredScope": "四类内容面板的展开/切换，不执行账号或文件操作。",
    "evidence": [
      "batches/motion-source/toolbar-expandable.tsx",
      "batches/motion-source/motion-primitives-source.zip!/adapted-runtime/src/motion-04.tsx",
      "batches/motion-source/motion-primitives-source.zip!/adapted-runtime/src/components/core/toolbar-expandable.tsx"
    ]
  },
  {
    "id": "motion-primitives:morphing-popover",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "形变输入浮层（组件参考）",
    "reason": "实际Textarea demo，Submit仅清空note和关闭，无保存或外发；保输入弹层变形参考。",
    "deliveredScope": "便笺输入弹层打开/关闭，提交仅清空本地输入。",
    "evidence": [
      "batches/motion-source/morphing-popover.tsx",
      "batches/motion-source/motion-primitives-source.zip!/adapted-runtime/src/motion-02.tsx",
      "batches/motion-source/motion-primitives-source.zip!/adapted-runtime/src/demos/morphing-popover/morphing-popover-textarea.tsx"
    ]
  },
  {
    "id": "motion-primitives:morphing-dialog",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "形变展开详情（组件参考）",
    "reason": "原共享layout卡片到dialog，原照片与介绍换本地SVG及原创说明；不是上游完整内容复刻。",
    "deliveredScope": "示意插画卡片展开为详情弹层。",
    "evidence": [
      "batches/motion-source/morphing-dialog.tsx",
      "batches/motion-source/motion-primitives-source.zip!/adapted-runtime/src/motion-01.tsx",
      "batches/motion-source/motion-primitives-source.zip!/adapted-runtime/src/demos/morphing-dialog/morphing-dialog-basic-1.tsx"
    ]
  },
  {
    "id": "motion-primitives:image-comparison",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "弹簧图片对比（组件参考）",
    "reason": "实际Spring demo enableHover，左右是本地原创深浅仪表盘SVG，不是原媒体；保比较遮罩机制。",
    "deliveredScope": "鼠标移动驱动两张示意图的弹簧分割比较。",
    "evidence": [
      "batches/motion-source/image-comparison.tsx",
      "batches/motion-source/motion-primitives-source.zip!/adapted-runtime/src/motion-02.tsx",
      "batches/motion-source/motion-primitives-source.zip!/adapted-runtime/src/demos/image-comparison/image-comparison-spring.tsx"
    ]
  },
  {
    "id": "solidglass:status-glyph",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "连续变形状态图符（组件参考）",
    "reason": "原五活动选择驱动SVG点阵figure/RAF，状态名为人工选择而非模型真实状态。",
    "deliveredScope": "五类Agent状态图符切换。",
    "evidence": [
      "batches/solidglass-01/status-glyph.tsx",
      "batches/solidglass-01/solid-glass-source.zip!/adapted-runtime/src/main.tsx",
      "batches/solidglass-01/solid-glass-source.zip!/adapted-runtime/src/examples/status-glyph-demo.tsx"
    ]
  },
  {
    "id": "solidglass:agent-run",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "Agent 运行与代码修改（本地交互实验）",
    "reason": "实际包装ReasoningDemo+ToolStepsDemo+DiffViewDemo；搜索8结果、HTTP404、python输出均固定样例，不执行代码，也不是模型私有思维证据。",
    "deliveredScope": "固定推演文字、工具步骤和代码差异的组合展示。",
    "evidence": [
      "batches/solidglass-01/agent-run.tsx",
      "batches/solidglass-01/solid-glass-source.zip!/adapted-runtime/src/main.tsx",
      "batches/solidglass-01/solid-glass-source.zip!/adapted-runtime/src/examples/reasoning-demo.tsx",
      "batches/solidglass-01/solid-glass-source.zip!/adapted-runtime/src/examples/tool-steps-demo.tsx",
      "batches/solidglass-01/solid-glass-source.zip!/adapted-runtime/src/examples/diff-view-demo.tsx"
    ]
  },
  {
    "id": "solidglass:ask-card",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Agent 决策询问卡（组件参考）",
    "reason": "原二选一回答后禁用，Ask again重置；并不重跑求解器。",
    "deliveredScope": "决策问题选择、回答记录与重置。",
    "evidence": [
      "batches/solidglass-01/ask-card.tsx",
      "batches/solidglass-01/solid-glass-source.zip!/adapted-runtime/src/main.tsx",
      "batches/solidglass-01/solid-glass-source.zip!/adapted-runtime/src/examples/ask-card-demo.tsx"
    ]
  },
  {
    "id": "solidglass:composer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "多模态 Agent 输入区（组件参考）",
    "reason": "原text/tags/backspace两步删除、模型/模式选项；onSubmit只清空text，Add按钮无handler，模型名称为样例。",
    "deliveredScope": "输入、标签移除和选项菜单，不发送到模型、不上传附件。",
    "evidence": [
      "batches/solidglass-01/composer.tsx",
      "batches/solidglass-01/solid-glass-source.zip!/adapted-runtime/src/main.tsx",
      "batches/solidglass-01/solid-glass-source.zip!/adapted-runtime/src/examples/composer-demo.tsx"
    ]
  },
  {
    "id": "solidglass:context-ring",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "上下文用量环（组件参考）",
    "reason": "原四用量值，其中一个展开parts明细；数字是固定fixture，非实际账单/上下文监测。",
    "deliveredScope": "上下文用量环及固定分类明细。",
    "evidence": [
      "batches/solidglass-01/context-ring.tsx",
      "batches/solidglass-01/solid-glass-source.zip!/adapted-runtime/src/main.tsx",
      "batches/solidglass-01/solid-glass-source.zip!/adapted-runtime/src/examples/context-ring-demo.tsx"
    ]
  },
  {
    "id": "solidglass:agent-workspace",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "Agent 三栏完整工作台（本地页面场景）",
    "reason": "原多栏会话/任务/文件完整场景，本地send用定时固定回答，任务Running/Stopped仅内存；Upload只取文件名和size，不读内容/外传。不是实际Agent执行。",
    "deliveredScope": "本地会话、示例文件树、任务状态与决策交互。",
    "evidence": [
      "batches/solidglass-workspace/agent-workspace.tsx",
      "batches/solidglass-workspace/source.zip!/runnable/src/main.tsx",
      "batches/solidglass-workspace/source.zip!/runnable/src/blocks/agent-workspace.tsx"
    ]
  },
  {
    "id": "animata:led-board",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "LED点阵告示牌（组件参考）",
    "reason": "原word=copy点阵，hover显词与随机灯点；没有剪贴板操作。",
    "deliveredScope": "悬停显示copy点阵文字，不复制内容。",
    "evidence": [
      "batches/animata-01/led-board.tsx",
      "batches/animata-01/source.zip!/src/entry-1.tsx",
      "batches/animata-01/source.zip!/src/animata/card/led-board.stories.tsx"
    ]
  },
  {
    "id": "animata:card-spread",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "便笺卡片展开（组件参考）",
    "reason": "原checkbox驱动CSS卡片展开/收拢，含购物和笔记示例；不是可保存桌面。",
    "deliveredScope": "本地卡片叠放与展开。",
    "evidence": [
      "batches/animata-01/card-spread.tsx",
      "batches/animata-01/source.zip!/src/entry-1.tsx",
      "batches/animata-01/source.zip!/src/animata/card/card-spread.stories.tsx"
    ]
  },
  {
    "id": "animata:blur-stack-card",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "模糊叠层卡片（组件参考）",
    "reason": "原点击卡片splice重排层级，非路由或内容服务。",
    "deliveredScope": "点击重排叠层统计卡。",
    "evidence": [
      "batches/animata-01/blur-stack-card.tsx",
      "batches/animata-01/source.zip!/src/entry-1.tsx",
      "batches/animata-01/source.zip!/src/animata/card/blur-stack-card.stories.tsx"
    ]
  },
  {
    "id": "animata:collab-card",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "团队协作光标卡（本地交互实验）",
    "reason": "原Live·4 editing和命名光标为CSS演示，无在线参与者或协作协议。",
    "deliveredScope": "模拟多人光标和协作卡片动效。",
    "evidence": [
      "batches/animata-01/collab-card.tsx",
      "batches/animata-01/source.zip!/src/entry-1.tsx",
      "batches/animata-01/source.zip!/src/animata/card/collab-card.stories.tsx"
    ]
  },
  {
    "id": "animata:storage-widget",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "存储空间小组件（组件参考）",
    "reason": "原静态容量卡，未读取系统存储；保信息排版。",
    "deliveredScope": "样例存储容量和进度。",
    "evidence": [
      "batches/animata-01/storage-widget.tsx",
      "batches/animata-01/source.zip!/src/entry-1.tsx",
      "batches/animata-01/source.zip!/src/animata/widget/storage-widget.stories.tsx"
    ]
  },
  {
    "id": "animata:weekly-progress",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "每周阅读进度（组件参考）",
    "reason": "原默认数据的周进度分布，未接实际任务统计。",
    "deliveredScope": "静态一周进度分布。",
    "evidence": [
      "batches/animata-02/weekly-progress.tsx",
      "batches/animata-02/source.zip!/src/entry-2.tsx",
      "batches/animata-02/source.zip!/src/animata/widget/weekly-progress.stories.tsx"
    ]
  },
  {
    "id": "animata:team-clock",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "团队时区时钟（组件参考）",
    "reason": "原真实本地时钟+用户hover/选择，但城市时间只是timeDifference整数叠加，NewYork -5/London +5为样例非IANA/DST计算，头像为通用本地SVG。",
    "deliveredScope": "本地时间与示例小时偏移切换，不作准确城市时区工具。",
    "evidence": [
      "batches/animata-02/team-clock.tsx",
      "batches/animata-02/source.zip!/src/entry-2.tsx",
      "batches/animata-02/source.zip!/src/animata/widget/team-clock.stories.tsx"
    ]
  },
  {
    "id": "animata:calendar-event",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "日历日程概览（组件参考）",
    "reason": "原WorkdayGlance固定2026-05-30和四事件，最多显示两条；不是完整可编辑日历。",
    "deliveredScope": "单日样例日程摘要。",
    "evidence": [
      "batches/animata-02/calendar-event.tsx",
      "batches/animata-02/source.zip!/src/entry-2.tsx",
      "batches/animata-02/source.zip!/src/animata/widget/calendar-event.stories.tsx"
    ]
  },
  {
    "id": "animata:study-timer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "专注时间分段卡（组件参考）",
    "reason": "原组件仅统计segments总分钟和比例，没有倒计时或开始/停止，图标button无handler。",
    "deliveredScope": "静态专注时长分布卡，不运行计时器。",
    "evidence": [
      "batches/animata-02/study-timer.tsx",
      "batches/animata-02/source.zip!/src/entry-2.tsx",
      "batches/animata-02/source.zip!/src/animata/widget/study-timer.stories.tsx"
    ]
  },
  {
    "id": "animata:alarm-clock",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "闹钟开关面板（组件参考）",
    "reason": "原两闹钟本地enabledIds开关，没有闹铃/通知调度。",
    "deliveredScope": "两项模拟闹钟开关，不触发通知。",
    "evidence": [
      "batches/animata-02/alarm-clock.tsx",
      "batches/animata-02/source.zip!/src/entry-2.tsx",
      "batches/animata-02/source.zip!/src/animata/widget/alarm-clock.stories.tsx"
    ]
  },
  {
    "id": "animata:water-tracker",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "饮水进度追踪（组件参考）",
    "reason": "原500/2000ml，点击每次250ml，到目标禁用；本地state不保存健康记录。",
    "deliveredScope": "本地饮水量步进与目标进度。",
    "evidence": [
      "batches/animata-03/water-tracker.tsx",
      "batches/animata-03/source.zip!/src/entry-3.tsx",
      "batches/animata-03/source.zip!/src/animata/widget/water-tracker.stories.tsx"
    ]
  },
  {
    "id": "animata:gooey-tabs",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "液滴导航标签（组件参考）",
    "reason": "原三标签选择与键盘状态、SVG融合滤镜；没有对应业务正文，保导航动效参考。",
    "deliveredScope": "三标签液滴选择过渡。",
    "evidence": [
      "batches/animata-03/gooey-tabs.tsx",
      "batches/animata-03/source.zip!/src/entry-3.tsx",
      "batches/animata-03/source.zip!/src/animata/tabs/gooey-tabs.stories.tsx"
    ]
  },
  {
    "id": "animata:fluid-tabs",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "流体滑块导航（组件参考）",
    "reason": "原三标签activeIndex和指示器布局变化，没有银行账户或基金内容。",
    "deliveredScope": "三标签流体指示器切换。",
    "evidence": [
      "batches/animata-03/fluid-tabs.tsx",
      "batches/animata-03/source.zip!/src/entry-3.tsx",
      "batches/animata-03/source.zip!/src/animata/tabs/fluid-tabs.stories.tsx"
    ]
  },
  {
    "id": "animata:speed-dial",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "悬浮快捷操作（组件参考）",
    "reason": "原菜单展开/键盘焦点/关闭完整；四action在实际story均()=>{}，只关闭不复制编辑分享删除。",
    "deliveredScope": "快捷菜单展开、选择和关闭；动作仅样例。",
    "evidence": [
      "batches/animata-04/speed-dial.tsx",
      "batches/animata-04/source.zip!/src/entry-4.tsx",
      "batches/animata-04/source.zip!/src/animata/fabs/speed-dial.stories.tsx"
    ]
  },
  {
    "id": "animata:boids-ecosystem",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "群体飞行生态（本地交互实验）",
    "reason": "原140个Canvas鸟群含鼠标分流算法，非静态图；核心像素需原生复验，不能因未测统一降级。",
    "deliveredScope": "鸟群运动与鼠标避让视觉实验。",
    "evidence": [
      "batches/animata-04/boids-ecosystem.tsx",
      "batches/animata-04/source.zip!/src/entry-4.tsx",
      "batches/animata-04/source.zip!/src/animata/background/boids-ecosystem.stories.tsx"
    ]
  },
  {
    "id": "animata:shooting-stars",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "流星雨背景（组件参考）",
    "reason": "原SVG/CSS星雨含reduced静止分支，非Canvas；尺寸改变重新seed。",
    "deliveredScope": "流星背景与标题场景。",
    "evidence": [
      "batches/animata-04/shooting-stars.tsx",
      "batches/animata-04/source.zip!/src/entry-4.tsx",
      "batches/animata-04/source.zip!/src/animata/background/shooting-stars.stories.tsx"
    ]
  },
  {
    "id": "animata:ring-chart",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "嵌套环形进度（组件参考）",
    "reason": "原三环10/60/40样例，size96/width20；没有实时业务数据。",
    "deliveredScope": "静态三层环形进度。",
    "evidence": [
      "batches/animata-04/ring-chart.tsx",
      "batches/animata-04/source.zip!/src/entry-4.tsx",
      "batches/animata-04/source.zip!/src/animata/graphs/ring-chart.stories.tsx"
    ]
  },
  {
    "id": "tailark:mist-features-four",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "浮层编辑器与AI调度区块（组件参考）",
    "reason": "原两功能插画区块，Toggle可改变自身pressed但不格式化正文；Schedule/ellipsis无handler，不能称AI会议工具。",
    "deliveredScope": "两卡营销插画区块及局部按钮状态。",
    "evidence": [
      "batches/tailark-curated-01/mist-features-four.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/entry.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/registry/bases/radix/mist/blocks/features/four.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/asset-adaptations.json",
      "batches/tailark-curated-01/source.zip!/adapted-build/image.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/link.tsx"
    ]
  },
  {
    "id": "tailark:mist-features-ten",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "营销AI助手Bento（组件参考）",
    "reason": "原三卡AI营销区块，聊天输入/播放仅aria-hidden插画与按钮外观；头像换通用原创渐变，不具AI或视频功能。",
    "deliveredScope": "三卡营销版式，人物照片已换示意图。",
    "evidence": [
      "batches/tailark-curated-01/mist-features-ten.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/entry.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/registry/bases/radix/mist/blocks/features/ten.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/asset-adaptations.json",
      "batches/tailark-curated-01/source.zip!/adapted-build/image.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/link.tsx"
    ]
  },
  {
    "id": "tailark:veil-features-three",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "动态功能切换区（组件参考）",
    "reason": "原四功能按钮真实setFeature切换四插画；品牌logo保SVG但不连接服务，CTA#。",
    "deliveredScope": "四种产品功能插画切换。",
    "evidence": [
      "batches/tailark-curated-01/veil-features-three.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/entry.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/registry/bases/radix/veil/blocks/features/three.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/asset-adaptations.json",
      "batches/tailark-curated-01/source.zip!/adapted-build/image.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/link.tsx"
    ]
  },
  {
    "id": "tailark:veil-hero-section-four-hero-section",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "AI工具菜单首屏（本地页面场景）",
    "reason": "原Header+Hero首屏保留移动菜单，原大照片换原创渐变SVG，浮动输入等aria-hidden为插画而非AI工具；不能称完整产品网站。",
    "deliveredScope": "带响应式导航的营销首屏，背景为替代示意图。",
    "evidence": [
      "batches/tailark-curated-01/veil-hero-section-four-hero-section.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/entry.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/registry/bases/radix/veil/blocks/hero-section/four/hero-section.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/asset-adaptations.json",
      "batches/tailark-curated-01/source.zip!/adapted-build/image.tsx",
      "batches/tailark-curated-01/source.zip!/adapted-build/link.tsx"
    ]
  },
  {
    "id": "tailark:veil-integrations-two",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "轨道集成展示（组件参考）",
    "reason": "原集成logo连接图和CTA#，仅静态营销布局，没有账号授权。",
    "deliveredScope": "工具集成关系图的静态营销区块。",
    "evidence": [
      "batches/tailark-curated-02/veil-integrations-two.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/entry.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/registry/bases/radix/veil/blocks/integrations/two.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/asset-adaptations.json",
      "batches/tailark-curated-02/source.zip!/adapted-build/image.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/link.tsx"
    ]
  },
  {
    "id": "tailark:dusk-features-three",
    "recommendation": "review",
    "layer": "component",
    "scopeLabel": "客户上下文三联卡（组件参考）",
    "reason": "原video误接SVG的元素类型错误已由配套MEDIA补丁改为img，沿用同一既有SVG、尺寸与布局；仅恢复静态示意图，不等于原视频/摄影效果，仍保留素材待复核。",
    "deliveredScope": "原营销功能版式与本地静态示意图；不播放原视频，原媒体效果待复核。",
    "evidence": [
      "batches/tailark-curated-02/dusk-features-three.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/entry.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/registry/bases/radix/dusk/blocks/features/three.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/asset-adaptations.json",
      "batches/tailark-curated-02/source.zip!/adapted-build/image.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/link.tsx",
      "ui-tailark-video-fix/VERIFICATION.json",
      "ui-tailark-video-fix/media-scan.json"
    ],
    "requiresPatch": "ui-tailark-video-fix/FILES.json"
  },
  {
    "id": "tailark:dusk-integrations-one",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "暗色应用连接目录（组件参考）",
    "reason": "原六logo卡+CTA#，多个不相关产品共用Google搜索AI描述是样例文案，不是已核产品事实。",
    "deliveredScope": "静态六工具集成卡布局，不连接服务。",
    "evidence": [
      "batches/tailark-curated-02/dusk-integrations-one.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/entry.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/registry/bases/radix/dusk/blocks/integrations/one.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/asset-adaptations.json",
      "batches/tailark-curated-02/source.zip!/adapted-build/image.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/link.tsx"
    ]
  },
  {
    "id": "tailark:dusk-hero-section-eight",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "家庭预算叠层首屏（本地页面场景）",
    "reason": "原Header+家庭预算首屏，人物/背景照片全换原创渐变；费用数字和10万家庭评分是原营销fixture，非真实财务或背书。",
    "deliveredScope": "含移动导航的预算产品营销首屏，照片为替代示意图。",
    "evidence": [
      "batches/tailark-curated-02/dusk-hero-section-eight.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/entry.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/registry/bases/radix/dusk/blocks/hero-section/eight.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/asset-adaptations.json",
      "batches/tailark-curated-02/source.zip!/adapted-build/image.tsx",
      "batches/tailark-curated-02/source.zip!/adapted-build/link.tsx"
    ]
  },
  {
    "id": "astryx:dashboard-comparison",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原对比仪表盘",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原对比仪表盘；range/segment/device切换本地数据，不连接分析服务",
    "evidence": [
      "ui-astryx-pages-third-local/src/dashboard-comparison.tsx",
      "ui-astryx-pages-third-local/src/entry-dashboard-comparison.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-03/dashboard-comparison/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-03/dashboard-comparison/README.md"
    ]
  },
  {
    "id": "astryx:dashboard-composition",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原组成仪表盘",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原组成仪表盘；时间选择改变标签，原静态系列不随之重算",
    "evidence": [
      "ui-astryx-pages-third-local/src/dashboard-composition.tsx",
      "ui-astryx-pages-third-local/src/entry-dashboard-composition.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-03/dashboard-composition/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-03/dashboard-composition/README.md"
    ]
  },
  {
    "id": "astryx:documentation",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原组件文档落地页",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原组件文档落地页；静态文档展示不是后台",
    "evidence": [
      "ui-astryx-pages-third-local/src/documentation.tsx",
      "ui-astryx-pages-third-local/src/entry-documentation.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-03/documentation/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-03/documentation/README.md"
    ]
  },
  {
    "id": "astryx-core:collapsible",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原折叠组件",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原折叠组件；本地展开收起",
    "evidence": [
      "ui-astryx-navigation-local/src/collapsible.tsx",
      "ui-astryx-navigation-local/src/entry-collapsible.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/collapsible/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/collapsible/README.md"
    ]
  },
  {
    "id": "astryx-core:dropdown-menu",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原下拉菜单",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原下拉菜单；alpha/beta/MoreMenu gamma本地选择",
    "evidence": [
      "ui-astryx-navigation-local/src/dropdown-menu.tsx",
      "ui-astryx-navigation-local/src/entry-dropdown-menu.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/dropdown-menu/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/dropdown-menu/README.md"
    ]
  },
  {
    "id": "astryx-core:context-menu",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原右键菜单",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原右键菜单；本地选择与重置",
    "evidence": [
      "ui-astryx-navigation-local/src/context-menu.tsx",
      "ui-astryx-navigation-local/src/entry-context-menu.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/context-menu/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/context-menu/README.md"
    ]
  },
  {
    "id": "astryx-core:tabs",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原三页签",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原三页签；Overview/Activity/Details示例内容",
    "evidence": [
      "ui-astryx-navigation-local/src/tabs.tsx",
      "ui-astryx-navigation-local/src/entry-tabs.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/tabs/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/tabs/README.md"
    ]
  },
  {
    "id": "astryx-core:stepper",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原三阶段步骤器",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原三阶段步骤器；Next与reset，不是真实业务进度",
    "evidence": [
      "ui-astryx-navigation-local/src/stepper.tsx",
      "ui-astryx-navigation-local/src/entry-stepper.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/stepper/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/stepper/README.md"
    ]
  },
  {
    "id": "astryx-core:list",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原二项可选列表",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原二项可选列表；本地选中状态",
    "evidence": [
      "ui-astryx-navigation-local/src/list.tsx",
      "ui-astryx-navigation-local/src/entry-list.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/list/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/list/README.md"
    ]
  },
  {
    "id": "astryx-core:metadata-list",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原元数据列表",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原元数据列表；Owner/Status/Version静态展示",
    "evidence": [
      "ui-astryx-navigation-local/src/metadata-list.tsx",
      "ui-astryx-navigation-local/src/entry-metadata-list.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/metadata-list/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/metadata-list/README.md"
    ]
  },
  {
    "id": "astryx-core:token",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Token",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Token；移除与恢复",
    "evidence": [
      "ui-astryx-navigation-local/src/token.tsx",
      "ui-astryx-navigation-local/src/entry-token.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/token/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-navigation-01/token/README.md"
    ]
  },
  {
    "id": "astryx-core:date-input",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原日期输入",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原日期输入；固定初始日期，可编辑",
    "evidence": [
      "ui-astryx-content-local/src/date-input.tsx",
      "ui-astryx-content-local/src/entry-date-input.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/date-input/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/date-input/README.md"
    ]
  },
  {
    "id": "astryx-core:code-block",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原代码块",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原代码块；42/43本地切换，行号/标题；复制禁用，不执行代码",
    "evidence": [
      "ui-astryx-content-local/src/code-block.tsx",
      "ui-astryx-content-local/src/entry-code-block.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/code-block/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/code-block/README.md"
    ]
  },
  {
    "id": "astryx-core:citation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原引用组件",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原引用组件；虚构引用标题和编号切换，不检索文献",
    "evidence": [
      "ui-astryx-content-local/src/citation.tsx",
      "ui-astryx-content-local/src/entry-citation.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/citation/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/citation/README.md"
    ]
  },
  {
    "id": "astryx-core:timestamp",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原时间戳",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原时间戳；固定UTC值与三种格式，不是实时时钟",
    "evidence": [
      "ui-astryx-content-local/src/timestamp.tsx",
      "ui-astryx-content-local/src/entry-timestamp.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/timestamp/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/timestamp/README.md"
    ]
  },
  {
    "id": "astryx-core:tooltip",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Tooltip",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Tooltip；宿主控制开关的原提示组件",
    "evidence": [
      "ui-astryx-content-local/src/tooltip.tsx",
      "ui-astryx-content-local/src/entry-tooltip.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/tooltip/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/tooltip/README.md"
    ]
  },
  {
    "id": "astryx-core:hover-card",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原HoverCard",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原HoverCard；宿主控制开关的原悬浮信息",
    "evidence": [
      "ui-astryx-content-local/src/hover-card.tsx",
      "ui-astryx-content-local/src/entry-hover-card.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/hover-card/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/hover-card/README.md"
    ]
  },
  {
    "id": "astryx-core:info-tip",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原InfoTip",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原InfoTip；点击固定提示",
    "evidence": [
      "ui-astryx-content-local/src/info-tip.tsx",
      "ui-astryx-content-local/src/entry-info-tip.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/info-tip/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/info-tip/README.md"
    ]
  },
  {
    "id": "astryx-core:toolbar",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Toolbar",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Toolbar；start/end槽及本地选择重置",
    "evidence": [
      "ui-astryx-content-local/src/toolbar.tsx",
      "ui-astryx-content-local/src/entry-toolbar.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/toolbar/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-content-01/toolbar/README.md"
    ]
  },
  {
    "id": "astryx-core:text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Text/Heading",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Text/Heading；排版层级和颜色切换",
    "evidence": [
      "ui-astryx-search-local/src/text.tsx",
      "ui-astryx-search-local/src/entry-text.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/text/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/text/README.md"
    ]
  },
  {
    "id": "astryx-core:link",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Link",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Link；本地回调与禁用链接，不承诺外部导航",
    "evidence": [
      "ui-astryx-search-local/src/link.tsx",
      "ui-astryx-search-local/src/entry-link.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/link/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/link/README.md"
    ]
  },
  {
    "id": "astryx-core:scrollable-area",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原ScrollableArea",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原ScrollableArea；30段文字及滚动位置",
    "evidence": [
      "ui-astryx-search-local/src/scrollable-area.tsx",
      "ui-astryx-search-local/src/entry-scrollable-area.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/scrollable-area/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/scrollable-area/README.md"
    ]
  },
  {
    "id": "astryx-core:outline",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Outline",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Outline；本地标题滚动与焦点，opaque环境移除history写入",
    "evidence": [
      "ui-astryx-search-local/src/outline.tsx",
      "ui-astryx-search-local/src/entry-outline.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/outline/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/outline/README.md"
    ]
  },
  {
    "id": "astryx-core:typeahead",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Typeahead",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Typeahead；三项同步本地数据源",
    "evidence": [
      "ui-astryx-search-local/src/typeahead.tsx",
      "ui-astryx-search-local/src/entry-typeahead.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/typeahead/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/typeahead/README.md"
    ]
  },
  {
    "id": "astryx-core:tokenizer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Tokenizer",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Tokenizer；三项本地数据，最多三个token",
    "evidence": [
      "ui-astryx-search-local/src/tokenizer.tsx",
      "ui-astryx-search-local/src/entry-tokenizer.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/tokenizer/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/tokenizer/README.md"
    ]
  },
  {
    "id": "astryx-core:toast",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Toast",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Toast；显示与关闭本地通知，不是系统推送",
    "evidence": [
      "ui-astryx-search-local/src/toast.tsx",
      "ui-astryx-search-local/src/entry-toast.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/toast/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-search-01/toast/README.md"
    ]
  },
  {
    "id": "astryx-core:command-palette",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原CommandPalette",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原CommandPalette；两个本地动作及搜索，不执行系统命令",
    "evidence": [
      "ui-astryx-data-local/src/command-palette.tsx",
      "ui-astryx-data-local/src/entry-command-palette.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-data-01/command-palette/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-data-01/command-palette/README.md"
    ]
  },
  {
    "id": "astryx-core:file-input",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原FileInput",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原FileInput；最多2个1KiB文本文件，仅元数据，不读内容或上传",
    "evidence": [
      "ui-astryx-data-local/src/file-input.tsx",
      "ui-astryx-data-local/src/entry-file-input.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-data-01/file-input/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-data-01/file-input/README.md"
    ]
  },
  {
    "id": "astryx-core:tree-list",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原TreeList",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原TreeList；文件夹展开与两个子项选择",
    "evidence": [
      "ui-astryx-data-local/src/tree-list.tsx",
      "ui-astryx-data-local/src/entry-tree-list.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-data-01/tree-list/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-data-01/tree-list/README.md"
    ]
  },
  {
    "id": "astryx-core:overflow-list",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原OverflowList",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原OverflowList；四按钮及2/4容量，溢出菜单；原生尺寸适配未验",
    "evidence": [
      "ui-astryx-layout-local/src/overflow-list.tsx",
      "ui-astryx-layout-local/src/entry-overflow-list.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/overflow-list/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/overflow-list/README.md"
    ]
  },
  {
    "id": "astryx-core:resizable",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Resizable",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Resizable；120–400宽度与原ResizeHandle，重置；原生拖动未验",
    "evidence": [
      "ui-astryx-layout-local/src/resizable.tsx",
      "ui-astryx-layout-local/src/entry-resizable.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/resizable/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-layout-01/resizable/README.md"
    ]
  },
  {
    "id": "astryx:settings",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原设置页",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原设置页；本地资料/隐私/2FA示例状态，不修改账户",
    "evidence": [
      "ui-astryx-pages-final-local/src/settings.tsx",
      "ui-astryx-pages-final-local/src/entry-settings.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-04/settings/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-04/settings/README.md"
    ]
  },
  {
    "id": "astryx:login-card",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原登录卡",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原登录卡；空输入失败、非空loading后失败，不连接认证或成功登录",
    "evidence": [
      "ui-astryx-pages-final-local/src/login-card.tsx",
      "ui-astryx-pages-final-local/src/entry-login-card.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-04/login-card/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-expansion-04/login-card/README.md"
    ]
  },
  {
    "id": "astryx:form-wizard-vertical",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原纵向书籍表单向导",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原纵向书籍表单向导；校验与步骤，原中性媒体占位，不发布书籍",
    "evidence": [
      "ui-astryx-form-fallback-local/src/form-wizard-vertical.tsx",
      "ui-astryx-form-fallback-local/src/entry-form-wizard-vertical.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-form-fallback-01/form-wizard-vertical/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-form-fallback-01/form-wizard-vertical/README.md"
    ]
  },
  {
    "id": "astryx:form-two-column",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原双栏联系表单",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原双栏联系表单；本地校验和submitted状态，不发送申请",
    "evidence": [
      "ui-astryx-form-fallback-local/src/form-two-column.tsx",
      "ui-astryx-form-fallback-local/src/entry-form-two-column.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-form-fallback-01/form-two-column/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/astryx-form-fallback-01/form-two-column/README.md"
    ]
  },
  {
    "id": "jsondiffpatch:reversible-structure-review",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原jsondiffpatch引擎与formatter",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原jsondiffpatch引擎与formatter；原创工作台执行patch/reverse，安全formatter不注入脚本，不是上游整站",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/jsondiffpatch-01/ADAPTATION.md"
    ]
  },
  {
    "id": "rrule:recurrence-workbench",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原RRule引擎与原创UTC规则工作台",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原RRule引擎与原创UTC规则工作台；COUNT先于排除日期，最多50项，不是任务调度器",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/rrule-01/README.md"
    ]
  },
  {
    "id": "xterm:readonly-log-replay",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Xterm与SearchAddon",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Xterm与SearchAddon；26条虚构ANSI只读日志，不是shell或真实终端会话",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/xterm-01/ADAPTATION.md"
    ]
  },
  {
    "id": "ionicons:complete-series",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Ionicons 1357 SVG族",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Ionicons 1357 SVG族；421组三样式及94品牌，官方npm8.1.0产物而非假称tag同字节",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/ionicons-01/PROVENANCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/ionicons-01/README.md"
    ]
  },
  {
    "id": "dmn-js:decision-table-editor",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原DMN CheckOrder完整四规则决策表",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原DMN CheckOrder完整四规则决策表；编辑单元格/撤销/上下文，不执行后端规则",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/dmn-table-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/dmn-table-01/README.md"
    ]
  },
  {
    "id": "diff2html:multi-file-patch-reader",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Diff2HTML UI/解析器",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Diff2HTML UI/解析器；三文件原创patch及六种配置，折叠/同步滚动，不提交或应用补丁",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/diff2html-01/multi-file-patch/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/diff2html-01/multi-file-patch/README.md"
    ]
  },
  {
    "id": "radix-icons:official-series",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Radix 332 SVG一族",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Radix 332 SVG一族；本地浏览器不是官方全站",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/icon-series-next-01/radix/PROVENANCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/icon-series-next-01/radix/README.md"
    ]
  },
  {
    "id": "iconoir:official-series",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Iconoir 1671 SVG一族",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Iconoir 1671 SVG一族；1383 regular加288 solid，不当1671种不同语义",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/icon-series-next-01/iconoir/PROVENANCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/icon-series-next-01/iconoir/README.md"
    ]
  },
  {
    "id": "akar-icons:official-series",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Akar 454 SVG一族",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Akar 454 SVG一族；保原别名，不造样式",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/akar-01/PROVENANCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/akar-01/README.md"
    ]
  },
  {
    "id": "eva-icons:official-series",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Eva 490 SVG一族",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Eva 490 SVG一族；246 fill加244 outline，含10品牌标记",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/eva-01/PROVENANCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/eva-01/README.md"
    ]
  },
  {
    "id": "material-symbols:official-series",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Material Symbols选定218个Rounded24px",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Material Symbols选定218个Rounded24px；不是全部4157名称",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/material-selected-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/material-selected-01/README.md"
    ]
  },
  {
    "id": "majesticons:official-series",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Majesticons 760 SVG",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Majesticons 760 SVG；380基形双风格，只一族",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/majesticons-01/PROVENANCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/majesticons-01/README.md"
    ]
  },
  {
    "id": "looper:radial-phase-field",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Looper Loop18 Canvas2D循环",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Looper Loop18 Canvas2D循环；原创播放/相位控制，不是业务页面",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/looper-01/radial-field/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/looper-01/radial-field/README.md"
    ]
  },
  {
    "id": "game-icons:attributed-symbol-family",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Game Icons Delapouite 2022枚归属族",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Game Icons Delapouite 2022枚归属族；不是全库4239或Lorc系列",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/game-icons-01/PROVENANCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/game-icons-01/README.md"
    ]
  },
  {
    "id": "bytesize-icons:official-series",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Bytesize 101 SVG",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Bytesize 101 SVG；含2品牌，保原fill/stroke",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/bytesize-01/PROVENANCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/bytesize-01/README.md"
    ]
  },
  {
    "id": "plop:ink-status-timeline",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Plop四步状态时间线及lettering/button",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Plop四步状态时间线及lettering/button；本地演示，system字体，不是真实任务进度",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/plop-01/ink-timeline/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/plop-01/ink-timeline/README.md"
    ]
  },
  {
    "id": "plop:buddy-cast",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Plop六角色SVG及Storybook TheCast/Sizes",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Plop六角色SVG及Storybook TheCast/Sizes；本地属性控制，不是AI助手",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/plop-buddy-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/plop-buddy-01/README.md"
    ]
  },
  {
    "id": "fluidkit:morph-surface",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Fluidkit曲面Bezier/spring",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Fluidkit曲面Bezier/spring；glass/flat，未接LiquidMetal/PaperShaders/caustics",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/fluidkit-01/morph-surface/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/fluidkit-01/morph-surface/README.md"
    ]
  },
  {
    "id": "fluidkit:liquid-menu",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原Fluidkit完整LiquidMenu演示页",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Fluidkit完整LiquidMenu演示页；键盘/翻转/选择，复制禁用，不执行文件操作",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/fluid-menu-01/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/fluid-menu-01/README.md"
    ]
  },
  {
    "id": "meniscus:liquid-navigation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Meniscus五tab/面板/液体曲线",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Meniscus五tab/面板/液体曲线；Camera等文字不是摄像头服务，system字体且无grainPNG",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/meniscus-01/liquid-navigation/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/meniscus-01/liquid-navigation/README.md"
    ]
  },
  {
    "id": "wired:handdrawn-combo",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Wired三套组合框",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Wired三套组合框；选择/键盘/禁用与Check显示值，手绘几何未原生像素验证",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/wired-combo-01/PROVENANCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/wired-combo-01/README.md"
    ]
  },
  {
    "id": "8bitcn:quest-log",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原8bit QuestLog四任务/Accordion、active排首",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原8bit QuestLog四任务/Accordion、active排首；不推进任务状态，PressStart字体改system",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/8bit-quest-01/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/8bit-quest-01/README.md"
    ]
  },
  {
    "id": "latexcss:scholarly-article",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原LaTeX CSS文章机制/表格/注释",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原LaTeX CSS文章机制/表格/注释；system衬线字体、静态Unicode公式，原创SVG替远程照片，不是MathJax数学排版器",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/latex-01/article/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/latex-01/article/README.md"
    ]
  },
  {
    "id": "tinysynth:sound-design-console",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原TinySynth 128音色/4振荡器/AHDSR/键盘",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原TinySynth 128音色/4振荡器/AHDSR/键盘；用户触发音频，无MIDI文件/硬件；logo修复由父集成，声音未原生验收",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/tinysynth-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/tinysynth-01/README.md"
    ]
  },
  {
    "id": "maki:cartographic-poi-family",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Maki 215个15px地图符号",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Maki 215个15px地图符号；一系列",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/maki-01/PROVENANCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/maki-01/README.md"
    ]
  },
  {
    "id": "wavedrom:timing-diagram-editor",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原WaveDrom/CodeMirror编辑及五泳道fixture",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原WaveDrom/CodeMirror编辑及五泳道fixture；真实SVG引擎，文本菜单代图标，无导出",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/wavedrom-editor-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/wavedrom-editor-01/README.md"
    ]
  },
  {
    "id": "flag-icons:country-symbol-family",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原flag-icons 542 SVG",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原flag-icons 542 SVG；271代码双比例，不等同271国家",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/flag-icons-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/flag-icons-01/README.md"
    ]
  },
  {
    "id": "siriwave:fluorescent-voice-wave",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原SiriWave iOS9曲线及参数",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原SiriWave iOS9曲线及参数；非麦克风/音频输入，Canvas像素未验",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/siriwave-01/voice-wave/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/siriwave-01/voice-wave/README.md"
    ]
  },
  {
    "id": "bubbly:ambient-bubble-surface",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Bubbly红色24圆泡预设",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Bubbly红色24圆泡预设；非整个Vue选择站，Canvas像素未验",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/bubbly-01/bubble-surface/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/bubbly-01/bubble-surface/README.md"
    ]
  },
  {
    "id": "svgomg:vector-optimization-inspector",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原SVGOMG Material UI/car示例/SVGO与gzip",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原SVGOMG Material UI/car示例/SVGO与gzip；worker改有界本地执行、SVG置惰性img，无导出",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/svgomg-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/svgomg-01/README.md"
    ]
  },
  {
    "id": "fontawesome-free:interface-symbol-family",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原FontAwesome Free 2274 solid/regular SVG",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原FontAwesome Free 2274 solid/regular SVG；无Brands/Pro/font，图形CCBY4",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/fontawesome-free-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/fontawesome-free-01/README.md"
    ]
  },
  {
    "id": "papercss:paper-disclosure-notes",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原PaperCSS四折叠段及原CSS",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原PaperCSS四折叠段及原CSS；去Google字体，原checkbox展开机制",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/paper-01/paper-notes/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/paper-01/paper-notes/README.md"
    ]
  },
  {
    "id": "doodlecss:handdrawn-form-sheet",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原DoodleCSS完整Form与七SVG",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原DoodleCSS完整Form与七SVG；文件/密码禁用，旧input类型fallback披露",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/doodle-01/form-sheet/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/doodle-01/form-sheet/README.md"
    ]
  },
  {
    "id": "tuftecss:margin-note-essay",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原Tufte CSS边注排版",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Tufte CSS边注排版；原创中文正文/二SVG与system衬线字体，不冒称原图片或ETBook",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/tufte-01/article/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/tufte-01/article/README.md"
    ]
  },
  {
    "id": "chartxkcd:handdrawn-data-story",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原ChartXKCD Plan/Reality十月线图及tooltip/filter",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原ChartXKCD Plan/Reality十月线图及tooltip/filter；字体helper禁用，system字体非原手写字体",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/chartxkcd-01/income-line/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/chartxkcd-01/income-line/README.md"
    ]
  },
  {
    "id": "nutshell:expandable-explanation-essay",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Nutshell递归展开泡及本地render",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Nutshell递归展开泡及本地render；固定可信文字节选，无远程URL/GIF/iframe，不是普通details替代",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/nutshell-01/inline-essay/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/nutshell-01/inline-essay/README.md"
    ]
  },
  {
    "id": "loopy:feedback-system-simulation",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原LOOPY v1.1双节点编辑/绘画/拖动/橡皮/信号传播",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原LOOPY v1.1双节点编辑/绘画/拖动/橡皮/信号传播；PNG工具图标换文字CSS，无文件/云服务，原生手势未验",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/loopy-workspace-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/loopy-workspace-01/README.md"
    ]
  },
  {
    "id": "twemoji:color-emoji-family",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Twemoji 1422单码点子集",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Twemoji 1422单码点子集；非全库4009，排除肤色修饰及序列",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/twemoji-subset-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/twemoji-subset-01/README.md"
    ]
  },
  {
    "id": "vivus:drawn-camera-scene",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Vivus三快门SVG与timing/dist",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Vivus三快门SVG与timing/dist；手动播放，初始完成态；测试长度桩不能证明原生路径几何",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/vivus-01/shutter-trio/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/vivus-01/shutter-trio/README.md"
    ]
  },
  {
    "id": "poline:spatial-palette-picker",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Poline选择器与引擎",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Poline选择器与引擎；原近似HSL→LCH不是严格色彩转换，真实控件/状态",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/poline-01/palette-picker/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/poline-01/palette-picker/README.md"
    ]
  },
  {
    "id": "healthicons:clinical-research-symbol-family",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Healthicons 2128 SVG四规格",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Healthicons 2128 SVG四规格；CC0图标非网站MIT；11脚本，大文本缓存淘汰不是已证加载失败",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/healthicons-01/PROVENANCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/healthicons-01/README.md"
    ]
  },
  {
    "id": "reactmotion:spring-ball-reorder",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原ReactMotion demo2十一球网格/弹簧",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原ReactMotion demo2十一球网格/弹簧；不承诺键盘排序，原生拖动/像素未验",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/reactmotion-01/spring-balls/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/reactmotion-01/spring-balls/README.md"
    ]
  },
  {
    "id": "learngitbranching:visual-command-lessons",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原LearnGitBranching 36关卡中英与本地Git解析/图/rebase",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原LearnGitBranching 36关卡中英与本地Git解析/图/rebase；不操作真实仓库，其他29语言移除",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/learngit-01/SOURCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/learngit-01/README.md"
    ]
  },
  {
    "id": "mono-icons:compact-outline-family",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Mono 180 SVG一族",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Mono 180 SVG一族；本地浏览器",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/icon-series-next-01/mono/PROVENANCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/icon-series-next-01/mono/README.md"
    ]
  },
  {
    "id": "momentum:kinetic-countdown",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Momentum 1–60惯性滑块/倒计时",
    "reason": "在明确演示边界内保留；未发现本轮新增已证不可达核心操作或假成功。原生效果未验不等于已证明失败。",
    "deliveredScope": "原Momentum 1–60惯性滑块/倒计时；隐藏暂停保秒数，不是后台提醒",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/momentum-01/countdown/SOURCE-EVIDENCE.json",
      "ui-runtime-health-integration/apps/atlas-sample/batches/momentum-01/countdown/README.md"
    ]
  },
  {
    "id": "kokonut:receipt-printer",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "可撕纸条收据打印机（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "收据打印/撕纸物理动画；默认咖啡店虚构票据，不连接打印机或付款。",
    "evidence": [
      "batches/kokonut-01/receipt-printer.tsx",
      "batches/kokonut-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:page-flip",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可拖拽纸页翻书（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "原默认书页的翻页与单双页布局，不是文档导入阅读器。",
    "evidence": [
      "batches/kokonut-01/page-flip.tsx",
      "batches/kokonut-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:detent-dial",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "段落吸附旋钮（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "本地温度刻度旋钮，指针/键盘调整，不控制恒温器。",
    "evidence": [
      "batches/kokonut-01/detent-dial.tsx",
      "batches/kokonut-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:pull-cord",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "弹性拉绳开关（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "绳索拉动与灯开关本地状态，不接设备。",
    "evidence": [
      "batches/kokonut-01/pull-cord.tsx",
      "batches/kokonut-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:liquid-gauge",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "液面晃动容量表（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "本地百分比与液面弹簧/气泡呈现，不是实时监测。",
    "evidence": [
      "batches/kokonut-01/liquid-gauge.tsx",
      "batches/kokonut-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:split-flap-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "机械翻牌信息屏（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "固定航班提示词翻牌循环，不接航班信息。",
    "evidence": [
      "batches/kokonut-01/split-flap-text.tsx",
      "batches/kokonut-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:activity-terrain",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "活动热力地形（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "固定活动数据的 Canvas 地形/命中提示，不读取用户贡献记录。",
    "evidence": [
      "batches/kokonut-02/activity-terrain.tsx",
      "batches/kokonut-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:seat-map",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "交互式座位图（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "电影座位占用/层级/选择限制；Continue 未传回调，不完成订票。",
    "evidence": [
      "batches/kokonut-02/seat-map.tsx",
      "batches/kokonut-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:ai-agent-lanes",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "多智能体执行轨道（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "固定多 Agent 泳道脚本和答案，暂停/进度为本地演示，不执行任务。",
    "evidence": [
      "batches/kokonut-02/ai-agent-lanes.tsx",
      "batches/kokonut-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:synced-transcript",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "播放同步逐句文稿（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "模拟文字播放时钟/速度/跟随与点击定位；无真实音频。",
    "evidence": [
      "batches/kokonut-02/synced-transcript.tsx",
      "batches/kokonut-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:spending-ring",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "消费分布圆环（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "固定支出分类的环形选择与明细，不读账户。",
    "evidence": [
      "batches/kokonut-02/spending-ring.tsx",
      "batches/kokonut-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:status-island",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "动态状态岛（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "上传/导出/归档的固定进度模拟，不处理文件。",
    "evidence": [
      "batches/kokonut-02/status-island.tsx",
      "batches/kokonut-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:ascii-wake",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "字符立方体拖尾（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "ASCII Canvas 指针尾迹与点击波纹，材质实验而非终端。",
    "evidence": [
      "batches/bencho-01/ascii-wake.tsx",
      "batches/bencho-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:slingshot",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "弹力带弹弓（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "弹弓球体与边界碰撞/回位物理实验。",
    "evidence": [
      "batches/bencho-01/slingshot.tsx",
      "batches/bencho-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:todo-tower",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可消除任务积木塔（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "六条本地待办的物理堆叠及 Done 移除，不同步任务服务。",
    "evidence": [
      "batches/bencho-01/todo-tower.tsx",
      "batches/bencho-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:heat-word",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "指针热力点阵（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "热感字形 Canvas 与点击换形实验。",
    "evidence": [
      "batches/bencho-01/heat-word.tsx",
      "batches/bencho-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:emoji-reactions",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "变形表情反应条（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "本地表情计数和飞行动画，不发送社交反应。",
    "evidence": [
      "batches/bencho-01/emoji-reactions.tsx",
      "batches/bencho-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:context-meter",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "上下文压缩仪表（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "固定上下文构成及 Compact/Undo 本地状态，不整理真实模型记忆。",
    "evidence": [
      "batches/bencho-01/context-meter.tsx",
      "batches/bencho-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:wake-slider",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "细栅栏拖曳波浪（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "滑块数值与尾波动画，独立输入实验。",
    "evidence": [
      "batches/bencho-01/wake-slider.tsx",
      "batches/bencho-01/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:ai-diff-review",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "AI差异审阅卡（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "固定文件差异的流入/逐块接受拒绝/撤销，不写文件或运行测试。",
    "evidence": [
      "batches/kokonut-03/ai-diff-review.tsx",
      "batches/kokonut-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:ai-inline-edit",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "行内AI编辑浮层（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "选中原段落、固定 demoRewrite、预览并本地应用，不调用模型。",
    "evidence": [
      "batches/kokonut-03/ai-inline-edit.tsx",
      "batches/kokonut-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:ai-memory",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "AI记忆卡片（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "固定记忆条目及演示回复，可编辑/遗忘/撤销；非持久记忆。",
    "evidence": [
      "batches/kokonut-03/ai-memory.tsx",
      "batches/kokonut-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:ai-branches",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "AI分支对话（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "固定对话树编辑与 demoReply 分支，非模型重新生成。",
    "evidence": [
      "batches/kokonut-03/ai-branches.tsx",
      "batches/kokonut-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:ai-citations",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "引用出处预览（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "原引用片段预览和来源列表；链接为显式外链，iframe 开窗能力未验证。",
    "evidence": [
      "batches/kokonut-03/ai-citations.tsx",
      "batches/kokonut-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:ai-message-queue",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "AI消息队列（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。存在本地模拟成功或空业务回调，不能当实际服务结果，需透明提示。",
    "deliveredScope": "可编辑/移除/重排/插队/暂停的本地消息队列；Done/tests pass 是脚本回复，未执行代码。",
    "evidence": [
      "batches/kokonut-03/ai-message-queue.tsx",
      "batches/kokonut-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:ai-redact",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "敏感文本遮盖（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "本地匹配遮盖/占位符还原和固定回复，不是完整安全脱敏保证或远端模型调用。",
    "evidence": [
      "batches/kokonut-03/ai-redact.tsx",
      "batches/kokonut-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:ai-tool-approval",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "工具调用审批卡（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "固定工具请求的批准/拒绝/记住选择与脚本输出，不执行命令。",
    "evidence": [
      "batches/kokonut-04/ai-tool-approval.tsx",
      "batches/kokonut-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:ai-voice",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "AI语音波形录制演示（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "createVoiceSimulator 的录音/发送/波形状态，无麦克风或音频录制。",
    "evidence": [
      "batches/kokonut-04/ai-voice.tsx",
      "batches/kokonut-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:apple-activity-card",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "活动圆环卡片（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "固定活动圆环与活动数据卡，不读取健康数据。",
    "evidence": [
      "batches/kokonut-04/apple-activity-card.tsx",
      "batches/kokonut-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:ai-token-alternatives",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "词元候选替换（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "固定 token 候选及 demoCompose，不代表模型概率或真实采样。",
    "evidence": [
      "batches/kokonut-04/ai-token-alternatives.tsx",
      "batches/kokonut-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:boarding-pass",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "动态更新登机牌（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "默认登机牌与定时示例状态变换，不连接航班服务。",
    "evidence": [
      "batches/kokonut-04/boarding-pass.tsx",
      "batches/kokonut-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:card-flip",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "双面翻转卡（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "原正反面卡片与弹簧翻转，组件而非完整产品页。",
    "evidence": [
      "batches/kokonut-04/card-flip.tsx",
      "batches/kokonut-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:carousel-cards",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "层叠轮播卡片（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "默认旅行卡片的滚动/收藏/层级导航；选择回调未接服务，媒体需按适配记录看待。",
    "evidence": [
      "batches/kokonut-05/carousel-cards.tsx",
      "batches/kokonut-05/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:card-stack",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "拖动卡片堆（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。存在本地模拟成功或空业务回调，不能当实际服务结果，需透明提示。",
    "deliveredScope": "原印刷品 SVG 卡堆/抛掷/详情；Add to cart 可选回调未传，不能加购。",
    "evidence": [
      "batches/kokonut-05/card-stack.tsx",
      "batches/kokonut-05/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:cradle-text",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "摆球文字（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "Momentum 字母钟摆/碰撞动画实验。",
    "evidence": [
      "batches/kokonut-05/cradle-text.tsx",
      "batches/kokonut-05/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:currency-transfer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "模拟转账进度卡（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "默认汇率/金额与自动完成转账时间线；不交易；复制仅成功后打勾，拒绝无成功反馈。",
    "evidence": [
      "batches/kokonut-05/currency-transfer.tsx",
      "batches/kokonut-05/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:halftone-background",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "半色调点阵背景（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "Canvas 半调点阵与放大镜及默认文案，非完整营销网站。",
    "evidence": [
      "batches/kokonut-05/halftone-background.tsx",
      "batches/kokonut-05/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:dot-field",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "动态点阵场（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "Canvas 点阵指针变形和默认内容，材质实验。",
    "evidence": [
      "batches/kokonut-06/dot-field.tsx",
      "batches/kokonut-06/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:flow-field",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "流线向量场（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "Canvas 流场与指针变化，非工具结果数据。",
    "evidence": [
      "batches/kokonut-06/flow-field.tsx",
      "batches/kokonut-06/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:marker-text",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "荧光标记文字（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "默认文字标记绘制/重播与完成状态，排版动效组件。",
    "evidence": [
      "batches/kokonut-06/marker-text.tsx",
      "batches/kokonut-06/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:location-picker",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "位置选择卡（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "合成街区图与本地位置选择/确认；模拟地址查找，不定位或地理编码服务。",
    "evidence": [
      "batches/kokonut-06/location-picker.tsx",
      "batches/kokonut-06/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:morph-popover",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "连续变形浮层（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。存在本地模拟成功或空业务回调，不能当实际服务结果，需透明提示。",
    "deliveredScope": "原变形反馈表单；默认 pretendSend 700ms 后 Thanks，并未发送。",
    "evidence": [
      "batches/kokonut-06/morph-popover.tsx",
      "batches/kokonut-06/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:marking-menu",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "手势径向菜单（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "方向菜单/长按/键盘选择与本地选中反馈，不执行业务命令。",
    "evidence": [
      "batches/kokonut-06/marking-menu.tsx",
      "batches/kokonut-06/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:liquid-slider",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "液态滑块（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "本地数值液态滑块与 SVG 波形/气泡，不是计量设备。",
    "evidence": [
      "batches/kokonut-07/liquid-slider.tsx",
      "batches/kokonut-07/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:liquid-glass-card",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "黑胶唱片播放器（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "原唱片转动/曲目/进度/暂停状态；仅模拟播放，无音频。",
    "evidence": [
      "batches/kokonut-07/liquid-glass-card.tsx",
      "batches/kokonut-07/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:shape-hero",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "几何图形主视觉（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "默认几何形状与标题的物理 hero 展示，不是完整网站。",
    "evidence": [
      "batches/kokonut-07/shape-hero.tsx",
      "batches/kokonut-07/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:plucked-text",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "拨弦文字（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "Good vibrations 拨弦文字波动实验。",
    "evidence": [
      "batches/kokonut-07/plucked-text.tsx",
      "batches/kokonut-07/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:scroll-index",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "滚动章节索引（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "原默认文章及 h2/h3 索引、点击/拖动定位；不是空 children，保留阅读组件。",
    "evidence": [
      "batches/kokonut-07/scroll-index.tsx",
      "batches/kokonut-07/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:slot-picker",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "时段选择器（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。存在本地模拟成功或空业务回调，不能当实际服务结果，需透明提示。",
    "deliveredScope": "固定日期可用时段/时长/拖动/键盘；未传 onBook 仍 booked，本地选择不代表预约。",
    "evidence": [
      "batches/kokonut-07/slot-picker.tsx",
      "batches/kokonut-07/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:signature-pad",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "速度感应签名板（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "Canvas 本地笔迹、Undo/Clear，不签署文书或提交。",
    "evidence": [
      "batches/kokonut-07/signature-pad.tsx",
      "batches/kokonut-07/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:stack-panel",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "层叠信息面板（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "三层工作区设置导航与本地 theme/density/alerts 状态，不改变账户设置。",
    "evidence": [
      "batches/kokonut-08/stack-panel.tsx",
      "batches/kokonut-08/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:stay-picker",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "住宿日期选择卡（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。存在本地模拟成功或空业务回调，不能当实际服务结果，需透明提示。",
    "deliveredScope": "示例夜价/日期范围及限制；未传 onReserve 仍 Reserved，不实际订房。",
    "evidence": [
      "batches/kokonut-08/stay-picker.tsx",
      "batches/kokonut-08/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:wheel-picker",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "惯性滚轮选择器（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "多列滚轮的本地吸附值、键盘/拖动，不保存服务设置。",
    "evidence": [
      "batches/kokonut-08/wheel-picker.tsx",
      "batches/kokonut-08/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:uptime-card",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "服务状态时间条（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "固定服务运行历史/时间条与提示，不监测生产服务。",
    "evidence": [
      "batches/kokonut-08/uptime-card.tsx",
      "batches/kokonut-08/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:timezone-planner",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "时区会议规划器（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "默认人员的时区时间窗口和最佳时间搜索，本地推算，不发邀请。",
    "evidence": [
      "batches/kokonut-08/timezone-planner.tsx",
      "batches/kokonut-08/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "kokonut:topo-background",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "等高线纹理背景（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "Canvas 等高线动态背景与默认内容，材质实验。",
    "evidence": [
      "batches/kokonut-08/topo-background.tsx",
      "batches/kokonut-08/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:action-node",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "折角自动化节点（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "节点角落操作展开/选亮，参考局部控件，不是完整节点工作流。",
    "evidence": [
      "batches/bencho-02/action-node.tsx",
      "batches/bencho-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:drag-ball",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "可挤压拖曳球（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "拖动球体形变与回弹，物理实验。",
    "evidence": [
      "batches/bencho-02/drag-ball.tsx",
      "batches/bencho-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:escape",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "躲避指针控件（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "躲避指针并最终可按的按钮，趣味交互，不是常规业务按钮。",
    "evidence": [
      "batches/bencho-02/escape.tsx",
      "batches/bencho-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:eye-tracker",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "跟随指针的双眼（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "眼睛跟随、固定短句打字与表情，非对话模型。",
    "evidence": [
      "batches/bencho-02/eye-tracker.tsx",
      "batches/bencho-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:image-accordion",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "图片伸缩手风琴（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "图片手风琴布局/邻项让位；原图已有本地 SVG 替代，不能称原照片效果。",
    "evidence": [
      "batches/bencho-03/image-accordion.tsx",
      "batches/bencho-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:liq-create",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "液态展开创建菜单（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "胶囊展开菜单，选项只关闭，不创建文件/项目。",
    "evidence": [
      "batches/bencho-03/liq-create.tsx",
      "batches/bencho-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:magnet-select",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "磁性挤压选项（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "磁性选项膨胀和挤压，局部选择控件；素材按本地替代范围。",
    "evidence": [
      "batches/bencho-03/magnet-select.tsx",
      "batches/bencho-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:palette",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "动态配色抽签卡（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "本地调色板生成与颜色过渡，不调用外部设计服务。",
    "evidence": [
      "batches/bencho-03/palette.tsx",
      "batches/bencho-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:particles",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "指针弹簧粒子（交互实验）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "指针推开粒子/点击换形的物理动效。",
    "evidence": [
      "batches/bencho-04/particles.tsx",
      "batches/bencho-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:pull",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "弹性下拉刷新卡（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "下拉阈值后切换固定读数的模拟刷新，不访问余额服务。",
    "evidence": [
      "batches/bencho-04/pull.tsx",
      "batches/bencho-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:seek",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "形变搜索入口（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "搜索入口展开/输入/短暂 busy；没有检索结果或搜索服务。",
    "evidence": [
      "batches/bencho-04/seek.tsx",
      "batches/bencho-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:slosh",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "重量感液体滑块（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "滑块液体惯性与数值变化，独立输入材质。",
    "evidence": [
      "batches/bencho-04/slosh.tsx",
      "batches/bencho-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:stacked-bars",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可重组堆叠柱状图（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "固定数据日/周柱条重组与提示，不是实时分析面板。",
    "evidence": [
      "batches/bencho-04/stacked-bars.tsx",
      "batches/bencho-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:step-player",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "分步播放进度条（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "本地步骤进度/播放暂停/节点选择，不执行实际任务或媒体。",
    "evidence": [
      "batches/bencho-04/step-player.tsx",
      "batches/bencho-04/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:time-scrubber",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "惯性时间尺（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "时间刻度拖动/甩动/吸附，局部输入组件。",
    "evidence": [
      "batches/bencho-05/time-scrubber.tsx",
      "batches/bencho-05/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "icons:lucide",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Lucide 完整图标系列（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "Lucide 系列名称搜索、60项分页、尺寸、原 SVG 源选择；不触发剪贴板，不合并其他系列。",
    "evidence": [
      "batches/icon-series/lucide-usage.js",
      "batches/icon-series/lucide-source.zip!/generator/runtime.js",
      "batches/icon-series/lucide-source.zip!/manifest.json"
    ]
  },
  {
    "id": "icons:tabler",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Tabler Icons 完整图标系列（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "Tabler 系列搜索/分页/原样式筛选/尺寸/源码；单系列保留，不按 glyph 分条。",
    "evidence": [
      "batches/icon-series/tabler-usage.js",
      "batches/icon-series/tabler-source.zip!/generator/runtime.js",
      "batches/icon-series/tabler-source.zip!/manifest.json"
    ]
  },
  {
    "id": "icons:ph",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Phosphor Icons 完整图标系列（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "Phosphor 系列搜索/分页/原样式/源码；整包 srcdoc 大于缓存预算是成本风险，不因该风险删除系列。",
    "evidence": [
      "batches/icon-series/ph-usage.js",
      "batches/icon-series/ph-source.zip!/generator/runtime.js",
      "batches/icon-series/ph-source.zip!/manifest.json"
    ]
  },
  {
    "id": "icons:heroicons",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Heroicons 完整图标系列（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "Heroicons 系列搜索/分页/原样式/源码；尺寸仅预览，不改源几何。",
    "evidence": [
      "batches/icon-series/heroicons-usage.js",
      "batches/icon-series/heroicons-source.zip!/generator/runtime.js",
      "batches/icon-series/heroicons-source.zip!/manifest.json"
    ]
  },
  {
    "id": "icons:octicon",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Octicons 完整图标系列（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "Octicons 系列搜索/分页/原 SVG 源码；不是代码托管产品界面。",
    "evidence": [
      "batches/icon-series/octicon-usage.js",
      "batches/icon-series/octicon-source.zip!/generator/runtime.js",
      "batches/icon-series/octicon-source.zip!/manifest.json"
    ]
  },
  {
    "id": "icons:bi",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Bootstrap Icons 完整图标系列（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "Bootstrap Icons 系列搜索/分页/原 SVG 源码；单系列，不拆 glyph。",
    "evidence": [
      "batches/icon-series/bi-usage.js",
      "batches/icon-series/bi-source.zip!/generator/runtime.js",
      "batches/icon-series/bi-source.zip!/manifest.json"
    ]
  },
  {
    "id": "bencho:asset-swap",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "资产交换动效卡（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "默认币种/金额换算和上下互换，不连接钱包或交易；汇率为固定样例。",
    "evidence": [
      "batches/bencho-02/asset-swap.tsx",
      "batches/bencho-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:card-swap",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "景深抛卡堆（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "原照片卡堆点击/甩动换序；当前图片为本地替代 SVG，不等于原照片视觉。",
    "evidence": [
      "batches/bencho-02/card-swap.tsx",
      "batches/bencho-02/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "bencho:image-compare",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "惯性图片比较器（组件参考）",
    "reason": "保留原独立交互/展示参考，范围限定为实际默认演示。",
    "deliveredScope": "分割线惯性/弯曲图像比较；本地替代 SVG 对照，不代表真实摄影修图结果。",
    "evidence": [
      "batches/bencho-03/image-compare.tsx",
      "batches/bencho-03/source.zip!/src/main.tsx"
    ]
  },
  {
    "id": "uiverse:clock-material",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "双针是等待动效而非真实时间",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "双针是等待动效而非真实时间；原CSS、用户启动",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/uiverse-materials-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/uiverse-materials-01/clock.html"
    ]
  },
  {
    "id": "verlet:translucent-cloth",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "20×20原约束布料",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "20×20原约束布料；Canvas/指针几何既有测试为桩，非真实布料工程",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/verlet-01/ADAPTATION.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/verlet-01/index.html"
    ]
  },
  {
    "id": "mafs:bezier-construction",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原四控制点Bernstein曲线",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原四控制点Bernstein曲线；停止保t但Play重启，不假称续播",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/mafs-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/mafs-01/bezier-construction.html"
    ]
  },
  {
    "id": "zdog:spatial-houses",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原双屋SVG投影与拖转",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原双屋SVG投影与拖转；原屋几何保留，原创响应宿主",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/zdog-01/ADAPTATION.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/zdog-01/index.html"
    ]
  },
  {
    "id": "echarts:parallel-strategy-lens",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原ECharts刷选action真实active集合",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原ECharts刷选action真实active集合；原创12策略数据/宿主，不是上游整页",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/echarts-parallel-01/ADAPTATION.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/echarts-parallel-01/index.html"
    ]
  },
  {
    "id": "paperjs:boolean-material",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Paper布尔引擎与方环模型",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Paper布尔引擎与方环模型；仅并/交/差三操作，去自主环绕",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/paperjs-01/ADAPTATION.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/paperjs-01/index.html"
    ]
  },
  {
    "id": "venn:evidence-overlap",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原venn优化图",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原venn优化图；原创12资料及精确成员筛选，圆面积仅近似",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/venn-01/ADAPTATION.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/venn-01/index.html"
    ]
  },
  {
    "id": "impress:spatial-brief",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原CSS3D引擎和demo位置",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原CSS3D引擎和demo位置；六章原创文字，非上游宣传文或真实报告",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/impress-01/ADAPTATION.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/impress-01/index.html"
    ]
  },
  {
    "id": "iconpark:multicolor-exodus",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "94原多色SVG一族",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "94原多色SVG一族；浏览壳原创，语义与其他族可重叠",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/iconpark-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/iconpark-01/index.html"
    ]
  },
  {
    "id": "react-awesome-query-builder:nested-document-conditions",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Query/Builder/BasicConfig条件UI",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Query/Builder/BasicConfig条件UI；四本地字段，不执行数据库查询",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/raqb-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/raqb-01/index.html"
    ]
  },
  {
    "id": "codehike:official-scrollycoding",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原七章Scrollycoding、Selection/Scroller/Pre",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原七章Scrollycoding、Selection/Scroller/Pre；构建时高亮，代码不执行",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/codehike-01/ADAPTATION.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/codehike-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/codehike-01/index.html"
    ]
  },
  {
    "id": "pixelarticons:exodus-pixel-family",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "64原24px像素SVG选集",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "64原24px像素SVG选集；一族非64新UI，不能凭DOM称像素完美",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/pixelart-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/pixelart-01/index.html"
    ]
  },
  {
    "id": "toast-ui:local-image-studio",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原TOAST完整编辑菜单",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原TOAST完整编辑菜单；原创SVG画面，上传/下载禁用，Canvas解码未原生验证",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/toast-image-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/toast-image-01/index.html"
    ]
  },
  {
    "id": "react-piano:local-note-keyboard",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原13键ControlledPiano",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原13键ControlledPiano；声音为本地正弦非钢琴采样，用户启用后才发声",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/react-piano-01/ADAPTATION.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/react-piano-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/react-piano-01/index.html"
    ]
  },
  {
    "id": "fullcalendar:local-week-planner",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原FullCalendar栅格/模型",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原FullCalendar栅格/模型；原创UTC对话框与三示例事件，无真实日历",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/fullcalendar-01/ADAPTATION.md",
      "ui-fullcalendar-local/src/main.js",
      "ui-runtime-health-integration/apps/atlas-sample/batches/fullcalendar-01/index.html"
    ]
  },
  {
    "id": "rapidoc:offline-api-reader",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原RapiDoc解析/阅读与五合成API",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原RapiDoc解析/阅读与五合成API；Try/Auth/外部spec/Copy禁用，不发请求",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/rapidoc-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/rapidoc-01/index.html"
    ]
  },
  {
    "id": "openseadragon:local-space-reader",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Viewer/HTMLDrawer/Navigator",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Viewer/HTMLDrawer/Navigator；原创单幅SVG，不是多级瓦片或上游完整页",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/openseadragon-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/openseadragon-01/index.html"
    ]
  },
  {
    "id": "recogito:text-report-annotations",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原选区/注释弹层及W3C锚点",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原选区/注释弹层及W3C锚点；原创报告，内存编辑非持久同步",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/recogito-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/recogito-01/index.html"
    ]
  },
  {
    "id": "spring:goo-blobs",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原goo-blobs三级useTrail/融合矩阵",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原goo-blobs三级useTrail/融合矩阵；宿主暂停与坐标适配，非流体模拟",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/spring-goo-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/spring-goo-01/index.html"
    ]
  },
  {
    "id": "speedscope:synthetic-agent-flamegraph",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原speedscope三视图/GLSL",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原speedscope三视图/GLSL；两合成trace非实测性能，GPU成功路径只替身验证",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/speedscope-01/ADAPTATION.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/speedscope-01/index.html"
    ]
  },
  {
    "id": "bpmn-js:local-review-modeler",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原BPMN Modeler",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原BPMN Modeler；原glyph文本转换，原创非执行XML，不运行流程",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/bpmn-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/bpmn-01/index.html"
    ]
  },
  {
    "id": "timelinejs:research-story",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原Timeline时间尺度/阅读",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Timeline时间尺度/阅读；固定虚构文字故事，媒体与任意日期字符串导入不支持",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/timelinejs-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/timelinejs-01/index.html"
    ]
  },
  {
    "id": "wgo:branching-go-study",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原WGo2.3.1阅读器/SGF分支和提子",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原WGo2.3.1阅读器/SGF分支和提子；原创9×9教学非实战录像/AI",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/wgo-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/wgo-01/index.html"
    ]
  },
  {
    "id": "openmoji:exodus-selection",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "OpenMoji120基形双色240SVG",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "OpenMoji120基形双色240SVG；一精选族非全部4495",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/openmoji-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/openmoji-01/index.html"
    ]
  },
  {
    "id": "react-arborist:budget-hierarchy",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原BudgetTree15行和递归预算",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原BudgetTree15行和递归预算；键盘辅助调用原move，隐藏恢复重置",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/arborist-budget-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/arborist-budget-01/index.html"
    ]
  },
  {
    "id": "pepicons:exodus-selection",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Pepicons113基形三风格339SVG",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "Pepicons113基形三风格339SVG；不是全库1275基形",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/pepicons-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/pepicons-01/index.html"
    ]
  },
  {
    "id": "fluent-system-color:exodus-selection",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Fluent Color精选100个24px基形",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "Fluent Color精选100个24px基形；原渐变隔离，不是Fluent Emoji全库",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/fluent-color-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/fluent-color-01/index.html"
    ]
  },
  {
    "id": "react-avatar-editor:crop-studio",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原完整Avatar demo需自行选本地PNG/JPEG/WebP",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原完整Avatar demo需自行选本地PNG/JPEG/WebP；无默认照片，Export仅页面内预览",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/avatar-crop-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/avatar-crop-01/index.html"
    ]
  },
  {
    "id": "shadcn-examples:mail-workspace",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原三栏邮件阅读/未读/分栏",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原三栏邮件阅读/未读/分栏；搜索及邮件动作原无实现且可见说明，不连接邮箱",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/shadcn-mail-01/mail-workspace/README.md",
      "ui-shadcn-mail-local/main.tsx",
      "ui-shadcn-mail-local/src/app/(app)/examples/mail/components/mail.tsx",
      "ui-shadcn-mail-local/src/app/(app)/examples/mail/components/mail-display.tsx",
      "ui-runtime-health-integration/apps/atlas-sample/batches/shadcn-mail-01/mail-workspace/index.html"
    ]
  },
  {
    "id": "shadcn-admin:conversation-workspace",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原Chat列表/搜索/对话及NewChat本地回执",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Chat列表/搜索/对话及NewChat本地回执；发送/附件/通话禁用",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/shadcn-admin-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/shadcn-admin-01/chats.html"
    ]
  },
  {
    "id": "shadcn-admin:settings-workspace",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原五设置页和验证",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原五设置页和验证；本地JSON回执非保存，头像使用原fallback",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/shadcn-admin-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/shadcn-admin-01/settings.html"
    ]
  },
  {
    "id": "tailwind-blog:tagged-editorial-archive",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原两篇MDX及ListLayout标签分页",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原两篇MDX及ListLayout标签分页；仅内存两文章路由，非完整Next站点",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/tailwind-reader-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/tailwind-reader-01/archive.html"
    ]
  },
  {
    "id": "tailwind-blog:editorial-reader",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原PostLayout两篇MDX全文与上下篇",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原PostLayout两篇MDX全文与上下篇；无评论/分享服务，system字体",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/tailwind-reader-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/tailwind-reader-01/reader.html"
    ]
  },
  {
    "id": "revealjs:scrolling-animated-brief",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原scroll八个文字/形变/代码章节",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原scroll八个文字/形变/代码章节；两图片视频页明确排除",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/reveal-scroll-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/reveal-scroll-01/index.html"
    ]
  },
  {
    "id": "svar:gantt-task-editor",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原GanttEditor任务/依赖/侧栏",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原GanttEditor任务/依赖/侧栏；Lucide替字体图标，新建日期可能在窗外",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/svar-gantt-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/svar-gantt-01/index.html"
    ]
  },
  {
    "id": "react-mosaic:tabbed-workspace",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原Mosaic六窗/标签/拆分布局",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Mosaic六窗/标签/拆分布局；员工数据虚构，隐藏重置，不是终端",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/react-mosaic-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/react-mosaic-01/index.html"
    ]
  },
  {
    "id": "cmdk:raycast-command-menu",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原RaycastCMDK关键词/动作菜单",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原RaycastCMDK关键词/动作菜单；OpenApplication无系统动作且已说明",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/cmdk-raycast-01/raycast-menu/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/cmdk-raycast-01/raycast-menu/index.html"
    ]
  },
  {
    "id": "tremor-blocks:partition-allocation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原100GB互补分配/Slider",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原100GB互补分配/Slider；Apply/Cancel禁用，非磁盘分区",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/tremor-partition-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/tremor-partition-01/index.html"
    ]
  },
  {
    "id": "tremor-blocks:workspace-package-application",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原三档套餐/特点与表单联动",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原三档套餐/特点与表单联动；仅未发送回执，不是购买/注册",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/tremor-package-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/tremor-package-01/index.html"
    ]
  },
  {
    "id": "tremor-blocks:audit-evidence-reader",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原四组审核与13文档行",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原四组审核与13文档行；Edit/Reupload/download禁用，数据非真实审核",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/tremor-audit-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/tremor-audit-01/index.html"
    ]
  },
  {
    "id": "tremor-blocks:portfolio-performance-report",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原57日期三系列与明细",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原57日期三系列与明细；图例强调不改静态表，非实时行情",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/tremor-portfolio-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/tremor-portfolio-01/index.html"
    ]
  },
  {
    "id": "mantine-ui:authentication-flow",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原登录注册切换/验证",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原登录注册切换/验证；社交禁用，七字符门槛，本地非真实认证",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/mantine-auth-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/mantine-auth-01/index.html"
    ]
  },
  {
    "id": "mantine-ui:contact-information-form",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原完整双栏联系表",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原完整双栏联系表；required校验后未发送提示，邮箱原type=text不验格式",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/mantine-contact-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/mantine-contact-01/index.html"
    ]
  },
  {
    "id": "mantine-ui:responsive-mega-navigation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原mega导航/hover/mobileDrawer",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原mega导航/hover/mobileDrawer；无目的地链接/认证禁用，非完整路由",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/mantine-header-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/mantine-header-01/index.html"
    ]
  },
  {
    "id": "flowbite-admin:pricing-comparison-faq-page",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原三价格卡/12行比较/18FAQ",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原三价格卡/12行比较/18FAQ；月年仅视觉不重算，非真实报价",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/flowbite-pricing-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/flowbite-pricing-01/index.html"
    ]
  },
  {
    "id": "proton:gravity-well-trails",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Proton300粒子/16引力井",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Proton300粒子/16引力井；Canvas像素未验，不是物理精密工具",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/proton-gravity-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/proton-gravity-01/index.html"
    ]
  },
  {
    "id": "skeuos:tactile-controls",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原完整Skeuos控件",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原完整Skeuos控件；Save/send等为样式演示，Google字体移除",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/skeuos-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/skeuos-01/index.html"
    ]
  },
  {
    "id": "sketchbook:datepicker",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Controlled日期选择",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Controlled日期选择；local日期，无界限故事/方向键roving，原Clear可用",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/sketchbook-date-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/sketchbook-date-01/index.html"
    ]
  },
  {
    "id": "98css:desktop-control-showcase",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原98.css37组例",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原98.css37组例；表格选行/原生控件，Tab与窗口按钮无管理逻辑",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/98css-controls-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/98css-controls-01/index.html"
    ]
  },
  {
    "id": "7css:aero-glass-showcase",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原7.css29例/10partial",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原7.css29例/10partial；Lucide替五PNG角色、system字体、非完整桌面",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/seven-css-01/aero/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/seven-css-01/aero/index.html"
    ]
  },
  {
    "id": "liqui:glass-form",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Liqui FormDemo",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Liqui FormDemo；admin500ms错误为模拟，frost回退未验证折射像素",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/liqui-form-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/liqui-form-01/index.html"
    ]
  },
  {
    "id": "codrops:collaborative-type",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原第11章双文字块/脚本光标Replay",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原第11章双文字块/脚本光标Replay；非联网协作，字体/纹理未载",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/collaborative-type-01/README.md",
      "ui-collaborative-type-local/src/main.js",
      "ui-runtime-health-integration/apps/atlas-sample/batches/collaborative-type-01/index.html"
    ]
  },
  {
    "id": "neobrutalism:orbital-star-landing",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原Neobrutalism首页26星",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Neobrutalism首页26星；64指原目录数量，本地CTA只范围回执",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/neobrutalism-landing-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/neobrutalism-landing-01/index.html"
    ]
  },
  {
    "id": "m4tt72:command-navigation-site",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原Svelte命令站",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Svelte命令站；calc/convert/todo真实本地，外发命令明确不执行",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/m4tt-terminal-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/m4tt-terminal-01/index.html"
    ]
  },
  {
    "id": "hugo-paper:paper-reading-site",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原HugoPaper完整Emoji Support",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原HugoPaper完整Emoji Support；真实Hugo模板，单篇菜单主题，不是发布服务",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/hugo-paper-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/hugo-paper-01/index.html"
    ]
  },
  {
    "id": "mattertools:physical-scene-inspector",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原MatterTools Basic/Inspector/Gui",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原MatterTools Basic/Inspector/Gui；50物体与内存快照，图标CSS替换，禁文件出入",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/mattertools-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/mattertools-01/index.html"
    ]
  },
  {
    "id": "meny:folded-page-navigation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原Meny四方向变换/遮罩",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Meny四方向变换/遮罩；原创正文与CSS纹理，非远程iframe菜单",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/fold-01/meny/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/fold-01/meny/index.html"
    ]
  },
  {
    "id": "oridomi:folded-dom-scenes",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原OriDomi clone/panel/shader折叠",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原OriDomi clone/panel/shader折叠；原创HTML纸面替原图片，reduced按钮仍可用",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/fold-01/oridomi/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/fold-01/oridomi/index.html"
    ]
  },
  {
    "id": "paperlab:physical-paper-presets",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Paperlab六纸预设子集",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Paperlab六纸预设子集；WebGL缺失明确fallback，不假冒GPU成功或全19编辑器",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/paperlab-presets-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/paperlab-presets-01/index.html"
    ]
  },
  {
    "id": "augmented-ui:cut-corner-surfaces",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原augmented-ui四角组合CSS",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原augmented-ui四角组合CSS；原创小画廊，不是原完整应用",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/augmented-gallery-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/augmented-gallery-01/index.html"
    ]
  },
  {
    "id": "nescss:pixel-message-balloons",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原NES Storybook气泡六状态",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原NES Storybook气泡六状态；system等宽替PressStart，非聊天服务",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/nes-balloons-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/nes-balloons-01/index.html"
    ]
  },
  {
    "id": "bootstra386:dos-component-language",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原BOOTSTRA十完整静态例",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原BOOTSTRA十完整静态例；Fixedsys/插件不打包，非DOS仿真",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/bootstra386-01/controls/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/bootstra386-01/controls/index.html"
    ]
  },
  {
    "id": "hugo-terminal:terminal-editorial-site",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原HugoTerminal完整About",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原HugoTerminal完整About；真实模板/菜单，system等宽替Fira，不加不存在的复制",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/hugo-terminal-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/hugo-terminal-01/index.html"
    ]
  },
  {
    "id": "chirpy:longform-knowledge-site",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原Chirpy完整Writing a New Post",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Chirpy完整Writing a New Post；真实Jekyll/Tocbot，单篇禁搜索分享",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/chirpy-reader-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/chirpy-reader-01/index.html"
    ]
  },
  {
    "id": "css-doodle:generative-pattern-surface",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原css-doodle README16格规则",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原css-doodle README16格规则；只读非在线编辑器，未用noise去除",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/cssdoodle-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/cssdoodle-01/index.html"
    ]
  },
  {
    "id": "systemcss:monochrome-control-language",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原System.css25例",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原System.css25例；system字体/原SVG，无窗口管理器",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/system-controls-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/system-controls-01/index.html"
    ]
  },
  {
    "id": "obnoxious:expressive-text-motion",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Obnoxious四动效",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Obnoxious四动效；Strobe整段移除，默认静态/Stop/reduced，非像素安全验收",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/obnoxious-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/obnoxious-01/index.html"
    ]
  },
  {
    "id": "psone:console-control-scene",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原PSone五完整章节",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原PSone五完整章节；无图标/游戏标志与未闭字体，非游戏或主机功能",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/psone-css-01/console/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/psone-css-01/console/index.html"
    ]
  },
  {
    "id": "codrops:scroll-typography-scenes",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Codrops Set1十五排版场景",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Codrops Set1十五排版场景；字体fallback明显不同，无Set2，reduced变化需重开",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/scroll-typography-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/scroll-typography-01/index.html"
    ]
  },
  {
    "id": "hanziwriter:stroke-practice-scene",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "原HanziWriter我人永三字数据/识别",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原HanziWriter我人永三字数据/识别；原轨迹匹配非预设完成，非全字库",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/hanziwriter-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/hanziwriter-01/index.html"
    ]
  },
  {
    "id": "zulip:topic-organized-collaboration",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原Zulip消息模板三话题六虚构消息",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Zulip消息模板三话题六虚构消息；原创本地筛选非narrow_state，Lucide替头像/功能图标",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/zulip-reading-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/zulip-reading-01/index.html"
    ]
  },
  {
    "id": "threejs:spatial-element-table",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原Three CSS3D118元素四布局",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原Three CSS3D118元素四布局；非WebGL/化学模拟，遮挡与触控未验",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/three-css3d-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/three-css3d-01/index.html"
    ]
  },
  {
    "id": "tfplayground:decision-boundary-training",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原NN训练/特征/网络控制",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原NN训练/特征/网络控制；真实本地损失，系统符号代字体图标，非远程服务",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/tfplayground-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/tfplayground-01/index.html"
    ]
  },
  {
    "id": "iro:multi-handle-color-wheel",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原iro demo完整布局和色轮引擎",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原iro demo完整布局和色轮引擎；原创外壳/HEX辅助，不称原轮盘有键盘导航",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/iro-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/iro-01/index.html"
    ]
  },
  {
    "id": "seeing-svg:filter-stage-inspector",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "原SeeingSVG Parse及26依赖节点",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原SeeingSVG Parse及26依赖节点；只读固定SVG，无任意导入，滤镜像素未验",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/seeing-svg-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/seeing-svg-01/index.html"
    ]
  },
  {
    "id": "svgfilter:node-material-editor",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原SVGFilter完整节点/参数/预览/代码",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原SVGFilter完整节点/参数/预览/代码；原创初始链，64节点有界，外部媒体禁用",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/svgfilter-editor-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/svgfilter-editor-01/index.html"
    ]
  },
  {
    "id": "codesurfer:code-walkthrough-deck",
    "recommendation": "retain",
    "layer": "page",
    "scopeLabel": "原CodeSurfer单栏4步/双栏5步",
    "reason": "保留明确范围内的原示例/组件或原引擎场景；不因静态、无后台或未做native验收降级。范围差异单列，不冒称全站完整或原生通过。",
    "deliveredScope": "原CodeSurfer单栏4步/双栏5步；照片4步未接，非可执行代码编辑器",
    "evidence": [
      "ui-runtime-health-integration/apps/atlas-sample/batches/codesurfer-01/README.md",
      "ui-runtime-health-integration/apps/atlas-sample/batches/codesurfer-01/index.html"
    ]
  },
  {
    "id": "fancy:physics-attractor-system",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "光标引力与重力拖动实验",
    "reason": "宿主切原Attractor/Gravity两模式和重置；原Matter物理交互非真实物理测量，几何/指针像素未验。不因两个模式同条或无后台降级。",
    "deliveredScope": "宿主切原Attractor/Gravity两模式和重置；原Matter物理交互非真实物理测量，几何/指针像素未验。不因两个模式同条或无后台降级。",
    "evidence": [
      "/tmp/ui-fancy-adapt/src2/main.tsx",
      "/tmp/ui-fancy-adapt/src2/fancy/examples/physics/cursor-attractor-and-gravity-demo.tsx",
      "/tmp/ui-fancy-adapt/src2/fancy/examples/physics/gravity-demo.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "fancy:svg-path-motion",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "SVG路径移动实验",
    "reason": "原曲线路径与自动3秒元素运动、hover放大；照片已换本地原创SVG，非原摄影或业务流程。",
    "deliveredScope": "原曲线路径与自动3秒元素运动、hover放大；照片已换本地原创SVG，非原摄影或业务流程。",
    "evidence": [
      "/tmp/ui-fancy-adapt/src/main.tsx",
      "/tmp/ui-fancy-adapt/src/fancy/examples/blocks/element-along-svg-path-demo.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "fancy:parallax-floating",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "浮动图片视差实验",
    "reason": "原ParallaxFloating图层与指针偏移，媒体改本地几何图；保视差组件，不冒原照片完整场景。",
    "deliveredScope": "原ParallaxFloating图层与指针偏移，媒体改本地几何图；保视差组件，不冒原照片完整场景。",
    "evidence": [
      "/tmp/ui-fancy-adapt/src2/main.tsx",
      "/tmp/ui-fancy-adapt/src2/fancy/examples/image/parallax-floating-demo.tsx",
      "/tmp/ui-fancy-adapt/src2/fancy/components/image/parallax-floating.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "spring:springy-boxes",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "弹簧方块GPU实验",
    "reason": "原35块Three网格与每3秒随机位置/颜色/旋转弹簧过渡；reduced静止。不代表实时数据，原GPU像素未验。",
    "deliveredScope": "原35块Three网格与每3秒随机位置/颜色/旋转弹簧过渡；reduced静止。不代表实时数据，原GPU像素未验。",
    "evidence": [
      "ui-spatial-gpu-next/src/spring/App.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "blode:controls",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地主题参数组件",
    "reason": "原颜色/饱和度/间距等控制器和局部状态，宿主明确不改变账户设置；不是完整应用设置保存。",
    "deliveredScope": "原颜色/饱和度/间距等控制器和局部状态，宿主明确不改变账户设置；不是完整应用设置保存。",
    "evidence": [
      "ui-blode-adapt/preview/src/main.tsx",
      "ui-blode-adapt/preview/src/controls.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "blode:ios-cards",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "展开式编辑卡片",
    "reason": "原selectedId共享布局与List/Item关闭，照片替原创本地插画已明示；是编辑式内容浏览组件，不是真实内容发布。",
    "deliveredScope": "原selectedId共享布局与List/Item关闭，照片替原创本地插画已明示；是编辑式内容浏览组件，不是真实内容发布。",
    "evidence": [
      "ui-blode-spatial/build/ios-cards.tsx",
      "ui-blode-spatial/src/app/ios-cards/ios-cards-block.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "blode:sticky-notes",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "SVG绘画与卷角便签",
    "reason": "原SVG笔迹/颜色/Three卷角，store仅内存；WebGL2不可用时笔迹仍可用但明确不能卷角，不假造GPU成功。复用既往源/生命周期审计，当前再读host。",
    "deliveredScope": "原SVG笔迹/颜色/Three卷角，store仅内存；WebGL2不可用时笔迹仍可用但明确不能卷角，不假造GPU成功。复用既往源/生命周期审计，当前再读host。",
    "evidence": [
      "ui-blode-sticky/build/main.tsx",
      "ui-blode-sticky/build/src/store.ts",
      "ui-blode-sticky/build/src/sticky-notes-block.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "blode:timed-undo",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "限时撤销动作状态",
    "reason": "原10秒倒数/再次点击取消和完成后回初态，只有本地状态；宿主明确不删除账户或真实数据。",
    "deliveredScope": "原10秒倒数/再次点击取消和完成后回初态，只有本地状态；宿主明确不删除账户或真实数据。",
    "evidence": [
      "ui-blode-practical/src/undo.tsx",
      "ui-blode-practical/src/timed-undo-block.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "thinking-orbs:state-explorer",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "九态Canvas视觉反馈",
    "reason": "原ThinkingOrb引擎九状态、暂停/明暗与64/20px示例；无麦克风或模型，九态不计九族。",
    "deliveredScope": "原ThinkingOrb引擎九状态、暂停/明暗与64/20px示例；无麦克风或模型，九态不计九族。",
    "evidence": [
      "ui-thinking-orbs/vault/main.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "pqoqubbw:animated-icons",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "动画图标浏览器",
    "reason": "真实原glyph动画、搜索/精选切换/分页、hover与选择；只原系列入口，不按glyph数量当独立组件数，状态变体也非新族。",
    "deliveredScope": "真实原glyph动画、搜索/精选切换/分页、hover与选择；只原系列入口，不按glyph数量当独立组件数，状态变体也非新族。",
    "evidence": [
      "ui-animated-icons/preview/src/main.tsx",
      "ui-animated-icons/preview/src/model.ts"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "phosphor:duotone-exodus",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "双色图标精选浏览器",
    "reason": "200原双色SVG、中文语义搜索/分页/颜色/选中源码；仅精选不是完整Phosphor。已有基础系列重合依用户指示暂不合并，不假称新增独立设计家族。",
    "deliveredScope": "200原双色SVG、中文语义搜索/分页/颜色/选中源码；仅精选不是完整Phosphor。已有基础系列重合依用户指示暂不合并，不假称新增独立设计家族。",
    "evidence": [
      "ui-phosphor-duotone/src/gallery.js",
      "ui-phosphor-duotone/src/index.html"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "elevenlabs:matrix",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "点阵状态显示",
    "reason": "原7×7帧和数字，默认暂停、选择pulse/snake/wave或数字，非实际Agent遥测；本轮不声称真实可听或native像素验收。",
    "deliveredScope": "原7×7帧和数字，默认暂停、选择pulse/snake/wave或数字，非实际Agent遥测；本轮不声称真实可听或native像素验收。",
    "evidence": [
      "ui-elevenlabs-adapt/preview/src/entry-matrix.tsx",
      "ui-elevenlabs-adapt/preview/src/demos/matrix.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "elevenlabs:waveform",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "波形定位组件",
    "reason": "原AudioScrubber拖动/键盘时间定位，固定数学信号，不录音也不播放；本轮不声称真实可听或native像素验收。",
    "deliveredScope": "原AudioScrubber拖动/键盘时间定位，固定数学信号，不录音也不播放；本轮不声称真实可听或native像素验收。",
    "evidence": [
      "ui-elevenlabs-adapt/preview/src/entry-waveform.tsx",
      "ui-elevenlabs-adapt/preview/src/demos/waveform.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "elevenlabs:audio-player",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地测试音播放器",
    "reason": "原音频播放/暂停/进度/倍速组件，宿主本地产生8秒PCM提示音，无语音/云API；本轮不声称真实可听或native像素验收。",
    "deliveredScope": "原音频播放/暂停/进度/倍速组件，宿主本地产生8秒PCM提示音，无语音/云API；本轮不声称真实可听或native像素验收。",
    "evidence": [
      "ui-elevenlabs-adapt/preview/src/entry-audio-player.tsx",
      "ui-elevenlabs-adapt/preview/src/demos/audio-player.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "elevenlabs:transcript",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "逐词时间轴组件",
    "reason": "预置文字与等距时间戳对合成提示音定位，明确不是语音识别；点击词seek是真原音频元素时间操作；本轮不声称真实可听或native像素验收。",
    "deliveredScope": "预置文字与等距时间戳对合成提示音定位，明确不是语音识别；点击词seek是真原音频元素时间操作；本轮不声称真实可听或native像素验收。",
    "evidence": [
      "ui-elevenlabs-adapt/preview/src/entry-transcript.tsx",
      "ui-elevenlabs-adapt/preview/src/demos/transcript.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "exodus-workbench:merge",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地双栏差异合并",
    "reason": "原CodeMirror Merge左右可编辑、chunk箭头/全部应用、撤销重做与方向切换；宿主原创JSON任务fixture，非执行Agent或代码。",
    "deliveredScope": "原CodeMirror Merge左右可编辑、chunk箭头/全部应用、撤销重做与方向切换；宿主原创JSON任务fixture，非执行Agent或代码。",
    "evidence": [
      "ui-exodus-workbench/preview/src/merge.ts"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "exodus-workbench:json",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地JSON结构编辑",
    "reason": "原JSONEditor minimalist tree/text/preview和搜索排序历史；只JSON语法，不含动态编译Schema/Ace；真实载入/同步内存数据。",
    "deliveredScope": "原JSONEditor minimalist tree/text/preview和搜索排序历史；只JSON语法，不含动态编译Schema/Ace；真实载入/同步内存数据。",
    "evidence": [
      "ui-exodus-workbench/preview/src/json.ts"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "uiw:markdown-workbench",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Markdown编辑与预览",
    "reason": "原UIW格式编辑与split/source/preview，宿主原创文档；HTML和外链图片禁用且明确显示引用说明，不冒完整媒体文档渲染。",
    "deliveredScope": "原UIW格式编辑与split/source/preview，宿主原创文档；HTML和外链图片禁用且明确显示引用说明，不冒完整媒体文档渲染。",
    "evidence": [
      "ui-markdown-workbench/src/main.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "reactgrid:task-workbench",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地任务表格编辑",
    "reason": "原ReactGrid单元格/选区/列宽，宿主批量修改/历史/JSON查看；普通JS求和明确不是公式引擎，不实际批准任务。",
    "deliveredScope": "原ReactGrid单元格/选区/列宽，宿主批量修改/历史/JSON查看；普通JS求和明确不是公式引擎，不实际批准任务。",
    "evidence": [
      "ui-exodus-tools-next/preview/src/grid.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "formbuilder:local-designer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地表单设计与试填",
    "reason": "原formBuilder/formRender添加编辑字段、标准schema导入与结果回显；只本地不提交，文件/HTML/动态富文本插件关闭，不称完整在线问卷服务。",
    "deliveredScope": "原formBuilder/formRender添加编辑字段、标准schema导入与结果回显；只本地不提交，文件/HTML/动态富文本插件关闭，不称完整在线问卷服务。",
    "evidence": [
      "ui-exodus-tools-next/preview/src/form.ts"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "winbox:task-room",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "可移动窗口工作区",
    "reason": "原WinBox移动/尺寸/最小化/重开，宿主原创checklist、真实本地reference过滤和scratchpad；关闭重开仍页内内存，不会永久保存。",
    "deliveredScope": "原WinBox移动/尺寸/最小化/重开，宿主原创checklist、真实本地reference过滤和scratchpad；关闭重开仍页内内存，不会永久保存。",
    "evidence": [
      "ui-winbox-adapt/build/main.js"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "mind-elixir:thought-map",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地思维导图编辑",
    "reason": "原MindElixir编辑/子节点/折叠/history与居中，宿主原创研究seed及控制条；不连接AI或远程存储。",
    "deliveredScope": "原MindElixir编辑/子节点/折叠/history与居中，宿主原创研究seed及控制条；不连接AI或远程存储。",
    "evidence": [
      "ui-mind-elixir-next/build/main.ts"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "emoji-mart:local-message-studio",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "表情选择与本地草稿",
    "reason": "原EmojiMart分类/英文关键词搜索/肤色原native字体，宿主插入当前光标/撤销与本地预览；不发送，设备字形支持差异明确。",
    "deliveredScope": "原EmojiMart分类/英文关键词搜索/肤色原native字体，宿主插入当前光标/撤销与本地预览；不发送，设备字形支持差异明确。",
    "evidence": [
      "ui-emoji-mart-adapt/preview/src/main.js"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "d3-sankey:workload-flow",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地工作分配桑基图",
    "reason": "原D3引擎按虚构100单位计算宽度，宿主slider/聚焦/节点移动与数值表；非模型用量、账单或实时数据。",
    "deliveredScope": "原D3引擎按虚构100单位计算宽度，宿主slider/聚焦/节点移动与数值表；非模型用量、账单或实时数据。",
    "evidence": [
      "ui-sankey-adapt/build/main.js"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "shiki-magic-move:code-evolution",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "预编译代码演化讲解",
    "reason": "原ShikiMagicMove token动画、四步前后/播放停止；预编译TypeScript示例只展示不执行，不称代码编辑器。",
    "deliveredScope": "原ShikiMagicMove token动画、四步前后/播放停止；预编译TypeScript示例只展示不执行，不称代码编辑器。",
    "evidence": [
      "ui-shiki-move-adapt/src/main.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "annotorious:visual-notes",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地区域图像批注",
    "reason": "原Annotorious矩形/多边形编辑与备注JSON，宿主原创SVG和用户本地图片可选；仅内存无上传，切图清标注明示。",
    "deliveredScope": "原Annotorious矩形/多边形编辑与备注JSON，宿主原创SVG和用户本地图片可选；仅内存无上传，切图清标注明示。",
    "evidence": [
      "ui-annotorious-adapt/preview/src/main.js"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "d3-geo:context-globe",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "地理上下文旋转示意",
    "reason": "原D3正射投影/真实land地形，宿主虚构城市任务/拖转/方向键/缩放；不定位跟踪，非导航地图或真实协作状态。",
    "deliveredScope": "原D3正射投影/真实land地形，宿主虚构城市任务/拖转/方向键/缩放；不定位跟踪，非导航地图或真实协作状态。",
    "evidence": [
      "ui-globe-adapt/build/main.js"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "minisearch:local-document-retrieval",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地资料索引检索",
    "reason": "原MiniSearch倒排索引/前缀容错/排序，原创八篇双语语料可编辑增删实时更新索引；相关分非事实可信度，不生成答案。",
    "deliveredScope": "原MiniSearch倒排索引/前缀容错/排序，原创八篇双语语料可编辑增删实时更新索引；相关分非事实可信度，不生成答案。",
    "evidence": [
      "ui-minisearch-adapt/preview/src/main.js"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "driver:anchor-explainer",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "真实控件锚点解释",
    "reason": "原Driver几何开洞定位，宿主原创brief/evidence/decision控件可在聚光中继续操作；批准只本地状态不发送或调度。",
    "deliveredScope": "原Driver几何开洞定位，宿主原创brief/evidence/decision控件可在聚光中继续操作；批准只本地状态不发送或调度。",
    "evidence": [
      "ui-driver-adapt/build/main.ts"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "markmap:markdown-workbench",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "Markdown分支阅读导航",
    "reason": "原Markmap+无插件Transformer把本地输入转分支、折叠/缩放/fit；禁HTML/图片/链接，只纯文本树非富文档完整渲染。",
    "deliveredScope": "原Markmap+无插件Transformer把本地输入转分支、折叠/缩放/fit；禁HTML/图片/链接，只纯文本树非富文档完整渲染。",
    "evidence": [
      "ui-markmap-adapt/src/main.js"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "uiverse:water-material",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "气泡开关与水滴材质",
    "reason": "原气泡checkbox真实切换，水滴仅CSS视觉，主动播放/复位；不控制真实设置，不按两种材质拆新增条目。",
    "deliveredScope": "原气泡checkbox真实切换，水滴仅CSS视觉，主动播放/复位；不控制真实设置，不按两种材质拆新增条目。",
    "evidence": [
      "ui-uiverse-adapt/delivery/water.html",
      "ui-uiverse-adapt/delivery/runtime.js"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "affectui:decision-inbox",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "本地决策收件箱",
    "reason": "有效本地决策状态；宿主明确不发送，确认文案只属示例。",
    "deliveredScope": "原三决策展开、选择、确认折叠及自动开启下一项；无会议邀请或归档服务。",
    "evidence": [
      "ui-full-quality-B4-sub/extracted/affect/src/main.tsx",
      "ui-full-quality-B4-sub/extracted/affect/src/decision-inbox.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "affectui:email-draft",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "邮件草稿交互示例",
    "reason": "Sending→Sent是本地状态，页脚已声明无邮件发送；宜把Sent就近标为演示，不将整组件判坏。",
    "deliveredScope": "原收件人选择/语气模板/正文编辑/移附件/Discard/发送动画；onSend空回调。",
    "evidence": [
      "ui-full-quality-B4-sub/extracted/affect/src/main.tsx",
      "ui-full-quality-B4-sub/extracted/affect/src/email-draft.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "affectui:smart-recommendation",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "建议选择与接受",
    "reason": "本地选择完整；接受不是真实数据迁移。",
    "deliveredScope": "原同步策略三选项、菜单展开、accept/撤销状态；不执行同步。",
    "evidence": [
      "ui-full-quality-B4-sub/extracted/affect/src/main.tsx",
      "ui-full-quality-B4-sub/extracted/affect/src/smart-recommendation.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "affectui:comment-thread",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "评论与脚本回执",
    "reason": "有效本地评论组件；固定回复明确无模型，未挂载关闭入口不误报为坏按钮。",
    "deliveredScope": "原评论输入追加、详情展开、900ms固定助手回执；onClose未传时关闭按钮条件不渲染。",
    "evidence": [
      "ui-full-quality-B4-sub/extracted/affect/src/main.tsx",
      "ui-full-quality-B4-sub/extracted/affect/src/comment-thread.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "affectui:notification-stack",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "通知堆叠与移除",
    "reason": "定时任务文字已称local sample，保通知组件。",
    "deliveredScope": "原三个fixture通知的层叠/尺寸与关闭移除；无真实提醒订阅。",
    "evidence": [
      "ui-full-quality-B4-sub/extracted/affect/src/main.tsx",
      "ui-full-quality-B4-sub/extracted/affect/src/notification-stack.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "affectui:tool-call-card",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "工具过程与错误重试卡",
    "reason": "宿主已称simulate；不是执行工具，Clipboard能力不能仅源码声称当前成功。",
    "deliveredScope": "原三工具组展开/参数结果/错误→running→success定时模拟；含复制辅助。",
    "evidence": [
      "ui-full-quality-B4-sub/extracted/affect/src/main.tsx",
      "ui-full-quality-B4-sub/extracted/affect/src/tool-call-card.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "agent-elements:research-workflow",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "预录研究工作流",
    "reason": "固定发现与测试输出明示simulated；没有实际搜索、shell或Agent运行。",
    "deliveredScope": "原Search/Subagent/Bash组件组合，Replay/Pause推进0至3阶段、嵌套操作展开。",
    "evidence": [
      "ui-full-quality-B4-sub/extracted/agent/src/main.tsx",
      "ui-full-quality-B4-sub/extracted/agent/src/lib/agent-ui/components/tools/generic-tool.tsx",
      "ui-full-quality-B4-sub/extracted/agent/src/lib/agent-ui/components/tools/bash-tool.tsx",
      "ui-full-quality-B4-sub/extracted/agent/src/lib/agent-ui/components/tools/subagent-tool.tsx",
      "ui-full-quality-B4-sub/extracted/agent/src/lib/agent-ui/components/tools/search-tool.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "animata:aperture-reveal",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "滚动光圈叙事段",
    "reason": "有效滚动组件；替代图仍沿旧山景alt需修正，Plan the climb仅#plan无真实计划服务。",
    "deliveredScope": "原Primary ridge故事、640px内滚动、测量开口/clip/字幕与CTA时机；照片换几何SVG。",
    "evidence": [
      "ui-full-quality-B4-sub/extracted/animata4/src/main.tsx",
      "ui-full-quality-B4-sub/extracted/animata4/src/animata/scroll/aperture-reveal.stories.tsx",
      "ui-full-quality-B4-sub/extracted/animata4/src/animata/scroll/aperture-reveal.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "animata:stacked-sections",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "堆叠滚动段落",
    "reason": "原叙事空间组件，不要求业务后台；几何与实际滚动像素本轮未验。",
    "deliveredScope": "原Primary内滚动、多Pane sticky堆叠和缩放drama效果；系统字体替代。",
    "evidence": [
      "ui-full-quality-B4-sub/extracted/animata4/src/main.tsx",
      "ui-full-quality-B4-sub/extracted/animata4/src/animata/scroll/stacked-sections.stories.tsx",
      "ui-full-quality-B4-sub/extracted/animata4/src/animata/scroll/stacked-sections.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "animata:transaction-list",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "交易行到收据转场",
    "reason": "明确虚构金额无支付；列表详情是真本地状态，不是金融系统。",
    "deliveredScope": "原共享布局选中/返回；宿主3↔5条虚构记录，原创通用图标及卡尾0000。",
    "evidence": [
      "ui-animata-receipt-adapt/preview/src/main.tsx",
      "ui-animata-receipt-adapt/preview/src/transaction-list.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "animata:product-features",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "商品特性展示段",
    "reason": "保展示组件，不称完整商店；产品名/alt与几何替图不一致需说明，CTA宜禁用。",
    "deliveredScope": "原陶瓷标题/三卡春动画；三原产品图替几何SVG，Ready to clay无handler。",
    "evidence": [
      "ui-full-quality-B4-sub/extracted/animata1/src/main.tsx",
      "ui-full-quality-B4-sub/extracted/animata1/src/animata/hero/product-features.stories.tsx",
      "ui-full-quality-B4-sub/extracted/animata1/src/animata/hero/product-features.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "eldora:header-01",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "导航页头与移动抽屉",
    "reason": "保页头不是完整站点；原Link适配丢onClick使部分导航不执行，已声明无目标。",
    "deliveredScope": "原Navbar滚动样式、drawer及theme；Hero/Section为原占位页；链接适配禁跳转。",
    "evidence": [
      "ui-eldora-pair-local/main-header-01.tsx",
      "ui-eldora-pair-local/src/link.tsx",
      "ui-eldora-pair-local/src/header-01/page.tsx",
      "ui-eldora-pair-local/src/header-01/components/navbar.tsx",
      "ui-eldora-pair-local/src/header-01/components/nav-menu.tsx",
      "ui-eldora-pair-local/src/header-01/components/theme-toggle.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "eldora:github-inline-comments",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "代码差异行内评论",
    "reason": "本地审阅组件完整；头像已替代，评论不是远端发送。",
    "deliveredScope": "原fixed diff、打开行thread、输入追加评论、resolve/关闭；不连GitHub。",
    "evidence": [
      "/tmp/ui-eldora-adapt/src2/main.tsx",
      "/tmp/ui-eldora-adapt/src2/registry/eldoraui/github-inline-comments.tsx",
      "/tmp/ui-eldora-adapt/src2/registry/example/github-inline-comments-demo.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "eldora:logo-timeline",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "标识轨道时间线",
    "reason": "保品牌标识视觉组件，非集成服务；本轮读原demo及组件。",
    "deliveredScope": "原多行logo布局与CSS滚动/hover状态；没有真实公司合作或时间数据查询。",
    "evidence": [
      "/tmp/ui-eldora-adapt/src2/main.tsx",
      "/tmp/ui-eldora-adapt/src2/registry/eldoraui/logo-timeline.tsx",
      "/tmp/ui-eldora-adapt/src2/registry/example/logo-timeline-demo.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "eldora:pricing-02",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "静态方案比较表",
    "reason": "静态比较有用，发布页已明确无tier切换；不能称完成计费流程。",
    "deliveredScope": "原定价矩阵和固定Starter选中，Get started已disabled，不购买或注册。",
    "evidence": [
      "ui-eldora-pair-local/main-pricing-02.tsx",
      "ui-eldora-pair-local/src/link.tsx",
      "ui-eldora-pair-local/src/pricing-02/page.tsx",
      "ui-eldora-pair-local/src/pricing-02/components/container.tsx",
      "ui-eldora-pair-local/src/pricing-02/components/pricing-table.tsx",
      "ui-eldora-pair-local/src/pricing-02/components/text.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "eldora:novatrix-background",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "Novatrix着色器背景",
    "reason": "GPU视觉实验，不因无后台降级；本轮未原生GPU验收，错误/像素不作新增承诺。",
    "deliveredScope": "原OGL Triangle/fragment shader、时间与鼠标uniform；宿主500px背景场景。",
    "evidence": [
      "ui-gpu-heros-local/src/novatrix.tsx",
      "ui-gpu-heros-local/src/novatrix-background.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "eldora:integrations",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "图标流动集成背景",
    "reason": "名称integration指视觉展示，不连接真实服务。",
    "deliveredScope": "原6种Lucide图块随机四列、Marquee与入场动效；无连接按钮或OAuth。",
    "evidence": [
      "/tmp/ui-eldora-adapt/src/main.tsx",
      "/tmp/ui-eldora-adapt/src/registry/eldoraui/integrations.tsx",
      "/tmp/ui-eldora-adapt/src/registry/example/integrations-demo.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "eldora:map",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "地图标记悬停视觉",
    "reason": "不是可缩放/寻址真实地图，保位置标记材质实验。",
    "deliveredScope": "原固定坐标Marker悬停弹入；底图及头像全部本地原创SVG替代。",
    "evidence": [
      "/tmp/ui-eldora-adapt/src2/main.tsx",
      "/tmp/ui-eldora-adapt/src2/registry/eldoraui/map.tsx",
      "/tmp/ui-eldora-adapt/src2/registry/example/map-demo.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "eldora:architecture-animation",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "架构路径动画",
    "reason": "不执行npx或部署架构；完整原动效图可保。",
    "deliveredScope": "原SVG Registry/AI/Cobe连线与文字Motion/SMIL编排；命令是标签。",
    "evidence": [
      "/tmp/ui-eldora-adapt/src/main.tsx",
      "/tmp/ui-eldora-adapt/src/registry/eldoraui/architecture-animation.tsx",
      "/tmp/ui-eldora-adapt/src/registry/example/architecture-animation-demo.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "eldora:holographic-card",
    "recommendation": "retain",
    "layer": "experiment",
    "scopeLabel": "全息卡片光泽",
    "reason": "保材质实验非原照片卡；像素本轮未验。",
    "deliveredScope": "原pointer坐标→spring旋转/shine，原图被原创几何SVG替代；旅/創世文字。",
    "evidence": [
      "/tmp/ui-eldora-adapt/src/main.tsx",
      "/tmp/ui-eldora-adapt/src/registry/eldoraui/holographic-card.tsx",
      "/tmp/ui-eldora-adapt/src/registry/example/holographic-card-demo.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "orb:push-to-talk",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "按住说话状态示例",
    "reason": "已显式无麦克风音频或AI；有效输入状态组件。",
    "deliveredScope": "原固定转写fixture、按住/样例播放/停止、可编辑草稿/本地send列表/失败分支。",
    "evidence": [
      "ui-orb-adapt/src/main.tsx",
      "ui-orb-adapt/src/recipes/push-to-talk.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "orb:guided-onboarding",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "语音引导式本地步骤",
    "reason": "仅in-memory draft不创建服务器workspace，页面明确。",
    "deliveredScope": "原名称/可见性/审核三步，guide/apply、快照Undo、模拟fail/stop。",
    "evidence": [
      "ui-orb-adapt/src/main.tsx",
      "ui-orb-adapt/src/recipes/guided-onboarding.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "orb:document-qa",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "带引用的问答状态",
    "reason": "不是检索模型，已明示fixture；比任意输入同答更有实际规则交互。",
    "deliveredScope": "原refund/viewer/export关键词选择固定三文档答案与citations；未知query明确无匹配。",
    "evidence": [
      "ui-orb-adapt/src/main.tsx",
      "ui-orb-adapt/src/recipes/document-qa.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "beautiful-ui:prompt-bar",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "胶囊提示输入",
    "reason": "连接/模型/附件名均模拟且可见说明，无上传/外发。",
    "deliveredScope": "原输入/模型来源菜单/预列附件/模拟听写，onSend仅宿主output回显。",
    "evidence": [
      "ui-beautiful-adapt/src/main.tsx",
      "ui-beautiful-adapt/src/components/primitives/PromptBar.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  },
  {
    "id": "beautiful-ui:selection-actions",
    "recommendation": "retain",
    "layer": "component",
    "scopeLabel": "选文改写浮条",
    "reason": "有效上下文操作状态示例，已有明确固定改写说明，不冒智能编辑。",
    "deliveredScope": "原预置选文、动作菜单、thinking/stream/result、Keep本地接受及Discard；同一固定rewrite，Explain不可用。",
    "evidence": [
      "ui-beautiful-adapt/src/main.tsx",
      "ui-beautiful-adapt/src/components/primitives/SelectionActions.tsx"
    ],
    "reviewBasis": "实际入口、宿主和组件源码范围核查（部分复用既有专项审计）；本轮未 DOM/native 复验"
  }
];
