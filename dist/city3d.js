(()=>{var ul=0,ja=1,dl=2;var ar=1,fl=2,Wn=3,Pn=0,je=1,Ne=2,ni=0,Ai=1,Qa=2,tc=3,ec=4,pl=5,pi=100,ml=101,gl=102,_l=103,xl=104,vl=200,yl=201,Ml=202,bl=203,qr=204,Yr=205,Sl=206,Tl=207,wl=208,El=209,Al=210,Cl=211,Rl=212,Il=213,Pl=214,_o=0,xo=1,vo=2,Ci=3,yo=4,Mo=5,bo=6,So=7,nc=0,Ll=1,Dl=2,ii=0,Ul=1,Nl=2,Fl=3,To=4,Bl=5,Ol=6,zl=7;var ic=300,Ni=301,Fi=302,wo=303,Eo=304,cr=306,Ri=1e3,fi=1001,Zr=1002,ln=1003,kl=1004;var lr=1005;var Ln=1006,Ao=1007;var xi=1008;var Nn=1009,sc=1010,rc=1011,ms=1012,Co=1013,vi=1014,Fn=1015,gs=1016,Ro=1017,Io=1018,_s=1020,oc=35902,ac=35899,cc=1021,lc=1022,Tn=1023,os=1026,xs=1027,Po=1028,Lo=1029,hc=1030,Do=1031;var Uo=1033,hr=33776,ur=33777,dr=33778,fr=33779,No=35840,Fo=35841,Bo=35842,Oo=35843,zo=36196,ko=37492,Vo=37496,Ho=37808,Go=37809,Wo=37810,Xo=37811,qo=37812,Yo=37813,Zo=37814,Jo=37815,$o=37816,Ko=37817,jo=37818,Qo=37819,ta=37820,ea=37821,na=36492,ia=36494,sa=36495,ra=36283,oa=36284,aa=36285,ca=36286;var Os=2300,Jr=2301,Xr=2302,Ga=2400,Wa=2401,Xa=2402;var Vl=3200,Hl=3201;var uc=0,Gl=1,si="",ze="srgb",Ii="srgb-linear",zs="linear",ve="srgb";var Ei=7680;var qa=519,Wl=512,Xl=513,ql=514,dc=515,Yl=516,Zl=517,Jl=518,$l=519,Ya=35044,Bi=35048;var fc="300 es",In=2e3,ks=2001;var Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vc=1234567,Fs=Math.PI/180,as=180/Math.PI;function vs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function pc(i,t){return(i%t+t)%t}function zh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function kh(i,t,e){return i!==t?(e-i)/(t-i):0}function Bs(i,t,e){return(1-e)*i+e*t}function Vh(i,t,e,n){return Bs(i,t,1-Math.exp(-e*n))}function Hh(i,t=1){return t-Math.abs(pc(i,t*2)-t)}function Gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qh(i,t){return i+Math.random()*(t-i)}function Yh(i){return i*(.5-Math.random())}function Zh(i){i!==void 0&&(Vc=i);let t=Vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jh(i){return i*Fs}function $h(i){return i*as}function Kh(i){return(i&i-1)===0&&i!==0}function jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var re={DEG2RAD:Fs,RAD2DEG:as,generateUUID:vs,clamp:le,euclideanModulo:pc,mapLinear:zh,inverseLerp:kh,lerp:Bs,damp:Vh,pingpong:Hh,smoothstep:Gh,smootherstep:Wh,randInt:Xh,randFloat:qh,randFloatSpread:Yh,seededRandom:Zh,degToRad:Jh,radToDeg:$h,isPowerOfTwo:Kh,ceilPowerOfTwo:jh,floorPowerOfTwo:Qh,setQuaternionFromProperEuler:tu,normalize:sn,denormalize:ss},ue=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],M=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=M;return}if(h!==M||l!==d||c!==p||u!==g){let m=1-a,f=l*d+c*p+u*g+h*M,A=f>=0?1:-1,L=1-f*f;if(L>Number.EPSILON){let B=Math.sqrt(L),D=Math.atan2(B,f*A);m=Math.sin(m*D)/B,a=Math.sin(a*D)/B}let w=a*A;if(l=l*m+d*w,c=c*m+p*w,u=u*m+g*w,h=h*m+M*w,m===1-a){let B=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=B,c*=B,u*=B,h*=B}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*d,t[e+1]=l*g+u*d+c*h-a*p,t[e+2]=c*g+u*p+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xa.copy(this).projectOnVector(t),this.sub(xa)}reflect(t){return this.sub(xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xa=new K,Hc=new rn,se=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],M=s[0],m=s[3],f=s[6],A=s[1],L=s[4],w=s[7],B=s[2],D=s[5],U=s[8];return r[0]=o*M+a*A+l*B,r[3]=o*m+a*L+l*D,r[6]=o*f+a*w+l*U,r[1]=c*M+u*A+h*B,r[4]=c*m+u*L+h*D,r[7]=c*f+u*w+h*U,r[2]=d*M+p*A+g*B,r[5]=d*m+p*L+g*D,r[8]=d*f+p*w+g*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=h*M,t[1]=(s*c-u*n)*M,t[2]=(a*n-s*o)*M,t[3]=d*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=p*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},va=new se;function mc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kl(){let i=Vs("canvas");return i.style.display="block",i}var Gc={};function cs(i){i in Gc||(Gc[i]=!0,console.warn(i))}function jl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Wc=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eu(){let i={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ii]:{primaries:t,whitePoint:n,transfer:zs,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var pe=eu();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xi,$r=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Xi===void 0&&(Xi=Vs("canvas")),Xi.width=t.width,Xi.height=t.height;let s=Xi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Xi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nu=0,ls=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=vs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ya(s[o].image)):r.push(ya(s[o]))}else r=ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$r.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var iu=0,Ma=new K,on=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=fi,s=fi,r=Ln,o=xi,a=Tn,l=Nn,c=i.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=vs(),this.name="",this.source=new ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ri:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ri:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=ic;on.DEFAULT_ANISOTROPY=1;var Te=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,w=(p+1)/2,B=(f+1)/2,D=(u+d)/4,U=(h+M)/4,G=(g+m)/4;return L>w&&L>B?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=D/n,r=U/n):w>B?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=D/s,r=G/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=U/r,s=G/r),this.set(n,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(h-M)*(h-M)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-M)/A,this.z=(d-u)/A,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kr=class extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new on(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ls(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Kr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Hs=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jr=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vn=class{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(t.matrixWorld),this.union(Sr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Tr.subVectors(this.max,Is),qi.subVectors(t.a,Is),Yi.subVectors(t.b,Is),Zi.subVectors(t.c,Is),oi.subVectors(Yi,qi),ai.subVectors(Zi,Yi),bi.subVectors(qi,Zi);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-bi.z,bi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,bi.z,0,-bi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-bi.y,bi.x,0];return!ba(e,qi,Yi,Zi,Tr)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,qi,Yi,Zi,Tr))?!1:(wr.crossVectors(oi,ai),e=[wr.x,wr.y,wr.z],ba(e,qi,Yi,Zi,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Yn=[new K,new K,new K,new K,new K,new K,new K,new K],An=new K,Sr=new Vn,qi=new K,Yi=new K,Zi=new K,oi=new K,ai=new K,bi=new K,Is=new K,Tr=new K,wr=new K,Si=new K;function ba(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Si.fromArray(i,r);let a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var su=new Vn,Ps=new K,Sa=new K,ti=class{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):su.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);let e=Ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Sa)),this.expandByPoint(Ps.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zn=new K,Ta=new K,Er=new K,ci=new K,wa=new K,Ar=new K,Ea=new K,Gs=class{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ta.copy(t).add(e).multiplyScalar(.5),Er.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Ta);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Er),a=ci.dot(this.direction),l=-ci.dot(Er),c=ci.lengthSq(),u=Math.abs(1-o*o),h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let M=1/u;h*=M,d*=M,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ta).addScaledVector(Er,d),p}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){wa.subVectors(e,t),Ar.subVectors(n,t),Ea.crossVectors(wa,Ar);let o=this.direction.dot(Ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);let l=a*this.direction.dot(Ar.crossVectors(ci,Ar));if(l<0)return null;let c=a*this.direction.dot(wa.cross(ci));if(c<0||l+c>o)return null;let u=-a*ci.dot(Ea);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class i{constructor(t,e,n,s,r,o,a,l,c,u,h,d,p,g,M,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,p,g,M,m)}set(t,e,n,s,r,o,a,l,c,u,h,d,p,g,M,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*u,p=o*h,g=a*u,M=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-M*c,e[9]=-a*l,e[2]=M-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,p=l*h,g=c*u,M=c*h;e[0]=d+M*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=M+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,p=l*h,g=c*u,M=c*h;e[0]=d-M*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=M-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,p=o*h,g=a*u,M=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+M,e[1]=l*h,e[5]=M*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,M=a*c;e[0]=l*u,e[4]=M-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=d-M*h}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,M=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+M,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=M*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ru,t,ou)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),li.crossVectors(n,fn),li.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),li.crossVectors(n,fn)),li.normalize(),Cr.crossVectors(fn,li),s[0]=li.x,s[4]=Cr.x,s[8]=fn.x,s[1]=li.y,s[5]=Cr.y,s[9]=fn.y,s[2]=li.z,s[6]=Cr.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],M=n[6],m=n[10],f=n[14],A=n[3],L=n[7],w=n[11],B=n[15],D=s[0],U=s[4],G=s[8],S=s[12],b=s[1],H=s[5],X=s[9],J=s[13],$=s[2],O=s[6],Q=s[10],dt=s[14],q=s[3],ut=s[7],pt=s[11],Et=s[15];return r[0]=o*D+a*b+l*$+c*q,r[4]=o*U+a*H+l*O+c*ut,r[8]=o*G+a*X+l*Q+c*pt,r[12]=o*S+a*J+l*dt+c*Et,r[1]=u*D+h*b+d*$+p*q,r[5]=u*U+h*H+d*O+p*ut,r[9]=u*G+h*X+d*Q+p*pt,r[13]=u*S+h*J+d*dt+p*Et,r[2]=g*D+M*b+m*$+f*q,r[6]=g*U+M*H+m*O+f*ut,r[10]=g*G+M*X+m*Q+f*pt,r[14]=g*S+M*J+m*dt+f*Et,r[3]=A*D+L*b+w*$+B*q,r[7]=A*U+L*H+w*O+B*ut,r[11]=A*G+L*X+w*Q+B*pt,r[15]=A*S+L*J+w*dt+B*Et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],M=t[7],m=t[11],f=t[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*p-n*l*p)+M*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+e*c*h-e*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+f*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],M=t[13],m=t[14],f=t[15],A=h*m*c-M*d*c+M*l*p-a*m*p-h*l*f+a*d*f,L=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,w=u*M*c-g*h*c+g*a*p-o*M*p-u*a*f+o*h*f,B=g*h*l-u*M*l-g*a*d+o*M*d+u*a*m-o*h*m,D=e*A+n*L+s*w+r*B;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/D;return t[0]=A*U,t[1]=(M*d*r-h*m*r-M*s*p+n*m*p+h*s*f-n*d*f)*U,t[2]=(a*m*r-M*l*r+M*s*c-n*m*c-a*s*f+n*l*f)*U,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*p-n*l*p)*U,t[4]=L*U,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*U,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*U,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*p+e*l*p)*U,t[8]=w*U,t[9]=(g*h*r-u*M*r-g*n*p+e*M*p+u*n*f-e*h*f)*U,t[10]=(o*M*r-g*a*r+g*n*c-e*M*c-o*n*f+e*a*f)*U,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*p-e*a*p)*U,t[12]=B*U,t[13]=(u*M*s-g*h*s+g*n*d-e*M*d-u*n*m+e*h*m)*U,t[14]=(g*a*s-o*M*s-g*n*l+e*M*l+o*n*m-e*a*m)*U,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,M=o*u,m=o*h,f=a*h,A=l*c,L=l*u,w=l*h,B=n.x,D=n.y,U=n.z;return s[0]=(1-(M+f))*B,s[1]=(p+w)*B,s[2]=(g-L)*B,s[3]=0,s[4]=(p-w)*D,s[5]=(1-(d+f))*D,s[6]=(m+A)*D,s[7]=0,s[8]=(g+L)*U,s[9]=(m-A)*U,s[10]=(1-(d+M))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ji.set(s[0],s[1],s[2]).length(),o=Ji.set(s[4],s[5],s[6]).length(),a=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let c=1/r,u=1/o,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=In,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),g,M;if(l)g=r/(o-r),M=o*r/(o-r);else if(a===In)g=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===ks)g=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=In,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s),g,M;if(l)g=1/(o-r),M=o/(o-r);else if(a===In)g=-2/(o-r),M=-(o+r)/(o-r);else if(a===ks)g=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ji=new K,Cn=new xe,ru=new K(0,0,0),ou=new K(1,1,1),li=new K,Cr=new K,fn=new K,qc=new xe,Yc=new rn,Dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},au=0,Zc=new K,$i=new rn,Jn=new xe,Rr=new K,Ls=new K,cu=new K,lu=new rn,Jc=new K(1,0,0),$c=new K(0,1,0),Kc=new K(0,0,1),jc={type:"added"},hu={type:"removed"},Ki={type:"childadded",child:null},Aa={type:"childremoved",child:null},ke=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new K,e=new Dn,n=new rn,s=new K(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new se}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Jc,t)}rotateY(t){return this.rotateOnAxis($c,t)}rotateZ(t){return this.rotateOnAxis(Kc,t)}translateOnAxis(t,e){return Zc.copy(t).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jc,t)}translateY(t){return this.translateOnAxis($c,t)}translateZ(t){return this.translateOnAxis(Kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rr.copy(t):Rr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Ls,Rr,this.up):Jn.lookAt(Rr,Ls,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Jn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hu),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ke.DEFAULT_UP=new K(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new K,$n=new K,Ca=new K,Kn=new K,ji=new K,Qi=new K,Qc=new K,Ra=new K,Ia=new K,Pa=new K,La=new Te,Da=new Te,Ua=new Te,di=class i{constructor(t=new K,e=new K,n=new K){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),$n.subVectors(n,e),Ca.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot($n),l=Rn.dot(Ca),c=$n.dot($n),u=$n.dot(Ca),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return La.setScalar(0),Da.setScalar(0),Ua.setScalar(0),La.fromBufferAttribute(t,e),Da.fromBufferAttribute(t,n),Ua.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(La,r.x),o.addScaledVector(Da,r.y),o.addScaledVector(Ua,r.z),o}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),$n.subVectors(t,e),Rn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Rn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ji.subVectors(s,n),Qi.subVectors(r,n),Ra.subVectors(t,n);let l=ji.dot(Ra),c=Qi.dot(Ra);if(l<=0&&c<=0)return e.copy(n);Ia.subVectors(t,s);let u=ji.dot(Ia),h=Qi.dot(Ia);if(u>=0&&h<=u)return e.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ji,o);Pa.subVectors(t,r);let p=ji.dot(Pa),g=Qi.dot(Pa);if(g>=0&&p<=g)return e.copy(r);let M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Qi,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Qc.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Qc,a);let f=1/(m+M+d);return o=M*f,a=d*f,e.copy(n).addScaledVector(ji,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var St=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=pc(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Na(o,r,t+1/3),this.g=Na(o,r,t),this.b=Na(o,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=Ql[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return pe.workingToColorSpace(tn.copy(this),t),Math.round(le(tn.r*255,0,255))*65536+Math.round(le(tn.g*255,0,255))*256+Math.round(le(tn.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(tn.copy(this),e);let n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=ze){pe.workingToColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,s=tn.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Ir);let n=Bs(hi.h,Ir.h,e),s=Bs(hi.s,Ir.s,e),r=Bs(hi.l,Ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new St;St.NAMES=Ql;var uu=0,ei=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=Ai,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qr,this.blendDst=Yr,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Pi=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new K,Pr=new ue,du=0,Oe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:du++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ya&&(t.usage=this.usage),t}};var Xs=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var qs=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},fu=0,yn=new xe,Fa=new ke,ts=new K,pn=new Vn,Ds=new Vn,Je=new K,Ue=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mc(t)?qs:Xs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(pn.min,Ds.min),pn.expandByPoint(Je),Je.addVectors(pn.max,Ds.max),pn.expandByPoint(Je)):(pn.expandByPoint(Ds.min),pn.expandByPoint(Ds.max))}pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Je.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(t,c),Je.add(ts)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let G=0;G<n.count;G++)a[G]=new K,l[G]=new K;let c=new K,u=new K,h=new K,d=new ue,p=new ue,g=new ue,M=new K,m=new K;function f(G,S,b){c.fromBufferAttribute(n,G),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,G),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),u.sub(c),h.sub(c),p.sub(d),g.sub(d);let H=1/(p.x*g.y-g.x*p.y);isFinite(H)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(H),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(H),a[G].add(M),a[S].add(M),a[b].add(M),l[G].add(m),l[S].add(m),l[b].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let G=0,S=A.length;G<S;++G){let b=A[G],H=b.start,X=b.count;for(let J=H,$=H+X;J<$;J+=3)f(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let L=new K,w=new K,B=new K,D=new K;function U(G){B.fromBufferAttribute(s,G),D.copy(B);let S=a[G];L.copy(S),L.sub(B.multiplyScalar(B.dot(S))).normalize(),w.crossVectors(D,S);let H=w.dot(l[G])<0?-1:1;o.setXYZW(G,L.x,L.y,L.z,H)}for(let G=0,S=A.length;G<S;++G){let b=A[G],H=b.start,X=b.count;for(let J=H,$=H+X;J<$;J+=3)U(t.getX(J+0)),U(t.getX(J+1)),U(t.getX(J+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new K,r=new K,o=new K,a=new K,l=new K,c=new K,u=new K,h=new K;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),M=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),p=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Oe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tl=new xe,Ti=new Gs,Lr=new ti,el=new K,Dr=new K,Ur=new K,Nr=new K,Ba=new K,Fr=new K,nl=new K,Br=new K,Se=class extends ke{constructor(t=new Ue,e=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Ba.fromBufferAttribute(h,t),o?Fr.addScaledVector(Ba,u):Fr.addScaledVector(Ba.sub(e),u))}e.add(Fr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Lr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Lr,el)===null||Ti.origin.distanceToSquared(el)>(t.far-t.near)**2))&&(tl.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(tl),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){let m=d[g],f=o[m.materialIndex],A=Math.max(m.start,p.start),L=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=A,B=L;w<B;w+=3){let D=a.getX(w),U=a.getX(w+1),G=a.getX(w+2);s=Or(this,f,t,n,c,u,h,D,U,G),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let A=a.getX(m),L=a.getX(m+1),w=a.getX(m+2);s=Or(this,o,t,n,c,u,h,A,L,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){let m=d[g],f=o[m.materialIndex],A=Math.max(m.start,p.start),L=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=A,B=L;w<B;w+=3){let D=w,U=w+1,G=w+2;s=Or(this,f,t,n,c,u,h,D,U,G),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let A=m,L=m+1,w=m+2;s=Or(this,o,t,n,c,u,h,A,L,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function pu(i,t,e,n,s,r,o,a){let l;if(t.side===je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Pn,a),l===null)return null;Br.copy(a),Br.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Br);return c<e.near||c>e.far?null:{distance:c,point:Br.clone(),object:i}}function Or(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Dr),i.getVertexPosition(l,Ur),i.getVertexPosition(c,Nr);let u=pu(i,t,e,n,Dr,Ur,Nr,nl);if(u){let h=new K;di.getBarycoord(nl,Dr,Ur,Nr,h),s&&(u.uv=di.getInterpolatedAttribute(s,a,l,c,h,new ue)),r&&(u.uv1=di.getInterpolatedAttribute(r,a,l,c,h,new ue)),o&&(u.normal=di.getInterpolatedAttribute(o,a,l,c,h,new K),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new K,materialIndex:0};di.getNormal(Dr,Ur,Nr,d.normal),u.face=d,u.barycoord=h}return u}var Hn=class i extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(h,2));function g(M,m,f,A,L,w,B,D,U,G,S){let b=w/U,H=B/G,X=w/2,J=B/2,$=D/2,O=U+1,Q=G+1,dt=0,q=0,ut=new K;for(let pt=0;pt<Q;pt++){let Et=pt*H-J;for(let Bt=0;Bt<O;Bt++){let gt=Bt*b-X;ut[M]=gt*A,ut[m]=Et*L,ut[f]=$,c.push(ut.x,ut.y,ut.z),ut[M]=0,ut[m]=0,ut[f]=D>0?1:-1,u.push(ut.x,ut.y,ut.z),h.push(Bt/U),h.push(1-pt/G),dt+=1}}for(let pt=0;pt<G;pt++)for(let Et=0;Et<U;Et++){let Bt=d+Et+O*pt,gt=d+Et+O*(pt+1),te=d+(Et+1)+O*(pt+1),Yt=d+(Et+1)+O*pt;l.push(Bt,gt,Yt),l.push(gt,te,Yt),q+=6}a.addGroup(p,q,S),p+=q,d+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Oi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=Oi(i[e]);for(let s in n)t[s]=n[s]}return t}function mu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var pr={clone:Oi,merge:en},gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ke=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gu,this.fragmentShader=_u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ys=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new K,il=new ue,sl=new ue,$e=class extends Ys{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=as*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,il,sl),e.subVectors(sl,il)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},es=-90,ns=1,Qr=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(es,ns,t,e);s.layers=this.layers,this.add(s);let r=new $e(es,ns,t,e);r.layers=this.layers,this.add(r);let o=new $e(es,ns,t,e);o.layers=this.layers,this.add(o);let a=new $e(es,ns,t,e);a.layers=this.layers,this.add(a);let l=new $e(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new $e(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Zs=class extends on{constructor(t=[],e=Ni,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},to=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Hn(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:ni});r.uniforms.tEquirect.value=e;let o=new Se(s,r),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=Ln),new Qr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Xe=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},xu={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Js=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var $s=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var eo=class extends on{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ln,u=ln,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var us=class extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},is=new xe,rl=new xe,zr=[],ol=new Vn,vu=new xe,Us=new Se,Ns=new ti,Li=class extends Se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new us(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),ol.copy(t.boundingBox).applyMatrix4(is),this.boundingBox.union(ol)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),Ns.copy(t.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),t.ray.intersectsSphere(Ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,is),rl.multiplyMatrices(n,is),Us.matrixWorld=rl,Us.raycast(t,zr);for(let o=0,a=zr.length;o<a;o++){let l=zr[o];l.instanceId=r,l.object=this,e.push(l)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new eo(new Float32Array(s*this.count),s,this.count,Po,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Oa=new K,yu=new K,Mu=new se,Mn=class{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Oa.subVectors(n,e).cross(yu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mu.getNormalMatrix(t),s=this.coplanarPoint(Oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},wi=new ti,bu=new ue(.5,.5),kr=new K,ds=class{constructor(t=new Mn,e=new Mn,n=new Mn,s=new Mn,r=new Mn,o=new Mn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],M=r[9],m=r[10],f=r[11],A=r[12],L=r[13],w=r[14],B=r[15];if(s[0].setComponents(c-o,p-u,f-g,B-A).normalize(),s[1].setComponents(c+o,p+u,f+g,B+A).normalize(),s[2].setComponents(c+a,p+h,f+M,B+L).normalize(),s[3].setComponents(c-a,p-h,f-M,B-L).normalize(),n)s[4].setComponents(l,d,m,w).normalize(),s[5].setComponents(c-l,p-d,f-m,B-w).normalize();else if(s[4].setComponents(c-l,p-d,f-m,B-w).normalize(),e===In)s[5].setComponents(c+l,p+d,f+m,B+w).normalize();else if(e===ks)s[5].setComponents(l,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);let e=bu.distanceTo(t.center);return wi.radius=.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(kr.x=s.normal.x>0?t.max.x:t.min.x,kr.y=s.normal.y>0?t.max.y:t.min.y,kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var no=class extends ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},al=new xe,Za=new Gs,Vr=new ti,Hr=new K,Ks=class extends ke{constructor(t=new Ue,e=new no){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;al.copy(s).invert(),Za.copy(t.ray).applyMatrix4(al);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,M=p;g<M;g++){let m=c.getX(g);Hr.fromBufferAttribute(h,m),cl(Hr,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,M=p;g<M;g++)Hr.fromBufferAttribute(h,g),cl(Hr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cl(i,t,e,n,s,r,o){let a=Za.distanceSqToPoint(i);if(a<e){let l=new K;Za.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Gn=class extends on{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},js=class extends on{constructor(t,e,n=vi,s,r,o,a=ln,l=ln,c,u=os,h=1){if(u!==os&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ls(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Qs=class extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var mn=class i extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],p=[],g=0,M=[],m=n/2,f=0;A(),o===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(u),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(p,2));function A(){let w=new K,B=new K,D=0,U=(e-t)/n;for(let G=0;G<=r;G++){let S=[],b=G/r,H=b*(e-t)+t;for(let X=0;X<=s;X++){let J=X/s,$=J*l+a,O=Math.sin($),Q=Math.cos($);B.x=H*O,B.y=-b*n+m,B.z=H*Q,h.push(B.x,B.y,B.z),w.set(O,U,Q).normalize(),d.push(w.x,w.y,w.z),p.push(J,1-b),S.push(g++)}M.push(S)}for(let G=0;G<s;G++)for(let S=0;S<r;S++){let b=M[S][G],H=M[S+1][G],X=M[S+1][G+1],J=M[S][G+1];(t>0||S!==0)&&(u.push(b,H,J),D+=3),(e>0||S!==r-1)&&(u.push(H,X,J),D+=3)}c.addGroup(f,D,0),f+=D}function L(w){let B=g,D=new ue,U=new K,G=0,S=w===!0?t:e,b=w===!0?1:-1;for(let X=1;X<=s;X++)h.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;let H=g;for(let X=0;X<=s;X++){let $=X/s*l+a,O=Math.cos($),Q=Math.sin($);U.x=S*Q,U.y=m*b,U.z=S*O,h.push(U.x,U.y,U.z),d.push(0,b,0),D.x=O*.5+.5,D.y=Q*.5*b+.5,p.push(D.x,D.y),g++}for(let X=0;X<s;X++){let J=B+X,$=H+X;w===!0?u.push($,$+1,J):u.push($+1,$,J),G+=3}c.addGroup(f,G,w===!0?1:2),f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var tr=class i extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(A){let L=new K,w=new K,B=new K;for(let D=0;D<e.length;D+=3)p(e[D+0],L),p(e[D+1],w),p(e[D+2],B),l(L,w,B,A)}function l(A,L,w,B){let D=B+1,U=[];for(let G=0;G<=D;G++){U[G]=[];let S=A.clone().lerp(w,G/D),b=L.clone().lerp(w,G/D),H=D-G;for(let X=0;X<=H;X++)X===0&&G===D?U[G][X]=S:U[G][X]=S.clone().lerp(b,X/H)}for(let G=0;G<D;G++)for(let S=0;S<2*(D-G)-1;S++){let b=Math.floor(S/2);S%2===0?(d(U[G][b+1]),d(U[G+1][b]),d(U[G][b])):(d(U[G][b+1]),d(U[G+1][b+1]),d(U[G+1][b]))}}function c(A){let L=new K;for(let w=0;w<r.length;w+=3)L.x=r[w+0],L.y=r[w+1],L.z=r[w+2],L.normalize().multiplyScalar(A),r[w+0]=L.x,r[w+1]=L.y,r[w+2]=L.z}function u(){let A=new K;for(let L=0;L<r.length;L+=3){A.x=r[L+0],A.y=r[L+1],A.z=r[L+2];let w=m(A)/2/Math.PI+.5,B=f(A)/Math.PI+.5;o.push(w,1-B)}g(),h()}function h(){for(let A=0;A<o.length;A+=6){let L=o[A+0],w=o[A+2],B=o[A+4],D=Math.max(L,w,B),U=Math.min(L,w,B);D>.9&&U<.1&&(L<.2&&(o[A+0]+=1),w<.2&&(o[A+2]+=1),B<.2&&(o[A+4]+=1))}}function d(A){r.push(A.x,A.y,A.z)}function p(A,L){let w=A*3;L.x=t[w+0],L.y=t[w+1],L.z=t[w+2]}function g(){let A=new K,L=new K,w=new K,B=new K,D=new ue,U=new ue,G=new ue;for(let S=0,b=0;S<r.length;S+=9,b+=6){A.set(r[S+0],r[S+1],r[S+2]),L.set(r[S+3],r[S+4],r[S+5]),w.set(r[S+6],r[S+7],r[S+8]),D.set(o[b+0],o[b+1]),U.set(o[b+2],o[b+3]),G.set(o[b+4],o[b+5]),B.copy(A).add(L).add(w).divideScalar(3);let H=m(B);M(D,b+0,A,H),M(U,b+2,L,H),M(G,b+4,w,H)}}function M(A,L,w,B){B<0&&A.x===1&&(o[L]=A.x-1),w.x===0&&w.z===0&&(o[L]=B/2/Math.PI+.5)}function m(A){return Math.atan2(A.z,-A.x)}function f(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},er=class i extends tr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var io=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ue:new K);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new K,s=[],r=[],o=[],a=new K,l=new xe;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new K)}r[0]=new K,o[0]=new K;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(le(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(le(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function _c(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Gr=new K,za=new _c,ka=new _c,Va=new _c,fs=class extends io{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new K){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Gr.subVectors(s[0],s[1]).add(s[0]),c=Gr);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Gr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Gr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),p),M=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),za.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,M,m),ka.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,M,m),Va.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(za.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ka.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Va.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(za.calc(l),ka.calc(l),Va.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new K().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var Di=class i extends tr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Sn=class i extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,p=[],g=[],M=[],m=[];for(let f=0;f<u;f++){let A=f*d-o;for(let L=0;L<c;L++){let w=L*h-r;g.push(w,-A,0),M.push(0,0,1),m.push(L/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<a;A++){let L=A+c*f,w=A+c*(f+1),B=A+1+c*(f+1),D=A+1+c*f;p.push(L,w,D),p.push(w,B,D)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var mi=class i extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new K,d=new K,p=[],g=[],M=[],m=[];for(let f=0;f<=n;f++){let A=[],L=f/n,w=0;f===0&&o===0?w=.5/e:f===n&&l===Math.PI&&(w=-.5/e);for(let B=0;B<=e;B++){let D=B/e;h.x=-t*Math.cos(s+D*r)*Math.sin(o+L*a),h.y=t*Math.cos(o+L*a),h.z=t*Math.sin(s+D*r)*Math.sin(o+L*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),M.push(d.x,d.y,d.z),m.push(D+w,1-L),A.push(c++)}u.push(A)}for(let f=0;f<n;f++)for(let A=0;A<e;A++){let L=u[f][A+1],w=u[f][A],B=u[f+1][A],D=u[f+1][A+1];(f!==0||o>0)&&p.push(L,w,D),(f!==n-1||l<Math.PI)&&p.push(w,B,D)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ps=class i extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new K,h=new K,d=new K;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let M=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(M),h.y=(t+e*Math.cos(m))*Math.sin(M),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let M=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,A=(s+1)*p+g;o.push(M,m,A),o.push(m,f,A)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Un=class extends ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var so=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ro=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Wr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Su(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oo=class extends Ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ga,endingEnd:Ga}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wa:r=t,a=2*e-n;break;case Xa:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wa:o=t,l=2*n-e;break;case Xa:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,f=-d*m+2*d*M-d*g,A=(1+d)*m+(-1.5-2*d)*M+(-.5+d)*g+1,L=(-1-p)*m+(1.5+p)*M+.5*g,w=p*m-p*M;for(let B=0;B!==a;++B)r[B]=f*o[u+B]+A*o[c+B]+L*o[l+B]+w*o[h+B];return r}},ao=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},co=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wr(e,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wr(t.times,Array),values:Wr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new oo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case Jr:e=this.InterpolantFactoryMethodLinear;break;case Xr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Jr;case this.InterpolantFactoryMethodSmooth:return Xr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Su(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let M=e[h+g];if(M!==e[d+g]||M!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Jr;var gi=class extends gn{constructor(t,e,n){super(t,e,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Os;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};lo.prototype.ValueTypeName="color";var ho=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};ho.prototype.ValueTypeName="number";var uo=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},nr=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new uo(this.times,this.values,this.getValueSize(),t)}};nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends gn{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Os;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};fo.prototype.ValueTypeName="vector";var po=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},th=new po,mo=class{constructor(t){this.manager=t!==void 0?t:th,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ir=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},sr=class extends ir{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ha=new xe,ll=new K,hl=new K,Ja=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(ll),hl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hl),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var rr=class extends Ys{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$a=class extends Ja{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},or=class extends ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new $a}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var go=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xc="\\[\\]\\.:\\/",Tu=new RegExp("["+xc+"]","g"),vc="[^"+xc+"]",wu="[^"+xc.replace("\\.","")+"]",Eu=/((?:WC+[\/:])*)/.source.replace("WC",vc),Au=/(WCOD+)?/.source.replace("WCOD",wu),Cu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),Ru=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),Iu=new RegExp("^"+Eu+Au+Cu+Ru+"$"),Pu=["material","materials","bones","map"],Ka=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tu,"")}static parseTrackName(t){let e=Iu.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Ka;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pg=new Float32Array(1);function yc(i,t,e,n){let s=Lu(n);switch(e){case cc:return i*t;case Po:return i*t/s.components*s.byteLength;case Lo:return i*t/s.components*s.byteLength;case hc:return i*t*2/s.components*s.byteLength;case Do:return i*t*2/s.components*s.byteLength;case lc:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case Uo:return i*t*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:case Oo:return Math.max(i,16)*Math.max(t,8)/4;case No:case Bo:return Math.max(i,8)*Math.max(t,8)/2;case zo:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ta:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ea:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case na:case ia:case sa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ra:case oa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case aa:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lu(i){switch(i){case Nn:case sc:return{byteLength:1,components:1};case ms:case rc:case gs:return{byteLength:2,components:1};case Ro:case Io:return{byteLength:2,components:4};case vi:case Co:case Fn:return{byteLength:4,components:1};case oc:case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Th(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zu(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],M=h[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,h[d]=M)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let M=h[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$u=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ld=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ud=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",_d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ad=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ld=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ud=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Od=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ef=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Af=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,If=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ap=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,up=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:ku,alphahash_pars_fragment:Vu,alphamap_fragment:Hu,alphamap_pars_fragment:Gu,alphatest_fragment:Wu,alphatest_pars_fragment:Xu,aomap_fragment:qu,aomap_pars_fragment:Yu,batching_pars_vertex:Zu,batching_vertex:Ju,begin_vertex:$u,beginnormal_vertex:Ku,bsdfs:ju,iridescence_fragment:Qu,bumpmap_pars_fragment:td,clipping_planes_fragment:ed,clipping_planes_pars_fragment:nd,clipping_planes_pars_vertex:id,clipping_planes_vertex:sd,color_fragment:rd,color_pars_fragment:od,color_pars_vertex:ad,color_vertex:cd,common:ld,cube_uv_reflection_fragment:hd,defaultnormal_vertex:ud,displacementmap_pars_vertex:dd,displacementmap_vertex:fd,emissivemap_fragment:pd,emissivemap_pars_fragment:md,colorspace_fragment:gd,colorspace_pars_fragment:_d,envmap_fragment:xd,envmap_common_pars_fragment:vd,envmap_pars_fragment:yd,envmap_pars_vertex:Md,envmap_physical_pars_fragment:Ld,envmap_vertex:bd,fog_vertex:Sd,fog_pars_vertex:Td,fog_fragment:wd,fog_pars_fragment:Ed,gradientmap_pars_fragment:Ad,lightmap_pars_fragment:Cd,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Id,lights_pars_begin:Pd,lights_toon_fragment:Dd,lights_toon_pars_fragment:Ud,lights_phong_fragment:Nd,lights_phong_pars_fragment:Fd,lights_physical_fragment:Bd,lights_physical_pars_fragment:Od,lights_fragment_begin:zd,lights_fragment_maps:kd,lights_fragment_end:Vd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Gd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Xd,map_fragment:qd,map_pars_fragment:Yd,map_particle_fragment:Zd,map_particle_pars_fragment:Jd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Kd,morphinstance_vertex:jd,morphcolor_vertex:Qd,morphnormal_vertex:tf,morphtarget_pars_vertex:ef,morphtarget_vertex:nf,normal_fragment_begin:sf,normal_fragment_maps:rf,normal_pars_fragment:of,normal_pars_vertex:af,normal_vertex:cf,normalmap_pars_fragment:lf,clearcoat_normal_fragment_begin:hf,clearcoat_normal_fragment_maps:uf,clearcoat_pars_fragment:df,iridescence_pars_fragment:ff,opaque_fragment:pf,packing:mf,premultiplied_alpha_fragment:gf,project_vertex:_f,dithering_fragment:xf,dithering_pars_fragment:vf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:Mf,shadowmap_pars_fragment:bf,shadowmap_pars_vertex:Sf,shadowmap_vertex:Tf,shadowmask_pars_fragment:wf,skinbase_vertex:Ef,skinning_pars_vertex:Af,skinning_vertex:Cf,skinnormal_vertex:Rf,specularmap_fragment:If,specularmap_pars_fragment:Pf,tonemapping_fragment:Lf,tonemapping_pars_fragment:Df,transmission_fragment:Uf,transmission_pars_fragment:Nf,uv_pars_fragment:Ff,uv_pars_vertex:Bf,uv_vertex:Of,worldpos_vertex:zf,background_vert:kf,background_frag:Vf,backgroundCube_vert:Hf,backgroundCube_frag:Gf,cube_vert:Wf,cube_frag:Xf,depth_vert:qf,depth_frag:Yf,distanceRGBA_vert:Zf,distanceRGBA_frag:Jf,equirect_vert:$f,equirect_frag:Kf,linedashed_vert:jf,linedashed_frag:Qf,meshbasic_vert:tp,meshbasic_frag:ep,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:sp,meshmatcap_frag:rp,meshnormal_vert:op,meshnormal_frag:ap,meshphong_vert:cp,meshphong_frag:lp,meshphysical_vert:hp,meshphysical_frag:up,meshtoon_vert:dp,meshtoon_frag:fp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:_p,sprite_vert:xp,sprite_frag:vp},At={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Xn={basic:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new St(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:en([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:en([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new St(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:en([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:en([At.points,At.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:en([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:en([At.common,At.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:en([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:en([At.sprite,At.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:en([At.common,At.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:en([At.lights,At.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Xn.physical={uniforms:en([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var la={r:0,b:0,g:0},zi=new Dn,yp=new xe;function Mp(i,t,e,n,s,r,o){let a=new St(0),l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?e:t).get(w)),w}function M(L){let w=!1,B=g(L);B===null?f(a,l):B&&B.isColor&&(f(B,1),w=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(L,w){let B=g(w);B&&(B.isCubeTexture||B.mapping===cr)?(u===void 0&&(u=new Se(new Hn(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:Oi(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,U,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),zi.copy(w.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.material.uniforms.envMap.value=B,u.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yp.makeRotationFromEuler(zi)),u.material.toneMapped=pe.getTransfer(B.colorSpace)!==ve,(h!==B||d!==B.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=B,d=B.version,p=i.toneMapping),u.layers.enableAll(),L.unshift(u,u.geometry,u.material,0,0,null)):B&&B.isTexture&&(c===void 0&&(c=new Se(new Sn(2,2),new Ke({name:"BackgroundMaterial",uniforms:Oi(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=B,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=pe.getTransfer(B.colorSpace)!==ve,B.matrixAutoUpdate===!0&&B.updateMatrix(),c.material.uniforms.uvTransform.value.copy(B.matrix),(h!==B||d!==B.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=B,d=B.version,p=i.toneMapping),c.layers.enableAll(),L.unshift(c,c.geometry,c.material,0,0,null))}function f(L,w){L.getRGB(la,gc(i)),n.buffers.color.setClear(la.r,la.g,la.b,w,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(L,w=1){a.set(L),l=w,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(L){l=L,f(a,l)},render:M,addToRenderList:m,dispose:A}}function bp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,H,X,J,$){let O=!1,Q=h(J,X,H);r!==Q&&(r=Q,c(r.object)),O=p(b,J,X,$),O&&g(b,J,X,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,w(b,H,X,J),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,H,X){let J=X.wireframe===!0,$=n[b.id];$===void 0&&($={},n[b.id]=$);let O=$[H.id];O===void 0&&(O={},$[H.id]=O);let Q=O[J];return Q===void 0&&(Q=d(l()),O[J]=Q),Q}function d(b){let H=[],X=[],J=[];for(let $=0;$<e;$++)H[$]=0,X[$]=0,J[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:X,attributeDivisors:J,object:b,attributes:{},index:null}}function p(b,H,X,J){let $=r.attributes,O=H.attributes,Q=0,dt=X.getAttributes();for(let q in dt)if(dt[q].location>=0){let pt=$[q],Et=O[q];if(Et===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(Et=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(Et=b.instanceColor)),pt===void 0||pt.attribute!==Et||Et&&pt.data!==Et.data)return!0;Q++}return r.attributesNum!==Q||r.index!==J}function g(b,H,X,J){let $={},O=H.attributes,Q=0,dt=X.getAttributes();for(let q in dt)if(dt[q].location>=0){let pt=O[q];pt===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(pt=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(pt=b.instanceColor));let Et={};Et.attribute=pt,pt&&pt.data&&(Et.data=pt.data),$[q]=Et,Q++}r.attributes=$,r.attributesNum=Q,r.index=J}function M(){let b=r.newAttributes;for(let H=0,X=b.length;H<X;H++)b[H]=0}function m(b){f(b,0)}function f(b,H){let X=r.newAttributes,J=r.enabledAttributes,$=r.attributeDivisors;X[b]=1,J[b]===0&&(i.enableVertexAttribArray(b),J[b]=1),$[b]!==H&&(i.vertexAttribDivisor(b,H),$[b]=H)}function A(){let b=r.newAttributes,H=r.enabledAttributes;for(let X=0,J=H.length;X<J;X++)H[X]!==b[X]&&(i.disableVertexAttribArray(X),H[X]=0)}function L(b,H,X,J,$,O,Q){Q===!0?i.vertexAttribIPointer(b,H,X,$,O):i.vertexAttribPointer(b,H,X,J,$,O)}function w(b,H,X,J){M();let $=J.attributes,O=X.getAttributes(),Q=H.defaultAttributeValues;for(let dt in O){let q=O[dt];if(q.location>=0){let ut=$[dt];if(ut===void 0&&(dt==="instanceMatrix"&&b.instanceMatrix&&(ut=b.instanceMatrix),dt==="instanceColor"&&b.instanceColor&&(ut=b.instanceColor)),ut!==void 0){let pt=ut.normalized,Et=ut.itemSize,Bt=t.get(ut);if(Bt===void 0)continue;let gt=Bt.buffer,te=Bt.type,Yt=Bt.bytesPerElement,ct=te===i.INT||te===i.UNSIGNED_INT||ut.gpuType===Co;if(ut.isInterleavedBufferAttribute){let at=ut.data,Mt=at.stride,Xt=ut.offset;if(at.isInstancedInterleavedBuffer){for(let Dt=0;Dt<q.locationSize;Dt++)f(q.location+Dt,at.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Dt=0;Dt<q.locationSize;Dt++)m(q.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let Dt=0;Dt<q.locationSize;Dt++)L(q.location+Dt,Et/q.locationSize,te,pt,Mt*Yt,(Xt+Et/q.locationSize*Dt)*Yt,ct)}else{if(ut.isInstancedBufferAttribute){for(let at=0;at<q.locationSize;at++)f(q.location+at,ut.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let at=0;at<q.locationSize;at++)m(q.location+at);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let at=0;at<q.locationSize;at++)L(q.location+at,Et/q.locationSize,te,pt,Et*Yt,Et/q.locationSize*at*Yt,ct)}}else if(Q!==void 0){let pt=Q[dt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(q.location,pt);break;case 3:i.vertexAttrib3fv(q.location,pt);break;case 4:i.vertexAttrib4fv(q.location,pt);break;default:i.vertexAttrib1fv(q.location,pt)}}}}A()}function B(){G();for(let b in n){let H=n[b];for(let X in H){let J=H[X];for(let $ in J)u(J[$].object),delete J[$];delete H[X]}delete n[b]}}function D(b){if(n[b.id]===void 0)return;let H=n[b.id];for(let X in H){let J=H[X];for(let $ in J)u(J[$].object),delete J[$];delete H[X]}delete n[b.id]}function U(b){for(let H in n){let X=n[H];if(X[b.id]===void 0)continue;let J=X[b.id];for(let $ in J)u(J[$].object),delete J[$];delete X[b.id]}}function G(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:G,resetDefaultState:S,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:m,disableUnusedAttributes:A}}function Sp(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,d){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let M=0;M<h;M++)g+=u[M]*d[M];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==Tn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let G=U===gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Nn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Fn&&!G)}function l(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:B,maxSamples:D}}function wp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Mn,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let A=r?0:n,L=A*4,w=f.clippingState||null;l.value=w,w=u(g,d,L,p);for(let B=0;B!==L;++B)w[B]=e[B];f.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){let M=h!==null?h.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let f=p+M*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let L=0,w=p;L!==M;++L,w+=4)o.copy(h[L]).applyMatrix4(A,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function Ep(i){let t=new WeakMap;function e(o,a){return a===wo?o.mapping=Ni:a===Eo&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wo||a===Eo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new to(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ms=4,eh=[.125,.215,.35,.446,.526,.582],Hi=20,Mc=new rr,nh=new St,bc=null,Sc=0,Tc=0,wc=!1,Vi=(1+Math.sqrt(5))/2,ys=1/Vi,ih=[new K(-Vi,ys,0),new K(Vi,ys,0),new K(-ys,0,Vi),new K(ys,0,Vi),new K(0,Vi,-ys),new K(0,Vi,ys),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],Ap=new K,da=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ap}=r;bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bc,Sc,Tc),this._renderer.xr.enabled=wc,t.scissorTest=!1,ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:gs,format:Tn,colorSpace:Ii,depthBuffer:!1},s=sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(r)),this._blurMaterial=Rp(r,t,e)}return s}_compileMaterial(t){let e=new Se(this._lodPlanes[0],t);this._renderer.compile(e,Mc)}_sceneToCubeUV(t,e,n,s,r){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(nh),h.toneMapping=ii,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let M=new Pi({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),m=new Se(new Hn,M),f=!1,A=t.background;A?A.isColor&&(M.color.copy(A),t.background=null,f=!0):(M.color.copy(nh),f=!0);for(let L=0;L<6;L++){let w=L%3;w===0?(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[L],r.y,r.z)):w===1?(l.up.set(0,0,c[L]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[L],r.z)):(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[L]));let B=this._cubeSize;ha(s,w*B,L>2?B:0,B,B),h.setRenderTarget(s),f&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=A}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ni||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ha(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Mc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ih[(s-r-1)%ih.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Se(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),M=r/g,m=isFinite(r)?1+Math.floor(u*M):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);let f=[],A=0;for(let U=0;U<Hi;++U){let G=U/M,S=Math.exp(-G*G/2);f.push(S),U===0?A+=S:U<m&&(A+=2*S)}for(let U=0;U<f.length;U++)f[U]=f[U]/A;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:L}=this;d.dTheta.value=g,d.mipInt.value=L-n;let w=this._sizeLods[s],B=3*w*(s>L-Ms?s-L+Ms:0),D=4*(this._cubeSize-w);ha(e,B,D,3*w,2*w),l.setRenderTarget(e),l.render(h,Mc)}};function Cp(i){let t=[],e=[],n=[],s=i,r=i-Ms+1+eh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ms?l=eh[o-i+Ms-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,M=3,m=2,f=1,A=new Float32Array(M*g*p),L=new Float32Array(m*g*p),w=new Float32Array(f*g*p);for(let D=0;D<p;D++){let U=D%3*2/3-1,G=D>2?0:-1,S=[U,G,0,U+2/3,G,0,U+2/3,G+1,0,U,G,0,U+2/3,G+1,0,U,G+1,0];A.set(S,M*g*D),L.set(d,m*g*D);let b=[D,D,D,D,D,D];w.set(b,f*g*D)}let B=new Ue;B.setAttribute("position",new Oe(A,M)),B.setAttribute("uv",new Oe(L,m)),B.setAttribute("faceIndex",new Oe(w,f)),t.push(B),s>Ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sh(i,t,e){let n=new bn(i,t,e);return n.texture.mapping=cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rp(i,t,e){let n=new Float32Array(Hi),s=new K(0,1,0);return new Ke({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function rh(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function oh(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ip(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===wo||l===Eo,u=l===Ni||l===Fi;if(c||u){let h=t.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new da(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new da(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Pp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lp(i,t,e,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(h){let d=[],p=h.index,g=h.attributes.position,M=0;if(p!==null){let A=p.array;M=p.version;for(let L=0,w=A.length;L<w;L+=3){let B=A[L+0],D=A[L+1],U=A[L+2];d.push(B,D,D,U,U,B)}}else if(g!==void 0){let A=g.array;M=g.version;for(let L=0,w=A.length/3-1;L<w;L+=3){let B=L+0,D=L+1,U=L+2;d.push(B,D,D,U,U,B)}}else return;let m=new(mc(d)?qs:Xs)(d,1);m.version=M;let f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Dp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function h(d,p,g,M){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,M,0,g);let f=0;for(let A=0;A<g;A++)f+=p[A]*M[A];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Up(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Np(i,t,e){let n=new WeakMap,s=new Te;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let S=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],L=0;p===!0&&(L=1),g===!0&&(L=2),M===!0&&(L=3);let w=a.attributes.position.count*L,B=1;w>t.maxTextureSize&&(B=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let D=new Float32Array(w*B*4*h),U=new Hs(D,w,B,h);U.type=Fn,U.needsUpdate=!0;let G=L*4;for(let b=0;b<h;b++){let H=m[b],X=f[b],J=A[b],$=w*B*4*b;for(let O=0;O<H.count;O++){let Q=O*G;p===!0&&(s.fromBufferAttribute(H,O),D[$+Q+0]=s.x,D[$+Q+1]=s.y,D[$+Q+2]=s.z,D[$+Q+3]=0),g===!0&&(s.fromBufferAttribute(X,O),D[$+Q+4]=s.x,D[$+Q+5]=s.y,D[$+Q+6]=s.z,D[$+Q+7]=0),M===!0&&(s.fromBufferAttribute(J,O),D[$+Q+8]=s.x,D[$+Q+9]=s.y,D[$+Q+10]=s.z,D[$+Q+11]=J.itemSize===4?s.w:1)}}d={count:h,texture:U,size:new ue(w,B)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Fp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var wh=new on,ah=new js(1,1),Eh=new Hs,Ah=new jr,Ch=new Zs,ch=[],lh=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function Ss(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ch[s];if(r===void 0&&(r=new Float32Array(s),ch[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pa(i,t){let e=lh[t];e===void 0&&(e=new Int32Array(t),lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function Vp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;dh.set(n),i.uniformMatrix2fv(this.addr,!1,dh),Ye(e,n)}}function Hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;uh.set(n),i.uniformMatrix3fv(this.addr,!1,uh),Ye(e,n)}}function Gp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),Ye(e,n)}}function Wp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function Yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function Zp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function $p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function Kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ah.compareFunction=dc,r=ah):r=wh,e.setTexture2D(t||r,s)}function Qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ah,s)}function tm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ch,s)}function em(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Eh,s)}function nm(i){switch(i){case 5126:return Bp;case 35664:return Op;case 35665:return zp;case 35666:return kp;case 35674:return Vp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return Zp;case 36294:return Jp;case 36295:return $p;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}function im(i,t){i.uniform1fv(this.addr,t)}function sm(i,t){let e=Ss(t,this.size,2);i.uniform2fv(this.addr,e)}function rm(i,t){let e=Ss(t,this.size,3);i.uniform3fv(this.addr,e)}function om(i,t){let e=Ss(t,this.size,4);i.uniform4fv(this.addr,e)}function am(i,t){let e=Ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cm(i,t){let e=Ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lm(i,t){let e=Ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hm(i,t){i.uniform1iv(this.addr,t)}function um(i,t){i.uniform2iv(this.addr,t)}function dm(i,t){i.uniform3iv(this.addr,t)}function fm(i,t){i.uniform4iv(this.addr,t)}function pm(i,t){i.uniform1uiv(this.addr,t)}function mm(i,t){i.uniform2uiv(this.addr,t)}function gm(i,t){i.uniform3uiv(this.addr,t)}function _m(i,t){i.uniform4uiv(this.addr,t)}function xm(i,t,e){let n=this.cache,s=t.length,r=pa(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||wh,r[o])}function vm(i,t,e){let n=this.cache,s=t.length,r=pa(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ah,r[o])}function ym(i,t,e){let n=this.cache,s=t.length,r=pa(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ch,r[o])}function Mm(i,t,e){let n=this.cache,s=t.length,r=pa(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Eh,r[o])}function bm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return om;case 35674:return am;case 35675:return cm;case 35676:return lm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Mm}}var Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nm(e.type)}},Cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bm(e.type)}},Rc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ec=/(\w+)(\])?(\[|\.)?/g;function fh(i,t){i.seq.push(t),i.map[t.id]=t}function Sm(i,t,e){let n=i.name,s=n.length;for(Ec.lastIndex=0;;){let r=Ec.exec(n),o=Ec.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fh(e,c===void 0?new Ac(a,i,t):new Cc(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Rc(a),fh(e,h)),e=h}}}var bs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Sm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ph(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Tm=37297,wm=0;function Em(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var mh=new se;function Am(i){pe._getMatrix(mh,pe.workingColorSpace,i);let t=`mat3( ${mh.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case zs:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Em(i.getShaderSource(t),a)}else return r}function Cm(i,t){let e=Am(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rm(i,t){let e;switch(t){case Ul:e="Linear";break;case Nl:e="Reinhard";break;case Fl:e="Cineon";break;case To:e="ACESFilmic";break;case Ol:e="AgX";break;case zl:e="Neutral";break;case Bl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ua=new K;function Im(){pe.getLuminanceCoefficients(ua);let i=ua.x.toFixed(4),t=ua.y.toFixed(4),e=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Lm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function mr(i){return i!==""}function _h(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(i){return i.replace(Um,Fm)}var Nm=new Map;function Fm(i,t){let e=ce[t];if(e===void 0){let n=Nm.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ic(e)}var Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(i){return i.replace(Bm,Om)}function Om(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ar?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===fl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function km(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ni:case Fi:t="ENVMAP_TYPE_CUBE";break;case cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function Hm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ll:t="ENVMAP_BLENDING_MIX";break;case Dl:t="ENVMAP_BLENDING_ADD";break}return t}function Gm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=zm(e),c=km(e),u=Vm(e),h=Hm(e),d=Gm(e),p=Pm(e),g=Lm(r),M=s.createProgram(),m,f,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),f.length>0&&(f+=`
`)):(m=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),f=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?ce.tonemapping_pars_fragment:"",e.toneMapping!==ii?Rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Cm("linearToOutputTexel",e.outputColorSpace),Im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),o=Ic(o),o=_h(o,e),o=xh(o,e),a=Ic(a),a=_h(a,e),a=xh(a,e),o=vh(o),a=vh(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let L=A+m+o,w=A+f+a,B=ph(s,s.VERTEX_SHADER,L),D=ph(s,s.FRAGMENT_SHADER,w);s.attachShader(M,B),s.attachShader(M,D),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function U(H){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(M)||"",J=s.getShaderInfoLog(B)||"",$=s.getShaderInfoLog(D)||"",O=X.trim(),Q=J.trim(),dt=$.trim(),q=!0,ut=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,B,D);else{let pt=gh(s,B,"vertex"),Et=gh(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+O+`
`+pt+`
`+Et)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(Q===""||dt==="")&&(ut=!1);ut&&(H.diagnostics={runnable:q,programLog:O,vertexShader:{log:Q,prefix:m},fragmentShader:{log:dt,prefix:f}})}s.deleteShader(B),s.deleteShader(D),G=new bs(s,M),S=Dm(s,M)}let G;this.getUniforms=function(){return G===void 0&&U(this),G};let S;this.getAttributes=function(){return S===void 0&&U(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(M,Tm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wm++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=B,this.fragmentShader=D,this}var Xm=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lc(t),e.set(t,n)),n}},Lc=class{constructor(t){this.id=Xm++,this.code=t,this.usedTimes=0}};function qm(i,t,e,n,s,r,o){let a=new Ws,l=new Pc,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,H,X,J){let $=X.fog,O=J.geometry,Q=S.isMeshStandardMaterial?X.environment:null,dt=(S.isMeshStandardMaterial?e:t).get(S.envMap||Q),q=dt&&dt.mapping===cr?dt.image.height:null,ut=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let pt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Et=pt!==void 0?pt.length:0,Bt=0;O.morphAttributes.position!==void 0&&(Bt=1),O.morphAttributes.normal!==void 0&&(Bt=2),O.morphAttributes.color!==void 0&&(Bt=3);let gt,te,Yt,ct;if(ut){let rt=Xn[ut];gt=rt.vertexShader,te=rt.fragmentShader}else gt=S.vertexShader,te=S.fragmentShader,l.update(S),Yt=l.getVertexShaderID(S),ct=l.getFragmentShaderID(S);let at=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Xt=J.isInstancedMesh===!0,Dt=J.isBatchedMesh===!0,Qt=!!S.map,we=!!S.matcap,C=!!dt,Tt=!!S.aoMap,mt=!!S.lightMap,yt=!!S.bumpMap,_t=!!S.normalMap,ee=!!S.displacementMap,Rt=!!S.emissiveMap,kt=!!S.metalnessMap,he=!!S.roughnessMap,wt=S.anisotropy>0,z=S.clearcoat>0,E=S.dispersion>0,et=S.iridescence>0,Z=S.sheen>0,lt=S.transmission>0,st=wt&&!!S.anisotropyMap,Ct=z&&!!S.clearcoatMap,ft=z&&!!S.clearcoatNormalMap,Nt=z&&!!S.clearcoatRoughnessMap,Ut=et&&!!S.iridescenceMap,x=et&&!!S.iridescenceThicknessMap,T=Z&&!!S.sheenColorMap,v=Z&&!!S.sheenRoughnessMap,R=!!S.specularMap,P=!!S.specularColorMap,y=!!S.specularIntensityMap,_=lt&&!!S.transmissionMap,N=lt&&!!S.thicknessMap,V=!!S.gradientMap,k=!!S.alphaMap,F=S.alphaTest>0,W=!!S.alphaHash,Y=!!S.extensions,nt=ii;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(nt=i.toneMapping);let ht={shaderID:ut,shaderType:S.type,shaderName:S.name,vertexShader:gt,fragmentShader:te,defines:S.defines,customVertexShaderID:Yt,customFragmentShaderID:ct,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Dt,batchingColor:Dt&&J._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&J.instanceColor!==null,instancingMorph:Xt&&J.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ii,alphaToCoverage:!!S.alphaToCoverage,map:Qt,matcap:we,envMap:C,envMapMode:C&&dt.mapping,envMapCubeUVHeight:q,aoMap:Tt,lightMap:mt,bumpMap:yt,normalMap:_t,displacementMap:d&&ee,emissiveMap:Rt,normalMapObjectSpace:_t&&S.normalMapType===Gl,normalMapTangentSpace:_t&&S.normalMapType===uc,metalnessMap:kt,roughnessMap:he,anisotropy:wt,anisotropyMap:st,clearcoat:z,clearcoatMap:Ct,clearcoatNormalMap:ft,clearcoatRoughnessMap:Nt,dispersion:E,iridescence:et,iridescenceMap:Ut,iridescenceThicknessMap:x,sheen:Z,sheenColorMap:T,sheenRoughnessMap:v,specularMap:R,specularColorMap:P,specularIntensityMap:y,transmission:lt,transmissionMap:_,thicknessMap:N,gradientMap:V,opaque:S.transparent===!1&&S.blending===Ai&&S.alphaToCoverage===!1,alphaMap:k,alphaTest:F,alphaHash:W,combine:S.combine,mapUv:Qt&&M(S.map.channel),aoMapUv:Tt&&M(S.aoMap.channel),lightMapUv:mt&&M(S.lightMap.channel),bumpMapUv:yt&&M(S.bumpMap.channel),normalMapUv:_t&&M(S.normalMap.channel),displacementMapUv:ee&&M(S.displacementMap.channel),emissiveMapUv:Rt&&M(S.emissiveMap.channel),metalnessMapUv:kt&&M(S.metalnessMap.channel),roughnessMapUv:he&&M(S.roughnessMap.channel),anisotropyMapUv:st&&M(S.anisotropyMap.channel),clearcoatMapUv:Ct&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:ft&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:x&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:T&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:v&&M(S.sheenRoughnessMap.channel),specularMapUv:R&&M(S.specularMap.channel),specularColorMapUv:P&&M(S.specularColorMap.channel),specularIntensityMapUv:y&&M(S.specularIntensityMap.channel),transmissionMapUv:_&&M(S.transmissionMap.channel),thicknessMapUv:N&&M(S.thicknessMap.channel),alphaMapUv:k&&M(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_t||wt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!O.attributes.uv&&(Qt||k),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Mt,skinning:J.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Bt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:Qt&&S.map.isVideoTexture===!0&&pe.getTransfer(S.map.colorSpace)===ve,decodeVideoTextureEmissive:Rt&&S.emissiveMap.isVideoTexture===!0&&pe.getTransfer(S.emissiveMap.colorSpace)===ve,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ne,flipSided:S.side===je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Y&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y&&S.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function f(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let H in S.defines)b.push(H),b.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(A(b,S),L(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function A(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function L(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function w(S){let b=g[S.type],H;if(b){let X=Xn[b];H=pr.clone(X.uniforms)}else H=S.uniforms;return H}function B(S,b){let H;for(let X=0,J=u.length;X<J;X++){let $=u[X];if($.cacheKey===b){H=$,++H.usedTimes;break}}return H===void 0&&(H=new Wm(i,b,S,r),u.push(H)),H}function D(S){if(--S.usedTimes===0){let b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function U(S){l.remove(S)}function G(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:w,acquireProgram:B,releaseProgram:D,releaseShaderCache:U,programs:u,dispose:G}}function Ym(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Mh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,p,g,M,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:M,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=M,f.group=m),t++,f}function a(h,d,p,g,M,m){let f=o(h,d,p,g,M,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,d,p,g,M,m){let f=o(h,d,p,g,M,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||Zm),n.length>1&&n.sort(d||Mh),s.length>1&&s.sort(d||Mh)}function u(){for(let h=t,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Jm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new bh,i.set(n,[o])):s>=r.length?(o=new bh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $m(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new St};break;case"SpotLight":e={position:new K,direction:new K,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new K,halfWidth:new K,halfHeight:new K};break}return i[t.id]=e,e}}}function Km(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jm=0;function Qm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tg(i){let t=new $m,e=Km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);let s=new K,r=new xe,o=new xe;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,M=0,m=0,f=0,A=0,L=0,w=0,B=0,D=0,U=0;c.sort(Qm);for(let S=0,b=c.length;S<b;S++){let H=c[S],X=H.color,J=H.intensity,$=H.distance,O=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)u+=X.r*J,h+=X.g*J,d+=X.b*J;else if(H.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(H.sh.coefficients[Q],J);U++}else if(H.isDirectionalLight){let Q=t.get(H);if(Q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let dt=H.shadow,q=e.get(H);q.shadowIntensity=dt.intensity,q.shadowBias=dt.bias,q.shadowNormalBias=dt.normalBias,q.shadowRadius=dt.radius,q.shadowMapSize=dt.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=H.shadow.matrix,A++}n.directional[p]=Q,p++}else if(H.isSpotLight){let Q=t.get(H);Q.position.setFromMatrixPosition(H.matrixWorld),Q.color.copy(X).multiplyScalar(J),Q.distance=$,Q.coneCos=Math.cos(H.angle),Q.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Q.decay=H.decay,n.spot[M]=Q;let dt=H.shadow;if(H.map&&(n.spotLightMap[B]=H.map,B++,dt.updateMatrices(H),H.castShadow&&D++),n.spotLightMatrix[M]=dt.matrix,H.castShadow){let q=e.get(H);q.shadowIntensity=dt.intensity,q.shadowBias=dt.bias,q.shadowNormalBias=dt.normalBias,q.shadowRadius=dt.radius,q.shadowMapSize=dt.mapSize,n.spotShadow[M]=q,n.spotShadowMap[M]=O,w++}M++}else if(H.isRectAreaLight){let Q=t.get(H);Q.color.copy(X).multiplyScalar(J),Q.halfWidth.set(H.width*.5,0,0),Q.halfHeight.set(0,H.height*.5,0),n.rectArea[m]=Q,m++}else if(H.isPointLight){let Q=t.get(H);if(Q.color.copy(H.color).multiplyScalar(H.intensity),Q.distance=H.distance,Q.decay=H.decay,H.castShadow){let dt=H.shadow,q=e.get(H);q.shadowIntensity=dt.intensity,q.shadowBias=dt.bias,q.shadowNormalBias=dt.normalBias,q.shadowRadius=dt.radius,q.shadowMapSize=dt.mapSize,q.shadowCameraNear=dt.camera.near,q.shadowCameraFar=dt.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=H.shadow.matrix,L++}n.point[g]=Q,g++}else if(H.isHemisphereLight){let Q=t.get(H);Q.skyColor.copy(H.color).multiplyScalar(J),Q.groundColor.copy(H.groundColor).multiplyScalar(J),n.hemi[f]=Q,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let G=n.hash;(G.directionalLength!==p||G.pointLength!==g||G.spotLength!==M||G.rectAreaLength!==m||G.hemiLength!==f||G.numDirectionalShadows!==A||G.numPointShadows!==L||G.numSpotShadows!==w||G.numSpotMaps!==B||G.numLightProbes!==U)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=w+B-D,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=U,G.directionalLength=p,G.pointLength=g,G.spotLength=M,G.rectAreaLength=m,G.hemiLength=f,G.numDirectionalShadows=A,G.numPointShadows=L,G.numSpotShadows=w,G.numSpotMaps=B,G.numLightProbes=U,n.version=jm++)}function l(c,u){let h=0,d=0,p=0,g=0,M=0,m=u.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){let L=c[f];if(L.isDirectionalLight){let w=n.directional[h];w.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(L.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(L.isRectAreaLight){let w=n.rectArea[g];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(L.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(L.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(m),d++}else if(L.isHemisphereLight){let w=n.hemi[M];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:n}}function Sh(i){let t=new tg(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function eg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Sh(i),t.set(s,[a])):r>=o.length?(a=new Sh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sg(i,t,e){let n=new ds,s=new ue,r=new ue,o=new Te,a=new so({depthPacking:Hl}),l=new ro,c={},u=e.maxTextureSize,h={[Pn]:je,[je]:Pn,[Ne]:Ne},d=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Se(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ar;let f=this.type;this.render=function(D,U,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),X=i.state;X.setBlending(ni),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let J=f!==Wn&&this.type===Wn,$=f===Wn&&this.type!==Wn;for(let O=0,Q=D.length;O<Q;O++){let dt=D[O],q=dt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",dt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ut=q.getFrameExtents();if(s.multiply(ut),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ut.x),s.x=r.x*ut.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ut.y),s.y=r.y*ut.y,q.mapSize.y=r.y)),q.map===null||J===!0||$===!0){let Et=this.type!==Wn?{minFilter:ln,magFilter:ln}:{};q.map!==null&&q.map.dispose(),q.map=new bn(s.x,s.y,Et),q.map.texture.name=dt.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let pt=q.getViewportCount();for(let Et=0;Et<pt;Et++){let Bt=q.getViewport(Et);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),X.viewport(o),q.updateMatrices(dt,Et),n=q.getFrustum(),w(U,G,q.camera,dt,this.type)}q.isPointLightShadow!==!0&&this.type===Wn&&A(q,G),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,H)};function A(D,U){let G=t.update(M);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new bn(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(U,null,G,d,M,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(U,null,G,p,M,null)}function L(D,U,G,S){let b=null,H=G.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(H!==void 0)b=H;else if(b=G.isPointLight===!0?l:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let X=b.uuid,J=U.uuid,$=c[X];$===void 0&&($={},c[X]=$);let O=$[J];O===void 0&&(O=b.clone(),$[J]=O,U.addEventListener("dispose",B)),b=O}if(b.visible=U.visible,b.wireframe=U.wireframe,S===Wn?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:h[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,G.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let X=i.properties.get(b);X.light=G}return b}function w(D,U,G,S,b){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===Wn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,D.matrixWorld);let J=t.update(D),$=D.material;if(Array.isArray($)){let O=J.groups;for(let Q=0,dt=O.length;Q<dt;Q++){let q=O[Q],ut=$[q.materialIndex];if(ut&&ut.visible){let pt=L(D,ut,S,b);D.onBeforeShadow(i,D,U,G,J,pt,q),i.renderBufferDirect(G,null,J,pt,D,q),D.onAfterShadow(i,D,U,G,J,pt,q)}}}else if($.visible){let O=L(D,$,S,b);D.onBeforeShadow(i,D,U,G,J,O,null),i.renderBufferDirect(G,null,J,O,D,null),D.onAfterShadow(i,D,U,G,J,O,null)}}let X=D.children;for(let J=0,$=X.length;J<$;J++)w(X[J],U,G,S,b)}function B(D){D.target.removeEventListener("dispose",B);for(let G in c){let S=c[G],b=D.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var rg={[_o]:xo,[vo]:bo,[yo]:So,[Ci]:Mo,[xo]:_o,[bo]:vo,[So]:yo,[Mo]:Ci};function og(i,t){function e(){let _=!1,N=new Te,V=null,k=new Te(0,0,0,0);return{setMask:function(F){V!==F&&!_&&(i.colorMask(F,F,F,F),V=F)},setLocked:function(F){_=F},setClear:function(F,W,Y,nt,ht){ht===!0&&(F*=nt,W*=nt,Y*=nt),N.set(F,W,Y,nt),k.equals(N)===!1&&(i.clearColor(F,W,Y,nt),k.copy(N))},reset:function(){_=!1,V=null,k.set(-1,0,0,0)}}}function n(){let _=!1,N=!1,V=null,k=null,F=null;return{setReversed:function(W){if(N!==W){let Y=t.get("EXT_clip_control");W?Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.ZERO_TO_ONE_EXT):Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.NEGATIVE_ONE_TO_ONE_EXT),N=W;let nt=F;F=null,this.setClear(nt)}},getReversed:function(){return N},setTest:function(W){W?at(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(W){V!==W&&!_&&(i.depthMask(W),V=W)},setFunc:function(W){if(N&&(W=rg[W]),k!==W){switch(W){case _o:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case vo:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case yo:i.depthFunc(i.EQUAL);break;case Mo:i.depthFunc(i.GEQUAL);break;case bo:i.depthFunc(i.GREATER);break;case So:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=W}},setLocked:function(W){_=W},setClear:function(W){F!==W&&(N&&(W=1-W),i.clearDepth(W),F=W)},reset:function(){_=!1,V=null,k=null,F=null,N=!1}}}function s(){let _=!1,N=null,V=null,k=null,F=null,W=null,Y=null,nt=null,ht=null;return{setTest:function(rt){_||(rt?at(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(rt){N!==rt&&!_&&(i.stencilMask(rt),N=rt)},setFunc:function(rt,bt,Ht){(V!==rt||k!==bt||F!==Ht)&&(i.stencilFunc(rt,bt,Ht),V=rt,k=bt,F=Ht)},setOp:function(rt,bt,Ht){(W!==rt||Y!==bt||nt!==Ht)&&(i.stencilOp(rt,bt,Ht),W=rt,Y=bt,nt=Ht)},setLocked:function(rt){_=rt},setClear:function(rt){ht!==rt&&(i.clearStencil(rt),ht=rt)},reset:function(){_=!1,N=null,V=null,k=null,F=null,W=null,Y=null,nt=null,ht=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,p=[],g=null,M=!1,m=null,f=null,A=null,L=null,w=null,B=null,D=null,U=new St(0,0,0),G=0,S=!1,b=null,H=null,X=null,J=null,$=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,dt=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(q)[1]),Q=dt>=1):q.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Q=dt>=2);let ut=null,pt={},Et=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),gt=new Te().fromArray(Et),te=new Te().fromArray(Bt);function Yt(_,N,V,k){let F=new Uint8Array(4),W=i.createTexture();i.bindTexture(_,W),i.texParameteri(_,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(_,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Y=0;Y<V;Y++)_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY?i.texImage3D(N,0,i.RGBA,1,1,k,0,i.RGBA,i.UNSIGNED_BYTE,F):i.texImage2D(N+Y,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,F);return W}let ct={};ct[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(Ci),yt(!1),_t(ja),at(i.CULL_FACE),Tt(ni);function at(_){u[_]!==!0&&(i.enable(_),u[_]=!0)}function Mt(_){u[_]!==!1&&(i.disable(_),u[_]=!1)}function Xt(_,N){return h[_]!==N?(i.bindFramebuffer(_,N),h[_]=N,_===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=N),_===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=N),!0):!1}function Dt(_,N){let V=p,k=!1;if(_){V=d.get(N),V===void 0&&(V=[],d.set(N,V));let F=_.textures;if(V.length!==F.length||V[0]!==i.COLOR_ATTACHMENT0){for(let W=0,Y=F.length;W<Y;W++)V[W]=i.COLOR_ATTACHMENT0+W;V.length=F.length,k=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,k=!0);k&&i.drawBuffers(V)}function Qt(_){return g!==_?(i.useProgram(_),g=_,!0):!1}let we={[pi]:i.FUNC_ADD,[ml]:i.FUNC_SUBTRACT,[gl]:i.FUNC_REVERSE_SUBTRACT};we[_l]=i.MIN,we[xl]=i.MAX;let C={[vl]:i.ZERO,[yl]:i.ONE,[Ml]:i.SRC_COLOR,[qr]:i.SRC_ALPHA,[Al]:i.SRC_ALPHA_SATURATE,[wl]:i.DST_COLOR,[Sl]:i.DST_ALPHA,[bl]:i.ONE_MINUS_SRC_COLOR,[Yr]:i.ONE_MINUS_SRC_ALPHA,[El]:i.ONE_MINUS_DST_COLOR,[Tl]:i.ONE_MINUS_DST_ALPHA,[Cl]:i.CONSTANT_COLOR,[Rl]:i.ONE_MINUS_CONSTANT_COLOR,[Il]:i.CONSTANT_ALPHA,[Pl]:i.ONE_MINUS_CONSTANT_ALPHA};function Tt(_,N,V,k,F,W,Y,nt,ht,rt){if(_===ni){M===!0&&(Mt(i.BLEND),M=!1);return}if(M===!1&&(at(i.BLEND),M=!0),_!==pl){if(_!==m||rt!==S){if((f!==pi||w!==pi)&&(i.blendEquation(i.FUNC_ADD),f=pi,w=pi),rt)switch(_){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.ONE,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ec:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}A=null,L=null,B=null,D=null,U.set(0,0,0),G=0,m=_,S=rt}return}F=F||N,W=W||V,Y=Y||k,(N!==f||F!==w)&&(i.blendEquationSeparate(we[N],we[F]),f=N,w=F),(V!==A||k!==L||W!==B||Y!==D)&&(i.blendFuncSeparate(C[V],C[k],C[W],C[Y]),A=V,L=k,B=W,D=Y),(nt.equals(U)===!1||ht!==G)&&(i.blendColor(nt.r,nt.g,nt.b,ht),U.copy(nt),G=ht),m=_,S=!1}function mt(_,N){_.side===Ne?Mt(i.CULL_FACE):at(i.CULL_FACE);let V=_.side===je;N&&(V=!V),yt(V),_.blending===Ai&&_.transparent===!1?Tt(ni):Tt(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),o.setFunc(_.depthFunc),o.setTest(_.depthTest),o.setMask(_.depthWrite),r.setMask(_.colorWrite);let k=_.stencilWrite;a.setTest(k),k&&(a.setMask(_.stencilWriteMask),a.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),a.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),Rt(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(_){b!==_&&(_?i.frontFace(i.CW):i.frontFace(i.CCW),b=_)}function _t(_){_!==ul?(at(i.CULL_FACE),_!==H&&(_===ja?i.cullFace(i.BACK):_===dl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),H=_}function ee(_){_!==X&&(Q&&i.lineWidth(_),X=_)}function Rt(_,N,V){_?(at(i.POLYGON_OFFSET_FILL),(J!==N||$!==V)&&(i.polygonOffset(N,V),J=N,$=V)):Mt(i.POLYGON_OFFSET_FILL)}function kt(_){_?at(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function he(_){_===void 0&&(_=i.TEXTURE0+O-1),ut!==_&&(i.activeTexture(_),ut=_)}function wt(_,N,V){V===void 0&&(ut===null?V=i.TEXTURE0+O-1:V=ut);let k=pt[V];k===void 0&&(k={type:void 0,texture:void 0},pt[V]=k),(k.type!==_||k.texture!==N)&&(ut!==V&&(i.activeTexture(V),ut=V),i.bindTexture(_,N||ct[_]),k.type=_,k.texture=N)}function z(){let _=pt[ut];_!==void 0&&_.type!==void 0&&(i.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function et(){try{i.compressedTexImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Z(){try{i.texSubImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function lt(){try{i.texSubImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function st(){try{i.compressedTexSubImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ft(){try{i.texStorage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Nt(){try{i.texStorage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Ut(){try{i.texImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function x(){try{i.texImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function T(_){gt.equals(_)===!1&&(i.scissor(_.x,_.y,_.z,_.w),gt.copy(_))}function v(_){te.equals(_)===!1&&(i.viewport(_.x,_.y,_.z,_.w),te.copy(_))}function R(_,N){let V=c.get(N);V===void 0&&(V=new WeakMap,c.set(N,V));let k=V.get(_);k===void 0&&(k=i.getUniformBlockIndex(N,_.name),V.set(_,k))}function P(_,N){let k=c.get(N).get(_);l.get(N)!==k&&(i.uniformBlockBinding(N,k,_.__bindingPointIndex),l.set(N,k))}function y(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ut=null,pt={},h={},d=new WeakMap,p=[],g=null,M=!1,m=null,f=null,A=null,L=null,w=null,B=null,D=null,U=new St(0,0,0),G=0,S=!1,b=null,H=null,X=null,J=null,$=null,gt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Mt,bindFramebuffer:Xt,drawBuffers:Dt,useProgram:Qt,setBlending:Tt,setMaterial:mt,setFlipSided:yt,setCullFace:_t,setLineWidth:ee,setPolygonOffset:Rt,setScissorTest:kt,activeTexture:he,bindTexture:wt,unbindTexture:z,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:Ut,texImage3D:x,updateUBOMapping:R,uniformBlockBinding:P,texStorage2D:ft,texStorage3D:Nt,texSubImage2D:Z,texSubImage3D:lt,compressedTexSubImage2D:st,compressedTexSubImage3D:Ct,scissor:T,viewport:v,reset:y}}function ag(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(z,E){return p?new OffscreenCanvas(z,E):Vs("canvas")}function M(z,E,et){let Z=1,lt=wt(z);if((lt.width>et||lt.height>et)&&(Z=et/Math.max(lt.width,lt.height)),Z<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let st=Math.floor(Z*lt.width),Ct=Math.floor(Z*lt.height);h===void 0&&(h=g(st,Ct));let ft=E?g(st,Ct):h;return ft.width=st,ft.height=Ct,ft.getContext("2d").drawImage(z,0,0,st,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+st+"x"+Ct+")."),ft}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),z;return z}function m(z){return z.generateMipmaps}function f(z){i.generateMipmap(z)}function A(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function L(z,E,et,Z,lt=!1){if(z!==null){if(i[z]!==void 0)return i[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let st=E;if(E===i.RED&&(et===i.FLOAT&&(st=i.R32F),et===i.HALF_FLOAT&&(st=i.R16F),et===i.UNSIGNED_BYTE&&(st=i.R8)),E===i.RED_INTEGER&&(et===i.UNSIGNED_BYTE&&(st=i.R8UI),et===i.UNSIGNED_SHORT&&(st=i.R16UI),et===i.UNSIGNED_INT&&(st=i.R32UI),et===i.BYTE&&(st=i.R8I),et===i.SHORT&&(st=i.R16I),et===i.INT&&(st=i.R32I)),E===i.RG&&(et===i.FLOAT&&(st=i.RG32F),et===i.HALF_FLOAT&&(st=i.RG16F),et===i.UNSIGNED_BYTE&&(st=i.RG8)),E===i.RG_INTEGER&&(et===i.UNSIGNED_BYTE&&(st=i.RG8UI),et===i.UNSIGNED_SHORT&&(st=i.RG16UI),et===i.UNSIGNED_INT&&(st=i.RG32UI),et===i.BYTE&&(st=i.RG8I),et===i.SHORT&&(st=i.RG16I),et===i.INT&&(st=i.RG32I)),E===i.RGB_INTEGER&&(et===i.UNSIGNED_BYTE&&(st=i.RGB8UI),et===i.UNSIGNED_SHORT&&(st=i.RGB16UI),et===i.UNSIGNED_INT&&(st=i.RGB32UI),et===i.BYTE&&(st=i.RGB8I),et===i.SHORT&&(st=i.RGB16I),et===i.INT&&(st=i.RGB32I)),E===i.RGBA_INTEGER&&(et===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),et===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),et===i.UNSIGNED_INT&&(st=i.RGBA32UI),et===i.BYTE&&(st=i.RGBA8I),et===i.SHORT&&(st=i.RGBA16I),et===i.INT&&(st=i.RGBA32I)),E===i.RGB&&(et===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),et===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),E===i.RGBA){let Ct=lt?zs:pe.getTransfer(Z);et===i.FLOAT&&(st=i.RGBA32F),et===i.HALF_FLOAT&&(st=i.RGBA16F),et===i.UNSIGNED_BYTE&&(st=Ct===ve?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function w(z,E){let et;return z?E===null||E===vi||E===_s?et=i.DEPTH24_STENCIL8:E===Fn?et=i.DEPTH32F_STENCIL8:E===ms&&(et=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vi||E===_s?et=i.DEPTH_COMPONENT24:E===Fn?et=i.DEPTH_COMPONENT32F:E===ms&&(et=i.DEPTH_COMPONENT16),et}function B(z,E){return m(z)===!0||z.isFramebufferTexture&&z.minFilter!==ln&&z.minFilter!==Ln?Math.log2(Math.max(E.width,E.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?E.mipmaps.length:1}function D(z){let E=z.target;E.removeEventListener("dispose",D),G(E),E.isVideoTexture&&u.delete(E)}function U(z){let E=z.target;E.removeEventListener("dispose",U),b(E)}function G(z){let E=n.get(z);if(E.__webglInit===void 0)return;let et=z.source,Z=d.get(et);if(Z){let lt=Z[E.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&S(z),Object.keys(Z).length===0&&d.delete(et)}n.remove(z)}function S(z){let E=n.get(z);i.deleteTexture(E.__webglTexture);let et=z.source,Z=d.get(et);delete Z[E.__cacheKey],o.memory.textures--}function b(z){let E=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let lt=0;lt<E.__webglFramebuffer[Z].length;lt++)i.deleteFramebuffer(E.__webglFramebuffer[Z][lt]);else i.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)i.deleteFramebuffer(E.__webglFramebuffer[Z]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let et=z.textures;for(let Z=0,lt=et.length;Z<lt;Z++){let st=n.get(et[Z]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(et[Z])}n.remove(z)}let H=0;function X(){H=0}function J(){let z=H;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),H+=1,z}function $(z){let E=[];return E.push(z.wrapS),E.push(z.wrapT),E.push(z.wrapR||0),E.push(z.magFilter),E.push(z.minFilter),E.push(z.anisotropy),E.push(z.internalFormat),E.push(z.format),E.push(z.type),E.push(z.generateMipmaps),E.push(z.premultiplyAlpha),E.push(z.flipY),E.push(z.unpackAlignment),E.push(z.colorSpace),E.join()}function O(z,E){let et=n.get(z);if(z.isVideoTexture&&kt(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&et.__version!==z.version){let Z=z.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(et,z,E);return}}else z.isExternalTexture&&(et.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+E)}function Q(z,E){let et=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&et.__version!==z.version){ct(et,z,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+E)}function dt(z,E){let et=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&et.__version!==z.version){ct(et,z,E);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+E)}function q(z,E){let et=n.get(z);if(z.version>0&&et.__version!==z.version){at(et,z,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+E)}let ut={[Ri]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[Zr]:i.MIRRORED_REPEAT},pt={[ln]:i.NEAREST,[kl]:i.NEAREST_MIPMAP_NEAREST,[lr]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[Ao]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},Et={[Wl]:i.NEVER,[$l]:i.ALWAYS,[Xl]:i.LESS,[dc]:i.LEQUAL,[ql]:i.EQUAL,[Jl]:i.GEQUAL,[Yl]:i.GREATER,[Zl]:i.NOTEQUAL};function Bt(z,E){if(E.type===Fn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ln||E.magFilter===Ao||E.magFilter===lr||E.magFilter===xi||E.minFilter===Ln||E.minFilter===Ao||E.minFilter===lr||E.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,ut[E.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,ut[E.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,ut[E.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,pt[E.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,pt[E.minFilter]),E.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,Et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ln||E.minFilter!==lr&&E.minFilter!==xi||E.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let et=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function gt(z,E){let et=!1;z.__webglInit===void 0&&(z.__webglInit=!0,E.addEventListener("dispose",D));let Z=E.source,lt=d.get(Z);lt===void 0&&(lt={},d.set(Z,lt));let st=$(E);if(st!==z.__cacheKey){lt[st]===void 0&&(lt[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,et=!0),lt[st].usedTimes++;let Ct=lt[z.__cacheKey];Ct!==void 0&&(lt[z.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(E)),z.__cacheKey=st,z.__webglTexture=lt[st].texture}return et}function te(z,E,et){return Math.floor(Math.floor(z/et)/E)}function Yt(z,E,et,Z){let st=z.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,et,Z,E.data);else{st.sort((x,T)=>x.start-T.start);let Ct=0;for(let x=1;x<st.length;x++){let T=st[Ct],v=st[x],R=T.start+T.count,P=te(v.start,E.width,4),y=te(T.start,E.width,4);v.start<=R+1&&P===y&&te(v.start+v.count-1,E.width,4)===P?T.count=Math.max(T.count,v.start+v.count-T.start):(++Ct,st[Ct]=v)}st.length=Ct+1;let ft=i.getParameter(i.UNPACK_ROW_LENGTH),Nt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ut=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let x=0,T=st.length;x<T;x++){let v=st[x],R=Math.floor(v.start/4),P=Math.ceil(v.count/4),y=R%E.width,_=Math.floor(R/E.width),N=P,V=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,y),i.pixelStorei(i.UNPACK_SKIP_ROWS,_),e.texSubImage2D(i.TEXTURE_2D,0,y,_,N,V,et,Z,E.data)}z.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ut)}}function ct(z,E,et){let Z=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=i.TEXTURE_3D);let lt=gt(z,E),st=E.source;e.bindTexture(Z,z.__webglTexture,i.TEXTURE0+et);let Ct=n.get(st);if(st.version!==Ct.__version||lt===!0){e.activeTexture(i.TEXTURE0+et);let ft=pe.getPrimaries(pe.workingColorSpace),Nt=E.colorSpace===si?null:pe.getPrimaries(E.colorSpace),Ut=E.colorSpace===si||ft===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let x=M(E.image,!1,s.maxTextureSize);x=he(E,x);let T=r.convert(E.format,E.colorSpace),v=r.convert(E.type),R=L(E.internalFormat,T,v,E.colorSpace,E.isVideoTexture);Bt(Z,E);let P,y=E.mipmaps,_=E.isVideoTexture!==!0,N=Ct.__version===void 0||lt===!0,V=st.dataReady,k=B(E,x);if(E.isDepthTexture)R=w(E.format===xs,E.type),N&&(_?e.texStorage2D(i.TEXTURE_2D,1,R,x.width,x.height):e.texImage2D(i.TEXTURE_2D,0,R,x.width,x.height,0,T,v,null));else if(E.isDataTexture)if(y.length>0){_&&N&&e.texStorage2D(i.TEXTURE_2D,k,R,y[0].width,y[0].height);for(let F=0,W=y.length;F<W;F++)P=y[F],_?V&&e.texSubImage2D(i.TEXTURE_2D,F,0,0,P.width,P.height,T,v,P.data):e.texImage2D(i.TEXTURE_2D,F,R,P.width,P.height,0,T,v,P.data);E.generateMipmaps=!1}else _?(N&&e.texStorage2D(i.TEXTURE_2D,k,R,x.width,x.height),V&&Yt(E,x,T,v)):e.texImage2D(i.TEXTURE_2D,0,R,x.width,x.height,0,T,v,x.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){_&&N&&e.texStorage3D(i.TEXTURE_2D_ARRAY,k,R,y[0].width,y[0].height,x.depth);for(let F=0,W=y.length;F<W;F++)if(P=y[F],E.format!==Tn)if(T!==null)if(_){if(V)if(E.layerUpdates.size>0){let Y=yc(P.width,P.height,E.format,E.type);for(let nt of E.layerUpdates){let ht=P.data.subarray(nt*Y/P.data.BYTES_PER_ELEMENT,(nt+1)*Y/P.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,nt,P.width,P.height,1,T,ht)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,P.width,P.height,x.depth,T,P.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,R,P.width,P.height,x.depth,0,P.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,P.width,P.height,x.depth,T,v,P.data):e.texImage3D(i.TEXTURE_2D_ARRAY,F,R,P.width,P.height,x.depth,0,T,v,P.data)}else{_&&N&&e.texStorage2D(i.TEXTURE_2D,k,R,y[0].width,y[0].height);for(let F=0,W=y.length;F<W;F++)P=y[F],E.format!==Tn?T!==null?_?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,P.width,P.height,T,P.data):e.compressedTexImage2D(i.TEXTURE_2D,F,R,P.width,P.height,0,P.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_?V&&e.texSubImage2D(i.TEXTURE_2D,F,0,0,P.width,P.height,T,v,P.data):e.texImage2D(i.TEXTURE_2D,F,R,P.width,P.height,0,T,v,P.data)}else if(E.isDataArrayTexture)if(_){if(N&&e.texStorage3D(i.TEXTURE_2D_ARRAY,k,R,x.width,x.height,x.depth),V)if(E.layerUpdates.size>0){let F=yc(x.width,x.height,E.format,E.type);for(let W of E.layerUpdates){let Y=x.data.subarray(W*F/x.data.BYTES_PER_ELEMENT,(W+1)*F/x.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,W,x.width,x.height,1,T,v,Y)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,x.width,x.height,x.depth,T,v,x.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,R,x.width,x.height,x.depth,0,T,v,x.data);else if(E.isData3DTexture)_?(N&&e.texStorage3D(i.TEXTURE_3D,k,R,x.width,x.height,x.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,x.width,x.height,x.depth,T,v,x.data)):e.texImage3D(i.TEXTURE_3D,0,R,x.width,x.height,x.depth,0,T,v,x.data);else if(E.isFramebufferTexture){if(N)if(_)e.texStorage2D(i.TEXTURE_2D,k,R,x.width,x.height);else{let F=x.width,W=x.height;for(let Y=0;Y<k;Y++)e.texImage2D(i.TEXTURE_2D,Y,R,F,W,0,T,v,null),F>>=1,W>>=1}}else if(y.length>0){if(_&&N){let F=wt(y[0]);e.texStorage2D(i.TEXTURE_2D,k,R,F.width,F.height)}for(let F=0,W=y.length;F<W;F++)P=y[F],_?V&&e.texSubImage2D(i.TEXTURE_2D,F,0,0,T,v,P):e.texImage2D(i.TEXTURE_2D,F,R,T,v,P);E.generateMipmaps=!1}else if(_){if(N){let F=wt(x);e.texStorage2D(i.TEXTURE_2D,k,R,F.width,F.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,T,v,x)}else e.texImage2D(i.TEXTURE_2D,0,R,T,v,x);m(E)&&f(Z),Ct.__version=st.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function at(z,E,et){if(E.image.length!==6)return;let Z=gt(z,E),lt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+et);let st=n.get(lt);if(lt.version!==st.__version||Z===!0){e.activeTexture(i.TEXTURE0+et);let Ct=pe.getPrimaries(pe.workingColorSpace),ft=E.colorSpace===si?null:pe.getPrimaries(E.colorSpace),Nt=E.colorSpace===si||Ct===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let Ut=E.isCompressedTexture||E.image[0].isCompressedTexture,x=E.image[0]&&E.image[0].isDataTexture,T=[];for(let W=0;W<6;W++)!Ut&&!x?T[W]=M(E.image[W],!0,s.maxCubemapSize):T[W]=x?E.image[W].image:E.image[W],T[W]=he(E,T[W]);let v=T[0],R=r.convert(E.format,E.colorSpace),P=r.convert(E.type),y=L(E.internalFormat,R,P,E.colorSpace),_=E.isVideoTexture!==!0,N=st.__version===void 0||Z===!0,V=lt.dataReady,k=B(E,v);Bt(i.TEXTURE_CUBE_MAP,E);let F;if(Ut){_&&N&&e.texStorage2D(i.TEXTURE_CUBE_MAP,k,y,v.width,v.height);for(let W=0;W<6;W++){F=T[W].mipmaps;for(let Y=0;Y<F.length;Y++){let nt=F[Y];E.format!==Tn?R!==null?_?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y,0,0,nt.width,nt.height,R,nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y,y,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y,0,0,nt.width,nt.height,R,P,nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y,y,nt.width,nt.height,0,R,P,nt.data)}}}else{if(F=E.mipmaps,_&&N){F.length>0&&k++;let W=wt(T[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,k,y,W.width,W.height)}for(let W=0;W<6;W++)if(x){_?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,T[W].width,T[W].height,R,P,T[W].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,y,T[W].width,T[W].height,0,R,P,T[W].data);for(let Y=0;Y<F.length;Y++){let ht=F[Y].image[W].image;_?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y+1,0,0,ht.width,ht.height,R,P,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y+1,y,ht.width,ht.height,0,R,P,ht.data)}}else{_?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,R,P,T[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,y,R,P,T[W]);for(let Y=0;Y<F.length;Y++){let nt=F[Y];_?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y+1,0,0,R,P,nt.image[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y+1,y,R,P,nt.image[W])}}}m(E)&&f(i.TEXTURE_CUBE_MAP),st.__version=lt.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function Mt(z,E,et,Z,lt,st){let Ct=r.convert(et.format,et.colorSpace),ft=r.convert(et.type),Nt=L(et.internalFormat,Ct,ft,et.colorSpace),Ut=n.get(E),x=n.get(et);if(x.__renderTarget=E,!Ut.__hasExternalTextures){let T=Math.max(1,E.width>>st),v=Math.max(1,E.height>>st);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,st,Nt,T,v,E.depth,0,Ct,ft,null):e.texImage2D(lt,st,Nt,T,v,0,Ct,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),Rt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,lt,x.__webglTexture,0,ee(E)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,lt,x.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(z,E,et){if(i.bindRenderbuffer(i.RENDERBUFFER,z),E.depthBuffer){let Z=E.depthTexture,lt=Z&&Z.isDepthTexture?Z.type:null,st=w(E.stencilBuffer,lt),Ct=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=ee(E);Rt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,st,E.width,E.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,st,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,st,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,z)}else{let Z=E.textures;for(let lt=0;lt<Z.length;lt++){let st=Z[lt],Ct=r.convert(st.format,st.colorSpace),ft=r.convert(st.type),Nt=L(st.internalFormat,Ct,ft,st.colorSpace),Ut=ee(E);et&&Rt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,Nt,E.width,E.height):Rt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut,Nt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(z,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);let lt=Z.__webglTexture,st=ee(E);if(E.depthTexture.format===os)Rt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(E.depthTexture.format===xs)Rt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Qt(z){let E=n.get(z),et=z.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==z.depthTexture){let Z=z.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){let lt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",lt)};Z.addEventListener("dispose",lt),E.__depthDisposeCallback=lt}E.__boundDepthTexture=Z}if(z.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");let Z=z.texture.mipmaps;Z&&Z.length>0?Dt(E.__webglFramebuffer[0],z):Dt(E.__webglFramebuffer,z)}else if(et){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=i.createRenderbuffer(),Xt(E.__webglDepthbuffer[Z],z,!1);else{let lt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,st)}}else{let Z=z.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Xt(E.__webglDepthbuffer,z,!1);else{let lt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,st)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function we(z,E,et){let Z=n.get(z);E!==void 0&&Mt(Z.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),et!==void 0&&Qt(z)}function C(z){let E=z.texture,et=n.get(z),Z=n.get(E);z.addEventListener("dispose",U);let lt=z.textures,st=z.isWebGLCubeRenderTarget===!0,Ct=lt.length>1;if(Ct||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=E.version,o.memory.textures++),st){et.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[ft]=[];for(let Nt=0;Nt<E.mipmaps.length;Nt++)et.__webglFramebuffer[ft][Nt]=i.createFramebuffer()}else et.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let ft=0;ft<E.mipmaps.length;ft++)et.__webglFramebuffer[ft]=i.createFramebuffer()}else et.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ft=0,Nt=lt.length;ft<Nt;ft++){let Ut=n.get(lt[ft]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),o.memory.textures++)}if(z.samples>0&&Rt(z)===!1){et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let ft=0;ft<lt.length;ft++){let Nt=lt[ft];et.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[ft]);let Ut=r.convert(Nt.format,Nt.colorSpace),x=r.convert(Nt.type),T=L(Nt.internalFormat,Ut,x,Nt.colorSpace,z.isXRRenderTarget===!0),v=ee(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,v,T,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,et.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(et.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,E);for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0)for(let Nt=0;Nt<E.mipmaps.length;Nt++)Mt(et.__webglFramebuffer[ft][Nt],z,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Nt);else Mt(et.__webglFramebuffer[ft],z,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(E)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ft=0,Nt=lt.length;ft<Nt;ft++){let Ut=lt[ft],x=n.get(Ut),T=i.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(T=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(T,x.__webglTexture),Bt(T,Ut),Mt(et.__webglFramebuffer,z,Ut,i.COLOR_ATTACHMENT0+ft,T,0),m(Ut)&&f(T)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ft=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Z.__webglTexture),Bt(ft,E),E.mipmaps&&E.mipmaps.length>0)for(let Nt=0;Nt<E.mipmaps.length;Nt++)Mt(et.__webglFramebuffer[Nt],z,E,i.COLOR_ATTACHMENT0,ft,Nt);else Mt(et.__webglFramebuffer,z,E,i.COLOR_ATTACHMENT0,ft,0);m(E)&&f(ft),e.unbindTexture()}z.depthBuffer&&Qt(z)}function Tt(z){let E=z.textures;for(let et=0,Z=E.length;et<Z;et++){let lt=E[et];if(m(lt)){let st=A(z),Ct=n.get(lt).__webglTexture;e.bindTexture(st,Ct),f(st),e.unbindTexture()}}}let mt=[],yt=[];function _t(z){if(z.samples>0){if(Rt(z)===!1){let E=z.textures,et=z.width,Z=z.height,lt=i.COLOR_BUFFER_BIT,st=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(z),ft=E.length>1;if(ft)for(let Ut=0;Ut<E.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);let Nt=z.texture.mipmaps;Nt&&Nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Ut=0;Ut<E.length;Ut++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Ut]);let x=n.get(E[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,x,0)}i.blitFramebuffer(0,0,et,Z,0,0,et,Z,lt,i.NEAREST),l===!0&&(mt.length=0,yt.length=0,mt.push(i.COLOR_ATTACHMENT0+Ut),z.depthBuffer&&z.resolveDepthBuffer===!1&&(mt.push(st),yt.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,yt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Ut=0;Ut<E.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Ut]);let x=n.get(E[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,x,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&l){let E=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ee(z){return Math.min(s.maxSamples,z.samples)}function Rt(z){let E=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(z){let E=o.render.frame;u.get(z)!==E&&(u.set(z,E),z.update())}function he(z,E){let et=z.colorSpace,Z=z.format,lt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||et!==Ii&&et!==si&&(pe.getTransfer(et)===ve?(Z!==Tn||lt!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function wt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=X,this.setTexture2D=O,this.setTexture2DArray=Q,this.setTexture3D=dt,this.setTextureCube=q,this.rebindTextures=we,this.setupRenderTarget=C,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Rt}function cg(i,t){function e(n,s=si){let r,o=pe.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Io)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sc)return i.BYTE;if(n===rc)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===Co)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===gs)return i.HALF_FLOAT;if(n===cc)return i.ALPHA;if(n===lc)return i.RGB;if(n===Tn)return i.RGBA;if(n===os)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Po)return i.RED;if(n===Lo)return i.RED_INTEGER;if(n===hc)return i.RG;if(n===Do)return i.RG_INTEGER;if(n===Uo)return i.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===No||n===Fo||n===Bo||n===Oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===No)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zo||n===ko||n===Vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zo||n===ko)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ho||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Jo||n===$o||n===Ko||n===jo||n===Qo||n===ta||n===ea)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ho)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Go)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$o)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ta)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ea)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===na||n===ia||n===sa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===na)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ra||n===oa||n===aa||n===ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Qs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ke({vertexShader:lg,fragmentShader:hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new Sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uc=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null,M=typeof XRWebGLBinding<"u",m=new Dc,f={},A=e.getContextAttributes(),L=null,w=null,B=[],D=[],U=new ue,G=null,S=new $e;S.viewport=new Te;let b=new $e;b.viewport=new Te;let H=[S,b],X=new go,J=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let at=B[ct];return at===void 0&&(at=new hs,B[ct]=at),at.getTargetRaySpace()},this.getControllerGrip=function(ct){let at=B[ct];return at===void 0&&(at=new hs,B[ct]=at),at.getGripSpace()},this.getHand=function(ct){let at=B[ct];return at===void 0&&(at=new hs,B[ct]=at),at.getHandSpace()};function O(ct){let at=D.indexOf(ct.inputSource);if(at===-1)return;let Mt=B[at];Mt!==void 0&&(Mt.update(ct.inputSource,ct.frame,c||o),Mt.dispatchEvent({type:ct.type,data:ct.inputSource}))}function Q(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",dt);for(let ct=0;ct<B.length;ct++){let at=D[ct];at!==null&&(D[ct]=null,B[ct].disconnect(at))}J=null,$=null,m.reset();for(let ct in f)delete f[ct];t.setRenderTarget(L),p=null,d=null,h=null,s=null,w=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(G),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){r=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){a=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ct){c=ct},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ct){if(s=ct,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",dt),A.xrCompatible!==!0&&await e.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(U),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Xt=null,Dt=null;A.depth&&(Dt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=A.stencil?xs:os,Xt=A.stencil?_s:vi);let Qt={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Qt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new bn(d.textureWidth,d.textureHeight,{format:Tn,type:Nn,depthTexture:new js(d.textureWidth,d.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Mt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new bn(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function dt(ct){for(let at=0;at<ct.removed.length;at++){let Mt=ct.removed[at],Xt=D.indexOf(Mt);Xt>=0&&(D[Xt]=null,B[Xt].disconnect(Mt))}for(let at=0;at<ct.added.length;at++){let Mt=ct.added[at],Xt=D.indexOf(Mt);if(Xt===-1){for(let Qt=0;Qt<B.length;Qt++)if(Qt>=D.length){D.push(Mt),Xt=Qt;break}else if(D[Qt]===null){D[Qt]=Mt,Xt=Qt;break}if(Xt===-1)break}let Dt=B[Xt];Dt&&Dt.connect(Mt)}}let q=new K,ut=new K;function pt(ct,at,Mt){q.setFromMatrixPosition(at.matrixWorld),ut.setFromMatrixPosition(Mt.matrixWorld);let Xt=q.distanceTo(ut),Dt=at.projectionMatrix.elements,Qt=Mt.projectionMatrix.elements,we=Dt[14]/(Dt[10]-1),C=Dt[14]/(Dt[10]+1),Tt=(Dt[9]+1)/Dt[5],mt=(Dt[9]-1)/Dt[5],yt=(Dt[8]-1)/Dt[0],_t=(Qt[8]+1)/Qt[0],ee=we*yt,Rt=we*_t,kt=Xt/(-yt+_t),he=kt*-yt;if(at.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(he),ct.translateZ(kt),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Dt[10]===-1)ct.projectionMatrix.copy(at.projectionMatrix),ct.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let wt=we+kt,z=C+kt,E=ee-he,et=Rt+(Xt-he),Z=Tt*C/z*wt,lt=mt*C/z*wt;ct.projectionMatrix.makePerspective(E,et,Z,lt,wt,z),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function Et(ct,at){at===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(at.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(s===null)return;let at=ct.near,Mt=ct.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),X.near=b.near=S.near=at,X.far=b.far=S.far=Mt,(J!==X.near||$!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),J=X.near,$=X.far),X.layers.mask=ct.layers.mask|6,S.layers.mask=X.layers.mask&3,b.layers.mask=X.layers.mask&5;let Xt=ct.parent,Dt=X.cameras;Et(X,Xt);for(let Qt=0;Qt<Dt.length;Qt++)Et(Dt[Qt],Xt);Dt.length===2?pt(X,S,b):X.projectionMatrix.copy(S.projectionMatrix),Bt(ct,X,Xt)};function Bt(ct,at,Mt){Mt===null?ct.matrix.copy(at.matrixWorld):(ct.matrix.copy(Mt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(at.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(at.projectionMatrix),ct.projectionMatrixInverse.copy(at.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=as*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ct){l=ct,d!==null&&(d.fixedFoveation=ct),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ct)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(ct){return f[ct]};let gt=null;function te(ct,at){if(u=at.getViewerPose(c||o),g=at,u!==null){let Mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let Xt=!1;Mt.length!==X.cameras.length&&(X.cameras.length=0,Xt=!0);for(let C=0;C<Mt.length;C++){let Tt=Mt[C],mt=null;if(p!==null)mt=p.getViewport(Tt);else{let _t=h.getViewSubImage(d,Tt);mt=_t.viewport,C===0&&(t.setRenderTargetTextures(w,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(w))}let yt=H[C];yt===void 0&&(yt=new $e,yt.layers.enable(C),yt.viewport=new Te,H[C]=yt),yt.matrix.fromArray(Tt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(Tt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(mt.x,mt.y,mt.width,mt.height),C===0&&(X.matrix.copy(yt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Xt===!0&&X.cameras.push(yt)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){h=n.getBinding();let C=h.getDepthInformation(Mt[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(Dt&&Dt.includes("camera-access")&&M){t.state.unbindTexture(),h=n.getBinding();for(let C=0;C<Mt.length;C++){let Tt=Mt[C].camera;if(Tt){let mt=f[Tt];mt||(mt=new Qs,f[Tt]=mt);let yt=h.getCameraImage(Tt);mt.sourceTexture=yt}}}}for(let Mt=0;Mt<B.length;Mt++){let Xt=D[Mt],Dt=B[Mt];Xt!==null&&Dt!==void 0&&Dt.update(Xt,at,c||o)}gt&&gt(ct,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}let Yt=new Th;Yt.setAnimationLoop(te),this.setAnimationLoop=function(ct){gt=ct},this.dispose=function(){}}},ki=new Dn,ug=new xe;function dg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,gc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,A,L,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,A,L):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===je&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===je&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let A=t.get(f),L=A.envMap,w=A.envMapRotation;L&&(m.envMap.value=L,ki.copy(w),ki.x*=-1,ki.y*=-1,ki.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(ug.makeRotationFromEuler(ki)),m.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,A,L){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=L*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===je&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let A=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,L){let w=L.program;n.uniformBlockBinding(A,w)}function c(A,L){let w=s[A.id];w===void 0&&(g(A),w=u(A),s[A.id]=w,A.addEventListener("dispose",m));let B=L.program;n.updateUBOMapping(A,B);let D=t.render.frame;r[A.id]!==D&&(d(A),r[A.id]=D)}function u(A){let L=h();A.__bindingPointIndex=L;let w=i.createBuffer(),B=A.__size,D=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,B,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,w),w}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let L=s[A.id],w=A.uniforms,B=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let D=0,U=w.length;D<U;D++){let G=Array.isArray(w[D])?w[D]:[w[D]];for(let S=0,b=G.length;S<b;S++){let H=G[S];if(p(H,D,S,B)===!0){let X=H.__offset,J=Array.isArray(H.value)?H.value:[H.value],$=0;for(let O=0;O<J.length;O++){let Q=J[O],dt=M(Q);typeof Q=="number"||typeof Q=="boolean"?(H.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,X+$,H.__data)):Q.isMatrix3?(H.__data[0]=Q.elements[0],H.__data[1]=Q.elements[1],H.__data[2]=Q.elements[2],H.__data[3]=0,H.__data[4]=Q.elements[3],H.__data[5]=Q.elements[4],H.__data[6]=Q.elements[5],H.__data[7]=0,H.__data[8]=Q.elements[6],H.__data[9]=Q.elements[7],H.__data[10]=Q.elements[8],H.__data[11]=0):(Q.toArray(H.__data,$),$+=dt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,L,w,B){let D=A.value,U=L+"_"+w;if(B[U]===void 0)return typeof D=="number"||typeof D=="boolean"?B[U]=D:B[U]=D.clone(),!0;{let G=B[U];if(typeof D=="number"||typeof D=="boolean"){if(G!==D)return B[U]=D,!0}else if(G.equals(D)===!1)return G.copy(D),!0}return!1}function g(A){let L=A.uniforms,w=0,B=16;for(let U=0,G=L.length;U<G;U++){let S=Array.isArray(L[U])?L[U]:[L[U]];for(let b=0,H=S.length;b<H;b++){let X=S[b],J=Array.isArray(X.value)?X.value:[X.value];for(let $=0,O=J.length;$<O;$++){let Q=J[$],dt=M(Q),q=w%B,ut=q%dt.boundary,pt=q+ut;w+=ut,pt!==0&&B-pt<dt.storage&&(w+=B-pt),X.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=dt.storage}}}let D=w%B;return D>0&&(w+=B-D),A.__size=w,A.__cache={},this}function M(A){let L={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(L.boundary=4,L.storage=4):A.isVector2?(L.boundary=8,L.storage=8):A.isVector3||A.isColor?(L.boundary=16,L.storage=12):A.isVector4?(L.boundary=16,L.storage=16):A.isMatrix3?(L.boundary=48,L.storage=48):A.isMatrix4?(L.boundary=64,L.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),L}function m(A){let L=A.target;L.removeEventListener("dispose",m);let w=o.indexOf(L.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function f(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var fa=class{constructor(t={}){let{canvas:e=Kl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),M=new Int32Array(4),m=null,f=null,A=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,B=!1;this._outputColorSpace=ze;let D=0,U=0,G=null,S=-1,b=null,H=new Te,X=new Te,J=null,$=new St(0),O=0,Q=e.width,dt=e.height,q=1,ut=null,pt=null,Et=new Te(0,0,Q,dt),Bt=new Te(0,0,Q,dt),gt=!1,te=new ds,Yt=!1,ct=!1,at=new xe,Mt=new K,Xt=new Te,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function we(){return G===null?q:1}let C=n;function Tt(I,j){return e.getContext(I,j)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",V,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",F,!1),C===null){let j="webgl2";if(C=Tt(j,I),C===null)throw Tt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let mt,yt,_t,ee,Rt,kt,he,wt,z,E,et,Z,lt,st,Ct,ft,Nt,Ut,x,T,v,R,P,y;function _(){mt=new Pp(C),mt.init(),R=new cg(C,mt),yt=new Tp(C,mt,t,R),_t=new og(C,mt),yt.reversedDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),ee=new Up(C),Rt=new Ym,kt=new ag(C,mt,_t,Rt,yt,R,ee),he=new Ep(w),wt=new Ip(w),z=new zu(C),P=new bp(C,z),E=new Lp(C,z,ee,P),et=new Fp(C,E,z,ee),x=new Np(C,yt,kt),ft=new wp(Rt),Z=new qm(w,he,wt,mt,yt,P,ft),lt=new dg(w,Rt),st=new Jm,Ct=new eg(mt),Ut=new Mp(w,he,wt,_t,et,p,l),Nt=new sg(w,et,yt),y=new fg(C,ee,yt,_t),T=new Sp(C,mt,ee),v=new Dp(C,mt,ee),ee.programs=Z.programs,w.capabilities=yt,w.extensions=mt,w.properties=Rt,w.renderLists=st,w.shadowMap=Nt,w.state=_t,w.info=ee}_();let N=new Uc(w,C);this.xr=N,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let I=mt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=mt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(I){I!==void 0&&(q=I,this.setSize(Q,dt,!1))},this.getSize=function(I){return I.set(Q,dt)},this.setSize=function(I,j,it=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=I,dt=j,e.width=Math.floor(I*q),e.height=Math.floor(j*q),it===!0&&(e.style.width=I+"px",e.style.height=j+"px"),this.setViewport(0,0,I,j)},this.getDrawingBufferSize=function(I){return I.set(Q*q,dt*q).floor()},this.setDrawingBufferSize=function(I,j,it){Q=I,dt=j,q=it,e.width=Math.floor(I*it),e.height=Math.floor(j*it),this.setViewport(0,0,I,j)},this.getCurrentViewport=function(I){return I.copy(H)},this.getViewport=function(I){return I.copy(Et)},this.setViewport=function(I,j,it,ot){I.isVector4?Et.set(I.x,I.y,I.z,I.w):Et.set(I,j,it,ot),_t.viewport(H.copy(Et).multiplyScalar(q).round())},this.getScissor=function(I){return I.copy(Bt)},this.setScissor=function(I,j,it,ot){I.isVector4?Bt.set(I.x,I.y,I.z,I.w):Bt.set(I,j,it,ot),_t.scissor(X.copy(Bt).multiplyScalar(q).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(I){_t.setScissorTest(gt=I)},this.setOpaqueSort=function(I){ut=I},this.setTransparentSort=function(I){pt=I},this.getClearColor=function(I){return I.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(I=!0,j=!0,it=!0){let ot=0;if(I){let tt=!1;if(G!==null){let vt=G.texture.format;tt=vt===Uo||vt===Do||vt===Lo}if(tt){let vt=G.texture.type,Lt=vt===Nn||vt===vi||vt===ms||vt===_s||vt===Ro||vt===Io,Vt=Ut.getClearColor(),Ot=Ut.getClearAlpha(),jt=Vt.r,ne=Vt.g,Jt=Vt.b;Lt?(g[0]=jt,g[1]=ne,g[2]=Jt,g[3]=Ot,C.clearBufferuiv(C.COLOR,0,g)):(M[0]=jt,M[1]=ne,M[2]=Jt,M[3]=Ot,C.clearBufferiv(C.COLOR,0,M))}else ot|=C.COLOR_BUFFER_BIT}j&&(ot|=C.DEPTH_BUFFER_BIT),it&&(ot|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",V,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",F,!1),Ut.dispose(),st.dispose(),Ct.dispose(),Rt.dispose(),he.dispose(),wt.dispose(),et.dispose(),P.dispose(),y.dispose(),Z.dispose(),N.dispose(),N.removeEventListener("sessionstart",Ht),N.removeEventListener("sessionend",It),$t.stop()};function V(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let I=ee.autoReset,j=Nt.enabled,it=Nt.autoUpdate,ot=Nt.needsUpdate,tt=Nt.type;_(),ee.autoReset=I,Nt.enabled=j,Nt.autoUpdate=it,Nt.needsUpdate=ot,Nt.type=tt}function F(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function W(I){let j=I.target;j.removeEventListener("dispose",W),Y(j)}function Y(I){nt(I),Rt.remove(I)}function nt(I){let j=Rt.get(I).programs;j!==void 0&&(j.forEach(function(it){Z.releaseProgram(it)}),I.isShaderMaterial&&Z.releaseShaderCache(I))}this.renderBufferDirect=function(I,j,it,ot,tt,vt){j===null&&(j=Dt);let Lt=tt.isMesh&&tt.matrixWorld.determinant()<0,Vt=Pe(I,j,it,ot,tt);_t.setMaterial(ot,Lt);let Ot=it.index,jt=1;if(ot.wireframe===!0){if(Ot=E.getWireframeAttribute(it),Ot===void 0)return;jt=2}let ne=it.drawRange,Jt=it.attributes.position,fe=ne.start*jt,ye=(ne.start+ne.count)*jt;vt!==null&&(fe=Math.max(fe,vt.start*jt),ye=Math.min(ye,(vt.start+vt.count)*jt)),Ot!==null?(fe=Math.max(fe,0),ye=Math.min(ye,Ot.count)):Jt!=null&&(fe=Math.max(fe,0),ye=Math.min(ye,Jt.count));let Be=ye-fe;if(Be<0||Be===1/0)return;P.setup(tt,ot,Vt,it,Ot);let Ae,be=T;if(Ot!==null&&(Ae=z.get(Ot),be=v,be.setIndex(Ae)),tt.isMesh)ot.wireframe===!0?(_t.setLineWidth(ot.wireframeLinewidth*we()),be.setMode(C.LINES)):be.setMode(C.TRIANGLES);else if(tt.isLine){let Kt=ot.linewidth;Kt===void 0&&(Kt=1),_t.setLineWidth(Kt*we()),tt.isLineSegments?be.setMode(C.LINES):tt.isLineLoop?be.setMode(C.LINE_LOOP):be.setMode(C.LINE_STRIP)}else tt.isPoints?be.setMode(C.POINTS):tt.isSprite&&be.setMode(C.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))be.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let Kt=tt._multiDrawStarts,Le=tt._multiDrawCounts,ge=tt._multiDrawCount,un=Ot?z.get(Ot).bytesPerElement:1,Wi=Rt.get(ot).currentProgram.getUniforms();for(let dn=0;dn<ge;dn++)Wi.setValue(C,"_gl_DrawID",dn),be.render(Kt[dn]/un,Le[dn])}else if(tt.isInstancedMesh)be.renderInstances(fe,Be,tt.count);else if(it.isInstancedBufferGeometry){let Kt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Le=Math.min(it.instanceCount,Kt);be.renderInstances(fe,Be,Le)}else be.render(fe,Be)};function ht(I,j,it){I.transparent===!0&&I.side===Ne&&I.forceSinglePass===!1?(I.side=je,I.needsUpdate=!0,ie(I,j,it),I.side=Pn,I.needsUpdate=!0,ie(I,j,it),I.side=Ne):ie(I,j,it)}this.compile=function(I,j,it=null){it===null&&(it=I),f=Ct.get(it),f.init(j),L.push(f),it.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(f.pushLight(tt),tt.castShadow&&f.pushShadow(tt))}),I!==it&&I.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(f.pushLight(tt),tt.castShadow&&f.pushShadow(tt))}),f.setupLights();let ot=new Set;return I.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let vt=tt.material;if(vt)if(Array.isArray(vt))for(let Lt=0;Lt<vt.length;Lt++){let Vt=vt[Lt];ht(Vt,it,tt),ot.add(Vt)}else ht(vt,it,tt),ot.add(vt)}),f=L.pop(),ot},this.compileAsync=function(I,j,it=null){let ot=this.compile(I,j,it);return new Promise(tt=>{function vt(){if(ot.forEach(function(Lt){Rt.get(Lt).currentProgram.isReady()&&ot.delete(Lt)}),ot.size===0){tt(I);return}setTimeout(vt,10)}mt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let rt=null;function bt(I){rt&&rt(I)}function Ht(){$t.stop()}function It(){$t.start()}let $t=new Th;$t.setAnimationLoop(bt),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(I){rt=I,N.setAnimationLoop(I),I===null?$t.stop():$t.start()},N.addEventListener("sessionstart",Ht),N.addEventListener("sessionend",It),this.render=function(I,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(j),j=N.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,j,G),f=Ct.get(I,L.length),f.init(j),L.push(f),at.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),te.setFromProjectionMatrix(at,In,j.reversedDepth),ct=this.localClippingEnabled,Yt=ft.init(this.clippingPlanes,ct),m=st.get(I,A.length),m.init(),A.push(m),N.enabled===!0&&N.isPresenting===!0){let vt=w.xr.getDepthSensingMesh();vt!==null&&zt(vt,j,-1/0,w.sortObjects)}zt(I,j,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(ut,pt),Qt=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,Qt&&Ut.addToRenderList(m,I),this.info.render.frame++,Yt===!0&&ft.beginShadows();let it=f.state.shadowsArray;Nt.render(it,I,j),Yt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let ot=m.opaque,tt=m.transmissive;if(f.setupLights(),j.isArrayCamera){let vt=j.cameras;if(tt.length>0)for(let Lt=0,Vt=vt.length;Lt<Vt;Lt++){let Ot=vt[Lt];oe(ot,tt,I,Ot)}Qt&&Ut.render(I);for(let Lt=0,Vt=vt.length;Lt<Vt;Lt++){let Ot=vt[Lt];Zt(m,I,Ot,Ot.viewport)}}else tt.length>0&&oe(ot,tt,I,j),Qt&&Ut.render(I),Zt(m,I,j);G!==null&&U===0&&(kt.updateMultisampleRenderTarget(G),kt.updateRenderTargetMipmap(G)),I.isScene===!0&&I.onAfterRender(w,I,j),P.resetDefaultState(),S=-1,b=null,L.pop(),L.length>0?(f=L[L.length-1],Yt===!0&&ft.setGlobalState(w.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function zt(I,j,it,ot){if(I.visible===!1)return;if(I.layers.test(j.layers)){if(I.isGroup)it=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(j);else if(I.isLight)f.pushLight(I),I.castShadow&&f.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||te.intersectsSprite(I)){ot&&Xt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(at);let Lt=et.update(I),Vt=I.material;Vt.visible&&m.push(I,Lt,Vt,it,Xt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||te.intersectsObject(I))){let Lt=et.update(I),Vt=I.material;if(ot&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Xt.copy(I.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Xt.copy(Lt.boundingSphere.center)),Xt.applyMatrix4(I.matrixWorld).applyMatrix4(at)),Array.isArray(Vt)){let Ot=Lt.groups;for(let jt=0,ne=Ot.length;jt<ne;jt++){let Jt=Ot[jt],fe=Vt[Jt.materialIndex];fe&&fe.visible&&m.push(I,Lt,fe,it,Xt.z,Jt)}}else Vt.visible&&m.push(I,Lt,Vt,it,Xt.z,null)}}let vt=I.children;for(let Lt=0,Vt=vt.length;Lt<Vt;Lt++)zt(vt[Lt],j,it,ot)}function Zt(I,j,it,ot){let tt=I.opaque,vt=I.transmissive,Lt=I.transparent;f.setupLightsView(it),Yt===!0&&ft.setGlobalState(w.clippingPlanes,it),ot&&_t.viewport(H.copy(ot)),tt.length>0&&Gt(tt,j,it),vt.length>0&&Gt(vt,j,it),Lt.length>0&&Gt(Lt,j,it),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function oe(I,j,it,ot){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ot.id]===void 0&&(f.state.transmissionRenderTarget[ot.id]=new bn(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?gs:Nn,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));let vt=f.state.transmissionRenderTarget[ot.id],Lt=ot.viewport||H;vt.setSize(Lt.z*w.transmissionResolutionScale,Lt.w*w.transmissionResolutionScale);let Vt=w.getRenderTarget(),Ot=w.getActiveCubeFace(),jt=w.getActiveMipmapLevel();w.setRenderTarget(vt),w.getClearColor($),O=w.getClearAlpha(),O<1&&w.setClearColor(16777215,.5),w.clear(),Qt&&Ut.render(it);let ne=w.toneMapping;w.toneMapping=ii;let Jt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),f.setupLightsView(ot),Yt===!0&&ft.setGlobalState(w.clippingPlanes,ot),Gt(I,it,ot),kt.updateMultisampleRenderTarget(vt),kt.updateRenderTargetMipmap(vt),mt.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let ye=0,Be=j.length;ye<Be;ye++){let Ae=j[ye],be=Ae.object,Kt=Ae.geometry,Le=Ae.material,ge=Ae.group;if(Le.side===Ne&&be.layers.test(ot.layers)){let un=Le.side;Le.side=je,Le.needsUpdate=!0,Ft(be,it,ot,Kt,Le,ge),Le.side=un,Le.needsUpdate=!0,fe=!0}}fe===!0&&(kt.updateMultisampleRenderTarget(vt),kt.updateRenderTargetMipmap(vt))}w.setRenderTarget(Vt,Ot,jt),w.setClearColor($,O),Jt!==void 0&&(ot.viewport=Jt),w.toneMapping=ne}function Gt(I,j,it){let ot=j.isScene===!0?j.overrideMaterial:null;for(let tt=0,vt=I.length;tt<vt;tt++){let Lt=I[tt],Vt=Lt.object,Ot=Lt.geometry,jt=Lt.group,ne=Lt.material;ne.allowOverride===!0&&ot!==null&&(ne=ot),Vt.layers.test(it.layers)&&Ft(Vt,j,it,Ot,ne,jt)}}function Ft(I,j,it,ot,tt,vt){I.onBeforeRender(w,j,it,ot,tt,vt),I.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),tt.onBeforeRender(w,j,it,ot,I,vt),tt.transparent===!0&&tt.side===Ne&&tt.forceSinglePass===!1?(tt.side=je,tt.needsUpdate=!0,w.renderBufferDirect(it,j,ot,tt,I,vt),tt.side=Pn,tt.needsUpdate=!0,w.renderBufferDirect(it,j,ot,tt,I,vt),tt.side=Ne):w.renderBufferDirect(it,j,ot,tt,I,vt),I.onAfterRender(w,j,it,ot,tt,vt)}function ie(I,j,it){j.isScene!==!0&&(j=Dt);let ot=Rt.get(I),tt=f.state.lights,vt=f.state.shadowsArray,Lt=tt.state.version,Vt=Z.getParameters(I,tt.state,vt,j,it),Ot=Z.getProgramCacheKey(Vt),jt=ot.programs;ot.environment=I.isMeshStandardMaterial?j.environment:null,ot.fog=j.fog,ot.envMap=(I.isMeshStandardMaterial?wt:he).get(I.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&I.envMap===null?j.environmentRotation:I.envMapRotation,jt===void 0&&(I.addEventListener("dispose",W),jt=new Map,ot.programs=jt);let ne=jt.get(Ot);if(ne!==void 0){if(ot.currentProgram===ne&&ot.lightsStateVersion===Lt)return _e(I,Vt),ne}else Vt.uniforms=Z.getUniforms(I),I.onBeforeCompile(Vt,w),ne=Z.acquireProgram(Vt,Ot),jt.set(Ot,ne),ot.uniforms=Vt.uniforms;let Jt=ot.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Jt.clippingPlanes=ft.uniform),_e(I,Vt),ot.needsLights=qt(I),ot.lightsStateVersion=Lt,ot.needsLights&&(Jt.ambientLightColor.value=tt.state.ambient,Jt.lightProbe.value=tt.state.probe,Jt.directionalLights.value=tt.state.directional,Jt.directionalLightShadows.value=tt.state.directionalShadow,Jt.spotLights.value=tt.state.spot,Jt.spotLightShadows.value=tt.state.spotShadow,Jt.rectAreaLights.value=tt.state.rectArea,Jt.ltc_1.value=tt.state.rectAreaLTC1,Jt.ltc_2.value=tt.state.rectAreaLTC2,Jt.pointLights.value=tt.state.point,Jt.pointLightShadows.value=tt.state.pointShadow,Jt.hemisphereLights.value=tt.state.hemi,Jt.directionalShadowMap.value=tt.state.directionalShadowMap,Jt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Jt.spotShadowMap.value=tt.state.spotShadowMap,Jt.spotLightMatrix.value=tt.state.spotLightMatrix,Jt.spotLightMap.value=tt.state.spotLightMap,Jt.pointShadowMap.value=tt.state.pointShadowMap,Jt.pointShadowMatrix.value=tt.state.pointShadowMatrix),ot.currentProgram=ne,ot.uniformsList=null,ne}function ae(I){if(I.uniformsList===null){let j=I.currentProgram.getUniforms();I.uniformsList=bs.seqWithValue(j.seq,I.uniforms)}return I.uniformsList}function _e(I,j){let it=Rt.get(I);it.outputColorSpace=j.outputColorSpace,it.batching=j.batching,it.batchingColor=j.batchingColor,it.instancing=j.instancing,it.instancingColor=j.instancingColor,it.instancingMorph=j.instancingMorph,it.skinning=j.skinning,it.morphTargets=j.morphTargets,it.morphNormals=j.morphNormals,it.morphColors=j.morphColors,it.morphTargetsCount=j.morphTargetsCount,it.numClippingPlanes=j.numClippingPlanes,it.numIntersection=j.numClipIntersection,it.vertexAlphas=j.vertexAlphas,it.vertexTangents=j.vertexTangents,it.toneMapping=j.toneMapping}function Pe(I,j,it,ot,tt){j.isScene!==!0&&(j=Dt),kt.resetTextureUnits();let vt=j.fog,Lt=ot.isMeshStandardMaterial?j.environment:null,Vt=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ii,Ot=(ot.isMeshStandardMaterial?wt:he).get(ot.envMap||Lt),jt=ot.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ne=!!it.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Jt=!!it.morphAttributes.position,fe=!!it.morphAttributes.normal,ye=!!it.morphAttributes.color,Be=ii;ot.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Be=w.toneMapping);let Ae=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,be=Ae!==void 0?Ae.length:0,Kt=Rt.get(ot),Le=f.state.lights;if(Yt===!0&&(ct===!0||I!==b)){let nn=I===b&&ot.id===S;ft.setState(ot,I,nn)}let ge=!1;ot.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Le.state.version||Kt.outputColorSpace!==Vt||tt.isBatchedMesh&&Kt.batching===!1||!tt.isBatchedMesh&&Kt.batching===!0||tt.isBatchedMesh&&Kt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Kt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Kt.instancing===!1||!tt.isInstancedMesh&&Kt.instancing===!0||tt.isSkinnedMesh&&Kt.skinning===!1||!tt.isSkinnedMesh&&Kt.skinning===!0||tt.isInstancedMesh&&Kt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Kt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Kt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Kt.instancingMorph===!1&&tt.morphTexture!==null||Kt.envMap!==Ot||ot.fog===!0&&Kt.fog!==vt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==ft.numPlanes||Kt.numIntersection!==ft.numIntersection)||Kt.vertexAlphas!==jt||Kt.vertexTangents!==ne||Kt.morphTargets!==Jt||Kt.morphNormals!==fe||Kt.morphColors!==ye||Kt.toneMapping!==Be||Kt.morphTargetsCount!==be)&&(ge=!0):(ge=!0,Kt.__version=ot.version);let un=Kt.currentProgram;ge===!0&&(un=ie(ot,j,tt));let Wi=!1,dn=!1,Rs=!1,De=un.getUniforms(),xn=Kt.uniforms;if(_t.useProgram(un.program)&&(Wi=!0,dn=!0,Rs=!0),ot.id!==S&&(S=ot.id,dn=!0),Wi||b!==I){_t.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),De.setValue(C,"projectionMatrix",I.projectionMatrix),De.setValue(C,"viewMatrix",I.matrixWorldInverse);let cn=De.map.cameraPosition;cn!==void 0&&cn.setValue(C,Mt.setFromMatrixPosition(I.matrixWorld)),yt.logarithmicDepthBuffer&&De.setValue(C,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&De.setValue(C,"isOrthographic",I.isOrthographicCamera===!0),b!==I&&(b=I,dn=!0,Rs=!0)}if(tt.isSkinnedMesh){De.setOptional(C,tt,"bindMatrix"),De.setOptional(C,tt,"bindMatrixInverse");let nn=tt.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),De.setValue(C,"boneTexture",nn.boneTexture,kt))}tt.isBatchedMesh&&(De.setOptional(C,tt,"batchingTexture"),De.setValue(C,"batchingTexture",tt._matricesTexture,kt),De.setOptional(C,tt,"batchingIdTexture"),De.setValue(C,"batchingIdTexture",tt._indirectTexture,kt),De.setOptional(C,tt,"batchingColorTexture"),tt._colorsTexture!==null&&De.setValue(C,"batchingColorTexture",tt._colorsTexture,kt));let vn=it.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&x.update(tt,it,un),(dn||Kt.receiveShadow!==tt.receiveShadow)&&(Kt.receiveShadow=tt.receiveShadow,De.setValue(C,"receiveShadow",tt.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(xn.envMap.value=Ot,xn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&j.environment!==null&&(xn.envMapIntensity.value=j.environmentIntensity),dn&&(De.setValue(C,"toneMappingExposure",w.toneMappingExposure),Kt.needsLights&&Ee(xn,Rs),vt&&ot.fog===!0&&lt.refreshFogUniforms(xn,vt),lt.refreshMaterialUniforms(xn,ot,q,dt,f.state.transmissionRenderTarget[I.id]),bs.upload(C,ae(Kt),xn,kt)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(bs.upload(C,ae(Kt),xn,kt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&De.setValue(C,"center",tt.center),De.setValue(C,"modelViewMatrix",tt.modelViewMatrix),De.setValue(C,"normalMatrix",tt.normalMatrix),De.setValue(C,"modelMatrix",tt.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){let nn=ot.uniformsGroups;for(let cn=0,_a=nn.length;cn<_a;cn++){let Mi=nn[cn];y.update(Mi,un),y.bind(Mi,un)}}return un}function Ee(I,j){I.ambientLightColor.needsUpdate=j,I.lightProbe.needsUpdate=j,I.directionalLights.needsUpdate=j,I.directionalLightShadows.needsUpdate=j,I.pointLights.needsUpdate=j,I.pointLightShadows.needsUpdate=j,I.spotLights.needsUpdate=j,I.spotLightShadows.needsUpdate=j,I.rectAreaLights.needsUpdate=j,I.hemisphereLights.needsUpdate=j}function qt(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(I,j,it){let ot=Rt.get(I);ot.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Rt.get(I.texture).__webglTexture=j,Rt.get(I.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:it,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,j){let it=Rt.get(I);it.__webglFramebuffer=j,it.__useDefaultFramebuffer=j===void 0};let Wt=C.createFramebuffer();this.setRenderTarget=function(I,j=0,it=0){G=I,D=j,U=it;let ot=!0,tt=null,vt=!1,Lt=!1;if(I){let Ot=Rt.get(I);if(Ot.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(C.FRAMEBUFFER,null),ot=!1;else if(Ot.__webglFramebuffer===void 0)kt.setupRenderTarget(I);else if(Ot.__hasExternalTextures)kt.rebindTextures(I,Rt.get(I.texture).__webglTexture,Rt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Jt=I.depthTexture;if(Ot.__boundDepthTexture!==Jt){if(Jt!==null&&Rt.has(Jt)&&(I.width!==Jt.image.width||I.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(I)}}let jt=I.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Lt=!0);let ne=Rt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ne[j])?tt=ne[j][it]:tt=ne[j],vt=!0):I.samples>0&&kt.useMultisampledRTT(I)===!1?tt=Rt.get(I).__webglMultisampledFramebuffer:Array.isArray(ne)?tt=ne[it]:tt=ne,H.copy(I.viewport),X.copy(I.scissor),J=I.scissorTest}else H.copy(Et).multiplyScalar(q).floor(),X.copy(Bt).multiplyScalar(q).floor(),J=gt;if(it!==0&&(tt=Wt),_t.bindFramebuffer(C.FRAMEBUFFER,tt)&&ot&&_t.drawBuffers(I,tt),_t.viewport(H),_t.scissor(X),_t.setScissorTest(J),vt){let Ot=Rt.get(I.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ot.__webglTexture,it)}else if(Lt){let Ot=j;for(let jt=0;jt<I.textures.length;jt++){let ne=Rt.get(I.textures[jt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+jt,ne.__webglTexture,it,Ot)}}else if(I!==null&&it!==0){let Ot=Rt.get(I.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ot.__webglTexture,it)}S=-1},this.readRenderTargetPixels=function(I,j,it,ot,tt,vt,Lt,Vt=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Rt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){_t.bindFramebuffer(C.FRAMEBUFFER,Ot);try{let jt=I.textures[Vt],ne=jt.format,Jt=jt.type;if(!yt.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=I.width-ot&&it>=0&&it<=I.height-tt&&(I.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Vt),C.readPixels(j,it,ot,tt,R.convert(ne),R.convert(Jt),vt))}finally{let jt=G!==null?Rt.get(G).__webglFramebuffer:null;_t.bindFramebuffer(C.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(I,j,it,ot,tt,vt,Lt,Vt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Rt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(j>=0&&j<=I.width-ot&&it>=0&&it<=I.height-tt){_t.bindFramebuffer(C.FRAMEBUFFER,Ot);let jt=I.textures[Vt],ne=jt.format,Jt=jt.type;if(!yt.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,fe),C.bufferData(C.PIXEL_PACK_BUFFER,vt.byteLength,C.STREAM_READ),I.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Vt),C.readPixels(j,it,ot,tt,R.convert(ne),R.convert(Jt),0);let ye=G!==null?Rt.get(G).__webglFramebuffer:null;_t.bindFramebuffer(C.FRAMEBUFFER,ye);let Be=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await jl(C,Be,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,fe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,vt),C.deleteBuffer(fe),C.deleteSync(Be),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,j=null,it=0){let ot=Math.pow(2,-it),tt=Math.floor(I.image.width*ot),vt=Math.floor(I.image.height*ot),Lt=j!==null?j.x:0,Vt=j!==null?j.y:0;kt.setTexture2D(I,0),C.copyTexSubImage2D(C.TEXTURE_2D,it,0,0,Lt,Vt,tt,vt),_t.unbindTexture()};let de=C.createFramebuffer(),Re=C.createFramebuffer();this.copyTextureToTexture=function(I,j,it=null,ot=null,tt=0,vt=null){vt===null&&(tt!==0?(cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=tt,tt=0):vt=0);let Lt,Vt,Ot,jt,ne,Jt,fe,ye,Be,Ae=I.isCompressedTexture?I.mipmaps[vt]:I.image;if(it!==null)Lt=it.max.x-it.min.x,Vt=it.max.y-it.min.y,Ot=it.isBox3?it.max.z-it.min.z:1,jt=it.min.x,ne=it.min.y,Jt=it.isBox3?it.min.z:0;else{let vn=Math.pow(2,-tt);Lt=Math.floor(Ae.width*vn),Vt=Math.floor(Ae.height*vn),I.isDataArrayTexture?Ot=Ae.depth:I.isData3DTexture?Ot=Math.floor(Ae.depth*vn):Ot=1,jt=0,ne=0,Jt=0}ot!==null?(fe=ot.x,ye=ot.y,Be=ot.z):(fe=0,ye=0,Be=0);let be=R.convert(j.format),Kt=R.convert(j.type),Le;j.isData3DTexture?(kt.setTexture3D(j,0),Le=C.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(kt.setTexture2DArray(j,0),Le=C.TEXTURE_2D_ARRAY):(kt.setTexture2D(j,0),Le=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,j.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,j.unpackAlignment);let ge=C.getParameter(C.UNPACK_ROW_LENGTH),un=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Wi=C.getParameter(C.UNPACK_SKIP_PIXELS),dn=C.getParameter(C.UNPACK_SKIP_ROWS),Rs=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ae.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ae.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,jt),C.pixelStorei(C.UNPACK_SKIP_ROWS,ne),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Jt);let De=I.isDataArrayTexture||I.isData3DTexture,xn=j.isDataArrayTexture||j.isData3DTexture;if(I.isDepthTexture){let vn=Rt.get(I),nn=Rt.get(j),cn=Rt.get(vn.__renderTarget),_a=Rt.get(nn.__renderTarget);_t.bindFramebuffer(C.READ_FRAMEBUFFER,cn.__webglFramebuffer),_t.bindFramebuffer(C.DRAW_FRAMEBUFFER,_a.__webglFramebuffer);for(let Mi=0;Mi<Ot;Mi++)De&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Rt.get(I).__webglTexture,tt,Jt+Mi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Rt.get(j).__webglTexture,vt,Be+Mi)),C.blitFramebuffer(jt,ne,Lt,Vt,fe,ye,Lt,Vt,C.DEPTH_BUFFER_BIT,C.NEAREST);_t.bindFramebuffer(C.READ_FRAMEBUFFER,null),_t.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(tt!==0||I.isRenderTargetTexture||Rt.has(I)){let vn=Rt.get(I),nn=Rt.get(j);_t.bindFramebuffer(C.READ_FRAMEBUFFER,de),_t.bindFramebuffer(C.DRAW_FRAMEBUFFER,Re);for(let cn=0;cn<Ot;cn++)De?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,vn.__webglTexture,tt,Jt+cn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,vn.__webglTexture,tt),xn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nn.__webglTexture,vt,Be+cn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,nn.__webglTexture,vt),tt!==0?C.blitFramebuffer(jt,ne,Lt,Vt,fe,ye,Lt,Vt,C.COLOR_BUFFER_BIT,C.NEAREST):xn?C.copyTexSubImage3D(Le,vt,fe,ye,Be+cn,jt,ne,Lt,Vt):C.copyTexSubImage2D(Le,vt,fe,ye,jt,ne,Lt,Vt);_t.bindFramebuffer(C.READ_FRAMEBUFFER,null),_t.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else xn?I.isDataTexture||I.isData3DTexture?C.texSubImage3D(Le,vt,fe,ye,Be,Lt,Vt,Ot,be,Kt,Ae.data):j.isCompressedArrayTexture?C.compressedTexSubImage3D(Le,vt,fe,ye,Be,Lt,Vt,Ot,be,Ae.data):C.texSubImage3D(Le,vt,fe,ye,Be,Lt,Vt,Ot,be,Kt,Ae):I.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,vt,fe,ye,Lt,Vt,be,Kt,Ae.data):I.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,vt,fe,ye,Ae.width,Ae.height,be,Ae.data):C.texSubImage2D(C.TEXTURE_2D,vt,fe,ye,Lt,Vt,be,Kt,Ae);C.pixelStorei(C.UNPACK_ROW_LENGTH,ge),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,un),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Wi),C.pixelStorei(C.UNPACK_SKIP_ROWS,dn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Rs),vt===0&&j.generateMipmaps&&C.generateMipmap(Le),_t.unbindTexture()},this.initRenderTarget=function(I){Rt.get(I).__webglFramebuffer===void 0&&kt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?kt.setTextureCube(I,0):I.isData3DTexture?kt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?kt.setTexture2DArray(I,0):kt.setTexture2D(I,0),_t.unbindTexture()},this.resetState=function(){D=0,U=0,G=null,_t.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var Ie=(i,t)=>.09*Math.sin(i*.075)+.1*Math.sin(t*.18)+Math.max(0,Math.abs(t)-37)*.012*(1+Math.sin(i*.025+t*.1)),Ze=i=>3.5*Math.sin(i/55)+2.1*Math.sin(i/26),Bn=i=>14.9+1.4*Math.sin(i/38+.7),_r=-.73,Ge=-4,Ts=21.8,ws=10.6,hn=i=>{let t=Math.min(1,Math.abs(i-Ze(Ge))/Ts);return .13+5.65*Math.pow(1-t*t,1.28)},xr={west:-164,east:178,south:75,north:-74};function Es(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}var We=[{name:"\u90CA\u91CE",area:"\u57CE\u5916\u7530\u7574",x:-126,z:25,look:[-112,1.9,18],sound:"field",note:"\u5C0F\u8DEF\u7A7F\u8FC7\u9EA6\u5730\u3002\u7530\u57C2\u90A3\u5934\u6709\u4EBA\u6311\u62C5\uFF0C\u6CBF\u6CB3\u518D\u8D70\u4E00\u6BB5\u5C31\u662F\u8D27\u6808\u3002",path:[[-115,23],[-102,21.2],[-90,20]]},{name:"\u6C74\u6CB3",area:"\u6CB3\u5CB8\u7EA4\u9053",x:-79,z:18,look:[-53,1,4],sound:"river",note:"\u5DE1\u5352\u6CBF\u7740\u7EA4\u9053\u8D70\u8FC7\uFF0C\u6CB3\u4E2D\u8D27\u8239\u5F80\u6765\u3002\u9760\u8FD1\u8679\u6865\u65F6\uFF0C\u8239\u5DE5\u628A\u6845\u6746\u653E\u4F4E\u3002",path:[[-68,18],[-55,18],[-46,19]]},{name:"\u7801\u5934",area:"\u6CB3\u5CB8\u8D27\u6808",x:-36,z:18,look:[-27,1.1,12],sound:"dock",note:"\u811A\u592B\u6311\u8D27\u8FC7\u8DF3\u677F\uFF0C\u5DE1\u5352\u6CBF\u7740\u8D27\u6808\u5916\u4FA7\u5F80\u8FD4\u3002\u8F66\u9A6C\u4ECE\u5378\u8D27\u7684\u4EBA\u7FA4\u65C1\u7ECF\u8FC7\u3002",path:[[-27,20],[-16,21],[-7,23],[-4,22]]},{name:"\u8679\u6865",area:"\u6C74\u6CB3\u6E21\u53E3",x:-4,z:-.1,look:[-3.5,5.8,-11],sound:"market",note:"\u6865\u680F\u8FB9\u6446\u7740\u679C\u5B50\u3001\u80E1\u997C\u548C\u8336\u6C34\u3002\u7AD9\u5728\u644A\u95F4\u5F80\u6CB3\u91CC\u671B\uFF0C\u8FD8\u80FD\u770B\u89C1\u8D27\u8239\u8FC7\u6865\u3002",path:[[-4,-10],[-4,-22],[3,-23],[14,-23]]},{name:"\u8857\u5E02",area:"\u57CE\u5916\u5927\u8857",x:23,z:-24,look:[42,1.3,-24],sound:"market",note:"\u5E03\u5377\u548C\u679C\u5B50\u6446\u5728\u68DA\u4E0B\uFF0C\u4E70\u5BA2\u5728\u644A\u524D\u6311\u62E3\u3002\u8D76\u8DEF\u7684\u9A91\u624B\u6CBF\u8857\u5FC3\u7ECF\u8FC7\u3002",path:[[32,-24],[43,-25],[46,-26.2]]},{name:"\u5546\u94FA",area:"\u6CBF\u8857\u8D27\u94FA",x:48,z:-30.7,look:[49,1.35,-34.6],sound:"shop",note:"\u5E97\u4E3B\u5728\u67DC\u540E\u62DB\u547C\u3002\u4E70\u5BA2\u51D1\u8FD1\u770B\u9752\u74F7\uFF0C\u6311\u597D\u4FBF\u8F6C\u8EAB\u51FA\u95E8\u3002",path:[[48,-27],[53,-24],[64,-24],[68,-27]]},{name:"\u9152\u697C",area:"\u4E34\u8857\u9152\u8086",x:69,z:-31,look:[65.7,1.46,-36],sound:"shop",note:"\u8FDB\u95E8\u5411\u53F3\uFF0C\u5FAA\u300C\u767B\u6A13\u300D\u6728\u724C\u4E0A\u4E8C\u697C\u3002\u6CBF\u8857\u7A97\u6237\u655E\u5F00\uFF0C\u5750\u5728\u7A97\u8FB9\u5C31\u80FD\u770B\u89C1\u8857\u5E02\u3002",path:[[69,-27],[74,-24],[82,-24],[90,-25]]},{name:"\u57CE\u95E8",area:"\u5165\u57CE\u95E8\u9053",x:90.9,z:-25,look:[105,5.6,-25],sound:"market",note:"\u7A7F\u8FC7\u95E8\u6D1E\u540E\uFF0C\u8F6C\u5411\u4E24\u4FA7\u5899\u6839\u627E\u300C\u767B\u57CE\u300D\u6728\u724C\u3002\u6CBF\u7A84\u9636\u4E0A\u53BB\uFF0C\u5728\u5E73\u53F0\u6298\u8FD4\u4FBF\u53EF\u767B\u57CE\u3002",path:[[105,-25],[115,-25],[124,-25],[129,-29],[129,-35]]},{name:"\u57CE\u5185\u8857\u5DF7",area:"\u574A\u5DF7\u4EBA\u5BB6",x:129,z:-45,look:[130,1.6,-59],sound:"lane",note:"\u5C4B\u6A90\u4E0B\u667E\u7740\u5E03\uFF0C\u5DE1\u5352\u6CBF\u574A\u5DF7\u8D70\u8FC7\u3002\u7A84\u5DF7\u4E24\u5934\u90FD\u6709\u901A\u5F80\u8857\u5E02\u7684\u5C0F\u8DEF\u3002",path:[]}],Fc=[{position:[36,8.4,24.3],look:[-11,3.2,7.5]},{position:[-40,9,26],look:[8,3,-11]},{position:[5,23,-12],look:[48,0,-25]}];function Rh(){let i=Es(5905),t=256,e=new Float32Array(4096).map(()=>i()),n=re.lerp;function s(u,h){let d=Math.floor(u),p=Math.floor(h),g=u-d,M=h-p;g*=g*(3-2*g),M*=M*(3-2*M);let m=(f,A)=>e[(A%64+64)%64*64+(f%64+64)%64];return n(n(m(d,p),m(d+1,p),g),n(m(d,p+1),m(d+1,p+1),g),M)}let r=(u,h)=>{let d=document.createElement("canvas");d.width=d.height=t;let p=d.getContext("2d"),g=p.createImageData(t,t);for(let m=0;m<t;m++)for(let f=0;f<t;f++){let A=f/t,L=m/t,w=s(A*8,L*8),B=s(A*64,L*64),D=1+(w-.5)*.22+(B-.5)*.15+(i()-.5)*.09;if(u==="wood"){let G=s(A*4,L*4)*2.1+Math.sin(L*7+A*3)*.5,S=Math.pow(.5+.5*Math.sin(A*400+G*7),8);D+=(s(A*56,L*4)-.5)*.29-S*.13}if(u==="cloth"&&(D+=(f%3===0?-.054:.024)+(m%3===0?-.055:.024)),u==="stone"||u==="pave"){let G=Math.floor(L*6),S=u==="pave"?.045:.013,b=(A*5+G*.5+S*Math.sin(m*.17))%1,H=L*6%1;b<.037||H<.062?D*=u==="pave"?.78:.64:D+=(s(Math.floor(A*5+G*.5)+9,G+11)-.5)*.19}if(u==="tile"){let G=A*8%1,S=L*6%1,b=Math.pow(Math.sin(Math.PI*G),.6);D=D*(.72+b*.3)-(S<.07?.19:0),G<.065&&(D+=.19)}u==="grass"&&(D+=(s(A*18,L*32)-.5)*.26);let U=(m*t+f)*4;for(let G=0;G<3;G++)g.data[U+G]=h[G]*D;g.data[U+3]=255}p.putImageData(g,0,0);let M=new Gn(d);return M.colorSpace=ze,M.wrapS=M.wrapT=Ri,M.anisotropy=8,M},o={};for(let[u,h]of Object.entries({oldwood:["wood",[161,121,85]],timber:["wood",[133,96,67]],beam:["wood",[106,77,55]],plaster:["plain",[207,180,134]],wall:["plain",[189,167,133]],stone:["stone",[155,150,131]],tile:["tile",[123,121,113]],tileDark:["tile",[112,111,104]],brick:["stone",[135,129,110]],linen:["cloth",[224,197,142]],sage:["cloth",[144,153,118]],rust:["cloth",[160,109,75]],straw:["cloth",[189,155,92]],soil:["plain",[159,138,98]],path:["plain",[174,151,112]],pave:["pave",[166,154,128]],grass:["grass",[119,132,66]]}))o[u]=r(...h);let a=document.createElement("canvas");a.width=a.height=128;let l=a.getContext("2d"),c=l.createImageData(128,128);for(let u=0;u<128;u++)for(let h=0;h<128;h++){let d=2*Math.PI/128,p=h*d*7+u*d*2,g=h*d*3-u*d*8+Math.sin(h*d*2),M=h*d*9+u*d*11,m=(u*128+h)*4;c.data[m]=127+32*Math.cos(p)+23*Math.cos(g)+9*Math.sin(M),c.data[m+1]=127+17*Math.cos(p)-33*Math.cos(g)+13*Math.sin(M),c.data[m+2]=244,c.data[m+3]=255}return l.putImageData(c,0,0),o.waterNormal=new Gn(a),o.waterNormal.wrapS=o.waterNormal.wrapT=Ri,o}var xt=(i,t,e)=>new K(i,t,e),pg=xt(0,1,0),Bc=new Hn(1,1,1),Fe=new mn(1,1,1,9),As=new mn(.7,1,1,10),mg=new mn(1,1,1,7),vr=new er(1,0),gg=new Di(1);function wn(i,t={}){return new Un({map:i,roughness:.91,...t})}function Ih(i,t,e){let n=Es(1119),s={};for(let x of["oldwood","timber","beam","plaster","wall","stone","tile","tileDark","brick","linen","sage","rust","straw","soil","path","pave","grass"])s[x]=wn(t[x]);Object.assign(s,{bark:wn(t.beam,{color:9210728}),lacquer:wn(t.timber,{color:11758416}),black:wn(null,{color:3220762}),ceramic:wn(null,{color:10662806,roughness:.34,metalness:.03}),paleCeramic:wn(null,{color:13220237,roughness:.49}),iron:wn(null,{color:5588789,roughness:.59,metalness:.33}),green:wn(null,{color:8423756}),foliage:wn(null,{vertexColors:!0,side:Ne,roughness:1})});let r=s.linen.clone();r.side=Ne,r.onBeforeCompile=x=>{x.uniforms.windTime=e,x.vertexShader=`uniform float windTime;
`+x.vertexShader,x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.y += .065 * sin(windTime * 1.8 + position.x * 2.4 + position.z * 3.0);`)},s.awning=r,s.foliage.onBeforeCompile=x=>{x.uniforms.windTime=e,x.vertexShader=`uniform float windTime;
`+x.vertexShader,x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x += .060 * sin(windTime * 1.40 + position.z * .28 + position.y * 1.32) * min(position.y,.9);`)};let o=document.createElement("canvas");o.width=o.height=128;let a=o.getContext("2d"),l=Es(883),c=["#738640","#9aa65b","#7e914b","#637742","#879750","#a1aa63","#5c6d38"];for(let x=0;x<520;x++){let T=l()*Math.PI*2,v=Math.sqrt(l())*.95,R=64+Math.cos(T)*v*59,P=64+Math.sin(T)*v*56,y=2.1+l()*4.2;a.fillStyle=c[Math.floor(l()*c.length)],a.beginPath(),a.ellipse(R,P,y,y*(.25+l()*.29),T-l()*1.4,0,Math.PI*2),a.fill()}let u=new Gn(o);u.colorSpace=ze,u.anisotropy=4,s.bough=wn(u,{alphaTest:.45,side:Ne}),s.bough.onBeforeCompile=s.foliage.onBeforeCompile;let h=new Map,d=new Map,p=[],g=[],M=[],m=[],f=[],A=[],L=[],w=[],B=[],D=[],U,G=new Map,S=new ke,b=()=>.8+n()*.23,H=new St;function X(x,T,v,R,P=0,y=b()){let _=T+"/"+x.id;h.has(_)||h.set(_,{geo:x,mat:T,entries:[]}),S.position.copy(v),S.scale.copy(R),typeof P=="number"?S.rotation.set(0,P,0):S.quaternion.copy(P),S.updateMatrix(),h.get(_).entries.push([S.matrix.clone(),y])}function J(x,T,v,R,P,y,_,N=0,V){X(Bc,x,xt(T,v,R),xt(P,y,_),N,V)}function $(x,T,v,R,P=R,y=Bc){let _=v.clone().sub(T),N=new rn().setFromUnitVectors(pg,_.clone().normalize());X(y,x,T.clone().lerp(v,.5),xt(R,_.length(),P),N)}function O(x,T,v,R,P,y=[0,0,1,1],_=[1,1,1]){d.has(x)||d.set(x,{points:[],uv:[],colors:[]});let N=d.get(x);for(let Y of[T,v,R,T,R,P])N.points.push(Y.x,Y.y,Y.z),N.colors.push(..._);let[V,k,F,W]=y;N.uv.push(V,k,F,k,F,W,V,k,F,W,V,W)}function Q(x,T,v,R){p.push({x0:x-v/2,x1:x+v/2,z0:T-R/2,z1:T+R/2})}function dt(x,T,v,R){let P=Math.cos(R),y=Math.sin(R);return(_,N,V)=>xt(x+_*P+V*y,T+N,v-_*y+V*P)}function q(x,T,v,R,P,y,_,N,V,k){let F=x(R,P,y);J(v,F.x,F.y,F.z,_,N,V,T,k)}function ut(x,T,v,R,P){let y=x(T-R/2,0,v-P/2),_=x(T+R/2,0,v+P/2);Q((y.x+_.x)/2,(y.z+_.z)/2,Math.abs(y.x-_.x),Math.abs(y.z-_.z))}function pt(x,T,v,R,P){let y=x(T-R/2,0,v-P/2),_=x(T+R/2,0,v+P/2);D.push({x0:Math.min(y.x,_.x),x1:Math.max(y.x,_.x),z0:Math.min(y.z,_.z),z1:Math.max(y.z,_.z)})}function Et(x,T,v,R,P,y,_){L.push({seller:x(v,0,R),buyer:x(v,0,P),entry:x(v+.69,0,y),yaw:T,goods:_})}function Bt(x,T){let v=x+"/"+T;if(G.has(v))return G.get(v);let R=document.createElement("canvas");R.width=T?96:200,R.height=T?200:74;let P=R.getContext("2d");P.fillStyle=T?"#bca877":"#5b3726",P.fillRect(0,0,R.width,R.height),P.strokeStyle=T?"#6a4129":"#a9945e",P.lineWidth=4,P.strokeRect(7,7,R.width-14,R.height-14),P.fillStyle=T?"#342617":"#ece0b2",P.textAlign="center",P.textBaseline="middle",P.font="bold "+(T?61:47)+'px "Songti SC", SimSun, serif',T?[...x].forEach((N,V)=>P.fillText(N,48,55+V*76)):P.fillText(x,R.width/2,R.height/2+1);let y=new Gn(R);y.colorSpace=ze;let _=wn(y,{side:Ne});return G.set(v,_),_}function gt(x,T,v,R,P,y,_,N,V=!1){let k=new Se(new Sn(_,N),Bt(v,V));k.position.copy(x(R,P,y)),k.rotation.y=T,i.add(k)}function te(){for(let x of[-1,1]){let T=v=>Ze(v)+x*Bn(v);for(let v=-267;v<273;v+=3){let R=v+3,P=x>0?v<-88||v>70:v<-46||v>182;for(let N=0;N<20;N++){let k=(rt,bt)=>Ie(rt,bt)-.04,F=T(v)+x*N*4.15,W=T(v)+x*(N+1)*4.15,Y=T(R)+x*N*4.15,nt=T(R)+x*(N+1)*4.15,ht=.91+.07*Math.sin(v*.037+N*.59)+.09*n();O(P?"grass":"soil",xt(v,k(v,F),F),xt(v,k(v,W),W),xt(R,k(R,nt),nt),xt(R,k(R,Y),Y),[v/5,F/5,R/5,W/5],[ht,ht,ht])}let y=T(v),_=T(R);O("soil",xt(v,Ie(v,y),y),xt(R,Ie(R,_),_),xt(R,-1.61,_-x*1.45),xt(v,-1.61,y-x*1.45),[v/4,0,R/4,1])}}for(let x=0;x<850;x++){let T=-179+n()*367,v=n()<.55?1:-1,P=Ze(T)+v*Bn(T)+v*(n()*.64-.31);if(T>-11&&T<4||T>-47&&T<-20&&v===1)continue;let y=.17+n()*.62;X(vr,"stone",xt(T,Ie(T,P)-y*.25,P),xt(y,.22+y*.55,y*.57),n()*6.28)}}function Yt(x,T,v="path"){for(let R=1;R<x.length;R++){let[P,y]=x[R-1],[_,N]=x[R],V=_-P,k=N-y,F=Math.hypot(V,k),W=Math.ceil(F/1.75),Y=-k/F,nt=V/F,ht=(rt,bt)=>{let Ht=1+.036*Math.sin((P+V*rt)*1.67+(y+k*rt)*.79),It=P+V*rt+Y*bt*Ht,$t=y+k*rt+nt*bt*Ht;return xt(It,Ie(It,$t)+(v==="pave"?.044:.023),$t)};for(let rt=0;rt<W;rt++){let bt=F/W/4.1;O(v,ht(rt/W,-T/2),ht(rt/W,T/2),ht((rt+1)/W,T/2),ht((rt+1)/W,-T/2),[0,rt*bt,T/4.4,(rt+1)*bt])}}}function ct(x,T,v,R,P,y="tile",_=!0){let N=T/2,V=v/2,k=(F,W,Y)=>{let nt=.29*Math.pow(Math.min(1,Math.abs(F/N)),5.4);return x(F,R+P*Math.pow(1-W,1.37)+nt*(.46+.89*W*W),Y*W*V)};for(let F of[-1,1]){for(let Y=0;Y<8;Y++)for(let nt=0;nt<12;nt++){let ht=-N+T*nt/12,rt=-N+T*(nt+1)/12;O(y,k(ht,Y/8,F),k(rt,Y/8,F),k(rt,(Y+1)/8,F),k(ht,(Y+1)/8,F),[ht/2.2,Y*v/(8*3.5),rt/2.2,(Y+1)*v/(8*3.5)])}for(let Y=0;Y<12;Y++){let nt=k(-N+T*Y/12,1,F),ht=k(-N+T*(Y+1)/12,1,F);$("beam",nt,ht,.16,.19)}if(_){for(let Y=0;Y<Math.floor(T/.28);Y++){let nt=-N+.12+Y*.28,ht=k(nt,.94,F),rt=k(nt,1,F);if(rt.z+=F*.025,ht.y+=.024,rt.y+=.02,$(y,ht,rt,.074,.074,mg),Y%2===0){let bt=k(nt,1,F);$("timber",bt.clone().add(xt(0,-.1,0)),k(nt,.82,F).add(xt(0,-.23,0)),.084,.092)}}for(let Y of[-N,N])for(let nt=0;nt<8;nt++)$("beam",k(Y,nt/8,F),k(Y,(nt+1)/8,F),.14,.11)}}for(let F=0;F<12;F++){let W=k(-N+T*F/12,0,1),Y=k(-N+T*(F+1)/12,0,1);W.y+=.073,Y.y+=.073,$(y,W,Y,.175,.155,Fe)}for(let F of[-1,1]){let W=k(F*N,0,1),Y=k(F*N,0,1);Y.x+=F*.21,Y.y+=.23,$(y,W,Y,.13,.13,Fe)}}function at(x,T,v,R,P,y,_){let N=(V,k,F,W,Y,nt,ht)=>q(x,T,V,k,F,W,Y,nt,ht);N("black",v,R,P,y,_,.075);for(let V of[-1,1])N("oldwood",v+V*y/2,R,P+.042,.095,_+.1,.1),N("oldwood",v,R+V*_/2,P+.042,y,.09,.1);for(let V=1;V<7;V++)N("timber",v-y/2+V*y/7,R,P+.051,.041,_,.058);for(let V=1;V<5;V++)N("timber",v,R-_/2+V*_/5,P+.049,y,.036,.058)}function Mt(x,T,v,R=.5,P="ceramic"){X(As,P,xt(x,T+R*.24,v),xt(R*.33,R*.47,R*.33),n()*6),X(Fe,P,xt(x,T+R*.49,v),xt(R*.24,R*.13,R*.24),0),X(Fe,"black",xt(x,T+R*.562,v),xt(R*.15,.012,R*.15),0)}function Xt(x,T,v,R=.73){J("oldwood",x,T+R*.38,v,R,R*.76,R*.77);for(let P of[-1,1])J("beam",x+P*R*.31,T+R*.4,v,R*.1,R*.82,R*.81);J("timber",x,T+R*.78,v,R*1.02,.057,R*.79)}function Dt(x,T,v,R=.74){X(As,"straw",xt(x,T+R*.26,v),xt(R*.43,R*.52,R*.43),Math.PI),X(Fe,"oldwood",xt(x,T+R*.56,v),xt(R*.45,.053,R*.45)),X(Fe,"straw",xt(x,T+R*.583,v),xt(R*.37,.039,R*.37))}function Qt(x,T,v,R,P,y){let V=(k,F)=>x((k/10-.5)*v,P-.54*(F/5)-.22*Math.sin(Math.PI*F/5)+.035*Math.sin(k*1.8)*F/5,y+F/5*R);for(let k=0;k<5;k++)for(let F=0;F<10;F++)O("awning",V(F,k),V(F+1,k),V(F+1,k+1),V(F,k+1),[F/5,k/4,(F+1)/5,(k+1)/4]);for(let k=0;k<10;k++){let F=V(k,5),W=V(k+1,5);O("awning",F,W,W.clone().add(xt(0,-.18,0)),F.clone().add(xt(0,-.18,0)))}for(let k of[-.47,.47]){let F=x(k*v,0,y+R-.1),W=x(k*v,P-.51,y+R-.1);$("oldwood",F,W,.046,.046,Fe),$("timber",W,x(k*v,P,y-.1),.047,.047,Fe),ut(x,k*v,y+R-.1,.09,.09)}$("timber",V(0,5),V(10,5),.044,.044,Fe)}function we(x,T,v,R,P,y,_){let N=R/2,V=-N,k=-v/2+.13,F=v/2-.13,W=2.8,Y=-2.86,nt=F-1.42,ht=3.3,rt=.225,bt=17,Ht=(ht-rt)/bt,It=(W-Y)/bt,$t=(qt,Wt,de,Re)=>{let I=x(qt,0,de),j=x(Wt,0,Re);return{x0:I.x,x1:j.x,z0:I.z,z1:j.z}},zt=[];function Zt(qt,Wt,de,Re){zt.push($t(qt-de/2,qt+de/2,Wt-Re/2,Wt+Re/2))}function oe(qt,Wt,de,Re){for(let I=de;I<Re;I+=.25){let j=Math.min(.25,Re-I);T("oldwood",(qt+Wt)/2,ht-.09,I+j/2,Wt-qt,.18,j)}}oe(k,nt,V,N),oe(nt,F,V,Y),oe(nt,F,W,N);let Gt={...$t(nt,F,Y,W),from:x(0,0,W).z,run:It,rise:Ht,base:x(0,rt,0).y,steps:bt},Ft=x(0,ht,0).y;A.push({...$t(k,F,V,N),stair:Gt,y:Ft,obstacles:zt,label:y});let ie=(nt+F)/2;for(let qt=0;qt<bt;qt++){let Wt=W-(qt+.5)*It,de=rt+(qt+1)*Ht;T("timber",ie,(de+rt)/2,Wt,1.42,de-rt,It+.006),T("oldwood",ie,de-.038,Wt,1.48,.075,It+.034)}for(let qt of[nt+.045,F-.045]){$("oldwood",x(qt,rt+.87,W),x(qt,ht+.87,Y),.075,.082);for(let Wt=0;Wt<=bt;Wt+=4){let de=rt+Wt*Ht;T("timber",qt,de+.39,W-Wt*It,.067,.84,.067)}}for(let[qt,Wt,de,Re]of[[nt,(Y+W)/2,.1,W-Y],[ie,W,1.42,.1],[0,N-.11,v-.22,.12]]){T("oldwood",qt,ht+.79,Wt,de,.095,Re),Zt(qt,Wt,de,Re);let I=de>Re,j=I?de:Re;for(let it=-j/2+.12;it<j/2;it+=.47)T("timber",qt+(I?it:0),ht+.4,Wt+(I?0:it),.065,.76,.07)}for(let qt=0;qt<P;qt++){let Wt=(qt/P-.5)*v+.16;X(Bc,"timber",x(Wt,ht+1.5,N-.24),xt(.075,1.24,.48),0,.91);for(let de of[1.09,1.34,1.59,1.84])T("oldwood",Wt-.025,ht+de,N-.24,.078,.043,.49)}let ae=_?[[-3.75,N-1.73],[.05,N-1.73],[-3.75,1.03],[.05,1.03],[-3.75,-2.63],[.05,-2.63]]:[[-3.1,N-1.28],[-.48,N-1.28],[-3.1,1.27],[-.48,.65],[-3.1,-1.63]],_e=_?[[-1,0],[1,0],[0,-1],[0,1]]:[[0,-.64],[0,.64]],Pe=_?"lacquer":"oldwood";for(let[qt,Wt]of ae){if(_)X(Fe,"oldwood",x(qt,ht+.83,Wt),xt(.73,.12,.73),0,.95),X(Fe,"lacquer",x(qt,ht+.39,Wt),xt(.15,.77,.15),0,.89),X(Fe,"paleCeramic",x(qt,ht+.902,Wt),xt(.22,.039,.22),0,.92);else{T("oldwood",qt,ht+.69,Wt,.83,.09,.61);for(let Re of[-.3,.3])for(let I of[-.21,.21])T("timber",qt+Re,ht+.32,Wt+I,.07,.66,.07);let de=x(qt,ht+.74,Wt);Mt(de.x,de.y,de.z,.29,"paleCeramic")}Zt(qt,Wt,_?1.46:.83,_?1.46:.61);for(let[de,Re]of _e){let I=qt+de,j=Wt+Re;T(Pe,I,ht+.4,j,.31,.08,.3),T("timber",I,ht+.18,j,.19,.35,.19),Zt(I,j,.31,.3);let it=x(qt+de*.4,ht+(_?.9:.74),Wt+Re*.4);Mt(it.x,it.y,it.z,.16,"paleCeramic"),f.push({role:"diner",at:x(I,0,j),yaw:Math.atan2(-de,-Re),level:Ft})}}if(_){T("lacquer",-2.63,ht+.5,V+.41,4.8,.9,.55),Zt(-2.63,V+.41,4.8,.55);for(let qt=0;qt<5;qt++){let Wt=x(-4.52+qt*.89,ht+.95,V+.38);Mt(Wt.x,Wt.y,Wt.z,.51,"ceramic")}}else{T("oldwood",-1.69,ht+.45,V+.41,3.52,.82,.57),Zt(-1.69,V+.41,3.52,.57);for(let qt=0;qt<5;qt++){let Wt=x(-3.1+qt*.7,ht+.87,V+.39);Mt(Wt.x,Wt.y,Wt.z,.35,"paleCeramic")}for(let qt of[-4.04,-2.61,-1.18]){T("sage",qt,ht+1.74,V+.18,1.29,.89,.045);for(let Wt=-4;Wt<=4;Wt++)T("straw",qt+Wt*.135,ht+1.74,V+.212,.028,.86,.026);for(let Wt of[1.31,2.17])T("timber",qt,ht+Wt,V+.21,1.32,.06,.061)}}let Ee=[nt-.57,_?-1.84:-1.8];for(let[qt,Wt]of Ee.entries())f.push({role:"server",points:[x(Wt,0,N-1.05),x(Wt,0,Y-.75)],level:Ft,tea:!_,routeOffset:qt*.48});T("beam",ie,2.45,W+.62,.69,.29,.078),gt(x,0,"\u767B\u6A13",ie,2.45,W+.67,.61,.25)}function C(x,T,v,R,{theta:P=0,floors:y=1,kind:_="home",label:N,simple:V=!1,roofKind:k="tile",loft:F=!1}={}){let W=Ie(x,T),Y=dt(x,W,T,P),nt=y===1?3.31:6.13,ht=R/2,rt=-R/2,bt=["store","tavern","market"].includes(_),Ht=!V,It=(zt,Zt,oe,Gt,Ft,ie,ae,_e)=>q(Y,P,zt,Zt,oe,Gt,Ft,ie,ae,_e);if(It("stone",0,.045,0,v+.05,.24,R+.1),!bt)It("plaster",0,nt/2,0,v,nt,R),ut(Y,0,0,v,R);else{It("plaster",0,nt/2,rt,v,nt,.23),ut(Y,0,rt,v,.28);for(let oe of[-1,1])It("plaster",oe*v/2,nt/2,0,.2,nt,R),ut(Y,oe*v/2,0,.24,R);It("beam",0,nt-.17,0,v,.32,R);for(let oe=-R/2+.12;oe<R/2;oe+=.28)It("oldwood",0,.181,oe,v-.25,.08,.24);y===2&&!F&&It("beam",0,3.2,0,v,.2,R);let zt=Y(0,W+.23,ht),Zt=P===0||P===Math.PI;g.push({x0:zt.x-(Zt?v:R)/2,x1:zt.x+(Zt?v:R)/2,z0:T-(Zt?R:v)/2,z1:T+(Zt?R:v)/2,y:W+.225}),m.push({x,z:T,w:v,d:R,tavern:_==="tavern"})}let $t=Math.max(2,Math.round(v/2.1));for(let zt=0;zt<=$t;zt++){let Zt=(zt/$t-.5)*v;for(let oe of[ht+.024,rt-.025])if(It(y===2?"lacquer":"timber",Zt,nt/2,oe,.17,nt,.175),It("stone",Zt,.14,oe,.28,.21,.27),Ht){let Gt=zt===0?1:zt===$t?-1:1;$("timber",Y(Zt,nt-.7,oe),Y(Zt+Gt*.48,nt-.15,oe),.11,.12)}}for(let zt of[.75,3.02,nt-.2])(zt!==.75||!bt)&&It("timber",0,zt,ht+.075,v+.19,.14,.14);if(Ht){for(let zt of[-1,1]){It("timber",zt*(v/2+.035),nt-.24,0,.17,.19,R+.15);for(let Ft=1;Ft<Math.ceil(R/2);Ft++)It("timber",zt*(v/2+.025),nt/2,-R/2+Ft*2,.12,nt,.11);let Zt=Y(zt*(v/2-.01),nt-.15,-R/2+.08),oe=Y(zt*(v/2-.01),nt-.15,R/2-.08),Gt=Y(zt*(v/2-.01),nt+Math.min(v,R)*.3,0);O("plaster",Zt,oe,Gt,Gt)}if(!bt){It("beam",0,1.01,ht+.056,1.23,2.02,.11);for(let zt=0;zt<6;zt++)It("oldwood",.15*(zt-2.5),.98,ht+.112,.136,1.91,.035);for(let zt of[-1,1])at(Y,P,zt*v*.31,1.94,ht+.08,v*.22,1.03)}if(y===2&&!F)if(_==="tavern"){It("oldwood",0,3.34,ht+.53,v,.17,1.45);for(let zt=0;zt<$t;zt++){let Zt=(zt/$t-.5)*v;It("lacquer",Zt,3.78,ht+1.19,.12,.9,.12),It("oldwood",Zt+v/$t*.5,3.96,ht+1.2,v/$t,.09,.091);for(let oe=1;oe<=5;oe++)It("oldwood",Zt+oe*v/$t/6,3.67,ht+1.2,.061,.58,.06)}}else for(let zt=0;zt<$t;zt++)at(Y,P,((zt+.5)/$t-.5)*v,4.62,ht+.081,v/$t*.67,1.48)}if(y===2&&_!=="tavern"){let zt=(Zt,oe,Gt)=>Y(-Zt,oe,-Gt);for(let Zt=0;Zt<$t;Zt++)at(zt,P+Math.PI,((Zt+.5)/$t-.5)*v,4.52,ht+.075,v/$t*.65,1.42);It("beam",0,3.16,rt-.12,v+.14,.11,.14)}if(ct(Y,v+1.52,R+1.7,nt+.02,Math.min(v,R)*.31,k,Ht),F?(we(Y,It,v,R,$t,N,_==="tavern"),ct((zt,Zt,oe)=>Y(zt,Zt,oe+ht+.45),v+.9,1.1,3.06,.2,"tileDark")):y===2&&Ht&&ct(Y,v+.9,R+2.4,3.09,.68,"tileDark",!0),bt){if(_==="tavern"){for(let Gt of[-1,1])for(let Ft=0;Ft<4;Ft++){let ie=ht-1.2-Ft*2.3;(!F||Gt<0||ie>3||ie<-3)&&It("timber",Gt*(v/2-.13),1.65,ie,.14,3.3,.16)}for(let Gt=0;Gt<7;Gt++)It("timber",F?-.78:0,2.98,ht-.21-Gt*R/7,F?v-1.56:v,.2,.14);It("oldwood",0,1.09,rt+.44,v*.55,.142,.47),It("timber",0,.67,rt+.4,v*.56,.78,.5);for(let Gt=0;Gt<8;Gt++){let Ft=Y((Gt/7-.5)*v*.52,1.17,rt+.37);Mt(Ft.x,Ft.y,Ft.z,.67+Gt%3*.095,"paleCeramic")}let zt=Y(-.89,2.91,rt+.18),Zt=Y(.93,2.91,rt+.18);O("awning",zt,Zt,Y(.93,1.77,rt+.17),Y(-.89,1.77,rt+.17)),gt(Y,P,"\u9152",0,2.37,rt+.25,.62,.59);for(let Gt of[-4.85,4.85]){let Ft=Y(Gt,2.35,ht-2);X(vr,"rust",Ft,xt(.19,.24,.19),0),$("iron",Ft.clone().add(xt(0,.17,0)),Ft.clone().add(xt(0,.76,0)),.018,.018,Fe)}let oe=[[-3.8,.25],[3.5,.15],[-2.9,-3.4],[2.9,-3.4]];f.push({role:"server",points:[Y(0,0,ht-1),Y(0,0,1),Y(0,0,-2.6),Y(0,0,1)]}),f.push({role:"host",at:Y(1.15,0,ht-1),yaw:P});for(let[Gt,Ft]of oe){if(Math.abs(Gt)+.8>v/2||Math.abs(Ft)+.9>R/2)continue;for(let ae of[-1,1])f.push({role:"diner",at:Y(Gt+ae*.27,0,Ft+ae*.83),yaw:P+(ae>0?Math.PI:0)});It("oldwood",Gt,.85,Ft,1.63,.11,1.19);for(let ae of[-.63,.63])for(let _e of[-.44,.44])It("timber",Gt+ae,.49,Ft+_e,.11,.73,.11);It("timber",Gt,.47,Ft+.83,1.48,.1,.31),It("timber",Gt,.47,Ft-.83,1.48,.1,.31),ut(Y,Gt,Ft,1.68,1.23);for(let ae of[-.54,.53]){let _e=Y(Gt+ae,.92,Ft+.16);Mt(_e.x,_e.y,_e.z,.27,"paleCeramic")}let ie=Y(Gt,.9,Ft-.3);Mt(ie.x,ie.y,ie.z,.59,"paleCeramic")}}else{let zt=F?-.68:0,Zt=F?v-2.06:v-.7;It("oldwood",zt,1.09,-.85,Zt,.16,.98),It("timber",zt,.55,-.85,Zt-.11,.95,.82),ut(Y,zt,-.85,Zt+.11,.99);for(let Gt=0;Gt<2;Gt++){let Ft=(Gt-.5)*v*.82;It("oldwood",Ft,1.61,rt+.5,v*.35,.1,.55),It("oldwood",Ft,2.16,rt+.49,v*.35,.09,.56)}for(let Gt=0;Gt<8;Gt++){let Ft=Y(zt+(Gt/7-.5)*(Zt-.3),1.18,-.78+n()*.34);_==="market"?Dt(Ft.x,Ft.y,Ft.z,.4+n()*.43):Mt(Ft.x,Ft.y,Ft.z,.43+n()*.7,Gt%3?"ceramic":"paleCeramic")}for(let Gt=0;Gt<6;Gt++)It(Gt%2?"linen":"sage",v*.28,.32+Gt*.16,ht-.7,.99,.145,.64);Et(Y,P,Math.min(v*.23,1.45),-1.73,.14,ht-.46,_==="market"?"fruit":"pot");let oe=Math.min(v*.26,1.6);f.push({role:"assistant",at:Y(-oe,0,-1.68),yaw:P}),f.push({role:"shopper",at:Y(-oe,0,.35),yaw:P+Math.PI})}if(_!=="tavern")Qt(Y,P,v+.4,1.95,2.94,ht);else for(let zt of[-3.9,3.85]){let Zt=Y(zt,2.54,ht+.78);X(vr,"rust",Zt,xt(.24,.31,.24),0),$("iron",Zt.clone().add(xt(0,.26,0)),Zt.clone().add(xt(0,.55,0)),.018,.018,Fe)}N&&(It("beam",0,_==="tavern"?3.6:2.71,ht+.2,2.05,.53,.11),gt(Y,P,N,0,_==="tavern"?3.6:2.71,ht+.27,1.99,.49),gt(Y,P,N,v/2-.18,2.29,ht+1.46,.49,1.16,!0))}}function Tt(x,T,v,R,P,y=!1){let _=y?hn(T):Ie(x,T),N=dt(x,_,T,v),V=(W,Y,nt,ht,rt,bt,Ht)=>q(N,v,W,Y,nt,ht,rt,bt,Ht);V("timber",0,.83,0,R,.12,1.06);for(let W of[-1,1])V("beam",W*R*.41,.4,.22,.106,.82,.11),V("beam",W*R*.41,.4,-.24,.106,.82,.11),V("oldwood",W*R*.5,1.13,-.58,.1,2.28,.1);Qt(N,v,R+.48,2.06,2.46,-.63);let k=Math.floor(R/.43);for(let W=0;W<k;W++){let Y=N((W/(k-1)-.5)*R*.82,.93,n()*.4-.18);if(P==="fruit"){Dt(Y.x,Y.y,Y.z,.52);for(let nt=0;nt<5;nt++)X(vr,nt%2?"green":"rust",Y.clone().add(xt((n()-.5)*.25,.35,(n()-.5)*.24)),xt(.082,.071,.073),n()*6)}else if(P==="cloth"){let nt=N((W/(k-1)-.5)*R*.82,.97,.06);J(["linen","sage","rust"][W%3],nt.x,nt.y,nt.z,.29,.16,.63,v)}else P==="bread"?(X(As,"straw",Y.clone(),xt(.19,.07,.16),v),X(As,"oldwood",Y.clone().add(xt(.033,.074,.016)),xt(.139,.067,.124),v,1.15)):Mt(Y.x,Y.y,Y.z,.46+n()*.44,W%2?"ceramic":"paleCeramic")}let F={fruit:"\u679C\u5B50",cloth:"\u5E03\u5E1B",pot:"\u8336\u6C34",bread:"\u80E1\u9905"}[P];(y||P==="bread")&&gt(N,v,F,-R*.3,1.54,.02,.45,.85,!0),Et(N,v,0,-.91,.84,y?1.58:1.94,P),ut(N,0,0,R,1.08)}function mt(x,T,v,R,P=1,y=!1){M.push({x,z:T,len:v,width:R,side:P,extra:y});for(let N=0;N<v/.27;N++)J("oldwood",x-v/2+N*.27,.44-.08,T,.247,.16,R);for(let N=0;N<=v/2.1;N++){let V=x-v/2+N*2.1;for(let k of[-1,1])J("beam",V,-.5,T+k*(R*.43),.28,1.92,.28),J("oldwood",V,.66,T+k*R*.43,.31,.58,.31)}g.push({x0:x-v/2,x1:x+v/2,z0:T-R/2,z1:T+R/2,y:.44});for(let N=0;N<12;N++){let V=x-v*.41+N*(v*.82/11),k=T-P*R*.3,F=.7+n()*.45;N%4===0?Xt(V,.44,k,F):N%4===1?Mt(V,.44,k,F,"paleCeramic"):N%4===2?X(As,"straw",xt(V,.44+.24,k),xt(.36,.57,.3),.2):Dt(V,.44,k,F)}}function yt(){let x=Ze(Ge),T=x-Ts,v=x+Ts,R=144;for(let P=0;P<R;P++){let y=re.lerp(T,v,P/R),_=re.lerp(T,v,(P+1)/R);for(let N=0;N<5;N++){let V=ws/5,k=Ge-ws/2+V*(N+.5);J("oldwood",k,hn((y+_)/2)-.103,(y+_)/2,V-.014,.178,_-y-.009,0,.74+n()*.28)}}for(let P of[-4.9,-3.35,-1.65,0,1.65,3.35,4.9]){let y=Ge+P;for(let _=0;_<17;_++){let N=_/17,V=(_+1)/17,k=re.lerp(T+.43,v-.43,N),F=re.lerp(T+.43,v-.43,V);$("beam",xt(y,hn(k)-.76,k),xt(y,hn(F)-.76,F),.4,.47);let W=_%2===0?.99:.73;$("timber",xt(y+.22,hn(k)-W-.18,k),xt(y+.22,hn(F)-.35,F),.32,.37)}for(let _=0;_<12;_++){let N=re.lerp(T+.75,v-.75,_/12),V=re.lerp(T+.75,v-.75,(_+1)/12);$("timber",xt(y-.14,hn(N)-.94,N),xt(y-.14,hn(V)-.94,V),.35,.37)}}for(let P=0;P<=22;P++){let y=re.lerp(T,v,P/22),_=re.lerp(T,v,(P+1)/22),N=hn(y);$("beam",xt(Ge-5.65,N-.57,y),xt(Ge+5.65,N-.57,y),.24,.34);for(let V of[-1,1]){let k=Ge+V*5.18;if(J("timber",k,N+.49,y,.15,1.15,.2),X(As,"beam",xt(k,N+1.12,y),xt(.131,.18,.13)),P!==22){for(let F of[.37,.94])$("oldwood",xt(k,N+F,y),xt(k,hn(_)+F,_),.105,.12);$("timber",xt(k,N+.14,y),xt(k,hn(_)+.37,_),.061,.065)}}}for(let P of[-1,1]){let y=x+P*(Ts-.12);J("stone",Ge,-.53,y,ws+1.2,1.22,1.48),J("stone",Ge,.04,y+P*.82,ws+.66,.15,1)}gt(dt(Ge,0,x,Math.PI/2),Math.PI/2,"\u8679\u6A4B",0,hn(x)-.34,5.38,1.6,.43)}function _t(x,T,v){let R=document.createElement("canvas");R.width=768,R.height=440;let P=R.getContext("2d");P.fillStyle="#d6bb83",P.fillRect(0,0,768,440),P.strokeStyle="#9e7c4b",P.lineWidth=3,P.strokeRect(17,16,734,408);let y=k=>46+(k+135)*2.05,_=k=>211+k*2.45;P.beginPath();for(let k=-134;k<=187;k+=3)P.lineTo(y(k),_(Ze(k)-Bn(k)));for(let k=187;k>=-134;k-=3)P.lineTo(y(k),_(Ze(k)+Bn(k)));P.closePath(),P.fillStyle="#798c79",P.fill(),P.strokeStyle="#596958",P.stroke(),P.strokeStyle="#9d6644",P.lineWidth=5,P.beginPath(),P.moveTo(y(-121),_(25)),P.lineTo(y(-4),_(22)),P.lineTo(y(-4),_(-23)),P.lineTo(y(163),_(-25)),P.stroke(),P.lineWidth=8,P.strokeStyle="#63513a",P.beginPath(),P.moveTo(y(106.7),_(-68)),P.lineTo(y(106.7),_(-12)),P.stroke(),P.fillStyle="#786247";for(let k=0;k<20;k++){let F=k*8+3;P.fillRect(y(F),_(-35-k%3),8,13),k>12&&P.fillRect(y(F),_(-53+k%2*3),9,11)}P.font="bold 25px SimSun, serif",P.fillStyle="#59412c",P.fillText("\u6C74\u4EAC\u6C34\u9678\u5716",44,66),P.fillText("\u57CE\u9580",y(112),_(-10)),P.fillText("\u8679\u6A4B",y(-27),_(-30)),P.fillText("\u6C74\u6CB3",y(-105),_(3)),P.fillText("\u5317",690,60);let N=new Gn(R);N.colorSpace=ze,N.anisotropy=8;let V=new Se(new Sn(2.18,1.24),wn(N,{side:Ne}));V.position.copy(x(0,v+1.113,-.32)),V.rotation.set(-Math.PI/2,T+Math.PI,0,"YXZ"),i.add(V),q(x,T,"oldwood",0,v+1.044,-.32,2.53,.127,1.52);for(let k of[-1.07,1.07])for(let F of[-.91,.27])q(x,T,"beam",k,v+.5,F,.13,1.01,.13);pt(x,0,-.32,2.53,1.52)}function ee(x,T,v){let R=(P,y,_,N)=>q(x,T,"plaster",P,v+1.36,y,_,2.72,N);for(let P of[-5.83,5.83])R(P,0,.21,5.58),pt(x,P,0,.21,5.58);for(let[P,y]of[[-4.72,2.18],[0,3.58],[4.72,2.18]])R(P,-2.77,y,.23),pt(x,P,-2.77,y,.23);q(x,T,"timber",0,v+2.42,-2.77,11.6,.19,.29),q(x,T,"plaster",0,v+.43,2.77,11.6,.86,.22),q(x,T,"oldwood",0,v+.89,2.79,11.6,.12,.35),pt(x,0,2.77,11.6,.25),at(x,T,-3.83,v+1.53,2.84,1.15,1.15),at(x,T,3.83,v+1.53,2.84,1.15,1.15);for(let P of[-5.8,-3.87,-1.93,0,1.93,3.87,5.8]){for(let y of[-2.86,2.86])q(x,T,"lacquer",P,v+1.51,y,.225,3.02,.25),pt(x,P,y,.225,.25);q(x,T,"oldwood",P,v+2.8,0,.19,.26,5.86)}for(let P of[-1,1]){let y=P*2.91,_=P*4.45;O("tileDark",x(-6.65,v+2.56,y),x(6.65,v+2.56,y),x(6.65,v+2.22,_),x(-6.65,v+2.22,_),[0,0,7,1.2]),$("beam",x(-6.65,v+2.21,_),x(6.65,v+2.21,_),.15,.17);for(let N of[-4.8,-2.7,2.7,4.8])$("timber",x(N,v+2.02,y),x(N,v+2.19,_),.087,.093)}ct(x,15.8,10.5,v+3.115,2.65,"tileDark"),_t(x,T,v);for(let P of[-4.83,4.83])q(x,T,"beam",P,v+.17,1.47,1.6,.33,.8),q(x,T,"oldwood",P,v+1.15,1.73,1.6,.12,.29),pt(x,P,1.49,1.61,.86);for(let P=0;P<4;P++){let y=-5.39+P*.33;$("oldwood",x(y,v+.34,1.18),x(y,v+1.94,1.65),.027,.027,Fe);let _=x(y,v+2.03,1.68);X(gg,"iron",_,xt(.045,.15,.032),T,1.14)}for(let P=0;P<3;P++){let y=4.25+P*.49;$("beam",x(y,v+.37,1.24),x(y,v+1.22,1.61),.063,.05),$("iron",x(y,v+1.22,1.61),x(y+.045,v+1.83,1.8),.079,.027),$("timber",x(y-.13,v+1.24,1.61),x(y+.13,v+1.24,1.61),.04,.038)}for(let P of[-5.07,-4.46]){let y=x(P+.19,v+.42,2.13);for(let _=1;_<=11;_++){let N=_/11,V=x(P+.19*Math.cos(N*2*Math.PI),v+.42+N*1.21,2.13+.031*Math.sin(N*Math.PI));$("oldwood",y,V,.029,.024,Fe),y=V}}q(x,T,"straw",4.93,v+.34,-1.39,.63,.69,.53),pt(x,4.93,-1.39,.63,.53),w.push({position:x(-3.77,v,-.96),yaw:T+2.47}),w.push({position:x(3.81,v,-.94),yaw:T-2.47})}function Rt(x,T,v,R){let W=x(v*5.6,0,-7.04),Y=Ie(W.x,W.z),nt=(Y+R)/2,ht=(Ft,ie,ae,_e)=>{let Pe=x(v*Ft,0,ae),Ee=x(v*ie,0,_e);return{x0:Math.min(Pe.x,Ee.x),x1:Math.max(Pe.x,Ee.x),z0:Math.min(Pe.z,Ee.z),z1:Math.max(Pe.z,Ee.z)}};function rt(Ft,ie,ae,_e,Pe,Ee){q(x,T,"wall",v*Ft,(Pe-.24)/2,ie,ae,Pe+.24,_e,Ee),q(x,T,"brick",v*Ft,Pe-.055,ie,ae+.016,.11,_e+.006,Ee)}function bt(Ft,ie,ae,_e,Pe){let Ee=(ie-Ft)/23,qt=(Pe-_e)/23;for(let Wt=0;Wt<23;Wt++){let de=Ft+(Wt+.5)*Ee,Re=_e+(Wt+1)*qt;rt(de,ae,Math.abs(Ee),1.55,Re,[.87,.96,.92,.99][Wt%4]);for(let I of[-1,1]){let j=ae+I*.68;q(x,T,"brick",v*de,Re+.168,j,Math.abs(Ee)+.01,.34,.19,.92),q(x,T,"stone",v*de,Re+.337,j,Math.abs(Ee)+.016,.069,.2,.9)}}return{...ht(Ft,ie,ae-1.55/2,ae+1.55/2),from:x(v*Ft,0,ae).z,to:x(v*ie,0,ae).z,bottom:_e,rise:qt,count:23}}let Ht=[bt(5.6,10.84,-7.04,Y,nt),bt(10.84,5.6,-5.13,nt,R)],It=-5.13+1.55/2,$t=-7.04-1.55/2,zt={...ht(10.84,12.02,It,$t),level:nt};rt((10.84+12.02)/2,(It+$t)/2,12.02-10.84,It-$t,nt,.91),q(x,T,"brick",v*(12.02-.065),nt+.27,(It+$t)/2,.13,.54,It-$t,.92);for(let Ft of[It,$t])q(x,T,"brick",v*((10.84+12.02)/2),nt+.24,Ft,12.02-10.84,.48,.16,.91);let Zt={...ht(4.36,5.6,It+.24,-5.13-1.55/2),level:R};rt((4.36+5.6)/2,(It+.24+-5.13-1.55/2)/2,5.6-4.36,It+.24-(-5.13-1.55/2),R,.93),B.push({paths:Ht,turn:zt,exit:Zt});for(let Ft of[-1,1]){let ie=x(v*(5.6-(Ft>0?2.05:.96)),0,-7.04+Ft*1.29);ie.y=Ie(ie.x,ie.z),w.push({position:ie,yaw:(v>0?Math.PI:0)+Ft*.13,stairFoot:!0})}let oe=v*(5.6-.27),Gt=-7.04-1;gt(x,v>0?Math.PI:0,"\u767B\u57CE",oe-v*.054,1.88,Gt,.43,.85,!0),q(x,T,"timber",oe,1.15,Gt,.087,2.21,.085,.94)}function kt(){let x=-Math.PI/2,T=106.7,v=-25,R=dt(T,0,v,x),P=8.75,y=8.5,_=3.98,N=2.95,V=P+.185,k=[-5.01,5.01],F=rt=>N+Math.sqrt(Math.max(0,_*_-rt*rt)),W=P-.11;for(let[rt,bt]of[[-49,-_],[_,13.6]]){q(R,x,"wall",(rt+bt)/2,P/2,0,bt-rt,P,y),q(R,x,"brick",(rt+bt)/2,.46,0,bt-rt,.95,y+.14),q(R,x,"brick",(rt+bt)/2,W,0,bt-rt,.29,y+.38),ut(R,(rt+bt)/2,0,bt-rt,y);for(let Ht=rt+.3;Ht<bt-.25;Ht+=1.25)for(let It of[-1,1])It===-1&&k.some($t=>Math.abs($t-Ht)<1.42)||(q(R,x,"brick",Ht,P+.43,It*(y/2-.18),.72,.77,.42),pt(R,Ht,It*(y/2-.18),.72,.42));for(let Ht=rt+.4;Ht<bt-.35;Ht+=3.45)for(let It of[-1,1])q(R,x,"stone",Ht,2.15,It*y/2,.22,2.6,.17,.82)}let Y=y/2,nt=28;for(let rt=0;rt<nt;rt++){let bt=-_+rt/nt*_*2,Ht=-_+(rt+1)/nt*_*2;for(let It of[-1,1]){let $t=It*Y;O("brick",R(bt,F(bt),$t),R(Ht,F(Ht),$t),R(Ht,P,$t),R(bt,P,$t),[bt/3,0,Ht/3,1.7])}O("brick",R(bt,F(bt),Y),R(Ht,F(Ht),Y),R(Ht,F(Ht),-Y),R(bt,F(bt),-Y),[bt/3,0,Ht/3,2.6],[.77,.73,.66])}for(let rt=0;rt<25;rt++){let bt=Math.PI*rt/25+.01,Ht=Math.PI*(rt+1)/25-.009;for(let It of[-1,1]){let $t=(zt,Zt)=>R(Math.cos(zt)*Zt,N+Math.sin(zt)*Zt,It*(Y+.095));O("stone",$t(bt,_+.028),$t(Ht,_+.028),$t(Ht,_+.6),$t(bt,_+.6),[0,0,.55,.55],[.95,.91,.82])}}for(let rt of[-1,1])for(let bt=0;bt<5;bt++)q(R,x,"stone",rt*(_+.32),bt*.57+.3,Y+.1,.64,.55,.24);q(R,x,"stone",0,P+.075,0,24.1,.22,8.9),U={x0:T-4.45,x1:T+4.45,z0:v-12.05,z1:v+12.05,floor:V};for(let rt of[-11.9,11.9])q(R,x,"brick",rt,V+.43,0,.29,.89,8.86),pt(R,rt,0,.29,8.86);for(let[rt,bt]of[[-9.12,5.82],[0,8.73],[9.12,5.82]])q(R,x,"brick",rt,V+.28,-4.05,bt,.56,.38),pt(R,rt,-4.05,bt,.38);q(R,x,"brick",0,V+.23,4.04,24,.46,.39),pt(R,0,4.04,24,.39),ee(R,x,V);for(let rt of[-1,1])Rt(R,x,rt,V);gt(R,x,"\u6C74\u4EAC",0,7.86,Y+.13,1.95,.54);for(let rt of[-1,1]){w.push({position:R(rt*7.75,V,Y-.6),yaw:x-rt*.14}),w.push({position:R(rt*9.65,V,-Y+.93),yaw:x+Math.PI+rt*.09});let bt=R(rt*4.9,0,Y+.94);bt.y=Ie(bt.x,bt.z),w.push({position:bt,yaw:x-rt*.25})}Yt([[94,-25],[119,-25]],8.7,"pave")}function he(x,T,v,R=!1){let P=Ie(x,T),y=(R?7:6.6)*v,_=n()*Math.PI*2,N=xt(Math.cos(_)*v*.75,0,Math.sin(_)*v*.75),V=xt(x,P-.16,T),k=xt(x,-.12+P+y*.47,T).addScaledVector(N,.24),F=xt(x,P+y*.91,T).add(N),W=(R?.34:.25)*v;$("bark",V,k,W*1.15,W,Fe),$("bark",k,F,W*.72,W*.64,Fe);let nt=(R?[8622155,7373125,10003034,6058555,8033109]:[6452552,8227397,8689236,5598014,9740887]).map(rt=>new St(rt).toArray()),ht=R?21:18;for(let rt=0;rt<ht;rt++){let bt=rt*2.399963+n()*.42,Ht=xt(Math.cos(bt),0,Math.sin(bt)),It=k.clone().lerp(F,.19+n()*.67),$t=(1.18+n()*2.6)*v,zt=It.clone().addScaledVector(Ht,$t).add(xt(0,(.66+n()*1.67)*v,0)),Zt=It.clone().lerp(zt,.51).add(xt(0,.43*v,0));rt<16&&($("bark",It,Zt,W*.24,W*.24,Fe),$("bark",Zt,zt,W*.12,W*.12,Fe));for(let Ft=0;Ft<5;Ft++){let ie=Zt.clone().lerp(zt,.28+Ft*.19).addScaledVector(Ht,(n()-.25)*v*.64);ie.y+=(n()-.53)*(R?1.48:1)*v;let ae=bt+Ft*2.11,_e=(R?1.12:1.27)*(.67+n()*.39)*v,Pe=xt(Math.sin(ae)*_e,(n()-.5)*_e*.27,Math.cos(ae)*_e),Ee=xt(Math.cos(ae)*_e*.22,_e*(R?1.32:.8),-Math.sin(ae)*_e*.22);O("bough",ie.clone().sub(Pe).sub(Ee),ie.clone().add(Pe).sub(Ee),ie.clone().add(Pe).add(Ee),ie.clone().sub(Pe).add(Ee))}let oe=R?33:35,Gt=R?1.1:1.58;for(let Ft=0;Ft<oe;Ft++){let ie=.35+n()*.73,ae=Zt.clone().lerp(zt,ie).addScaledVector(Ht,(n()-.21)*Gt*v),_e=R?.7:1.3;ae.x+=(n()-.5)*1.55*Gt*v,ae.z+=(n()-.5)*1.55*Gt*v,ae.y+=(n()-.54)*_e*v,R&&(ae.y-=(.08+Math.pow(n(),.52)*2.37)*ie*v);let Pe=(.13+n()*.28)*v,Ee=(R?.052:.133)*v*(.58+n()),qt=n()*6.28,Wt=xt(Math.cos(qt)*Ee,(n()-.5)*Ee*.9,Math.sin(qt)*Ee),de=xt(Math.sin(qt)*Pe*.66,-Pe*(.72+n()*.35),-Math.cos(qt)*Pe*.66);O("foliage",ae.clone().addScaledVector(de,-.49),ae.clone().add(Wt),ae.clone().addScaledVector(de,.6),ae.clone().addScaledVector(Wt,-1),[0,0,1,1],nt[Math.floor(n()*nt.length)])}}}function wt(x,T,v,R){let P=[7307575,10135131,9214020,11448692].map(y=>new St(y).toArray());for(let y=0;y<Math.floor(R/.78);y++){let _=T+y*.78;for(let N=x;N<x+v;N+=.26+n()*.12){let V=N+n()*.13,k=_+n()*.33,F=Ie(V,k);for(let W=0;W<3;W++){let Y=.28+n()*.49,nt=(n()-.5)*.29,ht=xt(V+(n()-.5)*.14,F,k+(n()-.5)*.11);O("foliage",ht,ht.clone().add(xt(.034,0,0)),ht.clone().add(xt(nt,Y,-.04)),ht.clone().add(xt(nt+.036,Y,-.041)),[0,0,1,1],P[Math.floor(n()*P.length)])}}}}te(),Yt([[-162,34],[-142,28],[-126,25],[-108,22],[-88,19],[-73,18],[-56,18],[-49,19],[-36,19],[-20,20],[-10,22],[10,23],[39,24],[64,26]],4.6),Yt([[-44,-22],[-21,-23],[-4,-23],[16,-23],[32,-24],[57,-24],[79,-24],[103,-25],[128,-25],[145,-26],[174,-26]],7.1,"path"),Yt([[119,-25],[129,-28],[129,-45],[130,-64],[132,-72]],4.4,"pave"),Yt([[112,-43],[129,-45],[153,-46],[171,-45]],3.8,"soil"),Yt([[142,-26],[143,-39],[146,-65]],4,"soil"),Yt([[-6,25],[-8,42],[-18,67]],3.7,"soil"),wt(-152,32,31,16),wt(-113,29,25,13),wt(-156,54,27,14),wt(-74,43,18,12),wt(46,40,26,12),C(-151,26,6.8,5.6,{roofKind:"straw"}),C(-137,36,7.2,6.2,{theta:Math.PI,roofKind:"straw"}),C(-112,13.7,6.2,5.6,{theta:Math.PI,roofKind:"tileDark"}),C(-103,25,8,5.3,{theta:Math.PI,roofKind:"straw"}),C(-86,33,6.6,5.6,{theta:Math.PI}),C(-64,28.7,8.5,6.7,{theta:Math.PI,kind:"market",label:"\u8336\u68DA"}),C(-46,27.3,9.6,7.9,{theta:Math.PI,kind:"store",label:"\u8CA8\u68E7"}),C(-33,26.7,8.4,6.3,{theta:Math.PI,kind:"market"}),C(-22,28.5,7.8,7.1,{theta:Math.PI}),mt(-38,14.65,14.4,5.45);let z=-36.5,E=7.22,et=12.33,Z=x=>re.lerp(.045,.45,re.clamp((x-E)/(et-E),0,1));for(let x=0;x<19;x++){let T=E+(x+.5)*(et-E)/19;J("oldwood",z,Z(T)-.059,T,1.57,.115,.249)}for(let x of[-.67,.67])$("beam",xt(z+x,.02,E),xt(z+x,.48,et),.105,.126);g.push({x0:-41,x1:-32.8,z0:5.65,z1:7.45,y:.044}),mt(-26,14.65,8.1,4.8),mt(15,16.2,12.6,5.35),mt(47,-13.2,13.5,4.5,-1),yt();for(let[x,T,v]of[[1,-7.2,"bread"],[-1,-10.3,"fruit"],[1,8.7,"pot"],[-1,12.7,"cloth"]])Tt(Ge+x*3.91,T,-x*Math.PI/2,1.68,v,!0);for(let x=0;x<390;x++){let T=-151+n()*319,R=x%4!==0?-24+(n()>.5?1:-1)*(2.6+n()*.95):23+(n()>.5?1:-1)*(1.4+n()*1);if(Math.abs(T-106.7)<7||Math.abs(T+4)<8)continue;let P=.016+n()*.087;X(vr,"stone",xt(T,Ie(T,R)+.022,R),xt(P,.048,P*.65),n()*6,.9)}for(let[x,T,v,R,P,y]of[[5,-32.2,7.1,7.4,"market","\u8336\u8086"],[14.4,-34,8.2,9,"store","\u96DC\u8CA8"],[24.6,-34.1,9.8,10,"market","\u9999\u6599"],[36.8,-34.5,8.8,9.4,"store","\u7DA2\u5E03"],[48,-34.1,8.3,8.6,"store","\u74F7\u5668"],[58.4,-35.7,8.2,9.4,"market","\u7CE7\u884C"],[69,-36.2,11.8,12.35,"tavern","\u9152\u6A13"],[82.5,-35.7,9,10.4,"store","\u8336\u574A"],[94,-35.3,8.65,8.6,"market","\u7AF9\u5668"]])C(x,T,v,R,{floors:2,kind:P,label:y,loft:x===69||x===82.5});for(let[x,T,v,R,P,y]of[[-20,-33.6,8.5,7.4,"home"],[-10,-34.6,7.9,7.5,"market","\u8336"],[9,29.5,8.2,7,"market","\u8336"],[20,34,10.2,8.5,"tavern","\u9152"],[31,31.7,7.1,7.4,"store","\u7C73"],[45,33,7.4,7,"home"],[14,-17,6.45,4.85,"store","\u8336"],[32.5,-16.6,7.6,4.25,"market"],[62,-16.35,8.1,5.6,"market","\u679C\u5B50"],[82,-16.9,9.4,5.2,"store","\u767E\u8CA8"]])C(x,T,v,R,{theta:T>0||T>=-18?Math.PI:0,floors:P==="home"?1:2,kind:P,label:y});for(let[x,T,v,R,P]of[[-19,18.9,0,3.2,"fruit"],[-12,19.7,0,3.6,"cloth"],[3,24.7,Math.PI,3.6,"fruit"],[17,19.8,0,3.8,"pot"],[3,-18.7,Math.PI,3.8,"pot"],[20,-19.2,Math.PI,4,"fruit"],[25.6,-20.1,Math.PI,3.4,"fruit"],[38.6,-19.4,Math.PI,4.4,"cloth"],[45,-20.4,Math.PI,3.9,"pot"],[53.9,-19.7,Math.PI,4.2,"fruit"],[73.5,-20,Math.PI,3.7,"pot"],[89.1,-19.9,Math.PI,3.2,"cloth"],[151,-19.4,Math.PI,4.2,"pot"],[136,-20.1,Math.PI,4,"fruit"],[31.1,-27.6,0,2.3,"bread"],[42,-27.5,0,2.2,"fruit"],[53.3,-28.1,0,2,"cloth"]])Tt(x,T,v,R,P);kt();for(let[x,T,v,R,P,y]of[[116.2,-43.05,6.8,8.4,"store","\u98DF\u5E97"],[122,-41.8,5,7.4,"home"],[136.8,-34.7,7.1,8.7,"home"],[149.9,-34.8,7.6,8,"store","\u5E03"],[160.4,-35,8.5,8.5,"home"],[172,-34.3,10,8,"home"],[119.9,-50.8,9,7.1,"home"],[137.3,-51.4,9,7.5,"home"],[120.3,-61,9.4,8.9,"home"],[138.1,-63,10,9,"home"],[153.7,-55.4,8.6,9.3,"home"],[167.8,-54.5,10.7,8.1,"home"]])C(x,T,v,R,{floors:T<-47?1:2,kind:P,label:y});for(let x of[10,24,42,57,74,90,116,128,151,169])for(let T of[-57,-71])x>120&&x<147||C(x+(n()-.5)*3,T+(n()-.5)*2,6.6+n()*3.9,5.3+n()*3.7,{floors:n()>.58?2:1,simple:!0,theta:n()>.5?Math.PI:0});for(let[x,T,v,R]of[[-242,36,8.7,6.3],[-211,23,8.1,5.4],[-187,23,7.8,7.2],[185,-26,8.7,6.4],[196,-28,8,5.8],[210,-30,10.3,6.6],[228,-32,8,6.5],[239,-37,7.1,7.1]])C(x,T,v,R,{floors:x<0?1:2,simple:!0,theta:T>0?Math.PI:0});for(let[x,T,v]of[[-203,20,1.04],[-227,23,1.19],[-244,26,1.05],[170,21,1.12],[187,24,1.08],[211,25,1.24],[232,-21,.91],[244,23,.95]])he(x,T,v,!0);let lt=dt(154,.19,-66,0);for(let x=0;x<3;x++){let T=7.35-x*1.38;q(lt,0,"plaster",0,2.63+x*3.5,0,T-.31,3,T*.78);for(let v of[-1,1])q(lt,0,"lacquer",v*(T/2-.32),2.63+x*3.5,T*.38,.23,3.05,.23),at(lt,0,v*T*.214,2.88+x*3.5,T*.39,T*.28,.94);ct(lt,T+1.91,T*.84+1.34,3.97+x*3.5,1.28,"tileDark",!0)}for(let x of[-78,-65,-48,-38,-23])C(x,-32-10*n(),6.3+n()*3,5.6+n()*3,{simple:!0,floors:n()<.19?2:1});for(let[x,T,v,R]of[[-139,19,1.17,1],[-119,18,1.2,1],[-117,31,.97,0],[-98,19,.99,1],[-82,13,1.16,1],[-68,14.7,1.14,1],[-56,24,1,1],[-42,20.6,.96,1],[-22,18.3,.96,1],[-10,27,1.22,1],[10,20.4,.99,1],[28,29,.82,1],[48,20.2,1.04,1],[59,19.9,1.25,1],[70,26,1,1],[-39,-22,1.11,1],[-16,-24,1.12,1],[7,-15.5,.86,1],[34,-28.8,.93,0],[55,-15.5,1.01,1],[76,-15.8,.85,1],[93,-15.1,1.12,1],[112,-14.2,.91,1],[126,-53,1.12,0],[132,-48,.99,1],[128,-66,1.02,1],[137,-41,.83,0]])he(x,T,v,R===1);for(let x=0;x<74;x++){let T=-169+n()*350,v=(n()>.54?-1:1)*(40+n()*38);T>94&&T<151&&v<0||he(T,v,.63+n()*.54,n()>.67)}for(let x=0;x<1900;x++){let T=-163+n()*337,v=n()>.5?1:-1,P=Ze(T)+v*Bn(T)+v*(n()*1.65+.05);if(T>-11&&T<4||T>-46&&T<-20&&v===1)continue;let y=Ie(T,P),_=[.29,.34,.105],N=.17+n()*.38;O("foliage",xt(T-.026,y,P),xt(T+.039,y,P),xt(T+.13*n(),y+N,P+.06),xt(T-.018,y+N,P+.06),[0,0,1,1],_)}for(let[x,T]of[[8,27],[21,28],[-31,21.5],[47,-31.5],[72,-32],[-74,19.3],[134,-42],[125,-56]])x===47||x===72||(Xt(x,Ie(x,T),T,.83),Dt(x+.82,Ie(x,T),T,.67),Q(x,T,1.5,.75));for(let x=0;x<14;x++){let T=-146+x*2;J("timber",T,Ie(T,30.7)+.43,30.7,.16,1.04,.19),x<13&&($("oldwood",xt(T,.43,30.7),xt(T+2.1,.38,30.7),.085,.105),$("oldwood",xt(T,.7,30.7),xt(T+2.06,.69,30.7),.071,.084))}for(let[x,T]of[[124,-42],[133,-40],[128,-55]]){let v=dt(x,Ie(x,T),T,Math.PI/2);$("timber",v(-1.2,0,0),v(-1.2,2.3,0),.075,.075,Fe),$("timber",v(1.2,0,0),v(1.2,2.2,0),.075,.075,Fe),$("timber",v(-1.2,2.25,0),v(1.2,2.16,0),.032,.034,Fe);for(let R=0;R<4;R++){let P=-.94+R*.52,y=P+.44,_=2.21-R*.019;O("awning",v(P,_,0),v(y,_,0),v(y,_-.69-R*.06,.04),v(P,_-.64-R*.06,.14))}}for(let[x,T]of[[-64,1],[25,-1]]){let v=Ze(x)+T*Bn(x),R=v-T*.4;mt(x,R,11.2,5.8,T,!0);let P=T>0?18:-23;Yt([[x,v+T*2],[x,P]],1.8,"path"),J("oldwood",x,.12,R+T*3.27,1.8,.24,.86),g.push({x0:x-.9,x1:x+.9,z0:R+Math.min(T*2.85,T*3.7),z1:R+Math.max(T*2.85,T*3.7),y:.24})}for(let{geo:x,mat:T,entries:v}of h.values()){let R=new Li(x,s[T],v.length);for(let[P,[y,_]]of v.entries())R.setMatrixAt(P,y),R.setColorAt(P,H.setScalar(_));R.castShadow=T!=="soil"&&T!=="grass",R.receiveShadow=!0,R.computeBoundingSphere(),i.add(R)}for(let[x,{points:T,uv:v,colors:R}]of d){let P=new Ue;P.setAttribute("position",new me(T,3)),P.setAttribute("uv",new me(v,2)),P.setAttribute("color",new me(R,3)),P.computeVertexNormals();let y=s[x].clone();y.side=Ne,y.vertexColors=!0,(x==="foliage"||x==="awning"||x==="bough")&&(y.onBeforeCompile=s[x].onBeforeCompile);let _=new Se(P,y);_.receiveShadow=!0,_.castShadow=!["soil","grass","stone","pave","path"].includes(x),i.add(_)}let st=(x,T,v,R=0)=>T>=x.x0+R&&T<=x.x1-R&&v>=x.z0+R&&v<=x.z1-R;function Ct(x,T){for(let{paths:v,turn:R,exit:P}of B){if(st(R,x,T))return R;if(st(P,x,T))return P;for(let y of v)if(st(y,x,T))return y}}function ft(x,T,v){return v>=U.floor-.65&&(st(U,x,T)||B.some(({exit:R})=>st(R,x,T)))}function Nt(x,T,v=0){if(x<xr.west||x>xr.east||T<xr.north||T>xr.south)return null;if(ft(x,T,v))return U.floor;for(let P of A){if(!st(P,x,T))continue;let y=P.stair;if(st(y,x,T)){let _=Math.min(y.steps,1+Math.floor((y.from-T)/y.run));return y.base+_*y.rise}if(v>=P.y-.65)return P.y}let R=Ct(x,T);if(R){if(R.level!==void 0)return R.level;let P=re.clamp((T-R.from)/(R.to-R.from),0,1),y=Math.min(R.count,1+Math.floor(P*R.count));return R.bottom+y*R.rise}if(Math.abs(x-Ge)<ws/2-.14&&Math.abs(T-Ze(Ge))<=Ts+.04)return hn(T);if(Math.abs(x-z)<.78&&T>=E&&T<=et)return Z(T);for(let P of g)if(x>=P.x0&&x<=P.x1&&T>=P.z0&&T<=P.z1)return P.y;return Math.abs(T-Ze(x))<Bn(x)-.14?null:Ie(x,T)}function Ut(x,T,v=.3,R=0){for(let N of A){let V=N.stair;if(st(V,x,T))return x<V.x0+.06+v||x>V.x1-.06-v;if(R>=N.y-.65&&st(N,x,T))return x<N.x0+v||x>N.x1-v||T<N.z0+v?!0:N.obstacles.some(k=>x>k.x0-v&&x<k.x1+v&&T>k.z0-v&&T<k.z1+v)}let P=Ct(x,T);return P?.count&&(x<P.x0+.16+v||x>P.x1-.16-v)?!0:(P&&R>=U.floor-.65||ft(x,T,R)?D:p).some(N=>x>N.x0-v&&x<N.x1+v&&T>N.z0-v&&T<N.z1+v)}return{materials:s,walkHeight:Nt,isObstacle:Ut,obstacles:p,trades:L,wharves:M,shopRooms:m,shopStaff:f,shopLofts:A,gatePosts:w,gateTerrace:U,gateStairs:B,onGateTerrace:ft}}function Lh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ue,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0,h=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Ph(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let p=[];for(let M=0;M<o[u].length;++M)p.push(o[u][M][d]);let g=Ph(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Ph(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Oe(o,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<e;g++){let M=u.getComponent(d,g);a.setComponent(d+h,g,M)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Me=(i,t,e)=>new K(i,t,e),Oc=Me(0,1,0),_n=new Hn(1,1,1),En=new mi(1,12,8),Dh=new mi(1,10,6,0,Math.PI*2,0,Math.PI*.57),qn=new mn(1,1,1,8),Uh=new mn(.65,1,1,10),Mr=new mn(1,.72,1,10),zc=new ps(1,.083,6,19),_g=new mn(.71,1,1,8),xg=new Di(1),ri=Math.PI*2;function Ve(i,t,e,n,s,r,o=1,a=1,l=1){let c=new Se(i,t);return c.position.set(n,s,r),c.scale.set(o,a,l),c.castShadow=c.receiveShadow=!0,e.add(c),c}function On(i,t,e,n,s,r=qn){let o=n.clone().sub(e),a=e.clone().lerp(n,.5),l=Ve(r,t,i,a.x,a.y,a.z,s,o.length(),s);return l.quaternion.setFromUnitVectors(Oc,o.normalize()),l}function Gi(i,t=[]){let e=new Map;for(let n of[...i.children]){if(!n.isMesh||t.includes(n))continue;n.updateMatrix();let s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();s.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(s),i.remove(n)}for(let[n,s]of e)Ve(Lh(s),n,i,0,0,0),s.forEach(r=>r.dispose())}function vg(i,t,e,n){let s=[];function o(h,d){let p=(h-.5)*i,g=Math.pow(.065+.935*Math.sin(Math.PI*h),.69),M=Math.sin(d*Math.PI),m=Math.cos(d*Math.PI);return[p,-.04+M*-.53+.26*Math.pow(Math.abs(h-.5)*2,4),m*t*.51*g*(.75+.25*Math.abs(m))]}for(let h=0;h<24;h++)for(let d=0;d<11;d++){let p=o(h/24,d/11),g=o((h+1)/24,d/11),M=o((h+1)/24,(d+1)/11),m=o(h/24,(d+1)/11);s.push(...p,...g,...M,...p,...M,...m)}let a=new me(s,3),l=new Float32Array(a.count*2);for(let h=0;h<a.count;h++)l[h*2]=a.getY(h)*2.8,l[h*2+1]=a.getX(h)/3;let c=new Ue;c.setAttribute("position",a),c.setAttribute("uv",new Oe(l,2)),c.computeVertexNormals();let u=Ve(c,e,n,0,.66,0);for(let h of[-1,1])for(let d=0;d<22;d++){let p=d/22,g=(d+1)/22,[M,m,f]=o(p,h>0?0:1),[A,L,w]=o(g,h>0?0:1);On(n,e,Me(M,m+.75,f),Me(A,L+.75,w),.065)}return u}function yg(i,t,e,n){let s=[],r=t.timber.clone();r.color.setHex(10914923),r.side=Ne;let o=12,a=[{x:-37,lane:10.5},{x:46,lane:-10.9},...n.filter(l=>l.extra)];for(let l=0;l<o+a.length;l++){let c=new Xe,u=l%3===1?11.2:7.6+e()*2.6,h=l%3===1?3.5:2.25+e()*.58;vg(u,h,r,c);for(let D=0;D<Math.floor(u/.29);D++){let U=-u*.47+D*.29;if(U>u*.47)continue;let G=Math.pow(.08+.92*Math.sin(Math.PI*(U/u+.5)),.7);Ve(_n,t.oldwood,c,U,.68,0,.27,.14,h*G*.96)}Ve(_n,t.beam,c,-u*.45,.83,0,.28,.36,h*.36),Ve(_n,t.beam,c,u*.45,.91,0,.31,.37,h*.38);for(let D of[-1,1])for(let U=-2;U<3;U++)Ve(_n,t.oldwood,c,U*u*.15,.87,D*h*.44,.12,.55,.12),U<2&&On(c,t.oldwood,Me(U*u*.15,1.09,D*h*.44),Me((U+1)*u*.15,1.09,D*h*.44),.046);for(let D=0;D<12;D++){let U=u*(-.33+e()*.68),G=(e()-.5)*h*.61,S=D%3===0?t.oldwood:t.straw;Ve(D%3?En:_n,S,c,U,.87+e()*.16,G,.27+e()*.31,.31+e()*.13,.33+e()*.31)}if(l%3!==1){let D=.41*u,U=h*.42,G=new mn(U,U,D,16,1,!0,0,Math.PI);Ve(G,t.straw,c,-.27,1.17,0).rotation.set(0,Math.PI/2,Math.PI/2);for(let b=0;b<6;b++){let H=Ve(zc,t.oldwood,c,-D*.52+b*D/5,1.16,0,U*.99,U*.99,.57);H.rotation.y=Math.PI/2,H.geometry=new ps(1,.041,6,16,Math.PI)}}let d=new Xe;d.position.set(u*.16,.72,0),c.add(d);let p=l%3===1?6.2:4.6;if(On(d,t.beam,Me(0,0,0),Me(0,p,0),.08),l%2===0||l%3===1){let D=h*1.19,U=new Sn(D,p*.65,12,14),G=U.attributes.position;for(let b=0;b<G.count;b++){let H=G.getX(b),X=G.getY(b),J=.4*Math.cos(H/D*Math.PI)*Math.cos(X/(p*.65)*Math.PI*.7);G.setZ(b,J+.045*Math.sin(X*8))}U.computeVertexNormals();let S=t.linen.clone();S.side=Ne,Ve(U,S,d,-.12,p*.6,.016).rotation.y=Math.PI/2;for(let b=0;b<7;b++){let H=p*(.268+b*.109);On(d,t.oldwood,Me(-.13,H,-D*.52),Me(-.13,H,D*.52),.031)}}On(d,t.beam,Me(0,p-.16,0),Me(0,p-.09,.64),.035);let g=new Xe;g.position.set(-u*.37,.92,-h*.38),c.add(g),On(g,t.oldwood,Me(.28,.77,.08),Me(-1.52,-.51,-1.77),.055),Ve(_n,t.timber,g,-1.44,-.46,-1.67,.7,.075,.2).rotation.set(-.18,-.67,.36);let m=Ve(_n,t.oldwood,c,-u*.5,.22,0,.58,1.25,.125);m.rotation.z=.23;let f=a[l-o],A=!!f,L=l%2===0?1:-1;A&&(d.rotation.z=-1.42),Gi(d),Gi(g),Gi(c,[m]),i.add(c);let w=Mg(i,u,h),B=A?f.lane??f.z-Ze(f.x)-f.side*(f.width/2+h/2+.25):L*4.1;s.push({root:c,mast:d,oar:g,rudder:m,wake:w,length:u,docked:A,route:L,lane:B,speed:L>0?1.16:1.02,start:A?f.x:-177+l*374/o,phase:e()*ri})}return s}function Mg(i,t,e){let n=new Xe,s=new Ue,r=[],o=[];for(let c of[-1,1])for(let u=0;u<14;u++){let h=u/14,d=(u+1)/14,p=(m,f)=>[-t*.38-m*t*1.19,0,c*(e*.2+e*1.31*m)+f],g=.03+.32*h,M=.03+.32*d;r.push(...p(h,-g),...p(d,-M),...p(h,g),...p(d,-M),...p(d,M),...p(h,g)),o.push(h,0,d,0,h,1,d,0,d,1,h,1)}s.setAttribute("position",new me(r,3)),s.setAttribute("uv",new me(o,2));let a={value:0},l=new Ke({side:Ne,transparent:!0,depthWrite:!1,uniforms:{time:a},vertexShader:"varying vec2 waveUv; void main(){ waveUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec2 waveUv; uniform float time; void main(){ float d=sin(waveUv.y*3.14159)*pow(1.0-waveUv.x,1.45); float foam=.25+.75*pow(max(0.0,sin(69.0*waveUv.x-2.3*time)),2.0); gl_FragColor=vec4(.86,.87,.72,d*foam*.39); }"});return n.add(new Se(s,l)),n.position.y=_r+.015,n.userData.time=a,i.add(n),n}var bg=[[[-148,22],[-129,24],[-109,22],[-82,19],[-72,18],[-86,20],[-110,24],[-131,26]],[[-47,18.4],[-36,16.5],[-30,15.6],[-27,17.9],[-34,19.3],[-44,20.1]],[[-42,19.8],[-27,20],[-14,22],[-6,22],[-6,9],[-6,-4],[-6,-20],[-2,-23],[11,-23],[25,-25],[28,-24],[21,-22],[6,-21],[-2,-22],[-2,-4],[-2,10],[-2,22],[-12,23],[-27,21.2]],[[4,-24.9],[16,-24.6],[31,-25.7],[47,-25],[60,-25],[75,-24.6],[92,-25.9],[108,-25.4],[129,-25],[143,-25],[155,-26],[142,-27],[127,-24],[105,-23],[89,-23],[69,-23],[48,-23],[26,-22],[12,-22]],[[29,-27],[44,-27.7],[46,-29.8],[46,-31.1],[48,-31.7],[51,-30.8],[52,-27.2],[61,-26],[69,-26],[78,-26],[58,-25.6],[45,-26],[35,-26]],[[118,-25],[128,-27],[129,-40],[130,-56],[129,-62],[131,-65],[131,-51],[130,-36],[131,-28],[145,-26],[152,-24],[135,-24]],[[7,23],[14,22.4],[24,22.5],[48,24.2],[59,26],[47,26],[25,25.2],[17,24.7],[8,24.6]]];function yr(i){let t=[],e=0;for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=Math.hypot(r[0]-s[0],r[1]-s[1]);t.push({a:s,b:r,from:e,to:e+o,distance:o}),e+=o}return{length:e,segments:t}}function Sg(i,t){let e=t%i.length,n=i.segments.find(r=>e>=r.from&&e<r.to)??i.segments[0],s=(e-n.from)/n.distance;return[re.lerp(n.a[0],n.b[0],s),re.lerp(n.a[1],n.b[1],s),Math.atan2(n.b[0]-n.a[0],n.b[1]-n.a[1])]}function Tg(i,t){let e=new St(11232848),n=(o,a)=>({guard:!0,style:0,scale:.98+o%3*.018,shade:e,faces:new St(t[o%t.length]),payload:0,phase:o*.37,...a}),s=i.gatePosts.map((o,a)=>n(a,{post:o,speed:0})),r=[[[27,-24.95],[33,-24.95],[43,-25.08],[59,-25.4],[76,-25.3],[89,-25.55],[99.7,-25.55],[100.3,-23.8],[86,-23.25],[69,-23.3],[55,-23.45],[37,-23.5],[27.4,-23.7]],[[111,-25.45],[121,-25.45],[129.3,-27.55],[130.1,-35.5],[129.4,-44.3],[130,-48.65],[131.1,-46.75],[131.25,-40],[131.1,-34],[132.15,-29.6],[133.25,-25.8],[131,-23.55],[120,-23.55],[111,-23.5]],[[-109,19.8],[-99,19.35],[-91,19.1],[-81,17.65],[-73,16.96],[-63,17.2],[-60,18.55],[-67,20],[-76,21.15],[-89,21.15],[-98,21.22],[-106,21.12]],[[-55,18.82],[-47,18.25],[-40,18.18],[-34,18.35],[-27,18.61],[-23,18.91],[-23.1,20.22],[-29,20.09],[-37,20.08],[-44,20.14],[-51,20.29],[-54.6,20.28]]];for(let[o,a]of r.entries()){let l=new fs(a.map(([u,h])=>Me(u,0,h)),!0,"centripetal"),c=l.getLength();for(let u=0;u<4;u++)s.push(n(u,{patrol:{route:l,length:c,lead:[8.2,27.4,28.2,23][o]-Math.floor(u/2)*1.28,side:u%2===0?-.41:.41},walking:!0,speed:[1.07,1.01,.99,.96][o]}))}return s}function wg(i,t,e,n,s,r,o,a){let l=bg.map(yr),c=[],u=s?[6,8,13,17,7,7,7]:[10,12,24,29,9,12,11],h=[10457715,12298628,8615014,7439720,13150590,11366240,6586246,11966849,9666179,12424029,6585699],d=[12094569,11962985,12950907,11502690,13278334],p=new Map;function g(C,Tt,mt){p.set(C,{geometry:Tt,material:mt,used:0})}let M=e.linen.clone();M.color.setHex(15985117);let m=new Un({color:16777215,roughness:.81});g("head",En,m),g("nose",En,m),g("neck",qn,m),g("ears",En,m),g("eyes",En,e.black),g("hand",En,m),g("hat",Dh,e.black),g("hair",En,e.black),g("feet",En,e.beam),g("hem",Uh,M),g("top",Mr,M),g("arms",_g,M),g("calves",qn,M),g("collar",qn,e.paleCeramic),g("belt",qn,e.beam),g("pole",qn,e.oldwood),g("parcel",En,e.straw),g("cargoBox",_n,e.oldwood),g("cargoJar",Mr,e.paleCeramic),g("hoe",_n,e.iron),g("basket",Mr,e.straw),g("rope",qn,e.oldwood);let f=new Un({color:7829871,roughness:.77,metalness:.26});g("helmet",Dh,f),g("helmetRim",qn,f),g("chinGuard",_n,f),g("armouredCoat",Mr,f),g("armourBand",qn,f),g("pauldron",En,f),g("spearHead",xg,f);for(let C=0;C<l.length;C++)for(let Tt=0;Tt<u[C];Tt++){let mt=.86+n()*.21;Tt%7===0&&C>=2?c.push({route:l[C],started:l[C].length*(Tt+.25)/u[C],speed:.72+n()*.17,walking:!0,style:Tt%3,scale:.92+n()*.13,shade:new St(h[Math.floor(n()*h.length)]),faces:new St(d[Math.floor(n()*d.length)]),p:C,payload:2,phase:n()*ri}):c.push({route:l[C],started:l[C].length*(Tt+n()*.9)/u[C],speed:.56+n()*.69,walking:!0,style:Tt%3,scale:mt,shade:new St(h[Math.floor(n()*h.length)]),faces:new St(d[Math.floor(n()*d.length)]),p:C,payload:Tt%4===0?1:0,phase:n()*ri})}let A=yr([[-5.35,25],[-5.35,-22.8],[-4,-24.4],[-2.65,-22.8],[-2.65,24],[-4,25.8]]),L=s?7:12;for(let C=0;C<L;C++)c.push({route:A,started:A.length*(C+.42)/L,speed:.94+C%3*.045,walking:!0,style:C%3,scale:.89+C%4*.038,shade:new St(h[(C+3)%h.length]),faces:new St(d[C%d.length]),p:2,payload:C%4===0?2:C%3===0?1:0,phase:C*1.69});let w=yr([[-36.52,7.29],[-36.52,12.36],[-34.9,15.1],[-32.5,18.7],[-32.15,18.44],[-35.3,15.2],[-36.52,12.6],[-36.52,9.4]]);for(let C=0;C<2;C++)c.push({route:w,started:w.length*(.19+C*.49),speed:.7,walking:!0,delivery:!0,style:C,scale:.94+C*.044,shade:new St(h[1+C*3]),faces:new St(d[C]),payload:0,phase:C*3.2});let B=[[-126,23.3],[-36,14.2],[-30,19.2],[60,-23.2],[97,-22.4],[113,-22.3],[130.4,-48],[125,-42.5],[10.3,25.1]];for(let C=0;C<B.length;C++){let[Tt,mt]=B[C];c.push({x:Tt,z:mt,walking:!1,style:C%3,scale:.86+n()*.17,shade:new St(h[C%h.length]),faces:new St(d[C%d.length]),p:3,payload:C%4===0?1:0,phase:n()*ri})}for(let[C,Tt]of t.trades.entries()){let mt=20+C%5*2.2,yt=(C*.38197+.33)%1;for(let _t of[!1,!0])c.push({stand:Tt,buyer:_t,cycle:mt,offset:yt,style:(C+Number(_t))%3,scale:.91+n()*.12,shade:new St(h[(C*3+Number(_t)*5)%h.length]),faces:new St(d[C%d.length]),payload:0,phase:n()*ri,speed:1})}for(let[C,Tt]of r.entries())c.push({boat:Tt,x:0,z:0,walking:!1,style:C%3,scale:.93,shade:new St(h[C%h.length]),faces:new St(d[C%d.length]),payload:0,phase:n()*ri});for(let C of o)c.push({cart:C,walking:!0,style:0,scale:.96,speed:1.05,shade:new St(h[3+C.index]),faces:new St(d[C.index]),payload:0,phase:n()*ri});for(let[C,Tt]of a.entries())c.push({mount:Tt,seated:!0,style:0,scale:.98,shade:new St(h[5+C]),faces:new St(d[C]),payload:0,phase:C*.9,speed:0});function D(C,Tt){let mt=c.length;c.push({x:C.x,z:C.z,speed:0,payload:0,scale:.96,style:mt%3,shade:new St(h[mt%h.length]),faces:new St(d[mt%d.length]),phase:n()*ri,local:C,...Tt})}for(let[C,[Tt,mt]]of[[-128,33],[-132,39],[-144,42],[-111,31],[-104,34],[-96,39],[-147,56],[-69,46],[52,44]].entries())D({x:Tt,z:mt},{farmer:C%3===0?"rake":"hoe",heading:C*.95});for(let C of t.wharves)for(let Tt=0;Tt<3;Tt++){let mt=C.x+(Tt-1)*C.len*.26,yt=C.z,_t=yr([[mt,yt-C.side*C.width*.21],[mt+.34,yt],[mt+1.5,yt+C.side*C.width*.28]]);D({x:mt,z:yt},{porter:Tt+1,walking:!0,route:_t,started:Tt*1.14,speed:.66+Tt*.06})}for(let[C,Tt,mt,yt]of[[2,-24,1.55,.7],[34,-23.7,1.65,.85],[48,-28.15,1.6,.4],[80,-24.8,1.7,.72],[129.5,-45.2,1.35,.82],[147.2,-45.55,1.6,.79],[6,23,1.45,.78]])for(let _t=0;_t<2;_t++)D({x:C,z:Tt},{child:{rx:mt,rz:yt},scale:.56+_t*.1,speed:1.5,phase:_t*1.1+C*.2});for(let{role:C,at:Tt,yaw:mt,points:yt,level:_t,tea:ee,routeOffset:Rt=0}of t.shopStaff)if(yt){let kt=yr(yt.map(he=>[he.x,he.z]));D(yt[0],{role:C,route:kt,level:_t,tea:ee,walking:!0,started:kt.length*Rt,speed:.66})}else D(Tt,{role:C,level:_t,heading:mt,seated:C==="diner"});let U=Tg(t,d);c.push(...U);let G={helmet:1,helmetRim:1,chinGuard:2,armouredCoat:1,armourBand:4,pauldron:2,spearHead:1},S=c.length;for(let[C,Tt]of p){let mt=["hand","arms","calves","feet","collar","basket","rope","ears","eyes"].includes(C)?2:1,yt=G[C]?U.length*G[C]:S*mt+(C==="calves"?a.length*2:0),_t=new Li(Tt.geometry,Tt.material,yt);_t.instanceMatrix.setUsage(Bi),_t.castShadow=!["nose","collar","rope"].includes(C),_t.receiveShadow=!0,_t.frustumCulled=!1,_t.count=0,i.add(_t),Tt.model=_t}let b=new ke,H=new rn,X=Me(0,0,0),J=Me(0,0,0),$=Me(0,0,0),O,Q,dt,q,ut,pt,Et;function Bt(C,Tt,mt){let yt=O.scale;return Me(Q+(C*pt+mt*Et)*yt,dt+Tt*yt,q+(-C*Et+mt*pt)*yt)}function gt(C,Tt,mt,yt,_t,ee,Rt,kt,he=0){let wt=p.get(C);b.position.copy(Bt(Tt,mt,yt)),b.scale.set(_t,ee,Rt).multiplyScalar(O.scale),b.rotation.set(he,ut,0,"YXZ"),b.updateMatrix(),wt.model.setMatrixAt(wt.used,b.matrix),wt.model.setColorAt(wt.used++,kt)}function te(C,Tt,mt,yt,_t){let ee=Bt(...Tt),Rt=Bt(...mt),kt=yt*O.scale;X.copy(Rt).sub(ee),H.setFromUnitVectors(Oc,X.clone().normalize());let he=p.get(C);b.position.copy(ee).lerp(Rt,.5),b.quaternion.copy(H),b.scale.set(kt,X.length(),kt*.85),b.updateMatrix(),he.model.setMatrixAt(he.used,b.matrix),he.model.setColorAt(he.used++,_t)}let Yt=new St(14997691),ct=new St(9668216),at=new St(12559741),Mt=new St(13028301),Xt=new St(9539209),Dt={pot:new St(12173734),bread:new St(14990723),cloth:new St(13407109),fruit:new St(11905126)},Qt=(s?60:86)**2;function we(C,Tt){for(let mt of p.values())mt.used=0;for(O of c){if(O.stand&&Tt&&O.stand.seller.distanceToSquared(Tt)>Qt||O.local&&Tt&&(O.local.x-Tt.x)**2+(O.local.z-Tt.z)**2>Qt)continue;let mt=O.walking,yt=0,_t=!1,ee=0;if(O.child){let Z=C*1.11+O.phase;Q=O.x+Math.cos(Z)*O.child.rx,q=O.z+Math.sin(Z)*O.child.rz,ut=Math.atan2(-Math.sin(Z)*O.child.rx,Math.cos(Z)*O.child.rz),mt=!0}else if(O.post)({x:Q,z:q}=O.post.position),ut=O.post.yaw+.13*Math.sin(C*.61+O.phase);else if(O.patrol){let{route:Z,length:lt,lead:st,side:Ct}=O.patrol,ft=(C*O.speed+st)%lt/lt;Z.getPointAt(ft,J),Z.getTangentAt(ft,$),Q=J.x+$.z*Ct,q=J.z-$.x*Ct,ut=Math.atan2($.x,$.z)}else if(O.mount){let Z=O.mount.root;Q=Z.position.x,q=Z.position.z,ut=Z.rotation.y}else if(O.stand){let{stand:Z,buyer:lt,cycle:st,offset:Ct}=O,ft=(C/st+Ct)%1,Nt=re.smoothstep(ft,.03,.26),Ut=re.smoothstep(ft,.73,.96);if(yt=re.smoothstep(ft,.34,.46)*(1-re.smoothstep(ft,.63,.73)),_t=lt?ft>.55&&ft<.98:ft>=.3&&ft<=.55,lt){let T=Nt-Ut;Q=re.lerp(Z.entry.x,Z.buyer.x,T),q=re.lerp(Z.entry.z,Z.buyer.z,T);let v=ft>.73&&ft<.96;mt=ft>.03&&ft<.26||v,ut=Z.yaw+(v?0:Math.PI)+.13*Math.sin(C*1.15+O.phase)}else({x:Q,z:q}=Z.seller),ut=Z.yaw+.14*Math.sin(C*.77+O.phase)}else if(O.cart){let Z=O.cart.root;ut=Z.rotation.y,Q=Z.position.x-Math.sin(ut)*1.93,q=Z.position.z-Math.cos(ut)*1.93}else if(O.walking){[Q,q,ut]=Sg(O.route,O.started+C*O.speed);let Z=O.delivery?.095:O.porter||O.role?0:Math.sin(O.phase)*.58;if(O.delivery&&(O.payload=(O.started+C*O.speed)%O.route.length<O.route.length*.5?1:0),O.porter&&O.route.segments[1].to>(O.started+C*O.speed)%O.route.length&&(ee=O.porter),O.role==="server"&&(ee=4),Q+=Math.cos(ut)*Z,q-=Math.sin(ut)*Z,O.p===0||O.p===3)for(let{root:lt}of a){let st=Q-lt.position.x,Ct=q-lt.position.z;if(Math.abs(st)>4.5||Math.abs(Ct)>4.5)continue;let ft=Math.cos(lt.rotation.y),Nt=-Math.sin(lt.rotation.y),Ut=st*ft+Ct*Nt,x=-st*Nt+Ct*ft,T=(1-re.smoothstep(Math.abs(x),1.2,4.2))*(1-re.smoothstep(Math.abs(Ut),.25,1.13))*.82*(Ut>=0?1:-1),v=Q+ft*T,R=q+Nt*T;t.walkHeight(v,R)!==null&&!t.isObstacle(v,R,.15)&&(Q=v,q=R)}}else({x:Q,z:q}=O),ut=(O.heading??O.phase)+.15*Math.sin(C*.64+O.phase),O.role&&(yt=(1+Math.sin(C*1.6+O.phase))*.5);if(dt=t.walkHeight(Q,q)??Ie(Q,q),O.level!==void 0&&(dt=O.level),O.post&&(dt=O.post.position.y),O.boat){let Z=O.boat.root;Q=Z.position.x-O.boat.route*O.boat.length*.35,q=Z.position.z,dt=Z.position.y+.82,ut=O.boat.route>0?Math.PI/2:-Math.PI/2}O.mount&&(dt=O.mount.root.position.y+1.06+O.mount.bob),pt=Math.cos(ut),Et=Math.sin(ut);let Rt=C*(4.1+O.speed*.97)+O.phase,kt=O.farmer?(1+Math.sin(C*2.8+O.phase))*.5:0,he=mt?Math.sin(Rt):0,wt=O.seated?-.43+.012*Math.sin(C*2.4+O.phase):O.child?.09*Math.abs(Math.sin(Rt)):mt?.026*Math.cos(Rt*2):.012*Math.sin(C*2.4+O.phase)-yt*(O.buyer?.065:.025)-kt*.21,[z,E]=[O.shade,O.faces],et=O.seated?.38:O.style===1?.79:.63;gt("hem",0,.96-et/2+wt,0,O.style===1?.263:.218,et,.177,z),gt("top",0,1.17+wt,kt*.13,.239,.46,.133,z,.05+kt*.36),gt("belt",0,.962+wt,0,.173,.062,.151,ct),gt("neck",0,1.416+wt,.007,.06,.111,.058,E),gt("head",0,1.548+wt,.012,.101,.122,.096,E);for(let Z of[-1,1])gt("ears",Z*.101,1.542+wt,.018,.021,.035,.02,E),gt("eyes",Z*.044,1.568+wt,.102,.012,.009,.006,ct);if(gt("nose",0,1.54+wt,.108,.032,.027,.028,E),O.guard){gt("helmet",0,1.625+wt,0,.141,.153,.138,Mt),gt("helmetRim",0,1.622+wt,.009,.146,.025,.143,Xt),gt("armouredCoat",0,1.174+wt,0,.252,.366,.157,Xt);for(let Z=0;Z<4;Z++){let lt=.85+wt+Z*.116;gt("armourBand",0,lt,0,.233+Z*.006,.034,.158,Z%2?Mt:Xt)}te("pole",[.309,.11+wt,.255],[.309,2.041+wt,.255],.022,at),gt("spearHead",.309,2.132+wt,.255,.049,.14,.027,Mt)}else gt("hat",0,1.635+wt,.003,.108,.075,.104,ct),O.style===1&&gt("hair",0,1.67+wt,-.082,.061,.075,.067,ct);for(let Z of[-1,1]){let lt=he*Z,st=.067+Math.max(0,-lt)*.095;O.mount?(te("calves",[Z*.14,.53,-.01],[Z*.39,.21,.16],.092,z),te("calves",[Z*.39,.21,.16],[Z*.37,-.185,.02],.06,z),gt("feet",Z*.37,-.2,.072,.074,.063,.116,ct)):(te("calves",[Z*.081,.58,-lt*.016],[Z*.079,st+.055,lt*.16],.067,z),gt("feet",Z*.079,st,lt*.16+.035,.075,.058,.117,ct)),O.guard&&(gt("chinGuard",Z*.121,1.568+wt,-.036,.03,.127,.119,Xt),gt("pauldron",Z*.24,1.339+wt,0,.107,.091,.159,Mt,.13));let Ct=O.farmer?[Z*.15,.87+wt-kt*.14-Z*.14,.27+kt*.18+Z*.21]:ee?[Z*.22,.88+wt,.33]:O.guard&&Z===1?[.309,1.12+wt,.255]:O.mount?[Z*.155,.61,.43]:O.stand&&!mt?[Z*.16,.87+wt+yt*.27,.245+yt*(Z>0?.26:.09)]:O.seated?[Z*.14,.51+yt*.18,.31]:O.role?[Z*.17,.88+wt+yt*.16,.25+yt*.16]:O.cart?[Z*.22,.68+wt,.27]:O.payload===2&&Z===1?[Z*.17,1.43+wt,.12]:[Z*(O.style===1?.191:.252),.854+wt,-lt*.129+.038];te("arms",[Z*.208,1.34+wt,.005],Ct,.092,z),gt("hand",...Ct,.052,.064,.049,E),_t&&Z===1&&gt("parcel",Ct[0],Ct[1]+.06,Ct[2]+.019,.077,.086,.077,Dt[O.stand.goods]),te("collar",[Z*.105,1.396+wt,.087],[-Z*.036,1.216+wt,.123],.021,Yt)}if(O.payload===1&&gt("parcel",.229,.9+wt,.17,.181,.147,.117,at),ee===1&&gt("cargoBox",0,1+wt,.38,.43,.34,.31,at),ee===2&&gt("parcel",0,1+wt,.4,.24,.19,.17,at),ee===3&&gt("cargoJar",0,1.03+wt,.39,.18,.42,.18,Yt),ee===4&&(gt("cargoBox",0,.91+wt,.38,.5,.04,.32,Yt),gt("cargoJar",0,1.02+wt,.38,O.tea?.115:.085,O.tea?.13:.18,O.tea?.115:.085,O.tea?Dt.pot:Yt)),O.farmer){let Z=[.44,.57+wt-kt*.31,.89+kt*.17];if(te("pole",[-.33,1.18+wt,-.23+kt*.18],Z,.024,at),O.farmer==="rake"){gt("hoe",...Z,.34,.047,.045,at);for(let lt of[-.13,-.065,0,.065,.13])gt("hoe",Z[0]+lt,Z[1]-.062,Z[2],.022,.13,.022,at,.24)}else gt("hoe",...Z,.205,.103,.044,Xt,.58)}if(O.payload===2){te("pole",[-.61,1.436+wt,0],[.61,1.427+wt,0],.027,at);for(let Z of[-1,1]){let lt=Z*.55+he*.018;te("rope",[Z*.55,1.42+wt,0],[lt,1+wt,.013],.014,at),gt("basket",lt,.92+wt,.013,.167,.23,.158,at)}}}for(let mt of p.values())mt.model.count=mt.used,mt.model.instanceMatrix.needsUpdate=!0,mt.model.instanceColor&&(mt.model.instanceColor.needsUpdate=!0)}return{update:we,count:c.length}}function Eg(i,t){return[[-40,18,-17,21],[5,-24,89,-25],[111,-25,154,-26],[60,-23,20,-23]].map(([e,n,s,r],o)=>{let a=new Xe,l=[];Ve(_n,t.timber,a,0,.64,.17,1.13,.14,1.62);for(let c of[-1,1]){Ve(_n,t.oldwood,a,c*.51,.86,.6,.09,.32,.86),Ve(_n,t.beam,a,c*.25,.59,-.96,.09,.081,1.67);let u=new Xe;u.position.set(c*.65,.43,.34),a.add(u),Ve(zc,t.beam,u,0,0,0,.43,.43,.43).rotation.y=Math.PI/2,Ve(qn,t.timber,u,0,0,0,.136,.16,.136).rotation.z=Math.PI/2;for(let h=0;h<8;h++){let d=h*ri/8;On(u,t.oldwood,Me(0,0,0),Me(0,.42*Math.cos(d),.42*Math.sin(d)),.026)}l.push(u)}for(let c=0;c<5;c++)Ve(En,t.straw,a,(c%2-.5)*.49,.92+Math.floor(c/4)*.37,.16+c%3*.21,.37,.29,.41);return l.forEach(c=>Gi(c)),Gi(a),i.add(a),{root:a,wheels:l,a:e,b:n,c:s,d:r,phase:o*.29,index:o}})}function Ag(i,t){let e=t.materials,n=[[8,-25.1],[28,-25.7],[58,-25.55],[90,-25.72],[124,-25.8],[153,-26],[157,-24.9],[151,-23.7],[116,-23.7],[85,-23.35],[54,-23.55],[24,-23.45],[11,-23.45]],s=[[-139,24.5],[-123,24.2],[-105,20.2],[-85,19.46],[-77,17.65],[-71,17.65],[-62,18.4],[-54,18.1],[-56,21.3],[-79,22.15],[-95,21.6],[-107,21],[-127,26.5],[-138,27]],r=[8607549,6707539,10053954],o=[9981241,4353124,10515523],a=[n,n,s],l=new K,c=new K,u=new K,h=(d,p,g)=>{u.subVectors(g,p),d.position.copy(p).lerp(g,.5),d.scale.y=u.length(),d.quaternion.setFromUnitVectors(Oc,u.normalize())};return a.map((d,p)=>{let g=new fs(d.map(([J,$])=>Me(J,0,$)),!0,"centripetal"),M=g.getLength(),m=[2.18,1.86,2.38][p],f=[27,166,31][p],A=new Xe,L=new Xe,w=new Xe;A.add(L),i.add(A);let B=new Un({color:r[p],roughness:.91}),D=new Un({color:p===1?8747376:5718839,roughness:.88}),U=new Un({color:3090206,roughness:.94}),G=e.sage.clone();G.color.setHex(o[p]);let S=(J,$,O,Q,dt,q,ut,pt=0,Et=L)=>{let Bt=Ve(En,J,Et,$,O,Q,dt,q,ut);return Bt.rotation.x=pt,Bt};S(B,0,1.08,-.06,.3,.324,.75),S(B,0,1.04,-.55,.275,.337,.328),S(B,0,1.13,.52,.252,.356,.31),S(B,0,1.47,.7,.175,.434,.239,.52),S(B,0,1.68,.88,.131,.275,.162,.55),S(B,0,1.775,1.015,.155,.162,.261,.54),S(D,0,1.603,1.275,.121,.107,.188,.45),S(U,0,1.84,.912,.077,.134,.159,.37);for(let J of[-1,1]){S(B,J*.079,1.986,.986,.036,.138,.051,.24),S(U,J*.078,2.008,1.014,.022,.075,.025,.21),S(U,J*.124,1.777,1.101,.024,.025,.03),S(U,J*.084,1.621,1.411,.029,.019,.021),S(G,J*.267,1.208,-.125,.058,.195,.367),S(e.beam,J*.299,1.06,-.138,.022,.28,.062),On(L,e.beam,Me(J*.096,1.638,1.25),Me(J*.156,1.69,.42),.012),On(L,e.beam,Me(J*.106,1.672,1.25),Me(J*.139,1.86,.981),.016);let $=Ve(zc,e.iron,L,J*.36,.864,.082,.088,.112,.065);$.rotation.y=Math.PI/2}S(G,0,1.383,-.112,.284,.105,.393),S(e.beam,0,1.476,-.083,.214,.104,.271),S(e.timber,0,1.507,.144,.183,.09,.044),S(e.timber,0,1.505,-.304,.183,.09,.054);for(let J=0;J<9;J++)S(U,0,1.87-J*.064,.815-J*.042,.056,.104,.082,.4);w.position.set(0,1.28,-.77),L.add(w),S(U,0,-.15,-.114,.06,.24,.061,.64,w),S(U,0,-.37,-.287,.074,.252,.069,.37,w),S(U,0,-.547,-.377,.059,.183,.052,.43,w),Gi(L),Gi(w);let b=[];for(let J of[!0,!1])for(let $ of[-1,1]){let O=$*.183,Q=J?.507:-.535,dt=Me(O,J?1.076:1.065,Q),q=Me(O,.544,Q),ut=Me(O,.105,Q),pt=On(A,B,dt,q,J?.096:.125,Mr),Et=On(A,B,q,ut,J?.057:.065,Uh),Bt=S(U,O,.073,Q,.064,.072,.108,0,A);b.push({front:J,x:O,z:Q,hip:dt,knee:q,hoof:ut,thigh:pt,calf:Et,foot:Bt,phase:(J?0:Math.PI)+$*Math.PI*.5})}let H={root:A,bob:0,update:X};function X(J){let $=(J*m+f)%M;g.getPointAt($/M,c),g.getTangentAt($/M,l);let{x:O,z:Q}=c;A.position.set(O,t.walkHeight(O,Q)??Ie(O,Q),Q),A.rotation.y=Math.atan2(l.x,l.z);let dt=J*m*4.1+p;H.bob=.027*Math.cos(dt*2),L.position.y=H.bob,w.rotation.y=Math.sin(dt*.52)*.31;for(let q of b){let ut=dt+q.phase,pt=Math.sin(ut),Et=Math.max(0,Math.cos(ut));q.hip.y=(q.front?1.076:1.065)+H.bob,q.knee.set(q.x,.51+Et*.17,q.z+pt*.147+(q.front?-.13:.13)*Et),q.hoof.set(q.x,.128+Et*.2,q.z+pt*.258),h(q.thigh,q.hip,q.knee),h(q.calf,q.knee,q.hoof),q.foot.position.set(q.x,q.hoof.y-.055,q.hoof.z+.027),q.foot.rotation.x=-Et*.42}}return H})}function Nh(i,t,e){let n=Es(1973),s=yg(i,t.materials,n,t.wharves),r=Eg(i,t.materials),o=Ag(i,t),a=wg(i,t,t.materials,n,e,s,r,o);function l(c,u){for(let h of s){let{root:d,mast:p,wake:g,oar:M,rudder:m,length:f,phase:A,route:L,docked:w}=h,B=w?h.start:((h.start+183+c*h.speed*L)%374+374)%374-183,D=Ze(B),U=Math.sin(c*.22+A)*.22,G=D+h.lane+(w?U*.5:U+Math.sin(B*.076+A)*.39),S=.063*Math.sin(c*1.1+A)+.026*Math.cos(c*1.63+A),b=Ze(B+1)-D,H=(L>0?0:Math.PI)-Math.atan(b)*.91;d.position.set(B,_r-.02+S,G),d.rotation.set(Math.sin(c*1.3+A)*.034,H,Math.sin(c*.79+A)*.021,"YXZ");let X=Math.abs(B-Ge),J=1-re.smoothstep(X,8.5+f*.24,21);w||(p.rotation.z=-L*J*1.48),M.rotation.y=Math.sin(c*1.7+A)*.25,M.rotation.z=.09*Math.cos(c*1.7+A),m.rotation.y=.12*Math.sin(c*.49+A),g.position.x=B,g.position.z=G,g.rotation.y=H,g.visible=!w,g.userData.time.value=c}for(let h of r){let{root:d,wheels:p,a:g,b:M,c:m,d:f,phase:A,index:L}=h,w=Math.hypot(m-g,f-M),B=(c*(1+L*.05)/w+A)%2,D=B<1,U=D?B:2-B,G=re.lerp(g,m,U),S=re.lerp(M,f,U);d.position.set(G,t.walkHeight(G,S)??Ie(G,S),S),d.rotation.y=Math.atan2(m-g,f-M)+(D?0:Math.PI),p.forEach(b=>b.rotation.x=c*2.3)}for(let h of o)h.update(c);a.update(c,u)}return{update:l,boats:s,carts:r,mounts:o,headcount:a.count}}var ma=class extends Se{constructor(t,e={}){super(t),this.isWater=!0;let n=this,s=e.textureWidth!==void 0?e.textureWidth:512,r=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,u=e.sunDirection!==void 0?e.sunDirection:new K(.70707,.70707,0),h=new St(e.sunColor!==void 0?e.sunColor:16777215),d=new St(e.waterColor!==void 0?e.waterColor:8355711),p=e.eye!==void 0?e.eye:new K(0,0,0),g=e.distortionScale!==void 0?e.distortionScale:20,M=e.side!==void 0?e.side:Pn,m=e.fog!==void 0?e.fog:!1,f=new Mn,A=new K,L=new K,w=new K,B=new xe,D=new K(0,0,-1),U=new Te,G=new K,S=new K,b=new Te,H=new xe,X=new $e,J=new bn(s,r),$={name:"MirrorShader",uniforms:pr.merge([At.fog,At.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new xe},sunColor:{value:new St(8355711)},sunDirection:{value:new K(.70707,.70707,0)},eye:{value:new K},waterColor:{value:new St(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},O=new Ke({name:$.name,uniforms:pr.clone($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,lights:!0,side:M,fog:m});O.uniforms.mirrorSampler.value=J.texture,O.uniforms.textureMatrix.value=H,O.uniforms.alpha.value=a,O.uniforms.time.value=l,O.uniforms.normalSampler.value=c,O.uniforms.sunColor.value=h,O.uniforms.waterColor.value=d,O.uniforms.sunDirection.value=u,O.uniforms.distortionScale.value=g,O.uniforms.eye.value=p,n.material=O,n.onBeforeRender=function(Q,dt,q){if(L.setFromMatrixPosition(n.matrixWorld),w.setFromMatrixPosition(q.matrixWorld),B.extractRotation(n.matrixWorld),A.set(0,0,1),A.applyMatrix4(B),G.subVectors(L,w),G.dot(A)>0)return;G.reflect(A).negate(),G.add(L),B.extractRotation(q.matrixWorld),D.set(0,0,-1),D.applyMatrix4(B),D.add(w),S.subVectors(L,D),S.reflect(A).negate(),S.add(L),X.position.copy(G),X.up.set(0,1,0),X.up.applyMatrix4(B),X.up.reflect(A),X.lookAt(S),X.far=q.far,X.updateMatrixWorld(),X.projectionMatrix.copy(q.projectionMatrix),H.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),H.multiply(X.projectionMatrix),H.multiply(X.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(A,L),f.applyMatrix4(X.matrixWorldInverse),U.set(f.normal.x,f.normal.y,f.normal.z,f.constant);let ut=X.projectionMatrix;b.x=(Math.sign(U.x)+ut.elements[8])/ut.elements[0],b.y=(Math.sign(U.y)+ut.elements[9])/ut.elements[5],b.z=-1,b.w=(1+ut.elements[10])/ut.elements[14],U.multiplyScalar(2/U.dot(b)),ut.elements[2]=U.x,ut.elements[6]=U.y,ut.elements[10]=U.z+1-o,ut.elements[14]=U.w,p.setFromMatrixPosition(q.matrixWorld);let pt=Q.getRenderTarget(),Et=Q.xr.enabled,Bt=Q.shadowMap.autoUpdate;n.visible=!1,Q.xr.enabled=!1,Q.shadowMap.autoUpdate=!1,Q.setRenderTarget(J),Q.state.buffers.depth.setMask(!0),Q.autoClear===!1&&Q.clear(),Q.render(dt,X),n.visible=!0,Q.xr.enabled=Et,Q.shadowMap.autoUpdate=Bt,Q.setRenderTarget(pt);let gt=q.viewport;gt!==void 0&&Q.state.viewport(gt)}}};function Fh(i,t,e,n){let s=new K,r=new St(7714013),o=new St(13229016),a=new Se(new mi(255,36,22),new Ke({side:je,depthWrite:!1,fog:!1,uniforms:{sunVector:{value:s},skyTop:{value:r},skyHorizon:{value:o},clock:{value:0}},vertexShader:`
      varying vec3 direction;
      void main(){
        direction=position;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
      }
    `,fragmentShader:`
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
    `}));a.renderOrder=-10,a.frustumCulled=!1,i.add(a),i.fog=new Js(13950673,.0052);let l=new sr(14741495,10126689,1.82),c=new or(16769706,2.68);c.castShadow=!0;let u=n?51:63;c.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(c.shadow.camera,{left:-u,right:u,top:u,bottom:-u,near:8,far:208}),c.shadow.camera.updateProjectionMatrix(),c.shadow.normalBias=.035,c.shadow.bias=-22e-5,c.shadow.radius=2,i.add(l,c,c.target);let h=new ma(new Sn(543,65),{textureWidth:n?320:768,textureHeight:n?240:480,waterNormals:e.waterNormal,sunDirection:s,sunColor:16573366,waterColor:6387024,distortionScale:2.85,clipBias:.018,fog:!0});h.rotation.x=-Math.PI/2,h.position.set(4,_r,0),h.material.uniforms.size.value=1.55,h.material.fragmentShader=h.material.fragmentShader.replace("float rf0 = 0.3;","float rf0 = 0.17;").replace("vec3 outgoingLight = albedo;","vec3 outgoingLight = albedo * ( .93 + .11 * sin(worldPosition.x * 6.4 + sin(worldPosition.z * 2.2) + time * 2.9) * sin(worldPosition.z * 7.0 + sin(worldPosition.x * 3.0) - time) );"),h.receiveShadow=!0,i.add(h);let d=h.onBeforeRender,p=0,g=new K(999,0,0),M=new rn;h.onBeforeRender=function(...$){let O=$[2];(p++%(n?4:3)===0||g.distanceToSquared(O.position)>1.1||Math.abs(M.dot(O.quaternion))<.9996)&&(g.copy(O.position),M.copy(O.quaternion),d.apply(this,$))};let m=[[-89,4.5,27],[70,5.2,-34],[133,3.7,-54],[57,4.2,-37]],f=m.length*7,A=new Float32Array(f*3),L=new Float32Array(f),w=new Float32Array(f),B=new Ue;B.setAttribute("position",new Oe(A,3).setUsage(Bi)),B.setAttribute("size",new Oe(L,1).setUsage(Bi)),B.setAttribute("fade",new Oe(w,1).setUsage(Bi));let D=new Ks(B,new Ke({transparent:!0,depthWrite:!1,vertexShader:`
      attribute float size; attribute float fade; varying float opacity;
      void main(){
        opacity=fade;
        vec4 view=modelViewMatrix*vec4(position,1.);
        gl_Position=projectionMatrix*view;
        gl_PointSize=clamp(size*460./max(-view.z,1.),3.,62.);
      }
    `,fragmentShader:`
      varying float opacity;
      void main(){
        float d=length(gl_PointCoord-.5);
        gl_FragColor=vec4(.89,.865,.80,(1.-smoothstep(.02,.5,d))*opacity);
      }
    `}));D.frustumCulled=!1,i.add(D);let U=[],G=new Pi({color:3817010,side:Ne,fog:!0}),S=new Ue;S.setAttribute("position",new me([0,0,.15,.43,.025,-.022,.12,0,-.13,0,0,.15,.12,0,-.13,0,0,-.098],3));for(let $=0;$<(n?7:11);$++){let O=new Xe,Q=new Se(S,G),dt=new Se(S,G);dt.scale.x=-1,O.add(dt,Q),i.add(O),U.push({group:O,left:dt,right:Q})}let b="",H="",X=new K;function J($,O,Q,dt){a.position.copy(Q.position),a.material.uniforms.clock.value=$;let ut=re.clamp((O-8.1)/8.8,0,1),pt=Math.sin(Math.PI*(.2+ut*.59)),Et=.36+ut*2.12;s.set(Math.cos(Et)*(.79+ut*.15),.46+pt*.81,Math.sin(Et)).normalize();let Bt=Math.round(O*45).toString();if(Bt!==H&&(c.color.setHSL(.106,.58+(1-pt)*.09,.83+(pt-.5)*.07),c.intensity=2.3+pt*.59,l.intensity=1.48+pt*.28,r.setRGB(.105+pt*.033,.312+pt*.085,.62+pt*.1),o.setRGB(.51+(1-pt)*.09,.655,.745),i.fog.color.setRGB(.62,.73,.76),H=Bt),dt%4===0||dt===1){let gt=Q.getWorldDirection(X),te=Math.round((Q.position.x+gt.x*24)/8)*8,Yt=Math.round((Q.position.z+gt.z*24)/8)*8,ct=te+"/"+Yt+"/"+Bt,at=ct!==b;at&&(c.target.position.set(te,0,Yt),c.position.copy(c.target.position).addScaledVector(s,86),b=ct),(at||dt%(n?12:8)===0)&&(t.shadowMap.needsUpdate=!0)}h.material.uniforms.time.value=$*.77;for(let gt=0;gt<f;gt++){let[te,Yt,ct]=m[Math.floor(gt/7)],at=($*.17+gt%7/7)%1;A[gt*3]=te+at*3.6+.37*Math.sin(gt+at*6),A[gt*3+1]=Yt+at*5.13,A[gt*3+2]=ct+Math.sin(at*3+gt)*(.25+at*.7)+at*.6,L[gt]=.41+at*2.1,w[gt]=Math.sin(at*Math.PI)*.13*(1-at*.65)}for(let gt of["position","size","fade"])B.attributes[gt].needsUpdate=!0;for(let gt=0;gt<U.length;gt++){let{group:te,left:Yt,right:ct}=U[gt],at=$*.054+gt*.045,Mt=gt%4*.91,Xt=-14+Math.sin(at)*46+Mt*2,Dt=-5+Math.cos(at)*20+Mt;te.position.set(Xt,17.6+Math.sin(at*1.6+gt*.14)*2.2+Mt*.38,Dt),te.rotation.y=Math.atan2(Math.cos(at)*46,-Math.sin(at)*20);let Qt=Math.sin($*6.7+gt*.77)*.67;Yt.rotation.z=Qt,ct.rotation.z=-Qt}}return{update:J,river:h}}function Bh(i,t){let e,n=!0,s=0,r=new AbortController,o={field:[390,.078,0,.026],river:[490,.105,.06,.014],dock:[650,.065,.41,.006],market:[850,.028,.65,0],shop:[540,.016,.43,0],tavern:[630,.012,.69,0],lane:[470,.041,.13,.012]};function a(){let M=new AudioContext,m=M.createBuffer(1,M.sampleRate*9,M.sampleRate),f=m.getChannelData(0),A=0;for(let D=0;D<f.length;D++)A=A*.83+(Math.random()*2-1)*.15,f[D]=A;let L=M.createGain();L.gain.value=0,L.connect(M.destination);function w(D,U,G){let S=M.createBufferSource(),b=M.createBiquadFilter(),H=M.createGain();return S.buffer=m,S.loop=!0,S.playbackRate.value=G,b.type=D,b.frequency.value=U,H.gain.value=0,S.connect(b).connect(H).connect(L),S.start(Math.random()*1.2),{filter:b,gain:H}}let B=w("lowpass",510,1.22);return{audio:M,noise:m,output:L,wind:B,crowd:null,crowdLoading:null}}async function l(M){let{audio:m,output:f}=M,A=await fetch("./assets/market-ambience.mp3");if(!A.ok)throw new Error("Market ambience failed to load");let L=await m.decodeAudioData(await A.arrayBuffer()),w=m.createBufferSource(),B=m.createBiquadFilter(),D=m.createGain();w.buffer=L,w.loop=!0,B.type="lowpass",B.Q.value=.15,B.frequency.value=900,D.gain.value=0,w.connect(B).connect(D).connect(f),w.start(),M.crowd={filter:B,gain:D}}function c(){i.setAttribute("aria-pressed",String(n)),i.setAttribute("aria-label",n?"\u5173\u95ED\u73AF\u5883\u97F3":"\u5F00\u542F\u73AF\u5883\u97F3"),t.textContent=n?e?.audio.state==="running"?"\u73AF\u5883\u97F3\u5DF2\u5F00":"\u73AF\u5883\u97F3\u5F85\u64AD\u653E":"\u73AF\u5883\u97F3"}async function u(){if(n)try{e??=a(),e.output.gain.setTargetAtTime(.72,e.audio.currentTime,.12),await e.audio.resume(),e.audio.state==="running"&&(r.abort(),e.crowdLoading??=l(e).catch(()=>{e.crowdLoading=null})),c()}catch{c()}}for(let M of["pointerdown","pointerup","touchend","keydown","click"])window.addEventListener(M,m=>{!m.isTrusted||i.contains(m.target)||M==="pointerdown"&&m.pointerType!=="mouse"||M==="pointerup"&&m.pointerType==="mouse"||u()},{capture:!0,signal:r.signal});i.addEventListener("click",()=>{n=!n,n?u():e&&e.output.gain.setTargetAtTime(0,e.audio.currentTime,.12),c()}),c(),u();function h(M,m,f){let{audio:A,output:L}=e,w=A.createOscillator(),B=A.createGain();w.frequency.setValueAtTime(M,f),w.frequency.exponentialRampToValueAtTime(M*1.43,f+.057),B.gain.setValueAtTime(1e-4,f),B.gain.exponentialRampToValueAtTime(m,f+.024),B.gain.exponentialRampToValueAtTime(1e-4,f+.083),w.connect(B).connect(L),w.start(f),w.stop(f+.085)}let d=5.1,p=1.1;function g(M,m,f,A){if(!n||e?.audio.state!=="running"||document.hidden)return;let[L,w,B,D]=o[M]??o.river,{audio:U,output:G,noise:S}=e,b=U.currentTime;if(e.wind.filter.frequency.setTargetAtTime(L,b,.35),e.wind.gain.gain.setTargetAtTime(w*(.77+.15*Math.sin(b*.8)+.11*Math.cos(b*.31)),b,.4),e.crowd&&(e.crowd.filter.frequency.setTargetAtTime(L*1.9,b,.65),e.crowd.gain.gain.setTargetAtTime(B,b,.8)),M==="dock"&&(p-=A),p<=0){let H=U.createBufferSource(),X=U.createBiquadFilter(),J=U.createGain();H.buffer=S,X.type="lowpass",X.frequency.value=360,X.Q.value=.2,J.gain.setValueAtTime(.001,b),J.gain.exponentialRampToValueAtTime(.1,b+.024),J.gain.exponentialRampToValueAtTime(.001,b+.19),H.connect(X).connect(J).connect(G),H.start(b,Math.random()*7,.2),p=4+Math.random()*6}if(m&&b-s>.4){let H=U.createBufferSource(),X=U.createBiquadFilter(),J=U.createGain();H.buffer=S,X.type="lowpass",X.frequency.value=f?285:390,J.gain.setValueAtTime(.15,b),J.gain.exponentialRampToValueAtTime(.001,b+.16),H.connect(X).connect(J).connect(G),H.start(b,Math.random()*7,.17),s=b}if(d-=A,d<=0){let H=1390+Math.random()*520;if(D>0)for(let X=0;X<3;X++)h(H+X*87,D*(.4+Math.random()*.28),b+X*.14);d=6+Math.random()*9}}return{update:g}}var Pt=i=>document.getElementById(i),zn=Pt("experience"),an=Pt("world"),Cg=Bh(Pt("sound"),Pt("sound-label")),br=matchMedia("(prefers-reduced-motion: reduce)"),Rg=matchMedia("(pointer: coarse)"),kn=Rg.matches||innerWidth<680,Cs=re.clamp,kc=i=>String(i).padStart(2,"0"),yi=(i,t,e)=>new K(i,t,e),ga=[...We.flatMap(i=>[[i.x,i.z],...i.path])],Oh=[{stop:1,point:yi(-31,.6,-4),button:null},{stop:3,point:yi(Ge,7.5,.7),button:null},{stop:4,point:yi(28,4.5,-25.2),button:null},{stop:7,point:yi(98,11,-24),button:null}];async function Ig(){let i=new fa({canvas:an,antialias:!kn,alpha:!1,powerPreference:"high-performance"}),t=new $s,e=new $e(kn?64:52,1,.12,340),n={value:0};i.setClearColor(12768452),i.outputColorSpace=ze,i.toneMapping=To,i.toneMappingExposure=1.08,i.shadowMap.enabled=!0,i.shadowMap.autoUpdate=!1,i.shadowMap.type=ar;let s=Rh(),r=Ih(t,s,n),o=Fh(t,i,s,kn),a=Nh(t,r,kn);i.compile(t,e);let l=new Set,c={id:null,x:0,y:0},u={id:null,x:0,y:0},h=yi(0,0,0),d=yi(0,0,0),p=yi(0,0,0),g=Pt("map-view"),M=Pt("map"),m=M.getContext("2d"),f=!1,A="scenic",L=0,w=-1,B=0,D=0,U=null,G=br.matches,S=0,b=2.4,H=0,X=0,J="",$=!1,O=null,Q,dt,q=[],ut=[],pt={area:"\u57CE\u5899\u6B65\u9053",name:"\u57CE\u95E8\u697C",note:"\u6276\u5899\u53EF\u671B\u89C1\u8857\u5E02\u4E0E\u6C74\u6CB3\u3002\u95E8\u697C\u4ECE\u5185\u5ECA\u8FDB\u5165\uFF0C\u6848\u4E0A\u94FA\u7740\u6C74\u4EAC\u6C34\u9646\u56FE\u3002"},Et,Bt={west:-155,east:174,north:-68,south:55},gt=y=>(y-Bt.west)/(Bt.east-Bt.west),te=y=>(y-Bt.north)/(Bt.south-Bt.north),Yt=[];for(let y=1;y<ga.length;y++){let[_,N]=ga[y-1],[V,k]=ga[y],F=Math.hypot(V-_,k-N);for(let W=0;W<=Math.ceil(F);W++){let Y=W/Math.max(1,Math.ceil(F)),nt=re.lerp(_,V,Y),ht=re.lerp(N,k,Y);if(r.walkHeight(nt,ht)===null||r.isObstacle(nt,ht,.16)){Yt.push([y,+nt.toFixed(2),+ht.toFixed(2)]);break}}}Yt.length&&console.warn("Tour route intersects scene geometry",Yt);function ct(){let y=zn.clientWidth,_=zn.clientHeight;e.aspect=y/_,e.fov=y<510?62:52,e.updateProjectionMatrix(),i.setPixelRatio(Math.min(devicePixelRatio,kn?1.05:1.4)),i.setSize(y,_,!1),Pt("map-panel").hidden||et()}new ResizeObserver(ct).observe(zn),ct();function at(y,_,N=!1){let V=document.createElement("button");V.type="button",V.className=N?"":"route-stop";let k=document.createElement("b");return k.textContent=kc(_+1),k.setAttribute("aria-hidden","true"),V.append(k,document.createTextNode(y.name)),V.addEventListener("click",()=>{lt(!1),_t(()=>mt(_,!1))}),V}We.forEach((y,_)=>{let N=document.createElement("li"),V=at(y,_);N.append(V),Pt("route").append(N),q.push(V);let k=document.createElement("li"),F=at(y,_,!0);k.append(F),Pt("map-list").append(k);let W=document.createElement("button");W.type="button",W.className="map-dot",W.title=y.name,W.setAttribute("aria-label",y.name),W.textContent=String(_+1),W.style.left=gt(y.x)*100+"%",W.style.top=te(y.z)*100+"%",W.addEventListener("click",()=>F.click()),Pt("map-pins").append(W),ut.push([F,W])});for(let y of Oh){let _=document.createElement("button");_.type="button",_.className="world-label",_.textContent=We[y.stop].name,_.addEventListener("click",()=>_t(()=>mt(y.stop,!1))),Pt("labels").append(_),y.button=_}function Mt(){if(A!=="scenic"||kn)return;let y=zn.clientWidth,_=zn.clientHeight;for(let N of Oh){let V=d.copy(N.point).project(e),k=(V.x+1)/2*y,F=(1-V.y)/2*_,W=Pt("intro").getBoundingClientRect(),Y=k>W.left-8&&k<W.right+32&&F>W.top-30&&F<W.bottom+12;N.button.hidden=V.z<-.92||V.z>1||k<22||k>y-94||F<92||F>_-150||Y,N.button.hidden||(N.button.style.transform="translate3d("+k.toFixed(1)+"px,"+F.toFixed(1)+"px,0)")}}function Xt(y){!y||Et===y||(Et=y,Pt("place-area").textContent=y.area,Pt("place-name").textContent=y.name,Pt("place-note").textContent=y.note)}function Dt(y,_=!1){w!==y&&(w=y,Xt(We[y]),q.forEach((N,V)=>{let k=V===y;for(let F of[N,...ut[V]])k?F.setAttribute("aria-current","location"):F.removeAttribute("aria-current");if(k&&_){let F=Pt("route"),W=N.offsetLeft;(W<F.scrollLeft||W+N.offsetWidth>F.scrollLeft+F.clientWidth)&&F.scrollTo({left:Math.max(0,W-F.clientWidth/2+N.offsetWidth/2),behavior:br.matches?"instant":"smooth"})}}))}function Qt(){let y=A!=="scenic";zn.classList.toggle("walking",y),Pt("intro").hidden=y,Pt("walk-hud").hidden=!y,Pt("look-help").hidden=!y||kn||A==="tour",Pt("joystick").hidden=!kn||A!=="walk",Pt("take-control").hidden=kn||A!=="walk"||typeof an.requestPointerLock!="function",Pt("tour").hidden=!y,Pt("tour").setAttribute("aria-pressed",String(A==="tour")),Pt("tour").firstElementChild.textContent=A==="tour"?"\u2161 \u7ED3\u675F\u6F2B\u6E38":"\u25B7 \u81EA\u52A8\u6F2B\u6E38",Pt("aim").hidden=document.pointerLockElement!==an,Pt("tour-status").hidden=A!=="tour"}function we(y,_,N){let V=y-h.x,k=_-h.y,F=N-h.z;return[Math.atan2(-V,-F),Math.atan2(k,Math.hypot(V,F))]}function C(y){let _=We[y];h.set(_.x,(r.walkHeight(_.x,_.z)??0)+1.61,_.z),[B,D]=we(..._.look),e.position.copy(h),e.rotation.set(D,B,0,"YXZ"),Dt(y,!0)}function Tt(y){let _=[[We[y].x,We[y].z]],N=new Map([[0,y]]);for(let V=y;V<We.length-1;V++)_.push(...We[V].path,[We[V+1].x,We[V+1].z]),N.set(_.length-1,V+1);return{points:_,events:N,segment:0,progress:0,dwell:1.55}}function mt(y,_){f&&(l.clear(),document.pointerLockElement&&document.exitPointerLock(),A=_?"tour":"walk",C(y),U=_?Tt(y):null,Qt(),an.focus({preventScroll:!0}))}function yt(y=0){document.pointerLockElement&&document.exitPointerLock(),L=y,A="scenic",U=null,l.clear(),Dt(-1),Qt(),Pt("start").focus({preventScroll:!0})}function _t(y){if(!($||!f)){if($=!0,br.matches){y(),$=!1;return}Pt("fade").classList.add("in"),setTimeout(()=>{y(),Pt("fade").classList.remove("in"),$=!1},220)}}function ee(){A==="tour"&&(A="walk",U=null,Qt())}function Rt(y,_,N=.05){let V=!1,k=h.y-1.61;for(let[W,Y]of[[h.x+y,h.z+_],[h.x+y,h.z],[h.x,h.z+_]]){if(Math.abs(W-h.x)+Math.abs(Y-h.z)<1e-4)continue;let nt=r.walkHeight(W,Y,k);if(!(nt===null||r.isObstacle(W,Y,.3,k)||Math.abs(nt-k)>.73)){h.x=W,h.z=Y,V=!0;break}}let F=r.walkHeight(h.x,h.z,k)??0;return h.y=re.lerp(h.y,F+1.61,1-Math.exp(-N*17)),V}function kt(){let y=0,_=1/0;for(let N=0;N<We.length;N++){let V=We[N],k=(V.x-h.x)**2+(V.z-h.z)**2;k<_&&(y=N,_=k)}(_<225||w<0||_<((We[w].x-h.x)**2+(We[w].z-h.z)**2)*.7)&&Dt(y,!0)}function he(y){let _=(l.has("w")||l.has("arrowup")?1:0)-(l.has("s")||l.has("arrowdown")?1:0)+u.y,N=(l.has("d")?1:0)-(l.has("a")?1:0)+u.x;B+=((l.has("arrowleft")?1:0)-(l.has("arrowright")?1:0))*y*1.9;let V=Math.max(Math.hypot(_,N),1),k=(l.has("shift")?6.5:3.3)*y/V,F=Rt((Math.cos(B)*N-Math.sin(B)*_)*k,(-Math.sin(B)*N-Math.cos(B)*_)*k,y);return e.position.copy(h),F&&!br.matches&&(e.position.y+=Math.sin(performance.now()*.011)*.035),e.rotation.set(D,B,0,"YXZ"),kt(),Xt(r.onGateTerrace(h.x,h.z,h.y-1.61)?pt:We[w]),F}function wt(y){let _=U.points[U.segment],N=U.points[U.segment+1],V;if(U.dwell>0)y=Math.min(y,U.dwell),U.dwell-=y,V=we(...We[w].look);else if(N){let W=Math.hypot(N[0]-_[0],N[1]-_[1]);U.progress=Cs(U.progress+y*5.65/Math.max(.01,W),0,1);let Y=re.lerp(_[0],N[0],U.progress),nt=re.lerp(_[1],N[1],U.progress);h.x=Y,h.z=nt;let ht=U.points[U.segment+2]??N,rt=Cs((U.progress-.58)*1.8,0,.78),bt=re.lerp(N[0],ht[0],rt),Ht=re.lerp(N[1],ht[1],rt);V=we(bt,(r.walkHeight(bt,Ht)??0)+1.25,Ht),U.progress===1&&(U.segment++,U.progress=0,U.events.has(U.segment)&&(Dt(U.events.get(U.segment),!0),U.dwell=2.7))}else return ee(),!1;let k=(r.walkHeight(h.x,h.z)??0)+1.67;h.y=re.lerp(h.y,k,1-Math.exp(-y*12));let F=Math.atan2(Math.sin(V[0]-B),Math.cos(V[0]-B));return B+=F*(1-Math.exp(-y*3.4)),D=re.lerp(D,Cs(V[1],-.4,.42),1-Math.exp(-y*4.4)),e.position.copy(h),e.rotation.set(D,B,0,"YXZ"),U.dwell===0}let z=yi(0,0,0);function E(){let y=Fc[L];e.position.set(...y.position),br.matches||(e.position.x+=Math.sin(S*.09)*1.22,e.position.y+=Math.cos(S*.13)*.38),kn&&L===0&&(e.position.x-=10,e.position.z-=4),e.lookAt(z.set(...y.look))}function et(){let y=g.clientWidth,_=g.clientHeight;if(!y||!_)return;let N=Math.min(2,devicePixelRatio);M.width=Math.round(y*N),M.height=Math.round(_*N),m.setTransform(N,0,0,N,0,0);let V=F=>gt(F)*y,k=F=>te(F)*_;m.fillStyle="#e2d9b9",m.fillRect(0,0,y,_),m.strokeStyle="#b7ad9045",m.lineWidth=1;for(let F=0;F<y;F+=23)m.beginPath(),m.moveTo(F,0),m.lineTo(F,_),m.stroke();for(let F=0;F<_;F+=23)m.beginPath(),m.moveTo(0,F),m.lineTo(y,F),m.stroke();m.beginPath();for(let F=Bt.west;F<=Bt.east;F+=1)m.lineTo(V(F),k(Ze(F)-Bn(F)));for(let F=Bt.east;F>=Bt.west;F-=1)m.lineTo(V(F),k(Ze(F)+Bn(F)));m.closePath(),m.fillStyle="#819991",m.fill(),m.strokeStyle="#596c60",m.stroke();for(let F of r.obstacles)F.x1-F.x0<2.2||F.z1-F.z0<2.2||(m.fillStyle=F.x0>101&&F.x1<112?"#836f58":"#a49875",m.fillRect(V(F.x0),k(F.z0),V(F.x1)-V(F.x0),k(F.z1)-k(F.z0)));for(let{paths:F,turn:W,exit:Y}of r.gateStairs){m.fillStyle="#a48b63";for(let nt of[...F,W,Y])m.fillRect(V(nt.x0),k(nt.z0),V(nt.x1)-V(nt.x0),k(nt.z1)-k(nt.z0));m.strokeStyle="#65563e",m.lineWidth=1;for(let nt of F)for(let ht=nt.z0+1.2;ht<nt.z1;ht+=1.4)m.beginPath(),m.moveTo(V(nt.x0),k(ht)),m.lineTo(V(nt.x1),k(ht)),m.stroke()}m.beginPath();for(let[F,W]of ga)m.lineTo(V(F),k(W));if(m.strokeStyle="#f6ecce",m.lineWidth=4,m.stroke(),m.strokeStyle="#934f3c",m.lineWidth=1.3,m.setLineDash([4,3]),m.stroke(),m.setLineDash([]),m.font="bold "+Math.max(11,y*.021)+"px SimSun, serif",m.fillStyle="#f0e8cf",m.fillText("\u6C74\u6CB3",V(-19),k(5)),m.fillStyle="#665b46",m.fillText("\u5317 \u2191",y-34,16),A!=="scenic"){let F=V(h.x),W=k(h.z),Y=-Math.sin(B),nt=-Math.cos(B);m.beginPath(),m.moveTo(F+8*Y,W+8*nt),m.lineTo(F-4*Y+4*nt,W-4*nt-4*Y),m.lineTo(F-4*Y-4*nt,W-4*nt+4*Y),m.closePath(),m.fillStyle="#263d31",m.fill(),m.strokeStyle="#fff5da",m.lineWidth=1,m.stroke(),Q=h.x,dt=h.z}}function Z(){document.pointerLockElement&&document.exitPointerLock(),Pt("map-panel").hidden=!1,Pt("map-button").setAttribute("aria-expanded","true"),et(),Pt("close-map").focus()}function lt(y=!0){Pt("map-panel").hidden||(Pt("map-panel").hidden=!0,Pt("map-button").setAttribute("aria-expanded","false"),y&&Pt("map-button").focus())}let st=["\u5317","\u4E1C\u5317","\u4E1C","\u4E1C\u5357","\u5357","\u897F\u5357","\u897F","\u897F\u5317"],Ct=["\u8FB0\u65F6","\u5DF3\u65F6","\u5348\u65F6","\u672A\u65F6","\u7533\u65F6"];function ft(y){let _=Math.floor(y*60+.002),N=Math.floor(_/60),V=kc(N)+":"+kc(_%60);J!==V&&(Pt("clock").textContent=V,Pt("clock").dateTime=V,Pt("period").textContent=Ct[Cs(Math.floor((N-7)/2),0,4)],Pt("time-range")!==document.activeElement&&(Pt("time-range").value=String(y)),J=V),e.getWorldDirection(z);let k=(Math.round(Math.atan2(z.x,-z.z)/(Math.PI/4))+8)%8;H%12===1&&(Pt("heading-text").textContent=st[k]+" \u2191")}function Nt(){zn.classList.add("ready"),Pt("start").disabled=!1,Pt("intro-tour").disabled=!1,Pt("load-status").textContent="",f=!0}function Ut(y){let _=X?Cs((y-X)/1e3,.001,.12):.016;X=y,H++,G||(S+=_);let N=8+((b+S*.0078)%8.75+8.75)%8.75,V=!1;A==="scenic"?E():A==="tour"?V=wt(_):Pt("map-panel").hidden&&(V=he(_)),(!G||H===1||p.distanceToSquared(e.position)>100)&&(n.value=S,a.update(S,e.position),p.copy(e.position)),o.update(S,N,e,H),i.render(t,e),H%5===1&&Mt(),H%4===1&&ft(N),!Pt("map-panel").hidden&&H%10===1&&Math.hypot(h.x-Q,h.z-dt)>.38&&et();let{x:k,z:F}=e.position,W=Math.abs(k-Ge)<5.6&&Math.abs(F-Ze(Ge))<22,Y=r.shopRooms.find(({x:rt,z:bt,w:Ht,d:It})=>Math.abs(k-rt)<Ht/2&&Math.abs(F-bt)<It/2),nt=r.wharves.some(({x:rt,z:bt,len:Ht,width:It})=>Math.abs(k-rt)<Ht/2+2&&Math.abs(F-bt)<It/2+2.7),ht="river";Y?ht=Y.tavern?"tavern":"shop":W?ht="market":nt?ht="dock":k<-84&&F>14?ht="field":k>115&&F<-31?ht="lane":(k>-19&&k<104&&F<-18&&F>-31||k>-20&&k<36&&F>18&&F<29||k>119&&F>-29&&F<-18)&&(ht="market"),Cg.update(ht,V,W,_),f||Nt(),O=requestAnimationFrame(Ut)}Pt("start").addEventListener("click",()=>_t(()=>mt(0,!1))),Pt("intro-tour").addEventListener("click",()=>_t(()=>mt(0,!0))),Pt("home").addEventListener("click",()=>_t(()=>yt())),Pt("view").addEventListener("click",()=>_t(()=>yt(A==="scenic"?(L+1)%Fc.length:0))),Pt("tour").addEventListener("click",()=>{A==="tour"?ee():_t(()=>mt(w>=We.length-1?0:Math.max(0,w),!0))}),Pt("map-button").addEventListener("click",()=>{f&&(Pt("map-panel").hidden?Z():lt())}),Pt("close-map").addEventListener("click",()=>lt()),Pt("time-button").addEventListener("click",()=>{let y=Pt("day-panel");y.hidden=!y.hidden,Pt("time-button").setAttribute("aria-expanded",String(!y.hidden))}),Pt("time-range").addEventListener("input",y=>{b=Number(y.target.value)-8-S*.0078}),Pt("full").hidden=!document.fullscreenEnabled,Pt("full").addEventListener("click",async()=>{document.fullscreenElement?await document.exitFullscreen().catch(()=>{}):await zn.requestFullscreen().catch(()=>{})});function x(y){G=y;let _=Pt("pause"),N=y?"\u7EE7\u7EED\u57CE\u4E2D\u52A8\u6001":"\u6682\u505C\u57CE\u4E2D\u52A8\u6001";_.title=N,_.setAttribute("aria-label",N),_.setAttribute("aria-pressed",String(y)),_.textContent=y?"\u25B7":"\u2161"}x(G),Pt("pause").addEventListener("click",()=>x(!G)),Pt("take-control").addEventListener("click",async()=>{try{await an.requestPointerLock()}catch{}}),document.addEventListener("pointerlockchange",()=>{Qt(),document.pointerLockElement===an?an.focus({preventScroll:!0}):l.clear()});function T(y,_,N){B-=y*N,D=Cs(D-_*N,-1.22,1.18)}an.addEventListener("pointerdown",y=>{A==="scenic"||y.button!==0||(ee(),!document.pointerLockElement&&(c.id=y.pointerId,c.x=y.clientX,c.y=y.clientY,an.setPointerCapture(y.pointerId),zn.classList.add("dragging")))}),an.addEventListener("pointermove",y=>{c.id===y.pointerId&&(T(y.clientX-c.x,y.clientY-c.y,kn?.006:.0052),c.x=y.clientX,c.y=y.clientY)}),an.addEventListener("lostpointercapture",()=>{c.id=null,zn.classList.remove("dragging")}),document.addEventListener("mousemove",y=>{document.pointerLockElement===an&&T(y.movementX,y.movementY,.0022)});let v=Pt("joystick");function R(y){let _=v.getBoundingClientRect(),N=_.width/2,V=y.clientX-_.left-N,k=y.clientY-_.top-N,F=N*.67,W=Math.max(1,Math.hypot(V,k)/F);V/=W,k/=W,u.x=V/F,u.y=-k/F,Pt("stick").style.transform="translate("+V+"px,"+k+"px)"}v.addEventListener("pointerdown",y=>{u.id=y.pointerId,v.setPointerCapture(u.id),R(y)}),v.addEventListener("pointermove",y=>{y.pointerId===u.id&&R(y)}),v.addEventListener("lostpointercapture",()=>{u.id=null,u.x=0,u.y=0,Pt("stick").style.transform=""});let P=new Set(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"]);window.addEventListener("keydown",y=>{let _=y.key.toLowerCase();if(_==="escape"){Pt("map-panel").hidden?Pt("day-panel").hidden?A==="tour"&&ee():Pt("time-button").click():lt();return}if(!Pt("map-panel").hidden){if(_==="tab"){let N=[...Pt("map-panel").querySelectorAll("button")],V=N[0],k=N.at(-1);y.shiftKey&&document.activeElement===V&&(y.preventDefault(),k.focus()),!y.shiftKey&&document.activeElement===k&&(y.preventDefault(),V.focus())}return}y.target.closest?.("input")||y.altKey||y.ctrlKey||y.metaKey||(_==="m"&&!y.repeat&&Z(),A!=="scenic"&&P.has(_)&&(y.preventDefault(),ee(),l.add(_)))}),window.addEventListener("keyup",y=>l.delete(y.key.toLowerCase())),window.addEventListener("blur",()=>l.clear()),document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(O),l.clear()):(X=0,O=requestAnimationFrame(Ut))}),an.addEventListener("webglcontextlost",y=>{y.preventDefault(),cancelAnimationFrame(O),zn.classList.remove("ready"),yt(),Pt("load-status").textContent="\u4E09\u7EF4\u573A\u666F\u6682\u65F6\u4E2D\u65AD\uFF0C\u6B63\u5728\u7B49\u5F85\u6D4F\u89C8\u5668\u6062\u590D\u3002"}),an.addEventListener("webglcontextrestored",()=>{H=0,X=0,f=!1,O=requestAnimationFrame(Ut)}),an.dataset.city="three",new URLSearchParams(location.search).has("test")&&(window.cityTest={camera:e,world:r,life:a,pathProblems:Yt,stops:We,renderer:i,get mode(){return A},get player(){return h.toArray()},get time(){return S},get index(){return w},enter:mt,walk:Rt,aimAt(y,_,N){[B,D]=we(y,_,N)},advanceTour(y){for(;A==="tour"&&y>0;)wt(.05),y-=.05}}),O=requestAnimationFrame(Ut)}requestAnimationFrame(()=>setTimeout(()=>Ig().catch(i=>{console.error(i),Pt("load-status").textContent="\u5F53\u524D\u6D4F\u89C8\u5668\u7684 WebGL 2 \u4E09\u7EF4\u573A\u666F\u65E0\u6CD5\u542F\u52A8\u3002"}),30));})();
/*! For license information please see city3d.js.LEGAL.txt */
