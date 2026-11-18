"use strict";

const scenes = [
  {
    id: "outskirts", name: "郊野", region: "城外田畴", look: 68,
    description: "柳枝擦过田埂。挑担的人沿田间小道行走，屋舍从树影后露出来。",
    detail: "往路尽头看。田埂汇入通往河岸的土路，驮货的人也从这里过。", sound: "field",
    traffic: [["porter", .33, .93, .66, .53, .30, .08, 25, 5]]
  },
  {
    id: "river", name: "汴河", region: "河岸水路", look: 63,
    description: "船夫拨动长桨，船身缓缓转向。到岸的货船让出水道，后面的船顺流而过。",
    detail: "看船尾的水纹。行船留下长长的尾迹，近岸的水面则被回流推向石阶。", sound: "water",
    water: [.57, .63, .99, .97],
    traffic: [["boat", .54, .86, 1.06, .94, .20, .30, 27, 1], ["boat", .99, .70, .70, .67, .13, .09, 27, 10]]
  },
  {
    id: "wharf", name: "码头", region: "河岸货栈", look: 66,
    description: "栈板搁上船沿，脚夫肩上的筐篓一晃一晃。船上卸货，岸上有人接手。",
    detail: "顺着跳板看过去。货物从船舱搬到岸边，在棚下分堆，再由挑担和推车的人送进街巷。", sound: "wharf",
    water: [.44, .46, .59, .60],
    traffic: [["porter", .47, .92, .78, .55, .34, .13, 21, 9]]
  },
  {
    id: "bridge", name: "虹桥", region: "汴河渡口", look: 64,
    description: "桥面向上隆起。挑担人侧身让路，沿栏俯望，能看见船桨从桥下探出。",
    detail: "虹桥以木梁相搭成拱，河面中间留给船过。这里既能过河，也是看清两岸街市的地方。", sound: "wharf",
    water: [.02, .52, .12, .74],
    traffic: [["woman", .49, .47, .63, .91, .08, .29, 28, 17]]
  },
  {
    id: "market", name: "街市", region: "城外大街", look: 71,
    description: "布棚下一排蔬果透着水光。街心的人时走时停，偶尔有车催着人群向两边让开。",
    detail: "铺子门口窄，买卖挤在棚下。谁听见车轮响，就往摊边挪一步。", sound: "market",
    traffic: [["woman", .747, .74, .695, .96, .13, .25, 23, 5], ["cart", .646, .98, .764, .71, .17, .075, 26, 14]],
    foreground: [[.54,.438], [.60,.461], [.614,.548], [.646,.642], [.647,.716], [.631,.752], [.622,.837], [.612,.93], [.52,.951], [.526,.823], [.49,.737], [.465,.644], [.468,.565], [.513,.515]]
  },
  {
    id: "shops", name: "商铺", region: "沿街铺面", look: 55,
    description: "店家捧起青瓷瓶，递给柜前的客人。旁边的人掀开一匹布，对着日光细看。",
    detail: "从门口一眼能望见铺里的货架。陶罐靠里摆，布匹挨着柜面，店家便在这儿招呼过路人。", sound: "market",
    traffic: [["porter", 1.05, .88, .92, .67, .27, .13, 19, 9]]
  },
  {
    id: "tavern", name: "酒楼", region: "临街酒肆", look: 56,
    description: "窗下的街声涌上来。楼里有人端碗，有人在靠窗的座位坐下，往楼下看。",
    detail: "从竹帘底下往外瞧，能望见街边的棚子，听见楼下的人招呼。", sound: "tavern",
    traffic: [["woman", .89, .67, 1.02, .73, .05, .07, 17, 7]]
  },
  {
    id: "gate", name: "城门", region: "入城门道", look: 65,
    description: "人和车一同过门洞。步入城墙投下的阴影，另一头又是亮堂堂的街面。",
    detail: "回头望去，城墙在地上划出一道阴影。过门的人走到亮处，三三两两拐进巷子。", sound: "market",
    traffic: [["cart", .52, .97, .55, .76, .27, .09, 28, 7], ["porter", .59, .77, .70, .95, .09, .24, 29, 15]]
  },
  {
    id: "lanes", name: "城内街巷", region: "坊巷人家", look: 61,
    description: "大街渐远。灶边有人添柴，手推车从门前经过，再绕进转角。",
    detail: "听听门里的声响。这里离大街只隔几步，卖东西的喊声变远，灶边和屋檐下的动静变清楚了。", sound: "lane",
    traffic: [["woman", .53, .56, .72, .89, .09, .30, 27, 13]]
  }
];
const arrival = {
  id: "hero", name: "虹桥河畔", look: 55, sound: "water",
  water: [.02, .59, .345, .93],
  traffic: [["boat", .03, .67, .36, .65, .10, .08, 45, 23],
    ["porter", .56, .67, .51, 1.01, .10, .31, 29, 6]]
};

const byId = id => document.getElementById(id);
const scene = byId("city");
const layers = [byId("layer-a"), byId("layer-b")];
const gallery = byId("places");
const canvas = byId("atmosphere");
const ctx = canvas.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const clamp = (value, low, high) => Math.min(high, Math.max(low, value));
const interpolate = (a, b, t) => a + (b - a) * t;
const numbered = n => String(n).padStart(2, "0");

let index = -1;
let activeLayer = 0;
let pendingScene = 0;
let activeImage = new Image();
let activeScene = arrival;
let paused = reduceMotion.matches;
let touring = false;
let tourStarted = 0;
let elapsed = 0;
let lastFrame = 0;
let width = 1;
let height = 1;
let viewX = 0;
let viewY = 0;
let cameraX = 0;
let cameraY = 0;
let zoom = 0.025;
let moveZoom = 0.025;
let drag = null;
let soundEngine;

const sprites = Object.fromEntries(["boat", "porter", "woman", "cart"].map(name => {
  const img = new Image();
  img.src = "assets/" + name + ".webp";
  return [name, img];
}));
const photos = new Map();
function photo(id) {
  if (!photos.has(id)) {
    const img = new Image();
    img.src = "assets/" + id + ".webp";
    photos.set(id, img);
  }
  return photos.get(id);
}
activeImage = photo(arrival.id);

scenes.forEach((stop, i) => {
  const number = numbered(i + 1);
  const node = document.createElement("li");
  node.innerHTML = '<button class="route-point" type="button" data-scene="' + i +
    '"><span class="node" aria-hidden="true">' + number + '</span><span>' + stop.name + '</span></button>';
  byId("route-points").append(node);

  const card = document.createElement("button");
  card.type = "button";
  card.className = "place";
  card.dataset.scene = i;
  card.innerHTML = '<img loading="lazy" src="assets/' + stop.id + '.webp" alt="" width="768" height="512">' +
    '<span class="place-name"><small aria-hidden="true">' + number + '</small>' + stop.name +
    '<span class="arrow" aria-hidden="true">↗</span></span>';
  gallery.append(card);
});

function paintPhoto(stop, requested) {
  const picture = photo(stop.id);
  const display = () => {
    if (requested !== pendingScene || !picture.naturalWidth) return;
    const next = layers[1 - activeLayer];
    next.style.backgroundImage = 'url("' + picture.src + '")';
    next.style.backgroundPosition = "center " + stop.look + "%";
    next.style.setProperty("--pan-x", "0px");
    next.style.setProperty("--pan-y", "0px");
    next.style.setProperty("--scale", 1.025);
    next.classList.add("showing");
    layers[activeLayer].classList.remove("showing");
    activeLayer = 1 - activeLayer;
    activeImage = picture;
    activeScene = stop;
  };
  if (picture.complete) display();
  else picture.addEventListener("load", display, { once: true });
}

function toggleDetail(open) {
  byId("detail").hidden = !open;
  byId("detail-button").setAttribute("aria-expanded", String(open));
  byId("detail-button").lastElementChild.textContent = open ? "−" : "+";
}

function showStop(i, focus = false) {
  if (i < -1 || i >= scenes.length) return;
  index = i;
  const walking = i !== -1;
  const stop = walking ? scenes[i] : arrival;
  scene.classList.toggle("walking", walking);
  byId("intro").hidden = walking;
  byId("pins").hidden = walking;
  byId("opening-location").hidden = walking;
  for (const id of ["back", "walk-card", "walk-controls", "key-guide"]) byId(id).hidden = !walking;
  toggleDetail(false);
  viewX = viewY = cameraX = cameraY = 0;
  zoom = moveZoom = 0.025;
  tourStarted = elapsed;
  if (walking) {
    byId("walk-region").textContent = stop.region;
    byId("walk-title").textContent = stop.name;
    byId("walk-description").textContent = stop.description;
    byId("detail").textContent = stop.detail;
    byId("scene-count").textContent = numbered(i + 1) + " / " + numbered(scenes.length);
    byId("progress").style.width = ((i + 1) / scenes.length * 100) + "%";
    byId("prev").disabled = i === 0;
    byId("next").disabled = i === scenes.length - 1;
    if (i > 0) photo(scenes[i - 1].id);
    if (i < scenes.length - 1) photo(scenes[i + 1].id);
  }
  for (const button of document.querySelectorAll(".route-point, .place")) {
    if (Number(button.dataset.scene) === i) button.setAttribute("aria-current", "location");
    else button.removeAttribute("aria-current");
  }
  paintPhoto(stop, ++pendingScene);
  tuneSound(stop.sound);
  if (focus) {
    byId(walking ? "walk-title" : "start").focus({ preventScroll: true });
    scene.scrollIntoView({ block: "start" });
  }
}

function toggleTour(on) {
  touring = on;
  tourStarted = elapsed;
  const control = byId("tour");
  control.setAttribute("aria-pressed", String(on));
  control.innerHTML = on ? "Ⅱ <span>暂停漫游</span>" : "▷ <span>自动漫游</span>";
}

function stepBy(direction, focus = true) {
  toggleTour(false);
  showStop(clamp(index + direction, 0, scenes.length - 1), focus);
}

function toggleMotion(on) {
  paused = !on;
  const button = byId("motion");
  const label = on ? "暂停场景动态" : "播放场景动态";
  button.setAttribute("aria-pressed", String(!on));
  button.setAttribute("aria-label", label);
  button.title = label;
  button.textContent = on ? "Ⅱ" : "▷";
  if (!on) toggleTour(false);
}

byId("start").addEventListener("click", () => showStop(0, true));
byId("back").addEventListener("click", () => {
  toggleTour(false);
  showStop(-1, true);
});
byId("home").addEventListener("click", () => {
  if (index !== -1) {
    toggleTour(false);
    showStop(-1);
  }
});
byId("prev").addEventListener("click", () => stepBy(-1));
byId("next").addEventListener("click", () => stepBy(1));
byId("tour").addEventListener("click", () => {
  const enabling = !touring;
  if (enabling && paused) toggleMotion(true);
  toggleTour(enabling);
});
byId("motion").addEventListener("click", () => toggleMotion(paused));
byId("detail-button").addEventListener("click", () => toggleDetail(byId("detail").hidden));
document.addEventListener("click", event => {
  const control = event.target.closest("[data-scene]");
  if (control) {
    toggleTour(false);
    showStop(Number(control.dataset.scene), true);
  }
});

function galleryControls() {
  byId("gallery-prev").disabled = gallery.scrollLeft < 5;
  byId("gallery-next").disabled = gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 5;
}
for (const [id, sign] of [["gallery-prev", -1], ["gallery-next", 1]]) {
  byId(id).addEventListener("click", () => {
    const gap = Number.parseFloat(getComputedStyle(gallery).columnGap);
    const distance = gallery.firstElementChild.getBoundingClientRect().width + gap;
    gallery.scrollBy({ left: sign * distance, behavior: reduceMotion.matches ? "instant" : "smooth" });
  });
}
gallery.addEventListener("scroll", galleryControls, { passive: true });
galleryControls();

new IntersectionObserver(([entry]) => {
  document.querySelectorAll(".masthead nav a").forEach(link => {
    link.classList.toggle("nav-current", (link.hash === "#city") === entry.isIntersecting);
  });
}, { threshold: .35 }).observe(scene);

function setPan(x, y) {
  viewX = clamp(x, -1, 1);
  viewY = clamp(y, -1, 1);
}
scene.addEventListener("pointerdown", event => {
  if (index < 0 || event.button !== 0 || event.target.closest("a, button, .walk-card")) return;
  drag = { x: event.clientX, y: event.clientY, viewX, viewY };
  scene.setPointerCapture(event.pointerId);
  scene.classList.add("dragging");
});
scene.addEventListener("pointermove", event => {
  if (drag) setPan(drag.viewX + (event.clientX - drag.x) / 190, drag.viewY + (event.clientY - drag.y) / 170);
  else if (index === -1 && event.pointerType === "mouse" && !paused) {
    const rect = scene.getBoundingClientRect();
    setPan((event.clientX - rect.left) / width - .5, (event.clientY - rect.top) / height - .5);
  }
});
for (const name of ["lostpointercapture", "pointercancel"]) {
  scene.addEventListener(name, () => {
    drag = null;
    scene.classList.remove("dragging");
  });
}
scene.addEventListener("pointerleave", () => { if (index === -1) setPan(0, 0); });

window.addEventListener("keydown", event => {
  if (index < 0 || event.altKey || event.ctrlKey || event.metaKey) return;
  if (scene.getBoundingClientRect().bottom < 150 || event.target.closest?.("input, textarea, select")) return;
  const key = event.key.toLowerCase();
  if (["w", "s", "arrowup", "arrowdown", "arrowleft", "arrowright", "a", "d"].includes(key)) {
    event.preventDefault();
    if (event.repeat && ["w", "s", "arrowup", "arrowdown"].includes(key)) return;
    if (key === "w" || key === "arrowup") stepBy(1);
    else if (key === "s" || key === "arrowdown") stepBy(-1);
    else setPan(viewX + (["a", "arrowleft"].includes(key) ? .32 : -.32), viewY);
  } else if (key === "escape") {
    if (!byId("detail").hidden) toggleDetail(false);
    else {
      toggleTour(false);
      showStop(-1, true);
    }
  }
});

function resize() {
  width = scene.clientWidth;
  height = scene.clientHeight;
  const ratio = Math.min(devicePixelRatio, 1.5);
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  galleryControls();
}
new ResizeObserver(resize).observe(scene);
resize();

const ripples = Array.from({ length: 44 }, () => ({
  x: Math.random(), y: Math.random(), phase: Math.random() * 8, size: .002 + Math.random() * .014
}));
function renderMotion(time, dt) {
  const walks = index >= 0;
  const drift = paused || walks ? 0 : Math.sin(time * .18) * 2.5;
  const panRange = walks ? Math.min(width * .037, 65) : Math.min(width * .008, 10);
  const yRange = walks ? Math.min(height * .049, 35) : 4;
  const ease = 1 - Math.exp(-dt * 10);
  cameraX = interpolate(cameraX, viewX * panRange + drift, ease);
  cameraY = interpolate(cameraY, viewY * yRange, ease);
  if (touring) {
    moveZoom = 0.026 + clamp((time - tourStarted) / 14, 0, 1) * .032;
  }
  const targetZoom = Math.max(moveZoom, Math.abs(cameraX) * 2 / width + .009,
    Math.abs(cameraY) * 2 / height + .009);
  zoom = interpolate(zoom, targetZoom, ease);
  const layer = layers[activeLayer];
  layer.style.setProperty("--pan-x", cameraX + "px");
  layer.style.setProperty("--pan-y", cameraY + "px");
  layer.style.setProperty("--scale", 1 + zoom);

  ctx.clearRect(0, 0, width, height);
  if (!activeImage.naturalWidth) return;
  const sceneRatio = Math.max(width / activeImage.naturalWidth, height / activeImage.naturalHeight);
  const imageW = activeImage.naturalWidth * sceneRatio;
  const imageH = activeImage.naturalHeight * sceneRatio;
  const scale = 1 + zoom;
  const px = x => width / 2 + (x - .5) * imageW * scale + cameraX;
  const py = y => height / 2 + (y * imageH + (height - imageH) * activeScene.look / 100 - height / 2) * scale + cameraY;

  const water = activeScene.water;
  if (water) {
    ctx.lineCap = "round";
    const [left, top, right, bottom] = water;
    for (const ripple of ripples) {
      const y = py(interpolate(top, bottom, ripple.y));
      const progress = (ripple.x + time * (.01 + ripple.y * .006)) % 1;
      const x = px(interpolate(left, right, progress));
      const pulse = Math.max(0, Math.sin(time * 1.5 + ripple.phase));
      const fade = Math.sin(progress * Math.PI);
      ctx.strokeStyle = "rgba(249,240,208," + (pulse * fade * .26) + ")";
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + ripple.size * imageW * (ripple.y + .3), y + .4);
      ctx.stroke();
    }
  }

  for (const actor of activeScene.traffic) {
    const [kind, startX, startY, endX, endY, startSize, endSize, duration, offset] = actor;
    const sprite = sprites[kind];
    if (!sprite.naturalWidth) continue;
    const t = (time + offset) % duration / duration;
    const x = px(interpolate(startX, endX, t));
    const y = py(interpolate(startY, endY, t));
    const h = interpolate(startSize, endSize, t) * imageH * scale;
    const w = h * sprite.naturalWidth / sprite.naturalHeight;
    const boat = kind === "boat";
    const step = boat ? Math.sin(time * 2) * 1.1 : Math.sin(time * 13 + offset) * h * .008;
    const fade = Math.min(t * 13, (1 - t) * 13, 1);
    ctx.save();
    ctx.globalAlpha = fade * .9;
    ctx.fillStyle = boat ? "#273d2d42" : "#29261951";
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.ellipse(0, -1, w * .44, Math.max(1, h * .034), 0, 0, 2 * Math.PI);
    ctx.fill();
    if (boat) {
      ctx.strokeStyle = "#faf2d48a";
      ctx.lineWidth = 1;
      const behind = endX < startX ? 1 : -1;
      ctx.beginPath();
      ctx.moveTo(behind * w * .25, -1);
      ctx.quadraticCurveTo(behind * w * .54, 2, behind * w * .85, 7);
      ctx.stroke();
    }
    if (endX < startX) ctx.scale(-1, 1);
    ctx.drawImage(sprite, -w / 2, -h + step, w, h);
    ctx.restore();
  }

  if (activeScene.foreground) {
    ctx.save();
    ctx.beginPath();
    for (const [x, y] of activeScene.foreground) ctx.lineTo(px(x), py(y));
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(activeImage, px(0), py(0), imageW * scale, imageH * scale);
    ctx.restore();
  }
}

function day(time) {
  const minutes = 8 * 60 + (144 + Math.floor(time / 1.85)) % (9 * 60);
  const hour = Math.floor(minutes / 60);
  const clock = numbered(hour) + ":" + numbered(minutes % 60);
  if (byId("clock").textContent !== clock) {
    byId("clock").textContent = clock;
    byId("clock").dateTime = clock;
    const hours = ["辰时", "巳时", "午时", "未时", "申时"];
    byId("period").textContent = hours[Math.floor((hour - 7) / 2)];
    scene.style.setProperty("--warmth", ((hour - 8) / 9 * .16).toFixed(3));
  }
}

function animate(frame) {
  const dt = lastFrame ? clamp((frame - lastFrame) / 1000, 0, .06) : .016;
  lastFrame = frame;
  if (!paused) elapsed += dt;
  if (touring && elapsed - tourStarted > 13) showStop((index + 1) % scenes.length);
  renderMotion(elapsed, dt);
  day(elapsed);
  requestAnimationFrame(animate);
}

const acoustics = {
  field: [380, .09, .012, .062], water: [530, .14, .008, .014],
  wharf: [640, .12, .037, .012], market: [920, .09, .091, .016],
  tavern: [580, .044, .11, .004], lane: [420, .052, .025, .034]
};

function tuneSound(name) {
  if (!soundEngine) return;
  const [frequency, water, voices, birds] = acoustics[name];
  const { audio, windFilter, wind, crowd, bird } = soundEngine;
  const time = audio.currentTime;
  windFilter.frequency.setTargetAtTime(frequency, time, .45);
  wind.gain.setTargetAtTime(water, time, .45);
  crowd.gain.setTargetAtTime(voices, time, .55);
  bird.gain.setTargetAtTime(birds, time, .55);
}

function makeSound() {
  const audio = new AudioContext();
  const duration = 7 * audio.sampleRate;
  const noise = audio.createBuffer(1, duration, audio.sampleRate);
  const samples = noise.getChannelData(0);
  let previous = 0;
  for (let i = 0; i < samples.length; i++) {
    previous = previous * .92 + (Math.random() * 2 - 1) * .079;
    samples[i] = previous;
  }
  const output = audio.createGain();
  output.gain.value = 0;
  output.connect(audio.destination);
  function bed(filterType, frequency, speed) {
    const source = audio.createBufferSource();
    const filter = audio.createBiquadFilter();
    const gain = audio.createGain();
    filter.type = filterType;
    filter.frequency.value = frequency;
    source.buffer = noise;
    source.loop = true;
    source.playbackRate.value = speed;
    source.connect(filter).connect(gain).connect(output);
    source.start();
    return { gain, filter };
  }
  const wind = bed("lowpass", 500, .69);
  const crowd = bed("bandpass", 590, 1.18);
  const bird = audio.createGain();
  bird.connect(output);
  return { audio, output, wind: wind.gain, windFilter: wind.filter, crowd: crowd.gain, bird };
}

function chirp() {
  if (soundEngine && byId("sound").ariaPressed === "true" && !document.hidden && !paused) {
    const { audio, bird } = soundEngine;
    for (let i = 0; i < 3; i++) {
      const flight = audio.createOscillator();
      const note = audio.createGain();
      const t = audio.currentTime + i * .125;
      flight.frequency.setValueAtTime(1500 + i * 70, t);
      flight.frequency.exponentialRampToValueAtTime(2600 - i * 140, t + .065);
      note.gain.setValueAtTime(.0001, t);
      note.gain.exponentialRampToValueAtTime(.24, t + .023);
      note.gain.exponentialRampToValueAtTime(.0001, t + .081);
      flight.connect(note).connect(bird);
      flight.start(t);
      flight.stop(t + .093);
    }
  }
}

byId("sound").addEventListener("click", async () => {
  const button = byId("sound");
  const active = button.ariaPressed === "true";
  try {
    soundEngine ??= makeSound();
    await soundEngine.audio.resume();
    tuneSound(index < 0 ? arrival.sound : scenes[index].sound);
    soundEngine.output.gain.setTargetAtTime(active ? 0 : .62, soundEngine.audio.currentTime, .15);
    button.ariaPressed = String(!active);
    byId("sound-text").innerHTML = '环境音<span class="optional"> · ' + (active ? "关" : "开") + "</span>";
    if (!active) chirp();
  } catch {
    byId("sound-text").textContent = "环境音不可用";
  }
});
window.setInterval(chirp, 6100);
toggleMotion(!paused);
requestAnimationFrame(animate);
