(()=>{var qc=0,Ia=1,Yc=2;var Vs=1,Zc=2,Mn=3,ln=0,Pe=1,_e=2,Fn=0,ci=1,Pa=2,La=3,Da=4,Jc=5,Yn=100,$c=101,Kc=102,jc=103,Qc=104,tl=200,el=201,nl=202,il=203,Er=204,Ar=205,sl=206,rl=207,ol=208,al=209,cl=210,ll=211,hl=212,ul=213,dl=214,$r=0,Kr=1,jr=2,li=3,Qr=4,to=5,eo=6,no=7,Ua=0,fl=1,pl=2,Bn=0,ml=1,gl=2,_l=3,io=4,xl=5,vl=6,yl=7;var Na=300,gi=301,_i=302,so=303,ro=304,Hs=306,hi=1e3,qn=1001,Cr=1002,Ge=1003,Ml=1004;var Gs=1005;var hn=1006,oo=1007;var Kn=1008;var fn=1009,Fa=1010,Ba=1011,Ki=1012,ao=1013,jn=1014,pn=1015,ji=1016,co=1017,lo=1018,Qi=1020,Oa=35902,za=35899,ka=1021,Va=1022,sn=1023,Gi=1026,ts=1027,ho=1028,uo=1029,Ha=1030,fo=1031;var po=1033,Ws=33776,Xs=33777,qs=33778,Ys=33779,mo=35840,go=35841,_o=35842,xo=35843,vo=36196,yo=37492,Mo=37496,So=37808,bo=37809,To=37810,wo=37811,Eo=37812,Ao=37813,Co=37814,Ro=37815,Io=37816,Po=37817,Lo=37818,Do=37819,Uo=37820,No=37821,Fo=36492,Bo=36494,Oo=36495,zo=36283,ko=36284,Vo=36285,Ho=36286;var vs=2300,Rr=2301,wr=2302,Ma=2400,Sa=2401,ba=2402;var Sl=3200,bl=3201;var Ga=0,Tl=1,On="",ye="srgb",ui="srgb-linear",ys="linear",ie="srgb";var ai=7680;var Ta=519,wl=512,El=513,Al=514,Wa=515,Cl=516,Rl=517,Il=518,Pl=519,wa=35044,xi=35048;var Xa="300 es",cn=2e3,Ms=2001;var Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sc=1234567,_s=Math.PI/180,Wi=180/Math.PI;function es(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function qa(i,t){return(i%t+t)%t}function Rh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ih(i,t,e){return i!==t?(e-i)/(t-i):0}function xs(i,t,e){return(1-e)*i+e*t}function Ph(i,t,e,n){return xs(i,t,1-Math.exp(-e*n))}function Lh(i,t=1){return t-Math.abs(qa(i,t*2)-t)}function Dh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Uh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Nh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Fh(i,t){return i+Math.random()*(t-i)}function Bh(i){return i*(.5-Math.random())}function Oh(i){i!==void 0&&(Sc=i);let t=Sc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zh(i){return i*_s}function kh(i){return i*Wi}function Vh(i){return(i&i-1)===0&&i!==0}function Hh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wh(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),m=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Qt={DEG2RAD:_s,RAD2DEG:Wi,generateUUID:es,clamp:Zt,euclideanModulo:qa,mapLinear:Rh,inverseLerp:Ih,lerp:xs,damp:Ph,pingpong:Lh,smoothstep:Dh,smootherstep:Uh,randInt:Nh,randFloat:Fh,randFloatSpread:Bh,seededRandom:Oh,degToRad:zh,radToDeg:kh,isPowerOfTwo:Vh,ceilPowerOfTwo:Hh,floorPowerOfTwo:Gh,setQuaternionFromProperEuler:Wh,normalize:Oe,denormalize:Vi},Jt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],m=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=v;return}if(u!==v||l!==d||c!==m||h!==_){let p=1-a,f=l*d+c*m+h*_+u*v,S=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){let E=Math.sqrt(T),C=Math.atan2(E,f*S);p=Math.sin(p*C)/E,a=Math.sin(a*C)/E}let x=a*S;if(l=l*p+d*x,c=c*p+m*x,h=h*p+_*x,u=u*p+v*x,p===1-a){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*m-c*d,t[e+1]=l*_+h*d+c*u-a*m,t[e+2]=c*_+h*m+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"YZX":this._x=d*h*u+c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u-d*m*_;break;case"XZY":this._x=d*h*u-c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qo.copy(this).projectOnVector(t),this.sub(Qo)}reflect(t){return this.sub(Qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qo=new W,bc=new ze,Xt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],_=n[8],v=s[0],p=s[3],f=s[6],S=s[1],T=s[4],x=s[7],E=s[2],C=s[5],R=s[8];return r[0]=o*v+a*S+l*E,r[3]=o*p+a*T+l*C,r[6]=o*f+a*x+l*R,r[1]=c*v+h*S+u*E,r[4]=c*p+h*T+u*C,r[7]=c*f+h*x+u*R,r[2]=d*v+m*S+_*E,r[5]=d*p+m*T+_*C,r[8]=d*f+m*x+_*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,_=e*u+n*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ta.makeScale(t,e)),this}rotate(t){return this.premultiply(ta.makeRotation(-t)),this}translate(t,e){return this.premultiply(ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ta=new Xt;function Ya(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ll(){let i=Ss("canvas");return i.style.display="block",i}var Tc={};function Xi(i){i in Tc||(Tc[i]=!0,console.warn(i))}function Dl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var wc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xh(){let i={enabled:!0,workingColorSpace:ui,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ie&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ui]:{primaries:t,whitePoint:n,transfer:ys,toXYZ:wc,fromXYZ:Ec,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:wc,fromXYZ:Ec,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),i}var Kt=Xh();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ci,Ir=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ci===void 0&&(Ci=Ss("canvas")),Ci.width=t.width,Ci.height=t.height;let s=Ci.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ci}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ss("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qh=0,qi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ea(s[o].image)):r.push(ea(s[o]))}else r=ea(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ir.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yh=0,na=new W,ke=class i extends Ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=qn,s=qn,r=hn,o=Kn,a=sn,l=fn,c=i.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=es(),this.name="",this.source=new qi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(na).x}get height(){return this.source.getSize(na).y}get depth(){return this.source.getSize(na).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Na)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hi:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Cr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hi:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Cr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Na;ke.DEFAULT_ANISOTROPY=1;var ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],_=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,x=(m+1)/2,E=(f+1)/2,C=(h+d)/4,R=(u+v)/4,F=(_+p)/4;return T>x&&T>E?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=C/n,r=R/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=C/s,r=F/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=F/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pr=class extends Ln{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new ke(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new qi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends Pr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},bs=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lr=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vn=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),rr.subVectors(this.max,us),Ri.subVectors(t.a,us),Ii.subVectors(t.b,us),Pi.subVectors(t.c,us),zn.subVectors(Ii,Ri),kn.subVectors(Pi,Ii),ii.subVectors(Ri,Pi);let e=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-ii.z,ii.y,zn.z,0,-zn.x,kn.z,0,-kn.x,ii.z,0,-ii.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-ii.y,ii.x,0];return!ia(e,Ri,Ii,Pi,rr)||(e=[1,0,0,0,1,0,0,0,1],!ia(e,Ri,Ii,Pi,rr))?!1:(or.crossVectors(zn,kn),e=[or.x,or.y,or.z],ia(e,Ri,Ii,Pi,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},En=[new W,new W,new W,new W,new W,new W,new W,new W],rn=new W,sr=new vn,Ri=new W,Ii=new W,Pi=new W,zn=new W,kn=new W,ii=new W,us=new W,rr=new W,or=new W,si=new W;function ia(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){si.fromArray(i,r);let a=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=t.dot(si),c=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Zh=new vn,ds=new W,sa=new W,Dn=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);let e=ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(sa)),this.expandByPoint(ds.copy(t.center).sub(sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},An=new W,ra=new W,ar=new W,Vn=new W,oa=new W,cr=new W,aa=new W,Ts=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ra.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(ra);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ar),a=Vn.dot(this.direction),l=-Vn.dot(ar),c=Vn.lengthSq(),h=Math.abs(1-o*o),u,d,m,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let v=1/h;u*=v,d*=v,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ra).addScaledVector(ar,d),m}intersectSphere(t,e){An.subVectors(t.center,this.origin);let n=An.dot(this.direction),s=An.dot(An)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,r){oa.subVectors(e,t),cr.subVectors(n,t),aa.crossVectors(oa,cr);let o=this.direction.dot(aa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);let l=a*this.direction.dot(cr.crossVectors(Vn,cr));if(l<0)return null;let c=a*this.direction.dot(oa.cross(Vn));if(c<0||l+c>o)return null;let h=-a*Vn.dot(aa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,m,_,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,m,_,v,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,m,_,v,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=_,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),o=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,m=o*u,_=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,m=l*u,_=c*h,v=c*u;e[0]=d+v*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,m=l*u,_=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,m=o*u,_=a*h,v=a*u;e[0]=l*h,e[4]=_*c-m,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,m=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=_*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+_,e[10]=d-v*u}else if(t.order==="XZY"){let d=o*l,m=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jh,t,$h)}lookAt(t,e,n){let s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Hn.crossVectors(n,Ye),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Hn.crossVectors(n,Ye)),Hn.normalize(),lr.crossVectors(Ye,Hn),s[0]=Hn.x,s[4]=lr.x,s[8]=Ye.x,s[1]=Hn.y,s[5]=lr.y,s[9]=Ye.y,s[2]=Hn.z,s[6]=lr.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],_=n[2],v=n[6],p=n[10],f=n[14],S=n[3],T=n[7],x=n[11],E=n[15],C=s[0],R=s[4],F=s[8],y=s[12],M=s[1],O=s[5],H=s[9],et=s[13],j=s[2],Q=s[6],K=s[10],yt=s[14],rt=s[3],Mt=s[7],tt=s[11],pt=s[15];return r[0]=o*C+a*M+l*j+c*rt,r[4]=o*R+a*O+l*Q+c*Mt,r[8]=o*F+a*H+l*K+c*tt,r[12]=o*y+a*et+l*yt+c*pt,r[1]=h*C+u*M+d*j+m*rt,r[5]=h*R+u*O+d*Q+m*Mt,r[9]=h*F+u*H+d*K+m*tt,r[13]=h*y+u*et+d*yt+m*pt,r[2]=_*C+v*M+p*j+f*rt,r[6]=_*R+v*O+p*Q+f*Mt,r[10]=_*F+v*H+p*K+f*tt,r[14]=_*y+v*et+p*yt+f*pt,r[3]=S*C+T*M+x*j+E*rt,r[7]=S*R+T*O+x*Q+E*Mt,r[11]=S*F+T*H+x*K+E*tt,r[15]=S*y+T*et+x*yt+E*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],_=t[3],v=t[7],p=t[11],f=t[15];return _*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*m-n*l*m)+v*(+e*l*m-e*c*d+r*o*d-s*o*m+s*c*h-r*l*h)+p*(+e*c*u-e*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],_=t[12],v=t[13],p=t[14],f=t[15],S=u*p*c-v*d*c+v*l*m-a*p*m-u*l*f+a*d*f,T=_*d*c-h*p*c-_*l*m+o*p*m+h*l*f-o*d*f,x=h*v*c-_*u*c+_*a*m-o*v*m-h*a*f+o*u*f,E=_*u*l-h*v*l-_*a*d+o*v*d+h*a*p-o*u*p,C=e*S+n*T+s*x+r*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=S*R,t[1]=(v*d*r-u*p*r-v*s*m+n*p*m+u*s*f-n*d*f)*R,t[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*f+n*l*f)*R,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*m-n*l*m)*R,t[4]=T*R,t[5]=(h*p*r-_*d*r+_*s*m-e*p*m-h*s*f+e*d*f)*R,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*f-e*l*f)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*m+e*l*m)*R,t[8]=x*R,t[9]=(_*u*r-h*v*r-_*n*m+e*v*m+h*n*f-e*u*f)*R,t[10]=(o*v*r-_*a*r+_*n*c-e*v*c-o*n*f+e*a*f)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*m-e*a*m)*R,t[12]=E*R,t[13]=(h*v*s-_*u*s+_*n*d-e*v*d-h*n*p+e*u*p)*R,t[14]=(_*a*s-o*v*s-_*n*l+e*v*l+o*n*p-e*a*p)*R,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,_=r*u,v=o*h,p=o*u,f=a*u,S=l*c,T=l*h,x=l*u,E=n.x,C=n.y,R=n.z;return s[0]=(1-(v+f))*E,s[1]=(m+x)*E,s[2]=(_-T)*E,s[3]=0,s[4]=(m-x)*C,s[5]=(1-(d+f))*C,s[6]=(p+S)*C,s[7]=0,s[8]=(_+T)*R,s[9]=(p-S)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Li.set(s[0],s[1],s[2]).length(),o=Li.set(s[4],s[5],s[6]).length(),a=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);let c=1/r,h=1/o,u=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=cn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),m=(n+s)/(n-s),_,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===cn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ms)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=cn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),m=-(n+s)/(n-s),_,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===cn)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ms)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Li=new W,on=new se,Jh=new W(0,0,0),$h=new W(1,1,1),Hn=new W,lr=new W,Ye=new W,Ac=new se,Cc=new ze,un=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kh=0,Rc=new W,Di=new ze,Cn=new se,hr=new W,fs=new W,jh=new W,Qh=new ze,Ic=new W(1,0,0),Pc=new W(0,1,0),Lc=new W(0,0,1),Dc={type:"added"},tu={type:"removed"},Ui={type:"childadded",child:null},ca={type:"childremoved",child:null},xe=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new un,n=new ze,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Xt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(Ic,t)}rotateY(t){return this.rotateOnAxis(Pc,t)}rotateZ(t){return this.rotateOnAxis(Lc,t)}translateOnAxis(t,e){return Rc.copy(t).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ic,t)}translateY(t){return this.translateOnAxis(Pc,t)}translateZ(t){return this.translateOnAxis(Lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hr.copy(t):hr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(fs,hr,this.up):Cn.lookAt(hr,fs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Cn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dc),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tu),ca.child=t,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dc),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,t,jh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,Qh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};xe.DEFAULT_UP=new W(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new W,Rn=new W,la=new W,In=new W,Ni=new W,Fi=new W,Uc=new W,ha=new W,ua=new W,da=new W,fa=new ce,pa=new ce,ma=new ce,Xn=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),Rn.subVectors(n,e),la.subVectors(t,e);let o=an.dot(an),a=an.dot(Rn),l=an.dot(la),c=Rn.dot(Rn),h=Rn.dot(la),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(t,e),pa.fromBufferAttribute(t,n),ma.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fa,r.x),o.addScaledVector(pa,r.y),o.addScaledVector(ma,r.z),o}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),Rn.subVectors(t,e),an.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),an.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ni.subVectors(s,n),Fi.subVectors(r,n),ha.subVectors(t,n);let l=Ni.dot(ha),c=Fi.dot(ha);if(l<=0&&c<=0)return e.copy(n);ua.subVectors(t,s);let h=Ni.dot(ua),u=Fi.dot(ua);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ni,o);da.subVectors(t,r);let m=Ni.dot(da),_=Fi.dot(da);if(_>=0&&m<=_)return e.copy(r);let v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Fi,a);let p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return Uc.subVectors(r,s),a=(u-h)/(u-h+(m-_)),e.copy(s).addScaledVector(Uc,a);let f=1/(p+v+d);return o=v*f,a=d*f,e.copy(n).addScaledVector(Ni,o).addScaledVector(Fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=qa(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ga(o,r,t+1/3),this.g=ga(o,r,t),this.b=ga(o,r,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let n=Ul[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Kt.workingToColorSpace(Ue.copy(this),t),Math.round(Zt(Ue.r*255,0,255))*65536+Math.round(Zt(Ue.g*255,0,255))*256+Math.round(Zt(Ue.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Ue.copy(this),e);let n=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=ye){Kt.workingToColorSpace(Ue.copy(this),t);let e=Ue.r,n=Ue.g,s=Ue.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(ur);let n=xs(Gn.h,ur.h,e),s=xs(Gn.s,ur.s,e),r=xs(Gn.l,ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new Nt;Nt.NAMES=Ul;var eu=0,Un=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=es(),this.name="",this.type="Material",this.blending=ci,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Er,this.blendDst=Ar,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Er&&(n.blendSrc=this.blendSrc),this.blendDst!==Ar&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ta&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},di=class extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ve=new W,dr=new Jt,nu=0,ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wa,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wa&&(t.usage=this.usage),t}};var Es=class extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var As=class extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},iu=0,tn=new se,_a=new xe,Bi=new W,Ze=new vn,ps=new vn,Ee=new W,pe=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ya(t)?As:Es)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Ze.min,ps.min),Ze.expandByPoint(Ee),Ee.addVectors(Ze.max,ps.max),Ze.expandByPoint(Ee)):(Ze.expandByPoint(ps.min),Ze.expandByPoint(ps.max))}Ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ee.fromBufferAttribute(a,c),l&&(Bi.fromBufferAttribute(t,c),Ee.add(Bi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new W,l[F]=new W;let c=new W,h=new W,u=new W,d=new Jt,m=new Jt,_=new Jt,v=new W,p=new W;function f(F,y,M){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,F),m.fromBufferAttribute(r,y),_.fromBufferAttribute(r,M),h.sub(c),u.sub(c),m.sub(d),_.sub(d);let O=1/(m.x*_.y-_.x*m.y);isFinite(O)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(O),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(O),a[F].add(v),a[y].add(v),a[M].add(v),l[F].add(p),l[y].add(p),l[M].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let F=0,y=S.length;F<y;++F){let M=S[F],O=M.start,H=M.count;for(let et=O,j=O+H;et<j;et+=3)f(t.getX(et+0),t.getX(et+1),t.getX(et+2))}let T=new W,x=new W,E=new W,C=new W;function R(F){E.fromBufferAttribute(s,F),C.copy(E);let y=a[F];T.copy(y),T.sub(E.multiplyScalar(E.dot(y))).normalize(),x.crossVectors(C,y);let O=x.dot(l[F])<0?-1:1;o.setXYZW(F,T.x,T.y,T.z,O)}for(let F=0,y=S.length;F<y;++F){let M=S[F],O=M.start,H=M.count;for(let et=O,j=O+H;et<j;et+=3)R(t.getX(et+0)),R(t.getX(et+1)),R(t.getX(et+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new W,r=new W,o=new W,a=new W,l=new W,c=new W,h=new W,u=new W;if(t)for(let d=0,m=t.count;d<m;d+=3){let _=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),m=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let f=0;f<h;f++)d[_++]=c[m++]}return new ge(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nc=new se,ri=new Ts,fr=new Dn,Fc=new W,pr=new W,mr=new W,gr=new W,xa=new W,_r=new W,Bc=new W,xr=new W,le=class extends xe{constructor(t=new pe,e=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){_r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(xa.fromBufferAttribute(u,t),o?_r.addScaledVector(xa,h):_r.addScaledVector(xa.sub(e),h))}e.add(_r)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),ri.copy(t.ray).recast(t.near),!(fr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(fr,Fc)===null||ri.origin.distanceToSquared(Fc)>(t.far-t.near)**2))&&(Nc.copy(r).invert(),ri.copy(t.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){let p=d[_],f=o[p.materialIndex],S=Math.max(p.start,m.start),T=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=S,E=T;x<E;x+=3){let C=a.getX(x),R=a.getX(x+1),F=a.getX(x+2);s=vr(this,f,t,n,c,h,u,C,R,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,f=v;p<f;p+=3){let S=a.getX(p),T=a.getX(p+1),x=a.getX(p+2);s=vr(this,o,t,n,c,h,u,S,T,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){let p=d[_],f=o[p.materialIndex],S=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=S,E=T;x<E;x+=3){let C=x,R=x+1,F=x+2;s=vr(this,f,t,n,c,h,u,C,R,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,f=v;p<f;p+=3){let S=p,T=p+1,x=p+2;s=vr(this,o,t,n,c,h,u,S,T,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function su(i,t,e,n,s,r,o,a){let l;if(t.side===Pe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ln,a),l===null)return null;xr.copy(a),xr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(xr);return c<e.near||c>e.far?null:{distance:c,point:xr.clone(),object:i}}function vr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,pr),i.getVertexPosition(l,mr),i.getVertexPosition(c,gr);let h=su(i,t,e,n,pr,mr,gr,Bc);if(h){let u=new W;Xn.getBarycoord(Bc,pr,mr,gr,u),s&&(h.uv=Xn.getInterpolatedAttribute(s,a,l,c,u,new Jt)),r&&(h.uv1=Xn.getInterpolatedAttribute(r,a,l,c,u,new Jt)),o&&(h.normal=Xn.getInterpolatedAttribute(o,a,l,c,u,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new W,materialIndex:0};Xn.getNormal(pr,mr,gr,d.normal),h.face=d,h.barycoord=u}return h}var yn=class i extends pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,m=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function _(v,p,f,S,T,x,E,C,R,F,y){let M=x/R,O=E/F,H=x/2,et=E/2,j=C/2,Q=R+1,K=F+1,yt=0,rt=0,Mt=new W;for(let tt=0;tt<K;tt++){let pt=tt*O-et;for(let Dt=0;Dt<Q;Dt++){let wt=Dt*M-H;Mt[v]=wt*S,Mt[p]=pt*T,Mt[f]=j,c.push(Mt.x,Mt.y,Mt.z),Mt[v]=0,Mt[p]=0,Mt[f]=C>0?1:-1,h.push(Mt.x,Mt.y,Mt.z),u.push(Dt/R),u.push(1-tt/F),yt+=1}}for(let tt=0;tt<F;tt++)for(let pt=0;pt<R;pt++){let Dt=d+pt+Q*tt,wt=d+pt+Q*(tt+1),Ft=d+(pt+1)+Q*(tt+1),zt=d+(pt+1)+Q*tt;l.push(Dt,wt,zt),l.push(wt,Ft,zt),rt+=6}a.addGroup(m,rt,y),m+=rt,d+=yt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function vi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){let t={};for(let e=0;e<i.length;e++){let n=vi(i[e]);for(let s in n)t[s]=n[s]}return t}function ru(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Za(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var Zs={clone:vi,merge:Fe},ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ce=class extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ou,this.fragmentShader=au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=ru(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Cs=class extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wn=new W,Oc=new Jt,zc=new Jt,Ae=class extends Cs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,zc),e.subVectors(zc,Oc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Oi=-90,zi=1,Dr=class extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ae(Oi,zi,t,e);s.layers=this.layers,this.add(s);let r=new Ae(Oi,zi,t,e);r.layers=this.layers,this.add(r);let o=new Ae(Oi,zi,t,e);o.layers=this.layers,this.add(o);let a=new Ae(Oi,zi,t,e);a.layers=this.layers,this.add(a);let l=new Ae(Oi,zi,t,e);l.layers=this.layers,this.add(l);let c=new Ae(Oi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Rs=class extends ke{constructor(t=[],e=gi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ur=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yn(5,5,5),r=new Ce({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Fn});r.uniforms.tEquirect.value=e;let o=new le(s,r),a=e.minFilter;return e.minFilter===Kn&&(e.minFilter=hn),new Dr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ne=class extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},cu={type:"move"},Yi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Is=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ps=class extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Nr=class extends ke{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,h=Ge,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zi=class extends ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ki=new se,kc=new se,yr=[],Vc=new vn,lu=new se,ms=new le,gs=new Dn,fi=class extends le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),Vc.copy(t.boundingBox).applyMatrix4(ki),this.boundingBox.union(Vc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),gs.copy(t.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),t.ray.intersectsSphere(gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ki),kc.multiplyMatrices(n,ki),ms.matrixWorld=kc,ms.raycast(t,yr);for(let o=0,a=yr.length;o<a;o++){let l=yr[o];l.instanceId=r,l.object=this,e.push(l)}yr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nr(new Float32Array(s*this.count),s,this.count,ho,pn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},va=new W,hu=new W,uu=new Xt,en=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=va.subVectors(n,e).cross(hu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||uu.getNormalMatrix(t),s=this.coplanarPoint(va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},oi=new Dn,du=new Jt(.5,.5),Mr=new W,Ji=class{constructor(t=new en,e=new en,n=new en,s=new en,r=new en,o=new en){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],m=r[7],_=r[8],v=r[9],p=r[10],f=r[11],S=r[12],T=r[13],x=r[14],E=r[15];if(s[0].setComponents(c-o,m-h,f-_,E-S).normalize(),s[1].setComponents(c+o,m+h,f+_,E+S).normalize(),s[2].setComponents(c+a,m+u,f+v,E+T).normalize(),s[3].setComponents(c-a,m-u,f-v,E-T).normalize(),n)s[4].setComponents(l,d,p,x).normalize(),s[5].setComponents(c-l,m-d,f-p,E-x).normalize();else if(s[4].setComponents(c-l,m-d,f-p,E-x).normalize(),e===cn)s[5].setComponents(c+l,m+d,f+p,E+x).normalize();else if(e===Ms)s[5].setComponents(l,d,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){oi.center.set(0,0,0);let e=du.distanceTo(t.center);return oi.radius=.7071067811865476+e,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Mr.x=s.normal.x>0?t.max.x:t.min.x,Mr.y=s.normal.y>0?t.max.y:t.min.y,Mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fr=class extends Un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hc=new se,Ea=new Ts,Sr=new Dn,br=new W,Ls=class extends xe{constructor(t=new pe,e=new Fr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Sr.radius+=r,t.ray.intersectsSphere(Sr)===!1)return;Hc.copy(s).invert(),Ea.copy(t.ray).applyMatrix4(Hc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=d,v=m;_<v;_++){let p=c.getX(_);br.fromBufferAttribute(u,p),Gc(br,p,l,s,t,e,this)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,v=m;_<v;_++)br.fromBufferAttribute(u,_),Gc(br,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Gc(i,t,e,n,s,r,o){let a=Ea.distanceSqToPoint(i);if(a<e){let l=new W;Ea.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Nn=class extends ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ds=class extends ke{constructor(t,e,n=jn,s,r,o,a=Ge,l=Ge,c,h=Gi,u=1){if(h!==Gi&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Us=class extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Je=class i extends pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],m=[],_=0,v=[],p=n/2,f=0;S(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(m,2));function S(){let x=new W,E=new W,C=0,R=(e-t)/n;for(let F=0;F<=r;F++){let y=[],M=F/r,O=M*(e-t)+t;for(let H=0;H<=s;H++){let et=H/s,j=et*l+a,Q=Math.sin(j),K=Math.cos(j);E.x=O*Q,E.y=-M*n+p,E.z=O*K,u.push(E.x,E.y,E.z),x.set(Q,R,K).normalize(),d.push(x.x,x.y,x.z),m.push(et,1-M),y.push(_++)}v.push(y)}for(let F=0;F<s;F++)for(let y=0;y<r;y++){let M=v[y][F],O=v[y+1][F],H=v[y+1][F+1],et=v[y][F+1];(t>0||y!==0)&&(h.push(M,O,et),C+=3),(e>0||y!==r-1)&&(h.push(O,H,et),C+=3)}c.addGroup(f,C,0),f+=C}function T(x){let E=_,C=new Jt,R=new W,F=0,y=x===!0?t:e,M=x===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,p*M,0),d.push(0,M,0),m.push(.5,.5),_++;let O=_;for(let H=0;H<=s;H++){let j=H/s*l+a,Q=Math.cos(j),K=Math.sin(j);R.x=y*K,R.y=p*M,R.z=y*Q,u.push(R.x,R.y,R.z),d.push(0,M,0),C.x=Q*.5+.5,C.y=K*.5*M+.5,m.push(C.x,C.y),_++}for(let H=0;H<s;H++){let et=E+H,j=O+H;x===!0?h.push(j,j+1,et):h.push(j+1,j,et),F+=3}c.addGroup(f,F,x===!0?1:2),f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Br=class i extends pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let T=new W,x=new W,E=new W;for(let C=0;C<e.length;C+=3)m(e[C+0],T),m(e[C+1],x),m(e[C+2],E),l(T,x,E,S)}function l(S,T,x,E){let C=E+1,R=[];for(let F=0;F<=C;F++){R[F]=[];let y=S.clone().lerp(x,F/C),M=T.clone().lerp(x,F/C),O=C-F;for(let H=0;H<=O;H++)H===0&&F===C?R[F][H]=y:R[F][H]=y.clone().lerp(M,H/O)}for(let F=0;F<C;F++)for(let y=0;y<2*(C-F)-1;y++){let M=Math.floor(y/2);y%2===0?(d(R[F][M+1]),d(R[F+1][M]),d(R[F][M])):(d(R[F][M+1]),d(R[F+1][M+1]),d(R[F+1][M]))}}function c(S){let T=new W;for(let x=0;x<r.length;x+=3)T.x=r[x+0],T.y=r[x+1],T.z=r[x+2],T.normalize().multiplyScalar(S),r[x+0]=T.x,r[x+1]=T.y,r[x+2]=T.z}function h(){let S=new W;for(let T=0;T<r.length;T+=3){S.x=r[T+0],S.y=r[T+1],S.z=r[T+2];let x=p(S)/2/Math.PI+.5,E=f(S)/Math.PI+.5;o.push(x,1-E)}_(),u()}function u(){for(let S=0;S<o.length;S+=6){let T=o[S+0],x=o[S+2],E=o[S+4],C=Math.max(T,x,E),R=Math.min(T,x,E);C>.9&&R<.1&&(T<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),E<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,T){let x=S*3;T.x=t[x+0],T.y=t[x+1],T.z=t[x+2]}function _(){let S=new W,T=new W,x=new W,E=new W,C=new Jt,R=new Jt,F=new Jt;for(let y=0,M=0;y<r.length;y+=9,M+=6){S.set(r[y+0],r[y+1],r[y+2]),T.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),C.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),F.set(o[M+4],o[M+5]),E.copy(S).add(T).add(x).divideScalar(3);let O=p(E);v(C,M+0,S,O),v(R,M+2,T,O),v(F,M+4,x,O)}}function v(S,T,x,E){E<0&&S.x===1&&(o[T]=S.x-1),x.x===0&&x.z===0&&(o[T]=E/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ns=class i extends Br{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var dn=class i extends pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,m=[],_=[],v=[],p=[];for(let f=0;f<h;f++){let S=f*d-o;for(let T=0;T<c;T++){let x=T*u-r;_.push(x,-S,0),v.push(0,0,1),p.push(T/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){let T=S+c*f,x=S+c*(f+1),E=S+1+c*(f+1),C=S+1+c*f;m.push(T,x,C),m.push(x,E,C)}this.setIndex(m),this.setAttribute("position",new jt(_,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Zn=class i extends pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new W,d=new W,m=[],_=[],v=[],p=[];for(let f=0;f<=n;f++){let S=[],T=f/n,x=0;f===0&&o===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let E=0;E<=e;E++){let C=E/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+T*a),u.y=t*Math.cos(o+T*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+T*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(C+x,1-T),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){let T=h[f][S+1],x=h[f][S],E=h[f+1][S],C=h[f+1][S+1];(f!==0||o>0)&&m.push(T,x,C),(f!==n-1||l<Math.PI)&&m.push(x,E,C)}this.setIndex(m),this.setAttribute("position",new jt(_,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $i=class i extends pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new W,u=new W,d=new W;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){let v=_/s*r,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(v),u.y=(t+e*Math.cos(p))*Math.sin(v),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){let v=(s+1)*m+_-1,p=(s+1)*(m-1)+_-1,f=(s+1)*(m-1)+_,S=(s+1)*m+_;o.push(v,p,S),o.push(p,f,S)}this.setIndex(o),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var pi=class extends Un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Or=class extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zr=class extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Tr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function fu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var mi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kr=class extends mi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ma,endingEnd:Ma}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sa:r=t,a=2*e-n;break;case ba:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sa:o=t,l=2*n-e;break;case ba:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),v=_*_,p=v*_,f=-d*p+2*d*v-d*_,S=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*_+1,T=(-1-m)*p+(1.5+m)*v+.5*_,x=m*p-m*v;for(let E=0;E!==a;++E)r[E]=f*o[h+E]+S*o[c+E]+T*o[l+E]+x*o[u+E];return r}},Vr=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Hr=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$e=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Tr(e,this.TimeBufferType),this.values=Tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Tr(t.times,Array),values:Tr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Hr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vs:e=this.InterpolantFactoryMethodDiscrete;break;case Rr:e=this.InterpolantFactoryMethodLinear;break;case wr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return wr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&fu(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,m=u+n;for(let _=0;_!==n;++_){let v=e[u+_];if(v!==e[d+_]||v!==e[m+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=Rr;var Jn=class extends $e{constructor(t,e,n){super(t,e,n)}};Jn.prototype.ValueTypeName="bool";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=vs;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};Gr.prototype.ValueTypeName="color";var Wr=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};Wr.prototype.ValueTypeName="number";var Xr=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ze.slerpFlat(r,0,o,c-a,o,c,l);return r}},Fs=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Xr(this.times,this.values,this.getValueSize(),t)}};Fs.prototype.ValueTypeName="quaternion";Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends $e{constructor(t,e,n){super(t,e,n)}};$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=vs;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};qr.prototype.ValueTypeName="vector";var Yr=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Nl=new Yr,Zr=class{constructor(t){this.manager=t!==void 0?t:Nl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Zr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bs=class extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Os=class extends Bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ya=new se,Wc=new W,Xc=new W,Aa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ji,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wc),Xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xc),e.updateMatrixWorld(),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var zs=class extends Cs{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ca=class extends Aa{constructor(){super(new zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Ca}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Jr=class extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ja="\\[\\]\\.:\\/",pu=new RegExp("["+Ja+"]","g"),$a="[^"+Ja+"]",mu="[^"+Ja.replace("\\.","")+"]",gu=/((?:WC+[\/:])*)/.source.replace("WC",$a),_u=/(WCOD+)?/.source.replace("WCOD",mu),xu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$a),vu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$a),yu=new RegExp("^"+gu+_u+xu+vu+"$"),Mu=["material","materials","bones","map"],Ra=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pu,"")}static parseTrackName(t){let e=yu.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Ra;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xg=new Float32Array(1);function Ka(i,t,e,n){let s=Su(n);switch(e){case ka:return i*t;case ho:return i*t/s.components*s.byteLength;case uo:return i*t/s.components*s.byteLength;case Ha:return i*t*2/s.components*s.byteLength;case fo:return i*t*2/s.components*s.byteLength;case Va:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case po:return i*t*4/s.components*s.byteLength;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:case xo:return Math.max(i,16)*Math.max(t,8)/4;case mo:case _o:return Math.max(i,8)*Math.max(t,8)/2;case vo:case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fo:case Bo:case Oo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zo:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vo:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Su(i){switch(i){case fn:case Fa:return{byteLength:1,components:1};case Ki:case Ba:case ji:return{byteLength:2,components:1};case co:case lo:return{byteLength:2,components:4};case jn:case ao:case pn:return{byteLength:4,components:1};case Oa:case za:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function rh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ru(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<u.length;m++){let _=u[d],v=u[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,u[d]=v)}u.length=d+1;for(let m=0,_=u.length;m<_;m++){let v=u[m];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pu=`#ifdef USE_ALPHAHASH
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
#endif`,Lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fu=`#ifdef USE_AOMAP
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
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
#endif`,zu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gu=`#ifdef USE_IRIDESCENCE
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
#endif`,Wu=`#ifdef USE_BUMPMAP
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qu=`#define PI 3.141592653589793
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
} // validated`,td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ed=`vec3 transformedNormal = objectNormal;
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
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,od="gl_FragColor = linearToOutputTexel( gl_FragColor );",ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cd=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_d=`#ifdef USE_GRADIENTMAP
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
}`,xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Md=`uniform bool receiveShadow;
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
#endif`,Sd=`#ifdef USE_ENVMAP
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
#endif`,bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ad=`PhysicalMaterial material;
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
#endif`,Cd=`struct PhysicalMaterial {
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
}`,Rd=`
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zd=`#if defined( USE_POINTS_UV )
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
#endif`,kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
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
#endif`,qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jd=`#ifdef USE_NORMALMAP
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
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mf=`float getShadowMask() {
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
}`,gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_f=`#ifdef USE_SKINNING
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
#endif`,xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tf=`#ifdef USE_TRANSMISSION
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
#endif`,wf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,If=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pf=`uniform sampler2D t2D;
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`#include <common>
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
}`,Bf=`#if DEPTH_PACKING == 3200
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
}`,Of=`#define DISTANCE
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
}`,zf=`#define DISTANCE
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
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`uniform float scale;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Wf=`#include <common>
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
}`,Xf=`uniform vec3 diffuse;
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
}`,qf=`#define LAMBERT
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
}`,Yf=`#define LAMBERT
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
}`,Zf=`#define MATCAP
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
}`,Jf=`#define MATCAP
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
}`,$f=`#define NORMAL
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
}`,Kf=`#define NORMAL
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
}`,jf=`#define PHONG
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
}`,Qf=`#define PHONG
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
}`,tp=`#define STANDARD
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
}`,ep=`#define STANDARD
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
}`,np=`#define TOON
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
}`,ip=`#define TOON
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
}`,sp=`uniform float size;
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
}`,rp=`uniform vec3 diffuse;
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
}`,op=`#include <common>
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
}`,ap=`uniform vec3 color;
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
}`,cp=`uniform float rotation;
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
}`,lp=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Iu,alphahash_pars_fragment:Pu,alphamap_fragment:Lu,alphamap_pars_fragment:Du,alphatest_fragment:Uu,alphatest_pars_fragment:Nu,aomap_fragment:Fu,aomap_pars_fragment:Bu,batching_pars_vertex:Ou,batching_vertex:zu,begin_vertex:ku,beginnormal_vertex:Vu,bsdfs:Hu,iridescence_fragment:Gu,bumpmap_pars_fragment:Wu,clipping_planes_fragment:Xu,clipping_planes_pars_fragment:qu,clipping_planes_pars_vertex:Yu,clipping_planes_vertex:Zu,color_fragment:Ju,color_pars_fragment:$u,color_pars_vertex:Ku,color_vertex:ju,common:Qu,cube_uv_reflection_fragment:td,defaultnormal_vertex:ed,displacementmap_pars_vertex:nd,displacementmap_vertex:id,emissivemap_fragment:sd,emissivemap_pars_fragment:rd,colorspace_fragment:od,colorspace_pars_fragment:ad,envmap_fragment:cd,envmap_common_pars_fragment:ld,envmap_pars_fragment:hd,envmap_pars_vertex:ud,envmap_physical_pars_fragment:Sd,envmap_vertex:dd,fog_vertex:fd,fog_pars_vertex:pd,fog_fragment:md,fog_pars_fragment:gd,gradientmap_pars_fragment:_d,lightmap_pars_fragment:xd,lights_lambert_fragment:vd,lights_lambert_pars_fragment:yd,lights_pars_begin:Md,lights_toon_fragment:bd,lights_toon_pars_fragment:Td,lights_phong_fragment:wd,lights_phong_pars_fragment:Ed,lights_physical_fragment:Ad,lights_physical_pars_fragment:Cd,lights_fragment_begin:Rd,lights_fragment_maps:Id,lights_fragment_end:Pd,logdepthbuf_fragment:Ld,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Ud,logdepthbuf_vertex:Nd,map_fragment:Fd,map_pars_fragment:Bd,map_particle_fragment:Od,map_particle_pars_fragment:zd,metalnessmap_fragment:kd,metalnessmap_pars_fragment:Vd,morphinstance_vertex:Hd,morphcolor_vertex:Gd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:qd,normal_fragment_begin:Yd,normal_fragment_maps:Zd,normal_pars_fragment:Jd,normal_pars_vertex:$d,normal_vertex:Kd,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:tf,clearcoat_pars_fragment:ef,iridescence_pars_fragment:nf,opaque_fragment:sf,packing:rf,premultiplied_alpha_fragment:of,project_vertex:af,dithering_fragment:cf,dithering_pars_fragment:lf,roughnessmap_fragment:hf,roughnessmap_pars_fragment:uf,shadowmap_pars_fragment:df,shadowmap_pars_vertex:ff,shadowmap_vertex:pf,shadowmask_pars_fragment:mf,skinbase_vertex:gf,skinning_pars_vertex:_f,skinning_vertex:xf,skinnormal_vertex:vf,specularmap_fragment:yf,specularmap_pars_fragment:Mf,tonemapping_fragment:Sf,tonemapping_pars_fragment:bf,transmission_fragment:Tf,transmission_pars_fragment:wf,uv_pars_fragment:Ef,uv_pars_vertex:Af,uv_vertex:Cf,worldpos_vertex:Rf,background_vert:If,background_frag:Pf,backgroundCube_vert:Lf,backgroundCube_frag:Df,cube_vert:Uf,cube_frag:Nf,depth_vert:Ff,depth_frag:Bf,distanceRGBA_vert:Of,distanceRGBA_frag:zf,equirect_vert:kf,equirect_frag:Vf,linedashed_vert:Hf,linedashed_frag:Gf,meshbasic_vert:Wf,meshbasic_frag:Xf,meshlambert_vert:qf,meshlambert_frag:Yf,meshmatcap_vert:Zf,meshmatcap_frag:Jf,meshnormal_vert:$f,meshnormal_frag:Kf,meshphong_vert:jf,meshphong_frag:Qf,meshphysical_vert:tp,meshphysical_frag:ep,meshtoon_vert:np,meshtoon_frag:ip,points_vert:sp,points_frag:rp,shadow_vert:op,shadow_frag:ap,sprite_vert:cp,sprite_frag:lp},At={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Sn={basic:{uniforms:Fe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Fe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Nt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Fe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Fe([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Fe([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Nt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Fe([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Fe([At.points,At.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Fe([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Fe([At.common,At.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Fe([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Fe([At.sprite,At.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Fe([At.common,At.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Fe([At.lights,At.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Sn.physical={uniforms:Fe([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Go={r:0,b:0,g:0},yi=new un,hp=new se;function up(i,t,e,n,s,r,o){let a=new Nt(0),l=r===!0?0:1,c,h,u=null,d=0,m=null;function _(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?e:t).get(x)),x}function v(T){let x=!1,E=_(T);E===null?f(a,l):E&&E.isColor&&(f(E,1),x=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,x){let E=_(x);E&&(E.isCubeTexture||E.mapping===Hs)?(h===void 0&&(h=new le(new yn(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:vi(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(x.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hp.makeRotationFromEuler(yi)),h.material.toneMapped=Kt.getTransfer(E.colorSpace)!==ie,(u!==E||d!==E.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new le(new dn(2,2),new Ce({name:"BackgroundMaterial",uniforms:vi(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(E.colorSpace)!==ie,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,x){T.getRGB(Go,Za(i)),n.buffers.color.setClear(Go.r,Go.g,Go.b,x,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,x=1){a.set(T),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(a,l)},render:v,addToRenderList:p,dispose:S}}function dp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,O,H,et,j){let Q=!1,K=u(et,H,O);r!==K&&(r=K,c(r.object)),Q=m(M,et,H,j),Q&&_(M,et,H,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(M,O,H,et),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,O,H){let et=H.wireframe===!0,j=n[M.id];j===void 0&&(j={},n[M.id]=j);let Q=j[O.id];Q===void 0&&(Q={},j[O.id]=Q);let K=Q[et];return K===void 0&&(K=d(l()),Q[et]=K),K}function d(M){let O=[],H=[],et=[];for(let j=0;j<e;j++)O[j]=0,H[j]=0,et[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:et,object:M,attributes:{},index:null}}function m(M,O,H,et){let j=r.attributes,Q=O.attributes,K=0,yt=H.getAttributes();for(let rt in yt)if(yt[rt].location>=0){let tt=j[rt],pt=Q[rt];if(pt===void 0&&(rt==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),rt==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),tt===void 0||tt.attribute!==pt||pt&&tt.data!==pt.data)return!0;K++}return r.attributesNum!==K||r.index!==et}function _(M,O,H,et){let j={},Q=O.attributes,K=0,yt=H.getAttributes();for(let rt in yt)if(yt[rt].location>=0){let tt=Q[rt];tt===void 0&&(rt==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),rt==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor));let pt={};pt.attribute=tt,tt&&tt.data&&(pt.data=tt.data),j[rt]=pt,K++}r.attributes=j,r.attributesNum=K,r.index=et}function v(){let M=r.newAttributes;for(let O=0,H=M.length;O<H;O++)M[O]=0}function p(M){f(M,0)}function f(M,O){let H=r.newAttributes,et=r.enabledAttributes,j=r.attributeDivisors;H[M]=1,et[M]===0&&(i.enableVertexAttribArray(M),et[M]=1),j[M]!==O&&(i.vertexAttribDivisor(M,O),j[M]=O)}function S(){let M=r.newAttributes,O=r.enabledAttributes;for(let H=0,et=O.length;H<et;H++)O[H]!==M[H]&&(i.disableVertexAttribArray(H),O[H]=0)}function T(M,O,H,et,j,Q,K){K===!0?i.vertexAttribIPointer(M,O,H,j,Q):i.vertexAttribPointer(M,O,H,et,j,Q)}function x(M,O,H,et){v();let j=et.attributes,Q=H.getAttributes(),K=O.defaultAttributeValues;for(let yt in Q){let rt=Q[yt];if(rt.location>=0){let Mt=j[yt];if(Mt===void 0&&(yt==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),yt==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),Mt!==void 0){let tt=Mt.normalized,pt=Mt.itemSize,Dt=t.get(Mt);if(Dt===void 0)continue;let wt=Dt.buffer,Ft=Dt.type,zt=Dt.bytesPerElement,ct=Ft===i.INT||Ft===i.UNSIGNED_INT||Mt.gpuType===ao;if(Mt.isInterleavedBufferAttribute){let lt=Mt.data,_t=lt.stride,Rt=Mt.offset;if(lt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<rt.locationSize;Lt++)f(rt.location+Lt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Lt=0;Lt<rt.locationSize;Lt++)p(rt.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let Lt=0;Lt<rt.locationSize;Lt++)T(rt.location+Lt,pt/rt.locationSize,Ft,tt,_t*zt,(Rt+pt/rt.locationSize*Lt)*zt,ct)}else{if(Mt.isInstancedBufferAttribute){for(let lt=0;lt<rt.locationSize;lt++)f(rt.location+lt,Mt.meshPerAttribute);M.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let lt=0;lt<rt.locationSize;lt++)p(rt.location+lt);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let lt=0;lt<rt.locationSize;lt++)T(rt.location+lt,pt/rt.locationSize,Ft,tt,pt*zt,pt/rt.locationSize*lt*zt,ct)}}else if(K!==void 0){let tt=K[yt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(rt.location,tt);break;case 3:i.vertexAttrib3fv(rt.location,tt);break;case 4:i.vertexAttrib4fv(rt.location,tt);break;default:i.vertexAttrib1fv(rt.location,tt)}}}}S()}function E(){F();for(let M in n){let O=n[M];for(let H in O){let et=O[H];for(let j in et)h(et[j].object),delete et[j];delete O[H]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;let O=n[M.id];for(let H in O){let et=O[H];for(let j in et)h(et[j].object),delete et[j];delete O[H]}delete n[M.id]}function R(M){for(let O in n){let H=n[O];if(H[M.id]===void 0)continue;let et=H[M.id];for(let j in et)h(et[j].object),delete et[j];delete H[M.id]}}function F(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function fp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];e.update(m,n,1)}function l(c,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*d[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let F=R===ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pn&&!F)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:E,maxSamples:C}}function mp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new en,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,T=S*4,x=f.clippingState||null;l.value=x,x=h(_,d,T,m);for(let E=0;E!==T;++E)x[E]=e[E];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,_){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,_!==!0||p===null){let f=m+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let T=0,x=m;T!==v;++T,x+=4)o.copy(u[T]).applyMatrix4(S,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function gp(i){let t=new WeakMap;function e(o,a){return a===so?o.mapping=gi:a===ro&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===so||a===ro)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ur(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var is=4,Fl=[.125,.215,.35,.446,.526,.582],bi=20,ja=new zs,Bl=new Nt,Qa=null,tc=0,ec=0,nc=!1,Si=(1+Math.sqrt(5))/2,ns=1/Si,Ol=[new W(-Si,ns,0),new W(Si,ns,0),new W(-ns,0,Si),new W(ns,0,Si),new W(0,Si,-ns),new W(0,Si,ns),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],_p=new W,qo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=_p}=r;Qa=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qa,tc,ec),this._renderer.xr.enabled=nc,t.scissorTest=!1,Wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qa=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ji,format:sn,colorSpace:ui,depthBuffer:!1},s=zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xp(r)),this._blurMaterial=vp(r,t,e)}return s}_compileMaterial(t){let e=new le(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,s,r){let l=new Ae(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(Bl),u.toneMapping=Bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let v=new di({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),p=new le(new yn,v),f=!1,S=t.background;S?S.isColor&&(v.color.copy(S),t.background=null,f=!0):(v.color.copy(Bl),f=!0);for(let T=0;T<6;T++){let x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let E=this._cubeSize;Wo(s,x*E,T>2?E:0,E,E),u.setRenderTarget(s),f&&u.render(p,l),u.render(t,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=m,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gi||t.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Wo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ja)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ol[(s-r-1)%Ol.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new le(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*bi-1),v=r/_,p=isFinite(r)?1+Math.floor(h*v):bi;p>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bi}`);let f=[],S=0;for(let R=0;R<bi;++R){let F=R/v,y=Math.exp(-F*F/2);f.push(y),R===0?S+=y:R<p&&(S+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/S;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-n;let x=this._sizeLods[s],E=3*x*(s>T-is?s-T+is:0),C=4*(this._cubeSize-x);Wo(e,E,C,3*x,2*x),l.setRenderTarget(e),l.render(u,ja)}};function xp(i){let t=[],e=[],n=[],s=i,r=i-is+1+Fl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-is?l=Fl[o-i+is-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,v=3,p=2,f=1,S=new Float32Array(v*_*m),T=new Float32Array(p*_*m),x=new Float32Array(f*_*m);for(let C=0;C<m;C++){let R=C%3*2/3-1,F=C>2?0:-1,y=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];S.set(y,v*_*C),T.set(d,p*_*C);let M=[C,C,C,C,C,C];x.set(M,f*_*C)}let E=new pe;E.setAttribute("position",new ge(S,v)),E.setAttribute("uv",new ge(T,p)),E.setAttribute("faceIndex",new ge(x,f)),t.push(E),s>is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zl(i,t,e){let n=new nn(i,t,e);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function vp(i,t,e){let n=new Float32Array(bi),s=new W(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function kl(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Vl(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function yp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===so||l===ro,h=l===gi||l===_i;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new qo(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new qo(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Mp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Xi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sp(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER)}function c(u){let d=[],m=u.index,_=u.attributes.position,v=0;if(m!==null){let S=m.array;v=m.version;for(let T=0,x=S.length;T<x;T+=3){let E=S[T+0],C=S[T+1],R=S[T+2];d.push(E,C,C,R,R,E)}}else if(_!==void 0){let S=_.array;v=_.version;for(let T=0,x=S.length/3-1;T<x;T+=3){let E=T+0,C=T+1,R=T+2;d.push(E,C,C,R,R,E)}}else return;let p=new(Ya(d)?As:Es)(d,1);p.version=v;let f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function bp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*o),e.update(m,n,1)}function c(d,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,d*o,_),e.update(m,n,_))}function h(d,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];e.update(p,n,1)}function u(d,m,_,v){if(_===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,v,0,_);let f=0;for(let S=0;S<_;S++)f+=m[S]*v[S];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Tp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wp(i,t,e){let n=new WeakMap,s=new ce;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],T=0;m===!0&&(T=1),_===!0&&(T=2),v===!0&&(T=3);let x=a.attributes.position.count*T,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let C=new Float32Array(x*E*4*u),R=new bs(C,x,E,u);R.type=pn,R.needsUpdate=!0;let F=T*4;for(let M=0;M<u;M++){let O=p[M],H=f[M],et=S[M],j=x*E*4*M;for(let Q=0;Q<O.count;Q++){let K=Q*F;m===!0&&(s.fromBufferAttribute(O,Q),C[j+K+0]=s.x,C[j+K+1]=s.y,C[j+K+2]=s.z,C[j+K+3]=0),_===!0&&(s.fromBufferAttribute(H,Q),C[j+K+4]=s.x,C[j+K+5]=s.y,C[j+K+6]=s.z,C[j+K+7]=0),v===!0&&(s.fromBufferAttribute(et,Q),C[j+K+8]=s.x,C[j+K+9]=s.y,C[j+K+10]=s.z,C[j+K+11]=et.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Jt(x,E)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];let _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ep(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var oh=new ke,Hl=new Ds(1,1),ah=new bs,ch=new Lr,lh=new Rs,Gl=[],Wl=[],Xl=new Float32Array(16),ql=new Float32Array(9),Yl=new Float32Array(4);function rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Gl[s];if(r===void 0&&(r=new Float32Array(s),Gl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zo(i,t){let e=Wl[t];e===void 0&&(e=new Int32Array(t),Wl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ap(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function Rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Pp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;Yl.set(n),i.uniformMatrix2fv(this.addr,!1,Yl),Te(e,n)}}function Lp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;ql.set(n),i.uniformMatrix3fv(this.addr,!1,ql),Te(e,n)}}function Dp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;Xl.set(n),i.uniformMatrix4fv(this.addr,!1,Xl),Te(e,n)}}function Up(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Op(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Hp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hl.compareFunction=Wa,r=Hl):r=oh,e.setTexture2D(t||r,s)}function Gp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ch,s)}function Wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||lh,s)}function Xp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ah,s)}function qp(i){switch(i){case 5126:return Ap;case 35664:return Cp;case 35665:return Rp;case 35666:return Ip;case 35674:return Pp;case 35675:return Lp;case 35676:return Dp;case 5124:case 35670:return Up;case 35667:case 35671:return Np;case 35668:case 35672:return Fp;case 35669:case 35673:return Bp;case 5125:return Op;case 36294:return zp;case 36295:return kp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}function Yp(i,t){i.uniform1fv(this.addr,t)}function Zp(i,t){let e=rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Jp(i,t){let e=rs(t,this.size,3);i.uniform3fv(this.addr,e)}function $p(i,t){let e=rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Kp(i,t){let e=rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jp(i,t){let e=rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qp(i,t){let e=rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tm(i,t){i.uniform1iv(this.addr,t)}function em(i,t){i.uniform2iv(this.addr,t)}function nm(i,t){i.uniform3iv(this.addr,t)}function im(i,t){i.uniform4iv(this.addr,t)}function sm(i,t){i.uniform1uiv(this.addr,t)}function rm(i,t){i.uniform2uiv(this.addr,t)}function om(i,t){i.uniform3uiv(this.addr,t)}function am(i,t){i.uniform4uiv(this.addr,t)}function cm(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||oh,r[o])}function lm(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ch,r[o])}function hm(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||lh,r[o])}function um(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ah,r[o])}function dm(i){switch(i){case 5126:return Yp;case 35664:return Zp;case 35665:return Jp;case 35666:return $p;case 35674:return Kp;case 35675:return jp;case 35676:return Qp;case 5124:case 35670:return tm;case 35667:case 35671:return em;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return sm;case 36294:return rm;case 36295:return om;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return um}}var sc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qp(e.type)}},rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dm(e.type)}},oc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ic=/(\w+)(\])?(\[|\.)?/g;function Zl(i,t){i.seq.push(t),i.map[t.id]=t}function fm(i,t,e){let n=i.name,s=n.length;for(ic.lastIndex=0;;){let r=ic.exec(n),o=ic.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zl(e,c===void 0?new sc(a,i,t):new rc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new oc(a),Zl(e,u)),e=u}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);fm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Jl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var pm=37297,mm=0;function gm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var $l=new Xt;function _m(i){Kt._getMatrix($l,Kt.workingColorSpace,i);let t=`mat3( ${$l.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case ys:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Kl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+gm(i.getShaderSource(t),a)}else return r}function xm(i,t){let e=_m(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vm(i,t){let e;switch(t){case ml:e="Linear";break;case gl:e="Reinhard";break;case _l:e="Cineon";break;case io:e="ACESFilmic";break;case vl:e="AgX";break;case yl:e="Neutral";break;case xl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xo=new W;function ym(){Kt.getLuminanceCoefficients(Xo);let i=Xo.x.toFixed(4),t=Xo.y.toFixed(4),e=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function Sm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Js(i){return i!==""}function jl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ql(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(i){return i.replace(Tm,Em)}var wm=new Map;function Em(i,t){let e=qt[t];if(e===void 0){let n=wm.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ac(e)}var Am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(i){return i.replace(Am,Cm)}function Cm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Rm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vs?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function Im(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gi:case _i:t="ENVMAP_TYPE_CUBE";break;case Hs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function Lm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ua:t="ENVMAP_BLENDING_MULTIPLY";break;case fl:t="ENVMAP_BLENDING_MIX";break;case pl:t="ENVMAP_BLENDING_ADD";break}return t}function Dm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Um(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Rm(e),c=Im(e),h=Pm(e),u=Lm(e),d=Dm(e),m=Mm(e),_=Sm(r),v=s.createProgram(),p,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Js).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Js).join(`
`),f.length>0&&(f+=`
`)):(p=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),f=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?vm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,xm("linearToOutputTexel",e.outputColorSpace),ym(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Js).join(`
`)),o=ac(o),o=jl(o,e),o=Ql(o,e),a=ac(a),a=jl(a,e),a=Ql(a,e),o=th(o),a=th(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let T=S+p+o,x=S+f+a,E=Jl(s,s.VERTEX_SHADER,T),C=Jl(s,s.FRAGMENT_SHADER,x);s.attachShader(v,E),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(O){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(v)||"",et=s.getShaderInfoLog(E)||"",j=s.getShaderInfoLog(C)||"",Q=H.trim(),K=et.trim(),yt=j.trim(),rt=!0,Mt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,E,C);else{let tt=Kl(s,E,"vertex"),pt=Kl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Q+`
`+tt+`
`+pt)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(K===""||yt==="")&&(Mt=!1);Mt&&(O.diagnostics={runnable:rt,programLog:Q,vertexShader:{log:K,prefix:p},fragmentShader:{log:yt,prefix:f}})}s.deleteShader(E),s.deleteShader(C),F=new ss(s,v),y=bm(s,v)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,pm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=C,this}var Nm=0,cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lc(t),e.set(t,n)),n}},lc=class{constructor(t){this.id=Nm++,this.code=t,this.usedTimes=0}};function Fm(i,t,e,n,s,r,o){let a=new ws,l=new cc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,M,O,H,et){let j=H.fog,Q=et.geometry,K=y.isMeshStandardMaterial?H.environment:null,yt=(y.isMeshStandardMaterial?e:t).get(y.envMap||K),rt=yt&&yt.mapping===Hs?yt.image.height:null,Mt=_[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let tt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,pt=tt!==void 0?tt.length:0,Dt=0;Q.morphAttributes.position!==void 0&&(Dt=1),Q.morphAttributes.normal!==void 0&&(Dt=2),Q.morphAttributes.color!==void 0&&(Dt=3);let wt,Ft,zt,ct;if(Mt){let ne=Sn[Mt];wt=ne.vertexShader,Ft=ne.fragmentShader}else wt=y.vertexShader,Ft=y.fragmentShader,l.update(y),zt=l.getVertexShaderID(y),ct=l.getFragmentShaderID(y);let lt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Rt=et.isInstancedMesh===!0,Lt=et.isBatchedMesh===!0,Wt=!!y.map,re=!!y.matcap,B=!!yt,$t=!!y.aoMap,L=!!y.lightMap,D=!!y.bumpMap,A=!!y.normalMap,U=!!y.displacementMap,V=!!y.emissiveMap,G=!!y.metalnessMap,ht=!!y.roughnessMap,xt=y.anisotropy>0,b=y.clearcoat>0,g=y.dispersion>0,P=y.iridescence>0,z=y.sheen>0,J=y.transmission>0,k=xt&&!!y.anisotropyMap,ut=b&&!!y.clearcoatMap,it=b&&!!y.clearcoatNormalMap,Tt=b&&!!y.clearcoatRoughnessMap,gt=P&&!!y.iridescenceMap,mt=P&&!!y.iridescenceThicknessMap,dt=z&&!!y.sheenColorMap,N=z&&!!y.sheenRoughnessMap,q=!!y.specularMap,Y=!!y.specularColorMap,nt=!!y.specularIntensityMap,I=J&&!!y.transmissionMap,X=J&&!!y.thicknessMap,st=!!y.gradientMap,bt=!!y.alphaMap,vt=y.alphaTest>0,ft=!!y.alphaHash,Pt=!!y.extensions,Vt=Bn;y.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let te={shaderID:Mt,shaderType:y.type,shaderName:y.name,vertexShader:wt,fragmentShader:Ft,defines:y.defines,customVertexShaderID:zt,customFragmentShaderID:ct,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Lt,batchingColor:Lt&&et._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&et.instanceColor!==null,instancingMorph:Rt&&et.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ui,alphaToCoverage:!!y.alphaToCoverage,map:Wt,matcap:re,envMap:B,envMapMode:B&&yt.mapping,envMapCubeUVHeight:rt,aoMap:$t,lightMap:L,bumpMap:D,normalMap:A,displacementMap:d&&U,emissiveMap:V,normalMapObjectSpace:A&&y.normalMapType===Tl,normalMapTangentSpace:A&&y.normalMapType===Ga,metalnessMap:G,roughnessMap:ht,anisotropy:xt,anisotropyMap:k,clearcoat:b,clearcoatMap:ut,clearcoatNormalMap:it,clearcoatRoughnessMap:Tt,dispersion:g,iridescence:P,iridescenceMap:gt,iridescenceThicknessMap:mt,sheen:z,sheenColorMap:dt,sheenRoughnessMap:N,specularMap:q,specularColorMap:Y,specularIntensityMap:nt,transmission:J,transmissionMap:I,thicknessMap:X,gradientMap:st,opaque:y.transparent===!1&&y.blending===ci&&y.alphaToCoverage===!1,alphaMap:bt,alphaTest:vt,alphaHash:ft,combine:y.combine,mapUv:Wt&&v(y.map.channel),aoMapUv:$t&&v(y.aoMap.channel),lightMapUv:L&&v(y.lightMap.channel),bumpMapUv:D&&v(y.bumpMap.channel),normalMapUv:A&&v(y.normalMap.channel),displacementMapUv:U&&v(y.displacementMap.channel),emissiveMapUv:V&&v(y.emissiveMap.channel),metalnessMapUv:G&&v(y.metalnessMap.channel),roughnessMapUv:ht&&v(y.roughnessMap.channel),anisotropyMapUv:k&&v(y.anisotropyMap.channel),clearcoatMapUv:ut&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:N&&v(y.sheenRoughnessMap.channel),specularMapUv:q&&v(y.specularMap.channel),specularColorMapUv:Y&&v(y.specularColorMap.channel),specularIntensityMapUv:nt&&v(y.specularIntensityMap.channel),transmissionMapUv:I&&v(y.transmissionMap.channel),thicknessMapUv:X&&v(y.thicknessMap.channel),alphaMapUv:bt&&v(y.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(A||xt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!Q.attributes.uv&&(Wt||bt),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:et.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Wt&&y.map.isVideoTexture===!0&&Kt.getTransfer(y.map.colorSpace)===ie,decodeVideoTextureEmissive:V&&y.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(y.emissiveMap.colorSpace)===ie,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_e,flipSided:y.side===Pe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&y.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return te.vertexUv1s=c.has(1),te.vertexUv2s=c.has(2),te.vertexUv3s=c.has(3),c.clear(),te}function f(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let O in y.defines)M.push(O),M.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(S(M,y),T(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function S(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function T(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let M=_[y.type],O;if(M){let H=Sn[M];O=Zs.clone(H.uniforms)}else O=y.uniforms;return O}function E(y,M){let O;for(let H=0,et=h.length;H<et;H++){let j=h[H];if(j.cacheKey===M){O=j,++O.usedTimes;break}}return O===void 0&&(O=new Um(i,M,y,r),h.push(O)),O}function C(y){if(--y.usedTimes===0){let M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function R(y){l.remove(y)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:E,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:F}}function Bm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Om(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function nh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ih(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,m,_,v,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=v,f.group=p),t++,f}function a(u,d,m,_,v,p){let f=o(u,d,m,_,v,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,d,m,_,v,p){let f=o(u,d,m,_,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Om),n.length>1&&n.sort(d||nh),s.length>1&&s.sort(d||nh)}function h(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function zm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ih,i.set(n,[o])):s>=r.length?(o=new ih,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function km(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Nt};break;case"SpotLight":e={position:new W,direction:new W,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function Vm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Hm=0;function Gm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wm(i){let t=new km,e=Vm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let s=new W,r=new se,o=new se;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,_=0,v=0,p=0,f=0,S=0,T=0,x=0,E=0,C=0,R=0;c.sort(Gm);for(let y=0,M=c.length;y<M;y++){let O=c[y],H=O.color,et=O.intensity,j=O.distance,Q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=H.r*et,u+=H.g*et,d+=H.b*et;else if(O.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(O.sh.coefficients[K],et);R++}else if(O.isDirectionalLight){let K=t.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let yt=O.shadow,rt=e.get(O);rt.shadowIntensity=yt.intensity,rt.shadowBias=yt.bias,rt.shadowNormalBias=yt.normalBias,rt.shadowRadius=yt.radius,rt.shadowMapSize=yt.mapSize,n.directionalShadow[m]=rt,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=O.shadow.matrix,S++}n.directional[m]=K,m++}else if(O.isSpotLight){let K=t.get(O);K.position.setFromMatrixPosition(O.matrixWorld),K.color.copy(H).multiplyScalar(et),K.distance=j,K.coneCos=Math.cos(O.angle),K.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),K.decay=O.decay,n.spot[v]=K;let yt=O.shadow;if(O.map&&(n.spotLightMap[E]=O.map,E++,yt.updateMatrices(O),O.castShadow&&C++),n.spotLightMatrix[v]=yt.matrix,O.castShadow){let rt=e.get(O);rt.shadowIntensity=yt.intensity,rt.shadowBias=yt.bias,rt.shadowNormalBias=yt.normalBias,rt.shadowRadius=yt.radius,rt.shadowMapSize=yt.mapSize,n.spotShadow[v]=rt,n.spotShadowMap[v]=Q,x++}v++}else if(O.isRectAreaLight){let K=t.get(O);K.color.copy(H).multiplyScalar(et),K.halfWidth.set(O.width*.5,0,0),K.halfHeight.set(0,O.height*.5,0),n.rectArea[p]=K,p++}else if(O.isPointLight){let K=t.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),K.distance=O.distance,K.decay=O.decay,O.castShadow){let yt=O.shadow,rt=e.get(O);rt.shadowIntensity=yt.intensity,rt.shadowBias=yt.bias,rt.shadowNormalBias=yt.normalBias,rt.shadowRadius=yt.radius,rt.shadowMapSize=yt.mapSize,rt.shadowCameraNear=yt.camera.near,rt.shadowCameraFar=yt.camera.far,n.pointShadow[_]=rt,n.pointShadowMap[_]=Q,n.pointShadowMatrix[_]=O.shadow.matrix,T++}n.point[_]=K,_++}else if(O.isHemisphereLight){let K=t.get(O);K.skyColor.copy(O.color).multiplyScalar(et),K.groundColor.copy(O.groundColor).multiplyScalar(et),n.hemi[f]=K,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let F=n.hash;(F.directionalLength!==m||F.pointLength!==_||F.spotLength!==v||F.rectAreaLength!==p||F.hemiLength!==f||F.numDirectionalShadows!==S||F.numPointShadows!==T||F.numSpotShadows!==x||F.numSpotMaps!==E||F.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=x+E-C,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,F.directionalLength=m,F.pointLength=_,F.spotLength=v,F.rectAreaLength=p,F.hemiLength=f,F.numDirectionalShadows=S,F.numPointShadows=T,F.numSpotShadows=x,F.numSpotMaps=E,F.numLightProbes=R,n.version=Hm++)}function l(c,h){let u=0,d=0,m=0,_=0,v=0,p=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){let T=c[f];if(T.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(T.isSpotLight){let x=n.spot[m];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),m++}else if(T.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(T.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function sh(i){let t=new Wm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Xm(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new sh(i),t.set(s,[a])):r>=o.length?(a=new sh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
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
}`;function Zm(i,t,e){let n=new Ji,s=new Jt,r=new Jt,o=new ce,a=new Or({depthPacking:bl}),l=new zr,c={},h=e.maxTextureSize,u={[ln]:Pe,[Pe]:ln,[_e]:_e},d=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:qm,fragmentShader:Ym}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let _=new pe;_.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new le(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let f=this.type;this.render=function(C,R,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let y=i.getRenderTarget(),M=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Fn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let et=f!==Mn&&this.type===Mn,j=f===Mn&&this.type!==Mn;for(let Q=0,K=C.length;Q<K;Q++){let yt=C[Q],rt=yt.shadow;if(rt===void 0){console.warn("THREE.WebGLShadowMap:",yt,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;s.copy(rt.mapSize);let Mt=rt.getFrameExtents();if(s.multiply(Mt),r.copy(rt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Mt.x),s.x=r.x*Mt.x,rt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Mt.y),s.y=r.y*Mt.y,rt.mapSize.y=r.y)),rt.map===null||et===!0||j===!0){let pt=this.type!==Mn?{minFilter:Ge,magFilter:Ge}:{};rt.map!==null&&rt.map.dispose(),rt.map=new nn(s.x,s.y,pt),rt.map.texture.name=yt.name+".shadowMap",rt.camera.updateProjectionMatrix()}i.setRenderTarget(rt.map),i.clear();let tt=rt.getViewportCount();for(let pt=0;pt<tt;pt++){let Dt=rt.getViewport(pt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),H.viewport(o),rt.updateMatrices(yt,pt),n=rt.getFrustum(),x(R,F,rt.camera,yt,this.type)}rt.isPointLightShadow!==!0&&this.type===Mn&&S(rt,F),rt.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(y,M,O)};function S(C,R){let F=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new nn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,F,d,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,F,m,v,null)}function T(C,R,F,y){let M=null,O=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)M=O;else if(M=F.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let H=M.uuid,et=R.uuid,j=c[H];j===void 0&&(j={},c[H]=j);let Q=j[et];Q===void 0&&(Q=M.clone(),j[et]=Q,R.addEventListener("dispose",E)),M=Q}if(M.visible=R.visible,M.wireframe=R.wireframe,y===Mn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=i.properties.get(M);H.light=F}return M}function x(C,R,F,y,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Mn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let et=t.update(C),j=C.material;if(Array.isArray(j)){let Q=et.groups;for(let K=0,yt=Q.length;K<yt;K++){let rt=Q[K],Mt=j[rt.materialIndex];if(Mt&&Mt.visible){let tt=T(C,Mt,y,M);C.onBeforeShadow(i,C,R,F,et,tt,rt),i.renderBufferDirect(F,null,et,tt,C,rt),C.onAfterShadow(i,C,R,F,et,tt,rt)}}}else if(j.visible){let Q=T(C,j,y,M);C.onBeforeShadow(i,C,R,F,et,Q,null),i.renderBufferDirect(F,null,et,Q,C,null),C.onAfterShadow(i,C,R,F,et,Q,null)}}let H=C.children;for(let et=0,j=H.length;et<j;et++)x(H[et],R,F,y,M)}function E(C){C.target.removeEventListener("dispose",E);for(let F in c){let y=c[F],M=C.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}var Jm={[$r]:Kr,[jr]:eo,[Qr]:no,[li]:to,[Kr]:$r,[eo]:jr,[no]:Qr,[to]:li};function $m(i,t){function e(){let I=!1,X=new ce,st=null,bt=new ce(0,0,0,0);return{setMask:function(vt){st!==vt&&!I&&(i.colorMask(vt,vt,vt,vt),st=vt)},setLocked:function(vt){I=vt},setClear:function(vt,ft,Pt,Vt,te){te===!0&&(vt*=Vt,ft*=Vt,Pt*=Vt),X.set(vt,ft,Pt,Vt),bt.equals(X)===!1&&(i.clearColor(vt,ft,Pt,Vt),bt.copy(X))},reset:function(){I=!1,st=null,bt.set(-1,0,0,0)}}}function n(){let I=!1,X=!1,st=null,bt=null,vt=null;return{setReversed:function(ft){if(X!==ft){let Pt=t.get("EXT_clip_control");ft?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),X=ft;let Vt=vt;vt=null,this.setClear(Vt)}},getReversed:function(){return X},setTest:function(ft){ft?lt(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(ft){st!==ft&&!I&&(i.depthMask(ft),st=ft)},setFunc:function(ft){if(X&&(ft=Jm[ft]),bt!==ft){switch(ft){case $r:i.depthFunc(i.NEVER);break;case Kr:i.depthFunc(i.ALWAYS);break;case jr:i.depthFunc(i.LESS);break;case li:i.depthFunc(i.LEQUAL);break;case Qr:i.depthFunc(i.EQUAL);break;case to:i.depthFunc(i.GEQUAL);break;case eo:i.depthFunc(i.GREATER);break;case no:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=ft}},setLocked:function(ft){I=ft},setClear:function(ft){vt!==ft&&(X&&(ft=1-ft),i.clearDepth(ft),vt=ft)},reset:function(){I=!1,st=null,bt=null,vt=null,X=!1}}}function s(){let I=!1,X=null,st=null,bt=null,vt=null,ft=null,Pt=null,Vt=null,te=null;return{setTest:function(ne){I||(ne?lt(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(ne){X!==ne&&!I&&(i.stencilMask(ne),X=ne)},setFunc:function(ne,wn,xn){(st!==ne||bt!==wn||vt!==xn)&&(i.stencilFunc(ne,wn,xn),st=ne,bt=wn,vt=xn)},setOp:function(ne,wn,xn){(ft!==ne||Pt!==wn||Vt!==xn)&&(i.stencilOp(ne,wn,xn),ft=ne,Pt=wn,Vt=xn)},setLocked:function(ne){I=ne},setClear:function(ne){te!==ne&&(i.clearStencil(ne),te=ne)},reset:function(){I=!1,X=null,st=null,bt=null,vt=null,ft=null,Pt=null,Vt=null,te=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,m=[],_=null,v=!1,p=null,f=null,S=null,T=null,x=null,E=null,C=null,R=new Nt(0,0,0),F=0,y=!1,M=null,O=null,H=null,et=null,j=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,yt=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(yt=parseFloat(/^WebGL (\d)/.exec(rt)[1]),K=yt>=1):rt.indexOf("OpenGL ES")!==-1&&(yt=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),K=yt>=2);let Mt=null,tt={},pt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),wt=new ce().fromArray(pt),Ft=new ce().fromArray(Dt);function zt(I,X,st,bt){let vt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(I,ft),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<st;Pt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(X,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(X+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return ft}let ct={};ct[i.TEXTURE_2D]=zt(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(li),D(!1),A(Ia),lt(i.CULL_FACE),$t(Fn);function lt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function _t(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Rt(I,X){return u[I]!==X?(i.bindFramebuffer(I,X),u[I]=X,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=X),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=X),!0):!1}function Lt(I,X){let st=m,bt=!1;if(I){st=d.get(X),st===void 0&&(st=[],d.set(X,st));let vt=I.textures;if(st.length!==vt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Pt=vt.length;ft<Pt;ft++)st[ft]=i.COLOR_ATTACHMENT0+ft;st.length=vt.length,bt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,bt=!0);bt&&i.drawBuffers(st)}function Wt(I){return _!==I?(i.useProgram(I),_=I,!0):!1}let re={[Yn]:i.FUNC_ADD,[$c]:i.FUNC_SUBTRACT,[Kc]:i.FUNC_REVERSE_SUBTRACT};re[jc]=i.MIN,re[Qc]=i.MAX;let B={[tl]:i.ZERO,[el]:i.ONE,[nl]:i.SRC_COLOR,[Er]:i.SRC_ALPHA,[cl]:i.SRC_ALPHA_SATURATE,[ol]:i.DST_COLOR,[sl]:i.DST_ALPHA,[il]:i.ONE_MINUS_SRC_COLOR,[Ar]:i.ONE_MINUS_SRC_ALPHA,[al]:i.ONE_MINUS_DST_COLOR,[rl]:i.ONE_MINUS_DST_ALPHA,[ll]:i.CONSTANT_COLOR,[hl]:i.ONE_MINUS_CONSTANT_COLOR,[ul]:i.CONSTANT_ALPHA,[dl]:i.ONE_MINUS_CONSTANT_ALPHA};function $t(I,X,st,bt,vt,ft,Pt,Vt,te,ne){if(I===Fn){v===!0&&(_t(i.BLEND),v=!1);return}if(v===!1&&(lt(i.BLEND),v=!0),I!==Jc){if(I!==p||ne!==y){if((f!==Yn||x!==Yn)&&(i.blendEquation(i.FUNC_ADD),f=Yn,x=Yn),ne)switch(I){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFunc(i.ONE,i.ONE);break;case La:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Da:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case La:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Da:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,T=null,E=null,C=null,R.set(0,0,0),F=0,p=I,y=ne}return}vt=vt||X,ft=ft||st,Pt=Pt||bt,(X!==f||vt!==x)&&(i.blendEquationSeparate(re[X],re[vt]),f=X,x=vt),(st!==S||bt!==T||ft!==E||Pt!==C)&&(i.blendFuncSeparate(B[st],B[bt],B[ft],B[Pt]),S=st,T=bt,E=ft,C=Pt),(Vt.equals(R)===!1||te!==F)&&(i.blendColor(Vt.r,Vt.g,Vt.b,te),R.copy(Vt),F=te),p=I,y=!1}function L(I,X){I.side===_e?_t(i.CULL_FACE):lt(i.CULL_FACE);let st=I.side===Pe;X&&(st=!st),D(st),I.blending===ci&&I.transparent===!1?$t(Fn):$t(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let bt=I.stencilWrite;a.setTest(bt),bt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function D(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function A(I){I!==qc?(lt(i.CULL_FACE),I!==O&&(I===Ia?i.cullFace(i.BACK):I===Yc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),O=I}function U(I){I!==H&&(K&&i.lineWidth(I),H=I)}function V(I,X,st){I?(lt(i.POLYGON_OFFSET_FILL),(et!==X||j!==st)&&(i.polygonOffset(X,st),et=X,j=st)):_t(i.POLYGON_OFFSET_FILL)}function G(I){I?lt(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function ht(I){I===void 0&&(I=i.TEXTURE0+Q-1),Mt!==I&&(i.activeTexture(I),Mt=I)}function xt(I,X,st){st===void 0&&(Mt===null?st=i.TEXTURE0+Q-1:st=Mt);let bt=tt[st];bt===void 0&&(bt={type:void 0,texture:void 0},tt[st]=bt),(bt.type!==I||bt.texture!==X)&&(Mt!==st&&(i.activeTexture(st),Mt=st),i.bindTexture(I,X||ct[I]),bt.type=I,bt.texture=X)}function b(){let I=tt[Mt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(I){wt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),wt.copy(I))}function N(I){Ft.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ft.copy(I))}function q(I,X){let st=c.get(X);st===void 0&&(st=new WeakMap,c.set(X,st));let bt=st.get(I);bt===void 0&&(bt=i.getUniformBlockIndex(X,I.name),st.set(I,bt))}function Y(I,X){let bt=c.get(X).get(I);l.get(X)!==bt&&(i.uniformBlockBinding(X,bt,I.__bindingPointIndex),l.set(X,bt))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Mt=null,tt={},u={},d=new WeakMap,m=[],_=null,v=!1,p=null,f=null,S=null,T=null,x=null,E=null,C=null,R=new Nt(0,0,0),F=0,y=!1,M=null,O=null,H=null,et=null,j=null,wt.set(0,0,i.canvas.width,i.canvas.height),Ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:_t,bindFramebuffer:Rt,drawBuffers:Lt,useProgram:Wt,setBlending:$t,setMaterial:L,setFlipSided:D,setCullFace:A,setLineWidth:U,setPolygonOffset:V,setScissorTest:G,activeTexture:ht,bindTexture:xt,unbindTexture:b,compressedTexImage2D:g,compressedTexImage3D:P,texImage2D:gt,texImage3D:mt,updateUBOMapping:q,uniformBlockBinding:Y,texStorage2D:it,texStorage3D:Tt,texSubImage2D:z,texSubImage3D:J,compressedTexSubImage2D:k,compressedTexSubImage3D:ut,scissor:dt,viewport:N,reset:nt}}function Km(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Jt,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,g){return m?new OffscreenCanvas(b,g):Ss("canvas")}function v(b,g,P){let z=1,J=xt(b);if((J.width>P||J.height>P)&&(z=P/Math.max(J.width,J.height)),z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let k=Math.floor(z*J.width),ut=Math.floor(z*J.height);u===void 0&&(u=_(k,ut));let it=g?_(k,ut):u;return it.width=k,it.height=ut,it.getContext("2d").drawImage(b,0,0,k,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+k+"x"+ut+")."),it}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function p(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function S(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(b,g,P,z,J=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let k=g;if(g===i.RED&&(P===i.FLOAT&&(k=i.R32F),P===i.HALF_FLOAT&&(k=i.R16F),P===i.UNSIGNED_BYTE&&(k=i.R8)),g===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(k=i.R8UI),P===i.UNSIGNED_SHORT&&(k=i.R16UI),P===i.UNSIGNED_INT&&(k=i.R32UI),P===i.BYTE&&(k=i.R8I),P===i.SHORT&&(k=i.R16I),P===i.INT&&(k=i.R32I)),g===i.RG&&(P===i.FLOAT&&(k=i.RG32F),P===i.HALF_FLOAT&&(k=i.RG16F),P===i.UNSIGNED_BYTE&&(k=i.RG8)),g===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(k=i.RG8UI),P===i.UNSIGNED_SHORT&&(k=i.RG16UI),P===i.UNSIGNED_INT&&(k=i.RG32UI),P===i.BYTE&&(k=i.RG8I),P===i.SHORT&&(k=i.RG16I),P===i.INT&&(k=i.RG32I)),g===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(k=i.RGB8UI),P===i.UNSIGNED_SHORT&&(k=i.RGB16UI),P===i.UNSIGNED_INT&&(k=i.RGB32UI),P===i.BYTE&&(k=i.RGB8I),P===i.SHORT&&(k=i.RGB16I),P===i.INT&&(k=i.RGB32I)),g===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),P===i.UNSIGNED_INT&&(k=i.RGBA32UI),P===i.BYTE&&(k=i.RGBA8I),P===i.SHORT&&(k=i.RGBA16I),P===i.INT&&(k=i.RGBA32I)),g===i.RGB&&(P===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),P===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),g===i.RGBA){let ut=J?ys:Kt.getTransfer(z);P===i.FLOAT&&(k=i.RGBA32F),P===i.HALF_FLOAT&&(k=i.RGBA16F),P===i.UNSIGNED_BYTE&&(k=ut===ie?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function x(b,g){let P;return b?g===null||g===jn||g===Qi?P=i.DEPTH24_STENCIL8:g===pn?P=i.DEPTH32F_STENCIL8:g===Ki&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===jn||g===Qi?P=i.DEPTH_COMPONENT24:g===pn?P=i.DEPTH_COMPONENT32F:g===Ki&&(P=i.DEPTH_COMPONENT16),P}function E(b,g){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ge&&b.minFilter!==hn?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function C(b){let g=b.target;g.removeEventListener("dispose",C),F(g),g.isVideoTexture&&h.delete(g)}function R(b){let g=b.target;g.removeEventListener("dispose",R),M(g)}function F(b){let g=n.get(b);if(g.__webglInit===void 0)return;let P=b.source,z=d.get(P);if(z){let J=z[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(b),Object.keys(z).length===0&&d.delete(P)}n.remove(b)}function y(b){let g=n.get(b);i.deleteTexture(g.__webglTexture);let P=b.source,z=d.get(P);delete z[g.__cacheKey],o.memory.textures--}function M(b){let g=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let J=0;J<g.__webglFramebuffer[z].length;J++)i.deleteFramebuffer(g.__webglFramebuffer[z][J]);else i.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)i.deleteFramebuffer(g.__webglFramebuffer[z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let P=b.textures;for(let z=0,J=P.length;z<J;z++){let k=n.get(P[z]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(P[z])}n.remove(b)}let O=0;function H(){O=0}function et(){let b=O;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),O+=1,b}function j(b){let g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function Q(b,g){let P=n.get(b);if(b.isVideoTexture&&G(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&P.__version!==b.version){let z=b.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(P,b,g);return}}else b.isExternalTexture&&(P.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+g)}function K(b,g){let P=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){ct(P,b,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+g)}function yt(b,g){let P=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){ct(P,b,g);return}e.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+g)}function rt(b,g){let P=n.get(b);if(b.version>0&&P.__version!==b.version){lt(P,b,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+g)}let Mt={[hi]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Cr]:i.MIRRORED_REPEAT},tt={[Ge]:i.NEAREST,[Ml]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},pt={[wl]:i.NEVER,[Pl]:i.ALWAYS,[El]:i.LESS,[Wa]:i.LEQUAL,[Al]:i.EQUAL,[Il]:i.GEQUAL,[Cl]:i.GREATER,[Rl]:i.NOTEQUAL};function Dt(b,g){if(g.type===pn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===hn||g.magFilter===oo||g.magFilter===Gs||g.magFilter===Kn||g.minFilter===hn||g.minFilter===oo||g.minFilter===Gs||g.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Mt[g.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Mt[g.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Mt[g.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,tt[g.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,tt[g.minFilter]),g.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,pt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ge||g.minFilter!==Gs&&g.minFilter!==Kn||g.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function wt(b,g){let P=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",C));let z=g.source,J=d.get(z);J===void 0&&(J={},d.set(z,J));let k=j(g);if(k!==b.__cacheKey){J[k]===void 0&&(J[k]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),J[k].usedTimes++;let ut=J[b.__cacheKey];ut!==void 0&&(J[b.__cacheKey].usedTimes--,ut.usedTimes===0&&y(g)),b.__cacheKey=k,b.__webglTexture=J[k].texture}return P}function Ft(b,g,P){return Math.floor(Math.floor(b/P)/g)}function zt(b,g,P,z){let k=b.updateRanges;if(k.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,P,z,g.data);else{k.sort((mt,dt)=>mt.start-dt.start);let ut=0;for(let mt=1;mt<k.length;mt++){let dt=k[ut],N=k[mt],q=dt.start+dt.count,Y=Ft(N.start,g.width,4),nt=Ft(dt.start,g.width,4);N.start<=q+1&&Y===nt&&Ft(N.start+N.count-1,g.width,4)===Y?dt.count=Math.max(dt.count,N.start+N.count-dt.start):(++ut,k[ut]=N)}k.length=ut+1;let it=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),gt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let mt=0,dt=k.length;mt<dt;mt++){let N=k[mt],q=Math.floor(N.start/4),Y=Math.ceil(N.count/4),nt=q%g.width,I=Math.floor(q/g.width),X=Y,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,nt,I,X,st,P,z,g.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,it),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function ct(b,g,P){let z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=i.TEXTURE_3D);let J=wt(b,g),k=g.source;e.bindTexture(z,b.__webglTexture,i.TEXTURE0+P);let ut=n.get(k);if(k.version!==ut.__version||J===!0){e.activeTexture(i.TEXTURE0+P);let it=Kt.getPrimaries(Kt.workingColorSpace),Tt=g.colorSpace===On?null:Kt.getPrimaries(g.colorSpace),gt=g.colorSpace===On||it===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let mt=v(g.image,!1,s.maxTextureSize);mt=ht(g,mt);let dt=r.convert(g.format,g.colorSpace),N=r.convert(g.type),q=T(g.internalFormat,dt,N,g.colorSpace,g.isVideoTexture);Dt(z,g);let Y,nt=g.mipmaps,I=g.isVideoTexture!==!0,X=ut.__version===void 0||J===!0,st=k.dataReady,bt=E(g,mt);if(g.isDepthTexture)q=x(g.format===ts,g.type),X&&(I?e.texStorage2D(i.TEXTURE_2D,1,q,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,q,mt.width,mt.height,0,dt,N,null));else if(g.isDataTexture)if(nt.length>0){I&&X&&e.texStorage2D(i.TEXTURE_2D,bt,q,nt[0].width,nt[0].height);for(let vt=0,ft=nt.length;vt<ft;vt++)Y=nt[vt],I?st&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Y.width,Y.height,dt,N,Y.data):e.texImage2D(i.TEXTURE_2D,vt,q,Y.width,Y.height,0,dt,N,Y.data);g.generateMipmaps=!1}else I?(X&&e.texStorage2D(i.TEXTURE_2D,bt,q,mt.width,mt.height),st&&zt(g,mt,dt,N)):e.texImage2D(i.TEXTURE_2D,0,q,mt.width,mt.height,0,dt,N,mt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){I&&X&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,q,nt[0].width,nt[0].height,mt.depth);for(let vt=0,ft=nt.length;vt<ft;vt++)if(Y=nt[vt],g.format!==sn)if(dt!==null)if(I){if(st)if(g.layerUpdates.size>0){let Pt=Ka(Y.width,Y.height,g.format,g.type);for(let Vt of g.layerUpdates){let te=Y.data.subarray(Vt*Pt/Y.data.BYTES_PER_ELEMENT,(Vt+1)*Pt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,Vt,Y.width,Y.height,1,dt,te)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Y.width,Y.height,mt.depth,dt,Y.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,q,Y.width,Y.height,mt.depth,0,Y.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Y.width,Y.height,mt.depth,dt,N,Y.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,q,Y.width,Y.height,mt.depth,0,dt,N,Y.data)}else{I&&X&&e.texStorage2D(i.TEXTURE_2D,bt,q,nt[0].width,nt[0].height);for(let vt=0,ft=nt.length;vt<ft;vt++)Y=nt[vt],g.format!==sn?dt!==null?I?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,Y.width,Y.height,dt,Y.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,q,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?st&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Y.width,Y.height,dt,N,Y.data):e.texImage2D(i.TEXTURE_2D,vt,q,Y.width,Y.height,0,dt,N,Y.data)}else if(g.isDataArrayTexture)if(I){if(X&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,q,mt.width,mt.height,mt.depth),st)if(g.layerUpdates.size>0){let vt=Ka(mt.width,mt.height,g.format,g.type);for(let ft of g.layerUpdates){let Pt=mt.data.subarray(ft*vt/mt.data.BYTES_PER_ELEMENT,(ft+1)*vt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,mt.width,mt.height,1,dt,N,Pt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,dt,N,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,q,mt.width,mt.height,mt.depth,0,dt,N,mt.data);else if(g.isData3DTexture)I?(X&&e.texStorage3D(i.TEXTURE_3D,bt,q,mt.width,mt.height,mt.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,dt,N,mt.data)):e.texImage3D(i.TEXTURE_3D,0,q,mt.width,mt.height,mt.depth,0,dt,N,mt.data);else if(g.isFramebufferTexture){if(X)if(I)e.texStorage2D(i.TEXTURE_2D,bt,q,mt.width,mt.height);else{let vt=mt.width,ft=mt.height;for(let Pt=0;Pt<bt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,q,vt,ft,0,dt,N,null),vt>>=1,ft>>=1}}else if(nt.length>0){if(I&&X){let vt=xt(nt[0]);e.texStorage2D(i.TEXTURE_2D,bt,q,vt.width,vt.height)}for(let vt=0,ft=nt.length;vt<ft;vt++)Y=nt[vt],I?st&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,dt,N,Y):e.texImage2D(i.TEXTURE_2D,vt,q,dt,N,Y);g.generateMipmaps=!1}else if(I){if(X){let vt=xt(mt);e.texStorage2D(i.TEXTURE_2D,bt,q,vt.width,vt.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,N,mt)}else e.texImage2D(i.TEXTURE_2D,0,q,dt,N,mt);p(g)&&f(z),ut.__version=k.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function lt(b,g,P){if(g.image.length!==6)return;let z=wt(b,g),J=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+P);let k=n.get(J);if(J.version!==k.__version||z===!0){e.activeTexture(i.TEXTURE0+P);let ut=Kt.getPrimaries(Kt.workingColorSpace),it=g.colorSpace===On?null:Kt.getPrimaries(g.colorSpace),Tt=g.colorSpace===On||ut===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let gt=g.isCompressedTexture||g.image[0].isCompressedTexture,mt=g.image[0]&&g.image[0].isDataTexture,dt=[];for(let ft=0;ft<6;ft++)!gt&&!mt?dt[ft]=v(g.image[ft],!0,s.maxCubemapSize):dt[ft]=mt?g.image[ft].image:g.image[ft],dt[ft]=ht(g,dt[ft]);let N=dt[0],q=r.convert(g.format,g.colorSpace),Y=r.convert(g.type),nt=T(g.internalFormat,q,Y,g.colorSpace),I=g.isVideoTexture!==!0,X=k.__version===void 0||z===!0,st=J.dataReady,bt=E(g,N);Dt(i.TEXTURE_CUBE_MAP,g);let vt;if(gt){I&&X&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,nt,N.width,N.height);for(let ft=0;ft<6;ft++){vt=dt[ft].mipmaps;for(let Pt=0;Pt<vt.length;Pt++){let Vt=vt[Pt];g.format!==sn?q!==null?I?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,0,0,Vt.width,Vt.height,q,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,nt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,0,0,Vt.width,Vt.height,q,Y,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,nt,Vt.width,Vt.height,0,q,Y,Vt.data)}}}else{if(vt=g.mipmaps,I&&X){vt.length>0&&bt++;let ft=xt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,nt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(mt){I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,dt[ft].width,dt[ft].height,q,Y,dt[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,nt,dt[ft].width,dt[ft].height,0,q,Y,dt[ft].data);for(let Pt=0;Pt<vt.length;Pt++){let te=vt[Pt].image[ft].image;I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,0,0,te.width,te.height,q,Y,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,nt,te.width,te.height,0,q,Y,te.data)}}else{I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,q,Y,dt[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,nt,q,Y,dt[ft]);for(let Pt=0;Pt<vt.length;Pt++){let Vt=vt[Pt];I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,0,0,q,Y,Vt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,nt,q,Y,Vt.image[ft])}}}p(g)&&f(i.TEXTURE_CUBE_MAP),k.__version=J.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function _t(b,g,P,z,J,k){let ut=r.convert(P.format,P.colorSpace),it=r.convert(P.type),Tt=T(P.internalFormat,ut,it,P.colorSpace),gt=n.get(g),mt=n.get(P);if(mt.__renderTarget=g,!gt.__hasExternalTextures){let dt=Math.max(1,g.width>>k),N=Math.max(1,g.height>>k);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,k,Tt,dt,N,g.depth,0,ut,it,null):e.texImage2D(J,k,Tt,dt,N,0,ut,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),V(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,J,mt.__webglTexture,0,U(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,J,mt.__webglTexture,k),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(b,g,P){if(i.bindRenderbuffer(i.RENDERBUFFER,b),g.depthBuffer){let z=g.depthTexture,J=z&&z.isDepthTexture?z.type:null,k=x(g.stencilBuffer,J),ut=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=U(g);V(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,k,g.width,g.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,k,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,k,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,b)}else{let z=g.textures;for(let J=0;J<z.length;J++){let k=z[J],ut=r.convert(k.format,k.colorSpace),it=r.convert(k.type),Tt=T(k.internalFormat,ut,it,k.colorSpace),gt=U(g);P&&V(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,Tt,g.width,g.height):V(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,Tt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=n.get(g.depthTexture);z.__renderTarget=g,(!z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q(g.depthTexture,0);let J=z.__webglTexture,k=U(g);if(g.depthTexture.format===Gi)V(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(g.depthTexture.format===ts)V(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Wt(b){let g=n.get(b),P=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){let z=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){let J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",J)};z.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=z}if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let z=b.texture.mipmaps;z&&z.length>0?Lt(g.__webglFramebuffer[0],b):Lt(g.__webglFramebuffer,b)}else if(P){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=i.createRenderbuffer(),Rt(g.__webglDepthbuffer[z],b,!1);else{let J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,k)}}else{let z=b.texture.mipmaps;if(z&&z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Rt(g.__webglDepthbuffer,b,!1);else{let J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,k)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(b,g,P){let z=n.get(b);g!==void 0&&_t(z.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&Wt(b)}function B(b){let g=b.texture,P=n.get(b),z=n.get(g);b.addEventListener("dispose",R);let J=b.textures,k=b.isWebGLCubeRenderTarget===!0,ut=J.length>1;if(ut||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=g.version,o.memory.textures++),k){P.__webglFramebuffer=[];for(let it=0;it<6;it++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[it]=[];for(let Tt=0;Tt<g.mipmaps.length;Tt++)P.__webglFramebuffer[it][Tt]=i.createFramebuffer()}else P.__webglFramebuffer[it]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let it=0;it<g.mipmaps.length;it++)P.__webglFramebuffer[it]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(ut)for(let it=0,Tt=J.length;it<Tt;it++){let gt=n.get(J[it]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&V(b)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let it=0;it<J.length;it++){let Tt=J[it];P.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[it]);let gt=r.convert(Tt.format,Tt.colorSpace),mt=r.convert(Tt.type),dt=T(Tt.internalFormat,gt,mt,Tt.colorSpace,b.isXRRenderTarget===!0),N=U(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,N,dt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,P.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(P.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,g);for(let it=0;it<6;it++)if(g.mipmaps&&g.mipmaps.length>0)for(let Tt=0;Tt<g.mipmaps.length;Tt++)_t(P.__webglFramebuffer[it][Tt],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt);else _t(P.__webglFramebuffer[it],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(g)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let it=0,Tt=J.length;it<Tt;it++){let gt=J[it],mt=n.get(gt),dt=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(dt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,mt.__webglTexture),Dt(dt,gt),_t(P.__webglFramebuffer,b,gt,i.COLOR_ATTACHMENT0+it,dt,0),p(gt)&&f(dt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(it=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,z.__webglTexture),Dt(it,g),g.mipmaps&&g.mipmaps.length>0)for(let Tt=0;Tt<g.mipmaps.length;Tt++)_t(P.__webglFramebuffer[Tt],b,g,i.COLOR_ATTACHMENT0,it,Tt);else _t(P.__webglFramebuffer,b,g,i.COLOR_ATTACHMENT0,it,0);p(g)&&f(it),e.unbindTexture()}b.depthBuffer&&Wt(b)}function $t(b){let g=b.textures;for(let P=0,z=g.length;P<z;P++){let J=g[P];if(p(J)){let k=S(b),ut=n.get(J).__webglTexture;e.bindTexture(k,ut),f(k),e.unbindTexture()}}}let L=[],D=[];function A(b){if(b.samples>0){if(V(b)===!1){let g=b.textures,P=b.width,z=b.height,J=i.COLOR_BUFFER_BIT,k=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(b),it=g.length>1;if(it)for(let gt=0;gt<g.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let Tt=b.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let gt=0;gt<g.length;gt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[gt]);let mt=n.get(g[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,P,z,0,0,P,z,J,i.NEAREST),l===!0&&(L.length=0,D.length=0,L.push(i.COLOR_ATTACHMENT0+gt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(L.push(k),D.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let gt=0;gt<g.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[gt]);let mt=n.get(g[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let g=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function U(b){return Math.min(s.maxSamples,b.samples)}function V(b){let g=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function G(b){let g=o.render.frame;h.get(b)!==g&&(h.set(b,g),b.update())}function ht(b,g){let P=b.colorSpace,z=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||P!==ui&&P!==On&&(Kt.getTransfer(P)===ie?(z!==sn||J!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}function xt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=et,this.resetTextureUnits=H,this.setTexture2D=Q,this.setTexture2DArray=K,this.setTexture3D=yt,this.setTextureCube=rt,this.rebindTextures=re,this.setupRenderTarget=B,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=V}function jm(i,t){function e(n,s=On){let r,o=Kt.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===za)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fa)return i.BYTE;if(n===Ba)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===ao)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===ji)return i.HALF_FLOAT;if(n===ka)return i.ALPHA;if(n===Va)return i.RGB;if(n===sn)return i.RGBA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===ho)return i.RED;if(n===uo)return i.RED_INTEGER;if(n===Ha)return i.RG;if(n===fo)return i.RG_INTEGER;if(n===po)return i.RGBA_INTEGER;if(n===Ws||n===Xs||n===qs||n===Ys)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ws)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ws)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===_o||n===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vo||n===yo||n===Mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vo||n===yo)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===So||n===bo||n===To||n===wo||n===Eo||n===Ao||n===Co||n===Ro||n===Io||n===Po||n===Lo||n===Do||n===Uo||n===No)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===So)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===To)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ao)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Co)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ro)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Io)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Po)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===No)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===Bo||n===Oo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zo||n===ko||n===Vo||n===Ho)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tg=`
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

}`,hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Us(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ce({vertexShader:Qm,fragmentShader:tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uc=class extends Ln{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,_=null,v=typeof XRWebGLBinding<"u",p=new hc,f={},S=e.getContextAttributes(),T=null,x=null,E=[],C=[],R=new Jt,F=null,y=new Ae;y.viewport=new ce;let M=new Ae;M.viewport=new ce;let O=[y,M],H=new Jr,et=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let lt=E[ct];return lt===void 0&&(lt=new Yi,E[ct]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(ct){let lt=E[ct];return lt===void 0&&(lt=new Yi,E[ct]=lt),lt.getGripSpace()},this.getHand=function(ct){let lt=E[ct];return lt===void 0&&(lt=new Yi,E[ct]=lt),lt.getHandSpace()};function Q(ct){let lt=C.indexOf(ct.inputSource);if(lt===-1)return;let _t=E[lt];_t!==void 0&&(_t.update(ct.inputSource,ct.frame,c||o),_t.dispatchEvent({type:ct.type,data:ct.inputSource}))}function K(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",yt);for(let ct=0;ct<E.length;ct++){let lt=C[ct];lt!==null&&(C[ct]=null,E[ct].disconnect(lt))}et=null,j=null,p.reset();for(let ct in f)delete f[ct];t.setRenderTarget(T),m=null,d=null,u=null,s=null,x=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){r=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){a=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ct){c=ct},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ct){if(s=ct,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",K),s.addEventListener("inputsourceschange",yt),S.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Rt=null,Lt=null;S.depth&&(Lt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=S.stencil?ts:Gi,Rt=S.stencil?Qi:jn);let Wt={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new nn(d.textureWidth,d.textureHeight,{format:sn,type:fn,depthTexture:new Ds(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let _t={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new nn(m.framebufferWidth,m.framebufferHeight,{format:sn,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function yt(ct){for(let lt=0;lt<ct.removed.length;lt++){let _t=ct.removed[lt],Rt=C.indexOf(_t);Rt>=0&&(C[Rt]=null,E[Rt].disconnect(_t))}for(let lt=0;lt<ct.added.length;lt++){let _t=ct.added[lt],Rt=C.indexOf(_t);if(Rt===-1){for(let Wt=0;Wt<E.length;Wt++)if(Wt>=C.length){C.push(_t),Rt=Wt;break}else if(C[Wt]===null){C[Wt]=_t,Rt=Wt;break}if(Rt===-1)break}let Lt=E[Rt];Lt&&Lt.connect(_t)}}let rt=new W,Mt=new W;function tt(ct,lt,_t){rt.setFromMatrixPosition(lt.matrixWorld),Mt.setFromMatrixPosition(_t.matrixWorld);let Rt=rt.distanceTo(Mt),Lt=lt.projectionMatrix.elements,Wt=_t.projectionMatrix.elements,re=Lt[14]/(Lt[10]-1),B=Lt[14]/(Lt[10]+1),$t=(Lt[9]+1)/Lt[5],L=(Lt[9]-1)/Lt[5],D=(Lt[8]-1)/Lt[0],A=(Wt[8]+1)/Wt[0],U=re*D,V=re*A,G=Rt/(-D+A),ht=G*-D;if(lt.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(ht),ct.translateZ(G),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Lt[10]===-1)ct.projectionMatrix.copy(lt.projectionMatrix),ct.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let xt=re+G,b=B+G,g=U-ht,P=V+(Rt-ht),z=$t*B/b*xt,J=L*B/b*xt;ct.projectionMatrix.makePerspective(g,P,z,J,xt,b),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function pt(ct,lt){lt===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(lt.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(s===null)return;let lt=ct.near,_t=ct.far;p.texture!==null&&(p.depthNear>0&&(lt=p.depthNear),p.depthFar>0&&(_t=p.depthFar)),H.near=M.near=y.near=lt,H.far=M.far=y.far=_t,(et!==H.near||j!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),et=H.near,j=H.far),H.layers.mask=ct.layers.mask|6,y.layers.mask=H.layers.mask&3,M.layers.mask=H.layers.mask&5;let Rt=ct.parent,Lt=H.cameras;pt(H,Rt);for(let Wt=0;Wt<Lt.length;Wt++)pt(Lt[Wt],Rt);Lt.length===2?tt(H,y,M):H.projectionMatrix.copy(y.projectionMatrix),Dt(ct,H,Rt)};function Dt(ct,lt,_t){_t===null?ct.matrix.copy(lt.matrixWorld):(ct.matrix.copy(_t.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(lt.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(lt.projectionMatrix),ct.projectionMatrixInverse.copy(lt.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=Wi*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ct){l=ct,d!==null&&(d.fixedFoveation=ct),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ct)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(ct){return f[ct]};let wt=null;function Ft(ct,lt){if(h=lt.getViewerPose(c||o),_=lt,h!==null){let _t=h.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let Rt=!1;_t.length!==H.cameras.length&&(H.cameras.length=0,Rt=!0);for(let B=0;B<_t.length;B++){let $t=_t[B],L=null;if(m!==null)L=m.getViewport($t);else{let A=u.getViewSubImage(d,$t);L=A.viewport,B===0&&(t.setRenderTargetTextures(x,A.colorTexture,A.depthStencilTexture),t.setRenderTarget(x))}let D=O[B];D===void 0&&(D=new Ae,D.layers.enable(B),D.viewport=new ce,O[B]=D),D.matrix.fromArray($t.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray($t.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(L.x,L.y,L.width,L.height),B===0&&(H.matrix.copy(D.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Rt===!0&&H.cameras.push(D)}let Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let B=u.getDepthInformation(_t[0]);B&&B.isValid&&B.texture&&p.init(B,s.renderState)}if(Lt&&Lt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let B=0;B<_t.length;B++){let $t=_t[B].camera;if($t){let L=f[$t];L||(L=new Us,f[$t]=L);let D=u.getCameraImage($t);L.sourceTexture=D}}}}for(let _t=0;_t<E.length;_t++){let Rt=C[_t],Lt=E[_t];Rt!==null&&Lt!==void 0&&Lt.update(Rt,lt,c||o)}wt&&wt(ct,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),_=null}let zt=new rh;zt.setAnimationLoop(Ft),this.setAnimationLoop=function(ct){wt=ct},this.dispose=function(){}}},Mi=new un,eg=new se;function ng(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Za(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,S,T,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,x)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,S,T):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Pe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Pe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S=t.get(f),T=S.envMap,x=S.envMapRotation;T&&(p.envMap.value=T,Mi.copy(x),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),p.envMapRotation.value.setFromMatrix4(eg.makeRotationFromEuler(Mi)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,S,T){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=T*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pe&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let S=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ig(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){let x=T.program;n.uniformBlockBinding(S,x)}function c(S,T){let x=s[S.id];x===void 0&&(_(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",p));let E=T.program;n.updateUBOMapping(S,E);let C=t.render.frame;r[S.id]!==C&&(d(S),r[S.id]=C)}function h(S){let T=u();S.__bindingPointIndex=T;let x=i.createBuffer(),E=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let T=s[S.id],x=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,R=x.length;C<R;C++){let F=Array.isArray(x[C])?x[C]:[x[C]];for(let y=0,M=F.length;y<M;y++){let O=F[y];if(m(O,C,y,E)===!0){let H=O.__offset,et=Array.isArray(O.value)?O.value:[O.value],j=0;for(let Q=0;Q<et.length;Q++){let K=et[Q],yt=v(K);typeof K=="number"||typeof K=="boolean"?(O.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,H+j,O.__data)):K.isMatrix3?(O.__data[0]=K.elements[0],O.__data[1]=K.elements[1],O.__data[2]=K.elements[2],O.__data[3]=0,O.__data[4]=K.elements[3],O.__data[5]=K.elements[4],O.__data[6]=K.elements[5],O.__data[7]=0,O.__data[8]=K.elements[6],O.__data[9]=K.elements[7],O.__data[10]=K.elements[8],O.__data[11]=0):(K.toArray(O.__data,j),j+=yt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,T,x,E){let C=S.value,R=T+"_"+x;if(E[R]===void 0)return typeof C=="number"||typeof C=="boolean"?E[R]=C:E[R]=C.clone(),!0;{let F=E[R];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return E[R]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function _(S){let T=S.uniforms,x=0,E=16;for(let R=0,F=T.length;R<F;R++){let y=Array.isArray(T[R])?T[R]:[T[R]];for(let M=0,O=y.length;M<O;M++){let H=y[M],et=Array.isArray(H.value)?H.value:[H.value];for(let j=0,Q=et.length;j<Q;j++){let K=et[j],yt=v(K),rt=x%E,Mt=rt%yt.boundary,tt=rt+Mt;x+=Mt,tt!==0&&E-tt<yt.storage&&(x+=E-tt),H.__data=new Float32Array(yt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=yt.storage}}}let C=x%E;return C>0&&(x+=E-C),S.__size=x,S.__cache={},this}function v(S){let T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),T}function p(S){let T=S.target;T.removeEventListener("dispose",p);let x=o.indexOf(T.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Yo=class{constructor(t={}){let{canvas:e=Ll(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=new Uint32Array(4),v=new Int32Array(4),p=null,f=null,S=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,E=!1;this._outputColorSpace=ye;let C=0,R=0,F=null,y=-1,M=null,O=new ce,H=new ce,et=null,j=new Nt(0),Q=0,K=e.width,yt=e.height,rt=1,Mt=null,tt=null,pt=new ce(0,0,K,yt),Dt=new ce(0,0,K,yt),wt=!1,Ft=new Ji,zt=!1,ct=!1,lt=new se,_t=new W,Rt=new ce,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function re(){return F===null?rt:1}let B=n;function $t(w,Z){return e.getContext(w,Z)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),B===null){let Z="webgl2";if(B=$t(Z,w),B===null)throw $t(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let L,D,A,U,V,G,ht,xt,b,g,P,z,J,k,ut,it,Tt,gt,mt,dt,N,q,Y,nt;function I(){L=new Mp(B),L.init(),q=new jm(B,L),D=new pp(B,L,t,q),A=new $m(B,L),D.reversedDepthBuffer&&d&&A.buffers.depth.setReversed(!0),U=new Tp(B),V=new Bm,G=new Km(B,L,A,V,D,q,U),ht=new gp(x),xt=new yp(x),b=new Ru(B),Y=new dp(B,b),g=new Sp(B,b,U,Y),P=new Ep(B,g,b,U),mt=new wp(B,D,G),it=new mp(V),z=new Fm(x,ht,xt,L,D,Y,it),J=new ng(x,V),k=new zm,ut=new Xm(L),gt=new up(x,ht,xt,A,P,m,l),Tt=new Zm(x,P,D),nt=new ig(B,U,D,A),dt=new fp(B,L,U),N=new bp(B,L,U),U.programs=z.programs,x.capabilities=D,x.extensions=L,x.properties=V,x.renderLists=k,x.shadowMap=Tt,x.state=A,x.info=U}I();let X=new uc(x,B);this.xr=X,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let w=L.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=L.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(w){w!==void 0&&(rt=w,this.setSize(K,yt,!1))},this.getSize=function(w){return w.set(K,yt)},this.setSize=function(w,Z,ot=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,yt=Z,e.width=Math.floor(w*rt),e.height=Math.floor(Z*rt),ot===!0&&(e.style.width=w+"px",e.style.height=Z+"px"),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(K*rt,yt*rt).floor()},this.setDrawingBufferSize=function(w,Z,ot){K=w,yt=Z,rt=ot,e.width=Math.floor(w*ot),e.height=Math.floor(Z*ot),this.setViewport(0,0,w,Z)},this.getCurrentViewport=function(w){return w.copy(O)},this.getViewport=function(w){return w.copy(pt)},this.setViewport=function(w,Z,ot,at){w.isVector4?pt.set(w.x,w.y,w.z,w.w):pt.set(w,Z,ot,at),A.viewport(O.copy(pt).multiplyScalar(rt).round())},this.getScissor=function(w){return w.copy(Dt)},this.setScissor=function(w,Z,ot,at){w.isVector4?Dt.set(w.x,w.y,w.z,w.w):Dt.set(w,Z,ot,at),A.scissor(H.copy(Dt).multiplyScalar(rt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(w){A.setScissorTest(wt=w)},this.setOpaqueSort=function(w){Mt=w},this.setTransparentSort=function(w){tt=w},this.getClearColor=function(w){return w.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor(...arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,ot=!0){let at=0;if(w){let $=!1;if(F!==null){let St=F.texture.format;$=St===po||St===fo||St===uo}if($){let St=F.texture.type,It=St===fn||St===jn||St===Ki||St===Qi||St===co||St===lo,Bt=gt.getClearColor(),Ut=gt.getClearAlpha(),Ht=Bt.r,Gt=Bt.g,Ot=Bt.b;It?(_[0]=Ht,_[1]=Gt,_[2]=Ot,_[3]=Ut,B.clearBufferuiv(B.COLOR,0,_)):(v[0]=Ht,v[1]=Gt,v[2]=Ot,v[3]=Ut,B.clearBufferiv(B.COLOR,0,v))}else at|=B.COLOR_BUFFER_BIT}Z&&(at|=B.DEPTH_BUFFER_BIT),ot&&(at|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),gt.dispose(),k.dispose(),ut.dispose(),V.dispose(),ht.dispose(),xt.dispose(),P.dispose(),Y.dispose(),nt.dispose(),z.dispose(),X.dispose(),X.removeEventListener("sessionstart",xn),X.removeEventListener("sessionend",gc),ei.stop()};function st(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=U.autoReset,Z=Tt.enabled,ot=Tt.autoUpdate,at=Tt.needsUpdate,$=Tt.type;I(),U.autoReset=w,Tt.enabled=Z,Tt.autoUpdate=ot,Tt.needsUpdate=at,Tt.type=$}function vt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ft(w){let Z=w.target;Z.removeEventListener("dispose",ft),Pt(Z)}function Pt(w){Vt(w),V.remove(w)}function Vt(w){let Z=V.get(w).programs;Z!==void 0&&(Z.forEach(function(ot){z.releaseProgram(ot)}),w.isShaderMaterial&&z.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,ot,at,$,St){Z===null&&(Z=Lt);let It=$.isMesh&&$.matrixWorld.determinant()<0,Bt=bh(w,Z,ot,at,$);A.setMaterial(at,It);let Ut=ot.index,Ht=1;if(at.wireframe===!0){if(Ut=g.getWireframeAttribute(ot),Ut===void 0)return;Ht=2}let Gt=ot.drawRange,Ot=ot.attributes.position,Yt=Gt.start*Ht,oe=(Gt.start+Gt.count)*Ht;St!==null&&(Yt=Math.max(Yt,St.start*Ht),oe=Math.min(oe,(St.start+St.count)*Ht)),Ut!==null?(Yt=Math.max(Yt,0),oe=Math.min(oe,Ut.count)):Ot!=null&&(Yt=Math.max(Yt,0),oe=Math.min(oe,Ot.count));let me=oe-Yt;if(me<0||me===1/0)return;Y.setup($,at,Bt,ot,Ut);let he,ae=dt;if(Ut!==null&&(he=b.get(Ut),ae=N,ae.setIndex(he)),$.isMesh)at.wireframe===!0?(A.setLineWidth(at.wireframeLinewidth*re()),ae.setMode(B.LINES)):ae.setMode(B.TRIANGLES);else if($.isLine){let kt=at.linewidth;kt===void 0&&(kt=1),A.setLineWidth(kt*re()),$.isLineSegments?ae.setMode(B.LINES):$.isLineLoop?ae.setMode(B.LINE_LOOP):ae.setMode(B.LINE_STRIP)}else $.isPoints?ae.setMode(B.POINTS):$.isSprite&&ae.setMode(B.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Xi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))ae.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let kt=$._multiDrawStarts,de=$._multiDrawCounts,ee=$._multiDrawCount,Xe=Ut?b.get(Ut).bytesPerElement:1,Ai=V.get(at).currentProgram.getUniforms();for(let qe=0;qe<ee;qe++)Ai.setValue(B,"_gl_DrawID",qe),ae.render(kt[qe]/Xe,de[qe])}else if($.isInstancedMesh)ae.renderInstances(Yt,me,$.count);else if(ot.isInstancedBufferGeometry){let kt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,de=Math.min(ot.instanceCount,kt);ae.renderInstances(Yt,me,de)}else ae.render(Yt,me)};function te(w,Z,ot){w.transparent===!0&&w.side===_e&&w.forceSinglePass===!1?(w.side=Pe,w.needsUpdate=!0,ir(w,Z,ot),w.side=ln,w.needsUpdate=!0,ir(w,Z,ot),w.side=_e):ir(w,Z,ot)}this.compile=function(w,Z,ot=null){ot===null&&(ot=w),f=ut.get(ot),f.init(Z),T.push(f),ot.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),w!==ot&&w.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights();let at=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let St=$.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){let Bt=St[It];te(Bt,ot,$),at.add(Bt)}else te(St,ot,$),at.add(St)}),f=T.pop(),at},this.compileAsync=function(w,Z,ot=null){let at=this.compile(w,Z,ot);return new Promise($=>{function St(){if(at.forEach(function(It){V.get(It).currentProgram.isReady()&&at.delete(It)}),at.size===0){$(w);return}setTimeout(St,10)}L.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let ne=null;function wn(w){ne&&ne(w)}function xn(){ei.stop()}function gc(){ei.start()}let ei=new rh;ei.setAnimationLoop(wn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(w){ne=w,X.setAnimationLoop(w),w===null?ei.stop():ei.start()},X.addEventListener("sessionstart",xn),X.addEventListener("sessionend",gc),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(Z),Z=X.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,Z,F),f=ut.get(w,T.length),f.init(Z),T.push(f),lt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Ft.setFromProjectionMatrix(lt,cn,Z.reversedDepth),ct=this.localClippingEnabled,zt=it.init(this.clippingPlanes,ct),p=k.get(w,S.length),p.init(),S.push(p),X.enabled===!0&&X.isPresenting===!0){let St=x.xr.getDepthSensingMesh();St!==null&&Ko(St,Z,-1/0,x.sortObjects)}Ko(w,Z,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(Mt,tt),Wt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Wt&&gt.addToRenderList(p,w),this.info.render.frame++,zt===!0&&it.beginShadows();let ot=f.state.shadowsArray;Tt.render(ot,w,Z),zt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let at=p.opaque,$=p.transmissive;if(f.setupLights(),Z.isArrayCamera){let St=Z.cameras;if($.length>0)for(let It=0,Bt=St.length;It<Bt;It++){let Ut=St[It];xc(at,$,w,Ut)}Wt&&gt.render(w);for(let It=0,Bt=St.length;It<Bt;It++){let Ut=St[It];_c(p,w,Ut,Ut.viewport)}}else $.length>0&&xc(at,$,w,Z),Wt&&gt.render(w),_c(p,w,Z);F!==null&&R===0&&(G.updateMultisampleRenderTarget(F),G.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(x,w,Z),Y.resetDefaultState(),y=-1,M=null,T.pop(),T.length>0?(f=T[T.length-1],zt===!0&&it.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function Ko(w,Z,ot,at){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ft.intersectsSprite(w)){at&&Rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lt);let It=P.update(w),Bt=w.material;Bt.visible&&p.push(w,It,Bt,ot,Rt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ft.intersectsObject(w))){let It=P.update(w),Bt=w.material;if(at&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Rt.copy(w.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Rt.copy(It.boundingSphere.center)),Rt.applyMatrix4(w.matrixWorld).applyMatrix4(lt)),Array.isArray(Bt)){let Ut=It.groups;for(let Ht=0,Gt=Ut.length;Ht<Gt;Ht++){let Ot=Ut[Ht],Yt=Bt[Ot.materialIndex];Yt&&Yt.visible&&p.push(w,It,Yt,ot,Rt.z,Ot)}}else Bt.visible&&p.push(w,It,Bt,ot,Rt.z,null)}}let St=w.children;for(let It=0,Bt=St.length;It<Bt;It++)Ko(St[It],Z,ot,at)}function _c(w,Z,ot,at){let $=w.opaque,St=w.transmissive,It=w.transparent;f.setupLightsView(ot),zt===!0&&it.setGlobalState(x.clippingPlanes,ot),at&&A.viewport(O.copy(at)),$.length>0&&nr($,Z,ot),St.length>0&&nr(St,Z,ot),It.length>0&&nr(It,Z,ot),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function xc(w,Z,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[at.id]===void 0&&(f.state.transmissionRenderTarget[at.id]=new nn(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?ji:fn,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let St=f.state.transmissionRenderTarget[at.id],It=at.viewport||O;St.setSize(It.z*x.transmissionResolutionScale,It.w*x.transmissionResolutionScale);let Bt=x.getRenderTarget(),Ut=x.getActiveCubeFace(),Ht=x.getActiveMipmapLevel();x.setRenderTarget(St),x.getClearColor(j),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),Wt&&gt.render(ot);let Gt=x.toneMapping;x.toneMapping=Bn;let Ot=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),f.setupLightsView(at),zt===!0&&it.setGlobalState(x.clippingPlanes,at),nr(w,ot,at),G.updateMultisampleRenderTarget(St),G.updateRenderTargetMipmap(St),L.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let oe=0,me=Z.length;oe<me;oe++){let he=Z[oe],ae=he.object,kt=he.geometry,de=he.material,ee=he.group;if(de.side===_e&&ae.layers.test(at.layers)){let Xe=de.side;de.side=Pe,de.needsUpdate=!0,vc(ae,ot,at,kt,de,ee),de.side=Xe,de.needsUpdate=!0,Yt=!0}}Yt===!0&&(G.updateMultisampleRenderTarget(St),G.updateRenderTargetMipmap(St))}x.setRenderTarget(Bt,Ut,Ht),x.setClearColor(j,Q),Ot!==void 0&&(at.viewport=Ot),x.toneMapping=Gt}function nr(w,Z,ot){let at=Z.isScene===!0?Z.overrideMaterial:null;for(let $=0,St=w.length;$<St;$++){let It=w[$],Bt=It.object,Ut=It.geometry,Ht=It.group,Gt=It.material;Gt.allowOverride===!0&&at!==null&&(Gt=at),Bt.layers.test(ot.layers)&&vc(Bt,Z,ot,Ut,Gt,Ht)}}function vc(w,Z,ot,at,$,St){w.onBeforeRender(x,Z,ot,at,$,St),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(x,Z,ot,at,w,St),$.transparent===!0&&$.side===_e&&$.forceSinglePass===!1?($.side=Pe,$.needsUpdate=!0,x.renderBufferDirect(ot,Z,at,$,w,St),$.side=ln,$.needsUpdate=!0,x.renderBufferDirect(ot,Z,at,$,w,St),$.side=_e):x.renderBufferDirect(ot,Z,at,$,w,St),w.onAfterRender(x,Z,ot,at,$,St)}function ir(w,Z,ot){Z.isScene!==!0&&(Z=Lt);let at=V.get(w),$=f.state.lights,St=f.state.shadowsArray,It=$.state.version,Bt=z.getParameters(w,$.state,St,Z,ot),Ut=z.getProgramCacheKey(Bt),Ht=at.programs;at.environment=w.isMeshStandardMaterial?Z.environment:null,at.fog=Z.fog,at.envMap=(w.isMeshStandardMaterial?xt:ht).get(w.envMap||at.environment),at.envMapRotation=at.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",ft),Ht=new Map,at.programs=Ht);let Gt=Ht.get(Ut);if(Gt!==void 0){if(at.currentProgram===Gt&&at.lightsStateVersion===It)return Mc(w,Bt),Gt}else Bt.uniforms=z.getUniforms(w),w.onBeforeCompile(Bt,x),Gt=z.acquireProgram(Bt,Ut),Ht.set(Ut,Gt),at.uniforms=Bt.uniforms;let Ot=at.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ot.clippingPlanes=it.uniform),Mc(w,Bt),at.needsLights=wh(w),at.lightsStateVersion=It,at.needsLights&&(Ot.ambientLightColor.value=$.state.ambient,Ot.lightProbe.value=$.state.probe,Ot.directionalLights.value=$.state.directional,Ot.directionalLightShadows.value=$.state.directionalShadow,Ot.spotLights.value=$.state.spot,Ot.spotLightShadows.value=$.state.spotShadow,Ot.rectAreaLights.value=$.state.rectArea,Ot.ltc_1.value=$.state.rectAreaLTC1,Ot.ltc_2.value=$.state.rectAreaLTC2,Ot.pointLights.value=$.state.point,Ot.pointLightShadows.value=$.state.pointShadow,Ot.hemisphereLights.value=$.state.hemi,Ot.directionalShadowMap.value=$.state.directionalShadowMap,Ot.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ot.spotShadowMap.value=$.state.spotShadowMap,Ot.spotLightMatrix.value=$.state.spotLightMatrix,Ot.spotLightMap.value=$.state.spotLightMap,Ot.pointShadowMap.value=$.state.pointShadowMap,Ot.pointShadowMatrix.value=$.state.pointShadowMatrix),at.currentProgram=Gt,at.uniformsList=null,Gt}function yc(w){if(w.uniformsList===null){let Z=w.currentProgram.getUniforms();w.uniformsList=ss.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function Mc(w,Z){let ot=V.get(w);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.batchingColor=Z.batchingColor,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.instancingMorph=Z.instancingMorph,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function bh(w,Z,ot,at,$){Z.isScene!==!0&&(Z=Lt),G.resetTextureUnits();let St=Z.fog,It=at.isMeshStandardMaterial?Z.environment:null,Bt=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ui,Ut=(at.isMeshStandardMaterial?xt:ht).get(at.envMap||It),Ht=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Gt=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Ot=!!ot.morphAttributes.position,Yt=!!ot.morphAttributes.normal,oe=!!ot.morphAttributes.color,me=Bn;at.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(me=x.toneMapping);let he=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ae=he!==void 0?he.length:0,kt=V.get(at),de=f.state.lights;if(zt===!0&&(ct===!0||w!==M)){let Be=w===M&&at.id===y;it.setState(at,w,Be)}let ee=!1;at.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==de.state.version||kt.outputColorSpace!==Bt||$.isBatchedMesh&&kt.batching===!1||!$.isBatchedMesh&&kt.batching===!0||$.isBatchedMesh&&kt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&kt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&kt.instancing===!1||!$.isInstancedMesh&&kt.instancing===!0||$.isSkinnedMesh&&kt.skinning===!1||!$.isSkinnedMesh&&kt.skinning===!0||$.isInstancedMesh&&kt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&kt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&kt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&kt.instancingMorph===!1&&$.morphTexture!==null||kt.envMap!==Ut||at.fog===!0&&kt.fog!==St||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==it.numPlanes||kt.numIntersection!==it.numIntersection)||kt.vertexAlphas!==Ht||kt.vertexTangents!==Gt||kt.morphTargets!==Ot||kt.morphNormals!==Yt||kt.morphColors!==oe||kt.toneMapping!==me||kt.morphTargetsCount!==ae)&&(ee=!0):(ee=!0,kt.__version=at.version);let Xe=kt.currentProgram;ee===!0&&(Xe=ir(at,Z,$));let Ai=!1,qe=!1,hs=!1,fe=Xe.getUniforms(),je=kt.uniforms;if(A.useProgram(Xe.program)&&(Ai=!0,qe=!0,hs=!0),at.id!==y&&(y=at.id,qe=!0),Ai||M!==w){A.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),fe.setValue(B,"projectionMatrix",w.projectionMatrix),fe.setValue(B,"viewMatrix",w.matrixWorldInverse);let He=fe.map.cameraPosition;He!==void 0&&He.setValue(B,_t.setFromMatrixPosition(w.matrixWorld)),D.logarithmicDepthBuffer&&fe.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&fe.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,qe=!0,hs=!0)}if($.isSkinnedMesh){fe.setOptional(B,$,"bindMatrix"),fe.setOptional(B,$,"bindMatrixInverse");let Be=$.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),fe.setValue(B,"boneTexture",Be.boneTexture,G))}$.isBatchedMesh&&(fe.setOptional(B,$,"batchingTexture"),fe.setValue(B,"batchingTexture",$._matricesTexture,G),fe.setOptional(B,$,"batchingIdTexture"),fe.setValue(B,"batchingIdTexture",$._indirectTexture,G),fe.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&fe.setValue(B,"batchingColorTexture",$._colorsTexture,G));let Qe=ot.morphAttributes;if((Qe.position!==void 0||Qe.normal!==void 0||Qe.color!==void 0)&&mt.update($,ot,Xe),(qe||kt.receiveShadow!==$.receiveShadow)&&(kt.receiveShadow=$.receiveShadow,fe.setValue(B,"receiveShadow",$.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(je.envMap.value=Ut,je.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&Z.environment!==null&&(je.envMapIntensity.value=Z.environmentIntensity),qe&&(fe.setValue(B,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&Th(je,hs),St&&at.fog===!0&&J.refreshFogUniforms(je,St),J.refreshMaterialUniforms(je,at,rt,yt,f.state.transmissionRenderTarget[w.id]),ss.upload(B,yc(kt),je,G)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(ss.upload(B,yc(kt),je,G),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&fe.setValue(B,"center",$.center),fe.setValue(B,"modelViewMatrix",$.modelViewMatrix),fe.setValue(B,"normalMatrix",$.normalMatrix),fe.setValue(B,"modelMatrix",$.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){let Be=at.uniformsGroups;for(let He=0,jo=Be.length;He<jo;He++){let ni=Be[He];nt.update(ni,Xe),nt.bind(ni,Xe)}}return Xe}function Th(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function wh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,Z,ot){let at=V.get(w);at.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),V.get(w.texture).__webglTexture=Z,V.get(w.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ot,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){let ot=V.get(w);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0};let Eh=B.createFramebuffer();this.setRenderTarget=function(w,Z=0,ot=0){F=w,C=Z,R=ot;let at=!0,$=null,St=!1,It=!1;if(w){let Ut=V.get(w);if(Ut.__useDefaultFramebuffer!==void 0)A.bindFramebuffer(B.FRAMEBUFFER,null),at=!1;else if(Ut.__webglFramebuffer===void 0)G.setupRenderTarget(w);else if(Ut.__hasExternalTextures)G.rebindTextures(w,V.get(w.texture).__webglTexture,V.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ot=w.depthTexture;if(Ut.__boundDepthTexture!==Ot){if(Ot!==null&&V.has(Ot)&&(w.width!==Ot.image.width||w.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(w)}}let Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(It=!0);let Gt=V.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[Z])?$=Gt[Z][ot]:$=Gt[Z],St=!0):w.samples>0&&G.useMultisampledRTT(w)===!1?$=V.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?$=Gt[ot]:$=Gt,O.copy(w.viewport),H.copy(w.scissor),et=w.scissorTest}else O.copy(pt).multiplyScalar(rt).floor(),H.copy(Dt).multiplyScalar(rt).floor(),et=wt;if(ot!==0&&($=Eh),A.bindFramebuffer(B.FRAMEBUFFER,$)&&at&&A.drawBuffers(w,$),A.viewport(O),A.scissor(H),A.setScissorTest(et),St){let Ut=V.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ut.__webglTexture,ot)}else if(It){let Ut=Z;for(let Ht=0;Ht<w.textures.length;Ht++){let Gt=V.get(w.textures[Ht]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ht,Gt.__webglTexture,ot,Ut)}}else if(w!==null&&ot!==0){let Ut=V.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ut.__webglTexture,ot)}y=-1},this.readRenderTargetPixels=function(w,Z,ot,at,$,St,It,Bt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut){A.bindFramebuffer(B.FRAMEBUFFER,Ut);try{let Ht=w.textures[Bt],Gt=Ht.format,Ot=Ht.type;if(!D.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-at&&ot>=0&&ot<=w.height-$&&(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Bt),B.readPixels(Z,ot,at,$,q.convert(Gt),q.convert(Ot),St))}finally{let Ht=F!==null?V.get(F).__webglFramebuffer:null;A.bindFramebuffer(B.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(w,Z,ot,at,$,St,It,Bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut)if(Z>=0&&Z<=w.width-at&&ot>=0&&ot<=w.height-$){A.bindFramebuffer(B.FRAMEBUFFER,Ut);let Ht=w.textures[Bt],Gt=Ht.format,Ot=Ht.type;if(!D.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Yt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Yt),B.bufferData(B.PIXEL_PACK_BUFFER,St.byteLength,B.STREAM_READ),w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Bt),B.readPixels(Z,ot,at,$,q.convert(Gt),q.convert(Ot),0);let oe=F!==null?V.get(F).__webglFramebuffer:null;A.bindFramebuffer(B.FRAMEBUFFER,oe);let me=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Dl(B,me,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Yt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,St),B.deleteBuffer(Yt),B.deleteSync(me),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,ot=0){let at=Math.pow(2,-ot),$=Math.floor(w.image.width*at),St=Math.floor(w.image.height*at),It=Z!==null?Z.x:0,Bt=Z!==null?Z.y:0;G.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,ot,0,0,It,Bt,$,St),A.unbindTexture()};let Ah=B.createFramebuffer(),Ch=B.createFramebuffer();this.copyTextureToTexture=function(w,Z,ot=null,at=null,$=0,St=null){St===null&&($!==0?(Xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=$,$=0):St=0);let It,Bt,Ut,Ht,Gt,Ot,Yt,oe,me,he=w.isCompressedTexture?w.mipmaps[St]:w.image;if(ot!==null)It=ot.max.x-ot.min.x,Bt=ot.max.y-ot.min.y,Ut=ot.isBox3?ot.max.z-ot.min.z:1,Ht=ot.min.x,Gt=ot.min.y,Ot=ot.isBox3?ot.min.z:0;else{let Qe=Math.pow(2,-$);It=Math.floor(he.width*Qe),Bt=Math.floor(he.height*Qe),w.isDataArrayTexture?Ut=he.depth:w.isData3DTexture?Ut=Math.floor(he.depth*Qe):Ut=1,Ht=0,Gt=0,Ot=0}at!==null?(Yt=at.x,oe=at.y,me=at.z):(Yt=0,oe=0,me=0);let ae=q.convert(Z.format),kt=q.convert(Z.type),de;Z.isData3DTexture?(G.setTexture3D(Z,0),de=B.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(G.setTexture2DArray(Z,0),de=B.TEXTURE_2D_ARRAY):(G.setTexture2D(Z,0),de=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Z.unpackAlignment);let ee=B.getParameter(B.UNPACK_ROW_LENGTH),Xe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ai=B.getParameter(B.UNPACK_SKIP_PIXELS),qe=B.getParameter(B.UNPACK_SKIP_ROWS),hs=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,he.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,he.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ht),B.pixelStorei(B.UNPACK_SKIP_ROWS,Gt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ot);let fe=w.isDataArrayTexture||w.isData3DTexture,je=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){let Qe=V.get(w),Be=V.get(Z),He=V.get(Qe.__renderTarget),jo=V.get(Be.__renderTarget);A.bindFramebuffer(B.READ_FRAMEBUFFER,He.__webglFramebuffer),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,jo.__webglFramebuffer);for(let ni=0;ni<Ut;ni++)fe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,V.get(w).__webglTexture,$,Ot+ni),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,V.get(Z).__webglTexture,St,me+ni)),B.blitFramebuffer(Ht,Gt,It,Bt,Yt,oe,It,Bt,B.DEPTH_BUFFER_BIT,B.NEAREST);A.bindFramebuffer(B.READ_FRAMEBUFFER,null),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||V.has(w)){let Qe=V.get(w),Be=V.get(Z);A.bindFramebuffer(B.READ_FRAMEBUFFER,Ah),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ch);for(let He=0;He<Ut;He++)fe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Qe.__webglTexture,$,Ot+He):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Qe.__webglTexture,$),je?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.__webglTexture,St,me+He):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Be.__webglTexture,St),$!==0?B.blitFramebuffer(Ht,Gt,It,Bt,Yt,oe,It,Bt,B.COLOR_BUFFER_BIT,B.NEAREST):je?B.copyTexSubImage3D(de,St,Yt,oe,me+He,Ht,Gt,It,Bt):B.copyTexSubImage2D(de,St,Yt,oe,Ht,Gt,It,Bt);A.bindFramebuffer(B.READ_FRAMEBUFFER,null),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else je?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(de,St,Yt,oe,me,It,Bt,Ut,ae,kt,he.data):Z.isCompressedArrayTexture?B.compressedTexSubImage3D(de,St,Yt,oe,me,It,Bt,Ut,ae,he.data):B.texSubImage3D(de,St,Yt,oe,me,It,Bt,Ut,ae,kt,he):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,St,Yt,oe,It,Bt,ae,kt,he.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,St,Yt,oe,he.width,he.height,ae,he.data):B.texSubImage2D(B.TEXTURE_2D,St,Yt,oe,It,Bt,ae,kt,he);B.pixelStorei(B.UNPACK_ROW_LENGTH,ee),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ai),B.pixelStorei(B.UNPACK_SKIP_ROWS,qe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,hs),St===0&&Z.generateMipmaps&&B.generateMipmap(de),A.unbindTexture()},this.initRenderTarget=function(w){V.get(w).__webglFramebuffer===void 0&&G.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?G.setTextureCube(w,0):w.isData3DTexture?G.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?G.setTexture2DArray(w,0):G.setTexture2D(w,0),A.unbindTexture()},this.resetState=function(){C=0,R=0,F=null,A.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var Me=(i,t)=>.09*Math.sin(i*.075)+.1*Math.sin(t*.18)+Math.max(0,Math.abs(t)-37)*.012*(1+Math.sin(i*.025+t*.1)),We=i=>3.5*Math.sin(i/55)+2.1*Math.sin(i/26),Qn=i=>14.9+1.4*Math.sin(i/38+.7),Ks=-.73,Re=-4,os=21.8,as=10.6,Ke=i=>{let t=Math.min(1,Math.abs(i-We(Re))/os);return .13+5.65*Math.pow(1-t*t,1.28)},js={west:-164,east:178,south:75,north:-74};function cs(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}var Se=[{name:"\u90CA\u91CE",area:"\u57CE\u5916\u7530\u7574",x:-126,z:25,look:[-112,1.9,18],sound:"field",note:"\u5C0F\u8DEF\u7A7F\u8FC7\u9EA6\u5730\u3002\u7530\u57C2\u90A3\u5934\u6709\u4EBA\u6311\u62C5\uFF0C\u6CBF\u6CB3\u518D\u8D70\u4E00\u6BB5\u5C31\u662F\u8D27\u6808\u3002",path:[[-115,23],[-102,21.2],[-90,20]]},{name:"\u6C74\u6CB3",area:"\u6CB3\u5CB8\u7EA4\u9053",x:-79,z:18,look:[-53,1,4],sound:"river",note:"\u8D27\u8239\u987A\u7740\u6C34\u9053\u524D\u884C\u3002\u9760\u8FD1\u8679\u6865\u65F6\uFF0C\u8239\u5DE5\u628A\u9AD8\u9AD8\u7684\u6845\u6746\u653E\u4F4E\u3002",path:[[-68,18],[-55,18],[-46,19]]},{name:"\u7801\u5934",area:"\u6CB3\u5CB8\u8D27\u6808",x:-36,z:18,look:[-27,1.1,12],sound:"dock",note:"\u811A\u592B\u4ECE\u8239\u4E0A\u6311\u8D27\u8FC7\u8DF3\u677F\u3002\u8D27\u9001\u8FDB\u6808\uFF0C\u518D\u7531\u63A8\u8F66\u6CBF\u6CB3\u8FD0\u8D70\u3002",path:[[-27,20],[-16,21],[-7,23],[-4,22]]},{name:"\u8679\u6865",area:"\u6C74\u6CB3\u6E21\u53E3",x:-4,z:-.1,look:[12,3,-9],sound:"dock",note:"\u8E0F\u7740\u6728\u677F\u4E0A\u6865\uFF0C\u8FC7\u6865\u6276\u680F\u5C31\u80FD\u770B\u89C1\u8239\u3002\u4E24\u5CB8\u644A\u5B50\u90FD\u6328\u7740\u6865\u5934\u3002",path:[[-4,-10],[-4,-22],[3,-23],[14,-23]]},{name:"\u8857\u5E02",area:"\u57CE\u5916\u5927\u8857",x:23,z:-24,look:[42,1.3,-24],sound:"market",note:"\u7AF9\u68DA\u628A\u8857\u8FB9\u906E\u51FA\u4E00\u6392\u9634\u5F71\u3002\u4E70\u5BA2\u5F80\u644A\u524D\u9760\uFF0C\u7ED9\u6311\u62C5\u548C\u63A8\u8F66\u7684\u4EBA\u8BA9\u51FA\u8857\u5FC3\u3002",path:[[32,-24],[43,-25],[46,-26.2]]},{name:"\u5546\u94FA",area:"\u6CBF\u8857\u8D27\u94FA",x:48,z:-30.7,look:[48.5,1.35,-34.2],sound:"shop",note:"\u67DC\u4E0A\u6446\u7740\u9752\u74F7\u548C\u5E03\u5339\u3002\u6CBF\u8D27\u67B6\u770B\u8FC7\u53BB\uFF0C\u5927\u7F50\u653E\u5728\u4E0B\u5C42\uFF0C\u5C0F\u76CF\u6446\u5728\u4E0A\u9762\u3002",path:[[48,-27],[53,-24],[64,-24],[68,-27]]},{name:"\u9152\u697C",area:"\u4E34\u8857\u9152\u8086",x:69,z:-31,look:[65.7,1.46,-36],sound:"shop",note:"\u4ECE\u6728\u67F1\u4E4B\u95F4\u8D70\u8FDB\u53BB\uFF0C\u6CBF\u7A97\u6446\u7740\u684C\u51F3\u3002\u5C4B\u5916\u7684\u8857\u58F0\u8FD8\u542C\u5F97\u89C1\u3002",path:[[69,-27],[74,-24],[82,-24],[90,-25]]},{name:"\u57CE\u95E8",area:"\u5165\u57CE\u95E8\u9053",x:99,z:-25,look:[111,2.3,-25],sound:"market",note:"\u95E8\u9053\u7A7F\u8FC7\u539A\u539A\u7684\u57CE\u5899\u3002\u8F66\u8F6E\u538B\u8FC7\u77F3\u94FA\uFF0C\u54CD\u58F0\u5728\u5899\u91CC\u56DE\u8361\u3002",path:[[105,-25],[115,-25],[124,-25],[129,-29],[129,-35]]},{name:"\u57CE\u5185\u8857\u5DF7",area:"\u574A\u5DF7\u4EBA\u5BB6",x:129,z:-45,look:[130,1.6,-59],sound:"lane",note:"\u79BB\u5F00\u5927\u8857\uFF0C\u5C4B\u6A90\u4E0B\u6302\u7740\u667E\u6652\u7684\u5E03\u3002\u7A84\u5DF7\u4E24\u5934\u90FD\u6709\u901A\u5F80\u8857\u5E02\u7684\u5C0F\u8DEF\u3002",path:[]}],fc=[{position:[36,8.4,24.3],look:[-11,3.2,7.5]},{position:[-40,9,26],look:[8,3,-11]},{position:[5,23,-12],look:[48,0,-25]}];function hh(){let i=cs(5905),t=256,e=new Float32Array(4096).map(()=>i()),n=Qt.lerp;function s(h,u){let d=Math.floor(h),m=Math.floor(u),_=h-d,v=u-m;_*=_*(3-2*_),v*=v*(3-2*v);let p=(f,S)=>e[(S%64+64)%64*64+(f%64+64)%64];return n(n(p(d,m),p(d+1,m),_),n(p(d,m+1),p(d+1,m+1),_),v)}let r=(h,u)=>{let d=document.createElement("canvas");d.width=d.height=t;let m=d.getContext("2d"),_=m.createImageData(t,t);for(let p=0;p<t;p++)for(let f=0;f<t;f++){let S=f/t,T=p/t,x=s(S*8,T*8),E=s(S*64,T*64),C=1+(x-.5)*.22+(E-.5)*.15+(i()-.5)*.09;if(h==="wood"){let F=s(S*4,T*4)*2.1+Math.sin(T*7+S*3)*.5,y=Math.pow(.5+.5*Math.sin(S*400+F*7),8);C+=(s(S*56,T*4)-.5)*.29-y*.13}if(h==="cloth"&&(C+=(f%3===0?-.054:.024)+(p%3===0?-.055:.024)),h==="stone"||h==="pave"){let F=Math.floor(T*6),y=h==="pave"?.045:.013,M=(S*5+F*.5+y*Math.sin(p*.17))%1,O=T*6%1;M<.037||O<.062?C*=h==="pave"?.78:.64:C+=(s(Math.floor(S*5+F*.5)+9,F+11)-.5)*.19}if(h==="tile"){let F=S*8%1,y=T*6%1,M=Math.pow(Math.sin(Math.PI*F),.6);C=C*(.72+M*.3)-(y<.07?.19:0),F<.065&&(C+=.19)}h==="grass"&&(C+=(s(S*18,T*32)-.5)*.26);let R=(p*t+f)*4;for(let F=0;F<3;F++)_.data[R+F]=u[F]*C;_.data[R+3]=255}m.putImageData(_,0,0);let v=new Nn(d);return v.colorSpace=ye,v.wrapS=v.wrapT=hi,v.anisotropy=8,v},o={};for(let[h,u]of Object.entries({oldwood:["wood",[161,121,85]],timber:["wood",[133,96,67]],beam:["wood",[106,77,55]],plaster:["plain",[207,180,134]],wall:["plain",[189,167,133]],stone:["stone",[155,150,131]],tile:["tile",[123,121,113]],tileDark:["tile",[112,111,104]],brick:["stone",[135,129,110]],linen:["cloth",[224,197,142]],sage:["cloth",[144,153,118]],rust:["cloth",[160,109,75]],straw:["cloth",[189,155,92]],soil:["plain",[159,138,98]],path:["plain",[174,151,112]],pave:["pave",[166,154,128]],grass:["grass",[119,132,66]]}))o[h]=r(...u);let a=document.createElement("canvas");a.width=a.height=128;let l=a.getContext("2d"),c=l.createImageData(128,128);for(let h=0;h<128;h++)for(let u=0;u<128;u++){let d=2*Math.PI/128,m=u*d*7+h*d*2,_=u*d*3-h*d*8+Math.sin(u*d*2),v=u*d*9+h*d*11,p=(h*128+u)*4;c.data[p]=127+32*Math.cos(m)+23*Math.cos(_)+9*Math.sin(v),c.data[p+1]=127+17*Math.cos(m)-33*Math.cos(_)+13*Math.sin(v),c.data[p+2]=244,c.data[p+3]=255}return l.putImageData(c,0,0),o.waterNormal=new Nn(a),o.waterNormal.wrapS=o.waterNormal.wrapT=hi,o}var Et=(i,t,e)=>new W(i,t,e),sg=Et(0,1,0),uh=new yn(1,1,1),Ie=new Je(1,1,1,9),pc=new Je(.7,1,1,10),rg=new Je(1,1,1,7),Qs=new Ns(1,0);function mn(i,t={}){return new pi({map:i,roughness:.91,...t})}function dh(i,t,e){let n=cs(1119),s={};for(let L of["oldwood","timber","beam","plaster","wall","stone","tile","tileDark","brick","linen","sage","rust","straw","soil","path","pave","grass"])s[L]=mn(t[L]);Object.assign(s,{bark:mn(t.beam,{color:9210728}),lacquer:mn(t.timber,{color:11758416}),black:mn(null,{color:3220762}),ceramic:mn(null,{color:10662806,roughness:.34,metalness:.03}),paleCeramic:mn(null,{color:13220237,roughness:.49}),iron:mn(null,{color:5588789,roughness:.59,metalness:.33}),green:mn(null,{color:8423756}),foliage:mn(null,{vertexColors:!0,side:_e,roughness:1})});let r=s.linen.clone();r.side=_e,r.onBeforeCompile=L=>{L.uniforms.windTime=e,L.vertexShader=`uniform float windTime;
`+L.vertexShader,L.vertexShader=L.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.y += .065 * sin(windTime * 1.8 + position.x * 2.4 + position.z * 3.0);`)},s.awning=r,s.foliage.onBeforeCompile=L=>{L.uniforms.windTime=e,L.vertexShader=`uniform float windTime;
`+L.vertexShader,L.vertexShader=L.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x += .060 * sin(windTime * 1.40 + position.z * .28 + position.y * 1.32) * min(position.y,.9);`)};let o=document.createElement("canvas");o.width=o.height=128;let a=o.getContext("2d"),l=cs(883),c=["#738640","#9aa65b","#7e914b","#637742","#879750","#a1aa63","#5c6d38"];for(let L=0;L<520;L++){let D=l()*Math.PI*2,A=Math.sqrt(l())*.95,U=64+Math.cos(D)*A*59,V=64+Math.sin(D)*A*56,G=2.1+l()*4.2;a.fillStyle=c[Math.floor(l()*c.length)],a.beginPath(),a.ellipse(U,V,G,G*(.25+l()*.29),D-l()*1.4,0,Math.PI*2),a.fill()}let h=new Nn(o);h.colorSpace=ye,h.anisotropy=4,s.bough=mn(h,{alphaTest:.45,side:_e}),s.bough.onBeforeCompile=s.foliage.onBeforeCompile;let u=new Map,d=new Map,m=[],_=[],v=new Map,p=new xe,f=()=>.8+n()*.23,S=new Nt;function T(L,D,A,U,V=0,G=f()){let ht=D+"/"+L.id;u.has(ht)||u.set(ht,{geo:L,mat:D,entries:[]}),p.position.copy(A),p.scale.copy(U),typeof V=="number"?p.rotation.set(0,V,0):p.quaternion.copy(V),p.updateMatrix(),u.get(ht).entries.push([p.matrix.clone(),G])}function x(L,D,A,U,V,G,ht,xt=0,b){T(uh,L,Et(D,A,U),Et(V,G,ht),xt,b)}function E(L,D,A,U,V=U,G=uh){let ht=A.clone().sub(D),xt=new ze().setFromUnitVectors(sg,ht.clone().normalize());T(G,L,D.clone().lerp(A,.5),Et(U,ht.length(),V),xt)}function C(L,D,A,U,V,G=[0,0,1,1],ht=[1,1,1]){d.has(L)||d.set(L,{points:[],uv:[],colors:[]});let xt=d.get(L);for(let J of[D,A,U,D,U,V])xt.points.push(J.x,J.y,J.z),xt.colors.push(...ht);let[b,g,P,z]=G;xt.uv.push(b,g,P,g,P,z,b,g,P,z,b,z)}function R(L,D,A,U){m.push({x0:L-A/2,x1:L+A/2,z0:D-U/2,z1:D+U/2})}function F(L,D,A,U){let V=Math.cos(U),G=Math.sin(U);return(ht,xt,b)=>Et(L+ht*V+b*G,D+xt,A-ht*G+b*V)}function y(L,D,A,U,V,G,ht,xt,b,g){let P=L(U,V,G);x(A,P.x,P.y,P.z,ht,xt,b,D,g)}function M(L,D,A,U,V){let G=L(D-U/2,0,A-V/2),ht=L(D+U/2,0,A+V/2);R((G.x+ht.x)/2,(G.z+ht.z)/2,Math.abs(G.x-ht.x),Math.abs(G.z-ht.z))}function O(L,D){let A=L+"/"+D;if(v.has(A))return v.get(A);let U=document.createElement("canvas");U.width=D?96:200,U.height=D?200:74;let V=U.getContext("2d");V.fillStyle=D?"#bca877":"#5b3726",V.fillRect(0,0,U.width,U.height),V.strokeStyle=D?"#6a4129":"#a9945e",V.lineWidth=4,V.strokeRect(7,7,U.width-14,U.height-14),V.fillStyle=D?"#342617":"#ece0b2",V.textAlign="center",V.textBaseline="middle",V.font="bold "+(D?61:47)+'px "Songti SC", SimSun, serif',D?[...L].forEach((xt,b)=>V.fillText(xt,48,55+b*76)):V.fillText(L,U.width/2,U.height/2+1);let G=new Nn(U);G.colorSpace=ye;let ht=mn(G,{side:_e});return v.set(A,ht),ht}function H(L,D,A,U,V,G,ht,xt,b=!1){let g=new le(new dn(ht,xt),O(A,b));g.position.copy(L(U,V,G)),g.rotation.y=D,i.add(g)}function et(){for(let L of[-1,1]){let D=A=>We(A)+L*Qn(A);for(let A=-267;A<273;A+=3){let U=A+3,V=L>0?A<-88||A>70:A<-46||A>182;for(let xt=0;xt<20;xt++){let g=(it,Tt)=>Me(it,Tt)-.04,P=D(A)+L*xt*4.15,z=D(A)+L*(xt+1)*4.15,J=D(U)+L*xt*4.15,k=D(U)+L*(xt+1)*4.15,ut=.91+.07*Math.sin(A*.037+xt*.59)+.09*n();C(V?"grass":"soil",Et(A,g(A,P),P),Et(A,g(A,z),z),Et(U,g(U,k),k),Et(U,g(U,J),J),[A/5,P/5,U/5,z/5],[ut,ut,ut])}let G=D(A),ht=D(U);C("soil",Et(A,Me(A,G),G),Et(U,Me(U,ht),ht),Et(U,-1.61,ht-L*1.45),Et(A,-1.61,G-L*1.45),[A/4,0,U/4,1])}}for(let L=0;L<850;L++){let D=-179+n()*367,A=n()<.55?1:-1,V=We(D)+A*Qn(D)+A*(n()*.64-.31);if(D>-11&&D<4||D>-47&&D<-20&&A===1)continue;let G=.17+n()*.62;T(Qs,"stone",Et(D,Me(D,V)-G*.25,V),Et(G,.22+G*.55,G*.57),n()*6.28)}}function j(L,D,A="path"){for(let U=1;U<L.length;U++){let[V,G]=L[U-1],[ht,xt]=L[U],b=ht-V,g=xt-G,P=Math.hypot(b,g),z=Math.ceil(P/1.75),J=-g/P,k=b/P,ut=(it,Tt)=>{let gt=1+.036*Math.sin((V+b*it)*1.67+(G+g*it)*.79),mt=V+b*it+J*Tt*gt,dt=G+g*it+k*Tt*gt;return Et(mt,Me(mt,dt)+(A==="pave"?.044:.023),dt)};for(let it=0;it<z;it++){let Tt=P/z/4.1;C(A,ut(it/z,-D/2),ut(it/z,D/2),ut((it+1)/z,D/2),ut((it+1)/z,-D/2),[0,it*Tt,D/4.4,(it+1)*Tt])}}}function Q(L,D,A,U,V,G="tile",ht=!0){let xt=D/2,b=A/2,g=(P,z,J)=>{let k=.29*Math.pow(Math.min(1,Math.abs(P/xt)),5.4);return L(P,U+V*Math.pow(1-z,1.37)+k*(.46+.89*z*z),J*z*b)};for(let P of[-1,1]){for(let J=0;J<8;J++)for(let k=0;k<12;k++){let ut=-xt+D*k/12,it=-xt+D*(k+1)/12;C(G,g(ut,J/8,P),g(it,J/8,P),g(it,(J+1)/8,P),g(ut,(J+1)/8,P),[ut/2.2,J*A/(8*3.5),it/2.2,(J+1)*A/(8*3.5)])}for(let J=0;J<12;J++){let k=g(-xt+D*J/12,1,P),ut=g(-xt+D*(J+1)/12,1,P);E("beam",k,ut,.16,.19)}if(ht){for(let J=0;J<Math.floor(D/.28);J++){let k=-xt+.12+J*.28,ut=g(k,.94,P),it=g(k,1,P);if(it.z+=P*.025,ut.y+=.024,it.y+=.02,E(G,ut,it,.074,.074,rg),J%2===0){let Tt=g(k,1,P);E("timber",Tt.clone().add(Et(0,-.1,0)),g(k,.82,P).add(Et(0,-.23,0)),.084,.092)}}for(let J of[-xt,xt])for(let k=0;k<8;k++)E("beam",g(J,k/8,P),g(J,(k+1)/8,P),.14,.11)}}for(let P=0;P<12;P++){let z=g(-xt+D*P/12,0,1),J=g(-xt+D*(P+1)/12,0,1);z.y+=.073,J.y+=.073,E(G,z,J,.175,.155,Ie)}for(let P of[-1,1]){let z=g(P*xt,0,1),J=g(P*xt,0,1);J.x+=P*.21,J.y+=.23,E(G,z,J,.13,.13,Ie)}}function K(L,D,A,U,V,G,ht){let xt=(b,g,P,z,J,k,ut)=>y(L,D,b,g,P,z,J,k,ut);xt("black",A,U,V,G,ht,.075);for(let b of[-1,1])xt("oldwood",A+b*G/2,U,V+.042,.095,ht+.1,.1),xt("oldwood",A,U+b*ht/2,V+.042,G,.09,.1);for(let b=1;b<7;b++)xt("timber",A-G/2+b*G/7,U,V+.051,.041,ht,.058);for(let b=1;b<5;b++)xt("timber",A,U-ht/2+b*ht/5,V+.049,G,.036,.058)}function yt(L,D,A,U=.5,V="ceramic"){T(pc,V,Et(L,D+U*.24,A),Et(U*.33,U*.47,U*.33),n()*6),T(Ie,V,Et(L,D+U*.49,A),Et(U*.24,U*.13,U*.24),0),T(Ie,"black",Et(L,D+U*.562,A),Et(U*.15,.012,U*.15),0)}function rt(L,D,A,U=.73){x("oldwood",L,D+U*.38,A,U,U*.76,U*.77);for(let V of[-1,1])x("beam",L+V*U*.31,D+U*.4,A,U*.1,U*.82,U*.81);x("timber",L,D+U*.78,A,U*1.02,.057,U*.79)}function Mt(L,D,A,U=.74){T(pc,"straw",Et(L,D+U*.26,A),Et(U*.43,U*.52,U*.43),Math.PI),T(Ie,"oldwood",Et(L,D+U*.56,A),Et(U*.45,.053,U*.45)),T(Ie,"straw",Et(L,D+U*.583,A),Et(U*.37,.039,U*.37))}function tt(L,D,A,U,V,G){let b=(g,P)=>L((g/10-.5)*A,V-.54*(P/5)-.22*Math.sin(Math.PI*P/5)+.035*Math.sin(g*1.8)*P/5,G+P/5*U);for(let g=0;g<5;g++)for(let P=0;P<10;P++)C("awning",b(P,g),b(P+1,g),b(P+1,g+1),b(P,g+1),[P/5,g/4,(P+1)/5,(g+1)/4]);for(let g=0;g<10;g++){let P=b(g,5),z=b(g+1,5);C("awning",P,z,z.clone().add(Et(0,-.18,0)),P.clone().add(Et(0,-.18,0)))}for(let g of[-.47,.47]){let P=L(g*A,0,G+U-.1),z=L(g*A,V-.51,G+U-.1);E("oldwood",P,z,.046,.046,Ie),E("timber",z,L(g*A,V,G-.1),.047,.047,Ie),M(L,g*A,G+U-.1,.09,.09)}E("timber",b(0,5),b(10,5),.044,.044,Ie)}function pt(L,D,A,U,{theta:V=0,floors:G=1,kind:ht="home",label:xt,simple:b=!1,roofKind:g="tile"}={}){let P=Me(L,D),z=F(L,P,D,V),J=G===1?3.31:6.13,k=U/2,ut=-U/2,it=["store","tavern","market"].includes(ht),Tt=!b,gt=(dt,N,q,Y,nt,I,X,st)=>y(z,V,dt,N,q,Y,nt,I,X,st);if(gt("stone",0,.045,0,A+.05,.24,U+.1),!it)gt("plaster",0,J/2,0,A,J,U),M(z,0,0,A,U);else{gt("plaster",0,J/2,ut,A,J,.23),M(z,0,ut,A,.28);for(let q of[-1,1])gt("plaster",q*A/2,J/2,0,.2,J,U),M(z,q*A/2,0,.24,U);gt("beam",0,J-.17,0,A,.32,U);for(let q=-U/2+.12;q<U/2;q+=.28)gt("oldwood",0,.181,q,A-.25,.08,.24);G===2&&gt("beam",0,3.2,0,A,.2,U);let dt=z(0,P+.23,k),N=V===0||V===Math.PI;_.push({x0:dt.x-(N?A:U)/2,x1:dt.x+(N?A:U)/2,z0:D-(N?U:A)/2,z1:D+(N?U:A)/2,y:P+.225})}let mt=Math.max(2,Math.round(A/2.1));for(let dt=0;dt<=mt;dt++){let N=(dt/mt-.5)*A;for(let q of[k+.024,ut-.025])if(gt(G===2?"lacquer":"timber",N,J/2,q,.17,J,.175),gt("stone",N,.14,q,.28,.21,.27),Tt){let Y=dt===0?1:dt===mt?-1:1;E("timber",z(N,J-.7,q),z(N+Y*.48,J-.15,q),.11,.12)}}for(let dt of[.75,3.02,J-.2])(dt!==.75||!it)&&gt("timber",0,dt,k+.075,A+.19,.14,.14);if(Tt){for(let dt of[-1,1]){gt("timber",dt*(A/2+.035),J-.24,0,.17,.19,U+.15);for(let nt=1;nt<Math.ceil(U/2);nt++)gt("timber",dt*(A/2+.025),J/2,-U/2+nt*2,.12,J,.11);let N=z(dt*(A/2-.01),J-.15,-U/2+.08),q=z(dt*(A/2-.01),J-.15,U/2-.08),Y=z(dt*(A/2-.01),J+Math.min(A,U)*.3,0);C("plaster",N,q,Y,Y)}if(!it){gt("beam",0,1.01,k+.056,1.23,2.02,.11);for(let dt=0;dt<6;dt++)gt("oldwood",.15*(dt-2.5),.98,k+.112,.136,1.91,.035);for(let dt of[-1,1])K(z,V,dt*A*.31,1.94,k+.08,A*.22,1.03)}if(G===2)if(ht==="tavern"){gt("oldwood",0,3.34,k+.53,A,.17,1.45);for(let dt=0;dt<mt;dt++){let N=(dt/mt-.5)*A;gt("lacquer",N,3.78,k+1.19,.12,.9,.12),gt("oldwood",N+A/mt*.5,3.96,k+1.2,A/mt,.09,.091);for(let q=1;q<=5;q++)gt("oldwood",N+q*A/mt/6,3.67,k+1.2,.061,.58,.06)}}else for(let dt=0;dt<mt;dt++)K(z,V,((dt+.5)/mt-.5)*A,4.62,k+.081,A/mt*.67,1.48)}if(G===2&&ht!=="tavern"){let dt=(N,q,Y)=>z(-N,q,-Y);for(let N=0;N<mt;N++)K(dt,V+Math.PI,((N+.5)/mt-.5)*A,4.52,k+.075,A/mt*.65,1.42);gt("beam",0,3.16,ut-.12,A+.14,.11,.14)}if(Q(z,A+1.52,U+1.7,J+.02,Math.min(A,U)*.31,g,Tt),G===2&&Tt&&Q(z,A+.9,U+2.4,3.09,.68,"tileDark",!0),it){if(ht==="tavern"){for(let Y of[-1,1])for(let nt=0;nt<4;nt++){let I=k-1.2-nt*2.3;gt("timber",Y*(A/2-.13),1.65,I,.14,3.3,.16)}for(let Y=0;Y<7;Y++)gt("timber",0,2.98,k-.21-Y*U/7,A,.2,.14);gt("oldwood",0,1.09,ut+.44,A*.55,.142,.47),gt("timber",0,.67,ut+.4,A*.56,.78,.5);for(let Y=0;Y<8;Y++){let nt=z((Y/7-.5)*A*.52,1.17,ut+.37);yt(nt.x,nt.y,nt.z,.67+Y%3*.095,"paleCeramic")}let dt=z(-.89,2.91,ut+.18),N=z(.93,2.91,ut+.18);C("awning",dt,N,z(.93,1.77,ut+.17),z(-.89,1.77,ut+.17)),H(z,V,"\u9152",0,2.37,ut+.25,.62,.59);for(let Y of[-4.85,4.85]){let nt=z(Y,2.35,k-2);T(Qs,"rust",nt,Et(.19,.24,.19),0),E("iron",nt.clone().add(Et(0,.17,0)),nt.clone().add(Et(0,.76,0)),.018,.018,Ie)}let q=[[-3.8,.25],[3.5,.15],[-2.9,-3.4],[2.9,-3.4]];for(let[Y,nt]of q){gt("oldwood",Y,.85,nt,1.63,.11,1.19);for(let X of[-.63,.63])for(let st of[-.44,.44])gt("timber",Y+X,.49,nt+st,.11,.73,.11);gt("timber",Y,.47,nt+.83,1.48,.1,.31),gt("timber",Y,.47,nt-.83,1.48,.1,.31),M(z,Y,nt,1.68,1.23);for(let X of[-.54,.53]){let st=z(Y+X,.92,nt+.16);yt(st.x,st.y,st.z,.27,"paleCeramic")}let I=z(Y,.9,nt-.3);yt(I.x,I.y,I.z,.59,"paleCeramic")}}else{gt("oldwood",0,1.09,-.85,A-.7,.16,.98),gt("timber",0,.55,-.85,A-.81,.95,.82),M(z,0,-.85,A-.59,.99);for(let dt=0;dt<2;dt++){let N=(dt-.5)*A*.82;gt("oldwood",N,1.61,ut+.5,A*.35,.1,.55),gt("oldwood",N,2.16,ut+.49,A*.35,.09,.56)}for(let dt=0;dt<8;dt++){let N=z((dt/7-.5)*(A-1),1.18,-.78+n()*.34);ht==="market"?Mt(N.x,N.y,N.z,.4+n()*.43):yt(N.x,N.y,N.z,.43+n()*.7,dt%3?"ceramic":"paleCeramic")}for(let dt=0;dt<6;dt++)gt(dt%2?"linen":"sage",A*.28,.32+dt*.16,k-.7,.99,.145,.64)}if(ht!=="tavern")tt(z,V,A+.4,1.95,2.94,k);else for(let dt of[-3.9,3.85]){let N=z(dt,2.54,k+.78);T(Qs,"rust",N,Et(.24,.31,.24),0),E("iron",N.clone().add(Et(0,.26,0)),N.clone().add(Et(0,.55,0)),.018,.018,Ie)}xt&&(gt("beam",0,ht==="tavern"?3.6:2.71,k+.2,2.05,.53,.11),H(z,V,xt,0,ht==="tavern"?3.6:2.71,k+.27,1.99,.49),H(z,V,xt,A/2-.18,2.29,k+1.46,.49,1.16,!0))}}function Dt(L,D,A,U,V){let G=Me(L,D),ht=F(L,G,D,A),xt=(g,P,z,J,k,ut,it)=>y(ht,A,g,P,z,J,k,ut,it);xt("timber",0,.83,0,U,.12,1.06);for(let g of[-1,1])xt("beam",g*U*.41,.4,.22,.106,.82,.11),xt("beam",g*U*.41,.4,-.24,.106,.82,.11),xt("oldwood",g*U*.5,1.13,-.58,.1,2.28,.1);tt(ht,A,U+.48,2.06,2.46,-.63);let b=Math.floor(U/.43);for(let g=0;g<b;g++){let P=ht((g/(b-1)-.5)*U*.82,.93,n()*.4-.18);if(V==="fruit"){Mt(P.x,P.y,P.z,.52);for(let z=0;z<5;z++)T(Qs,z%2?"green":"rust",P.clone().add(Et((n()-.5)*.25,.35,(n()-.5)*.24)),Et(.082,.071,.073),n()*6)}else if(V==="cloth"){let z=ht((g/(b-1)-.5)*U*.82,.97,.06);x(["linen","sage","rust"][g%3],z.x,z.y,z.z,.29,.16,.63,A)}else yt(P.x,P.y,P.z,.46+n()*.44,g%2?"ceramic":"paleCeramic")}M(ht,0,0,U,1.08)}function wt(L,D,A,U){for(let G=0;G<A/.27;G++)x("oldwood",L-A/2+G*.27,.44-.08,D,.247,.16,U);for(let G=0;G<=A/2.1;G++){let ht=L-A/2+G*2.1;for(let xt of[-1,1])x("beam",ht,-.5,D+xt*(U*.43),.28,1.92,.28),x("oldwood",ht,.66,D+xt*U*.43,.31,.58,.31)}_.push({x0:L-A/2,x1:L+A/2,z0:D-U/2,z1:D+U/2,y:.44});for(let G=0;G<12;G++){let ht=L-A*.41+G*(A*.82/11);G%3===0?rt(ht,.44,D-U*.3,.7+n()*.45):Mt(ht,.44,D-U*.3,.72+n()*.48)}}function Ft(){let L=We(Re),D=L-os,A=L+os,U=144;for(let V=0;V<U;V++){let G=Qt.lerp(D,A,V/U),ht=Qt.lerp(D,A,(V+1)/U);for(let xt=0;xt<5;xt++){let b=as/5,g=Re-as/2+b*(xt+.5);x("oldwood",g,Ke((G+ht)/2)-.103,(G+ht)/2,b-.014,.178,ht-G-.009,0,.74+n()*.28)}}for(let V of[-4.9,-3.35,-1.65,0,1.65,3.35,4.9]){let G=Re+V;for(let ht=0;ht<17;ht++){let xt=ht/17,b=(ht+1)/17,g=Qt.lerp(D+.43,A-.43,xt),P=Qt.lerp(D+.43,A-.43,b);E("beam",Et(G,Ke(g)-.76,g),Et(G,Ke(P)-.76,P),.4,.47);let z=ht%2===0?.99:.73;E("timber",Et(G+.22,Ke(g)-z-.18,g),Et(G+.22,Ke(P)-.35,P),.32,.37)}for(let ht=0;ht<12;ht++){let xt=Qt.lerp(D+.75,A-.75,ht/12),b=Qt.lerp(D+.75,A-.75,(ht+1)/12);E("timber",Et(G-.14,Ke(xt)-.94,xt),Et(G-.14,Ke(b)-.94,b),.35,.37)}}for(let V=0;V<=22;V++){let G=Qt.lerp(D,A,V/22),ht=Qt.lerp(D,A,(V+1)/22),xt=Ke(G);E("beam",Et(Re-5.65,xt-.57,G),Et(Re+5.65,xt-.57,G),.24,.34);for(let b of[-1,1]){let g=Re+b*5.18;if(x("timber",g,xt+.49,G,.15,1.15,.2),T(pc,"beam",Et(g,xt+1.12,G),Et(.131,.18,.13)),V!==22){for(let P of[.37,.94])E("oldwood",Et(g,xt+P,G),Et(g,Ke(ht)+P,ht),.105,.12);E("timber",Et(g,xt+.14,G),Et(g,Ke(ht)+.37,ht),.061,.065)}}}for(let V of[-1,1]){let G=L+V*(os-.12);x("stone",Re,-.53,G,as+1.2,1.22,1.48),x("stone",Re,.04,G+V*.82,as+.66,.15,1)}H(F(Re,0,L,Math.PI/2),Math.PI/2,"\u8679\u6A4B",0,Ke(L)-.34,5.38,1.6,.43)}function zt(){let L=-Math.PI/2,U=F(106.7,0,-25,L),V=8.75,G=8.5,ht=3.98,xt=2.95,b=k=>xt+Math.sqrt(Math.max(0,ht*ht-k*k)),g=V-.11;for(let[k,ut]of[[-49,-ht],[ht,13.6]]){y(U,L,"wall",(k+ut)/2,V/2,0,ut-k,V,G),y(U,L,"brick",(k+ut)/2,.46,0,ut-k,.95,G+.14),y(U,L,"brick",(k+ut)/2,g,0,ut-k,.29,G+.38),M(U,(k+ut)/2,0,ut-k,G);for(let it=k+.3;it<ut-.25;it+=1.25)for(let Tt of[-1,1])y(U,L,"brick",it,V+.32,Tt*(G/2-.18),.72,.77,.42);for(let it=k+.4;it<ut-.35;it+=3.45)for(let Tt of[-1,1])y(U,L,"stone",it,2.15,Tt*G/2,.22,2.6,.17,.82)}let P=G/2,z=28;for(let k=0;k<z;k++){let ut=-ht+k/z*ht*2,it=-ht+(k+1)/z*ht*2;for(let Tt of[-1,1]){let gt=Tt*P;C("brick",U(ut,b(ut),gt),U(it,b(it),gt),U(it,V,gt),U(ut,V,gt),[ut/3,0,it/3,1.7])}C("brick",U(ut,b(ut),P),U(it,b(it),P),U(it,b(it),-P),U(ut,b(ut),-P),[ut/3,0,it/3,2.6],[.77,.73,.66])}for(let k=0;k<25;k++){let ut=Math.PI*k/25+.01,it=Math.PI*(k+1)/25-.009;for(let Tt of[-1,1]){let gt=(mt,dt)=>U(Math.cos(mt)*dt,xt+Math.sin(mt)*dt,Tt*(P+.095));C("stone",gt(ut,ht+.028),gt(it,ht+.028),gt(it,ht+.6),gt(ut,ht+.6),[0,0,.55,.55],[.95,.91,.82])}}for(let k of[-1,1])for(let ut=0;ut<5;ut++)y(U,L,"stone",k*(ht+.32),ut*.57+.3,P+.1,.64,.55,.24);y(U,L,"stone",0,V+.03,0,14.5,.31,9.4),y(U,L,"plaster",0,V+1.6,0,11.8,3.11,5.6);for(let k of[-5.8,-3.87,-1.93,0,1.93,3.87,5.8]){for(let ut of[-2.86,2.86])y(U,L,"lacquer",k,V+1.66,ut,.25,3.2,.29);Math.abs(k)<5.7&&K(U,L,k,V+1.7,2.92,1.08,1.29)}Q(U,15.8,10.5,V+3.3,2.65,"tileDark"),Q(U,13.3,8.9,V+1.1,.95,"tile"),H(U,L,"\u6C74\u4EAC",0,7.86,P+.13,1.95,.54),j([[94,-25],[119,-25]],8.7,"pave")}function ct(L,D,A,U=!1){let V=Me(L,D),G=(U?7:6.6)*A,ht=n()*Math.PI*2,xt=Et(Math.cos(ht)*A*.75,0,Math.sin(ht)*A*.75),b=Et(L,V-.16,D),g=Et(L,-.12+V+G*.47,D).addScaledVector(xt,.24),P=Et(L,V+G*.91,D).add(xt),z=(U?.34:.25)*A;E("bark",b,g,z*1.15,z,Ie),E("bark",g,P,z*.72,z*.64,Ie);let k=(U?[8622155,7373125,10003034,6058555,8033109]:[6452552,8227397,8689236,5598014,9740887]).map(it=>new Nt(it).toArray()),ut=U?21:18;for(let it=0;it<ut;it++){let Tt=it*2.399963+n()*.42,gt=Et(Math.cos(Tt),0,Math.sin(Tt)),mt=g.clone().lerp(P,.19+n()*.67),dt=(1.18+n()*2.6)*A,N=mt.clone().addScaledVector(gt,dt).add(Et(0,(.66+n()*1.67)*A,0)),q=mt.clone().lerp(N,.51).add(Et(0,.43*A,0));it<16&&(E("bark",mt,q,z*.24,z*.24,Ie),E("bark",q,N,z*.12,z*.12,Ie));for(let I=0;I<5;I++){let X=q.clone().lerp(N,.28+I*.19).addScaledVector(gt,(n()-.25)*A*.64);X.y+=(n()-.53)*(U?1.48:1)*A;let st=Tt+I*2.11,bt=(U?1.12:1.27)*(.67+n()*.39)*A,vt=Et(Math.sin(st)*bt,(n()-.5)*bt*.27,Math.cos(st)*bt),ft=Et(Math.cos(st)*bt*.22,bt*(U?1.32:.8),-Math.sin(st)*bt*.22);C("bough",X.clone().sub(vt).sub(ft),X.clone().add(vt).sub(ft),X.clone().add(vt).add(ft),X.clone().sub(vt).add(ft))}let Y=U?33:35,nt=U?1.1:1.58;for(let I=0;I<Y;I++){let X=.35+n()*.73,st=q.clone().lerp(N,X).addScaledVector(gt,(n()-.21)*nt*A),bt=U?.7:1.3;st.x+=(n()-.5)*1.55*nt*A,st.z+=(n()-.5)*1.55*nt*A,st.y+=(n()-.54)*bt*A,U&&(st.y-=(.08+Math.pow(n(),.52)*2.37)*X*A);let vt=(.13+n()*.28)*A,ft=(U?.052:.133)*A*(.58+n()),Pt=n()*6.28,Vt=Et(Math.cos(Pt)*ft,(n()-.5)*ft*.9,Math.sin(Pt)*ft),te=Et(Math.sin(Pt)*vt*.66,-vt*(.72+n()*.35),-Math.cos(Pt)*vt*.66);C("foliage",st.clone().addScaledVector(te,-.49),st.clone().add(Vt),st.clone().addScaledVector(te,.6),st.clone().addScaledVector(Vt,-1),[0,0,1,1],k[Math.floor(n()*k.length)])}}}function lt(L,D,A,U){let V=[7307575,10135131,9214020,11448692].map(G=>new Nt(G).toArray());for(let G=0;G<Math.floor(U/.78);G++){let ht=D+G*.78;for(let xt=L;xt<L+A;xt+=.26+n()*.12){let b=xt+n()*.13,g=ht+n()*.33,P=Me(b,g);for(let z=0;z<3;z++){let J=.28+n()*.49,k=(n()-.5)*.29,ut=Et(b+(n()-.5)*.14,P,g+(n()-.5)*.11);C("foliage",ut,ut.clone().add(Et(.034,0,0)),ut.clone().add(Et(k,J,-.04)),ut.clone().add(Et(k+.036,J,-.041)),[0,0,1,1],V[Math.floor(n()*V.length)])}}}}et(),j([[-162,34],[-142,28],[-126,25],[-108,22],[-88,19],[-73,18],[-56,18],[-49,19],[-36,19],[-20,20],[-10,22],[10,23],[39,24],[64,26]],4.6),j([[-44,-22],[-21,-23],[-4,-23],[16,-23],[32,-24],[57,-24],[79,-24],[103,-25],[128,-25],[145,-26],[174,-26]],7.1,"path"),j([[119,-25],[129,-28],[129,-45],[130,-64],[132,-72]],4.4,"pave"),j([[112,-43],[129,-45],[153,-46],[171,-45]],3.8,"soil"),j([[142,-26],[143,-39],[146,-65]],4,"soil"),j([[-6,25],[-8,42],[-18,67]],3.7,"soil"),lt(-152,32,31,16),lt(-113,29,25,13),lt(-156,54,27,14),lt(-74,43,18,12),lt(46,40,26,12),pt(-151,26,6.8,5.6,{roofKind:"straw"}),pt(-137,36,7.2,6.2,{theta:Math.PI,roofKind:"straw"}),pt(-112,13.7,6.2,5.6,{theta:Math.PI,roofKind:"tileDark"}),pt(-103,25,8,5.3,{theta:Math.PI,roofKind:"straw"}),pt(-86,33,6.6,5.6,{theta:Math.PI}),pt(-64,28.7,8.5,6.7,{theta:Math.PI,kind:"market",label:"\u8336\u68DA"}),pt(-46,27.3,9.6,7.9,{theta:Math.PI,kind:"store",label:"\u8CA8\u68E7"}),pt(-33,26.7,8.4,6.3,{theta:Math.PI,kind:"market"}),pt(-22,28.5,7.8,7.1,{theta:Math.PI}),wt(-38,14.65,14.4,5.45);let _t=-36.5,Rt=7.22,Lt=12.33,Wt=L=>Qt.lerp(.045,.45,Qt.clamp((L-Rt)/(Lt-Rt),0,1));for(let L=0;L<19;L++){let D=Rt+(L+.5)*(Lt-Rt)/19;x("oldwood",_t,Wt(D)-.059,D,1.57,.115,.249)}for(let L of[-.67,.67])E("beam",Et(_t+L,.02,Rt),Et(_t+L,.48,Lt),.105,.126);_.push({x0:-41,x1:-32.8,z0:5.65,z1:7.45,y:.044}),wt(-26,14.65,8.1,4.8),wt(15,16.2,12.6,5.35),wt(47,-13.2,13.5,4.5),Ft();for(let L=0;L<390;L++){let D=-151+n()*319,U=L%4!==0?-24+(n()>.5?1:-1)*(2.6+n()*.95):23+(n()>.5?1:-1)*(1.4+n()*1);if(Math.abs(D-106.7)<7||Math.abs(D+4)<8)continue;let V=.016+n()*.087;T(Qs,"stone",Et(D,Me(D,U)+.022,U),Et(V,.048,V*.65),n()*6,.9)}for(let[L,D,A,U,V,G]of[[5,-32.2,7.1,7.4,"market","\u8336\u8086"],[14.4,-34,8.2,9,"store","\u96DC\u8CA8"],[24.6,-34.1,9.8,10,"market","\u9999\u6599"],[36.8,-34.5,8.8,9.4,"store","\u7DA2\u5E03"],[48,-34.1,8.3,8.6,"store","\u74F7\u5668"],[58.4,-35.7,8.2,9.4,"market","\u7CE7\u884C"],[69,-36.2,11.8,12.35,"tavern","\u9152\u6A13"],[82.5,-35.7,9,10.4,"store","\u8336\u574A"],[94,-35.3,8.65,8.6,"market","\u7AF9\u5668"]])pt(L,D,A,U,{floors:2,kind:V,label:G});for(let[L,D,A,U,V,G]of[[-20,-33.6,8.5,7.4,"home"],[-10,-34.6,7.9,7.5,"market","\u8336"],[9,29.5,8.2,7,"market","\u8336"],[20,34,10.2,8.5,"tavern","\u9152"],[31,31.7,7.1,7.4,"store","\u7C73"],[45,33,7.4,7,"home"],[14,-17,6.45,4.85,"store","\u8336"],[32.5,-16.6,7.6,4.25,"market"],[62,-16.35,8.1,5.6,"market","\u679C\u5B50"],[82,-16.9,9.4,5.2,"store","\u767E\u8CA8"]])pt(L,D,A,U,{theta:D>0||D>=-18?Math.PI:0,floors:V==="home"?1:2,kind:V,label:G});for(let[L,D,A,U,V]of[[-19,18.9,0,3.2,"fruit"],[-12,19.7,0,3.6,"cloth"],[3,24.7,Math.PI,3.6,"fruit"],[17,19.8,0,3.8,"pot"],[3,-18.7,Math.PI,3.8,"pot"],[20,-19.2,Math.PI,4,"fruit"],[25.6,-20.1,Math.PI,3.4,"fruit"],[38.6,-19.4,Math.PI,4.4,"cloth"],[45,-20.4,Math.PI,3.9,"pot"],[53.9,-19.7,Math.PI,4.2,"fruit"],[73.5,-20,Math.PI,3.7,"pot"],[89.1,-19.9,Math.PI,3.2,"cloth"],[123,-18.9,Math.PI,4.2,"pot"],[136,-20.1,Math.PI,4,"fruit"]])Dt(L,D,A,U,V);zt();for(let[L,D,A,U,V,G]of[[116.2,-34.8,6.8,8.4,"store","\u98DF\u5E97"],[122,-36,5,7.4,"home"],[136.8,-34.7,7.1,8.7,"home"],[149.9,-34.8,7.6,8,"store","\u5E03"],[160.4,-35,8.5,8.5,"home"],[172,-34.3,10,8,"home"],[119.9,-50.8,9,7.1,"home"],[137.3,-51.4,9,7.5,"home"],[120.3,-61,9.4,8.9,"home"],[138.1,-63,10,9,"home"],[153.7,-55.4,8.6,9.3,"home"],[167.8,-54.5,10.7,8.1,"home"]])pt(L,D,A,U,{floors:D<-47?1:2,kind:V,label:G});for(let L of[10,24,42,57,74,90,116,128,151,169])for(let D of[-57,-71])L>120&&L<147||pt(L+(n()-.5)*3,D+(n()-.5)*2,6.6+n()*3.9,5.3+n()*3.7,{floors:n()>.58?2:1,simple:!0,theta:n()>.5?Math.PI:0});for(let[L,D,A,U]of[[-242,36,8.7,6.3],[-211,23,8.1,5.4],[-187,23,7.8,7.2],[185,-26,8.7,6.4],[196,-28,8,5.8],[210,-30,10.3,6.6],[228,-32,8,6.5],[239,-37,7.1,7.1]])pt(L,D,A,U,{floors:L<0?1:2,simple:!0,theta:D>0?Math.PI:0});for(let[L,D,A]of[[-203,20,1.04],[-227,23,1.19],[-244,26,1.05],[170,21,1.12],[187,24,1.08],[211,25,1.24],[232,-21,.91],[244,23,.95]])ct(L,D,A,!0);let re=F(154,.19,-66,0);for(let L=0;L<3;L++){let D=7.35-L*1.38;y(re,0,"plaster",0,2.63+L*3.5,0,D-.31,3,D*.78);for(let A of[-1,1])y(re,0,"lacquer",A*(D/2-.32),2.63+L*3.5,D*.38,.23,3.05,.23),K(re,0,A*D*.214,2.88+L*3.5,D*.39,D*.28,.94);Q(re,D+1.91,D*.84+1.34,3.97+L*3.5,1.28,"tileDark",!0)}for(let L of[-78,-65,-48,-38,-23])pt(L,-32-10*n(),6.3+n()*3,5.6+n()*3,{simple:!0,floors:n()<.19?2:1});for(let[L,D,A,U]of[[-139,19,1.17,1],[-119,18,1.2,1],[-117,31,.97,0],[-98,19,.99,1],[-82,13,1.16,1],[-68,14.7,1.14,1],[-56,24,1,1],[-42,20.6,.96,1],[-22,18.3,.96,1],[-10,27,1.22,1],[10,20.4,.99,1],[28,29,.82,1],[48,20.2,1.04,1],[59,19.9,1.25,1],[70,26,1,1],[-39,-22,1.11,1],[-16,-24,1.12,1],[7,-15.5,.86,1],[34,-28.8,.93,0],[55,-15.5,1.01,1],[76,-15.8,.85,1],[93,-18.1,1.12,1],[112,-17.2,.91,1],[126,-53,1.12,0],[132,-48,.99,1],[128,-66,1.02,1],[137,-41,.83,0]])ct(L,D,A,U===1);for(let L=0;L<74;L++){let D=-169+n()*350,A=(n()>.54?-1:1)*(40+n()*38);D>94&&D<151&&A<0||ct(D,A,.63+n()*.54,n()>.67)}for(let L=0;L<1900;L++){let D=-163+n()*337,A=n()>.5?1:-1,V=We(D)+A*Qn(D)+A*(n()*1.65+.05);if(D>-11&&D<4||D>-46&&D<-20&&A===1)continue;let G=Me(D,V),ht=[.29,.34,.105],xt=.17+n()*.38;C("foliage",Et(D-.026,G,V),Et(D+.039,G,V),Et(D+.13*n(),G+xt,V+.06),Et(D-.018,G+xt,V+.06),[0,0,1,1],ht)}for(let[L,D]of[[8,27],[21,28],[-31,21.5],[47,-31.5],[72,-32],[-74,19.3],[134,-42],[125,-56]])L===47||L===72||(rt(L,Me(L,D),D,.83),Mt(L+.82,Me(L,D),D,.67),R(L,D,1.5,.75));for(let L=0;L<14;L++){let D=-146+L*2;x("timber",D,Me(D,30.7)+.43,30.7,.16,1.04,.19),L<13&&(E("oldwood",Et(D,.43,30.7),Et(D+2.1,.38,30.7),.085,.105),E("oldwood",Et(D,.7,30.7),Et(D+2.06,.69,30.7),.071,.084))}for(let[L,D]of[[124,-42],[133,-40],[128,-55]]){let A=F(L,Me(L,D),D,Math.PI/2);E("timber",A(-1.2,0,0),A(-1.2,2.3,0),.075,.075,Ie),E("timber",A(1.2,0,0),A(1.2,2.2,0),.075,.075,Ie),E("timber",A(-1.2,2.25,0),A(1.2,2.16,0),.032,.034,Ie);for(let U=0;U<4;U++){let V=-.94+U*.52,G=V+.44,ht=2.21-U*.019;C("awning",A(V,ht,0),A(G,ht,0),A(G,ht-.69-U*.06,.04),A(V,ht-.64-U*.06,.14))}}for(let{geo:L,mat:D,entries:A}of u.values()){let U=new fi(L,s[D],A.length);for(let[V,[G,ht]]of A.entries())U.setMatrixAt(V,G),U.setColorAt(V,S.setScalar(ht));U.castShadow=D!=="soil"&&D!=="grass",U.receiveShadow=!0,U.computeBoundingSphere(),i.add(U)}for(let[L,{points:D,uv:A,colors:U}]of d){let V=new pe;V.setAttribute("position",new jt(D,3)),V.setAttribute("uv",new jt(A,2)),V.setAttribute("color",new jt(U,3)),V.computeVertexNormals();let G=s[L].clone();G.side=_e,G.vertexColors=!0,(L==="foliage"||L==="awning"||L==="bough")&&(G.onBeforeCompile=s[L].onBeforeCompile);let ht=new le(V,G);ht.receiveShadow=!0,ht.castShadow=!["soil","grass","stone","pave","path"].includes(L),i.add(ht)}function B(L,D){if(L<js.west||L>js.east||D<js.north||D>js.south)return null;if(Math.abs(L-Re)<as/2-.14&&Math.abs(D-We(Re))<=os+.04)return Ke(D);if(Math.abs(L-_t)<.78&&D>=Rt&&D<=Lt)return Wt(D);for(let A of _)if(L>=A.x0&&L<=A.x1&&D>=A.z0&&D<=A.z1)return A.y;return Math.abs(D-We(L))<Qn(L)-.14?null:Me(L,D)}function $t(L,D,A=.3){return m.some(U=>L>U.x0-A&&L<U.x1+A&&D>U.z0-A&&D<U.z1+A)}return{materials:s,walkHeight:B,isObstacle:$t,obstacles:m}}function ph(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new pe,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(u.morphAttributes[m])}if(t){let m;if(e)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let m=i[d].index;for(let _=0;_<m.count;++_)u.push(m.getX(_)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=fh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let m=[];for(let v=0;v<o[h].length;++v)m.push(o[h][v][d]);let _=fh(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function fh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ge(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,m=h.count;d<m;d++)for(let _=0;_<e;_++){let v=h.getComponent(d,_);a.setComponent(d+u,_,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Le=(i,t,e)=>new W(i,t,e),_h=Le(0,1,0),Tn=new yn(1,1,1),bn=new Zn(1,12,8),og=new Zn(1,10,6,0,Math.PI*2,0,Math.PI*.57),ti=new Je(1,1,1,8),ag=new Je(.65,1,1,10),mh=new Je(1,.72,1,10),xh=new $i(1,.083,6,19),cg=new Je(.71,1,1,8),Ti=Math.PI*2;function we(i,t,e,n,s,r,o=1,a=1,l=1){let c=new le(i,t);return c.position.set(n,s,r),c.scale.set(o,a,l),c.castShadow=c.receiveShadow=!0,e.add(c),c}function wi(i,t,e,n,s,r=ti){let o=n.clone().sub(e),a=e.clone().lerp(n,.5),l=we(r,t,i,a.x,a.y,a.z,s,o.length(),s);return l.quaternion.setFromUnitVectors(_h,o.normalize()),l}function tr(i,t=[]){let e=new Map;for(let n of[...i.children]){if(!n.isMesh||t.includes(n))continue;n.updateMatrix();let s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();s.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(s),i.remove(n)}for(let[n,s]of e)we(ph(s),n,i,0,0,0),s.forEach(r=>r.dispose())}function lg(i,t,e,n){let s=[];function o(u,d){let m=(u-.5)*i,_=Math.pow(.065+.935*Math.sin(Math.PI*u),.69),v=Math.sin(d*Math.PI),p=Math.cos(d*Math.PI);return[m,-.04+v*-.53+.26*Math.pow(Math.abs(u-.5)*2,4),p*t*.51*_*(.75+.25*Math.abs(p))]}for(let u=0;u<24;u++)for(let d=0;d<11;d++){let m=o(u/24,d/11),_=o((u+1)/24,d/11),v=o((u+1)/24,(d+1)/11),p=o(u/24,(d+1)/11);s.push(...m,..._,...v,...m,...v,...p)}let a=new jt(s,3),l=new Float32Array(a.count*2);for(let u=0;u<a.count;u++)l[u*2]=a.getY(u)*2.8,l[u*2+1]=a.getX(u)/3;let c=new pe;c.setAttribute("position",a),c.setAttribute("uv",new ge(l,2)),c.computeVertexNormals();let h=we(c,e,n,0,.66,0);for(let u of[-1,1])for(let d=0;d<22;d++){let m=d/22,_=(d+1)/22,[v,p,f]=o(m,u>0?0:1),[S,T,x]=o(_,u>0?0:1);wi(n,e,Le(v,p+.75,f),Le(S,T+.75,x),.065)}return h}function hg(i,t,e){let n=[],s=t.timber.clone();s.color.setHex(10914923),s.side=_e;for(let r=0;r<9;r++){let o=new Ne,a=r%3===1?11.2:7.6+e()*2.6,l=r%3===1?3.5:2.25+e()*.58;lg(a,l,s,o);for(let p=0;p<Math.floor(a/.29);p++){let f=-a*.47+p*.29;if(f>a*.47)continue;let S=Math.pow(.08+.92*Math.sin(Math.PI*(f/a+.5)),.7);we(Tn,t.oldwood,o,f,.68,0,.27,.14,l*S*.96)}we(Tn,t.beam,o,-a*.45,.83,0,.28,.36,l*.36),we(Tn,t.beam,o,a*.45,.91,0,.31,.37,l*.38);for(let p of[-1,1])for(let f=-2;f<3;f++)we(Tn,t.oldwood,o,f*a*.15,.87,p*l*.44,.12,.55,.12),f<2&&wi(o,t.oldwood,Le(f*a*.15,1.09,p*l*.44),Le((f+1)*a*.15,1.09,p*l*.44),.046);for(let p=0;p<12;p++){let f=a*(-.33+e()*.68),S=(e()-.5)*l*.61,T=p%3===0?t.oldwood:t.straw;we(p%3?bn:Tn,T,o,f,.87+e()*.16,S,.27+e()*.31,.31+e()*.13,.33+e()*.31)}if(r%3!==1){let p=.41*a,f=l*.42,S=new Je(f,f,p,16,1,!0,0,Math.PI);we(S,t.straw,o,-.27,1.17,0).rotation.set(0,Math.PI/2,Math.PI/2);for(let x=0;x<6;x++){let E=we(xh,t.oldwood,o,-p*.52+x*p/5,1.16,0,f*.99,f*.99,.57);E.rotation.y=Math.PI/2,E.geometry=new $i(1,.041,6,16,Math.PI)}}let c=new Ne;c.position.set(a*.16,.72,0),o.add(c);let h=r%3===1?6.2:4.6;if(wi(c,t.beam,Le(0,0,0),Le(0,h,0),.08),r%2===0||r%3===1){let p=l*1.19,f=new dn(p,h*.65,12,14),S=f.attributes.position;for(let x=0;x<S.count;x++){let E=S.getX(x),C=S.getY(x),R=.4*Math.cos(E/p*Math.PI)*Math.cos(C/(h*.65)*Math.PI*.7);S.setZ(x,R+.045*Math.sin(C*8))}f.computeVertexNormals();let T=t.linen.clone();T.side=_e,we(f,T,c,-.12,h*.6,.016).rotation.y=Math.PI/2;for(let x=0;x<7;x++){let E=h*(.268+x*.109);wi(c,t.oldwood,Le(-.13,E,-p*.52),Le(-.13,E,p*.52),.031)}}wi(c,t.beam,Le(0,h-.16,0),Le(0,h-.09,.64),.035);let u=new Ne;u.position.set(-a*.37,.92,-l*.38),o.add(u),wi(u,t.oldwood,Le(.28,.77,.08),Le(-1.52,-.51,-1.77),.055),we(Tn,t.timber,u,-1.44,-.46,-1.67,.7,.075,.2).rotation.set(-.18,-.67,.36);let m=we(Tn,t.oldwood,o,-a*.5,.22,0,.58,1.25,.125);m.rotation.z=.23;let _=r>=7;_&&(c.rotation.z=-1.42),tr(c),tr(u),tr(o,[m]),i.add(o);let v=ug(i,a,l);n.push({root:o,mast:c,oar:u,rudder:m,wake:v,length:a,docked:_,route:r%2===0?1:-1,lane:_?r===7?10.5:-10.9:(r%2===0?1:-1)*(2.48+e()*6.7),speed:.72+e()*.76,start:_?r===7?-37:46:-160+r*36+e()*11,phase:e()*Ti})}return n}function ug(i,t,e){let n=new Ne,s=new pe,r=[],o=[];for(let c of[-1,1])for(let h=0;h<14;h++){let u=h/14,d=(h+1)/14,m=(p,f)=>[-t*.38-p*t*1.19,0,c*(e*.2+e*1.31*p)+f],_=.03+.32*u,v=.03+.32*d;r.push(...m(u,-_),...m(d,-v),...m(u,_),...m(d,-v),...m(d,v),...m(u,_)),o.push(u,0,d,0,u,1,d,0,d,1,u,1)}s.setAttribute("position",new jt(r,3)),s.setAttribute("uv",new jt(o,2));let a={value:0},l=new Ce({side:_e,transparent:!0,depthWrite:!1,uniforms:{time:a},vertexShader:"varying vec2 waveUv; void main(){ waveUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec2 waveUv; uniform float time; void main(){ float d=sin(waveUv.y*3.14159)*pow(1.0-waveUv.x,1.45); float foam=.25+.75*pow(max(0.0,sin(69.0*waveUv.x-2.3*time)),2.0); gl_FragColor=vec4(.86,.87,.72,d*foam*.39); }"});return n.add(new le(s,l)),n.position.y=Ks+.015,n.userData.time=a,i.add(n),n}var dg=[[[-148,22],[-129,24],[-109,22],[-82,19],[-72,18],[-86,20],[-110,24],[-131,26]],[[-47,18.4],[-36,16.5],[-30,15.6],[-27,17.9],[-34,19.3],[-44,20.1]],[[-42,19.8],[-27,20],[-14,22],[-6,22],[-6,9],[-6,-4],[-6,-20],[-2,-23],[11,-23],[25,-25],[28,-24],[21,-22],[6,-21],[-2,-22],[-2,-4],[-2,10],[-2,22],[-12,23],[-27,21.2]],[[4,-24.9],[16,-24.6],[31,-25.7],[47,-25],[60,-25],[75,-24.6],[92,-25.9],[108,-25.4],[129,-25],[143,-25],[155,-26],[142,-27],[127,-24],[105,-23],[89,-23],[69,-23],[48,-23],[26,-22],[12,-22]],[[29,-27],[44,-27.7],[46,-29.8],[46,-31.1],[48,-31.7],[51,-30.8],[52,-27.2],[61,-26],[69,-26],[78,-26],[58,-25.6],[45,-26],[35,-26]],[[118,-25],[128,-27],[129,-40],[130,-56],[129,-62],[131,-65],[131,-51],[130,-36],[131,-28],[145,-26],[152,-24],[135,-24]],[[7,23],[14,22.4],[24,22.5],[48,24.2],[59,26],[47,26],[25,25.2],[17,24.7],[8,24.6]]];function gh(i){let t=[],e=0;for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=Math.hypot(r[0]-s[0],r[1]-s[1]);t.push({a:s,b:r,from:e,to:e+o,distance:o}),e+=o}return{length:e,segments:t}}function fg(i,t){let e=t%i.length,n=i.segments.find(r=>e>=r.from&&e<r.to)??i.segments[0],s=(e-n.from)/n.distance;return[Qt.lerp(n.a[0],n.b[0],s),Qt.lerp(n.a[1],n.b[1],s),Math.atan2(n.b[0]-n.a[0],n.b[1]-n.a[1])]}function pg(i,t,e,n,s){let r=dg.map(gh),o=[],a=s?[6,8,13,17,7,7,7]:[10,12,24,29,9,12,11],l=[10457715,12298628,9142891,8095082,11904133,11043182,7176576,10915443,9339263,12494975,7634277],c=[12094569,11962985,12950907,11502690,13278334],h=new Map;function u(tt,pt,Dt){h.set(tt,{geometry:pt,material:Dt,used:0})}let d=e.linen.clone();d.color.setHex(15985117);let m=new pi({color:16777215,roughness:.81});u("head",bn,m),u("nose",bn,m),u("neck",ti,m),u("ears",bn,m),u("eyes",bn,e.black),u("hand",bn,m),u("hat",og,e.black),u("hair",bn,e.black),u("feet",bn,e.beam),u("hem",ag,d),u("top",mh,d),u("arms",cg,d),u("calves",ti,d),u("collar",ti,e.paleCeramic),u("belt",ti,e.beam),u("pole",ti,e.oldwood),u("parcel",bn,e.straw),u("basket",mh,e.straw),u("rope",ti,e.oldwood);for(let tt=0;tt<r.length;tt++)for(let pt=0;pt<a[tt];pt++){let Dt=.86+n()*.21;pt%7===0&&tt>=2?o.push({route:r[tt],started:r[tt].length*(pt+.25)/a[tt],speed:.72+n()*.17,walking:!0,style:pt%3,scale:.92+n()*.13,shade:new Nt(l[Math.floor(n()*l.length)]),faces:new Nt(c[Math.floor(n()*c.length)]),p:tt,payload:2,phase:n()*Ti}):o.push({route:r[tt],started:r[tt].length*(pt+n()*.9)/a[tt],speed:.56+n()*.69,walking:!0,style:pt%3,scale:Dt,shade:new Nt(l[Math.floor(n()*l.length)]),faces:new Nt(c[Math.floor(n()*c.length)]),p:tt,payload:pt%4===0?1:0,phase:n()*Ti})}let _=gh([[-36.52,7.29],[-36.52,12.36],[-34.9,15.1],[-32.5,18.7],[-32.15,18.44],[-35.3,15.2],[-36.52,12.6],[-36.52,9.4]]);for(let tt=0;tt<2;tt++)o.push({route:_,started:_.length*(.19+tt*.49),speed:.7,walking:!0,delivery:!0,style:tt,scale:.94+tt*.044,shade:new Nt(l[1+tt*3]),faces:new Nt(c[tt]),payload:0,phase:tt*3.2});let v=[[-126,23.3],[-36,14.2],[-30,19.2],[19.9,-21.1],[26.3,-21.5],[38,-20.9],[47.6,-33.6],[50.5,-31.6],[65.2,-35.12],[72.5,-35.22],[66.1,-38.77],[60,-23.2],[97,-22.4],[113,-22.3],[130.4,-48],[125,-42.5],[10.3,25.1]];for(let tt=0;tt<v.length;tt++){let[pt,Dt]=v[tt];o.push({x:pt,z:Dt,walking:!1,seated:tt>=8&&tt<=10,style:tt%3,scale:.86+n()*.17,shade:new Nt(l[tt%l.length]),faces:new Nt(c[tt%c.length]),p:3,payload:tt%4===0?1:0,phase:n()*Ti})}let p=o.length+16;for(let[tt,pt]of h){let Dt=["hand","arms","calves","feet","collar","basket","rope","ears","eyes"].includes(tt)?2:1,wt=new fi(pt.geometry,pt.material,p*Dt);wt.instanceMatrix.setUsage(xi),wt.castShadow=!["nose","collar","rope"].includes(tt),wt.receiveShadow=!0,wt.frustumCulled=!1,wt.count=0,i.add(wt),pt.model=wt}let f=new xe,S=new ze,T=Le(0,0,0),x,E,C,R,F,y,M;function O(tt,pt,Dt){let wt=x.scale;return Le(E+(tt*y+Dt*M)*wt,C+pt*wt,R+(-tt*M+Dt*y)*wt)}function H(tt,pt,Dt,wt,Ft,zt,ct,lt,_t=0){let Rt=h.get(tt);f.position.copy(O(pt,Dt,wt)),f.scale.set(Ft,zt,ct).multiplyScalar(x.scale),f.rotation.set(_t,F,0,"YXZ"),f.updateMatrix(),Rt.model.setMatrixAt(Rt.used,f.matrix),Rt.model.setColorAt(Rt.used++,lt)}function et(tt,pt,Dt,wt,Ft){let zt=O(...pt),ct=O(...Dt),lt=wt*x.scale;T.copy(ct).sub(zt),S.setFromUnitVectors(_h,T.clone().normalize());let _t=h.get(tt);f.position.copy(zt).lerp(ct,.5),f.quaternion.copy(S),f.scale.set(lt,T.length(),lt*.85),f.updateMatrix(),_t.model.setMatrixAt(_t.used,f.matrix),_t.model.setColorAt(_t.used++,Ft)}let j=new Nt(14997691),Q=new Nt(9668216),K=new Nt(12559741);function yt(tt){for(let pt of h.values())pt.used=0;for(x of o){if(x.cart){let _t=x.cart.root;F=_t.rotation.y,E=_t.position.x-Math.sin(F)*1.93,R=_t.position.z-Math.cos(F)*1.93}else if(x.walking){[E,R,F]=fg(x.route,x.started+tt*x.speed);let _t=x.delivery?.095:Math.sin(x.phase)*.58;x.delivery&&(x.payload=(x.started+tt*x.speed)%x.route.length<x.route.length*.5?1:0),E+=Math.cos(F)*_t,R-=Math.sin(F)*_t}else({x:E,z:R}=x),F=(x.seated?Math.PI:x.phase)+.15*Math.sin(tt*.64+x.phase);if(C=t.walkHeight(E,R)??Me(E,R),x.boat){let _t=x.boat.root;E=_t.position.x-x.boat.route*x.boat.length*.35,R=_t.position.z,C=_t.position.y+.82,F=x.boat.route>0?Math.PI/2:-Math.PI/2}y=Math.cos(F),M=Math.sin(F);let pt=x.walking,Dt=tt*(4.1+x.speed*.97)+x.phase,wt=pt?Math.sin(Dt):0,Ft=x.seated?-.43+.012*Math.sin(tt*2.4+x.phase):pt?.026*Math.cos(Dt*2):.012*Math.sin(tt*2.4+x.phase),[zt,ct]=[x.shade,x.faces],lt=x.seated?.38:x.style===1?.79:.63;H("hem",0,.96-lt/2+Ft,0,x.style===1?.263:.218,lt,.177,zt),H("top",0,1.17+Ft,0,.239,.46,.133,zt,.05),H("belt",0,.962+Ft,0,.173,.062,.151,Q),H("neck",0,1.416+Ft,.007,.06,.111,.058,ct),H("head",0,1.548+Ft,.012,.101,.122,.096,ct);for(let _t of[-1,1])H("ears",_t*.101,1.542+Ft,.018,.021,.035,.02,ct),H("eyes",_t*.044,1.568+Ft,.102,.012,.009,.006,Q);H("nose",0,1.54+Ft,.108,.032,.027,.028,ct),H("hat",0,1.635+Ft,.003,.108,.075,.104,Q),x.style===1&&H("hair",0,1.67+Ft,-.082,.061,.075,.067,Q);for(let _t of[-1,1]){let Rt=wt*_t,Lt=.067+Math.max(0,-Rt)*.095;et("calves",[_t*.081,.58,-Rt*.016],[_t*.079,Lt+.055,Rt*.16],.067,zt),H("feet",_t*.079,Lt,Rt*.16+.035,.075,.058,.117,Q);let Wt=x.seated?[_t*.14,.51+.021*Math.sin(tt+x.phase),.31]:x.cart?[_t*.22,.68+Ft,.27]:x.payload===2&&_t===1?[_t*.17,1.43+Ft,.12]:[_t*(x.style===1?.191:.252),.854+Ft,-Rt*.129+.038];et("arms",[_t*.208,1.34+Ft,.005],Wt,.092,zt),H("hand",...Wt,.052,.064,.049,ct),et("collar",[_t*.105,1.396+Ft,.087],[-_t*.036,1.216+Ft,.123],.021,j)}if(x.payload===1&&H("parcel",.229,.9+Ft,.17,.181,.147,.117,K),x.payload===2){et("pole",[-.61,1.436+Ft,0],[.61,1.427+Ft,0],.027,K);for(let _t of[-1,1]){let Rt=_t*.55+wt*.018;et("rope",[_t*.55,1.42+Ft,0],[Rt,1+Ft,.013],.014,K),H("basket",Rt,.92+Ft,.013,.167,.23,.158,K)}}}for(let pt of h.values())pt.model.count=pt.used,pt.model.instanceMatrix.needsUpdate=!0,pt.model.instanceColor&&(pt.model.instanceColor.needsUpdate=!0)}function rt(tt){for(let pt=0;pt<tt.length;pt++)o.push({boat:tt[pt],x:0,z:0,walking:!1,style:pt%3,scale:.93,shade:new Nt(l[pt]),faces:new Nt(c[pt%c.length]),payload:0,phase:n()*Ti})}function Mt(tt){for(let pt of tt)o.push({cart:pt,walking:!0,style:0,scale:.96,speed:1.05,shade:new Nt(l[3+pt.index]),faces:new Nt(c[pt.index]),payload:0,phase:n()*Ti})}return{update:yt,crew:rt,push:Mt,count:o.length}}function mg(i,t){return[[-40,18,-17,21],[5,-24,89,-25],[111,-25,154,-26],[60,-23,20,-23]].map(([e,n,s,r],o)=>{let a=new Ne,l=[];we(Tn,t.timber,a,0,.64,.17,1.13,.14,1.62);for(let c of[-1,1]){we(Tn,t.oldwood,a,c*.51,.86,.6,.09,.32,.86),we(Tn,t.beam,a,c*.25,.59,-.96,.09,.081,1.67);let h=new Ne;h.position.set(c*.65,.43,.34),a.add(h),we(xh,t.beam,h,0,0,0,.43,.43,.43).rotation.y=Math.PI/2,we(ti,t.timber,h,0,0,0,.136,.16,.136).rotation.z=Math.PI/2;for(let u=0;u<8;u++){let d=u*Ti/8;wi(h,t.oldwood,Le(0,0,0),Le(0,.42*Math.cos(d),.42*Math.sin(d)),.026)}l.push(h)}for(let c=0;c<5;c++)we(bn,t.straw,a,(c%2-.5)*.49,.92+Math.floor(c/4)*.37,.16+c%3*.21,.37,.29,.41);return l.forEach(c=>tr(c)),tr(a),i.add(a),{root:a,wheels:l,a:e,b:n,c:s,d:r,phase:o*.29,index:o}})}function vh(i,t,e){let n=cs(1973),s=hg(i,t.materials,n),r=pg(i,t,t.materials,n,e);r.crew(s);let o=mg(i,t.materials);r.push(o);function a(l){for(let c of s){let{root:h,mast:u,wake:d,oar:m,rudder:_,length:v,phase:p,route:f,docked:S}=c,T=S?c.start:((c.start+183+l*c.speed*f)%374+374)%374-183,x=We(T),E=Math.sin(l*.22+p)*.22,C=x+c.lane+(S?E*.5:E+Math.sin(T*.076+p)*.39),R=.063*Math.sin(l*1.1+p)+.026*Math.cos(l*1.63+p),F=We(T+1)-x,y=(f>0?0:Math.PI)-Math.atan(F)*.91;h.position.set(T,Ks-.02+R,C),h.rotation.set(Math.sin(l*1.3+p)*.034,y,Math.sin(l*.79+p)*.021,"YXZ");let M=Math.abs(T-Re),O=1-Qt.smoothstep(M,8.5+v*.24,21);S||(u.rotation.z=-f*O*1.48),m.rotation.y=Math.sin(l*1.7+p)*.25,m.rotation.z=.09*Math.cos(l*1.7+p),_.rotation.y=.12*Math.sin(l*.49+p),d.position.x=T,d.position.z=C,d.rotation.y=y,d.visible=!S,d.userData.time.value=l}for(let c of o){let{root:h,wheels:u,a:d,b:m,c:_,d:v,phase:p,index:f}=c,S=Math.hypot(_-d,v-m),T=(l*(1+f*.05)/S+p)%2,x=T<1,E=x?T:2-T,C=Qt.lerp(d,_,E),R=Qt.lerp(m,v,E);h.position.set(C,t.walkHeight(C,R)??Me(C,R),R),h.rotation.y=Math.atan2(_-d,v-m)+(x?0:Math.PI),u.forEach(F=>F.rotation.x=l*2.3)}r.update(l)}return{update:a,boats:s,carts:o,headcount:r.count}}var Jo=class extends le{constructor(t,e={}){super(t),this.isWater=!0;let n=this,s=e.textureWidth!==void 0?e.textureWidth:512,r=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,h=e.sunDirection!==void 0?e.sunDirection:new W(.70707,.70707,0),u=new Nt(e.sunColor!==void 0?e.sunColor:16777215),d=new Nt(e.waterColor!==void 0?e.waterColor:8355711),m=e.eye!==void 0?e.eye:new W(0,0,0),_=e.distortionScale!==void 0?e.distortionScale:20,v=e.side!==void 0?e.side:ln,p=e.fog!==void 0?e.fog:!1,f=new en,S=new W,T=new W,x=new W,E=new se,C=new W(0,0,-1),R=new ce,F=new W,y=new W,M=new ce,O=new se,H=new Ae,et=new nn(s,r),j={name:"MirrorShader",uniforms:Zs.merge([At.fog,At.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new se},sunColor:{value:new Nt(8355711)},sunDirection:{value:new W(.70707,.70707,0)},eye:{value:new W},waterColor:{value:new Nt(5592405)}}]),vertexShader:`
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
				}`},Q=new Ce({name:j.name,uniforms:Zs.clone(j.uniforms),vertexShader:j.vertexShader,fragmentShader:j.fragmentShader,lights:!0,side:v,fog:p});Q.uniforms.mirrorSampler.value=et.texture,Q.uniforms.textureMatrix.value=O,Q.uniforms.alpha.value=a,Q.uniforms.time.value=l,Q.uniforms.normalSampler.value=c,Q.uniforms.sunColor.value=u,Q.uniforms.waterColor.value=d,Q.uniforms.sunDirection.value=h,Q.uniforms.distortionScale.value=_,Q.uniforms.eye.value=m,n.material=Q,n.onBeforeRender=function(K,yt,rt){if(T.setFromMatrixPosition(n.matrixWorld),x.setFromMatrixPosition(rt.matrixWorld),E.extractRotation(n.matrixWorld),S.set(0,0,1),S.applyMatrix4(E),F.subVectors(T,x),F.dot(S)>0)return;F.reflect(S).negate(),F.add(T),E.extractRotation(rt.matrixWorld),C.set(0,0,-1),C.applyMatrix4(E),C.add(x),y.subVectors(T,C),y.reflect(S).negate(),y.add(T),H.position.copy(F),H.up.set(0,1,0),H.up.applyMatrix4(E),H.up.reflect(S),H.lookAt(y),H.far=rt.far,H.updateMatrixWorld(),H.projectionMatrix.copy(rt.projectionMatrix),O.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),O.multiply(H.projectionMatrix),O.multiply(H.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(S,T),f.applyMatrix4(H.matrixWorldInverse),R.set(f.normal.x,f.normal.y,f.normal.z,f.constant);let Mt=H.projectionMatrix;M.x=(Math.sign(R.x)+Mt.elements[8])/Mt.elements[0],M.y=(Math.sign(R.y)+Mt.elements[9])/Mt.elements[5],M.z=-1,M.w=(1+Mt.elements[10])/Mt.elements[14],R.multiplyScalar(2/R.dot(M)),Mt.elements[2]=R.x,Mt.elements[6]=R.y,Mt.elements[10]=R.z+1-o,Mt.elements[14]=R.w,m.setFromMatrixPosition(rt.matrixWorld);let tt=K.getRenderTarget(),pt=K.xr.enabled,Dt=K.shadowMap.autoUpdate;n.visible=!1,K.xr.enabled=!1,K.shadowMap.autoUpdate=!1,K.setRenderTarget(et),K.state.buffers.depth.setMask(!0),K.autoClear===!1&&K.clear(),K.render(yt,H),n.visible=!0,K.xr.enabled=pt,K.shadowMap.autoUpdate=Dt,K.setRenderTarget(tt);let wt=rt.viewport;wt!==void 0&&K.state.viewport(wt)}}};function yh(i,t,e,n){let s=new W,r=new Nt(7714013),o=new Nt(13229016),a=new le(new Zn(255,36,22),new Ce({side:Pe,depthWrite:!1,fog:!1,uniforms:{sunVector:{value:s},skyTop:{value:r},skyHorizon:{value:o},clock:{value:0}},vertexShader:`
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
    `}));a.renderOrder=-10,a.frustumCulled=!1,i.add(a),i.fog=new Is(13950673,.0052);let l=new Os(14741495,10126689,1.82),c=new ks(16769706,2.68);c.castShadow=!0;let h=n?51:63;c.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(c.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:8,far:208}),c.shadow.camera.updateProjectionMatrix(),c.shadow.normalBias=.035,c.shadow.bias=-22e-5,c.shadow.radius=2,i.add(l,c,c.target);let u=new Jo(new dn(543,65),{textureWidth:n?320:768,textureHeight:n?240:480,waterNormals:e.waterNormal,sunDirection:s,sunColor:16573366,waterColor:6387024,distortionScale:2.85,clipBias:.018,fog:!0});u.rotation.x=-Math.PI/2,u.position.set(4,Ks,0),u.material.uniforms.size.value=1.55,u.material.fragmentShader=u.material.fragmentShader.replace("float rf0 = 0.3;","float rf0 = 0.17;").replace("vec3 outgoingLight = albedo;","vec3 outgoingLight = albedo * ( .93 + .11 * sin(worldPosition.x * 6.4 + sin(worldPosition.z * 2.2) + time * 2.9) * sin(worldPosition.z * 7.0 + sin(worldPosition.x * 3.0) - time) );"),u.receiveShadow=!0,i.add(u);let d=u.onBeforeRender,m=0,_=new W(999,0,0),v=new ze;u.onBeforeRender=function(...j){let Q=j[2];(m++%(n?4:3)===0||_.distanceToSquared(Q.position)>1.1||Math.abs(v.dot(Q.quaternion))<.9996)&&(_.copy(Q.position),v.copy(Q.quaternion),d.apply(this,j))};let p=[[-89,4.5,27],[70,5.2,-34],[133,3.7,-54],[57,4.2,-37]],f=p.length*7,S=new Float32Array(f*3),T=new Float32Array(f),x=new Float32Array(f),E=new pe;E.setAttribute("position",new ge(S,3).setUsage(xi)),E.setAttribute("size",new ge(T,1).setUsage(xi)),E.setAttribute("fade",new ge(x,1).setUsage(xi));let C=new Ls(E,new Ce({transparent:!0,depthWrite:!1,vertexShader:`
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
    `}));C.frustumCulled=!1,i.add(C);let R=[],F=new di({color:3817010,side:_e,fog:!0}),y=new pe;y.setAttribute("position",new jt([0,0,.15,.43,.025,-.022,.12,0,-.13,0,0,.15,.12,0,-.13,0,0,-.098],3));for(let j=0;j<(n?7:11);j++){let Q=new Ne,K=new le(y,F),yt=new le(y,F);yt.scale.x=-1,Q.add(yt,K),i.add(Q),R.push({group:Q,left:yt,right:K})}let M="",O="",H=new W;function et(j,Q,K,yt){a.position.copy(K.position),a.material.uniforms.clock.value=j;let Mt=Qt.clamp((Q-8.1)/8.8,0,1),tt=Math.sin(Math.PI*(.2+Mt*.59)),pt=.36+Mt*2.12;s.set(Math.cos(pt)*(.79+Mt*.15),.46+tt*.81,Math.sin(pt)).normalize();let Dt=Math.round(Q*45).toString();if(Dt!==O&&(c.color.setHSL(.106,.58+(1-tt)*.09,.83+(tt-.5)*.07),c.intensity=2.3+tt*.59,l.intensity=1.48+tt*.28,r.setRGB(.105+tt*.033,.312+tt*.085,.62+tt*.1),o.setRGB(.51+(1-tt)*.09,.655,.745),i.fog.color.setRGB(.62,.73,.76),O=Dt),yt%4===0||yt===1){let wt=K.getWorldDirection(H),Ft=Math.round((K.position.x+wt.x*24)/8)*8,zt=Math.round((K.position.z+wt.z*24)/8)*8,ct=Ft+"/"+zt+"/"+Dt,lt=ct!==M;lt&&(c.target.position.set(Ft,0,zt),c.position.copy(c.target.position).addScaledVector(s,86),M=ct),(lt||yt%(n?12:8)===0)&&(t.shadowMap.needsUpdate=!0)}u.material.uniforms.time.value=j*.77;for(let wt=0;wt<f;wt++){let[Ft,zt,ct]=p[Math.floor(wt/7)],lt=(j*.17+wt%7/7)%1;S[wt*3]=Ft+lt*3.6+.37*Math.sin(wt+lt*6),S[wt*3+1]=zt+lt*5.13,S[wt*3+2]=ct+Math.sin(lt*3+wt)*(.25+lt*.7)+lt*.6,T[wt]=.41+lt*2.1,x[wt]=Math.sin(lt*Math.PI)*.13*(1-lt*.65)}for(let wt of["position","size","fade"])E.attributes[wt].needsUpdate=!0;for(let wt=0;wt<R.length;wt++){let{group:Ft,left:zt,right:ct}=R[wt],lt=j*.054+wt*.045,_t=wt%4*.91,Rt=-14+Math.sin(lt)*46+_t*2,Lt=-5+Math.cos(lt)*20+_t;Ft.position.set(Rt,17.6+Math.sin(lt*1.6+wt*.14)*2.2+_t*.38,Lt),Ft.rotation.y=Math.atan2(Math.cos(lt)*46,-Math.sin(lt)*20);let Wt=Math.sin(j*6.7+wt*.77)*.67;zt.rotation.z=Wt,ct.rotation.z=-Wt}}return{update:et,river:u}}function Mh(i,t){let e,n=!1,s=0,r={field:[390,.1,.016,.046],river:[490,.17,.025,.026],dock:[590,.14,.062,.018],market:[780,.068,.126,.013],shop:[570,.046,.1,.005],lane:[510,.071,.044,.033]};function o(){let h=new AudioContext,u=h.createBuffer(1,h.sampleRate*9,h.sampleRate),d=u.getChannelData(0),m=0;for(let p=0;p<d.length;p++)m=m*.83+(Math.random()*2-1)*.15,d[p]=m;let _=h.createGain();_.gain.value=0,_.connect(h.destination);function v(p,f,S){let T=h.createBufferSource(),x=h.createBiquadFilter(),E=h.createGain();return T.buffer=u,T.loop=!0,T.playbackRate.value=S,x.type=p,x.frequency.value=f,T.connect(x).connect(E).connect(_),T.start(Math.random()*1.2),{filter:x,gain:E}}return{audio:h,noise:u,output:_,wind:v("lowpass",510,1.22),crowd:v("bandpass",590,1.47)}}i.setAttribute("aria-label","\u5F00\u542F\u73AF\u5883\u97F3"),i.addEventListener("click",async()=>{try{e??=o(),await e.audio.resume(),n=!n,i.setAttribute("aria-pressed",String(n)),i.setAttribute("aria-label",n?"\u5173\u95ED\u73AF\u5883\u97F3":"\u5F00\u542F\u73AF\u5883\u97F3"),t.textContent=n?"\u73AF\u5883\u97F3\u5DF2\u5F00":"\u73AF\u5883\u97F3",e.output.gain.setTargetAtTime(n?.72:0,e.audio.currentTime,.12)}catch{t.textContent="\u73AF\u5883\u97F3\u4E0D\u53EF\u7528"}});function a(h,u,d){let{audio:m,output:_}=e,v=m.createOscillator(),p=m.createGain();v.frequency.setValueAtTime(h,d),v.frequency.exponentialRampToValueAtTime(h*1.43,d+.057),p.gain.setValueAtTime(1e-4,d),p.gain.exponentialRampToValueAtTime(u,d+.024),p.gain.exponentialRampToValueAtTime(1e-4,d+.083),v.connect(p).connect(_),v.start(d),v.stop(d+.085)}let l=5.1;function c(h,u,d,m){if(!n||!e||document.hidden)return;let[_,v,p,f]=r[h]??r.river,{audio:S,output:T,noise:x}=e,E=S.currentTime;if(e.wind.filter.frequency.setTargetAtTime(_,E,.35),e.wind.gain.gain.setTargetAtTime(v*(.77+.15*Math.sin(E*.8)+.11*Math.cos(E*.31)),E,.4),e.crowd.gain.gain.setTargetAtTime(p*(.73+.1*Math.sin(E*2.1)+.2*Math.cos(E*.59)),E,.48),u&&E-s>.4){let C=S.createBufferSource(),R=S.createBiquadFilter(),F=S.createGain();C.buffer=x,R.type="lowpass",R.frequency.value=d?285:390,F.gain.setValueAtTime(.15,E),F.gain.exponentialRampToValueAtTime(.001,E+.16),C.connect(R).connect(F).connect(T),C.start(E,Math.random()*7,.17),s=E}if(l-=m,l<=0){let C=1390+Math.random()*520;for(let R=0;R<3;R++)a(C+R*87,f*(.4+Math.random()*.28),E+R*.14);l=6+Math.random()*9}}return{update:c}}var Ct=i=>document.getElementById(i),gn=Ct("experience"),Ve=Ct("world"),er=matchMedia("(prefers-reduced-motion: reduce)"),gg=matchMedia("(pointer: coarse)"),_n=gg.matches||innerWidth<680,ls=Qt.clamp,mc=i=>String(i).padStart(2,"0"),Ei=(i,t,e)=>new W(i,t,e),$o=[...Se.flatMap(i=>[[i.x,i.z],...i.path])],Sh=[{stop:1,point:Ei(-31,.6,-4),button:null},{stop:3,point:Ei(Re,7.5,.7),button:null},{stop:4,point:Ei(28,4.5,-25.2),button:null},{stop:7,point:Ei(98,11,-24),button:null}];async function _g(){let i=new Yo({canvas:Ve,antialias:!_n,alpha:!1,powerPreference:"high-performance"}),t=new Ps,e=new Ae(_n?64:52,1,.12,340),n={value:0};i.setClearColor(12768452),i.outputColorSpace=ye,i.toneMapping=io,i.toneMappingExposure=1.08,i.shadowMap.enabled=!0,i.shadowMap.autoUpdate=!1,i.shadowMap.type=Vs;let s=hh(),r=dh(t,s,n),o=yh(t,i,s,_n),a=vh(t,r,_n);i.compile(t,e);let l=Mh(Ct("sound"),Ct("sound-label")),c=new Set,h={id:null,x:0,y:0},u={id:null,x:0,y:0},d=Ei(0,0,0),m=Ei(0,0,0),_=Ct("map-view"),v=Ct("map"),p=v.getContext("2d"),f=!1,S="scenic",T=0,x=-1,E=0,C=0,R=null,F=er.matches,y=0,M=2.4,O=0,H=0,et="",j=!1,Q=null,K,yt,rt=[],Mt=[],tt={west:-155,east:174,north:-68,south:55},pt=N=>(N-tt.west)/(tt.east-tt.west),Dt=N=>(N-tt.north)/(tt.south-tt.north),wt=[];for(let N=1;N<$o.length;N++){let[q,Y]=$o[N-1],[nt,I]=$o[N],X=Math.hypot(nt-q,I-Y);for(let st=0;st<=Math.ceil(X);st++){let bt=st/Math.max(1,Math.ceil(X)),vt=Qt.lerp(q,nt,bt),ft=Qt.lerp(Y,I,bt);if(r.walkHeight(vt,ft)===null||r.isObstacle(vt,ft,.16)){wt.push([N,+vt.toFixed(2),+ft.toFixed(2)]);break}}}wt.length&&console.warn("Tour route intersects scene geometry",wt);function Ft(){let N=gn.clientWidth,q=gn.clientHeight;e.aspect=N/q,e.fov=N<510?62:52,e.updateProjectionMatrix(),i.setPixelRatio(Math.min(devicePixelRatio,_n?1.05:1.4)),i.setSize(N,q,!1),Ct("map-panel").hidden||xt()}new ResizeObserver(Ft).observe(gn),Ft();function zt(N,q,Y=!1){let nt=document.createElement("button");nt.type="button",nt.className=Y?"":"route-stop";let I=document.createElement("b");return I.textContent=mc(q+1),I.setAttribute("aria-hidden","true"),nt.append(I,document.createTextNode(N.name)),nt.addEventListener("click",()=>{g(!1),$t(()=>re(q,!1))}),nt}Se.forEach((N,q)=>{let Y=document.createElement("li"),nt=zt(N,q);Y.append(nt),Ct("route").append(Y),rt.push(nt);let I=document.createElement("li"),X=zt(N,q,!0);I.append(X),Ct("map-list").append(I);let st=document.createElement("button");st.type="button",st.className="map-dot",st.title=N.name,st.setAttribute("aria-label",N.name),st.textContent=String(q+1),st.style.left=pt(N.x)*100+"%",st.style.top=Dt(N.z)*100+"%",st.addEventListener("click",()=>X.click()),Ct("map-pins").append(st),Mt.push([X,st])});for(let N of Sh){let q=document.createElement("button");q.type="button",q.className="world-label",q.textContent=Se[N.stop].name,q.addEventListener("click",()=>$t(()=>re(N.stop,!1))),Ct("labels").append(q),N.button=q}function ct(){if(S!=="scenic"||_n)return;let N=gn.clientWidth,q=gn.clientHeight;for(let Y of Sh){let nt=m.copy(Y.point).project(e),I=(nt.x+1)/2*N,X=(1-nt.y)/2*q,st=Ct("intro").getBoundingClientRect(),bt=I>st.left-8&&I<st.right+32&&X>st.top-30&&X<st.bottom+12;Y.button.hidden=nt.z<-.92||nt.z>1||I<22||I>N-94||X<92||X>q-150||bt,Y.button.hidden||(Y.button.style.transform="translate3d("+I.toFixed(1)+"px,"+X.toFixed(1)+"px,0)")}}function lt(N,q=!1){if(x===N)return;x=N;let Y=Se[N];Y&&(Ct("place-area").textContent=Y.area,Ct("place-name").textContent=Y.name,Ct("place-note").textContent=Y.note),rt.forEach((nt,I)=>{let X=I===N;for(let st of[nt,...Mt[I]])X?st.setAttribute("aria-current","location"):st.removeAttribute("aria-current");if(X&&q){let st=Ct("route"),bt=nt.offsetLeft;(bt<st.scrollLeft||bt+nt.offsetWidth>st.scrollLeft+st.clientWidth)&&st.scrollTo({left:Math.max(0,bt-st.clientWidth/2+nt.offsetWidth/2),behavior:er.matches?"instant":"smooth"})}})}function _t(){let N=S!=="scenic";gn.classList.toggle("walking",N),Ct("intro").hidden=N,Ct("walk-hud").hidden=!N,Ct("look-help").hidden=!N||_n||S==="tour",Ct("joystick").hidden=!_n||S!=="walk",Ct("take-control").hidden=_n||S!=="walk"||typeof Ve.requestPointerLock!="function",Ct("tour").hidden=!N,Ct("tour").setAttribute("aria-pressed",String(S==="tour")),Ct("tour").firstElementChild.textContent=S==="tour"?"\u2161 \u7ED3\u675F\u6F2B\u6E38":"\u25B7 \u81EA\u52A8\u6F2B\u6E38",Ct("aim").hidden=document.pointerLockElement!==Ve,Ct("tour-status").hidden=S!=="tour"}function Rt(N,q,Y){let nt=N-d.x,I=q-d.y,X=Y-d.z;return[Math.atan2(-nt,-X),Math.atan2(I,Math.hypot(nt,X))]}function Lt(N){let q=Se[N];d.set(q.x,(r.walkHeight(q.x,q.z)??0)+1.61,q.z),[E,C]=Rt(...q.look),e.position.copy(d),e.rotation.set(C,E,0,"YXZ"),lt(N,!0)}function Wt(N){let q=[[Se[N].x,Se[N].z]],Y=new Map([[0,N]]);for(let nt=N;nt<Se.length-1;nt++)q.push(...Se[nt].path,[Se[nt+1].x,Se[nt+1].z]),Y.set(q.length-1,nt+1);return{points:q,events:Y,segment:0,progress:0,dwell:1.55}}function re(N,q){f&&(c.clear(),document.pointerLockElement&&document.exitPointerLock(),S=q?"tour":"walk",Lt(N),R=q?Wt(N):null,_t(),Ve.focus({preventScroll:!0}))}function B(N=0){document.pointerLockElement&&document.exitPointerLock(),T=N,S="scenic",R=null,c.clear(),lt(-1),_t(),Ct("start").focus({preventScroll:!0})}function $t(N){if(!(j||!f)){if(j=!0,er.matches){N(),j=!1;return}Ct("fade").classList.add("in"),setTimeout(()=>{N(),Ct("fade").classList.remove("in"),j=!1},220)}}function L(){S==="tour"&&(S="walk",R=null,_t())}function D(N,q){let Y=!1;for(let[nt,I]of[[d.x+N,d.z+q],[d.x+N,d.z],[d.x,d.z+q]]){if(Math.abs(nt-d.x)+Math.abs(I-d.z)<1e-4)continue;let X=r.walkHeight(nt,I);if(!(X===null||r.isObstacle(nt,I)||Math.abs(X-d.y+1.61)>.73)){d.x=nt,d.z=I,Y=!0;break}}return Y}function A(){let N=0,q=1/0;for(let Y=0;Y<Se.length;Y++){let nt=Se[Y],I=(nt.x-d.x)**2+(nt.z-d.z)**2;I<q&&(N=Y,q=I)}(q<225||x<0||q<((Se[x].x-d.x)**2+(Se[x].z-d.z)**2)*.7)&&lt(N,!0)}function U(N){let q=(c.has("w")||c.has("arrowup")?1:0)-(c.has("s")||c.has("arrowdown")?1:0)+u.y,Y=(c.has("d")?1:0)-(c.has("a")?1:0)+u.x;E+=((c.has("arrowleft")?1:0)-(c.has("arrowright")?1:0))*N*1.9;let nt=Math.max(Math.hypot(q,Y),1),I=(c.has("shift")?6.5:3.3)*N/nt,X=D((Math.cos(E)*Y-Math.sin(E)*q)*I,(-Math.sin(E)*Y-Math.cos(E)*q)*I),st=r.walkHeight(d.x,d.z)??0;return d.y=Qt.lerp(d.y,st+1.61,1-Math.exp(-N*17)),e.position.copy(d),X&&!er.matches&&(e.position.y+=Math.sin(performance.now()*.011)*.035),e.rotation.set(C,E,0,"YXZ"),A(),X}function V(N){let q=R.points[R.segment],Y=R.points[R.segment+1],nt;if(R.dwell>0)N=Math.min(N,R.dwell),R.dwell-=N,nt=Rt(...Se[x].look);else if(Y){let st=Math.hypot(Y[0]-q[0],Y[1]-q[1]);R.progress=ls(R.progress+N*5.65/Math.max(.01,st),0,1);let bt=Qt.lerp(q[0],Y[0],R.progress),vt=Qt.lerp(q[1],Y[1],R.progress);d.x=bt,d.z=vt;let ft=R.points[R.segment+2]??Y,Pt=ls((R.progress-.58)*1.8,0,.78),Vt=Qt.lerp(Y[0],ft[0],Pt),te=Qt.lerp(Y[1],ft[1],Pt);nt=Rt(Vt,(r.walkHeight(Vt,te)??0)+1.25,te),R.progress===1&&(R.segment++,R.progress=0,R.events.has(R.segment)&&(lt(R.events.get(R.segment),!0),R.dwell=2.7))}else return L(),!1;let I=(r.walkHeight(d.x,d.z)??0)+1.67;d.y=Qt.lerp(d.y,I,1-Math.exp(-N*12));let X=Math.atan2(Math.sin(nt[0]-E),Math.cos(nt[0]-E));return E+=X*(1-Math.exp(-N*3.4)),C=Qt.lerp(C,ls(nt[1],-.4,.42),1-Math.exp(-N*4.4)),e.position.copy(d),e.rotation.set(C,E,0,"YXZ"),R.dwell===0}let G=Ei(0,0,0);function ht(){let N=fc[T];e.position.set(...N.position),er.matches||(e.position.x+=Math.sin(y*.09)*1.22,e.position.y+=Math.cos(y*.13)*.38),_n&&T===0&&(e.position.x-=10,e.position.z-=4),e.lookAt(G.set(...N.look))}function xt(){let N=_.clientWidth,q=_.clientHeight;if(!N||!q)return;let Y=Math.min(2,devicePixelRatio);v.width=Math.round(N*Y),v.height=Math.round(q*Y),p.setTransform(Y,0,0,Y,0,0);let nt=X=>pt(X)*N,I=X=>Dt(X)*q;p.fillStyle="#e2d9b9",p.fillRect(0,0,N,q),p.strokeStyle="#b7ad9045",p.lineWidth=1;for(let X=0;X<N;X+=23)p.beginPath(),p.moveTo(X,0),p.lineTo(X,q),p.stroke();for(let X=0;X<q;X+=23)p.beginPath(),p.moveTo(0,X),p.lineTo(N,X),p.stroke();p.beginPath();for(let X=tt.west;X<=tt.east;X+=1)p.lineTo(nt(X),I(We(X)-Qn(X)));for(let X=tt.east;X>=tt.west;X-=1)p.lineTo(nt(X),I(We(X)+Qn(X)));p.closePath(),p.fillStyle="#819991",p.fill(),p.strokeStyle="#596c60",p.stroke();for(let X of r.obstacles)X.x1-X.x0<2.2||X.z1-X.z0<2.2||(p.fillStyle=X.x0>101&&X.x1<112?"#836f58":"#a49875",p.fillRect(nt(X.x0),I(X.z0),nt(X.x1)-nt(X.x0),I(X.z1)-I(X.z0)));p.beginPath();for(let[X,st]of $o)p.lineTo(nt(X),I(st));if(p.strokeStyle="#f6ecce",p.lineWidth=4,p.stroke(),p.strokeStyle="#934f3c",p.lineWidth=1.3,p.setLineDash([4,3]),p.stroke(),p.setLineDash([]),p.font="bold "+Math.max(11,N*.021)+"px SimSun, serif",p.fillStyle="#f0e8cf",p.fillText("\u6C74\u6CB3",nt(-19),I(5)),p.fillStyle="#665b46",p.fillText("\u5317 \u2191",N-34,16),S!=="scenic"){let X=nt(d.x),st=I(d.z),bt=-Math.sin(E),vt=-Math.cos(E);p.beginPath(),p.moveTo(X+8*bt,st+8*vt),p.lineTo(X-4*bt+4*vt,st-4*vt-4*bt),p.lineTo(X-4*bt-4*vt,st-4*vt+4*bt),p.closePath(),p.fillStyle="#263d31",p.fill(),p.strokeStyle="#fff5da",p.lineWidth=1,p.stroke(),K=d.x,yt=d.z}}function b(){document.pointerLockElement&&document.exitPointerLock(),Ct("map-panel").hidden=!1,Ct("map-button").setAttribute("aria-expanded","true"),xt(),Ct("close-map").focus()}function g(N=!0){Ct("map-panel").hidden||(Ct("map-panel").hidden=!0,Ct("map-button").setAttribute("aria-expanded","false"),N&&Ct("map-button").focus())}let P=["\u5317","\u4E1C\u5317","\u4E1C","\u4E1C\u5357","\u5357","\u897F\u5357","\u897F","\u897F\u5317"],z=["\u8FB0\u65F6","\u5DF3\u65F6","\u5348\u65F6","\u672A\u65F6","\u7533\u65F6"];function J(N){let q=Math.floor(N*60+.002),Y=Math.floor(q/60),nt=mc(Y)+":"+mc(q%60);et!==nt&&(Ct("clock").textContent=nt,Ct("clock").dateTime=nt,Ct("period").textContent=z[ls(Math.floor((Y-7)/2),0,4)],Ct("time-range")!==document.activeElement&&(Ct("time-range").value=String(N)),et=nt),e.getWorldDirection(G);let I=(Math.round(Math.atan2(G.x,-G.z)/(Math.PI/4))+8)%8;O%12===1&&(Ct("heading-text").textContent=P[I]+" \u2191")}function k(){gn.classList.add("ready"),Ct("start").disabled=!1,Ct("intro-tour").disabled=!1,Ct("load-status").textContent="",f=!0}function ut(N){let q=H?ls((N-H)/1e3,.001,.12):.016;H=N,O++,F||(y+=q);let Y=8+((M+y*.0078)%8.75+8.75)%8.75,nt=!1;S==="scenic"?ht():S==="tour"?nt=V(q):Ct("map-panel").hidden&&(nt=U(q)),(!F||O===1)&&(n.value=y,a.update(y)),o.update(y,Y,e,O),i.render(t,e),O%5===1&&ct(),O%4===1&&J(Y),!Ct("map-panel").hidden&&O%10===1&&Math.hypot(d.x-K,d.z-yt)>.38&&xt(),l.update(Se[x]?.sound??"river",nt,Math.abs(d.x-Re)<5&&Math.abs(d.z)<21,q),f||k(),Q=requestAnimationFrame(ut)}Ct("start").addEventListener("click",()=>$t(()=>re(0,!1))),Ct("intro-tour").addEventListener("click",()=>$t(()=>re(0,!0))),Ct("home").addEventListener("click",()=>$t(()=>B())),Ct("view").addEventListener("click",()=>$t(()=>B(S==="scenic"?(T+1)%fc.length:0))),Ct("tour").addEventListener("click",()=>{S==="tour"?L():$t(()=>re(x>=Se.length-1?0:Math.max(0,x),!0))}),Ct("map-button").addEventListener("click",()=>{f&&(Ct("map-panel").hidden?b():g())}),Ct("close-map").addEventListener("click",()=>g()),Ct("time-button").addEventListener("click",()=>{let N=Ct("day-panel");N.hidden=!N.hidden,Ct("time-button").setAttribute("aria-expanded",String(!N.hidden))}),Ct("time-range").addEventListener("input",N=>{M=Number(N.target.value)-8-y*.0078}),Ct("full").hidden=!document.fullscreenEnabled,Ct("full").addEventListener("click",async()=>{document.fullscreenElement?await document.exitFullscreen().catch(()=>{}):await gn.requestFullscreen().catch(()=>{})});function it(N){F=N;let q=Ct("pause"),Y=N?"\u7EE7\u7EED\u57CE\u4E2D\u52A8\u6001":"\u6682\u505C\u57CE\u4E2D\u52A8\u6001";q.title=Y,q.setAttribute("aria-label",Y),q.setAttribute("aria-pressed",String(N)),q.textContent=N?"\u25B7":"\u2161"}it(F),Ct("pause").addEventListener("click",()=>it(!F)),Ct("take-control").addEventListener("click",async()=>{try{await Ve.requestPointerLock()}catch{}}),document.addEventListener("pointerlockchange",()=>{_t(),document.pointerLockElement===Ve?Ve.focus({preventScroll:!0}):c.clear()});function Tt(N,q,Y){E-=N*Y,C=ls(C-q*Y,-1.22,1.18)}Ve.addEventListener("pointerdown",N=>{S==="scenic"||N.button!==0||(L(),!document.pointerLockElement&&(h.id=N.pointerId,h.x=N.clientX,h.y=N.clientY,Ve.setPointerCapture(N.pointerId),gn.classList.add("dragging")))}),Ve.addEventListener("pointermove",N=>{h.id===N.pointerId&&(Tt(N.clientX-h.x,N.clientY-h.y,_n?.006:.0052),h.x=N.clientX,h.y=N.clientY)}),Ve.addEventListener("lostpointercapture",()=>{h.id=null,gn.classList.remove("dragging")}),document.addEventListener("mousemove",N=>{document.pointerLockElement===Ve&&Tt(N.movementX,N.movementY,.0022)});let gt=Ct("joystick");function mt(N){let q=gt.getBoundingClientRect(),Y=q.width/2,nt=N.clientX-q.left-Y,I=N.clientY-q.top-Y,X=Y*.67,st=Math.max(1,Math.hypot(nt,I)/X);nt/=st,I/=st,u.x=nt/X,u.y=-I/X,Ct("stick").style.transform="translate("+nt+"px,"+I+"px)"}gt.addEventListener("pointerdown",N=>{u.id=N.pointerId,gt.setPointerCapture(u.id),mt(N)}),gt.addEventListener("pointermove",N=>{N.pointerId===u.id&&mt(N)}),gt.addEventListener("lostpointercapture",()=>{u.id=null,u.x=0,u.y=0,Ct("stick").style.transform=""});let dt=new Set(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"]);window.addEventListener("keydown",N=>{let q=N.key.toLowerCase();if(q==="escape"){Ct("map-panel").hidden?Ct("day-panel").hidden?S==="tour"&&L():Ct("time-button").click():g();return}if(!Ct("map-panel").hidden){if(q==="tab"){let Y=[...Ct("map-panel").querySelectorAll("button")],nt=Y[0],I=Y.at(-1);N.shiftKey&&document.activeElement===nt&&(N.preventDefault(),I.focus()),!N.shiftKey&&document.activeElement===I&&(N.preventDefault(),nt.focus())}return}N.target.closest?.("input")||N.altKey||N.ctrlKey||N.metaKey||(q==="m"&&!N.repeat&&b(),S!=="scenic"&&dt.has(q)&&(N.preventDefault(),L(),c.add(q)))}),window.addEventListener("keyup",N=>c.delete(N.key.toLowerCase())),window.addEventListener("blur",()=>c.clear()),document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Q),c.clear()):(H=0,Q=requestAnimationFrame(ut))}),Ve.addEventListener("webglcontextlost",N=>{N.preventDefault(),cancelAnimationFrame(Q),gn.classList.remove("ready"),B(),Ct("load-status").textContent="\u4E09\u7EF4\u573A\u666F\u6682\u65F6\u4E2D\u65AD\uFF0C\u6B63\u5728\u7B49\u5F85\u6D4F\u89C8\u5668\u6062\u590D\u3002"}),Ve.addEventListener("webglcontextrestored",()=>{O=0,H=0,f=!1,Q=requestAnimationFrame(ut)}),Ve.dataset.city="three",new URLSearchParams(location.search).has("test")&&(window.cityTest={camera:e,world:r,life:a,pathProblems:wt,stops:Se,renderer:i,get mode(){return S},get player(){return d.toArray()},get time(){return y},get index(){return x},enter:re,walk:D,advanceTour(N){for(;S==="tour"&&N>0;)V(.05),N-=.05}}),Q=requestAnimationFrame(ut)}requestAnimationFrame(()=>setTimeout(()=>_g().catch(i=>{console.error(i),Ct("load-status").textContent="\u5F53\u524D\u6D4F\u89C8\u5668\u7684 WebGL 2 \u4E09\u7EF4\u573A\u666F\u65E0\u6CD5\u542F\u52A8\u3002"}),30));})();
/*! For license information please see city3d.js.LEGAL.txt */
