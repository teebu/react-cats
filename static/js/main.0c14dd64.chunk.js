(this["webpackJsonpreact-cats"]=this["webpackJsonpreact-cats"]||[]).push([[0],{12:function(t,e,a){},129:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a(1),r=a.n(n),s=a(32),i=a.n(s),o=(a(74),a(12),a.p+"static/media/404-cat.bef5204d.jpg"),j=a(3),h=a(33),l=a(27),d=a.n(l),u=a(7),b=a.n(u);function x(t,e,a,c){var n=Math.min(a/t,c/e);return{width:t*n,height:e*n}}var O=function(t){var e,a=t.src,n=t.width,r=t.height,s=t.maxWidth,i=t.maxHeight,o=t.style,j=t.className,l=t.alt,u=t.delay,O=t.placeholder,f=Object(h.a)({width:x(n,r,s,i).width,height:x(n,r,s,i).height,maxWidth:s,maxHeight:i},o);e=f,f=b.a.pickBy(e,b.a.identity);var p=Object(c.jsx)("div",{className:"placeHolder animate",style:f});return Object(c.jsxs)(c.Fragment,{children:[O,Object(c.jsx)(d.a,{delay:u,src:a,placeholder:"",children:function(t,e){return e?O||p:Object(c.jsx)("img",{src:t,alt:l,className:j,style:f})}})]})};var f=function(){return Object(c.jsxs)("nav",{className:"nav",children:[Object(c.jsx)("h3",{children:Object(c.jsx)(j.b,{to:"/",children:Object(c.jsx)(O,{style:{width:70,height:63,borderRadius:"30px",display:"inline-block"},className:"header-logo",delay:1e3,src:"./cat_logo.png",alt:"cat"})})}),Object(c.jsxs)("ul",{className:"nav-links",children:[Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/about",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/cats",children:"Cats"})}),Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/breeds",children:"Breeds"})}),Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/facts",children:"Facts"})})]})]})},p=a(4),m=a(5),v=a.n(m),g=a(10);function w(t,e,a,c){var n=Math.min(a/t,c/e);return{width:t*n,height:e*n}}var y=function(t){var e=t.maxWidth,a=void 0===e?200:e,r=t.maxHeight,s=void 0===r?200:r,i=t.borderRadius,o=void 0===i?"90px":i,l=t.delay,d=void 0===l?100:l;Object(n.useEffect)((function(){k(),console.log("fetchCatData")}),[]);var u=Object(n.useState)([{url:null}]),b=Object(p.a)(u,2),x=b[0],f=b[1],m=Object(n.useState)(!1),y=Object(p.a)(m,2),k=(y[0],y[1],function(){var t=Object(g.a)(v.a.mark((function t(){var e,a,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={"x-api-key":"61ca5f8e-9e7a-4469-a560-d88fe48a9eb6"},t.next=3,fetch("https://api.thecatapi.com/v1/images/search?limit=1&order=random&size=medium&",{headers:e});case 3:return a=t.sent,t.next=6,a.json();case 6:c=t.sent,f(c),console.log("cat image set");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),S={width:w(x[0].width||a,x[0].height,a,s).width,height:w(x[0].width||a,x[0].height,a,s).height,maxWidth:a,maxHeight:s,borderRadius:o};return Object(c.jsx)("div",{children:Object(c.jsx)(j.b,{to:"/cat/".concat(x[0].id),className:"shadowlink",children:Object(c.jsx)(O,{style:Object(h.a)({width:x[0].width,height:x[0].height},S),delay:d,src:x[0].url,alt:"cat"})})})},k=a(28),S=a.n(k),N=(a(68),function(){var t=Object(n.useState)(Date.now()),e=Object(p.a)(t,2),a=(e[0],e[1],function(){return Object(c.jsx)(S.a,{delay:15e3,children:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:"Meow!"}),Object(c.jsx)(y,{maxHeight:600,maxWidth:600,borderRadius:"12px",delay:500},Date.now())]})}})});return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"React Cats Global!"}),Object(c.jsx)(a,{})]})});var R=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"About"}),Object(c.jsx)("div",{children:Object(c.jsx)(y,{})}),Object(c.jsx)("div",{className:"intro",children:"A simple project to play around with React, React Routes and CSS."})]})};var C=function(t){var e=function(t){return b.a.map(t,(function(t){var e=[];return b.a.forOwn(t,(function(t,a){t&&e.push(Object(c.jsx)("div",{children:"".concat(a,": ").concat(t)}))})),e}))}(t.data);return Object(c.jsx)("ul",{className:"fancy-list",children:e.map((function(t){return Object(c.jsx)("li",{children:t})}))})};var W=function(){var t=Object(n.useState)([]),e=Object(p.a)(t,2),a=e[0],r=e[1];Object(n.useEffect)((function(){i()}),[]);var s,i=function(){var t=Object(g.a)(v.a.mark((function t(){var e,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://catfact.ninja/facts?limit=15&max_length=140");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,r(a.data);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Random Cat Facts"}),Object(c.jsx)(C,{data:(s=a,b.a.map(s,(function(t){return b.a.pick(t,["fact"])})))})]})};var H=function(){var t=Object(n.useState)([]),e=Object(p.a)(t,2),a=e[0],r=e[1];Object(n.useEffect)((function(){i()}),[]);var s,i=function(){var t=Object(g.a)(v.a.mark((function t(){var e,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://catfact.ninja/breeds?limit=30");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,r(a.data);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Cat Breeds"}),Object(c.jsx)(C,{data:(s=a,b.a.map(s,(function(t){return b.a.pick(t,["breed","country","pattern"])})))})]})};var D=function(t){var e=t.match,a=Object(n.useState)({url:null}),r=Object(p.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)(!1),j=Object(p.a)(o,2);return j[0],j[1],Object(n.useEffect)((function(){(function(){var t=Object(g.a)(v.a.mark((function t(){var a,c,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={"x-api-key":"61ca5f8e-9e7a-4469-a560-d88fe48a9eb6"},t.next=3,fetch("https://api.thecatapi.com/v1/images/".concat(e.params.id),{headers:a});case 3:return c=t.sent,t.next=6,c.json();case 6:n=t.sent,console.log(n),console.log("catdetails"),i(n);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),console.log("fetchCatData")}),[e]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Cat Details"}),Object(c.jsx)("img",{src:s.url,style:{maxWidth:"600px",maxHeight:"600px"},alt:""}),Object(c.jsx)("div",{children:s.url})]})};var E=function(t){var e=t.size,a=void 0===e?5:e,r=Object(n.useState)([{url:null}]),s=Object(p.a)(r,2),i=s[0],o=s[1],h=Object(n.useState)(!1),l=Object(p.a)(h,2);return l[0],l[1],Object(n.useEffect)((function(){(function(){var t=Object(g.a)(v.a.mark((function t(){var e,c,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={"x-api-key":"61ca5f8e-9e7a-4469-a560-d88fe48a9eb6"},t.next=3,fetch("https://api.thecatapi.com/v1/images/search?limit=".concat(a,"&order=random&size=small"),{headers:e});case 3:return c=t.sent,t.next=6,c.json();case 6:n=t.sent,o(n),console.log(n);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),console.log("fetchCatData")}),[a]),Object(c.jsx)("ul",{className:"fancy-img-list shadowlink",children:i.map((function(t,e){return Object(c.jsx)("li",{style:{borderRadius:"120px"},children:Object(c.jsx)(j.b,{to:"/cat/".concat(t.id),children:Object(c.jsx)(O,{width:t.width,height:t.height,maxWidth:200,maxHeight:200,style:{borderRadius:"90px"},delay:100,src:t.url,alt:"cat"})})})}))})},B=a(15);var z=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(j.b,{to:"/",children:[Object(c.jsx)("img",{src:o,alt:"404 car",style:{display:"block",margin:"40px auto",width:"40%"}}),"You're lost. Go home!"]})})},A=function(){return Object(c.jsxs)(j.a,{basename:"/",children:[" ",Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(f,{}),Object(c.jsxs)(B.c,{children:[Object(c.jsx)(B.a,{path:"/",exact:!0,component:N}),Object(c.jsx)(B.a,{path:"/about",exact:!0,component:R}),Object(c.jsx)(B.a,{path:"/cats",exact:!0,children:Object(c.jsx)(E,{size:15})}),Object(c.jsx)(B.a,{path:"/breeds",component:H}),Object(c.jsx)(B.a,{path:"/facts",component:W}),Object(c.jsx)(B.a,{path:"/cat/:id",exact:!0,component:D}),Object(c.jsx)(B.a,{component:z})]})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},74:function(t,e,a){}},[[129,1,2]]]);
//# sourceMappingURL=main.0c14dd64.chunk.js.map