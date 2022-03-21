import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
} from "snabbdom";


const patch = init([
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
]);

let containerDom = document.getElementById('container')

let myVnode = h('a', { props: { href: 'http://www.xl686.com', target: '_blank' } }, 'HADES')

patch(containerDom, myVnode)
