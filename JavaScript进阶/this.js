/*
 * @Author: HADES
 * @Date: 2022-03-25
 * @LastEditTime: 2022-03-25
 * @Description: this指向
 */

// this 其值取决于函数的调用方式
// this 永远指向最后调用它的那个对象

// 1.函数的调用方式

// 1.1 做为函数直接调用
var name = "windowsName";
function fn1() {
    var name = "Cherry";
    console.log(this.name);          // windowsName
    console.log("inner:" + this);    // inner: Window
}
fn1()
//相当于  Window.fn1()


// 1.2 函数作为方法调用
let obj = {
    name: "Cherry",
    fn: function () {
        console.log(this.name);      // Cherry
    }
}
obj.fn()

// 1.3 使用构造函数调用函数
function fn2(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}

var a = new fn2("Li", "Cherry");
a.lastName;                             // 返回 "Cherry"

// 1.4 作为函数方法调用函数

function fn3() {
    var name = 'Cherry';
    innerFunction()
    function innerFunction() {
        console.log(this.name);      // windowsName
    }
}

fn3()

// 1.5 apply,call 调用  this指代第一个参数（及对象）
function fn4() {
    console.log('fn4', this)   //Window
}

fn4()

fn4.call({ a: 123 })    //{a: 123}
fn4.apply({ a: 123 })   //{a: 123}

