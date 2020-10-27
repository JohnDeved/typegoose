(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(6),r=(n(0),n(120)),s={id:"migrate-6",title:"Migrate to 6.0.0"},i={unversionedId:"guides/migrate-6",id:"guides/migrate-6",isDocsHomePage:!1,title:"Migrate to 6.0.0",description:"These are the changes made for 6.0.0 that are breaking or just important to know.",source:"@site/../docs/guides/migrate-to-6.md",slug:"/guides/migrate-6",permalink:"/typegoose/docs/guides/migrate-6",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/migrate-to-6.md",version:"current",sidebar:"guides",previous:{title:"Using with class-transformer",permalink:"/typegoose/docs/guides/advanced/using-with-class-transformer"},next:{title:"Migrate to 7.0.0",permalink:"/typegoose/docs/guides/migrate-7"}},c=[{value:"Important, Read this first",id:"important-read-this-first",children:[]},{value:"InstanceType changed",id:"instancetype-changed",children:[]},{value:"<code>getModelForClass</code>, <code>setModelForClass</code>, <code>buildSchema</code>",id:"getmodelforclass-setmodelforclass-buildschema",children:[]},{value:"ModelOptions",id:"modeloptions",children:[]},{value:"Hooks",id:"hooks",children:[]},{value:"Methods (staticMethod, instanceMethod, virtuals)",id:"methods-staticmethod-instancemethod-virtuals",children:[]},{value:"setModelForClass is deprecated",id:"setmodelforclass-is-deprecated",children:[]},{value:"ModelType is abstracted",id:"modeltype-is-abstracted",children:[]},{value:"IC data.ts collections are now Map&lt;T, S&gt;",id:"ic-datats-collections-are-now-mapt-s",children:[]},{value:"Notes",id:"notes",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"These are the changes made for 6.0.0 that are breaking or just important to know."),Object(r.b)("h2",{id:"important-read-this-first"},"Important, Read this first"),Object(r.b)("p",null,'To migrate "seamlessly", you should be on the latest Typegoose Version of 5.x (Currently 5.9.0) and then upgrade to 6.0.x (not 6.x), because in version 6.1+ the deprecated functions will be removed!'),Object(r.b)("h2",{id:"instancetype-changed"},"InstanceType changed"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"InstanceType<T>")," was renamed to ",Object(r.b)("inlineCode",{parentName:"p"},"DocumentType<T>")),Object(r.b)("h2",{id:"getmodelforclass-setmodelforclass-buildschema"},Object(r.b)("inlineCode",{parentName:"h2"},"getModelForClass"),", ",Object(r.b)("inlineCode",{parentName:"h2"},"setModelForClass"),", ",Object(r.b)("inlineCode",{parentName:"h2"},"buildSchema")),Object(r.b)("p",null,'They are not in the Typegoose class anymore. They are now outsourced, which means the new syntax is the following (for a "seamless" migration the Typegoose Class still exists and has the functions, but the will be deprecated):'),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { getModelForClass } from 'typegoose';\nclass Name {}\n\nconst NameModel = getModelForClass(Name);\n")),Object(r.b)("p",null,"Note: Typegoose Class still has all the functions, but they are marked deprecated & are just passthroughs to the new functions."),Object(r.b)("h2",{id:"modeloptions"},"ModelOptions"),Object(r.b)("p",null,"Use the following decorator now."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"@modelOptions({ schemaOptions: {} })\nclass Name {}\n")),Object(r.b)("p",null,"Otherwise, the functions still override the settings made in ",Object(r.b)("inlineCode",{parentName:"p"},"modelOptions")),Object(r.b)("h2",{id:"hooks"},"Hooks"),Object(r.b)("p",null,"Hooks recieved a change (in 6.0.0-13) for the types to comply with the latest mongoose (5.6.8)",Object(r.b)("br",{parentName:"p"}),"\n","-> no workarounds or typedefs required anymore."),Object(r.b)("h2",{id:"methods-staticmethod-instancemethod-virtuals"},"Methods (staticMethod, instanceMethod, virtuals)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@staticMethod")," & ",Object(r.b)("inlineCode",{parentName:"p"},"@instanceMethod")," were deprecated in favor of ",Object(r.b)("inlineCode",{parentName:"p"},"schema.loadClass()"),". These decorators are no longer needed, because the methods are auto-detected."),Object(r.b)("p",null,"For ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/tutorials/virtuals.html"}),"virtuals"),", simply use ",Object(r.b)("inlineCode",{parentName:"p"},"get somevalue() { return ''; }")," and ",Object(r.b)("inlineCode",{parentName:"p"},"set somevalue(val: string) { }")," (",Object(r.b)("inlineCode",{parentName:"p"},"@prop")," is no longer needed). [",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/typegoose/docs/api/virtuals#get--set"}),"New Documentation"),"]"),Object(r.b)("p",null,"For ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/tutorials/virtuals.html#populate"}),"populating virtuals"),", use ",Object(r.b)("inlineCode",{parentName:"p"},"@prop({ localField, foreignField })"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"overwrite")," option is no longer needed. [",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/typegoose/docs/api/virtuals#virtual-populate"}),"New Documentation"),"]"),Object(r.b)("p",null,"Update: ",Object(r.b)("inlineCode",{parentName:"p"},"@staticMethod")," & ",Object(r.b)("inlineCode",{parentName:"p"},"@instanceMethod")," were removed in 6.1.0-1"),Object(r.b)("h2",{id:"setmodelforclass-is-deprecated"},"setModelForClass is deprecated"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"setModelForClass()")," has been deprecated, because Mongoose would throw an OverwriteModelError if it was attempted to overwrite a model.",Object(r.b)("br",{parentName:"p"}),"\n","-> use ",Object(r.b)("inlineCode",{parentName:"p"},"getModelForClass()")),Object(r.b)("h2",{id:"modeltype-is-abstracted"},"ModelType is abstracted"),Object(r.b)("p",null,"The type ",Object(r.b)("inlineCode",{parentName:"p"},"ModelType")," has been abstracted to ",Object(r.b)("inlineCode",{parentName:"p"},"ReturnModelType<typeof Class>")," with documentation. But, if for any reason ",Object(r.b)("inlineCode",{parentName:"p"},"ModelType")," is needed, it needs to be imported from ",Object(r.b)("inlineCode",{parentName:"p"},"@typegoose/typegoose/lib/types"),"."),Object(r.b)("h2",{id:"ic-datats-collections-are-now-mapt-s"},"[IC]"," data.ts collections are now Map<T, S>"),Object(r.b)("p",null,"data.ts's collections got refactored to use ES6 Maps"),Object(r.b)("h2",{id:"notes"},"Notes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"[IC]"," The internal handling of schema creation has changed a bit, however we tried to keep the inputs & outputs the same, meaning in some edge-cases schema creation might not work as expected.")),Object(r.b)("hr",null),Object(r.b)("sub",null,"*`IC` means `internal change`*"))}d.isMDXComponent=!0},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,m=p["".concat(s,".").concat(u)]||p[u]||b[u]||r;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);