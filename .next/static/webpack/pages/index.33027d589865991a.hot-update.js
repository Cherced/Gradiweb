"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/atoms/main/ProductDescription.jsx":
/*!******************************************************!*\
  !*** ./components/atoms/main/ProductDescription.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductDescription\": function() { return /* binding */ ProductDescription; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db_data_cherced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../db/data.cherced */ \"./db/data.cherced.js\");\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ProductDescription = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState([]), 2), externalApiShoes = ref[0], setExternalApiShoes = ref[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var mounted = true;\n        if (mounted) {\n            (0,_db_data_cherced__WEBPACK_IMPORTED_MODULE_2__.getProducts)().then(function(data) {\n                setExternalApiShoes(data);\n            });\n        }\n        return function() {\n            return mounted = false;\n        };\n    }, []);\n    console.log(externalApiShoes) // success api Calll!!! \n    ;\n    var mainItem = externalApiShoes[16];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"main-product-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pinky-background\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 3\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"main-price\",\n                    children: [\n                        \"$ \",\n                        mainItem === null || mainItem === void 0 ? void 0 : mainItem.price\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 3\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"main-title\",\n                    children: [\n                        mainItem === null || mainItem === void 0 ? void 0 : mainItem.title,\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 48\n                        }, _this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: mainItem === null || mainItem === void 0 ? void 0 : mainItem.category\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 54\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 3\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"main-rank\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"star-icon\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 5\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"star-icon\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 5\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"star-icon\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 5\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"star-icon\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 5\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"star-icon\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 5\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 3\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: \"main-product-description\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: mainItem === null || mainItem === void 0 ? void 0 : mainItem.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 3\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"cart-button\",\n                    href: \"www.google.com\",\n                    children: \"Add to Cart\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 3\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"main-product-picture\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: mainItem === null || mainItem === void 0 ? void 0 : mainItem.image,\n                        className: \"main-picture\",\n                        alt: mainItem === null || mainItem === void 0 ? void 0 : mainItem.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 5\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 3\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n            lineNumber: 27,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GradiTest\\\\components\\\\atoms\\\\main\\\\ProductDescription.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProductDescription, \"/sIS1uoXTInGKIzoIXHNfgBgxy0=\");\n_c = ProductDescription;\nvar _c;\n$RefreshReg$(_c, \"ProductDescription\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL21haW4vUHJvZHVjdERlc2NyaXB0aW9uLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUF5QjtBQUMyQjs7QUFFN0MsSUFBTUUsa0JBQWtCLEdBQUcsV0FBTTs7SUFFcEMsSUFBZ0RGLEdBQWtCLG9GQUFsQkEscURBQWMsQ0FBQyxFQUFFLENBQUMsTUFBM0RJLGdCQUFnQixHQUF5QkosR0FBa0IsR0FBM0MsRUFBRUssbUJBQW1CLEdBQUlMLEdBQWtCLEdBQXRCO0lBRTVDQSxzREFBZSxDQUFDLFdBQU07UUFDcEIsSUFBSU8sT0FBTyxHQUFHLElBQUk7UUFDbEIsSUFBSUEsT0FBTyxFQUFFO1lBQ1hOLDZEQUFXLEVBQUUsQ0FBQ08sSUFBSSxDQUFDLFNBQUNDLElBQUksRUFBRztnQkFDekJKLG1CQUFtQixDQUFDSSxJQUFJLENBQUM7YUFDMUIsQ0FBQztTQUNIO1FBQ0QsT0FBTzttQkFBTUYsT0FBTyxHQUFHLEtBQUs7U0FBQSxDQUFDO0tBRTlCLEVBQUMsRUFBRSxDQUFDO0lBRUxHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxnQkFBZ0IsQ0FBQyxDQUFDLHdCQUF3Qjs7SUFFdEQsSUFBTVEsUUFBUSxHQUFHUixnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7SUFJdkMscUJBQ0UsOERBQUNKLHVEQUFjO2tCQUNmLDRFQUFDYyxTQUFPO1lBQUNDLFNBQVMsRUFBQyx3QkFBd0I7OzhCQUM3Qyw4REFBQ0MsS0FBRztvQkFBQ0QsU0FBUyxFQUFDLGtCQUFrQjs7Ozs7eUJBQUc7OEJBQ3BDLDhEQUFDRSxJQUFFO29CQUFDRixTQUFTLEVBQUMsWUFBWTs7d0JBQUMsSUFBRTt3QkFBQ0gsUUFBUSxhQUFSQSxRQUFRLFdBQU8sR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxRQUFRLENBQUVNLEtBQUs7Ozs7Ozt5QkFBTTs4QkFDbkQsOERBQUNDLElBQUU7b0JBQUNKLFNBQVMsRUFBQyxZQUFZOzt3QkFBRUgsUUFBUSxhQUFSQSxRQUFRLFdBQU8sR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxRQUFRLENBQUVRLEtBQUs7d0JBQUMsR0FBQztzQ0FBQSw4REFBQ0MsSUFBRTs7OztpQ0FBRTt3QkFBQSxHQUFDO3NDQUFBLDhEQUFDQyxNQUFJO3NDQUFFVixRQUFRLGFBQVJBLFFBQVEsV0FBVSxHQUFsQkEsS0FBQUEsQ0FBa0IsR0FBbEJBLFFBQVEsQ0FBRVcsUUFBUTs7Ozs7aUNBQVE7Ozs7Ozt5QkFBSzs4QkFDekYsOERBQUNQLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxXQUFXOztzQ0FDeEIsOERBQUNPLE1BQUk7NEJBQUNQLFNBQVMsRUFBQyxXQUFXOzs7OztpQ0FBRztzQ0FDOUIsOERBQUNPLE1BQUk7NEJBQUNQLFNBQVMsRUFBQyxXQUFXOzs7OztpQ0FBRztzQ0FDOUIsOERBQUNPLE1BQUk7NEJBQUNQLFNBQVMsRUFBQyxXQUFXOzs7OztpQ0FBRztzQ0FDOUIsOERBQUNPLE1BQUk7NEJBQUNQLFNBQVMsRUFBQyxXQUFXOzs7OztpQ0FBRztzQ0FDOUIsOERBQUNPLE1BQUk7NEJBQUNQLFNBQVMsRUFBQyxXQUFXOzs7OztpQ0FBRzs7Ozs7O3lCQUMxQjs4QkFDTiw4REFBQ1MsU0FBTztvQkFBQ1QsU0FBUyxFQUFDLDBCQUEwQjs4QkFDM0MsNEVBQUNVLEdBQUM7a0NBQUViLFFBQVEsYUFBUkEsUUFBUSxXQUFhLEdBQXJCQSxLQUFBQSxDQUFxQixHQUFyQkEsUUFBUSxDQUFFYyxXQUFXOzs7Ozs2QkFBSzs7Ozs7eUJBQ3RCOzhCQUNWLDhEQUFDQyxHQUFDO29CQUFDWixTQUFTLEVBQUMsYUFBYTtvQkFBQ2EsSUFBSSxFQUFDLGdCQUFnQjs4QkFBQyxhQUFXOzs7Ozt5QkFBSTs4QkFDaEUsOERBQUNaLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxzQkFBc0I7OEJBQ25DLDRFQUFDYyxLQUFHO3dCQUFDQyxHQUFHLEVBQUVsQixRQUFRLGFBQVJBLFFBQVEsV0FBTyxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLFFBQVEsQ0FBRW1CLEtBQUs7d0JBQUVoQixTQUFTLEVBQUMsY0FBYzt3QkFBQ2lCLEdBQUcsRUFBRXBCLFFBQVEsYUFBUkEsUUFBUSxXQUFPLEdBQWZBLEtBQUFBLENBQWUsR0FBZkEsUUFBUSxDQUFFUSxLQUFLOzs7Ozs2QkFBSTs7Ozs7eUJBQ3hFOzs7Ozs7aUJBQ0U7Ozs7O2FBQ1csQ0FDbEI7Q0FDRjtHQTVDWWxCLGtCQUFrQjtBQUFsQkEsS0FBQUEsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXRvbXMvbWFpbi9Qcm9kdWN0RGVzY3JpcHRpb24uanN4PzcxNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2dldFByb2R1Y3RzfSBmcm9tICcuLi8uLi8uLi9kYi9kYXRhLmNoZXJjZWQnXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdERlc2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBbZXh0ZXJuYWxBcGlTaG9lcywgc2V0RXh0ZXJuYWxBcGlTaG9lc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IG1vdW50ZWQgPSB0cnVlO1xyXG4gICAgICBpZiAobW91bnRlZCkge1xyXG4gICAgICAgIGdldFByb2R1Y3RzKCkudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgIHNldEV4dGVybmFsQXBpU2hvZXMoZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAoKSA9PiBtb3VudGVkID0gZmFsc2U7XHJcblxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhleHRlcm5hbEFwaVNob2VzKSAvLyBzdWNjZXNzIGFwaSBDYWxsbCEhISBcclxuXHJcbiAgICBjb25zdCBtYWluSXRlbSA9IGV4dGVybmFsQXBpU2hvZXNbMTZdO1xyXG4gICAgXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpbi1wcm9kdWN0LWNvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicGlua3ktYmFja2dyb3VuZFwiIC8+XHJcbiAgPGgyIGNsYXNzTmFtZT1cIm1haW4tcHJpY2VcIj4kIHttYWluSXRlbT8ucHJpY2V9PC9oMj5cclxuICA8aDEgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPnttYWluSXRlbT8udGl0bGV9IDxici8+IDxzcGFuPnttYWluSXRlbT8uY2F0ZWdvcnl9PC9zcGFuPjwvaDE+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXJhbmtcIj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXItaWNvblwiIC8+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGFyLWljb25cIiAvPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic3Rhci1pY29uXCIgLz5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXItaWNvblwiIC8+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGFyLWljb25cIiAvPlxyXG4gIDwvZGl2PlxyXG4gIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1haW4tcHJvZHVjdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgPHA+e21haW5JdGVtPy5kZXNjcmlwdGlvbn08L3A+ICAgIFxyXG4gIDwvYXJ0aWNsZT5cclxuICA8YSBjbGFzc05hbWU9XCJjYXJ0LWJ1dHRvblwiIGhyZWY9XCJ3d3cuZ29vZ2xlLmNvbVwiPkFkZCB0byBDYXJ0PC9hPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wcm9kdWN0LXBpY3R1cmVcIj5cclxuICAgIDxpbWcgc3JjPXttYWluSXRlbT8uaW1hZ2V9IGNsYXNzTmFtZT1cIm1haW4tcGljdHVyZVwiIGFsdD17bWFpbkl0ZW0/LnRpdGxlfSAvPlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PiAgICBcclxuICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJnZXRQcm9kdWN0cyIsIlByb2R1Y3REZXNjcmlwdGlvbiIsInVzZVN0YXRlIiwiZXh0ZXJuYWxBcGlTaG9lcyIsInNldEV4dGVybmFsQXBpU2hvZXMiLCJ1c2VFZmZlY3QiLCJtb3VudGVkIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFpbkl0ZW0iLCJGcmFnbWVudCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInByaWNlIiwiaDEiLCJ0aXRsZSIsImJyIiwic3BhbiIsImNhdGVnb3J5IiwiYXJ0aWNsZSIsInAiLCJkZXNjcmlwdGlvbiIsImEiLCJocmVmIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/atoms/main/ProductDescription.jsx\n"));

/***/ })

});