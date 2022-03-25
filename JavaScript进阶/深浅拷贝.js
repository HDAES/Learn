/*
 * @Author: HADES
 * @Date: 2022-03-24 15:33:19
 * @LastEditTime: 2022-03-25
 * @Description: 深浅拷贝 
 */

//浅拷贝   
// 1.Object.assign()    性能高于展开运算符
let obj1 = { person: { name: "kobe", age: 41 }, sports: 'basketball' };
let obj2 = Object.assign({}, obj1);
obj2.person.name = "wade";
obj2.sports = 'football'
console.log(obj1); // { person: { name: 'wade', age: 41 }, sports: 'basketball' }

// 2.展开运算符
let obj3 = { name: 'Kobe', address: { x: 100, y: 100 } }
let obj4 = { ...obj3 }
obj4.address.x = 200;
obj4.name = 'wade'
console.log('obj2', obj3) // obj3 { name: 'Kobe', address: { x: 200, y: 100 } }



// 丐版深拷贝  无法拷贝引用类型和循环调用
JSON.parse(JSON.stringify({}))

/**
 * @description: 深拷贝
 * @param {Object} obj
 * @param {WeakMap} map
 * @return {Object}
 */
function deepClone(obj = {}, map = new WeakMap()) {
    // 判断obj 是基本类型还是引用类型
    if (typeof obj !== "object") {
        return obj
    }

    // 判断map 是否存在当前对象
    if (map.get(obj)) {
        return map.get(obj)
    }

    //初始化返回结果
    let result = {}
    if (obj instanceof Array || Object.prototype.toString.call(obj) === '[object Array]') {
        result = []
    }

    // 防止重复引用
    map.set(obj, result)

    Object.keys(obj).forEach(key => {
        result[key] = deepClone(obj[key], map);
    })

    // 返回结果
    return result;
}


/**
 * @description: 终极版本
 * @param {Object} target
 * @param {WeakMap} map
 * @return {*}
 */
function deepClone1(target = {}, map = new WeakMap()) {
    if (typeof target === 'object') {

        const isArray = Array.isArray(target);
        let cloneTarget = isArray ? [] : {};

        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);

        const keys = isArray ? undefined : Object.keys(target);
        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value;
            }
            cloneTarget[key] = deepClone1(target[key], map);
        });

        return cloneTarget;

    } else {
        return target
    }
}


function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}