/*! For license information please see Text-stories-Text-mdx.ff09fd8a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_barebones_ts=self.webpackChunkreact_barebones_ts||[]).push([[149,319],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/Text/stories/Text.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Text_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Text/stories/Text.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Text_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"text",children:"Text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Text component is used to render text in the UI."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"\r\nimport { Text } from 'react-barebones-ts';\r\n\r\n<Text text=\"Text to display\"/>\r\n\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"text-1",children:"text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The text to render."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Text text="Text to display"/>\r\n\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"type",children:"type"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The type of text to render."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Text type="span">Text</Text>\r\n\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"size",children:"size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The size of the text."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"types: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"<Text size={500}>Text</Text>\r\n\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"bold",children:"bold"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Whether the text should be bold."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"<Text bold>Text</Text>\r\n\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"color",children:"color"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The color of the text."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Text color="primary">Text</Text>\r\n\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"span",children:"Span"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Text_stories__WEBPACK_IMPORTED_MODULE_2__.Span}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"paragraph",children:"Paragraph"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Text_stories__WEBPACK_IMPORTED_MODULE_2__.Paragraph}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"heading1",children:"Heading1"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Text_stories__WEBPACK_IMPORTED_MODULE_2__.Heading1}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"heading2",children:"Heading2"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Text_stories__WEBPACK_IMPORTED_MODULE_2__.Heading2}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"heading3",children:"Heading3"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Text_stories__WEBPACK_IMPORTED_MODULE_2__.Heading3}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"customspan",children:"CustomSpan"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Text_stories__WEBPACK_IMPORTED_MODULE_2__.CustomSpan})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/Text/stories/Text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomSpan:()=>CustomSpan,Heading1:()=>Heading1,Heading2:()=>Heading2,Heading3:()=>Heading3,Paragraph:()=>Paragraph,Span:()=>Span,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Text/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"COMPONENTS/Text",component:_index__WEBPACK_IMPORTED_MODULE_0__.Z,argTypes:{type:{control:"select",options:["span","p","h1","h2","h3",void 0]},text:{control:"text"},style:{control:"object"},bold:{control:"boolean"},size:{control:"select",options:["s","m","l","xl",void 0]},color:{control:"select",options:["default","primary","secondary","error","success","disabled",void 0]}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_0__.Z,{type:args.type,text:args.text,color:args.color,style:args.style,bold:args.bold,size:args.size});Template.displayName="Template";const Span=Template.bind({});Span.args={text:"Hello world"};const Paragraph=Template.bind({});Paragraph.args={text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec massa magna. Donec eget justo nec quam consequat vestibulum consectetur a velit. Quisque tincidunt, sapien quis laoreet rutrum, magna libero maximus lectus, sed semper mauris ligula vitae sapien. Donec lacus felis, maximus id accumsan vitae, congue nec mi. Sed mollis scelerisque est placerat consequat. Donec venenatis quam ut enim dignissim fermentum. Sed tristique lacus eget arcu vehicula finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc elementum consectetur eros, eu convallis turpis tincidunt at. Nullam et metus metus. Phasellus imperdiet, quam ac viverra mattis, libero velit accumsan odio, vel dignissim orci arcu ac urna. Nam consequat justo vitae mattis feugiat. Fusce in dictum ipsum. Nunc sed nisi et urna mollis efficitur sit amet sagittis libero."};const Heading1=Template.bind({});Heading1.args={type:"h1",text:"Hello world"};const Heading2=Template.bind({});Heading2.args={type:"h2",text:"Hello world"};const Heading3=Template.bind({});Heading3.args={type:"h3",text:"Hello world"};const CustomSpan=Template.bind({});CustomSpan.args={size:"s",color:"primary",bold:!0,text:"Hello world"},Span.parameters={...Span.parameters,docs:{...Span.parameters?.docs,source:{originalSource:"args => <Text type={args.type} text={args.text} color={args.color} style={args.style} bold={args.bold} size={args.size} />",...Span.parameters?.docs?.source}}},Paragraph.parameters={...Paragraph.parameters,docs:{...Paragraph.parameters?.docs,source:{originalSource:"args => <Text type={args.type} text={args.text} color={args.color} style={args.style} bold={args.bold} size={args.size} />",...Paragraph.parameters?.docs?.source}}},Heading1.parameters={...Heading1.parameters,docs:{...Heading1.parameters?.docs,source:{originalSource:"args => <Text type={args.type} text={args.text} color={args.color} style={args.style} bold={args.bold} size={args.size} />",...Heading1.parameters?.docs?.source}}},Heading2.parameters={...Heading2.parameters,docs:{...Heading2.parameters?.docs,source:{originalSource:"args => <Text type={args.type} text={args.text} color={args.color} style={args.style} bold={args.bold} size={args.size} />",...Heading2.parameters?.docs?.source}}},Heading3.parameters={...Heading3.parameters,docs:{...Heading3.parameters?.docs,source:{originalSource:"args => <Text type={args.type} text={args.text} color={args.color} style={args.style} bold={args.bold} size={args.size} />",...Heading3.parameters?.docs?.source}}},CustomSpan.parameters={...CustomSpan.parameters,docs:{...CustomSpan.parameters?.docs,source:{originalSource:"args => <Text type={args.type} text={args.text} color={args.color} style={args.style} bold={args.bold} size={args.size} />",...CustomSpan.parameters?.docs?.source}}};const __namedExportsOrder=["Span","Paragraph","Heading1","Heading2","Heading3","CustomSpan"]},"./src/Text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>src_Text});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Text_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/Text/Text.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Text_module.Z,options);const Text_Text_module=Text_module.Z&&Text_module.Z.locals?Text_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=({text,type="span",style,color="default",bold,size})=>{const Type=type;return(0,jsx_runtime.jsx)(Type,{className:classnames_default()(Text_Text_module.text,color&&Text_Text_module[`color-${color}`],bold&&Text_Text_module.bold,size&&Text_Text_module[`size-${size}`]),style,children:text})};Text.displayName="Text";const src_Text=Text;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},type:{defaultValue:{value:"span"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"p"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'}]}},bold:{defaultValue:null,description:"",name:"bold",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Text/index.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/Text/index.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/Text/Text.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".jet4d6djZbAss8J8J1QT{display:flex;align-items:center;gap:8px}.KbIhFICawiUxZpTK1M_A{font-size:2px}.fC5Gi78dYmpl8FODin96{font-size:4px}.TfwHbgeDwKO8XC6ZUKtO{font-size:8px}.EmaD9BtD6meQq5FOgAGw{font-size:12px}.wrt4Wj4wFwsdMzz36Xo9{font-size:16px}.DalllFWcRZHN91rR__QZ{font-size:20px}.Id4Nx124Ibdk9rNmMF3P{font-size:24px}.H7rwT8ahhocNulR9AUpX{font-size:32px}.o2JatwSFoDGBsLxVoh_E{font-size:40px}.BwyJkocjVHWSx2n95hEB{font-size:56px}.bhwHfUOXz_F0e13dnvlO{color:#1495eb}.Q6BjkbkEU2AG2YofsTdY{color:#464646}.VGjsB7F3GE_2H3hTa5e9{color:#b83423}.JwIm3XCO4hCIzxTs7XCP{color:#168b42}.wlLJA_kXjcB77mWun3i4{color:#5d5d5d}.GGrE0rCk23sUW8byGthr{color:#d7d7d7}.PYUvxhHxZBJWFLDMWVdK{color:#f5f5f5}.LbNEY29iDvAzmnsE2w6Q{font-weight:bold}","",{version:3,sources:["webpack://./src/Text/Text.module.scss"],names:[],mappings:"AAEA,sBACE,YAAA,CACA,kBAAA,CACA,OAAA,CAIA,sBACE,aAFgB,CAClB,sBACE,aAFgB,CAClB,sBACE,aAFgB,CAClB,sBACE,cAFgB,CAClB,sBACE,cAFgB,CAClB,sBACE,cAFgB,CAClB,sBACE,cAFgB,CAClB,sBACE,cAFgB,CAClB,sBACE,cAFgB,CAClB,sBACE,cAFgB,CAOlB,sBACE,aAFgB,CAClB,sBACE,aAFgB,CAClB,sBACE,aAFgB,CAClB,sBACE,aAFgB,CAClB,sBACE,aAFgB,CAClB,sBACE,aAFgB,CAClB,sBACE,aAFgB,CAMpB,sBACE,gBAAA",sourcesContent:["@use '../assets/scss/variables/theme' as *;\r\n\r\n.text {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n@each $key, $val in ($spacing-map) {\r\n  .size-#{$key} {\r\n    font-size: $val;\r\n  }\r\n}\r\n\r\n@each $key, $val in ($color-map) {\r\n  .color-#{$key} {\r\n    color: $val;\r\n  }\r\n}\r\n\r\n.bold {\r\n  font-weight: bold;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={text:"jet4d6djZbAss8J8J1QT","size-50":"KbIhFICawiUxZpTK1M_A","size-100":"fC5Gi78dYmpl8FODin96","size-200":"TfwHbgeDwKO8XC6ZUKtO","size-300":"EmaD9BtD6meQq5FOgAGw","size-400":"wrt4Wj4wFwsdMzz36Xo9","size-500":"DalllFWcRZHN91rR__QZ","size-600":"Id4Nx124Ibdk9rNmMF3P","size-700":"H7rwT8ahhocNulR9AUpX","size-800":"o2JatwSFoDGBsLxVoh_E","size-900":"BwyJkocjVHWSx2n95hEB","color-primary":"bhwHfUOXz_F0e13dnvlO","color-secondary":"Q6BjkbkEU2AG2YofsTdY","color-error":"VGjsB7F3GE_2H3hTa5e9","color-success":"JwIm3XCO4hCIzxTs7XCP","color-default":"wlLJA_kXjcB77mWun3i4","color-disabled":"GGrE0rCk23sUW8byGthr","color-inverse":"PYUvxhHxZBJWFLDMWVdK",bold:"LbNEY29iDvAzmnsE2w6Q"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);