import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

const container = document.getElementById('container')

const myVnode1 = h('ul', {}, [
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'C' }, 'C'),
])
const myVnode2 = h('ul', {}, [

    h('li', { key: 'Q' }, 'xxx'),
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'C' }, 'C'),
])


patch(container, myVnode1)



document.getElementById('btn').addEventListener('click', () => {
    patch(myVnode1, myVnode2)
})