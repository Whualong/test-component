/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2021-11-09 10:28:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-19 18:13:27
 * @FilePath: /eleapp/src/main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter  from 'vue-router'
import elementUi from 'element-ui'
import * as echarts from 'echarts';
import router from './router/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import Axios from 'axios'
Vue.prototype.$http=Axios;
Vue.prototype.$echarts = echarts
Vue.use(Vant);
Vue.use(elementUi);
Vue.use(VueRouter)
// 全局注册icon组件
import SvgIcon  from '@/common/js/index';


Vue.component('SvgIcon', SvgIcon);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

