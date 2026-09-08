const REPO = 'bobbyhuang-dev/hourglow';
const RELEASES_PAGE = `https://github.com/${REPO}/releases/latest`;
const CACHE_SECONDS = 600;

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

  let target = RELEASES_PAGE;
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'hourglow-web (+https://hourglow.bobbyhuang.dev)',
      },
    });
    if (res.ok) {
      const release = await res.json();
      const asset = (release.assets || []).find((a) => /^HourGlow-.*\.zip$/.test(a.name));
      if (asset) target = asset.browser_download_url;
    }
  } catch {
    // Fall back to the releases page.
  }

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
