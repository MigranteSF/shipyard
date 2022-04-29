import Vue from 'vue'
import router from './router/router'
import App from './App.vue'
// import Shipyard from '../dist/index'
import Shipyard from './components'
import BootstrapVue from 'bootstrap-vue'
import "@fortawesome/fontawesome-free/js/all";
import favicon_migrante from './assets/svg/migranteIcon.svg'

// Set Favicon
var favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
favicon.type = 'image/x-icon';
favicon.rel = 'shortcut icon';
favicon.href = favicon_migrante;
document.getElementsByTagName('head')[0].appendChild(favicon);

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(Shipyard);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
