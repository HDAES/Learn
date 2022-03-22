import vnode from "./vnode"
import createElement from "./createElement"
import patchVnode from "./patchVnode"
export default function (oldVnode, newVnode) {


    //判断传入的第一个参数，是dom节点还是虚拟节点?
    if (oldVnode.sel == '' || oldVnode.sel == undefined) {
        //判断传入的第一个参数为dom节点
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
    }

    //判断oldVnode和newVnode 是不是同一节点
    if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {

        patchVnode(oldVnode, newVnode)

    } else {
        //不同节点 暴力插入
        let dom = createElement(newVnode)

        //插入到老节点前
        oldVnode.elm.parentNode.insertBefore(dom, oldVnode.elm)

        //删除老节点
        oldVnode.elm.parentNode.removeChild(oldVnode.elm)
    }
}