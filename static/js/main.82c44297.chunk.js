(this["webpackJsonpreact-cats"]=this["webpackJsonpreact-cats"]||[]).push([[0],{25:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),i=(a(30),a(9),a(2)),s=a(15),o=a(14),u=a.n(o);function m(e,t,a,n){var c=Math.min(a/e,n/t);return{width:e*c,height:t*c}}var h=function(e){var t=e.src,a=e.width,n=e.height,r=e.maxWidth,l=e.maxHeight,i=e.style,o=e.className,h=e.alt,d=e.delay,f=e.placeholder,p=Object(s.a)({width:m(a,n,r,l).width,height:m(a,n,r,l).height,maxWidth:r,maxHeight:l},i),v=c.a.createElement("div",{className:"placeHolder animate",style:p});return c.a.createElement(c.a.Fragment,null,f,c.a.createElement(u.a,{delay:d,src:t,placeholder:""},(function(e,t){return t?f||v:c.a.createElement("img",{src:e,alt:h,className:o,style:Object(s.a)({},i,{},p)})})))};var d=function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("h3",null,c.a.createElement(i.b,{to:"/"},c.a.createElement(h,{style:{width:70,height:63,borderRadius:"30px",display:"inline-block"},className:"header-logo",delay:1e3,src:"/cat_logo.png",alt:"cat"}))),c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(i.b,{to:"/about"},"About")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/cats"},"Cats")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/breeds"},"Breeds")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/facts"},"Facts"))))},f=a(3),p=a.n(f),v=a(7),E=a(4);function b(e,t,a,n){var c=Math.min(a/e,n/t);return{width:e*c,height:t*c}}var g=function(e){var t=e.maxWidth,a=void 0===t?200:t,r=e.maxHeight,l=void 0===r?200:r,o=e.borderRadius,u=void 0===o?"90px":o,m=e.delay,d=void 0===m?100:m;Object(n.useEffect)((function(){O(),console.log("fetchCatData")}),[]);var f=Object(n.useState)([{url:null}]),g=Object(E.a)(f,2),x=g[0],j=g[1],w=Object(n.useState)(!1),y=Object(E.a)(w,2),O=(y[0],y[1],function(){var e=Object(v.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={"x-api-key":"61ca5f8e-9e7a-4469-a560-d88fe48a9eb6"},e.next=3,fetch("https://api.thecatapi.com/v1/images/search?limit=1&order=random&size=medium&",{headers:t});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,j(n),console.log(n),console.log("cats");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),k={width:b(x[0].width||a,x[0].height,a,l).width,height:b(x[0].width||a,x[0].height,a,l).height,maxWidth:a,maxHeight:l,borderRadius:u};return c.a.createElement("div",null,c.a.createElement(i.b,{to:"/cat/".concat(x[0].id),className:"shadowlink"},c.a.createElement(h,{style:Object(s.a)({width:x[0].width,height:x[0].height},k),delay:d,src:x[0].url,alt:"cat"})))};var x=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"About"),c.a.createElement("div",null,c.a.createElement(g,null)),c.a.createElement("div",{className:"intro"},"A simple project to play around with React, React Routes and CSS."))},j=a(10),w=a.n(j);var y=function(e){var t=function(e){return w.a.map(e,(function(e){var t=[];return w.a.forOwn(e,(function(e,a){e&&t.push(c.a.createElement("div",null,"".concat(a,": ").concat(e)))})),t}))}(e.data);return c.a.createElement("ul",{className:"fancy-list"},t.map((function(e){return c.a.createElement("li",null,e)})))};var O=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){i()}),[]);var l,i=function(){var e=Object(v.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://catfact.ninja/facts?limit=15&max_length=140");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("h1",null,"Random Cat Facts"),c.a.createElement(y,{data:(l=a,w.a.map(l,(function(e){return w.a.pick(e,["fact"])})))}))};var k=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){i()}),[]);var l,i=function(){var e=Object(v.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://catfact.ninja/breeds?limit=30");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("h1",null,"Cat Breeds"),c.a.createElement(y,{data:(l=a,w.a.map(l,(function(e){return w.a.pick(e,["breed","country","pattern"])})))}))};var N=function(e){var t=e.match,a=Object(n.useState)({url:null}),r=Object(E.a)(a,2),l=r[0],i=r[1],s=Object(n.useState)(!1),o=Object(E.a)(s,2);return o[0],o[1],Object(n.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){var a,n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={"x-api-key":"61ca5f8e-9e7a-4469-a560-d88fe48a9eb6"},e.next=3,fetch("https://api.thecatapi.com/v1/images/".concat(t.params.id),{headers:a});case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,console.log(c),console.log("catdetails"),i(c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log("fetchCatData")}),[t]),c.a.createElement("div",null,c.a.createElement("h1",null,"Cat Details"),c.a.createElement("img",{src:l.url,style:{maxWidth:"600px",maxHeight:"600px"},alt:""}),c.a.createElement("div",null,l.url))};var S=function(e){var t=e.size,a=void 0===t?5:t,r=Object(n.useState)([{url:null}]),l=Object(E.a)(r,2),s=l[0],o=l[1],u=Object(n.useState)(!1),m=Object(E.a)(u,2);return m[0],m[1],Object(n.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){var t,n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={"x-api-key":"61ca5f8e-9e7a-4469-a560-d88fe48a9eb6"},e.next=3,fetch("https://api.thecatapi.com/v1/images/search?limit=".concat(a,"&order=random&size=small"),{headers:t});case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,o(c),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log("fetchCatData")}),[a]),c.a.createElement("ul",{className:"fancy-img-list shadowlink"},s.map((function(e,t){return c.a.createElement("li",{style:{borderRadius:"120px"}},c.a.createElement(i.b,{to:"/cat/".concat(e.id)},c.a.createElement(h,{width:e.width,height:e.height,maxWidth:240,maxHeight:240,style:{borderRadius:"90px"},delay:100,src:e.url,alt:"cat"})))})))},C=a(11);var R=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Cats"),c.a.createElement(g,{maxHeight:600,maxWidth:600,borderRadius:"12px",delay:500}),c.a.createElement("div",{className:"intro"},"Click ",c.a.createElement(i.b,{to:"/facts"},"facts")," to see random facts about cats."))},W=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(C.c,null,c.a.createElement(C.a,{path:"/",exact:!0,component:R}),c.a.createElement(C.a,{path:"/about",exact:!0,component:x}),c.a.createElement(C.a,{path:"/cats",exact:!0},c.a.createElement(S,{size:15})),c.a.createElement(C.a,{path:"/breeds",component:k}),c.a.createElement(C.a,{path:"/facts",component:O}),c.a.createElement(C.a,{path:"/cat/:id",exact:!0,component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){}},[[25,1,2]]]);
//# sourceMappingURL=main.82c44297.chunk.js.map