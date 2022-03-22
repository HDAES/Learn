//真正创建节点
export default function createElement(vnode) {

    let domNode = document.createElement(vnode.sel)

    //判断子节点还是文字
    if (vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)) {
        domNode.innerText = vnode.text
    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
        for (let i = 0; i < vnode.children.length; i++) {
            domNode.appendChild(createElement(vnode.children[i]))
        }
    }

    //补充elm属性
    vnode.elm = domNode

    //返回elm,elm属性是一个纯dom对象
    return vnode.elm
}