(()=>{var hl=0,ja=1,ul=2;var rr=1,dl=2,zn=3,wn=0,qe=1,Ae=2,jn=0,Ti=1,Qa=2,tc=3,ec=4,fl=5,ui=100,pl=101,ml=102,gl=103,_l=104,xl=200,vl=201,yl=202,Ml=203,Wr=204,Xr=205,Sl=206,bl=207,Tl=208,wl=209,El=210,Al=211,Cl=212,Rl=213,Il=214,mo=0,go=1,_o=2,wi=3,xo=4,vo=5,yo=6,Mo=7,nc=0,Pl=1,Ll=2,Qn=0,Dl=1,Ul=2,Nl=3,So=4,Fl=5,Bl=6,Ol=7;var ic=300,Li=301,Di=302,bo=303,To=304,or=306,Ei=1e3,hi=1001,qr=1002,nn=1003,zl=1004;var ar=1005;var En=1006,wo=1007;var mi=1008;var Rn=1009,sc=1010,rc=1011,ds=1012,Eo=1013,gi=1014,In=1015,fs=1016,Ao=1017,Co=1018,ps=1020,oc=35902,ac=35899,cc=1021,lc=1022,xn=1023,is=1026,ms=1027,Ro=1028,Io=1029,hc=1030,Po=1031;var Lo=1033,cr=33776,lr=33777,hr=33778,ur=33779,Do=35840,Uo=35841,No=35842,Fo=35843,Bo=36196,Oo=37492,zo=37496,ko=37808,Vo=37809,Ho=37810,Go=37811,Wo=37812,Xo=37813,qo=37814,Yo=37815,Zo=37816,Jo=37817,$o=37818,Ko=37819,jo=37820,Qo=37821,ta=36492,ea=36494,na=36495,ia=36283,sa=36284,ra=36285,oa=36286;var Fs=2300,Yr=2301,Gr=2302,Ga=2400,Wa=2401,Xa=2402;var kl=3200,Vl=3201;var uc=0,Hl=1,ti="",Le="srgb",Ai="srgb-linear",Bs="linear",pe="srgb";var bi=7680;var qa=519,Gl=512,Wl=513,Xl=514,dc=515,ql=516,Yl=517,Zl=518,Jl=519,Ya=35044,Ui=35048;var fc="300 es",Tn=2e3,Os=2001;var Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=1234567,Us=Math.PI/180,ss=180/Math.PI;function gs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function pc(i,t){return(i%t+t)%t}function zh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function kh(i,t,e){return i!==t?(e-i)/(t-i):0}function Ns(i,t,e){return(1-e)*i+e*t}function Vh(i,t,e,n){return Ns(i,t,1-Math.exp(-e*n))}function Hh(i,t=1){return t-Math.abs(pc(i,t*2)-t)}function Gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qh(i,t){return i+Math.random()*(t-i)}function Yh(i){return i*(.5-Math.random())}function Zh(i){i!==void 0&&(kc=i);let t=kc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jh(i){return i*Us}function $h(i){return i*ss}function Kh(i){return(i&i-1)===0&&i!==0}function jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var jt={DEG2RAD:Us,RAD2DEG:ss,generateUUID:gs,clamp:ee,euclideanModulo:pc,mapLinear:zh,inverseLerp:kh,lerp:Ns,damp:Vh,pingpong:Hh,smoothstep:Gh,smootherstep:Wh,randInt:Xh,randFloat:qh,randFloatSpread:Yh,seededRandom:Zh,degToRad:Jh,radToDeg:$h,isPowerOfTwo:Kh,ceilPowerOfTwo:jh,floorPowerOfTwo:Qh,setQuaternionFromProperEuler:tu,normalize:Ke,denormalize:es},re=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],m=r[o+1],g=r[o+2],M=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=M;return}if(h!==M||l!==d||c!==m||u!==g){let p=1-a,f=l*d+c*m+u*g+h*M,E=f>=0?1:-1,R=1-f*f;if(R>Number.EPSILON){let N=Math.sqrt(R),L=Math.atan2(N,f*E);p=Math.sin(p*L)/N,a=Math.sin(a*L)/N}let b=a*E;if(l=l*p+d*b,c=c*p+m*b,u=u*p+g*b,h=h*p+M*b,p===1-a){let N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*m-c*d,t[e+1]=l*g+u*d+c*h-a*m,t[e+2]=c*g+u*m+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>h){let m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xa.copy(this).projectOnVector(t),this.sub(xa)}reflect(t){return this.sub(xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xa=new J,Vc=new je,Kt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],M=s[0],p=s[3],f=s[6],E=s[1],R=s[4],b=s[7],N=s[2],L=s[5],D=s[8];return r[0]=o*M+a*E+l*N,r[3]=o*p+a*R+l*L,r[6]=o*f+a*b+l*D,r[1]=c*M+u*E+h*N,r[4]=c*p+u*R+h*L,r[7]=c*f+u*b+h*D,r[2]=d*M+m*E+g*N,r[5]=d*p+m*R+g*L,r[8]=d*f+m*b+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,m=c*r-o*l,g=e*h+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=h*M,t[1]=(s*c-u*n)*M,t[2]=(a*n-s*o)*M,t[3]=d*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=m*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},va=new Kt;function mc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $l(){let i=zs("canvas");return i.style.display="block",i}var Hc={};function rs(i){i in Hc||(Hc[i]=!0,console.warn(i))}function Kl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Gc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eu(){let i={enabled:!0,workingColorSpace:Ai,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?Bs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ai]:{primaries:t,whitePoint:n,transfer:Bs,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}var le=eu();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hi,Zr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hi===void 0&&(Hi=zs("canvas")),Hi.width=t.width,Hi.height=t.height;let s=Hi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nu=0,os=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ya(s[o].image)):r.push(ya(s[o]))}else r=ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var iu=0,Ma=new J,Qe=class i extends Jn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=hi,s=hi,r=En,o=mi,a=xn,l=Rn,c=i.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=gs(),this.name="",this.source=new os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ei:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case qr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ei:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case qr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=ic;Qe.DEFAULT_ANISOTROPY=1;var ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],M=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,b=(m+1)/2,N=(f+1)/2,L=(u+d)/4,D=(h+M)/4,V=(g+p)/4;return R>b&&R>N?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=L/n,r=D/n):b>N?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=L/s,r=V/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=D/r,s=V/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(h-M)*(h-M)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-M)/E,this.z=(d-u)/E,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jr=class extends Jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Qe(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new os(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Jr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ks=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $r=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fn=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(t.matrixWorld),this.union(Mr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),Sr.subVectors(this.max,Cs),Gi.subVectors(t.a,Cs),Wi.subVectors(t.b,Cs),Xi.subVectors(t.c,Cs),ii.subVectors(Wi,Gi),si.subVectors(Xi,Wi),vi.subVectors(Gi,Xi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-vi.z,vi.y,ii.z,0,-ii.x,si.z,0,-si.x,vi.z,0,-vi.x,-ii.y,ii.x,0,-si.y,si.x,0,-vi.y,vi.x,0];return!Sa(e,Gi,Wi,Xi,Sr)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,Gi,Wi,Xi,Sr))?!1:(br.crossVectors(ii,si),e=[br.x,br.y,br.z],Sa(e,Gi,Wi,Xi,Sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Gn=[new J,new J,new J,new J,new J,new J,new J,new J],Mn=new J,Mr=new Fn,Gi=new J,Wi=new J,Xi=new J,ii=new J,si=new J,vi=new J,Cs=new J,Sr=new J,br=new J,yi=new J;function Sa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){yi.fromArray(i,r);let a=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=t.dot(yi),c=e.dot(yi),u=n.dot(yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var su=new Fn,Rs=new J,ba=new J,$n=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):su.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);let e=Rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(ba)),this.expandByPoint(Rs.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wn=new J,Ta=new J,Tr=new J,ri=new J,wa=new J,wr=new J,Ea=new J,Vs=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ta.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Ta);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Tr),a=ri.dot(this.direction),l=-ri.dot(Tr),c=ri.lengthSq(),u=Math.abs(1-o*o),h,d,m,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let M=1/u;h*=M,d*=M,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ta).addScaledVector(Tr,d),m}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){wa.subVectors(e,t),wr.subVectors(n,t),Ea.crossVectors(wa,wr);let o=this.direction.dot(Ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);let l=a*this.direction.dot(wr.crossVectors(ri,wr));if(l<0)return null;let c=a*this.direction.dot(wa.cross(ri));if(c<0||l+c>o)return null;let u=-a*ri.dot(Ea);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fe=class i{constructor(t,e,n,s,r,o,a,l,c,u,h,d,m,g,M,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,m,g,M,p)}set(t,e,n,s,r,o,a,l,c,u,h,d,m,g,M,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=M,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/qi.setFromMatrixColumn(t,0).length(),r=1/qi.setFromMatrixColumn(t,1).length(),o=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*u,m=o*h,g=a*u,M=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=d-M*c,e[9]=-a*l,e[2]=M-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,m=l*h,g=c*u,M=c*h;e[0]=d+M*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=M+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,m=l*h,g=c*u,M=c*h;e[0]=d-M*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=M-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,m=o*h,g=a*u,M=a*h;e[0]=l*u,e[4]=g*c-m,e[8]=d*c+M,e[1]=l*h,e[5]=M*c+d,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,m=o*c,g=a*l,M=a*c;e[0]=l*u,e[4]=M-d*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+g,e[10]=d-M*h}else if(t.order==="XZY"){let d=o*l,m=o*c,g=a*l,M=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+M,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=M*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ru,t,ou)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),oi.crossVectors(n,an),oi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),oi.crossVectors(n,an)),oi.normalize(),Er.crossVectors(an,oi),s[0]=oi.x,s[4]=Er.x,s[8]=an.x,s[1]=oi.y,s[5]=Er.y,s[9]=an.y,s[2]=oi.z,s[6]=Er.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],M=n[6],p=n[10],f=n[14],E=n[3],R=n[7],b=n[11],N=n[15],L=s[0],D=s[4],V=s[8],v=s[12],T=s[1],F=s[5],q=s[9],C=s[13],Z=s[2],et=s[6],K=s[10],nt=s[14],j=s[3],dt=s[7],_t=s[11],pt=s[15];return r[0]=o*L+a*T+l*Z+c*j,r[4]=o*D+a*F+l*et+c*dt,r[8]=o*V+a*q+l*K+c*_t,r[12]=o*v+a*C+l*nt+c*pt,r[1]=u*L+h*T+d*Z+m*j,r[5]=u*D+h*F+d*et+m*dt,r[9]=u*V+h*q+d*K+m*_t,r[13]=u*v+h*C+d*nt+m*pt,r[2]=g*L+M*T+p*Z+f*j,r[6]=g*D+M*F+p*et+f*dt,r[10]=g*V+M*q+p*K+f*_t,r[14]=g*v+M*C+p*nt+f*pt,r[3]=E*L+R*T+b*Z+N*j,r[7]=E*D+R*F+b*et+N*dt,r[11]=E*V+R*q+b*K+N*_t,r[15]=E*v+R*C+b*nt+N*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],M=t[7],p=t[11],f=t[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*m-n*l*m)+M*(+e*l*m-e*c*d+r*o*d-s*o*m+s*c*u-r*l*u)+p*(+e*c*h-e*a*m-r*o*h+n*o*m+r*a*u-n*c*u)+f*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],M=t[13],p=t[14],f=t[15],E=h*p*c-M*d*c+M*l*m-a*p*m-h*l*f+a*d*f,R=g*d*c-u*p*c-g*l*m+o*p*m+u*l*f-o*d*f,b=u*M*c-g*h*c+g*a*m-o*M*m-u*a*f+o*h*f,N=g*h*l-u*M*l-g*a*d+o*M*d+u*a*p-o*h*p,L=e*E+n*R+s*b+r*N;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/L;return t[0]=E*D,t[1]=(M*d*r-h*p*r-M*s*m+n*p*m+h*s*f-n*d*f)*D,t[2]=(a*p*r-M*l*r+M*s*c-n*p*c-a*s*f+n*l*f)*D,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*m-n*l*m)*D,t[4]=R*D,t[5]=(u*p*r-g*d*r+g*s*m-e*p*m-u*s*f+e*d*f)*D,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*f-e*l*f)*D,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*m+e*l*m)*D,t[8]=b*D,t[9]=(g*h*r-u*M*r-g*n*m+e*M*m+u*n*f-e*h*f)*D,t[10]=(o*M*r-g*a*r+g*n*c-e*M*c-o*n*f+e*a*f)*D,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*m-e*a*m)*D,t[12]=N*D,t[13]=(u*M*s-g*h*s+g*n*d-e*M*d-u*n*p+e*h*p)*D,t[14]=(g*a*s-o*M*s-g*n*l+e*M*l+o*n*p-e*a*p)*D,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,m=r*u,g=r*h,M=o*u,p=o*h,f=a*h,E=l*c,R=l*u,b=l*h,N=n.x,L=n.y,D=n.z;return s[0]=(1-(M+f))*N,s[1]=(m+b)*N,s[2]=(g-R)*N,s[3]=0,s[4]=(m-b)*L,s[5]=(1-(d+f))*L,s[6]=(p+E)*L,s[7]=0,s[8]=(g+R)*D,s[9]=(p-E)*D,s[10]=(1-(d+M))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=qi.set(s[0],s[1],s[2]).length(),o=qi.set(s[4],s[5],s[6]).length(),a=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);let c=1/r,u=1/o,h=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,e.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Tn,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),m=(n+s)/(n-s),g,M;if(l)g=r/(o-r),M=o*r/(o-r);else if(a===Tn)g=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Os)g=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Tn,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),m=-(n+s)/(n-s),g,M;if(l)g=1/(o-r),M=o/(o-r);else if(a===Tn)g=-2/(o-r),M=-(o+r)/(o-r);else if(a===Os)g=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},qi=new J,Sn=new fe,ru=new J(0,0,0),ou=new J(1,1,1),oi=new J,Er=new J,an=new J,Xc=new fe,qc=new je,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qc.setFromEuler(this),this.setFromQuaternion(qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Hs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},au=0,Yc=new J,Yi=new je,Xn=new fe,Ar=new J,Is=new J,cu=new J,lu=new je,Zc=new J(1,0,0),Jc=new J(0,1,0),$c=new J(0,0,1),Kc={type:"added"},hu={type:"removed"},Zi={type:"childadded",child:null},Aa={type:"childremoved",child:null},De=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new J,e=new An,n=new je,s=new J(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Kt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Zc,t)}rotateY(t){return this.rotateOnAxis(Jc,t)}rotateZ(t){return this.rotateOnAxis($c,t)}translateOnAxis(t,e){return Yc.copy(t).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zc,t)}translateY(t){return this.translateOnAxis(Jc,t)}translateZ(t){return this.translateOnAxis($c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ar.copy(t):Ar.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Is,Ar,this.up):Xn.lookAt(Ar,Is,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Xn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kc),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hu),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kc),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new J(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new J,qn=new J,Ca=new J,Yn=new J,Ji=new J,$i=new J,jc=new J,Ra=new J,Ia=new J,Pa=new J,La=new ve,Da=new ve,Ua=new ve,li=class i{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),qn.subVectors(n,e),Ca.subVectors(t,e);let o=bn.dot(bn),a=bn.dot(qn),l=bn.dot(Ca),c=qn.dot(qn),u=qn.dot(Ca),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return La.setScalar(0),Da.setScalar(0),Ua.setScalar(0),La.fromBufferAttribute(t,e),Da.fromBufferAttribute(t,n),Ua.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(La,r.x),o.addScaledVector(Da,r.y),o.addScaledVector(Ua,r.z),o}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),qn.subVectors(t,e),bn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),bn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ji.subVectors(s,n),$i.subVectors(r,n),Ra.subVectors(t,n);let l=Ji.dot(Ra),c=$i.dot(Ra);if(l<=0&&c<=0)return e.copy(n);Ia.subVectors(t,s);let u=Ji.dot(Ia),h=$i.dot(Ia);if(u>=0&&h<=u)return e.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ji,o);Pa.subVectors(t,r);let m=Ji.dot(Pa),g=$i.dot(Pa);if(g>=0&&m<=g)return e.copy(r);let M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector($i,a);let p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return jc.subVectors(r,s),a=(h-u)/(h-u+(m-g)),e.copy(s).addScaledVector(jc,a);let f=1/(p+M+d);return o=M*f,a=d*f,e.copy(n).addScaledVector(Ji,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=pc(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Na(o,r,t+1/3),this.g=Na(o,r,t),this.b=Na(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let n=jl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return le.workingToColorSpace(Ze.copy(this),t),Math.round(ee(Ze.r*255,0,255))*65536+Math.round(ee(Ze.g*255,0,255))*256+Math.round(ee(Ze.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Ze.copy(this),e);let n=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Le){le.workingToColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,s=Ze.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Cr);let n=Ns(ai.h,Cr.h,e),s=Ns(ai.s,Cr.s,e),r=Ns(ai.l,Cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new wt;wt.NAMES=jl;var uu=0,Kn=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Ti,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=Xr,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Xr&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ci=class extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new J,Rr=new re,du=0,Pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:du++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=es(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=es(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=es(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ya&&(t.usage=this.usage),t}};var Gs=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ws=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},fu=0,pn=new fe,Fa=new De,Ki=new J,cn=new Fn,Ps=new Fn,Ge=new J,Ee=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mc(t)?Ws:Gs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(cn.min,Ps.min),cn.expandByPoint(Ge),Ge.addVectors(cn.max,Ps.max),cn.expandByPoint(Ge)):(cn.expandByPoint(Ps.min),cn.expandByPoint(Ps.max))}cn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ge.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(t,c),Ge.add(Ki)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let V=0;V<n.count;V++)a[V]=new J,l[V]=new J;let c=new J,u=new J,h=new J,d=new re,m=new re,g=new re,M=new J,p=new J;function f(V,v,T){c.fromBufferAttribute(n,V),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),d.fromBufferAttribute(r,V),m.fromBufferAttribute(r,v),g.fromBufferAttribute(r,T),u.sub(c),h.sub(c),m.sub(d),g.sub(d);let F=1/(m.x*g.y-g.x*m.y);isFinite(F)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(F),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(F),a[V].add(M),a[v].add(M),a[T].add(M),l[V].add(p),l[v].add(p),l[T].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let V=0,v=E.length;V<v;++V){let T=E[V],F=T.start,q=T.count;for(let C=F,Z=F+q;C<Z;C+=3)f(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let R=new J,b=new J,N=new J,L=new J;function D(V){N.fromBufferAttribute(s,V),L.copy(N);let v=a[V];R.copy(v),R.sub(N.multiplyScalar(N.dot(v))).normalize(),b.crossVectors(L,v);let F=b.dot(l[V])<0?-1:1;o.setXYZW(V,R.x,R.y,R.z,F)}for(let V=0,v=E.length;V<v;++V){let T=E[V],F=T.start,q=T.count;for(let C=F,Z=F+q;C<Z;C+=3)D(t.getX(C+0)),D(t.getX(C+1)),D(t.getX(C+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new J,r=new J,o=new J,a=new J,l=new J,c=new J,u=new J,h=new J;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),M=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),m=0,g=0;for(let M=0,p=l.length;M<p;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*u;for(let f=0;f<u;f++)d[g++]=c[m++]}return new Pe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],m=t(d,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qc=new fe,Mi=new Vs,Ir=new $n,tl=new J,Pr=new J,Lr=new J,Dr=new J,Ba=new J,Ur=new J,el=new J,Nr=new J,xe=class extends De{constructor(t=new Ee,e=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Ba.fromBufferAttribute(h,t),o?Ur.addScaledVector(Ba,u):Ur.addScaledVector(Ba.sub(e),u))}e.add(Ur)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Ir.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Ir,tl)===null||Mi.origin.distanceToSquared(tl)>(t.far-t.near)**2))&&(Qc.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(Qc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){let p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),R=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,N=R;b<N;b+=3){let L=a.getX(b),D=a.getX(b+1),V=a.getX(b+2);s=Fr(this,f,t,n,c,u,h,L,D,V),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let p=g,f=M;p<f;p+=3){let E=a.getX(p),R=a.getX(p+1),b=a.getX(p+2);s=Fr(this,o,t,n,c,u,h,E,R,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){let p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),R=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,N=R;b<N;b+=3){let L=b,D=b+1,V=b+2;s=Fr(this,f,t,n,c,u,h,L,D,V),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=g,f=M;p<f;p+=3){let E=p,R=p+1,b=p+2;s=Fr(this,o,t,n,c,u,h,E,R,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function pu(i,t,e,n,s,r,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===wn,a),l===null)return null;Nr.copy(a),Nr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Nr);return c<e.near||c>e.far?null:{distance:c,point:Nr.clone(),object:i}}function Fr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Pr),i.getVertexPosition(l,Lr),i.getVertexPosition(c,Dr);let u=pu(i,t,e,n,Pr,Lr,Dr,el);if(u){let h=new J;li.getBarycoord(el,Pr,Lr,Dr,h),s&&(u.uv=li.getInterpolatedAttribute(s,a,l,c,h,new re)),r&&(u.uv1=li.getInterpolatedAttribute(r,a,l,c,h,new re)),o&&(u.normal=li.getInterpolatedAttribute(o,a,l,c,h,new J),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new J,materialIndex:0};li.getNormal(Pr,Lr,Dr,d.normal),u.face=d,u.barycoord=h}return u}var Bn=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(h,2));function g(M,p,f,E,R,b,N,L,D,V,v){let T=b/D,F=N/V,q=b/2,C=N/2,Z=L/2,et=D+1,K=V+1,nt=0,j=0,dt=new J;for(let _t=0;_t<K;_t++){let pt=_t*F-C;for(let bt=0;bt<et;bt++){let Bt=bt*T-q;dt[M]=Bt*E,dt[p]=pt*R,dt[f]=Z,c.push(dt.x,dt.y,dt.z),dt[M]=0,dt[p]=0,dt[f]=L>0?1:-1,u.push(dt.x,dt.y,dt.z),h.push(bt/D),h.push(1-_t/V),nt+=1}}for(let _t=0;_t<V;_t++)for(let pt=0;pt<D;pt++){let bt=d+pt+et*_t,Bt=d+pt+et*(_t+1),Xt=d+(pt+1)+et*(_t+1),Vt=d+(pt+1)+et*_t;l.push(bt,Bt,Vt),l.push(Bt,Xt,Vt),j+=6}a.addGroup(m,j,v),m+=j,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ni(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Je(i){let t={};for(let e=0;e<i.length;e++){let n=Ni(i[e]);for(let s in n)t[s]=n[s]}return t}function mu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var dr={clone:Ni,merge:Je},gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gu,this.fragmentShader=_u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xs=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ci=new J,nl=new re,il=new re,We=class extends Xs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,nl,il),e.subVectors(il,nl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ji=-90,Qi=1,Kr=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(ji,Qi,t,e);s.layers=this.layers,this.add(s);let r=new We(ji,Qi,t,e);r.layers=this.layers,this.add(r);let o=new We(ji,Qi,t,e);o.layers=this.layers,this.add(o);let a=new We(ji,Qi,t,e);a.layers=this.layers,this.add(a);let l=new We(ji,Qi,t,e);l.layers=this.layers,this.add(l);let c=new We(ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qs=class extends Qe{constructor(t=[],e=Li,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},jr=class extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bn(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:jn});r.uniforms.tEquirect.value=e;let o=new xe(s,r),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=En),new Kr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ze=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},xu={type:"move"},as=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let p=e.getJointPose(M,n),f=this._getHandJoint(c,M);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ys=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zs=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Qr=class extends Qe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=nn,u=nn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cs=class extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ts=new fe,sl=new fe,Br=[],rl=new Fn,vu=new fe,Ls=new xe,Ds=new $n,Ri=class extends xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),rl.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(rl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Ds.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),t.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),sl.multiplyMatrices(n,ts),Ls.matrixWorld=sl,Ls.raycast(t,Br);for(let o=0,a=Br.length;o<a;o++){let l=Br[o];l.instanceId=r,l.object=this,e.push(l)}Br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qr(new Float32Array(s*this.count),s,this.count,Ro,In));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Oa=new J,yu=new J,Mu=new Kt,mn=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Oa.subVectors(n,e).cross(yu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mu.getNormalMatrix(t),s=this.coplanarPoint(Oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Si=new $n,Su=new re(.5,.5),Or=new J,ls=class{constructor(t=new mn,e=new mn,n=new mn,s=new mn,r=new mn,o=new mn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],m=r[7],g=r[8],M=r[9],p=r[10],f=r[11],E=r[12],R=r[13],b=r[14],N=r[15];if(s[0].setComponents(c-o,m-u,f-g,N-E).normalize(),s[1].setComponents(c+o,m+u,f+g,N+E).normalize(),s[2].setComponents(c+a,m+h,f+M,N+R).normalize(),s[3].setComponents(c-a,m-h,f-M,N-R).normalize(),n)s[4].setComponents(l,d,p,b).normalize(),s[5].setComponents(c-l,m-d,f-p,N-b).normalize();else if(s[4].setComponents(c-l,m-d,f-p,N-b).normalize(),e===Tn)s[5].setComponents(c+l,m+d,f+p,N+b).normalize();else if(e===Os)s[5].setComponents(l,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){Si.center.set(0,0,0);let e=Su.distanceTo(t.center);return Si.radius=.7071067811865476+e,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Or.x=s.normal.x>0?t.max.x:t.min.x,Or.y=s.normal.y>0?t.max.y:t.min.y,Or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var to=class extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ol=new fe,Za=new Vs,zr=new $n,kr=new J,Js=class extends De{constructor(t=new Ee,e=new to){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;ol.copy(s).invert(),Za.copy(t.ray).applyMatrix4(ol);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,M=m;g<M;g++){let p=c.getX(g);kr.fromBufferAttribute(h,p),al(kr,p,l,s,t,e,this)}}else{let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=d,M=m;g<M;g++)kr.fromBufferAttribute(h,g),al(kr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function al(i,t,e,n,s,r,o){let a=Za.distanceSqToPoint(i);if(a<e){let l=new J;Za.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var On=class extends Qe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$s=class extends Qe{constructor(t,e,n=gi,s,r,o,a=nn,l=nn,c,u=is,h=1){if(u!==is&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new os(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ks=class extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ln=class i extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],m=[],g=0,M=[],p=n/2,f=0;E(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new he(h,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(m,2));function E(){let b=new J,N=new J,L=0,D=(e-t)/n;for(let V=0;V<=r;V++){let v=[],T=V/r,F=T*(e-t)+t;for(let q=0;q<=s;q++){let C=q/s,Z=C*l+a,et=Math.sin(Z),K=Math.cos(Z);N.x=F*et,N.y=-T*n+p,N.z=F*K,h.push(N.x,N.y,N.z),b.set(et,D,K).normalize(),d.push(b.x,b.y,b.z),m.push(C,1-T),v.push(g++)}M.push(v)}for(let V=0;V<s;V++)for(let v=0;v<r;v++){let T=M[v][V],F=M[v+1][V],q=M[v+1][V+1],C=M[v][V+1];(t>0||v!==0)&&(u.push(T,F,C),L+=3),(e>0||v!==r-1)&&(u.push(F,q,C),L+=3)}c.addGroup(f,L,0),f+=L}function R(b){let N=g,L=new re,D=new J,V=0,v=b===!0?t:e,T=b===!0?1:-1;for(let q=1;q<=s;q++)h.push(0,p*T,0),d.push(0,T,0),m.push(.5,.5),g++;let F=g;for(let q=0;q<=s;q++){let Z=q/s*l+a,et=Math.cos(Z),K=Math.sin(Z);D.x=v*K,D.y=p*T,D.z=v*et,h.push(D.x,D.y,D.z),d.push(0,T,0),L.x=et*.5+.5,L.y=K*.5*T+.5,m.push(L.x,L.y),g++}for(let q=0;q<s;q++){let C=N+q,Z=F+q;b===!0?u.push(Z,Z+1,C):u.push(Z+1,Z,C),V+=3}c.addGroup(f,V,b===!0?1:2),f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var js=class i extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let R=new J,b=new J,N=new J;for(let L=0;L<e.length;L+=3)m(e[L+0],R),m(e[L+1],b),m(e[L+2],N),l(R,b,N,E)}function l(E,R,b,N){let L=N+1,D=[];for(let V=0;V<=L;V++){D[V]=[];let v=E.clone().lerp(b,V/L),T=R.clone().lerp(b,V/L),F=L-V;for(let q=0;q<=F;q++)q===0&&V===L?D[V][q]=v:D[V][q]=v.clone().lerp(T,q/F)}for(let V=0;V<L;V++)for(let v=0;v<2*(L-V)-1;v++){let T=Math.floor(v/2);v%2===0?(d(D[V][T+1]),d(D[V+1][T]),d(D[V][T])):(d(D[V][T+1]),d(D[V+1][T+1]),d(D[V+1][T]))}}function c(E){let R=new J;for(let b=0;b<r.length;b+=3)R.x=r[b+0],R.y=r[b+1],R.z=r[b+2],R.normalize().multiplyScalar(E),r[b+0]=R.x,r[b+1]=R.y,r[b+2]=R.z}function u(){let E=new J;for(let R=0;R<r.length;R+=3){E.x=r[R+0],E.y=r[R+1],E.z=r[R+2];let b=p(E)/2/Math.PI+.5,N=f(E)/Math.PI+.5;o.push(b,1-N)}g(),h()}function h(){for(let E=0;E<o.length;E+=6){let R=o[E+0],b=o[E+2],N=o[E+4],L=Math.max(R,b,N),D=Math.min(R,b,N);L>.9&&D<.1&&(R<.2&&(o[E+0]+=1),b<.2&&(o[E+2]+=1),N<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function m(E,R){let b=E*3;R.x=t[b+0],R.y=t[b+1],R.z=t[b+2]}function g(){let E=new J,R=new J,b=new J,N=new J,L=new re,D=new re,V=new re;for(let v=0,T=0;v<r.length;v+=9,T+=6){E.set(r[v+0],r[v+1],r[v+2]),R.set(r[v+3],r[v+4],r[v+5]),b.set(r[v+6],r[v+7],r[v+8]),L.set(o[T+0],o[T+1]),D.set(o[T+2],o[T+3]),V.set(o[T+4],o[T+5]),N.copy(E).add(R).add(b).divideScalar(3);let F=p(N);M(L,T+0,E,F),M(D,T+2,R,F),M(V,T+4,b,F)}}function M(E,R,b,N){N<0&&E.x===1&&(o[R]=E.x-1),b.x===0&&b.z===0&&(o[R]=N/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Qs=class i extends js{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var eo=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,m=(o-u)/d;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new re:new J);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new J,s=[],r=[],o=[],a=new J,l=new fe;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new J)}r[0]=new J,o[0]=new J;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ee(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(ee(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function _c(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,m*=u,s(o,a,d,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Vr=new J,za=new _c,ka=new _c,Va=new _c,hs=class extends eo{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new J){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Vr.subVectors(s[0],s[1]).add(s[0]),c=Vr);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Vr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Vr),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),m),M=Math.pow(h.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(u),m);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),za.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,M,p),ka.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,M,p),Va.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,M,p)}else this.curveType==="catmullrom"&&(za.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ka.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Va.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(za.calc(l),ka.calc(l),Va.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new J().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var Ii=class i extends js{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},_n=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,m=[],g=[],M=[],p=[];for(let f=0;f<u;f++){let E=f*d-o;for(let R=0;R<c;R++){let b=R*h-r;g.push(b,-E,0),M.push(0,0,1),p.push(R/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){let R=E+c*f,b=E+c*(f+1),N=E+1+c*(f+1),L=E+1+c*f;m.push(R,b,L),m.push(b,N,L)}this.setIndex(m),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(M,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var di=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new J,d=new J,m=[],g=[],M=[],p=[];for(let f=0;f<=n;f++){let E=[],R=f/n,b=0;f===0&&o===0?b=.5/e:f===n&&l===Math.PI&&(b=-.5/e);for(let N=0;N<=e;N++){let L=N/e;h.x=-t*Math.cos(s+L*r)*Math.sin(o+R*a),h.y=t*Math.cos(o+R*a),h.z=t*Math.sin(s+L*r)*Math.sin(o+R*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),M.push(d.x,d.y,d.z),p.push(L+b,1-R),E.push(c++)}u.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){let R=u[f][E+1],b=u[f][E],N=u[f+1][E],L=u[f+1][E+1];(f!==0||o>0)&&m.push(R,b,L),(f!==n-1||l<Math.PI)&&m.push(b,N,L)}this.setIndex(m),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(M,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var us=class i extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new J,h=new J,d=new J;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let M=g/s*r,p=m/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(M),h.y=(t+e*Math.cos(p))*Math.sin(M),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let M=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,E=(s+1)*m+g;o.push(M,p,E),o.push(p,f,E)}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Cn=class extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var no=class extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},io=class extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Hr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function bu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},so=class extends Pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ga,endingEnd:Ga}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wa:r=t,a=2*e-n;break;case Xa:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wa:o=t,l=2*n-e;break;case Xa:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),M=g*g,p=M*g,f=-d*p+2*d*M-d*g,E=(1+d)*p+(-1.5-2*d)*M+(-.5+d)*g+1,R=(-1-m)*p+(1.5+m)*M+.5*g,b=m*p-m*M;for(let N=0;N!==a;++N)r[N]=f*o[u+N]+E*o[c+N]+R*o[l+N]+b*o[h+N];return r}},ro=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},oo=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hr(e,this.TimeBufferType),this.values=Hr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hr(t.times,Array),values:Hr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new so(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fs:e=this.InterpolantFactoryMethodDiscrete;break;case Yr:e=this.InterpolantFactoryMethodLinear;break;case Gr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Yr;case this.InterpolantFactoryMethodSmooth:return Gr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&bu(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Gr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){let M=e[h+g];if(M!==e[d+g]||M!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,d=o*n;for(let m=0;m!==n;++m)e[d+m]=e[h+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Yr;var fi=class extends hn{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Fs;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};ao.prototype.ValueTypeName="color";var co=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};co.prototype.ValueTypeName="number";var lo=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)je.slerpFlat(r,0,o,c-a,o,c,l);return r}},tr=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new lo(this.times,this.values,this.getValueSize(),t)}};tr.prototype.ValueTypeName="quaternion";tr.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends hn{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Fs;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};ho.prototype.ValueTypeName="vector";var uo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ql=new uo,fo=class{constructor(t){this.manager=t!==void 0?t:Ql,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var er=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},nr=class extends er{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ha=new fe,cl=new J,ll=new J,Ja=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;cl.setFromMatrixPosition(t.matrixWorld),e.position.copy(cl),ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ll),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ir=class extends Xs{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$a=class extends Ja{constructor(){super(new ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sr=class extends er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new $a}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var po=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xc="\\[\\]\\.:\\/",Tu=new RegExp("["+xc+"]","g"),vc="[^"+xc+"]",wu="[^"+xc.replace("\\.","")+"]",Eu=/((?:WC+[\/:])*)/.source.replace("WC",vc),Au=/(WCOD+)?/.source.replace("WCOD",wu),Cu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),Ru=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),Iu=new RegExp("^"+Eu+Au+Cu+Ru+"$"),Pu=["material","materials","bones","map"],Ka=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tu,"")}static parseTrackName(t){let e=Iu.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Ka;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pg=new Float32Array(1);function yc(i,t,e,n){let s=Lu(n);switch(e){case cc:return i*t;case Ro:return i*t/s.components*s.byteLength;case Io:return i*t/s.components*s.byteLength;case hc:return i*t*2/s.components*s.byteLength;case Po:return i*t*2/s.components*s.byteLength;case lc:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case Lo:return i*t*4/s.components*s.byteLength;case cr:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uo:case Fo:return Math.max(i,16)*Math.max(t,8)/4;case Do:case No:return Math.max(i,8)*Math.max(t,8)/2;case Bo:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ta:case ea:case na:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ia:case sa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ra:case oa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lu(i){switch(i){case Rn:case sc:return{byteLength:1,components:1};case ds:case rc:case fs:return{byteLength:2,components:1};case Ao:case Co:return{byteLength:2,components:4};case gi:case Eo:case In:return{byteLength:4,components:1};case oc:case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function bh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zu(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<h.length;m++){let g=h[d],M=h[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,h[d]=M)}h.length=d+1;for(let m=0,g=h.length;m<g;m++){let M=h[m];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ku=`#ifdef USE_ALPHAHASH
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
}`,te={alphahash_fragment:ku,alphahash_pars_fragment:Vu,alphamap_fragment:Hu,alphamap_pars_fragment:Gu,alphatest_fragment:Wu,alphatest_pars_fragment:Xu,aomap_fragment:qu,aomap_pars_fragment:Yu,batching_pars_vertex:Zu,batching_vertex:Ju,begin_vertex:$u,beginnormal_vertex:Ku,bsdfs:ju,iridescence_fragment:Qu,bumpmap_pars_fragment:td,clipping_planes_fragment:ed,clipping_planes_pars_fragment:nd,clipping_planes_pars_vertex:id,clipping_planes_vertex:sd,color_fragment:rd,color_pars_fragment:od,color_pars_vertex:ad,color_vertex:cd,common:ld,cube_uv_reflection_fragment:hd,defaultnormal_vertex:ud,displacementmap_pars_vertex:dd,displacementmap_vertex:fd,emissivemap_fragment:pd,emissivemap_pars_fragment:md,colorspace_fragment:gd,colorspace_pars_fragment:_d,envmap_fragment:xd,envmap_common_pars_fragment:vd,envmap_pars_fragment:yd,envmap_pars_vertex:Md,envmap_physical_pars_fragment:Ld,envmap_vertex:Sd,fog_vertex:bd,fog_pars_vertex:Td,fog_fragment:wd,fog_pars_fragment:Ed,gradientmap_pars_fragment:Ad,lightmap_pars_fragment:Cd,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Id,lights_pars_begin:Pd,lights_toon_fragment:Dd,lights_toon_pars_fragment:Ud,lights_phong_fragment:Nd,lights_phong_pars_fragment:Fd,lights_physical_fragment:Bd,lights_physical_pars_fragment:Od,lights_fragment_begin:zd,lights_fragment_maps:kd,lights_fragment_end:Vd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Gd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Xd,map_fragment:qd,map_pars_fragment:Yd,map_particle_fragment:Zd,map_particle_pars_fragment:Jd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Kd,morphinstance_vertex:jd,morphcolor_vertex:Qd,morphnormal_vertex:tf,morphtarget_pars_vertex:ef,morphtarget_vertex:nf,normal_fragment_begin:sf,normal_fragment_maps:rf,normal_pars_fragment:of,normal_pars_vertex:af,normal_vertex:cf,normalmap_pars_fragment:lf,clearcoat_normal_fragment_begin:hf,clearcoat_normal_fragment_maps:uf,clearcoat_pars_fragment:df,iridescence_pars_fragment:ff,opaque_fragment:pf,packing:mf,premultiplied_alpha_fragment:gf,project_vertex:_f,dithering_fragment:xf,dithering_pars_fragment:vf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:Mf,shadowmap_pars_fragment:Sf,shadowmap_pars_vertex:bf,shadowmap_vertex:Tf,shadowmask_pars_fragment:wf,skinbase_vertex:Ef,skinning_pars_vertex:Af,skinning_vertex:Cf,skinnormal_vertex:Rf,specularmap_fragment:If,specularmap_pars_fragment:Pf,tonemapping_fragment:Lf,tonemapping_pars_fragment:Df,transmission_fragment:Uf,transmission_pars_fragment:Nf,uv_pars_fragment:Ff,uv_pars_vertex:Bf,uv_vertex:Of,worldpos_vertex:zf,background_vert:kf,background_frag:Vf,backgroundCube_vert:Hf,backgroundCube_frag:Gf,cube_vert:Wf,cube_frag:Xf,depth_vert:qf,depth_frag:Yf,distanceRGBA_vert:Zf,distanceRGBA_frag:Jf,equirect_vert:$f,equirect_frag:Kf,linedashed_vert:jf,linedashed_frag:Qf,meshbasic_vert:tp,meshbasic_frag:ep,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:sp,meshmatcap_frag:rp,meshnormal_vert:op,meshnormal_frag:ap,meshphong_vert:cp,meshphong_frag:lp,meshphysical_vert:hp,meshphysical_frag:up,meshtoon_vert:dp,meshtoon_frag:fp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:_p,sprite_vert:xp,sprite_frag:vp},At={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},kn={basic:{uniforms:Je([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Je([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new wt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Je([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Je([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Je([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new wt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Je([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Je([At.points,At.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Je([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Je([At.common,At.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Je([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Je([At.sprite,At.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Je([At.common,At.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Je([At.lights,At.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};kn.physical={uniforms:Je([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var aa={r:0,b:0,g:0},Fi=new An,yp=new fe;function Mp(i,t,e,n,s,r,o){let a=new wt(0),l=r===!0?0:1,c,u,h=null,d=0,m=null;function g(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?e:t).get(b)),b}function M(R){let b=!1,N=g(R);N===null?f(a,l):N&&N.isColor&&(f(N,1),b=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(R,b){let N=g(b);N&&(N.isCubeTexture||N.mapping===or)?(u===void 0&&(u=new xe(new Bn(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Ni(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,D,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Fi.copy(b.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yp.makeRotationFromEuler(Fi)),u.material.toneMapped=le.getTransfer(N.colorSpace)!==pe,(h!==N||d!==N.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=N,d=N.version,m=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new xe(new _n(2,2),new Xe({name:"BackgroundMaterial",uniforms:Ni(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=le.getTransfer(N.colorSpace)!==pe,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(h!==N||d!==N.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=N,d=N.version,m=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function f(R,b){R.getRGB(aa,gc(i)),n.buffers.color.setClear(aa.r,aa.g,aa.b,b,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,b=1){a.set(R),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,f(a,l)},render:M,addToRenderList:p,dispose:E}}function Sp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(T,F,q,C,Z){let et=!1,K=h(C,q,F);r!==K&&(r=K,c(r.object)),et=m(T,C,q,Z),et&&g(T,C,q,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,b(T,F,q,C),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function h(T,F,q){let C=q.wireframe===!0,Z=n[T.id];Z===void 0&&(Z={},n[T.id]=Z);let et=Z[F.id];et===void 0&&(et={},Z[F.id]=et);let K=et[C];return K===void 0&&(K=d(l()),et[C]=K),K}function d(T){let F=[],q=[],C=[];for(let Z=0;Z<e;Z++)F[Z]=0,q[Z]=0,C[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:C,object:T,attributes:{},index:null}}function m(T,F,q,C){let Z=r.attributes,et=F.attributes,K=0,nt=q.getAttributes();for(let j in nt)if(nt[j].location>=0){let _t=Z[j],pt=et[j];if(pt===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(pt=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(pt=T.instanceColor)),_t===void 0||_t.attribute!==pt||pt&&_t.data!==pt.data)return!0;K++}return r.attributesNum!==K||r.index!==C}function g(T,F,q,C){let Z={},et=F.attributes,K=0,nt=q.getAttributes();for(let j in nt)if(nt[j].location>=0){let _t=et[j];_t===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(_t=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(_t=T.instanceColor));let pt={};pt.attribute=_t,_t&&_t.data&&(pt.data=_t.data),Z[j]=pt,K++}r.attributes=Z,r.attributesNum=K,r.index=C}function M(){let T=r.newAttributes;for(let F=0,q=T.length;F<q;F++)T[F]=0}function p(T){f(T,0)}function f(T,F){let q=r.newAttributes,C=r.enabledAttributes,Z=r.attributeDivisors;q[T]=1,C[T]===0&&(i.enableVertexAttribArray(T),C[T]=1),Z[T]!==F&&(i.vertexAttribDivisor(T,F),Z[T]=F)}function E(){let T=r.newAttributes,F=r.enabledAttributes;for(let q=0,C=F.length;q<C;q++)F[q]!==T[q]&&(i.disableVertexAttribArray(q),F[q]=0)}function R(T,F,q,C,Z,et,K){K===!0?i.vertexAttribIPointer(T,F,q,Z,et):i.vertexAttribPointer(T,F,q,C,Z,et)}function b(T,F,q,C){M();let Z=C.attributes,et=q.getAttributes(),K=F.defaultAttributeValues;for(let nt in et){let j=et[nt];if(j.location>=0){let dt=Z[nt];if(dt===void 0&&(nt==="instanceMatrix"&&T.instanceMatrix&&(dt=T.instanceMatrix),nt==="instanceColor"&&T.instanceColor&&(dt=T.instanceColor)),dt!==void 0){let _t=dt.normalized,pt=dt.itemSize,bt=t.get(dt);if(bt===void 0)continue;let Bt=bt.buffer,Xt=bt.type,Vt=bt.bytesPerElement,lt=Xt===i.INT||Xt===i.UNSIGNED_INT||dt.gpuType===Eo;if(dt.isInterleavedBufferAttribute){let ht=dt.data,Pt=ht.stride,Ht=dt.offset;if(ht.isInstancedInterleavedBuffer){for(let Ut=0;Ut<j.locationSize;Ut++)f(j.location+Ut,ht.meshPerAttribute);T.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ut=0;Ut<j.locationSize;Ut++)p(j.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let Ut=0;Ut<j.locationSize;Ut++)R(j.location+Ut,pt/j.locationSize,Xt,_t,Pt*Vt,(Ht+pt/j.locationSize*Ut)*Vt,lt)}else{if(dt.isInstancedBufferAttribute){for(let ht=0;ht<j.locationSize;ht++)f(j.location+ht,dt.meshPerAttribute);T.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ht=0;ht<j.locationSize;ht++)p(j.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let ht=0;ht<j.locationSize;ht++)R(j.location+ht,pt/j.locationSize,Xt,_t,pt*Vt,pt/j.locationSize*ht*Vt,lt)}}else if(K!==void 0){let _t=K[nt];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(j.location,_t);break;case 3:i.vertexAttrib3fv(j.location,_t);break;case 4:i.vertexAttrib4fv(j.location,_t);break;default:i.vertexAttrib1fv(j.location,_t)}}}}E()}function N(){V();for(let T in n){let F=n[T];for(let q in F){let C=F[q];for(let Z in C)u(C[Z].object),delete C[Z];delete F[q]}delete n[T]}}function L(T){if(n[T.id]===void 0)return;let F=n[T.id];for(let q in F){let C=F[q];for(let Z in C)u(C[Z].object),delete C[Z];delete F[q]}delete n[T.id]}function D(T){for(let F in n){let q=n[F];if(q[T.id]===void 0)continue;let C=q[T.id];for(let Z in C)u(C[Z].object),delete C[Z];delete q[T.id]}}function V(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:V,resetDefaultState:v,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:p,disableUnusedAttributes:E}}function bp(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];e.update(m,n,1)}function l(c,u,h,d){if(h===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let M=0;M<h;M++)g+=u[M]*d[M];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==xn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let V=D===fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Rn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==In&&!V)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:b,vertexTextures:N,maxSamples:L}}function wp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new mn,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){let g=h.clippingPlanes,M=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let E=r?0:n,R=E*4,b=f.clippingState||null;l.value=b,b=u(g,d,R,m);for(let N=0;N!==R;++N)b[N]=e[N];f.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,g){let M=h!==null?h.length:0,p=null;if(M!==0){if(p=l.value,g!==!0||p===null){let f=m+M*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let R=0,b=m;R!==M;++R,b+=4)o.copy(h[R]).applyMatrix4(E,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function Ep(i){let t=new WeakMap;function e(o,a){return a===bo?o.mapping=Li:a===To&&(o.mapping=Di),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===bo||a===To)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new jr(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var xs=4,th=[.125,.215,.35,.446,.526,.582],zi=20,Mc=new ir,eh=new wt,Sc=null,bc=0,Tc=0,wc=!1,Oi=(1+Math.sqrt(5))/2,_s=1/Oi,nh=[new J(-Oi,_s,0),new J(Oi,_s,0),new J(-_s,0,Oi),new J(_s,0,Oi),new J(0,Oi,-_s),new J(0,Oi,_s),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],Ap=new J,ha=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ap}=r;Sc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sc,bc,Tc),this._renderer.xr.enabled=wc,t.scissorTest=!1,ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:fs,format:xn,colorSpace:Ai,depthBuffer:!1},s=ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(r)),this._blurMaterial=Rp(r,t,e)}return s}_compileMaterial(t){let e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,Mc)}_sceneToCubeUV(t,e,n,s,r){let l=new We(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(eh),h.toneMapping=Qn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let M=new Ci({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),p=new xe(new Bn,M),f=!1,E=t.background;E?E.isColor&&(M.color.copy(E),t.background=null,f=!0):(M.color.copy(eh),f=!0);for(let R=0;R<6;R++){let b=R%3;b===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):b===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));let N=this._cubeSize;ca(s,b*N,R>2?N:0,N,N),h.setRenderTarget(s),f&&h.render(p,l),h.render(t,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=m,h.autoClear=d,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Li||t.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ca(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Mc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nh[(s-r-1)%nh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new xe(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zi-1),M=r/g,p=isFinite(r)?1+Math.floor(u*M):zi;p>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zi}`);let f=[],E=0;for(let D=0;D<zi;++D){let V=D/M,v=Math.exp(-V*V/2);f.push(v),D===0?E+=v:D<p&&(E+=2*v)}for(let D=0;D<f.length;D++)f[D]=f[D]/E;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:R}=this;d.dTheta.value=g,d.mipInt.value=R-n;let b=this._sizeLods[s],N=3*b*(s>R-xs?s-R+xs:0),L=4*(this._cubeSize-b);ca(e,N,L,3*b,2*b),l.setRenderTarget(e),l.render(h,Mc)}};function Cp(i){let t=[],e=[],n=[],s=i,r=i-xs+1+th.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-xs?l=th[o-i+xs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,M=3,p=2,f=1,E=new Float32Array(M*g*m),R=new Float32Array(p*g*m),b=new Float32Array(f*g*m);for(let L=0;L<m;L++){let D=L%3*2/3-1,V=L>2?0:-1,v=[D,V,0,D+2/3,V,0,D+2/3,V+1,0,D,V,0,D+2/3,V+1,0,D,V+1,0];E.set(v,M*g*L),R.set(d,p*g*L);let T=[L,L,L,L,L,L];b.set(T,f*g*L)}let N=new Ee;N.setAttribute("position",new Pe(E,M)),N.setAttribute("uv",new Pe(R,p)),N.setAttribute("faceIndex",new Pe(b,f)),t.push(N),s>xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ih(i,t,e){let n=new gn(i,t,e);return n.texture.mapping=or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rp(i,t,e){let n=new Float32Array(zi),s=new J(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function sh(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function rh(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function Ip(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===bo||l===To,u=l===Li||l===Di;if(c||u){let h=t.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ha(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new ha(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Pp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lp(i,t,e,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER)}function c(h){let d=[],m=h.index,g=h.attributes.position,M=0;if(m!==null){let E=m.array;M=m.version;for(let R=0,b=E.length;R<b;R+=3){let N=E[R+0],L=E[R+1],D=E[R+2];d.push(N,L,L,D,D,N)}}else if(g!==void 0){let E=g.array;M=g.version;for(let R=0,b=E.length/3-1;R<b;R+=3){let N=R+0,L=R+1,D=R+2;d.push(N,L,L,D,D,N)}}else return;let p=new(mc(d)?Ws:Gs)(d,1);p.version=M;let f=r.get(h);f&&t.remove(f),r.set(h,p)}function u(h){let d=r.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Dp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*o),e.update(m,n,1)}function c(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*o,g),e.update(m,n,g))}function u(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,n,1)}function h(d,m,g,M){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],M[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,M,0,g);let f=0;for(let E=0;E<g;E++)f+=m[E]*M[E];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Up(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Np(i,t,e){let n=new WeakMap,s=new ve;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let v=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],R=0;m===!0&&(R=1),g===!0&&(R=2),M===!0&&(R=3);let b=a.attributes.position.count*R,N=1;b>t.maxTextureSize&&(N=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let L=new Float32Array(b*N*4*h),D=new ks(L,b,N,h);D.type=In,D.needsUpdate=!0;let V=R*4;for(let T=0;T<h;T++){let F=p[T],q=f[T],C=E[T],Z=b*N*4*T;for(let et=0;et<F.count;et++){let K=et*V;m===!0&&(s.fromBufferAttribute(F,et),L[Z+K+0]=s.x,L[Z+K+1]=s.y,L[Z+K+2]=s.z,L[Z+K+3]=0),g===!0&&(s.fromBufferAttribute(q,et),L[Z+K+4]=s.x,L[Z+K+5]=s.y,L[Z+K+6]=s.z,L[Z+K+7]=0),M===!0&&(s.fromBufferAttribute(C,et),L[Z+K+8]=s.x,L[Z+K+9]=s.y,L[Z+K+10]=s.z,L[Z+K+11]=C.itemSize===4?s.w:1)}}d={count:h,texture:D,size:new re(b,N)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Fp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Th=new Qe,oh=new $s(1,1),wh=new ks,Eh=new $r,Ah=new qs,ah=[],ch=[],lh=new Float32Array(16),hh=new Float32Array(9),uh=new Float32Array(4);function ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ah[s];if(r===void 0&&(r=new Float32Array(s),ah[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function da(i,t){let e=ch[t];e===void 0&&(e=new Int32Array(t),ch[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function Vp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;uh.set(n),i.uniformMatrix2fv(this.addr,!1,uh),Ve(e,n)}}function Hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;hh.set(n),i.uniformMatrix3fv(this.addr,!1,hh),Ve(e,n)}}function Gp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;lh.set(n),i.uniformMatrix4fv(this.addr,!1,lh),Ve(e,n)}}function Wp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function Yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function Zp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function $p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function Kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oh.compareFunction=dc,r=oh):r=Th,e.setTexture2D(t||r,s)}function Qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eh,s)}function tm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ah,s)}function em(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wh,s)}function nm(i){switch(i){case 5126:return Bp;case 35664:return Op;case 35665:return zp;case 35666:return kp;case 35674:return Vp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return Zp;case 36294:return Jp;case 36295:return $p;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}function im(i,t){i.uniform1fv(this.addr,t)}function sm(i,t){let e=ys(t,this.size,2);i.uniform2fv(this.addr,e)}function rm(i,t){let e=ys(t,this.size,3);i.uniform3fv(this.addr,e)}function om(i,t){let e=ys(t,this.size,4);i.uniform4fv(this.addr,e)}function am(i,t){let e=ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cm(i,t){let e=ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lm(i,t){let e=ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hm(i,t){i.uniform1iv(this.addr,t)}function um(i,t){i.uniform2iv(this.addr,t)}function dm(i,t){i.uniform3iv(this.addr,t)}function fm(i,t){i.uniform4iv(this.addr,t)}function pm(i,t){i.uniform1uiv(this.addr,t)}function mm(i,t){i.uniform2uiv(this.addr,t)}function gm(i,t){i.uniform3uiv(this.addr,t)}function _m(i,t){i.uniform4uiv(this.addr,t)}function xm(i,t,e){let n=this.cache,s=t.length,r=da(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Th,r[o])}function vm(i,t,e){let n=this.cache,s=t.length,r=da(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Eh,r[o])}function ym(i,t,e){let n=this.cache,s=t.length,r=da(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ah,r[o])}function Mm(i,t,e){let n=this.cache,s=t.length,r=da(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wh,r[o])}function Sm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return om;case 35674:return am;case 35675:return cm;case 35676:return lm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Mm}}var Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nm(e.type)}},Cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sm(e.type)}},Rc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ec=/(\w+)(\])?(\[|\.)?/g;function dh(i,t){i.seq.push(t),i.map[t.id]=t}function bm(i,t,e){let n=i.name,s=n.length;for(Ec.lastIndex=0;;){let r=Ec.exec(n),o=Ec.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){dh(e,c===void 0?new Ac(a,i,t):new Cc(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Rc(a),dh(e,h)),e=h}}}var vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);bm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function fh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Tm=37297,wm=0;function Em(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ph=new Kt;function Am(i){le._getMatrix(ph,le.workingColorSpace,i);let t=`mat3( ${ph.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case Bs:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Em(i.getShaderSource(t),a)}else return r}function Cm(i,t){let e=Am(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rm(i,t){let e;switch(t){case Dl:e="Linear";break;case Ul:e="Reinhard";break;case Nl:e="Cineon";break;case So:e="ACESFilmic";break;case Bl:e="AgX";break;case Ol:e="Neutral";break;case Fl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var la=new J;function Im(){le.getLuminanceCoefficients(la);let i=la.x.toFixed(4),t=la.y.toFixed(4),e=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function Lm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function fr(i){return i!==""}function gh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _h(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(i){return i.replace(Um,Fm)}var Nm=new Map;function Fm(i,t){let e=te[t];if(e===void 0){let n=Nm.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ic(e)}var Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(i){return i.replace(Bm,Om)}function Om(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function zm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rr?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===dl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function km(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Di:t="ENVMAP_TYPE_CUBE";break;case or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Di:t="ENVMAP_MODE_REFRACTION";break}return t}function Hm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nc:t="ENVMAP_BLENDING_MULTIPLY";break;case Pl:t="ENVMAP_BLENDING_MIX";break;case Ll:t="ENVMAP_BLENDING_ADD";break}return t}function Gm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=zm(e),c=km(e),u=Vm(e),h=Hm(e),d=Gm(e),m=Pm(e),g=Lm(r),M=s.createProgram(),p,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),f.length>0&&(f+=`
`)):(p=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),f=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?te.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Cm("linearToOutputTexel",e.outputColorSpace),Im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),o=Ic(o),o=gh(o,e),o=_h(o,e),a=Ic(a),a=gh(a,e),a=_h(a,e),o=xh(o),a=xh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let R=E+p+o,b=E+f+a,N=fh(s,s.VERTEX_SHADER,R),L=fh(s,s.FRAGMENT_SHADER,b);s.attachShader(M,N),s.attachShader(M,L),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(F){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(M)||"",C=s.getShaderInfoLog(N)||"",Z=s.getShaderInfoLog(L)||"",et=q.trim(),K=C.trim(),nt=Z.trim(),j=!0,dt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,N,L);else{let _t=mh(s,N,"vertex"),pt=mh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+et+`
`+_t+`
`+pt)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(K===""||nt==="")&&(dt=!1);dt&&(F.diagnostics={runnable:j,programLog:et,vertexShader:{log:K,prefix:p},fragmentShader:{log:nt,prefix:f}})}s.deleteShader(N),s.deleteShader(L),V=new vs(s,M),v=Dm(s,M)}let V;this.getUniforms=function(){return V===void 0&&D(this),V};let v;this.getAttributes=function(){return v===void 0&&D(this),v};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(M,Tm)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wm++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=L,this}var Xm=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lc(t),e.set(t,n)),n}},Lc=class{constructor(t){this.id=Xm++,this.code=t,this.usedTimes=0}};function qm(i,t,e,n,s,r,o){let a=new Hs,l=new Pc,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,T,F,q,C){let Z=q.fog,et=C.geometry,K=v.isMeshStandardMaterial?q.environment:null,nt=(v.isMeshStandardMaterial?e:t).get(v.envMap||K),j=nt&&nt.mapping===or?nt.image.height:null,dt=g[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let _t=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,pt=_t!==void 0?_t.length:0,bt=0;et.morphAttributes.position!==void 0&&(bt=1),et.morphAttributes.normal!==void 0&&(bt=2),et.morphAttributes.color!==void 0&&(bt=3);let Bt,Xt,Vt,lt;if(dt){let gt=kn[dt];Bt=gt.vertexShader,Xt=gt.fragmentShader}else Bt=v.vertexShader,Xt=v.fragmentShader,l.update(v),Vt=l.getVertexShaderID(v),lt=l.getFragmentShaderID(v);let ht=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Ht=C.isInstancedMesh===!0,Ut=C.isBatchedMesh===!0,it=!!v.map,Rt=!!v.matcap,z=!!nt,zt=!!v.aoMap,Tt=!!v.lightMap,Dt=!!v.bumpMap,Et=!!v.normalMap,$t=!!v.displacementMap,Ct=!!v.emissiveMap,xt=!!v.metalnessMap,ue=!!v.roughnessMap,ne=v.anisotropy>0,k=v.clearcoat>0,_=v.dispersion>0,$=v.iridescence>0,at=v.sheen>0,ft=v.transmission>0,rt=ne&&!!v.anisotropyMap,Nt=k&&!!v.clearcoatMap,vt=k&&!!v.clearcoatNormalMap,y=k&&!!v.clearcoatRoughnessMap,A=$&&!!v.iridescenceMap,x=$&&!!v.iridescenceThicknessMap,w=at&&!!v.sheenColorMap,U=at&&!!v.sheenRoughnessMap,G=!!v.specularMap,Y=!!v.specularColorMap,I=!!v.specularIntensityMap,S=ft&&!!v.transmissionMap,B=ft&&!!v.thicknessMap,H=!!v.gradientMap,W=!!v.alphaMap,O=v.alphaTest>0,X=!!v.alphaHash,ut=!!v.extensions,st=Qn;v.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(st=i.toneMapping);let mt={shaderID:dt,shaderType:v.type,shaderName:v.name,vertexShader:Bt,fragmentShader:Xt,defines:v.defines,customVertexShaderID:Vt,customFragmentShaderID:lt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Ut,batchingColor:Ut&&C._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&C.instanceColor!==null,instancingMorph:Ht&&C.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ai,alphaToCoverage:!!v.alphaToCoverage,map:it,matcap:Rt,envMap:z,envMapMode:z&&nt.mapping,envMapCubeUVHeight:j,aoMap:zt,lightMap:Tt,bumpMap:Dt,normalMap:Et,displacementMap:d&&$t,emissiveMap:Ct,normalMapObjectSpace:Et&&v.normalMapType===Hl,normalMapTangentSpace:Et&&v.normalMapType===uc,metalnessMap:xt,roughnessMap:ue,anisotropy:ne,anisotropyMap:rt,clearcoat:k,clearcoatMap:Nt,clearcoatNormalMap:vt,clearcoatRoughnessMap:y,dispersion:_,iridescence:$,iridescenceMap:A,iridescenceThicknessMap:x,sheen:at,sheenColorMap:w,sheenRoughnessMap:U,specularMap:G,specularColorMap:Y,specularIntensityMap:I,transmission:ft,transmissionMap:S,thicknessMap:B,gradientMap:H,opaque:v.transparent===!1&&v.blending===Ti&&v.alphaToCoverage===!1,alphaMap:W,alphaTest:O,alphaHash:X,combine:v.combine,mapUv:it&&M(v.map.channel),aoMapUv:zt&&M(v.aoMap.channel),lightMapUv:Tt&&M(v.lightMap.channel),bumpMapUv:Dt&&M(v.bumpMap.channel),normalMapUv:Et&&M(v.normalMap.channel),displacementMapUv:$t&&M(v.displacementMap.channel),emissiveMapUv:Ct&&M(v.emissiveMap.channel),metalnessMapUv:xt&&M(v.metalnessMap.channel),roughnessMapUv:ue&&M(v.roughnessMap.channel),anisotropyMapUv:rt&&M(v.anisotropyMap.channel),clearcoatMapUv:Nt&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:vt&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:y&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:A&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:x&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:w&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:U&&M(v.sheenRoughnessMap.channel),specularMapUv:G&&M(v.specularMap.channel),specularColorMapUv:Y&&M(v.specularColorMap.channel),specularIntensityMapUv:I&&M(v.specularIntensityMap.channel),transmissionMapUv:S&&M(v.transmissionMap.channel),thicknessMapUv:B&&M(v.thicknessMap.channel),alphaMapUv:W&&M(v.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Et||ne),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!et.attributes.uv&&(it||W),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Pt,skinning:C.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:bt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:it&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===pe,decodeVideoTextureEmissive:Ct&&v.emissiveMap.isVideoTexture===!0&&le.getTransfer(v.emissiveMap.colorSpace)===pe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ae,flipSided:v.side===qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ut&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&v.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function f(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let F in v.defines)T.push(F),T.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(E(T,v),R(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function E(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function R(v,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){let T=g[v.type],F;if(T){let q=kn[T];F=dr.clone(q.uniforms)}else F=v.uniforms;return F}function N(v,T){let F;for(let q=0,C=u.length;q<C;q++){let Z=u[q];if(Z.cacheKey===T){F=Z,++F.usedTimes;break}}return F===void 0&&(F=new Wm(i,T,v,r),u.push(F)),F}function L(v){if(--v.usedTimes===0){let T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function D(v){l.remove(v)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:b,acquireProgram:N,releaseProgram:L,releaseShaderCache:D,programs:u,dispose:V}}function Ym(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,m,g,M,p){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:M,group:p},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=M,f.group=p),t++,f}function a(h,d,m,g,M,p){let f=o(h,d,m,g,M,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(h,d,m,g,M,p){let f=o(h,d,m,g,M,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||Zm),n.length>1&&n.sort(d||yh),s.length>1&&s.sort(d||yh)}function u(){for(let h=t,d=i.length;h<d;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Jm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Mh,i.set(n,[o])):s>=r.length?(o=new Mh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $m(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new J,color:new wt};break;case"SpotLight":e={position:new J,direction:new J,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new J,halfWidth:new J,halfHeight:new J};break}return i[t.id]=e,e}}}function Km(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jm=0;function Qm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tg(i){let t=new $m,e=Km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);let s=new J,r=new fe,o=new fe;function a(c){let u=0,h=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let m=0,g=0,M=0,p=0,f=0,E=0,R=0,b=0,N=0,L=0,D=0;c.sort(Qm);for(let v=0,T=c.length;v<T;v++){let F=c[v],q=F.color,C=F.intensity,Z=F.distance,et=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=q.r*C,h+=q.g*C,d+=q.b*C;else if(F.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(F.sh.coefficients[K],C);D++}else if(F.isDirectionalLight){let K=t.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let nt=F.shadow,j=e.get(F);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=F.shadow.matrix,E++}n.directional[m]=K,m++}else if(F.isSpotLight){let K=t.get(F);K.position.setFromMatrixPosition(F.matrixWorld),K.color.copy(q).multiplyScalar(C),K.distance=Z,K.coneCos=Math.cos(F.angle),K.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),K.decay=F.decay,n.spot[M]=K;let nt=F.shadow;if(F.map&&(n.spotLightMap[N]=F.map,N++,nt.updateMatrices(F),F.castShadow&&L++),n.spotLightMatrix[M]=nt.matrix,F.castShadow){let j=e.get(F);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=et,b++}M++}else if(F.isRectAreaLight){let K=t.get(F);K.color.copy(q).multiplyScalar(C),K.halfWidth.set(F.width*.5,0,0),K.halfHeight.set(0,F.height*.5,0),n.rectArea[p]=K,p++}else if(F.isPointLight){let K=t.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),K.distance=F.distance,K.decay=F.decay,F.castShadow){let nt=F.shadow,j=e.get(F);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,j.shadowCameraNear=nt.camera.near,j.shadowCameraFar=nt.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=F.shadow.matrix,R++}n.point[g]=K,g++}else if(F.isHemisphereLight){let K=t.get(F);K.skyColor.copy(F.color).multiplyScalar(C),K.groundColor.copy(F.groundColor).multiplyScalar(C),n.hemi[f]=K,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let V=n.hash;(V.directionalLength!==m||V.pointLength!==g||V.spotLength!==M||V.rectAreaLength!==p||V.hemiLength!==f||V.numDirectionalShadows!==E||V.numPointShadows!==R||V.numSpotShadows!==b||V.numSpotMaps!==N||V.numLightProbes!==D)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=b+N-L,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=D,V.directionalLength=m,V.pointLength=g,V.spotLength=M,V.rectAreaLength=p,V.hemiLength=f,V.numDirectionalShadows=E,V.numPointShadows=R,V.numSpotShadows=b,V.numSpotMaps=N,V.numLightProbes=D,n.version=jm++)}function l(c,u){let h=0,d=0,m=0,g=0,M=0,p=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let R=c[f];if(R.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(R.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(R.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(R.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(R.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(p),d++}else if(R.isHemisphereLight){let b=n.hemi[M];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(p),M++}}}return{setup:a,setupView:l,state:n}}function Sh(i){let t=new tg(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function eg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Sh(i),t.set(s,[a])):r>=o.length?(a=new Sh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ng=`void main() {
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
}`;function sg(i,t,e){let n=new ls,s=new re,r=new re,o=new ve,a=new no({depthPacking:Vl}),l=new io,c={},u=e.maxTextureSize,h={[wn]:qe,[qe]:wn,[Ae]:Ae},d=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new xe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rr;let f=this.type;this.render=function(L,D,V){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;let v=i.getRenderTarget(),T=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),q=i.state;q.setBlending(jn),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let C=f!==zn&&this.type===zn,Z=f===zn&&this.type!==zn;for(let et=0,K=L.length;et<K;et++){let nt=L[et],j=nt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let dt=j.getFrameExtents();if(s.multiply(dt),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/dt.x),s.x=r.x*dt.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/dt.y),s.y=r.y*dt.y,j.mapSize.y=r.y)),j.map===null||C===!0||Z===!0){let pt=this.type!==zn?{minFilter:nn,magFilter:nn}:{};j.map!==null&&j.map.dispose(),j.map=new gn(s.x,s.y,pt),j.map.texture.name=nt.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();let _t=j.getViewportCount();for(let pt=0;pt<_t;pt++){let bt=j.getViewport(pt);o.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),q.viewport(o),j.updateMatrices(nt,pt),n=j.getFrustum(),b(D,V,j.camera,nt,this.type)}j.isPointLightShadow!==!0&&this.type===zn&&E(j,V),j.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(v,T,F)};function E(L,D){let V=t.update(M);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new gn(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(D,null,V,d,M,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(D,null,V,m,M,null)}function R(L,D,V,v){let T=null,F=V.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)T=F;else if(T=V.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let q=T.uuid,C=D.uuid,Z=c[q];Z===void 0&&(Z={},c[q]=Z);let et=Z[C];et===void 0&&(et=T.clone(),Z[C]=et,D.addEventListener("dispose",N)),T=et}if(T.visible=D.visible,T.wireframe=D.wireframe,v===zn?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:h[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,V.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let q=i.properties.get(T);q.light=V}return T}function b(L,D,V,v,T){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===zn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,L.matrixWorld);let C=t.update(L),Z=L.material;if(Array.isArray(Z)){let et=C.groups;for(let K=0,nt=et.length;K<nt;K++){let j=et[K],dt=Z[j.materialIndex];if(dt&&dt.visible){let _t=R(L,dt,v,T);L.onBeforeShadow(i,L,D,V,C,_t,j),i.renderBufferDirect(V,null,C,_t,L,j),L.onAfterShadow(i,L,D,V,C,_t,j)}}}else if(Z.visible){let et=R(L,Z,v,T);L.onBeforeShadow(i,L,D,V,C,et,null),i.renderBufferDirect(V,null,C,et,L,null),L.onAfterShadow(i,L,D,V,C,et,null)}}let q=L.children;for(let C=0,Z=q.length;C<Z;C++)b(q[C],D,V,v,T)}function N(L){L.target.removeEventListener("dispose",N);for(let V in c){let v=c[V],T=L.target.uuid;T in v&&(v[T].dispose(),delete v[T])}}}var rg={[mo]:go,[_o]:yo,[xo]:Mo,[wi]:vo,[go]:mo,[yo]:_o,[Mo]:xo,[vo]:wi};function og(i,t){function e(){let S=!1,B=new ve,H=null,W=new ve(0,0,0,0);return{setMask:function(O){H!==O&&!S&&(i.colorMask(O,O,O,O),H=O)},setLocked:function(O){S=O},setClear:function(O,X,ut,st,mt){mt===!0&&(O*=st,X*=st,ut*=st),B.set(O,X,ut,st),W.equals(B)===!1&&(i.clearColor(O,X,ut,st),W.copy(B))},reset:function(){S=!1,H=null,W.set(-1,0,0,0)}}}function n(){let S=!1,B=!1,H=null,W=null,O=null;return{setReversed:function(X){if(B!==X){let ut=t.get("EXT_clip_control");X?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),B=X;let st=O;O=null,this.setClear(st)}},getReversed:function(){return B},setTest:function(X){X?ht(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(X){H!==X&&!S&&(i.depthMask(X),H=X)},setFunc:function(X){if(B&&(X=rg[X]),W!==X){switch(X){case mo:i.depthFunc(i.NEVER);break;case go:i.depthFunc(i.ALWAYS);break;case _o:i.depthFunc(i.LESS);break;case wi:i.depthFunc(i.LEQUAL);break;case xo:i.depthFunc(i.EQUAL);break;case vo:i.depthFunc(i.GEQUAL);break;case yo:i.depthFunc(i.GREATER);break;case Mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=X}},setLocked:function(X){S=X},setClear:function(X){O!==X&&(B&&(X=1-X),i.clearDepth(X),O=X)},reset:function(){S=!1,H=null,W=null,O=null,B=!1}}}function s(){let S=!1,B=null,H=null,W=null,O=null,X=null,ut=null,st=null,mt=null;return{setTest:function(gt){S||(gt?ht(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(gt){B!==gt&&!S&&(i.stencilMask(gt),B=gt)},setFunc:function(gt,Gt,St){(H!==gt||W!==Gt||O!==St)&&(i.stencilFunc(gt,Gt,St),H=gt,W=Gt,O=St)},setOp:function(gt,Gt,St){(X!==gt||ut!==Gt||st!==St)&&(i.stencilOp(gt,Gt,St),X=gt,ut=Gt,st=St)},setLocked:function(gt){S=gt},setClear:function(gt){mt!==gt&&(i.clearStencil(gt),mt=gt)},reset:function(){S=!1,B=null,H=null,W=null,O=null,X=null,ut=null,st=null,mt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,m=[],g=null,M=!1,p=null,f=null,E=null,R=null,b=null,N=null,L=null,D=new wt(0,0,0),V=0,v=!1,T=null,F=null,q=null,C=null,Z=null,et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,nt=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=nt>=1):j.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=nt>=2);let dt=null,_t={},pt=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),Bt=new ve().fromArray(pt),Xt=new ve().fromArray(bt);function Vt(S,B,H,W){let O=new Uint8Array(4),X=i.createTexture();i.bindTexture(S,X),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<H;ut++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(B,0,i.RGBA,1,1,W,0,i.RGBA,i.UNSIGNED_BYTE,O):i.texImage2D(B+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,O);return X}let lt={};lt[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(wi),Dt(!1),Et(ja),ht(i.CULL_FACE),zt(jn);function ht(S){u[S]!==!0&&(i.enable(S),u[S]=!0)}function Pt(S){u[S]!==!1&&(i.disable(S),u[S]=!1)}function Ht(S,B){return h[S]!==B?(i.bindFramebuffer(S,B),h[S]=B,S===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=B),S===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=B),!0):!1}function Ut(S,B){let H=m,W=!1;if(S){H=d.get(B),H===void 0&&(H=[],d.set(B,H));let O=S.textures;if(H.length!==O.length||H[0]!==i.COLOR_ATTACHMENT0){for(let X=0,ut=O.length;X<ut;X++)H[X]=i.COLOR_ATTACHMENT0+X;H.length=O.length,W=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,W=!0);W&&i.drawBuffers(H)}function it(S){return g!==S?(i.useProgram(S),g=S,!0):!1}let Rt={[ui]:i.FUNC_ADD,[pl]:i.FUNC_SUBTRACT,[ml]:i.FUNC_REVERSE_SUBTRACT};Rt[gl]=i.MIN,Rt[_l]=i.MAX;let z={[xl]:i.ZERO,[vl]:i.ONE,[yl]:i.SRC_COLOR,[Wr]:i.SRC_ALPHA,[El]:i.SRC_ALPHA_SATURATE,[Tl]:i.DST_COLOR,[Sl]:i.DST_ALPHA,[Ml]:i.ONE_MINUS_SRC_COLOR,[Xr]:i.ONE_MINUS_SRC_ALPHA,[wl]:i.ONE_MINUS_DST_COLOR,[bl]:i.ONE_MINUS_DST_ALPHA,[Al]:i.CONSTANT_COLOR,[Cl]:i.ONE_MINUS_CONSTANT_COLOR,[Rl]:i.CONSTANT_ALPHA,[Il]:i.ONE_MINUS_CONSTANT_ALPHA};function zt(S,B,H,W,O,X,ut,st,mt,gt){if(S===jn){M===!0&&(Pt(i.BLEND),M=!1);return}if(M===!1&&(ht(i.BLEND),M=!0),S!==fl){if(S!==p||gt!==v){if((f!==ui||b!==ui)&&(i.blendEquation(i.FUNC_ADD),f=ui,b=ui),gt)switch(S){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.ONE,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ec:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}E=null,R=null,N=null,L=null,D.set(0,0,0),V=0,p=S,v=gt}return}O=O||B,X=X||H,ut=ut||W,(B!==f||O!==b)&&(i.blendEquationSeparate(Rt[B],Rt[O]),f=B,b=O),(H!==E||W!==R||X!==N||ut!==L)&&(i.blendFuncSeparate(z[H],z[W],z[X],z[ut]),E=H,R=W,N=X,L=ut),(st.equals(D)===!1||mt!==V)&&(i.blendColor(st.r,st.g,st.b,mt),D.copy(st),V=mt),p=S,v=!1}function Tt(S,B){S.side===Ae?Pt(i.CULL_FACE):ht(i.CULL_FACE);let H=S.side===qe;B&&(H=!H),Dt(H),S.blending===Ti&&S.transparent===!1?zt(jn):zt(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),o.setFunc(S.depthFunc),o.setTest(S.depthTest),o.setMask(S.depthWrite),r.setMask(S.colorWrite);let W=S.stencilWrite;a.setTest(W),W&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Ct(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(S){T!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),T=S)}function Et(S){S!==hl?(ht(i.CULL_FACE),S!==F&&(S===ja?i.cullFace(i.BACK):S===ul?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),F=S}function $t(S){S!==q&&(K&&i.lineWidth(S),q=S)}function Ct(S,B,H){S?(ht(i.POLYGON_OFFSET_FILL),(C!==B||Z!==H)&&(i.polygonOffset(B,H),C=B,Z=H)):Pt(i.POLYGON_OFFSET_FILL)}function xt(S){S?ht(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function ue(S){S===void 0&&(S=i.TEXTURE0+et-1),dt!==S&&(i.activeTexture(S),dt=S)}function ne(S,B,H){H===void 0&&(dt===null?H=i.TEXTURE0+et-1:H=dt);let W=_t[H];W===void 0&&(W={type:void 0,texture:void 0},_t[H]=W),(W.type!==S||W.texture!==B)&&(dt!==H&&(i.activeTexture(H),dt=H),i.bindTexture(S,B||lt[S]),W.type=S,W.texture=B)}function k(){let S=_t[dt];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function $(){try{i.compressedTexImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function at(){try{i.texSubImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ft(){try{i.texSubImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function vt(){try{i.texStorage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function y(){try{i.texStorage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function A(){try{i.texImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function x(){try{i.texImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function w(S){Bt.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),Bt.copy(S))}function U(S){Xt.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),Xt.copy(S))}function G(S,B){let H=c.get(B);H===void 0&&(H=new WeakMap,c.set(B,H));let W=H.get(S);W===void 0&&(W=i.getUniformBlockIndex(B,S.name),H.set(S,W))}function Y(S,B){let W=c.get(B).get(S);l.get(B)!==W&&(i.uniformBlockBinding(B,W,S.__bindingPointIndex),l.set(B,W))}function I(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},dt=null,_t={},h={},d=new WeakMap,m=[],g=null,M=!1,p=null,f=null,E=null,R=null,b=null,N=null,L=null,D=new wt(0,0,0),V=0,v=!1,T=null,F=null,q=null,C=null,Z=null,Bt.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Pt,bindFramebuffer:Ht,drawBuffers:Ut,useProgram:it,setBlending:zt,setMaterial:Tt,setFlipSided:Dt,setCullFace:Et,setLineWidth:$t,setPolygonOffset:Ct,setScissorTest:xt,activeTexture:ue,bindTexture:ne,unbindTexture:k,compressedTexImage2D:_,compressedTexImage3D:$,texImage2D:A,texImage3D:x,updateUBOMapping:G,uniformBlockBinding:Y,texStorage2D:vt,texStorage3D:y,texSubImage2D:at,texSubImage3D:ft,compressedTexSubImage2D:rt,compressedTexSubImage3D:Nt,scissor:w,viewport:U,reset:I}}function ag(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(k,_){return m?new OffscreenCanvas(k,_):zs("canvas")}function M(k,_,$){let at=1,ft=ne(k);if((ft.width>$||ft.height>$)&&(at=$/Math.max(ft.width,ft.height)),at<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let rt=Math.floor(at*ft.width),Nt=Math.floor(at*ft.height);h===void 0&&(h=g(rt,Nt));let vt=_?g(rt,Nt):h;return vt.width=rt,vt.height=Nt,vt.getContext("2d").drawImage(k,0,0,rt,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+rt+"x"+Nt+")."),vt}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),k;return k}function p(k){return k.generateMipmaps}function f(k){i.generateMipmap(k)}function E(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(k,_,$,at,ft=!1){if(k!==null){if(i[k]!==void 0)return i[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let rt=_;if(_===i.RED&&($===i.FLOAT&&(rt=i.R32F),$===i.HALF_FLOAT&&(rt=i.R16F),$===i.UNSIGNED_BYTE&&(rt=i.R8)),_===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(rt=i.R8UI),$===i.UNSIGNED_SHORT&&(rt=i.R16UI),$===i.UNSIGNED_INT&&(rt=i.R32UI),$===i.BYTE&&(rt=i.R8I),$===i.SHORT&&(rt=i.R16I),$===i.INT&&(rt=i.R32I)),_===i.RG&&($===i.FLOAT&&(rt=i.RG32F),$===i.HALF_FLOAT&&(rt=i.RG16F),$===i.UNSIGNED_BYTE&&(rt=i.RG8)),_===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(rt=i.RG8UI),$===i.UNSIGNED_SHORT&&(rt=i.RG16UI),$===i.UNSIGNED_INT&&(rt=i.RG32UI),$===i.BYTE&&(rt=i.RG8I),$===i.SHORT&&(rt=i.RG16I),$===i.INT&&(rt=i.RG32I)),_===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),$===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),$===i.UNSIGNED_INT&&(rt=i.RGB32UI),$===i.BYTE&&(rt=i.RGB8I),$===i.SHORT&&(rt=i.RGB16I),$===i.INT&&(rt=i.RGB32I)),_===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),$===i.UNSIGNED_INT&&(rt=i.RGBA32UI),$===i.BYTE&&(rt=i.RGBA8I),$===i.SHORT&&(rt=i.RGBA16I),$===i.INT&&(rt=i.RGBA32I)),_===i.RGB&&($===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),_===i.RGBA){let Nt=ft?Bs:le.getTransfer(at);$===i.FLOAT&&(rt=i.RGBA32F),$===i.HALF_FLOAT&&(rt=i.RGBA16F),$===i.UNSIGNED_BYTE&&(rt=Nt===pe?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function b(k,_){let $;return k?_===null||_===gi||_===ps?$=i.DEPTH24_STENCIL8:_===In?$=i.DEPTH32F_STENCIL8:_===ds&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===gi||_===ps?$=i.DEPTH_COMPONENT24:_===In?$=i.DEPTH_COMPONENT32F:_===ds&&($=i.DEPTH_COMPONENT16),$}function N(k,_){return p(k)===!0||k.isFramebufferTexture&&k.minFilter!==nn&&k.minFilter!==En?Math.log2(Math.max(_.width,_.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?_.mipmaps.length:1}function L(k){let _=k.target;_.removeEventListener("dispose",L),V(_),_.isVideoTexture&&u.delete(_)}function D(k){let _=k.target;_.removeEventListener("dispose",D),T(_)}function V(k){let _=n.get(k);if(_.__webglInit===void 0)return;let $=k.source,at=d.get($);if(at){let ft=at[_.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&v(k),Object.keys(at).length===0&&d.delete($)}n.remove(k)}function v(k){let _=n.get(k);i.deleteTexture(_.__webglTexture);let $=k.source,at=d.get($);delete at[_.__cacheKey],o.memory.textures--}function T(k){let _=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(_.__webglFramebuffer[at]))for(let ft=0;ft<_.__webglFramebuffer[at].length;ft++)i.deleteFramebuffer(_.__webglFramebuffer[at][ft]);else i.deleteFramebuffer(_.__webglFramebuffer[at]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[at])}else{if(Array.isArray(_.__webglFramebuffer))for(let at=0;at<_.__webglFramebuffer.length;at++)i.deleteFramebuffer(_.__webglFramebuffer[at]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let at=0;at<_.__webglColorRenderbuffer.length;at++)_.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[at]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let $=k.textures;for(let at=0,ft=$.length;at<ft;at++){let rt=n.get($[at]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove($[at])}n.remove(k)}let F=0;function q(){F=0}function C(){let k=F;return k>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+s.maxTextures),F+=1,k}function Z(k){let _=[];return _.push(k.wrapS),_.push(k.wrapT),_.push(k.wrapR||0),_.push(k.magFilter),_.push(k.minFilter),_.push(k.anisotropy),_.push(k.internalFormat),_.push(k.format),_.push(k.type),_.push(k.generateMipmaps),_.push(k.premultiplyAlpha),_.push(k.flipY),_.push(k.unpackAlignment),_.push(k.colorSpace),_.join()}function et(k,_){let $=n.get(k);if(k.isVideoTexture&&xt(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&$.__version!==k.version){let at=k.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt($,k,_);return}}else k.isExternalTexture&&($.__webglTexture=k.sourceTexture?k.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+_)}function K(k,_){let $=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&$.__version!==k.version){lt($,k,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+_)}function nt(k,_){let $=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&$.__version!==k.version){lt($,k,_);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+_)}function j(k,_){let $=n.get(k);if(k.version>0&&$.__version!==k.version){ht($,k,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+_)}let dt={[Ei]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[qr]:i.MIRRORED_REPEAT},_t={[nn]:i.NEAREST,[zl]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[wo]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},pt={[Gl]:i.NEVER,[Jl]:i.ALWAYS,[Wl]:i.LESS,[dc]:i.LEQUAL,[Xl]:i.EQUAL,[Zl]:i.GEQUAL,[ql]:i.GREATER,[Yl]:i.NOTEQUAL};function bt(k,_){if(_.type===In&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===En||_.magFilter===wo||_.magFilter===ar||_.magFilter===mi||_.minFilter===En||_.minFilter===wo||_.minFilter===ar||_.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,dt[_.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,dt[_.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,dt[_.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,_t[_.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,_t[_.minFilter]),_.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,pt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===nn||_.minFilter!==ar&&_.minFilter!==mi||_.type===In&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(k,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Bt(k,_){let $=!1;k.__webglInit===void 0&&(k.__webglInit=!0,_.addEventListener("dispose",L));let at=_.source,ft=d.get(at);ft===void 0&&(ft={},d.set(at,ft));let rt=Z(_);if(rt!==k.__cacheKey){ft[rt]===void 0&&(ft[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ft[rt].usedTimes++;let Nt=ft[k.__cacheKey];Nt!==void 0&&(ft[k.__cacheKey].usedTimes--,Nt.usedTimes===0&&v(_)),k.__cacheKey=rt,k.__webglTexture=ft[rt].texture}return $}function Xt(k,_,$){return Math.floor(Math.floor(k/$)/_)}function Vt(k,_,$,at){let rt=k.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,$,at,_.data);else{rt.sort((x,w)=>x.start-w.start);let Nt=0;for(let x=1;x<rt.length;x++){let w=rt[Nt],U=rt[x],G=w.start+w.count,Y=Xt(U.start,_.width,4),I=Xt(w.start,_.width,4);U.start<=G+1&&Y===I&&Xt(U.start+U.count-1,_.width,4)===Y?w.count=Math.max(w.count,U.start+U.count-w.start):(++Nt,rt[Nt]=U)}rt.length=Nt+1;let vt=i.getParameter(i.UNPACK_ROW_LENGTH),y=i.getParameter(i.UNPACK_SKIP_PIXELS),A=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let x=0,w=rt.length;x<w;x++){let U=rt[x],G=Math.floor(U.start/4),Y=Math.ceil(U.count/4),I=G%_.width,S=Math.floor(G/_.width),B=Y,H=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,I),i.pixelStorei(i.UNPACK_SKIP_ROWS,S),e.texSubImage2D(i.TEXTURE_2D,0,I,S,B,H,$,at,_.data)}k.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,vt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,y),i.pixelStorei(i.UNPACK_SKIP_ROWS,A)}}function lt(k,_,$){let at=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(at=i.TEXTURE_3D);let ft=Bt(k,_),rt=_.source;e.bindTexture(at,k.__webglTexture,i.TEXTURE0+$);let Nt=n.get(rt);if(rt.version!==Nt.__version||ft===!0){e.activeTexture(i.TEXTURE0+$);let vt=le.getPrimaries(le.workingColorSpace),y=_.colorSpace===ti?null:le.getPrimaries(_.colorSpace),A=_.colorSpace===ti||vt===y?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,A);let x=M(_.image,!1,s.maxTextureSize);x=ue(_,x);let w=r.convert(_.format,_.colorSpace),U=r.convert(_.type),G=R(_.internalFormat,w,U,_.colorSpace,_.isVideoTexture);bt(at,_);let Y,I=_.mipmaps,S=_.isVideoTexture!==!0,B=Nt.__version===void 0||ft===!0,H=rt.dataReady,W=N(_,x);if(_.isDepthTexture)G=b(_.format===ms,_.type),B&&(S?e.texStorage2D(i.TEXTURE_2D,1,G,x.width,x.height):e.texImage2D(i.TEXTURE_2D,0,G,x.width,x.height,0,w,U,null));else if(_.isDataTexture)if(I.length>0){S&&B&&e.texStorage2D(i.TEXTURE_2D,W,G,I[0].width,I[0].height);for(let O=0,X=I.length;O<X;O++)Y=I[O],S?H&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,Y.width,Y.height,w,U,Y.data):e.texImage2D(i.TEXTURE_2D,O,G,Y.width,Y.height,0,w,U,Y.data);_.generateMipmaps=!1}else S?(B&&e.texStorage2D(i.TEXTURE_2D,W,G,x.width,x.height),H&&Vt(_,x,w,U)):e.texImage2D(i.TEXTURE_2D,0,G,x.width,x.height,0,w,U,x.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){S&&B&&e.texStorage3D(i.TEXTURE_2D_ARRAY,W,G,I[0].width,I[0].height,x.depth);for(let O=0,X=I.length;O<X;O++)if(Y=I[O],_.format!==xn)if(w!==null)if(S){if(H)if(_.layerUpdates.size>0){let ut=yc(Y.width,Y.height,_.format,_.type);for(let st of _.layerUpdates){let mt=Y.data.subarray(st*ut/Y.data.BYTES_PER_ELEMENT,(st+1)*ut/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,st,Y.width,Y.height,1,w,mt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,Y.width,Y.height,x.depth,w,Y.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,G,Y.width,Y.height,x.depth,0,Y.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else S?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,Y.width,Y.height,x.depth,w,U,Y.data):e.texImage3D(i.TEXTURE_2D_ARRAY,O,G,Y.width,Y.height,x.depth,0,w,U,Y.data)}else{S&&B&&e.texStorage2D(i.TEXTURE_2D,W,G,I[0].width,I[0].height);for(let O=0,X=I.length;O<X;O++)Y=I[O],_.format!==xn?w!==null?S?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,Y.width,Y.height,w,Y.data):e.compressedTexImage2D(i.TEXTURE_2D,O,G,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):S?H&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,Y.width,Y.height,w,U,Y.data):e.texImage2D(i.TEXTURE_2D,O,G,Y.width,Y.height,0,w,U,Y.data)}else if(_.isDataArrayTexture)if(S){if(B&&e.texStorage3D(i.TEXTURE_2D_ARRAY,W,G,x.width,x.height,x.depth),H)if(_.layerUpdates.size>0){let O=yc(x.width,x.height,_.format,_.type);for(let X of _.layerUpdates){let ut=x.data.subarray(X*O/x.data.BYTES_PER_ELEMENT,(X+1)*O/x.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,x.width,x.height,1,w,U,ut)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,x.width,x.height,x.depth,w,U,x.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,G,x.width,x.height,x.depth,0,w,U,x.data);else if(_.isData3DTexture)S?(B&&e.texStorage3D(i.TEXTURE_3D,W,G,x.width,x.height,x.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,x.width,x.height,x.depth,w,U,x.data)):e.texImage3D(i.TEXTURE_3D,0,G,x.width,x.height,x.depth,0,w,U,x.data);else if(_.isFramebufferTexture){if(B)if(S)e.texStorage2D(i.TEXTURE_2D,W,G,x.width,x.height);else{let O=x.width,X=x.height;for(let ut=0;ut<W;ut++)e.texImage2D(i.TEXTURE_2D,ut,G,O,X,0,w,U,null),O>>=1,X>>=1}}else if(I.length>0){if(S&&B){let O=ne(I[0]);e.texStorage2D(i.TEXTURE_2D,W,G,O.width,O.height)}for(let O=0,X=I.length;O<X;O++)Y=I[O],S?H&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,w,U,Y):e.texImage2D(i.TEXTURE_2D,O,G,w,U,Y);_.generateMipmaps=!1}else if(S){if(B){let O=ne(x);e.texStorage2D(i.TEXTURE_2D,W,G,O.width,O.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,w,U,x)}else e.texImage2D(i.TEXTURE_2D,0,G,w,U,x);p(_)&&f(at),Nt.__version=rt.version,_.onUpdate&&_.onUpdate(_)}k.__version=_.version}function ht(k,_,$){if(_.image.length!==6)return;let at=Bt(k,_),ft=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+$);let rt=n.get(ft);if(ft.version!==rt.__version||at===!0){e.activeTexture(i.TEXTURE0+$);let Nt=le.getPrimaries(le.workingColorSpace),vt=_.colorSpace===ti?null:le.getPrimaries(_.colorSpace),y=_.colorSpace===ti||Nt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,y);let A=_.isCompressedTexture||_.image[0].isCompressedTexture,x=_.image[0]&&_.image[0].isDataTexture,w=[];for(let X=0;X<6;X++)!A&&!x?w[X]=M(_.image[X],!0,s.maxCubemapSize):w[X]=x?_.image[X].image:_.image[X],w[X]=ue(_,w[X]);let U=w[0],G=r.convert(_.format,_.colorSpace),Y=r.convert(_.type),I=R(_.internalFormat,G,Y,_.colorSpace),S=_.isVideoTexture!==!0,B=rt.__version===void 0||at===!0,H=ft.dataReady,W=N(_,U);bt(i.TEXTURE_CUBE_MAP,_);let O;if(A){S&&B&&e.texStorage2D(i.TEXTURE_CUBE_MAP,W,I,U.width,U.height);for(let X=0;X<6;X++){O=w[X].mipmaps;for(let ut=0;ut<O.length;ut++){let st=O[ut];_.format!==xn?G!==null?S?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ut,0,0,st.width,st.height,G,st.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ut,I,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ut,0,0,st.width,st.height,G,Y,st.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ut,I,st.width,st.height,0,G,Y,st.data)}}}else{if(O=_.mipmaps,S&&B){O.length>0&&W++;let X=ne(w[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,W,I,X.width,X.height)}for(let X=0;X<6;X++)if(x){S?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,w[X].width,w[X].height,G,Y,w[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,I,w[X].width,w[X].height,0,G,Y,w[X].data);for(let ut=0;ut<O.length;ut++){let mt=O[ut].image[X].image;S?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ut+1,0,0,mt.width,mt.height,G,Y,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ut+1,I,mt.width,mt.height,0,G,Y,mt.data)}}else{S?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,G,Y,w[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,I,G,Y,w[X]);for(let ut=0;ut<O.length;ut++){let st=O[ut];S?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ut+1,0,0,G,Y,st.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ut+1,I,G,Y,st.image[X])}}}p(_)&&f(i.TEXTURE_CUBE_MAP),rt.__version=ft.version,_.onUpdate&&_.onUpdate(_)}k.__version=_.version}function Pt(k,_,$,at,ft,rt){let Nt=r.convert($.format,$.colorSpace),vt=r.convert($.type),y=R($.internalFormat,Nt,vt,$.colorSpace),A=n.get(_),x=n.get($);if(x.__renderTarget=_,!A.__hasExternalTextures){let w=Math.max(1,_.width>>rt),U=Math.max(1,_.height>>rt);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,rt,y,w,U,_.depth,0,Nt,vt,null):e.texImage2D(ft,rt,y,w,U,0,Nt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,k),Ct(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,ft,x.__webglTexture,0,$t(_)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,ft,x.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(k,_,$){if(i.bindRenderbuffer(i.RENDERBUFFER,k),_.depthBuffer){let at=_.depthTexture,ft=at&&at.isDepthTexture?at.type:null,rt=b(_.stencilBuffer,ft),Nt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=$t(_);Ct(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,rt,_.width,_.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,rt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,rt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,k)}else{let at=_.textures;for(let ft=0;ft<at.length;ft++){let rt=at[ft],Nt=r.convert(rt.format,rt.colorSpace),vt=r.convert(rt.type),y=R(rt.internalFormat,Nt,vt,rt.colorSpace),A=$t(_);$&&Ct(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,A,y,_.width,_.height):Ct(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,A,y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,y,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(k,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,k),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let at=n.get(_.depthTexture);at.__renderTarget=_,(!at.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),et(_.depthTexture,0);let ft=at.__webglTexture,rt=$t(_);if(_.depthTexture.format===is)Ct(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0);else if(_.depthTexture.format===ms)Ct(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function it(k){let _=n.get(k),$=k.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==k.depthTexture){let at=k.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),at){let ft=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,at.removeEventListener("dispose",ft)};at.addEventListener("dispose",ft),_.__depthDisposeCallback=ft}_.__boundDepthTexture=at}if(k.depthTexture&&!_.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");let at=k.texture.mipmaps;at&&at.length>0?Ut(_.__webglFramebuffer[0],k):Ut(_.__webglFramebuffer,k)}else if($){_.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[at]),_.__webglDepthbuffer[at]===void 0)_.__webglDepthbuffer[at]=i.createRenderbuffer(),Ht(_.__webglDepthbuffer[at],k,!1);else{let ft=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,rt)}}else{let at=k.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ht(_.__webglDepthbuffer,k,!1);else{let ft=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(k,_,$){let at=n.get(k);_!==void 0&&Pt(at.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&it(k)}function z(k){let _=k.texture,$=n.get(k),at=n.get(_);k.addEventListener("dispose",D);let ft=k.textures,rt=k.isWebGLCubeRenderTarget===!0,Nt=ft.length>1;if(Nt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=_.version,o.memory.textures++),rt){$.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(_.mipmaps&&_.mipmaps.length>0){$.__webglFramebuffer[vt]=[];for(let y=0;y<_.mipmaps.length;y++)$.__webglFramebuffer[vt][y]=i.createFramebuffer()}else $.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){$.__webglFramebuffer=[];for(let vt=0;vt<_.mipmaps.length;vt++)$.__webglFramebuffer[vt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let vt=0,y=ft.length;vt<y;vt++){let A=n.get(ft[vt]);A.__webglTexture===void 0&&(A.__webglTexture=i.createTexture(),o.memory.textures++)}if(k.samples>0&&Ct(k)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let vt=0;vt<ft.length;vt++){let y=ft[vt];$.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[vt]);let A=r.convert(y.format,y.colorSpace),x=r.convert(y.type),w=R(y.internalFormat,A,x,y.colorSpace,k.isXRRenderTarget===!0),U=$t(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,U,w,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,$.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht($.__webglDepthRenderbuffer,k,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),bt(i.TEXTURE_CUBE_MAP,_);for(let vt=0;vt<6;vt++)if(_.mipmaps&&_.mipmaps.length>0)for(let y=0;y<_.mipmaps.length;y++)Pt($.__webglFramebuffer[vt][y],k,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,y);else Pt($.__webglFramebuffer[vt],k,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);p(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let vt=0,y=ft.length;vt<y;vt++){let A=ft[vt],x=n.get(A),w=i.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(w=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(w,x.__webglTexture),bt(w,A),Pt($.__webglFramebuffer,k,A,i.COLOR_ATTACHMENT0+vt,w,0),p(A)&&f(w)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(vt=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,at.__webglTexture),bt(vt,_),_.mipmaps&&_.mipmaps.length>0)for(let y=0;y<_.mipmaps.length;y++)Pt($.__webglFramebuffer[y],k,_,i.COLOR_ATTACHMENT0,vt,y);else Pt($.__webglFramebuffer,k,_,i.COLOR_ATTACHMENT0,vt,0);p(_)&&f(vt),e.unbindTexture()}k.depthBuffer&&it(k)}function zt(k){let _=k.textures;for(let $=0,at=_.length;$<at;$++){let ft=_[$];if(p(ft)){let rt=E(k),Nt=n.get(ft).__webglTexture;e.bindTexture(rt,Nt),f(rt),e.unbindTexture()}}}let Tt=[],Dt=[];function Et(k){if(k.samples>0){if(Ct(k)===!1){let _=k.textures,$=k.width,at=k.height,ft=i.COLOR_BUFFER_BIT,rt=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(k),vt=_.length>1;if(vt)for(let A=0;A<_.length;A++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+A,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+A,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);let y=k.texture.mipmaps;y&&y.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let A=0;A<_.length;A++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[A]);let x=n.get(_[A]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,x,0)}i.blitFramebuffer(0,0,$,at,0,0,$,at,ft,i.NEAREST),l===!0&&(Tt.length=0,Dt.length=0,Tt.push(i.COLOR_ATTACHMENT0+A),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Tt.push(rt),Dt.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let A=0;A<_.length;A++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+A,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[A]);let x=n.get(_[A]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+A,i.TEXTURE_2D,x,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&l){let _=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function $t(k){return Math.min(s.maxSamples,k.samples)}function Ct(k){let _=n.get(k);return k.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function xt(k){let _=o.render.frame;u.get(k)!==_&&(u.set(k,_),k.update())}function ue(k,_){let $=k.colorSpace,at=k.format,ft=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||$!==Ai&&$!==ti&&(le.getTransfer($)===pe?(at!==xn||ft!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),_}function ne(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=q,this.setTexture2D=et,this.setTexture2DArray=K,this.setTexture3D=nt,this.setTextureCube=j,this.rebindTextures=Rt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Ct}function cg(i,t){function e(n,s=ti){let r,o=le.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sc)return i.BYTE;if(n===rc)return i.SHORT;if(n===ds)return i.UNSIGNED_SHORT;if(n===Eo)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===fs)return i.HALF_FLOAT;if(n===cc)return i.ALPHA;if(n===lc)return i.RGB;if(n===xn)return i.RGBA;if(n===is)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===Ro)return i.RED;if(n===Io)return i.RED_INTEGER;if(n===hc)return i.RG;if(n===Po)return i.RG_INTEGER;if(n===Lo)return i.RGBA_INTEGER;if(n===cr||n===lr||n===hr||n===ur)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===Uo||n===No||n===Fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===No)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bo||n===Oo||n===zo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bo||n===Oo)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ko||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Jo||n===$o||n===Ko||n===jo||n===Qo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ko)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ho)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Go)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ta||n===ea||n===na)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ta)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ia||n===sa||n===ra||n===oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var lg=`
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

}`,Dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ks(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:lg,fragmentShader:hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new _n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uc=class extends Jn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null,M=typeof XRWebGLBinding<"u",p=new Dc,f={},E=e.getContextAttributes(),R=null,b=null,N=[],L=[],D=new re,V=null,v=new We;v.viewport=new ve;let T=new We;T.viewport=new ve;let F=[v,T],q=new po,C=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let ht=N[lt];return ht===void 0&&(ht=new as,N[lt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(lt){let ht=N[lt];return ht===void 0&&(ht=new as,N[lt]=ht),ht.getGripSpace()},this.getHand=function(lt){let ht=N[lt];return ht===void 0&&(ht=new as,N[lt]=ht),ht.getHandSpace()};function et(lt){let ht=L.indexOf(lt.inputSource);if(ht===-1)return;let Pt=N[ht];Pt!==void 0&&(Pt.update(lt.inputSource,lt.frame,c||o),Pt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function K(){s.removeEventListener("select",et),s.removeEventListener("selectstart",et),s.removeEventListener("selectend",et),s.removeEventListener("squeeze",et),s.removeEventListener("squeezestart",et),s.removeEventListener("squeezeend",et),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",nt);for(let lt=0;lt<N.length;lt++){let ht=L[lt];ht!==null&&(L[lt]=null,N[lt].disconnect(ht))}C=null,Z=null,p.reset();for(let lt in f)delete f[lt];t.setRenderTarget(R),m=null,d=null,h=null,s=null,b=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(V),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){a=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(lt){c=lt},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",et),s.addEventListener("selectstart",et),s.addEventListener("selectend",et),s.addEventListener("squeeze",et),s.addEventListener("squeezestart",et),s.addEventListener("squeezeend",et),s.addEventListener("end",K),s.addEventListener("inputsourceschange",nt),E.xrCompatible!==!0&&await e.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,Ht=null,Ut=null;E.depth&&(Ut=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=E.stencil?ms:is,Ht=E.stencil?ps:gi);let it={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(it),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new gn(d.textureWidth,d.textureHeight,{format:xn,type:Rn,depthTexture:new $s(d.textureWidth,d.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Pt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new gn(m.framebufferWidth,m.framebufferHeight,{format:xn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(lt){for(let ht=0;ht<lt.removed.length;ht++){let Pt=lt.removed[ht],Ht=L.indexOf(Pt);Ht>=0&&(L[Ht]=null,N[Ht].disconnect(Pt))}for(let ht=0;ht<lt.added.length;ht++){let Pt=lt.added[ht],Ht=L.indexOf(Pt);if(Ht===-1){for(let it=0;it<N.length;it++)if(it>=L.length){L.push(Pt),Ht=it;break}else if(L[it]===null){L[it]=Pt,Ht=it;break}if(Ht===-1)break}let Ut=N[Ht];Ut&&Ut.connect(Pt)}}let j=new J,dt=new J;function _t(lt,ht,Pt){j.setFromMatrixPosition(ht.matrixWorld),dt.setFromMatrixPosition(Pt.matrixWorld);let Ht=j.distanceTo(dt),Ut=ht.projectionMatrix.elements,it=Pt.projectionMatrix.elements,Rt=Ut[14]/(Ut[10]-1),z=Ut[14]/(Ut[10]+1),zt=(Ut[9]+1)/Ut[5],Tt=(Ut[9]-1)/Ut[5],Dt=(Ut[8]-1)/Ut[0],Et=(it[8]+1)/it[0],$t=Rt*Dt,Ct=Rt*Et,xt=Ht/(-Dt+Et),ue=xt*-Dt;if(ht.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(ue),lt.translateZ(xt),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),Ut[10]===-1)lt.projectionMatrix.copy(ht.projectionMatrix),lt.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let ne=Rt+xt,k=z+xt,_=$t-ue,$=Ct+(Ht-ue),at=zt*z/k*ne,ft=Tt*z/k*ne;lt.projectionMatrix.makePerspective(_,$,at,ft,ne,k),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function pt(lt,ht){ht===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(ht.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let ht=lt.near,Pt=lt.far;p.texture!==null&&(p.depthNear>0&&(ht=p.depthNear),p.depthFar>0&&(Pt=p.depthFar)),q.near=T.near=v.near=ht,q.far=T.far=v.far=Pt,(C!==q.near||Z!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),C=q.near,Z=q.far),q.layers.mask=lt.layers.mask|6,v.layers.mask=q.layers.mask&3,T.layers.mask=q.layers.mask&5;let Ht=lt.parent,Ut=q.cameras;pt(q,Ht);for(let it=0;it<Ut.length;it++)pt(Ut[it],Ht);Ut.length===2?_t(q,v,T):q.projectionMatrix.copy(v.projectionMatrix),bt(lt,q,Ht)};function bt(lt,ht,Pt){Pt===null?lt.matrix.copy(ht.matrixWorld):(lt.matrix.copy(Pt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(ht.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(ht.projectionMatrix),lt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=ss*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(lt){l=lt,d!==null&&(d.fixedFoveation=lt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=lt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(lt){return f[lt]};let Bt=null;function Xt(lt,ht){if(u=ht.getViewerPose(c||o),g=ht,u!==null){let Pt=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let Ht=!1;Pt.length!==q.cameras.length&&(q.cameras.length=0,Ht=!0);for(let z=0;z<Pt.length;z++){let zt=Pt[z],Tt=null;if(m!==null)Tt=m.getViewport(zt);else{let Et=h.getViewSubImage(d,zt);Tt=Et.viewport,z===0&&(t.setRenderTargetTextures(b,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(b))}let Dt=F[z];Dt===void 0&&(Dt=new We,Dt.layers.enable(z),Dt.viewport=new ve,F[z]=Dt),Dt.matrix.fromArray(zt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(zt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),z===0&&(q.matrix.copy(Dt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ht===!0&&q.cameras.push(Dt)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){h=n.getBinding();let z=h.getDepthInformation(Pt[0]);z&&z.isValid&&z.texture&&p.init(z,s.renderState)}if(Ut&&Ut.includes("camera-access")&&M){t.state.unbindTexture(),h=n.getBinding();for(let z=0;z<Pt.length;z++){let zt=Pt[z].camera;if(zt){let Tt=f[zt];Tt||(Tt=new Ks,f[zt]=Tt);let Dt=h.getCameraImage(zt);Tt.sourceTexture=Dt}}}}for(let Pt=0;Pt<N.length;Pt++){let Ht=L[Pt],Ut=N[Pt];Ht!==null&&Ut!==void 0&&Ut.update(Ht,ht,c||o)}Bt&&Bt(lt,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}let Vt=new bh;Vt.setAnimationLoop(Xt),this.setAnimationLoop=function(lt){Bt=lt},this.dispose=function(){}}},Bi=new An,ug=new fe;function dg(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,gc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,R,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),M(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,E,R):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===qe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===qe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let E=t.get(f),R=E.envMap,b=E.envMapRotation;R&&(p.envMap.value=R,Bi.copy(b),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),p.envMapRotation.value.setFromMatrix4(ug.makeRotationFromEuler(Bi)),p.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,R){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=R*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qe&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function M(p,f){let E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,R){let b=R.program;n.uniformBlockBinding(E,b)}function c(E,R){let b=s[E.id];b===void 0&&(g(E),b=u(E),s[E.id]=b,E.addEventListener("dispose",p));let N=R.program;n.updateUBOMapping(E,N);let L=t.render.frame;r[E.id]!==L&&(d(E),r[E.id]=L)}function u(E){let R=h();E.__bindingPointIndex=R;let b=i.createBuffer(),N=E.__size,L=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,N,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,b),b}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let R=s[E.id],b=E.uniforms,N=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let L=0,D=b.length;L<D;L++){let V=Array.isArray(b[L])?b[L]:[b[L]];for(let v=0,T=V.length;v<T;v++){let F=V[v];if(m(F,L,v,N)===!0){let q=F.__offset,C=Array.isArray(F.value)?F.value:[F.value],Z=0;for(let et=0;et<C.length;et++){let K=C[et],nt=M(K);typeof K=="number"||typeof K=="boolean"?(F.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,q+Z,F.__data)):K.isMatrix3?(F.__data[0]=K.elements[0],F.__data[1]=K.elements[1],F.__data[2]=K.elements[2],F.__data[3]=0,F.__data[4]=K.elements[3],F.__data[5]=K.elements[4],F.__data[6]=K.elements[5],F.__data[7]=0,F.__data[8]=K.elements[6],F.__data[9]=K.elements[7],F.__data[10]=K.elements[8],F.__data[11]=0):(K.toArray(F.__data,Z),Z+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,R,b,N){let L=E.value,D=R+"_"+b;if(N[D]===void 0)return typeof L=="number"||typeof L=="boolean"?N[D]=L:N[D]=L.clone(),!0;{let V=N[D];if(typeof L=="number"||typeof L=="boolean"){if(V!==L)return N[D]=L,!0}else if(V.equals(L)===!1)return V.copy(L),!0}return!1}function g(E){let R=E.uniforms,b=0,N=16;for(let D=0,V=R.length;D<V;D++){let v=Array.isArray(R[D])?R[D]:[R[D]];for(let T=0,F=v.length;T<F;T++){let q=v[T],C=Array.isArray(q.value)?q.value:[q.value];for(let Z=0,et=C.length;Z<et;Z++){let K=C[Z],nt=M(K),j=b%N,dt=j%nt.boundary,_t=j+dt;b+=dt,_t!==0&&N-_t<nt.storage&&(b+=N-_t),q.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=nt.storage}}}let L=b%N;return L>0&&(b+=N-L),E.__size=b,E.__cache={},this}function M(E){let R={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(R.boundary=4,R.storage=4):E.isVector2?(R.boundary=8,R.storage=8):E.isVector3||E.isColor?(R.boundary=16,R.storage=12):E.isVector4?(R.boundary=16,R.storage=16):E.isMatrix3?(R.boundary=48,R.storage=48):E.isMatrix4?(R.boundary=64,R.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),R}function p(E){let R=E.target;R.removeEventListener("dispose",p);let b=o.indexOf(R.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var ua=class{constructor(t={}){let{canvas:e=$l(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),M=new Int32Array(4),p=null,f=null,E=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,N=!1;this._outputColorSpace=Le;let L=0,D=0,V=null,v=-1,T=null,F=new ve,q=new ve,C=null,Z=new wt(0),et=0,K=e.width,nt=e.height,j=1,dt=null,_t=null,pt=new ve(0,0,K,nt),bt=new ve(0,0,K,nt),Bt=!1,Xt=new ls,Vt=!1,lt=!1,ht=new fe,Pt=new J,Ht=new ve,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function Rt(){return V===null?j:1}let z=n;function zt(P,Q){return e.getContext(P,Q)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",H,!1),e.addEventListener("webglcontextrestored",W,!1),e.addEventListener("webglcontextcreationerror",O,!1),z===null){let Q="webgl2";if(z=zt(Q,P),z===null)throw zt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Tt,Dt,Et,$t,Ct,xt,ue,ne,k,_,$,at,ft,rt,Nt,vt,y,A,x,w,U,G,Y,I;function S(){Tt=new Pp(z),Tt.init(),G=new cg(z,Tt),Dt=new Tp(z,Tt,t,G),Et=new og(z,Tt),Dt.reversedDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),$t=new Up(z),Ct=new Ym,xt=new ag(z,Tt,Et,Ct,Dt,G,$t),ue=new Ep(b),ne=new Ip(b),k=new zu(z),Y=new Sp(z,k),_=new Lp(z,k,$t,Y),$=new Fp(z,_,k,$t),x=new Np(z,Dt,xt),vt=new wp(Ct),at=new qm(b,ue,ne,Tt,Dt,Y,vt),ft=new dg(b,Ct),rt=new Jm,Nt=new eg(Tt),A=new Mp(b,ue,ne,Et,$,m,l),y=new sg(b,$,Dt),I=new fg(z,$t,Dt,Et),w=new bp(z,Tt,$t),U=new Dp(z,Tt,$t),$t.programs=at.programs,b.capabilities=Dt,b.extensions=Tt,b.properties=Ct,b.renderLists=rt,b.shadowMap=y,b.state=Et,b.info=$t}S();let B=new Uc(b,z);this.xr=B,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let P=Tt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Tt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(P){P!==void 0&&(j=P,this.setSize(K,nt,!1))},this.getSize=function(P){return P.set(K,nt)},this.setSize=function(P,Q,ot=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=P,nt=Q,e.width=Math.floor(P*j),e.height=Math.floor(Q*j),ot===!0&&(e.style.width=P+"px",e.style.height=Q+"px"),this.setViewport(0,0,P,Q)},this.getDrawingBufferSize=function(P){return P.set(K*j,nt*j).floor()},this.setDrawingBufferSize=function(P,Q,ot){K=P,nt=Q,j=ot,e.width=Math.floor(P*ot),e.height=Math.floor(Q*ot),this.setViewport(0,0,P,Q)},this.getCurrentViewport=function(P){return P.copy(F)},this.getViewport=function(P){return P.copy(pt)},this.setViewport=function(P,Q,ot,ct){P.isVector4?pt.set(P.x,P.y,P.z,P.w):pt.set(P,Q,ot,ct),Et.viewport(F.copy(pt).multiplyScalar(j).round())},this.getScissor=function(P){return P.copy(bt)},this.setScissor=function(P,Q,ot,ct){P.isVector4?bt.set(P.x,P.y,P.z,P.w):bt.set(P,Q,ot,ct),Et.scissor(q.copy(bt).multiplyScalar(j).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(P){Et.setScissorTest(Bt=P)},this.setOpaqueSort=function(P){dt=P},this.setTransparentSort=function(P){_t=P},this.getClearColor=function(P){return P.copy(A.getClearColor())},this.setClearColor=function(){A.setClearColor(...arguments)},this.getClearAlpha=function(){return A.getClearAlpha()},this.setClearAlpha=function(){A.setClearAlpha(...arguments)},this.clear=function(P=!0,Q=!0,ot=!0){let ct=0;if(P){let tt=!1;if(V!==null){let yt=V.texture.format;tt=yt===Lo||yt===Po||yt===Io}if(tt){let yt=V.texture.type,Lt=yt===Rn||yt===gi||yt===ds||yt===ps||yt===Ao||yt===Co,Ot=A.getClearColor(),Ft=A.getClearAlpha(),Zt=Ot.r,Jt=Ot.g,Wt=Ot.b;Lt?(g[0]=Zt,g[1]=Jt,g[2]=Wt,g[3]=Ft,z.clearBufferuiv(z.COLOR,0,g)):(M[0]=Zt,M[1]=Jt,M[2]=Wt,M[3]=Ft,z.clearBufferiv(z.COLOR,0,M))}else ct|=z.COLOR_BUFFER_BIT}Q&&(ct|=z.DEPTH_BUFFER_BIT),ot&&(ct|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",H,!1),e.removeEventListener("webglcontextrestored",W,!1),e.removeEventListener("webglcontextcreationerror",O,!1),A.dispose(),rt.dispose(),Nt.dispose(),Ct.dispose(),ue.dispose(),ne.dispose(),$.dispose(),Y.dispose(),I.dispose(),at.dispose(),B.dispose(),B.removeEventListener("sessionstart",St),B.removeEventListener("sessionend",kt),qt.stop()};function H(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let P=$t.autoReset,Q=y.enabled,ot=y.autoUpdate,ct=y.needsUpdate,tt=y.type;S(),$t.autoReset=P,y.enabled=Q,y.autoUpdate=ot,y.needsUpdate=ct,y.type=tt}function O(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function X(P){let Q=P.target;Q.removeEventListener("dispose",X),ut(Q)}function ut(P){st(P),Ct.remove(P)}function st(P){let Q=Ct.get(P).programs;Q!==void 0&&(Q.forEach(function(ot){at.releaseProgram(ot)}),P.isShaderMaterial&&at.releaseShaderCache(P))}this.renderBufferDirect=function(P,Q,ot,ct,tt,yt){Q===null&&(Q=Ut);let Lt=tt.isMesh&&tt.matrixWorld.determinant()<0,Ot=Hn(P,Q,ot,ct,tt);Et.setMaterial(ct,Lt);let Ft=ot.index,Zt=1;if(ct.wireframe===!0){if(Ft=_.getWireframeAttribute(ot),Ft===void 0)return;Zt=2}let Jt=ot.drawRange,Wt=ot.attributes.position,ae=Jt.start*Zt,me=(Jt.start+Jt.count)*Zt;yt!==null&&(ae=Math.max(ae,yt.start*Zt),me=Math.min(me,(yt.start+yt.count)*Zt)),Ft!==null?(ae=Math.max(ae,0),me=Math.min(me,Ft.count)):Wt!=null&&(ae=Math.max(ae,0),me=Math.min(me,Wt.count));let Ie=me-ae;if(Ie<0||Ie===1/0)return;Y.setup(tt,ct,Ot,ot,Ft);let ye,_e=w;if(Ft!==null&&(ye=k.get(Ft),_e=U,_e.setIndex(ye)),tt.isMesh)ct.wireframe===!0?(Et.setLineWidth(ct.wireframeLinewidth*Rt()),_e.setMode(z.LINES)):_e.setMode(z.TRIANGLES);else if(tt.isLine){let Yt=ct.linewidth;Yt===void 0&&(Yt=1),Et.setLineWidth(Yt*Rt()),tt.isLineSegments?_e.setMode(z.LINES):tt.isLineLoop?_e.setMode(z.LINE_LOOP):_e.setMode(z.LINE_STRIP)}else tt.isPoints?_e.setMode(z.POINTS):tt.isSprite&&_e.setMode(z.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))_e.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let Yt=tt._multiDrawStarts,Te=tt._multiDrawCounts,de=tt._multiDrawCount,rn=Ft?k.get(Ft).bytesPerElement:1,Vi=Ct.get(ct).currentProgram.getUniforms();for(let on=0;on<de;on++)Vi.setValue(z,"_gl_DrawID",on),_e.render(Yt[on]/rn,Te[on])}else if(tt.isInstancedMesh)_e.renderInstances(ae,Ie,tt.count);else if(ot.isInstancedBufferGeometry){let Yt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Te=Math.min(ot.instanceCount,Yt);_e.renderInstances(ae,Ie,Te)}else _e.render(ae,Ie)};function mt(P,Q,ot){P.transparent===!0&&P.side===Ae&&P.forceSinglePass===!1?(P.side=qe,P.needsUpdate=!0,Ce(P,Q,ot),P.side=wn,P.needsUpdate=!0,Ce(P,Q,ot),P.side=Ae):Ce(P,Q,ot)}this.compile=function(P,Q,ot=null){ot===null&&(ot=P),f=Nt.get(ot),f.init(Q),R.push(f),ot.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Q.layers)&&(f.pushLight(tt),tt.castShadow&&f.pushShadow(tt))}),P!==ot&&P.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Q.layers)&&(f.pushLight(tt),tt.castShadow&&f.pushShadow(tt))}),f.setupLights();let ct=new Set;return P.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let yt=tt.material;if(yt)if(Array.isArray(yt))for(let Lt=0;Lt<yt.length;Lt++){let Ot=yt[Lt];mt(Ot,ot,tt),ct.add(Ot)}else mt(yt,ot,tt),ct.add(yt)}),f=R.pop(),ct},this.compileAsync=function(P,Q,ot=null){let ct=this.compile(P,Q,ot);return new Promise(tt=>{function yt(){if(ct.forEach(function(Lt){Ct.get(Lt).currentProgram.isReady()&&ct.delete(Lt)}),ct.size===0){tt(P);return}setTimeout(yt,10)}Tt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let gt=null;function Gt(P){gt&&gt(P)}function St(){qt.stop()}function kt(){qt.start()}let qt=new bh;qt.setAnimationLoop(Gt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(P){gt=P,B.setAnimationLoop(P),P===null?qt.stop():qt.start()},B.addEventListener("sessionstart",St),B.addEventListener("sessionend",kt),this.render=function(P,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(Q),Q=B.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,Q,V),f=Nt.get(P,R.length),f.init(Q),R.push(f),ht.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Xt.setFromProjectionMatrix(ht,Tn,Q.reversedDepth),lt=this.localClippingEnabled,Vt=vt.init(this.clippingPlanes,lt),p=rt.get(P,E.length),p.init(),E.push(p),B.enabled===!0&&B.isPresenting===!0){let yt=b.xr.getDepthSensingMesh();yt!==null&&Qt(yt,Q,-1/0,b.sortObjects)}Qt(P,Q,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(dt,_t),it=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,it&&A.addToRenderList(p,P),this.info.render.frame++,Vt===!0&&vt.beginShadows();let ot=f.state.shadowsArray;y.render(ot,P,Q),Vt===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let ct=p.opaque,tt=p.transmissive;if(f.setupLights(),Q.isArrayCamera){let yt=Q.cameras;if(tt.length>0)for(let Lt=0,Ot=yt.length;Lt<Ot;Lt++){let Ft=yt[Lt];ce(ct,tt,P,Ft)}it&&A.render(P);for(let Lt=0,Ot=yt.length;Lt<Ot;Lt++){let Ft=yt[Lt];ie(p,P,Ft,Ft.viewport)}}else tt.length>0&&ce(ct,tt,P,Q),it&&A.render(P),ie(p,P,Q);V!==null&&D===0&&(xt.updateMultisampleRenderTarget(V),xt.updateRenderTargetMipmap(V)),P.isScene===!0&&P.onAfterRender(b,P,Q),Y.resetDefaultState(),v=-1,T=null,R.pop(),R.length>0?(f=R[R.length-1],Vt===!0&&vt.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function Qt(P,Q,ot,ct){if(P.visible===!1)return;if(P.layers.test(Q.layers)){if(P.isGroup)ot=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Q);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Xt.intersectsSprite(P)){ct&&Ht.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ht);let Lt=$.update(P),Ot=P.material;Ot.visible&&p.push(P,Lt,Ot,ot,Ht.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Xt.intersectsObject(P))){let Lt=$.update(P),Ot=P.material;if(ct&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ht.copy(P.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Ht.copy(Lt.boundingSphere.center)),Ht.applyMatrix4(P.matrixWorld).applyMatrix4(ht)),Array.isArray(Ot)){let Ft=Lt.groups;for(let Zt=0,Jt=Ft.length;Zt<Jt;Zt++){let Wt=Ft[Zt],ae=Ot[Wt.materialIndex];ae&&ae.visible&&p.push(P,Lt,ae,ot,Ht.z,Wt)}}else Ot.visible&&p.push(P,Lt,Ot,ot,Ht.z,null)}}let yt=P.children;for(let Lt=0,Ot=yt.length;Lt<Ot;Lt++)Qt(yt[Lt],Q,ot,ct)}function ie(P,Q,ot,ct){let tt=P.opaque,yt=P.transmissive,Lt=P.transparent;f.setupLightsView(ot),Vt===!0&&vt.setGlobalState(b.clippingPlanes,ot),ct&&Et.viewport(F.copy(ct)),tt.length>0&&se(tt,Q,ot),yt.length>0&&se(yt,Q,ot),Lt.length>0&&se(Lt,Q,ot),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function ce(P,Q,ot,ct){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ct.id]===void 0&&(f.state.transmissionRenderTarget[ct.id]=new gn(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float")?fs:Rn,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let yt=f.state.transmissionRenderTarget[ct.id],Lt=ct.viewport||F;yt.setSize(Lt.z*b.transmissionResolutionScale,Lt.w*b.transmissionResolutionScale);let Ot=b.getRenderTarget(),Ft=b.getActiveCubeFace(),Zt=b.getActiveMipmapLevel();b.setRenderTarget(yt),b.getClearColor(Z),et=b.getClearAlpha(),et<1&&b.setClearColor(16777215,.5),b.clear(),it&&A.render(ot);let Jt=b.toneMapping;b.toneMapping=Qn;let Wt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),f.setupLightsView(ct),Vt===!0&&vt.setGlobalState(b.clippingPlanes,ct),se(P,ot,ct),xt.updateMultisampleRenderTarget(yt),xt.updateRenderTargetMipmap(yt),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let me=0,Ie=Q.length;me<Ie;me++){let ye=Q[me],_e=ye.object,Yt=ye.geometry,Te=ye.material,de=ye.group;if(Te.side===Ae&&_e.layers.test(ct.layers)){let rn=Te.side;Te.side=qe,Te.needsUpdate=!0,oe(_e,ot,ct,Yt,Te,de),Te.side=rn,Te.needsUpdate=!0,ae=!0}}ae===!0&&(xt.updateMultisampleRenderTarget(yt),xt.updateRenderTargetMipmap(yt))}b.setRenderTarget(Ot,Ft,Zt),b.setClearColor(Z,et),Wt!==void 0&&(ct.viewport=Wt),b.toneMapping=Jt}function se(P,Q,ot){let ct=Q.isScene===!0?Q.overrideMaterial:null;for(let tt=0,yt=P.length;tt<yt;tt++){let Lt=P[tt],Ot=Lt.object,Ft=Lt.geometry,Zt=Lt.group,Jt=Lt.material;Jt.allowOverride===!0&&ct!==null&&(Jt=ct),Ot.layers.test(ot.layers)&&oe(Ot,Q,ot,Ft,Jt,Zt)}}function oe(P,Q,ot,ct,tt,yt){P.onBeforeRender(b,Q,ot,ct,tt,yt),P.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),tt.onBeforeRender(b,Q,ot,ct,P,yt),tt.transparent===!0&&tt.side===Ae&&tt.forceSinglePass===!1?(tt.side=qe,tt.needsUpdate=!0,b.renderBufferDirect(ot,Q,ct,tt,P,yt),tt.side=wn,tt.needsUpdate=!0,b.renderBufferDirect(ot,Q,ct,tt,P,yt),tt.side=Ae):b.renderBufferDirect(ot,Q,ct,tt,P,yt),P.onAfterRender(b,Q,ot,ct,tt,yt)}function Ce(P,Q,ot){Q.isScene!==!0&&(Q=Ut);let ct=Ct.get(P),tt=f.state.lights,yt=f.state.shadowsArray,Lt=tt.state.version,Ot=at.getParameters(P,tt.state,yt,Q,ot),Ft=at.getProgramCacheKey(Ot),Zt=ct.programs;ct.environment=P.isMeshStandardMaterial?Q.environment:null,ct.fog=Q.fog,ct.envMap=(P.isMeshStandardMaterial?ne:ue).get(P.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&P.envMap===null?Q.environmentRotation:P.envMapRotation,Zt===void 0&&(P.addEventListener("dispose",X),Zt=new Map,ct.programs=Zt);let Jt=Zt.get(Ft);if(Jt!==void 0){if(ct.currentProgram===Jt&&ct.lightsStateVersion===Lt)return Se(P,Ot),Jt}else Ot.uniforms=at.getUniforms(P),P.onBeforeCompile(Ot,b),Jt=at.acquireProgram(Ot,Ft),Zt.set(Ft,Jt),ct.uniforms=Ot.uniforms;let Wt=ct.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Wt.clippingPlanes=vt.uniform),Se(P,Ot),ct.needsLights=ni(P),ct.lightsStateVersion=Lt,ct.needsLights&&(Wt.ambientLightColor.value=tt.state.ambient,Wt.lightProbe.value=tt.state.probe,Wt.directionalLights.value=tt.state.directional,Wt.directionalLightShadows.value=tt.state.directionalShadow,Wt.spotLights.value=tt.state.spot,Wt.spotLightShadows.value=tt.state.spotShadow,Wt.rectAreaLights.value=tt.state.rectArea,Wt.ltc_1.value=tt.state.rectAreaLTC1,Wt.ltc_2.value=tt.state.rectAreaLTC2,Wt.pointLights.value=tt.state.point,Wt.pointLightShadows.value=tt.state.pointShadow,Wt.hemisphereLights.value=tt.state.hemi,Wt.directionalShadowMap.value=tt.state.directionalShadowMap,Wt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Wt.spotShadowMap.value=tt.state.spotShadowMap,Wt.spotLightMatrix.value=tt.state.spotLightMatrix,Wt.spotLightMap.value=tt.state.spotLightMap,Wt.pointShadowMap.value=tt.state.pointShadowMap,Wt.pointShadowMatrix.value=tt.state.pointShadowMatrix),ct.currentProgram=Jt,ct.uniformsList=null,Jt}function Re(P){if(P.uniformsList===null){let Q=P.currentProgram.getUniforms();P.uniformsList=vs.seqWithValue(Q.seq,P.uniforms)}return P.uniformsList}function Se(P,Q){let ot=Ct.get(P);ot.outputColorSpace=Q.outputColorSpace,ot.batching=Q.batching,ot.batchingColor=Q.batchingColor,ot.instancing=Q.instancing,ot.instancingColor=Q.instancingColor,ot.instancingMorph=Q.instancingMorph,ot.skinning=Q.skinning,ot.morphTargets=Q.morphTargets,ot.morphNormals=Q.morphNormals,ot.morphColors=Q.morphColors,ot.morphTargetsCount=Q.morphTargetsCount,ot.numClippingPlanes=Q.numClippingPlanes,ot.numIntersection=Q.numClipIntersection,ot.vertexAlphas=Q.vertexAlphas,ot.vertexTangents=Q.vertexTangents,ot.toneMapping=Q.toneMapping}function Hn(P,Q,ot,ct,tt){Q.isScene!==!0&&(Q=Ut),xt.resetTextureUnits();let yt=Q.fog,Lt=ct.isMeshStandardMaterial?Q.environment:null,Ot=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ai,Ft=(ct.isMeshStandardMaterial?ne:ue).get(ct.envMap||Lt),Zt=ct.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Jt=!!ot.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Wt=!!ot.morphAttributes.position,ae=!!ot.morphAttributes.normal,me=!!ot.morphAttributes.color,Ie=Qn;ct.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ie=b.toneMapping);let ye=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,_e=ye!==void 0?ye.length:0,Yt=Ct.get(ct),Te=f.state.lights;if(Vt===!0&&(lt===!0||P!==T)){let $e=P===T&&ct.id===v;vt.setState(ct,P,$e)}let de=!1;ct.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Te.state.version||Yt.outputColorSpace!==Ot||tt.isBatchedMesh&&Yt.batching===!1||!tt.isBatchedMesh&&Yt.batching===!0||tt.isBatchedMesh&&Yt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Yt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Yt.instancing===!1||!tt.isInstancedMesh&&Yt.instancing===!0||tt.isSkinnedMesh&&Yt.skinning===!1||!tt.isSkinnedMesh&&Yt.skinning===!0||tt.isInstancedMesh&&Yt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Yt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Yt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Yt.instancingMorph===!1&&tt.morphTexture!==null||Yt.envMap!==Ft||ct.fog===!0&&Yt.fog!==yt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==vt.numPlanes||Yt.numIntersection!==vt.numIntersection)||Yt.vertexAlphas!==Zt||Yt.vertexTangents!==Jt||Yt.morphTargets!==Wt||Yt.morphNormals!==ae||Yt.morphColors!==me||Yt.toneMapping!==Ie||Yt.morphTargetsCount!==_e)&&(de=!0):(de=!0,Yt.__version=ct.version);let rn=Yt.currentProgram;de===!0&&(rn=Ce(ct,Q,tt));let Vi=!1,on=!1,As=!1,we=rn.getUniforms(),dn=Yt.uniforms;if(Et.useProgram(rn.program)&&(Vi=!0,on=!0,As=!0),ct.id!==v&&(v=ct.id,on=!0),Vi||T!==P){Et.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),we.setValue(z,"projectionMatrix",P.projectionMatrix),we.setValue(z,"viewMatrix",P.matrixWorldInverse);let en=we.map.cameraPosition;en!==void 0&&en.setValue(z,Pt.setFromMatrixPosition(P.matrixWorld)),Dt.logarithmicDepthBuffer&&we.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&we.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),T!==P&&(T=P,on=!0,As=!0)}if(tt.isSkinnedMesh){we.setOptional(z,tt,"bindMatrix"),we.setOptional(z,tt,"bindMatrixInverse");let $e=tt.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),we.setValue(z,"boneTexture",$e.boneTexture,xt))}tt.isBatchedMesh&&(we.setOptional(z,tt,"batchingTexture"),we.setValue(z,"batchingTexture",tt._matricesTexture,xt),we.setOptional(z,tt,"batchingIdTexture"),we.setValue(z,"batchingIdTexture",tt._indirectTexture,xt),we.setOptional(z,tt,"batchingColorTexture"),tt._colorsTexture!==null&&we.setValue(z,"batchingColorTexture",tt._colorsTexture,xt));let fn=ot.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&x.update(tt,ot,rn),(on||Yt.receiveShadow!==tt.receiveShadow)&&(Yt.receiveShadow=tt.receiveShadow,we.setValue(z,"receiveShadow",tt.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(dn.envMap.value=Ft,dn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&Q.environment!==null&&(dn.envMapIntensity.value=Q.environmentIntensity),on&&(we.setValue(z,"toneMappingExposure",b.toneMappingExposure),Yt.needsLights&&Nn(dn,As),yt&&ct.fog===!0&&ft.refreshFogUniforms(dn,yt),ft.refreshMaterialUniforms(dn,ct,j,nt,f.state.transmissionRenderTarget[P.id]),vs.upload(z,Re(Yt),dn,xt)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(vs.upload(z,Re(Yt),dn,xt),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&we.setValue(z,"center",tt.center),we.setValue(z,"modelViewMatrix",tt.modelViewMatrix),we.setValue(z,"normalMatrix",tt.normalMatrix),we.setValue(z,"modelMatrix",tt.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){let $e=ct.uniformsGroups;for(let en=0,_a=$e.length;en<_a;en++){let xi=$e[en];I.update(xi,rn),I.bind(xi,rn)}}return rn}function Nn(P,Q){P.ambientLightColor.needsUpdate=Q,P.lightProbe.needsUpdate=Q,P.directionalLights.needsUpdate=Q,P.directionalLightShadows.needsUpdate=Q,P.pointLights.needsUpdate=Q,P.pointLightShadows.needsUpdate=Q,P.spotLights.needsUpdate=Q,P.spotLightShadows.needsUpdate=Q,P.rectAreaLights.needsUpdate=Q,P.hemisphereLights.needsUpdate=Q}function ni(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(P,Q,ot){let ct=Ct.get(P);ct.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Ct.get(P.texture).__webglTexture=Q,Ct.get(P.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:ot,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Q){let ot=Ct.get(P);ot.__webglFramebuffer=Q,ot.__useDefaultFramebuffer=Q===void 0};let Es=z.createFramebuffer();this.setRenderTarget=function(P,Q=0,ot=0){V=P,L=Q,D=ot;let ct=!0,tt=null,yt=!1,Lt=!1;if(P){let Ft=Ct.get(P);if(Ft.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(z.FRAMEBUFFER,null),ct=!1;else if(Ft.__webglFramebuffer===void 0)xt.setupRenderTarget(P);else if(Ft.__hasExternalTextures)xt.rebindTextures(P,Ct.get(P.texture).__webglTexture,Ct.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Wt=P.depthTexture;if(Ft.__boundDepthTexture!==Wt){if(Wt!==null&&Ct.has(Wt)&&(P.width!==Wt.image.width||P.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(P)}}let Zt=P.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Lt=!0);let Jt=Ct.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Jt[Q])?tt=Jt[Q][ot]:tt=Jt[Q],yt=!0):P.samples>0&&xt.useMultisampledRTT(P)===!1?tt=Ct.get(P).__webglMultisampledFramebuffer:Array.isArray(Jt)?tt=Jt[ot]:tt=Jt,F.copy(P.viewport),q.copy(P.scissor),C=P.scissorTest}else F.copy(pt).multiplyScalar(j).floor(),q.copy(bt).multiplyScalar(j).floor(),C=Bt;if(ot!==0&&(tt=Es),Et.bindFramebuffer(z.FRAMEBUFFER,tt)&&ct&&Et.drawBuffers(P,tt),Et.viewport(F),Et.scissor(q),Et.setScissorTest(C),yt){let Ft=Ct.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ft.__webglTexture,ot)}else if(Lt){let Ft=Q;for(let Zt=0;Zt<P.textures.length;Zt++){let Jt=Ct.get(P.textures[Zt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Zt,Jt.__webglTexture,ot,Ft)}}else if(P!==null&&ot!==0){let Ft=Ct.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ft.__webglTexture,ot)}v=-1},this.readRenderTargetPixels=function(P,Q,ot,ct,tt,yt,Lt,Ot=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Ct.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft){Et.bindFramebuffer(z.FRAMEBUFFER,Ft);try{let Zt=P.textures[Ot],Jt=Zt.format,Wt=Zt.type;if(!Dt.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=P.width-ct&&ot>=0&&ot<=P.height-tt&&(P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ot),z.readPixels(Q,ot,ct,tt,G.convert(Jt),G.convert(Wt),yt))}finally{let Zt=V!==null?Ct.get(V).__webglFramebuffer:null;Et.bindFramebuffer(z.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(P,Q,ot,ct,tt,yt,Lt,Ot=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Ct.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft)if(Q>=0&&Q<=P.width-ct&&ot>=0&&ot<=P.height-tt){Et.bindFramebuffer(z.FRAMEBUFFER,Ft);let Zt=P.textures[Ot],Jt=Zt.format,Wt=Zt.type;if(!Dt.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ae),z.bufferData(z.PIXEL_PACK_BUFFER,yt.byteLength,z.STREAM_READ),P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ot),z.readPixels(Q,ot,ct,tt,G.convert(Jt),G.convert(Wt),0);let me=V!==null?Ct.get(V).__webglFramebuffer:null;Et.bindFramebuffer(z.FRAMEBUFFER,me);let Ie=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Kl(z,Ie,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ae),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,yt),z.deleteBuffer(ae),z.deleteSync(Ie),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Q=null,ot=0){let ct=Math.pow(2,-ot),tt=Math.floor(P.image.width*ct),yt=Math.floor(P.image.height*ct),Lt=Q!==null?Q.x:0,Ot=Q!==null?Q.y:0;xt.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,ot,0,0,Lt,Ot,tt,yt),Et.unbindTexture()};let ga=z.createFramebuffer(),yr=z.createFramebuffer();this.copyTextureToTexture=function(P,Q,ot=null,ct=null,tt=0,yt=null){yt===null&&(tt!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=tt,tt=0):yt=0);let Lt,Ot,Ft,Zt,Jt,Wt,ae,me,Ie,ye=P.isCompressedTexture?P.mipmaps[yt]:P.image;if(ot!==null)Lt=ot.max.x-ot.min.x,Ot=ot.max.y-ot.min.y,Ft=ot.isBox3?ot.max.z-ot.min.z:1,Zt=ot.min.x,Jt=ot.min.y,Wt=ot.isBox3?ot.min.z:0;else{let fn=Math.pow(2,-tt);Lt=Math.floor(ye.width*fn),Ot=Math.floor(ye.height*fn),P.isDataArrayTexture?Ft=ye.depth:P.isData3DTexture?Ft=Math.floor(ye.depth*fn):Ft=1,Zt=0,Jt=0,Wt=0}ct!==null?(ae=ct.x,me=ct.y,Ie=ct.z):(ae=0,me=0,Ie=0);let _e=G.convert(Q.format),Yt=G.convert(Q.type),Te;Q.isData3DTexture?(xt.setTexture3D(Q,0),Te=z.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(xt.setTexture2DArray(Q,0),Te=z.TEXTURE_2D_ARRAY):(xt.setTexture2D(Q,0),Te=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Q.unpackAlignment);let de=z.getParameter(z.UNPACK_ROW_LENGTH),rn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Vi=z.getParameter(z.UNPACK_SKIP_PIXELS),on=z.getParameter(z.UNPACK_SKIP_ROWS),As=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ye.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Zt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Jt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Wt);let we=P.isDataArrayTexture||P.isData3DTexture,dn=Q.isDataArrayTexture||Q.isData3DTexture;if(P.isDepthTexture){let fn=Ct.get(P),$e=Ct.get(Q),en=Ct.get(fn.__renderTarget),_a=Ct.get($e.__renderTarget);Et.bindFramebuffer(z.READ_FRAMEBUFFER,en.__webglFramebuffer),Et.bindFramebuffer(z.DRAW_FRAMEBUFFER,_a.__webglFramebuffer);for(let xi=0;xi<Ft;xi++)we&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ct.get(P).__webglTexture,tt,Wt+xi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ct.get(Q).__webglTexture,yt,Ie+xi)),z.blitFramebuffer(Zt,Jt,Lt,Ot,ae,me,Lt,Ot,z.DEPTH_BUFFER_BIT,z.NEAREST);Et.bindFramebuffer(z.READ_FRAMEBUFFER,null),Et.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(tt!==0||P.isRenderTargetTexture||Ct.has(P)){let fn=Ct.get(P),$e=Ct.get(Q);Et.bindFramebuffer(z.READ_FRAMEBUFFER,ga),Et.bindFramebuffer(z.DRAW_FRAMEBUFFER,yr);for(let en=0;en<Ft;en++)we?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,fn.__webglTexture,tt,Wt+en):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fn.__webglTexture,tt),dn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$e.__webglTexture,yt,Ie+en):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,$e.__webglTexture,yt),tt!==0?z.blitFramebuffer(Zt,Jt,Lt,Ot,ae,me,Lt,Ot,z.COLOR_BUFFER_BIT,z.NEAREST):dn?z.copyTexSubImage3D(Te,yt,ae,me,Ie+en,Zt,Jt,Lt,Ot):z.copyTexSubImage2D(Te,yt,ae,me,Zt,Jt,Lt,Ot);Et.bindFramebuffer(z.READ_FRAMEBUFFER,null),Et.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else dn?P.isDataTexture||P.isData3DTexture?z.texSubImage3D(Te,yt,ae,me,Ie,Lt,Ot,Ft,_e,Yt,ye.data):Q.isCompressedArrayTexture?z.compressedTexSubImage3D(Te,yt,ae,me,Ie,Lt,Ot,Ft,_e,ye.data):z.texSubImage3D(Te,yt,ae,me,Ie,Lt,Ot,Ft,_e,Yt,ye):P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,yt,ae,me,Lt,Ot,_e,Yt,ye.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,yt,ae,me,ye.width,ye.height,_e,ye.data):z.texSubImage2D(z.TEXTURE_2D,yt,ae,me,Lt,Ot,_e,Yt,ye);z.pixelStorei(z.UNPACK_ROW_LENGTH,de),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,rn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Vi),z.pixelStorei(z.UNPACK_SKIP_ROWS,on),z.pixelStorei(z.UNPACK_SKIP_IMAGES,As),yt===0&&Q.generateMipmaps&&z.generateMipmap(Te),Et.unbindTexture()},this.initRenderTarget=function(P){Ct.get(P).__webglFramebuffer===void 0&&xt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?xt.setTextureCube(P,0):P.isData3DTexture?xt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?xt.setTexture2DArray(P,0):xt.setTexture2D(P,0),Et.unbindTexture()},this.resetState=function(){L=0,D=0,V=null,Et.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var be=(i,t)=>.09*Math.sin(i*.075)+.1*Math.sin(t*.18)+Math.max(0,Math.abs(t)-37)*.012*(1+Math.sin(i*.025+t*.1)),He=i=>3.5*Math.sin(i/55)+2.1*Math.sin(i/26),Pn=i=>14.9+1.4*Math.sin(i/38+.7),mr=-.73,Fe=-4,Ms=21.8,Ss=10.6,sn=i=>{let t=Math.min(1,Math.abs(i-He(Fe))/Ms);return .13+5.65*Math.pow(1-t*t,1.28)},gr={west:-164,east:178,south:75,north:-74};function bs(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}var Be=[{name:"\u90CA\u91CE",area:"\u57CE\u5916\u7530\u7574",x:-126,z:25,look:[-112,1.9,18],sound:"field",note:"\u5C0F\u8DEF\u7A7F\u8FC7\u9EA6\u5730\u3002\u7530\u57C2\u90A3\u5934\u6709\u4EBA\u6311\u62C5\uFF0C\u6CBF\u6CB3\u518D\u8D70\u4E00\u6BB5\u5C31\u662F\u8D27\u6808\u3002",path:[[-115,23],[-102,21.2],[-90,20]]},{name:"\u6C74\u6CB3",area:"\u6CB3\u5CB8\u7EA4\u9053",x:-79,z:18,look:[-53,1,4],sound:"river",note:"\u5DE1\u5352\u6CBF\u7740\u7EA4\u9053\u8D70\u8FC7\uFF0C\u6CB3\u4E2D\u8D27\u8239\u5F80\u6765\u3002\u9760\u8FD1\u8679\u6865\u65F6\uFF0C\u8239\u5DE5\u628A\u6845\u6746\u653E\u4F4E\u3002",path:[[-68,18],[-55,18],[-46,19]]},{name:"\u7801\u5934",area:"\u6CB3\u5CB8\u8D27\u6808",x:-36,z:18,look:[-27,1.1,12],sound:"dock",note:"\u811A\u592B\u6311\u8D27\u8FC7\u8DF3\u677F\uFF0C\u5DE1\u5352\u6CBF\u7740\u8D27\u6808\u5916\u4FA7\u5F80\u8FD4\u3002\u8F66\u9A6C\u4ECE\u5378\u8D27\u7684\u4EBA\u7FA4\u65C1\u7ECF\u8FC7\u3002",path:[[-27,20],[-16,21],[-7,23],[-4,22]]},{name:"\u8679\u6865",area:"\u6C74\u6CB3\u6E21\u53E3",x:-4,z:-.1,look:[-3.5,5.8,-11],sound:"market",note:"\u6865\u680F\u8FB9\u6446\u7740\u679C\u5B50\u3001\u80E1\u997C\u548C\u8336\u6C34\u3002\u7AD9\u5728\u644A\u95F4\u5F80\u6CB3\u91CC\u671B\uFF0C\u8FD8\u80FD\u770B\u89C1\u8D27\u8239\u8FC7\u6865\u3002",path:[[-4,-10],[-4,-22],[3,-23],[14,-23]]},{name:"\u8857\u5E02",area:"\u57CE\u5916\u5927\u8857",x:23,z:-24,look:[42,1.3,-24],sound:"market",note:"\u5E03\u5377\u548C\u679C\u5B50\u6446\u5728\u68DA\u4E0B\uFF0C\u4E70\u5BA2\u5728\u644A\u524D\u6311\u62E3\u3002\u8D76\u8DEF\u7684\u9A91\u624B\u6CBF\u8857\u5FC3\u7ECF\u8FC7\u3002",path:[[32,-24],[43,-25],[46,-26.2]]},{name:"\u5546\u94FA",area:"\u6CBF\u8857\u8D27\u94FA",x:48,z:-30.7,look:[49,1.35,-34.6],sound:"shop",note:"\u5E97\u4E3B\u5728\u67DC\u540E\u62DB\u547C\u3002\u4E70\u5BA2\u51D1\u8FD1\u770B\u9752\u74F7\uFF0C\u6311\u597D\u4FBF\u8F6C\u8EAB\u51FA\u95E8\u3002",path:[[48,-27],[53,-24],[64,-24],[68,-27]]},{name:"\u9152\u697C",area:"\u4E34\u8857\u9152\u8086",x:69,z:-31,look:[65.7,1.46,-36],sound:"shop",note:"\u4ECE\u6728\u67F1\u4E4B\u95F4\u8D70\u8FDB\u53BB\uFF0C\u6CBF\u7A97\u6446\u7740\u684C\u51F3\u3002\u5C4B\u5916\u7684\u8857\u58F0\u8FD8\u542C\u5F97\u89C1\u3002",path:[[69,-27],[74,-24],[82,-24],[90,-25]]},{name:"\u57CE\u95E8",area:"\u5165\u57CE\u95E8\u9053",x:90.9,z:-25,look:[105,5.6,-25],sound:"market",note:"\u7A7F\u8FC7\u95E8\u6D1E\u540E\uFF0C\u8F6C\u5411\u4E24\u4FA7\u5899\u6839\u627E\u300C\u767B\u57CE\u300D\u6728\u724C\u3002\u6CBF\u7A84\u9636\u4E0A\u53BB\uFF0C\u5728\u5E73\u53F0\u6298\u8FD4\u4FBF\u53EF\u767B\u57CE\u3002",path:[[105,-25],[115,-25],[124,-25],[129,-29],[129,-35]]},{name:"\u57CE\u5185\u8857\u5DF7",area:"\u574A\u5DF7\u4EBA\u5BB6",x:129,z:-45,look:[130,1.6,-59],sound:"lane",note:"\u5C4B\u6A90\u4E0B\u667E\u7740\u5E03\uFF0C\u5DE1\u5352\u6CBF\u574A\u5DF7\u8D70\u8FC7\u3002\u7A84\u5DF7\u4E24\u5934\u90FD\u6709\u901A\u5F80\u8857\u5E02\u7684\u5C0F\u8DEF\u3002",path:[]}],Fc=[{position:[36,8.4,24.3],look:[-11,3.2,7.5]},{position:[-40,9,26],look:[8,3,-11]},{position:[5,23,-12],look:[48,0,-25]}];function Ch(){let i=bs(5905),t=256,e=new Float32Array(4096).map(()=>i()),n=jt.lerp;function s(u,h){let d=Math.floor(u),m=Math.floor(h),g=u-d,M=h-m;g*=g*(3-2*g),M*=M*(3-2*M);let p=(f,E)=>e[(E%64+64)%64*64+(f%64+64)%64];return n(n(p(d,m),p(d+1,m),g),n(p(d,m+1),p(d+1,m+1),g),M)}let r=(u,h)=>{let d=document.createElement("canvas");d.width=d.height=t;let m=d.getContext("2d"),g=m.createImageData(t,t);for(let p=0;p<t;p++)for(let f=0;f<t;f++){let E=f/t,R=p/t,b=s(E*8,R*8),N=s(E*64,R*64),L=1+(b-.5)*.22+(N-.5)*.15+(i()-.5)*.09;if(u==="wood"){let V=s(E*4,R*4)*2.1+Math.sin(R*7+E*3)*.5,v=Math.pow(.5+.5*Math.sin(E*400+V*7),8);L+=(s(E*56,R*4)-.5)*.29-v*.13}if(u==="cloth"&&(L+=(f%3===0?-.054:.024)+(p%3===0?-.055:.024)),u==="stone"||u==="pave"){let V=Math.floor(R*6),v=u==="pave"?.045:.013,T=(E*5+V*.5+v*Math.sin(p*.17))%1,F=R*6%1;T<.037||F<.062?L*=u==="pave"?.78:.64:L+=(s(Math.floor(E*5+V*.5)+9,V+11)-.5)*.19}if(u==="tile"){let V=E*8%1,v=R*6%1,T=Math.pow(Math.sin(Math.PI*V),.6);L=L*(.72+T*.3)-(v<.07?.19:0),V<.065&&(L+=.19)}u==="grass"&&(L+=(s(E*18,R*32)-.5)*.26);let D=(p*t+f)*4;for(let V=0;V<3;V++)g.data[D+V]=h[V]*L;g.data[D+3]=255}m.putImageData(g,0,0);let M=new On(d);return M.colorSpace=Le,M.wrapS=M.wrapT=Ei,M.anisotropy=8,M},o={};for(let[u,h]of Object.entries({oldwood:["wood",[161,121,85]],timber:["wood",[133,96,67]],beam:["wood",[106,77,55]],plaster:["plain",[207,180,134]],wall:["plain",[189,167,133]],stone:["stone",[155,150,131]],tile:["tile",[123,121,113]],tileDark:["tile",[112,111,104]],brick:["stone",[135,129,110]],linen:["cloth",[224,197,142]],sage:["cloth",[144,153,118]],rust:["cloth",[160,109,75]],straw:["cloth",[189,155,92]],soil:["plain",[159,138,98]],path:["plain",[174,151,112]],pave:["pave",[166,154,128]],grass:["grass",[119,132,66]]}))o[u]=r(...h);let a=document.createElement("canvas");a.width=a.height=128;let l=a.getContext("2d"),c=l.createImageData(128,128);for(let u=0;u<128;u++)for(let h=0;h<128;h++){let d=2*Math.PI/128,m=h*d*7+u*d*2,g=h*d*3-u*d*8+Math.sin(h*d*2),M=h*d*9+u*d*11,p=(u*128+h)*4;c.data[p]=127+32*Math.cos(m)+23*Math.cos(g)+9*Math.sin(M),c.data[p+1]=127+17*Math.cos(m)-33*Math.cos(g)+13*Math.sin(M),c.data[p+2]=244,c.data[p+3]=255}return l.putImageData(c,0,0),o.waterNormal=new On(a),o.waterNormal.wrapS=o.waterNormal.wrapT=Ei,o}var Mt=(i,t,e)=>new J(i,t,e),pg=Mt(0,1,0),Rh=new Bn(1,1,1),Oe=new ln(1,1,1,9),Ts=new ln(.7,1,1,10),mg=new ln(1,1,1,7),_r=new Qs(1,0),gg=new Ii(1);function vn(i,t={}){return new Cn({map:i,roughness:.91,...t})}function Ih(i,t,e){let n=bs(1119),s={};for(let y of["oldwood","timber","beam","plaster","wall","stone","tile","tileDark","brick","linen","sage","rust","straw","soil","path","pave","grass"])s[y]=vn(t[y]);Object.assign(s,{bark:vn(t.beam,{color:9210728}),lacquer:vn(t.timber,{color:11758416}),black:vn(null,{color:3220762}),ceramic:vn(null,{color:10662806,roughness:.34,metalness:.03}),paleCeramic:vn(null,{color:13220237,roughness:.49}),iron:vn(null,{color:5588789,roughness:.59,metalness:.33}),green:vn(null,{color:8423756}),foliage:vn(null,{vertexColors:!0,side:Ae,roughness:1})});let r=s.linen.clone();r.side=Ae,r.onBeforeCompile=y=>{y.uniforms.windTime=e,y.vertexShader=`uniform float windTime;
`+y.vertexShader,y.vertexShader=y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.y += .065 * sin(windTime * 1.8 + position.x * 2.4 + position.z * 3.0);`)},s.awning=r,s.foliage.onBeforeCompile=y=>{y.uniforms.windTime=e,y.vertexShader=`uniform float windTime;
`+y.vertexShader,y.vertexShader=y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x += .060 * sin(windTime * 1.40 + position.z * .28 + position.y * 1.32) * min(position.y,.9);`)};let o=document.createElement("canvas");o.width=o.height=128;let a=o.getContext("2d"),l=bs(883),c=["#738640","#9aa65b","#7e914b","#637742","#879750","#a1aa63","#5c6d38"];for(let y=0;y<520;y++){let A=l()*Math.PI*2,x=Math.sqrt(l())*.95,w=64+Math.cos(A)*x*59,U=64+Math.sin(A)*x*56,G=2.1+l()*4.2;a.fillStyle=c[Math.floor(l()*c.length)],a.beginPath(),a.ellipse(w,U,G,G*(.25+l()*.29),A-l()*1.4,0,Math.PI*2),a.fill()}let u=new On(o);u.colorSpace=Le,u.anisotropy=4,s.bough=vn(u,{alphaTest:.45,side:Ae}),s.bough.onBeforeCompile=s.foliage.onBeforeCompile;let h=new Map,d=new Map,m=[],g=[],M=[],p=[],f=[],E=[],R=[],b=[],N=[],L,D=new Map,V=new De,v=()=>.8+n()*.23,T=new wt;function F(y,A,x,w,U=0,G=v()){let Y=A+"/"+y.id;h.has(Y)||h.set(Y,{geo:y,mat:A,entries:[]}),V.position.copy(x),V.scale.copy(w),typeof U=="number"?V.rotation.set(0,U,0):V.quaternion.copy(U),V.updateMatrix(),h.get(Y).entries.push([V.matrix.clone(),G])}function q(y,A,x,w,U,G,Y,I=0,S){F(Rh,y,Mt(A,x,w),Mt(U,G,Y),I,S)}function C(y,A,x,w,U=w,G=Rh){let Y=x.clone().sub(A),I=new je().setFromUnitVectors(pg,Y.clone().normalize());F(G,y,A.clone().lerp(x,.5),Mt(w,Y.length(),U),I)}function Z(y,A,x,w,U,G=[0,0,1,1],Y=[1,1,1]){d.has(y)||d.set(y,{points:[],uv:[],colors:[]});let I=d.get(y);for(let O of[A,x,w,A,w,U])I.points.push(O.x,O.y,O.z),I.colors.push(...Y);let[S,B,H,W]=G;I.uv.push(S,B,H,B,H,W,S,B,H,W,S,W)}function et(y,A,x,w){m.push({x0:y-x/2,x1:y+x/2,z0:A-w/2,z1:A+w/2})}function K(y,A,x,w){let U=Math.cos(w),G=Math.sin(w);return(Y,I,S)=>Mt(y+Y*U+S*G,A+I,x-Y*G+S*U)}function nt(y,A,x,w,U,G,Y,I,S,B){let H=y(w,U,G);q(x,H.x,H.y,H.z,Y,I,S,A,B)}function j(y,A,x,w,U){let G=y(A-w/2,0,x-U/2),Y=y(A+w/2,0,x+U/2);et((G.x+Y.x)/2,(G.z+Y.z)/2,Math.abs(G.x-Y.x),Math.abs(G.z-Y.z))}function dt(y,A,x,w,U){let G=y(A-w/2,0,x-U/2),Y=y(A+w/2,0,x+U/2);N.push({x0:Math.min(G.x,Y.x),x1:Math.max(G.x,Y.x),z0:Math.min(G.z,Y.z),z1:Math.max(G.z,Y.z)})}function _t(y,A,x,w,U,G,Y){E.push({seller:y(x,0,w),buyer:y(x,0,U),entry:y(x+.69,0,G),yaw:A,goods:Y})}function pt(y,A){let x=y+"/"+A;if(D.has(x))return D.get(x);let w=document.createElement("canvas");w.width=A?96:200,w.height=A?200:74;let U=w.getContext("2d");U.fillStyle=A?"#bca877":"#5b3726",U.fillRect(0,0,w.width,w.height),U.strokeStyle=A?"#6a4129":"#a9945e",U.lineWidth=4,U.strokeRect(7,7,w.width-14,w.height-14),U.fillStyle=A?"#342617":"#ece0b2",U.textAlign="center",U.textBaseline="middle",U.font="bold "+(A?61:47)+'px "Songti SC", SimSun, serif',A?[...y].forEach((I,S)=>U.fillText(I,48,55+S*76)):U.fillText(y,w.width/2,w.height/2+1);let G=new On(w);G.colorSpace=Le;let Y=vn(G,{side:Ae});return D.set(x,Y),Y}function bt(y,A,x,w,U,G,Y,I,S=!1){let B=new xe(new _n(Y,I),pt(x,S));B.position.copy(y(w,U,G)),B.rotation.y=A,i.add(B)}function Bt(){for(let y of[-1,1]){let A=x=>He(x)+y*Pn(x);for(let x=-267;x<273;x+=3){let w=x+3,U=y>0?x<-88||x>70:x<-46||x>182;for(let I=0;I<20;I++){let B=(st,mt)=>be(st,mt)-.04,H=A(x)+y*I*4.15,W=A(x)+y*(I+1)*4.15,O=A(w)+y*I*4.15,X=A(w)+y*(I+1)*4.15,ut=.91+.07*Math.sin(x*.037+I*.59)+.09*n();Z(U?"grass":"soil",Mt(x,B(x,H),H),Mt(x,B(x,W),W),Mt(w,B(w,X),X),Mt(w,B(w,O),O),[x/5,H/5,w/5,W/5],[ut,ut,ut])}let G=A(x),Y=A(w);Z("soil",Mt(x,be(x,G),G),Mt(w,be(w,Y),Y),Mt(w,-1.61,Y-y*1.45),Mt(x,-1.61,G-y*1.45),[x/4,0,w/4,1])}}for(let y=0;y<850;y++){let A=-179+n()*367,x=n()<.55?1:-1,U=He(A)+x*Pn(A)+x*(n()*.64-.31);if(A>-11&&A<4||A>-47&&A<-20&&x===1)continue;let G=.17+n()*.62;F(_r,"stone",Mt(A,be(A,U)-G*.25,U),Mt(G,.22+G*.55,G*.57),n()*6.28)}}function Xt(y,A,x="path"){for(let w=1;w<y.length;w++){let[U,G]=y[w-1],[Y,I]=y[w],S=Y-U,B=I-G,H=Math.hypot(S,B),W=Math.ceil(H/1.75),O=-B/H,X=S/H,ut=(st,mt)=>{let gt=1+.036*Math.sin((U+S*st)*1.67+(G+B*st)*.79),Gt=U+S*st+O*mt*gt,St=G+B*st+X*mt*gt;return Mt(Gt,be(Gt,St)+(x==="pave"?.044:.023),St)};for(let st=0;st<W;st++){let mt=H/W/4.1;Z(x,ut(st/W,-A/2),ut(st/W,A/2),ut((st+1)/W,A/2),ut((st+1)/W,-A/2),[0,st*mt,A/4.4,(st+1)*mt])}}}function Vt(y,A,x,w,U,G="tile",Y=!0){let I=A/2,S=x/2,B=(H,W,O)=>{let X=.29*Math.pow(Math.min(1,Math.abs(H/I)),5.4);return y(H,w+U*Math.pow(1-W,1.37)+X*(.46+.89*W*W),O*W*S)};for(let H of[-1,1]){for(let O=0;O<8;O++)for(let X=0;X<12;X++){let ut=-I+A*X/12,st=-I+A*(X+1)/12;Z(G,B(ut,O/8,H),B(st,O/8,H),B(st,(O+1)/8,H),B(ut,(O+1)/8,H),[ut/2.2,O*x/(8*3.5),st/2.2,(O+1)*x/(8*3.5)])}for(let O=0;O<12;O++){let X=B(-I+A*O/12,1,H),ut=B(-I+A*(O+1)/12,1,H);C("beam",X,ut,.16,.19)}if(Y){for(let O=0;O<Math.floor(A/.28);O++){let X=-I+.12+O*.28,ut=B(X,.94,H),st=B(X,1,H);if(st.z+=H*.025,ut.y+=.024,st.y+=.02,C(G,ut,st,.074,.074,mg),O%2===0){let mt=B(X,1,H);C("timber",mt.clone().add(Mt(0,-.1,0)),B(X,.82,H).add(Mt(0,-.23,0)),.084,.092)}}for(let O of[-I,I])for(let X=0;X<8;X++)C("beam",B(O,X/8,H),B(O,(X+1)/8,H),.14,.11)}}for(let H=0;H<12;H++){let W=B(-I+A*H/12,0,1),O=B(-I+A*(H+1)/12,0,1);W.y+=.073,O.y+=.073,C(G,W,O,.175,.155,Oe)}for(let H of[-1,1]){let W=B(H*I,0,1),O=B(H*I,0,1);O.x+=H*.21,O.y+=.23,C(G,W,O,.13,.13,Oe)}}function lt(y,A,x,w,U,G,Y){let I=(S,B,H,W,O,X,ut)=>nt(y,A,S,B,H,W,O,X,ut);I("black",x,w,U,G,Y,.075);for(let S of[-1,1])I("oldwood",x+S*G/2,w,U+.042,.095,Y+.1,.1),I("oldwood",x,w+S*Y/2,U+.042,G,.09,.1);for(let S=1;S<7;S++)I("timber",x-G/2+S*G/7,w,U+.051,.041,Y,.058);for(let S=1;S<5;S++)I("timber",x,w-Y/2+S*Y/5,U+.049,G,.036,.058)}function ht(y,A,x,w=.5,U="ceramic"){F(Ts,U,Mt(y,A+w*.24,x),Mt(w*.33,w*.47,w*.33),n()*6),F(Oe,U,Mt(y,A+w*.49,x),Mt(w*.24,w*.13,w*.24),0),F(Oe,"black",Mt(y,A+w*.562,x),Mt(w*.15,.012,w*.15),0)}function Pt(y,A,x,w=.73){q("oldwood",y,A+w*.38,x,w,w*.76,w*.77);for(let U of[-1,1])q("beam",y+U*w*.31,A+w*.4,x,w*.1,w*.82,w*.81);q("timber",y,A+w*.78,x,w*1.02,.057,w*.79)}function Ht(y,A,x,w=.74){F(Ts,"straw",Mt(y,A+w*.26,x),Mt(w*.43,w*.52,w*.43),Math.PI),F(Oe,"oldwood",Mt(y,A+w*.56,x),Mt(w*.45,.053,w*.45)),F(Oe,"straw",Mt(y,A+w*.583,x),Mt(w*.37,.039,w*.37))}function Ut(y,A,x,w,U,G){let S=(B,H)=>y((B/10-.5)*x,U-.54*(H/5)-.22*Math.sin(Math.PI*H/5)+.035*Math.sin(B*1.8)*H/5,G+H/5*w);for(let B=0;B<5;B++)for(let H=0;H<10;H++)Z("awning",S(H,B),S(H+1,B),S(H+1,B+1),S(H,B+1),[H/5,B/4,(H+1)/5,(B+1)/4]);for(let B=0;B<10;B++){let H=S(B,5),W=S(B+1,5);Z("awning",H,W,W.clone().add(Mt(0,-.18,0)),H.clone().add(Mt(0,-.18,0)))}for(let B of[-.47,.47]){let H=y(B*x,0,G+w-.1),W=y(B*x,U-.51,G+w-.1);C("oldwood",H,W,.046,.046,Oe),C("timber",W,y(B*x,U,G-.1),.047,.047,Oe),j(y,B*x,G+w-.1,.09,.09)}C("timber",S(0,5),S(10,5),.044,.044,Oe)}function it(y,A,x,w,{theta:U=0,floors:G=1,kind:Y="home",label:I,simple:S=!1,roofKind:B="tile"}={}){let H=be(y,A),W=K(y,H,A,U),O=G===1?3.31:6.13,X=w/2,ut=-w/2,st=["store","tavern","market"].includes(Y),mt=!S,gt=(St,kt,qt,Qt,ie,ce,se,oe)=>nt(W,U,St,kt,qt,Qt,ie,ce,se,oe);if(gt("stone",0,.045,0,x+.05,.24,w+.1),!st)gt("plaster",0,O/2,0,x,O,w),j(W,0,0,x,w);else{gt("plaster",0,O/2,ut,x,O,.23),j(W,0,ut,x,.28);for(let qt of[-1,1])gt("plaster",qt*x/2,O/2,0,.2,O,w),j(W,qt*x/2,0,.24,w);gt("beam",0,O-.17,0,x,.32,w);for(let qt=-w/2+.12;qt<w/2;qt+=.28)gt("oldwood",0,.181,qt,x-.25,.08,.24);G===2&&gt("beam",0,3.2,0,x,.2,w);let St=W(0,H+.23,X),kt=U===0||U===Math.PI;g.push({x0:St.x-(kt?x:w)/2,x1:St.x+(kt?x:w)/2,z0:A-(kt?w:x)/2,z1:A+(kt?w:x)/2,y:H+.225}),p.push({x:y,z:A,w:x,d:w,tavern:Y==="tavern"})}let Gt=Math.max(2,Math.round(x/2.1));for(let St=0;St<=Gt;St++){let kt=(St/Gt-.5)*x;for(let qt of[X+.024,ut-.025])if(gt(G===2?"lacquer":"timber",kt,O/2,qt,.17,O,.175),gt("stone",kt,.14,qt,.28,.21,.27),mt){let Qt=St===0?1:St===Gt?-1:1;C("timber",W(kt,O-.7,qt),W(kt+Qt*.48,O-.15,qt),.11,.12)}}for(let St of[.75,3.02,O-.2])(St!==.75||!st)&&gt("timber",0,St,X+.075,x+.19,.14,.14);if(mt){for(let St of[-1,1]){gt("timber",St*(x/2+.035),O-.24,0,.17,.19,w+.15);for(let ie=1;ie<Math.ceil(w/2);ie++)gt("timber",St*(x/2+.025),O/2,-w/2+ie*2,.12,O,.11);let kt=W(St*(x/2-.01),O-.15,-w/2+.08),qt=W(St*(x/2-.01),O-.15,w/2-.08),Qt=W(St*(x/2-.01),O+Math.min(x,w)*.3,0);Z("plaster",kt,qt,Qt,Qt)}if(!st){gt("beam",0,1.01,X+.056,1.23,2.02,.11);for(let St=0;St<6;St++)gt("oldwood",.15*(St-2.5),.98,X+.112,.136,1.91,.035);for(let St of[-1,1])lt(W,U,St*x*.31,1.94,X+.08,x*.22,1.03)}if(G===2)if(Y==="tavern"){gt("oldwood",0,3.34,X+.53,x,.17,1.45);for(let St=0;St<Gt;St++){let kt=(St/Gt-.5)*x;gt("lacquer",kt,3.78,X+1.19,.12,.9,.12),gt("oldwood",kt+x/Gt*.5,3.96,X+1.2,x/Gt,.09,.091);for(let qt=1;qt<=5;qt++)gt("oldwood",kt+qt*x/Gt/6,3.67,X+1.2,.061,.58,.06)}}else for(let St=0;St<Gt;St++)lt(W,U,((St+.5)/Gt-.5)*x,4.62,X+.081,x/Gt*.67,1.48)}if(G===2&&Y!=="tavern"){let St=(kt,qt,Qt)=>W(-kt,qt,-Qt);for(let kt=0;kt<Gt;kt++)lt(St,U+Math.PI,((kt+.5)/Gt-.5)*x,4.52,X+.075,x/Gt*.65,1.42);gt("beam",0,3.16,ut-.12,x+.14,.11,.14)}if(Vt(W,x+1.52,w+1.7,O+.02,Math.min(x,w)*.31,B,mt),G===2&&mt&&Vt(W,x+.9,w+2.4,3.09,.68,"tileDark",!0),st){if(Y==="tavern"){for(let Qt of[-1,1])for(let ie=0;ie<4;ie++){let ce=X-1.2-ie*2.3;gt("timber",Qt*(x/2-.13),1.65,ce,.14,3.3,.16)}for(let Qt=0;Qt<7;Qt++)gt("timber",0,2.98,X-.21-Qt*w/7,x,.2,.14);gt("oldwood",0,1.09,ut+.44,x*.55,.142,.47),gt("timber",0,.67,ut+.4,x*.56,.78,.5);for(let Qt=0;Qt<8;Qt++){let ie=W((Qt/7-.5)*x*.52,1.17,ut+.37);ht(ie.x,ie.y,ie.z,.67+Qt%3*.095,"paleCeramic")}let St=W(-.89,2.91,ut+.18),kt=W(.93,2.91,ut+.18);Z("awning",St,kt,W(.93,1.77,ut+.17),W(-.89,1.77,ut+.17)),bt(W,U,"\u9152",0,2.37,ut+.25,.62,.59);for(let Qt of[-4.85,4.85]){let ie=W(Qt,2.35,X-2);F(_r,"rust",ie,Mt(.19,.24,.19),0),C("iron",ie.clone().add(Mt(0,.17,0)),ie.clone().add(Mt(0,.76,0)),.018,.018,Oe)}let qt=[[-3.8,.25],[3.5,.15],[-2.9,-3.4],[2.9,-3.4]];f.push({role:"server",points:[W(0,0,X-1),W(0,0,1),W(0,0,-2.6),W(0,0,1)]}),f.push({role:"host",at:W(1.15,0,X-1),yaw:U});for(let[Qt,ie]of qt){if(Math.abs(Qt)+.8>x/2||Math.abs(ie)+.9>w/2)continue;for(let se of[-1,1])f.push({role:"diner",at:W(Qt+se*.27,0,ie+se*.83),yaw:U+(se>0?Math.PI:0)});gt("oldwood",Qt,.85,ie,1.63,.11,1.19);for(let se of[-.63,.63])for(let oe of[-.44,.44])gt("timber",Qt+se,.49,ie+oe,.11,.73,.11);gt("timber",Qt,.47,ie+.83,1.48,.1,.31),gt("timber",Qt,.47,ie-.83,1.48,.1,.31),j(W,Qt,ie,1.68,1.23);for(let se of[-.54,.53]){let oe=W(Qt+se,.92,ie+.16);ht(oe.x,oe.y,oe.z,.27,"paleCeramic")}let ce=W(Qt,.9,ie-.3);ht(ce.x,ce.y,ce.z,.59,"paleCeramic")}}else{gt("oldwood",0,1.09,-.85,x-.7,.16,.98),gt("timber",0,.55,-.85,x-.81,.95,.82),j(W,0,-.85,x-.59,.99);for(let kt=0;kt<2;kt++){let qt=(kt-.5)*x*.82;gt("oldwood",qt,1.61,ut+.5,x*.35,.1,.55),gt("oldwood",qt,2.16,ut+.49,x*.35,.09,.56)}for(let kt=0;kt<8;kt++){let qt=W((kt/7-.5)*(x-1),1.18,-.78+n()*.34);Y==="market"?Ht(qt.x,qt.y,qt.z,.4+n()*.43):ht(qt.x,qt.y,qt.z,.43+n()*.7,kt%3?"ceramic":"paleCeramic")}for(let kt=0;kt<6;kt++)gt(kt%2?"linen":"sage",x*.28,.32+kt*.16,X-.7,.99,.145,.64);_t(W,U,Math.min(x*.23,1.45),-1.73,.14,X-.46,Y==="market"?"fruit":"pot");let St=Math.min(x*.26,1.6);f.push({role:"assistant",at:W(-St,0,-1.68),yaw:U}),f.push({role:"shopper",at:W(-St,0,.35),yaw:U+Math.PI})}if(Y!=="tavern")Ut(W,U,x+.4,1.95,2.94,X);else for(let St of[-3.9,3.85]){let kt=W(St,2.54,X+.78);F(_r,"rust",kt,Mt(.24,.31,.24),0),C("iron",kt.clone().add(Mt(0,.26,0)),kt.clone().add(Mt(0,.55,0)),.018,.018,Oe)}I&&(gt("beam",0,Y==="tavern"?3.6:2.71,X+.2,2.05,.53,.11),bt(W,U,I,0,Y==="tavern"?3.6:2.71,X+.27,1.99,.49),bt(W,U,I,x/2-.18,2.29,X+1.46,.49,1.16,!0))}}function Rt(y,A,x,w,U,G=!1){let Y=G?sn(A):be(y,A),I=K(y,Y,A,x),S=(W,O,X,ut,st,mt,gt)=>nt(I,x,W,O,X,ut,st,mt,gt);S("timber",0,.83,0,w,.12,1.06);for(let W of[-1,1])S("beam",W*w*.41,.4,.22,.106,.82,.11),S("beam",W*w*.41,.4,-.24,.106,.82,.11),S("oldwood",W*w*.5,1.13,-.58,.1,2.28,.1);Ut(I,x,w+.48,2.06,2.46,-.63);let B=Math.floor(w/.43);for(let W=0;W<B;W++){let O=I((W/(B-1)-.5)*w*.82,.93,n()*.4-.18);if(U==="fruit"){Ht(O.x,O.y,O.z,.52);for(let X=0;X<5;X++)F(_r,X%2?"green":"rust",O.clone().add(Mt((n()-.5)*.25,.35,(n()-.5)*.24)),Mt(.082,.071,.073),n()*6)}else if(U==="cloth"){let X=I((W/(B-1)-.5)*w*.82,.97,.06);q(["linen","sage","rust"][W%3],X.x,X.y,X.z,.29,.16,.63,x)}else U==="bread"?(F(Ts,"straw",O.clone(),Mt(.19,.07,.16),x),F(Ts,"oldwood",O.clone().add(Mt(.033,.074,.016)),Mt(.139,.067,.124),x,1.15)):ht(O.x,O.y,O.z,.46+n()*.44,W%2?"ceramic":"paleCeramic")}let H={fruit:"\u679C\u5B50",cloth:"\u5E03\u5E1B",pot:"\u8336\u6C34",bread:"\u80E1\u9905"}[U];(G||U==="bread")&&bt(I,x,H,-w*.3,1.54,.02,.45,.85,!0),_t(I,x,0,-.91,.84,G?1.58:1.94,U),j(I,0,0,w,1.08)}function z(y,A,x,w,U=1,G=!1){M.push({x:y,z:A,len:x,width:w,side:U,extra:G});for(let I=0;I<x/.27;I++)q("oldwood",y-x/2+I*.27,.44-.08,A,.247,.16,w);for(let I=0;I<=x/2.1;I++){let S=y-x/2+I*2.1;for(let B of[-1,1])q("beam",S,-.5,A+B*(w*.43),.28,1.92,.28),q("oldwood",S,.66,A+B*w*.43,.31,.58,.31)}g.push({x0:y-x/2,x1:y+x/2,z0:A-w/2,z1:A+w/2,y:.44});for(let I=0;I<12;I++){let S=y-x*.41+I*(x*.82/11),B=A-U*w*.3,H=.7+n()*.45;I%4===0?Pt(S,.44,B,H):I%4===1?ht(S,.44,B,H,"paleCeramic"):I%4===2?F(Ts,"straw",Mt(S,.44+.24,B),Mt(.36,.57,.3),.2):Ht(S,.44,B,H)}}function zt(){let y=He(Fe),A=y-Ms,x=y+Ms,w=144;for(let U=0;U<w;U++){let G=jt.lerp(A,x,U/w),Y=jt.lerp(A,x,(U+1)/w);for(let I=0;I<5;I++){let S=Ss/5,B=Fe-Ss/2+S*(I+.5);q("oldwood",B,sn((G+Y)/2)-.103,(G+Y)/2,S-.014,.178,Y-G-.009,0,.74+n()*.28)}}for(let U of[-4.9,-3.35,-1.65,0,1.65,3.35,4.9]){let G=Fe+U;for(let Y=0;Y<17;Y++){let I=Y/17,S=(Y+1)/17,B=jt.lerp(A+.43,x-.43,I),H=jt.lerp(A+.43,x-.43,S);C("beam",Mt(G,sn(B)-.76,B),Mt(G,sn(H)-.76,H),.4,.47);let W=Y%2===0?.99:.73;C("timber",Mt(G+.22,sn(B)-W-.18,B),Mt(G+.22,sn(H)-.35,H),.32,.37)}for(let Y=0;Y<12;Y++){let I=jt.lerp(A+.75,x-.75,Y/12),S=jt.lerp(A+.75,x-.75,(Y+1)/12);C("timber",Mt(G-.14,sn(I)-.94,I),Mt(G-.14,sn(S)-.94,S),.35,.37)}}for(let U=0;U<=22;U++){let G=jt.lerp(A,x,U/22),Y=jt.lerp(A,x,(U+1)/22),I=sn(G);C("beam",Mt(Fe-5.65,I-.57,G),Mt(Fe+5.65,I-.57,G),.24,.34);for(let S of[-1,1]){let B=Fe+S*5.18;if(q("timber",B,I+.49,G,.15,1.15,.2),F(Ts,"beam",Mt(B,I+1.12,G),Mt(.131,.18,.13)),U!==22){for(let H of[.37,.94])C("oldwood",Mt(B,I+H,G),Mt(B,sn(Y)+H,Y),.105,.12);C("timber",Mt(B,I+.14,G),Mt(B,sn(Y)+.37,Y),.061,.065)}}}for(let U of[-1,1]){let G=y+U*(Ms-.12);q("stone",Fe,-.53,G,Ss+1.2,1.22,1.48),q("stone",Fe,.04,G+U*.82,Ss+.66,.15,1)}bt(K(Fe,0,y,Math.PI/2),Math.PI/2,"\u8679\u6A4B",0,sn(y)-.34,5.38,1.6,.43)}function Tt(y,A,x){let w=document.createElement("canvas");w.width=768,w.height=440;let U=w.getContext("2d");U.fillStyle="#d6bb83",U.fillRect(0,0,768,440),U.strokeStyle="#9e7c4b",U.lineWidth=3,U.strokeRect(17,16,734,408);let G=B=>46+(B+135)*2.05,Y=B=>211+B*2.45;U.beginPath();for(let B=-134;B<=187;B+=3)U.lineTo(G(B),Y(He(B)-Pn(B)));for(let B=187;B>=-134;B-=3)U.lineTo(G(B),Y(He(B)+Pn(B)));U.closePath(),U.fillStyle="#798c79",U.fill(),U.strokeStyle="#596958",U.stroke(),U.strokeStyle="#9d6644",U.lineWidth=5,U.beginPath(),U.moveTo(G(-121),Y(25)),U.lineTo(G(-4),Y(22)),U.lineTo(G(-4),Y(-23)),U.lineTo(G(163),Y(-25)),U.stroke(),U.lineWidth=8,U.strokeStyle="#63513a",U.beginPath(),U.moveTo(G(106.7),Y(-68)),U.lineTo(G(106.7),Y(-12)),U.stroke(),U.fillStyle="#786247";for(let B=0;B<20;B++){let H=B*8+3;U.fillRect(G(H),Y(-35-B%3),8,13),B>12&&U.fillRect(G(H),Y(-53+B%2*3),9,11)}U.font="bold 25px SimSun, serif",U.fillStyle="#59412c",U.fillText("\u6C74\u4EAC\u6C34\u9678\u5716",44,66),U.fillText("\u57CE\u9580",G(112),Y(-10)),U.fillText("\u8679\u6A4B",G(-27),Y(-30)),U.fillText("\u6C74\u6CB3",G(-105),Y(3)),U.fillText("\u5317",690,60);let I=new On(w);I.colorSpace=Le,I.anisotropy=8;let S=new xe(new _n(2.18,1.24),vn(I,{side:Ae}));S.position.copy(y(0,x+1.113,-.32)),S.rotation.set(-Math.PI/2,A+Math.PI,0,"YXZ"),i.add(S),nt(y,A,"oldwood",0,x+1.044,-.32,2.53,.127,1.52);for(let B of[-1.07,1.07])for(let H of[-.91,.27])nt(y,A,"beam",B,x+.5,H,.13,1.01,.13);dt(y,0,-.32,2.53,1.52)}function Dt(y,A,x){let w=(U,G,Y,I)=>nt(y,A,"plaster",U,x+1.36,G,Y,2.72,I);for(let U of[-5.83,5.83])w(U,0,.21,5.58),dt(y,U,0,.21,5.58);for(let[U,G]of[[-4.72,2.18],[0,3.58],[4.72,2.18]])w(U,-2.77,G,.23),dt(y,U,-2.77,G,.23);nt(y,A,"timber",0,x+2.42,-2.77,11.6,.19,.29),nt(y,A,"plaster",0,x+.43,2.77,11.6,.86,.22),nt(y,A,"oldwood",0,x+.89,2.79,11.6,.12,.35),dt(y,0,2.77,11.6,.25),lt(y,A,-3.83,x+1.53,2.84,1.15,1.15),lt(y,A,3.83,x+1.53,2.84,1.15,1.15);for(let U of[-5.8,-3.87,-1.93,0,1.93,3.87,5.8]){for(let G of[-2.86,2.86])nt(y,A,"lacquer",U,x+1.51,G,.225,3.02,.25),dt(y,U,G,.225,.25);nt(y,A,"oldwood",U,x+2.8,0,.19,.26,5.86)}for(let U of[-1,1]){let G=U*2.91,Y=U*4.45;Z("tileDark",y(-6.65,x+2.56,G),y(6.65,x+2.56,G),y(6.65,x+2.22,Y),y(-6.65,x+2.22,Y),[0,0,7,1.2]),C("beam",y(-6.65,x+2.21,Y),y(6.65,x+2.21,Y),.15,.17);for(let I of[-4.8,-2.7,2.7,4.8])C("timber",y(I,x+2.02,G),y(I,x+2.19,Y),.087,.093)}Vt(y,15.8,10.5,x+3.115,2.65,"tileDark"),Tt(y,A,x);for(let U of[-4.83,4.83])nt(y,A,"beam",U,x+.17,1.47,1.6,.33,.8),nt(y,A,"oldwood",U,x+1.15,1.73,1.6,.12,.29),dt(y,U,1.49,1.61,.86);for(let U=0;U<4;U++){let G=-5.39+U*.33;C("oldwood",y(G,x+.34,1.18),y(G,x+1.94,1.65),.027,.027,Oe);let Y=y(G,x+2.03,1.68);F(gg,"iron",Y,Mt(.045,.15,.032),A,1.14)}for(let U=0;U<3;U++){let G=4.25+U*.49;C("beam",y(G,x+.37,1.24),y(G,x+1.22,1.61),.063,.05),C("iron",y(G,x+1.22,1.61),y(G+.045,x+1.83,1.8),.079,.027),C("timber",y(G-.13,x+1.24,1.61),y(G+.13,x+1.24,1.61),.04,.038)}for(let U of[-5.07,-4.46]){let G=y(U+.19,x+.42,2.13);for(let Y=1;Y<=11;Y++){let I=Y/11,S=y(U+.19*Math.cos(I*2*Math.PI),x+.42+I*1.21,2.13+.031*Math.sin(I*Math.PI));C("oldwood",G,S,.029,.024,Oe),G=S}}nt(y,A,"straw",4.93,x+.34,-1.39,.63,.69,.53),dt(y,4.93,-1.39,.63,.53),R.push({position:y(-3.77,x,-.96),yaw:A+2.47}),R.push({position:y(3.81,x,-.94),yaw:A-2.47})}function Et(y,A,x,w){let W=y(x*5.6,0,-7.04),O=be(W.x,W.z),X=(O+w)/2,ut=(ce,se,oe,Ce)=>{let Re=y(x*ce,0,oe),Se=y(x*se,0,Ce);return{x0:Math.min(Re.x,Se.x),x1:Math.max(Re.x,Se.x),z0:Math.min(Re.z,Se.z),z1:Math.max(Re.z,Se.z)}};function st(ce,se,oe,Ce,Re,Se){nt(y,A,"wall",x*ce,(Re-.24)/2,se,oe,Re+.24,Ce,Se),nt(y,A,"brick",x*ce,Re-.055,se,oe+.016,.11,Ce+.006,Se)}function mt(ce,se,oe,Ce,Re){let Se=(se-ce)/23,Hn=(Re-Ce)/23;for(let Nn=0;Nn<23;Nn++){let ni=ce+(Nn+.5)*Se,Es=Ce+(Nn+1)*Hn;st(ni,oe,Math.abs(Se),1.55,Es,[.87,.96,.92,.99][Nn%4]);for(let ga of[-1,1]){let yr=oe+ga*.68;nt(y,A,"brick",x*ni,Es+.168,yr,Math.abs(Se)+.01,.34,.19,.92),nt(y,A,"stone",x*ni,Es+.337,yr,Math.abs(Se)+.016,.069,.2,.9)}}return{...ut(ce,se,oe-1.55/2,oe+1.55/2),from:y(x*ce,0,oe).z,to:y(x*se,0,oe).z,bottom:Ce,rise:Hn,count:23}}let gt=[mt(5.6,10.84,-7.04,O,X),mt(10.84,5.6,-5.13,X,w)],Gt=-5.13+1.55/2,St=-7.04-1.55/2,kt={...ut(10.84,12.02,Gt,St),level:X};st((10.84+12.02)/2,(Gt+St)/2,12.02-10.84,Gt-St,X,.91),nt(y,A,"brick",x*(12.02-.065),X+.27,(Gt+St)/2,.13,.54,Gt-St,.92);for(let ce of[Gt,St])nt(y,A,"brick",x*((10.84+12.02)/2),X+.24,ce,12.02-10.84,.48,.16,.91);let qt={...ut(4.36,5.6,Gt+.24,-5.13-1.55/2),level:w};st((4.36+5.6)/2,(Gt+.24+-5.13-1.55/2)/2,5.6-4.36,Gt+.24-(-5.13-1.55/2),w,.93),b.push({paths:gt,turn:kt,exit:qt});for(let ce of[-1,1]){let se=y(x*4.77,0,-7.04+ce*1.24);se.y=be(se.x,se.z),R.push({position:se,yaw:(x>0?Math.PI:0)+ce*.13})}let Qt=x*(5.6-.27),ie=-7.04-1;bt(y,x>0?Math.PI:0,"\u767B\u57CE",Qt-x*.054,1.88,ie,.43,.85,!0),nt(y,A,"timber",Qt,1.15,ie,.087,2.21,.085,.94)}function $t(){let y=-Math.PI/2,A=106.7,x=-25,w=K(A,0,x,y),U=8.75,G=8.5,Y=3.98,I=2.95,S=U+.185,B=[-5.01,5.01],H=st=>I+Math.sqrt(Math.max(0,Y*Y-st*st)),W=U-.11;for(let[st,mt]of[[-49,-Y],[Y,13.6]]){nt(w,y,"wall",(st+mt)/2,U/2,0,mt-st,U,G),nt(w,y,"brick",(st+mt)/2,.46,0,mt-st,.95,G+.14),nt(w,y,"brick",(st+mt)/2,W,0,mt-st,.29,G+.38),j(w,(st+mt)/2,0,mt-st,G);for(let gt=st+.3;gt<mt-.25;gt+=1.25)for(let Gt of[-1,1])Gt===-1&&B.some(St=>Math.abs(St-gt)<1.42)||(nt(w,y,"brick",gt,U+.43,Gt*(G/2-.18),.72,.77,.42),dt(w,gt,Gt*(G/2-.18),.72,.42));for(let gt=st+.4;gt<mt-.35;gt+=3.45)for(let Gt of[-1,1])nt(w,y,"stone",gt,2.15,Gt*G/2,.22,2.6,.17,.82)}let O=G/2,X=28;for(let st=0;st<X;st++){let mt=-Y+st/X*Y*2,gt=-Y+(st+1)/X*Y*2;for(let Gt of[-1,1]){let St=Gt*O;Z("brick",w(mt,H(mt),St),w(gt,H(gt),St),w(gt,U,St),w(mt,U,St),[mt/3,0,gt/3,1.7])}Z("brick",w(mt,H(mt),O),w(gt,H(gt),O),w(gt,H(gt),-O),w(mt,H(mt),-O),[mt/3,0,gt/3,2.6],[.77,.73,.66])}for(let st=0;st<25;st++){let mt=Math.PI*st/25+.01,gt=Math.PI*(st+1)/25-.009;for(let Gt of[-1,1]){let St=(kt,qt)=>w(Math.cos(kt)*qt,I+Math.sin(kt)*qt,Gt*(O+.095));Z("stone",St(mt,Y+.028),St(gt,Y+.028),St(gt,Y+.6),St(mt,Y+.6),[0,0,.55,.55],[.95,.91,.82])}}for(let st of[-1,1])for(let mt=0;mt<5;mt++)nt(w,y,"stone",st*(Y+.32),mt*.57+.3,O+.1,.64,.55,.24);nt(w,y,"stone",0,U+.075,0,24.1,.22,8.9),L={x0:A-4.45,x1:A+4.45,z0:x-12.05,z1:x+12.05,floor:S};for(let st of[-11.9,11.9])nt(w,y,"brick",st,S+.43,0,.29,.89,8.86),dt(w,st,0,.29,8.86);for(let[st,mt]of[[-9.12,5.82],[0,8.73],[9.12,5.82]])nt(w,y,"brick",st,S+.28,-4.05,mt,.56,.38),dt(w,st,-4.05,mt,.38);nt(w,y,"brick",0,S+.23,4.04,24,.46,.39),dt(w,0,4.04,24,.39),Dt(w,y,S);for(let st of[-1,1])Et(w,y,st,S);bt(w,y,"\u6C74\u4EAC",0,7.86,O+.13,1.95,.54);for(let st of[-1,1]){R.push({position:w(st*7.75,S,O-.6),yaw:y-st*.14}),R.push({position:w(st*9.65,S,-O+.93),yaw:y+Math.PI+st*.09});let mt=w(st*4.9,0,O+.94);mt.y=be(mt.x,mt.z),R.push({position:mt,yaw:y-st*.25})}Xt([[94,-25],[119,-25]],8.7,"pave")}function Ct(y,A,x,w=!1){let U=be(y,A),G=(w?7:6.6)*x,Y=n()*Math.PI*2,I=Mt(Math.cos(Y)*x*.75,0,Math.sin(Y)*x*.75),S=Mt(y,U-.16,A),B=Mt(y,-.12+U+G*.47,A).addScaledVector(I,.24),H=Mt(y,U+G*.91,A).add(I),W=(w?.34:.25)*x;C("bark",S,B,W*1.15,W,Oe),C("bark",B,H,W*.72,W*.64,Oe);let X=(w?[8622155,7373125,10003034,6058555,8033109]:[6452552,8227397,8689236,5598014,9740887]).map(st=>new wt(st).toArray()),ut=w?21:18;for(let st=0;st<ut;st++){let mt=st*2.399963+n()*.42,gt=Mt(Math.cos(mt),0,Math.sin(mt)),Gt=B.clone().lerp(H,.19+n()*.67),St=(1.18+n()*2.6)*x,kt=Gt.clone().addScaledVector(gt,St).add(Mt(0,(.66+n()*1.67)*x,0)),qt=Gt.clone().lerp(kt,.51).add(Mt(0,.43*x,0));st<16&&(C("bark",Gt,qt,W*.24,W*.24,Oe),C("bark",qt,kt,W*.12,W*.12,Oe));for(let ce=0;ce<5;ce++){let se=qt.clone().lerp(kt,.28+ce*.19).addScaledVector(gt,(n()-.25)*x*.64);se.y+=(n()-.53)*(w?1.48:1)*x;let oe=mt+ce*2.11,Ce=(w?1.12:1.27)*(.67+n()*.39)*x,Re=Mt(Math.sin(oe)*Ce,(n()-.5)*Ce*.27,Math.cos(oe)*Ce),Se=Mt(Math.cos(oe)*Ce*.22,Ce*(w?1.32:.8),-Math.sin(oe)*Ce*.22);Z("bough",se.clone().sub(Re).sub(Se),se.clone().add(Re).sub(Se),se.clone().add(Re).add(Se),se.clone().sub(Re).add(Se))}let Qt=w?33:35,ie=w?1.1:1.58;for(let ce=0;ce<Qt;ce++){let se=.35+n()*.73,oe=qt.clone().lerp(kt,se).addScaledVector(gt,(n()-.21)*ie*x),Ce=w?.7:1.3;oe.x+=(n()-.5)*1.55*ie*x,oe.z+=(n()-.5)*1.55*ie*x,oe.y+=(n()-.54)*Ce*x,w&&(oe.y-=(.08+Math.pow(n(),.52)*2.37)*se*x);let Re=(.13+n()*.28)*x,Se=(w?.052:.133)*x*(.58+n()),Hn=n()*6.28,Nn=Mt(Math.cos(Hn)*Se,(n()-.5)*Se*.9,Math.sin(Hn)*Se),ni=Mt(Math.sin(Hn)*Re*.66,-Re*(.72+n()*.35),-Math.cos(Hn)*Re*.66);Z("foliage",oe.clone().addScaledVector(ni,-.49),oe.clone().add(Nn),oe.clone().addScaledVector(ni,.6),oe.clone().addScaledVector(Nn,-1),[0,0,1,1],X[Math.floor(n()*X.length)])}}}function xt(y,A,x,w){let U=[7307575,10135131,9214020,11448692].map(G=>new wt(G).toArray());for(let G=0;G<Math.floor(w/.78);G++){let Y=A+G*.78;for(let I=y;I<y+x;I+=.26+n()*.12){let S=I+n()*.13,B=Y+n()*.33,H=be(S,B);for(let W=0;W<3;W++){let O=.28+n()*.49,X=(n()-.5)*.29,ut=Mt(S+(n()-.5)*.14,H,B+(n()-.5)*.11);Z("foliage",ut,ut.clone().add(Mt(.034,0,0)),ut.clone().add(Mt(X,O,-.04)),ut.clone().add(Mt(X+.036,O,-.041)),[0,0,1,1],U[Math.floor(n()*U.length)])}}}}Bt(),Xt([[-162,34],[-142,28],[-126,25],[-108,22],[-88,19],[-73,18],[-56,18],[-49,19],[-36,19],[-20,20],[-10,22],[10,23],[39,24],[64,26]],4.6),Xt([[-44,-22],[-21,-23],[-4,-23],[16,-23],[32,-24],[57,-24],[79,-24],[103,-25],[128,-25],[145,-26],[174,-26]],7.1,"path"),Xt([[119,-25],[129,-28],[129,-45],[130,-64],[132,-72]],4.4,"pave"),Xt([[112,-43],[129,-45],[153,-46],[171,-45]],3.8,"soil"),Xt([[142,-26],[143,-39],[146,-65]],4,"soil"),Xt([[-6,25],[-8,42],[-18,67]],3.7,"soil"),xt(-152,32,31,16),xt(-113,29,25,13),xt(-156,54,27,14),xt(-74,43,18,12),xt(46,40,26,12),it(-151,26,6.8,5.6,{roofKind:"straw"}),it(-137,36,7.2,6.2,{theta:Math.PI,roofKind:"straw"}),it(-112,13.7,6.2,5.6,{theta:Math.PI,roofKind:"tileDark"}),it(-103,25,8,5.3,{theta:Math.PI,roofKind:"straw"}),it(-86,33,6.6,5.6,{theta:Math.PI}),it(-64,28.7,8.5,6.7,{theta:Math.PI,kind:"market",label:"\u8336\u68DA"}),it(-46,27.3,9.6,7.9,{theta:Math.PI,kind:"store",label:"\u8CA8\u68E7"}),it(-33,26.7,8.4,6.3,{theta:Math.PI,kind:"market"}),it(-22,28.5,7.8,7.1,{theta:Math.PI}),z(-38,14.65,14.4,5.45);let ue=-36.5,ne=7.22,k=12.33,_=y=>jt.lerp(.045,.45,jt.clamp((y-ne)/(k-ne),0,1));for(let y=0;y<19;y++){let A=ne+(y+.5)*(k-ne)/19;q("oldwood",ue,_(A)-.059,A,1.57,.115,.249)}for(let y of[-.67,.67])C("beam",Mt(ue+y,.02,ne),Mt(ue+y,.48,k),.105,.126);g.push({x0:-41,x1:-32.8,z0:5.65,z1:7.45,y:.044}),z(-26,14.65,8.1,4.8),z(15,16.2,12.6,5.35),z(47,-13.2,13.5,4.5,-1),zt();for(let[y,A,x]of[[1,-7.2,"bread"],[-1,-10.3,"fruit"],[1,8.7,"pot"],[-1,12.7,"cloth"]])Rt(Fe+y*3.91,A,-y*Math.PI/2,1.68,x,!0);for(let y=0;y<390;y++){let A=-151+n()*319,w=y%4!==0?-24+(n()>.5?1:-1)*(2.6+n()*.95):23+(n()>.5?1:-1)*(1.4+n()*1);if(Math.abs(A-106.7)<7||Math.abs(A+4)<8)continue;let U=.016+n()*.087;F(_r,"stone",Mt(A,be(A,w)+.022,w),Mt(U,.048,U*.65),n()*6,.9)}for(let[y,A,x,w,U,G]of[[5,-32.2,7.1,7.4,"market","\u8336\u8086"],[14.4,-34,8.2,9,"store","\u96DC\u8CA8"],[24.6,-34.1,9.8,10,"market","\u9999\u6599"],[36.8,-34.5,8.8,9.4,"store","\u7DA2\u5E03"],[48,-34.1,8.3,8.6,"store","\u74F7\u5668"],[58.4,-35.7,8.2,9.4,"market","\u7CE7\u884C"],[69,-36.2,11.8,12.35,"tavern","\u9152\u6A13"],[82.5,-35.7,9,10.4,"store","\u8336\u574A"],[94,-35.3,8.65,8.6,"market","\u7AF9\u5668"]])it(y,A,x,w,{floors:2,kind:U,label:G});for(let[y,A,x,w,U,G]of[[-20,-33.6,8.5,7.4,"home"],[-10,-34.6,7.9,7.5,"market","\u8336"],[9,29.5,8.2,7,"market","\u8336"],[20,34,10.2,8.5,"tavern","\u9152"],[31,31.7,7.1,7.4,"store","\u7C73"],[45,33,7.4,7,"home"],[14,-17,6.45,4.85,"store","\u8336"],[32.5,-16.6,7.6,4.25,"market"],[62,-16.35,8.1,5.6,"market","\u679C\u5B50"],[82,-16.9,9.4,5.2,"store","\u767E\u8CA8"]])it(y,A,x,w,{theta:A>0||A>=-18?Math.PI:0,floors:U==="home"?1:2,kind:U,label:G});for(let[y,A,x,w,U]of[[-19,18.9,0,3.2,"fruit"],[-12,19.7,0,3.6,"cloth"],[3,24.7,Math.PI,3.6,"fruit"],[17,19.8,0,3.8,"pot"],[3,-18.7,Math.PI,3.8,"pot"],[20,-19.2,Math.PI,4,"fruit"],[25.6,-20.1,Math.PI,3.4,"fruit"],[38.6,-19.4,Math.PI,4.4,"cloth"],[45,-20.4,Math.PI,3.9,"pot"],[53.9,-19.7,Math.PI,4.2,"fruit"],[73.5,-20,Math.PI,3.7,"pot"],[89.1,-19.9,Math.PI,3.2,"cloth"],[151,-19.4,Math.PI,4.2,"pot"],[136,-20.1,Math.PI,4,"fruit"],[31.1,-27.6,0,2.3,"bread"],[42,-27.5,0,2.2,"fruit"],[53.3,-28.1,0,2,"cloth"]])Rt(y,A,x,w,U);$t();for(let[y,A,x,w,U,G]of[[116.2,-43.05,6.8,8.4,"store","\u98DF\u5E97"],[122,-41.8,5,7.4,"home"],[136.8,-34.7,7.1,8.7,"home"],[149.9,-34.8,7.6,8,"store","\u5E03"],[160.4,-35,8.5,8.5,"home"],[172,-34.3,10,8,"home"],[119.9,-50.8,9,7.1,"home"],[137.3,-51.4,9,7.5,"home"],[120.3,-61,9.4,8.9,"home"],[138.1,-63,10,9,"home"],[153.7,-55.4,8.6,9.3,"home"],[167.8,-54.5,10.7,8.1,"home"]])it(y,A,x,w,{floors:A<-47?1:2,kind:U,label:G});for(let y of[10,24,42,57,74,90,116,128,151,169])for(let A of[-57,-71])y>120&&y<147||it(y+(n()-.5)*3,A+(n()-.5)*2,6.6+n()*3.9,5.3+n()*3.7,{floors:n()>.58?2:1,simple:!0,theta:n()>.5?Math.PI:0});for(let[y,A,x,w]of[[-242,36,8.7,6.3],[-211,23,8.1,5.4],[-187,23,7.8,7.2],[185,-26,8.7,6.4],[196,-28,8,5.8],[210,-30,10.3,6.6],[228,-32,8,6.5],[239,-37,7.1,7.1]])it(y,A,x,w,{floors:y<0?1:2,simple:!0,theta:A>0?Math.PI:0});for(let[y,A,x]of[[-203,20,1.04],[-227,23,1.19],[-244,26,1.05],[170,21,1.12],[187,24,1.08],[211,25,1.24],[232,-21,.91],[244,23,.95]])Ct(y,A,x,!0);let $=K(154,.19,-66,0);for(let y=0;y<3;y++){let A=7.35-y*1.38;nt($,0,"plaster",0,2.63+y*3.5,0,A-.31,3,A*.78);for(let x of[-1,1])nt($,0,"lacquer",x*(A/2-.32),2.63+y*3.5,A*.38,.23,3.05,.23),lt($,0,x*A*.214,2.88+y*3.5,A*.39,A*.28,.94);Vt($,A+1.91,A*.84+1.34,3.97+y*3.5,1.28,"tileDark",!0)}for(let y of[-78,-65,-48,-38,-23])it(y,-32-10*n(),6.3+n()*3,5.6+n()*3,{simple:!0,floors:n()<.19?2:1});for(let[y,A,x,w]of[[-139,19,1.17,1],[-119,18,1.2,1],[-117,31,.97,0],[-98,19,.99,1],[-82,13,1.16,1],[-68,14.7,1.14,1],[-56,24,1,1],[-42,20.6,.96,1],[-22,18.3,.96,1],[-10,27,1.22,1],[10,20.4,.99,1],[28,29,.82,1],[48,20.2,1.04,1],[59,19.9,1.25,1],[70,26,1,1],[-39,-22,1.11,1],[-16,-24,1.12,1],[7,-15.5,.86,1],[34,-28.8,.93,0],[55,-15.5,1.01,1],[76,-15.8,.85,1],[93,-15.1,1.12,1],[112,-14.2,.91,1],[126,-53,1.12,0],[132,-48,.99,1],[128,-66,1.02,1],[137,-41,.83,0]])Ct(y,A,x,w===1);for(let y=0;y<74;y++){let A=-169+n()*350,x=(n()>.54?-1:1)*(40+n()*38);A>94&&A<151&&x<0||Ct(A,x,.63+n()*.54,n()>.67)}for(let y=0;y<1900;y++){let A=-163+n()*337,x=n()>.5?1:-1,U=He(A)+x*Pn(A)+x*(n()*1.65+.05);if(A>-11&&A<4||A>-46&&A<-20&&x===1)continue;let G=be(A,U),Y=[.29,.34,.105],I=.17+n()*.38;Z("foliage",Mt(A-.026,G,U),Mt(A+.039,G,U),Mt(A+.13*n(),G+I,U+.06),Mt(A-.018,G+I,U+.06),[0,0,1,1],Y)}for(let[y,A]of[[8,27],[21,28],[-31,21.5],[47,-31.5],[72,-32],[-74,19.3],[134,-42],[125,-56]])y===47||y===72||(Pt(y,be(y,A),A,.83),Ht(y+.82,be(y,A),A,.67),et(y,A,1.5,.75));for(let y=0;y<14;y++){let A=-146+y*2;q("timber",A,be(A,30.7)+.43,30.7,.16,1.04,.19),y<13&&(C("oldwood",Mt(A,.43,30.7),Mt(A+2.1,.38,30.7),.085,.105),C("oldwood",Mt(A,.7,30.7),Mt(A+2.06,.69,30.7),.071,.084))}for(let[y,A]of[[124,-42],[133,-40],[128,-55]]){let x=K(y,be(y,A),A,Math.PI/2);C("timber",x(-1.2,0,0),x(-1.2,2.3,0),.075,.075,Oe),C("timber",x(1.2,0,0),x(1.2,2.2,0),.075,.075,Oe),C("timber",x(-1.2,2.25,0),x(1.2,2.16,0),.032,.034,Oe);for(let w=0;w<4;w++){let U=-.94+w*.52,G=U+.44,Y=2.21-w*.019;Z("awning",x(U,Y,0),x(G,Y,0),x(G,Y-.69-w*.06,.04),x(U,Y-.64-w*.06,.14))}}for(let[y,A]of[[-64,1],[25,-1]]){let x=He(y)+A*Pn(y),w=x-A*.4;z(y,w,11.2,5.8,A,!0);let U=A>0?18:-23;Xt([[y,x+A*2],[y,U]],1.8,"path"),q("oldwood",y,.12,w+A*3.27,1.8,.24,.86),g.push({x0:y-.9,x1:y+.9,z0:w+Math.min(A*2.85,A*3.7),z1:w+Math.max(A*2.85,A*3.7),y:.24})}for(let{geo:y,mat:A,entries:x}of h.values()){let w=new Ri(y,s[A],x.length);for(let[U,[G,Y]]of x.entries())w.setMatrixAt(U,G),w.setColorAt(U,T.setScalar(Y));w.castShadow=A!=="soil"&&A!=="grass",w.receiveShadow=!0,w.computeBoundingSphere(),i.add(w)}for(let[y,{points:A,uv:x,colors:w}]of d){let U=new Ee;U.setAttribute("position",new he(A,3)),U.setAttribute("uv",new he(x,2)),U.setAttribute("color",new he(w,3)),U.computeVertexNormals();let G=s[y].clone();G.side=Ae,G.vertexColors=!0,(y==="foliage"||y==="awning"||y==="bough")&&(G.onBeforeCompile=s[y].onBeforeCompile);let Y=new xe(U,G);Y.receiveShadow=!0,Y.castShadow=!["soil","grass","stone","pave","path"].includes(y),i.add(Y)}let at=(y,A,x,w=0)=>A>=y.x0+w&&A<=y.x1-w&&x>=y.z0+w&&x<=y.z1-w;function ft(y,A){for(let{paths:x,turn:w,exit:U}of b){if(at(w,y,A))return w;if(at(U,y,A))return U;for(let G of x)if(at(G,y,A))return G}}function rt(y,A,x){return x>=L.floor-.65&&(at(L,y,A)||b.some(({exit:w})=>at(w,y,A)))}function Nt(y,A,x=0){if(y<gr.west||y>gr.east||A<gr.north||A>gr.south)return null;if(rt(y,A,x))return L.floor;let w=ft(y,A);if(w){if(w.level!==void 0)return w.level;let U=jt.clamp((A-w.from)/(w.to-w.from),0,1),G=Math.min(w.count,1+Math.floor(U*w.count));return w.bottom+G*w.rise}if(Math.abs(y-Fe)<Ss/2-.14&&Math.abs(A-He(Fe))<=Ms+.04)return sn(A);if(Math.abs(y-ue)<.78&&A>=ne&&A<=k)return _(A);for(let U of g)if(y>=U.x0&&y<=U.x1&&A>=U.z0&&A<=U.z1)return U.y;return Math.abs(A-He(y))<Pn(y)-.14?null:be(y,A)}function vt(y,A,x=.3,w=0){let U=ft(y,A);return U?.count&&(y<U.x0+.16+x||y>U.x1-.16-x)?!0:(U&&w>=L.floor-.65||rt(y,A,w)?N:m).some(I=>y>I.x0-x&&y<I.x1+x&&A>I.z0-x&&A<I.z1+x)}return{materials:s,walkHeight:Nt,isObstacle:vt,obstacles:m,trades:E,wharves:M,shopRooms:p,shopStaff:f,gatePosts:R,gateTerrace:L,gateStairs:b,onGateTerrace:rt}}function Lh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ee,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(h.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in h.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m])}if(t){let m;if(e)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(e){let u=0,h=[];for(let d=0;d<i.length;++d){let m=i[d].index;for(let g=0;g<m.count;++g)h.push(m.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Ph(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let m=[];for(let M=0;M<o[u].length;++M)m.push(o[u][M][d]);let g=Ph(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Ph(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Pe(o,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let d=0,m=u.count;d<m;d++)for(let g=0;g<e;g++){let M=u.getComponent(d,g);a.setComponent(d+h,g,M)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var ge=(i,t,e)=>new J(i,t,e),Bc=ge(0,1,0),un=new Bn(1,1,1),yn=new di(1,12,8),Dh=new di(1,10,6,0,Math.PI*2,0,Math.PI*.57),Vn=new ln(1,1,1,8),Uh=new ln(.65,1,1,10),xr=new ln(1,.72,1,10),Oc=new us(1,.083,6,19),_g=new ln(.71,1,1,8),xg=new Ii(1),ei=Math.PI*2;function Ue(i,t,e,n,s,r,o=1,a=1,l=1){let c=new xe(i,t);return c.position.set(n,s,r),c.scale.set(o,a,l),c.castShadow=c.receiveShadow=!0,e.add(c),c}function Ln(i,t,e,n,s,r=Vn){let o=n.clone().sub(e),a=e.clone().lerp(n,.5),l=Ue(r,t,i,a.x,a.y,a.z,s,o.length(),s);return l.quaternion.setFromUnitVectors(Bc,o.normalize()),l}function ki(i,t=[]){let e=new Map;for(let n of[...i.children]){if(!n.isMesh||t.includes(n))continue;n.updateMatrix();let s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();s.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(s),i.remove(n)}for(let[n,s]of e)Ue(Lh(s),n,i,0,0,0),s.forEach(r=>r.dispose())}function vg(i,t,e,n){let s=[];function o(h,d){let m=(h-.5)*i,g=Math.pow(.065+.935*Math.sin(Math.PI*h),.69),M=Math.sin(d*Math.PI),p=Math.cos(d*Math.PI);return[m,-.04+M*-.53+.26*Math.pow(Math.abs(h-.5)*2,4),p*t*.51*g*(.75+.25*Math.abs(p))]}for(let h=0;h<24;h++)for(let d=0;d<11;d++){let m=o(h/24,d/11),g=o((h+1)/24,d/11),M=o((h+1)/24,(d+1)/11),p=o(h/24,(d+1)/11);s.push(...m,...g,...M,...m,...M,...p)}let a=new he(s,3),l=new Float32Array(a.count*2);for(let h=0;h<a.count;h++)l[h*2]=a.getY(h)*2.8,l[h*2+1]=a.getX(h)/3;let c=new Ee;c.setAttribute("position",a),c.setAttribute("uv",new Pe(l,2)),c.computeVertexNormals();let u=Ue(c,e,n,0,.66,0);for(let h of[-1,1])for(let d=0;d<22;d++){let m=d/22,g=(d+1)/22,[M,p,f]=o(m,h>0?0:1),[E,R,b]=o(g,h>0?0:1);Ln(n,e,ge(M,p+.75,f),ge(E,R+.75,b),.065)}return u}function yg(i,t,e,n){let s=[],r=t.timber.clone();r.color.setHex(10914923),r.side=Ae;let o=12,a=[{x:-37,lane:10.5},{x:46,lane:-10.9},...n.filter(l=>l.extra)];for(let l=0;l<o+a.length;l++){let c=new ze,u=l%3===1?11.2:7.6+e()*2.6,h=l%3===1?3.5:2.25+e()*.58;vg(u,h,r,c);for(let L=0;L<Math.floor(u/.29);L++){let D=-u*.47+L*.29;if(D>u*.47)continue;let V=Math.pow(.08+.92*Math.sin(Math.PI*(D/u+.5)),.7);Ue(un,t.oldwood,c,D,.68,0,.27,.14,h*V*.96)}Ue(un,t.beam,c,-u*.45,.83,0,.28,.36,h*.36),Ue(un,t.beam,c,u*.45,.91,0,.31,.37,h*.38);for(let L of[-1,1])for(let D=-2;D<3;D++)Ue(un,t.oldwood,c,D*u*.15,.87,L*h*.44,.12,.55,.12),D<2&&Ln(c,t.oldwood,ge(D*u*.15,1.09,L*h*.44),ge((D+1)*u*.15,1.09,L*h*.44),.046);for(let L=0;L<12;L++){let D=u*(-.33+e()*.68),V=(e()-.5)*h*.61,v=L%3===0?t.oldwood:t.straw;Ue(L%3?yn:un,v,c,D,.87+e()*.16,V,.27+e()*.31,.31+e()*.13,.33+e()*.31)}if(l%3!==1){let L=.41*u,D=h*.42,V=new ln(D,D,L,16,1,!0,0,Math.PI);Ue(V,t.straw,c,-.27,1.17,0).rotation.set(0,Math.PI/2,Math.PI/2);for(let T=0;T<6;T++){let F=Ue(Oc,t.oldwood,c,-L*.52+T*L/5,1.16,0,D*.99,D*.99,.57);F.rotation.y=Math.PI/2,F.geometry=new us(1,.041,6,16,Math.PI)}}let d=new ze;d.position.set(u*.16,.72,0),c.add(d);let m=l%3===1?6.2:4.6;if(Ln(d,t.beam,ge(0,0,0),ge(0,m,0),.08),l%2===0||l%3===1){let L=h*1.19,D=new _n(L,m*.65,12,14),V=D.attributes.position;for(let T=0;T<V.count;T++){let F=V.getX(T),q=V.getY(T),C=.4*Math.cos(F/L*Math.PI)*Math.cos(q/(m*.65)*Math.PI*.7);V.setZ(T,C+.045*Math.sin(q*8))}D.computeVertexNormals();let v=t.linen.clone();v.side=Ae,Ue(D,v,d,-.12,m*.6,.016).rotation.y=Math.PI/2;for(let T=0;T<7;T++){let F=m*(.268+T*.109);Ln(d,t.oldwood,ge(-.13,F,-L*.52),ge(-.13,F,L*.52),.031)}}Ln(d,t.beam,ge(0,m-.16,0),ge(0,m-.09,.64),.035);let g=new ze;g.position.set(-u*.37,.92,-h*.38),c.add(g),Ln(g,t.oldwood,ge(.28,.77,.08),ge(-1.52,-.51,-1.77),.055),Ue(un,t.timber,g,-1.44,-.46,-1.67,.7,.075,.2).rotation.set(-.18,-.67,.36);let p=Ue(un,t.oldwood,c,-u*.5,.22,0,.58,1.25,.125);p.rotation.z=.23;let f=a[l-o],E=!!f,R=l%2===0?1:-1;E&&(d.rotation.z=-1.42),ki(d),ki(g),ki(c,[p]),i.add(c);let b=Mg(i,u,h),N=E?f.lane??f.z-He(f.x)-f.side*(f.width/2+h/2+.25):R*4.1;s.push({root:c,mast:d,oar:g,rudder:p,wake:b,length:u,docked:E,route:R,lane:N,speed:R>0?1.16:1.02,start:E?f.x:-177+l*374/o,phase:e()*ei})}return s}function Mg(i,t,e){let n=new ze,s=new Ee,r=[],o=[];for(let c of[-1,1])for(let u=0;u<14;u++){let h=u/14,d=(u+1)/14,m=(p,f)=>[-t*.38-p*t*1.19,0,c*(e*.2+e*1.31*p)+f],g=.03+.32*h,M=.03+.32*d;r.push(...m(h,-g),...m(d,-M),...m(h,g),...m(d,-M),...m(d,M),...m(h,g)),o.push(h,0,d,0,h,1,d,0,d,1,h,1)}s.setAttribute("position",new he(r,3)),s.setAttribute("uv",new he(o,2));let a={value:0},l=new Xe({side:Ae,transparent:!0,depthWrite:!1,uniforms:{time:a},vertexShader:"varying vec2 waveUv; void main(){ waveUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec2 waveUv; uniform float time; void main(){ float d=sin(waveUv.y*3.14159)*pow(1.0-waveUv.x,1.45); float foam=.25+.75*pow(max(0.0,sin(69.0*waveUv.x-2.3*time)),2.0); gl_FragColor=vec4(.86,.87,.72,d*foam*.39); }"});return n.add(new xe(s,l)),n.position.y=mr+.015,n.userData.time=a,i.add(n),n}var Sg=[[[-148,22],[-129,24],[-109,22],[-82,19],[-72,18],[-86,20],[-110,24],[-131,26]],[[-47,18.4],[-36,16.5],[-30,15.6],[-27,17.9],[-34,19.3],[-44,20.1]],[[-42,19.8],[-27,20],[-14,22],[-6,22],[-6,9],[-6,-4],[-6,-20],[-2,-23],[11,-23],[25,-25],[28,-24],[21,-22],[6,-21],[-2,-22],[-2,-4],[-2,10],[-2,22],[-12,23],[-27,21.2]],[[4,-24.9],[16,-24.6],[31,-25.7],[47,-25],[60,-25],[75,-24.6],[92,-25.9],[108,-25.4],[129,-25],[143,-25],[155,-26],[142,-27],[127,-24],[105,-23],[89,-23],[69,-23],[48,-23],[26,-22],[12,-22]],[[29,-27],[44,-27.7],[46,-29.8],[46,-31.1],[48,-31.7],[51,-30.8],[52,-27.2],[61,-26],[69,-26],[78,-26],[58,-25.6],[45,-26],[35,-26]],[[118,-25],[128,-27],[129,-40],[130,-56],[129,-62],[131,-65],[131,-51],[130,-36],[131,-28],[145,-26],[152,-24],[135,-24]],[[7,23],[14,22.4],[24,22.5],[48,24.2],[59,26],[47,26],[25,25.2],[17,24.7],[8,24.6]]];function fa(i){let t=[],e=0;for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=Math.hypot(r[0]-s[0],r[1]-s[1]);t.push({a:s,b:r,from:e,to:e+o,distance:o}),e+=o}return{length:e,segments:t}}function bg(i,t){let e=t%i.length,n=i.segments.find(r=>e>=r.from&&e<r.to)??i.segments[0],s=(e-n.from)/n.distance;return[jt.lerp(n.a[0],n.b[0],s),jt.lerp(n.a[1],n.b[1],s),Math.atan2(n.b[0]-n.a[0],n.b[1]-n.a[1])]}function Tg(i,t){let e=new wt(11232848),n=(o,a)=>({guard:!0,style:0,scale:.98+o%3*.018,shade:e,faces:new wt(t[o%t.length]),payload:0,phase:o*.37,...a}),s=i.gatePosts.map((o,a)=>n(a,{post:o,speed:0})),r=[[[27,-24.95],[33,-24.95],[43,-25.08],[59,-25.4],[76,-25.3],[89,-25.55],[99.7,-25.55],[100.3,-23.8],[86,-23.25],[69,-23.3],[55,-23.45],[37,-23.5],[27.4,-23.7]],[[111,-25.45],[121,-25.45],[129.3,-27.55],[130.1,-35.5],[129.4,-44.3],[130,-48.65],[131.1,-46.75],[131.25,-40],[131.1,-34],[132.15,-29.6],[133.25,-25.8],[131,-23.55],[120,-23.55],[111,-23.5]],[[-109,19.8],[-99,19.35],[-91,19.1],[-81,17.65],[-73,16.96],[-63,17.2],[-60,18.55],[-67,20],[-76,21.15],[-89,21.15],[-98,21.22],[-106,21.12]],[[-55,18.82],[-47,18.25],[-40,18.18],[-34,18.35],[-27,18.61],[-23,18.91],[-23.1,20.22],[-29,20.09],[-37,20.08],[-44,20.14],[-51,20.29],[-54.6,20.28]]];for(let[o,a]of r.entries()){let l=new hs(a.map(([u,h])=>ge(u,0,h)),!0,"centripetal"),c=l.getLength();for(let u=0;u<4;u++)s.push(n(u,{patrol:{route:l,length:c,lead:[8.2,27.4,28.2,23][o]-Math.floor(u/2)*1.28,side:u%2===0?-.41:.41},walking:!0,speed:[1.07,1.01,.99,.96][o]}))}return s}function wg(i,t,e,n,s,r,o,a){let l=Sg.map(fa),c=[],u=s?[6,8,13,17,7,7,7]:[10,12,24,29,9,12,11],h=[10457715,12298628,8615014,7439720,13150590,11366240,6586246,11966849,9666179,12424029,6585699],d=[12094569,11962985,12950907,11502690,13278334],m=new Map;function g(it,Rt,z){m.set(it,{geometry:Rt,material:z,used:0})}let M=e.linen.clone();M.color.setHex(15985117);let p=new Cn({color:16777215,roughness:.81});g("head",yn,p),g("nose",yn,p),g("neck",Vn,p),g("ears",yn,p),g("eyes",yn,e.black),g("hand",yn,p),g("hat",Dh,e.black),g("hair",yn,e.black),g("feet",yn,e.beam),g("hem",Uh,M),g("top",xr,M),g("arms",_g,M),g("calves",Vn,M),g("collar",Vn,e.paleCeramic),g("belt",Vn,e.beam),g("pole",Vn,e.oldwood),g("parcel",yn,e.straw),g("cargoBox",un,e.oldwood),g("cargoJar",xr,e.paleCeramic),g("hoe",un,e.iron),g("basket",xr,e.straw),g("rope",Vn,e.oldwood);let f=new Cn({color:7829871,roughness:.77,metalness:.26});g("helmet",Dh,f),g("helmetRim",Vn,f),g("chinGuard",un,f),g("armouredCoat",xr,f),g("armourBand",Vn,f),g("pauldron",yn,f),g("spearHead",xg,f);for(let it=0;it<l.length;it++)for(let Rt=0;Rt<u[it];Rt++){let z=.86+n()*.21;Rt%7===0&&it>=2?c.push({route:l[it],started:l[it].length*(Rt+.25)/u[it],speed:.72+n()*.17,walking:!0,style:Rt%3,scale:.92+n()*.13,shade:new wt(h[Math.floor(n()*h.length)]),faces:new wt(d[Math.floor(n()*d.length)]),p:it,payload:2,phase:n()*ei}):c.push({route:l[it],started:l[it].length*(Rt+n()*.9)/u[it],speed:.56+n()*.69,walking:!0,style:Rt%3,scale:z,shade:new wt(h[Math.floor(n()*h.length)]),faces:new wt(d[Math.floor(n()*d.length)]),p:it,payload:Rt%4===0?1:0,phase:n()*ei})}let E=fa([[-36.52,7.29],[-36.52,12.36],[-34.9,15.1],[-32.5,18.7],[-32.15,18.44],[-35.3,15.2],[-36.52,12.6],[-36.52,9.4]]);for(let it=0;it<2;it++)c.push({route:E,started:E.length*(.19+it*.49),speed:.7,walking:!0,delivery:!0,style:it,scale:.94+it*.044,shade:new wt(h[1+it*3]),faces:new wt(d[it]),payload:0,phase:it*3.2});let R=[[-126,23.3],[-36,14.2],[-30,19.2],[60,-23.2],[97,-22.4],[113,-22.3],[130.4,-48],[125,-42.5],[10.3,25.1]];for(let it=0;it<R.length;it++){let[Rt,z]=R[it];c.push({x:Rt,z,walking:!1,style:it%3,scale:.86+n()*.17,shade:new wt(h[it%h.length]),faces:new wt(d[it%d.length]),p:3,payload:it%4===0?1:0,phase:n()*ei})}for(let[it,Rt]of t.trades.entries()){let z=20+it%5*2.2,zt=(it*.38197+.33)%1;for(let Tt of[!1,!0])c.push({stand:Rt,buyer:Tt,cycle:z,offset:zt,style:(it+Number(Tt))%3,scale:.91+n()*.12,shade:new wt(h[(it*3+Number(Tt)*5)%h.length]),faces:new wt(d[it%d.length]),payload:0,phase:n()*ei,speed:1})}for(let[it,Rt]of r.entries())c.push({boat:Rt,x:0,z:0,walking:!1,style:it%3,scale:.93,shade:new wt(h[it%h.length]),faces:new wt(d[it%d.length]),payload:0,phase:n()*ei});for(let it of o)c.push({cart:it,walking:!0,style:0,scale:.96,speed:1.05,shade:new wt(h[3+it.index]),faces:new wt(d[it.index]),payload:0,phase:n()*ei});for(let[it,Rt]of a.entries())c.push({mount:Rt,seated:!0,style:0,scale:.98,shade:new wt(h[5+it]),faces:new wt(d[it]),payload:0,phase:it*.9,speed:0});function b(it,Rt){let z=c.length;c.push({x:it.x,z:it.z,speed:0,payload:0,scale:.96,style:z%3,shade:new wt(h[z%h.length]),faces:new wt(d[z%d.length]),phase:n()*ei,local:it,...Rt})}for(let[it,[Rt,z]]of[[-128,33],[-132,39],[-144,42],[-111,31],[-104,34],[-96,39],[-147,56],[-69,46],[52,44]].entries())b({x:Rt,z},{farmer:it%3===0?"rake":"hoe",heading:it*.95});for(let it of t.wharves)for(let Rt=0;Rt<3;Rt++){let z=it.x+(Rt-1)*it.len*.26,zt=it.z,Tt=fa([[z,zt-it.side*it.width*.21],[z+.34,zt],[z+1.5,zt+it.side*it.width*.28]]);b({x:z,z:zt},{porter:Rt+1,walking:!0,route:Tt,started:Rt*1.14,speed:.66+Rt*.06})}for(let[it,Rt,z,zt]of[[2,-24,1.55,.7],[34,-23.7,1.65,.85],[48,-28.15,1.6,.4],[80,-24.8,1.7,.72],[129.5,-45.2,1.35,.82],[147.2,-45.55,1.6,.79],[6,23,1.45,.78]])for(let Tt=0;Tt<2;Tt++)b({x:it,z:Rt},{child:{rx:z,rz:zt},scale:.56+Tt*.1,speed:1.5,phase:Tt*1.1+it*.2});for(let{role:it,at:Rt,yaw:z,points:zt}of t.shopStaff)if(zt){let Tt=fa(zt.map(Dt=>[Dt.x,Dt.z]));b(zt[0],{role:it,route:Tt,walking:!0,started:0,speed:.66})}else b(Rt,{role:it,heading:z,seated:it==="diner"});let N=Tg(t,d);c.push(...N);let L={helmet:1,helmetRim:1,chinGuard:2,armouredCoat:1,armourBand:4,pauldron:2,spearHead:1},D=c.length;for(let[it,Rt]of m){let z=["hand","arms","calves","feet","collar","basket","rope","ears","eyes"].includes(it)?2:1,zt=L[it]?N.length*L[it]:D*z+(it==="calves"?a.length*2:0),Tt=new Ri(Rt.geometry,Rt.material,zt);Tt.instanceMatrix.setUsage(Ui),Tt.castShadow=!["nose","collar","rope"].includes(it),Tt.receiveShadow=!0,Tt.frustumCulled=!1,Tt.count=0,i.add(Tt),Rt.model=Tt}let V=new De,v=new je,T=ge(0,0,0),F=ge(0,0,0),q=ge(0,0,0),C,Z,et,K,nt,j,dt;function _t(it,Rt,z){let zt=C.scale;return ge(Z+(it*j+z*dt)*zt,et+Rt*zt,K+(-it*dt+z*j)*zt)}function pt(it,Rt,z,zt,Tt,Dt,Et,$t,Ct=0){let xt=m.get(it);V.position.copy(_t(Rt,z,zt)),V.scale.set(Tt,Dt,Et).multiplyScalar(C.scale),V.rotation.set(Ct,nt,0,"YXZ"),V.updateMatrix(),xt.model.setMatrixAt(xt.used,V.matrix),xt.model.setColorAt(xt.used++,$t)}function bt(it,Rt,z,zt,Tt){let Dt=_t(...Rt),Et=_t(...z),$t=zt*C.scale;T.copy(Et).sub(Dt),v.setFromUnitVectors(Bc,T.clone().normalize());let Ct=m.get(it);V.position.copy(Dt).lerp(Et,.5),V.quaternion.copy(v),V.scale.set($t,T.length(),$t*.85),V.updateMatrix(),Ct.model.setMatrixAt(Ct.used,V.matrix),Ct.model.setColorAt(Ct.used++,Tt)}let Bt=new wt(14997691),Xt=new wt(9668216),Vt=new wt(12559741),lt=new wt(13028301),ht=new wt(9539209),Pt={pot:new wt(12173734),bread:new wt(14990723),cloth:new wt(13407109),fruit:new wt(11905126)},Ht=(s?60:86)**2;function Ut(it,Rt){for(let z of m.values())z.used=0;for(C of c){if(C.stand&&Rt&&C.stand.seller.distanceToSquared(Rt)>Ht||C.local&&Rt&&(C.local.x-Rt.x)**2+(C.local.z-Rt.z)**2>Ht)continue;let z=C.walking,zt=0,Tt=!1,Dt=0;if(C.child){let _=it*1.11+C.phase;Z=C.x+Math.cos(_)*C.child.rx,K=C.z+Math.sin(_)*C.child.rz,nt=Math.atan2(-Math.sin(_)*C.child.rx,Math.cos(_)*C.child.rz),z=!0}else if(C.post)({x:Z,z:K}=C.post.position),nt=C.post.yaw+.13*Math.sin(it*.61+C.phase);else if(C.patrol){let{route:_,length:$,lead:at,side:ft}=C.patrol,rt=(it*C.speed+at)%$/$;_.getPointAt(rt,F),_.getTangentAt(rt,q),Z=F.x+q.z*ft,K=F.z-q.x*ft,nt=Math.atan2(q.x,q.z)}else if(C.mount){let _=C.mount.root;Z=_.position.x,K=_.position.z,nt=_.rotation.y}else if(C.stand){let{stand:_,buyer:$,cycle:at,offset:ft}=C,rt=(it/at+ft)%1,Nt=jt.smoothstep(rt,.03,.26),vt=jt.smoothstep(rt,.73,.96);if(zt=jt.smoothstep(rt,.34,.46)*(1-jt.smoothstep(rt,.63,.73)),Tt=$?rt>.55&&rt<.98:rt>=.3&&rt<=.55,$){let A=Nt-vt;Z=jt.lerp(_.entry.x,_.buyer.x,A),K=jt.lerp(_.entry.z,_.buyer.z,A);let x=rt>.73&&rt<.96;z=rt>.03&&rt<.26||x,nt=_.yaw+(x?0:Math.PI)+.13*Math.sin(it*1.15+C.phase)}else({x:Z,z:K}=_.seller),nt=_.yaw+.14*Math.sin(it*.77+C.phase)}else if(C.cart){let _=C.cart.root;nt=_.rotation.y,Z=_.position.x-Math.sin(nt)*1.93,K=_.position.z-Math.cos(nt)*1.93}else if(C.walking){[Z,K,nt]=bg(C.route,C.started+it*C.speed);let _=C.delivery?.095:C.porter||C.role?0:Math.sin(C.phase)*.58;if(C.delivery&&(C.payload=(C.started+it*C.speed)%C.route.length<C.route.length*.5?1:0),C.porter&&C.route.segments[1].to>(C.started+it*C.speed)%C.route.length&&(Dt=C.porter),C.role==="server"&&(Dt=4),Z+=Math.cos(nt)*_,K-=Math.sin(nt)*_,C.p===0||C.p===3)for(let{root:$}of a){let at=Z-$.position.x,ft=K-$.position.z;if(Math.abs(at)>4.5||Math.abs(ft)>4.5)continue;let rt=Math.cos($.rotation.y),Nt=-Math.sin($.rotation.y),vt=at*rt+ft*Nt,y=-at*Nt+ft*rt,A=(1-jt.smoothstep(Math.abs(y),1.2,4.2))*(1-jt.smoothstep(Math.abs(vt),.25,1.13))*.82*(vt>=0?1:-1),x=Z+rt*A,w=K+Nt*A;t.walkHeight(x,w)!==null&&!t.isObstacle(x,w,.15)&&(Z=x,K=w)}}else({x:Z,z:K}=C),nt=(C.heading??C.phase)+.15*Math.sin(it*.64+C.phase),C.role&&(zt=(1+Math.sin(it*1.6+C.phase))*.5);if(et=t.walkHeight(Z,K)??be(Z,K),C.post&&(et=C.post.position.y),C.boat){let _=C.boat.root;Z=_.position.x-C.boat.route*C.boat.length*.35,K=_.position.z,et=_.position.y+.82,nt=C.boat.route>0?Math.PI/2:-Math.PI/2}C.mount&&(et=C.mount.root.position.y+1.06+C.mount.bob),j=Math.cos(nt),dt=Math.sin(nt);let Et=it*(4.1+C.speed*.97)+C.phase,$t=C.farmer?(1+Math.sin(it*2.8+C.phase))*.5:0,Ct=z?Math.sin(Et):0,xt=C.seated?-.43+.012*Math.sin(it*2.4+C.phase):C.child?.09*Math.abs(Math.sin(Et)):z?.026*Math.cos(Et*2):.012*Math.sin(it*2.4+C.phase)-zt*(C.buyer?.065:.025)-$t*.21,[ue,ne]=[C.shade,C.faces],k=C.seated?.38:C.style===1?.79:.63;pt("hem",0,.96-k/2+xt,0,C.style===1?.263:.218,k,.177,ue),pt("top",0,1.17+xt,$t*.13,.239,.46,.133,ue,.05+$t*.36),pt("belt",0,.962+xt,0,.173,.062,.151,Xt),pt("neck",0,1.416+xt,.007,.06,.111,.058,ne),pt("head",0,1.548+xt,.012,.101,.122,.096,ne);for(let _ of[-1,1])pt("ears",_*.101,1.542+xt,.018,.021,.035,.02,ne),pt("eyes",_*.044,1.568+xt,.102,.012,.009,.006,Xt);if(pt("nose",0,1.54+xt,.108,.032,.027,.028,ne),C.guard){pt("helmet",0,1.625+xt,0,.141,.153,.138,lt),pt("helmetRim",0,1.622+xt,.009,.146,.025,.143,ht),pt("armouredCoat",0,1.174+xt,0,.252,.366,.157,ht);for(let _=0;_<4;_++){let $=.85+xt+_*.116;pt("armourBand",0,$,0,.233+_*.006,.034,.158,_%2?lt:ht)}bt("pole",[.309,.11+xt,.255],[.309,2.041+xt,.255],.022,Vt),pt("spearHead",.309,2.132+xt,.255,.049,.14,.027,lt)}else pt("hat",0,1.635+xt,.003,.108,.075,.104,Xt),C.style===1&&pt("hair",0,1.67+xt,-.082,.061,.075,.067,Xt);for(let _ of[-1,1]){let $=Ct*_,at=.067+Math.max(0,-$)*.095;C.mount?(bt("calves",[_*.14,.53,-.01],[_*.39,.21,.16],.092,ue),bt("calves",[_*.39,.21,.16],[_*.37,-.185,.02],.06,ue),pt("feet",_*.37,-.2,.072,.074,.063,.116,Xt)):(bt("calves",[_*.081,.58,-$*.016],[_*.079,at+.055,$*.16],.067,ue),pt("feet",_*.079,at,$*.16+.035,.075,.058,.117,Xt)),C.guard&&(pt("chinGuard",_*.121,1.568+xt,-.036,.03,.127,.119,ht),pt("pauldron",_*.24,1.339+xt,0,.107,.091,.159,lt,.13));let ft=C.farmer?[_*.15,.87+xt-$t*.14-_*.14,.27+$t*.18+_*.21]:Dt?[_*.22,.88+xt,.33]:C.guard&&_===1?[.309,1.12+xt,.255]:C.mount?[_*.155,.61,.43]:C.stand&&!z?[_*.16,.87+xt+zt*.27,.245+zt*(_>0?.26:.09)]:C.seated?[_*.14,.51+zt*.18,.31]:C.role?[_*.17,.88+xt+zt*.16,.25+zt*.16]:C.cart?[_*.22,.68+xt,.27]:C.payload===2&&_===1?[_*.17,1.43+xt,.12]:[_*(C.style===1?.191:.252),.854+xt,-$*.129+.038];bt("arms",[_*.208,1.34+xt,.005],ft,.092,ue),pt("hand",...ft,.052,.064,.049,ne),Tt&&_===1&&pt("parcel",ft[0],ft[1]+.06,ft[2]+.019,.077,.086,.077,Pt[C.stand.goods]),bt("collar",[_*.105,1.396+xt,.087],[-_*.036,1.216+xt,.123],.021,Bt)}if(C.payload===1&&pt("parcel",.229,.9+xt,.17,.181,.147,.117,Vt),Dt===1&&pt("cargoBox",0,1+xt,.38,.43,.34,.31,Vt),Dt===2&&pt("parcel",0,1+xt,.4,.24,.19,.17,Vt),Dt===3&&pt("cargoJar",0,1.03+xt,.39,.18,.42,.18,Bt),Dt===4&&(pt("cargoBox",0,.91+xt,.38,.5,.04,.32,Bt),pt("cargoJar",0,1.02+xt,.38,.085,.18,.085,Bt)),C.farmer){let _=[.44,.57+xt-$t*.31,.89+$t*.17];if(bt("pole",[-.33,1.18+xt,-.23+$t*.18],_,.024,Vt),C.farmer==="rake"){pt("hoe",..._,.34,.047,.045,Vt);for(let $ of[-.13,-.065,0,.065,.13])pt("hoe",_[0]+$,_[1]-.062,_[2],.022,.13,.022,Vt,.24)}else pt("hoe",..._,.205,.103,.044,ht,.58)}if(C.payload===2){bt("pole",[-.61,1.436+xt,0],[.61,1.427+xt,0],.027,Vt);for(let _ of[-1,1]){let $=_*.55+Ct*.018;bt("rope",[_*.55,1.42+xt,0],[$,1+xt,.013],.014,Vt),pt("basket",$,.92+xt,.013,.167,.23,.158,Vt)}}}for(let z of m.values())z.model.count=z.used,z.model.instanceMatrix.needsUpdate=!0,z.model.instanceColor&&(z.model.instanceColor.needsUpdate=!0)}return{update:Ut,count:c.length}}function Eg(i,t){return[[-40,18,-17,21],[5,-24,89,-25],[111,-25,154,-26],[60,-23,20,-23]].map(([e,n,s,r],o)=>{let a=new ze,l=[];Ue(un,t.timber,a,0,.64,.17,1.13,.14,1.62);for(let c of[-1,1]){Ue(un,t.oldwood,a,c*.51,.86,.6,.09,.32,.86),Ue(un,t.beam,a,c*.25,.59,-.96,.09,.081,1.67);let u=new ze;u.position.set(c*.65,.43,.34),a.add(u),Ue(Oc,t.beam,u,0,0,0,.43,.43,.43).rotation.y=Math.PI/2,Ue(Vn,t.timber,u,0,0,0,.136,.16,.136).rotation.z=Math.PI/2;for(let h=0;h<8;h++){let d=h*ei/8;Ln(u,t.oldwood,ge(0,0,0),ge(0,.42*Math.cos(d),.42*Math.sin(d)),.026)}l.push(u)}for(let c=0;c<5;c++)Ue(yn,t.straw,a,(c%2-.5)*.49,.92+Math.floor(c/4)*.37,.16+c%3*.21,.37,.29,.41);return l.forEach(c=>ki(c)),ki(a),i.add(a),{root:a,wheels:l,a:e,b:n,c:s,d:r,phase:o*.29,index:o}})}function Ag(i,t){let e=t.materials,n=[[8,-25.1],[28,-25.7],[58,-25.55],[90,-25.72],[124,-25.8],[153,-26],[157,-24.9],[151,-23.7],[116,-23.7],[85,-23.35],[54,-23.55],[24,-23.45],[11,-23.45]],s=[[-139,24.5],[-123,24.2],[-105,20.2],[-85,19.46],[-77,17.65],[-71,17.65],[-62,18.4],[-54,18.1],[-56,21.3],[-79,22.15],[-95,21.6],[-107,21],[-127,26.5],[-138,27]],r=[8607549,6707539,10053954],o=[9981241,4353124,10515523],a=[n,n,s],l=new J,c=new J,u=new J,h=(d,m,g)=>{u.subVectors(g,m),d.position.copy(m).lerp(g,.5),d.scale.y=u.length(),d.quaternion.setFromUnitVectors(Bc,u.normalize())};return a.map((d,m)=>{let g=new hs(d.map(([C,Z])=>ge(C,0,Z)),!0,"centripetal"),M=g.getLength(),p=[2.18,1.86,2.38][m],f=[27,166,31][m],E=new ze,R=new ze,b=new ze;E.add(R),i.add(E);let N=new Cn({color:r[m],roughness:.91}),L=new Cn({color:m===1?8747376:5718839,roughness:.88}),D=new Cn({color:3090206,roughness:.94}),V=e.sage.clone();V.color.setHex(o[m]);let v=(C,Z,et,K,nt,j,dt,_t=0,pt=R)=>{let bt=Ue(yn,C,pt,Z,et,K,nt,j,dt);return bt.rotation.x=_t,bt};v(N,0,1.08,-.06,.3,.324,.75),v(N,0,1.04,-.55,.275,.337,.328),v(N,0,1.13,.52,.252,.356,.31),v(N,0,1.47,.7,.175,.434,.239,.52),v(N,0,1.68,.88,.131,.275,.162,.55),v(N,0,1.775,1.015,.155,.162,.261,.54),v(L,0,1.603,1.275,.121,.107,.188,.45),v(D,0,1.84,.912,.077,.134,.159,.37);for(let C of[-1,1]){v(N,C*.079,1.986,.986,.036,.138,.051,.24),v(D,C*.078,2.008,1.014,.022,.075,.025,.21),v(D,C*.124,1.777,1.101,.024,.025,.03),v(D,C*.084,1.621,1.411,.029,.019,.021),v(V,C*.267,1.208,-.125,.058,.195,.367),v(e.beam,C*.299,1.06,-.138,.022,.28,.062),Ln(R,e.beam,ge(C*.096,1.638,1.25),ge(C*.156,1.69,.42),.012),Ln(R,e.beam,ge(C*.106,1.672,1.25),ge(C*.139,1.86,.981),.016);let Z=Ue(Oc,e.iron,R,C*.36,.864,.082,.088,.112,.065);Z.rotation.y=Math.PI/2}v(V,0,1.383,-.112,.284,.105,.393),v(e.beam,0,1.476,-.083,.214,.104,.271),v(e.timber,0,1.507,.144,.183,.09,.044),v(e.timber,0,1.505,-.304,.183,.09,.054);for(let C=0;C<9;C++)v(D,0,1.87-C*.064,.815-C*.042,.056,.104,.082,.4);b.position.set(0,1.28,-.77),R.add(b),v(D,0,-.15,-.114,.06,.24,.061,.64,b),v(D,0,-.37,-.287,.074,.252,.069,.37,b),v(D,0,-.547,-.377,.059,.183,.052,.43,b),ki(R),ki(b);let T=[];for(let C of[!0,!1])for(let Z of[-1,1]){let et=Z*.183,K=C?.507:-.535,nt=ge(et,C?1.076:1.065,K),j=ge(et,.544,K),dt=ge(et,.105,K),_t=Ln(E,N,nt,j,C?.096:.125,xr),pt=Ln(E,N,j,dt,C?.057:.065,Uh),bt=v(D,et,.073,K,.064,.072,.108,0,E);T.push({front:C,x:et,z:K,hip:nt,knee:j,hoof:dt,thigh:_t,calf:pt,foot:bt,phase:(C?0:Math.PI)+Z*Math.PI*.5})}let F={root:E,bob:0,update:q};function q(C){let Z=(C*p+f)%M;g.getPointAt(Z/M,c),g.getTangentAt(Z/M,l);let{x:et,z:K}=c;E.position.set(et,t.walkHeight(et,K)??be(et,K),K),E.rotation.y=Math.atan2(l.x,l.z);let nt=C*p*4.1+m;F.bob=.027*Math.cos(nt*2),R.position.y=F.bob,b.rotation.y=Math.sin(nt*.52)*.31;for(let j of T){let dt=nt+j.phase,_t=Math.sin(dt),pt=Math.max(0,Math.cos(dt));j.hip.y=(j.front?1.076:1.065)+F.bob,j.knee.set(j.x,.51+pt*.17,j.z+_t*.147+(j.front?-.13:.13)*pt),j.hoof.set(j.x,.128+pt*.2,j.z+_t*.258),h(j.thigh,j.hip,j.knee),h(j.calf,j.knee,j.hoof),j.foot.position.set(j.x,j.hoof.y-.055,j.hoof.z+.027),j.foot.rotation.x=-pt*.42}}return F})}function Nh(i,t,e){let n=bs(1973),s=yg(i,t.materials,n,t.wharves),r=Eg(i,t.materials),o=Ag(i,t),a=wg(i,t,t.materials,n,e,s,r,o);function l(c,u){for(let h of s){let{root:d,mast:m,wake:g,oar:M,rudder:p,length:f,phase:E,route:R,docked:b}=h,N=b?h.start:((h.start+183+c*h.speed*R)%374+374)%374-183,L=He(N),D=Math.sin(c*.22+E)*.22,V=L+h.lane+(b?D*.5:D+Math.sin(N*.076+E)*.39),v=.063*Math.sin(c*1.1+E)+.026*Math.cos(c*1.63+E),T=He(N+1)-L,F=(R>0?0:Math.PI)-Math.atan(T)*.91;d.position.set(N,mr-.02+v,V),d.rotation.set(Math.sin(c*1.3+E)*.034,F,Math.sin(c*.79+E)*.021,"YXZ");let q=Math.abs(N-Fe),C=1-jt.smoothstep(q,8.5+f*.24,21);b||(m.rotation.z=-R*C*1.48),M.rotation.y=Math.sin(c*1.7+E)*.25,M.rotation.z=.09*Math.cos(c*1.7+E),p.rotation.y=.12*Math.sin(c*.49+E),g.position.x=N,g.position.z=V,g.rotation.y=F,g.visible=!b,g.userData.time.value=c}for(let h of r){let{root:d,wheels:m,a:g,b:M,c:p,d:f,phase:E,index:R}=h,b=Math.hypot(p-g,f-M),N=(c*(1+R*.05)/b+E)%2,L=N<1,D=L?N:2-N,V=jt.lerp(g,p,D),v=jt.lerp(M,f,D);d.position.set(V,t.walkHeight(V,v)??be(V,v),v),d.rotation.y=Math.atan2(p-g,f-M)+(L?0:Math.PI),m.forEach(T=>T.rotation.x=c*2.3)}for(let h of o)h.update(c);a.update(c,u)}return{update:l,boats:s,carts:r,mounts:o,headcount:a.count}}var pa=class extends xe{constructor(t,e={}){super(t),this.isWater=!0;let n=this,s=e.textureWidth!==void 0?e.textureWidth:512,r=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,u=e.sunDirection!==void 0?e.sunDirection:new J(.70707,.70707,0),h=new wt(e.sunColor!==void 0?e.sunColor:16777215),d=new wt(e.waterColor!==void 0?e.waterColor:8355711),m=e.eye!==void 0?e.eye:new J(0,0,0),g=e.distortionScale!==void 0?e.distortionScale:20,M=e.side!==void 0?e.side:wn,p=e.fog!==void 0?e.fog:!1,f=new mn,E=new J,R=new J,b=new J,N=new fe,L=new J(0,0,-1),D=new ve,V=new J,v=new J,T=new ve,F=new fe,q=new We,C=new gn(s,r),Z={name:"MirrorShader",uniforms:dr.merge([At.fog,At.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new fe},sunColor:{value:new wt(8355711)},sunDirection:{value:new J(.70707,.70707,0)},eye:{value:new J},waterColor:{value:new wt(5592405)}}]),vertexShader:`
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
				}`},et=new Xe({name:Z.name,uniforms:dr.clone(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,lights:!0,side:M,fog:p});et.uniforms.mirrorSampler.value=C.texture,et.uniforms.textureMatrix.value=F,et.uniforms.alpha.value=a,et.uniforms.time.value=l,et.uniforms.normalSampler.value=c,et.uniforms.sunColor.value=h,et.uniforms.waterColor.value=d,et.uniforms.sunDirection.value=u,et.uniforms.distortionScale.value=g,et.uniforms.eye.value=m,n.material=et,n.onBeforeRender=function(K,nt,j){if(R.setFromMatrixPosition(n.matrixWorld),b.setFromMatrixPosition(j.matrixWorld),N.extractRotation(n.matrixWorld),E.set(0,0,1),E.applyMatrix4(N),V.subVectors(R,b),V.dot(E)>0)return;V.reflect(E).negate(),V.add(R),N.extractRotation(j.matrixWorld),L.set(0,0,-1),L.applyMatrix4(N),L.add(b),v.subVectors(R,L),v.reflect(E).negate(),v.add(R),q.position.copy(V),q.up.set(0,1,0),q.up.applyMatrix4(N),q.up.reflect(E),q.lookAt(v),q.far=j.far,q.updateMatrixWorld(),q.projectionMatrix.copy(j.projectionMatrix),F.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),F.multiply(q.projectionMatrix),F.multiply(q.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(E,R),f.applyMatrix4(q.matrixWorldInverse),D.set(f.normal.x,f.normal.y,f.normal.z,f.constant);let dt=q.projectionMatrix;T.x=(Math.sign(D.x)+dt.elements[8])/dt.elements[0],T.y=(Math.sign(D.y)+dt.elements[9])/dt.elements[5],T.z=-1,T.w=(1+dt.elements[10])/dt.elements[14],D.multiplyScalar(2/D.dot(T)),dt.elements[2]=D.x,dt.elements[6]=D.y,dt.elements[10]=D.z+1-o,dt.elements[14]=D.w,m.setFromMatrixPosition(j.matrixWorld);let _t=K.getRenderTarget(),pt=K.xr.enabled,bt=K.shadowMap.autoUpdate;n.visible=!1,K.xr.enabled=!1,K.shadowMap.autoUpdate=!1,K.setRenderTarget(C),K.state.buffers.depth.setMask(!0),K.autoClear===!1&&K.clear(),K.render(nt,q),n.visible=!0,K.xr.enabled=pt,K.shadowMap.autoUpdate=bt,K.setRenderTarget(_t);let Bt=j.viewport;Bt!==void 0&&K.state.viewport(Bt)}}};function Fh(i,t,e,n){let s=new J,r=new wt(7714013),o=new wt(13229016),a=new xe(new di(255,36,22),new Xe({side:qe,depthWrite:!1,fog:!1,uniforms:{sunVector:{value:s},skyTop:{value:r},skyHorizon:{value:o},clock:{value:0}},vertexShader:`
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
    `}));a.renderOrder=-10,a.frustumCulled=!1,i.add(a),i.fog=new Ys(13950673,.0052);let l=new nr(14741495,10126689,1.82),c=new sr(16769706,2.68);c.castShadow=!0;let u=n?51:63;c.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(c.shadow.camera,{left:-u,right:u,top:u,bottom:-u,near:8,far:208}),c.shadow.camera.updateProjectionMatrix(),c.shadow.normalBias=.035,c.shadow.bias=-22e-5,c.shadow.radius=2,i.add(l,c,c.target);let h=new pa(new _n(543,65),{textureWidth:n?320:768,textureHeight:n?240:480,waterNormals:e.waterNormal,sunDirection:s,sunColor:16573366,waterColor:6387024,distortionScale:2.85,clipBias:.018,fog:!0});h.rotation.x=-Math.PI/2,h.position.set(4,mr,0),h.material.uniforms.size.value=1.55,h.material.fragmentShader=h.material.fragmentShader.replace("float rf0 = 0.3;","float rf0 = 0.17;").replace("vec3 outgoingLight = albedo;","vec3 outgoingLight = albedo * ( .93 + .11 * sin(worldPosition.x * 6.4 + sin(worldPosition.z * 2.2) + time * 2.9) * sin(worldPosition.z * 7.0 + sin(worldPosition.x * 3.0) - time) );"),h.receiveShadow=!0,i.add(h);let d=h.onBeforeRender,m=0,g=new J(999,0,0),M=new je;h.onBeforeRender=function(...Z){let et=Z[2];(m++%(n?4:3)===0||g.distanceToSquared(et.position)>1.1||Math.abs(M.dot(et.quaternion))<.9996)&&(g.copy(et.position),M.copy(et.quaternion),d.apply(this,Z))};let p=[[-89,4.5,27],[70,5.2,-34],[133,3.7,-54],[57,4.2,-37]],f=p.length*7,E=new Float32Array(f*3),R=new Float32Array(f),b=new Float32Array(f),N=new Ee;N.setAttribute("position",new Pe(E,3).setUsage(Ui)),N.setAttribute("size",new Pe(R,1).setUsage(Ui)),N.setAttribute("fade",new Pe(b,1).setUsage(Ui));let L=new Js(N,new Xe({transparent:!0,depthWrite:!1,vertexShader:`
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
    `}));L.frustumCulled=!1,i.add(L);let D=[],V=new Ci({color:3817010,side:Ae,fog:!0}),v=new Ee;v.setAttribute("position",new he([0,0,.15,.43,.025,-.022,.12,0,-.13,0,0,.15,.12,0,-.13,0,0,-.098],3));for(let Z=0;Z<(n?7:11);Z++){let et=new ze,K=new xe(v,V),nt=new xe(v,V);nt.scale.x=-1,et.add(nt,K),i.add(et),D.push({group:et,left:nt,right:K})}let T="",F="",q=new J;function C(Z,et,K,nt){a.position.copy(K.position),a.material.uniforms.clock.value=Z;let dt=jt.clamp((et-8.1)/8.8,0,1),_t=Math.sin(Math.PI*(.2+dt*.59)),pt=.36+dt*2.12;s.set(Math.cos(pt)*(.79+dt*.15),.46+_t*.81,Math.sin(pt)).normalize();let bt=Math.round(et*45).toString();if(bt!==F&&(c.color.setHSL(.106,.58+(1-_t)*.09,.83+(_t-.5)*.07),c.intensity=2.3+_t*.59,l.intensity=1.48+_t*.28,r.setRGB(.105+_t*.033,.312+_t*.085,.62+_t*.1),o.setRGB(.51+(1-_t)*.09,.655,.745),i.fog.color.setRGB(.62,.73,.76),F=bt),nt%4===0||nt===1){let Bt=K.getWorldDirection(q),Xt=Math.round((K.position.x+Bt.x*24)/8)*8,Vt=Math.round((K.position.z+Bt.z*24)/8)*8,lt=Xt+"/"+Vt+"/"+bt,ht=lt!==T;ht&&(c.target.position.set(Xt,0,Vt),c.position.copy(c.target.position).addScaledVector(s,86),T=lt),(ht||nt%(n?12:8)===0)&&(t.shadowMap.needsUpdate=!0)}h.material.uniforms.time.value=Z*.77;for(let Bt=0;Bt<f;Bt++){let[Xt,Vt,lt]=p[Math.floor(Bt/7)],ht=(Z*.17+Bt%7/7)%1;E[Bt*3]=Xt+ht*3.6+.37*Math.sin(Bt+ht*6),E[Bt*3+1]=Vt+ht*5.13,E[Bt*3+2]=lt+Math.sin(ht*3+Bt)*(.25+ht*.7)+ht*.6,R[Bt]=.41+ht*2.1,b[Bt]=Math.sin(ht*Math.PI)*.13*(1-ht*.65)}for(let Bt of["position","size","fade"])N.attributes[Bt].needsUpdate=!0;for(let Bt=0;Bt<D.length;Bt++){let{group:Xt,left:Vt,right:lt}=D[Bt],ht=Z*.054+Bt*.045,Pt=Bt%4*.91,Ht=-14+Math.sin(ht)*46+Pt*2,Ut=-5+Math.cos(ht)*20+Pt;Xt.position.set(Ht,17.6+Math.sin(ht*1.6+Bt*.14)*2.2+Pt*.38,Ut),Xt.rotation.y=Math.atan2(Math.cos(ht)*46,-Math.sin(ht)*20);let it=Math.sin(Z*6.7+Bt*.77)*.67;Vt.rotation.z=it,lt.rotation.z=-it}}return{update:C,river:h}}function Bh(i,t){let e,n=!0,s=0,r=new AbortController,o={field:[390,.078,0,.026],river:[490,.125,.022,.014],dock:[650,.095,.3,.006],market:[950,.043,.48,0],shop:[670,.025,.31,0],tavern:[810,.014,.54,0],lane:[510,.046,.075,.012]},a=[[108,510,1110],[142,430,1510],[184,660,1740],[121,320,1330],[163,580,1870],[221,420,2170],[196,740,1480],[132,490,2e3],[153,390,1180]];function l(p){let R=p.createBuffer(1,286650,22050),b=R.getChannelData(0);for(let[N,L,D]of a){let V=Math.random()*22050;for(;V<b.length;){let v=.8+Math.random()*2.3,T=3+Math.floor(Math.random()*6);for(let F=0;F<T;F++){let q=Math.floor(V+F*v*22050/T),C=Math.floor(22050*(.083+Math.random()*.14)),Z=N*(.82+Math.random()*.38),et=.045+Math.random()*.065,K=Math.round(L/Z)*Z,nt=Math.round(D/Z)*Z,j=0;for(let dt=0;dt<C;dt++){let _t=dt/C;j+=2*Math.PI*Z/22050*(1.1-_t*.23);let pt=Math.sin(Math.PI*_t)*Math.min(1,_t*12),bt=Math.sin(j)*.22+Math.sin(j*K/Z)*.49+Math.sin(j*nt/Z)*.25;b[(q+dt)%b.length]+=et*pt*(bt+(Math.random()-.5)*(.2+_t*.18))}}V+=22050*(v+.19+Math.random()*.91)}}return R}function c(){let p=new AudioContext,f=p.createBuffer(1,p.sampleRate*9,p.sampleRate),E=f.getChannelData(0),R=0;for(let D=0;D<E.length;D++)R=R*.83+(Math.random()*2-1)*.15,E[D]=R;let b=p.createGain();b.gain.value=0,b.connect(p.destination);function N(D,V,v,T=f){let F=p.createBufferSource(),q=p.createBiquadFilter(),C=p.createGain();return F.buffer=T,F.loop=!0,F.playbackRate.value=v,q.type=D,q.frequency.value=V,C.gain.value=0,F.connect(q).connect(C).connect(b),F.start(Math.random()*1.2),{filter:q,gain:C}}let L=l(p);return{audio:p,noise:f,output:b,wind:N("lowpass",510,1.22),crowd:N("lowpass",1650,1,L),distant:N("lowpass",890,.87,L)}}function u(){i.setAttribute("aria-pressed",String(n)),i.setAttribute("aria-label",n?"\u5173\u95ED\u73AF\u5883\u97F3":"\u5F00\u542F\u73AF\u5883\u97F3"),t.textContent=n?e?.audio.state==="running"?"\u73AF\u5883\u97F3\u5DF2\u5F00":"\u73AF\u5883\u97F3\u5F85\u64AD\u653E":"\u73AF\u5883\u97F3"}async function h(){if(n)try{e??=c(),e.output.gain.setTargetAtTime(.72,e.audio.currentTime,.12),await e.audio.resume(),e.audio.state==="running"&&r.abort(),u()}catch{u()}}for(let p of["pointerdown","pointerup","touchend","keydown","click"])window.addEventListener(p,f=>{!f.isTrusted||i.contains(f.target)||p==="pointerdown"&&f.pointerType!=="mouse"||p==="pointerup"&&f.pointerType==="mouse"||h()},{capture:!0,signal:r.signal});i.addEventListener("click",()=>{n=!n,n?h():e&&e.output.gain.setTargetAtTime(0,e.audio.currentTime,.12),u()}),u(),h();function d(p,f,E){let{audio:R,output:b}=e,N=R.createOscillator(),L=R.createGain();N.frequency.setValueAtTime(p,E),N.frequency.exponentialRampToValueAtTime(p*1.43,E+.057),L.gain.setValueAtTime(1e-4,E),L.gain.exponentialRampToValueAtTime(f,E+.024),L.gain.exponentialRampToValueAtTime(1e-4,E+.083),N.connect(L).connect(b),N.start(E),N.stop(E+.085)}let m=5.1,g=1.1;function M(p,f,E,R){if(!n||e?.audio.state!=="running"||document.hidden)return;let[b,N,L,D]=o[p]??o.river,{audio:V,output:v,noise:T}=e,F=V.currentTime;if(e.wind.filter.frequency.setTargetAtTime(b,F,.35),e.wind.gain.gain.setTargetAtTime(N*(.77+.15*Math.sin(F*.8)+.11*Math.cos(F*.31)),F,.4),e.crowd.filter.frequency.setTargetAtTime(b*2.3,F,.45),e.crowd.gain.gain.setTargetAtTime(L,F,.55),e.distant.gain.gain.setTargetAtTime(L*.5,F,.65),g-=R,g<=0&&["dock","market","shop","tavern"].includes(p)){let q=V.createBufferSource(),C=V.createBiquadFilter(),Z=V.createGain();q.buffer=T,C.type="bandpass",C.frequency.value=p==="dock"?310:p==="market"?560:1580,C.Q.value=p==="dock"?2:5.5,Z.gain.setValueAtTime(p==="dock"?.29:.21,F),Z.gain.exponentialRampToValueAtTime(.001,F+.12),q.connect(C).connect(Z).connect(v),q.start(F,Math.random()*7,.13),g=1.2+Math.random()*3.3}if(f&&F-s>.4){let q=V.createBufferSource(),C=V.createBiquadFilter(),Z=V.createGain();q.buffer=T,C.type="lowpass",C.frequency.value=E?285:390,Z.gain.setValueAtTime(.15,F),Z.gain.exponentialRampToValueAtTime(.001,F+.16),q.connect(C).connect(Z).connect(v),q.start(F,Math.random()*7,.17),s=F}if(m-=R,m<=0){let q=1390+Math.random()*520;if(D>0)for(let C=0;C<3;C++)d(q+C*87,D*(.4+Math.random()*.28),F+C*.14);m=6+Math.random()*9}}return{update:M}}var It=i=>document.getElementById(i),Dn=It("experience"),tn=It("world"),Cg=Bh(It("sound"),It("sound-label")),vr=matchMedia("(prefers-reduced-motion: reduce)"),Rg=matchMedia("(pointer: coarse)"),Un=Rg.matches||innerWidth<680,ws=jt.clamp,zc=i=>String(i).padStart(2,"0"),_i=(i,t,e)=>new J(i,t,e),ma=[...Be.flatMap(i=>[[i.x,i.z],...i.path])],Oh=[{stop:1,point:_i(-31,.6,-4),button:null},{stop:3,point:_i(Fe,7.5,.7),button:null},{stop:4,point:_i(28,4.5,-25.2),button:null},{stop:7,point:_i(98,11,-24),button:null}];async function Ig(){let i=new ua({canvas:tn,antialias:!Un,alpha:!1,powerPreference:"high-performance"}),t=new Zs,e=new We(Un?64:52,1,.12,340),n={value:0};i.setClearColor(12768452),i.outputColorSpace=Le,i.toneMapping=So,i.toneMappingExposure=1.08,i.shadowMap.enabled=!0,i.shadowMap.autoUpdate=!1,i.shadowMap.type=rr;let s=Ch(),r=Ih(t,s,n),o=Fh(t,i,s,Un),a=Nh(t,r,Un);i.compile(t,e);let l=new Set,c={id:null,x:0,y:0},u={id:null,x:0,y:0},h=_i(0,0,0),d=_i(0,0,0),m=_i(0,0,0),g=It("map-view"),M=It("map"),p=M.getContext("2d"),f=!1,E="scenic",R=0,b=-1,N=0,L=0,D=null,V=vr.matches,v=0,T=2.4,F=0,q=0,C="",Z=!1,et=null,K,nt,j=[],dt=[],_t={area:"\u57CE\u5899\u6B65\u9053",name:"\u57CE\u95E8\u697C",note:"\u6276\u5899\u53EF\u671B\u89C1\u8857\u5E02\u4E0E\u6C74\u6CB3\u3002\u95E8\u697C\u4ECE\u5185\u5ECA\u8FDB\u5165\uFF0C\u6848\u4E0A\u94FA\u7740\u6C74\u4EAC\u6C34\u9646\u56FE\u3002"},pt,bt={west:-155,east:174,north:-68,south:55},Bt=I=>(I-bt.west)/(bt.east-bt.west),Xt=I=>(I-bt.north)/(bt.south-bt.north),Vt=[];for(let I=1;I<ma.length;I++){let[S,B]=ma[I-1],[H,W]=ma[I],O=Math.hypot(H-S,W-B);for(let X=0;X<=Math.ceil(O);X++){let ut=X/Math.max(1,Math.ceil(O)),st=jt.lerp(S,H,ut),mt=jt.lerp(B,W,ut);if(r.walkHeight(st,mt)===null||r.isObstacle(st,mt,.16)){Vt.push([I,+st.toFixed(2),+mt.toFixed(2)]);break}}}Vt.length&&console.warn("Tour route intersects scene geometry",Vt);function lt(){let I=Dn.clientWidth,S=Dn.clientHeight;e.aspect=I/S,e.fov=I<510?62:52,e.updateProjectionMatrix(),i.setPixelRatio(Math.min(devicePixelRatio,Un?1.05:1.4)),i.setSize(I,S,!1),It("map-panel").hidden||$()}new ResizeObserver(lt).observe(Dn),lt();function ht(I,S,B=!1){let H=document.createElement("button");H.type="button",H.className=B?"":"route-stop";let W=document.createElement("b");return W.textContent=zc(S+1),W.setAttribute("aria-hidden","true"),H.append(W,document.createTextNode(I.name)),H.addEventListener("click",()=>{ft(!1),Et(()=>Tt(S,!1))}),H}Be.forEach((I,S)=>{let B=document.createElement("li"),H=ht(I,S);B.append(H),It("route").append(B),j.push(H);let W=document.createElement("li"),O=ht(I,S,!0);W.append(O),It("map-list").append(W);let X=document.createElement("button");X.type="button",X.className="map-dot",X.title=I.name,X.setAttribute("aria-label",I.name),X.textContent=String(S+1),X.style.left=Bt(I.x)*100+"%",X.style.top=Xt(I.z)*100+"%",X.addEventListener("click",()=>O.click()),It("map-pins").append(X),dt.push([O,X])});for(let I of Oh){let S=document.createElement("button");S.type="button",S.className="world-label",S.textContent=Be[I.stop].name,S.addEventListener("click",()=>Et(()=>Tt(I.stop,!1))),It("labels").append(S),I.button=S}function Pt(){if(E!=="scenic"||Un)return;let I=Dn.clientWidth,S=Dn.clientHeight;for(let B of Oh){let H=d.copy(B.point).project(e),W=(H.x+1)/2*I,O=(1-H.y)/2*S,X=It("intro").getBoundingClientRect(),ut=W>X.left-8&&W<X.right+32&&O>X.top-30&&O<X.bottom+12;B.button.hidden=H.z<-.92||H.z>1||W<22||W>I-94||O<92||O>S-150||ut,B.button.hidden||(B.button.style.transform="translate3d("+W.toFixed(1)+"px,"+O.toFixed(1)+"px,0)")}}function Ht(I){!I||pt===I||(pt=I,It("place-area").textContent=I.area,It("place-name").textContent=I.name,It("place-note").textContent=I.note)}function Ut(I,S=!1){b!==I&&(b=I,Ht(Be[I]),j.forEach((B,H)=>{let W=H===I;for(let O of[B,...dt[H]])W?O.setAttribute("aria-current","location"):O.removeAttribute("aria-current");if(W&&S){let O=It("route"),X=B.offsetLeft;(X<O.scrollLeft||X+B.offsetWidth>O.scrollLeft+O.clientWidth)&&O.scrollTo({left:Math.max(0,X-O.clientWidth/2+B.offsetWidth/2),behavior:vr.matches?"instant":"smooth"})}}))}function it(){let I=E!=="scenic";Dn.classList.toggle("walking",I),It("intro").hidden=I,It("walk-hud").hidden=!I,It("look-help").hidden=!I||Un||E==="tour",It("joystick").hidden=!Un||E!=="walk",It("take-control").hidden=Un||E!=="walk"||typeof tn.requestPointerLock!="function",It("tour").hidden=!I,It("tour").setAttribute("aria-pressed",String(E==="tour")),It("tour").firstElementChild.textContent=E==="tour"?"\u2161 \u7ED3\u675F\u6F2B\u6E38":"\u25B7 \u81EA\u52A8\u6F2B\u6E38",It("aim").hidden=document.pointerLockElement!==tn,It("tour-status").hidden=E!=="tour"}function Rt(I,S,B){let H=I-h.x,W=S-h.y,O=B-h.z;return[Math.atan2(-H,-O),Math.atan2(W,Math.hypot(H,O))]}function z(I){let S=Be[I];h.set(S.x,(r.walkHeight(S.x,S.z)??0)+1.61,S.z),[N,L]=Rt(...S.look),e.position.copy(h),e.rotation.set(L,N,0,"YXZ"),Ut(I,!0)}function zt(I){let S=[[Be[I].x,Be[I].z]],B=new Map([[0,I]]);for(let H=I;H<Be.length-1;H++)S.push(...Be[H].path,[Be[H+1].x,Be[H+1].z]),B.set(S.length-1,H+1);return{points:S,events:B,segment:0,progress:0,dwell:1.55}}function Tt(I,S){f&&(l.clear(),document.pointerLockElement&&document.exitPointerLock(),E=S?"tour":"walk",z(I),D=S?zt(I):null,it(),tn.focus({preventScroll:!0}))}function Dt(I=0){document.pointerLockElement&&document.exitPointerLock(),R=I,E="scenic",D=null,l.clear(),Ut(-1),it(),It("start").focus({preventScroll:!0})}function Et(I){if(!(Z||!f)){if(Z=!0,vr.matches){I(),Z=!1;return}It("fade").classList.add("in"),setTimeout(()=>{I(),It("fade").classList.remove("in"),Z=!1},220)}}function $t(){E==="tour"&&(E="walk",D=null,it())}function Ct(I,S,B=.05){let H=!1,W=h.y-1.61;for(let[X,ut]of[[h.x+I,h.z+S],[h.x+I,h.z],[h.x,h.z+S]]){if(Math.abs(X-h.x)+Math.abs(ut-h.z)<1e-4)continue;let st=r.walkHeight(X,ut,W);if(!(st===null||r.isObstacle(X,ut,.3,W)||Math.abs(st-W)>.73)){h.x=X,h.z=ut,H=!0;break}}let O=r.walkHeight(h.x,h.z,W)??0;return h.y=jt.lerp(h.y,O+1.61,1-Math.exp(-B*17)),H}function xt(){let I=0,S=1/0;for(let B=0;B<Be.length;B++){let H=Be[B],W=(H.x-h.x)**2+(H.z-h.z)**2;W<S&&(I=B,S=W)}(S<225||b<0||S<((Be[b].x-h.x)**2+(Be[b].z-h.z)**2)*.7)&&Ut(I,!0)}function ue(I){let S=(l.has("w")||l.has("arrowup")?1:0)-(l.has("s")||l.has("arrowdown")?1:0)+u.y,B=(l.has("d")?1:0)-(l.has("a")?1:0)+u.x;N+=((l.has("arrowleft")?1:0)-(l.has("arrowright")?1:0))*I*1.9;let H=Math.max(Math.hypot(S,B),1),W=(l.has("shift")?6.5:3.3)*I/H,O=Ct((Math.cos(N)*B-Math.sin(N)*S)*W,(-Math.sin(N)*B-Math.cos(N)*S)*W,I);return e.position.copy(h),O&&!vr.matches&&(e.position.y+=Math.sin(performance.now()*.011)*.035),e.rotation.set(L,N,0,"YXZ"),xt(),Ht(r.onGateTerrace(h.x,h.z,h.y-1.61)?_t:Be[b]),O}function ne(I){let S=D.points[D.segment],B=D.points[D.segment+1],H;if(D.dwell>0)I=Math.min(I,D.dwell),D.dwell-=I,H=Rt(...Be[b].look);else if(B){let X=Math.hypot(B[0]-S[0],B[1]-S[1]);D.progress=ws(D.progress+I*5.65/Math.max(.01,X),0,1);let ut=jt.lerp(S[0],B[0],D.progress),st=jt.lerp(S[1],B[1],D.progress);h.x=ut,h.z=st;let mt=D.points[D.segment+2]??B,gt=ws((D.progress-.58)*1.8,0,.78),Gt=jt.lerp(B[0],mt[0],gt),St=jt.lerp(B[1],mt[1],gt);H=Rt(Gt,(r.walkHeight(Gt,St)??0)+1.25,St),D.progress===1&&(D.segment++,D.progress=0,D.events.has(D.segment)&&(Ut(D.events.get(D.segment),!0),D.dwell=2.7))}else return $t(),!1;let W=(r.walkHeight(h.x,h.z)??0)+1.67;h.y=jt.lerp(h.y,W,1-Math.exp(-I*12));let O=Math.atan2(Math.sin(H[0]-N),Math.cos(H[0]-N));return N+=O*(1-Math.exp(-I*3.4)),L=jt.lerp(L,ws(H[1],-.4,.42),1-Math.exp(-I*4.4)),e.position.copy(h),e.rotation.set(L,N,0,"YXZ"),D.dwell===0}let k=_i(0,0,0);function _(){let I=Fc[R];e.position.set(...I.position),vr.matches||(e.position.x+=Math.sin(v*.09)*1.22,e.position.y+=Math.cos(v*.13)*.38),Un&&R===0&&(e.position.x-=10,e.position.z-=4),e.lookAt(k.set(...I.look))}function $(){let I=g.clientWidth,S=g.clientHeight;if(!I||!S)return;let B=Math.min(2,devicePixelRatio);M.width=Math.round(I*B),M.height=Math.round(S*B),p.setTransform(B,0,0,B,0,0);let H=O=>Bt(O)*I,W=O=>Xt(O)*S;p.fillStyle="#e2d9b9",p.fillRect(0,0,I,S),p.strokeStyle="#b7ad9045",p.lineWidth=1;for(let O=0;O<I;O+=23)p.beginPath(),p.moveTo(O,0),p.lineTo(O,S),p.stroke();for(let O=0;O<S;O+=23)p.beginPath(),p.moveTo(0,O),p.lineTo(I,O),p.stroke();p.beginPath();for(let O=bt.west;O<=bt.east;O+=1)p.lineTo(H(O),W(He(O)-Pn(O)));for(let O=bt.east;O>=bt.west;O-=1)p.lineTo(H(O),W(He(O)+Pn(O)));p.closePath(),p.fillStyle="#819991",p.fill(),p.strokeStyle="#596c60",p.stroke();for(let O of r.obstacles)O.x1-O.x0<2.2||O.z1-O.z0<2.2||(p.fillStyle=O.x0>101&&O.x1<112?"#836f58":"#a49875",p.fillRect(H(O.x0),W(O.z0),H(O.x1)-H(O.x0),W(O.z1)-W(O.z0)));for(let{paths:O,turn:X,exit:ut}of r.gateStairs){p.fillStyle="#a48b63";for(let st of[...O,X,ut])p.fillRect(H(st.x0),W(st.z0),H(st.x1)-H(st.x0),W(st.z1)-W(st.z0));p.strokeStyle="#65563e",p.lineWidth=1;for(let st of O)for(let mt=st.z0+1.2;mt<st.z1;mt+=1.4)p.beginPath(),p.moveTo(H(st.x0),W(mt)),p.lineTo(H(st.x1),W(mt)),p.stroke()}p.beginPath();for(let[O,X]of ma)p.lineTo(H(O),W(X));if(p.strokeStyle="#f6ecce",p.lineWidth=4,p.stroke(),p.strokeStyle="#934f3c",p.lineWidth=1.3,p.setLineDash([4,3]),p.stroke(),p.setLineDash([]),p.font="bold "+Math.max(11,I*.021)+"px SimSun, serif",p.fillStyle="#f0e8cf",p.fillText("\u6C74\u6CB3",H(-19),W(5)),p.fillStyle="#665b46",p.fillText("\u5317 \u2191",I-34,16),E!=="scenic"){let O=H(h.x),X=W(h.z),ut=-Math.sin(N),st=-Math.cos(N);p.beginPath(),p.moveTo(O+8*ut,X+8*st),p.lineTo(O-4*ut+4*st,X-4*st-4*ut),p.lineTo(O-4*ut-4*st,X-4*st+4*ut),p.closePath(),p.fillStyle="#263d31",p.fill(),p.strokeStyle="#fff5da",p.lineWidth=1,p.stroke(),K=h.x,nt=h.z}}function at(){document.pointerLockElement&&document.exitPointerLock(),It("map-panel").hidden=!1,It("map-button").setAttribute("aria-expanded","true"),$(),It("close-map").focus()}function ft(I=!0){It("map-panel").hidden||(It("map-panel").hidden=!0,It("map-button").setAttribute("aria-expanded","false"),I&&It("map-button").focus())}let rt=["\u5317","\u4E1C\u5317","\u4E1C","\u4E1C\u5357","\u5357","\u897F\u5357","\u897F","\u897F\u5317"],Nt=["\u8FB0\u65F6","\u5DF3\u65F6","\u5348\u65F6","\u672A\u65F6","\u7533\u65F6"];function vt(I){let S=Math.floor(I*60+.002),B=Math.floor(S/60),H=zc(B)+":"+zc(S%60);C!==H&&(It("clock").textContent=H,It("clock").dateTime=H,It("period").textContent=Nt[ws(Math.floor((B-7)/2),0,4)],It("time-range")!==document.activeElement&&(It("time-range").value=String(I)),C=H),e.getWorldDirection(k);let W=(Math.round(Math.atan2(k.x,-k.z)/(Math.PI/4))+8)%8;F%12===1&&(It("heading-text").textContent=rt[W]+" \u2191")}function y(){Dn.classList.add("ready"),It("start").disabled=!1,It("intro-tour").disabled=!1,It("load-status").textContent="",f=!0}function A(I){let S=q?ws((I-q)/1e3,.001,.12):.016;q=I,F++,V||(v+=S);let B=8+((T+v*.0078)%8.75+8.75)%8.75,H=!1;E==="scenic"?_():E==="tour"?H=ne(S):It("map-panel").hidden&&(H=ue(S)),(!V||F===1||m.distanceToSquared(e.position)>100)&&(n.value=v,a.update(v,e.position),m.copy(e.position)),o.update(v,B,e,F),i.render(t,e),F%5===1&&Pt(),F%4===1&&vt(B),!It("map-panel").hidden&&F%10===1&&Math.hypot(h.x-K,h.z-nt)>.38&&$();let{x:W,z:O}=e.position,X=Math.abs(W-Fe)<5.6&&Math.abs(O-He(Fe))<22,ut=r.shopRooms.find(({x:gt,z:Gt,w:St,d:kt})=>Math.abs(W-gt)<St/2&&Math.abs(O-Gt)<kt/2),st=r.wharves.some(({x:gt,z:Gt,len:St,width:kt})=>Math.abs(W-gt)<St/2+2&&Math.abs(O-Gt)<kt/2+2.7),mt="river";ut?mt=ut.tavern?"tavern":"shop":X?mt="market":st?mt="dock":W<-84&&O>14?mt="field":W>115&&O<-31?mt="lane":(W>-19&&W<104&&O<-18&&O>-31||W>-20&&W<36&&O>18&&O<29||W>119&&O>-29&&O<-18)&&(mt="market"),Cg.update(mt,H,X,S),f||y(),et=requestAnimationFrame(A)}It("start").addEventListener("click",()=>Et(()=>Tt(0,!1))),It("intro-tour").addEventListener("click",()=>Et(()=>Tt(0,!0))),It("home").addEventListener("click",()=>Et(()=>Dt())),It("view").addEventListener("click",()=>Et(()=>Dt(E==="scenic"?(R+1)%Fc.length:0))),It("tour").addEventListener("click",()=>{E==="tour"?$t():Et(()=>Tt(b>=Be.length-1?0:Math.max(0,b),!0))}),It("map-button").addEventListener("click",()=>{f&&(It("map-panel").hidden?at():ft())}),It("close-map").addEventListener("click",()=>ft()),It("time-button").addEventListener("click",()=>{let I=It("day-panel");I.hidden=!I.hidden,It("time-button").setAttribute("aria-expanded",String(!I.hidden))}),It("time-range").addEventListener("input",I=>{T=Number(I.target.value)-8-v*.0078}),It("full").hidden=!document.fullscreenEnabled,It("full").addEventListener("click",async()=>{document.fullscreenElement?await document.exitFullscreen().catch(()=>{}):await Dn.requestFullscreen().catch(()=>{})});function x(I){V=I;let S=It("pause"),B=I?"\u7EE7\u7EED\u57CE\u4E2D\u52A8\u6001":"\u6682\u505C\u57CE\u4E2D\u52A8\u6001";S.title=B,S.setAttribute("aria-label",B),S.setAttribute("aria-pressed",String(I)),S.textContent=I?"\u25B7":"\u2161"}x(V),It("pause").addEventListener("click",()=>x(!V)),It("take-control").addEventListener("click",async()=>{try{await tn.requestPointerLock()}catch{}}),document.addEventListener("pointerlockchange",()=>{it(),document.pointerLockElement===tn?tn.focus({preventScroll:!0}):l.clear()});function w(I,S,B){N-=I*B,L=ws(L-S*B,-1.22,1.18)}tn.addEventListener("pointerdown",I=>{E==="scenic"||I.button!==0||($t(),!document.pointerLockElement&&(c.id=I.pointerId,c.x=I.clientX,c.y=I.clientY,tn.setPointerCapture(I.pointerId),Dn.classList.add("dragging")))}),tn.addEventListener("pointermove",I=>{c.id===I.pointerId&&(w(I.clientX-c.x,I.clientY-c.y,Un?.006:.0052),c.x=I.clientX,c.y=I.clientY)}),tn.addEventListener("lostpointercapture",()=>{c.id=null,Dn.classList.remove("dragging")}),document.addEventListener("mousemove",I=>{document.pointerLockElement===tn&&w(I.movementX,I.movementY,.0022)});let U=It("joystick");function G(I){let S=U.getBoundingClientRect(),B=S.width/2,H=I.clientX-S.left-B,W=I.clientY-S.top-B,O=B*.67,X=Math.max(1,Math.hypot(H,W)/O);H/=X,W/=X,u.x=H/O,u.y=-W/O,It("stick").style.transform="translate("+H+"px,"+W+"px)"}U.addEventListener("pointerdown",I=>{u.id=I.pointerId,U.setPointerCapture(u.id),G(I)}),U.addEventListener("pointermove",I=>{I.pointerId===u.id&&G(I)}),U.addEventListener("lostpointercapture",()=>{u.id=null,u.x=0,u.y=0,It("stick").style.transform=""});let Y=new Set(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"]);window.addEventListener("keydown",I=>{let S=I.key.toLowerCase();if(S==="escape"){It("map-panel").hidden?It("day-panel").hidden?E==="tour"&&$t():It("time-button").click():ft();return}if(!It("map-panel").hidden){if(S==="tab"){let B=[...It("map-panel").querySelectorAll("button")],H=B[0],W=B.at(-1);I.shiftKey&&document.activeElement===H&&(I.preventDefault(),W.focus()),!I.shiftKey&&document.activeElement===W&&(I.preventDefault(),H.focus())}return}I.target.closest?.("input")||I.altKey||I.ctrlKey||I.metaKey||(S==="m"&&!I.repeat&&at(),E!=="scenic"&&Y.has(S)&&(I.preventDefault(),$t(),l.add(S)))}),window.addEventListener("keyup",I=>l.delete(I.key.toLowerCase())),window.addEventListener("blur",()=>l.clear()),document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(et),l.clear()):(q=0,et=requestAnimationFrame(A))}),tn.addEventListener("webglcontextlost",I=>{I.preventDefault(),cancelAnimationFrame(et),Dn.classList.remove("ready"),Dt(),It("load-status").textContent="\u4E09\u7EF4\u573A\u666F\u6682\u65F6\u4E2D\u65AD\uFF0C\u6B63\u5728\u7B49\u5F85\u6D4F\u89C8\u5668\u6062\u590D\u3002"}),tn.addEventListener("webglcontextrestored",()=>{F=0,q=0,f=!1,et=requestAnimationFrame(A)}),tn.dataset.city="three",new URLSearchParams(location.search).has("test")&&(window.cityTest={camera:e,world:r,life:a,pathProblems:Vt,stops:Be,renderer:i,get mode(){return E},get player(){return h.toArray()},get time(){return v},get index(){return b},enter:Tt,walk:Ct,aimAt(I,S,B){[N,L]=Rt(I,S,B)},advanceTour(I){for(;E==="tour"&&I>0;)ne(.05),I-=.05}}),et=requestAnimationFrame(A)}requestAnimationFrame(()=>setTimeout(()=>Ig().catch(i=>{console.error(i),It("load-status").textContent="\u5F53\u524D\u6D4F\u89C8\u5668\u7684 WebGL 2 \u4E09\u7EF4\u573A\u666F\u65E0\u6CD5\u542F\u52A8\u3002"}),30));})();
/*! For license information please see city3d.js.LEGAL.txt */
