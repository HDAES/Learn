import vnode from "./vnode";

export default function (sel, data, c) {
    if (arguments.length != 3)
        throw new Error('对不起，h函数必须传入3个参数,我是低配版h函数')

    if (typeof c === 'string' || typeof c === 'number') {
        return vnode(sel, data, undefined, c, undefined)
    } else if (Array.isArray(c)) {

    } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {

    } else {
        throw new Error('传入三个参数格式不对')
    }
}