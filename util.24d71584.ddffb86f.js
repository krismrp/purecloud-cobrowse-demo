// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"util.24d71584.js":[function(require,module,exports) {
var define;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

parcelRequire = function (e, r, n, t) {
  var i = "function" == typeof parcelRequire && parcelRequire,
      o = "function" == typeof require && require;function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = "function" == typeof parcelRequire && parcelRequire;if (!t && f) return f(n, !0);if (i) return i(n, !0);if (o && "string" == typeof n) return o(n);var c = new Error("Cannot find module '" + n + "'");throw c.code = "MODULE_NOT_FOUND", c;
      }p.resolve = function (r) {
        return e[n][1][r] || r;
      };var l = r[n] = new u.Module(n);e[n][0].call(l.exports, p, l, l.exports, this);
    }return r[n].exports;function p(e) {
      return u(p.resolve(e));
    }
  }u.isParcelRequire = !0, u.Module = function (e) {
    this.id = e, this.bundle = u, this.exports = {};
  }, u.modules = e, u.cache = r, u.parent = i, u.register = function (r, n) {
    e[r] = [function (e, r) {
      r.exports = n;
    }, {}];
  };for (var f = 0; f < n.length; f++) {
    u(n[f]);
  }if (n.length) {
    var c = u(n[n.length - 1]);"object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
      return c;
    }) : t && (this[t] = c);
  }return u;
}({ "6XVL": [function (require, module, exports) {
    !function (t) {
      t.fn.navList = function () {
        var e = t(this);return $a = e.find("a"), b = [], $a.each(function () {
          var e = t(this),
              a = Math.max(0, e.parents("li").length - 1),
              l = e.attr("href"),
              i = e.attr("target");b.push('<a class="link depth-' + a + '"' + (void 0 !== i && "" != i ? ' target="' + i + '"' : "") + (void 0 !== l && "" != l ? ' href="' + l + '"' : "") + '><span class="indent-' + a + '"></span>' + e.text() + "</a>");
        }), b.join("");
      }, t.fn.panel = function (e) {
        if (0 == this.length) return i;if (this.length > 1) {
          for (var a = 0; a < this.length; a++) {
            t(this[a]).panel(e);
          }return i;
        }var l,
            i = t(this),
            r = t("body"),
            o = t(window),
            n = i.attr("id");return "jQuery" != typeof (l = t.extend({ delay: 0, hideOnClick: !1, hideOnEscape: !1, hideOnSwipe: !1, resetScroll: !1, resetForms: !1, side: null, target: i, visibleClass: "visible" }, e)).target && (l.target = t(l.target)), i._hide = function (t) {
          l.target.hasClass(l.visibleClass) && (t && (t.preventDefault(), t.stopPropagation()), l.target.removeClass(l.visibleClass), window.setTimeout(function () {
            l.resetScroll && i.scrollTop(0), l.resetForms && i.find("form").each(function () {
              this.reset();
            });
          }, l.delay));
        }, i.css("-ms-overflow-style", "-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling", "touch"), l.hideOnClick && (i.find("a").css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"), i.on("click", "a", function (e) {
          var a = t(this),
              r = a.attr("href"),
              o = a.attr("target");r && "#" != r && "" != r && r != "#" + n && (e.preventDefault(), e.stopPropagation(), i._hide(), window.setTimeout(function () {
            "_blank" == o ? window.open(r) : window.location.href = r;
          }, l.delay + 10));
        })), i.on("touchstart", function (t) {
          i.touchPosX = t.originalEvent.touches[0].pageX, i.touchPosY = t.originalEvent.touches[0].pageY;
        }), i.on("touchmove", function (t) {
          if (null !== i.touchPosX && null !== i.touchPosY) {
            var e = i.touchPosX - t.originalEvent.touches[0].pageX,
                a = i.touchPosY - t.originalEvent.touches[0].pageY,
                r = i.outerHeight(),
                o = i.get(0).scrollHeight - i.scrollTop();if (l.hideOnSwipe) {
              var n = !1;switch (l.side) {case "left":
                  n = a < 20 && a > -20 && e > 50;break;case "right":
                  n = a < 20 && a > -20 && e < -50;break;case "top":
                  n = e < 20 && e > -20 && a > 50;break;case "bottom":
                  n = e < 20 && e > -20 && a < -50;}if (n) return i.touchPosX = null, i.touchPosY = null, i._hide(), !1;
            }(i.scrollTop() < 0 && a < 0 || o > r - 2 && o < r + 2 && a > 0) && (t.preventDefault(), t.stopPropagation());
          }
        }), i.on("click touchend touchstart touchmove", function (t) {
          t.stopPropagation();
        }), i.on("click", 'a[href="#' + n + '"]', function (t) {
          t.preventDefault(), t.stopPropagation(), l.target.removeClass(l.visibleClass);
        }), r.on("click touchend", function (t) {
          i._hide(t);
        }), r.on("click", 'a[href="#' + n + '"]', function (t) {
          t.preventDefault(), t.stopPropagation(), l.target.toggleClass(l.visibleClass);
        }), l.hideOnEscape && o.on("keydown", function (t) {
          27 == t.keyCode && i._hide(t);
        }), i;
      }, t.fn.placeholder = function () {
        if (void 0 !== document.createElement("input").placeholder) return t(this);if (0 == this.length) return a;if (this.length > 1) {
          for (var e = 0; e < this.length; e++) {
            t(this[e]).placeholder();
          }return a;
        }var a = t(this);return a.find("input[type=text],textarea").each(function () {
          var e = t(this);"" != e.val() && e.val() != e.attr("placeholder") || e.addClass("polyfill-placeholder").val(e.attr("placeholder"));
        }).on("blur", function () {
          var e = t(this);e.attr("name").match(/-polyfill-field$/) || "" == e.val() && e.addClass("polyfill-placeholder").val(e.attr("placeholder"));
        }).on("focus", function () {
          var e = t(this);e.attr("name").match(/-polyfill-field$/) || e.val() == e.attr("placeholder") && e.removeClass("polyfill-placeholder").val("");
        }), a.find("input[type=password]").each(function () {
          var e = t(this),
              a = t(t("<div>").append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, "type=text"));"" != e.attr("id") && a.attr("id", e.attr("id") + "-polyfill-field"), "" != e.attr("name") && a.attr("name", e.attr("name") + "-polyfill-field"), a.addClass("polyfill-placeholder").val(a.attr("placeholder")).insertAfter(e), "" == e.val() ? e.hide() : a.hide(), e.on("blur", function (t) {
            t.preventDefault();var a = e.parent().find("input[name=" + e.attr("name") + "-polyfill-field]");"" == e.val() && (e.hide(), a.show());
          }), a.on("focus", function (t) {
            t.preventDefault();var e = a.parent().find("input[name=" + a.attr("name").replace("-polyfill-field", "") + "]");a.hide(), e.show().focus();
          }).on("keypress", function (t) {
            t.preventDefault(), a.val("");
          });
        }), a.on("submit", function () {
          a.find("input[type=text],input[type=password],textarea").each(function (e) {
            var a = t(this);a.attr("name").match(/-polyfill-field$/) && a.attr("name", ""), a.val() == a.attr("placeholder") && (a.removeClass("polyfill-placeholder"), a.val(""));
          });
        }).on("reset", function (e) {
          e.preventDefault(), a.find("select").val(t("option:first").val()), a.find("input,textarea").each(function () {
            var e,
                a = t(this);switch (a.removeClass("polyfill-placeholder"), this.type) {case "submit":case "reset":
                break;case "password":
                a.val(a.attr("defaultValue")), e = a.parent().find("input[name=" + a.attr("name") + "-polyfill-field]"), "" == a.val() ? (a.hide(), e.show()) : (a.show(), e.hide());break;case "checkbox":case "radio":
                a.attr("checked", a.attr("defaultValue"));break;case "text":case "textarea":
                a.val(a.attr("defaultValue")), "" == a.val() && (a.addClass("polyfill-placeholder"), a.val(a.attr("placeholder")));break;default:
                a.val(a.attr("defaultValue"));}
          });
        }), a;
      }, t.prioritize = function (e, a) {
        var l = "__prioritize";"jQuery" != typeof e && (e = t(e)), e.each(function () {
          var e,
              i = t(this),
              r = i.parent();if (0 != r.length) if (i.data(l)) {
            if (a) return;e = i.data(l), i.insertAfter(e), i.removeData(l);
          } else {
            if (!a) return;if (0 == (e = i.prev()).length) return;i.prependTo(r), i.data(l, e);
          }
        });
      };
    }(jQuery);
  }, {}] }, {}, ["6XVL"], null);
//# sourceMappingURL=util.24d71584.map
},{}]