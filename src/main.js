import Vue from 'vue'
import App from './App.vue'
import VueRouter  from 'vue-router'
import elementUi from 'element-ui'
import router from './router/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import Axios from 'axios'
Vue.prototype.$http=Axios;
Vue.use(Vant);
Vue.use(elementUi);
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
