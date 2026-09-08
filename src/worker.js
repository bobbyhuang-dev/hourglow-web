const REPO = 'bobbyhuang-dev/hourglow';
const RELEASES_PAGE = `https://github.com/${REPO}/releases/latest`;
const CACHE_SECONDS = 600;
const HEADERS = { 'User-Agent': 'hourglow-web (+https://hourglow.bobbyhuang.dev)' };

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/download' || url.pathname === '/download/') {
      return redirectToLatestAsset(request, ctx);
    }
    return env.ASSETS.fetch(request);
  },
};

async function redirectToLatestAsset(request, ctx) {
  const cache = caches.default;
  const cacheKey = new Request(new URL('/download', request.url).toString(), { method: 'GET' });
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const target = (await fromLatestRedirect()) || (await fromApi()) || RELEASES_PAGE;

  const response = new Response(null, {
    status: 302,
    headers: {
      Location: target,
      'Cache-Control': `public, max-age=${CACHE_SECONDS}`,
    },
  });
  if (target !== RELEASES_PAGE) ctx.waitUntil(cache.put(cacheKey, response.clone()));
  return response;
}

// GitHub redirects /releases/latest to /releases/tag/<tag>; assets are named
// HourGlow-<version>.zip where <version> is the tag without its leading "v".
async function fromLatestRedirect() {
  try {
    const res = await fetch(RELEASES_PAGE, { method: 'HEAD', redirect: 'manual', headers: HEADERS });
    const location = res.headers.get('Location') || '';
    const match = location.match(/\/releases\/tag\/(v?(\d+\.\d+\.\d+))$/);
    if (!match) return null;
    return `https://github.com/${REPO}/releases/download/${match[1]}/HourGlow-${match[2]}.zip`;
  } catch {
    return null;
  }
}

async function fromApi() {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: { ...HEADERS, Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) return null;
    const release = await res.json();
    const asset = (release.assets || []).find((a) => /^HourGlow-.*\.zip$/.test(a.name));
    return asset ? asset.browser_download_url : null;
  } catch {
    return null;
  }
}
