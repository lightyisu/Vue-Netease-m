import Vue from 'vue'
import App from './App.vue'
import './plugins/vant.js'
import router from '../src/router/router.js'

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
//test