/* generated from preview-adapters.mjs PREVIEW_ADAPTER_BOOTSTRAP; single source, do not hand-edit the IIFE. In-memory Storage fallback only when native Storage throws; CSS url() mapping is limited to the proven sinks img.src, setAttribute(src), style.backgroundImage, and setProperty(background-image). style.background / setProperty(background) shorthand are uncovered. History is not wrapped in this bootstrap. */
(function(){
function resolveAtlasAsset(src, assets) {
  if (src == null) return src;
  var map = assets || (typeof globalThis !== "undefined" && ((globalThis.window && globalThis.window.__atlasAssets) || globalThis.__atlasAssets));
  if (!map) return src;
  var raw = String(src);
  if (raw.indexOf("blob:") === 0 || raw.indexOf("data:") === 0) return raw;
  var noHash = raw.split("#")[0];
  var path = noHash.split("?")[0];
  var base = path.split("/").pop() || "";
  var keys = [raw, noHash, path];
  if (base) {
    keys.push(base, "assets/" + base);
    if (path.indexOf("./") === 0) keys.push(path.slice(2));
    if (path.charAt(0) === "/") keys.push(path.slice(1));
  }
  try {
    if (/^https?:\/\//i.test(raw)) {
      var u = new URL(raw);
      keys.push(u.origin + u.pathname, u.pathname, u.pathname.split("/").pop());
    }
  } catch (e) {}
  var seen = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!key || seen[key]) continue;
    seen[key] = true;
    if (Object.prototype.hasOwnProperty.call(map, key) && map[key]) return map[key];
  }
  return src;
}

function resolveCssImageValue(value, assets) {
  if (value == null) return value;
  return String(value).replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, function (match, quote, url) {
    var resolved = resolveAtlasAsset(url, assets);
    if (resolved === url) return match;
    var q = quote || '"';
    return "url(" + q + resolved + q + ")";
  });
}

function createMemoryStorage() {
  var map = Object.create(null);
  var api = {
    get length() { return Object.keys(map).length; },
    key: function (i) { var ks = Object.keys(map); return i >= 0 && i < ks.length ? ks[i] : null; },
    getItem: function (k) { k = String(k); return Object.prototype.hasOwnProperty.call(map, k) ? map[k] : null; },
    setItem: function (k, v) { map[String(k)] = String(v); },
    removeItem: function (k) { delete map[String(k)]; },
    clear: function () { for (var k in map) delete map[k]; }
  };
  return new Proxy(api, {
    get: function (target, prop) {
      if (prop === "toJSON" || prop === Symbol.toStringTag) return undefined;
      if (prop in target || typeof prop === "symbol") return target[prop];
      var key = String(prop);
      return Object.prototype.hasOwnProperty.call(map, key) ? map[key] : undefined;
    },
    set: function (target, prop, value) {
      if (prop in target && typeof target[prop] === "function") return true;
      target.setItem(prop, value);
      return true;
    },
    deleteProperty: function (target, prop) {
      target.removeItem(prop);
      return true;
    },
    has: function (target, prop) {
      return prop in target || Object.prototype.hasOwnProperty.call(map, String(prop));
    },
    ownKeys: function () { return Object.keys(map); },
    getOwnPropertyDescriptor: function (target, prop) {
      if (Object.prototype.hasOwnProperty.call(map, String(prop))) {
        return { configurable: true, enumerable: true, writable: true, value: map[String(prop)] };
      }
      if (prop in target) return Object.getOwnPropertyDescriptor(target, prop);
    }
  });
}

function storageUsable(storage) {
  if (!storage) return false;
  var probe = "__atlas_storage_probe__";
  try {
    storage.setItem(probe, "1");
    storage.removeItem(probe);
    return true;
  } catch (e) {
    return false;
  }
}

function installOpaqueStorageFallback(target) {
  target = target || (typeof globalThis !== "undefined" ? globalThis : this);
  var installed = {};
  var names = ["localStorage", "sessionStorage"];
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var current = null;
    try { current = target[name]; } catch (e) { current = null; }
    if (storageUsable(current)) { installed[name] = "native"; continue; }
    var mem = createMemoryStorage();
    try {
      Object.defineProperty(target, name, { configurable: true, enumerable: true, get: (function (store) { return function () { return store; }; })(mem) });
    } catch (e2) {
      try { target[name] = mem; } catch (e3) {}
    }
    installed[name] = "memory-fallback";
  }
  return installed;
}

function assetsOf(target) {
  return target.__atlasAssets || (target.window && target.window.__atlasAssets);
}

function installAtlasAssetBridge(target) {
  target = target || (typeof globalThis !== "undefined" ? globalThis : this);
  if (typeof target.HTMLImageElement === "undefined") return false;
  var proto = target.HTMLImageElement.prototype;
  if (proto.__atlasAssetBridge) return true;
  var desc = Object.getOwnPropertyDescriptor(proto, "src") || (target.HTMLElement && Object.getOwnPropertyDescriptor(target.HTMLElement.prototype, "src"));
  if (desc && desc.set && desc.get) {
    Object.defineProperty(proto, "src", {
      configurable: true,
      enumerable: desc.enumerable,
      get: function () { return desc.get.call(this); },
      set: function (v) { desc.set.call(this, resolveAtlasAsset(v, assetsOf(target))); }
    });
  }
  var nativeSet = proto.setAttribute;
  if (typeof nativeSet === "function") {
    proto.setAttribute = function (name, value) {
      if (String(name).toLowerCase() === "src") value = resolveAtlasAsset(value, assetsOf(target));
      return nativeSet.call(this, name, value);
    };
  }
  proto.__atlasAssetBridge = true;
  return true;
}

function installCssBackgroundBridge(target) {
  target = target || (typeof globalThis !== "undefined" ? globalThis : this);
  var Ctor = target.CSSStyleDeclaration;
  if (!Ctor || !Ctor.prototype) return false;
  var proto = Ctor.prototype;
  if (proto.__atlasCssBackgroundBridge) return true;
  function remap(value) { return resolveCssImageValue(value, assetsOf(target)); }
  var desc = Object.getOwnPropertyDescriptor(proto, "backgroundImage");
  if (desc && desc.set && desc.get) {
    Object.defineProperty(proto, "backgroundImage", {
      configurable: true,
      enumerable: desc.enumerable !== undefined ? desc.enumerable : true,
      get: function () { return desc.get.call(this); },
      set: function (v) { desc.set.call(this, remap(v)); }
    });
  }
  if (typeof proto.setProperty === "function" && !proto.setProperty.__atlasWrapped) {
    var nativeSet = proto.setProperty;
    proto.setProperty = function (name, value, priority) {
      var n = String(name || "").toLowerCase();
      if (n === "background-image") value = remap(value);
      return nativeSet.call(this, name, value, priority);
    };
    proto.setProperty.__atlasWrapped = true;
  }
  proto.__atlasCssBackgroundBridge = true;
  return true;
}

function installPreviewAdapters(target) {
  target = target || (typeof globalThis !== "undefined" ? globalThis : this);
  installOpaqueStorageFallback(target);
  installAtlasAssetBridge(target);
  installCssBackgroundBridge(target);
}
;installPreviewAdapters(typeof window!=="undefined"?window:globalThis);})();
