"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _elementUi = _interopRequireDefault(require("element-ui"));

var _index = _interopRequireDefault(require("./router/index.js"));

require("element-ui/lib/theme-chalk/index.css");

var _vant = _interopRequireDefault(require("vant"));

require("vant/lib/index.css");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].prototype.$http = _axios["default"];

_vue["default"].use(_vant["default"]);

_vue["default"].use(_elementUi["default"]);

_vue["default"].use(_vueRouter["default"]);

_vue["default"].config.productionTip = false;
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _index["default"]
}).$mount('#app');