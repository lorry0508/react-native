!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=4)}([function(n,t,e){"use strict";(function(n,r){var o,c=e(1);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:r;var u=Object(c.a)(o);t.a=u}).call(this,e(2),e(3)(n))},function(n,t,e){"use strict";function r(n){var t,e=n.Symbol;return"function"==typeof e?e.observable?t=e.observable:(t=e("observable"),e.observable=t):t="@@observable",t}e.d(t,"a",(function(){return r}))},function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t){n.exports=function(n){if(!n.webpackPolyfill){var t=Object.create(n);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(n,t,e){"use strict";e.r(t);var r=e(0),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},c={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function u(n){if("object"!=typeof n||null===n)return!1;for(var t=n;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(n)===t}function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);return Object.getOwnPropertySymbols&&e.push.apply(e,Object.getOwnPropertySymbols(n)),t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(e,!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(e).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return 0===t.length?function(n){return n}:1===t.length?t[0]:t.reduce((function(n,t){return function(){return n(t.apply(void 0,arguments))}}))}var s=function(n){return"@@redux-saga/"+n},d=s("CANCEL_PROMISE"),p=s("CHANNEL_END"),v=s("IO"),h=s("MATCH"),y=s("MULTICAST"),g=s("SAGA_ACTION"),b=s("SELF_CANCELLATION"),m=s("TASK"),E=s("TASK_CANCEL"),w=s("TERMINATE"),O=s("LOCATION");function S(){return(S=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var j=function(n){return null==n},x=function(n){return null!=n},T=function(n){return"function"==typeof n},A=function(n){return"string"==typeof n},k=Array.isArray,P=function(n){return n&&T(n.then)},C=function(n){return n&&T(n.next)&&T(n.throw)},N=function n(t){return t&&(A(t)||R(t)||T(t)||k(t)&&t.every(n))},L=function(n){return n&&T(n.take)&&T(n.close)},I=function(n){return T(n)&&n.hasOwnProperty("toString")},R=function(n){return Boolean(n)&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype};var M=function(n){return function(){return n}}(!0),_=function(){};var D=function(n){return n};"function"==typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var K=function(n,t){S(n,t),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach((function(e){n[e]=t[e]}))};function H(n,t){var e=n.indexOf(t);e>=0&&n.splice(e,1)}function U(n){var t=!1;return function(){t||(t=!0,n())}}var q=function(n){throw n},B=function(n){return{value:n,done:!0}};function F(n,t,e){void 0===t&&(t=q),void 0===e&&(e="iterator");var r={meta:{name:e},next:n,throw:t,return:B,isSagaIterator:!0};return"undefined"!=typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r}function Y(n,t){var e=t.sagaStack;console.error(n),console.error(e)}var z=function(n){return Array.apply(null,new Array(n))},G=function(n){return function(t){return n(Object.defineProperty(t,g,{value:!0}))}},W=function(n){return n===w},X=function(n){return n===E},J=function(n){return W(n)||X(n)};function Q(n,t){var e=Object.keys(n),r=e.length;var o,c=0,u=k(n)?z(r):{},i={};return e.forEach((function(n){var e=function(e,i){o||(i||J(e)?(t.cancel(),t(e,i)):(u[n]=e,++c===r&&(o=!0,t(u))))};e.cancel=_,i[n]=e})),t.cancel=function(){o||(o=!0,e.forEach((function(n){return i[n].cancel()})))},i}function V(n){return{name:n.name||"anonymous",location:Z(n)}}function Z(n){return n[O]}function $(n,t){void 0===n&&(n=10);var e=new Array(n),r=0,o=0,c=0,u=function(t){e[o]=t,o=(o+1)%n,r++},i=function(){if(0!=r){var t=e[c];return e[c]=null,r--,c=(c+1)%n,t}},a=function(){for(var n=[];r;)n.push(i());return n};return{isEmpty:function(){return 0==r},put:function(i){var f;if(r<n)u(i);else switch(t){case 1:throw new Error("Channel's Buffer overflow!");case 3:e[o]=i,c=o=(o+1)%n;break;case 4:f=2*n,e=a(),r=e.length,o=e.length,c=0,e.length=f,n=f,u(i)}},take:i,flush:a}}var nn=function(n){return $(n,4)},tn=function(n,t){var e;return(e={})[v]=!0,e.combinator=!1,e.type=n,e.payload=t,e};function en(n,t){return void 0===n&&(n="*"),N(n)?tn("TAKE",{pattern:n}):L(e=n)&&e[y]&&x(t)&&N(t)?tn("TAKE",{channel:n,pattern:t}):L(n)?tn("TAKE",{channel:n}):void 0;var e}function rn(n,t){return j(t)&&(t=n,n=void 0),tn("PUT",{channel:n,action:t})}function on(n,t){var e,r=null;return T(n)?e=n:(k(n)?(r=n[0],e=n[1]):(r=n.context,e=n.fn),r&&A(e)&&T(r[e])&&(e=r[e])),{context:r,fn:e,args:t}}function cn(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return tn("CALL",on(n,e))}function un(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return tn("FORK",on(n,e))}function an(){var n={};return n.promise=new Promise((function(t,e){n.resolve=t,n.reject=e})),n}var fn=an,ln=[],sn=0;function dn(n){try{hn(),n()}finally{yn()}}function pn(n){ln.push(n),sn||(hn(),gn())}function vn(n){try{return hn(),n()}finally{gn()}}function hn(){sn++}function yn(){sn--}function gn(){var n;for(yn();!sn&&void 0!==(n=ln.shift());)dn(n)}var bn=function(n){return function(t){return n.some((function(n){return Sn(n)(t)}))}},mn=function(n){return function(t){return n(t)}},En=function(n){return function(t){return t.type===String(n)}},wn=function(n){return function(t){return t.type===n}},On=function(){return M};function Sn(n){var t="*"===n?On:A(n)?En:k(n)?bn:I(n)?En:T(n)?mn:R(n)?wn:null;if(null===t)throw new Error("invalid pattern: "+n);return t(n)}var jn={type:p},xn=function(n){return n&&n.type===p};function Tn(n){void 0===n&&(n=nn());var t=!1,e=[];return{take:function(r){t&&n.isEmpty()?r(jn):n.isEmpty()?(e.push(r),r.cancel=function(){H(e,r)}):r(n.take())},put:function(r){if(!t){if(0===e.length)return n.put(r);e.shift()(r)}},flush:function(e){t&&n.isEmpty()?e(jn):e(n.flush())},close:function(){if(!t){t=!0;var n=e;e=[];for(var r=0,o=n.length;r<o;r++){(0,n[r])(jn)}}}}}function An(){var n,t,e,r,o,c,u=(t=!1,r=e=[],o=function(){r===e&&(r=e.slice())},c=function(){t=!0;var n=e=r;r=[],n.forEach((function(n){n(jn)}))},(n={})[y]=!0,n.put=function(n){if(!t)if(xn(n))c();else for(var o=e=r,u=0,i=o.length;u<i;u++){var a=o[u];a[h](n)&&(a.cancel(),a(n))}},n.take=function(n,e){void 0===e&&(e=On),t?n(jn):(n[h]=e,o(),r.push(n),n.cancel=U((function(){o(),H(r,n)})))},n.close=c,n),i=u.put;return u.put=function(n){n[g]?i(n):pn((function(){i(n)}))},u}function kn(n,t){var e=n[d];T(e)&&(t.cancel=e),n.then(t,(function(n){t(n,!0)}))}var Pn,Cn=0,Nn=function(){return++Cn};function Ln(n){n.isRunning()&&n.cancel()}var In=((Pn={}).TAKE=function(n,t,e){var r=t.channel,o=void 0===r?n.channel:r,c=t.pattern,u=t.maybe,i=function(n){n instanceof Error?e(n,!0):!xn(n)||u?e(n):e(w)};try{o.take(i,x(c)?Sn(c):null)}catch(n){return void e(n,!0)}e.cancel=i.cancel},Pn.PUT=function(n,t,e){var r=t.channel,o=t.action,c=t.resolve;pn((function(){var t;try{t=(r?r.put:n.dispatch)(o)}catch(n){return void e(n,!0)}c&&P(t)?kn(t,e):e(t)}))},Pn.ALL=function(n,t,e,r){var o=r.digestEffect,c=Cn,u=Object.keys(t);if(0!==u.length){var i=Q(t,e);u.forEach((function(n){o(t[n],c,i[n],n)}))}else e(k(t)?[]:{})},Pn.RACE=function(n,t,e,r){var o=r.digestEffect,c=Cn,u=Object.keys(t),i=k(t)?z(u.length):{},a={},f=!1;u.forEach((function(n){var t=function(t,r){f||(r||J(t)?(e.cancel(),e(t,r)):(e.cancel(),f=!0,i[n]=t,e(i)))};t.cancel=_,a[n]=t})),e.cancel=function(){f||(f=!0,u.forEach((function(n){return a[n].cancel()})))},u.forEach((function(n){f||o(t[n],c,a[n],n)}))},Pn.CALL=function(n,t,e,r){var o=t.context,c=t.fn,u=t.args,i=r.task;try{var a=c.apply(o,u);if(P(a))return void kn(a,e);if(C(a))return void qn(n,a,i.context,Cn,V(c),!1,e);e(a)}catch(n){e(n,!0)}},Pn.CPS=function(n,t,e){var r=t.context,o=t.fn,c=t.args;try{var u=function(n,t){j(n)?e(t):e(n,!0)};o.apply(r,c.concat(u)),u.cancel&&(e.cancel=u.cancel)}catch(n){e(n,!0)}},Pn.FORK=function(n,t,e,r){var o=t.context,c=t.fn,u=t.args,i=t.detached,a=r.task,f=function(n){var t=n.context,e=n.fn,r=n.args;try{var o=e.apply(t,r);if(C(o))return o;var c=!1;return F((function(n){return c?{value:n,done:!0}:(c=!0,{value:o,done:!P(o)})}))}catch(n){return F((function(){throw n}))}}({context:o,fn:c,args:u}),l=function(n,t){return n.isSagaIterator?{name:n.meta.name}:V(t)}(f,c);vn((function(){var t=qn(n,f,a.context,Cn,l,i,void 0);i?e(t):t.isRunning()?(a.queue.addTask(t),e(t)):t.isAborted()?a.queue.abort(t.error()):e(t)}))},Pn.JOIN=function(n,t,e,r){var o=r.task,c=function(n,t){if(n.isRunning()){var e={task:o,cb:t};t.cancel=function(){n.isRunning()&&H(n.joiners,e)},n.joiners.push(e)}else n.isAborted()?t(n.error(),!0):t(n.result())};if(k(t)){if(0===t.length)return void e([]);var u=Q(t,e);t.forEach((function(n,t){c(n,u[t])}))}else c(t,e)},Pn.CANCEL=function(n,t,e,r){var o=r.task;t===b?Ln(o):k(t)?t.forEach(Ln):Ln(t),e()},Pn.SELECT=function(n,t,e){var r=t.selector,o=t.args;try{e(r.apply(void 0,[n.getState()].concat(o)))}catch(n){e(n,!0)}},Pn.ACTION_CHANNEL=function(n,t,e){var r=t.pattern,o=Tn(t.buffer),c=Sn(r),u=function t(e){xn(e)||n.channel.take(t,c),o.put(e)},i=o.close;o.close=function(){u.cancel(),i()},n.channel.take(u,c),e(o)},Pn.CANCELLED=function(n,t,e,r){e(r.task.isCancelled())},Pn.FLUSH=function(n,t,e){t.flush(e)},Pn.GET_CONTEXT=function(n,t,e,r){e(r.task.context[t])},Pn.SET_CONTEXT=function(n,t,e,r){var o=r.task;K(o.context,t),e()},Pn);function Rn(n,t){return n+"?"+t}function Mn(n){var t=n.name,e=n.location;return e?t+"  "+Rn(e.fileName,e.lineNumber):t}var _n=null,Dn=[],Kn=function(){_n=null,Dn.length=0},Hn=function(){var n,t,e,r,o,c,u,i=Dn[0],a=Dn.slice(1),f=i.crashedEffect?(n=i.crashedEffect,(t=Z(n))?t.code+"  "+Rn(t.fileName,t.lineNumber):""):null;return["The above error occurred in task "+Mn(i.meta)+(f?" \n when executing effect "+f:"")].concat(a.map((function(n){return"    created by "+Mn(n.meta)})),[(e=Dn,r=function(n){return n.cancelledTasks},o=e,u=(c=[]).concat.apply(c,o.map(r)),u.length?["Tasks cancelled due to error:"].concat(u).join("\n"):"")]).join("\n")};function Un(n,t,e,r,o,c,u){var i;void 0===u&&(u=_);var a,f,l=0,s=null,d=[],p=Object.create(e),v=function(n,t,e){var r,o=[],c=!1;function u(n){t(),a(),e(n,!0)}function i(t){o.push(t),t.cont=function(i,a){c||(H(o,t),t.cont=_,a?u(i):(t===n&&(r=i),o.length||(c=!0,e(r))))}}function a(){c||(c=!0,o.forEach((function(n){n.cont=_,n.cancel()})),o=[])}return i(n),{addTask:i,cancelAll:a,abort:u,getTasks:function(){return o}}}(t,(function(){d.push.apply(d,v.getTasks().map((function(n){return n.meta.name})))}),h);function h(t,e){if(e){if(l=2,(c={meta:o,cancelledTasks:d}).crashedEffect=_n,Dn.push(c),y.isRoot){var r=Hn();Kn(),n.onError(t,{sagaStack:r})}f=t,s&&s.reject(t)}else t===E?l=1:1!==l&&(l=3),a=t,s&&s.resolve(t);var c;y.cont(t,e),y.joiners.forEach((function(n){n.cb(t,e)})),y.joiners=null}var y=((i={})[m]=!0,i.id=r,i.meta=o,i.isRoot=c,i.context=p,i.joiners=[],i.queue=v,i.cancel=function(){0===l&&(l=1,v.cancelAll(),h(E,!1))},i.cont=u,i.end=h,i.setContext=function(n){K(p,n)},i.toPromise=function(){return s||(s=fn(),2===l?s.reject(f):0!==l&&s.resolve(a)),s.promise},i.isRunning=function(){return 0===l},i.isCancelled=function(){return 1===l||0===l&&1===t.status},i.isAborted=function(){return 2===l},i.result=function(){return a},i.error=function(){return f},i);return y}function qn(n,t,e,r,o,c,u){var i=n.finalizeRunEffect((function(t,e,r){if(P(t))kn(t,r);else if(C(t))qn(n,t,f.context,e,o,!1,r);else if(t&&t[v]){(0,In[t.type])(n,t.payload,r,l)}else r(t)}));s.cancel=_;var a={meta:o,cancel:function(){0===a.status&&(a.status=1,s(E))},status:0},f=Un(n,a,e,r,o,c,u),l={task:f,digestEffect:d};return u&&(u.cancel=f.cancel),s(),f;function s(n,e){try{var o;e?(o=t.throw(n),Kn()):X(n)?(a.status=1,s.cancel(),o=T(t.return)?t.return(E):{done:!0,value:E}):o=W(n)?T(t.return)?t.return():{done:!0}:t.next(n),o.done?(1!==a.status&&(a.status=3),a.cont(o.value)):d(o.value,r,s)}catch(n){if(1===a.status)throw n;a.status=2,a.cont(n,!0)}}function d(t,e,r,o){void 0===o&&(o="");var c,u=Nn();function a(e,o){c||(c=!0,r.cancel=_,n.sagaMonitor&&(o?n.sagaMonitor.effectRejected(u,e):n.sagaMonitor.effectResolved(u,e)),o&&function(n){_n=n}(t),r(e,o))}n.sagaMonitor&&n.sagaMonitor.effectTriggered({effectId:u,parentEffectId:e,label:o,effect:t}),a.cancel=_,r.cancel=function(){c||(c=!0,a.cancel(),a.cancel=_,n.sagaMonitor&&n.sagaMonitor.effectCancelled(u))},i(t,u,a)}}function Bn(n,t){var e=n.channel,r=void 0===e?An():e,o=n.dispatch,c=n.getState,u=n.context,i=void 0===u?{}:u,a=n.sagaMonitor,f=n.effectMiddlewares,s=n.onError,d=void 0===s?Y:s;for(var p=arguments.length,v=new Array(p>2?p-2:0),h=2;h<p;h++)v[h-2]=arguments[h];var y=t.apply(void 0,v);var g,b=Nn();if(a&&(a.rootSagaStarted=a.rootSagaStarted||_,a.effectTriggered=a.effectTriggered||_,a.effectResolved=a.effectResolved||_,a.effectRejected=a.effectRejected||_,a.effectCancelled=a.effectCancelled||_,a.actionDispatched=a.actionDispatched||_,a.rootSagaStarted({effectId:b,saga:t,args:v})),f){var m=l.apply(void 0,f);g=function(n){return function(t,e,r){return m((function(t){return n(t,e,r)}))(t)}}}else g=D;var E={channel:r,dispatch:G(o),getState:c,sagaMonitor:a,onError:d,finalizeRunEffect:g};return vn((function(){var n=qn(E,y,i,b,V(t),!0,void 0);return a&&a.effectResolved(b,n),n}))}var Fn=function({state:n,dispatch:t}){const e=document.createElement("div"),r=document.createElement("button"),o=document.createElement("span");n.username?(r.innerHTML="登出",r.addEventListener("click",(function(){t({type:"logout"})}))):(r.innerHTML="登录",r.addEventListener("click",(function(){t({type:"ajaxLogin"})}))),o.innerHTML="用户名："+n.username,e.appendChild(r),e.appendChild(o),document.getElementById("root").innerHTML="",document.getElementById("root").appendChild(e)};var Yn=function(n={username:""},t){switch(t.type){case"login":return{username:t.user.username};case"logout":return{username:""};default:return n}},zn=function(n){return{done:!0,value:n}},Gn={};function Wn(n){return L(n)?"channel":I(n)?String(n):T(n)?n.name:String(n)}function Xn(n,t,e){var r,o,c,u=t;function i(t,e){if(u===Gn)return zn(t);if(e&&!o)throw u=Gn,e;r&&r(t);var i=e?n[o](e):n[u]();return u=i.nextState,c=i.effect,r=i.stateUpdater,o=i.errorState,u===Gn?zn(t):c}return F(i,(function(n){return i(null,n)}),e)}function Jn(n,t){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];var c,u={done:!1,value:en(n)},i=function(n){return{done:!1,value:un.apply(void 0,[t].concat(r,[n]))}},a=function(n){return c=n};return Xn({q1:function(){return{nextState:"q2",effect:u,stateUpdater:a}},q2:function(){return{nextState:"q1",effect:i(c)}}},"q1","takeEvery("+Wn(n)+", "+t.name+")")}function Qn(n,t,e){return new Promise(n=>{setTimeout(()=>{n(e)},1e3)})}function*Vn(){const n=yield cn(Qn,"POST","/api/login",{username:"李四"});yield rn({type:"login",user:n})}var Zn=function*(){yield function(n,t){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return un.apply(void 0,[Jn,n,t].concat(r))}("ajaxLogin",Vn)};const $n=function(n){var t,e=void 0===n?{}:n,r=e.context,o=void 0===r?{}:r,c=e.channel,u=void 0===c?An():c,i=e.sagaMonitor,a=function(n,t){if(null==n)return{};var e,r,o={},c=Object.keys(n);for(r=0;r<c.length;r++)e=c[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(e,["context","channel","sagaMonitor"]);function f(n){var e=n.getState,r=n.dispatch;return t=Bn.bind(null,S({},a,{context:o,channel:u,dispatch:r,getState:e,sagaMonitor:i})),function(n){return function(t){i&&i.actionDispatched&&i.actionDispatched(t);var e=n(t);return u.put(t),e}}}return f.run=function(){return t.apply(void 0,arguments)},f.setContext=function(n){K(o,n)},f}(),nt=function n(t,e,o){var i;if("function"==typeof e&&"function"==typeof o||"function"==typeof o&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof e&&void 0===o&&(o=e,e=void 0),void 0!==o){if("function"!=typeof o)throw new Error("Expected the enhancer to be a function.");return o(n)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var a=t,f=e,l=[],s=l,d=!1;function p(){s===l&&(s=l.slice())}function v(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return f}function h(n){if("function"!=typeof n)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),s.push(n),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var e=s.indexOf(n);s.splice(e,1),l=null}}}function y(n){if(!u(n))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===n.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,f=a(f,n)}finally{d=!1}for(var t=l=s,e=0;e<t.length;e++){(0,t[e])()}return n}function g(n){if("function"!=typeof n)throw new Error("Expected the nextReducer to be a function.");a=n,y({type:c.REPLACE})}function b(){var n,t=h;return(n={subscribe:function(n){if("object"!=typeof n||null===n)throw new TypeError("Expected the observer to be an object.");function e(){n.next&&n.next(v())}return e(),{unsubscribe:t(e)}}})[r.a]=function(){return this},n}return y({type:c.INIT}),(i={dispatch:y,subscribe:h,getState:v,replaceReducer:g})[r.a]=b,i}(Yn,function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return function(n){return function(){var e=n.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:e.getState,dispatch:function(){return r.apply(void 0,arguments)}},c=t.map((function(n){return n(o)}));return f({},e,{dispatch:r=l.apply(void 0,c)(e.dispatch)})}}}($n));nt.getState();$n.run(Zn),nt.subscribe(()=>{Fn({state:nt.getState(),dispatch:nt.dispatch})}),Fn({state:nt.getState(),dispatch:nt.dispatch})}]);