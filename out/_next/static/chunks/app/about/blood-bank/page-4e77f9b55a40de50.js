(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[644],{3681:function(e,n,t){Promise.resolve().then(t.bind(t,5391))},5391:function(e,n,t){"use strict";t.r(n);var a=t(7437),o=t(2265),r=t(3159),l=t(8834),s=t.n(l),i=t(2621);let d=[{type:"A Rh+",donors:45,needed:!1},{type:"A Rh-",donors:12,needed:!0},{type:"B Rh+",donors:28,needed:!1},{type:"B Rh-",donors:8,needed:!0},{type:"0 Rh+",donors:52,needed:!1},{type:"0 Rh-",donors:15,needed:!0},{type:"AB Rh+",donors:18,needed:!1},{type:"AB Rh-",donors:5,needed:!0}],c=[{icon:(0,a.jsx)(r.$0H,{}),title:"Toplam Bağış\xe7ı",count:183,description:"Kayıtlı kan bağış\xe7ısı"},{icon:(0,a.jsx)(r.I$,{}),title:"Acil İhtiya\xe7",count:12,description:"Acil kan ihtiyacı"},{icon:(0,a.jsx)(r.uQe,{}),title:"Başarılı Eşleşme",count:156,description:"Tamamlanan bağış"}];n.default=()=>{let[e,n]=(0,o.useState)({name:"",bloodType:"",phone:"",email:"",isEmergency:!1,message:""}),handleInputChange=e=>{let{name:t,value:a,type:o,checked:r}=e.target;n(e=>({...e,[t]:"checkbox"===o?r:a}))};return(0,a.jsxs)("div",{className:s().bloodBankContent,children:[(0,a.jsx)(i.default,{}),(0,a.jsx)("h1",{children:"Kan Bankası"}),(0,a.jsx)("div",{className:s().introduction,children:(0,a.jsx)("p",{children:"Derneğimizin kan bankası sistemi, k\xf6y\xfcm\xfcz ve \xe7evre k\xf6ylerdeki kan ihtiya\xe7larını karşılamak i\xe7in g\xf6n\xfcll\xfc bağış\xe7ılarla ihtiya\xe7 sahiplerini bir araya getirmektedir."})}),(0,a.jsx)("div",{className:s().statistics,children:c.map((e,n)=>(0,a.jsxs)("div",{className:s().statCard,children:[(0,a.jsx)("div",{className:s().icon,children:e.icon}),(0,a.jsx)("h2",{children:e.title}),(0,a.jsx)("div",{className:s().count,children:e.count}),(0,a.jsx)("p",{children:e.description})]},n))}),(0,a.jsxs)("div",{className:s().bloodGroups,children:[(0,a.jsx)("h2",{children:"Kan Grupları ve Bağış\xe7ı Sayıları"}),(0,a.jsx)("div",{className:s().groupsGrid,children:d.map((e,n)=>(0,a.jsxs)("div",{className:"".concat(s().groupCard," ").concat(e.needed?s().needed:""),children:[(0,a.jsx)("h3",{children:e.type}),(0,a.jsx)("div",{className:s().donorCount,children:e.donors}),(0,a.jsx)("p",{children:"Kayıtlı Bağış\xe7ı"}),e.needed&&(0,a.jsx)("div",{className:s().needBadge,children:"İhtiya\xe7 Var"})]},n))})]}),(0,a.jsxs)("div",{className:s().requestForm,children:[(0,a.jsx)("h2",{children:"Kan Talebi / Bağış\xe7ı Formu"}),(0,a.jsxs)("form",{onSubmit:n=>{n.preventDefault(),console.log("Form data:",e)},children:[(0,a.jsxs)("div",{className:s().formGroup,children:[(0,a.jsx)("label",{htmlFor:"name",children:"Ad Soyad"}),(0,a.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:handleInputChange,required:!0})]}),(0,a.jsxs)("div",{className:s().formGroup,children:[(0,a.jsx)("label",{htmlFor:"bloodType",children:"Kan Grubu"}),(0,a.jsxs)("select",{id:"bloodType",name:"bloodType",value:e.bloodType,onChange:handleInputChange,required:!0,children:[(0,a.jsx)("option",{value:"",children:"Se\xe7iniz"}),d.map((e,n)=>(0,a.jsx)("option",{value:e.type,children:e.type},n))]})]}),(0,a.jsxs)("div",{className:s().formGroup,children:[(0,a.jsx)("label",{htmlFor:"phone",children:"Telefon"}),(0,a.jsx)("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:handleInputChange,required:!0})]}),(0,a.jsxs)("div",{className:s().formGroup,children:[(0,a.jsx)("label",{htmlFor:"email",children:"E-posta"}),(0,a.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:handleInputChange,required:!0})]}),(0,a.jsx)("div",{className:s().formGroup,children:(0,a.jsxs)("label",{className:s().checkboxLabel,children:[(0,a.jsx)("input",{type:"checkbox",name:"isEmergency",checked:e.isEmergency,onChange:handleInputChange}),"Acil İhtiya\xe7"]})}),(0,a.jsxs)("div",{className:s().formGroup,children:[(0,a.jsx)("label",{htmlFor:"message",children:"Mesaj"}),(0,a.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:handleInputChange,rows:"4"})]}),(0,a.jsx)("button",{type:"submit",className:s().submitButton,children:"G\xf6nder"})]})]}),(0,a.jsxs)("div",{className:s().info,children:[(0,a.jsx)("h2",{children:"\xd6nemli Bilgiler"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Kan bağışı yapmak i\xe7in en az 50 kg ağırlığında olmalısınız."}),(0,a.jsx)("li",{children:"Son 3 ay i\xe7inde kan bağışı yapmamış olmalısınız."}),(0,a.jsx)("li",{children:"18-65 yaş aralığında olmalısınız."}),(0,a.jsx)("li",{children:"Kronik bir hastalığınız olmamalıdır."}),(0,a.jsx)("li",{children:"Acil durumlarda 7/24 kan bankası koordinat\xf6r\xfcm\xfcze ulaşabilirsiniz."})]})]})]})}},2621:function(e,n,t){"use strict";t.r(n);var a=t(7437),o=t(4033),r=t(3159),l=t(5457),s=t.n(l);n.default=()=>{let e=(0,o.useRouter)();return(0,a.jsxs)("button",{onClick:()=>e.back(),className:s().backButton,"aria-label":"Geri D\xf6n",children:[(0,a.jsx)(r.x_l,{}),(0,a.jsx)("span",{children:"Geri D\xf6n"})]})}},8834:function(e){e.exports={bloodBankContent:"BloodBankContent_bloodBankContent__bkS1g",introduction:"BloodBankContent_introduction__UBOL_",statistics:"BloodBankContent_statistics__9HkaI",statCard:"BloodBankContent_statCard__MlcBU",icon:"BloodBankContent_icon__n_C90",count:"BloodBankContent_count__dLNBv",bloodGroups:"BloodBankContent_bloodGroups__ofo5g",groupsGrid:"BloodBankContent_groupsGrid__NNWf5",groupCard:"BloodBankContent_groupCard__tt0N4",needed:"BloodBankContent_needed__5ljKU",donorCount:"BloodBankContent_donorCount__GUmYq",needBadge:"BloodBankContent_needBadge__J9MCM",requestForm:"BloodBankContent_requestForm__JJgaQ",formGroup:"BloodBankContent_formGroup__ZJscB",checkboxLabel:"BloodBankContent_checkboxLabel___8vRO",submitButton:"BloodBankContent_submitButton__01LZm",info:"BloodBankContent_info__9_hP7"}},5457:function(e){e.exports={backButton:"BackButton_backButton__n2t1O"}},622:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=t(2265),o=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,t){var a,i={},d=null,c=null;for(a in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,a)&&!s.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===i[a]&&(i[a]=n[a]);return{$$typeof:o,type:e,key:d,ref:c,props:i,_owner:l.current}}n.jsx=q,n.jsxs=q},7437:function(e,n,t){"use strict";e.exports=t(622)},4033:function(e,n,t){e.exports=t(94)},1172:function(e,n,t){"use strict";t.d(n,{w_:function(){return GenIcon}});var a=t(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=a.createContext&&a.createContext(o),__assign=function(){return(__assign=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},__rest=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)0>n.indexOf(a[o])&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]]);return t};function Tree2Element(e){return e&&e.map(function(e,n){return a.createElement(e.tag,__assign({key:n},e.attr),Tree2Element(e.child))})}function GenIcon(e){return function(n){return a.createElement(IconBase,__assign({attr:__assign({},e.attr)},n),Tree2Element(e.child))}}function IconBase(e){var elem=function(n){var t,o=e.attr,r=e.size,l=e.title,s=__rest(e,["attr","size","title"]),i=r||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),a.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,s,{className:t,style:__assign(__assign({color:e.color||n.color},n.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return void 0!==r?a.createElement(r.Consumer,null,function(e){return elem(e)}):elem(o)}}},function(e){e.O(0,[420,971,472,744],function(){return e(e.s=3681)}),_N_E=e.O()}]);