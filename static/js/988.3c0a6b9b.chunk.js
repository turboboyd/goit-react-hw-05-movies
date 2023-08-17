/*! For license information please see 988.3c0a6b9b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[988],{3240:function(t,e,r){r.d(e,{Z:function(){return s}});var n=r(2187),i=r(6355),o="ScrollToTopButton_scroll_to_top__QA0zP",a=r(184);function s(){return(0,a.jsx)(n.Z,{showUnder:160,children:(0,a.jsx)("span",{className:o,children:(0,a.jsx)(i.ZTc,{})})})}},7111:function(t,e,r){r.d(e,{Z:function(){return o}});var n="Section_section__Z2PLw",i=r(184);function o(t){return(0,i.jsx)("section",{className:n,children:t.children})}},3988:function(t,e,r){r.r(e),r.d(e,{default:function(){return O}});var n=r(5861),i=r(9439),o=r(2791),a=r(7689),s=r(1087),c=r(2036),l={movie_details:"MovieDetails_movie_details__hOZzX",movie_poster:"MovieDetails_movie_poster__Q3V4h",movie_info:"MovieDetails_movie_info__MBcuN",movie_title:"MovieDetails_movie_title__KIvYU",movie_meta:"MovieDetails_movie_meta__Y-6bL",movie_description:"MovieDetails_movie_description__hcIQS",vote_count:"MovieDetails_vote_count__y7Sv0",official_site:"MovieDetails_official_site__p8Qq2",title:"MovieDetails_title__cUGs9",details:"MovieDetails_details__TGlfg",details_wrap_description:"MovieDetails_details_wrap_description__BIaG+",details_wrap_title:"MovieDetails_details_wrap_title__q0wcJ",rating:"MovieDetails_rating__Vt2mI",details_wrap_date:"MovieDetails_details_wrap_date__ChMIW",details_text:"MovieDetails_details_text__OU1C-",button_back:"MovieDetails_button_back__kciEW"},u=r(2083),h="Poster_poster__evSwE",d=r(184);function f(t){var e=t.imageUrl,r=t.altText,n=t.homepageLink;return(0,d.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)("img",{className:h,src:e,alt:r,loading:"lazy"})})}var p={details_text:"GenreItem_details_text__fQhSI"};function _(t){var e=t.genre;return(0,d.jsx)("li",{className:p.item,children:(0,d.jsx)("p",{className:p.details_text,children:e.name})})}var v="GenresList_item_genres__LVp8h";function m(t){var e=t.genres;return(0,d.jsx)("ul",{className:v,children:e.map((function(t){return(0,d.jsx)(_,{genre:t},t.id)}))})}var g="DetailsLinks_list_link__f206k",y="DetailsLinks_details_link__6XnMv",x=r(5667);function w(){var t=function(){x.NY.scrollTo(800)};return(0,d.jsxs)("ul",{className:g,children:[(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{className:y,to:"cast",smooth:"true",onClick:t,children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{className:y,to:"reviews",smooth:"true",onClick:t,children:"Reviews"})}),(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{className:y,to:"trailer",smooth:"true",onClick:t,children:"Trailer"})})]})}function j(t){var e=t.company,r=e.id,n=e.name,i=e.logo_path;return i?(0,d.jsx)("li",{children:(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(i),alt:n,loading:"lazy"})},r):null}var b="ProductionCompaniesList_details_company__mjirX",L=function(t){var e=t.companies;return(0,d.jsx)("ul",{className:b,children:e.map((function(t){return(0,d.jsx)(j,{company:t},t.id)}))})},N=r(7111),k=r(966),E=r(3240),M=r(71);function D(){D=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(E){c=function(t,e,r){return t[e]=r}}function l(t,e,r,i){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),s=new N(i||[]);return n(a,"_invoke",{value:w(t,r,s)}),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(E){return{type:"throw",arg:E}}}t.wrap=l;var h={};function d(){}function f(){}function p(){}var _={};c(_,o,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(k([])));m&&m!==e&&r.call(m,o)&&(_=m);var g=p.prototype=d.prototype=Object.create(_);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function i(n,o,a,s){var c=u(t[n],t,o);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){i("next",t,a,s)}),(function(t){i("throw",t,a,s)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return i("throw",t,a,s)}))}s(c.arg)}var o;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return o=o?o.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return{value:void 0,done:!0}}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=j(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var i=u(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function k(t){if(t||""===t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return f.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:f,configurable:!0}),f.displayName=c(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new x(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),c(g,s,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function O(){var t,e,r=(0,a.UO)().movieId,h=(0,o.useState)({}),p=(0,i.Z)(h,2),_=p[0],v=p[1],g=(0,o.useState)(!0),y=(0,i.Z)(g,2),x=y[0],j=y[1],b=(0,a.TH)();(0,o.useEffect)((function(){function t(){return(t=(0,n.Z)(D().mark((function t(){var e;return D().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.Tq)(r);case 3:e=t.sent,v(e),j(!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error fetching data:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}r&&function(){t.apply(this,arguments)}()}),[r]);var O=_.poster_path?"https://image.tmdb.org/t/p/w500".concat(_.poster_path):u;return x?(0,d.jsx)(k.Z,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(N.Z,{children:[(0,d.jsx)(s.rU,{className:l.button_back,to:null!==(t=null===(e=b.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/",children:(0,d.jsx)(M.jUh,{size:20})}),(0,d.jsxs)("div",{className:l.details,children:[(0,d.jsx)(f,{imageUrl:O,altText:_.original_title,homepageLink:_.homepage}),(0,d.jsxs)("div",{className:l.details_wrap_description,children:[(0,d.jsxs)("div",{className:l.details_wrap_title,children:[(0,d.jsx)("h1",{className:l.title,children:_.original_title}),(0,d.jsx)("span",{className:l.rating,children:Math.round(10*parseFloat(_.vote_average))/10})]}),(0,d.jsxs)("div",{className:l.details_wrap_date,children:[(0,d.jsx)("p",{className:l.details_text,children:"Release:"}),(0,d.jsx)("span",{className:l.details_text,children:_.release_date}),(0,d.jsx)("div",{children:(0,d.jsx)(m,{genres:_.genres})})]}),(0,d.jsx)("span",{className:l.details_text,children:_.runtime}),(0,d.jsx)("span",{className:l.details_text,children:_.vote_count}),(0,d.jsx)("p",{className:l.details_text,children:_.homepage}),(0,d.jsx)("p",{className:l.details_text,children:_.overview}),(0,d.jsx)("div",{className:l.product_wrap,children:_.production_companies&&_.production_companies.length>0?(0,d.jsx)(L,{companies:_.production_companies}):(0,d.jsx)("p",{children:"No production companies available."})}),(0,d.jsx)(w,{}),(0,d.jsx)(E.Z,{})]})]})]}),(0,d.jsx)(N.Z,{children:(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)(k.Z,{}),children:(0,d.jsx)(a.j3,{})})})]})}}}]);
//# sourceMappingURL=988.3c0a6b9b.chunk.js.map