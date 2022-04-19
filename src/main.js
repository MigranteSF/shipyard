import Vue from 'vue'
import App from './App.vue'
// import Shipyard from '../dist/index'
import Shipyard from './components'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(Shipyard);

new Vue({
  render: h => h(App),
}).$mount('#app')