import * as Components from "./components";
import { directives } from '../directives';
import { registerComponents, registerDirectives } from "../utils/plugins";
import '../assets/scss/main.scss';

const MigranteVue = {
    install(Vue) {
        registerComponents(Vue, Components)
        registerDirectives(Vue, directives)
    }
}

export * from './components'

export default MigranteVue