/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      var valB = pug_style(b[key]);
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    val += '';
    if (val[val.length - 1] !== ';') 
      return val + ';';
    return val;
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(17).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__siteService__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_menu__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_rating__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_gameMode__ = __webpack_require__(7);






//import Router from './router'

class Manage {
    constructor() {
        this.router = window.router;
        window.onpopstate = function (e) {
            e.preventDefault();
            let l = getLocation(document.location.href);
            this.router.nav(l.pathname);
        };

        let str = getLocation(document.location.href).pathname;
        this.router.nav(str.substring(0, str.length - 1));

        this.indPage = document.getElementById("ind");
        this.loginPage = document.getElementById("log");
        this.ratPage = document.getElementById("rat");
        this.aboutPage = document.getElementById("about");
        this.modePage = document.getElementById("mode");
        this.backButton = document.getElementById("backButton");
        this.loadPage = document.getElementById("load");
        //this.soundButton = document.getElementById("soundButton");

        this.siteService = new __WEBPACK_IMPORTED_MODULE_0__siteService__["a" /* default */]();

        this.menu = new __WEBPACK_IMPORTED_MODULE_1__components_menu__["a" /* default */]();
        this.rating = new __WEBPACK_IMPORTED_MODULE_2__components_rating__["a" /* default */]();
        this.about = new __WEBPACK_IMPORTED_MODULE_3__components_about__["a" /* default */]();
        this.login = new __WEBPACK_IMPORTED_MODULE_4__components_login__["a" /* default */]();
        this.gameMode = new __WEBPACK_IMPORTED_MODULE_5__components_gameMode__["a" /* default */]();
        this.myAudio = new Audio("game/assets/main_theme.mp3");
        this.myAudio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
        //this.myAudio.play();
        this.logicAuth = false;
        this.soundButtonEventsListener();

        this.renderMenu = __webpack_require__(15);
        this.renderRating = __webpack_require__(16);
        this.renderAbout = __webpack_require__(12);
        this.renderLogin = __webpack_require__(14);
        this.renderGameMode = __webpack_require__(13);

        this.indPage.appendChild(this.menu.content);
        this.ratPage.appendChild(this.rating.content);
        this.loginPage.appendChild(this.login.content);
        this.aboutPage.appendChild(this.about.content);
        this.modePage.appendChild(this.gameMode.content);

        this.loadPage.hidden = false;
        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.aboutPage.hidden = true;
        this.modePage.hidden = true;
        this.backButton.hidden = true;

        this.backButtonEventsListener();
    }

    showRating() {
        this.loadPage.hidden = false;
        this.indPage.hidden = true;
        this.ratPage.hidden = true;
        this.aboutPage.hidden = true;
        this.modePage.hidden = true;
        this.backButton.style.visibility = "visible";
        this.loginPage.hidden = true;

        this.siteService.makeRating().then(response => {
            response.json().then(function (data) {
                let playerNames = [];
                for (let i = 0; i < data.length; i++) {
                    playerNames.push(data[i].login);
                }
                this.rating.render(this.renderRating({ 'players': playerNames }));
                this.loadPage.hidden = true;
                this.ratPage.hidden = false;
            }.bind(this));
        }).catch(err => {
            console.log('fetch error: ', err);
        });
    }

    showLogin() {
        //document.getElementById("PointJS-canvas_0").hidden = true;
        this.indPage.hidden = true;
        this.loginPage.hidden = false;
        this.modePage.hidden = true;
        this.ratPage.hidden = true;
        this.aboutPage.hidden = true;
        this.backButton.style.visibility = "visible";
        this.loadPage.hidden = true;

        this.login.render(this.renderLogin());
        this.login.on("submit", event => {
            if (document.getElementById("usernamesignup").value !== "") {
                event.preventDefault();

                this.userRegister(document.getElementById("usernamesignup").value, document.getElementById("emailsignup").value, document.getElementById("passwordsignup").value, null, null);
            } else if (document.getElementById("username").value !== "") {
                event.preventDefault();

                this.userLogin(document.getElementById("username").value, document.getElementById("password").value, null, null);
            }
        });
    }

    showAbout() {
        this.indPage.hidden = true;
        this.aboutPage.hidden = false;
        this.modePage.hidden = true;
        this.backButton.hidden = false;
        this.loadPage.hidden = true;
        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.backButton.style.visibility = "visible";

        this.about.render(this.renderAbout());
    }

    showInd() {
        this.loadPage.hidden = false;
        this.indPage.hidden = true;
        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.aboutPage.hidden = true;
        this.modePage.hidden = true;
        this.backButton.style.visibility = "hidden";

        this.siteService.checkAuth().then(response => {
            response.json().then(function (data) {
                //console.log('into ind');
                //console.log(data);
            });
            if (response.status === 200) {
                this.logicAuth = true;
                this.menu.render(this.renderMenu({ 'logicAuth': this.logicAuth }));
            } else {
                this.menu.render(this.renderMenu({ 'logicAuth': this.logicAuth }));
            }
            this.menuEventsListener(this.logicAuth);
            this.loadPage.hidden = true;
            this.indPage.hidden = false;
        }).catch(err => {
            console.log('fetch error: ', err);
        });
    }

    showGameMode() {
        this.modePage.hidden = false;
        this.indPage.hidden = true;
        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.aboutPage.hidden = true;
        this.backButton.style.visibility = "visible";
        this.loadPage.hidden = true;

        this.gameMode.render(this.renderGameMode());
    }

    showGame() {
        var startGame = new StartGame();
        startGame.init();
        console.log("manage: before startLoop");
        startGame.game.setLoop("l1");
        startGame.game.start();
        console.log("manage: after startLoop");

        // document.getElementById("PointJS-canvas_0").classList.remove("game-canvas-not");
        // document.getElementById("PointJS-canvas_0").classList.add("game-canvas-active");
    }

    userLogin(login, password, callback1 = null, callback2 = null) {

        console.log("into login");
        this.siteService.login(login, password, callback1 = null, callback2 = null).then(response => {
            if (response.status === 200) {
                this.logicAuth = true;
                console.log("into login-200");
            }
            console.log("into login-200");
            this.showInd();
            //game.startLoop("l1");
        }).catch(err => {
            console.log('fetch error: ', err);
        });
    }

    userRegister(login, email, password, callback1 = null, callback2 = null) {
        console.log("into userRegister");
        this.siteService.register(login, email, password, callback1 = null, callback2 = null).then(response => {
            response.json().then(function (data) {
                console.log(data);
            });
            if (response.status === 200) {
                this.logicAuth = true;
                //location.href = 'game/index.html';
                this.router.nav('/game');
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });
    }

    userLogout() {
        console.log("start logout");
        this.siteService.logout().then(response => {
            this.router.nav('/');

            if (response.status === 200) {
                this.logicAuth = false;
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });
    }

    menuEventsListener(logicAuth) {
        if (logicAuth) {
            document.getElementById('menuStartAuth').addEventListener("click", function () {
                //this.showGameMode();
                //location.href = 'game/index.html';
                // game.startLoop("l1");
                // document.getElementById("PointJS-canvas_0").classList.remove("game-canvas-not");
                // document.getElementById("PointJS-canvas_0").classList.add("game-canvas-active");

                //let startGame = new StartGame();
                this.router.nav('/game');
            }.bind(this));
            document.getElementById('menuLogout').addEventListener("click", function () {
                this.userLogout();
                this.router.nav('/');
            }.bind(this));
        } else {
            document.getElementById('menuStartNotAuth').addEventListener("click", function () {
                // game.startLoop("l1");
                // document.getElementById("PointJS-canvas_0").classList.remove("game-canvas-not");
                // document.getElementById("PointJS-canvas_0").classList.add("game-canvas-active"); //TODO: fix login
                this.showLogin();

                //this.router.nav('/game');
                Router.nav('/login');
            }.bind(this));
        }
        document.getElementById('menuRating').addEventListener("click", function () {
            //window.showRating();
            this.router.nav('/rating');
            //this.makeRating();
            //rating.render(renderRating({'players': playerNames}));
        }.bind(this));
        document.getElementById('menuAbout').addEventListener("click", function () {
            //this.showAbout();
            this.router.nav('/about');
        }.bind(this));
    }

    backButtonEventsListener() {
        document.getElementById('backButton').addEventListener("click", function () {
            this.router.nav('/');
            // this.showInd();
            // console.log("backButtonEventListener");
        }.bind(this));
    }

    soundButtonEventsListener() {
        document.getElementById('soundButton').addEventListener("click", function () {
            let s = document.getElementById("soundButton");

            if (!this.myAudio.paused) {
                s.src = "./../resources/soundOff.png";
                this.myAudio.pause();
            } else {
                s.src = "./../resources/soundOn.png";
                this.myAudio.play();
            }
        }.bind(this));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Manage;


window.Manage = Manage;

//var manage = new Manage();

/***/ }),
/* 3 */
/***/ (function(module, exports) {


let manage = window.manage;

var Router = {
    routes: {
        "/": "indexPage",
        "/rating": "ratingPage",
        "/about": "aboutPage",
        "/login": "loginPage",
        "/game": "gamePage"
    },
    init: function () {
        this._routes = [];
        for (var route in this.routes) {
            var methodName = this.routes[route];
            this._routes.push({
                pattern: new RegExp('^' + route.replace(/:\w+/, '(\\w+)') + '$'),
                callback: this[methodName]
            });
        }
    },
    nav: function (path) {
        var i = this._routes.length;
        while (i--) {
            var args = path.match(this._routes[i].pattern);
            if (args) {
                this._routes[i].callback.apply(this, args.slice(1));
            }
        }
    },

    indexPage: function () {
        history.pushState(null, null, "/");
        // startGame.game.clear();
        // startGame.game.stop();
        // document.getElementById("PointJS-canvas_0").classList.remove("game-canvas-active");
        // document.getElementById("PointJS-canvas_0").classList.add("game-canvas-not");
        manage = window.manage;
        manage.showInd();
    },

    ratingPage: function () {
        history.pushState(null, null, "/rating");
        manage = window.manage;
        manage.showRating();
    },

    aboutPage: function () {
        history.pushState(null, null, "/about");
        manage = window.manage;
        manage.showAbout();
    },

    loginPage: function () {
        history.pushState(null, null, "/login");
        manage.showLogin();
    },

    gamePage: function () {
        history.pushState(null, null, "/game");
        manage = window.manage;
        manage.showGame();
        console.log("in router");
    }
};

var getLocation = function (href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

window.onpopstate = function (e) {
    e.preventDefault();
    var l = getLocation(document.location.href);
    Router.nav(l.pathname);
};

window.router = Router;

Router.init();
let str = getLocation(document.location.href).pathname;

Router.init();
//alert(str.substring(0, str.length - 1));
Router.nav(str.substring(0, str.length - 1));

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_services_manage__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_services_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_services_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_services_router__);



(function () {

    let manage = new __WEBPACK_IMPORTED_MODULE_0__static_services_manage__["a" /* default */]();
    window.manage = manage;
    //console.log(window.manage);


    //window.showInd = manage.showInd();
    //window.showRating = manage.showRating();
    //window.showLogin = manage.showLogin();
    //window.showAbout = manage.showAbout();
    //window.showGame = manage.showGame();
    manage.showInd();
})();

/***/ }),
/* 5 */
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

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HTTP;


/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
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


/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_http__ = __webpack_require__(5);


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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv\u003E\u003Ch1 class=\"h1Title\"\u003EOur Team\u003C\u002Fh1\u003E\u003Cdiv class=\"aboutBody\"\u003E";
var names = [["Kuchaeva Karina", "Fullstack"], ["Zlobina Svetlana", "Fullstack"], ["Bayramukov Yan", "Bug Designer"], ["Ovchinnikov Maksim", "Designer"]];
// iterate names
;(function(){
  var $$obj = names;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var name = $$obj[pug_index0];
pug_html = pug_html + "\u003Ch2\u003E" + (pug.escape(null == (pug_interp = name[1]) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Ch3\u003E" + (pug.escape(null == (pug_interp = name[0]) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var name = $$obj[pug_index0];
pug_html = pug_html + "\u003Ch2\u003E" + (pug.escape(null == (pug_interp = name[1]) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Ch3\u003E" + (pug.escape(null == (pug_interp = name[0]) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv id=\"menu\"\u003E\u003Ch1 class=\"h1Title\"\u003ESelect Mode\u003C\u002Fh1\u003E\u003Cdiv class=\"container group\"\u003E\u003Cdiv class=\"gridd-1-5 coll-1\"\u003E\u003Ch3 class=\"h3mode\"\u003E\u003Cspan class=\"uppercase\"\u003EDeathmatch\u003C\u002Fspan\u003E\u003Cimg class=\"msimg\" src=\"resources\u002FdeathMatch.png\"\u003E\u003Cp\u003ESelect a hero and fight agains other players. Kill more than anybody to win.\u003C\u002Fp\u003E\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"gridd-1-5 coll-1\"\u003E\u003Ch3 class=\"h3mode\"\u003E\u003Cspan class=\"uppercase\"\u003ECatch Flag\u003C\u002Fspan\u003E\u003Cimg class=\"msimg\" src=\"resources\u002FflagCapture.png\"\u003E\u003Cp\u003ECatch the flag and bring it to your base to earn a point. Team with 5 points wins.\u003C\u002Fp\u003E\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"gridd-1-5 coll-1\" onclick=\"location.href = 'game\u002Findex.html'\"\u003E\u003Ch3 class=\"h3mode\"\u003E\u003Cspan class=\"uppercase\"\u003ETutorial\u003C\u002Fspan\u003E\u003Cimg class=\"msimg\" src=\"resources\u002Ftutorial.png\"\u003E\u003Cp\u003ELearn the controls and test weapon and skills before joining muliplayer.\u003C\u002Fp\u003E\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv\u003E\u003Ch1 class=\"h1Title\"\u003EBreak Away\u003C\u002Fh1\u003E\u003Cdiv class=\"menuBody\"\u003E\u003Ca class=\"hiddenanchor\" id=\"toregister\"\u003E\u003C\u002Fa\u003E\u003Ca class=\"hiddenanchor\" id=\"tologin\"\u003E\u003C\u002Fa\u003E\u003Cdiv id=\"wrapper\"\u003E\u003Cdiv class=\"animate form\" id=\"login\"\u003E\u003Cform autocomplete=\"on\"\u003E\u003Ch4\u003E\u003Ca class=\"to_register registerAnc\" href=\"#tologin\"\u003ELog in\u003C\u002Fa\u003E\u003Ca class=\"to_rigister registerAnc\" href=\"#toregister\"\u003ESign up\u003C\u002Fa\u003E\u003C\u002Fh4\u003E\u003Cp\u003E\u003Cinput id=\"username\" name=\"username\" required=\"required\" type=\"text\" placeholder=\"Username\"\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003Cinput id=\"password\" name=\"password\" required=\"required\" type=\"password\" placeholder=\"Password\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"login button\"\u003E\u003Cinput type=\"submit\" value=\"Login\"\u003E\u003C\u002Fp\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"animate form\" id=\"register\"\u003E\u003Cform autocomplete=\"on\"\u003E\u003Ch4\u003E\u003Ca class=\"to_register registerAnc\" href=\"#tologin\"\u003ELog in\u003C\u002Fa\u003E\u003Ca class=\"to_register registerAnc\" href=\"#toregister\"\u003ESign up\u003C\u002Fa\u003E\u003C\u002Fh4\u003E\u003Cp\u003E\u003Cinput id=\"usernamesignup\" name=\"usernamesignup\" required=\"required\" type=\"text\" placeholder=\"Username\"\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003Cinput id=\"emailsignup\" name=\"emailsignup\" required=\"required\" type=\"text\" placeholder=\"Email\"\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003Cinput id=\"passwordsignup\" name=\"passwordsignup\" required=\"required\" type=\"password\" placeholder=\"Password\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"login button\"\u003E\u003Cinput type=\"submit\" value=\"Sign up\"\u003E\u003C\u002Fp\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (logicAuth) {pug_html = pug_html + "\u003Cdiv\u003E\u003Ch1 class=\"h1Title\"\u003EBreak Away\u003C\u002Fh1\u003E\u003Cdiv class=\"menuBody\"\u003E";
if (logicAuth) {
pug_html = pug_html + "\u003Cp class=\"title stroke\" id=\"menuStartAuth\"\u003E" + (pug.escape(null == (pug_interp = 'Start') ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
else {
pug_html = pug_html + "\u003Cp class=\"title stroke\" id=\"menuStartNotAuth\"\u003E" + (pug.escape(null == (pug_interp = 'Start') ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003Cp class=\"title\" id=\"menuRating\"\u003E" + (pug.escape(null == (pug_interp = 'Rating') ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp class=\"title\" id=\"menuAbout\"\u003E" + (pug.escape(null == (pug_interp = 'About') ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
if (logicAuth) {
pug_html = pug_html + "\u003Cp class=\"title\" id=\"menuLogout\"\u003E" + (pug.escape(null == (pug_interp = 'Logout') ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"logicAuth" in locals_for_with?locals_for_with.logicAuth:typeof logicAuth!=="undefined"?logicAuth:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (players) {pug_html = pug_html + "\u003Cdiv\u003E\u003Ch1 class=\"h1Title\"\u003ERating\u003C\u002Fh1\u003E\u003Cdiv class=\"ratingBody\"\u003E\u003Col\u003E";
// iterate players
;(function(){
  var $$obj = players;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var val = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli\u003E" + (pug.escape(null == (pug_interp = val) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var val = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli\u003E" + (pug.escape(null == (pug_interp = val) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fol\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C!--['Player1', \"Player2\", \"Player3\", \"Player4\", \"Player5\", \"Player6\", \"Player7\", \"Player8\", \"Player9\", \"Player10\",]--\u003E";}.call(this,"players" in locals_for_with?locals_for_with.players:typeof players!=="undefined"?players:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })
/******/ ]);