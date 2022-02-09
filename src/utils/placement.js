export const placement = (el) => {
    let bounding = el.getAttribute('x-placement') == 'bottom'
        ? el.getBoundingClientRect().top
        : el.getBoundingClientRect().bottom + el.parentElement.offsetHeight

    if ((bounding + el.offsetHeight) > window.innerHeight) {
        el.style.top = `unset`
        el.style.bottom = `${el.parentElement.offsetHeight + 6}px`
        el.setAttribute('x-placement', 'top')
    } else {
        el.style.bottom = `unset`
        el.style.top = `${el.parentElement.offsetHeight}px`
        el.setAttribute('x-placement', 'bottom')
    }
}