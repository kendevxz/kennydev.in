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
     MECH — SVG built from parts
     ========================================================= */
  const PAINTS = [
    { name: "TRICOLOR", m1: "#f1f3f9", m2: "#2f5fd6", m3: "#e63946", m4: "#ffd23f", eye: "#7df9ff", beam: "#ff6bd6" },
    { name: "CRIMSON COMET", m1: "#e5383b", m2: "#8d0f1f", m3: "#2b2d42", m4: "#ffd23f", eye: "#ff8fd8", beam: "#ffd23f" },
    { name: "SHADOW", m1: "#3a3d56", m2: "#16172b", m3: "#ffb703", m4: "#ffd23f", eye: "#ff3b3b", beam: "#ff3b3b" },
    { name: "FIELD GREEN", m1: "#6a8d3a", m2: "#3a5a26", m3: "#c7d59f", m4: "#ecf39e", eye: "#ff5c8a", beam: "#9dff6b" },
    { name: "PRISM", m1: "#ffffff", m2: "#9b5de5", m3: "#3ee6ff", m4: "#f15bb5", eye: "#fee440", beam: "#3ee6ff" },
  ];
  const HEADS = [
    { name: "VANGUARD", code: "RX", s: [2, 3, 1, 4] },
    { name: "SENTINEL", code: "MS", s: [3, 2, 2, 2] },
    { name: "TITAN", code: "GX", s: [4, 1, 2, 3] },
  ];
  const WEAPONS = [
    { name: "BEAM SABER", s: [1, 2, 3, 3] },
    { name: "RIFLE", s: [1, 1, 5, 1] },
    { name: "CANNON", s: [2, 0, 6, 2] },
  ];
  const PACKS = [
    { name: "WINGS", s: [1, 4, 1, 3] },
    { name: "BOOSTERS", s: [3, 3, 2, 1] },
  ];
  const STAT_NAMES = ["ARMOR", "MOBILITY", "FIREPOWER", "STYLE"];

  const saved = store.get("kd2-mech", {}) || {};
  const cfg = {
    head: HEADS[saved.head] ? saved.head : 0,
    paint: PAINTS[saved.paint] ? saved.paint : 0,
    weapon: WEAPONS[saved.weapon] ? saved.weapon : 0,
    pack: PACKS[saved.pack] ? saved.pack : 0,
  };

  function unitName(c = cfg) {
    const h = HEADS[c.head];
    const num = String(c.head * 6 + c.weapon * 2 + c.pack + 1).padStart(2, "0");
    return `${h.code}-${num} ${h.name}`;
  }

  /* ---------- pixel mech: half-grids mirrored, plus parts drawn in code ---------- */
  const PM_W = 48, PM_H = 60;
  const PJ_W = 54, PJ_H = 28;

  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    const f = (c) => Math.round(amt < 0 ? c * (1 + amt) : c + (255 - c) * amt);
    return "#" + [f(r), f(g), f(b)].map((c) => c.toString(16).padStart(2, "0")).join("");
  }
  function mechColors(P) {
    return {
      k: "#0b0d1c",
      "1": P.m1, "!": shade(P.m1, -0.3), w: shade(P.m1, 0.65),
      "2": P.m2, "@": shade(P.m2, -0.32),
      "3": P.m3, "#": shade(P.m3, -0.32),
      "4": P.m4, "$": shade(P.m4, -0.3),
      f: "#353a55", F: "#5b6388",
      e: P.eye, E: shade(P.eye, 0.75),
      b: P.beam, B: shade(P.beam, 0.8),
      y: "#fff3a0", o: "#ffb020", r: "#ff5a1f",
    };
  }

  const grid = (w, h) => Array.from({ length: h }, () => Array(w).fill("."));
  function half(y0, rows) {
    const gd = grid(PM_W, PM_H);
    rows.forEach((row, i) => {
      const r = row.padEnd(24, ".").slice(0, 24);
      for (let x = 0; x < 24; x++) {
        const ch = r[x];
        if (ch === ".") continue;
        if (gd[y0 + i]) { gd[y0 + i][x] = ch; gd[y0 + i][PM_W - 1 - x] = ch; }
      }
    });
    return gd;
  }
  const tail = (rows) => rows.map((r) => "............" + r);
  function rect(gd, x, y, w, h, ch) {
    for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) if (gd[j] && i >= 0 && i < gd[0].length) gd[j][i] = ch;
  }
  function outline(gd, skip = "bByor") {
    const h = gd.length, w = gd[0].length;
    const add = [];
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      if (gd[y][x] !== ".") continue;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const c = gd[y + dy] && gd[y + dy][x + dx];
        if (c && c !== "." && c !== "k" && !skip.includes(c)) { add.push([x, y]); break; }
      }
    }
    add.forEach(([x, y]) => (gd[y][x] = "k"));
    return gd;
  }
  function poly(gd, pts, ch) {
    const h = gd.length, w = gd[0].length;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const px = x + 0.5, py = y + 0.5;
      let inside = false;
      for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
        const [xi, yi] = pts[i], [xj, yj] = pts[j];
        if ((yi > py) !== (yj > py) && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) inside = !inside;
      }
      if (inside) gd[y][x] = ch;
    }
  }

  /* ---------- part art ---------- */
  const WINGS = [
    "k", "kk", "k2k", "k22k", "k222k", "k4222k", "k42222k", "k422222k", "k4222222k",
    "k42222222k", "k4@222222@k", "k4@@22222@@k", "k4@@@2222@@@k", ".k4@@@222@@@@k", "..k4@@@@@@@@kk", "...k4@@@@kkk", "....kkkk",
  ];
  const BOOSTERS = [
    "..........kkkk", ".........k2222k", ".........k2w22k", ".........k2w22k", ".........k2222k",
    ".........k4444k", ".........k22@@k", ".........k2@@@k", ".........k2@@@k", ".........kffffk", ".........kkkkkk",
  ];
  const LEGS = [
    "..............kfFFfk",
    "..............kfFFfk",
    "..............kfFFfk",
    ".............kk2222kk",
    ".............k2ww22@k",
    ".............k22222@k",
    ".............k2222@@k",
    ".............kk1111kk",
    ".............k1w111!k",
    "............k11w111!!k",
    "............k11w111!!k",
    "............k3333333#k",
    "............k11w111!!k",
    "............k111111!!k",
    "............k11111!!!k",
    "............k1111!!!!k",
    "............kkkkkkkkkk",
    "...........k22222222@k",
    "..........k222222222@@k",
    "..........k@@@@@@@@@@@k",
    "..........kkkkkkkkkkkkk",
  ];
  const WAIST = [
    ".................kkkkkkk",
    "................k1w11133",
    "................k11111#3",
    "................k!!!!k#3",
    "................kkkkkk#3",
    "......................k#",
    "......................kk",
  ];
  const TORSO = [
    "...............kkkkkkkkk",
    "..............k111111111",
    ".............k1w11111kkk",
    ".............k2w222222ke",
    ".............k2444442kEe",
    ".............k2$$$$$2kee",
    ".............k2444442kkk",
    ".............k2$$$$$2222",
    ".............k@222222222",
    "..............k@22222222",
    "..............k@@2222222",
    "...............k11111111",
    "...............k!!111111",
    "...............kkkkkkkkk",
  ];
  const ARM = [
    "......kkkkkkkk",
    ".....k1111111k",
    "....k11w111111k",
    "....k1w1111111k",
    "....k33333333#k",
    "....k11111111!k",
    "....k!!!!!!!!!k",
    ".....kkkkkkkkk",
    ".......kfFfk",
    ".......kfFfk",
    ".......kfFfk",
    "......kk222kk",
    ".....k1111111k",
    ".....k1w11111k",
    ".....k1w1111!k",
    ".....k2222222k",
    ".....k1111111k",
    ".....k1111!!!k",
    ".....kkkkkkkkk",
    "......kfffffk",
    "......kfFfFfk",
    "......kfffffk",
    ".......kkkkk",
  ];
  const HEADS_PX = [
    // VANGUARD — V-fin, twin eyes
    tail([
      ".$4", "..$4", "...$4......k", "....$4....k3", ".....$4..k33", "......$4kk33",
      "......kk1111", ".....k11w111", ".....k1kkkkk", ".....k1keeEk", ".....k1kkkkk",
      ".....k!1ff1f", "......k!1k33", ".......kkkkk",
    ]),
    // SENTINEL — dome, mono-eye
    tail([
      "", "", "", "..........k3", ".........k33", ".......kkk33",
      "......k11111", ".....k11w111", ".....k1kkkkk", ".....k1kffEe", ".....k1kkkkk",
      ".....k!1111f", "......k!!1ff", ".......kkkkk",
    ]),
    // TITAN — great horn, heavy jaw
    tail([
      "...........4", "..........$4", "..4.......$4", "..$4.....k$4", "...$4....k$4", "....$4kkk$44",
      ".....k111111", ".....k11w111", ".....k1kkkkk", ".....k1keeEk", ".....k1kkkkk",
      ".....kffffff", "......kfFFff", ".......kkkkk",
    ]),
  ];

  function weaponLayer(kind) {
    const gd = grid(PM_W, PM_H);
    if (kind === 0) {
      // beam saber: hilt in the right hand, blade angled up and out
      for (let i = 0; i < 26; i++) {
        const y = 31 - i, x = 40 + Math.floor(i / 4);
        gd[y][x] = "B";
        if (gd[y][x - 1] !== undefined) gd[y][x - 1] = "b";
        if (x + 1 < PM_W) gd[y][x + 1] = "b";
      }
      rect(gd, 38, 32, 3, 7, "f");
      rect(gd, 39, 33, 1, 5, "F");
      rect(gd, 37, 32, 5, 1, "4");
      outline(gd);
    } else if (kind === 1) {
      // rifle held forward
      rect(gd, 31, 32, 17, 3, "f");
      rect(gd, 31, 32, 17, 1, "F");
      rect(gd, 35, 29, 6, 2, "2");
      rect(gd, 36, 29, 2, 1, "e");
      rect(gd, 36, 35, 2, 3, "f");
      rect(gd, 46, 32, 2, 3, "4");
      outline(gd);
    }
    return gd;
  }
  function cannonLayer() {
    const gd = grid(PM_W, PM_H);
    rect(gd, 36, 1, 5, 15, "2");
    rect(gd, 40, 1, 1, 15, "@");
    rect(gd, 37, 2, 1, 12, "w");
    rect(gd, 36, 5, 5, 1, "4");
    rect(gd, 36, 11, 5, 1, "4");
    rect(gd, 35, 0, 7, 2, "f");
    rect(gd, 35, 14, 7, 3, "f");
    outline(gd);
    return gd;
  }
  function flameLayer() {
    const gd = grid(PM_W, PM_H);
    for (const cx of [16, 31]) {
      rect(gd, cx - 4, 54, 9, 1, "y");
      rect(gd, cx - 3, 55, 7, 1, "o");
      rect(gd, cx - 2, 55, 5, 1, "y");
      rect(gd, cx - 3, 56, 7, 1, "o");
      rect(gd, cx - 2, 57, 5, 1, "r");
      rect(gd, cx - 1, 57, 3, 1, "o");
      rect(gd, cx - 1, 58, 3, 1, "r");
      rect(gd, cx, 59, 1, 1, "r");
    }
    return gd;
  }

  function mechLayers(c) {
    const L = [];
    L.push(c.pack === 0 ? half(2, WINGS) : half(3, BOOSTERS));
    if (c.weapon === 2) L.push(cannonLayer());
    L.push(half(33, LEGS));
    L.push(half(29, WAIST));
    L.push(half(15, TORSO));
    L.push(half(2, HEADS_PX[c.head]));
    L.push(half(14, ARM));
    if (c.weapon !== 2) L.push(weaponLayer(c.weapon));
    const fl = flameLayer();
    fl.flame = true;
    L.push(fl);
    return L;
  }

  function jetLayers() {
    const mk = () => grid(PJ_W, PJ_H);
    const tailFin = mk(); poly(tailFin, [[8, 12], [15, 12], [11, 2], [5, 2]], "2"); poly(tailFin, [[8, 12], [11, 12], [7, 4], [5, 4]], "@"); outline(tailFin);
    const engine = mk(); rect(engine, 4, 11, 6, 6, "f"); rect(engine, 4, 12, 6, 1, "F"); outline(engine);
    const body = mk();
    poly(body, [[8, 11], [38, 9], [53, 14], [38, 18], [8, 17]], "1");
    for (let y = 15; y < PJ_H; y++) for (let x = 0; x < PJ_W; x++) if (body[y][x] === "1") body[y][x] = "!";
    rect(body, 12, 13, 26, 1, "3");
    rect(body, 12, 11, 18, 1, "w");
    outline(body);
    const canopy = mk(); poly(canopy, [[32, 10], [40, 9], [45, 12], [33, 12]], "e"); rect(canopy, 36, 10, 3, 1, "E"); outline(canopy);
    const wing = mk(); poly(wing, [[18, 16], [34, 16], [27, 27], [13, 27]], "2"); poly(wing, [[16, 22], [30, 22], [27, 27], [13, 27]], "@"); rect(wing, 13, 26, 4, 1, "4"); outline(wing);
    const nose = mk(); poly(nose, [[44, 12], [54, 14], [44, 16]], "4"); outline(nose);
    const fl = mk(); rect(fl, 0, 12, 4, 4, "o"); rect(fl, 1, 13, 3, 2, "y"); rect(fl, 0, 13, 1, 2, "r"); fl.flame = true;
    return [tailFin, engine, wing, body, canopy, nose, fl];
  }

  function paintLayer(gd, colors, scale) {
    const w = gd[0].length, h = gd.length;
    const c = document.createElement("canvas");
    c.width = w * scale; c.height = h * scale;
    const ctx = c.getContext("2d");
    let minX = w, minY = h, maxX = 0, maxY = 0;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const ch = gd[y][x];
      if (ch === "." || !colors[ch]) continue;
      ctx.fillStyle = colors[ch];
      ctx.fillRect(x * scale, y * scale, scale, scale);
      minX = Math.min(minX, x); minY = Math.min(minY, y); maxX = Math.max(maxX, x); maxY = Math.max(maxY, y);
    }
    c.className = "part" + (gd.flame ? " flame" : "");
    c.style.transformOrigin = `${(((minX + maxX + 1) / 2) / w) * 100}% ${(((minY + maxY + 1) / 2) / h) * 100}%`;
    return c;
  }

  function buildPixelUnit(kind, c, P, scale = 6) {
    const wrap = document.createElement("div");
    wrap.className = kind === "jet" ? "pjet" : "pmech";
    const colors = mechColors(P);
    (kind === "jet" ? jetLayers() : mechLayers(c)).forEach((gd) => wrap.appendChild(paintLayer(gd, colors, scale)));
    return wrap;
  }

  const mechEl = (c = cfg) => buildPixelUnit("mech", c, PAINTS[c.paint]);
  const jetEl = (c = cfg) => buildPixelUnit("jet", c, PAINTS[c.paint]);

  /* =========================================================
     CHAPTER I — HANGAR
     ========================================================= */
  const bay = $("bay");
  const bayUnit = $("bayUnit");
  const heroMech = $("heroMech");
  let jetMode = false;
  let hangarBusy = false;

  function buildOptions() {
    const groups = { head: HEADS, paint: PAINTS, weapon: WEAPONS, pack: PACKS };
    document.querySelectorAll(".opt-row").forEach((row) => {
      const key = row.dataset.opt;
      row.innerHTML = "";
      groups[key].forEach((opt, i) => {
        const b = document.createElement("button");
        b.setAttribute("aria-pressed", String(cfg[key] === i));
        if (key === "paint") {
          b.className = "swatch";
          b.title = opt.name;
          b.setAttribute("aria-label", "Paint: " + opt.name);
          b.style.setProperty("--a", opt.m1);
          b.style.setProperty("--b", opt.m2);
          b.style.setProperty("--c", opt.m3);
        } else {
          b.className = "opt-btn";
          b.textContent = opt.name;
        }
        b.addEventListener("click", () => {
          if (hangarBusy || cfg[key] === i) return;
          cfg[key] = i;
          row.querySelectorAll("button").forEach((x, j) => x.setAttribute("aria-pressed", String(j === i)));
          blip([660, 990], 0.04);
          renderUnit(true);
          once("hangar-custom", () => addExp(40));
        });
        row.appendChild(b);
      });
    });
  }

  function renderStats() {
    const parts = [HEADS[cfg.head], WEAPONS[cfg.weapon], PACKS[cfg.pack]];
    $("stats").innerHTML = STAT_NAMES.map((n, i) => {
      const v = Math.min(10, parts.reduce((a, p) => a + p.s[i], 0));
      return `<div class="stat"><span>${n}</span><span class="stat-bar">${Array.from({ length: 10 }, (_, k) => `<i class="${k < v ? "on" : ""}"></i>`).join("")}</span><b>${v}</b></div>`;
    }).join("");
  }

  function renderUnit(animate) {
    bayUnit.replaceChildren(mechEl(), jetEl());
    heroMech.replaceChildren(mechEl());
    $("unitName").textContent = unitName();
    $("unitMode").textContent = jetMode ? "FIGHTER" : "MOBILE SUIT";
    renderStats();
    store.set("kd2-mech", cfg);
    if (animate) assemble(bayUnit.querySelector(jetMode ? ".pjet" : ".pmech"));
  }

  const scatterPose = () =>
    `translate(${rand(-140, 140)}px, ${rand(-110, 110)}px) rotate(${rand(-300, 300)}deg) scale(.2)`;
  function scatterOut(svg) {
    [...svg.querySelectorAll(".part")].forEach((p, i) => {
      p.style.transition = `transform .45s ${i * 22}ms ease-in, opacity .45s ${i * 22}ms`;
      p.style.transform = scatterPose();
      p.style.opacity = "0";
    });
  }
  function assemble(svg) {
    const parts = [...svg.querySelectorAll(".part")];
    parts.forEach((p) => {
      p.style.transition = "none";
      p.style.transform = scatterPose();
      p.style.opacity = "0";
    });
    svg.getBoundingClientRect();
    requestAnimationFrame(() => {
      parts.forEach((p, i) => {
        p.style.transition = `transform .55s ${i * 28}ms cubic-bezier(.3,1.4,.5,1), opacity .3s ${i * 28}ms`;
        p.style.transform = "";
        p.style.opacity = "";
      });
    });
  }

  $("btnTransform").addEventListener("click", async () => {
    if (hangarBusy) return;
    hangarBusy = true;
    const from = bayUnit.querySelector(jetMode ? ".pjet" : ".pmech");
    scatterOut(from);
    blip([220, 330, 220, 440, 330, 660], 0.06, "sawtooth");
    await wait(650);
    jetMode = !jetMode;
    bay.classList.toggle("jet-mode", jetMode);
    $("unitMode").textContent = jetMode ? "FIGHTER" : "MOBILE SUIT";
    from.querySelectorAll(".part").forEach((p) => { p.style.transition = "none"; p.style.transform = ""; p.style.opacity = ""; });
    assemble(bayUnit.querySelector(jetMode ? ".pjet" : ".pmech"));
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

  function renderQuests() {
    const wrap = $("questCards");
    wrap.innerHTML = "";
    QUESTS.forEach((q, i) => {
      const card = document.createElement("article");
      card.className = "quest" + (cleared.has(q.id) ? " cleared" : "");
      card.style.setProperty("--tilt", [-2, 1.5, -1][i] + "deg");
      card.innerHTML = `<div class="quest-rank" aria-label="Rank ${q.rank} of 3"><b>${"★".repeat(q.rank)}</b>${"★".repeat(3 - q.rank)}</div>`;
      card.appendChild(spriteCanvas(q.sprite, 4));
      card.insertAdjacentHTML("beforeend",
        `<h3>${q.title}</h3><p><b>Target:</b> ${q.foe}<br>${q.hint}</p>` +
        `<div class="reward">REWARD ${q.gil}G · ${q.exp} EXP</div>` +
        `<button type="button">${cleared.has(q.id) ? "HUNT AGAIN" : "ACCEPT QUEST"}</button>` +
        `<div class="stamp">CLEARED</div>`);
      card.querySelector("button").addEventListener("click", () => startBattle(q));
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
     CHAPTER III — LOAD GAME
     ========================================================= */
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
  const fileList = $("fileList");
  const fileDetail = $("fileDetail");
  let fileTimer;

  function showFile(i, instant) {
    const f = FILES[i];
    fileList.querySelectorAll(".slot").forEach((b, j) => b.setAttribute("aria-selected", String(j === i)));
    const render = () => {
      const art = document.createElement("div");
      art.className = "art";
      art.appendChild(spriteCanvas(f.sprite, 10));
      fileDetail.innerHTML =
        `<h3>${f.name}</h3><div class="loc">LOCATION · ${f.loc}<br>PLAYTIME · ${f.time}</div>` +
        `<p>${f.line}</p><div class="tags">${f.tags.map((t) => `<span>${t}</span>`).join("")}</div>`;
      fileDetail.prepend(art);
      fileDetail.firstChild.animate([{ transform: "scale(.4)", opacity: 0 }, { transform: "scale(1)", opacity: 1 }], { duration: 300, easing: "cubic-bezier(.3,1.5,.5,1)" });
    };
    clearTimeout(fileTimer);
    if (instant) return render();
    fileDetail.innerHTML = `<p class="loading">LOADING FILE ${i + 1}...</p>`;
    blip([660, 880, 990], 0.05);
    fileTimer = setTimeout(render, 420);
    once("file-" + i, () => addExp(25));
  }

  FILES.forEach((f, i) => {
    const b = document.createElement("button");
    b.className = "slot";
    b.setAttribute("role", "option");
    b.innerHTML =
      `<span class="slot-num">FILE ${i + 1}</span><span class="slot-icon"></span>` +
      `<span class="slot-title">${f.name}<small>${f.sub}</small></span>` +
      `<span class="slot-meta">${f.lv}<span>${f.time}</span></span>`;
    b.querySelector(".slot-icon").appendChild(spriteCanvas(f.sprite, 3));
    b.addEventListener("click", () => showFile(i));
    fileList.appendChild(b);
  });
  showFile(0, true);

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
