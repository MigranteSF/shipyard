export const registerComponent = (Vue, name, def) => {
    if (Vue && name && def)
        Vue.component(name, def)
}

export const registerComponents = (Vue, components = {}) => {
    for (const component in components) {
        registerComponent(Vue, component, components[component])
    }
}

export const registerDirective = (Vue, name, def) => {
    if (Vue && name && def)
        Vue.directive(name, def)
}

export const registerDirectives = (Vue, directives = []) => {
    directives.forEach(directive => {
        registerDirective(Vue, directive.name, directive.directive)
    })
}