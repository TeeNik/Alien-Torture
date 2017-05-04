/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class baseComponent {
    constructor(options = null) {
        this.content = document.createElement('div');
        this.options = options;
        //this.renderTemplate = renderTemplate;
        //this.render(this.renderTemplate);
    }

    render(renderTemplate) {
        //to override
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = baseComponent;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*import Manage from './manage'
//import {renderAll} from './../main'

let manage = new Manage();

export var Router = {
    routes: {
        "/": "indexPage",
        "/rating": "ratingPage",
        "/about": "aboutPage",
        "/login": "loginPage"
    },
    init: function (){
        this._routes = [];
        for( var route in this.routes ){
            var methodName = this.routes[route];
            this._routes.push({
                pattern: new RegExp('^'+route.replace(/:\w+/, '(\\w+)')+'$'),
                callback: this[methodName]
            });
        }
    },
    nav: function (path){
        var i = this._routes.length;
        while( i-- ){
            var args = path.match(this._routes[i].pattern);
            if( args ){
                this._routes[i].callback.apply(this, args.slice(1));
            }
        }
    },

    indexPage: function () {
        history.pushState(null, null, "/");
        manage.showInd();
    },

    ratingPage: function () {
        history.pushState(null, null, "/rating");
        manage.showRating();
    },

    aboutPage: function () {
        history.pushState(null, null, "/about");
        manage.showAbout();
    },

    loginPage: function () {
        history.pushState(null, null, "/login");
        manage.showLogin();
    }
};

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

window.onpopstate = function(e){
    e.preventDefault();
    var l = getLocation(document.location.href);
    Router.nav(l.pathname);
}

Router.init();
let str = getLocation(document.location.href).pathname;


Router.init();
alert(str.substring(0, str.length - 1));
//renderAll();
Router.nav(str.substring(0, str.length - 1));*/

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseComponent__ = __webpack_require__(0);


class About extends __WEBPACK_IMPORTED_MODULE_0__baseComponent__["a" /* default */] {
    render(renderTemplate) {
        this.content.innerHTML = renderTemplate;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = About;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseComponent__ = __webpack_require__(0);


class Menu extends __WEBPACK_IMPORTED_MODULE_0__baseComponent__["a" /* default */] {
    render(renderTemplate) {
        this.content.innerHTML = renderTemplate;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseComponent__ = __webpack_require__(0);


class Rating extends __WEBPACK_IMPORTED_MODULE_0__baseComponent__["a" /* default */] {
    render(renderTemplate) {
        this.content.innerHTML = renderTemplate;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Rating;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderAbout;
function pug_escape(e) {
    var a = "" + e,
        t = pug_match_html.exec(a);
    if (!t) return e;
    var r,
        c,
        n,
        s = "";
    for (r = t.index, c = 0; r < a.length; r++) {
        switch (a.charCodeAt(r)) {
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function pug_rethrow(n, e, r, t) {
    if (!(n instanceof Error)) throw n;
    if (!("undefined" == typeof window && e || t)) throw n.message += " on line " + r, n;
    try {
        t = t || __webpack_require__(1).readFileSync(e, "utf8");
    } catch (e) {
        pug_rethrow(n, null, r);
    }
    var i = 3,
        a = t.split("\n"),
        o = Math.max(r - i, 0),
        h = Math.min(a.length, r + i),
        i = a.slice(o, h).map(function (n, e) {
        var t = e + o + 1;
        return (t == r ? "  > " : "    ") + t + "| " + n;
    }).join("\n");
    throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n;
}
function renderAbout(locals) {
    var pug_html = "",
        pug_mixins = {},
        pug_interp;
    var pug_debug_filename, pug_debug_line;
    try {
        var pug_debug_sources = { "front\u002FcomponentTemplates\u002FaboutTemplate.pug": "div\r\n    h1(class='h1Title') Our Team\r\n    div(class='aboutBody')\r\n        - var names = [[\"Kuchaeva Karina\", \"Fullstack\"], [\"Zlobina Svetlana\", \"Fullstack\"], [\"Ovchinnikov Maksim\", \"Designer\"], [\"Bayramukov Yan\", \"Bug Designer\"], [\"Mashkin Egor\", \"Produser\"], [\"Vasilchenko Semen\", \"Tester\u002FIdol\"]];\r\n        each name in names\r\n            p #{name[0]} - #{name[1]}\r\n\r\n\r\n\r\n" };
        var pug_indent = [];
        ;
        pug_debug_line = 1;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        pug_html = pug_html + "\n\u003Cdiv\u003E";
        ;
        pug_debug_line = 2;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        pug_html = pug_html + "\n  \u003Ch1 class=\"h1Title\"\u003E";
        ;
        pug_debug_line = 2;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        pug_html = pug_html + "Our Team\u003C\u002Fh1\u003E";
        ;
        pug_debug_line = 3;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        pug_html = pug_html + "\n  \u003Cdiv class=\"aboutBody\"\u003E";
        ;
        pug_debug_line = 4;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        var names = [["Kuchaeva Karina", "Fullstack"], ["Zlobina Svetlana", "Fullstack"], ["Ovchinnikov Maksim", "Designer"], ["Bayramukov Yan", "Bug Designer"], ["Mashkin Egor", "Produser"], ["Vasilchenko Semen", "Tester/Idol"]];
        ;
        pug_debug_line = 5;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        // iterate names
        ;
        (function () {
            var $$obj = names;
            if ('number' == typeof $$obj.length) {
                for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
                    var name = $$obj[pug_index0];
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + "\n    \u003Cp\u003E";
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = name[0]) ? "" : pug_interp);
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + " - ";
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = name[1]) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
                }
            } else {
                var $$l = 0;
                for (var pug_index0 in $$obj) {
                    $$l++;
                    var name = $$obj[pug_index0];
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + "\n    \u003Cp\u003E";
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = name[0]) ? "" : pug_interp);
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + " - ";
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = name[1]) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
                }
            }
        }).call(this);

        pug_html = pug_html + "\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";
    } catch (err) {
        pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
    }
    ;
    return pug_html;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderMenu;
function pug_escape(e) {
    var a = "" + e,
        t = pug_match_html.exec(a);
    if (!t) return e;
    var r,
        c,
        n,
        s = "";
    for (r = t.index, c = 0; r < a.length; r++) {
        switch (a.charCodeAt(r)) {
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function pug_rethrow(n, e, r, t) {
    if (!(n instanceof Error)) throw n;
    if (!("undefined" == typeof window && e || t)) throw n.message += " on line " + r, n;
    try {
        t = t || __webpack_require__(1).readFileSync(e, "utf8");
    } catch (e) {
        pug_rethrow(n, null, r);
    }
    var i = 3,
        a = t.split("\n"),
        o = Math.max(r - i, 0),
        h = Math.min(a.length, r + i),
        i = a.slice(o, h).map(function (n, e) {
        var t = e + o + 1;
        return (t == r ? "  > " : "    ") + t + "| " + n;
    }).join("\n");
    throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n;
}
function renderMenu(locals) {
    var pug_html = "",
        pug_mixins = {},
        pug_interp;
    var pug_debug_filename, pug_debug_line;
    try {
        var pug_debug_sources = { "front\u002FcomponentTemplates\u002FmenuTemplate.pug": "div\r\n    h1(class='h1Title') Break Away\r\n    div(class='menuBody')\r\n        if logicAuth\r\n            p(id='menuStartAuth' class='title stroke')= 'Start'\r\n        else\r\n            p(id='menuStartNotAuth' class='title stroke')= 'Start'\r\n        p(id='menuRating' class='title')= 'Rating'\r\n        p(id='menuAbout' class='title')= 'About'\r\n        if logicAuth\r\n            p(id='menuLogout' class='title')= 'Logout'\r\n\r\n\r\n" };
        ;
        var locals_for_with = locals || {};
        (function (logicAuth) {
            var pug_indent = [];
            ;
            pug_debug_line = 1;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + "\n\u003Cdiv\u003E";
            ;
            pug_debug_line = 2;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + "\n  \u003Ch1 class=\"h1Title\"\u003E";
            ;
            pug_debug_line = 2;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + "Break Away\u003C\u002Fh1\u003E";
            ;
            pug_debug_line = 3;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + "\n  \u003Cdiv class=\"menuBody\"\u003E";
            ;
            pug_debug_line = 4;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            if (logicAuth) {
                ;
                pug_debug_line = 5;
                pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
                pug_html = pug_html + "\n    \u003Cp class=\"title stroke\" id=\"menuStartAuth\"\u003E";
                ;
                pug_debug_line = 5;
                pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
                pug_html = pug_html + pug_escape(null == (pug_interp = 'Start') ? "" : pug_interp) + "\u003C\u002Fp\u003E";
            } else {
                ;
                pug_debug_line = 7;
                pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
                pug_html = pug_html + "\n    \u003Cp class=\"title stroke\" id=\"menuStartNotAuth\"\u003E";
                ;
                pug_debug_line = 7;
                pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
                pug_html = pug_html + pug_escape(null == (pug_interp = 'Start') ? "" : pug_interp) + "\u003C\u002Fp\u003E";
            }
            ;
            pug_debug_line = 8;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + "\n    \u003Cp class=\"title\" id=\"menuRating\"\u003E";
            ;
            pug_debug_line = 8;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + pug_escape(null == (pug_interp = 'Rating') ? "" : pug_interp) + "\u003C\u002Fp\u003E";
            ;
            pug_debug_line = 9;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + "\n    \u003Cp class=\"title\" id=\"menuAbout\"\u003E";
            ;
            pug_debug_line = 9;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + pug_escape(null == (pug_interp = 'About') ? "" : pug_interp) + "\u003C\u002Fp\u003E";
            ;
            pug_debug_line = 10;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            if (logicAuth) {
                ;
                pug_debug_line = 11;
                pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
                pug_html = pug_html + "\n    \u003Cp class=\"title\" id=\"menuLogout\"\u003E";
                ;
                pug_debug_line = 11;
                pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
                pug_html = pug_html + pug_escape(null == (pug_interp = 'Logout') ? "" : pug_interp) + "\u003C\u002Fp\u003E";
            }
            pug_html = pug_html + "\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";
        }).call(this, "logicAuth" in locals_for_with ? locals_for_with.logicAuth : typeof logicAuth !== "undefined" ? logicAuth : undefined);
    } catch (err) {
        pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
    }
    ;
    return pug_html;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderRating;
function pug_escape(e) {
  var a = "" + e,
      t = pug_match_html.exec(a);if (!t) return e;var r,
      c,
      n,
      s = "";for (r = t.index, c = 0; r < a.length; r++) {
    switch (a.charCodeAt(r)) {case 34:
        n = "&quot;";break;case 38:
        n = "&amp;";break;case 60:
        n = "&lt;";break;case 62:
        n = "&gt;";break;default:
        continue;}c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
  }return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function pug_rethrow(n, e, r, t) {
  if (!(n instanceof Error)) throw n;if (!("undefined" == typeof window && e || t)) throw n.message += " on line " + r, n;try {
    t = t || __webpack_require__(1).readFileSync(e, "utf8");
  } catch (e) {
    pug_rethrow(n, null, r);
  }var i = 3,
      a = t.split("\n"),
      o = Math.max(r - i, 0),
      h = Math.min(a.length, r + i),
      i = a.slice(o, h).map(function (n, e) {
    var t = e + o + 1;return (t == r ? "  > " : "    ") + t + "| " + n;
  }).join("\n");throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n;
}function renderRating(locals) {
  var pug_html = "",
      pug_mixins = {},
      pug_interp;var pug_debug_filename, pug_debug_line;try {
    var pug_debug_sources = { "front\u002FcomponentTemplates\u002FratingTemplate.pug": "div\r\n    h1(class='h1Title') Rating\r\n    div(class='ratingBody')\r\n        ol\r\n            each val in players\r\n                li= val\r\n\r\n\u002F\u002F['Player1', \"Player2\", \"Player3\", \"Player4\", \"Player5\", \"Player6\", \"Player7\", \"Player8\", \"Player9\", \"Player10\",]\r\n" };
    ;var locals_for_with = locals || {};(function (players) {
      ;pug_debug_line = 1;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\u003Cdiv\u003E";
      ;pug_debug_line = 2;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\u003Ch1 class=\"h1Title\"\u003E";
      ;pug_debug_line = 2;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "Rating\u003C\u002Fh1\u003E";
      ;pug_debug_line = 3;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\u003Cdiv class=\"ratingBody\"\u003E";
      ;pug_debug_line = 4;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\u003Col\u003E";
      ;pug_debug_line = 5;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      // iterate players
      ;(function () {
        var $$obj = players;
        if ('number' == typeof $$obj.length) {
          for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
            var val = $$obj[pug_index0];
            ;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
            pug_html = pug_html + "\u003Cli\u003E";
            ;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
            pug_html = pug_html + pug_escape(null == (pug_interp = val) ? "" : pug_interp) + "\u003C\u002Fli\u003E";
          }
        } else {
          var $$l = 0;
          for (var pug_index0 in $$obj) {
            $$l++;
            var val = $$obj[pug_index0];
            ;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
            pug_html = pug_html + "\u003Cli\u003E";
            ;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
            pug_html = pug_html + pug_escape(null == (pug_interp = val) ? "" : pug_interp) + "\u003C\u002Fli\u003E";
          }
        }
      }).call(this);

      pug_html = pug_html + "\u003C\u002Fol\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      ;pug_debug_line = 8;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\u003C!--['Player1', \"Player2\", \"Player3\", \"Player4\", \"Player5\", \"Player6\", \"Player7\", \"Player8\", \"Player9\", \"Player10\",]--\u003E";
    }).call(this, "players" in locals_for_with ? locals_for_with.players : typeof players !== "undefined" ? players : undefined);
  } catch (err) {
    pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
  };return pug_html;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__siteService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_components_menu__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_components_rating__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_components_about__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_components_login__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_components_gameMode__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_renderedTemplates_menuTemplate__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_renderedTemplates_ratingTemplate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_renderedTemplates_aboutTemplate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_renderedTemplates_loginTemplate__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__static_renderedTemplates_gameModeTemplate__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__router__);













class Manage {
    constructor() {
        this.indPage = document.getElementById("ind");
        this.loginPage = document.getElementById("log");
        this.ratPage = document.getElementById("rat");
        this.aboutPage = document.getElementById("about");
        this.modePage = document.getElementById("mode");
        this.backButton = document.getElementById("backButton");
        this.siteService = new __WEBPACK_IMPORTED_MODULE_0__siteService__["a" /* default */]();
        this.menu = new __WEBPACK_IMPORTED_MODULE_1__static_components_menu__["a" /* default */]();
        this.rating = new __WEBPACK_IMPORTED_MODULE_2__static_components_rating__["a" /* default */]();
        this.about = new __WEBPACK_IMPORTED_MODULE_3__static_components_about__["a" /* default */]();
        this.login = new __WEBPACK_IMPORTED_MODULE_4__static_components_login__["a" /* default */]();
        this.gameMode = new __WEBPACK_IMPORTED_MODULE_5__static_components_gameMode__["a" /* default */]();
        this.myAudio = new Audio("game/assets/main_theme.mp3");
        this.myAudio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
        this.myAudio.play();
        this.logicAuth = false;

        this.indPage.appendChild(this.menu.content);
        this.ratPage.appendChild(this.rating.content);
        this.loginPage.appendChild(this.login.content);
        this.aboutPage.appendChild(this.about.content);
        this.modePage.appendChild(this.gameMode.content);

        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.aboutPage.hidden = true;
        this.modePage.hidden = true;
        this.backButton.hidden = true;
    }

    sound() {
        let s = document.getElementById("sBut");
        if (!this.myAudio.paused) {
            s.src = "./../resources/soundOff.png";
            this.myAudio.pause();
        } else {
            s.src = "./../resources/soundOn.png";
            this.myAudio.play();
        }
    }

    showRating() {
        this.indPage.hidden = true;
        this.ratPage.hidden = false;
        this.modePage.hidden = true;
        this.backButton.hidden = false;
        this.siteService.makeRating().then(response => {
            response.json().then(function (data) {
                let playerNames = [];
                for (let i = 0; i < data.length; i++) {
                    playerNames.push(data[i].login);
                }
                this.rating.render(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__static_renderedTemplates_ratingTemplate__["a" /* default */])({ 'players': playerNames }));
                this.backButtonEventsListener(this.logicAuth);
            }.bind(this));
        }).catch(err => {
            console.log('fetch error: ', err);
        });
        this.backButtonEventsListener(this.logicAuth);
    }

    showLogin() {
        this.indPage.hidden = true;
        this.loginPage.hidden = false;
        this.modePage.hidden = true;
        this.ratPage.hidden = true;
        this.aboutPage.hidden = true;
        this.backButton.hidden = false;
        this.login.render(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__static_renderedTemplates_loginTemplate__["a" /* default */])());
        this.login.on("submit", event => {
            if (document.getElementById("usernamesignup").value !== "") {
                event.preventDefault();

                this.userRegister(document.getElementById("usernamesignup").value, document.getElementById("emailsignup").value, document.getElementById("passwordsignup").value, null, null);
            } else if (document.getElementById("username").value !== "") {
                event.preventDefault();

                this.userLogin(document.getElementById("username").value, document.getElementById("password").value, null, null);
            }
            this.showInd();
        });

        this.backButtonEventsListener(this.logicAuth);
    }

    showAbout() {
        this.indPage.hidden = true;
        this.aboutPage.hidden = false;
        this.modePage.hidden = true;
        this.backButton.hidden = false;
        this.about.render(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__static_renderedTemplates_aboutTemplate__["a" /* default */])());
        this.backButtonEventsListener(this.logicAuth);
    }

    showInd() {
        this.indPage.hidden = false;
        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.aboutPage.hidden = true;
        this.modePage.hidden = true;
        this.siteService.checkAuth().then(response => {
            response.json().then(function (data) {
                console.log(data);
            });
            if (response.status === 200) {
                this.logicAuth = true;
                this.menu.render(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__static_renderedTemplates_menuTemplate__["a" /* default */])({ 'logicAuth': this.logicAuth }));
            } else {
                this.menu.render(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__static_renderedTemplates_menuTemplate__["a" /* default */])({ 'logicAuth': this.logicAuth }));
            }
            this.menuEventsListener(this.logicAuth);
        }).catch(err => {
            console.log('fetch error: ', err);
        });
        this.backButton.hidden = true;
    }

    showGameMode() {
        this.modePage.hidden = false;
        this.indPage.hidden = true;
        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.aboutPage.hidden = true;
        this.backButton.hidden = false;
        //this.showLogin();
        this.gameMode.render(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__static_renderedTemplates_gameModeTemplate__["a" /* default */])());
        this.backButtonEventsListener(this.logicAuth);
    }

    userLogin(login, password, callback1 = null, callback2 = null) {
        this.siteService.login(login, password, callback1 = null, callback2 = null).then(response => {
            if (response.status === 200) {
                this.logicAuth = true;
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });
        this.showInd();
    }

    userRegister(login, email, password, callback1 = null, callback2 = null) {
        this.siteService.register(login, email, password, callback1 = null, callback2 = null).then(response => {
            response.json().then(function (data) {
                console.log(data);
            });
            if (response.status === 200) {
                this.logicAuth = true;
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });
        this.showInd();
    }

    userLogout() {
        this.siteService.logout().then(response => {
            console.log("start logout");
            if (response.status === 200) {
                this.logicAuth = false;
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });
        this.showInd();
    }

    makeRating() {
        this.siteService.makeRating();
    }

    menuEventsListener(logicAuth) {
        if (logicAuth) {
            document.getElementById('menuStartAuth').addEventListener("click", function () {
                //this.showGameMode();
                location.href = 'game/index.html';
            }.bind(this));
            document.getElementById('menuLogout').addEventListener("click", function () {
                this.userLogout();
                //Router.nav('/login');
            }.bind(this));
        } else {
            document.getElementById('menuStartNotAuth').addEventListener("click", function () {
                this.showLogin();
                //Router.nav('/login');
            }.bind(this));
        }
        document.getElementById('menuRating').addEventListener("click", function () {
            this.showRating();
            //Router.nav('/rating');
            this.makeRating();
            //rating.render(renderRating({'players': playerNames}));
        }.bind(this));
        document.getElementById('menuAbout').addEventListener("click", function () {
            this.showAbout();
            //Router.nav('/about');
        }.bind(this));
    }

    backButtonEventsListener(logicAuth) {
        document.getElementById('backButton').addEventListener("click", function () {
            //Router.nav('/');
            this.showInd();
            this.menuEventsListener(logicAuth);
        }.bind(this));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Manage;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_components_about__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_components_menu__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_components_rating__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_renderedTemplates_aboutTemplate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_renderedTemplates_menuTemplate__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_renderedTemplates_ratingTemplate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_manage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__services_router__);






//import {playerNames, logicAuth} from './services/siteService'



(function () {

    let manage = new __WEBPACK_IMPORTED_MODULE_6__services_manage__["a" /* default */]();
    //let router = new router();

    //let menu = new Menu();
    manage.sound();
    manage.showInd();
    //menu.render(renderMenu({'logicAuth': logicAuth}));

    //let rating = new Rating();
    // manage.makeRating();

    //let about = new About();
    //about.render(renderAbout());

    //let loginPage = document.getElementById("log");
    //this.ratPage = document.getElementById("rat");
    //this.aboutPage = document.getElementById("about");
    //let gamePage = document.getElementById("game");

    /*let game = new Game({
        el: document.createElement('div'),
        data: {
            title: "Game",
        }
    });*/

    /*let login = new Login({
        el: document.createElement('div'),
        data: {
            title: "Game title",
            logfields: [
                {
                    input: "text",
                    name: "username",
                    tabindex: "1",
                    placeholder: "Username"
                },
                {
                    input: "password",
                    name: "password",
                    tabindex: "2",
                    placeholder: "Password"
                },
            ],
            regfields: [
                {
                    input: "text",
                    name: "username_reg",
                    tabindex: "1",
                    placeholder: "Username"
                },
                {
                    input: "email",
                    name: "email",
                    tabindex: "1",
                    placeholder: "Email Address"
                },
                {
                    input: "password",
                    name: "password1",
                    tabindex: "2",
                    placeholder: "Password"
                },
                {
                    input: "password",
                    name: "password2",
                    tabindex: "2",
                    placeholder: "Confirm Password"
                },
            ],
        }
    });*/

    /* login.on("submit", (event) => {
         if (document.getElementById("usernamesignup").value !== "") {
             event.preventDefault();
               manage.userRegister(document.getElementById("usernamesignup").value, document.getElementById("emailsignup").value,
                 document.getElementById("passwordsignup").value, null, null);
           } else if (document.getElementById("username").value !== "") {
             event.preventDefault();
               manage.userLogin(document.getElementById("username").value, document.getElementById("password").value, null, null);
           }
         manage.showInd();
     });*/

    //loginPage.appendChild(login.el);
    //gamePage.appendChild(game.el);
})();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class HTTP {
    constructor() {
        if (HTTP.__instance) {
            return HTTP.__instance;
        }
        HTTP.__instance = this;
    }

    request(address = '', type = '', body) {
        let req = {
            method: type,
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        };
        if (body) {
            console.log(body);
            req.body = JSON.stringify(body);
        }
        return fetch(address, req);
    }

    /*set BaseURL(value) {
        this._baseURL = value;
    }
      get BaseURL() {
        return this._baseURL;
    }
      get(address, callback = null) {
        const xhr = new XMLHttpRequest();
          xhr.withCredentials = true;
        let url = '${this._baseURL}${address}';
        xhr.open('GET', address, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (typeof callback === 'function') {
                callback(xhr);
            }
        };
        xhr.send(null);
    }
      delete(address, callback = null) {
        const xhr = new XMLHttpRequest();
          xhr.withCredentials = true;
        let url = '${this._baseURL}${address}';
        xhr.open('DELETE', address, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (typeof callback === 'function') {
                callback(xhr);
            }
        }
        xhr.send(null);
    }
      post(address, body, callback = null) {
        const xhr = new XMLHttpRequest();
        let url = '${this._baseURL}${address}';
        xhr.open('POST', address, true);
        xhr.withCredentials = true;
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (typeof callback === 'function') {
                callback(xhr);
            }
        }
        console.log(JSON.stringify(body));
        xhr.send(JSON.stringify(body));
      }*/
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HTTP;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_http__ = __webpack_require__(11);


class SiteService {
    constructor() {
        this.http = new __WEBPACK_IMPORTED_MODULE_0__modules_http__["a" /* default */]();
    }

    login(login, password, callback1 = null, callback2 = null) {
        const body = {
            login, password
        };
        return this.http.request('https://rws-backend.herokuapp.com/api/session', 'POST', body);
    }

    register(login, email, password, callback1 = null, callback2 = null) {
        const body = {
            login, email, password
        };
        return this.http.request('https://rws-backend.herokuapp.com/api/signup', 'POST', body);
    }

    checkAuth() {
        console.log("start checkAuth");
        return this.http.request('https://rws-backend.herokuapp.com/api/session', 'GET');
    }

    logout() {
        return this.http.request('https://rws-backend.herokuapp.com/api/session', 'DELETE');
    }

    makeRating() {
        return this.http.request('https://rws-backend.herokuapp.com/api/rating', 'GET');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SiteService;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseComponent__ = __webpack_require__(0);


class GameMode extends __WEBPACK_IMPORTED_MODULE_0__baseComponent__["a" /* default */] {
    render(renderTemplate) {
        this.content.innerHTML = renderTemplate;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameMode;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseComponent__ = __webpack_require__(0);


class Login extends __WEBPACK_IMPORTED_MODULE_0__baseComponent__["a" /* default */] {
  render(renderTemplate) {
    this.content.innerHTML = renderTemplate;
  }

  on(type, callback) {
    this.content.addEventListener(type, callback);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Login;

/* class Login {
 constructor(options = {data: {}}) {
 this.data = options.data;
 this.el = options.el;

 this.render();
 }

 render() {
 this._updateHtml()
 }

 /*_getLogFields() {
 let {logfields = []} = this.data;

 return logfields.map(field => {
 return `
 <div class = "form-group" >
 <input type = "${field.input}"	name = "${field.name}" id = "${field.name}" tabindex = "${field.tabindex}" class = "form-control" placeholder = "${field.placeholder}">
 </div>
 `
 }).join(' ');
 }*/

/*_getRegFields() {
 let {regfields = []} = this.data;

 /*return regfields.map(field => {
 return `
 <div class = "form-group" >
 <input type = "${field.input}"	name = "${field.name}" id = "${field.name}" tabindex = "${field.tabindex}" class = "form-control" placeholder = "${field.placeholder}">
 </div>
 `
 }).join(' ');
 }*/

/* _updateHtml() {
 this.el.innerHTML = `
 <div class="mainmenu">
 <h1>Game Title</h1> </div>
 <div class="mainmenu">
 <a class="hiddenanchor" id="toregister"></a>
 <a class="hiddenanchor" id="tologin"></a>
 <div id="wrapper">
 <div id="login" class="animate form">
 <form action="" autocomplete="on">
 <h4><a href="#tologin" class="to_register" >Log In </a><a href="#toregister" class="to_register" style="text-align: right">Sign Up</a></h4>
 <p>
 <input id="username" name="username" required="required" type="text" placeholder="Username" /> </p>
 <p>
 <input id="password" name="password" required="required" type="password" placeholder="Password" /> </p>
 <p class="keeplogin">
 <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" />
 <label for="loginkeeping">Keep me logged in</label>
 </p>
 <p class="login button">
 <input type="submit" value="Login" /> </p>
 </form>
 </div>
 <div id="register" class="animate form">
 <form action="" autocomplete="on">
 <h4><a href="#tologin" class="to_register">Log In </a><a href="#toregister" class="to_register" style="text-align: right">Sign Up</a></h4>
 <p>
 <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="Username" /> </p>
 <p>
 <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="Email" /> </p>
 <p>
 <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="Password" /> </p>
 <p>
 <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="Repeat password" /> </p>
 <p class="signin button">
 <input type="submit" value="Sign up" /> </p>
 </form>
 </div>
 </div>
 </div>
 `;
 }*/

/*on(type, callback) {
 this.el.addEventListener(type, callback);
 }
 }*/

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderGameMode;
function pug_rethrow(n, e, r, t) {
    if (!(n instanceof Error)) throw n;
    if (!("undefined" == typeof window && e || t)) throw n.message += " on line " + r, n;
    try {
        t = t || __webpack_require__(1).readFileSync(e, "utf8");
    } catch (e) {
        pug_rethrow(n, null, r);
    }
    var i = 3,
        a = t.split("\n"),
        o = Math.max(r - i, 0),
        h = Math.min(a.length, r + i),
        i = a.slice(o, h).map(function (n, e) {
        var t = e + o + 1;
        return (t == r ? "  > " : "    ") + t + "| " + n;
    }).join("\n");
    throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n;
}
function renderGameMode(locals) {
    var pug_html = "",
        pug_mixins = {},
        pug_interp;
    var pug_debug_filename, pug_debug_line;
    try {
        var pug_debug_sources = { "front\u002FcomponentTemplates\u002FgameModeTemplate.pug": "div(id='menu')\r\n    h1(class='h1Title') Select Mode\r\n    div(class='container group')\r\n        div(class='gridd-1-5 coll-1')\r\n            h3(class='h3mode')\r\n                span(class='uppercase') Deathmatch\r\n                img(class='msimg' src=\"resources\u002FdeathMatch.png\")\r\n                p Select a hero and fight agains other players. Kill more than anybody to win.\r\n        div(class='gridd-1-5 coll-1')\r\n            h3(class='h3mode')\r\n                span(class='uppercase') Catch Flag\r\n                img(class='msimg' src=\"resources\u002FflagCapture.png\")\r\n                p Catch the flag and bring it to your base to earn a point. Team with 5 points wins.\r\n        div(class='gridd-1-5 coll-1' onclick=\"location.href = 'game\u002Findex.html'\")\r\n            h3(class='h3mode')\r\n                span(class='uppercase') Tutorial\r\n                img(class='msimg' src=\"resources\u002Ftutorial.png\")\r\n                p Learn the controls and test weapon and skills before joining muliplayer.\r\n\r\n" };
        var pug_indent = [];
        ;
        pug_debug_line = 1;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n\u003Cdiv id=\"menu\"\u003E";
        ;
        pug_debug_line = 2;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n  \u003Ch1 class=\"h1Title\"\u003E";
        ;
        pug_debug_line = 2;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "Select Mode\u003C\u002Fh1\u003E";
        ;
        pug_debug_line = 3;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n  \u003Cdiv class=\"container group\"\u003E";
        ;
        pug_debug_line = 4;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n    \u003Cdiv class=\"gridd-1-5 coll-1\"\u003E";
        ;
        pug_debug_line = 5;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n      \u003Ch3 class=\"h3mode\"\u003E";
        ;
        pug_debug_line = 6;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\u003Cspan class=\"uppercase\"\u003E";
        ;
        pug_debug_line = 6;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "Deathmatch\u003C\u002Fspan\u003E";
        ;
        pug_debug_line = 7;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\u003Cimg class=\"msimg\" src=\"resources\u002FdeathMatch.png\"\u002F\u003E";
        ;
        pug_debug_line = 8;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n        \u003Cp\u003E";
        ;
        pug_debug_line = 8;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "Select a hero and fight agains other players. Kill more than anybody to win.\u003C\u002Fp\u003E\n      \u003C\u002Fh3\u003E\n    \u003C\u002Fdiv\u003E";
        ;
        pug_debug_line = 9;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n    \u003Cdiv class=\"gridd-1-5 coll-1\"\u003E";
        ;
        pug_debug_line = 10;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n      \u003Ch3 class=\"h3mode\"\u003E";
        ;
        pug_debug_line = 11;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\u003Cspan class=\"uppercase\"\u003E";
        ;
        pug_debug_line = 11;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "Catch Flag\u003C\u002Fspan\u003E";
        ;
        pug_debug_line = 12;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\u003Cimg class=\"msimg\" src=\"resources\u002FflagCapture.png\"\u002F\u003E";
        ;
        pug_debug_line = 13;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n        \u003Cp\u003E";
        ;
        pug_debug_line = 13;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "Catch the flag and bring it to your base to earn a point. Team with 5 points wins.\u003C\u002Fp\u003E\n      \u003C\u002Fh3\u003E\n    \u003C\u002Fdiv\u003E";
        ;
        pug_debug_line = 14;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n    \u003Cdiv class=\"gridd-1-5 coll-1\" onclick=\"location.href = 'game\u002Findex.html'\"\u003E";
        ;
        pug_debug_line = 15;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n      \u003Ch3 class=\"h3mode\"\u003E";
        ;
        pug_debug_line = 16;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\u003Cspan class=\"uppercase\"\u003E";
        ;
        pug_debug_line = 16;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "Tutorial\u003C\u002Fspan\u003E";
        ;
        pug_debug_line = 17;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\u003Cimg class=\"msimg\" src=\"resources\u002Ftutorial.png\"\u002F\u003E";
        ;
        pug_debug_line = 18;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "\n        \u003Cp\u003E";
        ;
        pug_debug_line = 18;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FgameModeTemplate.pug";
        pug_html = pug_html + "Learn the controls and test weapon and skills before joining muliplayer.\u003C\u002Fp\u003E\n      \u003C\u002Fh3\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";
    } catch (err) {
        pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
    }
    ;
    return pug_html;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderLogin;
function pug_rethrow(n, e, r, t) {
    if (!(n instanceof Error)) throw n;
    if (!("undefined" == typeof window && e || t)) throw n.message += " on line " + r, n;
    try {
        t = t || __webpack_require__(1).readFileSync(e, "utf8");
    } catch (e) {
        pug_rethrow(n, null, r);
    }
    var i = 3,
        a = t.split("\n"),
        o = Math.max(r - i, 0),
        h = Math.min(a.length, r + i),
        i = a.slice(o, h).map(function (n, e) {
        var t = e + o + 1;
        return (t == r ? "  > " : "    ") + t + "| " + n;
    }).join("\n");
    throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n;
}
function renderLogin(locals) {
    var pug_html = "",
        pug_mixins = {},
        pug_interp;
    var pug_debug_filename, pug_debug_line;
    try {
        var pug_debug_sources = { "front\u002FcomponentTemplates\u002FloginTemplate.pug": "div\r\n    h1(class='h1Title') Break Away\r\n    div(class='menuBody')\r\n        a(id='toregister' class='hiddenanchor')\r\n        a(id='tologin' class='hiddenanchor')\r\n        div(id='wrapper')\r\n            div(id='login' class='animate form')\r\n                form(autocomplete='on')\r\n                    h4\r\n                        a(class='to_register registerAnc' href='#tologin') Log in\r\n                        a(class='to_rigister registerAnc' href='#toregister') Sign up\r\n                    p\r\n                        input(id='username' name='username' required='required' type='text' placeholder='Username')\r\n                    p\r\n                        input(id='password' name='password' required='required' type='password' placeholder='Password')\r\n                    p(class='login button')\r\n                        input(type='submit' value='Login')\r\n            div(id='register' class='animate form')\r\n                form(autocomplete='on')\r\n                    h4\r\n                        a(class='to_register registerAnc' href='#tologin') Log in\r\n                        a(class='to_register registerAnc' href='#toregister') Sign up\r\n                    p\r\n                        input(id='usernamesignup' name='usernamesignup' required='required' type='text' placeholder='Username')\r\n                    p\r\n                        input(id='emailsignup' name='emailsignup' required='required' type='text' placeholder='Email')\r\n                    p\r\n                        input(id='passwordsignup' name='passwordsignup' required='required' type='password' placeholder='Password')\r\n                    p(class='login button')\r\n                        input(type='submit' value='Sign up')\r\n\r\n" };
        var pug_indent = [];
        ;
        pug_debug_line = 1;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n\u003Cdiv\u003E";
        ;
        pug_debug_line = 2;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n  \u003Ch1 class=\"h1Title\"\u003E";
        ;
        pug_debug_line = 2;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "Break Away\u003C\u002Fh1\u003E";
        ;
        pug_debug_line = 3;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n  \u003Cdiv class=\"menuBody\"\u003E";
        ;
        pug_debug_line = 4;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\u003Ca class=\"hiddenanchor\" id=\"toregister\"\u003E\u003C\u002Fa\u003E";
        ;
        pug_debug_line = 5;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\u003Ca class=\"hiddenanchor\" id=\"tologin\"\u003E\u003C\u002Fa\u003E";
        ;
        pug_debug_line = 6;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n    \u003Cdiv id=\"wrapper\"\u003E";
        ;
        pug_debug_line = 7;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n      \u003Cdiv class=\"animate form\" id=\"login\"\u003E";
        ;
        pug_debug_line = 8;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n        \u003Cform autocomplete=\"on\"\u003E";
        ;
        pug_debug_line = 9;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n          \u003Ch4\u003E";
        ;
        pug_debug_line = 10;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\u003Ca class=\"to_register registerAnc\" href=\"#tologin\"\u003E";
        ;
        pug_debug_line = 10;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "Log in\u003C\u002Fa\u003E";
        ;
        pug_debug_line = 11;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\u003Ca class=\"to_rigister registerAnc\" href=\"#toregister\"\u003E";
        ;
        pug_debug_line = 11;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "Sign up\u003C\u002Fa\u003E\u003C\u002Fh4\u003E";
        ;
        pug_debug_line = 12;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n          \u003Cp\u003E";
        ;
        pug_debug_line = 13;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n            \u003Cinput id=\"username\" name=\"username\" required=\"required\" type=\"text\" placeholder=\"Username\"\u002F\u003E\n          \u003C\u002Fp\u003E";
        ;
        pug_debug_line = 14;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n          \u003Cp\u003E";
        ;
        pug_debug_line = 15;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n            \u003Cinput id=\"password\" name=\"password\" required=\"required\" type=\"password\" placeholder=\"Password\"\u002F\u003E\n          \u003C\u002Fp\u003E";
        ;
        pug_debug_line = 16;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n          \u003Cp class=\"login button\"\u003E";
        ;
        pug_debug_line = 17;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n            \u003Cinput type=\"submit\" value=\"Login\"\u002F\u003E\n          \u003C\u002Fp\u003E\n        \u003C\u002Fform\u003E\n      \u003C\u002Fdiv\u003E";
        ;
        pug_debug_line = 18;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n      \u003Cdiv class=\"animate form\" id=\"register\"\u003E";
        ;
        pug_debug_line = 19;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n        \u003Cform autocomplete=\"on\"\u003E";
        ;
        pug_debug_line = 20;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n          \u003Ch4\u003E";
        ;
        pug_debug_line = 21;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\u003Ca class=\"to_register registerAnc\" href=\"#tologin\"\u003E";
        ;
        pug_debug_line = 21;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "Log in\u003C\u002Fa\u003E";
        ;
        pug_debug_line = 22;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\u003Ca class=\"to_register registerAnc\" href=\"#toregister\"\u003E";
        ;
        pug_debug_line = 22;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "Sign up\u003C\u002Fa\u003E\u003C\u002Fh4\u003E";
        ;
        pug_debug_line = 23;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n          \u003Cp\u003E";
        ;
        pug_debug_line = 24;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n            \u003Cinput id=\"usernamesignup\" name=\"usernamesignup\" required=\"required\" type=\"text\" placeholder=\"Username\"\u002F\u003E\n          \u003C\u002Fp\u003E";
        ;
        pug_debug_line = 25;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n          \u003Cp\u003E";
        ;
        pug_debug_line = 26;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n            \u003Cinput id=\"emailsignup\" name=\"emailsignup\" required=\"required\" type=\"text\" placeholder=\"Email\"\u002F\u003E\n          \u003C\u002Fp\u003E";
        ;
        pug_debug_line = 27;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n          \u003Cp\u003E";
        ;
        pug_debug_line = 28;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n            \u003Cinput id=\"passwordsignup\" name=\"passwordsignup\" required=\"required\" type=\"password\" placeholder=\"Password\"\u002F\u003E\n          \u003C\u002Fp\u003E";
        ;
        pug_debug_line = 29;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n          \u003Cp class=\"login button\"\u003E";
        ;
        pug_debug_line = 30;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FloginTemplate.pug";
        pug_html = pug_html + "\n            \u003Cinput type=\"submit\" value=\"Sign up\"\u002F\u003E\n          \u003C\u002Fp\u003E\n        \u003C\u002Fform\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";
    } catch (err) {
        pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
    }
    ;
    return pug_html;
}

/***/ })
/******/ ]);