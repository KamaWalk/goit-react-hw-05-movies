"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,t,n){n.r(t);var r=n(439),c=n(791),i=n(689),s=n(455),a=n(184);t.default=function(){var e=(0,i.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),o=n[0],h=n[1],u=(0,c.useState)(!1),l=(0,r.Z)(u,2),d=l[0],f=l[1];return(0,c.useEffect)((function(){f(!0),fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=35349a736eae14c1caed3005a307c333")).then((function(e){return e.json()})).then((function(e){h(e.results),f(!1)})).catch((function(e){console.error("Error fetching reviews:",e),f(!1)}))}),[e]),d?(0,a.jsx)(s.Z,{}):0===o.length?(0,a.jsx)("div",{children:"No reviews available."}):(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Reviews"}),o.map((function(e){return(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:e.author}),(0,a.jsx)("p",{children:e.content})]},e.id)}))]})}}}]);
//# sourceMappingURL=186.46894657.chunk.js.map