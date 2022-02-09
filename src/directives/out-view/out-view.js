import { placement } from "../../utils/placement"

const directive = {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (el.classList.contains('show')) {
                placement(el)
                if (binding.value(evt, el))
                    window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
}

export const outView = {
    name: 'out-view',
    directive: directive
}