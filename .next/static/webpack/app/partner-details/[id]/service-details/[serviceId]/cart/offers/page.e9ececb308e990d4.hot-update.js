"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/partner-details/[id]/service-details/[serviceId]/cart/offers/page",{

/***/ "(app-pages-browser)/./src/app/partner-details/[id]/service-details/[serviceId]/cart/offers/OfferList.jsx":
/*!********************************************************************************************!*\
  !*** ./src/app/partner-details/[id]/service-details/[serviceId]/cart/offers/OfferList.jsx ***!
  \********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../redux/store */ \"(app-pages-browser)/./src/redux/store.jsx\");\n/* harmony import */ var _OfferCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OfferCard */ \"(app-pages-browser)/./src/app/partner-details/[id]/service-details/[serviceId]/cart/offers/OfferCard.jsx\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-confetti */ \"(app-pages-browser)/./node_modules/react-confetti/dist/react-confetti.min.js\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst OfferList = (param)=>{\n    let { offers } = param;\n    _s();\n    const [showConfetti, setShowConfetti] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // State to control confetti visibility\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        width: window.innerWidth,\n        height: window.innerHeight\n    });\n    const handleApplyOffer = ()=>{\n        setShowConfetti(true); // Trigger confetti\n        // Stop confetti after a short duration\n        setTimeout(()=>{\n            setShowConfetti(false);\n        }, 3000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-[100px] relative\",\n            children: [\n                showConfetti && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_confetti__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    width: windowSize.width,\n                    height: windowSize.height,\n                    numberOfPieces: 300,\n                    recycle: false,\n                    gravity: 0.2\n                }, void 0, false, {\n                    fileName: \"/Users/vishnujangid/Desktop/luzo-main/src/app/partner-details/[id]/service-details/[serviceId]/cart/offers/OfferList.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, undefined),\n                offers === null || offers === void 0 ? void 0 : offers.map((offer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OfferCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        offer: offer,\n                        onApply: handleApplyOffer\n                    }, offer.id, false, {\n                        fileName: \"/Users/vishnujangid/Desktop/luzo-main/src/app/partner-details/[id]/service-details/[serviceId]/cart/offers/OfferList.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vishnujangid/Desktop/luzo-main/src/app/partner-details/[id]/service-details/[serviceId]/cart/offers/OfferList.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/vishnujangid/Desktop/luzo-main/src/app/partner-details/[id]/service-details/[serviceId]/cart/offers/OfferList.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(OfferList, \"/a/JpVL0mw+8sI+icOBTTN89sTU=\");\n_c = OfferList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OfferList);\nvar _c;\n$RefreshReg$(_c, \"OfferList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFydG5lci1kZXRhaWxzL1tpZF0vc2VydmljZS1kZXRhaWxzL1tzZXJ2aWNlSWRdL2NhcnQvb2ZmZXJzL09mZmVyTGlzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFd0M7QUFDRDtBQUNjO0FBQ2pCO0FBQ0U7QUFFdEMsTUFBTU0sWUFBWTtRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDM0IsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUMsUUFBUSx1Q0FBdUM7SUFDaEcsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDO1FBQzNDVyxPQUFPQyxPQUFPQyxVQUFVO1FBQ3hCQyxRQUFRRixPQUFPRyxXQUFXO0lBQzVCO0lBRUEsTUFBTUMsbUJBQW1CO1FBQ3ZCUixnQkFBZ0IsT0FBTyxtQkFBbUI7UUFFMUMsdUNBQXVDO1FBQ3ZDUyxXQUFXO1lBQ1RULGdCQUFnQjtRQUNsQixHQUFHO0lBQ0w7SUFFQSxxQkFDRSw4REFBQ1AsaURBQVFBO1FBQUNDLE9BQU9BLG9EQUFLQTtrQkFDcEIsNEVBQUNnQjtZQUFJQyxXQUFVOztnQkFFWlosOEJBQ0MsOERBQUNILHVEQUFRQTtvQkFDUE8sT0FBT0YsV0FBV0UsS0FBSztvQkFDdkJHLFFBQVFMLFdBQVdLLE1BQU07b0JBQ3pCTSxnQkFBZ0I7b0JBQ2hCQyxTQUFTO29CQUNUQyxTQUFTOzs7Ozs7Z0JBR1poQixtQkFBQUEsNkJBQUFBLE9BQVFpQixHQUFHLENBQUMsQ0FBQ0Msc0JBQ1osOERBQUNyQixrREFBU0E7d0JBQUNxQixPQUFPQTt3QkFBc0JDLFNBQVNUO3VCQUFuQlEsTUFBTUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRDtHQW5DTXJCO0tBQUFBO0FBcUNOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFydG5lci1kZXRhaWxzL1tpZF0vc2VydmljZS1kZXRhaWxzL1tzZXJ2aWNlSWRdL2NhcnQvb2ZmZXJzL09mZmVyTGlzdC5qc3g/YTUwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IE9mZmVyQ2FyZCBmcm9tIFwiLi9PZmZlckNhcmRcIjtcbmltcG9ydCBDb25mZXR0aSBmcm9tIFwicmVhY3QtY29uZmV0dGlcIjtcblxuY29uc3QgT2ZmZXJMaXN0ID0gKHsgb2ZmZXJzIH0pID0+IHtcbiAgY29uc3QgW3Nob3dDb25mZXR0aSwgc2V0U2hvd0NvbmZldHRpXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gU3RhdGUgdG8gY29udHJvbCBjb25mZXR0aSB2aXNpYmlsaXR5XG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUFwcGx5T2ZmZXIgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0NvbmZldHRpKHRydWUpOyAvLyBUcmlnZ2VyIGNvbmZldHRpXG5cbiAgICAvLyBTdG9wIGNvbmZldHRpIGFmdGVyIGEgc2hvcnQgZHVyYXRpb25cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3dDb25mZXR0aShmYWxzZSk7XG4gICAgfSwgMzAwMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzEwMHB4XSByZWxhdGl2ZVwiPlxuICAgICAgICB7LyogU2hvdyBDb25mZXR0aSB3aGVuIGFuIG9mZmVyIGlzIGFwcGxpZWQgKi99XG4gICAgICAgIHtzaG93Q29uZmV0dGkgJiYgKFxuICAgICAgICAgIDxDb25mZXR0aVxuICAgICAgICAgICAgd2lkdGg9e3dpbmRvd1NpemUud2lkdGh9XG4gICAgICAgICAgICBoZWlnaHQ9e3dpbmRvd1NpemUuaGVpZ2h0fVxuICAgICAgICAgICAgbnVtYmVyT2ZQaWVjZXM9ezMwMH1cbiAgICAgICAgICAgIHJlY3ljbGU9e2ZhbHNlfVxuICAgICAgICAgICAgZ3Jhdml0eT17MC4yfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtvZmZlcnM/Lm1hcCgob2ZmZXIpID0+IChcbiAgICAgICAgICA8T2ZmZXJDYXJkIG9mZmVyPXtvZmZlcn0ga2V5PXtvZmZlci5pZH0gb25BcHBseT17aGFuZGxlQXBwbHlPZmZlcn0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm92aWRlciIsInN0b3JlIiwiT2ZmZXJDYXJkIiwiQ29uZmV0dGkiLCJPZmZlckxpc3QiLCJvZmZlcnMiLCJzaG93Q29uZmV0dGkiLCJzZXRTaG93Q29uZmV0dGkiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiaGFuZGxlQXBwbHlPZmZlciIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJudW1iZXJPZlBpZWNlcyIsInJlY3ljbGUiLCJncmF2aXR5IiwibWFwIiwib2ZmZXIiLCJvbkFwcGx5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/partner-details/[id]/service-details/[serviceId]/cart/offers/OfferList.jsx\n"));

/***/ })

});