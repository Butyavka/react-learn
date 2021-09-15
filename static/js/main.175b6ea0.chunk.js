(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,a){},44:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(26),i=a.n(s),r=a(8),o=(a(34),a(0)),l=function(){return Object(o.jsx)("section",{className:"navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("nav",{className:"navigation__list",children:[Object(o.jsx)(r.b,{to:"/",className:"navigation__link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(o.jsx)(r.b,{to:"/about",className:"navigation__link",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})]})})})},j=(a(44),a(2)),u=a(10),m=a(15),b=a.n(m),d=(a(64),a.p+"static/media/gerald.9a634618.jpg");function p(e){e.target.src=d}var O=function(e){var t=e.id,a=e.year,n=e.title,c=e.summary,s=e.poster,i=e.genres;return Object(o.jsxs)(r.b,{to:{pathname:"/movie/".concat(t),state:{id:t,year:a,title:n,summary:c,poster:s,genres:i}},className:"movie",children:[Object(o.jsx)("img",{onError:function(e){return p(e)},src:s,alt:n,title:n,className:"movie__img"}),Object(o.jsxs)("div",{className:"movie__column",children:[Object(o.jsx)("h3",{className:"movie__title",children:n}),Object(o.jsx)("h5",{className:"movie__year",children:a}),Object(o.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(o.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(o.jsxs)("p",{className:"movie__summary",children:[c.slice(0,140),"..."]})]})]},t)},h=a(17),x=a.n(h),_=a(29),g=function(){var e=Object(_.a)(x.a.mark((function e(){var t,a,n=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:10,a=n.length>1&&void 0!==n[1]?n[1]:1,e.next=4,b.a.get("https://yts.mx/api/v2/list_movies.json?sort__by=rating",{params:{limit:t,page:a}});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=(a(66),function(e){var t=e.totalPages,a=e.page,n=e.setPage,c=function(e){for(var t=[],a=0;a<e&&!(a>9);a++)t.push(a+1);return t}(t);return Object(o.jsx)("div",{className:"pagination",children:c.map((function(e){return Object(o.jsx)("button",{onClick:function(){return n(e)},className:a===e?"pagination__button pagination__button--current":"pagination__button",children:e},e)}))})}),f=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),i=Object(u.a)(s,2),r=i[0],l=i[1],j=Object(n.useState)(0),m=Object(u.a)(j,2),b=m[0],d=m[1],p=Object(n.useState)(10),h=Object(u.a)(p,2),x=h[0],_=(h[1],Object(n.useState)(1)),f=Object(u.a)(_,2),N=f[0],y=f[1];return Object(n.useEffect)((function(){g(x,N).then((function(e){var t=e.data.data;l(t.movies);var a=t.movie_count;d(function(e,t){return Math.ceil(e/t)}(a,x)),c(!1)}))}),[N]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"container",children:[a?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader__text",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}):Object(o.jsx)("div",{className:"movies",children:r.map((function(e){return Object(o.jsx)(O,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))}),Object(o.jsx)(v,{totalPages:b,page:N,setPage:y})]})})},N=function(e){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("span",{className:"about__text",children:"\u042f \u0441\u0434\u0435\u043b\u0430\u043b\u0430 \u044d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u044f \u043c\u043e\u043b\u043e\u0434\u0435\u0447\u0438\u043a :3"})})},y=(a(67),function(e){var t=e.location.state;return Object(n.useEffect)((function(){void 0===t&&e.history.push("/")})),void 0===t?null:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"detail-page",children:[Object(o.jsx)("div",{className:"detail-page__img-box",children:Object(o.jsx)("img",{onError:function(e){return p(e)},src:t.poster,alt:t.title,title:t.title,className:"detail-page__img"})}),Object(o.jsxs)("div",{className:"detail-page__info",children:[Object(o.jsx)("h3",{className:"detail-page__title",children:t.title}),Object(o.jsx)("h5",{className:"detail-page__year",children:t.year}),Object(o.jsx)("ul",{className:"detail-page__genres",children:t.genres.map((function(e,t){return Object(o.jsx)("li",{className:"detail-page__genre",children:e},t)}))}),Object(o.jsx)("p",{className:"detail-page__summary",children:t.summary})]})]})})}),k=(a(68),a.p+"static/media/404.ecc6f277.png"),S=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("span",{className:"error",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(o.jsx)("img",{src:k,alt:"404"})]})},E=function(){return Object(o.jsxs)(j.d,{children:[Object(o.jsx)(j.b,{path:"/",exact:!0,component:f}),Object(o.jsx)(j.b,{path:"/about",component:N}),Object(o.jsx)(j.b,{path:"/movie/:id",component:y}),Object(o.jsx)(j.b,{path:"/error404",component:S}),Object(o.jsx)(j.a,{to:"/error404"})]})},w=function(){return Object(o.jsxs)(r.a,{children:[Object(o.jsx)(l,{}),Object(o.jsx)(E,{})]})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.175b6ea0.chunk.js.map