import * as T from 'three';
import { arch,bounds,bridgeX,createTextures,riverCenter,riverHalf,scenic,stops,waterY } from './setting.js';
import { createWorld } from './world.js';
import { createLife } from './life.js';
import { createEnvironment } from './environment.js';
import { setupSound } from './sound.js';

const byId=id=>document.getElementById(id);
const app=byId('experience');
const canvas=byId('world');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const touch=matchMedia('(pointer: coarse)');
const small=touch.matches||innerWidth<680;
const clamp=T.MathUtils.clamp;
const number=i=>String(i).padStart(2,'0');
const V=(x,y,z)=>new T.Vector3(x,y,z);
const route=[...stops.flatMap(stop=>[[stop.x,stop.z],...stop.path])];

const labels = [
  { stop:1, point:V(-31,.6,-4), button:null },
  { stop:3, point:V(bridgeX,7.5,.7), button:null },
  { stop:4, point:V(28,4.5,-25.2), button:null },
  { stop:7, point:V(98,11,-24), button:null }
];

async function launch() {
  const renderer=new T.WebGLRenderer({canvas,antialias:!small,alpha:false,powerPreference:'high-performance'});
  const scene=new T.Scene();
  const camera=new T.PerspectiveCamera(small?64:52,1,.12,340);
  const wind={value:0};
  renderer.setClearColor(0xc2d4c4);
  renderer.outputColorSpace=T.SRGBColorSpace;
  renderer.toneMapping=T.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.08;
  renderer.shadowMap.enabled=true;
  renderer.shadowMap.autoUpdate=false;
  renderer.shadowMap.type=T.PCFShadowMap;
  const textures=createTextures();
  const world=createWorld(scene,textures,wind);
  const environment=createEnvironment(scene,renderer,textures,small);
  const life=createLife(scene,world,small);
  renderer.compile(scene,camera);

  const sound=setupSound(byId('sound'),byId('sound-label'));
  const keys=new Set();
  const pointer={id:null,x:0,y:0};
  const thumb={id:null,x:0,y:0};
  const player=V(0,0,0);
  const lookRay=V(0,0,0);
  const lastLifeView=V(0,0,0);
  const mapView=byId('map-view');
  const map=byId('map');
  const m=map.getContext('2d');
  let ready=false,mode='scenic',scenicIndex=0,index=-1;
  let yaw=0,pitch=0,tour=null,paused=reduced.matches;
  let time=0,dayOffset=2.40,frame=0,lastFrame=0,lastClock='';
  let actionPending=false,frameHandle=null;
  let markerX,markerZ;
  const routeButtons=[];
  const mapButtons=[];
  const towerPlace={area:'城墙步道',name:'城门楼',note:'扶墙可望见街市与汴河。门楼从内廊进入，案上铺着汴京水陆图。'};
  let displayedPlace;
  const miniMap={ west:-155,east:174,north:-68,south:55 };
  const mapX=x=>(x-miniMap.west)/(miniMap.east-miniMap.west);
  const mapY=z=>(z-miniMap.north)/(miniMap.south-miniMap.north);
  const pathProblems=[];

  for(let i=1;i<route.length;i++){
    const [ax,az]=route[i-1], [bx,bz]=route[i];
    const length=Math.hypot(bx-ax,bz-az);
    for(let j=0;j<=Math.ceil(length);j++){
      const k=j/Math.max(1,Math.ceil(length));
      const x=T.MathUtils.lerp(ax,bx,k),z=T.MathUtils.lerp(az,bz,k);
      if(world.walkHeight(x,z)===null||world.isObstacle(x,z,.16)){
        pathProblems.push([i,+x.toFixed(2),+z.toFixed(2)]);
        break;
      }
    }
  }
  if(pathProblems.length)console.warn('Tour route intersects scene geometry',pathProblems);

  function size() {
    const width=app.clientWidth,height=app.clientHeight;
    camera.aspect=width/height;
    camera.fov=width<510?62:52;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(devicePixelRatio,small?1.05:1.40));
    renderer.setSize(width,height,false);
    if(!byId('map-panel').hidden)drawMap();
  }
  new ResizeObserver(size).observe(app);
  size();

  function routeButton(stop,i,mapButton=false){
    const button=document.createElement('button');
    button.type='button';
    button.className=mapButton?'':'route-stop';
    const num=document.createElement('b');
    num.textContent=number(i+1);
    num.setAttribute('aria-hidden','true');
    button.append(num,document.createTextNode(stop.name));
    button.addEventListener('click',()=>{
      closeMap(false);
      transition(()=>enter(i,false));
    });
    return button;
  }
  stops.forEach((stop,i)=>{
    const li=document.createElement('li');
    const stopButton=routeButton(stop,i);
    li.append(stopButton);
    byId('route').append(li);
    routeButtons.push(stopButton);
    const item=document.createElement('li');
    const target=routeButton(stop,i,true);
    item.append(target);
    byId('map-list').append(item);
    const dot=document.createElement('button');
    dot.type='button';
    dot.className='map-dot';
    dot.title=stop.name;
    dot.setAttribute('aria-label',stop.name);
    dot.textContent=String(i+1);
    dot.style.left=mapX(stop.x)*100+'%';
    dot.style.top=mapY(stop.z)*100+'%';
    dot.addEventListener('click',()=>target.click());
    byId('map-pins').append(dot);
    mapButtons.push([target,dot]);
  });

  for(const label of labels){
    const button=document.createElement('button');
    button.type='button';button.className='world-label';button.textContent=stops[label.stop].name;
    button.addEventListener('click',()=>transition(()=>enter(label.stop,false)));
    byId('labels').append(button);label.button=button;
  }
  function placeLabels() {
    if(mode!=='scenic'||small)return;
    const width=app.clientWidth,height=app.clientHeight;
    for(const label of labels){
      const p=lookRay.copy(label.point).project(camera);
      const x=(p.x+1)/2*width,y=(1-p.y)/2*height;
      const intro=byId('intro').getBoundingClientRect();
      const occluded=x>intro.left-8&&x<intro.right+32&&y>intro.top-30&&y<intro.bottom+12;
      label.button.hidden=p.z<-.92||p.z>1||x<22||x>width-94||y<92||y>height-150||occluded;
      if(!label.button.hidden)label.button.style.transform='translate3d('+x.toFixed(1)+'px,'+y.toFixed(1)+'px,0)';
    }
  }

  function showPlace(place){
    if(!place||displayedPlace===place)return;
    displayedPlace=place;
    byId('place-area').textContent=place.area;
    byId('place-name').textContent=place.name;
    byId('place-note').textContent=place.note;
  }
  function setIndex(i, scroll=false){
    if(index===i)return;
    index=i;
    showPlace(stops[i]);
    routeButtons.forEach((b,k)=>{
      const current=k===i;
      for(const button of [b,...mapButtons[k]]){
        if(current)button.setAttribute('aria-current','location');
        else button.removeAttribute('aria-current');
      }
      if(current&&scroll){
        const list=byId('route');
        const left=b.offsetLeft;
        if(left<list.scrollLeft||left+b.offsetWidth>list.scrollLeft+list.clientWidth){
          list.scrollTo({left:Math.max(0,left-list.clientWidth/2+b.offsetWidth/2),behavior:reduced.matches?'instant':'smooth'});
        }
      }
    });
  }

  function updateHUD() {
    const walking=mode!=='scenic';
    app.classList.toggle('walking',walking);
    byId('intro').hidden=walking;
    byId('walk-hud').hidden=!walking;
    byId('look-help').hidden=!walking||small||mode==='tour';
    byId('joystick').hidden=!small||mode!=='walk';
    byId('take-control').hidden=small||mode!=='walk'||typeof canvas.requestPointerLock!=='function';
    byId('tour').hidden=!walking;
    byId('tour').setAttribute('aria-pressed',String(mode==='tour'));
    byId('tour').firstElementChild.textContent=mode==='tour'?'Ⅱ 结束漫游':'▷ 自动漫游';
    byId('aim').hidden=document.pointerLockElement!==canvas;
    byId('tour-status').hidden=mode!=='tour';
  }

  function turnToward(x,y,z) {
    const dx=x-player.x,dy=y-player.y,dz=z-player.z;
    return [Math.atan2(-dx,-dz),Math.atan2(dy,Math.hypot(dx,dz))];
  }
  function snapToStop(i) {
    const stop=stops[i];
    player.set(stop.x,(world.walkHeight(stop.x,stop.z)??0)+1.61,stop.z);
    [yaw,pitch]=turnToward(...stop.look);
    camera.position.copy(player);
    camera.rotation.set(pitch,yaw,0,'YXZ');
    setIndex(i,true);
  }
  function makeTour(i){
    const points=[[stops[i].x,stops[i].z]];
    const events=new Map([[0,i]]);
    for(let j=i;j<stops.length-1;j++){
      points.push(...stops[j].path,[stops[j+1].x,stops[j+1].z]);
      events.set(points.length-1,j+1);
    }
    return {points,events,segment:0,progress:0,dwell:1.55};
  }
  function enter(i, guided) {
    if(!ready)return;
    keys.clear();
    if(document.pointerLockElement)document.exitPointerLock();
    mode=guided?'tour':'walk';
    snapToStop(i);
    tour=guided?makeTour(i):null;
    updateHUD();
    canvas.focus({preventScroll:true});
  }
  function scenicView(next=0){
    if(document.pointerLockElement)document.exitPointerLock();
    scenicIndex=next;mode='scenic';tour=null;
    keys.clear();
    setIndex(-1);
    updateHUD();
    byId('start').focus({preventScroll:true});
  }
  function transition(action){
    if(actionPending||!ready)return;
    actionPending=true;
    if(reduced.matches){action();actionPending=false;return;}
    byId('fade').classList.add('in');
    setTimeout(()=>{
      action();
      byId('fade').classList.remove('in');
      actionPending=false;
    },220);
  }
  function still(){
    if(mode!=='tour')return;
    mode='walk';
    tour=null;
    updateHUD();
  }

  function walk(dx,dz,dt=.05) {
    let moved=false;
    const elevation=player.y-1.61;
    for(const [x,z] of [[player.x+dx,player.z+dz],[player.x+dx,player.z],[player.x,player.z+dz]]){
      if(Math.abs(x-player.x)+Math.abs(z-player.z)<.0001)continue;
      const floor=world.walkHeight(x,z,elevation);
      if(floor===null||world.isObstacle(x,z,.30,elevation)||Math.abs(floor-elevation)>.73)continue;
      player.x=x;player.z=z;
      moved=true;
      break;
    }
    const floor=world.walkHeight(player.x,player.z,elevation)??0;
    player.y=T.MathUtils.lerp(player.y,floor+1.61,1-Math.exp(-dt*17));
    return moved;
  }
  function nearby() {
    let candidate=0,best=Infinity;
    for(let i=0;i<stops.length;i++){
      const stop=stops[i];
      const distance=(stop.x-player.x)**2+(stop.z-player.z)**2;
      if(distance<best){candidate=i;best=distance;}
    }
    if(best<225||index<0||best<((stops[index].x-player.x)**2+(stops[index].z-player.z)**2)*.70)setIndex(candidate,true);
  }
  function animateWalking(dt){
    const forward=(keys.has('w')||keys.has('arrowup')?1:0)-(keys.has('s')||keys.has('arrowdown')?1:0)+thumb.y;
    const side=(keys.has('d')?1:0)-(keys.has('a')?1:0)+thumb.x;
    yaw+=((keys.has('arrowleft')?1:0)-(keys.has('arrowright')?1:0))*dt*1.9;
    const magnitude=Math.max(Math.hypot(forward,side),1);
    const speed=(keys.has('shift')?6.5:3.3)*dt/magnitude;
    const moving=walk((Math.cos(yaw)*side-Math.sin(yaw)*forward)*speed,
      (-Math.sin(yaw)*side-Math.cos(yaw)*forward)*speed,dt);
    camera.position.copy(player);
    if(moving&&!reduced.matches)camera.position.y+=Math.sin(performance.now()*.011)*.035;
    camera.rotation.set(pitch,yaw,0,'YXZ');
    nearby();
    showPlace(world.onGateTerrace(player.x,player.z,player.y-1.61)?towerPlace:stops[index]);
    return moving;
  }

  function updateTour(dt){
    const a=tour.points[tour.segment],b=tour.points[tour.segment+1];
    let dir;
    if(tour.dwell>0){
      dt=Math.min(dt,tour.dwell);
      tour.dwell-=dt;
      dir=turnToward(...stops[index].look);
    }else if(!b){
      still();return false;
    }else{
      const distance=Math.hypot(b[0]-a[0],b[1]-a[1]);
      tour.progress=clamp(tour.progress+dt*5.65/Math.max(.01,distance),0,1);
      const x=T.MathUtils.lerp(a[0],b[0],tour.progress),z=T.MathUtils.lerp(a[1],b[1],tour.progress);
      player.x=x;player.z=z;
      const ahead=tour.points[tour.segment+2]??b;
      const blend=clamp((tour.progress-.58)*1.8,0,.78);
      const tx=T.MathUtils.lerp(b[0],ahead[0],blend);
      const tz=T.MathUtils.lerp(b[1],ahead[1],blend);
      dir=turnToward(tx,(world.walkHeight(tx,tz)??0)+1.25,tz);
      if(tour.progress===1){
        tour.segment++;
        tour.progress=0;
        if(tour.events.has(tour.segment)){
          setIndex(tour.events.get(tour.segment),true);
          tour.dwell=2.7;
        }
      }
    }
    const targetY=(world.walkHeight(player.x,player.z)??0)+1.67;
    player.y=T.MathUtils.lerp(player.y,targetY,1-Math.exp(-dt*12));
    let difference=Math.atan2(Math.sin(dir[0]-yaw),Math.cos(dir[0]-yaw));
    yaw+=difference*(1-Math.exp(-dt*3.4));
    pitch=T.MathUtils.lerp(pitch,clamp(dir[1],-.40,.42),1-Math.exp(-dt*4.4));
    camera.position.copy(player);
    camera.rotation.set(pitch,yaw,0,'YXZ');
    return tour.dwell===0;
  }

  const view=V(0,0,0);
  function vista() {
    const shot=scenic[scenicIndex];
    camera.position.set(...shot.position);
    if(!reduced.matches){
      camera.position.x+=Math.sin(time*.09)*1.22;
      camera.position.y+=Math.cos(time*.13)*.38;
    }
    if(small && scenicIndex===0){
      camera.position.x-=10;
      camera.position.z-=4;
    }
    camera.lookAt(view.set(...shot.look));
  }

  function drawMap(){
    const width=mapView.clientWidth,height=mapView.clientHeight;
    if(!width||!height)return;
    const dpr=Math.min(2,devicePixelRatio);
    map.width=Math.round(width*dpr);map.height=Math.round(height*dpr);m.setTransform(dpr,0,0,dpr,0,0);
    const mx=x=>mapX(x)*width,my=z=>mapY(z)*height;
    m.fillStyle='#e2d9b9';m.fillRect(0,0,width,height);
    m.strokeStyle='#b7ad9045';m.lineWidth=1;
    for(let n=0;n<width;n+=23){m.beginPath();m.moveTo(n,0);m.lineTo(n,height);m.stroke();}
    for(let n=0;n<height;n+=23){m.beginPath();m.moveTo(0,n);m.lineTo(width,n);m.stroke();}
    m.beginPath();
    for(let x=miniMap.west;x<=miniMap.east;x+=1)m.lineTo(mx(x),my(riverCenter(x)-riverHalf(x)));
    for(let x=miniMap.east;x>=miniMap.west;x-=1)m.lineTo(mx(x),my(riverCenter(x)+riverHalf(x)));
    m.closePath();m.fillStyle='#819991';m.fill();m.strokeStyle='#596c60';m.stroke();
    for(const o of world.obstacles){
      if(o.x1-o.x0<2.2||o.z1-o.z0<2.2)continue;
      m.fillStyle=o.x0>101&&o.x1<112?'#836f58':'#a49875';
      m.fillRect(mx(o.x0),my(o.z0),mx(o.x1)-mx(o.x0),my(o.z1)-my(o.z0));
    }
    for(const stair of world.gateStairs){
      m.fillStyle='#a48b63';
      m.fillRect(mx(stair.x0),my(stair.z0),mx(stair.x1)-mx(stair.x0),my(stair.z1)-my(stair.z0));
      m.strokeStyle='#65563e';m.lineWidth=1;
      for(let x=stair.x0+2;x<stair.x1;x+=3){
        m.beginPath();m.moveTo(mx(x),my(stair.z0));m.lineTo(mx(x),my(stair.z1));m.stroke();
      }
    }
    m.beginPath();
    for(const [x,z] of route)m.lineTo(mx(x),my(z));
    m.strokeStyle='#f6ecce';m.lineWidth=4;m.stroke();
    m.strokeStyle='#934f3c';m.lineWidth=1.3;m.setLineDash([4,3]);m.stroke();m.setLineDash([]);
    m.font='bold '+Math.max(11,width*.021)+'px SimSun, serif';
    m.fillStyle='#f0e8cf';m.fillText('汴河',mx(-19),my(5));
    m.fillStyle='#665b46';m.fillText('北 ↑',width-34,16);
    if(mode!=='scenic'){
      const x=mx(player.x),y=my(player.z);
      const dx=-Math.sin(yaw),dz=-Math.cos(yaw);
      m.beginPath();m.moveTo(x+8*dx,y+8*dz);
      m.lineTo(x-4*dx+4*dz,y-4*dz-4*dx);
      m.lineTo(x-4*dx-4*dz,y-4*dz+4*dx);m.closePath();
      m.fillStyle='#263d31';m.fill();m.strokeStyle='#fff5da';m.lineWidth=1;m.stroke();
      markerX=player.x;markerZ=player.z;
    }
  }
  function openMap(){
    if(document.pointerLockElement)document.exitPointerLock();
    byId('map-panel').hidden=false;byId('map-button').setAttribute('aria-expanded','true');
    drawMap();byId('close-map').focus();
  }
  function closeMap(focus=true){
    if(byId('map-panel').hidden)return;
    byId('map-panel').hidden=true;byId('map-button').setAttribute('aria-expanded','false');
    if(focus)byId('map-button').focus();
  }

  const heading=['北','东北','东','东南','南','西南','西','西北'];
  const periods=['辰时','巳时','午时','未时','申时'];
  function updateClock(dayHours){
    const minutes=Math.floor(dayHours*60+.002);
    const hour=Math.floor(minutes/60);
    const str=number(hour)+':'+number(minutes%60);
    if(lastClock!==str){
      byId('clock').textContent=str;byId('clock').dateTime=str;
      byId('period').textContent=periods[clamp(Math.floor((hour-7)/2),0,4)];
      if(byId('time-range')!==document.activeElement) byId('time-range').value=String(dayHours);
      lastClock=str;
    }
    camera.getWorldDirection(view);
    const direction=(Math.round(Math.atan2(view.x,-view.z)/(Math.PI/4))+8)%8;
    if(frame%12===1)byId('heading-text').textContent=heading[direction]+' ↑';
  }

  function display(){
    app.classList.add('ready');
    byId('start').disabled=false;byId('intro-tour').disabled=false;
    byId('load-status').textContent='';
    ready=true;
  }
  function animate(now){
    const dt=lastFrame?clamp((now-lastFrame)/1000,.001,.12):.016;
    lastFrame=now;frame++;
    if(!paused)time+=dt;
    const dayHours=8+((dayOffset+time*.0078)%8.75+8.75)%8.75;
    let moving=false;
    if(mode==='scenic')vista();
    else if(mode==='tour')moving=updateTour(dt);
    else if(byId('map-panel').hidden)moving=animateWalking(dt);
    if(!paused||frame===1||lastLifeView.distanceToSquared(camera.position)>100){
      wind.value=time;
      life.update(time,camera.position);
      lastLifeView.copy(camera.position);
    }
    environment.update(time,dayHours,camera,frame);
    renderer.render(scene,camera);
    if(frame%5===1)placeLabels();
    if(frame%4===1)updateClock(dayHours);
    if(!byId('map-panel').hidden&&frame%10===1&&Math.hypot(player.x-markerX,player.z-markerZ)>.38)drawMap();
    sound.update(stops[index]?.sound??'river',moving,Math.abs(player.x-bridgeX)<5&&Math.abs(player.z)<21,dt);
    if(!ready)display();
    frameHandle=requestAnimationFrame(animate);
  }

  byId('start').addEventListener('click',()=>transition(()=>enter(0,false)));
  byId('intro-tour').addEventListener('click',()=>transition(()=>enter(0,true)));
  byId('home').addEventListener('click',()=>transition(()=>scenicView()));
  byId('view').addEventListener('click',()=>transition(()=>scenicView(mode==='scenic'?(scenicIndex+1)%scenic.length:0)));
  byId('tour').addEventListener('click',()=>{
    if(mode==='tour')still();
    else transition(()=>enter(index>=stops.length-1?0:Math.max(0,index),true));
  });
  byId('map-button').addEventListener('click',()=>{
    if(!ready)return;
    if(byId('map-panel').hidden)openMap();else closeMap();
  });
  byId('close-map').addEventListener('click',()=>closeMap());
  byId('time-button').addEventListener('click',()=>{
    const panel=byId('day-panel');panel.hidden=!panel.hidden;
    byId('time-button').setAttribute('aria-expanded',String(!panel.hidden));
  });
  byId('time-range').addEventListener('input',event=>{dayOffset=Number(event.target.value)-8-time*.0078;});
  byId('full').hidden=!document.fullscreenEnabled;
  byId('full').addEventListener('click',async()=>{
    if(document.fullscreenElement)await document.exitFullscreen().catch(()=>{});
    else await app.requestFullscreen().catch(()=>{});
  });
  function setPause(on){
    paused=on;
    const button=byId('pause');
    const hint=on?'继续城中动态':'暂停城中动态';
    button.title=hint;button.setAttribute('aria-label',hint);button.setAttribute('aria-pressed',String(on));
    button.textContent=on?'▷':'Ⅱ';
  }
  setPause(paused);
  byId('pause').addEventListener('click',()=>setPause(!paused));
  byId('take-control').addEventListener('click',async()=>{
    try{ await canvas.requestPointerLock(); }catch{}
  });
  document.addEventListener('pointerlockchange',()=>{
    updateHUD();
    if(document.pointerLockElement===canvas)canvas.focus({preventScroll:true});
    else keys.clear();
  });

  function look(dx,dy,sensitivity) {
    yaw-=dx*sensitivity;
    pitch=clamp(pitch-dy*sensitivity,-1.22,1.18);
  }
  canvas.addEventListener('pointerdown',event=>{
    if(mode==='scenic'||event.button!==0)return;
    still();
    if(document.pointerLockElement)return;
    pointer.id=event.pointerId;pointer.x=event.clientX;pointer.y=event.clientY;
    canvas.setPointerCapture(event.pointerId);
    app.classList.add('dragging');
  });
  canvas.addEventListener('pointermove',event=>{
    if(pointer.id!==event.pointerId)return;
    look(event.clientX-pointer.x,event.clientY-pointer.y,small?.006:.0052);
    pointer.x=event.clientX;pointer.y=event.clientY;
  });
  canvas.addEventListener('lostpointercapture',()=>{
    pointer.id=null;app.classList.remove('dragging');
  });
  document.addEventListener('mousemove',event=>{
    if(document.pointerLockElement===canvas)look(event.movementX,event.movementY,.0022);
  });

  const joystick=byId('joystick');
  function placeThumb(event){
    const rect=joystick.getBoundingClientRect(),half=rect.width/2;
    let x=event.clientX-rect.left-half,y=event.clientY-rect.top-half;
    const limit=half*.67,factor=Math.max(1,Math.hypot(x,y)/limit);
    x/=factor;y/=factor;
    thumb.x=x/limit;thumb.y=-y/limit;
    byId('stick').style.transform='translate('+x+'px,'+y+'px)';
  }
  joystick.addEventListener('pointerdown',event=>{
    thumb.id=event.pointerId;joystick.setPointerCapture(thumb.id);placeThumb(event);
  });
  joystick.addEventListener('pointermove',event=>{if(event.pointerId===thumb.id)placeThumb(event);});
  joystick.addEventListener('lostpointercapture',()=>{
    thumb.id=null;thumb.x=0;thumb.y=0;byId('stick').style.transform='';
  });

  const movement=new Set(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright','shift']);
  window.addEventListener('keydown',event=>{
    const key=event.key.toLowerCase();
    if(key==='escape'){
      if(!byId('map-panel').hidden)closeMap();
      else if(!byId('day-panel').hidden)byId('time-button').click();
      else if(mode==='tour')still();
      return;
    }
    if(!byId('map-panel').hidden){
      if(key==='tab'){
        const buttons=[...byId('map-panel').querySelectorAll('button')];
        const first=buttons[0],last=buttons.at(-1);
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
        if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
      }
      return;
    }
    if(event.target.closest?.('input')||event.altKey||event.ctrlKey||event.metaKey)return;
    if(key==='m'&&!event.repeat)openMap();
    if(mode!=='scenic'&&movement.has(key)){
      event.preventDefault();
      still();
      keys.add(key);
    }
  });
  window.addEventListener('keyup',event=>keys.delete(event.key.toLowerCase()));
  window.addEventListener('blur',()=>keys.clear());
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){cancelAnimationFrame(frameHandle);keys.clear();}
    else{lastFrame=0;frameHandle=requestAnimationFrame(animate);}
  });
  canvas.addEventListener('webglcontextlost',event=>{
    event.preventDefault();
    cancelAnimationFrame(frameHandle);
    app.classList.remove('ready');
    scenicView();
    byId('load-status').textContent='三维场景暂时中断，正在等待浏览器恢复。';
  });
  canvas.addEventListener('webglcontextrestored',()=>{
    frame=0;lastFrame=0;ready=false;
    frameHandle=requestAnimationFrame(animate);
  });

  canvas.dataset.city='three';
  if(new URLSearchParams(location.search).has('test')){
    window.cityTest={
      camera,world,life,pathProblems,stops,renderer,get mode(){return mode;},
      get player(){return player.toArray();}, get time(){return time;},get index(){return index;},
      enter,walk,aimAt(x,y,z){[yaw,pitch]=turnToward(x,y,z);},
      advanceTour(seconds){while(mode==='tour'&&seconds>0){updateTour(.05);seconds-=.05;}}
    };
  }
  frameHandle=requestAnimationFrame(animate);
}

requestAnimationFrame(()=>setTimeout(()=>launch().catch(error=>{
  console.error(error);
  byId('load-status').textContent='当前浏览器的 WebGL 2 三维场景无法启动。';
}),30));
