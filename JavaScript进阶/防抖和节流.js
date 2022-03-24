
/**
 * @description:防抖函数,防止重复提交
 * @param {Function} fn      需要执行的函数
 * @param {Number}  wait    等待时间
 * @param {boolean} immediate 立即执行
 * @return {void}
 */
function debounce(fn, wait, immediate = false) {
    let timeout = null
    return (() => {
        if (immediate) {
            let now = !timeout
            timeout = setTimeout(() => timeout = null, wait);
            if (now) {
                fn.apply(this)
            }
        } else {
            if (timeout) {
                clearTimeout(timeout)
            } else {
                timeout = setTimeout(() => { fn.apply(this) }, wait)
            }
        }
    })
}


/**
 * @description: 节流函数
 * @param {Function} fn
 * @param {Number} wait
 * @return {void}
 */
function throttle(fn, wait) {
    let timeout = null
    return (() => {
        if (!timeout) {
            timeout = setTimeout(() => {
                fn.apply(this)
                timeout = null
            }, wait);
        }
    })
}
