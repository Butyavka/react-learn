(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(25),i=n.n(s),r=n(8),o=n(9),l=(n(34),n(35),n(0)),j=function(){return Object(l.jsxs)("nav",{className:"navigation__list",children:[Object(l.jsx)(o.b,{to:"/",className:"navigation__link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(l.jsx)(o.b,{to:"/about",className:"navigation__link",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})]})},u=function(e){var t=e.buttonClass,n=e.text,a=e.onClick;return Object(l.jsx)("button",{onClick:a,className:t,children:n})},m=Object(a.createContext)(null),b=function(){var e=Object(a.useContext)(m),t=(e.isAuth,e.setIsAuth);return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"header__content",children:[Object(l.jsx)(j,{}),Object(l.jsx)(u,{onClick:function(){t(!1),localStorage.removeItem("auth")},buttonClass:"header__button",text:"\u0412\u044b\u0439\u0442\u0438"})]})})})},d=(n(45),n(2)),h=(n(46),n.p+"static/media/gerald.9a634618.jpg");function p(e){e.target.src=h}var x=function(e){var t=e.location.state;return Object(a.useEffect)((function(){void 0===t&&e.history.push("/")})),void 0===t?null:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"detail-page",children:[Object(l.jsx)("div",{className:"detail-page__img-box",children:Object(l.jsx)("img",{onError:function(e){return p(e)},src:t.poster,alt:t.title,title:t.title,className:"detail-page__img"})}),Object(l.jsxs)("div",{className:"detail-page__info",children:[Object(l.jsx)("h3",{className:"detail-page__title",children:t.title}),Object(l.jsx)("h5",{className:"detail-page__year",children:t.year}),Object(l.jsx)("ul",{className:"detail-page__genres",children:t.genres.map((function(e,t){return Object(l.jsx)("li",{className:"detail-page__genre",children:e},t)}))}),Object(l.jsx)("p",{className:"detail-page__summary",children:t.summary})]})]})})},O=function(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("span",{className:"about__text",children:"\u042f \u0441\u0434\u0435\u043b\u0430\u043b\u0430 \u044d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u044f \u043c\u043e\u043b\u043e\u0434\u0435\u0447\u0438\u043a :3"})})},_=(n(47),n.p+"static/media/404.ecc6f277.png"),f=function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("span",{className:"error",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(l.jsx)("img",{src:_,alt:"404"})]})},g=(n(48),function(e){var t=e.id,n=e.year,a=e.title,c=e.summary,s=e.poster,i=e.genres;return Object(l.jsxs)(o.b,{to:{pathname:"/movie/".concat(t),state:{id:t,year:n,title:a,summary:c,poster:s,genres:i}},className:"movie",children:[Object(l.jsx)("img",{onError:function(e){return p(e)},src:s,alt:a,title:a,className:"movie__img"}),Object(l.jsxs)("div",{className:"movie__column",children:[Object(l.jsx)("h3",{className:"movie__title",children:a}),Object(l.jsx)("h5",{className:"movie__year",children:n}),Object(l.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(l.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[c.slice(0,140),"..."]})]})]},t)}),v=n(16),N=n.n(v),y=n(28),C=n(29),S=n.n(C),k=function(){var e=Object(y.a)(N.a.mark((function e(){var t,n,a=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:10,n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=4,S.a.get("https://yts.mx/api/v2/list_movies.json?sort__by=rating",{params:{limit:t,page:n}});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=(n(69),function(e){var t=e.totalPages,n=e.page,a=e.setPage,c=function(e){for(var t=[],n=0;n<e&&!(n>9);n++)t.push(n+1);return t}(t);return Object(l.jsx)("div",{className:"pagination",children:c.map((function(e){return Object(l.jsx)("button",{onClick:function(){return a(e)},className:n===e?"pagination__button pagination__button--current":"pagination__button",children:e},e)}))})}),A=(n(70),function(){return Object(l.jsx)("span",{className:"loader__text",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}),I=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),i=Object(r.a)(s,2),o=i[0],j=i[1],u=Object(a.useState)(0),m=Object(r.a)(u,2),b=m[0],d=m[1],h=Object(a.useState)(40),p=Object(r.a)(h,2),x=p[0],O=(p[1],Object(a.useState)(1)),_=Object(r.a)(O,2),f=_[0],v=_[1],N=Object(a.useRef)();return Object(a.useEffect)((function(){c(!0),k(x,f).then((function(e){var t=e.data.data;j(t.movies);var n=t.movie_count;d(function(e,t){return Math.ceil(e/t)}(n,x)),c(!1)}))}),[f]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"container",children:[n&&Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)(A,{})}),Object(l.jsxs)("div",{className:"movies",children:[o.map((function(e){return Object(l.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)})),Object(l.jsx)("div",{ref:N,className:"hidden"})]}),Object(l.jsx)(P,{totalPages:b,page:f,setPage:v})]})})},E=(n(71),function(e){var t=e.inputClass,n=e.inputPlaceholder;return Object(l.jsx)("input",{type:"text",className:t,placeholder:n})}),w=[{path:"/react-learn",component:I,exact:!0},{path:"/about",component:O,exact:!0},{path:"/movie/:id",component:x,exact:!0},{path:"/error404",component:f,exact:!0},{path:"/about",component:O,exact:!0}],J=[{path:"/login",component:function(){var e=Object(a.useContext)(m),t=(e.isAuth,e.setIsAuth);return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(!0),localStorage.setItem("auth","true")},className:"login__form",children:[Object(l.jsx)(E,{inputClass:"login__input",inputPlaceholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d"}),Object(l.jsx)(E,{inputClass:"login__input",inputPlaceholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(l.jsx)(u,{buttonClass:"login__button",text:"\u0412\u043e\u0439\u0442\u0438"})]})})},exact:!0}],L=function(){var e=Object(a.useContext)(m),t=e.isAuth;return e.isLoading?Object(l.jsx)(A,{}):t?Object(l.jsxs)(d.d,{children:[w.map((function(e){return Object(l.jsx)(d.b,{path:e.path,exact:e.exact,component:e.component},e.path)})),Object(l.jsx)(d.a,{from:"/login",to:"/"}),Object(l.jsx)(d.a,{from:"/react-learn",to:"/"}),Object(l.jsx)(d.a,{to:"/error404"})]}):Object(l.jsxs)(d.d,{children:[J.map((function(e){return Object(l.jsx)(d.b,{path:e.path,exact:e.exact,component:e.component},e.path)})),Object(l.jsx)(d.a,{to:"/login"})]})},M=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!0),i=Object(r.a)(s,2),j=i[0],u=i[1];return Object(a.useEffect)((function(){localStorage.getItem("auth")&&c(!0),u(!1)})),Object(l.jsx)(m.Provider,{value:{isAuth:n,setIsAuth:c,isLoading:j},children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(L,{})]})})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.b1604786.chunk.js.map