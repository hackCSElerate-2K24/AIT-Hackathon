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
exports.id = "app/api/RoleConnector/route";
exports.ids = ["app/api/RoleConnector/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FRoleConnector%2Froute&page=%2Fapi%2FRoleConnector%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FRoleConnector%2Froute.js&appDir=C%3A%5CUsers%5Csande%5CDesktop%5CBusTracker-Pro%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csande%5CDesktop%5CBusTracker-Pro&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FRoleConnector%2Froute&page=%2Fapi%2FRoleConnector%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FRoleConnector%2Froute.js&appDir=C%3A%5CUsers%5Csande%5CDesktop%5CBusTracker-Pro%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csande%5CDesktop%5CBusTracker-Pro&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_sande_Desktop_BusTracker_Pro_app_api_RoleConnector_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/RoleConnector/route.js */ \"(rsc)/./app/api/RoleConnector/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/RoleConnector/route\",\n        pathname: \"/api/RoleConnector\",\n        filename: \"route\",\n        bundlePath: \"app/api/RoleConnector/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\sande\\\\Desktop\\\\BusTracker-Pro\\\\app\\\\api\\\\RoleConnector\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_sande_Desktop_BusTracker_Pro_app_api_RoleConnector_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/RoleConnector/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZSb2xlQ29ubmVjdG9yJTJGcm91dGUmcGFnZT0lMkZhcGklMkZSb2xlQ29ubmVjdG9yJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGUm9sZUNvbm5lY3RvciUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzYW5kZSU1Q0Rlc2t0b3AlNUNCdXNUcmFja2VyLVBybyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDc2FuZGUlNUNEZXNrdG9wJTVDQnVzVHJhY2tlci1Qcm8maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNEI7QUFDekc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvPzU3MDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc2FuZGVcXFxcRGVza3RvcFxcXFxCdXNUcmFja2VyLVByb1xcXFxhcHBcXFxcYXBpXFxcXFJvbGVDb25uZWN0b3JcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL1JvbGVDb25uZWN0b3Ivcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9Sb2xlQ29ubmVjdG9yXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9Sb2xlQ29ubmVjdG9yL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcc2FuZGVcXFxcRGVza3RvcFxcXFxCdXNUcmFja2VyLVByb1xcXFxhcHBcXFxcYXBpXFxcXFJvbGVDb25uZWN0b3JcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvUm9sZUNvbm5lY3Rvci9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FRoleConnector%2Froute&page=%2Fapi%2FRoleConnector%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FRoleConnector%2Froute.js&appDir=C%3A%5CUsers%5Csande%5CDesktop%5CBusTracker-Pro%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csande%5CDesktop%5CBusTracker-Pro&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/RoleConnector/route.js":
/*!****************************************!*\
  !*** ./app/api/RoleConnector/route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _util_DB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/DB */ \"(rsc)/./util/DB.js\");\n/* harmony import */ var _models_Student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/Student */ \"(rsc)/./models/Student.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/User */ \"(rsc)/./models/User.js\");\n\n\n\n\nasync function POST(request) {\n    const { email } = await request.json();\n    try {\n        await (0,_util_DB__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n            email\n        });\n        if (!user) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                error: \"Student not found\"\n            }), {\n                status: 404\n            });\n        }\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            body: user\n        }), {\n            status: 201\n        });\n    } catch (err) {\n        console.error(err);\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            error: \"Internal Server Error\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL1JvbGVDb25uZWN0b3Ivcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDRjtBQUNLO0FBQ047QUFFakMsZUFBZUksS0FBS0MsT0FBTztJQUM5QixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1ELFFBQVFFLElBQUk7SUFDcEMsSUFBSTtRQUNBLE1BQU1OLG9EQUFTQTtRQUVmLE1BQU1PLE9BQU8sTUFBTUwsb0RBQUlBLENBQUNNLE9BQU8sQ0FBQztZQUFFSDtRQUFNO1FBRXhDLElBQUksQ0FBQ0UsTUFBTTtZQUNQLE9BQU8sSUFBSVIscURBQVlBLENBQUNVLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsT0FBTztZQUFvQixJQUFJO2dCQUFFQyxRQUFRO1lBQUk7UUFDMUY7UUFFQSxPQUFPLElBQUliLHFEQUFZQSxDQUFDVSxLQUFLQyxTQUFTLENBQUM7WUFBRUcsTUFBTU47UUFBSyxJQUFJO1lBQUVLLFFBQVE7UUFBSTtJQUUxRSxFQUFFLE9BQU9FLEtBQUs7UUFDVkMsUUFBUUosS0FBSyxDQUFDRztRQUNkLE9BQU8sSUFBSWYscURBQVlBLENBQUNVLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQXdCLElBQUk7WUFBRUMsUUFBUTtRQUFJO0lBQzlGO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9hcHAvYXBpL1JvbGVDb25uZWN0b3Ivcm91dGUuanM/NDZhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlsL0RCJztcclxuaW1wb3J0IFN0dWRlbnQgZnJvbSBcIi4uLy4uLy4uL21vZGVscy9TdHVkZW50XCI7IFxyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1VzZXJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjb25uZWN0REIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ1N0dWRlbnQgbm90IGZvdW5kJyB9KSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBib2R5OiB1c2VyIH0pLCB7IHN0YXR1czogMjAxIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9KSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25uZWN0REIiLCJTdHVkZW50IiwiVXNlciIsIlBPU1QiLCJyZXF1ZXN0IiwiZW1haWwiLCJqc29uIiwidXNlciIsImZpbmRPbmUiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzdGF0dXMiLCJib2R5IiwiZXJyIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/RoleConnector/route.js\n");

/***/ }),

/***/ "(rsc)/./models/Student.js":
/*!***************************!*\
  !*** ./models/Student.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst studentSchema = new Schema({\n    enrollment_no: String,\n    name: String,\n    surname: String,\n    standard: String,\n    section: String,\n    father_name: String,\n    mother_name: String,\n    father_mobile: String,\n    mother_mobile: String,\n    picture: String,\n    address: String,\n    email: String,\n    busNo: String,\n    location: {\n        longitude: String,\n        latitude: String\n    }\n}, {\n    collection: \"Student\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Student || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Student\", studentSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvU3R1ZGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTSxFQUFDQyxNQUFNLEVBQUMsR0FBR0QsaURBQVFBO0FBRXpCLE1BQU1FLGdCQUFnQixJQUFJRCxPQUFPO0lBQzdCRSxlQUFlQztJQUNmQyxNQUFNRDtJQUNORSxTQUFTRjtJQUNURyxVQUFVSDtJQUNWSSxTQUFTSjtJQUNUSyxhQUFhTDtJQUNiTSxhQUFhTjtJQUNiTyxlQUFlUDtJQUNmUSxlQUFlUjtJQUNmUyxTQUFTVDtJQUNUVSxTQUFTVjtJQUNUVyxPQUFPWDtJQUNQWSxPQUFPWjtJQUNQYSxVQUFVO1FBQ05DLFdBQVdkO1FBQ1hlLFVBQVVmO0lBQ2Q7QUFDSixHQUFFO0lBQUVnQixZQUFZO0FBQVU7QUFHMUIsaUVBQWVwQix3REFBZSxDQUFDc0IsT0FBTyxJQUFJdEIscURBQWMsQ0FBQyxXQUFXRSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbW9kZWxzL1N0dWRlbnQuanM/ZTRmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCB7U2NoZW1hfSA9IG1vbmdvb3NlO1xyXG5cclxuY29uc3Qgc3R1ZGVudFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgZW5yb2xsbWVudF9ubzogU3RyaW5nLFxyXG4gICAgbmFtZTogU3RyaW5nLFxyXG4gICAgc3VybmFtZTogU3RyaW5nLFxyXG4gICAgc3RhbmRhcmQ6IFN0cmluZyxcclxuICAgIHNlY3Rpb246IFN0cmluZyxcclxuICAgIGZhdGhlcl9uYW1lOiBTdHJpbmcsXHJcbiAgICBtb3RoZXJfbmFtZTogU3RyaW5nLFxyXG4gICAgZmF0aGVyX21vYmlsZTogU3RyaW5nLFxyXG4gICAgbW90aGVyX21vYmlsZTogU3RyaW5nLFxyXG4gICAgcGljdHVyZTogU3RyaW5nLFxyXG4gICAgYWRkcmVzczogU3RyaW5nLFxyXG4gICAgZW1haWw6IFN0cmluZyxcclxuICAgIGJ1c05vOiBTdHJpbmcsXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgIGxvbmdpdHVkZTogU3RyaW5nLFxyXG4gICAgICAgIGxhdGl0dWRlOiBTdHJpbmdcclxuICAgIH1cclxufSx7IGNvbGxlY3Rpb246ICdTdHVkZW50JyB9KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuU3R1ZGVudCB8fCBtb25nb29zZS5tb2RlbChcIlN0dWRlbnRcIiwgc3R1ZGVudFNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwic3R1ZGVudFNjaGVtYSIsImVucm9sbG1lbnRfbm8iLCJTdHJpbmciLCJuYW1lIiwic3VybmFtZSIsInN0YW5kYXJkIiwic2VjdGlvbiIsImZhdGhlcl9uYW1lIiwibW90aGVyX25hbWUiLCJmYXRoZXJfbW9iaWxlIiwibW90aGVyX21vYmlsZSIsInBpY3R1cmUiLCJhZGRyZXNzIiwiZW1haWwiLCJidXNObyIsImxvY2F0aW9uIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJjb2xsZWN0aW9uIiwibW9kZWxzIiwiU3R1ZGVudCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/Student.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst userSchema = new Schema({\n    email: {\n        type: String,\n        unique: true,\n        required: true\n    },\n    password: {\n        type: String,\n        required: false\n    },\n    role: {\n        type: String,\n        enum: [\n            \"admin\",\n            \"student\",\n            \"driver\"\n        ],\n        default: \"student\"\n    }\n}, {\n    collection: \"users\"\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTSxFQUFDQyxNQUFNLEVBQUMsR0FBR0QsaURBQVFBO0FBRXpCLE1BQU1FLGFBQWEsSUFBSUQsT0FDckI7SUFDRUUsT0FBTztRQUNIQyxNQUFNQztRQUNOQyxRQUFRO1FBQ1JDLFVBQVU7SUFDWjtJQUNBQyxVQUFVO1FBQ1JKLE1BQU1DO1FBQ05FLFVBQVU7SUFDWjtJQUNBRSxNQUFNO1FBQ0pMLE1BQU1DO1FBQ05LLE1BQU07WUFBQztZQUFTO1lBQVc7U0FBUztRQUNwQ0MsU0FBUztJQUNYO0FBQ0YsR0FDQTtJQUFFQyxZQUFZO0FBQVEsR0FDdEI7SUFBRUMsWUFBWTtBQUFLO0FBR3ZCLGlFQUFlYix3REFBZSxDQUFDZSxJQUFJLElBQUlmLHFEQUFjLENBQUMsUUFBUUUsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL21vZGVscy9Vc2VyLmpzPzczNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3Qge1NjaGVtYX0gPSBtb25nb29zZTtcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKFxyXG4gIHtcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICByb2xlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGVudW06IFsnYWRtaW4nLCAnc3R1ZGVudCcsICdkcml2ZXInXSwgXHJcbiAgICAgICAgZGVmYXVsdDogJ3N0dWRlbnQnLCBcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7IGNvbGxlY3Rpb246ICd1c2VycycgfSxcclxuICAgIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwidXNlclNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInVuaXF1ZSIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJyb2xlIiwiZW51bSIsImRlZmF1bHQiLCJjb2xsZWN0aW9uIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ }),

/***/ "(rsc)/./util/DB.js":
/*!********************!*\
  !*** ./util/DB.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"MongoDB connected\");\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error);\n        process.exit(1);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlsL0RCLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZO0lBQ2hCLElBQUk7UUFDRixNQUFNRCx1REFBZ0IsQ0FBQ0csUUFBUUMsR0FBRyxDQUFDQyxTQUFTLEVBQUU7WUFDNUNDLGlCQUFpQjtZQUNqQkMsb0JBQW9CO1FBQ3RCO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT0MsT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsNkJBQTZCQTtRQUMzQ1AsUUFBUVEsSUFBSSxDQUFDO0lBQ2Y7QUFDRjtBQUVBLGlFQUFlVixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vdXRpbC9EQi5qcz80MDI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJLCB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZCcpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0REIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./util/DB.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FRoleConnector%2Froute&page=%2Fapi%2FRoleConnector%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FRoleConnector%2Froute.js&appDir=C%3A%5CUsers%5Csande%5CDesktop%5CBusTracker-Pro%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csande%5CDesktop%5CBusTracker-Pro&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();