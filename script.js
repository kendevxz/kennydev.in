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
     PLAYER — EXP, level, gil, toasts
     ========================================================= */
  let exp = store.get("kd2-exp", 0);
  let gil = store.get("kd2-gil", 0);
  const levelFor = (x) => Math.min(99, Math.floor(Math.sqrt(x / 80)) + 1);
  const expFor = (lv) => 80 * (lv - 1) ** 2;
  let level = levelFor(exp);

  function bump(el) { el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); }
  function renderPlayer() {
    $("lv").textContent = String(level).padStart(2, "0");
    const lo = expFor(level), hi = expFor(level + 1);
    $("expFill").style.width = level >= 99 ? "100%" : ((exp - lo) / (hi - lo)) * 100 + "%";
    $("gil").textContent = gil.toLocaleString("en-US");
  }
  function addExp(n) {
    exp += n;
    store.set("kd2-exp", exp);
    const nl = levelFor(exp);
    if (nl > level) {
      level = nl;
      bump($("lv"));
      toast(`LEVEL UP! KENNY reached LV ${level}`);
      blip([392, 523, 659, 784, 1046], 0.07);
    }
    renderPlayer();
  }
  function addGil(n) {
    gil += n;
    store.set("kd2-gil", gil);
    bump($("gil"));
    renderPlayer();
  }
  renderPlayer();

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
    if (!cursor.firstChild) cursor.appendChild(spriteCanvas("hand", 2));
    const set = (i) => {
      if (!items.length) return;
      idx = (i + items.length) % items.length;
      items.forEach((b, j) => b.classList.toggle("active", j === idx));
      const b = items[idx];
      cursor.style.top = b.offsetTop + b.offsetHeight / 2 - 8 + "px";
      cursor.style.left = b.offsetLeft - 34 + "px";
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
     MECHS — paint schemes, classes, weapons
     ========================================================= */
  const PAINTS = [
    { name: "TRICOLOR", m1: "#f1f3f9", m2: "#2f5fd6", m3: "#e63946", eye: "#7df9ff", beam: "#ff6bd6" },
    { name: "SUNBURST", m1: "#f0a13a", m2: "#c0612b", m3: "#3a86ff", eye: "#7df9ff", beam: "#ffd23f" },
    { name: "GLACIER", m1: "#a9c1ee", m2: "#5a78b8", m3: "#e63946", eye: "#ffd23f", beam: "#ff6bd6" },
    { name: "AURUM", m1: "#e0c341", m2: "#9c7d22", m3: "#e63946", eye: "#7dff9b", beam: "#9dff6b" },
    { name: "SHADOW", m1: "#4f536f", m2: "#2a2c45", m3: "#ffb703", eye: "#ff3b3b", beam: "#ff3b3b" },
  ];
  const HOSTILE = { name: "HOSTILE", m1: "#8d929e", m2: "#6b2233", m3: "#ff3b3b", eye: "#ff3b3b", beam: "#ff3b3b" };
  const CLASS_INFO = {
    titan: { code: "HV", stats: [8, 3, 6, 2], vehicle: "TANK" },
    striker: { code: "AS", stats: [5, 6, 7, 3], vehicle: "FIGHTER" },
    support: { code: "RP", stats: [3, 8, 2, 9], vehicle: "HOVER" },
  };
  const WEAPONS = [
    { name: "CANNON", s: [1, -1, 3, 0] },
    { name: "BEAM SABER", s: [0, 1, 2, 0] },
    { name: "GATLING", s: [0, 0, 2, 1] },
  ];
  const STAT_NAMES = ["ARMOR", "MOBILITY", "FIREPOWER", "SUPPORT"];

  /* ---------- shaded pixel renderer: lit primitives → tone ramp → outline ---------- */
  const MW = 72, MH = 64;
  const LIGHT = (() => { const v = [-0.55, -0.72, 0.6]; const l = Math.hypot(...v); return v.map((c) => c / l); })();
  const BAYER = [[0, 2], [3, 1]];

  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const ch = [n >> 16, (n >> 8) & 255, n & 255];
    const f = (c) => Math.max(0, Math.min(255, Math.round(amt < 0 ? c * (1 + amt) : c + (255 - c) * amt)));
    return "#" + ch.map((c) => f(c).toString(16).padStart(2, "0")).join("");
  }
  const ramp = (hex) => [shade(hex, -0.72), shade(hex, -0.5), shade(hex, -0.26), hex, shade(hex, 0.32), shade(hex, 0.75)];

  function materials(P) {
    return {
      m1: ramp(P.m1), m2: ramp(P.m2), m3: ramp(P.m3),
      frame: ramp("#6d7390"), dark: ramp("#3b3f57"), gun: ramp("#8b92aa"),
      glass: ramp(P.glass || "#4cc9f0"),
      eye: Array(6).fill(P.eye).map((c, i) => (i === 0 ? shade(P.eye, -0.6) : i >= 4 ? shade(P.eye, 0.7) : c)),
      beam: [shade(P.beam, -0.4), P.beam, P.beam, shade(P.beam, 0.4), shade(P.beam, 0.75), "#ffffff"],
      fire: ["#b3261e", "#ff5a1f", "#ff8c1a", "#ffb020", "#ffe066", "#fff6c2"],
    };
  }

  /* ---------- a layer is a grid of [material, tone] ---------- */
  function layer() { return { px: Array.from({ length: MH }, () => Array(MW).fill(null)), flat: false }; }
  function put(L, x, y, mat, n) {
    if (x < 0 || y < 0 || x >= MW || y >= MH) return;
    if (mat === "eye" || mat === "beam" || mat === "fire") { L.px[y][x] = [mat, n === undefined ? 3 : n]; return; }
    let I = Math.max(0, n[0] * LIGHT[0] + n[1] * LIGHT[1] + n[2] * LIGHT[2]);
    I = I * 0.9 + 0.1 + (BAYER[y & 1][x & 1] - 1.5) * 0.035;
    const spec = n[2] > 0.55 && I > 0.97;
    const t = spec ? 5 : I < 0.26 ? 1 : I < 0.47 ? 2 : I < 0.7 ? 3 : 4;
    L.px[y][x] = [mat, t];
  }
  function ellipse(L, cx, cy, rx, ry, mat) {
    for (let y = Math.floor(cy - ry); y <= Math.ceil(cy + ry); y++) for (let x = Math.floor(cx - rx); x <= Math.ceil(cx + rx); x++) {
      const nx = (x + 0.5 - cx) / rx, ny = (y + 0.5 - cy) / ry, d = nx * nx + ny * ny;
      if (d <= 1) put(L, x, y, mat, [nx, ny, Math.sqrt(1 - d)]);
    }
  }
  function capsule(L, x1, y1, x2, y2, r, mat) {
    const dx = x2 - x1, dy = y2 - y1, len2 = dx * dx + dy * dy || 1;
    for (let y = Math.floor(Math.min(y1, y2) - r); y <= Math.ceil(Math.max(y1, y2) + r); y++)
      for (let x = Math.floor(Math.min(x1, x2) - r); x <= Math.ceil(Math.max(x1, x2) + r); x++) {
        const px = x + 0.5, py = y + 0.5;
        const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / len2));
        const qx = (px - (x1 + t * dx)) / r, qy = (py - (y1 + t * dy)) / r, d = qx * qx + qy * qy;
        if (d <= 1) put(L, x, y, mat, [qx, qy, Math.sqrt(1 - d)]);
      }
  }
  function poly(L, pts, mat, bev = 2.2) {
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    for (let y = Math.floor(Math.min(...ys)); y <= Math.ceil(Math.max(...ys)); y++)
      for (let x = Math.floor(Math.min(...xs)); x <= Math.ceil(Math.max(...xs)); x++) {
        const px = x + 0.5, py = y + 0.5;
        let inside = false, best = Infinity, bn = [0, 0];
        for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
          const [xi, yi] = pts[i], [xj, yj] = pts[j];
          if ((yi > py) !== (yj > py) && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) inside = !inside;
          const ex = xi - xj, ey = yi - yj, el2 = ex * ex + ey * ey || 1;
          const t = Math.max(0, Math.min(1, ((px - xj) * ex + (py - yj) * ey) / el2));
          const d = Math.hypot(px - (xj + t * ex), py - (yj + t * ey));
          if (d < best) { best = d; bn = [px - (xj + t * ex), py - (yj + t * ey)]; }
        }
        if (!inside) continue;
        let n = [0.12, -0.18, 0.97];
        if (best < bev) {
          const k = (1 - best / bev) * 0.85, l = Math.hypot(bn[0], bn[1]) || 1;
          const nx = (-bn[0] / l) * k, ny = (-bn[1] / l) * k;
          n = [nx, ny, Math.sqrt(Math.max(0, 1 - nx * nx - ny * ny))];
        }
        put(L, x, y, mat, n);
      }
  }
  function line(L, x1, y1, x2, y2, mat, tone) {
    const n = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)) || 1;
    for (let i = 0; i <= n; i++) {
      const x = Math.round(x1 + ((x2 - x1) * i) / n), y = Math.round(y1 + ((y2 - y1) * i) / n);
      if (x >= 0 && y >= 0 && x < MW && y < MH) L.px[y][x] = [mat, tone];
    }
  }
  function outlineLayer(L) {
    const add = [];
    for (let y = 0; y < MH; y++) for (let x = 0; x < MW; x++) {
      if (L.px[y][x]) continue;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const c = L.px[y + dy] && L.px[y + dy][x + dx];
        if (c && c[1] !== -1 && c[0] !== "fire" && c[0] !== "beam") { add.push([x, y, c[0]]); break; }
      }
    }
    add.forEach(([x, y, m]) => (L.px[y][x] = [m, 0]));
  }

  /* ---------- weapons (anchor = hand, s = size) ---------- */
  function weapon(kind, ax, ay, s) {
    const L = layer();
    if (kind === 0) { // heavy arm cannon
      capsule(L, ax - 2, ay, ax + 26 * s, ay, 4.2 * s, "gun");
      poly(L, [[ax + 4 * s, ay - 5.5 * s], [ax + 12 * s, ay - 5.5 * s], [ax + 12 * s, ay + 5.5 * s], [ax + 4 * s, ay + 5.5 * s]], "m3", 1.6);
      poly(L, [[ax + 20 * s, ay - 5 * s], [ax + 23 * s, ay - 5 * s], [ax + 23 * s, ay + 5 * s], [ax + 20 * s, ay + 5 * s]], "m2", 1.2);
      ellipse(L, ax + 26.5 * s, ay, 1.6 * s, 3 * s, "dark");
      outlineLayer(L);
    } else if (kind === 1) { // beam saber
      capsule(L, ax - 1, ay + 1, ax + 5 * s, ay - 2 * s, 2.2 * s, "frame");
      const len = 26 * s;
      for (let i = 0; i < len; i++) {
        const x = Math.round(ax + 5 * s + i * 0.8), y = Math.round(ay - 2 * s - i * 0.62);
        for (let w = -2; w <= 2; w++) if (y + w >= 0 && y + w < MH && x < MW) L.px[y + w][x] = ["beam", Math.abs(w) === 2 ? 1 : Math.abs(w) === 1 ? 3 : 5];
      }
      outlineLayer(L);
    } else { // gatling
      for (const o of [-2.6, 0, 2.6]) capsule(L, ax, ay + o * s, ax + 24 * s, ay + o * s, 1.5 * s, "gun");
      ellipse(L, ax + 2 * s, ay, 5 * s, 5.5 * s, "m2");
      poly(L, [[ax + 18 * s, ay - 4.5 * s], [ax + 20 * s, ay - 4.5 * s], [ax + 20 * s, ay + 4.5 * s], [ax + 18 * s, ay + 4.5 * s]], "m3", 1);
      outlineLayer(L);
    }
    return L;
  }

  /* ---------- class bodies (all face right) ---------- */
  function legs(parts, def, dim) {
    const L = layer();
    const o = dim ? def.farLeg : 0;
    def.leg(L, o);
    outlineLayer(L);
    if (dim) L.dim = true;
    parts.push(L);
  }

  const CLASSES = {
    titan: {
      name: "TITAN", role: "HEAVY", s: 1.25, hand: [44, 41], farLeg: 9,
      thrusters: [[8, 41], [16, 41]],
      leg(L, o) {
        capsule(L, 30 + o, 44, 27 + o, 51, 5.5, "frame");
        poly(L, [[18 + o, 49], [36 + o, 49], [38 + o, 59], [16 + o, 59]], "m1");
        ellipse(L, 27 + o, 50, 4.5, 4, "m2");
        poly(L, [[11 + o, 57], [41 + o, 57], [44 + o, 63], [9 + o, 63]], "m2", 1.8);
      },
      pack(L) {
        poly(L, [[8, 14], [26, 12], [28, 38], [6, 40]], "m2");
        capsule(L, 8, 16, 8, 38, 4, "frame");
        capsule(L, 16, 15, 16, 38, 4, "frame");
        // shoulder cannon
        poly(L, [[18, 8], [30, 8], [30, 16], [18, 16]], "dark", 1.4);
        capsule(L, 24, 10, 62, 10, 3, "gun");
        poly(L, [[46, 6.5], [50, 6.5], [50, 13.5], [46, 13.5]], "m3", 1);
        ellipse(L, 62.5, 10, 1.2, 2.2, "dark");
      },
      body(L) {
        poly(L, [[18, 34], [46, 34], [48, 47], [16, 47]], "m2");
        ellipse(L, 32, 27, 18, 15, "m1");
        ellipse(L, 45, 27, 5, 4, "glass");
        line(L, 20, 34, 42, 34, "m1", 1);
        poly(L, [[22, 38], [30, 38], [30, 44], [22, 44]], "m3", 1.2);
      },
      head(L) {
        ellipse(L, 42, 15, 8, 6, "m1");
        poly(L, [[43, 13], [50, 13], [50, 16], [43, 16]], "dark", 1);
        line(L, 45, 14, 49, 14, "eye", 4); line(L, 45, 15, 49, 15, "eye", 3);
        line(L, 38, 9, 35, 3, "frame", 2);
      },
      shoulder(L) {
        ellipse(L, 28, 24, 11, 10, "m2");
        poly(L, [[18, 22], [38, 22], [38, 25], [18, 25]], "m3", 1);
        capsule(L, 30, 30, 40, 40, 4.5, "frame");
      },
    },
    striker: {
      name: "STRIKER", role: "ASSAULT", s: 1, hand: [42, 38], farLeg: 7,
      thrusters: [[11, 36], [17, 36]],
      leg(L, o) {
        capsule(L, 31 + o, 42, 27 + o, 49, 4, "frame");
        poly(L, [[22 + o, 47], [33 + o, 47], [37 + o, 58], [25 + o, 58]], "m1");
        ellipse(L, 28 + o, 48, 3.5, 3.5, "m2");
        poly(L, [[18 + o, 56], [41 + o, 56], [43 + o, 62], [16 + o, 62]], "m2", 1.6);
      },
      pack(L) {
        poly(L, [[12, 14], [24, 13], [25, 32], [11, 33]], "m2");
        capsule(L, 11, 15, 11, 32, 3.2, "frame");
        capsule(L, 17, 14, 17, 32, 3.2, "frame");
        capsule(L, 20, 12, 36, 7, 2.2, "gun");
        poly(L, [[18, 9], [24, 9], [24, 15], [18, 15]], "m3", 1.2);
      },
      body(L) {
        poly(L, [[23, 34], [40, 34], [41, 43], [22, 43]], "frame");
        ellipse(L, 32, 27, 13, 11, "m1");
        line(L, 23, 31, 40, 31, "m1", 1);
        poly(L, [[28, 34], [34, 34], [34, 41], [28, 41]], "m3", 1);
      },
      head(L) {
        ellipse(L, 37, 15, 8.5, 7.5, "m1");
        poly(L, [[39, 13], [46, 13], [46, 17], [39, 17]], "dark", 1);
        line(L, 41, 14, 45, 14, "eye", 4); line(L, 41, 15, 45, 16, "eye", 3);
        poly(L, [[30, 5], [34, 9], [31, 10]], "m3", 0.8);
      },
      shoulder(L) {
        ellipse(L, 28, 24, 8.5, 7.5, "m2");
        poly(L, [[20, 23], [36, 23], [36, 25], [20, 25]], "m3", 1);
        capsule(L, 29, 28, 34, 36, 3.2, "frame");
        capsule(L, 34, 37, 41, 38, 4, "m1");
      },
    },
    support: {
      name: "SUPPORT", role: "REPAIR", s: 0.78, hand: [42, 34], farLeg: 6,
      thrusters: [[24, 33]],
      leg(L, o) {
        capsule(L, 33 + o, 35, 30 + o, 46, 2.6, "frame");
        capsule(L, 30 + o, 46, 34 + o, 57, 3.2, "m1");
        ellipse(L, 30 + o, 46, 3, 3, "m2");
        poly(L, [[26 + o, 57], [42 + o, 57], [43 + o, 62], [25 + o, 62]], "m2", 1.4);
      },
      pack(L) {
        poly(L, [[21, 17], [28, 16], [29, 31], [20, 32]], "m2");
        capsule(L, 24, 18, 24, 31, 2.6, "frame");
        line(L, 30, 12, 24, 2, "frame", 2); line(L, 31, 12, 25, 2, "frame", 3);
        ellipse(L, 22, 3, 5, 2.2, "m3");
      },
      body(L) {
        ellipse(L, 34, 25, 9, 9.5, "m1");
        poly(L, [[29, 31], [39, 31], [38, 36], [30, 36]], "frame", 1.2);
        ellipse(L, 38, 24, 3, 3, "glass");
      },
      head(L) {
        ellipse(L, 38, 14, 6, 5, "m1");
        poly(L, [[39, 12], [45, 12], [45, 15], [39, 15]], "dark", 1);
        line(L, 41, 13, 44, 13, "eye", 4);
      },
      shoulder(L) {
        ellipse(L, 31, 22, 5.5, 5, "m2");
        line(L, 27, 22, 35, 22, "m3", 3);
        capsule(L, 32, 25, 35, 33, 2.2, "frame");
        capsule(L, 35, 34, 41, 34, 2.6, "m1");
      },
    },
  };
  const CLASS_KEYS = ["titan", "striker", "support"];

  function mechParts(cls, weaponKind) {
    const def = CLASSES[cls];
    const parts = [];
    legs(parts, def, true);
    const pack = layer(); def.pack(pack); outlineLayer(pack); parts.push(pack);
    const body = layer(); def.body(body); outlineLayer(body); parts.push(body);
    const head = layer(); def.head(head); outlineLayer(head); parts.push(head);
    legs(parts, def, false);
    const sh = layer(); def.shoulder(sh); outlineLayer(sh); parts.push(sh);
    parts.push(weapon(weaponKind, def.hand[0], def.hand[1], def.s));
    const fl = layer();
    def.thrusters.forEach(([x, y]) => {
      for (let i = 0; i < 7; i++) for (let w = -2; w <= 2; w++) {
        if (Math.abs(w) > 2 - i / 4) continue;
        const t = i < 2 ? 5 : i < 4 ? 4 : i < 6 ? 2 : 1;
        if (y + i < MH) fl.px[y + i][x + w] = ["fire", t];
      }
    });
    fl.flame = true;
    parts.push(fl);
    return parts;
  }

  function vehicleParts(cls) {
    const P = [];
    const mk = (fn) => { const L = layer(); fn(L); outlineLayer(L); P.push(L); return L; };
    let fl = layer();
    if (cls === "titan") { // tank
      mk((L) => { capsule(L, 10, 54, 60, 54, 7, "dark"); for (let x = 12; x <= 58; x += 9) ellipse(L, x, 54, 3.4, 3.4, "frame"); });
      mk((L) => { poly(L, [[8, 38], [58, 38], [66, 48], [4, 48]], "m1"); poly(L, [[12, 44], [56, 44], [56, 46], [12, 46]], "m3", 1); });
      mk((L) => { ellipse(L, 32, 34, 14, 8, "m2"); ellipse(L, 38, 32, 3, 2, "glass"); });
      mk((L) => { capsule(L, 40, 32, 70, 31, 2.6, "gun"); poly(L, [[58, 28], [62, 28], [62, 35], [58, 35]], "m3", 1); });
      mk((L) => { capsule(L, 20, 30, 30, 24, 1.6, "gun"); });
      for (let i = 0; i < 4; i++) for (let w = -1; w <= 1; w++) fl.px[42 + w][3 - i] = ["fire", 4 - i];
    } else if (cls === "striker") { // jet
      mk((L) => { poly(L, [[8, 30], [18, 30], [12, 14], [5, 14]], "m2"); });
      mk((L) => { capsule(L, 5, 34, 12, 34, 5, "frame"); });
      mk((L) => { poly(L, [[22, 36], [46, 36], [34, 54], [14, 54]], "m2"); poly(L, [[14, 52], [22, 52], [22, 54], [14, 54]], "m3", 1); });
      mk((L) => { capsule(L, 9, 34, 58, 34, 6.2, "m1"); line(L, 14, 36, 56, 36, "m3", 3); });
      mk((L) => { poly(L, [[56, 29], [71, 34], [56, 39]], "m2", 1.8); });
      mk((L) => { ellipse(L, 46, 29.5, 8, 3.4, "glass"); });
      for (let i = 0; i < 6; i++) for (let w = -2; w <= 2; w++) if (Math.abs(w) <= 2 - i / 3) fl.px[34 + w][0 + (5 - i)] = ["fire", i < 2 ? 1 : i < 4 ? 3 : 5];
    } else { // hover bike
      mk((L) => { ellipse(L, 20, 50, 9, 3, "frame"); ellipse(L, 52, 50, 9, 3, "frame"); });
      mk((L) => { capsule(L, 14, 41, 54, 41, 6, "m1"); line(L, 18, 43, 50, 43, "m3", 3); });
      mk((L) => { ellipse(L, 57, 38, 9, 6.5, "m2"); ellipse(L, 60, 37, 3, 2, "glass"); });
      mk((L) => { ellipse(L, 34, 33, 8, 4.5, "glass"); line(L, 26, 34, 20, 22, "frame", 2); ellipse(L, 19, 21, 4, 1.8, "m3"); });
      for (const cx of [20, 52]) for (let w = -6; w <= 6; w++) { fl.px[54][cx + w] = ["beam", 4]; if (Math.abs(w) < 4) fl.px[55][cx + w] = ["beam", 2]; }
    }
    fl.flame = true;
    P.push(fl);
    return P;
  }

  function paintLayerCanvas(L, mats, scale) {
    const c = document.createElement("canvas");
    c.width = MW * scale; c.height = MH * scale;
    const ctx = c.getContext("2d");
    let minX = MW, minY = MH, maxX = 0, maxY = 0;
    for (let y = 0; y < MH; y++) for (let x = 0; x < MW; x++) {
      const p = L.px[y][x];
      if (!p) continue;
      let t = p[1];
      if (L.dim && t > 0) t = Math.max(1, t - 1);
      ctx.fillStyle = mats[p[0]][t];
      ctx.fillRect(x * scale, y * scale, scale, scale);
      minX = Math.min(minX, x); minY = Math.min(minY, y); maxX = Math.max(maxX, x); maxY = Math.max(maxY, y);
    }
    c.className = "part" + (L.flame ? " flame" : "");
    c.style.transformOrigin = `${((minX + maxX + 1) / 2 / MW) * 100}% ${((minY + maxY + 1) / 2 / MH) * 100}%`;
    return c;
  }

  function buildUnit(kind, cls, weaponKind, P, scale = 4) {
    const wrap = document.createElement("div");
    wrap.className = "punit " + (kind === "vehicle" ? "pveh" : "pmech");
    const mats = materials(P);
    (kind === "vehicle" ? vehicleParts(cls) : mechParts(cls, weaponKind)).forEach((L) => wrap.appendChild(paintLayerCanvas(L, mats, scale)));
    return wrap;
  }

  const saved = store.get("kd3-mech", {}) || {};
  const cfg = {
    cls: CLASS_KEYS.includes(saved.cls) ? saved.cls : "striker",
    paint: PAINTS[saved.paint] ? saved.paint : 0,
    weapon: WEAPONS[saved.weapon] ? saved.weapon : 0,
  };

  function unitName(c = cfg) {
    const num = String(CLASS_KEYS.indexOf(c.cls) * 3 + c.weapon + 1).padStart(2, "0");
    return `${CLASS_INFO[c.cls].code}-${num} ${CLASSES[c.cls].name}`;
  }
  const mechEl = (c = cfg, scale = 4) => buildUnit("mech", c.cls, c.weapon, PAINTS[c.paint], scale);
  const vehEl = (c = cfg, scale = 4) => buildUnit("vehicle", c.cls, c.weapon, PAINTS[c.paint], scale);

  // one flattened canvas per unit look, for small uses (quest cards, tactics board)
  const unitCache = new Map();
  function unitImage(cls, weaponKind, P) {
    const k = cls + weaponKind + P.name;
    if (unitCache.has(k)) return unitCache.get(k);
    const out = document.createElement("canvas");
    out.width = MW; out.height = MH;
    const ctx = out.getContext("2d");
    const mats = materials(P);
    mechParts(cls, weaponKind).filter((L) => !L.flame).forEach((L) => ctx.drawImage(paintLayerCanvas(L, mats, 1), 0, 0));
    unitCache.set(k, out);
    return out;
  }
  function copyCanvas(src) {
    const c = document.createElement("canvas");
    c.width = src.width; c.height = src.height;
    c.getContext("2d").drawImage(src, 0, 0);
    return c;
  }

  /* =========================================================
     CHAPTER I — HANGAR
     ========================================================= */
  const bay = $("bay");
  const bayUnit = $("bayUnit");
  const heroMech = $("heroMech");
  let vehicleMode = false;
  let hangarBusy = false;

  function buildOptions() {
    const groups = {
      cls: CLASS_KEYS.map((k) => ({ value: k, name: CLASSES[k].name, sub: CLASSES[k].role })),
      paint: PAINTS.map((p, i) => ({ ...p, value: i })),
      weapon: WEAPONS.map((w, i) => ({ ...w, value: i })),
    };
    document.querySelectorAll(".opt-row").forEach((row) => {
      const key = row.dataset.opt;
      row.innerHTML = "";
      groups[key].forEach((opt) => {
        const b = document.createElement("button");
        b.setAttribute("aria-pressed", String(cfg[key] === opt.value));
        if (key === "paint") {
          b.className = "swatch";
          b.title = opt.name;
          b.setAttribute("aria-label", "Paint: " + opt.name);
          b.style.setProperty("--a", opt.m1);
          b.style.setProperty("--b", opt.m2);
          b.style.setProperty("--c", opt.m3);
        } else {
          b.className = "opt-btn" + (opt.sub ? " opt-class" : "");
          b.innerHTML = opt.sub ? `${opt.name}<small>${opt.sub}</small>` : opt.name;
        }
        b.addEventListener("click", () => {
          if (hangarBusy || cfg[key] === opt.value) return;
          cfg[key] = opt.value;
          row.querySelectorAll("button").forEach((x, j) => x.setAttribute("aria-pressed", String(groups[key][j].value === opt.value)));
          blip([660, 990], 0.04);
          renderUnit(true);
          once("hangar-custom", () => addExp(40));
        });
        row.appendChild(b);
      });
    });
  }

  function renderStats() {
    const base = CLASS_INFO[cfg.cls].stats, w = WEAPONS[cfg.weapon].s;
    $("stats").innerHTML = STAT_NAMES.map((n, i) => {
      const v = Math.max(0, Math.min(10, base[i] + w[i]));
      return `<div class="stat"><span>${n}</span><span class="stat-bar">${Array.from({ length: 10 }, (_, k) => `<i class="${k < v ? "on" : ""}"></i>`).join("")}</span><b>${v}</b></div>`;
    }).join("");
  }

  const modeName = () => (vehicleMode ? CLASS_INFO[cfg.cls].vehicle + " MODE" : CLASSES[cfg.cls].role + " MECH");
  function renderUnit(animate) {
    bayUnit.replaceChildren(mechEl(), vehEl());
    heroMech.replaceChildren(mechEl(cfg, 5));
    $("unitName").textContent = unitName();
    $("unitMode").textContent = modeName();
    renderStats();
    store.set("kd3-mech", cfg);
    if (animate) assemble(bayUnit.querySelector(vehicleMode ? ".pveh" : ".pmech"));
  }

  const scatterPose = () =>
    `translate(${rand(-140, 140)}px, ${rand(-110, 110)}px) rotate(${rand(-300, 300)}deg) scale(.2)`;
  function scatterOut(el) {
    [...el.querySelectorAll(".part")].forEach((p, i) => {
      p.style.transition = `transform .45s ${i * 30}ms ease-in, opacity .45s ${i * 30}ms`;
      p.style.transform = scatterPose();
      p.style.opacity = "0";
    });
  }
  function assemble(el) {
    const parts = [...el.querySelectorAll(".part")];
    parts.forEach((p) => {
      p.style.transition = "none";
      p.style.transform = scatterPose();
      p.style.opacity = "0";
    });
    el.getBoundingClientRect();
    requestAnimationFrame(() => {
      parts.forEach((p, i) => {
        p.style.transition = `transform .55s ${i * 40}ms cubic-bezier(.3,1.4,.5,1), opacity .3s ${i * 40}ms`;
        p.style.transform = "";
        p.style.opacity = "";
      });
    });
  }

  $("btnTransform").addEventListener("click", async () => {
    if (hangarBusy) return;
    hangarBusy = true;
    const from = bayUnit.querySelector(vehicleMode ? ".pveh" : ".pmech");
    scatterOut(from);
    blip([220, 330, 220, 440, 330, 660], 0.06, "sawtooth");
    await wait(650);
    vehicleMode = !vehicleMode;
    bay.classList.toggle("veh-mode", vehicleMode);
    $("unitMode").textContent = modeName();
    from.querySelectorAll(".part").forEach((p) => { p.style.transition = "none"; p.style.transform = ""; p.style.opacity = ""; });
    assemble(bayUnit.querySelector(vehicleMode ? ".pveh" : ".pmech"));
    await wait(900);
    hangarBusy = false;
    once("transform", () => { addExp(60); toast("ACHIEVEMENT: MORE THAN MEETS THE EYE"); });
  });

  $("btnSortie").addEventListener("click", async () => {
    if (hangarBusy) return;
    hangarBusy = true;
    const fxEl = $("launchFx");
    $("launchText").innerHTML = `${unitName()}<br>SORTIE!`;
    fxEl.classList.remove("show");
    void fxEl.offsetWidth;
    fxEl.classList.add("show");
    bay.classList.add("launching");
    blip([110, 130, 150, 180, 220, 280, 360, 460], 0.07, "sawtooth");
    await wait(1700);
    bay.classList.remove("launching");
    bay.classList.add("landing");
    blip([200, 120], 0.12, "triangle");
    await wait(750);
    bay.classList.remove("landing");
    hangarBusy = false;
    once("sortie", () => addExp(100));
  });

  buildOptions();
  renderUnit(false);

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

  const UNIT_BASE_WEAPON = { titan: 0, striker: 2, support: 1 };
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
        `<div class="reward">REWARD ${q.gil}G · ${q.exp} EXP</div>` +
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
      fx("spell", PAINTS[cfg.paint].beam);
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
      `<p>EXP ........ +${q.exp}</p><p>GIL ........ +${q.gil}</p>` +
      `<p>CARVED ..... ${q.loot} ×${carved}</p>` +
      `<div class="row"><button class="btn" id="resOk">CONTINUE</button></div>`,
      () => {
        $("resOk").addEventListener("click", () => {
          $("result").hidden = true;
          addExp(q.exp);
          addGil(q.gil);
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
    titan: { hp: 34, atk: 13, def: 6, mov: 3, rng: [1, 1], weapon: 0 },
    striker: { hp: 26, atk: 12, def: 4, mov: 4, rng: [1, 2], weapon: 2 },
    support: { hp: 21, atk: 7, def: 3, mov: 5, rng: [1, 1], heal: 10, weapon: 1 },
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
      img: unitImage(cls, mine ? cfg.weapon : b.weapon, side === "P" ? PAINTS[cfg.paint] : HOSTILE),
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
      `<h3>MISSION COMPLETE</h3><p>TURNS ...... ${T.turn}</p><p>EXP ........ +${q.exp}</p><p>GIL ........ +${q.gil}</p>` +
      `<p>SALVAGED ... Mech Parts ×${parts}</p><div class="row"><button class="btn" id="tOk">CONTINUE</button></div>`,
      () => $("tOk").addEventListener("click", () => {
        $("tResult").hidden = true;
        addExp(q.exp);
        addGil(q.gil);
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
  const FILES = [
    { name: "MECHA", sub: "Gundam · Transformers · every giant robot", sprite: "minimech", lv: "LV 99", time: "999:59",
      loc: "Hangar Bay 03", tags: ["Transforming", "Launch sequences", "Beam sabers"],
      line: "Giant robots, transforming or not. Bonus points for a dramatic launch sequence." },
    { name: "FINAL FANTASY", sub: "Crystals, summons, airships", sprite: "crystal", lv: "LV 99", time: "812:40",
      loc: "The Crystal Tower", tags: ["Summons", "ATB", "Airships"],
      line: "Summons, crystals, and a save file with way too many hours on it." },
    { name: "MONSTER HUNTER", sub: "Hunt, carve, craft, repeat", sprite: "meat", lv: "HR 999", time: "1204:33",
      loc: "Base Camp", tags: ["Great swords", "Carving", "Armor sets"],
      line: "Hunt it, carve it, craft better armor, then go hunt something bigger." },
    { name: "FIRE EMBLEM", sub: "Tactics and the weapon triangle", sprite: "sword", lv: "LV 20", time: "356:12",
      loc: "Chapter 24 · Classic mode", tags: ["Tactics", "Weapon triangle", "Permadeath"],
      line: "Sword beats axe, axe beats lance, lance beats sword. Permadeath beats me." },
    { name: "PERSONA", sub: "Calendars, confidants, all-out attacks", sprite: "mask", lv: "LV 99", time: "DAY 187",
      loc: "After school · Rainy day", tags: ["Calendar", "Social links", "All-out attacks"],
      line: "Dungeons at night, school during the day. Every day on the calendar counts." },
    { name: "JRPG & RPG", sub: "Parties, grinding, epic soundtracks", sprite: "potion", lv: "LV 99", time: "∞",
      loc: "The last save point", tags: ["Turn-based", "Action", "Grinding"],
      line: "Turn-based, action, tactics, all of it. Grinding XP at 3 AM." },
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
    statusPanel.querySelector(".st-portrait").appendChild(spriteCanvas("pilot", 7));
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

  let fileTimer;
  function tabFiles() {
    statusPanel.innerHTML = `<div class="files-grid"><div class="file-list" role="listbox" aria-label="Save files"></div><div class="file-detail" aria-live="polite"></div></div>`;
    const list = statusPanel.querySelector(".file-list");
    FILES.forEach((f, i) => {
      const b = document.createElement("button");
      b.className = "slot";
      b.setAttribute("role", "option");
      b.innerHTML =
        `<span class="slot-icon"></span><span class="slot-title">${f.name}<small>${f.sub}</small></span>` +
        `<span class="slot-meta">${f.lv}<span>${f.time}</span></span>`;
      b.querySelector(".slot-icon").appendChild(spriteCanvas(f.sprite, 3));
      b.addEventListener("click", () => showFile(i));
      list.appendChild(b);
    });
    showFile(0, true);
  }
  function showFile(i, instant) {
    const f = FILES[i];
    const detail = statusPanel.querySelector(".file-detail");
    if (!detail) return;
    statusPanel.querySelectorAll(".slot").forEach((b, j) => b.setAttribute("aria-selected", String(j === i)));
    const render = () => {
      if (!detail.isConnected) return;
      detail.innerHTML =
        `<div class="art"></div><h3>${f.name}</h3><div class="loc">LOCATION · ${f.loc}<br>PLAYTIME · ${f.time}</div>` +
        `<p>${f.line}</p><div class="tags">${f.tags.map((t) => `<span>${t}</span>`).join("")}</div>`;
      detail.querySelector(".art").appendChild(spriteCanvas(f.sprite, 8));
    };
    clearTimeout(fileTimer);
    if (instant) return render();
    detail.innerHTML = `<p class="loading">LOADING FILE ${i + 1}...</p>`;
    blip([660, 880, 990], 0.05);
    fileTimer = setTimeout(render, 380);
    once("file-" + i, () => addExp(25));
  }

  const TABS = { status: tabStatus, skills: tabSkills, journey: tabJourney, training: tabTraining, files: tabFiles };
  statusTabsEl.querySelectorAll(".menu-item").forEach((b) => {
    b.addEventListener("click", () => {
      statusTabsEl.querySelectorAll(".menu-item").forEach((x) => x.setAttribute("aria-selected", String(x === b)));
      TABS[b.dataset.tab]();
      blip(1046, 0.04);
      once("tab-" + b.dataset.tab, () => addExp(15));
    });
  });
  const statusMenu = bindMenu(statusTabsEl);
  if (document.fonts) document.fonts.ready.then(() => statusMenu.refresh());
  window.addEventListener("resize", () => statusMenu.refresh());
  tabStatus();

  /* =========================================================
     CHAPTER IV — TOY CHEST PHYSICS
     ========================================================= */
  const box = $("toybox");
  const toys = [];
  let floatMode = false;
  let boxVisible = false;
  let bw = box.clientWidth, bh = box.clientHeight;
  new ResizeObserver(() => { bw = box.clientWidth; bh = box.clientHeight; }).observe(box);

  function addToy(name = pick(TOYS), x, y) {
    const scale = Math.round(rand(4, 6));
    const el = spriteCanvas(name, scale);
    el.className = "toy";
    el.title = TOY_NAMES[name];
    box.appendChild(el);
    const t = {
      el, name, w: el.width, h: el.height,
      x: x ?? rand(20, Math.max(40, bw - el.width - 20)),
      y: y ?? rand(0, Math.max(10, bh * 0.5)),
      vx: rand(-3, 3), vy: 0, rot: rand(-20, 20), vr: rand(-4, 4), drag: null,
    };
    t.r = Math.max(t.w, t.h) / 2;
    toys.push(t);
    el.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      el.setPointerCapture(e.pointerId);
      el.classList.add("dragging");
      const r = box.getBoundingClientRect();
      t.drag = { ox: e.clientX - r.left - t.x, oy: e.clientY - r.top - t.y, lx: e.clientX, ly: e.clientY, lt: performance.now() };
      t.vx = t.vy = 0;
      blip(440, 0.04);
    });
    el.addEventListener("pointermove", (e) => {
      if (!t.drag) return;
      const r = box.getBoundingClientRect();
      const now = performance.now();
      const dt = Math.max(1, now - t.drag.lt) / 16;
      t.vx = (e.clientX - t.drag.lx) / dt;
      t.vy = (e.clientY - t.drag.ly) / dt;
      t.drag.lx = e.clientX; t.drag.ly = e.clientY; t.drag.lt = now;
      t.x = e.clientX - r.left - t.drag.ox;
      t.y = e.clientY - r.top - t.drag.oy;
    });
    const release = () => {
      if (!t.drag) return;
      t.drag = null;
      el.classList.remove("dragging");
      t.vr = t.vx * 1.5;
      if (Math.hypot(t.vx, t.vy) > 18) { addExp(2); blip([660, 880], 0.04); }
    };
    el.addEventListener("pointerup", release);
    el.addEventListener("pointercancel", release);
    return t;
  }
  TOYS.slice(0, 12).forEach((n) => addToy(n));

  function stepToys() {
    const grav = floatMode ? 0 : 0.55;
    for (const t of toys) {
      if (t.drag) continue;
      t.vy += grav;
      t.vx *= 0.995;
      if (floatMode) t.vy *= 0.995;
      t.x += t.vx; t.y += t.vy; t.rot += t.vr;
      t.vr *= 0.97;
      const floor = bh - 10 - t.h;
      if (t.y > floor) {
        t.y = floor;
        if (Math.abs(t.vy) > 3) blip(120 + Math.random() * 60, 0.03, "triangle");
        t.vy *= -0.45; t.vx *= 0.85; t.vr = t.vx * 1.5;
        if (Math.abs(t.vy) < 1) t.vy = 0;
      }
      if (floatMode && t.y < 0) { t.y = 0; t.vy *= -0.8; }
      if (t.x < 0) { t.x = 0; t.vx *= -0.6; }
      if (t.x > bw - t.w) { t.x = bw - t.w; t.vx *= -0.6; }
    }
    for (let i = 0; i < toys.length; i++) {
      for (let j = i + 1; j < toys.length; j++) {
        const a = toys[i], b = toys[j];
        const dx = b.x + b.w / 2 - (a.x + a.w / 2), dy = b.y + b.h / 2 - (a.y + a.h / 2);
        const dist = Math.hypot(dx, dy) || 0.01;
        const min = (a.r + b.r) * 0.8;
        if (dist < min) {
          const push = (min - dist) / 2, nx = dx / dist, ny = dy / dist;
          if (!a.drag) { a.x -= nx * push; a.y -= ny * push; }
          if (!b.drag) { b.x += nx * push; b.y += ny * push; }
          const rel = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
          if (rel < 0) {
            const imp = -rel * 0.6;
            if (!a.drag) { a.vx -= nx * imp; a.vy -= ny * imp; }
            if (!b.drag) { b.vx += nx * imp; b.vy += ny * imp; }
          }
        }
      }
    }
    for (const t of toys) t.el.style.transform = `translate(${t.x}px, ${t.y}px) rotate(${t.rot}deg)`;
  }
  (function toyLoop() {
    if (boxVisible) stepToys();
    requestAnimationFrame(toyLoop);
  })();
  new IntersectionObserver(([e]) => { boxVisible = e.isIntersecting; }, { threshold: 0.05 }).observe(box);

  $("btnOpen").addEventListener("click", () => {
    if (toys.length >= 40) { toast("The chest is full!"); return; }
    const t = addToy(undefined, bw / 2 - 20, bh - 80);
    t.vy = -rand(14, 18);
    t.vx = rand(-6, 6);
    toast(`Obtained ${TOY_NAMES[t.name]}!`);
    blip([523, 659, 784, 1046], 0.06);
    addExp(5);
  });
  $("btnShake").addEventListener("click", () => {
    toys.forEach((t) => { t.vx += rand(-14, 14); t.vy -= rand(8, 18); t.vr += rand(-20, 20); });
    box.animate([{ transform: "translateX(0)" }, { transform: "translateX(-10px)" }, { transform: "translateX(10px)" }, { transform: "translateX(0)" }], { duration: 250, iterations: 2 });
    blip([150, 110, 150], 0.05, "sawtooth");
  });
  const gBtn = $("btnGravity");
  gBtn.addEventListener("click", () => {
    floatMode = !floatMode;
    gBtn.setAttribute("aria-pressed", String(floatMode));
    if (floatMode) toys.forEach((t) => { t.vy -= rand(2, 6); t.vx += rand(-2, 2); t.vr += rand(-3, 3); });
    blip(floatMode ? [300, 500, 800] : [800, 500, 300], 0.06, "sine");
  });
  $("btnClear").addEventListener("click", () => {
    toys.splice(0).forEach((t) => t.el.remove());
    blip([400, 300, 200, 100], 0.05);
    setTimeout(() => { for (let i = 0; i < 6; i++) addToy(); }, 600);
  });

  /* =========================================================
     SAVE POINT
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
  const saveText = $("saveText");
  bindMenu($("saveActions"));
  let saving = false;
  $("saveYes").addEventListener("click", async () => {
    if (saving) return;
    saving = true;
    saveText.textContent = "Saving";
    for (let i = 0; i < 3; i++) { await wait(350); saveText.textContent += " ▮"; blip(880, 0.04); }
    await wait(300);
    store.set("kd2-exp", exp);
    store.set("kd2-gil", gil);
    saveText.textContent = `Saved. KENNY · LV ${level} · ${gil.toLocaleString("en-US")} G. See you on the next adventure.`;
    blip([784, 988, 1175], 0.08, "triangle");
    once("saved", () => addExp(30));
    saving = false;
  });
  $("saveNo").addEventListener("click", () => {
    if (saving) return;
    saveText.textContent = "Bold. Or reckless. (It autosaves anyway.)";
    blip([330, 262], 0.08, "triangle");
  });

  /* =========================================================
     KEYBOARD — menus, battle, Konami code
     ========================================================= */
  const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let kIdx = 0;
  document.addEventListener("keydown", (e) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    kIdx = k === KONAMI[kIdx] ? kIdx + 1 : (k === KONAMI[0] ? 1 : 0);
    if (kIdx === KONAMI.length) {
      kIdx = 0;
      addExp(9999);
      addGil(9999);
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

  once("hello", () => setTimeout(() => toast("A new adventure begins..."), 900));
})();
