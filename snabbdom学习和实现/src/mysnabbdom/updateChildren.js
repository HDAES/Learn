
import patchVnode from "./patchVnode";
import createElement from "./createElement";
//判断同一虚拟节点
function checkSameVnode(a, b) {
    return a.sel == b.sel && a.key == b.key
}

export default function undateChildren(parentElm, oldCh, newCh) {

    console.log('我是undateChildren')

    //旧前
    let oldStartIdx = 0;

    //新前
    let newStartIdx = 0;

    //旧后
    let oldEndIdx = oldCh.length - 1;

    //新后
    let newEndIdx = newCh.length - 1;

    //旧前节点
    let oldStartVnode = oldCh[0]

    //新前节点
    let newStartVnode = newCh[0];

    //旧后节点
    let oldEndVnode = oldCh[oldEndIdx]

    //新后节点
    let newEndVnode = newCh[newEndIdx]

    let keyMap = null

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {

        if (oldStartVnode == null || oldCh[oldStartIdx] == undefined) {
            oldStartVnode = oldCh[++oldStartIdx]
        } else if (oldEndVnode == null || oldCh[oldEndIdx] == undefined) {
            oldEndVnode = oldCh[--oldEndIdx]
        } else if (checkSameVnode(oldStartVnode, newStartVnode)) {
            //新前后旧前
            patchVnode(oldStartVnode, newStartVnode)
            oldStartVnode = oldCh[++oldStartIdx]
            newStartVnode = newCh[++newStartIdx]
        } else if (checkSameVnode(oldEndVnode, newEndVnode)) {
            //新后和旧后
            patchVnode(oldEndVnode, newEndVnode)
            oldEndVnode = oldCh[--oldEndIdx]
            newEndVnode = newCh[--newEndIdx]
        } else if (checkSameVnode(oldStartVnode, newEndVnode)) {
            //新后和旧前
            patchVnode(oldStartVnode, newEndVnode)
            parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)
            oldStartVnode = oldCh[++oldStartIdx]
            newEndVnode = newCh[--newEndIdx]
        } else if (checkSameVnode(oldEndVnode, newStartVnode)) {
            patchVnode(oldEndVnode, newStartVnode)
            parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)
            oldEndVnode = oldCh[--oldEndIdx]
            newStartVnode = newCh[++newStartIdx]
        } else {
            // 四种都没有命中

            if (!keyMap) {
                keyMap = {}
                for (let i = oldStartIdx; i <= oldEndIdx; i++) {
                    const key = oldCh[i].key
                    if (key != undefined) {
                        keyMap[key] = i
                    }
                }
            }
            console.log(keyMap)
            //寻找newStartIdx 在keyMap 的映射序号
            const newIdxInOld = keyMap[newStartVnode.key]

            if (newIdxInOld == undefined) {
                //判断newIdxInOld是undefined 表示全新项

                parentElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm)
            } else {
                const elmToMove = oldCh[newIdxInOld]
                patchVnode(elmToMove, newStartVnode)
                oldCh[newIdxInOld] = undefined
                parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm)
            }

            //指针下移
            newStartVnode = newCh[++newStartIdx]
        }
    }


    if (newStartIdx <= newEndIdx) {
        //const before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm

        //console.log(before)
        for (let i = newStartIdx; i <= newEndIdx; i++) {


            parentElm.insertBefore(createElement(newCh[i]), oldCh[oldStartIdx].elm)
        }
    } else if (oldStartIdx <= oldEndIdx) {
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
            if (oldCh[i]) parentElm.removeChild(oldCh[i].elm)
        }
    }
}   