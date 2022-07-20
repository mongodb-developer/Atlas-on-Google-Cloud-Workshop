"use strict";(self.webpackChunkgcp_workshop=self.webpackChunkgcp_workshop||[]).push([[519],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return o?r.createElement(g,l(l({ref:t},u),{},{components:o})):r.createElement(g,l({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1634:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:3},l="Create a Cloud Run application",i={unversionedId:"tutorial-basics/create-a-cloud-run-application",id:"tutorial-basics/create-a-cloud-run-application",title:"Create a Cloud Run application",description:"Enable google Cloud Editor",source:"@site/docs/tutorial-basics/create-a-cloud-run-application.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-cloud-run-application",permalink:"/docs/tutorial-basics/create-a-cloud-run-application",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create-a-cloud-run-application.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a Document",permalink:"/docs/tutorial-basics/create-api-keys"},next:{title:"Deploy your site",permalink:"/docs/tutorial-basics/deploy-your-site"}},c={},p=[{value:"Enable google Cloud Editor",id:"enable-google-cloud-editor",level:2}],u={toc:p};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-cloud-run-application"},"Create a Cloud Run application"),(0,n.kt)("h2",{id:"enable-google-cloud-editor"},"Enable google Cloud Editor"),(0,n.kt)("p",null,"Log into your google cloud console and press on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cloud Shell")," button on the top of the console. "),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Toggle for google documentation"),(0,n.kt)("div",null,(0,n.kt)("iframe",{height:"1000px",width:"100%",src:"https://cloud.google.com/shell/docs/deploy-cloud-run-app"}))),(0,n.kt)("p",null,"Instead of opening a new application as mentioned in the docs section 4. :"),(0,n.kt)("p",null,"  From the list of sample applications (Node.js, Python with Flask and Django frameworks, Java, Go), choose a Hello World app."),(0,n.kt)("p",null,"  For example, choosing Python (Flask): Hello World creates a starter Python (Flask) Hello World app."),(0,n.kt)("p",null,"  Use the git clone command to get our bakery application:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/mongodb-developer/GCP-Workshop-Bakery.git\n")),(0,n.kt)("p",null,'  Open this project in the "Cloud Editor"'))}s.isMDXComponent=!0}}]);