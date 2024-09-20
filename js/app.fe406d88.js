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

/***/ "0766":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_1590cf6d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2dff");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_1590cf6d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_1590cf6d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1ae2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "2dff":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "32ac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina3_vue_vue_type_style_index_0_id_3442f1cd_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fdd0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina3_vue_vue_type_style_index_0_id_3442f1cd_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina3_vue_vue_type_style_index_0_id_3442f1cd_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3330":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "3805":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3dc5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_vue_vue_type_style_index_0_id_55e66488_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c2b3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_vue_vue_type_style_index_0_id_55e66488_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_vue_vue_type_style_index_0_id_55e66488_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Landingspagina.vue?vue&type=template&id=123b36df
var Landingspaginavue_type_template_id_123b36df_render = function render() {
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
  }), _c('svg', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "width": "100",
      "height": "46",
      "viewBox": "0 0 100 46",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('mask', {
    staticStyle: {
      "mask-type": "luminance"
    },
    attrs: {
      "id": "mask0_13_162",
      "maskUnits": "userSpaceOnUse",
      "x": "0",
      "y": "0",
      "width": "75",
      "height": "19"
    }
  }, [_c('path', {
    attrs: {
      "d": "M74.3438 0H0.367188V18.1631H74.3438V0Z",
      "fill": "white"
    }
  })]), _c('g', {
    attrs: {
      "mask": "url(#mask0_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M19.7966 6.44794H27.2806V7.85839H24.3446V15.7166H22.7327V7.8296H19.7966V6.44794ZM26.964 8.98099H28.3457V10.2763H28.3745C28.432 10.1036 28.5184 9.93088 28.6335 9.75818C28.7487 9.58547 28.9214 9.41276 29.0941 9.29762C29.2668 9.1537 29.4683 9.03856 29.6698 8.9522C29.8713 8.86585 30.1015 8.80828 30.3318 8.80828C30.5045 8.80828 30.6197 8.80828 30.6772 8.80828C30.7348 8.80828 30.8212 8.83707 30.8787 8.83707V10.2475C30.7636 10.2187 30.6772 10.2187 30.5621 10.1899C30.447 10.1899 30.3606 10.1612 30.2455 10.1612C29.9864 10.1612 29.7561 10.2187 29.5546 10.3051C29.3244 10.3914 29.1516 10.5641 28.9789 10.7369C28.8062 10.9383 28.6911 11.1686 28.576 11.4565C28.4896 11.7443 28.432 12.0609 28.432 12.4351V15.6302H26.964V8.98099ZM37.6719 15.6878H36.2327V14.7667H36.2039C36.0312 15.1121 35.7433 15.3712 35.3979 15.5727C35.0525 15.7742 34.6783 15.8893 34.3041 15.8893C33.4118 15.8893 32.7785 15.6878 32.4043 15.2273C32.0013 14.7955 31.8286 14.1334 31.8286 13.2411V8.98099H33.2966V13.0972C33.2966 13.6729 33.4118 14.1047 33.6421 14.3349C33.8723 14.5652 34.189 14.7091 34.5919 14.7091C34.9086 14.7091 35.1676 14.6516 35.3691 14.5652C35.5706 14.4789 35.7433 14.3349 35.8585 14.191C36.0024 14.0471 36.0888 13.8456 36.1463 13.6153C36.2039 13.385 36.2327 13.1548 36.2327 12.8957V9.00977H37.7007V15.6878H37.6719ZM40.205 13.529C40.2625 13.9607 40.4065 14.2486 40.6943 14.4501C40.9821 14.6228 41.3276 14.7091 41.7305 14.7091C41.8745 14.7091 42.0184 14.7091 42.1911 14.6804C42.3638 14.6516 42.5365 14.6228 42.6804 14.5652C42.8244 14.5076 42.9683 14.4213 43.0546 14.3062C43.141 14.191 43.1986 14.0471 43.1986 13.8456C43.1986 13.6441 43.1122 13.5002 42.9971 13.385C42.8531 13.2699 42.7092 13.1836 42.5077 13.0972C42.3062 13.0396 42.076 12.9533 41.8169 12.8957C41.5578 12.8381 41.2988 12.7806 41.0397 12.723C40.7519 12.6654 40.4928 12.5791 40.2337 12.4927C39.9747 12.4064 39.7444 12.2912 39.5429 12.1473C39.3414 12.0034 39.1687 11.8019 39.0536 11.5716C38.9384 11.3413 38.8809 11.0535 38.8809 10.7369C38.8809 10.3627 38.9672 10.0748 39.1399 9.81574C39.3126 9.55668 39.5429 9.38397 39.802 9.21127C40.0898 9.06734 40.3777 8.9522 40.7231 8.89463C41.0685 8.83706 41.3851 8.80828 41.673 8.80828C42.0184 8.80828 42.3638 8.83706 42.6517 8.92342C42.9683 8.98099 43.2561 9.12491 43.5152 9.26884C43.7743 9.44154 43.9758 9.64304 44.1485 9.9021C44.3212 10.1612 44.4363 10.4778 44.4651 10.852H42.9107C42.8531 10.5066 42.6804 10.2475 42.4214 10.1324C42.1623 10.0172 41.8745 9.95967 41.5578 9.95967C41.4427 9.95967 41.3276 9.95967 41.1836 9.98845C41.0397 10.0172 40.8958 10.046 40.7807 10.0748C40.6655 10.1324 40.5504 10.1899 40.464 10.2763C40.3777 10.3627 40.3201 10.4778 40.3201 10.6217C40.3201 10.7944 40.3777 10.9383 40.5216 11.0535C40.6367 11.1686 40.8094 11.255 41.0109 11.3413C41.2124 11.3989 41.4427 11.4853 41.7018 11.5428C41.9608 11.6004 42.2199 11.658 42.5077 11.7155C42.7668 11.7731 43.0259 11.8595 43.2849 11.9458C43.544 12.0322 43.7743 12.1473 43.9757 12.2912C44.1772 12.4351 44.3499 12.6366 44.4651 12.8381C44.5802 13.0396 44.6666 13.3275 44.6666 13.6729C44.6666 14.0759 44.5802 14.3925 44.3787 14.6804C44.206 14.9682 43.947 15.1697 43.6879 15.3424C43.4001 15.5151 43.0834 15.6302 42.7092 15.7166C42.3638 15.803 42.0184 15.8317 41.6442 15.8317C41.2124 15.8317 40.8382 15.7742 40.464 15.6878C40.1186 15.6015 39.802 15.4575 39.5429 15.256C39.2839 15.0546 39.0824 14.8243 38.9096 14.5364C38.7657 14.2486 38.6794 13.9032 38.6794 13.5002L40.205 13.529ZM45.0696 8.98099H46.1922V6.96606H47.6602V8.98099H48.9843V10.0748H47.6602V13.6441C47.6602 13.788 47.6602 13.932 47.689 14.0471C47.689 14.1622 47.7465 14.2486 47.7753 14.3349C47.8329 14.4213 47.8905 14.4789 47.9768 14.5076C48.0632 14.5364 48.2071 14.5652 48.3798 14.5652C48.4949 14.5652 48.5813 14.5652 48.6964 14.5652C48.8116 14.5652 48.8979 14.5364 49.0131 14.5076V15.659C48.8404 15.6878 48.6964 15.6878 48.5237 15.7166C48.3798 15.7454 48.2071 15.7454 48.0344 15.7454C47.6314 15.7454 47.3436 15.7166 47.0845 15.6302C46.8542 15.5727 46.6527 15.4575 46.5376 15.3136C46.3937 15.1697 46.3073 14.997 46.2497 14.7667C46.1922 14.5652 46.1634 14.3062 46.1634 14.0183V10.1036H45.0408L45.0696 8.98099ZM50.0493 8.98099H51.4598V9.9021H51.4886C51.69 9.49911 51.9779 9.24005 52.3521 9.06734C52.7263 8.89463 53.1293 8.80828 53.561 8.80828C54.0792 8.80828 54.5397 8.89463 54.9427 9.09613C55.3457 9.26884 55.6623 9.5279 55.9214 9.87331C56.1804 10.1899 56.3819 10.5929 56.4971 10.9959C56.641 11.4277 56.6986 11.8882 56.6986 12.3776C56.6986 12.8381 56.641 13.2699 56.5259 13.6729C56.4107 14.1047 56.238 14.4789 56.0077 14.7955C55.7775 15.1121 55.4608 15.3712 55.1154 15.5727C54.7412 15.7742 54.3382 15.8605 53.8201 15.8605C53.6186 15.8605 53.3883 15.8317 53.1868 15.803C52.9854 15.7742 52.7551 15.6878 52.5536 15.6015C52.3521 15.5151 52.1794 15.4 52.0067 15.256C51.834 15.1121 51.69 14.9682 51.5749 14.7955H51.5461V18.1345H50.0781V8.98099H50.0493ZM55.2018 12.3488C55.2018 12.0609 55.173 11.7443 55.0866 11.4565C55.0003 11.1686 54.8851 10.9096 54.7412 10.7081C54.5973 10.4778 54.3958 10.3051 54.1655 10.1899C53.9352 10.046 53.6762 9.98845 53.3596 9.98845C52.7263 9.98845 52.2657 10.1899 51.9491 10.6217C51.6325 11.0535 51.4886 11.6292 51.4886 12.3488C51.4886 12.6942 51.5173 13.0108 51.6037 13.2987C51.69 13.5865 51.8052 13.8456 51.9779 14.0471C52.1506 14.2486 52.3233 14.4213 52.5536 14.5364C52.7839 14.6516 53.0429 14.7091 53.3596 14.7091C53.705 14.7091 53.9928 14.6516 54.2231 14.5076C54.4534 14.3637 54.6549 14.191 54.7988 13.9607C54.9427 13.7305 55.0578 13.5002 55.1154 13.2123C55.173 12.9245 55.2018 12.6366 55.2018 12.3488ZM57.7924 6.44794H59.2604V7.85839H57.7924V6.44794ZM57.7924 8.98099H59.2604V15.6878H57.7924V8.98099ZM60.5845 6.44794H62.0525V15.6878H60.5845V6.44794ZM66.6005 15.8605C66.0536 15.8605 65.593 15.7742 65.1613 15.6015C64.7295 15.4288 64.3841 15.1697 64.0962 14.8818C63.8084 14.5652 63.5781 14.191 63.4342 13.7592C63.2903 13.3275 63.2039 12.8381 63.2039 12.3488C63.2039 11.8307 63.2903 11.3701 63.4342 10.9383C63.5781 10.5066 63.8084 10.1324 64.0962 9.81574C64.3841 9.49911 64.7295 9.26884 65.1613 9.09613C65.593 8.92342 66.0536 8.83707 66.6005 8.83707C67.1474 8.83707 67.608 8.92342 68.0397 9.09613C68.4715 9.26884 68.8169 9.5279 69.1048 9.81574C69.3926 10.1324 69.6229 10.5066 69.7668 10.9383C69.9107 11.3701 69.9971 11.8307 69.9971 12.3488C69.9971 12.8669 69.9107 13.3275 69.7668 13.7592C69.6229 14.191 69.3926 14.5652 69.1048 14.8818C68.8169 15.1985 68.4715 15.4288 68.0397 15.6015C67.608 15.7742 67.1474 15.8605 66.6005 15.8605ZM66.6005 14.7091C66.9171 14.7091 67.205 14.6516 67.464 14.5076C67.6943 14.3637 67.8958 14.191 68.0685 13.9607C68.2124 13.7305 68.3276 13.4714 68.4139 13.2123C68.4715 12.9245 68.5291 12.6366 68.5291 12.3488C68.5291 12.0609 68.5003 11.7731 68.4139 11.4853C68.3564 11.1974 68.2124 10.9383 68.0685 10.7369C67.9246 10.5066 67.7231 10.3339 67.464 10.1899C67.2338 10.046 66.9459 9.98845 66.6005 9.98845C66.2839 9.98845 65.996 10.046 65.737 10.1899C65.5067 10.3339 65.3052 10.5066 65.1325 10.7369C64.9886 10.9671 64.8734 11.1974 64.7871 11.4853C64.7295 11.7731 64.6719 12.0609 64.6719 12.3488C64.6719 12.6366 64.7007 12.9245 64.7871 13.2123C64.8446 13.5002 64.9886 13.7592 65.1325 13.9607C65.2764 14.191 65.4779 14.3637 65.737 14.5076C65.996 14.6516 66.2839 14.7091 66.6005 14.7091ZM70.4001 8.98099H71.5227V6.96606H72.9907V8.98099H74.3148V10.0748H72.9907V13.6441C72.9907 13.788 72.9907 13.932 73.0195 14.0471C73.0195 14.1622 73.077 14.2486 73.1058 14.3349C73.1634 14.4213 73.221 14.4789 73.3073 14.5076C73.3937 14.5364 73.5376 14.5652 73.7103 14.5652C73.8254 14.5652 73.9118 14.5652 74.0269 14.5652C74.1421 14.5652 74.2284 14.5364 74.3436 14.5076V15.659C74.1709 15.6878 74.0269 15.6878 73.8542 15.7166C73.7103 15.7454 73.5376 15.7454 73.3649 15.7454C72.9619 15.7454 72.6741 15.7166 72.415 15.6302C72.1847 15.5727 71.9832 15.4575 71.8681 15.3136C71.7242 15.1697 71.6378 14.997 71.5802 14.7667C71.5227 14.5652 71.4939 14.3062 71.4939 14.0183V10.1036H70.3713L70.4001 8.98099Z",
      "fill": "#191919"
    }
  }), _c('path', {
    attrs: {
      "d": "M18.0698 6.44777H11.3054L9.23287 0L7.13159 6.44777L0.367188 6.41898L5.83628 10.3913L3.73499 16.8102L9.20408 12.838L14.6732 16.8102L12.5719 10.3913L18.0698 6.44777Z",
      "fill": "#04DA8D"
    }
  }), _c('path', {
    attrs: {
      "d": "M13.0898 11.8594L12.6293 10.3914L9.23267 12.8381L13.0898 11.8594Z",
      "fill": "#005128"
    }
  })]), _c('rect', {
    attrs: {
      "x": "0.367188",
      "y": "26.8933",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip0_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M16.7804 34.6812H11.6063L10.0081 29.7568L8.40488 34.6812L3.23071 34.6762L7.42099 37.7228L5.8178 42.6422L10.0081 39.6007L14.1934 42.6422L12.5952 37.7228L16.7804 34.6812Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M12.9545 38.8366L12.5949 37.7229L10.0078 39.6008L12.9545 38.8366Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "20.4114",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip1_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M36.8244 34.6814H31.6502L30.052 29.7569L28.4488 34.6814L23.2747 34.6764L27.4649 37.7229L25.8617 42.6424L30.052 39.6008L34.2373 42.6424L32.6391 37.7229L36.8244 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M32.9982 38.8368L32.6386 37.7231L30.0515 39.6009L32.9982 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "40.4553",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip2_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M56.8686 34.6814H51.6944L50.0962 29.7569L48.493 34.6814L43.3188 34.6764L47.5091 37.7229L45.9059 42.6424L50.0962 39.6008L54.2815 42.6424L52.6833 37.7229L56.8686 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M53.0426 38.8368L52.683 37.7231L50.0959 39.6009L53.0426 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "60.4995",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip3_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M76.9128 34.6814H71.7386L70.1404 29.7569L68.5372 34.6814L63.363 34.6764L67.5533 37.7229L65.9501 42.6424L70.1404 39.6008L74.3257 42.6424L72.7275 37.7229L76.9128 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M73.0868 38.8368L72.7272 37.7231L70.1401 39.6009L73.0868 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "80.5435",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#C5C5C5"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip4_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M96.9565 34.6814H91.7823L90.1841 29.7569L88.5809 34.6814L83.4067 34.6764L87.597 37.7229L85.9938 42.6424L90.1841 39.6008L94.3694 42.6424L92.7712 37.7229L96.9565 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M93.1308 38.8368L92.7712 37.7231L90.1841 39.6009L93.1308 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('defs', [_c('clipPath', {
    attrs: {
      "id": "clip0_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(3.23071 29.7568)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip1_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(23.2747 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip2_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(43.3188 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip3_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(63.363 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip4_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(83.4067 29.7569)"
    }
  })])])])]), _c('div', {
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
  }, [_vm._v(" Doe nu mee "), _c('span', {
    staticStyle: {
      "margin-left": "27px"
    }
  }, [_vm._v("→")])])])])], 1)]), _c('div', {
    staticClass: "container-afbeelding-prijzen-mobiel"
  }, [_c('img', {
    attrs: {
      "src": "/img/afbeeldingen-samen-mobiel.b5031825.png",
      "alt": "doe het alsjeblieft"
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
    staticClass: "afbeelding-footer-mobiel",
    attrs: {
      "src": _vm.image8,
      "alt": "image"
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
var Landingspaginavue_type_template_id_123b36df_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Landingspagina.vue?vue&type=template&id=123b36df

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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Frame1000004784.vue?vue&type=template&id=e3d96738
var Frame1000004784vue_type_template_id_e3d96738_render = function render() {
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
  }), _c('svg', {
    attrs: {
      "width": "149",
      "height": "70",
      "viewBox": "0 0 149 70",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('mask', {
    staticStyle: {
      "mask-type": "luminance"
    },
    attrs: {
      "id": "mask0_1_186",
      "maskUnits": "userSpaceOnUse",
      "x": "0",
      "y": "0",
      "width": "112",
      "height": "29"
    }
  }, [_c('path', {
    attrs: {
      "d": "M111.577 0.742676H0V28.1376H111.577V0.742676Z",
      "fill": "white"
    }
  })]), _c('g', {
    attrs: {
      "mask": "url(#mask0_1_186)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M29.3052 10.468H40.5931V12.5953H36.1648V24.4476H33.7335V12.5519H29.3052V10.468ZM40.1155 14.2885H42.1995V16.2422H42.2429C42.3297 15.9817 42.4599 15.7212 42.6336 15.4607C42.8073 15.2002 43.0678 14.9397 43.3282 14.766C43.5887 14.549 43.8926 14.3753 44.1965 14.2451C44.5005 14.1148 44.8478 14.028 45.1951 14.028C45.4556 14.028 45.6292 14.028 45.7161 14.028C45.8029 14.028 45.9331 14.0714 46.02 14.0714V16.1987C45.8463 16.1553 45.7161 16.1553 45.5424 16.1119C45.3688 16.1119 45.2385 16.0685 45.0648 16.0685C44.6741 16.0685 44.3268 16.1553 44.0229 16.2856C43.6756 16.4158 43.4151 16.6763 43.1546 16.9368C42.8941 17.2407 42.7204 17.588 42.5468 18.0222C42.4165 18.4563 42.3297 18.9339 42.3297 19.4983V24.3174H40.1155V14.2885ZM56.2659 24.4042H54.0952V23.0149H54.0518C53.7913 23.5359 53.3571 23.9266 52.8361 24.2305C52.3152 24.5344 51.7508 24.7081 51.1864 24.7081C49.8405 24.7081 48.8854 24.4042 48.321 23.7096C47.7132 23.0583 47.4527 22.0598 47.4527 20.7139V14.2885H49.6668V20.4968C49.6668 21.3651 49.8405 22.0164 50.1878 22.3637C50.5351 22.711 51.0127 22.9281 51.6205 22.9281C52.0981 22.9281 52.4888 22.8413 52.7927 22.711C53.0966 22.5808 53.3571 22.3637 53.5308 22.1466C53.7479 21.9295 53.8781 21.6256 53.9649 21.2783C54.0518 20.931 54.0952 20.5837 54.0952 20.1929V14.3319H56.3093V24.4042H56.2659ZM60.0865 21.1481C60.1733 21.7993 60.3904 22.2334 60.8245 22.5373C61.2587 22.7978 61.7796 22.9281 62.3875 22.9281C62.6045 22.9281 62.8216 22.9281 63.0821 22.8847C63.3426 22.8413 63.6031 22.7978 63.8202 22.711C64.0372 22.6242 64.2543 22.4939 64.3846 22.3203C64.5148 22.1466 64.6016 21.9295 64.6016 21.6256C64.6016 21.3217 64.4714 21.1047 64.2977 20.931C64.0807 20.7573 63.8636 20.6271 63.5597 20.4968C63.2558 20.41 62.9084 20.2798 62.5177 20.1929C62.127 20.1061 61.7362 20.0193 61.3455 19.9324C60.9114 19.8456 60.5206 19.7154 60.1299 19.5851C59.7391 19.4549 59.3918 19.2812 59.0879 19.0641C58.784 18.8471 58.5235 18.5432 58.3499 18.1958C58.1762 17.8485 58.0894 17.4144 58.0894 16.9368C58.0894 16.3724 58.2196 15.9383 58.4801 15.5475C58.7406 15.1568 59.0879 14.8963 59.4787 14.6358C59.9128 14.4187 60.347 14.2451 60.8679 14.1582C61.3889 14.0714 61.8665 14.028 62.3006 14.028C62.8216 14.028 63.3426 14.0714 63.7767 14.2017C64.2543 14.2885 64.6885 14.5056 65.0792 14.7226C65.4699 14.9831 65.7738 15.287 66.0343 15.6778C66.2948 16.0685 66.4685 16.5461 66.5119 17.1105H64.1675C64.0807 16.5895 63.8202 16.1987 63.4294 16.0251C63.0387 15.8514 62.6045 15.7646 62.127 15.7646C61.9533 15.7646 61.7797 15.7646 61.5626 15.808C61.3455 15.8514 61.1284 15.8948 60.9548 15.9383C60.7811 16.0251 60.6074 16.1119 60.4772 16.2422C60.347 16.3724 60.2601 16.5461 60.2601 16.7631C60.2601 17.0236 60.347 17.2407 60.564 17.4144C60.7377 17.588 60.9982 17.7183 61.3021 17.8485C61.606 17.9354 61.9533 18.0656 62.344 18.1524C62.7348 18.2393 63.1255 18.3261 63.5597 18.4129C63.9504 18.4997 64.3411 18.63 64.7319 18.7602C65.1226 18.8905 65.4699 19.0641 65.7738 19.2812C66.0777 19.4983 66.3382 19.8022 66.5119 20.1061C66.6856 20.41 66.8158 20.8442 66.8158 21.3651C66.8158 21.973 66.6856 22.4505 66.3816 22.8847C66.1212 23.3188 65.7304 23.6227 65.3397 23.8832C64.9055 24.1437 64.428 24.3174 63.8636 24.4476C63.3426 24.5779 62.8216 24.6213 62.2572 24.6213C61.606 24.6213 61.0416 24.5344 60.4772 24.4042C59.9562 24.2739 59.4787 24.0569 59.0879 23.753C58.6972 23.4491 58.3933 23.1017 58.1328 22.6676C57.9157 22.2334 57.7855 21.7125 57.7855 21.1047L60.0865 21.1481ZM67.4236 14.2885H69.1168V11.2494H71.331V14.2885H73.3281V15.9383H71.331V21.3217C71.331 21.5388 71.331 21.7559 71.3744 21.9295C71.3744 22.1032 71.4612 22.2334 71.5046 22.3637C71.5915 22.4939 71.6783 22.5808 71.8085 22.6242C71.9388 22.6676 72.1559 22.711 72.4163 22.711C72.59 22.711 72.7202 22.711 72.8939 22.711C73.0676 22.711 73.1978 22.6676 73.3715 22.6242V24.3608C73.111 24.4042 72.8939 24.4042 72.6334 24.4476C72.4163 24.491 72.1559 24.491 71.8954 24.491C71.2876 24.491 70.8534 24.4476 70.4627 24.3174C70.1153 24.2305 69.8114 24.0569 69.6378 23.8398C69.4207 23.6227 69.2905 23.3622 69.2036 23.0149C69.1168 22.711 69.0734 22.3203 69.0734 21.8861V15.9817H67.3802L67.4236 14.2885ZM74.9344 14.2885H77.0618V15.6778H77.1052C77.4091 15.07 77.8432 14.6792 78.4076 14.4187C78.972 14.1582 79.5798 14.028 80.2311 14.028C81.0125 14.028 81.7072 14.1582 82.315 14.4621C82.9228 14.7226 83.4004 15.1134 83.7911 15.6344C84.1818 16.1119 84.4857 16.7197 84.6594 17.3275C84.8765 17.9788 84.9633 18.6734 84.9633 19.4115C84.9633 20.1061 84.8765 20.7573 84.7028 21.3651C84.5292 22.0164 84.2687 22.5808 83.9213 23.0583C83.574 23.5359 83.0965 23.9266 82.5755 24.2305C82.0111 24.5344 81.4033 24.6647 80.6218 24.6647C80.3179 24.6647 79.9706 24.6213 79.6667 24.5779C79.3628 24.5344 79.0154 24.4042 78.7115 24.274C78.4076 24.1437 78.1471 23.97 77.8866 23.753C77.6261 23.5359 77.4091 23.3188 77.2354 23.0583H77.192V28.0945H74.9778V14.2885H74.9344ZM82.7057 19.368C82.7057 18.9339 82.6623 18.4563 82.5321 18.0222C82.4018 17.588 82.2281 17.1973 82.0111 16.8934C81.794 16.5461 81.4901 16.2856 81.1428 16.1119C80.7954 15.8948 80.4047 15.808 79.9272 15.808C78.972 15.808 78.2774 16.1119 77.7998 16.7631C77.3222 17.4144 77.1052 18.2827 77.1052 19.368C77.1052 19.889 77.1486 20.3666 77.2788 20.8007C77.4091 21.2349 77.5827 21.6256 77.8432 21.9295C78.1037 22.2334 78.3642 22.4939 78.7115 22.6676C79.0588 22.8413 79.4496 22.9281 79.9272 22.9281C80.4481 22.9281 80.8823 22.8413 81.2296 22.6242C81.5769 22.4071 81.8808 22.1466 82.0979 21.7993C82.315 21.452 82.4886 21.1047 82.5755 20.6705C82.6623 20.2363 82.7057 19.8022 82.7057 19.368ZM86.6131 10.468H88.8272V12.5953H86.6131V10.468ZM86.6131 14.2885H88.8272V24.4042H86.6131V14.2885ZM90.8243 10.468H93.0385V24.4042H90.8243V10.468ZM99.8981 24.6647C99.0732 24.6647 98.3786 24.5344 97.7273 24.274C97.0761 24.0135 96.5551 23.6227 96.121 23.1886C95.6868 22.711 95.3395 22.1466 95.1224 21.4954C94.9053 20.8442 94.7751 20.1061 94.7751 19.368C94.7751 18.5866 94.9053 17.8919 95.1224 17.2407C95.3395 16.5895 95.6868 16.0251 96.121 15.5475C96.5551 15.07 97.0761 14.7226 97.7273 14.4621C98.3786 14.2017 99.0732 14.0714 99.8981 14.0714C100.723 14.0714 101.418 14.2017 102.069 14.4621C102.72 14.7226 103.241 15.1134 103.675 15.5475C104.109 16.0251 104.457 16.5895 104.674 17.2407C104.891 17.8919 105.021 18.5866 105.021 19.368C105.021 20.1495 104.891 20.8442 104.674 21.4954C104.457 22.1466 104.109 22.711 103.675 23.1886C103.241 23.6661 102.72 24.0135 102.069 24.274C101.418 24.5344 100.723 24.6647 99.8981 24.6647ZM99.8981 22.9281C100.376 22.9281 100.81 22.8413 101.201 22.6242C101.548 22.4071 101.852 22.1466 102.112 21.7993C102.329 21.452 102.503 21.0612 102.633 20.6705C102.72 20.2363 102.807 19.8022 102.807 19.368C102.807 18.9339 102.763 18.4997 102.633 18.0656C102.546 17.6314 102.329 17.2407 102.112 16.9368C101.895 16.5895 101.591 16.329 101.201 16.1119C100.853 15.8948 100.419 15.808 99.8981 15.808C99.4205 15.808 98.9864 15.8948 98.5956 16.1119C98.2483 16.329 97.9444 16.5895 97.6839 16.9368C97.4668 17.2841 97.2932 17.6314 97.1629 18.0656C97.0761 18.4997 96.9893 18.9339 96.9893 19.368C96.9893 19.8022 97.0327 20.2363 97.1629 20.6705C97.2498 21.1047 97.4668 21.4954 97.6839 21.7993C97.901 22.1466 98.2049 22.4071 98.5956 22.6242C98.9864 22.8413 99.4205 22.9281 99.8981 22.9281ZM105.629 14.2885H107.322V11.2494H109.536V14.2885H111.533V15.9383H109.536V21.3217C109.536 21.5388 109.536 21.7559 109.58 21.9295C109.58 22.1032 109.666 22.2334 109.71 22.3637C109.797 22.4939 109.884 22.5808 110.014 22.6242C110.144 22.6676 110.361 22.711 110.622 22.711C110.795 22.711 110.926 22.711 111.099 22.711C111.273 22.711 111.403 22.6676 111.577 22.6242V24.3608C111.316 24.4042 111.099 24.4042 110.839 24.4476C110.622 24.491 110.361 24.491 110.101 24.491C109.493 24.491 109.059 24.4476 108.668 24.3174C108.321 24.2305 108.017 24.0569 107.843 23.8398C107.626 23.6227 107.496 23.3622 107.409 23.0149C107.322 22.711 107.279 22.3203 107.279 21.8861V15.9817H105.585L105.629 14.2885Z",
      "fill": "#191919"
    }
  }), _c('path', {
    attrs: {
      "d": "M26.7003 10.4677H16.4977L13.3718 0.742676L10.2025 10.4677L0 10.4242L8.24886 16.4155L5.07956 26.0971L13.3284 20.1058L21.5773 26.0971L18.408 16.4155L26.7003 10.4677Z",
      "fill": "#04DA8D"
    }
  }), _c('path', {
    attrs: {
      "d": "M19.1892 18.6299L18.4946 16.4158L13.3716 20.1061L19.1892 18.6299Z",
      "fill": "#005128"
    }
  })]), _c('rect', {
    attrs: {
      "y": "41.3051",
      "width": "28.0725",
      "height": "28.0725",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip0_1_186)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M24.7555 53.0514H16.9515L14.5409 45.624L12.1229 53.0514L4.31885 53.0438L10.6389 57.6389L8.22087 65.0587L14.5409 60.4712L20.8535 65.0587L18.443 57.6389L24.7555 53.0514Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M18.9849 59.3188L18.4425 57.639L14.5405 60.4713L18.9849 59.3188Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "30.2319",
      "y": "41.3053",
      "width": "28.0725",
      "height": "28.0725",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip1_1_186)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M54.9874 53.0516H47.1834L44.7729 45.6242L42.3548 53.0516L34.5508 53.0441L40.8709 57.6391L38.4528 65.059L44.7729 60.4715L51.0854 65.059L48.6749 57.6391L54.9874 53.0516Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M49.2168 59.319L48.6745 57.6392L44.7725 60.4716L49.2168 59.319Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "60.4639",
      "y": "41.3053",
      "width": "28.0725",
      "height": "28.0725",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip2_1_186)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M85.2194 53.0516H77.4153L75.0048 45.6242L72.5868 53.0516L64.7827 53.0441L71.1028 57.6391L68.6847 65.059L75.0048 60.4715L81.3173 65.059L78.9068 57.6391L85.2194 53.0516Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M79.4488 59.319L78.9064 57.6392L75.0044 60.4716L79.4488 59.319Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "90.6958",
      "y": "41.3053",
      "width": "28.0725",
      "height": "28.0725",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip3_1_186)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M115.451 53.0516H107.647L105.237 45.6242L102.819 53.0516L95.0146 53.0441L101.335 57.6391L98.9167 65.059L105.237 60.4715L111.549 65.059L109.139 57.6391L115.451 53.0516Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M109.681 59.319L109.138 57.6392L105.236 60.4716L109.681 59.319Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "120.927",
      "y": "41.3053",
      "width": "28.0725",
      "height": "28.0725",
      "fill": "#C5C5C5"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip4_1_186)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M145.683 53.0516H137.879L135.468 45.6242L133.05 53.0516L125.246 53.0441L131.566 57.6391L129.148 65.059L135.468 60.4715L141.781 65.059L139.37 57.6391L145.683 53.0516Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M139.912 59.319L139.37 57.6392L135.468 60.4716L139.912 59.319Z",
      "fill": "#00532C"
    }
  })]), _c('defs', [_c('clipPath', {
    attrs: {
      "id": "clip0_1_186"
    }
  }, [_c('rect', {
    attrs: {
      "width": "20.4367",
      "height": "19.4348",
      "fill": "white",
      "transform": "translate(4.31885 45.624)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip1_1_186"
    }
  }, [_c('rect', {
    attrs: {
      "width": "20.4367",
      "height": "19.4348",
      "fill": "white",
      "transform": "translate(34.5508 45.6242)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip2_1_186"
    }
  }, [_c('rect', {
    attrs: {
      "width": "20.4367",
      "height": "19.4348",
      "fill": "white",
      "transform": "translate(64.7827 45.6242)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip3_1_186"
    }
  }, [_c('rect', {
    attrs: {
      "width": "20.4367",
      "height": "19.4348",
      "fill": "white",
      "transform": "translate(95.0146 45.6242)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip4_1_186"
    }
  }, [_c('rect', {
    attrs: {
      "width": "20.4367",
      "height": "19.4348",
      "fill": "white",
      "transform": "translate(125.246 45.6242)"
    }
  })])])])]);
};
var Frame1000004784vue_type_template_id_e3d96738_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Frame1000004784.vue?vue&type=template&id=e3d96738

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
// EXTERNAL MODULE: ./src/components/Frame1000004784.vue?vue&type=style&index=0&id=e3d96738&prod&lang=sass
var Frame1000004784vue_type_style_index_0_id_e3d96738_prod_lang_sass = __webpack_require__("a612");

// CONCATENATED MODULE: ./src/components/Frame1000004784.vue






/* normalize component */

var Frame1000004784_component = Object(componentNormalizer["a" /* default */])(
  components_Frame1000004784vue_type_script_lang_js,
  Frame1000004784vue_type_template_id_e3d96738_render,
  Frame1000004784vue_type_template_id_e3d96738_staticRenderFns,
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
// EXTERNAL MODULE: ./src/components/Landingspagina.vue?vue&type=style&index=0&id=123b36df&prod&lang=sass
var Landingspaginavue_type_style_index_0_id_123b36df_prod_lang_sass = __webpack_require__("bfe0");

// CONCATENATED MODULE: ./src/components/Landingspagina.vue






/* normalize component */

var Landingspagina_component = Object(componentNormalizer["a" /* default */])(
  components_Landingspaginavue_type_script_lang_js,
  Landingspaginavue_type_template_id_123b36df_render,
  Landingspaginavue_type_template_id_123b36df_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Landingspagina = (Landingspagina_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina1.vue?vue&type=template&id=10f5238d
var Pagina1vue_type_template_id_10f5238d_render = function render() {
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
  }), _c('svg', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "width": "100",
      "height": "46",
      "viewBox": "0 0 100 46",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('mask', {
    staticStyle: {
      "mask-type": "luminance"
    },
    attrs: {
      "id": "mask0_13_162",
      "maskUnits": "userSpaceOnUse",
      "x": "0",
      "y": "0",
      "width": "75",
      "height": "19"
    }
  }, [_c('path', {
    attrs: {
      "d": "M74.3438 0H0.367188V18.1631H74.3438V0Z",
      "fill": "white"
    }
  })]), _c('g', {
    attrs: {
      "mask": "url(#mask0_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M19.7966 6.44794H27.2806V7.85839H24.3446V15.7166H22.7327V7.8296H19.7966V6.44794ZM26.964 8.98099H28.3457V10.2763H28.3745C28.432 10.1036 28.5184 9.93088 28.6335 9.75818C28.7487 9.58547 28.9214 9.41276 29.0941 9.29762C29.2668 9.1537 29.4683 9.03856 29.6698 8.9522C29.8713 8.86585 30.1015 8.80828 30.3318 8.80828C30.5045 8.80828 30.6197 8.80828 30.6772 8.80828C30.7348 8.80828 30.8212 8.83707 30.8787 8.83707V10.2475C30.7636 10.2187 30.6772 10.2187 30.5621 10.1899C30.447 10.1899 30.3606 10.1612 30.2455 10.1612C29.9864 10.1612 29.7561 10.2187 29.5546 10.3051C29.3244 10.3914 29.1516 10.5641 28.9789 10.7369C28.8062 10.9383 28.6911 11.1686 28.576 11.4565C28.4896 11.7443 28.432 12.0609 28.432 12.4351V15.6302H26.964V8.98099ZM37.6719 15.6878H36.2327V14.7667H36.2039C36.0312 15.1121 35.7433 15.3712 35.3979 15.5727C35.0525 15.7742 34.6783 15.8893 34.3041 15.8893C33.4118 15.8893 32.7785 15.6878 32.4043 15.2273C32.0013 14.7955 31.8286 14.1334 31.8286 13.2411V8.98099H33.2966V13.0972C33.2966 13.6729 33.4118 14.1047 33.6421 14.3349C33.8723 14.5652 34.189 14.7091 34.5919 14.7091C34.9086 14.7091 35.1676 14.6516 35.3691 14.5652C35.5706 14.4789 35.7433 14.3349 35.8585 14.191C36.0024 14.0471 36.0888 13.8456 36.1463 13.6153C36.2039 13.385 36.2327 13.1548 36.2327 12.8957V9.00977H37.7007V15.6878H37.6719ZM40.205 13.529C40.2625 13.9607 40.4065 14.2486 40.6943 14.4501C40.9821 14.6228 41.3276 14.7091 41.7305 14.7091C41.8745 14.7091 42.0184 14.7091 42.1911 14.6804C42.3638 14.6516 42.5365 14.6228 42.6804 14.5652C42.8244 14.5076 42.9683 14.4213 43.0546 14.3062C43.141 14.191 43.1986 14.0471 43.1986 13.8456C43.1986 13.6441 43.1122 13.5002 42.9971 13.385C42.8531 13.2699 42.7092 13.1836 42.5077 13.0972C42.3062 13.0396 42.076 12.9533 41.8169 12.8957C41.5578 12.8381 41.2988 12.7806 41.0397 12.723C40.7519 12.6654 40.4928 12.5791 40.2337 12.4927C39.9747 12.4064 39.7444 12.2912 39.5429 12.1473C39.3414 12.0034 39.1687 11.8019 39.0536 11.5716C38.9384 11.3413 38.8809 11.0535 38.8809 10.7369C38.8809 10.3627 38.9672 10.0748 39.1399 9.81574C39.3126 9.55668 39.5429 9.38397 39.802 9.21127C40.0898 9.06734 40.3777 8.9522 40.7231 8.89463C41.0685 8.83706 41.3851 8.80828 41.673 8.80828C42.0184 8.80828 42.3638 8.83706 42.6517 8.92342C42.9683 8.98099 43.2561 9.12491 43.5152 9.26884C43.7743 9.44154 43.9758 9.64304 44.1485 9.9021C44.3212 10.1612 44.4363 10.4778 44.4651 10.852H42.9107C42.8531 10.5066 42.6804 10.2475 42.4214 10.1324C42.1623 10.0172 41.8745 9.95967 41.5578 9.95967C41.4427 9.95967 41.3276 9.95967 41.1836 9.98845C41.0397 10.0172 40.8958 10.046 40.7807 10.0748C40.6655 10.1324 40.5504 10.1899 40.464 10.2763C40.3777 10.3627 40.3201 10.4778 40.3201 10.6217C40.3201 10.7944 40.3777 10.9383 40.5216 11.0535C40.6367 11.1686 40.8094 11.255 41.0109 11.3413C41.2124 11.3989 41.4427 11.4853 41.7018 11.5428C41.9608 11.6004 42.2199 11.658 42.5077 11.7155C42.7668 11.7731 43.0259 11.8595 43.2849 11.9458C43.544 12.0322 43.7743 12.1473 43.9757 12.2912C44.1772 12.4351 44.3499 12.6366 44.4651 12.8381C44.5802 13.0396 44.6666 13.3275 44.6666 13.6729C44.6666 14.0759 44.5802 14.3925 44.3787 14.6804C44.206 14.9682 43.947 15.1697 43.6879 15.3424C43.4001 15.5151 43.0834 15.6302 42.7092 15.7166C42.3638 15.803 42.0184 15.8317 41.6442 15.8317C41.2124 15.8317 40.8382 15.7742 40.464 15.6878C40.1186 15.6015 39.802 15.4575 39.5429 15.256C39.2839 15.0546 39.0824 14.8243 38.9096 14.5364C38.7657 14.2486 38.6794 13.9032 38.6794 13.5002L40.205 13.529ZM45.0696 8.98099H46.1922V6.96606H47.6602V8.98099H48.9843V10.0748H47.6602V13.6441C47.6602 13.788 47.6602 13.932 47.689 14.0471C47.689 14.1622 47.7465 14.2486 47.7753 14.3349C47.8329 14.4213 47.8905 14.4789 47.9768 14.5076C48.0632 14.5364 48.2071 14.5652 48.3798 14.5652C48.4949 14.5652 48.5813 14.5652 48.6964 14.5652C48.8116 14.5652 48.8979 14.5364 49.0131 14.5076V15.659C48.8404 15.6878 48.6964 15.6878 48.5237 15.7166C48.3798 15.7454 48.2071 15.7454 48.0344 15.7454C47.6314 15.7454 47.3436 15.7166 47.0845 15.6302C46.8542 15.5727 46.6527 15.4575 46.5376 15.3136C46.3937 15.1697 46.3073 14.997 46.2497 14.7667C46.1922 14.5652 46.1634 14.3062 46.1634 14.0183V10.1036H45.0408L45.0696 8.98099ZM50.0493 8.98099H51.4598V9.9021H51.4886C51.69 9.49911 51.9779 9.24005 52.3521 9.06734C52.7263 8.89463 53.1293 8.80828 53.561 8.80828C54.0792 8.80828 54.5397 8.89463 54.9427 9.09613C55.3457 9.26884 55.6623 9.5279 55.9214 9.87331C56.1804 10.1899 56.3819 10.5929 56.4971 10.9959C56.641 11.4277 56.6986 11.8882 56.6986 12.3776C56.6986 12.8381 56.641 13.2699 56.5259 13.6729C56.4107 14.1047 56.238 14.4789 56.0077 14.7955C55.7775 15.1121 55.4608 15.3712 55.1154 15.5727C54.7412 15.7742 54.3382 15.8605 53.8201 15.8605C53.6186 15.8605 53.3883 15.8317 53.1868 15.803C52.9854 15.7742 52.7551 15.6878 52.5536 15.6015C52.3521 15.5151 52.1794 15.4 52.0067 15.256C51.834 15.1121 51.69 14.9682 51.5749 14.7955H51.5461V18.1345H50.0781V8.98099H50.0493ZM55.2018 12.3488C55.2018 12.0609 55.173 11.7443 55.0866 11.4565C55.0003 11.1686 54.8851 10.9096 54.7412 10.7081C54.5973 10.4778 54.3958 10.3051 54.1655 10.1899C53.9352 10.046 53.6762 9.98845 53.3596 9.98845C52.7263 9.98845 52.2657 10.1899 51.9491 10.6217C51.6325 11.0535 51.4886 11.6292 51.4886 12.3488C51.4886 12.6942 51.5173 13.0108 51.6037 13.2987C51.69 13.5865 51.8052 13.8456 51.9779 14.0471C52.1506 14.2486 52.3233 14.4213 52.5536 14.5364C52.7839 14.6516 53.0429 14.7091 53.3596 14.7091C53.705 14.7091 53.9928 14.6516 54.2231 14.5076C54.4534 14.3637 54.6549 14.191 54.7988 13.9607C54.9427 13.7305 55.0578 13.5002 55.1154 13.2123C55.173 12.9245 55.2018 12.6366 55.2018 12.3488ZM57.7924 6.44794H59.2604V7.85839H57.7924V6.44794ZM57.7924 8.98099H59.2604V15.6878H57.7924V8.98099ZM60.5845 6.44794H62.0525V15.6878H60.5845V6.44794ZM66.6005 15.8605C66.0536 15.8605 65.593 15.7742 65.1613 15.6015C64.7295 15.4288 64.3841 15.1697 64.0962 14.8818C63.8084 14.5652 63.5781 14.191 63.4342 13.7592C63.2903 13.3275 63.2039 12.8381 63.2039 12.3488C63.2039 11.8307 63.2903 11.3701 63.4342 10.9383C63.5781 10.5066 63.8084 10.1324 64.0962 9.81574C64.3841 9.49911 64.7295 9.26884 65.1613 9.09613C65.593 8.92342 66.0536 8.83707 66.6005 8.83707C67.1474 8.83707 67.608 8.92342 68.0397 9.09613C68.4715 9.26884 68.8169 9.5279 69.1048 9.81574C69.3926 10.1324 69.6229 10.5066 69.7668 10.9383C69.9107 11.3701 69.9971 11.8307 69.9971 12.3488C69.9971 12.8669 69.9107 13.3275 69.7668 13.7592C69.6229 14.191 69.3926 14.5652 69.1048 14.8818C68.8169 15.1985 68.4715 15.4288 68.0397 15.6015C67.608 15.7742 67.1474 15.8605 66.6005 15.8605ZM66.6005 14.7091C66.9171 14.7091 67.205 14.6516 67.464 14.5076C67.6943 14.3637 67.8958 14.191 68.0685 13.9607C68.2124 13.7305 68.3276 13.4714 68.4139 13.2123C68.4715 12.9245 68.5291 12.6366 68.5291 12.3488C68.5291 12.0609 68.5003 11.7731 68.4139 11.4853C68.3564 11.1974 68.2124 10.9383 68.0685 10.7369C67.9246 10.5066 67.7231 10.3339 67.464 10.1899C67.2338 10.046 66.9459 9.98845 66.6005 9.98845C66.2839 9.98845 65.996 10.046 65.737 10.1899C65.5067 10.3339 65.3052 10.5066 65.1325 10.7369C64.9886 10.9671 64.8734 11.1974 64.7871 11.4853C64.7295 11.7731 64.6719 12.0609 64.6719 12.3488C64.6719 12.6366 64.7007 12.9245 64.7871 13.2123C64.8446 13.5002 64.9886 13.7592 65.1325 13.9607C65.2764 14.191 65.4779 14.3637 65.737 14.5076C65.996 14.6516 66.2839 14.7091 66.6005 14.7091ZM70.4001 8.98099H71.5227V6.96606H72.9907V8.98099H74.3148V10.0748H72.9907V13.6441C72.9907 13.788 72.9907 13.932 73.0195 14.0471C73.0195 14.1622 73.077 14.2486 73.1058 14.3349C73.1634 14.4213 73.221 14.4789 73.3073 14.5076C73.3937 14.5364 73.5376 14.5652 73.7103 14.5652C73.8254 14.5652 73.9118 14.5652 74.0269 14.5652C74.1421 14.5652 74.2284 14.5364 74.3436 14.5076V15.659C74.1709 15.6878 74.0269 15.6878 73.8542 15.7166C73.7103 15.7454 73.5376 15.7454 73.3649 15.7454C72.9619 15.7454 72.6741 15.7166 72.415 15.6302C72.1847 15.5727 71.9832 15.4575 71.8681 15.3136C71.7242 15.1697 71.6378 14.997 71.5802 14.7667C71.5227 14.5652 71.4939 14.3062 71.4939 14.0183V10.1036H70.3713L70.4001 8.98099Z",
      "fill": "#191919"
    }
  }), _c('path', {
    attrs: {
      "d": "M18.0698 6.44777H11.3054L9.23287 0L7.13159 6.44777L0.367188 6.41898L5.83628 10.3913L3.73499 16.8102L9.20408 12.838L14.6732 16.8102L12.5719 10.3913L18.0698 6.44777Z",
      "fill": "#04DA8D"
    }
  }), _c('path', {
    attrs: {
      "d": "M13.0898 11.8594L12.6293 10.3914L9.23267 12.8381L13.0898 11.8594Z",
      "fill": "#005128"
    }
  })]), _c('rect', {
    attrs: {
      "x": "0.367188",
      "y": "26.8933",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip0_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M16.7804 34.6812H11.6063L10.0081 29.7568L8.40488 34.6812L3.23071 34.6762L7.42099 37.7228L5.8178 42.6422L10.0081 39.6007L14.1934 42.6422L12.5952 37.7228L16.7804 34.6812Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M12.9545 38.8366L12.5949 37.7229L10.0078 39.6008L12.9545 38.8366Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "20.4114",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip1_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M36.8244 34.6814H31.6502L30.052 29.7569L28.4488 34.6814L23.2747 34.6764L27.4649 37.7229L25.8617 42.6424L30.052 39.6008L34.2373 42.6424L32.6391 37.7229L36.8244 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M32.9982 38.8368L32.6386 37.7231L30.0515 39.6009L32.9982 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "40.4553",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip2_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M56.8686 34.6814H51.6944L50.0962 29.7569L48.493 34.6814L43.3188 34.6764L47.5091 37.7229L45.9059 42.6424L50.0962 39.6008L54.2815 42.6424L52.6833 37.7229L56.8686 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M53.0426 38.8368L52.683 37.7231L50.0959 39.6009L53.0426 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "60.4995",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip3_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M76.9128 34.6814H71.7386L70.1404 29.7569L68.5372 34.6814L63.363 34.6764L67.5533 37.7229L65.9501 42.6424L70.1404 39.6008L74.3257 42.6424L72.7275 37.7229L76.9128 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M73.0868 38.8368L72.7272 37.7231L70.1401 39.6009L73.0868 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "80.5435",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#C5C5C5"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip4_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M96.9565 34.6814H91.7823L90.1841 29.7569L88.5809 34.6814L83.4067 34.6764L87.597 37.7229L85.9938 42.6424L90.1841 39.6008L94.3694 42.6424L92.7712 37.7229L96.9565 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M93.1308 38.8368L92.7712 37.7231L90.1841 39.6009L93.1308 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('defs', [_c('clipPath', {
    attrs: {
      "id": "clip0_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(3.23071 29.7568)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip1_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(23.2747 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip2_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(43.3188 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip3_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(63.363 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip4_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(83.4067 29.7569)"
    }
  })])])])]), _c('div', {
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
      "src": "/img/afbeeldingen-samen-mobiel.b5031825.png",
      "alt": "doe het alsjeblieft"
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
var Pagina1vue_type_template_id_10f5238d_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina1.vue?vue&type=template&id=10f5238d

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
        this.$store.commit('ADD_ANTWOORD', {
          vraag: 'antwoord1',
          antwoord: this.chosenProduct
        });
        this.$router.push({
          path: '/pagina-2'
        });
      } else {
        this.errorMessage = 'Kies alstublieft een product voordat je verder gaat.';
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Pagina1.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina1vue_type_script_lang_js = (Pagina1vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina1.vue?vue&type=style&index=0&id=10f5238d&prod&lang=sass
var Pagina1vue_type_style_index_0_id_10f5238d_prod_lang_sass = __webpack_require__("b9c4");

// CONCATENATED MODULE: ./src/components/Pagina1.vue






/* normalize component */

var Pagina1_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina1vue_type_script_lang_js,
  Pagina1vue_type_template_id_10f5238d_render,
  Pagina1vue_type_template_id_10f5238d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina1 = (Pagina1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina2.vue?vue&type=template&id=4bb70f06
var Pagina2vue_type_template_id_4bb70f06_render = function render() {
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
  }), _c('svg', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "width": "100",
      "height": "46",
      "viewBox": "0 0 100 46",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('mask', {
    staticStyle: {
      "mask-type": "luminance"
    },
    attrs: {
      "id": "mask0_13_162",
      "maskUnits": "userSpaceOnUse",
      "x": "0",
      "y": "0",
      "width": "75",
      "height": "19"
    }
  }, [_c('path', {
    attrs: {
      "d": "M74.3438 0H0.367188V18.1631H74.3438V0Z",
      "fill": "white"
    }
  })]), _c('g', {
    attrs: {
      "mask": "url(#mask0_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M19.7966 6.44794H27.2806V7.85839H24.3446V15.7166H22.7327V7.8296H19.7966V6.44794ZM26.964 8.98099H28.3457V10.2763H28.3745C28.432 10.1036 28.5184 9.93088 28.6335 9.75818C28.7487 9.58547 28.9214 9.41276 29.0941 9.29762C29.2668 9.1537 29.4683 9.03856 29.6698 8.9522C29.8713 8.86585 30.1015 8.80828 30.3318 8.80828C30.5045 8.80828 30.6197 8.80828 30.6772 8.80828C30.7348 8.80828 30.8212 8.83707 30.8787 8.83707V10.2475C30.7636 10.2187 30.6772 10.2187 30.5621 10.1899C30.447 10.1899 30.3606 10.1612 30.2455 10.1612C29.9864 10.1612 29.7561 10.2187 29.5546 10.3051C29.3244 10.3914 29.1516 10.5641 28.9789 10.7369C28.8062 10.9383 28.6911 11.1686 28.576 11.4565C28.4896 11.7443 28.432 12.0609 28.432 12.4351V15.6302H26.964V8.98099ZM37.6719 15.6878H36.2327V14.7667H36.2039C36.0312 15.1121 35.7433 15.3712 35.3979 15.5727C35.0525 15.7742 34.6783 15.8893 34.3041 15.8893C33.4118 15.8893 32.7785 15.6878 32.4043 15.2273C32.0013 14.7955 31.8286 14.1334 31.8286 13.2411V8.98099H33.2966V13.0972C33.2966 13.6729 33.4118 14.1047 33.6421 14.3349C33.8723 14.5652 34.189 14.7091 34.5919 14.7091C34.9086 14.7091 35.1676 14.6516 35.3691 14.5652C35.5706 14.4789 35.7433 14.3349 35.8585 14.191C36.0024 14.0471 36.0888 13.8456 36.1463 13.6153C36.2039 13.385 36.2327 13.1548 36.2327 12.8957V9.00977H37.7007V15.6878H37.6719ZM40.205 13.529C40.2625 13.9607 40.4065 14.2486 40.6943 14.4501C40.9821 14.6228 41.3276 14.7091 41.7305 14.7091C41.8745 14.7091 42.0184 14.7091 42.1911 14.6804C42.3638 14.6516 42.5365 14.6228 42.6804 14.5652C42.8244 14.5076 42.9683 14.4213 43.0546 14.3062C43.141 14.191 43.1986 14.0471 43.1986 13.8456C43.1986 13.6441 43.1122 13.5002 42.9971 13.385C42.8531 13.2699 42.7092 13.1836 42.5077 13.0972C42.3062 13.0396 42.076 12.9533 41.8169 12.8957C41.5578 12.8381 41.2988 12.7806 41.0397 12.723C40.7519 12.6654 40.4928 12.5791 40.2337 12.4927C39.9747 12.4064 39.7444 12.2912 39.5429 12.1473C39.3414 12.0034 39.1687 11.8019 39.0536 11.5716C38.9384 11.3413 38.8809 11.0535 38.8809 10.7369C38.8809 10.3627 38.9672 10.0748 39.1399 9.81574C39.3126 9.55668 39.5429 9.38397 39.802 9.21127C40.0898 9.06734 40.3777 8.9522 40.7231 8.89463C41.0685 8.83706 41.3851 8.80828 41.673 8.80828C42.0184 8.80828 42.3638 8.83706 42.6517 8.92342C42.9683 8.98099 43.2561 9.12491 43.5152 9.26884C43.7743 9.44154 43.9758 9.64304 44.1485 9.9021C44.3212 10.1612 44.4363 10.4778 44.4651 10.852H42.9107C42.8531 10.5066 42.6804 10.2475 42.4214 10.1324C42.1623 10.0172 41.8745 9.95967 41.5578 9.95967C41.4427 9.95967 41.3276 9.95967 41.1836 9.98845C41.0397 10.0172 40.8958 10.046 40.7807 10.0748C40.6655 10.1324 40.5504 10.1899 40.464 10.2763C40.3777 10.3627 40.3201 10.4778 40.3201 10.6217C40.3201 10.7944 40.3777 10.9383 40.5216 11.0535C40.6367 11.1686 40.8094 11.255 41.0109 11.3413C41.2124 11.3989 41.4427 11.4853 41.7018 11.5428C41.9608 11.6004 42.2199 11.658 42.5077 11.7155C42.7668 11.7731 43.0259 11.8595 43.2849 11.9458C43.544 12.0322 43.7743 12.1473 43.9757 12.2912C44.1772 12.4351 44.3499 12.6366 44.4651 12.8381C44.5802 13.0396 44.6666 13.3275 44.6666 13.6729C44.6666 14.0759 44.5802 14.3925 44.3787 14.6804C44.206 14.9682 43.947 15.1697 43.6879 15.3424C43.4001 15.5151 43.0834 15.6302 42.7092 15.7166C42.3638 15.803 42.0184 15.8317 41.6442 15.8317C41.2124 15.8317 40.8382 15.7742 40.464 15.6878C40.1186 15.6015 39.802 15.4575 39.5429 15.256C39.2839 15.0546 39.0824 14.8243 38.9096 14.5364C38.7657 14.2486 38.6794 13.9032 38.6794 13.5002L40.205 13.529ZM45.0696 8.98099H46.1922V6.96606H47.6602V8.98099H48.9843V10.0748H47.6602V13.6441C47.6602 13.788 47.6602 13.932 47.689 14.0471C47.689 14.1622 47.7465 14.2486 47.7753 14.3349C47.8329 14.4213 47.8905 14.4789 47.9768 14.5076C48.0632 14.5364 48.2071 14.5652 48.3798 14.5652C48.4949 14.5652 48.5813 14.5652 48.6964 14.5652C48.8116 14.5652 48.8979 14.5364 49.0131 14.5076V15.659C48.8404 15.6878 48.6964 15.6878 48.5237 15.7166C48.3798 15.7454 48.2071 15.7454 48.0344 15.7454C47.6314 15.7454 47.3436 15.7166 47.0845 15.6302C46.8542 15.5727 46.6527 15.4575 46.5376 15.3136C46.3937 15.1697 46.3073 14.997 46.2497 14.7667C46.1922 14.5652 46.1634 14.3062 46.1634 14.0183V10.1036H45.0408L45.0696 8.98099ZM50.0493 8.98099H51.4598V9.9021H51.4886C51.69 9.49911 51.9779 9.24005 52.3521 9.06734C52.7263 8.89463 53.1293 8.80828 53.561 8.80828C54.0792 8.80828 54.5397 8.89463 54.9427 9.09613C55.3457 9.26884 55.6623 9.5279 55.9214 9.87331C56.1804 10.1899 56.3819 10.5929 56.4971 10.9959C56.641 11.4277 56.6986 11.8882 56.6986 12.3776C56.6986 12.8381 56.641 13.2699 56.5259 13.6729C56.4107 14.1047 56.238 14.4789 56.0077 14.7955C55.7775 15.1121 55.4608 15.3712 55.1154 15.5727C54.7412 15.7742 54.3382 15.8605 53.8201 15.8605C53.6186 15.8605 53.3883 15.8317 53.1868 15.803C52.9854 15.7742 52.7551 15.6878 52.5536 15.6015C52.3521 15.5151 52.1794 15.4 52.0067 15.256C51.834 15.1121 51.69 14.9682 51.5749 14.7955H51.5461V18.1345H50.0781V8.98099H50.0493ZM55.2018 12.3488C55.2018 12.0609 55.173 11.7443 55.0866 11.4565C55.0003 11.1686 54.8851 10.9096 54.7412 10.7081C54.5973 10.4778 54.3958 10.3051 54.1655 10.1899C53.9352 10.046 53.6762 9.98845 53.3596 9.98845C52.7263 9.98845 52.2657 10.1899 51.9491 10.6217C51.6325 11.0535 51.4886 11.6292 51.4886 12.3488C51.4886 12.6942 51.5173 13.0108 51.6037 13.2987C51.69 13.5865 51.8052 13.8456 51.9779 14.0471C52.1506 14.2486 52.3233 14.4213 52.5536 14.5364C52.7839 14.6516 53.0429 14.7091 53.3596 14.7091C53.705 14.7091 53.9928 14.6516 54.2231 14.5076C54.4534 14.3637 54.6549 14.191 54.7988 13.9607C54.9427 13.7305 55.0578 13.5002 55.1154 13.2123C55.173 12.9245 55.2018 12.6366 55.2018 12.3488ZM57.7924 6.44794H59.2604V7.85839H57.7924V6.44794ZM57.7924 8.98099H59.2604V15.6878H57.7924V8.98099ZM60.5845 6.44794H62.0525V15.6878H60.5845V6.44794ZM66.6005 15.8605C66.0536 15.8605 65.593 15.7742 65.1613 15.6015C64.7295 15.4288 64.3841 15.1697 64.0962 14.8818C63.8084 14.5652 63.5781 14.191 63.4342 13.7592C63.2903 13.3275 63.2039 12.8381 63.2039 12.3488C63.2039 11.8307 63.2903 11.3701 63.4342 10.9383C63.5781 10.5066 63.8084 10.1324 64.0962 9.81574C64.3841 9.49911 64.7295 9.26884 65.1613 9.09613C65.593 8.92342 66.0536 8.83707 66.6005 8.83707C67.1474 8.83707 67.608 8.92342 68.0397 9.09613C68.4715 9.26884 68.8169 9.5279 69.1048 9.81574C69.3926 10.1324 69.6229 10.5066 69.7668 10.9383C69.9107 11.3701 69.9971 11.8307 69.9971 12.3488C69.9971 12.8669 69.9107 13.3275 69.7668 13.7592C69.6229 14.191 69.3926 14.5652 69.1048 14.8818C68.8169 15.1985 68.4715 15.4288 68.0397 15.6015C67.608 15.7742 67.1474 15.8605 66.6005 15.8605ZM66.6005 14.7091C66.9171 14.7091 67.205 14.6516 67.464 14.5076C67.6943 14.3637 67.8958 14.191 68.0685 13.9607C68.2124 13.7305 68.3276 13.4714 68.4139 13.2123C68.4715 12.9245 68.5291 12.6366 68.5291 12.3488C68.5291 12.0609 68.5003 11.7731 68.4139 11.4853C68.3564 11.1974 68.2124 10.9383 68.0685 10.7369C67.9246 10.5066 67.7231 10.3339 67.464 10.1899C67.2338 10.046 66.9459 9.98845 66.6005 9.98845C66.2839 9.98845 65.996 10.046 65.737 10.1899C65.5067 10.3339 65.3052 10.5066 65.1325 10.7369C64.9886 10.9671 64.8734 11.1974 64.7871 11.4853C64.7295 11.7731 64.6719 12.0609 64.6719 12.3488C64.6719 12.6366 64.7007 12.9245 64.7871 13.2123C64.8446 13.5002 64.9886 13.7592 65.1325 13.9607C65.2764 14.191 65.4779 14.3637 65.737 14.5076C65.996 14.6516 66.2839 14.7091 66.6005 14.7091ZM70.4001 8.98099H71.5227V6.96606H72.9907V8.98099H74.3148V10.0748H72.9907V13.6441C72.9907 13.788 72.9907 13.932 73.0195 14.0471C73.0195 14.1622 73.077 14.2486 73.1058 14.3349C73.1634 14.4213 73.221 14.4789 73.3073 14.5076C73.3937 14.5364 73.5376 14.5652 73.7103 14.5652C73.8254 14.5652 73.9118 14.5652 74.0269 14.5652C74.1421 14.5652 74.2284 14.5364 74.3436 14.5076V15.659C74.1709 15.6878 74.0269 15.6878 73.8542 15.7166C73.7103 15.7454 73.5376 15.7454 73.3649 15.7454C72.9619 15.7454 72.6741 15.7166 72.415 15.6302C72.1847 15.5727 71.9832 15.4575 71.8681 15.3136C71.7242 15.1697 71.6378 14.997 71.5802 14.7667C71.5227 14.5652 71.4939 14.3062 71.4939 14.0183V10.1036H70.3713L70.4001 8.98099Z",
      "fill": "#191919"
    }
  }), _c('path', {
    attrs: {
      "d": "M18.0698 6.44777H11.3054L9.23287 0L7.13159 6.44777L0.367188 6.41898L5.83628 10.3913L3.73499 16.8102L9.20408 12.838L14.6732 16.8102L12.5719 10.3913L18.0698 6.44777Z",
      "fill": "#04DA8D"
    }
  }), _c('path', {
    attrs: {
      "d": "M13.0898 11.8594L12.6293 10.3914L9.23267 12.8381L13.0898 11.8594Z",
      "fill": "#005128"
    }
  })]), _c('rect', {
    attrs: {
      "x": "0.367188",
      "y": "26.8933",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip0_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M16.7804 34.6812H11.6063L10.0081 29.7568L8.40488 34.6812L3.23071 34.6762L7.42099 37.7228L5.8178 42.6422L10.0081 39.6007L14.1934 42.6422L12.5952 37.7228L16.7804 34.6812Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M12.9545 38.8366L12.5949 37.7229L10.0078 39.6008L12.9545 38.8366Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "20.4114",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip1_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M36.8244 34.6814H31.6502L30.052 29.7569L28.4488 34.6814L23.2747 34.6764L27.4649 37.7229L25.8617 42.6424L30.052 39.6008L34.2373 42.6424L32.6391 37.7229L36.8244 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M32.9982 38.8368L32.6386 37.7231L30.0515 39.6009L32.9982 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "40.4553",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip2_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M56.8686 34.6814H51.6944L50.0962 29.7569L48.493 34.6814L43.3188 34.6764L47.5091 37.7229L45.9059 42.6424L50.0962 39.6008L54.2815 42.6424L52.6833 37.7229L56.8686 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M53.0426 38.8368L52.683 37.7231L50.0959 39.6009L53.0426 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "60.4995",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip3_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M76.9128 34.6814H71.7386L70.1404 29.7569L68.5372 34.6814L63.363 34.6764L67.5533 37.7229L65.9501 42.6424L70.1404 39.6008L74.3257 42.6424L72.7275 37.7229L76.9128 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M73.0868 38.8368L72.7272 37.7231L70.1401 39.6009L73.0868 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "80.5435",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#C5C5C5"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip4_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M96.9565 34.6814H91.7823L90.1841 29.7569L88.5809 34.6814L83.4067 34.6764L87.597 37.7229L85.9938 42.6424L90.1841 39.6008L94.3694 42.6424L92.7712 37.7229L96.9565 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M93.1308 38.8368L92.7712 37.7231L90.1841 39.6009L93.1308 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('defs', [_c('clipPath', {
    attrs: {
      "id": "clip0_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(3.23071 29.7568)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip1_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(23.2747 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip2_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(43.3188 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip3_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(63.363 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip4_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(83.4067 29.7569)"
    }
  })])])])]), _c('div', {
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
  }, [_vm._v(" Laatste stap "), _c('span', {
    staticStyle: {
      "margin-left": "27px"
    }
  }, [_vm._v("→")])])])])]), _c('div', {
    staticClass: "container-afbeelding-prijzen-mobiel-2",
    style: _vm.errorMessage ? {
      top: '912px'
    } : {}
  }, [_c('img', {
    attrs: {
      "src": "/img/afbeeldingen-samen-mobiel.b5031825.png",
      "alt": "doe het alsjeblieft"
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
var Pagina2vue_type_template_id_4bb70f06_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina2.vue?vue&type=template&id=4bb70f06

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
// EXTERNAL MODULE: ./src/components/Pagina2.vue?vue&type=style&index=0&id=4bb70f06&prod&lang=sass
var Pagina2vue_type_style_index_0_id_4bb70f06_prod_lang_sass = __webpack_require__("7f90");

// CONCATENATED MODULE: ./src/components/Pagina2.vue






/* normalize component */

var Pagina2_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina2vue_type_script_lang_js,
  Pagina2vue_type_template_id_4bb70f06_render,
  Pagina2vue_type_template_id_4bb70f06_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina2 = (Pagina2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina3.vue?vue&type=template&id=3442f1cd
var Pagina3vue_type_template_id_3442f1cd_render = function render() {
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
  }), _c('svg', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "width": "100",
      "height": "46",
      "viewBox": "0 0 100 46",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('mask', {
    staticStyle: {
      "mask-type": "luminance"
    },
    attrs: {
      "id": "mask0_13_162",
      "maskUnits": "userSpaceOnUse",
      "x": "0",
      "y": "0",
      "width": "75",
      "height": "19"
    }
  }, [_c('path', {
    attrs: {
      "d": "M74.3438 0H0.367188V18.1631H74.3438V0Z",
      "fill": "white"
    }
  })]), _c('g', {
    attrs: {
      "mask": "url(#mask0_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M19.7966 6.44794H27.2806V7.85839H24.3446V15.7166H22.7327V7.8296H19.7966V6.44794ZM26.964 8.98099H28.3457V10.2763H28.3745C28.432 10.1036 28.5184 9.93088 28.6335 9.75818C28.7487 9.58547 28.9214 9.41276 29.0941 9.29762C29.2668 9.1537 29.4683 9.03856 29.6698 8.9522C29.8713 8.86585 30.1015 8.80828 30.3318 8.80828C30.5045 8.80828 30.6197 8.80828 30.6772 8.80828C30.7348 8.80828 30.8212 8.83707 30.8787 8.83707V10.2475C30.7636 10.2187 30.6772 10.2187 30.5621 10.1899C30.447 10.1899 30.3606 10.1612 30.2455 10.1612C29.9864 10.1612 29.7561 10.2187 29.5546 10.3051C29.3244 10.3914 29.1516 10.5641 28.9789 10.7369C28.8062 10.9383 28.6911 11.1686 28.576 11.4565C28.4896 11.7443 28.432 12.0609 28.432 12.4351V15.6302H26.964V8.98099ZM37.6719 15.6878H36.2327V14.7667H36.2039C36.0312 15.1121 35.7433 15.3712 35.3979 15.5727C35.0525 15.7742 34.6783 15.8893 34.3041 15.8893C33.4118 15.8893 32.7785 15.6878 32.4043 15.2273C32.0013 14.7955 31.8286 14.1334 31.8286 13.2411V8.98099H33.2966V13.0972C33.2966 13.6729 33.4118 14.1047 33.6421 14.3349C33.8723 14.5652 34.189 14.7091 34.5919 14.7091C34.9086 14.7091 35.1676 14.6516 35.3691 14.5652C35.5706 14.4789 35.7433 14.3349 35.8585 14.191C36.0024 14.0471 36.0888 13.8456 36.1463 13.6153C36.2039 13.385 36.2327 13.1548 36.2327 12.8957V9.00977H37.7007V15.6878H37.6719ZM40.205 13.529C40.2625 13.9607 40.4065 14.2486 40.6943 14.4501C40.9821 14.6228 41.3276 14.7091 41.7305 14.7091C41.8745 14.7091 42.0184 14.7091 42.1911 14.6804C42.3638 14.6516 42.5365 14.6228 42.6804 14.5652C42.8244 14.5076 42.9683 14.4213 43.0546 14.3062C43.141 14.191 43.1986 14.0471 43.1986 13.8456C43.1986 13.6441 43.1122 13.5002 42.9971 13.385C42.8531 13.2699 42.7092 13.1836 42.5077 13.0972C42.3062 13.0396 42.076 12.9533 41.8169 12.8957C41.5578 12.8381 41.2988 12.7806 41.0397 12.723C40.7519 12.6654 40.4928 12.5791 40.2337 12.4927C39.9747 12.4064 39.7444 12.2912 39.5429 12.1473C39.3414 12.0034 39.1687 11.8019 39.0536 11.5716C38.9384 11.3413 38.8809 11.0535 38.8809 10.7369C38.8809 10.3627 38.9672 10.0748 39.1399 9.81574C39.3126 9.55668 39.5429 9.38397 39.802 9.21127C40.0898 9.06734 40.3777 8.9522 40.7231 8.89463C41.0685 8.83706 41.3851 8.80828 41.673 8.80828C42.0184 8.80828 42.3638 8.83706 42.6517 8.92342C42.9683 8.98099 43.2561 9.12491 43.5152 9.26884C43.7743 9.44154 43.9758 9.64304 44.1485 9.9021C44.3212 10.1612 44.4363 10.4778 44.4651 10.852H42.9107C42.8531 10.5066 42.6804 10.2475 42.4214 10.1324C42.1623 10.0172 41.8745 9.95967 41.5578 9.95967C41.4427 9.95967 41.3276 9.95967 41.1836 9.98845C41.0397 10.0172 40.8958 10.046 40.7807 10.0748C40.6655 10.1324 40.5504 10.1899 40.464 10.2763C40.3777 10.3627 40.3201 10.4778 40.3201 10.6217C40.3201 10.7944 40.3777 10.9383 40.5216 11.0535C40.6367 11.1686 40.8094 11.255 41.0109 11.3413C41.2124 11.3989 41.4427 11.4853 41.7018 11.5428C41.9608 11.6004 42.2199 11.658 42.5077 11.7155C42.7668 11.7731 43.0259 11.8595 43.2849 11.9458C43.544 12.0322 43.7743 12.1473 43.9757 12.2912C44.1772 12.4351 44.3499 12.6366 44.4651 12.8381C44.5802 13.0396 44.6666 13.3275 44.6666 13.6729C44.6666 14.0759 44.5802 14.3925 44.3787 14.6804C44.206 14.9682 43.947 15.1697 43.6879 15.3424C43.4001 15.5151 43.0834 15.6302 42.7092 15.7166C42.3638 15.803 42.0184 15.8317 41.6442 15.8317C41.2124 15.8317 40.8382 15.7742 40.464 15.6878C40.1186 15.6015 39.802 15.4575 39.5429 15.256C39.2839 15.0546 39.0824 14.8243 38.9096 14.5364C38.7657 14.2486 38.6794 13.9032 38.6794 13.5002L40.205 13.529ZM45.0696 8.98099H46.1922V6.96606H47.6602V8.98099H48.9843V10.0748H47.6602V13.6441C47.6602 13.788 47.6602 13.932 47.689 14.0471C47.689 14.1622 47.7465 14.2486 47.7753 14.3349C47.8329 14.4213 47.8905 14.4789 47.9768 14.5076C48.0632 14.5364 48.2071 14.5652 48.3798 14.5652C48.4949 14.5652 48.5813 14.5652 48.6964 14.5652C48.8116 14.5652 48.8979 14.5364 49.0131 14.5076V15.659C48.8404 15.6878 48.6964 15.6878 48.5237 15.7166C48.3798 15.7454 48.2071 15.7454 48.0344 15.7454C47.6314 15.7454 47.3436 15.7166 47.0845 15.6302C46.8542 15.5727 46.6527 15.4575 46.5376 15.3136C46.3937 15.1697 46.3073 14.997 46.2497 14.7667C46.1922 14.5652 46.1634 14.3062 46.1634 14.0183V10.1036H45.0408L45.0696 8.98099ZM50.0493 8.98099H51.4598V9.9021H51.4886C51.69 9.49911 51.9779 9.24005 52.3521 9.06734C52.7263 8.89463 53.1293 8.80828 53.561 8.80828C54.0792 8.80828 54.5397 8.89463 54.9427 9.09613C55.3457 9.26884 55.6623 9.5279 55.9214 9.87331C56.1804 10.1899 56.3819 10.5929 56.4971 10.9959C56.641 11.4277 56.6986 11.8882 56.6986 12.3776C56.6986 12.8381 56.641 13.2699 56.5259 13.6729C56.4107 14.1047 56.238 14.4789 56.0077 14.7955C55.7775 15.1121 55.4608 15.3712 55.1154 15.5727C54.7412 15.7742 54.3382 15.8605 53.8201 15.8605C53.6186 15.8605 53.3883 15.8317 53.1868 15.803C52.9854 15.7742 52.7551 15.6878 52.5536 15.6015C52.3521 15.5151 52.1794 15.4 52.0067 15.256C51.834 15.1121 51.69 14.9682 51.5749 14.7955H51.5461V18.1345H50.0781V8.98099H50.0493ZM55.2018 12.3488C55.2018 12.0609 55.173 11.7443 55.0866 11.4565C55.0003 11.1686 54.8851 10.9096 54.7412 10.7081C54.5973 10.4778 54.3958 10.3051 54.1655 10.1899C53.9352 10.046 53.6762 9.98845 53.3596 9.98845C52.7263 9.98845 52.2657 10.1899 51.9491 10.6217C51.6325 11.0535 51.4886 11.6292 51.4886 12.3488C51.4886 12.6942 51.5173 13.0108 51.6037 13.2987C51.69 13.5865 51.8052 13.8456 51.9779 14.0471C52.1506 14.2486 52.3233 14.4213 52.5536 14.5364C52.7839 14.6516 53.0429 14.7091 53.3596 14.7091C53.705 14.7091 53.9928 14.6516 54.2231 14.5076C54.4534 14.3637 54.6549 14.191 54.7988 13.9607C54.9427 13.7305 55.0578 13.5002 55.1154 13.2123C55.173 12.9245 55.2018 12.6366 55.2018 12.3488ZM57.7924 6.44794H59.2604V7.85839H57.7924V6.44794ZM57.7924 8.98099H59.2604V15.6878H57.7924V8.98099ZM60.5845 6.44794H62.0525V15.6878H60.5845V6.44794ZM66.6005 15.8605C66.0536 15.8605 65.593 15.7742 65.1613 15.6015C64.7295 15.4288 64.3841 15.1697 64.0962 14.8818C63.8084 14.5652 63.5781 14.191 63.4342 13.7592C63.2903 13.3275 63.2039 12.8381 63.2039 12.3488C63.2039 11.8307 63.2903 11.3701 63.4342 10.9383C63.5781 10.5066 63.8084 10.1324 64.0962 9.81574C64.3841 9.49911 64.7295 9.26884 65.1613 9.09613C65.593 8.92342 66.0536 8.83707 66.6005 8.83707C67.1474 8.83707 67.608 8.92342 68.0397 9.09613C68.4715 9.26884 68.8169 9.5279 69.1048 9.81574C69.3926 10.1324 69.6229 10.5066 69.7668 10.9383C69.9107 11.3701 69.9971 11.8307 69.9971 12.3488C69.9971 12.8669 69.9107 13.3275 69.7668 13.7592C69.6229 14.191 69.3926 14.5652 69.1048 14.8818C68.8169 15.1985 68.4715 15.4288 68.0397 15.6015C67.608 15.7742 67.1474 15.8605 66.6005 15.8605ZM66.6005 14.7091C66.9171 14.7091 67.205 14.6516 67.464 14.5076C67.6943 14.3637 67.8958 14.191 68.0685 13.9607C68.2124 13.7305 68.3276 13.4714 68.4139 13.2123C68.4715 12.9245 68.5291 12.6366 68.5291 12.3488C68.5291 12.0609 68.5003 11.7731 68.4139 11.4853C68.3564 11.1974 68.2124 10.9383 68.0685 10.7369C67.9246 10.5066 67.7231 10.3339 67.464 10.1899C67.2338 10.046 66.9459 9.98845 66.6005 9.98845C66.2839 9.98845 65.996 10.046 65.737 10.1899C65.5067 10.3339 65.3052 10.5066 65.1325 10.7369C64.9886 10.9671 64.8734 11.1974 64.7871 11.4853C64.7295 11.7731 64.6719 12.0609 64.6719 12.3488C64.6719 12.6366 64.7007 12.9245 64.7871 13.2123C64.8446 13.5002 64.9886 13.7592 65.1325 13.9607C65.2764 14.191 65.4779 14.3637 65.737 14.5076C65.996 14.6516 66.2839 14.7091 66.6005 14.7091ZM70.4001 8.98099H71.5227V6.96606H72.9907V8.98099H74.3148V10.0748H72.9907V13.6441C72.9907 13.788 72.9907 13.932 73.0195 14.0471C73.0195 14.1622 73.077 14.2486 73.1058 14.3349C73.1634 14.4213 73.221 14.4789 73.3073 14.5076C73.3937 14.5364 73.5376 14.5652 73.7103 14.5652C73.8254 14.5652 73.9118 14.5652 74.0269 14.5652C74.1421 14.5652 74.2284 14.5364 74.3436 14.5076V15.659C74.1709 15.6878 74.0269 15.6878 73.8542 15.7166C73.7103 15.7454 73.5376 15.7454 73.3649 15.7454C72.9619 15.7454 72.6741 15.7166 72.415 15.6302C72.1847 15.5727 71.9832 15.4575 71.8681 15.3136C71.7242 15.1697 71.6378 14.997 71.5802 14.7667C71.5227 14.5652 71.4939 14.3062 71.4939 14.0183V10.1036H70.3713L70.4001 8.98099Z",
      "fill": "#191919"
    }
  }), _c('path', {
    attrs: {
      "d": "M18.0698 6.44777H11.3054L9.23287 0L7.13159 6.44777L0.367188 6.41898L5.83628 10.3913L3.73499 16.8102L9.20408 12.838L14.6732 16.8102L12.5719 10.3913L18.0698 6.44777Z",
      "fill": "#04DA8D"
    }
  }), _c('path', {
    attrs: {
      "d": "M13.0898 11.8594L12.6293 10.3914L9.23267 12.8381L13.0898 11.8594Z",
      "fill": "#005128"
    }
  })]), _c('rect', {
    attrs: {
      "x": "0.367188",
      "y": "26.8933",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip0_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M16.7804 34.6812H11.6063L10.0081 29.7568L8.40488 34.6812L3.23071 34.6762L7.42099 37.7228L5.8178 42.6422L10.0081 39.6007L14.1934 42.6422L12.5952 37.7228L16.7804 34.6812Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M12.9545 38.8366L12.5949 37.7229L10.0078 39.6008L12.9545 38.8366Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "20.4114",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip1_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M36.8244 34.6814H31.6502L30.052 29.7569L28.4488 34.6814L23.2747 34.6764L27.4649 37.7229L25.8617 42.6424L30.052 39.6008L34.2373 42.6424L32.6391 37.7229L36.8244 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M32.9982 38.8368L32.6386 37.7231L30.0515 39.6009L32.9982 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "40.4553",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip2_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M56.8686 34.6814H51.6944L50.0962 29.7569L48.493 34.6814L43.3188 34.6764L47.5091 37.7229L45.9059 42.6424L50.0962 39.6008L54.2815 42.6424L52.6833 37.7229L56.8686 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M53.0426 38.8368L52.683 37.7231L50.0959 39.6009L53.0426 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "60.4995",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip3_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M76.9128 34.6814H71.7386L70.1404 29.7569L68.5372 34.6814L63.363 34.6764L67.5533 37.7229L65.9501 42.6424L70.1404 39.6008L74.3257 42.6424L72.7275 37.7229L76.9128 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M73.0868 38.8368L72.7272 37.7231L70.1401 39.6009L73.0868 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "80.5435",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#C5C5C5"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip4_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M96.9565 34.6814H91.7823L90.1841 29.7569L88.5809 34.6814L83.4067 34.6764L87.597 37.7229L85.9938 42.6424L90.1841 39.6008L94.3694 42.6424L92.7712 37.7229L96.9565 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M93.1308 38.8368L92.7712 37.7231L90.1841 39.6009L93.1308 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('defs', [_c('clipPath', {
    attrs: {
      "id": "clip0_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(3.23071 29.7568)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip1_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(23.2747 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip2_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(43.3188 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip3_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(63.363 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip4_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(83.4067 29.7569)"
    }
  })])])])]), _c('div', {
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
  }, [_c('span', {
    staticStyle: {
      "margin-left": "30px"
    }
  }, [_vm._v("Check postcode")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin-left": "10px"
    }
  }, [_vm._v("→")])]), _vm.postcodeError ? _c('p', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v(_vm._s(_vm.postcodeError))]) : _vm._e()]), _c('div', {
    staticClass: "container-afbeelding-prijzen-mobiel-3"
  }, [_c('img', {
    attrs: {
      "src": "/img/afbeeldingen-samen-mobiel.b5031825.png",
      "alt": "doe het alsjeblieft"
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
var Pagina3vue_type_template_id_3442f1cd_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina3.vue?vue&type=template&id=3442f1cd

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
    ...Object(vuex_esm["b" /* mapGetters */])(['getAntwoorden'])
  },
  mounted() {
    this.chosenProduct = this.getAntwoorden.antwoord1 || 'Nog geen prijs gekozen!';
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    validatePostcode(postcode) {
      const postcodeRegex = /^\d{4}\s*[a-zA-Z]{2}$/;
      return postcodeRegex.test(postcode);
    },
    checkPostcode() {
      let inputValue = document.querySelector('.x2000-ab-input').value.trim() || document.querySelector('.postcode-input-mobiel').value.trim();
      if (this.validatePostcode(inputValue)) {
        this.postcodeError = '';
        this.$router.push('/pagina-4');
      } else {
        this.postcodeError = 'Voer een geldige postcode in (bijv. 2222 AB)';
      }
    },
    handleKeyDown(event) {
      if (event.key === 'Enter') {
        this.checkPostcode();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Pagina3.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina3vue_type_script_lang_js = (Pagina3vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina3.vue?vue&type=style&index=0&id=3442f1cd&prod&lang=sass
var Pagina3vue_type_style_index_0_id_3442f1cd_prod_lang_sass = __webpack_require__("32ac");

// CONCATENATED MODULE: ./src/components/Pagina3.vue






/* normalize component */

var Pagina3_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina3vue_type_script_lang_js,
  Pagina3vue_type_template_id_3442f1cd_render,
  Pagina3vue_type_template_id_3442f1cd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina3 = (Pagina3_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina4.vue?vue&type=template&id=3e0cf2c4
var Pagina4vue_type_template_id_3e0cf2c4_render = function render() {
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
  }), _c('svg', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "width": "100",
      "height": "46",
      "viewBox": "0 0 100 46",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('mask', {
    staticStyle: {
      "mask-type": "luminance"
    },
    attrs: {
      "id": "mask0_13_162",
      "maskUnits": "userSpaceOnUse",
      "x": "0",
      "y": "0",
      "width": "75",
      "height": "19"
    }
  }, [_c('path', {
    attrs: {
      "d": "M74.3438 0H0.367188V18.1631H74.3438V0Z",
      "fill": "white"
    }
  })]), _c('g', {
    attrs: {
      "mask": "url(#mask0_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M19.7966 6.44794H27.2806V7.85839H24.3446V15.7166H22.7327V7.8296H19.7966V6.44794ZM26.964 8.98099H28.3457V10.2763H28.3745C28.432 10.1036 28.5184 9.93088 28.6335 9.75818C28.7487 9.58547 28.9214 9.41276 29.0941 9.29762C29.2668 9.1537 29.4683 9.03856 29.6698 8.9522C29.8713 8.86585 30.1015 8.80828 30.3318 8.80828C30.5045 8.80828 30.6197 8.80828 30.6772 8.80828C30.7348 8.80828 30.8212 8.83707 30.8787 8.83707V10.2475C30.7636 10.2187 30.6772 10.2187 30.5621 10.1899C30.447 10.1899 30.3606 10.1612 30.2455 10.1612C29.9864 10.1612 29.7561 10.2187 29.5546 10.3051C29.3244 10.3914 29.1516 10.5641 28.9789 10.7369C28.8062 10.9383 28.6911 11.1686 28.576 11.4565C28.4896 11.7443 28.432 12.0609 28.432 12.4351V15.6302H26.964V8.98099ZM37.6719 15.6878H36.2327V14.7667H36.2039C36.0312 15.1121 35.7433 15.3712 35.3979 15.5727C35.0525 15.7742 34.6783 15.8893 34.3041 15.8893C33.4118 15.8893 32.7785 15.6878 32.4043 15.2273C32.0013 14.7955 31.8286 14.1334 31.8286 13.2411V8.98099H33.2966V13.0972C33.2966 13.6729 33.4118 14.1047 33.6421 14.3349C33.8723 14.5652 34.189 14.7091 34.5919 14.7091C34.9086 14.7091 35.1676 14.6516 35.3691 14.5652C35.5706 14.4789 35.7433 14.3349 35.8585 14.191C36.0024 14.0471 36.0888 13.8456 36.1463 13.6153C36.2039 13.385 36.2327 13.1548 36.2327 12.8957V9.00977H37.7007V15.6878H37.6719ZM40.205 13.529C40.2625 13.9607 40.4065 14.2486 40.6943 14.4501C40.9821 14.6228 41.3276 14.7091 41.7305 14.7091C41.8745 14.7091 42.0184 14.7091 42.1911 14.6804C42.3638 14.6516 42.5365 14.6228 42.6804 14.5652C42.8244 14.5076 42.9683 14.4213 43.0546 14.3062C43.141 14.191 43.1986 14.0471 43.1986 13.8456C43.1986 13.6441 43.1122 13.5002 42.9971 13.385C42.8531 13.2699 42.7092 13.1836 42.5077 13.0972C42.3062 13.0396 42.076 12.9533 41.8169 12.8957C41.5578 12.8381 41.2988 12.7806 41.0397 12.723C40.7519 12.6654 40.4928 12.5791 40.2337 12.4927C39.9747 12.4064 39.7444 12.2912 39.5429 12.1473C39.3414 12.0034 39.1687 11.8019 39.0536 11.5716C38.9384 11.3413 38.8809 11.0535 38.8809 10.7369C38.8809 10.3627 38.9672 10.0748 39.1399 9.81574C39.3126 9.55668 39.5429 9.38397 39.802 9.21127C40.0898 9.06734 40.3777 8.9522 40.7231 8.89463C41.0685 8.83706 41.3851 8.80828 41.673 8.80828C42.0184 8.80828 42.3638 8.83706 42.6517 8.92342C42.9683 8.98099 43.2561 9.12491 43.5152 9.26884C43.7743 9.44154 43.9758 9.64304 44.1485 9.9021C44.3212 10.1612 44.4363 10.4778 44.4651 10.852H42.9107C42.8531 10.5066 42.6804 10.2475 42.4214 10.1324C42.1623 10.0172 41.8745 9.95967 41.5578 9.95967C41.4427 9.95967 41.3276 9.95967 41.1836 9.98845C41.0397 10.0172 40.8958 10.046 40.7807 10.0748C40.6655 10.1324 40.5504 10.1899 40.464 10.2763C40.3777 10.3627 40.3201 10.4778 40.3201 10.6217C40.3201 10.7944 40.3777 10.9383 40.5216 11.0535C40.6367 11.1686 40.8094 11.255 41.0109 11.3413C41.2124 11.3989 41.4427 11.4853 41.7018 11.5428C41.9608 11.6004 42.2199 11.658 42.5077 11.7155C42.7668 11.7731 43.0259 11.8595 43.2849 11.9458C43.544 12.0322 43.7743 12.1473 43.9757 12.2912C44.1772 12.4351 44.3499 12.6366 44.4651 12.8381C44.5802 13.0396 44.6666 13.3275 44.6666 13.6729C44.6666 14.0759 44.5802 14.3925 44.3787 14.6804C44.206 14.9682 43.947 15.1697 43.6879 15.3424C43.4001 15.5151 43.0834 15.6302 42.7092 15.7166C42.3638 15.803 42.0184 15.8317 41.6442 15.8317C41.2124 15.8317 40.8382 15.7742 40.464 15.6878C40.1186 15.6015 39.802 15.4575 39.5429 15.256C39.2839 15.0546 39.0824 14.8243 38.9096 14.5364C38.7657 14.2486 38.6794 13.9032 38.6794 13.5002L40.205 13.529ZM45.0696 8.98099H46.1922V6.96606H47.6602V8.98099H48.9843V10.0748H47.6602V13.6441C47.6602 13.788 47.6602 13.932 47.689 14.0471C47.689 14.1622 47.7465 14.2486 47.7753 14.3349C47.8329 14.4213 47.8905 14.4789 47.9768 14.5076C48.0632 14.5364 48.2071 14.5652 48.3798 14.5652C48.4949 14.5652 48.5813 14.5652 48.6964 14.5652C48.8116 14.5652 48.8979 14.5364 49.0131 14.5076V15.659C48.8404 15.6878 48.6964 15.6878 48.5237 15.7166C48.3798 15.7454 48.2071 15.7454 48.0344 15.7454C47.6314 15.7454 47.3436 15.7166 47.0845 15.6302C46.8542 15.5727 46.6527 15.4575 46.5376 15.3136C46.3937 15.1697 46.3073 14.997 46.2497 14.7667C46.1922 14.5652 46.1634 14.3062 46.1634 14.0183V10.1036H45.0408L45.0696 8.98099ZM50.0493 8.98099H51.4598V9.9021H51.4886C51.69 9.49911 51.9779 9.24005 52.3521 9.06734C52.7263 8.89463 53.1293 8.80828 53.561 8.80828C54.0792 8.80828 54.5397 8.89463 54.9427 9.09613C55.3457 9.26884 55.6623 9.5279 55.9214 9.87331C56.1804 10.1899 56.3819 10.5929 56.4971 10.9959C56.641 11.4277 56.6986 11.8882 56.6986 12.3776C56.6986 12.8381 56.641 13.2699 56.5259 13.6729C56.4107 14.1047 56.238 14.4789 56.0077 14.7955C55.7775 15.1121 55.4608 15.3712 55.1154 15.5727C54.7412 15.7742 54.3382 15.8605 53.8201 15.8605C53.6186 15.8605 53.3883 15.8317 53.1868 15.803C52.9854 15.7742 52.7551 15.6878 52.5536 15.6015C52.3521 15.5151 52.1794 15.4 52.0067 15.256C51.834 15.1121 51.69 14.9682 51.5749 14.7955H51.5461V18.1345H50.0781V8.98099H50.0493ZM55.2018 12.3488C55.2018 12.0609 55.173 11.7443 55.0866 11.4565C55.0003 11.1686 54.8851 10.9096 54.7412 10.7081C54.5973 10.4778 54.3958 10.3051 54.1655 10.1899C53.9352 10.046 53.6762 9.98845 53.3596 9.98845C52.7263 9.98845 52.2657 10.1899 51.9491 10.6217C51.6325 11.0535 51.4886 11.6292 51.4886 12.3488C51.4886 12.6942 51.5173 13.0108 51.6037 13.2987C51.69 13.5865 51.8052 13.8456 51.9779 14.0471C52.1506 14.2486 52.3233 14.4213 52.5536 14.5364C52.7839 14.6516 53.0429 14.7091 53.3596 14.7091C53.705 14.7091 53.9928 14.6516 54.2231 14.5076C54.4534 14.3637 54.6549 14.191 54.7988 13.9607C54.9427 13.7305 55.0578 13.5002 55.1154 13.2123C55.173 12.9245 55.2018 12.6366 55.2018 12.3488ZM57.7924 6.44794H59.2604V7.85839H57.7924V6.44794ZM57.7924 8.98099H59.2604V15.6878H57.7924V8.98099ZM60.5845 6.44794H62.0525V15.6878H60.5845V6.44794ZM66.6005 15.8605C66.0536 15.8605 65.593 15.7742 65.1613 15.6015C64.7295 15.4288 64.3841 15.1697 64.0962 14.8818C63.8084 14.5652 63.5781 14.191 63.4342 13.7592C63.2903 13.3275 63.2039 12.8381 63.2039 12.3488C63.2039 11.8307 63.2903 11.3701 63.4342 10.9383C63.5781 10.5066 63.8084 10.1324 64.0962 9.81574C64.3841 9.49911 64.7295 9.26884 65.1613 9.09613C65.593 8.92342 66.0536 8.83707 66.6005 8.83707C67.1474 8.83707 67.608 8.92342 68.0397 9.09613C68.4715 9.26884 68.8169 9.5279 69.1048 9.81574C69.3926 10.1324 69.6229 10.5066 69.7668 10.9383C69.9107 11.3701 69.9971 11.8307 69.9971 12.3488C69.9971 12.8669 69.9107 13.3275 69.7668 13.7592C69.6229 14.191 69.3926 14.5652 69.1048 14.8818C68.8169 15.1985 68.4715 15.4288 68.0397 15.6015C67.608 15.7742 67.1474 15.8605 66.6005 15.8605ZM66.6005 14.7091C66.9171 14.7091 67.205 14.6516 67.464 14.5076C67.6943 14.3637 67.8958 14.191 68.0685 13.9607C68.2124 13.7305 68.3276 13.4714 68.4139 13.2123C68.4715 12.9245 68.5291 12.6366 68.5291 12.3488C68.5291 12.0609 68.5003 11.7731 68.4139 11.4853C68.3564 11.1974 68.2124 10.9383 68.0685 10.7369C67.9246 10.5066 67.7231 10.3339 67.464 10.1899C67.2338 10.046 66.9459 9.98845 66.6005 9.98845C66.2839 9.98845 65.996 10.046 65.737 10.1899C65.5067 10.3339 65.3052 10.5066 65.1325 10.7369C64.9886 10.9671 64.8734 11.1974 64.7871 11.4853C64.7295 11.7731 64.6719 12.0609 64.6719 12.3488C64.6719 12.6366 64.7007 12.9245 64.7871 13.2123C64.8446 13.5002 64.9886 13.7592 65.1325 13.9607C65.2764 14.191 65.4779 14.3637 65.737 14.5076C65.996 14.6516 66.2839 14.7091 66.6005 14.7091ZM70.4001 8.98099H71.5227V6.96606H72.9907V8.98099H74.3148V10.0748H72.9907V13.6441C72.9907 13.788 72.9907 13.932 73.0195 14.0471C73.0195 14.1622 73.077 14.2486 73.1058 14.3349C73.1634 14.4213 73.221 14.4789 73.3073 14.5076C73.3937 14.5364 73.5376 14.5652 73.7103 14.5652C73.8254 14.5652 73.9118 14.5652 74.0269 14.5652C74.1421 14.5652 74.2284 14.5364 74.3436 14.5076V15.659C74.1709 15.6878 74.0269 15.6878 73.8542 15.7166C73.7103 15.7454 73.5376 15.7454 73.3649 15.7454C72.9619 15.7454 72.6741 15.7166 72.415 15.6302C72.1847 15.5727 71.9832 15.4575 71.8681 15.3136C71.7242 15.1697 71.6378 14.997 71.5802 14.7667C71.5227 14.5652 71.4939 14.3062 71.4939 14.0183V10.1036H70.3713L70.4001 8.98099Z",
      "fill": "#191919"
    }
  }), _c('path', {
    attrs: {
      "d": "M18.0698 6.44777H11.3054L9.23287 0L7.13159 6.44777L0.367188 6.41898L5.83628 10.3913L3.73499 16.8102L9.20408 12.838L14.6732 16.8102L12.5719 10.3913L18.0698 6.44777Z",
      "fill": "#04DA8D"
    }
  }), _c('path', {
    attrs: {
      "d": "M13.0898 11.8594L12.6293 10.3914L9.23267 12.8381L13.0898 11.8594Z",
      "fill": "#005128"
    }
  })]), _c('rect', {
    attrs: {
      "x": "0.367188",
      "y": "26.8933",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip0_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M16.7804 34.6812H11.6063L10.0081 29.7568L8.40488 34.6812L3.23071 34.6762L7.42099 37.7228L5.8178 42.6422L10.0081 39.6007L14.1934 42.6422L12.5952 37.7228L16.7804 34.6812Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M12.9545 38.8366L12.5949 37.7229L10.0078 39.6008L12.9545 38.8366Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "20.4114",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip1_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M36.8244 34.6814H31.6502L30.052 29.7569L28.4488 34.6814L23.2747 34.6764L27.4649 37.7229L25.8617 42.6424L30.052 39.6008L34.2373 42.6424L32.6391 37.7229L36.8244 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M32.9982 38.8368L32.6386 37.7231L30.0515 39.6009L32.9982 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "40.4553",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip2_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M56.8686 34.6814H51.6944L50.0962 29.7569L48.493 34.6814L43.3188 34.6764L47.5091 37.7229L45.9059 42.6424L50.0962 39.6008L54.2815 42.6424L52.6833 37.7229L56.8686 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M53.0426 38.8368L52.683 37.7231L50.0959 39.6009L53.0426 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "60.4995",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip3_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M76.9128 34.6814H71.7386L70.1404 29.7569L68.5372 34.6814L63.363 34.6764L67.5533 37.7229L65.9501 42.6424L70.1404 39.6008L74.3257 42.6424L72.7275 37.7229L76.9128 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M73.0868 38.8368L72.7272 37.7231L70.1401 39.6009L73.0868 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "80.5435",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#C5C5C5"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip4_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M96.9565 34.6814H91.7823L90.1841 29.7569L88.5809 34.6814L83.4067 34.6764L87.597 37.7229L85.9938 42.6424L90.1841 39.6008L94.3694 42.6424L92.7712 37.7229L96.9565 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M93.1308 38.8368L92.7712 37.7231L90.1841 39.6009L93.1308 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('defs', [_c('clipPath', {
    attrs: {
      "id": "clip0_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(3.23071 29.7568)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip1_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(23.2747 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip2_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(43.3188 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip3_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(63.363 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip4_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(83.4067 29.7569)"
    }
  })])])])]), _c('div', {
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
      "src": "/img/afbeeldingen-samen-mobiel.b5031825.png",
      "alt": "doe het alsjeblieft"
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
var Pagina4vue_type_template_id_3e0cf2c4_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina4.vue?vue&type=template&id=3e0cf2c4

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
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/pagina-6");
    }, 1500);
  }
});
// CONCATENATED MODULE: ./src/components/Pagina4.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina4vue_type_script_lang_js = (Pagina4vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina4.vue?vue&type=style&index=0&id=3e0cf2c4&prod&lang=sass
var Pagina4vue_type_style_index_0_id_3e0cf2c4_prod_lang_sass = __webpack_require__("b5f8");

// CONCATENATED MODULE: ./src/components/Pagina4.vue






/* normalize component */

var Pagina4_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina4vue_type_script_lang_js,
  Pagina4vue_type_template_id_3e0cf2c4_render,
  Pagina4vue_type_template_id_3e0cf2c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina4 = (Pagina4_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina5.vue?vue&type=template&id=6aabf5f2
var Pagina5vue_type_template_id_6aabf5f2_render = function render() {
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
      "placeholder": "Voornaam"
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
      "placeholder": "Achternaam"
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
      "placeholder": "E-mailadres"
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
      "placeholder": "Telefoonnummer"
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
  }), _c('svg', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "width": "100",
      "height": "46",
      "viewBox": "0 0 100 46",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('mask', {
    staticStyle: {
      "mask-type": "luminance"
    },
    attrs: {
      "id": "mask0_13_162",
      "maskUnits": "userSpaceOnUse",
      "x": "0",
      "y": "0",
      "width": "75",
      "height": "19"
    }
  }, [_c('path', {
    attrs: {
      "d": "M74.3438 0H0.367188V18.1631H74.3438V0Z",
      "fill": "white"
    }
  })]), _c('g', {
    attrs: {
      "mask": "url(#mask0_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M19.7966 6.44794H27.2806V7.85839H24.3446V15.7166H22.7327V7.8296H19.7966V6.44794ZM26.964 8.98099H28.3457V10.2763H28.3745C28.432 10.1036 28.5184 9.93088 28.6335 9.75818C28.7487 9.58547 28.9214 9.41276 29.0941 9.29762C29.2668 9.1537 29.4683 9.03856 29.6698 8.9522C29.8713 8.86585 30.1015 8.80828 30.3318 8.80828C30.5045 8.80828 30.6197 8.80828 30.6772 8.80828C30.7348 8.80828 30.8212 8.83707 30.8787 8.83707V10.2475C30.7636 10.2187 30.6772 10.2187 30.5621 10.1899C30.447 10.1899 30.3606 10.1612 30.2455 10.1612C29.9864 10.1612 29.7561 10.2187 29.5546 10.3051C29.3244 10.3914 29.1516 10.5641 28.9789 10.7369C28.8062 10.9383 28.6911 11.1686 28.576 11.4565C28.4896 11.7443 28.432 12.0609 28.432 12.4351V15.6302H26.964V8.98099ZM37.6719 15.6878H36.2327V14.7667H36.2039C36.0312 15.1121 35.7433 15.3712 35.3979 15.5727C35.0525 15.7742 34.6783 15.8893 34.3041 15.8893C33.4118 15.8893 32.7785 15.6878 32.4043 15.2273C32.0013 14.7955 31.8286 14.1334 31.8286 13.2411V8.98099H33.2966V13.0972C33.2966 13.6729 33.4118 14.1047 33.6421 14.3349C33.8723 14.5652 34.189 14.7091 34.5919 14.7091C34.9086 14.7091 35.1676 14.6516 35.3691 14.5652C35.5706 14.4789 35.7433 14.3349 35.8585 14.191C36.0024 14.0471 36.0888 13.8456 36.1463 13.6153C36.2039 13.385 36.2327 13.1548 36.2327 12.8957V9.00977H37.7007V15.6878H37.6719ZM40.205 13.529C40.2625 13.9607 40.4065 14.2486 40.6943 14.4501C40.9821 14.6228 41.3276 14.7091 41.7305 14.7091C41.8745 14.7091 42.0184 14.7091 42.1911 14.6804C42.3638 14.6516 42.5365 14.6228 42.6804 14.5652C42.8244 14.5076 42.9683 14.4213 43.0546 14.3062C43.141 14.191 43.1986 14.0471 43.1986 13.8456C43.1986 13.6441 43.1122 13.5002 42.9971 13.385C42.8531 13.2699 42.7092 13.1836 42.5077 13.0972C42.3062 13.0396 42.076 12.9533 41.8169 12.8957C41.5578 12.8381 41.2988 12.7806 41.0397 12.723C40.7519 12.6654 40.4928 12.5791 40.2337 12.4927C39.9747 12.4064 39.7444 12.2912 39.5429 12.1473C39.3414 12.0034 39.1687 11.8019 39.0536 11.5716C38.9384 11.3413 38.8809 11.0535 38.8809 10.7369C38.8809 10.3627 38.9672 10.0748 39.1399 9.81574C39.3126 9.55668 39.5429 9.38397 39.802 9.21127C40.0898 9.06734 40.3777 8.9522 40.7231 8.89463C41.0685 8.83706 41.3851 8.80828 41.673 8.80828C42.0184 8.80828 42.3638 8.83706 42.6517 8.92342C42.9683 8.98099 43.2561 9.12491 43.5152 9.26884C43.7743 9.44154 43.9758 9.64304 44.1485 9.9021C44.3212 10.1612 44.4363 10.4778 44.4651 10.852H42.9107C42.8531 10.5066 42.6804 10.2475 42.4214 10.1324C42.1623 10.0172 41.8745 9.95967 41.5578 9.95967C41.4427 9.95967 41.3276 9.95967 41.1836 9.98845C41.0397 10.0172 40.8958 10.046 40.7807 10.0748C40.6655 10.1324 40.5504 10.1899 40.464 10.2763C40.3777 10.3627 40.3201 10.4778 40.3201 10.6217C40.3201 10.7944 40.3777 10.9383 40.5216 11.0535C40.6367 11.1686 40.8094 11.255 41.0109 11.3413C41.2124 11.3989 41.4427 11.4853 41.7018 11.5428C41.9608 11.6004 42.2199 11.658 42.5077 11.7155C42.7668 11.7731 43.0259 11.8595 43.2849 11.9458C43.544 12.0322 43.7743 12.1473 43.9757 12.2912C44.1772 12.4351 44.3499 12.6366 44.4651 12.8381C44.5802 13.0396 44.6666 13.3275 44.6666 13.6729C44.6666 14.0759 44.5802 14.3925 44.3787 14.6804C44.206 14.9682 43.947 15.1697 43.6879 15.3424C43.4001 15.5151 43.0834 15.6302 42.7092 15.7166C42.3638 15.803 42.0184 15.8317 41.6442 15.8317C41.2124 15.8317 40.8382 15.7742 40.464 15.6878C40.1186 15.6015 39.802 15.4575 39.5429 15.256C39.2839 15.0546 39.0824 14.8243 38.9096 14.5364C38.7657 14.2486 38.6794 13.9032 38.6794 13.5002L40.205 13.529ZM45.0696 8.98099H46.1922V6.96606H47.6602V8.98099H48.9843V10.0748H47.6602V13.6441C47.6602 13.788 47.6602 13.932 47.689 14.0471C47.689 14.1622 47.7465 14.2486 47.7753 14.3349C47.8329 14.4213 47.8905 14.4789 47.9768 14.5076C48.0632 14.5364 48.2071 14.5652 48.3798 14.5652C48.4949 14.5652 48.5813 14.5652 48.6964 14.5652C48.8116 14.5652 48.8979 14.5364 49.0131 14.5076V15.659C48.8404 15.6878 48.6964 15.6878 48.5237 15.7166C48.3798 15.7454 48.2071 15.7454 48.0344 15.7454C47.6314 15.7454 47.3436 15.7166 47.0845 15.6302C46.8542 15.5727 46.6527 15.4575 46.5376 15.3136C46.3937 15.1697 46.3073 14.997 46.2497 14.7667C46.1922 14.5652 46.1634 14.3062 46.1634 14.0183V10.1036H45.0408L45.0696 8.98099ZM50.0493 8.98099H51.4598V9.9021H51.4886C51.69 9.49911 51.9779 9.24005 52.3521 9.06734C52.7263 8.89463 53.1293 8.80828 53.561 8.80828C54.0792 8.80828 54.5397 8.89463 54.9427 9.09613C55.3457 9.26884 55.6623 9.5279 55.9214 9.87331C56.1804 10.1899 56.3819 10.5929 56.4971 10.9959C56.641 11.4277 56.6986 11.8882 56.6986 12.3776C56.6986 12.8381 56.641 13.2699 56.5259 13.6729C56.4107 14.1047 56.238 14.4789 56.0077 14.7955C55.7775 15.1121 55.4608 15.3712 55.1154 15.5727C54.7412 15.7742 54.3382 15.8605 53.8201 15.8605C53.6186 15.8605 53.3883 15.8317 53.1868 15.803C52.9854 15.7742 52.7551 15.6878 52.5536 15.6015C52.3521 15.5151 52.1794 15.4 52.0067 15.256C51.834 15.1121 51.69 14.9682 51.5749 14.7955H51.5461V18.1345H50.0781V8.98099H50.0493ZM55.2018 12.3488C55.2018 12.0609 55.173 11.7443 55.0866 11.4565C55.0003 11.1686 54.8851 10.9096 54.7412 10.7081C54.5973 10.4778 54.3958 10.3051 54.1655 10.1899C53.9352 10.046 53.6762 9.98845 53.3596 9.98845C52.7263 9.98845 52.2657 10.1899 51.9491 10.6217C51.6325 11.0535 51.4886 11.6292 51.4886 12.3488C51.4886 12.6942 51.5173 13.0108 51.6037 13.2987C51.69 13.5865 51.8052 13.8456 51.9779 14.0471C52.1506 14.2486 52.3233 14.4213 52.5536 14.5364C52.7839 14.6516 53.0429 14.7091 53.3596 14.7091C53.705 14.7091 53.9928 14.6516 54.2231 14.5076C54.4534 14.3637 54.6549 14.191 54.7988 13.9607C54.9427 13.7305 55.0578 13.5002 55.1154 13.2123C55.173 12.9245 55.2018 12.6366 55.2018 12.3488ZM57.7924 6.44794H59.2604V7.85839H57.7924V6.44794ZM57.7924 8.98099H59.2604V15.6878H57.7924V8.98099ZM60.5845 6.44794H62.0525V15.6878H60.5845V6.44794ZM66.6005 15.8605C66.0536 15.8605 65.593 15.7742 65.1613 15.6015C64.7295 15.4288 64.3841 15.1697 64.0962 14.8818C63.8084 14.5652 63.5781 14.191 63.4342 13.7592C63.2903 13.3275 63.2039 12.8381 63.2039 12.3488C63.2039 11.8307 63.2903 11.3701 63.4342 10.9383C63.5781 10.5066 63.8084 10.1324 64.0962 9.81574C64.3841 9.49911 64.7295 9.26884 65.1613 9.09613C65.593 8.92342 66.0536 8.83707 66.6005 8.83707C67.1474 8.83707 67.608 8.92342 68.0397 9.09613C68.4715 9.26884 68.8169 9.5279 69.1048 9.81574C69.3926 10.1324 69.6229 10.5066 69.7668 10.9383C69.9107 11.3701 69.9971 11.8307 69.9971 12.3488C69.9971 12.8669 69.9107 13.3275 69.7668 13.7592C69.6229 14.191 69.3926 14.5652 69.1048 14.8818C68.8169 15.1985 68.4715 15.4288 68.0397 15.6015C67.608 15.7742 67.1474 15.8605 66.6005 15.8605ZM66.6005 14.7091C66.9171 14.7091 67.205 14.6516 67.464 14.5076C67.6943 14.3637 67.8958 14.191 68.0685 13.9607C68.2124 13.7305 68.3276 13.4714 68.4139 13.2123C68.4715 12.9245 68.5291 12.6366 68.5291 12.3488C68.5291 12.0609 68.5003 11.7731 68.4139 11.4853C68.3564 11.1974 68.2124 10.9383 68.0685 10.7369C67.9246 10.5066 67.7231 10.3339 67.464 10.1899C67.2338 10.046 66.9459 9.98845 66.6005 9.98845C66.2839 9.98845 65.996 10.046 65.737 10.1899C65.5067 10.3339 65.3052 10.5066 65.1325 10.7369C64.9886 10.9671 64.8734 11.1974 64.7871 11.4853C64.7295 11.7731 64.6719 12.0609 64.6719 12.3488C64.6719 12.6366 64.7007 12.9245 64.7871 13.2123C64.8446 13.5002 64.9886 13.7592 65.1325 13.9607C65.2764 14.191 65.4779 14.3637 65.737 14.5076C65.996 14.6516 66.2839 14.7091 66.6005 14.7091ZM70.4001 8.98099H71.5227V6.96606H72.9907V8.98099H74.3148V10.0748H72.9907V13.6441C72.9907 13.788 72.9907 13.932 73.0195 14.0471C73.0195 14.1622 73.077 14.2486 73.1058 14.3349C73.1634 14.4213 73.221 14.4789 73.3073 14.5076C73.3937 14.5364 73.5376 14.5652 73.7103 14.5652C73.8254 14.5652 73.9118 14.5652 74.0269 14.5652C74.1421 14.5652 74.2284 14.5364 74.3436 14.5076V15.659C74.1709 15.6878 74.0269 15.6878 73.8542 15.7166C73.7103 15.7454 73.5376 15.7454 73.3649 15.7454C72.9619 15.7454 72.6741 15.7166 72.415 15.6302C72.1847 15.5727 71.9832 15.4575 71.8681 15.3136C71.7242 15.1697 71.6378 14.997 71.5802 14.7667C71.5227 14.5652 71.4939 14.3062 71.4939 14.0183V10.1036H70.3713L70.4001 8.98099Z",
      "fill": "#191919"
    }
  }), _c('path', {
    attrs: {
      "d": "M18.0698 6.44777H11.3054L9.23287 0L7.13159 6.44777L0.367188 6.41898L5.83628 10.3913L3.73499 16.8102L9.20408 12.838L14.6732 16.8102L12.5719 10.3913L18.0698 6.44777Z",
      "fill": "#04DA8D"
    }
  }), _c('path', {
    attrs: {
      "d": "M13.0898 11.8594L12.6293 10.3914L9.23267 12.8381L13.0898 11.8594Z",
      "fill": "#005128"
    }
  })]), _c('rect', {
    attrs: {
      "x": "0.367188",
      "y": "26.8933",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip0_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M16.7804 34.6812H11.6063L10.0081 29.7568L8.40488 34.6812L3.23071 34.6762L7.42099 37.7228L5.8178 42.6422L10.0081 39.6007L14.1934 42.6422L12.5952 37.7228L16.7804 34.6812Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M12.9545 38.8366L12.5949 37.7229L10.0078 39.6008L12.9545 38.8366Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "20.4114",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip1_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M36.8244 34.6814H31.6502L30.052 29.7569L28.4488 34.6814L23.2747 34.6764L27.4649 37.7229L25.8617 42.6424L30.052 39.6008L34.2373 42.6424L32.6391 37.7229L36.8244 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M32.9982 38.8368L32.6386 37.7231L30.0515 39.6009L32.9982 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "40.4553",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip2_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M56.8686 34.6814H51.6944L50.0962 29.7569L48.493 34.6814L43.3188 34.6764L47.5091 37.7229L45.9059 42.6424L50.0962 39.6008L54.2815 42.6424L52.6833 37.7229L56.8686 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M53.0426 38.8368L52.683 37.7231L50.0959 39.6009L53.0426 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "60.4995",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip3_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M76.9128 34.6814H71.7386L70.1404 29.7569L68.5372 34.6814L63.363 34.6764L67.5533 37.7229L65.9501 42.6424L70.1404 39.6008L74.3257 42.6424L72.7275 37.7229L76.9128 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M73.0868 38.8368L72.7272 37.7231L70.1401 39.6009L73.0868 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "80.5435",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#C5C5C5"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip4_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M96.9565 34.6814H91.7823L90.1841 29.7569L88.5809 34.6814L83.4067 34.6764L87.597 37.7229L85.9938 42.6424L90.1841 39.6008L94.3694 42.6424L92.7712 37.7229L96.9565 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M93.1308 38.8368L92.7712 37.7231L90.1841 39.6009L93.1308 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('defs', [_c('clipPath', {
    attrs: {
      "id": "clip0_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(3.23071 29.7568)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip1_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(23.2747 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip2_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(43.3188 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip3_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(63.363 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip4_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(83.4067 29.7569)"
    }
  })])])])]), _c('div', {
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
  }), _c('svg', {
    staticClass: "form-icoon-mobiel",
    class: {
      'input-error-icoon-mobiel': _vm.errors.voornaam || _vm.errors.achternaam
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
  }), _c('svg', {
    staticClass: "form-icoon-mobiel",
    class: {
      'input-error-icoon-mobiel': _vm.errors.voornaam || _vm.errors.achternaam
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
      'input-error-mobiel': _vm.errors.achternaam
    },
    attrs: {
      "type": "text",
      "id": "achternaam",
      "required": "",
      "placeholder": "Achternaam"
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
  }), _c('svg', {
    staticClass: "form-icoon-2-mobiel",
    class: {
      'input-error-icoon-mobiel': _vm.errors.email
    },
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
      'input-error-mobiel': _vm.errors.email
    },
    attrs: {
      "type": "email",
      "id": "email",
      "required": "",
      "placeholder": "E-mailadres"
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
    staticClass: "error-message-mail"
  }, [_vm._v(_vm._s(_vm.errors.email))]) : _vm._e()]), _c('div', {
    staticClass: "form-group-mobiel full-width"
  }, [_c('label', {
    attrs: {
      "for": "telefoonnummer"
    }
  }), _c('svg', {
    staticClass: "form-icoon-2-mobiel",
    class: {
      'input-error-icoon-mobiel': _vm.errors.telefoonnummer
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
      'input-error-mobiel': _vm.errors.telefoonnummer
    },
    attrs: {
      "type": "tel",
      "id": "telefoonnummer",
      "required": "",
      "placeholder": "Telefoonnummer"
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
    staticClass: "error-message-tel"
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
      "right": "-36px"
    }
  }, [_vm._v("→")])]), _c('p', {
    staticClass: "met-het-bevestigen-v-mobiel"
  }, [_vm._v("Met het bevestigen van je deelname ga je er mee akkoord dat MeerVoordeel eenmalig telefonisch contact met je opneemt met een aanbieding voor een all-in abonnement van Ziggo.")]), _c('div', {
    staticClass: "container-afbeelding-prijzen-mobiel-5"
  }, [_c('img', {
    attrs: {
      "src": "/img/afbeeldingen-samen-mobiel.b5031825.png",
      "alt": "doe het alsjeblieft"
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
    staticClass: "lijn-mobiel-pagina-5",
    staticStyle: {
      "margin-top": "3rem"
    }
  }), _c('div', {
    staticClass: "footer-pagina1"
  }, [_c('p', {
    staticClass: "text-footer-pagina1"
  }, [_vm._v("*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024. Actievoorwaarden van toepassing.")])])])])])])]);
};
var Pagina5vue_type_template_id_6aabf5f2_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina5.vue?vue&type=template&id=6aabf5f2

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
// EXTERNAL MODULE: ./src/components/Pagina5.vue?vue&type=style&index=0&id=6aabf5f2&prod&lang=sass
var Pagina5vue_type_style_index_0_id_6aabf5f2_prod_lang_sass = __webpack_require__("74cd");

// CONCATENATED MODULE: ./src/components/Pagina5.vue






/* normalize component */

var Pagina5_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina5vue_type_script_lang_js,
  Pagina5vue_type_template_id_6aabf5f2_render,
  Pagina5vue_type_template_id_6aabf5f2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina5 = (Pagina5_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina6.vue?vue&type=template&id=0e747b3c
var Pagina6vue_type_template_id_0e747b3c_render = function render() {
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
  }, [_vm._v("€699,-")])])]), _c('svg', {
    staticClass: "defaultoutlinetick-circle",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "119",
      "height": "119",
      "viewBox": "0 0 119 119",
      "fill": "none"
    }
  }, [_c('g', {
    attrs: {
      "id": "vuesax/outline/tick-circle"
    }
  }, [_c('g', {
    attrs: {
      "id": "tick-circle"
    }
  }, [_c('path', {
    attrs: {
      "id": "Vector",
      "d": "M59.5001 112.802C30.0972 112.802 6.198 88.9029 6.198 59.5C6.198 30.0971 30.0972 6.19792 59.5001 6.19792C88.903 6.19792 112.802 30.0971 112.802 59.5C112.802 88.9029 88.903 112.802 59.5001 112.802ZM59.5001 13.6354C34.2126 13.6354 13.6355 34.2125 13.6355 59.5C13.6355 84.7875 34.2126 105.365 59.5001 105.365C84.7876 105.365 105.365 84.7875 105.365 59.5C105.365 34.2125 84.7876 13.6354 59.5001 13.6354Z",
      "fill": "#49b7ac"
    }
  }), _c('path', {
    attrs: {
      "id": "Vector_2",
      "d": "M52.4613 77.2507C51.4697 77.2507 50.5276 76.854 49.8334 76.1599L35.8013 62.1278C34.3634 60.6899 34.3634 58.3099 35.8013 56.872C37.2393 55.434 39.6193 55.434 41.0572 56.872L52.4613 68.2761L77.9472 42.7903C79.3851 41.3524 81.7651 41.3524 83.203 42.7903C84.6409 44.2282 84.6409 46.6082 83.203 48.0461L55.0893 76.1599C54.3951 76.854 53.453 77.2507 52.4613 77.2507Z",
      "fill": "#49b7ac"
    }
  })])])]), _c('frame1000004784', {
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
  }), _c('svg', {
    staticClass: "logo-navbar-mobiel",
    attrs: {
      "width": "100",
      "height": "46",
      "viewBox": "0 0 100 46",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('mask', {
    staticStyle: {
      "mask-type": "luminance"
    },
    attrs: {
      "id": "mask0_13_162",
      "maskUnits": "userSpaceOnUse",
      "x": "0",
      "y": "0",
      "width": "75",
      "height": "19"
    }
  }, [_c('path', {
    attrs: {
      "d": "M74.3438 0H0.367188V18.1631H74.3438V0Z",
      "fill": "white"
    }
  })]), _c('g', {
    attrs: {
      "mask": "url(#mask0_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M19.7966 6.44794H27.2806V7.85839H24.3446V15.7166H22.7327V7.8296H19.7966V6.44794ZM26.964 8.98099H28.3457V10.2763H28.3745C28.432 10.1036 28.5184 9.93088 28.6335 9.75818C28.7487 9.58547 28.9214 9.41276 29.0941 9.29762C29.2668 9.1537 29.4683 9.03856 29.6698 8.9522C29.8713 8.86585 30.1015 8.80828 30.3318 8.80828C30.5045 8.80828 30.6197 8.80828 30.6772 8.80828C30.7348 8.80828 30.8212 8.83707 30.8787 8.83707V10.2475C30.7636 10.2187 30.6772 10.2187 30.5621 10.1899C30.447 10.1899 30.3606 10.1612 30.2455 10.1612C29.9864 10.1612 29.7561 10.2187 29.5546 10.3051C29.3244 10.3914 29.1516 10.5641 28.9789 10.7369C28.8062 10.9383 28.6911 11.1686 28.576 11.4565C28.4896 11.7443 28.432 12.0609 28.432 12.4351V15.6302H26.964V8.98099ZM37.6719 15.6878H36.2327V14.7667H36.2039C36.0312 15.1121 35.7433 15.3712 35.3979 15.5727C35.0525 15.7742 34.6783 15.8893 34.3041 15.8893C33.4118 15.8893 32.7785 15.6878 32.4043 15.2273C32.0013 14.7955 31.8286 14.1334 31.8286 13.2411V8.98099H33.2966V13.0972C33.2966 13.6729 33.4118 14.1047 33.6421 14.3349C33.8723 14.5652 34.189 14.7091 34.5919 14.7091C34.9086 14.7091 35.1676 14.6516 35.3691 14.5652C35.5706 14.4789 35.7433 14.3349 35.8585 14.191C36.0024 14.0471 36.0888 13.8456 36.1463 13.6153C36.2039 13.385 36.2327 13.1548 36.2327 12.8957V9.00977H37.7007V15.6878H37.6719ZM40.205 13.529C40.2625 13.9607 40.4065 14.2486 40.6943 14.4501C40.9821 14.6228 41.3276 14.7091 41.7305 14.7091C41.8745 14.7091 42.0184 14.7091 42.1911 14.6804C42.3638 14.6516 42.5365 14.6228 42.6804 14.5652C42.8244 14.5076 42.9683 14.4213 43.0546 14.3062C43.141 14.191 43.1986 14.0471 43.1986 13.8456C43.1986 13.6441 43.1122 13.5002 42.9971 13.385C42.8531 13.2699 42.7092 13.1836 42.5077 13.0972C42.3062 13.0396 42.076 12.9533 41.8169 12.8957C41.5578 12.8381 41.2988 12.7806 41.0397 12.723C40.7519 12.6654 40.4928 12.5791 40.2337 12.4927C39.9747 12.4064 39.7444 12.2912 39.5429 12.1473C39.3414 12.0034 39.1687 11.8019 39.0536 11.5716C38.9384 11.3413 38.8809 11.0535 38.8809 10.7369C38.8809 10.3627 38.9672 10.0748 39.1399 9.81574C39.3126 9.55668 39.5429 9.38397 39.802 9.21127C40.0898 9.06734 40.3777 8.9522 40.7231 8.89463C41.0685 8.83706 41.3851 8.80828 41.673 8.80828C42.0184 8.80828 42.3638 8.83706 42.6517 8.92342C42.9683 8.98099 43.2561 9.12491 43.5152 9.26884C43.7743 9.44154 43.9758 9.64304 44.1485 9.9021C44.3212 10.1612 44.4363 10.4778 44.4651 10.852H42.9107C42.8531 10.5066 42.6804 10.2475 42.4214 10.1324C42.1623 10.0172 41.8745 9.95967 41.5578 9.95967C41.4427 9.95967 41.3276 9.95967 41.1836 9.98845C41.0397 10.0172 40.8958 10.046 40.7807 10.0748C40.6655 10.1324 40.5504 10.1899 40.464 10.2763C40.3777 10.3627 40.3201 10.4778 40.3201 10.6217C40.3201 10.7944 40.3777 10.9383 40.5216 11.0535C40.6367 11.1686 40.8094 11.255 41.0109 11.3413C41.2124 11.3989 41.4427 11.4853 41.7018 11.5428C41.9608 11.6004 42.2199 11.658 42.5077 11.7155C42.7668 11.7731 43.0259 11.8595 43.2849 11.9458C43.544 12.0322 43.7743 12.1473 43.9757 12.2912C44.1772 12.4351 44.3499 12.6366 44.4651 12.8381C44.5802 13.0396 44.6666 13.3275 44.6666 13.6729C44.6666 14.0759 44.5802 14.3925 44.3787 14.6804C44.206 14.9682 43.947 15.1697 43.6879 15.3424C43.4001 15.5151 43.0834 15.6302 42.7092 15.7166C42.3638 15.803 42.0184 15.8317 41.6442 15.8317C41.2124 15.8317 40.8382 15.7742 40.464 15.6878C40.1186 15.6015 39.802 15.4575 39.5429 15.256C39.2839 15.0546 39.0824 14.8243 38.9096 14.5364C38.7657 14.2486 38.6794 13.9032 38.6794 13.5002L40.205 13.529ZM45.0696 8.98099H46.1922V6.96606H47.6602V8.98099H48.9843V10.0748H47.6602V13.6441C47.6602 13.788 47.6602 13.932 47.689 14.0471C47.689 14.1622 47.7465 14.2486 47.7753 14.3349C47.8329 14.4213 47.8905 14.4789 47.9768 14.5076C48.0632 14.5364 48.2071 14.5652 48.3798 14.5652C48.4949 14.5652 48.5813 14.5652 48.6964 14.5652C48.8116 14.5652 48.8979 14.5364 49.0131 14.5076V15.659C48.8404 15.6878 48.6964 15.6878 48.5237 15.7166C48.3798 15.7454 48.2071 15.7454 48.0344 15.7454C47.6314 15.7454 47.3436 15.7166 47.0845 15.6302C46.8542 15.5727 46.6527 15.4575 46.5376 15.3136C46.3937 15.1697 46.3073 14.997 46.2497 14.7667C46.1922 14.5652 46.1634 14.3062 46.1634 14.0183V10.1036H45.0408L45.0696 8.98099ZM50.0493 8.98099H51.4598V9.9021H51.4886C51.69 9.49911 51.9779 9.24005 52.3521 9.06734C52.7263 8.89463 53.1293 8.80828 53.561 8.80828C54.0792 8.80828 54.5397 8.89463 54.9427 9.09613C55.3457 9.26884 55.6623 9.5279 55.9214 9.87331C56.1804 10.1899 56.3819 10.5929 56.4971 10.9959C56.641 11.4277 56.6986 11.8882 56.6986 12.3776C56.6986 12.8381 56.641 13.2699 56.5259 13.6729C56.4107 14.1047 56.238 14.4789 56.0077 14.7955C55.7775 15.1121 55.4608 15.3712 55.1154 15.5727C54.7412 15.7742 54.3382 15.8605 53.8201 15.8605C53.6186 15.8605 53.3883 15.8317 53.1868 15.803C52.9854 15.7742 52.7551 15.6878 52.5536 15.6015C52.3521 15.5151 52.1794 15.4 52.0067 15.256C51.834 15.1121 51.69 14.9682 51.5749 14.7955H51.5461V18.1345H50.0781V8.98099H50.0493ZM55.2018 12.3488C55.2018 12.0609 55.173 11.7443 55.0866 11.4565C55.0003 11.1686 54.8851 10.9096 54.7412 10.7081C54.5973 10.4778 54.3958 10.3051 54.1655 10.1899C53.9352 10.046 53.6762 9.98845 53.3596 9.98845C52.7263 9.98845 52.2657 10.1899 51.9491 10.6217C51.6325 11.0535 51.4886 11.6292 51.4886 12.3488C51.4886 12.6942 51.5173 13.0108 51.6037 13.2987C51.69 13.5865 51.8052 13.8456 51.9779 14.0471C52.1506 14.2486 52.3233 14.4213 52.5536 14.5364C52.7839 14.6516 53.0429 14.7091 53.3596 14.7091C53.705 14.7091 53.9928 14.6516 54.2231 14.5076C54.4534 14.3637 54.6549 14.191 54.7988 13.9607C54.9427 13.7305 55.0578 13.5002 55.1154 13.2123C55.173 12.9245 55.2018 12.6366 55.2018 12.3488ZM57.7924 6.44794H59.2604V7.85839H57.7924V6.44794ZM57.7924 8.98099H59.2604V15.6878H57.7924V8.98099ZM60.5845 6.44794H62.0525V15.6878H60.5845V6.44794ZM66.6005 15.8605C66.0536 15.8605 65.593 15.7742 65.1613 15.6015C64.7295 15.4288 64.3841 15.1697 64.0962 14.8818C63.8084 14.5652 63.5781 14.191 63.4342 13.7592C63.2903 13.3275 63.2039 12.8381 63.2039 12.3488C63.2039 11.8307 63.2903 11.3701 63.4342 10.9383C63.5781 10.5066 63.8084 10.1324 64.0962 9.81574C64.3841 9.49911 64.7295 9.26884 65.1613 9.09613C65.593 8.92342 66.0536 8.83707 66.6005 8.83707C67.1474 8.83707 67.608 8.92342 68.0397 9.09613C68.4715 9.26884 68.8169 9.5279 69.1048 9.81574C69.3926 10.1324 69.6229 10.5066 69.7668 10.9383C69.9107 11.3701 69.9971 11.8307 69.9971 12.3488C69.9971 12.8669 69.9107 13.3275 69.7668 13.7592C69.6229 14.191 69.3926 14.5652 69.1048 14.8818C68.8169 15.1985 68.4715 15.4288 68.0397 15.6015C67.608 15.7742 67.1474 15.8605 66.6005 15.8605ZM66.6005 14.7091C66.9171 14.7091 67.205 14.6516 67.464 14.5076C67.6943 14.3637 67.8958 14.191 68.0685 13.9607C68.2124 13.7305 68.3276 13.4714 68.4139 13.2123C68.4715 12.9245 68.5291 12.6366 68.5291 12.3488C68.5291 12.0609 68.5003 11.7731 68.4139 11.4853C68.3564 11.1974 68.2124 10.9383 68.0685 10.7369C67.9246 10.5066 67.7231 10.3339 67.464 10.1899C67.2338 10.046 66.9459 9.98845 66.6005 9.98845C66.2839 9.98845 65.996 10.046 65.737 10.1899C65.5067 10.3339 65.3052 10.5066 65.1325 10.7369C64.9886 10.9671 64.8734 11.1974 64.7871 11.4853C64.7295 11.7731 64.6719 12.0609 64.6719 12.3488C64.6719 12.6366 64.7007 12.9245 64.7871 13.2123C64.8446 13.5002 64.9886 13.7592 65.1325 13.9607C65.2764 14.191 65.4779 14.3637 65.737 14.5076C65.996 14.6516 66.2839 14.7091 66.6005 14.7091ZM70.4001 8.98099H71.5227V6.96606H72.9907V8.98099H74.3148V10.0748H72.9907V13.6441C72.9907 13.788 72.9907 13.932 73.0195 14.0471C73.0195 14.1622 73.077 14.2486 73.1058 14.3349C73.1634 14.4213 73.221 14.4789 73.3073 14.5076C73.3937 14.5364 73.5376 14.5652 73.7103 14.5652C73.8254 14.5652 73.9118 14.5652 74.0269 14.5652C74.1421 14.5652 74.2284 14.5364 74.3436 14.5076V15.659C74.1709 15.6878 74.0269 15.6878 73.8542 15.7166C73.7103 15.7454 73.5376 15.7454 73.3649 15.7454C72.9619 15.7454 72.6741 15.7166 72.415 15.6302C72.1847 15.5727 71.9832 15.4575 71.8681 15.3136C71.7242 15.1697 71.6378 14.997 71.5802 14.7667C71.5227 14.5652 71.4939 14.3062 71.4939 14.0183V10.1036H70.3713L70.4001 8.98099Z",
      "fill": "#191919"
    }
  }), _c('path', {
    attrs: {
      "d": "M18.0698 6.44777H11.3054L9.23287 0L7.13159 6.44777L0.367188 6.41898L5.83628 10.3913L3.73499 16.8102L9.20408 12.838L14.6732 16.8102L12.5719 10.3913L18.0698 6.44777Z",
      "fill": "#04DA8D"
    }
  }), _c('path', {
    attrs: {
      "d": "M13.0898 11.8594L12.6293 10.3914L9.23267 12.8381L13.0898 11.8594Z",
      "fill": "#005128"
    }
  })]), _c('rect', {
    attrs: {
      "x": "0.367188",
      "y": "26.8933",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip0_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M16.7804 34.6812H11.6063L10.0081 29.7568L8.40488 34.6812L3.23071 34.6762L7.42099 37.7228L5.8178 42.6422L10.0081 39.6007L14.1934 42.6422L12.5952 37.7228L16.7804 34.6812Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M12.9545 38.8366L12.5949 37.7229L10.0078 39.6008L12.9545 38.8366Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "20.4114",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip1_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M36.8244 34.6814H31.6502L30.052 29.7569L28.4488 34.6814L23.2747 34.6764L27.4649 37.7229L25.8617 42.6424L30.052 39.6008L34.2373 42.6424L32.6391 37.7229L36.8244 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M32.9982 38.8368L32.6386 37.7231L30.0515 39.6009L32.9982 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "40.4553",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip2_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M56.8686 34.6814H51.6944L50.0962 29.7569L48.493 34.6814L43.3188 34.6764L47.5091 37.7229L45.9059 42.6424L50.0962 39.6008L54.2815 42.6424L52.6833 37.7229L56.8686 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M53.0426 38.8368L52.683 37.7231L50.0959 39.6009L53.0426 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "60.4995",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#04DA8D"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip3_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M76.9128 34.6814H71.7386L70.1404 29.7569L68.5372 34.6814L63.363 34.6764L67.5533 37.7229L65.9501 42.6424L70.1404 39.6008L74.3257 42.6424L72.7275 37.7229L76.9128 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M73.0868 38.8368L72.7272 37.7231L70.1401 39.6009L73.0868 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('rect', {
    attrs: {
      "x": "80.5435",
      "y": "26.8934",
      "width": "18.6124",
      "height": "18.6124",
      "fill": "#C5C5C5"
    }
  }), _c('g', {
    attrs: {
      "clip-path": "url(#clip4_13_162)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M96.9565 34.6814H91.7823L90.1841 29.7569L88.5809 34.6814L83.4067 34.6764L87.597 37.7229L85.9938 42.6424L90.1841 39.6008L94.3694 42.6424L92.7712 37.7229L96.9565 34.6814Z",
      "fill": "white"
    }
  }), _c('path', {
    attrs: {
      "d": "M93.1308 38.8368L92.7712 37.7231L90.1841 39.6009L93.1308 38.8368Z",
      "fill": "#00532C"
    }
  })]), _c('defs', [_c('clipPath', {
    attrs: {
      "id": "clip0_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(3.23071 29.7568)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip1_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(23.2747 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip2_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(43.3188 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip3_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(63.363 29.7569)"
    }
  })]), _c('clipPath', {
    attrs: {
      "id": "clip4_13_162"
    }
  }, [_c('rect', {
    attrs: {
      "width": "13.5497",
      "height": "12.8855",
      "fill": "white",
      "transform": "translate(83.4067 29.7569)"
    }
  })])])])]), _c('div', {
    staticClass: "achtergrond-pagina-6"
  }, [_c('div', {
    staticClass: "witte-container-pagina-6"
  }, [_c('div', {
    staticClass: "postcode-goedgekeurd"
  }, [_vm._v(" Jouw postcode is goedgekeurd! ")]), _c('div', {
    staticClass: "icoon-pagina-6"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "119",
      "height": "119",
      "viewBox": "0 0 119 119",
      "fill": "none"
    }
  }, [_c('g', {
    attrs: {
      "id": "vuesax/outline/tick-circle"
    }
  }, [_c('g', {
    attrs: {
      "id": "tick-circle"
    }
  }, [_c('path', {
    attrs: {
      "id": "Vector",
      "d": "M59.5001 112.802C30.0972 112.802 6.198 88.9029 6.198 59.5C6.198 30.0971 30.0972 6.19792 59.5001 6.19792C88.903 6.19792 112.802 30.0971 112.802 59.5C112.802 88.9029 88.903 112.802 59.5001 112.802ZM59.5001 13.6354C34.2126 13.6354 13.6355 34.2125 13.6355 59.5C13.6355 84.7875 34.2126 105.365 59.5001 105.365C84.7876 105.365 105.365 84.7875 105.365 59.5C105.365 34.2125 84.7876 13.6354 59.5001 13.6354Z",
      "fill": "#49b7ac"
    }
  }), _c('path', {
    attrs: {
      "id": "Vector_2",
      "d": "M52.4613 77.2507C51.4697 77.2507 50.5276 76.854 49.8334 76.1599L35.8013 62.1278C34.3634 60.6899 34.3634 58.3099 35.8013 56.872C37.2393 55.434 39.6193 55.434 41.0572 56.872L52.4613 68.2761L77.9472 42.7903C79.3851 41.3524 81.7651 41.3524 83.203 42.7903C84.6409 44.2282 84.6409 46.6082 83.203 48.0461L55.0893 76.1599C54.3951 76.854 53.453 77.2507 52.4613 77.2507Z",
      "fill": "#49b7ac"
    }
  })])])])])]), _c('div', {
    staticClass: "container-afbeelding-prijzen-mobiel-6"
  }, [_c('img', {
    attrs: {
      "src": "/img/afbeeldingen-samen-mobiel.b5031825.png",
      "alt": "afbeelding prijzen samen"
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
var Pagina6vue_type_template_id_0e747b3c_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina6.vue?vue&type=template&id=0e747b3c

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
    this.chosenProduct = antwoordenLijst[antwoordenLijst.length - 2] || 'geen basta gekozen';
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/pagina-5");
    }, 1500);
  }
});
// CONCATENATED MODULE: ./src/components/Pagina6.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina6vue_type_script_lang_js = (Pagina6vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina6.vue?vue&type=style&index=0&id=0e747b3c&prod&lang=sass
var Pagina6vue_type_style_index_0_id_0e747b3c_prod_lang_sass = __webpack_require__("8e84");

// CONCATENATED MODULE: ./src/components/Pagina6.vue






/* normalize component */

var Pagina6_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina6vue_type_script_lang_js,
  Pagina6vue_type_template_id_0e747b3c_render,
  Pagina6vue_type_template_id_0e747b3c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina6 = (Pagina6_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2d5dac05-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bedankt.vue?vue&type=template&id=55e66488
var bedanktvue_type_template_id_55e66488_render = function render() {
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
      "src": "/img/afbeeldingen-samen-mobiel.b5031825.png",
      "alt": "doe het alsjeblieft"
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
var bedanktvue_type_template_id_55e66488_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/bedankt.vue?vue&type=template&id=55e66488

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
// EXTERNAL MODULE: ./src/components/bedankt.vue?vue&type=style&index=0&id=55e66488&prod&lang=sass
var bedanktvue_type_style_index_0_id_55e66488_prod_lang_sass = __webpack_require__("3dc5");

// CONCATENATED MODULE: ./src/components/bedankt.vue






/* normalize component */

var bedankt_component = Object(componentNormalizer["a" /* default */])(
  components_bedanktvue_type_script_lang_js,
  bedanktvue_type_template_id_55e66488_render,
  bedanktvue_type_template_id_55e66488_staticRenderFns,
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

/***/ "655a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6d84":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "74cd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina5_vue_vue_type_style_index_0_id_6aabf5f2_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3330");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina5_vue_vue_type_style_index_0_id_6aabf5f2_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina5_vue_vue_type_style_index_0_id_6aabf5f2_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7f90":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina2_vue_vue_type_style_index_0_id_4bb70f06_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3805");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina2_vue_vue_type_style_index_0_id_4bb70f06_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina2_vue_vue_type_style_index_0_id_4bb70f06_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "80a2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/afbeeldingen-samen-mobiel.b5031825.png";

/***/ }),

/***/ "8692":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8e84":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina6_vue_vue_type_style_index_0_id_0e747b3c_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1ae2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina6_vue_vue_type_style_index_0_id_0e747b3c_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina6_vue_vue_type_style_index_0_id_0e747b3c_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "95e2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a111":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAuCAYAAADeIbxeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjPSURBVHgB7VpdTBzXFT6zPwYbGzau7NrY1It/FUUVkLQPSFUAKVHfMFSR+tDKgJqHSlUCmCTtS2Oo+xS3BZKX9qEKuFUf8lJIoqp+qFj3oa5a2V5cp61Dml2CwdQOMJBA9ncm55udi4fdndnZ9bC2kvmkYX7uud+9c86555w7LJEN7Lj1iw5yURZ4Cgn4ZoZbFcnTSy7KgoIGkVSli0htpMhwgFxsOwoahNHKR8CfVNywVQZYGgThSiUK4lolqYtcbDssDZIJVwJu2CoHJP/7rzUSee8nbYlkVaFV7VKiLrFC9MZRUlU5m8RDajhx6qWJAwcOBD0eT7fJWKQoytji4mKUygwxL4zv9XoDqqp2LCwsDNIjCF/y5Cth38yFcUn1vqmSGuTYBKNoUHPE1V7RZng2usvvDSX4Ci/LL62tKkmS8OIBPsvqfSOG+IiSAzh48OAUc0dZsT2FZA3zCvER5Pmc4/NgoX61tbWDkL1z545EZYIPf1InXg5V/me4Le1RBlXJZq5gRROlO9FXaHt+fj7Mp3pcHz58uDWdTkNp/ay0MWPXYDAYSCaTQV3eEkLW7/dHGXIp8sZ5HTp0qDtfHz7hkO2MsZ3Isbx/5pd9qkrDBbqFfGmpJ/Z4f9RMQhiEQ0UPK2QMz9ir2d4SvK4b93xu4/sIzhzKQrrMFM7slW3soee4bdBAO1FRUdETj8dXjGPBg7lfhC/DzNeKlanNksdiZxgSc8E4vFqCvFreFF7P/Xr1OYk+Yzt27OhPJBIj/GzTOY3vsZ3ISerJEwMjJCltZh3Uq+9Ppk6ebbMyhhWgYKwaKMdKDl6ryw5Bebp8YywW6+BreHuUj0n9WqCRld2pyw+hP+ePVrMx9NUCxWtjsNKb+L6DjdHHRunj61F9zvW84iaoDMhfZane3D3HyieU/s27pLzz9xbqCJZcbcED2Wsn7CR3Pf90sRcP+3w+rIR67rdZGHD7ipGH70NipfEZxpRZyaYhWOQV5h3BPUIbjzfORy9Cl6SFZY0rWq5QltcgEqmnjffq8pqsvjdLnmefIu9PvhvwXfhRI5UIftlpO3JQACusiZVyGWEIIQdhib3aauzZrLGg4CBZY9V4oxvhoZX3OQbxR4YbN0tdnpxE6R5/TaBJ+tbXw9LRg0SVFflXkN0BPR45z7NNBaA6wxmK10tV5IEmhA29cjP9rsZtLcZ7lofxTB2A22HAlqzHDXwULDa2C77sB2oyk3AlksLelNQZe/yVaDLT1OS7dWGQJA+XjFqy66MHRGVlpczxGmHpHCdwTaF8QIkhVEnchoTbwEl5lFdIo554NQXr4ayDV820CDkwAMIbVhVCHeT5QFsw3/jYl7AsQuIf+Tyuj48cpZXSolxH+cvtE3aqwgdFzgrJhCt1NHnybFN24k6denmQV0wTG0vmvUurFbH+MiFW5CYH8ofxXo/LPfwc8qjs4LH9yAUiZEGOz2hDGO0XymcMUcaTWwxjjlOmcsQ+A3ugTsT/VCoVxdhcYckYH9eQR77Ri4KAPj6M3oM8hXau6MaEobjfwwljhRQN8J4laEeunEB+gSeTi0cDXxSD+OgLAuxTOMQ81F22CxcuXLhw4cKFCxcubEEKRIYDMYe+bsbq+6NfNr7r168H+H80jvA1NzdHfesJdUSVVKd+4iM5zfdpQunjr1PnyAHwJ5965ut2km9jeaObyBm+K1eu1Nv5oZyLMuKhGSTgqSAXubBlkJadh7XDKTRU7NMOp3DEX01n9jxBTgF8LwSeJKfA39jw8dOWrC2DnKl+gtqrjpNTgPKc5ANXyy7nHKZlZx2d3u3c/Gpqamjv3r22ZG0Z5OlddXSmxjkPbN9z3FG+LhiYFehUGIQDYgU7xbd//37NKPihRiEUNAhCVdBXrU3OibCFF3WSD+GloTKjPCfCIPgwL/A5sYphhOrqau16377C89tiMkzkiL9mi0D77mOb1y889mRO+2xylS5/dpvyIR+f0QhO8BmN8NOvNNORtX87xvcizy/7p4RWfFVVVdqR/UwAK4X/Fbylnf+9TMvLy5v3WwwyHb9Hp9kroKh8QNtpg9e8sXKN3v70AzIDJv4qx2Moyg7fxbX3aOAB+BD7cQhMrn9Azy9eKpkPxvntV799X37jNj13Z9KUb319XcsVdXV1edthnOPH77/v2toazczMbJHZErJkJU5nPw7RD/7/Z4qm1sgMkIMMZHFthZ8tX7HFN3AP416yxffM7bds8T238LYtvm989DtbfM/Mv1WQb25ujq5evUq8e7eUi0QidPPmTYrHt/LlzSEXednjpafjd3PaQgv/pW/yC1zMCg1WsOILr85rfK/L18gu4Nngu/zZnCN8iAxmfLPJNa2tGD4o+caNG7S0tJTTtrQqUzgcxq8w8/Y1TeqYCKlbA+jou7+nztd6KZo09yYrPllJ5PC1/fj7JfNlB3jwfWfoh6XPLx3PM7/v0TQbuVggN2Tni/GpSWob7KG7yx+b9jM1iKhexGQnZv5BDfWnaGXkUknVkaheBN94+C8Zvl9PPTAfwsikPr8Pf/VOSXyoqsTeA3yIBOC7dv4P1PLYUSoFYu8B49ya+5CO7K+lv/78Ih39WtC0j6lBRMmHxIgY+5L/Bn1Ut0t79vTOOioWItkiMSIWnw9ENvlKKS+NfAhRz3v+Sf+q9ZbM164bQ/A9u/4njS9QtUfblxQLGAMlLxL99PQ0Lc0t0rHqAxqfVflrulOBtyCRidiZSeSXtDzQvvsEnedkWAzwUkY+QPCV8sL5+FBkhBN36dW9zTTA18WgveqYVjWeNfQTfC8GnqJiAYMgTyB5CyDhw0CowmAsrJxsmBpk4N6Uluyy8bp8nVfN/7QlXqjiKIYvyCGomNh/fulvefcDKCDwvFi+N9iwVnzFvu/CwgJtbGzkPMeeA0Yxg6lB8ilPYLaEpOk0n9nm7FHhy2cMgexS1wj3/yGPGHyKV5mQ0lKUHILTfORRQqQ44zexSpJ9KWf5FEUJeTwO8cVi8ucyOQkpG8dl1wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "a612":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1000004784_vue_vue_type_style_index_0_id_e3d96738_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e8d2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1000004784_vue_vue_type_style_index_0_id_e3d96738_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1000004784_vue_vue_type_style_index_0_id_e3d96738_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b5f8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina4_vue_vue_type_style_index_0_id_3e0cf2c4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8692");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina4_vue_vue_type_style_index_0_id_3e0cf2c4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina4_vue_vue_type_style_index_0_id_3e0cf2c4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b9c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina1_vue_vue_type_style_index_0_id_10f5238d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d58f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina1_vue_vue_type_style_index_0_id_10f5238d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina1_vue_vue_type_style_index_0_id_10f5238d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bae3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bfe0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landingspagina_vue_vue_type_style_index_0_id_123b36df_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("655a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landingspagina_vue_vue_type_style_index_0_id_123b36df_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landingspagina_vue_vue_type_style_index_0_id_123b36df_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c2b3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d3a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group116046944_vue_vue_type_style_index_0_id_a1a8f2ae_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("34d7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group116046944_vue_vue_type_style_index_0_id_a1a8f2ae_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group116046944_vue_vue_type_style_index_0_id_a1a8f2ae_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e7c2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e8d2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fdd0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.fe406d88.js.map