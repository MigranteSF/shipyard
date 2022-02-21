import Vue from 'vue'
import App from './App.vue'
import MigranteVue from '../dist/index'
// import MigranteVue from './components'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(MigranteVue);

new Vue({
  render: h => h(App),
}).$mount('#app')