/** Opaque-sandbox storage and host media-address adapters.
 *  Source/composition-boundary helpers only; not a real-browser claim.
 */

export function resolveAtlasAsset(src, assets) {
  if (src == null) return src;
  const map = assets ?? globalThis.window?.__atlasAssets ?? globalThis.__atlasAssets;
  if (!map) return src;
  const raw = String(src);
  if (raw.startsWith('blob:') || raw.startsWith('data:')) return raw;
  const noHash = raw.split('#')[0];
  const path = noHash.split('?')[0];
  const base = path.split('/').pop() || '';
  const candidates = [raw, noHash, path];
  if (base) {
    candidates.push(base, 'assets/' + base);
    if (path.startsWith('./')) candidates.push(path.slice(2));
    if (path.startsWith('/')) candidates.push(path.slice(1));
  }
  const seen = new Set();
  for (const key of candidates) {
    if (!key || seen.has(key)) continue;
    seen.add(key);
    if (Object.prototype.hasOwnProperty.call(map, key) && map[key]) return map[key];
  }
  return src;
}

export function createMemoryStorage() {
  const map = Object.create(null);
  return {
    get length() { return Object.keys(map).length; },
    key(i) { const ks = Object.keys(map); return i >= 0 && i < ks.length ? ks[i] : null; },
    getItem(k) { k = String(k); return Object.prototype.hasOwnProperty.call(map, k) ? map[k] : null; },
    setItem(k, v) { map[String(k)] = String(v); },
    removeItem(k) { delete map[String(k)]; },
    clear() { for (const k of Object.keys(map)) delete map[k]; },
  };
}

function storageUsable(storage) {
  if (!storage) return false;
  const probe = '__atlas_storage_probe__';
  try {
    storage.setItem(probe, '1');
    storage.removeItem(probe);
    return true;
  } catch {
    return false;
  }
}

export function installOpaqueStorageFallback(target = globalThis) {
  const installed = {};
  for (const name of ['localStorage', 'sessionStorage']) {
    let current;
    try { current = target[name]; } catch { current = null; }
    if (storageUsable(current)) { installed[name] = 'native'; continue; }
    const mem = createMemoryStorage();
    try {
      Object.defineProperty(target, name, { configurable: true, enumerable: true, get() { return mem; } });
    } catch {
      try { target[name] = mem; } catch { /* host may be frozen */ }
    }
    installed[name] = 'memory-fallback';
  }
  return installed;
}

export function installAtlasAssetBridge(target = globalThis) {
  if (typeof target.HTMLImageElement === 'undefined') return false;
  const proto = target.HTMLImageElement.prototype;
  if (proto.__atlasAssetBridge) return true;
  const desc = Object.getOwnPropertyDescriptor(proto, 'src') || Object.getOwnPropertyDescriptor(target.HTMLElement?.prototype ?? {}, 'src');
  if (desc?.set && desc?.get) {
    Object.defineProperty(proto, 'src', {
      configurable: true,
      enumerable: desc.enumerable,
      get() { return desc.get.call(this); },
      set(v) { desc.set.call(this, resolveAtlasAsset(v, target.__atlasAssets ?? target.window?.__atlasAssets)); },
    });
  }
  const nativeSet = proto.setAttribute;
  if (typeof nativeSet === 'function') {
    proto.setAttribute = function (name, value) {
      if (String(name).toLowerCase() === 'src') value = resolveAtlasAsset(value, target.__atlasAssets ?? target.window?.__atlasAssets);
      return nativeSet.call(this, name, value);
    };
  }
  proto.__atlasAssetBridge = true;
  return true;
}

/** Compact IIFE installed in the preview health bootstrap, before app code and error listeners. */
export const PREVIEW_ADAPTER_BOOTSTRAP = '(function(){function resolveAtlasAsset(src){var map=(typeof window!=="undefined"&&window.__atlasAssets)||null;if(src==null||!map)return src;var raw=String(src);if(raw.indexOf("blob:")===0||raw.indexOf("data:")===0)return raw;var noHash=raw.split("#")[0];var path=noHash.split("?")[0];var parts=path.split("/");var base=parts[parts.length-1]||"";var keys=[raw,noHash,path];if(base){keys.push(base,"assets/"+base);if(path.indexOf("./")===0)keys.push(path.slice(2));if(path.charAt(0)==="/")keys.push(path.slice(1));}for(var i=0;i<keys.length;i++){var k=keys[i];if(k&&Object.prototype.hasOwnProperty.call(map,k)&&map[k])return map[k];}return src;}function memoryStorage(){var map=Object.create(null);return{get length(){return Object.keys(map).length;},key:function(i){var ks=Object.keys(map);return i>=0&&i<ks.length?ks[i]:null;},getItem:function(k){k=String(k);return Object.prototype.hasOwnProperty.call(map,k)?map[k]:null;},setItem:function(k,v){map[String(k)]=String(v);},removeItem:function(k){delete map[String(k)];},clear:function(){for(var k in map)delete map[k];}};}function installStorage(name){var usable=false;try{var s=window[name];if(!s)throw new Error("missing");var probe="__atlas_storage_probe__";s.setItem(probe,"1");s.removeItem(probe);usable=true;}catch(e){usable=false;}if(usable)return;var mem=memoryStorage();try{Object.defineProperty(window,name,{configurable:true,enumerable:true,get:function(){return mem;}});}catch(e2){try{window[name]=mem;}catch(e3){}}}installStorage("localStorage");installStorage("sessionStorage");if(typeof HTMLImageElement!=="undefined"){var proto=HTMLImageElement.prototype;if(!proto.__atlasAssetBridge){var desc=Object.getOwnPropertyDescriptor(proto,"src");if(desc&&desc.set&&desc.get){Object.defineProperty(proto,"src",{configurable:true,enumerable:true,get:function(){return desc.get.call(this);},set:function(v){desc.set.call(this,resolveAtlasAsset(v));}});}var nativeSet=proto.setAttribute;if(typeof nativeSet==="function"){proto.setAttribute=function(name,value){if(String(name).toLowerCase()==="src")value=resolveAtlasAsset(value);return nativeSet.call(this,name,value);}};proto.__atlasAssetBridge=true;}}})();';
