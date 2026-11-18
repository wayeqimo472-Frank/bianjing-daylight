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

function buildVessels(scene,mats,random) {
  const barges=[];
  const hullMat=mats.timber.clone();
  hullMat.color.setHex(0xa68c6b);
  hullMat.side=T.DoubleSide;
  for(let i=0;i<9;i++){
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
    const docked=i>=7;
    if(docked) mast.rotation.z=-1.42;
    batchParts(mast);batchParts(oar);batchParts(root,[rudder]);
    scene.add(root);
    const wake = buildWake(scene, length, width);
    barges.push({ root, mast, oar, rudder, wake, length, docked, route:i%2===0?1:-1,
      lane:docked?(i===7?10.5:-10.9):((i%2===0?1:-1)*(2.48+random()*6.7)),
      speed:.72+random()*.76,start:docked?(i===7?-37:46):(-160+i*36+random()*11),phase:random()*TAU });
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

function createWalkers(scene,world,mats,random,isMobile) {
  const paths=circuits.map(makeRoute);
  const walkers=[];
  const populations=isMobile?[6,8,13,17,7,7,7]:[10,12,24,29,9,12,11];
  const robe= [0x9f9273,0xbba984,0x8b826b,0x7b856a,0xb5a485,0xa8816e,0x6d8180,0xa68e73,0x8e817f,0xbea87f,0x747d65];
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
  pool('basket',jacket,mats.straw);
  pool('rope',tube,mats.oldwood);
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
  const delivery=makeRoute([[-36.52,7.29],[-36.52,12.36],[-34.9,15.1],[-32.5,18.7],[-32.15,18.44],
    [-35.3,15.2],[-36.52,12.6],[-36.52,9.4]]);
  for(let r=0;r<2;r++){
    walkers.push({route:delivery,started:delivery.length*(.19+r*.49),speed:.70,walking:true,delivery:true,
      style:r,scale:.94+r*.044,shade:new T.Color(robe[1+r*3]),faces:new T.Color(skin[r]),payload:0,phase:r*3.2});
  }
  const stationary = [[-126,23.3],[-36,14.2],[-30,19.2],[19.9,-21.1],[26.3,-21.5],[38,-20.9],[47.6,-33.6],
    [50.5,-31.6],[65.2,-35.12],[72.5,-35.22],[66.1,-38.77],[60,-23.2],[97,-22.4],[113,-22.3],[130.4,-48],[125,-42.5],[10.3,25.1]];
  for(let i=0;i<stationary.length;i++){
    const [x,z]=stationary[i];
    walkers.push({x,z,walking:false,seated:i>=8&&i<=10,style:i%3,scale:.86+random()*.17,shade:new T.Color(robe[i%robe.length]),
      faces:new T.Color(skin[i%skin.length]),p:3,payload:i%4===0?1:0,phase:random()*TAU});
  }
  const groups=walkers.length+16;
  for(const [key,slot] of matsWalk){
    const copies=['hand','arms','calves','feet','collar','basket','rope','ears','eyes'].includes(key)?2:1;
    const model=new T.InstancedMesh(slot.geometry,slot.material,groups*copies);
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
  function update(time) {
    for(const slot of matsWalk.values()) slot.used=0;
    for(person of walkers){
      if(person.cart){
        const cart=person.cart.root; yaw=cart.rotation.y;
        x=cart.position.x-Math.sin(yaw)*1.93;z=cart.position.z-Math.cos(yaw)*1.93;
      }else if(person.walking) {
        [x,z,yaw]=sample(person.route,person.started+time*person.speed);
        const offset=person.delivery?.095:Math.sin(person.phase)*.58;
        if(person.delivery)person.payload=(person.started+time*person.speed)%person.route.length<person.route.length*.50?1:0;
        x+=Math.cos(yaw)*offset;
        z-=Math.sin(yaw)*offset;
      } else {
        ({x,z}=person);
        yaw = (person.seated?Math.PI:person.phase) + .15*Math.sin(time*.64+person.phase);
      }
      y=world.walkHeight(x,z)??groundY(x,z);
      if(person.boat){
        const boat=person.boat.root;
        x=boat.position.x-person.boat.route*person.boat.length*.35;
        z=boat.position.z;
        y=boat.position.y+.82;
        yaw=person.boat.route>0?Math.PI/2:-Math.PI/2;
      }
      c=Math.cos(yaw);s=Math.sin(yaw);
      const moving=person.walking;
      const progress=time*(4.1+person.speed*.97)+person.phase;
      const stride=moving?Math.sin(progress):0;
      const upper=person.seated?-.43+.012*Math.sin(time*2.4+person.phase):moving?.026*Math.cos(progress*2):.012*Math.sin(time*2.4+person.phase);
      const [robeColor,faceColor]=[person.shade,person.faces];
      const skirtLength=person.seated?.38:person.style===1?.79:.63;
      place('hem',0,.96-skirtLength/2+upper,0,person.style===1?.263:.218,skirtLength,.177,robeColor);
      place('top',0,1.17+upper,0,.239,.46,.133,robeColor,.05);
      place('belt',0,.962+upper,0,.173,.062,.151,black);
      place('neck',0,1.416+upper,.007,.06,.111,.058,faceColor);
      place('head',0,1.548+upper,.012,.101,.122,.096,faceColor);
      for(const side of [-1,1]){
        place('ears',side*.101,1.542+upper,.018,.021,.035,.020,faceColor);
        place('eyes',side*.044,1.568+upper,.102,.012,.009,.006,black);
      }
      place('nose',0,1.54+upper,.108,.032,.027,.028,faceColor);
      place('hat',0,1.635+upper,.003,.108,.075,.104,black);
      if(person.style===1) place('hair',0,1.67+upper,-.082,.061,.075,.067,black);
      for(const side of [-1,1]){
        const legMotion=stride*side;
        const heel=.067+Math.max(0,-legMotion)*.095;
        segment('calves',[side*.081,.58,-legMotion*.016],[side*.079,heel+.055,legMotion*.16],.067,robeColor);
        place('feet',side*.079,heel,legMotion*.16+.035,.075,.058,.117,black);
        const forearm=person.seated?[side*.14,.51+.021*Math.sin(time+person.phase),.31]:person.cart?[side*.22,.68+upper,.27]:person.payload===2 && side===1 ? [side*.17,1.43+upper,.12] :
          [side*(person.style===1?.191:.252),.854+upper,-legMotion*.129+.038];
        segment('arms',[side*.208,1.34+upper,.005],forearm,.092,robeColor);
        place('hand',...forearm,.052,.064,.049,faceColor);
        segment('collar',[side*.105,1.396+upper,.087],[-side*.036,1.216+upper,.123],.021,pale);
      }
      if(person.payload===1) place('parcel',.229,.90+upper,.17,.181,.147,.117,grain);
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
  function crew(barges){
    for(let i=0;i<barges.length;i++){
      walkers.push({boat:barges[i],x:0,z:0,walking:false,style:i%3,scale:.93,shade:new T.Color(robe[i]),
        faces:new T.Color(skin[i%skin.length]),payload:0,phase:random()*TAU});
    }
  }
  function push(carts){
    for(const cart of carts)walkers.push({cart,walking:true,style:0,scale:.96,speed:1.05,shade:new T.Color(robe[3+cart.index]),faces:new T.Color(skin[cart.index]),payload:0,phase:random()*TAU});
  }
  return {update,crew,push,count:walkers.length};
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

export function createLife(scene, world, small) {
  const random=seeded(1973);
  const boats=buildVessels(scene,world.materials,random);
  const walkers=createWalkers(scene,world,world.materials,random,small);
  walkers.crew(boats);
  const carts=createCarts(scene,world.materials);
  walkers.push(carts);
  function update(time) {
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
    walkers.update(time);
  }
  return {update,boats,carts,headcount:walkers.count};
}
