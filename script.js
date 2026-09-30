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

  const poly = (c, pts) => `<polygon class="${c}" points="${pts}"/>`;
  const mir = (pts) => pts.split(" ").map((p) => { const [x, y] = p.split(","); return `${200 - +x},${y}`; }).join(" ");
  const g = (s) => `<g class="part">${s}</g>`;
  const sides = (list) =>
    g(list.map(([c, p]) => poly(c, p)).join("")) + g(list.map(([c, p]) => poly(c, mir(p))).join(""));
  const paintStyle = (p) => `--m1:${p.m1};--m2:${p.m2};--m3:${p.m3};--m4:${p.m4};--eye:${p.eye};--beam:${p.beam}`;

  function unitName(c = cfg) {
    const h = HEADS[c.head];
    const num = String(c.head * 6 + c.weapon * 2 + c.pack + 1).padStart(2, "0");
    return `${h.code}-${num} ${h.name}`;
  }

  function mechSVG(c = cfg) {
    const P = PAINTS[c.paint];
    let s = "";

    // backpack (behind everything)
    if (c.pack === 0) {
      s += sides([["c2", "72,72 24,36 32,112 66,102"], ["c4", "24,36 32,112 26,114 18,42"], ["cf2", "66,102 32,112 40,118 64,110"]]);
    } else {
      s += sides([["cf", "60,58 78,58 78,112 60,112"], ["c2", "58,54 80,54 78,64 60,64"], ["c3", "62,112 76,112 74,120 64,120"]]);
    }

    // legs
    s += sides([
      ["cf", "78,150 98,150 96,192 80,192"],
      ["c1", "72,188 98,188 101,240 68,240"],
      ["c3", "70,214 99,212 99.5,220 69.5,222"],
      ["c2", "76,182 95,182 93,198 78,198"],
      ["c2", "60,238 103,238 105,252 57,252"],
    ]);

    // waist + torso
    s += g(poly("c1", "80,136 120,136 124,154 76,154") + poly("c3", "93,138 107,138 108,160 92,160") + poly("c4", "96,141 104,141 104,148 96,148"));
    s += g(
      poly("c2", "68,84 132,84 124,138 76,138") +
      poly("c1", "82,76 118,76 124,90 76,90") +
      poly("c4", "79,96 94,96 94,112 81,112") +
      poly("c4", "121,96 106,96 106,112 119,112") +
      `<polyline class="line" points="82,101 93,101"/><polyline class="line" points="82,106 93,106"/>` +
      `<polyline class="line" points="107,101 118,101"/><polyline class="line" points="107,106 118,106"/>` +
      poly("c1", "91,114 109,114 106,132 94,132") +
      `<circle class="ce" cx="100" cy="103" r="5"/>`
    );

    // shoulder cannon sits behind the arms
    if (c.weapon === 2) {
      s += g(`<g transform="rotate(-25 64 70)"><rect class="c2" x="56" y="10" width="16" height="66" rx="3"/><rect class="cf" x="58" y="0" width="12" height="14"/><rect class="c4" x="56" y="44" width="16" height="6"/></g>`);
    }

    // head
    const eye = c.head === 2 ? "88,59 97,61 96,64 89,63" : "87,58 98,60 97,65 88,64";
    s += g(
      poly("cf", "94,68 106,68 106,80 94,80") +
      poly("c1", "86,48 114,48 118,68 112,78 88,78 82,68") +
      poly("c3", "96,73 104,73 102,79 98,79") +
      (c.head === 1
        ? `<rect class="cf" x="85" y="56" width="30" height="9" rx="3"/><circle class="ce" cx="100" cy="60.5" r="3.5"><animate attributeName="cx" values="89;111;89" dur="3.2s" repeatCount="indefinite"/></circle>`
        : poly("ce", eye) + poly("ce", mir(eye)))
    );
    if (c.head === 0) {
      s += g(poly("c4", "100,50 68,22 75,20 100,44") + poly("c4", mir("100,50 68,22 75,20 100,44")) + poly("c3", "95,48 105,48 100,38"));
    } else if (c.head === 1) {
      s += g(poly("c3", "98,48 102,48 103,26 97,26") + poly("cf", "114,52 128,28 131,30 118,54"));
    } else {
      s += g(poly("c4", "93,48 107,48 100,6") + poly("c4", "86,54 70,36 88,50") + poly("c4", mir("86,54 70,36 88,50")));
    }

    // arms
    s += sides([
      ["c1", "48,76 76,72 80,100 50,106"],
      ["c3", "50,92 79,89 80,96 50,100"],
      ["cf", "56,104 72,104 70,126 58,126"],
      ["c1", "51,124 77,124 75,158 53,158"],
      ["c2", "51,136 77,136 76,142 52,142"],
      ["cf", "54,156 74,156 72,170 56,170"],
    ]);

    // hand weapon
    if (c.weapon === 0) {
      s += g(`<g transform="rotate(30 136 164)"><rect class="blade" x="133" y="68" width="6" height="88" rx="3"/><rect class="cf" x="131.5" y="154" width="9" height="22" rx="2"/><rect class="c4" x="130" y="152" width="12" height="5"/></g>`);
    } else if (c.weapon === 1) {
      s += g(`<g transform="rotate(8 136 164)"><rect class="cf" x="118" y="156" width="64" height="12" rx="2"/><rect class="cf2" x="180" y="159" width="18" height="6"/><rect class="c2" x="132" y="150" width="22" height="7" rx="2"/><rect class="cf" x="128" y="166" width="8" height="14"/><rect class="ce" x="150" y="152" width="4" height="3"/></g>`);
    }

    // thrusters
    s += poly("flame", "64,252 98,252 81,284") + poly("flame", mir("64,252 98,252 81,284"));
    if (c.pack === 1) s += poly("flame", "62,120 76,120 69,152") + poly("flame", mir("62,120 76,120 69,152"));

    return `<svg class="mech" viewBox="-12 -12 224 300" style="${paintStyle(P)}" aria-hidden="true"><g class="mech-body">${s}</g></svg>`;
  }

  function jetSVG(c = cfg) {
    const P = PAINTS[c.paint];
    const s =
      g(poly("c2", "34,64 52,62 42,32 26,32")) +
      g(poly("c2", "34,78 52,78 42,108 26,108")) +
      g(poly("cf", "22,60 38,60 38,82 22,82")) +
      g(poly("c2", "80,66 136,64 112,26 74,26")) +
      g(poly("c1", "34,62 150,54 198,70 150,86 34,80")) +
      g(poly("c3", "56,68 150,62 150,67 56,73")) +
      g(poly("c2", "80,76 140,76 112,116 72,116")) +
      g(poly("ce", "130,58 160,58 172,67 136,67")) +
      g(poly("c4", "176,64 198,70 176,76")) +
      g(poly("c4", "74,26 80,26 78,34 72,34") + poly("c4", "72,116 78,116 80,108 74,108")) +
      poly("flame", "22,63 22,79 -6,71");
    return `<svg class="jet" viewBox="-10 20 214 100" style="${paintStyle(P)}" aria-hidden="true">${s}</svg>`;
  }

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
    bayUnit.innerHTML = mechSVG() + jetSVG();
    heroMech.innerHTML = mechSVG();
    $("unitName").textContent = unitName();
    $("unitMode").textContent = jetMode ? "FIGHTER" : "MOBILE SUIT";
    renderStats();
    store.set("kd2-mech", cfg);
    if (animate) assemble(bayUnit.querySelector(jetMode ? ".jet" : ".mech"));
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
    const from = bayUnit.querySelector(jetMode ? ".jet" : ".mech");
    scatterOut(from);
    blip([220, 330, 220, 440, 330, 660], 0.06, "sawtooth");
    await wait(650);
    jetMode = !jetMode;
    bay.classList.toggle("jet-mode", jetMode);
    $("unitMode").textContent = jetMode ? "FIGHTER" : "MOBILE SUIT";
    from.querySelectorAll(".part").forEach((p) => { p.style.transition = "none"; p.style.transform = ""; p.style.opacity = ""; });
    assemble(bayUnit.querySelector(jetMode ? ".jet" : ".mech"));
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
    foeEl.appendChild(spriteCanvas(q.sprite, small ? Math.round(q.scale * 0.6) : q.scale));

    const ps = $("partySprites");
    ps.innerHTML = "";
    B.party.forEach((m) => {
      const d = document.createElement("div");
      d.className = "member";
      d.appendChild(spriteCanvas(m.sprite, small ? 4 : 6));
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
      sm.innerHTML = `<div class="mech-wrap">${mechSVG()}</div>`;
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
     CHAPTER III — ARCANA
     ========================================================= */
  const ARCANA = [
    { num: "I", name: "MECHA", color: "#3a86ff", sprite: "minimech", tag: "GUNDAM · TRANSFORMERS · ALL MECHS",
      line: "Giant robots, transforming or not. Bonus points for a dramatic launch sequence." },
    { num: "II", name: "FINAL FANTASY", color: "#7df9ff", sprite: "crystal", tag: "CRYSTALS · SUMMONS · ATB",
      line: "Summons, crystals, and a save file with way too many hours on it." },
    { num: "III", name: "MONSTER HUNTER", color: "#f4a261", sprite: "meat", tag: "HUNT · CARVE · CRAFT",
      line: "Hunt it, carve it, craft better armor, then go hunt something bigger." },
    { num: "IV", name: "FIRE EMBLEM", color: "#e63946", sprite: "sword", tag: "TACTICS · WEAPON TRIANGLE",
      line: "Sword beats axe, axe beats lance, lance beats sword. Permadeath beats me." },
    { num: "V", name: "PERSONA", color: "#ff2a2a", sprite: "mask", tag: "CALENDAR · CONFIDANTS · ALL-OUT",
      line: "Dungeons at night, school during the day. Every day on the calendar counts." },
    { num: "VI", name: "JRPG & RPG", color: "#ffd166", sprite: "potion", tag: "PARTIES · GRINDING · EPIC OSTS",
      line: "Turn-based, action, tactics, all of it. Grinding XP at 3 AM." },
  ];
  const arcanaEl = $("arcanaCards");
  ARCANA.forEach((a) => {
    const b = document.createElement("button");
    b.className = "card";
    b.style.setProperty("--c", a.color);
    b.setAttribute("aria-label", `${a.name}: ${a.line}`);
    b.innerHTML =
      `<div class="card-face card-front"><span class="card-num">${a.num}</span><div class="card-art"></div><span class="card-name">${a.name}</span></div>` +
      `<div class="card-face card-back"><h4>${a.name}</h4><p>${a.line}</p><small>${a.tag}</small></div>`;
    b.querySelector(".card-art").appendChild(spriteCanvas(a.sprite, 6));
    b.addEventListener("click", () => {
      b.classList.toggle("flipped");
      blip(b.classList.contains("flipped") ? [660, 880] : [880, 660], 0.05, "triangle");
      once("arcana-" + a.num, () => addExp(25));
    });
    arcanaEl.appendChild(b);
  });

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
