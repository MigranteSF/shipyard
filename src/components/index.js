import * as components from "./components";
import { directives } from '../directives';
import { registerComponents, registerDirectives } from "../utils/plugins";
import '../assets/scss/main.scss';

const Shipyard = {
    install(Vue) {
        registerComponents(Vue, components)
        registerDirectives(Vue, directives)
    }
}

export * from './components'

export default Shipyard