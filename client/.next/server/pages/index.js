"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst buildClient = ({ request  })=>{\n    if (true) {\n        // We are on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',\n            headers: request.headers\n        });\n    } else {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildClient);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUV6QixLQUFLLENBQUNDLFdBQVcsSUFBSSxDQUFDLENBQUNDLE9BQU8sRUFBQyxDQUFDLEdBQUssQ0FBQztJQUNsQyxFQUFFLEVBQUUsSUFBNkIsRUFBRSxDQUFDO1FBQ2hDLEVBQXVCO1FBQ3ZCLE1BQU0sQ0FBQ0YsbURBQVksQ0FBQyxDQUFDO1lBQ2pCSSxPQUFPLEVBQUUsQ0FBaUU7WUFDMUVDLE9BQU8sRUFBRUgsT0FBTyxDQUFDRyxPQUFPO1FBQzVCLENBQUM7SUFDTCxDQUFDLE1BQU0sRUFLTjtBQUNMLENBQUM7QUFFRCxpRUFBZUosV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vYXBpL2J1aWxkLWNsaWVudC5qcz9jNmYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBidWlsZENsaWVudCA9ICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gV2UgYXJlIG9uIHRoZSBzZXJ2ZXJcclxuICAgICAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycyxcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gV2UgbXVzdCBiZSBvbiB0aGUgYnJvd3NlclxyXG4gICAgICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBiYXNlVXJsOiAnLycsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidWlsZENsaWVudDtcclxuXHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImJ1aWxkQ2xpZW50IiwicmVxdWVzdCIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiYmFzZVVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\n\nconst LandingPage = ({ currentUser  })=>{\n    return currentUser ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Luis Gutierrez\\\\Desktop\\\\Micro_curso\\\\2.tickets_micro\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n            lineNumber: 5,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: \"You are signed in\"\n    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Luis Gutierrez\\\\Desktop\\\\Micro_curso\\\\2.tickets_micro\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: \"You are NOT signed in\"\n    });\n};\nLandingPage.getInitialProps = async (context)=>{\n    console.log('LANDING PAGE!');\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context);\n    const { data  } = await client.get('/api/users/currentuser');\n    return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QztBQUU3QyxLQUFLLENBQUNDLFdBQVcsSUFBSSxDQUFDLENBQUNDLFdBQVcsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUN4QyxNQUFNLENBQUNBLFdBQVcsd0VBQ2ZDLENBQUU7Ozs7Ozs7a0JBQUMsQ0FBaUI7OEVBRXBCQSxDQUFFOzs7Ozs7O2tCQUFDLENBQXFCOztBQUU3QixDQUFDO0FBRURGLFdBQVcsQ0FBQ0csZUFBZSxVQUFTQyxPQUFPLEdBQUksQ0FBQztJQUM5Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZTtJQUMzQixLQUFLLENBQUNDLE1BQU0sR0FBR1IsNkRBQVcsQ0FBQ0ssT0FBTztJQUNsQyxLQUFLLENBQUMsQ0FBQyxDQUFDSSxJQUFJLEVBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQ0QsTUFBTSxDQUFDRSxHQUFHLENBQUMsQ0FBd0I7SUFFMUQsTUFBTSxDQUFDRCxJQUFJO0FBQ2IsQ0FBQztBQUVELGlFQUFlUixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZENsaWVudCBmcm9tICcuLi9hcGkvYnVpbGQtY2xpZW50JztcclxuXHJcbmNvbnN0IExhbmRpbmdQYWdlID0gKHsgY3VycmVudFVzZXIgfSkgPT4ge1xyXG4gIHJldHVybiBjdXJyZW50VXNlciA/IChcclxuICAgIDxoMT5Zb3UgYXJlIHNpZ25lZCBpbjwvaDE+XHJcbiAgKSA6IChcclxuICAgIDxoMT5Zb3UgYXJlIE5PVCBzaWduZWQgaW48L2gxPlxyXG4gICk7XHJcbn07XHJcblxyXG5MYW5kaW5nUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcclxuICBjb25zb2xlLmxvZygnTEFORElORyBQQUdFIScpO1xyXG4gIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGNvbnRleHQpO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldCgnL2FwaS91c2Vycy9jdXJyZW50dXNlcicpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xyXG4iXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJMYW5kaW5nUGFnZSIsImN1cnJlbnRVc2VyIiwiaDEiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsImRhdGEiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();