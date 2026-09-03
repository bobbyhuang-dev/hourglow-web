(function () {
  'use strict';

  var STRINGS = {
    en: {
      metaDescription: "HourGlow switches your macOS wallpaper on a schedule that follows the sun. Free, open source, lives in the menu bar.",
      ogDescription: "Your wallpaper, on the sun's schedule.",
      brandHome: "HourGlow home",
      navSections: "Sections",
      navPanel: "Panel",
      navInstall: "Install",
      navDownload: "Download",
      themeToDark: "Switch to dark mode",
      themeToLight: "Switch to light mode",
      langSwitch: "切换到中文",
      langSwitchLabel: "中文",
      heroLabel: "A day on a Mac running HourGlow",
      wallMorning: "Lake Tahoe at sunrise",
      wallDay: "Lake Tahoe in daylight",
      wallEvening: "Lake Tahoe at dusk",
      wallNight: "Lake Tahoe at night under stars",
      finder: "Finder",
      clockDate: "Wed 3 Sep",
      heroTitle: "Your wallpaper,<br>on <em>the sun's</em> schedule.",
      heroBody: "macOS Tahoe has a wallpaper for every part of the day, and no way to switch them. HourGlow does it for you.",
      heroDownload: "Download for macOS 26",
      heroNote: "Free · Open source · 5 MB · Easy on the battery",
      slotsLabel: "Today's schedule",
      slotMorning: "Morning", ruleMorning: "sunrise",
      slotDay: "Day", ruleDay: "sunrise +2 h",
      slotEvening: "Evening", ruleEvening: "sunset −30 min",
      slotNight: "Night", ruleNight: "sunset +1 h",
      panelTitle: "One panel in the menu bar. No Dock icon, no window.",
      shotTimelineAlt: "The timeline: today's slots with their resolved times.",
      shotTimeline: "Today at a glance. Add as many slots as you like.",
      shotSlotAlt: "A slot editor with Clock, Sunrise and Sunset triggers.",
      shotSlot: "A fixed time, or sunrise and sunset with an offset.",
      shotPickerAlt: "The wallpaper picker showing system aerials.",
      shotPicker: "All 156 system aerials, or any image on disk.",
      whyTitle: "Set it once. <em>Forget it.</em>",
      fact1Title: "Follows the seasons", fact1Body: "Sun times are computed on your Mac. No network, no account.",
      fact2Title: "Light on the battery", fact2Body: "No polling, no background loop. It wakes once at the next switch, then sleeps.",
      fact3Title: "Won't fight you", fact3Body: "Pick a wallpaper yourself and it stays until the next switch.",
      fact4Title: "24-hour wallpaper sets", fact4Body: "Drop in a folder of stills. They spread across the day by sun time.",
      fact5Title: "Nothing until you press Apply", fact5Body: "Edits are a draft. Try things freely.",
      fact6Title: "Tiny", fact6Body: "Under 5 MB, zero third-party code, and it catches up after sleep.",
      installTitle: "Install in a minute.",
      installLead: "Not notarized, so macOS asks once. Then it just runs.",
      step1: "Download, unzip, drag to Applications.",
      step2: "Let it through once.",
      step3: "Open it.",
      step3Body: "The Tahoe schedule is already set up.",
      cliTitle: "Also a command line.",
      cliLead: "Same engine, headless.",
      ctaTitle: "Let the day <em>change</em> your desktop.",
      ctaDownload: "Download HourGlow",
      ctaNote: "macOS 26 Tahoe or later · English and 简体中文",
      footerLinks: "Project links",
      footerSource: "Source",
      footerReleases: "Releases",
      footerContributing: "Contributing"
    },
    'zh-Hans': {
      metaDescription: "HourGlow 按照太阳的节奏，在预定时间切换你的 macOS 壁纸。免费、开源，常驻菜单栏。",
      ogDescription: "你的壁纸，跟着太阳走。",
      brandHome: "HourGlow 首页",
      navSections: "页面栏目",
      navPanel: "面板",
      navInstall: "安装",
      navDownload: "下载",
      themeToDark: "切换到深色模式",
      themeToLight: "切换到浅色模式",
      langSwitch: "Switch to English",
      langSwitchLabel: "EN",
      heroLabel: "运行 HourGlow 的 Mac 上的一天",
      wallMorning: "日出时分的太浩湖",
      wallDay: "白天的太浩湖",
      wallEvening: "黄昏的太浩湖",
      wallNight: "星空下的太浩湖",
      finder: "访达",
      clockDate: "9月3日 周三",
      heroTitle: "你的壁纸，<br>跟着<em>太阳</em>走。",
      heroBody: "macOS Tahoe 为一天中的每个时段都准备了壁纸，却没有办法自动切换。HourGlow 替你做到。",
      heroDownload: "下载 macOS 26 版",
      heroNote: "免费 · 开源 · 5 MB · 省电",
      slotsLabel: "今日日程",
      slotMorning: "早晨", ruleMorning: "日出",
      slotDay: "白天", ruleDay: "日出 +2 小时",
      slotEvening: "傍晚", ruleEvening: "日落 −30 分钟",
      slotNight: "夜晚", ruleNight: "日落 +1 小时",
      panelTitle: "菜单栏里的一个面板。没有 Dock 图标，没有窗口。",
      shotTimelineAlt: "时间线：今天的各个时段及其计算出的时间。",
      shotTimeline: "今天一目了然。想加多少时段都可以。",
      shotSlotAlt: "时段编辑器，可选时钟、日出和日落三种触发方式。",
      shotSlot: "固定时间，或者日出、日落加上偏移。",
      shotPickerAlt: "壁纸选择器，显示系统航拍壁纸。",
      shotPicker: "全部 156 张系统航拍壁纸，或磁盘上的任意图片。",
      whyTitle: "设置一次，<em>然后忘掉它。</em>",
      fact1Title: "跟随季节", fact1Body: "日出日落时间在你的 Mac 上本地计算。不联网，不需要账户。",
      fact2Title: "省电", fact2Body: "不轮询，没有后台循环。到下一次切换时唤醒一次，然后继续休眠。",
      fact3Title: "不跟你抢", fact3Body: "你自己选的壁纸会一直保留到下一次切换。",
      fact4Title: "24 小时壁纸集", fact4Body: "放进一个图片文件夹，它们会按太阳时间铺满一整天。",
      fact5Title: "按下“应用”之前什么都不会变", fact5Body: "编辑只是草稿，放心尝试。",
      fact6Title: "小巧", fact6Body: "不到 5 MB，没有任何第三方代码，睡眠唤醒后也会自动补上。",
      installTitle: "一分钟装好。",
      installLead: "没有经过公证，所以 macOS 会问一次。之后就正常运行。",
      step1: "下载、解压，拖进“应用程序”。",
      step2: "放行一次。",
      step3: "打开它。",
      step3Body: "Tahoe 日程已经预设好了。",
      cliTitle: "也有命令行。",
      cliLead: "同一个引擎，无界面。",
      ctaTitle: "让一天的光线<em>改变</em>你的桌面。",
      ctaDownload: "下载 HourGlow",
      ctaNote: "macOS 26 Tahoe 或更高版本 · 英文和简体中文",
      footerLinks: "项目链接",
      footerSource: "源码",
      footerReleases: "发布版本",
      footerContributing: "参与贡献"
    }
  };

  var root = document.documentElement;
  var themeBtn = document.getElementById('theme-toggle');
  var langBtn = document.getElementById('lang-toggle');
  var clock = document.getElementById('clock');
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function store(key, value) {
    try { value === null ? localStorage.removeItem(key) : localStorage.setItem(key, value); } catch (e) {}
  }
  function load(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function currentLang() {
    return root.getAttribute('lang') === 'zh-Hans' ? 'zh-Hans' : 'en';
  }
  function t(key) {
    var dict = STRINGS[currentLang()];
    return (dict && dict[key]) != null ? dict[key] : STRINGS.en[key];
  }

  function applyAttr(dataAttr, target) {
    var nodes = document.querySelectorAll('[' + dataAttr + ']');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].setAttribute(target, t(nodes[i].getAttribute(dataAttr)));
    }
  }

  function applyLang(lang) {
    root.setAttribute('lang', lang);
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = t(nodes[i].getAttribute('data-i18n'));
    }
    nodes = document.querySelectorAll('[data-i18n-html]');
    for (i = 0; i < nodes.length; i++) {
      nodes[i].innerHTML = t(nodes[i].getAttribute('data-i18n-html'));
    }
    applyAttr('data-i18n-alt', 'alt');
    applyAttr('data-i18n-aria', 'aria-label');
    applyAttr('data-i18n-content', 'content');
    if (langBtn) {
      langBtn.textContent = t('langSwitchLabel');
      langBtn.setAttribute('aria-label', t('langSwitch'));
      langBtn.setAttribute('lang', lang === 'en' ? 'zh-Hans' : 'en');
    }
    updateThemeLabel();
  }

  function updateThemeLabel() {
    if (!themeBtn) return;
    var dark = root.getAttribute('data-theme') === 'dark';
    themeBtn.setAttribute('aria-label', t(dark ? 'themeToLight' : 'themeToDark'));
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    updateThemeLabel();
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      // Choosing the system's own theme clears the override so the site follows it again.
      store('hourglow.theme', next === (systemDark.matches ? 'dark' : 'light') ? null : next);
    });
  }

  var onSystemChange = function () {
    if (load('hourglow.theme')) return;
    applyTheme(systemDark.matches ? 'dark' : 'light');
  };
  if (systemDark.addEventListener) systemDark.addEventListener('change', onSystemChange);
  else if (systemDark.addListener) systemDark.addListener(onSystemChange);

  if (langBtn) {
    langBtn.addEventListener('click', function () {
      var next = currentLang() === 'en' ? 'zh-Hans' : 'en';
      applyLang(next);
      store('hourglow.lang', next);
    });
  }

  applyLang(currentLang());

  // Hero: a desktop that lives through one day.
  var walls = document.querySelectorAll('.wall');
  var slots = document.querySelectorAll('.slots li');
  if (walls.length !== 4 || slots.length !== 4 || !clock) return;
  var clockDate = clock.querySelector('.menubar-date');
  var clockTime = clock.querySelector('.menubar-time');
  if (!clockDate || !clockTime) return;
  clockDate.textContent = t('clockDate');
  langBtn && langBtn.addEventListener('click', function () { clockDate.textContent = t('clockDate'); });
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var starts = [364, 484, 1086, 1176];
  var dwell = 5000;
  var t0 = null;
  var current = 0;

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function frame(now) {
    if (t0 === null) t0 = now;
    var elapsed = Math.max(0, now - t0) % (dwell * 4);
    var i = Math.floor(elapsed / dwell);
    var f = (elapsed % dwell) / dwell;
    var from = starts[i];
    var to = i === 3 ? starts[0] + 1440 : starts[i + 1];
    var eased = f < 0.5 ? 2 * f * f : 1 - Math.pow(-2 * f + 2, 2) / 2;
    var minutes = Math.floor(from + (to - from) * eased) % 1440;
    var text = pad(Math.floor(minutes / 60)) + ':' + pad(minutes % 60);
    if (clockTime.textContent !== text) clockTime.textContent = text;
    if (i !== current) {
      walls[current].classList.remove('is-active');
      slots[current].classList.remove('is-active');
      walls[i].classList.add('is-active');
      slots[i].classList.add('is-active');
      current = i;
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
