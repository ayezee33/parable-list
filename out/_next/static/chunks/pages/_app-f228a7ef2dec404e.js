(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(671)}])},3412:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return f}});let o="refresh",l="navigate",u="restore",i="server-patch",a="prefetch",s="fast-refresh",c="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6504:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(282),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3480:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(8754),o=n(5893),l=r._(n(7294)),u=n(7950),i=n(7387),a=n(6982),s=n(6921),c=n(7727),f=n(1973),d=n(6216),p=n(1722),h=n(6504),x=n(634),v=n(3412),b=new Set;function y(e,t,n,r,o,l){if(l||(0,i.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(b.has(o))return;b.add(o)}Promise.resolve(l?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let _=l.default.forwardRef(function(e,t){let n,r;let{href:a,as:b,children:_,prefetch:j=null,passHref:g,replace:w,shallow:O,scroll:E,locale:C,onClick:N,onMouseEnter:P,onTouchStart:T,legacyBehavior:k=!1,...A}=e;n=_,k&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let M=l.default.useContext(f.RouterContext),R=l.default.useContext(d.AppRouterContext),I=null!=M?M:R,L=!M,S=!1!==j,U=null===j?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,{href:F,as:K}=l.default.useMemo(()=>{if(!M){let e=m(a);return{href:e,as:b?m(b):e}}let[e,t]=(0,u.resolveHref)(M,a,!0);return{href:e,as:b?(0,u.resolveHref)(M,b):t||e}},[M,a,b]),H=l.default.useRef(F),D=l.default.useRef(K);k&&(r=l.default.Children.only(n));let V=k?r&&"object"==typeof r&&r.ref:t,[B,X,Y]=(0,p.useIntersection)({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(D.current!==K||H.current!==F)&&(Y(),D.current=K,H.current=F),B(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[K,V,F,Y,B]);l.default.useEffect(()=>{I&&X&&S&&y(I,F,K,{locale:C},{kind:U},L)},[K,F,X,C,S,null==M?void 0:M.locale,I,L,U]);let q={ref:Z,onClick(e){k||"function"!=typeof N||N(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,u,a,s,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,i.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:s,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?l.default.startTransition(d):d()}(e,I,F,K,w,O,E,C,L)},onMouseEnter(e){k||"function"!=typeof P||P(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(S||!L)&&y(I,F,K,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)},onTouchStart(e){k||"function"!=typeof T||T(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(S||!L)&&y(I,F,K,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)}};if((0,s.isAbsoluteUrl)(K))q.href=K;else if(!k||g||"a"===r.type&&!("href"in r.props)){let e=void 0!==C?C:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,h.getDomainLocale)(K,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);q.href=t||(0,x.addBasePath)((0,c.addLocale)(K,e,null==M?void 0:M.defaultLocale))}return k?l.default.cloneElement(r,q):(0,o.jsx)("a",{...A,...q,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(7294),o=n(9126),l="function"==typeof IntersectionObserver,u=new Map,i=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,s=a||!l,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(l){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},671:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893);n(9166);var o=n(1664),l=n.n(o),u=n(9239);function i(){return(0,r.jsx)("header",{className:"bg-white shadow-sm",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex justify-between h-16",children:[(0,r.jsx)("div",{className:"flex",children:(0,r.jsx)("div",{className:"flex-shrink-0 flex items-center",children:(0,r.jsxs)(l(),{href:"/",className:"flex items-center gap-2 text-2xl font-serif font-bold text-wine-900",children:[(0,r.jsx)(u.Z,{className:"w-7 h-7 text-wine-600"}),"Parable List"]})})}),(0,r.jsxs)("div",{className:"flex items-center space-x-6",children:[(0,r.jsx)(l(),{href:"/parables",className:"text-wine-600 hover:text-wine-900 transition-colors",children:"Parables"}),(0,r.jsx)(l(),{href:"/categories",className:"text-wine-600 hover:text-wine-900 transition-colors",children:"Inspiration"})]})]})})})}function a(){return(0,r.jsx)("footer",{className:"bg-white dark:bg-gray-800 shadow",children:(0,r.jsx)("div",{className:"container mx-auto px-4 py-6",children:(0,r.jsx)("div",{className:"text-center text-gray-600 dark:text-gray-300",children:(0,r.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Parable List. All rights reserved."]})})})})}function s(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,r.jsx)(i,{}),(0,r.jsx)("main",{className:"flex-grow container mx-auto px-4 py-8",children:t}),(0,r.jsx)(a,{})]})}function c(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(s,{children:(0,r.jsx)(t,{...n})})}},9166:function(){},1664:function(e,t,n){e.exports=n(3480)},9239:function(e,t,n){"use strict";var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"}))});t.Z=o}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(3035)}),_N_E=e.O()}]);