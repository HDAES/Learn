
import undateChildren from "./updateChildren"

export default function patchVnode(oldVnode, newVnode) {
    //同一节点

    //判断新旧vnode是否同一个对象
    if (oldVnode === newVnode) return
    if (newVnode.text != undefined && (newVnode.children == undefined || newVnode.children.length == 0)) {
        //新节点有text 属性
        if (newVnode.text != oldVnode.text) {
            oldVnode.elm.innerText = newVnode.text
        }
    } else {
        //判断oldVnode 有没有children
        if (oldVnode.children != undefined && oldVnode.children.length > 0) {

            undateChildren(oldVnode.elm, oldVnode.children, newVnode.children)

        } else {
            //清空oldVnode.elm 内容
            oldVnode.elm.innerHTML = ''

            //oldVnode没有children
            for (let i = 0; i < newVnode.children.length; i++) {
                let dom = createElement(newVnode.children[i])
                oldVnode.elm.appendChild(dom)
            }
        }
    }
}