/*
 * @Author: HADES
 * @Date: 2022-03-25
 * @LastEditTime: 2022-03-25
 * @Description: 原型到原型链
 */

// 每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。
//原型链: 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是Object.prototype所以这就是我们新建的对象为什么能够使用toString()等方法的原因。
//特点: JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。


// __proto__

function Person() { }
var person = new Person();
console.log(person.__proto__ === Person.prototype) // true



// 函数的原型的构造函数 == 函数
console.log(Person.prototype.constructor === Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true

// Object.prototype 的原型 为null 
console.log(Object.prototype.__proto__ === null)

//当获取 person.constructor 时，其实 person 中并没有 constructor 属性,当不能读取到constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性，所以
console.log(person.constructor === Person.prototype.constructor); // true
