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

/***/ "0766":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_1590cf6d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2dff");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_1590cf6d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_1590cf6d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0fd3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina6_vue_vue_type_style_index_0_id_381798aa_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9b28");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina6_vue_vue_type_style_index_0_id_381798aa_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina6_vue_vue_type_style_index_0_id_381798aa_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2029":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1_vue_vue_type_style_index_0_id_6f9a7d5f_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("95e2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1_vue_vue_type_style_index_0_id_6f9a7d5f_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1_vue_vue_type_style_index_0_id_6f9a7d5f_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "24d5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2dff":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "345a":
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

/***/ "4150":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina3_vue_vue_type_style_index_0_id_4c530d9e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c4e0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina3_vue_vue_type_style_index_0_id_4c530d9e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina3_vue_vue_type_style_index_0_id_4c530d9e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "42f2":
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc9a6042-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=317579e4
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc9a6042-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Landingspagina.vue?vue&type=template&id=33ae4934
var Landingspaginavue_type_template_id_33ae4934_render = function render() {
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
    staticClass: "maak-kans-op-1-van-de-3-prijzen",
    domProps: {
      "innerHTML": _vm._s(_vm.maakKansOp1VanDe3Prijzen)
    }
  }), _c('img', {
    staticClass: "meer-voordeel-geeft",
    attrs: {
      "src": _vm.meervoordeelGeeftInSamenwerkingMetZ,
      "alt": "MeerVoordeel geeft in samenwerking met Ziggo prijzen weg."
    }
  }), _c('img', {
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
  }, [_c('a', {
    attrs: {
      "href": "/pagina-1"
    }
  }, [_c('div', {
    staticClass: "frame-427320541"
  }, [_c('div', {
    staticClass: "doe-nu-mee diodrumcyrillic-normal-white-23-7px"
  }, [_vm._v("Doe nu mee")]), _c('img', {
    staticClass: "right-arrow",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow.svg",
      "alt": "rightArrow"
    }
  })])])]), _c('group1', {
    attrs: {
      "text1": _vm.group11Props.text1
    }
  }), _c('group1', {
    attrs: {
      "text1": _vm.group12Props.text1,
      "className": _vm.group12Props.className
    }
  }), _c('div', {
    staticClass: "group-3"
  }, [_c('div', {
    staticClass: "overlap-group2"
  }, [_c('div', {
    staticClass: "twv diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v(_vm._s(_vm.tWV))]), _c('div', {
    staticClass: "text-3 valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.text12))])])]), _c('img', {
    staticClass: "hoe-werkt-het",
    attrs: {
      "src": _vm.hoeWerktHet,
      "alt": "Hoe werkt het?"
    }
  }), _c('div', {
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
    staticClass: "flex-row"
  }, [_c('img', {
    staticClass: "meer-over-meer-voordeel",
    attrs: {
      "src": _vm.meerOverMeervoordeel,
      "alt": "Meer over MeerVoordeel"
    }
  }), _c('img', {
    staticClass: "mv-logo-1",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-3.svg",
      "alt": "MV logo 1"
    }
  }), _c('img', {
    staticClass: "image-7",
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
  }, [_vm._v("MeerVoordeel biedt diverse kortings- en voordeelprogramma's aan, aan consumenten in Nederland. In samenwerking met Ziggo, een van de grootste aanbieders van kabeltelevisie, internet en telefoniediensten in Nederland, biedt MeerVoordeel speciale voordelen en kortingen aan nieuwe Ziggo-klanten.\",")]), _c('span', {
    staticClass: "diodrumcyrillic-regular-normal-downriver-25px"
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
  })])])])]);
};
var Landingspaginavue_type_template_id_33ae4934_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Landingspagina.vue?vue&type=template&id=33ae4934

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc9a6042-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Frame1.vue?vue&type=template&id=6f9a7d5f
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc9a6042-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Group1.vue?vue&type=template&id=60c1d084
var Group1vue_type_template_id_60c1d084_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: [`group-1`, _vm.className || ``]
  }, [_c('div', {
    staticClass: "overlap-group-6"
  }, [_c('div', {
    staticClass: "twv-1 diodrumcyrillic-regular-normal-white-16-7px"
  }, [_vm._v("t.w.v.")]), _c('div', {
    staticClass: "text valign-text-bottom diodrumcyrillic-normal-white-33-9px"
  }, [_vm._v(_vm._s(_vm.text1))])])]);
};
var Group1vue_type_template_id_60c1d084_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Group1.vue?vue&type=template&id=60c1d084

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Group1.vue?vue&type=script&lang=js
/* harmony default export */ var Group1vue_type_script_lang_js = ({
  name: "Group1",
  props: ["text1", "className"]
});
// CONCATENATED MODULE: ./src/components/Group1.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Group1vue_type_script_lang_js = (Group1vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Group1.vue?vue&type=style&index=0&id=60c1d084&prod&lang=sass
var Group1vue_type_style_index_0_id_60c1d084_prod_lang_sass = __webpack_require__("57d0");

// CONCATENATED MODULE: ./src/components/Group1.vue






/* normalize component */

var Group1_component = Object(componentNormalizer["a" /* default */])(
  components_Group1vue_type_script_lang_js,
  Group1vue_type_template_id_60c1d084_render,
  Group1vue_type_template_id_60c1d084_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Group1 = (Group1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc9a6042-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Group4.vue?vue&type=template&id=1590cf6d
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc9a6042-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Frame1000004784.vue?vue&type=template&id=47711bf7
var Frame1000004784vue_type_template_id_47711bf7_render = function render() {
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
var Frame1000004784vue_type_template_id_47711bf7_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Frame1000004784.vue?vue&type=template&id=47711bf7

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc9a6042-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Group116046944.vue?vue&type=template&id=a1a8f2ae
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
// EXTERNAL MODULE: ./src/components/Frame1000004784.vue?vue&type=style&index=0&id=47711bf7&prod&lang=sass
var Frame1000004784vue_type_style_index_0_id_47711bf7_prod_lang_sass = __webpack_require__("b5ce");

// CONCATENATED MODULE: ./src/components/Frame1000004784.vue






/* normalize component */

var Frame1000004784_component = Object(componentNormalizer["a" /* default */])(
  components_Frame1000004784vue_type_script_lang_js,
  Frame1000004784vue_type_template_id_47711bf7_render,
  Frame1000004784vue_type_template_id_47711bf7_staticRenderFns,
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
  props: ["samsung1", "maakKansOp1VanDe3Prijzen", "meervoordeelGeeftInSamenwerkingMetZ", "bolcomBon1", "image2", "doeNuMee", "tWV", "text12", "hoeWerktHet", "x1", "kiesJouwPrijs", "beantwoordDeVraag", "controleerOfJouwP", "meerOverMeervoordeel", "image7", "spanText1", "spanText2", "image8", "meervoordeelNlIs", "group11Props", "group12Props", "group41Props", "group42Props", "frame1000004784Props"]
  // async navigateToNextPage() {
  //     const isValid = await this.validateAddress();
  //     if (!isValid) return;

  //     this.$router.push('/ziggo/pagina-1');
  //   },
});
// CONCATENATED MODULE: ./src/components/Landingspagina.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Landingspaginavue_type_script_lang_js = (Landingspaginavue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Landingspagina.vue?vue&type=style&index=0&id=33ae4934&prod&lang=sass
var Landingspaginavue_type_style_index_0_id_33ae4934_prod_lang_sass = __webpack_require__("c87b");

// CONCATENATED MODULE: ./src/components/Landingspagina.vue






/* normalize component */

var Landingspagina_component = Object(componentNormalizer["a" /* default */])(
  components_Landingspaginavue_type_script_lang_js,
  Landingspaginavue_type_template_id_33ae4934_render,
  Landingspaginavue_type_template_id_33ae4934_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Landingspagina = (Landingspagina_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc9a6042-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina1.vue?vue&type=template&id=2315cb88
var Pagina1vue_type_template_id_2315cb88_render = function render() {
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
  }, [_c('img', {
    staticClass: "frame-427320545-item",
    attrs: {
      "src": _vm.stap1Van3,
      "alt": "Stap 1 van 3"
    }
  }), _c('img', {
    staticClass: "frame-427320545-item",
    attrs: {
      "src": _vm.vertelOnsWelkePrijsJeWiltWinnen,
      "alt": "Vertel ons welke prijs je wilt winnen:"
    }
  })]), _c('img', {
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
  }, _vm._l(_vm.products, function (product) {
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
  }), 0), _c('div', {
    staticClass: "frame-427320541-1",
    on: {
      "click": _vm.goToStep2
    }
  }, [_c('div', {
    staticClass: "ga-naar-stap-2 diodrumcyrillic-normal-white-23-7px"
  }, [_vm._v("Ga naar stap 2")]), _c('img', {
    staticClass: "right-arrow-1",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow.svg",
      "alt": "rightArrow"
    }
  })]), _c('group1', {
    attrs: {
      "text1": _vm.group11Props.text1,
      "className": _vm.group11Props.className
    }
  }), _c('group1', {
    attrs: {
      "text1": _vm.group12Props.text1,
      "className": _vm.group12Props.className
    }
  }), _c('group1', {
    attrs: {
      "text1": _vm.group13Props.text1,
      "className": _vm.group13Props.className
    }
  }), _c('frame1000004784', {
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
  })])])])]);
};
var Pagina1vue_type_template_id_2315cb88_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina1.vue?vue&type=template&id=2315cb88

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc9a6042-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RadioButtonSelected.vue?vue&type=template&id=788309c1
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
// CONCATENATED MODULE: ./src/antwoorden.js

// antwoorden.js
let antwoorden = [];
function addAntwoord(answer) {
  antwoorden.push(answer);
}
function getAntwoorden() {
  return antwoorden;
}
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
      console.log(this.chosenProduct);
      if (this.chosenProduct) {
        addAntwoord(this.chosenProduct);
        this.$router.push({
          path: '/pagina-2'
        });
      } else {
        alert('Kies alstublieft een product voordat je verder gaat.');
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
// EXTERNAL MODULE: ./src/components/Pagina1.vue?vue&type=style&index=0&id=2315cb88&prod&lang=sass
var Pagina1vue_type_style_index_0_id_2315cb88_prod_lang_sass = __webpack_require__("e358");

// CONCATENATED MODULE: ./src/components/Pagina1.vue






/* normalize component */

var Pagina1_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina1vue_type_script_lang_js,
  Pagina1vue_type_template_id_2315cb88_render,
  Pagina1vue_type_template_id_2315cb88_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina1 = (Pagina1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc9a6042-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina2.vue?vue&type=template&id=3d1a8a1e
var Pagina2vue_type_template_id_3d1a8a1e_render = function render() {
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
  }, [_c('img', {
    staticClass: "frame-427320545-item-1",
    attrs: {
      "src": _vm.stap2Van3,
      "alt": "Stap 2 van 3"
    }
  }), _c('img', {
    staticClass: "frame-427320545-item-1",
    attrs: {
      "src": _vm.watIsJouwHuidigeProvider,
      "alt": "Wat is jouw huidige provider?"
    }
  })]), _c('img', {
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
    staticClass: "ga-naar-de-laatste-stap diodrumcyrillic-normal-white-23-7px"
  }, [_vm._v("Ga naar de laatste stap")]), _c('img', {
    staticClass: "right-arrow-2",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow.svg",
      "alt": "rightArrow"
    }
  })])]), _c('group1', {
    attrs: {
      "text1": _vm.group11Props.text1,
      "className": _vm.group11Props.className
    }
  }), _c('group1', {
    attrs: {
      "text1": _vm.group12Props.text1,
      "className": _vm.group12Props.className
    }
  }), _c('group1', {
    attrs: {
      "text1": _vm.group13Props.text1,
      "className": _vm.group13Props.className
    }
  }), _c('frame1000004784', {
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
  }, [_vm._v("KPN")])])])])])])]), _c('img', {
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
  })])])])]);
};
var Pagina2vue_type_template_id_3d1a8a1e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina2.vue?vue&type=template&id=3d1a8a1e

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
      gekozenProduct: '',
      gekozenProvider: '' // Nieuwe eigenschap voor de geselecteerde provider
    };
  },
  mounted() {
    const antwoordenLijst = getAntwoorden();
    console.log('Alle antwoorden:', antwoordenLijst);
  },
  methods: {
    selectProvider(event) {
      this.gekozenProvider = event.target.value; // Sla de gekozen provider op
    },
    goToStep3() {
      if (!this.gekozenProvider) {
        alert('Kies alstublieft een provider voordat u doorgaat.'); // Waarschuwing als er geen provider is geselecteerd
        return; // Stop de navigatie
      }
      addAntwoord(this.gekozenProvider);
      this.$router.push({
        path: '/pagina-3'
      }); // Navigeer naar Pagina 3
    }
  },
  props: ["samsung1", "stap2Van3", "watIsJouwHuidigeProvider", "bolcomBon1", "image2", "gaNaarDeLaatsteStap", "ziggo", "anders", "odido", "group", "kpn", "meervoordeelNlIs", "group11Props", "group12Props", "group13Props", "frame1000004784Props"]
});
// CONCATENATED MODULE: ./src/components/Pagina2.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina2vue_type_script_lang_js = (Pagina2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina2.vue?vue&type=style&index=0&id=3d1a8a1e&prod&lang=sass
var Pagina2vue_type_style_index_0_id_3d1a8a1e_prod_lang_sass = __webpack_require__("ad4b");

// CONCATENATED MODULE: ./src/components/Pagina2.vue






/* normalize component */

var Pagina2_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina2vue_type_script_lang_js,
  Pagina2vue_type_template_id_3d1a8a1e_render,
  Pagina2vue_type_template_id_3d1a8a1e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina2 = (Pagina2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc9a6042-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina3.vue?vue&type=template&id=4c530d9e
var Pagina3vue_type_template_id_4c530d9e_render = function render() {
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
  }, [_c('img', {
    staticClass: "stap-3-van-3",
    attrs: {
      "src": _vm.stap3Van3,
      "alt": "Stap 3 van 3"
    }
  }), _c('p', {
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
  }, [_vm._v(_vm._s(_vm.postcodeError))]) : _vm._e(), _c('group1', {
    attrs: {
      "text1": _vm.group11Props.text1,
      "className": _vm.group11Props.className
    }
  }), _c('group1', {
    attrs: {
      "text1": _vm.group12Props.text1,
      "className": _vm.group12Props.className
    }
  }), _c('group1', {
    attrs: {
      "text1": _vm.group13Props.text1,
      "className": _vm.group13Props.className
    }
  }), _c('frame1000004784', {
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
  }), _c('div', [_vm._v(_vm._s(_vm.chosenProduct))])])])])]);
};
var Pagina3vue_type_template_id_4c530d9e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina3.vue?vue&type=template&id=4c530d9e

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina3.vue?vue&type=script&lang=js





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
      postcodeError: '' // Foutmelding voor de postcode
    };
  },
  mounted() {
    const antwoordenLijst = getAntwoorden();
    this.chosenProduct = antwoordenLijst[antwoordenLijst.length - 2] || 'geen basta gekozen';
    console.log('Gekozen product:', this.chosenProduct);
    localStorage.setItem('antwoorden', JSON.stringify(antwoordenLijst));

    // Voeg een event listener toe voor de Enter-toets
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroy() {
    // Verwijder de event listener om geheugenlekken te voorkomen
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    validatePostcode(postcode) {
      const postcodeRegex = /^\d{4}[- ]?[a-zA-Z]{2}$/;
      return postcodeRegex.test(postcode);
    },
    checkPostcode() {
      const inputValue = this.$refs.postcodeInput.value; // Gebruik refs om toegang te krijgen tot het inputveld
      if (this.validatePostcode(inputValue)) {
        this.postcodeError = ''; // Reset de foutmelding
        console.log("Postcode is geldig:", inputValue);

        // Sla de postcode op in localStorage
        localStorage.setItem('postcode', inputValue);

        // Hier kun je doorgaan naar de volgende pagina
        this.$router.push('/pagina-4'); // Navigeer naar de volgende pagina
      } else {
        this.postcodeError = 'Voer een geldige postcode in (bijv. 2222 AB)'; // Zet de foutmelding
        console.log("Postcode is ongeldig:", inputValue);
      }
    },
    handleKeyDown(event) {
      // Controleer of de Enter-toets is ingedrukt
      if (event.key === 'Enter') {
        this.checkPostcode(); // Roep de checkPostcode methode aan
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Pagina3.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina3vue_type_script_lang_js = (Pagina3vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina3.vue?vue&type=style&index=0&id=4c530d9e&prod&lang=sass
var Pagina3vue_type_style_index_0_id_4c530d9e_prod_lang_sass = __webpack_require__("4150");

// CONCATENATED MODULE: ./src/components/Pagina3.vue






/* normalize component */

var Pagina3_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina3vue_type_script_lang_js,
  Pagina3vue_type_template_id_4c530d9e_render,
  Pagina3vue_type_template_id_4c530d9e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina3 = (Pagina3_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc9a6042-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina4.vue?vue&type=template&id=0b42fe9a
var Pagina4vue_type_template_id_0b42fe9a_render = function render() {
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
    staticClass: "meervoordeelnl-check",
    attrs: {
      "src": _vm.meervoordeelNlChecktNuOfJijKansMaak,
      "alt": "Meervoordeel.nl checkt nu of jij kans maakt op de prijs..."
    }
  }), _c('img', {
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
  }), _c('img', {
    staticClass: "loading-sign-1",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/loading-sign-1.svg",
      "alt": "loading-sign 1"
    }
  }), _c('group1', {
    attrs: {
      "text1": _vm.group11Props.text1,
      "className": _vm.group11Props.className
    }
  }), _c('group1', {
    attrs: {
      "text1": _vm.group12Props.text1,
      "className": _vm.group12Props.className
    }
  }), _c('group1', {
    attrs: {
      "text1": _vm.group13Props.text1,
      "className": _vm.group13Props.className
    }
  }), _c('frame1000004784', {
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
  })])])])]);
};
var Pagina4vue_type_template_id_0b42fe9a_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina4.vue?vue&type=template&id=0b42fe9a

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
    const antwoordenLijst = getAntwoorden();
    // Toewijzen van het laatste antwoord aan chosenProduct
    this.chosenProduct = antwoordenLijst[antwoordenLijst.length - 2] || 'geen basta gekozen';
    console.log('Gekozen product:', this.chosenProduct);
  },
  mounted() {
    // Start a 3-second timer
    setTimeout(() => {
      // Redirect to /pagina-5 after 3 seconds
      this.$router.push("/pagina-6");
    }, 3000);
  }
});
// CONCATENATED MODULE: ./src/components/Pagina4.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina4vue_type_script_lang_js = (Pagina4vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina4.vue?vue&type=style&index=0&id=0b42fe9a&prod&lang=sass
var Pagina4vue_type_style_index_0_id_0b42fe9a_prod_lang_sass = __webpack_require__("b92d");

// CONCATENATED MODULE: ./src/components/Pagina4.vue






/* normalize component */

var Pagina4_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina4vue_type_script_lang_js,
  Pagina4vue_type_template_id_0b42fe9a_render,
  Pagina4vue_type_template_id_0b42fe9a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina4 = (Pagina4_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc9a6042-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina5.vue?vue&type=template&id=4386c575
var Pagina5vue_type_template_id_4386c575_render = function render() {
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
    staticClass: "background-6"
  }), _c('img', {
    staticClass: "line-4",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-4.svg",
      "alt": "Line 4"
    }
  }), _c('p', {
    staticClass: "hoe-kunnen-wij-jou-bereiken"
  }, [_vm._v(_vm._s(_vm.hoeKunnenWijJouBereiken))]), _c('div', {
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
  }), _c('img', {
    staticClass: "form-icoon",
    attrs: {
      "src": __webpack_require__("03c5"),
      "alt": "Naam Icon"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.voornaam,
      expression: "voornaam"
    }],
    attrs: {
      "type": "text",
      "id": "voornaam",
      "required": "",
      "placeholder": "Vul je voornaam in"
    },
    domProps: {
      "value": _vm.voornaam
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.voornaam = $event.target.value;
      }
    }
  })]), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "achternaam"
    }
  }), _c('img', {
    staticClass: "form-icoon",
    attrs: {
      "src": __webpack_require__("03c5"),
      "alt": "Achternaam Icon"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.achternaam,
      expression: "achternaam"
    }],
    attrs: {
      "type": "text",
      "id": "achternaam",
      "required": "",
      "placeholder": "Vul je achternaam in"
    },
    domProps: {
      "value": _vm.achternaam
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.achternaam = $event.target.value;
      }
    }
  })])]), _c('div', {
    staticClass: "form-group full-width"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }), _c('img', {
    staticClass: "form-icoon-2",
    attrs: {
      "src": __webpack_require__("349e"),
      "alt": "Email Icon"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.email,
      expression: "email"
    }],
    attrs: {
      "type": "email",
      "id": "email",
      "required": "",
      "placeholder": "Vul je e-mailadres in"
    },
    domProps: {
      "value": _vm.email
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.email = $event.target.value;
      }
    }
  })]), _c('div', {
    staticClass: "form-group full-width"
  }, [_c('label', {
    attrs: {
      "for": "telefoonnummer"
    }
  }), _c('img', {
    staticClass: "form-icoon-2",
    attrs: {
      "src": __webpack_require__("9d82"),
      "alt": "Telefoonnummer Icon"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.telefoonnummer,
      expression: "telefoonnummer"
    }],
    attrs: {
      "type": "tel",
      "id": "telefoonnummer",
      "required": "",
      "placeholder": "Vul je telefoonnummer in"
    },
    domProps: {
      "value": _vm.telefoonnummer
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.telefoonnummer = $event.target.value;
      }
    }
  })])]), _c('div', {
    staticClass: "frame-427320570"
  }, [_c('div', {
    staticClass: "frame-2-1"
  }, [_c('button', {
    staticClass: "frame-2-1 invisible-button",
    on: {
      "click": _vm.submitForm
    }
  }, [_c('div', {
    staticClass: "bevestig-mijn-deelname diodrumcyrillic-normal-white-23-7px"
  }, [_vm._v(_vm._s(_vm.bevestigMijnDeelname))]), _c('img', {
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
    staticClass: "text-19 valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.text19))])])]), _c('img', {
    staticClass: "vector-1",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/vector-1.svg",
      "alt": "Vector"
    }
  }), _c('img', {
    staticClass: "jouw-gekozen-prijs",
    attrs: {
      "src": _vm.jouwGekozenPrijs,
      "alt": "Jouw gekozen prijs:"
    }
  }), _c('div', {
    staticClass: "playstation-5-slim-disk"
  }, [_vm._v(_vm._s(_vm.playstation5SlimDisk))]), _c('frame1000004784', {
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
  })])])])]);
};
var Pagina5vue_type_template_id_4386c575_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina5.vue?vue&type=template&id=4386c575

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
      chosenProduct: '',
      voornaam: '',
      achternaam: '',
      email: '',
      telefoonnummer: ''
    };
  },
  mounted() {
    // Haal de antwoorden op uit localStorage
    const antwoordenLijst = JSON.parse(localStorage.getItem('antwoorden')) || [];
    this.chosenProduct = antwoordenLijst[antwoordenLijst.length - 2] || 'geen product gekozen';
  },
  methods: {
    async submitForm() {
      const antwoordenLijst = JSON.parse(localStorage.getItem('antwoorden')) || [];
      const gekozenProductId = this.getProductId(this.chosenProduct);
      const gekozenMerkId = this.getMerkId(antwoordenLijst);

      // Configuratie voor de API-aanroep
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
        // een voorbeeld van een IP-adres
        optin_timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        firstname: this.voornaam,
        lastname: this.achternaam,
        email: this.email,
        phone_number: this.telefoonnummer,
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
        if (response.ok) {
          console.log('Lead succesvol verstuurd.');
          // Eventueel een succesmelding of redirect hier
        } else {
          console.error('Fout bij versturen van lead:', await response.text());
        }
      } catch (error) {
        console.error('Netwerk- of serverfout:', error);
      }
    },
    getProductId(product) {
      const productMap = {
        'SAMSUNG 60" TV': 5284,
        'Playstation 5 Slim Disk': 5287,
        'Bol.com cadeaubon t.w.v. €400': 5290
      };
      return productMap[product] || null;
    },
    getMerkId(antwoordenLijst) {
      const merkMap = {
        'Odido': 5272,
        'KPN': 5275,
        'Ziggo': 5278,
        'Anders': 5281
      };
      for (let antwoord of antwoordenLijst) {
        if (merkMap[antwoord]) {
          return merkMap[antwoord];
        }
      }
      return null;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Pagina5.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina5vue_type_script_lang_js = (Pagina5vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina5.vue?vue&type=style&index=0&id=4386c575&prod&lang=sass
var Pagina5vue_type_style_index_0_id_4386c575_prod_lang_sass = __webpack_require__("860d");

// CONCATENATED MODULE: ./src/components/Pagina5.vue






/* normalize component */

var Pagina5_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina5vue_type_script_lang_js,
  Pagina5vue_type_template_id_4386c575_render,
  Pagina5vue_type_template_id_4386c575_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina5 = (Pagina5_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc9a6042-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagina6.vue?vue&type=template&id=381798aa
var Pagina6vue_type_template_id_381798aa_render = function render() {
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
  }), _c('frame1'), _c('img', {
    staticClass: "jouw-postcode-is-goedgekeurd",
    attrs: {
      "src": _vm.jouwPostcodeIsGoedgekeurd,
      "alt": "Jouw postcode is goedgekeurd!"
    }
  }), _c('img', {
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
  }), _c('group1', {
    attrs: {
      "text1": _vm.group11Props.text1,
      "className": _vm.group11Props.className
    }
  }), _c('group1', {
    attrs: {
      "text1": _vm.group12Props.text1,
      "className": _vm.group12Props.className
    }
  }), _c('group1', {
    attrs: {
      "text1": _vm.group13Props.text1,
      "className": _vm.group13Props.className
    }
  }), _c('img', {
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
  })])])])]);
};
var Pagina6vue_type_template_id_381798aa_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagina6.vue?vue&type=template&id=381798aa

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
    const antwoordenLijst = getAntwoorden();
    // Toewijzen van het laatste antwoord aan chosenProduct
    this.chosenProduct = antwoordenLijst[antwoordenLijst.length - 2] || 'geen basta gekozen';
    console.log('Gekozen product:', this.chosenProduct);
  },
  mounted() {
    // Start a 3-second timer
    setTimeout(() => {
      // Redirect to /pagina-5 after 3 seconds
      this.$router.push("/pagina-5");
    }, 3000);
  }
});
// CONCATENATED MODULE: ./src/components/Pagina6.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagina6vue_type_script_lang_js = (Pagina6vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagina6.vue?vue&type=style&index=0&id=381798aa&prod&lang=sass
var Pagina6vue_type_style_index_0_id_381798aa_prod_lang_sass = __webpack_require__("0fd3");

// CONCATENATED MODULE: ./src/components/Pagina6.vue






/* normalize component */

var Pagina6_component = Object(componentNormalizer["a" /* default */])(
  components_Pagina6vue_type_script_lang_js,
  Pagina6vue_type_template_id_381798aa_render,
  Pagina6vue_type_template_id_381798aa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagina6 = (Pagina6_component.exports);
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
  // base: "/ziggo/", 
  routes: [{
    path: "/pagina-1",
    component: Pagina1,
    props: {
      ...pagina1Data
    }
  }, {
    path: "/landingspagina",
    component: Landingspagina,
    props: {
      ...landingspaginaData
    }
  }, {
    path: "/pagina-2",
    component: Pagina2,
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
  render: h => h(App),
  router: router
}).$mount("#app");

/***/ }),

/***/ "57d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group1_vue_vue_type_style_index_0_id_60c1d084_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e3e0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group1_vue_vue_type_style_index_0_id_60c1d084_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group1_vue_vue_type_style_index_0_id_60c1d084_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6009":
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

/***/ "8253":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "860d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina5_vue_vue_type_style_index_0_id_4386c575_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8253");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina5_vue_vue_type_style_index_0_id_4386c575_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina5_vue_vue_type_style_index_0_id_4386c575_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "95e2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9b28":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9d82":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/tel-nummer-icoon.0bb0d9c7.svg";

/***/ }),

/***/ "9f45":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ad4b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina2_vue_vue_type_style_index_0_id_3d1a8a1e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6009");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina2_vue_vue_type_style_index_0_id_3d1a8a1e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina2_vue_vue_type_style_index_0_id_3d1a8a1e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b5ce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1000004784_vue_vue_type_style_index_0_id_47711bf7_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("345a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1000004784_vue_vue_type_style_index_0_id_47711bf7_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame1000004784_vue_vue_type_style_index_0_id_47711bf7_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b92d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina4_vue_vue_type_style_index_0_id_0b42fe9a_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("42f2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina4_vue_vue_type_style_index_0_id_0b42fe9a_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina4_vue_vue_type_style_index_0_id_0b42fe9a_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bae3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c4e0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c87b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landingspagina_vue_vue_type_style_index_0_id_33ae4934_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9f45");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landingspagina_vue_vue_type_style_index_0_id_33ae4934_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landingspagina_vue_vue_type_style_index_0_id_33ae4934_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d3a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group116046944_vue_vue_type_style_index_0_id_a1a8f2ae_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("34d7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group116046944_vue_vue_type_style_index_0_id_a1a8f2ae_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group116046944_vue_vue_type_style_index_0_id_a1a8f2ae_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e358":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina1_vue_vue_type_style_index_0_id_2315cb88_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("24d5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina1_vue_vue_type_style_index_0_id_2315cb88_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagina1_vue_vue_type_style_index_0_id_2315cb88_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e3e0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.8896d10d.js.map