import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { arch, bridgeX, groundY, riverCenter, seeded, waterY } from './setting.js';

const V = (x,y,z) => new T.Vector3(x,y,z);
const up = V(0,1,0);
const boxGeo = new T.BoxGeometry(1,1,1);
const round = new T.SphereGeometry(1,12,8);
const cap = new T.SphereGeometry(1,10,6,0,Math.PI*2,0,Math.PI*.57);
const tube = new T.CylinderGeometry(1,1,1,8);
const skirt = new T.CylinderGeometry(.65,1,1,10);
const jacket = new T.CylinderGeometry(1,.72,1,10);
const torus = new T.TorusGeometry(1,.083,6,19);
const cloak = new T.CylinderGeometry(.71,1,1,8);
const finial = new T.OctahedronGeometry(1);
const TAU = Math.PI*2;

function mesh(geometry, mat, group, x,y,z,sx=1,sy=1,sz=1) {
  const part=new T.Mesh(geometry,mat);
  part.position.set(x,y,z);
  part.scale.set(sx,sy,sz);
  part.castShadow=part.receiveShadow=true;
  group.add(part);
  return part;
}
function stick(group, mat, a,b,width,geometry=tube){
  const delta=b.clone().sub(a);
  const mid=a.clone().lerp(b,.5);
  const rig=mesh(geometry,mat,group,mid.x,mid.y,mid.z,width,delta.length(),width);
  rig.quaternion.setFromUnitVectors(up,delta.normalize());
  return rig;
}

function batchParts(group, moving = []) {
  const solids = new Map();
  for (const child of [...group.children]) {
    if (!child.isMesh || moving.includes(child)) continue;
    child.updateMatrix();
    const copy = child.geometry.index ? child.geometry.toNonIndexed() : child.geometry.clone();
    copy.applyMatrix4(child.matrix);
    if (!solids.has(child.material)) solids.set(child.material, []);
    solids.get(child.material).push(copy);
    group.remove(child);
  }
  for (const [material,parts] of solids) {
    mesh(mergeGeometries(parts),material,group,0,0,0);
    parts.forEach(part=>part.dispose());
  }
}
function buildHull(length, width, material, group) {
  const pieces=[];
  const per=11;
  function vertex(t, r) {
    const x=(t-.5)*length;
    const ar=Math.pow(.065+.935*Math.sin(Math.PI*t),.69);
    const round=Math.sin(r*Math.PI);
    const side=Math.cos(r*Math.PI);
    return [x, -.04+round*(-.53)+.26*Math.pow(Math.abs(t-.5)*2,4), side*width*.51*ar*(.75+.25*Math.abs(side))];
  }
  for(let i=0;i<24;i++){
    for(let j=0;j<per;j++){
      const a=vertex(i/24,j/per),b=vertex((i+1)/24,j/per);
      const c=vertex((i+1)/24,(j+1)/per),d=vertex(i/24,(j+1)/per);
      pieces.push(...a,...b,...c,...a,...c,...d);
    }
  }
  const pos=new T.Float32BufferAttribute(pieces,3);
  const uv=new Float32Array(pos.count*2);
  for(let i=0;i<pos.count;i++){
    uv[i*2]=pos.getY(i)*2.8;
    uv[i*2+1]=pos.getX(i)/3;
  }
  const geo=new T.BufferGeometry();
  geo.setAttribute('position',pos);
  geo.setAttribute('uv',new T.BufferAttribute(uv,2));
  geo.computeVertexNormals();
  const hull=mesh(geo,material,group,0,.66,0);
  for(const side of [-1,1]){
    for(let j=0;j<22;j++){
      const t=j/22,q=(j+1)/22;
      const [ax,ay,az]=vertex(t,side>0?0:1);
      const [bx,by,bz]=vertex(q,side>0?0:1);
      stick(group,material,V(ax,ay+.75,az),V(bx,by+.75,bz),.065);
    }
  }
  return hull;
}

function buildVessels(scene,mats,random,wharves) {
  const barges=[];
  const hullMat=mats.timber.clone();
  hullMat.color.setHex(0xa68c6b);
  hullMat.side=T.DoubleSide;
  const movingCount=12;
  const moorings=[{x:-37,lane:10.5},{x:46,lane:-10.9},...wharves.filter(dock=>dock.extra)];
  for(let i=0;i<movingCount+moorings.length;i++){
    const root=new T.Group();
    const length=i%3===1?11.2:7.6+random()*2.6;
    const width=i%3===1?3.5:2.25+random()*.58;
    buildHull(length,width,hullMat,root);
    for(let k=0;k<Math.floor(length/.29);k++){
      const x=-length*.47+k*.29;
      if(x>length*.47)continue;
      const span=Math.pow(.08+.92*Math.sin(Math.PI*(x/length+.5)),.7);
      mesh(boxGeo,mats.oldwood,root,x,.68,0,.27,.14,width*span*.96);
    }
    mesh(boxGeo,mats.beam,root,-length*.45,.83,0,.28,.36,width*.36);
    mesh(boxGeo,mats.beam,root,length*.45,.91,0,.31,.37,width*.38);
    for(const s of [-1,1]){
      for(let j=-2;j<3;j++){
        mesh(boxGeo,mats.oldwood,root,j*length*.15,.87,s*width*.44,.12,.55,.12);
        if(j<2) stick(root,mats.oldwood,V(j*length*.15,1.09,s*width*.44),V((j+1)*length*.15,1.09,s*width*.44),.046);
      }
    }
    for(let j=0;j<12;j++){
      const px=length*(-.33+random()*.68),zz=(random()-.5)*width*.61;
      const mat=j%3===0?mats.oldwood:mats.straw;
      mesh(j%3?round:boxGeo,mat,root,px,.87+random()*.16,zz,.27+random()*.31,.31+random()*.13,.33+random()*.31);
    }
    if(i%3!==1){
      const cabinLength=.41*length;
      const cabinWide=width*.42;
      const cabGeo=new T.CylinderGeometry(cabinWide,cabinWide,cabinLength,16,1,true,0,Math.PI);
      const cabin=mesh(cabGeo,mats.straw,root,-.27,1.17,0);
      cabin.rotation.set(0,Math.PI/2,Math.PI/2);
      for(let j=0;j<6;j++){
        const rim=mesh(torus,mats.oldwood,root,-cabinLength*.52+j*cabinLength/5,1.16,0,cabinWide*.99,cabinWide*.99,.57);
        rim.rotation.y=Math.PI/2;
        rim.geometry=new T.TorusGeometry(1,.041,6,16,Math.PI);
      }
    }
    const mast=new T.Group();
    mast.position.set(length*.16,.72,0);
    root.add(mast);
    const h=i%3===1?6.2:4.6;
    stick(mast,mats.beam,V(0,0,0),V(0,h,0),.080);
    if(i%2===0||i%3===1){
      const sailWidth=width*1.19;
      const sailGeo=new T.PlaneGeometry(sailWidth,h*.65,12,14);
      const pts=sailGeo.attributes.position;
      for(let k=0;k<pts.count;k++){
        const x=pts.getX(k), y=pts.getY(k);
        const belly=.40*Math.cos(x/sailWidth*Math.PI)*Math.cos(y/(h*.65)*Math.PI*.70);
        pts.setZ(k,belly+.045*Math.sin(y*8));
      }
      sailGeo.computeVertexNormals();
      const cloth=mats.linen.clone();
      cloth.side=T.DoubleSide;
      mesh(sailGeo,cloth,mast,-.12,h*.60,.016).rotation.y=Math.PI/2;
      for(let j=0;j<7;j++) {
        const y=h*(.268+j*.109);
        stick(mast,mats.oldwood,V(-.13,y,-sailWidth*.52),V(-.13,y,sailWidth*.52),.031);
      }
    }
    stick(mast,mats.beam,V(0,h-.16,0),V(0,h-.09,.64),.035);
    const oar=new T.Group();
    oar.position.set(-length*.37,.92,-width*.38);
    root.add(oar);
    stick(oar,mats.oldwood,V(.28,.77,.08),V(-1.52,-.51,-1.77),.055);
    const paddle=mesh(boxGeo,mats.timber,oar,-1.44,-.46,-1.67,.70,.075,.20);
    paddle.rotation.set(-.18,-.67,.36);
    const rudder=mesh(boxGeo,mats.oldwood,root,-length*.50,.22,0,.58,1.25,.125);
    rudder.rotation.z=.23;
    const berth=moorings[i-movingCount];
    const docked=Boolean(berth);
    const route=i%2===0?1:-1;
    if(docked) mast.rotation.z=-1.42;
    batchParts(mast);batchParts(oar);batchParts(root,[rudder]);
    scene.add(root);
    const wake = buildWake(scene, length, width);
    const lane=docked?(berth.lane??berth.z-riverCenter(berth.x)-berth.side*(berth.width/2+width/2+.25)):route*4.1;
    barges.push({ root, mast, oar, rudder, wake, length, docked, route, lane,
      speed:route>0?1.16:1.02,start:docked?berth.x:(-177+i*374/movingCount),phase:random()*TAU });
  }
  return barges;
}

function buildWake(scene,length,width){
  const group=new T.Group();
  const geo=new T.BufferGeometry();
  const points=[],uv=[];
  for(const side of [-1,1]) {
    for(let j=0;j<14;j++){
      const a=j/14,b=(j+1)/14;
      const p=(t,n)=>[-length*.38-t*length*1.19,0,side*(width*.20+width*1.31*t)+n];
      const k=.03+.32*a,l=.03+.32*b;
      points.push(...p(a,-k),...p(b,-l),...p(a,k),...p(b,-l),...p(b,l),...p(a,k));
      uv.push(a,0,b,0,a,1,b,0,b,1,a,1);
    }
  }
  geo.setAttribute('position',new T.Float32BufferAttribute(points,3));
  geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));
  const time={value:0};
  const material=new T.ShaderMaterial({
    side:T.DoubleSide, transparent:true, depthWrite:false,uniforms:{ time },
    vertexShader:'varying vec2 waveUv; void main(){ waveUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader:'varying vec2 waveUv; uniform float time; void main(){ float d=sin(waveUv.y*3.14159)*pow(1.0-waveUv.x,1.45); float foam=.25+.75*pow(max(0.0,sin(69.0*waveUv.x-2.3*time)),2.0); gl_FragColor=vec4(.86,.87,.72,d*foam*.39); }'
  });
  group.add(new T.Mesh(geo,material));
  group.position.y=waterY+.015;
  group.userData.time=time;
  scene.add(group);
  return group;
}

const circuits = [
  [[-148,22],[-129,24],[-109,22],[-82,19],[-72,18],[-86,20],[-110,24],[-131,26]],
  [[-47,18.4],[-36,16.5],[-30,15.6],[-27,17.9],[-34,19.3],[-44,20.1]],
  [[-42,19.8],[-27,20.0],[-14,22.0],[-6,22],[-6,9],[-6,-4],[-6,-20],[-2,-23],[11,-23],[25,-25],[28,-24],[21,-22],[6,-21],[-2,-22],[-2,-4],[-2,10],[-2,22],[-12,23],[-27,21.2]],
  [[4,-24.9],[16,-24.6],[31,-25.7],[47,-25.00],[60,-25.0],[75,-24.6],[92,-25.9],[108,-25.4],[129,-25],[143,-25],[155,-26],[142,-27],[127,-24],[105,-23],[89,-23],[69,-23],[48,-23],[26,-22],[12,-22]],
  [[29,-27],[44,-27.7],[46,-29.8],[46,-31.1],[48,-31.7],[51,-30.8],[52,-27.2],[61,-26],[69,-26],[78,-26],[58,-25.6],[45,-26],[35,-26]],
  [[118,-25],[128,-27],[129,-40],[130,-56],[129,-62],[131,-65],[131,-51],[130,-36],[131,-28],[145,-26],[152,-24],[135,-24]],
  [[7,23],[14,22.4],[24,22.5],[48,24.2],[59,26],[47,26],[25,25.2],[17,24.7],[8,24.6]]
];
function makeRoute(points){
  const segments=[];
  let length=0;
  for(let i=0;i<points.length;i++){
    const a=points[i],b=points[(i+1)%points.length];
    const distance=Math.hypot(b[0]-a[0],b[1]-a[1]);
    segments.push({a,b,from:length,to:length+distance,distance});
    length+=distance;
  }
  return {length,segments};
}
function sample(route,distance){
  const d=distance%route.length;
  const seg=route.segments.find(s=>d>=s.from&&d<s.to)??route.segments[0];
  const t=(d-seg.from)/seg.distance;
  return [T.MathUtils.lerp(seg.a[0],seg.b[0],t),T.MathUtils.lerp(seg.a[1],seg.b[1],t),
    Math.atan2(seg.b[0]-seg.a[0],seg.b[1]-seg.a[1])];
}

function cityGuards(world, skin){
  const uniform=new T.Color(0xab6650);
  const recruit=(i,post)=>({ guard:true,style:0,scale:.98+(i%3)*.018,
    shade:uniform,faces:new T.Color(skin[i%skin.length]),payload:0,phase:i*.37,...post });
  const sentries=world.gatePosts.map((post,i)=>recruit(i,{post,speed:0}));
  const squads=[
    [[27,-24.95],[33,-24.95],[43,-25.08],[59,-25.4],[76,-25.3],[89,-25.55],[99.7,-25.55],
      [100.3,-23.8],[86,-23.25],[69,-23.3],[55,-23.45],[37,-23.5],[27.4,-23.7]],
    [[111,-25.45],[121,-25.45],[129.3,-27.55],[130.1,-35.5],[129.4,-44.3],[130,-48.65],
      [131.1,-46.75],[131.25,-40],[131.1,-34],[132.15,-29.6],[133.25,-25.8],[131,-23.55],[120,-23.55],[111,-23.5]],
    [[-109,19.8],[-99,19.35],[-91,19.1],[-81,17.65],[-73,16.96],[-63,17.2],[-60,18.55],
      [-67,20.0],[-76,21.15],[-89,21.15],[-98,21.22],[-106,21.12]],
    [[-55,18.82],[-47,18.25],[-40,18.18],[-34,18.35],[-27,18.61],[-23,18.91],[-23.1,20.22],
      [-29,20.09],[-37,20.08],[-44,20.14],[-51,20.29],[-54.6,20.28]]
  ];
  for(const [i,points] of squads.entries()){
    const route=new T.CatmullRomCurve3(points.map(([x,z])=>V(x,0,z)),true,'centripetal');
    const length=route.getLength();
    for(let member=0;member<4;member++){
      sentries.push(recruit(member,{
        patrol:{route,length,lead:[8.2,27.4,28.2,23.0][i]-Math.floor(member/2)*1.28,side:member%2===0?-.41:.41},
        walking:true,speed:[1.07,1.01,.99,.96][i]
      }));
    }
  }
  return sentries;
}

function createWalkers(scene,world,mats,random,isMobile,boats,carts,mounts) {
  const paths=circuits.map(makeRoute);
  const walkers=[];
  const populations=isMobile?[6,8,13,17,7,7,7]:[10,12,24,29,9,12,11];
  const robe= [0x9f9273,0xbba984,0x837466,0x718568,0xc8a97e,0xad6f60,0x647f86,0xb69981,0x937e83,0xbd935d,0x647d63];
  const skin= [0xb88c69,0xb68a69,0xc59d7b,0xaf8462,0xca9c7e];
  const matsWalk = new Map();
  function pool(key, geometry, material) {
    matsWalk.set(key,{geometry,material,used:0});
  }
  const cloth=mats.linen.clone();
  cloth.color.setHex(0xf3e9dd);
  const flesh=new T.MeshStandardMaterial({color:0xffffff,roughness:.81});
  pool('head',round,flesh);
  pool('nose',round,flesh);
  pool('neck',tube,flesh);
  pool('ears',round,flesh);
  pool('eyes',round,mats.black);
  pool('hand',round,flesh);
  pool('hat',cap,mats.black);
  pool('hair',round,mats.black);
  pool('feet',round,mats.beam);
  pool('hem',skirt,cloth);
  pool('top',jacket,cloth);
  pool('arms',cloak,cloth);
  pool('calves',tube,cloth);
  pool('collar',tube,mats.paleCeramic);
  pool('belt',tube,mats.beam);
  pool('pole',tube,mats.oldwood);
  pool('parcel',round,mats.straw);
  pool('cargoBox',boxGeo,mats.oldwood);
  pool('cargoJar',jacket,mats.paleCeramic);
  pool('hoe',boxGeo,mats.iron);
  pool('basket',jacket,mats.straw);
  pool('rope',tube,mats.oldwood);
  const armour=new T.MeshStandardMaterial({color:0x77796f,roughness:.77,metalness:.26});
  pool('helmet',cap,armour);
  pool('helmetRim',tube,armour);
  pool('chinGuard',boxGeo,armour);
  pool('armouredCoat',jacket,armour);
  pool('armourBand',tube,armour);
  pool('pauldron',round,armour);
  pool('spearHead',finial,armour);
  for(let p=0;p<paths.length;p++){
    for(let k=0;k<populations[p];k++){
      const scale=.86+random()*.21;
      if(k%7===0 && p>=2) {
        walkers.push({route:paths[p],started:paths[p].length*(k+.25)/populations[p], speed:.72+random()*.17,
          walking:true,style:k%3, scale:.92+random()*.13, shade:new T.Color(robe[Math.floor(random()*robe.length)]),
          faces:new T.Color(skin[Math.floor(random()*skin.length)]),p,payload:2,phase:random()*TAU});
      }else{
        walkers.push({route:paths[p],started:paths[p].length*(k+random()*.90)/populations[p],speed:.56+random()*.69,
          walking:true,style:k%3,scale,shade:new T.Color(robe[Math.floor(random()*robe.length)]),
          faces:new T.Color(skin[Math.floor(random()*skin.length)]),p,payload:k%4===0?1:0,phase:random()*TAU});
      }
    }
  }
  const bridgeTraffic=makeRoute([[-5.35,25],[-5.35,-22.8],[-4,-24.4],[-2.65,-22.8],[-2.65,24],[-4,25.8]]);
  const extraCrossers=isMobile?7:12;
  for(let i=0;i<extraCrossers;i++) {
    walkers.push({route:bridgeTraffic,started:bridgeTraffic.length*(i+.42)/extraCrossers,speed:.94+i%3*.045,
      walking:true,style:i%3,scale:.89+i%4*.038,shade:new T.Color(robe[(i+3)%robe.length]),
      faces:new T.Color(skin[i%skin.length]),p:2,payload:i%4===0?2:i%3===0?1:0,phase:i*1.69});
  }
  const delivery=makeRoute([[-36.52,7.29],[-36.52,12.36],[-34.9,15.1],[-32.5,18.7],[-32.15,18.44],
    [-35.3,15.2],[-36.52,12.6],[-36.52,9.4]]);
  for(let r=0;r<2;r++){
    walkers.push({route:delivery,started:delivery.length*(.19+r*.49),speed:.70,walking:true,delivery:true,
      style:r,scale:.94+r*.044,shade:new T.Color(robe[1+r*3]),faces:new T.Color(skin[r]),payload:0,phase:r*3.2});
  }
  const stationary = [[-126,23.3],[-36,14.2],[-30,19.2],[60,-23.2],[97,-22.4],[113,-22.3],[130.4,-48],
    [125,-42.5],[10.3,25.1]];
  for(let i=0;i<stationary.length;i++){
    const [x,z]=stationary[i];
    walkers.push({x,z,walking:false,style:i%3,scale:.86+random()*.17,shade:new T.Color(robe[i%robe.length]),
      faces:new T.Color(skin[i%skin.length]),p:3,payload:i%4===0?1:0,phase:random()*TAU});
  }
  for(const [i,stand] of world.trades.entries()){
    const cycle=20+(i%5)*2.2;
    const offset=(i*.38197+.33)%1;
    for(const buyer of [false,true]){
      walkers.push({ stand,buyer,cycle,offset,style:(i+Number(buyer))%3,scale:.91+random()*.12,
        shade:new T.Color(robe[(i*3+Number(buyer)*5)%robe.length]),faces:new T.Color(skin[i%skin.length]),
        payload:0,phase:random()*TAU,speed:1 });
    }
  }
  for(const [i,boat] of boats.entries()){
    walkers.push({boat,x:0,z:0,walking:false,style:i%3,scale:.93,shade:new T.Color(robe[i%robe.length]),
      faces:new T.Color(skin[i%skin.length]),payload:0,phase:random()*TAU});
  }
  for(const cart of carts)walkers.push({cart,walking:true,style:0,scale:.96,speed:1.05,shade:new T.Color(robe[3+cart.index]),
    faces:new T.Color(skin[cart.index]),payload:0,phase:random()*TAU});
  for(const [i,mount] of mounts.entries()){
    walkers.push({mount,seated:true,style:0,scale:.98,shade:new T.Color(robe[5+i]),faces:new T.Color(skin[i]),
      payload:0,phase:i*.9,speed:0});
  }
  function addLocal(spot, traits) {
    const i=walkers.length;
    walkers.push({x:spot.x,z:spot.z,speed:0,payload:0,scale:.96,style:i%3,
      shade:new T.Color(robe[i%robe.length]),faces:new T.Color(skin[i%skin.length]),phase:random()*TAU,
      local:spot,...traits});
  }
  for(const [i,[x,z]] of [[-128,33],[-132,39],[-144,42],[-111,31],[-104,34],[-96,39],[-147,56],[-69,46],[52,44]].entries()) {
    addLocal({x,z},{farmer:i%3===0?'rake':'hoe',heading:i*.95});
  }
  for(const dock of world.wharves) {
    for(let i=0;i<3;i++) {
      const x=dock.x+(i-1)*dock.len*.26;
      const z=dock.z;
      const route=makeRoute([[x,z-dock.side*dock.width*.21],[x+.34,z],[x+1.5,z+dock.side*dock.width*.28]]);
      addLocal({x,z},{porter:i+1,walking:true,route,started:i*1.14,speed:.66+i*.06});
    }
  }
  for(const [x,z,rx,rz] of [[2,-24,1.55,.70],[34,-23.7,1.65,.85],[48,-28.15,1.60,.40],[80,-24.8,1.7,.72],
    [129.5,-45.2,1.35,.82],[147.2,-45.55,1.6,.79],[6,23,1.45,.78]]) {
    for(let i=0;i<2;i++) addLocal({x,z},{child:{rx,rz},scale:.56+i*.10,speed:1.5,phase:i*1.1+x*.2});
  }
  for(const {role,at,yaw,points,level} of world.shopStaff) {
    if(points) {
      const route=makeRoute(points.map(p=>[p.x,p.z]));
      addLocal(points[0],{role,route,level,walking:true,started:0,speed:.66});
    } else addLocal(at,{role,level,heading:yaw,seated:role==='diner'});
  }
  const guards=cityGuards(world,skin);
  walkers.push(...guards);
  const guardPieces={helmet:1,helmetRim:1,chinGuard:2,armouredCoat:1,armourBand:4,pauldron:2,spearHead:1};
  const groups=walkers.length;
  for(const [key,slot] of matsWalk){
    const copies=['hand','arms','calves','feet','collar','basket','rope','ears','eyes'].includes(key)?2:1;
    const capacity=guardPieces[key]?guards.length*guardPieces[key]:groups*copies+(key==='calves'?mounts.length*2:0);
    const model=new T.InstancedMesh(slot.geometry,slot.material,capacity);
    model.instanceMatrix.setUsage(T.DynamicDrawUsage);
    model.castShadow=!['nose','collar','rope'].includes(key);
    model.receiveShadow=true;
    model.frustumCulled=false;
    model.count=0;
    scene.add(model);
    slot.model=model;
  }
  const object=new T.Object3D();
  const quaternion=new T.Quaternion();
  const pos=V(0,0,0);
  const patrolPoint=V(0,0,0), patrolHeading=V(0,0,0);
  let person,x,y,z,yaw,c,s;
  function worldPoint(px,py,pz){
    const k=person.scale;
    return V(x+(px*c+pz*s)*k,y+py*k,z+(-px*s+pz*c)*k);
  }
  function place(key,px,py,pz,sx,sy,sz,shade,tilt=0){
    const slot=matsWalk.get(key);
    object.position.copy(worldPoint(px,py,pz));
    object.scale.set(sx,sy,sz).multiplyScalar(person.scale);
    object.rotation.set(tilt,yaw,0,'YXZ');
    object.updateMatrix();
    slot.model.setMatrixAt(slot.used,object.matrix);
    slot.model.setColorAt(slot.used++,shade);
  }
  function segment(key,a,b,thick,shade) {
    const p=worldPoint(...a), q=worldPoint(...b), size=thick*person.scale;
    pos.copy(q).sub(p);
    quaternion.setFromUnitVectors(up,pos.clone().normalize());
    const slot=matsWalk.get(key);
    object.position.copy(p).lerp(q,.5);
    object.quaternion.copy(quaternion);
    object.scale.set(size,pos.length(),size*.85);
    object.updateMatrix();
    slot.model.setMatrixAt(slot.used,object.matrix);
    slot.model.setColorAt(slot.used++,shade);
  }
  const pale=new T.Color(0xe4d8bb);
  const black=new T.Color(0x938678);
  const grain=new T.Color(0xbfa57d);
  const steel=new T.Color(0xc6cbcd);
  const darkSteel=new T.Color(0x918e89);
  const goodsColors={pot:new T.Color(0xb9c1a6),bread:new T.Color(0xe4bd83),
    cloth:new T.Color(0xcc9385),fruit:new T.Color(0xb5a866)};
  const tradeDistanceSquared=(isMobile?60:86)**2;
  function update(time,view) {
    for(const slot of matsWalk.values()) slot.used=0;
    for(person of walkers){
      if(person.stand&&view&&person.stand.seller.distanceToSquared(view)>tradeDistanceSquared)continue;
      if(person.local&&view&&(person.local.x-view.x)**2+(person.local.z-view.z)**2>tradeDistanceSquared)continue;
      let moving=person.walking, gesture=0, offered=false, cargo=0;
      if(person.child){
        const angle=time*1.11+person.phase;
        x=person.x+Math.cos(angle)*person.child.rx;
        z=person.z+Math.sin(angle)*person.child.rz;
        yaw=Math.atan2(-Math.sin(angle)*person.child.rx,Math.cos(angle)*person.child.rz);
        moving=true;
      }else if(person.post){
        ({x,z}=person.post.position);
        yaw=person.post.yaw+.13*Math.sin(time*.61+person.phase);
      }else if(person.patrol){
        const {route,length,lead,side}=person.patrol;
        const u=(time*person.speed+lead)%length/length;
        route.getPointAt(u,patrolPoint);
        route.getTangentAt(u,patrolHeading);
        x=patrolPoint.x+patrolHeading.z*side;
        z=patrolPoint.z-patrolHeading.x*side;
        yaw=Math.atan2(patrolHeading.x,patrolHeading.z);
      }else if(person.mount){
        const horse=person.mount.root;
        x=horse.position.x;z=horse.position.z;yaw=horse.rotation.y;
      }else if(person.stand){
        const { stand,buyer,cycle,offset }=person;
        const phase=(time/cycle+offset)%1;
        const arrives=T.MathUtils.smoothstep(phase,.03,.26);
        const leaves=T.MathUtils.smoothstep(phase,.73,.96);
        const reach=T.MathUtils.smoothstep(phase,.34,.46)*(1-T.MathUtils.smoothstep(phase,.63,.73));
        gesture=reach;
        offered=buyer?phase>.55&&phase<.98:phase>=.30&&phase<=.55;
        if(buyer){
          const atCounter=arrives-leaves;
          x=T.MathUtils.lerp(stand.entry.x,stand.buyer.x,atCounter);
          z=T.MathUtils.lerp(stand.entry.z,stand.buyer.z,atCounter);
          const departing=phase>.73&&phase<.96;
          moving=phase>.03&&phase<.26||departing;
          yaw=stand.yaw+(departing?0:Math.PI)+.13*Math.sin(time*1.15+person.phase);
        }else{
          ({x,z}=stand.seller);
          yaw=stand.yaw+.14*Math.sin(time*.77+person.phase);
        }
      }else if(person.cart){
        const cart=person.cart.root; yaw=cart.rotation.y;
        x=cart.position.x-Math.sin(yaw)*1.93;z=cart.position.z-Math.cos(yaw)*1.93;
      }else if(person.walking) {
        [x,z,yaw]=sample(person.route,person.started+time*person.speed);
        const offset=person.delivery?.095:person.porter||person.role?0:Math.sin(person.phase)*.58;
        if(person.delivery)person.payload=(person.started+time*person.speed)%person.route.length<person.route.length*.50?1:0;
        if(person.porter && person.route.segments[1].to>(person.started+time*person.speed)%person.route.length) cargo=person.porter;
        if(person.role==='server')cargo=4;
        x+=Math.cos(yaw)*offset;
        z-=Math.sin(yaw)*offset;
        if(person.p===0||person.p===3){
          for(const {root} of mounts){
            const dx=x-root.position.x,dz=z-root.position.z;
            if(Math.abs(dx)>4.5||Math.abs(dz)>4.5)continue;
            const rightX=Math.cos(root.rotation.y),rightZ=-Math.sin(root.rotation.y);
            const side=dx*rightX+dz*rightZ, ahead=-dx*rightZ+dz*rightX;
            const space=(1-T.MathUtils.smoothstep(Math.abs(ahead),1.2,4.2))
              *(1-T.MathUtils.smoothstep(Math.abs(side),.25,1.13))*.82*(side>=0?1:-1);
            const nx=x+rightX*space,nz=z+rightZ*space;
            if(world.walkHeight(nx,nz)!==null&&!world.isObstacle(nx,nz,.15)){x=nx;z=nz;}
          }
        }
      } else {
        ({x,z}=person);
        yaw = (person.heading??person.phase) + .15*Math.sin(time*.64+person.phase);
        if(person.role)gesture=(1+Math.sin(time*1.6+person.phase))*.50;
      }
      y=world.walkHeight(x,z)??groundY(x,z);
      if(person.level!==undefined)y=person.level;
      if(person.post)y=person.post.position.y;
      if(person.boat){
        const boat=person.boat.root;
        x=boat.position.x-person.boat.route*person.boat.length*.35;
        z=boat.position.z;
        y=boat.position.y+.82;
        yaw=person.boat.route>0?Math.PI/2:-Math.PI/2;
      }
      if(person.mount)y=person.mount.root.position.y+1.06+person.mount.bob;
      c=Math.cos(yaw);s=Math.sin(yaw);
      const progress=time*(4.1+person.speed*.97)+person.phase;
      const digging=person.farmer?(1+Math.sin(time*2.8+person.phase))*.5:0;
      const stride=moving?Math.sin(progress):0;
      const upper=person.seated?-.43+.012*Math.sin(time*2.4+person.phase):person.child?.09*Math.abs(Math.sin(progress))
        :moving?.026*Math.cos(progress*2):.012*Math.sin(time*2.4+person.phase)-gesture*(person.buyer?.065:.025)-digging*.21;
      const [robeColor,faceColor]=[person.shade,person.faces];
      const skirtLength=person.seated?.38:person.style===1?.79:.63;
      place('hem',0,.96-skirtLength/2+upper,0,person.style===1?.263:.218,skirtLength,.177,robeColor);
      place('top',0,1.17+upper,digging*.13,.239,.46,.133,robeColor,.05+digging*.36);
      place('belt',0,.962+upper,0,.173,.062,.151,black);
      place('neck',0,1.416+upper,.007,.06,.111,.058,faceColor);
      place('head',0,1.548+upper,.012,.101,.122,.096,faceColor);
      for(const side of [-1,1]){
        place('ears',side*.101,1.542+upper,.018,.021,.035,.020,faceColor);
        place('eyes',side*.044,1.568+upper,.102,.012,.009,.006,black);
      }
      place('nose',0,1.54+upper,.108,.032,.027,.028,faceColor);
      if(person.guard){
        place('helmet',0,1.625+upper,0,.141,.153,.138,steel);
        place('helmetRim',0,1.622+upper,.009,.146,.025,.143,darkSteel);
        place('armouredCoat',0,1.174+upper,0,.252,.366,.157,darkSteel);
        for(let row=0;row<4;row++){
          const high=.85+upper+row*.116;
          place('armourBand',0,high,0,.233+row*.006,.034,.158,row%2?steel:darkSteel);
        }
        segment('pole',[.309,.11+upper,.255],[.309,2.041+upper,.255],.022,grain);
        place('spearHead',.309,2.132+upper,.255,.049,.14,.027,steel);
      }else{
        place('hat',0,1.635+upper,.003,.108,.075,.104,black);
        if(person.style===1) place('hair',0,1.67+upper,-.082,.061,.075,.067,black);
      }
      for(const side of [-1,1]){
        const legMotion=stride*side;
        const heel=.067+Math.max(0,-legMotion)*.095;
        if(person.mount){
          segment('calves',[side*.14,.53,-.01],[side*.39,.21,.16],.092,robeColor);
          segment('calves',[side*.39,.21,.16],[side*.37,-.185,.02],.060,robeColor);
          place('feet',side*.37,-.20,.072,.074,.063,.116,black);
        }else{
          segment('calves',[side*.081,.58,-legMotion*.016],[side*.079,heel+.055,legMotion*.16],.067,robeColor);
          place('feet',side*.079,heel,legMotion*.16+.035,.075,.058,.117,black);
        }
        if(person.guard){
          place('chinGuard',side*.121,1.568+upper,-.036,.030,.127,.119,darkSteel);
          place('pauldron',side*.24,1.339+upper,0,.107,.091,.159,steel,.13);
        }
        const forearm=person.farmer?[side*.15,.87+upper-digging*.14-side*.14,.27+digging*.18+side*.21]
          :cargo?[side*.22,.88+upper,.33]
          :person.guard&&side===1?[.309,1.12+upper,.255]
          :person.mount?[side*.155,.61,.43]:person.stand&&!moving?[side*.16,.87+upper+gesture*.27,.245+gesture*(side>0?.26:.09)]
          :person.seated?[side*.14,.51+gesture*.18,.31]:person.role?[side*.17,.88+upper+gesture*.16,.25+gesture*.16]
          :person.cart?[side*.22,.68+upper,.27]:person.payload===2 && side===1 ? [side*.17,1.43+upper,.12] :
          [side*(person.style===1?.191:.252),.854+upper,-legMotion*.129+.038];
        segment('arms',[side*.208,1.34+upper,.005],forearm,.092,robeColor);
        place('hand',...forearm,.052,.064,.049,faceColor);
        if(offered&&side===1)place('parcel',forearm[0],forearm[1]+.06,forearm[2]+.019,.077,.086,.077,goodsColors[person.stand.goods]);
        segment('collar',[side*.105,1.396+upper,.087],[-side*.036,1.216+upper,.123],.021,pale);
      }
      if(person.payload===1) place('parcel',.229,.90+upper,.17,.181,.147,.117,grain);
      if(cargo===1)place('cargoBox',0,1.0+upper,.38,.43,.34,.31,grain);
      if(cargo===2)place('parcel',0,1.0+upper,.40,.24,.19,.17,grain);
      if(cargo===3)place('cargoJar',0,1.03+upper,.39,.18,.42,.18,pale);
      if(cargo===4){
        place('cargoBox',0,.91+upper,.38,.50,.04,.32,pale);
        place('cargoJar',0,1.02+upper,.38,.085,.18,.085,pale);
      }
      if(person.farmer){
        const tip=[.44,.57+upper-digging*.31,.89+digging*.17];
        segment('pole',[-.33,1.18+upper,-.23+digging*.18],tip,.024,grain);
        if(person.farmer==='rake') {
          place('hoe',...tip,.34,.047,.045,grain);
          for(const tooth of [-.13,-.065,0,.065,.13]) {
            place('hoe',tip[0]+tooth,tip[1]-.062,tip[2],.022,.13,.022,grain,.24);
          }
        } else place('hoe',...tip,.205,.103,.044,darkSteel,.58);
      }
      if(person.payload===2){
        segment('pole',[-.61,1.436+upper,0],[.61,1.427+upper,0],.027,grain);
        for(const side of [-1,1]){
          const basketX=side*.55+stride*.018;
          segment('rope',[side*.55,1.42+upper,0],[basketX,1.0+upper,.013],.014,grain);
          place('basket',basketX,.92+upper,.013,.167,.23,.158,grain);
        }
      }
    }
    for(const slot of matsWalk.values()){
      slot.model.count=slot.used;
      slot.model.instanceMatrix.needsUpdate=true;
      if(slot.model.instanceColor)slot.model.instanceColor.needsUpdate=true;
    }
  }
  return {update,count:walkers.length};
}

function createCarts(scene,mats) {
  return [[-40,18,-17,21], [5,-24,89,-25], [111,-25,154,-26], [60,-23,20,-23]].map(([a,b,c,d],index)=>{
    const root=new T.Group(), wheels=[];
    mesh(boxGeo,mats.timber,root,0,.64,.17,1.13,.14,1.62);
    for(const s of [-1,1]){
      mesh(boxGeo,mats.oldwood,root,s*.51,.86,.60,.09,.32,.86);
      mesh(boxGeo,mats.beam,root,s*.25,.59,-.96,.09,.081,1.67);
      const wheel=new T.Group();
      wheel.position.set(s*.65,.43,.34);
      root.add(wheel);
      mesh(torus,mats.beam,wheel,0,0,0,.43,.43,.43).rotation.y=Math.PI/2;
      mesh(tube,mats.timber,wheel,0,0,0,.136,.16,.136).rotation.z=Math.PI/2;
      for(let j=0;j<8;j++){
        const angle=j*TAU/8;
        stick(wheel,mats.oldwood,V(0,0,0),V(0,.42*Math.cos(angle),.42*Math.sin(angle)),.026);
      }
      wheels.push(wheel);
    }
    for(let j=0;j<5;j++) mesh(round,mats.straw,root,(j%2-.5)*.49,.92+Math.floor(j/4)*.37,.16+j%3*.21,.37,.29,.41);
    wheels.forEach(wheel=>batchParts(wheel));batchParts(root);
    scene.add(root);
    return { root,wheels,a,b,c,d,phase:index*.29,index };
  });
}

function createMounts(scene,world) {
  const mats=world.materials;
  const street=[ [8,-25.1],[28,-25.7],[58,-25.55],[90,-25.72],[124,-25.8],[153,-26.0],
    [157,-24.9],[151,-23.7],[116,-23.7],[85,-23.35],[54,-23.55],[24,-23.45],[11,-23.45] ];
  const road=[ [-139,24.5],[-123,24.2],[-105,20.2],[-85,19.46],[-77,17.65],[-71,17.65],[-62,18.4],[-54,18.1],
    [-56,21.3],[-79,22.15],[-95,21.6],[-107,21.0],[-127,26.5],[-138,27.0] ];
  const coatColors=[0x83573d,0x665953,0x996942];
  const blanketColors=[0x984d39,0x426c64,0xa07443];
  const routes=[street,street,road];
  const toward=new T.Vector3(), midpoint=new T.Vector3(), difference=new T.Vector3();
  const attach=(part,a,b)=>{
    difference.subVectors(b,a);
    part.position.copy(a).lerp(b,.5);
    part.scale.y=difference.length();
    part.quaternion.setFromUnitVectors(up,difference.normalize());
  };
  return routes.map((points,index)=>{
    const route=new T.CatmullRomCurve3(points.map(([x,z])=>V(x,0,z)),true,'centripetal');
    const length=route.getLength();
    const pace=[2.18,1.86,2.38][index];
    const start=[27,166,31][index];
    const root=new T.Group(), torso=new T.Group(), tail=new T.Group();
    root.add(torso);
    scene.add(root);
    const coat=new T.MeshStandardMaterial({color:coatColors[index],roughness:.91});
    const muzzle=new T.MeshStandardMaterial({color:index===1?0x857970:0x574337,roughness:.88});
    const dark=new T.MeshStandardMaterial({color:0x2f271e,roughness:.94});
    const blanket=mats.sage.clone();
    blanket.color.setHex(blanketColors[index]);
    const shape=(m,x,y,z,w,h,d,pitch=0,parent=torso)=>{
      const part=mesh(round,m,parent,x,y,z,w,h,d);
      part.rotation.x=pitch;
      return part;
    };
    shape(coat,0,1.08,-.06,.30,.324,.75);
    shape(coat,0,1.04,-.55,.275,.337,.328);
    shape(coat,0,1.13,.52,.252,.356,.31);
    shape(coat,0,1.47,.70,.175,.434,.239,.52);
    shape(coat,0,1.68,.88,.131,.275,.162,.55);
    shape(coat,0,1.775,1.015,.155,.162,.261,.54);
    shape(muzzle,0,1.603,1.275,.121,.107,.188,.45);
    shape(dark,0,1.84,.912,.077,.134,.159,.37);
    for(const side of [-1,1]){
      shape(coat,side*.079,1.986,.986,.036,.138,.051,.24);
      shape(dark,side*.078,2.008,1.014,.022,.075,.025,.21);
      shape(dark,side*.124,1.777,1.101,.024,.025,.030);
      shape(dark,side*.084,1.621,1.411,.029,.019,.021);
      shape(blanket,side*.267,1.208,-.125,.058,.195,.367);
      shape(mats.beam,side*.299,1.06,-.138,.022,.280,.062);
      stick(torso,mats.beam,V(side*.096,1.638,1.25),V(side*.156,1.69,.42),.012);
      stick(torso,mats.beam,V(side*.106,1.672,1.25),V(side*.139,1.86,.981),.016);
      const stirrup=mesh(torus,mats.iron,torso,side*.36,.864,.082,.088,.112,.065);
      stirrup.rotation.y=Math.PI/2;
    }
    shape(blanket,0,1.383,-.112,.284,.105,.393);
    shape(mats.beam,0,1.476,-.083,.214,.104,.271);
    shape(mats.timber,0,1.507,.144,.183,.090,.044);
    shape(mats.timber,0,1.505,-.304,.183,.090,.054);
    for(let k=0;k<9;k++){
      shape(dark,0,1.87-k*.064,.815-k*.042,.056,.104,.082,.40);
    }
    tail.position.set(0,1.28,-.77);
    torso.add(tail);
    shape(dark,0,-.15,-.114,.060,.24,.061,.64,tail);
    shape(dark,0,-.37,-.287,.074,.252,.069,.37,tail);
    shape(dark,0,-.547,-.377,.059,.183,.052,.43,tail);
    batchParts(torso);
    batchParts(tail);

    const legs=[];
    for(const front of [true,false])for(const side of [-1,1]){
      const x=side*.183,z=front?.507:-.535;
      const hip=V(x,front?1.076:1.065,z),knee=V(x,.544,z),hoof=V(x,.105,z);
      const thigh=stick(root,coat,hip,knee,front?.096:.125,jacket);
      const calf=stick(root,coat,knee,hoof,front?.057:.065,skirt);
      const foot=shape(dark,x,.073,z,.064,.072,.108,0,root);
      legs.push({front,x,z,hip,knee,hoof,thigh,calf,foot,phase:(front?0:Math.PI)+side*Math.PI*.5});
    }
    const mount={root,bob:0,update};
    function update(time){
      const distance=(time*pace+start)%length;
      route.getPointAt(distance/length,midpoint);
      route.getTangentAt(distance/length,toward);
      const {x,z}=midpoint;
      root.position.set(x,world.walkHeight(x,z)??groundY(x,z),z);
      root.rotation.y=Math.atan2(toward.x,toward.z);
      const gait=time*pace*4.1+index;
      mount.bob=.027*Math.cos(gait*2);
      torso.position.y=mount.bob;
      tail.rotation.y=Math.sin(gait*.52)*.31;
      for(const leg of legs){
        const phase=gait+leg.phase;
        const swing=Math.sin(phase), lift=Math.max(0,Math.cos(phase));
        leg.hip.y=(leg.front?1.076:1.065)+mount.bob;
        leg.knee.set(leg.x,.51+lift*.17,leg.z+swing*.147+(leg.front?-.13:.13)*lift);
        leg.hoof.set(leg.x,.128+lift*.20,leg.z+swing*.258);
        attach(leg.thigh,leg.hip,leg.knee);
        attach(leg.calf,leg.knee,leg.hoof);
        leg.foot.position.set(leg.x,leg.hoof.y-.055,leg.hoof.z+.027);
        leg.foot.rotation.x=-lift*.42;
      }
    }
    return mount;
  });
}

export function createLife(scene, world, small) {
  const random=seeded(1973);
  const boats=buildVessels(scene,world.materials,random,world.wharves);
  const carts=createCarts(scene,world.materials);
  const mounts=createMounts(scene,world);
  const walkers=createWalkers(scene,world,world.materials,random,small,boats,carts,mounts);
  function update(time,view) {
    for(const boat of boats){
      const {root,mast,wake,oar,rudder,length,phase,route,docked}=boat;
      const x=docked?boat.start:((((boat.start+183)+time*boat.speed*route)%374+374)%374)-183;
      const bank=riverCenter(x);
      const steer=Math.sin(time*.22+phase)*.22;
      const z=bank+boat.lane+(docked?steer*.50:steer+Math.sin(x*.076+phase)*.39);
      const bob=.063*Math.sin(time*1.1+phase)+.026*Math.cos(time*1.63+phase);
      const tangent=riverCenter(x+1)-bank;
      const heading=(route>0?0:Math.PI)-Math.atan(tangent)*.91;
      root.position.set(x,waterY-.02+bob,z);
      root.rotation.set(Math.sin(time*1.3+phase)*.034,heading,Math.sin(time*.79+phase)*.021,'YXZ');
      const distanceToBridge=Math.abs(x-bridgeX);
      const lowered=1-T.MathUtils.smoothstep(distanceToBridge,8.5+length*.24,21);
      if(!docked)mast.rotation.z=-route*lowered*1.48;
      oar.rotation.y=Math.sin(time*1.7+phase)*.25;
      oar.rotation.z=.09*Math.cos(time*1.7+phase);
      rudder.rotation.y=.12*Math.sin(time*.49+phase);
      wake.position.x=x;wake.position.z=z;wake.rotation.y=heading;
      wake.visible=!docked;
      wake.userData.time.value=time;
    }
    for(const cart of carts){
      const {root,wheels,a,b,c,d,phase,index}=cart;
      const distance=Math.hypot(c-a,d-b);
      const progress=(time*(1.0+index*.05)/distance+phase)%2;
      const forward=progress<1;
      const t=forward?progress:2-progress;
      const x=T.MathUtils.lerp(a,c,t);
      const z=T.MathUtils.lerp(b,d,t);
      root.position.set(x,world.walkHeight(x,z)??groundY(x,z),z);
      root.rotation.y=Math.atan2(c-a,d-b)+(forward?0:Math.PI);
      wheels.forEach(wheel=>wheel.rotation.x=time*2.30);
    }
    for(const mount of mounts) mount.update(time);
    walkers.update(time,view);
  }
  return {update,boats,carts,mounts,headcount:walkers.count};
}
