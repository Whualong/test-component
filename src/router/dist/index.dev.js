"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = new _vueRouter["default"]({
  mode: 'history',
  routes: [{
    path: '/',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../components/home.vue'));
      });
    }
  }, {
    path: '/yzm',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../components/yzm.vue'));
      });
    },
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/error',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../error/index.vue'));
      });
    }
  }]
});
router.beforeEach(function (to, from, next) {
  if (to.path == '/yzm' && to.meta.requiresAuth) {
    if (from.path == '/') {
      next();
    } else {
      next({
        path: '/error'
      });
    }
  } else {
    next();
  }
});
var _default = router;
exports["default"] = _default;