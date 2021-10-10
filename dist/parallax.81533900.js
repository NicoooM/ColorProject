// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/simple-parallax-js/dist/simpleParallax.min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * simpleParallax.min - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images or videos, 
 * @date: 20-08-2020 14:0:14, 
 * @version: 5.6.2,
 * @link: https://simpleparallax.com/
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define("simpleParallax", [], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.simpleParallax = e() : t.simpleParallax = e();
}(window, function () {
  return function (t) {
    var e = {};

    function n(i) {
      if (e[i]) return e[i].exports;
      var r = e[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: i
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var r in t) {
        n.d(i, r, function (e) {
          return t[e];
        }.bind(null, r));
      }
      return i;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 0);
  }([function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "default", function () {
      return x;
    });

    var i = function i() {
      return Element.prototype.closest && "IntersectionObserver" in window;
    };

    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    var s = new (function () {
      function t() {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.positions = {
          top: 0,
          bottom: 0,
          height: 0
        };
      }

      var e, n, i;
      return e = t, (n = [{
        key: "setViewportTop",
        value: function value(t) {
          return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions;
        }
      }, {
        key: "setViewportBottom",
        value: function value() {
          return this.positions.bottom = this.positions.top + this.positions.height, this.positions;
        }
      }, {
        key: "setViewportAll",
        value: function value(t) {
          return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions.height = t ? t.clientHeight : document.documentElement.clientHeight, this.positions.bottom = this.positions.top + this.positions.height, this.positions;
        }
      }]) && r(e.prototype, n), i && r(e, i), t;
    }())(),
        o = function o(t) {
      return NodeList.prototype.isPrototypeOf(t) || HTMLCollection.prototype.isPrototypeOf(t) ? Array.from(t) : "string" == typeof t || t instanceof String ? document.querySelectorAll(t) : [t];
    },
        a = function () {
      for (var t, e = "transform webkitTransform mozTransform oTransform msTransform".split(" "), n = 0; void 0 === t;) {
        t = void 0 !== document.createElement("div").style[e[n]] ? e[n] : void 0, n += 1;
      }

      return t;
    }(),
        l = function l(t) {
      return "img" !== t.tagName.toLowerCase() && "picture" !== t.tagName.toLowerCase() || !!t && !!t.complete && (void 0 === t.naturalWidth || 0 !== t.naturalWidth);
    };

    function u(t) {
      return function (t) {
        if (Array.isArray(t)) return c(t);
      }(t) || function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
      }(t) || function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return c(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e);
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function c(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, i = new Array(e); n < e; n++) {
        i[n] = t[n];
      }

      return i;
    }

    function h(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    var f = function () {
      function t(e, n) {
        var i = this;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.element = e, this.elementContainer = e, this.settings = n, this.isVisible = !0, this.isInit = !1, this.oldTranslateValue = -1, this.init = this.init.bind(this), this.customWrapper = this.settings.customWrapper && this.element.closest(this.settings.customWrapper) ? this.element.closest(this.settings.customWrapper) : null, l(e) ? this.init() : this.element.addEventListener("load", function () {
          setTimeout(function () {
            i.init(!0);
          }, 50);
        });
      }

      var e, n, i;
      return e = t, (n = [{
        key: "init",
        value: function value(t) {
          var e = this;
          this.isInit || (t && (this.rangeMax = null), this.element.closest(".simpleParallax") || (!1 === this.settings.overflow && this.wrapElement(this.element), this.setTransformCSS(), this.getElementOffset(), this.intersectionObserver(), this.getTranslateValue(), this.animate(), this.settings.delay > 0 ? setTimeout(function () {
            e.setTransitionCSS(), e.elementContainer.classList.add("simple-parallax-initialized");
          }, 10) : this.elementContainer.classList.add("simple-parallax-initialized"), this.isInit = !0));
        }
      }, {
        key: "wrapElement",
        value: function value() {
          var t = this.element.closest("picture") || this.element,
              e = this.customWrapper || document.createElement("div");
          e.classList.add("simpleParallax"), e.style.overflow = "hidden", this.customWrapper || (t.parentNode.insertBefore(e, t), e.appendChild(t)), this.elementContainer = e;
        }
      }, {
        key: "unWrapElement",
        value: function value() {
          var t = this.elementContainer;
          this.customWrapper ? (t.classList.remove("simpleParallax"), t.style.overflow = "") : t.replaceWith.apply(t, u(t.childNodes));
        }
      }, {
        key: "setTransformCSS",
        value: function value() {
          !1 === this.settings.overflow && (this.element.style[a] = "scale(".concat(this.settings.scale, ")")), this.element.style.willChange = "transform";
        }
      }, {
        key: "setTransitionCSS",
        value: function value() {
          this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition);
        }
      }, {
        key: "unSetStyle",
        value: function value() {
          this.element.style.willChange = "", this.element.style[a] = "", this.element.style.transition = "";
        }
      }, {
        key: "getElementOffset",
        value: function value() {
          var t = this.elementContainer.getBoundingClientRect();

          if (this.elementHeight = t.height, this.elementTop = t.top + s.positions.top, this.settings.customContainer) {
            var e = this.settings.customContainer.getBoundingClientRect();
            this.elementTop = t.top - e.top + s.positions.top;
          }

          this.elementBottom = this.elementHeight + this.elementTop;
        }
      }, {
        key: "buildThresholdList",
        value: function value() {
          for (var t = [], e = 1; e <= this.elementHeight; e++) {
            var n = e / this.elementHeight;
            t.push(n);
          }

          return t;
        }
      }, {
        key: "intersectionObserver",
        value: function value() {
          var t = {
            root: null,
            threshold: this.buildThresholdList()
          };
          this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), t), this.observer.observe(this.element);
        }
      }, {
        key: "intersectionObserverCallback",
        value: function value(t) {
          var e = this;
          t.forEach(function (t) {
            t.isIntersecting ? e.isVisible = !0 : e.isVisible = !1;
          });
        }
      }, {
        key: "checkIfVisible",
        value: function value() {
          return this.elementBottom > s.positions.top && this.elementTop < s.positions.bottom;
        }
      }, {
        key: "getRangeMax",
        value: function value() {
          var t = this.element.clientHeight;
          this.rangeMax = t * this.settings.scale - t;
        }
      }, {
        key: "getTranslateValue",
        value: function value() {
          var t = ((s.positions.bottom - this.elementTop) / ((s.positions.height + this.elementHeight) / 100)).toFixed(1);
          return t = Math.min(100, Math.max(0, t)), 0 !== this.settings.maxTransition && t > this.settings.maxTransition && (t = this.settings.maxTransition), this.oldPercentage !== t && (this.rangeMax || this.getRangeMax(), this.translateValue = (t / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0), this.oldTranslateValue !== this.translateValue && (this.oldPercentage = t, this.oldTranslateValue = this.translateValue, !0));
        }
      }, {
        key: "animate",
        value: function value() {
          var t,
              e = 0,
              n = 0;
          (this.settings.orientation.includes("left") || this.settings.orientation.includes("right")) && (n = "".concat(this.settings.orientation.includes("left") ? -1 * this.translateValue : this.translateValue, "px")), (this.settings.orientation.includes("up") || this.settings.orientation.includes("down")) && (e = "".concat(this.settings.orientation.includes("up") ? -1 * this.translateValue : this.translateValue, "px")), t = !1 === this.settings.overflow ? "translate3d(".concat(n, ", ").concat(e, ", 0) scale(").concat(this.settings.scale, ")") : "translate3d(".concat(n, ", ").concat(e, ", 0)"), this.element.style[a] = t;
        }
      }]) && h(e.prototype, n), i && h(e, i), t;
    }();

    function m(t) {
      return function (t) {
        if (Array.isArray(t)) return y(t);
      }(t) || function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
      }(t) || d(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function p(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
        var n = [],
            i = !0,
            r = !1,
            s = void 0;

        try {
          for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (n.push(o.value), !e || n.length !== e); i = !0) {
            ;
          }
        } catch (t) {
          r = !0, s = t;
        } finally {
          try {
            i || null == a.return || a.return();
          } finally {
            if (r) throw s;
          }
        }

        return n;
      }(t, e) || d(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function d(t, e) {
      if (t) {
        if ("string" == typeof t) return y(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0;
      }
    }

    function y(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, i = new Array(e); n < e; n++) {
        i[n] = t[n];
      }

      return i;
    }

    function v(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    var g,
        b,
        w = !1,
        T = [],
        x = function () {
      function t(e, n) {
        if (function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e && i()) {
          if (this.elements = o(e), this.defaults = {
            delay: 0,
            orientation: "up",
            scale: 1.3,
            overflow: !1,
            transition: "cubic-bezier(0,0,0,1)",
            customContainer: "",
            customWrapper: "",
            maxTransition: 0
          }, this.settings = Object.assign(this.defaults, n), this.settings.customContainer) {
            var r = p(o(this.settings.customContainer), 1);
            this.customContainer = r[0];
          }

          this.lastPosition = -1, this.resizeIsDone = this.resizeIsDone.bind(this), this.refresh = this.refresh.bind(this), this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this), this.init();
        }
      }

      var e, n, r;
      return e = t, (n = [{
        key: "init",
        value: function value() {
          var t = this;
          s.setViewportAll(this.customContainer), T = [].concat(m(this.elements.map(function (e) {
            return new f(e, t.settings);
          })), m(T)), w || (this.proceedRequestAnimationFrame(), window.addEventListener("resize", this.resizeIsDone), w = !0);
        }
      }, {
        key: "resizeIsDone",
        value: function value() {
          clearTimeout(b), b = setTimeout(this.refresh, 200);
        }
      }, {
        key: "proceedRequestAnimationFrame",
        value: function value() {
          var t = this;
          s.setViewportTop(this.customContainer), this.lastPosition !== s.positions.top ? (s.setViewportBottom(), T.forEach(function (e) {
            t.proceedElement(e);
          }), g = window.requestAnimationFrame(this.proceedRequestAnimationFrame), this.lastPosition = s.positions.top) : g = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
        }
      }, {
        key: "proceedElement",
        value: function value(t) {
          (this.customContainer ? t.checkIfVisible() : t.isVisible) && t.getTranslateValue() && t.animate();
        }
      }, {
        key: "refresh",
        value: function value() {
          s.setViewportAll(this.customContainer), T.forEach(function (t) {
            t.getElementOffset(), t.getRangeMax();
          }), this.lastPosition = -1;
        }
      }, {
        key: "destroy",
        value: function value() {
          var t = this,
              e = [];
          T = T.filter(function (n) {
            return t.elements.includes(n.element) ? (e.push(n), !1) : n;
          }), e.forEach(function (e) {
            e.unSetStyle(), !1 === t.settings.overflow && e.unWrapElement();
          }), T.length || (window.cancelAnimationFrame(g), window.removeEventListener("resize", this.refresh), w = !1);
        }
      }]) && v(e.prototype, n), r && v(e, r), t;
    }();
  }]).default;
});
},{}],"js/parallax.js":[function(require,module,exports) {
"use strict";

var _simpleParallaxJs = _interopRequireDefault(require("simple-parallax-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// new simpleParallax(document.querySelector1ll("img"), {
//   transition: "cubic-bezier(0,0,0,1)",
//   overflow: true,
//   scale: 1.2,
// });
new _simpleParallaxJs.default(document.querySelectorAll("img"), {
  overflow: true,
  scale: 1.3
}); // new simpleParallax(document.querySelector("h1"), {
//   overflow: true,
//   scale: 2,
//   //   customContainer: ".main",
// });
},{"simple-parallax-js":"../node_modules/simple-parallax-js/dist/simpleParallax.min.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57630" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/parallax.js"], null)
//# sourceMappingURL=/parallax.81533900.js.map