(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(26),i=a.n(n),r=a(8),l=a(2),j=a(1),o=function(e){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("span",{className:"about__text",children:"\u042f \u0441\u0434\u0435\u043b\u0430\u043b\u0430 \u044d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u044f \u043c\u043e\u043b\u043e\u0434\u0435\u0447\u0438\u043a :3"})})},m=a(14),d=a.n(m),u=a(27),b=a(16),h=a(28),x=a.n(h),O=(a(56),function(e){var t=e.id,a=e.year,s=e.title,c=e.summary,n=e.poster,i=e.genres;return Object(j.jsxs)(r.b,{to:{pathname:"/movie/".concat(t),state:{id:t,year:a,title:s,summary:c,poster:n,genres:i}},className:"movie",children:[Object(j.jsx)("img",{src:n,alt:s,title:s,className:"movie__img"}),Object(j.jsxs)("div",{className:"movie__column",children:[Object(j.jsx)("h3",{className:"movie__title",children:s}),Object(j.jsx)("h5",{className:"movie__year",children:a}),Object(j.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(j.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(j.jsxs)("p",{className:"movie__summary",children:[c.slice(0,140),"..."]})]})]},t)}),_=function(){var e=Object(s.useState)(!0),t=Object(b.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)([]),i=Object(b.a)(n,2),r=i[0],l=i[1],o=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,x.a.get("https://yts.mx/api/v2/list_movies.json?sort__by=rating");case 3:return e.next=5,e.sent.data.data.movies;case 5:e.t1=e.sent,(0,e.t0)(e.t1),c(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){o()}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("section",{className:"container",children:a?Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("span",{className:"loader__text",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}):Object(j.jsx)("div",{className:"movies",children:r.map((function(e){return Object(j.jsx)(O,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})})},p=(a(62),function(){return Object(j.jsx)("section",{className:"navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("nav",{className:"navigation__list",children:[Object(j.jsx)(r.b,{to:"/",className:"navigation__link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(j.jsx)(r.b,{to:"/about",className:"navigation__link",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})]})})})}),v=(a(63),function(e){var t=e.location.state;return Object(s.useEffect)((function(){void 0===t&&e.history.push("/")})),void 0===t?null:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"detail-page",children:[Object(j.jsx)("div",{className:"detail-page__img-box",children:Object(j.jsx)("img",{src:t.poster,alt:t.title,title:t.title,className:"detail-page__img"})}),Object(j.jsxs)("div",{className:"detail-page__info",children:[Object(j.jsx)("h3",{className:"detail-page__title",children:t.title}),Object(j.jsx)("h5",{className:"detail-page__year",children:t.year}),Object(j.jsx)("ul",{className:"detail-page__genres",children:t.genres.map((function(e,t){return Object(j.jsx)("li",{className:"detail-page__genre",children:e},t)}))}),Object(j.jsx)("p",{className:"detail-page__summary",children:t.summary})]})]})})}),g=(a(64),function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(p,{}),Object(j.jsx)(l.a,{path:"/",exact:!0,component:_}),Object(j.jsx)(l.a,{path:"/about",component:o}),Object(j.jsx)(l.a,{path:"/movie/:id",component:v})]})});i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.b1be18e1.chunk.js.map