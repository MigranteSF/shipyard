import Vue from 'vue'
import App from './App.vue'
import MigranteVue from '../dist/index'

Vue.config.productionTip = false

Vue.use(MigranteVue);

new Vue({
  render: h => h(App),
}).$mount('#app')