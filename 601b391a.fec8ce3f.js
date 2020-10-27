(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{120:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=b(r),m=o,u=l["".concat(p,".").concat(m)]||l[m]||d[m]||a;return r?n.a.createElement(u,c(c({ref:t},s),{},{components:r})):n.a.createElement(u,c({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var s=2;s<a;s++)p[s]=r[s];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return b}));var o=r(2),n=r(6),a=(r(0),r(120)),p={id:"map-prop",title:"Map Prop"},c={unversionedId:"api/decorators/map-prop",id:"api/decorators/map-prop",isDocsHomePage:!1,title:"Map Prop",description:"@mapProp(options: object) is a decorator which makes it possible to create map schema properties, here are just the differences listed",source:"@site/../docs/api/decorators/mapProp.md",slug:"/api/decorators/map-prop",permalink:"/typegoose/docs/api/decorators/map-prop",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/decorators/mapProp.md",version:"current",sidebar:"docs",previous:{title:"Prop",permalink:"/typegoose/docs/api/decorators/prop"},next:{title:"Array Prop",permalink:"/typegoose/docs/api/decorators/array-prop"}},i=[{value:"Options",id:"options",children:[{value:"of",id:"of",children:[]}]}],s={rightToc:i};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@mapProp(options: object)")," is a decorator which makes it possible to create map schema properties, here are just the differences listed"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": this decorator will get removed in 8.0\n",Object(a.b)("strong",{parentName:"p"},"Note"),": Deprecated since 7.1.1, replace with ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop"}),Object(a.b)("inlineCode",{parentName:"a"},"@prop"))),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"All options from ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"/typegoose/docs/api/decorators/prop#options"}),Object(a.b)("inlineCode",{parentName:"a"},"@prop"))," are valid")),Object(a.b)("h3",{id:"of"},"of"),Object(a.b)("p",null,"Accepts Type: ",Object(a.b)("inlineCode",{parentName:"p"},"any"),Object(a.b)("br",{parentName:"p"}),"\n","(alias for ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#type"}),Object(a.b)("inlineCode",{parentName:"a"},"type"))," from ",Object(a.b)("inlineCode",{parentName:"p"},"@prop"),")"),Object(a.b)("p",null,"Deprecated since ",Object(a.b)("inlineCode",{parentName:"p"},"7.2.0"),", use ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#type"}),Object(a.b)("inlineCode",{parentName:"a"},"@prop"),"'s ",Object(a.b)("inlineCode",{parentName:"a"},"type"))),Object(a.b)("p",null,"(see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#type"}),Object(a.b)("inlineCode",{parentName:"a"},"type"))," for Examples)"))}b.isMDXComponent=!0}}]);