/*
 * @Author: HADES
 * @Date: 2022-03-24 15:01:38
 * @LastEditTime: 2022-03-24
 * @Description: Js数据类型相关
 */

// JavaScript一共有8种数据类型，分为基本数据类型和引用数据类型

//基本数据类型： Undefined、Null、Boolean、Number、String、Symbol（es6新增，表示独一无二的值）和BigInt（es10新增）
//引用数据类型: Object


//判断数据类型
// 1.typeof  (typeof 对于原始类型来说，除了 null 都可以显示正确的类型)
console.log(typeof 2);                  // number
console.log(typeof true);               // boolean
console.log(typeof 'str');              // string
console.log(typeof []);                 // object     []数组的数据类型在 typeof 中被解释为 object
console.log(typeof function () { });    // function
console.log(typeof {});                 // object
console.log(typeof undefined);           // undefined
console.log(typeof null);               // object     null 的数据类型被 typeof 解释为 object

// 2.instanceof (instanceof 可以正确的判断对象的类型,因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype。)
console.log([] instanceof Array);                    // true
console.log(function () { } instanceof Function);    // true
console.log({} instanceof Object);                   // true

// 3.Object.prototype.toString.call()  (使用 Object 对象的原型方法 toString ，使用 call 进行狸猫换太子，借用Object的 toString 方法)
console.log(Object.prototype.toString.call(() => { }))          //[object Function]
console.log(Object.prototype.toString.call([]))                 //[object Array]
console.log(Object.prototype.toString.call(null))               //[object Null]
console.log(Object.prototype.toString.call(undefined))          //[object Undefined]
console.log(Object.prototype.toString.call(1))                  //[object Number]


//进阶
// 1.如何判断是不是数组？
let arr = []

Array.isArray(arr)
arr instanceof Array
arr.__proto__ === Array.prototype
Object.prototype.toString.call(arr) === '[object Array]'

// 2.数据类型的转换

// 2.1 Boolean()方法
console.log(Boolean(1))     //true
console.log(Boolean('1'))   //true
console.log(Boolean(0))     //false
console.log(Boolean('0'))   //true
console.log(Boolean(null))  //false
console.log(Boolean(undefined)) //false

//2.2 Number()、parseInt()和parseFloat()
console.log(Number('1.213'))    //1.213
console.log(parseInt('1.213'))  //1
console.log(parseFloat('1.213'))//1.213

// 2.3 toString()或者String()
console.log(typeof Number(1).toString()) //string
console.log(typeof String(1))   //string


// 3. 如何判断浮点型（小数）
function isFloat1(n) {
    return n != parseInt(n)
}

function isFloat2(n) {
    return ~~n !== n
}

