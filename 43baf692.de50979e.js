(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(n),y=r,d=l["".concat(p,".").concat(y)]||l[y]||m[y]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var u=2;u<a;u++)p[u]=n[u];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(120)),p={id:"document-type",title:"Document Type"},c={unversionedId:"api/types/document-type",id:"api/types/document-type",isDocsHomePage:!1,title:"Document Type",description:"previously known as InstanceType",source:"@site/../docs/api/types/documentType.md",slug:"/api/types/document-type",permalink:"/typegoose/docs/api/types/document-type",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/types/documentType.md",version:"current",sidebar:"docs",previous:{title:"Is Ref-Type",permalink:"/typegoose/docs/api/functions/typeguards/is-ref-type"},next:{title:"Return Model Type",permalink:"/typegoose/docs/api/types/return-model-type"}},i=[{value:"Example",id:"example",children:[]}],u={rightToc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"previously known as ",Object(a.b)("inlineCode",{parentName:"em"},"InstanceType<T>"))),Object(a.b)("p",null,"The Type ",Object(a.b)("inlineCode",{parentName:"p"},"DocumentType<T>")," is the type used for Documents."),Object(a.b)("p",null,"-> It is the logical 'AND' of the ",Object(a.b)("inlineCode",{parentName:"p"},"mongoose.Document")," and ",Object(a.b)("inlineCode",{parentName:"p"},"T")),Object(a.b)("p",null,"Note: when ",Object(a.b)("inlineCode",{parentName:"p"},"typeof Class")," is used, it might not work."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'class Kitten {\n  @prop()\n  public name?: string;\n\n  // this is an Instance Method\n  public getName(this: DocumentType<Kitten>) {\n    return this.name; // thanks to "DocumentType" "this" has type information\n  }\n}\n')))}s.isMDXComponent=!0}}]);