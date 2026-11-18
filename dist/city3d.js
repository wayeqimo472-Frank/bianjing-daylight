(()=>{var il=0,Xa=1,sl=2;var tr=1,rl=2,Un=3,Mn=0,ze=1,Se=2,Zn=0,vi=1,qa=2,Ya=3,Za=4,ol=5,ri=100,al=101,cl=102,ll=103,hl=104,ul=200,dl=201,fl=202,pl=203,Or=204,zr=205,ml=206,gl=207,_l=208,xl=209,vl=210,yl=211,Ml=212,Sl=213,bl=214,co=0,lo=1,ho=2,yi=3,uo=4,fo=5,po=6,mo=7,Ja=0,Tl=1,wl=2,Jn=0,El=1,Al=2,Cl=3,go=4,Rl=5,Il=6,Pl=7;var $a=300,Ai=301,Ci=302,_o=303,xo=304,er=306,Mi=1e3,si=1001,kr=1002,$e=1003,Ll=1004;var nr=1005;var Sn=1006,vo=1007;var li=1008;var wn=1009,Ka=1010,ja=1011,as=1012,yo=1013,hi=1014,En=1015,cs=1016,Mo=1017,So=1018,ls=1020,Qa=35902,tc=35899,ec=1021,nc=1022,dn=1023,ji=1026,hs=1027,bo=1028,To=1029,ic=1030,wo=1031;var Eo=1033,ir=33776,sr=33777,rr=33778,or=33779,Ao=35840,Co=35841,Ro=35842,Io=35843,Po=36196,Lo=37492,Do=37496,Uo=37808,No=37809,Fo=37810,Bo=37811,Oo=37812,zo=37813,ko=37814,Vo=37815,Ho=37816,Go=37817,Wo=37818,Xo=37819,qo=37820,Yo=37821,Zo=36492,Jo=36494,$o=36495,Ko=36283,jo=36284,Qo=36285,ta=36286;var Ps=2300,Vr=2301,Br=2302,Fa=2400,Ba=2401,Oa=2402;var Dl=3200,Ul=3201;var sc=0,Nl=1,$n="",we="srgb",Si="srgb-linear",Ls="linear",ce="srgb";var xi=7680;var za=519,Fl=512,Bl=513,Ol=514,rc=515,zl=516,kl=517,Vl=518,Hl=519,ka=35044,Ri=35048;var oc="300 es",yn=2e3,Ds=2001;var Xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=1234567,Rs=Math.PI/180,Qi=180/Math.PI;function us(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function ac(i,t){return(i%t+t)%t}function zh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function kh(i,t,e){return i!==t?(e-i)/(t-i):0}function Is(i,t,e){return(1-e)*i+e*t}function Vh(i,t,e,n){return Is(i,t,1-Math.exp(-e*n))}function Hh(i,t=1){return t-Math.abs(ac(i,t*2)-t)}function Gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qh(i,t){return i+Math.random()*(t-i)}function Yh(i){return i*(.5-Math.random())}function Zh(i){i!==void 0&&(Dc=i);let t=Dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jh(i){return i*Rs}function $h(i){return i*Qi}function Kh(i){return(i&i-1)===0&&i!==0}function jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var jt={DEG2RAD:Rs,RAD2DEG:Qi,generateUUID:us,clamp:te,euclideanModulo:ac,mapLinear:zh,inverseLerp:kh,lerp:Is,damp:Vh,pingpong:Hh,smoothstep:Gh,smootherstep:Wh,randInt:Xh,randFloat:qh,randFloatSpread:Yh,seededRandom:Zh,degToRad:Jh,radToDeg:$h,isPowerOfTwo:Kh,ceilPowerOfTwo:jh,floorPowerOfTwo:Qh,setQuaternionFromProperEuler:tu,normalize:Xe,denormalize:$i},ee=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*y,E=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){let I=Math.sqrt(w),L=Math.atan2(I,f*E);m=Math.sin(m*L)/I,a=Math.sin(a*L)/I}let T=a*E;if(l=l*m+d*T,c=c*m+p*T,h=h*m+g*T,u=u*m+y*T,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ua.copy(this).projectOnVector(t),this.sub(ua)}reflect(t){return this.sub(ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ua=new Y,Uc=new qe,Kt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],y=s[0],m=s[3],f=s[6],E=s[1],w=s[4],T=s[7],I=s[2],L=s[5],B=s[8];return r[0]=o*y+a*E+l*I,r[3]=o*m+a*w+l*L,r[6]=o*f+a*T+l*B,r[1]=c*y+h*E+u*I,r[4]=c*m+h*w+u*L,r[7]=c*f+h*T+u*B,r[2]=d*y+p*E+g*I,r[5]=d*m+p*w+g*L,r[8]=d*f+p*T+g*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(da.makeScale(t,e)),this}rotate(t){return this.premultiply(da.makeRotation(-t)),this}translate(t,e){return this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},da=new Kt;function cc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gl(){let i=Us("canvas");return i.style.display="block",i}var Nc={};function ts(i){i in Nc||(Nc[i]=!0,console.warn(i))}function Wl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Fc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eu(){let i={enabled:!0,workingColorSpace:Si,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?Ls:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Si]:{primaries:t,whitePoint:n,transfer:Ls,toXYZ:Fc,fromXYZ:Bc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:Fc,fromXYZ:Bc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),i}var se=eu();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bi,Hr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bi===void 0&&(Bi=Us("canvas")),Bi.width=t.width,Bi.height=t.height;let s=Bi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Us("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nu=0,es=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fa(s[o].image)):r.push(fa(s[o]))}else r=fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var iu=0,pa=new Y,Ye=class i extends Xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=si,s=si,r=Sn,o=li,a=dn,l=wn,c=i.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=us(),this.name="",this.source=new es(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pa).x}get height(){return this.source.getSize(pa).y}get depth(){return this.source.getSize(pa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$a)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mi:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mi:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=$a;Ye.DEFAULT_ANISOTROPY=1;var fe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,T=(p+1)/2,I=(f+1)/2,L=(h+d)/4,B=(u+y)/4,F=(g+m)/4;return w>T&&w>I?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=L/n,r=B/n):T>I?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=L/s,r=F/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=B/r,s=F/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-y)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gr=class extends Xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Ye(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new es(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Gr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ns=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wr=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(t.matrixWorld),this.union(mr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),gr.subVectors(this.max,bs),Oi.subVectors(t.a,bs),zi.subVectors(t.b,bs),ki.subVectors(t.c,bs),Kn.subVectors(zi,Oi),jn.subVectors(ki,zi),pi.subVectors(Oi,ki);let e=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-pi.z,pi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,pi.z,0,-pi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-pi.y,pi.x,0];return!ma(e,Oi,zi,ki,gr)||(e=[1,0,0,0,1,0,0,0,1],!ma(e,Oi,zi,ki,gr))?!1:(_r.crossVectors(Kn,jn),e=[_r.x,_r.y,_r.z],ma(e,Oi,zi,ki,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],_n=new Y,mr=new Pn,Oi=new Y,zi=new Y,ki=new Y,Kn=new Y,jn=new Y,pi=new Y,bs=new Y,gr=new Y,_r=new Y,mi=new Y;function ma(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);let a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var su=new Pn,Ts=new Y,ga=new Y,qn=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):su.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);let e=Ts.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(ga)),this.expandByPoint(Ts.copy(t.center).sub(ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},kn=new Y,_a=new Y,xr=new Y,Qn=new Y,xa=new Y,vr=new Y,va=new Y,Fs=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_a.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(_a);let r=t.distanceTo(e)*.5,o=-this.direction.dot(xr),a=Qn.dot(this.direction),l=-Qn.dot(xr),c=Qn.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_a).addScaledVector(xr,d),p}intersectSphere(t,e){kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){xa.subVectors(e,t),vr.subVectors(n,t),va.crossVectors(xa,vr);let o=this.direction.dot(va),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);let l=a*this.direction.dot(vr.crossVectors(Qn,vr));if(l<0)return null;let c=a*this.direction.dot(xa.cross(Qn));if(c<0||l+c>o)return null;let h=-a*Qn.dot(va);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d+y*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ru,t,ou)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ti.crossVectors(n,en),ti.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ti.crossVectors(n,en)),ti.normalize(),yr.crossVectors(en,ti),s[0]=ti.x,s[4]=yr.x,s[8]=en.x,s[1]=ti.y,s[5]=yr.y,s[9]=en.y,s[2]=ti.z,s[6]=yr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],E=n[3],w=n[7],T=n[11],I=n[15],L=s[0],B=s[4],F=s[8],b=s[12],M=s[1],V=s[5],O=s[9],X=s[13],$=s[2],j=s[6],J=s[10],ft=s[14],tt=s[3],pt=s[7],dt=s[11],yt=s[15];return r[0]=o*L+a*M+l*$+c*tt,r[4]=o*B+a*V+l*j+c*pt,r[8]=o*F+a*O+l*J+c*dt,r[12]=o*b+a*X+l*ft+c*yt,r[1]=h*L+u*M+d*$+p*tt,r[5]=h*B+u*V+d*j+p*pt,r[9]=h*F+u*O+d*J+p*dt,r[13]=h*b+u*X+d*ft+p*yt,r[2]=g*L+y*M+m*$+f*tt,r[6]=g*B+y*V+m*j+f*pt,r[10]=g*F+y*O+m*J+f*dt,r[14]=g*b+y*X+m*ft+f*yt,r[3]=E*L+w*M+T*$+I*tt,r[7]=E*B+w*V+T*j+I*pt,r[11]=E*F+w*O+T*J+I*dt,r[15]=E*b+w*X+T*ft+I*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+y*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],E=u*m*c-y*d*c+y*l*p-a*m*p-u*l*f+a*d*f,w=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,T=h*y*c-g*u*c+g*a*p-o*y*p-h*a*f+o*u*f,I=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,L=e*E+n*w+s*T+r*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return t[0]=E*B,t[1]=(y*d*r-u*m*r-y*s*p+n*m*p+u*s*f-n*d*f)*B,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*f+n*l*f)*B,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*B,t[4]=w*B,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*B,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*B,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*B,t[8]=T*B,t[9]=(g*u*r-h*y*r-g*n*p+e*y*p+h*n*f-e*u*f)*B,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*f+e*a*f)*B,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*B,t[12]=I*B,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*m+e*u*m)*B,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*m-e*a*m)*B,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,y=o*h,m=o*u,f=a*u,E=l*c,w=l*h,T=l*u,I=n.x,L=n.y,B=n.z;return s[0]=(1-(y+f))*I,s[1]=(p+T)*I,s[2]=(g-w)*I,s[3]=0,s[4]=(p-T)*L,s[5]=(1-(d+f))*L,s[6]=(m+E)*L,s[7]=0,s[8]=(g+w)*B,s[9]=(m-E)*B,s[10]=(1-(d+y))*B,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Vi.set(s[0],s[1],s[2]).length(),o=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);let c=1/r,h=1/o,u=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=yn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===yn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ds)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=yn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===yn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ds)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Vi=new Y,xn=new ae,ru=new Y(0,0,0),ou=new Y(1,1,1),ti=new Y,yr=new Y,en=new Y,Oc=new ae,zc=new qe,bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zc.setFromEuler(this),this.setFromQuaternion(zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},au=0,kc=new Y,Hi=new qe,Vn=new ae,Mr=new Y,ws=new Y,cu=new Y,lu=new qe,Vc=new Y(1,0,0),Hc=new Y(0,1,0),Gc=new Y(0,0,1),Wc={type:"added"},hu={type:"removed"},Gi={type:"childadded",child:null},ya={type:"childremoved",child:null},Ee=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Y,e=new bn,n=new qe,s=new Y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Kt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Vc,t)}rotateY(t){return this.rotateOnAxis(Hc,t)}rotateZ(t){return this.rotateOnAxis(Gc,t)}translateOnAxis(t,e){return kc.copy(t).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vc,t)}translateY(t){return this.translateOnAxis(Hc,t)}translateZ(t){return this.translateOnAxis(Gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(ws,Mr,this.up):Vn.lookAt(Mr,ws,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hu),ya.child=t,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ee.DEFAULT_UP=new Y(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new Y,Hn=new Y,Ma=new Y,Gn=new Y,Wi=new Y,Xi=new Y,Xc=new Y,Sa=new Y,ba=new Y,Ta=new Y,wa=new fe,Ea=new fe,Aa=new fe,ii=class i{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Hn.subVectors(n,e),Ma.subVectors(t,e);let o=vn.dot(vn),a=vn.dot(Hn),l=vn.dot(Ma),c=Hn.dot(Hn),h=Hn.dot(Ma),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return wa.setScalar(0),Ea.setScalar(0),Aa.setScalar(0),wa.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,n),Aa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(wa,r.x),o.addScaledVector(Ea,r.y),o.addScaledVector(Aa,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Hn.subVectors(t,e),vn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),vn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Wi.subVectors(s,n),Xi.subVectors(r,n),Sa.subVectors(t,n);let l=Wi.dot(Sa),c=Xi.dot(Sa);if(l<=0&&c<=0)return e.copy(n);ba.subVectors(t,s);let h=Wi.dot(ba),u=Xi.dot(ba);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Wi,o);Ta.subVectors(t,r);let p=Wi.dot(Ta),g=Xi.dot(Ta);if(g>=0&&p<=g)return e.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Xi,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Xc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Xc,a);let f=1/(m+y+d);return o=y*f,a=d*f,e.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=ac(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ca(o,r,t+1/3),this.g=Ca(o,r,t),this.b=Ca(o,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=Xl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return se.workingToColorSpace(Ve.copy(this),t),Math.round(te(Ve.r*255,0,255))*65536+Math.round(te(Ve.g*255,0,255))*256+Math.round(te(Ve.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Ve.copy(this),e);let n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=we){se.workingToColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,s=Ve.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Sr);let n=Is(ei.h,Sr.h,e),s=Is(ei.s,Sr.s,e),r=Is(ei.l,Sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Ct;Ct.NAMES=Xl;var uu=0,Yn=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=us(),this.name="",this.type="Material",this.blending=vi,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Or,this.blendDst=zr,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Or&&(n.blendSrc=this.blendSrc),this.blendDst!==zr&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==za&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},bi=class extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Re=new Y,br=new ee,du=0,Te=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:du++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ka,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ka&&(t.usage=this.usage),t}};var Os=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var zs=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},fu=0,cn=new ae,Ra=new Ee,qi=new Y,nn=new Pn,Es=new Pn,Fe=new Y,Me=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cc(t)?zs:Os)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new re(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(nn.min,Es.min),nn.expandByPoint(Fe),Fe.addVectors(nn.max,Es.max),nn.expandByPoint(Fe)):(nn.expandByPoint(Es.min),nn.expandByPoint(Es.max))}nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Fe.fromBufferAttribute(a,c),l&&(qi.fromBufferAttribute(t,c),Fe.add(qi)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new Y,l[F]=new Y;let c=new Y,h=new Y,u=new Y,d=new ee,p=new ee,g=new ee,y=new Y,m=new Y;function f(F,b,M){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,F),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let V=1/(p.x*g.y-g.x*p.y);isFinite(V)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(V),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(V),a[F].add(y),a[b].add(y),a[M].add(y),l[F].add(m),l[b].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let F=0,b=E.length;F<b;++F){let M=E[F],V=M.start,O=M.count;for(let X=V,$=V+O;X<$;X+=3)f(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let w=new Y,T=new Y,I=new Y,L=new Y;function B(F){I.fromBufferAttribute(s,F),L.copy(I);let b=a[F];w.copy(b),w.sub(I.multiplyScalar(I.dot(b))).normalize(),T.crossVectors(L,b);let V=T.dot(l[F])<0?-1:1;o.setXYZW(F,w.x,w.y,w.z,V)}for(let F=0,b=E.length;F<b;++F){let M=E[F],V=M.start,O=M.count;for(let X=V,$=V+O;X<$;X+=3)B(t.getX(X+0)),B(t.getX(X+1)),B(t.getX(X+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,h=new Y,u=new Y;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Te(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qc=new ae,gi=new Fs,Tr=new qn,Yc=new Y,wr=new Y,Er=new Y,Ar=new Y,Ia=new Y,Cr=new Y,Zc=new Y,Rr=new Y,de=class extends Ee{constructor(t=new Me,e=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ia.fromBufferAttribute(u,t),o?Cr.addScaledVector(Ia,h):Cr.addScaledVector(Ia.sub(e),h))}e.add(Cr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(Tr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Tr,Yc)===null||gi.origin.distanceToSquared(Yc)>(t.far-t.near)**2))&&(qc.copy(r).invert(),gi.copy(t.ray).applyMatrix4(qc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=E,I=w;T<I;T+=3){let L=a.getX(T),B=a.getX(T+1),F=a.getX(T+2);s=Ir(this,f,t,n,c,h,u,L,B,F),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let E=a.getX(m),w=a.getX(m+1),T=a.getX(m+2);s=Ir(this,o,t,n,c,h,u,E,w,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=E,I=w;T<I;T+=3){let L=T,B=T+1,F=T+2;s=Ir(this,f,t,n,c,h,u,L,B,F),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let E=m,w=m+1,T=m+2;s=Ir(this,o,t,n,c,h,u,E,w,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function pu(i,t,e,n,s,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Mn,a),l===null)return null;Rr.copy(a),Rr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Rr);return c<e.near||c>e.far?null:{distance:c,point:Rr.clone(),object:i}}function Ir(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,wr),i.getVertexPosition(l,Er),i.getVertexPosition(c,Ar);let h=pu(i,t,e,n,wr,Er,Ar,Zc);if(h){let u=new Y;ii.getBarycoord(Zc,wr,Er,Ar,u),s&&(h.uv=ii.getInterpolatedAttribute(s,a,l,c,u,new ee)),r&&(h.uv1=ii.getInterpolatedAttribute(r,a,l,c,u,new ee)),o&&(h.normal=ii.getInterpolatedAttribute(o,a,l,c,u,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new Y,materialIndex:0};ii.getNormal(wr,Er,Ar,d.normal),h.face=d,h.barycoord=u}return h}var Ln=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(y,m,f,E,w,T,I,L,B,F,b){let M=T/B,V=I/F,O=T/2,X=I/2,$=L/2,j=B+1,J=F+1,ft=0,tt=0,pt=new Y;for(let dt=0;dt<J;dt++){let yt=dt*V-X;for(let Nt=0;Nt<j;Nt++){let Et=Nt*M-O;pt[y]=Et*E,pt[m]=yt*w,pt[f]=$,c.push(pt.x,pt.y,pt.z),pt[y]=0,pt[m]=0,pt[f]=L>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(Nt/B),u.push(1-dt/F),ft+=1}}for(let dt=0;dt<F;dt++)for(let yt=0;yt<B;yt++){let Nt=d+yt+j*dt,Et=d+yt+j*(dt+1),qt=d+(yt+1)+j*(dt+1),Xt=d+(yt+1)+j*dt;l.push(Nt,Et,Xt),l.push(Et,qt,Xt),tt+=6}a.addGroup(p,tt,b),p+=tt,d+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ii(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=Ii(i[e]);for(let s in n)t[s]=n[s]}return t}function mu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var ar={clone:Ii,merge:He},gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oe=class extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gu,this.fragmentShader=_u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ks=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new Y,Jc=new ee,$c=new ee,Be=class extends ks{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Jc,$c),e.subVectors($c,Jc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Yi=-90,Zi=1,Xr=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(Yi,Zi,t,e);s.layers=this.layers,this.add(s);let r=new Be(Yi,Zi,t,e);r.layers=this.layers,this.add(r);let o=new Be(Yi,Zi,t,e);o.layers=this.layers,this.add(o);let a=new Be(Yi,Zi,t,e);a.layers=this.layers,this.add(a);let l=new Be(Yi,Zi,t,e);l.layers=this.layers,this.add(l);let c=new Be(Yi,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Vs=class extends Ye{constructor(t=[],e=Ai,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qr=class extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ln(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Zn});r.uniforms.tEquirect.value=e;let o=new de(s,r),a=e.minFilter;return e.minFilter===li&&(e.minFilter=Sn),new Xr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Pe=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},xu={type:"move"},ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Hs=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Gs=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Yr=class extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,l,c=$e,h=$e,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var is=class extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ji=new ae,Kc=new ae,Pr=[],jc=new Pn,vu=new ae,As=new de,Cs=new qn,Ti=class extends de{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),jc.copy(t.boundingBox).applyMatrix4(Ji),this.boundingBox.union(jc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),Cs.copy(t.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),t.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ji),Kc.multiplyMatrices(n,Ji),As.matrixWorld=Kc,As.raycast(t,Pr);for(let o=0,a=Pr.length;o<a;o++){let l=Pr[o];l.instanceId=r,l.object=this,e.push(l)}Pr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yr(new Float32Array(s*this.count),s,this.count,bo,En));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Pa=new Y,yu=new Y,Mu=new Kt,ln=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Pa.subVectors(n,e).cross(yu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mu.getNormalMatrix(t),s=this.coplanarPoint(Pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new qn,Su=new ee(.5,.5),Lr=new Y,ss=class{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,o=new ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],y=r[9],m=r[10],f=r[11],E=r[12],w=r[13],T=r[14],I=r[15];if(s[0].setComponents(c-o,p-h,f-g,I-E).normalize(),s[1].setComponents(c+o,p+h,f+g,I+E).normalize(),s[2].setComponents(c+a,p+u,f+y,I+w).normalize(),s[3].setComponents(c-a,p-u,f-y,I-w).normalize(),n)s[4].setComponents(l,d,m,T).normalize(),s[5].setComponents(c-l,p-d,f-m,I-T).normalize();else if(s[4].setComponents(c-l,p-d,f-m,I-T).normalize(),e===yn)s[5].setComponents(c+l,p+d,f+m,I+T).normalize();else if(e===Ds)s[5].setComponents(l,d,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){_i.center.set(0,0,0);let e=Su.distanceTo(t.center);return _i.radius=.7071067811865476+e,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Lr.x=s.normal.x>0?t.max.x:t.min.x,Lr.y=s.normal.y>0?t.max.y:t.min.y,Lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zr=class extends Yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qc=new ae,Va=new Fs,Dr=new qn,Ur=new Y,Ws=class extends Ee{constructor(t=new Me,e=new Zr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;Qc.copy(s).invert(),Va.copy(t.ray).applyMatrix4(Qc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,y=p;g<y;g++){let m=c.getX(g);Ur.fromBufferAttribute(u,m),tl(Ur,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,y=p;g<y;g++)Ur.fromBufferAttribute(u,g),tl(Ur,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function tl(i,t,e,n,s,r,o){let a=Va.distanceSqToPoint(i);if(a<e){let l=new Y;Va.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Dn=class extends Ye{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xs=class extends Ye{constructor(t,e,n=hi,s,r,o,a=$e,l=$e,c,h=ji,u=1){if(h!==ji&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new es(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qs=class extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var sn=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,y=[],m=n/2,f=0;E(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(p,2));function E(){let T=new Y,I=new Y,L=0,B=(e-t)/n;for(let F=0;F<=r;F++){let b=[],M=F/r,V=M*(e-t)+t;for(let O=0;O<=s;O++){let X=O/s,$=X*l+a,j=Math.sin($),J=Math.cos($);I.x=V*j,I.y=-M*n+m,I.z=V*J,u.push(I.x,I.y,I.z),T.set(j,B,J).normalize(),d.push(T.x,T.y,T.z),p.push(X,1-M),b.push(g++)}y.push(b)}for(let F=0;F<s;F++)for(let b=0;b<r;b++){let M=y[b][F],V=y[b+1][F],O=y[b+1][F+1],X=y[b][F+1];(t>0||b!==0)&&(h.push(M,V,X),L+=3),(e>0||b!==r-1)&&(h.push(V,O,X),L+=3)}c.addGroup(f,L,0),f+=L}function w(T){let I=g,L=new ee,B=new Y,F=0,b=T===!0?t:e,M=T===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;let V=g;for(let O=0;O<=s;O++){let $=O/s*l+a,j=Math.cos($),J=Math.sin($);B.x=b*J,B.y=m*M,B.z=b*j,u.push(B.x,B.y,B.z),d.push(0,M,0),L.x=j*.5+.5,L.y=J*.5*M+.5,p.push(L.x,L.y),g++}for(let O=0;O<s;O++){let X=I+O,$=V+O;T===!0?h.push($,$+1,X):h.push($+1,$,X),F+=3}c.addGroup(f,F,T===!0?1:2),f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ys=class i extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let w=new Y,T=new Y,I=new Y;for(let L=0;L<e.length;L+=3)p(e[L+0],w),p(e[L+1],T),p(e[L+2],I),l(w,T,I,E)}function l(E,w,T,I){let L=I+1,B=[];for(let F=0;F<=L;F++){B[F]=[];let b=E.clone().lerp(T,F/L),M=w.clone().lerp(T,F/L),V=L-F;for(let O=0;O<=V;O++)O===0&&F===L?B[F][O]=b:B[F][O]=b.clone().lerp(M,O/V)}for(let F=0;F<L;F++)for(let b=0;b<2*(L-F)-1;b++){let M=Math.floor(b/2);b%2===0?(d(B[F][M+1]),d(B[F+1][M]),d(B[F][M])):(d(B[F][M+1]),d(B[F+1][M+1]),d(B[F+1][M]))}}function c(E){let w=new Y;for(let T=0;T<r.length;T+=3)w.x=r[T+0],w.y=r[T+1],w.z=r[T+2],w.normalize().multiplyScalar(E),r[T+0]=w.x,r[T+1]=w.y,r[T+2]=w.z}function h(){let E=new Y;for(let w=0;w<r.length;w+=3){E.x=r[w+0],E.y=r[w+1],E.z=r[w+2];let T=m(E)/2/Math.PI+.5,I=f(E)/Math.PI+.5;o.push(T,1-I)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){let w=o[E+0],T=o[E+2],I=o[E+4],L=Math.max(w,T,I),B=Math.min(w,T,I);L>.9&&B<.1&&(w<.2&&(o[E+0]+=1),T<.2&&(o[E+2]+=1),I<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function p(E,w){let T=E*3;w.x=t[T+0],w.y=t[T+1],w.z=t[T+2]}function g(){let E=new Y,w=new Y,T=new Y,I=new Y,L=new ee,B=new ee,F=new ee;for(let b=0,M=0;b<r.length;b+=9,M+=6){E.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),T.set(r[b+6],r[b+7],r[b+8]),L.set(o[M+0],o[M+1]),B.set(o[M+2],o[M+3]),F.set(o[M+4],o[M+5]),I.copy(E).add(w).add(T).divideScalar(3);let V=m(I);y(L,M+0,E,V),y(B,M+2,w,V),y(F,M+4,T,V)}}function y(E,w,T,I){I<0&&E.x===1&&(o[w]=E.x-1),T.x===0&&T.z===0&&(o[w]=I/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Zs=class i extends Ys{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Jr=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ee:new Y);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Y,s=[],r=[],o=[],a=new Y,l=new ae;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new Y)}r[0]=new Y,o[0]=new Y;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function hc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Nr=new Y,La=new hc,Da=new hc,Ua=new hc,rs=class extends Jr{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new Y){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Nr.subVectors(s[0],s[1]).add(s[0]),c=Nr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Nr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Nr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),La.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),Da.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),Ua.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(La.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Da.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ua.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(La.calc(l),Da.calc(l),Ua.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Y().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var wi=class i extends Ys{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},un=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let E=f*d-o;for(let w=0;w<c;w++){let T=w*u-r;g.push(T,-E,0),y.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){let w=E+c*f,T=E+c*(f+1),I=E+1+c*(f+1),L=E+1+c*f;p.push(w,T,L),p.push(T,I,L)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(y,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var oi=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new Y,d=new Y,p=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){let E=[],w=f/n,T=0;f===0&&o===0?T=.5/e:f===n&&l===Math.PI&&(T=-.5/e);for(let I=0;I<=e;I++){let L=I/e;u.x=-t*Math.cos(s+L*r)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(s+L*r)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(L+T,1-w),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){let w=h[f][E+1],T=h[f][E],I=h[f+1][E],L=h[f+1][E+1];(f!==0||o>0)&&p.push(w,T,L),(f!==n-1||l<Math.PI)&&p.push(T,I,L)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(y,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var os=class i extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new Y,u=new Y,d=new Y;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(y,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Tn=class extends Yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var $r=class extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Kr=class extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Fr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function bu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ei=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jr=class extends Ei{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fa,endingEnd:Fa}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ba:r=t,a=2*e-n;break;case Oa:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ba:o=t,l=2*n-e;break;case Oa:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,E=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,w=(-1-p)*m+(1.5+p)*y+.5*g,T=p*m-p*y;for(let I=0;I!==a;++I)r[I]=f*o[h+I]+E*o[c+I]+w*o[l+I]+T*o[u+I];return r}},Qr=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},to=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fr(e,this.TimeBufferType),this.values=Fr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Fr(t.times,Array),values:Fr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new to(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ps:e=this.InterpolantFactoryMethodDiscrete;break;case Vr:e=this.InterpolantFactoryMethodLinear;break;case Br:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return Br}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&bu(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Br,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Vr;var ai=class extends rn{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Ps;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};eo.prototype.ValueTypeName="color";var no=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};no.prototype.ValueTypeName="number";var io=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)qe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Js=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends rn{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Ps;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};so.prototype.ValueTypeName="vector";var ro=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ql=new ro,oo=class{constructor(t){this.manager=t!==void 0?t:ql,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var $s=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ks=class extends $s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Na=new ae,el=new Y,nl=new Y,Ha=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ss,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;el.setFromMatrixPosition(t.matrixWorld),e.position.copy(el),nl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nl),e.updateMatrixWorld(),Na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var js=class extends ks{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ga=class extends Ha{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends $s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Ga}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ao=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var uc="\\[\\]\\.:\\/",Tu=new RegExp("["+uc+"]","g"),dc="[^"+uc+"]",wu="[^"+uc.replace("\\.","")+"]",Eu=/((?:WC+[\/:])*)/.source.replace("WC",dc),Au=/(WCOD+)?/.source.replace("WCOD",wu),Cu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dc),Ru=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dc),Iu=new RegExp("^"+Eu+Au+Cu+Ru+"$"),Pu=["material","materials","bones","map"],Wa=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tu,"")}static parseTrackName(t){let e=Iu.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=Wa;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ig=new Float32Array(1);function fc(i,t,e,n){let s=Lu(n);switch(e){case ec:return i*t;case bo:return i*t/s.components*s.byteLength;case To:return i*t/s.components*s.byteLength;case ic:return i*t*2/s.components*s.byteLength;case wo:return i*t*2/s.components*s.byteLength;case nc:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case Eo:return i*t*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rr:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:case Io:return Math.max(i,16)*Math.max(t,8)/4;case Ao:case Ro:return Math.max(i,8)*Math.max(t,8)/2;case Po:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zo:case Jo:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ko:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qo:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lu(i){switch(i){case wn:case Ka:return{byteLength:1,components:1};case as:case ja:case cs:return{byteLength:2,components:1};case Mo:case So:return{byteLength:2,components:4};case hi:case yo:case En:return{byteLength:4,components:1};case Qa:case tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function gh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zu(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ku=`#ifdef USE_ALPHAHASH
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
}`,Qt={alphahash_fragment:ku,alphahash_pars_fragment:Vu,alphamap_fragment:Hu,alphamap_pars_fragment:Gu,alphatest_fragment:Wu,alphatest_pars_fragment:Xu,aomap_fragment:qu,aomap_pars_fragment:Yu,batching_pars_vertex:Zu,batching_vertex:Ju,begin_vertex:$u,beginnormal_vertex:Ku,bsdfs:ju,iridescence_fragment:Qu,bumpmap_pars_fragment:td,clipping_planes_fragment:ed,clipping_planes_pars_fragment:nd,clipping_planes_pars_vertex:id,clipping_planes_vertex:sd,color_fragment:rd,color_pars_fragment:od,color_pars_vertex:ad,color_vertex:cd,common:ld,cube_uv_reflection_fragment:hd,defaultnormal_vertex:ud,displacementmap_pars_vertex:dd,displacementmap_vertex:fd,emissivemap_fragment:pd,emissivemap_pars_fragment:md,colorspace_fragment:gd,colorspace_pars_fragment:_d,envmap_fragment:xd,envmap_common_pars_fragment:vd,envmap_pars_fragment:yd,envmap_pars_vertex:Md,envmap_physical_pars_fragment:Ld,envmap_vertex:Sd,fog_vertex:bd,fog_pars_vertex:Td,fog_fragment:wd,fog_pars_fragment:Ed,gradientmap_pars_fragment:Ad,lightmap_pars_fragment:Cd,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Id,lights_pars_begin:Pd,lights_toon_fragment:Dd,lights_toon_pars_fragment:Ud,lights_phong_fragment:Nd,lights_phong_pars_fragment:Fd,lights_physical_fragment:Bd,lights_physical_pars_fragment:Od,lights_fragment_begin:zd,lights_fragment_maps:kd,lights_fragment_end:Vd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Gd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Xd,map_fragment:qd,map_pars_fragment:Yd,map_particle_fragment:Zd,map_particle_pars_fragment:Jd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Kd,morphinstance_vertex:jd,morphcolor_vertex:Qd,morphnormal_vertex:tf,morphtarget_pars_vertex:ef,morphtarget_vertex:nf,normal_fragment_begin:sf,normal_fragment_maps:rf,normal_pars_fragment:of,normal_pars_vertex:af,normal_vertex:cf,normalmap_pars_fragment:lf,clearcoat_normal_fragment_begin:hf,clearcoat_normal_fragment_maps:uf,clearcoat_pars_fragment:df,iridescence_pars_fragment:ff,opaque_fragment:pf,packing:mf,premultiplied_alpha_fragment:gf,project_vertex:_f,dithering_fragment:xf,dithering_pars_fragment:vf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:Mf,shadowmap_pars_fragment:Sf,shadowmap_pars_vertex:bf,shadowmap_vertex:Tf,shadowmask_pars_fragment:wf,skinbase_vertex:Ef,skinning_pars_vertex:Af,skinning_vertex:Cf,skinnormal_vertex:Rf,specularmap_fragment:If,specularmap_pars_fragment:Pf,tonemapping_fragment:Lf,tonemapping_pars_fragment:Df,transmission_fragment:Uf,transmission_pars_fragment:Nf,uv_pars_fragment:Ff,uv_pars_vertex:Bf,uv_vertex:Of,worldpos_vertex:zf,background_vert:kf,background_frag:Vf,backgroundCube_vert:Hf,backgroundCube_frag:Gf,cube_vert:Wf,cube_frag:Xf,depth_vert:qf,depth_frag:Yf,distanceRGBA_vert:Zf,distanceRGBA_frag:Jf,equirect_vert:$f,equirect_frag:Kf,linedashed_vert:jf,linedashed_frag:Qf,meshbasic_vert:tp,meshbasic_frag:ep,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:sp,meshmatcap_frag:rp,meshnormal_vert:op,meshnormal_frag:ap,meshphong_vert:cp,meshphong_frag:lp,meshphysical_vert:hp,meshphysical_frag:up,meshtoon_vert:dp,meshtoon_frag:fp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:_p,sprite_vert:xp,sprite_frag:vp},At={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Nn={basic:{uniforms:He([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:He([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:He([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:He([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:He([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:He([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:He([At.points,At.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:He([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:He([At.common,At.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:He([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:He([At.sprite,At.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:He([At.common,At.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:He([At.lights,At.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Nn.physical={uniforms:He([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var ea={r:0,b:0,g:0},Pi=new bn,yp=new ae;function Mp(i,t,e,n,s,r,o){let a=new Ct(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?e:t).get(T)),T}function y(w){let T=!1,I=g(w);I===null?f(a,l):I&&I.isColor&&(f(I,1),T=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,T){let I=g(T);I&&(I.isCubeTexture||I.mapping===er)?(h===void 0&&(h=new de(new Ln(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:Ii(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,B,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Pi.copy(T.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yp.makeRotationFromEuler(Pi)),h.material.toneMapped=se.getTransfer(I.colorSpace)!==ce,(u!==I||d!==I.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=I,d=I.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new de(new un(2,2),new Oe({name:"BackgroundMaterial",uniforms:Ii(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=se.getTransfer(I.colorSpace)!==ce,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||d!==I.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=I,d=I.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,T){w.getRGB(ea,lc(i)),n.buffers.color.setClear(ea.r,ea.g,ea.b,T,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,T=1){a.set(w),l=T,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(a,l)},render:y,addToRenderList:m,dispose:E}}function Sp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,V,O,X,$){let j=!1,J=u(X,O,V);r!==J&&(r=J,c(r.object)),j=p(M,X,O,$),j&&g(M,X,O,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,T(M,V,O,X),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,V,O){let X=O.wireframe===!0,$=n[M.id];$===void 0&&($={},n[M.id]=$);let j=$[V.id];j===void 0&&(j={},$[V.id]=j);let J=j[X];return J===void 0&&(J=d(l()),j[X]=J),J}function d(M){let V=[],O=[],X=[];for(let $=0;$<e;$++)V[$]=0,O[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:O,attributeDivisors:X,object:M,attributes:{},index:null}}function p(M,V,O,X){let $=r.attributes,j=V.attributes,J=0,ft=O.getAttributes();for(let tt in ft)if(ft[tt].location>=0){let dt=$[tt],yt=j[tt];if(yt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),dt===void 0||dt.attribute!==yt||yt&&dt.data!==yt.data)return!0;J++}return r.attributesNum!==J||r.index!==X}function g(M,V,O,X){let $={},j=V.attributes,J=0,ft=O.getAttributes();for(let tt in ft)if(ft[tt].location>=0){let dt=j[tt];dt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));let yt={};yt.attribute=dt,dt&&dt.data&&(yt.data=dt.data),$[tt]=yt,J++}r.attributes=$,r.attributesNum=J,r.index=X}function y(){let M=r.newAttributes;for(let V=0,O=M.length;V<O;V++)M[V]=0}function m(M){f(M,0)}function f(M,V){let O=r.newAttributes,X=r.enabledAttributes,$=r.attributeDivisors;O[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),$[M]!==V&&(i.vertexAttribDivisor(M,V),$[M]=V)}function E(){let M=r.newAttributes,V=r.enabledAttributes;for(let O=0,X=V.length;O<X;O++)V[O]!==M[O]&&(i.disableVertexAttribArray(O),V[O]=0)}function w(M,V,O,X,$,j,J){J===!0?i.vertexAttribIPointer(M,V,O,$,j):i.vertexAttribPointer(M,V,O,X,$,j)}function T(M,V,O,X){y();let $=X.attributes,j=O.getAttributes(),J=V.defaultAttributeValues;for(let ft in j){let tt=j[ft];if(tt.location>=0){let pt=$[ft];if(pt===void 0&&(ft==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),ft==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),pt!==void 0){let dt=pt.normalized,yt=pt.itemSize,Nt=t.get(pt);if(Nt===void 0)continue;let Et=Nt.buffer,qt=Nt.type,Xt=Nt.bytesPerElement,lt=qt===i.INT||qt===i.UNSIGNED_INT||pt.gpuType===yo;if(pt.isInterleavedBufferAttribute){let ut=pt.data,Mt=ut.stride,Ft=pt.offset;if(ut.isInstancedInterleavedBuffer){for(let rt=0;rt<tt.locationSize;rt++)f(tt.location+rt,ut.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let rt=0;rt<tt.locationSize;rt++)m(tt.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let rt=0;rt<tt.locationSize;rt++)w(tt.location+rt,yt/tt.locationSize,qt,dt,Mt*Xt,(Ft+yt/tt.locationSize*rt)*Xt,lt)}else{if(pt.isInstancedBufferAttribute){for(let ut=0;ut<tt.locationSize;ut++)f(tt.location+ut,pt.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ut=0;ut<tt.locationSize;ut++)m(tt.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let ut=0;ut<tt.locationSize;ut++)w(tt.location+ut,yt/tt.locationSize,qt,dt,yt*Xt,yt/tt.locationSize*ut*Xt,lt)}}else if(J!==void 0){let dt=J[ft];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(tt.location,dt);break;case 3:i.vertexAttrib3fv(tt.location,dt);break;case 4:i.vertexAttrib4fv(tt.location,dt);break;default:i.vertexAttrib1fv(tt.location,dt)}}}}E()}function I(){F();for(let M in n){let V=n[M];for(let O in V){let X=V[O];for(let $ in X)h(X[$].object),delete X[$];delete V[O]}delete n[M]}}function L(M){if(n[M.id]===void 0)return;let V=n[M.id];for(let O in V){let X=V[O];for(let $ in X)h(X[$].object),delete X[$];delete V[O]}delete n[M.id]}function B(M){for(let V in n){let O=n[V];if(O[M.id]===void 0)continue;let X=O[M.id];for(let $ in X)h(X[$].object),delete X[$];delete O[M.id]}}function F(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:B,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function bp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let B=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(B){return!(B!==dn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(B){let F=B===cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==wn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==En&&!F)}function l(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:T,vertexTextures:I,maxSamples:L}}function wp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ln,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,w=E*4,T=f.clippingState||null;l.value=T,T=h(g,d,w,p);for(let I=0;I!==w;++I)T[I]=e[I];f.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,T=p;w!==y;++w,T+=4)o.copy(u[w]).applyMatrix4(E,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Ep(i){let t=new WeakMap;function e(o,a){return a===_o?o.mapping=Ai:a===xo&&(o.mapping=Ci),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===_o||a===xo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new qr(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fs=4,Yl=[.125,.215,.35,.446,.526,.582],Ui=20,pc=new js,Zl=new Ct,mc=null,gc=0,_c=0,xc=!1,Di=(1+Math.sqrt(5))/2,ds=1/Di,Jl=[new Y(-Di,ds,0),new Y(Di,ds,0),new Y(-ds,0,Di),new Y(ds,0,Di),new Y(0,Di,-ds),new Y(0,Di,ds),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],Ap=new Y,sa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ap}=r;mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mc,gc,_c),this._renderer.xr.enabled=xc,t.scissorTest=!1,na(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:cs,format:dn,colorSpace:Si,depthBuffer:!1},s=$l(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(r)),this._blurMaterial=Rp(r,t,e)}return s}_compileMaterial(t){let e=new de(this._lodPlanes[0],t);this._renderer.compile(e,pc)}_sceneToCubeUV(t,e,n,s,r){let l=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Zl),u.toneMapping=Jn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let y=new bi({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),m=new de(new Ln,y),f=!1,E=t.background;E?E.isColor&&(y.color.copy(E),t.background=null,f=!0):(y.color.copy(Zl),f=!0);for(let w=0;w<6;w++){let T=w%3;T===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):T===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let I=this._cubeSize;na(s,T*I,w>2?I:0,I,I),u.setRenderTarget(s),f&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ai||t.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;na(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jl[(s-r-1)%Jl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ui-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);let f=[],E=0;for(let B=0;B<Ui;++B){let F=B/y,b=Math.exp(-F*F/2);f.push(b),B===0?E+=b:B<m&&(E+=2*b)}for(let B=0;B<f.length;B++)f[B]=f[B]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;let T=this._sizeLods[s],I=3*T*(s>w-fs?s-w+fs:0),L=4*(this._cubeSize-T);na(e,I,L,3*T,2*T),l.setRenderTarget(e),l.render(u,pc)}};function Cp(i){let t=[],e=[],n=[],s=i,r=i-fs+1+Yl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-fs?l=Yl[o-i+fs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,E=new Float32Array(y*g*p),w=new Float32Array(m*g*p),T=new Float32Array(f*g*p);for(let L=0;L<p;L++){let B=L%3*2/3-1,F=L>2?0:-1,b=[B,F,0,B+2/3,F,0,B+2/3,F+1,0,B,F,0,B+2/3,F+1,0,B,F+1,0];E.set(b,y*g*L),w.set(d,m*g*L);let M=[L,L,L,L,L,L];T.set(M,f*g*L)}let I=new Me;I.setAttribute("position",new Te(E,y)),I.setAttribute("uv",new Te(w,m)),I.setAttribute("faceIndex",new Te(T,f)),t.push(I),s>fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $l(i,t,e){let n=new hn(i,t,e);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function na(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rp(i,t,e){let n=new Float32Array(Ui),s=new Y(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Kl(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function jl(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Cc(){return`

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
	`}function Ip(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===_o||l===xo,h=l===Ai||l===Ci;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new sa(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new sa(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Pp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lp(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let E=p.array;y=p.version;for(let w=0,T=E.length;w<T;w+=3){let I=E[w+0],L=E[w+1],B=E[w+2];d.push(I,L,L,B,B,I)}}else if(g!==void 0){let E=g.array;y=g.version;for(let w=0,T=E.length/3-1;w<T;w+=3){let I=w+0,L=w+1,B=w+2;d.push(I,L,L,B,B,I)}}else return;let m=new(cc(d)?zs:Os)(d,1);m.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Dp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*y[E];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Up(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Np(i,t,e){let n=new WeakMap,s=new fe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){B.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],w=0;p===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let T=a.attributes.position.count*w,I=1;T>t.maxTextureSize&&(I=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let L=new Float32Array(T*I*4*u),B=new Ns(L,T,I,u);B.type=En,B.needsUpdate=!0;let F=w*4;for(let M=0;M<u;M++){let V=m[M],O=f[M],X=E[M],$=T*I*4*M;for(let j=0;j<V.count;j++){let J=j*F;p===!0&&(s.fromBufferAttribute(V,j),L[$+J+0]=s.x,L[$+J+1]=s.y,L[$+J+2]=s.z,L[$+J+3]=0),g===!0&&(s.fromBufferAttribute(O,j),L[$+J+4]=s.x,L[$+J+5]=s.y,L[$+J+6]=s.z,L[$+J+7]=0),y===!0&&(s.fromBufferAttribute(X,j),L[$+J+8]=s.x,L[$+J+9]=s.y,L[$+J+10]=s.z,L[$+J+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:B,size:new ee(T,I)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Fp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var _h=new Ye,Ql=new Xs(1,1),xh=new Ns,vh=new Wr,yh=new Vs,th=[],eh=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=th[s];if(r===void 0&&(r=new Float32Array(s),th[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oa(i,t){let e=eh[t];e===void 0&&(e=new Int32Array(t),eh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function Vp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;sh.set(n),i.uniformMatrix2fv(this.addr,!1,sh),De(e,n)}}function Hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;ih.set(n),i.uniformMatrix3fv(this.addr,!1,ih),De(e,n)}}function Gp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;nh.set(n),i.uniformMatrix4fv(this.addr,!1,nh),De(e,n)}}function Wp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Zp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function $p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ql.compareFunction=rc,r=Ql):r=_h,e.setTexture2D(t||r,s)}function Qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vh,s)}function tm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yh,s)}function em(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xh,s)}function nm(i){switch(i){case 5126:return Bp;case 35664:return Op;case 35665:return zp;case 35666:return kp;case 35674:return Vp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return Zp;case 36294:return Jp;case 36295:return $p;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}function im(i,t){i.uniform1fv(this.addr,t)}function sm(i,t){let e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function rm(i,t){let e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function om(i,t){let e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function am(i,t){let e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cm(i,t){let e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lm(i,t){let e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hm(i,t){i.uniform1iv(this.addr,t)}function um(i,t){i.uniform2iv(this.addr,t)}function dm(i,t){i.uniform3iv(this.addr,t)}function fm(i,t){i.uniform4iv(this.addr,t)}function pm(i,t){i.uniform1uiv(this.addr,t)}function mm(i,t){i.uniform2uiv(this.addr,t)}function gm(i,t){i.uniform3uiv(this.addr,t)}function _m(i,t){i.uniform4uiv(this.addr,t)}function xm(i,t,e){let n=this.cache,s=t.length,r=oa(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||_h,r[o])}function vm(i,t,e){let n=this.cache,s=t.length,r=oa(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vh,r[o])}function ym(i,t,e){let n=this.cache,s=t.length,r=oa(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||yh,r[o])}function Mm(i,t,e){let n=this.cache,s=t.length,r=oa(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xh,r[o])}function Sm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return om;case 35674:return am;case 35675:return cm;case 35676:return lm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Mm}}var yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nm(e.type)}},Mc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sm(e.type)}},Sc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},vc=/(\w+)(\])?(\[|\.)?/g;function rh(i,t){i.seq.push(t),i.map[t.id]=t}function bm(i,t,e){let n=i.name,s=n.length;for(vc.lastIndex=0;;){let r=vc.exec(n),o=vc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rh(e,c===void 0?new yc(a,i,t):new Mc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Sc(a),rh(e,u)),e=u}}}var ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);bm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function oh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Tm=37297,wm=0;function Em(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ah=new Kt;function Am(i){se._getMatrix(ah,se.workingColorSpace,i);let t=`mat3( ${ah.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case Ls:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ch(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Em(i.getShaderSource(t),a)}else return r}function Cm(i,t){let e=Am(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rm(i,t){let e;switch(t){case El:e="Linear";break;case Al:e="Reinhard";break;case Cl:e="Cineon";break;case go:e="ACESFilmic";break;case Il:e="AgX";break;case Pl:e="Neutral";break;case Rl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ia=new Y;function Im(){se.getLuminanceCoefficients(ia);let i=ia.x.toFixed(4),t=ia.y.toFixed(4),e=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function Lm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function cr(i){return i!==""}function lh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace(Um,Fm)}var Nm=new Map;function Fm(i,t){let e=Qt[t];if(e===void 0){let n=Nm.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bc(e)}var Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(i){return i.replace(Bm,Om)}function Om(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function zm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tr?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function km(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ai:case Ci:t="ENVMAP_TYPE_CUBE";break;case er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ci:t="ENVMAP_MODE_REFRACTION";break}return t}function Hm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ja:t="ENVMAP_BLENDING_MULTIPLY";break;case Tl:t="ENVMAP_BLENDING_MIX";break;case wl:t="ENVMAP_BLENDING_ADD";break}return t}function Gm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=zm(e),c=km(e),h=Vm(e),u=Hm(e),d=Gm(e),p=Pm(e),g=Lm(r),y=s.createProgram(),m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),f.length>0&&(f+=`
`)):(m=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),f=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?Rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Cm("linearToOutputTexel",e.outputColorSpace),Im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=bc(o),o=lh(o,e),o=hh(o,e),a=bc(a),a=lh(a,e),a=hh(a,e),o=uh(o),a=uh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=E+m+o,T=E+f+a,I=oh(s,s.VERTEX_SHADER,w),L=oh(s,s.FRAGMENT_SHADER,T);s.attachShader(y,I),s.attachShader(y,L),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function B(V){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(y)||"",X=s.getShaderInfoLog(I)||"",$=s.getShaderInfoLog(L)||"",j=O.trim(),J=X.trim(),ft=$.trim(),tt=!0,pt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,I,L);else{let dt=ch(s,I,"vertex"),yt=ch(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+j+`
`+dt+`
`+yt)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(J===""||ft==="")&&(pt=!1);pt&&(V.diagnostics={runnable:tt,programLog:j,vertexShader:{log:J,prefix:m},fragmentShader:{log:ft,prefix:f}})}s.deleteShader(I),s.deleteShader(L),F=new ps(s,y),b=Dm(s,y)}let F;this.getUniforms=function(){return F===void 0&&B(this),F};let b;this.getAttributes=function(){return b===void 0&&B(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,Tm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wm++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=L,this}var Xm=0,Tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wc(t),e.set(t,n)),n}},wc=class{constructor(t){this.id=Xm++,this.code=t,this.usedTimes=0}};function qm(i,t,e,n,s,r,o){let a=new Bs,l=new Tc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,V,O,X){let $=O.fog,j=X.geometry,J=b.isMeshStandardMaterial?O.environment:null,ft=(b.isMeshStandardMaterial?e:t).get(b.envMap||J),tt=ft&&ft.mapping===er?ft.image.height:null,pt=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let dt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,yt=dt!==void 0?dt.length:0,Nt=0;j.morphAttributes.position!==void 0&&(Nt=1),j.morphAttributes.normal!==void 0&&(Nt=2),j.morphAttributes.color!==void 0&&(Nt=3);let Et,qt,Xt,lt;if(pt){let bt=Nn[pt];Et=bt.vertexShader,qt=bt.fragmentShader}else Et=b.vertexShader,qt=b.fragmentShader,l.update(b),Xt=l.getVertexShaderID(b),lt=l.getFragmentShaderID(b);let ut=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Ft=X.isInstancedMesh===!0,rt=X.isBatchedMesh===!0,Rt=!!b.map,Ot=!!b.matcap,k=!!ft,Yt=!!b.aoMap,Bt=!!b.lightMap,Lt=!!b.bumpMap,gt=!!b.normalMap,kt=!!b.displacementMap,wt=!!b.emissiveMap,Vt=!!b.metalnessMap,St=!!b.roughnessMap,Gt=b.anisotropy>0,U=b.clearcoat>0,S=b.dispersion>0,K=b.iridescence>0,ht=b.sheen>0,_t=b.transmission>0,x=Gt&&!!b.anisotropyMap,R=U&&!!b.clearcoatMap,v=U&&!!b.clearcoatNormalMap,A=U&&!!b.clearcoatRoughnessMap,P=K&&!!b.iridescenceMap,D=K&&!!b.iridescenceThicknessMap,G=ht&&!!b.sheenColorMap,it=ht&&!!b.sheenRoughnessMap,st=!!b.specularMap,q=!!b.specularColorMap,ot=!!b.specularIntensityMap,_=_t&&!!b.transmissionMap,N=_t&&!!b.thicknessMap,W=!!b.gradientMap,Z=!!b.alphaMap,H=b.alphaTest>0,z=!!b.alphaHash,et=!!b.extensions,xt=Jn;b.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(xt=i.toneMapping);let mt={shaderID:pt,shaderType:b.type,shaderName:b.name,vertexShader:Et,fragmentShader:qt,defines:b.defines,customVertexShaderID:Xt,customFragmentShaderID:lt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:rt,batchingColor:rt&&X._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&X.instanceColor!==null,instancingMorph:Ft&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Si,alphaToCoverage:!!b.alphaToCoverage,map:Rt,matcap:Ot,envMap:k,envMapMode:k&&ft.mapping,envMapCubeUVHeight:tt,aoMap:Yt,lightMap:Bt,bumpMap:Lt,normalMap:gt,displacementMap:d&&kt,emissiveMap:wt,normalMapObjectSpace:gt&&b.normalMapType===Nl,normalMapTangentSpace:gt&&b.normalMapType===sc,metalnessMap:Vt,roughnessMap:St,anisotropy:Gt,anisotropyMap:x,clearcoat:U,clearcoatMap:R,clearcoatNormalMap:v,clearcoatRoughnessMap:A,dispersion:S,iridescence:K,iridescenceMap:P,iridescenceThicknessMap:D,sheen:ht,sheenColorMap:G,sheenRoughnessMap:it,specularMap:st,specularColorMap:q,specularIntensityMap:ot,transmission:_t,transmissionMap:_,thicknessMap:N,gradientMap:W,opaque:b.transparent===!1&&b.blending===vi&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:H,alphaHash:z,combine:b.combine,mapUv:Rt&&y(b.map.channel),aoMapUv:Yt&&y(b.aoMap.channel),lightMapUv:Bt&&y(b.lightMap.channel),bumpMapUv:Lt&&y(b.bumpMap.channel),normalMapUv:gt&&y(b.normalMap.channel),displacementMapUv:kt&&y(b.displacementMap.channel),emissiveMapUv:wt&&y(b.emissiveMap.channel),metalnessMapUv:Vt&&y(b.metalnessMap.channel),roughnessMapUv:St&&y(b.roughnessMap.channel),anisotropyMapUv:x&&y(b.anisotropyMap.channel),clearcoatMapUv:R&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:v&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:A&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:P&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:D&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:G&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:it&&y(b.sheenRoughnessMap.channel),specularMapUv:st&&y(b.specularMap.channel),specularColorMapUv:q&&y(b.specularColorMap.channel),specularIntensityMapUv:ot&&y(b.specularIntensityMap.channel),transmissionMapUv:_&&y(b.transmissionMap.channel),thicknessMapUv:N&&y(b.thicknessMap.channel),alphaMapUv:Z&&y(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(gt||Gt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!j.attributes.uv&&(Rt||Z),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Mt,skinning:X.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:Rt&&b.map.isVideoTexture===!0&&se.getTransfer(b.map.colorSpace)===ce,decodeVideoTextureEmissive:wt&&b.emissiveMap.isVideoTexture===!0&&se.getTransfer(b.emissiveMap.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Se,flipSided:b.side===ze,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:et&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&b.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function f(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let V in b.defines)M.push(V),M.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(E(M,b),w(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function E(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function w(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function T(b){let M=g[b.type],V;if(M){let O=Nn[M];V=ar.clone(O.uniforms)}else V=b.uniforms;return V}function I(b,M){let V;for(let O=0,X=h.length;O<X;O++){let $=h[O];if($.cacheKey===M){V=$,++V.usedTimes;break}}return V===void 0&&(V=new Wm(i,M,b,r),h.push(V)),V}function L(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function B(b){l.remove(b)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:I,releaseProgram:L,releaseShaderCache:B,programs:h,dispose:F}}function Ym(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ph(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,y,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function a(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Zm),n.length>1&&n.sort(d||fh),s.length>1&&s.sort(d||fh)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Jm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ph,i.set(n,[o])):s>=r.length?(o=new ph,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $m(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new Ct};break;case"SpotLight":e={position:new Y,direction:new Y,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function Km(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jm=0;function Qm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tg(i){let t=new $m,e=Km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);let s=new Y,r=new ae,o=new ae;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,E=0,w=0,T=0,I=0,L=0,B=0;c.sort(Qm);for(let b=0,M=c.length;b<M;b++){let V=c[b],O=V.color,X=V.intensity,$=V.distance,j=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)h+=O.r*X,u+=O.g*X,d+=O.b*X;else if(V.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(V.sh.coefficients[J],X);B++}else if(V.isDirectionalLight){let J=t.get(V);if(J.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ft=V.shadow,tt=e.get(V);tt.shadowIntensity=ft.intensity,tt.shadowBias=ft.bias,tt.shadowNormalBias=ft.normalBias,tt.shadowRadius=ft.radius,tt.shadowMapSize=ft.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=V.shadow.matrix,E++}n.directional[p]=J,p++}else if(V.isSpotLight){let J=t.get(V);J.position.setFromMatrixPosition(V.matrixWorld),J.color.copy(O).multiplyScalar(X),J.distance=$,J.coneCos=Math.cos(V.angle),J.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),J.decay=V.decay,n.spot[y]=J;let ft=V.shadow;if(V.map&&(n.spotLightMap[I]=V.map,I++,ft.updateMatrices(V),V.castShadow&&L++),n.spotLightMatrix[y]=ft.matrix,V.castShadow){let tt=e.get(V);tt.shadowIntensity=ft.intensity,tt.shadowBias=ft.bias,tt.shadowNormalBias=ft.normalBias,tt.shadowRadius=ft.radius,tt.shadowMapSize=ft.mapSize,n.spotShadow[y]=tt,n.spotShadowMap[y]=j,T++}y++}else if(V.isRectAreaLight){let J=t.get(V);J.color.copy(O).multiplyScalar(X),J.halfWidth.set(V.width*.5,0,0),J.halfHeight.set(0,V.height*.5,0),n.rectArea[m]=J,m++}else if(V.isPointLight){let J=t.get(V);if(J.color.copy(V.color).multiplyScalar(V.intensity),J.distance=V.distance,J.decay=V.decay,V.castShadow){let ft=V.shadow,tt=e.get(V);tt.shadowIntensity=ft.intensity,tt.shadowBias=ft.bias,tt.shadowNormalBias=ft.normalBias,tt.shadowRadius=ft.radius,tt.shadowMapSize=ft.mapSize,tt.shadowCameraNear=ft.camera.near,tt.shadowCameraFar=ft.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=V.shadow.matrix,w++}n.point[g]=J,g++}else if(V.isHemisphereLight){let J=t.get(V);J.skyColor.copy(V.color).multiplyScalar(X),J.groundColor.copy(V.groundColor).multiplyScalar(X),n.hemi[f]=J,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==E||F.numPointShadows!==w||F.numSpotShadows!==T||F.numSpotMaps!==I||F.numLightProbes!==B)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=T+I-L,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=B,F.directionalLength=p,F.pointLength=g,F.spotLength=y,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=E,F.numPointShadows=w,F.numSpotShadows=T,F.numSpotMaps=I,F.numLightProbes=B,n.version=jm++)}function l(c,h){let u=0,d=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let w=c[f];if(w.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),u++}else if(w.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(w.isRectAreaLight){let T=n.rectArea[g];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let T=n.hemi[y];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function mh(i){let t=new tg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function eg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new mh(i),t.set(s,[a])):r>=o.length?(a=new mh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ng=`void main() {
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
}`;function sg(i,t,e){let n=new ss,s=new ee,r=new ee,o=new fe,a=new $r({depthPacking:Ul}),l=new Kr,c={},h=e.maxTextureSize,u={[Mn]:ze,[ze]:Mn,[Se]:Se},d=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new de(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let f=this.type;this.render=function(L,B,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Zn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let X=f!==Un&&this.type===Un,$=f===Un&&this.type!==Un;for(let j=0,J=L.length;j<J;j++){let ft=L[j],tt=ft.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",ft,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let pt=tt.getFrameExtents();if(s.multiply(pt),r.copy(tt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,tt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,tt.mapSize.y=r.y)),tt.map===null||X===!0||$===!0){let yt=this.type!==Un?{minFilter:$e,magFilter:$e}:{};tt.map!==null&&tt.map.dispose(),tt.map=new hn(s.x,s.y,yt),tt.map.texture.name=ft.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let dt=tt.getViewportCount();for(let yt=0;yt<dt;yt++){let Nt=tt.getViewport(yt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),O.viewport(o),tt.updateMatrices(ft,yt),n=tt.getFrustum(),T(B,F,tt.camera,ft,this.type)}tt.isPointLightShadow!==!0&&this.type===Un&&E(tt,F),tt.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,V)};function E(L,B){let F=t.update(y);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new hn(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(B,null,F,d,y,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(B,null,F,p,y,null)}function w(L,B,F,b){let M=null,V=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)M=V;else if(M=F.isPointLight===!0?l:a,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){let O=M.uuid,X=B.uuid,$=c[O];$===void 0&&($={},c[O]=$);let j=$[X];j===void 0&&(j=M.clone(),$[X]=j,B.addEventListener("dispose",I)),M=j}if(M.visible=B.visible,M.wireframe=B.wireframe,b===Un?M.side=B.shadowSide!==null?B.shadowSide:B.side:M.side=B.shadowSide!==null?B.shadowSide:u[B.side],M.alphaMap=B.alphaMap,M.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,M.map=B.map,M.clipShadows=B.clipShadows,M.clippingPlanes=B.clippingPlanes,M.clipIntersection=B.clipIntersection,M.displacementMap=B.displacementMap,M.displacementScale=B.displacementScale,M.displacementBias=B.displacementBias,M.wireframeLinewidth=B.wireframeLinewidth,M.linewidth=B.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=i.properties.get(M);O.light=F}return M}function T(L,B,F,b,M){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===Un)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);let X=t.update(L),$=L.material;if(Array.isArray($)){let j=X.groups;for(let J=0,ft=j.length;J<ft;J++){let tt=j[J],pt=$[tt.materialIndex];if(pt&&pt.visible){let dt=w(L,pt,b,M);L.onBeforeShadow(i,L,B,F,X,dt,tt),i.renderBufferDirect(F,null,X,dt,L,tt),L.onAfterShadow(i,L,B,F,X,dt,tt)}}}else if($.visible){let j=w(L,$,b,M);L.onBeforeShadow(i,L,B,F,X,j,null),i.renderBufferDirect(F,null,X,j,L,null),L.onAfterShadow(i,L,B,F,X,j,null)}}let O=L.children;for(let X=0,$=O.length;X<$;X++)T(O[X],B,F,b,M)}function I(L){L.target.removeEventListener("dispose",I);for(let F in c){let b=c[F],M=L.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var rg={[co]:lo,[ho]:po,[uo]:mo,[yi]:fo,[lo]:co,[po]:ho,[mo]:uo,[fo]:yi};function og(i,t){function e(){let _=!1,N=new fe,W=null,Z=new fe(0,0,0,0);return{setMask:function(H){W!==H&&!_&&(i.colorMask(H,H,H,H),W=H)},setLocked:function(H){_=H},setClear:function(H,z,et,xt,mt){mt===!0&&(H*=xt,z*=xt,et*=xt),N.set(H,z,et,xt),Z.equals(N)===!1&&(i.clearColor(H,z,et,xt),Z.copy(N))},reset:function(){_=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let _=!1,N=!1,W=null,Z=null,H=null;return{setReversed:function(z){if(N!==z){let et=t.get("EXT_clip_control");z?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),N=z;let xt=H;H=null,this.setClear(xt)}},getReversed:function(){return N},setTest:function(z){z?ut(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(z){W!==z&&!_&&(i.depthMask(z),W=z)},setFunc:function(z){if(N&&(z=rg[z]),Z!==z){switch(z){case co:i.depthFunc(i.NEVER);break;case lo:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case yi:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case fo:i.depthFunc(i.GEQUAL);break;case po:i.depthFunc(i.GREATER);break;case mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=z}},setLocked:function(z){_=z},setClear:function(z){H!==z&&(N&&(z=1-z),i.clearDepth(z),H=z)},reset:function(){_=!1,W=null,Z=null,H=null,N=!1}}}function s(){let _=!1,N=null,W=null,Z=null,H=null,z=null,et=null,xt=null,mt=null;return{setTest:function(bt){_||(bt?ut(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(bt){N!==bt&&!_&&(i.stencilMask(bt),N=bt)},setFunc:function(bt,$t,Jt){(W!==bt||Z!==$t||H!==Jt)&&(i.stencilFunc(bt,$t,Jt),W=bt,Z=$t,H=Jt)},setOp:function(bt,$t,Jt){(z!==bt||et!==$t||xt!==Jt)&&(i.stencilOp(bt,$t,Jt),z=bt,et=$t,xt=Jt)},setLocked:function(bt){_=bt},setClear:function(bt){mt!==bt&&(i.clearStencil(bt),mt=bt)},reset:function(){_=!1,N=null,W=null,Z=null,H=null,z=null,et=null,xt=null,mt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,E=null,w=null,T=null,I=null,L=null,B=new Ct(0,0,0),F=0,b=!1,M=null,V=null,O=null,X=null,$=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ft=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(tt)[1]),J=ft>=1):tt.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),J=ft>=2);let pt=null,dt={},yt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Et=new fe().fromArray(yt),qt=new fe().fromArray(Nt);function Xt(_,N,W,Z){let H=new Uint8Array(4),z=i.createTexture();i.bindTexture(_,z),i.texParameteri(_,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(_,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<W;et++)_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY?i.texImage3D(N,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,H):i.texImage2D(N+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,H);return z}let lt={};lt[i.TEXTURE_2D]=Xt(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=Xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=Xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=Xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(yi),Lt(!1),gt(Xa),ut(i.CULL_FACE),Yt(Zn);function ut(_){h[_]!==!0&&(i.enable(_),h[_]=!0)}function Mt(_){h[_]!==!1&&(i.disable(_),h[_]=!1)}function Ft(_,N){return u[_]!==N?(i.bindFramebuffer(_,N),u[_]=N,_===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=N),_===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=N),!0):!1}function rt(_,N){let W=p,Z=!1;if(_){W=d.get(N),W===void 0&&(W=[],d.set(N,W));let H=_.textures;if(W.length!==H.length||W[0]!==i.COLOR_ATTACHMENT0){for(let z=0,et=H.length;z<et;z++)W[z]=i.COLOR_ATTACHMENT0+z;W.length=H.length,Z=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Z=!0);Z&&i.drawBuffers(W)}function Rt(_){return g!==_?(i.useProgram(_),g=_,!0):!1}let Ot={[ri]:i.FUNC_ADD,[al]:i.FUNC_SUBTRACT,[cl]:i.FUNC_REVERSE_SUBTRACT};Ot[ll]=i.MIN,Ot[hl]=i.MAX;let k={[ul]:i.ZERO,[dl]:i.ONE,[fl]:i.SRC_COLOR,[Or]:i.SRC_ALPHA,[vl]:i.SRC_ALPHA_SATURATE,[_l]:i.DST_COLOR,[ml]:i.DST_ALPHA,[pl]:i.ONE_MINUS_SRC_COLOR,[zr]:i.ONE_MINUS_SRC_ALPHA,[xl]:i.ONE_MINUS_DST_COLOR,[gl]:i.ONE_MINUS_DST_ALPHA,[yl]:i.CONSTANT_COLOR,[Ml]:i.ONE_MINUS_CONSTANT_COLOR,[Sl]:i.CONSTANT_ALPHA,[bl]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(_,N,W,Z,H,z,et,xt,mt,bt){if(_===Zn){y===!0&&(Mt(i.BLEND),y=!1);return}if(y===!1&&(ut(i.BLEND),y=!0),_!==ol){if(_!==m||bt!==b){if((f!==ri||T!==ri)&&(i.blendEquation(i.FUNC_ADD),f=ri,T=ri),bt)switch(_){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qa:i.blendFunc(i.ONE,i.ONE);break;case Ya:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Za:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ya:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Za:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}E=null,w=null,I=null,L=null,B.set(0,0,0),F=0,m=_,b=bt}return}H=H||N,z=z||W,et=et||Z,(N!==f||H!==T)&&(i.blendEquationSeparate(Ot[N],Ot[H]),f=N,T=H),(W!==E||Z!==w||z!==I||et!==L)&&(i.blendFuncSeparate(k[W],k[Z],k[z],k[et]),E=W,w=Z,I=z,L=et),(xt.equals(B)===!1||mt!==F)&&(i.blendColor(xt.r,xt.g,xt.b,mt),B.copy(xt),F=mt),m=_,b=!1}function Bt(_,N){_.side===Se?Mt(i.CULL_FACE):ut(i.CULL_FACE);let W=_.side===ze;N&&(W=!W),Lt(W),_.blending===vi&&_.transparent===!1?Yt(Zn):Yt(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),o.setFunc(_.depthFunc),o.setTest(_.depthTest),o.setMask(_.depthWrite),r.setMask(_.colorWrite);let Z=_.stencilWrite;a.setTest(Z),Z&&(a.setMask(_.stencilWriteMask),a.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),a.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),wt(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(_){M!==_&&(_?i.frontFace(i.CW):i.frontFace(i.CCW),M=_)}function gt(_){_!==il?(ut(i.CULL_FACE),_!==V&&(_===Xa?i.cullFace(i.BACK):_===sl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),V=_}function kt(_){_!==O&&(J&&i.lineWidth(_),O=_)}function wt(_,N,W){_?(ut(i.POLYGON_OFFSET_FILL),(X!==N||$!==W)&&(i.polygonOffset(N,W),X=N,$=W)):Mt(i.POLYGON_OFFSET_FILL)}function Vt(_){_?ut(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function St(_){_===void 0&&(_=i.TEXTURE0+j-1),pt!==_&&(i.activeTexture(_),pt=_)}function Gt(_,N,W){W===void 0&&(pt===null?W=i.TEXTURE0+j-1:W=pt);let Z=dt[W];Z===void 0&&(Z={type:void 0,texture:void 0},dt[W]=Z),(Z.type!==_||Z.texture!==N)&&(pt!==W&&(i.activeTexture(W),pt=W),i.bindTexture(_,N||lt[_]),Z.type=_,Z.texture=N)}function U(){let _=dt[pt];_!==void 0&&_.type!==void 0&&(i.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function K(){try{i.compressedTexImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ht(){try{i.texSubImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function _t(){try{i.texSubImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function x(){try{i.compressedTexSubImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function R(){try{i.compressedTexSubImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function v(){try{i.texStorage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function A(){try{i.texStorage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function P(){try{i.texImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function D(){try{i.texImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function G(_){Et.equals(_)===!1&&(i.scissor(_.x,_.y,_.z,_.w),Et.copy(_))}function it(_){qt.equals(_)===!1&&(i.viewport(_.x,_.y,_.z,_.w),qt.copy(_))}function st(_,N){let W=c.get(N);W===void 0&&(W=new WeakMap,c.set(N,W));let Z=W.get(_);Z===void 0&&(Z=i.getUniformBlockIndex(N,_.name),W.set(_,Z))}function q(_,N){let Z=c.get(N).get(_);l.get(N)!==Z&&(i.uniformBlockBinding(N,Z,_.__bindingPointIndex),l.set(N,Z))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pt=null,dt={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,E=null,w=null,T=null,I=null,L=null,B=new Ct(0,0,0),F=0,b=!1,M=null,V=null,O=null,X=null,$=null,Et.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:Mt,bindFramebuffer:Ft,drawBuffers:rt,useProgram:Rt,setBlending:Yt,setMaterial:Bt,setFlipSided:Lt,setCullFace:gt,setLineWidth:kt,setPolygonOffset:wt,setScissorTest:Vt,activeTexture:St,bindTexture:Gt,unbindTexture:U,compressedTexImage2D:S,compressedTexImage3D:K,texImage2D:P,texImage3D:D,updateUBOMapping:st,uniformBlockBinding:q,texStorage2D:v,texStorage3D:A,texSubImage2D:ht,texSubImage3D:_t,compressedTexSubImage2D:x,compressedTexSubImage3D:R,scissor:G,viewport:it,reset:ot}}function ag(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,S){return p?new OffscreenCanvas(U,S):Us("canvas")}function y(U,S,K){let ht=1,_t=Gt(U);if((_t.width>K||_t.height>K)&&(ht=K/Math.max(_t.width,_t.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let x=Math.floor(ht*_t.width),R=Math.floor(ht*_t.height);u===void 0&&(u=g(x,R));let v=S?g(x,R):u;return v.width=x,v.height=R,v.getContext("2d").drawImage(U,0,0,x,R),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+x+"x"+R+")."),v}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),U;return U}function m(U){return U.generateMipmaps}function f(U){i.generateMipmap(U)}function E(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(U,S,K,ht,_t=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let x=S;if(S===i.RED&&(K===i.FLOAT&&(x=i.R32F),K===i.HALF_FLOAT&&(x=i.R16F),K===i.UNSIGNED_BYTE&&(x=i.R8)),S===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(x=i.R8UI),K===i.UNSIGNED_SHORT&&(x=i.R16UI),K===i.UNSIGNED_INT&&(x=i.R32UI),K===i.BYTE&&(x=i.R8I),K===i.SHORT&&(x=i.R16I),K===i.INT&&(x=i.R32I)),S===i.RG&&(K===i.FLOAT&&(x=i.RG32F),K===i.HALF_FLOAT&&(x=i.RG16F),K===i.UNSIGNED_BYTE&&(x=i.RG8)),S===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(x=i.RG8UI),K===i.UNSIGNED_SHORT&&(x=i.RG16UI),K===i.UNSIGNED_INT&&(x=i.RG32UI),K===i.BYTE&&(x=i.RG8I),K===i.SHORT&&(x=i.RG16I),K===i.INT&&(x=i.RG32I)),S===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(x=i.RGB8UI),K===i.UNSIGNED_SHORT&&(x=i.RGB16UI),K===i.UNSIGNED_INT&&(x=i.RGB32UI),K===i.BYTE&&(x=i.RGB8I),K===i.SHORT&&(x=i.RGB16I),K===i.INT&&(x=i.RGB32I)),S===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(x=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(x=i.RGBA16UI),K===i.UNSIGNED_INT&&(x=i.RGBA32UI),K===i.BYTE&&(x=i.RGBA8I),K===i.SHORT&&(x=i.RGBA16I),K===i.INT&&(x=i.RGBA32I)),S===i.RGB&&(K===i.UNSIGNED_INT_5_9_9_9_REV&&(x=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(x=i.R11F_G11F_B10F)),S===i.RGBA){let R=_t?Ls:se.getTransfer(ht);K===i.FLOAT&&(x=i.RGBA32F),K===i.HALF_FLOAT&&(x=i.RGBA16F),K===i.UNSIGNED_BYTE&&(x=R===ce?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(x=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(x=i.RGB5_A1)}return(x===i.R16F||x===i.R32F||x===i.RG16F||x===i.RG32F||x===i.RGBA16F||x===i.RGBA32F)&&t.get("EXT_color_buffer_float"),x}function T(U,S){let K;return U?S===null||S===hi||S===ls?K=i.DEPTH24_STENCIL8:S===En?K=i.DEPTH32F_STENCIL8:S===as&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===hi||S===ls?K=i.DEPTH_COMPONENT24:S===En?K=i.DEPTH_COMPONENT32F:S===as&&(K=i.DEPTH_COMPONENT16),K}function I(U,S){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==$e&&U.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?S.mipmaps.length:1}function L(U){let S=U.target;S.removeEventListener("dispose",L),F(S),S.isVideoTexture&&h.delete(S)}function B(U){let S=U.target;S.removeEventListener("dispose",B),M(S)}function F(U){let S=n.get(U);if(S.__webglInit===void 0)return;let K=U.source,ht=d.get(K);if(ht){let _t=ht[S.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&b(U),Object.keys(ht).length===0&&d.delete(K)}n.remove(U)}function b(U){let S=n.get(U);i.deleteTexture(S.__webglTexture);let K=U.source,ht=d.get(K);delete ht[S.__cacheKey],o.memory.textures--}function M(U){let S=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(S.__webglFramebuffer[ht]))for(let _t=0;_t<S.__webglFramebuffer[ht].length;_t++)i.deleteFramebuffer(S.__webglFramebuffer[ht][_t]);else i.deleteFramebuffer(S.__webglFramebuffer[ht]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ht])}else{if(Array.isArray(S.__webglFramebuffer))for(let ht=0;ht<S.__webglFramebuffer.length;ht++)i.deleteFramebuffer(S.__webglFramebuffer[ht]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ht=0;ht<S.__webglColorRenderbuffer.length;ht++)S.__webglColorRenderbuffer[ht]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ht]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let K=U.textures;for(let ht=0,_t=K.length;ht<_t;ht++){let x=n.get(K[ht]);x.__webglTexture&&(i.deleteTexture(x.__webglTexture),o.memory.textures--),n.remove(K[ht])}n.remove(U)}let V=0;function O(){V=0}function X(){let U=V;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),V+=1,U}function $(U){let S=[];return S.push(U.wrapS),S.push(U.wrapT),S.push(U.wrapR||0),S.push(U.magFilter),S.push(U.minFilter),S.push(U.anisotropy),S.push(U.internalFormat),S.push(U.format),S.push(U.type),S.push(U.generateMipmaps),S.push(U.premultiplyAlpha),S.push(U.flipY),S.push(U.unpackAlignment),S.push(U.colorSpace),S.join()}function j(U,S){let K=n.get(U);if(U.isVideoTexture&&Vt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){let ht=U.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(K,U,S);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+S)}function J(U,S){let K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){lt(K,U,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+S)}function ft(U,S){let K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){lt(K,U,S);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+S)}function tt(U,S){let K=n.get(U);if(U.version>0&&K.__version!==U.version){ut(K,U,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+S)}let pt={[Mi]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[kr]:i.MIRRORED_REPEAT},dt={[$e]:i.NEAREST,[Ll]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[vo]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},yt={[Fl]:i.NEVER,[Hl]:i.ALWAYS,[Bl]:i.LESS,[rc]:i.LEQUAL,[Ol]:i.EQUAL,[Vl]:i.GEQUAL,[zl]:i.GREATER,[kl]:i.NOTEQUAL};function Nt(U,S){if(S.type===En&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Sn||S.magFilter===vo||S.magFilter===nr||S.magFilter===li||S.minFilter===Sn||S.minFilter===vo||S.minFilter===nr||S.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,pt[S.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,pt[S.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,pt[S.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,dt[S.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,dt[S.minFilter]),S.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,yt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$e||S.minFilter!==nr&&S.minFilter!==li||S.type===En&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Et(U,S){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,S.addEventListener("dispose",L));let ht=S.source,_t=d.get(ht);_t===void 0&&(_t={},d.set(ht,_t));let x=$(S);if(x!==U.__cacheKey){_t[x]===void 0&&(_t[x]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),_t[x].usedTimes++;let R=_t[U.__cacheKey];R!==void 0&&(_t[U.__cacheKey].usedTimes--,R.usedTimes===0&&b(S)),U.__cacheKey=x,U.__webglTexture=_t[x].texture}return K}function qt(U,S,K){return Math.floor(Math.floor(U/K)/S)}function Xt(U,S,K,ht){let x=U.updateRanges;if(x.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,K,ht,S.data);else{x.sort((D,G)=>D.start-G.start);let R=0;for(let D=1;D<x.length;D++){let G=x[R],it=x[D],st=G.start+G.count,q=qt(it.start,S.width,4),ot=qt(G.start,S.width,4);it.start<=st+1&&q===ot&&qt(it.start+it.count-1,S.width,4)===q?G.count=Math.max(G.count,it.start+it.count-G.start):(++R,x[R]=it)}x.length=R+1;let v=i.getParameter(i.UNPACK_ROW_LENGTH),A=i.getParameter(i.UNPACK_SKIP_PIXELS),P=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let D=0,G=x.length;D<G;D++){let it=x[D],st=Math.floor(it.start/4),q=Math.ceil(it.count/4),ot=st%S.width,_=Math.floor(st/S.width),N=q,W=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,_),e.texSubImage2D(i.TEXTURE_2D,0,ot,_,N,W,K,ht,S.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,v),i.pixelStorei(i.UNPACK_SKIP_PIXELS,A),i.pixelStorei(i.UNPACK_SKIP_ROWS,P)}}function lt(U,S,K){let ht=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ht=i.TEXTURE_3D);let _t=Et(U,S),x=S.source;e.bindTexture(ht,U.__webglTexture,i.TEXTURE0+K);let R=n.get(x);if(x.version!==R.__version||_t===!0){e.activeTexture(i.TEXTURE0+K);let v=se.getPrimaries(se.workingColorSpace),A=S.colorSpace===$n?null:se.getPrimaries(S.colorSpace),P=S.colorSpace===$n||v===A?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);let D=y(S.image,!1,s.maxTextureSize);D=St(S,D);let G=r.convert(S.format,S.colorSpace),it=r.convert(S.type),st=w(S.internalFormat,G,it,S.colorSpace,S.isVideoTexture);Nt(ht,S);let q,ot=S.mipmaps,_=S.isVideoTexture!==!0,N=R.__version===void 0||_t===!0,W=x.dataReady,Z=I(S,D);if(S.isDepthTexture)st=T(S.format===hs,S.type),N&&(_?e.texStorage2D(i.TEXTURE_2D,1,st,D.width,D.height):e.texImage2D(i.TEXTURE_2D,0,st,D.width,D.height,0,G,it,null));else if(S.isDataTexture)if(ot.length>0){_&&N&&e.texStorage2D(i.TEXTURE_2D,Z,st,ot[0].width,ot[0].height);for(let H=0,z=ot.length;H<z;H++)q=ot[H],_?W&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,q.width,q.height,G,it,q.data):e.texImage2D(i.TEXTURE_2D,H,st,q.width,q.height,0,G,it,q.data);S.generateMipmaps=!1}else _?(N&&e.texStorage2D(i.TEXTURE_2D,Z,st,D.width,D.height),W&&Xt(S,D,G,it)):e.texImage2D(i.TEXTURE_2D,0,st,D.width,D.height,0,G,it,D.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){_&&N&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Z,st,ot[0].width,ot[0].height,D.depth);for(let H=0,z=ot.length;H<z;H++)if(q=ot[H],S.format!==dn)if(G!==null)if(_){if(W)if(S.layerUpdates.size>0){let et=fc(q.width,q.height,S.format,S.type);for(let xt of S.layerUpdates){let mt=q.data.subarray(xt*et/q.data.BYTES_PER_ELEMENT,(xt+1)*et/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,xt,q.width,q.height,1,G,mt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,q.width,q.height,D.depth,G,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,st,q.width,q.height,D.depth,0,q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,q.width,q.height,D.depth,G,it,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,st,q.width,q.height,D.depth,0,G,it,q.data)}else{_&&N&&e.texStorage2D(i.TEXTURE_2D,Z,st,ot[0].width,ot[0].height);for(let H=0,z=ot.length;H<z;H++)q=ot[H],S.format!==dn?G!==null?_?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,q.width,q.height,G,q.data):e.compressedTexImage2D(i.TEXTURE_2D,H,st,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_?W&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,q.width,q.height,G,it,q.data):e.texImage2D(i.TEXTURE_2D,H,st,q.width,q.height,0,G,it,q.data)}else if(S.isDataArrayTexture)if(_){if(N&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Z,st,D.width,D.height,D.depth),W)if(S.layerUpdates.size>0){let H=fc(D.width,D.height,S.format,S.type);for(let z of S.layerUpdates){let et=D.data.subarray(z*H/D.data.BYTES_PER_ELEMENT,(z+1)*H/D.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,z,D.width,D.height,1,G,it,et)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,G,it,D.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,st,D.width,D.height,D.depth,0,G,it,D.data);else if(S.isData3DTexture)_?(N&&e.texStorage3D(i.TEXTURE_3D,Z,st,D.width,D.height,D.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,G,it,D.data)):e.texImage3D(i.TEXTURE_3D,0,st,D.width,D.height,D.depth,0,G,it,D.data);else if(S.isFramebufferTexture){if(N)if(_)e.texStorage2D(i.TEXTURE_2D,Z,st,D.width,D.height);else{let H=D.width,z=D.height;for(let et=0;et<Z;et++)e.texImage2D(i.TEXTURE_2D,et,st,H,z,0,G,it,null),H>>=1,z>>=1}}else if(ot.length>0){if(_&&N){let H=Gt(ot[0]);e.texStorage2D(i.TEXTURE_2D,Z,st,H.width,H.height)}for(let H=0,z=ot.length;H<z;H++)q=ot[H],_?W&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,G,it,q):e.texImage2D(i.TEXTURE_2D,H,st,G,it,q);S.generateMipmaps=!1}else if(_){if(N){let H=Gt(D);e.texStorage2D(i.TEXTURE_2D,Z,st,H.width,H.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,G,it,D)}else e.texImage2D(i.TEXTURE_2D,0,st,G,it,D);m(S)&&f(ht),R.__version=x.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function ut(U,S,K){if(S.image.length!==6)return;let ht=Et(U,S),_t=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+K);let x=n.get(_t);if(_t.version!==x.__version||ht===!0){e.activeTexture(i.TEXTURE0+K);let R=se.getPrimaries(se.workingColorSpace),v=S.colorSpace===$n?null:se.getPrimaries(S.colorSpace),A=S.colorSpace===$n||R===v?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,A);let P=S.isCompressedTexture||S.image[0].isCompressedTexture,D=S.image[0]&&S.image[0].isDataTexture,G=[];for(let z=0;z<6;z++)!P&&!D?G[z]=y(S.image[z],!0,s.maxCubemapSize):G[z]=D?S.image[z].image:S.image[z],G[z]=St(S,G[z]);let it=G[0],st=r.convert(S.format,S.colorSpace),q=r.convert(S.type),ot=w(S.internalFormat,st,q,S.colorSpace),_=S.isVideoTexture!==!0,N=x.__version===void 0||ht===!0,W=_t.dataReady,Z=I(S,it);Nt(i.TEXTURE_CUBE_MAP,S);let H;if(P){_&&N&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Z,ot,it.width,it.height);for(let z=0;z<6;z++){H=G[z].mipmaps;for(let et=0;et<H.length;et++){let xt=H[et];S.format!==dn?st!==null?_?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,et,0,0,xt.width,xt.height,st,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,et,ot,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,et,0,0,xt.width,xt.height,st,q,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,et,ot,xt.width,xt.height,0,st,q,xt.data)}}}else{if(H=S.mipmaps,_&&N){H.length>0&&Z++;let z=Gt(G[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Z,ot,z.width,z.height)}for(let z=0;z<6;z++)if(D){_?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,G[z].width,G[z].height,st,q,G[z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ot,G[z].width,G[z].height,0,st,q,G[z].data);for(let et=0;et<H.length;et++){let mt=H[et].image[z].image;_?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,et+1,0,0,mt.width,mt.height,st,q,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,et+1,ot,mt.width,mt.height,0,st,q,mt.data)}}else{_?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,st,q,G[z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ot,st,q,G[z]);for(let et=0;et<H.length;et++){let xt=H[et];_?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,et+1,0,0,st,q,xt.image[z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,et+1,ot,st,q,xt.image[z])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),x.__version=_t.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function Mt(U,S,K,ht,_t,x){let R=r.convert(K.format,K.colorSpace),v=r.convert(K.type),A=w(K.internalFormat,R,v,K.colorSpace),P=n.get(S),D=n.get(K);if(D.__renderTarget=S,!P.__hasExternalTextures){let G=Math.max(1,S.width>>x),it=Math.max(1,S.height>>x);_t===i.TEXTURE_3D||_t===i.TEXTURE_2D_ARRAY?e.texImage3D(_t,x,A,G,it,S.depth,0,R,v,null):e.texImage2D(_t,x,A,G,it,0,R,v,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),wt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,_t,D.__webglTexture,0,kt(S)):(_t===i.TEXTURE_2D||_t>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,_t,D.__webglTexture,x),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(U,S,K){if(i.bindRenderbuffer(i.RENDERBUFFER,U),S.depthBuffer){let ht=S.depthTexture,_t=ht&&ht.isDepthTexture?ht.type:null,x=T(S.stencilBuffer,_t),R=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,v=kt(S);wt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,v,x,S.width,S.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,v,x,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,x,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,U)}else{let ht=S.textures;for(let _t=0;_t<ht.length;_t++){let x=ht[_t],R=r.convert(x.format,x.colorSpace),v=r.convert(x.type),A=w(x.internalFormat,R,v,x.colorSpace),P=kt(S);K&&wt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,P,A,S.width,S.height):wt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P,A,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,A,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(U,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ht=n.get(S.depthTexture);ht.__renderTarget=S,(!ht.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);let _t=ht.__webglTexture,x=kt(S);if(S.depthTexture.format===ji)wt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0);else if(S.depthTexture.format===hs)wt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Rt(U){let S=n.get(U),K=U.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==U.depthTexture){let ht=U.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ht){let _t=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ht.removeEventListener("dispose",_t)};ht.addEventListener("dispose",_t),S.__depthDisposeCallback=_t}S.__boundDepthTexture=ht}if(U.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");let ht=U.texture.mipmaps;ht&&ht.length>0?rt(S.__webglFramebuffer[0],U):rt(S.__webglFramebuffer,U)}else if(K){S.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ht]),S.__webglDepthbuffer[ht]===void 0)S.__webglDepthbuffer[ht]=i.createRenderbuffer(),Ft(S.__webglDepthbuffer[ht],U,!1);else{let _t=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,x=S.__webglDepthbuffer[ht];i.bindRenderbuffer(i.RENDERBUFFER,x),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,x)}}else{let ht=U.texture.mipmaps;if(ht&&ht.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ft(S.__webglDepthbuffer,U,!1);else{let _t=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,x=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,x),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,x)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(U,S,K){let ht=n.get(U);S!==void 0&&Mt(ht.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Rt(U)}function k(U){let S=U.texture,K=n.get(U),ht=n.get(S);U.addEventListener("dispose",B);let _t=U.textures,x=U.isWebGLCubeRenderTarget===!0,R=_t.length>1;if(R||(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=S.version,o.memory.textures++),x){K.__webglFramebuffer=[];for(let v=0;v<6;v++)if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[v]=[];for(let A=0;A<S.mipmaps.length;A++)K.__webglFramebuffer[v][A]=i.createFramebuffer()}else K.__webglFramebuffer[v]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let v=0;v<S.mipmaps.length;v++)K.__webglFramebuffer[v]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(R)for(let v=0,A=_t.length;v<A;v++){let P=n.get(_t[v]);P.__webglTexture===void 0&&(P.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&wt(U)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let v=0;v<_t.length;v++){let A=_t[v];K.__webglColorRenderbuffer[v]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[v]);let P=r.convert(A.format,A.colorSpace),D=r.convert(A.type),G=w(A.internalFormat,P,D,A.colorSpace,U.isXRRenderTarget===!0),it=kt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,G,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+v,i.RENDERBUFFER,K.__webglColorRenderbuffer[v])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(K.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(x){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,S);for(let v=0;v<6;v++)if(S.mipmaps&&S.mipmaps.length>0)for(let A=0;A<S.mipmaps.length;A++)Mt(K.__webglFramebuffer[v][A],U,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+v,A);else Mt(K.__webglFramebuffer[v],U,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0);m(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(R){for(let v=0,A=_t.length;v<A;v++){let P=_t[v],D=n.get(P),G=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(G=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(G,D.__webglTexture),Nt(G,P),Mt(K.__webglFramebuffer,U,P,i.COLOR_ATTACHMENT0+v,G,0),m(P)&&f(G)}e.unbindTexture()}else{let v=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(v=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(v,ht.__webglTexture),Nt(v,S),S.mipmaps&&S.mipmaps.length>0)for(let A=0;A<S.mipmaps.length;A++)Mt(K.__webglFramebuffer[A],U,S,i.COLOR_ATTACHMENT0,v,A);else Mt(K.__webglFramebuffer,U,S,i.COLOR_ATTACHMENT0,v,0);m(S)&&f(v),e.unbindTexture()}U.depthBuffer&&Rt(U)}function Yt(U){let S=U.textures;for(let K=0,ht=S.length;K<ht;K++){let _t=S[K];if(m(_t)){let x=E(U),R=n.get(_t).__webglTexture;e.bindTexture(x,R),f(x),e.unbindTexture()}}}let Bt=[],Lt=[];function gt(U){if(U.samples>0){if(wt(U)===!1){let S=U.textures,K=U.width,ht=U.height,_t=i.COLOR_BUFFER_BIT,x=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,R=n.get(U),v=S.length>1;if(v)for(let P=0;P<S.length;P++)e.bindFramebuffer(i.FRAMEBUFFER,R.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,R.__webglMultisampledFramebuffer);let A=U.texture.mipmaps;A&&A.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,R.__webglFramebuffer);for(let P=0;P<S.length;P++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(_t|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(_t|=i.STENCIL_BUFFER_BIT)),v){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,R.__webglColorRenderbuffer[P]);let D=n.get(S[P]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,K,ht,0,0,K,ht,_t,i.NEAREST),l===!0&&(Bt.length=0,Lt.length=0,Bt.push(i.COLOR_ATTACHMENT0+P),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Bt.push(x),Lt.push(x),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),v)for(let P=0;P<S.length;P++){e.bindFramebuffer(i.FRAMEBUFFER,R.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,R.__webglColorRenderbuffer[P]);let D=n.get(S[P]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,R.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let S=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function kt(U){return Math.min(s.maxSamples,U.samples)}function wt(U){let S=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Vt(U){let S=o.render.frame;h.get(U)!==S&&(h.set(U,S),U.update())}function St(U,S){let K=U.colorSpace,ht=U.format,_t=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==Si&&K!==$n&&(se.getTransfer(K)===ce?(ht!==dn||_t!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),S}function Gt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=J,this.setTexture3D=ft,this.setTextureCube=tt,this.rebindTextures=Ot,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=wt}function cg(i,t){function e(n,s=$n){let r,o=se.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===So)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ka)return i.BYTE;if(n===ja)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===cs)return i.HALF_FLOAT;if(n===ec)return i.ALPHA;if(n===nc)return i.RGB;if(n===dn)return i.RGBA;if(n===ji)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===bo)return i.RED;if(n===To)return i.RED_INTEGER;if(n===ic)return i.RG;if(n===wo)return i.RG_INTEGER;if(n===Eo)return i.RGBA_INTEGER;if(n===ir||n===sr||n===rr||n===or)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ao||n===Co||n===Ro||n===Io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Lo||n===Do)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Lo)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uo||n===No||n===Fo||n===Bo||n===Oo||n===zo||n===ko||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===qo||n===Yo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===No)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ko)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ho)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zo||n===Jo||n===$o)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zo)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ko||n===jo||n===Qo||n===ta)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var lg=`
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

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new qs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Oe({vertexShader:lg,fragmentShader:hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ac=class extends Xn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new Ec,f={},E=e.getContextAttributes(),w=null,T=null,I=[],L=[],B=new ee,F=null,b=new Be;b.viewport=new fe;let M=new Be;M.viewport=new fe;let V=[b,M],O=new ao,X=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let ut=I[lt];return ut===void 0&&(ut=new ns,I[lt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(lt){let ut=I[lt];return ut===void 0&&(ut=new ns,I[lt]=ut),ut.getGripSpace()},this.getHand=function(lt){let ut=I[lt];return ut===void 0&&(ut=new ns,I[lt]=ut),ut.getHandSpace()};function j(lt){let ut=L.indexOf(lt.inputSource);if(ut===-1)return;let Mt=I[ut];Mt!==void 0&&(Mt.update(lt.inputSource,lt.frame,c||o),Mt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function J(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ft);for(let lt=0;lt<I.length;lt++){let ut=L[lt];ut!==null&&(L[lt]=null,I[lt].disconnect(ut))}X=null,$=null,m.reset();for(let lt in f)delete f[lt];t.setRenderTarget(w),p=null,d=null,u=null,s=null,T=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){a=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(lt){c=lt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ft),E.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(B),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ft=null,rt=null;E.depth&&(rt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=E.stencil?hs:ji,Ft=E.stencil?ls:hi);let Rt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Rt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new hn(d.textureWidth,d.textureHeight,{format:dn,type:wn,depthTexture:new Xs(d.textureWidth,d.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Mt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new hn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ft(lt){for(let ut=0;ut<lt.removed.length;ut++){let Mt=lt.removed[ut],Ft=L.indexOf(Mt);Ft>=0&&(L[Ft]=null,I[Ft].disconnect(Mt))}for(let ut=0;ut<lt.added.length;ut++){let Mt=lt.added[ut],Ft=L.indexOf(Mt);if(Ft===-1){for(let Rt=0;Rt<I.length;Rt++)if(Rt>=L.length){L.push(Mt),Ft=Rt;break}else if(L[Rt]===null){L[Rt]=Mt,Ft=Rt;break}if(Ft===-1)break}let rt=I[Ft];rt&&rt.connect(Mt)}}let tt=new Y,pt=new Y;function dt(lt,ut,Mt){tt.setFromMatrixPosition(ut.matrixWorld),pt.setFromMatrixPosition(Mt.matrixWorld);let Ft=tt.distanceTo(pt),rt=ut.projectionMatrix.elements,Rt=Mt.projectionMatrix.elements,Ot=rt[14]/(rt[10]-1),k=rt[14]/(rt[10]+1),Yt=(rt[9]+1)/rt[5],Bt=(rt[9]-1)/rt[5],Lt=(rt[8]-1)/rt[0],gt=(Rt[8]+1)/Rt[0],kt=Ot*Lt,wt=Ot*gt,Vt=Ft/(-Lt+gt),St=Vt*-Lt;if(ut.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(St),lt.translateZ(Vt),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),rt[10]===-1)lt.projectionMatrix.copy(ut.projectionMatrix),lt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let Gt=Ot+Vt,U=k+Vt,S=kt-St,K=wt+(Ft-St),ht=Yt*k/U*Gt,_t=Bt*k/U*Gt;lt.projectionMatrix.makePerspective(S,K,ht,_t,Gt,U),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function yt(lt,ut){ut===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(ut.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let ut=lt.near,Mt=lt.far;m.texture!==null&&(m.depthNear>0&&(ut=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),O.near=M.near=b.near=ut,O.far=M.far=b.far=Mt,(X!==O.near||$!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),X=O.near,$=O.far),O.layers.mask=lt.layers.mask|6,b.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;let Ft=lt.parent,rt=O.cameras;yt(O,Ft);for(let Rt=0;Rt<rt.length;Rt++)yt(rt[Rt],Ft);rt.length===2?dt(O,b,M):O.projectionMatrix.copy(b.projectionMatrix),Nt(lt,O,Ft)};function Nt(lt,ut,Mt){Mt===null?lt.matrix.copy(ut.matrixWorld):(lt.matrix.copy(Mt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(ut.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(ut.projectionMatrix),lt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Qi*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(lt){l=lt,d!==null&&(d.fixedFoveation=lt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=lt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(lt){return f[lt]};let Et=null;function qt(lt,ut){if(h=ut.getViewerPose(c||o),g=ut,h!==null){let Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let Ft=!1;Mt.length!==O.cameras.length&&(O.cameras.length=0,Ft=!0);for(let k=0;k<Mt.length;k++){let Yt=Mt[k],Bt=null;if(p!==null)Bt=p.getViewport(Yt);else{let gt=u.getViewSubImage(d,Yt);Bt=gt.viewport,k===0&&(t.setRenderTargetTextures(T,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(T))}let Lt=V[k];Lt===void 0&&(Lt=new Be,Lt.layers.enable(k),Lt.viewport=new fe,V[k]=Lt),Lt.matrix.fromArray(Yt.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Yt.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),k===0&&(O.matrix.copy(Lt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ft===!0&&O.cameras.push(Lt)}let rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let k=u.getDepthInformation(Mt[0]);k&&k.isValid&&k.texture&&m.init(k,s.renderState)}if(rt&&rt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let k=0;k<Mt.length;k++){let Yt=Mt[k].camera;if(Yt){let Bt=f[Yt];Bt||(Bt=new qs,f[Yt]=Bt);let Lt=u.getCameraImage(Yt);Bt.sourceTexture=Lt}}}}for(let Mt=0;Mt<I.length;Mt++){let Ft=L[Mt],rt=I[Mt];Ft!==null&&rt!==void 0&&rt.update(Ft,ut,c||o)}Et&&Et(lt,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}let Xt=new gh;Xt.setAnimationLoop(qt),this.setAnimationLoop=function(lt){Et=lt},this.dispose=function(){}}},Li=new bn,ug=new ae;function dg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,lc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,w,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=t.get(f),w=E.envMap,T=E.envMapRotation;w&&(m.envMap.value=w,Li.copy(T),Li.x*=-1,Li.y*=-1,Li.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(ug.makeRotationFromEuler(Li)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){let T=w.program;n.uniformBlockBinding(E,T)}function c(E,w){let T=s[E.id];T===void 0&&(g(E),T=h(E),s[E.id]=T,E.addEventListener("dispose",m));let I=w.program;n.updateUBOMapping(E,I);let L=t.render.frame;r[E.id]!==L&&(d(E),r[E.id]=L)}function h(E){let w=u();E.__bindingPointIndex=w;let T=i.createBuffer(),I=E.__size,L=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let w=s[E.id],T=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let L=0,B=T.length;L<B;L++){let F=Array.isArray(T[L])?T[L]:[T[L]];for(let b=0,M=F.length;b<M;b++){let V=F[b];if(p(V,L,b,I)===!0){let O=V.__offset,X=Array.isArray(V.value)?V.value:[V.value],$=0;for(let j=0;j<X.length;j++){let J=X[j],ft=y(J);typeof J=="number"||typeof J=="boolean"?(V.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,O+$,V.__data)):J.isMatrix3?(V.__data[0]=J.elements[0],V.__data[1]=J.elements[1],V.__data[2]=J.elements[2],V.__data[3]=0,V.__data[4]=J.elements[3],V.__data[5]=J.elements[4],V.__data[6]=J.elements[5],V.__data[7]=0,V.__data[8]=J.elements[6],V.__data[9]=J.elements[7],V.__data[10]=J.elements[8],V.__data[11]=0):(J.toArray(V.__data,$),$+=ft.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,w,T,I){let L=E.value,B=w+"_"+T;if(I[B]===void 0)return typeof L=="number"||typeof L=="boolean"?I[B]=L:I[B]=L.clone(),!0;{let F=I[B];if(typeof L=="number"||typeof L=="boolean"){if(F!==L)return I[B]=L,!0}else if(F.equals(L)===!1)return F.copy(L),!0}return!1}function g(E){let w=E.uniforms,T=0,I=16;for(let B=0,F=w.length;B<F;B++){let b=Array.isArray(w[B])?w[B]:[w[B]];for(let M=0,V=b.length;M<V;M++){let O=b[M],X=Array.isArray(O.value)?O.value:[O.value];for(let $=0,j=X.length;$<j;$++){let J=X[$],ft=y(J),tt=T%I,pt=tt%ft.boundary,dt=tt+pt;T+=pt,dt!==0&&I-dt<ft.storage&&(T+=I-dt),O.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=ft.storage}}}let L=T%I;return L>0&&(T+=I-L),E.__size=T,E.__cache={},this}function y(E){let w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function m(E){let w=E.target;w.removeEventListener("dispose",m);let T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var ra=class{constructor(t={}){let{canvas:e=Gl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,E=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,I=!1;this._outputColorSpace=we;let L=0,B=0,F=null,b=-1,M=null,V=new fe,O=new fe,X=null,$=new Ct(0),j=0,J=e.width,ft=e.height,tt=1,pt=null,dt=null,yt=new fe(0,0,J,ft),Nt=new fe(0,0,J,ft),Et=!1,qt=new ss,Xt=!1,lt=!1,ut=new ae,Mt=new Y,Ft=new fe,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function Ot(){return F===null?tt:1}let k=n;function Yt(C,Q){return e.getContext(C,Q)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",W,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",H,!1),k===null){let Q="webgl2";if(k=Yt(Q,C),k===null)throw Yt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Bt,Lt,gt,kt,wt,Vt,St,Gt,U,S,K,ht,_t,x,R,v,A,P,D,G,it,st,q,ot;function _(){Bt=new Pp(k),Bt.init(),st=new cg(k,Bt),Lt=new Tp(k,Bt,t,st),gt=new og(k,Bt),Lt.reversedDepthBuffer&&d&&gt.buffers.depth.setReversed(!0),kt=new Up(k),wt=new Ym,Vt=new ag(k,Bt,gt,wt,Lt,st,kt),St=new Ep(T),Gt=new Ip(T),U=new zu(k),q=new Sp(k,U),S=new Lp(k,U,kt,q),K=new Fp(k,S,U,kt),D=new Np(k,Lt,Vt),v=new wp(wt),ht=new qm(T,St,Gt,Bt,Lt,q,v),_t=new dg(T,wt),x=new Jm,R=new eg(Bt),P=new Mp(T,St,Gt,gt,K,p,l),A=new sg(T,K,Lt),ot=new fg(k,kt,Lt,gt),G=new bp(k,Bt,kt),it=new Dp(k,Bt,kt),kt.programs=ht.programs,T.capabilities=Lt,T.extensions=Bt,T.properties=wt,T.renderLists=x,T.shadowMap=A,T.state=gt,T.info=kt}_();let N=new Ac(T,k);this.xr=N,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let C=Bt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Bt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(C){C!==void 0&&(tt=C,this.setSize(J,ft,!1))},this.getSize=function(C){return C.set(J,ft)},this.setSize=function(C,Q,at=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=C,ft=Q,e.width=Math.floor(C*tt),e.height=Math.floor(Q*tt),at===!0&&(e.style.width=C+"px",e.style.height=Q+"px"),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(J*tt,ft*tt).floor()},this.setDrawingBufferSize=function(C,Q,at){J=C,ft=Q,tt=at,e.width=Math.floor(C*at),e.height=Math.floor(Q*at),this.setViewport(0,0,C,Q)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(yt)},this.setViewport=function(C,Q,at,ct){C.isVector4?yt.set(C.x,C.y,C.z,C.w):yt.set(C,Q,at,ct),gt.viewport(V.copy(yt).multiplyScalar(tt).round())},this.getScissor=function(C){return C.copy(Nt)},this.setScissor=function(C,Q,at,ct){C.isVector4?Nt.set(C.x,C.y,C.z,C.w):Nt.set(C,Q,at,ct),gt.scissor(O.copy(Nt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(C){gt.setScissorTest(Et=C)},this.setOpaqueSort=function(C){pt=C},this.setTransparentSort=function(C){dt=C},this.getClearColor=function(C){return C.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(C=!0,Q=!0,at=!0){let ct=0;if(C){let nt=!1;if(F!==null){let vt=F.texture.format;nt=vt===Eo||vt===wo||vt===To}if(nt){let vt=F.texture.type,Pt=vt===wn||vt===hi||vt===as||vt===ls||vt===Mo||vt===So,Ut=P.getClearColor(),Dt=P.getClearAlpha(),Wt=Ut.r,Zt=Ut.g,zt=Ut.b;Pt?(g[0]=Wt,g[1]=Zt,g[2]=zt,g[3]=Dt,k.clearBufferuiv(k.COLOR,0,g)):(y[0]=Wt,y[1]=Zt,y[2]=zt,y[3]=Dt,k.clearBufferiv(k.COLOR,0,y))}else ct|=k.COLOR_BUFFER_BIT}Q&&(ct|=k.DEPTH_BUFFER_BIT),at&&(ct|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",W,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",H,!1),P.dispose(),x.dispose(),R.dispose(),wt.dispose(),St.dispose(),Gt.dispose(),K.dispose(),q.dispose(),ot.dispose(),ht.dispose(),N.dispose(),N.removeEventListener("sessionstart",Jt),N.removeEventListener("sessionend",ie),xe.stop()};function W(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let C=kt.autoReset,Q=A.enabled,at=A.autoUpdate,ct=A.needsUpdate,nt=A.type;_(),kt.autoReset=C,A.enabled=Q,A.autoUpdate=at,A.needsUpdate=ct,A.type=nt}function H(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function z(C){let Q=C.target;Q.removeEventListener("dispose",z),et(Q)}function et(C){xt(C),wt.remove(C)}function xt(C){let Q=wt.get(C).programs;Q!==void 0&&(Q.forEach(function(at){ht.releaseProgram(at)}),C.isShaderMaterial&&ht.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,at,ct,nt,vt){Q===null&&(Q=rt);let Pt=nt.isMesh&&nt.matrixWorld.determinant()<0,Ut=Dh(C,Q,at,ct,nt);gt.setMaterial(ct,Pt);let Dt=at.index,Wt=1;if(ct.wireframe===!0){if(Dt=S.getWireframeAttribute(at),Dt===void 0)return;Wt=2}let Zt=at.drawRange,zt=at.attributes.position,ne=Zt.start*Wt,le=(Zt.start+Zt.count)*Wt;vt!==null&&(ne=Math.max(ne,vt.start*Wt),le=Math.min(le,(vt.start+vt.count)*Wt)),Dt!==null?(ne=Math.max(ne,0),le=Math.min(le,Dt.count)):zt!=null&&(ne=Math.max(ne,0),le=Math.min(le,zt.count));let be=le-ne;if(be<0||be===1/0)return;q.setup(nt,ct,Ut,at,Dt);let pe,ue=G;if(Dt!==null&&(pe=U.get(Dt),ue=it,ue.setIndex(pe)),nt.isMesh)ct.wireframe===!0?(gt.setLineWidth(ct.wireframeLinewidth*Ot()),ue.setMode(k.LINES)):ue.setMode(k.TRIANGLES);else if(nt.isLine){let Ht=ct.linewidth;Ht===void 0&&(Ht=1),gt.setLineWidth(Ht*Ot()),nt.isLineSegments?ue.setMode(k.LINES):nt.isLineLoop?ue.setMode(k.LINE_LOOP):ue.setMode(k.LINE_STRIP)}else nt.isPoints?ue.setMode(k.POINTS):nt.isSprite&&ue.setMode(k.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))ue.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let Ht=nt._multiDrawStarts,ve=nt._multiDrawCounts,oe=nt._multiDrawCount,Qe=Dt?U.get(Dt).bytesPerElement:1,Fi=wt.get(ct).currentProgram.getUniforms();for(let tn=0;tn<oe;tn++)Fi.setValue(k,"_gl_DrawID",tn),ue.render(Ht[tn]/Qe,ve[tn])}else if(nt.isInstancedMesh)ue.renderInstances(ne,be,nt.count);else if(at.isInstancedBufferGeometry){let Ht=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,ve=Math.min(at.instanceCount,Ht);ue.renderInstances(ne,be,ve)}else ue.render(ne,be)};function mt(C,Q,at){C.transparent===!0&&C.side===Se&&C.forceSinglePass===!1?(C.side=ze,C.needsUpdate=!0,On(C,Q,at),C.side=Mn,C.needsUpdate=!0,On(C,Q,at),C.side=Se):On(C,Q,at)}this.compile=function(C,Q,at=null){at===null&&(at=C),f=R.get(at),f.init(Q),w.push(f),at.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Q.layers)&&(f.pushLight(nt),nt.castShadow&&f.pushShadow(nt))}),C!==at&&C.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Q.layers)&&(f.pushLight(nt),nt.castShadow&&f.pushShadow(nt))}),f.setupLights();let ct=new Set;return C.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let vt=nt.material;if(vt)if(Array.isArray(vt))for(let Pt=0;Pt<vt.length;Pt++){let Ut=vt[Pt];mt(Ut,at,nt),ct.add(Ut)}else mt(vt,at,nt),ct.add(vt)}),f=w.pop(),ct},this.compileAsync=function(C,Q,at=null){let ct=this.compile(C,Q,at);return new Promise(nt=>{function vt(){if(ct.forEach(function(Pt){wt.get(Pt).currentProgram.isReady()&&ct.delete(Pt)}),ct.size===0){nt(C);return}setTimeout(vt,10)}Bt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let bt=null;function $t(C){bt&&bt(C)}function Jt(){xe.stop()}function ie(){xe.start()}let xe=new gh;xe.setAnimationLoop($t),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(C){bt=C,N.setAnimationLoop(C),C===null?xe.stop():xe.start()},N.addEventListener("sessionstart",Jt),N.addEventListener("sessionend",ie),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(Q),Q=N.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,Q,F),f=R.get(C,w.length),f.init(Q),w.push(f),ut.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),qt.setFromProjectionMatrix(ut,yn,Q.reversedDepth),lt=this.localClippingEnabled,Xt=v.init(this.clippingPlanes,lt),m=x.get(C,E.length),m.init(),E.push(m),N.enabled===!0&&N.isPresenting===!0){let vt=T.xr.getDepthSensingMesh();vt!==null&&Ne(vt,Q,-1/0,T.sortObjects)}Ne(C,Q,0,T.sortObjects),m.finish(),T.sortObjects===!0&&m.sort(pt,dt),Rt=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,Rt&&P.addToRenderList(m,C),this.info.render.frame++,Xt===!0&&v.beginShadows();let at=f.state.shadowsArray;A.render(at,C,Q),Xt===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset();let ct=m.opaque,nt=m.transmissive;if(f.setupLights(),Q.isArrayCamera){let vt=Q.cameras;if(nt.length>0)for(let Pt=0,Ut=vt.length;Pt<Ut;Pt++){let Dt=vt[Pt];mn(ct,nt,C,Dt)}Rt&&P.render(C);for(let Pt=0,Ut=vt.length;Pt<Ut;Pt++){let Dt=vt[Pt];ge(m,C,Dt,Dt.viewport)}}else nt.length>0&&mn(ct,nt,C,Q),Rt&&P.render(C),ge(m,C,Q);F!==null&&B===0&&(Vt.updateMultisampleRenderTarget(F),Vt.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(T,C,Q),q.resetDefaultState(),b=-1,M=null,w.pop(),w.length>0?(f=w[w.length-1],Xt===!0&&v.setGlobalState(T.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ne(C,Q,at,ct){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)at=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||qt.intersectsSprite(C)){ct&&Ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ut);let Pt=K.update(C),Ut=C.material;Ut.visible&&m.push(C,Pt,Ut,at,Ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||qt.intersectsObject(C))){let Pt=K.update(C),Ut=C.material;if(ct&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ft.copy(C.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ft.copy(Pt.boundingSphere.center)),Ft.applyMatrix4(C.matrixWorld).applyMatrix4(ut)),Array.isArray(Ut)){let Dt=Pt.groups;for(let Wt=0,Zt=Dt.length;Wt<Zt;Wt++){let zt=Dt[Wt],ne=Ut[zt.materialIndex];ne&&ne.visible&&m.push(C,Pt,ne,at,Ft.z,zt)}}else Ut.visible&&m.push(C,Pt,Ut,at,Ft.z,null)}}let vt=C.children;for(let Pt=0,Ut=vt.length;Pt<Ut;Pt++)Ne(vt[Pt],Q,at,ct)}function ge(C,Q,at,ct){let nt=C.opaque,vt=C.transmissive,Pt=C.transparent;f.setupLightsView(at),Xt===!0&&v.setGlobalState(T.clippingPlanes,at),ct&&gt.viewport(V.copy(ct)),nt.length>0&&je(nt,Q,at),vt.length>0&&je(vt,Q,at),Pt.length>0&&je(Pt,Q,at),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function mn(C,Q,at,ct){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ct.id]===void 0&&(f.state.transmissionRenderTarget[ct.id]=new hn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?cs:wn,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let vt=f.state.transmissionRenderTarget[ct.id],Pt=ct.viewport||V;vt.setSize(Pt.z*T.transmissionResolutionScale,Pt.w*T.transmissionResolutionScale);let Ut=T.getRenderTarget(),Dt=T.getActiveCubeFace(),Wt=T.getActiveMipmapLevel();T.setRenderTarget(vt),T.getClearColor($),j=T.getClearAlpha(),j<1&&T.setClearColor(16777215,.5),T.clear(),Rt&&P.render(at);let Zt=T.toneMapping;T.toneMapping=Jn;let zt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),f.setupLightsView(ct),Xt===!0&&v.setGlobalState(T.clippingPlanes,ct),je(C,at,ct),Vt.updateMultisampleRenderTarget(vt),Vt.updateRenderTargetMipmap(vt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let le=0,be=Q.length;le<be;le++){let pe=Q[le],ue=pe.object,Ht=pe.geometry,ve=pe.material,oe=pe.group;if(ve.side===Se&&ue.layers.test(ct.layers)){let Qe=ve.side;ve.side=ze,ve.needsUpdate=!0,gn(ue,at,ct,Ht,ve,oe),ve.side=Qe,ve.needsUpdate=!0,ne=!0}}ne===!0&&(Vt.updateMultisampleRenderTarget(vt),Vt.updateRenderTargetMipmap(vt))}T.setRenderTarget(Ut,Dt,Wt),T.setClearColor($,j),zt!==void 0&&(ct.viewport=zt),T.toneMapping=Zt}function je(C,Q,at){let ct=Q.isScene===!0?Q.overrideMaterial:null;for(let nt=0,vt=C.length;nt<vt;nt++){let Pt=C[nt],Ut=Pt.object,Dt=Pt.geometry,Wt=Pt.group,Zt=Pt.material;Zt.allowOverride===!0&&ct!==null&&(Zt=ct),Ut.layers.test(at.layers)&&gn(Ut,Q,at,Dt,Zt,Wt)}}function gn(C,Q,at,ct,nt,vt){C.onBeforeRender(T,Q,at,ct,nt,vt),C.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),nt.onBeforeRender(T,Q,at,ct,C,vt),nt.transparent===!0&&nt.side===Se&&nt.forceSinglePass===!1?(nt.side=ze,nt.needsUpdate=!0,T.renderBufferDirect(at,Q,ct,nt,C,vt),nt.side=Mn,nt.needsUpdate=!0,T.renderBufferDirect(at,Q,ct,nt,C,vt),nt.side=Se):T.renderBufferDirect(at,Q,ct,nt,C,vt),C.onAfterRender(T,Q,at,ct,nt,vt)}function On(C,Q,at){Q.isScene!==!0&&(Q=rt);let ct=wt.get(C),nt=f.state.lights,vt=f.state.shadowsArray,Pt=nt.state.version,Ut=ht.getParameters(C,nt.state,vt,Q,at),Dt=ht.getProgramCacheKey(Ut),Wt=ct.programs;ct.environment=C.isMeshStandardMaterial?Q.environment:null,ct.fog=Q.fog,ct.envMap=(C.isMeshStandardMaterial?Gt:St).get(C.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,Wt===void 0&&(C.addEventListener("dispose",z),Wt=new Map,ct.programs=Wt);let Zt=Wt.get(Dt);if(Zt!==void 0){if(ct.currentProgram===Zt&&ct.lightsStateVersion===Pt)return Ms(C,Ut),Zt}else Ut.uniforms=ht.getUniforms(C),C.onBeforeCompile(Ut,T),Zt=ht.acquireProgram(Ut,Dt),Wt.set(Dt,Zt),ct.uniforms=Ut.uniforms;let zt=ct.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(zt.clippingPlanes=v.uniform),Ms(C,Ut),ct.needsLights=Nh(C),ct.lightsStateVersion=Pt,ct.needsLights&&(zt.ambientLightColor.value=nt.state.ambient,zt.lightProbe.value=nt.state.probe,zt.directionalLights.value=nt.state.directional,zt.directionalLightShadows.value=nt.state.directionalShadow,zt.spotLights.value=nt.state.spot,zt.spotLightShadows.value=nt.state.spotShadow,zt.rectAreaLights.value=nt.state.rectArea,zt.ltc_1.value=nt.state.rectAreaLTC1,zt.ltc_2.value=nt.state.rectAreaLTC2,zt.pointLights.value=nt.state.point,zt.pointLightShadows.value=nt.state.pointShadow,zt.hemisphereLights.value=nt.state.hemi,zt.directionalShadowMap.value=nt.state.directionalShadowMap,zt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,zt.spotShadowMap.value=nt.state.spotShadowMap,zt.spotLightMatrix.value=nt.state.spotLightMatrix,zt.spotLightMap.value=nt.state.spotLightMap,zt.pointShadowMap.value=nt.state.pointShadowMap,zt.pointShadowMatrix.value=nt.state.pointShadowMatrix),ct.currentProgram=Zt,ct.uniformsList=null,Zt}function ys(C){if(C.uniformsList===null){let Q=C.currentProgram.getUniforms();C.uniformsList=ps.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function Ms(C,Q){let at=wt.get(C);at.outputColorSpace=Q.outputColorSpace,at.batching=Q.batching,at.batchingColor=Q.batchingColor,at.instancing=Q.instancing,at.instancingColor=Q.instancingColor,at.instancingMorph=Q.instancingMorph,at.skinning=Q.skinning,at.morphTargets=Q.morphTargets,at.morphNormals=Q.morphNormals,at.morphColors=Q.morphColors,at.morphTargetsCount=Q.morphTargetsCount,at.numClippingPlanes=Q.numClippingPlanes,at.numIntersection=Q.numClipIntersection,at.vertexAlphas=Q.vertexAlphas,at.vertexTangents=Q.vertexTangents,at.toneMapping=Q.toneMapping}function Dh(C,Q,at,ct,nt){Q.isScene!==!0&&(Q=rt),Vt.resetTextureUnits();let vt=Q.fog,Pt=ct.isMeshStandardMaterial?Q.environment:null,Ut=F===null?T.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Si,Dt=(ct.isMeshStandardMaterial?Gt:St).get(ct.envMap||Pt),Wt=ct.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Zt=!!at.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),zt=!!at.morphAttributes.position,ne=!!at.morphAttributes.normal,le=!!at.morphAttributes.color,be=Jn;ct.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(be=T.toneMapping);let pe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ue=pe!==void 0?pe.length:0,Ht=wt.get(ct),ve=f.state.lights;if(Xt===!0&&(lt===!0||C!==M)){let We=C===M&&ct.id===b;v.setState(ct,C,We)}let oe=!1;ct.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==ve.state.version||Ht.outputColorSpace!==Ut||nt.isBatchedMesh&&Ht.batching===!1||!nt.isBatchedMesh&&Ht.batching===!0||nt.isBatchedMesh&&Ht.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Ht.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Ht.instancing===!1||!nt.isInstancedMesh&&Ht.instancing===!0||nt.isSkinnedMesh&&Ht.skinning===!1||!nt.isSkinnedMesh&&Ht.skinning===!0||nt.isInstancedMesh&&Ht.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Ht.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Ht.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Ht.instancingMorph===!1&&nt.morphTexture!==null||Ht.envMap!==Dt||ct.fog===!0&&Ht.fog!==vt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==v.numPlanes||Ht.numIntersection!==v.numIntersection)||Ht.vertexAlphas!==Wt||Ht.vertexTangents!==Zt||Ht.morphTargets!==zt||Ht.morphNormals!==ne||Ht.morphColors!==le||Ht.toneMapping!==be||Ht.morphTargetsCount!==ue)&&(oe=!0):(oe=!0,Ht.__version=ct.version);let Qe=Ht.currentProgram;oe===!0&&(Qe=On(ct,Q,nt));let Fi=!1,tn=!1,Ss=!1,ye=Qe.getUniforms(),on=Ht.uniforms;if(gt.useProgram(Qe.program)&&(Fi=!0,tn=!0,Ss=!0),ct.id!==b&&(b=ct.id,tn=!0),Fi||M!==C){gt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ye.setValue(k,"projectionMatrix",C.projectionMatrix),ye.setValue(k,"viewMatrix",C.matrixWorldInverse);let Je=ye.map.cameraPosition;Je!==void 0&&Je.setValue(k,Mt.setFromMatrixPosition(C.matrixWorld)),Lt.logarithmicDepthBuffer&&ye.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&ye.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,tn=!0,Ss=!0)}if(nt.isSkinnedMesh){ye.setOptional(k,nt,"bindMatrix"),ye.setOptional(k,nt,"bindMatrixInverse");let We=nt.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),ye.setValue(k,"boneTexture",We.boneTexture,Vt))}nt.isBatchedMesh&&(ye.setOptional(k,nt,"batchingTexture"),ye.setValue(k,"batchingTexture",nt._matricesTexture,Vt),ye.setOptional(k,nt,"batchingIdTexture"),ye.setValue(k,"batchingIdTexture",nt._indirectTexture,Vt),ye.setOptional(k,nt,"batchingColorTexture"),nt._colorsTexture!==null&&ye.setValue(k,"batchingColorTexture",nt._colorsTexture,Vt));let an=at.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&D.update(nt,at,Qe),(tn||Ht.receiveShadow!==nt.receiveShadow)&&(Ht.receiveShadow=nt.receiveShadow,ye.setValue(k,"receiveShadow",nt.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(on.envMap.value=Dt,on.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&Q.environment!==null&&(on.envMapIntensity.value=Q.environmentIntensity),tn&&(ye.setValue(k,"toneMappingExposure",T.toneMappingExposure),Ht.needsLights&&Uh(on,Ss),vt&&ct.fog===!0&&_t.refreshFogUniforms(on,vt),_t.refreshMaterialUniforms(on,ct,tt,ft,f.state.transmissionRenderTarget[C.id]),ps.upload(k,ys(Ht),on,Vt)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(ps.upload(k,ys(Ht),on,Vt),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&ye.setValue(k,"center",nt.center),ye.setValue(k,"modelViewMatrix",nt.modelViewMatrix),ye.setValue(k,"normalMatrix",nt.normalMatrix),ye.setValue(k,"modelMatrix",nt.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){let We=ct.uniformsGroups;for(let Je=0,ha=We.length;Je<ha;Je++){let fi=We[Je];ot.update(fi,Qe),ot.bind(fi,Qe)}}return Qe}function Uh(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function Nh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,Q,at){let ct=wt.get(C);ct.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),wt.get(C.texture).__webglTexture=Q,wt.get(C.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:at,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Q){let at=wt.get(C);at.__webglFramebuffer=Q,at.__useDefaultFramebuffer=Q===void 0};let Fh=k.createFramebuffer();this.setRenderTarget=function(C,Q=0,at=0){F=C,L=Q,B=at;let ct=!0,nt=null,vt=!1,Pt=!1;if(C){let Dt=wt.get(C);if(Dt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(k.FRAMEBUFFER,null),ct=!1;else if(Dt.__webglFramebuffer===void 0)Vt.setupRenderTarget(C);else if(Dt.__hasExternalTextures)Vt.rebindTextures(C,wt.get(C.texture).__webglTexture,wt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let zt=C.depthTexture;if(Dt.__boundDepthTexture!==zt){if(zt!==null&&wt.has(zt)&&(C.width!==zt.image.width||C.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(C)}}let Wt=C.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Pt=!0);let Zt=wt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Zt[Q])?nt=Zt[Q][at]:nt=Zt[Q],vt=!0):C.samples>0&&Vt.useMultisampledRTT(C)===!1?nt=wt.get(C).__webglMultisampledFramebuffer:Array.isArray(Zt)?nt=Zt[at]:nt=Zt,V.copy(C.viewport),O.copy(C.scissor),X=C.scissorTest}else V.copy(yt).multiplyScalar(tt).floor(),O.copy(Nt).multiplyScalar(tt).floor(),X=Et;if(at!==0&&(nt=Fh),gt.bindFramebuffer(k.FRAMEBUFFER,nt)&&ct&&gt.drawBuffers(C,nt),gt.viewport(V),gt.scissor(O),gt.setScissorTest(X),vt){let Dt=wt.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Dt.__webglTexture,at)}else if(Pt){let Dt=Q;for(let Wt=0;Wt<C.textures.length;Wt++){let Zt=wt.get(C.textures[Wt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Wt,Zt.__webglTexture,at,Dt)}}else if(C!==null&&at!==0){let Dt=wt.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Dt.__webglTexture,at)}b=-1},this.readRenderTargetPixels=function(C,Q,at,ct,nt,vt,Pt,Ut=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt){gt.bindFramebuffer(k.FRAMEBUFFER,Dt);try{let Wt=C.textures[Ut],Zt=Wt.format,zt=Wt.type;if(!Lt.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-ct&&at>=0&&at<=C.height-nt&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ut),k.readPixels(Q,at,ct,nt,st.convert(Zt),st.convert(zt),vt))}finally{let Wt=F!==null?wt.get(F).__webglFramebuffer:null;gt.bindFramebuffer(k.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(C,Q,at,ct,nt,vt,Pt,Ut=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt)if(Q>=0&&Q<=C.width-ct&&at>=0&&at<=C.height-nt){gt.bindFramebuffer(k.FRAMEBUFFER,Dt);let Wt=C.textures[Ut],Zt=Wt.format,zt=Wt.type;if(!Lt.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ne),k.bufferData(k.PIXEL_PACK_BUFFER,vt.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ut),k.readPixels(Q,at,ct,nt,st.convert(Zt),st.convert(zt),0);let le=F!==null?wt.get(F).__webglFramebuffer:null;gt.bindFramebuffer(k.FRAMEBUFFER,le);let be=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Wl(k,be,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ne),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,vt),k.deleteBuffer(ne),k.deleteSync(be),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Q=null,at=0){let ct=Math.pow(2,-at),nt=Math.floor(C.image.width*ct),vt=Math.floor(C.image.height*ct),Pt=Q!==null?Q.x:0,Ut=Q!==null?Q.y:0;Vt.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,at,0,0,Pt,Ut,nt,vt),gt.unbindTexture()};let Bh=k.createFramebuffer(),Oh=k.createFramebuffer();this.copyTextureToTexture=function(C,Q,at=null,ct=null,nt=0,vt=null){vt===null&&(nt!==0?(ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=nt,nt=0):vt=0);let Pt,Ut,Dt,Wt,Zt,zt,ne,le,be,pe=C.isCompressedTexture?C.mipmaps[vt]:C.image;if(at!==null)Pt=at.max.x-at.min.x,Ut=at.max.y-at.min.y,Dt=at.isBox3?at.max.z-at.min.z:1,Wt=at.min.x,Zt=at.min.y,zt=at.isBox3?at.min.z:0;else{let an=Math.pow(2,-nt);Pt=Math.floor(pe.width*an),Ut=Math.floor(pe.height*an),C.isDataArrayTexture?Dt=pe.depth:C.isData3DTexture?Dt=Math.floor(pe.depth*an):Dt=1,Wt=0,Zt=0,zt=0}ct!==null?(ne=ct.x,le=ct.y,be=ct.z):(ne=0,le=0,be=0);let ue=st.convert(Q.format),Ht=st.convert(Q.type),ve;Q.isData3DTexture?(Vt.setTexture3D(Q,0),ve=k.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Vt.setTexture2DArray(Q,0),ve=k.TEXTURE_2D_ARRAY):(Vt.setTexture2D(Q,0),ve=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment);let oe=k.getParameter(k.UNPACK_ROW_LENGTH),Qe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Fi=k.getParameter(k.UNPACK_SKIP_PIXELS),tn=k.getParameter(k.UNPACK_SKIP_ROWS),Ss=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,pe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Wt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Zt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,zt);let ye=C.isDataArrayTexture||C.isData3DTexture,on=Q.isDataArrayTexture||Q.isData3DTexture;if(C.isDepthTexture){let an=wt.get(C),We=wt.get(Q),Je=wt.get(an.__renderTarget),ha=wt.get(We.__renderTarget);gt.bindFramebuffer(k.READ_FRAMEBUFFER,Je.__webglFramebuffer),gt.bindFramebuffer(k.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let fi=0;fi<Dt;fi++)ye&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,wt.get(C).__webglTexture,nt,zt+fi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,wt.get(Q).__webglTexture,vt,be+fi)),k.blitFramebuffer(Wt,Zt,Pt,Ut,ne,le,Pt,Ut,k.DEPTH_BUFFER_BIT,k.NEAREST);gt.bindFramebuffer(k.READ_FRAMEBUFFER,null),gt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(nt!==0||C.isRenderTargetTexture||wt.has(C)){let an=wt.get(C),We=wt.get(Q);gt.bindFramebuffer(k.READ_FRAMEBUFFER,Bh),gt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Oh);for(let Je=0;Je<Dt;Je++)ye?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,an.__webglTexture,nt,zt+Je):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,an.__webglTexture,nt),on?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.__webglTexture,vt,be+Je):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,We.__webglTexture,vt),nt!==0?k.blitFramebuffer(Wt,Zt,Pt,Ut,ne,le,Pt,Ut,k.COLOR_BUFFER_BIT,k.NEAREST):on?k.copyTexSubImage3D(ve,vt,ne,le,be+Je,Wt,Zt,Pt,Ut):k.copyTexSubImage2D(ve,vt,ne,le,Wt,Zt,Pt,Ut);gt.bindFramebuffer(k.READ_FRAMEBUFFER,null),gt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else on?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(ve,vt,ne,le,be,Pt,Ut,Dt,ue,Ht,pe.data):Q.isCompressedArrayTexture?k.compressedTexSubImage3D(ve,vt,ne,le,be,Pt,Ut,Dt,ue,pe.data):k.texSubImage3D(ve,vt,ne,le,be,Pt,Ut,Dt,ue,Ht,pe):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,vt,ne,le,Pt,Ut,ue,Ht,pe.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,vt,ne,le,pe.width,pe.height,ue,pe.data):k.texSubImage2D(k.TEXTURE_2D,vt,ne,le,Pt,Ut,ue,Ht,pe);k.pixelStorei(k.UNPACK_ROW_LENGTH,oe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Qe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Fi),k.pixelStorei(k.UNPACK_SKIP_ROWS,tn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ss),vt===0&&Q.generateMipmaps&&k.generateMipmap(ve),gt.unbindTexture()},this.initRenderTarget=function(C){wt.get(C).__webglFramebuffer===void 0&&Vt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Vt.setTextureCube(C,0):C.isData3DTexture?Vt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Vt.setTexture2DArray(C,0):Vt.setTexture2D(C,0),gt.unbindTexture()},this.resetState=function(){L=0,B=0,F=null,gt.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var _e=(i,t)=>.09*Math.sin(i*.075)+.1*Math.sin(t*.18)+Math.max(0,Math.abs(t)-37)*.012*(1+Math.sin(i*.025+t*.1)),Ge=i=>3.5*Math.sin(i/55)+2.1*Math.sin(i/26),Fn=i=>14.9+1.4*Math.sin(i/38+.7),hr=-.73,Ue=-4,gs=21.8,_s=10.6,Ke=i=>{let t=Math.min(1,Math.abs(i-Ge(Ue))/gs);return .13+5.65*Math.pow(1-t*t,1.28)},ur={west:-164,east:178,south:75,north:-74};function xs(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}var Ae=[{name:"\u90CA\u91CE",area:"\u57CE\u5916\u7530\u7574",x:-126,z:25,look:[-112,1.9,18],sound:"field",note:"\u5C0F\u8DEF\u7A7F\u8FC7\u9EA6\u5730\u3002\u7530\u57C2\u90A3\u5934\u6709\u4EBA\u6311\u62C5\uFF0C\u6CBF\u6CB3\u518D\u8D70\u4E00\u6BB5\u5C31\u662F\u8D27\u6808\u3002",path:[[-115,23],[-102,21.2],[-90,20]]},{name:"\u6C74\u6CB3",area:"\u6CB3\u5CB8\u7EA4\u9053",x:-79,z:18,look:[-53,1,4],sound:"river",note:"\u5DE1\u5352\u6CBF\u7740\u7EA4\u9053\u8D70\u8FC7\uFF0C\u6CB3\u4E2D\u8D27\u8239\u5F80\u6765\u3002\u9760\u8FD1\u8679\u6865\u65F6\uFF0C\u8239\u5DE5\u628A\u6845\u6746\u653E\u4F4E\u3002",path:[[-68,18],[-55,18],[-46,19]]},{name:"\u7801\u5934",area:"\u6CB3\u5CB8\u8D27\u6808",x:-36,z:18,look:[-27,1.1,12],sound:"dock",note:"\u811A\u592B\u6311\u8D27\u8FC7\u8DF3\u677F\uFF0C\u5DE1\u5352\u6CBF\u7740\u8D27\u6808\u5916\u4FA7\u5F80\u8FD4\u3002\u8F66\u9A6C\u4ECE\u5378\u8D27\u7684\u4EBA\u7FA4\u65C1\u7ECF\u8FC7\u3002",path:[[-27,20],[-16,21],[-7,23],[-4,22]]},{name:"\u8679\u6865",area:"\u6C74\u6CB3\u6E21\u53E3",x:-4,z:-.1,look:[-3.5,5.8,-11],sound:"market",note:"\u6865\u680F\u8FB9\u6446\u7740\u679C\u5B50\u3001\u80E1\u997C\u548C\u8336\u6C34\u3002\u7AD9\u5728\u644A\u95F4\u5F80\u6CB3\u91CC\u671B\uFF0C\u8FD8\u80FD\u770B\u89C1\u8D27\u8239\u8FC7\u6865\u3002",path:[[-4,-10],[-4,-22],[3,-23],[14,-23]]},{name:"\u8857\u5E02",area:"\u57CE\u5916\u5927\u8857",x:23,z:-24,look:[42,1.3,-24],sound:"market",note:"\u5E03\u5377\u548C\u679C\u5B50\u6446\u5728\u68DA\u4E0B\uFF0C\u4E70\u5BA2\u5728\u644A\u524D\u6311\u62E3\u3002\u8D76\u8DEF\u7684\u9A91\u624B\u6CBF\u8857\u5FC3\u7ECF\u8FC7\u3002",path:[[32,-24],[43,-25],[46,-26.2]]},{name:"\u5546\u94FA",area:"\u6CBF\u8857\u8D27\u94FA",x:48,z:-30.7,look:[49,1.35,-34.6],sound:"shop",note:"\u5E97\u4E3B\u5728\u67DC\u540E\u62DB\u547C\u3002\u4E70\u5BA2\u51D1\u8FD1\u770B\u9752\u74F7\uFF0C\u6311\u597D\u4FBF\u8F6C\u8EAB\u51FA\u95E8\u3002",path:[[48,-27],[53,-24],[64,-24],[68,-27]]},{name:"\u9152\u697C",area:"\u4E34\u8857\u9152\u8086",x:69,z:-31,look:[65.7,1.46,-36],sound:"shop",note:"\u4ECE\u6728\u67F1\u4E4B\u95F4\u8D70\u8FDB\u53BB\uFF0C\u6CBF\u7A97\u6446\u7740\u684C\u51F3\u3002\u5C4B\u5916\u7684\u8857\u58F0\u8FD8\u542C\u5F97\u89C1\u3002",path:[[69,-27],[74,-24],[82,-24],[90,-25]]},{name:"\u57CE\u95E8",area:"\u5165\u57CE\u95E8\u9053",x:90.9,z:-25,look:[105,5.6,-25],sound:"market",note:"\u7A7F\u8FC7\u95E8\u6D1E\u540E\uFF0C\u627E\u8857\u4E24\u65C1\u7684\u300C\u767B\u57CE\u300D\u6728\u724C\u3002\u4E24\u9053\u77F3\u9636\u90FD\u901A\u5F80\u57CE\u5899\u548C\u95E8\u697C\u3002",path:[[105,-25],[115,-25],[124,-25],[129,-29],[129,-35]]},{name:"\u57CE\u5185\u8857\u5DF7",area:"\u574A\u5DF7\u4EBA\u5BB6",x:129,z:-45,look:[130,1.6,-59],sound:"lane",note:"\u5C4B\u6A90\u4E0B\u667E\u7740\u5E03\uFF0C\u5DE1\u5352\u6CBF\u574A\u5DF7\u8D70\u8FC7\u3002\u7A84\u5DF7\u4E24\u5934\u90FD\u6709\u901A\u5F80\u8857\u5E02\u7684\u5C0F\u8DEF\u3002",path:[]}],Rc=[{position:[36,8.4,24.3],look:[-11,3.2,7.5]},{position:[-40,9,26],look:[8,3,-11]},{position:[5,23,-12],look:[48,0,-25]}];function Mh(){let i=xs(5905),t=256,e=new Float32Array(4096).map(()=>i()),n=jt.lerp;function s(h,u){let d=Math.floor(h),p=Math.floor(u),g=h-d,y=u-p;g*=g*(3-2*g),y*=y*(3-2*y);let m=(f,E)=>e[(E%64+64)%64*64+(f%64+64)%64];return n(n(m(d,p),m(d+1,p),g),n(m(d,p+1),m(d+1,p+1),g),y)}let r=(h,u)=>{let d=document.createElement("canvas");d.width=d.height=t;let p=d.getContext("2d"),g=p.createImageData(t,t);for(let m=0;m<t;m++)for(let f=0;f<t;f++){let E=f/t,w=m/t,T=s(E*8,w*8),I=s(E*64,w*64),L=1+(T-.5)*.22+(I-.5)*.15+(i()-.5)*.09;if(h==="wood"){let F=s(E*4,w*4)*2.1+Math.sin(w*7+E*3)*.5,b=Math.pow(.5+.5*Math.sin(E*400+F*7),8);L+=(s(E*56,w*4)-.5)*.29-b*.13}if(h==="cloth"&&(L+=(f%3===0?-.054:.024)+(m%3===0?-.055:.024)),h==="stone"||h==="pave"){let F=Math.floor(w*6),b=h==="pave"?.045:.013,M=(E*5+F*.5+b*Math.sin(m*.17))%1,V=w*6%1;M<.037||V<.062?L*=h==="pave"?.78:.64:L+=(s(Math.floor(E*5+F*.5)+9,F+11)-.5)*.19}if(h==="tile"){let F=E*8%1,b=w*6%1,M=Math.pow(Math.sin(Math.PI*F),.6);L=L*(.72+M*.3)-(b<.07?.19:0),F<.065&&(L+=.19)}h==="grass"&&(L+=(s(E*18,w*32)-.5)*.26);let B=(m*t+f)*4;for(let F=0;F<3;F++)g.data[B+F]=u[F]*L;g.data[B+3]=255}p.putImageData(g,0,0);let y=new Dn(d);return y.colorSpace=we,y.wrapS=y.wrapT=Mi,y.anisotropy=8,y},o={};for(let[h,u]of Object.entries({oldwood:["wood",[161,121,85]],timber:["wood",[133,96,67]],beam:["wood",[106,77,55]],plaster:["plain",[207,180,134]],wall:["plain",[189,167,133]],stone:["stone",[155,150,131]],tile:["tile",[123,121,113]],tileDark:["tile",[112,111,104]],brick:["stone",[135,129,110]],linen:["cloth",[224,197,142]],sage:["cloth",[144,153,118]],rust:["cloth",[160,109,75]],straw:["cloth",[189,155,92]],soil:["plain",[159,138,98]],path:["plain",[174,151,112]],pave:["pave",[166,154,128]],grass:["grass",[119,132,66]]}))o[h]=r(...u);let a=document.createElement("canvas");a.width=a.height=128;let l=a.getContext("2d"),c=l.createImageData(128,128);for(let h=0;h<128;h++)for(let u=0;u<128;u++){let d=2*Math.PI/128,p=u*d*7+h*d*2,g=u*d*3-h*d*8+Math.sin(u*d*2),y=u*d*9+h*d*11,m=(h*128+u)*4;c.data[m]=127+32*Math.cos(p)+23*Math.cos(g)+9*Math.sin(y),c.data[m+1]=127+17*Math.cos(p)-33*Math.cos(g)+13*Math.sin(y),c.data[m+2]=244,c.data[m+3]=255}return l.putImageData(c,0,0),o.waterNormal=new Dn(a),o.waterNormal.wrapS=o.waterNormal.wrapT=Mi,o}var Tt=(i,t,e)=>new Y(i,t,e),pg=Tt(0,1,0),Sh=new Ln(1,1,1),Ie=new sn(1,1,1,9),dr=new sn(.7,1,1,10),mg=new sn(1,1,1,7),fr=new Zs(1,0),gg=new wi(1);function fn(i,t={}){return new Tn({map:i,roughness:.91,...t})}function bh(i,t,e){let n=xs(1119),s={};for(let x of["oldwood","timber","beam","plaster","wall","stone","tile","tileDark","brick","linen","sage","rust","straw","soil","path","pave","grass"])s[x]=fn(t[x]);Object.assign(s,{bark:fn(t.beam,{color:9210728}),lacquer:fn(t.timber,{color:11758416}),black:fn(null,{color:3220762}),ceramic:fn(null,{color:10662806,roughness:.34,metalness:.03}),paleCeramic:fn(null,{color:13220237,roughness:.49}),iron:fn(null,{color:5588789,roughness:.59,metalness:.33}),green:fn(null,{color:8423756}),foliage:fn(null,{vertexColors:!0,side:Se,roughness:1})});let r=s.linen.clone();r.side=Se,r.onBeforeCompile=x=>{x.uniforms.windTime=e,x.vertexShader=`uniform float windTime;
`+x.vertexShader,x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.y += .065 * sin(windTime * 1.8 + position.x * 2.4 + position.z * 3.0);`)},s.awning=r,s.foliage.onBeforeCompile=x=>{x.uniforms.windTime=e,x.vertexShader=`uniform float windTime;
`+x.vertexShader,x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x += .060 * sin(windTime * 1.40 + position.z * .28 + position.y * 1.32) * min(position.y,.9);`)};let o=document.createElement("canvas");o.width=o.height=128;let a=o.getContext("2d"),l=xs(883),c=["#738640","#9aa65b","#7e914b","#637742","#879750","#a1aa63","#5c6d38"];for(let x=0;x<520;x++){let R=l()*Math.PI*2,v=Math.sqrt(l())*.95,A=64+Math.cos(R)*v*59,P=64+Math.sin(R)*v*56,D=2.1+l()*4.2;a.fillStyle=c[Math.floor(l()*c.length)],a.beginPath(),a.ellipse(A,P,D,D*(.25+l()*.29),R-l()*1.4,0,Math.PI*2),a.fill()}let h=new Dn(o);h.colorSpace=we,h.anisotropy=4,s.bough=fn(h,{alphaTest:.45,side:Se}),s.bough.onBeforeCompile=s.foliage.onBeforeCompile;let u=new Map,d=new Map,p=[],g=[],y=[],m=[],f=[],E=[],w,T=new Map,I=new Ee,L=()=>.8+n()*.23,B=new Ct;function F(x,R,v,A,P=0,D=L()){let G=R+"/"+x.id;u.has(G)||u.set(G,{geo:x,mat:R,entries:[]}),I.position.copy(v),I.scale.copy(A),typeof P=="number"?I.rotation.set(0,P,0):I.quaternion.copy(P),I.updateMatrix(),u.get(G).entries.push([I.matrix.clone(),D])}function b(x,R,v,A,P,D,G,it=0,st){F(Sh,x,Tt(R,v,A),Tt(P,D,G),it,st)}function M(x,R,v,A,P=A,D=Sh){let G=v.clone().sub(R),it=new qe().setFromUnitVectors(pg,G.clone().normalize());F(D,x,R.clone().lerp(v,.5),Tt(A,G.length(),P),it)}function V(x,R,v,A,P,D=[0,0,1,1],G=[1,1,1]){d.has(x)||d.set(x,{points:[],uv:[],colors:[]});let it=d.get(x);for(let N of[R,v,A,R,A,P])it.points.push(N.x,N.y,N.z),it.colors.push(...G);let[st,q,ot,_]=D;it.uv.push(st,q,ot,q,ot,_,st,q,ot,_,st,_)}function O(x,R,v,A){p.push({x0:x-v/2,x1:x+v/2,z0:R-A/2,z1:R+A/2})}function X(x,R,v,A){let P=Math.cos(A),D=Math.sin(A);return(G,it,st)=>Tt(x+G*P+st*D,R+it,v-G*D+st*P)}function $(x,R,v,A,P,D,G,it,st,q){let ot=x(A,P,D);b(v,ot.x,ot.y,ot.z,G,it,st,R,q)}function j(x,R,v,A,P){let D=x(R-A/2,0,v-P/2),G=x(R+A/2,0,v+P/2);O((D.x+G.x)/2,(D.z+G.z)/2,Math.abs(D.x-G.x),Math.abs(D.z-G.z))}function J(x,R,v,A,P){let D=x(R-A/2,0,v-P/2),G=x(R+A/2,0,v+P/2);E.push({x0:Math.min(D.x,G.x),x1:Math.max(D.x,G.x),z0:Math.min(D.z,G.z),z1:Math.max(D.z,G.z)})}function ft(x,R,v,A,P,D,G){y.push({seller:x(v,0,A),buyer:x(v,0,P),entry:x(v+.69,0,D),yaw:R,goods:G})}function tt(x,R){let v=x+"/"+R;if(T.has(v))return T.get(v);let A=document.createElement("canvas");A.width=R?96:200,A.height=R?200:74;let P=A.getContext("2d");P.fillStyle=R?"#bca877":"#5b3726",P.fillRect(0,0,A.width,A.height),P.strokeStyle=R?"#6a4129":"#a9945e",P.lineWidth=4,P.strokeRect(7,7,A.width-14,A.height-14),P.fillStyle=R?"#342617":"#ece0b2",P.textAlign="center",P.textBaseline="middle",P.font="bold "+(R?61:47)+'px "Songti SC", SimSun, serif',R?[...x].forEach((it,st)=>P.fillText(it,48,55+st*76)):P.fillText(x,A.width/2,A.height/2+1);let D=new Dn(A);D.colorSpace=we;let G=fn(D,{side:Se});return T.set(v,G),G}function pt(x,R,v,A,P,D,G,it,st=!1){let q=new de(new un(G,it),tt(v,st));q.position.copy(x(A,P,D)),q.rotation.y=R,i.add(q)}function dt(){for(let x of[-1,1]){let R=v=>Ge(v)+x*Fn(v);for(let v=-267;v<273;v+=3){let A=v+3,P=x>0?v<-88||v>70:v<-46||v>182;for(let it=0;it<20;it++){let q=(H,z)=>_e(H,z)-.04,ot=R(v)+x*it*4.15,_=R(v)+x*(it+1)*4.15,N=R(A)+x*it*4.15,W=R(A)+x*(it+1)*4.15,Z=.91+.07*Math.sin(v*.037+it*.59)+.09*n();V(P?"grass":"soil",Tt(v,q(v,ot),ot),Tt(v,q(v,_),_),Tt(A,q(A,W),W),Tt(A,q(A,N),N),[v/5,ot/5,A/5,_/5],[Z,Z,Z])}let D=R(v),G=R(A);V("soil",Tt(v,_e(v,D),D),Tt(A,_e(A,G),G),Tt(A,-1.61,G-x*1.45),Tt(v,-1.61,D-x*1.45),[v/4,0,A/4,1])}}for(let x=0;x<850;x++){let R=-179+n()*367,v=n()<.55?1:-1,P=Ge(R)+v*Fn(R)+v*(n()*.64-.31);if(R>-11&&R<4||R>-47&&R<-20&&v===1)continue;let D=.17+n()*.62;F(fr,"stone",Tt(R,_e(R,P)-D*.25,P),Tt(D,.22+D*.55,D*.57),n()*6.28)}}function yt(x,R,v="path"){for(let A=1;A<x.length;A++){let[P,D]=x[A-1],[G,it]=x[A],st=G-P,q=it-D,ot=Math.hypot(st,q),_=Math.ceil(ot/1.75),N=-q/ot,W=st/ot,Z=(H,z)=>{let et=1+.036*Math.sin((P+st*H)*1.67+(D+q*H)*.79),xt=P+st*H+N*z*et,mt=D+q*H+W*z*et;return Tt(xt,_e(xt,mt)+(v==="pave"?.044:.023),mt)};for(let H=0;H<_;H++){let z=ot/_/4.1;V(v,Z(H/_,-R/2),Z(H/_,R/2),Z((H+1)/_,R/2),Z((H+1)/_,-R/2),[0,H*z,R/4.4,(H+1)*z])}}}function Nt(x,R,v,A,P,D="tile",G=!0){let it=R/2,st=v/2,q=(ot,_,N)=>{let W=.29*Math.pow(Math.min(1,Math.abs(ot/it)),5.4);return x(ot,A+P*Math.pow(1-_,1.37)+W*(.46+.89*_*_),N*_*st)};for(let ot of[-1,1]){for(let N=0;N<8;N++)for(let W=0;W<12;W++){let Z=-it+R*W/12,H=-it+R*(W+1)/12;V(D,q(Z,N/8,ot),q(H,N/8,ot),q(H,(N+1)/8,ot),q(Z,(N+1)/8,ot),[Z/2.2,N*v/(8*3.5),H/2.2,(N+1)*v/(8*3.5)])}for(let N=0;N<12;N++){let W=q(-it+R*N/12,1,ot),Z=q(-it+R*(N+1)/12,1,ot);M("beam",W,Z,.16,.19)}if(G){for(let N=0;N<Math.floor(R/.28);N++){let W=-it+.12+N*.28,Z=q(W,.94,ot),H=q(W,1,ot);if(H.z+=ot*.025,Z.y+=.024,H.y+=.02,M(D,Z,H,.074,.074,mg),N%2===0){let z=q(W,1,ot);M("timber",z.clone().add(Tt(0,-.1,0)),q(W,.82,ot).add(Tt(0,-.23,0)),.084,.092)}}for(let N of[-it,it])for(let W=0;W<8;W++)M("beam",q(N,W/8,ot),q(N,(W+1)/8,ot),.14,.11)}}for(let ot=0;ot<12;ot++){let _=q(-it+R*ot/12,0,1),N=q(-it+R*(ot+1)/12,0,1);_.y+=.073,N.y+=.073,M(D,_,N,.175,.155,Ie)}for(let ot of[-1,1]){let _=q(ot*it,0,1),N=q(ot*it,0,1);N.x+=ot*.21,N.y+=.23,M(D,_,N,.13,.13,Ie)}}function Et(x,R,v,A,P,D,G){let it=(st,q,ot,_,N,W,Z)=>$(x,R,st,q,ot,_,N,W,Z);it("black",v,A,P,D,G,.075);for(let st of[-1,1])it("oldwood",v+st*D/2,A,P+.042,.095,G+.1,.1),it("oldwood",v,A+st*G/2,P+.042,D,.09,.1);for(let st=1;st<7;st++)it("timber",v-D/2+st*D/7,A,P+.051,.041,G,.058);for(let st=1;st<5;st++)it("timber",v,A-G/2+st*G/5,P+.049,D,.036,.058)}function qt(x,R,v,A=.5,P="ceramic"){F(dr,P,Tt(x,R+A*.24,v),Tt(A*.33,A*.47,A*.33),n()*6),F(Ie,P,Tt(x,R+A*.49,v),Tt(A*.24,A*.13,A*.24),0),F(Ie,"black",Tt(x,R+A*.562,v),Tt(A*.15,.012,A*.15),0)}function Xt(x,R,v,A=.73){b("oldwood",x,R+A*.38,v,A,A*.76,A*.77);for(let P of[-1,1])b("beam",x+P*A*.31,R+A*.4,v,A*.1,A*.82,A*.81);b("timber",x,R+A*.78,v,A*1.02,.057,A*.79)}function lt(x,R,v,A=.74){F(dr,"straw",Tt(x,R+A*.26,v),Tt(A*.43,A*.52,A*.43),Math.PI),F(Ie,"oldwood",Tt(x,R+A*.56,v),Tt(A*.45,.053,A*.45)),F(Ie,"straw",Tt(x,R+A*.583,v),Tt(A*.37,.039,A*.37))}function ut(x,R,v,A,P,D){let st=(q,ot)=>x((q/10-.5)*v,P-.54*(ot/5)-.22*Math.sin(Math.PI*ot/5)+.035*Math.sin(q*1.8)*ot/5,D+ot/5*A);for(let q=0;q<5;q++)for(let ot=0;ot<10;ot++)V("awning",st(ot,q),st(ot+1,q),st(ot+1,q+1),st(ot,q+1),[ot/5,q/4,(ot+1)/5,(q+1)/4]);for(let q=0;q<10;q++){let ot=st(q,5),_=st(q+1,5);V("awning",ot,_,_.clone().add(Tt(0,-.18,0)),ot.clone().add(Tt(0,-.18,0)))}for(let q of[-.47,.47]){let ot=x(q*v,0,D+A-.1),_=x(q*v,P-.51,D+A-.1);M("oldwood",ot,_,.046,.046,Ie),M("timber",_,x(q*v,P,D-.1),.047,.047,Ie),j(x,q*v,D+A-.1,.09,.09)}M("timber",st(0,5),st(10,5),.044,.044,Ie)}function Mt(x,R,v,A,{theta:P=0,floors:D=1,kind:G="home",label:it,simple:st=!1,roofKind:q="tile"}={}){let ot=_e(x,R),_=X(x,ot,R,P),N=D===1?3.31:6.13,W=A/2,Z=-A/2,H=["store","tavern","market"].includes(G),z=!st,et=(mt,bt,$t,Jt,ie,xe,Ne,ge)=>$(_,P,mt,bt,$t,Jt,ie,xe,Ne,ge);if(et("stone",0,.045,0,v+.05,.24,A+.1),!H)et("plaster",0,N/2,0,v,N,A),j(_,0,0,v,A);else{et("plaster",0,N/2,Z,v,N,.23),j(_,0,Z,v,.28);for(let $t of[-1,1])et("plaster",$t*v/2,N/2,0,.2,N,A),j(_,$t*v/2,0,.24,A);et("beam",0,N-.17,0,v,.32,A);for(let $t=-A/2+.12;$t<A/2;$t+=.28)et("oldwood",0,.181,$t,v-.25,.08,.24);D===2&&et("beam",0,3.2,0,v,.2,A);let mt=_(0,ot+.23,W),bt=P===0||P===Math.PI;g.push({x0:mt.x-(bt?v:A)/2,x1:mt.x+(bt?v:A)/2,z0:R-(bt?A:v)/2,z1:R+(bt?A:v)/2,y:ot+.225})}let xt=Math.max(2,Math.round(v/2.1));for(let mt=0;mt<=xt;mt++){let bt=(mt/xt-.5)*v;for(let $t of[W+.024,Z-.025])if(et(D===2?"lacquer":"timber",bt,N/2,$t,.17,N,.175),et("stone",bt,.14,$t,.28,.21,.27),z){let Jt=mt===0?1:mt===xt?-1:1;M("timber",_(bt,N-.7,$t),_(bt+Jt*.48,N-.15,$t),.11,.12)}}for(let mt of[.75,3.02,N-.2])(mt!==.75||!H)&&et("timber",0,mt,W+.075,v+.19,.14,.14);if(z){for(let mt of[-1,1]){et("timber",mt*(v/2+.035),N-.24,0,.17,.19,A+.15);for(let ie=1;ie<Math.ceil(A/2);ie++)et("timber",mt*(v/2+.025),N/2,-A/2+ie*2,.12,N,.11);let bt=_(mt*(v/2-.01),N-.15,-A/2+.08),$t=_(mt*(v/2-.01),N-.15,A/2-.08),Jt=_(mt*(v/2-.01),N+Math.min(v,A)*.3,0);V("plaster",bt,$t,Jt,Jt)}if(!H){et("beam",0,1.01,W+.056,1.23,2.02,.11);for(let mt=0;mt<6;mt++)et("oldwood",.15*(mt-2.5),.98,W+.112,.136,1.91,.035);for(let mt of[-1,1])Et(_,P,mt*v*.31,1.94,W+.08,v*.22,1.03)}if(D===2)if(G==="tavern"){et("oldwood",0,3.34,W+.53,v,.17,1.45);for(let mt=0;mt<xt;mt++){let bt=(mt/xt-.5)*v;et("lacquer",bt,3.78,W+1.19,.12,.9,.12),et("oldwood",bt+v/xt*.5,3.96,W+1.2,v/xt,.09,.091);for(let $t=1;$t<=5;$t++)et("oldwood",bt+$t*v/xt/6,3.67,W+1.2,.061,.58,.06)}}else for(let mt=0;mt<xt;mt++)Et(_,P,((mt+.5)/xt-.5)*v,4.62,W+.081,v/xt*.67,1.48)}if(D===2&&G!=="tavern"){let mt=(bt,$t,Jt)=>_(-bt,$t,-Jt);for(let bt=0;bt<xt;bt++)Et(mt,P+Math.PI,((bt+.5)/xt-.5)*v,4.52,W+.075,v/xt*.65,1.42);et("beam",0,3.16,Z-.12,v+.14,.11,.14)}if(Nt(_,v+1.52,A+1.7,N+.02,Math.min(v,A)*.31,q,z),D===2&&z&&Nt(_,v+.9,A+2.4,3.09,.68,"tileDark",!0),H){if(G==="tavern"){for(let Jt of[-1,1])for(let ie=0;ie<4;ie++){let xe=W-1.2-ie*2.3;et("timber",Jt*(v/2-.13),1.65,xe,.14,3.3,.16)}for(let Jt=0;Jt<7;Jt++)et("timber",0,2.98,W-.21-Jt*A/7,v,.2,.14);et("oldwood",0,1.09,Z+.44,v*.55,.142,.47),et("timber",0,.67,Z+.4,v*.56,.78,.5);for(let Jt=0;Jt<8;Jt++){let ie=_((Jt/7-.5)*v*.52,1.17,Z+.37);qt(ie.x,ie.y,ie.z,.67+Jt%3*.095,"paleCeramic")}let mt=_(-.89,2.91,Z+.18),bt=_(.93,2.91,Z+.18);V("awning",mt,bt,_(.93,1.77,Z+.17),_(-.89,1.77,Z+.17)),pt(_,P,"\u9152",0,2.37,Z+.25,.62,.59);for(let Jt of[-4.85,4.85]){let ie=_(Jt,2.35,W-2);F(fr,"rust",ie,Tt(.19,.24,.19),0),M("iron",ie.clone().add(Tt(0,.17,0)),ie.clone().add(Tt(0,.76,0)),.018,.018,Ie)}let $t=[[-3.8,.25],[3.5,.15],[-2.9,-3.4],[2.9,-3.4]];for(let[Jt,ie]of $t){et("oldwood",Jt,.85,ie,1.63,.11,1.19);for(let Ne of[-.63,.63])for(let ge of[-.44,.44])et("timber",Jt+Ne,.49,ie+ge,.11,.73,.11);et("timber",Jt,.47,ie+.83,1.48,.1,.31),et("timber",Jt,.47,ie-.83,1.48,.1,.31),j(_,Jt,ie,1.68,1.23);for(let Ne of[-.54,.53]){let ge=_(Jt+Ne,.92,ie+.16);qt(ge.x,ge.y,ge.z,.27,"paleCeramic")}let xe=_(Jt,.9,ie-.3);qt(xe.x,xe.y,xe.z,.59,"paleCeramic")}}else{et("oldwood",0,1.09,-.85,v-.7,.16,.98),et("timber",0,.55,-.85,v-.81,.95,.82),j(_,0,-.85,v-.59,.99);for(let mt=0;mt<2;mt++){let bt=(mt-.5)*v*.82;et("oldwood",bt,1.61,Z+.5,v*.35,.1,.55),et("oldwood",bt,2.16,Z+.49,v*.35,.09,.56)}for(let mt=0;mt<8;mt++){let bt=_((mt/7-.5)*(v-1),1.18,-.78+n()*.34);G==="market"?lt(bt.x,bt.y,bt.z,.4+n()*.43):qt(bt.x,bt.y,bt.z,.43+n()*.7,mt%3?"ceramic":"paleCeramic")}for(let mt=0;mt<6;mt++)et(mt%2?"linen":"sage",v*.28,.32+mt*.16,W-.7,.99,.145,.64);ft(_,P,Math.min(v*.23,1.45),-1.73,.14,W-.46,G==="market"?"fruit":"pot")}if(G!=="tavern")ut(_,P,v+.4,1.95,2.94,W);else for(let mt of[-3.9,3.85]){let bt=_(mt,2.54,W+.78);F(fr,"rust",bt,Tt(.24,.31,.24),0),M("iron",bt.clone().add(Tt(0,.26,0)),bt.clone().add(Tt(0,.55,0)),.018,.018,Ie)}it&&(et("beam",0,G==="tavern"?3.6:2.71,W+.2,2.05,.53,.11),pt(_,P,it,0,G==="tavern"?3.6:2.71,W+.27,1.99,.49),pt(_,P,it,v/2-.18,2.29,W+1.46,.49,1.16,!0))}}function Ft(x,R,v,A,P,D=!1){let G=D?Ke(R):_e(x,R),it=X(x,G,R,v),st=(_,N,W,Z,H,z,et)=>$(it,v,_,N,W,Z,H,z,et);st("timber",0,.83,0,A,.12,1.06);for(let _ of[-1,1])st("beam",_*A*.41,.4,.22,.106,.82,.11),st("beam",_*A*.41,.4,-.24,.106,.82,.11),st("oldwood",_*A*.5,1.13,-.58,.1,2.28,.1);ut(it,v,A+.48,2.06,2.46,-.63);let q=Math.floor(A/.43);for(let _=0;_<q;_++){let N=it((_/(q-1)-.5)*A*.82,.93,n()*.4-.18);if(P==="fruit"){lt(N.x,N.y,N.z,.52);for(let W=0;W<5;W++)F(fr,W%2?"green":"rust",N.clone().add(Tt((n()-.5)*.25,.35,(n()-.5)*.24)),Tt(.082,.071,.073),n()*6)}else if(P==="cloth"){let W=it((_/(q-1)-.5)*A*.82,.97,.06);b(["linen","sage","rust"][_%3],W.x,W.y,W.z,.29,.16,.63,v)}else P==="bread"?(F(dr,"straw",N.clone(),Tt(.19,.07,.16),v),F(dr,"oldwood",N.clone().add(Tt(.033,.074,.016)),Tt(.139,.067,.124),v,1.15)):qt(N.x,N.y,N.z,.46+n()*.44,_%2?"ceramic":"paleCeramic")}let ot={fruit:"\u679C\u5B50",cloth:"\u5E03\u5E1B",pot:"\u8336\u6C34",bread:"\u80E1\u9905"}[P];(D||P==="bread")&&pt(it,v,ot,-A*.3,1.54,.02,.45,.85,!0),ft(it,v,0,-.91,.84,D?1.58:1.94,P),j(it,0,0,A,1.08)}function rt(x,R,v,A){for(let D=0;D<v/.27;D++)b("oldwood",x-v/2+D*.27,.44-.08,R,.247,.16,A);for(let D=0;D<=v/2.1;D++){let G=x-v/2+D*2.1;for(let it of[-1,1])b("beam",G,-.5,R+it*(A*.43),.28,1.92,.28),b("oldwood",G,.66,R+it*A*.43,.31,.58,.31)}g.push({x0:x-v/2,x1:x+v/2,z0:R-A/2,z1:R+A/2,y:.44});for(let D=0;D<12;D++){let G=x-v*.41+D*(v*.82/11);D%3===0?Xt(G,.44,R-A*.3,.7+n()*.45):lt(G,.44,R-A*.3,.72+n()*.48)}}function Rt(){let x=Ge(Ue),R=x-gs,v=x+gs,A=144;for(let P=0;P<A;P++){let D=jt.lerp(R,v,P/A),G=jt.lerp(R,v,(P+1)/A);for(let it=0;it<5;it++){let st=_s/5,q=Ue-_s/2+st*(it+.5);b("oldwood",q,Ke((D+G)/2)-.103,(D+G)/2,st-.014,.178,G-D-.009,0,.74+n()*.28)}}for(let P of[-4.9,-3.35,-1.65,0,1.65,3.35,4.9]){let D=Ue+P;for(let G=0;G<17;G++){let it=G/17,st=(G+1)/17,q=jt.lerp(R+.43,v-.43,it),ot=jt.lerp(R+.43,v-.43,st);M("beam",Tt(D,Ke(q)-.76,q),Tt(D,Ke(ot)-.76,ot),.4,.47);let _=G%2===0?.99:.73;M("timber",Tt(D+.22,Ke(q)-_-.18,q),Tt(D+.22,Ke(ot)-.35,ot),.32,.37)}for(let G=0;G<12;G++){let it=jt.lerp(R+.75,v-.75,G/12),st=jt.lerp(R+.75,v-.75,(G+1)/12);M("timber",Tt(D-.14,Ke(it)-.94,it),Tt(D-.14,Ke(st)-.94,st),.35,.37)}}for(let P=0;P<=22;P++){let D=jt.lerp(R,v,P/22),G=jt.lerp(R,v,(P+1)/22),it=Ke(D);M("beam",Tt(Ue-5.65,it-.57,D),Tt(Ue+5.65,it-.57,D),.24,.34);for(let st of[-1,1]){let q=Ue+st*5.18;if(b("timber",q,it+.49,D,.15,1.15,.2),F(dr,"beam",Tt(q,it+1.12,D),Tt(.131,.18,.13)),P!==22){for(let ot of[.37,.94])M("oldwood",Tt(q,it+ot,D),Tt(q,Ke(G)+ot,G),.105,.12);M("timber",Tt(q,it+.14,D),Tt(q,Ke(G)+.37,G),.061,.065)}}}for(let P of[-1,1]){let D=x+P*(gs-.12);b("stone",Ue,-.53,D,_s+1.2,1.22,1.48),b("stone",Ue,.04,D+P*.82,_s+.66,.15,1)}pt(X(Ue,0,x,Math.PI/2),Math.PI/2,"\u8679\u6A4B",0,Ke(x)-.34,5.38,1.6,.43)}function Ot(x,R,v){let A=document.createElement("canvas");A.width=768,A.height=440;let P=A.getContext("2d");P.fillStyle="#d6bb83",P.fillRect(0,0,768,440),P.strokeStyle="#9e7c4b",P.lineWidth=3,P.strokeRect(17,16,734,408);let D=q=>46+(q+135)*2.05,G=q=>211+q*2.45;P.beginPath();for(let q=-134;q<=187;q+=3)P.lineTo(D(q),G(Ge(q)-Fn(q)));for(let q=187;q>=-134;q-=3)P.lineTo(D(q),G(Ge(q)+Fn(q)));P.closePath(),P.fillStyle="#798c79",P.fill(),P.strokeStyle="#596958",P.stroke(),P.strokeStyle="#9d6644",P.lineWidth=5,P.beginPath(),P.moveTo(D(-121),G(25)),P.lineTo(D(-4),G(22)),P.lineTo(D(-4),G(-23)),P.lineTo(D(163),G(-25)),P.stroke(),P.lineWidth=8,P.strokeStyle="#63513a",P.beginPath(),P.moveTo(D(106.7),G(-68)),P.lineTo(D(106.7),G(-12)),P.stroke(),P.fillStyle="#786247";for(let q=0;q<20;q++){let ot=q*8+3;P.fillRect(D(ot),G(-35-q%3),8,13),q>12&&P.fillRect(D(ot),G(-53+q%2*3),9,11)}P.font="bold 25px SimSun, serif",P.fillStyle="#59412c",P.fillText("\u6C74\u4EAC\u6C34\u9678\u5716",44,66),P.fillText("\u57CE\u9580",D(112),G(-10)),P.fillText("\u8679\u6A4B",D(-27),G(-30)),P.fillText("\u6C74\u6CB3",D(-105),G(3)),P.fillText("\u5317",690,60);let it=new Dn(A);it.colorSpace=we,it.anisotropy=8;let st=new de(new un(2.18,1.24),fn(it,{side:Se}));st.position.copy(x(0,v+1.113,-.32)),st.rotation.set(-Math.PI/2,R+Math.PI,0,"YXZ"),i.add(st),$(x,R,"oldwood",0,v+1.044,-.32,2.53,.127,1.52);for(let q of[-1.07,1.07])for(let ot of[-.91,.27])$(x,R,"beam",q,v+.5,ot,.13,1.01,.13);J(x,0,-.32,2.53,1.52)}function k(x,R,v){let A=(P,D,G,it)=>$(x,R,"plaster",P,v+1.36,D,G,2.72,it);for(let P of[-5.83,5.83])A(P,0,.21,5.58),J(x,P,0,.21,5.58);for(let[P,D]of[[-4.72,2.18],[0,3.58],[4.72,2.18]])A(P,-2.77,D,.23),J(x,P,-2.77,D,.23);$(x,R,"timber",0,v+2.42,-2.77,11.6,.19,.29),$(x,R,"plaster",0,v+.43,2.77,11.6,.86,.22),$(x,R,"oldwood",0,v+.89,2.79,11.6,.12,.35),J(x,0,2.77,11.6,.25),Et(x,R,-3.83,v+1.53,2.84,1.15,1.15),Et(x,R,3.83,v+1.53,2.84,1.15,1.15);for(let P of[-5.8,-3.87,-1.93,0,1.93,3.87,5.8]){for(let D of[-2.86,2.86])$(x,R,"lacquer",P,v+1.51,D,.225,3.02,.25),J(x,P,D,.225,.25);$(x,R,"oldwood",P,v+2.8,0,.19,.26,5.86)}for(let P of[-1,1]){let D=P*2.91,G=P*4.45;V("tileDark",x(-6.65,v+2.56,D),x(6.65,v+2.56,D),x(6.65,v+2.22,G),x(-6.65,v+2.22,G),[0,0,7,1.2]),M("beam",x(-6.65,v+2.21,G),x(6.65,v+2.21,G),.15,.17);for(let it of[-4.8,-2.7,2.7,4.8])M("timber",x(it,v+2.02,D),x(it,v+2.19,G),.087,.093)}Nt(x,15.8,10.5,v+3.115,2.65,"tileDark"),Ot(x,R,v);for(let P of[-4.83,4.83])$(x,R,"beam",P,v+.17,1.47,1.6,.33,.8),$(x,R,"oldwood",P,v+1.15,1.73,1.6,.12,.29),J(x,P,1.49,1.61,.86);for(let P=0;P<4;P++){let D=-5.39+P*.33;M("oldwood",x(D,v+.34,1.18),x(D,v+1.94,1.65),.027,.027,Ie);let G=x(D,v+2.03,1.68);F(gg,"iron",G,Tt(.045,.15,.032),R,1.14)}for(let P=0;P<3;P++){let D=4.25+P*.49;M("beam",x(D,v+.37,1.24),x(D,v+1.22,1.61),.063,.05),M("iron",x(D,v+1.22,1.61),x(D+.045,v+1.83,1.8),.079,.027),M("timber",x(D-.13,v+1.24,1.61),x(D+.13,v+1.24,1.61),.04,.038)}for(let P of[-5.07,-4.46]){let D=x(P+.19,v+.42,2.13);for(let G=1;G<=11;G++){let it=G/11,st=x(P+.19*Math.cos(it*2*Math.PI),v+.42+it*1.21,2.13+.031*Math.sin(it*Math.PI));M("oldwood",D,st,.029,.024,Ie),D=st}}$(x,R,"straw",4.93,v+.34,-1.39,.63,.69,.53),J(x,4.93,-1.39,.63,.53),m.push({position:x(-3.77,v,-.96),yaw:R+2.47}),m.push({position:x(3.81,v,-.94),yaw:R-2.47})}function Yt(x,R,v,A){let st=.41707317073170735,q=_e(x(v,0,-21.48).x,x(v,0,-21.48).z),ot=(A-q)/41;for(let Z=0;Z<41;Z++){let H=-21.48+(Z+.5)*st,z=q+(Z+1)*ot;$(x,R,"brick",v,(z-.21)/2,H,2.9,z+.21,st+.009),$(x,R,"stone",v,z-.044,H,2.9+.026,.088,st+.011)}for(let Z of[-1,1]){let H=v+Z*1.33;M("brick",x(H,q+.24,-21.48),x(H,A+.24,-4.38),.3,.48),M("stone",x(H,q+.47,-21.48),x(H,A+.47,-4.38),.34,.12);let z=x(v+Z*1.96,0,-21.48-.83);z.y=_e(z.x,z.z),m.push({position:z,yaw:R+Math.PI+Z*.12})}let _=x(v-2.9/2,0,-4.38),N=x(v+2.9/2,0,-21.48);f.push({x0:_.x,x1:N.x,z0:_.z,z1:N.z,base:q,rise:ot,count:41,step:st});let W=-21.48-.39;pt(x,R,"\u767B\u57CE",v+1.56,1.97,W+.054,.48,.96,!0),pt(x,R+Math.PI,"\u767B\u57CE",v+1.56,1.97,W-.054,.48,.96,!0),$(x,R,"timber",v+1.56,1.19,W,.085,2.39,.087)}function Bt(){let x=-Math.PI/2,R=106.7,v=-25,A=X(R,0,v,x),P=8.75,D=8.5,G=3.98,it=2.95,st=P+.185,q=[-8.2,7.65],ot=H=>it+Math.sqrt(Math.max(0,G*G-H*H)),_=P-.11;for(let[H,z]of[[-49,-G],[G,13.6]]){$(A,x,"wall",(H+z)/2,P/2,0,z-H,P,D),$(A,x,"brick",(H+z)/2,.46,0,z-H,.95,D+.14),$(A,x,"brick",(H+z)/2,_,0,z-H,.29,D+.38),j(A,(H+z)/2,0,z-H,D);for(let et=H+.3;et<z-.25;et+=1.25)for(let xt of[-1,1])xt===-1&&q.some(mt=>Math.abs(mt-et)<1.81)||($(A,x,"brick",et,P+.43,xt*(D/2-.18),.72,.77,.42),J(A,et,xt*(D/2-.18),.72,.42));for(let et=H+.4;et<z-.35;et+=3.45)for(let xt of[-1,1])$(A,x,"stone",et,2.15,xt*D/2,.22,2.6,.17,.82)}let N=D/2,W=28;for(let H=0;H<W;H++){let z=-G+H/W*G*2,et=-G+(H+1)/W*G*2;for(let xt of[-1,1]){let mt=xt*N;V("brick",A(z,ot(z),mt),A(et,ot(et),mt),A(et,P,mt),A(z,P,mt),[z/3,0,et/3,1.7])}V("brick",A(z,ot(z),N),A(et,ot(et),N),A(et,ot(et),-N),A(z,ot(z),-N),[z/3,0,et/3,2.6],[.77,.73,.66])}for(let H=0;H<25;H++){let z=Math.PI*H/25+.01,et=Math.PI*(H+1)/25-.009;for(let xt of[-1,1]){let mt=(bt,$t)=>A(Math.cos(bt)*$t,it+Math.sin(bt)*$t,xt*(N+.095));V("stone",mt(z,G+.028),mt(et,G+.028),mt(et,G+.6),mt(z,G+.6),[0,0,.55,.55],[.95,.91,.82])}}for(let H of[-1,1])for(let z=0;z<5;z++)$(A,x,"stone",H*(G+.32),z*.57+.3,N+.1,.64,.55,.24);$(A,x,"stone",0,P+.075,0,24.1,.22,8.9),w={x0:R-4.45,x1:R+4.45,z0:v-12.05,z1:v+12.05,floor:st};for(let H of[-11.9,11.9])$(A,x,"brick",H,st+.43,0,.29,.89,8.86),J(A,H,0,.29,8.86);for(let[H,z]of[[-10.98,1.87],[-.275,12.45],[10.69,2.61]])$(A,x,"brick",H,st+.28,-4.05,z,.56,.38),J(A,H,-4.05,z,.38);$(A,x,"brick",0,st+.23,4.04,24,.46,.39),J(A,0,4.04,24,.39),k(A,x,st);for(let H of q)Yt(A,x,H,st);pt(A,x,"\u6C74\u4EAC",0,7.86,N+.13,1.95,.54);for(let H of[-1,1]){m.push({position:A(H*7.75,st,N-.6),yaw:x-H*.14}),m.push({position:A(H*9.65,st,-N+.93),yaw:x+Math.PI+H*.09});let z=A(H*4.9,0,N+.94);z.y=_e(z.x,z.z),m.push({position:z,yaw:x-H*.25})}yt([[94,-25],[119,-25]],8.7,"pave")}function Lt(x,R,v,A=!1){let P=_e(x,R),D=(A?7:6.6)*v,G=n()*Math.PI*2,it=Tt(Math.cos(G)*v*.75,0,Math.sin(G)*v*.75),st=Tt(x,P-.16,R),q=Tt(x,-.12+P+D*.47,R).addScaledVector(it,.24),ot=Tt(x,P+D*.91,R).add(it),_=(A?.34:.25)*v;M("bark",st,q,_*1.15,_,Ie),M("bark",q,ot,_*.72,_*.64,Ie);let W=(A?[8622155,7373125,10003034,6058555,8033109]:[6452552,8227397,8689236,5598014,9740887]).map(H=>new Ct(H).toArray()),Z=A?21:18;for(let H=0;H<Z;H++){let z=H*2.399963+n()*.42,et=Tt(Math.cos(z),0,Math.sin(z)),xt=q.clone().lerp(ot,.19+n()*.67),mt=(1.18+n()*2.6)*v,bt=xt.clone().addScaledVector(et,mt).add(Tt(0,(.66+n()*1.67)*v,0)),$t=xt.clone().lerp(bt,.51).add(Tt(0,.43*v,0));H<16&&(M("bark",xt,$t,_*.24,_*.24,Ie),M("bark",$t,bt,_*.12,_*.12,Ie));for(let xe=0;xe<5;xe++){let Ne=$t.clone().lerp(bt,.28+xe*.19).addScaledVector(et,(n()-.25)*v*.64);Ne.y+=(n()-.53)*(A?1.48:1)*v;let ge=z+xe*2.11,mn=(A?1.12:1.27)*(.67+n()*.39)*v,je=Tt(Math.sin(ge)*mn,(n()-.5)*mn*.27,Math.cos(ge)*mn),gn=Tt(Math.cos(ge)*mn*.22,mn*(A?1.32:.8),-Math.sin(ge)*mn*.22);V("bough",Ne.clone().sub(je).sub(gn),Ne.clone().add(je).sub(gn),Ne.clone().add(je).add(gn),Ne.clone().sub(je).add(gn))}let Jt=A?33:35,ie=A?1.1:1.58;for(let xe=0;xe<Jt;xe++){let Ne=.35+n()*.73,ge=$t.clone().lerp(bt,Ne).addScaledVector(et,(n()-.21)*ie*v),mn=A?.7:1.3;ge.x+=(n()-.5)*1.55*ie*v,ge.z+=(n()-.5)*1.55*ie*v,ge.y+=(n()-.54)*mn*v,A&&(ge.y-=(.08+Math.pow(n(),.52)*2.37)*Ne*v);let je=(.13+n()*.28)*v,gn=(A?.052:.133)*v*(.58+n()),On=n()*6.28,ys=Tt(Math.cos(On)*gn,(n()-.5)*gn*.9,Math.sin(On)*gn),Ms=Tt(Math.sin(On)*je*.66,-je*(.72+n()*.35),-Math.cos(On)*je*.66);V("foliage",ge.clone().addScaledVector(Ms,-.49),ge.clone().add(ys),ge.clone().addScaledVector(Ms,.6),ge.clone().addScaledVector(ys,-1),[0,0,1,1],W[Math.floor(n()*W.length)])}}}function gt(x,R,v,A){let P=[7307575,10135131,9214020,11448692].map(D=>new Ct(D).toArray());for(let D=0;D<Math.floor(A/.78);D++){let G=R+D*.78;for(let it=x;it<x+v;it+=.26+n()*.12){let st=it+n()*.13,q=G+n()*.33,ot=_e(st,q);for(let _=0;_<3;_++){let N=.28+n()*.49,W=(n()-.5)*.29,Z=Tt(st+(n()-.5)*.14,ot,q+(n()-.5)*.11);V("foliage",Z,Z.clone().add(Tt(.034,0,0)),Z.clone().add(Tt(W,N,-.04)),Z.clone().add(Tt(W+.036,N,-.041)),[0,0,1,1],P[Math.floor(n()*P.length)])}}}}dt(),yt([[-162,34],[-142,28],[-126,25],[-108,22],[-88,19],[-73,18],[-56,18],[-49,19],[-36,19],[-20,20],[-10,22],[10,23],[39,24],[64,26]],4.6),yt([[-44,-22],[-21,-23],[-4,-23],[16,-23],[32,-24],[57,-24],[79,-24],[103,-25],[128,-25],[145,-26],[174,-26]],7.1,"path"),yt([[119,-25],[129,-28],[129,-45],[130,-64],[132,-72]],4.4,"pave"),yt([[112,-43],[129,-45],[153,-46],[171,-45]],3.8,"soil"),yt([[142,-26],[143,-39],[146,-65]],4,"soil"),yt([[-6,25],[-8,42],[-18,67]],3.7,"soil"),gt(-152,32,31,16),gt(-113,29,25,13),gt(-156,54,27,14),gt(-74,43,18,12),gt(46,40,26,12),Mt(-151,26,6.8,5.6,{roofKind:"straw"}),Mt(-137,36,7.2,6.2,{theta:Math.PI,roofKind:"straw"}),Mt(-112,13.7,6.2,5.6,{theta:Math.PI,roofKind:"tileDark"}),Mt(-103,25,8,5.3,{theta:Math.PI,roofKind:"straw"}),Mt(-86,33,6.6,5.6,{theta:Math.PI}),Mt(-64,28.7,8.5,6.7,{theta:Math.PI,kind:"market",label:"\u8336\u68DA"}),Mt(-46,27.3,9.6,7.9,{theta:Math.PI,kind:"store",label:"\u8CA8\u68E7"}),Mt(-33,26.7,8.4,6.3,{theta:Math.PI,kind:"market"}),Mt(-22,28.5,7.8,7.1,{theta:Math.PI}),rt(-38,14.65,14.4,5.45);let kt=-36.5,wt=7.22,Vt=12.33,St=x=>jt.lerp(.045,.45,jt.clamp((x-wt)/(Vt-wt),0,1));for(let x=0;x<19;x++){let R=wt+(x+.5)*(Vt-wt)/19;b("oldwood",kt,St(R)-.059,R,1.57,.115,.249)}for(let x of[-.67,.67])M("beam",Tt(kt+x,.02,wt),Tt(kt+x,.48,Vt),.105,.126);g.push({x0:-41,x1:-32.8,z0:5.65,z1:7.45,y:.044}),rt(-26,14.65,8.1,4.8),rt(15,16.2,12.6,5.35),rt(47,-13.2,13.5,4.5),Rt();for(let[x,R,v]of[[1,-7.2,"bread"],[-1,-10.3,"fruit"],[1,8.7,"pot"],[-1,12.7,"cloth"]])Ft(Ue+x*3.91,R,-x*Math.PI/2,1.68,v,!0);for(let x=0;x<390;x++){let R=-151+n()*319,A=x%4!==0?-24+(n()>.5?1:-1)*(2.6+n()*.95):23+(n()>.5?1:-1)*(1.4+n()*1);if(Math.abs(R-106.7)<7||Math.abs(R+4)<8)continue;let P=.016+n()*.087;F(fr,"stone",Tt(R,_e(R,A)+.022,A),Tt(P,.048,P*.65),n()*6,.9)}for(let[x,R,v,A,P,D]of[[5,-32.2,7.1,7.4,"market","\u8336\u8086"],[14.4,-34,8.2,9,"store","\u96DC\u8CA8"],[24.6,-34.1,9.8,10,"market","\u9999\u6599"],[36.8,-34.5,8.8,9.4,"store","\u7DA2\u5E03"],[48,-34.1,8.3,8.6,"store","\u74F7\u5668"],[58.4,-35.7,8.2,9.4,"market","\u7CE7\u884C"],[69,-36.2,11.8,12.35,"tavern","\u9152\u6A13"],[82.5,-35.7,9,10.4,"store","\u8336\u574A"],[94,-35.3,8.65,8.6,"market","\u7AF9\u5668"]])Mt(x,R,v,A,{floors:2,kind:P,label:D});for(let[x,R,v,A,P,D]of[[-20,-33.6,8.5,7.4,"home"],[-10,-34.6,7.9,7.5,"market","\u8336"],[9,29.5,8.2,7,"market","\u8336"],[20,34,10.2,8.5,"tavern","\u9152"],[31,31.7,7.1,7.4,"store","\u7C73"],[45,33,7.4,7,"home"],[14,-17,6.45,4.85,"store","\u8336"],[32.5,-16.6,7.6,4.25,"market"],[62,-16.35,8.1,5.6,"market","\u679C\u5B50"],[82,-16.9,9.4,5.2,"store","\u767E\u8CA8"]])Mt(x,R,v,A,{theta:R>0||R>=-18?Math.PI:0,floors:P==="home"?1:2,kind:P,label:D});for(let[x,R,v,A,P]of[[-19,18.9,0,3.2,"fruit"],[-12,19.7,0,3.6,"cloth"],[3,24.7,Math.PI,3.6,"fruit"],[17,19.8,0,3.8,"pot"],[3,-18.7,Math.PI,3.8,"pot"],[20,-19.2,Math.PI,4,"fruit"],[25.6,-20.1,Math.PI,3.4,"fruit"],[38.6,-19.4,Math.PI,4.4,"cloth"],[45,-20.4,Math.PI,3.9,"pot"],[53.9,-19.7,Math.PI,4.2,"fruit"],[73.5,-20,Math.PI,3.7,"pot"],[89.1,-19.9,Math.PI,3.2,"cloth"],[151,-19.4,Math.PI,4.2,"pot"],[136,-20.1,Math.PI,4,"fruit"],[31.1,-27.6,0,2.3,"bread"],[42,-27.5,0,2.2,"fruit"],[53.3,-28.1,0,2,"cloth"]])Ft(x,R,v,A,P);Bt();for(let[x,R,v,A,P,D]of[[116.2,-40.3,6.8,8.4,"store","\u98DF\u5E97"],[122,-41.8,5,7.4,"home"],[136.8,-34.7,7.1,8.7,"home"],[149.9,-34.8,7.6,8,"store","\u5E03"],[160.4,-35,8.5,8.5,"home"],[172,-34.3,10,8,"home"],[119.9,-50.8,9,7.1,"home"],[137.3,-51.4,9,7.5,"home"],[120.3,-61,9.4,8.9,"home"],[138.1,-63,10,9,"home"],[153.7,-55.4,8.6,9.3,"home"],[167.8,-54.5,10.7,8.1,"home"]])Mt(x,R,v,A,{floors:R<-47?1:2,kind:P,label:D});for(let x of[10,24,42,57,74,90,116,128,151,169])for(let R of[-57,-71])x>120&&x<147||Mt(x+(n()-.5)*3,R+(n()-.5)*2,6.6+n()*3.9,5.3+n()*3.7,{floors:n()>.58?2:1,simple:!0,theta:n()>.5?Math.PI:0});for(let[x,R,v,A]of[[-242,36,8.7,6.3],[-211,23,8.1,5.4],[-187,23,7.8,7.2],[185,-26,8.7,6.4],[196,-28,8,5.8],[210,-30,10.3,6.6],[228,-32,8,6.5],[239,-37,7.1,7.1]])Mt(x,R,v,A,{floors:x<0?1:2,simple:!0,theta:R>0?Math.PI:0});for(let[x,R,v]of[[-203,20,1.04],[-227,23,1.19],[-244,26,1.05],[170,21,1.12],[187,24,1.08],[211,25,1.24],[232,-21,.91],[244,23,.95]])Lt(x,R,v,!0);let Gt=X(154,.19,-66,0);for(let x=0;x<3;x++){let R=7.35-x*1.38;$(Gt,0,"plaster",0,2.63+x*3.5,0,R-.31,3,R*.78);for(let v of[-1,1])$(Gt,0,"lacquer",v*(R/2-.32),2.63+x*3.5,R*.38,.23,3.05,.23),Et(Gt,0,v*R*.214,2.88+x*3.5,R*.39,R*.28,.94);Nt(Gt,R+1.91,R*.84+1.34,3.97+x*3.5,1.28,"tileDark",!0)}for(let x of[-78,-65,-48,-38,-23])Mt(x,-32-10*n(),6.3+n()*3,5.6+n()*3,{simple:!0,floors:n()<.19?2:1});for(let[x,R,v,A]of[[-139,19,1.17,1],[-119,18,1.2,1],[-117,31,.97,0],[-98,19,.99,1],[-82,13,1.16,1],[-68,14.7,1.14,1],[-56,24,1,1],[-42,20.6,.96,1],[-22,18.3,.96,1],[-10,27,1.22,1],[10,20.4,.99,1],[28,29,.82,1],[48,20.2,1.04,1],[59,19.9,1.25,1],[70,26,1,1],[-39,-22,1.11,1],[-16,-24,1.12,1],[7,-15.5,.86,1],[34,-28.8,.93,0],[55,-15.5,1.01,1],[76,-15.8,.85,1],[93,-15.1,1.12,1],[112,-14.2,.91,1],[126,-53,1.12,0],[132,-48,.99,1],[128,-66,1.02,1],[137,-41,.83,0]])Lt(x,R,v,A===1);for(let x=0;x<74;x++){let R=-169+n()*350,v=(n()>.54?-1:1)*(40+n()*38);R>94&&R<151&&v<0||Lt(R,v,.63+n()*.54,n()>.67)}for(let x=0;x<1900;x++){let R=-163+n()*337,v=n()>.5?1:-1,P=Ge(R)+v*Fn(R)+v*(n()*1.65+.05);if(R>-11&&R<4||R>-46&&R<-20&&v===1)continue;let D=_e(R,P),G=[.29,.34,.105],it=.17+n()*.38;V("foliage",Tt(R-.026,D,P),Tt(R+.039,D,P),Tt(R+.13*n(),D+it,P+.06),Tt(R-.018,D+it,P+.06),[0,0,1,1],G)}for(let[x,R]of[[8,27],[21,28],[-31,21.5],[47,-31.5],[72,-32],[-74,19.3],[134,-42],[125,-56]])x===47||x===72||(Xt(x,_e(x,R),R,.83),lt(x+.82,_e(x,R),R,.67),O(x,R,1.5,.75));for(let x=0;x<14;x++){let R=-146+x*2;b("timber",R,_e(R,30.7)+.43,30.7,.16,1.04,.19),x<13&&(M("oldwood",Tt(R,.43,30.7),Tt(R+2.1,.38,30.7),.085,.105),M("oldwood",Tt(R,.7,30.7),Tt(R+2.06,.69,30.7),.071,.084))}for(let[x,R]of[[124,-42],[133,-40],[128,-55]]){let v=X(x,_e(x,R),R,Math.PI/2);M("timber",v(-1.2,0,0),v(-1.2,2.3,0),.075,.075,Ie),M("timber",v(1.2,0,0),v(1.2,2.2,0),.075,.075,Ie),M("timber",v(-1.2,2.25,0),v(1.2,2.16,0),.032,.034,Ie);for(let A=0;A<4;A++){let P=-.94+A*.52,D=P+.44,G=2.21-A*.019;V("awning",v(P,G,0),v(D,G,0),v(D,G-.69-A*.06,.04),v(P,G-.64-A*.06,.14))}}for(let{geo:x,mat:R,entries:v}of u.values()){let A=new Ti(x,s[R],v.length);for(let[P,[D,G]]of v.entries())A.setMatrixAt(P,D),A.setColorAt(P,B.setScalar(G));A.castShadow=R!=="soil"&&R!=="grass",A.receiveShadow=!0,A.computeBoundingSphere(),i.add(A)}for(let[x,{points:R,uv:v,colors:A}]of d){let P=new Me;P.setAttribute("position",new re(R,3)),P.setAttribute("uv",new re(v,2)),P.setAttribute("color",new re(A,3)),P.computeVertexNormals();let D=s[x].clone();D.side=Se,D.vertexColors=!0,(x==="foliage"||x==="awning"||x==="bough")&&(D.onBeforeCompile=s[x].onBeforeCompile);let G=new de(P,D);G.receiveShadow=!0,G.castShadow=!["soil","grass","stone","pave","path"].includes(x),i.add(G)}let U=(x,R,v,A=0)=>R>=x.x0+A&&R<=x.x1-A&&v>=x.z0+A&&v<=x.z1-A,S=(x,R)=>f.find(v=>U(v,x,R));function K(x,R,v){return v>=w.floor-.65&&U(w,x,R)}function ht(x,R,v=0){if(x<ur.west||x>ur.east||R<ur.north||R>ur.south)return null;if(K(x,R,v))return w.floor;let A=S(x,R);if(A){let P=Math.min(A.count,1+Math.floor((A.x1-x)/A.step));return A.base+P*A.rise}if(Math.abs(x-Ue)<_s/2-.14&&Math.abs(R-Ge(Ue))<=gs+.04)return Ke(R);if(Math.abs(x-kt)<.78&&R>=wt&&R<=Vt)return St(R);for(let P of g)if(x>=P.x0&&x<=P.x1&&R>=P.z0&&R<=P.z1)return P.y;return Math.abs(R-Ge(x))<Fn(x)-.14?null:_e(x,R)}function _t(x,R,v=.3,A=0){let P=S(x,R);return P&&(R<P.z0+.22+v||R>P.z1-.22-v)?!0:(P&&A>=w.floor-.65||K(x,R,A)?E:p).some(it=>x>it.x0-v&&x<it.x1+v&&R>it.z0-v&&R<it.z1+v)}return{materials:s,walkHeight:ht,isObstacle:_t,obstacles:p,trades:y,gatePosts:m,gateTerrace:w,gateStairs:f,onGateTerrace:K}}function wh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Me,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Th(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let y=0;y<o[h].length;++y)p.push(o[h][y][d]);let g=Th(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Th(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Te(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){let y=h.getComponent(d,g);a.setComponent(d+u,g,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var he=(i,t,e)=>new Y(i,t,e),Ic=he(0,1,0),An=new Ln(1,1,1),pn=new oi(1,12,8),Eh=new oi(1,10,6,0,Math.PI*2,0,Math.PI*.57),Bn=new sn(1,1,1,8),Ch=new sn(.65,1,1,10),aa=new sn(1,.72,1,10),Pc=new os(1,.083,6,19),_g=new sn(.71,1,1,8),xg=new wi(1),ui=Math.PI*2;function Ce(i,t,e,n,s,r,o=1,a=1,l=1){let c=new de(i,t);return c.position.set(n,s,r),c.scale.set(o,a,l),c.castShadow=c.receiveShadow=!0,e.add(c),c}function Cn(i,t,e,n,s,r=Bn){let o=n.clone().sub(e),a=e.clone().lerp(n,.5),l=Ce(r,t,i,a.x,a.y,a.z,s,o.length(),s);return l.quaternion.setFromUnitVectors(Ic,o.normalize()),l}function Ni(i,t=[]){let e=new Map;for(let n of[...i.children]){if(!n.isMesh||t.includes(n))continue;n.updateMatrix();let s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();s.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(s),i.remove(n)}for(let[n,s]of e)Ce(wh(s),n,i,0,0,0),s.forEach(r=>r.dispose())}function vg(i,t,e,n){let s=[];function o(u,d){let p=(u-.5)*i,g=Math.pow(.065+.935*Math.sin(Math.PI*u),.69),y=Math.sin(d*Math.PI),m=Math.cos(d*Math.PI);return[p,-.04+y*-.53+.26*Math.pow(Math.abs(u-.5)*2,4),m*t*.51*g*(.75+.25*Math.abs(m))]}for(let u=0;u<24;u++)for(let d=0;d<11;d++){let p=o(u/24,d/11),g=o((u+1)/24,d/11),y=o((u+1)/24,(d+1)/11),m=o(u/24,(d+1)/11);s.push(...p,...g,...y,...p,...y,...m)}let a=new re(s,3),l=new Float32Array(a.count*2);for(let u=0;u<a.count;u++)l[u*2]=a.getY(u)*2.8,l[u*2+1]=a.getX(u)/3;let c=new Me;c.setAttribute("position",a),c.setAttribute("uv",new Te(l,2)),c.computeVertexNormals();let h=Ce(c,e,n,0,.66,0);for(let u of[-1,1])for(let d=0;d<22;d++){let p=d/22,g=(d+1)/22,[y,m,f]=o(p,u>0?0:1),[E,w,T]=o(g,u>0?0:1);Cn(n,e,he(y,m+.75,f),he(E,w+.75,T),.065)}return h}function yg(i,t,e){let n=[],s=t.timber.clone();s.color.setHex(10914923),s.side=Se;for(let r=0;r<9;r++){let o=new Pe,a=r%3===1?11.2:7.6+e()*2.6,l=r%3===1?3.5:2.25+e()*.58;vg(a,l,s,o);for(let m=0;m<Math.floor(a/.29);m++){let f=-a*.47+m*.29;if(f>a*.47)continue;let E=Math.pow(.08+.92*Math.sin(Math.PI*(f/a+.5)),.7);Ce(An,t.oldwood,o,f,.68,0,.27,.14,l*E*.96)}Ce(An,t.beam,o,-a*.45,.83,0,.28,.36,l*.36),Ce(An,t.beam,o,a*.45,.91,0,.31,.37,l*.38);for(let m of[-1,1])for(let f=-2;f<3;f++)Ce(An,t.oldwood,o,f*a*.15,.87,m*l*.44,.12,.55,.12),f<2&&Cn(o,t.oldwood,he(f*a*.15,1.09,m*l*.44),he((f+1)*a*.15,1.09,m*l*.44),.046);for(let m=0;m<12;m++){let f=a*(-.33+e()*.68),E=(e()-.5)*l*.61,w=m%3===0?t.oldwood:t.straw;Ce(m%3?pn:An,w,o,f,.87+e()*.16,E,.27+e()*.31,.31+e()*.13,.33+e()*.31)}if(r%3!==1){let m=.41*a,f=l*.42,E=new sn(f,f,m,16,1,!0,0,Math.PI);Ce(E,t.straw,o,-.27,1.17,0).rotation.set(0,Math.PI/2,Math.PI/2);for(let T=0;T<6;T++){let I=Ce(Pc,t.oldwood,o,-m*.52+T*m/5,1.16,0,f*.99,f*.99,.57);I.rotation.y=Math.PI/2,I.geometry=new os(1,.041,6,16,Math.PI)}}let c=new Pe;c.position.set(a*.16,.72,0),o.add(c);let h=r%3===1?6.2:4.6;if(Cn(c,t.beam,he(0,0,0),he(0,h,0),.08),r%2===0||r%3===1){let m=l*1.19,f=new un(m,h*.65,12,14),E=f.attributes.position;for(let T=0;T<E.count;T++){let I=E.getX(T),L=E.getY(T),B=.4*Math.cos(I/m*Math.PI)*Math.cos(L/(h*.65)*Math.PI*.7);E.setZ(T,B+.045*Math.sin(L*8))}f.computeVertexNormals();let w=t.linen.clone();w.side=Se,Ce(f,w,c,-.12,h*.6,.016).rotation.y=Math.PI/2;for(let T=0;T<7;T++){let I=h*(.268+T*.109);Cn(c,t.oldwood,he(-.13,I,-m*.52),he(-.13,I,m*.52),.031)}}Cn(c,t.beam,he(0,h-.16,0),he(0,h-.09,.64),.035);let u=new Pe;u.position.set(-a*.37,.92,-l*.38),o.add(u),Cn(u,t.oldwood,he(.28,.77,.08),he(-1.52,-.51,-1.77),.055),Ce(An,t.timber,u,-1.44,-.46,-1.67,.7,.075,.2).rotation.set(-.18,-.67,.36);let p=Ce(An,t.oldwood,o,-a*.5,.22,0,.58,1.25,.125);p.rotation.z=.23;let g=r>=7;g&&(c.rotation.z=-1.42),Ni(c),Ni(u),Ni(o,[p]),i.add(o);let y=Mg(i,a,l);n.push({root:o,mast:c,oar:u,rudder:p,wake:y,length:a,docked:g,route:r%2===0?1:-1,lane:g?r===7?10.5:-10.9:(r%2===0?1:-1)*(2.48+e()*6.7),speed:.72+e()*.76,start:g?r===7?-37:46:-160+r*36+e()*11,phase:e()*ui})}return n}function Mg(i,t,e){let n=new Pe,s=new Me,r=[],o=[];for(let c of[-1,1])for(let h=0;h<14;h++){let u=h/14,d=(h+1)/14,p=(m,f)=>[-t*.38-m*t*1.19,0,c*(e*.2+e*1.31*m)+f],g=.03+.32*u,y=.03+.32*d;r.push(...p(u,-g),...p(d,-y),...p(u,g),...p(d,-y),...p(d,y),...p(u,g)),o.push(u,0,d,0,u,1,d,0,d,1,u,1)}s.setAttribute("position",new re(r,3)),s.setAttribute("uv",new re(o,2));let a={value:0},l=new Oe({side:Se,transparent:!0,depthWrite:!1,uniforms:{time:a},vertexShader:"varying vec2 waveUv; void main(){ waveUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec2 waveUv; uniform float time; void main(){ float d=sin(waveUv.y*3.14159)*pow(1.0-waveUv.x,1.45); float foam=.25+.75*pow(max(0.0,sin(69.0*waveUv.x-2.3*time)),2.0); gl_FragColor=vec4(.86,.87,.72,d*foam*.39); }"});return n.add(new de(s,l)),n.position.y=hr+.015,n.userData.time=a,i.add(n),n}var Sg=[[[-148,22],[-129,24],[-109,22],[-82,19],[-72,18],[-86,20],[-110,24],[-131,26]],[[-47,18.4],[-36,16.5],[-30,15.6],[-27,17.9],[-34,19.3],[-44,20.1]],[[-42,19.8],[-27,20],[-14,22],[-6,22],[-6,9],[-6,-4],[-6,-20],[-2,-23],[11,-23],[25,-25],[28,-24],[21,-22],[6,-21],[-2,-22],[-2,-4],[-2,10],[-2,22],[-12,23],[-27,21.2]],[[4,-24.9],[16,-24.6],[31,-25.7],[47,-25],[60,-25],[75,-24.6],[92,-25.9],[108,-25.4],[129,-25],[143,-25],[155,-26],[142,-27],[127,-24],[105,-23],[89,-23],[69,-23],[48,-23],[26,-22],[12,-22]],[[29,-27],[44,-27.7],[46,-29.8],[46,-31.1],[48,-31.7],[51,-30.8],[52,-27.2],[61,-26],[69,-26],[78,-26],[58,-25.6],[45,-26],[35,-26]],[[118,-25],[128,-27],[129,-40],[130,-56],[129,-62],[131,-65],[131,-51],[130,-36],[131,-28],[145,-26],[152,-24],[135,-24]],[[7,23],[14,22.4],[24,22.5],[48,24.2],[59,26],[47,26],[25,25.2],[17,24.7],[8,24.6]]];function Ah(i){let t=[],e=0;for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=Math.hypot(r[0]-s[0],r[1]-s[1]);t.push({a:s,b:r,from:e,to:e+o,distance:o}),e+=o}return{length:e,segments:t}}function bg(i,t){let e=t%i.length,n=i.segments.find(r=>e>=r.from&&e<r.to)??i.segments[0],s=(e-n.from)/n.distance;return[jt.lerp(n.a[0],n.b[0],s),jt.lerp(n.a[1],n.b[1],s),Math.atan2(n.b[0]-n.a[0],n.b[1]-n.a[1])]}function Tg(i,t){let e=new Ct(11232848),n=(o,a)=>({guard:!0,style:0,scale:.98+o%3*.018,shade:e,faces:new Ct(t[o%t.length]),payload:0,phase:o*.37,...a}),s=i.gatePosts.map((o,a)=>n(a,{post:o,speed:0})),r=[[[27,-24.95],[33,-24.95],[43,-25.08],[59,-25.4],[76,-25.3],[89,-25.55],[99.7,-25.55],[100.3,-23.8],[86,-23.25],[69,-23.3],[55,-23.45],[37,-23.5],[27.4,-23.7]],[[111,-25.45],[121,-25.45],[129.3,-27.55],[130.1,-35.5],[129.4,-44.3],[130,-48.65],[131.1,-46.75],[131.25,-40],[131.1,-34],[132.15,-29.6],[133.25,-25.8],[131,-23.55],[120,-23.55],[111,-23.5]],[[-109,19.8],[-99,19.35],[-91,19.1],[-81,17.65],[-73,16.96],[-63,17.2],[-60,18.55],[-67,20],[-76,21.15],[-89,21.15],[-98,21.22],[-106,21.12]],[[-55,18.82],[-47,18.25],[-40,18.18],[-34,18.35],[-27,18.61],[-23,18.91],[-23.1,20.22],[-29,20.09],[-37,20.08],[-44,20.14],[-51,20.29],[-54.6,20.28]]];for(let[o,a]of r.entries()){let l=new rs(a.map(([h,u])=>he(h,0,u)),!0,"centripetal"),c=l.getLength();for(let h=0;h<4;h++)s.push(n(h,{patrol:{route:l,length:c,lead:[8.2,27.4,28.2,23][o]-Math.floor(h/2)*1.28,side:h%2===0?-.41:.41},walking:!0,speed:[1.07,1.01,.99,.96][o]}))}return s}function wg(i,t,e,n,s,r,o,a){let l=Sg.map(Ah),c=[],h=s?[6,8,13,17,7,7,7]:[10,12,24,29,9,12,11],u=[10457715,12298628,8615014,7439720,13150590,11366240,6586246,11966849,9666179,12424029,6585699],d=[12094569,11962985,12950907,11502690,13278334],p=new Map;function g(rt,Rt,Ot){p.set(rt,{geometry:Rt,material:Ot,used:0})}let y=e.linen.clone();y.color.setHex(15985117);let m=new Tn({color:16777215,roughness:.81});g("head",pn,m),g("nose",pn,m),g("neck",Bn,m),g("ears",pn,m),g("eyes",pn,e.black),g("hand",pn,m),g("hat",Eh,e.black),g("hair",pn,e.black),g("feet",pn,e.beam),g("hem",Ch,y),g("top",aa,y),g("arms",_g,y),g("calves",Bn,y),g("collar",Bn,e.paleCeramic),g("belt",Bn,e.beam),g("pole",Bn,e.oldwood),g("parcel",pn,e.straw),g("basket",aa,e.straw),g("rope",Bn,e.oldwood);let f=new Tn({color:7829871,roughness:.77,metalness:.26});g("helmet",Eh,f),g("helmetRim",Bn,f),g("chinGuard",An,f),g("armouredCoat",aa,f),g("armourBand",Bn,f),g("pauldron",pn,f),g("spearHead",xg,f);for(let rt=0;rt<l.length;rt++)for(let Rt=0;Rt<h[rt];Rt++){let Ot=.86+n()*.21;Rt%7===0&&rt>=2?c.push({route:l[rt],started:l[rt].length*(Rt+.25)/h[rt],speed:.72+n()*.17,walking:!0,style:Rt%3,scale:.92+n()*.13,shade:new Ct(u[Math.floor(n()*u.length)]),faces:new Ct(d[Math.floor(n()*d.length)]),p:rt,payload:2,phase:n()*ui}):c.push({route:l[rt],started:l[rt].length*(Rt+n()*.9)/h[rt],speed:.56+n()*.69,walking:!0,style:Rt%3,scale:Ot,shade:new Ct(u[Math.floor(n()*u.length)]),faces:new Ct(d[Math.floor(n()*d.length)]),p:rt,payload:Rt%4===0?1:0,phase:n()*ui})}let E=Ah([[-36.52,7.29],[-36.52,12.36],[-34.9,15.1],[-32.5,18.7],[-32.15,18.44],[-35.3,15.2],[-36.52,12.6],[-36.52,9.4]]);for(let rt=0;rt<2;rt++)c.push({route:E,started:E.length*(.19+rt*.49),speed:.7,walking:!0,delivery:!0,style:rt,scale:.94+rt*.044,shade:new Ct(u[1+rt*3]),faces:new Ct(d[rt]),payload:0,phase:rt*3.2});let w=[[-126,23.3],[-36,14.2],[-30,19.2],[60,-23.2],[97,-22.4],[113,-22.3],[130.4,-48],[125,-42.5],[65.2,-35.12],[72.5,-35.22],[66.1,-38.77],[10.3,25.1]];for(let rt=0;rt<w.length;rt++){let[Rt,Ot]=w[rt];c.push({x:Rt,z:Ot,walking:!1,seated:rt>=8&&rt<=10,style:rt%3,scale:.86+n()*.17,shade:new Ct(u[rt%u.length]),faces:new Ct(d[rt%d.length]),p:3,payload:rt%4===0?1:0,phase:n()*ui})}for(let[rt,Rt]of t.trades.entries()){let Ot=20+rt%5*2.2,k=(rt*.38197+.33)%1;for(let Yt of[!1,!0])c.push({stand:Rt,buyer:Yt,cycle:Ot,offset:k,style:(rt+Number(Yt))%3,scale:.91+n()*.12,shade:new Ct(u[(rt*3+Number(Yt)*5)%u.length]),faces:new Ct(d[rt%d.length]),payload:0,phase:n()*ui,speed:1})}for(let[rt,Rt]of r.entries())c.push({boat:Rt,x:0,z:0,walking:!1,style:rt%3,scale:.93,shade:new Ct(u[rt]),faces:new Ct(d[rt%d.length]),payload:0,phase:n()*ui});for(let rt of o)c.push({cart:rt,walking:!0,style:0,scale:.96,speed:1.05,shade:new Ct(u[3+rt.index]),faces:new Ct(d[rt.index]),payload:0,phase:n()*ui});for(let[rt,Rt]of a.entries())c.push({mount:Rt,seated:!0,style:0,scale:.98,shade:new Ct(u[5+rt]),faces:new Ct(d[rt]),payload:0,phase:rt*.9,speed:0});let T=Tg(t,d);c.push(...T);let I={helmet:1,helmetRim:1,chinGuard:2,armouredCoat:1,armourBand:4,pauldron:2,spearHead:1},L=c.length;for(let[rt,Rt]of p){let Ot=["hand","arms","calves","feet","collar","basket","rope","ears","eyes"].includes(rt)?2:1,k=I[rt]?T.length*I[rt]:L*Ot+(rt==="calves"?a.length*2:0),Yt=new Ti(Rt.geometry,Rt.material,k);Yt.instanceMatrix.setUsage(Ri),Yt.castShadow=!["nose","collar","rope"].includes(rt),Yt.receiveShadow=!0,Yt.frustumCulled=!1,Yt.count=0,i.add(Yt),Rt.model=Yt}let B=new Ee,F=new qe,b=he(0,0,0),M=he(0,0,0),V=he(0,0,0),O,X,$,j,J,ft,tt;function pt(rt,Rt,Ot){let k=O.scale;return he(X+(rt*ft+Ot*tt)*k,$+Rt*k,j+(-rt*tt+Ot*ft)*k)}function dt(rt,Rt,Ot,k,Yt,Bt,Lt,gt,kt=0){let wt=p.get(rt);B.position.copy(pt(Rt,Ot,k)),B.scale.set(Yt,Bt,Lt).multiplyScalar(O.scale),B.rotation.set(kt,J,0,"YXZ"),B.updateMatrix(),wt.model.setMatrixAt(wt.used,B.matrix),wt.model.setColorAt(wt.used++,gt)}function yt(rt,Rt,Ot,k,Yt){let Bt=pt(...Rt),Lt=pt(...Ot),gt=k*O.scale;b.copy(Lt).sub(Bt),F.setFromUnitVectors(Ic,b.clone().normalize());let kt=p.get(rt);B.position.copy(Bt).lerp(Lt,.5),B.quaternion.copy(F),B.scale.set(gt,b.length(),gt*.85),B.updateMatrix(),kt.model.setMatrixAt(kt.used,B.matrix),kt.model.setColorAt(kt.used++,Yt)}let Nt=new Ct(14997691),Et=new Ct(9668216),qt=new Ct(12559741),Xt=new Ct(13028301),lt=new Ct(9539209),ut={pot:new Ct(12173734),bread:new Ct(14990723),cloth:new Ct(13407109),fruit:new Ct(11905126)},Mt=(s?60:86)**2;function Ft(rt,Rt){for(let Ot of p.values())Ot.used=0;for(O of c){if(O.stand&&Rt&&O.stand.seller.distanceToSquared(Rt)>Mt)continue;let Ot=O.walking,k=0,Yt=!1;if(O.post)({x:X,z:j}=O.post.position),J=O.post.yaw+.13*Math.sin(rt*.61+O.phase);else if(O.patrol){let{route:St,length:Gt,lead:U,side:S}=O.patrol,K=(rt*O.speed+U)%Gt/Gt;St.getPointAt(K,M),St.getTangentAt(K,V),X=M.x+V.z*S,j=M.z-V.x*S,J=Math.atan2(V.x,V.z)}else if(O.mount){let St=O.mount.root;X=St.position.x,j=St.position.z,J=St.rotation.y}else if(O.stand){let{stand:St,buyer:Gt,cycle:U,offset:S}=O,K=(rt/U+S)%1,ht=jt.smoothstep(K,.03,.26),_t=jt.smoothstep(K,.73,.96);if(k=jt.smoothstep(K,.34,.46)*(1-jt.smoothstep(K,.63,.73)),Yt=Gt?K>.55&&K<.98:K>=.3&&K<=.55,Gt){let R=ht-_t;X=jt.lerp(St.entry.x,St.buyer.x,R),j=jt.lerp(St.entry.z,St.buyer.z,R);let v=K>.73&&K<.96;Ot=K>.03&&K<.26||v,J=St.yaw+(v?0:Math.PI)+.13*Math.sin(rt*1.15+O.phase)}else({x:X,z:j}=St.seller),J=St.yaw+.14*Math.sin(rt*.77+O.phase)}else if(O.cart){let St=O.cart.root;J=St.rotation.y,X=St.position.x-Math.sin(J)*1.93,j=St.position.z-Math.cos(J)*1.93}else if(O.walking){[X,j,J]=bg(O.route,O.started+rt*O.speed);let St=O.delivery?.095:Math.sin(O.phase)*.58;if(O.delivery&&(O.payload=(O.started+rt*O.speed)%O.route.length<O.route.length*.5?1:0),X+=Math.cos(J)*St,j-=Math.sin(J)*St,O.p===0||O.p===3)for(let{root:Gt}of a){let U=X-Gt.position.x,S=j-Gt.position.z;if(Math.abs(U)>4.5||Math.abs(S)>4.5)continue;let K=Math.cos(Gt.rotation.y),ht=-Math.sin(Gt.rotation.y),_t=U*K+S*ht,x=-U*ht+S*K,R=(1-jt.smoothstep(Math.abs(x),1.2,4.2))*(1-jt.smoothstep(Math.abs(_t),.25,1.13))*.82*(_t>=0?1:-1),v=X+K*R,A=j+ht*R;t.walkHeight(v,A)!==null&&!t.isObstacle(v,A,.15)&&(X=v,j=A)}}else({x:X,z:j}=O),J=(O.seated?Math.PI:O.phase)+.15*Math.sin(rt*.64+O.phase);if($=t.walkHeight(X,j)??_e(X,j),O.post&&($=O.post.position.y),O.boat){let St=O.boat.root;X=St.position.x-O.boat.route*O.boat.length*.35,j=St.position.z,$=St.position.y+.82,J=O.boat.route>0?Math.PI/2:-Math.PI/2}O.mount&&($=O.mount.root.position.y+1.06+O.mount.bob),ft=Math.cos(J),tt=Math.sin(J);let Bt=rt*(4.1+O.speed*.97)+O.phase,Lt=Ot?Math.sin(Bt):0,gt=O.seated?-.43+.012*Math.sin(rt*2.4+O.phase):Ot?.026*Math.cos(Bt*2):.012*Math.sin(rt*2.4+O.phase)-k*(O.buyer?.065:.025),[kt,wt]=[O.shade,O.faces],Vt=O.seated?.38:O.style===1?.79:.63;dt("hem",0,.96-Vt/2+gt,0,O.style===1?.263:.218,Vt,.177,kt),dt("top",0,1.17+gt,0,.239,.46,.133,kt,.05),dt("belt",0,.962+gt,0,.173,.062,.151,Et),dt("neck",0,1.416+gt,.007,.06,.111,.058,wt),dt("head",0,1.548+gt,.012,.101,.122,.096,wt);for(let St of[-1,1])dt("ears",St*.101,1.542+gt,.018,.021,.035,.02,wt),dt("eyes",St*.044,1.568+gt,.102,.012,.009,.006,Et);if(dt("nose",0,1.54+gt,.108,.032,.027,.028,wt),O.guard){dt("helmet",0,1.625+gt,0,.141,.153,.138,Xt),dt("helmetRim",0,1.622+gt,.009,.146,.025,.143,lt),dt("armouredCoat",0,1.174+gt,0,.252,.366,.157,lt);for(let St=0;St<4;St++){let Gt=.85+gt+St*.116;dt("armourBand",0,Gt,0,.233+St*.006,.034,.158,St%2?Xt:lt)}yt("pole",[.309,.11+gt,.255],[.309,2.041+gt,.255],.022,qt),dt("spearHead",.309,2.132+gt,.255,.049,.14,.027,Xt)}else dt("hat",0,1.635+gt,.003,.108,.075,.104,Et),O.style===1&&dt("hair",0,1.67+gt,-.082,.061,.075,.067,Et);for(let St of[-1,1]){let Gt=Lt*St,U=.067+Math.max(0,-Gt)*.095;O.mount?(yt("calves",[St*.14,.53,-.01],[St*.39,.21,.16],.092,kt),yt("calves",[St*.39,.21,.16],[St*.37,-.185,.02],.06,kt),dt("feet",St*.37,-.2,.072,.074,.063,.116,Et)):(yt("calves",[St*.081,.58,-Gt*.016],[St*.079,U+.055,Gt*.16],.067,kt),dt("feet",St*.079,U,Gt*.16+.035,.075,.058,.117,Et)),O.guard&&(dt("chinGuard",St*.121,1.568+gt,-.036,.03,.127,.119,lt),dt("pauldron",St*.24,1.339+gt,0,.107,.091,.159,Xt,.13));let S=O.guard&&St===1?[.309,1.12+gt,.255]:O.mount?[St*.155,.61,.43]:O.stand&&!Ot?[St*.16,.87+gt+k*.27,.245+k*(St>0?.26:.09)]:O.seated?[St*.14,.51+.021*Math.sin(rt+O.phase),.31]:O.cart?[St*.22,.68+gt,.27]:O.payload===2&&St===1?[St*.17,1.43+gt,.12]:[St*(O.style===1?.191:.252),.854+gt,-Gt*.129+.038];yt("arms",[St*.208,1.34+gt,.005],S,.092,kt),dt("hand",...S,.052,.064,.049,wt),Yt&&St===1&&dt("parcel",S[0],S[1]+.06,S[2]+.019,.077,.086,.077,ut[O.stand.goods]),yt("collar",[St*.105,1.396+gt,.087],[-St*.036,1.216+gt,.123],.021,Nt)}if(O.payload===1&&dt("parcel",.229,.9+gt,.17,.181,.147,.117,qt),O.payload===2){yt("pole",[-.61,1.436+gt,0],[.61,1.427+gt,0],.027,qt);for(let St of[-1,1]){let Gt=St*.55+Lt*.018;yt("rope",[St*.55,1.42+gt,0],[Gt,1+gt,.013],.014,qt),dt("basket",Gt,.92+gt,.013,.167,.23,.158,qt)}}}for(let Ot of p.values())Ot.model.count=Ot.used,Ot.model.instanceMatrix.needsUpdate=!0,Ot.model.instanceColor&&(Ot.model.instanceColor.needsUpdate=!0)}return{update:Ft,count:c.length}}function Eg(i,t){return[[-40,18,-17,21],[5,-24,89,-25],[111,-25,154,-26],[60,-23,20,-23]].map(([e,n,s,r],o)=>{let a=new Pe,l=[];Ce(An,t.timber,a,0,.64,.17,1.13,.14,1.62);for(let c of[-1,1]){Ce(An,t.oldwood,a,c*.51,.86,.6,.09,.32,.86),Ce(An,t.beam,a,c*.25,.59,-.96,.09,.081,1.67);let h=new Pe;h.position.set(c*.65,.43,.34),a.add(h),Ce(Pc,t.beam,h,0,0,0,.43,.43,.43).rotation.y=Math.PI/2,Ce(Bn,t.timber,h,0,0,0,.136,.16,.136).rotation.z=Math.PI/2;for(let u=0;u<8;u++){let d=u*ui/8;Cn(h,t.oldwood,he(0,0,0),he(0,.42*Math.cos(d),.42*Math.sin(d)),.026)}l.push(h)}for(let c=0;c<5;c++)Ce(pn,t.straw,a,(c%2-.5)*.49,.92+Math.floor(c/4)*.37,.16+c%3*.21,.37,.29,.41);return l.forEach(c=>Ni(c)),Ni(a),i.add(a),{root:a,wheels:l,a:e,b:n,c:s,d:r,phase:o*.29,index:o}})}function Ag(i,t){let e=t.materials,n=[[8,-25.1],[28,-25.7],[58,-25.55],[90,-25.72],[124,-25.8],[153,-26],[157,-24.9],[151,-23.7],[116,-23.7],[85,-23.35],[54,-23.55],[24,-23.45],[11,-23.45]],s=[[-139,24.5],[-123,24.2],[-105,20.2],[-85,19.46],[-77,17.65],[-71,17.65],[-62,18.4],[-54,18.1],[-56,21.3],[-79,22.15],[-95,21.6],[-107,21],[-127,26.5],[-138,27]],r=[8607549,6707539,10053954],o=[9981241,4353124,10515523],a=[n,n,s],l=new Y,c=new Y,h=new Y,u=(d,p,g)=>{h.subVectors(g,p),d.position.copy(p).lerp(g,.5),d.scale.y=h.length(),d.quaternion.setFromUnitVectors(Ic,h.normalize())};return a.map((d,p)=>{let g=new rs(d.map(([X,$])=>he(X,0,$)),!0,"centripetal"),y=g.getLength(),m=[2.18,1.86,2.38][p],f=[27,166,31][p],E=new Pe,w=new Pe,T=new Pe;E.add(w),i.add(E);let I=new Tn({color:r[p],roughness:.91}),L=new Tn({color:p===1?8747376:5718839,roughness:.88}),B=new Tn({color:3090206,roughness:.94}),F=e.sage.clone();F.color.setHex(o[p]);let b=(X,$,j,J,ft,tt,pt,dt=0,yt=w)=>{let Nt=Ce(pn,X,yt,$,j,J,ft,tt,pt);return Nt.rotation.x=dt,Nt};b(I,0,1.08,-.06,.3,.324,.75),b(I,0,1.04,-.55,.275,.337,.328),b(I,0,1.13,.52,.252,.356,.31),b(I,0,1.47,.7,.175,.434,.239,.52),b(I,0,1.68,.88,.131,.275,.162,.55),b(I,0,1.775,1.015,.155,.162,.261,.54),b(L,0,1.603,1.275,.121,.107,.188,.45),b(B,0,1.84,.912,.077,.134,.159,.37);for(let X of[-1,1]){b(I,X*.079,1.986,.986,.036,.138,.051,.24),b(B,X*.078,2.008,1.014,.022,.075,.025,.21),b(B,X*.124,1.777,1.101,.024,.025,.03),b(B,X*.084,1.621,1.411,.029,.019,.021),b(F,X*.267,1.208,-.125,.058,.195,.367),b(e.beam,X*.299,1.06,-.138,.022,.28,.062),Cn(w,e.beam,he(X*.096,1.638,1.25),he(X*.156,1.69,.42),.012),Cn(w,e.beam,he(X*.106,1.672,1.25),he(X*.139,1.86,.981),.016);let $=Ce(Pc,e.iron,w,X*.36,.864,.082,.088,.112,.065);$.rotation.y=Math.PI/2}b(F,0,1.383,-.112,.284,.105,.393),b(e.beam,0,1.476,-.083,.214,.104,.271),b(e.timber,0,1.507,.144,.183,.09,.044),b(e.timber,0,1.505,-.304,.183,.09,.054);for(let X=0;X<9;X++)b(B,0,1.87-X*.064,.815-X*.042,.056,.104,.082,.4);T.position.set(0,1.28,-.77),w.add(T),b(B,0,-.15,-.114,.06,.24,.061,.64,T),b(B,0,-.37,-.287,.074,.252,.069,.37,T),b(B,0,-.547,-.377,.059,.183,.052,.43,T),Ni(w),Ni(T);let M=[];for(let X of[!0,!1])for(let $ of[-1,1]){let j=$*.183,J=X?.507:-.535,ft=he(j,X?1.076:1.065,J),tt=he(j,.544,J),pt=he(j,.105,J),dt=Cn(E,I,ft,tt,X?.096:.125,aa),yt=Cn(E,I,tt,pt,X?.057:.065,Ch),Nt=b(B,j,.073,J,.064,.072,.108,0,E);M.push({front:X,x:j,z:J,hip:ft,knee:tt,hoof:pt,thigh:dt,calf:yt,foot:Nt,phase:(X?0:Math.PI)+$*Math.PI*.5})}let V={root:E,bob:0,update:O};function O(X){let $=(X*m+f)%y;g.getPointAt($/y,c),g.getTangentAt($/y,l);let{x:j,z:J}=c;E.position.set(j,t.walkHeight(j,J)??_e(j,J),J),E.rotation.y=Math.atan2(l.x,l.z);let ft=X*m*4.1+p;V.bob=.027*Math.cos(ft*2),w.position.y=V.bob,T.rotation.y=Math.sin(ft*.52)*.31;for(let tt of M){let pt=ft+tt.phase,dt=Math.sin(pt),yt=Math.max(0,Math.cos(pt));tt.hip.y=(tt.front?1.076:1.065)+V.bob,tt.knee.set(tt.x,.51+yt*.17,tt.z+dt*.147+(tt.front?-.13:.13)*yt),tt.hoof.set(tt.x,.128+yt*.2,tt.z+dt*.258),u(tt.thigh,tt.hip,tt.knee),u(tt.calf,tt.knee,tt.hoof),tt.foot.position.set(tt.x,tt.hoof.y-.055,tt.hoof.z+.027),tt.foot.rotation.x=-yt*.42}}return V})}function Rh(i,t,e){let n=xs(1973),s=yg(i,t.materials,n),r=Eg(i,t.materials),o=Ag(i,t),a=wg(i,t,t.materials,n,e,s,r,o);function l(c,h){for(let u of s){let{root:d,mast:p,wake:g,oar:y,rudder:m,length:f,phase:E,route:w,docked:T}=u,I=T?u.start:((u.start+183+c*u.speed*w)%374+374)%374-183,L=Ge(I),B=Math.sin(c*.22+E)*.22,F=L+u.lane+(T?B*.5:B+Math.sin(I*.076+E)*.39),b=.063*Math.sin(c*1.1+E)+.026*Math.cos(c*1.63+E),M=Ge(I+1)-L,V=(w>0?0:Math.PI)-Math.atan(M)*.91;d.position.set(I,hr-.02+b,F),d.rotation.set(Math.sin(c*1.3+E)*.034,V,Math.sin(c*.79+E)*.021,"YXZ");let O=Math.abs(I-Ue),X=1-jt.smoothstep(O,8.5+f*.24,21);T||(p.rotation.z=-w*X*1.48),y.rotation.y=Math.sin(c*1.7+E)*.25,y.rotation.z=.09*Math.cos(c*1.7+E),m.rotation.y=.12*Math.sin(c*.49+E),g.position.x=I,g.position.z=F,g.rotation.y=V,g.visible=!T,g.userData.time.value=c}for(let u of r){let{root:d,wheels:p,a:g,b:y,c:m,d:f,phase:E,index:w}=u,T=Math.hypot(m-g,f-y),I=(c*(1+w*.05)/T+E)%2,L=I<1,B=L?I:2-I,F=jt.lerp(g,m,B),b=jt.lerp(y,f,B);d.position.set(F,t.walkHeight(F,b)??_e(F,b),b),d.rotation.y=Math.atan2(m-g,f-y)+(L?0:Math.PI),p.forEach(M=>M.rotation.x=c*2.3)}for(let u of o)u.update(c);a.update(c,h)}return{update:l,boats:s,carts:r,mounts:o,headcount:a.count}}var ca=class extends de{constructor(t,e={}){super(t),this.isWater=!0;let n=this,s=e.textureWidth!==void 0?e.textureWidth:512,r=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,h=e.sunDirection!==void 0?e.sunDirection:new Y(.70707,.70707,0),u=new Ct(e.sunColor!==void 0?e.sunColor:16777215),d=new Ct(e.waterColor!==void 0?e.waterColor:8355711),p=e.eye!==void 0?e.eye:new Y(0,0,0),g=e.distortionScale!==void 0?e.distortionScale:20,y=e.side!==void 0?e.side:Mn,m=e.fog!==void 0?e.fog:!1,f=new ln,E=new Y,w=new Y,T=new Y,I=new ae,L=new Y(0,0,-1),B=new fe,F=new Y,b=new Y,M=new fe,V=new ae,O=new Be,X=new hn(s,r),$={name:"MirrorShader",uniforms:ar.merge([At.fog,At.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ae},sunColor:{value:new Ct(8355711)},sunDirection:{value:new Y(.70707,.70707,0)},eye:{value:new Y},waterColor:{value:new Ct(5592405)}}]),vertexShader:`
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
				}`},j=new Oe({name:$.name,uniforms:ar.clone($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,lights:!0,side:y,fog:m});j.uniforms.mirrorSampler.value=X.texture,j.uniforms.textureMatrix.value=V,j.uniforms.alpha.value=a,j.uniforms.time.value=l,j.uniforms.normalSampler.value=c,j.uniforms.sunColor.value=u,j.uniforms.waterColor.value=d,j.uniforms.sunDirection.value=h,j.uniforms.distortionScale.value=g,j.uniforms.eye.value=p,n.material=j,n.onBeforeRender=function(J,ft,tt){if(w.setFromMatrixPosition(n.matrixWorld),T.setFromMatrixPosition(tt.matrixWorld),I.extractRotation(n.matrixWorld),E.set(0,0,1),E.applyMatrix4(I),F.subVectors(w,T),F.dot(E)>0)return;F.reflect(E).negate(),F.add(w),I.extractRotation(tt.matrixWorld),L.set(0,0,-1),L.applyMatrix4(I),L.add(T),b.subVectors(w,L),b.reflect(E).negate(),b.add(w),O.position.copy(F),O.up.set(0,1,0),O.up.applyMatrix4(I),O.up.reflect(E),O.lookAt(b),O.far=tt.far,O.updateMatrixWorld(),O.projectionMatrix.copy(tt.projectionMatrix),V.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),V.multiply(O.projectionMatrix),V.multiply(O.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(E,w),f.applyMatrix4(O.matrixWorldInverse),B.set(f.normal.x,f.normal.y,f.normal.z,f.constant);let pt=O.projectionMatrix;M.x=(Math.sign(B.x)+pt.elements[8])/pt.elements[0],M.y=(Math.sign(B.y)+pt.elements[9])/pt.elements[5],M.z=-1,M.w=(1+pt.elements[10])/pt.elements[14],B.multiplyScalar(2/B.dot(M)),pt.elements[2]=B.x,pt.elements[6]=B.y,pt.elements[10]=B.z+1-o,pt.elements[14]=B.w,p.setFromMatrixPosition(tt.matrixWorld);let dt=J.getRenderTarget(),yt=J.xr.enabled,Nt=J.shadowMap.autoUpdate;n.visible=!1,J.xr.enabled=!1,J.shadowMap.autoUpdate=!1,J.setRenderTarget(X),J.state.buffers.depth.setMask(!0),J.autoClear===!1&&J.clear(),J.render(ft,O),n.visible=!0,J.xr.enabled=yt,J.shadowMap.autoUpdate=Nt,J.setRenderTarget(dt);let Et=tt.viewport;Et!==void 0&&J.state.viewport(Et)}}};function Ih(i,t,e,n){let s=new Y,r=new Ct(7714013),o=new Ct(13229016),a=new de(new oi(255,36,22),new Oe({side:ze,depthWrite:!1,fog:!1,uniforms:{sunVector:{value:s},skyTop:{value:r},skyHorizon:{value:o},clock:{value:0}},vertexShader:`
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
    `}));a.renderOrder=-10,a.frustumCulled=!1,i.add(a),i.fog=new Hs(13950673,.0052);let l=new Ks(14741495,10126689,1.82),c=new Qs(16769706,2.68);c.castShadow=!0;let h=n?51:63;c.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(c.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:8,far:208}),c.shadow.camera.updateProjectionMatrix(),c.shadow.normalBias=.035,c.shadow.bias=-22e-5,c.shadow.radius=2,i.add(l,c,c.target);let u=new ca(new un(543,65),{textureWidth:n?320:768,textureHeight:n?240:480,waterNormals:e.waterNormal,sunDirection:s,sunColor:16573366,waterColor:6387024,distortionScale:2.85,clipBias:.018,fog:!0});u.rotation.x=-Math.PI/2,u.position.set(4,hr,0),u.material.uniforms.size.value=1.55,u.material.fragmentShader=u.material.fragmentShader.replace("float rf0 = 0.3;","float rf0 = 0.17;").replace("vec3 outgoingLight = albedo;","vec3 outgoingLight = albedo * ( .93 + .11 * sin(worldPosition.x * 6.4 + sin(worldPosition.z * 2.2) + time * 2.9) * sin(worldPosition.z * 7.0 + sin(worldPosition.x * 3.0) - time) );"),u.receiveShadow=!0,i.add(u);let d=u.onBeforeRender,p=0,g=new Y(999,0,0),y=new qe;u.onBeforeRender=function(...$){let j=$[2];(p++%(n?4:3)===0||g.distanceToSquared(j.position)>1.1||Math.abs(y.dot(j.quaternion))<.9996)&&(g.copy(j.position),y.copy(j.quaternion),d.apply(this,$))};let m=[[-89,4.5,27],[70,5.2,-34],[133,3.7,-54],[57,4.2,-37]],f=m.length*7,E=new Float32Array(f*3),w=new Float32Array(f),T=new Float32Array(f),I=new Me;I.setAttribute("position",new Te(E,3).setUsage(Ri)),I.setAttribute("size",new Te(w,1).setUsage(Ri)),I.setAttribute("fade",new Te(T,1).setUsage(Ri));let L=new Ws(I,new Oe({transparent:!0,depthWrite:!1,vertexShader:`
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
    `}));L.frustumCulled=!1,i.add(L);let B=[],F=new bi({color:3817010,side:Se,fog:!0}),b=new Me;b.setAttribute("position",new re([0,0,.15,.43,.025,-.022,.12,0,-.13,0,0,.15,.12,0,-.13,0,0,-.098],3));for(let $=0;$<(n?7:11);$++){let j=new Pe,J=new de(b,F),ft=new de(b,F);ft.scale.x=-1,j.add(ft,J),i.add(j),B.push({group:j,left:ft,right:J})}let M="",V="",O=new Y;function X($,j,J,ft){a.position.copy(J.position),a.material.uniforms.clock.value=$;let pt=jt.clamp((j-8.1)/8.8,0,1),dt=Math.sin(Math.PI*(.2+pt*.59)),yt=.36+pt*2.12;s.set(Math.cos(yt)*(.79+pt*.15),.46+dt*.81,Math.sin(yt)).normalize();let Nt=Math.round(j*45).toString();if(Nt!==V&&(c.color.setHSL(.106,.58+(1-dt)*.09,.83+(dt-.5)*.07),c.intensity=2.3+dt*.59,l.intensity=1.48+dt*.28,r.setRGB(.105+dt*.033,.312+dt*.085,.62+dt*.1),o.setRGB(.51+(1-dt)*.09,.655,.745),i.fog.color.setRGB(.62,.73,.76),V=Nt),ft%4===0||ft===1){let Et=J.getWorldDirection(O),qt=Math.round((J.position.x+Et.x*24)/8)*8,Xt=Math.round((J.position.z+Et.z*24)/8)*8,lt=qt+"/"+Xt+"/"+Nt,ut=lt!==M;ut&&(c.target.position.set(qt,0,Xt),c.position.copy(c.target.position).addScaledVector(s,86),M=lt),(ut||ft%(n?12:8)===0)&&(t.shadowMap.needsUpdate=!0)}u.material.uniforms.time.value=$*.77;for(let Et=0;Et<f;Et++){let[qt,Xt,lt]=m[Math.floor(Et/7)],ut=($*.17+Et%7/7)%1;E[Et*3]=qt+ut*3.6+.37*Math.sin(Et+ut*6),E[Et*3+1]=Xt+ut*5.13,E[Et*3+2]=lt+Math.sin(ut*3+Et)*(.25+ut*.7)+ut*.6,w[Et]=.41+ut*2.1,T[Et]=Math.sin(ut*Math.PI)*.13*(1-ut*.65)}for(let Et of["position","size","fade"])I.attributes[Et].needsUpdate=!0;for(let Et=0;Et<B.length;Et++){let{group:qt,left:Xt,right:lt}=B[Et],ut=$*.054+Et*.045,Mt=Et%4*.91,Ft=-14+Math.sin(ut)*46+Mt*2,rt=-5+Math.cos(ut)*20+Mt;qt.position.set(Ft,17.6+Math.sin(ut*1.6+Et*.14)*2.2+Mt*.38,rt),qt.rotation.y=Math.atan2(Math.cos(ut)*46,-Math.sin(ut)*20);let Rt=Math.sin($*6.7+Et*.77)*.67;Xt.rotation.z=Rt,lt.rotation.z=-Rt}}return{update:X,river:u}}function Ph(i,t){let e,n=!1,s=0,r={field:[390,.1,.016,.046],river:[490,.17,.025,.026],dock:[590,.14,.062,.018],market:[780,.068,.126,.013],shop:[570,.046,.1,.005],lane:[510,.071,.044,.033]};function o(){let h=new AudioContext,u=h.createBuffer(1,h.sampleRate*9,h.sampleRate),d=u.getChannelData(0),p=0;for(let m=0;m<d.length;m++)p=p*.83+(Math.random()*2-1)*.15,d[m]=p;let g=h.createGain();g.gain.value=0,g.connect(h.destination);function y(m,f,E){let w=h.createBufferSource(),T=h.createBiquadFilter(),I=h.createGain();return w.buffer=u,w.loop=!0,w.playbackRate.value=E,T.type=m,T.frequency.value=f,w.connect(T).connect(I).connect(g),w.start(Math.random()*1.2),{filter:T,gain:I}}return{audio:h,noise:u,output:g,wind:y("lowpass",510,1.22),crowd:y("bandpass",590,1.47)}}i.setAttribute("aria-label","\u5F00\u542F\u73AF\u5883\u97F3"),i.addEventListener("click",async()=>{try{e??=o(),await e.audio.resume(),n=!n,i.setAttribute("aria-pressed",String(n)),i.setAttribute("aria-label",n?"\u5173\u95ED\u73AF\u5883\u97F3":"\u5F00\u542F\u73AF\u5883\u97F3"),t.textContent=n?"\u73AF\u5883\u97F3\u5DF2\u5F00":"\u73AF\u5883\u97F3",e.output.gain.setTargetAtTime(n?.72:0,e.audio.currentTime,.12)}catch{t.textContent="\u73AF\u5883\u97F3\u4E0D\u53EF\u7528"}});function a(h,u,d){let{audio:p,output:g}=e,y=p.createOscillator(),m=p.createGain();y.frequency.setValueAtTime(h,d),y.frequency.exponentialRampToValueAtTime(h*1.43,d+.057),m.gain.setValueAtTime(1e-4,d),m.gain.exponentialRampToValueAtTime(u,d+.024),m.gain.exponentialRampToValueAtTime(1e-4,d+.083),y.connect(m).connect(g),y.start(d),y.stop(d+.085)}let l=5.1;function c(h,u,d,p){if(!n||!e||document.hidden)return;let[g,y,m,f]=r[h]??r.river,{audio:E,output:w,noise:T}=e,I=E.currentTime;if(e.wind.filter.frequency.setTargetAtTime(g,I,.35),e.wind.gain.gain.setTargetAtTime(y*(.77+.15*Math.sin(I*.8)+.11*Math.cos(I*.31)),I,.4),e.crowd.gain.gain.setTargetAtTime(m*(.73+.1*Math.sin(I*2.1)+.2*Math.cos(I*.59)),I,.48),u&&I-s>.4){let L=E.createBufferSource(),B=E.createBiquadFilter(),F=E.createGain();L.buffer=T,B.type="lowpass",B.frequency.value=d?285:390,F.gain.setValueAtTime(.15,I),F.gain.exponentialRampToValueAtTime(.001,I+.16),L.connect(B).connect(F).connect(w),L.start(I,Math.random()*7,.17),s=I}if(l-=p,l<=0){let L=1390+Math.random()*520;for(let B=0;B<3;B++)a(L+B*87,f*(.4+Math.random()*.28),I+B*.14);l=6+Math.random()*9}}return{update:c}}var It=i=>document.getElementById(i),Rn=It("experience"),Ze=It("world"),pr=matchMedia("(prefers-reduced-motion: reduce)"),Cg=matchMedia("(pointer: coarse)"),In=Cg.matches||innerWidth<680,vs=jt.clamp,Lc=i=>String(i).padStart(2,"0"),di=(i,t,e)=>new Y(i,t,e),la=[...Ae.flatMap(i=>[[i.x,i.z],...i.path])],Lh=[{stop:1,point:di(-31,.6,-4),button:null},{stop:3,point:di(Ue,7.5,.7),button:null},{stop:4,point:di(28,4.5,-25.2),button:null},{stop:7,point:di(98,11,-24),button:null}];async function Rg(){let i=new ra({canvas:Ze,antialias:!In,alpha:!1,powerPreference:"high-performance"}),t=new Gs,e=new Be(In?64:52,1,.12,340),n={value:0};i.setClearColor(12768452),i.outputColorSpace=we,i.toneMapping=go,i.toneMappingExposure=1.08,i.shadowMap.enabled=!0,i.shadowMap.autoUpdate=!1,i.shadowMap.type=tr;let s=Mh(),r=bh(t,s,n),o=Ih(t,i,s,In),a=Rh(t,r,In);i.compile(t,e);let l=Ph(It("sound"),It("sound-label")),c=new Set,h={id:null,x:0,y:0},u={id:null,x:0,y:0},d=di(0,0,0),p=di(0,0,0),g=di(0,0,0),y=It("map-view"),m=It("map"),f=m.getContext("2d"),E=!1,w="scenic",T=0,I=-1,L=0,B=0,F=null,b=pr.matches,M=0,V=2.4,O=0,X=0,$="",j=!1,J=null,ft,tt,pt=[],dt=[],yt={area:"\u57CE\u5899\u6B65\u9053",name:"\u57CE\u95E8\u697C",note:"\u6276\u5899\u53EF\u671B\u89C1\u8857\u5E02\u4E0E\u6C74\u6CB3\u3002\u95E8\u697C\u4ECE\u5185\u5ECA\u8FDB\u5165\uFF0C\u6848\u4E0A\u94FA\u7740\u6C74\u4EAC\u6C34\u9646\u56FE\u3002"},Nt,Et={west:-155,east:174,north:-68,south:55},qt=_=>(_-Et.west)/(Et.east-Et.west),Xt=_=>(_-Et.north)/(Et.south-Et.north),lt=[];for(let _=1;_<la.length;_++){let[N,W]=la[_-1],[Z,H]=la[_],z=Math.hypot(Z-N,H-W);for(let et=0;et<=Math.ceil(z);et++){let xt=et/Math.max(1,Math.ceil(z)),mt=jt.lerp(N,Z,xt),bt=jt.lerp(W,H,xt);if(r.walkHeight(mt,bt)===null||r.isObstacle(mt,bt,.16)){lt.push([_,+mt.toFixed(2),+bt.toFixed(2)]);break}}}lt.length&&console.warn("Tour route intersects scene geometry",lt);function ut(){let _=Rn.clientWidth,N=Rn.clientHeight;e.aspect=_/N,e.fov=_<510?62:52,e.updateProjectionMatrix(),i.setPixelRatio(Math.min(devicePixelRatio,In?1.05:1.4)),i.setSize(_,N,!1),It("map-panel").hidden||ht()}new ResizeObserver(ut).observe(Rn),ut();function Mt(_,N,W=!1){let Z=document.createElement("button");Z.type="button",Z.className=W?"":"route-stop";let H=document.createElement("b");return H.textContent=Lc(N+1),H.setAttribute("aria-hidden","true"),Z.append(H,document.createTextNode(_.name)),Z.addEventListener("click",()=>{x(!1),kt(()=>Lt(N,!1))}),Z}Ae.forEach((_,N)=>{let W=document.createElement("li"),Z=Mt(_,N);W.append(Z),It("route").append(W),pt.push(Z);let H=document.createElement("li"),z=Mt(_,N,!0);H.append(z),It("map-list").append(H);let et=document.createElement("button");et.type="button",et.className="map-dot",et.title=_.name,et.setAttribute("aria-label",_.name),et.textContent=String(N+1),et.style.left=qt(_.x)*100+"%",et.style.top=Xt(_.z)*100+"%",et.addEventListener("click",()=>z.click()),It("map-pins").append(et),dt.push([z,et])});for(let _ of Lh){let N=document.createElement("button");N.type="button",N.className="world-label",N.textContent=Ae[_.stop].name,N.addEventListener("click",()=>kt(()=>Lt(_.stop,!1))),It("labels").append(N),_.button=N}function Ft(){if(w!=="scenic"||In)return;let _=Rn.clientWidth,N=Rn.clientHeight;for(let W of Lh){let Z=p.copy(W.point).project(e),H=(Z.x+1)/2*_,z=(1-Z.y)/2*N,et=It("intro").getBoundingClientRect(),xt=H>et.left-8&&H<et.right+32&&z>et.top-30&&z<et.bottom+12;W.button.hidden=Z.z<-.92||Z.z>1||H<22||H>_-94||z<92||z>N-150||xt,W.button.hidden||(W.button.style.transform="translate3d("+H.toFixed(1)+"px,"+z.toFixed(1)+"px,0)")}}function rt(_){!_||Nt===_||(Nt=_,It("place-area").textContent=_.area,It("place-name").textContent=_.name,It("place-note").textContent=_.note)}function Rt(_,N=!1){I!==_&&(I=_,rt(Ae[_]),pt.forEach((W,Z)=>{let H=Z===_;for(let z of[W,...dt[Z]])H?z.setAttribute("aria-current","location"):z.removeAttribute("aria-current");if(H&&N){let z=It("route"),et=W.offsetLeft;(et<z.scrollLeft||et+W.offsetWidth>z.scrollLeft+z.clientWidth)&&z.scrollTo({left:Math.max(0,et-z.clientWidth/2+W.offsetWidth/2),behavior:pr.matches?"instant":"smooth"})}}))}function Ot(){let _=w!=="scenic";Rn.classList.toggle("walking",_),It("intro").hidden=_,It("walk-hud").hidden=!_,It("look-help").hidden=!_||In||w==="tour",It("joystick").hidden=!In||w!=="walk",It("take-control").hidden=In||w!=="walk"||typeof Ze.requestPointerLock!="function",It("tour").hidden=!_,It("tour").setAttribute("aria-pressed",String(w==="tour")),It("tour").firstElementChild.textContent=w==="tour"?"\u2161 \u7ED3\u675F\u6F2B\u6E38":"\u25B7 \u81EA\u52A8\u6F2B\u6E38",It("aim").hidden=document.pointerLockElement!==Ze,It("tour-status").hidden=w!=="tour"}function k(_,N,W){let Z=_-d.x,H=N-d.y,z=W-d.z;return[Math.atan2(-Z,-z),Math.atan2(H,Math.hypot(Z,z))]}function Yt(_){let N=Ae[_];d.set(N.x,(r.walkHeight(N.x,N.z)??0)+1.61,N.z),[L,B]=k(...N.look),e.position.copy(d),e.rotation.set(B,L,0,"YXZ"),Rt(_,!0)}function Bt(_){let N=[[Ae[_].x,Ae[_].z]],W=new Map([[0,_]]);for(let Z=_;Z<Ae.length-1;Z++)N.push(...Ae[Z].path,[Ae[Z+1].x,Ae[Z+1].z]),W.set(N.length-1,Z+1);return{points:N,events:W,segment:0,progress:0,dwell:1.55}}function Lt(_,N){E&&(c.clear(),document.pointerLockElement&&document.exitPointerLock(),w=N?"tour":"walk",Yt(_),F=N?Bt(_):null,Ot(),Ze.focus({preventScroll:!0}))}function gt(_=0){document.pointerLockElement&&document.exitPointerLock(),T=_,w="scenic",F=null,c.clear(),Rt(-1),Ot(),It("start").focus({preventScroll:!0})}function kt(_){if(!(j||!E)){if(j=!0,pr.matches){_(),j=!1;return}It("fade").classList.add("in"),setTimeout(()=>{_(),It("fade").classList.remove("in"),j=!1},220)}}function wt(){w==="tour"&&(w="walk",F=null,Ot())}function Vt(_,N,W=.05){let Z=!1,H=d.y-1.61;for(let[et,xt]of[[d.x+_,d.z+N],[d.x+_,d.z],[d.x,d.z+N]]){if(Math.abs(et-d.x)+Math.abs(xt-d.z)<1e-4)continue;let mt=r.walkHeight(et,xt,H);if(!(mt===null||r.isObstacle(et,xt,.3,H)||Math.abs(mt-H)>.73)){d.x=et,d.z=xt,Z=!0;break}}let z=r.walkHeight(d.x,d.z,H)??0;return d.y=jt.lerp(d.y,z+1.61,1-Math.exp(-W*17)),Z}function St(){let _=0,N=1/0;for(let W=0;W<Ae.length;W++){let Z=Ae[W],H=(Z.x-d.x)**2+(Z.z-d.z)**2;H<N&&(_=W,N=H)}(N<225||I<0||N<((Ae[I].x-d.x)**2+(Ae[I].z-d.z)**2)*.7)&&Rt(_,!0)}function Gt(_){let N=(c.has("w")||c.has("arrowup")?1:0)-(c.has("s")||c.has("arrowdown")?1:0)+u.y,W=(c.has("d")?1:0)-(c.has("a")?1:0)+u.x;L+=((c.has("arrowleft")?1:0)-(c.has("arrowright")?1:0))*_*1.9;let Z=Math.max(Math.hypot(N,W),1),H=(c.has("shift")?6.5:3.3)*_/Z,z=Vt((Math.cos(L)*W-Math.sin(L)*N)*H,(-Math.sin(L)*W-Math.cos(L)*N)*H,_);return e.position.copy(d),z&&!pr.matches&&(e.position.y+=Math.sin(performance.now()*.011)*.035),e.rotation.set(B,L,0,"YXZ"),St(),rt(r.onGateTerrace(d.x,d.z,d.y-1.61)?yt:Ae[I]),z}function U(_){let N=F.points[F.segment],W=F.points[F.segment+1],Z;if(F.dwell>0)_=Math.min(_,F.dwell),F.dwell-=_,Z=k(...Ae[I].look);else if(W){let et=Math.hypot(W[0]-N[0],W[1]-N[1]);F.progress=vs(F.progress+_*5.65/Math.max(.01,et),0,1);let xt=jt.lerp(N[0],W[0],F.progress),mt=jt.lerp(N[1],W[1],F.progress);d.x=xt,d.z=mt;let bt=F.points[F.segment+2]??W,$t=vs((F.progress-.58)*1.8,0,.78),Jt=jt.lerp(W[0],bt[0],$t),ie=jt.lerp(W[1],bt[1],$t);Z=k(Jt,(r.walkHeight(Jt,ie)??0)+1.25,ie),F.progress===1&&(F.segment++,F.progress=0,F.events.has(F.segment)&&(Rt(F.events.get(F.segment),!0),F.dwell=2.7))}else return wt(),!1;let H=(r.walkHeight(d.x,d.z)??0)+1.67;d.y=jt.lerp(d.y,H,1-Math.exp(-_*12));let z=Math.atan2(Math.sin(Z[0]-L),Math.cos(Z[0]-L));return L+=z*(1-Math.exp(-_*3.4)),B=jt.lerp(B,vs(Z[1],-.4,.42),1-Math.exp(-_*4.4)),e.position.copy(d),e.rotation.set(B,L,0,"YXZ"),F.dwell===0}let S=di(0,0,0);function K(){let _=Rc[T];e.position.set(..._.position),pr.matches||(e.position.x+=Math.sin(M*.09)*1.22,e.position.y+=Math.cos(M*.13)*.38),In&&T===0&&(e.position.x-=10,e.position.z-=4),e.lookAt(S.set(..._.look))}function ht(){let _=y.clientWidth,N=y.clientHeight;if(!_||!N)return;let W=Math.min(2,devicePixelRatio);m.width=Math.round(_*W),m.height=Math.round(N*W),f.setTransform(W,0,0,W,0,0);let Z=z=>qt(z)*_,H=z=>Xt(z)*N;f.fillStyle="#e2d9b9",f.fillRect(0,0,_,N),f.strokeStyle="#b7ad9045",f.lineWidth=1;for(let z=0;z<_;z+=23)f.beginPath(),f.moveTo(z,0),f.lineTo(z,N),f.stroke();for(let z=0;z<N;z+=23)f.beginPath(),f.moveTo(0,z),f.lineTo(_,z),f.stroke();f.beginPath();for(let z=Et.west;z<=Et.east;z+=1)f.lineTo(Z(z),H(Ge(z)-Fn(z)));for(let z=Et.east;z>=Et.west;z-=1)f.lineTo(Z(z),H(Ge(z)+Fn(z)));f.closePath(),f.fillStyle="#819991",f.fill(),f.strokeStyle="#596c60",f.stroke();for(let z of r.obstacles)z.x1-z.x0<2.2||z.z1-z.z0<2.2||(f.fillStyle=z.x0>101&&z.x1<112?"#836f58":"#a49875",f.fillRect(Z(z.x0),H(z.z0),Z(z.x1)-Z(z.x0),H(z.z1)-H(z.z0)));for(let z of r.gateStairs){f.fillStyle="#a48b63",f.fillRect(Z(z.x0),H(z.z0),Z(z.x1)-Z(z.x0),H(z.z1)-H(z.z0)),f.strokeStyle="#65563e",f.lineWidth=1;for(let et=z.x0+2;et<z.x1;et+=3)f.beginPath(),f.moveTo(Z(et),H(z.z0)),f.lineTo(Z(et),H(z.z1)),f.stroke()}f.beginPath();for(let[z,et]of la)f.lineTo(Z(z),H(et));if(f.strokeStyle="#f6ecce",f.lineWidth=4,f.stroke(),f.strokeStyle="#934f3c",f.lineWidth=1.3,f.setLineDash([4,3]),f.stroke(),f.setLineDash([]),f.font="bold "+Math.max(11,_*.021)+"px SimSun, serif",f.fillStyle="#f0e8cf",f.fillText("\u6C74\u6CB3",Z(-19),H(5)),f.fillStyle="#665b46",f.fillText("\u5317 \u2191",_-34,16),w!=="scenic"){let z=Z(d.x),et=H(d.z),xt=-Math.sin(L),mt=-Math.cos(L);f.beginPath(),f.moveTo(z+8*xt,et+8*mt),f.lineTo(z-4*xt+4*mt,et-4*mt-4*xt),f.lineTo(z-4*xt-4*mt,et-4*mt+4*xt),f.closePath(),f.fillStyle="#263d31",f.fill(),f.strokeStyle="#fff5da",f.lineWidth=1,f.stroke(),ft=d.x,tt=d.z}}function _t(){document.pointerLockElement&&document.exitPointerLock(),It("map-panel").hidden=!1,It("map-button").setAttribute("aria-expanded","true"),ht(),It("close-map").focus()}function x(_=!0){It("map-panel").hidden||(It("map-panel").hidden=!0,It("map-button").setAttribute("aria-expanded","false"),_&&It("map-button").focus())}let R=["\u5317","\u4E1C\u5317","\u4E1C","\u4E1C\u5357","\u5357","\u897F\u5357","\u897F","\u897F\u5317"],v=["\u8FB0\u65F6","\u5DF3\u65F6","\u5348\u65F6","\u672A\u65F6","\u7533\u65F6"];function A(_){let N=Math.floor(_*60+.002),W=Math.floor(N/60),Z=Lc(W)+":"+Lc(N%60);$!==Z&&(It("clock").textContent=Z,It("clock").dateTime=Z,It("period").textContent=v[vs(Math.floor((W-7)/2),0,4)],It("time-range")!==document.activeElement&&(It("time-range").value=String(_)),$=Z),e.getWorldDirection(S);let H=(Math.round(Math.atan2(S.x,-S.z)/(Math.PI/4))+8)%8;O%12===1&&(It("heading-text").textContent=R[H]+" \u2191")}function P(){Rn.classList.add("ready"),It("start").disabled=!1,It("intro-tour").disabled=!1,It("load-status").textContent="",E=!0}function D(_){let N=X?vs((_-X)/1e3,.001,.12):.016;X=_,O++,b||(M+=N);let W=8+((V+M*.0078)%8.75+8.75)%8.75,Z=!1;w==="scenic"?K():w==="tour"?Z=U(N):It("map-panel").hidden&&(Z=Gt(N)),(!b||O===1||g.distanceToSquared(e.position)>100)&&(n.value=M,a.update(M,e.position),g.copy(e.position)),o.update(M,W,e,O),i.render(t,e),O%5===1&&Ft(),O%4===1&&A(W),!It("map-panel").hidden&&O%10===1&&Math.hypot(d.x-ft,d.z-tt)>.38&&ht(),l.update(Ae[I]?.sound??"river",Z,Math.abs(d.x-Ue)<5&&Math.abs(d.z)<21,N),E||P(),J=requestAnimationFrame(D)}It("start").addEventListener("click",()=>kt(()=>Lt(0,!1))),It("intro-tour").addEventListener("click",()=>kt(()=>Lt(0,!0))),It("home").addEventListener("click",()=>kt(()=>gt())),It("view").addEventListener("click",()=>kt(()=>gt(w==="scenic"?(T+1)%Rc.length:0))),It("tour").addEventListener("click",()=>{w==="tour"?wt():kt(()=>Lt(I>=Ae.length-1?0:Math.max(0,I),!0))}),It("map-button").addEventListener("click",()=>{E&&(It("map-panel").hidden?_t():x())}),It("close-map").addEventListener("click",()=>x()),It("time-button").addEventListener("click",()=>{let _=It("day-panel");_.hidden=!_.hidden,It("time-button").setAttribute("aria-expanded",String(!_.hidden))}),It("time-range").addEventListener("input",_=>{V=Number(_.target.value)-8-M*.0078}),It("full").hidden=!document.fullscreenEnabled,It("full").addEventListener("click",async()=>{document.fullscreenElement?await document.exitFullscreen().catch(()=>{}):await Rn.requestFullscreen().catch(()=>{})});function G(_){b=_;let N=It("pause"),W=_?"\u7EE7\u7EED\u57CE\u4E2D\u52A8\u6001":"\u6682\u505C\u57CE\u4E2D\u52A8\u6001";N.title=W,N.setAttribute("aria-label",W),N.setAttribute("aria-pressed",String(_)),N.textContent=_?"\u25B7":"\u2161"}G(b),It("pause").addEventListener("click",()=>G(!b)),It("take-control").addEventListener("click",async()=>{try{await Ze.requestPointerLock()}catch{}}),document.addEventListener("pointerlockchange",()=>{Ot(),document.pointerLockElement===Ze?Ze.focus({preventScroll:!0}):c.clear()});function it(_,N,W){L-=_*W,B=vs(B-N*W,-1.22,1.18)}Ze.addEventListener("pointerdown",_=>{w==="scenic"||_.button!==0||(wt(),!document.pointerLockElement&&(h.id=_.pointerId,h.x=_.clientX,h.y=_.clientY,Ze.setPointerCapture(_.pointerId),Rn.classList.add("dragging")))}),Ze.addEventListener("pointermove",_=>{h.id===_.pointerId&&(it(_.clientX-h.x,_.clientY-h.y,In?.006:.0052),h.x=_.clientX,h.y=_.clientY)}),Ze.addEventListener("lostpointercapture",()=>{h.id=null,Rn.classList.remove("dragging")}),document.addEventListener("mousemove",_=>{document.pointerLockElement===Ze&&it(_.movementX,_.movementY,.0022)});let st=It("joystick");function q(_){let N=st.getBoundingClientRect(),W=N.width/2,Z=_.clientX-N.left-W,H=_.clientY-N.top-W,z=W*.67,et=Math.max(1,Math.hypot(Z,H)/z);Z/=et,H/=et,u.x=Z/z,u.y=-H/z,It("stick").style.transform="translate("+Z+"px,"+H+"px)"}st.addEventListener("pointerdown",_=>{u.id=_.pointerId,st.setPointerCapture(u.id),q(_)}),st.addEventListener("pointermove",_=>{_.pointerId===u.id&&q(_)}),st.addEventListener("lostpointercapture",()=>{u.id=null,u.x=0,u.y=0,It("stick").style.transform=""});let ot=new Set(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"]);window.addEventListener("keydown",_=>{let N=_.key.toLowerCase();if(N==="escape"){It("map-panel").hidden?It("day-panel").hidden?w==="tour"&&wt():It("time-button").click():x();return}if(!It("map-panel").hidden){if(N==="tab"){let W=[...It("map-panel").querySelectorAll("button")],Z=W[0],H=W.at(-1);_.shiftKey&&document.activeElement===Z&&(_.preventDefault(),H.focus()),!_.shiftKey&&document.activeElement===H&&(_.preventDefault(),Z.focus())}return}_.target.closest?.("input")||_.altKey||_.ctrlKey||_.metaKey||(N==="m"&&!_.repeat&&_t(),w!=="scenic"&&ot.has(N)&&(_.preventDefault(),wt(),c.add(N)))}),window.addEventListener("keyup",_=>c.delete(_.key.toLowerCase())),window.addEventListener("blur",()=>c.clear()),document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(J),c.clear()):(X=0,J=requestAnimationFrame(D))}),Ze.addEventListener("webglcontextlost",_=>{_.preventDefault(),cancelAnimationFrame(J),Rn.classList.remove("ready"),gt(),It("load-status").textContent="\u4E09\u7EF4\u573A\u666F\u6682\u65F6\u4E2D\u65AD\uFF0C\u6B63\u5728\u7B49\u5F85\u6D4F\u89C8\u5668\u6062\u590D\u3002"}),Ze.addEventListener("webglcontextrestored",()=>{O=0,X=0,E=!1,J=requestAnimationFrame(D)}),Ze.dataset.city="three",new URLSearchParams(location.search).has("test")&&(window.cityTest={camera:e,world:r,life:a,pathProblems:lt,stops:Ae,renderer:i,get mode(){return w},get player(){return d.toArray()},get time(){return M},get index(){return I},enter:Lt,walk:Vt,aimAt(_,N,W){[L,B]=k(_,N,W)},advanceTour(_){for(;w==="tour"&&_>0;)U(.05),_-=.05}}),J=requestAnimationFrame(D)}requestAnimationFrame(()=>setTimeout(()=>Rg().catch(i=>{console.error(i),It("load-status").textContent="\u5F53\u524D\u6D4F\u89C8\u5668\u7684 WebGL 2 \u4E09\u7EF4\u573A\u666F\u65E0\u6CD5\u542F\u52A8\u3002"}),30));})();
/*! For license information please see city3d.js.LEGAL.txt */
