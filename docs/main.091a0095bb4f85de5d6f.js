!function(e){var t={};function n(c){if(t[c])return t[c].exports;var l=t[c]={i:c,l:!1,exports:{}};return e[c].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(c,l,function(t){return e[t]}.bind(null,l));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://www.clicli.me",n(n.s=10)}([function(e,t,n){"use strict";function c(e,t){let n=t||{},c=n.key||null,r=n.ref||null,i=[];for(let e=2;e<arguments.length;e++){let t=arguments[e];null==t||!0===t||!1===t||("string"==typeof t||"number"==typeof t?i.push(l(t)):i.push(t))}return i.length&&(n.children=1===i.length?i[0]:i),delete n.key,delete n.ref,{type:e,props:n,key:c,ref:r}}function l(e){return{type:"text",props:{nodeValue:e}}}function r(e,t,n){for(let c in{...t,...n}){let l=t[c],r=n[c];if(l==r||"children"===c);else if("style"===c)for(const t in{...l,...r})l&&r&&l[t]===r[t]||(e[c][t]=r&&r[t]||"");else"o"===c[0]&&"n"===c[1]?(c=c.slice(2).toLowerCase(),l&&e.removeEventListener(c,l),e.addEventListener(c,r)):c in e&&!(e instanceof SVGElement)&&"src"!==e?e[c]=null==r?"":r:null==r||!1===r?e.removeAttribute(c):e.setAttribute(c,r)}}let i=0;function o(e){return u(null,e)}function u(e,t){const n=b(i++),c=ee(),l=t=>{let l=e?e(n[0],t):K(t)?t(n[0]):t;n[0]=l,W(c,!0)};return n.length?[n[0],l]:(n[0]=t,[t,l])}function s(e,t){let n=b(i++);d(n[1],t)&&(n[0]=h(e,t),n[1]=t,ee().hooks.effect.push(n))}function a(e,t){let n=b(i++);return d(n[1],t)?(n[1]=t,n[0]=e()):n[0]}function h(e,t){return a(()=>e,t)}function f(e){return a(()=>({current:e}),[])}function b(e){const t=ee();let n=t.hooks||(t.hooks={list:[],effect:[],cleanup:[]});return e>=n.list.length&&n.list.push([]),n.list[e]}function d(e,t){return!e||t.some((t,n)=>t!==e[n])}function p(e){let t=e[0];if(t){let n=e.pop();if(t!==n){e[0]=n;let t=0,c=e.length;for(;t<c;){let c=2*(t+1)-1,l=e[c],r=c+1,i=e[r];if(l&&j(l,n)<0)i&&j(i,l)<0?(e[t]=i,e[r]=n,t=r):(e[t]=l,e[c]=n,t=c);else{if(!(i&&j(i,n)<0))return;e[t]=i,e[r]=n,t=r}}}return t}return null}function j(e,t){return e.dueTime-t.dueTime}function O(e){return e[0]||null}let m=[],g=null,v=null,y=!1,k=0,N=1e3/60;function w(e){const t=C();let n={callback:e,startTime:t,dueTime:t+3e3};return function(e,t){let n=e.length;for(e.push(t);;){let c=Math.floor((n-1)/2),l=e[c];if(!(l&&j(l,t)>0))return;e[c]=t,e[n]=l,n=c}}(m,n),v=$,y||(S(),y=!0),n}function $(e){try{return function(e){let t=e;for(g=O(m);g&&!(g.dueTime>t&&x());){let e=g.callback;if(e){g.callback=null;let n=e(g.dueTime<=t);n?g.callback=n:p(m)}else p(m);g=O(m),t=C()}return!!g}(e)}catch(e){throw e}finally{g=null}}function E(){if(v){let e=C();k=e+N,v(e)?S():(y=!1,v=null)}}const S=(()=>{if("undefined"!=typeof MessageChannel){const e=new MessageChannel,t=e.port2;return e.port1.onmessage=E,()=>t.postMessage(null)}return()=>setTimeout(E,0)})();function x(){return C()>=k}const C=()=>performance.now();var P={};const[q,T,_,A,M,R]=[0,1,2,3,4,5];let D=null,F=P.currentFiber||null,L=null,z=[],Q=[];function V(e,t,n){W({tag:q,node:t,props:{children:e},done:n})}function W(e,t){e.lock=t,z.push(e),w(B)}function B(e){let t=null;for(L||(L=z.shift());L&&(!x()||e);)try{L=G(L)}catch(e){if(!e||"function"!=typeof e.then)throw e;t=L,L=null,e.then(()=>{L=t,B(!0)})}return D?(function(e){Q.forEach(e=>{e.parent&&function(e){let t=e.op,n=e.parentNode,c=e.node,l=e.ref;if(t===R){for(Y(e,c=null),function e(t){X(()=>{for(const n in t){const c=t[n];Z(c.ref,null),c.kids&&e(c.kids)}})}(e.kids);e.tag===_;)e=e.child;n.removeChild(e.node)}else if(e.tag===_)Y(e);else if(t===M)r(c,e.lastProps,e.props),Z(l,null);else{let t=e.insertPoint?e.insertPoint.node:null,l=t?t.nextSibling:n.firstChild;if(l===c)return;if(null===l&&c===n.lastChild)return;n.insertBefore(c,l)}Z(l,c)}(e)}),e.done&&e.done(),Q=[],D=null,L=null}(D),null):!e&&L||z.length>0?B.bind(null):null}function G(e){if(e.parentNode=function(e){for(;e=e.parent;)if(e.tag<_)return e.node}(e),e.tag==_?function(e){const t=e.pendingProps;let n=e.props;if(null===e.lock&&!function(e,t){for(let n in e)if(!(n in t))return!0;for(let n in t)if(e[n]!==t[n])return!0;return!1}(t,n))return void function(e){if(!e.child)return;let t=e.child,n=t;for(e.child=n,n.parent=e;t.sibling;)t=t.sibling,(n=n.sibling=t).parent=e;n.sibling=null}(e);F=e,i=0;let c=e.type(n);c.type||(c=l(c)),I(e,c)}(e):function(e){e.node||("svg"===e.type&&(e.tag=T),e.node=function(e){const t="text"===e.type?document.createTextNode(""):e.tag===T?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type);return r(t,{},e.props),t}(e));let t=e.parentNode||{};e.insertPoint=t.last||null,t.last=e,e.node.last=null,I(e,e.props.children)}(e),e.pendingProps=e.props,Q.push(e),e.child)return e.child;for(;e;){if(0!=e.lock&&e.parent||(D=e),e.sibling&&null==e.lock)return e.sibling;e=e.parent}}function I(e,t){if(!t)return;delete e.child;const n=e.kids,c=e.kids=function(e){let t={},n=0,c=0;return J(e).forEach(e=>{e.pop?(e.forEach(e=>{e.key?t["."+n+"."+e.key]=e:(t["."+n+"."+c]=e)&&c++}),n++):e.key?t["."+e.key]=e:(t["."+n]=e)&&n++}),t}(t);let l={};for(const e in n){let t=c[e],r=n[e];t&&t.type===r.type?l[e]=r:(r.op=R,Q.push(r))}let r=null,i=null;for(const t in c){let n=c[t],o=l[t];o?(i=H(o,M),n.op=M,(n={...i,...n}).lastProps=i.props,U(n)&&(n.op=A)):n=H(n,A),c[t]=n,n.parent=e,r?r.sibling=n:(e.tag===T&&(n.tag=T),e.child=n),r=n}r&&(r.sibling=null),e.lock=!e.lock&&null}function U(e){let t=e.parent;return t.tag===_?t.key&&!t.lock:e.key}function H(e,t){return{...e,op:t,tag:K(e.type)?_:q}}const J=e=>e?e.pop?e:[e]:[];const K=e=>"function"==typeof e,X="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame;function Y(e){X(()=>{e.hooks&&(e.hooks.cleanup.forEach(t=>t[1]&&0===t[1].length?e.op===R&&t[0]():t[0]()),e.hooks.cleanup=[],e.hooks.effect.forEach((t,n)=>{const c=t[0]();"function"==typeof c&&(e.hooks.cleanup[n]=[c,t[1]])}),e.hooks.effect=[])})}function Z(e,t){e&&(K(e)?e(t):e.current=t)}function ee(){return F||null}const te={h:c,render:V,scheduleWork:W,options:P,useState:o,useReducer:u,useEffect:s,useMemo:a,useCallback:h,useRef:f};t.createElement=c,t.default=te,t.h=c,t.options=P,t.render=V,t.scheduleWork=W,t.useCallback=h,t.useEffect=s,t.useMemo=a,t.useReducer=u,t.useRef=f,t.useState=o},function(e,t,n){var c;!function(l){"use strict";function r(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function i(e,t,n,c,l,i){return r((o=r(r(t,e),r(c,i)))<<(u=l)|o>>>32-u,n);var o,u}function o(e,t,n,c,l,r,o){return i(t&n|~t&c,e,t,l,r,o)}function u(e,t,n,c,l,r,o){return i(t&c|n&~c,e,t,l,r,o)}function s(e,t,n,c,l,r,o){return i(t^n^c,e,t,l,r,o)}function a(e,t,n,c,l,r,o){return i(n^(t|~c),e,t,l,r,o)}function h(e,t){var n,c,l,i,h;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var f=1732584193,b=-271733879,d=-1732584194,p=271733878;for(n=0;n<e.length;n+=16)c=f,l=b,i=d,h=p,f=o(f,b,d,p,e[n],7,-680876936),p=o(p,f,b,d,e[n+1],12,-389564586),d=o(d,p,f,b,e[n+2],17,606105819),b=o(b,d,p,f,e[n+3],22,-1044525330),f=o(f,b,d,p,e[n+4],7,-176418897),p=o(p,f,b,d,e[n+5],12,1200080426),d=o(d,p,f,b,e[n+6],17,-1473231341),b=o(b,d,p,f,e[n+7],22,-45705983),f=o(f,b,d,p,e[n+8],7,1770035416),p=o(p,f,b,d,e[n+9],12,-1958414417),d=o(d,p,f,b,e[n+10],17,-42063),b=o(b,d,p,f,e[n+11],22,-1990404162),f=o(f,b,d,p,e[n+12],7,1804603682),p=o(p,f,b,d,e[n+13],12,-40341101),d=o(d,p,f,b,e[n+14],17,-1502002290),f=u(f,b=o(b,d,p,f,e[n+15],22,1236535329),d,p,e[n+1],5,-165796510),p=u(p,f,b,d,e[n+6],9,-1069501632),d=u(d,p,f,b,e[n+11],14,643717713),b=u(b,d,p,f,e[n],20,-373897302),f=u(f,b,d,p,e[n+5],5,-701558691),p=u(p,f,b,d,e[n+10],9,38016083),d=u(d,p,f,b,e[n+15],14,-660478335),b=u(b,d,p,f,e[n+4],20,-405537848),f=u(f,b,d,p,e[n+9],5,568446438),p=u(p,f,b,d,e[n+14],9,-1019803690),d=u(d,p,f,b,e[n+3],14,-187363961),b=u(b,d,p,f,e[n+8],20,1163531501),f=u(f,b,d,p,e[n+13],5,-1444681467),p=u(p,f,b,d,e[n+2],9,-51403784),d=u(d,p,f,b,e[n+7],14,1735328473),f=s(f,b=u(b,d,p,f,e[n+12],20,-1926607734),d,p,e[n+5],4,-378558),p=s(p,f,b,d,e[n+8],11,-2022574463),d=s(d,p,f,b,e[n+11],16,1839030562),b=s(b,d,p,f,e[n+14],23,-35309556),f=s(f,b,d,p,e[n+1],4,-1530992060),p=s(p,f,b,d,e[n+4],11,1272893353),d=s(d,p,f,b,e[n+7],16,-155497632),b=s(b,d,p,f,e[n+10],23,-1094730640),f=s(f,b,d,p,e[n+13],4,681279174),p=s(p,f,b,d,e[n],11,-358537222),d=s(d,p,f,b,e[n+3],16,-722521979),b=s(b,d,p,f,e[n+6],23,76029189),f=s(f,b,d,p,e[n+9],4,-640364487),p=s(p,f,b,d,e[n+12],11,-421815835),d=s(d,p,f,b,e[n+15],16,530742520),f=a(f,b=s(b,d,p,f,e[n+2],23,-995338651),d,p,e[n],6,-198630844),p=a(p,f,b,d,e[n+7],10,1126891415),d=a(d,p,f,b,e[n+14],15,-1416354905),b=a(b,d,p,f,e[n+5],21,-57434055),f=a(f,b,d,p,e[n+12],6,1700485571),p=a(p,f,b,d,e[n+3],10,-1894986606),d=a(d,p,f,b,e[n+10],15,-1051523),b=a(b,d,p,f,e[n+1],21,-2054922799),f=a(f,b,d,p,e[n+8],6,1873313359),p=a(p,f,b,d,e[n+15],10,-30611744),d=a(d,p,f,b,e[n+6],15,-1560198380),b=a(b,d,p,f,e[n+13],21,1309151649),f=a(f,b,d,p,e[n+4],6,-145523070),p=a(p,f,b,d,e[n+11],10,-1120210379),d=a(d,p,f,b,e[n+2],15,718787259),b=a(b,d,p,f,e[n+9],21,-343485551),f=r(f,c),b=r(b,l),d=r(d,i),p=r(p,h);return[f,b,d,p]}function f(e){var t,n="",c=32*e.length;for(t=0;t<c;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function b(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var c=8*e.length;for(t=0;t<c;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function d(e){var t,n,c="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),c+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return c}function p(e){return unescape(encodeURIComponent(e))}function j(e){return function(e){return f(h(b(e),8*e.length))}(p(e))}function O(e,t){return function(e,t){var n,c,l=b(e),r=[],i=[];for(r[15]=i[15]=void 0,l.length>16&&(l=h(l,8*e.length)),n=0;n<16;n+=1)r[n]=909522486^l[n],i[n]=1549556828^l[n];return c=h(r.concat(b(t)),512+8*t.length),f(h(i.concat(c),640))}(p(e),p(t))}function m(e,t,n){return t?n?O(t,e):d(O(t,e)):n?j(e):d(j(e))}void 0===(c=function(){return m}.call(t,n,t,e))||(e.exports=c)}()},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0);const l="https://www.clicli.us",r="https://admin.clicli.us";n(2);function i(){const e={"投稿教程":905,"使用说明":31,"补档":99};return Object(c.h)("header",{style:{background:`url(${window.bg})`}},Object(c.h)("div",{className:"header"},Object(c.h)("div",{className:"wrap"},Object(c.h)("nav",null,Object(c.h)("a",{href:l,className:"active"},"主站"),Object(c.h)("a",{href:"https://app.clicli.me"},"APP 下载"),Object.keys(e).map(t=>Object(c.h)("a",{href:`${l}/play/gv${e[t]}`},t))),Object(c.h)("div",{className:"search"},Object(c.h)("input",{type:"text",placeholder:"搜索一下下菊花又不会坏(⊙o⊙)…"})),Object(c.h)("div",{className:"biu"},Object(c.h)("a",{href:`${r}/login`},"登陆"),Object(c.h)("a",{href:`${r}/register`},"注册"),Object(c.h)("a",{className:"user-center",href:r},"投稿"))),Object(c.h)("div",{className:"wrap"},Object(c.h)("div",{className:"logo"}))))}function o(e){return new Promise((t,n)=>{fetch(e).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{n(e)})})}function u(e,t,n,c,l,r){return o(`https://api.clicli.us/posts?status=${l||"public"}&sort=${e}&tag=${t}&uid=${r||""}&page=${n}&pageSize=${c}`)}var s=n(1),a=n.n(s);function h(e){if(/^[0-9]+$/.test(e))return`https://q1.qlogo.cn/g?b=qq&nk=${e}&s=640`;return`https://cdn.v2ex.com/gravatar/${a()(e)}?s=100&d=retro`}function f(e){let t=e.match(/suo(.+?)\)/i);return t?t[1].slice(2):"https://wx4.sinaimg.cn/mw690/0060lm7Tly1fvmtrka9p5j30b40b43yo.jpg"}n(3);function b(e){const[t,n]=Object(c.useState)([]);return Object(c.useEffect)(()=>{u("","推荐",1,10).then(e=>{n(e.posts)})},[]),Object(c.h)("div",{className:"recommend"},Object(c.h)("h1",null,"编辑推荐"),Object(c.h)("ul",null,t.length>0&&t.map(e=>Object(c.h)("li",{key:e.id},Object(c.h)("a",{target:"_blank",href:`${l}/play/gv${e.id}`},Object(c.h)("div",{className:"cover"},Object(c.h)("img",{src:f(e.content)})),Object(c.h)("div",{className:"title"},e.title))))))}n(4);function d(){return Object(c.h)("div",{className:"footer"},Object(c.h)("div",{className:"wrap"},Object(c.h)("div",{className:"title"},Object(c.h)("img",{src:"https://pic.superbed.cn/item/5cc52b543a213b04172979c8.png"}),Object(c.h)("h1",null,"CliCli 弹幕网")),Object(c.h)("ul",{className:"links"},Object(c.h)("li",null,Object(c.h)("a",{href:""},"关于我们")),Object(c.h)("li",null,Object(c.h)("a",{href:window.concat[3]},"开源仓库")),Object(c.h)("li",null,Object(c.h)("a",{href:window.concat[3]},"up主招募")),Object(c.h)("li",null,Object(c.h)("a",{href:""},"友情链接"))),Object(c.h)("ul",{className:"icons"},Object(c.h)("a",{href:window.concat[0]},Object(c.h)("li",null,Object(c.h)("i",{className:"icon-font icon-qq"}),"QQ群")),Object(c.h)("a",{href:window.concat[1]},Object(c.h)("li",null,Object(c.h)("i",{className:"icon-font icon-weibo"}),"微博")),Object(c.h)("a",{href:window.concat[2]},Object(c.h)("li",null,Object(c.h)("i",{className:"icon-font icon-xiazai"}),"下载客户端")))))}n(5);function p(e){const[t,n]=Object(c.useState)([]);return Object(c.useEffect)(()=>{o("https://api.clicli.us/rank").then(e=>{n(e.posts)})},[]),Object(c.h)("div",{className:"rank"},Object(c.h)("h1",null,"排行榜"),Object(c.h)("ul",null,t.length>0&&t.map((e,t)=>0===t?Object(c.h)("li",{className:"current"},Object(c.h)("div",{className:"cover"},Object(c.h)("img",{src:f(e.content)})),Object(c.h)("a",{target:"_blank",href:`${l}/play/gv${e.id}`},Object(c.h)("div",{className:"info"},Object(c.h)("div",{className:"title"},e.title),Object(c.h)("div",{className:"bom"},Object(c.h)("div",{className:"tag"},e.tag),Object(c.h)("div",{className:"idx"},t+1))))):Object(c.h)("li",{key:e.id},Object(c.h)("span",{className:t<3?"active":""},t+1),Object(c.h)("a",{target:"_blank",href:`${l}/play/gv${e.id}`},Object(c.h)("div",{className:"title"},e.title))))))}n(6);function j(e){const[t,n]=Object(c.useState)([]),[r,i]=Object(c.useState)((new Date).getDay());Object(c.useEffect)(()=>{u("新番","",1,100,"nowait").then(e=>{let t={};e.posts.forEach(e=>{let n=new Date(e.time).getDay();t[n]=t[n]||[],t[n].push(e)}),n(t)})},[]);const o={0:"周日",1:"周一",2:"周二",3:"周三",4:"周四",5:"周五",6:"周六"};return Object(c.h)("div",{className:"week-list"},Object(c.h)("div",{className:"wrap"},Object(c.h)("div",{className:"headline"},Object(c.h)("h1",null,"更新表"),Object(c.h)("ul",null,t&&Object.keys(t).map((e,t)=>Object(c.h)("button",{className:t===r?"active":"",onClick:()=>i(t)},o[e])))),Object(c.h)("ul",{className:"posts"},t[r]&&t[r].map(e=>Object(c.h)("li",{key:e.id},Object(c.h)("a",{target:"_blank",href:`${l}/play/gv${e.id}`},Object(c.h)("div",{className:"post"},Object(c.h)("div",{className:"cover"},Object(c.h)("img",{src:f(e.content)})),Object(c.h)("div",{className:"title"},e.title))))))))}n(7);function O(e){const[t,n]=Object(c.useState)([]);return Object(c.useEffect)(()=>{u("原创","",2,4).then(e=>n(e.posts))},[]),Object(c.h)("div",{className:"ugc-list"},Object(c.h)("div",{className:"wrap"},Object(c.h)("h1",null,"个人投稿"),Object(c.h)("ul",{className:"posts"},t.length>0&&t.map(e=>Object(c.h)("li",{key:e.id},Object(c.h)("a",{target:"_blank",href:`${l}/play/gv${e.id}`},Object(c.h)("div",{className:"post"},Object(c.h)("div",{className:"cover"},Object(c.h)("img",{src:f(e.content)})),Object(c.h)("div",{className:"info"},Object(c.h)("div",{className:"uqq"},Object(c.h)("img",{src:h(e.uqq)})),Object(c.h)("div",{className:"title"},e.title)))))))))}n(8);function m(e){const[t,n]=Object(c.useState)([]);return Object(c.useEffect)(()=>{u("bgm","",1,30).then(e=>{n(e.posts)})},[]),Object(c.h)("div",{className:"post-list wrap"},Object(c.h)("h1",null,"最新更新"),Object(c.h)("ul",null,t.length>0&&t.map(e=>Object(c.h)("li",{key:e.id},Object(c.h)("a",{target:"_blank",href:`${l}/play/gv${e.id}`},Object(c.h)("div",{className:"cover"},Object(c.h)("img",{src:f(e.content)})),Object(c.h)("div",{className:"title"},e.title))))))}n(9);Object(c.render)(Object(c.h)((function(){return Object(c.h)("div",null,Object(c.h)(i,null),Object(c.h)("div",{style:{textAlign:"center"}},Object(c.h)("div",{className:"call"},"@"+window.call[0]+"： "+window.call[1])),Object(c.h)("div",{className:"wrap",style:{display:"flex"}},Object(c.h)(b,null),Object(c.h)(p,null)),Object(c.h)(j,null),Object(c.h)(O,null),Object(c.h)(m,null),Object(c.h)(d,null))}),null),document.body)}]);