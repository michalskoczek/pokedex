(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),s=n.n(c),u=(n(12),n(1)),i=n.n(u),o=n(2),l=n(3);n(14);function p(e){return new Promise((function(t,n){fetch(e).then((function(e){return e.json()})).then((function(e){t(e)}))}))}function m(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(5),n(15);var v=function(e){var t=e.pokemon;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{className:"image-container__image",src:t.sprites.front_default})),r.a.createElement("div",{className:"description"},r.a.createElement("h5",{className:"description__title"},t.name.toUpperCase()),r.a.createElement("p",{className:"description__type"},t.types[0].type.name)))},d=(n(16),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}),h=(n(17),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title otto"},"Pokedex"))}),b=(n(18),function(e){return r.a.createElement("button",{className:"".concat(e.name),onClick:e.click},e.title.toUpperCase())}),E=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),u=Object(l.a)(s,2),f=u[0],E=u[1],x=Object(a.useState)(""),k=Object(l.a)(x,2),j=k[0],w=k[1],O=Object(a.useState)(!0),y=Object(l.a)(O,2),N=y[0],_=y[1],g="https://pokeapi.co/api/v2/pokemon";Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(g);case 2:return t=e.sent,E(t.next),w(t.previous),e.next=7,C(t.results);case 7:_(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var S=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.next=3,p(f);case 3:return t=e.sent,e.next=6,C(t.results);case 6:E(t.next),w(t.previous),_(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=2;break}return e.abrupt("return");case 2:return _(!0),e.next=5,p(j);case 5:return t=e.sent,e.next=8,C(t.results);case 8:E(t.next),w(t.previous),_(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t.url);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"buttons"},r.a.createElement(b,{title:"previous",name:"push_button red",click:P}),r.a.createElement(b,{title:"next",name:"push_button blue",click:S})),r.a.createElement("div",{className:"wrapper"},N?r.a.createElement(d,null):r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement(v,{key:e.id,pokemon:e})})))))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.10386b95.chunk.js.map