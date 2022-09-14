"use strict";(self.webpackChunkgcp_workshop=self.webpackChunkgcp_workshop||[]).push([[87],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(a),d=r,m=g["".concat(p,".").concat(d)]||g[d]||s[d]||o;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2554:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(4996);const l={sidebar_position:2},i="Enable the Google Cloud Natural Language API",p={unversionedId:"natural-language-api/set-up-nl-api",id:"natural-language-api/set-up-nl-api",title:"Enable the Google Cloud Natural Language API",description:"It\u2019s now time to start bringing in another Google Cloud product, Natural Language API, that will allow us to fetch the sentiment of the comments left on the cakes in the web app.",source:"@site/docs/4-natural-language-api/set-up-nl-api.mdx",sourceDirName:"4-natural-language-api",slug:"/natural-language-api/set-up-nl-api",permalink:"/google-cloud-workshop/docs/natural-language-api/set-up-nl-api",draft:!1,editUrl:"https://github.com/mongodb-developer/mongodb-developer.github.io/docs/4-natural-language-api/set-up-nl-api.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Set up Google Cloud",permalink:"/google-cloud-workshop/docs/natural-language-api/set-up-google-cloud"},next:{title:"Use the API in Atlas App Services to Analyze Sentiment",permalink:"/google-cloud-workshop/docs/natural-language-api/configure-app-services"}},u={},c=[],s={toc:c};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enable-the-google-cloud-natural-language-api"},"Enable the Google Cloud Natural Language API"),(0,r.kt)("p",null,"It\u2019s now time to start bringing in another Google Cloud product, Natural Language API, that will allow us to fetch the sentiment of the comments left on the cakes in the web app."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The first thing we want to do is to enable the ",(0,r.kt)("strong",{parentName:"p"},"Natural Language API"),". Search for Natural Language API and select it from the list under ",(0,r.kt)("strong",{parentName:"p"},"Marketplace"),"."),(0,r.kt)("img",{alt:"Select project dropdown in Google Cloud",src:(0,o.Z)("/img/chapter-3-nlp/natural-language-api-marketplace.png"),width:"500"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Enable")," button so we can start using it within our project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This will take you to the Natural Language API page for your project. We will need to generate an API key to use, so select ",(0,r.kt)("strong",{parentName:"p"},"Credentials")," from the left-hand menu."),(0,r.kt)("img",{alt:"Select project dropdown in Google Cloud",src:(0,o.Z)("/img/chapter-3-nlp/nl-credentials.png")})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create Credentials")," at the top of the browser window and select API Key from the dropdown box to generate a key.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the API key that has been generated for you. We'll use it to authenticate our requests to the Natural Language API in the following section."))))}g.isMDXComponent=!0}}]);