/**
 * Runs after `vite build`. The site is a single-page app, so the build emits one
 * dist/index.html. Static hosts that serve files as-is (e.g. a Cloudflare
 * drag-and-drop upload) return 404 for /about or /services/<slug> because no
 * file exists at that path. This copies index.html to every route the app
 * defines, so each URL resolves to a real file and React Router takes over.
 *
 * Keep ROUTES in sync with the <Route> list in src/App.jsx. Service slugs are
 * read from servicesData.js so new treatments are picked up automatically.
 */
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const index = join(dist, "index.html");

const servicesSrc = readFileSync(join(root, "src/components/services/servicesData.js"), "utf8");
const slugs = [...servicesSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
if (slugs.length === 0) throw new Error("spa-routes: no service slugs found in servicesData.js");

const ROUTES = ["about", "contact", "services", ...slugs.map((s) => `services/${s}`)];

for (const route of ROUTES) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(index, join(dir, "index.html"));
}

console.log(`spa-routes: wrote index.html for ${ROUTES.length} routes`);
