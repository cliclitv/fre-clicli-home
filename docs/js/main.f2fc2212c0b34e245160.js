(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(n,e,t){var l;!function(i){"use strict";function o(n,e){var t=(65535&n)+(65535&e);return(n>>16)+(e>>16)+(t>>16)<<16|65535&t}function r(n,e,t,l,i,r){return o((c=o(o(e,n),o(l,r)))<<(a=i)|c>>>32-a,t);var c,a}function c(n,e,t,l,i,o,c){return r(e&t|~e&l,n,e,i,o,c)}function a(n,e,t,l,i,o,c){return r(e&l|t&~l,n,e,i,o,c)}function s(n,e,t,l,i,o,c){return r(e^t^l,n,e,i,o,c)}function u(n,e,t,l,i,o,c){return r(t^(e|~l),n,e,i,o,c)}function f(n,e){var t,l,i,r,f;n[e>>5]|=128<<e%32,n[14+(e+64>>>9<<4)]=e;var p=1732584193,d=-271733879,h=-1732584194,m=271733878;for(t=0;t<n.length;t+=16)l=p,i=d,r=h,f=m,p=c(p,d,h,m,n[t],7,-680876936),m=c(m,p,d,h,n[t+1],12,-389564586),h=c(h,m,p,d,n[t+2],17,606105819),d=c(d,h,m,p,n[t+3],22,-1044525330),p=c(p,d,h,m,n[t+4],7,-176418897),m=c(m,p,d,h,n[t+5],12,1200080426),h=c(h,m,p,d,n[t+6],17,-1473231341),d=c(d,h,m,p,n[t+7],22,-45705983),p=c(p,d,h,m,n[t+8],7,1770035416),m=c(m,p,d,h,n[t+9],12,-1958414417),h=c(h,m,p,d,n[t+10],17,-42063),d=c(d,h,m,p,n[t+11],22,-1990404162),p=c(p,d,h,m,n[t+12],7,1804603682),m=c(m,p,d,h,n[t+13],12,-40341101),h=c(h,m,p,d,n[t+14],17,-1502002290),p=a(p,d=c(d,h,m,p,n[t+15],22,1236535329),h,m,n[t+1],5,-165796510),m=a(m,p,d,h,n[t+6],9,-1069501632),h=a(h,m,p,d,n[t+11],14,643717713),d=a(d,h,m,p,n[t],20,-373897302),p=a(p,d,h,m,n[t+5],5,-701558691),m=a(m,p,d,h,n[t+10],9,38016083),h=a(h,m,p,d,n[t+15],14,-660478335),d=a(d,h,m,p,n[t+4],20,-405537848),p=a(p,d,h,m,n[t+9],5,568446438),m=a(m,p,d,h,n[t+14],9,-1019803690),h=a(h,m,p,d,n[t+3],14,-187363961),d=a(d,h,m,p,n[t+8],20,1163531501),p=a(p,d,h,m,n[t+13],5,-1444681467),m=a(m,p,d,h,n[t+2],9,-51403784),h=a(h,m,p,d,n[t+7],14,1735328473),p=s(p,d=a(d,h,m,p,n[t+12],20,-1926607734),h,m,n[t+5],4,-378558),m=s(m,p,d,h,n[t+8],11,-2022574463),h=s(h,m,p,d,n[t+11],16,1839030562),d=s(d,h,m,p,n[t+14],23,-35309556),p=s(p,d,h,m,n[t+1],4,-1530992060),m=s(m,p,d,h,n[t+4],11,1272893353),h=s(h,m,p,d,n[t+7],16,-155497632),d=s(d,h,m,p,n[t+10],23,-1094730640),p=s(p,d,h,m,n[t+13],4,681279174),m=s(m,p,d,h,n[t],11,-358537222),h=s(h,m,p,d,n[t+3],16,-722521979),d=s(d,h,m,p,n[t+6],23,76029189),p=s(p,d,h,m,n[t+9],4,-640364487),m=s(m,p,d,h,n[t+12],11,-421815835),h=s(h,m,p,d,n[t+15],16,530742520),p=u(p,d=s(d,h,m,p,n[t+2],23,-995338651),h,m,n[t],6,-198630844),m=u(m,p,d,h,n[t+7],10,1126891415),h=u(h,m,p,d,n[t+14],15,-1416354905),d=u(d,h,m,p,n[t+5],21,-57434055),p=u(p,d,h,m,n[t+12],6,1700485571),m=u(m,p,d,h,n[t+3],10,-1894986606),h=u(h,m,p,d,n[t+10],15,-1051523),d=u(d,h,m,p,n[t+1],21,-2054922799),p=u(p,d,h,m,n[t+8],6,1873313359),m=u(m,p,d,h,n[t+15],10,-30611744),h=u(h,m,p,d,n[t+6],15,-1560198380),d=u(d,h,m,p,n[t+13],21,1309151649),p=u(p,d,h,m,n[t+4],6,-145523070),m=u(m,p,d,h,n[t+11],10,-1120210379),h=u(h,m,p,d,n[t+2],15,718787259),d=u(d,h,m,p,n[t+9],21,-343485551),p=o(p,l),d=o(d,i),h=o(h,r),m=o(m,f);return[p,d,h,m]}function p(n){var e,t="",l=32*n.length;for(e=0;e<l;e+=8)t+=String.fromCharCode(n[e>>5]>>>e%32&255);return t}function d(n){var e,t=[];for(t[(n.length>>2)-1]=void 0,e=0;e<t.length;e+=1)t[e]=0;var l=8*n.length;for(e=0;e<l;e+=8)t[e>>5]|=(255&n.charCodeAt(e/8))<<e%32;return t}function h(n){var e,t,l="";for(t=0;t<n.length;t+=1)e=n.charCodeAt(t),l+="0123456789abcdef".charAt(e>>>4&15)+"0123456789abcdef".charAt(15&e);return l}function m(n){return unescape(encodeURIComponent(n))}function g(n){return function(n){return p(f(d(n),8*n.length))}(m(n))}function v(n,e){return function(n,e){var t,l,i=d(n),o=[],r=[];for(o[15]=r[15]=void 0,i.length>16&&(i=f(i,8*n.length)),t=0;t<16;t+=1)o[t]=909522486^i[t],r[t]=1549556828^i[t];return l=f(o.concat(d(e)),512+8*e.length),p(f(r.concat(l),640))}(m(n),m(e))}function k(n,e,t){return e?t?v(e,n):h(v(e,n)):t?g(n):h(g(n))}void 0===(l=function(){return k}.call(e,t,e,n))||(n.exports=l)}()},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";function l(n,e){let t=e||{},l=t.key||null,o=t.ref||null,r=[];for(let n=2;n<arguments.length;n++){let e=arguments[n];null==e||!0===e||!1===e||("string"==typeof e||"number"==typeof e?r.push(i(e)):r.push(e))}return r.length&&(t.children=1===r.length?r[0]:r),delete t.key,delete t.ref,{type:n,props:t,key:l,ref:o}}function i(n){return{type:"text",props:{nodeValue:n}}}function o(n,e,t){for(let l in{...e,...t}){let i=e[l],o=t[l];if(i==o||"children"===l);else if("style"===l)for(const e in{...i,...o})i&&o&&i[e]===o[e]||(n[l][e]=o&&o[e]||"");else"o"===l[0]&&"n"===l[1]?(l=l.slice(2).toLowerCase(),i&&n.removeEventListener(l,i),n.addEventListener(l,o)):l in n&&!(n instanceof SVGElement)?n[l]=null==o?"":o:null==o||!1===o?n.removeAttribute(l):n.setAttribute(l,o)}}t.r(e);let r=0;function c(n){return function(n,e){const t=u(r++),l=K();function i(e){let i=n?n(t[0],e):I(e)?e(t[0]):e;t[0]=i,z(l,!0)}return t.length?[t[0],i]:(t[0]=e,[e,i])}(null,n)}function a(n,e){let t=u(r++);f(t[1],e)&&(t[0]=function(n,e){return s(()=>n,e)}(n,e),t[1]=e,K().hooks.effect.push(t))}function s(n,e){let t=u(r++);return f(t[1],e)?(t[1]=e,t[0]=n()):t[0]}function u(n){const e=K();let t=e.hooks||(e.hooks={list:[],effect:[],cleanup:[]});return n>=t.list.length&&t.list.push([]),t.list[n]}function f(n,e){return!n||e.some((e,t)=>e!==n[t])}function p(n){let e=n[0];if(e){let t=n.pop();if(e!==t){n[0]=t;let e=0,l=n.length;for(;e<l;){let l=2*(e+1)-1,i=n[l],o=l+1,r=n[o];if(i&&d(i,t)<0)r&&d(r,i)<0?(n[e]=r,n[o]=t,e=o):(n[e]=i,n[l]=t,e=l);else{if(!(r&&d(r,t)<0))return;n[e]=r,n[o]=t,e=o}}}return e}return null}function d(n,e){return n.dueTime-e.dueTime}function h(n){return n[0]||null}let m=[],g=null,v=null,k=!1,N=0,y=1e3/60;function w(n){const e=x();let t={callback:n,startTime:e,dueTime:e+3e3};return function(n,e){let t=n.length;for(n.push(e);;){let l=Math.floor((t-1)/2),i=n[l];if(!(i&&d(i,e)>0))return;n[l]=e,n[t]=i,t=l}}(m,t),v=b,k||(C(),k=!0),t}function b(n){try{return function(n){let e=n;g=h(m);for(;g&&!(g.dueTime>e&&q());){let n=g.callback;if(n){g.callback=null;const t=g.dueTime<=e;let l=n(t);l?g.callback=l:p(m)}else p(m);g=h(m),e=x()}return!!g}(n)}finally{g=null}}function $(){if(v){let n=x();N=n+y,v(n)?C():(k=!1,v=null)}}const C=(()=>{if("undefined"!=typeof MessageChannel){const n=new MessageChannel,e=n.port2;return n.port1.onmessage=$,()=>e.postMessage(null)}return()=>setTimeout($,0)})();function q(){return x()>=N}const x=()=>performance.now();const[E,A,T,P,_,j]=[0,1,2,3,4,5];let S=null,D={}.currentFiber||null,M=null,F=[],L=[];function z(n,e){n.lock=e,F.push(n),w(J)}function J(n){let e=null;for(M||(M=F.shift());M&&(!q()||n);)try{M=O(M)}catch(n){if(!n||"function"!=typeof n.then)throw n;e=M,M=null,n.then(()=>{M=e})}return S?(t=S,L.forEach(n=>{n.parent&&function(n){let e=n.op,t=n.parentNode,l=n.node,i=n.ref;if(e===j){for(U(n,l=null),function n(e){R(()=>{for(const t in e){const l=e[t];H(l.ref,null),l.kids&&n(l.kids)}})}(n.kids);n.tag===T;)n=n.child;t.removeChild(n.node)}else if(n.tag===T)U(n);else if(e===_)o(l,n.alternate.props,n.props),H(i,null);else{let e=n.insertPoint?n.insertPoint.node:null,i=e?e.nextSibling:t.firstChild;if(i===l)return;if(null===i&&l===t.lastChild)return;t.insertBefore(l,i)}H(i,l)}(n)}),t.done&&t.done(),L=[],S=null,M=null,null):!n||F.length>0?J.bind(null):null;var t}function O(n){if(n.parentNode=function(n){for(;n=n.parent;)if(n.tag<T)return n.node}(n),n.tag==T?function(n){n.props=n.props||{},D=n,r=0;let e=n.type(n.props);e.type||(e=i(e));Q(n,e)}(n):function(n){n.node||("svg"===n.type&&(n.tag=A),n.node=function(n){const e="text"===n.type?document.createTextNode(""):n.tag===A?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type);return o(e,{},n.props),e}(n));let e=n.parentNode||{};n.insertPoint=e.last||null,e.last=n,n.node.last=null,Q(n,n.props.children)}(n),L.push(n),n.child)return n.child;for(;n;){if(0!=n.lock&&n.parent||(S=n),n.sibling&&null==n.lock)return n.sibling;n=n.parent}}function Q(n,e){if(!e)return;delete n.child;const t=n.kids,l=n.kids=function(n){let e={},t=0,l=0;return G(n).forEach(n=>{n.pop?(n.forEach(n=>{n.key?e["."+t+"."+n.key]=n:(e["."+t+"."+l]=n)&&l++}),t++):n.key?e["."+n.key]=n:(e["."+t]=n)&&t++}),e}(e);let i={};for(const n in t){let e=l[n],o=t[n];e&&e.type===o.type?i[n]=o:(o.op=j,L.push(o))}let o=null,r=null;for(const e in l){let t=l[e],c=i[e];c?(r=B(c,_),t.op=_,(t={...r,...t}).alternate=r,V(t)&&(t.op=P)):t=B(t,P),l[e]=t,t.parent=n,o?o.sibling=t:(n.tag===A&&(t.tag=A),n.child=t),o=t}o&&(o.sibling=null),n.lock=!n.lock&&null}function V(n){let e=n.parent;return e.tag===T?e.key&&!e.lock:n.key}function B(n,e){return{...n,op:e,tag:I(n.type)?T:E}}const G=n=>n?n.pop?n:[n]:[];const I=n=>"function"==typeof n;let R="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame;function U(n){R(()=>{n.hooks&&(n.hooks.cleanup.forEach(n=>n()),n.hooks.effect.forEach((e,t)=>{const l=e[0]();l&&(n.hooks.cleanup[t]=l)}),n.hooks.effect=[])})}function H(n,e){n&&(I(n)?n(e):n.current=e)}function K(){return D||null}const W="https://www.clicli.us/",X="https://admin.clicli.us/";t(1);function Y(){const n={"投稿教程":905,"使用说明":31,"补档":99};return l("header",{style:{background:`url(${window.bg})`}},l("div",{className:"header"},l("div",{className:"wrap"},l("nav",null,l("a",{href:W,className:"active"},"主站"),l("a",{href:"https://app.clicli.me"},"APP 下载"),Object.keys(n).map(e=>l("a",{href:`${W}play/gv${n[e]}`},e))),l("div",{className:"search"},l("input",{type:"text",placeholder:"搜索一下下菊花又不会坏(⊙o⊙)…"})),l("div",{className:"biu"},l("a",{href:`${X}/login`},"登陆"),l("a",{href:`${X}/register`},"注册"),l("a",{className:"user-center",href:X},"投稿"))),l("div",{className:"wrap"},l("div",{className:"logo"},l("img",{src:window.logo})))))}function Z(n){return new Promise((e,t)=>{fetch(n).then(n=>n.json()).then(n=>{e(n)}).catch(n=>{t(n)})})}function nn(n,e,t,l,i,o){return Z(`https://api.clicli.us/posts?status=${i||"public"}&sort=${n}&tag=${e}&uid=${o||""}&page=${t}&pageSize=${l}`)}var en=t(0),tn=t.n(en);function ln(n){if(/^[0-9]+$/.test(n))return`https://q1.qlogo.cn/g?b=qq&nk=${n}&s=640`;return`https://cdn.v2ex.com/gravatar/${tn()(n)}?s=100&d=retro`}function on(n){let e=n.match(/suo(.+?)\)/i);return e?e[1].slice(2):"https://wx4.sinaimg.cn/mw690/0060lm7Tly1fvmtrka9p5j30b40b43yo.jpg"}t(2);function rn(n){const[e,t]=c([]);return a(()=>{nn("","推荐",1,10).then(n=>{t(n.posts)})},[]),l("div",{className:"recommend"},l("h1",null,"编辑推荐"),l("ul",null,e.length>0&&e.map(n=>l("li",{key:n.id},l("a",{target:"_blank",href:`${W}play/gv${n.id}`},l("div",{className:"cover"},l("img",{src:on(n.content)})),l("div",{className:"title"},n.title))))))}t(3);function cn(){return l("div",{className:"footer"},l("div",{className:"wrap"},l("div",{className:"title"},l("img",{src:"https://pic.superbed.cn/item/5cc52b543a213b04172979c8.png"}),l("h1",null,"CliCli 弹幕网")),l("ul",{className:"links"},l("li",null,l("a",{href:""},"关于我们")),l("li",null,l("a",{href:window.concat[3]},"开源仓库")),l("li",null,l("a",{href:window.concat[3]},"up主招募")),l("li",null,l("a",{href:""},"友情链接"))),l("ul",{className:"icons"},l("a",{href:window.concat[0]},l("li",null,l("i",{className:"icon-font icon-qq"}),"QQ群")),l("a",{href:window.concat[1]},l("li",null,l("i",{className:"icon-font icon-weibo"}),"微博")),l("a",{href:window.concat[2]},l("li",null,l("i",{className:"icon-font icon-xiazai"}),"下载客户端")))))}t(4);function an(n){const[e,t]=c([]);return a(()=>{Z("https://api.clicli.us/rank").then(n=>{t(n.posts)})},[]),l("div",{className:"rank"},l("h1",null,"排行榜"),l("ul",null,e.length>0&&e.map((n,e)=>0===e?l("li",{className:"current"},l("div",{className:"cover"},l("img",{src:on(n.content)})),l("a",{target:"_blank",href:`${W}play/gv${n.id}`},l("div",{className:"info"},l("div",{className:"title"},n.title),l("div",{className:"bom"},l("div",{className:"tag"},n.tag),l("div",{className:"idx"},e+1))))):l("li",{key:n.id},l("span",{className:e<3?"active":""},e+1),l("a",{target:"_blank",href:`${W}play/gv${n.id}`},l("div",{className:"title"},n.title))))))}t(5);function sn(n){const[e,t]=c([]),[i,o]=c((new Date).getDay());a(()=>{nn("新番","",1,100,"nowait").then(n=>{let e={};n.posts.forEach(n=>{let t=new Date(n.time).getDay();e[t]=e[t]||[],e[t].push(n)}),t(e)})},[]);const r={0:"周日",1:"周一",2:"周二",3:"周三",4:"周四",5:"周五",6:"周六"};return l("div",{className:"week-list"},l("div",{className:"wrap"},l("div",{className:"headline"},l("h1",null,"更新表"),l("ul",null,e&&Object.keys(e).map((n,e)=>l("button",{className:e===i?"active":"",onClick:()=>o(e)},r[n])))),l("ul",{className:"posts"},e[i]&&e[i].map(n=>l("li",{key:n.id},l("a",{target:"_blank",href:`${W}play/gv${n.id}`},l("div",{className:"post"},l("div",{className:"cover"},l("img",{src:on(n.content)})),l("div",{className:"title"},n.title))))))))}t(6);function un(n){const[e,t]=c([]);return a(()=>{nn("原创","",2,4).then(n=>t(n.posts))},[]),l("div",{className:"ugc-list"},l("div",{className:"wrap"},l("h1",null,"个人投稿"),l("ul",{className:"posts"},e.length>0&&e.map(n=>l("li",{key:n.id},l("a",{target:"_blank",href:`${W}play/gv${n.id}`},l("div",{className:"post"},l("div",{className:"cover"},l("img",{src:on(n.content)})),l("div",{className:"info"},l("div",{className:"uqq"},l("img",{src:ln(n.uqq)})),l("div",{className:"title"},n.title)))))))))}t(7);function fn(n){const[e,t]=c([]);return a(()=>{nn("bgm","",1,30).then(n=>{t(n.posts)})},[]),l("div",{className:"post-list wrap"},l("h1",null,"最新更新"),l("ul",null,e.length>0&&e.map(n=>l("li",{key:n.id},l("a",{target:"_blank",href:`${W}play/gv${n.id}`},l("div",{className:"cover"},l("img",{src:on(n.content)})),l("div",{className:"title"},n.title))))))}t(8);var pn,dn,hn;t(9);pn=l((function(){return l("div",null,l(Y,null),l("div",{style:{textAlign:"center"}},l("div",{className:"call"},"@"+window.call[0]+"： "+window.call[1])),l("div",{className:"wrap",style:{display:"flex"}},l(rn,null),l(an,null)),l(sn,null),l(un,null),l(fn,null),l(cn,null))}),null),dn=document.body,z({tag:E,node:dn,props:{children:pn},done:hn})}],[[10,1]]]);