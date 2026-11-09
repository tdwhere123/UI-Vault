(function(){
let stopped=false,failed=false,teardown=()=>{},own=[];const timers=new Map(),frames=new Map(),intervals=new Map();let serial=1,paused=document.hidden;
const proto=EventTarget.prototype,add=proto.addEventListener,remove=proto.removeEventListener;
const set=window.setTimeout.bind(window),clear=window.clearTimeout.bind(window),raf=window.requestAnimationFrame.bind(window),caf=window.cancelAnimationFrame.bind(window);
const mediaRestore=new Set(),observers=new Set(),originalObservers={};const originalMatchMedia=window.matchMedia;
const nativeInterval=window.setInterval,nativeClearInterval=window.clearInterval;
const basePointer=document.body.style.pointerEvents,baseOverflow=document.body.style.overflow;
function registerCleanup(fn){teardown=fn}
function trackedAdd(type,fn,options){if(!fn)return add.call(this,type,fn,options);const capture=typeof options==='boolean'?options:!!options?.capture;if(!own.some(x=>x.target===this&&x.type===type&&x.fn===fn&&x.capture===capture))own.push({target:this,type,fn,options,capture});return add.call(this,type,fn,options)}
function trackedRemove(type,fn,options){const capture=typeof options==='boolean'?options:!!options?.capture;own=own.filter(x=>!(x.target===this&&x.type===type&&x.fn===fn&&x.capture===capture));return remove.call(this,type,fn,options)}
function cancelTasks(){intervals.clear();for(const task of timers.values())clear(task.handle);timers.clear();for(const task of frames.values())caf(task.handle);frames.clear()}
function release(){cancelTasks();for(const restore of mediaRestore)restore();mediaRestore.clear();window.matchMedia=originalMatchMedia;for(const observer of observers)observer.disconnect();for(const name in originalObservers)window[name]=originalObservers[name];for(const x of own.splice(0))remove.call(x.target,x.type,x.fn,x.options);proto.addEventListener=add;proto.removeEventListener=remove;window.setInterval=nativeInterval;window.clearInterval=nativeClearInterval;window.setTimeout=set;window.clearTimeout=clear;window.requestAnimationFrame=raf;window.cancelAnimationFrame=caf;document.body.style.pointerEvents=basePointer;document.body.style.overflow=baseOverflow;document.querySelectorAll('[data-radix-focus-guard]').forEach(n=>n.remove());}
function exit(){if(stopped)return;stopped=true;try{teardown()}catch{}queueMicrotask(release)}
function fatal(error){if(failed)return;failed=true;exit();queueMicrotask(()=>{try{const p=document.createElement('p');p.setAttribute('role','alert');p.textContent='图形预览不可用或已停止。请关闭后重新打开；没有显示替代效果。';document.body.append(p)}catch{}})}
try{
for(const name of ['ResizeObserver','IntersectionObserver','MutationObserver']){const Original=window[name];if(!Original)continue;originalObservers[name]=Original;window[name]=class extends Original{constructor(...args){super(...args);observers.add(this)}disconnect(){super.disconnect();observers.delete(this)}}}
window.matchMedia=function(...args){const m=originalMatchMedia.apply(window,args);if(m.addListener&&m.removeListener){const a=m.addListener,r=m.removeListener,callbacks=new Set();const restore=()=>{for(const fn of callbacks)r.call(m,fn);m.addListener=a;m.removeListener=r};m.addListener=function(fn){callbacks.add(fn);mediaRestore.add(restore);return a.call(m,fn)};m.removeListener=function(fn){callbacks.delete(fn);if(!callbacks.size)mediaRestore.delete(restore);return r.call(m,fn)}}return m};
proto.addEventListener=trackedAdd;proto.removeEventListener=trackedRemove;
function scheduleTimer(id,task){const gen=task.gen=(task.gen||0)+1;task.started=performance.now();task.handle=set(()=>{if(timers.get(id)!==task||task.gen!==gen)return;timers.delete(id);if(stopped||paused)return;try{task.fn(...task.args)}catch(e){fatal(e)}},task.remaining)}
function scheduleFrame(id,task){const gen=task.gen=(task.gen||0)+1;task.handle=raf(time=>{if(frames.get(id)!==task||task.gen!==gen)return;frames.delete(id);if(stopped||paused)return;try{task.fn(time)}catch(e){fatal(e)}})}
window.setTimeout=(fn,ms=0,...args)=>{if(stopped)return 0;const id=serial++,task={fn,args,remaining:ms,handle:0,started:0};timers.set(id,task);if(!paused)scheduleTimer(id,task);return id};window.clearTimeout=id=>{const task=timers.get(id);if(task)clear(task.handle);timers.delete(id)};
window.requestAnimationFrame=fn=>{if(stopped)return 0;const id=serial++,task={fn,handle:0};frames.set(id,task);if(!paused)scheduleFrame(id,task);return id};window.cancelAnimationFrame=id=>{const task=frames.get(id);if(task)caf(task.handle);frames.delete(id)};
function pauseTasks(){if(paused)return;paused=true;for(const task of timers.values()){clear(task.handle);task.remaining=Math.max(0,task.remaining-(performance.now()-task.started))}for(const task of frames.values())caf(task.handle)}
function resumeTasks(){if(!paused||stopped)return;paused=false;for(const [id,task] of timers)scheduleTimer(id,task);for(const [id,task] of frames)scheduleFrame(id,task)}
window.setInterval=(fn,ms=0,...args)=>{if(stopped)return 0;const id=serial++;const tick=()=>{if(!intervals.has(id)||stopped)return;try{fn(...args)}catch(e){fatal(e);return}if(intervals.has(id))intervals.set(id,window.setTimeout(tick,ms))};intervals.set(id,window.setTimeout(tick,ms));return id};window.clearInterval=id=>{const handle=intervals.get(id);if(handle!==undefined)window.clearTimeout(handle);intervals.delete(id)};
window.addEventListener('pagehide',exit);window.addEventListener('atlas:dispose',exit);window.addEventListener('error',e=>{e.preventDefault();fatal(e.error)});window.addEventListener('unhandledrejection',e=>{e.preventDefault();fatal(e.reason)});
const retiredNodeObserver=new MutationObserver(()=>{if(stopped)return;const retired=own.filter(x=>x.target instanceof Node&&!x.target.isConnected);for(const x of retired)remove.call(x.target,x.type,x.fn,x.options);own=own.filter(x=>!retired.includes(x))});retiredNodeObserver.observe(document.body,{childList:true,subtree:true});
/* MODULE_START */

(()=>{var E={"1":`

    
    <a class="skip-to-content-link" href="#main">跳转至内容</a>
    <header class="header">
        <nav>
            <div class="logo" data-toggle-button-label="菜单">
                <a aria-label="主页" href="/unread">
                    Mini<span>flux</span>
                </a>
                <svg class="icon" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>
            </div>
            <ul id="header-menu">
                <li class="active" title="键盘快捷键：g u">
                    <a href="/unread" data-page="unread" aria-label="未读, 3 个未读条目">
                        <svg class="icon" aria-hidden="true"><use href="#icon-entries"></use></svg>未读
                        
                        <span class="unread-counter-wrapper" aria-hidden="true">(<span class="unread-counter">3</span>)</span>
                        
                    </a>
                </li>
                <li title="键盘快捷键：g b">
                    <a href="/starred" data-page="starred"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg>收藏</a>
                </li>
                <li title="键盘快捷键：g h">
                    <a href="/history" data-page="history"><svg class="icon" aria-hidden="true"><use href="#icon-history"></use></svg>历史记录</a>
                </li>
                <li title="键盘快捷键：g f">
                    <a href="/feeds" data-page="feeds" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-feeds"></use></svg>订阅源
                      
                    </a>
                    <a href="/subscribe" title="本地演示未接入此导航或外部服务" aria-label="添加订阅源" aria-disabled="true">
                        (+)
                    </a>
                </li>
                <li title="键盘快捷键：g c">
                    <a href="/categories" data-page="categories" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-categories"></use></svg>分类</a>
                </li>
                <li title="键盘快捷键：/">
                    <a href="/search" data-page="search" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-search"></use></svg>搜索</a>
                </li>
                <li title="键盘快捷键：g s">
                    <a href="/settings" data-page="settings" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-settings"></use></svg>设置</a>
                </li>
                
                    <li>
                        <form method="post" class="logout-form">
                            <input type="hidden" name="csrf" value="" disabled="">
                            <button type="submit" class="logout-button" title="本地阅读演示不提供此服务操作" disabled=""><svg class="icon" aria-hidden="true"><use href="#icon-logout"></use></svg>登出</button>
                        </form>
                    </li>
                
            </ul>
        </nav>
    </header>
    
    
    

    
<section class="entry" data-id="1" aria-labelledby="page-header-title">
    <header class="entry-header">
        <h1 id="page-header-title" dir="auto" lang="zh-CN">
            <a href="https://example.invalid/article" rel="noopener" aria-disabled="true" title="本地演示未接入此导航或外部服务">为长文留下阅读节奏</a>
        </h1>
        
        <div class="entry-actions">
            <ul>
                <li>
                    <button class="page-button" title="更改条目状态" data-toggle-status="true" data-label-loading="保存中…" data-label-unread="标为未读" data-label-read="标为已读" data-toast-unread="已标为未读" data-toast-read="已标为已读" data-value="unread"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg><span class="icon-label">标为已读</span></button>
                </li>
                <li>
                    <button class="page-button" data-toggle-starred="true" data-star-url="/entry/star/1" data-label-loading="保存中…" data-label-star="添加收藏" data-label-unstar="取消收藏" data-toast-star="已添加收藏" data-toast-unstar="已取消收藏" data-value="unstar"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg><span class="icon-label">添加收藏</span></button>
                </li>
                
                
                <li>
                    <form method="post">
                        <input type="hidden" name="csrf" value="" disabled="">
                        <button type="submit" class="page-button" disabled="" title="本地阅读演示不提供此服务操作">
                            <svg class="icon" aria-hidden="true"><use href="#icon-share"></use></svg><span class="icon-label">分享</span>
                        </button>
                    </form>
                </li>
                
                <li>
                    <button class="page-button" title="本地阅读演示不提供此服务操作" data-fetch-content-entry="true" data-fetch-content-url="/entry/download/1" data-label-loading="加载中…" disabled=""><svg class="icon" aria-hidden="true"><use href="#icon-scraper"></use></svg><span class="icon-label">下载</span></button>
                </li>
                
            </ul>
        </div>
        
        <div class="entry-meta" dir="auto">
            <span class="entry-website">
                
                
                <a href="/feed/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">本地设计观察（虚构订阅）</a>
                
            </span>
            
            <span class="entry-author">
                
                – <em>本地演示作者</em>
                
            </span>
            
            
            <span class="category">
                <a href="/category/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">本地阅读</a>
            </span>
            
        </div>
        
        <div class="entry-tags">
            标签：
            
            
            
            

            <ul class="entry-tags-list">
                
                    
                        
                            <li><a href="/tags/%E9%98%85%E8%AF%BB/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>阅读</strong></a></li>
                        
                    
                
                    
                        
                            <li><a href="/tags/%E8%AE%BE%E8%AE%A1/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>设计</strong></a></li>
                        
                    
                
                    
                        
                            <li><a href="/tags/%E7%A0%94%E7%A9%B6/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>研究</strong></a></li>
                        
                    
                
                    
                        
                            <li><a href="/tags/%E6%8E%92%E7%89%88/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>排版</strong></a></li>
                        
                    
                
                    
                        
                            <li><a href="/tags/%E6%9C%AC%E5%9C%B0/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>本地</strong></a></li>
                        
                    
                
                    
                
                    
                
            </ul>

            
                <details class="entry-additional-tags">
                    <summary>
                        显示 2 个更多标签
                    </summary>
                    <ul class="entry-tags-list">
                    
                        
                    
                        
                    
                        
                    
                        
                    
                        
                    
                        
                            
                                <li><a href="/tags/%E4%BE%BF%E7%AC%BA/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>便笺</strong></a></li>
                            
                        
                    
                        
                            
                                <li><a href="/tags/%E7%95%8C%E9%9D%A2/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>界面</strong></a></li>
                            
                        
                    
                    </ul>
                </details>
            
        </div>
        
        <div class="entry-external-link">
            <a href="https://example.invalid/article" rel="noopener" data-original-link="false" aria-disabled="true" title="本地演示未接入此导航或外部服务">https://example.invalid/article</a>
        </div>
        <div class="entry-date">
            
            <time datetime="2026-01-03 12:00:00 UTC" title="2026-01-03 12:00:00 UTC">2026-01-03 12:00:00 UTC</time>
            
            
            ·
            <span class="entry-reading-time">
                需要 3 分钟阅读
            </span>
            
        </div>
    </header>
</section>


    <main id="main">
        


<div class="pagination-entry-top">
    
<div class="pagination">
    <div class="pagination-prev disabled">
        
            上一页
        
    </div>

    <a href="#" class="elevator"><svg class="icon" aria-hidden="true"><use href="#icon-up"></use></svg>返回顶部</a>

    <div class="pagination-next ">
        
            <a href="/unread/entry/2" title="把收件箱变成阅读路径" data-page="next" rel="next">下一页</a>
        
    </div>
</div>

</div>


<article class="entry-content " dir="auto" lang="zh-CN">
    

    
        <p>这篇文章是为了演示原 Miniflux 阅读模板而创作的虚构本地文本，没有抓取外部网站。</p><h2>阅读从清楚的层级开始</h2><p>信息的密度并非越低越好。标题、段落、引用与列表共同建立节奏，让读者知道自己处于哪里。</p><blockquote>工具可以帮助安排顺序，理解仍然需要停下来阅读。</blockquote><ul><li>先浏览主题与来源。</li><li>记录尚未理解的段落。</li><li>把相关问题留给下一次探索。</li></ul><h2>带着问题继续</h2><p>每条阅读记录都可以成为下一段研究的入口。本演示只改变当前页面内存里的状态，不向服务发送已读、收藏或同步请求。</p><table><thead><tr><th>线索</th><th>下一步</th></tr></thead><tbody><tr><td>概念</td><td>核对定义</td></tr><tr><td>判断</td><td>寻找依据</td></tr></tbody></table>
    
</article>



<div class="pagination-entry-bottom">
    
<div class="pagination">
    <div class="pagination-prev disabled">
        
            上一页
        
    </div>

    <a href="#" class="elevator"><svg class="icon" aria-hidden="true"><use href="#icon-up"></use></svg>返回顶部</a>

    <div class="pagination-next ">
        
            <a href="/unread/entry/2" title="把收件箱变成阅读路径" data-page="next" rel="next">下一页</a>
        
    </div>
</div>

</div>


    </main>
    

    <template id="icon-read"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg></template>
    <template id="icon-unread"><svg class="icon" aria-hidden="true"><use href="#icon-unread"></use></svg></template>
    <template id="icon-star"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg></template>
    <template id="icon-unstar"><svg class="icon" aria-hidden="true"><use href="#icon-unstar"></use></svg></template>
    <template id="icon-save"><svg class="icon" aria-hidden="true"><use href="#icon-save"></use></svg></template>


`,"2":`

    
    <a class="skip-to-content-link" href="#main">跳转至内容</a>
    <header class="header">
        <nav>
            <div class="logo" data-toggle-button-label="菜单">
                <a aria-label="主页" href="/unread">
                    Mini<span>flux</span>
                </a>
                <svg class="icon" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>
            </div>
            <ul id="header-menu">
                <li class="active" title="键盘快捷键：g u">
                    <a href="/unread" data-page="unread" aria-label="未读, 3 个未读条目">
                        <svg class="icon" aria-hidden="true"><use href="#icon-entries"></use></svg>未读
                        
                        <span class="unread-counter-wrapper" aria-hidden="true">(<span class="unread-counter">3</span>)</span>
                        
                    </a>
                </li>
                <li title="键盘快捷键：g b">
                    <a href="/starred" data-page="starred"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg>收藏</a>
                </li>
                <li title="键盘快捷键：g h">
                    <a href="/history" data-page="history"><svg class="icon" aria-hidden="true"><use href="#icon-history"></use></svg>历史记录</a>
                </li>
                <li title="键盘快捷键：g f">
                    <a href="/feeds" data-page="feeds" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-feeds"></use></svg>订阅源
                      
                    </a>
                    <a href="/subscribe" title="本地演示未接入此导航或外部服务" aria-label="添加订阅源" aria-disabled="true">
                        (+)
                    </a>
                </li>
                <li title="键盘快捷键：g c">
                    <a href="/categories" data-page="categories" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-categories"></use></svg>分类</a>
                </li>
                <li title="键盘快捷键：/">
                    <a href="/search" data-page="search" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-search"></use></svg>搜索</a>
                </li>
                <li title="键盘快捷键：g s">
                    <a href="/settings" data-page="settings" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-settings"></use></svg>设置</a>
                </li>
                
                    <li>
                        <form method="post" class="logout-form">
                            <input type="hidden" name="csrf" value="" disabled="">
                            <button type="submit" class="logout-button" title="本地阅读演示不提供此服务操作" disabled=""><svg class="icon" aria-hidden="true"><use href="#icon-logout"></use></svg>登出</button>
                        </form>
                    </li>
                
            </ul>
        </nav>
    </header>
    
    
    

    
<section class="entry" data-id="2" aria-labelledby="page-header-title">
    <header class="entry-header">
        <h1 id="page-header-title" dir="auto" lang="zh-CN">
            <a href="https://example.invalid/article" rel="noopener" aria-disabled="true" title="本地演示未接入此导航或外部服务">把收件箱变成阅读路径</a>
        </h1>
        
        <div class="entry-actions">
            <ul>
                <li>
                    <button class="page-button" title="更改条目状态" data-toggle-status="true" data-label-loading="保存中…" data-label-unread="标为未读" data-label-read="标为已读" data-toast-unread="已标为未读" data-toast-read="已标为已读" data-value="unread"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg><span class="icon-label">标为已读</span></button>
                </li>
                <li>
                    <button class="page-button" data-toggle-starred="true" data-star-url="/entry/star/2" data-label-loading="保存中…" data-label-star="添加收藏" data-label-unstar="取消收藏" data-toast-star="已添加收藏" data-toast-unstar="已取消收藏" data-value="unstar"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg><span class="icon-label">添加收藏</span></button>
                </li>
                
                
                <li>
                    <form method="post">
                        <input type="hidden" name="csrf" value="" disabled="">
                        <button type="submit" class="page-button" disabled="" title="本地阅读演示不提供此服务操作">
                            <svg class="icon" aria-hidden="true"><use href="#icon-share"></use></svg><span class="icon-label">分享</span>
                        </button>
                    </form>
                </li>
                
                <li>
                    <button class="page-button" title="本地阅读演示不提供此服务操作" data-fetch-content-entry="true" data-fetch-content-url="/entry/download/2" data-label-loading="加载中…" disabled=""><svg class="icon" aria-hidden="true"><use href="#icon-scraper"></use></svg><span class="icon-label">下载</span></button>
                </li>
                
            </ul>
        </div>
        
        <div class="entry-meta" dir="auto">
            <span class="entry-website">
                
                
                <a href="/feed/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">本地设计观察（虚构订阅）</a>
                
            </span>
            
            <span class="entry-author">
                
                – <em>本地演示作者</em>
                
            </span>
            
            
            <span class="category">
                <a href="/category/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">本地阅读</a>
            </span>
            
        </div>
        
        <div class="entry-tags">
            标签：
            
            
            
            

            <ul class="entry-tags-list">
                
                    
                        
                            <li><a href="/tags/%E9%98%85%E8%AF%BB/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>阅读</strong></a></li>
                        
                    
                
                    
                        
                            <li><a href="/tags/%E8%AE%BE%E8%AE%A1/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>设计</strong></a></li>
                        
                    
                
                    
                        
                            <li><a href="/tags/%E7%A0%94%E7%A9%B6/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>研究</strong></a></li>
                        
                    
                
                    
                        
                            <li><a href="/tags/%E6%8E%92%E7%89%88/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>排版</strong></a></li>
                        
                    
                
                    
                        
                            <li><a href="/tags/%E6%9C%AC%E5%9C%B0/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>本地</strong></a></li>
                        
                    
                
                    
                
                    
                
            </ul>

            
                <details class="entry-additional-tags">
                    <summary>
                        显示 2 个更多标签
                    </summary>
                    <ul class="entry-tags-list">
                    
                        
                    
                        
                    
                        
                    
                        
                    
                        
                    
                        
                            
                                <li><a href="/tags/%E4%BE%BF%E7%AC%BA/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>便笺</strong></a></li>
                            
                        
                    
                        
                            
                                <li><a href="/tags/%E7%95%8C%E9%9D%A2/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>界面</strong></a></li>
                            
                        
                    
                    </ul>
                </details>
            
        </div>
        
        <div class="entry-external-link">
            <a href="https://example.invalid/article" rel="noopener" data-original-link="false" aria-disabled="true" title="本地演示未接入此导航或外部服务">https://example.invalid/article</a>
        </div>
        <div class="entry-date">
            
            <time datetime="2026-01-03 12:00:00 UTC" title="2026-01-03 12:00:00 UTC">2026-01-03 12:00:00 UTC</time>
            
            
            ·
            <span class="entry-reading-time">
                需要 3 分钟阅读
            </span>
            
        </div>
    </header>
</section>


    <main id="main">
        


<div class="pagination-entry-top">
    
<div class="pagination">
    <div class="pagination-prev ">
        
            <a href="/unread/entry/1" title="为长文留下阅读节奏" data-page="previous" rel="prev">上一页</a>
        
    </div>

    <a href="#" class="elevator"><svg class="icon" aria-hidden="true"><use href="#icon-up"></use></svg>返回顶部</a>

    <div class="pagination-next ">
        
            <a href="/unread/entry/3" title="可追溯的研究笔记" data-page="next" rel="next">下一页</a>
        
    </div>
</div>

</div>


<article class="entry-content " dir="auto" lang="zh-CN">
    

    
        <p>这篇文章是为了演示原 Miniflux 阅读模板而创作的虚构本地文本，没有抓取外部网站。</p><h2>阅读从清楚的层级开始</h2><p>信息的密度并非越低越好。标题、段落、引用与列表共同建立节奏，让读者知道自己处于哪里。</p><blockquote>工具可以帮助安排顺序，理解仍然需要停下来阅读。</blockquote><ul><li>先浏览主题与来源。</li><li>记录尚未理解的段落。</li><li>把相关问题留给下一次探索。</li></ul><h2>带着问题继续</h2><p>每条阅读记录都可以成为下一段研究的入口。本演示只改变当前页面内存里的状态，不向服务发送已读、收藏或同步请求。</p><table><thead><tr><th>线索</th><th>下一步</th></tr></thead><tbody><tr><td>概念</td><td>核对定义</td></tr><tr><td>判断</td><td>寻找依据</td></tr></tbody></table>
    
</article>



<div class="pagination-entry-bottom">
    
<div class="pagination">
    <div class="pagination-prev ">
        
            <a href="/unread/entry/1" title="为长文留下阅读节奏" data-page="previous" rel="prev">上一页</a>
        
    </div>

    <a href="#" class="elevator"><svg class="icon" aria-hidden="true"><use href="#icon-up"></use></svg>返回顶部</a>

    <div class="pagination-next ">
        
            <a href="/unread/entry/3" title="可追溯的研究笔记" data-page="next" rel="next">下一页</a>
        
    </div>
</div>

</div>


    </main>
    

    <template id="icon-read"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg></template>
    <template id="icon-unread"><svg class="icon" aria-hidden="true"><use href="#icon-unread"></use></svg></template>
    <template id="icon-star"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg></template>
    <template id="icon-unstar"><svg class="icon" aria-hidden="true"><use href="#icon-unstar"></use></svg></template>
    <template id="icon-save"><svg class="icon" aria-hidden="true"><use href="#icon-save"></use></svg></template>


`,"3":`

    
    <a class="skip-to-content-link" href="#main">跳转至内容</a>
    <header class="header">
        <nav>
            <div class="logo" data-toggle-button-label="菜单">
                <a aria-label="主页" href="/unread">
                    Mini<span>flux</span>
                </a>
                <svg class="icon" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>
            </div>
            <ul id="header-menu">
                <li class="active" title="键盘快捷键：g u">
                    <a href="/unread" data-page="unread" aria-label="未读, 3 个未读条目">
                        <svg class="icon" aria-hidden="true"><use href="#icon-entries"></use></svg>未读
                        
                        <span class="unread-counter-wrapper" aria-hidden="true">(<span class="unread-counter">3</span>)</span>
                        
                    </a>
                </li>
                <li title="键盘快捷键：g b">
                    <a href="/starred" data-page="starred"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg>收藏</a>
                </li>
                <li title="键盘快捷键：g h">
                    <a href="/history" data-page="history"><svg class="icon" aria-hidden="true"><use href="#icon-history"></use></svg>历史记录</a>
                </li>
                <li title="键盘快捷键：g f">
                    <a href="/feeds" data-page="feeds" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-feeds"></use></svg>订阅源
                      
                    </a>
                    <a href="/subscribe" title="本地演示未接入此导航或外部服务" aria-label="添加订阅源" aria-disabled="true">
                        (+)
                    </a>
                </li>
                <li title="键盘快捷键：g c">
                    <a href="/categories" data-page="categories" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-categories"></use></svg>分类</a>
                </li>
                <li title="键盘快捷键：/">
                    <a href="/search" data-page="search" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-search"></use></svg>搜索</a>
                </li>
                <li title="键盘快捷键：g s">
                    <a href="/settings" data-page="settings" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-settings"></use></svg>设置</a>
                </li>
                
                    <li>
                        <form method="post" class="logout-form">
                            <input type="hidden" name="csrf" value="" disabled="">
                            <button type="submit" class="logout-button" title="本地阅读演示不提供此服务操作" disabled=""><svg class="icon" aria-hidden="true"><use href="#icon-logout"></use></svg>登出</button>
                        </form>
                    </li>
                
            </ul>
        </nav>
    </header>
    
    
    

    
<section class="entry" data-id="3" aria-labelledby="page-header-title">
    <header class="entry-header">
        <h1 id="page-header-title" dir="auto" lang="zh-CN">
            <a href="https://example.invalid/article" rel="noopener" aria-disabled="true" title="本地演示未接入此导航或外部服务">可追溯的研究笔记</a>
        </h1>
        
        <div class="entry-actions">
            <ul>
                <li>
                    <button class="page-button" title="更改条目状态" data-toggle-status="true" data-label-loading="保存中…" data-label-unread="标为未读" data-label-read="标为已读" data-toast-unread="已标为未读" data-toast-read="已标为已读" data-value="unread"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg><span class="icon-label">标为已读</span></button>
                </li>
                <li>
                    <button class="page-button" data-toggle-starred="true" data-star-url="/entry/star/3" data-label-loading="保存中…" data-label-star="添加收藏" data-label-unstar="取消收藏" data-toast-star="已添加收藏" data-toast-unstar="已取消收藏" data-value="unstar"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg><span class="icon-label">添加收藏</span></button>
                </li>
                
                
                <li>
                    <form method="post">
                        <input type="hidden" name="csrf" value="" disabled="">
                        <button type="submit" class="page-button" disabled="" title="本地阅读演示不提供此服务操作">
                            <svg class="icon" aria-hidden="true"><use href="#icon-share"></use></svg><span class="icon-label">分享</span>
                        </button>
                    </form>
                </li>
                
                <li>
                    <button class="page-button" title="本地阅读演示不提供此服务操作" data-fetch-content-entry="true" data-fetch-content-url="/entry/download/3" data-label-loading="加载中…" disabled=""><svg class="icon" aria-hidden="true"><use href="#icon-scraper"></use></svg><span class="icon-label">下载</span></button>
                </li>
                
            </ul>
        </div>
        
        <div class="entry-meta" dir="auto">
            <span class="entry-website">
                
                
                <a href="/feed/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">本地设计观察（虚构订阅）</a>
                
            </span>
            
            <span class="entry-author">
                
                – <em>本地演示作者</em>
                
            </span>
            
            
            <span class="category">
                <a href="/category/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">本地阅读</a>
            </span>
            
        </div>
        
        <div class="entry-tags">
            标签：
            
            
            
            

            <ul class="entry-tags-list">
                
                    
                        
                            <li><a href="/tags/%E9%98%85%E8%AF%BB/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>阅读</strong></a></li>
                        
                    
                
                    
                        
                            <li><a href="/tags/%E8%AE%BE%E8%AE%A1/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>设计</strong></a></li>
                        
                    
                
                    
                        
                            <li><a href="/tags/%E7%A0%94%E7%A9%B6/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>研究</strong></a></li>
                        
                    
                
                    
                        
                            <li><a href="/tags/%E6%8E%92%E7%89%88/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>排版</strong></a></li>
                        
                    
                
                    
                        
                            <li><a href="/tags/%E6%9C%AC%E5%9C%B0/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>本地</strong></a></li>
                        
                    
                
                    
                
                    
                
            </ul>

            
                <details class="entry-additional-tags">
                    <summary>
                        显示 2 个更多标签
                    </summary>
                    <ul class="entry-tags-list">
                    
                        
                    
                        
                    
                        
                    
                        
                    
                        
                    
                        
                            
                                <li><a href="/tags/%E4%BE%BF%E7%AC%BA/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>便笺</strong></a></li>
                            
                        
                    
                        
                            
                                <li><a href="/tags/%E7%95%8C%E9%9D%A2/entries/all" aria-disabled="true" title="本地演示未接入此导航或外部服务"><strong>界面</strong></a></li>
                            
                        
                    
                    </ul>
                </details>
            
        </div>
        
        <div class="entry-external-link">
            <a href="https://example.invalid/article" rel="noopener" data-original-link="false" aria-disabled="true" title="本地演示未接入此导航或外部服务">https://example.invalid/article</a>
        </div>
        <div class="entry-date">
            
            <time datetime="2026-01-03 12:00:00 UTC" title="2026-01-03 12:00:00 UTC">2026-01-03 12:00:00 UTC</time>
            
            
            ·
            <span class="entry-reading-time">
                需要 3 分钟阅读
            </span>
            
        </div>
    </header>
</section>


    <main id="main">
        


<div class="pagination-entry-top">
    
<div class="pagination">
    <div class="pagination-prev ">
        
            <a href="/unread/entry/2" title="把收件箱变成阅读路径" data-page="previous" rel="prev">上一页</a>
        
    </div>

    <a href="#" class="elevator"><svg class="icon" aria-hidden="true"><use href="#icon-up"></use></svg>返回顶部</a>

    <div class="pagination-next disabled">
        
            下一页
        
    </div>
</div>

</div>


<article class="entry-content " dir="auto" lang="zh-CN">
    

    
        <p>这篇文章是为了演示原 Miniflux 阅读模板而创作的虚构本地文本，没有抓取外部网站。</p><h2>阅读从清楚的层级开始</h2><p>信息的密度并非越低越好。标题、段落、引用与列表共同建立节奏，让读者知道自己处于哪里。</p><blockquote>工具可以帮助安排顺序，理解仍然需要停下来阅读。</blockquote><ul><li>先浏览主题与来源。</li><li>记录尚未理解的段落。</li><li>把相关问题留给下一次探索。</li></ul><h2>带着问题继续</h2><p>每条阅读记录都可以成为下一段研究的入口。本演示只改变当前页面内存里的状态，不向服务发送已读、收藏或同步请求。</p><table><thead><tr><th>线索</th><th>下一步</th></tr></thead><tbody><tr><td>概念</td><td>核对定义</td></tr><tr><td>判断</td><td>寻找依据</td></tr></tbody></table>
    
</article>



<div class="pagination-entry-bottom">
    
<div class="pagination">
    <div class="pagination-prev ">
        
            <a href="/unread/entry/2" title="把收件箱变成阅读路径" data-page="previous" rel="prev">上一页</a>
        
    </div>

    <a href="#" class="elevator"><svg class="icon" aria-hidden="true"><use href="#icon-up"></use></svg>返回顶部</a>

    <div class="pagination-next disabled">
        
            下一页
        
    </div>
</div>

</div>


    </main>
    

    <template id="icon-read"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg></template>
    <template id="icon-unread"><svg class="icon" aria-hidden="true"><use href="#icon-unread"></use></svg></template>
    <template id="icon-star"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg></template>
    <template id="icon-unstar"><svg class="icon" aria-hidden="true"><use href="#icon-unstar"></use></svg></template>
    <template id="icon-save"><svg class="icon" aria-hidden="true"><use href="#icon-save"></use></svg></template>


`,history:`

    
    <a class="skip-to-content-link" href="#main">跳转至内容</a>
    <header class="header">
        <nav>
            <div class="logo" data-toggle-button-label="菜单">
                <a aria-label="主页" href="/unread">
                    Mini<span>flux</span>
                </a>
                <svg class="icon" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>
            </div>
            <ul id="header-menu">
                <li title="键盘快捷键：g u">
                    <a href="/unread" data-page="unread" aria-label="未读, 3 个未读条目">
                        <svg class="icon" aria-hidden="true"><use href="#icon-entries"></use></svg>未读
                        
                        <span class="unread-counter-wrapper" aria-hidden="true">(<span class="unread-counter">3</span>)</span>
                        
                    </a>
                </li>
                <li title="键盘快捷键：g b">
                    <a href="/starred" data-page="starred"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg>收藏</a>
                </li>
                <li class="active" title="键盘快捷键：g h">
                    <a href="/history" data-page="history"><svg class="icon" aria-hidden="true"><use href="#icon-history"></use></svg>历史记录</a>
                </li>
                <li title="键盘快捷键：g f">
                    <a href="/feeds" data-page="feeds" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-feeds"></use></svg>订阅源
                      
                    </a>
                    <a href="/subscribe" title="本地演示未接入此导航或外部服务" aria-label="添加订阅源" aria-disabled="true">
                        (+)
                    </a>
                </li>
                <li title="键盘快捷键：g c">
                    <a href="/categories" data-page="categories" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-categories"></use></svg>分类</a>
                </li>
                <li title="键盘快捷键：/">
                    <a href="/search" data-page="search" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-search"></use></svg>搜索</a>
                </li>
                <li title="键盘快捷键：g s">
                    <a href="/settings" data-page="settings" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-settings"></use></svg>设置</a>
                </li>
                
                    <li>
                        <form method="post" class="logout-form">
                            <input type="hidden" name="csrf" value="" disabled="">
                            <button type="submit" class="logout-button" title="本地阅读演示不提供此服务操作" disabled=""><svg class="icon" aria-hidden="true"><use href="#icon-logout"></use></svg>登出</button>
                        </form>
                    </li>
                
            </ul>
        </nav>
    </header>
    
    
    

    
<section class="page-header" aria-labelledby="page-header-title page-header-title-count">
    <h1 id="page-header-title">
        历史记录
        <span aria-hidden="true">(3)</span>
    </h1>
    <span id="page-header-title-count" class="sr-only">3 个已读条目</span>
    <nav aria-label="历史记录 菜单">
        <ul>
            
            <li>
                <button class="page-button" data-confirm="true" data-url="/history/flush" data-label-question="您确定吗？" data-label-yes="是" data-label-no="否" data-label-loading="进行中…" disabled="" title="本地阅读演示不提供此服务操作"><svg class="icon" aria-hidden="true"><use href="#icon-delete"></use></svg>清除历史记录</button>
            </li>
            
            <li>
                <a class="page-link" href="/shares" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-share"></use></svg>已共享的条目</a>
            </li>
        </ul>
    </nav>
</section>


    <main id="main">
        

    <div class="pagination-top">
        
<div class="pagination">
    <div class="pagination-backward">
        <div class="pagination-first disabled">
            
                第一页
            
        </div>

        <div class="pagination-prev disabled">
            
                上一页
            
        </div>
    </div>

    <a href="#" class="elevator"><svg class="icon" aria-hidden="true"><use href="#icon-up"></use></svg>返回顶部</a>

    <div class="pagination-forward">
        <div class="pagination-next disabled">
            
                下一页
            
        </div>

        <div class="pagination-last disabled">
            
                最后一页
            
        </div>
    </div>
</div>

    </div>
    <div class="items">
        
        <article class="item entry-item  item-status-unread" data-id="1" aria-labelledby="entry-title-1" tabindex="-1">
            <header class="item-header" dir="auto">
                <h2 id="entry-title-1" class="item-title" lang="zh-CN">
                    <a href="/history/entry/1">
                        
                        为长文留下阅读节奏
                    </a>
                </h2>
                <span class="category">
                    <a href="/category/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">
                        本地阅读
                    </a>
                </span>
            </header>
            <div class="item-meta">
    <ul class="item-meta-info">
        <li class="item-meta-info-title">
            <a href="/feed/1/entries" title="本地演示未接入此导航或外部服务" data-feed-link="true" aria-disabled="true">本地设计观察（虚构订阅）</a>
        </li>
        <li class="item-meta-info-timestamp">
            <time datetime="2026-01-03 12:00:00 UTC" title="2026-01-03 12:00:00 UTC">2026-01-03 12:00:00 UTC</time>
        </li>
        <li class="item-meta-info-reading-time">
            <span>需要 3 分钟阅读</span>
        </li>
        </ul>
    <ul class="item-meta-icons">
        <li class="item-meta-icons-read">
            <button aria-describedby="entry-title-1" title="更改条目状态" data-toggle-status="true" data-label-loading="保存中…" data-label-read="标为已读" data-label-unread="标为未读" data-value="unread"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg><span class="icon-label">标为已读</span></button>
        </li>
        <li class="item-meta-icons-star">
            <button aria-describedby="entry-title-1" data-toggle-starred="true" data-star-url="/entry/star/1" data-label-loading="保存中…" data-label-star="添加收藏" data-label-unstar="取消收藏" data-value="unstar"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg><span class="icon-label">添加收藏</span></button>
        </li>
        <li class="item-meta-icons-external-url">
            <a href="https://example.invalid/article" aria-describedby="entry-title-1" rel="noopener" data-original-link="false" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-external-link"></use></svg><span class="icon-label">外部链接</span></a>
        </li>
        </ul>
</div>

        </article>
        
        <article class="item entry-item  item-status-unread" data-id="2" aria-labelledby="entry-title-2" tabindex="-1">
            <header class="item-header" dir="auto">
                <h2 id="entry-title-2" class="item-title" lang="zh-CN">
                    <a href="/history/entry/2">
                        
                        把收件箱变成阅读路径
                    </a>
                </h2>
                <span class="category">
                    <a href="/category/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">
                        本地阅读
                    </a>
                </span>
            </header>
            <div class="item-meta">
    <ul class="item-meta-info">
        <li class="item-meta-info-title">
            <a href="/feed/1/entries" title="本地演示未接入此导航或外部服务" data-feed-link="true" aria-disabled="true">本地设计观察（虚构订阅）</a>
        </li>
        <li class="item-meta-info-timestamp">
            <time datetime="2026-01-03 12:00:00 UTC" title="2026-01-03 12:00:00 UTC">2026-01-03 12:00:00 UTC</time>
        </li>
        <li class="item-meta-info-reading-time">
            <span>需要 3 分钟阅读</span>
        </li>
        </ul>
    <ul class="item-meta-icons">
        <li class="item-meta-icons-read">
            <button aria-describedby="entry-title-2" title="更改条目状态" data-toggle-status="true" data-label-loading="保存中…" data-label-read="标为已读" data-label-unread="标为未读" data-value="unread"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg><span class="icon-label">标为已读</span></button>
        </li>
        <li class="item-meta-icons-star">
            <button aria-describedby="entry-title-2" data-toggle-starred="true" data-star-url="/entry/star/2" data-label-loading="保存中…" data-label-star="添加收藏" data-label-unstar="取消收藏" data-value="unstar"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg><span class="icon-label">添加收藏</span></button>
        </li>
        <li class="item-meta-icons-external-url">
            <a href="https://example.invalid/article" aria-describedby="entry-title-2" rel="noopener" data-original-link="false" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-external-link"></use></svg><span class="icon-label">外部链接</span></a>
        </li>
        </ul>
</div>

        </article>
        
        <article class="item entry-item  item-status-unread" data-id="3" aria-labelledby="entry-title-3" tabindex="-1">
            <header class="item-header" dir="auto">
                <h2 id="entry-title-3" class="item-title" lang="zh-CN">
                    <a href="/history/entry/3">
                        
                        可追溯的研究笔记
                    </a>
                </h2>
                <span class="category">
                    <a href="/category/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">
                        本地阅读
                    </a>
                </span>
            </header>
            <div class="item-meta">
    <ul class="item-meta-info">
        <li class="item-meta-info-title">
            <a href="/feed/1/entries" title="本地演示未接入此导航或外部服务" data-feed-link="true" aria-disabled="true">本地设计观察（虚构订阅）</a>
        </li>
        <li class="item-meta-info-timestamp">
            <time datetime="2026-01-03 12:00:00 UTC" title="2026-01-03 12:00:00 UTC">2026-01-03 12:00:00 UTC</time>
        </li>
        <li class="item-meta-info-reading-time">
            <span>需要 3 分钟阅读</span>
        </li>
        </ul>
    <ul class="item-meta-icons">
        <li class="item-meta-icons-read">
            <button aria-describedby="entry-title-3" title="更改条目状态" data-toggle-status="true" data-label-loading="保存中…" data-label-read="标为已读" data-label-unread="标为未读" data-value="unread"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg><span class="icon-label">标为已读</span></button>
        </li>
        <li class="item-meta-icons-star">
            <button aria-describedby="entry-title-3" data-toggle-starred="true" data-star-url="/entry/star/3" data-label-loading="保存中…" data-label-star="添加收藏" data-label-unstar="取消收藏" data-value="unstar"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg><span class="icon-label">添加收藏</span></button>
        </li>
        <li class="item-meta-icons-external-url">
            <a href="https://example.invalid/article" aria-describedby="entry-title-3" rel="noopener" data-original-link="false" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-external-link"></use></svg><span class="icon-label">外部链接</span></a>
        </li>
        </ul>
</div>

        </article>
        
    </div>
    <div class="pagination-bottom">
        
<div class="pagination">
    <div class="pagination-backward">
        <div class="pagination-first disabled">
            
                第一页
            
        </div>

        <div class="pagination-prev disabled">
            
                上一页
            
        </div>
    </div>

    <a href="#" class="elevator"><svg class="icon" aria-hidden="true"><use href="#icon-up"></use></svg>返回顶部</a>

    <div class="pagination-forward">
        <div class="pagination-next disabled">
            
                下一页
            
        </div>

        <div class="pagination-last disabled">
            
                最后一页
            
        </div>
    </div>
</div>

    </div>



    </main>
    

    <template id="icon-read"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg></template>
    <template id="icon-unread"><svg class="icon" aria-hidden="true"><use href="#icon-unread"></use></svg></template>
    <template id="icon-star"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg></template>
    <template id="icon-unstar"><svg class="icon" aria-hidden="true"><use href="#icon-unstar"></use></svg></template>
    <template id="icon-save"><svg class="icon" aria-hidden="true"><use href="#icon-save"></use></svg></template>


`,"history-empty":`

    
    <a class="skip-to-content-link" href="#main">跳转至内容</a>
    <header class="header">
        <nav>
            <div class="logo" data-toggle-button-label="菜单">
                <a aria-label="主页" href="/unread">
                    Mini<span>flux</span>
                </a>
                <svg class="icon" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>
            </div>
            <ul id="header-menu">
                <li title="键盘快捷键：g u">
                    <a href="/unread" data-page="unread" aria-label="未读, 3 个未读条目">
                        <svg class="icon" aria-hidden="true"><use href="#icon-entries"></use></svg>未读
                        
                        <span class="unread-counter-wrapper" aria-hidden="true">(<span class="unread-counter">3</span>)</span>
                        
                    </a>
                </li>
                <li title="键盘快捷键：g b">
                    <a href="/starred" data-page="starred"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg>收藏</a>
                </li>
                <li class="active" title="键盘快捷键：g h">
                    <a href="/history" data-page="history"><svg class="icon" aria-hidden="true"><use href="#icon-history"></use></svg>历史记录</a>
                </li>
                <li title="键盘快捷键：g f">
                    <a href="/feeds" data-page="feeds" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-feeds"></use></svg>订阅源
                      
                    </a>
                    <a href="/subscribe" title="本地演示未接入此导航或外部服务" aria-label="添加订阅源" aria-disabled="true">
                        (+)
                    </a>
                </li>
                <li title="键盘快捷键：g c">
                    <a href="/categories" data-page="categories" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-categories"></use></svg>分类</a>
                </li>
                <li title="键盘快捷键：/">
                    <a href="/search" data-page="search" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-search"></use></svg>搜索</a>
                </li>
                <li title="键盘快捷键：g s">
                    <a href="/settings" data-page="settings" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-settings"></use></svg>设置</a>
                </li>
                
                    <li>
                        <form method="post" class="logout-form">
                            <input type="hidden" name="csrf" value="" disabled="">
                            <button type="submit" class="logout-button" title="本地阅读演示不提供此服务操作" disabled=""><svg class="icon" aria-hidden="true"><use href="#icon-logout"></use></svg>登出</button>
                        </form>
                    </li>
                
            </ul>
        </nav>
    </header>
    
    
    

    
<section class="page-header" aria-labelledby="page-header-title page-header-title-count">
    <h1 id="page-header-title">
        历史记录
        <span aria-hidden="true">(0)</span>
    </h1>
    <span id="page-header-title-count" class="sr-only">0 个已读条目</span>
    <nav aria-label="历史记录 菜单">
        <ul>
            
            <li>
                <a class="page-link" href="/shares" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-share"></use></svg>已共享的条目</a>
            </li>
        </ul>
    </nav>
</section>


    <main id="main">
        

    <p role="alert" class="alert alert-info">当前没有历史记录。</p>



    </main>
    

    <template id="icon-read"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg></template>
    <template id="icon-unread"><svg class="icon" aria-hidden="true"><use href="#icon-unread"></use></svg></template>
    <template id="icon-star"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg></template>
    <template id="icon-unstar"><svg class="icon" aria-hidden="true"><use href="#icon-unstar"></use></svg></template>
    <template id="icon-save"><svg class="icon" aria-hidden="true"><use href="#icon-save"></use></svg></template>


`,list:`

    
    <a class="skip-to-content-link" href="#main">跳转至内容</a>
    <header class="header">
        <nav>
            <div class="logo" data-toggle-button-label="菜单">
                <a aria-label="主页" href="/unread">
                    Mini<span>flux</span>
                </a>
                <svg class="icon" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>
            </div>
            <ul id="header-menu">
                <li class="active" title="键盘快捷键：g u">
                    <a href="/unread" data-page="unread" aria-label="未读, 3 个未读条目">
                        <svg class="icon" aria-hidden="true"><use href="#icon-entries"></use></svg>未读
                        
                        <span class="unread-counter-wrapper" aria-hidden="true">(<span class="unread-counter">3</span>)</span>
                        
                    </a>
                </li>
                <li title="键盘快捷键：g b">
                    <a href="/starred" data-page="starred"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg>收藏</a>
                </li>
                <li title="键盘快捷键：g h">
                    <a href="/history" data-page="history"><svg class="icon" aria-hidden="true"><use href="#icon-history"></use></svg>历史记录</a>
                </li>
                <li title="键盘快捷键：g f">
                    <a href="/feeds" data-page="feeds" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-feeds"></use></svg>订阅源
                      
                    </a>
                    <a href="/subscribe" title="本地演示未接入此导航或外部服务" aria-label="添加订阅源" aria-disabled="true">
                        (+)
                    </a>
                </li>
                <li title="键盘快捷键：g c">
                    <a href="/categories" data-page="categories" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-categories"></use></svg>分类</a>
                </li>
                <li title="键盘快捷键：/">
                    <a href="/search" data-page="search" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-search"></use></svg>搜索</a>
                </li>
                <li title="键盘快捷键：g s">
                    <a href="/settings" data-page="settings" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-settings"></use></svg>设置</a>
                </li>
                
                    <li>
                        <form method="post" class="logout-form">
                            <input type="hidden" name="csrf" value="" disabled="">
                            <button type="submit" class="logout-button" title="本地阅读演示不提供此服务操作" disabled=""><svg class="icon" aria-hidden="true"><use href="#icon-logout"></use></svg>登出</button>
                        </form>
                    </li>
                
            </ul>
        </nav>
    </header>
    
    
    

    
<section class="page-header" aria-labelledby="page-header-title page-header-title-count">
    <h1 id="page-header-title">
        未读
        <span aria-hidden="true">(<span class="unread-counter">3</span>)</span>
    </h1>
    <span id="page-header-title-count" class="sr-only">3 个未读条目</span>
    
    <nav aria-label="未读 菜单">
        <ul>
            <li>
                <button class="page-button" data-action="markPageAsRead" data-show-only-unread="1" data-label-question="您确定吗？" data-label-yes="是" data-label-no="否" data-label-loading="进行中…" disabled="" title="本地阅读演示不提供此服务操作"><svg class="icon" aria-hidden="true"><use href="#icon-mark-page-as-read"></use></svg>将此页标为已读</button>
            </li>
            <li>
                <button class="page-button" data-confirm="true" data-url="/mark-all-as-read" data-redirect-url="/unread" data-label-question="您确定吗？" data-label-yes="是" data-label-no="否" data-label-loading="进行中…" disabled="" title="本地阅读演示不提供此服务操作"><svg class="icon" aria-hidden="true"><use href="#icon-mark-all-as-read"></use></svg>全部标为已读</button>
            </li>
        </ul>
    </nav>
    
</section>


    <main id="main">
        

    <div class="pagination-top">
        
<div class="pagination">
    <div class="pagination-backward">
        <div class="pagination-first disabled">
            
                第一页
            
        </div>

        <div class="pagination-prev disabled">
            
                上一页
            
        </div>
    </div>

    <a href="#" class="elevator"><svg class="icon" aria-hidden="true"><use href="#icon-up"></use></svg>返回顶部</a>

    <div class="pagination-forward">
        <div class="pagination-next disabled">
            
                下一页
            
        </div>

        <div class="pagination-last disabled">
            
                最后一页
            
        </div>
    </div>
</div>
</div>
    <div class="items hide-read-items">
        <article class="item entry-item  item-status-unread" data-id="1" aria-labelledby="entry-title-1" tabindex="-1">
            <header class="item-header" dir="auto">
                <h2 id="entry-title-1" class="item-title" lang="zh-CN">
                    <a href="/unread/entry/1">
                        为长文留下阅读节奏
                    </a>
                </h2>
                <span class="category">
                    <a href="/category/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">
                        本地阅读
                    </a>
                </span>
            </header>
            <div class="item-meta">
    <ul class="item-meta-info">
        <li class="item-meta-info-title">
            <a href="/feed/1/entries" title="本地演示未接入此导航或外部服务" data-feed-link="true" aria-disabled="true">本地设计观察（虚构订阅）</a>
        </li>
        <li class="item-meta-info-timestamp">
            <time datetime="2026-01-03 12:00:00 UTC" title="2026-01-03 12:00:00 UTC">2026-01-03 12:00:00 UTC</time>
        </li>
        <li class="item-meta-info-reading-time">
            <span>需要 3 分钟阅读</span>
        </li>
        </ul>
    <ul class="item-meta-icons">
        <li class="item-meta-icons-read">
            <button aria-describedby="entry-title-1" title="更改条目状态" data-toggle-status="true" data-label-loading="保存中…" data-label-read="标为已读" data-label-unread="标为未读" data-value="unread"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg><span class="icon-label">标为已读</span></button>
        </li>
        <li class="item-meta-icons-star">
            <button aria-describedby="entry-title-1" data-toggle-starred="true" data-star-url="/entry/star/1" data-label-loading="保存中…" data-label-star="添加收藏" data-label-unstar="取消收藏" data-value="unstar"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg><span class="icon-label">添加收藏</span></button>
        </li>
        <li class="item-meta-icons-external-url">
            <a href="https://example.invalid/article" aria-describedby="entry-title-1" rel="noopener" data-original-link="false" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-external-link"></use></svg><span class="icon-label">外部链接</span></a>
        </li>
        </ul>
</div>
</article>
        <article class="item entry-item  item-status-unread" data-id="2" aria-labelledby="entry-title-2" tabindex="-1">
            <header class="item-header" dir="auto">
                <h2 id="entry-title-2" class="item-title" lang="zh-CN">
                    <a href="/unread/entry/2">
                        把收件箱变成阅读路径
                    </a>
                </h2>
                <span class="category">
                    <a href="/category/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">
                        本地阅读
                    </a>
                </span>
            </header>
            <div class="item-meta">
    <ul class="item-meta-info">
        <li class="item-meta-info-title">
            <a href="/feed/1/entries" title="本地演示未接入此导航或外部服务" data-feed-link="true" aria-disabled="true">本地设计观察（虚构订阅）</a>
        </li>
        <li class="item-meta-info-timestamp">
            <time datetime="2026-01-03 12:00:00 UTC" title="2026-01-03 12:00:00 UTC">2026-01-03 12:00:00 UTC</time>
        </li>
        <li class="item-meta-info-reading-time">
            <span>需要 3 分钟阅读</span>
        </li>
        </ul>
    <ul class="item-meta-icons">
        <li class="item-meta-icons-read">
            <button aria-describedby="entry-title-2" title="更改条目状态" data-toggle-status="true" data-label-loading="保存中…" data-label-read="标为已读" data-label-unread="标为未读" data-value="unread"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg><span class="icon-label">标为已读</span></button>
        </li>
        <li class="item-meta-icons-star">
            <button aria-describedby="entry-title-2" data-toggle-starred="true" data-star-url="/entry/star/2" data-label-loading="保存中…" data-label-star="添加收藏" data-label-unstar="取消收藏" data-value="unstar"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg><span class="icon-label">添加收藏</span></button>
        </li>
        <li class="item-meta-icons-external-url">
            <a href="https://example.invalid/article" aria-describedby="entry-title-2" rel="noopener" data-original-link="false" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-external-link"></use></svg><span class="icon-label">外部链接</span></a>
        </li>
        </ul>
</div>
</article>
        <article class="item entry-item  item-status-unread" data-id="3" aria-labelledby="entry-title-3" tabindex="-1">
            <header class="item-header" dir="auto">
                <h2 id="entry-title-3" class="item-title" lang="zh-CN">
                    <a href="/unread/entry/3">
                        可追溯的研究笔记
                    </a>
                </h2>
                <span class="category">
                    <a href="/category/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">
                        本地阅读
                    </a>
                </span>
            </header>
            <div class="item-meta">
    <ul class="item-meta-info">
        <li class="item-meta-info-title">
            <a href="/feed/1/entries" title="本地演示未接入此导航或外部服务" data-feed-link="true" aria-disabled="true">本地设计观察（虚构订阅）</a>
        </li>
        <li class="item-meta-info-timestamp">
            <time datetime="2026-01-03 12:00:00 UTC" title="2026-01-03 12:00:00 UTC">2026-01-03 12:00:00 UTC</time>
        </li>
        <li class="item-meta-info-reading-time">
            <span>需要 3 分钟阅读</span>
        </li>
        </ul>
    <ul class="item-meta-icons">
        <li class="item-meta-icons-read">
            <button aria-describedby="entry-title-3" title="更改条目状态" data-toggle-status="true" data-label-loading="保存中…" data-label-read="标为已读" data-label-unread="标为未读" data-value="unread"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg><span class="icon-label">标为已读</span></button>
        </li>
        <li class="item-meta-icons-star">
            <button aria-describedby="entry-title-3" data-toggle-starred="true" data-star-url="/entry/star/3" data-label-loading="保存中…" data-label-star="添加收藏" data-label-unstar="取消收藏" data-value="unstar"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg><span class="icon-label">添加收藏</span></button>
        </li>
        <li class="item-meta-icons-external-url">
            <a href="https://example.invalid/article" aria-describedby="entry-title-3" rel="noopener" data-original-link="false" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-external-link"></use></svg><span class="icon-label">外部链接</span></a>
        </li>
        </ul>
</div>
</article>
        
    </div>
    <section class="page-footer">
        
        <ul>
            <li>
                <button class="page-button" data-action="markPageAsRead" data-label-question="您确定吗？" data-label-yes="是" data-label-no="否" data-label-loading="进行中…" disabled="" title="本地阅读演示不提供此服务操作">
                    <svg class="icon" aria-hidden="true"><use href="#icon-mark-page-as-read"></use></svg>将此页标为已读
                </button>
            </li>
        </ul>
        
    </section>
    <div class="pagination-bottom">
        
<div class="pagination">
    <div class="pagination-backward">
        <div class="pagination-first disabled">
            
                第一页
            
        </div>

        <div class="pagination-prev disabled">
            
                上一页
            
        </div>
    </div>

    <a href="#" class="elevator"><svg class="icon" aria-hidden="true"><use href="#icon-up"></use></svg>返回顶部</a>

    <div class="pagination-forward">
        <div class="pagination-next disabled">
            
                下一页
            
        </div>

        <div class="pagination-last disabled">
            
                最后一页
            
        </div>
    </div>
</div>

    </div>



    </main>
    

    <template id="icon-read"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg></template>
    <template id="icon-unread"><svg class="icon" aria-hidden="true"><use href="#icon-unread"></use></svg></template>
    <template id="icon-star"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg></template>
    <template id="icon-unstar"><svg class="icon" aria-hidden="true"><use href="#icon-unstar"></use></svg></template>
    <template id="icon-save"><svg class="icon" aria-hidden="true"><use href="#icon-save"></use></svg></template>


`,"list-empty":`

    
    <a class="skip-to-content-link" href="#main">跳转至内容</a>
    <header class="header">
        <nav>
            <div class="logo" data-toggle-button-label="菜单">
                <a aria-label="主页" href="/unread">
                    Mini<span>flux</span>
                </a>
                <svg class="icon" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>
            </div>
            <ul id="header-menu">
                <li class="active" title="键盘快捷键：g u">
                    <a href="/unread" data-page="unread">
                        <svg class="icon" aria-hidden="true"><use href="#icon-entries"></use></svg>未读
                        
                    </a>
                </li>
                <li title="键盘快捷键：g b">
                    <a href="/starred" data-page="starred"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg>收藏</a>
                </li>
                <li title="键盘快捷键：g h">
                    <a href="/history" data-page="history"><svg class="icon" aria-hidden="true"><use href="#icon-history"></use></svg>历史记录</a>
                </li>
                <li title="键盘快捷键：g f">
                    <a href="/feeds" data-page="feeds" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-feeds"></use></svg>订阅源
                      
                    </a>
                    <a href="/subscribe" title="本地演示未接入此导航或外部服务" aria-label="添加订阅源" aria-disabled="true">
                        (+)
                    </a>
                </li>
                <li title="键盘快捷键：g c">
                    <a href="/categories" data-page="categories" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-categories"></use></svg>分类</a>
                </li>
                <li title="键盘快捷键：/">
                    <a href="/search" data-page="search" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-search"></use></svg>搜索</a>
                </li>
                <li title="键盘快捷键：g s">
                    <a href="/settings" data-page="settings" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-settings"></use></svg>设置</a>
                </li>
                
                    <li>
                        <form method="post" class="logout-form">
                            <input type="hidden" name="csrf" value="" disabled="">
                            <button type="submit" class="logout-button" title="本地阅读演示不提供此服务操作" disabled=""><svg class="icon" aria-hidden="true"><use href="#icon-logout"></use></svg>登出</button>
                        </form>
                    </li>
                
            </ul>
        </nav>
    </header>
    
    
    

    
<section class="page-header" aria-labelledby="page-header-title page-header-title-count">
    <h1 id="page-header-title">
        未读
        <span aria-hidden="true">(<span class="unread-counter">0</span>)</span>
    </h1>
    <span id="page-header-title-count" class="sr-only">0 个未读条目</span>
    
</section>


    <main id="main">
        

    <p role="alert" class="alert">没有未读条目。</p>



    </main>
    

    <template id="icon-read"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg></template>
    <template id="icon-unread"><svg class="icon" aria-hidden="true"><use href="#icon-unread"></use></svg></template>
    <template id="icon-star"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg></template>
    <template id="icon-unstar"><svg class="icon" aria-hidden="true"><use href="#icon-unstar"></use></svg></template>
    <template id="icon-save"><svg class="icon" aria-hidden="true"><use href="#icon-save"></use></svg></template>


`,starred:`

    
    <a class="skip-to-content-link" href="#main">跳转至内容</a>
    <header class="header">
        <nav>
            <div class="logo" data-toggle-button-label="菜单">
                <a aria-label="主页" href="/unread">
                    Mini<span>flux</span>
                </a>
                <svg class="icon" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>
            </div>
            <ul id="header-menu">
                <li title="键盘快捷键：g u">
                    <a href="/unread" data-page="unread" aria-label="未读, 3 个未读条目">
                        <svg class="icon" aria-hidden="true"><use href="#icon-entries"></use></svg>未读
                        
                        <span class="unread-counter-wrapper" aria-hidden="true">(<span class="unread-counter">3</span>)</span>
                        
                    </a>
                </li>
                <li class="active" title="键盘快捷键：g b">
                    <a href="/starred" data-page="starred"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg>收藏</a>
                </li>
                <li title="键盘快捷键：g h">
                    <a href="/history" data-page="history"><svg class="icon" aria-hidden="true"><use href="#icon-history"></use></svg>历史记录</a>
                </li>
                <li title="键盘快捷键：g f">
                    <a href="/feeds" data-page="feeds" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-feeds"></use></svg>订阅源
                      
                    </a>
                    <a href="/subscribe" title="本地演示未接入此导航或外部服务" aria-label="添加订阅源" aria-disabled="true">
                        (+)
                    </a>
                </li>
                <li title="键盘快捷键：g c">
                    <a href="/categories" data-page="categories" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-categories"></use></svg>分类</a>
                </li>
                <li title="键盘快捷键：/">
                    <a href="/search" data-page="search" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-search"></use></svg>搜索</a>
                </li>
                <li title="键盘快捷键：g s">
                    <a href="/settings" data-page="settings" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-settings"></use></svg>设置</a>
                </li>
                
                    <li>
                        <form method="post" class="logout-form">
                            <input type="hidden" name="csrf" value="" disabled="">
                            <button type="submit" class="logout-button" title="本地阅读演示不提供此服务操作" disabled=""><svg class="icon" aria-hidden="true"><use href="#icon-logout"></use></svg>登出</button>
                        </form>
                    </li>
                
            </ul>
        </nav>
    </header>
    
    
    

    
<section class="page-header" aria-labelledby="page-header-title page-header-title-count">
    <h1 id="page-header-title" dir="auto">
        收藏
        <span aria-hidden="true"> (3)</span>
    </h1>
    <span id="page-header-title-count" class="sr-only">3 个收藏条目</span>
</section>


    <main id="main">
        

    <div class="pagination-top">
        
<div class="pagination">
    <div class="pagination-backward">
        <div class="pagination-first disabled">
            
                第一页
            
        </div>

        <div class="pagination-prev disabled">
            
                上一页
            
        </div>
    </div>

    <a href="#" class="elevator"><svg class="icon" aria-hidden="true"><use href="#icon-up"></use></svg>返回顶部</a>

    <div class="pagination-forward">
        <div class="pagination-next disabled">
            
                下一页
            
        </div>

        <div class="pagination-last disabled">
            
                最后一页
            
        </div>
    </div>
</div>

    </div>
    <div class="items">
        
        <article class="item entry-item  item-status-unread" data-id="1" aria-labelledby="entry-title-1" tabindex="-1">
            <header class="item-header" dir="auto">
                <h2 id="entry-title-1" class="item-title" lang="zh-CN">
                    <a href="/starred/entry/1">
                        
                        为长文留下阅读节奏
                    </a>
                </h2>
                <span class="category">
                    <a href="/category/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">
                        本地阅读
                    </a>
                </span>
            </header>
            <div class="item-meta">
    <ul class="item-meta-info">
        <li class="item-meta-info-title">
            <a href="/feed/1/entries" title="本地演示未接入此导航或外部服务" data-feed-link="true" aria-disabled="true">本地设计观察（虚构订阅）</a>
        </li>
        <li class="item-meta-info-timestamp">
            <time datetime="2026-01-03 12:00:00 UTC" title="2026-01-03 12:00:00 UTC">2026-01-03 12:00:00 UTC</time>
        </li>
        <li class="item-meta-info-reading-time">
            <span>需要 3 分钟阅读</span>
        </li>
        </ul>
    <ul class="item-meta-icons">
        <li class="item-meta-icons-read">
            <button aria-describedby="entry-title-1" title="更改条目状态" data-toggle-status="true" data-label-loading="保存中…" data-label-read="标为已读" data-label-unread="标为未读" data-value="unread"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg><span class="icon-label">标为已读</span></button>
        </li>
        <li class="item-meta-icons-star">
            <button aria-describedby="entry-title-1" data-toggle-starred="true" data-star-url="/entry/star/1" data-label-loading="保存中…" data-label-star="添加收藏" data-label-unstar="取消收藏" data-value="unstar"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg><span class="icon-label">添加收藏</span></button>
        </li>
        <li class="item-meta-icons-external-url">
            <a href="https://example.invalid/article" aria-describedby="entry-title-1" rel="noopener" data-original-link="false" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-external-link"></use></svg><span class="icon-label">外部链接</span></a>
        </li>
        </ul>
</div>

        </article>
        
        <article class="item entry-item  item-status-unread" data-id="2" aria-labelledby="entry-title-2" tabindex="-1">
            <header class="item-header" dir="auto">
                <h2 id="entry-title-2" class="item-title" lang="zh-CN">
                    <a href="/starred/entry/2">
                        
                        把收件箱变成阅读路径
                    </a>
                </h2>
                <span class="category">
                    <a href="/category/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">
                        本地阅读
                    </a>
                </span>
            </header>
            <div class="item-meta">
    <ul class="item-meta-info">
        <li class="item-meta-info-title">
            <a href="/feed/1/entries" title="本地演示未接入此导航或外部服务" data-feed-link="true" aria-disabled="true">本地设计观察（虚构订阅）</a>
        </li>
        <li class="item-meta-info-timestamp">
            <time datetime="2026-01-03 12:00:00 UTC" title="2026-01-03 12:00:00 UTC">2026-01-03 12:00:00 UTC</time>
        </li>
        <li class="item-meta-info-reading-time">
            <span>需要 3 分钟阅读</span>
        </li>
        </ul>
    <ul class="item-meta-icons">
        <li class="item-meta-icons-read">
            <button aria-describedby="entry-title-2" title="更改条目状态" data-toggle-status="true" data-label-loading="保存中…" data-label-read="标为已读" data-label-unread="标为未读" data-value="unread"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg><span class="icon-label">标为已读</span></button>
        </li>
        <li class="item-meta-icons-star">
            <button aria-describedby="entry-title-2" data-toggle-starred="true" data-star-url="/entry/star/2" data-label-loading="保存中…" data-label-star="添加收藏" data-label-unstar="取消收藏" data-value="unstar"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg><span class="icon-label">添加收藏</span></button>
        </li>
        <li class="item-meta-icons-external-url">
            <a href="https://example.invalid/article" aria-describedby="entry-title-2" rel="noopener" data-original-link="false" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-external-link"></use></svg><span class="icon-label">外部链接</span></a>
        </li>
        </ul>
</div>

        </article>
        
        <article class="item entry-item  item-status-unread" data-id="3" aria-labelledby="entry-title-3" tabindex="-1">
            <header class="item-header" dir="auto">
                <h2 id="entry-title-3" class="item-title" lang="zh-CN">
                    <a href="/starred/entry/3">
                        
                        可追溯的研究笔记
                    </a>
                </h2>
                <span class="category">
                    <a href="/category/1/entries" aria-disabled="true" title="本地演示未接入此导航或外部服务">
                        本地阅读
                    </a>
                </span>
            </header>
            <div class="item-meta">
    <ul class="item-meta-info">
        <li class="item-meta-info-title">
            <a href="/feed/1/entries" title="本地演示未接入此导航或外部服务" data-feed-link="true" aria-disabled="true">本地设计观察（虚构订阅）</a>
        </li>
        <li class="item-meta-info-timestamp">
            <time datetime="2026-01-03 12:00:00 UTC" title="2026-01-03 12:00:00 UTC">2026-01-03 12:00:00 UTC</time>
        </li>
        <li class="item-meta-info-reading-time">
            <span>需要 3 分钟阅读</span>
        </li>
        </ul>
    <ul class="item-meta-icons">
        <li class="item-meta-icons-read">
            <button aria-describedby="entry-title-3" title="更改条目状态" data-toggle-status="true" data-label-loading="保存中…" data-label-read="标为已读" data-label-unread="标为未读" data-value="unread"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg><span class="icon-label">标为已读</span></button>
        </li>
        <li class="item-meta-icons-star">
            <button aria-describedby="entry-title-3" data-toggle-starred="true" data-star-url="/entry/star/3" data-label-loading="保存中…" data-label-star="添加收藏" data-label-unstar="取消收藏" data-value="unstar"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg><span class="icon-label">添加收藏</span></button>
        </li>
        <li class="item-meta-icons-external-url">
            <a href="https://example.invalid/article" aria-describedby="entry-title-3" rel="noopener" data-original-link="false" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-external-link"></use></svg><span class="icon-label">外部链接</span></a>
        </li>
        </ul>
</div>

        </article>
        
    </div>
    <div class="pagination-bottom">
        
<div class="pagination">
    <div class="pagination-backward">
        <div class="pagination-first disabled">
            
                第一页
            
        </div>

        <div class="pagination-prev disabled">
            
                上一页
            
        </div>
    </div>

    <a href="#" class="elevator"><svg class="icon" aria-hidden="true"><use href="#icon-up"></use></svg>返回顶部</a>

    <div class="pagination-forward">
        <div class="pagination-next disabled">
            
                下一页
            
        </div>

        <div class="pagination-last disabled">
            
                最后一页
            
        </div>
    </div>
</div>

    </div>



    </main>
    

    <template id="icon-read"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg></template>
    <template id="icon-unread"><svg class="icon" aria-hidden="true"><use href="#icon-unread"></use></svg></template>
    <template id="icon-star"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg></template>
    <template id="icon-unstar"><svg class="icon" aria-hidden="true"><use href="#icon-unstar"></use></svg></template>
    <template id="icon-save"><svg class="icon" aria-hidden="true"><use href="#icon-save"></use></svg></template>


`,"starred-empty":`

    
    <a class="skip-to-content-link" href="#main">跳转至内容</a>
    <header class="header">
        <nav>
            <div class="logo" data-toggle-button-label="菜单">
                <a aria-label="主页" href="/unread">
                    Mini<span>flux</span>
                </a>
                <svg class="icon" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>
            </div>
            <ul id="header-menu">
                <li title="键盘快捷键：g u">
                    <a href="/unread" data-page="unread" aria-label="未读, 3 个未读条目">
                        <svg class="icon" aria-hidden="true"><use href="#icon-entries"></use></svg>未读
                        
                        <span class="unread-counter-wrapper" aria-hidden="true">(<span class="unread-counter">3</span>)</span>
                        
                    </a>
                </li>
                <li class="active" title="键盘快捷键：g b">
                    <a href="/starred" data-page="starred"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg>收藏</a>
                </li>
                <li title="键盘快捷键：g h">
                    <a href="/history" data-page="history"><svg class="icon" aria-hidden="true"><use href="#icon-history"></use></svg>历史记录</a>
                </li>
                <li title="键盘快捷键：g f">
                    <a href="/feeds" data-page="feeds" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-feeds"></use></svg>订阅源
                      
                    </a>
                    <a href="/subscribe" title="本地演示未接入此导航或外部服务" aria-label="添加订阅源" aria-disabled="true">
                        (+)
                    </a>
                </li>
                <li title="键盘快捷键：g c">
                    <a href="/categories" data-page="categories" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-categories"></use></svg>分类</a>
                </li>
                <li title="键盘快捷键：/">
                    <a href="/search" data-page="search" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-search"></use></svg>搜索</a>
                </li>
                <li title="键盘快捷键：g s">
                    <a href="/settings" data-page="settings" aria-disabled="true" title="本地演示未接入此导航或外部服务"><svg class="icon" aria-hidden="true"><use href="#icon-settings"></use></svg>设置</a>
                </li>
                
                    <li>
                        <form method="post" class="logout-form">
                            <input type="hidden" name="csrf" value="" disabled="">
                            <button type="submit" class="logout-button" title="本地阅读演示不提供此服务操作" disabled=""><svg class="icon" aria-hidden="true"><use href="#icon-logout"></use></svg>登出</button>
                        </form>
                    </li>
                
            </ul>
        </nav>
    </header>
    
    
    

    
<section class="page-header" aria-labelledby="page-header-title page-header-title-count">
    <h1 id="page-header-title" dir="auto">
        收藏
        <span aria-hidden="true"> (0)</span>
    </h1>
    <span id="page-header-title-count" class="sr-only">0 个收藏条目</span>
</section>


    <main id="main">
        

    <p role="alert" class="alert alert-info">没有收藏的条目。</p>



    </main>
    

    <template id="icon-read"><svg class="icon" aria-hidden="true"><use href="#icon-read"></use></svg></template>
    <template id="icon-unread"><svg class="icon" aria-hidden="true"><use href="#icon-unread"></use></svg></template>
    <template id="icon-star"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg></template>
    <template id="icon-unstar"><svg class="icon" aria-hidden="true"><use href="#icon-unstar"></use></svg></template>
    <template id="icon-save"><svg class="icon" aria-hidden="true"><use href="#icon-save"></use></svg></template>


`};var B=`<!--
SPDX-FileCopyrightText: Copyright (c) 2020-2025 Paweł Kuna
SPDX-License-Identifier: MIT
Source: https://github.com/tabler/tabler-icons
-->
<svg xmlns="http://www.w3.org/2000/svg">
    <symbol id="icon-chevron-down" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M6 9l6 6l6 -6"/>
    </symbol>
    <symbol id="icon-read" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <circle cx="12" cy="12" r="9"/>
        <path d="M9 12l2 2l4 -4"/>
    </symbol>
    <symbol id="icon-unread" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <circle cx="12" cy="12" r="9"/>
        <path d="M10 10l4 4m0 -4l-4 4"/>
    </symbol>
    <symbol id="icon-star" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"/>
    </symbol>
    <symbol id="icon-unstar" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"/>
    </symbol>
    <symbol id="icon-save" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
        <circle cx="12" cy="14" r="2"></circle>
        <polyline points="14 4 14 8 8 8 8 4"></polyline>
    </symbol>
    <symbol id="icon-scraper" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4"/>
        <line x1="12" y1="13" x2="12" y2="22"/>
        <polyline points="9 19 12 22 15 19"/>
    </symbol>
    <symbol id="icon-share" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="6" r="3"/>
        <circle cx="18" cy="18" r="3"/>
        <line x1="8.7" y1="10.7" x2="15.3" y2="7.3"/>
        <line x1="8.7" y1="13.3" x2="15.3" y2="16.7"/>
    </symbol>
    <symbol id="icon-comment" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"/>
        <line x1="12" y1="12" x2="12" y2="12.01"/>
        <line x1="8" y1="12" x2="8" y2="12.01"/>
        <line x1="16" y1="12" x2="16" y2="12.01"/>
    </symbol>
    <symbol id="icon-external-link" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"/>
        <line x1="10" y1="14" x2="20" y2="4"/>
        <polyline points="15 4 20 4 20 9"/>
    </symbol>
    <symbol id="icon-delete" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <line x1="4" y1="7" x2="20" y2="7"/>
        <line x1="10" y1="11" x2="10" y2="17"/>
        <line x1="14" y1="11" x2="14" y2="17"/>
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/>
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>
    </symbol>
    <symbol id="icon-edit" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"/>
        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"/>
        <line x1="16" y1="5" x2="19" y2="8"/>
    </symbol>
    <symbol id="icon-feeds" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="5" cy="19" r="1"></circle>
        <path d="M4 4a16 16 0 0 1 16 16"></path>
        <path d="M4 11a9 9 0 0 1 9 9"></path>
    </symbol>
    <symbol id="icon-entries" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"/>
        <line x1="8" y1="8" x2="12" y2="8"/>
        <line x1="8" y1="12" x2="12" y2="12"/>
        <line x1="8" y1="16" x2="12" y2="16"/>
    </symbol>
    <symbol id="icon-refresh" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5"/>
        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5"/>
    </symbol>
    <symbol id="icon-home" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
    </symbol>
    <symbol id="icon-mark-page-as-read" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M5 12l5 5l10 -10"/>
    </symbol>
    <symbol id="icon-mark-all-as-read" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M7 12l5 5l10 -10"/>
       <path d="M2 12l5 5m5 -5l5 -5"/>
    </symbol>
    <symbol id="icon-show-all-entries" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="12" cy="12" r="2"></circle>
        <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
    </symbol>
    <symbol id="icon-show-unread-entries" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="3" y1="3" x2="21" y2="21"></line>
        <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path>
        <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"></path>
    </symbol>
    <symbol id="icon-add-category" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"></path>
        <line x1="12" y1="10" x2="12" y2="16"></line>
        <line x1="9" y1="13" x2="15" y2="13"></line>
    </symbol>
    <symbol id="icon-add-feed" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </symbol>
    <symbol id="icon-feed-import" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
        <path d="M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3"></path>
    </symbol>
    <symbol id="icon-feed-export" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
        <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3"></path>
    </symbol>
    <symbol id="icon-categories" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
        <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2"></path>
    </symbol>
    <symbol id="icon-about" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="12" cy="12" r="9"></circle>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
        <polyline points="11 12 12 12 12 16 13 16"></polyline>
    </symbol>
    <symbol id="icon-users" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
    </symbol>
    <symbol id="icon-settings" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </symbol>
    <symbol id="icon-sessions" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <polyline points="12 8 12 12 14 14"/>
        <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"/>
    </symbol>
    <symbol id="icon-authentication" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="5" y="11" width="14" height="10" rx="2"/>
        <circle cx="12" cy="16" r="1"/>
        <path d="M8 11v-4a4 4 0 0 1 8 0v4"/>
    </symbol>
    <symbol id="icon-api" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5"></path>
        <path d="M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5"></path>
        <path d="M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5"></path>
        <path d="M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5"></path>
    </symbol>
    <symbol id="icon-third-party-services" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275"></path>
        <path d="M11.683 12.317l5.759 -5.759"></path>
        <circle cx="5.5" cy="5.5" r="1.5"></circle>
        <circle cx="18.5" cy="5.5" r="1.5"></circle>
        <circle cx="18.5" cy="18.5" r="1.5"></circle>
        <circle cx="8.5" cy="15.5" r="4.5"></circle>
    </symbol>
    <symbol id="icon-history" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 8l0 4l2 2"/>
        <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"/>
    </symbol>
    <symbol id="icon-logout" viewBox="0 0 24 24" fill="none"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/>
        <path d="M9 12h12l-3 -3"/><path d="M18 15l3 -3"/>
    </symbol>
    <symbol id="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
        <path d="M21 21l-6 -6"/>
    </symbol>
    <symbol id="icon-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="4" x2="12" y2="20"/>
        <line x1="12" y1="4" x2="20" y2="12"/>
        <line x1="12" y1="4" x2="4" y2="12"/>
    </symbol>
</svg>
`;var x=class a{constructor(){this.queue=[],this.shortcuts=new Map,this.triggers=new Set}on(e,n){let i=e.split(" ");this.shortcuts.set(e,{keys:i,callback:n}),this.triggers.add(i[0])}listen(){document.onkeydown=e=>{let n=a.getKey(e);if(!(this.isEventIgnored(e,n)||a.isModifierKeyDown(e))){n!=="Enter"&&e.preventDefault(),this.queue.push(n);for(let[i,{keys:s,callback:t}]of this.shortcuts.entries()){if(s.every((u,v)=>u===this.queue[v])){this.queue=[],t(e);return}if(s.length===1&&n===s[0]){this.queue=[],t(e);return}}this.queue.length>=2&&(this.queue=[])}}}isEventIgnored(e,n){return e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"||this.queue.length<1&&!this.triggers.has(n)}static isModifierKeyDown(e){return e.getModifierState("Control")||e.getModifierState("Alt")||e.getModifierState("Meta")}static getKey(e){switch(e.key){case"Esc":return"Escape";case"Up":return"ArrowUp";case"Down":return"ArrowDown";case"Left":return"ArrowLeft";case"Right":return"ArrowRight";default:return e.key}}},T=x;function w(a,e){let n=window.scrollY,i=document.documentElement.clientHeight,s=n+i,t=a.offsetTop+a.offsetHeight;(e||s-t<0||s-a.offsetTop>i)&&window.scrollTo(0,a.offsetTop-10)}function D(a){return[...document.querySelectorAll(a)].filter(n=>n.offsetParent!==null)}function P(){return D(".items .item")}function f(){return document.querySelector(".items")!==null}function A(a){return f()?a?a.closest(".item"):document.querySelector(".current-item"):document.querySelector(".entry")}function O(a){let e=document.createElement("span");return e.classList.add("icon-label"),e.textContent=a,e}function z(a,e,n){let i=document.querySelector(`template#icon-${e}`);if(i){let s=i.content.cloneNode(!0);a.textContent="",a.appendChild(s)}if(n){let s=O(n);a.appendChild(s)}}function U(a,e){a.dataset.value=e,z(a,e==="star"?"unstar":"star",a.dataset[e==="star"?"labelUnstar":"labelStar"])}function q(a,e){a.dataset.value=e,z(a,e==="read"?"unread":"read",a.dataset[e==="read"?"labelUnread":"labelRead"])}function C(a){let e=P();if(e.length===0)return;let n=document.querySelector(".current-item");if(!n){e[0].classList.add("current-item"),e[0].focus(),w(e[0]);return}let i=e.indexOf(n);if(i===-1){n.classList.remove("current-item"),e[0].classList.add("current-item"),e[0].focus(),w(e[0]);return}let s;if(a===9999?s=0:a===-9999?s=e.length-1:s=(i+a+e.length)%e.length,s!==i){let t=e[s];n.classList.remove("current-item"),t.classList.add("current-item"),t.focus(),w(t)}}var c=!1,g=document.hidden,m="list",j=0,d={1:{read:!1,star:!1},2:{read:!1,star:!1},3:{read:!1,star:!1}},r=document.getElementById("root");if(!r)throw Error("missing root");var l,p,H=document.onkeydown,R=a=>m==="history"?d[a].read:m==="starred"?d[a].star:!d[a].read;function S(){for(let a of r.querySelectorAll("a"))a.removeAttribute("href"),a.tabIndex=-1;for(let a of r.querySelectorAll("button,input"))a.disabled=!0}function o(a=m){if(c)return;m=a,j++;let e=["list","starred","history"].includes(a),n=Object.keys(d).filter(R),i=E[e&&n.length===0?a+"-empty":a];if(!i)throw Error("Unknown local screen");S(),r.innerHTML=i;for(let t of r.querySelectorAll(".item")){let u=t.dataset.id;if(e&&!n.includes(u)){t.remove();continue}t.classList.toggle("item-status-read",d[u].read),t.classList.toggle("item-status-unread",!d[u].read)}for(let t of r.querySelectorAll(".item,section.entry")){let u=d[t.dataset.id];if(!u)continue;let v=t.querySelector("[data-toggle-status]"),M=t.querySelector("[data-toggle-starred]");v&&q(v,u.read?"read":"unread"),M&&U(M,u.star?"star":"unstar")}let s=Object.values(d).filter(t=>!t.read).length;if(r.querySelectorAll(".unread-counter").forEach(t=>t.textContent=String(s)),e&&a!=="list"){let t=r.querySelector("#page-header-title");t&&(t.textContent=(a==="starred"?"收藏":"历史记录")+" ("+n.length+")")}r.querySelectorAll("a").forEach(t=>{t.getAttribute("aria-disabled")==="true"&&(t.tabIndex=-1)})}function b(a){if(c||g)return;if(a==="/unread")return o("list");if(a==="/starred")return o("starred");if(a==="/history")return o("history");let e=a.match(/^\/(?:unread|starred|history)\/entry\/([123])$/);if(e)return o(e[1]);(a==="#"||a==="#main")&&window.scrollTo(0,0)}function y(a,e){if(c||g)return;let n=A(a);if(!n||!r.contains(n))return;let i=n.dataset.id;d[i][e]=!d[i][e],o(),document.querySelector("#local-status").textContent="仅本地内存："+(e==="read"?d[i].read?"标记已读":"标记未读":d[i].star?"加入收藏":"移出收藏")}function K(a){if(c||g){a.preventDefault();return}let e=a.target.closest?.("a,button");if(!(!e||!r.contains(e))){if(e.tagName==="A"){a.preventDefault(),e.getAttribute("aria-disabled")!=="true"&&b(e.getAttribute("href"));return}e.matches("[data-toggle-status]")?(a.preventDefault(),y(e,"read")):e.matches("[data-toggle-starred]")?(a.preventDefault(),y(e,"star")):a.preventDefault()}}function h(a){return()=>{!c&&!g&&a()}}function F(){l=new T;for(let e of["j","n","ArrowRight"])l.on(e,h(()=>f()?C(1):b(r.querySelector("[data-page=next]")?.getAttribute("href")||"")));for(let e of["k","p","ArrowLeft"])l.on(e,h(()=>f()?C(-1):b(r.querySelector("[data-page=previous]")?.getAttribute("href")||"")));for(let e of["o","Enter"])l.on(e,h(()=>{let n=r.querySelector(".current-item .item-title a");n&&b(n.getAttribute("href"))}));l.on("g u",h(()=>o("list"))),l.on("g b",h(()=>o("starred"))),l.on("g h",h(()=>o("history"))),l.on("m",h(()=>y(null,"read"))),l.on("f",h(()=>y(null,"star"))),l.on("Escape",h(()=>o("list"))),l.listen();let a=document.onkeydown;p=e=>{!c&&!g&&a(e)},document.onkeydown=p}function L(){g=document.hidden,l?.queue.splice(0),g?(document.onkeydown===p&&(document.onkeydown=H),pauseTasks()):c||(document.onkeydown=p,resumeTasks())}registerCleanup(()=>{if(!c){c=!0,j++,document.onkeydown===p&&(document.onkeydown=H),l?.queue.splice(0),l?.shortcuts.clear(),l?.triggers.clear();for(let a of r.querySelectorAll("button,input,summary"))a.disabled=!0,a.setAttribute("aria-disabled","true");S(),r.replaceChildren(),document.getElementById("sprite-holder")?.remove()}});var k=document.createElement("div");k.id="sprite-holder";k.hidden=!0;k.innerHTML=B;document.body.append(k);o();r.addEventListener("click",a=>{try{K(a)}catch(e){fatal(e)}});document.addEventListener("submit",a=>a.preventDefault(),!0);document.addEventListener("visibilitychange",L);document.getElementById("local-reset").addEventListener("click",()=>{if(!(c||g)){for(let a of Object.values(d))a.read=!1,a.star=!1;o("list"),document.getElementById("local-status").textContent="已重置本地演示"}});F();L();})();
}catch(e){fatal(e)}})();
