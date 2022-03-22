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


}   