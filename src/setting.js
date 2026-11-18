import * as T from 'three';

export const groundY = (x, z) => .09 * Math.sin(x * .075) + .10 * Math.sin(z * .18)
  + Math.max(0, Math.abs(z) - 37) * .012 * (1 + Math.sin(x * .025 + z * .10));
export const riverCenter = x => 3.5 * Math.sin(x / 55) + 2.1 * Math.sin(x / 26);
export const riverHalf = x => 14.9 + 1.4 * Math.sin(x / 38 + .7);
export const waterY = -.73;
export const bridgeX = -4;
export const bridgeSpan = 21.8;
export const bridgeWidth = 10.6;
export const arch = z => {
  const t = Math.min(1, Math.abs(z - riverCenter(bridgeX)) / bridgeSpan);
  return .13 + 5.65 * Math.pow(1 - t * t, 1.28);
};
export const bounds = { west: -164, east: 178, south: 75, north: -74 };

export function seeded(seed) {
  let value = seed >>> 0;
  return () => {
    value = (Math.imul(value, 1664525) + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

export const stops = [
  {
    name: '郊野', area: '城外田畴', x: -126, z: 25, look: [-112, 1.9, 18], sound: 'field',
    note: '小路穿过麦地。田埂那头有人挑担，沿河再走一段就是货栈。',
    path: [[-115, 23], [-102, 21.2], [-90, 20]]
  }, {
    name: '汴河', area: '河岸纤道', x: -79, z: 18, look: [-53, 1, 4], sound: 'river',
    note: '货船顺着水道前行。靠近虹桥时，船工把高高的桅杆放低。',
    path: [[-68, 18], [-55, 18], [-46, 19]]
  }, {
    name: '码头', area: '河岸货栈', x: -36, z: 18, look: [-27, 1.1, 12], sound: 'dock',
    note: '脚夫从船上挑货过跳板。货送进栈，再由推车沿河运走。',
    path: [[-27, 20], [-16, 21], [-7, 23], [-4, 22]]
  }, {
    name: '虹桥', area: '汴河渡口', x: -4, z: -.1, look: [-3.5, 5.8, -11], sound: 'market',
    note: '桥栏边摆着果子、胡饼和茶水。站在摊间往河里望，还能看见货船过桥。',
    path: [[-4, -10], [-4, -22], [3, -23], [14, -23]]
  }, {
    name: '街市', area: '城外大街', x: 23, z: -24, look: [42, 1.3, -24], sound: 'market',
    note: '布卷和果子摆在棚下，买客在摊前挑拣。赶路的骑手沿街心经过。',
    path: [[32, -24], [43, -25], [46, -26.2]]
  }, {
    name: '商铺', area: '沿街货铺', x: 48, z: -30.7, look: [49, 1.35, -34.6], sound: 'shop',
    note: '店主在柜后招呼。买客凑近看青瓷，挑好便转身出门。',
    path: [[48, -27], [53, -24], [64, -24], [68, -27]]
  }, {
    name: '酒楼', area: '临街酒肆', x: 69, z: -31.0, look: [65.7, 1.46, -36], sound: 'shop',
    note: '从木柱之间走进去，沿窗摆着桌凳。屋外的街声还听得见。',
    path: [[69, -27], [74, -24], [82, -24], [90, -25]]
  }, {
    name: '城门', area: '入城门道', x: 90.9, z: -25, look: [105, 5.6, -25], sound: 'market',
    note: '城头的守卒扶矛眺望，门洞两边也有人值守。巡卒沿大街走一圈，再折回城门。',
    path: [[105, -25], [115, -25], [124, -25], [129, -29], [129, -35]]
  }, {
    name: '城内街巷', area: '坊巷人家', x: 129, z: -45, look: [130, 1.6, -59], sound: 'lane',
    note: '屋檐下晾着布，巡卒沿坊巷走过。窄巷两头都有通往街市的小路。',
    path: []
  }
];

export const scenic = [
  { position: [36, 8.4, 24.3], look: [-11, 3.2, 7.5] },
  { position: [-40, 9.0, 26], look: [8, 3.0, -11] },
  { position: [5, 23, -12], look: [48, 0, -25] }
];

export function createTextures() {
  const random = seeded(5905);
  const size = 256;
  const grid = new Float32Array(64 * 64).map(() => random());
  const mix = T.MathUtils.lerp;
  function noise(x, y) {
    const ix = Math.floor(x), iy = Math.floor(y);
    let fx = x - ix, fy = y - iy;
    fx *= fx * (3 - 2 * fx);
    fy *= fy * (3 - 2 * fy);
    const at = (u, v) => grid[((v % 64 + 64) % 64) * 64 + ((u % 64 + 64) % 64)];
    return mix(mix(at(ix, iy), at(ix + 1, iy), fx), mix(at(ix, iy + 1), at(ix + 1, iy + 1), fx), fy);
  }
  const texture = (kind, rgb) => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    const data = ctx.createImageData(size, size);
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const u = x / size, v = y / size;
      const coarse = noise(u * 8, v * 8);
      const grain = noise(u * 64, v * 64);
      let tone = 1 + (coarse - .5) * .22 + (grain - .5) * .15 + (random() - .5) * .09;
      if (kind === 'wood') {
        const meander = noise(u * 4, v * 4) * 2.1 + Math.sin(v * 7 + u * 3) * .5;
        const ring = Math.pow(.5 + .5 * Math.sin(u * 400 + meander * 7), 8);
        tone += (noise(u * 56, v * 4) - .5) * .29 - ring * .13;
      }
      if (kind === 'cloth') {
        tone += (x % 3 === 0 ? -.054 : .024) + (y % 3 === 0 ? -.055 : .024);
      }
      if (kind === 'stone' || kind === 'pave') {
        const by = Math.floor(v * 6);
        const stagger = kind === "pave" ? .045 : .013;
        const ux = (u * 5 + by * .5 + stagger * Math.sin(y * .17)) % 1;
        const vy = (v * 6) % 1;
        if (ux < .037 || vy < .062) tone *= kind === "pave" ? .78 : .64;
        else tone += (noise(Math.floor(u * 5 + by * .5) + 9, by + 11) - .5) * .19;
      }
      if (kind === 'tile') {
        const col = (u * 8) % 1;
        const row = (v * 6) % 1;
        const round = Math.pow(Math.sin(Math.PI * col), .6);
        tone = tone * (.72 + round * .30) - (row < .07 ? .19 : 0);
        if (col < .065) tone += .19;
      }
      if (kind === 'grass') tone += (noise(u * 18, v * 32) - .5) * .26;
      const i = (y * size + x) * 4;
      for (let cn = 0; cn < 3; cn++) data.data[i + cn] = rgb[cn] * tone;
      data.data[i + 3] = 255;
    }
    ctx.putImageData(data, 0, 0);
    const map = new T.CanvasTexture(canvas);
    map.colorSpace = T.SRGBColorSpace;
    map.wrapS = map.wrapT = T.RepeatWrapping;
    map.anisotropy = 8;
    return map;
  };
  const result = {};
  for (const [name, values] of Object.entries({
    oldwood: ['wood', [161, 121, 85]], timber: ['wood', [133, 96, 67]], beam: ['wood', [106, 77, 55]],
    plaster: ['plain', [207, 180, 134]], wall: ['plain', [189, 167, 133]], stone: ['stone', [155, 150, 131]],
    tile: ['tile', [123, 121, 113]], tileDark: ['tile', [112, 111, 104]], brick: ['stone', [135, 129, 110]],
    linen: ['cloth', [224, 197, 142]], sage: ['cloth', [144, 153, 118]], rust: ['cloth', [160, 109, 75]],
    straw: ['cloth', [189, 155, 92]], soil: ['plain', [159, 138, 98]], path: ['plain', [174, 151, 112]], pave: ['pave', [166, 154, 128]], grass: ['grass', [119, 132, 66]]
  })) result[name] = texture(...values);

  const normal = document.createElement('canvas');
  normal.width = normal.height = 128;
  const normalCtx = normal.getContext('2d');
  const pixels = normalCtx.createImageData(128,128);
  for (let y = 0; y < 128; y++) for (let x = 0; x < 128; x++) {
    const phase = 2 * Math.PI / 128;
    const a = x * phase * 7 + y * phase * 2;
    const b = x * phase * 3 - y * phase * 8 + Math.sin(x * phase * 2);
    const c = x * phase * 9 + y * phase * 11;
    const i = (y * 128 + x) * 4;
    pixels.data[i] = 127 + 32 * Math.cos(a) + 23 * Math.cos(b) + 9 * Math.sin(c);
    pixels.data[i+1] = 127 + 17 * Math.cos(a) - 33 * Math.cos(b) + 13 * Math.sin(c);
    pixels.data[i+2] = 244;
    pixels.data[i+3] = 255;
  }
  normalCtx.putImageData(pixels,0,0);
  result.waterNormal = new T.CanvasTexture(normal);
  result.waterNormal.wrapS = result.waterNormal.wrapT = T.RepeatWrapping;
  return result;
}
