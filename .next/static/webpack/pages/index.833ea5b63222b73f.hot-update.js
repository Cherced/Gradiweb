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

/***/ "./db/data.cherced.js":
/*!****************************!*\
  !*** ./db/data.cherced.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProducts\": function() { return /* binding */ getProducts; },\n/* harmony export */   \"getShoes\": function() { return /* binding */ getShoes; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_HITMA_Desktop_WORKZONE_GradiTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_HITMA_Desktop_WORKZONE_GradiTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HITMA_Desktop_WORKZONE_GradiTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction getProducts() {\n    return _getProducts.apply(this, arguments);\n}\nfunction _getProducts() {\n    _getProducts = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(C_Users_HITMA_Desktop_WORKZONE_GradiTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, data;\n        return C_Users_HITMA_Desktop_WORKZONE_GradiTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return fetch(\"https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js\", {\n                        method: \"GET\",\n                        mode: \"no-cors\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        }\n                    });\n                case 3:\n                    res = _ctx.sent;\n                    if (!(res.status !== 200)) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    throw new Error(res.statusText);\n                case 6:\n                    data = res.json();\n                    console.log(data);\n                    return _ctx.abrupt(\"return\", data);\n                case 11:\n                    _ctx.prev = 11;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 14:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                11\n            ]\n        ]);\n    }));\n    return _getProducts.apply(this, arguments);\n}\nvar options = {\n    method: \"GET\",\n    headers: {\n        \"X-RapidAPI-Key\": \"0e0a5a5c39mshc6de94e22b46be3p11f8f8jsn79d12c5e06e5\",\n        \"X-RapidAPI-Host\": \"shoes-collections.p.rapidapi.com\"\n    }\n};\nfunction getShoes() {\n    return _getShoes.apply(this, arguments);\n}\nfunction _getShoes() {\n    _getShoes = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(C_Users_HITMA_Desktop_WORKZONE_GradiTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, data;\n        return C_Users_HITMA_Desktop_WORKZONE_GradiTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return fetch(\"https://shoes-collections.p.rapidapi.com/shoes\", options);\n                case 3:\n                    res = _ctx.sent;\n                    if (!(res.status !== 200)) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    throw new Error(res.statusText);\n                case 6:\n                    data = res.json();\n                    console.log(data);\n                    return _ctx.abrupt(\"return\", data);\n                case 11:\n                    _ctx.prev = 11;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 14:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                11\n            ]\n        ]);\n    }));\n    return _getShoes.apply(this, arguments);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYi9kYXRhLmNoZXJjZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBTyxTQUFlQSxXQUFXO1dBQVhBLFlBQVc7Q0FpQmhDO1NBakJxQkEsWUFBVztJQUFYQSxZQUFXLEdBQTFCLDJQQUE2QjtZQUV0QkMsR0FBRyxFQVFIQyxJQUFJOzs7Ozs7MkJBUlFDLEtBQUssQ0FBQyxzRUFBc0UsRUFBRTt3QkFDNUZDLE1BQU0sRUFBRSxLQUFLO3dCQUNiQyxJQUFJLEVBQUUsU0FBUzt3QkFDZkMsT0FBTyxFQUFFOzRCQUNMLGNBQWMsRUFBRSxrQkFBa0I7eUJBQ3JDO3FCQUNKLENBQUM7O29CQU5JTCxHQUFHLFlBTVA7d0JBQ0VBLENBQUFBLENBQUFBLEdBQUcsQ0FBQ00sTUFBTSxLQUFLLEdBQUc7Ozs7b0JBQUUsTUFBTSxJQUFJQyxLQUFLLENBQUNQLEdBQUcsQ0FBQ1EsVUFBVSxDQUFDOztvQkFDakRQLElBQUksR0FBR0QsR0FBRyxDQUFDUyxJQUFJLEVBQUU7b0JBQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsSUFBSSxDQUFDO2lEQUNWQSxJQUFJOzs7O29CQUdYUyxPQUFPLENBQUNDLEdBQUcsU0FBTzs7Ozs7Ozs7Ozs7S0FFekI7V0FqQnFCWixZQUFXOztBQW9CakMsSUFBTWEsT0FBTyxHQUFHO0lBQ1pULE1BQU0sRUFBRSxLQUFLO0lBQ2JFLE9BQU8sRUFBRTtRQUNMLGdCQUFnQixFQUFFLG9EQUFvRDtRQUN0RSxpQkFBaUIsRUFBRSxrQ0FBa0M7S0FDeEQ7Q0FDSjtBQUVNLFNBQWVRLFFBQVE7V0FBUkEsU0FBUTtDQVc3QjtTQVhxQkEsU0FBUTtJQUFSQSxTQUFRLEdBQXZCLDJQQUEwQjtZQUVuQmIsR0FBRyxFQUVIQyxJQUFJOzs7Ozs7MkJBRlFDLEtBQUssQ0FBQyxnREFBZ0QsRUFBRVUsT0FBTyxDQUFDOztvQkFBNUVaLEdBQUcsWUFBeUU7d0JBQzlFQSxDQUFBQSxDQUFBQSxHQUFHLENBQUNNLE1BQU0sS0FBSyxHQUFHOzs7O29CQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDUCxHQUFHLENBQUNRLFVBQVUsQ0FBQzs7b0JBQ2pEUCxJQUFJLEdBQUdELEdBQUcsQ0FBQ1MsSUFBSSxFQUFFO29CQUN2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNWLElBQUksQ0FBQztpREFDVkEsSUFBSTs7OztvQkFHWFMsT0FBTyxDQUFDQyxHQUFHLFNBQU87Ozs7Ozs7Ozs7O0tBRXpCO1dBWHFCRSxTQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RiL2RhdGEuY2hlcmNlZC5qcz81YTNjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2dyYWRpdGVzdC1zdG9yZS5teXNob3BpZnkuY29tL3Byb2R1Y3RzL2ZyZWUtdHJhaW5lci0zLW1tdy5qc1wiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIG1vZGU6IFwibm8tY29yc1wiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkgdGhyb3cgbmV3IEVycm9yKHJlcy5zdGF0dXNUZXh0KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICByZXR1cm4gZGF0YVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnWC1SYXBpZEFQSS1LZXknOiAnMGUwYTVhNWMzOW1zaGM2ZGU5NGUyMmI0NmJlM3AxMWY4Zjhqc243OWQxMmM1ZTA2ZTUnLFxyXG4gICAgICAgICdYLVJhcGlkQVBJLUhvc3QnOiAnc2hvZXMtY29sbGVjdGlvbnMucC5yYXBpZGFwaS5jb20nXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2hvZXMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3Nob2VzLWNvbGxlY3Rpb25zLnAucmFwaWRhcGkuY29tL3Nob2VzJywgb3B0aW9ucylcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IocmVzLnN0YXR1c1RleHQpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIHJldHVybiBkYXRhXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJnZXRQcm9kdWN0cyIsInJlcyIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwic3RhdHVzIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwiZ2V0U2hvZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./db/data.cherced.js\n"));

/***/ })

});