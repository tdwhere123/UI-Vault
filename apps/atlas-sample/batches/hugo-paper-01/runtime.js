(()=>{'use strict';let dead=false;const cleanup=[],timers=new Set();const storageValues=new Map();const storage={getItem:k=>storageValues.get(k)??null,setItem:(k,v)=>storageValues.set(k,String(v))};function on(el,type,fn){if(!el)throw Error('missing original control');const safe=e=>{if(dead)return;try{fn(e)}catch(err){fail()}};el.addEventListener(type,safe);cleanup.push(()=>el.removeEventListener(type,safe))}function later(fn,ms){const id=setTimeout(()=>{timers.delete(id);if(!dead)try{fn()}catch(e){fail()}},ms);timers.add(id);return id}function dispose(){if(dead)return;dead=true;for(const id of timers)clearTimeout(id);timers.clear();for(const f of cleanup)f();cleanup.length=0;storageValues.clear();document.documentElement.classList.remove('open');for(const e of document.querySelectorAll('[role=button],.menu__trigger')){e.setAttribute('aria-disabled','true');e.tabIndex=-1}for(const e of document.querySelectorAll('.menu.open'))e.classList.remove('open');window.removeEventListener('pagehide',dispose);window.removeEventListener('atlas:dispose',dispose)}function fail(){dispose();const e=document.createElement('p');e.setAttribute('role','alert');e.textContent='原模板交互已停止；文章仍可阅读。';document.body.prepend(e)}window.addEventListener('pagehide',dispose);window.addEventListener('atlas:dispose',dispose);try{
    
    const htmlClass = document.documentElement.classList;
    later(() => {
      htmlClass.remove('not-ready');
    }, 10);

    
    const btnMenu = document.querySelector('.btn-menu');
    on(btnMenu,'click', () => {
      htmlClass.toggle('open');
    });

    
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    const lightBg = '#faf8f1'.replace(/"/g, '');
    const setDark = (isDark) => {
      metaTheme.setAttribute('content', isDark ? "rgb(0 0 0 / 85%)" : lightBg);
      htmlClass[isDark ? 'add' : 'remove']('dark');
      storage.setItem('dark', isDark);
    };

    
    const darkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (htmlClass.contains('dark')) {
      setDark(true);
    } else {
      const darkVal = storage.getItem('dark');
      setDark(darkVal ? darkVal === 'true' : darkScheme.matches);
    }

    
    on(darkScheme,'change', (event) => {
      setDark(event.matches);
    });

    
    const btnDark = document.querySelector('.btn-dark');
    on(btnDark,'click', () => {
      setDark(storage.getItem('dark') !== 'true');
    });
  
for(const el of document.querySelectorAll('[role=button],.menu__trigger')){el.tabIndex=0;on(el,'keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click()}})}}catch(e){fail()}})();