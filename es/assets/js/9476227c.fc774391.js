"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7462],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(7462),o=(n(7294),n(4137));const r={title:"Two-factor authentication",sidebar_position:3},i=void 0,c={unversionedId:"general/account/2fa",id:"general/account/2fa",title:"Two-factor authentication",description:"Two-factor authentication (or 2FA) is an authentication method that requires an additional piece of evidence from the user to log in, on top of the usual login and password pair. This is done for security purposes. Websites usually offer such 2FA methods as a code sent by SMS or a special authenticator app.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/account/2fa.md",sourceDirName:"general/account",slug:"/general/account/2fa",permalink:"/KnowledgeBase/es/general/account/2fa",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/account/2fa.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Two-factor authentication",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"What can be done in the AdGuard Account",permalink:"/KnowledgeBase/es/general/account/features"},next:{title:"Qu\xe9 es una licencia de AdGuard",permalink:"/KnowledgeBase/es/general/license/what-is"}},s={},l=[{value:"How to set it up",id:"how-to-set-it-up",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Two-factor authentication (or 2FA) is an authentication method that requires an additional piece of evidence from the user to log in, on top of the usual login and password pair. This is done for security purposes. Websites usually offer such 2FA methods as a code sent by SMS or a special authenticator app."),(0,o.kt)("p",null,"We see adding a 2FA option as a benefit. We also understand that enforcing it may irritate some users. That's why we made it optional for your personal account on adguard.com \u2014 by default, 2FA is disabled when you register a new account. You can enable it manually in the settings. As for the currently available authentication methods, we use the tried and tested one: an authenticator app for Android or iOS. You can use almost any such app, and there are plenty of them."),(0,o.kt)("p",null,"We recommend setting up two-factor authentication for your AdGuard account. It won't take you long, but it will help protect your license keys, subscriptions, and, most importantly, any personal information associated with the account."),(0,o.kt)("h2",{id:"how-to-set-it-up"},"How to set it up"),(0,o.kt)("p",null,"1) Log into your ",(0,o.kt)("a",{parentName:"p",href:"https://auth.adguard.com/login.html"},"AdGuard account")," and go to the Settings tab:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/account_settings.png",alt:"AdGuard Account settings *border"})),(0,o.kt)("p",null,"2) Scroll down to ",(0,o.kt)("em",{parentName:"p"},"Password and 2FA")," section and click ",(0,o.kt)("strong",{parentName:"p"},"Enable"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_new.png",alt:"The Change button *border"})),(0,o.kt)("p",null,"3) Follow the on-screen instructions to install an authenticator app and scan the QR code:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_enable.png",alt:"The verification code"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Important"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Save the second-factor backup code somewhere, it will be necessary to recover your account in case your mobile phone gets lost or stolen;")),(0,o.kt)("p",null,"If everything is done right, you will see this when you log into your account the next time:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_success.png",alt:"The result *mobile"})),(0,o.kt)("p",null,"Use your mobile authenticator app to read the code and enter it. You should be logged in now!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"NOTE")),": If you get an authentication error, check the clock on your phone. Adjust it if needed, as an unsynchronized clock may be the cause of the error."))}p.isMDXComponent=!0}}]);