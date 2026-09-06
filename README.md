# hourglow-web

Promotion site for [HourGlow](https://github.com/bobbyhuang-dev/hourglow), a macOS wallpaper
scheduler: system aerials or your own images, switched by time, sunrise and sunset.

Static HTML, CSS and one browser script, with no runtime dependencies. `assets/` holds the app icon (from
`Resources/HourGlow.icns`) and panel screenshots rendered with `./build/panelshot` in the app repo.

```bash
open index.html                 # preview without installing tools
npm ci                          # install the pinned deployment tools (Node.js 22+)
npm run dev                     # preview through the local Workers runtime
npm run check                   # check JavaScript and validate the deployment
npm run deploy                  # publish using your local Cloudflare login
```

`npm run build` copies only `index.html`, `styles.css`, `site.js`, and `assets/` into
`dist/`. Wrangler publishes that directory, keeping repository and development files
out of the website. Generated files and local credentials are ignored by Git.

## Deployment

The production site is [hourglow.bobbyhuang.dev](https://hourglow.bobbyhuang.dev).
The custom domain is declared in `wrangler.jsonc` and managed by Cloudflare Workers.

GitHub Actions runs `npm run check` on pushes to `main` and pull requests.
Cloudflare Workers Builds deploys pushes to `main` with these settings:

| Setting | Value |
| --- | --- |
| Repository | `bobbyhuang-dev/hourglow-web` |
| Worker | `hourglow-web` |
| Production branch | `main` |
| Root directory | `/` |
| Build command | `npm run check` |
| Deploy command | `npx wrangler deploy` |

Commit changes and push them to `main` to publish. A local commit alone does not
trigger a deployment. The build command must succeed before Cloudflare deploys.
Build status and logs are available in the Worker's **Deployments** tab.

## Theme and language

The header has a light/dark toggle and an English / 简体中文 switch. Both default to the
visitor's system settings and are remembered in `localStorage` (`hourglow.theme`,
`hourglow.lang`). English copy lives in `index.html`; every translatable element carries a
`data-i18n*` attribute whose key maps to both languages in `site.js`. Add new copy in both
places.

`assets/og.png` is the 1200 × 630 share card used by `og:image`, the Twitter card and the
GitHub repository's social preview (upload it by hand under the repo's Settings › General).
It is rendered by the app repo's `Tools/makedemo.sh`, which also produces the README demo GIF:

```bash
cd ../hourglow && ./build.sh && Tools/makedemo.sh   # writes ../hourglow-web/assets/og.png
```

Panel images also use `data-i18n-src` keys in `site.js`: English uses `panel-*.png`,
and Simplified Chinese uses `panel-*-zh-Hans.png`. Keep all three panels available in
both languages and both themes. Language selection updates the image sources; the
existing theme styles select the light or dark image.

To refresh screenshots after a UI change, capture both languages and themes. `--now`
and `TZ` keep the resolved times and countdown consistent. Use a fresh configuration
for each language to keep the same preset schedule and a matching location name. A disposable
`HOURGLOW_HOME` also avoids the running app's scheduler lock and personal settings.

```bash
cd ../hourglow && ./build.sh
bash <<'SH'
set -euo pipefail
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
export TZ=Asia/Shanghai
for lang in en zh-Hans; do
  export HOURGLOW_HOME="$work/$lang/home" HOURGLOW_LANG="$lang"
  locale_suffix=
  city=Shenzhen
  if [ "$lang" = zh-Hans ]; then locale_suffix=-zh-Hans; city=深圳; fi
  ./build/hourglow-cli location 22.5431 114.0579 "$city"
  for appearance in light dark; do
    shots="$work/$lang/$appearance"
    mkdir -p "$shots"
    for page in timeline slot picker; do
      ./build/panelshot "$shots" --only "$page" --appearance "$appearance" --now 2026-09-04T15:55
    done
    theme_suffix=
    if [ "$appearance" = dark ]; then theme_suffix=-dark; fi
    for shot in 1-timeline:timeline 2-slot:slot 3-picker:picker; do
      cp "$shots/${shot%%:*}.png" "../hourglow-web/assets/panel-${shot##*:}${theme_suffix}${locale_suffix}.png"
    done
  done
done
sips -g pixelHeight ../hourglow-web/assets/panel-*.png
SH
```

The `<img>` dimensions must match the generated assets. The slot editor is shorter
in Chinese, so its height also uses a `data-i18n-height` key in `site.js`. Verify
language switching in light and dark mode, including a reload with a saved language
and a first visit from a Chinese browser locale.
