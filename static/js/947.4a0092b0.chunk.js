"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{947:function(e,s,t){t.r(s);var i=t(439),n=t(791),r=t(689),a=t(87),o=t(455),c=t(184);s.default=function(){var e,s=(0,r.UO)().movieId,t=(0,n.useState)(null),l=(0,i.Z)(t,2),d=l[0],h=l[1],m=(0,n.useState)(!1),v=(0,i.Z)(m,2),p=v[0],j=v[1],u=(0,r.s0)(),f=null===(e=(0,r.TH)().state)||void 0===e?void 0:e.from;return(0,n.useEffect)((function(){j(!0),fetch("https://api.themoviedb.org/3/movie/".concat(s,"?api_key=4fed94ef3da30bdec32e141a4ca83f86")).then((function(e){return e.json()})).then((function(e){h(e),j(!1)})).catch((function(e){console.error("Error fetching movie details:",e),j(!1)}))}),[s]),(0,c.jsxs)("div",{className:"movie-details-div",children:[(0,c.jsxs)("div",{className:"movie-details",children:[(0,c.jsx)("button",{className:"go-back-button",onClick:function(){u("Movies"===f?"/movies":"/")},children:"Back"}),(0,c.jsx)("img",{className:"movie-details-img",src:d&&d.poster_path?"https://image.tmdb.org/t/p/w500".concat(d.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:d?d.title:""})]}),(0,c.jsx)("div",{className:"movie-details-descr",children:p?(0,c.jsx)(o.Z,{}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:d?d.title:""}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"Overview:"})," ",d?d.overview:""]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"Genres:"})," ",d&&d.genres&&d.genres.map((function(e){return e.name})).join(", ")]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"Release Date:"})," ",d?d.release_date:""]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"Rating:"})," ",d?d.vote_average:""," / 10"]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(a.rU,{to:"cast",state:{from:f},children:"Cast"})," ","|"," ",(0,c.jsx)(a.rU,{to:"reviews",state:{from:f},children:"Reviews"})]}),(0,c.jsx)(r.j3,{loading:p})]})})]})}}}]);
//# sourceMappingURL=947.4a0092b0.chunk.js.map