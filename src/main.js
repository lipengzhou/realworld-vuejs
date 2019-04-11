import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters/'
import './registerServiceWorker'

import 'nprogress/nprogress.css'
import 'ionicons/css/ionicons.min.css'
import './styles/main.css'

import './permission'

Vue.use(filters)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
