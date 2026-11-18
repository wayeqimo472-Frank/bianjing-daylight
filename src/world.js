import * as T from 'three';
import { arch, bounds, bridgeSpan, bridgeWidth, bridgeX, groundY, riverCenter, riverHalf, seeded } from './setting.js';

const V = (x, y, z) => new T.Vector3(x, y, z);
const unitY = V(0, 1, 0);
const unit = new T.BoxGeometry(1, 1, 1);
const cylinder = new T.CylinderGeometry(1, 1, 1, 9);
const foot = new T.CylinderGeometry(.7, 1, 1, 10);
const eaveTile = new T.CylinderGeometry(1, 1, 1, 7);
const rock = new T.DodecahedronGeometry(1, 0);
const pennant = new T.OctahedronGeometry(1);

function material(map, options = {}) {
  return new T.MeshStandardMaterial({ map, roughness: .91, ...options });
}

export function createWorld(scene, textures, wind) {
  const random = seeded(1119);
  const materials = {};
  for (const key of ['oldwood','timber','beam','plaster','wall','stone','tile','tileDark','brick','linen','sage','rust','straw','soil','path','pave','grass']) {
    materials[key] = material(textures[key]);
  }
  Object.assign(materials, {
    bark: material(textures.beam, { color: 0x8c8b68 }),
    lacquer: material(textures.timber, { color: 0xb36b50 }),
    black: material(null, { color: 0x31251a }),
    ceramic: material(null, { color: 0xa2b396, roughness: .34, metalness: .03 }),
    paleCeramic: material(null, { color: 0xc9b98d, roughness: .49 }),
    iron: material(null, { color: 0x554735, roughness: .59, metalness: .33 }),
    green: material(null, { color: 0x80894c }),
    foliage: material(null, { vertexColors: true, side: T.DoubleSide, roughness: 1 }),
  });

  const clothMat = materials.linen.clone();
  clothMat.side = T.DoubleSide;
  clothMat.onBeforeCompile = shader => {
    shader.uniforms.windTime = wind;
    shader.vertexShader = 'uniform float windTime;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>',
      '#include <begin_vertex>\n transformed.y += .065 * sin(windTime * 1.8 + position.x * 2.4 + position.z * 3.0);');
  };
  materials.awning = clothMat;
  materials.foliage.onBeforeCompile = shader => {
    shader.uniforms.windTime = wind;
    shader.vertexShader = 'uniform float windTime;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>',
      '#include <begin_vertex>\n transformed.x += .060 * sin(windTime * 1.40 + position.z * .28 + position.y * 1.32) * min(position.y,.9);');
  };

  const boughCanvas=document.createElement('canvas');
  boughCanvas.width=boughCanvas.height=128;
  const boughCtx=boughCanvas.getContext('2d');
  const leafRandom=seeded(883);
  const pigments=['#738640','#9aa65b','#7e914b','#637742','#879750','#a1aa63','#5c6d38'];
  for(let i=0;i<520;i++){
    const a=leafRandom()*Math.PI*2,r=Math.sqrt(leafRandom())*.95;
    const x=64+Math.cos(a)*r*59,y=64+Math.sin(a)*r*56;
    const radius=2.1+leafRandom()*4.2;
    boughCtx.fillStyle=pigments[Math.floor(leafRandom()*pigments.length)];
    boughCtx.beginPath();
    boughCtx.ellipse(x,y,radius,radius*(.25+leafRandom()*.29),a-leafRandom()*1.4,0,Math.PI*2);
    boughCtx.fill();
  }
  const boughTexture=new T.CanvasTexture(boughCanvas);
  boughTexture.colorSpace=T.SRGBColorSpace;
  boughTexture.anisotropy=4;
  materials.bough=material(boughTexture,{alphaTest:.45,side:T.DoubleSide});
  materials.bough.onBeforeCompile=materials.foliage.onBeforeCompile;
  const meshGroups = new Map();
  const surfaces = new Map();
  const obstacles = [];
  const decks = [];
  const trades = [];
  const gatePosts = [];
  const gateStairs = [];
  const towerObstacles = [];
  let gateTerrace;
  const signs = new Map();
  const object = new T.Object3D();
  const variation = () => .80 + random() * .23;
  const color = new T.Color();

  function solid(geo, mat, position, scale, rotation = 0, shade = variation()) {
    const id = mat + '/' + geo.id;
    if (!meshGroups.has(id)) meshGroups.set(id, { geo, mat, entries: [] });
    object.position.copy(position);
    object.scale.copy(scale);
    if (typeof rotation === 'number') object.rotation.set(0, rotation, 0);
    else object.quaternion.copy(rotation);
    object.updateMatrix();
    meshGroups.get(id).entries.push([object.matrix.clone(), shade]);
  }
  function box(mat, x, y, z, w, h, d, rotation = 0, shade) {
    solid(unit, mat, V(x,y,z), V(w,h,d), rotation, shade);
  }
  function beam(mat, a, b, width, depth = width, geo = unit) {
    const direction = b.clone().sub(a);
    const rotation = new T.Quaternion().setFromUnitVectors(unitY, direction.clone().normalize());
    solid(geo, mat, a.clone().lerp(b,.5), V(width, direction.length(), depth), rotation);
  }
  function quad(mat, a, b, c, d, UV = [0,0,1,1], tint = [1,1,1]) {
    if (!surfaces.has(mat)) surfaces.set(mat, { points: [], uv: [], colors: [] });
    const surface = surfaces.get(mat);
    for (const p of [a,b,c,a,c,d]) {
      surface.points.push(p.x,p.y,p.z);
      surface.colors.push(...tint);
    }
    const [u,v,U,W] = UV;
    surface.uv.push(u,v,U,v,U,W,u,v,U,W,u,W);
  }
  function barrier(x,z,w,d) {
    obstacles.push({ x0:x-w/2, x1:x+w/2, z0:z-d/2, z1:z+d/2 });
  }
  function local(x,y,z,theta) {
    const cos = Math.cos(theta), sin = Math.sin(theta);
    return (a,b,c) => V(x + a*cos + c*sin, y + b, z - a*sin + c*cos);
  }
  function localBox(f, theta, mat, x,y,z,w,h,d,shade) {
    const p = f(x,y,z);
    box(mat,p.x,p.y,p.z,w,h,d,theta,shade);
  }
  function localBarrier(f, a, b, w, d) {
    const k = f(a-w/2,0,b-d/2);
    const l = f(a+w/2,0,b+d/2);
    barrier((k.x+l.x)/2, (k.z+l.z)/2, Math.abs(k.x-l.x), Math.abs(k.z-l.z));
  }

  function towerBarrier(f,a,b,w,d) {
    const p=f(a-w/2,0,b-d/2);
    const q=f(a+w/2,0,b+d/2);
    towerObstacles.push({x0:Math.min(p.x,q.x),x1:Math.max(p.x,q.x),z0:Math.min(p.z,q.z),z1:Math.max(p.z,q.z)});
  }

  function trade(f, yaw, offset, sellerDepth, buyerDepth, entryDepth, goods) {
    trades.push({ seller:f(offset,0,sellerDepth), buyer:f(offset,0,buyerDepth),
      entry:f(offset+.69,0,entryDepth), yaw, goods });
  }

  function signTexture(text, upright) {
    const key = text + '/' + upright;
    if (signs.has(key)) return signs.get(key);
    const c = document.createElement('canvas');
    c.width = upright ? 96 : 200;
    c.height = upright ? 200 : 74;
    const ctx = c.getContext('2d');
    ctx.fillStyle = upright ? '#bca877' : '#5b3726';
    ctx.fillRect(0,0,c.width,c.height);
    ctx.strokeStyle = upright ? '#6a4129' : '#a9945e';
    ctx.lineWidth = 4;
    ctx.strokeRect(7,7,c.width-14,c.height-14);
    ctx.fillStyle = upright ? '#342617' : '#ece0b2';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold ' + (upright ? 61 : 47) + 'px "Songti SC", SimSun, serif';
    if (upright) [...text].forEach((letter,i) => ctx.fillText(letter,48,55+i*76));
    else ctx.fillText(text,c.width/2,c.height/2+1);
    const map = new T.CanvasTexture(c);
    map.colorSpace = T.SRGBColorSpace;
    const result = material(map, { side: T.DoubleSide });
    signs.set(key,result);
    return result;
  }
  function sign(f, theta, text, x,y,z,w,h, upright = false) {
    const face = new T.Mesh(new T.PlaneGeometry(w,h), signTexture(text, upright));
    face.position.copy(f(x,y,z));
    face.rotation.y = theta;
    scene.add(face);
  }

  function land() {
    for (const side of [-1, 1]) {
      const bank = x => riverCenter(x) + side * riverHalf(x);
      for (let x = -267; x < 273; x += 3) {
        const end = x+3;
        const rural = side > 0 ? x < -88 || x > 70 : x < -46 || x > 182;
        for (let row = 0; row < 20; row++) {
          const dz = 4.15;
          const high = (p,q) => groundY(p,q) - .04;
          const z0=bank(x)+side*row*dz, z1=bank(x)+side*(row+1)*dz;
          const e0=bank(end)+side*row*dz, e1=bank(end)+side*(row+1)*dz;
          const tone = .91 + .07*Math.sin(x*.037+row*.59)+.09*random();
          quad(rural ? 'grass' : 'soil', V(x,high(x,z0),z0), V(x,high(x,z1),z1),
            V(end,high(end,e1),e1), V(end,high(end,e0),e0), [x/5,z0/5,end/5,z1/5], [tone,tone,tone]);
        }
        const z=bank(x), e=bank(end);
        quad('soil',V(x,groundY(x,z),z),V(end,groundY(end,e),e),
          V(end,-1.61,e-side*1.45),V(x,-1.61,z-side*1.45),[x/4,0,end/4,1]);
      }
    }
    for (let i=0; i<850; i++) {
      const x=-179+random()*367, side=random() < .55 ? 1 : -1;
      const bank=riverCenter(x)+side*riverHalf(x);
      const z=bank+side*(random()*.64-.31);
      if ((x > -11 && x < 4) || (x > -47 && x < -20 && side===1)) continue;
      const size=.17+random()*.62;
      solid(rock,'stone',V(x,groundY(x,z)-size*.25,z),V(size,.22+size*.55,size*.57),random()*6.28);
    }
  }

  function lane(points, width, mat = 'path') {
    for (let i = 1; i < points.length; i++) {
      const [ax,az] = points[i-1], [bx,bz] = points[i];
      const dx=bx-ax, dz=bz-az;
      const distance=Math.hypot(dx,dz), steps=Math.ceil(distance/1.75);
      const nx = -dz/distance, nz = dx/distance;
      const point = (s, offset) => {
        const jitter = 1 + .036*Math.sin((ax+dx*s)*1.67+(az+dz*s)*.79);
        const px=ax+dx*s+nx*offset*jitter, pz=az+dz*s+nz*offset*jitter;
        return V(px,groundY(px,pz)+(mat==='pave'?.044:.023),pz);
      };
      for (let j=0;j<steps;j++) {
        const stride=distance/steps/4.1;
        quad(mat,point(j/steps,-width/2),point(j/steps,width/2),
          point((j+1)/steps,width/2),point((j+1)/steps,-width/2),[0,j*stride,width/4.4,(j+1)*stride]);
      }
    }
  }

  function roof(f, w, d, base, rise, mat = 'tile', detail = true) {
    const xHalf=w/2, zHalf=d/2;
    const top = (x,t,side) => {
      const xcurve=.29*Math.pow(Math.min(1,Math.abs(x/xHalf)),5.4);
      return f(x,base+rise*Math.pow(1-t,1.37)+xcurve*(.46+.89*t*t),side*t*zHalf);
    };
    for (const side of [-1,1]) {
      const steps=8;
      for (let row=0;row<steps;row++) {
        for (let col=0;col<12;col++) {
          const a=-xHalf+w*col/12, b=-xHalf+w*(col+1)/12;
          quad(mat, top(a,row/steps,side),top(b,row/steps,side),
            top(b,(row+1)/steps,side),top(a,(row+1)/steps,side),
            [a/2.2,row*d/(steps*3.5),b/2.2,(row+1)*d/(steps*3.5)]);
        }
      }
      for (let k=0;k<12;k++) {
        const a=top(-xHalf+w*k/12,1,side), b=top(-xHalf+w*(k+1)/12,1,side);
        beam('beam',a,b,.16,.19);
      }
      if (!detail) continue;
      for (let tile = 0; tile < Math.floor(w/.28); tile++) {
        const x=-xHalf+.12+tile*.28;
        const a=top(x,.94,side), b=top(x,1,side);
        b.z += side*.025;
        a.y += .024; b.y += .02;
        beam(mat,a,b,.074,.074,eaveTile);
        if (tile % 2===0) {
          const support=top(x,1,side);
          beam('timber',support.clone().add(V(0,-.10,0)),
            top(x,.82,side).add(V(0,-.23,0)),.084,.092);
        }
      }
      for (const edge of [-xHalf,xHalf]) {
        for (let k=0;k<8;k++) beam('beam',top(edge,k/8,side),top(edge,(k+1)/8,side),.14,.11);
      }
    }
    for (let k=0;k<12;k++) {
      const a=top(-xHalf+w*k/12,0,1), b=top(-xHalf+w*(k+1)/12,0,1);
      a.y+=.073; b.y+=.073;
      beam(mat,a,b,.175,.155,cylinder);
    }
    for (const side of [-1,1]) {
      const end=top(side*xHalf,0,1), tip=top(side*xHalf,0,1);
      tip.x += side*.21; tip.y += .23;
      beam(mat,end,tip,.13,.13,cylinder);
    }
  }

  function shutter(f, theta, x,y,z,w,h) {
    const parts = (mat,a,b,c,d,e,g) => localBox(f,theta,mat,a,b,c,d,e,g);
    parts('black',x,y,z,w,h,.075);
    for (const side of [-1,1]) {
      parts('oldwood',x+side*w/2,y,z+.042,.095,h+.10,.10);
      parts('oldwood',x,y+side*h/2,z+.042,w,.09,.10);
    }
    for (let i=1; i<7; i++) parts('timber',x-w/2+i*w/7,y,z+.051,.041,h,.058);
    for (let i=1; i<5; i++) parts('timber',x,y-h/2+i*h/5,z+.049,w,.036,.058);
  }

  function jug(x,y,z,scale=.5,mat='ceramic') {
    solid(foot,mat,V(x,y+scale*.24,z),V(scale*.33,scale*.47,scale*.33),random()*6);
    solid(cylinder,mat,V(x,y+scale*.49,z),V(scale*.24,scale*.13,scale*.24),0);
    solid(cylinder,'black',V(x,y+scale*.562,z),V(scale*.15,.012,scale*.15),0);
  }
  function crate(x,y,z,scale=.73) {
    box('oldwood',x,y+scale*.38,z,scale,scale*.76,scale*.77);
    for (const i of [-1,1]) box('beam',x+i*scale*.31,y+scale*.40,z,scale*.10,scale*.82,scale*.81);
    box('timber',x,y+scale*.78,z,scale*1.02,.057,scale*.79);
  }
  function basket(x,y,z,scale=.74) {
    solid(foot,'straw',V(x,y+scale*.26,z),V(scale*.43,scale*.52,scale*.43),Math.PI);
    solid(cylinder,'oldwood',V(x,y+scale*.56,z),V(scale*.45,.053,scale*.45));
    solid(cylinder,'straw',V(x,y+scale*.583,z),V(scale*.37,.039,scale*.37));
  }

  function awning(f, theta, w, depth, height, front) {
    const cols = 10, rows = 5;
    const p = (a,b) => f((a/cols-.5)*w,
      height - .54*(b/rows) - .22*Math.sin(Math.PI*b/rows) + .035*Math.sin(a*1.8)*b/rows,
      front + b/rows*depth);
    for (let j=0;j<rows;j++) {
      for (let i=0;i<cols;i++) quad('awning',p(i,j),p(i+1,j),p(i+1,j+1),p(i,j+1),
        [i/5,j/4,(i+1)/5,(j+1)/4]);
    }
    for (let i=0;i<cols;i++) {
      const a=p(i,rows), b=p(i+1,rows);
      quad('awning',a,b,b.clone().add(V(0,-.18,0)),a.clone().add(V(0,-.18,0)));
    }
    for (const side of [-.47,.47]) {
      const base=f(side*w,0,front+depth-.10);
      const top=f(side*w,height-.51,front+depth-.10);
      beam('oldwood',base,top,.046,.046,cylinder);
      beam('timber',top,f(side*w,height,front-.10),.047,.047,cylinder);
      localBarrier(f,side*w,front+depth-.10,.09,.09);
    }
    beam('timber',p(0,rows),p(cols,rows),.044,.044,cylinder);
  }

  function house(x,z,w,d,{ theta=0, floors=1, kind='home', label, simple=false, roofKind='tile' }={}) {
    const ground=groundY(x,z);
    const f=local(x,ground,z,theta);
    const body=floors===1 ? 3.31 : 6.13;
    const front=d/2, back=-d/2;
    const shop=['store','tavern','market'].includes(kind);
    const detail=!simple;
    const part=(mat,a,b,c,X,Y,Z,shade)=>localBox(f,theta,mat,a,b,c,X,Y,Z,shade);
    part('stone',0,.045,0,w+.05,.24,d+.10);
    if (!shop) {
      part('plaster',0,body/2,0,w,body,d);
      localBarrier(f,0,0,w,d);
    } else {
      part('plaster',0,body/2,back,w,body,.23);
      localBarrier(f,0,back,w,.28);
      for (const s of [-1,1]) {
        part('plaster',s*w/2,body/2,0,.20,body,d);
        localBarrier(f,s*w/2,0,.24,d);
      }
      part('beam',0,body-.17,0,w,.32,d);
      for (let a=-d/2+.12; a<d/2; a+=.28) part('oldwood',0,.181,a,w-.25,.08,.24);
      if (floors===2) part('beam',0,3.20,0,w,.20,d);
      const entrance = f(0,ground+.23,front);
      const sideX=theta===0 || theta===Math.PI;
      decks.push({ x0:entrance.x-(sideX?w:d)/2, x1:entrance.x+(sideX?w:d)/2,
        z0:z-(sideX?d:w)/2, z1:z+(sideX?d:w)/2, y:ground+.225 });
    }

    const bays=Math.max(2,Math.round(w/2.1));
    for (let i=0;i<=bays;i++) {
      const a=(i/bays-.5)*w;
      for (const face of [front+.024,back-.025]) {
        part(floors===2?'lacquer':'timber',a,body/2,face,.17,body,.175);
        part('stone',a,.14,face,.28,.21,.27);
        if (detail) {
          const s=(i===0?1:i===bays?-1:1);
          beam('timber',f(a,body-.70,face),f(a+s*.48,body-.15,face),.11,.12);
        }
      }
    }
    for (const level of [.75,3.02,body-.20]) {
      if (level!==.75 || !shop) part('timber',0,level,front+.075,w+.19,.14,.14);
    }
    if (detail) {
      for (const side of [-1,1]) {
        part('timber',side*(w/2+.035),body-.24,0,.17,.19,d+.15);
        for (let j=1;j<Math.ceil(d/2);j++) {
          part('timber',side*(w/2+.025),body/2,-d/2+j*2,.12,body,.11);
        }
        const a=f(side*(w/2-.01),body-.15,-d/2+.08);
        const b=f(side*(w/2-.01),body-.15,d/2-.08);
        const c=f(side*(w/2-.01),body+Math.min(w,d)*.30,0);
        quad('plaster',a,b,c,c);
      }
      if (!shop) {
        part('beam',0,1.01,front+.056,1.23,2.02,.11);
        for (let k=0;k<6;k++) part('oldwood',.15*(k-2.5),.98,front+.112,.136,1.91,.035);
        for(const s of [-1,1]) shutter(f,theta,s*w*.31,1.94,front+.08,w*.22,1.03);
      }
      if (floors===2) {
        if (kind==='tavern') {
          part('oldwood',0,3.34,front+.53,w,.17,1.45);
          for (let j=0;j<bays;j++) {
            const a=(j/bays-.5)*w;
            part('lacquer',a,3.78,front+1.19,.12,.90,.12);
            part('oldwood',a+w/bays*.5,3.96,front+1.2,w/bays,.09,.091);
            for(let i=1;i<=5;i++) part('oldwood',a+i*w/bays/6,3.67,front+1.20,.061,.58,.06);
          }
        } else {
          for(let j=0;j<bays;j++) shutter(f,theta,((j+.5)/bays-.5)*w,4.62,front+.081,w/bays*.67,1.48);
        }
      }
    }
      if (floors===2 && kind!=='tavern') {
        const rear=(a,b,c)=>f(-a,b,-c);
        for(let j=0;j<bays;j++) shutter(rear,theta+Math.PI,((j+.5)/bays-.5)*w,4.52,front+.075,w/bays*.65,1.42);
        part('beam',0,3.16,back-.12,w+.14,.11,.14);
      }
    roof(f,w+1.52,d+1.70,body+.02,Math.min(w,d)*.31,roofKind,detail);
    if (floors===2 && detail) roof(f,w+.9,d+2.4,3.09,.68,'tileDark',true);
    if (shop) {
      if (kind==='tavern') {
        for(const face of [-1,1]){
          for(let j=0;j<4;j++){
            const z=front-1.2-j*2.3;
            part('timber',face*(w/2-.13),1.65,z,.14,3.3,.16);
          }
        }
        for(let j=0;j<7;j++)part('timber',0,2.98,front-.21-j*d/7,w,.20,.14);
        part('oldwood',0,1.09,back+.44,w*.55,.142,.47);
        part('timber',0,.67,back+.40,w*.56,.78,.50);
        for(let i=0;i<8;i++){
          const p=f((i/7-.5)*w*.52,1.17,back+.37);
          jug(p.x,p.y,p.z,.67+i%3*.095,'paleCeramic');
        }
        const bannerA=f(-.89,2.91,back+.18),bannerB=f(.93,2.91,back+.18);
        quad('awning',bannerA,bannerB,f(.93,1.77,back+.17),f(-.89,1.77,back+.17));
        sign(f,theta,'酒',0,2.37,back+.25,.62,.59);
        for(const dx of [-4.85,4.85]){
          const p=f(dx,2.35,front-2.0);
          solid(rock,'rust',p,V(.19,.24,.19),0);
          beam('iron',p.clone().add(V(0,.17,0)),p.clone().add(V(0,.76,0)),.018,.018,cylinder);
        }
        const tables=[[-3.8,.25],[3.5,.15],[-2.9,-3.4],[2.9,-3.4]];
        for (const [a,b] of tables) {
          part('oldwood',a,.85,b,1.63,.11,1.19);
          for (const u of [-.63,.63]) for (const v of [-.44,.44]) part('timber',a+u,.49,b+v,.11,.73,.11);
          part('timber',a,.47,b+.83,1.48,.10,.31);
          part('timber',a,.47,b-.83,1.48,.10,.31);
          localBarrier(f,a,b,1.68,1.23);
          for (const offset of [-.54,.53]) {
            const p=f(a+offset,.92,b+.16);
            jug(p.x,p.y,p.z,.27,'paleCeramic');
          }
          const jar=f(a,.90,b-.30);
          jug(jar.x,jar.y,jar.z,.59,'paleCeramic');
        }
      } else {
        part('oldwood',0,1.09,-.85,w-.7,.16,.98);
        part('timber',0,.55,-.85,w-.81,.95,.82);
        localBarrier(f,0,-.85,w-.59,.99);
        for (let s=0;s<2;s++) {
          const a=(s-.5)*w*.82;
          part('oldwood',a,1.61,back+.50,w*.35,.10,.55);
          part('oldwood',a,2.16,back+.49,w*.35,.09,.56);
        }
        for (let k=0;k<8;k++) {
          const jar=f((k/7-.5)*(w-1),1.18,-.78+random()*.34);
          if (kind==='market') basket(jar.x,jar.y,jar.z,.40+random()*.43);
          else jug(jar.x,jar.y,jar.z,.43+random()*.70,k%3?'ceramic':'paleCeramic');
        }
        for (let k=0;k<6;k++) part(k%2?'linen':'sage',w*.28,.32+k*.16,front-.70,.99,.145,.64);
        trade(f,theta,Math.min(w*.23,1.45),-1.73,.14,front-.46,kind==='market'?'fruit':'pot');
      }
      if (kind!=='tavern') awning(f,theta,w+.40,1.95,2.94,front);
      else {
        for (const dx of [-3.9,3.85]) {
          const p=f(dx,2.54,front+.78);
          solid(rock,'rust',p,V(.24,.31,.24),0);
          beam('iron',p.clone().add(V(0,.26,0)),p.clone().add(V(0,.55,0)),.018,.018,cylinder);
        }
      }
      if (label) {
        part('beam',0,kind==='tavern'?3.60:2.71,front+.20,2.05,.53,.11);
        sign(f,theta,label,0,kind==='tavern'?3.60:2.71,front+.27,1.99,.49);
        sign(f,theta,label,w/2-.18,2.29,front+1.46,.49,1.16,true);
      }
    }
  }

  function stall(x,z,theta,w,kind,onBridge=false) {
    const y=onBridge?arch(z):groundY(x,z), f=local(x,y,z,theta);
    const base=(m,a,b,c,W,H,D)=>localBox(f,theta,m,a,b,c,W,H,D);
    base('timber',0,.83,0,w,.12,1.06);
    for(const side of [-1,1]) {
      base('beam',side*w*.41,.40,.22,.106,.82,.11);
      base('beam',side*w*.41,.40,-.24,.106,.82,.11);
      base('oldwood',side*w*.50,1.13,-.58,.10,2.28,.10);
    }
    awning(f,theta,w+.48,2.06,2.46,-.63);
    const span=Math.floor(w/.43);
    for(let i=0;i<span;i++) {
      const item=f((i/(span-1)-.5)*w*.82,.93,random()*.40-.18);
      if(kind==='fruit') {
        basket(item.x,item.y,item.z,.52);
        for(let j=0;j<5;j++) {
          solid(rock,j%2?'green':'rust',item.clone().add(V((random()-.5)*.25,.35,(random()-.5)*.24)),
            V(.082,.071,.073),random()*6);
        }
      } else if(kind==='cloth') {
        const roll=f((i/(span-1)-.5)*w*.82,.97,.06);
        box(['linen','sage','rust'][i%3],roll.x,roll.y,roll.z,.29,.16,.63,theta);
      } else if(kind==='bread') {
        solid(foot,'straw',item.clone(),V(.19,.07,.16),theta);
        solid(foot,'oldwood',item.clone().add(V(.033,.074,.016)),V(.139,.067,.124),theta,1.15);
      } else jug(item.x,item.y,item.z,.46+random()*.44,i%2?'ceramic':'paleCeramic');
    }
    const label={fruit:'果子',cloth:'布帛',pot:'茶水',bread:'胡餅'}[kind];
    if(onBridge || kind==='bread')sign(f,theta,label,-w*.30,1.54,.02,.45,.85,true);
    trade(f,theta,0,-.91,.84,onBridge?1.58:1.94,kind);
    localBarrier(f,0,0,w,1.08);
  }

  function wharf(x,z,len,width) {
    const deckY=.44;
    for(let i=0; i<len/.27; i++){
      box('oldwood',x-len/2+i*.27,deckY-.08,z,.247,.16,width);
    }
    for(let i=0;i<=len/2.1;i++){
      const px=x-len/2+i*2.1;
      for (const side of [-1,1]) {
        box('beam',px,-.50,z+side*(width*.43),.28,1.92,.28);
        box('oldwood',px,.66,z+side*width*.43,.31,.58,.31);
      }
    }
    decks.push({ x0:x-len/2, x1:x+len/2, z0:z-width/2, z1:z+width/2, y:deckY });
    for(let i=0;i<12;i++) {
      const px=x-len*.41+i*(len*.82/11);
      if(i%3===0) crate(px,deckY,z-width*.30,.7+random()*.45);
      else basket(px,deckY,z-width*.30,.72+random()*.48);
    }
  }

  function bridge() {
    const center=riverCenter(bridgeX);
    const zl=center-bridgeSpan, zh=center+bridgeSpan;
    const planks=144;
    for(let j=0;j<planks;j++) {
      const a=T.MathUtils.lerp(zl,zh,j/planks), b=T.MathUtils.lerp(zl,zh,(j+1)/planks);
      for(let lane=0;lane<5;lane++) {
        const w=bridgeWidth/5;
        const x=bridgeX-bridgeWidth/2+w*(lane+.5);
        box('oldwood',x,arch((a+b)/2)-.103,(a+b)/2,w-.014,.178,b-a-.009,0,.74+random()*.28);
      }
    }
    for(const offset of [-4.9,-3.35,-1.65,0,1.65,3.35,4.9]) {
      const x=bridgeX+offset;
      for(let j=0;j<17;j++){
        const t=j/17, n=(j+1)/17;
        const a=T.MathUtils.lerp(zl+.43,zh-.43,t),b=T.MathUtils.lerp(zl+.43,zh-.43,n);
        beam('beam',V(x,arch(a)-.76,a),V(x,arch(b)-.76,b),.40,.47);
        const deeper=j%2===0?.99:.73;
        beam('timber',V(x+.22,arch(a)-deeper-.18,a),V(x+.22,arch(b)-.35,b),.32,.37);
      }
      for(let k=0;k<12;k++){
        const a=T.MathUtils.lerp(zl+.75,zh-.75,k/12);
        const b=T.MathUtils.lerp(zl+.75,zh-.75,(k+1)/12);
        beam('timber',V(x-.14,arch(a)-.94,a),V(x-.14,arch(b)-.94,b),.35,.37);
      }
    }
    for(let j=0;j<=22;j++) {
      const z=T.MathUtils.lerp(zl,zh,j/22);
      const next=T.MathUtils.lerp(zl,zh,(j+1)/22);
      const y=arch(z);
      beam('beam',V(bridgeX-5.65,y-.57,z),V(bridgeX+5.65,y-.57,z),.24,.34);
      for(const s of [-1,1]) {
        const x=bridgeX+s*5.18;
        box('timber',x,y+.49,z,.15,1.15,.20);
        solid(foot,'beam',V(x,y+1.12,z),V(.131,.18,.13));
        if(j===22) continue;
        for(const h of [.37,.94]) beam('oldwood',V(x,y+h,z),V(x,arch(next)+h,next),.105,.12);
        beam('timber',V(x,y+.14,z),V(x,arch(next)+.37,next),.061,.065);
      }
    }
    for(const side of [-1,1]) {
      const z=center+side*(bridgeSpan-.12);
      box('stone',bridgeX,-.53,z,bridgeWidth+1.2,1.22,1.48);
      box('stone',bridgeX,.04,z+side*.82,bridgeWidth+.66,.15,1.00);
    }
    sign(local(bridgeX,0,center,Math.PI/2),Math.PI/2,'虹橋',0,arch(center)-.34,5.38,1.6,.43);
  }
  function towerMap(f,theta,floor) {
    const paper=document.createElement('canvas');
    paper.width=768;paper.height=440;
    const pen=paper.getContext('2d');
    pen.fillStyle='#d6bb83';pen.fillRect(0,0,768,440);
    pen.strokeStyle='#9e7c4b';pen.lineWidth=3;pen.strokeRect(17,16,734,408);
    const px=x=>46+(x+135)*2.05;
    const py=z=>211+z*2.45;
    pen.beginPath();
    for(let x=-134;x<=187;x+=3)pen.lineTo(px(x),py(riverCenter(x)-riverHalf(x)));
    for(let x=187;x>=-134;x-=3)pen.lineTo(px(x),py(riverCenter(x)+riverHalf(x)));
    pen.closePath();pen.fillStyle='#798c79';pen.fill();pen.strokeStyle='#596958';pen.stroke();
    pen.strokeStyle='#9d6644';pen.lineWidth=5;
    pen.beginPath();pen.moveTo(px(-121),py(25));pen.lineTo(px(-4),py(22));
    pen.lineTo(px(-4),py(-23));pen.lineTo(px(163),py(-25));pen.stroke();
    pen.lineWidth=8;pen.strokeStyle='#63513a';
    pen.beginPath();pen.moveTo(px(106.7),py(-68));pen.lineTo(px(106.7),py(-12));pen.stroke();
    pen.fillStyle='#786247';
    for(let i=0;i<20;i++) {
      const x=i*8+3;
      pen.fillRect(px(x),py(-35-i%3),8,13);
      if(i>12)pen.fillRect(px(x),py(-53+i%2*3),9,11);
    }
    pen.font='bold 25px SimSun, serif';pen.fillStyle='#59412c';
    pen.fillText('汴京水陸圖',44,66);pen.fillText('城門',px(112),py(-10));
    pen.fillText('虹橋',px(-27),py(-30));pen.fillText('汴河',px(-105),py(3));pen.fillText('北',690,60);
    const map=new T.CanvasTexture(paper);
    map.colorSpace=T.SRGBColorSpace;map.anisotropy=8;
    const sheet=new T.Mesh(new T.PlaneGeometry(2.18,1.24),material(map,{side:T.DoubleSide}));
    sheet.position.copy(f(0,floor+1.113,-.32));
    sheet.rotation.set(-Math.PI/2,theta+Math.PI,0,'YXZ');
    scene.add(sheet);
    localBox(f,theta,'oldwood',0,floor+1.044,-.32,2.53,.127,1.52);
    for(const a of [-1.07,1.07])for(const b of [-.91,.27]){
      localBox(f,theta,'beam',a,floor+.50,b,.13,1.01,.13);
    }
    towerBarrier(f,0,-.32,2.53,1.52);
  }

  function towerRoom(f,theta,floor) {
    const wall=(a,b,w,d)=>localBox(f,theta,'plaster',a,floor+1.36,b,w,2.72,d);
    for(const a of [-5.83,5.83]){
      wall(a,0,.21,5.58);
      towerBarrier(f,a,0,.21,5.58);
    }
    for(const [a,w] of [[-4.72,2.18],[0,3.58],[4.72,2.18]]){
      wall(a,-2.77,w,.23);
      towerBarrier(f,a,-2.77,w,.23);
    }
    localBox(f,theta,'timber',0,floor+2.42,-2.77,11.6,.19,.29);
    localBox(f,theta,'plaster',0,floor+.43,2.77,11.6,.86,.22);
    localBox(f,theta,'oldwood',0,floor+.89,2.79,11.6,.12,.35);
    towerBarrier(f,0,2.77,11.6,.25);
    shutter(f,theta,-3.83,floor+1.53,2.84,1.15,1.15);
    shutter(f,theta,3.83,floor+1.53,2.84,1.15,1.15);
    for(const a of [-5.8,-3.87,-1.93,0,1.93,3.87,5.8]){
      for(const b of [-2.86,2.86]){
        localBox(f,theta,'lacquer',a,floor+1.51,b,.225,3.02,.25);
        towerBarrier(f,a,b,.225,.25);
      }
      localBox(f,theta,'oldwood',a,floor+2.80,0,.19,.26,5.86);
    }
    for(const side of [-1,1]){
      const near=side*2.91,ledge=side*4.45;
      quad('tileDark',f(-6.65,floor+2.56,near),f(6.65,floor+2.56,near),
        f(6.65,floor+2.22,ledge),f(-6.65,floor+2.22,ledge),[0,0,7,1.2]);
      beam('beam',f(-6.65,floor+2.21,ledge),f(6.65,floor+2.21,ledge),.15,.17);
      for(const a of [-4.8,-2.7,2.7,4.8]){
        beam('timber',f(a,floor+2.02,near),f(a,floor+2.19,ledge),.087,.093);
      }
    }
    roof(f,15.8,10.5,floor+3.115,2.65,'tileDark');
    towerMap(f,theta,floor);
    for(const a of [-4.83,4.83]){
      localBox(f,theta,'beam',a,floor+.17,1.47,1.6,.33,.80);
      localBox(f,theta,'oldwood',a,floor+1.15,1.73,1.60,.12,.29);
      towerBarrier(f,a,1.49,1.61,.86);
    }
    for(let i=0;i<4;i++){
      const a=-5.39+i*.33;
      beam('oldwood',f(a,floor+.34,1.18),f(a,floor+1.94,1.65),.027,.027,cylinder);
      const point=f(a,floor+2.03,1.68);
      solid(pennant,'iron',point,V(.045,.15,.032),theta,1.14);
    }
    for(let i=0;i<3;i++){
      const a=4.25+i*.49;
      beam('beam',f(a,floor+.37,1.24),f(a,floor+1.22,1.61),.063,.050);
      beam('iron',f(a,floor+1.22,1.61),f(a+.045,floor+1.83,1.80),.079,.027);
      beam('timber',f(a-.13,floor+1.24,1.61),f(a+.13,floor+1.24,1.61),.040,.038);
    }
    for(const a of [-5.07,-4.46]){
      let last=f(a+.19,floor+.42,2.13);
      for(let i=1;i<=11;i++){
        const t=i/11;
        const tip=f(a+.19*Math.cos(t*2*Math.PI),floor+.42+t*1.21,2.13+.031*Math.sin(t*Math.PI));
        beam('oldwood',last,tip,.029,.024,cylinder);last=tip;
      }
    }
    localBox(f,theta,'straw',4.93,floor+.34,-1.39,.63,.69,.53);
    towerBarrier(f,4.93,-1.39,.63,.53);
    gatePosts.push({position:f(-3.77,floor,-.96),yaw:theta+2.47});
    gatePosts.push({position:f(3.81,floor,-.94),yaw:theta-2.47});
  }

  function towerStair(f,theta,side,floor) {
    const start=5.6, bend=10.84, end=12.02;
    const lower=-7.04, upper=-5.13, width=1.55, count=23;
    const foot=f(side*start,0,lower);
    const base=groundY(foot.x,foot.z);
    const mid=(base+floor)/2;
    const bounds=(a0,a1,b0,b1)=>{
      const p=f(side*a0,0,b0),q=f(side*a1,0,b1);
      return {x0:Math.min(p.x,q.x),x1:Math.max(p.x,q.x),z0:Math.min(p.z,q.z),z1:Math.max(p.z,q.z)};
    };
    function masonry(a,b,w,d,y,shade) {
      localBox(f,theta,'wall',side*a,(y-.24)/2,b,w,y+.24,d,shade);
      localBox(f,theta,'brick',side*a,y-.055,b,w+.016,.11,d+.006,shade);
    }
    function flight(from,to,b,bottom,top) {
      const tread=(to-from)/count;
      const rise=(top-bottom)/count;
      for(let i=0;i<count;i++){
        const a=from+(i+.5)*tread;
        const y=bottom+(i+1)*rise;
        masonry(a,b,Math.abs(tread),width,y,[.87,.96,.92,.99][i%4]);
        for(const flank of [-1,1]){
          const edge=b+flank*(width/2-.095);
          localBox(f,theta,'brick',side*a,y+.168,edge,Math.abs(tread)+.01,.34,.19,.92);
          localBox(f,theta,'stone',side*a,y+.337,edge,Math.abs(tread)+.016,.069,.20,.90);
        }
      }
      return {...bounds(from,to,b-width/2,b+width/2),from:f(side*from,0,b).z,to:f(side*to,0,b).z,bottom,rise,count};
    }
    const paths=[flight(start,bend,lower,base,mid),flight(bend,start,upper,mid,floor)];
    const near=upper+width/2, far=lower-width/2;
    const turn={...bounds(bend,end,near,far),level:mid};
    masonry((bend+end)/2,(near+far)/2,end-bend,near-far,mid,.91);
    localBox(f,theta,'brick',side*(end-.065),mid+.27,(near+far)/2,.13,.54,near-far,.92);
    for(const edge of [near,far]){
      localBox(f,theta,'brick',side*((bend+end)/2),mid+.24,edge,end-bend,.48,.16,.91);
    }
    const exit={...bounds(4.36,start,near+.24,upper-width/2),level:floor};
    masonry((4.36+start)/2,(near+.24+upper-width/2)/2,start-4.36,near+.24-(upper-width/2),floor,.93);
    gateStairs.push({paths,turn,exit});
    for(const flank of [-1,1]){
      const p=f(side*(start-.83),0,lower+flank*1.24);
      p.y=groundY(p.x,p.z);
      gatePosts.push({position:p,yaw:(side>0?Math.PI:0)+flank*.13});
    }
    const marker=side*(start-.27),post=lower-1.00;
    sign(f,side>0?Math.PI:0,'登城',marker-side*.054,1.88,post,.43,.85,true);
    localBox(f,theta,'timber',marker,1.15,post,.087,2.21,.085,.94);
  }

  function gate() {
    const theta=-Math.PI/2;
    const x=106.7, z=-25;
    const f=local(x,0,z,theta);
    const height=8.75, depth=8.5, radius=3.98, spring=2.95;
    const floor=height+.185;
    const stairOpenings=[-5.01,5.01];
    const opening = a => spring + Math.sqrt(Math.max(0,radius*radius-a*a));
    const top=height-.11;
    for(const [a,b] of [[-49,-radius],[radius,13.6]]) {
      localBox(f,theta,'wall',(a+b)/2,height/2,0,b-a,height,depth);
      localBox(f,theta,'brick',(a+b)/2,.46,0,b-a,.95,depth+.14);
      localBox(f,theta,'brick',(a+b)/2,top,0,b-a,.29,depth+.38);
      localBarrier(f,(a+b)/2,0,b-a,depth);
      for(let p=a+.30;p<b-.25;p+=1.25) {
        for(const side of [-1,1]) {
          if(side===-1&&stairOpenings.some(a=>Math.abs(a-p)<1.42))continue;
          localBox(f,theta,'brick',p,height+.43,side*(depth/2-.18),.72,.77,.42);
          towerBarrier(f,p,side*(depth/2-.18),.72,.42);
        }
      }
      for(let p=a+.4;p<b-.35;p+=3.45) {
        for(const side of [-1,1]) localBox(f,theta,'stone',p,2.15,side*depth/2,.22,2.6,.17,.82);
      }
    }
    const deep=depth/2;
    const n=28;
    for(let j=0;j<n;j++) {
      const a=-radius+j/n*radius*2, b=-radius+(j+1)/n*radius*2;
      for(const side of [-1,1]) {
        const w=side*deep;
        quad('brick',f(a,opening(a),w),f(b,opening(b),w),f(b,height,w),f(a,height,w),
          [a/3,0,b/3,1.7]);
      }
      quad('brick',f(a,opening(a),deep),f(b,opening(b),deep),
        f(b,opening(b),-deep),f(a,opening(a),-deep),[a/3,0,b/3,2.6],[.77,.73,.66]);
    }
    for(let j=0;j<25;j++){
      const a=Math.PI*j/25+.010, b=Math.PI*(j+1)/25-.009;
      for (const side of [-1,1]) {
        const p=(t,r) => f(Math.cos(t)*r,spring+Math.sin(t)*r,side*(deep+.095));
        quad('stone',p(a,radius+.028),p(b,radius+.028),p(b,radius+.60),p(a,radius+.60),
          [0,0,.55,.55],[.95,.91,.82]);
      }
    }
    for(const side of [-1,1]){
      for(let j=0;j<5;j++) localBox(f,theta,'stone',side*(radius+.32),j*.57+.30,deep+.10,.64,.55,.24);
    }
    localBox(f,theta,'stone',0,height+.075,0,24.1,.22,8.90);
    gateTerrace={x0:x-4.45,x1:x+4.45,z0:z-12.05,z1:z+12.05,floor};
    for(const a of [-11.9,11.9]){
      localBox(f,theta,'brick',a,floor+.43,0,.29,.89,8.86);
      towerBarrier(f,a,0,.29,8.86);
    }
    for(const [a,w] of [[-9.12,5.82],[0,8.73],[9.12,5.82]]){
      localBox(f,theta,'brick',a,floor+.28,-4.05,w,.56,.38);
      towerBarrier(f,a,-4.05,w,.38);
    }
    localBox(f,theta,'brick',0,floor+.23,4.04,24.0,.46,.39);
    towerBarrier(f,0,4.04,24.0,.39);
    towerRoom(f,theta,floor);
    for(const side of [-1,1])towerStair(f,theta,side,floor);
    sign(f,theta,'汴京',0,7.86,deep+.13,1.95,.54);
    for(const side of [-1,1]){
      gatePosts.push({position:f(side*7.75,floor,deep-.60),yaw:theta-side*.14});
      gatePosts.push({position:f(side*9.65,floor,-deep+.93),yaw:theta+Math.PI+side*.09});
      const post=f(side*4.90,0,deep+.94);
      post.y=groundY(post.x,post.z);
      gatePosts.push({position:post,yaw:theta-side*.25});
    }
    const laneEnd=119;
    lane([[94,-25],[laneEnd,-25]],8.7,'pave');
  }

  function tree(x,z,scale,willow = false) {
    const y=groundY(x,z);
    const height=(willow?7.0:6.6)*scale;
    const direction=random()*Math.PI*2;
    const lean=V(Math.cos(direction)*scale*.75,0,Math.sin(direction)*scale*.75);
    const start=V(x,y-.16,z);
    const fork=V(x,-.12+y+height*.47,z).addScaledVector(lean,.24);
    const top=V(x,y+height*.91,z).add(lean);
    const diameter=(willow?.34:.25)*scale;
    beam('bark',start,fork,diameter*1.15,diameter,cylinder);
    beam('bark',fork,top,diameter*.72,diameter*.64,cylinder);
    const leaves = willow ? [0x83904b,0x708145,0x98a25a,0x5c723b,0x7a9355] : [0x627548,0x7d8a45,0x849654,0x556b3e,0x94a257];
    const palette=leaves.map(hex=>new T.Color(hex).toArray());
    const branches=willow?21:18;
    for(let k=0;k<branches;k++){
      const theta=k*2.399963+random()*.42;
      const axis=V(Math.cos(theta),0,Math.sin(theta));
      const base=fork.clone().lerp(top,.19+random()*.67);
      const distance=(1.18+random()*2.60)*scale;
      const terminal=base.clone().addScaledVector(axis,distance).add(V(0,(.66+random()*1.67)*scale,0));
      const elbow=base.clone().lerp(terminal,.51).add(V(0,.43*scale,0));
      if(k<16){
        beam('bark',base,elbow,diameter*.24,diameter*.24,cylinder);
        beam('bark',elbow,terminal,diameter*.12,diameter*.12,cylinder);
      }
      for(let crown=0;crown<5;crown++){
        const p=elbow.clone().lerp(terminal,.28+crown*.19).addScaledVector(axis,(random()-.25)*scale*.64);
        p.y+=(random()-.53)*(willow?1.48:1.0)*scale;
        const ang=theta+crown*2.11;
        const half=(willow?1.12:1.27)*(.67+random()*.39)*scale;
        const u=V(Math.sin(ang)*half,(random()-.5)*half*.27,Math.cos(ang)*half);
        const v=V(Math.cos(ang)*half*.22,half*(willow?1.32:.80),-Math.sin(ang)*half*.22);
        quad('bough',p.clone().sub(u).sub(v),p.clone().add(u).sub(v),
          p.clone().add(u).add(v),p.clone().sub(u).add(v));
      }
      const count=willow?33:35;
      const spread=willow?1.10:1.58;
      for(let i=0;i<count;i++){
        const span=.35+random()*.73;
        const branchPoint=elbow.clone().lerp(terminal,span).addScaledVector(axis,(random()-.21)*spread*scale);
        const sn=willow?.7:1.3;
        branchPoint.x+=(random()-.5)*1.55*spread*scale;
        branchPoint.z+=(random()-.5)*1.55*spread*scale;
        branchPoint.y+=(random()-.54)*sn*scale;
        if(willow) branchPoint.y-=(.08+Math.pow(random(),.52)*2.37)*span*scale;
        const length=(.13+random()*.28)*scale;
        const wide=(willow?.052:.133)*scale*(.58+random());
        const heading=random()*6.28;
        const U=V(Math.cos(heading)*wide,(random()-.5)*wide*.9,Math.sin(heading)*wide);
        const W=V(Math.sin(heading)*length*.66,-length*(.72+random()*.35),-Math.cos(heading)*length*.66);
        quad('foliage',branchPoint.clone().addScaledVector(W,-.49),
          branchPoint.clone().add(U),branchPoint.clone().addScaledVector(W,.60),
          branchPoint.clone().addScaledVector(U,-1),[0,0,1,1],palette[Math.floor(random()*palette.length)]);
      }
    }
  }

  function crops(x0,z0,w,d) {
    const tones=[0x6f8137,0x9aa65b,0x8c9844,0xaeb174].map(val=>new T.Color(val).toArray());
    for(let row=0;row<Math.floor(d/.78);row++){
      const z=z0+row*.78;
      for(let x=x0;x<x0+w;x+=.26+random()*.12){
        const px=x+random()*.13,pz=z+random()*.33;
        const y=groundY(px,pz);
        for(let k=0;k<3;k++){
          const h=.28+random()*.49;
          const lean=(random()-.5)*.29;
          const a=V(px+(random()-.5)*.14,y,pz+(random()-.5)*.11);
          quad('foliage',a,a.clone().add(V(.034,0,0)),
            a.clone().add(V(lean,h,-.04)),a.clone().add(V(lean+.036,h,-.041)),
            [0,0,1,1],tones[Math.floor(random()*tones.length)]);
        }
      }
    }
  }

  land();
  lane([[-162,34],[-142,28],[-126,25],[-108,22],[-88,19],[-73,18],[-56,18],[-49,19],[-36,19],[-20,20],[-10,22],[10,23],[39,24],[64,26]],4.6);
  lane([[-44,-22],[-21,-23],[-4,-23],[16,-23],[32,-24],[57,-24],[79,-24],[103,-25],[128,-25],[145,-26],[174,-26]],7.1,'path');
  lane([[119,-25],[129,-28],[129,-45],[130,-64],[132,-72]],4.4,'pave');
  lane([[112,-43],[129,-45],[153,-46],[171,-45]],3.8,'soil');
  lane([[142,-26],[143,-39],[146,-65]],4,'soil');
  lane([[-6,25],[-8,42],[-18,67]],3.7,'soil');
  crops(-152,32,31,16);
  crops(-113,29,25,13);
  crops(-156,54,27,14);
  crops(-74,43,18,12);
  crops(46,40,26,12);

  house(-151,26,6.8,5.6,{roofKind:'straw'});
  house(-137,36,7.2,6.2,{theta:Math.PI,roofKind:'straw'});
  house(-112,13.7,6.2,5.6,{theta:Math.PI,roofKind:'tileDark'});
  house(-103,25,8.0,5.3,{theta:Math.PI,roofKind:'straw'});
  house(-86,33,6.6,5.6,{theta:Math.PI});
  house(-64,28.7,8.5,6.7,{theta:Math.PI,kind:'market',label:'茶棚'});
  house(-46,27.3,9.6,7.9,{theta:Math.PI,kind:'store',label:'貨棧'});
  house(-33,26.7,8.4,6.3,{theta:Math.PI,kind:'market'});
  house(-22,28.5,7.8,7.1,{theta:Math.PI});
  wharf(-38,14.65,14.4,5.45);
  const gangwayX=-36.5, gangwayFrom=7.22, gangwayTo=12.33;
  const gangwayHeight=z=>T.MathUtils.lerp(.045,.45,T.MathUtils.clamp((z-gangwayFrom)/(gangwayTo-gangwayFrom),0,1));
  for(let k=0;k<19;k++){
    const z=gangwayFrom+(k+.5)*(gangwayTo-gangwayFrom)/19;
    box('oldwood',gangwayX,gangwayHeight(z)-.059,z,1.57,.115,.249);
  }
  for(const side of [-.67,.67]){
    beam('beam',V(gangwayX+side,.02,gangwayFrom),V(gangwayX+side,.48,gangwayTo),.105,.126);
  }
  decks.push({x0:-41.0,x1:-32.8,z0:5.65,z1:7.45,y:.044});
  wharf(-26,14.65,8.1,4.80);
  wharf(15,16.2,12.6,5.35);
  wharf(47,-13.2,13.5,4.5);
  bridge();
  for(const [side,z,kind] of [[1,-7.2,'bread'],[-1,-10.3,'fruit'],[1,8.7,'pot'],[-1,12.7,'cloth']]) {
    stall(bridgeX+side*3.91,z,-side*Math.PI/2,1.68,kind,true);
  }
  for(let i=0;i<390;i++){
    const x=-151+random()*319, nearNorth=i%4!==0;
    const z=nearNorth?-24+(random()>.5?1:-1)*(2.6+random()*.95):23+(random()>.5?1:-1)*(1.4+random()*1.0);
    if(Math.abs(x-106.7)<7||Math.abs(x+4)<8)continue;
    const radius=.016+random()*.087;
    solid(rock,'stone',V(x,groundY(x,z)+.022,z),V(radius,.048,radius*.65),random()*6,.90);
  }

  for(const [x,z,w,d,kind,label] of [
    [5,-32.2,7.1,7.4,'market','茶肆'],[14.4,-34.0,8.2,9,'store','雜貨'],
    [24.6,-34.1,9.8,10,'market','香料'],[36.8,-34.5,8.8,9.4,'store','綢布'],
    [48,-34.1,8.3,8.6,'store','瓷器'],[58.4,-35.7,8.2,9.4,'market','糧行'],
    [69,-36.2,11.8,12.35,'tavern','酒樓'],[82.5,-35.7,9.0,10.4,'store','茶坊'],
    [94,-35.3,8.65,8.6,'market','竹器']
  ]) house(x,z,w,d,{floors:2,kind,label});
  for(const [x,z,w,d,kind,label] of [
    [-20,-33.6,8.5,7.4,'home'],[-10,-34.6,7.9,7.5,'market','茶'],
    [9,29.5,8.2,7.0,'market','茶'],[20,34,10.2,8.5,'tavern','酒'],
    [31,31.7,7.1,7.4,'store','米'],[45,33,7.4,7.0,'home'],
    [14,-17.0,6.45,4.85,'store','茶'],[32.5,-16.6,7.6,4.25,'market'],
    [62,-16.35,8.1,5.6,'market','果子'],[82,-16.9,9.4,5.2,'store','百貨']
  ]) house(x,z,w,d,{theta:z>0 || z>=-18?Math.PI:0,floors:kind==='home'?1:2,kind,label});

  for(const [x,z,r,w,k] of [
    [-19,18.9,0,3.2,'fruit'],[-12,19.7,0,3.6,'cloth'],[3,24.7,Math.PI,3.6,'fruit'],[17,19.8,0,3.8,'pot'],
    [3,-18.7,Math.PI,3.8,'pot'],[20,-19.2,Math.PI,4,'fruit'],[25.6,-20.1,Math.PI,3.4,'fruit'],
    [38.6,-19.4,Math.PI,4.4,'cloth'],[45,-20.4,Math.PI,3.9,'pot'],
    [53.9,-19.7,Math.PI,4.2,'fruit'],[73.5,-20.0,Math.PI,3.7,'pot'],
    [89.1,-19.9,Math.PI,3.2,'cloth'],[151,-19.4,Math.PI,4.2,'pot'],[136,-20.1,Math.PI,4.0,'fruit'],
    [31.1,-27.6,0,2.3,'bread'],[42,-27.5,0,2.2,'fruit'],[53.3,-28.1,0,2.0,'cloth']
  ]) stall(x,z,r,w,k);

  gate();
  for(const [x,z,w,d,kind,label] of [
    [116.2,-43.05,6.8,8.4,'store','食店'],[122,-41.8,5.0,7.4,'home'],
    [136.8,-34.7,7.1,8.7,'home'],[149.9,-34.8,7.6,8.0,'store','布'],
    [160.4,-35.0,8.5,8.5,'home'],[172,-34.3,10.0,8.0,'home'],
    [119.9,-50.8,9.0,7.1,'home'],[137.3,-51.4,9.0,7.5,'home'],
    [120.3,-61.0,9.4,8.9,'home'],[138.1,-63,10.0,9.0,'home'],
    [153.7,-55.4,8.6,9.3,'home'],[167.8,-54.5,10.7,8.1,'home']
  ]) house(x,z,w,d,{floors:z < -47 ? 1 : 2,kind,label});
  for (const x of [10,24,42,57,74,90,116,128,151,169]) {
    for(const z of [-57,-71]){
      if(x>120&&x<147) continue;
      house(x+(random()-.5)*3,z+(random()-.5)*2,6.6+random()*3.9,5.3+random()*3.7,
        {floors:random()>.58?2:1, simple:true, theta:random()>.50?Math.PI:0});
    }
  }
  for(const [x,z,w,d] of [[-242,36,8.7,6.3],[-211,23,8.1,5.4],[-187,23,7.8,7.2],
    [185,-26,8.7,6.4],[196,-28,8,5.8],[210,-30,10.3,6.6],[228,-32,8.0,6.5],[239,-37,7.1,7.1]]){
    house(x,z,w,d,{floors:x<0?1:2,simple:true,theta:z>0?Math.PI:0});
  }
  for(const [x,z,s] of [[-203,20,1.04],[-227,23,1.19],[-244,26,1.05],[170,21,1.12],[187,24,1.08],[211,25,1.24],[232,-21,.91],[244,23,.95]]){
    tree(x,z,s,true);
  }
  const tower=local(154,.19,-66,.00);
  for(let j=0;j<3;j++){
    const width=7.35-j*1.38;
    localBox(tower,0,'plaster',0,2.63+j*3.5,0,width-.31,3.0,width*.78);
    for(const s of [-1,1]){
      localBox(tower,0,'lacquer',s*(width/2-.32),2.63+j*3.5,width*.38,.23,3.05,.23);
      shutter(tower,0,s*width*.214,2.88+j*3.5,width*.39,width*.28,.94);
    }
    roof(tower,width+1.91,width*.84+1.34,3.97+j*3.5,1.28,'tileDark',true);
  }
  for (const x of [-78,-65,-48,-38,-23]) {
    house(x,-32-10*random(),6.3+random()*3,5.6+random()*3,{simple:true,floors:random()<.19?2:1});
  }
  for(const [x,z,s,kind] of [
    [-139,19,1.17,1],[-119,18,1.2,1],[-117,31,.97,0],[-98,19,.99,1],[-82,13.0,1.16,1],[-68,14.7,1.14,1],
    [-56,24,1.0,1],[-42,20.6,.96,1],[-22,18.3,.96,1],[-10,27,1.22,1],[10,20.4,.99,1],[28,29.0,.82,1],
    [48,20.2,1.04,1],[59,19.9,1.25,1],[70,26,1.00,1],
    [-39,-22,1.11,1],[-16,-24,1.12,1],[7,-15.5,.86,1],[34,-28.8,.93,0],
    [55,-15.5,1.01,1],[76,-15.8,.85,1],[93,-15.1,1.12,1],[112,-14.2,.91,1],
    [126,-53,1.12,0],[132,-48,.99,1],[128,-66,1.02,1],[137,-41,.83,0]
  ]) tree(x,z,s,kind===1);
  for (let i=0;i<74;i++){
    const x=-169+random()*350;
    const z=(random()>.54?-1:1)*(40+random()*38);
    if(x>94&&x<151&&z<0) continue;
    tree(x,z,.63+random()*.54,random()>.67);
  }
  for(let i=0;i<1900;i++){
    const x=-163+random()*337, side=random()>.5?1:-1;
    const edge=riverCenter(x)+side*riverHalf(x);
    const z=edge+side*(random()*1.65+.05);
    if((x>-11&&x<4)||(x>-46&&x<-20&&side===1)) continue;
    const y=groundY(x,z);
    const tones=[.29,.34,.105],h=.17+random()*.38;
    quad('foliage',V(x-.026,y,z),V(x+.039,y,z),
      V(x+.13*random(),y+h,z+.06),V(x-.018,y+h,z+.06),[0,0,1,1],tones);
  }
  for(const [x,z] of [[8,27],[21,28],[-31,21.5],[47,-31.5],[72,-32],[-74,19.3],[134,-42],[125,-56]]) {
    if (x===47 || x===72) continue;
    crate(x,groundY(x,z),z,.83);
    basket(x+.82,groundY(x,z),z,.67);
    barrier(x,z,1.5,.75);
  }
  for(let i=0;i<14;i++){
    const x=-146+i*2;
    box('timber',x,groundY(x,30.7)+.43,30.7,.16,1.04,.19);
    if(i<13) {
      beam('oldwood',V(x,.43,30.7),V(x+2.1,.38,30.7),.085,.105);
      beam('oldwood',V(x,.70,30.7),V(x+2.06,.69,30.7),.071,.084);
    }
  }
  for(const [x,z] of [[124,-42],[133,-40],[128,-55]]) {
    const f=local(x,groundY(x,z),z,Math.PI/2);
    beam('timber',f(-1.2,0,0),f(-1.2,2.3,0),.075,.075,cylinder);
    beam('timber',f(1.2,0,0),f(1.2,2.2,0),.075,.075,cylinder);
    beam('timber',f(-1.2,2.25,0),f(1.2,2.16,0),.032,.034,cylinder);
    for (let i=0;i<4;i++){
      const a=-.94+i*.52,b=a+.44,top=2.21-i*.019;
      quad('awning',f(a,top,0),f(b,top,0),f(b,top-.69-i*.06,.04),f(a,top-.64-i*.06,.14));
    }
  }

  for(const { geo, mat, entries } of meshGroups.values()){
    const mesh=new T.InstancedMesh(geo,materials[mat],entries.length);
    for(const [i,[matrix,shade]] of entries.entries()){
      mesh.setMatrixAt(i,matrix);
      mesh.setColorAt(i,color.setScalar(shade));
    }
    mesh.castShadow=mat!=='soil'&&mat!=='grass';
    mesh.receiveShadow=true;
    mesh.computeBoundingSphere();
    scene.add(mesh);
  }
  for(const [name,{points,uv,colors}] of surfaces){
    const geo=new T.BufferGeometry();
    geo.setAttribute('position',new T.Float32BufferAttribute(points,3));
    geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));
    geo.setAttribute('color',new T.Float32BufferAttribute(colors,3));
    geo.computeVertexNormals();
    const mat=materials[name].clone();
    mat.side=T.DoubleSide;
    mat.vertexColors=true;
    if(name==='foliage'||name==='awning'||name==='bough') mat.onBeforeCompile=materials[name].onBeforeCompile;
    const mesh=new T.Mesh(geo,mat);
    mesh.receiveShadow=true;
    mesh.castShadow=!['soil','grass','stone','pave','path'].includes(name);
    scene.add(mesh);
  }

  const inRect=(region,x,z,inset=0)=>x>=region.x0+inset&&x<=region.x1-inset&&z>=region.z0+inset&&z<=region.z1-inset;
  function stairSurface(x,z) {
    for(const {paths,turn,exit} of gateStairs){
      if(inRect(turn,x,z))return turn;
      if(inRect(exit,x,z))return exit;
      for(const path of paths)if(inRect(path,x,z))return path;
    }
  }
  function onGateTerrace(x,z,elevation) {
    return elevation>=gateTerrace.floor-.65
      &&(inRect(gateTerrace,x,z)||gateStairs.some(({exit})=>inRect(exit,x,z)));
  }
  function walkHeight(x,z,elevation=0) {
    if (x<bounds.west||x>bounds.east||z<bounds.north||z>bounds.south) return null;
    if(onGateTerrace(x,z,elevation))return gateTerrace.floor;
    const stair=stairSurface(x,z);
    if(stair){
      if(stair.level!==undefined)return stair.level;
      const progress=T.MathUtils.clamp((z-stair.from)/(stair.to-stair.from),0,1);
      const tread=Math.min(stair.count,1+Math.floor(progress*stair.count));
      return stair.bottom+tread*stair.rise;
    }
    if (Math.abs(x-bridgeX)<bridgeWidth/2-.14 && Math.abs(z-riverCenter(bridgeX))<=bridgeSpan+.04) return arch(z);
    if (Math.abs(x-gangwayX)<.78 && z>=gangwayFrom && z<=gangwayTo)return gangwayHeight(z);
    for(const deck of decks) if(x>=deck.x0&&x<=deck.x1&&z>=deck.z0&&z<=deck.z1)return deck.y;
    if(Math.abs(z-riverCenter(x))<riverHalf(x)-.14)return null;
    return groundY(x,z);
  }
  function isObstacle(x,z,margin=.30,elevation=0){
    const stair=stairSurface(x,z);
    if(stair?.count&&(x<stair.x0+.16+margin||x>stair.x1-.16-margin))return true;
    const meetsTerrace=stair&&elevation>=gateTerrace.floor-.65;
    const walls=(meetsTerrace||onGateTerrace(x,z,elevation))?towerObstacles:obstacles;
    return walls.some(o=>x>o.x0-margin&&x<o.x1+margin&&z>o.z0-margin&&z<o.z1+margin);
  }
  return { materials, walkHeight, isObstacle, obstacles, trades, gatePosts, gateTerrace, gateStairs, onGateTerrace };
}
