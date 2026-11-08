try {

    // Mark JS as available before first paint: the mobile nav only
    // collapses behind the Menu button when this class is present, so a
    // slow or failed script load can never leave the links unreachable.
    document.documentElement.classList.add('js');
  
} catch (e) { if (window.console) console.warn('page script:', e); }
try {
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).leaflet={})}(this,function(t){"use strict";function l(t){for(var e,i,n=1,o=arguments.length;n<o;n++)for(e in i=arguments[n])t[e]=i[e];return t}var R=Object.create||function(t){return N.prototype=t,new N};function N(){}function a(t,e){var i,n=Array.prototype.slice;return t.bind?t.bind.apply(t,n.call(arguments,1)):(i=n.call(arguments,2),function(){return t.apply(e,i.length?i.concat(n.call(arguments)):arguments)})}var D=0;function h(t){return"_leaflet_id"in t||(t._leaflet_id=++D),t._leaflet_id}function j(t,e,i){var n,o,s=function(){n=!1,o&&(r.apply(i,o),o=!1)},r=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(s,e),n=!0)};return r}function H(t,e,i){var n=e[1],e=e[0],o=n-e;return t===n&&i?t:((t-e)%o+o)%o+e}function u(){return!1}function i(t,e){return!1===e?t:(e=Math.pow(10,void 0===e?6:e),Math.round(t*e)/e)}function W(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function F(t){return W(t).split(/\s+/)}function c(t,e){for(var i in Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?R(t.options):{}),e)t.options[i]=e[i];return t.options}function U(t,e,i){var n,o=[];for(n in t)o.push(encodeURIComponent(i?n.toUpperCase():n)+"="+encodeURIComponent(t[n]));return(e&&-1!==e.indexOf("?")?"&":"?")+o.join("&")}var V=/\{ *([\w_ -]+) *\}/g;function q(t,i){return t.replace(V,function(t,e){e=i[e];if(void 0===e)throw new Error("No value provided for variable "+t);return e="function"==typeof e?e(i):e})}var d=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function G(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var K="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function Y(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var X=0;function J(t){var e=+new Date,i=Math.max(0,16-(e-X));return X=e+i,window.setTimeout(t,i)}var $=window.requestAnimationFrame||Y("RequestAnimationFrame")||J,Q=window.cancelAnimationFrame||Y("CancelAnimationFrame")||Y("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function x(t,e,i){if(!i||$!==J)return $.call(window,a(t,e));t.call(e)}function r(t){t&&Q.call(window,t)}var tt={__proto__:null,extend:l,create:R,bind:a,get lastId(){return D},stamp:h,throttle:j,wrapNum:H,falseFn:u,formatNum:i,trim:W,splitWords:F,setOptions:c,getParamString:U,template:q,isArray:d,indexOf:G,emptyImageUrl:K,requestFn:$,cancelFn:Q,requestAnimFrame:x,cancelAnimFrame:r};function et(){}et.extend=function(t){function e(){c(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()}var i,n=e.__super__=this.prototype,o=R(n);for(i in(o.constructor=e).prototype=o,this)Object.prototype.hasOwnProperty.call(this,i)&&"prototype"!==i&&"__super__"!==i&&(e[i]=this[i]);if(t.statics&&l(e,t.statics),t.includes){var s=t.includes;if("undefined"!=typeof L&&L&&L.Mixin){s=d(s)?s:[s];for(var r=0;r<s.length;r++)s[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}l.apply(null,[o].concat(t.includes))}return l(o,t),delete o.statics,delete o.includes,o.options&&(o.options=n.options?R(n.options):{},l(o.options,t.options)),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=o._initHooks.length;t<e;t++)o._initHooks[t].call(this)}},e},et.include=function(t){var e=this.prototype.options;return l(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},et.mergeOptions=function(t){return l(this.prototype.options,t),this},et.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};var e={on:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e);else for(var o=0,s=(t=F(t)).length;o<s;o++)this._on(t[o],e,i);return this},off:function(t,e,i){if(arguments.length)if("object"==typeof t)for(var n in t)this._off(n,t[n],e);else{t=F(t);for(var o=1===arguments.length,s=0,r=t.length;s<r;s++)o?this._off(t[s]):this._off(t[s],e,i)}else delete this._events;return this},_on:function(t,e,i,n){"function"!=typeof e?console.warn("wrong listener type: "+typeof e):!1===this._listens(t,e,i)&&(e={fn:e,ctx:i=i===this?void 0:i},n&&(e.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(e))},_off:function(t,e,i){var n,o,s;if(this._events&&(n=this._events[t]))if(1===arguments.length){if(this._firingCount)for(o=0,s=n.length;o<s;o++)n[o].fn=u;delete this._events[t]}else"function"!=typeof e?console.warn("wrong listener type: "+typeof e):!1!==(e=this._listens(t,e,i))&&(i=n[e],this._firingCount&&(i.fn=u,this._events[t]=n=n.slice()),n.splice(e,1))},fire:function(t,e,i){if(this.listens(t,i)){var n=l({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,r=o.length;s<r;s++){var a=o[s],h=a.fn;a.once&&this.off(t,h,a.ctx),h.call(a.ctx||this,n)}this._firingCount--}}i&&this._propagateEvent(n)}return this},listens:function(t,e,i,n){"string"!=typeof t&&console.warn('"string" type argument expected');var o=e,s=("function"!=typeof e&&(n=!!e,i=o=void 0),this._events&&this._events[t]);if(s&&s.length&&!1!==this._listens(t,o,i))return!0;if(n)for(var r in this._eventParents)if(this._eventParents[r].listens(t,e,i,n))return!0;return!1},_listens:function(t,e,i){if(this._events){var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,s=n.length;o<s;o++)if(n[o].fn===e&&n[o].ctx===i)return o}return!1},once:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e,!0);else for(var o=0,s=(t=F(t)).length;o<s;o++)this._on(t[o],e,i,!0);return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[h(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[h(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,l({layer:t.target,propagatedFrom:t.target},t),!0)}},it=(e.addEventListener=e.on,e.removeEventListener=e.clearAllEventListeners=e.off,e.addOneTimeEventListener=e.once,e.fireEvent=e.fire,e.hasEventListeners=e.listens,et.extend(e));function p(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var nt=Math.trunc||function(t){return 0<t?Math.floor(t):Math.ceil(t)};function m(t,e,i){return t instanceof p?t:d(t)?new p(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new p(t.x,t.y):new p(t,e,i)}function f(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}function _(t,e){return!t||t instanceof f?t:new f(t,e)}function s(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}function g(t,e){return t instanceof s?t:new s(t,e)}function v(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,void 0!==i&&(this.alt=+i)}function w(t,e,i){return t instanceof v?t:d(t)&&"object"!=typeof t[0]?3===t.length?new v(t[0],t[1],t[2]):2===t.length?new v(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new v(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===e?null:new v(t,e,i)}p.prototype={clone:function(){return new p(this.x,this.y)},add:function(t){return this.clone()._add(m(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(m(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new p(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new p(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=nt(this.x),this.y=nt(this.y),this},distanceTo:function(t){var e=(t=m(t)).x-this.x,t=t.y-this.y;return Math.sqrt(e*e+t*t)},equals:function(t){return(t=m(t)).x===this.x&&t.y===this.y},contains:function(t){return t=m(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+i(this.x)+", "+i(this.y)+")"}},f.prototype={extend:function(t){var e,i;if(t){if(t instanceof p||"number"==typeof t[0]||"x"in t)e=i=m(t);else if(e=(t=_(t)).min,i=t.max,!e||!i)return this;this.min||this.max?(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)):(this.min=e.clone(),this.max=i.clone())}return this},getCenter:function(t){return m((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return m(this.min.x,this.max.y)},getTopRight:function(){return m(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return(t=("number"==typeof t[0]||t instanceof p?m:_)(t))instanceof f?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=_(t);var e=this.min,i=this.max,n=t.min,t=t.max,o=t.x>=e.x&&n.x<=i.x,t=t.y>=e.y&&n.y<=i.y;return o&&t},overlaps:function(t){t=_(t);var e=this.min,i=this.max,n=t.min,t=t.max,o=t.x>e.x&&n.x<i.x,t=t.y>e.y&&n.y<i.y;return o&&t},isValid:function(){return!(!this.min||!this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,t=Math.abs(e.y-i.y)*t;return _(m(e.x-n,e.y-t),m(i.x+n,i.y+t))},equals:function(t){return!!t&&(t=_(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight()))}},s.prototype={extend:function(t){var e,i,n=this._southWest,o=this._northEast;if(t instanceof v)i=e=t;else{if(!(t instanceof s))return t?this.extend(w(t)||g(t)):this;if(e=t._southWest,i=t._northEast,!e||!i)return this}return n||o?(n.lat=Math.min(e.lat,n.lat),n.lng=Math.min(e.lng,n.lng),o.lat=Math.max(i.lat,o.lat),o.lng=Math.max(i.lng,o.lng)):(this._southWest=new v(e.lat,e.lng),this._northEast=new v(i.lat,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,t=Math.abs(e.lng-i.lng)*t;return new s(new v(e.lat-n,e.lng-t),new v(i.lat+n,i.lng+t))},getCenter:function(){return new v((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new v(this.getNorth(),this.getWest())},getSouthEast:function(){return new v(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t=("number"==typeof t[0]||t instanceof v||"lat"in t?w:g)(t);var e,i,n=this._southWest,o=this._northEast;return t instanceof s?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=o.lat&&e.lng>=n.lng&&i.lng<=o.lng},intersects:function(t){t=g(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),t=t.getNorthEast(),o=t.lat>=e.lat&&n.lat<=i.lat,t=t.lng>=e.lng&&n.lng<=i.lng;return o&&t},overlaps:function(t){t=g(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),t=t.getNorthEast(),o=t.lat>e.lat&&n.lat<i.lat,t=t.lng>e.lng&&n.lng<i.lng;return o&&t},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return!!t&&(t=g(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e))},isValid:function(){return!(!this._southWest||!this._northEast)}};var ot={latLngToPoint:function(t,e){t=this.projection.project(t),e=this.scale(e);return this.transformation._transform(t,e)},pointToLatLng:function(t,e){e=this.scale(e),t=this.transformation.untransform(t,e);return this.projection.unproject(t)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){var e;return this.infinite?null:(e=this.projection.bounds,t=this.scale(t),new f(this.transformation.transform(e.min,t),this.transformation.transform(e.max,t)))},infinite:!(v.prototype={equals:function(t,e){return!!t&&(t=w(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===e?1e-9:e))},toString:function(t){return"LatLng("+i(this.lat,t)+", "+i(this.lng,t)+")"},distanceTo:function(t){return st.distance(this,w(t))},wrap:function(){return st.wrapLatLng(this)},toBounds:function(t){var t=180*t/40075017,e=t/Math.cos(Math.PI/180*this.lat);return g([this.lat-t,this.lng-e],[this.lat+t,this.lng+e])},clone:function(){return new v(this.lat,this.lng,this.alt)}}),wrapLatLng:function(t){var e=this.wrapLng?H(t.lng,this.wrapLng,!0):t.lng;return new v(this.wrapLat?H(t.lat,this.wrapLat,!0):t.lat,e,t.alt)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,e=e.lng-i.lng;return 0==n&&0==e?t:(i=t.getSouthWest(),t=t.getNorthEast(),new s(new v(i.lat-n,i.lng-e),new v(t.lat-n,t.lng-e)))}},st=l({},ot,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,s=Math.sin((e.lat-t.lat)*i/2),e=Math.sin((e.lng-t.lng)*i/2),t=s*s+Math.cos(n)*Math.cos(o)*e*e,i=2*Math.atan2(Math.sqrt(t),Math.sqrt(1-t));return this.R*i}}),rt=6378137,rt={R:rt,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,i=Math.max(Math.min(i,t.lat),-i),i=Math.sin(i*e);return new p(this.R*t.lng*e,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(t){var e=180/Math.PI;return new v((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:new f([-(rt=rt*Math.PI),-rt],[rt,rt])};function at(t,e,i,n){d(t)?(this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3]):(this._a=t,this._b=e,this._c=i,this._d=n)}function ht(t,e,i,n){return new at(t,e,i,n)}at.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return t.x=(e=e||1)*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return new p((t.x/(e=e||1)-this._b)/this._a,(t.y/e-this._d)/this._c)}};var lt=l({},st,{code:"EPSG:3857",projection:rt,transformation:ht(lt=.5/(Math.PI*rt.R),.5,-lt,.5)}),ut=l({},lt,{code:"EPSG:900913"});function ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function dt(t,e){for(var i,n,o,s,r="",a=0,h=t.length;a<h;a++){for(i=0,n=(o=t[a]).length;i<n;i++)r+=(i?"L":"M")+(s=o[i]).x+" "+s.y;r+=e?b.svg?"z":"x":""}return r||"M0 0"}var _t=document.documentElement.style,pt="ActiveXObject"in window,mt=pt&&!document.addEventListener,n="msLaunchUri"in navigator&&!("documentMode"in document),ft=y("webkit"),gt=y("android"),vt=y("android 2")||y("android 3"),yt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),yt=gt&&y("Google")&&yt<537&&!("AudioNode"in window),xt=!!window.opera,wt=!n&&y("chrome"),bt=y("gecko")&&!ft&&!xt&&!pt,Pt=!wt&&y("safari"),Lt=y("phantom"),o="OTransition"in _t,Tt=0===navigator.platform.indexOf("Win"),Mt=pt&&"transition"in _t,zt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!vt,_t="MozPerspective"in _t,Ct=!window.L_DISABLE_3D&&(Mt||zt||_t)&&!o&&!Lt,Zt="undefined"!=typeof orientation||y("mobile"),St=Zt&&ft,Et=Zt&&zt,kt=!window.PointerEvent&&window.MSPointerEvent,Ot=!(!window.PointerEvent&&!kt),At="ontouchstart"in window||!!window.TouchEvent,Bt=!window.L_NO_TOUCH&&(At||Ot),It=Zt&&xt,Rt=Zt&&bt,Nt=1<(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI),Dt=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",u,e),window.removeEventListener("testPassiveEventSupport",u,e)}catch(t){}return t}(),jt=!!document.createElement("canvas").getContext,Ht=!(!document.createElementNS||!ct("svg").createSVGRect),Wt=!!Ht&&((Wt=document.createElement("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(Wt.firstChild&&Wt.firstChild.namespaceURI));function y(t){return 0<=navigator.userAgent.toLowerCase().indexOf(t)}var b={ie:pt,ielt9:mt,edge:n,webkit:ft,android:gt,android23:vt,androidStock:yt,opera:xt,chrome:wt,gecko:bt,safari:Pt,phantom:Lt,opera12:o,win:Tt,ie3d:Mt,webkit3d:zt,gecko3d:_t,any3d:Ct,mobile:Zt,mobileWebkit:St,mobileWebkit3d:Et,msPointer:kt,pointer:Ot,touch:Bt,touchNative:At,mobileOpera:It,mobileGecko:Rt,retina:Nt,passiveEvents:Dt,canvas:jt,svg:Ht,vml:!Ht&&function(){try{var t=document.createElement("div"),e=(t.innerHTML='<v:shape adj="1"/>',t.firstChild);return e.style.behavior="url(#default#VML)",e&&"object"==typeof e.adj}catch(t){return!1}}(),inlineSvg:Wt,mac:0===navigator.platform.indexOf("Mac"),linux:0===navigator.platform.indexOf("Linux")},Ft=b.msPointer?"MSPointerDown":"pointerdown",Ut=b.msPointer?"MSPointerMove":"pointermove",Vt=b.msPointer?"MSPointerUp":"pointerup",qt=b.msPointer?"MSPointerCancel":"pointercancel",Gt={touchstart:Ft,touchmove:Ut,touchend:Vt,touchcancel:qt},Kt={touchstart:function(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&O(e);ee(t,e)},touchmove:ee,touchend:ee,touchcancel:ee},Yt={},Xt=!1;function Jt(t,e,i){return"touchstart"!==e||Xt||(document.addEventListener(Ft,$t,!0),document.addEventListener(Ut,Qt,!0),document.addEventListener(Vt,te,!0),document.addEventListener(qt,te,!0),Xt=!0),Kt[e]?(i=Kt[e].bind(this,i),t.addEventListener(Gt[e],i,!1),i):(console.warn("wrong event specified:",e),u)}function $t(t){Yt[t.pointerId]=t}function Qt(t){Yt[t.pointerId]&&(Yt[t.pointerId]=t)}function te(t){delete Yt[t.pointerId]}function ee(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){for(var i in e.touches=[],Yt)e.touches.push(Yt[i]);e.changedTouches=[e],t(e)}}var ie=200;function ne(t,i){t.addEventListener("dblclick",i);var n,o=0;function e(t){var e;1!==t.detail?n=t.detail:"mouse"===t.pointerType||t.sourceCapabilities&&!t.sourceCapabilities.firesTouchEvents||((e=Ne(t)).some(function(t){return t instanceof HTMLLabelElement&&t.attributes.for})&&!e.some(function(t){return t instanceof HTMLInputElement||t instanceof HTMLSelectElement})||((e=Date.now())-o<=ie?2===++n&&i(function(t){var e,i,n={};for(i in t)e=t[i],n[i]=e&&e.bind?e.bind(t):e;return(t=n).type="dblclick",n.detail=2,n.isTrusted=!1,n._simulated=!0,n}(t)):n=1,o=e))}return t.addEventListener("click",e),{dblclick:i,simDblclick:e}}var oe,se,re,ae,he,le,ue=we(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ce=we(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),de="webkitTransition"===ce||"OTransition"===ce?ce+"End":"transitionend";function _e(t){return"string"==typeof t?document.getElementById(t):t}function pe(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];return"auto"===(i=i&&"auto"!==i||!document.defaultView?i:(t=document.defaultView.getComputedStyle(t,null))?t[e]:null)?null:i}function P(t,e,i){t=document.createElement(t);return t.className=e||"",i&&i.appendChild(t),t}function T(t){var e=t.parentNode;e&&e.removeChild(t)}function me(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function fe(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function ge(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function ve(t,e){return void 0!==t.classList?t.classList.contains(e):0<(t=xe(t)).length&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(t)}function M(t,e){var i;if(void 0!==t.classList)for(var n=F(e),o=0,s=n.length;o<s;o++)t.classList.add(n[o]);else ve(t,e)||ye(t,((i=xe(t))?i+" ":"")+e)}function z(t,e){void 0!==t.classList?t.classList.remove(e):ye(t,W((" "+xe(t)+" ").replace(" "+e+" "," ")))}function ye(t,e){void 0===t.className.baseVal?t.className=e:t.className.baseVal=e}function xe(t){return void 0===(t=t.correspondingElement?t.correspondingElement:t).className.baseVal?t.className:t.className.baseVal}function C(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(t){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}}function we(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function be(t,e,i){e=e||new p(0,0);t.style[ue]=(b.ie3d?"translate("+e.x+"px,"+e.y+"px)":"translate3d("+e.x+"px,"+e.y+"px,0)")+(i?" scale("+i+")":"")}function Z(t,e){t._leaflet_pos=e,b.any3d?be(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Pe(t){return t._leaflet_pos||new p(0,0)}function Le(){S(window,"dragstart",O)}function Te(){k(window,"dragstart",O)}function Me(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(ze(),le=(he=t).style.outlineStyle,t.style.outlineStyle="none",S(window,"keydown",ze))}function ze(){he&&(he.style.outlineStyle=le,le=he=void 0,k(window,"keydown",ze))}function Ce(t){for(;!((t=t.parentNode).offsetWidth&&t.offsetHeight||t===document.body););return t}function Ze(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}ae="onselectstart"in document?(re=function(){S(window,"selectstart",O)},function(){k(window,"selectstart",O)}):(se=we(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]),re=function(){var t;se&&(t=document.documentElement.style,oe=t[se],t[se]="none")},function(){se&&(document.documentElement.style[se]=oe,oe=void 0)});pt={__proto__:null,TRANSFORM:ue,TRANSITION:ce,TRANSITION_END:de,get:_e,getStyle:pe,create:P,remove:T,empty:me,toFront:fe,toBack:ge,hasClass:ve,addClass:M,removeClass:z,setClass:ye,getClass:xe,setOpacity:C,testProp:we,setTransform:be,setPosition:Z,getPosition:Pe,get disableTextSelection(){return re},get enableTextSelection(){return ae},disableImageDrag:Le,enableImageDrag:Te,preventOutline:Me,restoreOutline:ze,getSizedParentNode:Ce,getScale:Ze};function S(t,e,i,n){if(e&&"object"==typeof e)for(var o in e)ke(t,o,e[o],i);else for(var s=0,r=(e=F(e)).length;s<r;s++)ke(t,e[s],i,n);return this}var E="_leaflet_events";function k(t,e,i,n){if(1===arguments.length)Se(t),delete t[E];else if(e&&"object"==typeof e)for(var o in e)Oe(t,o,e[o],i);else if(e=F(e),2===arguments.length)Se(t,function(t){return-1!==G(e,t)});else for(var s=0,r=e.length;s<r;s++)Oe(t,e[s],i,n);return this}function Se(t,e){for(var i in t[E]){var n=i.split(/\d/)[0];e&&!e(n)||Oe(t,n,null,null,i)}}var Ee={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ke(e,t,i,n){var o,s,r=t+h(i)+(n?"_"+h(n):"");e[E]&&e[E][r]||(s=o=function(t){return i.call(n||e,t||window.event)},!b.touchNative&&b.pointer&&0===t.indexOf("touch")?o=Jt(e,t,o):b.touch&&"dblclick"===t?o=ne(e,o):"addEventListener"in e?"touchstart"===t||"touchmove"===t||"wheel"===t||"mousewheel"===t?e.addEventListener(Ee[t]||t,o,!!b.passiveEvents&&{passive:!1}):"mouseenter"===t||"mouseleave"===t?e.addEventListener(Ee[t],o=function(t){t=t||window.event,We(e,t)&&s(t)},!1):e.addEventListener(t,s,!1):e.attachEvent("on"+t,o),e[E]=e[E]||{},e[E][r]=o)}function Oe(t,e,i,n,o){o=o||e+h(i)+(n?"_"+h(n):"");var s,r,i=t[E]&&t[E][o];i&&(!b.touchNative&&b.pointer&&0===e.indexOf("touch")?(n=t,r=i,Gt[s=e]?n.removeEventListener(Gt[s],r,!1):console.warn("wrong event specified:",s)):b.touch&&"dblclick"===e?(n=i,(r=t).removeEventListener("dblclick",n.dblclick),r.removeEventListener("click",n.simDblclick)):"removeEventListener"in t?t.removeEventListener(Ee[e]||e,i,!1):t.detachEvent("on"+e,i),t[E][o]=null)}function Ae(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Be(t){return ke(t,"wheel",Ae),this}function Ie(t){return S(t,"mousedown touchstart dblclick contextmenu",Ae),t._leaflet_disable_click=!0,this}function O(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Re(t){return O(t),Ae(t),this}function Ne(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function De(t,e){var i,n;return e?(n=(i=Ze(e)).boundingClientRect,new p((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)):new p(t.clientX,t.clientY)}var je=b.linux&&b.chrome?window.devicePixelRatio:b.mac?3*window.devicePixelRatio:0<window.devicePixelRatio?2*window.devicePixelRatio:1;function He(t){return b.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/je:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}function We(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(t){return!1}return i!==t}var mt={__proto__:null,on:S,off:k,stopPropagation:Ae,disableScrollPropagation:Be,disableClickPropagation:Ie,preventDefault:O,stop:Re,getPropagationPath:Ne,getMousePosition:De,getWheelDelta:He,isExternalTarget:We,addListener:S,removeListener:k},Fe=it.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Pe(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=x(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=1e3*this._duration;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){t=this._startPos.add(this._offset.multiplyBy(t));e&&t._round(),Z(this._el,t),this.fire("step")},_complete:function(){r(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),A=it.extend({options:{crs:lt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=c(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=a(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),void 0!==e.zoom&&(this._zoom=this._limitZoom(e.zoom)),e.center&&void 0!==e.zoom&&this.setView(w(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ce&&b.any3d&&!b.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),S(this._proxy,de,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if((e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(w(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&!0!==i)&&(void 0!==i.animate&&(i.zoom=l({animate:i.animate},i.zoom),i.pan=l({animate:i.animate,duration:i.duration},i.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan)))return clearTimeout(this._sizeTimer),this;return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(b.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(b.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),t=(t instanceof p?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),n=this.containerPointToLatLng(o.add(t));return this.setView(n,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():g(t);var i=m(e.paddingTopLeft||e.padding||[0,0]),n=m(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));return(o="number"==typeof e.maxZoom?Math.min(e.maxZoom,o):o)===1/0?{center:t.getCenter(),zoom:o}:(e=n.subtract(i).divideBy(2),n=this.project(t.getSouthWest(),o),i=this.project(t.getNorthEast(),o),{center:this.unproject(n.add(i).divideBy(2).add(e),o),zoom:o})},fitBounds:function(t,e){if((t=g(t)).isValid())return t=this._getBoundsCenterZoom(t,e),this.setView(t.center,t.zoom,e);throw new Error("Bounds are not valid.")},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){var i;return e=e||{},(t=m(t).round()).x||t.y?(!0===e.animate||this.getSize().contains(t)?(this._panAnim||(this._panAnim=new Fe,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),!1!==e.animate?(M(this._mapPane,"leaflet-pan-anim"),i=this._getMapPanePos().subtract(t).round(),this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)):(this._rawPanBy(t),this.fire("move").fire("moveend"))):this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this):this.fire("moveend")},flyTo:function(n,o,t){if(!1===(t=t||{}).animate||!b.any3d)return this.setView(n,o,t);this._stop();var s=this.project(this.getCenter()),r=this.project(n),e=this.getSize(),a=this._zoom,h=(n=w(n),o=void 0===o?a:o,Math.max(e.x,e.y)),i=h*this.getZoomScale(a,o),l=r.distanceTo(s)||1,u=1.42,c=u*u;function d(t){t=(i*i-h*h+(t?-1:1)*c*c*l*l)/(2*(t?i:h)*c*l),t=Math.sqrt(t*t+1)-t;return t<1e-9?-18:Math.log(t)}function _(t){return(Math.exp(t)-Math.exp(-t))/2}function p(t){return(Math.exp(t)+Math.exp(-t))/2}var m=d(0);function f(t){return h*(p(m)*(_(t=m+u*t)/p(t))-_(m))/c}var g=Date.now(),v=(d(1)-m)/u,y=t.duration?1e3*t.duration:1e3*v*.8;return this._moveStart(!0,t.noMoveStart),function t(){var e=(Date.now()-g)/y,i=(1-Math.pow(1-e,1.5))*v;e<=1?(this._flyToFrame=x(t,this),this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(i)/l)),a),this.getScaleZoom(h/(e=i,h*(p(m)/p(m+u*e))),a),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}.call(this),this},flyToBounds:function(t,e){t=this._getBoundsCenterZoom(t,e);return this.flyTo(t.center,t.zoom,e)},setMaxBounds:function(t){return t=g(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),t=this._limitCenter(i,this._zoom,g(t));return i.equals(t)||this.panTo(t,e),this._enforcingBounds=!1,this},panInside:function(t,e){var i=m((e=e||{}).paddingTopLeft||e.padding||[0,0]),n=m(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),t=this.project(t),s=this.getPixelBounds(),i=_([s.min.add(i),s.max.subtract(n)]),s=i.getSize();return i.contains(t)||(this._enforcingBounds=!0,n=t.subtract(i.getCenter()),i=i.extend(t).getSize().subtract(s),o.x+=n.x<0?-i.x:i.x,o.y+=n.y<0?-i.y:i.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1),this},invalidateSize:function(t){if(!this._loaded)return this;t=l({animate:!1,pan:!0},!0===t?{animate:!0}:t);var e=this.getSize(),i=(this._sizeChanged=!0,this._lastCenter=null,this.getSize()),n=e.divideBy(2).round(),o=i.divideBy(2).round(),n=n.subtract(o);return n.x||n.y?(t.animate&&t.pan?this.panBy(n):(t.pan&&this._rawPanBy(n),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(a(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){var e,i;return t=this._locateOptions=l({timeout:1e4,watch:!1},t),"geolocation"in navigator?(e=a(this._handleGeolocationResponse,this),i=a(this._handleGeolocationError,this),t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t)):this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e;this._container._leaflet_id&&(e=t.code,t=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout"),this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+t+"."}))},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e,i,n=new v(t.coords.latitude,t.coords.longitude),o=n.toBounds(2*t.coords.accuracy),s=this._locateOptions,r=(s.setView&&(e=this.getBoundsZoom(o),this.setView(n,s.maxZoom?Math.min(e,s.maxZoom):e)),{latlng:n,bounds:o,timestamp:t.timestamp});for(i in t.coords)"number"==typeof t.coords[i]&&(r[i]=t.coords[i]);this.fire("locationfound",r)}},addHandler:function(t,e){return e&&(e=this[t]=new e(this),this._handlers.push(e),this.options[t]&&e.enable()),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}for(var t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),T(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(r(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)T(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){e=P("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),e||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new s(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=g(t),i=m(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),t=t.getSouthEast(),i=this.getSize().subtract(i),t=_(this.project(t,n),this.project(r,n)).getSize(),r=b.any3d?this.options.zoomSnap:1,a=i.x/t.x,i=i.y/t.y,t=e?Math.max(a,i):Math.min(a,i),n=this.getScaleZoom(t,n);return r&&(n=Math.round(n/(r/100))*(r/100),n=e?Math.ceil(n/r)*r:Math.floor(n/r)*r),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new p(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){t=this._getTopLeftPoint(t,e);return new f(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=void 0===e?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs,t=(e=void 0===e?this._zoom:e,i.zoom(t*i.scale(e)));return isNaN(t)?1/0:t},project:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.latLngToPoint(w(t),e)},unproject:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.pointToLatLng(m(t),e)},layerPointToLatLng:function(t){t=m(t).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(t){return this.project(w(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(w(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(g(t))},distance:function(t,e){return this.options.crs.distance(w(t),w(e))},containerPointToLayerPoint:function(t){return m(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return m(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){t=this.containerPointToLayerPoint(m(t));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(w(t)))},mouseEventToContainerPoint:function(t){return De(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){t=this._container=_e(t);if(!t)throw new Error("Map container not found.");if(t._leaflet_id)throw new Error("Map container is already initialized.");S(t,"scroll",this._onScroll,this),this._containerId=h(t)},_initLayout:function(){var t=this._container,e=(this._fadeAnimated=this.options.fadeAnimation&&b.any3d,M(t,"leaflet-container"+(b.touch?" leaflet-touch":"")+(b.retina?" leaflet-retina":"")+(b.ielt9?" leaflet-oldie":"")+(b.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":"")),pe(t,"position"));"absolute"!==e&&"relative"!==e&&"fixed"!==e&&"sticky"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Z(this._mapPane,new p(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(M(t.markerPane,"leaflet-zoom-hide"),M(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){Z(this._mapPane,new p(0,0));var n=!this._loaded,o=(this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset"),this._zoom!==e);this._moveStart(o,i)._move(t,e)._moveEnd(o),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){void 0===e&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((o||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return r(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Z(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={};var e=t?k:S;e((this._targets[h(this._container)]=this)._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),b.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){r(this._resizeRequest),this._resizeRequest=x(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i,n=[],o="mouseout"===e||"mouseover"===e,s=t.target||t.srcElement,r=!1;s;){if((i=this._targets[h(s)])&&("click"===e||"preclick"===e)&&this._draggableMoved(i)){r=!0;break}if(i&&i.listens(e,!0)){if(o&&!We(s,t))break;if(n.push(i),o)break}if(s===this._container)break;s=s.parentNode}return n=n.length||r||o||!this.listens(e,!0)?n:[this]},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e,i=t.target||t.srcElement;!this._loaded||i._leaflet_disable_events||"click"===t.type&&this._isClickDisabled(i)||("mousedown"===(e=t.type)&&Me(i),this._fireDOMEvent(t,e))},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){"click"===t.type&&((a=l({},t)).type="preclick",this._fireDOMEvent(a,a.type,i));var n=this._findEventTargets(t,e);if(i){for(var o=[],s=0;s<i.length;s++)i[s].listens(e,!0)&&o.push(i[s]);n=o.concat(n)}if(n.length){"contextmenu"===e&&O(t);var r,a=n[0],h={originalEvent:t};for("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type&&(r=a.getLatLng&&(!a._radius||a._radius<=10),h.containerPoint=r?this.latLngToContainerPoint(a.getLatLng()):this.mouseEventToContainerPoint(t),h.layerPoint=this.containerPointToLayerPoint(h.containerPoint),h.latlng=r?a.getLatLng():this.layerPointToLatLng(h.layerPoint)),s=0;s<n.length;s++)if(n[s].fire(e,h,!0),h.originalEvent._stopped||!1===n[s].options.bubblingMouseEvents&&-1!==G(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Pe(this._mapPane)||new p(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){return(t&&void 0!==e?this._getNewPixelOrigin(t,e):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){i=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(i)},_latLngBoundsToNewLayerBounds:function(t,e,i){i=this._getNewPixelOrigin(i,e);return _([this.project(t.getSouthWest(),e)._subtract(i),this.project(t.getNorthWest(),e)._subtract(i),this.project(t.getSouthEast(),e)._subtract(i),this.project(t.getNorthEast(),e)._subtract(i)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){var n,o;return!i||(n=this.project(t,e),o=this.getSize().divideBy(2),o=new f(n.subtract(o),n.add(o)),o=this._getBoundsOffset(o,i,e),Math.abs(o.x)<=1&&Math.abs(o.y)<=1)?t:this.unproject(n.add(o),e)},_limitOffset:function(t,e){var i;return e?(i=new f((i=this.getPixelBounds()).min.add(t),i.max.add(t)),t.add(this._getBoundsOffset(i,e))):t},_getBoundsOffset:function(t,e,i){e=_(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),i=e.min.subtract(t.min),e=e.max.subtract(t.max);return new p(this._rebound(i.x,-e.x),this._rebound(i.y,-e.y))},_rebound:function(t,e){return 0<t+e?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=b.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){z(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){t=this._getCenterOffset(t)._trunc();return!(!0!==(e&&e.animate)&&!this.getSize().contains(t))&&(this.panBy(t,e),!0)},_createAnimProxy:function(){var t=this._proxy=P("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var e=ue,i=this._proxy.style[e];be(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),i===this._proxy.style[e]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){T(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();be(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&0<=t.propertyName.indexOf("transform")&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(!this._animatingZoom){if(i=i||{},!this._zoomAnimated||!1===i.animate||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),n=this._getCenterOffset(t)._divideBy(1-1/n);if(!0!==i.animate&&!this.getSize().contains(n))return!1;x(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this)}return!0},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,M(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(a(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&z(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Ue(t){return new B(t)}var B=et.extend({options:{position:"topright"},initialize:function(t){c(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),t=t._controlCorners[i];return M(e,"leaflet-control"),-1!==i.indexOf("bottom")?t.insertBefore(e,t.firstChild):t.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map&&(T(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){this._map&&t&&0<t.screenX&&0<t.screenY&&this._map.getContainer().focus()}}),Ve=(A.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var i=this._controlCorners={},n="leaflet-",o=this._controlContainer=P("div",n+"control-container",this._container);function t(t,e){i[t+e]=P("div",n+t+" "+n+e,o)}t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)T(this._controlCorners[t]);T(this._controlContainer),delete this._controlCorners,delete this._controlContainer}}),B.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){for(var n in c(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),(this._map=t).on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return B.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);t=this._getLayer(h(t));return t&&this._layers.splice(this._layers.indexOf(t),1),this._map?this._update():this},expand:function(){M(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(M(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):z(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return z(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=P("div",t),i=this.options.collapsed,n=(e.setAttribute("aria-haspopup",!0),Ie(e),Be(e),this._section=P("section",t+"-list")),o=(i&&(this._map.on("click",this.collapse,this),S(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this)),this._layersLink=P("a",t+"-toggle",e));o.href="#",o.title="Layers",o.setAttribute("role","button"),S(o,{keydown:function(t){13===t.keyCode&&this._expandSafely()},click:function(t){O(t),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=P("div",t+"-base",n),this._separator=P("div",t+"-separator",n),this._overlaysList=P("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&h(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(a(function(t,e){return this.options.sortFunction(t.layer,e.layer,t.name,e.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(this._container){me(this._baseLayersList),me(this._overlaysList),this._layerControlInputs=[];for(var t,e,i,n=0,o=0;o<this._layers.length;o++)i=this._layers[o],this._addItem(i),e=e||i.overlay,t=t||!i.overlay,n+=i.overlay?0:1;this.options.hideSingleBase&&(this._baseLayersList.style.display=(t=t&&1<n)?"":"none"),this._separator.style.display=e&&t?"":"none"}return this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(h(t.target)),t=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;t&&this._map.fire(t,e)},_createRadioElement:function(t,e){t='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",e=document.createElement("div");return e.innerHTML=t,e.firstChild},_addItem:function(t){var e,i=document.createElement("label"),n=this._map.hasLayer(t.layer),n=(t.overlay?((e=document.createElement("input")).type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=n):e=this._createRadioElement("leaflet-base-layers_"+h(this),n),this._layerControlInputs.push(e),e.layerId=h(t.layer),S(e,"click",this._onInputClick,this),document.createElement("span")),o=(n.innerHTML=" "+t.name,document.createElement("span"));return i.appendChild(o),o.appendChild(e),o.appendChild(n),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){if(!this._preventClick){var t,e,i=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=i.length-1;0<=s;s--)t=i[s],e=this._getLayer(t.layerId).layer,t.checked?n.push(e):t.checked||o.push(e);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t,e,i=this._layerControlInputs,n=this._map.getZoom(),o=i.length-1;0<=o;o--)t=i[o],e=this._getLayer(t.layerId).layer,t.disabled=void 0!==e.options.minZoom&&n<e.options.minZoom||void 0!==e.options.maxZoom&&n>e.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section,e=(this._preventClick=!0,S(t,"click",O),this.expand(),this);setTimeout(function(){k(t,"click",O),e._preventClick=!1})}})),qe=B.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=P("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){i=P("a",i,n);return i.innerHTML=t,i.href="#",i.title=e,i.setAttribute("role","button"),i.setAttribute("aria-label",e),Ie(i),S(i,"click",Re),S(i,"click",o,this),S(i,"click",this._refocusOnMap,this),i},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";z(this._zoomInButton,e),z(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),!this._disabled&&t._zoom!==t.getMinZoom()||(M(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),!this._disabled&&t._zoom!==t.getMaxZoom()||(M(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}}),Ge=(A.mergeOptions({zoomControl:!0}),A.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new qe,this.addControl(this.zoomControl))}),B.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=P("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=P("div",e,i)),t.imperial&&(this._iScale=P("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,t=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(t)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t);this._updateScale(this._mScale,e<1e3?e+" m":e/1e3+" km",e/t)},_updateImperial:function(t){var e,i,t=3.2808399*t;5280<t?(i=this._getRoundNum(e=t/5280),this._updateScale(this._iScale,i+" mi",i/e)):(i=this._getRoundNum(t),this._updateScale(this._iScale,i+" ft",i/t))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),t=t/e;return e*(t=10<=t?10:5<=t?5:3<=t?3:2<=t?2:1)}})),Ke=B.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(b.inlineSvg?'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ':"")+"Leaflet</a>"},initialize:function(t){c(this,t),this._attributions={}},onAdd:function(t){for(var e in(t.attributionControl=this)._container=P("div","leaflet-control-attribution"),Ie(this._container),t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t,e=[];for(t in this._attributions)this._attributions[t]&&e.push(t);var i=[];this.options.prefix&&i.push(this.options.prefix),e.length&&i.push(e.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}}),n=(A.mergeOptions({attributionControl:!0}),A.addInitHook(function(){this.options.attributionControl&&(new Ke).addTo(this)}),B.Layers=Ve,B.Zoom=qe,B.Scale=Ge,B.Attribution=Ke,Ue.layers=function(t,e,i){return new Ve(t,e,i)},Ue.zoom=function(t){return new qe(t)},Ue.scale=function(t){return new Ge(t)},Ue.attribution=function(t){return new Ke(t)},et.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},enabled:function(){return!!this._enabled}})),ft=(n.addTo=function(t,e){return t.addHandler(e,this),this},{Events:e}),Ye=b.touch?"touchstart mousedown":"mousedown",Xe=it.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){c(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(S(this._dragStartTarget,Ye,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Xe._dragging===this&&this.finishDrag(!0),k(this._dragStartTarget,Ye,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){var e,i;this._enabled&&(this._moved=!1,ve(this._element,"leaflet-zoom-anim")||(t.touches&&1!==t.touches.length?Xe._dragging===this&&this.finishDrag():Xe._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||((Xe._dragging=this)._preventOutline&&Me(this._element),Le(),re(),this._moving||(this.fire("down"),i=t.touches?t.touches[0]:t,e=Ce(this._element),this._startPoint=new p(i.clientX,i.clientY),this._startPos=Pe(this._element),this._parentScale=Ze(e),i="mousedown"===t.type,S(document,i?"mousemove":"touchmove",this._onMove,this),S(document,i?"mouseup":"touchend touchcancel",this._onUp,this)))))},_onMove:function(t){var e;this._enabled&&(t.touches&&1<t.touches.length?this._moved=!0:!(e=new p((e=t.touches&&1===t.touches.length?t.touches[0]:t).clientX,e.clientY)._subtract(this._startPoint)).x&&!e.y||Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(e.x/=this._parentScale.x,e.y/=this._parentScale.y,O(t),this._moved||(this.fire("dragstart"),this._moved=!0,M(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),M(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,this._lastEvent=t,this._updatePosition()))},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),Z(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){z(document.body,"leaflet-dragging"),this._lastTarget&&(z(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),k(document,"mousemove touchmove",this._onMove,this),k(document,"mouseup touchend touchcancel",this._onUp,this),Te(),ae();var e=this._moved&&this._moving;this._moving=!1,Xe._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Je(t,e,i){for(var n,o,s,r,a,h,l,u=[1,4,2,8],c=0,d=t.length;c<d;c++)t[c]._code=si(t[c],e);for(s=0;s<4;s++){for(h=u[s],n=[],c=0,o=(d=t.length)-1;c<d;o=c++)r=t[c],a=t[o],r._code&h?a._code&h||((l=oi(a,r,h,e,i))._code=si(l,e),n.push(l)):(a._code&h&&((l=oi(a,r,h,e,i))._code=si(l,e),n.push(l)),n.push(r));t=n}return t}function $e(t,e){var i,n,o,s,r,a,h;if(!t||0===t.length)throw new Error("latlngs not passed");I(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);for(var l=w([0,0]),u=g(t),c=(u.getNorthWest().distanceTo(u.getSouthWest())*u.getNorthEast().distanceTo(u.getNorthWest())<1700&&(l=Qe(t)),t.length),d=[],_=0;_<c;_++){var p=w(t[_]);d.push(e.project(w([p.lat-l.lat,p.lng-l.lng])))}for(_=r=a=h=0,i=c-1;_<c;i=_++)n=d[_],o=d[i],s=n.y*o.x-o.y*n.x,a+=(n.x+o.x)*s,h+=(n.y+o.y)*s,r+=3*s;u=0===r?d[0]:[a/r,h/r],u=e.unproject(m(u));return w([u.lat+l.lat,u.lng+l.lng])}function Qe(t){for(var e=0,i=0,n=0,o=0;o<t.length;o++){var s=w(t[o]);e+=s.lat,i+=s.lng,n++}return w([e/n,i/n])}var ti,gt={__proto__:null,clipPolygon:Je,polygonCenter:$e,centroid:Qe};function ei(t,e){if(e&&t.length){var i=t=function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;n<s;n++)(function(t,e){var i=e.x-t.x,e=e.y-t.y;return i*i+e*e})(t[n],t[o])>e&&(i.push(t[n]),o=n);o<s-1&&i.push(t[s-1]);return i}(t,e=e*e),n=i.length,o=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(n);o[0]=o[n-1]=1,function t(e,i,n,o,s){var r,a,h,l=0;for(a=o+1;a<=s-1;a++)h=ri(e[a],e[o],e[s],!0),l<h&&(r=a,l=h);n<l&&(i[r]=1,t(e,i,n,o,r),t(e,i,n,r,s))}(i,o,e,0,n-1);var s,r=[];for(s=0;s<n;s++)o[s]&&r.push(i[s]);return r}return t.slice()}function ii(t,e,i){return Math.sqrt(ri(t,e,i,!0))}function ni(t,e,i,n,o){var s,r,a,h=n?ti:si(t,i),l=si(e,i);for(ti=l;;){if(!(h|l))return[t,e];if(h&l)return!1;a=si(r=oi(t,e,s=h||l,i,o),i),s===h?(t=r,h=a):(e=r,l=a)}}function oi(t,e,i,n,o){var s,r,a=e.x-t.x,e=e.y-t.y,h=n.min,n=n.max;return 8&i?(s=t.x+a*(n.y-t.y)/e,r=n.y):4&i?(s=t.x+a*(h.y-t.y)/e,r=h.y):2&i?(s=n.x,r=t.y+e*(n.x-t.x)/a):1&i&&(s=h.x,r=t.y+e*(h.x-t.x)/a),new p(s,r,o)}function si(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function ri(t,e,i,n){var o=e.x,e=e.y,s=i.x-o,r=i.y-e,a=s*s+r*r;return 0<a&&(1<(a=((t.x-o)*s+(t.y-e)*r)/a)?(o=i.x,e=i.y):0<a&&(o+=s*a,e+=r*a)),s=t.x-o,r=t.y-e,n?s*s+r*r:new p(o,e)}function I(t){return!d(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function ai(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),I(t)}function hi(t,e){var i,n,o,s,r,a;if(!t||0===t.length)throw new Error("latlngs not passed");I(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);for(var h=w([0,0]),l=g(t),u=(l.getNorthWest().distanceTo(l.getSouthWest())*l.getNorthEast().distanceTo(l.getNorthWest())<1700&&(h=Qe(t)),t.length),c=[],d=0;d<u;d++){var _=w(t[d]);c.push(e.project(w([_.lat-h.lat,_.lng-h.lng])))}for(i=d=0;d<u-1;d++)i+=c[d].distanceTo(c[d+1])/2;if(0===i)a=c[0];else for(n=d=0;d<u-1;d++)if(o=c[d],s=c[d+1],i<(n+=r=o.distanceTo(s))){a=[s.x-(r=(n-i)/r)*(s.x-o.x),s.y-r*(s.y-o.y)];break}l=e.unproject(m(a));return w([l.lat+h.lat,l.lng+h.lng])}var vt={__proto__:null,simplify:ei,pointToSegmentDistance:ii,closestPointOnSegment:function(t,e,i){return ri(t,e,i)},clipSegment:ni,_getEdgeIntersection:oi,_getBitCode:si,_sqClosestPointOnSegment:ri,isFlat:I,_flat:ai,polylineCenter:hi},yt={project:function(t){return new p(t.lng,t.lat)},unproject:function(t){return new v(t.y,t.x)},bounds:new f([-180,-90],[180,90])},xt={R:6378137,R_MINOR:6356752.314245179,bounds:new f([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,o=Math.sqrt(1-o*o),s=o*Math.sin(n),s=Math.tan(Math.PI/4-n/2)/Math.pow((1-s)/(1+s),o/2),n=-i*Math.log(Math.max(s,1e-10));return new p(t.lng*e*i,n)},unproject:function(t){for(var e,i=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,l=.1;h<15&&1e-7<Math.abs(l);h++)e=s*Math.sin(a),e=Math.pow((1-e)/(1+e),s/2),a+=l=Math.PI/2-2*Math.atan(r*e)-a;return new v(a*i,t.x*i/n)}},wt={__proto__:null,LonLat:yt,Mercator:xt,SphericalMercator:rt},Pt=l({},st,{code:"EPSG:3395",projection:xt,transformation:ht(bt=.5/(Math.PI*xt.R),.5,-bt,.5)}),li=l({},st,{code:"EPSG:4326",projection:yt,transformation:ht(1/180,1,-1/180,.5)}),Lt=l({},ot,{projection:yt,transformation:ht(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,e=e.lat-t.lat;return Math.sqrt(i*i+e*e)},infinite:!0}),o=(ot.Earth=st,ot.EPSG3395=Pt,ot.EPSG3857=lt,ot.EPSG900913=ut,ot.EPSG4326=li,ot.Simple=Lt,it.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[h(t)]=this},removeInteractiveTarget:function(t){return delete this._map._targets[h(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e,i=t.target;i.hasLayer(this)&&(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents&&(e=this.getEvents(),i.on(e,this),this.once("remove",function(){i.off(e,this)},this)),this.onAdd(i),this.fire("add"),i.fire("layeradd",{layer:this}))}})),ui=(A.include({addLayer:function(t){var e;if(t._layerAdd)return e=h(t),this._layers[e]||((this._layers[e]=t)._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this;throw new Error("The provided object is not a Layer.")},removeLayer:function(t){var e=h(t);return this._layers[e]&&(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},hasLayer:function(t){return h(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){for(var e=0,i=(t=t?d(t)?t:[t]:[]).length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[h(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){t=h(t);this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels())},_updateZoomLevels:function(){var t,e=1/0,i=-1/0,n=this._getZoomSpan();for(t in this._zoomBoundLayers)var o=this._zoomBoundLayers[t].options,e=void 0===o.minZoom?e:Math.min(e,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom);this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=e===1/0?void 0:e,n!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}}),o.extend({initialize:function(t,e){var i,n;if(c(this,e),this._layers={},t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){t=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(t){return("number"==typeof t?t:this.getLayerId(t))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)(i=this._layers[e])[t]&&i[t].apply(i,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:h})),ci=ui.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),ui.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?((t=t in this._layers?this._layers[t]:t).removeEventParent(this),ui.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t,e=new s;for(t in this._layers){var i=this._layers[t];e.extend(i.getBounds?i.getBounds():i.getLatLng())}return e}}),di=et.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){c(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(i)return i=this._createImg(i,e&&"IMG"===e.tagName?e:null),this._setIconStyles(i,t),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),i;if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"],n=m(n="number"==typeof n?[n,n]:n),o=m("shadow"===e&&i.shadowAnchor||i.iconAnchor||n&&n.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),o&&(t.style.marginLeft=-o.x+"px",t.style.marginTop=-o.y+"px"),n&&(t.style.width=n.x+"px",t.style.height=n.y+"px")},_createImg:function(t,e){return(e=e||document.createElement("img")).src=t,e},_getIconUrl:function(t){return b.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});var _i=di.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return"string"!=typeof _i.imagePath&&(_i.imagePath=this._detectIconPath()),(this.options.imagePath||_i.imagePath)+di.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){function e(t,e,i){return(e=e.exec(t))&&e[i]}return(t=e(t,/^url\((['"])?(.+)\1\)$/,2))&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=P("div","leaflet-default-icon-path",document.body),e=pe(t,"background-image")||pe(t,"backgroundImage");return document.body.removeChild(t),(e=this._stripUrl(e))?e:(t=document.querySelector('link[href$="leaflet.css"]'))?t.href.substring(0,t.href.length-"leaflet.css".length-1):""}}),pi=n.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Xe(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),M(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&z(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=Pe(e._icon),r=i.getPixelBounds(),a=i.getPixelOrigin(),a=_(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));a.contains(s)||(o=m((Math.max(a.max.x,s.x)-a.max.x)/(r.max.x-a.max.x)-(Math.min(a.min.x,s.x)-a.min.x)/(r.min.x-a.min.x),(Math.max(a.max.y,s.y)-a.max.y)/(r.max.y-a.max.y)-(Math.min(a.min.y,s.y)-a.min.y)/(r.min.y-a.min.y)).multiplyBy(n),i.panBy(o,{animate:!1}),this._draggable._newPos._add(o),this._draggable._startPos._add(o),Z(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=x(this._adjustPan.bind(this,t)))},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(r(this._panRequest),this._panRequest=x(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=Pe(e._icon),o=e._map.layerPointToLatLng(n);i&&Z(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){r(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),mi=o.extend({options:{icon:new _i,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){c(this,e),this._latlng=w(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=w(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){var t;return this._icon&&this._map&&(t=this._map.latLngToLayerPoint(this._latlng).round(),this._setPos(t)),this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1,i=(i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),"IMG"===i.tagName&&(i.alt=t.alt||"")),M(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&S(i,"focus",this._panOnFocus,this),t.icon.createShadow(this._shadow)),o=!1;i!==this._shadow&&(this._removeShadow(),o=!0),i&&(M(i,e),i.alt=""),this._shadow=i,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),i&&o&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&k(this._icon,"focus",this._panOnFocus,this),T(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&T(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&Z(this._icon,t),this._shadow&&Z(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(t)},_initInteraction:function(){var t;this.options.interactive&&(M(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),pi&&(t=this.options.draggable,this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new pi(this),t&&this.dragging.enable()))},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&C(this._icon,t),this._shadow&&C(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t,e,i=this._map;i&&(t=(e=this.options.icon.options).iconSize?m(e.iconSize):m(0,0),e=e.iconAnchor?m(e.iconAnchor):m(0,0),i.panInside(this._latlng,{paddingTopLeft:e,paddingBottomRight:t.subtract(e)}))},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});var fi=o.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return c(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),gi=fi.extend({options:{fill:!0,radius:10},initialize:function(t,e){c(this,e),this._latlng=w(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=w(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return fi.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),t=[t+i,e+i];this._pxBounds=new f(this._point.subtract(t),this._point.add(t))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});var vi=gi.extend({initialize:function(t,e,i){if(c(this,e="number"==typeof e?l({},i,{radius:e}):e),this._latlng=w(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new s(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:fi.prototype.setStyle,_project:function(){var t,e,i,n,o,s=this._latlng.lng,r=this._latlng.lat,a=this._map,h=a.options.crs;h.distance===st.distance?(n=Math.PI/180,o=this._mRadius/st.R/n,t=a.project([r+o,s]),e=a.project([r-o,s]),e=t.add(e).divideBy(2),i=a.unproject(e).lat,n=Math.acos((Math.cos(o*n)-Math.sin(r*n)*Math.sin(i*n))/(Math.cos(r*n)*Math.cos(i*n)))/n,!isNaN(n)&&0!==n||(n=o/Math.cos(Math.PI/180*r)),this._point=e.subtract(a.getPixelOrigin()),this._radius=isNaN(n)?0:e.x-a.project([i,s-n]).x,this._radiusY=e.y-t.y):(o=h.unproject(h.project(this._latlng).subtract([this._mRadius,0])),this._point=a.latLngToLayerPoint(this._latlng),this._radius=this._point.x-a.latLngToLayerPoint(o).x),this._updateBounds()}});var yi=fi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){c(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=ri,o=0,s=this._parts.length;o<s;o++)for(var r=this._parts[o],a=1,h=r.length;a<h;a++){var l,u,c=n(t,l=r[a-1],u=r[a],!0);c<e&&(e=c,i=n(t,l,u))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(this._map)return hi(this._defaultShape(),this._map.options.crs);throw new Error("Must add layer to map before using getCenter()")},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=w(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new s,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return I(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=I(t),n=0,o=t.length;n<o;n++)i?(e[n]=w(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new f;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),t=new p(t,t);this._rawPxBounds&&(this._pxBounds=new f([this._rawPxBounds.min.subtract(t),this._rawPxBounds.max.add(t)]))},_projectLatlngs:function(t,e,i){var n,o,s=t[0]instanceof v,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),i.extend(o[n]);e.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var e,i,n,o,s=this._parts,r=0,a=0,h=this._rings.length;r<h;r++)for(e=0,i=(o=this._rings[r]).length;e<i-1;e++)(n=ni(o[e],o[e+1],t,e,!0))&&(s[a]=s[a]||[],s[a].push(n[0]),n[1]===o[e+1]&&e!==i-2||(s[a].push(n[1]),a++))},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=ei(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,o,s,r,a,h=this._clickTolerance();if(this._pxBounds&&this._pxBounds.contains(t))for(i=0,s=this._parts.length;i<s;i++)for(n=0,o=(r=(a=this._parts[i]).length)-1;n<r;o=n++)if((e||0!==n)&&ii(t,a[o],a[n])<=h)return!0;return!1}});yi._flat=ai;var xi=yi.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(this._map)return $e(this._defaultShape(),this._map.options.crs);throw new Error("Must add layer to map before using getCenter()")},_convertLatLngs:function(t){var t=yi.prototype._convertLatLngs.call(this,t),e=t.length;return 2<=e&&t[0]instanceof v&&t[0].equals(t[e-1])&&t.pop(),t},_setLatLngs:function(t){yi.prototype._setLatLngs.call(this,t),I(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return(I(this._latlngs[0])?this._latlngs:this._latlngs[0])[0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,e=new p(e,e),t=new f(t.min.subtract(e),t.max.add(e));if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var i,n=0,o=this._rings.length;n<o;n++)(i=Je(this._rings[n],t,!0)).length&&this._parts.push(i)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e,i,n,o,s,r,a,h,l=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(e=this._parts[o]).length)-1;s<h;r=s++)i=e[s],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(l=!l);return l||yi.prototype._containsPoint.call(this,t,!0)}});var wi=ci.extend({initialize:function(t,e){c(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,o=d(t)?t:t.features;if(o){for(e=0,i=o.length;e<i;e++)((n=o[e]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s,r=this.options;return(!r.filter||r.filter(t))&&(s=bi(t,r))?(s.feature=Zi(t),s.defaultOptions=s.options,this.resetStyle(s),r.onEachFeature&&r.onEachFeature(t,s),this.addLayer(s)):this},resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(t.options=l({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(e){return this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(t,e){t.setStyle&&("function"==typeof e&&(e=e(t.feature)),t.setStyle(e))}});function bi(t,e){var i,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],l=e&&e.pointToLayer,u=e&&e.coordsToLatLng||Li;if(!a&&!r)return null;switch(r.type){case"Point":return Pi(l,t,i=u(a),e);case"MultiPoint":for(o=0,s=a.length;o<s;o++)i=u(a[o]),h.push(Pi(l,t,i,e));return new ci(h);case"LineString":case"MultiLineString":return n=Ti(a,"LineString"===r.type?0:1,u),new yi(n,e);case"Polygon":case"MultiPolygon":return n=Ti(a,"Polygon"===r.type?1:2,u),new xi(n,e);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=bi({geometry:r.geometries[o],type:"Feature",properties:t.properties},e);c&&h.push(c)}return new ci(h);case"FeatureCollection":for(o=0,s=r.features.length;o<s;o++){var d=bi(r.features[o],e);d&&h.push(d)}return new ci(h);default:throw new Error("Invalid GeoJSON object.")}}function Pi(t,e,i,n){return t?t(e,i):new mi(i,n&&n.markersInheritOptions&&n)}function Li(t){return new v(t[1],t[0],t[2])}function Ti(t,e,i){for(var n,o=[],s=0,r=t.length;s<r;s++)n=e?Ti(t[s],e-1,i):(i||Li)(t[s]),o.push(n);return o}function Mi(t,e){return void 0!==(t=w(t)).alt?[i(t.lng,e),i(t.lat,e),i(t.alt,e)]:[i(t.lng,e),i(t.lat,e)]}function zi(t,e,i,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(e?zi(t[s],I(t[s])?0:e-1,i,n):Mi(t[s],n));return!e&&i&&0<o.length&&o.push(o[0].slice()),o}function Ci(t,e){return t.feature?l({},t.feature,{geometry:e}):Zi(e)}function Zi(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}Tt={toGeoJSON:function(t){return Ci(this,{type:"Point",coordinates:Mi(this.getLatLng(),t)})}};function Si(t,e){return new wi(t,e)}mi.include(Tt),vi.include(Tt),gi.include(Tt),yi.include({toGeoJSON:function(t){var e=!I(this._latlngs);return Ci(this,{type:(e?"Multi":"")+"LineString",coordinates:zi(this._latlngs,e?1:0,!1,t)})}}),xi.include({toGeoJSON:function(t){var e=!I(this._latlngs),i=e&&!I(this._latlngs[0]),t=zi(this._latlngs,i?2:e?1:0,!0,t);return Ci(this,{type:(i?"Multi":"")+"Polygon",coordinates:t=e?t:[t]})}}),ui.include({toMultiPoint:function(e){var i=[];return this.eachLayer(function(t){i.push(t.toGeoJSON(e).geometry.coordinates)}),Ci(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(e){var i,n,t=this.feature&&this.feature.geometry&&this.feature.geometry.type;return"MultiPoint"===t?this.toMultiPoint(e):(i="GeometryCollection"===t,n=[],this.eachLayer(function(t){t.toGeoJSON&&(t=t.toGeoJSON(e),i?n.push(t.geometry):"FeatureCollection"===(t=Zi(t)).type?n.push.apply(n,t.features):n.push(t))}),i?Ci(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n})}});var Mt=Si,Ei=o.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=g(e),c(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(M(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){T(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&fe(this._image),this},bringToBack:function(){return this._map&&ge(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=g(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,e=this._image=t?this._url:P("img");M(e,"leaflet-image-layer"),this._zoomAnimated&&M(e,"leaflet-zoom-animated"),this.options.className&&M(e,this.options.className),e.onselectstart=u,e.onmousemove=u,e.onload=a(this.fire,this,"load"),e.onerror=a(this._overlayOnError,this,"error"),!this.options.crossOrigin&&""!==this.options.crossOrigin||(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=e.src:(e.src=this._url,e.alt=this.options.alt)},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),t=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;be(this._image,t,e)},_reset:function(){var t=this._image,e=new f(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();Z(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){C(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),ki=Ei.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,e=this._image=t?this._url:P("video");if(M(e,"leaflet-image-layer"),this._zoomAnimated&&M(e,"leaflet-zoom-animated"),this.options.className&&M(e,this.options.className),e.onselectstart=u,e.onmousemove=u,e.onloadeddata=a(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=0<i.length?n:[e.src]}else{d(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var s=0;s<this._url.length;s++){var r=P("source");r.src=this._url[s],e.appendChild(r)}}}});var Oi=Ei.extend({_initImage:function(){var t=this._image=this._url;M(t,"leaflet-image-layer"),this._zoomAnimated&&M(t,"leaflet-zoom-animated"),this.options.className&&M(t,this.options.className),t.onselectstart=u,t.onmousemove=u}});var Ai=o.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof v||d(t))?(this._latlng=w(t),c(this,e)):(c(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return(t=arguments.length?t:this._source._map).hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&C(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&C(this._container,1),this.bringToFront(),this.options.interactive&&(M(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(C(this._container,0),this._removeTimeout=setTimeout(a(T,void 0,this._container),200)):T(this._container),this.options.interactive&&(z(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=w(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&fe(this._container),this},bringToBack:function(){return this._map&&ge(this._container),this},_prepareOpen:function(t){if(!(i=this._source)._map)return!1;if(i instanceof ci){var e,i=null,n=this._source._layers;for(e in n)if(n[e]._map){i=n[e];break}if(!i)return!1;this._source=i}if(!t)if(i.getCenter)t=i.getCenter();else if(i.getLatLng)t=i.getLatLng();else{if(!i.getBounds)throw new Error("Unable to get source layer LatLng.");t=i.getBounds().getCenter()}return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof e)t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){var t,e,i;this._map&&(e=this._map.latLngToLayerPoint(this._latlng),t=m(this.options.offset),i=this._getAnchor(),this._zoomAnimated?Z(this._container,e.add(i)):t=t.add(e).add(i),e=this._containerBottom=-t.y,i=this._containerLeft=-Math.round(this._containerWidth/2)+t.x,this._container.style.bottom=e+"px",this._container.style.left=i+"px")},_getAnchor:function(){return[0,0]}}),Bi=(A.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),o.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(c(o,n),o._source=this):(o=e&&!n?e:new t(n,this)).setContent(i),o}}),Ai.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return!(t=arguments.length?t:this._source._map).hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,Ai.prototype.openOn.call(this,t)},onAdd:function(t){Ai.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof fi||this._source.on("preclick",Ae))},onRemove:function(t){Ai.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof fi||this._source.off("preclick",Ae))},getEvents:function(){var t=Ai.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=P("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=P("div",t+"-content-wrapper",e);this._contentNode=P("div",t+"-content",i),Ie(e),Be(this._contentNode),S(e,"contextmenu",Ae),this._tipContainer=P("div",t+"-tip-container",e),this._tip=P("div",t+"-tip",this._tipContainer),this.options.closeButton&&((i=this._closeButton=P("a",t+"-close-button",e)).setAttribute("role","button"),i.setAttribute("aria-label","Close popup"),i.href="#close",i.innerHTML='<span aria-hidden="true">&#215;</span>',S(i,"click",function(t){O(t),this.close()},this))},_updateLayout:function(){var t=this._contentNode,e=t.style,i=(e.width="",e.whiteSpace="nowrap",t.offsetWidth),i=Math.min(i,this.options.maxWidth),i=(i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="",t.offsetHeight),n=this.options.maxHeight,o="leaflet-popup-scrolled";(n&&n<i?(e.height=n+"px",M):z)(t,o),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();Z(this._container,t.add(e))},_adjustPan:function(){var t,e,i,n,o,s,r,a;this.options.autoPan&&(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning?this._autopanning=!1:(t=this._map,e=parseInt(pe(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+e,a=this._containerWidth,(i=new p(this._containerLeft,-e-this._containerBottom))._add(Pe(this._container)),i=t.layerPointToContainerPoint(i),o=m(this.options.autoPanPadding),n=m(this.options.autoPanPaddingTopLeft||o),o=m(this.options.autoPanPaddingBottomRight||o),s=t.getSize(),r=0,i.x+a+o.x>s.x&&(r=i.x+a-s.x+o.x),i.x-r-n.x<(a=0)&&(r=i.x-n.x),i.y+e+o.y>s.y&&(a=i.y+e-s.y+o.y),i.y-a-n.y<0&&(a=i.y-n.y),(r||a)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([r,a]))))},_getAnchor:function(){return m(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}})),Ii=(A.mergeOptions({closePopupOnClick:!0}),A.include({openPopup:function(t,e,i){return this._initOverlay(Bi,t,e,i).openOn(this),this},closePopup:function(t){return(t=arguments.length?t:this._popup)&&t.close(),this}}),o.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Bi,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof ci||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var e;this._popup&&this._map&&(Re(t),e=t.layer||t.target,this._popup._source!==e||e instanceof fi?(this._popup._source=e,this.openPopup(t.latlng)):this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}}),Ai.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){Ai.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){Ai.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=Ai.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=P("div",t),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i=this._map,n=this._container,o=i.latLngToContainerPoint(i.getCenter()),i=i.layerPointToContainerPoint(t),s=this.options.direction,r=n.offsetWidth,a=n.offsetHeight,h=m(this.options.offset),l=this._getAnchor(),i="top"===s?(e=r/2,a):"bottom"===s?(e=r/2,0):(e="center"===s?r/2:"right"===s?0:"left"===s?r:i.x<o.x?(s="right",0):(s="left",r+2*(h.x+l.x)),a/2);t=t.subtract(m(e,i,!0)).add(h).add(l),z(n,"leaflet-tooltip-right"),z(n,"leaflet-tooltip-left"),z(n,"leaflet-tooltip-top"),z(n,"leaflet-tooltip-bottom"),M(n,"leaflet-tooltip-"+s),Z(n,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&C(this._container,t)},_animateZoom:function(t){t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(t)},_getAnchor:function(){return m(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}})),Ri=(A.include({openTooltip:function(t,e,i){return this._initOverlay(Ii,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),o.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ii,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){var e,i;!t&&this._tooltipHandlersAdded||(e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip},this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t)},openTooltip:function(t){return this._tooltip&&(this instanceof ci||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e="function"==typeof t.getElement&&t.getElement();e&&(S(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),S(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){t="function"==typeof t.getElement&&t.getElement();t&&t.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){var e;this._tooltip&&this._map&&(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag?(this._openOnceFlag=!0,(e=this)._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)})):(this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)))},_moveTooltip:function(t){var e=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(t=this._map.mouseEventToContainerPoint(t.originalEvent),t=this._map.containerPointToLayerPoint(t),e=this._map.layerPointToLatLng(t)),this._tooltip.setLatLng(e)}}),di.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var t=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;return e.html instanceof Element?(me(t),t.appendChild(e.html)):t.innerHTML=!1!==e.html?e.html:"",e.bgPos&&(e=m(e.bgPos),t.style.backgroundPosition=-e.x+"px "+-e.y+"px"),this._setIconStyles(t,"icon"),t},createShadow:function(){return null}}));di.Default=_i;var Ni=o.extend({options:{tileSize:256,opacity:1,updateWhenIdle:b.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){c(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),T(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(fe(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ge(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){var t;return this._map&&(this._removeAllTiles(),(t=this._clampZoom(this._map.getZoom()))!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=j(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof p?t:new p(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,i=this.getPane().children,n=-t(-1/0,1/0),o=0,s=i.length;o<s;o++)e=i[o].style.zIndex,i[o]!==this._container&&e&&(n=t(n,+e));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!b.ielt9){C(this._container,this.options.opacity);var t,e=+new Date,i=!1,n=!1;for(t in this._tiles){var o,s=this._tiles[t];s.current&&s.loaded&&(o=Math.min(1,(e-s.loaded)/200),C(s.el,o),o<1?i=!0:(s.active?n=!0:this._onOpaqueTile(s),s.active=!0))}n&&!this._noPrune&&this._pruneTiles(),i&&(r(this._fadeFrame),this._fadeFrame=x(this._updateOpacity,this))}},_onOpaqueTile:u,_initContainer:function(){this._container||(this._container=P("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(void 0!==t){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(T(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=P("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),u(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n}},_onUpdateLevel:u,_onRemoveLevel:u,_onCreateLevel:u,_pruneTiles:function(){if(this._map){var t,e,i,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)(i=this._tiles[t]).current&&!i.active&&(e=i.coords,this._retainParent(e.x,e.y,e.z,e.z-5)||this._retainChildren(e.x,e.y,e.z,e.z+2));for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)T(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var t=Math.floor(t/2),e=Math.floor(e/2),i=i-1,o=new p(+t,+e),o=(o.z=i,this._tileCoordsToKey(o)),o=this._tiles[o];return o&&o.active?o.retain=!0:(o&&o.loaded&&(o.retain=!0),n<i&&this._retainParent(t,e,i,n))},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*e;s<2*e+2;s++){var r=new p(o,s),r=(r.z=i+1,this._tileCoordsToKey(r)),r=this._tiles[r];r&&r.active?r.retain=!0:(r&&r.loaded&&(r.retain=!0),i+1<n&&this._retainChildren(o,s,i+1,n))}},_resetView:function(t){t=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),t,t)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return void 0!==e.minNativeZoom&&t<e.minNativeZoom?e.minNativeZoom:void 0!==e.maxNativeZoom&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e),o=void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom?void 0:this._clampZoom(o),s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),e=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();b.any3d?be(t.el,e,n):Z(t.el,e)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),i=e.getZoomScale(i,this._tileZoom),t=e.project(t,this._tileZoom).floor(),e=e.getSize().divideBy(2*i);return new f(t.subtract(e),t.add(e))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(void 0===t&&(t=e.getCenter()),void 0!==this._tileZoom){var n,e=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(e),s=o.getCenter(),r=[],e=this.options.keepBuffer,a=new f(o.getBottomLeft().subtract([e,-e]),o.getTopRight().add([e,-e]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(n in this._tiles){var h=this._tiles[n].coords;h.z===this._tileZoom&&a.contains(new p(h.x,h.y))||(this._tiles[n].current=!1)}if(1<Math.abs(i-this._tileZoom))this._setView(t,i);else{for(var l=o.min.y;l<=o.max.y;l++)for(var u=o.min.x;u<=o.max.x;u++){var c,d=new p(u,l);d.z=this._tileZoom,this._isValidTile(d)&&((c=this._tiles[this._tileCoordsToKey(d)])?c.current=!0:r.push(d))}if(r.sort(function(t,e){return t.distanceTo(s)-e.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));for(var _=document.createDocumentFragment(),u=0;u<r.length;u++)this._addTile(r[u],_);this._level.el.appendChild(_)}}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}return!this.options.bounds||(e=this._tileCoordsToBounds(t),g(this.options.bounds).overlaps(e))},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),i=n.add(i);return[e.unproject(n,t.z),e.unproject(i,t.z)]},_tileCoordsToBounds:function(t){t=this._tileCoordsToNwSe(t),t=new s(t[0],t[1]);return t=this.options.noWrap?t:this._map.wrapLatLngBounds(t)},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var t=t.split(":"),e=new p(+t[0],+t[1]);return e.z=+t[2],e},_removeTile:function(t){var e=this._tiles[t];e&&(T(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){M(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=u,t.onmousemove=u,b.ielt9&&this.options.opacity<1&&C(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),a(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&x(a(this._tileReady,this,t,null,o)),Z(o,i),this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);(i=this._tiles[n])&&(i.loaded=+new Date,this._map._fadeAnimated?(C(i.el,0),r(this._fadeFrame),this._fadeFrame=x(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(M(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),b.ielt9||!this._map._fadeAnimated?x(this._pruneTiles,this):setTimeout(a(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new p(this._wrapX?H(t.x,this._wrapX):t.x,this._wrapY?H(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new f(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});var Di=Ni.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,(e=c(this,e)).detectRetina&&b.retina&&0<e.maxZoom?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&void 0===e&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return S(i,"load",a(this._tileOnLoad,this,e,i)),S(i,"error",a(this._tileOnError,this,e,i)),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),"string"==typeof this.options.referrerPolicy&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:b.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};return this._map&&!this._map.options.crs.infinite&&(t=this._globalTileRange.max.y-t.y,this.options.tms&&(e.y=t),e["-y"]=t),q(this._url,l(e,this.options))},_tileOnLoad:function(t,e){b.ielt9?setTimeout(a(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom;return(t=this.options.zoomReverse?e-t:t)+this.options.zoomOffset},_getSubdomain:function(t){t=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[t]},_abortLoading:function(){var t,e,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=u,i.onerror=u,i.complete||(i.src=K,e=this._tiles[t].coords,T(i),delete this._tiles[t],this.fire("tileabort",{tile:i,coords:e})))},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",K),Ni.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(this._map&&(!i||i.getAttribute("src")!==K))return Ni.prototype._tileReady.call(this,t,e,i)}});function ji(t,e){return new Di(t,e)}var Hi=Di.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i,n=l({},this.defaultWmsParams);for(i in e)i in this.options||(n[i]=e[i]);var t=(e=c(this,e)).detectRetina&&b.retina?2:1,o=this.getTileSize();n.width=o.x*t,n.height=o.y*t,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=1.3<=this._wmsVersion?"crs":"srs";this.wmsParams[e]=this._crs.code,Di.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,i=_(i.project(e[0]),i.project(e[1])),e=i.min,i=i.max,e=(1.3<=this._wmsVersion&&this._crs===li?[e.y,e.x,i.y,i.x]:[e.x,e.y,i.x,i.y]).join(","),i=Di.prototype.getTileUrl.call(this,t);return i+U(this.wmsParams,i,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+e},setParams:function(t,e){return l(this.wmsParams,t),e||this.redraw(),this}});Di.WMS=Hi,ji.wms=function(t,e){return new Hi(t,e)};var Wi=o.extend({options:{padding:.1},initialize:function(t){c(this,t),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),M(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),n=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));b.any3d?be(this._container,n,i):Z(this._container,n)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new f(i,i.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Fi=Wi.extend({options:{tolerance:0},getEvents:function(){var t=Wi.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Wi.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");S(t,"mousemove",this._onMouseMove,this),S(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),S(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){r(this._redrawRequest),delete this._ctx,T(this._container),k(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){var t,e,i,n;this._map._animatingZoom&&this._bounds||(Wi.prototype._update.call(this),t=this._bounds,e=this._container,i=t.getSize(),n=b.retina?2:1,Z(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",b.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update"))},_reset:function(){Wi.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t);t=(this._layers[h(t)]=t)._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=t),this._drawLast=t,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,e=e.prev;i?i.prev=e:this._drawLast=e,e?e.next=i:this._drawFirst=i,delete t._order,delete this._layers[h(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){for(var e,i=t.options.dashArray.split(/[, ]+/),n=[],o=0;o<i.length;o++){if(e=Number(i[o]),isNaN(e))return;n.push(e)}t.options._dashArray=n}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||x(this._redraw,this))},_extendRedrawBounds:function(t){var e;t._pxBounds&&(e=(t.options.weight||0)+1,this._redrawBounds=this._redrawBounds||new f,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e])))},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t,e=this._redrawBounds;e?(t=e.getSize(),this._ctx.clearRect(e.min.x,e.min.y,t.x,t.y)):(this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore())},_draw:function(){var t,e,i=this._redrawBounds;this._ctx.save(),i&&(e=i.getSize(),this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()),this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(h.beginPath(),i=0;i<a;i++){for(n=0,o=r[i].length;n<o;n++)s=r[i][n],h[n?"lineTo":"moveTo"](s.x,s.y);e&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){var e,i,n,o;this._drawing&&!t._empty()&&(e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),1!=(o=(Math.max(Math.round(t._radiusY),1)||n)/n)&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,2*Math.PI,!1),1!=o&&i.restore(),this._fillStroke(i,t))},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&0!==i.weight&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e,i,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(n)&&(("click"===t.type||"preclick"===t.type)&&this._map._draggableMoved(e)||(i=e));this._fireEvent(!!i&&[i],t)},_onMouseMove:function(t){var e;!this._map||this._map.dragging.moving()||this._map._animatingZoom||(e=this._map.mouseEventToLayerPoint(t),this._handleMouseHover(t,e))},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(z(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(M(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(!!this._hoveredLayer&&[this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(a(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e,i,n=t._order;n&&(e=n.next,i=n.prev,e&&((e.prev=i)?i.next=e:e&&(this._drawFirst=e),n.prev=this._drawLast,(this._drawLast.next=n).next=null,this._drawLast=n,this._requestRedraw(t)))},_bringToBack:function(t){var e,i,n=t._order;n&&(e=n.next,(i=n.prev)&&((i.next=e)?e.prev=i:i&&(this._drawLast=i),n.prev=null,n.next=this._drawFirst,this._drawFirst.prev=n,this._drawFirst=n,this._requestRedraw(t)))}});function Ui(t){return b.canvas?new Fi(t):null}var Vi=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),zt={_initContainer:function(){this._container=P("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Wi.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=Vi("shape");M(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=Vi("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[h(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;T(e),t.removeInteractiveTarget(e),delete this._layers[h(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e=e||(t._stroke=Vi("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=d(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i=i||(t._fill=Vi("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){fe(t._container)},_bringToBack:function(t){ge(t._container)}},qi=b.vml?Vi:ct,Gi=Wi.extend({_initContainer:function(){this._container=qi("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=qi("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){T(this._container),k(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){var t,e,i;this._map._animatingZoom&&this._bounds||(Wi.prototype._update.call(this),e=(t=this._bounds).getSize(),i=this._container,this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),Z(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update"))},_initPath:function(t){var e=t._path=qi("path");t.options.className&&M(e,t.options.className),t.options.interactive&&M(e,"leaflet-interactive"),this._updateStyle(t),this._layers[h(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){T(t._path),t.removeInteractiveTarget(t._path),delete this._layers[h(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,t=t.options;e&&(t.stroke?(e.setAttribute("stroke",t.color),e.setAttribute("stroke-opacity",t.opacity),e.setAttribute("stroke-width",t.weight),e.setAttribute("stroke-linecap",t.lineCap),e.setAttribute("stroke-linejoin",t.lineJoin),t.dashArray?e.setAttribute("stroke-dasharray",t.dashArray):e.removeAttribute("stroke-dasharray"),t.dashOffset?e.setAttribute("stroke-dashoffset",t.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),t.fill?(e.setAttribute("fill",t.fillColor||t.color),e.setAttribute("fill-opacity",t.fillOpacity),e.setAttribute("fill-rule",t.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,dt(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n="a"+i+","+(Math.max(Math.round(t._radiusY),1)||i)+" 0 1,0 ",e=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+n+2*i+",0 "+n+2*-i+",0 ";this._setPath(t,e)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){fe(t._path)},_bringToBack:function(t){ge(t._path)}});function Ki(t){return b.svg||b.vml?new Gi(t):null}b.vml&&Gi.include(zt),A.include({getRenderer:function(t){t=(t=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer)||(this._renderer=this._createRenderer());return this.hasLayer(t)||this.addLayer(t),t},_getPaneRenderer:function(t){var e;return"overlayPane"!==t&&void 0!==t&&(void 0===(e=this._paneRenderers[t])&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e)},_createRenderer:function(t){return this.options.preferCanvas&&Ui(t)||Ki(t)}});var Yi=xi.extend({initialize:function(t,e){xi.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=g(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});Gi.create=qi,Gi.pointsToPath=dt,wi.geometryToLayer=bi,wi.coordsToLatLng=Li,wi.coordsToLatLngs=Ti,wi.latLngToCoords=Mi,wi.latLngsToCoords=zi,wi.getFeature=Ci,wi.asFeature=Zi,A.mergeOptions({boxZoom:!0});var _t=n.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){S(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){k(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){T(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),re(),Le(),this._startPoint=this._map.mouseEventToContainerPoint(t),S(document,{contextmenu:Re,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=P("div","leaflet-zoom-box",this._container),M(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var t=new f(this._point,this._startPoint),e=t.getSize();Z(this._box,t.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(T(this._box),z(this._container,"leaflet-crosshair")),ae(),Te(),k(document,{contextmenu:Re,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){1!==t.which&&1!==t.button||(this._finish(),this._moved&&(this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(a(this._resetState,this),0),t=new s(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point)),this._map.fitBounds(t).fire("boxzoomend",{boxZoomBounds:t})))},_onKeyDown:function(t){27===t.keyCode&&(this._finish(),this._clearDeferredResetState(),this._resetState())}}),Ct=(A.addInitHook("addHandler","boxZoom",_t),A.mergeOptions({doubleClickZoom:!0}),n.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,i=t.originalEvent.shiftKey?i-n:i+n;"center"===e.options.doubleClickZoom?e.setZoom(i):e.setZoomAround(t.containerPoint,i)}})),Zt=(A.addInitHook("addHandler","doubleClickZoom",Ct),A.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0}),n.extend({addHooks:function(){var t;this._draggable||(t=this._map,this._draggable=new Xe(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))),M(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){z(this._map._container,"leaflet-grab"),z(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t,e=this._map;e._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity?(t=g(this._map.options.maxBounds),this._offsetLimit=_(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))):this._offsetLimit=null,e.fire("movestart").fire("dragstart"),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){var e,i;this._map.options.inertia&&(e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos,this._positions.push(i),this._times.push(e),this._prunePositions(e)),this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;1<this._positions.length&&50<t-this._times[0];)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){var t,e;this._viscosity&&this._offsetLimit&&(t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit,t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t))},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,n=(n+e+i)%t-e-i,t=Math.abs(o+i)<Math.abs(n+i)?o:n;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=t},_onDragEnd:function(t){var e,i,n,o,s=this._map,r=s.options,a=!r.inertia||t.noInertia||this._times.length<2;s.fire("dragend",t),!a&&(this._prunePositions(+new Date),t=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,e=r.easeLinearity,a=(t=t.multiplyBy(e/a)).distanceTo([0,0]),i=Math.min(r.inertiaMaxSpeed,a),t=t.multiplyBy(i/a),n=i/(r.inertiaDeceleration*e),(o=t.multiplyBy(-n/2).round()).x||o.y)?(o=s._limitOffset(o,s.options.maxBounds),x(function(){s.panBy(o,{duration:n,easeLinearity:e,noMoveStart:!0,animate:!0})})):s.fire("moveend")}})),St=(A.addInitHook("addHandler","dragging",Zt),A.mergeOptions({keyboard:!0,keyboardPanDelta:80}),n.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),S(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),k(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){var t,e,i;this._focused||(i=document.body,t=document.documentElement,e=i.scrollTop||t.scrollTop,i=i.scrollLeft||t.scrollLeft,this._map._container.focus(),window.scrollTo(i,e))},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){for(var e=this._panKeys={},i=this.keyCodes,n=0,o=i.left.length;n<o;n++)e[i.left[n]]=[-1*t,0];for(n=0,o=i.right.length;n<o;n++)e[i.right[n]]=[t,0];for(n=0,o=i.down.length;n<o;n++)e[i.down[n]]=[0,t];for(n=0,o=i.up.length;n<o;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){for(var e=this._zoomKeys={},i=this.keyCodes,n=0,o=i.zoomIn.length;n<o;n++)e[i.zoomIn[n]]=t;for(n=0,o=i.zoomOut.length;n<o;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){S(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){k(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e,i,n=t.keyCode,o=this._map;if(n in this._panKeys)o._panAnim&&o._panAnim._inProgress||(i=this._panKeys[n],t.shiftKey&&(i=m(i).multiplyBy(3)),o.options.maxBounds&&(i=o._limitOffset(m(i),o.options.maxBounds)),o.options.worldCopyJump?(e=o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(i))),o.panTo(e)):o.panBy(i));else if(n in this._zoomKeys)o.setZoom(o.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[n]);else{if(27!==n||!o._popup||!o._popup.options.closeOnEscapeKey)return;o.closePopup()}Re(t)}}})),Et=(A.addInitHook("addHandler","keyboard",St),A.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60}),n.extend({addHooks:function(){S(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){k(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=He(t),i=this._map.options.wheelDebounceTime,e=(this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date),Math.max(i-(+new Date-this._startTime),0));clearTimeout(this._timer),this._timer=setTimeout(a(this._performZoom,this),e),Re(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0,n=(t._stop(),this._delta/(4*this._map.options.wheelPxPerZoomLevel)),n=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,i=i?Math.ceil(n/i)*i:n,n=t._limitZoom(e+(0<this._delta?i:-i))-e;this._delta=0,this._startTime=null,n&&("center"===t.options.scrollWheelZoom?t.setZoom(e+n):t.setZoomAround(this._lastMousePos,e+n))}})),kt=(A.addInitHook("addHandler","scrollWheelZoom",Et),A.mergeOptions({tapHold:b.touchNative&&b.safari&&b.mobile,tapTolerance:15}),n.extend({addHooks:function(){S(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){k(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){var e;clearTimeout(this._holdTimeout),1===t.touches.length&&(e=t.touches[0],this._startPos=this._newPos=new p(e.clientX,e.clientY),this._holdTimeout=setTimeout(a(function(){this._cancel(),this._isTapValid()&&(S(document,"touchend",O),S(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),600),S(document,"touchend touchcancel contextmenu",this._cancel,this),S(document,"touchmove",this._onMove,this))},_cancelClickPrevent:function t(){k(document,"touchend",O),k(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),k(document,"touchend touchcancel contextmenu",this._cancel,this),k(document,"touchmove",this._onMove,this)},_onMove:function(t){t=t.touches[0];this._newPos=new p(t.clientX,t.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){t=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});t._simulated=!0,e.target.dispatchEvent(t)}})),Ot=(A.addInitHook("addHandler","tapHold",kt),A.mergeOptions({touchZoom:b.touch,bounceAtZoomLimits:!0}),n.extend({addHooks:function(){M(this._map._container,"leaflet-touch-zoom"),S(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){z(this._map._container,"leaflet-touch-zoom"),k(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e,i,n=this._map;!t.touches||2!==t.touches.length||n._animatingZoom||this._zooming||(e=n.mouseEventToContainerPoint(t.touches[0]),i=n.mouseEventToContainerPoint(t.touches[1]),this._centerPoint=n.getSize()._divideBy(2),this._startLatLng=n.containerPointToLatLng(this._centerPoint),"center"!==n.options.touchZoom&&(this._pinchStartLatLng=n.containerPointToLatLng(e.add(i)._divideBy(2))),this._startDist=e.distanceTo(i),this._startZoom=n.getZoom(),this._moved=!1,this._zooming=!0,n._stop(),S(document,"touchmove",this._onTouchMove,this),S(document,"touchend touchcancel",this._onTouchEnd,this),O(t))},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&1<o)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1==o)return}else{i=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(1==o&&0===i.x&&0===i.y)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(i),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),r(this._animRequest);n=a(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=x(n,this,!0),O(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,r(this._animRequest),k(document,"touchmove",this._onTouchMove,this),k(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}})),Xi=(A.addInitHook("addHandler","touchZoom",Ot),A.BoxZoom=_t,A.DoubleClickZoom=Ct,A.Drag=Zt,A.Keyboard=St,A.ScrollWheelZoom=Et,A.TapHold=kt,A.TouchZoom=Ot,t.Bounds=f,t.Browser=b,t.CRS=ot,t.Canvas=Fi,t.Circle=vi,t.CircleMarker=gi,t.Class=et,t.Control=B,t.DivIcon=Ri,t.DivOverlay=Ai,t.DomEvent=mt,t.DomUtil=pt,t.Draggable=Xe,t.Evented=it,t.FeatureGroup=ci,t.GeoJSON=wi,t.GridLayer=Ni,t.Handler=n,t.Icon=di,t.ImageOverlay=Ei,t.LatLng=v,t.LatLngBounds=s,t.Layer=o,t.LayerGroup=ui,t.LineUtil=vt,t.Map=A,t.Marker=mi,t.Mixin=ft,t.Path=fi,t.Point=p,t.PolyUtil=gt,t.Polygon=xi,t.Polyline=yi,t.Popup=Bi,t.PosAnimation=Fe,t.Projection=wt,t.Rectangle=Yi,t.Renderer=Wi,t.SVG=Gi,t.SVGOverlay=Oi,t.TileLayer=Di,t.Tooltip=Ii,t.Transformation=at,t.Util=tt,t.VideoOverlay=ki,t.bind=a,t.bounds=_,t.canvas=Ui,t.circle=function(t,e,i){return new vi(t,e,i)},t.circleMarker=function(t,e){return new gi(t,e)},t.control=Ue,t.divIcon=function(t){return new Ri(t)},t.extend=l,t.featureGroup=function(t,e){return new ci(t,e)},t.geoJSON=Si,t.geoJson=Mt,t.gridLayer=function(t){return new Ni(t)},t.icon=function(t){return new di(t)},t.imageOverlay=function(t,e,i){return new Ei(t,e,i)},t.latLng=w,t.latLngBounds=g,t.layerGroup=function(t,e){return new ui(t,e)},t.map=function(t,e){return new A(t,e)},t.marker=function(t,e){return new mi(t,e)},t.point=m,t.polygon=function(t,e){return new xi(t,e)},t.polyline=function(t,e){return new yi(t,e)},t.popup=function(t,e){return new Bi(t,e)},t.rectangle=function(t,e){return new Yi(t,e)},t.setOptions=c,t.stamp=h,t.svg=Ki,t.svgOverlay=function(t,e,i){return new Oi(t,e,i)},t.tileLayer=ji,t.tooltip=function(t,e){return new Ii(t,e)},t.transformation=ht,t.version="1.9.4",t.videoOverlay=function(t,e,i){return new ki(t,e,i)},window.L);t.noConflict=function(){return window.L=Xi,this},window.L=t});
//# sourceMappingURL=leaflet.js.map
} catch (e) { if (window.console) console.warn('page script:', e); }
try {
    // ===== Dynamic hero photo =====
    // The hero photo follows the "What's next" day-cards below: it is chosen
    // from the cards, never from a hard-coded date. On a PORT day the hero
    // shows that port's photo — unless the day's plan text names an attraction
    // in PLAN_HEROES, whose photo wins (a Naples day planned around the
    // Herculaneum excursion shows Herculaneum, not Naples). On a SEA day the
    // hero shows the NEXT port's photo with a "Next stop: …" caption. A port
    // with no photo falls back to HERO_FALLBACK, a generic ship at sea.
    //
    // PORT_HEROES maps a day-card title (port name) to its hero photo.
    // PLAN_HEROES maps an attraction keyword in the day's plan text to its
    // hero photo. When the daily refresh adds ports for a future trip, add
    // the new photos to these two objects (plus a HERO_CREDITS line) and the
    // day-cards do the rest. Keys are matched case-insensitively; a key that
    // appears inside a longer card title still matches (e.g. "Civitavecchia"
    // matches "Rome (Civitavecchia), Italy").
    const PORT_HEROES = {
      "Mykonos": "assets/hero-mykonos.jpg",
      "Naples": "assets/hero-naples.jpg",
      "Rome (Civitavecchia)": "assets/hero-rome.jpg",
      "Civitavecchia": "assets/hero-rome.jpg",
      "Rome": "assets/hero-rome.jpg",
      "La Spezia": "assets/hero-la-spezia.jpg",
      "Barcelona": "assets/hero-barcelona.jpg",
      "Cartagena": "assets/hero-cartagena.jpg",
      "Lisbon": "assets/hero-lisbon.jpg",
      "Ponta Delgada": "assets/hero-ponta-delgada.jpg"
    };
    const PLAN_HEROES = {
      "Cinque Terre": "assets/hero-cinque-terre.jpg",
      "Manarola": "assets/hero-cinque-terre.jpg"
    };
    // Generic fallback: a cruise ship at sea, used when a port has no photo.
    const HERO_FALLBACK = "assets/img-666542a14bb3.jpg";
    // Photo credits for the hero images above — every hero photo is freely
    // licensed via Wikimedia Commons; "url" is its Commons file page. The
    // credit line is rendered unobtrusively in the hero's corner.
    const HERO_CREDITS = {
      "assets/hero-mykonos.jpg": { text: "Photo: dronepicr, CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:The_windmills_in_Mykonos,_Greece_-_50661524068.jpg" },
      "assets/hero-naples.jpg": { text: "Photo: Wolfgang Moroder, CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Naples_from_the_Castello_Sant_Elmo_with_Abbazia_San_Martino_the_port_and_the_Vesuv.jpg" },
      "assets/hero-herculaneum.jpg": { text: "Photo: Michael Karavanov, CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Herculaneum%27s_ruins_-_panoramio.jpg" },
      "assets/hero-rome.jpg": { text: "Photo: Diliff, CC BY-SA 2.5", url: "https://commons.wikimedia.org/wiki/File:Colosseum_in_Rome,_Italy_-_April_2007.jpg" },
      "assets/hero-la-spezia.jpg": { text: "Photo: Aconcagua, CC BY-SA 3.0 (Porto Venere, on the Gulf of La Spezia)", url: "https://commons.wikimedia.org/wiki/File:Porto_Venere_from_Lerici.jpg" },
      "assets/hero-cinque-terre.jpg": { text: "Photo: Timothy A. Gonsalves, CC BY-SA 4.0 (Manarola)", url: "https://commons.wikimedia.org/wiki/File:Manarola_NW_Cinque_Terre_Sep23_A7C_07233.jpg" },
      "assets/hero-barcelona.jpg": { text: "Photo: Bernard Gagnon, CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Sagrada_Familia_01.jpg" },
      "assets/hero-cartagena.jpg": { text: "Photo: Diego Delso, CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Teatro_romano_de_Cartagena,_Espa%C3%B1a,_2022-07-16,_DD_02.jpg" },
      "assets/hero-lisbon.jpg": { text: "Photo: Rodrigo Tetsuo Argenton, CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Torre_de_Bel%C3%A9m_por_Rodrigo_Tetsuo_Argenton_(2).jpg" },
      "assets/hero-ponta-delgada.jpg": { text: "Photo: Diego Delso, CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Portas_da_Cidade,_Ponta_Delgada,_isla_de_San_Miguel,_Azores,_Portugal,_2020-07-29,_DD_123-125_HDR.jpg" },
      "assets/hero-at-sea.jpg": { text: "Photo: Richard Mc Neil, CC BY 3.0", url: "https://commons.wikimedia.org/wiki/File:Oasis_of_the_seas_sailing_out_of_Port_Everglades_inlet._Le_plus_gros_paquebot_du_monde_sortant_du_port..._-_panoramio.jpg" }
    };

    (function () {
      var img = document.getElementById("hero-img");
      if (!img) { return; }
      var caption = document.getElementById("hero-next");
      var kicker = document.getElementById("hero-label-kicker");
      var placeEl = document.getElementById("hero-label-place");
      var coords = document.getElementById("hero-label-coords");
      var creditEl = document.getElementById("hero-credit");

      function norm(s) { return (s || "").toLowerCase().replace(/\s+/g, " ").trim(); }
      // Port photo for a day-card title: exact PORT_HEROES key first, then the
      // longest key contained in (or containing) the title.
      function portFile(title) {
        var t = norm(title), best = null, bestLen = -1;
        for (var key in PORT_HEROES) {
          var k = norm(key);
          if (t === k) { return PORT_HEROES[key]; }
          if ((t.indexOf(k) !== -1 || k.indexOf(t) !== -1) && k.length > bestLen) { best = PORT_HEROES[key]; bestLen = k.length; }
        }
        return best;
      }
      // Attraction photo for plan text: returns { key, file } or null.
      function planMatch(text) {
        var hay = norm(text);
        for (var key in PLAN_HEROES) {
          if (hay.indexOf(norm(key)) !== -1) { return { key: key, file: PLAN_HEROES[key] }; }
        }
        return null;
      }
      function isSea(title) { return /\b(at sea|cruising|sea day)\b/.test(norm(title)); }

      var MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
      // Day-cards carry dates like "Thu · Oct 22" (no year): read them as
      // this year's date so today can be matched without hard-coding it.
      function cardDate(card) {
        var el = card.querySelector(".date");
        var m = norm(el ? el.textContent : "").match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\s+(\d{1,2})/);
        if (!m) { return null; }
        return new Date(new Date().getFullYear(), MONTHS[m[1]], +m[2]);
      }
      function titleOf(card) { var h = card.querySelector("h3"); return h ? h.textContent.trim() : ""; }
      function planOf(card) { var p = card.querySelector("p"); return p ? p.textContent : ""; }

      function show(file, place, kickerText, alt, nextCaption) {
        img.src = file;
        img.alt = alt;
        if (placeEl) { placeEl.textContent = place; }
        if (kicker) { kicker.textContent = kickerText; }
        if (coords) { coords.textContent = ""; }
        if (caption) {
          if (nextCaption) { caption.textContent = nextCaption; caption.hidden = false; }
          else { caption.textContent = ""; caption.hidden = true; }
        }
        if (creditEl) {
          creditEl.textContent = "";
          var c = HERO_CREDITS[file];
          if (c) {
            creditEl.appendChild(document.createTextNode(c.text + " · "));
            var a = document.createElement("a");
            a.href = c.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.textContent = "Wikimedia Commons";
            creditEl.appendChild(a);
          }
        }
      }

      var cards = Array.prototype.slice.call(document.querySelectorAll(".days .day"));
      if (!cards.length) { return; }
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      var idx = -1;
      cards.forEach(function (card, i) {
        var d = cardDate(card);
        if (d && d.getTime() === today.getTime()) { idx = i; }
      });
      // The "What's next" strip always leads with today; if no card date
      // matches the viewer's clock, treat the first card as today's.
      if (idx === -1) { idx = 0; }

      var card = cards[idx];
      var title = titleOf(card);
      if (!isSea(title)) {
        // Port day: the fuller plan text in the hero copy counts too — it
        // names the day's sights (e.g. Herculaneum) the card only abbreviates.
        var heroPlan = document.querySelector(".hero-copy > div > p");
        var planText = planOf(card) + " " + (heroPlan ? heroPlan.textContent : "");
        var pm = planMatch(planText);
        if (pm) { show(pm.file, title, "Today in", "Iconic view of " + pm.key + ", the day's plan from " + title, null); }
        else {
          var pf = portFile(title);
          if (pf) { show(pf, title, "Today in", "Iconic view of " + title, null); }
          else { show(HERO_FALLBACK, title, "Today in", "A cruise ship at sea", null); }
        }
        return;
      }
      // Sea day: the next port card down the strip is the hero, captioned
      // with how far away it is.
      for (var j = idx + 1; j < cards.length; j++) {
        if (isSea(titleOf(cards[j]))) { continue; }
        var nextTitle = titleOf(cards[j]);
        var d0 = cardDate(card), d1 = cardDate(cards[j]);
        var away = (d0 && d1) ? Math.round((d1 - d0) / 86400000) : (j - idx);
        var when = away <= 1 ? "tomorrow" : away + " days away";
        var nf = portFile(nextTitle);
        show(nf || HERO_FALLBACK, nextTitle, "Next stop",
          nf ? "Iconic view of " + nextTitle + ", the next port" : "A cruise ship at sea",
          "Next stop: " + nextTitle + " · " + when);
        return;
      }
      // Sea day with no later port in the cards: stay with the ship at sea.
      show(HERO_FALLBACK, title, "Today", "A cruise ship at sea", null);
    })();

    // ===== Trip map data =====
    // CURRENT_TRIP_STOPS is the trip currently underway, in visit order:
    // every stop of the whole trip (not just the current sailing), each
    // marked "been" (visited), "today" (where Patrick is now) or "going"
    // (still to come). The daily page refresh updates this list as the
    // trip progresses — move a stop from "going" to "been" as its day
    // passes, and when the trip ends move its route into PAST_TRIP_ROUTES
    // below (all stops there render as visited) and load the next trip.
    const CURRENT_TRIP_STOPS = [
      { name: "Boston, Massachusetts", detail: "Tue · Oct 6 — the trip begins: travel day out of Boston", lat: 42.3601, lng: -71.0589, status: "been" },
      { name: "Madrid, Spain", detail: "Wed · Oct 7 — Madrid, then on to Bologna and Venice", lat: 40.4168, lng: -3.7038, status: "been" },
      { name: "Venice, Italy", detail: "Oct 7–10 — with Murano and Burano", lat: 45.4408, lng: 12.3155, status: "been" },
      { name: "Ravenna, Italy", detail: "Sat · Oct 10 & Sat · Oct 17", lat: 44.4184, lng: 12.2035, status: "been" },
      { name: "Kotor, Montenegro", detail: "Sun · Oct 11 — a favorite port", lat: 42.4247, lng: 18.7712, status: "been" },
      { name: "Santorini, Greece", detail: "Tue · Oct 13 & Wed · Oct 21", lat: 36.4618, lng: 25.3760, status: "been" },
      { name: "Athens (Piraeus), Greece", detail: "Wed · Oct 14", lat: 37.9429, lng: 23.6469, status: "been" },
      { name: "Split, Croatia", detail: "Fri · Oct 16", lat: 43.5081, lng: 16.4402, status: "been" },
      { name: "Civitavecchia (Rome), Italy", detail: "Oct 18 & 25 — aboard Odyssey of the Seas from here", lat: 42.0956, lng: 11.7879, status: "been" },
      { name: "Messina, Sicily, Italy", detail: "Mon · Oct 19 — with Mt Etna and Taormina", lat: 38.1937, lng: 15.5542, status: "been" },
      { name: "Mykonos, Greece", detail: "Thu · Oct 22", lat: 37.4467, lng: 25.3289, status: "been" },
      { name: "Naples, Italy", detail: "Sat · Oct 24", lat: 40.8518, lng: 14.2681, status: "been" },
      { name: "La Spezia, Italy", detail: "Mon · Oct 26 — Cinque Terre by train", lat: 44.1025, lng: 9.8241, status: "been" },
      { name: "Barcelona, Spain", detail: "Wed · Oct 28", lat: 41.3874, lng: 2.1686, status: "been" },
      { name: "Cartagena, Spain", detail: "Thu · Oct 29", lat: 37.6257, lng: -0.9966, status: "been" },
      { name: "Lisbon, Portugal", detail: "Sat · Oct 31", lat: 38.7223, lng: -9.1393, status: "been" },
      { name: "Ponta Delgada, Azores, Portugal", detail: "Mon · Nov 2", lat: 37.7394, lng: -25.6687, status: "been" },
      { name: "At sea, North Atlantic", detail: "Nov 3–7 — sea days aboard Odyssey of the Seas, en route to Cape Liberty (approximate position)", lat: 38.8, lng: -42.0, status: "been" },
      { name: "Cape Liberty (Bayonne), New Jersey", detail: "Today · Sun Nov 8 — the transatlantic ends here and the Bahamas finale boards", lat: 40.6650, lng: -74.1130, status: "today" },
      { name: "Port Canaveral, Florida", detail: "Still to come — on the Nov 8–15 Bahamas finale", lat: 28.4103, lng: -80.6188, status: "going" },
      { name: "Perfect Day at CocoCay, Bahamas", detail: "Still to come — on the Nov 8–15 Bahamas finale", lat: 25.8172, lng: -77.9375, status: "going" },
      { name: "Nassau, Bahamas", detail: "Still to come — on the Nov 8–15 Bahamas finale", lat: 25.0480, lng: -77.3554, status: "going" },
      { name: "Boston, Massachusetts", detail: "Sun · Nov 15 — back in New England, home after forty days away", lat: 42.3601, lng: -71.0589, status: "going" }
    ];

    // PAST_TRIP_ROUTES: the stops of every finished trip's detail page, in
    // the order Patrick reached them (one entry per place, however many
    // times the trip called there). Keyed by the archive view's id; each
    // view carries a matching [data-trip-map] element and its counters in
    // the markup are counted from this same list.
    const PAST_TRIP_ROUTES = {
      // Note: the current trip (venice-transatlantic) is NOT in this
      // table. Its history page carries [data-current-trip-map] and is
      // rendered from CURRENT_TRIP_STOPS with the same been / today /
      // going markers, solid + dashed route lines, key and totals as
      // the home page's "The current trip, mapped" section. Only when
      // the trip ends should its full route move into this table.
      "spain-transatlantic-jul-aug-2026": [{ name: "Madrid, Spain", lat: 40.4168, lng: -3.7038 }, { name: "Barcelona, Spain", lat: 41.3874, lng: 2.1686 }, { name: "Palma de Mallorca, Spain", lat: 39.5696, lng: 2.6502 }, { name: "Cartagena, Spain", lat: 37.6257, lng: -0.9966 }, { name: "M\u00e1laga, Spain", lat: 36.7213, lng: -4.4214 }, { name: "C\u00e1diz, Spain", lat: 36.5271, lng: -6.2886 }, { name: "Orlando, Florida", lat: 28.5383, lng: -81.3792 }, { name: "Port Canaveral, Florida", lat: 28.4103, lng: -80.6188 }, { name: "Nassau, Bahamas", lat: 25.048, lng: -77.3554 }, { name: "Perfect Day at CocoCay, Bahamas", lat: 25.8172, lng: -77.9375 }, { name: "San Juan, Puerto Rico", lat: 18.4655, lng: -66.1057 }, { name: "Tortola, British Virgin Islands", lat: 18.4236, lng: -64.6185 }, { name: "Philipsburg, St. Maarten", lat: 18.0237, lng: -63.0458 }, { name: "St. John\u2019s, Antigua", lat: 17.1274, lng: -61.8468 }, { name: "Basseterre, St. Kitts", lat: 17.3026, lng: -62.7177 }, { name: "St. Croix, US Virgin Islands", lat: 17.7125, lng: -64.8814 }, { name: "Charlotte Amalie, St. Thomas", lat: 18.3419, lng: -64.9307 }, { name: "Roseau, Dominica", lat: 15.3017, lng: -61.388 }],
      "cape-cod-jul-2026": [{ name: "Harwich, Massachusetts", lat: 41.6865, lng: -70.0753 }],
      "bayonne-miami-sep-2026": [{ name: "Newark, New Jersey", lat: 40.7357, lng: -74.1724 }, { name: "Cape Liberty (Bayonne), New Jersey", lat: 40.665, lng: -74.113 }, { name: "Boston, Massachusetts", lat: 42.3601, lng: -71.0589 }, { name: "Portland, Maine", lat: 43.6591, lng: -70.2568 }, { name: "Saint John, New Brunswick, Canada", lat: 45.2733, lng: -66.0633 }, { name: "Sydney, Nova Scotia, Canada", lat: 46.1368, lng: -60.1942 }, { name: "Royal Naval Dockyard, Bermuda", lat: 32.3265, lng: -64.8354 }, { name: "Miami, Florida", lat: 25.7617, lng: -80.1918 }, { name: "Grand Turk, Turks & Caicos", lat: 21.4675, lng: -71.1369 }, { name: "Bimini, Bahamas", lat: 25.7275, lng: -79.2976 }, { name: "Key West, Florida", lat: 24.5551, lng: -81.78 }],
      "alaska-may-jun-2026": [{ name: "Seattle, Washington", lat: 47.6062, lng: -122.3321 }, { name: "Vancouver, British Columbia, Canada", lat: 49.2827, lng: -123.1207 }, { name: "Ketchikan, Alaska", lat: 55.3422, lng: -131.6461 }, { name: "Icy Strait Point, Alaska", lat: 58.1228, lng: -135.4447 }, { name: "Sitka, Alaska", lat: 57.0531, lng: -135.33 }, { name: "Juneau, Alaska", lat: 58.3019, lng: -134.4197 }, { name: "Skagway, Alaska", lat: 59.4583, lng: -135.3139 }, { name: "Hubbard Glacier, Alaska", lat: 60.0147, lng: -139.4947 }, { name: "Seward, Alaska", lat: 60.1042, lng: -149.442 }, { name: "Boston, Massachusetts", lat: 42.3601, lng: -71.0589 }],
      "san-juan-rome-apr-may-2026": [{ name: "San Juan, Puerto Rico", lat: 18.4655, lng: -66.1057 }, { name: "Oranjestad, Aruba", lat: 12.519, lng: -70.037 }, { name: "Willemstad, Cura\u00e7ao", lat: 12.1224, lng: -68.9335 }, { name: "Kralendijk, Bonaire", lat: 12.1444, lng: -68.2655 }, { name: "Tortola, British Virgin Islands", lat: 18.4236, lng: -64.6185 }, { name: "Philipsburg, St. Maarten", lat: 18.0237, lng: -63.0458 }, { name: "Charlotte Amalie, St. Thomas", lat: 18.3419, lng: -64.9307 }, { name: "Basseterre, St. Kitts", lat: 17.3026, lng: -62.7177 }, { name: "Ft Lauderdale, Florida", lat: 26.0919, lng: -80.1143 }, { name: "Nassau, Bahamas", lat: 25.048, lng: -77.3554 }, { name: "Perfect Day at CocoCay, Bahamas", lat: 25.8172, lng: -77.9375 }, { name: "Royal Naval Dockyard, Bermuda", lat: 32.3265, lng: -64.8354 }, { name: "Ponta Delgada, Azores, Portugal", lat: 37.7394, lng: -25.6687 }, { name: "M\u00e1laga, Spain", lat: 36.7213, lng: -4.4214 }, { name: "Alicante, Spain", lat: 38.3452, lng: -0.4815 }, { name: "Valencia, Spain", lat: 39.4699, lng: -0.3763 }, { name: "Barcelona, Spain", lat: 41.3874, lng: 2.1686 }, { name: "Toulon, France", lat: 43.1242, lng: 5.928 }, { name: "Ajaccio, Corsica, France", lat: 41.9192, lng: 8.7386 }, { name: "Civitavecchia (Rome), Italy", lat: 42.0956, lng: 11.7879 }, { name: "Naples, Italy", lat: 40.8518, lng: 14.2681 }, { name: "Messina, Sicily, Italy", lat: 38.1937, lng: 15.5542 }, { name: "Ravenna, Italy", lat: 44.4184, lng: 12.2035 }, { name: "Trieste, Italy", lat: 45.6495, lng: 13.7768 }, { name: "Split, Croatia", lat: 43.5081, lng: 16.4402 }, { name: "Dubrovnik, Croatia", lat: 42.6507, lng: 18.0944 }, { name: "Sarand\u00eb, Albania", lat: 39.8756, lng: 20.0053 }, { name: "Salerno, Italy", lat: 40.6824, lng: 14.7681 }],
      "miami-jan-feb-2026": [{ name: "Miami, Florida", lat: 25.7617, lng: -80.1918 }, { name: "George Town, Grand Cayman", lat: 19.2866, lng: -81.3749 }, { name: "Bimini, Bahamas", lat: 25.7275, lng: -79.2976 }, { name: "Cozumel, Mexico", lat: 20.5103, lng: -86.9493 }, { name: "Ocho Rios, Jamaica", lat: 18.4074, lng: -77.1025 }, { name: "Puerto Plata, Dominican Republic", lat: 19.7935, lng: -70.6871 }, { name: "Charlotte Amalie, St. Thomas", lat: 18.3419, lng: -64.9307 }, { name: "Basseterre, St. Kitts", lat: 17.3026, lng: -62.7177 }],
      "december-caribbean-nov-dec-2025": [{ name: "Miami, Florida", lat: 25.7617, lng: -80.1918 }, { name: "Nassau, Bahamas", lat: 25.048, lng: -77.3554 }, { name: "Perfect Day at CocoCay, Bahamas", lat: 25.8172, lng: -77.9375 }, { name: "Puerto Plata, Dominican Republic", lat: 19.7935, lng: -70.6871 }, { name: "George Town, Grand Cayman", lat: 19.2866, lng: -81.3749 }, { name: "Cozumel, Mexico", lat: 20.5103, lng: -86.9493 }, { name: "Ft Lauderdale, Florida", lat: 26.0919, lng: -80.1143 }, { name: "Puerto Costa Maya, Mexico", lat: 18.7328, lng: -87.6915 }],
      "fall-transatlantic-oct-nov-2025": [{ name: "Southampton, England", lat: 50.9049, lng: -1.4043 }, { name: "Hamburg, Germany", lat: 53.5511, lng: 9.9937 }, { name: "Rotterdam, Netherlands", lat: 51.9244, lng: 4.4777 }, { name: "La Coru\u00f1a, Spain", lat: 43.3623, lng: -8.3964 }, { name: "Vigo, Spain", lat: 42.2406, lng: -8.7207 }, { name: "Lisbon, Portugal", lat: 38.7223, lng: -9.1393 }, { name: "Ponta Delgada, Azores, Portugal", lat: 37.7394, lng: -25.6687 }, { name: "Miami, Florida", lat: 25.7617, lng: -80.1918 }, { name: "Nassau, Bahamas", lat: 25.048, lng: -77.3554 }, { name: "Puerto Costa Maya, Mexico", lat: 18.7328, lng: -87.6915 }, { name: "Roat\u00e1n, Honduras", lat: 16.3239, lng: -86.5363 }, { name: "Cozumel, Mexico", lat: 20.5103, lng: -86.9493 }, { name: "Perfect Day at CocoCay, Bahamas", lat: 25.8172, lng: -77.9375 }, { name: "Ft Lauderdale, Florida", lat: 26.0919, lng: -80.1143 }, { name: "Charlotte Amalie, St. Thomas", lat: 18.3419, lng: -64.9307 }, { name: "Philipsburg, St. Maarten", lat: 18.0237, lng: -63.0458 }, { name: "San Juan, Puerto Rico", lat: 18.4655, lng: -66.1057 }, { name: "Bimini, Bahamas", lat: 25.7275, lng: -79.2976 }],
      "eastern-canada-sep-oct-2025": [{ name: "Boston, Massachusetts", lat: 42.3601, lng: -71.0589 }, { name: "Portland, Maine", lat: 43.6591, lng: -70.2568 }, { name: "Saint John, New Brunswick, Canada", lat: 45.2733, lng: -66.0633 }, { name: "Charlottetown, Prince Edward Island, Canada", lat: 46.2382, lng: -63.1311 }, { name: "Sydney, Nova Scotia, Canada", lat: 46.1368, lng: -60.1942 }, { name: "Halifax, Nova Scotia, Canada", lat: 44.6488, lng: -63.5752 }],
      "star-cococay-aug-2025": [{ name: "Orlando, Florida", lat: 28.5383, lng: -81.3792 }, { name: "Port Canaveral, Florida", lat: 28.4103, lng: -80.6188 }, { name: "Perfect Day at CocoCay, Bahamas", lat: 25.8172, lng: -77.9375 }],
      "jewel-cococay-jul-2025": [{ name: "Ft Lauderdale, Florida", lat: 26.0919, lng: -80.1143 }, { name: "Perfect Day at CocoCay, Bahamas", lat: 25.8172, lng: -77.9375 }],
      "cape-cod-jun-jul-2025": [{ name: "Eastham, Massachusetts", lat: 41.8301, lng: -69.9743 }],
      "odyssey-mediterranean-may-2025": [{ name: "Civitavecchia (Rome), Italy", lat: 42.0956, lng: 11.7879 }, { name: "Santorini, Greece", lat: 36.4618, lng: 25.376 }, { name: "Kusadasi (Ephesus), Turkey", lat: 37.8579, lng: 27.261 }, { name: "Mykonos, Greece", lat: 37.4467, lng: 25.3289 }, { name: "Naples, Italy", lat: 40.8518, lng: 14.2681 }],
      "vision-baltimore-mar-2025": [{ name: "Baltimore, Maryland", lat: 39.2904, lng: -76.6122 }, { name: "Charleston, South Carolina", lat: 32.7765, lng: -79.9311 }, { name: "Port Canaveral, Florida", lat: 28.4103, lng: -80.6188 }, { name: "Grand Bahama, Bahamas", lat: 26.5412, lng: -78.696 }, { name: "Nassau, Bahamas", lat: 25.048, lng: -77.3554 }],
      "adventure-caribbean-dec-2024": [{ name: "Port Canaveral, Florida", lat: 28.4103, lng: -80.6188 }, { name: "Labadee, Haiti", lat: 19.7853, lng: -72.2453 }, { name: "San Juan, Puerto Rico", lat: 18.4655, lng: -66.1057 }, { name: "St. Croix, US Virgin Islands", lat: 17.7125, lng: -64.8814 }, { name: "Philipsburg, St. Maarten", lat: 18.0237, lng: -63.0458 }, { name: "Fort Myers, Florida", lat: 26.6406, lng: -81.8723 }],
      "oasis-transatlantic-oct-2024": [{ name: "Barcelona, Spain", lat: 41.3874, lng: 2.1686 }, { name: "Palma de Mallorca, Spain", lat: 39.5696, lng: 2.6502 }, { name: "Valencia, Spain", lat: 39.4699, lng: -0.3763 }, { name: "Cartagena, Spain", lat: 37.6257, lng: -0.9966 }, { name: "M\u00e1laga, Spain", lat: 36.7213, lng: -4.4214 }, { name: "Nassau, Bahamas", lat: 25.048, lng: -77.3554 }, { name: "Ft Lauderdale, Florida", lat: 26.0919, lng: -80.1143 }],
      "brilliance-alaska-may-2024": [{ name: "Vancouver, British Columbia, Canada", lat: 49.2827, lng: -123.1207 }, { name: "Sitka, Alaska", lat: 57.0531, lng: -135.33 }, { name: "Juneau, Alaska", lat: 58.3019, lng: -134.4197 }, { name: "Haines, Alaska", lat: 59.2358, lng: -135.445 }, { name: "Ketchikan, Alaska", lat: 55.3422, lng: -131.6461 }],
      "symphony-caribbean-mar-2024": [{ name: "Ft Lauderdale, Florida", lat: 26.0919, lng: -80.1143 }, { name: "Falmouth, Jamaica", lat: 18.4936, lng: -77.6556 }, { name: "Nassau, Bahamas", lat: 25.048, lng: -77.3554 }],
      "adventure-caribbean-dec-2023": [{ name: "Port Canaveral, Florida", lat: 28.4103, lng: -80.6188 }, { name: "Nassau, Bahamas", lat: 25.048, lng: -77.3554 }, { name: "Labadee, Haiti", lat: 19.7853, lng: -72.2453 }, { name: "Puerto Plata, Dominican Republic", lat: 19.7935, lng: -70.6871 }],
      "oasis-caribbean-sep-2023": [{ name: "Cape Liberty (Bayonne), New Jersey", lat: 40.665, lng: -74.113 }, { name: "Port Canaveral, Florida", lat: 28.4103, lng: -80.6188 }, { name: "Perfect Day at CocoCay, Bahamas", lat: 25.8172, lng: -77.9375 }, { name: "Nassau, Bahamas", lat: 25.048, lng: -77.3554 }],
      "harmony-caribbean-mar-2023": [{ name: "Miami, Florida", lat: 25.7617, lng: -80.1918 }, { name: "Roat\u00e1n, Honduras", lat: 16.3239, lng: -86.5363 }, { name: "Cozumel, Mexico", lat: 20.5103, lng: -86.9493 }, { name: "Perfect Day at CocoCay, Bahamas", lat: 25.8172, lng: -77.9375 }],
      "allure-caribbean-oct-2022": [{ name: "Ft Lauderdale, Florida", lat: 26.0919, lng: -80.1143 }, { name: "Puerto Plata, Dominican Republic", lat: 19.7935, lng: -70.6871 }, { name: "Labadee, Haiti", lat: 19.7853, lng: -72.2453 }, { name: "Nassau, Bahamas", lat: 25.048, lng: -77.3554 }, { name: "Perfect Day at CocoCay, Bahamas", lat: 25.8172, lng: -77.9375 }]
    };

    // ----- Feature 1: live countdowns on the upcoming trips -----
    (function () {
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      Array.prototype.forEach.call(document.querySelectorAll("[data-start]"), function (el) {
        var parts = el.getAttribute("data-start").split("-");
        var start = new Date(+parts[0], +parts[1] - 1, +parts[2]);
        var days = Math.round((start - today) / 86400000);
        var label;
        if (days > 1) { label = days + " days to go"; }
        else if (days === 1) { label = "1 day to go"; }
        else { label = "underway now"; }
        var slot = el.querySelector("[data-cd-slot]") || el;
        var span = document.createElement("span");
        span.className = "countdown";
        span.textContent = label;
        slot.appendChild(span);
      });
    })();

    // ----- Feature 2: local time where Patrick is -----
    // The hero's data-tz is the zone Patrick himself is on at publish
    // time — ashore it is the place's zone; at sea it is the ship's
    // clock (the zone his own device reports), NOT the last port's
    // zone: mid-crossing the ship sets its clocks back as it sails
    // west, so a port zone left in data-tz drifts hours away from his
    // actual local time (the Azores zone stayed in the hero for days
    // after the ship had crossed to UTC−4). Known upcoming setbacks
    // ride along in data-tz-schedule as {from, tz} steps — "from" is
    // a UTC instant — and the clock adopts each step as it passes, so
    // the line keeps tracking his local time between publishes.
    (function () {
      var hero = document.getElementById("hero");
      var line = document.getElementById("local-time");
      if (!hero || !line) { return; }
      var tz = hero.getAttribute("data-tz");
      var schedule = [];
      try { schedule = JSON.parse(hero.getAttribute("data-tz-schedule") || "[]"); } catch (e) { schedule = []; }
      var place = document.getElementById("current-place").textContent.trim();
      function zoneNow() {
        var z = tz;
        var now = new Date();
        schedule.forEach(function (s) {
          if (s && s.tz && s.from && now >= new Date(s.from)) { z = s.tz; }
        });
        return z;
      }
      function update() {
        try {
          var fmt = new Intl.DateTimeFormat("en-US", { timeZone: zoneNow(), hour: "numeric", minute: "2-digit" });
          line.innerHTML = "It&rsquo;s currently <strong>" + fmt.format(new Date()) + "</strong> in " + place + ".";
        } catch (e) {
          // An unrecognised zone must never blank the line: fall back
          // to the reader's own clock rather than showing nothing.
          try {
            var fmt2 = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" });
            line.innerHTML = "It&rsquo;s currently <strong>" + fmt2.format(new Date()) + "</strong> in " + place + ".";
          } catch (e2) { line.textContent = ""; }
        }
      }
      update();
      setInterval(update, 30000);
    })();

    // ----- Feature 3: trip maps (current trip on the home page, one per
    // past-trip detail page) -----
    // Markers are CSS divIcons, never Leaflet's default pin images: the old
    // single-sailing map depended on those image files loading from the
    // CDN, and it was initialised while its section could be hidden, which
    // left it broken. Maps here initialise lazily, only once their
    // container is actually visible, and re-measure whenever a view is
    // revealed (hash change, or the hidden attribute flipping, which is
    // how the place search reveals archive views without a hash change).
    (function () {
      // Leaflet is bundled with the page (assets/leaflet.js, loaded by a
      // script tag ahead of this file) — it used to come from the unpkg
      // CDN, and whenever that request was blocked or failed on a slow
      // connection (ship Wi-Fi, content blockers) every map stayed stuck
      // on "Loading the map…" for good. Bundled, window.L is there when
      // this file runs; refresh() still re-checks without a retry cap,
      // and the window load event plus an IntersectionObserver give the
      // maps further chances to initialise whenever they scroll into view.
      var liveMaps = [];
      var leafletTimer = null;
      function pinIcon(kind) {
        var glyph = kind === "been" ? "\u2713" : "";
        return L.divIcon({
          className: "wp-pin-wrap",
          html: '<span class="wp-pin wp-pin-' + kind + '">' + glyph + "</span>",
          iconSize: [26, 26],
          iconAnchor: [13, 13]
        });
      }
      function baseMap(el) {
        var map = L.map(el, { scrollWheelZoom: false });
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        }).addTo(map);
        liveMaps.push(map);
        return map;
      }
      function frame(map, pts) {
        if (pts.length === 1) { map.setView(pts[0], 9); return; }
        map.fitBounds(L.latLngBounds(pts).pad(0.12), { maxZoom: 11 });
      }
      function visible(el) {
        return !!(el.offsetParent || el.getClientRects().length) && el.clientHeight > 0;
      }
      function renderCurrentMap(el) {
        if (!el || el.getAttribute("data-map-done")) { return; }
        if (!visible(el)) { return; }
        el.setAttribute("data-map-done", "1");
        var fb = el.querySelector(".map-fallback");
        if (fb && fb.parentNode) { fb.parentNode.removeChild(fb); }
        var map = baseMap(el);
        var beenPts = [], goingPts = [], anchor = null;
        CURRENT_TRIP_STOPS.forEach(function (p) {
          L.marker([p.lat, p.lng], { icon: pinIcon(p.status) }).addTo(map)
            .bindPopup("<strong>" + p.name + "</strong><br>" + p.detail);
          if (p.status === "going") { goingPts.push([p.lat, p.lng]); }
          else { beenPts.push([p.lat, p.lng]); anchor = [p.lat, p.lng]; }
        });
        if (beenPts.length > 1) {
          L.polyline(beenPts, { color: "#1d585a", weight: 2.5 }).addTo(map);
        }
        if (anchor && goingPts.length) {
          L.polyline([anchor].concat(goingPts), { color: "#e7743b", weight: 2.5, dashArray: "5 6" }).addTo(map);
        }
        frame(map, beenPts.concat(goingPts));
        // At phone widths the container can still be settling (fonts,
        // hero image) when the map measures itself, which leaves grey,
        // unpainted tile areas. Re-measure twice shortly after init.
        setTimeout(function () { map.invalidateSize(); }, 60);
        setTimeout(function () { map.invalidateSize(); }, 400);
      }
      function initCurrent() {
        // The home page map (#trip-map) and the current trip's history
        // page map ([data-current-trip-map]) share this exact renderer:
        // filled teal check pins for "been", the pulsing orange pin for
        // "today", hollow orange-ring pins for "going", a solid teal
        // line for the travelled path and a dashed orange line for the
        // route still to come — never the generic archive renderer.
        renderCurrentMap(document.getElementById("trip-map"));
        Array.prototype.forEach.call(document.querySelectorAll("[data-current-trip-map]"), function (el) {
          renderCurrentMap(el);
        });
      }
      function initPast() {
        Array.prototype.forEach.call(document.querySelectorAll("[data-trip-map]"), function (el) {
          if (el.getAttribute("data-map-done")) { return; }
          var stops = PAST_TRIP_ROUTES[el.getAttribute("data-trip-map")];
          if (!stops || !visible(el)) { return; }
          el.setAttribute("data-map-done", "1");
          var map = baseMap(el);
          var pts = [];
          stops.forEach(function (p) {
            L.marker([p.lat, p.lng], { icon: pinIcon("been") }).addTo(map)
              .bindPopup("<strong>" + p.name + "</strong>");
            pts.push([p.lat, p.lng]);
          });
          if (pts.length > 1) {
            L.polyline(pts, { color: "#1d585a", weight: 2.5 }).addTo(map);
          }
          frame(map, pts);
        });
      }
      function refresh() {
        if (!window.L) {
          // Leaflet has not arrived yet: keep retrying instead of
          // leaving the map permanently blank.
          if (!leafletTimer) {
            leafletTimer = setTimeout(function () {
              leafletTimer = null;
              refresh();
            }, 250);
          }
          return;
        }
        initCurrent();
        initPast();
        setTimeout(function () {
          liveMaps.forEach(function (m) {
            var c = m.getContainer();
            if (c && visible(c)) { m.invalidateSize(); }
          });
        }, 80);
      }
      refresh();
      window.addEventListener("load", refresh);
      window.addEventListener("hashchange", function () { setTimeout(refresh, 60); });
      if (window.IntersectionObserver) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) { if (en.isIntersecting) { refresh(); } });
        }, { rootMargin: "240px" });
        Array.prototype.forEach.call(
          document.querySelectorAll("#trip-map, [data-trip-map], [data-current-trip-map]"),
          function (el) { io.observe(el); }
        );
      }
      window.addEventListener("resize", function () {
        liveMaps.forEach(function (m) {
          var c = m.getContainer();
          if (c && visible(c)) { m.invalidateSize(); }
        });
      });
      if (window.MutationObserver) {
        var mo = new MutationObserver(function () { setTimeout(refresh, 60); });
        Array.prototype.forEach.call(document.querySelectorAll(".view"), function (v) {
          mo.observe(v, { attributes: true, attributeFilter: ["hidden"] });
        });
        Array.prototype.forEach.call(document.querySelectorAll("#view-main [data-page]"), function (g) {
          mo.observe(g, { attributes: true, attributeFilter: ["hidden"] });
        });
      }
    })();

    // ----- Feature 5: journal search & filters — multi-page, powered by
    // assets/search-index.json. That JSON file is the database: a flat
    // index of every journal entry on every trip page (the current
    // trip's journal plus every past trip), each entry carrying its
    // date, year, title, time, trip name, trip_slug, url, anchor,
    // snippet and full text. No server is involved. The file is fetched
    // at run time — "assets/search-index.json" from a root page,
    // "../assets/search-index.json" from a page under past/ — and the
    // search runs against the fetched entries. The Year dropdown is
    // populated from the entries, but the Trip dropdown is populated
    // from the site's own trip list — every trip that has a page, read
    // from the Trip archive cards below (this page's archive index,
    // the single-page stand-in for past.html) plus the current trip —
    // merged with any trips the index knows, so framework trips whose
    // pages are still placeholders, with no searchable entries yet,
    // are listed too; selecting one simply finds no hits and shows
    // the "No entries match" note. Typing in "Search the
    // journal", changing Trip/Year, or clicking Apply runs the search
    // against the whole index and renders the results here; each result
    // links to its entry's url. If the index cannot be fetched, the
    // same index is rebuilt from the page's own DOM as a fallback.
    //
    // Format note: the live index is a simple JSON array of entry
    // objects ({ date, year, title, time, trip, trip_slug, url,
    // anchor, snippet, text }). An earlier wrapped shape
    // ({ trips, years, entries } with tripId/page fields) is also
    // accepted — normalizeIndex() converts either into the one internal
    // shape the search uses, so a format drift in the generated file
    // can never silently zero every result again.
    (function () {
      var tripSel = document.getElementById("filter-trip");
      var yearSel = document.getElementById("filter-year");
      var q = document.getElementById("filter-q");
      var applyBtn = document.getElementById("filter-apply");
      var panel = document.getElementById("search-results");
      var titleEl = document.getElementById("search-results-title");
      var subEl = document.getElementById("search-results-sub");
      var listEl = document.getElementById("search-results-list");
      var emptyEl = document.getElementById("search-results-empty");
      var clearBtn = document.getElementById("search-results-clear");
      var histEmpty = document.getElementById("filter-empty");
      var main = document.getElementById("view-main");
      if (!tripSel || !yearSel || !q || !panel || !listEl) { return; }
      var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var INDEX = null;
      function clean(s) { return (s || "").replace(/\s+/g, " ").replace(/^\s+|\s+$/g, ""); }
      function isArray(x) { return Object.prototype.toString.call(x) === "[object Array]"; }
      function fmtDate(iso) {
        if (!iso) { return "Date not recorded"; }
        var p = String(iso).split("-");
        if (p.length < 3) { return String(iso); }
        return MONTHS[parseInt(p[1], 10) - 1] + " " + parseInt(p[2], 10) + ", " + p[0];
      }
      function snippetOf(paras) {
        var s = clean(paras.join(" "));
        if (s.length > 280) { s = s.slice(0, 280).replace(/\s+\S*$/, "") + "\u2026"; }
        return s;
      }
      function slugify(s) {
        return (s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      }
      // The Trip dropdown shows short names only: drop any date or
      // extra detail — a date-range suffix like " — Jul 22 to
      // Aug 29, 2026", a parenthetical like "(Oct-Nov 2026)", a
      // trailing ", Aug 2025", or a bare trailing year — then put the
      // name in title case, keeping small joining words (of, the, to,
      // and, …) lower case unless they start the name. So
      // "Venice & Transatlantic (Oct-Nov 2026)" and
      // "star of the seas, aug 2025" both come out as short,
      // properly capitalised names. The option's value stays the
      // trip's id, so trips that share a short name (two sailings of
      // the same ship) still filter to their own entries.
      // A name that arrives empty (or still in slug form) falls back
      // to the trip slug, humanised — dashes to spaces, title-cased,
      // trailing month/year slug fragments dropped — so the dropdown
      // never shows a blank option.
      function humanizeSlug(slug) {
        var months = { jan: 1, january: 1, feb: 1, february: 1, mar: 1, march: 1, apr: 1, april: 1, may: 1, jun: 1, june: 1, jul: 1, july: 1, aug: 1, august: 1, sep: 1, sept: 1, september: 1, oct: 1, october: 1, nov: 1, november: 1, dec: 1, december: 1 };
        var parts = String(slug || "").split("-");
        while (parts.length) {
          var last = parts[parts.length - 1].toLowerCase();
          if (/^\d{4}$/.test(last) || months[last]) { parts.pop(); } else { break; }
        }
        return parts.join(" ");
      }
      function shortTripName(name, slug) {
        var s = clean(name || "");
        if (!s) { s = clean(humanizeSlug(slug || "")); }
        else if (/^[a-z0-9]+(-[a-z0-9]+)+$/.test(s)) { s = clean(humanizeSlug(s)); }
        if (!s) { return s; }
        s = s.replace(/\s*[—–]\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)[a-z]*\.?[\s\S]*$/i, "");
        s = clean(s.replace(/,\s*$/, ""));
        s = s.replace(/\s*\([^)]*\)/g, "");
        s = s.replace(/,?\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)[a-z]*\.?\s+\d{4}\s*$/i, "");
        s = s.replace(/,?\s*\d{4}\s*$/, "");
        s = clean(s.replace(/,\s*$/, ""));
        var minor = { a: 1, an: 1, the: 1, and: 1, or: 1, of: 1, to: 1, in: 1, on: 1, at: 1, by: 1, for: 1 };
        var words = s.split(" ");
        for (var i = 0; i < words.length; i++) {
          var w = words[i];
          if (!w || w === "&") { continue; }
          var core = w.toLowerCase().replace(/[^a-z]/g, "");
          if (i > 0 && minor[core]) { words[i] = w.toLowerCase(); continue; }
          words[i] = w.replace(/[A-Za-z\u00C0-\u00FF]+/, function (m) {
            var rest = (m === m.toUpperCase()) ? m.slice(1).toLowerCase() : m.slice(1);
            return m.charAt(0).toUpperCase() + rest;
          });
        }
        return words.join(" ");
      }
      // Dropdown labels carry the trip's start month and year after
      // the short name — "Alaska - May 2026" — so repeat sailings of
      // the same ship (two Adventure of the Seas trips, say) stay
      // distinguishable. A trip's start is its earliest entry date in
      // the index; a trip with no entries yet falls back to its
      // archive card's date range, then to the month/year fragments
      // at the end of its slug. A trip whose start cannot be found
      // keeps its bare short name. Starts are kept at month precision
      // ("YYYY-MM") or as full ISO dates ("YYYY-MM-DD"); only the
      // month and year are ever shown.
      var MONTH_NUM = { jan: 1, january: 1, feb: 2, february: 2, mar: 3, march: 3, apr: 4, april: 4, may: 5, jun: 6, june: 6, jul: 7, july: 7, aug: 8, august: 8, sep: 9, sept: 9, september: 9, oct: 10, october: 10, nov: 11, november: 11, dec: 12, december: 12 };
      function monthYearLabel(start) {
        var m = /^(\d{4})-(\d{2})/.exec(String(start || ""));
        if (!m) { return ""; }
        var mon = MONTHS[parseInt(m[2], 10) - 1];
        return mon ? mon + " " + m[1] : "";
      }
      function startFromSlug(slug) {
        var parts = String(slug || "").toLowerCase().split("-");
        var year = "";
        if (parts.length && /^\d{4}$/.test(parts[parts.length - 1])) { year = parts.pop(); }
        if (!year) { return ""; }
        var firstMonth = 0;
        while (parts.length && MONTH_NUM[parts[parts.length - 1]]) {
          firstMonth = MONTH_NUM[parts.pop()];
        }
        if (!firstMonth) { return ""; }
        return year + "-" + (firstMonth < 10 ? "0" : "") + firstMonth;
      }
      function startFromRangeText(text) {
        var s = clean(text || "");
        var m = /^([A-Za-z]+)\.?\s+\d{1,2}(?:,\s*(\d{4}))?/.exec(s);
        if (!m) { return ""; }
        var mon = MONTH_NUM[m[1].toLowerCase()];
        if (!mon) { return ""; }
        var year = m[2] || "";
        if (!year) {
          var y = /(\d{4})/.exec(s);
          if (y) { year = y[1]; }
        }
        if (!year) { return ""; }
        return year + "-" + (mon < 10 ? "0" : "") + mon;
      }
      function tripLabel(name, slug, start) {
        var base = shortTripName(name, slug);
        var my = monthYearLabel(start);
        return my ? base + " - " + my : base;
      }
      // One internal entry shape, whichever file format was fetched:
      // { date, year, title, time, snippet, text, trip, tripId, page,
      //   url, anchor, type } — tripId is the trip_slug when the file
      // provides one, else the tripId/page of the wrapped shape.
      function normalizeEntry(e) {
        if (!e || typeof e !== "object") { return null; }
        var tripSlug = e.trip_slug || e.tripId || e.trip_id || e.page || "";
        var tripName = shortTripName(e.trip || e.trip_name || "", tripSlug);
        var tripId = tripSlug || slugify(tripName);
        var date = e.date || "";
        var year = null;
        if (e.year !== null && e.year !== undefined && e.year !== "") { year = parseInt(e.year, 10); }
        if ((year === null || isNaN(year)) && date) { year = parseInt(String(date).slice(0, 4), 10); }
        if (year !== null && isNaN(year)) { year = null; }
        var text = e.text || "";
        var snippet = e.snippet || (text ? snippetOf([text]) : "");
        var page = e.page || tripId || "";
        var url = e.url || (page ? "#" + page : "");
        return {
          date: date, year: year, title: e.title || "", time: e.time || "",
          snippet: snippet, text: text, trip: tripName, tripId: tripId,
          page: page, url: url, anchor: e.anchor || "", type: e.type || "journal"
        };
      }
      function normalizeIndex(data) {
        var raw = null, rawTrips = null, rawYears = null;
        if (isArray(data)) { raw = data; }
        else if (data && isArray(data.entries)) { raw = data.entries; rawTrips = data.trips; rawYears = data.years; }
        if (!raw) { return null; }
        var entries = [];
        raw.forEach(function (e) { var n = normalizeEntry(e); if (n) { entries.push(n); } });
        var tripsById = {}, trips = [];
        function regTrip(id, name, start) {
          if (!id) { return; }
          if (!tripsById[id]) {
            tripsById[id] = { id: id, name: shortTripName(name || "", id), start: start || "" };
            trips.push(tripsById[id]);
          } else if (start && (!tripsById[id].start || start < tripsById[id].start)) {
            // Keep the earliest start offered: entries arrive in no
            // guaranteed order, and the trip's first day wins.
            tripsById[id].start = start;
          }
        }
        if (isArray(rawTrips)) {
          rawTrips.forEach(function (tr) {
            if (tr && typeof tr === "object") {
              var tid = tr.id || tr.slug || tr.trip_slug || slugify(tr.name);
              regTrip(tid, tr.name, tr.start || tr.startDate || tr.start_date || startFromSlug(tid));
            }
          });
        }
        entries.forEach(function (e) { regTrip(e.tripId, e.trip, e.date || ""); });
        var yearsByVal = {}, years = [];
        function regYear(y) {
          var n = parseInt(y, 10);
          if (!isNaN(n) && !yearsByVal[n]) { yearsByVal[n] = true; years.push(n); }
        }
        if (isArray(rawYears)) { rawYears.forEach(regYear); }
        entries.forEach(function (e) { if (e.year) { regYear(e.year); } });
        years.sort(function (a, b) { return b - a; });
        entries.sort(function (a, b) {
          if (a.date === b.date) { return a.title < b.title ? 1 : -1; }
          return a.date < b.date ? 1 : -1;
        });
        return { trips: trips, years: years, entries: entries };
      }
      // The site's own trip list: every trip that has a page, in the
      // archive index's order (most recent first, the current trip
      // leading). Each archive card links to its trip's page and
      // carries the trip's canonical name; the dropdown shows that
      // name shortened by shortTripName(), like every other trip.
      // Framework trips — placeholder pages with no journal content
      // yet — are in this list even when the search index holds no
      // entries for them at all.
      function siteTrips() {
        var out = [], seen = {};
        Array.prototype.forEach.call(document.querySelectorAll(".archive-card"), function (card) {
          var href = card.getAttribute("href") || "";
          var id = href.charAt(0) === "#" ? href.slice(1) : "";
          if (!id || seen[id]) { return; }
          seen[id] = true;
          var name = "";
          var strong = card.querySelector("strong");
          if (strong) {
            var clone = strong.cloneNode(true);
            var badge = clone.querySelector(".current-badge");
            if (badge && badge.parentNode) { badge.parentNode.removeChild(badge); }
            name = clean(clone.textContent);
          }
          var timeEl = card.querySelector("time");
          var start = (timeEl ? startFromRangeText(timeEl.textContent) : "") || startFromSlug(id);
          out.push({ id: id, name: shortTripName(name, id), start: start });
        });
        return out;
      }
      // Merge the site's trip list into the index's trips: every site
      // trip appears, in archive order, whether or not the index has
      // entries for it (the index's own record wins when both know the
      // trip, so names stay exactly as they were); any trip only the
      // index knows is kept, appended after the site's list.
      function mergeSiteTrips(idx) {
        if (!idx) { return idx; }
        var byId = {}, merged = [];
        idx.trips.forEach(function (tr) { byId[tr.id] = tr; });
        siteTrips().forEach(function (tr) {
          var ex = byId[tr.id];
          if (ex) {
            // The index's record keeps the name, but a start known
            // only to the archive card (a trip with no entries yet)
            // still reaches the label — earliest start wins.
            if (tr.start && (!ex.start || tr.start < ex.start)) { ex.start = tr.start; }
            merged.push(ex);
          } else {
            merged.push(tr);
          }
          byId[tr.id] = null;
        });
        idx.trips.forEach(function (tr) { if (byId[tr.id]) { merged.push(tr); } });
        idx.trips = merged;
        return idx;
      }
      function populate(idx) {
        var tv = tripSel.value, yv = yearSel.value;
        while (tripSel.options.length > 1) { tripSel.remove(1); }
        while (yearSel.options.length > 1) { yearSel.remove(1); }
        idx.trips.forEach(function (tr) {
          var o = document.createElement("option");
          o.value = tr.id;
          o.textContent = tripLabel(tr.name, tr.id, tr.start);
          tripSel.appendChild(o);
        });
        idx.years.forEach(function (yy) {
          var o = document.createElement("option");
          o.value = String(yy);
          o.textContent = String(yy);
          yearSel.appendChild(o);
        });
        if (tv) { tripSel.value = tv; }
        if (yv) { yearSel.value = yv; }
      }
      function alignMainList(t, y, needle) {
        // Keep the current trip's own day-by-day list (on its journal
        // page) consistent with the filters, as the old filter did:
        // its entries hide/show in place and its empty note follows.
        if (!main) { return; }
        var shown = 0;
        Array.prototype.forEach.call(main.querySelectorAll(".history-list .memory"), function (e) {
          var ok = (!t || e.getAttribute("data-trip") === t)
            && (!y || e.getAttribute("data-year") === y)
            && (!needle || e.textContent.toLowerCase().indexOf(needle) !== -1);
          e.style.display = ok ? "" : "none";
          if (ok) { shown++; }
        });
        if (histEmpty) { histEmpty.hidden = shown !== 0; }
      }
      function resultHref(e) {
        var url = e.url || "";
        if (!url) { return e.anchor ? "#" + e.anchor : "#" + e.page; }
        // A link to another page (a past trip's own .html file) needs
        // the entry anchor appended so it lands on the day itself.
        if (url.indexOf(".html") !== -1 && e.anchor && url.indexOf("#") === -1) {
          return url + "#" + e.anchor;
        }
        return url;
      }
      function resultItem(e) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.className = "place-day search-result";
        a.href = resultHref(e);
        a.setAttribute("data-page", e.page);
        if (e.anchor) { a.setAttribute("data-anchor", e.anchor); }
        var dEl = document.createElement("span");
        dEl.className = "place-day-date";
        dEl.textContent = fmtDate(e.date);
        var tEl = document.createElement("span");
        tEl.className = "place-day-title";
        tEl.textContent = e.title;
        var sEl = document.createElement("span");
        sEl.className = "search-result-snippet";
        sEl.textContent = e.snippet || "";
        var trEl = document.createElement("span");
        trEl.className = "place-day-trip";
        trEl.textContent = e.trip;
        a.appendChild(dEl);
        a.appendChild(tEl);
        if (e.snippet) { a.appendChild(sEl); }
        a.appendChild(trEl);
        li.appendChild(a);
        return li;
      }
      function run() {
        var t = tripSel.value, y = yearSel.value, needle = q.value.trim().toLowerCase();
        var tName = "";
        if (t && tripSel.selectedIndex >= 0) {
          // The option label ends in " - Mon YYYY" (the trip's start);
          // entries carry the bare short name, so strip the suffix
          // back off before name-matching below.
          tName = clean(tripSel.options[tripSel.selectedIndex].textContent)
            .replace(/\s+-\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{4}$/, "");
        }
        alignMainList(t, y, needle);
        if (!INDEX) { return; }
        if (!t && !y && !needle) { panel.hidden = true; return; }
        var hits = INDEX.entries.filter(function (e) {
          if (t) {
            // The dropdown value is the trip's slug/id, but match the
            // trip name too — an entry whose slug differs from the
            // dropdown's must not silently drop out of its own trip.
            var okTrip = e.tripId === t || e.trip === t || slugify(e.trip) === t
              || (tName && (e.trip === tName || shortTripName(e.trip) === tName));
            if (!okTrip) { return false; }
          }
          if (y && String(e.year) !== y) { return false; }
          if (needle) {
            var hay = (e.title + " " + e.snippet + " " + e.text + " " + e.trip).toLowerCase();
            if (hay.indexOf(needle) === -1) { return false; }
          }
          return true;
        });
        var tripCount = {};
        hits.forEach(function (e) { tripCount[e.tripId || e.trip] = true; });
        var nTrips = Object.keys(tripCount).length;
        titleEl.textContent = "Search results";
        subEl.textContent = hits.length + (hits.length === 1 ? " entry" : " entries")
          + " across " + nTrips + (nTrips === 1 ? " trip" : " trips")
          + (hits.length > 60 ? " \u2014 showing the 60 most recent" : "")
          + ". Tap a result to open that day on its trip page.";
        listEl.innerHTML = "";
        hits.slice(0, 60).forEach(function (e) { listEl.appendChild(resultItem(e)); });
        emptyEl.hidden = hits.length !== 0;
        panel.hidden = false;
      }
      function goTo(page, anchor) {
        var el = anchor ? document.getElementById(anchor) : null;
        if (!el) {
          // No resolvable entry: land on the trip's page itself.
          if (page) { window.location.hash = page; }
          return;
        }
        var host = el.closest ? el.closest(".view") : null;
        if (host && main && host !== main) {
          Array.prototype.forEach.call(document.querySelectorAll(".archive-view"), function (v) { v.hidden = v !== host; });
          main.hidden = true;
          var t = host.getAttribute("data-title");
          document.title = t ? t + " \u00B7 Where's Patrick?" : "Where's Patrick?";
          try { history.pushState(null, "", "#" + page); } catch (err) { /* in-page only */ }
        } else if (main) {
          Array.prototype.forEach.call(document.querySelectorAll(".archive-view"), function (v) { v.hidden = true; });
          main.hidden = false;
          try { history.pushState(null, "", "#" + (anchor.indexOf("entry-") === 0 ? anchor : page)); } catch (err) { /* in-page only */ }
        }
        setTimeout(function () {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          el.classList.add("flash");
          setTimeout(function () { el.classList.remove("flash"); }, 2400);
        }, 60);
      }
      function clearAll() {
        tripSel.value = "";
        yearSel.value = "";
        q.value = "";
        run();
      }
      tripSel.addEventListener("change", run);
      yearSel.addEventListener("change", run);
      q.addEventListener("input", run);
      q.addEventListener("keydown", function (e) {
        if (e.key === "Enter") { e.preventDefault(); run(); }
      });
      if (applyBtn) { applyBtn.addEventListener("click", run); }
      if (clearBtn) { clearBtn.addEventListener("click", clearAll); }
      listEl.addEventListener("click", function (e) {
        var a = e.target && e.target.closest ? e.target.closest("a.search-result") : null;
        if (!a) { return; }
        var anchor = a.getAttribute("data-anchor");
        var page = a.getAttribute("data-page");
        // In-page jump only when the entry (or its trip view) is on
        // this page. On the multi-page site the entry lives on another
        // page: let the link follow its url there instead of trapping
        // the tap in a hash change that resolves to nothing.
        var el = anchor ? document.getElementById(anchor) : null;
        var view = page ? document.getElementById(page) : null;
        if (el || (view && view.className && (" " + view.className + " ").indexOf(" archive-view ") !== -1)) {
          e.preventDefault();
          goTo(page, anchor);
        }
      });
      function buildFromDOM() {
        var trips = {}, tripList = [], entries = [], years = {};
        function reg(id, name) {
          if (!trips[id]) { trips[id] = { id: id, name: name, page: id }; tripList.push(trips[id]); }
        }
        function add(e) { entries.push(e); if (e.year) { years[e.year] = true; } }
        function memEntry(art, tid, name) {
          var copy = art.querySelector(".memory-copy");
          var h = art.querySelector("h3");
          var paras = [];
          if (copy) {
            Array.prototype.forEach.call(copy.children, function (c) {
              if (c.tagName === "P") { paras.push(c.textContent); }
            });
          }
          var d = art.getAttribute("data-date") || "";
          add({ date: d, year: d ? +d.slice(0, 4) : null, title: clean(h ? h.textContent : ""), snippet: snippetOf(paras), text: paras.join(" "), trip: name, trip_slug: tid, page: tid, url: "#" + tid, anchor: art.id, type: "journal" });
        }
        var hh = document.getElementById("history-heading");
        var curName = hh ? clean(hh.textContent) : "Venice & Transatlantic";
        reg("venice-transatlantic", curName);
        if (main) {
          Array.prototype.forEach.call(main.querySelectorAll(".history-list .memory"), function (a) { memEntry(a, "venice-transatlantic", curName); });
        }
        Array.prototype.forEach.call(document.querySelectorAll(".archive-view"), function (view) {
          var h2 = view.querySelector(".archive-head h2") || view.querySelector("h2");
          var name = clean(h2 ? h2.textContent : view.id);
          reg(view.id, name);
          Array.prototype.forEach.call(view.querySelectorAll("article"), function (art) {
            var cls = " " + (art.className || "") + " ";
            if (cls.indexOf(" memory ") !== -1) { memEntry(art, view.id, name); }
            else if (cls.indexOf(" framework-day ") !== -1) {
              var tm = art.querySelector("time[datetime]");
              var d = tm ? tm.getAttribute("datetime") : "";
              var h = art.querySelector("h3");
              var paras = [];
              Array.prototype.forEach.call(art.querySelectorAll("p"), function (p) {
                if ((p.className || "").indexOf("framework-source") === -1) { paras.push(p.textContent); }
              });
              add({ date: d, year: d ? +d.slice(0, 4) : null, title: clean(h ? h.textContent : ""), snippet: snippetOf(paras), text: paras.join(" "), trip: name, trip_slug: view.id, page: view.id, url: "#" + view.id, anchor: art.id, type: "record" });
            }
          });
        });
        var byTrip = {};
        entries.forEach(function (e) { if (e.year) { (byTrip[e.trip_slug] = byTrip[e.trip_slug] || {}); byTrip[e.trip_slug][e.year] = true; } });
        entries.forEach(function (e) {
          if (!e.year && byTrip[e.trip_slug]) {
            var ys = Object.keys(byTrip[e.trip_slug]);
            e.year = +ys[ys.length - 1];
            if (e.year) { years[e.year] = true; }
          }
        });
        entries.sort(function (a, b) {
          if (a.date === b.date) { return a.title < b.title ? 1 : -1; }
          return a.date < b.date ? 1 : -1;
        });
        var latest = {};
        entries.forEach(function (e) { if (e.date && (!latest[e.trip_slug] || e.date > latest[e.trip_slug])) { latest[e.trip_slug] = e.date; } });
        tripList.sort(function (a, b) { return (latest[a.id] || "") < (latest[b.id] || "") ? 1 : -1; });
        return { trips: tripList, years: Object.keys(years).sort().reverse(), entries: entries };
      }
      function setIndex(data) {
        var idx = normalizeIndex(data);
        if (!idx || !idx.entries.length) { idx = normalizeIndex(buildFromDOM()); }
        INDEX = mergeSiteTrips(idx);
        if (INDEX) { populate(INDEX); }
        run();
      }
      // The index sits beside the site root's assets folder: root
      // pages fetch it directly, pages under past/ step up one level.
      // If the expected path misses, try the other before falling back
      // to the DOM — a wrong guess about the page's depth must not by
      // itself empty the search.
      var inPast = window.location.pathname.indexOf("/past/") !== -1;
      var primaryPath = (inPast ? "../assets/search-index.json" : "assets/search-index.json") + '?v=' + (window.__SITE_VERSION__ || '');
      var secondaryPath = (inPast ? "assets/search-index.json" : "../assets/search-index.json") + '?v=' + (window.__SITE_VERSION__ || '');
      function fetchIndex(path) {
        return fetch(path).then(function (r) {
          if (!r.ok) { throw new Error("search index unavailable"); }
          return r.json();
        }).then(function (data) {
          var idx = normalizeIndex(data);
          if (!idx || !idx.entries.length) { throw new Error("search index malformed"); }
          return data;
        });
      }
      if (window.fetch) {
        fetchIndex(primaryPath)
          .then(function (data) { setIndex(data); })
          .catch(function () {
            return fetchIndex(secondaryPath)
              .then(function (data) { setIndex(data); })
              .catch(function () { setIndex(buildFromDOM()); });
          });
      } else {
        setIndex(buildFromDOM());
      }
    })();

    // ----- Feature 6: a year ago today (renders only when a prior-year entry matches today's month & day) -----
    (function () {
      var host = document.getElementById("throwback");
      if (!host) { return; }
      var now = new Date();
      var mm = now.getMonth() + 1, dd = now.getDate(), yy = now.getFullYear();
      var match = null, matchYear = 0;
      Array.prototype.forEach.call(document.querySelectorAll(".memory[data-date]"), function (e) {
        var p = e.getAttribute("data-date").split("-");
        if (+p[1] === mm && +p[2] === dd && +p[0] < yy && +p[0] > matchYear) { match = e; matchYear = +p[0]; }
      });
      if (!match) { return; }
      var copy = match.querySelector(".memory-copy");
      var card = document.createElement("section");
      card.className = "throwback";
      card.setAttribute("aria-label", "Journal entry from a year ago today");
      var kicker = document.createElement("span");
      kicker.className = "date";
      kicker.textContent = "A year ago today";
      var h = document.createElement("h3");
      h.textContent = copy.querySelector("h3").textContent;
      var para = document.createElement("p");
      para.textContent = copy.querySelector("p").textContent;
      var link = document.createElement("a");
      link.href = "#" + match.id;
      link.textContent = "Read the " + copy.querySelector("time").textContent + " entry \u2192";
      link.addEventListener("click", function (ev) {
        ev.preventDefault();
        var view = match.closest(".view");
        if (view && view.id !== "view-main") { window.location.hash = view.id; }
        else if (window.location.hash) { window.location.hash = ""; }
        setTimeout(function () {
          match.scrollIntoView({ behavior: "smooth", block: "start" });
          match.classList.add("flash");
          setTimeout(function () { match.classList.remove("flash"); }, 2400);
        }, 60);
      });
      card.appendChild(kicker);
      card.appendChild(h);
      card.appendChild(para);
      card.appendChild(link);
      host.appendChild(card);
    })();

    (function () {
      var main = document.getElementById("view-main");
      // Standalone trip pages (the published past/<slug>.html files) have
      // no #view-main and exactly one .archive-view — that view IS the
      // page's content. This router only exists to switch views inside
      // the single-page artifact, so on a standalone page it must do
      // nothing at all. The previous version looked every trip's view up
      // by id from a hard-coded list: on a past-trip page it set `hidden`
      // on the one archive view the page does have (the location hash
      // there is empty or an #entry- anchor, never the view's own slug),
      // then threw on the first listed view missing from the page —
      // leaving a blank page with only the nav, and, because the publish
      // pipeline wraps this bundle in a single try/catch, aborting every
      // feature scripted after this block (galleries, day links,
      // Background popovers, place search, the multi-page router).
      if (!main) { return; }
      // Derive the views from the DOM rather than a hard-coded slug
      // list, so a view can never be dereferenced while missing.
      var views = Array.prototype.slice.call(document.querySelectorAll(".archive-view"));
      function route() {
        var slug = window.location.hash.replace(/^#/, "");
        var active = null;
        views.forEach(function (view) {
          view.hidden = view.id !== slug;
          if (view.id === slug) { active = view; }
        });
        main.hidden = !!active;
        document.title = active ? active.getAttribute("data-title") + " · Where's Patrick?" : "Where's Patrick?";
        window.scrollTo(0, 0);
      }
      window.addEventListener("hashchange", route);
      route();
    })();

    (function () {
      // Every gallery initialises in isolation, inside its own try/catch.
      // This isolation is load-bearing: in the published bundle all of
      // app.js runs inside a single try/catch, so one throw anywhere in
      // this block used to abort every feature scripted after it — and
      // the Spain & Transatlantic archive (the first trip page with
      // galleries, eleven of them) rendered blank apart from the nav,
      // while gallery-free pages like Alaska were unaffected. A gallery
      // that fails now just stays a plain figure of photos; the other
      // galleries and the rest of the page carry on regardless.
      function initGallery(g) {
        var track = g.querySelector(".gallery-track");
        // A gallery missing its track must not throw (see above).
        if (!track) { return; }
        // Clicking a photo (not the prev/next buttons, dots or counter,
        // which sit outside the track) opens it full size in a new tab:
        // wrap each gallery image in a real link to its own file. This
        // runs for every [data-gallery] at load, so future galleries
        // built with the same markup get the behaviour automatically.
        // Video slides are left alone — they keep their own controls.
        // The link is inserted in the image's OWN parent, never blindly
        // in the track: insertBefore against the wrong parent throws,
        // and an image without a src has nothing to link to.
        Array.prototype.forEach.call(track.querySelectorAll("img"), function (img) {
          var parent = img.parentNode;
          if (!parent || parent.tagName === "A") { return; }
          var src = img.getAttribute("src");
          if (!src) { return; }
          var link = document.createElement("a");
          link.className = "gallery-open";
          link.href = src;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.title = "Open full size in a new tab";
          link.setAttribute("aria-label", "Open full-size photo in a new tab" + (img.getAttribute("alt") ? ": " + img.getAttribute("alt") : ""));
          parent.insertBefore(link, img);
          link.appendChild(img);
        });
        // Snapshot the slides only after wrapping: track.children is a
        // live list and the wrapping above mutates it, so navigation
        // below works from this fixed array, never the live list.
        var slides = Array.prototype.slice.call(track.children);
        var total = slides.length;
        if (!total) { return; }
        var count = g.querySelector(".gallery-count");
        var dots = g.querySelectorAll(".gallery-dot");
        var i = 0;
        function go(n) {
          i = ((n % total) + total) % total;
          // Show only the active slide instead of sliding a wide track:
          // off-screen slides used to sit clipped inside the figure,
          // leaving their full-size photo links unreachable (and
          // unfocusable in any practical sense) on a phone. Hidden
          // slides are display:none, so every visible photo link is
          // fully operable, and a hidden video slide is paused.
          track.style.transform = "";
          slides.forEach(function (child, ci) {
            child.style.display = ci === i ? "" : "none";
            if (ci !== i) {
              var v = child.tagName === "VIDEO" ? child : (child.querySelector ? child.querySelector("video") : null);
              if (v && v.pause) { v.pause(); }
            }
          });
          if (count) { count.textContent = (i + 1) + " of " + total; }
          Array.prototype.forEach.call(dots, function (d, di) {
            if (di === i) { d.setAttribute("aria-current", "true"); }
            else { d.removeAttribute("aria-current"); }
          });
        }
        go(0);
        var prevBtn = g.querySelector(".gallery-btn.prev");
        var nextBtn = g.querySelector(".gallery-btn.next");
        if (prevBtn) { prevBtn.addEventListener("click", function () { go(i - 1); }); }
        if (nextBtn) { nextBtn.addEventListener("click", function () { go(i + 1); }); }
        Array.prototype.forEach.call(dots, function (d, di) {
          d.addEventListener("click", function () { go(di); });
        });
        var x0 = null;
        var swiped = false;
        g.addEventListener("touchstart", function (e) {
          if (e.changedTouches && e.changedTouches[0]) { x0 = e.changedTouches[0].clientX; }
        }, { passive: true });
        g.addEventListener("touchend", function (e) {
          if (x0 === null || !e.changedTouches || !e.changedTouches[0]) { return; }
          var dx = e.changedTouches[0].clientX - x0;
          x0 = null;
          if (Math.abs(dx) > 40) {
            swiped = true;
            window.setTimeout(function () { swiped = false; }, 400);
            go(i + (dx < 0 ? 1 : -1));
          }
        }, { passive: true });
        // A swipe that navigated the carousel also fires a click on the
        // photo link — swallow that one click so swiping never opens a tab.
        g.addEventListener("click", function (e) {
          if (swiped && e.target && e.target.tagName === "IMG") {
            e.preventDefault();
            e.stopPropagation();
            swiped = false;
          }
        }, true);
      }
      Array.prototype.forEach.call(document.querySelectorAll("[data-gallery]"), function (g) {
        try {
          initGallery(g);
        } catch (err) {
          if (window.console && window.console.warn) { window.console.warn("gallery skipped:", err); }
        }
      });
    })();

    // ===== Trip detail popups (upcoming trips longer than 7 days) =====
    // Detail content below was built at build time from the trip itineraries
    // in ~/workspace/goals/*/files/itinerary.md — specifically:
    //   goals/december-caribbean/files/itinerary.md
    //   goals/january-caribbean/files/itinerary.md
    //   goals/february-caribbean/files/itinerary.md
    //   goals/australia/files/itinerary.md
    //   goals/legend/files/itinerary.md
    //   goals/alaska-land-trip-and-cruise/files/itinerary.md
    //   goals/panama-canal/files/itinerary.md
    //   goals/2027-11-liberty-mariner/files/itinerary.md
    //   goals/2028-01-legend-vision/files/itinerary.md
    //   goals/2028-03-japan/files/itinerary.md
    //   goals/2028-08-iceland-greenland/files/itinerary.md
    // (goals/venice-transatlantic-trip/files/itinerary.md covers the current
    // sailing, which is not part of the upcoming-trips list.) When an
    // itinerary changes, refresh the matching entry here from that file.
    (function () {
      var TRIP_DETAILS = {
        "december-caribbean": {
          title: "Caribbean",
          range: "November 28 – December 19, 2026 · 21 days",
          bookings: [
            "JetBlue Boston → Ft Lauderdale (Nov 28), home Dec 19",
            "Bahia Mar, Ft Lauderdale — 1 night before the first sailing",
            "Adventure of the Seas — stateroom 4N 7506 Ocean View, three back-to-back sailings (6 + 8 + 6 nights), same cabin throughout",
            "Royal Beach Club day passes booked for all three Nassau stops"
          ],
          stops: [
            ["Nov 28", "Ft Lauderdale", "Fly in; night at Bahia Mar"],
            ["Nov 30", "Nassau, Bahamas", "Royal Beach Club day pass"],
            ["Dec 2", "Samaná, Dominican Republic", "Frontón Beach & snorkeling adventure"],
            ["Dec 3", "Puerto Plata, Dominican Republic", "Amber Beach Club getaway"],
            ["Dec 6", "Nassau, Bahamas", "Royal Beach Club day pass"],
            ["Dec 9", "Oranjestad, Aruba", "Sailaway snorkel cruise — in port until 11:00 PM"],
            ["Dec 10", "Willemstad, Curaçao", "Snorkel the Treasures of Caracas Bay"],
            ["Dec 15", "Cozumel, Mexico", "KUZA Beach day pass"],
            ["Dec 16", "Puerto Costa Maya, Mexico", "Tubing on Bacalar's Seven Color Lagoon"],
            ["Dec 18", "Nassau, Bahamas", "Royal Beach Club day pass"],
            ["Dec 19", "Ft Lauderdale", "Disembark; fly home to Boston"]
          ]
        },
        "january-caribbean": {
          title: "Eastern & Southern Caribbean",
          range: "January 2 – 25, 2027 · 23 days",
          bookings: [
            "Delta Boston → Newark (Jan 2); Fairfield Inn Newark Airport, 1 night",
            "Odyssey of the Seas, 11nt Eastern Caribbean — Studio Ocean View Balcony 2F 7650",
            "Odyssey of the Seas, 11nt Southern Caribbean — Studio Ocean View Balcony 2F 7250",
            "Delta home from Newark on Jan 25"
          ],
          stops: [
            ["Jan 3", "Cape Liberty, New Jersey", "Board Odyssey of the Seas"],
            ["Jan 7", "St Maarten", "Self-guided Philipsburg day — lunch at Marley's"],
            ["Jan 8", "Antigua", "Beach transfer by boat"],
            ["Jan 9", "St Kitts", "Snorkel St. Kitts excursion"],
            ["Jan 10", "St Thomas", "Double Dip snorkeling by fast cat"],
            ["Jan 14", "Cape Liberty", "Turn-around day — second sailing boards the same ship"],
            ["Jan 18", "St Maarten", "Walk-in day — Marley's, then Fort Amsterdam"],
            ["Jan 19", "St Lucia", "Open Fun Bus scenes & beach time"],
            ["Jan 20", "Barbados", "Turtle & shipwreck snorkel adventure"],
            ["Jan 21", "St Kitts", "Self-guided Basseterre walking loop"],
            ["Jan 25", "Cape Liberty", "Disembark; fly home to Boston"]
          ]
        },
        "february-caribbean": {
          title: "Florida & the Bahamas",
          range: "February 5 – 19, 2027 · 14 days",
          bookings: [
            "Delta Boston → Miami (Feb 5); citizenM Miami Brickell, 1 night",
            "Freedom of the Seas, 5nt Caribbean Getaway — Ocean View Balcony 2D 7544",
            "Avis Mustang Mach-E rental, Feb 11–15; staying with a friend in Estero Feb 13–14",
            "Wonder of the Seas, 4nt Bahamas & Perfect Day — Interior 4V 10103",
            "Delta home via Atlanta on Feb 19"
          ],
          stops: [
            ["Feb 5", "Miami", "Featured dinner at Joe's Stone Crab"],
            ["Feb 7", "Nassau, Bahamas", "Royal Beach Club day pass"],
            ["Feb 9", "Puerto Plata, Dominican Republic", "Port day — excursion still being decided"],
            ["Feb 11", "Miami", "Off the ship; featured lunch at Versailles, Little Havana"],
            ["Feb 13–14", "Estero, Florida", "Weekend with a friend — Super Bowl Sunday"],
            ["Feb 16", "Nassau, Bahamas", "Royal Beach Club day pass"],
            ["Feb 18", "Perfect Day at CocoCay", "Hideaway Beach (adults-only) day pass"],
            ["Feb 19", "Miami", "Disembark; fly home to Boston"]
          ]
        },
        "australia": {
          title: "Pacific crossing",
          range: "February 26 – May 5, 2027 · 68 days",
          bookings: [
            "Alaska Airlines Boston → Honolulu via Seattle, First (Feb 26); Prince Waikiki, 2 nights",
            "Qantas Honolulu → Sydney (Feb 28, crossing the date line); Shangri-La Sydney, 1 night",
            "Celebrity Edge, three back-to-back sailings from Sydney — Great Barrier Reef (11nt), New Zealand (11nt), Fiji & Vanuatu (14nt)",
            "InterContinental Sydney (Apr 7–9), then The Alva, Brisbane (Apr 9–11)",
            "Quantum of the Seas, 23nt transpacific Brisbane → Seattle — Ocean View Balcony",
            "Hotel Theodore, Seattle (May 3–5); Delta home May 5"
          ],
          stops: [
            ["Feb 26–27", "Honolulu, Hawaii", "Oahu Circle Island tour"],
            ["Mar 5", "Airlie Beach", "Viper trip to the Great Barrier Reef & Whitehaven"],
            ["Mar 6–7", "Cairns (Yorkeys Knob)", "Overnight in port — Kuranda jungle train & Skyrail, then the Reef"],
            ["Mar 8", "Port Douglas", "Mossman Gorge & Rainforest Habitat"],
            ["Mar 12", "Newcastle", "Self-guided east-end walking day"],
            ["Mar 16", "Milford, Doubtful & Dusky Sounds", "Scenic cruising the fiords"],
            ["Mar 17", "Dunedin", "Larnach Castle tour"],
            ["Mar 18", "Christchurch", "Lyttelton excursion with the Antarctic Center"],
            ["Mar 20", "Tauranga", "Hobbiton Tour Experience"],
            ["Mar 21", "Auckland", "Self-guided waterfront & CBD walk"],
            ["Mar 27", "Noumea, New Caledonia", "Self-guided downtown walk"],
            ["Mar 29", "Suva, Fiji", "Colo-i-Suva Forest Park & waterfalls"],
            ["Mar 30", "Lautoka, Fiji", "Snorkeling the Mamanuca waters"],
            ["Apr 1", "Mystery Island, Vanuatu", "Beach day"],
            ["Apr 2", "Lifou, New Caledonia", "Jinek Bay snorkel & Easo stalls"],
            ["Apr 3", "Port Vila, Vanuatu", "Glassbottom boat & snorkel safari (by tender)"],
            ["Apr 7–9", "Sydney", "InterContinental Sydney; the Rocks"],
            ["Apr 10", "Brisbane", "Lone Pine Koala Sanctuary"],
            ["Apr 18", "Papeete, Tahiti", "Waterfront walk; dinner at Les Roulottes food trucks"],
            ["Apr 19", "Moorea", "Snorkel Safari (by tender)"],
            ["Apr 20", "Raiatea", "Uturoa & the Taputapuātea marae (by tender)"],
            ["Apr 26–27", "Honolulu, Hawaii", "Overnight in port — Waikiki & Diamond Head, then Pearl Harbor"],
            ["May 3–5", "Seattle", "Hotel Theodore; Pike Place & the waterfront, then home"]
          ]
        },
        "legend": {
          title: "Spain & the Mediterranean",
          range: "May 12 – 29, 2027 · 17 days",
          bookings: [
            "Iberia Boston → Barcelona via Madrid (overnight May 12–13); H10 Port Vell, 3 nights",
            "Legend of the Seas, 7nt Western Mediterranean — Ocean View N4 9504",
            "Flight Barcelona → Málaga (May 23); staying at Sean's place in Málaga",
            "H10 Corregidor, Seville (May 25–27); H10 Palacio Colomera, Córdoba (May 27–29)",
            "iryo trains Seville → Córdoba and Córdoba → Madrid; Iberia home May 29"
          ],
          stops: [
            ["May 13–15", "Barcelona", "Palau de la Música & Modernisme; Girona & Dalí Museum day trip (May 15)"],
            ["May 17", "Palma de Mallorca", "Self-guided old-town walk — lunch at Celler Sa Premsa"],
            ["May 18", "Marseille, France", "Old Port & Le Panier — bouillabaisse at Le Miramar"],
            ["May 19", "La Spezia, Italy", "Pisa & Lucca by train"],
            ["May 20", "Civitavecchia, Italy", "Port-town day — Forte Michelangelo & the old harbor"],
            ["May 21", "Naples, Italy", "City day — Sansevero Chapel & pizza at L'Antica Pizzeria da Michele"],
            ["May 23–24", "Málaga", "Alcazaba, Atarazanas market & the Picasso Museum"],
            ["May 25–27", "Seville", "Cathedral, Real Alcázar & Plaza de España"],
            ["May 27–29", "Córdoba", "The Mezquita; train to Madrid and home on May 29"]
          ]
        },
        "alaska": {
          title: "Alaska",
          range: "August 20 – September 3, 2027 · 14 days",
          bookings: [
            "Alaska Airlines Boston → Fairbanks via Seattle (Aug 20); Enterprise rental SUV",
            "Sophie Station Suites, Fairbanks (2n); Denali Cabins (2n); Denali Fireside Cabin, Talkeetna (1n)",
            "Alaska Railroad Coastal Classic, Anchorage → Seward (Aug 27) — GoldStar Service",
            "Anthem of the Seas, 7nt Southbound Alaska & Hubbard Glacier — Ocean View Balcony Guarantee"
          ],
          stops: [
            ["Aug 20–21", "Fairbanks", "Chena Hot Springs self-drive day trip (Aug 21)"],
            ["Aug 22–23", "Denali", "Tundra Wilderness Tour (Aug 23)"],
            ["Aug 24", "Talkeetna", "Mahay's Devil's Canyon jet boat, then a K2 glacier-landing flight"],
            ["Aug 25–26", "Anchorage", "Anchorage Museum, Alaska Native Heritage Center & the Coastal Trail"],
            ["Aug 27", "Seward", "Train in by late morning; board Anthem of the Seas"],
            ["Aug 28", "Hubbard Glacier", "Scenic cruising, 1:00–5:00 PM"],
            ["Aug 29", "Juneau", "Self-guided downtown walk — Mount Roberts Tramway & Deckhand Dave's"],
            ["Aug 30", "Skagway", "Self-guided gold-rush town walk"],
            ["Aug 31", "Icy Strait Point", "Port day — excursion still being decided"],
            ["Sep 1", "Ketchikan", "Self-guided waterfront walk"],
            ["Sep 3", "Vancouver", "Disembark"]
          ]
        },
        "panama-canal": {
          title: "Panama Canal",
          range: "September 19 – October 30, 2027 · 41 days",
          bookings: [
            "Serenade of the Seas, 7nt Pacific Coastal Vancouver → San Diego — Ocean View Balcony Guarantee",
            "San Diego, 4 nights between sailings (Oct 3–7)",
            "Serenade of the Seas, 15nt Panama Canal eastward — Spacious Ocean View Balcony 2B 9570, Deluxe Beverage Package booked",
            "Amtrak Tampa → Miami (Oct 22); 1 night in Miami",
            "Hero of the Seas, 7nt Perfect Day CocoCay & East Caribbean — Ocean View N4 10120"
          ],
          stops: [
            ["Sep 28", "Astoria, Oregon", "Port day on the Columbia River"],
            ["Sep 30–Oct 1", "San Francisco", "Overnight in port"],
            ["Oct 3–6", "San Diego", "Old Town, Coronado & the Hotel del Coronado"],
            ["Oct 10", "Puerto Vallarta, Mexico", "Self-guided Malecón & Zona Romántica day"],
            ["Oct 13", "Puerto Quetzal, Guatemala", "Port day — excursion still being decided"],
            ["Oct 15", "Puntarenas, Costa Rica", "Forest Skywalks & Tarcoles River eco-cruise"],
            ["Oct 17", "Panama Canal", "Full-day transit through the locks"],
            ["Oct 18", "Cartagena, Colombia", "Self-guided walled-city day"],
            ["Oct 20", "George Town, Grand Cayman", "Self-guided day in George Town"],
            ["Oct 22", "Tampa → Miami", "Disembark; Amtrak down to Miami"],
            ["Oct 26", "Philipsburg, St Maarten", "Boardwalk & Great Bay Beach day"],
            ["Oct 27", "Charlotte Amalie, St Thomas", "Blackbeard's Castle, the 99 Steps & Magens Bay"],
            ["Oct 29", "Perfect Day at CocoCay", "Beach & waterpark day"],
            ["Oct 30", "Miami", "Disembark; fly home to Boston"]
          ]
        },
        "liberty-mariner": {
          title: "Liberty & Mariner",
          range: "November 26 – December 18, 2027 · 22 days",
          tentative: true,
          bookings: [
            "Liberty of the Seas, 5nt Western Caribbean from Galveston — Ocean View Balcony 4D 8242 (priced, not yet booked)",
            "Mariner of the Seas, 7nt Western Caribbean from New Orleans — Ocean View Balcony 2D 6590 (priced, not yet booked)",
            "Mariner of the Seas, 7nt Western Caribbean from New Orleans — Ocean View Balcony 2D 6296 (priced, not yet booked)",
            "Flights & hotels still to book: Boston → Houston (Nov 26), Houston → New Orleans (Dec 2), 2 nights in New Orleans, home Dec 18"
          ],
          stops: [
            ["Nov 26", "Houston", "Fly in from Boston; night in Houston or Galveston"],
            ["Nov 27", "Galveston", "Board Liberty of the Seas"],
            ["Nov 29", "Cozumel, Mexico", "In port 8:00 AM–6:00 PM"],
            ["Nov 30", "Puerto Costa Maya, Mexico", "In port 7:00 AM–2:00 PM"],
            ["Dec 2", "Galveston → New Orleans", "Disembark; afternoon flight — French Quarter walk & featured dinner at the Gumbo Shop"],
            ["Dec 3", "New Orleans", "Café du Monde beignets, featured lunch at Dooky Chase's, Garden District walk"],
            ["Dec 4", "New Orleans", "Morning in the Quarter; board Mariner of the Seas"],
            ["Dec 6", "Cozumel, Mexico", "In port 7:00 AM–5:00 PM"],
            ["Dec 7", "Puerto Costa Maya, Mexico", "In port 8:00 AM–5:00 PM"],
            ["Dec 8", "Belize City, Belize", "Tendered, 8:00 AM–5:00 PM — local buy: Marie Sharp's hot sauce"],
            ["Dec 11", "New Orleans", "Turn-around day — straight onto the next Mariner sailing"],
            ["Dec 13", "Cozumel, Mexico", "In port 7:00 AM–4:00 PM"],
            ["Dec 14", "George Town, Grand Cayman", "Tendered, 10:00 AM–6:00 PM — local drink: Cayman Mama"],
            ["Dec 15", "Falmouth, Jamaica", "In port 8:00 AM–5:00 PM — local food: Jamaican jerk"],
            ["Dec 18", "New Orleans", "Disembark; fly home to Boston"]
          ]
        },
        "legend-vision": {
          title: "Legend & Vision",
          range: "January 7 – February 6, 2028 · 30 days",
          tentative: true,
          bookings: [
            "Legend of the Seas, 8nt Southern Caribbean from Fort Lauderdale — Ocean View Balcony D4 7726 (priced, not yet booked)",
            "Legend of the Seas, 6nt Western Caribbean from Fort Lauderdale — Ocean View Balcony D4 7336 (priced, not yet booked)",
            "Vision of the Seas, 7nt Southern Caribbean from San Juan — Spacious Ocean View Balcony 4B 7634 (priced, not yet booked)",
            "Vision of the Seas, 7nt Southern Caribbean from San Juan — Spacious Ocean View Balcony 4B 7626 (priced, not yet booked)",
            "Flights & hotels still to book: Boston → Fort Lauderdale (Jan 7), Fort Lauderdale → San Juan (Jan 22), San Juan → Boston (Feb 6); a night each in Fort Lauderdale & San Juan"
          ],
          stops: [
            ["Jan 7", "Fort Lauderdale", "Fly in from Boston; at least one night ashore"],
            ["Jan 8", "Fort Lauderdale", "Board Legend of the Seas"],
            ["Jan 11", "Willemstad, Curaçao", "In port 8:00 AM–6:00 PM — local drink: Blue Curaçao liqueur"],
            ["Jan 12", "Oranjestad, Aruba", "In port 8:00 AM–5:00 PM — local drink: Balashi beer"],
            ["Jan 13", "Cabo Rojo, Dominican Republic", "In port 11:00 AM–6:00 PM"],
            ["Jan 15", "Perfect Day at CocoCay", "In port 8:00 AM–5:00 PM"],
            ["Jan 16", "Fort Lauderdale", "Turn-around day — straight onto the next Legend sailing"],
            ["Jan 17", "Perfect Day at CocoCay", "In port 7:00 AM–5:00 PM"],
            ["Jan 19", "Puerto Costa Maya, Mexico", "In port 8:00 AM–5:00 PM"],
            ["Jan 20", "Cozumel, Mexico", "In port 7:00 AM–5:00 PM"],
            ["Jan 22", "Fort Lauderdale → San Juan", "Disembark; fly to San Juan for one night ashore"],
            ["Jan 23", "San Juan", "Board Vision of the Seas"],
            ["Jan 25", "Kingstown, St. Vincent", "In port 8:00 AM–5:00 PM"],
            ["Jan 26", "St. George's, Grenada", "In port 8:00 AM–5:00 PM — local buy: nutmeg"],
            ["Jan 27", "Fort-de-France, Martinique", "In port 8:00 AM–5:00 PM — local drink: rhum agricole"],
            ["Jan 28", "St. John's, Antigua", "In port 8:00 AM–5:00 PM — local food: Antigua black pineapple"],
            ["Jan 29", "Charlotte Amalie, St. Thomas", "In port 8:00 AM–5:00 PM"],
            ["Jan 30", "San Juan", "Turn-around day — straight onto the next Vision sailing"],
            ["Feb 1", "Bridgetown, Barbados", "In port 8:00 AM–5:00 PM — local drink: Mount Gay rum"],
            ["Feb 2", "St. George's, Grenada", "In port 8:00 AM–5:00 PM — local buy: nutmeg"],
            ["Feb 3", "Kingstown, St. Vincent", "In port 8:00 AM–5:00 PM"],
            ["Feb 4", "St. John's, Antigua", "In port 9:00 AM–5:00 PM — local food: Antigua black pineapple"],
            ["Feb 5", "Charlotte Amalie, St. Thomas", "In port 8:00 AM–5:00 PM"],
            ["Feb 6", "San Juan", "Disembark; fly home to Boston"]
          ]
        },
        "japan": {
          title: "Japan",
          range: "March 8 – May 3, 2028 · 56 days",
          bookings: [
            "Positioning: Boston → San Francisco → Shanghai, arriving Mar 12 (flights still to book)",
            "Spectrum of the Seas, 8nt Shanghai → Yokohama — Ocean View with Large Balcony 4C 10728",
            "Tokyo, 5 nights (Mar 23–28) and Kyoto, 4 nights (Mar 28–Apr 1) — peak cherry-blossom season",
            "Voyager of the Seas, 12nt Japan Cherry Blossoms roundtrip — Sunset Balcony SB 9690",
            "Voyager of the Seas, 16nt Yokohama → Seattle — Junior Suite J4 9318"
          ],
          stops: [
            ["Mar 12–14", "Shanghai", "Yu Garden, the Bund & Shanghai Tower"],
            ["Mar 17", "Kumamoto (Yatsushiro)", "Port day"],
            ["Mar 18", "Kagoshima", "Port day"],
            ["Mar 20–21", "Kobe", "Overnight in port"],
            ["Mar 23–28", "Tokyo", "Five nights — teamLab Planets, Shibuya Sky & Shinjuku Gyoen on the list"],
            ["Mar 28–Apr 1", "Kyoto", "Four nights among the temples at peak blossom"],
            ["Apr 3", "Osaka", "Port day"],
            ["Apr 5", "Jeju (Seogwipo), South Korea", "Port day"],
            ["Apr 6", "Fukuoka", "Port day"],
            ["Apr 8–9", "Okinawa", "Overnight in port"],
            ["Apr 10", "Kagoshima", "Second call, on the evening run north"],
            ["Apr 12", "Shimizu (Mt Fuji)", "Port day with Fuji views, weather permitting"],
            ["Apr 17–18", "Sapporo (Muroran)", "Overnight in port"],
            ["Apr 24", "International Date Line", "Eastbound crossing — the day happens twice"],
            ["Apr 28–May 1", "Seattle", "Arrive Apr 28 with a night aboard, then two nights in the city; home May 1"]
          ]
        },
        "iceland-greenland": {
          title: "Iceland & Greenland",
          range: "August 29 – September 15, 2028 · 17 nights",
          bookings: [
            "Jewel of the Seas, 17nt Copenhagen → Boston — Spacious Ocean View Balcony 2B 9604, My Time dining (waitlist)",
            "Copenhagen pre-stay, 3 nights before boarding (from Aug 26) — Kronborg Castle day trip to Helsingør"
          ],
          stops: [
            ["Aug 29", "Copenhagen, Denmark", "Board Jewel of the Seas; departs 4:00 PM"],
            ["Aug 30", "Aarhus, Denmark", "In port 7:00 AM–2:00 PM"],
            ["Aug 31–Sep 1", "At sea", "Two sea days"],
            ["Sep 2–3", "Reykjavik, Iceland", "Overnight in port — arrive 9:00 AM Sep 2, depart 6:00 PM Sep 3"],
            ["Sep 4", "Isafjordur, Iceland", "In port 8:00 AM–6:00 PM"],
            ["Sep 5", "Akureyri, Iceland", "In port 7:00 AM–5:00 PM"],
            ["Sep 6", "At sea", "Sea day"],
            ["Sep 7", "Prins Christian Sund, Greenland", "Scenic cruise-by, 9:00 AM–5:00 PM"],
            ["Sep 8", "Qaqortoq, Greenland", "In port 8:00 AM–8:00 PM"],
            ["Sep 9–10", "At sea", "Two sea days"],
            ["Sep 11", "St. John's, Newfoundland", "In port 8:00 AM–6:00 PM"],
            ["Sep 12", "At sea", "Sea day"],
            ["Sep 13", "Halifax, Nova Scotia", "In port 8:00 AM–6:00 PM"],
            ["Sep 14", "At sea", "Sea day"],
            ["Sep 15", "Boston", "Arrive 6:00 AM; disembark"]
          ]
        }
      };

      var modal = document.getElementById("trip-modal");
      var titleEl = document.getElementById("trip-modal-title");
      var datesEl = document.getElementById("trip-modal-dates");
      var flagEl = document.getElementById("trip-modal-flag");
      var bookingsEl = document.getElementById("trip-modal-bookings");
      var stopsEl = document.getElementById("trip-modal-stops");
      // The dialog markup lives inside the Future section so the
      // multi-page publisher carries it onto future.html (it used to
      // sit outside the page groups, no published page carried it, and
      // this block bailed before ever adding the Details buttons — the
      // buttons silently vanished from the live site). If a page still
      // arrives without the markup, build the dialog here instead of
      // giving up: the Details buttons must never depend on which
      // publish path the page took. Only bail if even that fails, so a
      // throw can never abort the scripts that follow this block.
      if (!modal || !titleEl || !datesEl || !flagEl || !bookingsEl || !stopsEl) {
        try {
          var built = document.createElement("div");
          built.className = "trip-modal";
          built.id = "trip-modal";
          built.hidden = true;
          built.innerHTML =
            '<div class="trip-modal-backdrop" data-trip-close></div>' +
            '<div class="trip-modal-card" role="dialog" aria-modal="true" aria-labelledby="trip-modal-title">' +
            '<button class="trip-modal-x" type="button" data-trip-close aria-label="Close trip details"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg></button>' +
            '<p class="trip-modal-dates" id="trip-modal-dates"></p>' +
            '<p class="trip-modal-flag" id="trip-modal-flag" hidden></p>' +
            '<h3 id="trip-modal-title"></h3>' +
            '<h4>Headline bookings</h4>' +
            '<ul class="trip-modal-bookings" id="trip-modal-bookings"></ul>' +
            '<h4>Ports &amp; stops</h4>' +
            '<ul class="trip-modal-stops" id="trip-modal-stops"></ul>' +
            "</div>";
          document.body.appendChild(built);
          modal = document.getElementById("trip-modal");
          titleEl = document.getElementById("trip-modal-title");
          datesEl = document.getElementById("trip-modal-dates");
          flagEl = document.getElementById("trip-modal-flag");
          bookingsEl = document.getElementById("trip-modal-bookings");
          stopsEl = document.getElementById("trip-modal-stops");
        } catch (e) { /* fall through to the bail-out below */ }
      }
      if (!modal || !titleEl || !datesEl || !flagEl || !bookingsEl || !stopsEl) { return; }
      var lastTrigger = null;

      function fillList(ul, items, isStops) {
        ul.textContent = "";
        items.forEach(function (item) {
          var li = document.createElement("li");
          if (isStops) {
            var t = document.createElement("time");
            t.textContent = item[0];
            var span = document.createElement("span");
            var strong = document.createElement("strong");
            strong.textContent = item[1];
            span.appendChild(strong);
            if (item[2]) { span.appendChild(document.createTextNode(" — " + item[2])); }
            li.appendChild(t);
            li.appendChild(span);
          } else {
            li.textContent = item;
          }
          ul.appendChild(li);
        });
      }

      function openTrip(key, trigger) {
        var d = TRIP_DETAILS[key];
        if (!d) { return; }
        lastTrigger = trigger || null;
        titleEl.textContent = d.title;
        datesEl.textContent = d.range;
        if (d.tentative) {
          flagEl.textContent = "Tentative — nothing booked yet; firm once the first booking lands";
          flagEl.hidden = false;
        } else {
          flagEl.textContent = "";
          flagEl.hidden = true;
        }
        fillList(bookingsEl, d.bookings, false);
        fillList(stopsEl, d.stops, true);
        modal.hidden = false;
        document.body.style.overflow = "hidden";
        modal.querySelector(".trip-modal-card").scrollTop = 0;
        modal.querySelector(".trip-modal-x").focus();
      }

      function closeTrip() {
        if (modal.hidden) { return; }
        modal.hidden = true;
        document.body.style.overflow = "";
        if (lastTrigger) { lastTrigger.focus(); lastTrigger = null; }
      }

      Array.prototype.forEach.call(modal.querySelectorAll("[data-trip-close]"), function (el) {
        el.addEventListener("click", closeTrip);
      });
      document.addEventListener("keydown", function (e) {
        if ((e.key === "Escape" || e.key === "Esc") && !modal.hidden) { closeTrip(); }
      });

      Array.prototype.forEach.call(document.querySelectorAll(".trip-row[data-start][data-end][data-trip]"), function (row) {
        var start = new Date(row.getAttribute("data-start") + "T00:00:00");
        var end = new Date(row.getAttribute("data-end") + "T00:00:00");
        var days = Math.round((end - start) / 86400000);
        var key = row.getAttribute("data-trip");
        if (!(days > 7) || !TRIP_DETAILS[key]) { return; }
        row.classList.add("clickable");
        row.setAttribute("tabindex", "0");
        row.setAttribute("role", "button");
        row.setAttribute("aria-haspopup", "dialog");
        var slot = row.querySelector("[data-cd-slot]") || row;
        var hint = document.createElement("span");
        hint.className = "trip-hint";
        hint.innerHTML = "Details <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 5l7 7-7 7\"/></svg>";
        slot.appendChild(hint);
        row.addEventListener("click", function () { openTrip(key, row); });
        row.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openTrip(key, row);
          }
        });
      });
    })();

    // ----- Day links: opening or following a #entry-YYYY-MM-DD anchor reveals
    // the view that holds that journal entry (the main page or a trip archive
    // view), then scrolls to the entry and flashes its outline. Day-link clicks
    // use pushState so the view router (which keys off archive slugs) does not
    // fight the scroll; direct arrivals and back/forward land here via
    // hashchange, after the router has run.
    (function () {
      var main = document.getElementById("view-main");
      function showView(view) {
        // Every archive view in the DOM, not a hard-coded subset: the
        // old 8-id list left deep links to entries in the other trips'
        // views unrevealed (their view stayed hidden while the main
        // view hid too — a blank page). On a standalone trip page the
        // list is just that page's own view, which stays visible.
        Array.prototype.forEach.call(document.querySelectorAll(".archive-view"), function (v) {
          v.hidden = v !== view;
        });
        if (main) { main.hidden = view !== main; }
        var t = (view && view !== main) ? view.getAttribute("data-title") : null;
        document.title = t ? t + " · Where's Patrick?" : "Where's Patrick?";
      }
      function goToEntry(el, push) {
        var view = el.closest ? el.closest(".view") : null;
        if (view) { showView(view); }
        if (push) {
          try { history.pushState(null, "", "#" + el.id); } catch (e) { /* hash stays shareable via the href */ }
        }
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.classList.add("flash");
        setTimeout(function () { el.classList.remove("flash"); }, 2400);
      }
      document.addEventListener("click", function (e) {
        var a = e.target && e.target.closest ? e.target.closest("a.day-link") : null;
        if (!a) { return; }
        var el = document.getElementById(a.getAttribute("href").slice(1));
        if (!el) { return; }
        e.preventDefault();
        goToEntry(el, true);
      });
      function fromHash() {
        var id = window.location.hash.replace(/^#/, "");
        if (id.indexOf("entry-") !== 0) { return; }
        var el = document.getElementById(id);
        if (!el) {
          // Receipt-framework days carry day-… ids, not entry-… ones, so
          // a dated link for such a day — the form the place counters
          // and cross-page day links emit — matches no element by id.
          // Fall back to the framework card whose <time datetime> is
          // that date; without this, taps on those days landed at the
          // top of the trip page instead of on the day itself.
          var d = id.slice(6);
          if (/^\d{4}-\d{2}-\d{2}$/.test(d)) {
            var times = document.querySelectorAll(".framework-day time[datetime=\"" + d + "\"]");
            for (var i = 0; i < times.length; i++) {
              el = times[i].closest ? times[i].closest(".framework-day") : times[i].parentElement;
              if (el) { break; }
            }
          }
        }
        if (el) { goToEntry(el, false); }
      }
      window.addEventListener("hashchange", fromHash);
      fromHash();
    })();

    // ----- Background popovers: every context note sits behind a
    // tap-friendly "Background" button so the card body stays readable.
    // Clicking toggles the panel in the flow of the card; opening one
    // closes the others, and Escape closes all of them.
    (function () {
      function closeAll(except) {
        document.querySelectorAll(".note-pop-btn[aria-expanded=\"true\"]").forEach(function (b) {
          if (b === except) { return; }
          b.setAttribute("aria-expanded", "false");
          var p = document.getElementById(b.getAttribute("aria-controls"));
          if (p) { p.hidden = true; }
        });
      }
      document.addEventListener("click", function (e) {
        var b = e.target && e.target.closest ? e.target.closest(".note-pop-btn") : null;
        if (!b) { return; }
        var panel = document.getElementById(b.getAttribute("aria-controls"));
        if (!panel) { return; }
        var open = b.getAttribute("aria-expanded") === "true";
        closeAll(b);
        b.setAttribute("aria-expanded", open ? "false" : "true");
        panel.hidden = open;
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") { closeAll(null); }
      });
    })();

    // ----- Place counters: tapping a country or city in the counters runs
    // the journal search for that place and lists every matching day on the
    // page — main journal, Spain and Bayonne archive journals, and the receipt-framework
    // trip archives — each row jumping to the day itself.
    (function () {
      // ----- One source of truth for the place counters -----
      // The place counters are DERIVED from the journal entries in
      // assets/search-index.json — the same file (and the same single
      // fetch) the journal search already loads. There is no places
      // list anywhere any more: each entry carries its own place
      // attribution — "c", the keys of the cities visited that day,
      // and "s", the key of the ship whose sailing starts that day —
      // and derivePlaces() below rebuilds every country, city and
      // ship record (dated days, visit counts, last-visited dates)
      // from those fields at load. The only place data kept apart
      // from the entries is the file's "placeMeta" directory: a
      // city's display name, location line and favorite flag, and a
      // ship's name and total nights on board — reference data with
      // no dates or counts in it, so it cannot drift the way the old
      // hand-kept places list did (three copies once existed, and a
      // dating update that reached two of them silently missed the
      // third, leaving whole trips dateless in the "Days in…" lists).
      // A future dating update edits the entries and everything —
      // panels, headline counts, last-visited lines, year trackers,
      // tap-a-place day lists — follows.
      var CURRENT_TRIP = "venice-transatlantic";
      var INDEX = {};
      var TRIPS = {};
      var ARCHIVES = [];
      var placesReady = false;
      var pendingSearch = null;

      var MONTHS_LONG = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      function fmtISO(iso) {
        var p = String(iso || "").split("-");
        if (p.length < 3) { return String(iso || ""); }
        return MONTHS_LONG[parseInt(p[1], 10) - 1] + " " + parseInt(p[2], 10) + ", " + p[0];
      }
      function plural(n, one, many) { return n + (n === 1 ? one : many); }

      // Render the three counter panels (countries / cities / ships),
      // the headline count buttons and the ships total line from the
      // derived places, in the array's order (the panels' display
      // order: favorites first for cities, then most visited first),
      // reproducing the exact item markup the page used to hard-code.
      var FAV_STAR = '<svg class="fav-star" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
      function renderPlaceLists(places) {
        var lists = {
          country: document.querySelector('#place-countries ul.place-list'),
          city: document.querySelector('#place-cities ul.place-list'),
          ship: document.querySelector('#place-ships ul.place-list')
        };
        var counts = { country: 0, city: 0, ship: 0 };
        // The "counts cover" note tracks page content, not places:
        // its date is the latest date among ALL index entries
        // (derivePlaces stashes it on the array as latestEntryDate),
        // so sea days — entries with no city and no ship key, hence
        // no place-attached day — still advance it. The place-day
        // scan below can only ever match or trail that date, since
        // every place-day comes from an entry.
        var sailings = 0, nights = 0, latest = places.latestEntryDate || null;
        places.forEach(function (p) {
          counts[p.kind]++;
          if (p.kind === "ship") { sailings += p.visits; nights += p.nights || 0; }
          p.days.forEach(function (ref) { if (ref.d && (!latest || ref.d > latest)) { latest = ref.d; } });
          var ul = lists[p.kind];
          if (!ul) { return; }
          var li = document.createElement("li");
          var b = document.createElement("button");
          b.type = "button";
          b.className = "place-item" + (p.fav ? " is-favorite" : "");
          b.setAttribute("data-kind", p.kind);
          b.setAttribute("data-key", p.key);
          var name = document.createElement("span");
          name.className = "place-name";
          if (p.fav) { name.innerHTML = FAV_STAR; name.appendChild(document.createTextNode(p.name)); }
          else { name.textContent = p.name; }
          if (p.loc) {
            var loc = document.createElement("span");
            loc.className = "place-loc";
            loc.textContent = p.loc;
            name.appendChild(loc);
          }
          if (p.fav) {
            var fav = document.createElement("span");
            fav.className = "place-fav";
            fav.textContent = "Favorite port";
            name.appendChild(fav);
          }
          b.appendChild(name);
          var n = document.createElement("span");
          n.className = "place-n";
          n.textContent = p.kind === "ship"
            ? plural(p.visits, " cruise", " cruises") + " · " + plural(p.nights || 0, " night", " nights")
            : plural(p.visits, " visit", " visits");
          b.appendChild(n);
          li.appendChild(b);
          ul.appendChild(li);
        });
        // Headline counts on the three panel buttons.
        var labels = { country: [" country", " countries"], city: [" city", " cities"], ship: [" ship", " ships"] };
        var panelsFor = { country: "place-countries", city: "place-cities", ship: "place-ships" };
        ["country", "city", "ship"].forEach(function (kind) {
          var btn = document.querySelector('.place-count-btn[aria-controls="' + panelsFor[kind] + '"]');
          var strong = btn ? btn.querySelector("strong") : null;
          if (strong) { strong.textContent = counts[kind] + labels[kind][counts[kind] === 1 ? 0 : 1]; }
        });
        // The ships panel's total line and the "counts cover" note
        // are derived too — no hand-kept totals anywhere.
        var hint = document.querySelector("#place-ships .place-panel-hint");
        if (hint) {
          hint.textContent = "Every ship on this page, most sailings first — " +
            plural(sailings, " sailing", " sailings") + " and " + plural(nights, " night", " nights") +
            " on board in total. Tap one to find its sailings in the journal and the trip archives.";
        }
        var note = document.querySelector(".place-counts-note");
        if (note && latest) { note.textContent = "Counts cover page content through " + fmtISO(latest) + "."; }
      }

      // ----- Most-recent dates: a subtle line under each counter entry,
      // read from the newest dated day in the places data — "Last visited"
      // for countries and cities, "Last cruised" for ships.
      function renderLastVisited() {
        Array.prototype.forEach.call(document.querySelectorAll(".place-item"), function (btn) {
          var kind = btn.getAttribute("data-kind");
          var rec = INDEX[kind + ":" + btn.getAttribute("data-key")];
          if (!rec) { return; }
          var latest = null;
          rec.days.forEach(function (ref) { if (ref.d && (!latest || ref.d > latest)) { latest = ref.d; } });
          if (!latest) { return; }
          var host = btn.querySelector(".place-name") || btn;
          var s = document.createElement("span");
          s.className = "place-last";
          s.textContent = (kind === "ship" ? "Last cruised " : "Last visited ") + fmtISO(latest);
          host.appendChild(s);
        });
      }
      // ----- Year trackers: always exactly two lines — the current year
      // (the year of the newest dated day in the data) and the year
      // before it, never older years. Each line gives distinct travel
      // days versus the days in that year — for the current year, the
      // days elapsed so far (the day-of-year number of the newest dated
      // day); for the completed prior year, its full day count — plus
      // the unique countries, cities and ships counted from the places
      // data. A day counts when the search index carries an entry for
      // it (a journal day or a dated framework day).
      // The days are counted from the search-index entries — the same
      // data file the place counters above derive from — NOT from this
      // page's own DOM. The trackers used to count the journal entries
      // and framework days present in the document, which worked while
      // everything lived on one page; once the published site split
      // into per-trip pages, the home page held no entries at all, the
      // count found nothing, and the render silently returned, leaving
      // the last baked-in line frozen on the page (it sat at "through
      // Nov 2, 2026" while the index already ran through Nov 4). The
      // DOM days are still unioned in as a supplement, so a day that
      // is on the page but somehow missing from the index still
      // counts — but the index alone is enough, and if a loaded index
      // yields no countable day at all, that is a data-shape failure:
      // warn loudly instead of leaving a stale line looking current.
      function renderYearTrackers(data) {
        var el = document.getElementById("year-tracker");
        var elPrior = document.getElementById("year-tracker-prior");
        if (!el) { return; }
        var seen = {}, latest = null, indexDays = 0;
        function add(iso) {
          if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) { return; }
          seen[iso] = true;
          if (!latest || iso > latest) { latest = iso; }
        }
        if (data && data.entries) {
          data.entries.forEach(function (e) { if (e && e.date) { add(e.date); } });
          for (var dk in seen) { indexDays++; }
        }
        Array.prototype.forEach.call(document.querySelectorAll("[id^=\"entry-\"]"), function (n) { add(n.id.slice(6)); });
        Array.prototype.forEach.call(document.querySelectorAll(".framework-day time[datetime]"), function (n) { add(n.getAttribute("datetime")); });
        if (data && data.entries && data.entries.length && !indexDays) {
          if (window.console) { console.warn("year trackers: search index carried no countable dates — check its entry date fields"); }
        }
        if (!latest) { return; }
        function render(target, year, isCurrent) {
          if (!target) { return; }
          var count = 0, yearLatest = null, k;
          for (k in seen) {
            if (k.slice(0, 4) === year) {
              count++;
              if (!yearLatest || k > yearLatest) { yearLatest = k; }
            }
          }
          if (!count || !yearLatest) { target.hidden = true; return; }
          var y = parseInt(year, 10);
          var denom, span;
          if (isCurrent) {
            var lp = latest.split("-");
            denom = Math.round((Date.UTC(parseInt(lp[0], 10), parseInt(lp[1], 10) - 1, parseInt(lp[2], 10)) - Date.UTC(parseInt(lp[0], 10), 0, 0)) / 86400000);
            span = " days so far this year";
          } else {
            denom = Math.round((Date.UTC(y + 1, 0, 1) - Date.UTC(y, 0, 1)) / 86400000);
            span = " days in the year";
          }
          var pct = (100 * count / denom).toFixed(1);
          var uniq = { country: 0, city: 0, ship: 0 };
          for (k in INDEX) {
            var kind = k.split(":")[0];
            if (!(kind in uniq)) { continue; }
            var inYear = INDEX[k].days.some(function (ref) { return ref.d && ref.d.slice(0, 4) === year; });
            if (inYear) { uniq[kind]++; }
          }
          target.innerHTML = "<strong>" + year + ":</strong> " + count + " travel days of " + denom +
            span + " · <strong>" + pct + "%</strong> of the year traveling · " +
            plural(uniq.country, " country", " countries") + " · " +
            plural(uniq.city, " city", " cities") + " · " +
            plural(uniq.ship, " ship", " ships") + " " +
            "<span class=\"year-tracker-note\">(counted from this page, through " + fmtISO(yearLatest) + ")</span>";
        }
        var curYear = latest.slice(0, 4);
        render(el, curYear, true);
        render(elPrior, String(parseInt(curYear, 10) - 1), false);
      }

      // ----- Deriving the place records from the entries -----
      // Counting rules, reproducing the judgments the old hand-kept
      // list baked in:
      //   city    — one visit per unbroken run of consecutive days
      //             in the city on one trip (a multi-day stay counts
      //             once; turnaround days count once).
      //   country — a city's country is the last component of its
      //             location line ("Azores, Portugal" → Portugal;
      //             territories like Puerto Rico stand alone as
      //             their own country entry). Its days are the union
      //             of its cities' days, each day listed once, and
      //             one visit is one unbroken stay: city visits on
      //             the same trip whose date ranges overlap (a
      //             turnaround day shared by two ports, a day trip
      //             inside a longer stay) merge into a single visit.
      //   ship    — one visit per sailing; a sailing's first day is
      //             the entry carrying the ship's "s" marker, and
      //             nights on board come from the directory (they
      //             are a property of the sailings, not of any one
      //             day's entry).
      // Excursion cities count in their own right: an entry lists
      // every city visited that day, not just the port slept in.
      function slugifyPlaceName(s) {
        return String(s || "").replace(/&/g, "and").normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      }
      function isoDay(iso) {
        var p = String(iso || "").split("-");
        return Date.UTC(parseInt(p[0], 10), parseInt(p[1], 10) - 1, parseInt(p[2], 10));
      }
      function isNextDay(a, b) { return isoDay(b) - isoDay(a) === 86400000; }
      function sortedUniqDates(days) {
        var seen = {}, out = [];
        days.forEach(function (r) { if (!seen[r.d]) { seen[r.d] = 1; out.push(r.d); } });
        return out.sort();
      }
      // One visit per run of consecutive days within each trip.
      function countRuns(days) {
        var byV = {};
        days.forEach(function (r) { (byV[r.v] = byV[r.v] || []).push(r); });
        var n = 0;
        Object.keys(byV).forEach(function (v) {
          var ds = sortedUniqDates(byV[v]);
          ds.forEach(function (d, i) { if (i === 0 || !isNextDay(ds[i - 1], d)) { n++; } });
        });
        return n;
      }
      // A place's visit intervals: its runs of consecutive days,
      // one interval per run per trip.
      function runIntervals(days) {
        var byV = {};
        days.forEach(function (r) { (byV[r.v] = byV[r.v] || []).push(r); });
        var out = [];
        Object.keys(byV).forEach(function (v) {
          var ds = sortedUniqDates(byV[v]);
          var s = ds[0], prev = ds[0];
          for (var i = 1; i < ds.length; i++) {
            if (isNextDay(prev, ds[i])) { prev = ds[i]; }
            else { out.push({ v: v, s: s, e: prev }); s = ds[i]; prev = ds[i]; }
          }
          if (ds.length) { out.push({ v: v, s: s, e: prev }); }
        });
        return out;
      }
      function derivePlaces(data) {
        var meta = data.placeMeta || {};
        var cityMeta = meta.cities || {};
        var shipMeta = meta.ships || {};
        var cityDays = {}, shipDays = {};
        var latestEntryDate = null;
        (data.entries || []).forEach(function (e) {
          if (!e || !e.date) { return; }
          if (/^\d{4}-\d{2}-\d{2}$/.test(e.date) && (!latestEntryDate || e.date > latestEntryDate)) { latestEntryDate = e.date; }
          if (!e.tripId) { return; }
          var ref = {
            v: e.tripId === CURRENT_TRIP ? "view-main" : e.tripId,
            d: e.date,
            a: e.anchor || ""
          };
          var pre = "day-" + e.tripId + "-";
          if (ref.a.indexOf(pre) === 0) { ref.p = ref.a.slice(pre.length); }
          (e.c || []).forEach(function (k) { (cityDays[k] = cityDays[k] || []).push(ref); });
          if (e.s) { (shipDays[e.s] = shipDays[e.s] || []).push(ref); }
        });
        function byDateDesc(a, b) { return a.d < b.d ? 1 : a.d > b.d ? -1 : 0; }
        function byVisitsThenName(a, b) {
          if (b.visits !== a.visits) { return b.visits - a.visits; }
          return a.name.localeCompare(b.name);
        }
        var cities = [];
        Object.keys(cityDays).forEach(function (k) {
          var m = cityMeta[k] || {};
          var days = cityDays[k].slice().sort(byDateDesc);
          var rec = { kind: "city", key: k, name: m.name || k, visits: countRuns(days), days: days };
          if (m.loc) { rec.loc = m.loc; }
          if (m.fav) { rec.fav = true; }
          cities.push(rec);
        });
        var byCountry = {};
        cities.forEach(function (c) {
          if (!c.loc) { return; }
          var cname = c.loc.split(", ").pop();
          (byCountry[cname] = byCountry[cname] || []).push(c);
        });
        var countries = [];
        Object.keys(byCountry).forEach(function (cname) {
          var recs = byCountry[cname];
          var seen = {}, days = [];
          recs.forEach(function (c) {
            c.days.forEach(function (r) {
              var kk = r.v + "|" + r.d;
              if (!seen[kk]) { seen[kk] = 1; days.push(r); }
            });
          });
          days.sort(byDateDesc);
          var intervals = [];
          recs.forEach(function (c) { intervals = intervals.concat(runIntervals(c.days)); });
          var byV = {};
          intervals.forEach(function (iv) { (byV[iv.v] = byV[iv.v] || []).push(iv); });
          var visits = 0;
          Object.keys(byV).forEach(function (v) {
            var ivs = byV[v].sort(function (a, b) { return a.s < b.s ? -1 : a.s > b.s ? 1 : 0; });
            var ce = null;
            ivs.forEach(function (iv) {
              if (ce === null || iv.s > ce) { visits++; ce = iv.e; }
              else if (iv.e > ce) { ce = iv.e; }
            });
          });
          countries.push({ kind: "country", key: slugifyPlaceName(cname), name: cname, visits: visits, days: days });
        });
        var ships = [];
        Object.keys(shipDays).forEach(function (k) {
          var m = shipMeta[k] || {};
          var days = shipDays[k].slice().sort(byDateDesc);
          ships.push({ kind: "ship", key: k, name: m.name || k, visits: days.length, nights: m.nights || 0, days: days });
        });
        countries.sort(byVisitsThenName);
        ships.sort(byVisitsThenName);
        cities.sort(function (a, b) {
          var fa = a.fav ? 0 : 1, fb = b.fav ? 0 : 1;
          if (fa !== fb) { return fa - fb; }
          return byVisitsThenName(a, b);
        });
        var all = countries.concat(cities, ships);
        all.latestEntryDate = latestEntryDate;
        return all;
      }

      // Build the lookup tables from the derived places, render
      // everything that depends on them, then honour any place tap
      // that arrived while the file was still loading.
      function setPlaces(data) {
        if (!data || !data.entries || !data.entries.length) { return; }
        var places = derivePlaces(data);
        if (!places.length) { return; }
        places.forEach(function (p) {
          var rec = { name: p.name, visits: p.visits, days: p.days || [] };
          if (p.nights !== undefined) { rec.nights = p.nights; }
          INDEX[p.kind + ":" + p.key] = rec;
        });
        (data.trips || []).forEach(function (tr) {
          if (tr.id === CURRENT_TRIP) {
            TRIPS["view-main"] = tr.name + " — current trip";
          } else {
            TRIPS[tr.id] = tr.name;
            ARCHIVES.push(tr.id);
          }
        });
        renderPlaceLists(places);
        renderLastVisited();
        renderYearTrackers(data);
        placesReady = true;
        if (pendingSearch) {
          var ps = pendingSearch;
          pendingSearch = null;
          runSearch(ps.kind, ps.key);
        }
      }
      // Same fetch pattern as the journal search: the file sits
      // beside the site root's assets folder — root pages fetch it
      // directly, pages under past/ step up one level, and if the
      // expected path misses the other is tried before giving up.
      // If both miss, the copy of the same index embedded in the
      // page (the journal search's own fallback) is derived from
      // instead, so the counters still render offline or on a
      // failed fetch.
      (function loadPlaces() {
        function embeddedIndex() {
          var el = document.getElementById("search-index-data");
          if (!el) { return null; }
          try { return JSON.parse(el.textContent || ""); } catch (e) { return null; }
        }
        if (!window.fetch) {
          var emb = embeddedIndex();
          if (emb) { setPlaces(emb); }
          return;
        }
        var inPast = window.location.pathname.indexOf("/past/") !== -1;
        var primaryPath = (inPast ? "../assets/search-index.json" : "assets/search-index.json") + '?v=' + (window.__SITE_VERSION__ || '');
        var secondaryPath = (inPast ? "assets/search-index.json" : "../assets/search-index.json") + '?v=' + (window.__SITE_VERSION__ || '');
        // The fetched file should be the full index object
        // ({ trips, years, placeMeta, entries }). A publish step once
        // shipped only the bare entries array, which silently zeroed
        // the counters: the journal search survived because it accepts
        // either shape, the counters did not. Normalise whatever
        // arrives — a bare array is wrapped, and a missing placeMeta
        // (or trips list) is borrowed from the copy of the index
        // embedded in the page — so a format drift in the generated
        // file can never blank the counters again.
        function normalizePlaces(data) {
          if (!data) { return null; }
          if (Object.prototype.toString.call(data) === "[object Array]") { data = { entries: data }; }
          if (!data.entries || !data.entries.length) { return null; }
          if (!data.placeMeta || !data.trips) {
            var emb = embeddedIndex();
            if (emb) {
              if (!data.placeMeta && emb.placeMeta) { data.placeMeta = emb.placeMeta; }
              if (!data.trips && emb.trips) { data.trips = emb.trips; }
            }
          }
          return data.placeMeta ? data : null;
        }
        function tryPath(path) {
          return fetch(path).then(function (r) {
            if (!r.ok) { throw new Error("places unavailable"); }
            return r.json();
          }).then(function (data) {
            var norm = normalizePlaces(data);
            if (!norm) { throw new Error("places malformed"); }
            return norm;
          });
        }
        tryPath(primaryPath).then(setPlaces).catch(function () {
          tryPath(secondaryPath).then(setPlaces).catch(function () {
            var emb2 = embeddedIndex();
            if (emb2) { setPlaces(emb2); }
          });
        });
      })();

      var panel = document.getElementById("place-results");
      var titleEl = document.getElementById("place-results-title");
      var subEl = document.getElementById("place-results-sub");
      var listEl = document.getElementById("place-results-list");
      var clearBtn = document.getElementById("place-results-clear");
      var q = document.getElementById("filter-q");
      // The main view keeps its single-page name (view-main) inside this
      // artifact, but the published site split it into per-page views
      // (view-today on the front page, one archive view per trip page).
      // Resolve whichever container this page actually has — and never
      // let a missing container disable the counters' clicks: the search
      // itself only needs the results panel. (Requiring view-main here
      // is what silently killed every ship/city/country tap after the
      // page split: the counts rendered, the click handler never bound.)
      var main = document.getElementById("view-main") || document.getElementById("view-today") || document.querySelector(".view");
      if (!panel || !titleEl || !listEl || !clearBtn) { return; }
      var programmatic = false;

      function findDay(ref) {
        if (ref.hero) { return { el: document.getElementById("hero"), date: "Mon · Oct 26, 2026", title: "La Spezia, Italy — Cinque Terre by train" }; }
        var view = document.getElementById(ref.v);
        if (!view) { return null; }
        // The entry's own anchor is the direct route: journal days
        // carry "entry-<date>" ids, framework days carry their
        // "day-<trip>-<port>" id — both are the anchor the search
        // index records for the day.
        if (ref.a) {
          var byAnchor = view.querySelector("#" + ref.a);
          if (byAnchor) {
            var at = byAnchor.querySelector("time"), ah = byAnchor.querySelector("h3");
            return { el: byAnchor, date: at ? at.textContent : ref.d, title: ah ? ah.textContent : "" };
          }
        }
        var entry = view.querySelector("#entry-" + ref.d);
        if (entry) {
          var t = entry.querySelector("time"), h = entry.querySelector("h3");
          return { el: entry, date: t ? t.textContent : ref.d, title: h ? h.textContent : "" };
        }
        if (ref.p) {
          var pd = view.querySelector(".framework-day[data-port=\"" + ref.p + "\"]");
          if (pd) {
            var pt = pd.querySelector("time"), ph = pd.querySelector("h3");
            return { el: pd, date: pt ? pt.textContent : ref.p, title: ph ? ph.textContent : "" };
          }
        }
        var days = view.querySelectorAll(".framework-day");
        for (var i = 0; i < days.length; i++) {
          var tm = days[i].querySelector("time");
          if (tm && tm.getAttribute("datetime") === ref.d) {
            var hh = days[i].querySelector("h3");
            return { el: days[i], date: tm.textContent, title: hh ? hh.textContent : "" };
          }
        }
        return null;
      }
      function showView(view) {
        ARCHIVES.forEach(function (id) {
          var v = document.getElementById(id);
          if (v) { v.hidden = v !== view; }
        });
        if (main) { main.hidden = view !== main; }
        document.title = (view && view !== main)
          ? view.getAttribute("data-title") + " · Where's Patrick?"
          : "Where's Patrick?";
      }
      // Readable label for a day that lives on another published page
      // (its real date/title text sits in that page's DOM, out of
      // findDay's reach): format the ISO date the index carries.
      var MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      function fmtDay(iso) {
        var p = String(iso || "").split("-");
        if (p.length < 3) { return String(iso || ""); }
        var m = MONTHS_SHORT[parseInt(p[1], 10) - 1];
        return m ? m + " " + parseInt(p[2], 10) + ", " + p[0] : String(iso);
      }
      // On the published multi-page site a counted day usually lives on
      // another page entirely — its trip's own past/<slug>.html, or the
      // current trip's day-by-day page for view-main days — so findDay
      // comes back empty-handed there. Build that page's URL instead:
      // the current trip's page is read from the hero's journal link,
      // which the publish step rewrites to the real file; trip archives
      // are past/<slug>.html (a bare <slug>.html from inside past/).
      function pageUrlFor(ref) {
        if (!ref || ref.hero || !ref.v) { return ""; }
        var inPast = window.location.pathname.indexOf("/past/") !== -1;
        var anchor = ref.a || (ref.d ? "entry-" + ref.d : "");
        if (ref.v === "view-main") {
          if (!ref.d) { return ""; }
          var link = document.querySelector(".hero-journal-link");
          var href = link ? link.getAttribute("href") || "" : "";
          if (href.indexOf(".html") === -1) { return ""; }
          return href.split("#")[0] + "#" + anchor;
        }
        return (inPast ? "" : "past/") + ref.v + ".html" + (anchor ? "#" + anchor : "");
      }
      function goToDay(ref) {
        var found = findDay(ref);
        if (!found || !found.el) {
          var url = pageUrlFor(ref);
          if (url) { window.location.href = url; }
          return;
        }
        var view = ref.hero ? main : (found.el.closest ? found.el.closest(".view") : null);
        if (view) { showView(view); }
        try { history.pushState(null, "", ref.hero ? "#hero" : (ref.v === "view-main" ? "#entry-" + ref.d : "#" + ref.v)); } catch (e) { /* in-page only */ }
        setTimeout(function () {
          found.el.scrollIntoView({ behavior: "smooth", block: "start" });
          found.el.classList.add("flash");
          setTimeout(function () { found.el.classList.remove("flash"); }, 2400);
        }, 60);
      }
      function clearSearch() {
        panel.hidden = true;
        if (q && q.value) {
          programmatic = true;
          q.value = "";
          q.dispatchEvent(new Event("input", { bubbles: true }));
          programmatic = false;
        }
      }
      function runSearch(kind, key) {
        var rec = INDEX[kind + ":" + key];
        if (!rec) { return; }
        if (kind === "ship") {
          titleEl.textContent = "Sailings on " + rec.name;
          subEl.textContent = rec.visits + (rec.visits === 1 ? " sailing" : " sailings") + " · " + rec.nights + (rec.nights === 1 ? " night" : " nights") + " on board. Tap a sailing to jump to its first day.";
        } else {
          titleEl.textContent = "Days in " + rec.name;
          subEl.textContent = rec.days.length + (rec.days.length === 1 ? " day" : " days") + " on this page · " + rec.visits + (rec.visits === 1 ? " visit" : " visits") + " counted. Tap a day to jump to it.";
        }
        listEl.innerHTML = "";
        rec.days.forEach(function (ref) {
          var found = findDay(ref);
          if (!found && ref.d && !ref.date) { found = { date: fmtDay(ref.d), title: ref.title || rec.name }; }
          var li = document.createElement("li");
          var b = document.createElement("button");
          b.type = "button";
          b.className = "place-day";
          var dEl = document.createElement("span"); dEl.className = "place-day-date"; dEl.textContent = found ? found.date : (ref.date || ref.d);
          var tEl = document.createElement("span"); tEl.className = "place-day-title"; tEl.textContent = found ? found.title : (ref.title || rec.name);
          var trEl = document.createElement("span"); trEl.className = "place-day-trip"; trEl.textContent = TRIPS[ref.v] || "";
          b.appendChild(dEl); b.appendChild(tEl); b.appendChild(trEl);
          b.addEventListener("click", function () { goToDay(ref); });
          li.appendChild(b);
          listEl.appendChild(li);
        });
        panel.hidden = false;
        // Run the page's own journal search too, then align the main
        // journal list with this place's counted days (its text search
        // alone would miss days that never name the place in prose).
        if (q) {
          programmatic = true;
          q.value = rec.name;
          q.dispatchEvent(new Event("input", { bubbles: true }));
          programmatic = false;
          var keep = {};
          rec.days.forEach(function (r) { if (r.v === "view-main" && !r.hero) { keep[r.d] = true; } });
          if (main) {
            Array.prototype.forEach.call(main.querySelectorAll(".history-list .memory"), function (e) {
              e.style.display = keep[e.getAttribute("data-date")] ? "" : "none";
            });
          }
          var empty = document.getElementById("filter-empty");
          if (empty) { empty.hidden = Object.keys(keep).length !== 0; }
        }
        panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
      document.addEventListener("click", function (e) {
        var b = e.target && e.target.closest ? e.target.closest(".place-item") : null;
        if (!b) { return; }
        if (!placesReady) { pendingSearch = { kind: b.getAttribute("data-kind"), key: b.getAttribute("data-key") }; return; }
        runSearch(b.getAttribute("data-kind"), b.getAttribute("data-key"));
      });
      clearBtn.addEventListener("click", clearSearch);
      if (q) {
        q.addEventListener("input", function () {
          if (!programmatic && !panel.hidden) { panel.hidden = true; }
        });
      }
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !panel.hidden) { clearSearch(); }
      });
    })();

  // ----- Multi-page router: Today / Next / Future / Past, plus the current
  // trip's journal page (past/venice-transatlantic). The main view's blocks
  // carry data-page groups; archive trip views keep their own hash routing
  // above. This runs last so it settles state after the other routers.
  (function () {
    var main = document.getElementById("view-main");
    if (!main) { return; }
    var PAGES = { "": "today", today: "today", next: "next", future: "future", past: "past", "venice-transatlantic": "history" };
    var TITLES = { today: "Where's Patrick?", next: "Next · Where's Patrick?", future: "Future · Where's Patrick?", past: "Past trips · Where's Patrick?", history: "Venice & Transatlantic · Where's Patrick?" };
    var groups = main.querySelectorAll("[data-page]");
    var navLinks = document.querySelectorAll(".nav-links a[data-nav]");
    var toggle = document.getElementById("nav-toggle");
    var linksBox = document.getElementById("nav-links");
    function activate(page) {
      // A block may belong to more than one page (space-separated
      // data-page). The journal is split into flat blocks: its search
      // filters belong to the home page (today) only — the current
      // trip's past page (history) is laid out exactly like the older
      // trips' pages (back link, one header, map, counters, entries)
      // with no search of its own; the entries belong to history only,
      // so Today shows the search without the full journal.
      groups.forEach(function (g) { g.hidden = g.getAttribute("data-page").split(/\s+/).indexOf(page) === -1; });
      var navKey = page === "history" ? "past" : page;
      navLinks.forEach(function (a) {
        if (a.getAttribute("data-nav") === navKey) { a.setAttribute("aria-current", "page"); }
        else { a.removeAttribute("aria-current"); }
      });
      document.title = TITLES[page] || "Where's Patrick?";
      try { window.dispatchEvent(new Event("resize")); } catch (e) { /* Leaflet re-measures on window resize */ }
    }
    function isArchiveSlug(slug) { return !!document.querySelector(".archive-view[id='" + slug + "']"); }
    function route() {
      var slug = window.location.hash.replace(/^#/, "");
      if (slug.indexOf("entry-") === 0) { return; }
      if (Object.prototype.hasOwnProperty.call(PAGES, slug)) {
        if (main.hidden) { main.hidden = false; }
        activate(PAGES[slug]);
        window.scrollTo(0, 0);
      } else if (isArchiveSlug(slug)) {
        navLinks.forEach(function (a) {
          if (a.getAttribute("data-nav") === "past") { a.setAttribute("aria-current", "page"); }
          else { a.removeAttribute("aria-current"); }
        });
      }
      if (linksBox) { linksBox.classList.remove("open"); }
      if (toggle) { toggle.setAttribute("aria-expanded", "false"); }
    }
    window.addEventListener("hashchange", route);
    route();
    // The menu toggle itself is bound by the button's inline onclick
    // attribute in index.html (it must work even when this file is
    // delayed or fails on a slow connection). Only bind here as a
    // fallback if the inline nav script did not run — binding both
    // would make a single tap toggle the menu open and closed again.
    if (!window.__navToggleBound && toggle && linksBox) {
      toggle.addEventListener("click", function () {
        var open = linksBox.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      linksBox.addEventListener("click", function (e) {
        if (e.target && e.target.closest && e.target.closest("a")) {
          linksBox.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }
    // Jump-to-day flows (day links, place search, throwback) flash the target
    // entry; if it lives in a hidden page group inside the main view, reveal
    // that group and scroll to it once visible.
    if (window.MutationObserver) {
      var mo = new MutationObserver(function (records) {
        records.forEach(function (r) {
          var el = r.target;
          if (!el.classList || !el.classList.contains("flash")) { return; }
          if (!main.contains(el) || main.hidden) { return; }
          var grp = el.closest ? el.closest("[data-page]") : null;
          if (grp && grp.hidden) {
            var pages = grp.getAttribute("data-page").split(/\s+/);
            activate(pages.indexOf("history") !== -1 ? "history" : pages[0]);
            setTimeout(function () { el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 60);
          }
        });
      });
      mo.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["class"] });
    }
  })();

} catch (e) { if (window.console) console.warn('page script:', e); }