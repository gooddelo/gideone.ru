"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/html-parse-stringify";
exports.ids = ["vendor-chunks/html-parse-stringify"];
exports.modules = {

/***/ "(ssr)/./node_modules/html-parse-stringify/dist/html-parse-stringify.module.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/html-parse-stringify/dist/html-parse-stringify.module.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! void-elements */ \"(ssr)/./node_modules/void-elements/index.js\");\n/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(void_elements__WEBPACK_IMPORTED_MODULE_0__);\nvar t=/\\s([^'\"/\\s><]+?)[\\s/>]|([^\\s=]+)=\\s?(\".*?\"|'.*?')/g;function n(n){var r={type:\"tag\",name:\"\",voidElement:!1,attrs:{},children:[]},i=n.match(/<\\/?([^\\s]+?)[/\\s>]/);if(i&&(r.name=i[1],((void_elements__WEBPACK_IMPORTED_MODULE_0___default())[i[1]]||\"/\"===n.charAt(n.length-2))&&(r.voidElement=!0),r.name.startsWith(\"!--\"))){var s=n.indexOf(\"--\\x3e\");return{type:\"comment\",comment:-1!==s?n.slice(4,s):\"\"}}for(var a=new RegExp(t),c=null;null!==(c=a.exec(n));)if(c[0].trim())if(c[1]){var o=c[1].trim(),l=[o,\"\"];o.indexOf(\"=\")>-1&&(l=o.split(\"=\")),r.attrs[l[0]]=l[1],a.lastIndex--}else c[2]&&(r.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return r}var r=/<[a-zA-Z0-9\\-\\!\\/](?:\"[^\"]*\"|'[^']*'|[^'\">])*>/g,i=/^\\s*$/,s=Object.create(null);function a(e,t){switch(t.type){case\"text\":return e+t.content;case\"tag\":return e+=\"<\"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'=\"'+e[n]+'\"');return t.length?\" \"+t.join(\" \"):\"\"}(t.attrs):\"\")+(t.voidElement?\"/>\":\">\"),t.voidElement?e:e+t.children.reduce(a,\"\")+\"</\"+t.name+\">\";case\"comment\":return e+\"\\x3c!--\"+t.comment+\"--\\x3e\"}}var c={parse:function(e,t){t||(t={}),t.components||(t.components=s);var a,c=[],o=[],l=-1,m=!1;if(0!==e.indexOf(\"<\")){var u=e.indexOf(\"<\");c.push({type:\"text\",content:-1===u?e:e.substring(0,u)})}return e.replace(r,function(r,s){if(m){if(r!==\"</\"+a.name+\">\")return;m=!1}var u,f=\"/\"!==r.charAt(1),h=r.startsWith(\"\\x3c!--\"),p=s+r.length,d=e.charAt(p);if(h){var v=n(r);return l<0?(c.push(v),c):((u=o[l]).children.push(v),c)}if(f&&(l++,\"tag\"===(a=n(r)).type&&t.components[a.name]&&(a.type=\"component\",m=!0),a.voidElement||m||!d||\"<\"===d||a.children.push({type:\"text\",content:e.slice(p,e.indexOf(\"<\",p))}),0===l&&c.push(a),(u=o[l-1])&&u.children.push(a),o[l]=a),(!f||a.voidElement)&&(l>-1&&(a.voidElement||a.name===r.slice(2,-1))&&(l--,a=-1===l?c:o[l]),!m&&\"<\"!==d&&d)){u=-1===l?c:o[l].children;var x=e.indexOf(\"<\",p),g=e.slice(p,-1===x?void 0:x);i.test(g)&&(g=\" \"),(x>-1&&l+u.length>=0||\" \"!==g)&&u.push({type:\"text\",content:g})}}),c},stringify:function(e){return e.reduce(function(e,t){return e+a(\"\",t)},\"\")}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (c);\n//# sourceMappingURL=html-parse-stringify.module.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHRtbC1wYXJzZS1zdHJpbmdpZnkvZGlzdC9odG1sLXBhcnNlLXN0cmluZ2lmeS5tb2R1bGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZCLDJEQUEyRCxjQUFjLE9BQU8sMENBQTBDLGFBQWEsa0NBQWtDLG9CQUFvQixzREFBQyxtRkFBbUYsMEJBQTBCLE9BQU8sK0NBQStDLCtCQUErQixxQkFBcUIseUJBQXlCLDJCQUEyQixxRUFBcUUsa0VBQWtFLFNBQVMsd0ZBQXdGLGdCQUFnQixlQUFlLDhCQUE4QixvREFBb0QsU0FBUyx1Q0FBdUMsbUNBQW1DLGlHQUFpRyxxREFBcUQsT0FBTyxvQkFBb0IsUUFBUSxpQ0FBaUMsMEJBQTBCLHVCQUF1QixxQkFBcUIsUUFBUSw4Q0FBOEMsRUFBRSxpQ0FBaUMsTUFBTSw4QkFBOEIsS0FBSywrRUFBK0UsTUFBTSxXQUFXLHVEQUF1RCxrSUFBa0ksZ0RBQWdELHNLQUFzSyx5QkFBeUIsb0RBQW9ELDJEQUEyRCxzQkFBc0IsR0FBRyxJQUFJLHVCQUF1Qiw4QkFBOEIsaUJBQWlCLE9BQU8saUVBQWUsQ0FBQyxFQUFDO0FBQ3RpRSIsInNvdXJjZXMiOlsiQzpcXFByb2plY3RzXFxnaWRlb25lLnJ1XFxub2RlX21vZHVsZXNcXGh0bWwtcGFyc2Utc3RyaW5naWZ5XFxkaXN0XFxodG1sLXBhcnNlLXN0cmluZ2lmeS5tb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGUgZnJvbVwidm9pZC1lbGVtZW50c1wiO3ZhciB0PS9cXHMoW14nXCIvXFxzPjxdKz8pW1xccy8+XXwoW15cXHM9XSspPVxccz8oXCIuKj9cInwnLio/JykvZztmdW5jdGlvbiBuKG4pe3ZhciByPXt0eXBlOlwidGFnXCIsbmFtZTpcIlwiLHZvaWRFbGVtZW50OiExLGF0dHJzOnt9LGNoaWxkcmVuOltdfSxpPW4ubWF0Y2goLzxcXC8/KFteXFxzXSs/KVsvXFxzPl0vKTtpZihpJiYoci5uYW1lPWlbMV0sKGVbaVsxXV18fFwiL1wiPT09bi5jaGFyQXQobi5sZW5ndGgtMikpJiYoci52b2lkRWxlbWVudD0hMCksci5uYW1lLnN0YXJ0c1dpdGgoXCIhLS1cIikpKXt2YXIgcz1uLmluZGV4T2YoXCItLVxceDNlXCIpO3JldHVybnt0eXBlOlwiY29tbWVudFwiLGNvbW1lbnQ6LTEhPT1zP24uc2xpY2UoNCxzKTpcIlwifX1mb3IodmFyIGE9bmV3IFJlZ0V4cCh0KSxjPW51bGw7bnVsbCE9PShjPWEuZXhlYyhuKSk7KWlmKGNbMF0udHJpbSgpKWlmKGNbMV0pe3ZhciBvPWNbMV0udHJpbSgpLGw9W28sXCJcIl07by5pbmRleE9mKFwiPVwiKT4tMSYmKGw9by5zcGxpdChcIj1cIikpLHIuYXR0cnNbbFswXV09bFsxXSxhLmxhc3RJbmRleC0tfWVsc2UgY1syXSYmKHIuYXR0cnNbY1syXV09Y1szXS50cmltKCkuc3Vic3RyaW5nKDEsY1szXS5sZW5ndGgtMSkpO3JldHVybiByfXZhciByPS88W2EtekEtWjAtOVxcLVxcIVxcL10oPzpcIlteXCJdKlwifCdbXiddKid8W14nXCI+XSkqPi9nLGk9L15cXHMqJC8scz1PYmplY3QuY3JlYXRlKG51bGwpO2Z1bmN0aW9uIGEoZSx0KXtzd2l0Y2godC50eXBlKXtjYXNlXCJ0ZXh0XCI6cmV0dXJuIGUrdC5jb250ZW50O2Nhc2VcInRhZ1wiOnJldHVybiBlKz1cIjxcIit0Lm5hbWUrKHQuYXR0cnM/ZnVuY3Rpb24oZSl7dmFyIHQ9W107Zm9yKHZhciBuIGluIGUpdC5wdXNoKG4rJz1cIicrZVtuXSsnXCInKTtyZXR1cm4gdC5sZW5ndGg/XCIgXCIrdC5qb2luKFwiIFwiKTpcIlwifSh0LmF0dHJzKTpcIlwiKSsodC52b2lkRWxlbWVudD9cIi8+XCI6XCI+XCIpLHQudm9pZEVsZW1lbnQ/ZTplK3QuY2hpbGRyZW4ucmVkdWNlKGEsXCJcIikrXCI8L1wiK3QubmFtZStcIj5cIjtjYXNlXCJjb21tZW50XCI6cmV0dXJuIGUrXCJcXHgzYyEtLVwiK3QuY29tbWVudCtcIi0tXFx4M2VcIn19dmFyIGM9e3BhcnNlOmZ1bmN0aW9uKGUsdCl7dHx8KHQ9e30pLHQuY29tcG9uZW50c3x8KHQuY29tcG9uZW50cz1zKTt2YXIgYSxjPVtdLG89W10sbD0tMSxtPSExO2lmKDAhPT1lLmluZGV4T2YoXCI8XCIpKXt2YXIgdT1lLmluZGV4T2YoXCI8XCIpO2MucHVzaCh7dHlwZTpcInRleHRcIixjb250ZW50Oi0xPT09dT9lOmUuc3Vic3RyaW5nKDAsdSl9KX1yZXR1cm4gZS5yZXBsYWNlKHIsZnVuY3Rpb24ocixzKXtpZihtKXtpZihyIT09XCI8L1wiK2EubmFtZStcIj5cIilyZXR1cm47bT0hMX12YXIgdSxmPVwiL1wiIT09ci5jaGFyQXQoMSksaD1yLnN0YXJ0c1dpdGgoXCJcXHgzYyEtLVwiKSxwPXMrci5sZW5ndGgsZD1lLmNoYXJBdChwKTtpZihoKXt2YXIgdj1uKHIpO3JldHVybiBsPDA/KGMucHVzaCh2KSxjKTooKHU9b1tsXSkuY2hpbGRyZW4ucHVzaCh2KSxjKX1pZihmJiYobCsrLFwidGFnXCI9PT0oYT1uKHIpKS50eXBlJiZ0LmNvbXBvbmVudHNbYS5uYW1lXSYmKGEudHlwZT1cImNvbXBvbmVudFwiLG09ITApLGEudm9pZEVsZW1lbnR8fG18fCFkfHxcIjxcIj09PWR8fGEuY2hpbGRyZW4ucHVzaCh7dHlwZTpcInRleHRcIixjb250ZW50OmUuc2xpY2UocCxlLmluZGV4T2YoXCI8XCIscCkpfSksMD09PWwmJmMucHVzaChhKSwodT1vW2wtMV0pJiZ1LmNoaWxkcmVuLnB1c2goYSksb1tsXT1hKSwoIWZ8fGEudm9pZEVsZW1lbnQpJiYobD4tMSYmKGEudm9pZEVsZW1lbnR8fGEubmFtZT09PXIuc2xpY2UoMiwtMSkpJiYobC0tLGE9LTE9PT1sP2M6b1tsXSksIW0mJlwiPFwiIT09ZCYmZCkpe3U9LTE9PT1sP2M6b1tsXS5jaGlsZHJlbjt2YXIgeD1lLmluZGV4T2YoXCI8XCIscCksZz1lLnNsaWNlKHAsLTE9PT14P3ZvaWQgMDp4KTtpLnRlc3QoZykmJihnPVwiIFwiKSwoeD4tMSYmbCt1Lmxlbmd0aD49MHx8XCIgXCIhPT1nKSYmdS5wdXNoKHt0eXBlOlwidGV4dFwiLGNvbnRlbnQ6Z30pfX0pLGN9LHN0cmluZ2lmeTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZWR1Y2UoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSthKFwiXCIsdCl9LFwiXCIpfX07ZXhwb3J0IGRlZmF1bHQgYztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWwtcGFyc2Utc3RyaW5naWZ5Lm1vZHVsZS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/html-parse-stringify/dist/html-parse-stringify.module.js\n");

/***/ })

};
;