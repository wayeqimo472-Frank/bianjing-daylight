(()=>{var ol=0,Za=1,al=2;var er=1,cl=2,Fn=3,bn=0,He=1,we=2,$n=0,Mi=1,Ja=2,$a=3,Ka=4,ll=5,ai=100,hl=101,ul=102,dl=103,fl=104,pl=200,ml=201,gl=202,_l=203,kr=204,Vr=205,xl=206,vl=207,yl=208,Ml=209,Sl=210,bl=211,Tl=212,wl=213,El=214,ho=0,uo=1,fo=2,Si=3,po=4,mo=5,go=6,_o=7,ja=0,Al=1,Cl=2,Kn=0,Rl=1,Il=2,Pl=3,xo=4,Ll=5,Dl=6,Ul=7;var Qa=300,Ri=301,Ii=302,vo=303,yo=304,nr=306,bi=1e3,oi=1001,Hr=1002,Qe=1003,Nl=1004;var ir=1005;var Tn=1006,Mo=1007;var ui=1008;var An=1009,tc=1010,ec=1011,ls=1012,So=1013,di=1014,Cn=1015,hs=1016,bo=1017,To=1018,us=1020,nc=35902,ic=35899,sc=1021,rc=1022,mn=1023,ts=1026,ds=1027,wo=1028,Eo=1029,oc=1030,Ao=1031;var Co=1033,sr=33776,rr=33777,or=33778,ar=33779,Ro=35840,Io=35841,Po=35842,Lo=35843,Do=36196,Uo=37492,No=37496,Fo=37808,Bo=37809,Oo=37810,zo=37811,ko=37812,Vo=37813,Ho=37814,Go=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,Zo=37820,Jo=37821,$o=36492,Ko=36494,jo=36495,Qo=36283,ta=36284,ea=36285,na=36286;var Ls=2300,Gr=2301,zr=2302,za=2400,ka=2401,Va=2402;var Fl=3200,Bl=3201;var ac=0,Ol=1,jn="",Ce="srgb",Ti="srgb-linear",Ds="linear",ue="srgb";var yi=7680;var Ha=519,zl=512,kl=513,Vl=514,cc=515,Hl=516,Gl=517,Wl=518,Xl=519,Ga=35044,Pi=35048;var lc="300 es",Sn=2e3,Us=2001;var Yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fc=1234567,Is=Math.PI/180,es=180/Math.PI;function fs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function hc(i,t){return(i%t+t)%t}function zh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function kh(i,t,e){return i!==t?(e-i)/(t-i):0}function Ps(i,t,e){return(1-e)*i+e*t}function Vh(i,t,e,n){return Ps(i,t,1-Math.exp(-e*n))}function Hh(i,t=1){return t-Math.abs(hc(i,t*2)-t)}function Gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qh(i,t){return i+Math.random()*(t-i)}function Yh(i){return i*(.5-Math.random())}function Zh(i){i!==void 0&&(Fc=i);let t=Fc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jh(i){return i*Is}function $h(i){return i*es}function Kh(i){return(i&i-1)===0&&i!==0}function jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var jt={DEG2RAD:Is,RAD2DEG:es,generateUUID:fs,clamp:ee,euclideanModulo:hc,mapLinear:zh,inverseLerp:kh,lerp:Ps,damp:Vh,pingpong:Hh,smoothstep:Gh,smootherstep:Wh,randInt:Xh,randFloat:qh,randFloatSpread:Yh,seededRandom:Zh,degToRad:Jh,radToDeg:$h,isPowerOfTwo:Kh,ceilPowerOfTwo:jh,floorPowerOfTwo:Qh,setQuaternionFromProperEuler:tu,normalize:Ze,denormalize:ji},ne=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let m=1-a,f=l*d+c*p+u*g+h*v,w=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){let P=Math.sqrt(A),N=Math.atan2(P,f*w);m=Math.sin(m*N)/P,a=Math.sin(a*N)/P}let T=a*w;if(l=l*m+d*T,c=c*m+p*T,u=u*m+g*T,h=h*m+v*T,m===1-a){let P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*d,t[e+1]=l*g+u*d+c*h-a*p,t[e+2]=c*g+u*p+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pa.copy(this).projectOnVector(t),this.sub(pa)}reflect(t){return this.sub(pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pa=new Z,Bc=new Je,Kt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],w=s[1],A=s[4],T=s[7],P=s[2],N=s[5],U=s[8];return r[0]=o*v+a*w+l*P,r[3]=o*m+a*A+l*N,r[6]=o*f+a*T+l*U,r[1]=c*v+u*w+h*P,r[4]=c*m+u*A+h*N,r[7]=c*f+u*T+h*U,r[2]=d*v+p*w+g*P,r[5]=d*m+p*A+g*N,r[8]=d*f+p*T+g*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=h*v,t[1]=(s*c-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ma=new Kt;function uc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ql(){let i=Ns("canvas");return i.style.display="block",i}var Oc={};function ns(i){i in Oc||(Oc[i]=!0,console.warn(i))}function Yl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var zc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eu(){let i={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ti]:{primaries:t,whitePoint:n,transfer:Ds,toXYZ:zc,fromXYZ:kc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:zc,fromXYZ:kc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var oe=eu();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zi,Wr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zi===void 0&&(zi=Ns("canvas")),zi.width=t.width,zi.height=t.height;let s=zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ns("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nu=0,is=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ga(s[o].image)):r.push(ga(s[o]))}else r=ga(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var iu=0,_a=new Z,$e=class i extends Yn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=oi,s=oi,r=Tn,o=ui,a=mn,l=An,c=i.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=fs(),this.name="",this.source=new is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bi:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case Hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bi:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case Hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Qa;$e.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,T=(p+1)/2,P=(f+1)/2,N=(u+d)/4,U=(h+v)/4,B=(g+m)/4;return A>T&&A>P?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=N/n,r=U/n):T>P?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=N/s,r=B/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=U/r,s=B/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-v)/w,this.z=(d-u)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xr=class extends Yn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new $e(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new is(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends Xr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fs=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qr=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),xr.subVectors(this.max,Ts),ki.subVectors(t.a,Ts),Vi.subVectors(t.b,Ts),Hi.subVectors(t.c,Ts),Qn.subVectors(Vi,ki),ti.subVectors(Hi,Vi),gi.subVectors(ki,Hi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-gi.z,gi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,gi.z,0,-gi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-gi.y,gi.x,0];return!xa(e,ki,Vi,Hi,xr)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,ki,Vi,Hi,xr))?!1:(vr.crossVectors(Qn,ti),e=[vr.x,vr.y,vr.z],xa(e,ki,Vi,Hi,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Vn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],vn=new Z,_r=new Dn,ki=new Z,Vi=new Z,Hi=new Z,Qn=new Z,ti=new Z,gi=new Z,Ts=new Z,xr=new Z,vr=new Z,_i=new Z;function xa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_i.fromArray(i,r);let a=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),u=n.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var su=new Dn,ws=new Z,va=new Z,Zn=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):su.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);let e=ws.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(va)),this.expandByPoint(ws.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Hn=new Z,ya=new Z,yr=new Z,ei=new Z,Ma=new Z,Mr=new Z,Sa=new Z,Bs=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ya.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(ya);let r=t.distanceTo(e)*.5,o=-this.direction.dot(yr),a=ei.dot(this.direction),l=-ei.dot(yr),c=ei.lengthSq(),u=Math.abs(1-o*o),h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let v=1/u;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ya).addScaledVector(yr,d),p}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){Ma.subVectors(e,t),Mr.subVectors(n,t),Sa.crossVectors(Ma,Mr);let o=this.direction.dot(Sa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);let l=a*this.direction.dot(Mr.crossVectors(ei,Mr));if(l<0)return null;let c=a*this.direction.dot(Ma.cross(ei));if(c<0||l+c>o)return null;let u=-a*ei.dot(Sa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class i{constructor(t,e,n,s,r,o,a,l,c,u,h,d,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,p,g,v,m)}set(t,e,n,s,r,o,a,l,c,u,h,d,p,g,v,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),o=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*u,p=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,p=l*h,g=c*u,v=c*h;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,p=l*h,g=c*u,v=c*h;e[0]=d-v*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,p=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=v-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=d-v*h}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+v,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ru,t,ou)}lookAt(t,e,n){let s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ni.crossVectors(n,sn),ni.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ni.crossVectors(n,sn)),ni.normalize(),Sr.crossVectors(sn,ni),s[0]=ni.x,s[4]=Sr.x,s[8]=sn.x,s[1]=ni.y,s[5]=Sr.y,s[9]=sn.y,s[2]=ni.z,s[6]=Sr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],w=n[3],A=n[7],T=n[11],P=n[15],N=s[0],U=s[4],B=s[8],y=s[12],M=s[1],k=s[5],O=s[9],Y=s[13],q=s[2],j=s[6],$=s[10],ft=s[14],tt=s[3],mt=s[7],pt=s[11],yt=s[15];return r[0]=o*N+a*M+l*q+c*tt,r[4]=o*U+a*k+l*j+c*mt,r[8]=o*B+a*O+l*$+c*pt,r[12]=o*y+a*Y+l*ft+c*yt,r[1]=u*N+h*M+d*q+p*tt,r[5]=u*U+h*k+d*j+p*mt,r[9]=u*B+h*O+d*$+p*pt,r[13]=u*y+h*Y+d*ft+p*yt,r[2]=g*N+v*M+m*q+f*tt,r[6]=g*U+v*k+m*j+f*mt,r[10]=g*B+v*O+m*$+f*pt,r[14]=g*y+v*Y+m*ft+f*yt,r[3]=w*N+A*M+T*q+P*tt,r[7]=w*U+A*k+T*j+P*mt,r[11]=w*B+A*O+T*$+P*pt,r[15]=w*y+A*Y+T*ft+P*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*p-n*l*p)+v*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+e*c*h-e*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+f*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],w=h*m*c-v*d*c+v*l*p-a*m*p-h*l*f+a*d*f,A=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,T=u*v*c-g*h*c+g*a*p-o*v*p-u*a*f+o*h*f,P=g*h*l-u*v*l-g*a*d+o*v*d+u*a*m-o*h*m,N=e*w+n*A+s*T+r*P;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/N;return t[0]=w*U,t[1]=(v*d*r-h*m*r-v*s*p+n*m*p+h*s*f-n*d*f)*U,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*f+n*l*f)*U,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*p-n*l*p)*U,t[4]=A*U,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*U,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*U,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*p+e*l*p)*U,t[8]=T*U,t[9]=(g*h*r-u*v*r-g*n*p+e*v*p+u*n*f-e*h*f)*U,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*f+e*a*f)*U,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*p-e*a*p)*U,t[12]=P*U,t[13]=(u*v*s-g*h*s+g*n*d-e*v*d-u*n*m+e*h*m)*U,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*U,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,v=o*u,m=o*h,f=a*h,w=l*c,A=l*u,T=l*h,P=n.x,N=n.y,U=n.z;return s[0]=(1-(v+f))*P,s[1]=(p+T)*P,s[2]=(g-A)*P,s[3]=0,s[4]=(p-T)*N,s[5]=(1-(d+f))*N,s[6]=(m+w)*N,s[7]=0,s[8]=(g+A)*U,s[9]=(m-w)*U,s[10]=(1-(d+v))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Gi.set(s[0],s[1],s[2]).length(),o=Gi.set(s[4],s[5],s[6]).length(),a=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);let c=1/r,u=1/o,h=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Sn,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Sn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Us)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s),g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Sn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Us)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gi=new Z,yn=new he,ru=new Z(0,0,0),ou=new Z(1,1,1),ni=new Z,Sr=new Z,sn=new Z,Vc=new he,Hc=new Je,wn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},au=0,Gc=new Z,Wi=new Je,Gn=new he,br=new Z,Es=new Z,cu=new Z,lu=new Je,Wc=new Z(1,0,0),Xc=new Z(0,1,0),qc=new Z(0,0,1),Yc={type:"added"},hu={type:"removed"},Xi={type:"childadded",child:null},ba={type:"childremoved",child:null},Re=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Z,e=new wn,n=new Je,s=new Z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Kt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(Wc,t)}rotateY(t){return this.rotateOnAxis(Xc,t)}rotateZ(t){return this.rotateOnAxis(qc,t)}translateOnAxis(t,e){return Gc.copy(t).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wc,t)}translateY(t){return this.translateOnAxis(Xc,t)}translateZ(t){return this.translateOnAxis(qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?br.copy(t):br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Es,br,this.up):Gn.lookAt(br,Es,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hu),ba.child=t,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new Z(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new Z,Wn=new Z,Ta=new Z,Xn=new Z,qi=new Z,Yi=new Z,Zc=new Z,wa=new Z,Ea=new Z,Aa=new Z,Ca=new ge,Ra=new ge,Ia=new ge,ri=class i{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Wn.subVectors(n,e),Ta.subVectors(t,e);let o=Mn.dot(Mn),a=Mn.dot(Wn),l=Mn.dot(Ta),c=Wn.dot(Wn),u=Wn.dot(Ta),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ca.setScalar(0),Ra.setScalar(0),Ia.setScalar(0),Ca.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,n),Ia.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ca,r.x),o.addScaledVector(Ra,r.y),o.addScaledVector(Ia,r.z),o}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Wn.subVectors(t,e),Mn.cross(Wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Mn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;qi.subVectors(s,n),Yi.subVectors(r,n),wa.subVectors(t,n);let l=qi.dot(wa),c=Yi.dot(wa);if(l<=0&&c<=0)return e.copy(n);Ea.subVectors(t,s);let u=qi.dot(Ea),h=Yi.dot(Ea);if(u>=0&&h<=u)return e.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(qi,o);Aa.subVectors(t,r);let p=qi.dot(Aa),g=Yi.dot(Aa);if(g>=0&&p<=g)return e.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Yi,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Zc.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Zc,a);let f=1/(m+v+d);return o=v*f,a=d*f,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=hc(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Pa(o,r,t+1/3),this.g=Pa(o,r,t),this.b=Pa(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Zl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return oe.workingToColorSpace(We.copy(this),t),Math.round(ee(We.r*255,0,255))*65536+Math.round(ee(We.g*255,0,255))*256+Math.round(ee(We.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(We.copy(this),e);let n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Ce){oe.workingToColorSpace(We.copy(this),t);let e=We.r,n=We.g,s=We.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Tr);let n=Ps(ii.h,Tr.h,e),s=Ps(ii.s,Tr.s,e),r=Ps(ii.l,Tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new At;At.NAMES=Zl;var uu=0,Jn=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Mi,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kr,this.blendDst=Vr,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kr&&(n.blendSrc=this.blendSrc),this.blendDst!==Vr&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Si&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},wi=class extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new Z,wr=new ne,du=0,Ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:du++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ga,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ga&&(t.usage=this.usage),t}};var zs=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ks=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},fu=0,un=new he,La=new Re,Zi=new Z,rn=new Dn,As=new Dn,ze=new Z,Te=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uc(t)?ks:zs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];As.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(rn.min,As.min),rn.expandByPoint(ze),ze.addVectors(rn.max,As.max),rn.expandByPoint(ze)):(rn.expandByPoint(As.min),rn.expandByPoint(As.max))}rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ze.fromBufferAttribute(a,c),l&&(Zi.fromBufferAttribute(t,c),ze.add(Zi)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<n.count;B++)a[B]=new Z,l[B]=new Z;let c=new Z,u=new Z,h=new Z,d=new ne,p=new ne,g=new ne,v=new Z,m=new Z;function f(B,y,M){c.fromBufferAttribute(n,B),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,B),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),p.sub(d),g.sub(d);let k=1/(p.x*g.y-g.x*p.y);isFinite(k)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(k),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(k),a[B].add(v),a[y].add(v),a[M].add(v),l[B].add(m),l[y].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let B=0,y=w.length;B<y;++B){let M=w[B],k=M.start,O=M.count;for(let Y=k,q=k+O;Y<q;Y+=3)f(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let A=new Z,T=new Z,P=new Z,N=new Z;function U(B){P.fromBufferAttribute(s,B),N.copy(P);let y=a[B];A.copy(y),A.sub(P.multiplyScalar(P.dot(y))).normalize(),T.crossVectors(N,y);let k=T.dot(l[B])<0?-1:1;o.setXYZW(B,A.x,A.y,A.z,k)}for(let B=0,y=w.length;B<y;++B){let M=w[B],k=M.start,O=M.count;for(let Y=k,q=k+O;Y<q;Y+=3)U(t.getX(Y+0)),U(t.getX(Y+1)),U(t.getX(Y+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new Z,r=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,h=new Z;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Ae(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jc=new he,xi=new Bs,Er=new Zn,$c=new Z,Ar=new Z,Cr=new Z,Rr=new Z,Da=new Z,Ir=new Z,Kc=new Z,Pr=new Z,me=class extends Re{constructor(t=new Te,e=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Da.fromBufferAttribute(h,t),o?Ir.addScaledVector(Da,u):Ir.addScaledVector(Da.sub(e),u))}e.add(Ir)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(Er.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Er,$c)===null||xi.origin.distanceToSquared($c)>(t.far-t.near)**2))&&(Jc.copy(r).invert(),xi.copy(t.ray).applyMatrix4(Jc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=w,P=A;T<P;T+=3){let N=a.getX(T),U=a.getX(T+1),B=a.getX(T+2);s=Lr(this,f,t,n,c,u,h,N,U,B),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let w=a.getX(m),A=a.getX(m+1),T=a.getX(m+2);s=Lr(this,o,t,n,c,u,h,w,A,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=w,P=A;T<P;T+=3){let N=T,U=T+1,B=T+2;s=Lr(this,f,t,n,c,u,h,N,U,B),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let w=m,A=m+1,T=m+2;s=Lr(this,o,t,n,c,u,h,w,A,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function pu(i,t,e,n,s,r,o,a){let l;if(t.side===He?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===bn,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Pr);return c<e.near||c>e.far?null:{distance:c,point:Pr.clone(),object:i}}function Lr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ar),i.getVertexPosition(l,Cr),i.getVertexPosition(c,Rr);let u=pu(i,t,e,n,Ar,Cr,Rr,Kc);if(u){let h=new Z;ri.getBarycoord(Kc,Ar,Cr,Rr,h),s&&(u.uv=ri.getInterpolatedAttribute(s,a,l,c,h,new ne)),r&&(u.uv1=ri.getInterpolatedAttribute(r,a,l,c,h,new ne)),o&&(u.normal=ri.getInterpolatedAttribute(o,a,l,c,h,new Z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new Z,materialIndex:0};ri.getNormal(Ar,Cr,Rr,d.normal),u.face=d,u.barycoord=h}return u}var Un=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(h,2));function g(v,m,f,w,A,T,P,N,U,B,y){let M=T/U,k=P/B,O=T/2,Y=P/2,q=N/2,j=U+1,$=B+1,ft=0,tt=0,mt=new Z;for(let pt=0;pt<$;pt++){let yt=pt*k-Y;for(let Lt=0;Lt<j;Lt++){let Pt=Lt*M-O;mt[v]=Pt*w,mt[m]=yt*A,mt[f]=q,c.push(mt.x,mt.y,mt.z),mt[v]=0,mt[m]=0,mt[f]=N>0?1:-1,u.push(mt.x,mt.y,mt.z),h.push(Lt/U),h.push(1-pt/B),ft+=1}}for(let pt=0;pt<B;pt++)for(let yt=0;yt<U;yt++){let Lt=d+yt+j*pt,Pt=d+yt+j*(pt+1),Yt=d+(yt+1)+j*(pt+1),Ht=d+(yt+1)+j*pt;l.push(Lt,Pt,Ht),l.push(Pt,Yt,Ht),tt+=6}a.addGroup(p,tt,y),p+=tt,d+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Li(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=Li(i[e]);for(let s in n)t[s]=n[s]}return t}function mu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var cr={clone:Li,merge:Xe},gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gu,this.fragmentShader=_u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Vs=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},si=new Z,jc=new ne,Qc=new ne,ke=class extends Vs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,jc,Qc),e.subVectors(Qc,jc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Is*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ji=-90,$i=1,Yr=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ke(Ji,$i,t,e);s.layers=this.layers,this.add(s);let r=new ke(Ji,$i,t,e);r.layers=this.layers,this.add(r);let o=new ke(Ji,$i,t,e);o.layers=this.layers,this.add(o);let a=new ke(Ji,$i,t,e);a.layers=this.layers,this.add(a);let l=new ke(Ji,$i,t,e);l.layers=this.layers,this.add(l);let c=new ke(Ji,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Hs=class extends $e{constructor(t=[],e=Ri,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zr=class extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Un(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:$n});r.uniforms.tEquirect.value=e;let o=new me(s,r),a=e.minFilter;return e.minFilter===ui&&(e.minFilter=Tn),new Yr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ne=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},xu={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gs=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ws=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Jr=class extends $e{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Qe,u=Qe,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rs=class extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ki=new he,tl=new he,Dr=[],el=new Dn,vu=new he,Cs=new me,Rs=new Zn,Ei=class extends me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),el.copy(t.boundingBox).applyMatrix4(Ki),this.boundingBox.union(el)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),Rs.copy(t.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),t.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ki),tl.multiplyMatrices(n,Ki),Cs.matrixWorld=tl,Cs.raycast(t,Dr);for(let o=0,a=Dr.length;o<a;o++){let l=Dr[o];l.instanceId=r,l.object=this,e.push(l)}Dr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jr(new Float32Array(s*this.count),s,this.count,wo,Cn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ua=new Z,yu=new Z,Mu=new Kt,dn=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ua.subVectors(n,e).cross(yu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ua),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mu.getNormalMatrix(t),s=this.coplanarPoint(Ua).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new Zn,Su=new ne(.5,.5),Ur=new Z,os=class{constructor(t=new dn,e=new dn,n=new dn,s=new dn,r=new dn,o=new dn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],v=r[9],m=r[10],f=r[11],w=r[12],A=r[13],T=r[14],P=r[15];if(s[0].setComponents(c-o,p-u,f-g,P-w).normalize(),s[1].setComponents(c+o,p+u,f+g,P+w).normalize(),s[2].setComponents(c+a,p+h,f+v,P+A).normalize(),s[3].setComponents(c-a,p-h,f-v,P-A).normalize(),n)s[4].setComponents(l,d,m,T).normalize(),s[5].setComponents(c-l,p-d,f-m,P-T).normalize();else if(s[4].setComponents(c-l,p-d,f-m,P-T).normalize(),e===Sn)s[5].setComponents(c+l,p+d,f+m,P+T).normalize();else if(e===Us)s[5].setComponents(l,d,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){vi.center.set(0,0,0);let e=Su.distanceTo(t.center);return vi.radius=.7071067811865476+e,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ur.x=s.normal.x>0?t.max.x:t.min.x,Ur.y=s.normal.y>0?t.max.y:t.min.y,Ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $r=class extends Jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},nl=new he,Wa=new Bs,Nr=new Zn,Fr=new Z,Xs=class extends Re{constructor(t=new Te,e=new $r){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,t.ray.intersectsSphere(Nr)===!1)return;nl.copy(s).invert(),Wa.copy(t.ray).applyMatrix4(nl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){let m=c.getX(g);Fr.fromBufferAttribute(h,m),il(Fr,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,v=p;g<v;g++)Fr.fromBufferAttribute(h,g),il(Fr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function il(i,t,e,n,s,r,o){let a=Wa.distanceSqToPoint(i);if(a<e){let l=new Z;Wa.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Nn=class extends $e{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qs=class extends $e{constructor(t,e,n=di,s,r,o,a=Qe,l=Qe,c,u=ts,h=1){if(u!==ts&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ys=class extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var on=class i extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],p=[],g=0,v=[],m=n/2,f=0;w(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new ae(h,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(p,2));function w(){let T=new Z,P=new Z,N=0,U=(e-t)/n;for(let B=0;B<=r;B++){let y=[],M=B/r,k=M*(e-t)+t;for(let O=0;O<=s;O++){let Y=O/s,q=Y*l+a,j=Math.sin(q),$=Math.cos(q);P.x=k*j,P.y=-M*n+m,P.z=k*$,h.push(P.x,P.y,P.z),T.set(j,U,$).normalize(),d.push(T.x,T.y,T.z),p.push(Y,1-M),y.push(g++)}v.push(y)}for(let B=0;B<s;B++)for(let y=0;y<r;y++){let M=v[y][B],k=v[y+1][B],O=v[y+1][B+1],Y=v[y][B+1];(t>0||y!==0)&&(u.push(M,k,Y),N+=3),(e>0||y!==r-1)&&(u.push(k,O,Y),N+=3)}c.addGroup(f,N,0),f+=N}function A(T){let P=g,N=new ne,U=new Z,B=0,y=T===!0?t:e,M=T===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;let k=g;for(let O=0;O<=s;O++){let q=O/s*l+a,j=Math.cos(q),$=Math.sin(q);U.x=y*$,U.y=m*M,U.z=y*j,h.push(U.x,U.y,U.z),d.push(0,M,0),N.x=j*.5+.5,N.y=$*.5*M+.5,p.push(N.x,N.y),g++}for(let O=0;O<s;O++){let Y=P+O,q=k+O;T===!0?u.push(q,q+1,Y):u.push(q+1,q,Y),B+=3}c.addGroup(f,B,T===!0?1:2),f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Zs=class i extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let A=new Z,T=new Z,P=new Z;for(let N=0;N<e.length;N+=3)p(e[N+0],A),p(e[N+1],T),p(e[N+2],P),l(A,T,P,w)}function l(w,A,T,P){let N=P+1,U=[];for(let B=0;B<=N;B++){U[B]=[];let y=w.clone().lerp(T,B/N),M=A.clone().lerp(T,B/N),k=N-B;for(let O=0;O<=k;O++)O===0&&B===N?U[B][O]=y:U[B][O]=y.clone().lerp(M,O/k)}for(let B=0;B<N;B++)for(let y=0;y<2*(N-B)-1;y++){let M=Math.floor(y/2);y%2===0?(d(U[B][M+1]),d(U[B+1][M]),d(U[B][M])):(d(U[B][M+1]),d(U[B+1][M+1]),d(U[B+1][M]))}}function c(w){let A=new Z;for(let T=0;T<r.length;T+=3)A.x=r[T+0],A.y=r[T+1],A.z=r[T+2],A.normalize().multiplyScalar(w),r[T+0]=A.x,r[T+1]=A.y,r[T+2]=A.z}function u(){let w=new Z;for(let A=0;A<r.length;A+=3){w.x=r[A+0],w.y=r[A+1],w.z=r[A+2];let T=m(w)/2/Math.PI+.5,P=f(w)/Math.PI+.5;o.push(T,1-P)}g(),h()}function h(){for(let w=0;w<o.length;w+=6){let A=o[w+0],T=o[w+2],P=o[w+4],N=Math.max(A,T,P),U=Math.min(A,T,P);N>.9&&U<.1&&(A<.2&&(o[w+0]+=1),T<.2&&(o[w+2]+=1),P<.2&&(o[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function p(w,A){let T=w*3;A.x=t[T+0],A.y=t[T+1],A.z=t[T+2]}function g(){let w=new Z,A=new Z,T=new Z,P=new Z,N=new ne,U=new ne,B=new ne;for(let y=0,M=0;y<r.length;y+=9,M+=6){w.set(r[y+0],r[y+1],r[y+2]),A.set(r[y+3],r[y+4],r[y+5]),T.set(r[y+6],r[y+7],r[y+8]),N.set(o[M+0],o[M+1]),U.set(o[M+2],o[M+3]),B.set(o[M+4],o[M+5]),P.copy(w).add(A).add(T).divideScalar(3);let k=m(P);v(N,M+0,w,k),v(U,M+2,A,k),v(B,M+4,T,k)}}function v(w,A,T,P){P<0&&w.x===1&&(o[A]=w.x-1),T.x===0&&T.z===0&&(o[A]=P/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Js=class i extends Zs{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Kr=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ne:new Z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Z,s=[],r=[],o=[],a=new Z,l=new he;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new Z)}r[0]=new Z,o[0]=new Z;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ee(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ee(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function fc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Br=new Z,Na=new fc,Fa=new fc,Ba=new fc,as=class extends Kr{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new Z){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Br.subVectors(s[0],s[1]).add(s[0]),c=Br);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Br.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Br),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Na.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,m),Fa.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,m),Ba.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Fa.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Ba.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Na.calc(l),Fa.calc(l),Ba.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var Ai=class i extends Zs{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},pn=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){let w=f*d-o;for(let A=0;A<c;A++){let T=A*h-r;g.push(T,-w,0),v.push(0,0,1),m.push(A/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){let A=w+c*f,T=w+c*(f+1),P=w+1+c*(f+1),N=w+1+c*f;p.push(A,T,N),p.push(T,P,N)}this.setIndex(p),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ci=class i extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new Z,d=new Z,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){let w=[],A=f/n,T=0;f===0&&o===0?T=.5/e:f===n&&l===Math.PI&&(T=-.5/e);for(let P=0;P<=e;P++){let N=P/e;h.x=-t*Math.cos(s+N*r)*Math.sin(o+A*a),h.y=t*Math.cos(o+A*a),h.z=t*Math.sin(s+N*r)*Math.sin(o+A*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(N+T,1-A),w.push(c++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){let A=u[f][w+1],T=u[f][w],P=u[f+1][w],N=u[f+1][w+1];(f!==0||o>0)&&p.push(A,T,N),(f!==n-1||l<Math.PI)&&p.push(T,P,N)}this.setIndex(p),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var cs=class i extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new Z,h=new Z,d=new Z;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let v=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,w=(s+1)*p+g;o.push(v,m,w),o.push(m,f,w)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var En=class extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var jr=class extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qr=class extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Or(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function bu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ci=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},to=class extends Ci{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:za,endingEnd:za}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ka:r=t,a=2*e-n;break;case Va:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ka:o=t,l=2*n-e;break;case Va:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,w=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,A=(-1-p)*m+(1.5+p)*v+.5*g,T=p*m-p*v;for(let P=0;P!==a;++P)r[P]=f*o[u+P]+w*o[c+P]+A*o[l+P]+T*o[h+P];return r}},eo=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},no=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},an=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Or(e,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Or(t.times,Array),values:Or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new to(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ls:e=this.InterpolantFactoryMethodDiscrete;break;case Gr:e=this.InterpolantFactoryMethodLinear;break;case zr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return Gr;case this.InterpolantFactoryMethodSmooth:return zr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&bu(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let v=e[h+g];if(v!==e[d+g]||v!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Gr;var li=class extends an{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Ls;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};io.prototype.ValueTypeName="color";var so=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};so.prototype.ValueTypeName="number";var ro=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Je.slerpFlat(r,0,o,c-a,o,c,l);return r}},$s=class extends an{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}};$s.prototype.ValueTypeName="quaternion";$s.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends an{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Ls;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};oo.prototype.ValueTypeName="vector";var ao=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Jl=new ao,co=class{constructor(t){this.manager=t!==void 0?t:Jl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};co.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ks=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},js=class extends Ks{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Oa=new he,sl=new Z,rl=new Z,Xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;sl.setFromMatrixPosition(t.matrixWorld),e.position.copy(sl),rl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rl),e.updateMatrixWorld(),Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Qs=class extends Vs{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qa=class extends Xa{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tr=class extends Ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new qa}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var lo=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var pc="\\[\\]\\.:\\/",Tu=new RegExp("["+pc+"]","g"),mc="[^"+pc+"]",wu="[^"+pc.replace("\\.","")+"]",Eu=/((?:WC+[\/:])*)/.source.replace("WC",mc),Au=/(WCOD+)?/.source.replace("WCOD",wu),Cu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc),Ru=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc),Iu=new RegExp("^"+Eu+Au+Cu+Ru+"$"),Pu=["material","materials","bones","map"],Ya=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tu,"")}static parseTrackName(t){let e=Iu.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Ya;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pg=new Float32Array(1);function gc(i,t,e,n){let s=Lu(n);switch(e){case sc:return i*t;case wo:return i*t/s.components*s.byteLength;case Eo:return i*t/s.components*s.byteLength;case oc:return i*t*2/s.components*s.byteLength;case Ao:return i*t*2/s.components*s.byteLength;case rc:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case Co:return i*t*4/s.components*s.byteLength;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case or:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Io:case Lo:return Math.max(i,16)*Math.max(t,8)/4;case Ro:case Po:return Math.max(i,8)*Math.max(t,8)/2;case Do:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $o:case Ko:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qo:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lu(i){switch(i){case An:case tc:return{byteLength:1,components:1};case ls:case ec:case hs:return{byteLength:2,components:1};case bo:case To:return{byteLength:2,components:4};case di:case So:case Cn:return{byteLength:4,components:1};case nc:case ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function vh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zu(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ku=`#ifdef USE_ALPHAHASH
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
#endif`,Sd=`#ifdef USE_ENVMAP
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
#endif`,bd=`#ifdef USE_FOG
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
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,Qt={alphahash_fragment:ku,alphahash_pars_fragment:Vu,alphamap_fragment:Hu,alphamap_pars_fragment:Gu,alphatest_fragment:Wu,alphatest_pars_fragment:Xu,aomap_fragment:qu,aomap_pars_fragment:Yu,batching_pars_vertex:Zu,batching_vertex:Ju,begin_vertex:$u,beginnormal_vertex:Ku,bsdfs:ju,iridescence_fragment:Qu,bumpmap_pars_fragment:td,clipping_planes_fragment:ed,clipping_planes_pars_fragment:nd,clipping_planes_pars_vertex:id,clipping_planes_vertex:sd,color_fragment:rd,color_pars_fragment:od,color_pars_vertex:ad,color_vertex:cd,common:ld,cube_uv_reflection_fragment:hd,defaultnormal_vertex:ud,displacementmap_pars_vertex:dd,displacementmap_vertex:fd,emissivemap_fragment:pd,emissivemap_pars_fragment:md,colorspace_fragment:gd,colorspace_pars_fragment:_d,envmap_fragment:xd,envmap_common_pars_fragment:vd,envmap_pars_fragment:yd,envmap_pars_vertex:Md,envmap_physical_pars_fragment:Ld,envmap_vertex:Sd,fog_vertex:bd,fog_pars_vertex:Td,fog_fragment:wd,fog_pars_fragment:Ed,gradientmap_pars_fragment:Ad,lightmap_pars_fragment:Cd,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Id,lights_pars_begin:Pd,lights_toon_fragment:Dd,lights_toon_pars_fragment:Ud,lights_phong_fragment:Nd,lights_phong_pars_fragment:Fd,lights_physical_fragment:Bd,lights_physical_pars_fragment:Od,lights_fragment_begin:zd,lights_fragment_maps:kd,lights_fragment_end:Vd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Gd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Xd,map_fragment:qd,map_pars_fragment:Yd,map_particle_fragment:Zd,map_particle_pars_fragment:Jd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Kd,morphinstance_vertex:jd,morphcolor_vertex:Qd,morphnormal_vertex:tf,morphtarget_pars_vertex:ef,morphtarget_vertex:nf,normal_fragment_begin:sf,normal_fragment_maps:rf,normal_pars_fragment:of,normal_pars_vertex:af,normal_vertex:cf,normalmap_pars_fragment:lf,clearcoat_normal_fragment_begin:hf,clearcoat_normal_fragment_maps:uf,clearcoat_pars_fragment:df,iridescence_pars_fragment:ff,opaque_fragment:pf,packing:mf,premultiplied_alpha_fragment:gf,project_vertex:_f,dithering_fragment:xf,dithering_pars_fragment:vf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:Mf,shadowmap_pars_fragment:Sf,shadowmap_pars_vertex:bf,shadowmap_vertex:Tf,shadowmask_pars_fragment:wf,skinbase_vertex:Ef,skinning_pars_vertex:Af,skinning_vertex:Cf,skinnormal_vertex:Rf,specularmap_fragment:If,specularmap_pars_fragment:Pf,tonemapping_fragment:Lf,tonemapping_pars_fragment:Df,transmission_fragment:Uf,transmission_pars_fragment:Nf,uv_pars_fragment:Ff,uv_pars_vertex:Bf,uv_vertex:Of,worldpos_vertex:zf,background_vert:kf,background_frag:Vf,backgroundCube_vert:Hf,backgroundCube_frag:Gf,cube_vert:Wf,cube_frag:Xf,depth_vert:qf,depth_frag:Yf,distanceRGBA_vert:Zf,distanceRGBA_frag:Jf,equirect_vert:$f,equirect_frag:Kf,linedashed_vert:jf,linedashed_frag:Qf,meshbasic_vert:tp,meshbasic_frag:ep,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:sp,meshmatcap_frag:rp,meshnormal_vert:op,meshnormal_frag:ap,meshphong_vert:cp,meshphong_frag:lp,meshphysical_vert:hp,meshphysical_frag:up,meshtoon_vert:dp,meshtoon_frag:fp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:_p,sprite_vert:xp,sprite_frag:vp},Et={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Bn={basic:{uniforms:Xe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Xe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new At(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Xe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Xe([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Xe([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new At(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Xe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Xe([Et.points,Et.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Xe([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Xe([Et.common,Et.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Xe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Xe([Et.sprite,Et.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Xe([Et.common,Et.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Xe([Et.lights,Et.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Bn.physical={uniforms:Xe([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var ia={r:0,b:0,g:0},Di=new wn,yp=new he;function Mp(i,t,e,n,s,r,o){let a=new At(0),l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?e:t).get(T)),T}function v(A){let T=!1,P=g(A);P===null?f(a,l):P&&P.isColor&&(f(P,1),T=!0);let N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,T){let P=g(T);P&&(P.isCubeTexture||P.mapping===nr)?(u===void 0&&(u=new me(new Un(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Li(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Di.copy(T.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yp.makeRotationFromEuler(Di)),u.material.toneMapped=oe.getTransfer(P.colorSpace)!==ue,(h!==P||d!==P.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=P,d=P.version,p=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new me(new pn(2,2),new Ve({name:"BackgroundMaterial",uniforms:Li(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=oe.getTransfer(P.colorSpace)!==ue,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||d!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=P,d=P.version,p=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,T){A.getRGB(ia,dc(i)),n.buffers.color.setClear(ia.r,ia.g,ia.b,T,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,T=1){a.set(A),l=T,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(a,l)},render:v,addToRenderList:m,dispose:w}}function Sp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,k,O,Y,q){let j=!1,$=h(Y,O,k);r!==$&&(r=$,c(r.object)),j=p(M,Y,O,q),j&&g(M,Y,O,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,T(M,k,O,Y),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,k,O){let Y=O.wireframe===!0,q=n[M.id];q===void 0&&(q={},n[M.id]=q);let j=q[k.id];j===void 0&&(j={},q[k.id]=j);let $=j[Y];return $===void 0&&($=d(l()),j[Y]=$),$}function d(M){let k=[],O=[],Y=[];for(let q=0;q<e;q++)k[q]=0,O[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:O,attributeDivisors:Y,object:M,attributes:{},index:null}}function p(M,k,O,Y){let q=r.attributes,j=k.attributes,$=0,ft=O.getAttributes();for(let tt in ft)if(ft[tt].location>=0){let pt=q[tt],yt=j[tt];if(yt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),pt===void 0||pt.attribute!==yt||yt&&pt.data!==yt.data)return!0;$++}return r.attributesNum!==$||r.index!==Y}function g(M,k,O,Y){let q={},j=k.attributes,$=0,ft=O.getAttributes();for(let tt in ft)if(ft[tt].location>=0){let pt=j[tt];pt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor));let yt={};yt.attribute=pt,pt&&pt.data&&(yt.data=pt.data),q[tt]=yt,$++}r.attributes=q,r.attributesNum=$,r.index=Y}function v(){let M=r.newAttributes;for(let k=0,O=M.length;k<O;k++)M[k]=0}function m(M){f(M,0)}function f(M,k){let O=r.newAttributes,Y=r.enabledAttributes,q=r.attributeDivisors;O[M]=1,Y[M]===0&&(i.enableVertexAttribArray(M),Y[M]=1),q[M]!==k&&(i.vertexAttribDivisor(M,k),q[M]=k)}function w(){let M=r.newAttributes,k=r.enabledAttributes;for(let O=0,Y=k.length;O<Y;O++)k[O]!==M[O]&&(i.disableVertexAttribArray(O),k[O]=0)}function A(M,k,O,Y,q,j,$){$===!0?i.vertexAttribIPointer(M,k,O,q,j):i.vertexAttribPointer(M,k,O,Y,q,j)}function T(M,k,O,Y){v();let q=Y.attributes,j=O.getAttributes(),$=k.defaultAttributeValues;for(let ft in j){let tt=j[ft];if(tt.location>=0){let mt=q[ft];if(mt===void 0&&(ft==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),ft==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),mt!==void 0){let pt=mt.normalized,yt=mt.itemSize,Lt=t.get(mt);if(Lt===void 0)continue;let Pt=Lt.buffer,Yt=Lt.type,Ht=Lt.bytesPerElement,lt=Yt===i.INT||Yt===i.UNSIGNED_INT||mt.gpuType===So;if(mt.isInterleavedBufferAttribute){let ut=mt.data,St=ut.stride,Bt=mt.offset;if(ut.isInstancedInterleavedBuffer){for(let rt=0;rt<tt.locationSize;rt++)f(tt.location+rt,ut.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let rt=0;rt<tt.locationSize;rt++)m(tt.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let rt=0;rt<tt.locationSize;rt++)A(tt.location+rt,yt/tt.locationSize,Yt,pt,St*Ht,(Bt+yt/tt.locationSize*rt)*Ht,lt)}else{if(mt.isInstancedBufferAttribute){for(let ut=0;ut<tt.locationSize;ut++)f(tt.location+ut,mt.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ut=0;ut<tt.locationSize;ut++)m(tt.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let ut=0;ut<tt.locationSize;ut++)A(tt.location+ut,yt/tt.locationSize,Yt,pt,yt*Ht,yt/tt.locationSize*ut*Ht,lt)}}else if($!==void 0){let pt=$[ft];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(tt.location,pt);break;case 3:i.vertexAttrib3fv(tt.location,pt);break;case 4:i.vertexAttrib4fv(tt.location,pt);break;default:i.vertexAttrib1fv(tt.location,pt)}}}}w()}function P(){B();for(let M in n){let k=n[M];for(let O in k){let Y=k[O];for(let q in Y)u(Y[q].object),delete Y[q];delete k[O]}delete n[M]}}function N(M){if(n[M.id]===void 0)return;let k=n[M.id];for(let O in k){let Y=k[O];for(let q in Y)u(Y[q].object),delete Y[q];delete k[O]}delete n[M.id]}function U(M){for(let k in n){let O=n[k];if(O[M.id]===void 0)continue;let Y=O[M.id];for(let q in Y)u(Y[q].object),delete Y[q];delete O[M.id]}}function B(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function bp(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,d){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==mn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let B=U===hs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==An&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Cn&&!B)}function l(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:T,vertexTextures:P,maxSamples:N}}function wp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new dn,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let w=r?0:n,A=w*4,T=f.clippingState||null;l.value=T,T=u(g,d,A,p);for(let P=0;P!==A;++P)T[P]=e[P];f.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,T=p;A!==v;++A,T+=4)o.copy(h[A]).applyMatrix4(w,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Ep(i){let t=new WeakMap;function e(o,a){return a===vo?o.mapping=Ri:a===yo&&(o.mapping=Ii),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===vo||a===yo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Zr(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ms=4,$l=[.125,.215,.35,.446,.526,.582],Fi=20,_c=new Qs,Kl=new At,xc=null,vc=0,yc=0,Mc=!1,Ni=(1+Math.sqrt(5))/2,ps=1/Ni,jl=[new Z(-Ni,ps,0),new Z(Ni,ps,0),new Z(-ps,0,Ni),new Z(ps,0,Ni),new Z(0,Ni,-ps),new Z(0,Ni,ps),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],Ap=new Z,oa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ap}=r;xc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xc,vc,yc),this._renderer.xr.enabled=Mc,t.scissorTest=!1,sa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:hs,format:mn,colorSpace:Ti,depthBuffer:!1},s=Ql(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(r)),this._blurMaterial=Rp(r,t,e)}return s}_compileMaterial(t){let e=new me(this._lodPlanes[0],t);this._renderer.compile(e,_c)}_sceneToCubeUV(t,e,n,s,r){let l=new ke(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Kl),h.toneMapping=Kn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let v=new wi({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),m=new me(new Un,v),f=!1,w=t.background;w?w.isColor&&(v.color.copy(w),t.background=null,f=!0):(v.color.copy(Kl),f=!0);for(let A=0;A<6;A++){let T=A%3;T===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):T===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let P=this._cubeSize;sa(s,T*P,A>2?P:0,P,P),h.setRenderTarget(s),f&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ri||t.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;sa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_c)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jl[(s-r-1)%jl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new me(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);let f=[],w=0;for(let U=0;U<Fi;++U){let B=U/v,y=Math.exp(-B*B/2);f.push(y),U===0?w+=y:U<m&&(w+=2*y)}for(let U=0;U<f.length;U++)f[U]=f[U]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-n;let T=this._sizeLods[s],P=3*T*(s>A-ms?s-A+ms:0),N=4*(this._cubeSize-T);sa(e,P,N,3*T,2*T),l.setRenderTarget(e),l.render(h,_c)}};function Cp(i){let t=[],e=[],n=[],s=i,r=i-ms+1+$l.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ms?l=$l[o-i+ms-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,f=1,w=new Float32Array(v*g*p),A=new Float32Array(m*g*p),T=new Float32Array(f*g*p);for(let N=0;N<p;N++){let U=N%3*2/3-1,B=N>2?0:-1,y=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];w.set(y,v*g*N),A.set(d,m*g*N);let M=[N,N,N,N,N,N];T.set(M,f*g*N)}let P=new Te;P.setAttribute("position",new Ae(w,v)),P.setAttribute("uv",new Ae(A,m)),P.setAttribute("faceIndex",new Ae(T,f)),t.push(P),s>ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ql(i,t,e){let n=new fn(i,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rp(i,t,e){let n=new Float32Array(Fi),s=new Z(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function th(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function eh(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function Ip(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===vo||l===yo,u=l===Ri||l===Ii;if(c||u){let h=t.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new oa(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new oa(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Pp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lp(i,t,e,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(h){let d=[],p=h.index,g=h.attributes.position,v=0;if(p!==null){let w=p.array;v=p.version;for(let A=0,T=w.length;A<T;A+=3){let P=w[A+0],N=w[A+1],U=w[A+2];d.push(P,N,N,U,U,P)}}else if(g!==void 0){let w=g.array;v=g.version;for(let A=0,T=w.length/3-1;A<T;A+=3){let P=A+0,N=A+1,U=A+2;d.push(P,N,N,U,U,P)}}else return;let m=new(uc(d)?ks:zs)(d,1);m.version=v;let f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Dp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function h(d,p,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*v[w];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Up(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Np(i,t,e){let n=new WeakMap,s=new ge;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let y=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],A=0;p===!0&&(A=1),g===!0&&(A=2),v===!0&&(A=3);let T=a.attributes.position.count*A,P=1;T>t.maxTextureSize&&(P=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let N=new Float32Array(T*P*4*h),U=new Fs(N,T,P,h);U.type=Cn,U.needsUpdate=!0;let B=A*4;for(let M=0;M<h;M++){let k=m[M],O=f[M],Y=w[M],q=T*P*4*M;for(let j=0;j<k.count;j++){let $=j*B;p===!0&&(s.fromBufferAttribute(k,j),N[q+$+0]=s.x,N[q+$+1]=s.y,N[q+$+2]=s.z,N[q+$+3]=0),g===!0&&(s.fromBufferAttribute(O,j),N[q+$+4]=s.x,N[q+$+5]=s.y,N[q+$+6]=s.z,N[q+$+7]=0),v===!0&&(s.fromBufferAttribute(Y,j),N[q+$+8]=s.x,N[q+$+9]=s.y,N[q+$+10]=s.z,N[q+$+11]=Y.itemSize===4?s.w:1)}}d={count:h,texture:U,size:new ne(T,P)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Fp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var yh=new $e,nh=new qs(1,1),Mh=new Fs,Sh=new qr,bh=new Hs,ih=[],sh=[],rh=new Float32Array(16),oh=new Float32Array(9),ah=new Float32Array(4);function _s(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ca(i,t){let e=sh[t];e===void 0&&(e=new Int32Array(t),sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function Vp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;ah.set(n),i.uniformMatrix2fv(this.addr,!1,ah),Be(e,n)}}function Hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;oh.set(n),i.uniformMatrix3fv(this.addr,!1,oh),Be(e,n)}}function Gp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;rh.set(n),i.uniformMatrix4fv(this.addr,!1,rh),Be(e,n)}}function Wp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function Yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function Zp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function $p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nh.compareFunction=cc,r=nh):r=yh,e.setTexture2D(t||r,s)}function Qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sh,s)}function tm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bh,s)}function em(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mh,s)}function nm(i){switch(i){case 5126:return Bp;case 35664:return Op;case 35665:return zp;case 35666:return kp;case 35674:return Vp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return Zp;case 36294:return Jp;case 36295:return $p;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}function im(i,t){i.uniform1fv(this.addr,t)}function sm(i,t){let e=_s(t,this.size,2);i.uniform2fv(this.addr,e)}function rm(i,t){let e=_s(t,this.size,3);i.uniform3fv(this.addr,e)}function om(i,t){let e=_s(t,this.size,4);i.uniform4fv(this.addr,e)}function am(i,t){let e=_s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cm(i,t){let e=_s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lm(i,t){let e=_s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hm(i,t){i.uniform1iv(this.addr,t)}function um(i,t){i.uniform2iv(this.addr,t)}function dm(i,t){i.uniform3iv(this.addr,t)}function fm(i,t){i.uniform4iv(this.addr,t)}function pm(i,t){i.uniform1uiv(this.addr,t)}function mm(i,t){i.uniform2uiv(this.addr,t)}function gm(i,t){i.uniform3uiv(this.addr,t)}function _m(i,t){i.uniform4uiv(this.addr,t)}function xm(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yh,r[o])}function vm(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Sh,r[o])}function ym(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bh,r[o])}function Mm(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Mh,r[o])}function Sm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return om;case 35674:return am;case 35675:return cm;case 35676:return lm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Mm}}var bc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nm(e.type)}},Tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sm(e.type)}},wc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Sc=/(\w+)(\])?(\[|\.)?/g;function ch(i,t){i.seq.push(t),i.map[t.id]=t}function bm(i,t,e){let n=i.name,s=n.length;for(Sc.lastIndex=0;;){let r=Sc.exec(n),o=Sc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ch(e,c===void 0?new bc(a,i,t):new Tc(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new wc(a),ch(e,h)),e=h}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);bm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function lh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Tm=37297,wm=0;function Em(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var hh=new Kt;function Am(i){oe._getMatrix(hh,oe.workingColorSpace,i);let t=`mat3( ${hh.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Ds:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Em(i.getShaderSource(t),a)}else return r}function Cm(i,t){let e=Am(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rm(i,t){let e;switch(t){case Rl:e="Linear";break;case Il:e="Reinhard";break;case Pl:e="Cineon";break;case xo:e="ACESFilmic";break;case Dl:e="AgX";break;case Ul:e="Neutral";break;case Ll:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ra=new Z;function Im(){oe.getLuminanceCoefficients(ra);let i=ra.x.toFixed(4),t=ra.y.toFixed(4),e=ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function Lm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function lr(i){return i!==""}function dh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(i){return i.replace(Um,Fm)}var Nm=new Map;function Fm(i,t){let e=Qt[t];if(e===void 0){let n=Nm.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ec(e)}var Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(i){return i.replace(Bm,Om)}function Om(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function zm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===er?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function km(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Ii:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ii:t="ENVMAP_MODE_REFRACTION";break}return t}function Hm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ja:t="ENVMAP_BLENDING_MULTIPLY";break;case Al:t="ENVMAP_BLENDING_MIX";break;case Cl:t="ENVMAP_BLENDING_ADD";break}return t}function Gm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=zm(e),c=km(e),u=Vm(e),h=Hm(e),d=Gm(e),p=Pm(e),g=Lm(r),v=s.createProgram(),m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lr).join(`
`),f.length>0&&(f+=`
`)):(m=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),f=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?Rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Cm("linearToOutputTexel",e.outputColorSpace),Im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),o=Ec(o),o=dh(o,e),o=fh(o,e),a=Ec(a),a=dh(a,e),a=fh(a,e),o=ph(o),a=ph(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=w+m+o,T=w+f+a,P=lh(s,s.VERTEX_SHADER,A),N=lh(s,s.FRAGMENT_SHADER,T);s.attachShader(v,P),s.attachShader(v,N),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function U(k){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(v)||"",Y=s.getShaderInfoLog(P)||"",q=s.getShaderInfoLog(N)||"",j=O.trim(),$=Y.trim(),ft=q.trim(),tt=!0,mt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,N);else{let pt=uh(s,P,"vertex"),yt=uh(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+j+`
`+pt+`
`+yt)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):($===""||ft==="")&&(mt=!1);mt&&(k.diagnostics={runnable:tt,programLog:j,vertexShader:{log:$,prefix:m},fragmentShader:{log:ft,prefix:f}})}s.deleteShader(P),s.deleteShader(N),B=new gs(s,v),y=Dm(s,v)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let y;this.getAttributes=function(){return y===void 0&&U(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Tm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=N,this}var Xm=0,Ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cc(t),e.set(t,n)),n}},Cc=class{constructor(t){this.id=Xm++,this.code=t,this.usedTimes=0}};function qm(i,t,e,n,s,r,o){let a=new Os,l=new Ac,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,k,O,Y){let q=O.fog,j=Y.geometry,$=y.isMeshStandardMaterial?O.environment:null,ft=(y.isMeshStandardMaterial?e:t).get(y.envMap||$),tt=ft&&ft.mapping===nr?ft.image.height:null,mt=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let pt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,yt=pt!==void 0?pt.length:0,Lt=0;j.morphAttributes.position!==void 0&&(Lt=1),j.morphAttributes.normal!==void 0&&(Lt=2),j.morphAttributes.color!==void 0&&(Lt=3);let Pt,Yt,Ht,lt;if(mt){let Tt=Bn[mt];Pt=Tt.vertexShader,Yt=Tt.fragmentShader}else Pt=y.vertexShader,Yt=y.fragmentShader,l.update(y),Ht=l.getVertexShaderID(y),lt=l.getFragmentShaderID(y);let ut=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Bt=Y.isInstancedMesh===!0,rt=Y.isBatchedMesh===!0,Ct=!!y.map,Ot=!!y.matcap,H=!!ft,Zt=!!y.aoMap,Ft=!!y.lightMap,Ut=!!y.bumpMap,gt=!!y.normalMap,Wt=!!y.displacementMap,wt=!!y.emissiveMap,Gt=!!y.metalnessMap,Mt=!!y.roughnessMap,kt=y.anisotropy>0,F=y.clearcoat>0,b=y.dispersion>0,K=y.iridescence>0,ht=y.sheen>0,xt=y.transmission>0,_=kt&&!!y.anisotropyMap,C=F&&!!y.clearcoatMap,x=F&&!!y.clearcoatNormalMap,E=F&&!!y.clearcoatRoughnessMap,L=K&&!!y.iridescenceMap,D=K&&!!y.iridescenceThicknessMap,W=ht&&!!y.sheenColorMap,it=ht&&!!y.sheenRoughnessMap,ot=!!y.specularMap,J=!!y.specularColorMap,I=!!y.specularIntensityMap,S=xt&&!!y.transmissionMap,V=xt&&!!y.thicknessMap,G=!!y.gradientMap,et=!!y.alphaMap,z=y.alphaTest>0,X=!!y.alphaHash,st=!!y.extensions,_t=Kn;y.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(_t=i.toneMapping);let dt={shaderID:mt,shaderType:y.type,shaderName:y.name,vertexShader:Pt,fragmentShader:Yt,defines:y.defines,customVertexShaderID:Ht,customFragmentShaderID:lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:rt,batchingColor:rt&&Y._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&Y.instanceColor!==null,instancingMorph:Bt&&Y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ti,alphaToCoverage:!!y.alphaToCoverage,map:Ct,matcap:Ot,envMap:H,envMapMode:H&&ft.mapping,envMapCubeUVHeight:tt,aoMap:Zt,lightMap:Ft,bumpMap:Ut,normalMap:gt,displacementMap:d&&Wt,emissiveMap:wt,normalMapObjectSpace:gt&&y.normalMapType===Ol,normalMapTangentSpace:gt&&y.normalMapType===ac,metalnessMap:Gt,roughnessMap:Mt,anisotropy:kt,anisotropyMap:_,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:x,clearcoatRoughnessMap:E,dispersion:b,iridescence:K,iridescenceMap:L,iridescenceThicknessMap:D,sheen:ht,sheenColorMap:W,sheenRoughnessMap:it,specularMap:ot,specularColorMap:J,specularIntensityMap:I,transmission:xt,transmissionMap:S,thicknessMap:V,gradientMap:G,opaque:y.transparent===!1&&y.blending===Mi&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:z,alphaHash:X,combine:y.combine,mapUv:Ct&&v(y.map.channel),aoMapUv:Zt&&v(y.aoMap.channel),lightMapUv:Ft&&v(y.lightMap.channel),bumpMapUv:Ut&&v(y.bumpMap.channel),normalMapUv:gt&&v(y.normalMap.channel),displacementMapUv:Wt&&v(y.displacementMap.channel),emissiveMapUv:wt&&v(y.emissiveMap.channel),metalnessMapUv:Gt&&v(y.metalnessMap.channel),roughnessMapUv:Mt&&v(y.roughnessMap.channel),anisotropyMapUv:_&&v(y.anisotropyMap.channel),clearcoatMapUv:C&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:x&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:E&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:L&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:D&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:W&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:it&&v(y.sheenRoughnessMap.channel),specularMapUv:ot&&v(y.specularMap.channel),specularColorMapUv:J&&v(y.specularColorMap.channel),specularIntensityMapUv:I&&v(y.specularIntensityMap.channel),transmissionMapUv:S&&v(y.transmissionMap.channel),thicknessMapUv:V&&v(y.thicknessMap.channel),alphaMapUv:et&&v(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(gt||kt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!j.attributes.uv&&(Ct||et),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:St,skinning:Y.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:Ct&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===ue,decodeVideoTextureEmissive:wt&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===ue,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===we,flipSided:y.side===He,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:st&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&y.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function f(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let k in y.defines)M.push(k),M.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(w(M,y),A(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function w(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function A(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function T(y){let M=g[y.type],k;if(M){let O=Bn[M];k=cr.clone(O.uniforms)}else k=y.uniforms;return k}function P(y,M){let k;for(let O=0,Y=u.length;O<Y;O++){let q=u[O];if(q.cacheKey===M){k=q,++k.usedTimes;break}}return k===void 0&&(k=new Wm(i,M,y,r),u.push(k)),k}function N(y){if(--y.usedTimes===0){let M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function U(y){l.remove(y)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:P,releaseProgram:N,releaseShaderCache:U,programs:u,dispose:B}}function Ym(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _h(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,p,g,v,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),t++,f}function a(h,d,p,g,v,m){let f=o(h,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,d,p,g,v,m){let f=o(h,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||Zm),n.length>1&&n.sort(d||gh),s.length>1&&s.sort(d||gh)}function u(){for(let h=t,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Jm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new _h,i.set(n,[o])):s>=r.length?(o=new _h,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $m(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Z,color:new At};break;case"SpotLight":e={position:new Z,direction:new Z,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[t.id]=e,e}}}function Km(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jm=0;function Qm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tg(i){let t=new $m,e=Km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let s=new Z,r=new he,o=new he;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,w=0,A=0,T=0,P=0,N=0,U=0;c.sort(Qm);for(let y=0,M=c.length;y<M;y++){let k=c[y],O=k.color,Y=k.intensity,q=k.distance,j=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)u+=O.r*Y,h+=O.g*Y,d+=O.b*Y;else if(k.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(k.sh.coefficients[$],Y);U++}else if(k.isDirectionalLight){let $=t.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ft=k.shadow,tt=e.get(k);tt.shadowIntensity=ft.intensity,tt.shadowBias=ft.bias,tt.shadowNormalBias=ft.normalBias,tt.shadowRadius=ft.radius,tt.shadowMapSize=ft.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=k.shadow.matrix,w++}n.directional[p]=$,p++}else if(k.isSpotLight){let $=t.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(O).multiplyScalar(Y),$.distance=q,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,n.spot[v]=$;let ft=k.shadow;if(k.map&&(n.spotLightMap[P]=k.map,P++,ft.updateMatrices(k),k.castShadow&&N++),n.spotLightMatrix[v]=ft.matrix,k.castShadow){let tt=e.get(k);tt.shadowIntensity=ft.intensity,tt.shadowBias=ft.bias,tt.shadowNormalBias=ft.normalBias,tt.shadowRadius=ft.radius,tt.shadowMapSize=ft.mapSize,n.spotShadow[v]=tt,n.spotShadowMap[v]=j,T++}v++}else if(k.isRectAreaLight){let $=t.get(k);$.color.copy(O).multiplyScalar(Y),$.halfWidth.set(k.width*.5,0,0),$.halfHeight.set(0,k.height*.5,0),n.rectArea[m]=$,m++}else if(k.isPointLight){let $=t.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),$.distance=k.distance,$.decay=k.decay,k.castShadow){let ft=k.shadow,tt=e.get(k);tt.shadowIntensity=ft.intensity,tt.shadowBias=ft.bias,tt.shadowNormalBias=ft.normalBias,tt.shadowRadius=ft.radius,tt.shadowMapSize=ft.mapSize,tt.shadowCameraNear=ft.camera.near,tt.shadowCameraFar=ft.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=k.shadow.matrix,A++}n.point[g]=$,g++}else if(k.isHemisphereLight){let $=t.get(k);$.skyColor.copy(k.color).multiplyScalar(Y),$.groundColor.copy(k.groundColor).multiplyScalar(Y),n.hemi[f]=$,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let B=n.hash;(B.directionalLength!==p||B.pointLength!==g||B.spotLength!==v||B.rectAreaLength!==m||B.hemiLength!==f||B.numDirectionalShadows!==w||B.numPointShadows!==A||B.numSpotShadows!==T||B.numSpotMaps!==P||B.numLightProbes!==U)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=T+P-N,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=U,B.directionalLength=p,B.pointLength=g,B.spotLength=v,B.rectAreaLength=m,B.hemiLength=f,B.numDirectionalShadows=w,B.numPointShadows=A,B.numSpotShadows=T,B.numSpotMaps=P,B.numLightProbes=U,n.version=jm++)}function l(c,u){let h=0,d=0,p=0,g=0,v=0,m=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){let A=c[f];if(A.isDirectionalLight){let T=n.directional[h];T.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(A.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(A.isRectAreaLight){let T=n.rectArea[g];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(A.width*.5,0,0),T.halfHeight.set(0,A.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){let T=n.hemi[v];T.direction.setFromMatrixPosition(A.matrixWorld),T.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function xh(i){let t=new tg(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function eg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new xh(i),t.set(s,[a])):r>=o.length?(a=new xh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ng=`void main() {
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
}`;function sg(i,t,e){let n=new os,s=new ne,r=new ne,o=new ge,a=new jr({depthPacking:Bl}),l=new Qr,c={},u=e.maxTextureSize,h={[bn]:He,[He]:bn,[we]:we},d=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Te;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new me(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let f=this.type;this.render=function(N,U,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;let y=i.getRenderTarget(),M=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),O=i.state;O.setBlending($n),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Y=f!==Fn&&this.type===Fn,q=f===Fn&&this.type!==Fn;for(let j=0,$=N.length;j<$;j++){let ft=N[j],tt=ft.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",ft,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let mt=tt.getFrameExtents();if(s.multiply(mt),r.copy(tt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/mt.x),s.x=r.x*mt.x,tt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/mt.y),s.y=r.y*mt.y,tt.mapSize.y=r.y)),tt.map===null||Y===!0||q===!0){let yt=this.type!==Fn?{minFilter:Qe,magFilter:Qe}:{};tt.map!==null&&tt.map.dispose(),tt.map=new fn(s.x,s.y,yt),tt.map.texture.name=ft.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let pt=tt.getViewportCount();for(let yt=0;yt<pt;yt++){let Lt=tt.getViewport(yt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),O.viewport(o),tt.updateMatrices(ft,yt),n=tt.getFrustum(),T(U,B,tt.camera,ft,this.type)}tt.isPointLightShadow!==!0&&this.type===Fn&&w(tt,B),tt.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,k)};function w(N,U){let B=t.update(v);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,p.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new fn(s.x,s.y)),d.uniforms.shadow_pass.value=N.map.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(U,null,B,d,v,null),p.uniforms.shadow_pass.value=N.mapPass.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(U,null,B,p,v,null)}function A(N,U,B,y){let M=null,k=B.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)M=k;else if(M=B.isPointLight===!0?l:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let O=M.uuid,Y=U.uuid,q=c[O];q===void 0&&(q={},c[O]=q);let j=q[Y];j===void 0&&(j=M.clone(),q[Y]=j,U.addEventListener("dispose",P)),M=j}if(M.visible=U.visible,M.wireframe=U.wireframe,y===Fn?M.side=U.shadowSide!==null?U.shadowSide:U.side:M.side=U.shadowSide!==null?U.shadowSide:h[U.side],M.alphaMap=U.alphaMap,M.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,M.map=U.map,M.clipShadows=U.clipShadows,M.clippingPlanes=U.clippingPlanes,M.clipIntersection=U.clipIntersection,M.displacementMap=U.displacementMap,M.displacementScale=U.displacementScale,M.displacementBias=U.displacementBias,M.wireframeLinewidth=U.wireframeLinewidth,M.linewidth=U.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=i.properties.get(M);O.light=B}return M}function T(N,U,B,y,M){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&M===Fn)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,N.matrixWorld);let Y=t.update(N),q=N.material;if(Array.isArray(q)){let j=Y.groups;for(let $=0,ft=j.length;$<ft;$++){let tt=j[$],mt=q[tt.materialIndex];if(mt&&mt.visible){let pt=A(N,mt,y,M);N.onBeforeShadow(i,N,U,B,Y,pt,tt),i.renderBufferDirect(B,null,Y,pt,N,tt),N.onAfterShadow(i,N,U,B,Y,pt,tt)}}}else if(q.visible){let j=A(N,q,y,M);N.onBeforeShadow(i,N,U,B,Y,j,null),i.renderBufferDirect(B,null,Y,j,N,null),N.onAfterShadow(i,N,U,B,Y,j,null)}}let O=N.children;for(let Y=0,q=O.length;Y<q;Y++)T(O[Y],U,B,y,M)}function P(N){N.target.removeEventListener("dispose",P);for(let B in c){let y=c[B],M=N.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}var rg={[ho]:uo,[fo]:go,[po]:_o,[Si]:mo,[uo]:ho,[go]:fo,[_o]:po,[mo]:Si};function og(i,t){function e(){let S=!1,V=new ge,G=null,et=new ge(0,0,0,0);return{setMask:function(z){G!==z&&!S&&(i.colorMask(z,z,z,z),G=z)},setLocked:function(z){S=z},setClear:function(z,X,st,_t,dt){dt===!0&&(z*=_t,X*=_t,st*=_t),V.set(z,X,st,_t),et.equals(V)===!1&&(i.clearColor(z,X,st,_t),et.copy(V))},reset:function(){S=!1,G=null,et.set(-1,0,0,0)}}}function n(){let S=!1,V=!1,G=null,et=null,z=null;return{setReversed:function(X){if(V!==X){let st=t.get("EXT_clip_control");X?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),V=X;let _t=z;z=null,this.setClear(_t)}},getReversed:function(){return V},setTest:function(X){X?ut(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(X){G!==X&&!S&&(i.depthMask(X),G=X)},setFunc:function(X){if(V&&(X=rg[X]),et!==X){switch(X){case ho:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case fo:i.depthFunc(i.LESS);break;case Si:i.depthFunc(i.LEQUAL);break;case po:i.depthFunc(i.EQUAL);break;case mo:i.depthFunc(i.GEQUAL);break;case go:i.depthFunc(i.GREATER);break;case _o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=X}},setLocked:function(X){S=X},setClear:function(X){z!==X&&(V&&(X=1-X),i.clearDepth(X),z=X)},reset:function(){S=!1,G=null,et=null,z=null,V=!1}}}function s(){let S=!1,V=null,G=null,et=null,z=null,X=null,st=null,_t=null,dt=null;return{setTest:function(Tt){S||(Tt?ut(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Tt){V!==Tt&&!S&&(i.stencilMask(Tt),V=Tt)},setFunc:function(Tt,$t,qt){(G!==Tt||et!==$t||z!==qt)&&(i.stencilFunc(Tt,$t,qt),G=Tt,et=$t,z=qt)},setOp:function(Tt,$t,qt){(X!==Tt||st!==$t||_t!==qt)&&(i.stencilOp(Tt,$t,qt),X=Tt,st=$t,_t=qt)},setLocked:function(Tt){S=Tt},setClear:function(Tt){dt!==Tt&&(i.clearStencil(Tt),dt=Tt)},reset:function(){S=!1,V=null,G=null,et=null,z=null,X=null,st=null,_t=null,dt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,w=null,A=null,T=null,P=null,N=null,U=new At(0,0,0),B=0,y=!1,M=null,k=null,O=null,Y=null,q=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ft=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(tt)[1]),$=ft>=1):tt.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),$=ft>=2);let mt=null,pt={},yt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Pt=new ge().fromArray(yt),Yt=new ge().fromArray(Lt);function Ht(S,V,G,et){let z=new Uint8Array(4),X=i.createTexture();i.bindTexture(S,X),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<G;st++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(V,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,z):i.texImage2D(V+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,z);return X}let lt={};lt[i.TEXTURE_2D]=Ht(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=Ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=Ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=Ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(Si),Ut(!1),gt(Za),ut(i.CULL_FACE),Zt($n);function ut(S){u[S]!==!0&&(i.enable(S),u[S]=!0)}function St(S){u[S]!==!1&&(i.disable(S),u[S]=!1)}function Bt(S,V){return h[S]!==V?(i.bindFramebuffer(S,V),h[S]=V,S===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=V),S===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=V),!0):!1}function rt(S,V){let G=p,et=!1;if(S){G=d.get(V),G===void 0&&(G=[],d.set(V,G));let z=S.textures;if(G.length!==z.length||G[0]!==i.COLOR_ATTACHMENT0){for(let X=0,st=z.length;X<st;X++)G[X]=i.COLOR_ATTACHMENT0+X;G.length=z.length,et=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,et=!0);et&&i.drawBuffers(G)}function Ct(S){return g!==S?(i.useProgram(S),g=S,!0):!1}let Ot={[ai]:i.FUNC_ADD,[hl]:i.FUNC_SUBTRACT,[ul]:i.FUNC_REVERSE_SUBTRACT};Ot[dl]=i.MIN,Ot[fl]=i.MAX;let H={[pl]:i.ZERO,[ml]:i.ONE,[gl]:i.SRC_COLOR,[kr]:i.SRC_ALPHA,[Sl]:i.SRC_ALPHA_SATURATE,[yl]:i.DST_COLOR,[xl]:i.DST_ALPHA,[_l]:i.ONE_MINUS_SRC_COLOR,[Vr]:i.ONE_MINUS_SRC_ALPHA,[Ml]:i.ONE_MINUS_DST_COLOR,[vl]:i.ONE_MINUS_DST_ALPHA,[bl]:i.CONSTANT_COLOR,[Tl]:i.ONE_MINUS_CONSTANT_COLOR,[wl]:i.CONSTANT_ALPHA,[El]:i.ONE_MINUS_CONSTANT_ALPHA};function Zt(S,V,G,et,z,X,st,_t,dt,Tt){if(S===$n){v===!0&&(St(i.BLEND),v=!1);return}if(v===!1&&(ut(i.BLEND),v=!0),S!==ll){if(S!==m||Tt!==y){if((f!==ai||T!==ai)&&(i.blendEquation(i.FUNC_ADD),f=ai,T=ai),Tt)switch(S){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFunc(i.ONE,i.ONE);break;case $a:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ka:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $a:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ka:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}w=null,A=null,P=null,N=null,U.set(0,0,0),B=0,m=S,y=Tt}return}z=z||V,X=X||G,st=st||et,(V!==f||z!==T)&&(i.blendEquationSeparate(Ot[V],Ot[z]),f=V,T=z),(G!==w||et!==A||X!==P||st!==N)&&(i.blendFuncSeparate(H[G],H[et],H[X],H[st]),w=G,A=et,P=X,N=st),(_t.equals(U)===!1||dt!==B)&&(i.blendColor(_t.r,_t.g,_t.b,dt),U.copy(_t),B=dt),m=S,y=!1}function Ft(S,V){S.side===we?St(i.CULL_FACE):ut(i.CULL_FACE);let G=S.side===He;V&&(G=!G),Ut(G),S.blending===Mi&&S.transparent===!1?Zt($n):Zt(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),o.setFunc(S.depthFunc),o.setTest(S.depthTest),o.setMask(S.depthWrite),r.setMask(S.colorWrite);let et=S.stencilWrite;a.setTest(et),et&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),wt(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(S){M!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),M=S)}function gt(S){S!==ol?(ut(i.CULL_FACE),S!==k&&(S===Za?i.cullFace(i.BACK):S===al?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),k=S}function Wt(S){S!==O&&($&&i.lineWidth(S),O=S)}function wt(S,V,G){S?(ut(i.POLYGON_OFFSET_FILL),(Y!==V||q!==G)&&(i.polygonOffset(V,G),Y=V,q=G)):St(i.POLYGON_OFFSET_FILL)}function Gt(S){S?ut(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function Mt(S){S===void 0&&(S=i.TEXTURE0+j-1),mt!==S&&(i.activeTexture(S),mt=S)}function kt(S,V,G){G===void 0&&(mt===null?G=i.TEXTURE0+j-1:G=mt);let et=pt[G];et===void 0&&(et={type:void 0,texture:void 0},pt[G]=et),(et.type!==S||et.texture!==V)&&(mt!==G&&(i.activeTexture(G),mt=G),i.bindTexture(S,V||lt[S]),et.type=S,et.texture=V)}function F(){let S=pt[mt];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function K(){try{i.compressedTexImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ht(){try{i.texSubImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function xt(){try{i.texSubImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function _(){try{i.compressedTexSubImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function C(){try{i.compressedTexSubImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function x(){try{i.texStorage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function E(){try{i.texStorage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function L(){try{i.texImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function D(){try{i.texImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function W(S){Pt.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),Pt.copy(S))}function it(S){Yt.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),Yt.copy(S))}function ot(S,V){let G=c.get(V);G===void 0&&(G=new WeakMap,c.set(V,G));let et=G.get(S);et===void 0&&(et=i.getUniformBlockIndex(V,S.name),G.set(S,et))}function J(S,V){let et=c.get(V).get(S);l.get(V)!==et&&(i.uniformBlockBinding(V,et,S.__bindingPointIndex),l.set(V,et))}function I(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},mt=null,pt={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,w=null,A=null,T=null,P=null,N=null,U=new At(0,0,0),B=0,y=!1,M=null,k=null,O=null,Y=null,q=null,Pt.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:St,bindFramebuffer:Bt,drawBuffers:rt,useProgram:Ct,setBlending:Zt,setMaterial:Ft,setFlipSided:Ut,setCullFace:gt,setLineWidth:Wt,setPolygonOffset:wt,setScissorTest:Gt,activeTexture:Mt,bindTexture:kt,unbindTexture:F,compressedTexImage2D:b,compressedTexImage3D:K,texImage2D:L,texImage3D:D,updateUBOMapping:ot,uniformBlockBinding:J,texStorage2D:x,texStorage3D:E,texSubImage2D:ht,texSubImage3D:xt,compressedTexSubImage2D:_,compressedTexSubImage3D:C,scissor:W,viewport:it,reset:I}}function ag(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,b){return p?new OffscreenCanvas(F,b):Ns("canvas")}function v(F,b,K){let ht=1,xt=kt(F);if((xt.width>K||xt.height>K)&&(ht=K/Math.max(xt.width,xt.height)),ht<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let _=Math.floor(ht*xt.width),C=Math.floor(ht*xt.height);h===void 0&&(h=g(_,C));let x=b?g(_,C):h;return x.width=_,x.height=C,x.getContext("2d").drawImage(F,0,0,_,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+_+"x"+C+")."),x}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),F;return F}function m(F){return F.generateMipmaps}function f(F){i.generateMipmap(F)}function w(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(F,b,K,ht,xt=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let _=b;if(b===i.RED&&(K===i.FLOAT&&(_=i.R32F),K===i.HALF_FLOAT&&(_=i.R16F),K===i.UNSIGNED_BYTE&&(_=i.R8)),b===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(_=i.R8UI),K===i.UNSIGNED_SHORT&&(_=i.R16UI),K===i.UNSIGNED_INT&&(_=i.R32UI),K===i.BYTE&&(_=i.R8I),K===i.SHORT&&(_=i.R16I),K===i.INT&&(_=i.R32I)),b===i.RG&&(K===i.FLOAT&&(_=i.RG32F),K===i.HALF_FLOAT&&(_=i.RG16F),K===i.UNSIGNED_BYTE&&(_=i.RG8)),b===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(_=i.RG8UI),K===i.UNSIGNED_SHORT&&(_=i.RG16UI),K===i.UNSIGNED_INT&&(_=i.RG32UI),K===i.BYTE&&(_=i.RG8I),K===i.SHORT&&(_=i.RG16I),K===i.INT&&(_=i.RG32I)),b===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(_=i.RGB8UI),K===i.UNSIGNED_SHORT&&(_=i.RGB16UI),K===i.UNSIGNED_INT&&(_=i.RGB32UI),K===i.BYTE&&(_=i.RGB8I),K===i.SHORT&&(_=i.RGB16I),K===i.INT&&(_=i.RGB32I)),b===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(_=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(_=i.RGBA16UI),K===i.UNSIGNED_INT&&(_=i.RGBA32UI),K===i.BYTE&&(_=i.RGBA8I),K===i.SHORT&&(_=i.RGBA16I),K===i.INT&&(_=i.RGBA32I)),b===i.RGB&&(K===i.UNSIGNED_INT_5_9_9_9_REV&&(_=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(_=i.R11F_G11F_B10F)),b===i.RGBA){let C=xt?Ds:oe.getTransfer(ht);K===i.FLOAT&&(_=i.RGBA32F),K===i.HALF_FLOAT&&(_=i.RGBA16F),K===i.UNSIGNED_BYTE&&(_=C===ue?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(_=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(_=i.RGB5_A1)}return(_===i.R16F||_===i.R32F||_===i.RG16F||_===i.RG32F||_===i.RGBA16F||_===i.RGBA32F)&&t.get("EXT_color_buffer_float"),_}function T(F,b){let K;return F?b===null||b===di||b===us?K=i.DEPTH24_STENCIL8:b===Cn?K=i.DEPTH32F_STENCIL8:b===ls&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===di||b===us?K=i.DEPTH_COMPONENT24:b===Cn?K=i.DEPTH_COMPONENT32F:b===ls&&(K=i.DEPTH_COMPONENT16),K}function P(F,b){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==Qe&&F.minFilter!==Tn?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function N(F){let b=F.target;b.removeEventListener("dispose",N),B(b),b.isVideoTexture&&u.delete(b)}function U(F){let b=F.target;b.removeEventListener("dispose",U),M(b)}function B(F){let b=n.get(F);if(b.__webglInit===void 0)return;let K=F.source,ht=d.get(K);if(ht){let xt=ht[b.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&y(F),Object.keys(ht).length===0&&d.delete(K)}n.remove(F)}function y(F){let b=n.get(F);i.deleteTexture(b.__webglTexture);let K=F.source,ht=d.get(K);delete ht[b.__cacheKey],o.memory.textures--}function M(F){let b=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(b.__webglFramebuffer[ht]))for(let xt=0;xt<b.__webglFramebuffer[ht].length;xt++)i.deleteFramebuffer(b.__webglFramebuffer[ht][xt]);else i.deleteFramebuffer(b.__webglFramebuffer[ht]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ht])}else{if(Array.isArray(b.__webglFramebuffer))for(let ht=0;ht<b.__webglFramebuffer.length;ht++)i.deleteFramebuffer(b.__webglFramebuffer[ht]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ht=0;ht<b.__webglColorRenderbuffer.length;ht++)b.__webglColorRenderbuffer[ht]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ht]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let K=F.textures;for(let ht=0,xt=K.length;ht<xt;ht++){let _=n.get(K[ht]);_.__webglTexture&&(i.deleteTexture(_.__webglTexture),o.memory.textures--),n.remove(K[ht])}n.remove(F)}let k=0;function O(){k=0}function Y(){let F=k;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),k+=1,F}function q(F){let b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function j(F,b){let K=n.get(F);if(F.isVideoTexture&&Gt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&K.__version!==F.version){let ht=F.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(K,F,b);return}}else F.isExternalTexture&&(K.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+b)}function $(F,b){let K=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){lt(K,F,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+b)}function ft(F,b){let K=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){lt(K,F,b);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+b)}function tt(F,b){let K=n.get(F);if(F.version>0&&K.__version!==F.version){ut(K,F,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+b)}let mt={[bi]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Hr]:i.MIRRORED_REPEAT},pt={[Qe]:i.NEAREST,[Nl]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[Mo]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},yt={[zl]:i.NEVER,[Xl]:i.ALWAYS,[kl]:i.LESS,[cc]:i.LEQUAL,[Vl]:i.EQUAL,[Wl]:i.GEQUAL,[Hl]:i.GREATER,[Gl]:i.NOTEQUAL};function Lt(F,b){if(b.type===Cn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Tn||b.magFilter===Mo||b.magFilter===ir||b.magFilter===ui||b.minFilter===Tn||b.minFilter===Mo||b.minFilter===ir||b.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,mt[b.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,mt[b.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,mt[b.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,pt[b.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,pt[b.minFilter]),b.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,yt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qe||b.minFilter!==ir&&b.minFilter!==ui||b.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Pt(F,b){let K=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",N));let ht=b.source,xt=d.get(ht);xt===void 0&&(xt={},d.set(ht,xt));let _=q(b);if(_!==F.__cacheKey){xt[_]===void 0&&(xt[_]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),xt[_].usedTimes++;let C=xt[F.__cacheKey];C!==void 0&&(xt[F.__cacheKey].usedTimes--,C.usedTimes===0&&y(b)),F.__cacheKey=_,F.__webglTexture=xt[_].texture}return K}function Yt(F,b,K){return Math.floor(Math.floor(F/K)/b)}function Ht(F,b,K,ht){let _=F.updateRanges;if(_.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,K,ht,b.data);else{_.sort((D,W)=>D.start-W.start);let C=0;for(let D=1;D<_.length;D++){let W=_[C],it=_[D],ot=W.start+W.count,J=Yt(it.start,b.width,4),I=Yt(W.start,b.width,4);it.start<=ot+1&&J===I&&Yt(it.start+it.count-1,b.width,4)===J?W.count=Math.max(W.count,it.start+it.count-W.start):(++C,_[C]=it)}_.length=C+1;let x=i.getParameter(i.UNPACK_ROW_LENGTH),E=i.getParameter(i.UNPACK_SKIP_PIXELS),L=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let D=0,W=_.length;D<W;D++){let it=_[D],ot=Math.floor(it.start/4),J=Math.ceil(it.count/4),I=ot%b.width,S=Math.floor(ot/b.width),V=J,G=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,I),i.pixelStorei(i.UNPACK_SKIP_ROWS,S),e.texSubImage2D(i.TEXTURE_2D,0,I,S,V,G,K,ht,b.data)}F.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,x),i.pixelStorei(i.UNPACK_SKIP_PIXELS,E),i.pixelStorei(i.UNPACK_SKIP_ROWS,L)}}function lt(F,b,K){let ht=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ht=i.TEXTURE_3D);let xt=Pt(F,b),_=b.source;e.bindTexture(ht,F.__webglTexture,i.TEXTURE0+K);let C=n.get(_);if(_.version!==C.__version||xt===!0){e.activeTexture(i.TEXTURE0+K);let x=oe.getPrimaries(oe.workingColorSpace),E=b.colorSpace===jn?null:oe.getPrimaries(b.colorSpace),L=b.colorSpace===jn||x===E?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);let D=v(b.image,!1,s.maxTextureSize);D=Mt(b,D);let W=r.convert(b.format,b.colorSpace),it=r.convert(b.type),ot=A(b.internalFormat,W,it,b.colorSpace,b.isVideoTexture);Lt(ht,b);let J,I=b.mipmaps,S=b.isVideoTexture!==!0,V=C.__version===void 0||xt===!0,G=_.dataReady,et=P(b,D);if(b.isDepthTexture)ot=T(b.format===ds,b.type),V&&(S?e.texStorage2D(i.TEXTURE_2D,1,ot,D.width,D.height):e.texImage2D(i.TEXTURE_2D,0,ot,D.width,D.height,0,W,it,null));else if(b.isDataTexture)if(I.length>0){S&&V&&e.texStorage2D(i.TEXTURE_2D,et,ot,I[0].width,I[0].height);for(let z=0,X=I.length;z<X;z++)J=I[z],S?G&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,J.width,J.height,W,it,J.data):e.texImage2D(i.TEXTURE_2D,z,ot,J.width,J.height,0,W,it,J.data);b.generateMipmaps=!1}else S?(V&&e.texStorage2D(i.TEXTURE_2D,et,ot,D.width,D.height),G&&Ht(b,D,W,it)):e.texImage2D(i.TEXTURE_2D,0,ot,D.width,D.height,0,W,it,D.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){S&&V&&e.texStorage3D(i.TEXTURE_2D_ARRAY,et,ot,I[0].width,I[0].height,D.depth);for(let z=0,X=I.length;z<X;z++)if(J=I[z],b.format!==mn)if(W!==null)if(S){if(G)if(b.layerUpdates.size>0){let st=gc(J.width,J.height,b.format,b.type);for(let _t of b.layerUpdates){let dt=J.data.subarray(_t*st/J.data.BYTES_PER_ELEMENT,(_t+1)*st/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,_t,J.width,J.height,1,W,dt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,J.width,J.height,D.depth,W,J.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,ot,J.width,J.height,D.depth,0,J.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else S?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,J.width,J.height,D.depth,W,it,J.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,ot,J.width,J.height,D.depth,0,W,it,J.data)}else{S&&V&&e.texStorage2D(i.TEXTURE_2D,et,ot,I[0].width,I[0].height);for(let z=0,X=I.length;z<X;z++)J=I[z],b.format!==mn?W!==null?S?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,J.width,J.height,W,J.data):e.compressedTexImage2D(i.TEXTURE_2D,z,ot,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):S?G&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,J.width,J.height,W,it,J.data):e.texImage2D(i.TEXTURE_2D,z,ot,J.width,J.height,0,W,it,J.data)}else if(b.isDataArrayTexture)if(S){if(V&&e.texStorage3D(i.TEXTURE_2D_ARRAY,et,ot,D.width,D.height,D.depth),G)if(b.layerUpdates.size>0){let z=gc(D.width,D.height,b.format,b.type);for(let X of b.layerUpdates){let st=D.data.subarray(X*z/D.data.BYTES_PER_ELEMENT,(X+1)*z/D.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,D.width,D.height,1,W,it,st)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,W,it,D.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ot,D.width,D.height,D.depth,0,W,it,D.data);else if(b.isData3DTexture)S?(V&&e.texStorage3D(i.TEXTURE_3D,et,ot,D.width,D.height,D.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,W,it,D.data)):e.texImage3D(i.TEXTURE_3D,0,ot,D.width,D.height,D.depth,0,W,it,D.data);else if(b.isFramebufferTexture){if(V)if(S)e.texStorage2D(i.TEXTURE_2D,et,ot,D.width,D.height);else{let z=D.width,X=D.height;for(let st=0;st<et;st++)e.texImage2D(i.TEXTURE_2D,st,ot,z,X,0,W,it,null),z>>=1,X>>=1}}else if(I.length>0){if(S&&V){let z=kt(I[0]);e.texStorage2D(i.TEXTURE_2D,et,ot,z.width,z.height)}for(let z=0,X=I.length;z<X;z++)J=I[z],S?G&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,W,it,J):e.texImage2D(i.TEXTURE_2D,z,ot,W,it,J);b.generateMipmaps=!1}else if(S){if(V){let z=kt(D);e.texStorage2D(i.TEXTURE_2D,et,ot,z.width,z.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,W,it,D)}else e.texImage2D(i.TEXTURE_2D,0,ot,W,it,D);m(b)&&f(ht),C.__version=_.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function ut(F,b,K){if(b.image.length!==6)return;let ht=Pt(F,b),xt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+K);let _=n.get(xt);if(xt.version!==_.__version||ht===!0){e.activeTexture(i.TEXTURE0+K);let C=oe.getPrimaries(oe.workingColorSpace),x=b.colorSpace===jn?null:oe.getPrimaries(b.colorSpace),E=b.colorSpace===jn||C===x?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,E);let L=b.isCompressedTexture||b.image[0].isCompressedTexture,D=b.image[0]&&b.image[0].isDataTexture,W=[];for(let X=0;X<6;X++)!L&&!D?W[X]=v(b.image[X],!0,s.maxCubemapSize):W[X]=D?b.image[X].image:b.image[X],W[X]=Mt(b,W[X]);let it=W[0],ot=r.convert(b.format,b.colorSpace),J=r.convert(b.type),I=A(b.internalFormat,ot,J,b.colorSpace),S=b.isVideoTexture!==!0,V=_.__version===void 0||ht===!0,G=xt.dataReady,et=P(b,it);Lt(i.TEXTURE_CUBE_MAP,b);let z;if(L){S&&V&&e.texStorage2D(i.TEXTURE_CUBE_MAP,et,I,it.width,it.height);for(let X=0;X<6;X++){z=W[X].mipmaps;for(let st=0;st<z.length;st++){let _t=z[st];b.format!==mn?ot!==null?S?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st,0,0,_t.width,_t.height,ot,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st,I,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st,0,0,_t.width,_t.height,ot,J,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st,I,_t.width,_t.height,0,ot,J,_t.data)}}}else{if(z=b.mipmaps,S&&V){z.length>0&&et++;let X=kt(W[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,et,I,X.width,X.height)}for(let X=0;X<6;X++)if(D){S?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,W[X].width,W[X].height,ot,J,W[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,I,W[X].width,W[X].height,0,ot,J,W[X].data);for(let st=0;st<z.length;st++){let dt=z[st].image[X].image;S?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st+1,0,0,dt.width,dt.height,ot,J,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st+1,I,dt.width,dt.height,0,ot,J,dt.data)}}else{S?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ot,J,W[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,I,ot,J,W[X]);for(let st=0;st<z.length;st++){let _t=z[st];S?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st+1,0,0,ot,J,_t.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st+1,I,ot,J,_t.image[X])}}}m(b)&&f(i.TEXTURE_CUBE_MAP),_.__version=xt.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function St(F,b,K,ht,xt,_){let C=r.convert(K.format,K.colorSpace),x=r.convert(K.type),E=A(K.internalFormat,C,x,K.colorSpace),L=n.get(b),D=n.get(K);if(D.__renderTarget=b,!L.__hasExternalTextures){let W=Math.max(1,b.width>>_),it=Math.max(1,b.height>>_);xt===i.TEXTURE_3D||xt===i.TEXTURE_2D_ARRAY?e.texImage3D(xt,_,E,W,it,b.depth,0,C,x,null):e.texImage2D(xt,_,E,W,it,0,C,x,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),wt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,xt,D.__webglTexture,0,Wt(b)):(xt===i.TEXTURE_2D||xt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,xt,D.__webglTexture,_),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(F,b,K){if(i.bindRenderbuffer(i.RENDERBUFFER,F),b.depthBuffer){let ht=b.depthTexture,xt=ht&&ht.isDepthTexture?ht.type:null,_=T(b.stencilBuffer,xt),C=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,x=Wt(b);wt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,x,_,b.width,b.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,x,_,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,_,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,C,i.RENDERBUFFER,F)}else{let ht=b.textures;for(let xt=0;xt<ht.length;xt++){let _=ht[xt],C=r.convert(_.format,_.colorSpace),x=r.convert(_.type),E=A(_.internalFormat,C,x,_.colorSpace),L=Wt(b);K&&wt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,E,b.width,b.height):wt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,E,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,E,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(F,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ht=n.get(b.depthTexture);ht.__renderTarget=b,(!ht.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j(b.depthTexture,0);let xt=ht.__webglTexture,_=Wt(b);if(b.depthTexture.format===ts)wt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xt,0,_):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xt,0);else if(b.depthTexture.format===ds)wt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xt,0,_):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Ct(F){let b=n.get(F),K=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){let ht=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ht){let xt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ht.removeEventListener("dispose",xt)};ht.addEventListener("dispose",xt),b.__depthDisposeCallback=xt}b.__boundDepthTexture=ht}if(F.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");let ht=F.texture.mipmaps;ht&&ht.length>0?rt(b.__webglFramebuffer[0],F):rt(b.__webglFramebuffer,F)}else if(K){b.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ht]),b.__webglDepthbuffer[ht]===void 0)b.__webglDepthbuffer[ht]=i.createRenderbuffer(),Bt(b.__webglDepthbuffer[ht],F,!1);else{let xt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_=b.__webglDepthbuffer[ht];i.bindRenderbuffer(i.RENDERBUFFER,_),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,_)}}else{let ht=F.texture.mipmaps;if(ht&&ht.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Bt(b.__webglDepthbuffer,F,!1);else{let xt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,_)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(F,b,K){let ht=n.get(F);b!==void 0&&St(ht.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Ct(F)}function H(F){let b=F.texture,K=n.get(F),ht=n.get(b);F.addEventListener("dispose",U);let xt=F.textures,_=F.isWebGLCubeRenderTarget===!0,C=xt.length>1;if(C||(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=b.version,o.memory.textures++),_){K.__webglFramebuffer=[];for(let x=0;x<6;x++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[x]=[];for(let E=0;E<b.mipmaps.length;E++)K.__webglFramebuffer[x][E]=i.createFramebuffer()}else K.__webglFramebuffer[x]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let x=0;x<b.mipmaps.length;x++)K.__webglFramebuffer[x]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(C)for(let x=0,E=xt.length;x<E;x++){let L=n.get(xt[x]);L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&wt(F)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let x=0;x<xt.length;x++){let E=xt[x];K.__webglColorRenderbuffer[x]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[x]);let L=r.convert(E.format,E.colorSpace),D=r.convert(E.type),W=A(E.internalFormat,L,D,E.colorSpace,F.isXRRenderTarget===!0),it=Wt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,W,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+x,i.RENDERBUFFER,K.__webglColorRenderbuffer[x])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(K.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,b);for(let x=0;x<6;x++)if(b.mipmaps&&b.mipmaps.length>0)for(let E=0;E<b.mipmaps.length;E++)St(K.__webglFramebuffer[x][E],F,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+x,E);else St(K.__webglFramebuffer[x],F,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+x,0);m(b)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(C){for(let x=0,E=xt.length;x<E;x++){let L=xt[x],D=n.get(L),W=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(W=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(W,D.__webglTexture),Lt(W,L),St(K.__webglFramebuffer,F,L,i.COLOR_ATTACHMENT0+x,W,0),m(L)&&f(W)}e.unbindTexture()}else{let x=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(x=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(x,ht.__webglTexture),Lt(x,b),b.mipmaps&&b.mipmaps.length>0)for(let E=0;E<b.mipmaps.length;E++)St(K.__webglFramebuffer[E],F,b,i.COLOR_ATTACHMENT0,x,E);else St(K.__webglFramebuffer,F,b,i.COLOR_ATTACHMENT0,x,0);m(b)&&f(x),e.unbindTexture()}F.depthBuffer&&Ct(F)}function Zt(F){let b=F.textures;for(let K=0,ht=b.length;K<ht;K++){let xt=b[K];if(m(xt)){let _=w(F),C=n.get(xt).__webglTexture;e.bindTexture(_,C),f(_),e.unbindTexture()}}}let Ft=[],Ut=[];function gt(F){if(F.samples>0){if(wt(F)===!1){let b=F.textures,K=F.width,ht=F.height,xt=i.COLOR_BUFFER_BIT,_=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=n.get(F),x=b.length>1;if(x)for(let L=0;L<b.length;L++)e.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,C.__webglMultisampledFramebuffer);let E=F.texture.mipmaps;E&&E.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,C.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,C.__webglFramebuffer);for(let L=0;L<b.length;L++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(xt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(xt|=i.STENCIL_BUFFER_BIT)),x){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,C.__webglColorRenderbuffer[L]);let D=n.get(b[L]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,K,ht,0,0,K,ht,xt,i.NEAREST),l===!0&&(Ft.length=0,Ut.length=0,Ft.push(i.COLOR_ATTACHMENT0+L),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ft.push(_),Ut.push(_),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),x)for(let L=0;L<b.length;L++){e.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,C.__webglColorRenderbuffer[L]);let D=n.get(b[L]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,C.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){let b=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Wt(F){return Math.min(s.maxSamples,F.samples)}function wt(F){let b=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Gt(F){let b=o.render.frame;u.get(F)!==b&&(u.set(F,b),F.update())}function Mt(F,b){let K=F.colorSpace,ht=F.format,xt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||K!==Ti&&K!==jn&&(oe.getTransfer(K)===ue?(ht!==mn||xt!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),b}function kt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=ft,this.setTextureCube=tt,this.rebindTextures=Ot,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=St,this.useMultisampledRTT=wt}function cg(i,t){function e(n,s=jn){let r,o=oe.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===bo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===To)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tc)return i.BYTE;if(n===ec)return i.SHORT;if(n===ls)return i.UNSIGNED_SHORT;if(n===So)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===hs)return i.HALF_FLOAT;if(n===sc)return i.ALPHA;if(n===rc)return i.RGB;if(n===mn)return i.RGBA;if(n===ts)return i.DEPTH_COMPONENT;if(n===ds)return i.DEPTH_STENCIL;if(n===wo)return i.RED;if(n===Eo)return i.RED_INTEGER;if(n===oc)return i.RG;if(n===Ao)return i.RG_INTEGER;if(n===Co)return i.RGBA_INTEGER;if(n===sr||n===rr||n===or||n===ar)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ro||n===Io||n===Po||n===Lo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Do||n===Uo||n===No)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Do||n===Uo)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===No)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fo||n===Bo||n===Oo||n===zo||n===ko||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$o||n===Ko||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$o)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===ta||n===ea||n===na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var lg=`
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

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ys(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:lg,fragmentShader:hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ic=class extends Yn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null,v=typeof XRWebGLBinding<"u",m=new Rc,f={},w=e.getContextAttributes(),A=null,T=null,P=[],N=[],U=new ne,B=null,y=new ke;y.viewport=new ge;let M=new ke;M.viewport=new ge;let k=[y,M],O=new lo,Y=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let ut=P[lt];return ut===void 0&&(ut=new ss,P[lt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(lt){let ut=P[lt];return ut===void 0&&(ut=new ss,P[lt]=ut),ut.getGripSpace()},this.getHand=function(lt){let ut=P[lt];return ut===void 0&&(ut=new ss,P[lt]=ut),ut.getHandSpace()};function j(lt){let ut=N.indexOf(lt.inputSource);if(ut===-1)return;let St=P[ut];St!==void 0&&(St.update(lt.inputSource,lt.frame,c||o),St.dispatchEvent({type:lt.type,data:lt.inputSource}))}function $(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ft);for(let lt=0;lt<P.length;lt++){let ut=N[lt];ut!==null&&(N[lt]=null,P[lt].disconnect(ut))}Y=null,q=null,m.reset();for(let lt in f)delete f[lt];t.setRenderTarget(A),p=null,d=null,h=null,s=null,T=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(B),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){a=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(lt){c=lt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ft),w.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(U),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Bt=null,rt=null;w.depth&&(rt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=w.stencil?ds:ts,Bt=w.stencil?us:di);let Ct={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new fn(d.textureWidth,d.textureHeight,{format:mn,type:An,depthTexture:new qs(d.textureWidth,d.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let St={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new fn(p.framebufferWidth,p.framebufferHeight,{format:mn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ft(lt){for(let ut=0;ut<lt.removed.length;ut++){let St=lt.removed[ut],Bt=N.indexOf(St);Bt>=0&&(N[Bt]=null,P[Bt].disconnect(St))}for(let ut=0;ut<lt.added.length;ut++){let St=lt.added[ut],Bt=N.indexOf(St);if(Bt===-1){for(let Ct=0;Ct<P.length;Ct++)if(Ct>=N.length){N.push(St),Bt=Ct;break}else if(N[Ct]===null){N[Ct]=St,Bt=Ct;break}if(Bt===-1)break}let rt=P[Bt];rt&&rt.connect(St)}}let tt=new Z,mt=new Z;function pt(lt,ut,St){tt.setFromMatrixPosition(ut.matrixWorld),mt.setFromMatrixPosition(St.matrixWorld);let Bt=tt.distanceTo(mt),rt=ut.projectionMatrix.elements,Ct=St.projectionMatrix.elements,Ot=rt[14]/(rt[10]-1),H=rt[14]/(rt[10]+1),Zt=(rt[9]+1)/rt[5],Ft=(rt[9]-1)/rt[5],Ut=(rt[8]-1)/rt[0],gt=(Ct[8]+1)/Ct[0],Wt=Ot*Ut,wt=Ot*gt,Gt=Bt/(-Ut+gt),Mt=Gt*-Ut;if(ut.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(Mt),lt.translateZ(Gt),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),rt[10]===-1)lt.projectionMatrix.copy(ut.projectionMatrix),lt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let kt=Ot+Gt,F=H+Gt,b=Wt-Mt,K=wt+(Bt-Mt),ht=Zt*H/F*kt,xt=Ft*H/F*kt;lt.projectionMatrix.makePerspective(b,K,ht,xt,kt,F),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function yt(lt,ut){ut===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(ut.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let ut=lt.near,St=lt.far;m.texture!==null&&(m.depthNear>0&&(ut=m.depthNear),m.depthFar>0&&(St=m.depthFar)),O.near=M.near=y.near=ut,O.far=M.far=y.far=St,(Y!==O.near||q!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),Y=O.near,q=O.far),O.layers.mask=lt.layers.mask|6,y.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;let Bt=lt.parent,rt=O.cameras;yt(O,Bt);for(let Ct=0;Ct<rt.length;Ct++)yt(rt[Ct],Bt);rt.length===2?pt(O,y,M):O.projectionMatrix.copy(y.projectionMatrix),Lt(lt,O,Bt)};function Lt(lt,ut,St){St===null?lt.matrix.copy(ut.matrixWorld):(lt.matrix.copy(St.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(ut.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(ut.projectionMatrix),lt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=es*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(lt){l=lt,d!==null&&(d.fixedFoveation=lt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=lt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(lt){return f[lt]};let Pt=null;function Yt(lt,ut){if(u=ut.getViewerPose(c||o),g=ut,u!==null){let St=u.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let Bt=!1;St.length!==O.cameras.length&&(O.cameras.length=0,Bt=!0);for(let H=0;H<St.length;H++){let Zt=St[H],Ft=null;if(p!==null)Ft=p.getViewport(Zt);else{let gt=h.getViewSubImage(d,Zt);Ft=gt.viewport,H===0&&(t.setRenderTargetTextures(T,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(T))}let Ut=k[H];Ut===void 0&&(Ut=new ke,Ut.layers.enable(H),Ut.viewport=new ge,k[H]=Ut),Ut.matrix.fromArray(Zt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Zt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),H===0&&(O.matrix.copy(Ut.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Bt===!0&&O.cameras.push(Ut)}let rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=n.getBinding();let H=h.getDepthInformation(St[0]);H&&H.isValid&&H.texture&&m.init(H,s.renderState)}if(rt&&rt.includes("camera-access")&&v){t.state.unbindTexture(),h=n.getBinding();for(let H=0;H<St.length;H++){let Zt=St[H].camera;if(Zt){let Ft=f[Zt];Ft||(Ft=new Ys,f[Zt]=Ft);let Ut=h.getCameraImage(Zt);Ft.sourceTexture=Ut}}}}for(let St=0;St<P.length;St++){let Bt=N[St],rt=P[St];Bt!==null&&rt!==void 0&&rt.update(Bt,ut,c||o)}Pt&&Pt(lt,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}let Ht=new vh;Ht.setAnimationLoop(Yt),this.setAnimationLoop=function(lt){Pt=lt},this.dispose=function(){}}},Ui=new wn,ug=new he;function dg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,dc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,A,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===He&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===He&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=t.get(f),A=w.envMap,T=w.envMapRotation;A&&(m.envMap.value=A,Ui.copy(T),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(ug.makeRotationFromEuler(Ui)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=A*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===He&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,A){let T=A.program;n.uniformBlockBinding(w,T)}function c(w,A){let T=s[w.id];T===void 0&&(g(w),T=u(w),s[w.id]=T,w.addEventListener("dispose",m));let P=A.program;n.updateUBOMapping(w,P);let N=t.render.frame;r[w.id]!==N&&(d(w),r[w.id]=N)}function u(w){let A=h();w.__bindingPointIndex=A;let T=i.createBuffer(),P=w.__size,N=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,T),T}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let A=s[w.id],T=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let N=0,U=T.length;N<U;N++){let B=Array.isArray(T[N])?T[N]:[T[N]];for(let y=0,M=B.length;y<M;y++){let k=B[y];if(p(k,N,y,P)===!0){let O=k.__offset,Y=Array.isArray(k.value)?k.value:[k.value],q=0;for(let j=0;j<Y.length;j++){let $=Y[j],ft=v($);typeof $=="number"||typeof $=="boolean"?(k.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,O+q,k.__data)):$.isMatrix3?(k.__data[0]=$.elements[0],k.__data[1]=$.elements[1],k.__data[2]=$.elements[2],k.__data[3]=0,k.__data[4]=$.elements[3],k.__data[5]=$.elements[4],k.__data[6]=$.elements[5],k.__data[7]=0,k.__data[8]=$.elements[6],k.__data[9]=$.elements[7],k.__data[10]=$.elements[8],k.__data[11]=0):($.toArray(k.__data,q),q+=ft.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,A,T,P){let N=w.value,U=A+"_"+T;if(P[U]===void 0)return typeof N=="number"||typeof N=="boolean"?P[U]=N:P[U]=N.clone(),!0;{let B=P[U];if(typeof N=="number"||typeof N=="boolean"){if(B!==N)return P[U]=N,!0}else if(B.equals(N)===!1)return B.copy(N),!0}return!1}function g(w){let A=w.uniforms,T=0,P=16;for(let U=0,B=A.length;U<B;U++){let y=Array.isArray(A[U])?A[U]:[A[U]];for(let M=0,k=y.length;M<k;M++){let O=y[M],Y=Array.isArray(O.value)?O.value:[O.value];for(let q=0,j=Y.length;q<j;q++){let $=Y[q],ft=v($),tt=T%P,mt=tt%ft.boundary,pt=tt+mt;T+=mt,pt!==0&&P-pt<ft.storage&&(T+=P-pt),O.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=ft.storage}}}let N=T%P;return N>0&&(T+=P-N),w.__size=T,w.__cache={},this}function v(w){let A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function m(w){let A=w.target;A.removeEventListener("dispose",m);let T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var aa=class{constructor(t={}){let{canvas:e=ql(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,f=null,w=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,P=!1;this._outputColorSpace=Ce;let N=0,U=0,B=null,y=-1,M=null,k=new ge,O=new ge,Y=null,q=new At(0),j=0,$=e.width,ft=e.height,tt=1,mt=null,pt=null,yt=new ge(0,0,$,ft),Lt=new ge(0,0,$,ft),Pt=!1,Yt=new os,Ht=!1,lt=!1,ut=new he,St=new Z,Bt=new ge,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Ot(){return B===null?tt:1}let H=n;function Zt(R,Q){return e.getContext(R,Q)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",G,!1),e.addEventListener("webglcontextrestored",et,!1),e.addEventListener("webglcontextcreationerror",z,!1),H===null){let Q="webgl2";if(H=Zt(Q,R),H===null)throw Zt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ft,Ut,gt,Wt,wt,Gt,Mt,kt,F,b,K,ht,xt,_,C,x,E,L,D,W,it,ot,J,I;function S(){Ft=new Pp(H),Ft.init(),ot=new cg(H,Ft),Ut=new Tp(H,Ft,t,ot),gt=new og(H,Ft),Ut.reversedDepthBuffer&&d&&gt.buffers.depth.setReversed(!0),Wt=new Up(H),wt=new Ym,Gt=new ag(H,Ft,gt,wt,Ut,ot,Wt),Mt=new Ep(T),kt=new Ip(T),F=new zu(H),J=new Sp(H,F),b=new Lp(H,F,Wt,J),K=new Fp(H,b,F,Wt),D=new Np(H,Ut,Gt),x=new wp(wt),ht=new qm(T,Mt,kt,Ft,Ut,J,x),xt=new dg(T,wt),_=new Jm,C=new eg(Ft),L=new Mp(T,Mt,kt,gt,K,p,l),E=new sg(T,K,Ut),I=new fg(H,Wt,Ut,gt),W=new bp(H,Ft,Wt),it=new Dp(H,Ft,Wt),Wt.programs=ht.programs,T.capabilities=Ut,T.extensions=Ft,T.properties=wt,T.renderLists=_,T.shadowMap=E,T.state=gt,T.info=Wt}S();let V=new Ic(T,H);this.xr=V,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let R=Ft.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Ft.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(R){R!==void 0&&(tt=R,this.setSize($,ft,!1))},this.getSize=function(R){return R.set($,ft)},this.setSize=function(R,Q,at=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,ft=Q,e.width=Math.floor(R*tt),e.height=Math.floor(Q*tt),at===!0&&(e.style.width=R+"px",e.style.height=Q+"px"),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set($*tt,ft*tt).floor()},this.setDrawingBufferSize=function(R,Q,at){$=R,ft=Q,tt=at,e.width=Math.floor(R*at),e.height=Math.floor(Q*at),this.setViewport(0,0,R,Q)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(yt)},this.setViewport=function(R,Q,at,ct){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,Q,at,ct),gt.viewport(k.copy(yt).multiplyScalar(tt).round())},this.getScissor=function(R){return R.copy(Lt)},this.setScissor=function(R,Q,at,ct){R.isVector4?Lt.set(R.x,R.y,R.z,R.w):Lt.set(R,Q,at,ct),gt.scissor(O.copy(Lt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(R){gt.setScissorTest(Pt=R)},this.setOpaqueSort=function(R){mt=R},this.setTransparentSort=function(R){pt=R},this.getClearColor=function(R){return R.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(R=!0,Q=!0,at=!0){let ct=0;if(R){let nt=!1;if(B!==null){let vt=B.texture.format;nt=vt===Co||vt===Ao||vt===Eo}if(nt){let vt=B.texture.type,It=vt===An||vt===di||vt===ls||vt===us||vt===bo||vt===To,Nt=L.getClearColor(),Dt=L.getClearAlpha(),Xt=Nt.r,Jt=Nt.g,zt=Nt.b;It?(g[0]=Xt,g[1]=Jt,g[2]=zt,g[3]=Dt,H.clearBufferuiv(H.COLOR,0,g)):(v[0]=Xt,v[1]=Jt,v[2]=zt,v[3]=Dt,H.clearBufferiv(H.COLOR,0,v))}else ct|=H.COLOR_BUFFER_BIT}Q&&(ct|=H.DEPTH_BUFFER_BIT),at&&(ct|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",G,!1),e.removeEventListener("webglcontextrestored",et,!1),e.removeEventListener("webglcontextcreationerror",z,!1),L.dispose(),_.dispose(),C.dispose(),wt.dispose(),Mt.dispose(),kt.dispose(),K.dispose(),J.dispose(),I.dispose(),ht.dispose(),V.dispose(),V.removeEventListener("sessionstart",qt),V.removeEventListener("sessionend",re),te.stop()};function G(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let R=Wt.autoReset,Q=E.enabled,at=E.autoUpdate,ct=E.needsUpdate,nt=E.type;S(),Wt.autoReset=R,E.enabled=Q,E.autoUpdate=at,E.needsUpdate=ct,E.type=nt}function z(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function X(R){let Q=R.target;Q.removeEventListener("dispose",X),st(Q)}function st(R){_t(R),wt.remove(R)}function _t(R){let Q=wt.get(R).programs;Q!==void 0&&(Q.forEach(function(at){ht.releaseProgram(at)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,at,ct,nt,vt){Q===null&&(Q=rt);let It=nt.isMesh&&nt.matrixWorld.determinant()<0,Nt=Ss(R,Q,at,ct,nt);gt.setMaterial(ct,It);let Dt=at.index,Xt=1;if(ct.wireframe===!0){if(Dt=b.getWireframeAttribute(at),Dt===void 0)return;Xt=2}let Jt=at.drawRange,zt=at.attributes.position,se=Jt.start*Xt,de=(Jt.start+Jt.count)*Xt;vt!==null&&(se=Math.max(se,vt.start*Xt),de=Math.min(de,(vt.start+vt.count)*Xt)),Dt!==null?(se=Math.max(se,0),de=Math.min(de,Dt.count)):zt!=null&&(se=Math.max(se,0),de=Math.min(de,zt.count));let Ee=de-se;if(Ee<0||Ee===1/0)return;J.setup(nt,ct,Nt,at,Dt);let _e,pe=W;if(Dt!==null&&(_e=F.get(Dt),pe=it,pe.setIndex(_e)),nt.isMesh)ct.wireframe===!0?(gt.setLineWidth(ct.wireframeLinewidth*Ot()),pe.setMode(H.LINES)):pe.setMode(H.TRIANGLES);else if(nt.isLine){let Vt=ct.linewidth;Vt===void 0&&(Vt=1),gt.setLineWidth(Vt*Ot()),nt.isLineSegments?pe.setMode(H.LINES):nt.isLineLoop?pe.setMode(H.LINE_LOOP):pe.setMode(H.LINE_STRIP)}else nt.isPoints?pe.setMode(H.POINTS):nt.isSprite&&pe.setMode(H.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))pe.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let Vt=nt._multiDrawStarts,Se=nt._multiDrawCounts,le=nt._multiDrawCount,en=Dt?F.get(Dt).bytesPerElement:1,Oi=wt.get(ct).currentProgram.getUniforms();for(let nn=0;nn<le;nn++)Oi.setValue(H,"_gl_DrawID",nn),pe.render(Vt[nn]/en,Se[nn])}else if(nt.isInstancedMesh)pe.renderInstances(se,Ee,nt.count);else if(at.isInstancedBufferGeometry){let Vt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Se=Math.min(at.instanceCount,Vt);pe.renderInstances(se,Ee,Se)}else pe.render(se,Ee)};function dt(R,Q,at){R.transparent===!0&&R.side===we&&R.forceSinglePass===!1?(R.side=He,R.needsUpdate=!0,cn(R,Q,at),R.side=bn,R.needsUpdate=!0,cn(R,Q,at),R.side=we):cn(R,Q,at)}this.compile=function(R,Q,at=null){at===null&&(at=R),f=C.get(at),f.init(Q),A.push(f),at.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Q.layers)&&(f.pushLight(nt),nt.castShadow&&f.pushShadow(nt))}),R!==at&&R.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Q.layers)&&(f.pushLight(nt),nt.castShadow&&f.pushShadow(nt))}),f.setupLights();let ct=new Set;return R.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let vt=nt.material;if(vt)if(Array.isArray(vt))for(let It=0;It<vt.length;It++){let Nt=vt[It];dt(Nt,at,nt),ct.add(Nt)}else dt(vt,at,nt),ct.add(vt)}),f=A.pop(),ct},this.compileAsync=function(R,Q,at=null){let ct=this.compile(R,Q,at);return new Promise(nt=>{function vt(){if(ct.forEach(function(It){wt.get(It).currentProgram.isReady()&&ct.delete(It)}),ct.size===0){nt(R);return}setTimeout(vt,10)}Ft.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Tt=null;function $t(R){Tt&&Tt(R)}function qt(){te.stop()}function re(){te.start()}let te=new vh;te.setAnimationLoop($t),typeof self<"u"&&te.setContext(self),this.setAnimationLoop=function(R){Tt=R,V.setAnimationLoop(R),R===null?te.stop():te.start()},V.addEventListener("sessionstart",qt),V.addEventListener("sessionend",re),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(Q),Q=V.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,Q,B),f=C.get(R,A.length),f.init(Q),A.push(f),ut.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Yt.setFromProjectionMatrix(ut,Sn,Q.reversedDepth),lt=this.localClippingEnabled,Ht=x.init(this.clippingPlanes,lt),m=_.get(R,w.length),m.init(),w.push(m),V.enabled===!0&&V.isPresenting===!0){let vt=T.xr.getDepthSensingMesh();vt!==null&&ce(vt,Q,-1/0,T.sortObjects)}ce(R,Q,0,T.sortObjects),m.finish(),T.sortObjects===!0&&m.sort(mt,pt),Ct=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ct&&L.addToRenderList(m,R),this.info.render.frame++,Ht===!0&&x.beginShadows();let at=f.state.shadowsArray;E.render(at,R,Q),Ht===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset();let ct=m.opaque,nt=m.transmissive;if(f.setupLights(),Q.isArrayCamera){let vt=Q.cameras;if(nt.length>0)for(let It=0,Nt=vt.length;It<Nt;It++){let Dt=vt[It];Le(ct,nt,R,Dt)}Ct&&L.render(R);for(let It=0,Nt=vt.length;It<Nt;It++){let Dt=vt[It];ie(m,R,Dt,Dt.viewport)}}else nt.length>0&&Le(ct,nt,R,Q),Ct&&L.render(R),ie(m,R,Q);B!==null&&U===0&&(Gt.updateMultisampleRenderTarget(B),Gt.updateRenderTargetMipmap(B)),R.isScene===!0&&R.onAfterRender(T,R,Q),J.resetDefaultState(),y=-1,M=null,A.pop(),A.length>0?(f=A[A.length-1],Ht===!0&&x.setGlobalState(T.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ce(R,Q,at,ct){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Yt.intersectsSprite(R)){ct&&Bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ut);let It=K.update(R),Nt=R.material;Nt.visible&&m.push(R,It,Nt,at,Bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Yt.intersectsObject(R))){let It=K.update(R),Nt=R.material;if(ct&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Bt.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Bt.copy(It.boundingSphere.center)),Bt.applyMatrix4(R.matrixWorld).applyMatrix4(ut)),Array.isArray(Nt)){let Dt=It.groups;for(let Xt=0,Jt=Dt.length;Xt<Jt;Xt++){let zt=Dt[Xt],se=Nt[zt.materialIndex];se&&se.visible&&m.push(R,It,se,at,Bt.z,zt)}}else Nt.visible&&m.push(R,It,Nt,at,Bt.z,null)}}let vt=R.children;for(let It=0,Nt=vt.length;It<Nt;It++)ce(vt[It],Q,at,ct)}function ie(R,Q,at,ct){let nt=R.opaque,vt=R.transmissive,It=R.transparent;f.setupLightsView(at),Ht===!0&&x.setGlobalState(T.clippingPlanes,at),ct&&gt.viewport(k.copy(ct)),nt.length>0&&ve(nt,Q,at),vt.length>0&&ve(vt,Q,at),It.length>0&&ve(It,Q,at),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Le(R,Q,at,ct){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ct.id]===void 0&&(f.state.transmissionRenderTarget[ct.id]=new fn(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?hs:An,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let vt=f.state.transmissionRenderTarget[ct.id],It=ct.viewport||k;vt.setSize(It.z*T.transmissionResolutionScale,It.w*T.transmissionResolutionScale);let Nt=T.getRenderTarget(),Dt=T.getActiveCubeFace(),Xt=T.getActiveMipmapLevel();T.setRenderTarget(vt),T.getClearColor(q),j=T.getClearAlpha(),j<1&&T.setClearColor(16777215,.5),T.clear(),Ct&&L.render(at);let Jt=T.toneMapping;T.toneMapping=Kn;let zt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),f.setupLightsView(ct),Ht===!0&&x.setGlobalState(T.clippingPlanes,ct),ve(R,at,ct),Gt.updateMultisampleRenderTarget(vt),Gt.updateRenderTargetMipmap(vt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let de=0,Ee=Q.length;de<Ee;de++){let _e=Q[de],pe=_e.object,Vt=_e.geometry,Se=_e.material,le=_e.group;if(Se.side===we&&pe.layers.test(ct.layers)){let en=Se.side;Se.side=He,Se.needsUpdate=!0,ye(pe,at,ct,Vt,Se,le),Se.side=en,Se.needsUpdate=!0,se=!0}}se===!0&&(Gt.updateMultisampleRenderTarget(vt),Gt.updateRenderTargetMipmap(vt))}T.setRenderTarget(Nt,Dt,Xt),T.setClearColor(q,j),zt!==void 0&&(ct.viewport=zt),T.toneMapping=Jt}function ve(R,Q,at){let ct=Q.isScene===!0?Q.overrideMaterial:null;for(let nt=0,vt=R.length;nt<vt;nt++){let It=R[nt],Nt=It.object,Dt=It.geometry,Xt=It.group,Jt=It.material;Jt.allowOverride===!0&&ct!==null&&(Jt=ct),Nt.layers.test(at.layers)&&ye(Nt,Q,at,Dt,Jt,Xt)}}function ye(R,Q,at,ct,nt,vt){R.onBeforeRender(T,Q,at,ct,nt,vt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),nt.onBeforeRender(T,Q,at,ct,R,vt),nt.transparent===!0&&nt.side===we&&nt.forceSinglePass===!1?(nt.side=He,nt.needsUpdate=!0,T.renderBufferDirect(at,Q,ct,nt,R,vt),nt.side=bn,nt.needsUpdate=!0,T.renderBufferDirect(at,Q,ct,nt,R,vt),nt.side=we):T.renderBufferDirect(at,Q,ct,nt,R,vt),R.onAfterRender(T,Q,at,ct,nt,vt)}function cn(R,Q,at){Q.isScene!==!0&&(Q=rt);let ct=wt.get(R),nt=f.state.lights,vt=f.state.shadowsArray,It=nt.state.version,Nt=ht.getParameters(R,nt.state,vt,Q,at),Dt=ht.getProgramCacheKey(Nt),Xt=ct.programs;ct.environment=R.isMeshStandardMaterial?Q.environment:null,ct.fog=Q.fog,ct.envMap=(R.isMeshStandardMaterial?kt:Mt).get(R.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&R.envMap===null?Q.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",X),Xt=new Map,ct.programs=Xt);let Jt=Xt.get(Dt);if(Jt!==void 0){if(ct.currentProgram===Jt&&ct.lightsStateVersion===It)return kn(R,Nt),Jt}else Nt.uniforms=ht.getUniforms(R),R.onBeforeCompile(Nt,T),Jt=ht.acquireProgram(Nt,Dt),Xt.set(Dt,Jt),ct.uniforms=Nt.uniforms;let zt=ct.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(zt.clippingPlanes=x.uniform),kn(R,Nt),ct.needsLights=gr(R),ct.lightsStateVersion=It,ct.needsLights&&(zt.ambientLightColor.value=nt.state.ambient,zt.lightProbe.value=nt.state.probe,zt.directionalLights.value=nt.state.directional,zt.directionalLightShadows.value=nt.state.directionalShadow,zt.spotLights.value=nt.state.spot,zt.spotLightShadows.value=nt.state.spotShadow,zt.rectAreaLights.value=nt.state.rectArea,zt.ltc_1.value=nt.state.rectAreaLTC1,zt.ltc_2.value=nt.state.rectAreaLTC2,zt.pointLights.value=nt.state.point,zt.pointLightShadows.value=nt.state.pointShadow,zt.hemisphereLights.value=nt.state.hemi,zt.directionalShadowMap.value=nt.state.directionalShadowMap,zt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,zt.spotShadowMap.value=nt.state.spotShadowMap,zt.spotLightMatrix.value=nt.state.spotLightMatrix,zt.spotLightMap.value=nt.state.spotLightMap,zt.pointShadowMap.value=nt.state.pointShadowMap,zt.pointShadowMatrix.value=nt.state.pointShadowMatrix),ct.currentProgram=Jt,ct.uniformsList=null,Jt}function xn(R){if(R.uniformsList===null){let Q=R.currentProgram.getUniforms();R.uniformsList=gs.seqWithValue(Q.seq,R.uniforms)}return R.uniformsList}function kn(R,Q){let at=wt.get(R);at.outputColorSpace=Q.outputColorSpace,at.batching=Q.batching,at.batchingColor=Q.batchingColor,at.instancing=Q.instancing,at.instancingColor=Q.instancingColor,at.instancingMorph=Q.instancingMorph,at.skinning=Q.skinning,at.morphTargets=Q.morphTargets,at.morphNormals=Q.morphNormals,at.morphColors=Q.morphColors,at.morphTargetsCount=Q.morphTargetsCount,at.numClippingPlanes=Q.numClippingPlanes,at.numIntersection=Q.numClipIntersection,at.vertexAlphas=Q.vertexAlphas,at.vertexTangents=Q.vertexTangents,at.toneMapping=Q.toneMapping}function Ss(R,Q,at,ct,nt){Q.isScene!==!0&&(Q=rt),Gt.resetTextureUnits();let vt=Q.fog,It=ct.isMeshStandardMaterial?Q.environment:null,Nt=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ti,Dt=(ct.isMeshStandardMaterial?kt:Mt).get(ct.envMap||It),Xt=ct.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Jt=!!at.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),zt=!!at.morphAttributes.position,se=!!at.morphAttributes.normal,de=!!at.morphAttributes.color,Ee=Kn;ct.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ee=T.toneMapping);let _e=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,pe=_e!==void 0?_e.length:0,Vt=wt.get(ct),Se=f.state.lights;if(Ht===!0&&(lt===!0||R!==M)){let Ye=R===M&&ct.id===y;x.setState(ct,R,Ye)}let le=!1;ct.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Se.state.version||Vt.outputColorSpace!==Nt||nt.isBatchedMesh&&Vt.batching===!1||!nt.isBatchedMesh&&Vt.batching===!0||nt.isBatchedMesh&&Vt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Vt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Vt.instancing===!1||!nt.isInstancedMesh&&Vt.instancing===!0||nt.isSkinnedMesh&&Vt.skinning===!1||!nt.isSkinnedMesh&&Vt.skinning===!0||nt.isInstancedMesh&&Vt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Vt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Vt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Vt.instancingMorph===!1&&nt.morphTexture!==null||Vt.envMap!==Dt||ct.fog===!0&&Vt.fog!==vt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==x.numPlanes||Vt.numIntersection!==x.numIntersection)||Vt.vertexAlphas!==Xt||Vt.vertexTangents!==Jt||Vt.morphTargets!==zt||Vt.morphNormals!==se||Vt.morphColors!==de||Vt.toneMapping!==Ee||Vt.morphTargetsCount!==pe)&&(le=!0):(le=!0,Vt.__version=ct.version);let en=Vt.currentProgram;le===!0&&(en=cn(ct,Q,nt));let Oi=!1,nn=!1,bs=!1,be=en.getUniforms(),ln=Vt.uniforms;if(gt.useProgram(en.program)&&(Oi=!0,nn=!0,bs=!0),ct.id!==y&&(y=ct.id,nn=!0),Oi||M!==R){gt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),be.setValue(H,"projectionMatrix",R.projectionMatrix),be.setValue(H,"viewMatrix",R.matrixWorldInverse);let je=be.map.cameraPosition;je!==void 0&&je.setValue(H,St.setFromMatrixPosition(R.matrixWorld)),Ut.logarithmicDepthBuffer&&be.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&be.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,nn=!0,bs=!0)}if(nt.isSkinnedMesh){be.setOptional(H,nt,"bindMatrix"),be.setOptional(H,nt,"bindMatrixInverse");let Ye=nt.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),be.setValue(H,"boneTexture",Ye.boneTexture,Gt))}nt.isBatchedMesh&&(be.setOptional(H,nt,"batchingTexture"),be.setValue(H,"batchingTexture",nt._matricesTexture,Gt),be.setOptional(H,nt,"batchingIdTexture"),be.setValue(H,"batchingIdTexture",nt._indirectTexture,Gt),be.setOptional(H,nt,"batchingColorTexture"),nt._colorsTexture!==null&&be.setValue(H,"batchingColorTexture",nt._colorsTexture,Gt));let hn=at.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&D.update(nt,at,en),(nn||Vt.receiveShadow!==nt.receiveShadow)&&(Vt.receiveShadow=nt.receiveShadow,be.setValue(H,"receiveShadow",nt.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(ln.envMap.value=Dt,ln.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&Q.environment!==null&&(ln.envMapIntensity.value=Q.environmentIntensity),nn&&(be.setValue(H,"toneMappingExposure",T.toneMappingExposure),Vt.needsLights&&da(ln,bs),vt&&ct.fog===!0&&xt.refreshFogUniforms(ln,vt),xt.refreshMaterialUniforms(ln,ct,tt,ft,f.state.transmissionRenderTarget[R.id]),gs.upload(H,xn(Vt),ln,Gt)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(gs.upload(H,xn(Vt),ln,Gt),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&be.setValue(H,"center",nt.center),be.setValue(H,"modelViewMatrix",nt.modelViewMatrix),be.setValue(H,"normalMatrix",nt.normalMatrix),be.setValue(H,"modelMatrix",nt.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){let Ye=ct.uniformsGroups;for(let je=0,fa=Ye.length;je<fa;je++){let mi=Ye[je];I.update(mi,en),I.bind(mi,en)}}return en}function da(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function gr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(R,Q,at){let ct=wt.get(R);ct.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),wt.get(R.texture).__webglTexture=Q,wt.get(R.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:at,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Q){let at=wt.get(R);at.__webglFramebuffer=Q,at.__useDefaultFramebuffer=Q===void 0};let Fh=H.createFramebuffer();this.setRenderTarget=function(R,Q=0,at=0){B=R,N=Q,U=at;let ct=!0,nt=null,vt=!1,It=!1;if(R){let Dt=wt.get(R);if(Dt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(H.FRAMEBUFFER,null),ct=!1;else if(Dt.__webglFramebuffer===void 0)Gt.setupRenderTarget(R);else if(Dt.__hasExternalTextures)Gt.rebindTextures(R,wt.get(R.texture).__webglTexture,wt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let zt=R.depthTexture;if(Dt.__boundDepthTexture!==zt){if(zt!==null&&wt.has(zt)&&(R.width!==zt.image.width||R.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(R)}}let Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(It=!0);let Jt=wt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Jt[Q])?nt=Jt[Q][at]:nt=Jt[Q],vt=!0):R.samples>0&&Gt.useMultisampledRTT(R)===!1?nt=wt.get(R).__webglMultisampledFramebuffer:Array.isArray(Jt)?nt=Jt[at]:nt=Jt,k.copy(R.viewport),O.copy(R.scissor),Y=R.scissorTest}else k.copy(yt).multiplyScalar(tt).floor(),O.copy(Lt).multiplyScalar(tt).floor(),Y=Pt;if(at!==0&&(nt=Fh),gt.bindFramebuffer(H.FRAMEBUFFER,nt)&&ct&&gt.drawBuffers(R,nt),gt.viewport(k),gt.scissor(O),gt.setScissorTest(Y),vt){let Dt=wt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Dt.__webglTexture,at)}else if(It){let Dt=Q;for(let Xt=0;Xt<R.textures.length;Xt++){let Jt=wt.get(R.textures[Xt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Xt,Jt.__webglTexture,at,Dt)}}else if(R!==null&&at!==0){let Dt=wt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Dt.__webglTexture,at)}y=-1},this.readRenderTargetPixels=function(R,Q,at,ct,nt,vt,It,Nt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt){gt.bindFramebuffer(H.FRAMEBUFFER,Dt);try{let Xt=R.textures[Nt],Jt=Xt.format,zt=Xt.type;if(!Ut.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-ct&&at>=0&&at<=R.height-nt&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt),H.readPixels(Q,at,ct,nt,ot.convert(Jt),ot.convert(zt),vt))}finally{let Xt=B!==null?wt.get(B).__webglFramebuffer:null;gt.bindFramebuffer(H.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,Q,at,ct,nt,vt,It,Nt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt)if(Q>=0&&Q<=R.width-ct&&at>=0&&at<=R.height-nt){gt.bindFramebuffer(H.FRAMEBUFFER,Dt);let Xt=R.textures[Nt],Jt=Xt.format,zt=Xt.type;if(!Ut.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,se),H.bufferData(H.PIXEL_PACK_BUFFER,vt.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt),H.readPixels(Q,at,ct,nt,ot.convert(Jt),ot.convert(zt),0);let de=B!==null?wt.get(B).__webglFramebuffer:null;gt.bindFramebuffer(H.FRAMEBUFFER,de);let Ee=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Yl(H,Ee,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,se),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,vt),H.deleteBuffer(se),H.deleteSync(Ee),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Q=null,at=0){let ct=Math.pow(2,-at),nt=Math.floor(R.image.width*ct),vt=Math.floor(R.image.height*ct),It=Q!==null?Q.x:0,Nt=Q!==null?Q.y:0;Gt.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,at,0,0,It,Nt,nt,vt),gt.unbindTexture()};let Bh=H.createFramebuffer(),Oh=H.createFramebuffer();this.copyTextureToTexture=function(R,Q,at=null,ct=null,nt=0,vt=null){vt===null&&(nt!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=nt,nt=0):vt=0);let It,Nt,Dt,Xt,Jt,zt,se,de,Ee,_e=R.isCompressedTexture?R.mipmaps[vt]:R.image;if(at!==null)It=at.max.x-at.min.x,Nt=at.max.y-at.min.y,Dt=at.isBox3?at.max.z-at.min.z:1,Xt=at.min.x,Jt=at.min.y,zt=at.isBox3?at.min.z:0;else{let hn=Math.pow(2,-nt);It=Math.floor(_e.width*hn),Nt=Math.floor(_e.height*hn),R.isDataArrayTexture?Dt=_e.depth:R.isData3DTexture?Dt=Math.floor(_e.depth*hn):Dt=1,Xt=0,Jt=0,zt=0}ct!==null?(se=ct.x,de=ct.y,Ee=ct.z):(se=0,de=0,Ee=0);let pe=ot.convert(Q.format),Vt=ot.convert(Q.type),Se;Q.isData3DTexture?(Gt.setTexture3D(Q,0),Se=H.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Gt.setTexture2DArray(Q,0),Se=H.TEXTURE_2D_ARRAY):(Gt.setTexture2D(Q,0),Se=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Q.unpackAlignment);let le=H.getParameter(H.UNPACK_ROW_LENGTH),en=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Oi=H.getParameter(H.UNPACK_SKIP_PIXELS),nn=H.getParameter(H.UNPACK_SKIP_ROWS),bs=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,_e.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_e.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Xt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Jt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,zt);let be=R.isDataArrayTexture||R.isData3DTexture,ln=Q.isDataArrayTexture||Q.isData3DTexture;if(R.isDepthTexture){let hn=wt.get(R),Ye=wt.get(Q),je=wt.get(hn.__renderTarget),fa=wt.get(Ye.__renderTarget);gt.bindFramebuffer(H.READ_FRAMEBUFFER,je.__webglFramebuffer),gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,fa.__webglFramebuffer);for(let mi=0;mi<Dt;mi++)be&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,wt.get(R).__webglTexture,nt,zt+mi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,wt.get(Q).__webglTexture,vt,Ee+mi)),H.blitFramebuffer(Xt,Jt,It,Nt,se,de,It,Nt,H.DEPTH_BUFFER_BIT,H.NEAREST);gt.bindFramebuffer(H.READ_FRAMEBUFFER,null),gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(nt!==0||R.isRenderTargetTexture||wt.has(R)){let hn=wt.get(R),Ye=wt.get(Q);gt.bindFramebuffer(H.READ_FRAMEBUFFER,Bh),gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Oh);for(let je=0;je<Dt;je++)be?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,hn.__webglTexture,nt,zt+je):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,hn.__webglTexture,nt),ln?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.__webglTexture,vt,Ee+je):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ye.__webglTexture,vt),nt!==0?H.blitFramebuffer(Xt,Jt,It,Nt,se,de,It,Nt,H.COLOR_BUFFER_BIT,H.NEAREST):ln?H.copyTexSubImage3D(Se,vt,se,de,Ee+je,Xt,Jt,It,Nt):H.copyTexSubImage2D(Se,vt,se,de,Xt,Jt,It,Nt);gt.bindFramebuffer(H.READ_FRAMEBUFFER,null),gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ln?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Se,vt,se,de,Ee,It,Nt,Dt,pe,Vt,_e.data):Q.isCompressedArrayTexture?H.compressedTexSubImage3D(Se,vt,se,de,Ee,It,Nt,Dt,pe,_e.data):H.texSubImage3D(Se,vt,se,de,Ee,It,Nt,Dt,pe,Vt,_e):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,vt,se,de,It,Nt,pe,Vt,_e.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,vt,se,de,_e.width,_e.height,pe,_e.data):H.texSubImage2D(H.TEXTURE_2D,vt,se,de,It,Nt,pe,Vt,_e);H.pixelStorei(H.UNPACK_ROW_LENGTH,le),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,en),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Oi),H.pixelStorei(H.UNPACK_SKIP_ROWS,nn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,bs),vt===0&&Q.generateMipmaps&&H.generateMipmap(Se),gt.unbindTexture()},this.initRenderTarget=function(R){wt.get(R).__webglFramebuffer===void 0&&Gt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Gt.setTextureCube(R,0):R.isData3DTexture?Gt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Gt.setTexture2DArray(R,0):Gt.setTexture2D(R,0),gt.unbindTexture()},this.resetState=function(){N=0,U=0,B=null,gt.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var Me=(i,t)=>.09*Math.sin(i*.075)+.1*Math.sin(t*.18)+Math.max(0,Math.abs(t)-37)*.012*(1+Math.sin(i*.025+t*.1)),qe=i=>3.5*Math.sin(i/55)+2.1*Math.sin(i/26),On=i=>14.9+1.4*Math.sin(i/38+.7),ur=-.73,Oe=-4,xs=21.8,vs=10.6,tn=i=>{let t=Math.min(1,Math.abs(i-qe(Oe))/xs);return .13+5.65*Math.pow(1-t*t,1.28)},dr={west:-164,east:178,south:75,north:-74};function ys(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}var Ie=[{name:"\u90CA\u91CE",area:"\u57CE\u5916\u7530\u7574",x:-126,z:25,look:[-112,1.9,18],sound:"field",note:"\u5C0F\u8DEF\u7A7F\u8FC7\u9EA6\u5730\u3002\u7530\u57C2\u90A3\u5934\u6709\u4EBA\u6311\u62C5\uFF0C\u6CBF\u6CB3\u518D\u8D70\u4E00\u6BB5\u5C31\u662F\u8D27\u6808\u3002",path:[[-115,23],[-102,21.2],[-90,20]]},{name:"\u6C74\u6CB3",area:"\u6CB3\u5CB8\u7EA4\u9053",x:-79,z:18,look:[-53,1,4],sound:"river",note:"\u5DE1\u5352\u6CBF\u7740\u7EA4\u9053\u8D70\u8FC7\uFF0C\u6CB3\u4E2D\u8D27\u8239\u5F80\u6765\u3002\u9760\u8FD1\u8679\u6865\u65F6\uFF0C\u8239\u5DE5\u628A\u6845\u6746\u653E\u4F4E\u3002",path:[[-68,18],[-55,18],[-46,19]]},{name:"\u7801\u5934",area:"\u6CB3\u5CB8\u8D27\u6808",x:-36,z:18,look:[-27,1.1,12],sound:"dock",note:"\u811A\u592B\u6311\u8D27\u8FC7\u8DF3\u677F\uFF0C\u5DE1\u5352\u6CBF\u7740\u8D27\u6808\u5916\u4FA7\u5F80\u8FD4\u3002\u8F66\u9A6C\u4ECE\u5378\u8D27\u7684\u4EBA\u7FA4\u65C1\u7ECF\u8FC7\u3002",path:[[-27,20],[-16,21],[-7,23],[-4,22]]},{name:"\u8679\u6865",area:"\u6C74\u6CB3\u6E21\u53E3",x:-4,z:-.1,look:[-3.5,5.8,-11],sound:"market",note:"\u6865\u680F\u8FB9\u6446\u7740\u679C\u5B50\u3001\u80E1\u997C\u548C\u8336\u6C34\u3002\u7AD9\u5728\u644A\u95F4\u5F80\u6CB3\u91CC\u671B\uFF0C\u8FD8\u80FD\u770B\u89C1\u8D27\u8239\u8FC7\u6865\u3002",path:[[-4,-10],[-4,-22],[3,-23],[14,-23]]},{name:"\u8857\u5E02",area:"\u57CE\u5916\u5927\u8857",x:23,z:-24,look:[42,1.3,-24],sound:"market",note:"\u5E03\u5377\u548C\u679C\u5B50\u6446\u5728\u68DA\u4E0B\uFF0C\u4E70\u5BA2\u5728\u644A\u524D\u6311\u62E3\u3002\u8D76\u8DEF\u7684\u9A91\u624B\u6CBF\u8857\u5FC3\u7ECF\u8FC7\u3002",path:[[32,-24],[43,-25],[46,-26.2]]},{name:"\u5546\u94FA",area:"\u6CBF\u8857\u8D27\u94FA",x:48,z:-30.7,look:[49,1.35,-34.6],sound:"shop",note:"\u5E97\u4E3B\u5728\u67DC\u540E\u62DB\u547C\u3002\u4E70\u5BA2\u51D1\u8FD1\u770B\u9752\u74F7\uFF0C\u6311\u597D\u4FBF\u8F6C\u8EAB\u51FA\u95E8\u3002",path:[[48,-27],[53,-24],[64,-24],[68,-27]]},{name:"\u9152\u697C",area:"\u4E34\u8857\u9152\u8086",x:69,z:-31,look:[65.7,1.46,-36],sound:"shop",note:"\u4ECE\u6728\u67F1\u4E4B\u95F4\u8D70\u8FDB\u53BB\uFF0C\u6CBF\u7A97\u6446\u7740\u684C\u51F3\u3002\u5C4B\u5916\u7684\u8857\u58F0\u8FD8\u542C\u5F97\u89C1\u3002",path:[[69,-27],[74,-24],[82,-24],[90,-25]]},{name:"\u57CE\u95E8",area:"\u5165\u57CE\u95E8\u9053",x:90.9,z:-25,look:[105,5.6,-25],sound:"market",note:"\u7A7F\u8FC7\u95E8\u6D1E\u540E\uFF0C\u8F6C\u5411\u4E24\u4FA7\u5899\u6839\u627E\u300C\u767B\u57CE\u300D\u6728\u724C\u3002\u6CBF\u7A84\u9636\u4E0A\u53BB\uFF0C\u5728\u5E73\u53F0\u6298\u8FD4\u4FBF\u53EF\u767B\u57CE\u3002",path:[[105,-25],[115,-25],[124,-25],[129,-29],[129,-35]]},{name:"\u57CE\u5185\u8857\u5DF7",area:"\u574A\u5DF7\u4EBA\u5BB6",x:129,z:-45,look:[130,1.6,-59],sound:"lane",note:"\u5C4B\u6A90\u4E0B\u667E\u7740\u5E03\uFF0C\u5DE1\u5352\u6CBF\u574A\u5DF7\u8D70\u8FC7\u3002\u7A84\u5DF7\u4E24\u5934\u90FD\u6709\u901A\u5F80\u8857\u5E02\u7684\u5C0F\u8DEF\u3002",path:[]}],Lc=[{position:[36,8.4,24.3],look:[-11,3.2,7.5]},{position:[-40,9,26],look:[8,3,-11]},{position:[5,23,-12],look:[48,0,-25]}];function Th(){let i=ys(5905),t=256,e=new Float32Array(4096).map(()=>i()),n=jt.lerp;function s(u,h){let d=Math.floor(u),p=Math.floor(h),g=u-d,v=h-p;g*=g*(3-2*g),v*=v*(3-2*v);let m=(f,w)=>e[(w%64+64)%64*64+(f%64+64)%64];return n(n(m(d,p),m(d+1,p),g),n(m(d,p+1),m(d+1,p+1),g),v)}let r=(u,h)=>{let d=document.createElement("canvas");d.width=d.height=t;let p=d.getContext("2d"),g=p.createImageData(t,t);for(let m=0;m<t;m++)for(let f=0;f<t;f++){let w=f/t,A=m/t,T=s(w*8,A*8),P=s(w*64,A*64),N=1+(T-.5)*.22+(P-.5)*.15+(i()-.5)*.09;if(u==="wood"){let B=s(w*4,A*4)*2.1+Math.sin(A*7+w*3)*.5,y=Math.pow(.5+.5*Math.sin(w*400+B*7),8);N+=(s(w*56,A*4)-.5)*.29-y*.13}if(u==="cloth"&&(N+=(f%3===0?-.054:.024)+(m%3===0?-.055:.024)),u==="stone"||u==="pave"){let B=Math.floor(A*6),y=u==="pave"?.045:.013,M=(w*5+B*.5+y*Math.sin(m*.17))%1,k=A*6%1;M<.037||k<.062?N*=u==="pave"?.78:.64:N+=(s(Math.floor(w*5+B*.5)+9,B+11)-.5)*.19}if(u==="tile"){let B=w*8%1,y=A*6%1,M=Math.pow(Math.sin(Math.PI*B),.6);N=N*(.72+M*.3)-(y<.07?.19:0),B<.065&&(N+=.19)}u==="grass"&&(N+=(s(w*18,A*32)-.5)*.26);let U=(m*t+f)*4;for(let B=0;B<3;B++)g.data[U+B]=h[B]*N;g.data[U+3]=255}p.putImageData(g,0,0);let v=new Nn(d);return v.colorSpace=Ce,v.wrapS=v.wrapT=bi,v.anisotropy=8,v},o={};for(let[u,h]of Object.entries({oldwood:["wood",[161,121,85]],timber:["wood",[133,96,67]],beam:["wood",[106,77,55]],plaster:["plain",[207,180,134]],wall:["plain",[189,167,133]],stone:["stone",[155,150,131]],tile:["tile",[123,121,113]],tileDark:["tile",[112,111,104]],brick:["stone",[135,129,110]],linen:["cloth",[224,197,142]],sage:["cloth",[144,153,118]],rust:["cloth",[160,109,75]],straw:["cloth",[189,155,92]],soil:["plain",[159,138,98]],path:["plain",[174,151,112]],pave:["pave",[166,154,128]],grass:["grass",[119,132,66]]}))o[u]=r(...h);let a=document.createElement("canvas");a.width=a.height=128;let l=a.getContext("2d"),c=l.createImageData(128,128);for(let u=0;u<128;u++)for(let h=0;h<128;h++){let d=2*Math.PI/128,p=h*d*7+u*d*2,g=h*d*3-u*d*8+Math.sin(h*d*2),v=h*d*9+u*d*11,m=(u*128+h)*4;c.data[m]=127+32*Math.cos(p)+23*Math.cos(g)+9*Math.sin(v),c.data[m+1]=127+17*Math.cos(p)-33*Math.cos(g)+13*Math.sin(v),c.data[m+2]=244,c.data[m+3]=255}return l.putImageData(c,0,0),o.waterNormal=new Nn(a),o.waterNormal.wrapS=o.waterNormal.wrapT=bi,o}var bt=(i,t,e)=>new Z(i,t,e),pg=bt(0,1,0),wh=new Un(1,1,1),Ue=new on(1,1,1,9),fr=new on(.7,1,1,10),mg=new on(1,1,1,7),pr=new Js(1,0),gg=new Ai(1);function gn(i,t={}){return new En({map:i,roughness:.91,...t})}function Eh(i,t,e){let n=ys(1119),s={};for(let _ of["oldwood","timber","beam","plaster","wall","stone","tile","tileDark","brick","linen","sage","rust","straw","soil","path","pave","grass"])s[_]=gn(t[_]);Object.assign(s,{bark:gn(t.beam,{color:9210728}),lacquer:gn(t.timber,{color:11758416}),black:gn(null,{color:3220762}),ceramic:gn(null,{color:10662806,roughness:.34,metalness:.03}),paleCeramic:gn(null,{color:13220237,roughness:.49}),iron:gn(null,{color:5588789,roughness:.59,metalness:.33}),green:gn(null,{color:8423756}),foliage:gn(null,{vertexColors:!0,side:we,roughness:1})});let r=s.linen.clone();r.side=we,r.onBeforeCompile=_=>{_.uniforms.windTime=e,_.vertexShader=`uniform float windTime;
`+_.vertexShader,_.vertexShader=_.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.y += .065 * sin(windTime * 1.8 + position.x * 2.4 + position.z * 3.0);`)},s.awning=r,s.foliage.onBeforeCompile=_=>{_.uniforms.windTime=e,_.vertexShader=`uniform float windTime;
`+_.vertexShader,_.vertexShader=_.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x += .060 * sin(windTime * 1.40 + position.z * .28 + position.y * 1.32) * min(position.y,.9);`)};let o=document.createElement("canvas");o.width=o.height=128;let a=o.getContext("2d"),l=ys(883),c=["#738640","#9aa65b","#7e914b","#637742","#879750","#a1aa63","#5c6d38"];for(let _=0;_<520;_++){let C=l()*Math.PI*2,x=Math.sqrt(l())*.95,E=64+Math.cos(C)*x*59,L=64+Math.sin(C)*x*56,D=2.1+l()*4.2;a.fillStyle=c[Math.floor(l()*c.length)],a.beginPath(),a.ellipse(E,L,D,D*(.25+l()*.29),C-l()*1.4,0,Math.PI*2),a.fill()}let u=new Nn(o);u.colorSpace=Ce,u.anisotropy=4,s.bough=gn(u,{alphaTest:.45,side:we}),s.bough.onBeforeCompile=s.foliage.onBeforeCompile;let h=new Map,d=new Map,p=[],g=[],v=[],m=[],f=[],w=[],A,T=new Map,P=new Re,N=()=>.8+n()*.23,U=new At;function B(_,C,x,E,L=0,D=N()){let W=C+"/"+_.id;h.has(W)||h.set(W,{geo:_,mat:C,entries:[]}),P.position.copy(x),P.scale.copy(E),typeof L=="number"?P.rotation.set(0,L,0):P.quaternion.copy(L),P.updateMatrix(),h.get(W).entries.push([P.matrix.clone(),D])}function y(_,C,x,E,L,D,W,it=0,ot){B(wh,_,bt(C,x,E),bt(L,D,W),it,ot)}function M(_,C,x,E,L=E,D=wh){let W=x.clone().sub(C),it=new Je().setFromUnitVectors(pg,W.clone().normalize());B(D,_,C.clone().lerp(x,.5),bt(E,W.length(),L),it)}function k(_,C,x,E,L,D=[0,0,1,1],W=[1,1,1]){d.has(_)||d.set(_,{points:[],uv:[],colors:[]});let it=d.get(_);for(let V of[C,x,E,C,E,L])it.points.push(V.x,V.y,V.z),it.colors.push(...W);let[ot,J,I,S]=D;it.uv.push(ot,J,I,J,I,S,ot,J,I,S,ot,S)}function O(_,C,x,E){p.push({x0:_-x/2,x1:_+x/2,z0:C-E/2,z1:C+E/2})}function Y(_,C,x,E){let L=Math.cos(E),D=Math.sin(E);return(W,it,ot)=>bt(_+W*L+ot*D,C+it,x-W*D+ot*L)}function q(_,C,x,E,L,D,W,it,ot,J){let I=_(E,L,D);y(x,I.x,I.y,I.z,W,it,ot,C,J)}function j(_,C,x,E,L){let D=_(C-E/2,0,x-L/2),W=_(C+E/2,0,x+L/2);O((D.x+W.x)/2,(D.z+W.z)/2,Math.abs(D.x-W.x),Math.abs(D.z-W.z))}function $(_,C,x,E,L){let D=_(C-E/2,0,x-L/2),W=_(C+E/2,0,x+L/2);w.push({x0:Math.min(D.x,W.x),x1:Math.max(D.x,W.x),z0:Math.min(D.z,W.z),z1:Math.max(D.z,W.z)})}function ft(_,C,x,E,L,D,W){v.push({seller:_(x,0,E),buyer:_(x,0,L),entry:_(x+.69,0,D),yaw:C,goods:W})}function tt(_,C){let x=_+"/"+C;if(T.has(x))return T.get(x);let E=document.createElement("canvas");E.width=C?96:200,E.height=C?200:74;let L=E.getContext("2d");L.fillStyle=C?"#bca877":"#5b3726",L.fillRect(0,0,E.width,E.height),L.strokeStyle=C?"#6a4129":"#a9945e",L.lineWidth=4,L.strokeRect(7,7,E.width-14,E.height-14),L.fillStyle=C?"#342617":"#ece0b2",L.textAlign="center",L.textBaseline="middle",L.font="bold "+(C?61:47)+'px "Songti SC", SimSun, serif',C?[..._].forEach((it,ot)=>L.fillText(it,48,55+ot*76)):L.fillText(_,E.width/2,E.height/2+1);let D=new Nn(E);D.colorSpace=Ce;let W=gn(D,{side:we});return T.set(x,W),W}function mt(_,C,x,E,L,D,W,it,ot=!1){let J=new me(new pn(W,it),tt(x,ot));J.position.copy(_(E,L,D)),J.rotation.y=C,i.add(J)}function pt(){for(let _ of[-1,1]){let C=x=>qe(x)+_*On(x);for(let x=-267;x<273;x+=3){let E=x+3,L=_>0?x<-88||x>70:x<-46||x>182;for(let it=0;it<20;it++){let J=(z,X)=>Me(z,X)-.04,I=C(x)+_*it*4.15,S=C(x)+_*(it+1)*4.15,V=C(E)+_*it*4.15,G=C(E)+_*(it+1)*4.15,et=.91+.07*Math.sin(x*.037+it*.59)+.09*n();k(L?"grass":"soil",bt(x,J(x,I),I),bt(x,J(x,S),S),bt(E,J(E,G),G),bt(E,J(E,V),V),[x/5,I/5,E/5,S/5],[et,et,et])}let D=C(x),W=C(E);k("soil",bt(x,Me(x,D),D),bt(E,Me(E,W),W),bt(E,-1.61,W-_*1.45),bt(x,-1.61,D-_*1.45),[x/4,0,E/4,1])}}for(let _=0;_<850;_++){let C=-179+n()*367,x=n()<.55?1:-1,L=qe(C)+x*On(C)+x*(n()*.64-.31);if(C>-11&&C<4||C>-47&&C<-20&&x===1)continue;let D=.17+n()*.62;B(pr,"stone",bt(C,Me(C,L)-D*.25,L),bt(D,.22+D*.55,D*.57),n()*6.28)}}function yt(_,C,x="path"){for(let E=1;E<_.length;E++){let[L,D]=_[E-1],[W,it]=_[E],ot=W-L,J=it-D,I=Math.hypot(ot,J),S=Math.ceil(I/1.75),V=-J/I,G=ot/I,et=(z,X)=>{let st=1+.036*Math.sin((L+ot*z)*1.67+(D+J*z)*.79),_t=L+ot*z+V*X*st,dt=D+J*z+G*X*st;return bt(_t,Me(_t,dt)+(x==="pave"?.044:.023),dt)};for(let z=0;z<S;z++){let X=I/S/4.1;k(x,et(z/S,-C/2),et(z/S,C/2),et((z+1)/S,C/2),et((z+1)/S,-C/2),[0,z*X,C/4.4,(z+1)*X])}}}function Lt(_,C,x,E,L,D="tile",W=!0){let it=C/2,ot=x/2,J=(I,S,V)=>{let G=.29*Math.pow(Math.min(1,Math.abs(I/it)),5.4);return _(I,E+L*Math.pow(1-S,1.37)+G*(.46+.89*S*S),V*S*ot)};for(let I of[-1,1]){for(let V=0;V<8;V++)for(let G=0;G<12;G++){let et=-it+C*G/12,z=-it+C*(G+1)/12;k(D,J(et,V/8,I),J(z,V/8,I),J(z,(V+1)/8,I),J(et,(V+1)/8,I),[et/2.2,V*x/(8*3.5),z/2.2,(V+1)*x/(8*3.5)])}for(let V=0;V<12;V++){let G=J(-it+C*V/12,1,I),et=J(-it+C*(V+1)/12,1,I);M("beam",G,et,.16,.19)}if(W){for(let V=0;V<Math.floor(C/.28);V++){let G=-it+.12+V*.28,et=J(G,.94,I),z=J(G,1,I);if(z.z+=I*.025,et.y+=.024,z.y+=.02,M(D,et,z,.074,.074,mg),V%2===0){let X=J(G,1,I);M("timber",X.clone().add(bt(0,-.1,0)),J(G,.82,I).add(bt(0,-.23,0)),.084,.092)}}for(let V of[-it,it])for(let G=0;G<8;G++)M("beam",J(V,G/8,I),J(V,(G+1)/8,I),.14,.11)}}for(let I=0;I<12;I++){let S=J(-it+C*I/12,0,1),V=J(-it+C*(I+1)/12,0,1);S.y+=.073,V.y+=.073,M(D,S,V,.175,.155,Ue)}for(let I of[-1,1]){let S=J(I*it,0,1),V=J(I*it,0,1);V.x+=I*.21,V.y+=.23,M(D,S,V,.13,.13,Ue)}}function Pt(_,C,x,E,L,D,W){let it=(ot,J,I,S,V,G,et)=>q(_,C,ot,J,I,S,V,G,et);it("black",x,E,L,D,W,.075);for(let ot of[-1,1])it("oldwood",x+ot*D/2,E,L+.042,.095,W+.1,.1),it("oldwood",x,E+ot*W/2,L+.042,D,.09,.1);for(let ot=1;ot<7;ot++)it("timber",x-D/2+ot*D/7,E,L+.051,.041,W,.058);for(let ot=1;ot<5;ot++)it("timber",x,E-W/2+ot*W/5,L+.049,D,.036,.058)}function Yt(_,C,x,E=.5,L="ceramic"){B(fr,L,bt(_,C+E*.24,x),bt(E*.33,E*.47,E*.33),n()*6),B(Ue,L,bt(_,C+E*.49,x),bt(E*.24,E*.13,E*.24),0),B(Ue,"black",bt(_,C+E*.562,x),bt(E*.15,.012,E*.15),0)}function Ht(_,C,x,E=.73){y("oldwood",_,C+E*.38,x,E,E*.76,E*.77);for(let L of[-1,1])y("beam",_+L*E*.31,C+E*.4,x,E*.1,E*.82,E*.81);y("timber",_,C+E*.78,x,E*1.02,.057,E*.79)}function lt(_,C,x,E=.74){B(fr,"straw",bt(_,C+E*.26,x),bt(E*.43,E*.52,E*.43),Math.PI),B(Ue,"oldwood",bt(_,C+E*.56,x),bt(E*.45,.053,E*.45)),B(Ue,"straw",bt(_,C+E*.583,x),bt(E*.37,.039,E*.37))}function ut(_,C,x,E,L,D){let ot=(J,I)=>_((J/10-.5)*x,L-.54*(I/5)-.22*Math.sin(Math.PI*I/5)+.035*Math.sin(J*1.8)*I/5,D+I/5*E);for(let J=0;J<5;J++)for(let I=0;I<10;I++)k("awning",ot(I,J),ot(I+1,J),ot(I+1,J+1),ot(I,J+1),[I/5,J/4,(I+1)/5,(J+1)/4]);for(let J=0;J<10;J++){let I=ot(J,5),S=ot(J+1,5);k("awning",I,S,S.clone().add(bt(0,-.18,0)),I.clone().add(bt(0,-.18,0)))}for(let J of[-.47,.47]){let I=_(J*x,0,D+E-.1),S=_(J*x,L-.51,D+E-.1);M("oldwood",I,S,.046,.046,Ue),M("timber",S,_(J*x,L,D-.1),.047,.047,Ue),j(_,J*x,D+E-.1,.09,.09)}M("timber",ot(0,5),ot(10,5),.044,.044,Ue)}function St(_,C,x,E,{theta:L=0,floors:D=1,kind:W="home",label:it,simple:ot=!1,roofKind:J="tile"}={}){let I=Me(_,C),S=Y(_,I,C,L),V=D===1?3.31:6.13,G=E/2,et=-E/2,z=["store","tavern","market"].includes(W),X=!ot,st=(dt,Tt,$t,qt,re,te,ce,ie)=>q(S,L,dt,Tt,$t,qt,re,te,ce,ie);if(st("stone",0,.045,0,x+.05,.24,E+.1),!z)st("plaster",0,V/2,0,x,V,E),j(S,0,0,x,E);else{st("plaster",0,V/2,et,x,V,.23),j(S,0,et,x,.28);for(let $t of[-1,1])st("plaster",$t*x/2,V/2,0,.2,V,E),j(S,$t*x/2,0,.24,E);st("beam",0,V-.17,0,x,.32,E);for(let $t=-E/2+.12;$t<E/2;$t+=.28)st("oldwood",0,.181,$t,x-.25,.08,.24);D===2&&st("beam",0,3.2,0,x,.2,E);let dt=S(0,I+.23,G),Tt=L===0||L===Math.PI;g.push({x0:dt.x-(Tt?x:E)/2,x1:dt.x+(Tt?x:E)/2,z0:C-(Tt?E:x)/2,z1:C+(Tt?E:x)/2,y:I+.225})}let _t=Math.max(2,Math.round(x/2.1));for(let dt=0;dt<=_t;dt++){let Tt=(dt/_t-.5)*x;for(let $t of[G+.024,et-.025])if(st(D===2?"lacquer":"timber",Tt,V/2,$t,.17,V,.175),st("stone",Tt,.14,$t,.28,.21,.27),X){let qt=dt===0?1:dt===_t?-1:1;M("timber",S(Tt,V-.7,$t),S(Tt+qt*.48,V-.15,$t),.11,.12)}}for(let dt of[.75,3.02,V-.2])(dt!==.75||!z)&&st("timber",0,dt,G+.075,x+.19,.14,.14);if(X){for(let dt of[-1,1]){st("timber",dt*(x/2+.035),V-.24,0,.17,.19,E+.15);for(let re=1;re<Math.ceil(E/2);re++)st("timber",dt*(x/2+.025),V/2,-E/2+re*2,.12,V,.11);let Tt=S(dt*(x/2-.01),V-.15,-E/2+.08),$t=S(dt*(x/2-.01),V-.15,E/2-.08),qt=S(dt*(x/2-.01),V+Math.min(x,E)*.3,0);k("plaster",Tt,$t,qt,qt)}if(!z){st("beam",0,1.01,G+.056,1.23,2.02,.11);for(let dt=0;dt<6;dt++)st("oldwood",.15*(dt-2.5),.98,G+.112,.136,1.91,.035);for(let dt of[-1,1])Pt(S,L,dt*x*.31,1.94,G+.08,x*.22,1.03)}if(D===2)if(W==="tavern"){st("oldwood",0,3.34,G+.53,x,.17,1.45);for(let dt=0;dt<_t;dt++){let Tt=(dt/_t-.5)*x;st("lacquer",Tt,3.78,G+1.19,.12,.9,.12),st("oldwood",Tt+x/_t*.5,3.96,G+1.2,x/_t,.09,.091);for(let $t=1;$t<=5;$t++)st("oldwood",Tt+$t*x/_t/6,3.67,G+1.2,.061,.58,.06)}}else for(let dt=0;dt<_t;dt++)Pt(S,L,((dt+.5)/_t-.5)*x,4.62,G+.081,x/_t*.67,1.48)}if(D===2&&W!=="tavern"){let dt=(Tt,$t,qt)=>S(-Tt,$t,-qt);for(let Tt=0;Tt<_t;Tt++)Pt(dt,L+Math.PI,((Tt+.5)/_t-.5)*x,4.52,G+.075,x/_t*.65,1.42);st("beam",0,3.16,et-.12,x+.14,.11,.14)}if(Lt(S,x+1.52,E+1.7,V+.02,Math.min(x,E)*.31,J,X),D===2&&X&&Lt(S,x+.9,E+2.4,3.09,.68,"tileDark",!0),z){if(W==="tavern"){for(let qt of[-1,1])for(let re=0;re<4;re++){let te=G-1.2-re*2.3;st("timber",qt*(x/2-.13),1.65,te,.14,3.3,.16)}for(let qt=0;qt<7;qt++)st("timber",0,2.98,G-.21-qt*E/7,x,.2,.14);st("oldwood",0,1.09,et+.44,x*.55,.142,.47),st("timber",0,.67,et+.4,x*.56,.78,.5);for(let qt=0;qt<8;qt++){let re=S((qt/7-.5)*x*.52,1.17,et+.37);Yt(re.x,re.y,re.z,.67+qt%3*.095,"paleCeramic")}let dt=S(-.89,2.91,et+.18),Tt=S(.93,2.91,et+.18);k("awning",dt,Tt,S(.93,1.77,et+.17),S(-.89,1.77,et+.17)),mt(S,L,"\u9152",0,2.37,et+.25,.62,.59);for(let qt of[-4.85,4.85]){let re=S(qt,2.35,G-2);B(pr,"rust",re,bt(.19,.24,.19),0),M("iron",re.clone().add(bt(0,.17,0)),re.clone().add(bt(0,.76,0)),.018,.018,Ue)}let $t=[[-3.8,.25],[3.5,.15],[-2.9,-3.4],[2.9,-3.4]];for(let[qt,re]of $t){st("oldwood",qt,.85,re,1.63,.11,1.19);for(let ce of[-.63,.63])for(let ie of[-.44,.44])st("timber",qt+ce,.49,re+ie,.11,.73,.11);st("timber",qt,.47,re+.83,1.48,.1,.31),st("timber",qt,.47,re-.83,1.48,.1,.31),j(S,qt,re,1.68,1.23);for(let ce of[-.54,.53]){let ie=S(qt+ce,.92,re+.16);Yt(ie.x,ie.y,ie.z,.27,"paleCeramic")}let te=S(qt,.9,re-.3);Yt(te.x,te.y,te.z,.59,"paleCeramic")}}else{st("oldwood",0,1.09,-.85,x-.7,.16,.98),st("timber",0,.55,-.85,x-.81,.95,.82),j(S,0,-.85,x-.59,.99);for(let dt=0;dt<2;dt++){let Tt=(dt-.5)*x*.82;st("oldwood",Tt,1.61,et+.5,x*.35,.1,.55),st("oldwood",Tt,2.16,et+.49,x*.35,.09,.56)}for(let dt=0;dt<8;dt++){let Tt=S((dt/7-.5)*(x-1),1.18,-.78+n()*.34);W==="market"?lt(Tt.x,Tt.y,Tt.z,.4+n()*.43):Yt(Tt.x,Tt.y,Tt.z,.43+n()*.7,dt%3?"ceramic":"paleCeramic")}for(let dt=0;dt<6;dt++)st(dt%2?"linen":"sage",x*.28,.32+dt*.16,G-.7,.99,.145,.64);ft(S,L,Math.min(x*.23,1.45),-1.73,.14,G-.46,W==="market"?"fruit":"pot")}if(W!=="tavern")ut(S,L,x+.4,1.95,2.94,G);else for(let dt of[-3.9,3.85]){let Tt=S(dt,2.54,G+.78);B(pr,"rust",Tt,bt(.24,.31,.24),0),M("iron",Tt.clone().add(bt(0,.26,0)),Tt.clone().add(bt(0,.55,0)),.018,.018,Ue)}it&&(st("beam",0,W==="tavern"?3.6:2.71,G+.2,2.05,.53,.11),mt(S,L,it,0,W==="tavern"?3.6:2.71,G+.27,1.99,.49),mt(S,L,it,x/2-.18,2.29,G+1.46,.49,1.16,!0))}}function Bt(_,C,x,E,L,D=!1){let W=D?tn(C):Me(_,C),it=Y(_,W,C,x),ot=(S,V,G,et,z,X,st)=>q(it,x,S,V,G,et,z,X,st);ot("timber",0,.83,0,E,.12,1.06);for(let S of[-1,1])ot("beam",S*E*.41,.4,.22,.106,.82,.11),ot("beam",S*E*.41,.4,-.24,.106,.82,.11),ot("oldwood",S*E*.5,1.13,-.58,.1,2.28,.1);ut(it,x,E+.48,2.06,2.46,-.63);let J=Math.floor(E/.43);for(let S=0;S<J;S++){let V=it((S/(J-1)-.5)*E*.82,.93,n()*.4-.18);if(L==="fruit"){lt(V.x,V.y,V.z,.52);for(let G=0;G<5;G++)B(pr,G%2?"green":"rust",V.clone().add(bt((n()-.5)*.25,.35,(n()-.5)*.24)),bt(.082,.071,.073),n()*6)}else if(L==="cloth"){let G=it((S/(J-1)-.5)*E*.82,.97,.06);y(["linen","sage","rust"][S%3],G.x,G.y,G.z,.29,.16,.63,x)}else L==="bread"?(B(fr,"straw",V.clone(),bt(.19,.07,.16),x),B(fr,"oldwood",V.clone().add(bt(.033,.074,.016)),bt(.139,.067,.124),x,1.15)):Yt(V.x,V.y,V.z,.46+n()*.44,S%2?"ceramic":"paleCeramic")}let I={fruit:"\u679C\u5B50",cloth:"\u5E03\u5E1B",pot:"\u8336\u6C34",bread:"\u80E1\u9905"}[L];(D||L==="bread")&&mt(it,x,I,-E*.3,1.54,.02,.45,.85,!0),ft(it,x,0,-.91,.84,D?1.58:1.94,L),j(it,0,0,E,1.08)}function rt(_,C,x,E){for(let D=0;D<x/.27;D++)y("oldwood",_-x/2+D*.27,.44-.08,C,.247,.16,E);for(let D=0;D<=x/2.1;D++){let W=_-x/2+D*2.1;for(let it of[-1,1])y("beam",W,-.5,C+it*(E*.43),.28,1.92,.28),y("oldwood",W,.66,C+it*E*.43,.31,.58,.31)}g.push({x0:_-x/2,x1:_+x/2,z0:C-E/2,z1:C+E/2,y:.44});for(let D=0;D<12;D++){let W=_-x*.41+D*(x*.82/11);D%3===0?Ht(W,.44,C-E*.3,.7+n()*.45):lt(W,.44,C-E*.3,.72+n()*.48)}}function Ct(){let _=qe(Oe),C=_-xs,x=_+xs,E=144;for(let L=0;L<E;L++){let D=jt.lerp(C,x,L/E),W=jt.lerp(C,x,(L+1)/E);for(let it=0;it<5;it++){let ot=vs/5,J=Oe-vs/2+ot*(it+.5);y("oldwood",J,tn((D+W)/2)-.103,(D+W)/2,ot-.014,.178,W-D-.009,0,.74+n()*.28)}}for(let L of[-4.9,-3.35,-1.65,0,1.65,3.35,4.9]){let D=Oe+L;for(let W=0;W<17;W++){let it=W/17,ot=(W+1)/17,J=jt.lerp(C+.43,x-.43,it),I=jt.lerp(C+.43,x-.43,ot);M("beam",bt(D,tn(J)-.76,J),bt(D,tn(I)-.76,I),.4,.47);let S=W%2===0?.99:.73;M("timber",bt(D+.22,tn(J)-S-.18,J),bt(D+.22,tn(I)-.35,I),.32,.37)}for(let W=0;W<12;W++){let it=jt.lerp(C+.75,x-.75,W/12),ot=jt.lerp(C+.75,x-.75,(W+1)/12);M("timber",bt(D-.14,tn(it)-.94,it),bt(D-.14,tn(ot)-.94,ot),.35,.37)}}for(let L=0;L<=22;L++){let D=jt.lerp(C,x,L/22),W=jt.lerp(C,x,(L+1)/22),it=tn(D);M("beam",bt(Oe-5.65,it-.57,D),bt(Oe+5.65,it-.57,D),.24,.34);for(let ot of[-1,1]){let J=Oe+ot*5.18;if(y("timber",J,it+.49,D,.15,1.15,.2),B(fr,"beam",bt(J,it+1.12,D),bt(.131,.18,.13)),L!==22){for(let I of[.37,.94])M("oldwood",bt(J,it+I,D),bt(J,tn(W)+I,W),.105,.12);M("timber",bt(J,it+.14,D),bt(J,tn(W)+.37,W),.061,.065)}}}for(let L of[-1,1]){let D=_+L*(xs-.12);y("stone",Oe,-.53,D,vs+1.2,1.22,1.48),y("stone",Oe,.04,D+L*.82,vs+.66,.15,1)}mt(Y(Oe,0,_,Math.PI/2),Math.PI/2,"\u8679\u6A4B",0,tn(_)-.34,5.38,1.6,.43)}function Ot(_,C,x){let E=document.createElement("canvas");E.width=768,E.height=440;let L=E.getContext("2d");L.fillStyle="#d6bb83",L.fillRect(0,0,768,440),L.strokeStyle="#9e7c4b",L.lineWidth=3,L.strokeRect(17,16,734,408);let D=J=>46+(J+135)*2.05,W=J=>211+J*2.45;L.beginPath();for(let J=-134;J<=187;J+=3)L.lineTo(D(J),W(qe(J)-On(J)));for(let J=187;J>=-134;J-=3)L.lineTo(D(J),W(qe(J)+On(J)));L.closePath(),L.fillStyle="#798c79",L.fill(),L.strokeStyle="#596958",L.stroke(),L.strokeStyle="#9d6644",L.lineWidth=5,L.beginPath(),L.moveTo(D(-121),W(25)),L.lineTo(D(-4),W(22)),L.lineTo(D(-4),W(-23)),L.lineTo(D(163),W(-25)),L.stroke(),L.lineWidth=8,L.strokeStyle="#63513a",L.beginPath(),L.moveTo(D(106.7),W(-68)),L.lineTo(D(106.7),W(-12)),L.stroke(),L.fillStyle="#786247";for(let J=0;J<20;J++){let I=J*8+3;L.fillRect(D(I),W(-35-J%3),8,13),J>12&&L.fillRect(D(I),W(-53+J%2*3),9,11)}L.font="bold 25px SimSun, serif",L.fillStyle="#59412c",L.fillText("\u6C74\u4EAC\u6C34\u9678\u5716",44,66),L.fillText("\u57CE\u9580",D(112),W(-10)),L.fillText("\u8679\u6A4B",D(-27),W(-30)),L.fillText("\u6C74\u6CB3",D(-105),W(3)),L.fillText("\u5317",690,60);let it=new Nn(E);it.colorSpace=Ce,it.anisotropy=8;let ot=new me(new pn(2.18,1.24),gn(it,{side:we}));ot.position.copy(_(0,x+1.113,-.32)),ot.rotation.set(-Math.PI/2,C+Math.PI,0,"YXZ"),i.add(ot),q(_,C,"oldwood",0,x+1.044,-.32,2.53,.127,1.52);for(let J of[-1.07,1.07])for(let I of[-.91,.27])q(_,C,"beam",J,x+.5,I,.13,1.01,.13);$(_,0,-.32,2.53,1.52)}function H(_,C,x){let E=(L,D,W,it)=>q(_,C,"plaster",L,x+1.36,D,W,2.72,it);for(let L of[-5.83,5.83])E(L,0,.21,5.58),$(_,L,0,.21,5.58);for(let[L,D]of[[-4.72,2.18],[0,3.58],[4.72,2.18]])E(L,-2.77,D,.23),$(_,L,-2.77,D,.23);q(_,C,"timber",0,x+2.42,-2.77,11.6,.19,.29),q(_,C,"plaster",0,x+.43,2.77,11.6,.86,.22),q(_,C,"oldwood",0,x+.89,2.79,11.6,.12,.35),$(_,0,2.77,11.6,.25),Pt(_,C,-3.83,x+1.53,2.84,1.15,1.15),Pt(_,C,3.83,x+1.53,2.84,1.15,1.15);for(let L of[-5.8,-3.87,-1.93,0,1.93,3.87,5.8]){for(let D of[-2.86,2.86])q(_,C,"lacquer",L,x+1.51,D,.225,3.02,.25),$(_,L,D,.225,.25);q(_,C,"oldwood",L,x+2.8,0,.19,.26,5.86)}for(let L of[-1,1]){let D=L*2.91,W=L*4.45;k("tileDark",_(-6.65,x+2.56,D),_(6.65,x+2.56,D),_(6.65,x+2.22,W),_(-6.65,x+2.22,W),[0,0,7,1.2]),M("beam",_(-6.65,x+2.21,W),_(6.65,x+2.21,W),.15,.17);for(let it of[-4.8,-2.7,2.7,4.8])M("timber",_(it,x+2.02,D),_(it,x+2.19,W),.087,.093)}Lt(_,15.8,10.5,x+3.115,2.65,"tileDark"),Ot(_,C,x);for(let L of[-4.83,4.83])q(_,C,"beam",L,x+.17,1.47,1.6,.33,.8),q(_,C,"oldwood",L,x+1.15,1.73,1.6,.12,.29),$(_,L,1.49,1.61,.86);for(let L=0;L<4;L++){let D=-5.39+L*.33;M("oldwood",_(D,x+.34,1.18),_(D,x+1.94,1.65),.027,.027,Ue);let W=_(D,x+2.03,1.68);B(gg,"iron",W,bt(.045,.15,.032),C,1.14)}for(let L=0;L<3;L++){let D=4.25+L*.49;M("beam",_(D,x+.37,1.24),_(D,x+1.22,1.61),.063,.05),M("iron",_(D,x+1.22,1.61),_(D+.045,x+1.83,1.8),.079,.027),M("timber",_(D-.13,x+1.24,1.61),_(D+.13,x+1.24,1.61),.04,.038)}for(let L of[-5.07,-4.46]){let D=_(L+.19,x+.42,2.13);for(let W=1;W<=11;W++){let it=W/11,ot=_(L+.19*Math.cos(it*2*Math.PI),x+.42+it*1.21,2.13+.031*Math.sin(it*Math.PI));M("oldwood",D,ot,.029,.024,Ue),D=ot}}q(_,C,"straw",4.93,x+.34,-1.39,.63,.69,.53),$(_,4.93,-1.39,.63,.53),m.push({position:_(-3.77,x,-.96),yaw:C+2.47}),m.push({position:_(3.81,x,-.94),yaw:C-2.47})}function Zt(_,C,x,E){let S=_(x*5.6,0,-7.04),V=Me(S.x,S.z),G=(V+E)/2,et=(te,ce,ie,Le)=>{let ve=_(x*te,0,ie),ye=_(x*ce,0,Le);return{x0:Math.min(ve.x,ye.x),x1:Math.max(ve.x,ye.x),z0:Math.min(ve.z,ye.z),z1:Math.max(ve.z,ye.z)}};function z(te,ce,ie,Le,ve,ye){q(_,C,"wall",x*te,(ve-.24)/2,ce,ie,ve+.24,Le,ye),q(_,C,"brick",x*te,ve-.055,ce,ie+.016,.11,Le+.006,ye)}function X(te,ce,ie,Le,ve){let ye=(ce-te)/23,cn=(ve-Le)/23;for(let xn=0;xn<23;xn++){let kn=te+(xn+.5)*ye,Ss=Le+(xn+1)*cn;z(kn,ie,Math.abs(ye),1.55,Ss,[.87,.96,.92,.99][xn%4]);for(let da of[-1,1]){let gr=ie+da*.68;q(_,C,"brick",x*kn,Ss+.168,gr,Math.abs(ye)+.01,.34,.19,.92),q(_,C,"stone",x*kn,Ss+.337,gr,Math.abs(ye)+.016,.069,.2,.9)}}return{...et(te,ce,ie-1.55/2,ie+1.55/2),from:_(x*te,0,ie).z,to:_(x*ce,0,ie).z,bottom:Le,rise:cn,count:23}}let st=[X(5.6,10.84,-7.04,V,G),X(10.84,5.6,-5.13,G,E)],_t=-5.13+1.55/2,dt=-7.04-1.55/2,Tt={...et(10.84,12.02,_t,dt),level:G};z((10.84+12.02)/2,(_t+dt)/2,12.02-10.84,_t-dt,G,.91),q(_,C,"brick",x*(12.02-.065),G+.27,(_t+dt)/2,.13,.54,_t-dt,.92);for(let te of[_t,dt])q(_,C,"brick",x*((10.84+12.02)/2),G+.24,te,12.02-10.84,.48,.16,.91);let $t={...et(4.36,5.6,_t+.24,-5.13-1.55/2),level:E};z((4.36+5.6)/2,(_t+.24+-5.13-1.55/2)/2,5.6-4.36,_t+.24-(-5.13-1.55/2),E,.93),f.push({paths:st,turn:Tt,exit:$t});for(let te of[-1,1]){let ce=_(x*4.77,0,-7.04+te*1.24);ce.y=Me(ce.x,ce.z),m.push({position:ce,yaw:(x>0?Math.PI:0)+te*.13})}let qt=x*(5.6-.27),re=-7.04-1;mt(_,x>0?Math.PI:0,"\u767B\u57CE",qt-x*.054,1.88,re,.43,.85,!0),q(_,C,"timber",qt,1.15,re,.087,2.21,.085,.94)}function Ft(){let _=-Math.PI/2,C=106.7,x=-25,E=Y(C,0,x,_),L=8.75,D=8.5,W=3.98,it=2.95,ot=L+.185,J=[-5.01,5.01],I=z=>it+Math.sqrt(Math.max(0,W*W-z*z)),S=L-.11;for(let[z,X]of[[-49,-W],[W,13.6]]){q(E,_,"wall",(z+X)/2,L/2,0,X-z,L,D),q(E,_,"brick",(z+X)/2,.46,0,X-z,.95,D+.14),q(E,_,"brick",(z+X)/2,S,0,X-z,.29,D+.38),j(E,(z+X)/2,0,X-z,D);for(let st=z+.3;st<X-.25;st+=1.25)for(let _t of[-1,1])_t===-1&&J.some(dt=>Math.abs(dt-st)<1.42)||(q(E,_,"brick",st,L+.43,_t*(D/2-.18),.72,.77,.42),$(E,st,_t*(D/2-.18),.72,.42));for(let st=z+.4;st<X-.35;st+=3.45)for(let _t of[-1,1])q(E,_,"stone",st,2.15,_t*D/2,.22,2.6,.17,.82)}let V=D/2,G=28;for(let z=0;z<G;z++){let X=-W+z/G*W*2,st=-W+(z+1)/G*W*2;for(let _t of[-1,1]){let dt=_t*V;k("brick",E(X,I(X),dt),E(st,I(st),dt),E(st,L,dt),E(X,L,dt),[X/3,0,st/3,1.7])}k("brick",E(X,I(X),V),E(st,I(st),V),E(st,I(st),-V),E(X,I(X),-V),[X/3,0,st/3,2.6],[.77,.73,.66])}for(let z=0;z<25;z++){let X=Math.PI*z/25+.01,st=Math.PI*(z+1)/25-.009;for(let _t of[-1,1]){let dt=(Tt,$t)=>E(Math.cos(Tt)*$t,it+Math.sin(Tt)*$t,_t*(V+.095));k("stone",dt(X,W+.028),dt(st,W+.028),dt(st,W+.6),dt(X,W+.6),[0,0,.55,.55],[.95,.91,.82])}}for(let z of[-1,1])for(let X=0;X<5;X++)q(E,_,"stone",z*(W+.32),X*.57+.3,V+.1,.64,.55,.24);q(E,_,"stone",0,L+.075,0,24.1,.22,8.9),A={x0:C-4.45,x1:C+4.45,z0:x-12.05,z1:x+12.05,floor:ot};for(let z of[-11.9,11.9])q(E,_,"brick",z,ot+.43,0,.29,.89,8.86),$(E,z,0,.29,8.86);for(let[z,X]of[[-9.12,5.82],[0,8.73],[9.12,5.82]])q(E,_,"brick",z,ot+.28,-4.05,X,.56,.38),$(E,z,-4.05,X,.38);q(E,_,"brick",0,ot+.23,4.04,24,.46,.39),$(E,0,4.04,24,.39),H(E,_,ot);for(let z of[-1,1])Zt(E,_,z,ot);mt(E,_,"\u6C74\u4EAC",0,7.86,V+.13,1.95,.54);for(let z of[-1,1]){m.push({position:E(z*7.75,ot,V-.6),yaw:_-z*.14}),m.push({position:E(z*9.65,ot,-V+.93),yaw:_+Math.PI+z*.09});let X=E(z*4.9,0,V+.94);X.y=Me(X.x,X.z),m.push({position:X,yaw:_-z*.25})}yt([[94,-25],[119,-25]],8.7,"pave")}function Ut(_,C,x,E=!1){let L=Me(_,C),D=(E?7:6.6)*x,W=n()*Math.PI*2,it=bt(Math.cos(W)*x*.75,0,Math.sin(W)*x*.75),ot=bt(_,L-.16,C),J=bt(_,-.12+L+D*.47,C).addScaledVector(it,.24),I=bt(_,L+D*.91,C).add(it),S=(E?.34:.25)*x;M("bark",ot,J,S*1.15,S,Ue),M("bark",J,I,S*.72,S*.64,Ue);let G=(E?[8622155,7373125,10003034,6058555,8033109]:[6452552,8227397,8689236,5598014,9740887]).map(z=>new At(z).toArray()),et=E?21:18;for(let z=0;z<et;z++){let X=z*2.399963+n()*.42,st=bt(Math.cos(X),0,Math.sin(X)),_t=J.clone().lerp(I,.19+n()*.67),dt=(1.18+n()*2.6)*x,Tt=_t.clone().addScaledVector(st,dt).add(bt(0,(.66+n()*1.67)*x,0)),$t=_t.clone().lerp(Tt,.51).add(bt(0,.43*x,0));z<16&&(M("bark",_t,$t,S*.24,S*.24,Ue),M("bark",$t,Tt,S*.12,S*.12,Ue));for(let te=0;te<5;te++){let ce=$t.clone().lerp(Tt,.28+te*.19).addScaledVector(st,(n()-.25)*x*.64);ce.y+=(n()-.53)*(E?1.48:1)*x;let ie=X+te*2.11,Le=(E?1.12:1.27)*(.67+n()*.39)*x,ve=bt(Math.sin(ie)*Le,(n()-.5)*Le*.27,Math.cos(ie)*Le),ye=bt(Math.cos(ie)*Le*.22,Le*(E?1.32:.8),-Math.sin(ie)*Le*.22);k("bough",ce.clone().sub(ve).sub(ye),ce.clone().add(ve).sub(ye),ce.clone().add(ve).add(ye),ce.clone().sub(ve).add(ye))}let qt=E?33:35,re=E?1.1:1.58;for(let te=0;te<qt;te++){let ce=.35+n()*.73,ie=$t.clone().lerp(Tt,ce).addScaledVector(st,(n()-.21)*re*x),Le=E?.7:1.3;ie.x+=(n()-.5)*1.55*re*x,ie.z+=(n()-.5)*1.55*re*x,ie.y+=(n()-.54)*Le*x,E&&(ie.y-=(.08+Math.pow(n(),.52)*2.37)*ce*x);let ve=(.13+n()*.28)*x,ye=(E?.052:.133)*x*(.58+n()),cn=n()*6.28,xn=bt(Math.cos(cn)*ye,(n()-.5)*ye*.9,Math.sin(cn)*ye),kn=bt(Math.sin(cn)*ve*.66,-ve*(.72+n()*.35),-Math.cos(cn)*ve*.66);k("foliage",ie.clone().addScaledVector(kn,-.49),ie.clone().add(xn),ie.clone().addScaledVector(kn,.6),ie.clone().addScaledVector(xn,-1),[0,0,1,1],G[Math.floor(n()*G.length)])}}}function gt(_,C,x,E){let L=[7307575,10135131,9214020,11448692].map(D=>new At(D).toArray());for(let D=0;D<Math.floor(E/.78);D++){let W=C+D*.78;for(let it=_;it<_+x;it+=.26+n()*.12){let ot=it+n()*.13,J=W+n()*.33,I=Me(ot,J);for(let S=0;S<3;S++){let V=.28+n()*.49,G=(n()-.5)*.29,et=bt(ot+(n()-.5)*.14,I,J+(n()-.5)*.11);k("foliage",et,et.clone().add(bt(.034,0,0)),et.clone().add(bt(G,V,-.04)),et.clone().add(bt(G+.036,V,-.041)),[0,0,1,1],L[Math.floor(n()*L.length)])}}}}pt(),yt([[-162,34],[-142,28],[-126,25],[-108,22],[-88,19],[-73,18],[-56,18],[-49,19],[-36,19],[-20,20],[-10,22],[10,23],[39,24],[64,26]],4.6),yt([[-44,-22],[-21,-23],[-4,-23],[16,-23],[32,-24],[57,-24],[79,-24],[103,-25],[128,-25],[145,-26],[174,-26]],7.1,"path"),yt([[119,-25],[129,-28],[129,-45],[130,-64],[132,-72]],4.4,"pave"),yt([[112,-43],[129,-45],[153,-46],[171,-45]],3.8,"soil"),yt([[142,-26],[143,-39],[146,-65]],4,"soil"),yt([[-6,25],[-8,42],[-18,67]],3.7,"soil"),gt(-152,32,31,16),gt(-113,29,25,13),gt(-156,54,27,14),gt(-74,43,18,12),gt(46,40,26,12),St(-151,26,6.8,5.6,{roofKind:"straw"}),St(-137,36,7.2,6.2,{theta:Math.PI,roofKind:"straw"}),St(-112,13.7,6.2,5.6,{theta:Math.PI,roofKind:"tileDark"}),St(-103,25,8,5.3,{theta:Math.PI,roofKind:"straw"}),St(-86,33,6.6,5.6,{theta:Math.PI}),St(-64,28.7,8.5,6.7,{theta:Math.PI,kind:"market",label:"\u8336\u68DA"}),St(-46,27.3,9.6,7.9,{theta:Math.PI,kind:"store",label:"\u8CA8\u68E7"}),St(-33,26.7,8.4,6.3,{theta:Math.PI,kind:"market"}),St(-22,28.5,7.8,7.1,{theta:Math.PI}),rt(-38,14.65,14.4,5.45);let Wt=-36.5,wt=7.22,Gt=12.33,Mt=_=>jt.lerp(.045,.45,jt.clamp((_-wt)/(Gt-wt),0,1));for(let _=0;_<19;_++){let C=wt+(_+.5)*(Gt-wt)/19;y("oldwood",Wt,Mt(C)-.059,C,1.57,.115,.249)}for(let _ of[-.67,.67])M("beam",bt(Wt+_,.02,wt),bt(Wt+_,.48,Gt),.105,.126);g.push({x0:-41,x1:-32.8,z0:5.65,z1:7.45,y:.044}),rt(-26,14.65,8.1,4.8),rt(15,16.2,12.6,5.35),rt(47,-13.2,13.5,4.5),Ct();for(let[_,C,x]of[[1,-7.2,"bread"],[-1,-10.3,"fruit"],[1,8.7,"pot"],[-1,12.7,"cloth"]])Bt(Oe+_*3.91,C,-_*Math.PI/2,1.68,x,!0);for(let _=0;_<390;_++){let C=-151+n()*319,E=_%4!==0?-24+(n()>.5?1:-1)*(2.6+n()*.95):23+(n()>.5?1:-1)*(1.4+n()*1);if(Math.abs(C-106.7)<7||Math.abs(C+4)<8)continue;let L=.016+n()*.087;B(pr,"stone",bt(C,Me(C,E)+.022,E),bt(L,.048,L*.65),n()*6,.9)}for(let[_,C,x,E,L,D]of[[5,-32.2,7.1,7.4,"market","\u8336\u8086"],[14.4,-34,8.2,9,"store","\u96DC\u8CA8"],[24.6,-34.1,9.8,10,"market","\u9999\u6599"],[36.8,-34.5,8.8,9.4,"store","\u7DA2\u5E03"],[48,-34.1,8.3,8.6,"store","\u74F7\u5668"],[58.4,-35.7,8.2,9.4,"market","\u7CE7\u884C"],[69,-36.2,11.8,12.35,"tavern","\u9152\u6A13"],[82.5,-35.7,9,10.4,"store","\u8336\u574A"],[94,-35.3,8.65,8.6,"market","\u7AF9\u5668"]])St(_,C,x,E,{floors:2,kind:L,label:D});for(let[_,C,x,E,L,D]of[[-20,-33.6,8.5,7.4,"home"],[-10,-34.6,7.9,7.5,"market","\u8336"],[9,29.5,8.2,7,"market","\u8336"],[20,34,10.2,8.5,"tavern","\u9152"],[31,31.7,7.1,7.4,"store","\u7C73"],[45,33,7.4,7,"home"],[14,-17,6.45,4.85,"store","\u8336"],[32.5,-16.6,7.6,4.25,"market"],[62,-16.35,8.1,5.6,"market","\u679C\u5B50"],[82,-16.9,9.4,5.2,"store","\u767E\u8CA8"]])St(_,C,x,E,{theta:C>0||C>=-18?Math.PI:0,floors:L==="home"?1:2,kind:L,label:D});for(let[_,C,x,E,L]of[[-19,18.9,0,3.2,"fruit"],[-12,19.7,0,3.6,"cloth"],[3,24.7,Math.PI,3.6,"fruit"],[17,19.8,0,3.8,"pot"],[3,-18.7,Math.PI,3.8,"pot"],[20,-19.2,Math.PI,4,"fruit"],[25.6,-20.1,Math.PI,3.4,"fruit"],[38.6,-19.4,Math.PI,4.4,"cloth"],[45,-20.4,Math.PI,3.9,"pot"],[53.9,-19.7,Math.PI,4.2,"fruit"],[73.5,-20,Math.PI,3.7,"pot"],[89.1,-19.9,Math.PI,3.2,"cloth"],[151,-19.4,Math.PI,4.2,"pot"],[136,-20.1,Math.PI,4,"fruit"],[31.1,-27.6,0,2.3,"bread"],[42,-27.5,0,2.2,"fruit"],[53.3,-28.1,0,2,"cloth"]])Bt(_,C,x,E,L);Ft();for(let[_,C,x,E,L,D]of[[116.2,-43.05,6.8,8.4,"store","\u98DF\u5E97"],[122,-41.8,5,7.4,"home"],[136.8,-34.7,7.1,8.7,"home"],[149.9,-34.8,7.6,8,"store","\u5E03"],[160.4,-35,8.5,8.5,"home"],[172,-34.3,10,8,"home"],[119.9,-50.8,9,7.1,"home"],[137.3,-51.4,9,7.5,"home"],[120.3,-61,9.4,8.9,"home"],[138.1,-63,10,9,"home"],[153.7,-55.4,8.6,9.3,"home"],[167.8,-54.5,10.7,8.1,"home"]])St(_,C,x,E,{floors:C<-47?1:2,kind:L,label:D});for(let _ of[10,24,42,57,74,90,116,128,151,169])for(let C of[-57,-71])_>120&&_<147||St(_+(n()-.5)*3,C+(n()-.5)*2,6.6+n()*3.9,5.3+n()*3.7,{floors:n()>.58?2:1,simple:!0,theta:n()>.5?Math.PI:0});for(let[_,C,x,E]of[[-242,36,8.7,6.3],[-211,23,8.1,5.4],[-187,23,7.8,7.2],[185,-26,8.7,6.4],[196,-28,8,5.8],[210,-30,10.3,6.6],[228,-32,8,6.5],[239,-37,7.1,7.1]])St(_,C,x,E,{floors:_<0?1:2,simple:!0,theta:C>0?Math.PI:0});for(let[_,C,x]of[[-203,20,1.04],[-227,23,1.19],[-244,26,1.05],[170,21,1.12],[187,24,1.08],[211,25,1.24],[232,-21,.91],[244,23,.95]])Ut(_,C,x,!0);let kt=Y(154,.19,-66,0);for(let _=0;_<3;_++){let C=7.35-_*1.38;q(kt,0,"plaster",0,2.63+_*3.5,0,C-.31,3,C*.78);for(let x of[-1,1])q(kt,0,"lacquer",x*(C/2-.32),2.63+_*3.5,C*.38,.23,3.05,.23),Pt(kt,0,x*C*.214,2.88+_*3.5,C*.39,C*.28,.94);Lt(kt,C+1.91,C*.84+1.34,3.97+_*3.5,1.28,"tileDark",!0)}for(let _ of[-78,-65,-48,-38,-23])St(_,-32-10*n(),6.3+n()*3,5.6+n()*3,{simple:!0,floors:n()<.19?2:1});for(let[_,C,x,E]of[[-139,19,1.17,1],[-119,18,1.2,1],[-117,31,.97,0],[-98,19,.99,1],[-82,13,1.16,1],[-68,14.7,1.14,1],[-56,24,1,1],[-42,20.6,.96,1],[-22,18.3,.96,1],[-10,27,1.22,1],[10,20.4,.99,1],[28,29,.82,1],[48,20.2,1.04,1],[59,19.9,1.25,1],[70,26,1,1],[-39,-22,1.11,1],[-16,-24,1.12,1],[7,-15.5,.86,1],[34,-28.8,.93,0],[55,-15.5,1.01,1],[76,-15.8,.85,1],[93,-15.1,1.12,1],[112,-14.2,.91,1],[126,-53,1.12,0],[132,-48,.99,1],[128,-66,1.02,1],[137,-41,.83,0]])Ut(_,C,x,E===1);for(let _=0;_<74;_++){let C=-169+n()*350,x=(n()>.54?-1:1)*(40+n()*38);C>94&&C<151&&x<0||Ut(C,x,.63+n()*.54,n()>.67)}for(let _=0;_<1900;_++){let C=-163+n()*337,x=n()>.5?1:-1,L=qe(C)+x*On(C)+x*(n()*1.65+.05);if(C>-11&&C<4||C>-46&&C<-20&&x===1)continue;let D=Me(C,L),W=[.29,.34,.105],it=.17+n()*.38;k("foliage",bt(C-.026,D,L),bt(C+.039,D,L),bt(C+.13*n(),D+it,L+.06),bt(C-.018,D+it,L+.06),[0,0,1,1],W)}for(let[_,C]of[[8,27],[21,28],[-31,21.5],[47,-31.5],[72,-32],[-74,19.3],[134,-42],[125,-56]])_===47||_===72||(Ht(_,Me(_,C),C,.83),lt(_+.82,Me(_,C),C,.67),O(_,C,1.5,.75));for(let _=0;_<14;_++){let C=-146+_*2;y("timber",C,Me(C,30.7)+.43,30.7,.16,1.04,.19),_<13&&(M("oldwood",bt(C,.43,30.7),bt(C+2.1,.38,30.7),.085,.105),M("oldwood",bt(C,.7,30.7),bt(C+2.06,.69,30.7),.071,.084))}for(let[_,C]of[[124,-42],[133,-40],[128,-55]]){let x=Y(_,Me(_,C),C,Math.PI/2);M("timber",x(-1.2,0,0),x(-1.2,2.3,0),.075,.075,Ue),M("timber",x(1.2,0,0),x(1.2,2.2,0),.075,.075,Ue),M("timber",x(-1.2,2.25,0),x(1.2,2.16,0),.032,.034,Ue);for(let E=0;E<4;E++){let L=-.94+E*.52,D=L+.44,W=2.21-E*.019;k("awning",x(L,W,0),x(D,W,0),x(D,W-.69-E*.06,.04),x(L,W-.64-E*.06,.14))}}for(let{geo:_,mat:C,entries:x}of h.values()){let E=new Ei(_,s[C],x.length);for(let[L,[D,W]]of x.entries())E.setMatrixAt(L,D),E.setColorAt(L,U.setScalar(W));E.castShadow=C!=="soil"&&C!=="grass",E.receiveShadow=!0,E.computeBoundingSphere(),i.add(E)}for(let[_,{points:C,uv:x,colors:E}]of d){let L=new Te;L.setAttribute("position",new ae(C,3)),L.setAttribute("uv",new ae(x,2)),L.setAttribute("color",new ae(E,3)),L.computeVertexNormals();let D=s[_].clone();D.side=we,D.vertexColors=!0,(_==="foliage"||_==="awning"||_==="bough")&&(D.onBeforeCompile=s[_].onBeforeCompile);let W=new me(L,D);W.receiveShadow=!0,W.castShadow=!["soil","grass","stone","pave","path"].includes(_),i.add(W)}let F=(_,C,x,E=0)=>C>=_.x0+E&&C<=_.x1-E&&x>=_.z0+E&&x<=_.z1-E;function b(_,C){for(let{paths:x,turn:E,exit:L}of f){if(F(E,_,C))return E;if(F(L,_,C))return L;for(let D of x)if(F(D,_,C))return D}}function K(_,C,x){return x>=A.floor-.65&&(F(A,_,C)||f.some(({exit:E})=>F(E,_,C)))}function ht(_,C,x=0){if(_<dr.west||_>dr.east||C<dr.north||C>dr.south)return null;if(K(_,C,x))return A.floor;let E=b(_,C);if(E){if(E.level!==void 0)return E.level;let L=jt.clamp((C-E.from)/(E.to-E.from),0,1),D=Math.min(E.count,1+Math.floor(L*E.count));return E.bottom+D*E.rise}if(Math.abs(_-Oe)<vs/2-.14&&Math.abs(C-qe(Oe))<=xs+.04)return tn(C);if(Math.abs(_-Wt)<.78&&C>=wt&&C<=Gt)return Mt(C);for(let L of g)if(_>=L.x0&&_<=L.x1&&C>=L.z0&&C<=L.z1)return L.y;return Math.abs(C-qe(_))<On(_)-.14?null:Me(_,C)}function xt(_,C,x=.3,E=0){let L=b(_,C);return L?.count&&(_<L.x0+.16+x||_>L.x1-.16-x)?!0:(L&&E>=A.floor-.65||K(_,C,E)?w:p).some(it=>_>it.x0-x&&_<it.x1+x&&C>it.z0-x&&C<it.z1+x)}return{materials:s,walkHeight:ht,isObstacle:xt,obstacles:p,trades:v,gatePosts:m,gateTerrace:A,gateStairs:f,onGateTerrace:K}}function Ch(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Te,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0,h=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Ah(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let p=[];for(let v=0;v<o[u].length;++v)p.push(o[u][v][d]);let g=Ah(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Ah(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Ae(o,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<e;g++){let v=u.getComponent(d,g);a.setComponent(d+h,g,v)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var fe=(i,t,e)=>new Z(i,t,e),Dc=fe(0,1,0),Rn=new Un(1,1,1),_n=new ci(1,12,8),Rh=new ci(1,10,6,0,Math.PI*2,0,Math.PI*.57),zn=new on(1,1,1,8),Ph=new on(.65,1,1,10),la=new on(1,.72,1,10),Uc=new cs(1,.083,6,19),_g=new on(.71,1,1,8),xg=new Ai(1),fi=Math.PI*2;function Pe(i,t,e,n,s,r,o=1,a=1,l=1){let c=new me(i,t);return c.position.set(n,s,r),c.scale.set(o,a,l),c.castShadow=c.receiveShadow=!0,e.add(c),c}function In(i,t,e,n,s,r=zn){let o=n.clone().sub(e),a=e.clone().lerp(n,.5),l=Pe(r,t,i,a.x,a.y,a.z,s,o.length(),s);return l.quaternion.setFromUnitVectors(Dc,o.normalize()),l}function Bi(i,t=[]){let e=new Map;for(let n of[...i.children]){if(!n.isMesh||t.includes(n))continue;n.updateMatrix();let s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();s.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(s),i.remove(n)}for(let[n,s]of e)Pe(Ch(s),n,i,0,0,0),s.forEach(r=>r.dispose())}function vg(i,t,e,n){let s=[];function o(h,d){let p=(h-.5)*i,g=Math.pow(.065+.935*Math.sin(Math.PI*h),.69),v=Math.sin(d*Math.PI),m=Math.cos(d*Math.PI);return[p,-.04+v*-.53+.26*Math.pow(Math.abs(h-.5)*2,4),m*t*.51*g*(.75+.25*Math.abs(m))]}for(let h=0;h<24;h++)for(let d=0;d<11;d++){let p=o(h/24,d/11),g=o((h+1)/24,d/11),v=o((h+1)/24,(d+1)/11),m=o(h/24,(d+1)/11);s.push(...p,...g,...v,...p,...v,...m)}let a=new ae(s,3),l=new Float32Array(a.count*2);for(let h=0;h<a.count;h++)l[h*2]=a.getY(h)*2.8,l[h*2+1]=a.getX(h)/3;let c=new Te;c.setAttribute("position",a),c.setAttribute("uv",new Ae(l,2)),c.computeVertexNormals();let u=Pe(c,e,n,0,.66,0);for(let h of[-1,1])for(let d=0;d<22;d++){let p=d/22,g=(d+1)/22,[v,m,f]=o(p,h>0?0:1),[w,A,T]=o(g,h>0?0:1);In(n,e,fe(v,m+.75,f),fe(w,A+.75,T),.065)}return u}function yg(i,t,e){let n=[],s=t.timber.clone();s.color.setHex(10914923),s.side=we;for(let r=0;r<9;r++){let o=new Ne,a=r%3===1?11.2:7.6+e()*2.6,l=r%3===1?3.5:2.25+e()*.58;vg(a,l,s,o);for(let m=0;m<Math.floor(a/.29);m++){let f=-a*.47+m*.29;if(f>a*.47)continue;let w=Math.pow(.08+.92*Math.sin(Math.PI*(f/a+.5)),.7);Pe(Rn,t.oldwood,o,f,.68,0,.27,.14,l*w*.96)}Pe(Rn,t.beam,o,-a*.45,.83,0,.28,.36,l*.36),Pe(Rn,t.beam,o,a*.45,.91,0,.31,.37,l*.38);for(let m of[-1,1])for(let f=-2;f<3;f++)Pe(Rn,t.oldwood,o,f*a*.15,.87,m*l*.44,.12,.55,.12),f<2&&In(o,t.oldwood,fe(f*a*.15,1.09,m*l*.44),fe((f+1)*a*.15,1.09,m*l*.44),.046);for(let m=0;m<12;m++){let f=a*(-.33+e()*.68),w=(e()-.5)*l*.61,A=m%3===0?t.oldwood:t.straw;Pe(m%3?_n:Rn,A,o,f,.87+e()*.16,w,.27+e()*.31,.31+e()*.13,.33+e()*.31)}if(r%3!==1){let m=.41*a,f=l*.42,w=new on(f,f,m,16,1,!0,0,Math.PI);Pe(w,t.straw,o,-.27,1.17,0).rotation.set(0,Math.PI/2,Math.PI/2);for(let T=0;T<6;T++){let P=Pe(Uc,t.oldwood,o,-m*.52+T*m/5,1.16,0,f*.99,f*.99,.57);P.rotation.y=Math.PI/2,P.geometry=new cs(1,.041,6,16,Math.PI)}}let c=new Ne;c.position.set(a*.16,.72,0),o.add(c);let u=r%3===1?6.2:4.6;if(In(c,t.beam,fe(0,0,0),fe(0,u,0),.08),r%2===0||r%3===1){let m=l*1.19,f=new pn(m,u*.65,12,14),w=f.attributes.position;for(let T=0;T<w.count;T++){let P=w.getX(T),N=w.getY(T),U=.4*Math.cos(P/m*Math.PI)*Math.cos(N/(u*.65)*Math.PI*.7);w.setZ(T,U+.045*Math.sin(N*8))}f.computeVertexNormals();let A=t.linen.clone();A.side=we,Pe(f,A,c,-.12,u*.6,.016).rotation.y=Math.PI/2;for(let T=0;T<7;T++){let P=u*(.268+T*.109);In(c,t.oldwood,fe(-.13,P,-m*.52),fe(-.13,P,m*.52),.031)}}In(c,t.beam,fe(0,u-.16,0),fe(0,u-.09,.64),.035);let h=new Ne;h.position.set(-a*.37,.92,-l*.38),o.add(h),In(h,t.oldwood,fe(.28,.77,.08),fe(-1.52,-.51,-1.77),.055),Pe(Rn,t.timber,h,-1.44,-.46,-1.67,.7,.075,.2).rotation.set(-.18,-.67,.36);let p=Pe(Rn,t.oldwood,o,-a*.5,.22,0,.58,1.25,.125);p.rotation.z=.23;let g=r>=7;g&&(c.rotation.z=-1.42),Bi(c),Bi(h),Bi(o,[p]),i.add(o);let v=Mg(i,a,l);n.push({root:o,mast:c,oar:h,rudder:p,wake:v,length:a,docked:g,route:r%2===0?1:-1,lane:g?r===7?10.5:-10.9:(r%2===0?1:-1)*(2.48+e()*6.7),speed:.72+e()*.76,start:g?r===7?-37:46:-160+r*36+e()*11,phase:e()*fi})}return n}function Mg(i,t,e){let n=new Ne,s=new Te,r=[],o=[];for(let c of[-1,1])for(let u=0;u<14;u++){let h=u/14,d=(u+1)/14,p=(m,f)=>[-t*.38-m*t*1.19,0,c*(e*.2+e*1.31*m)+f],g=.03+.32*h,v=.03+.32*d;r.push(...p(h,-g),...p(d,-v),...p(h,g),...p(d,-v),...p(d,v),...p(h,g)),o.push(h,0,d,0,h,1,d,0,d,1,h,1)}s.setAttribute("position",new ae(r,3)),s.setAttribute("uv",new ae(o,2));let a={value:0},l=new Ve({side:we,transparent:!0,depthWrite:!1,uniforms:{time:a},vertexShader:"varying vec2 waveUv; void main(){ waveUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec2 waveUv; uniform float time; void main(){ float d=sin(waveUv.y*3.14159)*pow(1.0-waveUv.x,1.45); float foam=.25+.75*pow(max(0.0,sin(69.0*waveUv.x-2.3*time)),2.0); gl_FragColor=vec4(.86,.87,.72,d*foam*.39); }"});return n.add(new me(s,l)),n.position.y=ur+.015,n.userData.time=a,i.add(n),n}var Sg=[[[-148,22],[-129,24],[-109,22],[-82,19],[-72,18],[-86,20],[-110,24],[-131,26]],[[-47,18.4],[-36,16.5],[-30,15.6],[-27,17.9],[-34,19.3],[-44,20.1]],[[-42,19.8],[-27,20],[-14,22],[-6,22],[-6,9],[-6,-4],[-6,-20],[-2,-23],[11,-23],[25,-25],[28,-24],[21,-22],[6,-21],[-2,-22],[-2,-4],[-2,10],[-2,22],[-12,23],[-27,21.2]],[[4,-24.9],[16,-24.6],[31,-25.7],[47,-25],[60,-25],[75,-24.6],[92,-25.9],[108,-25.4],[129,-25],[143,-25],[155,-26],[142,-27],[127,-24],[105,-23],[89,-23],[69,-23],[48,-23],[26,-22],[12,-22]],[[29,-27],[44,-27.7],[46,-29.8],[46,-31.1],[48,-31.7],[51,-30.8],[52,-27.2],[61,-26],[69,-26],[78,-26],[58,-25.6],[45,-26],[35,-26]],[[118,-25],[128,-27],[129,-40],[130,-56],[129,-62],[131,-65],[131,-51],[130,-36],[131,-28],[145,-26],[152,-24],[135,-24]],[[7,23],[14,22.4],[24,22.5],[48,24.2],[59,26],[47,26],[25,25.2],[17,24.7],[8,24.6]]];function Ih(i){let t=[],e=0;for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=Math.hypot(r[0]-s[0],r[1]-s[1]);t.push({a:s,b:r,from:e,to:e+o,distance:o}),e+=o}return{length:e,segments:t}}function bg(i,t){let e=t%i.length,n=i.segments.find(r=>e>=r.from&&e<r.to)??i.segments[0],s=(e-n.from)/n.distance;return[jt.lerp(n.a[0],n.b[0],s),jt.lerp(n.a[1],n.b[1],s),Math.atan2(n.b[0]-n.a[0],n.b[1]-n.a[1])]}function Tg(i,t){let e=new At(11232848),n=(o,a)=>({guard:!0,style:0,scale:.98+o%3*.018,shade:e,faces:new At(t[o%t.length]),payload:0,phase:o*.37,...a}),s=i.gatePosts.map((o,a)=>n(a,{post:o,speed:0})),r=[[[27,-24.95],[33,-24.95],[43,-25.08],[59,-25.4],[76,-25.3],[89,-25.55],[99.7,-25.55],[100.3,-23.8],[86,-23.25],[69,-23.3],[55,-23.45],[37,-23.5],[27.4,-23.7]],[[111,-25.45],[121,-25.45],[129.3,-27.55],[130.1,-35.5],[129.4,-44.3],[130,-48.65],[131.1,-46.75],[131.25,-40],[131.1,-34],[132.15,-29.6],[133.25,-25.8],[131,-23.55],[120,-23.55],[111,-23.5]],[[-109,19.8],[-99,19.35],[-91,19.1],[-81,17.65],[-73,16.96],[-63,17.2],[-60,18.55],[-67,20],[-76,21.15],[-89,21.15],[-98,21.22],[-106,21.12]],[[-55,18.82],[-47,18.25],[-40,18.18],[-34,18.35],[-27,18.61],[-23,18.91],[-23.1,20.22],[-29,20.09],[-37,20.08],[-44,20.14],[-51,20.29],[-54.6,20.28]]];for(let[o,a]of r.entries()){let l=new as(a.map(([u,h])=>fe(u,0,h)),!0,"centripetal"),c=l.getLength();for(let u=0;u<4;u++)s.push(n(u,{patrol:{route:l,length:c,lead:[8.2,27.4,28.2,23][o]-Math.floor(u/2)*1.28,side:u%2===0?-.41:.41},walking:!0,speed:[1.07,1.01,.99,.96][o]}))}return s}function wg(i,t,e,n,s,r,o,a){let l=Sg.map(Ih),c=[],u=s?[6,8,13,17,7,7,7]:[10,12,24,29,9,12,11],h=[10457715,12298628,8615014,7439720,13150590,11366240,6586246,11966849,9666179,12424029,6585699],d=[12094569,11962985,12950907,11502690,13278334],p=new Map;function g(rt,Ct,Ot){p.set(rt,{geometry:Ct,material:Ot,used:0})}let v=e.linen.clone();v.color.setHex(15985117);let m=new En({color:16777215,roughness:.81});g("head",_n,m),g("nose",_n,m),g("neck",zn,m),g("ears",_n,m),g("eyes",_n,e.black),g("hand",_n,m),g("hat",Rh,e.black),g("hair",_n,e.black),g("feet",_n,e.beam),g("hem",Ph,v),g("top",la,v),g("arms",_g,v),g("calves",zn,v),g("collar",zn,e.paleCeramic),g("belt",zn,e.beam),g("pole",zn,e.oldwood),g("parcel",_n,e.straw),g("basket",la,e.straw),g("rope",zn,e.oldwood);let f=new En({color:7829871,roughness:.77,metalness:.26});g("helmet",Rh,f),g("helmetRim",zn,f),g("chinGuard",Rn,f),g("armouredCoat",la,f),g("armourBand",zn,f),g("pauldron",_n,f),g("spearHead",xg,f);for(let rt=0;rt<l.length;rt++)for(let Ct=0;Ct<u[rt];Ct++){let Ot=.86+n()*.21;Ct%7===0&&rt>=2?c.push({route:l[rt],started:l[rt].length*(Ct+.25)/u[rt],speed:.72+n()*.17,walking:!0,style:Ct%3,scale:.92+n()*.13,shade:new At(h[Math.floor(n()*h.length)]),faces:new At(d[Math.floor(n()*d.length)]),p:rt,payload:2,phase:n()*fi}):c.push({route:l[rt],started:l[rt].length*(Ct+n()*.9)/u[rt],speed:.56+n()*.69,walking:!0,style:Ct%3,scale:Ot,shade:new At(h[Math.floor(n()*h.length)]),faces:new At(d[Math.floor(n()*d.length)]),p:rt,payload:Ct%4===0?1:0,phase:n()*fi})}let w=Ih([[-36.52,7.29],[-36.52,12.36],[-34.9,15.1],[-32.5,18.7],[-32.15,18.44],[-35.3,15.2],[-36.52,12.6],[-36.52,9.4]]);for(let rt=0;rt<2;rt++)c.push({route:w,started:w.length*(.19+rt*.49),speed:.7,walking:!0,delivery:!0,style:rt,scale:.94+rt*.044,shade:new At(h[1+rt*3]),faces:new At(d[rt]),payload:0,phase:rt*3.2});let A=[[-126,23.3],[-36,14.2],[-30,19.2],[60,-23.2],[97,-22.4],[113,-22.3],[130.4,-48],[125,-42.5],[65.2,-35.12],[72.5,-35.22],[66.1,-38.77],[10.3,25.1]];for(let rt=0;rt<A.length;rt++){let[Ct,Ot]=A[rt];c.push({x:Ct,z:Ot,walking:!1,seated:rt>=8&&rt<=10,style:rt%3,scale:.86+n()*.17,shade:new At(h[rt%h.length]),faces:new At(d[rt%d.length]),p:3,payload:rt%4===0?1:0,phase:n()*fi})}for(let[rt,Ct]of t.trades.entries()){let Ot=20+rt%5*2.2,H=(rt*.38197+.33)%1;for(let Zt of[!1,!0])c.push({stand:Ct,buyer:Zt,cycle:Ot,offset:H,style:(rt+Number(Zt))%3,scale:.91+n()*.12,shade:new At(h[(rt*3+Number(Zt)*5)%h.length]),faces:new At(d[rt%d.length]),payload:0,phase:n()*fi,speed:1})}for(let[rt,Ct]of r.entries())c.push({boat:Ct,x:0,z:0,walking:!1,style:rt%3,scale:.93,shade:new At(h[rt]),faces:new At(d[rt%d.length]),payload:0,phase:n()*fi});for(let rt of o)c.push({cart:rt,walking:!0,style:0,scale:.96,speed:1.05,shade:new At(h[3+rt.index]),faces:new At(d[rt.index]),payload:0,phase:n()*fi});for(let[rt,Ct]of a.entries())c.push({mount:Ct,seated:!0,style:0,scale:.98,shade:new At(h[5+rt]),faces:new At(d[rt]),payload:0,phase:rt*.9,speed:0});let T=Tg(t,d);c.push(...T);let P={helmet:1,helmetRim:1,chinGuard:2,armouredCoat:1,armourBand:4,pauldron:2,spearHead:1},N=c.length;for(let[rt,Ct]of p){let Ot=["hand","arms","calves","feet","collar","basket","rope","ears","eyes"].includes(rt)?2:1,H=P[rt]?T.length*P[rt]:N*Ot+(rt==="calves"?a.length*2:0),Zt=new Ei(Ct.geometry,Ct.material,H);Zt.instanceMatrix.setUsage(Pi),Zt.castShadow=!["nose","collar","rope"].includes(rt),Zt.receiveShadow=!0,Zt.frustumCulled=!1,Zt.count=0,i.add(Zt),Ct.model=Zt}let U=new Re,B=new Je,y=fe(0,0,0),M=fe(0,0,0),k=fe(0,0,0),O,Y,q,j,$,ft,tt;function mt(rt,Ct,Ot){let H=O.scale;return fe(Y+(rt*ft+Ot*tt)*H,q+Ct*H,j+(-rt*tt+Ot*ft)*H)}function pt(rt,Ct,Ot,H,Zt,Ft,Ut,gt,Wt=0){let wt=p.get(rt);U.position.copy(mt(Ct,Ot,H)),U.scale.set(Zt,Ft,Ut).multiplyScalar(O.scale),U.rotation.set(Wt,$,0,"YXZ"),U.updateMatrix(),wt.model.setMatrixAt(wt.used,U.matrix),wt.model.setColorAt(wt.used++,gt)}function yt(rt,Ct,Ot,H,Zt){let Ft=mt(...Ct),Ut=mt(...Ot),gt=H*O.scale;y.copy(Ut).sub(Ft),B.setFromUnitVectors(Dc,y.clone().normalize());let Wt=p.get(rt);U.position.copy(Ft).lerp(Ut,.5),U.quaternion.copy(B),U.scale.set(gt,y.length(),gt*.85),U.updateMatrix(),Wt.model.setMatrixAt(Wt.used,U.matrix),Wt.model.setColorAt(Wt.used++,Zt)}let Lt=new At(14997691),Pt=new At(9668216),Yt=new At(12559741),Ht=new At(13028301),lt=new At(9539209),ut={pot:new At(12173734),bread:new At(14990723),cloth:new At(13407109),fruit:new At(11905126)},St=(s?60:86)**2;function Bt(rt,Ct){for(let Ot of p.values())Ot.used=0;for(O of c){if(O.stand&&Ct&&O.stand.seller.distanceToSquared(Ct)>St)continue;let Ot=O.walking,H=0,Zt=!1;if(O.post)({x:Y,z:j}=O.post.position),$=O.post.yaw+.13*Math.sin(rt*.61+O.phase);else if(O.patrol){let{route:Mt,length:kt,lead:F,side:b}=O.patrol,K=(rt*O.speed+F)%kt/kt;Mt.getPointAt(K,M),Mt.getTangentAt(K,k),Y=M.x+k.z*b,j=M.z-k.x*b,$=Math.atan2(k.x,k.z)}else if(O.mount){let Mt=O.mount.root;Y=Mt.position.x,j=Mt.position.z,$=Mt.rotation.y}else if(O.stand){let{stand:Mt,buyer:kt,cycle:F,offset:b}=O,K=(rt/F+b)%1,ht=jt.smoothstep(K,.03,.26),xt=jt.smoothstep(K,.73,.96);if(H=jt.smoothstep(K,.34,.46)*(1-jt.smoothstep(K,.63,.73)),Zt=kt?K>.55&&K<.98:K>=.3&&K<=.55,kt){let C=ht-xt;Y=jt.lerp(Mt.entry.x,Mt.buyer.x,C),j=jt.lerp(Mt.entry.z,Mt.buyer.z,C);let x=K>.73&&K<.96;Ot=K>.03&&K<.26||x,$=Mt.yaw+(x?0:Math.PI)+.13*Math.sin(rt*1.15+O.phase)}else({x:Y,z:j}=Mt.seller),$=Mt.yaw+.14*Math.sin(rt*.77+O.phase)}else if(O.cart){let Mt=O.cart.root;$=Mt.rotation.y,Y=Mt.position.x-Math.sin($)*1.93,j=Mt.position.z-Math.cos($)*1.93}else if(O.walking){[Y,j,$]=bg(O.route,O.started+rt*O.speed);let Mt=O.delivery?.095:Math.sin(O.phase)*.58;if(O.delivery&&(O.payload=(O.started+rt*O.speed)%O.route.length<O.route.length*.5?1:0),Y+=Math.cos($)*Mt,j-=Math.sin($)*Mt,O.p===0||O.p===3)for(let{root:kt}of a){let F=Y-kt.position.x,b=j-kt.position.z;if(Math.abs(F)>4.5||Math.abs(b)>4.5)continue;let K=Math.cos(kt.rotation.y),ht=-Math.sin(kt.rotation.y),xt=F*K+b*ht,_=-F*ht+b*K,C=(1-jt.smoothstep(Math.abs(_),1.2,4.2))*(1-jt.smoothstep(Math.abs(xt),.25,1.13))*.82*(xt>=0?1:-1),x=Y+K*C,E=j+ht*C;t.walkHeight(x,E)!==null&&!t.isObstacle(x,E,.15)&&(Y=x,j=E)}}else({x:Y,z:j}=O),$=(O.seated?Math.PI:O.phase)+.15*Math.sin(rt*.64+O.phase);if(q=t.walkHeight(Y,j)??Me(Y,j),O.post&&(q=O.post.position.y),O.boat){let Mt=O.boat.root;Y=Mt.position.x-O.boat.route*O.boat.length*.35,j=Mt.position.z,q=Mt.position.y+.82,$=O.boat.route>0?Math.PI/2:-Math.PI/2}O.mount&&(q=O.mount.root.position.y+1.06+O.mount.bob),ft=Math.cos($),tt=Math.sin($);let Ft=rt*(4.1+O.speed*.97)+O.phase,Ut=Ot?Math.sin(Ft):0,gt=O.seated?-.43+.012*Math.sin(rt*2.4+O.phase):Ot?.026*Math.cos(Ft*2):.012*Math.sin(rt*2.4+O.phase)-H*(O.buyer?.065:.025),[Wt,wt]=[O.shade,O.faces],Gt=O.seated?.38:O.style===1?.79:.63;pt("hem",0,.96-Gt/2+gt,0,O.style===1?.263:.218,Gt,.177,Wt),pt("top",0,1.17+gt,0,.239,.46,.133,Wt,.05),pt("belt",0,.962+gt,0,.173,.062,.151,Pt),pt("neck",0,1.416+gt,.007,.06,.111,.058,wt),pt("head",0,1.548+gt,.012,.101,.122,.096,wt);for(let Mt of[-1,1])pt("ears",Mt*.101,1.542+gt,.018,.021,.035,.02,wt),pt("eyes",Mt*.044,1.568+gt,.102,.012,.009,.006,Pt);if(pt("nose",0,1.54+gt,.108,.032,.027,.028,wt),O.guard){pt("helmet",0,1.625+gt,0,.141,.153,.138,Ht),pt("helmetRim",0,1.622+gt,.009,.146,.025,.143,lt),pt("armouredCoat",0,1.174+gt,0,.252,.366,.157,lt);for(let Mt=0;Mt<4;Mt++){let kt=.85+gt+Mt*.116;pt("armourBand",0,kt,0,.233+Mt*.006,.034,.158,Mt%2?Ht:lt)}yt("pole",[.309,.11+gt,.255],[.309,2.041+gt,.255],.022,Yt),pt("spearHead",.309,2.132+gt,.255,.049,.14,.027,Ht)}else pt("hat",0,1.635+gt,.003,.108,.075,.104,Pt),O.style===1&&pt("hair",0,1.67+gt,-.082,.061,.075,.067,Pt);for(let Mt of[-1,1]){let kt=Ut*Mt,F=.067+Math.max(0,-kt)*.095;O.mount?(yt("calves",[Mt*.14,.53,-.01],[Mt*.39,.21,.16],.092,Wt),yt("calves",[Mt*.39,.21,.16],[Mt*.37,-.185,.02],.06,Wt),pt("feet",Mt*.37,-.2,.072,.074,.063,.116,Pt)):(yt("calves",[Mt*.081,.58,-kt*.016],[Mt*.079,F+.055,kt*.16],.067,Wt),pt("feet",Mt*.079,F,kt*.16+.035,.075,.058,.117,Pt)),O.guard&&(pt("chinGuard",Mt*.121,1.568+gt,-.036,.03,.127,.119,lt),pt("pauldron",Mt*.24,1.339+gt,0,.107,.091,.159,Ht,.13));let b=O.guard&&Mt===1?[.309,1.12+gt,.255]:O.mount?[Mt*.155,.61,.43]:O.stand&&!Ot?[Mt*.16,.87+gt+H*.27,.245+H*(Mt>0?.26:.09)]:O.seated?[Mt*.14,.51+.021*Math.sin(rt+O.phase),.31]:O.cart?[Mt*.22,.68+gt,.27]:O.payload===2&&Mt===1?[Mt*.17,1.43+gt,.12]:[Mt*(O.style===1?.191:.252),.854+gt,-kt*.129+.038];yt("arms",[Mt*.208,1.34+gt,.005],b,.092,Wt),pt("hand",...b,.052,.064,.049,wt),Zt&&Mt===1&&pt("parcel",b[0],b[1]+.06,b[2]+.019,.077,.086,.077,ut[O.stand.goods]),yt("collar",[Mt*.105,1.396+gt,.087],[-Mt*.036,1.216+gt,.123],.021,Lt)}if(O.payload===1&&pt("parcel",.229,.9+gt,.17,.181,.147,.117,Yt),O.payload===2){yt("pole",[-.61,1.436+gt,0],[.61,1.427+gt,0],.027,Yt);for(let Mt of[-1,1]){let kt=Mt*.55+Ut*.018;yt("rope",[Mt*.55,1.42+gt,0],[kt,1+gt,.013],.014,Yt),pt("basket",kt,.92+gt,.013,.167,.23,.158,Yt)}}}for(let Ot of p.values())Ot.model.count=Ot.used,Ot.model.instanceMatrix.needsUpdate=!0,Ot.model.instanceColor&&(Ot.model.instanceColor.needsUpdate=!0)}return{update:Bt,count:c.length}}function Eg(i,t){return[[-40,18,-17,21],[5,-24,89,-25],[111,-25,154,-26],[60,-23,20,-23]].map(([e,n,s,r],o)=>{let a=new Ne,l=[];Pe(Rn,t.timber,a,0,.64,.17,1.13,.14,1.62);for(let c of[-1,1]){Pe(Rn,t.oldwood,a,c*.51,.86,.6,.09,.32,.86),Pe(Rn,t.beam,a,c*.25,.59,-.96,.09,.081,1.67);let u=new Ne;u.position.set(c*.65,.43,.34),a.add(u),Pe(Uc,t.beam,u,0,0,0,.43,.43,.43).rotation.y=Math.PI/2,Pe(zn,t.timber,u,0,0,0,.136,.16,.136).rotation.z=Math.PI/2;for(let h=0;h<8;h++){let d=h*fi/8;In(u,t.oldwood,fe(0,0,0),fe(0,.42*Math.cos(d),.42*Math.sin(d)),.026)}l.push(u)}for(let c=0;c<5;c++)Pe(_n,t.straw,a,(c%2-.5)*.49,.92+Math.floor(c/4)*.37,.16+c%3*.21,.37,.29,.41);return l.forEach(c=>Bi(c)),Bi(a),i.add(a),{root:a,wheels:l,a:e,b:n,c:s,d:r,phase:o*.29,index:o}})}function Ag(i,t){let e=t.materials,n=[[8,-25.1],[28,-25.7],[58,-25.55],[90,-25.72],[124,-25.8],[153,-26],[157,-24.9],[151,-23.7],[116,-23.7],[85,-23.35],[54,-23.55],[24,-23.45],[11,-23.45]],s=[[-139,24.5],[-123,24.2],[-105,20.2],[-85,19.46],[-77,17.65],[-71,17.65],[-62,18.4],[-54,18.1],[-56,21.3],[-79,22.15],[-95,21.6],[-107,21],[-127,26.5],[-138,27]],r=[8607549,6707539,10053954],o=[9981241,4353124,10515523],a=[n,n,s],l=new Z,c=new Z,u=new Z,h=(d,p,g)=>{u.subVectors(g,p),d.position.copy(p).lerp(g,.5),d.scale.y=u.length(),d.quaternion.setFromUnitVectors(Dc,u.normalize())};return a.map((d,p)=>{let g=new as(d.map(([Y,q])=>fe(Y,0,q)),!0,"centripetal"),v=g.getLength(),m=[2.18,1.86,2.38][p],f=[27,166,31][p],w=new Ne,A=new Ne,T=new Ne;w.add(A),i.add(w);let P=new En({color:r[p],roughness:.91}),N=new En({color:p===1?8747376:5718839,roughness:.88}),U=new En({color:3090206,roughness:.94}),B=e.sage.clone();B.color.setHex(o[p]);let y=(Y,q,j,$,ft,tt,mt,pt=0,yt=A)=>{let Lt=Pe(_n,Y,yt,q,j,$,ft,tt,mt);return Lt.rotation.x=pt,Lt};y(P,0,1.08,-.06,.3,.324,.75),y(P,0,1.04,-.55,.275,.337,.328),y(P,0,1.13,.52,.252,.356,.31),y(P,0,1.47,.7,.175,.434,.239,.52),y(P,0,1.68,.88,.131,.275,.162,.55),y(P,0,1.775,1.015,.155,.162,.261,.54),y(N,0,1.603,1.275,.121,.107,.188,.45),y(U,0,1.84,.912,.077,.134,.159,.37);for(let Y of[-1,1]){y(P,Y*.079,1.986,.986,.036,.138,.051,.24),y(U,Y*.078,2.008,1.014,.022,.075,.025,.21),y(U,Y*.124,1.777,1.101,.024,.025,.03),y(U,Y*.084,1.621,1.411,.029,.019,.021),y(B,Y*.267,1.208,-.125,.058,.195,.367),y(e.beam,Y*.299,1.06,-.138,.022,.28,.062),In(A,e.beam,fe(Y*.096,1.638,1.25),fe(Y*.156,1.69,.42),.012),In(A,e.beam,fe(Y*.106,1.672,1.25),fe(Y*.139,1.86,.981),.016);let q=Pe(Uc,e.iron,A,Y*.36,.864,.082,.088,.112,.065);q.rotation.y=Math.PI/2}y(B,0,1.383,-.112,.284,.105,.393),y(e.beam,0,1.476,-.083,.214,.104,.271),y(e.timber,0,1.507,.144,.183,.09,.044),y(e.timber,0,1.505,-.304,.183,.09,.054);for(let Y=0;Y<9;Y++)y(U,0,1.87-Y*.064,.815-Y*.042,.056,.104,.082,.4);T.position.set(0,1.28,-.77),A.add(T),y(U,0,-.15,-.114,.06,.24,.061,.64,T),y(U,0,-.37,-.287,.074,.252,.069,.37,T),y(U,0,-.547,-.377,.059,.183,.052,.43,T),Bi(A),Bi(T);let M=[];for(let Y of[!0,!1])for(let q of[-1,1]){let j=q*.183,$=Y?.507:-.535,ft=fe(j,Y?1.076:1.065,$),tt=fe(j,.544,$),mt=fe(j,.105,$),pt=In(w,P,ft,tt,Y?.096:.125,la),yt=In(w,P,tt,mt,Y?.057:.065,Ph),Lt=y(U,j,.073,$,.064,.072,.108,0,w);M.push({front:Y,x:j,z:$,hip:ft,knee:tt,hoof:mt,thigh:pt,calf:yt,foot:Lt,phase:(Y?0:Math.PI)+q*Math.PI*.5})}let k={root:w,bob:0,update:O};function O(Y){let q=(Y*m+f)%v;g.getPointAt(q/v,c),g.getTangentAt(q/v,l);let{x:j,z:$}=c;w.position.set(j,t.walkHeight(j,$)??Me(j,$),$),w.rotation.y=Math.atan2(l.x,l.z);let ft=Y*m*4.1+p;k.bob=.027*Math.cos(ft*2),A.position.y=k.bob,T.rotation.y=Math.sin(ft*.52)*.31;for(let tt of M){let mt=ft+tt.phase,pt=Math.sin(mt),yt=Math.max(0,Math.cos(mt));tt.hip.y=(tt.front?1.076:1.065)+k.bob,tt.knee.set(tt.x,.51+yt*.17,tt.z+pt*.147+(tt.front?-.13:.13)*yt),tt.hoof.set(tt.x,.128+yt*.2,tt.z+pt*.258),h(tt.thigh,tt.hip,tt.knee),h(tt.calf,tt.knee,tt.hoof),tt.foot.position.set(tt.x,tt.hoof.y-.055,tt.hoof.z+.027),tt.foot.rotation.x=-yt*.42}}return k})}function Lh(i,t,e){let n=ys(1973),s=yg(i,t.materials,n),r=Eg(i,t.materials),o=Ag(i,t),a=wg(i,t,t.materials,n,e,s,r,o);function l(c,u){for(let h of s){let{root:d,mast:p,wake:g,oar:v,rudder:m,length:f,phase:w,route:A,docked:T}=h,P=T?h.start:((h.start+183+c*h.speed*A)%374+374)%374-183,N=qe(P),U=Math.sin(c*.22+w)*.22,B=N+h.lane+(T?U*.5:U+Math.sin(P*.076+w)*.39),y=.063*Math.sin(c*1.1+w)+.026*Math.cos(c*1.63+w),M=qe(P+1)-N,k=(A>0?0:Math.PI)-Math.atan(M)*.91;d.position.set(P,ur-.02+y,B),d.rotation.set(Math.sin(c*1.3+w)*.034,k,Math.sin(c*.79+w)*.021,"YXZ");let O=Math.abs(P-Oe),Y=1-jt.smoothstep(O,8.5+f*.24,21);T||(p.rotation.z=-A*Y*1.48),v.rotation.y=Math.sin(c*1.7+w)*.25,v.rotation.z=.09*Math.cos(c*1.7+w),m.rotation.y=.12*Math.sin(c*.49+w),g.position.x=P,g.position.z=B,g.rotation.y=k,g.visible=!T,g.userData.time.value=c}for(let h of r){let{root:d,wheels:p,a:g,b:v,c:m,d:f,phase:w,index:A}=h,T=Math.hypot(m-g,f-v),P=(c*(1+A*.05)/T+w)%2,N=P<1,U=N?P:2-P,B=jt.lerp(g,m,U),y=jt.lerp(v,f,U);d.position.set(B,t.walkHeight(B,y)??Me(B,y),y),d.rotation.y=Math.atan2(m-g,f-v)+(N?0:Math.PI),p.forEach(M=>M.rotation.x=c*2.3)}for(let h of o)h.update(c);a.update(c,u)}return{update:l,boats:s,carts:r,mounts:o,headcount:a.count}}var ha=class extends me{constructor(t,e={}){super(t),this.isWater=!0;let n=this,s=e.textureWidth!==void 0?e.textureWidth:512,r=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,u=e.sunDirection!==void 0?e.sunDirection:new Z(.70707,.70707,0),h=new At(e.sunColor!==void 0?e.sunColor:16777215),d=new At(e.waterColor!==void 0?e.waterColor:8355711),p=e.eye!==void 0?e.eye:new Z(0,0,0),g=e.distortionScale!==void 0?e.distortionScale:20,v=e.side!==void 0?e.side:bn,m=e.fog!==void 0?e.fog:!1,f=new dn,w=new Z,A=new Z,T=new Z,P=new he,N=new Z(0,0,-1),U=new ge,B=new Z,y=new Z,M=new ge,k=new he,O=new ke,Y=new fn(s,r),q={name:"MirrorShader",uniforms:cr.merge([Et.fog,Et.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new he},sunColor:{value:new At(8355711)},sunDirection:{value:new Z(.70707,.70707,0)},eye:{value:new Z},waterColor:{value:new At(5592405)}}]),vertexShader:`
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
				}`},j=new Ve({name:q.name,uniforms:cr.clone(q.uniforms),vertexShader:q.vertexShader,fragmentShader:q.fragmentShader,lights:!0,side:v,fog:m});j.uniforms.mirrorSampler.value=Y.texture,j.uniforms.textureMatrix.value=k,j.uniforms.alpha.value=a,j.uniforms.time.value=l,j.uniforms.normalSampler.value=c,j.uniforms.sunColor.value=h,j.uniforms.waterColor.value=d,j.uniforms.sunDirection.value=u,j.uniforms.distortionScale.value=g,j.uniforms.eye.value=p,n.material=j,n.onBeforeRender=function($,ft,tt){if(A.setFromMatrixPosition(n.matrixWorld),T.setFromMatrixPosition(tt.matrixWorld),P.extractRotation(n.matrixWorld),w.set(0,0,1),w.applyMatrix4(P),B.subVectors(A,T),B.dot(w)>0)return;B.reflect(w).negate(),B.add(A),P.extractRotation(tt.matrixWorld),N.set(0,0,-1),N.applyMatrix4(P),N.add(T),y.subVectors(A,N),y.reflect(w).negate(),y.add(A),O.position.copy(B),O.up.set(0,1,0),O.up.applyMatrix4(P),O.up.reflect(w),O.lookAt(y),O.far=tt.far,O.updateMatrixWorld(),O.projectionMatrix.copy(tt.projectionMatrix),k.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),k.multiply(O.projectionMatrix),k.multiply(O.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(w,A),f.applyMatrix4(O.matrixWorldInverse),U.set(f.normal.x,f.normal.y,f.normal.z,f.constant);let mt=O.projectionMatrix;M.x=(Math.sign(U.x)+mt.elements[8])/mt.elements[0],M.y=(Math.sign(U.y)+mt.elements[9])/mt.elements[5],M.z=-1,M.w=(1+mt.elements[10])/mt.elements[14],U.multiplyScalar(2/U.dot(M)),mt.elements[2]=U.x,mt.elements[6]=U.y,mt.elements[10]=U.z+1-o,mt.elements[14]=U.w,p.setFromMatrixPosition(tt.matrixWorld);let pt=$.getRenderTarget(),yt=$.xr.enabled,Lt=$.shadowMap.autoUpdate;n.visible=!1,$.xr.enabled=!1,$.shadowMap.autoUpdate=!1,$.setRenderTarget(Y),$.state.buffers.depth.setMask(!0),$.autoClear===!1&&$.clear(),$.render(ft,O),n.visible=!0,$.xr.enabled=yt,$.shadowMap.autoUpdate=Lt,$.setRenderTarget(pt);let Pt=tt.viewport;Pt!==void 0&&$.state.viewport(Pt)}}};function Dh(i,t,e,n){let s=new Z,r=new At(7714013),o=new At(13229016),a=new me(new ci(255,36,22),new Ve({side:He,depthWrite:!1,fog:!1,uniforms:{sunVector:{value:s},skyTop:{value:r},skyHorizon:{value:o},clock:{value:0}},vertexShader:`
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
    `}));a.renderOrder=-10,a.frustumCulled=!1,i.add(a),i.fog=new Gs(13950673,.0052);let l=new js(14741495,10126689,1.82),c=new tr(16769706,2.68);c.castShadow=!0;let u=n?51:63;c.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(c.shadow.camera,{left:-u,right:u,top:u,bottom:-u,near:8,far:208}),c.shadow.camera.updateProjectionMatrix(),c.shadow.normalBias=.035,c.shadow.bias=-22e-5,c.shadow.radius=2,i.add(l,c,c.target);let h=new ha(new pn(543,65),{textureWidth:n?320:768,textureHeight:n?240:480,waterNormals:e.waterNormal,sunDirection:s,sunColor:16573366,waterColor:6387024,distortionScale:2.85,clipBias:.018,fog:!0});h.rotation.x=-Math.PI/2,h.position.set(4,ur,0),h.material.uniforms.size.value=1.55,h.material.fragmentShader=h.material.fragmentShader.replace("float rf0 = 0.3;","float rf0 = 0.17;").replace("vec3 outgoingLight = albedo;","vec3 outgoingLight = albedo * ( .93 + .11 * sin(worldPosition.x * 6.4 + sin(worldPosition.z * 2.2) + time * 2.9) * sin(worldPosition.z * 7.0 + sin(worldPosition.x * 3.0) - time) );"),h.receiveShadow=!0,i.add(h);let d=h.onBeforeRender,p=0,g=new Z(999,0,0),v=new Je;h.onBeforeRender=function(...q){let j=q[2];(p++%(n?4:3)===0||g.distanceToSquared(j.position)>1.1||Math.abs(v.dot(j.quaternion))<.9996)&&(g.copy(j.position),v.copy(j.quaternion),d.apply(this,q))};let m=[[-89,4.5,27],[70,5.2,-34],[133,3.7,-54],[57,4.2,-37]],f=m.length*7,w=new Float32Array(f*3),A=new Float32Array(f),T=new Float32Array(f),P=new Te;P.setAttribute("position",new Ae(w,3).setUsage(Pi)),P.setAttribute("size",new Ae(A,1).setUsage(Pi)),P.setAttribute("fade",new Ae(T,1).setUsage(Pi));let N=new Xs(P,new Ve({transparent:!0,depthWrite:!1,vertexShader:`
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
    `}));N.frustumCulled=!1,i.add(N);let U=[],B=new wi({color:3817010,side:we,fog:!0}),y=new Te;y.setAttribute("position",new ae([0,0,.15,.43,.025,-.022,.12,0,-.13,0,0,.15,.12,0,-.13,0,0,-.098],3));for(let q=0;q<(n?7:11);q++){let j=new Ne,$=new me(y,B),ft=new me(y,B);ft.scale.x=-1,j.add(ft,$),i.add(j),U.push({group:j,left:ft,right:$})}let M="",k="",O=new Z;function Y(q,j,$,ft){a.position.copy($.position),a.material.uniforms.clock.value=q;let mt=jt.clamp((j-8.1)/8.8,0,1),pt=Math.sin(Math.PI*(.2+mt*.59)),yt=.36+mt*2.12;s.set(Math.cos(yt)*(.79+mt*.15),.46+pt*.81,Math.sin(yt)).normalize();let Lt=Math.round(j*45).toString();if(Lt!==k&&(c.color.setHSL(.106,.58+(1-pt)*.09,.83+(pt-.5)*.07),c.intensity=2.3+pt*.59,l.intensity=1.48+pt*.28,r.setRGB(.105+pt*.033,.312+pt*.085,.62+pt*.1),o.setRGB(.51+(1-pt)*.09,.655,.745),i.fog.color.setRGB(.62,.73,.76),k=Lt),ft%4===0||ft===1){let Pt=$.getWorldDirection(O),Yt=Math.round(($.position.x+Pt.x*24)/8)*8,Ht=Math.round(($.position.z+Pt.z*24)/8)*8,lt=Yt+"/"+Ht+"/"+Lt,ut=lt!==M;ut&&(c.target.position.set(Yt,0,Ht),c.position.copy(c.target.position).addScaledVector(s,86),M=lt),(ut||ft%(n?12:8)===0)&&(t.shadowMap.needsUpdate=!0)}h.material.uniforms.time.value=q*.77;for(let Pt=0;Pt<f;Pt++){let[Yt,Ht,lt]=m[Math.floor(Pt/7)],ut=(q*.17+Pt%7/7)%1;w[Pt*3]=Yt+ut*3.6+.37*Math.sin(Pt+ut*6),w[Pt*3+1]=Ht+ut*5.13,w[Pt*3+2]=lt+Math.sin(ut*3+Pt)*(.25+ut*.7)+ut*.6,A[Pt]=.41+ut*2.1,T[Pt]=Math.sin(ut*Math.PI)*.13*(1-ut*.65)}for(let Pt of["position","size","fade"])P.attributes[Pt].needsUpdate=!0;for(let Pt=0;Pt<U.length;Pt++){let{group:Yt,left:Ht,right:lt}=U[Pt],ut=q*.054+Pt*.045,St=Pt%4*.91,Bt=-14+Math.sin(ut)*46+St*2,rt=-5+Math.cos(ut)*20+St;Yt.position.set(Bt,17.6+Math.sin(ut*1.6+Pt*.14)*2.2+St*.38,rt),Yt.rotation.y=Math.atan2(Math.cos(ut)*46,-Math.sin(ut)*20);let Ct=Math.sin(q*6.7+Pt*.77)*.67;Ht.rotation.z=Ct,lt.rotation.z=-Ct}}return{update:Y,river:h}}function Uh(i,t){let e,n=!0,s=0,r=new AbortController,o={field:[390,.1,.016,.046],river:[490,.17,.025,.026],dock:[590,.14,.062,.018],market:[780,.068,.126,.013],shop:[570,.046,.1,.005],lane:[510,.071,.044,.033]};function a(){let p=new AudioContext,g=p.createBuffer(1,p.sampleRate*9,p.sampleRate),v=g.getChannelData(0),m=0;for(let A=0;A<v.length;A++)m=m*.83+(Math.random()*2-1)*.15,v[A]=m;let f=p.createGain();f.gain.value=0,f.connect(p.destination);function w(A,T,P){let N=p.createBufferSource(),U=p.createBiquadFilter(),B=p.createGain();return N.buffer=g,N.loop=!0,N.playbackRate.value=P,U.type=A,U.frequency.value=T,B.gain.value=0,N.connect(U).connect(B).connect(f),N.start(Math.random()*1.2),{filter:U,gain:B}}return{audio:p,noise:g,output:f,wind:w("lowpass",510,1.22),crowd:w("bandpass",590,1.47)}}function l(){i.setAttribute("aria-pressed",String(n)),i.setAttribute("aria-label",n?"\u5173\u95ED\u73AF\u5883\u97F3":"\u5F00\u542F\u73AF\u5883\u97F3"),t.textContent=n?e?.audio.state==="running"?"\u73AF\u5883\u97F3\u5DF2\u5F00":"\u73AF\u5883\u97F3\u5F85\u64AD\u653E":"\u73AF\u5883\u97F3"}async function c(){if(n)try{e??=a(),e.output.gain.setTargetAtTime(.72,e.audio.currentTime,.12),await e.audio.resume(),e.audio.state==="running"&&r.abort(),l()}catch{l()}}for(let p of["pointerdown","pointerup","touchend","keydown","click"])window.addEventListener(p,g=>{!g.isTrusted||i.contains(g.target)||p==="pointerdown"&&g.pointerType!=="mouse"||p==="pointerup"&&g.pointerType==="mouse"||c()},{capture:!0,signal:r.signal});i.addEventListener("click",()=>{n=!n,n?c():e&&e.output.gain.setTargetAtTime(0,e.audio.currentTime,.12),l()}),l(),c();function u(p,g,v){let{audio:m,output:f}=e,w=m.createOscillator(),A=m.createGain();w.frequency.setValueAtTime(p,v),w.frequency.exponentialRampToValueAtTime(p*1.43,v+.057),A.gain.setValueAtTime(1e-4,v),A.gain.exponentialRampToValueAtTime(g,v+.024),A.gain.exponentialRampToValueAtTime(1e-4,v+.083),w.connect(A).connect(f),w.start(v),w.stop(v+.085)}let h=5.1;function d(p,g,v,m){if(!n||e?.audio.state!=="running"||document.hidden)return;let[f,w,A,T]=o[p]??o.river,{audio:P,output:N,noise:U}=e,B=P.currentTime;if(e.wind.filter.frequency.setTargetAtTime(f,B,.35),e.wind.gain.gain.setTargetAtTime(w*(.77+.15*Math.sin(B*.8)+.11*Math.cos(B*.31)),B,.4),e.crowd.gain.gain.setTargetAtTime(A*(.73+.1*Math.sin(B*2.1)+.2*Math.cos(B*.59)),B,.48),g&&B-s>.4){let y=P.createBufferSource(),M=P.createBiquadFilter(),k=P.createGain();y.buffer=U,M.type="lowpass",M.frequency.value=v?285:390,k.gain.setValueAtTime(.15,B),k.gain.exponentialRampToValueAtTime(.001,B+.16),y.connect(M).connect(k).connect(N),y.start(B,Math.random()*7,.17),s=B}if(h-=m,h<=0){let y=1390+Math.random()*520;for(let M=0;M<3;M++)u(y+M*87,T*(.4+Math.random()*.28),B+M*.14);h=6+Math.random()*9}}return{update:d}}var Rt=i=>document.getElementById(i),Pn=Rt("experience"),Ke=Rt("world"),Cg=Uh(Rt("sound"),Rt("sound-label")),mr=matchMedia("(prefers-reduced-motion: reduce)"),Rg=matchMedia("(pointer: coarse)"),Ln=Rg.matches||innerWidth<680,Ms=jt.clamp,Nc=i=>String(i).padStart(2,"0"),pi=(i,t,e)=>new Z(i,t,e),ua=[...Ie.flatMap(i=>[[i.x,i.z],...i.path])],Nh=[{stop:1,point:pi(-31,.6,-4),button:null},{stop:3,point:pi(Oe,7.5,.7),button:null},{stop:4,point:pi(28,4.5,-25.2),button:null},{stop:7,point:pi(98,11,-24),button:null}];async function Ig(){let i=new aa({canvas:Ke,antialias:!Ln,alpha:!1,powerPreference:"high-performance"}),t=new Ws,e=new ke(Ln?64:52,1,.12,340),n={value:0};i.setClearColor(12768452),i.outputColorSpace=Ce,i.toneMapping=xo,i.toneMappingExposure=1.08,i.shadowMap.enabled=!0,i.shadowMap.autoUpdate=!1,i.shadowMap.type=er;let s=Th(),r=Eh(t,s,n),o=Dh(t,i,s,Ln),a=Lh(t,r,Ln);i.compile(t,e);let l=new Set,c={id:null,x:0,y:0},u={id:null,x:0,y:0},h=pi(0,0,0),d=pi(0,0,0),p=pi(0,0,0),g=Rt("map-view"),v=Rt("map"),m=v.getContext("2d"),f=!1,w="scenic",A=0,T=-1,P=0,N=0,U=null,B=mr.matches,y=0,M=2.4,k=0,O=0,Y="",q=!1,j=null,$,ft,tt=[],mt=[],pt={area:"\u57CE\u5899\u6B65\u9053",name:"\u57CE\u95E8\u697C",note:"\u6276\u5899\u53EF\u671B\u89C1\u8857\u5E02\u4E0E\u6C74\u6CB3\u3002\u95E8\u697C\u4ECE\u5185\u5ECA\u8FDB\u5165\uFF0C\u6848\u4E0A\u94FA\u7740\u6C74\u4EAC\u6C34\u9646\u56FE\u3002"},yt,Lt={west:-155,east:174,north:-68,south:55},Pt=I=>(I-Lt.west)/(Lt.east-Lt.west),Yt=I=>(I-Lt.north)/(Lt.south-Lt.north),Ht=[];for(let I=1;I<ua.length;I++){let[S,V]=ua[I-1],[G,et]=ua[I],z=Math.hypot(G-S,et-V);for(let X=0;X<=Math.ceil(z);X++){let st=X/Math.max(1,Math.ceil(z)),_t=jt.lerp(S,G,st),dt=jt.lerp(V,et,st);if(r.walkHeight(_t,dt)===null||r.isObstacle(_t,dt,.16)){Ht.push([I,+_t.toFixed(2),+dt.toFixed(2)]);break}}}Ht.length&&console.warn("Tour route intersects scene geometry",Ht);function lt(){let I=Pn.clientWidth,S=Pn.clientHeight;e.aspect=I/S,e.fov=I<510?62:52,e.updateProjectionMatrix(),i.setPixelRatio(Math.min(devicePixelRatio,Ln?1.05:1.4)),i.setSize(I,S,!1),Rt("map-panel").hidden||K()}new ResizeObserver(lt).observe(Pn),lt();function ut(I,S,V=!1){let G=document.createElement("button");G.type="button",G.className=V?"":"route-stop";let et=document.createElement("b");return et.textContent=Nc(S+1),et.setAttribute("aria-hidden","true"),G.append(et,document.createTextNode(I.name)),G.addEventListener("click",()=>{xt(!1),gt(()=>Ft(S,!1))}),G}Ie.forEach((I,S)=>{let V=document.createElement("li"),G=ut(I,S);V.append(G),Rt("route").append(V),tt.push(G);let et=document.createElement("li"),z=ut(I,S,!0);et.append(z),Rt("map-list").append(et);let X=document.createElement("button");X.type="button",X.className="map-dot",X.title=I.name,X.setAttribute("aria-label",I.name),X.textContent=String(S+1),X.style.left=Pt(I.x)*100+"%",X.style.top=Yt(I.z)*100+"%",X.addEventListener("click",()=>z.click()),Rt("map-pins").append(X),mt.push([z,X])});for(let I of Nh){let S=document.createElement("button");S.type="button",S.className="world-label",S.textContent=Ie[I.stop].name,S.addEventListener("click",()=>gt(()=>Ft(I.stop,!1))),Rt("labels").append(S),I.button=S}function St(){if(w!=="scenic"||Ln)return;let I=Pn.clientWidth,S=Pn.clientHeight;for(let V of Nh){let G=d.copy(V.point).project(e),et=(G.x+1)/2*I,z=(1-G.y)/2*S,X=Rt("intro").getBoundingClientRect(),st=et>X.left-8&&et<X.right+32&&z>X.top-30&&z<X.bottom+12;V.button.hidden=G.z<-.92||G.z>1||et<22||et>I-94||z<92||z>S-150||st,V.button.hidden||(V.button.style.transform="translate3d("+et.toFixed(1)+"px,"+z.toFixed(1)+"px,0)")}}function Bt(I){!I||yt===I||(yt=I,Rt("place-area").textContent=I.area,Rt("place-name").textContent=I.name,Rt("place-note").textContent=I.note)}function rt(I,S=!1){T!==I&&(T=I,Bt(Ie[I]),tt.forEach((V,G)=>{let et=G===I;for(let z of[V,...mt[G]])et?z.setAttribute("aria-current","location"):z.removeAttribute("aria-current");if(et&&S){let z=Rt("route"),X=V.offsetLeft;(X<z.scrollLeft||X+V.offsetWidth>z.scrollLeft+z.clientWidth)&&z.scrollTo({left:Math.max(0,X-z.clientWidth/2+V.offsetWidth/2),behavior:mr.matches?"instant":"smooth"})}}))}function Ct(){let I=w!=="scenic";Pn.classList.toggle("walking",I),Rt("intro").hidden=I,Rt("walk-hud").hidden=!I,Rt("look-help").hidden=!I||Ln||w==="tour",Rt("joystick").hidden=!Ln||w!=="walk",Rt("take-control").hidden=Ln||w!=="walk"||typeof Ke.requestPointerLock!="function",Rt("tour").hidden=!I,Rt("tour").setAttribute("aria-pressed",String(w==="tour")),Rt("tour").firstElementChild.textContent=w==="tour"?"\u2161 \u7ED3\u675F\u6F2B\u6E38":"\u25B7 \u81EA\u52A8\u6F2B\u6E38",Rt("aim").hidden=document.pointerLockElement!==Ke,Rt("tour-status").hidden=w!=="tour"}function Ot(I,S,V){let G=I-h.x,et=S-h.y,z=V-h.z;return[Math.atan2(-G,-z),Math.atan2(et,Math.hypot(G,z))]}function H(I){let S=Ie[I];h.set(S.x,(r.walkHeight(S.x,S.z)??0)+1.61,S.z),[P,N]=Ot(...S.look),e.position.copy(h),e.rotation.set(N,P,0,"YXZ"),rt(I,!0)}function Zt(I){let S=[[Ie[I].x,Ie[I].z]],V=new Map([[0,I]]);for(let G=I;G<Ie.length-1;G++)S.push(...Ie[G].path,[Ie[G+1].x,Ie[G+1].z]),V.set(S.length-1,G+1);return{points:S,events:V,segment:0,progress:0,dwell:1.55}}function Ft(I,S){f&&(l.clear(),document.pointerLockElement&&document.exitPointerLock(),w=S?"tour":"walk",H(I),U=S?Zt(I):null,Ct(),Ke.focus({preventScroll:!0}))}function Ut(I=0){document.pointerLockElement&&document.exitPointerLock(),A=I,w="scenic",U=null,l.clear(),rt(-1),Ct(),Rt("start").focus({preventScroll:!0})}function gt(I){if(!(q||!f)){if(q=!0,mr.matches){I(),q=!1;return}Rt("fade").classList.add("in"),setTimeout(()=>{I(),Rt("fade").classList.remove("in"),q=!1},220)}}function Wt(){w==="tour"&&(w="walk",U=null,Ct())}function wt(I,S,V=.05){let G=!1,et=h.y-1.61;for(let[X,st]of[[h.x+I,h.z+S],[h.x+I,h.z],[h.x,h.z+S]]){if(Math.abs(X-h.x)+Math.abs(st-h.z)<1e-4)continue;let _t=r.walkHeight(X,st,et);if(!(_t===null||r.isObstacle(X,st,.3,et)||Math.abs(_t-et)>.73)){h.x=X,h.z=st,G=!0;break}}let z=r.walkHeight(h.x,h.z,et)??0;return h.y=jt.lerp(h.y,z+1.61,1-Math.exp(-V*17)),G}function Gt(){let I=0,S=1/0;for(let V=0;V<Ie.length;V++){let G=Ie[V],et=(G.x-h.x)**2+(G.z-h.z)**2;et<S&&(I=V,S=et)}(S<225||T<0||S<((Ie[T].x-h.x)**2+(Ie[T].z-h.z)**2)*.7)&&rt(I,!0)}function Mt(I){let S=(l.has("w")||l.has("arrowup")?1:0)-(l.has("s")||l.has("arrowdown")?1:0)+u.y,V=(l.has("d")?1:0)-(l.has("a")?1:0)+u.x;P+=((l.has("arrowleft")?1:0)-(l.has("arrowright")?1:0))*I*1.9;let G=Math.max(Math.hypot(S,V),1),et=(l.has("shift")?6.5:3.3)*I/G,z=wt((Math.cos(P)*V-Math.sin(P)*S)*et,(-Math.sin(P)*V-Math.cos(P)*S)*et,I);return e.position.copy(h),z&&!mr.matches&&(e.position.y+=Math.sin(performance.now()*.011)*.035),e.rotation.set(N,P,0,"YXZ"),Gt(),Bt(r.onGateTerrace(h.x,h.z,h.y-1.61)?pt:Ie[T]),z}function kt(I){let S=U.points[U.segment],V=U.points[U.segment+1],G;if(U.dwell>0)I=Math.min(I,U.dwell),U.dwell-=I,G=Ot(...Ie[T].look);else if(V){let X=Math.hypot(V[0]-S[0],V[1]-S[1]);U.progress=Ms(U.progress+I*5.65/Math.max(.01,X),0,1);let st=jt.lerp(S[0],V[0],U.progress),_t=jt.lerp(S[1],V[1],U.progress);h.x=st,h.z=_t;let dt=U.points[U.segment+2]??V,Tt=Ms((U.progress-.58)*1.8,0,.78),$t=jt.lerp(V[0],dt[0],Tt),qt=jt.lerp(V[1],dt[1],Tt);G=Ot($t,(r.walkHeight($t,qt)??0)+1.25,qt),U.progress===1&&(U.segment++,U.progress=0,U.events.has(U.segment)&&(rt(U.events.get(U.segment),!0),U.dwell=2.7))}else return Wt(),!1;let et=(r.walkHeight(h.x,h.z)??0)+1.67;h.y=jt.lerp(h.y,et,1-Math.exp(-I*12));let z=Math.atan2(Math.sin(G[0]-P),Math.cos(G[0]-P));return P+=z*(1-Math.exp(-I*3.4)),N=jt.lerp(N,Ms(G[1],-.4,.42),1-Math.exp(-I*4.4)),e.position.copy(h),e.rotation.set(N,P,0,"YXZ"),U.dwell===0}let F=pi(0,0,0);function b(){let I=Lc[A];e.position.set(...I.position),mr.matches||(e.position.x+=Math.sin(y*.09)*1.22,e.position.y+=Math.cos(y*.13)*.38),Ln&&A===0&&(e.position.x-=10,e.position.z-=4),e.lookAt(F.set(...I.look))}function K(){let I=g.clientWidth,S=g.clientHeight;if(!I||!S)return;let V=Math.min(2,devicePixelRatio);v.width=Math.round(I*V),v.height=Math.round(S*V),m.setTransform(V,0,0,V,0,0);let G=z=>Pt(z)*I,et=z=>Yt(z)*S;m.fillStyle="#e2d9b9",m.fillRect(0,0,I,S),m.strokeStyle="#b7ad9045",m.lineWidth=1;for(let z=0;z<I;z+=23)m.beginPath(),m.moveTo(z,0),m.lineTo(z,S),m.stroke();for(let z=0;z<S;z+=23)m.beginPath(),m.moveTo(0,z),m.lineTo(I,z),m.stroke();m.beginPath();for(let z=Lt.west;z<=Lt.east;z+=1)m.lineTo(G(z),et(qe(z)-On(z)));for(let z=Lt.east;z>=Lt.west;z-=1)m.lineTo(G(z),et(qe(z)+On(z)));m.closePath(),m.fillStyle="#819991",m.fill(),m.strokeStyle="#596c60",m.stroke();for(let z of r.obstacles)z.x1-z.x0<2.2||z.z1-z.z0<2.2||(m.fillStyle=z.x0>101&&z.x1<112?"#836f58":"#a49875",m.fillRect(G(z.x0),et(z.z0),G(z.x1)-G(z.x0),et(z.z1)-et(z.z0)));for(let{paths:z,turn:X,exit:st}of r.gateStairs){m.fillStyle="#a48b63";for(let _t of[...z,X,st])m.fillRect(G(_t.x0),et(_t.z0),G(_t.x1)-G(_t.x0),et(_t.z1)-et(_t.z0));m.strokeStyle="#65563e",m.lineWidth=1;for(let _t of z)for(let dt=_t.z0+1.2;dt<_t.z1;dt+=1.4)m.beginPath(),m.moveTo(G(_t.x0),et(dt)),m.lineTo(G(_t.x1),et(dt)),m.stroke()}m.beginPath();for(let[z,X]of ua)m.lineTo(G(z),et(X));if(m.strokeStyle="#f6ecce",m.lineWidth=4,m.stroke(),m.strokeStyle="#934f3c",m.lineWidth=1.3,m.setLineDash([4,3]),m.stroke(),m.setLineDash([]),m.font="bold "+Math.max(11,I*.021)+"px SimSun, serif",m.fillStyle="#f0e8cf",m.fillText("\u6C74\u6CB3",G(-19),et(5)),m.fillStyle="#665b46",m.fillText("\u5317 \u2191",I-34,16),w!=="scenic"){let z=G(h.x),X=et(h.z),st=-Math.sin(P),_t=-Math.cos(P);m.beginPath(),m.moveTo(z+8*st,X+8*_t),m.lineTo(z-4*st+4*_t,X-4*_t-4*st),m.lineTo(z-4*st-4*_t,X-4*_t+4*st),m.closePath(),m.fillStyle="#263d31",m.fill(),m.strokeStyle="#fff5da",m.lineWidth=1,m.stroke(),$=h.x,ft=h.z}}function ht(){document.pointerLockElement&&document.exitPointerLock(),Rt("map-panel").hidden=!1,Rt("map-button").setAttribute("aria-expanded","true"),K(),Rt("close-map").focus()}function xt(I=!0){Rt("map-panel").hidden||(Rt("map-panel").hidden=!0,Rt("map-button").setAttribute("aria-expanded","false"),I&&Rt("map-button").focus())}let _=["\u5317","\u4E1C\u5317","\u4E1C","\u4E1C\u5357","\u5357","\u897F\u5357","\u897F","\u897F\u5317"],C=["\u8FB0\u65F6","\u5DF3\u65F6","\u5348\u65F6","\u672A\u65F6","\u7533\u65F6"];function x(I){let S=Math.floor(I*60+.002),V=Math.floor(S/60),G=Nc(V)+":"+Nc(S%60);Y!==G&&(Rt("clock").textContent=G,Rt("clock").dateTime=G,Rt("period").textContent=C[Ms(Math.floor((V-7)/2),0,4)],Rt("time-range")!==document.activeElement&&(Rt("time-range").value=String(I)),Y=G),e.getWorldDirection(F);let et=(Math.round(Math.atan2(F.x,-F.z)/(Math.PI/4))+8)%8;k%12===1&&(Rt("heading-text").textContent=_[et]+" \u2191")}function E(){Pn.classList.add("ready"),Rt("start").disabled=!1,Rt("intro-tour").disabled=!1,Rt("load-status").textContent="",f=!0}function L(I){let S=O?Ms((I-O)/1e3,.001,.12):.016;O=I,k++,B||(y+=S);let V=8+((M+y*.0078)%8.75+8.75)%8.75,G=!1;w==="scenic"?b():w==="tour"?G=kt(S):Rt("map-panel").hidden&&(G=Mt(S)),(!B||k===1||p.distanceToSquared(e.position)>100)&&(n.value=y,a.update(y,e.position),p.copy(e.position)),o.update(y,V,e,k),i.render(t,e),k%5===1&&St(),k%4===1&&x(V),!Rt("map-panel").hidden&&k%10===1&&Math.hypot(h.x-$,h.z-ft)>.38&&K(),Cg.update(Ie[T]?.sound??"river",G,Math.abs(h.x-Oe)<5&&Math.abs(h.z)<21,S),f||E(),j=requestAnimationFrame(L)}Rt("start").addEventListener("click",()=>gt(()=>Ft(0,!1))),Rt("intro-tour").addEventListener("click",()=>gt(()=>Ft(0,!0))),Rt("home").addEventListener("click",()=>gt(()=>Ut())),Rt("view").addEventListener("click",()=>gt(()=>Ut(w==="scenic"?(A+1)%Lc.length:0))),Rt("tour").addEventListener("click",()=>{w==="tour"?Wt():gt(()=>Ft(T>=Ie.length-1?0:Math.max(0,T),!0))}),Rt("map-button").addEventListener("click",()=>{f&&(Rt("map-panel").hidden?ht():xt())}),Rt("close-map").addEventListener("click",()=>xt()),Rt("time-button").addEventListener("click",()=>{let I=Rt("day-panel");I.hidden=!I.hidden,Rt("time-button").setAttribute("aria-expanded",String(!I.hidden))}),Rt("time-range").addEventListener("input",I=>{M=Number(I.target.value)-8-y*.0078}),Rt("full").hidden=!document.fullscreenEnabled,Rt("full").addEventListener("click",async()=>{document.fullscreenElement?await document.exitFullscreen().catch(()=>{}):await Pn.requestFullscreen().catch(()=>{})});function D(I){B=I;let S=Rt("pause"),V=I?"\u7EE7\u7EED\u57CE\u4E2D\u52A8\u6001":"\u6682\u505C\u57CE\u4E2D\u52A8\u6001";S.title=V,S.setAttribute("aria-label",V),S.setAttribute("aria-pressed",String(I)),S.textContent=I?"\u25B7":"\u2161"}D(B),Rt("pause").addEventListener("click",()=>D(!B)),Rt("take-control").addEventListener("click",async()=>{try{await Ke.requestPointerLock()}catch{}}),document.addEventListener("pointerlockchange",()=>{Ct(),document.pointerLockElement===Ke?Ke.focus({preventScroll:!0}):l.clear()});function W(I,S,V){P-=I*V,N=Ms(N-S*V,-1.22,1.18)}Ke.addEventListener("pointerdown",I=>{w==="scenic"||I.button!==0||(Wt(),!document.pointerLockElement&&(c.id=I.pointerId,c.x=I.clientX,c.y=I.clientY,Ke.setPointerCapture(I.pointerId),Pn.classList.add("dragging")))}),Ke.addEventListener("pointermove",I=>{c.id===I.pointerId&&(W(I.clientX-c.x,I.clientY-c.y,Ln?.006:.0052),c.x=I.clientX,c.y=I.clientY)}),Ke.addEventListener("lostpointercapture",()=>{c.id=null,Pn.classList.remove("dragging")}),document.addEventListener("mousemove",I=>{document.pointerLockElement===Ke&&W(I.movementX,I.movementY,.0022)});let it=Rt("joystick");function ot(I){let S=it.getBoundingClientRect(),V=S.width/2,G=I.clientX-S.left-V,et=I.clientY-S.top-V,z=V*.67,X=Math.max(1,Math.hypot(G,et)/z);G/=X,et/=X,u.x=G/z,u.y=-et/z,Rt("stick").style.transform="translate("+G+"px,"+et+"px)"}it.addEventListener("pointerdown",I=>{u.id=I.pointerId,it.setPointerCapture(u.id),ot(I)}),it.addEventListener("pointermove",I=>{I.pointerId===u.id&&ot(I)}),it.addEventListener("lostpointercapture",()=>{u.id=null,u.x=0,u.y=0,Rt("stick").style.transform=""});let J=new Set(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"]);window.addEventListener("keydown",I=>{let S=I.key.toLowerCase();if(S==="escape"){Rt("map-panel").hidden?Rt("day-panel").hidden?w==="tour"&&Wt():Rt("time-button").click():xt();return}if(!Rt("map-panel").hidden){if(S==="tab"){let V=[...Rt("map-panel").querySelectorAll("button")],G=V[0],et=V.at(-1);I.shiftKey&&document.activeElement===G&&(I.preventDefault(),et.focus()),!I.shiftKey&&document.activeElement===et&&(I.preventDefault(),G.focus())}return}I.target.closest?.("input")||I.altKey||I.ctrlKey||I.metaKey||(S==="m"&&!I.repeat&&ht(),w!=="scenic"&&J.has(S)&&(I.preventDefault(),Wt(),l.add(S)))}),window.addEventListener("keyup",I=>l.delete(I.key.toLowerCase())),window.addEventListener("blur",()=>l.clear()),document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(j),l.clear()):(O=0,j=requestAnimationFrame(L))}),Ke.addEventListener("webglcontextlost",I=>{I.preventDefault(),cancelAnimationFrame(j),Pn.classList.remove("ready"),Ut(),Rt("load-status").textContent="\u4E09\u7EF4\u573A\u666F\u6682\u65F6\u4E2D\u65AD\uFF0C\u6B63\u5728\u7B49\u5F85\u6D4F\u89C8\u5668\u6062\u590D\u3002"}),Ke.addEventListener("webglcontextrestored",()=>{k=0,O=0,f=!1,j=requestAnimationFrame(L)}),Ke.dataset.city="three",new URLSearchParams(location.search).has("test")&&(window.cityTest={camera:e,world:r,life:a,pathProblems:Ht,stops:Ie,renderer:i,get mode(){return w},get player(){return h.toArray()},get time(){return y},get index(){return T},enter:Ft,walk:wt,aimAt(I,S,V){[P,N]=Ot(I,S,V)},advanceTour(I){for(;w==="tour"&&I>0;)kt(.05),I-=.05}}),j=requestAnimationFrame(L)}requestAnimationFrame(()=>setTimeout(()=>Ig().catch(i=>{console.error(i),Rt("load-status").textContent="\u5F53\u524D\u6D4F\u89C8\u5668\u7684 WebGL 2 \u4E09\u7EF4\u573A\u666F\u65E0\u6CD5\u542F\u52A8\u3002"}),30));})();
/*! For license information please see city3d.js.LEGAL.txt */
