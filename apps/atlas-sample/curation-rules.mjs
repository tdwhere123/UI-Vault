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
  }
];
