// Official recipe: esbuild bundles src/entry.tsx (JSX only); Tailwind CLI emits runtime.css from src/global.css.
import {build} from "esbuild";
import path from "node:path";
import {execFileSync} from "node:child_process";
const alias = {
  "@": path.resolve("src"),
  "next/image": path.resolve("src/shims/next-image.tsx"),
  "next/link": path.resolve("src/shims/next-link.tsx"),
};
await build({
  entryPoints: ["src/entry.tsx"],
  bundle: true,
  format: "iife",
  platform: "browser",
  outfile: "runtime.js",
  jsx: "automatic",
  minify: true,
  define: {"process.env.NODE_ENV": '"production"'},
  alias,
});
execFileSync("./node_modules/.bin/tailwindcss", ["-i", "src/global.css", "-o", "runtime.css", "--minify"], {stdio: "inherit"});
