(()=>{var e={};e.id=929,e.ids=[929],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},7310:e=>{"use strict";e.exports=require("url")},5331:(e,n,a)=>{"use strict";a.r(n),a.d(n,{GlobalError:()=>r.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>l});var s=a(7096),t=a(6132),i=a(7284),r=a.n(i),c=a(2564),o={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>c[e]);a.d(n,o);let l=["",{children:["about",{children:["bank-accounts",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,7556)),"C:\\Users\\Asus\\Desktop\\web_sdernek\\src\\app\\about\\bank-accounts\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,1747)),"C:\\Users\\Asus\\Desktop\\web_sdernek\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\Asus\\Desktop\\web_sdernek\\src\\app\\about\\bank-accounts\\page.jsx"],u="/about/bank-accounts/page",p={require:a,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/about/bank-accounts/page",pathname:"/about/bank-accounts",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},9268:(e,n,a)=>{Promise.resolve().then(a.bind(a,8326))},8326:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=a(784),t=a(9885),i=a(3500);a(1775);var r=a(9343),c=a.n(r);let o=[{bank:"Ziraat Bankası",branch:"Bayburt Şubesi",accountName:"Arslandede K\xf6y\xfc Derneği",iban:"TR12 3456 7890 1234 5678 9012 34",accountType:"TL Hesabı",description:"Aidat \xf6demeleri ve bağışlar i\xe7in"},{bank:"Halk Bankası",branch:"Bayburt Şubesi",accountName:"Arslandede K\xf6y\xfc Derneği",iban:"TR98 7654 3210 9876 5432 1098 76",accountType:"TL Hesabı",description:"Proje ve etkinlik \xf6demeleri i\xe7in"},{bank:"Vakıfbank",branch:"Bayburt Şubesi",accountName:"Arslandede K\xf6y\xfc Derneği",iban:"TR45 6789 0123 4567 8901 2345 67",accountType:"TL Hesabı",description:"Genel bağış ve yardımlar i\xe7in"}],l={title:"\xd6deme Bilgileri",items:["Aidat \xf6demelerinizi yaparken a\xe7ıklama kısmına TC kimlik numaranızı yazınız.","EFT/Havale işlemlerinde g\xf6nderen kısmına adınızı ve soyadınızı yazınız.","Bağış ve yardımlarınız i\xe7in makbuz talep edebilirsiniz.","Online \xf6deme sistemimiz yakında hizmetinizde olacaktır."]},__WEBPACK_DEFAULT_EXPORT__=()=>{let[e,n]=(0,t.useState)(""),copyToClipboard=e=>{navigator.clipboard.writeText(e),n(e),setTimeout(()=>n(""),2e3)};return(0,s.jsxs)("div",{className:c().bankAccountsContent,children:[s.jsx("h1",{children:"Banka Hesaplarımız"}),s.jsx("div",{className:c().introduction,children:s.jsx("p",{children:"Derneğimize yapacağınız aidat \xf6demeleri, bağışlar ve diğer \xf6demeler i\xe7in aşağıdaki banka hesaplarımızı kullanabilirsiniz."})}),s.jsx("div",{className:c().accountsGrid,children:o.map((n,a)=>(0,s.jsxs)("div",{className:c().accountCard,children:[s.jsx("h2",{children:n.bank}),(0,s.jsxs)("div",{className:c().accountInfo,children:[(0,s.jsxs)("div",{className:c().infoRow,children:[s.jsx("span",{className:c().label,children:"Şube:"}),s.jsx("span",{className:c().value,children:n.branch})]}),(0,s.jsxs)("div",{className:c().infoRow,children:[s.jsx("span",{className:c().label,children:"Hesap Adı:"}),s.jsx("span",{className:c().value,children:n.accountName})]}),(0,s.jsxs)("div",{className:c().infoRow,children:[s.jsx("span",{className:c().label,children:"Hesap T\xfcr\xfc:"}),s.jsx("span",{className:c().value,children:n.accountType})]}),(0,s.jsxs)("div",{className:c().ibanRow,children:[s.jsx("span",{className:c().label,children:"IBAN:"}),s.jsx("span",{className:c().value,children:n.iban}),(0,s.jsxs)("button",{className:c().copyButton,onClick:()=>copyToClipboard(n.iban),children:[s.jsx(i.esY,{}),e===n.iban&&s.jsx("span",{className:c().tooltip,children:"Kopyalandı!"})]})]}),s.jsx("div",{className:c().description,children:n.description})]})]},a))}),(0,s.jsxs)("div",{className:c().paymentInfo,children:[s.jsx("h2",{children:l.title}),s.jsx("ul",{children:l.items.map((e,n)=>s.jsx("li",{children:e},n))})]}),(0,s.jsxs)("div",{className:c().note,children:[s.jsx("h3",{children:"\xd6nemli Not"}),s.jsx("p",{children:"Derneğimiz adına para toplama yetkisi olmayan kişilere itibar etmeyiniz. T\xfcm \xf6demelerinizi yukarıda belirtilen resmi hesaplarımıza yapınız."})]})]})}},1775:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=a(784),t=a(7114),i=a(3500),r=a(7472),c=a.n(r);let __WEBPACK_DEFAULT_EXPORT__=()=>{let e=(0,t.useRouter)();return(0,s.jsxs)("button",{onClick:()=>e.back(),className:c().backButton,"aria-label":"Geri D\xf6n",children:[s.jsx(i.x_l,{}),s.jsx("span",{children:"Geri D\xf6n"})]})}},9343:e=>{e.exports={bankAccountsContent:"BankAccountsContent_bankAccountsContent__B1VVU",introduction:"BankAccountsContent_introduction__R6Fi8",accountsGrid:"BankAccountsContent_accountsGrid__SwP5_",accountCard:"BankAccountsContent_accountCard__M4QEt",accountInfo:"BankAccountsContent_accountInfo__PYqrC",infoRow:"BankAccountsContent_infoRow__zmwVg",ibanRow:"BankAccountsContent_ibanRow__DpuwG",label:"BankAccountsContent_label__8ZRpV",value:"BankAccountsContent_value__5CIfa",copyButton:"BankAccountsContent_copyButton__OdIOr",description:"BankAccountsContent_description__IDygO",paymentInfo:"BankAccountsContent_paymentInfo__IUBJC",note:"BankAccountsContent_note__g5_gq"}},7472:e=>{e.exports={backButton:"BackButton_backButton__n2t1O"}},7556:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>BankAccounts});var s=a(4656),t=a(5153);let i=(0,t.createProxy)(String.raw`C:\Users\Asus\Desktop\web_sdernek\src\components\about\BankAccounts\BankAccountsContent.jsx`),{__esModule:r,$$typeof:c}=i,o=i.default;function BankAccounts(){return s.jsx("main",{children:s.jsx(o,{})})}},7114:(e,n,a)=>{e.exports=a(4979)}};var n=require("../../../webpack-runtime.js");n.C(e);var __webpack_exec__=e=>n(n.s=e),a=n.X(0,[739,561],()=>__webpack_exec__(5331));module.exports=a})();