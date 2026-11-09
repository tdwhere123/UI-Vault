(() => {
'use strict';
let disposed=false, failed=false, measured=false, clickTimer=0;
const cleanupListeners=[]; const animations=new Set();
function listen(t,k,f){const safe=e=>{if(!disposed&&!failed){try{f(e)}catch{fail()}}};t.addEventListener(k,safe);cleanupListeners.push(()=>t.removeEventListener(k,safe));}
const status=document.createElement('p');status.setAttribute('role','status');status.className='local-status';document.querySelector('main').append(status);
function cancelAnimations(){for(const a of animations){try{a.cancel()}catch{}}animations.clear();}
function stop(){cancelAnimationFrame(raf);raf=0;clearTimeout(clickTimer);clickTimer=0;cancelAnimations();}
function dropCapture(){const old=pid;pid=null;dragging=false;dock.classList.remove('is-dragging');if(old!==null){try{if(dock.hasPointerCapture(old))dock.releasePointerCapture(old)}catch{}}}
function fail(){if(disposed||failed)return;failed=true;stop();dropCapture();status.textContent='Navigation layout unavailable.';tabs.forEach(t=>t.disabled=true);}
/* ==========================================================================
   MENISCUS — liquid bottom navigation
   Zero dependencies. Four moving parts:

     1. measure()  derives every dimension from the measured bar, then writes
                   them back as custom properties, so CSS and the path always
                   agree about where the bead sits.
     2. trough()   builds the bar's outline as ONE path whose notch is
                   parametric — centre, half-width, depth and lean. Because
                   the notch is computed rather than assembled, it can lean
                   into the travel and shallow out at speed.
     3. loop()     one rAF, one spring. The bead's own velocity drives the
                   lean, the widening and its squash; it stops when settled.
     4. select()   an APG tab list: roving tabindex, arrow/Home/End keys,
                   and panels swapped on a spring.

   The bead can also be dragged: the surface follows your finger and snaps to
   the nearest tab on release.
   ========================================================================== */

const root  = document.documentElement;
const dock  = document.getElementById('dock');
const svg   = document.getElementById('skin');
const fillP = document.getElementById('skinFill');
const bead  = document.getElementById('bead');
const tabs  = [...document.querySelectorAll('[role="tab"]')];
const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')));

const media=matchMedia('(prefers-reduced-motion: reduce)');
const reduced = () => media.matches;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const smooth = (t) => t * t * (3 - 2 * t);

/* Each tab carries its own accent. Read it once so CSS stays the one place
   the palette is written down. */
const hex = (s) => {
  const h = s.trim().replace('#', '');
  const n = parseInt(h.length === 3 ? h.replace(/./g, '$&$&') : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const ACC = tabs.map((t) => hex(getComputedStyle(t).getPropertyValue('--acc') || '#c9f24a'));
/* Written as bare channels so CSS can pick its own alpha: mixing an accent
   with `transparent` through color-mix() goes milky, because the mix runs
   toward transparent BLACK and desaturates on the way. */
const mixRGB = (a, b, t) =>
  `${Math.round(a[0] + (b[0] - a[0]) * t)} ${Math.round(a[1] + (b[1] - a[1]) * t)} ${Math.round(a[2] + (b[2] - a[2]) * t)}`;

/* ==========================================================================
   1 — geometry
   The trough has to clear the bar's own corner, so the bead is sized from
   whichever is tighter: the bar's height, the width of a tab, or the room
   left between the first tab's centre and the corner arc.
   ========================================================================== */
const G = { W: 0, H: 0, R: 17, D: 56, RB: 35, S: 17, CY: -6, slots: [], span: 80 };

/* Half-width of a trough built from a shoulder of radius s tangent to the
   top edge and a bowl of radius rb centred at (·, by). Falls out of the
   external-tangency condition |C1C2| = s + rb. */
const reach = (s, rb, by) => Math.sqrt(Math.max((s + rb) ** 2 - (s - by) ** 2, 1));

function measure() {
  const r = dock.getBoundingClientRect();
  const W = Math.round(r.width), H = Math.round(r.height);
  if (W < 40 || H < 30) return false;

  G.slots = tabs.map((t) => {
    const b = t.getBoundingClientRect();
    return b.left - r.left + b.width / 2;
  });
  G.span = G.slots.length > 1 ? G.slots[1] - G.slots[0] : W;

  G.W = W;
  G.H = H;
  G.R = clamp(H * 0.20, 13, 20);
  G.CY = 0;                       // the bead rides ON the surface line

  let D = Math.min(H * 0.68, G.span * 0.78);
  // The outer shoulder must clear the bar's own corner, so shrink the bead
  // until the whole trough fits between the first tab's centre and the arc.
  const room = G.slots[0] - G.R - 6;
  for (let i = 0; i < 3; i++) {
    const hw = reach(D * 0.22, D / 2 + 6, G.CY);
    if (hw <= room) break;
    D *= room / hw;
  }
  G.D = Math.max(Math.round(D), 30);
  G.S = G.D * 0.22;
  G.RB = G.D / 2 + 6;

  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  dock.style.setProperty('--dock-r', `${G.R.toFixed(1)}px`);
  dock.style.setProperty('--bead-d', `${G.D}px`);
  dock.style.setProperty('--bead-cy', `${G.CY}px`);
  dock.style.setProperty('--rise', `${(H / 2 - G.CY).toFixed(1)}px`);
  return true;
}

/* ==========================================================================
   2 — the skin
   One closed path. Along the top edge the flat run is interrupted by a socket
   built from three tangent arcs: a convex shoulder that turns the edge down,
   a concave bowl that wraps the bead, and a second shoulder back up. Because
   the arcs are solved for tangency rather than eyeballed with Béziers, the
   bowl hugs the bead exactly and the joins are invisible at any size.

   The two shoulder radii are independent — that is where the liquid lives.
   Give the trailing side a longer radius and the leading side a shorter one
   and the surface visibly drags behind the weight that made it.
   ========================================================================== */
function trough(bx, by, rb, sL, sR) {
  const { W, H, R } = G;

  // Shoulder centre sits at (·, s) — radius s below the top edge, so the arc
  // leaves the flat run tangentially. Solve its x from external tangency.
  const wing = (s, side) => {
    const L = s + rb;
    const half = reach(s, rb, by);
    const sx = bx + side * half;
    return { sx, s, tx: sx + ((bx - sx) / L) * s, ty: s + ((by - s) / L) * s };
  };
  const A = wing(sL, -1), B = wing(sR, +1);

  // The bowl runs from A's tangent point to B's the short way, under the bead.
  const a0 = Math.atan2(A.ty - by, A.tx - bx);
  const a1 = Math.atan2(B.ty - by, B.tx - bx);
  let sweep = ((a0 - a1) * 180) / Math.PI;
  while (sweep < 0) sweep += 360;
  const large = sweep > 180 ? 1 : 0;

  const n = (v) => v.toFixed(2);
  return (
    `M0 ${n(R)}` +
    `A${n(R)} ${n(R)} 0 0 1 ${n(R)} 0` +
    `L${n(clamp(A.sx, R, W - R))} 0` +
    `A${n(sL)} ${n(sL)} 0 0 1 ${n(A.tx)} ${n(A.ty)}` +
    `A${n(rb)} ${n(rb)} 0 ${large} 0 ${n(B.tx)} ${n(B.ty)}` +
    `A${n(sR)} ${n(sR)} 0 0 1 ${n(clamp(B.sx, R, W - R))} 0` +
    `L${n(W - R)} 0` +
    `A${n(R)} ${n(R)} 0 0 1 ${n(W)} ${n(R)}` +
    `L${n(W)} ${n(H - R)}` +
    `A${n(R)} ${n(R)} 0 0 1 ${n(W - R)} ${n(H)}` +
    `L${n(R)} ${n(H)}` +
    `A${n(R)} ${n(R)} 0 0 1 0 ${n(H - R)}` +
    `Z`
  );
}

/* ==========================================================================
   3 — the surface, driven by one spring
   ========================================================================== */
let x = 0;            // bead centre, px from the bar's left edge
let v = 0;            // px / s
let target = 0;
let dragging = false;
let raf = 0, last = 0;

function paint() {
  if(disposed||failed||!measured)return;
  try {
  // q is signed travel, −1…1. Everything liquid is a function of it.
  // The normaliser is set so a hop to the next tab reads about half strength
  // and a sweep across the whole bar saturates.
  const q = clamp(v / 1100, -1, 1) * (dragging ? 0.5 : 1);
  const mag = Math.abs(q);

  // The bead never leaves the surface — the liquid is all in the shoulders.
  // The trailing one draws out long, the leading one tightens, and both widen
  // a little with speed, so the socket smears behind the weight in it.
  const sL = clamp(G.S * (1 + 0.06 * mag + 0.40 * q), G.S * 0.55, G.S * 2.1);
  const sR = clamp(G.S * (1 + 0.06 * mag - 0.40 * q), G.S * 0.55, G.S * 2.1);

  const d = trough(x, G.CY, G.RB, sL, sR);
  fillP.setAttribute('d', d);

  // Volume-preserving squash along the direction of travel.
  const sx = 1 + 0.07 * mag;
  bead.style.transform =
    `translate3d(${x.toFixed(2)}px,0,0) scale(${sx.toFixed(3)},${(1 / sx).toFixed(3)})`;

  // Icons rise into the bead as it passes over them — so a drag feels liquid
  // instead of stepped, and the accent is whatever is actually under the bead.
  let near = 0, nd = Infinity;
  for (let i = 0; i < tabs.length; i++) {
    const dx = Math.abs(x - G.slots[i]);
    if (dx < nd) { nd = dx; near = i; }
    tabs[i].style.setProperty('--t', smooth(clamp(1 - dx / (G.span * 0.55), 0, 1)).toFixed(3));
  }

  const side = x >= G.slots[near] ? 1 : -1;
  const other = clamp(near + side, 0, tabs.length - 1);
  const t = other === near ? 0 : clamp(Math.abs(x - G.slots[near]) / G.span, 0, 1);
  root.style.setProperty('--glow-rgb', mixRGB(ACC[near], ACC[other], t));
  }catch{fail()}
}

function loop(now) {
  raf = 0;
  if(disposed||failed||document.hidden||!measured)return;
  const dt = Math.min((now - last) / 1000, 1 / 30);
  last = now;

  // a tap travels 1.5× slower than it used to, so the trough has time to read.
  // K scales by 1/1.5² and C by 1/1.5, which keeps ζ at .81 — same overshoot,
  // same settle, just stretched. dragging stays stiff so it tracks the finger.
  const K = dragging ? 900 : 142;
  const C = dragging ? 52 : 19.3;
  let step = dt;
  while (step > 0) {                                   // substep for stability
    const h = Math.min(step, 1 / 240);
    v += (-K * (x - target) - C * v) * h;
    x += v * h;
    step -= h;
  }

  paint();
  if (Math.abs(x - target) > 0.05 || Math.abs(v) > 0.6 || dragging) run();
  else { x = target; v = 0; paint(); }
}

function run() {
  if(disposed||failed||document.hidden||!measured)return;
  if(reduced()){cancelAnimationFrame(raf);raf=0;x=target;v=0;paint();return;}
  if (raf) return;
  last = performance.now();
  raf = requestAnimationFrame(loop);
}

function jump(to) {
  target = to;
  if (reduced()) { x = to; v = 0; paint(); return; }
  run();
}

/* ==========================================================================
   4 — the tab list (APG: roving tabindex, arrow keys, one panel at a time)
   ========================================================================== */
let current = Math.max(0, tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true'));

function showPanel(i, animate) {
  cancelAnimations();
  panels.forEach((p, n) => { if (n !== i) p.hidden = true; });
  const p = panels[i];
  p.hidden = false;
  if (!animate || reduced() || document.hidden || typeof p.animate !== 'function') return;
  const animation=p.animate(
    [
      { opacity: 0, transform: 'translateY(16px) scale(.985)' },
      { opacity: 1, transform: 'none' },
    ],
    { duration: 460, easing: 'cubic-bezier(.16,.84,.28,1)', fill: 'none' }
  );
  animations.add(animation);animation.onfinish=()=>animations.delete(animation);
}

function select(i, { focus = false, animate = true } = {}) {
  if(disposed||failed||!measured||!Number.isFinite(i))return;
  i=Math.trunc(i);
  current = ((i % tabs.length) + tabs.length) % tabs.length;
  tabs.forEach((t, n) => {
    t.setAttribute('aria-selected', String(n === current));
    t.tabIndex = n === current ? 0 : -1;                // roving tabindex
  });
  showPanel(current, animate);
  if (focus) tabs[current].focus();
  if (animate) jump(G.slots[current]);
  else { x = target = G.slots[current]; v = 0; paint(); }
}

tabs.forEach((t, i) =>
  listen(t,'click', () => { if (!suppressClick) select(i); })
);

listen(document.getElementById('tabs'),'keydown', (e) => {
  const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
  let next = null;
  if (step) next = current + step;
  else if (e.key === 'Home') next = 0;
  else if (e.key === 'End') next = tabs.length - 1;
  if (next === null) return;
  e.preventDefault();
  select(next, { focus: true });
});

/* --- drag the bead ------------------------------------------------------- */
let startX = 0, pid = null, suppressClick = false;

listen(dock,'pointerdown', (e) => {
  if(!measured||document.hidden)return;
  if (e.button !== 0 && e.pointerType === 'mouse') return;
  pid = e.pointerId;
  startX = e.clientX;
  suppressClick = false;
});

listen(dock,'pointermove', (e) => {
  if (e.pointerId !== pid) return;
  if (!dragging && Math.abs(e.clientX - startX) < 7) return;
  if (!dragging) { dragging = true; suppressClick = true; dock.classList.add('is-dragging'); if(typeof dock.setPointerCapture==='function')dock.setPointerCapture(pid); }
  e.preventDefault();
  const left = dock.getBoundingClientRect().left;
  target = clamp(e.clientX - left, G.slots[0], G.slots[G.slots.length - 1]);
  run();
});

function release(e) {
  if (e.pointerId !== pid) return;
  const wasDragging=dragging;
  dropCapture();
  if (!wasDragging) return;
  dragging = false;
  dock.classList.remove('is-dragging');
  let near = 0, nd = Infinity;
  G.slots.forEach((s, i) => { const d = Math.abs(target - s); if (d < nd) { nd = d; near = i; } });
  select(near);
  // Let the click that follows the drag through only if it was a real tap.
  clearTimeout(clickTimer);clickTimer=setTimeout(() => { clickTimer=0;if(!disposed)suppressClick = false; }, 0);
}
listen(dock,'pointerup', release);
listen(dock,'pointercancel', release);

/* ------------------------------------------------------------------ boot -- */
function layout(animate) {
  if(disposed||failed||document.hidden)return;
  try {
    if(!measure()){measured=false;stop();status.textContent='Waiting for a measurable navigation area.';return;}
    measured=true;status.textContent='';
    if (animate) jump(G.slots[current]);
    else { cancelAnimationFrame(raf);raf=0;x = target = G.slots[current]; v = 0; paint(); }
    dock.classList.add('is-ready');
  }catch{fail()}
}
let observer;
function deactivate(){stop();dropCapture();suppressClick=false;if(measured&&!failed){x=target=G.slots[current];v=0;paint();}}
listen(window,'blur',deactivate);
listen(document,'visibilitychange',()=>{if(document.hidden)deactivate();else layout(false)});
listen(media,'change',()=>{if(reduced())deactivate();});
listen(dock,'lostpointercapture',e=>{if(e.pointerId===pid)release(e)});
function destroy(){if(disposed)return;deactivate();disposed=true;observer?.disconnect();cleanupListeners.splice(0).forEach(f=>f());delete window.__meniscus;document.querySelector('main').replaceChildren();}
window.addEventListener('pagehide',destroy);cleanupListeners.push(()=>window.removeEventListener('pagehide',destroy));
layout(false);
try{observer=new ResizeObserver(()=>layout(false));observer.observe(dock);}catch{fail()}
if(document.fonts?.ready)document.fonts.ready.then(()=>{if(!disposed)layout(false)}).catch(()=>{});
select(current,{animate:false});
window.__meniscus={select:(i)=>select(i),slots:()=>[...G.slots]};
})();
