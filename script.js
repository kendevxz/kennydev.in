(() => {
  "use strict";

  /* =========================================================
     PIXEL SPRITES — one character per pixel
     ========================================================= */
  const PALETTE = {
    K: "#14142b", W: "#ffffff", Y: "#ffd23f", O: "#ff8c42", R: "#e63946",
    B: "#8b5a2b", T: "#f4c28b", G: "#b8c0cc", D: "#4a4e69", C: "#3ee6ff",
    L: "#a0e9ff", P: "#9b5de5", V: "#5a189a", U: "#3a86ff", N: "#6fd672",
    M: "#2d6a4f", E: "#ff8fd8", S: "#fff3b0",
  };

  const SPRITES = {
    hand: [
      ".KKKK........",
      "KWWWWKKKKKKK.",
      "KWWWWWWWWWWWK",
      "KWWWWWKKKKKK.",
      "KWWWWWWWK....",
      "KWWWWWWWK....",
      ".KWWWWWK.....",
      "..KKKKK......",
    ],
    knight: [
      "....GGG.....",
      "...GGGGG..W.",
      "...GDDDG..W.",
      "...GGGGG..W.",
      "..UUGGGUU.W.",
      ".UUGGYGGUUW.",
      ".UUGGGGGUYYY",
      ".UUGGGGGU.B.",
      "..UGGGGGU...",
      "...GG.GG....",
      "...GG.GG....",
      "..DDD.DDD...",
    ],
    mage: [
      ".....P......",
      "....PPP.....",
      "...PPPPP....",
      "..PPYPPPP...",
      "PPPPPPPPPPP.",
      "...TTTTT....",
      "...TKTKT..B.",
      "...TTTTT..B.",
      "..VVVVVVV.Y.",
      ".VVVVVVVVVB.",
      ".VVVYVVVV.B.",
      ".VVVVVVVV.B.",
      "..VV..VV....",
    ],
    pilot: [
      "...OOOOO....",
      "..OOWWWOO...",
      "..OCCCCCO...",
      "..OCLCCCO...",
      "..OOOOOOO...",
      "...TTTT.....",
      "..OOOOOOO...",
      ".OOOWWWOOO..",
      ".OOOOOOOOO..",
      ".DOOOOOOOD..",
      "..OO...OO...",
      "..OO...OO...",
      ".DDD...DDD..",
    ],
    slimeKing: [
      ".....Y.Y.Y......",
      ".....YYYYY......",
      ".....YRYRY......",
      "....NNNNNNN.....",
      "...NNNNNNNNN....",
      "..NNWNNNNNNNN...",
      "..NWWNNNNNNNNN..",
      ".NNNNKNNNKNNNNN.",
      ".NNNNKNNNKNNNNN.",
      "NNNNNNNNNNNNNNNN",
      "NNNNNMKKKKMNNNNN",
      "NNNNNNMMMMNNNNNN",
      ".NNNNNNNNNNNNNN.",
      "..MMMMMMMMMMMM..",
    ],
    wyvern: [
      "..........YY........",
      ".........UUUY.......",
      "..UU....UUKUUU......",
      ".UUUU..UUUUUUWW.....",
      "UULUUU.UUUUUUUW.....",
      "ULLLUUUUUUU.........",
      "ULLLLUUUUUU.........",
      ".ULLUUUUUUUU........",
      "..UUUUUUUUUUU.......",
      "....UUUUSSUUU.......",
      "....UUUSSSUUUU....YY",
      ".....UUSSUUUUUUUUUY.",
      "......UUUUUUUUUU....",
      "......UU....UU......",
      ".....YUU...YUU......",
    ],
    colossus: [
      "......DDDDDD......",
      ".....DGGGGGGD.....",
      ".....DGRRRRGD.....",
      ".....DGGGGGGD.....",
      "..DDDDDDDDDDDDDD..",
      ".DGGGDGGGGGGDGGGD.",
      ".DGGGDGGCCGGDGGGD.",
      ".DGGGDGGCCGGDGGGD.",
      ".DGGDDGGGGGGDDGGD.",
      ".DGGD.DGGGGD.DGGD.",
      ".DYYD.DDDDDD.DYYD.",
      ".DGGD.DGGGGD.DGGD.",
      ".DDDD.DGDDGD.DDDD.",
      "......DGD.DGD.....",
      ".....DGGD.DGGD....",
      ".....DDDD.DDDD....",
    ],
    minimech: [
      "..Y......Y..",
      "...Y....Y...",
      "....WWWW....",
      "...WCWWCW...",
      "...WWRRWW...",
      ".UUKKKKKKUU.",
      "UUUWWWWWWUUU",
      "UW.WYYYYW.WU",
      "UW.WWWWWW.WU",
      "GG.KRRRRK.GG",
      "...WWKKWW...",
      "...UU..UU...",
      "..RRR..RRR..",
    ],
    slime: [
      "....UUUU....",
      "..UUUUUUUU..",
      ".UULUUUUUUU.",
      ".ULLUKUUKUU.",
      "UUUUUKUUKUUU",
      "UUUUUUUUUUUU",
      "UUUUUEEUUUUU",
      ".UUUUUUUUUU.",
    ],
    potion: [
      "....BB....",
      "....BB....",
      "...WWWW...",
      "....WW....",
      "...WEEW...",
      "..WEEEEW..",
      ".WRRRRRRW.",
      ".WRWRRRRW.",
      ".WRRRRRRW.",
      "..WRRRRW..",
      "...WWWW...",
    ],
    crystal: [
      "....L....",
      "...LLC...",
      "..LLLCC..",
      "..LWLCC..",
      ".LLWLCCC.",
      ".LLLLCCC.",
      ".LLLLCCC.",
      "..LLLCC..",
      "..LLLCC..",
      "...LCC...",
      "....C....",
    ],
    sword: [
      ".........W",
      "........WL",
      ".......WL.",
      "......WL..",
      ".....WL...",
      "....WL....",
      ".Y.WL.....",
      "..YL......",
      "..BY......",
      ".B..Y.....",
      "B.........",
    ],
    shield: [
      ".GGGGGGGG.",
      "GUUUUUUUUG",
      "GUUUYYUUUG",
      "GUUYYYYUUG",
      "GUUUYYUUUG",
      "GUUUYYUUUG",
      ".GUUUUUUG.",
      "..GUUUUG..",
      "...GUUG...",
      "....GG....",
    ],
    chest: [
      "..BBBBBBBB..",
      ".BTTTTTTTTB.",
      "BTTTTTTTTTTB",
      "BYYYYYYYYYYB",
      "BTTTTYYTTTTB",
      "BTTTTYKTTTTB",
      "BTTTTTTTTTTB",
      "BYYYYYYYYYYB",
      "BBBBBBBBBBBB",
    ],
    d20: [
      ".....PP.....",
      "...PPPPPP...",
      ".PPPWPPPPPP.",
      "PPPWPPPPPPPP",
      "PPPWWWPPPPPP",
      "PPPPWPWWPPPP",
      "PPPPWPPWPPPP",
      "PPPPWWWWPPPP",
      ".PPPPPPPPPP.",
      "...PPPPPP...",
      ".....PP.....",
    ],
    meat: [
      ".......WW...",
      "......WWWW..",
      ".....BBWW...",
      "...BBBBB....",
      "..BBOBBBB...",
      ".BBOOBBBB...",
      ".BBBBBBBB...",
      ".BBBBBBB....",
      "..BBBBB.....",
      ".WW.........",
      "WWWW........",
      ".WW.........",
    ],
    mask: [
      ".WWWW....WWWW.",
      "WWWWWWWWWWWWWW",
      "WWKKKWWWWKKKWW",
      "WKKKKKWWKKKKKW",
      "WWKKKWWWWKKKWW",
      ".WWWWR..RWWWW.",
      "..WWW....WWW..",
    ],
    heart: [
      ".RR...RR.",
      "RRRR.RRRR",
      "RWRRRRRRR",
      "RRRRRRRRR",
      ".RRRRRRR.",
      "..RRRRR..",
      "...RRR...",
      "....R....",
    ],
    star: [
      ".....Y.....",
      "....YYY....",
      "....YYY....",
      "YYYYYYYYYYY",
      ".YYYKYKYYY.",
      "..YYYYYYY..",
      "..YYYYYYY..",
      ".YYYY.YYYY.",
      ".YY.....YY.",
    ],
    gem: [
      "..CCCCCC..",
      ".CWCCCCCC.",
      "CCCCCCCCCC",
      ".CCCCCCCC.",
      "..CCCCCC..",
      "...CCCC...",
      "....CC....",
    ],
    shroom: [
      "....PPPP....",
      "..PPWWPPPP..",
      ".PPWWWPPWWP.",
      "PPPPPPPPWWPP",
      "PWWPPPPPPPPP",
      "PWWPPPWWPPPP",
      ".PPPPPPPPPP.",
      "...TTTTTT...",
      "...TKTTKT...",
      "...TTTTTT...",
      "....TTTT....",
    ],
    tree: [
      "...NN...",
      "..NNNN..",
      ".NNMNNN.",
      "NNNNNMNN",
      ".NMNNNN.",
      "..NNNN..",
      "...BB...",
      "...BB...",
    ],
    rock: [
      "..GGG...",
      ".GGGGD..",
      "GGGGGDD.",
      "GGDGGGD.",
      ".DDDDD..",
    ],
    ruin: [
      "G.....G.",
      "GG...GG.",
      "GDG..GD.",
      "GGGGGGG.",
      "GDGGDGG.",
      "GGGGGGG.",
    ],
  };
  const TOYS = ["minimech", "slime", "potion", "crystal", "sword", "shield", "chest", "d20", "meat", "mask", "heart", "star", "gem", "shroom"];
  const TOY_NAMES = {
    minimech: "MINI MECH", slime: "SLIME PLUSH", potion: "POTION", crystal: "CRYSTAL SHARD",
    sword: "BRONZE SWORD", shield: "KITE SHIELD", chest: "MIMIC (probably)", d20: "D20",
    meat: "WELL-DONE STEAK", mask: "MASQUERADE MASK", heart: "EXTRA HEART", star: "LUCKY STAR",
    gem: "MANA GEM", shroom: "MYSTERY MUSHROOM",
  };

  const cache = new Map();
  function spriteImage(name, scale) {
    const key = name + "@" + scale;
    if (cache.has(key)) return cache.get(key);
    const rows = SPRITES[name];
    const w = Math.max(...rows.map((r) => r.length));
    const c = document.createElement("canvas");
    c.width = w * scale;
    c.height = rows.length * scale;
    const ctx = c.getContext("2d");
    rows.forEach((row, y) => {
      [...row].forEach((ch, x) => {
        const col = PALETTE[ch];
        if (!col) return;
        ctx.fillStyle = col;
        ctx.fillRect(x * scale, y * scale, scale, scale);
      });
    });
    cache.set(key, c);
    return c;
  }
  function spriteCanvas(name, scale) {
    const src = spriteImage(name, scale);
    const c = document.createElement("canvas");
    c.width = src.width;
    c.height = src.height;
    c.getContext("2d").drawImage(src, 0, 0);
    return c;
  }
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const rand = (a, b) => a + Math.random() * (b - a);
  const randInt = ([a, b]) => Math.round(rand(a, b));
  const $ = (id) => document.getElementById(id);
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  /* =========================================================
     STORAGE (best-effort)
     ========================================================= */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } },
  };

  /* =========================================================
     SOUND — tiny chiptune blips
     ========================================================= */
  let audio = null;
  let soundOn = false;
  const soundBtn = $("sound");
  function toggleSound() {
    soundOn = !soundOn;
    if (soundOn && !audio) {
      try { audio = new (window.AudioContext || window.webkitAudioContext)(); } catch { soundOn = false; }
    }
    soundBtn.setAttribute("aria-pressed", String(soundOn));
    soundBtn.textContent = soundOn ? "♪ ON" : "♪ OFF";
    $("cfgState").textContent = soundOn ? "SOUND ON" : "SOUND OFF";
    if (soundOn) blip([523, 659, 784], 0.06);
  }
  soundBtn.addEventListener("click", toggleSound);
  function blip(freqs, dur = 0.08, type = "square") {
    if (!soundOn || !audio) return;
    (Array.isArray(freqs) ? freqs : [freqs]).forEach((f, i) => {
      const t = audio.currentTime + i * dur;
      const o = audio.createOscillator();
      const g = audio.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(0.05, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(audio.destination);
      o.start(t);
      o.stop(t + dur);
    });
  }
  const FANFARE = () => blip([523, 523, 523, 523, 415, 466, 523, 466, 523], 0.11);

  /* =========================================================
     TOASTS
     ========================================================= */
  function bump(el) { el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); }
  void bump;
  const toastEl = $("toast");
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2800);
  }
  const onceKeys = new Set(store.get("kd2-once", []));
  function once(key, fn) {
    if (onceKeys.has(key)) return;
    onceKeys.add(key);
    store.set("kd2-once", [...onceKeys]);
    fn();
  }

  /* =========================================================
     JRPG MENUS — hand cursor + keyboard nav
     ========================================================= */
  function bindMenu(el) {
    const items = [...el.querySelectorAll(".menu-item")].filter((b) => !b.disabled);
    let idx = Math.max(0, items.findIndex((b) => b.classList.contains("active")));
    let cursor = el.querySelector(".cursor");
    if (!cursor) {
      cursor = document.createElement("span");
      cursor.className = "cursor";
      cursor.setAttribute("aria-hidden", "true");
      el.appendChild(cursor);
    }
    const set = (i) => {
      if (!items.length) return;
      idx = (i + items.length) % items.length;
      items.forEach((b, j) => b.classList.toggle("active", j === idx));
      const b = items[idx];
      cursor.style.top = b.offsetTop + b.offsetHeight / 2 - 4 + "px";
      cursor.style.left = b.offsetLeft + 10 + "px";
    };
    items.forEach((b, i) => b.addEventListener("mouseenter", () => set(i)));
    cursor.style.transition = "none";
    set(idx);
    cursor.getBoundingClientRect();
    cursor.style.transition = "";
    return {
      move(d) { set(idx + d); blip(880, 0.03); },
      pick() { items[idx] && items[idx].click(); },
      refresh() { set(idx); },
    };
  }

  /* =========================================================
     TITLE SCREEN
     ========================================================= */
  const starCv = $("stars");
  const sctx = starCv.getContext("2d");
  let stars = [];
  function sizeStars() {
    const r = starCv.getBoundingClientRect();
    starCv.width = r.width;
    starCv.height = r.height;
    stars = Array.from({ length: Math.round((r.width * r.height) / 5000) }, () => ({
      x: Math.random() * r.width, y: Math.random() * r.height * 0.85,
      s: Math.random() < 0.1 ? 2 : 1, p: Math.random() * 6.28, v: rand(0.01, 0.04),
    }));
  }
  let titleVisible = true;
  (function drawStars() {
    if (titleVisible) {
      sctx.clearRect(0, 0, starCv.width, starCv.height);
      for (const s of stars) {
        s.p += s.v;
        sctx.globalAlpha = 0.35 + 0.65 * Math.abs(Math.sin(s.p));
        sctx.fillStyle = s.s > 1 ? "#a0e9ff" : "#fff";
        sctx.fillRect(s.x, s.y, s.s, s.s);
      }
    }
    requestAnimationFrame(drawStars);
  })();
  sizeStars();
  window.addEventListener("resize", sizeStars);
  new IntersectionObserver(([e]) => { titleVisible = e.intersectionRatio > 0.4; }, { threshold: [0, 0.4, 1] })
    .observe($("top"));

  const lines = [
    "CALIBRATING THRUSTERS...",
    "GRINDING TO LV 99...",
    "SHARPENING THE GREAT SWORD...",
    "CONSULTING THE WEAPON TRIANGLE...",
    "WAITING FOR THE FULL MOON...",
    "CARVING MATERIALS...",
    "TRANSFORMING...",
  ];
  const typer = $("typer");
  let li = 0, ci = 0, deleting = false;
  (function type() {
    const line = lines[li];
    ci += deleting ? -1 : 1;
    typer.textContent = line.slice(0, ci);
    let delay = deleting ? 28 : 65;
    if (!deleting && ci === line.length) { deleting = true; delay = 1500; }
    else if (deleting && ci === 0) { deleting = false; li = (li + 1) % lines.length; delay = 300; }
    setTimeout(type, delay);
  })();

  const titleMenuEl = $("titleMenu");
  titleMenuEl.querySelectorAll(".menu-item").forEach((b) => {
    b.addEventListener("click", () => {
      const go = b.dataset.go;
      blip(1046, 0.05);
      if (go === "config") toggleSound();
      else document.querySelector(go).scrollIntoView({ behavior: "smooth" });
    });
  });
  const titleMenu = bindMenu(titleMenuEl);
  if (document.fonts) document.fonts.ready.then(() => titleMenu.refresh());
  window.addEventListener("resize", () => titleMenu.refresh());

  /* =========================================================
     MECHS — classes (each with its own colors and weapons)
     ========================================================= */
  const CLASS_INFO = {
    titan: { code: "HV", stats: [8, 3, 6, 2], wmods: [[0, 0, 2, 0], [1, -1, 4, 0], [1, 0, 3, 0]] },
    striker: { code: "AS", stats: [5, 6, 7, 3], wmods: [[0, 0, 2, 0], [0, 1, 2, 0], [0, 0, 3, 0]] },
    support: { code: "RP", stats: [3, 7, 2, 8], wmods: [[0, 0, 0, 2], [3, -1, 0, 0], [0, 0, 2, 0]] },
  };
  const STAT_NAMES = ["ARMOR", "MOBILITY", "FIREPOWER", "SUPPORT"];

  /* ---------- cel-shaded sprites: flat masks, rim shading, coloured outlines ---------- */
  function celHsl(hex) {
    const n = parseInt(hex.slice(1), 16);
    const r = (n >> 16) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2;
    let h = 0, s = 0;
    if (mx !== mn) { const d = mx - mn; s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); h = (mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4) * 60; }
    return [h, s, l];
  }
  function celHex(h, s, l) {
    h = ((h % 360) + 360) % 360; s = Math.max(0, Math.min(1, s)); l = Math.max(0, Math.min(1, l));
    const c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = l - c / 2;
    const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
    return "#" + [r, g, b].map((v) => Math.round((v + m) * 255).toString(16).padStart(2, "0")).join("");
  }
  // 0 outline, 1 deep shadow, 2 shadow, 3 base, 4 light, 5 glint — shadows lean cool, lights lean warm
  function celRamp(hex) {
    const [h, s, l] = celHsl(hex);
    const to = (t, a) => h + ((((t - h + 540) % 360) - 180) * a);
    return [
      celHex(to(250, 0.3), Math.min(1, s * 0.8 + 0.15), Math.max(0.06, l * 0.22)),
      celHex(to(250, 0.2), Math.min(1, s + 0.05), l * 0.55),
      celHex(to(250, 0.1), s, l * 0.78),
      hex,
      celHex(to(55, 0.12), s * 0.9, l + (1 - l) * 0.4),
      celHex(to(55, 0.15), s * 0.6, l + (1 - l) * 0.78),
    ];
  }
  const celGlow = (hex) => { const [h] = celHsl(hex); return [celHex(h, 0.8, 0.18), hex, hex, hex, celHex(h, 1, 0.82), "#ffffff"]; };

  function celCanvas(w, h) { return { w, h, px: Array.from({ length: h }, () => Array(w).fill(null)) }; }
  function celMask(G, polys) {
    const m = Array.from({ length: G.h }, () => new Uint8Array(G.w));
    for (const pts of polys) {
      const ys = pts.map((p) => p[1]);
      for (let y = Math.max(0, Math.floor(Math.min(...ys))); y <= Math.min(G.h - 1, Math.ceil(Math.max(...ys))); y++)
        for (let x = 0; x < G.w; x++) {
          const px = x + 0.5, py = y + 0.5;
          let inside = false;
          for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
            const [xi, yi] = pts[i], [xj, yj] = pts[j];
            if ((yi > py) !== (yj > py) && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) inside = !inside;
          }
          if (inside) m[y][x] = 1;
        }
    }
    return m;
  }
  const mirrorPts = (pts, W) => pts.map(([x, y]) => [W - x, y]);
  // an ellipse as a polygon, handy for heads, joints, domes
  function oval(cx, cy, rx, ry, n = 20) { return Array.from({ length: n }, (_, i) => [cx + rx * Math.cos((i / n) * 6.283), cy + ry * Math.sin((i / n) * 6.283)]); }

  /* draw one part: fill, rim-shade, outline */
  let XF = null, withSide = (pts, fn) => fn();
  const xfPt = (x, y) => { const p = XF([x + 0.5, y + 0.5]); return [Math.floor(p[0]), Math.floor(p[1])]; };
  function celPart(G, polys, mat, o = {}) {
    if (XF) polys = polys.map((p) => withSide(p, () => p.map(XF)));
    const all = o.sym ? polys.concat(polys.map((p) => mirrorPts(p, G.w))) : polys;
    const m = celMask(G, all);
    const at = (x, y) => y >= 0 && y < G.h && x >= 0 && x < G.w && m[y][x];
    for (let y = 0; y < G.h; y++) for (let x = 0; x < G.w; x++) {
      if (!m[y][x]) continue;
      let t = 3;
      if (!o.flat) {
        if (!at(x, y - 1) || !at(x - 1, y)) t = 4;
        else if (!at(x + 1, y) || !at(x, y + 1)) t = 1;
        else if (!at(x + 2, y) || !at(x, y + 2)) t = 2;
      }
      if (o.tone !== undefined) t = o.tone;
      G.px[y][x] = [mat, t];
    }
    if (o.outline !== false) {
      const add = [];
      for (let y = 0; y < G.h; y++) for (let x = 0; x < G.w; x++) {
        if (m[y][x]) continue;
        if (at(x + 1, y) || at(x - 1, y) || at(x, y + 1) || at(x, y - 1)) add.push([x, y]);
      }
      add.forEach(([x, y]) => (G.px[y][x] = [o.outlineMat || mat, 0]));
    }
    return m;
  }
  function celLine(G, x1, y1, x2, y2, mat, t, sym) {
    if (XF) withSide([[x1, y1], [x2, y2]], () => { [x1, y1] = xfPt(x1, y1); [x2, y2] = xfPt(x2, y2); });
    const n = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)) || 1;
    for (let i = 0; i <= n; i++) {
      const x = Math.round(x1 + ((x2 - x1) * i) / n), y = Math.round(y1 + ((y2 - y1) * i) / n);
      if (x >= 0 && y >= 0 && x < G.w && y < G.h) G.px[y][x] = [mat, t];
      if (sym) { const mx = G.w - 1 - x; if (mx >= 0 && mx < G.w && y >= 0 && y < G.h) G.px[y][mx] = [mat, t]; }
    }
  }
  function celDot(G, x, y, mat, t, sym) {
    if (XF) [x, y] = xfPt(x, y);
    if (x >= 0 && y >= 0 && x < G.w && y < G.h) G.px[y][x] = [mat, t];
    if (sym) { const mx = G.w - 1 - x; if (G.px[y]) G.px[y][mx] = [mat, t]; }
  }
  function celPaint(G, mats, scale) {
    const c = document.createElement("canvas");
    c.width = G.w * scale; c.height = G.h * scale;
    const ctx = c.getContext("2d");
    for (let y = 0; y < G.h; y++) for (let x = 0; x < G.w; x++) {
      const p = G.px[y][x];
      if (!p) continue;
      ctx.fillStyle = mats[p[0]][p[1]];
      ctx.fillRect(x * scale, y * scale, scale, scale);
    }
    return c;
  }

  /* =========================================================
     MECHS — planar "3D block" shading, 72 x 84, glow channel
     ========================================================= */
  const MECH_W = 72, MECH_H = 84;
  const MECH_PRIMARY = [
    { name: "CRIMSON", hex: "#d8323c" }, { name: "MAROON", hex: "#9a1f2a" }, { name: "ORANGE", hex: "#ee7d2c" },
    { name: "AMBER", hex: "#f2c12e" }, { name: "MOSS", hex: "#5aa84a" }, { name: "TEAL", hex: "#1fa39c" },
    { name: "COBALT", hex: "#2f6fe0" }, { name: "NAVY", hex: "#2b3d86" }, { name: "VIOLET", hex: "#6a45d8" },
    { name: "PEARL", hex: "#e3e8f3" }, { name: "GUNMETAL", hex: "#6b7288" }, { name: "OBSIDIAN", hex: "#34374a" },
  ];
  const MECH_SECONDARY = [
    { name: "STEEL", hex: "#555b73" }, { name: "CARBON", hex: "#2c2f40" }, { name: "WHITE", hex: "#eef2fb" },
    { name: "SILVER", hex: "#a9b1c4" }, { name: "SAND", hex: "#cdb48a" }, { name: "OLIVE", hex: "#5b6b3a" },
  ];
  const MECH_GLOW = [
    { name: "CYAN", hex: "#3ee6ff" }, { name: "LIME", hex: "#8dff5a" }, { name: "GOLD", hex: "#ffd23f" },
    { name: "MAGENTA", hex: "#ff4fd8" }, { name: "RED", hex: "#ff3b3b" }, { name: "VIOLET", hex: "#b388ff" }, { name: "WHITE", hex: "#f5f7ff" },
  ];
  const MECH_CLASSES = {
    titan: { name: "TITAN", role: "HEAVY", accent: "#f2b632", def: { primary: 0, secondary: 0, glow: 3 }, weapons: ["GATLING", "TWIN CANNONS", "HAMMER"] },
    striker: { name: "STRIKER", role: "ASSAULT", accent: "#ffd23f", def: { primary: 6, secondary: 2, glow: 2 }, weapons: ["BEAM RIFLE", "BEAM SABER", "BEAM LANCE"] },
    support: { name: "SUPPORT", role: "REPAIR", accent: "#2a2c3c", def: { primary: 3, secondary: 1, glow: 1 }, weapons: ["REPAIR ARM", "SHIELD", "FLARE GUN"] },
  };
  Object.values(MECH_CLASSES).forEach((c) => {
    c.paints = [{ name: "CLASS", m1: MECH_PRIMARY[c.def.primary].hex, m2: MECH_SECONDARY[c.def.secondary].hex, m3: c.accent, eye: MECH_GLOW[c.def.glow].hex, beam: MECH_GLOW[c.def.glow].hex }];
  });
  const MECH_KEYS = ["titan", "striker", "support"];
  const HOSTILE_PAINT = { name: "HOSTILE", m1: "#8d929e", m2: "#5b1f2e", m3: "#ff3b3b", eye: "#ff3b3b", beam: "#ff3b3b" };

  function mechMats(P) {
    return {
      m1: celRamp(P.m1), m2: celRamp(P.m2), m3: celRamp(P.m3),
      f: celRamp("#565c78"), d: celRamp("#262938"), g: celRamp("#7c839b"),
      glass: celRamp("#5ad1ff"), e: celGlow(P.eye), b: celGlow(P.beam || P.eye),
    };
  }

  // a box seen from slightly above and to the right: lit top, mid front, dark side
  function block(G, x, y, w, h, d, mat, o = {}) {
    const c = o.ch || 0;
    const front = c ? [[x + c, y], [x + w, y], [x + w, y + h], [x, y + h], [x, y + c]] : [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
    const top = d ? [[x + c, y], [x + w, y], [x + w + d, y - d], [x + c + d, y - d]] : null;
    const side = d ? [[x + w, y], [x + w + d, y - d], [x + w + d, y + h - d], [x + w, y + h]] : null;
    const polys = [front].concat(top ? [top, side] : []);
    const mu = celMask(G, polys);
    if (o.outline !== false) {
      const at = (px, py) => py >= 0 && py < G.h && px >= 0 && px < G.w && mu[py][px];
      for (let py = 0; py < G.h; py++) for (let px = 0; px < G.w; px++)
        if (!mu[py][px] && (at(px + 1, py) || at(px - 1, py) || at(px, py + 1) || at(px, py - 1))) G.px[py][px] = [mat, 0];
    }
    const paint = (poly, fn) => { const m = celMask(G, [poly]); for (let py = 0; py < G.h; py++) for (let px = 0; px < G.w; px++) if (m[py][px]) G.px[py][px] = [mat, fn(px, py)]; };
    if (side) paint(side, () => (o.lit ? 2 : 1));
    if (top) paint(top, () => 4);
    const fy1 = y + h - 1;
    paint(front, (px, py) => (py >= fy1 ? 2 : px <= x + (c ? 1 : 0) && py > y + c ? 4 : c && px + py <= x + y + c + 1 ? 4 : 3));
  }
  // place a block mirrored across the centre line, keeping the same lighting
  function blockPair(G, x, y, w, h, d, mat, o) { block(G, x, y, w, h, d, mat, o); block(G, MECH_W - x - w - d, y, w, h, d, mat, o); }
  function hl(G, x1, x2, y, mat, t, pair) { for (let x = x1; x <= x2; x++) { celDot(G, x, y, mat, t); if (pair) celDot(G, MECH_W - 1 - x - (pair === true ? 0 : pair), y, mat, t); } }
  function glowAt(G, pts) { pts.forEach(([x, y, t]) => celDot(G, x, y, "e", t === undefined ? 4 : t)); }

  // any polygon, extruded toward the upper right: faces pointing up are lit, faces pointing right are shaded
  function prism(G, pts, d, mat, o = {}) {
    if (XF) pts = withSide(pts, () => pts.map(XF));
    const cx = pts.reduce((a, p) => a + p[0], 0) / pts.length, cy = pts.reduce((a, p) => a + p[1], 0) / pts.length;
    const faces = [];
    for (let i = 0; i < pts.length; i++) {
      const [x1, y1] = pts[i], [x2, y2] = pts[(i + 1) % pts.length];
      let nx = y2 - y1, ny = -(x2 - x1);
      const mx = (x1 + x2) / 2 - cx, my = (y1 + y2) / 2 - cy;
      if (nx * mx + ny * my < 0) { nx = -nx; ny = -ny; }
      const l = Math.hypot(nx, ny) || 1; nx /= l; ny /= l;
      if (d && nx - ny > 0.2) faces.push({ poly: [[x1, y1], [x2, y2], [x2 + d, y2 - d], [x1 + d, y1 - d]], t: ny < -0.55 ? 4 : nx > 0.55 ? (o.lit ? 2 : 1) : 2 });
    }
    const mu = celMask(G, [pts].concat(faces.map((f) => f.poly)));
    if (o.outline !== false) {
      const at = (px, py) => py >= 0 && py < G.h && px >= 0 && px < G.w && mu[py][px];
      for (let py = 0; py < G.h; py++) for (let px = 0; px < G.w; px++)
        if (!mu[py][px] && (at(px + 1, py) || at(px - 1, py) || at(px, py + 1) || at(px, py - 1))) G.px[py][px] = [o.outlineMat || mat, 0];
    }
    faces.sort((a, b) => a.t - b.t).forEach((f) => {
      const m = celMask(G, [f.poly]);
      for (let py = 0; py < G.h; py++) for (let px = 0; px < G.w; px++) if (m[py][px]) G.px[py][px] = [mat, f.t];
    });
    const m = celMask(G, [pts]);
    const inF = (px, py) => py >= 0 && py < G.h && px >= 0 && px < G.w && m[py][px];
    for (let py = 0; py < G.h; py++) for (let px = 0; px < G.w; px++) {
      if (!m[py][px]) continue;
      let t = 3;
      if (!inF(px, py + 1)) t = 2;
      else if (!inF(px - 1, py) || !inF(px, py - 1)) t = o.flat ? 3 : 4;
      G.px[py][px] = [mat, o.tone !== undefined ? o.tone : t];
    }
  }
  const mir = (pts) => pts.map(([x, y]) => [MECH_W - x, y]);

  /* ---------- pose rig: every part bends with its joint (deg > 0 swings the lower end left) ---------- */
  const POSE_W = 112, POSE_H = 104, POSE_OX = 20, POSE_OY = 16;
  const RIGS = {
    striker: { waist: [36, 46], neck: [36, 22], hip: [30, 50], knee: 62, sh: [16, 29], elbow: 42, hand: [57, 57] },
    titan: { waist: [36, 50], neck: [36, 24], hip: [27, 54], knee: 66, sh: [11, 30], elbow: 49, hand: [61, 64] },
    support: { waist: [36, 46], neck: [36, 26], hip: [32, 51], knee: 60, sh: [19, 32], elbow: 46, hand: [54, 55] },
  };
  // per class, per weapon: lean, head, legs [thigh, shin], arms [upper, fore], weapon angle
  const POSES = {
    striker: [
      { lean: 4, head: -6, legL: [18, -18, -6], legR: [-24, 24, 7], armL: [10, -38], armR: [-14, -76], w: 86 },
      { lean: -4, head: 6, legL: [20, -20, -7], legR: [-26, 26, 8], armL: [14, -44], armR: [-30, -70], w: 116 },
      { lean: 5, head: -4, legL: [18, -18, -6], legR: [-22, 22, 7], armL: [12, -40], armR: [-18, -62], w: 90 },
    ],
    titan: [
      { lean: 3, head: -4, legL: [10, -10, -6], legR: [-10, 10, 6], armL: [10, -30], armR: [0, -86], w: -2, ox: -14 },
      { lean: -2, head: 0, legL: [10, -10, -6], legR: [-10, 10, 6], armL: [24, -70], armR: [-24, 70], w: 0 },
      { lean: -5, head: 6, legL: [12, -12, -6], legR: [-10, 10, 7], armL: [12, -34], armR: [-18, -24], w: 28 },
    ],
    support: [
      { lean: 5, head: 12, legL: [10, -10, -4], legR: [-18, 18, 6], armL: [16, -34], armR: [-52, -34], w: 62 },
      { lean: -4, head: 8, legL: [12, -12, -5], legR: [-12, 12, 5], armL: [8, -50], armR: [-20, -30], w: 8 },
      { lean: 6, head: 10, legL: [10, -10, -4], legR: [-18, 18, 6], armL: [18, -40], armR: [-66, -22], w: 88 },
    ],
  };
  const rotAbout = (p, c, deg) => {
    if (!deg) return p;
    const a = (deg * Math.PI) / 180, sn = Math.sin(a), co = Math.cos(a), dx = p[0] - c[0], dy = p[1] - c[1];
    return [c[0] + co * dx - sn * dy, c[1] + sn * dx + co * dy];
  };
  let RIG = null, POSE = null, TAG = "torso", SIDE = null;
  const sideOf = (p) => SIDE || (p[0] < 36 ? "L" : "R");
  const mirrorJoint = (j, side) => (side === "L" ? j : [72 - j[0], j[1]]);
  const torsoXF = (p) => rotAbout(p, RIG.waist, POSE.lean);
  function limbXF(p, side, isArm, forceLower) {
    const root = mirrorJoint(isArm ? RIG.sh : RIG.hip, side);
    const joint = [root[0], isArm ? RIG.elbow : RIG.knee];
    const [up, lo, dx = 0] = POSE[(isArm ? "arm" : "leg") + side];
    const q = forceLower || p[1] > joint[1] ? rotAbout(p, joint, lo) : p;
    const r = rotAbout(q, root, up);
    return isArm ? torsoXF(r) : [r[0] + dx, r[1]];
  }
  function poseXF(p) {
    let q;
    if (TAG === "leg") q = limbXF(p, sideOf(p), false);
    else if (TAG === "arm") q = limbXF(p, sideOf(p), true);
    else if (TAG === "shoulder") { const sd = sideOf(p); q = torsoXF(rotAbout(p, mirrorJoint(RIG.sh, sd), POSE["arm" + sd][0] * 0.2)); }
    else if (TAG === "weapon") {
      const side = SIDE || "R";
      const hand = side === "R" ? RIG.hand : [72 - RIG.hand[0], RIG.hand[1]];
      q = limbXF(rotAbout(p, hand, side === "R" ? POSE.w : 0), side, true, true);
    } else if (TAG === "head") q = torsoXF(rotAbout(p, RIG.neck, POSE.head));
    else q = torsoXF(p);
    return [q[0] + POSE_OX + (POSE.ox || 0), q[1] + POSE_OY];
  }
  withSide = (pts, fn) => {
    if (SIDE || (TAG !== "leg" && TAG !== "arm" && TAG !== "shoulder")) return fn();
    SIDE = pts.reduce((a, p) => a + p[0], 0) / pts.length < 36 ? "L" : "R";
    try { return fn(); } finally { SIDE = null; }
  };
  function PT(tag, side) { TAG = tag; SIDE = side || null; }
  function prismPair(G, pts, d, mat, o) { prism(G, pts, d, mat, o); prism(G, mir(pts), d, mat, o); }
  function lineP(G, x1, y1, x2, y2, mat, t, pair) { celLine(G, x1, y1, x2, y2, mat, t); if (pair) celLine(G, MECH_W - 1 - x1, y1, MECH_W - 1 - x2, y2, mat, t); }
  function dotP(G, x, y, mat, t, pair) { celDot(G, x, y, mat, t); if (pair) celDot(G, MECH_W - 1 - x, y, mat, t); }

  function drawStriker(G, w) {
    PT("torso");
    // wing binders
    prismPair(G, [[21, 30], [5, 9], [9, 7], [25, 26]], 2, "m2");
    prismPair(G, [[5, 9], [9, 7], [11, 10], [7, 12]], 0, "m3", { outline: false });
    PT("leg");
    // legs
    prismPair(G, [[25, 50], [34, 50], [33, 61], [27, 61]], 2, "f");
    prismPair(G, [[23, 63], [34, 63], [35, 76], [21, 76]], 3, "m1");
    lineP(G, 26, 66, 26, 73, "m1", 2, true); lineP(G, 30, 66, 30, 73, "m1", 2, true);
    prismPair(G, [[24, 57], [34, 57], [35, 63], [30, 67], [23, 63]], 2, "m2");
    dotP(G, 29, 60, "e", 5, true);
    prismPair(G, [[18, 76], [35, 76], [36, 82], [15, 82]], 2, "m2");
    prismPair(G, [[15, 80], [21, 80], [21, 82], [15, 82]], 0, "m3", { outline: false });
    PT("torso");
    // pelvis + skirt
    prism(G, [[27, 45], [45, 45], [43, 53], [29, 53]], 2, "f");
    prismPair(G, [[19, 44], [28, 44], [27, 53], [21, 51]], 2, "m1");
    prism(G, [[32, 46], [40, 46], [36, 58]], 2, "m3");
    // torso: tapered chest
    prism(G, [[20, 25], [52, 25], [50, 38], [44, 46], [28, 46], [22, 38]], 3, "m1");
    prismPair(G, [[23, 27], [34, 27], [34, 34], [25, 36]], 1, "m2");
    prismPair(G, [[24, 38], [31, 38], [31, 42], [26, 42]], 1, "m3");
    lineP(G, 26, 40, 30, 40, "m3", 1, true);
    prism(G, [[30, 40], [42, 40], [41, 46], [31, 46]], 1, "m2");
    lineP(G, 35, 41, 35, 45, "m2", 1); lineP(G, 36, 41, 36, 45, "m2", 1);
    [[35, 30, 5], [36, 30, 5], [35, 31, 5], [36, 31, 5], [34, 30, 3], [37, 30, 3], [35, 29, 3], [36, 32, 3]].forEach(([x, y, t]) => celDot(G, x, y, "e", t));
    // collar + head
    prism(G, [[29, 21], [43, 21], [44, 26], [28, 26]], 2, "m2");
    PT("head");
    prism(G, [[31, 10], [41, 10], [43, 14], [42, 21], [30, 21], [29, 14]], 2, "m2");
    prism(G, [[32, 17], [40, 17], [39, 21], [33, 21]], 1, "m2", { flat: true });
    lineP(G, 31, 14, 34, 15, "d", 0); lineP(G, 40, 14, 37, 15, "d", 0);
    lineP(G, 31, 15, 34, 16, "e", 5); lineP(G, 40, 15, 37, 16, "e", 5);
    lineP(G, 34, 18, 34, 20, "m2", 1); lineP(G, 37, 18, 37, 20, "m2", 1);
    prism(G, [[34, 20], [38, 20], [38, 22], [34, 22]], 0, "m1", { outline: false });
    prism(G, [[34, 11], [35, 4], [37, 4], [38, 11]], 1, "m1");
    prismPair(G, [[35, 12], [26, 4], [28, 3], [36, 9]], 1, "m3");
    PT("shoulder");
    // shoulders
    prismPair(G, [[7, 21], [22, 19], [25, 25], [23, 33], [9, 34], [6, 27]], 3, "m1");
    lineP(G, 8, 27, 23, 25, "m3", 3, true); lineP(G, 8, 28, 23, 26, "m3", 2, true);
    prismPair(G, [[8, 32], [23, 31], [22, 35], [9, 36]], 1, "m2");
    dotP(G, 11, 30, "e", 5, true); dotP(G, 12, 30, "e", 4, true);
    PT("arm");
    // arms
    prismPair(G, [[13, 35], [21, 35], [20, 42], [14, 42]], 2, "f");
    prismPair(G, [[10, 41], [23, 41], [22, 53], [12, 53]], 3, "m1");
    lineP(G, 11, 45, 11, 49, "e", 4, true);
    prismPair(G, [[11, 51], [22, 51], [22, 54], [12, 54]], 1, "m2");
    prismPair(G, [[12, 54], [21, 54], [20, 60], [13, 60]], 2, "f");
    PT("weapon", "R");
    // weapon (viewer's right hand)
    if (w === 0) {
      prism(G, [[44, 53], [66, 53], [66, 58], [44, 58]], 2, "g");
      prism(G, [[64, 54], [71, 54], [71, 57], [64, 57]], 1, "g");
      prism(G, [[50, 49], [58, 49], [58, 52], [50, 52]], 2, "m2");
      celDot(G, 57, 50, "e", 5);
      prism(G, [[48, 58], [51, 58], [51, 63], [48, 63]], 1, "g");
      lineP(G, 46, 55, 62, 55, "g", 2);
    } else if (w === 1) {
      prism(G, [[52, 51], [55, 51], [55, 60], [52, 60]], 1, "f");
      for (let i = 0; i < 38; i++) { const x = Math.round(53 + i * 0.36), y = 50 - i; celDot(G, x - 1, y, "b", 3); celDot(G, x, y, "b", 5); celDot(G, x + 1, y, "b", 4); celDot(G, x + 2, y, "b", 2); }
    } else {
      prism(G, [[55, 8], [57, 8], [57, 83], [55, 83]], 1, "f");
      prism(G, [[51, 11], [61, 11], [61, 13], [51, 13]], 1, "m3");
      for (let i = 0; i < 10; i++) { const half = i < 3 ? 2 : i < 7 ? 1 : 0; for (let k = -half; k <= half; k++) celDot(G, 56 + k, 9 - i, "b", k === 0 ? 5 : 3); }
    }
  }

  function drawTitan(G, w) {
    PT("torso");
    if (w === 1) {
      prismPair(G, [[3, 2], [10, 2], [10, 20], [3, 20]], 2, "g");
      prismPair(G, [[3, 2], [10, 2], [10, 4], [3, 4]], 0, "d", { outline: false });
      prismPair(G, [[3, 12], [10, 12], [10, 14], [3, 14]], 0, "m3", { outline: false });
    } else {
      prismPair(G, [[14, 7], [21, 7], [21, 22], [14, 22]], 2, "f");
      prismPair(G, [[14, 7], [21, 7], [21, 9], [14, 9]], 0, "d", { outline: false });
    }
    PT("leg");
    // legs
    prismPair(G, [[21, 53], [33, 53], [32, 61], [22, 61]], 2, "f");
    prismPair(G, [[18, 64], [34, 64], [36, 76], [16, 76]], 3, "m1");
    prismPair(G, [[17, 69], [35, 69], [35, 71], [17, 71]], 0, "m3", { outline: false });
    prismPair(G, [[18, 58], [34, 58], [35, 64], [18, 65]], 3, "m2");
    dotP(G, 24, 61, "e", 5, true); dotP(G, 25, 61, "e", 4, true);
    prismPair(G, [[11, 76], [36, 76], [37, 83], [9, 83]], 3, "m2");
    PT("torso");
    // pelvis
    prism(G, [[23, 48], [49, 48], [47, 56], [25, 56]], 2, "f");
    // torso
    prism(G, [[14, 22], [58, 22], [56, 40], [50, 50], [22, 50], [16, 40]], 3, "m1");
    prism(G, [[27, 26], [45, 26], [44, 38], [28, 38]], 2, "m2");
    for (let y = 28; y <= 36; y += 2) lineP(G, 29, y, 42, y, "m2", 1);
    prism(G, [[18, 43], [54, 43], [53, 46], [19, 46]], 1, "m3");
    [[35, 40, 5], [36, 40, 5], [34, 40, 4], [37, 40, 4], [35, 41, 4], [36, 41, 4]].forEach(([x, y, t]) => celDot(G, x, y, "e", t));
    PT("head");
    // head sunk between the shoulders
    prism(G, [[30, 14], [42, 14], [44, 18], [42, 25], [30, 25], [28, 18]], 2, "m1");
    lineP(G, 30, 18, 42, 18, "d", 0); lineP(G, 30, 19, 42, 19, "d", 0);
    [[31, 18], [32, 18], [31, 19], [32, 19], [39, 18], [40, 18], [39, 19], [40, 19]].forEach(([x, y]) => celDot(G, x, y, "e", y === 18 ? 5 : 4));
    prism(G, [[33, 21], [39, 21], [38, 25], [34, 25]], 1, "m2");
    PT("shoulder");
    // shoulders
    prismPair(G, [[0, 20], [20, 16], [24, 22], [22, 36], [3, 37], [0, 30]], 3, "m1");
    lineP(G, 1, 26, 23, 23, "m3", 3, true); lineP(G, 1, 27, 23, 24, "m3", 2, true);
    [[4, 21], [18, 19], [4, 33], [19, 32]].forEach(([x, y]) => dotP(G, x, y, "m1", 5, true));
    PT("arm");
    // arms
    prismPair(G, [[6, 36], [15, 36], [15, 43], [7, 43]], 2, "f");
    prismPair(G, [[2, 42], [18, 42], [17, 58], [4, 58]], 3, "m1");
    lineP(G, 3, 46, 3, 52, "e", 4, true);
    prismPair(G, [[3, 58], [17, 58], [18, 66], [3, 66]], 3, "m2");
    lineP(G, 6, 62, 15, 62, "m2", 1, true);
    PT("weapon", "R");
    if (w === 0) {
      // ammo drum, motor housing, barrel cluster, muzzle ring
      prism(G, [[62, 58], [70, 58], [70, 68], [62, 68]], 1, "m3");
      prism(G, [[50, 63], [67, 63], [67, 73], [50, 73]], 2, "m2");
      for (const x of [51, 55, 59, 63]) prism(G, [[x, 73], [x + 3, 73], [x + 3, 88], [x, 88]], 0, "g");
      prism(G, [[50, 77], [67, 77], [67, 79], [50, 79]], 0, "m2", { outline: false });
      prism(G, [[50, 85], [67, 85], [67, 88], [50, 88]], 1, "d");
      [[57, 66, 5], [58, 66, 5], [57, 67, 4], [58, 67, 4]].forEach(([x, y, t]) => celDot(G, x, y, "e", t));
    } else if (w === 2) {
      prism(G, [[59, 22], [62, 22], [62, 60], [59, 60]], 1, "f");
      prism(G, [[50, 7], [69, 7], [69, 21], [50, 21]], 3, "m2");
      prism(G, [[52, 10], [67, 10], [67, 18], [52, 18]], 1, "m3");
      [[59, 13], [60, 13], [59, 14], [60, 14]].forEach(([x, y]) => celDot(G, x, y, "e", 5));
    }
  }

  function drawSupport(G, w) {
    PT("torso");
    // back: pack, antenna, radar dish
    prism(G, [[22, 16], [50, 16], [50, 40], [22, 40]], 3, "m2");
    celLine(G, 45, 14, 51, 2, "f", 2); celDot(G, 51, 1, "e", 5); celDot(G, 52, 1, "e", 4);
    celPart(G, [oval(12, 18, 4.5, 9)], "f");
    celPart(G, [oval(12.5, 18, 2, 5)], "m3", { outline: false });
    celDot(G, 12, 18, "e", 5);
    PT("leg");
    // legs
    prismPair(G, [[29, 51], [35, 51], [34, 59], [30, 59]], 2, "f");
    prismPair(G, [[28, 63], [35, 63], [36, 75], [27, 75]], 2, "m1");
    prismPair(G, [[27, 57], [36, 57], [36, 63], [27, 63]], 2, "m1");
    dotP(G, 31, 60, "e", 5, true);
    prismPair(G, [[22, 75], [37, 75], [38, 82], [20, 82]], 3, "m2");
    for (let x = 23; x < 37; x += 3) { celLine(G, x, 81, x + 2, 77, "m3", 3); celLine(G, MECH_W - 1 - x, 81, MECH_W - 3 - x, 77, "m3", 3); }
    PT("torso");
    // pelvis + torso
    prism(G, [[29, 46], [43, 46], [42, 53], [30, 53]], 2, "f");
    prism(G, [[23, 28], [49, 28], [47, 44], [41, 49], [31, 49], [25, 44]], 3, "m1");
    prism(G, [[25, 40], [47, 40], [46, 44], [26, 44]], 0, "m3", { outline: false });
    for (let x = 26; x < 46; x += 4) celLine(G, x, 44, x + 3, 40, "m1", 3);
    prism(G, [[31, 31], [41, 31], [41, 37], [31, 37]], 2, "glass");
    PT("head");
    // head: dome + big mono-eye
    celPart(G, [oval(36, 19, 8, 7)], "m1");
    celPart(G, [oval(38, 19, 4, 4)], "m2", { outline: false, flat: true, tone: 4 });
    celPart(G, [oval(38, 19, 3, 3)], "d", { outline: false, flat: true, tone: 1 });
    [[38, 19, 5], [39, 19, 4], [38, 20, 4], [37, 18, 3]].forEach(([x, y, t]) => celDot(G, x, y, "e", t));
    PT("arm");
    // shoulders + arms
    prismPair(G, [[14, 26], [24, 26], [25, 33], [15, 35]], 2, "m2");
    prismPair(G, [[16, 35], [22, 35], [21, 41], [17, 41]], 2, "f");
    prismPair(G, [[14, 40], [23, 40], [22, 51], [15, 51]], 2, "m1");
    dotP(G, 15, 45, "e", 5, true);
    prismPair(G, [[15, 51], [21, 51], [21, 56], [15, 56]], 2, "f");
    PT("weapon", "R");
    if (w === 0) {
      prism(G, [[50, 56], [53, 56], [53, 68], [50, 68]], 1, "f");
      prism(G, [[46, 67], [58, 67], [58, 71], [46, 71]], 2, "m3");
      prism(G, [[46, 71], [50, 71], [50, 76], [46, 76]], 1, "m3");
      prism(G, [[54, 71], [58, 71], [58, 76], [54, 76]], 1, "m3");
      [[52, 76, 5], [51, 78, 4], [53, 79, 4]].forEach(([x, y, t]) => celDot(G, x, y, "e", t));
    } else if (w === 1) {
      PT("weapon", "L");
      prism(G, [[3, 34], [18, 32], [19, 54], [11, 62], [3, 56]], 3, "m2");
      prism(G, [[6, 38], [15, 37], [16, 52], [11, 57], [6, 53]], 1, "m1");
      prism(G, [[9, 41], [12, 41], [12, 52], [9, 52]], 0, "m3", { outline: false });
      prism(G, [[6, 45], [15, 45], [15, 48], [6, 48]], 0, "m3", { outline: false });
      [[10, 36], [11, 36]].forEach(([x, y]) => celDot(G, x, y, "e", 5));
    } else {
      prism(G, [[45, 49], [65, 49], [65, 55], [45, 55]], 2, "m2");
      prism(G, [[63, 50], [67, 50], [67, 54], [63, 54]], 1, "d");
      prism(G, [[52, 49], [55, 49], [55, 55], [52, 55]], 0, "m1", { outline: false });
      [[58, 51], [59, 51]].forEach(([x, y]) => celDot(G, x, y, "e", 5));
    }
  }

  function mechSprite(cls, w, P, scale = 4) {
    const G = celCanvas(POSE_W, POSE_H);
    RIG = RIGS[cls]; POSE = POSES[cls][w] || POSES[cls][0]; PT("torso"); XF = poseXF;
    try { ({ titan: drawTitan, striker: drawStriker, support: drawSupport })[cls](G, w); }
    finally { XF = null; }
    return celPaint(G, mechMats(P), scale);
  }

  /* =========================================================
     HEROES — GBA tactics battle sprites, 64 x 64, facing right
     ========================================================= */
  const HERO_W = 64, HERO_H = 64;
  const HERO_CLASSES = {
    warrior: { name: "WARRIOR", c1: "#b8342f", c2: "#7a4f2e", stats: [9, 1, 5, 5, 6, 2], line: "Hits first, asks questions later.", skill: "Berserk Cleave" },
    knight: { name: "KNIGHT", c1: "#2f58c8", c2: "#aab3c7", stats: [7, 1, 5, 2, 10, 3], line: "Holds the line so no one else has to.", skill: "Iron Wall" },
    mage: { name: "MAGE", c1: "#6a3cc2", c2: "#e2b845", stats: [2, 9, 6, 5, 2, 7], line: "Turns the weather into a weapon.", skill: "Thunderstorm" },
    archer: { name: "ARCHER", c1: "#3f8a45", c2: "#8a5a32", stats: [5, 2, 9, 7, 4, 3], line: "Rarely needs a second arrow.", skill: "Deadeye" },
    healer: { name: "HEALER", c1: "#f1efe6", c2: "#2fa6a0", stats: [2, 7, 5, 5, 3, 9], line: "Keeps the whole party standing.", skill: "Sanctuary" },
    assassin: { name: "ASSASSIN", c1: "#3a3d52", c2: "#c0323c", stats: [6, 2, 8, 10, 3, 3], line: "In and out before the dust settles.", skill: "Shadowstep" },
  };
  const HERO_KEYS = ["warrior", "knight", "mage", "archer", "healer", "assassin"];
  const HERO_STATS = ["STR", "MAG", "SKL", "SPD", "DEF", "RES"];
  const HAIR_STYLES = ["SHORT", "SPIKY", "LONG"];
  const HAIR_COLORS = ["#2c2a4a", "#6b3f25", "#e0b64a", "#c2412f", "#e8e6f2"];
  const SKIN_TONES = ["#f6d2b0", "#e3ae82", "#c68959", "#8d5a37"];

  function heroMats(h) {
    const c = HERO_CLASSES[h.cls];
    return {
      s: celRamp(SKIN_TONES[h.skin]), h: celRamp(HAIR_COLORS[h.hairColor]),
      c1: celRamp(c.c1), c2: celRamp(c.c2),
      mt: celRamp("#b9c2d6"), lt: celRamp("#7a5132"), au: celRamp("#e0b43e"), wd: celRamp("#9a6a3c"),
      ink: ["#17131f", "#2b2742", "#17131f", "#17131f", "#ffffff", "#ffffff"],
      sh: Array(6).fill("rgba(6,8,20,.45)"),
      mg: celGlow(h.cls === "healer" ? "#9ff3e6" : h.cls === "mage" ? "#c9a2ff" : "#9fd8ff"),
    };
  }

  // one sprite part: rounded shading lit from the upper left, edges drawn in the part's own darkest tone
  function spPart(G, polys, mat, o = {}) {
    const m = celMask(G, polys);
    const at = (x, y) => y >= 0 && y < G.h && x >= 0 && x < G.w && m[y][x];
    if (o.outline !== false)
      for (let y = 0; y < G.h; y++) for (let x = 0; x < G.w; x++)
        if (!m[y][x] && (at(x + 1, y) || at(x - 1, y) || at(x, y + 1) || at(x, y - 1))) G.px[y][x] = [o.outlineMat || mat, 0];
    // soften the mask, then light each pixel by the slope of the soft shape
    const R = 2, soft = (x, y) => { let n = 0; for (let j = -R; j <= R; j++) for (let i = -R; i <= R; i++) n += at(x + i, y + j) ? 1 : 0; return n / ((2 * R + 1) * (2 * R + 1)); };
    for (let y = 0; y < G.h; y++) for (let x = 0; x < G.w; x++) {
      if (!m[y][x]) continue;
      let t = 3;
      if (!o.flat) {
        const nx = soft(x - 1, y) - soft(x + 1, y), ny = soft(x, y - 1) - soft(x, y + 1);
        const d = -nx * 0.55 - ny * 0.85;
        t = d > 0.2 ? 4 : d < -0.34 ? 1 : d < -0.1 ? 2 : 3;
        if (t === 4 && d > 0.42 && !at(x, y - 1)) t = 5;
      }
      G.px[y][x] = [mat, o.tone !== undefined ? o.tone : t];
    }
    return m;
  }
  // final pass: only the outer silhouette gets the dark ink line
  function inkOutline(G) {
    const solid = (x, y) => y >= 0 && y < G.h && x >= 0 && x < G.w && G.px[y][x] && G.px[y][x][0] !== "sh";
    const add = [];
    for (let y = 0; y < G.h; y++) for (let x = 0; x < G.w; x++) {
      if (solid(x, y)) { const p = G.px[y][x]; if (p[1] === 0 && p[0] !== "ink" && [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([i, j]) => !solid(x + i, y + j))) add.push([x, y]); continue; }
      if ([[1, 0], [-1, 0], [0, 1], [0, -1]].some(([i, j]) => solid(x + i, y + j) && G.px[y + j][x + i][1] !== 0)) add.push([x, y]);
    }
    add.forEach(([x, y]) => (G.px[y][x] = ["ink", 0]));
  }
  // a tapered limb between two points, as a polygon
  function limb(x1, y1, x2, y2, w1, w2 = w1) {
    const dx = x2 - x1, dy = y2 - y1, l = Math.hypot(dx, dy) || 1, nx = -dy / l, ny = dx / l;
    return [[x1 + (nx * w1) / 2, y1 + (ny * w1) / 2], [x2 + (nx * w2) / 2, y2 + (ny * w2) / 2], [x2 - (nx * w2) / 2, y2 - (ny * w2) / 2], [x1 - (nx * w1) / 2, y1 - (ny * w1) / 2]];
  }
  // arm or leg: two segments plus a round joint
  const joint = (a, b, c, w1, w2, w3) => [limb(a[0], a[1], b[0], b[1], w1, w2), limb(b[0], b[1], c[0], c[1], w2, w3), oval(a[0], a[1], w1 / 2, w1 / 2, 12), oval(b[0], b[1], w2 / 2, w2 / 2, 12), oval(c[0], c[1], w3 / 2.2, w3 / 2.2, 12)];
  // boot facing right: heel at x0, rounded toe past x1
  const boot = (x0, x1) => [[x0 + 1, 53], [x1 - 2, 53], [x1, 55], [x1 + 2, 55.6], [x1 + 3.2, 57], [x1 + 2.6, 58.4], [x0 + 0.5, 58.4], [x0, 56]];
  const fold = (G, mat, ...ls) => ls.forEach(([a, b, c, d]) => celLine(G, a, b, c, d, mat, 2));

  // head, three-quarter view facing right: hair mass behind, face lower right
  const HEAD = [
    ".....kkkkkk....",
    "...kkhHHHHhkk..",
    "..khhHHhhhhhhk.",
    ".khhhhhhhhhhhhk",
    ".khhhhhhhhhhhhk",
    "khhhhhhhhhhhhhk",
    "khjhhhhhhhhjhhk",
    "kjjhhhhjhjsjhsk",
    "kjjhhjzsssssssk",
    "kjjhzssssossosk",
    "kjjjzzsssossosk",
    ".kjjzssssssssqk",
    "..kjjzssssszssk",
    "...kkzzsssssk..",
    ".....kkkkkkk...",
  ];
  const HEAD_KEY = { k: ["ink", 0], o: ["ink", 1], q: ["s", 4], s: ["s", 3], z: ["s", 2], H: ["h", 4], h: ["h", 3], j: ["h", 2], J: ["h", 1] };
  function pixGrid(G, rows, x0, y0, key) {
    rows.forEach((r, y) => [...r].forEach((ch, x) => {
      const v = key[ch], X = x0 + x, Y = y0 + y;
      if (v && X >= 0 && Y >= 0 && X < G.w && Y < G.h) G.px[Y][X] = v;
    }));
  }
  const shift = (pts, x, y) => pts.map(([a, b]) => [a + x, b + y]);
  function hairBack(G, h, hx, hy) {
    // long hair: tapered locks swept back behind the shoulders
    if (h.hair === 2 && h.cls !== "assassin") {
      spPart(G, [shift([[1, 5], [8, 6], [9, 13], [7, 19], [3, 24], [-2, 26], [-1, 21], [-2, 15], [-1, 9]], hx, hy)], "h");
      celLine(G, hx + 3, hy + 14, hx + 1, hy + 22, "h", 2); celLine(G, hx + 6, hy + 14, hx + 4, hy + 20, "h", 2);
    }
  }
  function drawHead(G, h, hx, hy) {
    if (h.hair === 1 && h.cls !== "assassin")
      spPart(G, [[[1, 6], [-4, 1], [3, 3]], [[1, 11], [-4, 10], [2, 8]], [[4, 3], [2, -3], [7, 1]], [[7, 1], [9, -4], [11, 1]], [[10, 2], [15, -2], [13, 4]], [[12, 5], [17, 5], [13, 8]]].map((p) => shift(p, hx, hy)), "h");
    pixGrid(G, HEAD, hx, hy, HEAD_KEY);
    if (h.hair === 2 && h.cls !== "assassin") spPart(G, [shift([[2, 8], [5, 7], [5, 13], [3, 16], [2, 12]], hx, hy)], "h");
    if (h.cls === "healer") { celLine(G, hx + 2, hy + 5, hx + 13, hy + 6, "au", 4); celDot(G, hx + 11, hy + 6, "mg", 5); }
    if (h.cls === "knight") celLine(G, hx + 2, hy + 5, hx + 13, hy + 6, "c1", 3);
    if (h.cls === "assassin") {
      spPart(G, [shift([[-1, 5], [3, -1], [9, -2], [14, 1], [16, 8], [13, 7], [12, 5], [6, 6], [5, 12], [3, 16], [-1, 14]], hx, hy)], "c1");
      spPart(G, [shift([[5, 11], [15, 11], [14, 15], [6, 16]], hx, hy)], "c2");
    }
  }

  function drawHero(G, h) {
    const cls = h.cls, S = "s";
    spPart(G, [oval(31, 58.5, 17, 2.6, 24)], "sh", { outline: false, flat: true });
    if (cls === "warrior") {
      const hx = 24, hy = 9;
      hairBack(G, h, hx, hy);
      spPart(G, joint([27, 28], [22, 34], [25, 39], 5, 5, 4), S);
      spPart(G, [limb(23, 35, 25, 38, 5)], "lt");
      spPart(G, [oval(26, 39.5, 2.5, 2.5)], S);
      spPart(G, joint([28, 42], [23, 49], [20, 55], 7, 6, 5), "c2");
      spPart(G, [boot(14, 21)], "lt");
      spPart(G, [[[25, 25], [40, 25], [41, 31], [38, 39], [27, 39], [25, 32]]], "lt");
      spPart(G, [[[31, 25], [36, 25], [34, 31], [33, 31]]], S, { outline: false });
      spPart(G, [[[26, 39], [39, 39], [41, 45], [25, 45]]], "c2");
      fold(G, "c2", [29, 41, 30, 44], [36, 41, 35, 44]);
      spPart(G, [[[26, 36], [39, 36], [39, 40], [26, 40]]], "c1");
      celDot(G, 33, 38, "au", 4); celDot(G, 34, 38, "au", 3);
      spPart(G, [[[28, 39], [32, 39], [31, 47], [28, 46]]], "c1");
      spPart(G, joint([36, 42], [41, 48], [42, 55], 7, 6, 5), "c2");
      spPart(G, [boot(38, 44)], "lt");
      spPart(G, [[[31, 21], [36, 21], [36, 26], [31, 26]]], S);
      drawHead(G, h, hx, hy);
      spPart(G, [limb(40, 51, 55, 13, 2.4)], "wd");
      spPart(G, [[[51, 12], [56, 11], [62, 6], [63, 17], [60, 26], [55, 20], [51, 21]]], "mt");
      spPart(G, [[[51, 13], [46, 11], [46, 19], [51, 19]]], "mt");
      celLine(G, 57, 12, 60, 9, "mt", 5); celLine(G, 61, 9, 61, 19, "mt", 5);
      spPart(G, joint([38, 27], [44, 32], [47, 36], 6, 5, 4), S);
      spPart(G, [limb(44, 32, 47, 35, 5)], "lt");
      spPart(G, [oval(46.5, 36.5, 2.6, 2.6)], S);
      spPart(G, [oval(41, 28.5, 4, 3.2)], "mt");
      celLine(G, 29, 26, 38, 37, "c2", 2);
    } else if (cls === "knight") {
      const hx = 24, hy = 8;
      hairBack(G, h, hx, hy);
      spPart(G, [[[27, 25], [36, 25], [31, 37], [23, 52], [11, 56], [9, 52], [17, 41]]], "c1");
      fold(G, "c1", [27, 30, 17, 48], [30, 32, 20, 51]);
      spPart(G, [oval(26, 26, 5, 4)], "mt");
      spPart(G, joint([28, 41], [25, 48], [23, 55], 7, 7, 6), "mt");
      spPart(G, [boot(17, 24)], "mt");
      spPart(G, [[[24, 24], [41, 24], [42, 33], [39, 40], [26, 40], [24, 33]]], "mt");
      spPart(G, [[[25, 38], [40, 38], [42, 44], [23, 44]]], "mt");
      celLine(G, 26, 26, 30, 26, "mt", 5); celDot(G, 27, 39, "mt", 5); celDot(G, 28, 39, "mt", 5);
      spPart(G, [[[25, 37], [40, 37], [40, 40], [25, 40]]], "c1");
      celDot(G, 34, 38, "au", 4); celDot(G, 35, 38, "au", 3);
      celLine(G, 28, 29, 37, 29, "c1", 3); celLine(G, 32, 30, 33, 35, "mt", 5);
      spPart(G, joint([36, 41], [40, 48], [41, 55], 7, 7, 6), "mt");
      spPart(G, [boot(37, 44)], "mt");
      spPart(G, [[[31, 20], [36, 20], [36, 25], [31, 25]]], S);
      drawHead(G, h, hx, hy);
      spPart(G, [[[15, 28], [27, 28], [27, 42], [21, 49], [15, 42]]], "c1", {});
      spPart(G, [[[18, 31], [24, 31], [24, 41], [21, 45], [18, 41]]], "c1", { tone: 4, outline: false });
      spPart(G, [[[20, 32], [22, 32], [22, 42], [20, 42]], [[17.5, 35], [25, 35], [25, 37], [17.5, 37]]], "au", { outline: false });
      spPart(G, [limb(37, 54, 54, 8, 2.4)], "wd");
      spPart(G, [[[51, 10], [56, 0], [57, 11]]], "mt");
      spPart(G, [limb(52, 13, 56, 14, 2.2)], "au");
      spPart(G, joint([39, 27], [43, 33], [45, 37], 6, 6, 5), "mt");
      spPart(G, [oval(45, 37, 2.7, 2.7)], "mt");
      spPart(G, [oval(41.5, 27.5, 5.2, 4)], "mt");
      celLine(G, 38, 28, 45, 28, "c1", 3);
    } else if (cls === "mage") {
      const hx = 24, hy = 10;
      hairBack(G, h, hx, hy);
      spPart(G, [[[27, 26], [37, 26], [31, 36], [23, 50], [13, 56], [9, 52], [18, 40]]], "c1");
      fold(G, "c1", [28, 31, 18, 48], [31, 33, 20, 51]);
      spPart(G, joint([27, 28], [24, 34], [30, 36], 5, 5, 4), "c1");
      spPart(G, [[[26, 25], [40, 25], [41, 36], [45, 56], [38, 57], [31, 56], [22, 57], [24, 40]]], "c1");
      spPart(G, [[[22.5, 53], [44.5, 53], [45, 57], [22, 57]]], "c2");
      fold(G, "c1", [28, 40, 26, 52], [40, 40, 42, 52], [32, 44, 31, 52]);
      celLine(G, 35, 28, 37, 53, "c2", 3);
      spPart(G, [[[25, 35], [41, 35], [41, 37], [25, 37]]], "c2");
      spPart(G, [[[26, 57], [31, 57], [31, 59], [25, 59]], [[37, 57], [42, 57], [44, 59], [37, 59]]], "lt");
      spPart(G, [[[31, 22], [36, 22], [36, 27], [31, 27]]], S);
      spPart(G, [[[25, 24], [41, 24], [43, 29], [34, 31], [23, 29]]], "c2");
      drawHead(G, h, hx, hy);
      spPart(G, [[[26, 31], [33, 29], [35, 37], [28, 39]]], "c2");
      spPart(G, [[[27, 32], [32, 30.5], [33.5, 36], [28.5, 37.5]]], "c1", { outline: false, tone: 2 });
      spPart(G, [oval(31, 36.5, 2.3, 2.3)], S);
      spPart(G, [limb(39, 27, 45, 31, 6, 6), limb(45, 31, 49, 29, 6, 7)], "c1");
      spPart(G, [limb(47, 29.5, 49.5, 29, 7.5, 7.5)], "c2");
      spPart(G, [oval(52, 28.5, 2.4, 2.4)], S);
      spPart(G, [oval(57, 26, 4.2, 4.2, 16)], "mg", { outline: false, tone: 3 });
      spPart(G, [oval(57, 26, 2.2, 2.2, 12)], "mg", { outline: false, tone: 5 });
      [[54, 19], [61, 21], [62, 31], [55, 33], [59, 17]].forEach(([x, y], i) => celDot(G, x, y, "mg", i % 2 ? 4 : 5));
    } else if (cls === "archer") {
      const hx = 23, hy = 9;
      hairBack(G, h, hx, hy);
      spPart(G, [[[20, 21], [25, 19], [30, 36], [25, 38]]], "lt");
      [[20, 18], [22, 17], [24, 16]].forEach(([x, y]) => { celLine(G, x, y + 3, x + 1, y, "c2", 4); celDot(G, x + 1, y - 1, "mt", 5); });
      spPart(G, joint([28, 42], [23, 49], [21, 55], 6, 6, 5), "c2");
      spPart(G, [boot(15, 21)], "lt");
      spPart(G, [[[26, 25], [39, 25], [40, 36], [42, 46], [25, 46], [26, 36]]], "c1");
      fold(G, "c1", [29, 40, 28, 45], [37, 40, 38, 45]);
      spPart(G, joint([35, 42], [39, 49], [40, 55], 6, 6, 5), "c2");
      spPart(G, [boot(36, 42)], "lt");
      spPart(G, [[[25, 36], [41, 36], [41, 39], [25, 39]]], "lt");
      celLine(G, 28, 26, 38, 36, "lt", 2);
      spPart(G, [[[31, 21], [36, 21], [36, 26], [31, 26]]], S);
      drawHead(G, h, hx, hy);
      celLine(G, 49, 11, 36, 28, "mt", 5); celLine(G, 36, 28, 49, 45, "mt", 5);
      const bow = [];
      for (let i = 0; i < 16; i++) { const a = -1.25 + (i / 15) * 2.5, b = -1.25 + ((i + 1) / 15) * 2.5; bow.push(limb(46 + Math.cos(a) * 8, 28 + Math.sin(a) * 17, 46 + Math.cos(b) * 8, 28 + Math.sin(b) * 17, Math.abs(a) < 0.5 ? 3 : 2)); }
      spPart(G, bow, "wd");
      spPart(G, [limb(52, 25, 55, 31, 3)], "lt");
      spPart(G, [limb(38, 27, 51, 28, 5, 4)], "c1");
      spPart(G, [limb(46, 27.5, 51, 28, 4.5)], "lt");
      spPart(G, [oval(53, 28, 2.3, 2.3)], S);
      spPart(G, [limb(37, 28, 58, 28, 1.2)], "wd", { outline: false, tone: 4 });
      spPart(G, [[[57, 26], [61, 28], [57, 30]]], "mt");
      spPart(G, joint([28, 27], [23, 27], [34, 28], 5, 5, 4), "c1");
      spPart(G, [oval(35.5, 28, 2.3, 2.3)], S);
    } else if (cls === "healer") {
      const hx = 24, hy = 10;
      hairBack(G, h, hx, hy);
      spPart(G, [[[27, 25], [36, 25], [31, 36], [24, 52], [14, 56], [11, 51], [19, 40]]], "c2");
      fold(G, "c2", [28, 30, 19, 48], [31, 32, 21, 51]);
      spPart(G, [[[26, 25], [39, 25], [40, 37], [44, 57], [23, 57], [25, 37]]], "c1");
      spPart(G, [[[31.5, 27], [35, 27], [36.5, 54], [30.5, 54]]], "c2", { outline: false });
      spPart(G, [[[23, 54], [44, 54], [44.5, 57], [22.5, 57]]], "c2", { outline: false });
      fold(G, "c1", [27, 40, 25, 53], [40, 40, 42, 53]);
      spPart(G, [[[25, 36], [40, 36], [40, 38.5], [25, 38.5]]], "au");
      spPart(G, [[[31, 22], [36, 22], [36, 27], [31, 27]]], S);
      spPart(G, [[[25, 24], [41, 24], [42, 28], [33, 30], [24, 28]]], "c1");
      celLine(G, 26, 27, 41, 27, "au", 4);
      drawHead(G, h, hx, hy);
      spPart(G, joint([28, 28], [27, 34], [32, 33], 5, 5, 4), "c1");
      spPart(G, [oval(33, 33, 2.3, 2.3)], S);
      spPart(G, [limb(47, 57, 47, 10, 2.4)], "au");
      spPart(G, [oval(47, 8, 4.2, 4.2, 16)], "au");
      spPart(G, [oval(47, 8, 2.2, 2.2, 12)], "mg", { outline: false, tone: 4 });
      celDot(G, 46, 7, "mg", 5);
      spPart(G, [[[43, 9], [38, 5], [41, 11]], [[51, 9], [56, 5], [53, 11]]], "au");
      spPart(G, joint([39, 27], [42, 34], [46, 34], 6, 5, 5), "c1");
      spPart(G, [oval(47, 34, 2.5, 2.5)], S);
    } else {
      const hx = 27, hy = 13;
      spPart(G, [[[30, 26], [34, 27], [26, 31], [16, 28], [8, 33], [5, 29], [13, 23], [24, 24]]], "c2");
      spPart(G, joint([29, 31], [24, 36], [27, 40], 5, 5, 4), "c1");
      spPart(G, [oval(27.5, 40.5, 2.3, 2.3)], S);
      spPart(G, [limb(26.5, 42, 21, 48, 2, 1)], "mt");
      spPart(G, joint([29, 43], [20, 48], [14, 55], 6, 6, 5), "c1");
      spPart(G, [boot(8, 13)], "lt");
      spPart(G, [[[27, 28], [40, 28], [42, 35], [39, 43], [27, 43], [25, 35]]], "c1");
      spPart(G, [[[26, 39], [40, 39], [40, 42], [26, 42]]], "lt");
      celDot(G, 30, 40, "au", 4);
      spPart(G, joint([36, 43], [44, 47], [43, 55], 7, 6, 5), "c1");
      spPart(G, [limb(43, 50, 43, 54, 5.5)], "lt");
      spPart(G, [boot(39, 46)], "lt");
      spPart(G, [[[34, 25], [39, 25], [39, 29], [34, 29]]], S);
      drawHead(G, h, hx, hy);
      spPart(G, joint([39, 30], [45, 34], [49, 35], 5, 5, 4), "c1");
      spPart(G, [limb(46, 34.5, 49, 35, 4.5)], "lt");
      spPart(G, [limb(52, 34, 61, 30, 2.4, 1)], "mt");
      celLine(G, 51, 32, 52, 37, "au", 4);
      spPart(G, [oval(50.5, 35, 2.3, 2.3)], S);
    }
  }

  function heroSprite(h, scale = 4) {
    const G = celCanvas(HERO_W, HERO_H);
    drawHero(G, h);
    inkOutline(G);
    return celPaint(G, heroMats(h), scale);
  }

  const CLASSES = MECH_CLASSES, CLASS_KEYS = MECH_KEYS, HOSTILE = HOSTILE_PAINT;

  /* ---------- portrait: hand-authored, cel-shaded, GBA tactics style ---------- */
  const PW = 72, PH = 72;
  const PCOL = {
    // skin
    s0: "#5c2f24", s1: "#a8633f", s2: "#d7976a", s3: "#f4c59b", s4: "#ffe2c2",
    // hair (deep navy-indigo)
    h0: "#12122e", h1: "#26286a", h2: "#3a3f98", h3: "#5963c6", h4: "#8b98ee",
    // eyes
    e0: "#1a1530", ew: "#f6f4ff", ei: "#2c3a7a", eh: "#9fb4ff",
    // armour + cape + gold
    a0: "#0f1230", a1: "#1c2356", a2: "#2b3577", a3: "#4150a6",
    c0: "#0f1d52", c1: "#1f3a9a", c2: "#3159d0", c3: "#6f93f2",
    g0: "#5a3a0c", g1: "#a8761e", g2: "#e3b33c", g3: "#fff1a6",
    w1: "#7c8499", w2: "#b9c0d2",
  };

  function pgrid() { return Array.from({ length: PH }, () => Array(PW).fill(null)); }
  function pfill(g, pts, k) {
    const ys = pts.map((p) => p[1]);
    for (let y = Math.floor(Math.min(...ys)); y <= Math.ceil(Math.max(...ys)); y++) {
      if (y < 0 || y >= PH) continue;
      for (let x = 0; x < PW; x++) {
        const px = x + 0.5, py = y + 0.5;
        let inside = false;
        for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
          const [xi, yi] = pts[i], [xj, yj] = pts[j];
          if ((yi > py) !== (yj > py) && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) inside = !inside;
        }
        if (inside) g[y][x] = k;
      }
    }
  }
  // recolour only pixels already of a given family (e.g. shade skin inside a region)
  function pshade(g, pts, from, k) {
    const tmp = pgrid();
    pfill(tmp, pts, 1);
    for (let y = 0; y < PH; y++) for (let x = 0; x < PW; x++) if (tmp[y][x] && g[y][x] && from.includes(g[y][x])) g[y][x] = k;
  }
  function pline(g, x1, y1, x2, y2, k) {
    const n = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)) || 1;
    for (let i = 0; i <= n; i++) {
      const x = Math.round(x1 + ((x2 - x1) * i) / n), y = Math.round(y1 + ((y2 - y1) * i) / n);
      if (x >= 0 && y >= 0 && x < PW && y < PH) g[y][x] = k;
    }
  }
  function pdots(g, list, k) { list.forEach(([x, y]) => { if (g[y]) g[y][x] = k; }); }
  function poutline(g, k) {
    const add = [];
    for (let y = 0; y < PH; y++) for (let x = 0; x < PW; x++) {
      if (g[y][x]) continue;
      if ([[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => g[y + dy] && g[y + dy][x + dx])) add.push([x, y]);
    }
    add.forEach(([x, y]) => (g[y][x] = k));
  }

  function portraitLayers() {
    const L = [];

    // 1. hair mass behind the head (falls behind the ear to the nape)
    let g = pgrid();
    pfill(g, [[15, 24], [17, 12], [25, 5], [37, 2], [49, 4], [58, 11], [62, 21], [61, 31], [58, 38], [54, 41], [52, 36], [50, 28], [22, 26]], "h2");
    pshade(g, [[48, 14], [62, 20], [62, 34], [58, 40], [53, 40], [50, 26]], ["h2"], "h1");
    pline(g, 57, 29, 55, 38, "h0"); pline(g, 60, 25, 59, 33, "h1");
    poutline(g, "h0");
    L.push(g);

    // 2. neck
    g = pgrid();
    pfill(g, [[30, 44], [45, 42], [47, 60], [29, 62]], "s3");
    pshade(g, [[29, 44], [47, 42], [47, 53], [40, 55], [33, 52]], ["s3"], "s2");
    pshade(g, [[40, 44], [47, 42], [47, 60], [42, 60]], ["s3", "s2"], "s1");
    poutline(g, "s0");
    L.push(g);

    // 3. armour, cape and collar
    g = pgrid();
    pfill(g, [[4, 72], [8, 64], [22, 58], [52, 58], [66, 62], [72, 68], [72, 72]], "a2");
    pshade(g, [[40, 58], [72, 62], [72, 72], [44, 72]], ["a2"], "a1");
    pfill(g, [[48, 57], [63, 55], [72, 60], [72, 72], [58, 72], [54, 64]], "a3");
    pshade(g, [[56, 64], [72, 64], [72, 72], [58, 72]], ["a3"], "a2");
    pline(g, 49, 57, 63, 55, "g2"); pline(g, 63, 55, 72, 60, "g2"); pline(g, 50, 58, 62, 56, "g1");
    pline(g, 54, 63, 58, 72, "g2");
    // cape draped over the near shoulder
    pfill(g, [[4, 72], [7, 63], [18, 57], [26, 60], [22, 72]], "c2");
    pshade(g, [[4, 72], [7, 66], [14, 64], [12, 72]], ["c2"], "c1");
    pline(g, 9, 63, 18, 58, "c3"); pline(g, 16, 66, 21, 61, "c1");
    // high collar
    pfill(g, [[24, 60], [29, 50], [33, 57], [32, 66], [26, 68]], "c2");
    pfill(g, [[44, 50], [51, 54], [52, 66], [45, 66], [43, 58]], "c1");
    pline(g, 29, 51, 26, 64, "c3");
    pline(g, 24, 60, 29, 50, "g2"); pline(g, 51, 54, 52, 64, "g2");
    // shirt + clasp
    pfill(g, [[32, 57], [44, 57], [38, 66]], "w2");
    pline(g, 38, 58, 38, 65, "w1");
    pfill(g, [[34, 66], [38, 63], [42, 66], [38, 70]], "g2");
    pdots(g, [[37, 65], [38, 64]], "g3"); pdots(g, [[38, 69], [39, 68]], "g1");
    pline(g, 26, 68, 32, 66, "g2"); pline(g, 44, 66, 51, 66, "g2");
    poutline(g, "a0");
    L.push(g);

    // 4. face + ear
    g = pgrid();
    pfill(g, [[23, 17], [47, 14], [51, 22], [51, 33], [48, 40], [41, 46], [35, 49], [30, 48], [26, 44], [23, 39], [21, 35], [22, 30], [21, 25]], "s3");
    pfill(g, [[49, 27], [55, 26], [56, 32], [53, 38], [49, 37]], "s3");
    // cel shadows: under the fringe, the far side of the face, the jaw, the ear
    pshade(g, [[21, 17], [52, 14], [52, 22], [40, 23], [30, 25], [21, 26]], ["s3"], "s2");
    pshade(g, [[43, 22], [52, 21], [52, 34], [48, 41], [41, 46], [44, 37], [45, 29]], ["s3"], "s2");
    pshade(g, [[47, 24], [52, 22], [52, 34], [49, 40]], ["s2", "s3"], "s1");
    pshade(g, [[49, 27], [56, 26], [56, 33], [53, 38], [49, 37]], ["s3"], "s2");
    pdots(g, [[51, 29], [52, 30], [52, 31], [51, 32], [52, 33], [53, 34]], "s1");
    // light on the cheekbone and the bridge of the nose
    pshade(g, [[23, 31], [29, 31], [28, 37], [23, 37]], ["s3"], "s4");
    pdots(g, [[30, 30], [30, 31], [30, 32]], "s4");
    // nose: side shadow and nostril
    pline(g, 31, 31, 32, 37, "s2"); pdots(g, [[30, 38], [31, 38]], "s1"); pdots(g, [[29, 37]], "s2");
    // mouth
    pline(g, 29, 42, 34, 42, "s1"); pdots(g, [[35, 41]], "s2"); pdots(g, [[30, 44], [31, 44], [32, 44]], "s2");
    // brows
    pline(g, 34, 26, 42, 25, "h1"); pline(g, 35, 27, 41, 26, "h0"); pdots(g, [[43, 26]], "h1");
    pline(g, 22, 27, 28, 26, "h1"); pline(g, 23, 28, 27, 27, "h0");
    // far eye (larger, right)
    pline(g, 34, 29, 42, 29, "e0"); pdots(g, [[43, 30], [33, 30]], "e0");
    pdots(g, [[34, 30], [34, 31]], "ew");
    pdots(g, [[35, 30], [36, 30], [35, 31], [36, 31], [35, 32]], "e0");
    pdots(g, [[37, 30], [37, 31], [36, 32], [37, 32]], "ei");
    pdots(g, [[36, 31]], "eh");
    pdots(g, [[38, 30], [38, 31], [39, 30], [39, 31], [40, 31]], "ew");
    pline(g, 35, 33, 40, 33, "s2"); pdots(g, [[41, 32]], "s2");
    // near eye (smaller, toward the profile)
    pline(g, 23, 29, 28, 29, "e0"); pdots(g, [[22, 30], [29, 30]], "e0");
    pdots(g, [[23, 30], [23, 31]], "ew");
    pdots(g, [[24, 30], [25, 30], [24, 31], [25, 32]], "e0");
    pdots(g, [[25, 31], [26, 31], [26, 32]], "ei");
    pdots(g, [[25, 31]], "eh");
    pdots(g, [[26, 30], [27, 30], [27, 31], [28, 31]], "ew");
    pline(g, 24, 33, 27, 33, "s2");
    poutline(g, "s0");
    L.push(g);

    // 5. front hair: crown, fringe clumps, shine band
    g = pgrid();
    pfill(g, [[14, 26], [15, 14], [22, 7], [35, 2], [48, 4], [57, 10], [60, 18], [58, 22], [52, 20], [48, 16], [24, 18], [18, 24]], "h2");
    const clumps = [
      [[13, 20], [22, 15], [25, 19], [21, 26], [18, 23], [15, 27]],
      [[20, 15], [31, 12], [30, 19], [27, 26], [25, 21], [22, 24]],
      [[27, 13], [39, 10], [37, 18], [33, 27], [31, 19]],
      [[35, 11], [47, 11], [45, 17], [41, 24], [40, 17]],
      [[43, 11], [54, 13], [53, 18], [49, 23], [48, 16]],
      [[50, 13], [60, 16], [61, 24], [58, 30], [55, 21]],
    ];
    clumps.forEach((c) => pfill(g, c, "h2"));
    // shadow side of each clump + gaps between them
    pshade(g, [[48, 8], [62, 16], [62, 32], [55, 32], [50, 20]], ["h2"], "h1");
    [[25, 19, 22, 25], [31, 18, 28, 25], [37, 18, 34, 26], [45, 16, 42, 23], [53, 17, 50, 22]].forEach(([x1, y1, x2, y2]) => { pline(g, x1, y1, x2, y2, "h1"); pline(g, x1 + 1, y1, x2 + 1, y2, "h0"); });
    // lit strands
    [[19, 17, 17, 24], [25, 15, 23, 22], [31, 14, 29, 22], [38, 12, 36, 19], [45, 12, 44, 17]].forEach(([x1, y1, x2, y2]) => pline(g, x1, y1, x2, y2, "h3"));
    // shine band across the crown
    pline(g, 19, 11, 24, 8, "h3"); pline(g, 25, 7, 31, 5, "h4"); pline(g, 32, 5, 38, 5, "h4"); pline(g, 39, 5, 44, 6, "h3");
    pline(g, 21, 12, 27, 9, "h3"); pline(g, 28, 8, 36, 7, "h3");
    pdots(g, [[33, 4], [34, 4]], "h4");
    // stray strands
    pline(g, 14, 18, 11, 22, "h2"); pline(g, 58, 12, 63, 14, "h2");
    poutline(g, "h0");
    L.push(g);

    return L;
  }

  function renderPortrait(scale = 2) {
    const c = document.createElement("canvas");
    c.width = PW * scale; c.height = PH * scale;
    const ctx = c.getContext("2d");
    portraitLayers().forEach((g) => {
      for (let y = 0; y < PH; y++) for (let x = 0; x < PW; x++) {
        const k = g[y][x];
        if (!k) continue;
        ctx.fillStyle = PCOL[k];
        ctx.fillRect(x * scale, y * scale, scale, scale);
      }
    });
    c.className = "portrait";
    return c;
  }

  function buildUnit(kind, cls, w, P, scale = 4) {
    const wrap = document.createElement("div");
    wrap.className = "punit pmech";
    wrap.appendChild(mechSprite(cls, w, P, scale));
    return wrap;
  }
  function buildPortrait(scale = 2) {
    return renderPortrait(scale);
  }

  const savedMech = store.get("kd5-mech", {}) || {};
  const cfg = { cls: CLASS_KEYS.includes(savedMech.cls) ? savedMech.cls : "striker", weapon: 0 };
  Object.assign(cfg, CLASSES[cfg.cls].def);
  if (CLASSES[cfg.cls].weapons[savedMech.weapon]) cfg.weapon = savedMech.weapon;
  if (MECH_PRIMARY[savedMech.primary]) cfg.primary = savedMech.primary;
  if (MECH_SECONDARY[savedMech.secondary]) cfg.secondary = savedMech.secondary;
  if (MECH_GLOW[savedMech.glow]) cfg.glow = savedMech.glow;
  const paintOf = (c = cfg) => ({
    name: `${c.primary}-${c.secondary}-${c.glow}`,
    m1: MECH_PRIMARY[c.primary].hex, m2: MECH_SECONDARY[c.secondary].hex, m3: CLASSES[c.cls].accent,
    eye: MECH_GLOW[c.glow].hex, beam: MECH_GLOW[c.glow].hex,
  });

  const savedHero = store.get("kd5-hero", {}) || {};
  const hero = {
    cls: HERO_KEYS.includes(savedHero.cls) ? savedHero.cls : "warrior",
    hair: HAIR_STYLES[savedHero.hair] ? savedHero.hair : 0,
    hairColor: HAIR_COLORS[savedHero.hairColor] ? savedHero.hairColor : 0,
    skin: SKIN_TONES[savedHero.skin] ? savedHero.skin : 1,
  };

  function unitName(c = cfg) {
    const num = String(CLASS_KEYS.indexOf(c.cls) * 3 + c.weapon + 1).padStart(2, "0");
    return `${CLASS_INFO[c.cls].code}-${num} ${CLASSES[c.cls].name}`;
  }
  const mechEl = (c = cfg, scale = 4) => buildUnit("mech", c.cls, c.weapon, paintOf(c), scale);

  // one canvas per unit look, for small uses (quest cards, tactics board)
  const unitCache = new Map();
  function unitImage(cls, weaponKind, P) {
    const k = cls + weaponKind + P.name;
    if (!unitCache.has(k)) unitCache.set(k, mechSprite(cls, weaponKind, P, 1));
    return unitCache.get(k);
  }
  function copyCanvas(src) {
    const c = document.createElement("canvas");
    c.width = src.width; c.height = src.height;
    c.getContext("2d").drawImage(src, 0, 0);
    return c;
  }

  /* =========================================================
     CHAPTER I — CREATE: hero creator + mech hangar
     ========================================================= */
  const bay = $("bay");
  const bayUnit = $("bayUnit");
  const heroMech = $("heroMech");
  const configPanel = $("configPanel");
  let createMode = store.get("kd5-tab", "hero") === "mech" ? "mech" : "hero";

  const statRows = (names, values) => names.map((n, i) => {
    const v = Math.max(0, Math.min(10, values[i]));
    return `<div class="stat"><span>${n}</span><span class="stat-bar">${Array.from({ length: 10 }, (_, k) => `<i class="${k < v ? "on" : ""}"></i>`).join("")}</span><b>${v}</b></div>`;
  }).join("");

  // generic option row: buttons or colour swatches, bound to a state object
  function optionRow(label, items, isOn, onPick, kind = "btn", extra = "") {
    const row = document.createElement("div");
    row.className = "opt";
    row.innerHTML = `<span class="opt-label">${label}${extra ? ` · <b>${extra}</b>` : ""}</span><div class="opt-row"></div>`;
    const wrap = row.querySelector(".opt-row");
    items.forEach((it, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-pressed", String(isOn(it, i)));
      if (kind === "swatch") {
        b.className = "swatch";
        b.title = it.name;
        b.setAttribute("aria-label", `${label}: ${it.name}`);
        b.style.setProperty("--a", it.a); b.style.setProperty("--b", it.b || it.a); b.style.setProperty("--c", it.c || it.a);
      } else {
        b.className = "opt-btn" + (it.sub ? " opt-class" : "");
        if (it.color) b.style.setProperty("--cc", it.color);
        b.innerHTML = it.sub ? `${it.name}<small>${it.sub}</small>` : it.name;
      }
      b.addEventListener("click", () => { if (!isOn(it, i)) { onPick(it, i); blip([660, 990], 0.04); } });
      wrap.appendChild(b);
    });
    return row;
  }

  function showUnit(canvas, kind) {
    const wrap = document.createElement("div");
    wrap.className = "stage-unit " + kind;
    wrap.appendChild(canvas);
    if (kind === "mech") wrap.insertAdjacentHTML("beforeend", `<div class="pedestal" aria-hidden="true"><i></i></div>`);
    bayUnit.replaceChildren(wrap);
    wrap.animate([{ transform: "translateY(10px) scale(.96)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 260, easing: "ease-out" });
  }

  function renderHero() {
    const c = HERO_CLASSES[hero.cls];
    showUnit(heroSprite(hero, 5), "hero");
    $("unitLabel").textContent = "HERO";
    $("unitName").textContent = "KENNY";
    $("modeLabel").textContent = "CLASS";
    $("unitMode").textContent = c.name;
    configPanel.innerHTML = `<h3>HERO CREATION</h3>`;
    configPanel.appendChild(optionRow("CLASS", HERO_KEYS.map((k) => ({ key: k, name: HERO_CLASSES[k].name })), (it) => it.key === hero.cls, (it) => { hero.cls = it.key; saveHero(); }));
    configPanel.appendChild(optionRow("HAIR", HAIR_STYLES.map((n) => ({ name: n })), (it, i) => i === hero.hair, (it, i) => { hero.hair = i; saveHero(); }));
    configPanel.appendChild(optionRow("HAIR COLOR", HAIR_COLORS.map((h, i) => ({ name: ["INK", "CHESTNUT", "GOLD", "CRIMSON", "SILVER"][i], a: h })), (it, i) => i === hero.hairColor, (it, i) => { hero.hairColor = i; saveHero(); }, "swatch"));
    configPanel.appendChild(optionRow("SKIN", SKIN_TONES.map((s, i) => ({ name: `TONE ${i + 1}`, a: s })), (it, i) => i === hero.skin, (it, i) => { hero.skin = i; saveHero(); }, "swatch"));
    const card = document.createElement("div");
    card.className = "class-card";
    card.innerHTML = `<p class="class-line">${c.line}</p><p class="class-skill">SIGNATURE SKILL · <b>${c.skill}</b></p><div class="stats">${statRows(HERO_STATS, c.stats)}</div>
      <div class="config-actions"><button class="btn btn-alt" type="button" id="randomHero">RANDOMIZE</button></div>`;
    configPanel.appendChild(card);
    $("randomHero").addEventListener("click", () => {
      hero.cls = pick(HERO_KEYS); hero.hair = Math.floor(rand(0, 3)); hero.hairColor = Math.floor(rand(0, 5)); hero.skin = Math.floor(rand(0, 4));
      blip([523, 659, 784], 0.05);
      saveHero();
    });
  }
  function saveHero() { store.set("kd5-hero", hero); renderHero(); }

  function renderMech() {
    const d = CLASSES[cfg.cls];
    showUnit(mechSprite(cfg.cls, cfg.weapon, paintOf(), 5), "mech");
    heroMech.replaceChildren(mechEl(cfg, 5));
    $("unitLabel").textContent = "UNIT";
    $("unitName").textContent = unitName();
    $("modeLabel").textContent = "TYPE";
    $("unitMode").textContent = d.role;
    configPanel.innerHTML = `<h3>MECH CONFIG</h3>`;
    configPanel.appendChild(optionRow("CLASS", CLASS_KEYS.map((k) => ({ key: k, name: CLASSES[k].name, sub: CLASSES[k].role, color: CLASSES[k].paints[0].m1 })),
      (it) => it.key === cfg.cls, (it) => { cfg.cls = it.key; cfg.weapon = 0; Object.assign(cfg, CLASSES[it.key].def); saveMech(); }));
    configPanel.appendChild(optionRow("WEAPON", d.weapons.map((n) => ({ name: n })), (it, i) => i === cfg.weapon, (it, i) => { cfg.weapon = i; saveMech(); }));
    const sw = (list) => list.map((c) => ({ name: c.name, a: c.hex }));
    configPanel.appendChild(optionRow("PRIMARY", sw(MECH_PRIMARY), (it, i) => i === cfg.primary, (it, i) => { cfg.primary = i; saveMech(); }, "swatch", MECH_PRIMARY[cfg.primary].name));
    configPanel.appendChild(optionRow("SECONDARY", sw(MECH_SECONDARY), (it, i) => i === cfg.secondary, (it, i) => { cfg.secondary = i; saveMech(); }, "swatch", MECH_SECONDARY[cfg.secondary].name));
    configPanel.appendChild(optionRow("GLOW", sw(MECH_GLOW), (it, i) => i === cfg.glow, (it, i) => { cfg.glow = i; saveMech(); }, "swatch", MECH_GLOW[cfg.glow].name));
    const base = CLASS_INFO[cfg.cls].stats, w = CLASS_INFO[cfg.cls].wmods[cfg.weapon];
    const stats = document.createElement("div");
    stats.className = "stats";
    stats.innerHTML = statRows(STAT_NAMES, base.map((v, i) => v + w[i]));
    configPanel.appendChild(stats);
    const acts = document.createElement("div");
    acts.className = "config-actions";
    acts.innerHTML = `<button class="btn btn-alt" type="button" data-act="reset">CLASS COLORS</button><button class="btn btn-alt" type="button" data-act="random">RANDOMIZE</button>`;
    acts.addEventListener("click", (e) => {
      const act = e.target.closest("[data-act]");
      if (!act) return;
      if (act.dataset.act === "reset") Object.assign(cfg, CLASSES[cfg.cls].def);
      else { cfg.primary = Math.floor(rand(0, MECH_PRIMARY.length)); cfg.secondary = Math.floor(rand(0, MECH_SECONDARY.length)); cfg.glow = Math.floor(rand(0, MECH_GLOW.length)); cfg.weapon = Math.floor(rand(0, 3)); }
      blip([523, 659, 784], 0.05);
      saveMech();
    });
    configPanel.appendChild(acts);
  }
  function saveMech() { store.set("kd5-mech", cfg); renderMech(); }

  function setCreateMode(m) {
    createMode = m;
    store.set("kd5-tab", m);
    document.querySelectorAll(".ctab").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.mode === m)));
    bay.classList.toggle("hero-mode", m === "hero");
    if (m === "hero") renderHero(); else renderMech();
  }
  document.querySelectorAll(".ctab").forEach((b) => b.addEventListener("click", () => { if (b.dataset.mode !== createMode) { blip(880, 0.04); setCreateMode(b.dataset.mode); } }));
  heroMech.replaceChildren(mechEl(cfg, 5));
  setCreateMode(createMode);

  /* =========================================================
     CHAPTER II — QUEST BOARD + ATB BATTLE
     ========================================================= */
  const QUESTS = [
    {
      id: "slime", rank: 1, title: "The Jiggling Tyrant", foe: "SLIME KING", sprite: "slimeKing", scale: 9,
      hp: 220, atk: 13, spd: 1.0, weak: "FIRE", hint: "A royal pain. Rumored to be flammable.",
      exp: 150, gil: 120, loot: "Royal Jelly",
      arena: "linear-gradient(180deg,#5ba3ff 0%,#bde0fe 45%,#6a994e 45.2%,#386641)",
      skills: [{ name: "BODY SLAM", mult: 1 }, { name: "SLIME SPLASH", mult: 0.55, all: true }],
    },
    {
      id: "wyvern", rank: 2, title: "Storm Over the Ridge", foe: "THUNDER WYVERN", sprite: "wyvern", scale: 8,
      hp: 380, atk: 18, spd: 1.35, weak: "ICE", hint: "Crackles with lightning. Hates the cold.",
      exp: 320, gil: 260, loot: "Thunder Scale",
      arena: "linear-gradient(180deg,#1b1f3b 0%,#4a4e69 45%,#3d405b 45.2%,#22223b)",
      skills: [{ name: "TAIL WHIP", mult: 1 }, { name: "THUNDER BREATH", mult: 0.6, all: true }],
    },
    {
      id: "colossus", rank: 3, title: "The Iron Colossus", foe: "IRON COLOSSUS", sprite: "colossus", scale: 8,
      hp: 560, atk: 24, spd: 1.0, weak: "BOLT", hint: "An ancient war machine. Its circuits look fragile.",
      exp: 650, gil: 520, loot: "Ancient Core",
      arena: "linear-gradient(180deg,#f4a261 0%,#e9c46a 45%,#8d6e4a 45.2%,#5c4033)",
      skills: [{ name: "ROCKET PUNCH", mult: 1.1 }, { name: "OVERDRIVE BEAM", mult: 0.65, all: true }],
    },
    {
      id: "op-ruins", type: "tactics", rank: 2, title: "Operation Iron Dawn", foe: "4 HOSTILE MECHS", icon: "striker",
      hint: "Tactics mission. Clear the ruins and use the forest for cover.", exp: 400, gil: 300,
      map: "ruins", mod: 0.85,
      player: [["titan", 1, 5], ["striker", 0, 3], ["support", 1, 6]],
      enemy: [["striker", 8, 1], ["titan", 7, 3], ["striker", 9, 4], ["support", 8, 5]],
    },
    {
      id: "op-crossing", type: "tactics", rank: 3, title: "Hold the Crossing", foe: "5 HOSTILE MECHS", icon: "titan",
      hint: "Tactics mission. One gap in the rock wall. Make them come to you.", exp: 700, gil: 520,
      map: "crossing", mod: 1,
      player: [["titan", 1, 2], ["striker", 0, 4], ["support", 1, 5]],
      enemy: [["titan", 8, 2], ["striker", 9, 0], ["striker", 8, 5], ["titan", 9, 3], ["support", 9, 6]],
    },
  ];
  const PARTY = [
    { name: "ALDO", job: "KNIGHT", sprite: "knight", hp: 150, mp: 12, spd: 1.3, atk: [20, 26], mag: [10, 13] },
    { name: "MIRA", job: "MAGE", sprite: "mage", hp: 95, mp: 48, spd: 1.15, atk: [6, 9], mag: [28, 34] },
    { name: "ZEKE", job: "PILOT", sprite: "pilot", hp: 115, mp: 20, spd: 1.7, atk: [13, 17], mag: [12, 15] },
  ];
  const ELEMENTS = { FIRE: "#ff6b35", ICE: "#a0e9ff", BOLT: "#ffe066" };
  const SPELL_COST = 6, CURE_COST = 8;

  const cleared = new Set(store.get("kd2-cleared", []));
  const known = new Set(store.get("kd2-weak", []));
  const loot = store.get("kd2-loot", {}) || {};

  function renderPouch() {
    const entries = Object.entries(loot);
    $("pouch").innerHTML = entries.length
      ? entries.map(([k, v]) => `<li><span>${k}</span><b>×${v}</b></li>`).join("")
      : `<li class="muted">Empty. Go carve something.</li>`;
  }

  const UNIT_BASE_WEAPON = { titan: 2, striker: 0, support: 0 };
  function renderQuests() {
    const wrap = $("questCards");
    wrap.innerHTML = "";
    QUESTS.forEach((q, i) => {
      const card = document.createElement("article");
      card.className = "quest" + (cleared.has(q.id) ? " cleared" : "");
      const tactics = q.type === "tactics";
      card.style.setProperty("--tilt", [-2, 1.5, -1, 2, -1.5][i % 5] + "deg");
      card.innerHTML = `<span class="quest-type ${tactics ? "qt-tac" : ""}">${tactics ? "TACTICS" : "HUNT"}</span><div class="quest-rank" aria-label="Rank ${q.rank} of 3"><b>${"★".repeat(q.rank)}</b>${"★".repeat(3 - q.rank)}</div>`;
      if (tactics) {
        const icon = copyCanvas(unitImage(q.icon, UNIT_BASE_WEAPON[q.icon], HOSTILE));
        icon.className = "quest-mech";
        card.appendChild(icon);
      } else card.appendChild(spriteCanvas(q.sprite, 4));
      card.insertAdjacentHTML("beforeend",
        `<h3>${q.title}</h3><p><b>Target:</b> ${q.foe}<br>${q.hint}</p>` +
        `<div class="reward">LOOT · ${q.loot || "Mech Parts"}</div>` +
        `<button type="button">${tactics ? (cleared.has(q.id) ? "REDEPLOY" : "DEPLOY") : cleared.has(q.id) ? "HUNT AGAIN" : "ACCEPT QUEST"}</button>` +
        `<div class="stamp">CLEARED</div>`);
      card.querySelector("button").addEventListener("click", () => (tactics ? startTactics(q) : startBattle(q)));
      wrap.appendChild(card);
    });
  }
  renderQuests();
  renderPouch();

  /* ---------- battle state ---------- */
  const battleEl = $("battle");
  const arena = $("arena");
  const foeEl = $("foe");
  const cmdEl = $("commands");
  let B = null;

  function startBattle(q) {
    if (B) clearInterval(B.timer);
    blip([130, 150, 170, 200, 240, 300], 0.05, "sawtooth");
    B = {
      q,
      foe: { hp: q.hp, max: q.hp, atb: 0, down: 0 },
      party: PARTY.map((p) => ({ ...p, maxhp: p.hp, maxmp: p.mp, atb: rand(20, 70), ready: false })),
      potions: 3, mechUsed: false, queue: [], busy: false, choosing: false, over: false, menu: null, timer: null,
    };
    const battle = B;
    document.body.classList.add("locked");
    battleEl.hidden = false;
    arena.style.setProperty("--arena", q.arena);
    const swirl = battleEl.querySelector(".battle-swirl");
    const freshSwirl = swirl.cloneNode();
    swirl.replaceWith(freshSwirl);
    setTimeout(() => { freshSwirl.style.display = "none"; }, 950);

    const small = window.innerWidth < 720;
    foeEl.className = "foe";
    foeEl.innerHTML = "";
    foeEl.appendChild(spriteCanvas(q.sprite, small ? Math.round(q.scale * 0.55) : Math.round(q.scale * 0.85)));

    const ps = $("partySprites");
    ps.innerHTML = "";
    B.party.forEach((m) => {
      const d = document.createElement("div");
      d.className = "member";
      d.appendChild(spriteCanvas(m.sprite, small ? 4 : 5));
      ps.appendChild(d);
      m.el = d;
    });

    const pl = $("partyList");
    pl.innerHTML = "";
    B.party.forEach((m) => {
      const row = document.createElement("div");
      row.className = "prow";
      row.innerHTML =
        `<span>${m.name}<small>${m.job}</small></span>` +
        `<span><span class="hp-num"></span><div class="hpbar"><i></i></div></span>` +
        `<span class="mpcol">MP <span class="mp-num"></span></span>` +
        `<div class="atb"><i></i></div>`;
      pl.appendChild(row);
      m.row = row;
    });

    $("result").hidden = true;
    $("summon").classList.remove("go");
    $("aoa").classList.remove("go");
    cmdEl.hidden = true;
    renderFoe();
    renderParty();
    $("battleTitle").textContent = `${"★".repeat(q.rank)} QUEST · ${q.title.toUpperCase()}`;
    showAbility(`A wild ${q.foe} appears!`, 1400);
    setTimeout(() => { if (B === battle) B.timer = setInterval(tick, 50); }, 1000);
  }

  function endBattle() {
    if (!B) return;
    clearInterval(B.timer);
    B = null;
    battleEl.hidden = true;
    document.body.classList.remove("locked");
    renderQuests();
    renderPouch();
  }

  function leaveBattle() {
    if (!B) return;
    const ok = $("resOk");
    if (ok && !$("result").hidden) { ok.click(); return; }
    const won = B.over;
    endBattle();
    if (!won) toast("You left the hunt.");
  }
  $("battleClose").addEventListener("click", leaveBattle);
  battleEl.addEventListener("click", (e) => { if (e.target === battleEl && B) { leaveBattle(); } });

  function renderFoe() {
    const f = B.foe, q = B.q;
    const pct = (f.hp / f.max) * 100;
    $("foeList").innerHTML =
      `<div>${q.foe}</div><div class="hpbar ${pct < 30 ? "low" : ""}"><i style="width:${pct}%"></i></div>` +
      `<div class="weak-line">WEAK: ${known.has(q.id) ? q.weak : "???"}</div>`;
  }

  function renderParty() {
    B.party.forEach((m) => {
      m.row.querySelector(".hp-num").textContent = `${m.hp}/${m.maxhp}`;
      const hb = m.row.querySelector(".hpbar");
      hb.classList.toggle("low", m.hp / m.maxhp < 0.3);
      hb.firstChild.style.width = (m.hp / m.maxhp) * 100 + "%";
      m.row.querySelector(".mp-num").textContent = m.mp;
      const atb = m.row.querySelector(".atb");
      atb.firstChild.style.width = m.atb + "%";
      atb.classList.toggle("full", m.ready);
      m.row.classList.toggle("ready", m.ready && m.hp > 0);
      m.row.classList.toggle("ko", m.hp <= 0);
      m.el.classList.toggle("ready", B.queue[0] === m);
      m.el.classList.toggle("ko", m.hp <= 0);
    });
  }

  let abilityTimer;
  function showAbility(text, ms = 1000) {
    const a = $("ability");
    a.textContent = text;
    a.classList.add("show");
    clearTimeout(abilityTimer);
    abilityTimer = setTimeout(() => a.classList.remove("show"), ms);
  }

  function popup(target, text, cls = "") {
    const ar = arena.getBoundingClientRect();
    const r = target.getBoundingClientRect();
    const d = document.createElement("div");
    d.className = "dmg " + cls;
    d.textContent = text;
    d.style.left = r.left - ar.left + r.width / 2 - 20 + rand(-16, 16) + "px";
    d.style.top = r.top - ar.top + r.height * 0.25 + rand(-10, 10) + "px";
    arena.appendChild(d);
    setTimeout(() => d.remove(), 1000);
  }
  function fx(cls, color) {
    const ar = arena.getBoundingClientRect();
    const r = foeEl.getBoundingClientRect();
    const d = document.createElement("div");
    d.className = cls;
    d.style.setProperty("--sc", color || "#fff");
    d.style.left = r.left - ar.left + r.width / 2 + "px";
    d.style.top = r.top - ar.top + r.height / 2 + "px";
    arena.appendChild(d);
    setTimeout(() => d.remove(), 700);
  }
  function shake(el) { el.classList.remove("hit"); void el.offsetWidth; el.classList.add("hit"); }

  const alive = () => B.party.filter((m) => m.hp > 0);

  function tick() {
    if (!B || B.over || B.busy || B.choosing) return;
    for (const m of B.party) {
      if (m.hp <= 0 || m.ready) continue;
      m.atb = Math.min(100, m.atb + m.spd * 2.2);
      if (m.atb >= 100) { m.ready = true; B.queue.push(m); blip(1319, 0.03); }
    }
    const f = B.foe;
    if (f.down > 0) {
      f.down -= 50;
      if (f.down <= 0) { f.down = 0; foeEl.classList.remove("down"); }
    } else {
      f.atb += B.q.spd * 1.5;
      if (f.atb >= 100) { f.atb = 0; renderParty(); foeAct(); return; }
    }
    renderParty();
    if (B.queue.length) openCommands(B.queue[0]);
  }

  function openCommands(m, sub) {
    B.choosing = true;
    renderParty();
    let items;
    if (sub === "magic") {
      items = Object.keys(ELEMENTS).map((el) => ({ label: `${el} <small>${SPELL_COST} MP</small>`, off: m.mp < SPELL_COST, act: () => act(m, "magic", el) }));
      if (m.job === "MAGE") items.push({ label: `CURE <small>${CURE_COST} MP</small>`, off: m.mp < CURE_COST, act: () => act(m, "cure") });
      items.push({ label: "◂ BACK", act: () => openCommands(m) });
    } else {
      items = [];
      if (B.foe.down > 0) items.push({ label: "ALL-OUT ATTACK!", special: true, act: () => act(m, "allout") });
      items.push({ label: "FIGHT", act: () => act(m, "fight") });
      items.push({ label: "MAGIC ▸", act: () => openCommands(m, "magic") });
      items.push({ label: `POTION <small>×${B.potions}</small>`, off: B.potions <= 0, act: () => act(m, "potion") });
      if (m.job === "PILOT") items.push({ label: "MECH CALL", off: B.mechUsed, act: () => act(m, "mech") });
      items.push({ label: "RUN", act: () => act(m, "run") });
    }
    cmdEl.innerHTML = `<div class="who">${m.name} · ${m.job}</div>`;
    items.forEach((it) => {
      const b = document.createElement("button");
      b.className = "menu-item" + (it.special ? " special" : "");
      b.innerHTML = it.label;
      b.disabled = !!it.off;
      b.addEventListener("click", () => { blip(1046, 0.04); it.act(); });
      cmdEl.appendChild(b);
    });
    cmdEl.dataset.sub = sub || "";
    cmdEl.hidden = false;
    B.menu = bindMenu(cmdEl);
    B.menuOwner = m;
  }

  function closeCommands() {
    cmdEl.hidden = true;
    B.menu = null;
    B.choosing = false;
  }

  function damageFoe(n, cls = "") {
    const f = B.foe;
    n = Math.max(1, Math.round(n));
    f.hp = Math.max(0, f.hp - n);
    shake(foeEl);
    popup(foeEl, n, cls);
    renderFoe();
    blip([180, 90], 0.05, "square");
  }

  async function act(m, kind, arg) {
    const battle = B;
    closeCommands();
    B.queue.shift();
    m.ready = false;
    m.atb = 0;
    B.busy = true;
    m.el.classList.remove("acting");
    void m.el.offsetWidth;
    m.el.classList.add("acting");
    renderParty();
    const f = B.foe, q = B.q;
    let pause = 800;

    if (kind === "fight") {
      await wait(250);
      fx("slash");
      damageFoe(randInt(m.atk) * (f.down ? 1.3 : 1));
    } else if (kind === "magic") {
      m.mp -= SPELL_COST;
      showAbility(arg);
      blip(arg === "FIRE" ? [300, 200, 400] : arg === "ICE" ? [1200, 1500, 1800] : [900, 200, 900], 0.05, "sawtooth");
      await wait(300);
      fx("spell", ELEMENTS[arg]);
      const weak = arg === q.weak;
      damageFoe(randInt(m.mag) * (weak ? 2 : 1) * (f.down ? 1.3 : 1));
      if (weak && f.hp > 0) {
        await wait(250);
        popup(foeEl, "WEAK!", "weak");
        if (!known.has(q.id)) { known.add(q.id); store.set("kd2-weak", [...known]); renderFoe(); }
        if (!f.down) {
          f.down = 5200;
          f.atb = 0;
          foeEl.classList.add("down");
          await wait(350);
          popup(m.el, "1 MORE!", "tag");
          blip([784, 1046], 0.06);
          m.atb = 100;
          m.ready = true;
          B.queue.unshift(m);
        }
      }
    } else if (kind === "cure") {
      m.mp -= CURE_COST;
      showAbility("CURE");
      await wait(300);
      alive().forEach((x) => { const h = Math.min(45, x.maxhp - x.hp); x.hp += h; popup(x.el, h, "heal"); });
      blip([660, 880, 1100], 0.06, "sine");
    } else if (kind === "potion") {
      B.potions--;
      const t = alive().sort((a, b) => a.hp / a.maxhp - b.hp / b.maxhp)[0];
      showAbility(`POTION → ${t.name}`);
      await wait(300);
      const h = Math.min(70, t.maxhp - t.hp);
      t.hp += h;
      popup(t.el, h, "heal");
      blip([523, 784], 0.06, "sine");
    } else if (kind === "mech") {
      B.mechUsed = true;
      showAbility(`MECH CALL · ${unitName()}`, 1600);
      const sm = $("summon");
      const wrap = document.createElement("div");
      wrap.className = "mech-wrap";
      wrap.appendChild(mechEl());
      sm.replaceChildren(wrap);
      sm.classList.remove("go");
      void sm.offsetWidth;
      sm.classList.add("go");
      blip([110, 150, 200, 260, 330, 440, 550, 660], 0.08, "sawtooth");
      await wait(800);
      fx("spell", paintOf().beam || paintOf().eye);
      damageFoe(rand(95, 125) * (f.down ? 1.3 : 1));
      await wait(900);
      sm.classList.remove("go");
      once("mechcall", () => toast("ACHIEVEMENT: CALLED IN THE BIG GUNS"));
      pause = 300;
    } else if (kind === "allout") {
      const aoa = $("aoa");
      aoa.classList.remove("go");
      void aoa.offsetWidth;
      aoa.classList.add("go");
      blip([220, 330, 440, 660, 880], 0.07, "square");
      await wait(700);
      for (let i = 0; i < 4; i++) {
        fx("slash");
        damageFoe(alive().reduce((a, x) => a + randInt(x.atk), 0) * 0.55);
        await wait(140);
      }
      f.down = 0;
      foeEl.classList.remove("down");
      once("allout", () => toast("ACHIEVEMENT: TAKE YOUR HEART"));
      pause = 500;
    } else if (kind === "run") {
      const escaped = q.rank < 3 && Math.random() < 0.7;
      showAbility(escaped ? "Got away safely!" : "Can't escape!");
      await wait(900);
      if (escaped) { if (B === battle) endBattle(); return; }
    }

    if (B !== battle) return;
    renderParty();
    await wait(pause);
    if (B !== battle) return;
    m.el.classList.remove("acting");
    if (f.hp <= 0) return victory();
    B.busy = false;
  }

  async function foeAct() {
    const battle = B;
    B.busy = true;
    const q = B.q;
    const skill = Math.random() < 0.3 ? q.skills[1] : q.skills[0];
    showAbility(skill.name);
    foeEl.classList.remove("attacking");
    void foeEl.offsetWidth;
    foeEl.classList.add("attacking");
    await wait(450);
    if (B !== battle) return;
    const targets = skill.all ? alive() : [pick(alive())];
    targets.forEach((m) => {
      const d = Math.round(q.atk * skill.mult * rand(0.85, 1.15));
      m.hp = Math.max(0, m.hp - d);
      shake(m.el);
      popup(m.el, d);
      if (m.hp <= 0) {
        m.ready = false;
        m.atb = 0;
        B.queue = B.queue.filter((x) => x !== m);
      }
    });
    blip([120, 80], 0.08, "sawtooth");
    renderParty();
    await wait(700);
    if (B !== battle) return;
    foeEl.classList.remove("attacking");
    if (!alive().length) return defeat();
    B.busy = false;
  }

  async function victory() {
    B.over = true;
    closeCommands();
    foeEl.classList.remove("down");
    foeEl.classList.add("dead");
    B.party.forEach((m) => m.el.classList.remove("ready"));
    await wait(700);
    FANFARE();
    const q = B.q;
    const carved = Math.floor(rand(1, 4));
    showResult(
      `<h3>VICTORY!</h3>` +
      `<p>CARVED ..... ${q.loot} ×${carved}</p>` +
      `<div class="row"><button class="btn" id="resOk">CONTINUE</button></div>`,
      () => {
        $("resOk").addEventListener("click", () => {
          $("result").hidden = true;
          loot[q.loot] = (loot[q.loot] || 0) + carved;
          store.set("kd2-loot", loot);
          if (!cleared.has(q.id)) {
            cleared.add(q.id);
            store.set("kd2-cleared", [...cleared]);
            if (cleared.size === QUESTS.length) setTimeout(() => toast("ACHIEVEMENT: MASTER HUNTER"), 900);
          }
          endBattle();
        });
      });
  }

  async function defeat() {
    B.over = true;
    closeCommands();
    await wait(600);
    blip([392, 330, 262, 196], 0.2, "triangle");
    const q = B.q;
    showResult(
      `<h3>QUEST FAILED</h3><p>Your party was carted back to camp.</p><p class="muted">Hint: hit its weakness to knock it down.</p>` +
      `<div class="row"><button class="btn btn-alt" id="resRetry">RETRY</button><button class="btn" id="resBack">RETURN</button></div>`,
      () => {
        $("resRetry").addEventListener("click", () => startBattle(q));
        $("resBack").addEventListener("click", endBattle);
      });
  }

  function showResult(html, bind) {
    const r = $("result");
    r.innerHTML = `<div class="window">${html}</div>`;
    r.hidden = false;
    bind();
    const first = r.querySelector("button");
    if (first) first.focus();
  }

  /* =========================================================
     CHAPTER II·B — TACTICS OPS (grid strategy battle)
     ========================================================= */
  const TERRAIN = {
    ".": { name: "PLAINS", cost: 1, def: 0, avo: 0 },
    F: { name: "FOREST", cost: 2, def: 1, avo: 20 },
    R: { name: "RUINS", cost: 1, def: 2, avo: 10 },
    W: { name: "ROCK", cost: 99, def: 0, avo: 0 },
  };
  const TMAPS = {
    ruins: [
      "..F...RR..",
      ".FF.......",
      "....WW..F.",
      "..R.W..FF.",
      ".......R..",
      "F...FF....",
      "FF........",
    ],
    crossing: [
      "...F..W...",
      ".F....W.F.",
      "......W...",
      "..R.......",
      "......W.R.",
      ".FF...W...",
      "......W.F.",
    ],
  };
  const UNIT_BASE = {
    titan: { hp: 34, atk: 13, def: 6, mov: 3, rng: [1, 1], weapon: 2 },
    striker: { hp: 26, atk: 12, def: 4, mov: 4, rng: [1, 2], weapon: 0 },
    support: { hp: 21, atk: 7, def: 3, mov: 5, rng: [1, 1], heal: 10, weapon: 0 },
  };
  const BEATS = { titan: "striker", striker: "support", support: "titan" };
  const SQUAD_NAMES = { titan: "BRUNO", striker: "ZEKE", support: "MIRA" };

  const tEl = $("tactics");
  const tBoard = $("tboard");
  const tPanel = $("tpanel");
  let T = null;

  const tkey = (x, y) => x + "," + y;
  const terrAt = (x, y) => TERRAIN[T.map[y][x]];
  const unitAt = (x, y) => T.units.find((u) => u.hp > 0 && u.x === x && u.y === y);
  const mdist = (ax, ay, bx, by) => Math.abs(ax - bx) + Math.abs(ay - by);
  const living = (side) => T.units.filter((u) => u.hp > 0 && u.side === side);
  const canHit = (u, ux, uy, tx, ty) => { const d = mdist(ux, uy, tx, ty); return d >= u.rng[0] && d <= u.rng[1]; };
  const cellEl = (x, y) => T.cells[y * T.cols + x];

  function makeUnit(side, cls, x, y, i, mod) {
    const b = UNIT_BASE[cls];
    const mine = side === "P" && cls === cfg.cls;
    const hp = Math.round(b.hp * mod);
    return {
      id: side + i, side, cls, x, y, hp, max: hp,
      atk: b.atk + (side === "E" ? Math.round((mod - 1) * 10) : 0), def: b.def, mov: b.mov, rng: b.rng, heal: b.heal || 0,
      acted: false,
      name: side === "P" ? (mine ? "KENNY" : SQUAD_NAMES[cls]) : "HOSTILE-" + "ABCDEFG"[i],
      img: unitImage(cls, mine ? cfg.weapon : b.weapon, side === "P" ? (mine ? paintOf() : CLASSES[cls].paints[0]) : HOSTILE),
    };
  }

  function startTactics(q) {
    blip([196, 262, 330, 392], 0.08, "square");
    T = {
      q, map: TMAPS[q.map], cols: 10, rows: 7, turn: 1, phase: "player",
      sel: null, mode: "idle", reach: null, targets: [], pending: null, from: null, inspect: null,
      busy: true, over: false,
    };
    T.units = [
      ...q.player.map(([c, x, y], i) => makeUnit("P", c, x, y, i, 1)),
      ...q.enemy.map(([c, x, y], i) => makeUnit("E", c, x, y, i, q.mod)),
    ];
    document.body.classList.add("locked");
    tEl.hidden = false;
    $("tTitle").textContent = `${"★".repeat(q.rank)} TACTICS · ${q.title.toUpperCase()}`;
    $("tResult").hidden = true;
    buildBoard();
    renderPanel();
    const run = T;
    banner("PLAYER PHASE", "player").then(() => { if (T === run) { T.busy = false; renderPanel(); } });
  }

  function endTactics() {
    T = null;
    tEl.hidden = true;
    document.body.classList.remove("locked");
    renderQuests();
    renderPouch();
  }
  function leaveTactics() {
    if (!T) return;
    const ok = $("tOk");
    if (ok && !$("tResult").hidden) { ok.click(); return; }
    const done = T.over;
    endTactics();
    if (!done) toast("You withdrew from the mission.");
  }
  $("tClose").addEventListener("click", leaveTactics);
  tEl.addEventListener("click", (e) => { if (e.target === tEl) leaveTactics(); });

  function buildBoard() {
    tBoard.innerHTML = "";
    tBoard.style.setProperty("--cols", T.cols);
    tBoard.style.setProperty("--rows", T.rows);
    for (let y = 0; y < T.rows; y++) for (let x = 0; x < T.cols; x++) {
      const t = T.map[y][x];
      const c = document.createElement("button");
      c.type = "button";
      c.className = "tcell t-" + (t === "." ? "P" : t);
      c.setAttribute("aria-label", `${TERRAIN[t].name} at column ${x + 1}, row ${y + 1}`);
      if (t === "F") c.appendChild(spriteCanvas("tree", 3));
      if (t === "R") c.appendChild(spriteCanvas("ruin", 3));
      if (t === "W") c.appendChild(spriteCanvas("rock", 4));
      c.addEventListener("click", () => onCell(x, y));
      tBoard.appendChild(c);
    }
    T.cells = [...tBoard.querySelectorAll(".tcell")];
    T.units.forEach((u) => {
      const el = document.createElement("div");
      el.className = "tunit " + (u.side === "E" ? "enemy" : "ally");
      el.appendChild(copyCanvas(u.img));
      el.insertAdjacentHTML("beforeend", `<span class="thp"><i></i></span>`);
      tBoard.appendChild(el);
      u.el = el;
      placeUnit(u);
    });
  }
  function placeUnit(u) {
    u.el.style.left = (u.x * 100) / T.cols + "%";
    u.el.style.top = (u.y * 100) / T.rows + "%";
    u.el.style.width = 100 / T.cols + "%";
    u.el.style.height = 100 / T.rows + "%";
    u.el.querySelector(".thp i").style.width = (u.hp / u.max) * 100 + "%";
    u.el.classList.toggle("acted", u.acted);
  }
  function clearMarks() { T.cells.forEach((c) => c.classList.remove("mv", "atk", "heal", "sel", "threat")); }

  function reach(u) {
    const dist = new Map([[tkey(u.x, u.y), 0]]);
    const open = [[u.x, u.y]];
    while (open.length) {
      open.sort((a, b) => dist.get(tkey(...a)) - dist.get(tkey(...b)));
      const [x, y] = open.shift();
      const d = dist.get(tkey(x, y));
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= T.cols || ny >= T.rows) continue;
        const t = terrAt(nx, ny);
        const o = unitAt(nx, ny);
        if (t.cost >= 99 || (o && o.side !== u.side)) continue;
        const nd = d + t.cost, k = tkey(nx, ny);
        if (nd > u.mov || (dist.has(k) && dist.get(k) <= nd)) continue;
        dist.set(k, nd);
        open.push([nx, ny]);
      }
    }
    for (const k of [...dist.keys()]) {
      const [x, y] = k.split(",").map(Number);
      const o = unitAt(x, y);
      if (o && o !== u) dist.delete(k);
    }
    return dist;
  }
  const targetsFrom = (u, x, y) => living(u.side === "P" ? "E" : "P").filter((t) => canHit(u, x, y, t.x, t.y));
  const healTargetsFrom = (u, x, y) =>
    u.heal ? living(u.side).filter((t) => t !== u && t.hp < t.max && mdist(x, y, t.x, t.y) <= 2) : [];

  function forecast(a, d) {
    const tri = BEATS[a.cls] === d.cls ? 1 : BEATS[d.cls] === a.cls ? -1 : 0;
    const terr = terrAt(d.x, d.y);
    return {
      tri,
      dmg: Math.max(1, a.atk + tri * 3 - d.def - terr.def),
      hit: Math.max(20, Math.min(100, 90 + tri * 10 - terr.avo)),
    };
  }

  /* ---------- player input ---------- */
  function onCell(x, y) {
    if (!T || T.busy || T.over || T.phase !== "player") return;
    const u = unitAt(x, y);
    if (T.mode === "idle" || T.mode === "inspect") {
      if (u && u.side === "P" && !u.acted) return select(u);
      if (u) return inspect(u);
      T.mode = "idle"; T.inspect = null; clearMarks(); return renderPanel();
    }
    if (T.mode === "move") {
      if (T.reach.has(tkey(x, y))) return moveTo(T.sel, x, y);
      if (u && u.side === "P" && !u.acted) return select(u);
      return deselect();
    }
    if (T.mode === "target" || T.mode === "heal") {
      if (u && T.targets.includes(u)) {
        if (T.pending === u) return T.mode === "heal" ? doHeal(T.sel, u) : doAttack(T.sel, u);
        T.pending = u;
        blip(880, 0.03);
        renderPanel();
      }
    }
  }

  function select(u) {
    T.sel = u; T.mode = "move"; T.from = [u.x, u.y]; T.inspect = null;
    T.reach = reach(u);
    clearMarks();
    const atkTiles = new Set();
    for (const k of T.reach.keys()) {
      const [x, y] = k.split(",").map(Number);
      cellEl(x, y).classList.add("mv");
      for (let ty = 0; ty < T.rows; ty++) for (let tx = 0; tx < T.cols; tx++)
        if (canHit(u, x, y, tx, ty) && !T.reach.has(tkey(tx, ty))) atkTiles.add(tkey(tx, ty));
    }
    atkTiles.forEach((k) => { const [x, y] = k.split(",").map(Number); cellEl(x, y).classList.add("threat"); });
    cellEl(u.x, u.y).classList.add("sel");
    blip(660, 0.04);
    renderPanel();
  }
  function inspect(u) {
    T.mode = "inspect"; T.inspect = u; T.sel = null;
    clearMarks();
    const R = reach(u);
    for (const k of R.keys()) {
      const [x, y] = k.split(",").map(Number);
      cellEl(x, y).classList.add(u.side === "E" ? "threat" : "mv");
    }
    cellEl(u.x, u.y).classList.add("sel");
    renderPanel();
  }
  function deselect() {
    T.sel = null; T.mode = "idle"; T.pending = null;
    clearMarks();
    renderPanel();
  }
  async function moveTo(u, x, y) {
    T.busy = true;
    clearMarks();
    u.x = x; u.y = y;
    placeUnit(u);
    blip([392, 440], 0.04);
    await wait(260);
    if (!T) return;
    T.busy = false;
    T.mode = "menu";
    cellEl(x, y).classList.add("sel");
    renderPanel();
  }
  function aim(kind) {
    const u = T.sel;
    T.targets = kind === "heal" ? healTargetsFrom(u, u.x, u.y) : targetsFrom(u, u.x, u.y);
    T.mode = kind === "heal" ? "heal" : "target";
    T.pending = T.targets.length === 1 ? T.targets[0] : null;
    clearMarks();
    cellEl(u.x, u.y).classList.add("sel");
    T.targets.forEach((t) => cellEl(t.x, t.y).classList.add(kind === "heal" ? "heal" : "atk"));
    renderPanel();
  }

  async function doAttack(a, d) {
    T.busy = true;
    clearMarks();
    renderPanel();
    await combat(a, d);
    if (T) finish(a);
  }
  async function doHeal(a, t) {
    T.busy = true;
    clearMarks();
    const amt = Math.min(a.heal, t.max - t.hp);
    t.hp += amt;
    tPop(t, "+" + amt, "heal");
    placeUnit(t);
    blip([660, 880, 1100], 0.06, "sine");
    await wait(550);
    if (T) finish(a);
  }
  function finish(a) {
    a.acted = true;
    placeUnit(a);
    T.sel = null; T.mode = "idle"; T.pending = null; T.targets = [];
    T.busy = false;
    clearMarks();
    renderPanel();
    if (checkEnd()) return;
    if (living("P").every((u) => u.acted)) enemyPhase();
  }

  async function strike(a, d) {
    const f = forecast(a, d);
    a.el.style.setProperty("--dx", (d.x > a.x ? 1 : d.x < a.x ? -1 : 0) * 18 + "%");
    a.el.style.setProperty("--dy", (d.y > a.y ? 1 : d.y < a.y ? -1 : 0) * 18 + "%");
    a.el.classList.remove("lunge");
    void a.el.offsetWidth;
    a.el.classList.add("lunge");
    await wait(200);
    if (!T) return;
    if (Math.random() * 100 < f.hit) {
      d.hp = Math.max(0, d.hp - f.dmg);
      tPop(d, f.dmg, f.tri > 0 ? "crit" : "");
      d.el.classList.remove("hurt");
      void d.el.offsetWidth;
      d.el.classList.add("hurt");
      placeUnit(d);
      blip([180, 90], 0.05);
      if (d.hp <= 0) {
        d.el.classList.add("dead");
        blip([300, 200, 120, 80], 0.08, "sawtooth");
      }
    } else {
      tPop(d, "MISS", "miss");
      blip(1200, 0.04, "triangle");
    }
    await wait(450);
  }
  async function combat(a, d) {
    await strike(a, d);
    if (T && d.hp > 0 && a.hp > 0 && canHit(d, d.x, d.y, a.x, a.y)) await strike(d, a);
  }
  function tPop(u, text, cls) {
    const p = document.createElement("div");
    p.className = "dmg tpop " + (cls || "");
    p.textContent = text;
    p.style.left = ((u.x + 0.5) * 100) / T.cols + "%";
    p.style.top = (u.y * 100) / T.rows + "%";
    tBoard.appendChild(p);
    setTimeout(() => p.remove(), 1000);
  }

  function banner(text, kind) {
    const b = $("phaseBanner");
    b.textContent = text;
    b.className = "phase-banner show " + kind;
    blip(kind === "player" ? [523, 659, 784] : [392, 311, 262], 0.09, "square");
    return wait(1150).then(() => { b.className = "phase-banner"; });
  }

  /* ---------- enemy phase ---------- */
  async function enemyPhase() {
    if (!T || T.over) return;
    const run = T;
    T.phase = "enemy";
    T.busy = true;
    clearMarks();
    renderPanel();
    await banner("ENEMY PHASE", "enemy");
    for (const e of living("E")) {
      if (T !== run || T.over) return;
      if (e.hp <= 0) continue;
      await enemyAct(e);
      if (checkEnd()) return;
    }
    if (T !== run) return;
    T.turn++;
    T.units.forEach((u) => { u.acted = false; placeUnit(u); });
    T.phase = "player";
    renderPanel();
    await banner("PLAYER PHASE", "player");
    if (T === run) { T.busy = false; renderPanel(); }
  }

  async function enemyAct(e) {
    const R = reach(e);
    let best = null;
    for (const [k, cost] of R) {
      const [x, y] = k.split(",").map(Number);
      if (e.heal) {
        for (const a of living("E")) {
          if (a === e || a.hp >= a.max * 0.6 || mdist(x, y, a.x, a.y) > 2) continue;
          const s = 20 + (a.max - a.hp);
          if (!best || s > best.s) best = { s, x, y, heal: a };
        }
      }
      for (const p of living("P")) {
        if (!canHit(e, x, y, p.x, p.y)) continue;
        const f = forecast(e, p);
        let s = (f.dmg * f.hit) / 100 + (f.dmg >= p.hp ? 30 : 0) + terrAt(x, y).def - cost * 0.1;
        if (!canHit(p, p.x, p.y, x, y)) s += 2;
        if (!best || s > best.s) best = { s, x, y, target: p };
      }
    }
    if (!best) {
      const players = living("P");
      let bx = e.x, by = e.y, bd = Infinity;
      for (const k of R.keys()) {
        const [x, y] = k.split(",").map(Number);
        const d = Math.min(...players.map((p) => mdist(x, y, p.x, p.y)));
        if (d < bd) { bd = d; bx = x; by = y; }
      }
      best = { x: bx, y: by };
    }
    cellEl(e.x, e.y).classList.add("threat");
    await wait(200);
    if (!T) return;
    clearMarks();
    if (best.x !== e.x || best.y !== e.y) {
      e.x = best.x; e.y = best.y;
      placeUnit(e);
      blip([330, 294], 0.04);
      await wait(320);
    }
    if (!T) return;
    if (best.heal) {
      const amt = Math.min(e.heal, best.heal.max - best.heal.hp);
      best.heal.hp += amt;
      tPop(best.heal, "+" + amt, "heal");
      placeUnit(best.heal);
      await wait(500);
    } else if (best.target) {
      await combat(e, best.target);
    } else {
      await wait(150);
    }
  }

  function checkEnd() {
    if (!T || T.over) return true;
    if (!living("E").length) { tVictory(); return true; }
    if (!living("P").length) { tDefeat(); return true; }
    return false;
  }

  async function tVictory() {
    T.over = true;
    T.busy = true;
    renderPanel();
    await wait(600);
    if (!T) return;
    FANFARE();
    const q = T.q, parts = Math.floor(rand(2, 5));
    showTResult(
      `<h3>MISSION COMPLETE</h3><p>TURNS ...... ${T.turn}</p>` +
      `<p>SALVAGED ... Mech Parts ×${parts}</p><div class="row"><button class="btn" id="tOk">CONTINUE</button></div>`,
      () => $("tOk").addEventListener("click", () => {
        $("tResult").hidden = true;
        loot["Mech Parts"] = (loot["Mech Parts"] || 0) + parts;
        store.set("kd2-loot", loot);
        if (!cleared.has(q.id)) {
          cleared.add(q.id);
          store.set("kd2-cleared", [...cleared]);
          once("tactician", () => setTimeout(() => toast("ACHIEVEMENT: MASTER TACTICIAN"), 900));
        }
        endTactics();
      })
    );
  }
  async function tDefeat() {
    T.over = true;
    T.busy = true;
    renderPanel();
    await wait(600);
    if (!T) return;
    blip([392, 330, 262, 196], 0.2, "triangle");
    const q = T.q;
    showTResult(
      `<h3>MISSION FAILED</h3><p>Your squad was pushed back.</p><p class="muted">Hint: use forest and ruins for cover, and mind the class triangle.</p>` +
      `<div class="row"><button class="btn btn-alt" id="tRetry">RETRY</button><button class="btn" id="tBack">RETURN</button></div>`,
      () => {
        $("tRetry").addEventListener("click", () => startTactics(q));
        $("tBack").addEventListener("click", endTactics);
      }
    );
  }
  function showTResult(html, bind) {
    const r = $("tResult");
    r.innerHTML = `<div class="window">${html}</div>`;
    r.hidden = false;
    bind();
    const first = r.querySelector("button");
    if (first) first.focus();
  }

  /* ---------- side panel ---------- */
  function unitCard(u) {
    const terr = terrAt(u.x, u.y);
    return `<div class="tp-unit ${u.side === "P" ? "ally" : "enemy"}">
      <div class="tp-portrait"></div>
      <div class="tp-id"><b>${u.name}</b><small>${CLASSES[u.cls].name} · ${u.side === "P" ? "ALLY" : "HOSTILE"}</small>
        <div class="hpbar ${u.hp / u.max < 0.3 ? "low" : ""}"><i style="width:${(u.hp / u.max) * 100}%"></i></div>
        <small>HP ${u.hp}/${u.max}</small></div>
    </div>
    <div class="tp-stats"><span>ATK <b>${u.atk}</b></span><span>DEF <b>${u.def}</b></span><span>MOV <b>${u.mov}</b></span>
      <span>RNG <b>${u.rng[0] === u.rng[1] ? u.rng[0] : u.rng.join("-")}</b></span>${u.heal ? `<span>HEAL <b>${u.heal}</b></span>` : ""}</div>
    <p class="tp-terr">ON ${terr.name}${terr.def || terr.avo ? ` · DEF +${terr.def} · AVO +${terr.avo}` : ""}</p>`;
  }
  function fcHTML(a, d) {
    const f = forecast(a, d);
    const g = canHit(d, d.x, d.y, a.x, a.y) ? forecast(d, a) : null;
    const arrow = (t) => (t > 0 ? ` <i class="up">▲</i>` : t < 0 ? ` <i class="down">▼</i>` : "");
    return `<div class="tp-fc">
      <div><b>${a.name}</b><span>HP ${a.hp}</span><span>DMG ${f.dmg}${arrow(f.tri)}</span><span>HIT ${f.hit}%</span></div>
      <div><b>${d.name}</b><span>HP ${d.hp}</span><span>DMG ${g ? g.dmg + arrow(g.tri) : "–"}</span><span>HIT ${g ? g.hit + "%" : "–"}</span></div>
    </div>`;
  }
  function renderPanel() {
    if (!T) return;
    const u = T.mode === "inspect" ? T.inspect : T.sel;
    let h = `<div class="tp-head"><span>TURN ${T.turn}</span><b class="${T.phase}">${T.phase === "player" ? "PLAYER PHASE" : "ENEMY PHASE"}</b></div>`;
    if (u) h += unitCard(u);
    else h += `<p class="tp-hint">${T.phase === "player" ? "Pick one of your units to see where it can move. Tap an enemy to see its range." : "The enemy is moving..."}</p>`;

    if (T.mode === "menu") {
      const canAtk = targetsFrom(T.sel, T.sel.x, T.sel.y).length > 0;
      const canHeal = healTargetsFrom(T.sel, T.sel.x, T.sel.y).length > 0;
      h += `<div class="tp-actions">
        ${canAtk ? `<button class="tbtn" data-act="attack">ATTACK</button>` : ""}
        ${canHeal ? `<button class="tbtn" data-act="heal">REPAIR</button>` : ""}
        <button class="tbtn" data-act="wait">WAIT</button>
        <button class="tbtn ghost" data-act="back">UNDO MOVE</button></div>`;
    } else if (T.mode === "target" || T.mode === "heal") {
      if (T.pending) {
        h += T.mode === "heal"
          ? `<p class="tp-hint">${T.pending.name}: HP ${T.pending.hp} → ${Math.min(T.pending.max, T.pending.hp + T.sel.heal)}</p>`
          : fcHTML(T.sel, T.pending);
        h += `<div class="tp-actions"><button class="tbtn go" data-act="confirm">${T.mode === "heal" ? "REPAIR" : "CONFIRM ATTACK"}</button><button class="tbtn ghost" data-act="cancel">BACK</button></div>`;
      } else {
        h += `<p class="tp-hint">Pick a highlighted ${T.mode === "heal" ? "ally" : "target"}.</p><div class="tp-actions"><button class="tbtn ghost" data-act="cancel">BACK</button></div>`;
      }
    }
    const left = living("P").filter((x) => !x.acted).length;
    h += `<div class="tp-foot"><span>${living("P").length} ALLIES · ${living("E").length} HOSTILES</span>
      <button class="btn btn-alt" data-act="end" ${T.phase !== "player" || T.busy || T.over ? "disabled" : ""}>END TURN${left ? ` (${left})` : ""}</button></div>
      <p class="tp-tri">TITAN > STRIKER > SUPPORT > TITAN<br><small>Advantage: +3 damage, +10 hit</small></p>`;
    tPanel.innerHTML = h;
    const portrait = tPanel.querySelector(".tp-portrait");
    if (portrait && u) portrait.appendChild(copyCanvas(u.img));
  }
  tPanel.addEventListener("click", (e) => {
    const b = e.target.closest("[data-act]");
    if (!b || !T || b.disabled) return;
    const act = b.dataset.act;
    blip(1046, 0.03);
    if (act === "end") { if (!T.busy && T.phase === "player") { deselect(); enemyPhase(); } return; }
    if (T.busy) return;
    if (act === "attack") aim("attack");
    else if (act === "heal") aim("heal");
    else if (act === "wait") finish(T.sel);
    else if (act === "back") { const u = T.sel; u.x = T.from[0]; u.y = T.from[1]; placeUnit(u); select(u); }
    else if (act === "confirm" && T.pending) (T.mode === "heal" ? doHeal : doAttack)(T.sel, T.pending);
    else if (act === "cancel") { T.mode = "menu"; T.pending = null; clearMarks(); cellEl(T.sel.x, T.sel.y).classList.add("sel"); renderPanel(); }
  });

  /* =========================================================
     CHAPTER III — STATUS (work, skills, interests)
     ========================================================= */
  const SKILL_GROUPS = [
    { title: "SALES & CUSTOMER SUCCESS", tag: "ABILITIES", icon: "star", items: [
      "B2B SaaS Sales", "Inbound & Outbound Sales", "Discovery Calls", "Product Demonstrations", "Consultative Selling",
      "Lead Qualification", "Pipeline Management", "Account Management", "Customer Success", "Business Development",
      "Relationship Management",
    ] },
    { title: "CRM & SALES TOOLS", tag: "EQUIPMENT", icon: "shield", items: ["HubSpot", "Salesforce", "Clay", "LinkedIn Sales Navigator"] },
    { title: "TECHNICAL", tag: "TECH", icon: "gem", items: ["Ruby on Rails", "JavaScript", "Vue.js", "PostgreSQL", "Tailwind CSS", "Git"] },
  ];
  const JOURNEY = [
    { org: "Respyre", role: "Product & Sales Specialist", when: "2025 – NOW", where: "Remote", active: true,
      text: "Enterprise sales support for sustainability technology in infrastructure and construction: discovery, demos, and the full sales cycle." },
    { org: "The Modern Hotelier", role: "Sales Specialist", when: "2025", where: "Remote",
      text: "Qualified inbound and outbound leads, ran discovery conversations, and kept the hospitality-tech pipeline moving." },
    { org: "GAIN Advisors", role: "Digital Operations & Automation Assistant", when: "2024 – NOW", where: "Remote", active: true,
      text: "Scheduling, sales reports, proposals, and lead tracking in support of business development." },
    { org: "Personal Virtual Assistant", role: "Virtual Assistant", when: "2024 – NOW", where: "Remote", active: true,
      text: "Admin support, project milestones, documentation, and vendor coordination across concurrent engagements." },
    { org: "Sumber Walet Alam", role: "Technology Specialist", when: "2021 – NOW", where: "Batam", active: true,
      text: "Introduced software and workflow improvements, documented processes, and ran digital marketing." },
    { org: "Sumber Batam Indah", role: "Technology Specialist", when: "2021 – NOW", where: "Batam", active: true,
      text: "Technical support, infrastructure upkeep, new software rollouts, and cost optimization." },
    { org: "Wijaya Food Batam", role: "Founder", when: "2021", where: "Batam",
      text: "Launched and ran a small business from concept through daily operations." },
    { org: "Ciputra Group", role: "Graphic Designer", when: "2019 – 2021", where: "Batam",
      text: "Designed digital, print, and advertising creative for property marketing campaigns." },
    { org: "SMK Finance", role: "Credit Marketing Officer", when: "2016 – 2019", where: "Batam",
      text: "Prospected new customers, consulted on financing needs, and negotiated financing options." },
  ];
  const TRAINING = [
    { org: "Le Wagon", what: "Full Stack Web Development", when: "2023", where: "Bali, Indonesia", icon: "sword" },
    { org: "Universitas Internasional Batam", what: "Computer Science", when: "2020", where: "Batam, Indonesia", icon: "crystal" },
  ];
  const skillCount = SKILL_GROUPS.reduce((a, g) => a + g.items.length, 0);

  const statusPanel = $("statusPanel");
  const statusTabsEl = $("statusTabs");

  function tabStatus() {
    statusPanel.innerHTML = `
      <div class="st-top">
        <div class="st-portrait"></div>
        <div>
          <h3>KENNY DEVIN WIJAYA</h3>
          <p class="st-job">PRODUCT &amp; SALES SPECIALIST</p>
          <p class="st-loc">BATAM, INDONESIA · WORKS REMOTE</p>
        </div>
      </div>
      <p class="st-bio">Sales and customer success, backed by a full-stack web toolkit. Discovery calls, demos and pipelines on one side; Ruby on Rails, Vue.js and PostgreSQL on the other.</p>
      <div class="st-stats">
        <div><span>CURRENT QUEST</span><b>Respyre · Product &amp; Sales</b></div>
        <div><span>IN THE FIELD SINCE</span><b>2016</b></div>
        <div><span>ROLES HELD</span><b>${JOURNEY.length}</b></div>
        <div><span>SKILLS</span><b>${skillCount}</b></div>
      </div>
      <div class="st-contact">
        <a class="tbtn" href="mailto:kendevxz@gmail.com">✉ kendevxz@gmail.com</a>
        <a class="tbtn ghost" href="https://github.com/kendevxz" rel="noopener">GitHub · kendevxz</a>
      </div>`;
    statusPanel.querySelector(".st-portrait").appendChild(buildPortrait(2));
  }

  function tabSkills() {
    statusPanel.innerHTML = `<div class="sk-grid">${SKILL_GROUPS.map((g) => `
      <div class="sk-group"><h4><span class="sk-icon" data-icon="${g.icon}"></span>${g.title}<small>${g.tag}</small></h4>
        <ul>${g.items.map((s) => `<li>${s}</li>`).join("")}</ul></div>`).join("")}</div>`;
    statusPanel.querySelectorAll(".sk-icon").forEach((el) => el.appendChild(spriteCanvas(el.dataset.icon, 2)));
  }

  function tabJourney() {
    statusPanel.innerHTML = `<ol class="journey">${JOURNEY.map((j) => `
      <li class="${j.active ? "active" : ""}">
        <span class="j-when">${j.when}</span>
        <div class="j-body"><b>${j.org}</b>${j.active ? `<em>ACTIVE</em>` : ""}<span class="j-role">${j.role} · ${j.where}</span><p>${j.text}</p></div>
      </li>`).join("")}</ol>`;
  }

  function tabTraining() {
    statusPanel.innerHTML = `<div class="tr-list">${TRAINING.map((t) => `
      <div class="tr-card"><span class="tr-icon" data-icon="${t.icon}"></span>
        <div><span class="j-when">${t.when}</span><b>${t.org}</b><p>${t.what}</p><small>${t.where}</small></div></div>`).join("")}</div>`;
    statusPanel.querySelectorAll(".tr-icon").forEach((el) => el.appendChild(spriteCanvas(el.dataset.icon, 5)));
  }

  const TABS = { status: tabStatus, skills: tabSkills, journey: tabJourney, training: tabTraining };
  statusTabsEl.querySelectorAll(".menu-item").forEach((b) => {
    b.addEventListener("click", () => {
      statusTabsEl.querySelectorAll(".menu-item").forEach((x) => x.setAttribute("aria-selected", String(x === b)));
      TABS[b.dataset.tab]();
      blip(1046, 0.04);
    });
  });
  const statusMenu = bindMenu(statusTabsEl);
  if (document.fonts) document.fonts.ready.then(() => statusMenu.refresh());
  window.addEventListener("resize", () => statusMenu.refresh());
  tabStatus();

  /* =========================================================
     SAVE POINT — contact form (delivered by FormSubmit to kendevxz@gmail.com)
     ========================================================= */
  $("saveCrystal").appendChild(spriteCanvas("crystal", 12));
  const motes = $("motes");
  for (let i = 0; i < 16; i++) {
    const m = document.createElement("i");
    m.style.left = rand(15, 85) + "%";
    m.style.setProperty("--d", rand(2.5, 5).toFixed(1) + "s");
    m.style.setProperty("--delay", (-rand(0, 5)).toFixed(1) + "s");
    motes.appendChild(m);
  }

  const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/kendevxz@gmail.com";
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function wireContact(form) {
    if (!form || form.dataset.wired) return;
    form.dataset.wired = "1";
    const status = form.querySelector(".form-status");
    const button = form.querySelector("button[type=submit]");
    const say = (msg, kind) => { status.textContent = msg; status.dataset.kind = kind || ""; };
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const message = form.elements.message.value.trim();
      if (form.elements._honey.value) return;
      if (!name || !email || !message) return say("Please fill in your name, email and message.", "error");
      if (!EMAIL_RE.test(email)) return say("That email address doesn't look right.", "error");
      button.disabled = true;
      say("Sending...", "busy");
      try {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name, email, message,
            _subject: `New message from ${name} via kennydev.in`,
            _replyto: email,
            _template: "table",
            _captcha: "false",
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && String(data.success) === "true") {
          form.reset();
          say("Message sent. Thanks, I'll get back to you soon.", "ok");
          blip([784, 988, 1175], 0.08, "triangle");
        } else {
          throw new Error(data.message || "The message service didn't accept the message.");
        }
      } catch (err) {
        const mailto = `mailto:kendevxz@gmail.com?subject=${encodeURIComponent("Hello from " + name)}&body=${encodeURIComponent(message + "\n\n" + name + " (" + email + ")")}`;
        status.innerHTML = "";
        status.dataset.kind = "error";
        status.append("Couldn't send right now. ");
        const a = document.createElement("a");
        a.href = mailto;
        a.textContent = "Email me directly instead.";
        status.append(a);
      } finally {
        button.disabled = false;
      }
    });
  }
  wireContact($("contactForm"));

  /* =========================================================
     KEYBOARD — menus, battle, Konami code
     ========================================================= */
  const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let kIdx = 0;
  document.addEventListener("keydown", (e) => {
    if (document.body.classList.contains("casual-mode") || !$("modeGate").hidden) return;
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    kIdx = k === KONAMI[kIdx] ? kIdx + 1 : (k === KONAMI[0] ? 1 : 0);
    if (kIdx === KONAMI.length) {
      kIdx = 0;
      toast("CHEAT ACTIVATED · LIMIT BREAK!");
      blip([523, 659, 784, 1046, 784, 1046], 0.09);
      rain();
      return;
    }

    if (T) {
      if (e.key === "Escape") { e.preventDefault(); leaveTactics(); }
      return;
    }
    if (B) {
      if (e.key === "Escape" && !cmdEl.dataset.sub) { e.preventDefault(); leaveBattle(); return; }
      if (!B.menu) return;
      if (e.key === "ArrowUp") { e.preventDefault(); B.menu.move(-1); }
      else if (e.key === "ArrowDown") { e.preventDefault(); B.menu.move(1); }
      else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); B.menu.pick(); }
      else if (e.key === "Escape" && cmdEl.dataset.sub) { e.preventDefault(); openCommands(B.menuOwner); }
      return;
    }
    if (titleVisible && !e.target.closest("input, textarea")) {
      if (e.key === "ArrowUp") { e.preventDefault(); titleMenu.move(-1); }
      else if (e.key === "ArrowDown") { e.preventDefault(); titleMenu.move(1); }
      else if (e.key === "Enter" && !e.target.closest("button, a")) { e.preventDefault(); titleMenu.pick(); }
    }
  });

  function rain() {
    const layer = $("rain");
    for (let i = 0; i < 60; i++) {
      const c = spriteCanvas(pick(TOYS), Math.round(rand(3, 6)));
      c.style.left = rand(0, 100) + "vw";
      c.style.animationDuration = rand(2, 4.5) + "s";
      c.style.animationDelay = rand(0, 1.5) + "s";
      layer.appendChild(c);
      c.addEventListener("animationend", () => c.remove());
    }
  }

  /* =========================================================
     VIEW MODES — hardcore (intended) or casual (professional)
     ========================================================= */
  const gate = $("modeGate");
  const casualEl = $("casual");
  let casualBuilt = false;
  const CASUAL_TITLES = { "SALES & CUSTOMER SUCCESS": "Sales & Customer Success", "CRM & SALES TOOLS": "CRM & Sales Tools", TECHNICAL: "Technical" };

  function buildCasual() {
    if (casualBuilt) return;
    casualBuilt = true;
    const esc = (t) => t.replace(/&/g, "&amp;");
    casualEl.innerHTML = `
      <header class="c-top"><div class="c-wrap">
        <a class="c-brand" href="#c-home">Kenny Devin Wijaya</a>
        <nav aria-label="Sections"><a href="#c-skills">Skills</a><a href="#c-exp">Experience</a><a href="#c-edu">Education</a><a href="#c-contact">Contact</a></nav>
        <button class="c-switch" id="toHardcore" type="button">Hardcore view</button>
      </div></header>
      <main>
        <section class="c-hero c-wrap" id="c-home">
          <div class="c-avatar"></div>
          <div>
            <p class="c-eyebrow">Product &amp; Sales Specialist · Batam, Indonesia · Remote</p>
            <h1>Kenny Devin Wijaya</h1>
            <p class="c-lead">I work in sales and customer success, backed by a full-stack web toolkit: discovery calls, product demos and pipeline management on one side, Ruby on Rails, Vue.js and PostgreSQL on the other.</p>
            <div class="c-actions">
              <a class="c-btn" href="mailto:kendevxz@gmail.com">Email me</a>
              <a class="c-btn ghost" href="https://github.com/kendevxz" rel="noopener">GitHub</a>
            </div>
          </div>
        </section>
        <div class="c-wrap c-facts">
          <div><b>2016</b><span>Working in sales &amp; tech since</span></div>
          <div><b>${JOURNEY.length}</b><span>Roles held</span></div>
          <div><b>${skillCount}</b><span>Skills</span></div>
          <div><b>Respyre</b><span>Current role</span></div>
        </div>
        <section class="c-section c-wrap" id="c-skills">
          <h2>Skills</h2>
          <div class="c-skills">${SKILL_GROUPS.map((g) => `
            <div class="c-card"><h3>${esc(CASUAL_TITLES[g.title])}</h3>
              <ul class="c-chips">${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("")}
          </div>
        </section>
        <section class="c-section c-wrap" id="c-exp">
          <h2>Experience</h2>
          <ol class="c-timeline">${JOURNEY.map((j) => `
            <li><div class="c-when">${j.when.replace("NOW", "Present")}</div>
              <div><h3>${esc(j.role)}</h3><p class="c-org">${esc(j.org)} · ${j.where}</p><p>${esc(j.text)}</p></div></li>`).join("")}
          </ol>
        </section>
        <section class="c-section c-wrap" id="c-edu">
          <h2>Education</h2>
          <div class="c-edu">${TRAINING.map((t) => `
            <div class="c-card"><span class="c-when">${t.when}</span><h3>${esc(t.org)}</h3><p>${esc(t.what)} · ${t.where}</p></div>`).join("")}
          </div>
        </section>
      </main>
      <footer class="c-footer" id="c-contact"><div class="c-wrap">
        <h2>Let's talk</h2>
        <p>Open to conversations about sales, customer success and product roles.</p>
        <form class="contact-form c-form" novalidate>
          <div class="c-form-row"><label>Name<input name="name" autocomplete="name" required></label><label>Email<input name="email" type="email" autocomplete="email" required></label></div>
          <label>Message<textarea name="message" rows="5" required></textarea></label>
          <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
          <div class="c-form-foot"><button class="c-btn" type="submit">Send message</button><p class="form-status" role="status" aria-live="polite"></p></div>
        </form>
        <div class="c-actions"><a class="c-btn ghost" href="mailto:kendevxz@gmail.com">kendevxz@gmail.com</a><a class="c-btn ghost" href="https://github.com/kendevxz" rel="noopener">github.com/kendevxz</a></div>
        <p class="c-small">© 2026 Kenny Devin Wijaya · <button type="button" class="c-link" id="toHardcore2">Switch to the hardcore view</button></p>
      </div></footer>`;
    wireContact(casualEl.querySelector(".contact-form"));
    const portrait = buildPortrait(3);
    casualEl.querySelector(".c-avatar").appendChild(portrait);
    $("toHardcore").addEventListener("click", () => applyMode("hardcore", true));
    $("toHardcore2").addEventListener("click", () => applyMode("hardcore", true));
  }

  function applyMode(m, announce) {
    store.set("kd-mode", m);
    const casual = m === "casual";
    if (casual) buildCasual();
    document.body.classList.toggle("casual-mode", casual);
    casualEl.hidden = !casual;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "";
    if (!casual) { titleMenu.refresh(); statusMenu.refresh(); sizeStars(); }
    if (announce && !casual) setTimeout(() => toast("A new adventure begins..."), 400);
  }

  $("modeBtn").addEventListener("click", () => applyMode("casual"));
  gate.querySelectorAll("[data-mode]").forEach((b) =>
    b.addEventListener("click", () => {
      gate.hidden = true;
      document.body.classList.remove("locked");
      applyMode(b.dataset.mode, true);
    })
  );

  const savedMode = store.get("kd-mode", null);
  if (savedMode === "hardcore" || savedMode === "casual") applyMode(savedMode);
  else {
    gate.hidden = false;
    document.body.classList.add("locked");
    gate.querySelector("[data-mode]").focus();
  }

})();
