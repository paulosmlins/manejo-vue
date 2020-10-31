import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import './quasar'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
