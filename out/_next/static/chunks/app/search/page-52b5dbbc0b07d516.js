(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{2555:function(e,r,t){Promise.resolve().then(t.bind(t,5703))},5703:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return SearchPage}});var n=t(7437),s=t(2265),a=t(4033);function SearchPage(){let e=(0,a.useSearchParams)(),[r,t]=(0,s.useState)([]),[o,c]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let r=e.get("q");r&&(c(!0),t([]),c(!1))},[e]),(0,n.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Arama Sonu\xe7ları"}),o?(0,n.jsx)("div",{children:"Aranıyor..."}):r.length>0?(0,n.jsx)("div",{className:"grid gap-4",children:r.map(e=>(0,n.jsxs)("div",{className:"p-4 border rounded",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold",children:e.title}),(0,n.jsx)("p",{className:"text-gray-600",children:e.description})]},e.id))}):(0,n.jsx)("div",{children:"Sonu\xe7 bulunamadı."})]})}},622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(2265),s=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,t){var n,i={},l=null,u=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)a.call(r,n)&&!c.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:l,ref:u,props:i,_owner:o.current}}r.jsx=q,r.jsxs=q},7437:function(e,r,t){"use strict";e.exports=t(622)},4033:function(e,r,t){e.exports=t(94)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=2555)}),_N_E=e.O()}]);