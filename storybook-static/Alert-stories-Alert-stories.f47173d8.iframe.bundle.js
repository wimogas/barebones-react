"use strict";(self.webpackChunkreact_barebones_ts=self.webpackChunkreact_barebones_ts||[]).push([[793],{"./src/assets/icons/close-fill.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgCloseFill(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"m12 10.586 4.95-4.95 1.415 1.415-4.95 4.95 4.95 4.95-1.415 1.414-4.95-4.95-4.95 4.95-1.413-1.415 4.95-4.95-4.95-4.95L7.05 5.638l4.95 4.95Z"})))}},"./src/Alert/stories/Alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Banner:()=>Banner,BannerDismissable:()=>BannerDismissable,Error:()=>Error,Success:()=>Success,Toast:()=>Toast,ToastDismissable:()=>ToastDismissable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Alert_stories});var _path,_path2,react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const check_line=function SvgCheckLine(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),_path2||(_path2=react.createElement("path",{d:"m10 15.172 9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"})))};var alert_fill_path,alert_fill_path2;function alert_fill_extends(){return alert_fill_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},alert_fill_extends.apply(this,arguments)}const alert_fill=function SvgAlertFill(props){return react.createElement("svg",alert_fill_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},props),alert_fill_path||(alert_fill_path=react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),alert_fill_path2||(alert_fill_path2=react.createElement("path",{d:"m12.866 3 9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z"})))};var close_fill=__webpack_require__("./src/assets/icons/close-fill.svg"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Alert_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/Alert/Alert.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Alert_module.Z,options);const Alert_Alert_module=Alert_module.Z&&Alert_module.Z.locals?Alert_module.Z.locals:void 0;var Block=__webpack_require__("./src/Block/index.tsx"),Icon=__webpack_require__("./src/Icon/index.tsx"),Button=__webpack_require__("./src/Button/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Alert=({message,variant,type,close,icon,iconColor,style})=>(0,jsx_runtime.jsxs)("div",{className:classnames_default()(Alert_Alert_module.alert,variant&&Alert_Alert_module[variant],type&&Alert_Alert_module[type]),style,children:[(0,jsx_runtime.jsxs)(Block.Z,{size:300,style:{alignItems:"center"},children:[icon?(0,jsx_runtime.jsx)(Icon.Z,{icon,color:iconColor}):"success"===variant?(0,jsx_runtime.jsx)(Icon.Z,{icon:(0,jsx_runtime.jsx)(check_line,{}),color:"#168B42",size:24}):"error"===variant?(0,jsx_runtime.jsx)(Icon.Z,{icon:(0,jsx_runtime.jsx)(alert_fill,{}),color:"#982B1D",size:24}):null,message]}),close&&(0,jsx_runtime.jsx)(Block.Z,{classes:"bb-pl-500",children:(0,jsx_runtime.jsx)(Button.Z,{variant:"icon-only",action:close,icon:(0,jsx_runtime.jsx)(close_fill.Z,{})})})]});Alert.displayName="Alert";const src_Alert=Alert;try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"toast"'},{value:'"banner"'}]}},close:{defaultValue:null,description:"",name:"close",required:!1,type:{name:"any"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{}"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},iconColor:{defaultValue:null,description:"",name:"iconColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Alert/index.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"src/Alert/index.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}const Alert_stories={title:"COMPONENTS/Alert",component:src_Alert,argTypes:{variant:{type:{required:!0},control:"select",options:["success","error"]},type:{type:{required:!0},control:"select",options:["banner","toast",null]},children:{control:"text"},close:{control:"boolean"}}},Template=args=>(0,jsx_runtime.jsx)(src_Alert,{variant:args.variant,message:args.message,type:args.type,close:args.close,icon:args.icon,iconColor:args.iconColor});Template.displayName="Template";const ThrowAlert=args=>{const[showAlert,setShowAlert]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const cleanAlerts=setTimeout((()=>{showAlert&&setShowAlert(!1)}),3e3);return()=>clearTimeout(cleanAlerts)}),[showAlert]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"primary",action:()=>setShowAlert(!0),children:"Launch Alert"}),showAlert&&(0,jsx_runtime.jsx)(src_Alert,{variant:args.variant,message:args.message,type:args.type,close:args.close&&function handleShowAlert(){setShowAlert(!1)},icon:args.icon,iconColor:args.iconColor})]})},Success=Template.bind({});Success.args={variant:"success",message:"Successful alert"};const Error=Template.bind({});Error.args={variant:"error",message:"Error alert"};const Banner=ThrowAlert.bind({});Banner.args={variant:"error",message:"Error alert",type:"banner"};const BannerDismissable=ThrowAlert.bind({});BannerDismissable.args={variant:"error",message:"Error alert",type:"banner",close:!0};const Toast=ThrowAlert.bind({});Toast.args={variant:"success",message:"Successful alert",type:"toast"};const ToastDismissable=ThrowAlert.bind({});ToastDismissable.args={variant:"success",message:"Successful alert",type:"toast",close:!0},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"args => <Alert variant={args.variant} message={args.message} type={args.type} close={args.close} icon={args.icon} iconColor={args.iconColor} />",...Success.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"args => <Alert variant={args.variant} message={args.message} type={args.type} close={args.close} icon={args.icon} iconColor={args.iconColor} />",...Error.parameters?.docs?.source}}},Banner.parameters={...Banner.parameters,docs:{...Banner.parameters?.docs,source:{originalSource:"args => {\n  const [showAlert, setShowAlert] = useState(false);\n  function handleShowAlert() {\n    setShowAlert(false);\n  }\n  useEffect(() => {\n    const cleanAlerts = setTimeout(() => {\n      if (showAlert) {\n        setShowAlert(false);\n      }\n    }, 3000);\n    return () => clearTimeout(cleanAlerts);\n  }, [showAlert]);\n  return <>\r\n            <Button variant='primary' action={() => setShowAlert(true)}>Launch Alert</Button>\r\n            {showAlert && <Alert variant={args.variant} message={args.message} type={args.type} close={args.close && handleShowAlert} icon={args.icon} iconColor={args.iconColor} />}\r\n        </>;\n}",...Banner.parameters?.docs?.source}}},BannerDismissable.parameters={...BannerDismissable.parameters,docs:{...BannerDismissable.parameters?.docs,source:{originalSource:"args => {\n  const [showAlert, setShowAlert] = useState(false);\n  function handleShowAlert() {\n    setShowAlert(false);\n  }\n  useEffect(() => {\n    const cleanAlerts = setTimeout(() => {\n      if (showAlert) {\n        setShowAlert(false);\n      }\n    }, 3000);\n    return () => clearTimeout(cleanAlerts);\n  }, [showAlert]);\n  return <>\r\n            <Button variant='primary' action={() => setShowAlert(true)}>Launch Alert</Button>\r\n            {showAlert && <Alert variant={args.variant} message={args.message} type={args.type} close={args.close && handleShowAlert} icon={args.icon} iconColor={args.iconColor} />}\r\n        </>;\n}",...BannerDismissable.parameters?.docs?.source}}},Toast.parameters={...Toast.parameters,docs:{...Toast.parameters?.docs,source:{originalSource:"args => {\n  const [showAlert, setShowAlert] = useState(false);\n  function handleShowAlert() {\n    setShowAlert(false);\n  }\n  useEffect(() => {\n    const cleanAlerts = setTimeout(() => {\n      if (showAlert) {\n        setShowAlert(false);\n      }\n    }, 3000);\n    return () => clearTimeout(cleanAlerts);\n  }, [showAlert]);\n  return <>\r\n            <Button variant='primary' action={() => setShowAlert(true)}>Launch Alert</Button>\r\n            {showAlert && <Alert variant={args.variant} message={args.message} type={args.type} close={args.close && handleShowAlert} icon={args.icon} iconColor={args.iconColor} />}\r\n        </>;\n}",...Toast.parameters?.docs?.source}}},ToastDismissable.parameters={...ToastDismissable.parameters,docs:{...ToastDismissable.parameters?.docs,source:{originalSource:"args => {\n  const [showAlert, setShowAlert] = useState(false);\n  function handleShowAlert() {\n    setShowAlert(false);\n  }\n  useEffect(() => {\n    const cleanAlerts = setTimeout(() => {\n      if (showAlert) {\n        setShowAlert(false);\n      }\n    }, 3000);\n    return () => clearTimeout(cleanAlerts);\n  }, [showAlert]);\n  return <>\r\n            <Button variant='primary' action={() => setShowAlert(true)}>Launch Alert</Button>\r\n            {showAlert && <Alert variant={args.variant} message={args.message} type={args.type} close={args.close && handleShowAlert} icon={args.icon} iconColor={args.iconColor} />}\r\n        </>;\n}",...ToastDismissable.parameters?.docs?.source}}};const __namedExportsOrder=["Success","Error","Banner","BannerDismissable","Toast","ToastDismissable"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/Alert/Alert.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".RjZis8gl2ysodv0FSWyQ{display:flex;align-items:center;justify-content:space-between;gap:var(--size-l);background-color:#fff;border-radius:4px;padding:12px;animation:kgpgzwm0M_vfuzdgK7vg .3s forwards}.DjtsScIydpt6WhzMk38n{background-color:#fff;color:#168b42;border:1px solid #168b42}.DjtsScIydpt6WhzMk38n._rlNiBbffzddZplSGdAW{border:none;border-bottom:1px solid #168b42}.pi7Xdtf9eMYWBcjdnBMs{background-color:#fff;color:#982b1d;border:1px solid #982b1d}.pi7Xdtf9eMYWBcjdnBMs._rlNiBbffzddZplSGdAW{border:none;border-bottom:1px solid #982b1d}._rlNiBbffzddZplSGdAW{padding:10px 20px 10px 30px;position:fixed;top:0;left:0;width:100%;height:50px;animation:ZVcTehvq6whfRtUzNSOB .3s forwards;border-radius:0;z-index:99999}.AfVZ2ZGTlGfo2FVS3B8m{position:fixed;top:unset;bottom:20px;left:20px;width:fit-content;border-radius:6px;animation:oT92ox1SKG7aarFlNniB .3s forwards;z-index:9999}@keyframes kgpgzwm0M_vfuzdgK7vg{from{opacity:0}to{opacity:1}}@keyframes oT92ox1SKG7aarFlNniB{from{bottom:-80px}to{bottom:20px}}@keyframes ZVcTehvq6whfRtUzNSOB{from{top:-80px}to{top:0}}","",{version:3,sources:["webpack://./src/Alert/Alert.module.scss","webpack://./src/assets/scss/variables/_theme.scss","webpack://./src/assets/scss/variables/_colors.scss"],names:[],mappings:"AAEA,sBACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,iBAAA,CACA,qBAAA,CACA,iBAAA,CACA,YAAA,CACA,2CAAA,CAGF,sBACE,qBC0IuB,CDzIvB,aEgCW,CF/BX,wBAAA,CACA,2CACE,WAAA,CACA,+BAAA,CAIJ,sBACE,qBCmIqB,CDlIrB,aEUS,CFTT,wBAAA,CACA,2CACE,WAAA,CACA,+BAAA,CAIJ,sBACE,2BAAA,CACA,cAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,2CAAA,CACA,eAAA,CACA,aAAA,CAGF,sBACE,cAAA,CACA,SAAA,CACA,WAAA,CACA,SAAA,CACA,iBAAA,CACA,iBAAA,CACA,2CAAA,CACA,YAAA,CAGF,gCACE,KACE,SAAA,CACA,GACI,SAAA,CAAA,CAIR,gCACE,KACE,YAAA,CACA,GACA,WAAA,CAAA,CAIJ,gCACE,KACE,SAAA,CACA,GACE,KAAA,CAAA",sourcesContent:["@use '../assets/scss/variables/theme' as *;\r\n\r\n.alert {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: var(--size-l);\r\n  background-color: white;\r\n  border-radius: 4px;\r\n  padding: 12px;\r\n  animation: animateInAlert .3s forwards;\r\n}\r\n\r\n.success {\r\n  background-color: $alert-success-bg-color;\r\n  color: $alert-success-color;\r\n  border: 1px solid $alert-success-border-color;\r\n  &.banner {\r\n    border: none;\r\n    border-bottom: 1px solid $alert-success-border-color;\r\n  }\r\n}\r\n\r\n.error {\r\n  background-color: $alert-error-bg-color;\r\n  color: $alert-error-color;\r\n  border: 1px solid $alert-error-border-color;\r\n  &.banner {\r\n    border: none;\r\n    border-bottom: 1px solid $alert-error-border-color;\r\n  }\r\n}\r\n\r\n.banner {\r\n  padding: 10px 20px 10px 30px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 50px;\r\n  animation: animateInBanner .3s forwards;\r\n  border-radius: 0;\r\n  z-index: 99999;\r\n}\r\n\r\n.toast {\r\n  position: fixed;\r\n  top: unset;\r\n  bottom: 20px;\r\n  left: 20px;\r\n  width: fit-content;\r\n  border-radius: 6px;\r\n  animation: animateInToast .3s forwards;\r\n  z-index: 9999;\r\n}\r\n\r\n@keyframes animateInAlert {\r\n  from {\r\n    opacity: 0;\r\n  } to {\r\n        opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes animateInToast {\r\n  from {\r\n    bottom: -80px;\r\n  } to {\r\n    bottom: 20px;\r\n  }\r\n}\r\n\r\n@keyframes animateInBanner {\r\n  from {\r\n    top: -80px;\r\n  } to {\r\n      top: 0;\r\n    }\r\n}",'@use \'./colors\' as *;\r\n@use \'./border-radius\' as *;\r\n@use \'./spacing\' as *;\r\n@use \'./typography\' as *;\r\n@use \'./spacing\' as *;\r\n\r\n// Color map\r\n$color-map: (\r\n  "primary": $primary100,\r\n  "secondary": $secondary700,\r\n  "tertiary": $secondary100,\r\n  "error": $error500,\r\n  "success": $success500,\r\n  "default": $secondary400,\r\n  "disabled": $secondary100,\r\n);\r\n\r\n$color-dark-map: (\r\n  "primary": $primary50,\r\n  "secondary": $secondary400,\r\n  "error": $error300,\r\n  "success": $success200,\r\n  "default": $secondary100,\r\n  "disabled": $secondary500,\r\n);\r\n\r\n// Spacing map\r\n$spacing-map: (\r\n  "50": $spacing50,\r\n  "100": $spacing100,\r\n  "200": $spacing200,\r\n  "300": $spacing300,\r\n  "400": $spacing400,\r\n  "500": $spacing500,\r\n  "600": $spacing600,\r\n  "700": $spacing700,\r\n  "800": $spacing800,\r\n  "900": $spacing900,\r\n);\r\n\r\n\r\n// Button tokens\r\n$button-bg-color: $neutral700;\r\n$button-border-size: 1px;\r\n$button-padding: $spacing200 $spacing300;\r\n$button-border-radius: $borderRadius300;\r\n$button-gap: $spacing100;\r\n$button-font-size: $fontSize300;\r\n$button-line-height: $lineHeight100;\r\n\r\n$button-disabled-bg-color: $neutral600;\r\n$button-disabled-color: $neutral300;\r\n$button-disabled-dark-bg-color: $neutral600;\r\n$button-disabled-dark-color: $neutral500;\r\n$button-focus-color: $primary600;\r\n\r\n// Button Primary\r\n$button-primary-bg-color: $primary300;\r\n$button-primary-color: $white;\r\n$button-primary-hover : $primary700;\r\n$button-primary-active: $primary700;\r\n$button-primary-focus: $primary700;\r\n\r\n// Button Secondary\r\n$button-secondary-bg-color: $secondary100;\r\n$button-secondary-color: $secondary500;\r\n$button-secondary-hover : $secondary300;\r\n$button-secondary-active: $secondary300;\r\n$button-secondary-focus: $secondary300;\r\n\r\n// Button Tertiary\r\n$button-tertiary-bg-color: transparent;\r\n$button-tertiary-color: $secondary400;\r\n$button-tertiary-hover : $secondary900;\r\n$button-tertiary-active: $secondary900;\r\n$button-tertiary-focus: transparent;\r\n\r\n// Button Danger\r\n$button-danger-bg-color: $error500;\r\n$button-danger-color: $white;\r\n$button-danger-hover : $error700;\r\n$button-danger-active: $error700;\r\n$button-danger-focus: $error600;\r\n\r\n// Button Success\r\n$button-success-bg-color: $success500;\r\n$button-success-color: $white;\r\n$button-success-hover : $success700;\r\n$button-success-active: $success700;\r\n$button-success-focus: $success600;\r\n\r\n// Button Icon Only\r\n$button-icon-only-bg-color: transparent;\r\n$button-icon-only-color: $secondary400;\r\n$button-icon-only-hover : $secondary900;\r\n$button-icon-only-active: $secondary900;\r\n$button-icon-only-focus: transparent;\r\n\r\n// Button Primary Dark\r\n$button-primary-dark-bg-color: $primary200;\r\n$button-primary-dark-color: $white;\r\n$button-primary-dark-hover : $primary100;\r\n$button-primary-dark-active: $primary100;\r\n$button-primary-dark-focus: $primary100;\r\n\r\n// Button Secondary Dark\r\n$button-secondary-dark-bg-color: $secondary200;\r\n$button-secondary-dark-color: $secondary700;\r\n$button-secondary-dark-hover : $secondary100;\r\n$button-secondary-dark-active: $secondary100;\r\n$button-secondary-dark-focus: $secondary100;\r\n\r\n// Button Tertiary Dark\r\n$button-tertiary-dark-bg-color: transparent;\r\n$button-tertiary-dark-color: $secondary300;\r\n$button-tertiary-dark-hover : $secondary100;\r\n$button-tertiary-dark-active: $secondary100;\r\n$button-tertiary-dark-focus: transparent;\r\n\r\n// Button Danger Dark\r\n$button-danger-dark-bg-color: $error500;\r\n$button-danger-dark-color: $white;\r\n$button-danger-dark-hover : $error300;\r\n$button-danger-dark-active: $error300;\r\n$button-danger-dark-focus: $error300;\r\n\r\n// Button Success Dark\r\n$button-success-dark-bg-color: $success500;\r\n$button-success-dark-color: $white;\r\n$button-success-dark-hover : $success200;\r\n$button-success-dark-active: $success200;\r\n$button-success-dark-focus: $success200;\r\n\r\n// Button Icon Only\r\n$button-icon-only-dark-bg-color: transparent;\r\n$button-icon-only-dark-color: $secondary300;\r\n$button-icon-only-dark-hover : $secondary100;\r\n$button-icon-only-dark-active: $secondary100;\r\n$button-icon-only-dark-focus: transparent;\r\n\r\n\r\n\r\n\r\n// Input\r\n$input-label-color: $secondary500;\r\n$input-border: $secondary300;\r\n$input-error-border-color: $error500;\r\n$input-disabled-bg-color: $secondary100;\r\n\r\n\r\n// Alert\r\n$alert-success-color: $success500;\r\n$alert-success-bg-color: white;\r\n$alert-success-border-color: $success500;\r\n$alert-error-color: $error700;\r\n$alert-error-bg-color: white;\r\n$alert-error-border-color: $error700;\r\n\r\n\r\n// Badge\r\n$badge-bg-color: $neutral500;\r\n\r\n\r\n// Dropdown\r\n$dropdown-item-color: $secondary500;\r\n$dropdown-item-hover-bg-color: $secondary300;\r\n\r\n\r\n// Modal\r\n\r\n$modal-header-border-color: $neutral400;\r\n$modal-title-color: $secondary700;\r\n\r\n\r\n// Block\r\n\r\n$block-card-border-color: $neutral400;\r\n$block-card-color: $neutral700;\r\n$block-card-dark-color: $neutral100;\r\n$block-card-dark-background: $neutral700;\r\n',"$white: #ffffff;\r\n$black: #000000;\r\n\r\n$primary900: #0A466E;\r\n$primary800: #0B4D79;\r\n$primary700: #0C5585;\r\n$primary600: #0D5D92;\r\n$primary500: #0E66A1;\r\n$primary400: #0F70B1;\r\n$primary300: #107BC3;\r\n$primary200: #1287D6;\r\n$primary100: #1495EB;\r\n$primary50: #2892D2;\r\n\r\n$secondary900: #404040;\r\n$secondary700: #464646;\r\n$secondary500: #555555;\r\n$secondary400: #808080;\r\n$secondary300: #AEAEAE;\r\n$secondary200: #c0c0c0;\r\n$secondary100: #D7D7D7;\r\n\r\n$neutral900: #0F1113;\r\n$neutral800: #16191C;\r\n$neutral700: #1D2125;\r\n$neutral600: #2C2F33;\r\n$neutral500: #56595C;\r\n$neutral400: #8E9092;\r\n$neutral300: #C7C8C9;\r\n$neutral200: #d8d9da;\r\n$neutral100: #F5F5F5;\r\n$neutral50: #FAFAFA;\r\n\r\n$error900: #7D2318;\r\n$error800: #8A271A;\r\n$error700: #982B1D;\r\n$error600: #A72F20;\r\n$error500: #B83423;\r\n$error300: #cc4332;\r\n$error200: #be695e;\r\n$error100: #E0978E;\r\n$error50: #F0CBC7;\r\n\r\n$success900: #0F5F2D;\r\n$success800: #106932;\r\n$success700: #127337;\r\n$success600: #147E3C;\r\n$success500: #168B42;\r\n$success200: #189949;\r\n$success100: #8CCCA4;\r\n$success50: #C6E6D2;\r\n\r\n$warning900: #653600;\r\n$warning800: #814600;\r\n$warning700: #B96400;\r\n$warning600: #D57300;\r\n$warning500: #FFAA46;\r\n$warning100: #FFD9A0;\r\n$warning50: #FFF1DB;\r\n\r\n$info900: #1C303B;\r\n$info800: #0A496A;\r\n$info700: #005583;\r\n$info600: #0067AA;\r\n$info500: #2977D1;\r\n$info100: #BAEBF5;\r\n$info50: #E9F9FB;"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={alert:"RjZis8gl2ysodv0FSWyQ",animateInAlert:"kgpgzwm0M_vfuzdgK7vg",success:"DjtsScIydpt6WhzMk38n",banner:"_rlNiBbffzddZplSGdAW",error:"pi7Xdtf9eMYWBcjdnBMs",animateInBanner:"ZVcTehvq6whfRtUzNSOB",toast:"AfVZ2ZGTlGfo2FVS3B8m",animateInToast:"oT92ox1SKG7aarFlNniB"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);