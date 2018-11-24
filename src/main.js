// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入所有vanx
import Vant from 'vant'
import 'vant/lib/index.css'
// import { Row, Col } from 'vant';
// Vue.use(Row).use(Col);
Vue.config.productionTip = false

// 使vant生效
Vue.use(Vant)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
