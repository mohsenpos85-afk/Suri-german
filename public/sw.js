// Bump this string on each deploy-worthy change to purge old caches.
const CACHE = "suri-v2";

// Minimal app-shell precache (icons + offline fallback document).
const ASSETS = [
  "/index.html",
  "/fuxi-logo.png",
  "/fuxi-mascot.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (e) => {
  // Allow the page to trigger an immediate update if it wants.
  if (e.data === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);

  // Never touch API / auth traffic or cross-origin requests.
  if (url.origin !== self.location.origin) return;
  if (url.hostname.includes("anthropic") || url.hostname.includes("supabase")) return;

  const isNavigation =
    e.request.mode === "navigate" ||
    (e.request.headers.get("accept") || "").includes("text/html");

  // ── HTML / navigation → NETWORK-FIRST ──
  // The HTML references content-hashed asset filenames. If we served a cached
  // HTML, users would keep loading old chunk hashes forever (the stale-app bug).
  if (isNavigation) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put("/index.html", clone));
          return res;
        })
        .catch(() => caches.match("/index.html").then((c) => c || caches.match("/")))
    );
    return;
  }

  // ── Hashed build assets (/assets/*) are immutable → CACHE-FIRST ──
  if (url.pathname.startsWith("/assets/")) {
    e.respondWith(
      caches.match(e.request).then((cached) => {
        if (cached) return cached;
        return fetch(e.request).then((res) => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, clone));
          }
          return res;
        });
      })
    );
    return;
  }

  // ── Everything else (icons, fonts, misc) → STALE-WHILE-REVALIDATE ──
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const net = fetch(e.request)
        .then((res) => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => cached);
      return cached || net;
    })
  );
});
