"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[350],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>s,mdx:()=>x,useMDXComponents:()=>u,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){return function(t){var n=u(t.components);return r.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),s=a,c=p["".concat(i,".").concat(s)]||p[s]||f[s]||o;return n?r.createElement(c,d(d({ref:t},m),{},{components:n})):r.createElement(c,d({ref:t},m))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:a,i[1]=d;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],d={id:"module-api",title:"Module API"},l=void 0,m={unversionedId:"module-api",id:"module-api",title:"Module API",description:"Metro is designed to allow code written for Node (or for bundlers targeting the Web) to run mostly unmodified. The main APIs available to application code are listed below.",source:"@site/../docs/ModuleAPI.md",sourceDirName:".",slug:"/module-api",permalink:"/docs/module-api",draft:!1,editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/ModuleAPI.md",tags:[],version:"current",lastUpdatedAt:1700519755,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{id:"module-api",title:"Module API"},sidebar:"docs",previous:{title:"Bundling API",permalink:"/docs/api"},next:{title:"Configuring Metro",permalink:"/docs/configuration"}},p={},u=[{value:"<code>require()</code>",id:"require",level:2},{value:"Advanced usage: <code>require</code> at runtime",id:"advanced-usage-require-at-runtime",level:3},{value:"<code>module.exports</code>",id:"moduleexports",level:2},{value:"ES Modules syntax (<code>import</code> and <code>export</code>)",id:"es-modules-syntax-import-and-export",level:2},{value:"<code>import()</code> (dynamic import)",id:"import-dynamic-import",level:2},{value:"<code>require.resolveWeak()</code>",id:"requireresolveweak",level:2}],s={toc:u},c="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.mdx)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Metro is designed to allow code written for Node (or for bundlers targeting the Web) to run mostly unmodified. The main APIs available to application code are listed below."),(0,o.mdx)("h2",{id:"require"},(0,o.mdx)("inlineCode",{parentName:"h2"},"require()")),(0,o.mdx)("p",null,"Similar to Node's ",(0,o.mdx)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#requireid"},(0,o.mdx)("inlineCode",{parentName:"a"},"require()"))," function. ",(0,o.mdx)("inlineCode",{parentName:"p"},"require()")," takes a module name (or path) and returns the result of evaluating that module's code. Modules referenced by ",(0,o.mdx)("inlineCode",{parentName:"p"},"require()")," will be added to the bundle."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const localModule = require('./path/module');\nconst asset = require('./path/asset.png');\nconst jsonData = require('./path/data.json');\nconst {View} = require('react-native');\n")),(0,o.mdx)("p",null,"The argument to ",(0,o.mdx)("inlineCode",{parentName:"p"},"require()")," must be a compile-time constant. The ",(0,o.mdx)("a",{parentName:"p",href:"/docs/configuration#dynamicdepsinpackages"},(0,o.mdx)("inlineCode",{parentName:"a"},"dynamicDepsInPackages"))," config option controls whether calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"require()")," with a non-constant argument will fail at build time or at runtime."),(0,o.mdx)("h3",{id:"advanced-usage-require-at-runtime"},"Advanced usage: ",(0,o.mdx)("inlineCode",{parentName:"h3"},"require")," at runtime"),(0,o.mdx)("p",null,"At build time, Metro ",(0,o.mdx)("a",{parentName:"p",href:"/docs/resolution"},"resolves")," module names to absolute paths and ",(0,o.mdx)("a",{parentName:"p",href:"/docs/configuration#createmoduleidfactory"},"assigns an opaque module ID")," to each one."),(0,o.mdx)("p",null,"At runtime, ",(0,o.mdx)("inlineCode",{parentName:"p"},"require")," refers to a function that takes an opaque module ID (",(0,o.mdx)("em",{parentName:"p"},"not")," a name or path) and returns a module. This can be useful if you already have a module ID returned by another module API, such as ",(0,o.mdx)("a",{parentName:"p",href:"#require-resolveweak"},(0,o.mdx)("inlineCode",{parentName:"a"},"require.resolveWeak")),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const localModule = require('./path/module');\nconst id = require.resolveWeak('./path/module');\n// Bypass the restriction on non-constant require() arguments\nconst dynamicRequire = require;\ndynamicRequire(id) === localModule; // true\n")),(0,o.mdx)("h2",{id:"moduleexports"},(0,o.mdx)("inlineCode",{parentName:"h2"},"module.exports")),(0,o.mdx)("p",null,"Similar to ",(0,o.mdx)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#moduleexports"},(0,o.mdx)("inlineCode",{parentName:"a"},"module.exports"))," in Node. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"module.exports")," property holds the value ",(0,o.mdx)("inlineCode",{parentName:"p"},"require()")," will return for the current module after it finishes evaluating."),(0,o.mdx)("h2",{id:"es-modules-syntax-import-and-export"},"ES Modules syntax (",(0,o.mdx)("inlineCode",{parentName:"h2"},"import")," and ",(0,o.mdx)("inlineCode",{parentName:"h2"},"export"),")"),(0,o.mdx)("p",null,"We currently recommend the use of ",(0,o.mdx)("a",{parentName:"p",href:"https://babeljs.io/docs/babel-plugin-transform-modules-commonjs"},(0,o.mdx)("inlineCode",{parentName:"a"},"@babel/plugin-transform-modules-commonjs"))," in Metro projects to support ",(0,o.mdx)("inlineCode",{parentName:"p"},"import")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"export"),"."),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"In React Native projects that use ",(0,o.mdx)("inlineCode",{parentName:"p"},"@react-native/babel-preset"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"import")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"export")," are supported out of the box.")),(0,o.mdx)("h2",{id:"import-dynamic-import"},(0,o.mdx)("inlineCode",{parentName:"h2"},"import()")," (dynamic import)"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import"},(0,o.mdx)("inlineCode",{parentName:"a"},"import()"))," calls are supported out of the box. In React Native, using ",(0,o.mdx)("inlineCode",{parentName:"p"},"import()")," automatically splits your application code so that it loads faster during development, without affecting release builds."),(0,o.mdx)("admonition",{type:"info"},(0,o.mdx)("p",{parentName:"admonition"},(0,o.mdx)("strong",{parentName:"p"},"For framework implementers"),":"),(0,o.mdx)("ol",{parentName:"admonition"},(0,o.mdx)("li",{parentName:"ol"},"Enable ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0605-lazy-bundling.md"},"lazy bundling")," by adding ",(0,o.mdx)("inlineCode",{parentName:"li"},"&lazy=true")," to the initial HTTP bundle URL your framework requests from Metro."),(0,o.mdx)("li",{parentName:"ol"},"At runtime, ",(0,o.mdx)("inlineCode",{parentName:"li"},"import()")," calls a framework-defined function to ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0605-lazy-bundling.md#__loadbundleasync-in-metro"},"fetch and evaluate")," the split bundle. Your framework ",(0,o.mdx)("strong",{parentName:"li"},"must")," implement this function if it uses the ",(0,o.mdx)("inlineCode",{parentName:"li"},"lazy=true")," parameter, or runtime errors will occur."))),(0,o.mdx)("h2",{id:"requireresolveweak"},(0,o.mdx)("inlineCode",{parentName:"h2"},"require.resolveWeak()")),(0,o.mdx)("p",null,"Takes a module name (or path) and returns that module's opaque ID, without including it in the bundle. This is a specialised API intended to be used by frameworks; application code will rarely need to use it directly. See the section about ",(0,o.mdx)("a",{parentName:"p",href:"#advanced-usage-require-at-runtime"},"using ",(0,o.mdx)("inlineCode",{parentName:"a"},"require")," at runtime"),"."))}f.isMDXComponent=!0}}]);