import Vue from 'vue'
import router from './router'
import App from './App.vue'
// import Shipyard from '../dist/index'
import Shipyard from './components'
import BootstrapVue from 'bootstrap-vue'
import "@fortawesome/fontawesome-free/js/all";

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(Shipyard);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')