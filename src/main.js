import Vue from 'vue'
import App from './App.vue'
import MigranteVue from './components'
import { BootstrapVue } from './components'
import './assets/scss/main.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(MigranteVue);

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
      window.event = function (event) {
          if (!(el == event.target || el.contains(event.target))) {
              vnode.context[binding.expression](event);
          }
      };
      document.body.addEventListener('click', window.event)
  },
  unbind: function () {
      document.body.removeEventListener('click', window.event)
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')