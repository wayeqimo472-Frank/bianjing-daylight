(()=>{var il=0,za=1,sl=2;var Xs=1,rl=2,En=3,dn=0,De=1,xe=2,zn=0,di=1,ka=2,Va=3,Ha=4,ol=5,$n=100,al=101,cl=102,ll=103,hl=104,ul=200,dl=201,fl=202,pl=203,Pr=204,Lr=205,ml=206,gl=207,_l=208,xl=209,vl=210,yl=211,Ml=212,Sl=213,bl=214,eo=0,no=1,io=2,fi=3,so=4,ro=5,oo=6,ao=7,Ga=0,Tl=1,wl=2,kn=0,El=1,Al=2,Cl=3,co=4,Rl=5,Il=6,Pl=7;var Wa=300,vi=301,yi=302,lo=303,ho=304,qs=306,pi=1e3,Jn=1001,Dr=1002,Ge=1003,Ll=1004;var Ys=1005;var fn=1006,uo=1007;var ti=1008;var _n=1009,Xa=1010,qa=1011,Qi=1012,fo=1013,ei=1014,xn=1015,ts=1016,po=1017,mo=1018,es=1020,Ya=35902,Za=35899,Ja=1021,$a=1022,on=1023,Wi=1026,ns=1027,go=1028,_o=1029,Ka=1030,xo=1031;var vo=1033,Zs=33776,Js=33777,$s=33778,Ks=33779,yo=35840,Mo=35841,So=35842,bo=35843,To=36196,wo=37492,Eo=37496,Ao=37808,Co=37809,Ro=37810,Io=37811,Po=37812,Lo=37813,Do=37814,Uo=37815,No=37816,Fo=37817,Bo=37818,Oo=37819,zo=37820,ko=37821,Vo=36492,Ho=36494,Go=36495,Wo=36283,Xo=36284,qo=36285,Yo=36286;var Ms=2300,Ur=2301,Ir=2302,Ia=2400,Pa=2401,La=2402;var Dl=3200,Ul=3201;var ja=0,Nl=1,Vn="",be="srgb",mi="srgb-linear",Ss="linear",re="srgb";var ui=7680;var Da=519,Fl=512,Bl=513,Ol=514,Qa=515,zl=516,kl=517,Vl=518,Hl=519,Ua=35044,Mi=35048;var tc="300 es",un=2e3,bs=2001;var Nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=1234567,vs=Math.PI/180,Xi=180/Math.PI;function is(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function ec(i,t){return(i%t+t)%t}function zh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function kh(i,t,e){return i!==t?(e-i)/(t-i):0}function ys(i,t,e){return(1-e)*i+e*t}function Vh(i,t,e,n){return ys(i,t,1-Math.exp(-e*n))}function Hh(i,t=1){return t-Math.abs(ec(i,t*2)-t)}function Gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qh(i,t){return i+Math.random()*(t-i)}function Yh(i){return i*(.5-Math.random())}function Zh(i){i!==void 0&&(Dc=i);let t=Dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jh(i){return i*vs}function $h(i){return i*Xi}function Kh(i){return(i&i-1)===0&&i!==0}function jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Zt={DEG2RAD:vs,RAD2DEG:Xi,generateUUID:is,clamp:jt,euclideanModulo:ec,mapLinear:zh,inverseLerp:kh,lerp:ys,damp:Vh,pingpong:Hh,smoothstep:Gh,smootherstep:Wh,randInt:Xh,randFloat:qh,randFloatSpread:Yh,seededRandom:Zh,degToRad:Jh,radToDeg:$h,isPowerOfTwo:Kh,ceilPowerOfTwo:jh,floorPowerOfTwo:Qh,setQuaternionFromProperEuler:tu,normalize:Oe,denormalize:Hi},Qt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==_){let m=1-a,f=l*d+c*p+h*_+u*v,b=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){let A=Math.sqrt(T),C=Math.atan2(A,f*b);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}let M=a*b;if(l=l*m+d*M,c=c*m+p*M,h=h*m+_*M,u=u*m+v*M,m===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*p-c*d,t[e+1]=l*_+h*d+c*u-a*p,t[e+2]=c*_+h*p+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ra.copy(this).projectOnVector(t),this.sub(ra)}reflect(t){return this.sub(ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ra=new X,Uc=new ze,Yt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],v=s[0],m=s[3],f=s[6],b=s[1],T=s[4],M=s[7],A=s[2],C=s[5],R=s[8];return r[0]=o*v+a*b+l*A,r[3]=o*m+a*T+l*C,r[6]=o*f+a*M+l*R,r[1]=c*v+h*b+u*A,r[4]=c*m+h*T+u*C,r[7]=c*f+h*M+u*R,r[2]=d*v+p*b+_*A,r[5]=d*m+p*T+_*C,r[8]=d*f+p*M+_*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,_=e*u+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(oa.makeScale(t,e)),this}rotate(t){return this.premultiply(oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},oa=new Yt;function nc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gl(){let i=Ts("canvas");return i.style.display="block",i}var Nc={};function qi(i){i in Nc||(Nc[i]=!0,console.warn(i))}function Wl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Fc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eu(){let i={enabled:!0,workingColorSpace:mi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?Ss:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mi]:{primaries:t,whitePoint:n,transfer:Ss,toXYZ:Fc,fromXYZ:Bc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:n,transfer:re,toXYZ:Fc,fromXYZ:Bc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),i}var ee=eu();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ri,Nr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ri===void 0&&(Ri=Ts("canvas")),Ri.width=t.width,Ri.height=t.height;let s=Ri.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ri}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ts("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Un(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nu=0,Yi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(aa(s[o].image)):r.push(aa(s[o]))}else r=aa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var iu=0,ca=new X,ke=class i extends Nn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Jn,s=Jn,r=fn,o=ti,a=on,l=_n,c=i.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=is(),this.name="",this.source=new Yi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pi:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case Dr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pi:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case Dr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Wa;ke.DEFAULT_ANISOTROPY=1;var le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,M=(p+1)/2,A=(f+1)/2,C=(h+d)/4,R=(u+v)/4,U=(_+m)/4;return T>M&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=C/n,r=R/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=C/s,r=U/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=U/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(u-v)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fr=class extends Nn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new ke(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Yi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Fr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ws=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Br=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),lr.subVectors(this.max,fs),Ii.subVectors(t.a,fs),Pi.subVectors(t.b,fs),Li.subVectors(t.c,fs),Hn.subVectors(Pi,Ii),Gn.subVectors(Li,Pi),ai.subVectors(Ii,Li);let e=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-ai.z,ai.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,ai.z,0,-ai.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-ai.y,ai.x,0];return!la(e,Ii,Pi,Li,lr)||(e=[1,0,0,0,1,0,0,0,1],!la(e,Ii,Pi,Li,lr))?!1:(hr.crossVectors(Hn,Gn),e=[hr.x,hr.y,hr.z],la(e,Ii,Pi,Li,lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Rn=[new X,new X,new X,new X,new X,new X,new X,new X],cn=new X,cr=new Tn,Ii=new X,Pi=new X,Li=new X,Hn=new X,Gn=new X,ai=new X,fs=new X,lr=new X,hr=new X,ci=new X;function la(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ci.fromArray(i,r);let a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var su=new Tn,ps=new X,ha=new X,Fn=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):su.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);let e=ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(ha)),this.expandByPoint(ps.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},In=new X,ua=new X,ur=new X,Wn=new X,da=new X,dr=new X,fa=new X,Es=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ua.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(ua);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ur),a=Wn.dot(this.direction),l=-Wn.dot(ur),c=Wn.lengthSq(),h=Math.abs(1-o*o),u,d,p,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ua).addScaledVector(ur,d),p}intersectSphere(t,e){In.subVectors(t.center,this.origin);let n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){da.subVectors(e,t),dr.subVectors(n,t),fa.crossVectors(da,dr);let o=this.direction.dot(fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,t);let l=a*this.direction.dot(dr.crossVectors(Wn,dr));if(l<0)return null;let c=a*this.direction.dot(da.cross(Wn));if(c<0||l+c>o)return null;let h=-a*Wn.dot(fa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,_,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,_,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,_,v,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),o=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,_=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,_=c*h,v=c*u;e[0]=d+v*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,_=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,_=a*h,v=a*u;e[0]=l*h,e[4]=_*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=_*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+_,e[10]=d-v*u}else if(t.order==="XZY"){let d=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ru,t,ou)}lookAt(t,e,n){let s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Xn.crossVectors(n,Je),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Xn.crossVectors(n,Je)),Xn.normalize(),fr.crossVectors(Je,Xn),s[0]=Xn.x,s[4]=fr.x,s[8]=Je.x,s[1]=Xn.y,s[5]=fr.y,s[9]=Je.y,s[2]=Xn.z,s[6]=fr.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],v=n[6],m=n[10],f=n[14],b=n[3],T=n[7],M=n[11],A=n[15],C=s[0],R=s[4],U=s[8],y=s[12],S=s[1],O=s[5],D=s[9],q=s[13],nt=s[2],J=s[6],Z=s[10],mt=s[14],$=s[3],_t=s[7],gt=s[11],Mt=s[15];return r[0]=o*C+a*S+l*nt+c*$,r[4]=o*R+a*O+l*J+c*_t,r[8]=o*U+a*D+l*Z+c*gt,r[12]=o*y+a*q+l*mt+c*Mt,r[1]=h*C+u*S+d*nt+p*$,r[5]=h*R+u*O+d*J+p*_t,r[9]=h*U+u*D+d*Z+p*gt,r[13]=h*y+u*q+d*mt+p*Mt,r[2]=_*C+v*S+m*nt+f*$,r[6]=_*R+v*O+m*J+f*_t,r[10]=_*U+v*D+m*Z+f*gt,r[14]=_*y+v*q+m*mt+f*Mt,r[3]=b*C+T*S+M*nt+A*$,r[7]=b*R+T*O+M*J+A*_t,r[11]=b*U+T*D+M*Z+A*gt,r[15]=b*y+T*q+M*mt+A*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],_=t[3],v=t[7],m=t[11],f=t[15];return _*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+v*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],_=t[12],v=t[13],m=t[14],f=t[15],b=u*m*c-v*d*c+v*l*p-a*m*p-u*l*f+a*d*f,T=_*d*c-h*m*c-_*l*p+o*m*p+h*l*f-o*d*f,M=h*v*c-_*u*c+_*a*p-o*v*p-h*a*f+o*u*f,A=_*u*l-h*v*l-_*a*d+o*v*d+h*a*m-o*u*m,C=e*b+n*T+s*M+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=b*R,t[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*f-n*d*f)*R,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*f+n*l*f)*R,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*R,t[4]=T*R,t[5]=(h*m*r-_*d*r+_*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*f-e*l*f)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*R,t[8]=M*R,t[9]=(_*u*r-h*v*r-_*n*p+e*v*p+h*n*f-e*u*f)*R,t[10]=(o*v*r-_*a*r+_*n*c-e*v*c-o*n*f+e*a*f)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*R,t[12]=A*R,t[13]=(h*v*s-_*u*s+_*n*d-e*v*d-h*n*m+e*u*m)*R,t[14]=(_*a*s-o*v*s-_*n*l+e*v*l+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,_=r*u,v=o*h,m=o*u,f=a*u,b=l*c,T=l*h,M=l*u,A=n.x,C=n.y,R=n.z;return s[0]=(1-(v+f))*A,s[1]=(p+M)*A,s[2]=(_-T)*A,s[3]=0,s[4]=(p-M)*C,s[5]=(1-(d+f))*C,s[6]=(m+b)*C,s[7]=0,s[8]=(_+T)*R,s[9]=(m-b)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Di.set(s[0],s[1],s[2]).length(),o=Di.set(s[4],s[5],s[6]).length(),a=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);let c=1/r,h=1/o,u=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=un,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),_,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===un)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===bs)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=un,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s),_,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===un)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===bs)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Di=new X,ln=new se,ru=new X(0,0,0),ou=new X(1,1,1),Xn=new X,fr=new X,Je=new X,Oc=new se,zc=new ze,pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zc.setFromEuler(this),this.setFromQuaternion(zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},au=0,kc=new X,Ui=new ze,Pn=new se,pr=new X,ms=new X,cu=new X,lu=new ze,Vc=new X(1,0,0),Hc=new X(0,1,0),Gc=new X(0,0,1),Wc={type:"added"},hu={type:"removed"},Ni={type:"childadded",child:null},pa={type:"childremoved",child:null},ye=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new X,e=new pn,n=new ze,s=new X(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Yt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Vc,t)}rotateY(t){return this.rotateOnAxis(Hc,t)}rotateZ(t){return this.rotateOnAxis(Gc,t)}translateOnAxis(t,e){return kc.copy(t).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vc,t)}translateY(t){return this.translateOnAxis(Hc,t)}translateZ(t){return this.translateOnAxis(Gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ms,pr,this.up):Pn.lookAt(pr,ms,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hu),pa.child=t,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ye.DEFAULT_UP=new X(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new X,Ln=new X,ma=new X,Dn=new X,Fi=new X,Bi=new X,Xc=new X,ga=new X,_a=new X,xa=new X,va=new le,ya=new le,Ma=new le,Zn=class i{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),Ln.subVectors(n,e),ma.subVectors(t,e);let o=hn.dot(hn),a=hn.dot(Ln),l=hn.dot(ma),c=Ln.dot(Ln),h=Ln.dot(ma),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return va.setScalar(0),ya.setScalar(0),Ma.setScalar(0),va.fromBufferAttribute(t,e),ya.fromBufferAttribute(t,n),Ma.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(va,r.x),o.addScaledVector(ya,r.y),o.addScaledVector(Ma,r.z),o}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),Ln.subVectors(t,e),hn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),hn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Fi.subVectors(s,n),Bi.subVectors(r,n),ga.subVectors(t,n);let l=Fi.dot(ga),c=Bi.dot(ga);if(l<=0&&c<=0)return e.copy(n);_a.subVectors(t,s);let h=Fi.dot(_a),u=Bi.dot(_a);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Fi,o);xa.subVectors(t,r);let p=Fi.dot(xa),_=Bi.dot(xa);if(_>=0&&p<=_)return e.copy(r);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Bi,a);let m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Xc.subVectors(r,s),a=(u-h)/(u-h+(p-_)),e.copy(s).addScaledVector(Xc,a);let f=1/(m+v+d);return o=v*f,a=d*f,e.copy(n).addScaledVector(Fi,o).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Sa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=ec(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Sa(o,r,t+1/3),this.g=Sa(o,r,t),this.b=Sa(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let n=Xl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return ee.workingToColorSpace(Ne.copy(this),t),Math.round(jt(Ne.r*255,0,255))*65536+Math.round(jt(Ne.g*255,0,255))*256+Math.round(jt(Ne.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=be){ee.workingToColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(mr);let n=ys(qn.h,mr.h,e),s=ys(qn.s,mr.s,e),r=ys(qn.l,mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new wt;wt.NAMES=Xl;var uu=0,Bn=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=is(),this.name="",this.type="Material",this.blending=di,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pr,this.blendDst=Lr,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pr&&(n.blendSrc=this.blendSrc),this.blendDst!==Lr&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Da&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},gi=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new X,gr=new Qt,du=0,_e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:du++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ua,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ua&&(t.usage=this.usage),t}};var Cs=class extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Rs=class extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}},fu=0,nn=new se,ba=new ye,Oi=new X,$e=new Tn,gs=new Tn,Re=new X,me=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nc(t)?Rs:Cs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors($e.min,gs.min),$e.expandByPoint(Re),Re.addVectors($e.max,gs.max),$e.expandByPoint(Re)):($e.expandByPoint(gs.min),$e.expandByPoint(gs.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Re.fromBufferAttribute(a,c),l&&(Oi.fromBufferAttribute(t,c),Re.add(Oi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new X,l[U]=new X;let c=new X,h=new X,u=new X,d=new Qt,p=new Qt,_=new Qt,v=new X,m=new X;function f(U,y,S){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,y),_.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(d),_.sub(d);let O=1/(p.x*_.y-_.x*p.y);isFinite(O)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(O),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(O),a[U].add(v),a[y].add(v),a[S].add(v),l[U].add(m),l[y].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,y=b.length;U<y;++U){let S=b[U],O=S.start,D=S.count;for(let q=O,nt=O+D;q<nt;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let T=new X,M=new X,A=new X,C=new X;function R(U){A.fromBufferAttribute(s,U),C.copy(A);let y=a[U];T.copy(y),T.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(C,y);let O=M.dot(l[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,O)}for(let U=0,y=b.length;U<y;++U){let S=b[U],O=S.start,D=S.count;for(let q=O,nt=O+D;q<nt;q+=3)R(t.getX(q+0)),R(t.getX(q+1)),R(t.getX(q+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new X,r=new X,o=new X,a=new X,l=new X,c=new X,h=new X,u=new X;if(t)for(let d=0,p=t.count;d<p;d+=3){let _=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new _e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qc=new se,li=new Es,_r=new Fn,Yc=new X,xr=new X,vr=new X,yr=new X,Ta=new X,Mr=new X,Zc=new X,Sr=new X,he=class extends ye{constructor(t=new me,e=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ta.fromBufferAttribute(u,t),o?Mr.addScaledVector(Ta,h):Mr.addScaledVector(Ta.sub(e),h))}e.add(Mr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(_r.containsPoint(li.origin)===!1&&(li.intersectSphere(_r,Yc)===null||li.origin.distanceToSquared(Yc)>(t.far-t.near)**2))&&(qc.copy(r).invert(),li.copy(t.ray).applyMatrix4(qc),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){let m=d[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,A=T;M<A;M+=3){let C=a.getX(M),R=a.getX(M+1),U=a.getX(M+2);s=br(this,f,t,n,c,h,u,C,R,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){let b=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);s=br(this,o,t,n,c,h,u,b,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){let m=d[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,A=T;M<A;M+=3){let C=M,R=M+1,U=M+2;s=br(this,f,t,n,c,h,u,C,R,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){let b=m,T=m+1,M=m+2;s=br(this,o,t,n,c,h,u,b,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function pu(i,t,e,n,s,r,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===dn,a),l===null)return null;Sr.copy(a),Sr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Sr);return c<e.near||c>e.far?null:{distance:c,point:Sr.clone(),object:i}}function br(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,xr),i.getVertexPosition(l,vr),i.getVertexPosition(c,yr);let h=pu(i,t,e,n,xr,vr,yr,Zc);if(h){let u=new X;Zn.getBarycoord(Zc,xr,vr,yr,u),s&&(h.uv=Zn.getInterpolatedAttribute(s,a,l,c,u,new Qt)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,a,l,c,u,new Qt)),o&&(h.normal=Zn.getInterpolatedAttribute(o,a,l,c,u,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new X,materialIndex:0};Zn.getNormal(xr,vr,yr,d.normal),h.face=d,h.barycoord=u}return h}var wn=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function _(v,m,f,b,T,M,A,C,R,U,y){let S=M/R,O=A/U,D=M/2,q=A/2,nt=C/2,J=R+1,Z=U+1,mt=0,$=0,_t=new X;for(let gt=0;gt<Z;gt++){let Mt=gt*O-q;for(let Bt=0;Bt<J;Bt++){let Pt=Bt*S-D;_t[v]=Pt*b,_t[m]=Mt*T,_t[f]=nt,c.push(_t.x,_t.y,_t.z),_t[v]=0,_t[m]=0,_t[f]=C>0?1:-1,h.push(_t.x,_t.y,_t.z),u.push(Bt/R),u.push(1-gt/U),mt+=1}}for(let gt=0;gt<U;gt++)for(let Mt=0;Mt<R;Mt++){let Bt=d+Mt+J*gt,Pt=d+Mt+J*(gt+1),Ft=d+(Mt+1)+J*(gt+1),Xt=d+(Mt+1)+J*gt;l.push(Bt,Pt,Xt),l.push(Pt,Ft,Xt),$+=6}a.addGroup(p,$,y),p+=$,d+=mt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Si(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){let t={};for(let e=0;e<i.length;e++){let n=Si(i[e]);for(let s in n)t[s]=n[s]}return t}function mu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ic(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var js={clone:Si,merge:Fe},gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pe=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gu,this.fragmentShader=_u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Is=class extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yn=new X,Jc=new Qt,$c=new Qt,Ie=class extends Is{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Jc,$c),e.subVectors($c,Jc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},zi=-90,ki=1,Or=class extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(zi,ki,t,e);s.layers=this.layers,this.add(s);let r=new Ie(zi,ki,t,e);r.layers=this.layers,this.add(r);let o=new Ie(zi,ki,t,e);o.layers=this.layers,this.add(o);let a=new Ie(zi,ki,t,e);a.layers=this.layers,this.add(a);let l=new Ie(zi,ki,t,e);l.layers=this.layers,this.add(l);let c=new Ie(zi,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ps=class extends ke{constructor(t=[],e=vi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zr=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ps(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),r=new Pe({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:zn});r.uniforms.tEquirect.value=e;let o=new he(s,r),a=e.minFilter;return e.minFilter===ti&&(e.minFilter=fn),new Or(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},we=class extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},xu={type:"move"},Zi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ls=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ds=class extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var kr=class extends ke{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,h=Ge,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ji=class extends _e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Vi=new se,Kc=new se,Tr=[],jc=new Tn,vu=new se,_s=new he,xs=new Fn,_i=class extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),jc.copy(t.boundingBox).applyMatrix4(Vi),this.boundingBox.union(jc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),xs.copy(t.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(n),t.ray.intersectsSphere(xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vi),Kc.multiplyMatrices(n,Vi),_s.matrixWorld=Kc,_s.raycast(t,Tr);for(let o=0,a=Tr.length;o<a;o++){let l=Tr[o];l.instanceId=r,l.object=this,e.push(l)}Tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new kr(new Float32Array(s*this.count),s,this.count,go,xn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},wa=new X,yu=new X,Mu=new Yt,sn=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=wa.subVectors(n,e).cross(yu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mu.getNormalMatrix(t),s=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},hi=new Fn,Su=new Qt(.5,.5),wr=new X,$i=class{constructor(t=new sn,e=new sn,n=new sn,s=new sn,r=new sn,o=new sn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],_=r[8],v=r[9],m=r[10],f=r[11],b=r[12],T=r[13],M=r[14],A=r[15];if(s[0].setComponents(c-o,p-h,f-_,A-b).normalize(),s[1].setComponents(c+o,p+h,f+_,A+b).normalize(),s[2].setComponents(c+a,p+u,f+v,A+T).normalize(),s[3].setComponents(c-a,p-u,f-v,A-T).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,p-d,f-m,A-M).normalize();else if(s[4].setComponents(c-l,p-d,f-m,A-M).normalize(),e===un)s[5].setComponents(c+l,p+d,f+m,A+M).normalize();else if(e===bs)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){hi.center.set(0,0,0);let e=Su.distanceTo(t.center);return hi.radius=.7071067811865476+e,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(wr.x=s.normal.x>0?t.max.x:t.min.x,wr.y=s.normal.y>0?t.max.y:t.min.y,wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vr=class extends Bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qc=new se,Na=new Es,Er=new Fn,Ar=new X,Us=class extends ye{constructor(t=new me,e=new Vr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),Er.radius+=r,t.ray.intersectsSphere(Er)===!1)return;Qc.copy(s).invert(),Na.copy(t.ray).applyMatrix4(Qc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,v=p;_<v;_++){let m=c.getX(_);Ar.fromBufferAttribute(u,m),tl(Ar,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,v=p;_<v;_++)Ar.fromBufferAttribute(u,_),tl(Ar,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function tl(i,t,e,n,s,r,o){let a=Na.distanceSqToPoint(i);if(a<e){let l=new X;Na.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var On=class extends ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ns=class extends ke{constructor(t,e,n=ei,s,r,o,a=Ge,l=Ge,c,h=Wi,u=1){if(h!==Wi&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fs=class extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ke=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],_=0,v=[],m=n/2,f=0;b(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(p,2));function b(){let M=new X,A=new X,C=0,R=(e-t)/n;for(let U=0;U<=r;U++){let y=[],S=U/r,O=S*(e-t)+t;for(let D=0;D<=s;D++){let q=D/s,nt=q*l+a,J=Math.sin(nt),Z=Math.cos(nt);A.x=O*J,A.y=-S*n+m,A.z=O*Z,u.push(A.x,A.y,A.z),M.set(J,R,Z).normalize(),d.push(M.x,M.y,M.z),p.push(q,1-S),y.push(_++)}v.push(y)}for(let U=0;U<s;U++)for(let y=0;y<r;y++){let S=v[y][U],O=v[y+1][U],D=v[y+1][U+1],q=v[y][U+1];(t>0||y!==0)&&(h.push(S,O,q),C+=3),(e>0||y!==r-1)&&(h.push(O,D,q),C+=3)}c.addGroup(f,C,0),f+=C}function T(M){let A=_,C=new Qt,R=new X,U=0,y=M===!0?t:e,S=M===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),_++;let O=_;for(let D=0;D<=s;D++){let nt=D/s*l+a,J=Math.cos(nt),Z=Math.sin(nt);R.x=y*Z,R.y=m*S,R.z=y*J,u.push(R.x,R.y,R.z),d.push(0,S,0),C.x=J*.5+.5,C.y=Z*.5*S+.5,p.push(C.x,C.y),_++}for(let D=0;D<s;D++){let q=A+D,nt=O+D;M===!0?h.push(nt,nt+1,q):h.push(nt+1,nt,q),U+=3}c.addGroup(f,U,M===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Bs=class i extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let T=new X,M=new X,A=new X;for(let C=0;C<e.length;C+=3)p(e[C+0],T),p(e[C+1],M),p(e[C+2],A),l(T,M,A,b)}function l(b,T,M,A){let C=A+1,R=[];for(let U=0;U<=C;U++){R[U]=[];let y=b.clone().lerp(M,U/C),S=T.clone().lerp(M,U/C),O=C-U;for(let D=0;D<=O;D++)D===0&&U===C?R[U][D]=y:R[U][D]=y.clone().lerp(S,D/O)}for(let U=0;U<C;U++)for(let y=0;y<2*(C-U)-1;y++){let S=Math.floor(y/2);y%2===0?(d(R[U][S+1]),d(R[U+1][S]),d(R[U][S])):(d(R[U][S+1]),d(R[U+1][S+1]),d(R[U+1][S]))}}function c(b){let T=new X;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(b),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function h(){let b=new X;for(let T=0;T<r.length;T+=3){b.x=r[T+0],b.y=r[T+1],b.z=r[T+2];let M=m(b)/2/Math.PI+.5,A=f(b)/Math.PI+.5;o.push(M,1-A)}_(),u()}function u(){for(let b=0;b<o.length;b+=6){let T=o[b+0],M=o[b+2],A=o[b+4],C=Math.max(T,M,A),R=Math.min(T,M,A);C>.9&&R<.1&&(T<.2&&(o[b+0]+=1),M<.2&&(o[b+2]+=1),A<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,T){let M=b*3;T.x=t[M+0],T.y=t[M+1],T.z=t[M+2]}function _(){let b=new X,T=new X,M=new X,A=new X,C=new Qt,R=new Qt,U=new Qt;for(let y=0,S=0;y<r.length;y+=9,S+=6){b.set(r[y+0],r[y+1],r[y+2]),T.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),C.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),U.set(o[S+4],o[S+5]),A.copy(b).add(T).add(M).divideScalar(3);let O=m(A);v(C,S+0,b,O),v(R,S+2,T,O),v(U,S+4,M,O)}}function v(b,T,M,A){A<0&&b.x===1&&(o[T]=b.x-1),M.x===0&&M.z===0&&(o[T]=A/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Os=class i extends Bs{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Hr=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Qt:new X);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new X,s=[],r=[],o=[],a=new X,l=new se;for(let p=0;p<=t;p++){let _=p/t;s[p]=this.getTangentAt(_,new X)}r[0]=new X,o[0]=new X;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(jt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(jt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function sc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Cr=new X,Ea=new sc,Aa=new sc,Ca=new sc,Ki=class extends Hr{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new X){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Cr.subVectors(s[0],s[1]).add(s[0]),c=Cr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),Ea.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,v,m),Aa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,v,m),Ca.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,v,m)}else this.curveType==="catmullrom"&&(Ea.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Aa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ca.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ea.calc(l),Aa.calc(l),Ca.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new X().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var zs=class i extends Bs{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},mn=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],_=[],v=[],m=[];for(let f=0;f<h;f++){let b=f*d-o;for(let T=0;T<c;T++){let M=T*u-r;_.push(M,-b,0),v.push(0,0,1),m.push(T/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){let T=b+c*f,M=b+c*(f+1),A=b+1+c*(f+1),C=b+1+c*f;p.push(T,M,C),p.push(M,A,C)}this.setIndex(p),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Kn=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new X,d=new X,p=[],_=[],v=[],m=[];for(let f=0;f<=n;f++){let b=[],T=f/n,M=0;f===0&&o===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){let C=A/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+T*a),u.y=t*Math.cos(o+T*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+T*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(C+M,1-T),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){let T=h[f][b+1],M=h[f][b],A=h[f+1][b],C=h[f+1][b+1];(f!==0||o>0)&&p.push(T,M,C),(f!==n-1||l<Math.PI)&&p.push(M,A,C)}this.setIndex(p),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ji=class i extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new X,u=new X,d=new X;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){let v=_/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){let v=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,f=(s+1)*(p-1)+_,b=(s+1)*p+_;o.push(v,m,b),o.push(m,f,b)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var gn=class extends Bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Gr=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wr=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Rr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function bu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xr=class extends xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ia,endingEnd:Ia}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pa:r=t,a=2*e-n;break;case La:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pa:o=t,l=2*n-e;break;case La:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),v=_*_,m=v*_,f=-d*m+2*d*v-d*_,b=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*_+1,T=(-1-p)*m+(1.5+p)*v+.5*_,M=p*m-p*v;for(let A=0;A!==a;++A)r[A]=f*o[h+A]+b*o[c+A]+T*o[l+A]+M*o[u+A];return r}},qr=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Yr=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},je=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rr(e,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rr(t.times,Array),values:Rr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ms:e=this.InterpolantFactoryMethodDiscrete;break;case Ur:e=this.InterpolantFactoryMethodLinear;break;case Ir:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Ur;case this.InterpolantFactoryMethodSmooth:return Ir}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&bu(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ir,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let _=0;_!==n;++_){let v=e[u+_];if(v!==e[d+_]||v!==e[p+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};je.prototype.ValueTypeName="";je.prototype.TimeBufferType=Float32Array;je.prototype.ValueBufferType=Float32Array;je.prototype.DefaultInterpolation=Ur;var jn=class extends je{constructor(t,e,n){super(t,e,n)}};jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Ms;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends je{constructor(t,e,n,s){super(t,e,n,s)}};Zr.prototype.ValueTypeName="color";var Jr=class extends je{constructor(t,e,n,s){super(t,e,n,s)}};Jr.prototype.ValueTypeName="number";var $r=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ze.slerpFlat(r,0,o,c-a,o,c,l);return r}},ks=class extends je{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new $r(this.times,this.values,this.getValueSize(),t)}};ks.prototype.ValueTypeName="quaternion";ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Qn=class extends je{constructor(t,e,n){super(t,e,n)}};Qn.prototype.ValueTypeName="string";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=Ms;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends je{constructor(t,e,n,s){super(t,e,n,s)}};Kr.prototype.ValueTypeName="vector";var jr=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ql=new jr,Qr=class{constructor(t){this.manager=t!==void 0?t:ql,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vs=class extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Hs=class extends Vs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ra=new se,el=new X,nl=new X,Fa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $i,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;el.setFromMatrixPosition(t.matrixWorld),e.position.copy(el),nl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nl),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Gs=class extends Is{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ba=class extends Fa{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ws=class extends Vs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Ba}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var to=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var rc="\\[\\]\\.:\\/",Tu=new RegExp("["+rc+"]","g"),oc="[^"+rc+"]",wu="[^"+rc.replace("\\.","")+"]",Eu=/((?:WC+[\/:])*)/.source.replace("WC",oc),Au=/(WCOD+)?/.source.replace("WCOD",wu),Cu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),Ru=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),Iu=new RegExp("^"+Eu+Au+Cu+Ru+"$"),Pu=["material","materials","bones","map"],Oa=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tu,"")}static parseTrackName(t){let e=Iu.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Oa;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rg=new Float32Array(1);function ac(i,t,e,n){let s=Lu(n);switch(e){case Ja:return i*t;case go:return i*t/s.components*s.byteLength;case _o:return i*t/s.components*s.byteLength;case Ka:return i*t*2/s.components*s.byteLength;case xo:return i*t*2/s.components*s.byteLength;case $a:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case vo:return i*t*4/s.components*s.byteLength;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $s:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:case bo:return Math.max(i,16)*Math.max(t,8)/4;case yo:case So:return Math.max(i,8)*Math.max(t,8)/2;case To:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vo:case Ho:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lu(i){switch(i){case _n:case Xa:return{byteLength:1,components:1};case Qi:case qa:case ts:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case ei:case fo:case xn:return{byteLength:4,components:1};case Ya:case Za:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function gh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zu(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){let _=u[d],v=u[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){let v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ku=`#ifdef USE_ALPHAHASH
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
}`,Jt={alphahash_fragment:ku,alphahash_pars_fragment:Vu,alphamap_fragment:Hu,alphamap_pars_fragment:Gu,alphatest_fragment:Wu,alphatest_pars_fragment:Xu,aomap_fragment:qu,aomap_pars_fragment:Yu,batching_pars_vertex:Zu,batching_vertex:Ju,begin_vertex:$u,beginnormal_vertex:Ku,bsdfs:ju,iridescence_fragment:Qu,bumpmap_pars_fragment:td,clipping_planes_fragment:ed,clipping_planes_pars_fragment:nd,clipping_planes_pars_vertex:id,clipping_planes_vertex:sd,color_fragment:rd,color_pars_fragment:od,color_pars_vertex:ad,color_vertex:cd,common:ld,cube_uv_reflection_fragment:hd,defaultnormal_vertex:ud,displacementmap_pars_vertex:dd,displacementmap_vertex:fd,emissivemap_fragment:pd,emissivemap_pars_fragment:md,colorspace_fragment:gd,colorspace_pars_fragment:_d,envmap_fragment:xd,envmap_common_pars_fragment:vd,envmap_pars_fragment:yd,envmap_pars_vertex:Md,envmap_physical_pars_fragment:Ld,envmap_vertex:Sd,fog_vertex:bd,fog_pars_vertex:Td,fog_fragment:wd,fog_pars_fragment:Ed,gradientmap_pars_fragment:Ad,lightmap_pars_fragment:Cd,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Id,lights_pars_begin:Pd,lights_toon_fragment:Dd,lights_toon_pars_fragment:Ud,lights_phong_fragment:Nd,lights_phong_pars_fragment:Fd,lights_physical_fragment:Bd,lights_physical_pars_fragment:Od,lights_fragment_begin:zd,lights_fragment_maps:kd,lights_fragment_end:Vd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Gd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Xd,map_fragment:qd,map_pars_fragment:Yd,map_particle_fragment:Zd,map_particle_pars_fragment:Jd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Kd,morphinstance_vertex:jd,morphcolor_vertex:Qd,morphnormal_vertex:tf,morphtarget_pars_vertex:ef,morphtarget_vertex:nf,normal_fragment_begin:sf,normal_fragment_maps:rf,normal_pars_fragment:of,normal_pars_vertex:af,normal_vertex:cf,normalmap_pars_fragment:lf,clearcoat_normal_fragment_begin:hf,clearcoat_normal_fragment_maps:uf,clearcoat_pars_fragment:df,iridescence_pars_fragment:ff,opaque_fragment:pf,packing:mf,premultiplied_alpha_fragment:gf,project_vertex:_f,dithering_fragment:xf,dithering_pars_fragment:vf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:Mf,shadowmap_pars_fragment:Sf,shadowmap_pars_vertex:bf,shadowmap_vertex:Tf,shadowmask_pars_fragment:wf,skinbase_vertex:Ef,skinning_pars_vertex:Af,skinning_vertex:Cf,skinnormal_vertex:Rf,specularmap_fragment:If,specularmap_pars_fragment:Pf,tonemapping_fragment:Lf,tonemapping_pars_fragment:Df,transmission_fragment:Uf,transmission_pars_fragment:Nf,uv_pars_fragment:Ff,uv_pars_vertex:Bf,uv_vertex:Of,worldpos_vertex:zf,background_vert:kf,background_frag:Vf,backgroundCube_vert:Hf,backgroundCube_frag:Gf,cube_vert:Wf,cube_frag:Xf,depth_vert:qf,depth_frag:Yf,distanceRGBA_vert:Zf,distanceRGBA_frag:Jf,equirect_vert:$f,equirect_frag:Kf,linedashed_vert:jf,linedashed_frag:Qf,meshbasic_vert:tp,meshbasic_frag:ep,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:sp,meshmatcap_frag:rp,meshnormal_vert:op,meshnormal_frag:ap,meshphong_vert:cp,meshphong_frag:lp,meshphysical_vert:hp,meshphysical_frag:up,meshtoon_vert:dp,meshtoon_frag:fp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:_p,sprite_vert:xp,sprite_frag:vp},Tt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},An={basic:{uniforms:Fe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Fe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Fe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Fe([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Fe([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Fe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Fe([Tt.points,Tt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Fe([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Fe([Tt.common,Tt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Fe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Fe([Tt.sprite,Tt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Fe([Tt.common,Tt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Fe([Tt.lights,Tt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};An.physical={uniforms:Fe([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Zo={r:0,b:0,g:0},bi=new pn,yp=new se;function Mp(i,t,e,n,s,r,o){let a=new wt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function _(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?e:t).get(M)),M}function v(T){let M=!1,A=_(T);A===null?f(a,l):A&&A.isColor&&(f(A,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,M){let A=_(M);A&&(A.isCubeTexture||A.mapping===qs)?(h===void 0&&(h=new he(new wn(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:Si(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bi.copy(M.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yp.makeRotationFromEuler(bi)),h.material.toneMapped=ee.getTransfer(A.colorSpace)!==re,(u!==A||d!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new he(new mn(2,2),new Pe({name:"BackgroundMaterial",uniforms:Si(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ee.getTransfer(A.colorSpace)!==re,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,M){T.getRGB(Zo,ic(i)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,M,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(a,l)},render:v,addToRenderList:m,dispose:b}}function Sp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(S,O,D,q,nt){let J=!1,Z=u(q,D,O);r!==Z&&(r=Z,c(r.object)),J=p(S,q,D,nt),J&&_(S,q,D,nt),nt!==null&&t.update(nt,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,M(S,O,D,q),nt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,O,D){let q=D.wireframe===!0,nt=n[S.id];nt===void 0&&(nt={},n[S.id]=nt);let J=nt[O.id];J===void 0&&(J={},nt[O.id]=J);let Z=J[q];return Z===void 0&&(Z=d(l()),J[q]=Z),Z}function d(S){let O=[],D=[],q=[];for(let nt=0;nt<e;nt++)O[nt]=0,D[nt]=0,q[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:D,attributeDivisors:q,object:S,attributes:{},index:null}}function p(S,O,D,q){let nt=r.attributes,J=O.attributes,Z=0,mt=D.getAttributes();for(let $ in mt)if(mt[$].location>=0){let gt=nt[$],Mt=J[$];if(Mt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Mt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Mt=S.instanceColor)),gt===void 0||gt.attribute!==Mt||Mt&&gt.data!==Mt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==q}function _(S,O,D,q){let nt={},J=O.attributes,Z=0,mt=D.getAttributes();for(let $ in mt)if(mt[$].location>=0){let gt=J[$];gt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor));let Mt={};Mt.attribute=gt,gt&&gt.data&&(Mt.data=gt.data),nt[$]=Mt,Z++}r.attributes=nt,r.attributesNum=Z,r.index=q}function v(){let S=r.newAttributes;for(let O=0,D=S.length;O<D;O++)S[O]=0}function m(S){f(S,0)}function f(S,O){let D=r.newAttributes,q=r.enabledAttributes,nt=r.attributeDivisors;D[S]=1,q[S]===0&&(i.enableVertexAttribArray(S),q[S]=1),nt[S]!==O&&(i.vertexAttribDivisor(S,O),nt[S]=O)}function b(){let S=r.newAttributes,O=r.enabledAttributes;for(let D=0,q=O.length;D<q;D++)O[D]!==S[D]&&(i.disableVertexAttribArray(D),O[D]=0)}function T(S,O,D,q,nt,J,Z){Z===!0?i.vertexAttribIPointer(S,O,D,nt,J):i.vertexAttribPointer(S,O,D,q,nt,J)}function M(S,O,D,q){v();let nt=q.attributes,J=D.getAttributes(),Z=O.defaultAttributeValues;for(let mt in J){let $=J[mt];if($.location>=0){let _t=nt[mt];if(_t===void 0&&(mt==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),mt==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor)),_t!==void 0){let gt=_t.normalized,Mt=_t.itemSize,Bt=t.get(_t);if(Bt===void 0)continue;let Pt=Bt.buffer,Ft=Bt.type,Xt=Bt.bytesPerElement,ut=Ft===i.INT||Ft===i.UNSIGNED_INT||_t.gpuType===fo;if(_t.isInterleavedBufferAttribute){let ft=_t.data,Ct=ft.stride,Ot=_t.offset;if(ft.isInstancedInterleavedBuffer){for(let ot=0;ot<$.locationSize;ot++)f($.location+ot,ft.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ot=0;ot<$.locationSize;ot++)m($.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let ot=0;ot<$.locationSize;ot++)T($.location+ot,Mt/$.locationSize,Ft,gt,Ct*Xt,(Ot+Mt/$.locationSize*ot)*Xt,ut)}else{if(_t.isInstancedBufferAttribute){for(let ft=0;ft<$.locationSize;ft++)f($.location+ft,_t.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ft=0;ft<$.locationSize;ft++)m($.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let ft=0;ft<$.locationSize;ft++)T($.location+ft,Mt/$.locationSize,Ft,gt,Mt*Xt,Mt/$.locationSize*ft*Xt,ut)}}else if(Z!==void 0){let gt=Z[mt];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv($.location,gt);break;case 3:i.vertexAttrib3fv($.location,gt);break;case 4:i.vertexAttrib4fv($.location,gt);break;default:i.vertexAttrib1fv($.location,gt)}}}}b()}function A(){U();for(let S in n){let O=n[S];for(let D in O){let q=O[D];for(let nt in q)h(q[nt].object),delete q[nt];delete O[D]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;let O=n[S.id];for(let D in O){let q=O[D];for(let nt in q)h(q[nt].object),delete q[nt];delete O[D]}delete n[S.id]}function R(S){for(let O in n){let D=n[O];if(D[S.id]===void 0)continue;let q=D[S.id];for(let nt in q)h(q[nt].object),delete q[nt];delete D[S.id]}}function U(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function bp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*d[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==on&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let U=R===ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==_n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xn&&!U)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:A,maxSamples:C}}function wp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new sn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,T=b*4,M=f.clippingState||null;l.value=M,M=h(_,d,T,p);for(let A=0;A!==T;++A)M[A]=e[A];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,_){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let f=p+v*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,M=p;T!==v;++T,M+=4)o.copy(u[T]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Ep(i){let t=new WeakMap;function e(o,a){return a===lo?o.mapping=vi:a===ho&&(o.mapping=yi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===lo||a===ho)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new zr(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var rs=4,Yl=[.125,.215,.35,.446,.526,.582],Ei=20,cc=new Gs,Zl=new wt,lc=null,hc=0,uc=0,dc=!1,wi=(1+Math.sqrt(5))/2,ss=1/wi,Jl=[new X(-wi,ss,0),new X(wi,ss,0),new X(-ss,0,wi),new X(ss,0,wi),new X(0,wi,-ss),new X(0,wi,ss),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],Ap=new X,Ko=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ap}=r;lc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lc,hc,uc),this._renderer.xr.enabled=dc,t.scissorTest=!1,Jo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ts,format:on,colorSpace:mi,depthBuffer:!1},s=$l(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(r)),this._blurMaterial=Rp(r,t,e)}return s}_compileMaterial(t){let e=new he(this._lodPlanes[0],t);this._renderer.compile(e,cc)}_sceneToCubeUV(t,e,n,s,r){let l=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Zl),u.toneMapping=kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let v=new gi({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),m=new he(new wn,v),f=!1,b=t.background;b?b.isColor&&(v.color.copy(b),t.background=null,f=!0):(v.color.copy(Zl),f=!0);for(let T=0;T<6;T++){let M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let A=this._cubeSize;Jo(s,M*A,T>2?A:0,A,A),u.setRenderTarget(s),f&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===vi||t.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new he(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Jo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,cc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jl[(s-r-1)%Jl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new he(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):Ei;m>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);let f=[],b=0;for(let R=0;R<Ei;++R){let U=R/v,y=Math.exp(-U*U/2);f.push(y),R===0?b+=y:R<m&&(b+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-n;let M=this._sizeLods[s],A=3*M*(s>T-rs?s-T+rs:0),C=4*(this._cubeSize-M);Jo(e,A,C,3*M,2*M),l.setRenderTarget(e),l.render(u,cc)}};function Cp(i){let t=[],e=[],n=[],s=i,r=i-rs+1+Yl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-rs?l=Yl[o-i+rs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,v=3,m=2,f=1,b=new Float32Array(v*_*p),T=new Float32Array(m*_*p),M=new Float32Array(f*_*p);for(let C=0;C<p;C++){let R=C%3*2/3-1,U=C>2?0:-1,y=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];b.set(y,v*_*C),T.set(d,m*_*C);let S=[C,C,C,C,C,C];M.set(S,f*_*C)}let A=new me;A.setAttribute("position",new _e(b,v)),A.setAttribute("uv",new _e(T,m)),A.setAttribute("faceIndex",new _e(M,f)),t.push(A),s>rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $l(i,t,e){let n=new rn(i,t,e);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rp(i,t,e){let n=new Float32Array(Ei),s=new X(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Kl(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function jl(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}function Ip(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===lo||l===ho,h=l===vi||l===yi;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ko(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ko(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Pp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&qi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lp(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,_=u.attributes.position,v=0;if(p!==null){let b=p.array;v=p.version;for(let T=0,M=b.length;T<M;T+=3){let A=b[T+0],C=b[T+1],R=b[T+2];d.push(A,C,C,R,R,A)}}else if(_!==void 0){let b=_.array;v=_.version;for(let T=0,M=b.length/3-1;T<M;T+=3){let A=T+0,C=T+1,R=T+2;d.push(A,C,C,R,R,A)}}else return;let m=new(nc(d)?Rs:Cs)(d,1);m.version=v;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Dp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*o,_),e.update(p,n,_))}function h(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];e.update(m,n,1)}function u(d,p,_,v){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,_);let f=0;for(let b=0;b<_;b++)f+=p[b]*v[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Up(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Np(i,t,e){let n=new WeakMap,s=new le;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],T=0;p===!0&&(T=1),_===!0&&(T=2),v===!0&&(T=3);let M=a.attributes.position.count*T,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let C=new Float32Array(M*A*4*u),R=new ws(C,M,A,u);R.type=xn,R.needsUpdate=!0;let U=T*4;for(let S=0;S<u;S++){let O=m[S],D=f[S],q=b[S],nt=M*A*4*S;for(let J=0;J<O.count;J++){let Z=J*U;p===!0&&(s.fromBufferAttribute(O,J),C[nt+Z+0]=s.x,C[nt+Z+1]=s.y,C[nt+Z+2]=s.z,C[nt+Z+3]=0),_===!0&&(s.fromBufferAttribute(D,J),C[nt+Z+4]=s.x,C[nt+Z+5]=s.y,C[nt+Z+6]=s.z,C[nt+Z+7]=0),v===!0&&(s.fromBufferAttribute(q,J),C[nt+Z+8]=s.x,C[nt+Z+9]=s.y,C[nt+Z+10]=s.z,C[nt+Z+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Qt(M,A)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Fp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var _h=new ke,Ql=new Ns(1,1),xh=new ws,vh=new Br,yh=new Ps,th=[],eh=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function as(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=th[s];if(r===void 0&&(r=new Float32Array(s),th[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qo(i,t){let e=eh[t];e===void 0&&(e=new Int32Array(t),eh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Vp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;sh.set(n),i.uniformMatrix2fv(this.addr,!1,sh),Ae(e,n)}}function Hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;ih.set(n),i.uniformMatrix3fv(this.addr,!1,ih),Ae(e,n)}}function Gp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;nh.set(n),i.uniformMatrix4fv(this.addr,!1,nh),Ae(e,n)}}function Wp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Zp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function $p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function Kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ql.compareFunction=Qa,r=Ql):r=_h,e.setTexture2D(t||r,s)}function Qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vh,s)}function tm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yh,s)}function em(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xh,s)}function nm(i){switch(i){case 5126:return Bp;case 35664:return Op;case 35665:return zp;case 35666:return kp;case 35674:return Vp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return Zp;case 36294:return Jp;case 36295:return $p;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}function im(i,t){i.uniform1fv(this.addr,t)}function sm(i,t){let e=as(t,this.size,2);i.uniform2fv(this.addr,e)}function rm(i,t){let e=as(t,this.size,3);i.uniform3fv(this.addr,e)}function om(i,t){let e=as(t,this.size,4);i.uniform4fv(this.addr,e)}function am(i,t){let e=as(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cm(i,t){let e=as(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lm(i,t){let e=as(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hm(i,t){i.uniform1iv(this.addr,t)}function um(i,t){i.uniform2iv(this.addr,t)}function dm(i,t){i.uniform3iv(this.addr,t)}function fm(i,t){i.uniform4iv(this.addr,t)}function pm(i,t){i.uniform1uiv(this.addr,t)}function mm(i,t){i.uniform2uiv(this.addr,t)}function gm(i,t){i.uniform3uiv(this.addr,t)}function _m(i,t){i.uniform4uiv(this.addr,t)}function xm(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||_h,r[o])}function vm(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vh,r[o])}function ym(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||yh,r[o])}function Mm(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xh,r[o])}function Sm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return om;case 35674:return am;case 35675:return cm;case 35676:return lm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Mm}}var pc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nm(e.type)}},mc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sm(e.type)}},gc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},fc=/(\w+)(\])?(\[|\.)?/g;function rh(i,t){i.seq.push(t),i.map[t.id]=t}function bm(i,t,e){let n=i.name,s=n.length;for(fc.lastIndex=0;;){let r=fc.exec(n),o=fc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rh(e,c===void 0?new pc(a,i,t):new mc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new gc(a),rh(e,u)),e=u}}}var os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);bm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function oh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Tm=37297,wm=0;function Em(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ah=new Yt;function Am(i){ee._getMatrix(ah,ee.workingColorSpace,i);let t=`mat3( ${ah.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Ss:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ch(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Em(i.getShaderSource(t),a)}else return r}function Cm(i,t){let e=Am(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rm(i,t){let e;switch(t){case El:e="Linear";break;case Al:e="Reinhard";break;case Cl:e="Cineon";break;case co:e="ACESFilmic";break;case Il:e="AgX";break;case Pl:e="Neutral";break;case Rl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $o=new X;function Im(){ee.getLuminanceCoefficients($o);let i=$o.x.toFixed(4),t=$o.y.toFixed(4),e=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Lm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qs(i){return i!==""}function lh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(i){return i.replace(Um,Fm)}var Nm=new Map;function Fm(i,t){let e=Jt[t];if(e===void 0){let n=Nm.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _c(e)}var Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(i){return i.replace(Bm,Om)}function Om(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function zm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xs?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function km(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vi:case yi:t="ENVMAP_TYPE_CUBE";break;case qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Hm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ga:t="ENVMAP_BLENDING_MULTIPLY";break;case Tl:t="ENVMAP_BLENDING_MIX";break;case wl:t="ENVMAP_BLENDING_ADD";break}return t}function Gm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=zm(e),c=km(e),h=Vm(e),u=Hm(e),d=Gm(e),p=Pm(e),_=Lm(r),v=s.createProgram(),m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Qs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Qs).join(`
`),f.length>0&&(f+=`
`)):(m=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),f=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==kn?Rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Cm("linearToOutputTexel",e.outputColorSpace),Im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),o=_c(o),o=lh(o,e),o=hh(o,e),a=_c(a),a=lh(a,e),a=hh(a,e),o=uh(o),a=uh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let T=b+m+o,M=b+f+a,A=oh(s,s.VERTEX_SHADER,T),C=oh(s,s.FRAGMENT_SHADER,M);s.attachShader(v,A),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(O){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(v)||"",q=s.getShaderInfoLog(A)||"",nt=s.getShaderInfoLog(C)||"",J=D.trim(),Z=q.trim(),mt=nt.trim(),$=!0,_t=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,C);else{let gt=ch(s,A,"vertex"),Mt=ch(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+J+`
`+gt+`
`+Mt)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Z===""||mt==="")&&(_t=!1);_t&&(O.diagnostics={runnable:$,programLog:J,vertexShader:{log:Z,prefix:m},fragmentShader:{log:mt,prefix:f}})}s.deleteShader(A),s.deleteShader(C),U=new os(s,v),y=Dm(s,v)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,Tm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}var Xm=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vc(t),e.set(t,n)),n}},vc=class{constructor(t){this.id=Xm++,this.code=t,this.usedTimes=0}};function qm(i,t,e,n,s,r,o){let a=new As,l=new xc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,O,D,q){let nt=D.fog,J=q.geometry,Z=y.isMeshStandardMaterial?D.environment:null,mt=(y.isMeshStandardMaterial?e:t).get(y.envMap||Z),$=mt&&mt.mapping===qs?mt.image.height:null,_t=_[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let gt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mt=gt!==void 0?gt.length:0,Bt=0;J.morphAttributes.position!==void 0&&(Bt=1),J.morphAttributes.normal!==void 0&&(Bt=2),J.morphAttributes.color!==void 0&&(Bt=3);let Pt,Ft,Xt,ut;if(_t){let Kt=An[_t];Pt=Kt.vertexShader,Ft=Kt.fragmentShader}else Pt=y.vertexShader,Ft=y.fragmentShader,l.update(y),Xt=l.getVertexShaderID(y),ut=l.getFragmentShaderID(y);let ft=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Ot=q.isInstancedMesh===!0,ot=q.isBatchedMesh===!0,Et=!!y.map,zt=!!y.matcap,B=!!mt,Gt=!!y.aoMap,Dt=!!y.lightMap,Ut=!!y.bumpMap,xt=!!y.normalMap,F=!!y.displacementMap,L=!!y.emissiveMap,I=!!y.metalnessMap,E=!!y.roughnessMap,G=y.anisotropy>0,x=y.clearcoat>0,g=y.dispersion>0,N=y.iridescence>0,H=y.sheen>0,W=y.transmission>0,V=G&&!!y.anisotropyMap,it=x&&!!y.clearcoatMap,K=x&&!!y.clearcoatNormalMap,et=x&&!!y.clearcoatRoughnessMap,lt=N&&!!y.iridescenceMap,rt=N&&!!y.iridescenceThicknessMap,vt=H&&!!y.sheenColorMap,yt=H&&!!y.sheenRoughnessMap,z=!!y.specularMap,k=!!y.specularColorMap,st=!!y.specularIntensityMap,P=W&&!!y.transmissionMap,j=W&&!!y.thicknessMap,Y=!!y.gradientMap,pt=!!y.alphaMap,dt=y.alphaTest>0,at=!!y.alphaHash,At=!!y.extensions,kt=kn;y.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(kt=i.toneMapping);let $t={shaderID:_t,shaderType:y.type,shaderName:y.name,vertexShader:Pt,fragmentShader:Ft,defines:y.defines,customVertexShaderID:Xt,customFragmentShaderID:ut,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ot,batchingColor:ot&&q._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&q.instanceColor!==null,instancingMorph:Ot&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:mi,alphaToCoverage:!!y.alphaToCoverage,map:Et,matcap:zt,envMap:B,envMapMode:B&&mt.mapping,envMapCubeUVHeight:$,aoMap:Gt,lightMap:Dt,bumpMap:Ut,normalMap:xt,displacementMap:d&&F,emissiveMap:L,normalMapObjectSpace:xt&&y.normalMapType===Nl,normalMapTangentSpace:xt&&y.normalMapType===ja,metalnessMap:I,roughnessMap:E,anisotropy:G,anisotropyMap:V,clearcoat:x,clearcoatMap:it,clearcoatNormalMap:K,clearcoatRoughnessMap:et,dispersion:g,iridescence:N,iridescenceMap:lt,iridescenceThicknessMap:rt,sheen:H,sheenColorMap:vt,sheenRoughnessMap:yt,specularMap:z,specularColorMap:k,specularIntensityMap:st,transmission:W,transmissionMap:P,thicknessMap:j,gradientMap:Y,opaque:y.transparent===!1&&y.blending===di&&y.alphaToCoverage===!1,alphaMap:pt,alphaTest:dt,alphaHash:at,combine:y.combine,mapUv:Et&&v(y.map.channel),aoMapUv:Gt&&v(y.aoMap.channel),lightMapUv:Dt&&v(y.lightMap.channel),bumpMapUv:Ut&&v(y.bumpMap.channel),normalMapUv:xt&&v(y.normalMap.channel),displacementMapUv:F&&v(y.displacementMap.channel),emissiveMapUv:L&&v(y.emissiveMap.channel),metalnessMapUv:I&&v(y.metalnessMap.channel),roughnessMapUv:E&&v(y.roughnessMap.channel),anisotropyMapUv:V&&v(y.anisotropyMap.channel),clearcoatMapUv:it&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:K&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:yt&&v(y.sheenRoughnessMap.channel),specularMapUv:z&&v(y.specularMap.channel),specularColorMapUv:k&&v(y.specularColorMap.channel),specularIntensityMapUv:st&&v(y.specularIntensityMap.channel),transmissionMapUv:P&&v(y.transmissionMap.channel),thicknessMapUv:j&&v(y.thicknessMap.channel),alphaMapUv:pt&&v(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(xt||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!J.attributes.uv&&(Et||pt),fog:!!nt,useFog:y.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ct,skinning:q.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:Et&&y.map.isVideoTexture===!0&&ee.getTransfer(y.map.colorSpace)===re,decodeVideoTextureEmissive:L&&y.emissiveMap.isVideoTexture===!0&&ee.getTransfer(y.emissiveMap.colorSpace)===re,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xe,flipSided:y.side===De,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:At&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&y.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function f(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let O in y.defines)S.push(O),S.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(b(S,y),T(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function b(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function T(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){let S=_[y.type],O;if(S){let D=An[S];O=js.clone(D.uniforms)}else O=y.uniforms;return O}function A(y,S){let O;for(let D=0,q=h.length;D<q;D++){let nt=h[D];if(nt.cacheKey===S){O=nt,++O.usedTimes;break}}return O===void 0&&(O=new Wm(i,S,y,r),h.push(O)),O}function C(y){if(--y.usedTimes===0){let S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function R(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:A,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:U}}function Ym(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ph(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,_,v,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function a(u,d,p,_,v,m){let f=o(u,d,p,_,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,_,v,m){let f=o(u,d,p,_,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Zm),n.length>1&&n.sort(d||fh),s.length>1&&s.sort(d||fh)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Jm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ph,i.set(n,[o])):s>=r.length?(o=new ph,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $m(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new wt};break;case"SpotLight":e={position:new X,direction:new X,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function Km(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jm=0;function Qm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tg(i){let t=new $m,e=Km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);let s=new X,r=new se,o=new se;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,_=0,v=0,m=0,f=0,b=0,T=0,M=0,A=0,C=0,R=0;c.sort(Qm);for(let y=0,S=c.length;y<S;y++){let O=c[y],D=O.color,q=O.intensity,nt=O.distance,J=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=D.r*q,u+=D.g*q,d+=D.b*q;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(O.sh.coefficients[Z],q);R++}else if(O.isDirectionalLight){let Z=t.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let mt=O.shadow,$=e.get(O);$.shadowIntensity=mt.intensity,$.shadowBias=mt.bias,$.shadowNormalBias=mt.normalBias,$.shadowRadius=mt.radius,$.shadowMapSize=mt.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=O.shadow.matrix,b++}n.directional[p]=Z,p++}else if(O.isSpotLight){let Z=t.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(D).multiplyScalar(q),Z.distance=nt,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,n.spot[v]=Z;let mt=O.shadow;if(O.map&&(n.spotLightMap[A]=O.map,A++,mt.updateMatrices(O),O.castShadow&&C++),n.spotLightMatrix[v]=mt.matrix,O.castShadow){let $=e.get(O);$.shadowIntensity=mt.intensity,$.shadowBias=mt.bias,$.shadowNormalBias=mt.normalBias,$.shadowRadius=mt.radius,$.shadowMapSize=mt.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=J,M++}v++}else if(O.isRectAreaLight){let Z=t.get(O);Z.color.copy(D).multiplyScalar(q),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),n.rectArea[m]=Z,m++}else if(O.isPointLight){let Z=t.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){let mt=O.shadow,$=e.get(O);$.shadowIntensity=mt.intensity,$.shadowBias=mt.bias,$.shadowNormalBias=mt.normalBias,$.shadowRadius=mt.radius,$.shadowMapSize=mt.mapSize,$.shadowCameraNear=mt.camera.near,$.shadowCameraFar=mt.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=O.shadow.matrix,T++}n.point[_]=Z,_++}else if(O.isHemisphereLight){let Z=t.get(O);Z.skyColor.copy(O.color).multiplyScalar(q),Z.groundColor.copy(O.groundColor).multiplyScalar(q),n.hemi[f]=Z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==b||U.numPointShadows!==T||U.numSpotShadows!==M||U.numSpotMaps!==A||U.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,U.directionalLength=p,U.pointLength=_,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=b,U.numPointShadows=T,U.numSpotShadows=M,U.numSpotMaps=A,U.numLightProbes=R,n.version=jm++)}function l(c,h){let u=0,d=0,p=0,_=0,v=0,m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){let T=c[f];if(T.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(T.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(T.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function mh(i){let t=new tg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function eg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new mh(i),t.set(s,[a])):r>=o.length?(a=new mh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ng=`void main() {
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
}`;function sg(i,t,e){let n=new $i,s=new Qt,r=new Qt,o=new le,a=new Gr({depthPacking:Ul}),l=new Wr,c={},h=e.maxTextureSize,u={[dn]:De,[De]:dn,[xe]:xe},d=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let _=new me;_.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new he(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xs;let f=this.type;this.render=function(C,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let y=i.getRenderTarget(),S=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),D=i.state;D.setBlending(zn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let q=f!==En&&this.type===En,nt=f===En&&this.type!==En;for(let J=0,Z=C.length;J<Z;J++){let mt=C[J],$=mt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",mt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let _t=$.getFrameExtents();if(s.multiply(_t),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/_t.x),s.x=r.x*_t.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/_t.y),s.y=r.y*_t.y,$.mapSize.y=r.y)),$.map===null||q===!0||nt===!0){let Mt=this.type!==En?{minFilter:Ge,magFilter:Ge}:{};$.map!==null&&$.map.dispose(),$.map=new rn(s.x,s.y,Mt),$.map.texture.name=mt.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let gt=$.getViewportCount();for(let Mt=0;Mt<gt;Mt++){let Bt=$.getViewport(Mt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),D.viewport(o),$.updateMatrices(mt,Mt),n=$.getFrustum(),M(R,U,$.camera,mt,this.type)}$.isPointLightShadow!==!0&&this.type===En&&b($,U),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,O)};function b(C,R){let U=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new rn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,U,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,U,p,v,null)}function T(C,R,U,y){let S=null,O=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)S=O;else if(S=U.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=S.uuid,q=R.uuid,nt=c[D];nt===void 0&&(nt={},c[D]=nt);let J=nt[q];J===void 0&&(J=S.clone(),nt[q]=J,R.addEventListener("dispose",A)),S=J}if(S.visible=R.visible,S.wireframe=R.wireframe,y===En?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let D=i.properties.get(S);D.light=U}return S}function M(C,R,U,y,S){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===En)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let q=t.update(C),nt=C.material;if(Array.isArray(nt)){let J=q.groups;for(let Z=0,mt=J.length;Z<mt;Z++){let $=J[Z],_t=nt[$.materialIndex];if(_t&&_t.visible){let gt=T(C,_t,y,S);C.onBeforeShadow(i,C,R,U,q,gt,$),i.renderBufferDirect(U,null,q,gt,C,$),C.onAfterShadow(i,C,R,U,q,gt,$)}}}else if(nt.visible){let J=T(C,nt,y,S);C.onBeforeShadow(i,C,R,U,q,J,null),i.renderBufferDirect(U,null,q,J,C,null),C.onAfterShadow(i,C,R,U,q,J,null)}}let D=C.children;for(let q=0,nt=D.length;q<nt;q++)M(D[q],R,U,y,S)}function A(C){C.target.removeEventListener("dispose",A);for(let U in c){let y=c[U],S=C.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}var rg={[eo]:no,[io]:oo,[so]:ao,[fi]:ro,[no]:eo,[oo]:io,[ao]:so,[ro]:fi};function og(i,t){function e(){let P=!1,j=new le,Y=null,pt=new le(0,0,0,0);return{setMask:function(dt){Y!==dt&&!P&&(i.colorMask(dt,dt,dt,dt),Y=dt)},setLocked:function(dt){P=dt},setClear:function(dt,at,At,kt,$t){$t===!0&&(dt*=kt,at*=kt,At*=kt),j.set(dt,at,At,kt),pt.equals(j)===!1&&(i.clearColor(dt,at,At,kt),pt.copy(j))},reset:function(){P=!1,Y=null,pt.set(-1,0,0,0)}}}function n(){let P=!1,j=!1,Y=null,pt=null,dt=null;return{setReversed:function(at){if(j!==at){let At=t.get("EXT_clip_control");at?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),j=at;let kt=dt;dt=null,this.setClear(kt)}},getReversed:function(){return j},setTest:function(at){at?ft(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(at){Y!==at&&!P&&(i.depthMask(at),Y=at)},setFunc:function(at){if(j&&(at=rg[at]),pt!==at){switch(at){case eo:i.depthFunc(i.NEVER);break;case no:i.depthFunc(i.ALWAYS);break;case io:i.depthFunc(i.LESS);break;case fi:i.depthFunc(i.LEQUAL);break;case so:i.depthFunc(i.EQUAL);break;case ro:i.depthFunc(i.GEQUAL);break;case oo:i.depthFunc(i.GREATER);break;case ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=at}},setLocked:function(at){P=at},setClear:function(at){dt!==at&&(j&&(at=1-at),i.clearDepth(at),dt=at)},reset:function(){P=!1,Y=null,pt=null,dt=null,j=!1}}}function s(){let P=!1,j=null,Y=null,pt=null,dt=null,at=null,At=null,kt=null,$t=null;return{setTest:function(Kt){P||(Kt?ft(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(Kt){j!==Kt&&!P&&(i.stencilMask(Kt),j=Kt)},setFunc:function(Kt,Qe,qe){(Y!==Kt||pt!==Qe||dt!==qe)&&(i.stencilFunc(Kt,Qe,qe),Y=Kt,pt=Qe,dt=qe)},setOp:function(Kt,Qe,qe){(at!==Kt||At!==Qe||kt!==qe)&&(i.stencilOp(Kt,Qe,qe),at=Kt,At=Qe,kt=qe)},setLocked:function(Kt){P=Kt},setClear:function(Kt){$t!==Kt&&(i.clearStencil(Kt),$t=Kt)},reset:function(){P=!1,j=null,Y=null,pt=null,dt=null,at=null,At=null,kt=null,$t=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],_=null,v=!1,m=null,f=null,b=null,T=null,M=null,A=null,C=null,R=new wt(0,0,0),U=0,y=!1,S=null,O=null,D=null,q=null,nt=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,mt=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=mt>=1):$.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=mt>=2);let _t=null,gt={},Mt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),Pt=new le().fromArray(Mt),Ft=new le().fromArray(Bt);function Xt(P,j,Y,pt){let dt=new Uint8Array(4),at=i.createTexture();i.bindTexture(P,at),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<Y;At++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(j+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return at}let ut={};ut[i.TEXTURE_2D]=Xt(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=Xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=Xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=Xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),o.setFunc(fi),Ut(!1),xt(za),ft(i.CULL_FACE),Gt(zn);function ft(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Ct(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ot(P,j){return u[P]!==j?(i.bindFramebuffer(P,j),u[P]=j,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=j),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=j),!0):!1}function ot(P,j){let Y=p,pt=!1;if(P){Y=d.get(j),Y===void 0&&(Y=[],d.set(j,Y));let dt=P.textures;if(Y.length!==dt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let at=0,At=dt.length;at<At;at++)Y[at]=i.COLOR_ATTACHMENT0+at;Y.length=dt.length,pt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,pt=!0);pt&&i.drawBuffers(Y)}function Et(P){return _!==P?(i.useProgram(P),_=P,!0):!1}let zt={[$n]:i.FUNC_ADD,[al]:i.FUNC_SUBTRACT,[cl]:i.FUNC_REVERSE_SUBTRACT};zt[ll]=i.MIN,zt[hl]=i.MAX;let B={[ul]:i.ZERO,[dl]:i.ONE,[fl]:i.SRC_COLOR,[Pr]:i.SRC_ALPHA,[vl]:i.SRC_ALPHA_SATURATE,[_l]:i.DST_COLOR,[ml]:i.DST_ALPHA,[pl]:i.ONE_MINUS_SRC_COLOR,[Lr]:i.ONE_MINUS_SRC_ALPHA,[xl]:i.ONE_MINUS_DST_COLOR,[gl]:i.ONE_MINUS_DST_ALPHA,[yl]:i.CONSTANT_COLOR,[Ml]:i.ONE_MINUS_CONSTANT_COLOR,[Sl]:i.CONSTANT_ALPHA,[bl]:i.ONE_MINUS_CONSTANT_ALPHA};function Gt(P,j,Y,pt,dt,at,At,kt,$t,Kt){if(P===zn){v===!0&&(Ct(i.BLEND),v=!1);return}if(v===!1&&(ft(i.BLEND),v=!0),P!==ol){if(P!==m||Kt!==y){if((f!==$n||M!==$n)&&(i.blendEquation(i.FUNC_ADD),f=$n,M=$n),Kt)switch(P){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ka:i.blendFunc(i.ONE,i.ONE);break;case Va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ha:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ka:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Va:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ha:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,T=null,A=null,C=null,R.set(0,0,0),U=0,m=P,y=Kt}return}dt=dt||j,at=at||Y,At=At||pt,(j!==f||dt!==M)&&(i.blendEquationSeparate(zt[j],zt[dt]),f=j,M=dt),(Y!==b||pt!==T||at!==A||At!==C)&&(i.blendFuncSeparate(B[Y],B[pt],B[at],B[At]),b=Y,T=pt,A=at,C=At),(kt.equals(R)===!1||$t!==U)&&(i.blendColor(kt.r,kt.g,kt.b,$t),R.copy(kt),U=$t),m=P,y=!1}function Dt(P,j){P.side===xe?Ct(i.CULL_FACE):ft(i.CULL_FACE);let Y=P.side===De;j&&(Y=!Y),Ut(Y),P.blending===di&&P.transparent===!1?Gt(zn):Gt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let pt=P.stencilWrite;a.setTest(pt),pt&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),L(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(P){S!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),S=P)}function xt(P){P!==il?(ft(i.CULL_FACE),P!==O&&(P===za?i.cullFace(i.BACK):P===sl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),O=P}function F(P){P!==D&&(Z&&i.lineWidth(P),D=P)}function L(P,j,Y){P?(ft(i.POLYGON_OFFSET_FILL),(q!==j||nt!==Y)&&(i.polygonOffset(j,Y),q=j,nt=Y)):Ct(i.POLYGON_OFFSET_FILL)}function I(P){P?ft(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function E(P){P===void 0&&(P=i.TEXTURE0+J-1),_t!==P&&(i.activeTexture(P),_t=P)}function G(P,j,Y){Y===void 0&&(_t===null?Y=i.TEXTURE0+J-1:Y=_t);let pt=gt[Y];pt===void 0&&(pt={type:void 0,texture:void 0},gt[Y]=pt),(pt.type!==P||pt.texture!==j)&&(_t!==Y&&(i.activeTexture(Y),_t=Y),i.bindTexture(P,j||ut[P]),pt.type=P,pt.texture=j)}function x(){let P=gt[_t];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(P){Pt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Pt.copy(P))}function yt(P){Ft.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Ft.copy(P))}function z(P,j){let Y=c.get(j);Y===void 0&&(Y=new WeakMap,c.set(j,Y));let pt=Y.get(P);pt===void 0&&(pt=i.getUniformBlockIndex(j,P.name),Y.set(P,pt))}function k(P,j){let pt=c.get(j).get(P);l.get(j)!==pt&&(i.uniformBlockBinding(j,pt,P.__bindingPointIndex),l.set(j,pt))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},_t=null,gt={},u={},d=new WeakMap,p=[],_=null,v=!1,m=null,f=null,b=null,T=null,M=null,A=null,C=null,R=new wt(0,0,0),U=0,y=!1,S=null,O=null,D=null,q=null,nt=null,Pt.set(0,0,i.canvas.width,i.canvas.height),Ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:Ct,bindFramebuffer:Ot,drawBuffers:ot,useProgram:Et,setBlending:Gt,setMaterial:Dt,setFlipSided:Ut,setCullFace:xt,setLineWidth:F,setPolygonOffset:L,setScissorTest:I,activeTexture:E,bindTexture:G,unbindTexture:x,compressedTexImage2D:g,compressedTexImage3D:N,texImage2D:lt,texImage3D:rt,updateUBOMapping:z,uniformBlockBinding:k,texStorage2D:K,texStorage3D:et,texSubImage2D:H,texSubImage3D:W,compressedTexSubImage2D:V,compressedTexSubImage3D:it,scissor:vt,viewport:yt,reset:st}}function ag(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,g){return p?new OffscreenCanvas(x,g):Ts("canvas")}function v(x,g,N){let H=1,W=G(x);if((W.width>N||W.height>N)&&(H=N/Math.max(W.width,W.height)),H<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let V=Math.floor(H*W.width),it=Math.floor(H*W.height);u===void 0&&(u=_(V,it));let K=g?_(V,it):u;return K.width=V,K.height=it,K.getContext("2d").drawImage(x,0,0,V,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+V+"x"+it+")."),K}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),x;return x}function m(x){return x.generateMipmaps}function f(x){i.generateMipmap(x)}function b(x){return x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?i.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(x,g,N,H,W=!1){if(x!==null){if(i[x]!==void 0)return i[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let V=g;if(g===i.RED&&(N===i.FLOAT&&(V=i.R32F),N===i.HALF_FLOAT&&(V=i.R16F),N===i.UNSIGNED_BYTE&&(V=i.R8)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.R8UI),N===i.UNSIGNED_SHORT&&(V=i.R16UI),N===i.UNSIGNED_INT&&(V=i.R32UI),N===i.BYTE&&(V=i.R8I),N===i.SHORT&&(V=i.R16I),N===i.INT&&(V=i.R32I)),g===i.RG&&(N===i.FLOAT&&(V=i.RG32F),N===i.HALF_FLOAT&&(V=i.RG16F),N===i.UNSIGNED_BYTE&&(V=i.RG8)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RG8UI),N===i.UNSIGNED_SHORT&&(V=i.RG16UI),N===i.UNSIGNED_INT&&(V=i.RG32UI),N===i.BYTE&&(V=i.RG8I),N===i.SHORT&&(V=i.RG16I),N===i.INT&&(V=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGB8UI),N===i.UNSIGNED_SHORT&&(V=i.RGB16UI),N===i.UNSIGNED_INT&&(V=i.RGB32UI),N===i.BYTE&&(V=i.RGB8I),N===i.SHORT&&(V=i.RGB16I),N===i.INT&&(V=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),N===i.UNSIGNED_INT&&(V=i.RGBA32UI),N===i.BYTE&&(V=i.RGBA8I),N===i.SHORT&&(V=i.RGBA16I),N===i.INT&&(V=i.RGBA32I)),g===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),g===i.RGBA){let it=W?Ss:ee.getTransfer(H);N===i.FLOAT&&(V=i.RGBA32F),N===i.HALF_FLOAT&&(V=i.RGBA16F),N===i.UNSIGNED_BYTE&&(V=it===re?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function M(x,g){let N;return x?g===null||g===ei||g===es?N=i.DEPTH24_STENCIL8:g===xn?N=i.DEPTH32F_STENCIL8:g===Qi&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ei||g===es?N=i.DEPTH_COMPONENT24:g===xn?N=i.DEPTH_COMPONENT32F:g===Qi&&(N=i.DEPTH_COMPONENT16),N}function A(x,g){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Ge&&x.minFilter!==fn?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function C(x){let g=x.target;g.removeEventListener("dispose",C),U(g),g.isVideoTexture&&h.delete(g)}function R(x){let g=x.target;g.removeEventListener("dispose",R),S(g)}function U(x){let g=n.get(x);if(g.__webglInit===void 0)return;let N=x.source,H=d.get(N);if(H){let W=H[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&y(x),Object.keys(H).length===0&&d.delete(N)}n.remove(x)}function y(x){let g=n.get(x);i.deleteTexture(g.__webglTexture);let N=x.source,H=d.get(N);delete H[g.__cacheKey],o.memory.textures--}function S(x){let g=n.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),n.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let W=0;W<g.__webglFramebuffer[H].length;W++)i.deleteFramebuffer(g.__webglFramebuffer[H][W]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let N=x.textures;for(let H=0,W=N.length;H<W;H++){let V=n.get(N[H]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(N[H])}n.remove(x)}let O=0;function D(){O=0}function q(){let x=O;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),O+=1,x}function nt(x){let g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function J(x,g){let N=n.get(x);if(x.isVideoTexture&&I(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&N.__version!==x.version){let H=x.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(N,x,g);return}}else x.isExternalTexture&&(N.__webglTexture=x.sourceTexture?x.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function Z(x,g){let N=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&N.__version!==x.version){ut(N,x,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function mt(x,g){let N=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&N.__version!==x.version){ut(N,x,g);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function $(x,g){let N=n.get(x);if(x.version>0&&N.__version!==x.version){ft(N,x,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}let _t={[pi]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[Dr]:i.MIRRORED_REPEAT},gt={[Ge]:i.NEAREST,[Ll]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},Mt={[Fl]:i.NEVER,[Hl]:i.ALWAYS,[Bl]:i.LESS,[Qa]:i.LEQUAL,[Ol]:i.EQUAL,[Vl]:i.GEQUAL,[zl]:i.GREATER,[kl]:i.NOTEQUAL};function Bt(x,g){if(g.type===xn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===fn||g.magFilter===uo||g.magFilter===Ys||g.magFilter===ti||g.minFilter===fn||g.minFilter===uo||g.minFilter===Ys||g.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(x,i.TEXTURE_WRAP_S,_t[g.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,_t[g.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,_t[g.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,gt[g.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,gt[g.minFilter]),g.compareFunction&&(i.texParameteri(x,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(x,i.TEXTURE_COMPARE_FUNC,Mt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ge||g.minFilter!==Ys&&g.minFilter!==ti||g.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(x,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Pt(x,g){let N=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",C));let H=g.source,W=d.get(H);W===void 0&&(W={},d.set(H,W));let V=nt(g);if(V!==x.__cacheKey){W[V]===void 0&&(W[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),W[V].usedTimes++;let it=W[x.__cacheKey];it!==void 0&&(W[x.__cacheKey].usedTimes--,it.usedTimes===0&&y(g)),x.__cacheKey=V,x.__webglTexture=W[V].texture}return N}function Ft(x,g,N){return Math.floor(Math.floor(x/N)/g)}function Xt(x,g,N,H){let V=x.updateRanges;if(V.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,N,H,g.data);else{V.sort((rt,vt)=>rt.start-vt.start);let it=0;for(let rt=1;rt<V.length;rt++){let vt=V[it],yt=V[rt],z=vt.start+vt.count,k=Ft(yt.start,g.width,4),st=Ft(vt.start,g.width,4);yt.start<=z+1&&k===st&&Ft(yt.start+yt.count-1,g.width,4)===k?vt.count=Math.max(vt.count,yt.start+yt.count-vt.start):(++it,V[it]=yt)}V.length=it+1;let K=i.getParameter(i.UNPACK_ROW_LENGTH),et=i.getParameter(i.UNPACK_SKIP_PIXELS),lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let rt=0,vt=V.length;rt<vt;rt++){let yt=V[rt],z=Math.floor(yt.start/4),k=Math.ceil(yt.count/4),st=z%g.width,P=Math.floor(z/g.width),j=k,Y=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,st),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),e.texSubImage2D(i.TEXTURE_2D,0,st,P,j,Y,N,H,g.data)}x.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,K),i.pixelStorei(i.UNPACK_SKIP_PIXELS,et),i.pixelStorei(i.UNPACK_SKIP_ROWS,lt)}}function ut(x,g,N){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);let W=Pt(x,g),V=g.source;e.bindTexture(H,x.__webglTexture,i.TEXTURE0+N);let it=n.get(V);if(V.version!==it.__version||W===!0){e.activeTexture(i.TEXTURE0+N);let K=ee.getPrimaries(ee.workingColorSpace),et=g.colorSpace===Vn?null:ee.getPrimaries(g.colorSpace),lt=g.colorSpace===Vn||K===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let rt=v(g.image,!1,s.maxTextureSize);rt=E(g,rt);let vt=r.convert(g.format,g.colorSpace),yt=r.convert(g.type),z=T(g.internalFormat,vt,yt,g.colorSpace,g.isVideoTexture);Bt(H,g);let k,st=g.mipmaps,P=g.isVideoTexture!==!0,j=it.__version===void 0||W===!0,Y=V.dataReady,pt=A(g,rt);if(g.isDepthTexture)z=M(g.format===ns,g.type),j&&(P?e.texStorage2D(i.TEXTURE_2D,1,z,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,z,rt.width,rt.height,0,vt,yt,null));else if(g.isDataTexture)if(st.length>0){P&&j&&e.texStorage2D(i.TEXTURE_2D,pt,z,st[0].width,st[0].height);for(let dt=0,at=st.length;dt<at;dt++)k=st[dt],P?Y&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,k.width,k.height,vt,yt,k.data):e.texImage2D(i.TEXTURE_2D,dt,z,k.width,k.height,0,vt,yt,k.data);g.generateMipmaps=!1}else P?(j&&e.texStorage2D(i.TEXTURE_2D,pt,z,rt.width,rt.height),Y&&Xt(g,rt,vt,yt)):e.texImage2D(i.TEXTURE_2D,0,z,rt.width,rt.height,0,vt,yt,rt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&j&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,z,st[0].width,st[0].height,rt.depth);for(let dt=0,at=st.length;dt<at;dt++)if(k=st[dt],g.format!==on)if(vt!==null)if(P){if(Y)if(g.layerUpdates.size>0){let At=ac(k.width,k.height,g.format,g.type);for(let kt of g.layerUpdates){let $t=k.data.subarray(kt*At/k.data.BYTES_PER_ELEMENT,(kt+1)*At/k.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,kt,k.width,k.height,1,vt,$t)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,k.width,k.height,rt.depth,vt,k.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,z,k.width,k.height,rt.depth,0,k.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,k.width,k.height,rt.depth,vt,yt,k.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,z,k.width,k.height,rt.depth,0,vt,yt,k.data)}else{P&&j&&e.texStorage2D(i.TEXTURE_2D,pt,z,st[0].width,st[0].height);for(let dt=0,at=st.length;dt<at;dt++)k=st[dt],g.format!==on?vt!==null?P?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,k.width,k.height,vt,k.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,z,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?Y&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,k.width,k.height,vt,yt,k.data):e.texImage2D(i.TEXTURE_2D,dt,z,k.width,k.height,0,vt,yt,k.data)}else if(g.isDataArrayTexture)if(P){if(j&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,z,rt.width,rt.height,rt.depth),Y)if(g.layerUpdates.size>0){let dt=ac(rt.width,rt.height,g.format,g.type);for(let at of g.layerUpdates){let At=rt.data.subarray(at*dt/rt.data.BYTES_PER_ELEMENT,(at+1)*dt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,rt.width,rt.height,1,vt,yt,At)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,vt,yt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,z,rt.width,rt.height,rt.depth,0,vt,yt,rt.data);else if(g.isData3DTexture)P?(j&&e.texStorage3D(i.TEXTURE_3D,pt,z,rt.width,rt.height,rt.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,vt,yt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,z,rt.width,rt.height,rt.depth,0,vt,yt,rt.data);else if(g.isFramebufferTexture){if(j)if(P)e.texStorage2D(i.TEXTURE_2D,pt,z,rt.width,rt.height);else{let dt=rt.width,at=rt.height;for(let At=0;At<pt;At++)e.texImage2D(i.TEXTURE_2D,At,z,dt,at,0,vt,yt,null),dt>>=1,at>>=1}}else if(st.length>0){if(P&&j){let dt=G(st[0]);e.texStorage2D(i.TEXTURE_2D,pt,z,dt.width,dt.height)}for(let dt=0,at=st.length;dt<at;dt++)k=st[dt],P?Y&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,vt,yt,k):e.texImage2D(i.TEXTURE_2D,dt,z,vt,yt,k);g.generateMipmaps=!1}else if(P){if(j){let dt=G(rt);e.texStorage2D(i.TEXTURE_2D,pt,z,dt.width,dt.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,yt,rt)}else e.texImage2D(i.TEXTURE_2D,0,z,vt,yt,rt);m(g)&&f(H),it.__version=V.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function ft(x,g,N){if(g.image.length!==6)return;let H=Pt(x,g),W=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+N);let V=n.get(W);if(W.version!==V.__version||H===!0){e.activeTexture(i.TEXTURE0+N);let it=ee.getPrimaries(ee.workingColorSpace),K=g.colorSpace===Vn?null:ee.getPrimaries(g.colorSpace),et=g.colorSpace===Vn||it===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let lt=g.isCompressedTexture||g.image[0].isCompressedTexture,rt=g.image[0]&&g.image[0].isDataTexture,vt=[];for(let at=0;at<6;at++)!lt&&!rt?vt[at]=v(g.image[at],!0,s.maxCubemapSize):vt[at]=rt?g.image[at].image:g.image[at],vt[at]=E(g,vt[at]);let yt=vt[0],z=r.convert(g.format,g.colorSpace),k=r.convert(g.type),st=T(g.internalFormat,z,k,g.colorSpace),P=g.isVideoTexture!==!0,j=V.__version===void 0||H===!0,Y=W.dataReady,pt=A(g,yt);Bt(i.TEXTURE_CUBE_MAP,g);let dt;if(lt){P&&j&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,st,yt.width,yt.height);for(let at=0;at<6;at++){dt=vt[at].mipmaps;for(let At=0;At<dt.length;At++){let kt=dt[At];g.format!==on?z!==null?P?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,0,0,kt.width,kt.height,z,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,st,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,0,0,kt.width,kt.height,z,k,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,st,kt.width,kt.height,0,z,k,kt.data)}}}else{if(dt=g.mipmaps,P&&j){dt.length>0&&pt++;let at=G(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,st,at.width,at.height)}for(let at=0;at<6;at++)if(rt){P?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,vt[at].width,vt[at].height,z,k,vt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,st,vt[at].width,vt[at].height,0,z,k,vt[at].data);for(let At=0;At<dt.length;At++){let $t=dt[At].image[at].image;P?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,0,0,$t.width,$t.height,z,k,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,st,$t.width,$t.height,0,z,k,$t.data)}}else{P?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,z,k,vt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,st,z,k,vt[at]);for(let At=0;At<dt.length;At++){let kt=dt[At];P?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,0,0,z,k,kt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,st,z,k,kt.image[at])}}}m(g)&&f(i.TEXTURE_CUBE_MAP),V.__version=W.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Ct(x,g,N,H,W,V){let it=r.convert(N.format,N.colorSpace),K=r.convert(N.type),et=T(N.internalFormat,it,K,N.colorSpace),lt=n.get(g),rt=n.get(N);if(rt.__renderTarget=g,!lt.__hasExternalTextures){let vt=Math.max(1,g.width>>V),yt=Math.max(1,g.height>>V);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,V,et,vt,yt,g.depth,0,it,K,null):e.texImage2D(W,V,et,vt,yt,0,it,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,x),L(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,W,rt.__webglTexture,0,F(g)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,W,rt.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(x,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,x),g.depthBuffer){let H=g.depthTexture,W=H&&H.isDepthTexture?H.type:null,V=M(g.stencilBuffer,W),it=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=F(g);L(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,V,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,V,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,V,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,x)}else{let H=g.textures;for(let W=0;W<H.length;W++){let V=H[W],it=r.convert(V.format,V.colorSpace),K=r.convert(V.type),et=T(V.internalFormat,it,K,V.colorSpace),lt=F(g);N&&L(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,et,g.width,g.height):L(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,et,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,et,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=n.get(g.depthTexture);H.__renderTarget=g,(!H.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J(g.depthTexture,0);let W=H.__webglTexture,V=F(g);if(g.depthTexture.format===Wi)L(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(g.depthTexture.format===ns)L(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Et(x){let g=n.get(x),N=x.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==x.depthTexture){let H=x.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){let W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",W)};H.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=H}if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let H=x.texture.mipmaps;H&&H.length>0?ot(g.__webglFramebuffer[0],x):ot(g.__webglFramebuffer,x)}else if(N){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),Ot(g.__webglDepthbuffer[H],x,!1);else{let W=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,V)}}else{let H=x.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ot(g.__webglDepthbuffer,x,!1);else{let W=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,V)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(x,g,N){let H=n.get(x);g!==void 0&&Ct(H.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Et(x)}function B(x){let g=x.texture,N=n.get(x),H=n.get(g);x.addEventListener("dispose",R);let W=x.textures,V=x.isWebGLCubeRenderTarget===!0,it=W.length>1;if(it||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,o.memory.textures++),V){N.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[K]=[];for(let et=0;et<g.mipmaps.length;et++)N.__webglFramebuffer[K][et]=i.createFramebuffer()}else N.__webglFramebuffer[K]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)N.__webglFramebuffer[K]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(it)for(let K=0,et=W.length;K<et;K++){let lt=n.get(W[K]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(x.samples>0&&L(x)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let K=0;K<W.length;K++){let et=W[K];N.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[K]);let lt=r.convert(et.format,et.colorSpace),rt=r.convert(et.type),vt=T(et.internalFormat,lt,rt,et.colorSpace,x.isXRRenderTarget===!0),yt=F(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,vt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,N.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(N.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let et=0;et<g.mipmaps.length;et++)Ct(N.__webglFramebuffer[K][et],x,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,et);else Ct(N.__webglFramebuffer[K],x,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(g)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){for(let K=0,et=W.length;K<et;K++){let lt=W[K],rt=n.get(lt),vt=i.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(vt=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,rt.__webglTexture),Bt(vt,lt),Ct(N.__webglFramebuffer,x,lt,i.COLOR_ATTACHMENT0+K,vt,0),m(lt)&&f(vt)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(K=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,H.__webglTexture),Bt(K,g),g.mipmaps&&g.mipmaps.length>0)for(let et=0;et<g.mipmaps.length;et++)Ct(N.__webglFramebuffer[et],x,g,i.COLOR_ATTACHMENT0,K,et);else Ct(N.__webglFramebuffer,x,g,i.COLOR_ATTACHMENT0,K,0);m(g)&&f(K),e.unbindTexture()}x.depthBuffer&&Et(x)}function Gt(x){let g=x.textures;for(let N=0,H=g.length;N<H;N++){let W=g[N];if(m(W)){let V=b(x),it=n.get(W).__webglTexture;e.bindTexture(V,it),f(V),e.unbindTexture()}}}let Dt=[],Ut=[];function xt(x){if(x.samples>0){if(L(x)===!1){let g=x.textures,N=x.width,H=x.height,W=i.COLOR_BUFFER_BIT,V=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=n.get(x),K=g.length>1;if(K)for(let lt=0;lt<g.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,it.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer);let et=x.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,it.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let lt=0;lt<g.length;lt++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,it.__webglColorRenderbuffer[lt]);let rt=n.get(g[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,N,H,0,0,N,H,W,i.NEAREST),l===!0&&(Dt.length=0,Ut.length=0,Dt.push(i.COLOR_ATTACHMENT0+lt),x.depthBuffer&&x.resolveDepthBuffer===!1&&(Dt.push(V),Ut.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let lt=0;lt<g.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,it.__webglColorRenderbuffer[lt]);let rt=n.get(g[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,it.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){let g=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function F(x){return Math.min(s.maxSamples,x.samples)}function L(x){let g=n.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function I(x){let g=o.render.frame;h.get(x)!==g&&(h.set(x,g),x.update())}function E(x,g){let N=x.colorSpace,H=x.format,W=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||N!==mi&&N!==Vn&&(ee.getTransfer(N)===re?(H!==on||W!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function G(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=D,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=mt,this.setTextureCube=$,this.rebindTextures=zt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=L}function cg(i,t){function e(n,s=Vn){let r,o=ee.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ya)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Za)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xa)return i.BYTE;if(n===qa)return i.SHORT;if(n===Qi)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===ts)return i.HALF_FLOAT;if(n===Ja)return i.ALPHA;if(n===$a)return i.RGB;if(n===on)return i.RGBA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===go)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===Ka)return i.RG;if(n===xo)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===Zs||n===Js||n===$s||n===Ks)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===Mo||n===So||n===bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===wo||n===Eo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===To||n===wo)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Eo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===Co||n===Ro||n===Io||n===Po||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Bo||n===Oo||n===zo||n===ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ro)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Ho||n===Go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===Yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var lg=`
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

}`,yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Fs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pe({vertexShader:lg,fragmentShader:hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mc=class extends Nn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null,v=typeof XRWebGLBinding<"u",m=new yc,f={},b=e.getContextAttributes(),T=null,M=null,A=[],C=[],R=new Qt,U=null,y=new Ie;y.viewport=new le;let S=new Ie;S.viewport=new le;let O=[y,S],D=new to,q=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ut){let ft=A[ut];return ft===void 0&&(ft=new Zi,A[ut]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(ut){let ft=A[ut];return ft===void 0&&(ft=new Zi,A[ut]=ft),ft.getGripSpace()},this.getHand=function(ut){let ft=A[ut];return ft===void 0&&(ft=new Zi,A[ut]=ft),ft.getHandSpace()};function J(ut){let ft=C.indexOf(ut.inputSource);if(ft===-1)return;let Ct=A[ft];Ct!==void 0&&(Ct.update(ut.inputSource,ut.frame,c||o),Ct.dispatchEvent({type:ut.type,data:ut.inputSource}))}function Z(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",mt);for(let ut=0;ut<A.length;ut++){let ft=C[ut];ft!==null&&(C[ut]=null,A[ut].disconnect(ft))}q=null,nt=null,m.reset();for(let ut in f)delete f[ut];t.setRenderTarget(T),p=null,d=null,u=null,s=null,M=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ut){r=ut,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ut){a=ut,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ut){c=ut},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ut){if(s=ut,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",mt),b.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Ot=null,ot=null;b.depth&&(ot=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=b.stencil?ns:Wi,Ot=b.stencil?es:ei);let Et={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new rn(d.textureWidth,d.textureHeight,{format:on,type:_n,depthTexture:new Ns(d.textureWidth,d.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Ct={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new rn(p.framebufferWidth,p.framebufferHeight,{format:on,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function mt(ut){for(let ft=0;ft<ut.removed.length;ft++){let Ct=ut.removed[ft],Ot=C.indexOf(Ct);Ot>=0&&(C[Ot]=null,A[Ot].disconnect(Ct))}for(let ft=0;ft<ut.added.length;ft++){let Ct=ut.added[ft],Ot=C.indexOf(Ct);if(Ot===-1){for(let Et=0;Et<A.length;Et++)if(Et>=C.length){C.push(Ct),Ot=Et;break}else if(C[Et]===null){C[Et]=Ct,Ot=Et;break}if(Ot===-1)break}let ot=A[Ot];ot&&ot.connect(Ct)}}let $=new X,_t=new X;function gt(ut,ft,Ct){$.setFromMatrixPosition(ft.matrixWorld),_t.setFromMatrixPosition(Ct.matrixWorld);let Ot=$.distanceTo(_t),ot=ft.projectionMatrix.elements,Et=Ct.projectionMatrix.elements,zt=ot[14]/(ot[10]-1),B=ot[14]/(ot[10]+1),Gt=(ot[9]+1)/ot[5],Dt=(ot[9]-1)/ot[5],Ut=(ot[8]-1)/ot[0],xt=(Et[8]+1)/Et[0],F=zt*Ut,L=zt*xt,I=Ot/(-Ut+xt),E=I*-Ut;if(ft.matrixWorld.decompose(ut.position,ut.quaternion,ut.scale),ut.translateX(E),ut.translateZ(I),ut.matrixWorld.compose(ut.position,ut.quaternion,ut.scale),ut.matrixWorldInverse.copy(ut.matrixWorld).invert(),ot[10]===-1)ut.projectionMatrix.copy(ft.projectionMatrix),ut.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let G=zt+I,x=B+I,g=F-E,N=L+(Ot-E),H=Gt*B/x*G,W=Dt*B/x*G;ut.projectionMatrix.makePerspective(g,N,H,W,G,x),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert()}}function Mt(ut,ft){ft===null?ut.matrixWorld.copy(ut.matrix):ut.matrixWorld.multiplyMatrices(ft.matrixWorld,ut.matrix),ut.matrixWorldInverse.copy(ut.matrixWorld).invert()}this.updateCamera=function(ut){if(s===null)return;let ft=ut.near,Ct=ut.far;m.texture!==null&&(m.depthNear>0&&(ft=m.depthNear),m.depthFar>0&&(Ct=m.depthFar)),D.near=S.near=y.near=ft,D.far=S.far=y.far=Ct,(q!==D.near||nt!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),q=D.near,nt=D.far),D.layers.mask=ut.layers.mask|6,y.layers.mask=D.layers.mask&3,S.layers.mask=D.layers.mask&5;let Ot=ut.parent,ot=D.cameras;Mt(D,Ot);for(let Et=0;Et<ot.length;Et++)Mt(ot[Et],Ot);ot.length===2?gt(D,y,S):D.projectionMatrix.copy(y.projectionMatrix),Bt(ut,D,Ot)};function Bt(ut,ft,Ct){Ct===null?ut.matrix.copy(ft.matrixWorld):(ut.matrix.copy(Ct.matrixWorld),ut.matrix.invert(),ut.matrix.multiply(ft.matrixWorld)),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.updateMatrixWorld(!0),ut.projectionMatrix.copy(ft.projectionMatrix),ut.projectionMatrixInverse.copy(ft.projectionMatrixInverse),ut.isPerspectiveCamera&&(ut.fov=Xi*2*Math.atan(1/ut.projectionMatrix.elements[5]),ut.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ut){l=ut,d!==null&&(d.fixedFoveation=ut),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ut)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(ut){return f[ut]};let Pt=null;function Ft(ut,ft){if(h=ft.getViewerPose(c||o),_=ft,h!==null){let Ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Ot=!1;Ct.length!==D.cameras.length&&(D.cameras.length=0,Ot=!0);for(let B=0;B<Ct.length;B++){let Gt=Ct[B],Dt=null;if(p!==null)Dt=p.getViewport(Gt);else{let xt=u.getViewSubImage(d,Gt);Dt=xt.viewport,B===0&&(t.setRenderTargetTextures(M,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(M))}let Ut=O[B];Ut===void 0&&(Ut=new Ie,Ut.layers.enable(B),Ut.viewport=new le,O[B]=Ut),Ut.matrix.fromArray(Gt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Gt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),B===0&&(D.matrix.copy(Ut.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ot===!0&&D.cameras.push(Ut)}let ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let B=u.getDepthInformation(Ct[0]);B&&B.isValid&&B.texture&&m.init(B,s.renderState)}if(ot&&ot.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let B=0;B<Ct.length;B++){let Gt=Ct[B].camera;if(Gt){let Dt=f[Gt];Dt||(Dt=new Fs,f[Gt]=Dt);let Ut=u.getCameraImage(Gt);Dt.sourceTexture=Ut}}}}for(let Ct=0;Ct<A.length;Ct++){let Ot=C[Ct],ot=A[Ct];Ot!==null&&ot!==void 0&&ot.update(Ot,ft,c||o)}Pt&&Pt(ut,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),_=null}let Xt=new gh;Xt.setAnimationLoop(Ft),this.setAnimationLoop=function(ut){Pt=ut},this.dispose=function(){}}},Ti=new pn,ug=new se;function dg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ic(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,T,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===De&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===De&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=t.get(f),T=b.envMap,M=b.envMapRotation;T&&(m.envMap.value=T,Ti.copy(M),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(ug.makeRotationFromEuler(Ti)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=T*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){let M=T.program;n.uniformBlockBinding(b,M)}function c(b,T){let M=s[b.id];M===void 0&&(_(b),M=h(b),s[b.id]=M,b.addEventListener("dispose",m));let A=T.program;n.updateUBOMapping(b,A);let C=t.render.frame;r[b.id]!==C&&(d(b),r[b.id]=C)}function h(b){let T=u();b.__bindingPointIndex=T;let M=i.createBuffer(),A=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let T=s[b.id],M=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,R=M.length;C<R;C++){let U=Array.isArray(M[C])?M[C]:[M[C]];for(let y=0,S=U.length;y<S;y++){let O=U[y];if(p(O,C,y,A)===!0){let D=O.__offset,q=Array.isArray(O.value)?O.value:[O.value],nt=0;for(let J=0;J<q.length;J++){let Z=q[J],mt=v(Z);typeof Z=="number"||typeof Z=="boolean"?(O.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,D+nt,O.__data)):Z.isMatrix3?(O.__data[0]=Z.elements[0],O.__data[1]=Z.elements[1],O.__data[2]=Z.elements[2],O.__data[3]=0,O.__data[4]=Z.elements[3],O.__data[5]=Z.elements[4],O.__data[6]=Z.elements[5],O.__data[7]=0,O.__data[8]=Z.elements[6],O.__data[9]=Z.elements[7],O.__data[10]=Z.elements[8],O.__data[11]=0):(Z.toArray(O.__data,nt),nt+=mt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,T,M,A){let C=b.value,R=T+"_"+M;if(A[R]===void 0)return typeof C=="number"||typeof C=="boolean"?A[R]=C:A[R]=C.clone(),!0;{let U=A[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return A[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(b){let T=b.uniforms,M=0,A=16;for(let R=0,U=T.length;R<U;R++){let y=Array.isArray(T[R])?T[R]:[T[R]];for(let S=0,O=y.length;S<O;S++){let D=y[S],q=Array.isArray(D.value)?D.value:[D.value];for(let nt=0,J=q.length;nt<J;nt++){let Z=q[nt],mt=v(Z),$=M%A,_t=$%mt.boundary,gt=$+_t;M+=_t,gt!==0&&A-gt<mt.storage&&(M+=A-gt),D.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=mt.storage}}}let C=M%A;return C>0&&(M+=A-C),b.__size=M,b.__cache={},this}function v(b){let T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){let T=b.target;T.removeEventListener("dispose",m);let M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function f(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var jo=class{constructor(t={}){let{canvas:e=Gl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=new Uint32Array(4),v=new Int32Array(4),m=null,f=null,b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,A=!1;this._outputColorSpace=be;let C=0,R=0,U=null,y=-1,S=null,O=new le,D=new le,q=null,nt=new wt(0),J=0,Z=e.width,mt=e.height,$=1,_t=null,gt=null,Mt=new le(0,0,Z,mt),Bt=new le(0,0,Z,mt),Pt=!1,Ft=new $i,Xt=!1,ut=!1,ft=new se,Ct=new X,Ot=new le,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function zt(){return U===null?$:1}let B=n;function Gt(w,Q){return e.getContext(w,Q)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),B===null){let Q="webgl2";if(B=Gt(Q,w),B===null)throw Gt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Dt,Ut,xt,F,L,I,E,G,x,g,N,H,W,V,it,K,et,lt,rt,vt,yt,z,k,st;function P(){Dt=new Pp(B),Dt.init(),z=new cg(B,Dt),Ut=new Tp(B,Dt,t,z),xt=new og(B,Dt),Ut.reversedDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),F=new Up(B),L=new Ym,I=new ag(B,Dt,xt,L,Ut,z,F),E=new Ep(M),G=new Ip(M),x=new zu(B),k=new Sp(B,x),g=new Lp(B,x,F,k),N=new Fp(B,g,x,F),rt=new Np(B,Ut,I),K=new wp(L),H=new qm(M,E,G,Dt,Ut,k,K),W=new dg(M,L),V=new Jm,it=new eg(Dt),lt=new Mp(M,E,G,xt,N,p,l),et=new sg(M,N,Ut),st=new fg(B,F,Ut,xt),vt=new bp(B,Dt,F),yt=new Dp(B,Dt,F),F.programs=H.programs,M.capabilities=Ut,M.extensions=Dt,M.properties=L,M.renderLists=V,M.shadowMap=et,M.state=xt,M.info=F}P();let j=new Mc(M,B);this.xr=j,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let w=Dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(Z,mt,!1))},this.getSize=function(w){return w.set(Z,mt)},this.setSize=function(w,Q,ct=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,mt=Q,e.width=Math.floor(w*$),e.height=Math.floor(Q*$),ct===!0&&(e.style.width=w+"px",e.style.height=Q+"px"),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(Z*$,mt*$).floor()},this.setDrawingBufferSize=function(w,Q,ct){Z=w,mt=Q,$=ct,e.width=Math.floor(w*ct),e.height=Math.floor(Q*ct),this.setViewport(0,0,w,Q)},this.getCurrentViewport=function(w){return w.copy(O)},this.getViewport=function(w){return w.copy(Mt)},this.setViewport=function(w,Q,ct,ht){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,Q,ct,ht),xt.viewport(O.copy(Mt).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(Bt)},this.setScissor=function(w,Q,ct,ht){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,Q,ct,ht),xt.scissor(D.copy(Bt).multiplyScalar($).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(w){xt.setScissorTest(Pt=w)},this.setOpaqueSort=function(w){_t=w},this.setTransparentSort=function(w){gt=w},this.getClearColor=function(w){return w.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(w=!0,Q=!0,ct=!0){let ht=0;if(w){let tt=!1;if(U!==null){let St=U.texture.format;tt=St===vo||St===xo||St===_o}if(tt){let St=U.texture.type,It=St===_n||St===ei||St===Qi||St===es||St===po||St===mo,Nt=lt.getClearColor(),Lt=lt.getClearAlpha(),Wt=Nt.r,qt=Nt.g,Vt=Nt.b;It?(_[0]=Wt,_[1]=qt,_[2]=Vt,_[3]=Lt,B.clearBufferuiv(B.COLOR,0,_)):(v[0]=Wt,v[1]=qt,v[2]=Vt,v[3]=Lt,B.clearBufferiv(B.COLOR,0,v))}else ht|=B.COLOR_BUFFER_BIT}Q&&(ht|=B.DEPTH_BUFFER_BIT),ct&&(ht|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),lt.dispose(),V.dispose(),it.dispose(),L.dispose(),E.dispose(),G.dispose(),N.dispose(),k.dispose(),st.dispose(),H.dispose(),j.dispose(),j.removeEventListener("sessionstart",qe),j.removeEventListener("sessionend",Ac),ri.stop()};function Y(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=F.autoReset,Q=et.enabled,ct=et.autoUpdate,ht=et.needsUpdate,tt=et.type;P(),F.autoReset=w,et.enabled=Q,et.autoUpdate=ct,et.needsUpdate=ht,et.type=tt}function dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function at(w){let Q=w.target;Q.removeEventListener("dispose",at),At(Q)}function At(w){kt(w),L.remove(w)}function kt(w){let Q=L.get(w).programs;Q!==void 0&&(Q.forEach(function(ct){H.releaseProgram(ct)}),w.isShaderMaterial&&H.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,ct,ht,tt,St){Q===null&&(Q=ot);let It=tt.isMesh&&tt.matrixWorld.determinant()<0,Nt=Dh(w,Q,ct,ht,tt);xt.setMaterial(ht,It);let Lt=ct.index,Wt=1;if(ht.wireframe===!0){if(Lt=g.getWireframeAttribute(ct),Lt===void 0)return;Wt=2}let qt=ct.drawRange,Vt=ct.attributes.position,te=qt.start*Wt,oe=(qt.start+qt.count)*Wt;St!==null&&(te=Math.max(te,St.start*Wt),oe=Math.min(oe,(St.start+St.count)*Wt)),Lt!==null?(te=Math.max(te,0),oe=Math.min(oe,Lt.count)):Vt!=null&&(te=Math.max(te,0),oe=Math.min(oe,Vt.count));let ge=oe-te;if(ge<0||ge===1/0)return;k.setup(tt,ht,Nt,ct,Lt);let ue,ce=vt;if(Lt!==null&&(ue=x.get(Lt),ce=yt,ce.setIndex(ue)),tt.isMesh)ht.wireframe===!0?(xt.setLineWidth(ht.wireframeLinewidth*zt()),ce.setMode(B.LINES)):ce.setMode(B.TRIANGLES);else if(tt.isLine){let Ht=ht.linewidth;Ht===void 0&&(Ht=1),xt.setLineWidth(Ht*zt()),tt.isLineSegments?ce.setMode(B.LINES):tt.isLineLoop?ce.setMode(B.LINE_LOOP):ce.setMode(B.LINE_STRIP)}else tt.isPoints?ce.setMode(B.POINTS):tt.isSprite&&ce.setMode(B.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)qi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))ce.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let Ht=tt._multiDrawStarts,fe=tt._multiDrawCounts,ie=tt._multiDrawCount,Ye=Lt?x.get(Lt).bytesPerElement:1,Ci=L.get(ht).currentProgram.getUniforms();for(let Ze=0;Ze<ie;Ze++)Ci.setValue(B,"_gl_DrawID",Ze),ce.render(Ht[Ze]/Ye,fe[Ze])}else if(tt.isInstancedMesh)ce.renderInstances(te,ge,tt.count);else if(ct.isInstancedBufferGeometry){let Ht=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,fe=Math.min(ct.instanceCount,Ht);ce.renderInstances(te,ge,fe)}else ce.render(te,ge)};function $t(w,Q,ct){w.transparent===!0&&w.side===xe&&w.forceSinglePass===!1?(w.side=De,w.needsUpdate=!0,ar(w,Q,ct),w.side=dn,w.needsUpdate=!0,ar(w,Q,ct),w.side=xe):ar(w,Q,ct)}this.compile=function(w,Q,ct=null){ct===null&&(ct=w),f=it.get(ct),f.init(Q),T.push(f),ct.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Q.layers)&&(f.pushLight(tt),tt.castShadow&&f.pushShadow(tt))}),w!==ct&&w.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Q.layers)&&(f.pushLight(tt),tt.castShadow&&f.pushShadow(tt))}),f.setupLights();let ht=new Set;return w.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let St=tt.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){let Nt=St[It];$t(Nt,ct,tt),ht.add(Nt)}else $t(St,ct,tt),ht.add(St)}),f=T.pop(),ht},this.compileAsync=function(w,Q,ct=null){let ht=this.compile(w,Q,ct);return new Promise(tt=>{function St(){if(ht.forEach(function(It){L.get(It).currentProgram.isReady()&&ht.delete(It)}),ht.size===0){tt(w);return}setTimeout(St,10)}Dt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Kt=null;function Qe(w){Kt&&Kt(w)}function qe(){ri.stop()}function Ac(){ri.start()}let ri=new gh;ri.setAnimationLoop(Qe),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(w){Kt=w,j.setAnimationLoop(w),w===null?ri.stop():ri.start()},j.addEventListener("sessionstart",qe),j.addEventListener("sessionend",Ac),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(Q),Q=j.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,Q,U),f=it.get(w,T.length),f.init(Q),T.push(f),ft.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Ft.setFromProjectionMatrix(ft,un,Q.reversedDepth),ut=this.localClippingEnabled,Xt=K.init(this.clippingPlanes,ut),m=V.get(w,b.length),m.init(),b.push(m),j.enabled===!0&&j.isPresenting===!0){let St=M.xr.getDepthSensingMesh();St!==null&&ia(St,Q,-1/0,M.sortObjects)}ia(w,Q,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(_t,gt),Et=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Et&&lt.addToRenderList(m,w),this.info.render.frame++,Xt===!0&&K.beginShadows();let ct=f.state.shadowsArray;et.render(ct,w,Q),Xt===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();let ht=m.opaque,tt=m.transmissive;if(f.setupLights(),Q.isArrayCamera){let St=Q.cameras;if(tt.length>0)for(let It=0,Nt=St.length;It<Nt;It++){let Lt=St[It];Rc(ht,tt,w,Lt)}Et&&lt.render(w);for(let It=0,Nt=St.length;It<Nt;It++){let Lt=St[It];Cc(m,w,Lt,Lt.viewport)}}else tt.length>0&&Rc(ht,tt,w,Q),Et&&lt.render(w),Cc(m,w,Q);U!==null&&R===0&&(I.updateMultisampleRenderTarget(U),I.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(M,w,Q),k.resetDefaultState(),y=-1,S=null,T.pop(),T.length>0?(f=T[T.length-1],Xt===!0&&K.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ia(w,Q,ct,ht){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)ct=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ft.intersectsSprite(w)){ht&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ft);let It=N.update(w),Nt=w.material;Nt.visible&&m.push(w,It,Nt,ct,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ft.intersectsObject(w))){let It=N.update(w),Nt=w.material;if(ht&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Ot.copy(It.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(ft)),Array.isArray(Nt)){let Lt=It.groups;for(let Wt=0,qt=Lt.length;Wt<qt;Wt++){let Vt=Lt[Wt],te=Nt[Vt.materialIndex];te&&te.visible&&m.push(w,It,te,ct,Ot.z,Vt)}}else Nt.visible&&m.push(w,It,Nt,ct,Ot.z,null)}}let St=w.children;for(let It=0,Nt=St.length;It<Nt;It++)ia(St[It],Q,ct,ht)}function Cc(w,Q,ct,ht){let tt=w.opaque,St=w.transmissive,It=w.transparent;f.setupLightsView(ct),Xt===!0&&K.setGlobalState(M.clippingPlanes,ct),ht&&xt.viewport(O.copy(ht)),tt.length>0&&or(tt,Q,ct),St.length>0&&or(St,Q,ct),It.length>0&&or(It,Q,ct),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Rc(w,Q,ct,ht){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ht.id]===void 0&&(f.state.transmissionRenderTarget[ht.id]=new rn(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?ts:_n,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let St=f.state.transmissionRenderTarget[ht.id],It=ht.viewport||O;St.setSize(It.z*M.transmissionResolutionScale,It.w*M.transmissionResolutionScale);let Nt=M.getRenderTarget(),Lt=M.getActiveCubeFace(),Wt=M.getActiveMipmapLevel();M.setRenderTarget(St),M.getClearColor(nt),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),Et&&lt.render(ct);let qt=M.toneMapping;M.toneMapping=kn;let Vt=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),f.setupLightsView(ht),Xt===!0&&K.setGlobalState(M.clippingPlanes,ht),or(w,ct,ht),I.updateMultisampleRenderTarget(St),I.updateRenderTargetMipmap(St),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let oe=0,ge=Q.length;oe<ge;oe++){let ue=Q[oe],ce=ue.object,Ht=ue.geometry,fe=ue.material,ie=ue.group;if(fe.side===xe&&ce.layers.test(ht.layers)){let Ye=fe.side;fe.side=De,fe.needsUpdate=!0,Ic(ce,ct,ht,Ht,fe,ie),fe.side=Ye,fe.needsUpdate=!0,te=!0}}te===!0&&(I.updateMultisampleRenderTarget(St),I.updateRenderTargetMipmap(St))}M.setRenderTarget(Nt,Lt,Wt),M.setClearColor(nt,J),Vt!==void 0&&(ht.viewport=Vt),M.toneMapping=qt}function or(w,Q,ct){let ht=Q.isScene===!0?Q.overrideMaterial:null;for(let tt=0,St=w.length;tt<St;tt++){let It=w[tt],Nt=It.object,Lt=It.geometry,Wt=It.group,qt=It.material;qt.allowOverride===!0&&ht!==null&&(qt=ht),Nt.layers.test(ct.layers)&&Ic(Nt,Q,ct,Lt,qt,Wt)}}function Ic(w,Q,ct,ht,tt,St){w.onBeforeRender(M,Q,ct,ht,tt,St),w.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),tt.onBeforeRender(M,Q,ct,ht,w,St),tt.transparent===!0&&tt.side===xe&&tt.forceSinglePass===!1?(tt.side=De,tt.needsUpdate=!0,M.renderBufferDirect(ct,Q,ht,tt,w,St),tt.side=dn,tt.needsUpdate=!0,M.renderBufferDirect(ct,Q,ht,tt,w,St),tt.side=xe):M.renderBufferDirect(ct,Q,ht,tt,w,St),w.onAfterRender(M,Q,ct,ht,tt,St)}function ar(w,Q,ct){Q.isScene!==!0&&(Q=ot);let ht=L.get(w),tt=f.state.lights,St=f.state.shadowsArray,It=tt.state.version,Nt=H.getParameters(w,tt.state,St,Q,ct),Lt=H.getProgramCacheKey(Nt),Wt=ht.programs;ht.environment=w.isMeshStandardMaterial?Q.environment:null,ht.fog=Q.fog,ht.envMap=(w.isMeshStandardMaterial?G:E).get(w.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",at),Wt=new Map,ht.programs=Wt);let qt=Wt.get(Lt);if(qt!==void 0){if(ht.currentProgram===qt&&ht.lightsStateVersion===It)return Lc(w,Nt),qt}else Nt.uniforms=H.getUniforms(w),w.onBeforeCompile(Nt,M),qt=H.acquireProgram(Nt,Lt),Wt.set(Lt,qt),ht.uniforms=Nt.uniforms;let Vt=ht.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Vt.clippingPlanes=K.uniform),Lc(w,Nt),ht.needsLights=Nh(w),ht.lightsStateVersion=It,ht.needsLights&&(Vt.ambientLightColor.value=tt.state.ambient,Vt.lightProbe.value=tt.state.probe,Vt.directionalLights.value=tt.state.directional,Vt.directionalLightShadows.value=tt.state.directionalShadow,Vt.spotLights.value=tt.state.spot,Vt.spotLightShadows.value=tt.state.spotShadow,Vt.rectAreaLights.value=tt.state.rectArea,Vt.ltc_1.value=tt.state.rectAreaLTC1,Vt.ltc_2.value=tt.state.rectAreaLTC2,Vt.pointLights.value=tt.state.point,Vt.pointLightShadows.value=tt.state.pointShadow,Vt.hemisphereLights.value=tt.state.hemi,Vt.directionalShadowMap.value=tt.state.directionalShadowMap,Vt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Vt.spotShadowMap.value=tt.state.spotShadowMap,Vt.spotLightMatrix.value=tt.state.spotLightMatrix,Vt.spotLightMap.value=tt.state.spotLightMap,Vt.pointShadowMap.value=tt.state.pointShadowMap,Vt.pointShadowMatrix.value=tt.state.pointShadowMatrix),ht.currentProgram=qt,ht.uniformsList=null,qt}function Pc(w){if(w.uniformsList===null){let Q=w.currentProgram.getUniforms();w.uniformsList=os.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function Lc(w,Q){let ct=L.get(w);ct.outputColorSpace=Q.outputColorSpace,ct.batching=Q.batching,ct.batchingColor=Q.batchingColor,ct.instancing=Q.instancing,ct.instancingColor=Q.instancingColor,ct.instancingMorph=Q.instancingMorph,ct.skinning=Q.skinning,ct.morphTargets=Q.morphTargets,ct.morphNormals=Q.morphNormals,ct.morphColors=Q.morphColors,ct.morphTargetsCount=Q.morphTargetsCount,ct.numClippingPlanes=Q.numClippingPlanes,ct.numIntersection=Q.numClipIntersection,ct.vertexAlphas=Q.vertexAlphas,ct.vertexTangents=Q.vertexTangents,ct.toneMapping=Q.toneMapping}function Dh(w,Q,ct,ht,tt){Q.isScene!==!0&&(Q=ot),I.resetTextureUnits();let St=Q.fog,It=ht.isMeshStandardMaterial?Q.environment:null,Nt=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:mi,Lt=(ht.isMeshStandardMaterial?G:E).get(ht.envMap||It),Wt=ht.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,qt=!!ct.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),Vt=!!ct.morphAttributes.position,te=!!ct.morphAttributes.normal,oe=!!ct.morphAttributes.color,ge=kn;ht.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ge=M.toneMapping);let ue=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,ce=ue!==void 0?ue.length:0,Ht=L.get(ht),fe=f.state.lights;if(Xt===!0&&(ut===!0||w!==S)){let Be=w===S&&ht.id===y;K.setState(ht,w,Be)}let ie=!1;ht.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==fe.state.version||Ht.outputColorSpace!==Nt||tt.isBatchedMesh&&Ht.batching===!1||!tt.isBatchedMesh&&Ht.batching===!0||tt.isBatchedMesh&&Ht.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Ht.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Ht.instancing===!1||!tt.isInstancedMesh&&Ht.instancing===!0||tt.isSkinnedMesh&&Ht.skinning===!1||!tt.isSkinnedMesh&&Ht.skinning===!0||tt.isInstancedMesh&&Ht.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Ht.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Ht.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Ht.instancingMorph===!1&&tt.morphTexture!==null||Ht.envMap!==Lt||ht.fog===!0&&Ht.fog!==St||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==K.numPlanes||Ht.numIntersection!==K.numIntersection)||Ht.vertexAlphas!==Wt||Ht.vertexTangents!==qt||Ht.morphTargets!==Vt||Ht.morphNormals!==te||Ht.morphColors!==oe||Ht.toneMapping!==ge||Ht.morphTargetsCount!==ce)&&(ie=!0):(ie=!0,Ht.__version=ht.version);let Ye=Ht.currentProgram;ie===!0&&(Ye=ar(ht,Q,tt));let Ci=!1,Ze=!1,ds=!1,pe=Ye.getUniforms(),tn=Ht.uniforms;if(xt.useProgram(Ye.program)&&(Ci=!0,Ze=!0,ds=!0),ht.id!==y&&(y=ht.id,Ze=!0),Ci||S!==w){xt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),pe.setValue(B,"projectionMatrix",w.projectionMatrix),pe.setValue(B,"viewMatrix",w.matrixWorldInverse);let He=pe.map.cameraPosition;He!==void 0&&He.setValue(B,Ct.setFromMatrixPosition(w.matrixWorld)),Ut.logarithmicDepthBuffer&&pe.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&pe.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Ze=!0,ds=!0)}if(tt.isSkinnedMesh){pe.setOptional(B,tt,"bindMatrix"),pe.setOptional(B,tt,"bindMatrixInverse");let Be=tt.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),pe.setValue(B,"boneTexture",Be.boneTexture,I))}tt.isBatchedMesh&&(pe.setOptional(B,tt,"batchingTexture"),pe.setValue(B,"batchingTexture",tt._matricesTexture,I),pe.setOptional(B,tt,"batchingIdTexture"),pe.setValue(B,"batchingIdTexture",tt._indirectTexture,I),pe.setOptional(B,tt,"batchingColorTexture"),tt._colorsTexture!==null&&pe.setValue(B,"batchingColorTexture",tt._colorsTexture,I));let en=ct.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&rt.update(tt,ct,Ye),(Ze||Ht.receiveShadow!==tt.receiveShadow)&&(Ht.receiveShadow=tt.receiveShadow,pe.setValue(B,"receiveShadow",tt.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(tn.envMap.value=Lt,tn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&Q.environment!==null&&(tn.envMapIntensity.value=Q.environmentIntensity),Ze&&(pe.setValue(B,"toneMappingExposure",M.toneMappingExposure),Ht.needsLights&&Uh(tn,ds),St&&ht.fog===!0&&W.refreshFogUniforms(tn,St),W.refreshMaterialUniforms(tn,ht,$,mt,f.state.transmissionRenderTarget[w.id]),os.upload(B,Pc(Ht),tn,I)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(os.upload(B,Pc(Ht),tn,I),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&pe.setValue(B,"center",tt.center),pe.setValue(B,"modelViewMatrix",tt.modelViewMatrix),pe.setValue(B,"normalMatrix",tt.normalMatrix),pe.setValue(B,"modelMatrix",tt.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){let Be=ht.uniformsGroups;for(let He=0,sa=Be.length;He<sa;He++){let oi=Be[He];st.update(oi,Ye),st.bind(oi,Ye)}}return Ye}function Uh(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function Nh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,Q,ct){let ht=L.get(w);ht.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),L.get(w.texture).__webglTexture=Q,L.get(w.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:ct,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Q){let ct=L.get(w);ct.__webglFramebuffer=Q,ct.__useDefaultFramebuffer=Q===void 0};let Fh=B.createFramebuffer();this.setRenderTarget=function(w,Q=0,ct=0){U=w,C=Q,R=ct;let ht=!0,tt=null,St=!1,It=!1;if(w){let Lt=L.get(w);if(Lt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(B.FRAMEBUFFER,null),ht=!1;else if(Lt.__webglFramebuffer===void 0)I.setupRenderTarget(w);else if(Lt.__hasExternalTextures)I.rebindTextures(w,L.get(w.texture).__webglTexture,L.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Vt=w.depthTexture;if(Lt.__boundDepthTexture!==Vt){if(Vt!==null&&L.has(Vt)&&(w.width!==Vt.image.width||w.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(w)}}let Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(It=!0);let qt=L.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[Q])?tt=qt[Q][ct]:tt=qt[Q],St=!0):w.samples>0&&I.useMultisampledRTT(w)===!1?tt=L.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?tt=qt[ct]:tt=qt,O.copy(w.viewport),D.copy(w.scissor),q=w.scissorTest}else O.copy(Mt).multiplyScalar($).floor(),D.copy(Bt).multiplyScalar($).floor(),q=Pt;if(ct!==0&&(tt=Fh),xt.bindFramebuffer(B.FRAMEBUFFER,tt)&&ht&&xt.drawBuffers(w,tt),xt.viewport(O),xt.scissor(D),xt.setScissorTest(q),St){let Lt=L.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt.__webglTexture,ct)}else if(It){let Lt=Q;for(let Wt=0;Wt<w.textures.length;Wt++){let qt=L.get(w.textures[Wt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Wt,qt.__webglTexture,ct,Lt)}}else if(w!==null&&ct!==0){let Lt=L.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Lt.__webglTexture,ct)}y=-1},this.readRenderTargetPixels=function(w,Q,ct,ht,tt,St,It,Nt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=L.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt){xt.bindFramebuffer(B.FRAMEBUFFER,Lt);try{let Wt=w.textures[Nt],qt=Wt.format,Vt=Wt.type;if(!Ut.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-ht&&ct>=0&&ct<=w.height-tt&&(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt),B.readPixels(Q,ct,ht,tt,z.convert(qt),z.convert(Vt),St))}finally{let Wt=U!==null?L.get(U).__webglFramebuffer:null;xt.bindFramebuffer(B.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(w,Q,ct,ht,tt,St,It,Nt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=L.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt)if(Q>=0&&Q<=w.width-ht&&ct>=0&&ct<=w.height-tt){xt.bindFramebuffer(B.FRAMEBUFFER,Lt);let Wt=w.textures[Nt],qt=Wt.format,Vt=Wt.type;if(!Ut.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,te),B.bufferData(B.PIXEL_PACK_BUFFER,St.byteLength,B.STREAM_READ),w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt),B.readPixels(Q,ct,ht,tt,z.convert(qt),z.convert(Vt),0);let oe=U!==null?L.get(U).__webglFramebuffer:null;xt.bindFramebuffer(B.FRAMEBUFFER,oe);let ge=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Wl(B,ge,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,te),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,St),B.deleteBuffer(te),B.deleteSync(ge),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Q=null,ct=0){let ht=Math.pow(2,-ct),tt=Math.floor(w.image.width*ht),St=Math.floor(w.image.height*ht),It=Q!==null?Q.x:0,Nt=Q!==null?Q.y:0;I.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,ct,0,0,It,Nt,tt,St),xt.unbindTexture()};let Bh=B.createFramebuffer(),Oh=B.createFramebuffer();this.copyTextureToTexture=function(w,Q,ct=null,ht=null,tt=0,St=null){St===null&&(tt!==0?(qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=tt,tt=0):St=0);let It,Nt,Lt,Wt,qt,Vt,te,oe,ge,ue=w.isCompressedTexture?w.mipmaps[St]:w.image;if(ct!==null)It=ct.max.x-ct.min.x,Nt=ct.max.y-ct.min.y,Lt=ct.isBox3?ct.max.z-ct.min.z:1,Wt=ct.min.x,qt=ct.min.y,Vt=ct.isBox3?ct.min.z:0;else{let en=Math.pow(2,-tt);It=Math.floor(ue.width*en),Nt=Math.floor(ue.height*en),w.isDataArrayTexture?Lt=ue.depth:w.isData3DTexture?Lt=Math.floor(ue.depth*en):Lt=1,Wt=0,qt=0,Vt=0}ht!==null?(te=ht.x,oe=ht.y,ge=ht.z):(te=0,oe=0,ge=0);let ce=z.convert(Q.format),Ht=z.convert(Q.type),fe;Q.isData3DTexture?(I.setTexture3D(Q,0),fe=B.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(I.setTexture2DArray(Q,0),fe=B.TEXTURE_2D_ARRAY):(I.setTexture2D(Q,0),fe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Q.unpackAlignment);let ie=B.getParameter(B.UNPACK_ROW_LENGTH),Ye=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ci=B.getParameter(B.UNPACK_SKIP_PIXELS),Ze=B.getParameter(B.UNPACK_SKIP_ROWS),ds=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ue.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ue.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Wt),B.pixelStorei(B.UNPACK_SKIP_ROWS,qt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Vt);let pe=w.isDataArrayTexture||w.isData3DTexture,tn=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isDepthTexture){let en=L.get(w),Be=L.get(Q),He=L.get(en.__renderTarget),sa=L.get(Be.__renderTarget);xt.bindFramebuffer(B.READ_FRAMEBUFFER,He.__webglFramebuffer),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,sa.__webglFramebuffer);for(let oi=0;oi<Lt;oi++)pe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,L.get(w).__webglTexture,tt,Vt+oi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,L.get(Q).__webglTexture,St,ge+oi)),B.blitFramebuffer(Wt,qt,It,Nt,te,oe,It,Nt,B.DEPTH_BUFFER_BIT,B.NEAREST);xt.bindFramebuffer(B.READ_FRAMEBUFFER,null),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(tt!==0||w.isRenderTargetTexture||L.has(w)){let en=L.get(w),Be=L.get(Q);xt.bindFramebuffer(B.READ_FRAMEBUFFER,Bh),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Oh);for(let He=0;He<Lt;He++)pe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,en.__webglTexture,tt,Vt+He):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,en.__webglTexture,tt),tn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.__webglTexture,St,ge+He):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Be.__webglTexture,St),tt!==0?B.blitFramebuffer(Wt,qt,It,Nt,te,oe,It,Nt,B.COLOR_BUFFER_BIT,B.NEAREST):tn?B.copyTexSubImage3D(fe,St,te,oe,ge+He,Wt,qt,It,Nt):B.copyTexSubImage2D(fe,St,te,oe,Wt,qt,It,Nt);xt.bindFramebuffer(B.READ_FRAMEBUFFER,null),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else tn?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(fe,St,te,oe,ge,It,Nt,Lt,ce,Ht,ue.data):Q.isCompressedArrayTexture?B.compressedTexSubImage3D(fe,St,te,oe,ge,It,Nt,Lt,ce,ue.data):B.texSubImage3D(fe,St,te,oe,ge,It,Nt,Lt,ce,Ht,ue):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,St,te,oe,It,Nt,ce,Ht,ue.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,St,te,oe,ue.width,ue.height,ce,ue.data):B.texSubImage2D(B.TEXTURE_2D,St,te,oe,It,Nt,ce,Ht,ue);B.pixelStorei(B.UNPACK_ROW_LENGTH,ie),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ye),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ci),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ds),St===0&&Q.generateMipmaps&&B.generateMipmap(fe),xt.unbindTexture()},this.initRenderTarget=function(w){L.get(w).__webglFramebuffer===void 0&&I.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?I.setTextureCube(w,0):w.isData3DTexture?I.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?I.setTexture2DArray(w,0):I.setTexture2D(w,0),xt.unbindTexture()},this.resetState=function(){C=0,R=0,U=null,xt.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var ve=(i,t)=>.09*Math.sin(i*.075)+.1*Math.sin(t*.18)+Math.max(0,Math.abs(t)-37)*.012*(1+Math.sin(i*.025+t*.1)),We=i=>3.5*Math.sin(i/55)+2.1*Math.sin(i/26),ni=i=>14.9+1.4*Math.sin(i/38+.7),er=-.73,Ce=-4,cs=21.8,ls=10.6,Xe=i=>{let t=Math.min(1,Math.abs(i-We(Ce))/cs);return .13+5.65*Math.pow(1-t*t,1.28)},nr={west:-164,east:178,south:75,north:-74};function hs(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}var Te=[{name:"\u90CA\u91CE",area:"\u57CE\u5916\u7530\u7574",x:-126,z:25,look:[-112,1.9,18],sound:"field",note:"\u5C0F\u8DEF\u7A7F\u8FC7\u9EA6\u5730\u3002\u7530\u57C2\u90A3\u5934\u6709\u4EBA\u6311\u62C5\uFF0C\u6CBF\u6CB3\u518D\u8D70\u4E00\u6BB5\u5C31\u662F\u8D27\u6808\u3002",path:[[-115,23],[-102,21.2],[-90,20]]},{name:"\u6C74\u6CB3",area:"\u6CB3\u5CB8\u7EA4\u9053",x:-79,z:18,look:[-53,1,4],sound:"river",note:"\u8D27\u8239\u987A\u7740\u6C34\u9053\u524D\u884C\u3002\u9760\u8FD1\u8679\u6865\u65F6\uFF0C\u8239\u5DE5\u628A\u9AD8\u9AD8\u7684\u6845\u6746\u653E\u4F4E\u3002",path:[[-68,18],[-55,18],[-46,19]]},{name:"\u7801\u5934",area:"\u6CB3\u5CB8\u8D27\u6808",x:-36,z:18,look:[-27,1.1,12],sound:"dock",note:"\u811A\u592B\u4ECE\u8239\u4E0A\u6311\u8D27\u8FC7\u8DF3\u677F\u3002\u8D27\u9001\u8FDB\u6808\uFF0C\u518D\u7531\u63A8\u8F66\u6CBF\u6CB3\u8FD0\u8D70\u3002",path:[[-27,20],[-16,21],[-7,23],[-4,22]]},{name:"\u8679\u6865",area:"\u6C74\u6CB3\u6E21\u53E3",x:-4,z:-.1,look:[-3.5,5.8,-11],sound:"market",note:"\u6865\u680F\u8FB9\u6446\u7740\u679C\u5B50\u3001\u80E1\u997C\u548C\u8336\u6C34\u3002\u7AD9\u5728\u644A\u95F4\u5F80\u6CB3\u91CC\u671B\uFF0C\u8FD8\u80FD\u770B\u89C1\u8D27\u8239\u8FC7\u6865\u3002",path:[[-4,-10],[-4,-22],[3,-23],[14,-23]]},{name:"\u8857\u5E02",area:"\u57CE\u5916\u5927\u8857",x:23,z:-24,look:[42,1.3,-24],sound:"market",note:"\u5E03\u5377\u548C\u679C\u5B50\u6446\u5728\u68DA\u4E0B\uFF0C\u4E70\u5BA2\u5728\u644A\u524D\u6311\u62E3\u3002\u8D76\u8DEF\u7684\u9A91\u624B\u6CBF\u8857\u5FC3\u7ECF\u8FC7\u3002",path:[[32,-24],[43,-25],[46,-26.2]]},{name:"\u5546\u94FA",area:"\u6CBF\u8857\u8D27\u94FA",x:48,z:-30.7,look:[49,1.35,-34.6],sound:"shop",note:"\u5E97\u4E3B\u5728\u67DC\u540E\u62DB\u547C\u3002\u4E70\u5BA2\u51D1\u8FD1\u770B\u9752\u74F7\uFF0C\u6311\u597D\u4FBF\u8F6C\u8EAB\u51FA\u95E8\u3002",path:[[48,-27],[53,-24],[64,-24],[68,-27]]},{name:"\u9152\u697C",area:"\u4E34\u8857\u9152\u8086",x:69,z:-31,look:[65.7,1.46,-36],sound:"shop",note:"\u4ECE\u6728\u67F1\u4E4B\u95F4\u8D70\u8FDB\u53BB\uFF0C\u6CBF\u7A97\u6446\u7740\u684C\u51F3\u3002\u5C4B\u5916\u7684\u8857\u58F0\u8FD8\u542C\u5F97\u89C1\u3002",path:[[69,-27],[74,-24],[82,-24],[90,-25]]},{name:"\u57CE\u95E8",area:"\u5165\u57CE\u95E8\u9053",x:90.9,z:-25,look:[105,5.6,-25],sound:"market",note:"\u57CE\u5934\u7684\u5B88\u5352\u6276\u77DB\u773A\u671B\uFF0C\u95E8\u6D1E\u4E24\u8FB9\u4E5F\u6709\u4EBA\u503C\u5B88\u3002\u5DE1\u5352\u6CBF\u5927\u8857\u8D70\u4E00\u5708\uFF0C\u518D\u6298\u56DE\u57CE\u95E8\u3002",path:[[105,-25],[115,-25],[124,-25],[129,-29],[129,-35]]},{name:"\u57CE\u5185\u8857\u5DF7",area:"\u574A\u5DF7\u4EBA\u5BB6",x:129,z:-45,look:[130,1.6,-59],sound:"lane",note:"\u5C4B\u6A90\u4E0B\u667E\u7740\u5E03\uFF0C\u5DE1\u5352\u6CBF\u574A\u5DF7\u8D70\u8FC7\u3002\u7A84\u5DF7\u4E24\u5934\u90FD\u6709\u901A\u5F80\u8857\u5E02\u7684\u5C0F\u8DEF\u3002",path:[]}],bc=[{position:[36,8.4,24.3],look:[-11,3.2,7.5]},{position:[-40,9,26],look:[8,3,-11]},{position:[5,23,-12],look:[48,0,-25]}];function Mh(){let i=hs(5905),t=256,e=new Float32Array(4096).map(()=>i()),n=Zt.lerp;function s(h,u){let d=Math.floor(h),p=Math.floor(u),_=h-d,v=u-p;_*=_*(3-2*_),v*=v*(3-2*v);let m=(f,b)=>e[(b%64+64)%64*64+(f%64+64)%64];return n(n(m(d,p),m(d+1,p),_),n(m(d,p+1),m(d+1,p+1),_),v)}let r=(h,u)=>{let d=document.createElement("canvas");d.width=d.height=t;let p=d.getContext("2d"),_=p.createImageData(t,t);for(let m=0;m<t;m++)for(let f=0;f<t;f++){let b=f/t,T=m/t,M=s(b*8,T*8),A=s(b*64,T*64),C=1+(M-.5)*.22+(A-.5)*.15+(i()-.5)*.09;if(h==="wood"){let U=s(b*4,T*4)*2.1+Math.sin(T*7+b*3)*.5,y=Math.pow(.5+.5*Math.sin(b*400+U*7),8);C+=(s(b*56,T*4)-.5)*.29-y*.13}if(h==="cloth"&&(C+=(f%3===0?-.054:.024)+(m%3===0?-.055:.024)),h==="stone"||h==="pave"){let U=Math.floor(T*6),y=h==="pave"?.045:.013,S=(b*5+U*.5+y*Math.sin(m*.17))%1,O=T*6%1;S<.037||O<.062?C*=h==="pave"?.78:.64:C+=(s(Math.floor(b*5+U*.5)+9,U+11)-.5)*.19}if(h==="tile"){let U=b*8%1,y=T*6%1,S=Math.pow(Math.sin(Math.PI*U),.6);C=C*(.72+S*.3)-(y<.07?.19:0),U<.065&&(C+=.19)}h==="grass"&&(C+=(s(b*18,T*32)-.5)*.26);let R=(m*t+f)*4;for(let U=0;U<3;U++)_.data[R+U]=u[U]*C;_.data[R+3]=255}p.putImageData(_,0,0);let v=new On(d);return v.colorSpace=be,v.wrapS=v.wrapT=pi,v.anisotropy=8,v},o={};for(let[h,u]of Object.entries({oldwood:["wood",[161,121,85]],timber:["wood",[133,96,67]],beam:["wood",[106,77,55]],plaster:["plain",[207,180,134]],wall:["plain",[189,167,133]],stone:["stone",[155,150,131]],tile:["tile",[123,121,113]],tileDark:["tile",[112,111,104]],brick:["stone",[135,129,110]],linen:["cloth",[224,197,142]],sage:["cloth",[144,153,118]],rust:["cloth",[160,109,75]],straw:["cloth",[189,155,92]],soil:["plain",[159,138,98]],path:["plain",[174,151,112]],pave:["pave",[166,154,128]],grass:["grass",[119,132,66]]}))o[h]=r(...u);let a=document.createElement("canvas");a.width=a.height=128;let l=a.getContext("2d"),c=l.createImageData(128,128);for(let h=0;h<128;h++)for(let u=0;u<128;u++){let d=2*Math.PI/128,p=u*d*7+h*d*2,_=u*d*3-h*d*8+Math.sin(u*d*2),v=u*d*9+h*d*11,m=(h*128+u)*4;c.data[m]=127+32*Math.cos(p)+23*Math.cos(_)+9*Math.sin(v),c.data[m+1]=127+17*Math.cos(p)-33*Math.cos(_)+13*Math.sin(v),c.data[m+2]=244,c.data[m+3]=255}return l.putImageData(c,0,0),o.waterNormal=new On(a),o.waterNormal.wrapS=o.waterNormal.wrapT=pi,o}var bt=(i,t,e)=>new X(i,t,e),pg=bt(0,1,0),Sh=new wn(1,1,1),Le=new Ke(1,1,1,9),ir=new Ke(.7,1,1,10),mg=new Ke(1,1,1,7),sr=new Os(1,0);function vn(i,t={}){return new gn({map:i,roughness:.91,...t})}function bh(i,t,e){let n=hs(1119),s={};for(let F of["oldwood","timber","beam","plaster","wall","stone","tile","tileDark","brick","linen","sage","rust","straw","soil","path","pave","grass"])s[F]=vn(t[F]);Object.assign(s,{bark:vn(t.beam,{color:9210728}),lacquer:vn(t.timber,{color:11758416}),black:vn(null,{color:3220762}),ceramic:vn(null,{color:10662806,roughness:.34,metalness:.03}),paleCeramic:vn(null,{color:13220237,roughness:.49}),iron:vn(null,{color:5588789,roughness:.59,metalness:.33}),green:vn(null,{color:8423756}),foliage:vn(null,{vertexColors:!0,side:xe,roughness:1})});let r=s.linen.clone();r.side=xe,r.onBeforeCompile=F=>{F.uniforms.windTime=e,F.vertexShader=`uniform float windTime;
`+F.vertexShader,F.vertexShader=F.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.y += .065 * sin(windTime * 1.8 + position.x * 2.4 + position.z * 3.0);`)},s.awning=r,s.foliage.onBeforeCompile=F=>{F.uniforms.windTime=e,F.vertexShader=`uniform float windTime;
`+F.vertexShader,F.vertexShader=F.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x += .060 * sin(windTime * 1.40 + position.z * .28 + position.y * 1.32) * min(position.y,.9);`)};let o=document.createElement("canvas");o.width=o.height=128;let a=o.getContext("2d"),l=hs(883),c=["#738640","#9aa65b","#7e914b","#637742","#879750","#a1aa63","#5c6d38"];for(let F=0;F<520;F++){let L=l()*Math.PI*2,I=Math.sqrt(l())*.95,E=64+Math.cos(L)*I*59,G=64+Math.sin(L)*I*56,x=2.1+l()*4.2;a.fillStyle=c[Math.floor(l()*c.length)],a.beginPath(),a.ellipse(E,G,x,x*(.25+l()*.29),L-l()*1.4,0,Math.PI*2),a.fill()}let h=new On(o);h.colorSpace=be,h.anisotropy=4,s.bough=vn(h,{alphaTest:.45,side:xe}),s.bough.onBeforeCompile=s.foliage.onBeforeCompile;let u=new Map,d=new Map,p=[],_=[],v=[],m=[],f=new Map,b=new ye,T=()=>.8+n()*.23,M=new wt;function A(F,L,I,E,G=0,x=T()){let g=L+"/"+F.id;u.has(g)||u.set(g,{geo:F,mat:L,entries:[]}),b.position.copy(I),b.scale.copy(E),typeof G=="number"?b.rotation.set(0,G,0):b.quaternion.copy(G),b.updateMatrix(),u.get(g).entries.push([b.matrix.clone(),x])}function C(F,L,I,E,G,x,g,N=0,H){A(Sh,F,bt(L,I,E),bt(G,x,g),N,H)}function R(F,L,I,E,G=E,x=Sh){let g=I.clone().sub(L),N=new ze().setFromUnitVectors(pg,g.clone().normalize());A(x,F,L.clone().lerp(I,.5),bt(E,g.length(),G),N)}function U(F,L,I,E,G,x=[0,0,1,1],g=[1,1,1]){d.has(F)||d.set(F,{points:[],uv:[],colors:[]});let N=d.get(F);for(let K of[L,I,E,L,E,G])N.points.push(K.x,K.y,K.z),N.colors.push(...g);let[H,W,V,it]=x;N.uv.push(H,W,V,W,V,it,H,W,V,it,H,it)}function y(F,L,I,E){p.push({x0:F-I/2,x1:F+I/2,z0:L-E/2,z1:L+E/2})}function S(F,L,I,E){let G=Math.cos(E),x=Math.sin(E);return(g,N,H)=>bt(F+g*G+H*x,L+N,I-g*x+H*G)}function O(F,L,I,E,G,x,g,N,H,W){let V=F(E,G,x);C(I,V.x,V.y,V.z,g,N,H,L,W)}function D(F,L,I,E,G){let x=F(L-E/2,0,I-G/2),g=F(L+E/2,0,I+G/2);y((x.x+g.x)/2,(x.z+g.z)/2,Math.abs(x.x-g.x),Math.abs(x.z-g.z))}function q(F,L,I,E,G,x,g){v.push({seller:F(I,0,E),buyer:F(I,0,G),entry:F(I+.69,0,x),yaw:L,goods:g})}function nt(F,L){let I=F+"/"+L;if(f.has(I))return f.get(I);let E=document.createElement("canvas");E.width=L?96:200,E.height=L?200:74;let G=E.getContext("2d");G.fillStyle=L?"#bca877":"#5b3726",G.fillRect(0,0,E.width,E.height),G.strokeStyle=L?"#6a4129":"#a9945e",G.lineWidth=4,G.strokeRect(7,7,E.width-14,E.height-14),G.fillStyle=L?"#342617":"#ece0b2",G.textAlign="center",G.textBaseline="middle",G.font="bold "+(L?61:47)+'px "Songti SC", SimSun, serif',L?[...F].forEach((N,H)=>G.fillText(N,48,55+H*76)):G.fillText(F,E.width/2,E.height/2+1);let x=new On(E);x.colorSpace=be;let g=vn(x,{side:xe});return f.set(I,g),g}function J(F,L,I,E,G,x,g,N,H=!1){let W=new he(new mn(g,N),nt(I,H));W.position.copy(F(E,G,x)),W.rotation.y=L,i.add(W)}function Z(){for(let F of[-1,1]){let L=I=>We(I)+F*ni(I);for(let I=-267;I<273;I+=3){let E=I+3,G=F>0?I<-88||I>70:I<-46||I>182;for(let N=0;N<20;N++){let W=(rt,vt)=>ve(rt,vt)-.04,V=L(I)+F*N*4.15,it=L(I)+F*(N+1)*4.15,K=L(E)+F*N*4.15,et=L(E)+F*(N+1)*4.15,lt=.91+.07*Math.sin(I*.037+N*.59)+.09*n();U(G?"grass":"soil",bt(I,W(I,V),V),bt(I,W(I,it),it),bt(E,W(E,et),et),bt(E,W(E,K),K),[I/5,V/5,E/5,it/5],[lt,lt,lt])}let x=L(I),g=L(E);U("soil",bt(I,ve(I,x),x),bt(E,ve(E,g),g),bt(E,-1.61,g-F*1.45),bt(I,-1.61,x-F*1.45),[I/4,0,E/4,1])}}for(let F=0;F<850;F++){let L=-179+n()*367,I=n()<.55?1:-1,G=We(L)+I*ni(L)+I*(n()*.64-.31);if(L>-11&&L<4||L>-47&&L<-20&&I===1)continue;let x=.17+n()*.62;A(sr,"stone",bt(L,ve(L,G)-x*.25,G),bt(x,.22+x*.55,x*.57),n()*6.28)}}function mt(F,L,I="path"){for(let E=1;E<F.length;E++){let[G,x]=F[E-1],[g,N]=F[E],H=g-G,W=N-x,V=Math.hypot(H,W),it=Math.ceil(V/1.75),K=-W/V,et=H/V,lt=(rt,vt)=>{let yt=1+.036*Math.sin((G+H*rt)*1.67+(x+W*rt)*.79),z=G+H*rt+K*vt*yt,k=x+W*rt+et*vt*yt;return bt(z,ve(z,k)+(I==="pave"?.044:.023),k)};for(let rt=0;rt<it;rt++){let vt=V/it/4.1;U(I,lt(rt/it,-L/2),lt(rt/it,L/2),lt((rt+1)/it,L/2),lt((rt+1)/it,-L/2),[0,rt*vt,L/4.4,(rt+1)*vt])}}}function $(F,L,I,E,G,x="tile",g=!0){let N=L/2,H=I/2,W=(V,it,K)=>{let et=.29*Math.pow(Math.min(1,Math.abs(V/N)),5.4);return F(V,E+G*Math.pow(1-it,1.37)+et*(.46+.89*it*it),K*it*H)};for(let V of[-1,1]){for(let K=0;K<8;K++)for(let et=0;et<12;et++){let lt=-N+L*et/12,rt=-N+L*(et+1)/12;U(x,W(lt,K/8,V),W(rt,K/8,V),W(rt,(K+1)/8,V),W(lt,(K+1)/8,V),[lt/2.2,K*I/(8*3.5),rt/2.2,(K+1)*I/(8*3.5)])}for(let K=0;K<12;K++){let et=W(-N+L*K/12,1,V),lt=W(-N+L*(K+1)/12,1,V);R("beam",et,lt,.16,.19)}if(g){for(let K=0;K<Math.floor(L/.28);K++){let et=-N+.12+K*.28,lt=W(et,.94,V),rt=W(et,1,V);if(rt.z+=V*.025,lt.y+=.024,rt.y+=.02,R(x,lt,rt,.074,.074,mg),K%2===0){let vt=W(et,1,V);R("timber",vt.clone().add(bt(0,-.1,0)),W(et,.82,V).add(bt(0,-.23,0)),.084,.092)}}for(let K of[-N,N])for(let et=0;et<8;et++)R("beam",W(K,et/8,V),W(K,(et+1)/8,V),.14,.11)}}for(let V=0;V<12;V++){let it=W(-N+L*V/12,0,1),K=W(-N+L*(V+1)/12,0,1);it.y+=.073,K.y+=.073,R(x,it,K,.175,.155,Le)}for(let V of[-1,1]){let it=W(V*N,0,1),K=W(V*N,0,1);K.x+=V*.21,K.y+=.23,R(x,it,K,.13,.13,Le)}}function _t(F,L,I,E,G,x,g){let N=(H,W,V,it,K,et,lt)=>O(F,L,H,W,V,it,K,et,lt);N("black",I,E,G,x,g,.075);for(let H of[-1,1])N("oldwood",I+H*x/2,E,G+.042,.095,g+.1,.1),N("oldwood",I,E+H*g/2,G+.042,x,.09,.1);for(let H=1;H<7;H++)N("timber",I-x/2+H*x/7,E,G+.051,.041,g,.058);for(let H=1;H<5;H++)N("timber",I,E-g/2+H*g/5,G+.049,x,.036,.058)}function gt(F,L,I,E=.5,G="ceramic"){A(ir,G,bt(F,L+E*.24,I),bt(E*.33,E*.47,E*.33),n()*6),A(Le,G,bt(F,L+E*.49,I),bt(E*.24,E*.13,E*.24),0),A(Le,"black",bt(F,L+E*.562,I),bt(E*.15,.012,E*.15),0)}function Mt(F,L,I,E=.73){C("oldwood",F,L+E*.38,I,E,E*.76,E*.77);for(let G of[-1,1])C("beam",F+G*E*.31,L+E*.4,I,E*.1,E*.82,E*.81);C("timber",F,L+E*.78,I,E*1.02,.057,E*.79)}function Bt(F,L,I,E=.74){A(ir,"straw",bt(F,L+E*.26,I),bt(E*.43,E*.52,E*.43),Math.PI),A(Le,"oldwood",bt(F,L+E*.56,I),bt(E*.45,.053,E*.45)),A(Le,"straw",bt(F,L+E*.583,I),bt(E*.37,.039,E*.37))}function Pt(F,L,I,E,G,x){let H=(W,V)=>F((W/10-.5)*I,G-.54*(V/5)-.22*Math.sin(Math.PI*V/5)+.035*Math.sin(W*1.8)*V/5,x+V/5*E);for(let W=0;W<5;W++)for(let V=0;V<10;V++)U("awning",H(V,W),H(V+1,W),H(V+1,W+1),H(V,W+1),[V/5,W/4,(V+1)/5,(W+1)/4]);for(let W=0;W<10;W++){let V=H(W,5),it=H(W+1,5);U("awning",V,it,it.clone().add(bt(0,-.18,0)),V.clone().add(bt(0,-.18,0)))}for(let W of[-.47,.47]){let V=F(W*I,0,x+E-.1),it=F(W*I,G-.51,x+E-.1);R("oldwood",V,it,.046,.046,Le),R("timber",it,F(W*I,G,x-.1),.047,.047,Le),D(F,W*I,x+E-.1,.09,.09)}R("timber",H(0,5),H(10,5),.044,.044,Le)}function Ft(F,L,I,E,{theta:G=0,floors:x=1,kind:g="home",label:N,simple:H=!1,roofKind:W="tile"}={}){let V=ve(F,L),it=S(F,V,L,G),K=x===1?3.31:6.13,et=E/2,lt=-E/2,rt=["store","tavern","market"].includes(g),vt=!H,yt=(k,st,P,j,Y,pt,dt,at)=>O(it,G,k,st,P,j,Y,pt,dt,at);if(yt("stone",0,.045,0,I+.05,.24,E+.1),!rt)yt("plaster",0,K/2,0,I,K,E),D(it,0,0,I,E);else{yt("plaster",0,K/2,lt,I,K,.23),D(it,0,lt,I,.28);for(let P of[-1,1])yt("plaster",P*I/2,K/2,0,.2,K,E),D(it,P*I/2,0,.24,E);yt("beam",0,K-.17,0,I,.32,E);for(let P=-E/2+.12;P<E/2;P+=.28)yt("oldwood",0,.181,P,I-.25,.08,.24);x===2&&yt("beam",0,3.2,0,I,.2,E);let k=it(0,V+.23,et),st=G===0||G===Math.PI;_.push({x0:k.x-(st?I:E)/2,x1:k.x+(st?I:E)/2,z0:L-(st?E:I)/2,z1:L+(st?E:I)/2,y:V+.225})}let z=Math.max(2,Math.round(I/2.1));for(let k=0;k<=z;k++){let st=(k/z-.5)*I;for(let P of[et+.024,lt-.025])if(yt(x===2?"lacquer":"timber",st,K/2,P,.17,K,.175),yt("stone",st,.14,P,.28,.21,.27),vt){let j=k===0?1:k===z?-1:1;R("timber",it(st,K-.7,P),it(st+j*.48,K-.15,P),.11,.12)}}for(let k of[.75,3.02,K-.2])(k!==.75||!rt)&&yt("timber",0,k,et+.075,I+.19,.14,.14);if(vt){for(let k of[-1,1]){yt("timber",k*(I/2+.035),K-.24,0,.17,.19,E+.15);for(let Y=1;Y<Math.ceil(E/2);Y++)yt("timber",k*(I/2+.025),K/2,-E/2+Y*2,.12,K,.11);let st=it(k*(I/2-.01),K-.15,-E/2+.08),P=it(k*(I/2-.01),K-.15,E/2-.08),j=it(k*(I/2-.01),K+Math.min(I,E)*.3,0);U("plaster",st,P,j,j)}if(!rt){yt("beam",0,1.01,et+.056,1.23,2.02,.11);for(let k=0;k<6;k++)yt("oldwood",.15*(k-2.5),.98,et+.112,.136,1.91,.035);for(let k of[-1,1])_t(it,G,k*I*.31,1.94,et+.08,I*.22,1.03)}if(x===2)if(g==="tavern"){yt("oldwood",0,3.34,et+.53,I,.17,1.45);for(let k=0;k<z;k++){let st=(k/z-.5)*I;yt("lacquer",st,3.78,et+1.19,.12,.9,.12),yt("oldwood",st+I/z*.5,3.96,et+1.2,I/z,.09,.091);for(let P=1;P<=5;P++)yt("oldwood",st+P*I/z/6,3.67,et+1.2,.061,.58,.06)}}else for(let k=0;k<z;k++)_t(it,G,((k+.5)/z-.5)*I,4.62,et+.081,I/z*.67,1.48)}if(x===2&&g!=="tavern"){let k=(st,P,j)=>it(-st,P,-j);for(let st=0;st<z;st++)_t(k,G+Math.PI,((st+.5)/z-.5)*I,4.52,et+.075,I/z*.65,1.42);yt("beam",0,3.16,lt-.12,I+.14,.11,.14)}if($(it,I+1.52,E+1.7,K+.02,Math.min(I,E)*.31,W,vt),x===2&&vt&&$(it,I+.9,E+2.4,3.09,.68,"tileDark",!0),rt){if(g==="tavern"){for(let j of[-1,1])for(let Y=0;Y<4;Y++){let pt=et-1.2-Y*2.3;yt("timber",j*(I/2-.13),1.65,pt,.14,3.3,.16)}for(let j=0;j<7;j++)yt("timber",0,2.98,et-.21-j*E/7,I,.2,.14);yt("oldwood",0,1.09,lt+.44,I*.55,.142,.47),yt("timber",0,.67,lt+.4,I*.56,.78,.5);for(let j=0;j<8;j++){let Y=it((j/7-.5)*I*.52,1.17,lt+.37);gt(Y.x,Y.y,Y.z,.67+j%3*.095,"paleCeramic")}let k=it(-.89,2.91,lt+.18),st=it(.93,2.91,lt+.18);U("awning",k,st,it(.93,1.77,lt+.17),it(-.89,1.77,lt+.17)),J(it,G,"\u9152",0,2.37,lt+.25,.62,.59);for(let j of[-4.85,4.85]){let Y=it(j,2.35,et-2);A(sr,"rust",Y,bt(.19,.24,.19),0),R("iron",Y.clone().add(bt(0,.17,0)),Y.clone().add(bt(0,.76,0)),.018,.018,Le)}let P=[[-3.8,.25],[3.5,.15],[-2.9,-3.4],[2.9,-3.4]];for(let[j,Y]of P){yt("oldwood",j,.85,Y,1.63,.11,1.19);for(let dt of[-.63,.63])for(let at of[-.44,.44])yt("timber",j+dt,.49,Y+at,.11,.73,.11);yt("timber",j,.47,Y+.83,1.48,.1,.31),yt("timber",j,.47,Y-.83,1.48,.1,.31),D(it,j,Y,1.68,1.23);for(let dt of[-.54,.53]){let at=it(j+dt,.92,Y+.16);gt(at.x,at.y,at.z,.27,"paleCeramic")}let pt=it(j,.9,Y-.3);gt(pt.x,pt.y,pt.z,.59,"paleCeramic")}}else{yt("oldwood",0,1.09,-.85,I-.7,.16,.98),yt("timber",0,.55,-.85,I-.81,.95,.82),D(it,0,-.85,I-.59,.99);for(let k=0;k<2;k++){let st=(k-.5)*I*.82;yt("oldwood",st,1.61,lt+.5,I*.35,.1,.55),yt("oldwood",st,2.16,lt+.49,I*.35,.09,.56)}for(let k=0;k<8;k++){let st=it((k/7-.5)*(I-1),1.18,-.78+n()*.34);g==="market"?Bt(st.x,st.y,st.z,.4+n()*.43):gt(st.x,st.y,st.z,.43+n()*.7,k%3?"ceramic":"paleCeramic")}for(let k=0;k<6;k++)yt(k%2?"linen":"sage",I*.28,.32+k*.16,et-.7,.99,.145,.64);q(it,G,Math.min(I*.23,1.45),-1.73,.14,et-.46,g==="market"?"fruit":"pot")}if(g!=="tavern")Pt(it,G,I+.4,1.95,2.94,et);else for(let k of[-3.9,3.85]){let st=it(k,2.54,et+.78);A(sr,"rust",st,bt(.24,.31,.24),0),R("iron",st.clone().add(bt(0,.26,0)),st.clone().add(bt(0,.55,0)),.018,.018,Le)}N&&(yt("beam",0,g==="tavern"?3.6:2.71,et+.2,2.05,.53,.11),J(it,G,N,0,g==="tavern"?3.6:2.71,et+.27,1.99,.49),J(it,G,N,I/2-.18,2.29,et+1.46,.49,1.16,!0))}}function Xt(F,L,I,E,G,x=!1){let g=x?Xe(L):ve(F,L),N=S(F,g,L,I),H=(it,K,et,lt,rt,vt,yt)=>O(N,I,it,K,et,lt,rt,vt,yt);H("timber",0,.83,0,E,.12,1.06);for(let it of[-1,1])H("beam",it*E*.41,.4,.22,.106,.82,.11),H("beam",it*E*.41,.4,-.24,.106,.82,.11),H("oldwood",it*E*.5,1.13,-.58,.1,2.28,.1);Pt(N,I,E+.48,2.06,2.46,-.63);let W=Math.floor(E/.43);for(let it=0;it<W;it++){let K=N((it/(W-1)-.5)*E*.82,.93,n()*.4-.18);if(G==="fruit"){Bt(K.x,K.y,K.z,.52);for(let et=0;et<5;et++)A(sr,et%2?"green":"rust",K.clone().add(bt((n()-.5)*.25,.35,(n()-.5)*.24)),bt(.082,.071,.073),n()*6)}else if(G==="cloth"){let et=N((it/(W-1)-.5)*E*.82,.97,.06);C(["linen","sage","rust"][it%3],et.x,et.y,et.z,.29,.16,.63,I)}else G==="bread"?(A(ir,"straw",K.clone(),bt(.19,.07,.16),I),A(ir,"oldwood",K.clone().add(bt(.033,.074,.016)),bt(.139,.067,.124),I,1.15)):gt(K.x,K.y,K.z,.46+n()*.44,it%2?"ceramic":"paleCeramic")}let V={fruit:"\u679C\u5B50",cloth:"\u5E03\u5E1B",pot:"\u8336\u6C34",bread:"\u80E1\u9905"}[G];(x||G==="bread")&&J(N,I,V,-E*.3,1.54,.02,.45,.85,!0),q(N,I,0,-.91,.84,x?1.58:1.94,G),D(N,0,0,E,1.08)}function ut(F,L,I,E){for(let x=0;x<I/.27;x++)C("oldwood",F-I/2+x*.27,.44-.08,L,.247,.16,E);for(let x=0;x<=I/2.1;x++){let g=F-I/2+x*2.1;for(let N of[-1,1])C("beam",g,-.5,L+N*(E*.43),.28,1.92,.28),C("oldwood",g,.66,L+N*E*.43,.31,.58,.31)}_.push({x0:F-I/2,x1:F+I/2,z0:L-E/2,z1:L+E/2,y:.44});for(let x=0;x<12;x++){let g=F-I*.41+x*(I*.82/11);x%3===0?Mt(g,.44,L-E*.3,.7+n()*.45):Bt(g,.44,L-E*.3,.72+n()*.48)}}function ft(){let F=We(Ce),L=F-cs,I=F+cs,E=144;for(let G=0;G<E;G++){let x=Zt.lerp(L,I,G/E),g=Zt.lerp(L,I,(G+1)/E);for(let N=0;N<5;N++){let H=ls/5,W=Ce-ls/2+H*(N+.5);C("oldwood",W,Xe((x+g)/2)-.103,(x+g)/2,H-.014,.178,g-x-.009,0,.74+n()*.28)}}for(let G of[-4.9,-3.35,-1.65,0,1.65,3.35,4.9]){let x=Ce+G;for(let g=0;g<17;g++){let N=g/17,H=(g+1)/17,W=Zt.lerp(L+.43,I-.43,N),V=Zt.lerp(L+.43,I-.43,H);R("beam",bt(x,Xe(W)-.76,W),bt(x,Xe(V)-.76,V),.4,.47);let it=g%2===0?.99:.73;R("timber",bt(x+.22,Xe(W)-it-.18,W),bt(x+.22,Xe(V)-.35,V),.32,.37)}for(let g=0;g<12;g++){let N=Zt.lerp(L+.75,I-.75,g/12),H=Zt.lerp(L+.75,I-.75,(g+1)/12);R("timber",bt(x-.14,Xe(N)-.94,N),bt(x-.14,Xe(H)-.94,H),.35,.37)}}for(let G=0;G<=22;G++){let x=Zt.lerp(L,I,G/22),g=Zt.lerp(L,I,(G+1)/22),N=Xe(x);R("beam",bt(Ce-5.65,N-.57,x),bt(Ce+5.65,N-.57,x),.24,.34);for(let H of[-1,1]){let W=Ce+H*5.18;if(C("timber",W,N+.49,x,.15,1.15,.2),A(ir,"beam",bt(W,N+1.12,x),bt(.131,.18,.13)),G!==22){for(let V of[.37,.94])R("oldwood",bt(W,N+V,x),bt(W,Xe(g)+V,g),.105,.12);R("timber",bt(W,N+.14,x),bt(W,Xe(g)+.37,g),.061,.065)}}}for(let G of[-1,1]){let x=F+G*(cs-.12);C("stone",Ce,-.53,x,ls+1.2,1.22,1.48),C("stone",Ce,.04,x+G*.82,ls+.66,.15,1)}J(S(Ce,0,F,Math.PI/2),Math.PI/2,"\u8679\u6A4B",0,Xe(F)-.34,5.38,1.6,.43)}function Ct(){let F=-Math.PI/2,E=S(106.7,0,-25,F),G=8.75,x=8.5,g=3.98,N=2.95,H=et=>N+Math.sqrt(Math.max(0,g*g-et*et)),W=G-.11;for(let[et,lt]of[[-49,-g],[g,13.6]]){O(E,F,"wall",(et+lt)/2,G/2,0,lt-et,G,x),O(E,F,"brick",(et+lt)/2,.46,0,lt-et,.95,x+.14),O(E,F,"brick",(et+lt)/2,W,0,lt-et,.29,x+.38),D(E,(et+lt)/2,0,lt-et,x);for(let rt=et+.3;rt<lt-.25;rt+=1.25)for(let vt of[-1,1])O(E,F,"brick",rt,G+.32,vt*(x/2-.18),.72,.77,.42);for(let rt=et+.4;rt<lt-.35;rt+=3.45)for(let vt of[-1,1])O(E,F,"stone",rt,2.15,vt*x/2,.22,2.6,.17,.82)}let V=x/2,it=28;for(let et=0;et<it;et++){let lt=-g+et/it*g*2,rt=-g+(et+1)/it*g*2;for(let vt of[-1,1]){let yt=vt*V;U("brick",E(lt,H(lt),yt),E(rt,H(rt),yt),E(rt,G,yt),E(lt,G,yt),[lt/3,0,rt/3,1.7])}U("brick",E(lt,H(lt),V),E(rt,H(rt),V),E(rt,H(rt),-V),E(lt,H(lt),-V),[lt/3,0,rt/3,2.6],[.77,.73,.66])}for(let et=0;et<25;et++){let lt=Math.PI*et/25+.01,rt=Math.PI*(et+1)/25-.009;for(let vt of[-1,1]){let yt=(z,k)=>E(Math.cos(z)*k,N+Math.sin(z)*k,vt*(V+.095));U("stone",yt(lt,g+.028),yt(rt,g+.028),yt(rt,g+.6),yt(lt,g+.6),[0,0,.55,.55],[.95,.91,.82])}}for(let et of[-1,1])for(let lt=0;lt<5;lt++)O(E,F,"stone",et*(g+.32),lt*.57+.3,V+.1,.64,.55,.24);O(E,F,"stone",0,G+.03,0,14.5,.31,9.4),O(E,F,"plaster",0,G+1.6,0,11.8,3.11,5.6);for(let et of[-5.8,-3.87,-1.93,0,1.93,3.87,5.8]){for(let lt of[-2.86,2.86])O(E,F,"lacquer",et,G+1.66,lt,.25,3.2,.29);Math.abs(et)<5.7&&_t(E,F,et,G+1.7,2.92,1.08,1.29)}$(E,15.8,10.5,G+3.3,2.65,"tileDark"),$(E,13.3,8.9,G+1.1,.95,"tile"),J(E,F,"\u6C74\u4EAC",0,7.86,V+.13,1.95,.54);for(let et of[-1,1]){m.push({position:E(et*7.75,G,V-.6),yaw:F-et*.14}),m.push({position:E(et*7.75,G,-V+.6),yaw:F+Math.PI+et*.09});let lt=E(et*4.9,0,V+.94);lt.y=ve(lt.x,lt.z),m.push({position:lt,yaw:F-et*.25})}mt([[94,-25],[119,-25]],8.7,"pave")}function Ot(F,L,I,E=!1){let G=ve(F,L),x=(E?7:6.6)*I,g=n()*Math.PI*2,N=bt(Math.cos(g)*I*.75,0,Math.sin(g)*I*.75),H=bt(F,G-.16,L),W=bt(F,-.12+G+x*.47,L).addScaledVector(N,.24),V=bt(F,G+x*.91,L).add(N),it=(E?.34:.25)*I;R("bark",H,W,it*1.15,it,Le),R("bark",W,V,it*.72,it*.64,Le);let et=(E?[8622155,7373125,10003034,6058555,8033109]:[6452552,8227397,8689236,5598014,9740887]).map(rt=>new wt(rt).toArray()),lt=E?21:18;for(let rt=0;rt<lt;rt++){let vt=rt*2.399963+n()*.42,yt=bt(Math.cos(vt),0,Math.sin(vt)),z=W.clone().lerp(V,.19+n()*.67),k=(1.18+n()*2.6)*I,st=z.clone().addScaledVector(yt,k).add(bt(0,(.66+n()*1.67)*I,0)),P=z.clone().lerp(st,.51).add(bt(0,.43*I,0));rt<16&&(R("bark",z,P,it*.24,it*.24,Le),R("bark",P,st,it*.12,it*.12,Le));for(let pt=0;pt<5;pt++){let dt=P.clone().lerp(st,.28+pt*.19).addScaledVector(yt,(n()-.25)*I*.64);dt.y+=(n()-.53)*(E?1.48:1)*I;let at=vt+pt*2.11,At=(E?1.12:1.27)*(.67+n()*.39)*I,kt=bt(Math.sin(at)*At,(n()-.5)*At*.27,Math.cos(at)*At),$t=bt(Math.cos(at)*At*.22,At*(E?1.32:.8),-Math.sin(at)*At*.22);U("bough",dt.clone().sub(kt).sub($t),dt.clone().add(kt).sub($t),dt.clone().add(kt).add($t),dt.clone().sub(kt).add($t))}let j=E?33:35,Y=E?1.1:1.58;for(let pt=0;pt<j;pt++){let dt=.35+n()*.73,at=P.clone().lerp(st,dt).addScaledVector(yt,(n()-.21)*Y*I),At=E?.7:1.3;at.x+=(n()-.5)*1.55*Y*I,at.z+=(n()-.5)*1.55*Y*I,at.y+=(n()-.54)*At*I,E&&(at.y-=(.08+Math.pow(n(),.52)*2.37)*dt*I);let kt=(.13+n()*.28)*I,$t=(E?.052:.133)*I*(.58+n()),Kt=n()*6.28,Qe=bt(Math.cos(Kt)*$t,(n()-.5)*$t*.9,Math.sin(Kt)*$t),qe=bt(Math.sin(Kt)*kt*.66,-kt*(.72+n()*.35),-Math.cos(Kt)*kt*.66);U("foliage",at.clone().addScaledVector(qe,-.49),at.clone().add(Qe),at.clone().addScaledVector(qe,.6),at.clone().addScaledVector(Qe,-1),[0,0,1,1],et[Math.floor(n()*et.length)])}}}function ot(F,L,I,E){let G=[7307575,10135131,9214020,11448692].map(x=>new wt(x).toArray());for(let x=0;x<Math.floor(E/.78);x++){let g=L+x*.78;for(let N=F;N<F+I;N+=.26+n()*.12){let H=N+n()*.13,W=g+n()*.33,V=ve(H,W);for(let it=0;it<3;it++){let K=.28+n()*.49,et=(n()-.5)*.29,lt=bt(H+(n()-.5)*.14,V,W+(n()-.5)*.11);U("foliage",lt,lt.clone().add(bt(.034,0,0)),lt.clone().add(bt(et,K,-.04)),lt.clone().add(bt(et+.036,K,-.041)),[0,0,1,1],G[Math.floor(n()*G.length)])}}}}Z(),mt([[-162,34],[-142,28],[-126,25],[-108,22],[-88,19],[-73,18],[-56,18],[-49,19],[-36,19],[-20,20],[-10,22],[10,23],[39,24],[64,26]],4.6),mt([[-44,-22],[-21,-23],[-4,-23],[16,-23],[32,-24],[57,-24],[79,-24],[103,-25],[128,-25],[145,-26],[174,-26]],7.1,"path"),mt([[119,-25],[129,-28],[129,-45],[130,-64],[132,-72]],4.4,"pave"),mt([[112,-43],[129,-45],[153,-46],[171,-45]],3.8,"soil"),mt([[142,-26],[143,-39],[146,-65]],4,"soil"),mt([[-6,25],[-8,42],[-18,67]],3.7,"soil"),ot(-152,32,31,16),ot(-113,29,25,13),ot(-156,54,27,14),ot(-74,43,18,12),ot(46,40,26,12),Ft(-151,26,6.8,5.6,{roofKind:"straw"}),Ft(-137,36,7.2,6.2,{theta:Math.PI,roofKind:"straw"}),Ft(-112,13.7,6.2,5.6,{theta:Math.PI,roofKind:"tileDark"}),Ft(-103,25,8,5.3,{theta:Math.PI,roofKind:"straw"}),Ft(-86,33,6.6,5.6,{theta:Math.PI}),Ft(-64,28.7,8.5,6.7,{theta:Math.PI,kind:"market",label:"\u8336\u68DA"}),Ft(-46,27.3,9.6,7.9,{theta:Math.PI,kind:"store",label:"\u8CA8\u68E7"}),Ft(-33,26.7,8.4,6.3,{theta:Math.PI,kind:"market"}),Ft(-22,28.5,7.8,7.1,{theta:Math.PI}),ut(-38,14.65,14.4,5.45);let Et=-36.5,zt=7.22,B=12.33,Gt=F=>Zt.lerp(.045,.45,Zt.clamp((F-zt)/(B-zt),0,1));for(let F=0;F<19;F++){let L=zt+(F+.5)*(B-zt)/19;C("oldwood",Et,Gt(L)-.059,L,1.57,.115,.249)}for(let F of[-.67,.67])R("beam",bt(Et+F,.02,zt),bt(Et+F,.48,B),.105,.126);_.push({x0:-41,x1:-32.8,z0:5.65,z1:7.45,y:.044}),ut(-26,14.65,8.1,4.8),ut(15,16.2,12.6,5.35),ut(47,-13.2,13.5,4.5),ft();for(let[F,L,I]of[[1,-7.2,"bread"],[-1,-10.3,"fruit"],[1,8.7,"pot"],[-1,12.7,"cloth"]])Xt(Ce+F*3.91,L,-F*Math.PI/2,1.68,I,!0);for(let F=0;F<390;F++){let L=-151+n()*319,E=F%4!==0?-24+(n()>.5?1:-1)*(2.6+n()*.95):23+(n()>.5?1:-1)*(1.4+n()*1);if(Math.abs(L-106.7)<7||Math.abs(L+4)<8)continue;let G=.016+n()*.087;A(sr,"stone",bt(L,ve(L,E)+.022,E),bt(G,.048,G*.65),n()*6,.9)}for(let[F,L,I,E,G,x]of[[5,-32.2,7.1,7.4,"market","\u8336\u8086"],[14.4,-34,8.2,9,"store","\u96DC\u8CA8"],[24.6,-34.1,9.8,10,"market","\u9999\u6599"],[36.8,-34.5,8.8,9.4,"store","\u7DA2\u5E03"],[48,-34.1,8.3,8.6,"store","\u74F7\u5668"],[58.4,-35.7,8.2,9.4,"market","\u7CE7\u884C"],[69,-36.2,11.8,12.35,"tavern","\u9152\u6A13"],[82.5,-35.7,9,10.4,"store","\u8336\u574A"],[94,-35.3,8.65,8.6,"market","\u7AF9\u5668"]])Ft(F,L,I,E,{floors:2,kind:G,label:x});for(let[F,L,I,E,G,x]of[[-20,-33.6,8.5,7.4,"home"],[-10,-34.6,7.9,7.5,"market","\u8336"],[9,29.5,8.2,7,"market","\u8336"],[20,34,10.2,8.5,"tavern","\u9152"],[31,31.7,7.1,7.4,"store","\u7C73"],[45,33,7.4,7,"home"],[14,-17,6.45,4.85,"store","\u8336"],[32.5,-16.6,7.6,4.25,"market"],[62,-16.35,8.1,5.6,"market","\u679C\u5B50"],[82,-16.9,9.4,5.2,"store","\u767E\u8CA8"]])Ft(F,L,I,E,{theta:L>0||L>=-18?Math.PI:0,floors:G==="home"?1:2,kind:G,label:x});for(let[F,L,I,E,G]of[[-19,18.9,0,3.2,"fruit"],[-12,19.7,0,3.6,"cloth"],[3,24.7,Math.PI,3.6,"fruit"],[17,19.8,0,3.8,"pot"],[3,-18.7,Math.PI,3.8,"pot"],[20,-19.2,Math.PI,4,"fruit"],[25.6,-20.1,Math.PI,3.4,"fruit"],[38.6,-19.4,Math.PI,4.4,"cloth"],[45,-20.4,Math.PI,3.9,"pot"],[53.9,-19.7,Math.PI,4.2,"fruit"],[73.5,-20,Math.PI,3.7,"pot"],[89.1,-19.9,Math.PI,3.2,"cloth"],[123,-18.9,Math.PI,4.2,"pot"],[136,-20.1,Math.PI,4,"fruit"],[31.1,-27.6,0,2.3,"bread"],[42,-27.5,0,2.2,"fruit"],[53.3,-28.1,0,2,"cloth"]])Xt(F,L,I,E,G);Ct();for(let[F,L,I,E,G,x]of[[116.2,-34.8,6.8,8.4,"store","\u98DF\u5E97"],[122,-36,5,7.4,"home"],[136.8,-34.7,7.1,8.7,"home"],[149.9,-34.8,7.6,8,"store","\u5E03"],[160.4,-35,8.5,8.5,"home"],[172,-34.3,10,8,"home"],[119.9,-50.8,9,7.1,"home"],[137.3,-51.4,9,7.5,"home"],[120.3,-61,9.4,8.9,"home"],[138.1,-63,10,9,"home"],[153.7,-55.4,8.6,9.3,"home"],[167.8,-54.5,10.7,8.1,"home"]])Ft(F,L,I,E,{floors:L<-47?1:2,kind:G,label:x});for(let F of[10,24,42,57,74,90,116,128,151,169])for(let L of[-57,-71])F>120&&F<147||Ft(F+(n()-.5)*3,L+(n()-.5)*2,6.6+n()*3.9,5.3+n()*3.7,{floors:n()>.58?2:1,simple:!0,theta:n()>.5?Math.PI:0});for(let[F,L,I,E]of[[-242,36,8.7,6.3],[-211,23,8.1,5.4],[-187,23,7.8,7.2],[185,-26,8.7,6.4],[196,-28,8,5.8],[210,-30,10.3,6.6],[228,-32,8,6.5],[239,-37,7.1,7.1]])Ft(F,L,I,E,{floors:F<0?1:2,simple:!0,theta:L>0?Math.PI:0});for(let[F,L,I]of[[-203,20,1.04],[-227,23,1.19],[-244,26,1.05],[170,21,1.12],[187,24,1.08],[211,25,1.24],[232,-21,.91],[244,23,.95]])Ot(F,L,I,!0);let Dt=S(154,.19,-66,0);for(let F=0;F<3;F++){let L=7.35-F*1.38;O(Dt,0,"plaster",0,2.63+F*3.5,0,L-.31,3,L*.78);for(let I of[-1,1])O(Dt,0,"lacquer",I*(L/2-.32),2.63+F*3.5,L*.38,.23,3.05,.23),_t(Dt,0,I*L*.214,2.88+F*3.5,L*.39,L*.28,.94);$(Dt,L+1.91,L*.84+1.34,3.97+F*3.5,1.28,"tileDark",!0)}for(let F of[-78,-65,-48,-38,-23])Ft(F,-32-10*n(),6.3+n()*3,5.6+n()*3,{simple:!0,floors:n()<.19?2:1});for(let[F,L,I,E]of[[-139,19,1.17,1],[-119,18,1.2,1],[-117,31,.97,0],[-98,19,.99,1],[-82,13,1.16,1],[-68,14.7,1.14,1],[-56,24,1,1],[-42,20.6,.96,1],[-22,18.3,.96,1],[-10,27,1.22,1],[10,20.4,.99,1],[28,29,.82,1],[48,20.2,1.04,1],[59,19.9,1.25,1],[70,26,1,1],[-39,-22,1.11,1],[-16,-24,1.12,1],[7,-15.5,.86,1],[34,-28.8,.93,0],[55,-15.5,1.01,1],[76,-15.8,.85,1],[93,-15.1,1.12,1],[112,-17.2,.91,1],[126,-53,1.12,0],[132,-48,.99,1],[128,-66,1.02,1],[137,-41,.83,0]])Ot(F,L,I,E===1);for(let F=0;F<74;F++){let L=-169+n()*350,I=(n()>.54?-1:1)*(40+n()*38);L>94&&L<151&&I<0||Ot(L,I,.63+n()*.54,n()>.67)}for(let F=0;F<1900;F++){let L=-163+n()*337,I=n()>.5?1:-1,G=We(L)+I*ni(L)+I*(n()*1.65+.05);if(L>-11&&L<4||L>-46&&L<-20&&I===1)continue;let x=ve(L,G),g=[.29,.34,.105],N=.17+n()*.38;U("foliage",bt(L-.026,x,G),bt(L+.039,x,G),bt(L+.13*n(),x+N,G+.06),bt(L-.018,x+N,G+.06),[0,0,1,1],g)}for(let[F,L]of[[8,27],[21,28],[-31,21.5],[47,-31.5],[72,-32],[-74,19.3],[134,-42],[125,-56]])F===47||F===72||(Mt(F,ve(F,L),L,.83),Bt(F+.82,ve(F,L),L,.67),y(F,L,1.5,.75));for(let F=0;F<14;F++){let L=-146+F*2;C("timber",L,ve(L,30.7)+.43,30.7,.16,1.04,.19),F<13&&(R("oldwood",bt(L,.43,30.7),bt(L+2.1,.38,30.7),.085,.105),R("oldwood",bt(L,.7,30.7),bt(L+2.06,.69,30.7),.071,.084))}for(let[F,L]of[[124,-42],[133,-40],[128,-55]]){let I=S(F,ve(F,L),L,Math.PI/2);R("timber",I(-1.2,0,0),I(-1.2,2.3,0),.075,.075,Le),R("timber",I(1.2,0,0),I(1.2,2.2,0),.075,.075,Le),R("timber",I(-1.2,2.25,0),I(1.2,2.16,0),.032,.034,Le);for(let E=0;E<4;E++){let G=-.94+E*.52,x=G+.44,g=2.21-E*.019;U("awning",I(G,g,0),I(x,g,0),I(x,g-.69-E*.06,.04),I(G,g-.64-E*.06,.14))}}for(let{geo:F,mat:L,entries:I}of u.values()){let E=new _i(F,s[L],I.length);for(let[G,[x,g]]of I.entries())E.setMatrixAt(G,x),E.setColorAt(G,M.setScalar(g));E.castShadow=L!=="soil"&&L!=="grass",E.receiveShadow=!0,E.computeBoundingSphere(),i.add(E)}for(let[F,{points:L,uv:I,colors:E}]of d){let G=new me;G.setAttribute("position",new ne(L,3)),G.setAttribute("uv",new ne(I,2)),G.setAttribute("color",new ne(E,3)),G.computeVertexNormals();let x=s[F].clone();x.side=xe,x.vertexColors=!0,(F==="foliage"||F==="awning"||F==="bough")&&(x.onBeforeCompile=s[F].onBeforeCompile);let g=new he(G,x);g.receiveShadow=!0,g.castShadow=!["soil","grass","stone","pave","path"].includes(F),i.add(g)}function Ut(F,L){if(F<nr.west||F>nr.east||L<nr.north||L>nr.south)return null;if(Math.abs(F-Ce)<ls/2-.14&&Math.abs(L-We(Ce))<=cs+.04)return Xe(L);if(Math.abs(F-Et)<.78&&L>=zt&&L<=B)return Gt(L);for(let I of _)if(F>=I.x0&&F<=I.x1&&L>=I.z0&&L<=I.z1)return I.y;return Math.abs(L-We(F))<ni(F)-.14?null:ve(F,L)}function xt(F,L,I=.3){return p.some(E=>F>E.x0-I&&F<E.x1+I&&L>E.z0-I&&L<E.z1+I)}return{materials:s,walkHeight:Ut,isObstacle:xt,obstacles:p,trades:v,gatePosts:m}}function wh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new me,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let _=0;_<p.count;++_)u.push(p.getX(_)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Th(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let v=0;v<o[h].length;++v)p.push(o[h][v][d]);let _=Th(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function Th(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new _e(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,p=h.count;d<p;d++)for(let _=0;_<e;_++){let v=h.getComponent(d,_);a.setComponent(d+u,_,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var ae=(i,t,e)=>new X(i,t,e),Tc=ae(0,1,0),yn=new wn(1,1,1),an=new Kn(1,12,8),Eh=new Kn(1,10,6,0,Math.PI*2,0,Math.PI*.57),Cn=new Ke(1,1,1,8),Ch=new Ke(.65,1,1,10),ta=new Ke(1,.72,1,10),wc=new ji(1,.083,6,19),gg=new Ke(.71,1,1,8),_g=new zs(1),ii=Math.PI*2;function Me(i,t,e,n,s,r,o=1,a=1,l=1){let c=new he(i,t);return c.position.set(n,s,r),c.scale.set(o,a,l),c.castShadow=c.receiveShadow=!0,e.add(c),c}function Mn(i,t,e,n,s,r=Cn){let o=n.clone().sub(e),a=e.clone().lerp(n,.5),l=Me(r,t,i,a.x,a.y,a.z,s,o.length(),s);return l.quaternion.setFromUnitVectors(Tc,o.normalize()),l}function Ai(i,t=[]){let e=new Map;for(let n of[...i.children]){if(!n.isMesh||t.includes(n))continue;n.updateMatrix();let s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();s.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(s),i.remove(n)}for(let[n,s]of e)Me(wh(s),n,i,0,0,0),s.forEach(r=>r.dispose())}function xg(i,t,e,n){let s=[];function o(u,d){let p=(u-.5)*i,_=Math.pow(.065+.935*Math.sin(Math.PI*u),.69),v=Math.sin(d*Math.PI),m=Math.cos(d*Math.PI);return[p,-.04+v*-.53+.26*Math.pow(Math.abs(u-.5)*2,4),m*t*.51*_*(.75+.25*Math.abs(m))]}for(let u=0;u<24;u++)for(let d=0;d<11;d++){let p=o(u/24,d/11),_=o((u+1)/24,d/11),v=o((u+1)/24,(d+1)/11),m=o(u/24,(d+1)/11);s.push(...p,..._,...v,...p,...v,...m)}let a=new ne(s,3),l=new Float32Array(a.count*2);for(let u=0;u<a.count;u++)l[u*2]=a.getY(u)*2.8,l[u*2+1]=a.getX(u)/3;let c=new me;c.setAttribute("position",a),c.setAttribute("uv",new _e(l,2)),c.computeVertexNormals();let h=Me(c,e,n,0,.66,0);for(let u of[-1,1])for(let d=0;d<22;d++){let p=d/22,_=(d+1)/22,[v,m,f]=o(p,u>0?0:1),[b,T,M]=o(_,u>0?0:1);Mn(n,e,ae(v,m+.75,f),ae(b,T+.75,M),.065)}return h}function vg(i,t,e){let n=[],s=t.timber.clone();s.color.setHex(10914923),s.side=xe;for(let r=0;r<9;r++){let o=new we,a=r%3===1?11.2:7.6+e()*2.6,l=r%3===1?3.5:2.25+e()*.58;xg(a,l,s,o);for(let m=0;m<Math.floor(a/.29);m++){let f=-a*.47+m*.29;if(f>a*.47)continue;let b=Math.pow(.08+.92*Math.sin(Math.PI*(f/a+.5)),.7);Me(yn,t.oldwood,o,f,.68,0,.27,.14,l*b*.96)}Me(yn,t.beam,o,-a*.45,.83,0,.28,.36,l*.36),Me(yn,t.beam,o,a*.45,.91,0,.31,.37,l*.38);for(let m of[-1,1])for(let f=-2;f<3;f++)Me(yn,t.oldwood,o,f*a*.15,.87,m*l*.44,.12,.55,.12),f<2&&Mn(o,t.oldwood,ae(f*a*.15,1.09,m*l*.44),ae((f+1)*a*.15,1.09,m*l*.44),.046);for(let m=0;m<12;m++){let f=a*(-.33+e()*.68),b=(e()-.5)*l*.61,T=m%3===0?t.oldwood:t.straw;Me(m%3?an:yn,T,o,f,.87+e()*.16,b,.27+e()*.31,.31+e()*.13,.33+e()*.31)}if(r%3!==1){let m=.41*a,f=l*.42,b=new Ke(f,f,m,16,1,!0,0,Math.PI);Me(b,t.straw,o,-.27,1.17,0).rotation.set(0,Math.PI/2,Math.PI/2);for(let M=0;M<6;M++){let A=Me(wc,t.oldwood,o,-m*.52+M*m/5,1.16,0,f*.99,f*.99,.57);A.rotation.y=Math.PI/2,A.geometry=new ji(1,.041,6,16,Math.PI)}}let c=new we;c.position.set(a*.16,.72,0),o.add(c);let h=r%3===1?6.2:4.6;if(Mn(c,t.beam,ae(0,0,0),ae(0,h,0),.08),r%2===0||r%3===1){let m=l*1.19,f=new mn(m,h*.65,12,14),b=f.attributes.position;for(let M=0;M<b.count;M++){let A=b.getX(M),C=b.getY(M),R=.4*Math.cos(A/m*Math.PI)*Math.cos(C/(h*.65)*Math.PI*.7);b.setZ(M,R+.045*Math.sin(C*8))}f.computeVertexNormals();let T=t.linen.clone();T.side=xe,Me(f,T,c,-.12,h*.6,.016).rotation.y=Math.PI/2;for(let M=0;M<7;M++){let A=h*(.268+M*.109);Mn(c,t.oldwood,ae(-.13,A,-m*.52),ae(-.13,A,m*.52),.031)}}Mn(c,t.beam,ae(0,h-.16,0),ae(0,h-.09,.64),.035);let u=new we;u.position.set(-a*.37,.92,-l*.38),o.add(u),Mn(u,t.oldwood,ae(.28,.77,.08),ae(-1.52,-.51,-1.77),.055),Me(yn,t.timber,u,-1.44,-.46,-1.67,.7,.075,.2).rotation.set(-.18,-.67,.36);let p=Me(yn,t.oldwood,o,-a*.5,.22,0,.58,1.25,.125);p.rotation.z=.23;let _=r>=7;_&&(c.rotation.z=-1.42),Ai(c),Ai(u),Ai(o,[p]),i.add(o);let v=yg(i,a,l);n.push({root:o,mast:c,oar:u,rudder:p,wake:v,length:a,docked:_,route:r%2===0?1:-1,lane:_?r===7?10.5:-10.9:(r%2===0?1:-1)*(2.48+e()*6.7),speed:.72+e()*.76,start:_?r===7?-37:46:-160+r*36+e()*11,phase:e()*ii})}return n}function yg(i,t,e){let n=new we,s=new me,r=[],o=[];for(let c of[-1,1])for(let h=0;h<14;h++){let u=h/14,d=(h+1)/14,p=(m,f)=>[-t*.38-m*t*1.19,0,c*(e*.2+e*1.31*m)+f],_=.03+.32*u,v=.03+.32*d;r.push(...p(u,-_),...p(d,-v),...p(u,_),...p(d,-v),...p(d,v),...p(u,_)),o.push(u,0,d,0,u,1,d,0,d,1,u,1)}s.setAttribute("position",new ne(r,3)),s.setAttribute("uv",new ne(o,2));let a={value:0},l=new Pe({side:xe,transparent:!0,depthWrite:!1,uniforms:{time:a},vertexShader:"varying vec2 waveUv; void main(){ waveUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec2 waveUv; uniform float time; void main(){ float d=sin(waveUv.y*3.14159)*pow(1.0-waveUv.x,1.45); float foam=.25+.75*pow(max(0.0,sin(69.0*waveUv.x-2.3*time)),2.0); gl_FragColor=vec4(.86,.87,.72,d*foam*.39); }"});return n.add(new he(s,l)),n.position.y=er+.015,n.userData.time=a,i.add(n),n}var Mg=[[[-148,22],[-129,24],[-109,22],[-82,19],[-72,18],[-86,20],[-110,24],[-131,26]],[[-47,18.4],[-36,16.5],[-30,15.6],[-27,17.9],[-34,19.3],[-44,20.1]],[[-42,19.8],[-27,20],[-14,22],[-6,22],[-6,9],[-6,-4],[-6,-20],[-2,-23],[11,-23],[25,-25],[28,-24],[21,-22],[6,-21],[-2,-22],[-2,-4],[-2,10],[-2,22],[-12,23],[-27,21.2]],[[4,-24.9],[16,-24.6],[31,-25.7],[47,-25],[60,-25],[75,-24.6],[92,-25.9],[108,-25.4],[129,-25],[143,-25],[155,-26],[142,-27],[127,-24],[105,-23],[89,-23],[69,-23],[48,-23],[26,-22],[12,-22]],[[29,-27],[44,-27.7],[46,-29.8],[46,-31.1],[48,-31.7],[51,-30.8],[52,-27.2],[61,-26],[69,-26],[78,-26],[58,-25.6],[45,-26],[35,-26]],[[118,-25],[128,-27],[129,-40],[130,-56],[129,-62],[131,-65],[131,-51],[130,-36],[131,-28],[145,-26],[152,-24],[135,-24]],[[7,23],[14,22.4],[24,22.5],[48,24.2],[59,26],[47,26],[25,25.2],[17,24.7],[8,24.6]]];function Ah(i){let t=[],e=0;for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=Math.hypot(r[0]-s[0],r[1]-s[1]);t.push({a:s,b:r,from:e,to:e+o,distance:o}),e+=o}return{length:e,segments:t}}function Sg(i,t){let e=t%i.length,n=i.segments.find(r=>e>=r.from&&e<r.to)??i.segments[0],s=(e-n.from)/n.distance;return[Zt.lerp(n.a[0],n.b[0],s),Zt.lerp(n.a[1],n.b[1],s),Math.atan2(n.b[0]-n.a[0],n.b[1]-n.a[1])]}function bg(i,t){let e=new wt(11232848),n=(o,a)=>({guard:!0,style:0,scale:.98+o%3*.018,shade:e,faces:new wt(t[o%t.length]),payload:0,phase:o*.37,...a}),s=i.gatePosts.map((o,a)=>n(a,{post:o,speed:0})),r=[[[27,-24.95],[33,-24.95],[43,-25.08],[59,-25.4],[76,-25.3],[89,-25.55],[99.7,-25.55],[100.3,-23.8],[86,-23.25],[69,-23.3],[55,-23.45],[37,-23.5],[27.4,-23.7]],[[111,-25.45],[121,-25.45],[128.8,-27.55],[129.2,-35.5],[129.4,-44.3],[130,-48.65],[131.1,-46.75],[131.25,-40],[131.1,-34],[132.15,-29.6],[133.25,-25.8],[131,-23.55],[120,-23.55],[111,-23.5]]];for(let[o,a]of r.entries()){let l=new Ki(a.map(([h,u])=>ae(h,0,u)),!0,"centripetal"),c=l.getLength();for(let h=0;h<4;h++)s.push(n(h,{patrol:{route:l,length:c,lead:(o===0?8.2:27.4)-Math.floor(h/2)*1.28,side:h%2===0?-.41:.41},walking:!0,speed:o===0?1.07:1.01}))}return s}function Tg(i,t,e,n,s,r,o,a){let l=Mg.map(Ah),c=[],h=s?[6,8,13,17,7,7,7]:[10,12,24,29,9,12,11],u=[10457715,12298628,8615014,7439720,13150590,11366240,6586246,11966849,9666179,12424029,6585699],d=[12094569,11962985,12950907,11502690,13278334],p=new Map;function _(ot,Et,zt){p.set(ot,{geometry:Et,material:zt,used:0})}let v=e.linen.clone();v.color.setHex(15985117);let m=new gn({color:16777215,roughness:.81});_("head",an,m),_("nose",an,m),_("neck",Cn,m),_("ears",an,m),_("eyes",an,e.black),_("hand",an,m),_("hat",Eh,e.black),_("hair",an,e.black),_("feet",an,e.beam),_("hem",Ch,v),_("top",ta,v),_("arms",gg,v),_("calves",Cn,v),_("collar",Cn,e.paleCeramic),_("belt",Cn,e.beam),_("pole",Cn,e.oldwood),_("parcel",an,e.straw),_("basket",ta,e.straw),_("rope",Cn,e.oldwood);let f=new gn({color:7829871,roughness:.77,metalness:.26});_("helmet",Eh,f),_("helmetRim",Cn,f),_("chinGuard",yn,f),_("armouredCoat",ta,f),_("armourBand",Cn,f),_("pauldron",an,f),_("spearHead",_g,f);for(let ot=0;ot<l.length;ot++)for(let Et=0;Et<h[ot];Et++){let zt=.86+n()*.21;Et%7===0&&ot>=2?c.push({route:l[ot],started:l[ot].length*(Et+.25)/h[ot],speed:.72+n()*.17,walking:!0,style:Et%3,scale:.92+n()*.13,shade:new wt(u[Math.floor(n()*u.length)]),faces:new wt(d[Math.floor(n()*d.length)]),p:ot,payload:2,phase:n()*ii}):c.push({route:l[ot],started:l[ot].length*(Et+n()*.9)/h[ot],speed:.56+n()*.69,walking:!0,style:Et%3,scale:zt,shade:new wt(u[Math.floor(n()*u.length)]),faces:new wt(d[Math.floor(n()*d.length)]),p:ot,payload:Et%4===0?1:0,phase:n()*ii})}let b=Ah([[-36.52,7.29],[-36.52,12.36],[-34.9,15.1],[-32.5,18.7],[-32.15,18.44],[-35.3,15.2],[-36.52,12.6],[-36.52,9.4]]);for(let ot=0;ot<2;ot++)c.push({route:b,started:b.length*(.19+ot*.49),speed:.7,walking:!0,delivery:!0,style:ot,scale:.94+ot*.044,shade:new wt(u[1+ot*3]),faces:new wt(d[ot]),payload:0,phase:ot*3.2});let T=[[-126,23.3],[-36,14.2],[-30,19.2],[60,-23.2],[97,-22.4],[113,-22.3],[130.4,-48],[125,-42.5],[65.2,-35.12],[72.5,-35.22],[66.1,-38.77],[10.3,25.1]];for(let ot=0;ot<T.length;ot++){let[Et,zt]=T[ot];c.push({x:Et,z:zt,walking:!1,seated:ot>=8&&ot<=10,style:ot%3,scale:.86+n()*.17,shade:new wt(u[ot%u.length]),faces:new wt(d[ot%d.length]),p:3,payload:ot%4===0?1:0,phase:n()*ii})}for(let[ot,Et]of t.trades.entries()){let zt=20+ot%5*2.2,B=(ot*.38197+.33)%1;for(let Gt of[!1,!0])c.push({stand:Et,buyer:Gt,cycle:zt,offset:B,style:(ot+Number(Gt))%3,scale:.91+n()*.12,shade:new wt(u[(ot*3+Number(Gt)*5)%u.length]),faces:new wt(d[ot%d.length]),payload:0,phase:n()*ii,speed:1})}for(let[ot,Et]of r.entries())c.push({boat:Et,x:0,z:0,walking:!1,style:ot%3,scale:.93,shade:new wt(u[ot]),faces:new wt(d[ot%d.length]),payload:0,phase:n()*ii});for(let ot of o)c.push({cart:ot,walking:!0,style:0,scale:.96,speed:1.05,shade:new wt(u[3+ot.index]),faces:new wt(d[ot.index]),payload:0,phase:n()*ii});for(let[ot,Et]of a.entries())c.push({mount:Et,seated:!0,style:0,scale:.98,shade:new wt(u[5+ot]),faces:new wt(d[ot]),payload:0,phase:ot*.9,speed:0});let M=bg(t,d);c.push(...M);let A={helmet:1,helmetRim:1,chinGuard:2,armouredCoat:1,armourBand:4,pauldron:2,spearHead:1},C=c.length;for(let[ot,Et]of p){let zt=["hand","arms","calves","feet","collar","basket","rope","ears","eyes"].includes(ot)?2:1,B=A[ot]?M.length*A[ot]:C*zt+(ot==="calves"?a.length*2:0),Gt=new _i(Et.geometry,Et.material,B);Gt.instanceMatrix.setUsage(Mi),Gt.castShadow=!["nose","collar","rope"].includes(ot),Gt.receiveShadow=!0,Gt.frustumCulled=!1,Gt.count=0,i.add(Gt),Et.model=Gt}let R=new ye,U=new ze,y=ae(0,0,0),S=ae(0,0,0),O=ae(0,0,0),D,q,nt,J,Z,mt,$;function _t(ot,Et,zt){let B=D.scale;return ae(q+(ot*mt+zt*$)*B,nt+Et*B,J+(-ot*$+zt*mt)*B)}function gt(ot,Et,zt,B,Gt,Dt,Ut,xt,F=0){let L=p.get(ot);R.position.copy(_t(Et,zt,B)),R.scale.set(Gt,Dt,Ut).multiplyScalar(D.scale),R.rotation.set(F,Z,0,"YXZ"),R.updateMatrix(),L.model.setMatrixAt(L.used,R.matrix),L.model.setColorAt(L.used++,xt)}function Mt(ot,Et,zt,B,Gt){let Dt=_t(...Et),Ut=_t(...zt),xt=B*D.scale;y.copy(Ut).sub(Dt),U.setFromUnitVectors(Tc,y.clone().normalize());let F=p.get(ot);R.position.copy(Dt).lerp(Ut,.5),R.quaternion.copy(U),R.scale.set(xt,y.length(),xt*.85),R.updateMatrix(),F.model.setMatrixAt(F.used,R.matrix),F.model.setColorAt(F.used++,Gt)}let Bt=new wt(14997691),Pt=new wt(9668216),Ft=new wt(12559741),Xt=new wt(13028301),ut=new wt(9539209),ft={pot:new wt(12173734),bread:new wt(14990723),cloth:new wt(13407109),fruit:new wt(11905126)},Ct=(s?60:86)**2;function Ot(ot,Et){for(let zt of p.values())zt.used=0;for(D of c){if(D.stand&&Et&&D.stand.seller.distanceToSquared(Et)>Ct)continue;let zt=D.walking,B=0,Gt=!1;if(D.post)({x:q,z:J}=D.post.position),Z=D.post.yaw+.13*Math.sin(ot*.61+D.phase);else if(D.patrol){let{route:E,length:G,lead:x,side:g}=D.patrol,N=(ot*D.speed+x)%G/G;E.getPointAt(N,S),E.getTangentAt(N,O),q=S.x+O.z*g,J=S.z-O.x*g,Z=Math.atan2(O.x,O.z)}else if(D.mount){let E=D.mount.root;q=E.position.x,J=E.position.z,Z=E.rotation.y}else if(D.stand){let{stand:E,buyer:G,cycle:x,offset:g}=D,N=(ot/x+g)%1,H=Zt.smoothstep(N,.03,.26),W=Zt.smoothstep(N,.73,.96);if(B=Zt.smoothstep(N,.34,.46)*(1-Zt.smoothstep(N,.63,.73)),Gt=G?N>.55&&N<.98:N>=.3&&N<=.55,G){let it=H-W;q=Zt.lerp(E.entry.x,E.buyer.x,it),J=Zt.lerp(E.entry.z,E.buyer.z,it);let K=N>.73&&N<.96;zt=N>.03&&N<.26||K,Z=E.yaw+(K?0:Math.PI)+.13*Math.sin(ot*1.15+D.phase)}else({x:q,z:J}=E.seller),Z=E.yaw+.14*Math.sin(ot*.77+D.phase)}else if(D.cart){let E=D.cart.root;Z=E.rotation.y,q=E.position.x-Math.sin(Z)*1.93,J=E.position.z-Math.cos(Z)*1.93}else if(D.walking){[q,J,Z]=Sg(D.route,D.started+ot*D.speed);let E=D.delivery?.095:Math.sin(D.phase)*.58;if(D.delivery&&(D.payload=(D.started+ot*D.speed)%D.route.length<D.route.length*.5?1:0),q+=Math.cos(Z)*E,J-=Math.sin(Z)*E,D.p===0||D.p===3)for(let{root:G}of a){let x=q-G.position.x,g=J-G.position.z;if(Math.abs(x)>4.5||Math.abs(g)>4.5)continue;let N=Math.cos(G.rotation.y),H=-Math.sin(G.rotation.y),W=x*N+g*H,V=-x*H+g*N,it=(1-Zt.smoothstep(Math.abs(V),1.2,4.2))*(1-Zt.smoothstep(Math.abs(W),.25,1.13))*.82*(W>=0?1:-1),K=q+N*it,et=J+H*it;t.walkHeight(K,et)!==null&&!t.isObstacle(K,et,.15)&&(q=K,J=et)}}else({x:q,z:J}=D),Z=(D.seated?Math.PI:D.phase)+.15*Math.sin(ot*.64+D.phase);if(nt=t.walkHeight(q,J)??ve(q,J),D.post&&(nt=D.post.position.y),D.boat){let E=D.boat.root;q=E.position.x-D.boat.route*D.boat.length*.35,J=E.position.z,nt=E.position.y+.82,Z=D.boat.route>0?Math.PI/2:-Math.PI/2}D.mount&&(nt=D.mount.root.position.y+1.06+D.mount.bob),mt=Math.cos(Z),$=Math.sin(Z);let Dt=ot*(4.1+D.speed*.97)+D.phase,Ut=zt?Math.sin(Dt):0,xt=D.seated?-.43+.012*Math.sin(ot*2.4+D.phase):zt?.026*Math.cos(Dt*2):.012*Math.sin(ot*2.4+D.phase)-B*(D.buyer?.065:.025),[F,L]=[D.shade,D.faces],I=D.seated?.38:D.style===1?.79:.63;gt("hem",0,.96-I/2+xt,0,D.style===1?.263:.218,I,.177,F),gt("top",0,1.17+xt,0,.239,.46,.133,F,.05),gt("belt",0,.962+xt,0,.173,.062,.151,Pt),gt("neck",0,1.416+xt,.007,.06,.111,.058,L),gt("head",0,1.548+xt,.012,.101,.122,.096,L);for(let E of[-1,1])gt("ears",E*.101,1.542+xt,.018,.021,.035,.02,L),gt("eyes",E*.044,1.568+xt,.102,.012,.009,.006,Pt);if(gt("nose",0,1.54+xt,.108,.032,.027,.028,L),D.guard){gt("helmet",0,1.625+xt,0,.141,.153,.138,Xt),gt("helmetRim",0,1.622+xt,.009,.146,.025,.143,ut),gt("armouredCoat",0,1.174+xt,0,.252,.366,.157,ut);for(let E=0;E<4;E++){let G=.85+xt+E*.116;gt("armourBand",0,G,0,.233+E*.006,.034,.158,E%2?Xt:ut)}Mt("pole",[.309,.11+xt,.255],[.309,2.041+xt,.255],.022,Ft),gt("spearHead",.309,2.132+xt,.255,.049,.14,.027,Xt)}else gt("hat",0,1.635+xt,.003,.108,.075,.104,Pt),D.style===1&&gt("hair",0,1.67+xt,-.082,.061,.075,.067,Pt);for(let E of[-1,1]){let G=Ut*E,x=.067+Math.max(0,-G)*.095;D.mount?(Mt("calves",[E*.14,.53,-.01],[E*.39,.21,.16],.092,F),Mt("calves",[E*.39,.21,.16],[E*.37,-.185,.02],.06,F),gt("feet",E*.37,-.2,.072,.074,.063,.116,Pt)):(Mt("calves",[E*.081,.58,-G*.016],[E*.079,x+.055,G*.16],.067,F),gt("feet",E*.079,x,G*.16+.035,.075,.058,.117,Pt)),D.guard&&(gt("chinGuard",E*.121,1.568+xt,-.036,.03,.127,.119,ut),gt("pauldron",E*.24,1.339+xt,0,.107,.091,.159,Xt,.13));let g=D.guard&&E===1?[.309,1.12+xt,.255]:D.mount?[E*.155,.61,.43]:D.stand&&!zt?[E*.16,.87+xt+B*.27,.245+B*(E>0?.26:.09)]:D.seated?[E*.14,.51+.021*Math.sin(ot+D.phase),.31]:D.cart?[E*.22,.68+xt,.27]:D.payload===2&&E===1?[E*.17,1.43+xt,.12]:[E*(D.style===1?.191:.252),.854+xt,-G*.129+.038];Mt("arms",[E*.208,1.34+xt,.005],g,.092,F),gt("hand",...g,.052,.064,.049,L),Gt&&E===1&&gt("parcel",g[0],g[1]+.06,g[2]+.019,.077,.086,.077,ft[D.stand.goods]),Mt("collar",[E*.105,1.396+xt,.087],[-E*.036,1.216+xt,.123],.021,Bt)}if(D.payload===1&&gt("parcel",.229,.9+xt,.17,.181,.147,.117,Ft),D.payload===2){Mt("pole",[-.61,1.436+xt,0],[.61,1.427+xt,0],.027,Ft);for(let E of[-1,1]){let G=E*.55+Ut*.018;Mt("rope",[E*.55,1.42+xt,0],[G,1+xt,.013],.014,Ft),gt("basket",G,.92+xt,.013,.167,.23,.158,Ft)}}}for(let zt of p.values())zt.model.count=zt.used,zt.model.instanceMatrix.needsUpdate=!0,zt.model.instanceColor&&(zt.model.instanceColor.needsUpdate=!0)}return{update:Ot,count:c.length}}function wg(i,t){return[[-40,18,-17,21],[5,-24,89,-25],[111,-25,154,-26],[60,-23,20,-23]].map(([e,n,s,r],o)=>{let a=new we,l=[];Me(yn,t.timber,a,0,.64,.17,1.13,.14,1.62);for(let c of[-1,1]){Me(yn,t.oldwood,a,c*.51,.86,.6,.09,.32,.86),Me(yn,t.beam,a,c*.25,.59,-.96,.09,.081,1.67);let h=new we;h.position.set(c*.65,.43,.34),a.add(h),Me(wc,t.beam,h,0,0,0,.43,.43,.43).rotation.y=Math.PI/2,Me(Cn,t.timber,h,0,0,0,.136,.16,.136).rotation.z=Math.PI/2;for(let u=0;u<8;u++){let d=u*ii/8;Mn(h,t.oldwood,ae(0,0,0),ae(0,.42*Math.cos(d),.42*Math.sin(d)),.026)}l.push(h)}for(let c=0;c<5;c++)Me(an,t.straw,a,(c%2-.5)*.49,.92+Math.floor(c/4)*.37,.16+c%3*.21,.37,.29,.41);return l.forEach(c=>Ai(c)),Ai(a),i.add(a),{root:a,wheels:l,a:e,b:n,c:s,d:r,phase:o*.29,index:o}})}function Eg(i,t){let e=t.materials,n=[[8,-25.1],[28,-25.7],[58,-25.55],[90,-25.72],[124,-25.8],[153,-26],[157,-24.9],[151,-23.7],[116,-23.7],[85,-23.35],[54,-23.55],[24,-23.45],[11,-23.45]],s=[[-139,24.5],[-123,24.2],[-105,20.2],[-85,19.46],[-77,17.65],[-71,17.65],[-62,18.4],[-54,18.1],[-56,21.3],[-79,22.15],[-95,21.6],[-107,21],[-127,26.5],[-138,27]],r=[8607549,6707539,10053954],o=[9981241,4353124,10515523],a=[n,n,s],l=new X,c=new X,h=new X,u=(d,p,_)=>{h.subVectors(_,p),d.position.copy(p).lerp(_,.5),d.scale.y=h.length(),d.quaternion.setFromUnitVectors(Tc,h.normalize())};return a.map((d,p)=>{let _=new Ki(d.map(([q,nt])=>ae(q,0,nt)),!0,"centripetal"),v=_.getLength(),m=[2.18,1.86,2.38][p],f=[27,166,31][p],b=new we,T=new we,M=new we;b.add(T),i.add(b);let A=new gn({color:r[p],roughness:.91}),C=new gn({color:p===1?8747376:5718839,roughness:.88}),R=new gn({color:3090206,roughness:.94}),U=e.sage.clone();U.color.setHex(o[p]);let y=(q,nt,J,Z,mt,$,_t,gt=0,Mt=T)=>{let Bt=Me(an,q,Mt,nt,J,Z,mt,$,_t);return Bt.rotation.x=gt,Bt};y(A,0,1.08,-.06,.3,.324,.75),y(A,0,1.04,-.55,.275,.337,.328),y(A,0,1.13,.52,.252,.356,.31),y(A,0,1.47,.7,.175,.434,.239,.52),y(A,0,1.68,.88,.131,.275,.162,.55),y(A,0,1.775,1.015,.155,.162,.261,.54),y(C,0,1.603,1.275,.121,.107,.188,.45),y(R,0,1.84,.912,.077,.134,.159,.37);for(let q of[-1,1]){y(A,q*.079,1.986,.986,.036,.138,.051,.24),y(R,q*.078,2.008,1.014,.022,.075,.025,.21),y(R,q*.124,1.777,1.101,.024,.025,.03),y(R,q*.084,1.621,1.411,.029,.019,.021),y(U,q*.267,1.208,-.125,.058,.195,.367),y(e.beam,q*.299,1.06,-.138,.022,.28,.062),Mn(T,e.beam,ae(q*.096,1.638,1.25),ae(q*.156,1.69,.42),.012),Mn(T,e.beam,ae(q*.106,1.672,1.25),ae(q*.139,1.86,.981),.016);let nt=Me(wc,e.iron,T,q*.36,.864,.082,.088,.112,.065);nt.rotation.y=Math.PI/2}y(U,0,1.383,-.112,.284,.105,.393),y(e.beam,0,1.476,-.083,.214,.104,.271),y(e.timber,0,1.507,.144,.183,.09,.044),y(e.timber,0,1.505,-.304,.183,.09,.054);for(let q=0;q<9;q++)y(R,0,1.87-q*.064,.815-q*.042,.056,.104,.082,.4);M.position.set(0,1.28,-.77),T.add(M),y(R,0,-.15,-.114,.06,.24,.061,.64,M),y(R,0,-.37,-.287,.074,.252,.069,.37,M),y(R,0,-.547,-.377,.059,.183,.052,.43,M),Ai(T),Ai(M);let S=[];for(let q of[!0,!1])for(let nt of[-1,1]){let J=nt*.183,Z=q?.507:-.535,mt=ae(J,q?1.076:1.065,Z),$=ae(J,.544,Z),_t=ae(J,.105,Z),gt=Mn(b,A,mt,$,q?.096:.125,ta),Mt=Mn(b,A,$,_t,q?.057:.065,Ch),Bt=y(R,J,.073,Z,.064,.072,.108,0,b);S.push({front:q,x:J,z:Z,hip:mt,knee:$,hoof:_t,thigh:gt,calf:Mt,foot:Bt,phase:(q?0:Math.PI)+nt*Math.PI*.5})}let O={root:b,bob:0,update:D};function D(q){let nt=(q*m+f)%v;_.getPointAt(nt/v,c),_.getTangentAt(nt/v,l);let{x:J,z:Z}=c;b.position.set(J,t.walkHeight(J,Z)??ve(J,Z),Z),b.rotation.y=Math.atan2(l.x,l.z);let mt=q*m*4.1+p;O.bob=.027*Math.cos(mt*2),T.position.y=O.bob,M.rotation.y=Math.sin(mt*.52)*.31;for(let $ of S){let _t=mt+$.phase,gt=Math.sin(_t),Mt=Math.max(0,Math.cos(_t));$.hip.y=($.front?1.076:1.065)+O.bob,$.knee.set($.x,.51+Mt*.17,$.z+gt*.147+($.front?-.13:.13)*Mt),$.hoof.set($.x,.128+Mt*.2,$.z+gt*.258),u($.thigh,$.hip,$.knee),u($.calf,$.knee,$.hoof),$.foot.position.set($.x,$.hoof.y-.055,$.hoof.z+.027),$.foot.rotation.x=-Mt*.42}}return O})}function Rh(i,t,e){let n=hs(1973),s=vg(i,t.materials,n),r=wg(i,t.materials),o=Eg(i,t),a=Tg(i,t,t.materials,n,e,s,r,o);function l(c,h){for(let u of s){let{root:d,mast:p,wake:_,oar:v,rudder:m,length:f,phase:b,route:T,docked:M}=u,A=M?u.start:((u.start+183+c*u.speed*T)%374+374)%374-183,C=We(A),R=Math.sin(c*.22+b)*.22,U=C+u.lane+(M?R*.5:R+Math.sin(A*.076+b)*.39),y=.063*Math.sin(c*1.1+b)+.026*Math.cos(c*1.63+b),S=We(A+1)-C,O=(T>0?0:Math.PI)-Math.atan(S)*.91;d.position.set(A,er-.02+y,U),d.rotation.set(Math.sin(c*1.3+b)*.034,O,Math.sin(c*.79+b)*.021,"YXZ");let D=Math.abs(A-Ce),q=1-Zt.smoothstep(D,8.5+f*.24,21);M||(p.rotation.z=-T*q*1.48),v.rotation.y=Math.sin(c*1.7+b)*.25,v.rotation.z=.09*Math.cos(c*1.7+b),m.rotation.y=.12*Math.sin(c*.49+b),_.position.x=A,_.position.z=U,_.rotation.y=O,_.visible=!M,_.userData.time.value=c}for(let u of r){let{root:d,wheels:p,a:_,b:v,c:m,d:f,phase:b,index:T}=u,M=Math.hypot(m-_,f-v),A=(c*(1+T*.05)/M+b)%2,C=A<1,R=C?A:2-A,U=Zt.lerp(_,m,R),y=Zt.lerp(v,f,R);d.position.set(U,t.walkHeight(U,y)??ve(U,y),y),d.rotation.y=Math.atan2(m-_,f-v)+(C?0:Math.PI),p.forEach(S=>S.rotation.x=c*2.3)}for(let u of o)u.update(c);a.update(c,h)}return{update:l,boats:s,carts:r,mounts:o,headcount:a.count}}var ea=class extends he{constructor(t,e={}){super(t),this.isWater=!0;let n=this,s=e.textureWidth!==void 0?e.textureWidth:512,r=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,h=e.sunDirection!==void 0?e.sunDirection:new X(.70707,.70707,0),u=new wt(e.sunColor!==void 0?e.sunColor:16777215),d=new wt(e.waterColor!==void 0?e.waterColor:8355711),p=e.eye!==void 0?e.eye:new X(0,0,0),_=e.distortionScale!==void 0?e.distortionScale:20,v=e.side!==void 0?e.side:dn,m=e.fog!==void 0?e.fog:!1,f=new sn,b=new X,T=new X,M=new X,A=new se,C=new X(0,0,-1),R=new le,U=new X,y=new X,S=new le,O=new se,D=new Ie,q=new rn(s,r),nt={name:"MirrorShader",uniforms:js.merge([Tt.fog,Tt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new se},sunColor:{value:new wt(8355711)},sunDirection:{value:new X(.70707,.70707,0)},eye:{value:new X},waterColor:{value:new wt(5592405)}}]),vertexShader:`
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
				}`},J=new Pe({name:nt.name,uniforms:js.clone(nt.uniforms),vertexShader:nt.vertexShader,fragmentShader:nt.fragmentShader,lights:!0,side:v,fog:m});J.uniforms.mirrorSampler.value=q.texture,J.uniforms.textureMatrix.value=O,J.uniforms.alpha.value=a,J.uniforms.time.value=l,J.uniforms.normalSampler.value=c,J.uniforms.sunColor.value=u,J.uniforms.waterColor.value=d,J.uniforms.sunDirection.value=h,J.uniforms.distortionScale.value=_,J.uniforms.eye.value=p,n.material=J,n.onBeforeRender=function(Z,mt,$){if(T.setFromMatrixPosition(n.matrixWorld),M.setFromMatrixPosition($.matrixWorld),A.extractRotation(n.matrixWorld),b.set(0,0,1),b.applyMatrix4(A),U.subVectors(T,M),U.dot(b)>0)return;U.reflect(b).negate(),U.add(T),A.extractRotation($.matrixWorld),C.set(0,0,-1),C.applyMatrix4(A),C.add(M),y.subVectors(T,C),y.reflect(b).negate(),y.add(T),D.position.copy(U),D.up.set(0,1,0),D.up.applyMatrix4(A),D.up.reflect(b),D.lookAt(y),D.far=$.far,D.updateMatrixWorld(),D.projectionMatrix.copy($.projectionMatrix),O.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),O.multiply(D.projectionMatrix),O.multiply(D.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(b,T),f.applyMatrix4(D.matrixWorldInverse),R.set(f.normal.x,f.normal.y,f.normal.z,f.constant);let _t=D.projectionMatrix;S.x=(Math.sign(R.x)+_t.elements[8])/_t.elements[0],S.y=(Math.sign(R.y)+_t.elements[9])/_t.elements[5],S.z=-1,S.w=(1+_t.elements[10])/_t.elements[14],R.multiplyScalar(2/R.dot(S)),_t.elements[2]=R.x,_t.elements[6]=R.y,_t.elements[10]=R.z+1-o,_t.elements[14]=R.w,p.setFromMatrixPosition($.matrixWorld);let gt=Z.getRenderTarget(),Mt=Z.xr.enabled,Bt=Z.shadowMap.autoUpdate;n.visible=!1,Z.xr.enabled=!1,Z.shadowMap.autoUpdate=!1,Z.setRenderTarget(q),Z.state.buffers.depth.setMask(!0),Z.autoClear===!1&&Z.clear(),Z.render(mt,D),n.visible=!0,Z.xr.enabled=Mt,Z.shadowMap.autoUpdate=Bt,Z.setRenderTarget(gt);let Pt=$.viewport;Pt!==void 0&&Z.state.viewport(Pt)}}};function Ih(i,t,e,n){let s=new X,r=new wt(7714013),o=new wt(13229016),a=new he(new Kn(255,36,22),new Pe({side:De,depthWrite:!1,fog:!1,uniforms:{sunVector:{value:s},skyTop:{value:r},skyHorizon:{value:o},clock:{value:0}},vertexShader:`
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
    `}));a.renderOrder=-10,a.frustumCulled=!1,i.add(a),i.fog=new Ls(13950673,.0052);let l=new Hs(14741495,10126689,1.82),c=new Ws(16769706,2.68);c.castShadow=!0;let h=n?51:63;c.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(c.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:8,far:208}),c.shadow.camera.updateProjectionMatrix(),c.shadow.normalBias=.035,c.shadow.bias=-22e-5,c.shadow.radius=2,i.add(l,c,c.target);let u=new ea(new mn(543,65),{textureWidth:n?320:768,textureHeight:n?240:480,waterNormals:e.waterNormal,sunDirection:s,sunColor:16573366,waterColor:6387024,distortionScale:2.85,clipBias:.018,fog:!0});u.rotation.x=-Math.PI/2,u.position.set(4,er,0),u.material.uniforms.size.value=1.55,u.material.fragmentShader=u.material.fragmentShader.replace("float rf0 = 0.3;","float rf0 = 0.17;").replace("vec3 outgoingLight = albedo;","vec3 outgoingLight = albedo * ( .93 + .11 * sin(worldPosition.x * 6.4 + sin(worldPosition.z * 2.2) + time * 2.9) * sin(worldPosition.z * 7.0 + sin(worldPosition.x * 3.0) - time) );"),u.receiveShadow=!0,i.add(u);let d=u.onBeforeRender,p=0,_=new X(999,0,0),v=new ze;u.onBeforeRender=function(...nt){let J=nt[2];(p++%(n?4:3)===0||_.distanceToSquared(J.position)>1.1||Math.abs(v.dot(J.quaternion))<.9996)&&(_.copy(J.position),v.copy(J.quaternion),d.apply(this,nt))};let m=[[-89,4.5,27],[70,5.2,-34],[133,3.7,-54],[57,4.2,-37]],f=m.length*7,b=new Float32Array(f*3),T=new Float32Array(f),M=new Float32Array(f),A=new me;A.setAttribute("position",new _e(b,3).setUsage(Mi)),A.setAttribute("size",new _e(T,1).setUsage(Mi)),A.setAttribute("fade",new _e(M,1).setUsage(Mi));let C=new Us(A,new Pe({transparent:!0,depthWrite:!1,vertexShader:`
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
    `}));C.frustumCulled=!1,i.add(C);let R=[],U=new gi({color:3817010,side:xe,fog:!0}),y=new me;y.setAttribute("position",new ne([0,0,.15,.43,.025,-.022,.12,0,-.13,0,0,.15,.12,0,-.13,0,0,-.098],3));for(let nt=0;nt<(n?7:11);nt++){let J=new we,Z=new he(y,U),mt=new he(y,U);mt.scale.x=-1,J.add(mt,Z),i.add(J),R.push({group:J,left:mt,right:Z})}let S="",O="",D=new X;function q(nt,J,Z,mt){a.position.copy(Z.position),a.material.uniforms.clock.value=nt;let _t=Zt.clamp((J-8.1)/8.8,0,1),gt=Math.sin(Math.PI*(.2+_t*.59)),Mt=.36+_t*2.12;s.set(Math.cos(Mt)*(.79+_t*.15),.46+gt*.81,Math.sin(Mt)).normalize();let Bt=Math.round(J*45).toString();if(Bt!==O&&(c.color.setHSL(.106,.58+(1-gt)*.09,.83+(gt-.5)*.07),c.intensity=2.3+gt*.59,l.intensity=1.48+gt*.28,r.setRGB(.105+gt*.033,.312+gt*.085,.62+gt*.1),o.setRGB(.51+(1-gt)*.09,.655,.745),i.fog.color.setRGB(.62,.73,.76),O=Bt),mt%4===0||mt===1){let Pt=Z.getWorldDirection(D),Ft=Math.round((Z.position.x+Pt.x*24)/8)*8,Xt=Math.round((Z.position.z+Pt.z*24)/8)*8,ut=Ft+"/"+Xt+"/"+Bt,ft=ut!==S;ft&&(c.target.position.set(Ft,0,Xt),c.position.copy(c.target.position).addScaledVector(s,86),S=ut),(ft||mt%(n?12:8)===0)&&(t.shadowMap.needsUpdate=!0)}u.material.uniforms.time.value=nt*.77;for(let Pt=0;Pt<f;Pt++){let[Ft,Xt,ut]=m[Math.floor(Pt/7)],ft=(nt*.17+Pt%7/7)%1;b[Pt*3]=Ft+ft*3.6+.37*Math.sin(Pt+ft*6),b[Pt*3+1]=Xt+ft*5.13,b[Pt*3+2]=ut+Math.sin(ft*3+Pt)*(.25+ft*.7)+ft*.6,T[Pt]=.41+ft*2.1,M[Pt]=Math.sin(ft*Math.PI)*.13*(1-ft*.65)}for(let Pt of["position","size","fade"])A.attributes[Pt].needsUpdate=!0;for(let Pt=0;Pt<R.length;Pt++){let{group:Ft,left:Xt,right:ut}=R[Pt],ft=nt*.054+Pt*.045,Ct=Pt%4*.91,Ot=-14+Math.sin(ft)*46+Ct*2,ot=-5+Math.cos(ft)*20+Ct;Ft.position.set(Ot,17.6+Math.sin(ft*1.6+Pt*.14)*2.2+Ct*.38,ot),Ft.rotation.y=Math.atan2(Math.cos(ft)*46,-Math.sin(ft)*20);let Et=Math.sin(nt*6.7+Pt*.77)*.67;Xt.rotation.z=Et,ut.rotation.z=-Et}}return{update:q,river:u}}function Ph(i,t){let e,n=!1,s=0,r={field:[390,.1,.016,.046],river:[490,.17,.025,.026],dock:[590,.14,.062,.018],market:[780,.068,.126,.013],shop:[570,.046,.1,.005],lane:[510,.071,.044,.033]};function o(){let h=new AudioContext,u=h.createBuffer(1,h.sampleRate*9,h.sampleRate),d=u.getChannelData(0),p=0;for(let m=0;m<d.length;m++)p=p*.83+(Math.random()*2-1)*.15,d[m]=p;let _=h.createGain();_.gain.value=0,_.connect(h.destination);function v(m,f,b){let T=h.createBufferSource(),M=h.createBiquadFilter(),A=h.createGain();return T.buffer=u,T.loop=!0,T.playbackRate.value=b,M.type=m,M.frequency.value=f,T.connect(M).connect(A).connect(_),T.start(Math.random()*1.2),{filter:M,gain:A}}return{audio:h,noise:u,output:_,wind:v("lowpass",510,1.22),crowd:v("bandpass",590,1.47)}}i.setAttribute("aria-label","\u5F00\u542F\u73AF\u5883\u97F3"),i.addEventListener("click",async()=>{try{e??=o(),await e.audio.resume(),n=!n,i.setAttribute("aria-pressed",String(n)),i.setAttribute("aria-label",n?"\u5173\u95ED\u73AF\u5883\u97F3":"\u5F00\u542F\u73AF\u5883\u97F3"),t.textContent=n?"\u73AF\u5883\u97F3\u5DF2\u5F00":"\u73AF\u5883\u97F3",e.output.gain.setTargetAtTime(n?.72:0,e.audio.currentTime,.12)}catch{t.textContent="\u73AF\u5883\u97F3\u4E0D\u53EF\u7528"}});function a(h,u,d){let{audio:p,output:_}=e,v=p.createOscillator(),m=p.createGain();v.frequency.setValueAtTime(h,d),v.frequency.exponentialRampToValueAtTime(h*1.43,d+.057),m.gain.setValueAtTime(1e-4,d),m.gain.exponentialRampToValueAtTime(u,d+.024),m.gain.exponentialRampToValueAtTime(1e-4,d+.083),v.connect(m).connect(_),v.start(d),v.stop(d+.085)}let l=5.1;function c(h,u,d,p){if(!n||!e||document.hidden)return;let[_,v,m,f]=r[h]??r.river,{audio:b,output:T,noise:M}=e,A=b.currentTime;if(e.wind.filter.frequency.setTargetAtTime(_,A,.35),e.wind.gain.gain.setTargetAtTime(v*(.77+.15*Math.sin(A*.8)+.11*Math.cos(A*.31)),A,.4),e.crowd.gain.gain.setTargetAtTime(m*(.73+.1*Math.sin(A*2.1)+.2*Math.cos(A*.59)),A,.48),u&&A-s>.4){let C=b.createBufferSource(),R=b.createBiquadFilter(),U=b.createGain();C.buffer=M,R.type="lowpass",R.frequency.value=d?285:390,U.gain.setValueAtTime(.15,A),U.gain.exponentialRampToValueAtTime(.001,A+.16),C.connect(R).connect(U).connect(T),C.start(A,Math.random()*7,.17),s=A}if(l-=p,l<=0){let C=1390+Math.random()*520;for(let R=0;R<3;R++)a(C+R*87,f*(.4+Math.random()*.28),A+R*.14);l=6+Math.random()*9}}return{update:c}}var Rt=i=>document.getElementById(i),Sn=Rt("experience"),Ve=Rt("world"),rr=matchMedia("(prefers-reduced-motion: reduce)"),Ag=matchMedia("(pointer: coarse)"),bn=Ag.matches||innerWidth<680,us=Zt.clamp,Ec=i=>String(i).padStart(2,"0"),si=(i,t,e)=>new X(i,t,e),na=[...Te.flatMap(i=>[[i.x,i.z],...i.path])],Lh=[{stop:1,point:si(-31,.6,-4),button:null},{stop:3,point:si(Ce,7.5,.7),button:null},{stop:4,point:si(28,4.5,-25.2),button:null},{stop:7,point:si(98,11,-24),button:null}];async function Cg(){let i=new jo({canvas:Ve,antialias:!bn,alpha:!1,powerPreference:"high-performance"}),t=new Ds,e=new Ie(bn?64:52,1,.12,340),n={value:0};i.setClearColor(12768452),i.outputColorSpace=be,i.toneMapping=co,i.toneMappingExposure=1.08,i.shadowMap.enabled=!0,i.shadowMap.autoUpdate=!1,i.shadowMap.type=Xs;let s=Mh(),r=bh(t,s,n),o=Ih(t,i,s,bn),a=Rh(t,r,bn);i.compile(t,e);let l=Ph(Rt("sound"),Rt("sound-label")),c=new Set,h={id:null,x:0,y:0},u={id:null,x:0,y:0},d=si(0,0,0),p=si(0,0,0),_=si(0,0,0),v=Rt("map-view"),m=Rt("map"),f=m.getContext("2d"),b=!1,T="scenic",M=0,A=-1,C=0,R=0,U=null,y=rr.matches,S=0,O=2.4,D=0,q=0,nt="",J=!1,Z=null,mt,$,_t=[],gt=[],Mt={west:-155,east:174,north:-68,south:55},Bt=z=>(z-Mt.west)/(Mt.east-Mt.west),Pt=z=>(z-Mt.north)/(Mt.south-Mt.north),Ft=[];for(let z=1;z<na.length;z++){let[k,st]=na[z-1],[P,j]=na[z],Y=Math.hypot(P-k,j-st);for(let pt=0;pt<=Math.ceil(Y);pt++){let dt=pt/Math.max(1,Math.ceil(Y)),at=Zt.lerp(k,P,dt),At=Zt.lerp(st,j,dt);if(r.walkHeight(at,At)===null||r.isObstacle(at,At,.16)){Ft.push([z,+at.toFixed(2),+At.toFixed(2)]);break}}}Ft.length&&console.warn("Tour route intersects scene geometry",Ft);function Xt(){let z=Sn.clientWidth,k=Sn.clientHeight;e.aspect=z/k,e.fov=z<510?62:52,e.updateProjectionMatrix(),i.setPixelRatio(Math.min(devicePixelRatio,bn?1.05:1.4)),i.setSize(z,k,!1),Rt("map-panel").hidden||x()}new ResizeObserver(Xt).observe(Sn),Xt();function ut(z,k,st=!1){let P=document.createElement("button");P.type="button",P.className=st?"":"route-stop";let j=document.createElement("b");return j.textContent=Ec(k+1),j.setAttribute("aria-hidden","true"),P.append(j,document.createTextNode(z.name)),P.addEventListener("click",()=>{N(!1),Dt(()=>B(k,!1))}),P}Te.forEach((z,k)=>{let st=document.createElement("li"),P=ut(z,k);st.append(P),Rt("route").append(st),_t.push(P);let j=document.createElement("li"),Y=ut(z,k,!0);j.append(Y),Rt("map-list").append(j);let pt=document.createElement("button");pt.type="button",pt.className="map-dot",pt.title=z.name,pt.setAttribute("aria-label",z.name),pt.textContent=String(k+1),pt.style.left=Bt(z.x)*100+"%",pt.style.top=Pt(z.z)*100+"%",pt.addEventListener("click",()=>Y.click()),Rt("map-pins").append(pt),gt.push([Y,pt])});for(let z of Lh){let k=document.createElement("button");k.type="button",k.className="world-label",k.textContent=Te[z.stop].name,k.addEventListener("click",()=>Dt(()=>B(z.stop,!1))),Rt("labels").append(k),z.button=k}function ft(){if(T!=="scenic"||bn)return;let z=Sn.clientWidth,k=Sn.clientHeight;for(let st of Lh){let P=p.copy(st.point).project(e),j=(P.x+1)/2*z,Y=(1-P.y)/2*k,pt=Rt("intro").getBoundingClientRect(),dt=j>pt.left-8&&j<pt.right+32&&Y>pt.top-30&&Y<pt.bottom+12;st.button.hidden=P.z<-.92||P.z>1||j<22||j>z-94||Y<92||Y>k-150||dt,st.button.hidden||(st.button.style.transform="translate3d("+j.toFixed(1)+"px,"+Y.toFixed(1)+"px,0)")}}function Ct(z,k=!1){if(A===z)return;A=z;let st=Te[z];st&&(Rt("place-area").textContent=st.area,Rt("place-name").textContent=st.name,Rt("place-note").textContent=st.note),_t.forEach((P,j)=>{let Y=j===z;for(let pt of[P,...gt[j]])Y?pt.setAttribute("aria-current","location"):pt.removeAttribute("aria-current");if(Y&&k){let pt=Rt("route"),dt=P.offsetLeft;(dt<pt.scrollLeft||dt+P.offsetWidth>pt.scrollLeft+pt.clientWidth)&&pt.scrollTo({left:Math.max(0,dt-pt.clientWidth/2+P.offsetWidth/2),behavior:rr.matches?"instant":"smooth"})}})}function Ot(){let z=T!=="scenic";Sn.classList.toggle("walking",z),Rt("intro").hidden=z,Rt("walk-hud").hidden=!z,Rt("look-help").hidden=!z||bn||T==="tour",Rt("joystick").hidden=!bn||T!=="walk",Rt("take-control").hidden=bn||T!=="walk"||typeof Ve.requestPointerLock!="function",Rt("tour").hidden=!z,Rt("tour").setAttribute("aria-pressed",String(T==="tour")),Rt("tour").firstElementChild.textContent=T==="tour"?"\u2161 \u7ED3\u675F\u6F2B\u6E38":"\u25B7 \u81EA\u52A8\u6F2B\u6E38",Rt("aim").hidden=document.pointerLockElement!==Ve,Rt("tour-status").hidden=T!=="tour"}function ot(z,k,st){let P=z-d.x,j=k-d.y,Y=st-d.z;return[Math.atan2(-P,-Y),Math.atan2(j,Math.hypot(P,Y))]}function Et(z){let k=Te[z];d.set(k.x,(r.walkHeight(k.x,k.z)??0)+1.61,k.z),[C,R]=ot(...k.look),e.position.copy(d),e.rotation.set(R,C,0,"YXZ"),Ct(z,!0)}function zt(z){let k=[[Te[z].x,Te[z].z]],st=new Map([[0,z]]);for(let P=z;P<Te.length-1;P++)k.push(...Te[P].path,[Te[P+1].x,Te[P+1].z]),st.set(k.length-1,P+1);return{points:k,events:st,segment:0,progress:0,dwell:1.55}}function B(z,k){b&&(c.clear(),document.pointerLockElement&&document.exitPointerLock(),T=k?"tour":"walk",Et(z),U=k?zt(z):null,Ot(),Ve.focus({preventScroll:!0}))}function Gt(z=0){document.pointerLockElement&&document.exitPointerLock(),M=z,T="scenic",U=null,c.clear(),Ct(-1),Ot(),Rt("start").focus({preventScroll:!0})}function Dt(z){if(!(J||!b)){if(J=!0,rr.matches){z(),J=!1;return}Rt("fade").classList.add("in"),setTimeout(()=>{z(),Rt("fade").classList.remove("in"),J=!1},220)}}function Ut(){T==="tour"&&(T="walk",U=null,Ot())}function xt(z,k){let st=!1;for(let[P,j]of[[d.x+z,d.z+k],[d.x+z,d.z],[d.x,d.z+k]]){if(Math.abs(P-d.x)+Math.abs(j-d.z)<1e-4)continue;let Y=r.walkHeight(P,j);if(!(Y===null||r.isObstacle(P,j)||Math.abs(Y-d.y+1.61)>.73)){d.x=P,d.z=j,st=!0;break}}return st}function F(){let z=0,k=1/0;for(let st=0;st<Te.length;st++){let P=Te[st],j=(P.x-d.x)**2+(P.z-d.z)**2;j<k&&(z=st,k=j)}(k<225||A<0||k<((Te[A].x-d.x)**2+(Te[A].z-d.z)**2)*.7)&&Ct(z,!0)}function L(z){let k=(c.has("w")||c.has("arrowup")?1:0)-(c.has("s")||c.has("arrowdown")?1:0)+u.y,st=(c.has("d")?1:0)-(c.has("a")?1:0)+u.x;C+=((c.has("arrowleft")?1:0)-(c.has("arrowright")?1:0))*z*1.9;let P=Math.max(Math.hypot(k,st),1),j=(c.has("shift")?6.5:3.3)*z/P,Y=xt((Math.cos(C)*st-Math.sin(C)*k)*j,(-Math.sin(C)*st-Math.cos(C)*k)*j),pt=r.walkHeight(d.x,d.z)??0;return d.y=Zt.lerp(d.y,pt+1.61,1-Math.exp(-z*17)),e.position.copy(d),Y&&!rr.matches&&(e.position.y+=Math.sin(performance.now()*.011)*.035),e.rotation.set(R,C,0,"YXZ"),F(),Y}function I(z){let k=U.points[U.segment],st=U.points[U.segment+1],P;if(U.dwell>0)z=Math.min(z,U.dwell),U.dwell-=z,P=ot(...Te[A].look);else if(st){let pt=Math.hypot(st[0]-k[0],st[1]-k[1]);U.progress=us(U.progress+z*5.65/Math.max(.01,pt),0,1);let dt=Zt.lerp(k[0],st[0],U.progress),at=Zt.lerp(k[1],st[1],U.progress);d.x=dt,d.z=at;let At=U.points[U.segment+2]??st,kt=us((U.progress-.58)*1.8,0,.78),$t=Zt.lerp(st[0],At[0],kt),Kt=Zt.lerp(st[1],At[1],kt);P=ot($t,(r.walkHeight($t,Kt)??0)+1.25,Kt),U.progress===1&&(U.segment++,U.progress=0,U.events.has(U.segment)&&(Ct(U.events.get(U.segment),!0),U.dwell=2.7))}else return Ut(),!1;let j=(r.walkHeight(d.x,d.z)??0)+1.67;d.y=Zt.lerp(d.y,j,1-Math.exp(-z*12));let Y=Math.atan2(Math.sin(P[0]-C),Math.cos(P[0]-C));return C+=Y*(1-Math.exp(-z*3.4)),R=Zt.lerp(R,us(P[1],-.4,.42),1-Math.exp(-z*4.4)),e.position.copy(d),e.rotation.set(R,C,0,"YXZ"),U.dwell===0}let E=si(0,0,0);function G(){let z=bc[M];e.position.set(...z.position),rr.matches||(e.position.x+=Math.sin(S*.09)*1.22,e.position.y+=Math.cos(S*.13)*.38),bn&&M===0&&(e.position.x-=10,e.position.z-=4),e.lookAt(E.set(...z.look))}function x(){let z=v.clientWidth,k=v.clientHeight;if(!z||!k)return;let st=Math.min(2,devicePixelRatio);m.width=Math.round(z*st),m.height=Math.round(k*st),f.setTransform(st,0,0,st,0,0);let P=Y=>Bt(Y)*z,j=Y=>Pt(Y)*k;f.fillStyle="#e2d9b9",f.fillRect(0,0,z,k),f.strokeStyle="#b7ad9045",f.lineWidth=1;for(let Y=0;Y<z;Y+=23)f.beginPath(),f.moveTo(Y,0),f.lineTo(Y,k),f.stroke();for(let Y=0;Y<k;Y+=23)f.beginPath(),f.moveTo(0,Y),f.lineTo(z,Y),f.stroke();f.beginPath();for(let Y=Mt.west;Y<=Mt.east;Y+=1)f.lineTo(P(Y),j(We(Y)-ni(Y)));for(let Y=Mt.east;Y>=Mt.west;Y-=1)f.lineTo(P(Y),j(We(Y)+ni(Y)));f.closePath(),f.fillStyle="#819991",f.fill(),f.strokeStyle="#596c60",f.stroke();for(let Y of r.obstacles)Y.x1-Y.x0<2.2||Y.z1-Y.z0<2.2||(f.fillStyle=Y.x0>101&&Y.x1<112?"#836f58":"#a49875",f.fillRect(P(Y.x0),j(Y.z0),P(Y.x1)-P(Y.x0),j(Y.z1)-j(Y.z0)));f.beginPath();for(let[Y,pt]of na)f.lineTo(P(Y),j(pt));if(f.strokeStyle="#f6ecce",f.lineWidth=4,f.stroke(),f.strokeStyle="#934f3c",f.lineWidth=1.3,f.setLineDash([4,3]),f.stroke(),f.setLineDash([]),f.font="bold "+Math.max(11,z*.021)+"px SimSun, serif",f.fillStyle="#f0e8cf",f.fillText("\u6C74\u6CB3",P(-19),j(5)),f.fillStyle="#665b46",f.fillText("\u5317 \u2191",z-34,16),T!=="scenic"){let Y=P(d.x),pt=j(d.z),dt=-Math.sin(C),at=-Math.cos(C);f.beginPath(),f.moveTo(Y+8*dt,pt+8*at),f.lineTo(Y-4*dt+4*at,pt-4*at-4*dt),f.lineTo(Y-4*dt-4*at,pt-4*at+4*dt),f.closePath(),f.fillStyle="#263d31",f.fill(),f.strokeStyle="#fff5da",f.lineWidth=1,f.stroke(),mt=d.x,$=d.z}}function g(){document.pointerLockElement&&document.exitPointerLock(),Rt("map-panel").hidden=!1,Rt("map-button").setAttribute("aria-expanded","true"),x(),Rt("close-map").focus()}function N(z=!0){Rt("map-panel").hidden||(Rt("map-panel").hidden=!0,Rt("map-button").setAttribute("aria-expanded","false"),z&&Rt("map-button").focus())}let H=["\u5317","\u4E1C\u5317","\u4E1C","\u4E1C\u5357","\u5357","\u897F\u5357","\u897F","\u897F\u5317"],W=["\u8FB0\u65F6","\u5DF3\u65F6","\u5348\u65F6","\u672A\u65F6","\u7533\u65F6"];function V(z){let k=Math.floor(z*60+.002),st=Math.floor(k/60),P=Ec(st)+":"+Ec(k%60);nt!==P&&(Rt("clock").textContent=P,Rt("clock").dateTime=P,Rt("period").textContent=W[us(Math.floor((st-7)/2),0,4)],Rt("time-range")!==document.activeElement&&(Rt("time-range").value=String(z)),nt=P),e.getWorldDirection(E);let j=(Math.round(Math.atan2(E.x,-E.z)/(Math.PI/4))+8)%8;D%12===1&&(Rt("heading-text").textContent=H[j]+" \u2191")}function it(){Sn.classList.add("ready"),Rt("start").disabled=!1,Rt("intro-tour").disabled=!1,Rt("load-status").textContent="",b=!0}function K(z){let k=q?us((z-q)/1e3,.001,.12):.016;q=z,D++,y||(S+=k);let st=8+((O+S*.0078)%8.75+8.75)%8.75,P=!1;T==="scenic"?G():T==="tour"?P=I(k):Rt("map-panel").hidden&&(P=L(k)),(!y||D===1||_.distanceToSquared(e.position)>100)&&(n.value=S,a.update(S,e.position),_.copy(e.position)),o.update(S,st,e,D),i.render(t,e),D%5===1&&ft(),D%4===1&&V(st),!Rt("map-panel").hidden&&D%10===1&&Math.hypot(d.x-mt,d.z-$)>.38&&x(),l.update(Te[A]?.sound??"river",P,Math.abs(d.x-Ce)<5&&Math.abs(d.z)<21,k),b||it(),Z=requestAnimationFrame(K)}Rt("start").addEventListener("click",()=>Dt(()=>B(0,!1))),Rt("intro-tour").addEventListener("click",()=>Dt(()=>B(0,!0))),Rt("home").addEventListener("click",()=>Dt(()=>Gt())),Rt("view").addEventListener("click",()=>Dt(()=>Gt(T==="scenic"?(M+1)%bc.length:0))),Rt("tour").addEventListener("click",()=>{T==="tour"?Ut():Dt(()=>B(A>=Te.length-1?0:Math.max(0,A),!0))}),Rt("map-button").addEventListener("click",()=>{b&&(Rt("map-panel").hidden?g():N())}),Rt("close-map").addEventListener("click",()=>N()),Rt("time-button").addEventListener("click",()=>{let z=Rt("day-panel");z.hidden=!z.hidden,Rt("time-button").setAttribute("aria-expanded",String(!z.hidden))}),Rt("time-range").addEventListener("input",z=>{O=Number(z.target.value)-8-S*.0078}),Rt("full").hidden=!document.fullscreenEnabled,Rt("full").addEventListener("click",async()=>{document.fullscreenElement?await document.exitFullscreen().catch(()=>{}):await Sn.requestFullscreen().catch(()=>{})});function et(z){y=z;let k=Rt("pause"),st=z?"\u7EE7\u7EED\u57CE\u4E2D\u52A8\u6001":"\u6682\u505C\u57CE\u4E2D\u52A8\u6001";k.title=st,k.setAttribute("aria-label",st),k.setAttribute("aria-pressed",String(z)),k.textContent=z?"\u25B7":"\u2161"}et(y),Rt("pause").addEventListener("click",()=>et(!y)),Rt("take-control").addEventListener("click",async()=>{try{await Ve.requestPointerLock()}catch{}}),document.addEventListener("pointerlockchange",()=>{Ot(),document.pointerLockElement===Ve?Ve.focus({preventScroll:!0}):c.clear()});function lt(z,k,st){C-=z*st,R=us(R-k*st,-1.22,1.18)}Ve.addEventListener("pointerdown",z=>{T==="scenic"||z.button!==0||(Ut(),!document.pointerLockElement&&(h.id=z.pointerId,h.x=z.clientX,h.y=z.clientY,Ve.setPointerCapture(z.pointerId),Sn.classList.add("dragging")))}),Ve.addEventListener("pointermove",z=>{h.id===z.pointerId&&(lt(z.clientX-h.x,z.clientY-h.y,bn?.006:.0052),h.x=z.clientX,h.y=z.clientY)}),Ve.addEventListener("lostpointercapture",()=>{h.id=null,Sn.classList.remove("dragging")}),document.addEventListener("mousemove",z=>{document.pointerLockElement===Ve&&lt(z.movementX,z.movementY,.0022)});let rt=Rt("joystick");function vt(z){let k=rt.getBoundingClientRect(),st=k.width/2,P=z.clientX-k.left-st,j=z.clientY-k.top-st,Y=st*.67,pt=Math.max(1,Math.hypot(P,j)/Y);P/=pt,j/=pt,u.x=P/Y,u.y=-j/Y,Rt("stick").style.transform="translate("+P+"px,"+j+"px)"}rt.addEventListener("pointerdown",z=>{u.id=z.pointerId,rt.setPointerCapture(u.id),vt(z)}),rt.addEventListener("pointermove",z=>{z.pointerId===u.id&&vt(z)}),rt.addEventListener("lostpointercapture",()=>{u.id=null,u.x=0,u.y=0,Rt("stick").style.transform=""});let yt=new Set(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"]);window.addEventListener("keydown",z=>{let k=z.key.toLowerCase();if(k==="escape"){Rt("map-panel").hidden?Rt("day-panel").hidden?T==="tour"&&Ut():Rt("time-button").click():N();return}if(!Rt("map-panel").hidden){if(k==="tab"){let st=[...Rt("map-panel").querySelectorAll("button")],P=st[0],j=st.at(-1);z.shiftKey&&document.activeElement===P&&(z.preventDefault(),j.focus()),!z.shiftKey&&document.activeElement===j&&(z.preventDefault(),P.focus())}return}z.target.closest?.("input")||z.altKey||z.ctrlKey||z.metaKey||(k==="m"&&!z.repeat&&g(),T!=="scenic"&&yt.has(k)&&(z.preventDefault(),Ut(),c.add(k)))}),window.addEventListener("keyup",z=>c.delete(z.key.toLowerCase())),window.addEventListener("blur",()=>c.clear()),document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Z),c.clear()):(q=0,Z=requestAnimationFrame(K))}),Ve.addEventListener("webglcontextlost",z=>{z.preventDefault(),cancelAnimationFrame(Z),Sn.classList.remove("ready"),Gt(),Rt("load-status").textContent="\u4E09\u7EF4\u573A\u666F\u6682\u65F6\u4E2D\u65AD\uFF0C\u6B63\u5728\u7B49\u5F85\u6D4F\u89C8\u5668\u6062\u590D\u3002"}),Ve.addEventListener("webglcontextrestored",()=>{D=0,q=0,b=!1,Z=requestAnimationFrame(K)}),Ve.dataset.city="three",new URLSearchParams(location.search).has("test")&&(window.cityTest={camera:e,world:r,life:a,pathProblems:Ft,stops:Te,renderer:i,get mode(){return T},get player(){return d.toArray()},get time(){return S},get index(){return A},enter:B,walk:xt,advanceTour(z){for(;T==="tour"&&z>0;)I(.05),z-=.05}}),Z=requestAnimationFrame(K)}requestAnimationFrame(()=>setTimeout(()=>Cg().catch(i=>{console.error(i),Rt("load-status").textContent="\u5F53\u524D\u6D4F\u89C8\u5668\u7684 WebGL 2 \u4E09\u7EF4\u573A\u666F\u65E0\u6CD5\u542F\u52A8\u3002"}),30));})();
/*! For license information please see city3d.js.LEGAL.txt */
