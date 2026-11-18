import * as T from 'three';
import { Water } from 'three/addons/objects/Water.js';
import { groundY, riverCenter, waterY } from './setting.js';

export function createEnvironment(scene, renderer, textures, small) {
  const sunVector=new T.Vector3();
  const skyTop=new T.Color(0x75b4dd);
  const skyHorizon=new T.Color(0xc9dbd8);
  const sky = new T.Mesh(new T.SphereGeometry(255,36,22),new T.ShaderMaterial({
    side:T.BackSide,depthWrite:false,fog:false,
    uniforms:{sunVector:{value:sunVector},skyTop:{value:skyTop},skyHorizon:{value:skyHorizon},clock:{value:0}},
    vertexShader:`
      varying vec3 direction;
      void main(){
        direction=position;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
      }
    `,
    fragmentShader:`
      uniform vec3 sunVector;
      uniform vec3 skyTop;
      uniform vec3 skyHorizon;
      uniform float clock;
      varying vec3 direction;

      float rand(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float noise(vec2 p){
        vec2 i=floor(p),f=fract(p);
        vec2 u=f*f*(3.-2.*f);
        return mix(mix(rand(i),rand(i+vec2(1.,0.)),u.x),mix(rand(i+vec2(0.,1.)),rand(i+vec2(1.)),u.x),u.y);
      }
      float clouds(vec2 p){
        return noise(p)*.54+noise(p*2.03)*.27+noise(p*4.08)*.128+noise(p*8.19)*.063;
      }
      void main(){
        vec3 d=normalize(direction);
        float alt=max(0.,d.y);
        float sun=max(0.,dot(d,sunVector));
        vec3 air=mix(skyHorizon,skyTop,smoothstep(.012,.58,alt));
        air=mix(air,vec3(1.,.88,.66),pow(sun,6.)*.27);
        float dim=smoothstep(.036,.18,alt);
        vec2 p=d.xz/max(.07,alt)*.66+vec2(clock*.003,clock*.001);
        float field=clouds(p);
        float coverage=smoothstep(.515,.71,field)*dim;
        vec3 cloud=mix(vec3(.59,.65,.68),vec3(1.,.965,.86),smoothstep(.44,.70,field)+pow(sun,7.)*.13);
        air=mix(air,cloud,coverage*.77);
        air+=vec3(1.,.90,.66)*(pow(sun,26.)*.19+pow(sun,630.)*.19+smoothstep(.99960,.99992,sun)*1.9);
        gl_FragColor=vec4(air,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `
  }));
  sky.renderOrder=-10;
  sky.frustumCulled=false;
  scene.add(sky);
  scene.fog=new T.FogExp2(0xd4ded1,.0052);
  const hemisphere=new T.HemisphereLight(0xe0eff7,0x9a8561,1.82);
  const sun=new T.DirectionalLight(0xffe2aa,2.68);
  sun.castShadow=true;
  const s=small?51:63;
  sun.shadow.mapSize.set(small?1024:2048,small?1024:2048);
  Object.assign(sun.shadow.camera,{left:-s,right:s,top:s,bottom:-s,near:8,far:208});
  sun.shadow.camera.updateProjectionMatrix();
  sun.shadow.normalBias=.035;
  sun.shadow.bias=-.00022;
  sun.shadow.radius=2;
  scene.add(hemisphere,sun,sun.target);

  const river=new Water(new T.PlaneGeometry(543,65), {
    textureWidth:small?320:768,textureHeight:small?240:480,
    waterNormals:textures.waterNormal, sunDirection:sunVector,
    sunColor:0xfce3b6,waterColor:0x617550,distortionScale:2.85,clipBias:.018,fog:true
  });
  river.rotation.x=-Math.PI/2;
  river.position.set(4,waterY,0);
  river.material.uniforms.size.value=1.55;
  river.material.fragmentShader=river.material.fragmentShader
    .replace('float rf0 = 0.3;', 'float rf0 = 0.17;')
    .replace('vec3 outgoingLight = albedo;', 'vec3 outgoingLight = albedo * ( .93 + .11 * sin(worldPosition.x * 6.4 + sin(worldPosition.z * 2.2) + time * 2.9) * sin(worldPosition.z * 7.0 + sin(worldPosition.x * 3.0) - time) );');
  river.receiveShadow=true;
  scene.add(river);
  const reflect=river.onBeforeRender;
  let frame=0;
  const reflectionEye=new T.Vector3(999,0,0);
  const reflectionHeading=new T.Quaternion();
  river.onBeforeRender=function (...args) {
    const camera=args[2];
    if(frame++%(small?4:3)===0||reflectionEye.distanceToSquared(camera.position)>1.1
      ||Math.abs(reflectionHeading.dot(camera.quaternion))<.9996){
      reflectionEye.copy(camera.position);
      reflectionHeading.copy(camera.quaternion);
      reflect.apply(this,args);
    }
  };

  const origins=[[-89,4.5,27],[70,5.2,-34],[133,3.7,-54],[57,4.2,-37]];
  const count=origins.length*7;
  const positions=new Float32Array(count*3);
  const phases=new Float32Array(count);
  const gray=new Float32Array(count);
  const geometry=new T.BufferGeometry();
  geometry.setAttribute('position',new T.BufferAttribute(positions,3).setUsage(T.DynamicDrawUsage));
  geometry.setAttribute('size',new T.BufferAttribute(phases,1).setUsage(T.DynamicDrawUsage));
  geometry.setAttribute('fade',new T.BufferAttribute(gray,1).setUsage(T.DynamicDrawUsage));
  const smoke=new T.Points(geometry,new T.ShaderMaterial({
    transparent:true,depthWrite:false,
    vertexShader:`
      attribute float size; attribute float fade; varying float opacity;
      void main(){
        opacity=fade;
        vec4 view=modelViewMatrix*vec4(position,1.);
        gl_Position=projectionMatrix*view;
        gl_PointSize=clamp(size*460./max(-view.z,1.),3.,62.);
      }
    `,
    fragmentShader:`
      varying float opacity;
      void main(){
        float d=length(gl_PointCoord-.5);
        gl_FragColor=vec4(.89,.865,.80,(1.-smoothstep(.02,.5,d))*opacity);
      }
    `
  }));
  smoke.frustumCulled=false;
  scene.add(smoke);

  const birds=[];
  const birdShade=new T.MeshBasicMaterial({color:0x3a3e32,side:T.DoubleSide,fog:true});
  const wing=new T.BufferGeometry();
  wing.setAttribute('position',new T.Float32BufferAttribute([0,0,.15,.43,.025,-.022,.12,0,-.13,0,0,.15,.12,0,-.13,0,0,-.098],3));
  for(let i=0;i<(small?7:11);i++){
    const group=new T.Group();
    const right=new T.Mesh(wing,birdShade),left=new T.Mesh(wing,birdShade);
    left.scale.x=-1;
    group.add(left,right);
    scene.add(group);
    birds.push({group,left,right});
  }
  let stamp='';
  let sunStamp='';
  const lightFocus=new T.Vector3();

  function update(time, hours, camera, frameCount) {
    sky.position.copy(camera.position);
    sky.material.uniforms.clock.value=time;
    const duration=8.8;
    const daytime=T.MathUtils.clamp((hours-8.1)/duration,0,1);
    const lift=Math.sin(Math.PI*(.20+daytime*.59));
    const azimuth=.36+daytime*2.12;
    sunVector.set(Math.cos(azimuth)*(.79+daytime*.15),.46+lift*.81,Math.sin(azimuth)).normalize();
    const key=Math.round(hours*45).toString();
    if(key!==sunStamp){
      sun.color.setHSL(.106,.58+(1-lift)*.09,.83+(lift-.5)*.07);
      sun.intensity=2.30+lift*.59;
      hemisphere.intensity=1.48+lift*.28;
      skyTop.setRGB(.105+lift*.033,.312+lift*.085,.62+lift*.10);
      skyHorizon.setRGB(.51+(1-lift)*.09,.655,.745);
      scene.fog.color.setRGB(.62,.73,.76);
      sunStamp=key;
    }

    if(frameCount%4===0||frameCount===1) {
      const view=camera.getWorldDirection(lightFocus);
      const sx=Math.round((camera.position.x+view.x*24)/8)*8;
      const sz=Math.round((camera.position.z+view.z*24)/8)*8;
      const cell=sx+'/'+sz+'/'+key;
      const moved=cell!==stamp;
      if(moved){
        sun.target.position.set(sx,0,sz);
        sun.position.copy(sun.target.position).addScaledVector(sunVector,86);
        stamp=cell;
      }
      if(moved||frameCount%(small?12:8)===0)renderer.shadowMap.needsUpdate=true;
    }

    river.material.uniforms.time.value=time*.77;
    for(let i=0;i<count;i++){
      const [x,y,z]=origins[Math.floor(i/7)];
      const t=(time*.17+(i%7)/7)%1;
      positions[i*3]=x+t*3.6+.37*Math.sin(i+t*6);
      positions[i*3+1]=y+t*5.13;
      positions[i*3+2]=z+Math.sin(t*3+i)*(.25+t*.70)+t*.6;
      phases[i]=.41+t*2.1;
      gray[i]=Math.sin(t*Math.PI)*.13*(1-t*.65);
    }
    for(const name of ['position','size','fade'])geometry.attributes[name].needsUpdate=true;
    for(let i=0;i<birds.length;i++){
      const {group,left,right}=birds[i];
      const t=time*.054+i*.045;
      const spread=(i%4)*.91;
      const x=-14+Math.sin(t)*46+spread*2.0;
      const z=-5+Math.cos(t)*20+spread;
      group.position.set(x,17.6+Math.sin(t*1.6+i*.14)*2.2+spread*.38,z);
      group.rotation.y=Math.atan2(Math.cos(t)*46,-Math.sin(t)*20);
      const flap=Math.sin(time*6.7+i*.77)*.67;
      left.rotation.z=flap;right.rotation.z=-flap;
    }
  }
  return {update,river};
}
