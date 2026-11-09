(()=>{'use strict';let dead=false;const cleanup=[],timers=new Set();const storageValues=new Map();const storage={getItem:k=>storageValues.get(k)??null,setItem:(k,v)=>storageValues.set(k,String(v))};function on(el,type,fn){if(!el)throw Error('missing original control');const safe=e=>{if(dead)return;try{fn(e)}catch(err){fail()}};el.addEventListener(type,safe);cleanup.push(()=>el.removeEventListener(type,safe))}function later(fn,ms){const id=setTimeout(()=>{timers.delete(id);if(!dead)try{fn()}catch(e){fail()}},ms);timers.add(id);return id}function dispose(){if(dead)return;dead=true;for(const id of timers)clearTimeout(id);timers.clear();for(const f of cleanup)f();cleanup.length=0;storageValues.clear();document.documentElement.classList.remove('open');for(const e of document.querySelectorAll('[role=button],.menu__trigger')){e.setAttribute('aria-disabled','true');e.tabIndex=-1}for(const e of document.querySelectorAll('.menu.open'))e.classList.remove('open');window.removeEventListener('pagehide',dispose);window.removeEventListener('atlas:dispose',dispose)}function fail(){dispose();const e=document.createElement('p');e.setAttribute('role','alert');e.textContent='原模板交互已停止；文章仍可阅读。';document.body.prepend(e)}window.addEventListener('pagehide',dispose);window.addEventListener('atlas:dispose',dispose);try{const container = document.querySelector(".container");
const allMenus = document.querySelectorAll(".menu");

// Hide menus on body click
on(document.body,"click", () => {
  allMenus.forEach(menu => {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    }
  });
});

// Reset menus on resize
on(window,"resize", () => {
  allMenus.forEach(menu => {
    menu.classList.remove("open");
  });
});

// Handle desktop menu
allMenus.forEach(menu => {
  const trigger = menu.querySelector(".menu__trigger");
  const dropdown = menu.querySelector(".menu__dropdown");

  on(trigger,"click", e => {
    e.stopPropagation();

    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      // Close all menus...
      allMenus.forEach(m => m.classList.remove("open"));
      // ...before opening the current one
      menu.classList.add("open");
    }

    if (dropdown.getBoundingClientRect().right > container.getBoundingClientRect().right) {
      dropdown.style.left = "auto";
      dropdown.style.right = 0;
    }
  });

  on(dropdown,"click", e => e.stopPropagation());
});

for(const el of document.querySelectorAll('[role=button],.menu__trigger')){el.tabIndex=0;on(el,'keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click()}})}}catch(e){fail()}})();