"use strict";(self.webpackChunkgcp_workshop=self.webpackChunkgcp_workshop||[]).push([[840],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(o),g=n,m=d["".concat(p,".").concat(g)]||d[g]||s[g]||a;return o?r.createElement(m,l(l({ref:t},u),{},{components:o})):r.createElement(m,l({ref:t},u))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<a;i++)l[i]=o[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},805:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:2},l="Create a Cloud Run application",c={unversionedId:"graphql/create-a-cloud-run-application",id:"graphql/create-a-cloud-run-application",title:"Create a Cloud Run application",description:"Enable google Cloud Editor",source:"@site/docs/3-graphql/create-a-cloud-run-application.md",sourceDirName:"3-graphql",slug:"/graphql/create-a-cloud-run-application",permalink:"/docs/graphql/create-a-cloud-run-application",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-graphql/create-a-cloud-run-application.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a GCP Environment",permalink:"/docs/graphql/create-a-gcp-project"},next:{title:"Create API Keys",permalink:"/docs/graphql/create-api-keys"}},p={},i=[{value:"Enable google Cloud Editor",id:"enable-google-cloud-editor",level:2}],u={toc:i};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-cloud-run-application"},"Create a Cloud Run application"),(0,n.kt)("h2",{id:"enable-google-cloud-editor"},"Enable google Cloud Editor"),(0,n.kt)("p",null,"Log into your google cloud console and press on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cloud Shell")," button on the top of the console. "),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Toggle for google documentation"),(0,n.kt)("div",null,"- [Create a project](https://cloud.google.com/shell/docs/deploy-cloud-run-app)")),(0,n.kt)("p",null,"Instead of opening a new application as mentioned in the docs section 4. :"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"From the list of sample applications (Node.js, Python with Flask and    Django frameworks, Java, Go), choose a Hello World app.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"For example, choosing Python (Flask): Hello World creates a starter Python (Flask) Hello World app.\n")),(0,n.kt)("p",null,"  Use the git clone command to get our bakery application:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/mongodb-developer/GCP-Workshop-Bakery.git\n")),(0,n.kt)("p",null,'  Open this project in the "Cloud Editor"'))}s.isMDXComponent=!0}}]);