/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/ziggo/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "03c5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/naam-icoon.3e69b280.svg";

/***/ }),

/***/ "0529":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0766":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_1590cf6d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2dff");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_1590cf6d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_1590cf6d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1359":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_vue_vue_type_style_index_0_id_236a4e88_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("674e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_vue_vue_type_style_index_0_id_236a4e88_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_vue_vue_type_style_index_0_id_236a4e88_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2007":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2029":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1_vue_vue_type_style_index_0_id_6f9a7d5f_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("95e2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1_vue_vue_type_style_index_0_id_6f9a7d5f_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1_vue_vue_type_style_index_0_id_6f9a7d5f_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2054":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group1_vue_vue_type_style_index_0_id_ce06b390_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2007");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group1_vue_vue_type_style_index_0_id_ce06b390_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group1_vue_vue_type_style_index_0_id_ce06b390_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "20bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina1_vue_vue_type_style_index_0_id_f21681fa_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("50bb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina1_vue_vue_type_style_index_0_id_f21681fa_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina1_vue_vue_type_style_index_0_id_f21681fa_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2dff":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "349e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/email-icoon.dcaf59ed.svg";

/***/ }),

/***/ "34d7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "36e9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_img_vue_vue_type_style_index_0_id_c6b87208_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e7c2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_img_vue_vue_type_style_index_0_id_c6b87208_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_img_vue_vue_type_style_index_0_id_c6b87208_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3da9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina6_vue_vue_type_style_index_0_id_d12a8bf8_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("af05");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina6_vue_vue_type_style_index_0_id_d12a8bf8_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina6_vue_vue_type_style_index_0_id_d12a8bf8_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4eef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina3_vue_vue_type_style_index_0_id_a8c94570_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6dcf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina3_vue_vue_type_style_index_0_id_a8c94570_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina3_vue_vue_type_style_index_0_id_a8c94570_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "50bb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=317579e4
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('router-view');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=317579e4

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js
/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: "App"
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 /* harmony default export */ var src_Appvue_type_script_lang_js = (Appvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Landingspagina.vue?vue&type=template&id=d4c91402
var Landingspaginavue_type_template_id_d4c91402_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('center', [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "landingspagina screen"
  }, [_c('div', {
    staticClass: "overlap-group3"
  }, [_c('div', {
    staticClass: "rectangle-30"
  }), _c('img', {
    staticClass: "samsung-1",
    attrs: {
      "src": _vm.samsung1,
      "alt": "Samsung 1"
    }
  }), _c('div', {
    staticClass: "background"
  }), _c('frame1'), _c('h1', {
    staticClass: "maak-kans-op-1-van-de-3-prijzen"
  }, [_c('span', {
    staticStyle: {
      "font-weight": "700",
      "position": "relative",
      "top": "2vw"
    }
  }, [_vm._v(" Maak kans op "), _c('br'), _vm._v(" 1 van de 3 prijzen")])]), _c('img', {
    staticClass: "bolcom-bon-1",
    attrs: {
      "src": _vm.bolcomBon1,
      "alt": "bolcom-bon 1"
    }
  }), _c('img', {
    staticClass: "image-2",
    attrs: {
      "src": _vm.image2,
      "alt": "image 2"
    }
  }), _c('button', {
    on: {
      "click": _vm.navigateToNextPage
    }
  }, [_c('div', {
    staticClass: "frame-427320541"
  }, [_c('div', {
    staticClass: "doe-nu-mee diodrumcyrillic-normal-white-23-7px",
    staticStyle: {
      "font-weight": "700",
      "z-index": "999"
    }
  }, [_vm._v("Doe nu mee")]), _c('span', {
    staticStyle: {
      "color": "white",
      "font-size": "33px"
    }
  }, [_vm._v(" → ")])])]), _c('group1', {
    attrs: {
      "text1": _vm.group12Props.text1,
      "className": _vm.group12Props.className
    }
  }), _c('div', {
    class: [`group-1`, _vm.className || ``]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€400,-")])])]), _c('div', {
    staticClass: "group-3"
  }, [_c('div', {
    staticClass: "overlap-group2"
  }, [_c('div', {
    staticClass: "twv diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v(_vm._s(_vm.tWV))]), _c('div', {
    staticClass: "text-3 valign-text-bottom",
    staticStyle: {
      "font-weight": "700"
    }
  }, [_vm._v(_vm._s(_vm.text12))])])]), _c('div', {
    staticClass: "jaja"
  }, [_vm._v("Hoe werkt het?")]), _c('div', {
    staticClass: "frame-427320574"
  }, [_c('div', {
    staticClass: "frame-42732057"
  }, [_c('div', {
    staticClass: "group-4"
  }, [_c('div', {
    staticClass: "overlap-group"
  }, [_c('img', {
    staticClass: "x1",
    attrs: {
      "src": _vm.x1,
      "alt": "1."
    }
  })])]), _c('div', {
    staticClass: "kies-jouw-prijs diodrumcyrillic-regular-normal-downriver-25px"
  }, [_vm._v(_vm._s(_vm.kiesJouwPrijs))])]), _c('div', {
    staticClass: "frame-42732057"
  }, [_c('group4', {
    attrs: {
      "src": _vm.group41Props.src
    }
  }), _c('div', {
    staticClass: "beantwoord-de-vraag diodrumcyrillic-regular-normal-downriver-25px"
  }, [_vm._v(_vm._s(_vm.beantwoordDeVraag))])], 1), _c('div', {
    staticClass: "frame-42732057"
  }, [_c('group4', {
    attrs: {
      "src": _vm.group42Props.src,
      "className": _vm.group42Props.className
    }
  }), _c('p', {
    staticClass: "controleer-of-jouw-p diodrumcyrillic-regular-normal-downriver-25px"
  }, [_vm._v(_vm._s(_vm.controleerOfJouwP))])], 1)]), _c('img', {
    staticClass: "vector",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/vector.svg",
      "alt": "Vector"
    }
  }), _c('frame1000004784', {
    attrs: {
      "group": _vm.frame1000004784Props.group,
      "group116046944Props": _vm.frame1000004784Props.group116046944Props
    }
  })], 1), _c('div', {
    staticClass: "container-flex-row"
  }, [_c('div', {
    staticClass: "flex-row"
  }, [_c('p', {
    staticClass: "meer-voordeel-nu"
  }, [_vm._v("Meer over MeerVoordeel")]), _c('img', {
    staticClass: "mv-logo-1",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-3.svg",
      "alt": "MV logo 1"
    }
  }), _c('img', {
    staticClass: "image-7",
    staticStyle: {
      "z-index": "99"
    },
    attrs: {
      "src": _vm.image7,
      "alt": "image 7"
    }
  })]), _c('img', {
    staticClass: "line-6",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-6.svg",
      "alt": "Line 6"
    }
  }), _c('div', {
    staticClass: "flex-row-1"
  }, [_c('p', {
    staticClass: "meer-voordeel-biedt-d diodrumcyrillic-regular-normal-downriver-25px"
  }, [_c('span', {
    staticClass: "diodrumcyrillic-regular-normal-downriver-25px"
  }, [_vm._v("MeerVoordeel biedt diverse kortings- en voordeelprogramma's aan, aan consumenten in Nederland. In samenwerking met Ziggo, een van de grootste aanbieders van kabeltelevisie, internet en telefoniediensten in Nederland, biedt MeerVoordeel speciale voordelen en kortingen aan nieuwe Ziggo-klanten.\",")]), _vm._v(" "), _c('br'), _c('br'), _c('span', {
    staticClass: "diodrumcyrillic-regular-normal-downriver-25px dik"
  }, [_vm._v("Onder andere door deze samenwerking kunnen wij jou mooie acties zoals deze bieden.")])]), _c('img', {
    staticClass: "image-8",
    attrs: {
      "src": _vm.image8,
      "alt": "image 8"
    }
  })]), _c('img', {
    staticClass: "line-2",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg",
      "alt": "Line 2"
    }
  }), _c('p', {
    staticClass: "meervoordeelnl-is diodrumcyrillic-regular-normal-silver-16px",
    domProps: {
      "innerHTML": _vm._s(_vm.meervoordeelNlIs)
    }
  })])])]), _c('div', {
    staticClass: "container-mobiel"
  }, [_c('div', {
    staticClass: "navbar-mobiel"
  }, [_c('img', {
    staticClass: "logo-navbar-mobiel logo-navbar-mobiel-mv",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg",
      "alt": "MV logo 1"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png",
      "alt": "logo ziggo"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": __webpack_require__("a111"),
      "alt": ""
    }
  })]), _c('div', {
    staticClass: "achtergrond"
  }, [_c('div', {
    staticClass: "maak-kans"
  }, [_c('span', {
    staticClass: "span-maak-kans"
  }, [_vm._v(" Maak kans op ")]), _c('br'), _vm._v("1 van de 3 prijzen! ")]), _c('div', {
    staticClass: "witte-container"
  }, [_c('p', {
    staticClass: "hoe-werkt-het"
  }, [_vm._v("Hoe werkt het?")]), _c('div', {
    staticClass: "container-lijst"
  }, [_c('div', {
    staticClass: "li-1"
  }, [_c('svg', {
    staticClass: "blauwe-bal",
    attrs: {
      "width": "35",
      "height": "35",
      "viewBox": "0 0 35 35",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('circle', {
    attrs: {
      "id": "Ellipse 2",
      "cx": "17.5",
      "cy": "17.5",
      "r": "17.5",
      "fill": "#49B7AC"
    }
  })]), _c('p', {
    staticClass: "cijfer-li cijfer-li-1"
  }, [_vm._v("1.")]), _c('p', {
    staticClass: "text-hoe-werkt-het text-hoe-werkt-het-1"
  }, [_vm._v("Kies jouw prijs")])]), _c('div', {
    staticClass: "li-1"
  }, [_c('svg', {
    staticClass: "blauwe-bal",
    attrs: {
      "width": "35",
      "height": "35",
      "viewBox": "0 0 35 35",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('circle', {
    attrs: {
      "id": "Ellipse 2",
      "cx": "17.5",
      "cy": "17.5",
      "r": "17.5",
      "fill": "#49B7AC"
    }
  })]), _c('p', {
    staticClass: "cijfer-li"
  }, [_vm._v("2.")]), _c('p', {
    staticClass: "text-hoe-werkt-het"
  }, [_vm._v(" Beantwoord de vraag")])]), _c('div', {
    staticClass: "li-1"
  }, [_c('svg', {
    staticClass: "blauwe-bal",
    attrs: {
      "width": "35",
      "height": "35",
      "viewBox": "0 0 35 35",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('circle', {
    attrs: {
      "id": "Ellipse 2",
      "cx": "17.5",
      "cy": "17.5",
      "r": "17.5",
      "fill": "#49B7AC"
    }
  })]), _c('p', {
    staticClass: "cijfer-li"
  }, [_vm._v("3.")]), _c('p', {
    staticClass: "text-hoe-werkt-het-3"
  }, [_vm._v("Controleer of jouw postcode in aanmerking komt")])])]), _c('div', {
    staticClass: "doe-nu-mee"
  }, [_c('router-link', {
    staticClass: "router-link",
    attrs: {
      "to": "/pagina-1"
    }
  }, [_c('button', {
    staticClass: "doe-nu-mee-knop",
    attrs: {
      "href": "/pagina-1"
    }
  }, [_c('div', {
    staticClass: "text-in-knop"
  }, [_vm._v(" Doe nu mee "), _c('img', {
    staticStyle: {
      "margin-left": "27px"
    },
    attrs: {
      "src": __webpack_require__("adb5"),
      "alt": "pijl-naar-rechts"
    }
  })])])])], 1)]), _c('div', {
    staticClass: "container-afbeelding-prijzen-mobiel"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("80a2"),
      "alt": ""
    }
  }), _c('svg', {
    staticClass: "blauwe-bal-mobiel-1",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "63.973",
      "cy": "63.973",
      "r": "63.2691",
      "transform": "rotate(4.4359 63.973 63.973)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("€699,-")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-2",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "105",
      "height": "105",
      "viewBox": "0 0 105 105",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "52.7158",
      "cy": "52.7158",
      "r": "52.0939",
      "transform": "rotate(-6.575 52.7158 52.7158)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "0.85856rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "57%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.5rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v(" €400,- ")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-3",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "64.0511",
      "cy": "64.0511",
      "r": "63.2691",
      "transform": "rotate(-12.012 64.0511 64.0511)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v(" €599,- ")])])])]), _c('div', {
    staticClass: "container-voordeel"
  }, [_c('p', {
    staticClass: "meer-over-meer-titel"
  }, [_vm._v("Meer over Meervoordeel")]), _c('hr', {
    staticClass: "lijn"
  }), _c('p', {
    staticClass: "meer-over-meer-text"
  }, [_vm._v("MeerVoordeel biedt diverse kortings- en voordeelprogramma's aan, aan consumenten in Nederland. In samenwerking met Ziggo, een van de grootste aanbieders van kabeltelevisie, internet en telefoniediensten in Nederland, biedt MeerVoordeel speciale voordelen en kortingen aan nieuwe Ziggo-klanten. "), _c('br'), _c('br'), _vm._v(" Onder andere door deze samenwerking kunnen wij jou mooie acties zoals deze bieden.")])]), _c('div', {
    staticClass: "afbeelding-footer",
    staticStyle: {
      "margin-top": "80px"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("7653"),
      "alt": "afbeelding-footer"
    }
  })]), _c('div', {
    staticClass: "logos-footer"
  }, [_c('img', {
    staticClass: "logo-navbar-mobiel logo-navbar-mobiel-mv",
    staticStyle: {
      "margin-right": "5%"
    },
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg",
      "alt": "MV logo 1"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png",
      "alt": "logo ziggo"
    }
  })]), _c('hr', {
    staticClass: "lijn"
  }), _c('p', {
    staticClass: "kleine-letters"
  }, [_vm._v("*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024. Actievoorwaarden van toepassing.")])])])]);
};
var Landingspaginavue_type_template_id_d4c91402_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Landingspagina.vue?vue&type=template&id=d4c91402

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Frame1.vue?vue&type=template&id=6f9a7d5f
var Frame1vue_type_template_id_6f9a7d5f_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var Frame1vue_type_template_id_6f9a7d5f_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "/"
    }
  }, [_c('div', {
    staticClass: "frame-1"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    staticClass: "image-6",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png",
      "alt": "image 6"
    }
  })])])]);
}];

// CONCATENATED MODULE: ./src/components/Frame1.vue?vue&type=template&id=6f9a7d5f

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Frame1.vue?vue&type=script&lang=js
/* harmony default export */ var Frame1vue_type_script_lang_js = ({
  name: "Frame1"
});
// CONCATENATED MODULE: ./src/components/Frame1.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Frame1vue_type_script_lang_js = (Frame1vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Frame1.vue?vue&type=style&index=0&id=6f9a7d5f&prod&lang=sass
var Frame1vue_type_style_index_0_id_6f9a7d5f_prod_lang_sass = __webpack_require__("2029");

// CONCATENATED MODULE: ./src/components/Frame1.vue






/* normalize component */

var Frame1_component = Object(componentNormalizer["a" /* default */])(
  components_Frame1vue_type_script_lang_js,
  Frame1vue_type_template_id_6f9a7d5f_render,
  Frame1vue_type_template_id_6f9a7d5f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Frame1 = (Frame1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Group1.vue?vue&type=template&id=ce06b390
var Group1vue_type_template_id_ce06b390_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: [`group-1`, _vm.className || ``]
  }, [_vm._m(0)]);
};
var Group1vue_type_template_id_ce06b390_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€599,-")])]);
}];

// CONCATENATED MODULE: ./src/components/Group1.vue?vue&type=template&id=ce06b390

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Group1.vue?vue&type=script&lang=js
/* harmony default export */ var Group1vue_type_script_lang_js = ({
  name: "Group1",
  props: ["text1", "className"]
});
// CONCATENATED MODULE: ./src/components/Group1.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Group1vue_type_script_lang_js = (Group1vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Group1.vue?vue&type=style&index=0&id=ce06b390&prod&lang=sass
var Group1vue_type_style_index_0_id_ce06b390_prod_lang_sass = __webpack_require__("2054");

// CONCATENATED MODULE: ./src/components/Group1.vue






/* normalize component */

var Group1_component = Object(componentNormalizer["a" /* default */])(
  components_Group1vue_type_script_lang_js,
  Group1vue_type_template_id_ce06b390_render,
  Group1vue_type_template_id_ce06b390_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Group1 = (Group1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Group4.vue?vue&type=template&id=1590cf6d
var Group4vue_type_template_id_1590cf6d_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: [`group-4-1-1`, _vm.className || ``]
  }, [_c('div', {
    staticClass: "overlap-group-1"
  }, [_c('img', {
    staticClass: "x2",
    attrs: {
      "src": _vm.src,
      "alt": "2."
    }
  })])]);
};
var Group4vue_type_template_id_1590cf6d_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Group4.vue?vue&type=template&id=1590cf6d

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Group4.vue?vue&type=script&lang=js
/* harmony default export */ var Group4vue_type_script_lang_js = ({
  name: "Group4",
  props: ["src", "className"]
});
// CONCATENATED MODULE: ./src/components/Group4.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Group4vue_type_script_lang_js = (Group4vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Group4.vue?vue&type=style&index=0&id=1590cf6d&prod&lang=sass
var Group4vue_type_style_index_0_id_1590cf6d_prod_lang_sass = __webpack_require__("0766");

// CONCATENATED MODULE: ./src/components/Group4.vue






/* normalize component */

var Group4_component = Object(componentNormalizer["a" /* default */])(
  components_Group4vue_type_script_lang_js,
  Group4vue_type_template_id_1590cf6d_render,
  Group4vue_type_template_id_1590cf6d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Group4 = (Group4_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Frame1000004784.vue?vue&type=template&id=675c3b77
var Frame1000004784vue_type_template_id_675c3b77_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: [`frame-1000004784`, _vm.className || ``]
  }, [_c('img', {
    staticClass: "mv-logo-1-1",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg",
      "alt": "MV logo 1"
    }
  }), _c('div', {
    staticClass: "frame-1000004783"
  }, [_c('img', {
    staticClass: "group",
    attrs: {
      "src": _vm.group,
      "alt": "Group"
    }
  }), _c('div', {
    staticClass: "frame-1000004782"
  }, [_c('div', {
    staticClass: "frame-7682"
  }, [_c('group116046944'), _c('group116046944'), _c('group116046944'), _c('group116046944'), _c('group116046944', {
    attrs: {
      "className": _vm.group116046944Props.className
    }
  })], 1)])])]);
};
var Frame1000004784vue_type_template_id_675c3b77_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Frame1000004784.vue?vue&type=template&id=675c3b77

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Group116046944.vue?vue&type=template&id=a1a8f2ae
var Group116046944vue_type_template_id_a1a8f2ae_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: [`group-11604694-7`, _vm.className || ``]
  }, [_c('img', {
    staticClass: "primary-star-tri-color-rgb-1",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/primary-star-tri-color-rgb-1-15.svg",
      "alt": "Primary Star Tri color-RGB 1"
    }
  })]);
};
var Group116046944vue_type_template_id_a1a8f2ae_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Group116046944.vue?vue&type=template&id=a1a8f2ae

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Group116046944.vue?vue&type=script&lang=js
/* harmony default export */ var Group116046944vue_type_script_lang_js = ({
  name: "Group116046944",
  props: ["className"]
});
// CONCATENATED MODULE: ./src/components/Group116046944.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Group116046944vue_type_script_lang_js = (Group116046944vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Group116046944.vue?vue&type=style&index=0&id=a1a8f2ae&prod&lang=sass
var Group116046944vue_type_style_index_0_id_a1a8f2ae_prod_lang_sass = __webpack_require__("d3a8");

// CONCATENATED MODULE: ./src/components/Group116046944.vue






/* normalize component */

var Group116046944_component = Object(componentNormalizer["a" /* default */])(
  components_Group116046944vue_type_script_lang_js,
  Group116046944vue_type_template_id_a1a8f2ae_render,
  Group116046944vue_type_template_id_a1a8f2ae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Group116046944 = (Group116046944_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Frame1000004784.vue?vue&type=script&lang=js

/* harmony default export */ var Frame1000004784vue_type_script_lang_js = ({
  name: "Frame1000004784",
  components: {
    Group116046944: Group116046944
  },
  props: ["group", "className", "group116046944Props"]
});
// CONCATENATED MODULE: ./src/components/Frame1000004784.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Frame1000004784vue_type_script_lang_js = (Frame1000004784vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Frame1000004784.vue?vue&type=style&index=0&id=675c3b77&prod&lang=sass
var Frame1000004784vue_type_style_index_0_id_675c3b77_prod_lang_sass = __webpack_require__("b712");

// CONCATENATED MODULE: ./src/components/Frame1000004784.vue






/* normalize component */

var Frame1000004784_component = Object(componentNormalizer["a" /* default */])(
  components_Frame1000004784vue_type_script_lang_js,
  Frame1000004784vue_type_template_id_675c3b77_render,
  Frame1000004784vue_type_template_id_675c3b77_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Frame1000004784 = (Frame1000004784_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Landingspagina.vue?vue&type=script&lang=js





/* harmony default export */ var Landingspaginavue_type_script_lang_js = ({
  name: "Landingspagina",
  components: {
    Frame1: Frame1,
    Group1: Group1,
    Group4: Group4,
    Frame1000004784: Frame1000004784
  },
  props: ["samsung1", "maakKansOp1VanDe3Prijzen", "meervoordeelGeeftInSamenwerkingMetZ", "bolcomBon1", "image2", "doeNuMee", "tWV", "text12", "hoeWerktHet", "x1", "kiesJouwPrijs", "beantwoordDeVraag", "controleerOfJouwP", "meerOverMeervoordeel", "image7", "spanText1", "spanText2", "image8", "meervoordeelNlIs", "group11Props", "group12Props", "group41Props", "group42Props", "frame1000004784Props"],
  methods: {
    async navigateToNextPage() {
      // const isValid = await this.validateAddress();
      // if (!isValid) return;

      this.$router.push('/pagina-1');
    }
  }
});
// CONCATENATED MODULE: ./src/components/Landingspagina.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Landingspaginavue_type_script_lang_js = (Landingspaginavue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Landingspagina.vue?vue&type=style&index=0&id=d4c91402&prod&lang=sass
var Landingspaginavue_type_style_index_0_id_d4c91402_prod_lang_sass = __webpack_require__("e7f1");

// CONCATENATED MODULE: ./src/components/Landingspagina.vue






/* normalize component */

var Landingspagina_component = Object(componentNormalizer["a" /* default */])(
  components_Landingspaginavue_type_script_lang_js,
  Landingspaginavue_type_template_id_d4c91402_render,
  Landingspaginavue_type_template_id_d4c91402_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Landingspagina = (Landingspagina_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina1.vue?vue&type=template&id=f21681fa
var Pagina1vue_type_template_id_f21681fa_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('center', [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "pagina-1 screen"
  }, [_c('div', {
    staticClass: "overlap-group3-1"
  }, [_c('div', {
    staticClass: "rectangle-30-1"
  }), _c('img', {
    staticClass: "samsung-1-1",
    attrs: {
      "src": _vm.samsung1,
      "alt": "Samsung 1"
    }
  }), _c('div', {
    staticClass: "background-1"
  }), _c('frame1'), _c('div', {
    staticClass: "frame-427320545"
  }, [_c('div', {
    staticClass: "container-vraag-zoveel"
  }, [_c('p', {
    staticClass: "stap-zoveel"
  }, [_vm._v("Stap 1 van de 3")]), _c('p', {
    staticClass: "vertel-ons"
  }, [_vm._v("Vertel ons welke prijs je wilt winnen:")])])]), _c('img', {
    staticClass: "bolcom-bon-1-1",
    attrs: {
      "src": _vm.bolcomBon1,
      "alt": "bolcom-bon 1"
    }
  }), _c('img', {
    staticClass: "image-2-1",
    attrs: {
      "src": _vm.image2,
      "alt": "image 2"
    }
  }), _c('form', {
    staticClass: "frame-427320542"
  }, [_vm._l(_vm.products, function (product) {
    return _c('div', {
      key: product.id,
      staticClass: "frame"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.chosenProduct,
        expression: "chosenProduct"
      }],
      attrs: {
        "type": "radio",
        "id": 'product-' + product.id,
        "name": "product"
      },
      domProps: {
        "value": product.value,
        "checked": _vm._q(_vm.chosenProduct, product.value)
      },
      on: {
        "change": function ($event) {
          _vm.chosenProduct = product.value;
        }
      }
    }), _c('label', {
      staticClass: "label-1",
      attrs: {
        "for": 'product-' + product.id
      }
    }, [_c('p', {
      staticClass: "x-twv diodrumcyrillic-regular-normal-downriver-25px"
    }, [_c('span', {
      staticClass: "pointer-1"
    }, [_vm._v(_vm._s(product.name))])])])]);
  }), _vm.errorMessage ? _c('p', {
    staticClass: "error-text-1"
  }, [_vm._v(_vm._s(_vm.errorMessage))]) : _vm._e()], 2), _c('div', {
    staticClass: "frame-427320541-1",
    on: {
      "click": _vm.goToStep2
    }
  }, [_c('div', {
    staticClass: "ga-naar-stap-2 diodrumcyrillic-normal-white-23-7px",
    staticStyle: {
      "font-weight": "700"
    }
  }, [_vm._v("Ga naar stap 2")]), _c('img', {
    staticClass: "right-arrow-1",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow.svg",
      "alt": "rightArrow"
    }
  })]), _c('div', {
    class: ['group-1', _vm.group11Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€400,-")])])]), _c('div', {
    class: ['group-1', _vm.group12Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€599,-")])])]), _c('div', {
    class: ['group-1', _vm.group13Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€699,-")])])]), _c('frame1000004784', {
    attrs: {
      "group": _vm.frame1000004784Props.group,
      "group116046944Props": _vm.frame1000004784Props.group116046944Props
    }
  })], 1), _c('img', {
    staticClass: "line-2-1",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg",
      "alt": "Line 2"
    }
  }), _c('p', {
    staticClass: "meervoordeelnl-is-1 diodrumcyrillic-regular-normal-silver-16px",
    domProps: {
      "innerHTML": _vm._s(_vm.meervoordeelNlIs)
    }
  })])]), _c('div', {
    staticClass: "container-mobiel"
  }, [_c('div', {
    staticClass: "navbar-mobiel"
  }, [_c('img', {
    staticClass: "logo-navbar-mobiel logo-navbar-mobiel-mv",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg",
      "alt": "MV logo 1"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png",
      "alt": "logo ziggo"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": __webpack_require__("a111"),
      "alt": ""
    }
  })]), _c('div', {
    staticClass: "achtergrond-pagina-1"
  }, [_c('div', {
    staticClass: "witte-container-pagina-1",
    style: _vm.errorMessage ? {
      height: '39rem'
    } : {}
  }, [_c('p', {
    staticClass: "stap1"
  }, [_vm._v(" stap 1 van de 3 ")]), _c('p', {
    staticClass: "vertel-ons"
  }, [_vm._v(" Vertel ons welke prijs je wilt winnen: ")]), _c('form', {
    staticClass: "radio-form"
  }, [_c('div', {
    staticClass: "radio-option radio-option-1"
  }, [_c('label', {
    attrs: {
      "for": "option1"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.chosenProduct,
      expression: "chosenProduct"
    }],
    attrs: {
      "type": "radio",
      "id": "option1",
      "name": "prijsoptie",
      "value": "SAMSUNG TV 60"
    },
    domProps: {
      "checked": _vm._q(_vm.chosenProduct, "SAMSUNG TV 60")
    },
    on: {
      "change": function ($event) {
        _vm.chosenProduct = "SAMSUNG TV 60";
      }
    }
  }), _c('span', {
    staticClass: "text-radio-vraag1"
  }, [_vm._v("SAMSUNG 60\" TV "), _c('br', {
    staticClass: "mobiel"
  }), _vm._v(" t.w.v. €699,-")])])]), _c('div', {
    staticClass: "radio-option radio-option-2"
  }, [_c('label', {
    attrs: {
      "for": "option2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.chosenProduct,
      expression: "chosenProduct"
    }],
    attrs: {
      "type": "radio",
      "id": "option2",
      "name": "prijsoptie",
      "value": "Playstation 5 Slim Disk"
    },
    domProps: {
      "checked": _vm._q(_vm.chosenProduct, "Playstation 5 Slim Disk")
    },
    on: {
      "change": function ($event) {
        _vm.chosenProduct = "Playstation 5 Slim Disk";
      }
    }
  }), _c('span', {
    staticClass: "text-radio-vraag1"
  }, [_vm._v("Playstation 5 Slim Disk "), _c('br', {
    staticClass: "mobiel"
  }), _vm._v(" t.w.v. €549,-")])])]), _c('div', {
    staticClass: "radio-option radio-option-3"
  }, [_c('label', {
    attrs: {
      "for": "option3"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.chosenProduct,
      expression: "chosenProduct"
    }],
    attrs: {
      "type": "radio",
      "id": "option3",
      "name": "prijsoptie",
      "value": "Bol.com cadeaubon"
    },
    domProps: {
      "checked": _vm._q(_vm.chosenProduct, "Bol.com cadeaubon")
    },
    on: {
      "change": function ($event) {
        _vm.chosenProduct = "Bol.com cadeaubon";
      }
    }
  }), _c('span', {
    staticClass: "text-radio-vraag1"
  }, [_vm._v("Bol.com cadeaubon "), _c('br', {
    staticClass: "mobiel"
  }), _vm._v("t.w.v. €400,-")])])])]), _c('div', {
    on: {
      "click": _vm.goToStep2
    }
  }, [_c('div', {
    staticClass: "doe-nu-mee-knop"
  }, [_c('p', {
    staticClass: "text-in-knop"
  }, [_vm._v(" Ga naar stap 2 ")])]), _vm.errorMessage ? _c('p', {
    staticClass: "error-text-1-mobiel"
  }, [_vm._v(_vm._s(_vm.errorMessage))]) : _vm._e()])]), _c('div', {
    staticClass: "container-afbeelding-prijzen-mobiel-1",
    style: _vm.errorMessage ? {
      top: '803px'
    } : {}
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("80a2"),
      "alt": ""
    }
  }), _c('svg', {
    staticClass: "blauwe-bal-mobiel-1",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "63.973",
      "cy": "63.973",
      "r": "63.2691",
      "transform": "rotate(4.4359 63.973 63.973)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("€699,-")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-2",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "105",
      "height": "105",
      "viewBox": "0 0 105 105",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "52.7158",
      "cy": "52.7158",
      "r": "52.0939",
      "transform": "rotate(-6.575 52.7158 52.7158)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "0.85856rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "57%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.5rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v(" €400,- ")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-3",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "64.0511",
      "cy": "64.0511",
      "r": "63.2691",
      "transform": "rotate(-12.012 64.0511 64.0511)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v(" €599,- ")])])])]), _c('hr', {
    staticClass: "lijn",
    staticStyle: {
      "margin-top": "3rem"
    }
  }), _c('div', {
    staticClass: "footer-pagina1"
  }, [_c('p', {
    staticClass: "text-footer-pagina1"
  }, [_vm._v("*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024. Actievoorwaarden van toepassing.")])])])])]);
};
var Pagina1vue_type_template_id_f21681fa_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina1.vue?vue&type=template&id=f21681fa

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RadioButtonSelected.vue?vue&type=template&id=788309c1
var RadioButtonSelectedvue_type_template_id_788309c1_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var RadioButtonSelectedvue_type_template_id_788309c1_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "radio-button_-selected-1"
  }, [_c('div', {
    staticClass: "rectangle-29"
  })]);
}];

// CONCATENATED MODULE: ./src/components/RadioButtonSelected.vue?vue&type=template&id=788309c1

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RadioButtonSelected.vue?vue&type=script&lang=js
/* harmony default export */ var RadioButtonSelectedvue_type_script_lang_js = ({
  name: "RadioButtonSelected"
});
// CONCATENATED MODULE: ./src/components/RadioButtonSelected.vue?vue&type=script&lang=js
 /* harmony default export */ var components_RadioButtonSelectedvue_type_script_lang_js = (RadioButtonSelectedvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/RadioButtonSelected.vue?vue&type=style&index=0&id=788309c1&prod&lang=sass
var RadioButtonSelectedvue_type_style_index_0_id_788309c1_prod_lang_sass = __webpack_require__("73a0");

// CONCATENATED MODULE: ./src/components/RadioButtonSelected.vue






/* normalize component */

var RadioButtonSelected_component = Object(componentNormalizer["a" /* default */])(
  components_RadioButtonSelectedvue_type_script_lang_js,
  RadioButtonSelectedvue_type_template_id_788309c1_render,
  RadioButtonSelectedvue_type_template_id_788309c1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RadioButtonSelected = (RadioButtonSelected_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina1.vue?vue&type=script&lang=js





/* harmony default export */ var Pagina1vue_type_script_lang_js = ({
  name: "Pagina1",
  components: {
    Frame1: Frame1,
    RadioButtonSelected: RadioButtonSelected,
    Group1: Group1,
    Frame1000004784: Frame1000004784
  },
  data() {
    return {
      chosenProduct: '',
      errorMessage: '',
      products: [{
        id: 1,
        name: "SAMSUNG 60\" TV t.w.v. €699,-",
        value: "SAMSUNG TV 60"
      }, {
        id: 2,
        name: "Playstation 5 Slim Disk t.w.v. €549,-",
        value: "Playstation 5 Slim Disk"
      }, {
        id: 3,
        name: "Bol.com cadeaubon t.w.v. €400,-",
        value: "Bol.com cadeaubon"
      }]
    };
  },
  props: ["samsung1", "stap1Van3", "vertelOnsWelkePrijsJeWiltWinnen", "bolcomBon1", "image2", "group1", "samsung60TvTWV699", "group2", "playstation5SlimDiskTWV549", "group3", "spanText", "meervoordeelNlIs", "group11Props", "group12Props", "group13Props", "frame1000004784Props"],
  methods: {
    goToStep2() {
      if (this.chosenProduct) {
        console.log('Geselecteerd product:', this.chosenProduct);
        this.$store.commit('ADD_ANTWOORD', {
          vraag: 'antwoord1',
          antwoord: this.chosenProduct
        }); // Opslaan met een sleutel
        this.$router.push({
          path: '/pagina-2'
        });
      } else {
        this.errorMessage = 'Kies alstublieft een product voordat je verder gaat.'; // Stel de foutmelding in
      }
    }
  },
  created() {
    console.log("Pagina1 component is aangemaakt.");
  },
  mounted() {
    console.log("Pagina1 component is gemonteerd.");
  }
});
// CONCATENATED MODULE: ./src/components/Pagina1.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina1vue_type_script_lang_js = (Pagina1vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina1.vue?vue&type=style&index=0&id=f21681fa&prod&lang=sass
var Pagina1vue_type_style_index_0_id_f21681fa_prod_lang_sass = __webpack_require__("20bf");

// CONCATENATED MODULE: ./src/components/Pagina1.vue






/* normalize component */

var Pagina1_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina1vue_type_script_lang_js,
  Pagina1vue_type_template_id_f21681fa_render,
  Pagina1vue_type_template_id_f21681fa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina1 = (Pagina1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina2.vue?vue&type=template&id=62f7a160
var Pagina2vue_type_template_id_62f7a160_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('center', [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "pagina-2 screen"
  }, [_c('div', {
    staticClass: "overlap-group3-3"
  }, [_c('div', {
    staticClass: "overlap-group4"
  }, [_c('div', {
    staticClass: "rectangle-30-3"
  }), _c('img', {
    staticClass: "samsung-1-3",
    attrs: {
      "src": _vm.samsung1,
      "alt": "Samsung 1"
    }
  }), _c('div', {
    staticClass: "background-3"
  }), _c('frame1'), _c('div', {
    staticClass: "frame-427320545-1"
  }, [_c('div', {
    staticClass: "container-vraag-zoveel"
  }, [_c('p', {
    staticClass: "stap-zoveel-pagina2"
  }, [_vm._v("Stap 2 van de 3")]), _c('p', {
    staticClass: "vertel-ons"
  }, [_vm._v("Wat is jouw huidige provider?")])])]), _c('img', {
    staticClass: "bolcom-bon-1-3",
    attrs: {
      "src": _vm.bolcomBon1,
      "alt": "bolcom-bon 1"
    }
  }), _c('img', {
    staticClass: "image-2-3",
    attrs: {
      "src": _vm.image2,
      "alt": "image 2"
    }
  }), _c('a', {
    staticStyle: {
      "text-decoration": "none"
    },
    attrs: {
      "href": "/pagina-3"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.goToStep3.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "frame-427320541-2"
  }, [_c('p', {
    staticClass: "ga-naar-de-laatste-stap diodrumcyrillic-normal-white-23-7px",
    staticStyle: {
      "font-weight": "700"
    }
  }, [_vm._v("Ga naar de laatste stap")]), _c('img', {
    staticClass: "right-arrow-2",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow.svg",
      "alt": "rightArrow"
    }
  })])]), _c('div', {
    class: ['group-1', _vm.group11Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€400,-")])])]), _c('div', {
    class: ['group-1', _vm.group12Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€599,-")])])]), _c('div', {
    class: ['group-1', _vm.group13Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€699,-")])])]), _c('frame1000004784', {
    attrs: {
      "group": _vm.frame1000004784Props.group,
      "group116046944Props": _vm.frame1000004784Props.group116046944Props
    }
  })], 1), _c('div', {
    staticClass: "frame-427320542-1"
  }, [_c('div', {
    staticClass: "frame-2"
  }, [_c('div', {
    staticClass: "rectangle-40377"
  }), _c('div', {
    staticClass: "frame-107-1"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "ziggo",
      "name": "provider",
      "value": "Ziggo"
    },
    on: {
      "change": _vm.selectProvider
    }
  }), _c('label', {
    staticClass: "label2",
    attrs: {
      "for": "ziggo"
    }
  }, [_c('p', {
    staticClass: "ziggo diodrumcyrillic-regular-normal-downriver-25px"
  }, [_c('span', {
    staticClass: "pointer"
  }, [_vm._v("Ziggo")])])])])]), _c('div', {
    staticClass: "frame-2"
  }, [_c('div', {
    staticClass: "rectangle-40377"
  }), _c('div', {
    staticClass: "frame-107-1"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "anders",
      "name": "provider",
      "value": "Anders"
    },
    on: {
      "change": _vm.selectProvider
    }
  }), _c('label', {
    staticClass: "label2",
    attrs: {
      "for": "anders"
    }
  }, [_c('p', {
    staticClass: "anders diodrumcyrillic-regular-normal-downriver-25px"
  }, [_c('span', {
    staticClass: "pointer"
  }, [_vm._v("Anders")])])])])])]), _c('div', {
    staticClass: "frame-427320542-2"
  }, [_c('div', {
    staticClass: "frame-2"
  }, [_c('div', {
    staticClass: "rectangle-40377"
  }), _c('div', {
    staticClass: "frame-107-1"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "odido",
      "name": "provider",
      "value": "Odido"
    },
    on: {
      "change": _vm.selectProvider
    }
  }), _c('label', {
    staticClass: "label2",
    attrs: {
      "for": "odido"
    }
  }, [_c('p', {
    staticClass: "odido diodrumcyrillic-regular-normal-downriver-25px"
  }, [_c('span', {
    staticClass: "pointer"
  }, [_vm._v("Odido")])])])])]), _c('div', {
    staticClass: "frame-2"
  }, [_c('div', {
    staticClass: "rectangle-40377"
  }), _c('div', {
    staticClass: "frame-107-1"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "kpn",
      "name": "provider",
      "value": "KPN"
    },
    on: {
      "change": _vm.selectProvider
    }
  }), _c('label', {
    staticClass: "label2",
    attrs: {
      "for": "kpn"
    }
  }, [_c('p', {
    staticClass: "kpn diodrumcyrillic-regular-normal-downriver-25px"
  }, [_c('span', {
    staticClass: "pointer"
  }, [_vm._v("KPN")])])])])]), _vm.errorMessage ? _c('p', {
    staticClass: "error-text"
  }, [_vm._v(_vm._s(_vm.errorMessage))]) : _vm._e()])]), _c('img', {
    staticClass: "line-2-3",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg",
      "alt": "Line 2"
    }
  }), _c('p', {
    staticClass: "meervoordeelnl-is-3 diodrumcyrillic-regular-normal-silver-16px",
    domProps: {
      "innerHTML": _vm._s(_vm.meervoordeelNlIs)
    }
  })])]), _c('div', {
    staticClass: "container-mobiel"
  }, [_c('div', {
    staticClass: "navbar-mobiel"
  }, [_c('img', {
    staticClass: "logo-navbar-mobiel logo-navbar-mobiel-mv",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg",
      "alt": "MV logo 1"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png",
      "alt": "logo ziggo"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": __webpack_require__("a111"),
      "alt": ""
    }
  })]), _c('div', {
    staticClass: "achtergrond-pagina-2"
  }, [_c('div', {
    staticClass: "witte-container-pagina-2 hoogte-witte-container",
    style: _vm.errorMessage ? {
      height: '45rem'
    } : {}
  }, [_c('p', {
    staticClass: "stap1"
  }, [_vm._v("Stap 2 van de 3")]), _c('p', {
    staticClass: "vertel-ons"
  }, [_vm._v("Vertel ons welke provider je hebt:")]), _c('form', {
    staticClass: "radio-form"
  }, [_c('div', {
    staticClass: "radio-option radio-option-1 radio-option-1-pagina2"
  }, [_c('label', {
    attrs: {
      "for": "option1"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "option1",
      "name": "provider",
      "value": "Odido"
    },
    on: {
      "change": _vm.selectProvider
    }
  }), _c('span', {
    staticClass: "text-radio-vraag1"
  }, [_vm._v("Odido")])])]), _c('div', {
    staticClass: "radio-option radio-option-2 radio-option-2-pagina2"
  }, [_c('label', {
    attrs: {
      "for": "option2"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "option2",
      "name": "provider",
      "value": "KPN"
    },
    on: {
      "change": _vm.selectProvider
    }
  }), _c('span', {
    staticClass: "text-radio-vraag1"
  }, [_vm._v("KPN")])])]), _c('div', {
    staticClass: "radio-option radio-option-3 radio-option-3-pagina2"
  }, [_c('label', {
    attrs: {
      "for": "option3"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "option3",
      "name": "provider",
      "value": "Ziggo"
    },
    on: {
      "change": _vm.selectProvider
    }
  }), _c('span', {
    staticClass: "text-radio-vraag1"
  }, [_vm._v("Ziggo")])])]), _c('div', {
    staticClass: "radio-option radio-option-4 radio-option-4-pagina2"
  }, [_c('label', {
    attrs: {
      "for": "option4"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "option4",
      "name": "provider",
      "value": "Anders"
    },
    on: {
      "change": _vm.selectProvider
    }
  }), _c('span', {
    staticClass: "text-radio-vraag1"
  }, [_vm._v("Anders")])])])]), _vm.errorMessage ? _c('p', {
    staticClass: "error-text-mobiel"
  }, [_vm._v(_vm._s(_vm.errorMessage))]) : _vm._e(), _c('a', {
    staticStyle: {
      "text-decoration": "none"
    },
    attrs: {
      "href": "/pagina-3"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.goToStep3.apply(null, arguments);
      }
    }
  }, [_c('button', {
    staticClass: "doe-nu-mee-knop"
  }, [_c('div', {
    staticClass: "text-in-knop"
  }, [_vm._v(" Laatste stap "), _c('img', {
    staticClass: "marge-links-mobiel",
    attrs: {
      "src": __webpack_require__("adb5"),
      "alt": "pijl-naar-rechts"
    }
  })])])])]), _c('div', {
    staticClass: "container-afbeelding-prijzen-mobiel-2",
    style: _vm.errorMessage ? {
      top: '912px'
    } : {}
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("80a2"),
      "alt": ""
    }
  }), _c('svg', {
    staticClass: "blauwe-bal-mobiel-1",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "63.973",
      "cy": "63.973",
      "r": "63.2691",
      "transform": "rotate(4.4359 63.973 63.973)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("€699,-")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-2",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "105",
      "height": "105",
      "viewBox": "0 0 105 105",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "52.7158",
      "cy": "52.7158",
      "r": "52.0939",
      "transform": "rotate(-6.575 52.7158 52.7158)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "0.85856rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "57%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.5rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v(" €400,- ")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-3",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "64.0511",
      "cy": "64.0511",
      "r": "63.2691",
      "transform": "rotate(-12.012 64.0511 64.0511)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v(" €599,- ")])])])]), _c('hr', {
    staticClass: "lijn",
    staticStyle: {
      "margin-top": "3rem"
    }
  }), _c('div', {
    staticClass: "footer-pagina1"
  }, [_c('p', {
    staticClass: "text-footer-pagina1"
  }, [_vm._v("*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024. Actievoorwaarden van toepassing.")])])])])]);
};
var Pagina2vue_type_template_id_62f7a160_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina2.vue?vue&type=template&id=62f7a160

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/Store.js
// antwoorden.js
// let antwoorden = [];

// export function addAntwoord(answer) {
//   antwoorden.push(answer);
// }

// export function getAntwoorden() {
//   return antwoorden;
// }

// store.js
// store.js


vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
const store = new vuex_esm["a" /* default */].Store({
  state: {
    antwoorden: {} // Gebruik een object om antwoorden op te slaan
  },
  mutations: {
    ADD_ANTWOORD(state, {
      vraag,
      antwoord
    }) {
      state.antwoorden[vraag] = antwoord; // Sla het antwoord op onder de juiste vraag
    }
  },
  getters: {
    getAntwoorden(state) {
      return state.antwoorden; // Haal de antwoorden op
    }
  }
});
/* harmony default export */ var Store = (store); // Vergeet niet om de store te exporteren
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina2.vue?vue&type=script&lang=js





/* harmony default export */ var Pagina2vue_type_script_lang_js = ({
  name: "Pagina2",
  components: {
    Frame1: Frame1,
    Group1: Group1,
    Frame1000004784: Frame1000004784
  },
  data() {
    return {
      gekozenProvider: '',
      errorMessage: ''
    };
  },
  mounted() {
    const antwoordenLijst = this.$store.getters.getAntwoorden();
  },
  methods: {
    selectProvider(event) {
      this.gekozenProvider = event.target.value;
      this.errorMessage = '';
    },
    goToStep3() {
      if (!this.gekozenProvider) {
        this.errorMessage = 'Kies alstublieft een provider voordat u doorgaat.';
        console.log(this.errorMessage);
        return;
      }
      this.$store.commit('ADD_ANTWOORD', {
        vraag: 'antwoord2',
        antwoord: this.gekozenProvider
      });
      this.$router.push({
        path: '/pagina-3'
      });
    }
  },
  props: ["samsung1", "stap2Van3", "watIsJouwHuidigeProvider", "bolcomBon1", "image2", "gaNaarDeLaatsteStap", "ziggo", "anders", "odido", "group", "kpn", "meervoordeelNlIs", "group11Props", "group12Props", "group13Props", "frame1000004784Props"]
});
// CONCATENATED MODULE: ./src/components/Pagina2.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina2vue_type_script_lang_js = (Pagina2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina2.vue?vue&type=style&index=0&id=62f7a160&prod&lang=sass
var Pagina2vue_type_style_index_0_id_62f7a160_prod_lang_sass = __webpack_require__("f6b6");

// CONCATENATED MODULE: ./src/components/Pagina2.vue






/* normalize component */

var Pagina2_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina2vue_type_script_lang_js,
  Pagina2vue_type_template_id_62f7a160_render,
  Pagina2vue_type_template_id_62f7a160_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina2 = (Pagina2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina3.vue?vue&type=template&id=a8c94570
var Pagina3vue_type_template_id_a8c94570_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('center', [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "pagina-3 screen"
  }, [_c('div', {
    staticClass: "overlap-group3-4"
  }, [_c('div', {
    staticClass: "rectangle-30-4"
  }), _c('img', {
    staticClass: "samsung-1-4",
    attrs: {
      "src": _vm.samsung1,
      "alt": "Samsung 1"
    }
  }), _c('div', {
    staticClass: "background-4"
  }), _c('frame1'), _c('div', {
    staticClass: "frame-427320545-2"
  }, [_c('p', {
    staticClass: "stap-zoveel-pagina3"
  }, [_vm._v("Stap 3 van de 3")]), _c('p', {
    staticClass: "maak-kans-op"
  }, [_vm._v("Vul je postcode in en check of je kans maakt op "), _c('span', {
    staticClass: "gekozen-product"
  }, [_vm._v(_vm._s(_vm.chosenProduct))])])]), _c('img', {
    staticClass: "bolcom-bon-1-4",
    attrs: {
      "src": _vm.bolcomBon1,
      "alt": "bolcom-bon 1"
    }
  }), _c('img', {
    staticClass: "image-2-4",
    attrs: {
      "src": _vm.image2,
      "alt": "image 2"
    }
  }), _c('div', {
    staticClass: "frame-427320538"
  }, [_c('input', {
    ref: "postcodeInput",
    staticClass: "x2000-ab-input",
    attrs: {
      "type": "text",
      "placeholder": "Vul hier je postcode in"
    }
  })]), _c('div', {
    staticClass: "frame-427320541-3"
  }, [_c('button', {
    staticClass: "invisible-button check-mijn-postcode diodrumcyrillic-normal-white-23-7px",
    staticStyle: {
      "font-weight": "700"
    },
    on: {
      "click": _vm.checkPostcode
    }
  }, [_vm._v("Check mijn postcode")]), _c('img', {
    staticClass: "right-arrow-3",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow.svg",
      "alt": "rightArrow"
    }
  })]), _vm.postcodeError ? _c('p', {
    staticClass: "error-message-pagina-3"
  }, [_vm._v(_vm._s(_vm.postcodeError))]) : _vm._e(), _c('div', {
    class: ['group-1', _vm.group11Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€400,-")])])]), _c('div', {
    class: ['group-1', _vm.group12Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€599,-")])])]), _c('div', {
    class: ['group-1', _vm.group13Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€699,-")])])]), _vm._v("2 "), _c('frame1000004784', {
    attrs: {
      "group": _vm.frame1000004784Props.group,
      "group116046944Props": _vm.frame1000004784Props.group116046944Props
    }
  })], 1), _c('img', {
    staticClass: "line-2-4",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg",
      "alt": "Line 2"
    }
  }), _c('p', {
    staticClass: "meervoordeelnl-is-4 diodrumcyrillic-regular-normal-silver-16px",
    domProps: {
      "innerHTML": _vm._s(_vm.meervoordeelNlIs)
    }
  })])]), _c('div', {
    staticClass: "container-mobiel5"
  }, [_c('div', {
    staticClass: "navbar-mobiel"
  }, [_c('img', {
    staticClass: "logo-navbar-mobiel logo-navbar-mobiel-mv",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg",
      "alt": "MV logo 1"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png",
      "alt": "logo ziggo"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": __webpack_require__("a111"),
      "alt": ""
    }
  })]), _c('div', {
    staticClass: "achtergrond-pagina-3"
  }, [_c('div', {
    staticClass: "witte-container-pagina-3"
  }, [_c('p', {
    staticClass: "stap1"
  }, [_vm._v(" stap 3 van de 3 ")]), _c('p', {
    staticClass: "vul-postcode-in"
  }, [_vm._v("Vul je postcode in en check of je kans maakt op "), _c('span', {
    staticClass: "gekozen-product-mobiel"
  }, [_vm._v(" " + _vm._s(_vm.chosenProduct) + " ")])]), _c('input', {
    ref: "postcodeInput",
    staticClass: "postcode-input-mobiel 2000-ab-input",
    attrs: {
      "type": "text",
      "placeholder": "Vul hier je postcode in"
    }
  }), _c('button', {
    staticClass: "postcode-knop-mobiel",
    staticStyle: {
      "font-weight": "700"
    },
    on: {
      "click": _vm.checkPostcode
    }
  }, [_vm._v("Check postcode "), _c('img', {
    attrs: {
      "src": __webpack_require__("adb5"),
      "alt": ""
    }
  })]), _vm.postcodeError ? _c('p', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v(_vm._s(_vm.postcodeError))]) : _vm._e()]), _c('div', {
    staticClass: "container-afbeelding-prijzen-mobiel-3"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("80a2"),
      "alt": ""
    }
  }), _c('svg', {
    staticClass: "blauwe-bal-mobiel-1",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "63.973",
      "cy": "63.973",
      "r": "63.2691",
      "transform": "rotate(4.4359 63.973 63.973)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("€699,-")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-2",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "105",
      "height": "105",
      "viewBox": "0 0 105 105",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "52.7158",
      "cy": "52.7158",
      "r": "52.0939",
      "transform": "rotate(-6.575 52.7158 52.7158)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "0.85856rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "57%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.5rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v(" €400,- ")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-3",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "64.0511",
      "cy": "64.0511",
      "r": "63.2691",
      "transform": "rotate(-12.012 64.0511 64.0511)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v(" €599,- ")])])])]), _c('hr', {
    staticClass: "lijn",
    staticStyle: {
      "margin-top": "3rem"
    }
  }), _c('div', {
    staticClass: "footer-pagina1"
  }, [_c('p', {
    staticClass: "text-footer-pagina1"
  }, [_vm._v("*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024. Actievoorwaarden van toepassing.")])])])])]);
};
var Pagina3vue_type_template_id_a8c94570_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina3.vue?vue&type=template&id=a8c94570

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina3.vue?vue&type=script&lang=js




 // Voeg deze regel toe

/* harmony default export */ var Pagina3vue_type_script_lang_js = ({
  name: "Pagina3",
  components: {
    Frame1: Frame1,
    Group1: Group1,
    Frame1000004784: Frame1000004784
  },
  props: ["samsung1", "stap3Van3", "vulJePostcodeInEnCheckOfJeKansMaakt", "bolcomBon1", "image2", "x2000Ab", "checkMijnPostcode", "meervoordeelNlIs", "group11Props", "group12Props", "group13Props", "frame1000004784Props"],
  data() {
    return {
      chosenProduct: '',
      postcodeError: ''
    };
  },
  computed: {
    ...Object(vuex_esm["b" /* mapGetters */])(['getAntwoorden']) // Gebruik mapGetters om de antwoorden op te halen
  },
  mounted() {
    this.chosenProduct = this.getAntwoorden.antwoord1 || ''; // Haal het specifieke antwoord op
    console.log('Gekozen product:', this.chosenProduct);

    // Luister naar de "keydown" gebeurtenis voor Enter
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroy() {
    // Verwijder de "keydown" eventlistener wanneer de component wordt vernietigd
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    validatePostcode(postcode) {
      const postcodeRegex = /^\d{4}\s*[a-zA-Z]{2}$/;
      return postcodeRegex.test(postcode);
    },
    checkPostcode() {
      let inputValue = document.querySelector('.x2000-ab-input').value.trim() || document.querySelector('.postcode-input-mobiel').value.trim();
      console.log("Ingevoerde waarde:", inputValue);
      if (this.validatePostcode(inputValue)) {
        this.postcodeError = '';
        console.log("Postcode is geldig:", inputValue);
        this.$router.push('/pagina-4');
      } else {
        this.postcodeError = 'Voer een geldige postcode in (bijv. 2222 AB)';
        console.log("Postcode is ongeldig:", inputValue);
      }
    },
    handleKeyDown(event) {
      if (event.key === 'Enter') {
        this.checkPostcode(); // Voer de postcode-validatie en router-navigatie uit
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Pagina3.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina3vue_type_script_lang_js = (Pagina3vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina3.vue?vue&type=style&index=0&id=a8c94570&prod&lang=sass
var Pagina3vue_type_style_index_0_id_a8c94570_prod_lang_sass = __webpack_require__("4eef");

// CONCATENATED MODULE: ./src/components/Pagina3.vue






/* normalize component */

var Pagina3_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina3vue_type_script_lang_js,
  Pagina3vue_type_template_id_a8c94570_render,
  Pagina3vue_type_template_id_a8c94570_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina3 = (Pagina3_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina4.vue?vue&type=template&id=f59bb4d0
var Pagina4vue_type_template_id_f59bb4d0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('center', [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "pagina-4 screen"
  }, [_c('div', {
    staticClass: "overlap-group3-5"
  }, [_c('div', {
    staticClass: "rectangle-30-5"
  }), _c('img', {
    staticClass: "samsung-1-5",
    attrs: {
      "src": _vm.samsung1,
      "alt": "Samsung 1"
    }
  }), _c('div', {
    staticClass: "background-5"
  }), _c('div', {
    staticClass: "frame-1-6"
  }, [_c('img', {
    staticClass: "pagina-9",
    attrs: {
      "src": _vm.pagina9,
      "alt": "Pagina 9"
    }
  }), _c('img', {
    staticClass: "image-6-6",
    attrs: {
      "src": _vm.image6,
      "alt": "image 6"
    }
  })]), _c('img', {
    staticClass: "bolcom-bon-1-5",
    attrs: {
      "src": _vm.bolcomBon1,
      "alt": "bolcom-bon 1"
    }
  }), _c('img', {
    staticClass: "image-2-5",
    attrs: {
      "src": _vm.image2,
      "alt": "image 2"
    }
  }), _c('div', {
    staticClass: "meervoordeel-pagina4",
    staticStyle: {
      "display": "inline-flex"
    }
  }, [_c('span', {
    staticClass: "mvd-nl"
  }, [_vm._v("Meervoordeel.nl ")]), _c('p', {
    staticClass: "mvd-nl-tekst"
  }, [_vm._v(" checkt nu of ")]), _c('br'), _c('p', {
    staticClass: "mvd-nl-tekst2"
  }, [_vm._v("jij kans maakt op de prijs...")])]), _c('svg', {
    staticClass: "draaien-animatie loading-sign-1",
    attrs: {
      "width": "94",
      "height": "94",
      "viewBox": "0 0 94 94",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('g', {
    attrs: {
      "id": "loading-sign 1"
    }
  }, [_c('path', {
    attrs: {
      "id": "Vector",
      "d": "M46.9997 9.79194C46.6104 9.78643 46.224 9.85834 45.8627 10.0035C45.5015 10.1486 45.1727 10.3641 44.8955 10.6375C44.6183 10.9108 44.3982 11.2365 44.248 11.5956C44.0977 11.9547 44.0203 12.3401 44.0203 12.7294C44.0203 13.1187 44.0977 13.5041 44.248 13.8633C44.3982 14.2224 44.6183 14.5481 44.8955 14.8214C45.1727 15.0947 45.5015 15.3102 45.8627 15.4554C46.224 15.6005 46.6104 15.6724 46.9997 15.6669C65.4203 15.6669 80.2913 30.5379 80.2913 48.9586C80.2913 67.3793 65.4203 82.2503 46.9997 82.2503C36.0072 82.2503 26.2957 76.9426 20.2294 68.7523C19.7658 68.1259 19.0724 67.7093 18.3016 67.5942C17.5309 67.4791 16.746 67.6748 16.1196 68.1384C15.4932 68.602 15.0766 69.2954 14.9615 70.0662C14.8463 70.8369 15.0421 71.6218 15.5057 72.2482C22.6386 81.8787 34.1122 88.1253 46.9997 88.1253C68.5956 88.1253 86.1663 70.5545 86.1663 48.9586C86.1663 27.3627 68.5956 9.79194 46.9997 9.79194ZM35.7622 11.5628C34.9831 11.5628 34.236 11.8723 33.6851 12.4232C33.1342 12.9741 32.8247 13.7213 32.8247 14.5003C32.8247 15.2794 33.1342 16.0266 33.6851 16.5775C34.236 17.1284 34.9831 17.4378 35.7622 17.4378C36.5413 17.4378 37.2884 17.1284 37.8393 16.5775C38.3902 16.0266 38.6997 15.2794 38.6997 14.5003C38.6997 13.7213 38.3902 12.9741 37.8393 12.4232C37.2884 11.8723 36.5413 11.5628 35.7622 11.5628ZM25.6722 16.7302C24.8931 16.7302 24.146 17.0397 23.5951 17.5906C23.0442 18.1415 22.7347 18.8887 22.7347 19.6677C22.7347 20.4468 23.0442 21.194 23.5951 21.7449C24.146 22.2958 24.8931 22.6052 25.6722 22.6052C26.4513 22.6052 27.1984 22.2958 27.7493 21.7449C28.3002 21.194 28.6097 20.4468 28.6097 19.6677C28.6097 18.8887 28.3002 18.1415 27.7493 17.5906C27.1984 17.0397 26.4513 16.7302 25.6722 16.7302ZM17.6744 24.751C16.8953 24.751 16.1482 25.0605 15.5973 25.6114C15.0464 26.1623 14.7369 26.9094 14.7369 27.6885C14.7369 28.4676 15.0464 29.2147 15.5973 29.7656C16.1482 30.3165 16.8953 30.626 17.6744 30.626C18.4535 30.626 19.2006 30.3165 19.7515 29.7656C20.3024 29.2147 20.6119 28.4676 20.6119 27.6885C20.6119 26.9094 20.3024 26.1623 19.7515 25.6114C19.2006 25.0605 18.4535 24.751 17.6744 24.751ZM12.5299 34.8487C11.7509 34.8487 11.0037 35.1581 10.4528 35.709C9.90193 36.2599 9.59245 37.0071 9.59245 37.7862C9.59245 38.5652 9.90193 39.3124 10.4528 39.8633C11.0037 40.4142 11.7509 40.7237 12.5299 40.7237C13.309 40.7237 14.0562 40.4142 14.6071 39.8633C15.158 39.3124 15.4674 38.5652 15.4674 37.7862C15.4674 37.0071 15.158 36.2599 14.6071 35.709C14.0562 35.1581 13.309 34.8487 12.5299 34.8487ZM10.7705 46.0211C9.99143 46.0211 9.24427 46.3306 8.69338 46.8815C8.14249 47.4324 7.83301 48.1795 7.83301 48.9586C7.83301 49.7377 8.14249 50.4848 8.69338 51.0357C9.24427 51.5866 9.99143 51.8961 10.7705 51.8961C11.5496 51.8961 12.2967 51.5866 12.8476 51.0357C13.3985 50.4848 13.708 49.7377 13.708 48.9586C13.708 48.1795 13.3985 47.4324 12.8476 46.8815C12.2967 46.3306 11.5496 46.0211 10.7705 46.0211ZM12.5376 57.2318C11.7585 57.2318 11.0114 57.5413 10.4605 58.0922C9.90958 58.6431 9.6001 59.3902 9.6001 60.1693C9.6001 60.9484 9.90958 61.6955 10.4605 62.2464C11.0114 62.7973 11.7585 63.1068 12.5376 63.1068C13.3167 63.1068 14.0638 62.7973 14.6147 62.2464C15.1656 61.6955 15.4751 60.9484 15.4751 60.1693C15.4751 59.3902 15.1656 58.6431 14.6147 58.0922C14.0638 57.5413 13.3167 57.2318 12.5376 57.2318Z",
      "fill": "#F48C02"
    }
  })])]), _c('div', {
    class: ['group-1', _vm.group11Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€400,-")])])]), _c('div', {
    class: ['group-1', _vm.group12Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€599,-")])])]), _c('div', {
    class: ['group-1', _vm.group13Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€699,-")])])]), _c('frame1000004784', {
    attrs: {
      "group": _vm.frame1000004784Props.group,
      "group116046944Props": _vm.frame1000004784Props.group116046944Props
    }
  })], 1), _c('img', {
    staticClass: "line-2-5",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg",
      "alt": "Line 2"
    }
  }), _c('p', {
    staticClass: "meervoordeelnl-is-5 diodrumcyrillic-regular-normal-silver-16px",
    domProps: {
      "innerHTML": _vm._s(_vm.meervoordeelNlIs)
    }
  })])]), _c('div', {
    staticClass: "container-mobiel"
  }, [_c('div', {
    staticClass: "navbar-mobiel"
  }, [_c('img', {
    staticClass: "logo-navbar-mobiel logo-navbar-mobiel-mv",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg",
      "alt": "MV logo 1"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png",
      "alt": "logo ziggo"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": __webpack_require__("a111"),
      "alt": ""
    }
  })]), _c('div', {
    staticClass: "achtergrond-pagina-4"
  }, [_c('div', {
    staticClass: "witte-achtergrond-pagina-4"
  }, [_c('div', {
    staticClass: "checken"
  }, [_c('span', {
    staticClass: "meervoordeel nl"
  }, [_vm._v(" Meervoordeel.nl ")]), _vm._v(" checkt nu of jij kans maakt op de prijs... ")]), _c('svg', {
    staticClass: "draaien-animatie",
    attrs: {
      "width": "94",
      "height": "94",
      "viewBox": "0 0 94 94",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('g', {
    attrs: {
      "id": "loading-sign 1"
    }
  }, [_c('path', {
    attrs: {
      "id": "Vector",
      "d": "M46.9997 9.79194C46.6104 9.78643 46.224 9.85834 45.8627 10.0035C45.5015 10.1486 45.1727 10.3641 44.8955 10.6375C44.6183 10.9108 44.3982 11.2365 44.248 11.5956C44.0977 11.9547 44.0203 12.3401 44.0203 12.7294C44.0203 13.1187 44.0977 13.5041 44.248 13.8633C44.3982 14.2224 44.6183 14.5481 44.8955 14.8214C45.1727 15.0947 45.5015 15.3102 45.8627 15.4554C46.224 15.6005 46.6104 15.6724 46.9997 15.6669C65.4203 15.6669 80.2913 30.5379 80.2913 48.9586C80.2913 67.3793 65.4203 82.2503 46.9997 82.2503C36.0072 82.2503 26.2957 76.9426 20.2294 68.7523C19.7658 68.1259 19.0724 67.7093 18.3016 67.5942C17.5309 67.4791 16.746 67.6748 16.1196 68.1384C15.4932 68.602 15.0766 69.2954 14.9615 70.0662C14.8463 70.8369 15.0421 71.6218 15.5057 72.2482C22.6386 81.8787 34.1122 88.1253 46.9997 88.1253C68.5956 88.1253 86.1663 70.5545 86.1663 48.9586C86.1663 27.3627 68.5956 9.79194 46.9997 9.79194ZM35.7622 11.5628C34.9831 11.5628 34.236 11.8723 33.6851 12.4232C33.1342 12.9741 32.8247 13.7213 32.8247 14.5003C32.8247 15.2794 33.1342 16.0266 33.6851 16.5775C34.236 17.1284 34.9831 17.4378 35.7622 17.4378C36.5413 17.4378 37.2884 17.1284 37.8393 16.5775C38.3902 16.0266 38.6997 15.2794 38.6997 14.5003C38.6997 13.7213 38.3902 12.9741 37.8393 12.4232C37.2884 11.8723 36.5413 11.5628 35.7622 11.5628ZM25.6722 16.7302C24.8931 16.7302 24.146 17.0397 23.5951 17.5906C23.0442 18.1415 22.7347 18.8887 22.7347 19.6677C22.7347 20.4468 23.0442 21.194 23.5951 21.7449C24.146 22.2958 24.8931 22.6052 25.6722 22.6052C26.4513 22.6052 27.1984 22.2958 27.7493 21.7449C28.3002 21.194 28.6097 20.4468 28.6097 19.6677C28.6097 18.8887 28.3002 18.1415 27.7493 17.5906C27.1984 17.0397 26.4513 16.7302 25.6722 16.7302ZM17.6744 24.751C16.8953 24.751 16.1482 25.0605 15.5973 25.6114C15.0464 26.1623 14.7369 26.9094 14.7369 27.6885C14.7369 28.4676 15.0464 29.2147 15.5973 29.7656C16.1482 30.3165 16.8953 30.626 17.6744 30.626C18.4535 30.626 19.2006 30.3165 19.7515 29.7656C20.3024 29.2147 20.6119 28.4676 20.6119 27.6885C20.6119 26.9094 20.3024 26.1623 19.7515 25.6114C19.2006 25.0605 18.4535 24.751 17.6744 24.751ZM12.5299 34.8487C11.7509 34.8487 11.0037 35.1581 10.4528 35.709C9.90193 36.2599 9.59245 37.0071 9.59245 37.7862C9.59245 38.5652 9.90193 39.3124 10.4528 39.8633C11.0037 40.4142 11.7509 40.7237 12.5299 40.7237C13.309 40.7237 14.0562 40.4142 14.6071 39.8633C15.158 39.3124 15.4674 38.5652 15.4674 37.7862C15.4674 37.0071 15.158 36.2599 14.6071 35.709C14.0562 35.1581 13.309 34.8487 12.5299 34.8487ZM10.7705 46.0211C9.99143 46.0211 9.24427 46.3306 8.69338 46.8815C8.14249 47.4324 7.83301 48.1795 7.83301 48.9586C7.83301 49.7377 8.14249 50.4848 8.69338 51.0357C9.24427 51.5866 9.99143 51.8961 10.7705 51.8961C11.5496 51.8961 12.2967 51.5866 12.8476 51.0357C13.3985 50.4848 13.708 49.7377 13.708 48.9586C13.708 48.1795 13.3985 47.4324 12.8476 46.8815C12.2967 46.3306 11.5496 46.0211 10.7705 46.0211ZM12.5376 57.2318C11.7585 57.2318 11.0114 57.5413 10.4605 58.0922C9.90958 58.6431 9.6001 59.3902 9.6001 60.1693C9.6001 60.9484 9.90958 61.6955 10.4605 62.2464C11.0114 62.7973 11.7585 63.1068 12.5376 63.1068C13.3167 63.1068 14.0638 62.7973 14.6147 62.2464C15.1656 61.6955 15.4751 60.9484 15.4751 60.1693C15.4751 59.3902 15.1656 58.6431 14.6147 58.0922C14.0638 57.5413 13.3167 57.2318 12.5376 57.2318Z",
      "fill": "#F48C02"
    }
  })])])]), _c('div', {
    staticClass: "container-afbeelding-prijzen-mobiel-4"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("80a2"),
      "alt": ""
    }
  }), _c('svg', {
    staticClass: "blauwe-bal-mobiel-1",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "63.973",
      "cy": "63.973",
      "r": "63.2691",
      "transform": "rotate(4.4359 63.973 63.973)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("€699,-")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-2",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "105",
      "height": "105",
      "viewBox": "0 0 105 105",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "52.7158",
      "cy": "52.7158",
      "r": "52.0939",
      "transform": "rotate(-6.575 52.7158 52.7158)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "0.85856rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "57%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.5rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v(" €400,- ")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-3",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "64.0511",
      "cy": "64.0511",
      "r": "63.2691",
      "transform": "rotate(-12.012 64.0511 64.0511)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v(" €599,- ")])])])]), _c('hr', {
    staticClass: "lijn",
    staticStyle: {
      "margin-top": "3rem"
    }
  }), _c('div', {
    staticClass: "footer-pagina1"
  }, [_c('p', {
    staticClass: "text-footer-pagina1"
  }, [_vm._v("*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024. Actievoorwaarden van toepassing.")])])])])]);
};
var Pagina4vue_type_template_id_f59bb4d0_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina4.vue?vue&type=template&id=f59bb4d0

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina4.vue?vue&type=script&lang=js




/* harmony default export */ var Pagina4vue_type_script_lang_js = ({
  name: "Pagina4",
  components: {
    Group1: Group1,
    Frame1000004784: Frame1000004784
  },
  props: ["samsung1", "pagina9", "image6", "meervoordeelNlChecktNuOfJijKansMaak", "bolcomBon1", "image2", "meervoordeelNlIs", "group11Props", "group12Props", "group13Props", "frame1000004784Props"],
  data() {
    return {
      chosenProduct: ''
    };
  },
  mounted() {
    const antwoordenLijst = /* Cannot get final name for export "getAntwoorden" in "./src/Store.js" (known exports: default, known reexports: ) */ undefined();
    this.chosenProduct = antwoordenLijst[antwoordenLijst.length - 2] || 'geen basta gekozen';
    console.log('Gekozen product:', this.chosenProduct);
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/pagina-6");
    }, 1500);
  }
});
// CONCATENATED MODULE: ./src/components/Pagina4.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina4vue_type_script_lang_js = (Pagina4vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina4.vue?vue&type=style&index=0&id=f59bb4d0&prod&lang=sass
var Pagina4vue_type_style_index_0_id_f59bb4d0_prod_lang_sass = __webpack_require__("6f97");

// CONCATENATED MODULE: ./src/components/Pagina4.vue






/* normalize component */

var Pagina4_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina4vue_type_script_lang_js,
  Pagina4vue_type_template_id_f59bb4d0_render,
  Pagina4vue_type_template_id_f59bb4d0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina4 = (Pagina4_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina5.vue?vue&type=template&id=8522eccc
var Pagina5vue_type_template_id_8522eccc_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('center', [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "pagina-5 screen"
  }, [_c('div', {
    staticClass: "overlap-group1"
  }, [_c('div', {
    staticClass: "rectangle-30-6"
  }), _c('div', {
    staticClass: "background-6",
    style: _vm.errorMessage ? {
      height: '885px!important'
    } : {
      height: '885px'
    }
  }), _c('img', {
    staticClass: "line-4",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-4.svg",
      "alt": "Line 4"
    }
  }), _c('p', {
    staticClass: "hoe-kunnen-wij-jou-bereiken"
  }, [_vm._v("Hoe kunnen wij jou bereiken?")]), _c('div', {
    staticClass: "frame-427320569"
  }, [_c('form', {
    staticClass: "form-pagina5",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "name-group"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "voornaam"
    }
  }), _c('svg', {
    staticClass: "form-icoon",
    class: {
      'input-error-icoon': _vm.heeftNaamFout
    },
    attrs: {
      "width": "23",
      "height": "23",
      "viewBox": "0 0 23 23",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('g', {
    attrs: {
      "id": "Layer 2"
    }
  }, [_c('g', {
    attrs: {
      "id": "02 User"
    }
  }, [_c('path', {
    attrs: {
      "id": "Vector",
      "d": "M1.5 21.5C1.5 18.8478 2.55357 16.3043 4.42893 14.4289C6.3043 12.5536 8.84784 11.5 11.5 11.5C14.1522 11.5 16.6957 12.5536 18.5711 14.4289C20.4464 16.3043 21.5 18.8478 21.5 21.5H1.5Z",
      "stroke": "#49B7AC",
      "stroke-width": "1.33333",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _c('path', {
    attrs: {
      "id": "Vector_2",
      "d": "M11.5 11.5C14.2614 11.5 16.5 9.26142 16.5 6.5C16.5 3.73858 14.2614 1.5 11.5 1.5C8.73858 1.5 6.5 3.73858 6.5 6.5C6.5 9.26142 8.73858 11.5 11.5 11.5Z",
      "stroke": "#49B7AC",
      "stroke-width": "1.33333",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  })])])]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.voornaam,
      expression: "formData.voornaam"
    }],
    class: {
      'input-error': _vm.errors.voornaam
    },
    attrs: {
      "type": "text",
      "id": "voornaam",
      "required": "",
      "placeholder": "Vul je voornaam in"
    },
    domProps: {
      "value": _vm.formData.voornaam
    },
    on: {
      "blur": _vm.validateVoornaam,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "voornaam", $event.target.value);
      }
    }
  }), _vm.errors.voornaam ? _c('span', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.voornaam))]) : _vm._e()]), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "achternaam"
    }
  }), _c('svg', {
    staticClass: "form-icoon",
    class: {
      'input-error-icoon': _vm.heeftNaamFout
    },
    attrs: {
      "width": "23",
      "height": "23",
      "viewBox": "0 0 23 23",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('g', {
    attrs: {
      "id": "Layer 2"
    }
  }, [_c('g', {
    attrs: {
      "id": "02 User"
    }
  }, [_c('path', {
    attrs: {
      "id": "Vector",
      "d": "M1.5 21.5C1.5 18.8478 2.55357 16.3043 4.42893 14.4289C6.3043 12.5536 8.84784 11.5 11.5 11.5C14.1522 11.5 16.6957 12.5536 18.5711 14.4289C20.4464 16.3043 21.5 18.8478 21.5 21.5H1.5Z",
      "stroke": "#49B7AC",
      "stroke-width": "1.33333",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _c('path', {
    attrs: {
      "id": "Vector_2",
      "d": "M11.5 11.5C14.2614 11.5 16.5 9.26142 16.5 6.5C16.5 3.73858 14.2614 1.5 11.5 1.5C8.73858 1.5 6.5 3.73858 6.5 6.5C6.5 9.26142 8.73858 11.5 11.5 11.5Z",
      "stroke": "#49B7AC",
      "stroke-width": "1.33333",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  })])])]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.achternaam,
      expression: "formData.achternaam"
    }],
    class: {
      'input-error': _vm.errors.achternaam
    },
    attrs: {
      "type": "text",
      "id": "achternaam",
      "required": "",
      "placeholder": "Vul je achternaam in"
    },
    domProps: {
      "value": _vm.formData.achternaam
    },
    on: {
      "blur": _vm.validateAchternaam,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "achternaam", $event.target.value);
      }
    }
  }), _vm.errors.achternaam ? _c('span', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.achternaam))]) : _vm._e()])]), _c('div', {
    staticClass: "form-group full-width"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }), _c('svg', {
    staticClass: "form-icoon-2",
    attrs: {
      "width": "21",
      "height": "15",
      "viewBox": "0 0 21 15",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('g', {
    attrs: {
      "id": "Layer 2"
    }
  }, [_c('g', {
    attrs: {
      "id": "14 Mail"
    }
  }, [_c('path', {
    attrs: {
      "id": "Vector",
      "d": "M19.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V13.5C0.5 14.0523 0.947715 14.5 1.5 14.5H19.5C20.0523 14.5 20.5 14.0523 20.5 13.5V1.5C20.5 0.947715 20.0523 0.5 19.5 0.5Z",
      "stroke": "#49B7AC",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _c('path', {
    attrs: {
      "id": "Vector_2",
      "d": "M0.847656 0.743286L9.92671 7.09829C10.0948 7.21594 10.295 7.27905 10.5002 7.27905C10.7053 7.27905 10.9055 7.21594 11.0736 7.09829L20.1527 0.743286",
      "stroke": "#49B7AC",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _c('path', {
    attrs: {
      "id": "Vector_3",
      "d": "M20.2073 14.2071L12.4922 6.49194",
      "stroke": "#49B7AC",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _c('path', {
    attrs: {
      "id": "Vector_4",
      "d": "M8.50812 6.49194L0.792969 14.2071",
      "stroke": "#49B7AC",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  })])])]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.email,
      expression: "formData.email"
    }],
    class: {
      'input-error': _vm.errors.email
    },
    attrs: {
      "type": "email",
      "id": "email",
      "required": "",
      "placeholder": "Vul je e-mailadres in"
    },
    domProps: {
      "value": _vm.formData.email
    },
    on: {
      "blur": _vm.validateEmail,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "email", $event.target.value);
      }
    }
  }), _vm.errors.email ? _c('span', {
    staticClass: "error-message error-message-email"
  }, [_vm._v(_vm._s(_vm.errors.email))]) : _vm._e()]), _c('div', {
    staticClass: "form-group full-width"
  }, [_c('label', {
    attrs: {
      "for": "telefoonnummer"
    }
  }), _c('svg', {
    staticClass: "form-icoon-2",
    attrs: {
      "width": "23",
      "height": "23",
      "viewBox": "0 0 23 23",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('g', {
    attrs: {
      "id": "Group"
    }
  }, [_c('path', {
    attrs: {
      "id": "Vector",
      "d": "M17.9615 14.0704C17.7115 13.8208 17.3726 13.6806 17.0192 13.6806C16.6659 13.6806 16.327 13.8208 16.0769 14.0704L14.6339 15.5134C13.403 16.7458 10.8512 14.8893 9.61435 13.6522C7.80256 11.8406 6.51948 9.37584 7.5082 8.3871L8.95139 6.94407C9.20096 6.69401 9.34112 6.35513 9.34112 6.00183C9.34112 5.64853 9.20096 5.30966 8.95139 5.05959L5.47391 1.58202C5.22381 1.33243 4.88492 1.19226 4.53159 1.19226C4.17827 1.19226 3.83937 1.33243 3.58928 1.58202L2.14628 3.02505C-1.50473 6.67616 1.45865 12.9659 5.75722 17.2644C9.66627 21.1736 16.1602 24.7116 19.9962 20.8755L21.4394 19.4324C21.6889 19.1823 21.829 18.8435 21.829 18.4902C21.829 18.1369 21.6889 17.7981 21.4394 17.5479L17.9615 14.0704ZM4.07791 2.07047C4.19845 1.95024 4.36174 1.88273 4.53199 1.88273C4.70223 1.88273 4.86553 1.95024 4.98607 2.07047L8.46276 5.54823C8.58287 5.66863 8.65032 5.83176 8.65032 6.00183C8.65032 6.1719 8.58287 6.33503 8.46276 6.45543L7.26398 7.65424L2.87913 3.26928L4.07791 2.07047ZM6.24585 16.776C2.84458 13.3746 -0.743254 7.36855 2.39879 3.76621L6.79746 8.16559C5.78032 9.64968 7.23417 12.2495 9.12552 14.1409C10.5715 15.5867 13.1866 17.4151 14.8586 16.2263L19.2551 20.6235C15.6564 23.7627 9.65442 20.1846 6.24585 16.776ZM20.9508 18.9438L19.752 20.1428L15.3672 15.7576L16.5659 14.5588C16.6865 14.4386 16.8498 14.3711 17.02 14.3711C17.1903 14.3711 17.3536 14.4386 17.4741 14.5588L20.9508 18.0372C21.0707 18.1576 21.1381 18.3206 21.1381 18.4905C21.1381 18.6604 21.0707 18.8234 20.9508 18.9438Z",
      "fill": "#49B7AC"
    }
  }), _c('path', {
    attrs: {
      "id": "Vector_2",
      "d": "M11.414 7.91122C13.206 8.4966 14.3618 9.65257 14.9479 11.4452C14.989 11.5761 15.0556 11.6975 15.1439 11.8025C15.2322 11.9074 15.3405 11.9937 15.4624 12.0565C15.5843 12.1193 15.7175 12.1573 15.8542 12.1682C15.9909 12.1792 16.1285 12.1629 16.2588 12.1203C16.3892 12.0777 16.5098 12.0096 16.6137 11.9201C16.7176 11.8305 16.8026 11.7212 16.864 11.5986C16.9253 11.4759 16.9617 11.3423 16.971 11.2054C16.9803 11.0686 16.9624 10.9313 16.9182 10.8014C16.1246 8.37025 14.4899 6.73433 12.0584 5.94124C11.929 5.89898 11.7926 5.88262 11.6569 5.89308C11.5212 5.90355 11.3889 5.94064 11.2675 6.00224C11.1462 6.06384 11.0381 6.14874 10.9496 6.2521C10.861 6.35545 10.7937 6.47524 10.7514 6.60461C10.7092 6.73399 10.6928 6.87042 10.7033 7.00613C10.7137 7.14183 10.7508 7.27414 10.8124 7.3955C10.874 7.51687 10.9589 7.62491 11.0623 7.71347C11.1656 7.80202 11.2854 7.86935 11.4148 7.91161L11.414 7.91122ZM11.4069 6.81883C11.4355 6.73177 11.4974 6.65959 11.5791 6.6181C11.6608 6.57662 11.7556 6.56921 11.8428 6.59751C14.0524 7.31932 15.5392 8.80578 16.2606 11.0154C16.289 11.1026 16.2817 11.1974 16.2402 11.2792C16.1988 11.3609 16.1266 11.4228 16.0395 11.4514C15.9524 11.4785 15.8581 11.4706 15.7767 11.4293C15.6954 11.388 15.6333 11.3166 15.6038 11.2302C14.9454 9.21348 13.6451 7.91339 11.6286 7.25456C11.5415 7.22605 11.4693 7.16417 11.4277 7.0825C11.3862 7.00083 11.3787 6.90601 11.4069 6.81883Z",
      "fill": "#49B7AC"
    }
  }), _c('path', {
    attrs: {
      "id": "Vector_3",
      "d": "M12.528 5.2831C15.0892 6.11863 16.7409 7.77074 17.5772 10.3314C17.6626 10.5927 17.8483 10.8094 18.0934 10.9338C18.3385 11.0582 18.6231 11.0802 18.8844 10.9948C19.1457 10.9094 19.3624 10.7237 19.4868 10.4786C19.6112 10.2334 19.6331 9.94892 19.5477 9.6876C18.5061 6.49829 16.3611 4.35319 13.1718 3.31174C13.042 3.2676 12.9047 3.24967 12.7678 3.25899C12.631 3.26831 12.4974 3.30469 12.3747 3.36602C12.252 3.42736 12.1428 3.51243 12.0532 3.61631C11.9637 3.72019 11.8956 3.84081 11.853 3.97117C11.8104 4.10154 11.7941 4.23907 11.8051 4.37578C11.816 4.5125 11.854 4.64568 11.9167 4.76761C11.9795 4.88955 12.0659 4.99781 12.1708 5.08613C12.2757 5.17444 12.3972 5.24106 12.528 5.28211V5.2831ZM12.5213 4.19071C12.5354 4.14752 12.5578 4.10753 12.5873 4.07302C12.6168 4.03852 12.6529 4.01017 12.6934 3.98962C12.7338 3.96906 12.778 3.95669 12.8233 3.95322C12.8686 3.94975 12.9141 3.95524 12.9572 3.96938C15.9251 4.93779 17.9215 6.93422 18.8901 9.903C18.9185 9.99013 18.9111 10.085 18.8696 10.1667C18.8282 10.2484 18.756 10.3103 18.669 10.3389C18.5819 10.3661 18.4876 10.3581 18.4062 10.3168C18.3249 10.2755 18.2628 10.2041 18.2333 10.1178C17.3239 7.33224 15.5285 5.53601 12.742 4.62644C12.6549 4.59773 12.5827 4.53562 12.5413 4.45374C12.4999 4.37186 12.4927 4.2769 12.5213 4.18972V4.19071Z",
      "fill": "#49B7AC"
    }
  }), _c('path', {
    attrs: {
      "id": "Vector_4",
      "d": "M22.4485 8.89822C21.0811 4.7105 18.2637 1.89216 14.075 0.524943C13.9456 0.482695 13.8092 0.466348 13.6735 0.476836C13.5378 0.487324 13.4054 0.524441 13.2841 0.586068C13.1627 0.647695 13.0547 0.732626 12.9661 0.83601C12.8776 0.939394 12.8102 1.05921 12.768 1.18861C12.7257 1.31801 12.7094 1.45447 12.7199 1.59019C12.7304 1.72591 12.7675 1.85823 12.8291 1.97961C12.8907 2.10098 12.9757 2.20903 13.079 2.29758C13.1824 2.38614 13.3022 2.45346 13.4316 2.49571C17.006 3.66273 19.3106 5.96755 20.4778 9.54185C20.5631 9.80319 20.7487 10.0199 20.9938 10.1444C21.1152 10.2061 21.2475 10.2432 21.3832 10.2537C21.5189 10.2642 21.6554 10.2479 21.7848 10.2056C21.9142 10.1634 22.034 10.0961 22.1374 10.0075C22.2407 9.91899 22.3257 9.81095 22.3873 9.68959C22.449 9.56822 22.4861 9.4359 22.4966 9.30019C22.5071 9.16447 22.4907 9.02802 22.4485 8.89862V8.89822ZM21.57 9.54837C21.483 9.57522 21.389 9.56713 21.3079 9.52581C21.2268 9.48449 21.165 9.41319 21.1356 9.32705C19.8942 5.52826 17.4447 3.07872 13.646 1.83826C13.6024 1.82458 13.562 1.80239 13.527 1.77296C13.492 1.74353 13.4632 1.70745 13.4423 1.66682C13.4213 1.62618 13.4087 1.58179 13.405 1.53623C13.4014 1.49066 13.4068 1.44482 13.421 1.40137C13.4351 1.35791 13.4578 1.3177 13.4876 1.28307C13.5175 1.24844 13.5539 1.22007 13.5948 1.19961C13.6356 1.17915 13.6802 1.16701 13.7258 1.16388C13.7714 1.16076 13.8172 1.16671 13.8604 1.1814C17.8279 2.47675 20.4962 5.14485 21.7919 9.11323C21.8199 9.20025 21.8123 9.29486 21.7707 9.37628C21.7291 9.45771 21.6569 9.51931 21.57 9.54758V9.54837Z",
      "fill": "#49B7AC"
    }
  })])]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.telefoonnummer,
      expression: "formData.telefoonnummer"
    }],
    class: {
      'input-error': _vm.errors.telefoonnummer
    },
    attrs: {
      "type": "tel",
      "id": "telefoonnummer",
      "required": "",
      "placeholder": "Vul je telefoonnummer in"
    },
    domProps: {
      "value": _vm.formData.telefoonnummer
    },
    on: {
      "blur": _vm.validateTelefoonnummer,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "telefoonnummer", $event.target.value);
      }
    }
  }), _vm.errors.telefoonnummer ? _c('span', {
    staticClass: "error-message error-message-tel"
  }, [_vm._v(_vm._s(_vm.errors.telefoonnummer))]) : _vm._e()])]), _c('div', {
    staticClass: "frame-427320570"
  }, [_c('div', {
    staticClass: "frame-2-1"
  }, [_c('button', {
    staticClass: "frame-2-1 invisible-button",
    on: {
      "click": _vm.submitForm
    }
  }, [_c('div', {
    staticClass: "bevestig-mijn-deelname diodrumcyrillic-normal-white-23-7px",
    staticStyle: {
      "font-weight": "700"
    }
  }, [_vm._v("Bevestig mijn deelname")]), _c('img', {
    staticClass: "right-arrow-4",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow-4.svg",
      "alt": "rightArrow"
    }
  })])])]), _c('p', {
    staticClass: "met-het-bevestigen-v"
  }, [_vm._v(_vm._s(_vm.metHetBevestigenV))])]), _c('frame1'), _c('p', {
    staticClass: "gewonnen"
  }, [_c('span', {
    staticClass: "gefeliciteerd"
  }, [_vm._v("Gefeliciteerd!"), _c('br')]), _vm._v(" Jij maakt nu kans op de "), _c('span', {
    staticClass: "gekozen-prijs"
  }, [_vm._v(_vm._s(_vm.chosenProduct))])]), _c('img', {
    staticClass: "image-2-6",
    attrs: {
      "src": _vm.image2,
      "alt": "image 2"
    }
  }), _c('div', {
    staticClass: "group-2-6"
  }, [_c('div', {
    staticClass: "overlap-group-2"
  }, [_c('div', {
    staticClass: "twv-18"
  }, [_vm._v(_vm._s(_vm.tWV))]), _c('h1', {
    staticClass: "text-19 valign-text-bottom",
    staticStyle: {
      "font-weight": "700"
    }
  }, [_vm._v("€599,-")])])]), _c('img', {
    staticClass: "vector-1",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/vector-1.svg",
      "alt": "Vector"
    }
  }), _c('p', {
    staticClass: "jouw-gekozen-prijs"
  }, [_vm._v("Jouw gekozen prijs:")]), _c('div', {
    staticClass: "playstation-5-slim-disk"
  }, [_vm._v("Playstation 5 Slim Disk")]), _c('frame1000004784', {
    attrs: {
      "group": _vm.frame1000004784Props.group,
      "group116046944Props": _vm.frame1000004784Props.group116046944Props
    }
  })], 1), _c('img', {
    staticClass: "line-2-6",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg",
      "alt": "Line 2"
    }
  }), _c('p', {
    staticClass: "meervoordeelnl-is-6 diodrumcyrillic-regular-normal-silver-16px",
    domProps: {
      "innerHTML": _vm._s(_vm.meervoordeelNlIs)
    }
  })])]), _c('div', {
    staticClass: "container-mobiel container-mobiel-pagina-5"
  }, [_c('div', {
    staticClass: "navbar-mobiel"
  }, [_c('img', {
    staticClass: "logo-navbar-mobiel logo-navbar-mobiel-mv",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg",
      "alt": "MV logo 1"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png",
      "alt": "logo ziggo"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": __webpack_require__("a111"),
      "alt": ""
    }
  })]), _c('div', {
    staticClass: "achtergrond-pagina-5",
    style: _vm.errorMessage ? {
      height: '77rem'
    } : {}
  }, [_c('div', {
    staticClass: "witte-container-pagina-5"
  }, [_c('p', {
    staticClass: "gewonnen-mobiel"
  }, [_c('span', {
    staticClass: "gefeliciteerd-mobiel"
  }, [_vm._v("Gefeliciteerd!"), _c('br')]), _vm._v(" "), _c('span', {
    staticClass: "blauw-mobiel"
  }, [_vm._v("Jij maakt nu kans op de ")]), _c('span', {
    staticClass: "gefeliciteerd-mobiel"
  }, [_vm._v(_vm._s(_vm.chosenProduct))])]), _c('hr', {
    staticClass: "lijn-2"
  }), _c('p', {
    staticClass: "hoe-kunnen-wij-jou-bereiken-mobiel"
  }, [_vm._v("Hoe kunnen wij jou bereiken?")]), _c('form', {
    staticClass: "form-pagina5",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "form-group-mobiel full-width"
  }, [_c('label', {
    attrs: {
      "for": "voornaam"
    }
  }), _c('img', {
    staticClass: "form-icoon-mobiel",
    class: {
      'input-error-icoon-mobiel': _vm.errors.voornaam || _vm.errors.achternaam
    },
    attrs: {
      "src": __webpack_require__("03c5"),
      "alt": "Naam Icon"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.voornaam,
      expression: "formData.voornaam"
    }],
    class: {
      'input-error-mobiel': _vm.errors.voornaam
    },
    attrs: {
      "type": "text",
      "id": "voornaam",
      "required": "",
      "placeholder": "Vul je voornaam in"
    },
    domProps: {
      "value": _vm.formData.voornaam
    },
    on: {
      "blur": _vm.validateVoornaam,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "voornaam", $event.target.value);
      }
    }
  }), _vm.errors.voornaam ? _c('span', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.voornaam))]) : _vm._e()]), _c('div', {
    staticClass: "form-group-mobiel full-width"
  }, [_c('label', {
    attrs: {
      "for": "achternaam"
    }
  }), _c('img', {
    staticClass: "form-icoon-mobiel",
    class: {
      'input-error-icoon-mobiel': _vm.errors.voornaam || _vm.errors.achternaam
    },
    attrs: {
      "src": __webpack_require__("03c5"),
      "alt": "Achternaam Icon"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.achternaam,
      expression: "formData.achternaam"
    }],
    class: {
      'input-error-mobiel': _vm.errors.achternaam
    },
    attrs: {
      "type": "text",
      "id": "achternaam",
      "required": "",
      "placeholder": "Vul je achternaam in"
    },
    domProps: {
      "value": _vm.formData.achternaam
    },
    on: {
      "blur": _vm.validateAchternaam,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "achternaam", $event.target.value);
      }
    }
  }), _vm.errors.achternaam ? _c('span', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.achternaam))]) : _vm._e()]), _c('div', {
    staticClass: "form-group-mobiel full-width"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }), _c('img', {
    staticClass: "form-icoon-2-mobiel",
    class: {
      'input-error-icoon-mobiel': _vm.errors.email
    },
    attrs: {
      "src": __webpack_require__("349e"),
      "alt": "Email Icon"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.email,
      expression: "formData.email"
    }],
    class: {
      'input-error-mobiel': _vm.errors.email
    },
    attrs: {
      "type": "email",
      "id": "email",
      "required": "",
      "placeholder": "Vul je e-mailadres in"
    },
    domProps: {
      "value": _vm.formData.email
    },
    on: {
      "blur": _vm.validateEmail,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "email", $event.target.value);
      }
    }
  }), _vm.errors.email ? _c('span', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.email))]) : _vm._e()]), _c('div', {
    staticClass: "form-group-mobiel full-width"
  }, [_c('label', {
    attrs: {
      "for": "telefoonnummer"
    }
  }), _c('img', {
    staticClass: "form-icoon-2-mobiel",
    class: {
      'input-error-icoon-mobiel': _vm.errors.telefoonnummer
    },
    attrs: {
      "src": __webpack_require__("9d82"),
      "alt": "Telefoonnummer Icon"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.telefoonnummer,
      expression: "formData.telefoonnummer"
    }],
    class: {
      'input-error-mobiel': _vm.errors.telefoonnummer
    },
    attrs: {
      "type": "tel",
      "id": "telefoonnummer",
      "required": "",
      "placeholder": "Vul je telefoonnummer in"
    },
    domProps: {
      "value": _vm.formData.telefoonnummer
    },
    on: {
      "blur": _vm.validateTelefoonnummer,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "telefoonnummer", $event.target.value);
      }
    }
  }), _vm.errors.telefoonnummer ? _c('span', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.telefoonnummer))]) : _vm._e()])]), _c('button', {
    staticClass: "frame-2-1-mobiel",
    staticStyle: {
      "border": "none"
    },
    on: {
      "click": _vm.submitForm
    }
  }, [_c('div', {
    staticClass: "bevestig-mijn-deelname diodrumcyrillic-normal-white-23-7px",
    staticStyle: {
      "font-weight": "700",
      "font-size": "22px"
    }
  }, [_vm._v("Bevestig deelname")]), _c('span', {
    staticStyle: {
      "color": "white",
      "font-size": "22px",
      "position": "relative",
      "right": "6px"
    }
  }, [_vm._v("→")])]), _c('p', {
    staticClass: "met-het-bevestigen-v-mobiel"
  }, [_vm._v("Met het bevestigen van je deelname ga je er mee akkoord dat MeerVoordeel eenmalig telefonisch contact met je opneemt met een aanbieding voor een all-in abonnement van Ziggo.")]), _c('div', {
    staticClass: "container-afbeelding-prijzen-mobiel-5"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("80a2"),
      "alt": ""
    }
  }), _c('svg', {
    staticClass: "blauwe-bal-mobiel-1",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "63.973",
      "cy": "63.973",
      "r": "63.2691",
      "transform": "rotate(4.4359 63.973 63.973)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("€699,-")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-2",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "105",
      "height": "105",
      "viewBox": "0 0 105 105",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "52.7158",
      "cy": "52.7158",
      "r": "52.0939",
      "transform": "rotate(-6.575 52.7158 52.7158)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "0.85856rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "57%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.5rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v(" €400,- ")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-3",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "64.0511",
      "cy": "64.0511",
      "r": "63.2691",
      "transform": "rotate(-12.012 64.0511 64.0511)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v(" €599,- ")])])])]), _c('div', {
    staticClass: "container-footer-5"
  }, [_c('hr', {
    staticClass: "lijn",
    staticStyle: {
      "margin-top": "3rem"
    }
  }), _c('div', {
    staticClass: "footer-pagina1"
  }, [_c('p', {
    staticClass: "text-footer-pagina1"
  }, [_vm._v("*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024. Actievoorwaarden van toepassing.")])])])])])])]);
};
var Pagina5vue_type_template_id_8522eccc_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina5.vue?vue&type=template&id=8522eccc

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__("b7ef");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina5.vue?vue&type=script&lang=js





/* harmony default export */ var Pagina5vue_type_script_lang_js = ({
  name: "Pagina5",
  components: {
    Frame1: Frame1,
    Frame1000004784: Frame1000004784
  },
  props: ["hoeKunnenWijJouBereiken", "layer21", "layer22", "layer23", "group", "bevestigMijnDeelname", "metHetBevestigenV", "gefeliciteerdJijMaaktNuKansOpDeGeko", "image2", "tWV", "text19", "jouwGekozenPrijs", "playstation5SlimDisk", "meervoordeelNlIs", "frame1000004784Props"],
  data() {
    return {
      voornaam: '',
      achternaam: '',
      email: '',
      telefoonnummer: '',
      chosenProduct: '',
      gekozenProductId: null,
      gekozenMerkId: null,
      errors: {},
      successMessage: '',
      errorMessage: '',
      formData: {
        voornaam: '',
        achternaam: '',
        email: '',
        telefoonnummer: ''
      },
      twoHoursLater: new Date(Date.now() + 7200000) // Voeg dit toe
    };
  },
  computed: {
    ...Object(vuex_esm["b" /* mapGetters */])(['getAntwoorden']),
    heeftNaamFout() {
      return this.errors.voornaam || this.errors.achternaam;
    }
  },
  mounted() {
    const antwoordenLijst = this.getAntwoorden;
    const gekozenProduct = antwoordenLijst.antwoord1;
    const gekozenMerk = antwoordenLijst.antwoord2;
    this.gekozenProductId = this.getProductId(gekozenProduct);
    this.gekozenMerkId = this.getMerkId(gekozenMerk);
    this.chosenProduct = gekozenProduct || 'geen product gekozen';
    this.twoHoursLater = new Date(Date.now() + 7200000);
  },
  methods: {
    async submitForm() {
      this.errors = {}; // Reset errors
      this.successMessage = '';
      this.errorMessage = '';

      // Validaties voor alle velden
      const isVoornaamValid = this.validateVoornaam();
      const isAchternaamValid = this.validateAchternaam();
      const isEmailValid = this.validateEmail();
      const isTelefoonnummerValid = this.validateTelefoonnummer();

      // Als één van de validaties fout is, tonen we alle foutmeldingen
      if (!isVoornaamValid || !isAchternaamValid || !isEmailValid || !isTelefoonnummerValid) {
        return; // Als er fouten zijn, stoppen we met het verzenden van het formulier
      }
      const antwoordenLijst = this.getAntwoorden;
      if (!antwoordenLijst || !antwoordenLijst.antwoord1 || !antwoordenLijst.antwoord2) {
        console.error('Onvoldoende antwoorden om te verwerken.');
        return;
      }
      const gekozenProductId = this.getProductId(antwoordenLijst.antwoord1);
      const gekozenMerkId = this.getMerkId(antwoordenLijst.antwoord2);
      if (!gekozenProductId || !gekozenMerkId) {
        console.error('Kon geen geldige ID\'s vinden voor het product of merk.');
        return;
      }
      const url = 'https://leadgen.republish.nl/api/sponsors/2410/leads';
      const username = '199';
      const password = 'b41c7c41c8d595fbd66dea6a4f70836fbc5e3afe';
      const authHeader = 'Basic ' + btoa(`${username}:${password}`);
      const data = {
        language: 'nl_NL',
        publisher_id: 'morris de publisher :)',
        site_custom_url: 'https://ziggoprijswinnnen.nl',
        site_custom_name: 'ziggo prijs winnen',
        ip: '123.45.67.89',
        optin_timestamp: this.twoHoursLater.toISOString().slice(0, 19).replace('T', ' '),
        firstname: this.formData.voornaam,
        lastname: this.formData.achternaam,
        email: this.formData.email,
        phone_number: this.formData.telefoonnummer,
        answers: [5269, gekozenProductId, gekozenMerkId]
      };
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(data)
        });
        if (response.status === 201) {
          this.$router.push('/bedankt2');
        } else {
          this.$router.push('/bedankt');
        }
      } catch (error) {
        console.error('Er is een fout opgetreden bij het versturen van het formulier', error);
        if (error.response && error.response.status === 409) {
          console.log('Duplicaat e-mailadres gedetecteerd.');
          this.$router.push('/bedankt');
        } else {
          this.errorMessage = 'Netwerk- of serverfout: ' + error.message;
        }
      }
    },
    validateVoornaam() {
      const regex = /^[a-zA-Z\s.,'-]{1,}$/;
      if (!this.formData.voornaam.match(regex)) {
        this.errors.voornaam = 'Ongeldige voornaam.';
        return false;
      }
      this.errors.voornaam = '';
      return true;
    },
    validateAchternaam() {
      const regex = /^[a-zA-Z\s.,'-]{1,}$/;
      if (!this.formData.achternaam.match(regex)) {
        this.errors.achternaam = 'Ongeldige achternaam.';
        return false;
      }
      this.errors.achternaam = '';
      return true;
    },
    validateEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.(com|org|net|edu|gov|nl|info|biz|co|io|me|tv)$/i;
      const containsApostrophe = /'/;
      if (!this.formData.email.match(regex) || this.formData.email.match(containsApostrophe)) {
        this.errors.email = 'Ongeldig e-mailadres.';
        return false;
      }
      this.errors.email = '';
      return true;
    },
    validateAndFormatPhoneNumber(phoneNumber) {
      phoneNumber = phoneNumber.replace(/[^0-9+]/g, '');
      const dutchRegex = /^(06[0-9]{8}|[+]{0,1}31[0]?[0-9]{9,10}|0031[0]?[0-9]{9,10})$/;
      if (!phoneNumber.match(dutchRegex)) {
        return null;
      }
      return phoneNumber;
    },
    validateTelefoonnummer() {
      const phoneNumber = this.validateAndFormatPhoneNumber(this.formData.telefoonnummer);
      if (!phoneNumber) {
        this.errors.telefoonnummer = 'Ongeldig telefoonnummer.';
        return false;
      }
      this.errors.telefoonnummer = '';
      return true;
    },
    getProductId(product) {
      const productMap = {
        'SAMSUNG 60" TV': 5284,
        'Playstation 5 Slim Disk': 5287,
        'Bol.com cadeaubon': 5290
      };
      return productMap[product] || null;
    },
    getMerkId(merk) {
      const merkMap = {
        'Odido': 5272,
        'KPN': 5275,
        'Ziggo': 5278,
        'Anders': 5281
      };
      return merkMap[merk] || null;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Pagina5.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina5vue_type_script_lang_js = (Pagina5vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina5.vue?vue&type=style&index=0&id=8522eccc&prod&lang=sass
var Pagina5vue_type_style_index_0_id_8522eccc_prod_lang_sass = __webpack_require__("bf38");

// CONCATENATED MODULE: ./src/components/Pagina5.vue






/* normalize component */

var Pagina5_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina5vue_type_script_lang_js,
  Pagina5vue_type_template_id_8522eccc_render,
  Pagina5vue_type_template_id_8522eccc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina5 = (Pagina5_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina6.vue?vue&type=template&id=d12a8bf8
var Pagina6vue_type_template_id_d12a8bf8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('center', [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "pagina-6 screen"
  }, [_c('div', {
    staticClass: "overlap-group3-2"
  }, [_c('div', {
    staticClass: "rectangle-30-2"
  }), _c('img', {
    staticClass: "samsung-1-2",
    attrs: {
      "src": _vm.samsung1,
      "alt": "Samsung 1"
    }
  }), _c('div', {
    staticClass: "background-2"
  }), _c('frame1'), _c('p', {
    staticClass: "jouw-postcode-pagina6"
  }, [_vm._v("Jouw postcode is goedgekeurd!")]), _c('img', {
    staticClass: "bolcom-bon-1-2",
    attrs: {
      "src": _vm.bolcomBon1,
      "alt": "bolcom-bon 1"
    }
  }), _c('img', {
    staticClass: "image-2-2",
    attrs: {
      "src": _vm.image2,
      "alt": "image 2"
    }
  }), _c('div', {
    class: ['group-1', _vm.group11Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€400,-")])])]), _c('div', {
    class: ['group-1', _vm.group12Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€599,-")])])]), _c('div', {
    class: ['group-1', _vm.group13Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€699,-")])])]), _c('img', {
    staticClass: "defaultoutlinetick-circle",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/default-outline-tick-circle.svg",
      "alt": "default/outline/tick-circle"
    }
  }), _c('frame1000004784', {
    attrs: {
      "group": _vm.frame1000004784Props.group,
      "className": _vm.frame1000004784Props.className,
      "group116046944Props": _vm.frame1000004784Props.group116046944Props
    }
  })], 1), _c('img', {
    staticClass: "line-2-2",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg",
      "alt": "Line 2"
    }
  }), _c('p', {
    staticClass: "meervoordeelnl-is-2 diodrumcyrillic-regular-normal-silver-16px",
    domProps: {
      "innerHTML": _vm._s(_vm.meervoordeelNlIs)
    }
  })])]), _c('div', {
    staticClass: "container-mobiel"
  }, [_c('div', {
    staticClass: "navbar-mobiel"
  }, [_c('img', {
    staticClass: "logo-navbar-mobiel logo-navbar-mobiel-mv",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg",
      "alt": "MV logo 1"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png",
      "alt": "logo ziggo"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": __webpack_require__("a111"),
      "alt": ""
    }
  })]), _c('div', {
    staticClass: "achtergrond-pagina-6"
  }, [_c('div', {
    staticClass: "witte-container-pagina-6"
  }, [_c('div', {
    staticClass: "postcode-goedgekeurd"
  }, [_vm._v(" Jouw postcode is goedgekeurd! ")]), _c('div', {
    staticClass: "icoon-pagina-6"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("dc98"),
      "alt": ""
    }
  })])]), _c('div', {
    staticClass: "container-afbeelding-prijzen-mobiel-6"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("80a2"),
      "alt": ""
    }
  }), _c('svg', {
    staticClass: "blauwe-bal-mobiel-1",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "63.973",
      "cy": "63.973",
      "r": "63.2691",
      "transform": "rotate(4.4359 63.973 63.973)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("€699,-")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-2",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "105",
      "height": "105",
      "viewBox": "0 0 105 105",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "52.7158",
      "cy": "52.7158",
      "r": "52.0939",
      "transform": "rotate(-6.575 52.7158 52.7158)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "0.85856rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "57%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.5rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v(" €400,- ")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-3",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "64.0511",
      "cy": "64.0511",
      "r": "63.2691",
      "transform": "rotate(-12.012 64.0511 64.0511)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v(" €599,- ")])])])]), _c('hr', {
    staticClass: "lijn",
    staticStyle: {
      "margin-top": "3rem"
    }
  }), _c('div', {
    staticClass: "footer-pagina1"
  }, [_c('p', {
    staticClass: "text-footer-pagina1"
  }, [_vm._v("*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024. Actievoorwaarden van toepassing.")])])])])]);
};
var Pagina6vue_type_template_id_d12a8bf8_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina6.vue?vue&type=template&id=d12a8bf8

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina6.vue?vue&type=script&lang=js





/* harmony default export */ var Pagina6vue_type_script_lang_js = ({
  name: "Pagina6",
  components: {
    Frame1: Frame1,
    Group1: Group1,
    Frame1000004784: Frame1000004784
  },
  props: ["samsung1", "jouwPostcodeIsGoedgekeurd", "bolcomBon1", "image2", "meervoordeelNlIs", "group11Props", "group12Props", "group13Props", "frame1000004784Props"],
  data() {
    return {
      chosenProduct: ''
    };
  },
  mounted() {
    const antwoordenLijst = /* Cannot get final name for export "getAntwoorden" in "./src/Store.js" (known exports: default, known reexports: ) */ undefined();
    // Toewijzen van het laatste antwoord aan chosenProduct
    this.chosenProduct = antwoordenLijst[antwoordenLijst.length - 2] || 'geen basta gekozen';
    console.log('Gekozen product:', this.chosenProduct);
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/pagina-5");
    }, 1500);
  }
});
// CONCATENATED MODULE: ./src/components/Pagina6.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina6vue_type_script_lang_js = (Pagina6vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina6.vue?vue&type=style&index=0&id=d12a8bf8&prod&lang=sass
var Pagina6vue_type_style_index_0_id_d12a8bf8_prod_lang_sass = __webpack_require__("3da9");

// CONCATENATED MODULE: ./src/components/Pagina6.vue






/* normalize component */

var Pagina6_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina6vue_type_script_lang_js,
  Pagina6vue_type_template_id_d12a8bf8_render,
  Pagina6vue_type_template_id_d12a8bf8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina6 = (Pagina6_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bedankt.vue?vue&type=template&id=236a4e88
var bedanktvue_type_template_id_236a4e88_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('center', [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "pagina-3 screen"
  }, [_c('div', {
    staticClass: "overlap-group3-4"
  }, [_c('div', {
    staticClass: "rectangle-30-4"
  }), _c('img', {
    staticClass: "samsung-1-4",
    attrs: {
      "src": _vm.samsung1,
      "alt": "Samsung 1"
    }
  }), _c('div', {
    staticClass: "background-4"
  }), _c('frame1'), _c('div', {
    staticClass: "frame-427320545-2"
  }, [_c('div', {
    staticClass: "bedankt-container"
  }, [_c('p', {
    staticClass: "bedankt"
  }, [_vm._v("Bedankt!")])]), _c('div', {
    staticClass: "bedankt-text-container"
  }, [_c('p', {
    staticClass: "bedankt-text"
  }, [_vm._v("Gezellig dat je je hebt aangemeld voor een mooie prijs!")])])]), _c('img', {
    staticClass: "bolcom-bon-1-4",
    attrs: {
      "src": _vm.bolcomBon1,
      "alt": "bolcom-bon 1"
    }
  }), _c('img', {
    staticClass: "image-2-4",
    attrs: {
      "src": _vm.image2,
      "alt": "image 2"
    }
  }), _vm.postcodeError ? _c('p', {
    staticClass: "error-message-pagina-3"
  }, [_vm._v(_vm._s(_vm.postcodeError))]) : _vm._e(), _c('div', {
    class: ['group-1', _vm.group11Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€400,-")])])]), _c('div', {
    class: ['group-1', _vm.group12Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€599,-")])])]), _c('div', {
    class: ['group-1', _vm.group13Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€699,-")])])]), _vm._v("2 "), _c('frame1000004784', {
    attrs: {
      "group": _vm.frame1000004784Props.group,
      "group116046944Props": _vm.frame1000004784Props.group116046944Props
    }
  })], 1), _c('img', {
    staticClass: "line-2-4",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg",
      "alt": "Line 2"
    }
  }), _c('p', {
    staticClass: "meervoordeelnl-is-4 diodrumcyrillic-regular-normal-silver-16px",
    domProps: {
      "innerHTML": _vm._s(_vm.meervoordeelNlIs)
    }
  })])]), _c('div', {
    staticClass: "container-mobiel5"
  }, [_c('div', {
    staticClass: "navbar-mobiel"
  }, [_c('img', {
    staticClass: "logo-navbar-mobiel logo-navbar-mobiel-mv",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg",
      "alt": "MV logo 1"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png",
      "alt": "logo ziggo"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": __webpack_require__("a111"),
      "alt": ""
    }
  })]), _c('div', {
    staticClass: "achtergrond-pagina-3"
  }, [_c('div', {
    staticClass: "witte-container-pagina-3"
  }, [_c('div', {
    staticClass: "bedankt-container"
  }, [_c('p', {
    staticClass: "bedankt-mobiel"
  }, [_vm._v("Bedankt!")])]), _c('div', {
    staticClass: "bedankt-text-container"
  }, [_c('p', {
    staticClass: "bedankt-text-mobiel"
  }, [_vm._v("Gezellig dat je je hebt aangemeld voor een mooie prijs!")])])]), _c('div', {
    staticClass: "container-afbeelding-prijzen-mobiel-3"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("80a2"),
      "alt": ""
    }
  }), _c('svg', {
    staticClass: "blauwe-bal-mobiel-1",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "63.973",
      "cy": "63.973",
      "r": "63.2691",
      "transform": "rotate(4.4359 63.973 63.973)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("€699,-")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-2",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "105",
      "height": "105",
      "viewBox": "0 0 105 105",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "52.7158",
      "cy": "52.7158",
      "r": "52.0939",
      "transform": "rotate(-6.575 52.7158 52.7158)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "0.85856rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "57%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.5rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v(" €400,- ")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-3",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "64.0511",
      "cy": "64.0511",
      "r": "63.2691",
      "transform": "rotate(-12.012 64.0511 64.0511)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v(" €599,- ")])])])]), _c('hr', {
    staticClass: "lijn",
    staticStyle: {
      "margin-top": "3rem"
    }
  }), _c('div', {
    staticClass: "footer-pagina1"
  }, [_c('p', {
    staticClass: "text-footer-pagina1"
  }, [_vm._v("*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024. Actievoorwaarden van toepassing.")])])])])]);
};
var bedanktvue_type_template_id_236a4e88_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/bedankt.vue?vue&type=template&id=236a4e88

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bedankt.vue?vue&type=script&lang=js




/* harmony default export */ var bedanktvue_type_script_lang_js = ({
  name: "bedankt",
  components: {
    Frame1: Frame1,
    Group1: Group1,
    Frame1000004784: Frame1000004784
  },
  props: ["samsung1", "stap3Van3", "vulJePostcodeInEnCheckOfJeKansMaakt", "bolcomBon1", "image2", "x2000Ab", "checkMijnPostcode", "meervoordeelNlIs", "group11Props", "group12Props", "group13Props", "frame1000004784Props"],
  data() {
    return {
      chosenProduct: '',
      postcodeError: ''
    };
  }
});
// CONCATENATED MODULE: ./src/components/bedankt.vue?vue&type=script&lang=js
 /* harmony default export */ var components_bedanktvue_type_script_lang_js = (bedanktvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/bedankt.vue?vue&type=style&index=0&id=236a4e88&prod&lang=sass
var bedanktvue_type_style_index_0_id_236a4e88_prod_lang_sass = __webpack_require__("1359");

// CONCATENATED MODULE: ./src/components/bedankt.vue






/* normalize component */

var bedankt_component = Object(componentNormalizer["a" /* default */])(
  components_bedanktvue_type_script_lang_js,
  bedanktvue_type_template_id_236a4e88_render,
  bedanktvue_type_template_id_236a4e88_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var bedankt = (bedankt_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bedankt-img.vue?vue&type=template&id=c6b87208
var bedankt_imgvue_type_template_id_c6b87208_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('center', [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "pagina-3 screen"
  }, [_c('div', {
    staticClass: "overlap-group3-4"
  }, [_c('div', {
    staticClass: "rectangle-30-4"
  }), _c('img', {
    staticClass: "samsung-1-4",
    attrs: {
      "src": _vm.samsung1,
      "alt": "Samsung 1"
    }
  }), _c('div', {
    staticClass: "background-4"
  }), _c('frame1'), _c('div', {
    staticClass: "frame-427320545-2"
  }, [_c('div', {
    staticClass: "bedankt-container"
  }, [_c('p', {
    staticClass: "bedankt"
  }, [_vm._v("Bedankt!")])]), _c('div', {
    staticClass: "bedankt-text-container"
  }, [_c('p', {
    staticClass: "bedankt-text"
  }, [_vm._v("Gezellig dat je je hebt aangemeld voor een mooie prijs!")])])]), _c('img', {
    staticClass: "bolcom-bon-1-4",
    attrs: {
      "src": _vm.bolcomBon1,
      "alt": "bolcom-bon 1"
    }
  }), _c('img', {
    staticClass: "image-2-4",
    attrs: {
      "src": _vm.image2,
      "alt": "image 2"
    }
  }), _vm.postcodeError ? _c('p', {
    staticClass: "error-message-pagina-3"
  }, [_vm._v(_vm._s(_vm.postcodeError))]) : _vm._e(), _c('img', {
    staticStyle: {
      "width": "1px",
      "height": "1px",
      "border": "0px"
    },
    attrs: {
      "referrerpolicy": "no-referrer-when-downgrade",
      "src": _vm.pixelUrl,
      "alt": "tracking-pixel"
    }
  }), _c('div', {
    class: ['group-1', _vm.group11Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€400,-")])])]), _c('div', {
    class: ['group-1', _vm.group12Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€599,-")])])]), _c('div', {
    class: ['group-1', _vm.group13Props.className]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v("€699,-")])])]), _vm._v("2 "), _c('frame1000004784', {
    attrs: {
      "group": _vm.frame1000004784Props.group,
      "group116046944Props": _vm.frame1000004784Props.group116046944Props
    }
  })], 1), _c('img', {
    staticClass: "line-2-4",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg",
      "alt": "Line 2"
    }
  }), _c('p', {
    staticClass: "meervoordeelnl-is-4 diodrumcyrillic-regular-normal-silver-16px",
    domProps: {
      "innerHTML": _vm._s(_vm.meervoordeelNlIs)
    }
  })])]), _c('div', {
    staticClass: "container-mobiel5"
  }, [_c('div', {
    staticClass: "navbar-mobiel"
  }, [_c('img', {
    staticClass: "logo-navbar-mobiel logo-navbar-mobiel-mv",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg",
      "alt": "MV logo 1"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png",
      "alt": "logo ziggo"
    }
  }), _c('img', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "src": __webpack_require__("a111"),
      "alt": ""
    }
  })]), _c('div', {
    staticClass: "achtergrond-pagina-3"
  }, [_c('div', {
    staticClass: "witte-container-pagina-3"
  }, [_c('div', {
    staticClass: "bedankt-container"
  }, [_c('p', {
    staticClass: "bedankt-mobiel"
  }, [_vm._v("Bedankt!")])]), _c('div', {
    staticClass: "bedankt-text-container"
  }, [_c('p', {
    staticClass: "bedankt-text-mobiel"
  }, [_vm._v("Gezellig dat je je hebt aangemeld voor een mooie prijs!")])])]), _c('div', {
    staticClass: "container-afbeelding-prijzen-mobiel-3"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("80a2"),
      "alt": ""
    }
  }), _c('svg', {
    staticClass: "blauwe-bal-mobiel-1",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "63.973",
      "cy": "63.973",
      "r": "63.2691",
      "transform": "rotate(4.4359 63.973 63.973)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(4.436 64 64)"
    }
  }, [_vm._v("€699,-")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-2",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "105",
      "height": "105",
      "viewBox": "0 0 105 105",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "52.7158",
      "cy": "52.7158",
      "r": "52.0939",
      "transform": "rotate(-6.575 52.7158 52.7158)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "0.85856rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "57%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.5rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-6.575 52.7158 52.7158)"
    }
  }, [_vm._v(" €400,- ")])]), _c('svg', {
    staticClass: "blauwe-bal-mobiel-3",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "128",
      "height": "128",
      "viewBox": "0 0 128 128",
      "fill": "none"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "64.0511",
      "cy": "64.0511",
      "r": "63.2691",
      "transform": "rotate(-12.012 64.0511 64.0511)",
      "fill": "#49B7AC"
    }
  }), _c('text', {
    attrs: {
      "x": "50%",
      "y": "36%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.04275rem",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v("t.w.v")]), _c('text', {
    attrs: {
      "x": "50%",
      "y": "55%",
      "text-anchor": "middle",
      "dy": "0.3em",
      "fill": "#FFF",
      "font-family": "DM Sans",
      "font-size": "1.88506rem",
      "font-style": "normal",
      "font-weight": "700",
      "line-height": "normal",
      "transform": "rotate(-12.012 64.0511 64.0511)"
    }
  }, [_vm._v(" €599,- ")])])])]), _c('hr', {
    staticClass: "lijn",
    staticStyle: {
      "margin-top": "3rem"
    }
  }), _c('div', {
    staticClass: "footer-pagina1"
  }, [_c('p', {
    staticClass: "text-footer-pagina1"
  }, [_vm._v("*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024. Actievoorwaarden van toepassing.")])])])])]);
};
var bedankt_imgvue_type_template_id_c6b87208_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/bedankt-img.vue?vue&type=template&id=c6b87208

// EXTERNAL MODULE: ./node_modules/uuid/index.js
var uuid = __webpack_require__("11c1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bedankt-img.vue?vue&type=script&lang=js




/* harmony default export */ var bedankt_imgvue_type_script_lang_js = ({
  name: "bedanktimage",
  components: {
    Frame1: Frame1,
    Group1: Group1,
    Frame1000004784: Frame1000004784
  },
  props: ["samsung1", "stap3Van3", "vulJePostcodeInEnCheckOfJeKansMaakt", "bolcomBon1", "image2", "x2000Ab", "checkMijnPostcode", "meervoordeelNlIs", "group11Props", "group12Props", "group13Props", "frame1000004784Props"],
  data() {
    return {
      chosenProduct: '',
      postcodeError: '',
      uniqueConversionId: Object(uuid["v4"])()
    };
  },
  computed: {
    pixelUrl() {
      return `https://republish.prijzenpakket.nl/m/6337/9d85475ce4f0/?event=7417&unique_conversion_id=${this.uniqueConversionId}`;
    }
  }
});
// CONCATENATED MODULE: ./src/components/bedankt-img.vue?vue&type=script&lang=js
 /* harmony default export */ var components_bedankt_imgvue_type_script_lang_js = (bedankt_imgvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/bedankt-img.vue?vue&type=style&index=0&id=c6b87208&prod&lang=sass
var bedankt_imgvue_type_style_index_0_id_c6b87208_prod_lang_sass = __webpack_require__("36e9");

// CONCATENATED MODULE: ./src/components/bedankt-img.vue






/* normalize component */

var bedankt_img_component = Object(componentNormalizer["a" /* default */])(
  components_bedankt_imgvue_type_script_lang_js,
  bedankt_imgvue_type_template_id_c6b87208_render,
  bedankt_imgvue_type_template_id_c6b87208_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var bedankt_img = (bedankt_img_component.exports);
// CONCATENATED MODULE: ./src/data.js
const group11Data = {
  text1: "€400,-"
};
const group12Data = {
  text1: "€549,-",
  className: "group-2"
};
const group41Data = {
  src: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/2-.png"
};
const group42Data = {
  src: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/3-.png",
  className: "group-4-1"
};
const group1160469445Data = {
  className: "group-116046948"
};
const frame10000047841Data = {
  group: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/group-4@2x.png",
  group116046944Props: group1160469445Data
};
const landingspaginaData = {
  samsung1: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/samsung-1.png",
  maakKansOp1VanDe3Prijzen: "Maak kans op<br />1 van de 3 prijzen!",
  meervoordeelGeeftInSamenwerkingMetZ: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/meervoordeel-geeft-in-samenwerking-met-ziggo-prijzen-weg-.png",
  bolcomBon1: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/bolcom-bon-1@2x.png",
  image2: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-2.png",
  doeNuMee: "Doe nu mee",
  tWV: "t.w.v.",
  text12: "€699,-",
  hoeWerktHet: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/hoe-werkt-het-.png",
  x1: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/1-.png",
  kiesJouwPrijs: "Kies jouw prijs",
  beantwoordDeVraag: "Beantwoord de vraag",
  controleerOfJouwP: "Controleer of jouw postcode in aanmerking komt",
  meerOverMeervoordeel: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/meer-over-meervoordeel.png",
  image7: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png",
  spanText2: "",
  image8: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-8.png",
  meervoordeelNlIs: "*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.<br />Actievoorwaarden van toepassing.",
  group11Props: group11Data,
  group12Props: group12Data,
  group41Props: group41Data,
  group42Props: group42Data,
  frame1000004784Props: frame10000047841Data
};
const group13Data = {
  text1: "€400,-",
  className: "group-1-1"
};
const group14Data = {
  text1: "€549,-",
  className: "group-2-1"
};
const group15Data = {
  text1: "€699,-",
  className: "group-3-1"
};
const group11604694410Data = {
  className: "group-116046948-1"
};
const frame10000047842Data = {
  group: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/group-4@2x.png",
  group116046944Props: group11604694410Data
};
const pagina1Data = {
  samsung1: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/samsung-1.png",
  stap1Van3: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/stap-1-van-3.png",
  vertelOnsWelkePrijsJeWiltWinnen: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/vertel-ons-welke-prijs-je-wilt-winnen-.png",
  bolcomBon1: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/bolcom-bon-1@2x.png",
  image2: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-2.png",
  group1: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/group-1.png",
  samsung60TvTWV699: 'SAMSUNG 60" TV t.w.v. €699,-',
  group2: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/group-1.png",
  playstation5SlimDiskTWV549: "Playstation 5 Slim Disk t.w.v. €549",
  group3: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/group-1.png",
  spanText: "Bol.com cadeaubon t.w.v. €400,-",
  gaNaarStap2: "Ga naar stap 2",
  meervoordeelNlIs: "*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.<br />Actievoorwaarden van toepassing.",
  group11Props: group13Data,
  group12Props: group14Data,
  group13Props: group15Data,
  frame1000004784Props: frame10000047842Data
};
const group16Data = {
  text1: "€400,-",
  className: "group-1-2"
};
const group17Data = {
  text1: "€549,-",
  className: "group-2-2"
};
const group18Data = {
  text1: "€699,-",
  className: "group-3-2"
};
const group11604694415Data = {
  className: "group-116046948-2"
};
const frame10000047843Data = {
  group: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/group@2x.png",
  className: "frame-1000004784-2",
  group116046944Props: group11604694415Data
};
const pagina6Data = {
  samsung1: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/samsung-1.png",
  jouwPostcodeIsGoedgekeurd: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/jouw-postcode-is-goedgekeurd-.png",
  bolcomBon1: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/bolcom-bon-1@2x.png",
  image2: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-2.png",
  meervoordeelNlIs: "*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.<br />Actievoorwaarden van toepassing.",
  group11Props: group16Data,
  group12Props: group17Data,
  group13Props: group18Data,
  frame1000004784Props: frame10000047843Data
};
const group19Data = {
  text1: "€400,-",
  className: "group-1-3"
};
const group110Data = {
  text1: "€549,-",
  className: "group-2-3"
};
const group111Data = {
  text1: "€699,-",
  className: "group-3-3"
};
const group11604694420Data = {
  className: "group-116046948-3"
};
const frame10000047844Data = {
  group: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/group-6@2x.png",
  group116046944Props: group11604694420Data
};
const pagina2Data = {
  samsung1: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/samsung-1.png",
  stap2Van3: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/stap-2-van-3.png",
  watIsJouwHuidigeProvider: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/wat-is-jouw-huidige-provider-.png",
  bolcomBon1: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/bolcom-bon-1@2x.png",
  image2: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-2.png",
  gaNaarDeLaatsteStap: "Ga naar de laatste stap",
  ziggo: "Ziggo",
  anders: "Anders",
  odido: "Odido",
  group: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/group-5@2x.png",
  kpn: "KPN",
  meervoordeelNlIs: "*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.<br />Actievoorwaarden van toepassing.",
  group11Props: group19Data,
  group12Props: group110Data,
  group13Props: group111Data,
  frame1000004784Props: frame10000047844Data
};
const group112Data = {
  text1: "€400,-",
  className: "group-1-4"
};
const group113Data = {
  text1: "€549,-",
  className: "group-2-4"
};
const group114Data = {
  text1: "€699,-",
  className: "group-3-4"
};
const group11604694425Data = {
  className: "group-116046948-4"
};
const frame10000047845Data = {
  group: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/group-6@2x.png",
  group116046944Props: group11604694425Data
};
const pagina3Data = {
  samsung1: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/samsung-1.png",
  stap3Van3: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/stap-3-van-3.png",
  vulJePostcodeInEnCheckOfJeKansMaakt: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/vul-je-postcode-in-en-check-of-je-kans-maakt-op--jouw-gekozen-pr.png",
  bolcomBon1: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/bolcom-bon-1@2x.png",
  image2: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-2.png",
  x2000Ab: "2000AB",
  checkMijnPostcode: "Check mijn postcode",
  meervoordeelNlIs: "*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.<br />Actievoorwaarden van toepassing.",
  group11Props: group112Data,
  group12Props: group113Data,
  group13Props: group114Data,
  frame1000004784Props: frame10000047845Data
};
const group115Data = {
  text1: "€400,-",
  className: "group-1-5"
};
const group116Data = {
  text1: "€549,-",
  className: "group-2-5"
};
const group117Data = {
  text1: "€699,-",
  className: "group-3-5"
};
const group11604694430Data = {
  className: "group-116046948-5"
};
const frame10000047846Data = {
  group: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/group@2x.png",
  group116046944Props: group11604694430Data
};
const pagina4Data = {
  samsung1: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/samsung-1.png",
  pagina9: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/pagina-9.jpg",
  image6: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png",
  meervoordeelNlChecktNuOfJijKansMaak: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/meervoordeel-nl-checkt-nu-of-jij-kans-maakt-op-de-prijs---.png",
  bolcomBon1: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/bolcom-bon-1@2x.png",
  image2: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-2.png",
  meervoordeelNlIs: "*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.<br />Actievoorwaarden van toepassing.",
  group11Props: group115Data,
  group12Props: group116Data,
  group13Props: group117Data,
  frame1000004784Props: frame10000047846Data
};
const group11604694435Data = {
  className: "group-116046948-6"
};
const frame10000047847Data = {
  group: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/group@2x.png",
  group116046944Props: group11604694435Data
};
const pagina5Data = {
  hoeKunnenWijJouBereiken: "Hoe kunnen wij jou bereiken?",
  layer21: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/layer-2@2x.png",
  voornaam: "Voornaam",
  layer22: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/layer-2@2x.png",
  achternaam: "Achternaam",
  layer23: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/layer-2-2@2x.png",
  eMailadres: "E-mailadres",
  group: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/group-10@2x.png",
  telefoonnummer: "Telefoonnummer",
  bevestigMijnDeelname: "Bevestig mijn deelname",
  metHetBevestigenV: "Met het bevestigen van je deelname ga je er mee akkoord dat MeerVoordeel eenmalig telefonisch contact met je opneemt met een aanbieding voor een all-in abonnement van Ziggo.",
  gefeliciteerdJijMaaktNuKansOpDeGeko: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/gefeliciteerd--jij-maakt-nu-kans-op-de--gekozen-prijs--.png",
  image2: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-2.png",
  tWV: "t.w.v.",
  text19: "€549,-",
  jouwGekozenPrijs: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/jouw-gekozen-prijs-.png",
  playstation5SlimDisk: "Playstation 5 Slim Disk",
  meervoordeelNlIs: "*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.<br />Actievoorwaarden van toepassing.",
  frame1000004784Props: frame10000047847Data
};
// CONCATENATED MODULE: ./src/router.js













vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  mode: "history",
  base: "/ziggo/",
  routes: [{
    path: "/landingspagina",
    component: Landingspagina,
    props: {
      ...landingspaginaData
    }
  }, {
    path: "/pagina-1",
    component: Pagina1,
    props: {
      ...pagina1Data
    }
  }, {
    path: "/pagina-2",
    component: Pagina2,
    name: 'pagina-2',
    props: {
      ...pagina2Data
    }
  }, {
    path: "/pagina-3",
    component: Pagina3,
    props: {
      ...pagina3Data
    }
  }, {
    path: "/pagina-4",
    component: Pagina4,
    props: {
      ...pagina4Data
    }
  }, {
    path: "/pagina-5",
    component: Pagina5,
    props: {
      ...pagina5Data
    }
  }, {
    path: "/pagina-6",
    component: Pagina6,
    props: {
      ...pagina6Data
    }
  }, {
    path: "/bedankt",
    component: bedankt,
    props: {
      ...pagina6Data
    }
  }, {
    path: "/bedankt2",
    component: bedankt_img,
    props: {
      ...pagina6Data
    }
  }, {
    path: "*",
    redirect: "/landingspagina"
  }]
}));
// EXTERNAL MODULE: ./styleguide.sass
var styleguide = __webpack_require__("7259");

// EXTERNAL MODULE: ./globals.sass
var globals = __webpack_require__("6d84");

// CONCATENATED MODULE: ./src/main.js






vue_runtime_esm["a" /* default */].config.productionTip = false;
new vue_runtime_esm["a" /* default */]({
  store: Store,
  render: h => h(App),
  router: router
}).$mount("#app");

/***/ }),

/***/ "6613":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "674e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6d84":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6dcf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6f1c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6f97":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina4_vue_vue_type_style_index_0_id_f59bb4d0_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e126");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina4_vue_vue_type_style_index_0_id_f59bb4d0_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina4_vue_vue_type_style_index_0_id_f59bb4d0_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7259":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "73a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioButtonSelected_vue_vue_type_style_index_0_id_788309c1_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bae3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioButtonSelected_vue_vue_type_style_index_0_id_788309c1_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioButtonSelected_vue_vue_type_style_index_0_id_788309c1_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7653":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/afbeelding-footer-mobiel.f1cf3a8b.png";

/***/ }),

/***/ "80a2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/afbeeldingen-samen-mobiel.b5031825.png";

/***/ }),

/***/ "95e2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "97f9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9d82":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/tel-nummer-icoon.0bb0d9c7.svg";

/***/ }),

/***/ "a111":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAuCAYAAADeIbxeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjPSURBVHgB7VpdTBzXFT6zPwYbGzau7NrY1It/FUUVkLQPSFUAKVHfMFSR+tDKgJqHSlUCmCTtS2Oo+xS3BZKX9qEKuFUf8lJIoqp+qFj3oa5a2V5cp61Dml2CwdQOMJBA9ncm55udi4fdndnZ9bC2kvmkYX7uud+9c86555w7LJEN7Lj1iw5yURZ4Cgn4ZoZbFcnTSy7KgoIGkVSli0htpMhwgFxsOwoahNHKR8CfVNywVQZYGgThSiUK4lolqYtcbDssDZIJVwJu2CoHJP/7rzUSee8nbYlkVaFV7VKiLrFC9MZRUlU5m8RDajhx6qWJAwcOBD0eT7fJWKQoytji4mKUygwxL4zv9XoDqqp2LCwsDNIjCF/y5Cth38yFcUn1vqmSGuTYBKNoUHPE1V7RZng2usvvDSX4Ci/LL62tKkmS8OIBPsvqfSOG+IiSAzh48OAUc0dZsT2FZA3zCvER5Pmc4/NgoX61tbWDkL1z545EZYIPf1InXg5V/me4Le1RBlXJZq5gRROlO9FXaHt+fj7Mp3pcHz58uDWdTkNp/ay0MWPXYDAYSCaTQV3eEkLW7/dHGXIp8sZ5HTp0qDtfHz7hkO2MsZ3Isbx/5pd9qkrDBbqFfGmpJ/Z4f9RMQhiEQ0UPK2QMz9ir2d4SvK4b93xu4/sIzhzKQrrMFM7slW3soee4bdBAO1FRUdETj8dXjGPBg7lfhC/DzNeKlanNksdiZxgSc8E4vFqCvFreFF7P/Xr1OYk+Yzt27OhPJBIj/GzTOY3vsZ3ISerJEwMjJCltZh3Uq+9Ppk6ebbMyhhWgYKwaKMdKDl6ryw5Bebp8YywW6+BreHuUj0n9WqCRld2pyw+hP+ePVrMx9NUCxWtjsNKb+L6DjdHHRunj61F9zvW84iaoDMhfZane3D3HyieU/s27pLzz9xbqCJZcbcED2Wsn7CR3Pf90sRcP+3w+rIR67rdZGHD7ipGH70NipfEZxpRZyaYhWOQV5h3BPUIbjzfORy9Cl6SFZY0rWq5QltcgEqmnjffq8pqsvjdLnmefIu9PvhvwXfhRI5UIftlpO3JQACusiZVyGWEIIQdhib3aauzZrLGg4CBZY9V4oxvhoZX3OQbxR4YbN0tdnpxE6R5/TaBJ+tbXw9LRg0SVFflXkN0BPR45z7NNBaA6wxmK10tV5IEmhA29cjP9rsZtLcZ7lofxTB2A22HAlqzHDXwULDa2C77sB2oyk3AlksLelNQZe/yVaDLT1OS7dWGQJA+XjFqy66MHRGVlpczxGmHpHCdwTaF8QIkhVEnchoTbwEl5lFdIo554NQXr4ayDV820CDkwAMIbVhVCHeT5QFsw3/jYl7AsQuIf+Tyuj48cpZXSolxH+cvtE3aqwgdFzgrJhCt1NHnybFN24k6denmQV0wTG0vmvUurFbH+MiFW5CYH8ofxXo/LPfwc8qjs4LH9yAUiZEGOz2hDGO0XymcMUcaTWwxjjlOmcsQ+A3ugTsT/VCoVxdhcYckYH9eQR77Ri4KAPj6M3oM8hXau6MaEobjfwwljhRQN8J4laEeunEB+gSeTi0cDXxSD+OgLAuxTOMQ81F22CxcuXLhw4cKFCxcubEEKRIYDMYe+bsbq+6NfNr7r168H+H80jvA1NzdHfesJdUSVVKd+4iM5zfdpQunjr1PnyAHwJ5965ut2km9jeaObyBm+K1eu1Nv5oZyLMuKhGSTgqSAXubBlkJadh7XDKTRU7NMOp3DEX01n9jxBTgF8LwSeJKfA39jw8dOWrC2DnKl+gtqrjpNTgPKc5ANXyy7nHKZlZx2d3u3c/Gpqamjv3r22ZG0Z5OlddXSmxjkPbN9z3FG+LhiYFehUGIQDYgU7xbd//37NKPihRiEUNAhCVdBXrU3OibCFF3WSD+GloTKjPCfCIPgwL/A5sYphhOrqau16377C89tiMkzkiL9mi0D77mOb1y889mRO+2xylS5/dpvyIR+f0QhO8BmN8NOvNNORtX87xvcizy/7p4RWfFVVVdqR/UwAK4X/Fbylnf+9TMvLy5v3WwwyHb9Hp9kroKh8QNtpg9e8sXKN3v70AzIDJv4qx2Moyg7fxbX3aOAB+BD7cQhMrn9Azy9eKpkPxvntV799X37jNj13Z9KUb319XcsVdXV1edthnOPH77/v2toazczMbJHZErJkJU5nPw7RD/7/Z4qm1sgMkIMMZHFthZ8tX7HFN3AP416yxffM7bds8T238LYtvm989DtbfM/Mv1WQb25ujq5evUq8e7eUi0QidPPmTYrHt/LlzSEXednjpafjd3PaQgv/pW/yC1zMCg1WsOILr85rfK/L18gu4Nngu/zZnCN8iAxmfLPJNa2tGD4o+caNG7S0tJTTtrQqUzgcxq8w8/Y1TeqYCKlbA+jou7+nztd6KZo09yYrPllJ5PC1/fj7JfNlB3jwfWfoh6XPLx3PM7/v0TQbuVggN2Tni/GpSWob7KG7yx+b9jM1iKhexGQnZv5BDfWnaGXkUknVkaheBN94+C8Zvl9PPTAfwsikPr8Pf/VOSXyoqsTeA3yIBOC7dv4P1PLYUSoFYu8B49ya+5CO7K+lv/78Ih39WtC0j6lBRMmHxIgY+5L/Bn1Ut0t79vTOOioWItkiMSIWnw9ENvlKKS+NfAhRz3v+Sf+q9ZbM164bQ/A9u/4njS9QtUfblxQLGAMlLxL99PQ0Lc0t0rHqAxqfVflrulOBtyCRidiZSeSXtDzQvvsEnedkWAzwUkY+QPCV8sL5+FBkhBN36dW9zTTA18WgveqYVjWeNfQTfC8GnqJiAYMgTyB5CyDhw0CowmAsrJxsmBpk4N6Uluyy8bp8nVfN/7QlXqjiKIYvyCGomNh/fulvefcDKCDwvFi+N9iwVnzFvu/CwgJtbGzkPMeeA0Yxg6lB8ilPYLaEpOk0n9nm7FHhy2cMgexS1wj3/yGPGHyKV5mQ0lKUHILTfORRQqQ44zexSpJ9KWf5FEUJeTwO8cVi8ucyOQkpG8dl1wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "adb5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/rechterpijl.b315258a.svg";

/***/ }),

/***/ "af05":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b712":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1000004784_vue_vue_type_style_index_0_id_675c3b77_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6613");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1000004784_vue_vue_type_style_index_0_id_675c3b77_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1000004784_vue_vue_type_style_index_0_id_675c3b77_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bae3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bf38":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina5_vue_vue_type_style_index_0_id_8522eccc_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0529");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina5_vue_vue_type_style_index_0_id_8522eccc_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina5_vue_vue_type_style_index_0_id_8522eccc_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d3a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group116046944_vue_vue_type_style_index_0_id_a1a8f2ae_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("34d7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group116046944_vue_vue_type_style_index_0_id_a1a8f2ae_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group116046944_vue_vue_type_style_index_0_id_a1a8f2ae_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "dc98":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/tick-circle.b6a7feec.svg";

/***/ }),

/***/ "e126":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e7c2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e7f1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landingspagina_vue_vue_type_style_index_0_id_d4c91402_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f1c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landingspagina_vue_vue_type_style_index_0_id_d4c91402_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landingspagina_vue_vue_type_style_index_0_id_d4c91402_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f6b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina2_vue_vue_type_style_index_0_id_62f7a160_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("97f9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina2_vue_vue_type_style_index_0_id_62f7a160_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina2_vue_vue_type_style_index_0_id_62f7a160_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ });
//# sourceMappingURL=app.5da53534.js.map