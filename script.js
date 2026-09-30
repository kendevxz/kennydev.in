(() => {
  "use strict";

  /* =========================================================
     PIXEL SPRITES — drawn from text grids, one char per pixel
     ========================================================= */
  const PALETTE = {
    K: "#1a1a2e", W: "#ffffff", Y: "#ffd23f", O: "#ff8c42", R: "#ff3b6b",
    B: "#b5651d", T: "#f4c28b", G: "#9aa5b1", C: "#3ee6ff", P: "#9b5de5",
    U: "#3a86ff", N: "#4ade80", S: "#fff3b0",
  };

  const SPRITES = {
    duck: [
      "....YYY.....",
      "...YYYYY....",
      "...YKYYYOO..",
      "...YYYYYOO..",
      "....YYYY....",
      ".YYYYYYYYY..",
      "YYYYYYYYYYY.",
      "YYSYYYYYYYY.",
      "YYSSYYYYYYY.",
      ".YYYYYYYYY..",
      "..YYYYYYY...",
    ],
    robot: [
      ".....R......",
      ".....R......",
      "..GGGGGGG...",
      "..GCGGGCG...",
      "..GGGGGGG...",
      "..GRRRRRG...",
      "...GGGGG....",
      ".GGGGGGGGG..",
      ".GUGGGGGUG..",
      ".GGGGGGGGG..",
      "..GG...GG...",
      "..KK...KK...",
    ],
    bear: [
      ".BB.....BB.",
      "BTBBBBBBBTB",
      ".BBBBBBBBB.",
      ".BKBBBBBKB.",
      ".BBBTTTBBB.",
      ".BBBTKTBBB.",
      "..BBBBBBB..",
      ".BBBBBBBBB.",
      "BBBTTTTTBBB",
      "BBBTTTTTBBB",
      ".BBB...BBB.",
      ".BB.....BB.",
    ],
    pad: [
      "..KKKKKKKK..",
      ".KPPPPPPPPK.",
      "KPPWPPPPYPPK",
      "KPWWWPPRPNPK",
      "KPPWPPPPCPPK",
      "KPPPPKKPPPPK",
      ".KPPK..KPPK.",
      "..KK....KK..",
    ],
    ghost: [
      "....WWWW....",
      "..WWWWWWWW..",
      ".WWWWWWWWWW.",
      ".WWKKWWKKWW.",
      ".WWKCWWKCWW.",
      "WWWWWWWWWWWW",
      "WWWWWRRWWWWW",
      "WWWWWWWWWWWW",
      "WWWWWWWWWWWW",
      "WW.WWW.WWW.W",
      "W...W...W...",
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
    rocket: [
      ".....R.....",
      "....RRR....",
      "....WWW....",
      "...WWCWW...",
      "...WWCWW...",
      "...WWWWW...",
      "...WWWWW...",
      "..RWWWWWR..",
      ".RRWWWWWRR.",
      ".RR.OYO.RR.",
      ".....O.....",
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
    dino: [
      "......NNNNN.",
      ".....NNKNNNN",
      ".....NNNNNNN",
      ".....NNNN...",
      "N...NNNNNNN.",
      "NN.NNNNNN...",
      "NNNNNNNNNN..",
      ".NNNNNNNN...",
      "..NNNNNN....",
      "...NN.NN....",
      "...N...N....",
    ],
    yoyo: [
      "......K.....",
      "......K.....",
      "......K.....",
      "...OOOOOO...",
      "..OOYYYYOO..",
      ".OOYYKKYYOO.",
      ".OOYYKKYYOO.",
      "..OOYYYYOO..",
      "...OOOOOO...",
    ],
  };
  const NAMES = Object.keys(SPRITES);

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

  /* =========================================================
     STORAGE (best-effort)
     ========================================================= */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } },
  };

  /* =========================================================
     SOUND — tiny square-wave blips
     ========================================================= */
  let audio = null;
  let soundOn = false;
  const soundBtn = document.getElementById("sound");
  soundBtn.addEventListener("click", () => {
    soundOn = !soundOn;
    if (soundOn && !audio) {
      try { audio = new (window.AudioContext || window.webkitAudioContext)(); } catch { soundOn = false; }
    }
    soundBtn.setAttribute("aria-pressed", String(soundOn));
    soundBtn.textContent = soundOn ? "♪ ON" : "♪ OFF";
    if (soundOn) blip([523, 659, 784], 0.06);
  });
  function blip(freqs, dur = 0.08, type = "square") {
    if (!soundOn || !audio) return;
    const list = Array.isArray(freqs) ? freqs : [freqs];
    list.forEach((f, i) => {
      const t = audio.currentTime + i * dur;
      const o = audio.createOscillator();
      const g = audio.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(0.06, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(audio.destination);
      o.start(t);
      o.stop(t + dur);
    });
  }

  /* =========================================================
     HUD — score, hi-score, credits
     ========================================================= */
  const scoreEl = document.getElementById("score");
  const hiEl = document.getElementById("hiscore");
  const creditsEl = document.getElementById("credits");
  let score = 0;
  let hi = store.get("kd-hi", 0);
  let credits = 5;
  const pad6 = (n) => String(n).padStart(6, "0");
  hiEl.textContent = pad6(hi);

  function bump(el) {
    el.classList.remove("bump");
    void el.offsetWidth;
    el.classList.add("bump");
  }
  function addScore(n) {
    score += n;
    scoreEl.textContent = pad6(score);
    bump(scoreEl);
    if (score > hi) {
      hi = score;
      hiEl.textContent = pad6(hi);
      store.set("kd-hi", hi);
    }
  }
  function setCredits(n) {
    credits = Math.max(0, Math.min(99, n));
    creditsEl.textContent = String(credits).padStart(2, "0");
    bump(creditsEl);
  }

  const toastEl = document.getElementById("toast");
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
  }

  /* =========================================================
     HERO — floating toys + typewriter
     ========================================================= */
  const floaters = document.getElementById("floaters");
  const floatEls = [];
  const spots = [
    [6, 14], [18, 62], [84, 18], [90, 58], [12, 38], [72, 8],
    [30, 10], [62, 70], [4, 72], [94, 36], [46, 4], [26, 78],
  ];
  spots.forEach(([x, y], i) => {
    const c = spriteCanvas(NAMES[i % NAMES.length], Math.round(rand(3, 6)));
    c.className = "floater";
    c.style.left = x + "%";
    c.style.top = y + "%";
    c.style.setProperty("--d", rand(4, 8).toFixed(1) + "s");
    c.style.setProperty("--delay", (-rand(0, 6)).toFixed(1) + "s");
    c.style.setProperty("--r", rand(-12, 12).toFixed(0) + "deg");
    c.dataset.depth = rand(0.5, 2).toFixed(2);
    floaters.appendChild(c);
    floatEls.push(c);
  });
  const hero = document.querySelector(".hero");
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    floatEls.forEach((el) => {
      const d = +el.dataset.depth;
      el.style.translate = `${-dx * 30 * d}px ${-dy * 30 * d}px`;
    });
  });

  const lines = [
    "LOADING FUN...",
    "BLOWING ON CARTRIDGES...",
    "WINDING UP TOYS...",
    "SPEEDRUNNING LIFE...",
    "SAVING PROGRESS...",
    "OPENING LOOT BOXES...",
  ];
  const typer = document.getElementById("typer");
  let li = 0, ci = 0, deleting = false;
  (function type() {
    const line = lines[li];
    ci += deleting ? -1 : 1;
    typer.textContent = line.slice(0, ci);
    let wait = deleting ? 30 : 70;
    if (!deleting && ci === line.length) { deleting = true; wait = 1400; }
    else if (deleting && ci === 0) { deleting = false; li = (li + 1) % lines.length; wait = 300; }
    setTimeout(type, wait);
  })();

  /* =========================================================
     STAGE 1 — CLAW MACHINE
     ========================================================= */
  const cv = document.getElementById("clawCanvas");
  const cx = cv.getContext("2d");
  const W = cv.width, H = cv.height;
  const FLOOR = H - 22;
  const CHUTE = { x: 8, w: 72, top: FLOOR - 70 };
  const RAIL_Y = 18, TOP_Y = 44, ARM = 26;
  const TOY_SCALE = 3;
  const msgEl = document.getElementById("clawMsg");

  const claw = { x: 200, y: TOP_Y, open: 1, mode: "idle", held: null, timer: 0 };
  const input = { left: false, right: false };
  let clawToys = [];
  let clawVisible = false;

  function makeClawToy(name, x, y) {
    const img = spriteImage(name, TOY_SCALE);
    return { name, img, x, y, w: img.width, h: img.height, vy: 0, grabbed: false };
  }
  function fillMachine() {
    clawToys = [];
    const pool = [...NAMES].sort(() => Math.random() - 0.5);
    let i = 0;
    for (let layer = 0; layer < 3; layer++) {
      for (let x = CHUTE.x + CHUTE.w + 14; x < W - 30; x += rand(34, 44)) {
        clawToys.push(makeClawToy(pool[i++ % pool.length], x + rand(-4, 4), FLOOR - 40 - layer * 60 - rand(0, 30)));
        if (layer === 2 && Math.random() < 0.5) x += 30;
      }
    }
  }
  fillMachine();

  function showMsg(text, ms = 1400) {
    msgEl.innerHTML = text;
    msgEl.classList.add("show");
    clearTimeout(showMsg.t);
    showMsg.t = setTimeout(() => msgEl.classList.remove("show"), ms);
  }

  function drop() {
    if (claw.mode !== "idle") return;
    if (credits <= 0) {
      showMsg("INSERT COIN");
      blip([220, 180], 0.12);
      return;
    }
    setCredits(credits - 1);
    claw.mode = "down";
    blip([392, 330], 0.06);
  }

  function supportY(t) {
    let ground = FLOOR;
    for (const o of clawToys) {
      if (o === t || o.grabbed) continue;
      if (o.y < t.y + t.h * 0.5) continue; // only things below us
      const overlap = Math.min(t.x + t.w, o.x + o.w) - Math.max(t.x, o.x);
      if (overlap > Math.min(t.w, o.w) * 0.35) ground = Math.min(ground, o.y);
    }
    return ground;
  }

  function toyUnderClaw() {
    let best = null, bestD = Infinity;
    for (const t of clawToys) {
      if (t.grabbed) continue;
      const d = Math.abs(t.x + t.w / 2 - claw.x);
      if (d < 20 && t.y < claw.y + ARM + 14 && t.y + t.h > claw.y + ARM - 6 && d < bestD) {
        best = t; bestD = d;
      }
    }
    return best;
  }

  function winToy(t) {
    clawToys = clawToys.filter((o) => o !== t);
    addScore(1000);
    blip([523, 659, 784, 1046], 0.08);
    showMsg("YOU WIN!<br><small style='font-size:10px'>+1000</small>", 1800);
    const shelf = document.getElementById("prizes");
    document.getElementById("prizeEmpty").hidden = true;
    const wrap = document.createElement("div");
    wrap.className = "prize";
    wrap.title = t.name;
    wrap.appendChild(spriteCanvas(t.name, 3));
    shelf.appendChild(wrap);
    if (clawToys.length === 0) {
      setTimeout(() => { showMsg("RESTOCKING!"); fillMachine(); }, 1200);
    }
  }

  function updateClaw() {
    const speed = 2.6;
    switch (claw.mode) {
      case "idle":
        if (input.left) claw.x -= speed;
        if (input.right) claw.x += speed;
        claw.x = Math.max(CHUTE.x + CHUTE.w / 2, Math.min(W - 24, claw.x));
        break;
      case "down": {
        claw.y += 3;
        const hit = toyUnderClaw();
        if ((hit && claw.y + ARM >= hit.y + 6) || claw.y + ARM >= FLOOR - 4) {
          claw.mode = "grab"; claw.timer = 0;
        }
        break;
      }
      case "grab":
        claw.open = Math.max(0, claw.open - 0.06);
        if (claw.open === 0 && ++claw.timer > 8) {
          const t = toyUnderClaw();
          if (t && Math.random() < 0.65) { t.grabbed = true; claw.held = t; blip(660, 0.05); }
          claw.mode = "up";
        }
        break;
      case "up":
        claw.y -= 2.4;
        if (claw.held && claw.y < FLOOR - 120 && Math.random() < 0.006) {
          claw.held.grabbed = false; claw.held = null;
          showMsg("SO CLOSE!"); blip([300, 200], 0.1);
        }
        if (claw.y <= TOP_Y) { claw.y = TOP_Y; claw.mode = "return"; }
        break;
      case "return": {
        const target = CHUTE.x + CHUTE.w / 2;
        if (!claw.held) { claw.mode = "reset"; break; }
        claw.x -= speed;
        if (claw.x <= target) { claw.x = target; claw.mode = "reset"; }
        break;
      }
      case "reset":
        claw.open = Math.min(1, claw.open + 0.05);
        if (claw.held && claw.open > 0.4) {
          claw.held.grabbed = false; claw.held.vy = 0; claw.held = null;
        }
        if (claw.open === 1) {
          claw.mode = "idle";
          if (!claw.held && claw.x > CHUTE.x + CHUTE.w) {
            // missed: nothing to do
          }
        }
        break;
    }

    if (claw.held) {
      claw.held.x = claw.x - claw.held.w / 2;
      claw.held.y = claw.y + ARM - 8;
    }

    for (const t of [...clawToys]) {
      if (t.grabbed) continue;
      const ground = supportY(t);
      if (t.y + t.h < ground - 0.5) {
        t.vy = Math.min(t.vy + 0.45, 9);
        t.y += t.vy;
        if (t.y + t.h >= ground) { t.y = ground - t.h; t.vy = 0; }
      } else {
        t.y = ground - t.h; t.vy = 0;
      }
      if (t.x + t.w / 2 < CHUTE.x + CHUTE.w && t.y + t.h >= FLOOR - 2) winToy(t);
    }
  }

  function drawClaw() {
    cx.clearRect(0, 0, W, H);

    // back wall dots
    cx.fillStyle = "rgba(255,255,255,.05)";
    for (let y = 60; y < FLOOR; y += 24) for (let x = 12; x < W; x += 24) cx.fillRect(x, y, 2, 2);

    // floor
    cx.fillStyle = "#3b2585";
    cx.fillRect(0, FLOOR, W, H - FLOOR);

    // chute
    cx.fillStyle = "rgba(62,230,255,.12)";
    cx.fillRect(CHUTE.x, CHUTE.top, CHUTE.w, FLOOR - CHUTE.top);
    cx.strokeStyle = "#3ee6ff";
    cx.lineWidth = 3;
    cx.strokeRect(CHUTE.x, CHUTE.top, CHUTE.w, FLOOR - CHUTE.top + 20);
    cx.fillStyle = "#3ee6ff";
    cx.font = "8px 'Press Start 2P', monospace";
    cx.textAlign = "center";
    cx.fillText("PRIZE", CHUTE.x + CHUTE.w / 2, CHUTE.top + 22);
    cx.fillText("▼", CHUTE.x + CHUTE.w / 2, CHUTE.top + 40);

    // toys
    for (const t of clawToys) if (!t.grabbed) cx.drawImage(t.img, Math.round(t.x), Math.round(t.y));

    // rail
    cx.fillStyle = "#1a1a2e";
    cx.fillRect(0, RAIL_Y - 4, W, 8);
    cx.fillStyle = "#9aa5b1";
    cx.fillRect(claw.x - 16, RAIL_Y - 6, 32, 12);

    // cable
    cx.strokeStyle = "#d9d4e8";
    cx.lineWidth = 2;
    cx.beginPath();
    cx.moveTo(claw.x, RAIL_Y);
    cx.lineTo(claw.x, claw.y);
    cx.stroke();

    // held toy (behind arms)
    if (claw.held) cx.drawImage(claw.held.img, Math.round(claw.held.x), Math.round(claw.held.y));

    // hub + arms
    cx.fillStyle = "#ffd23f";
    cx.fillRect(claw.x - 12, claw.y - 6, 24, 12);
    cx.strokeStyle = "#ffd23f";
    cx.lineWidth = 4;
    cx.lineCap = "round";
    const spread = 6 + claw.open * 14;
    for (const s of [-1, 1]) {
      cx.beginPath();
      cx.moveTo(claw.x + s * 8, claw.y + 4);
      cx.lineTo(claw.x + s * (spread + 4), claw.y + ARM * 0.6);
      cx.lineTo(claw.x + s * (spread - 6 + (1 - claw.open) * 4), claw.y + ARM);
      cx.stroke();
    }

    // aim line
    if (claw.mode === "idle") {
      cx.strokeStyle = "rgba(255,59,107,.35)";
      cx.setLineDash([4, 6]);
      cx.lineWidth = 1;
      cx.beginPath();
      cx.moveTo(claw.x, claw.y + ARM + 4);
      cx.lineTo(claw.x, FLOOR);
      cx.stroke();
      cx.setLineDash([]);
    }
  }

  function clawLoop() {
    if (clawVisible) { updateClaw(); drawClaw(); }
    requestAnimationFrame(clawLoop);
  }
  drawClaw();
  requestAnimationFrame(clawLoop);

  new IntersectionObserver(([e]) => { clawVisible = e.isIntersecting; }, { threshold: 0.2 })
    .observe(document.getElementById("claw"));

  function holdButton(id, key) {
    const b = document.getElementById(id);
    const on = (e) => { e.preventDefault(); input[key] = true; b.classList.add("held"); };
    const off = () => { input[key] = false; b.classList.remove("held"); };
    b.addEventListener("pointerdown", on);
    ["pointerup", "pointerleave", "pointercancel"].forEach((ev) => b.addEventListener(ev, off));
  }
  holdButton("btnLeft", "left");
  holdButton("btnRight", "right");
  document.getElementById("btnDrop").addEventListener("click", drop);
  document.getElementById("btnCoin").addEventListener("click", () => {
    setCredits(credits + 1);
    blip([988, 1319], 0.07);
  });

  document.addEventListener("keydown", (e) => {
    if (!clawVisible || e.target.closest("input, textarea")) return;
    if (e.key === "ArrowLeft") { input.left = true; e.preventDefault(); }
    else if (e.key === "ArrowRight") { input.right = true; e.preventDefault(); }
    else if (e.key === " ") { e.preventDefault(); drop(); }
    else if (e.key === "c" || e.key === "C") { setCredits(credits + 1); blip([988, 1319], 0.07); }
  });
  document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft") input.left = false;
    if (e.key === "ArrowRight") input.right = false;
  });

  /* =========================================================
     STAGE 2 — CARTRIDGE WALL
     ========================================================= */
  const CARTS = [
    { title: "PLATFORMER", color: "#ff3b6b", sprite: "shroom", line: "Jump. Fall. Retry.<br>Jump better." },
    { title: "RPG", color: "#9b5de5", sprite: "gem", line: "Grinding XP<br>at 3 AM." },
    { title: "RACING", color: "#ffd23f", sprite: "rocket", line: "Drift first.<br>Brake never." },
    { title: "FIGHTING", color: "#ff8c42", sprite: "robot", line: "DOWN, FORWARD,<br>PUNCH." },
    { title: "PUZZLE", color: "#3ee6ff", sprite: "star", line: "One more block.<br>Just one more." },
    { title: "HORROR", color: "#9aa5b1", sprite: "ghost", line: "Don't open<br>that door." },
    { title: "ROGUELIKE", color: "#4ade80", sprite: "dino", line: "This run is<br>THE run." },
    { title: "PARTY", color: "#f4c28b", sprite: "duck", line: "Friendships<br>may not survive." },
  ];
  const cartsEl = document.getElementById("carts");
  const tv = document.getElementById("tvContent");
  const slotCart = document.getElementById("slotCart");
  const led = document.getElementById("led");
  let bootTimer;
  const booted = new Set();

  CARTS.forEach((c) => {
    const b = document.createElement("button");
    b.className = "cart";
    b.style.setProperty("--c", c.color);
    b.setAttribute("aria-label", "Play " + c.title);
    const label = document.createElement("span");
    label.className = "cart-label";
    label.appendChild(spriteCanvas(c.sprite, 4));
    const t = document.createElement("b");
    t.textContent = c.title;
    label.appendChild(t);
    b.appendChild(label);
    b.addEventListener("click", () => boot(c, b));
    cartsEl.appendChild(b);
  });

  function boot(c, btn) {
    document.querySelectorAll(".cart.active").forEach((el) => el.classList.remove("active"));
    btn.classList.add("active");
    slotCart.classList.remove("in");
    slotCart.style.background = c.color;
    led.classList.remove("on");
    void slotCart.offsetWidth;
    slotCart.classList.add("in");
    tv.innerHTML = '<div class="tv-static"></div>';
    blip([180, 140, 120], 0.05, "sawtooth");
    clearTimeout(bootTimer);
    bootTimer = setTimeout(() => {
      led.classList.add("on");
      tv.innerHTML = "";
      const g = document.createElement("div");
      g.className = "tv-game";
      g.style.setProperty("--c", c.color);
      g.appendChild(spriteCanvas(c.sprite, 7));
      g.insertAdjacentHTML("beforeend", `<h3>${c.title}</h3><p>${c.line}</p><p class="blink">PRESS START</p>`);
      tv.appendChild(g);
      blip([523, 784, 1046], 0.07);
      if (!booted.has(c.title)) {
        booted.add(c.title);
        addScore(250);
        if (booted.size === CARTS.length) toast("★ ACHIEVEMENT: FULL LIBRARY ★");
      }
    }, 650);
  }

  /* =========================================================
     STAGE 3 — TOY BOX PHYSICS
     ========================================================= */
  const box = document.getElementById("toybox");
  const toys = [];
  let zeroG = false;
  let boxVisible = false;
  let bw = box.clientWidth, bh = box.clientHeight;
  new ResizeObserver(() => { bw = box.clientWidth; bh = box.clientHeight; }).observe(box);

  function addToy(name = pick(NAMES), x, y) {
    const scale = Math.round(rand(4, 7));
    const el = spriteCanvas(name, scale);
    el.className = "toy";
    box.appendChild(el);
    const t = {
      el, w: el.width, h: el.height,
      x: x ?? rand(20, Math.max(40, bw - el.width - 20)),
      y: y ?? -el.height - rand(0, 200),
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
      if (Math.hypot(t.vx, t.vy) > 18) { addScore(50); blip([660, 880], 0.04); }
    };
    el.addEventListener("pointerup", release);
    el.addEventListener("pointercancel", release);
    return t;
  }
  for (let i = 0; i < 12; i++) addToy(NAMES[i % NAMES.length]);

  function stepToys() {
    const g = zeroG ? 0 : 0.55;
    for (const t of toys) {
      if (t.drag) continue;
      t.vy += g;
      if (zeroG) { t.vx *= 0.995; t.vy *= 0.995; } else t.vx *= 0.995;
      t.x += t.vx; t.y += t.vy; t.rot += t.vr;
      t.vr *= 0.97;
      const floor = bh - 30 - t.h;
      if (t.y > floor) {
        t.y = floor;
        if (Math.abs(t.vy) > 3) blip(120 + Math.random() * 60, 0.03, "triangle");
        t.vy *= -0.45; t.vx *= 0.85; t.vr = t.vx * 1.5;
        if (Math.abs(t.vy) < 1) t.vy = 0;
      }
      if (zeroG && t.y < 0) { t.y = 0; t.vy *= -0.8; }
      if (t.x < 0) { t.x = 0; t.vx *= -0.6; }
      if (t.x > bw - t.w) { t.x = bw - t.w; t.vx *= -0.6; }
    }
    // soft circle collisions so toys pile instead of overlapping
    for (let i = 0; i < toys.length; i++) {
      for (let j = i + 1; j < toys.length; j++) {
        const a = toys[i], b = toys[j];
        const ax = a.x + a.w / 2, ay = a.y + a.h / 2, bx = b.x + b.w / 2, by = b.y + b.h / 2;
        const dx = bx - ax, dy = by - ay;
        const dist = Math.hypot(dx, dy) || 0.01;
        const min = (a.r + b.r) * 0.8;
        if (dist < min) {
          const push = (min - dist) / 2;
          const nx = dx / dist, ny = dy / dist;
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

  document.getElementById("btnShake").addEventListener("click", () => {
    toys.forEach((t) => { t.vx += rand(-14, 14); t.vy -= rand(8, 18); t.vr += rand(-20, 20); });
    box.animate([{ transform: "translateX(0)" }, { transform: "translateX(-10px)" }, { transform: "translateX(10px)" }, { transform: "translateX(0)" }], { duration: 250, iterations: 2 });
    blip([150, 110, 150], 0.05, "sawtooth");
  });
  document.getElementById("btnAdd").addEventListener("click", () => {
    if (toys.length >= 40) { toast("TOY BOX FULL!"); return; }
    addToy();
    addScore(10);
    blip([784, 988], 0.05);
  });
  const gBtn = document.getElementById("btnGravity");
  gBtn.setAttribute("aria-pressed", "false");
  gBtn.addEventListener("click", () => {
    zeroG = !zeroG;
    gBtn.setAttribute("aria-pressed", String(zeroG));
    if (zeroG) toys.forEach((t) => { t.vy -= rand(2, 6); t.vx += rand(-2, 2); t.vr += rand(-3, 3); });
    blip(zeroG ? [300, 500, 800] : [800, 500, 300], 0.06, "sine");
  });
  document.getElementById("btnClear").addEventListener("click", () => {
    toys.splice(0).forEach((t) => t.el.remove());
    blip([400, 300, 200, 100], 0.05);
    setTimeout(() => { for (let i = 0; i < 6; i++) addToy(); }, 600);
  });

  /* =========================================================
     GAME OVER countdown
     ========================================================= */
  const cd = document.getElementById("countdown");
  let cdTimer = null;
  new IntersectionObserver(([e]) => {
    clearInterval(cdTimer);
    if (!e.isIntersecting) return;
    let n = 9;
    cd.classList.remove("over");
    cd.textContent = n;
    cdTimer = setInterval(() => {
      n--;
      if (n < 0) {
        clearInterval(cdTimer);
        cd.classList.add("over");
        cd.textContent = "GAME OVER";
        blip([392, 330, 262, 196], 0.18, "triangle");
        return;
      }
      cd.textContent = n;
      blip(220, 0.05);
    }, 1000);
  }, { threshold: 0.5 }).observe(document.getElementById("end"));

  /* =========================================================
     KONAMI CODE
     ========================================================= */
  const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let kIdx = 0;
  document.addEventListener("keydown", (e) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    kIdx = k === KONAMI[kIdx] ? kIdx + 1 : (k === KONAMI[0] ? 1 : 0);
    if (kIdx === KONAMI.length) {
      kIdx = 0;
      setCredits(99);
      addScore(30000);
      toast("★ CHEAT ACTIVATED · 99 CREDITS ★");
      blip([523, 659, 784, 1046, 784, 1046], 0.09);
      rain();
    }
  });
  function rain() {
    const layer = document.getElementById("confetti");
    for (let i = 0; i < 60; i++) {
      const c = spriteCanvas(pick(NAMES), Math.round(rand(3, 6)));
      c.style.left = rand(0, 100) + "vw";
      c.style.animationDuration = rand(2, 4.5) + "s";
      c.style.animationDelay = rand(0, 1.5) + "s";
      layer.appendChild(c);
      c.addEventListener("animationend", () => c.remove());
    }
  }

  /* first-visit hello */
  if (!store.get("kd-visited", false)) {
    store.set("kd-visited", true);
    setTimeout(() => toast("PLAYER 1 HAS ENTERED THE GAME"), 900);
  }
})();
