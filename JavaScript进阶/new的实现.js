/*
 * @Author: HADES
 * @Date: 2022-03-25
 * @LastEditTime: 2022-03-25
 * @Description: new的实现
 */






// 1.首先创建一个新的空对象

// 2.然后将空对象的 __proto__ 指向构造函数的原型

// 3. 构造函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）。

// 4.对构造函数的返回值做判断，然后返回对应的值 如果是引用类型，就返回这个引用类型的对象。

function myNew(fn, ...args) {

    // 1.创建空对象
    let obj = {}

    // 2. 对象的 __proto__ 指向构造函数的原型
    Object.setPrototypeOf(obj, fn.prototype)

    const res = fn.apply(obj, args)

    return res instanceof Object ? res : obj;
}

function Person(name, sex) {
    this.name = name;
    this.sex = sex
}


Person.prototype.getName = function () {
    return this.name
}

const zcy = new Person('zcy', '男');
const forceddd = myNew(Person, 'forceddd', '男');
console.log(zcy.__proto__ === forceddd.__proto__)

//共享原型上的方法
console.log(zcy.getName === forceddd.getName)


function Foo() {
    this.name = 123
    return {}
}
function bar() {
    this.name = 123
    return 1
}


console.log(myNew(Foo))

console.log(myNew(Foo).__proto__ == Foo.prototype)  //false
console.log(myNew(bar).__proto__ == bar.prototype)  //true



function Foo1() {
    console.log(this)
}

Foo1()   // window

new Foo1()  //Foo1 {}   new 改变了this的指向, 指向本身


