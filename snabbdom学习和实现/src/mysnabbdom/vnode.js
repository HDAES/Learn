/**
 * @param {*} sel 
 * @param {*} data 
 * @param {*} children 
 * @param {*} text 
 * @param {*} elm 
 * @returns 
 */
export default function (sel, data, children, text, elm) {
    let key = data.key
    return {
        sel, data, children, text, elm, key
    }
}