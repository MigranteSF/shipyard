const directive = {
    bind: function (el, binding, vnode) {
        window.event = function (event) {
            if (!(el == event.target || el.contains(event.target)))
                vnode.context[binding.expression](event);
        };
        document.body.addEventListener('click', window.event)
    },
    unbind: function () {
        document.body.removeEventListener('click', window.event)
    }
}

export const clickOutside = {
    name: 'click-outside',
    directive: directive
}