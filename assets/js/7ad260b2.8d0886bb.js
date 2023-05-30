"use strict";(self.webpackChunkgcp_workshop=self.webpackChunkgcp_workshop||[]).push([[871],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(o),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return o?n.createElement(h,a(a({ref:t},s),{},{components:o})):n.createElement(h,a({ref:t},s))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:r,a[1]=p;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7119:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=o(7462),r=(o(7294),o(3905)),i=o(4996);const a={sidebar_position:2},p="Connect to App Services",c={unversionedId:"cloud-run/connect-to-app-services",id:"cloud-run/connect-to-app-services",title:"Connect to App Services",description:"It's time to connect the web application to Atlas App Services.",source:"@site/docs/4-cloud-run/connect-to-app-services.mdx",sourceDirName:"4-cloud-run",slug:"/cloud-run/connect-to-app-services",permalink:"/docs/cloud-run/connect-to-app-services",draft:!1,editUrl:"https://github.com/mongodb-developer/google-cloud-workshop/blob/main/docs/4-cloud-run/connect-to-app-services.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Enable Cloud APIs with Cloud Shell",permalink:"/docs/cloud-run/enable-apis"},next:{title:"Deploy to Cloud Run",permalink:"/docs/cloud-run/deploy-to-cloud-run"}},l={},s=[],u={toc:s},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-to-app-services"},"Connect to App Services"),(0,r.kt)("p",null,"It's time to connect the web application to Atlas App Services."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"First, open ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/cloudshelleditor"},"Cloud Shell Editor"),". The editor may look suspiciously like VSCode. This is because both projects use some of the same open-sourced components such as the Monaco Editor and the Language Server Protocol. You should see your cloned project on the left."),(0,r.kt)("img",{alt:"Cloud Shell Editor highlighting the project directory on the left hand-side",src:(0,i.Z)("/img/chapter-4-cloud-run/cloud-shell-editor-app-highlighted.png")})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("strong",{parentName:"p"},"environment.prod.ts")," file. You should see the following content."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=Google-Cloud-MongoDB-Atlas-Workshop/src/environments/environment.prod.ts",title:"Google-Cloud-MongoDB-Atlas-Workshop/src/environments/environment.prod.ts"},"export const environment = {\n  production: true,\n  APP_ID: '',\n  GRAPHQL_URI: '',\n  API_KEY: ''\n};\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that you should edit the ",(0,r.kt)("em",{parentName:"p"},"environment.",(0,r.kt)("strong",{parentName:"em"},"prod"),".ts")," file and not the ",(0,r.kt)("em",{parentName:"p"},"environment.ts")," file. The first is used by Angular when building the application for production and the second \u2014 when building for development."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add your own credentials to this file. You can either copy them from the open StackBlitz application or follow the instructions from ",(0,r.kt)("a",{parentName:"p",href:"/docs/app-services/app-graphql#app-services-authentication-credentials"},"Chapter 2")," to get them from App Services."))))}m.isMDXComponent=!0}}]);