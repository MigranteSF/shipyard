import * as Components from "./components";
import { directives } from '../directives';
import { registerDirectives } from "../utils/plugins";
import '../assets/scss/main.scss';

const MigranteVue = {
    install(Vue) {
        (function registerComponents(components) {
            if (components) {
                for (const key in components) {
                    const component = components[key]
                    if (component)
                        Vue.component(key, component)
                }
                return true
            }
            return true
        })(Components)
        
        registerDirectives(Vue, directives)
    }
}

export * from './components'

export { BootstrapVue } from 'bootstrap-vue'

export default MigranteVue