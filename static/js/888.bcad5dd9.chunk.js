"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{888:function(e,s,t){t.r(s),t.d(s,{default:function(){return u}});var i=t(439),n=t(791),a=t(689),r=t(87),o=t(417),c="MovieDetails_movieDetailsDiv__RHHN2",l="MovieDetails_goBackButton__uWJv2",d="MovieDetails_movieDetails__EqwEX",v="MovieDetails_movieDetailsImg__syxsK",h="MovieDetails_movieDetailsDescr__MQeA8",m=t(184);var u=function(){var e,s=(0,a.UO)().movieId,t=(0,n.useState)(null),u=(0,i.Z)(t,2),p=u[0],_=u[1],f=(0,n.useState)(!1),j=(0,i.Z)(f,2),x=j[0],g=j[1],D=(0,a.s0)(),k=null===(e=(0,a.TH)().state)||void 0===e?void 0:e.from;return(0,n.useEffect)((function(){g(!0),fetch("https://api.themoviedb.org/3/movie/".concat(s,"?api_key=4fed94ef3da30bdec32e141a4ca83f86")).then((function(e){return e.json()})).then((function(e){_(e),g(!1)})).catch((function(e){console.error("Error fetching movie details:",e),g(!1)}))}),[s]),(0,m.jsxs)("div",{className:c,children:[(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)("button",{className:l,onClick:function(){D("Movies"===k?"/movies":"/")},children:"Back"}),(0,m.jsx)("img",{className:v,src:p&&p.poster_path?"https://image.tmdb.org/t/p/w500".concat(p.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:p?p.title:""})]}),(0,m.jsx)("div",{className:h,children:x?(0,m.jsx)(o.Z,{}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h1",{children:p?p.title:""}),(0,m.jsxs)("p",{children:[(0,m.jsx)("strong",{children:"Overview:"})," ",p?p.overview:""]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("strong",{children:"Genres:"})," ",p&&p.genres&&p.genres.map((function(e){return e.name})).join(", ")]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("strong",{children:"Release Date:"})," ",p?p.release_date:""]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("strong",{children:"Rating:"})," ",p?p.vote_average:""," / 10"]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(r.rU,{to:"cast",state:{from:k},children:"Cast"})," ","|"," ",(0,m.jsx)(r.rU,{to:"reviews",state:{from:k},children:"Reviews"})]}),(0,m.jsx)(a.j3,{loading:x})]})})]})}}}]);
//# sourceMappingURL=888.bcad5dd9.chunk.js.map