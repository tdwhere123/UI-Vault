// Presentation copy is separate from source QA metadata, which remains unchanged.
const genericStatus=/^(?:源码已归档；视觉效果与交互尚未完成本轮验证。|原始来源已收集，尚未完成视觉与交互验收。|本地预览已接入，尚未完成视觉复验。|真实封面及最终浏览器验收未完成|未做浏览器视觉、完整键盘\/触控验收。|未完成真实浏览器视觉与交互复验。|未进行浏览器视觉及完整键盘\/触屏验收。)$/;
export const displayCandidateCopy=(value,fallback='')=>value&&!genericStatus.test(value.trim())?value:fallback;
export function adaptCandidate(x) {
 const title=x.title||x.id, text=[title,x.description,x.source].join(' ');
 const category=x.category||(/agent|chat|对话|工具调用|收件箱|email|decision/i.test(text)?'Agent与对话':/table|dashboard|chart|状态|数据|日历/i.test(text)?'数据与状态':/navigation|menu|导航|看板/i.test(text)?'导航与组织':/hero|page|整站|首屏|营销|pricing/i.test(text)?'产品与营销':'展示与媒体');
 const dir=x.preview?.slice(0,x.preview.lastIndexOf('/'));
 return {...x,category,kind:x.kind||'组件',format:x.format||'页面区块',featured:true,pending:true,
 description:displayCandidateCopy(x.description,`${x.source||'UI'} · ${title}`),
 keywords:[title,x.id,x.source,x.description,Array.isArray(x.keywords)?x.keywords.join(' '):x.keywords].join(' '),technology:[],styleTags:x.styleTags||[],interactionTags:x.interactionTags||[],purposeTags:x.purposeTags||[category],
 bundle:x.archive||'',code:x.code||'',dependencies:x.preview?'本地预览资源；原始依赖见源码。':'依赖信息见原始来源。',
 behavior:displayCandidateCopy(x.behavior,x.preview?'在本地预览中探索组件交互。':'暂无本地预览；可查看原始来源。'),
 adaptation:(Array.isArray(x.gaps)?x.gaps:[]).map(v=>displayCandidateCopy(v)).filter(Boolean).join('；'),revision:x.revision||'详见固定来源链接',
 runtime:dir?{allowLocalMedia:x.needsLocalMedia===true,key:dir,css:dir+'/runtime.css',js:dir+'/runtime.js',cssHref:'runtime.css',scriptSrc:'runtime.js',...(x.runtime?.scripts!==undefined?{scripts:x.runtime.scripts}: {}),...(x.runtime?.assets!==undefined?{assets:x.runtime.assets}: {})}:null};
}
