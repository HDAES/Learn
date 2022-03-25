/*
 * @Author: HADES
 * @Date: 2022-03-25
 * @LastEditTime: 2022-03-25
 * @Description: call_bind_apply
 */

// apply、call、bind 函数可以改变 this 的指向。


// call与apply的唯一区别 传给fun的参数写法不同：

// apply是第2个参数，这个参数是一个数组：传给fun参数都写在数组中。
// call从第2~n的参数都是传给fun的。

// * 记忆点： apply => 第一个字母为a 对应 array(数组), 及第二个参数为数组

let obj = { a: 1, b: 2, c: 3 }
function fn() {
    console.log(arguments)
    console.log(this)
}
fn('arg1', 'arg2')
fn.call(obj, 'arg1', 'arg2')
fn.apply(obj, ['arg1', 'arg2'])
// ['arg1', 'arg2'] { a: 1, b: 2, c: 3 }


// bind 和 call用法相似。函数不会自己自己执行,需要调用。
fn.bind(obj, 'arg1', 'arg2')()

// 回调函数this丢失问题：
class Page {
    constructor(callBack) {
        this.className = 'Page'
        this.MessageCallBack = callBack
        this.MessageCallBack('发给注册页面的信息') // 执行PageA的回调函数
    }
}

class PageA {
    constructor() {
        this.className = 'PageA'
        this.pageClass = new Page(this.handleMessage) // 注册页面 传递回调函数 问题在这里
    }
    handleMessage(msg) {
        console.log('处理通信', this.className, msg) //  'Page' this指向错误
    }
}

new PageA()

class PageB {
    constructor() {
        this.className = 'PageB'
        this.pageClass = new Page(this.handleMessage.bind(this)) // 注册页面 传递回调函数 
    }
    handleMessage(msg) {
        console.log('处理通信', this.className, msg) //  'Page' => PageB
    }
}

new PageB()



// call 方法的实现
Function.prototype.myCall = function () {
    let args = [...arguments]

    let context = args[0]

    if (context === null || context === undefined) {
        context = window
    } else {
        context = Object(context)
    }

    const specialPrototype = Symbol('sp')

    context[specialPrototype] = this;

    let result = context[specialPrototype](...args.slice(1)); // 通过隐式绑定执行函数并传递参数

    delete context[specialPrototype]; // 删除上下文对象的属性

    return result; // 返回函数执行结果

}

fn.myCall(obj, 'arg1', 'arg2')

// apply 方法的实现
Function.prototype.myApply = function () {
    let context = arguments[0]
    let argsArry = arguments[1]

    if (argsArry === undefined) {
        argsArry = []
    }
    if (!Array.isArray(argsArry)) {
        throw new Error('第二个参数必须为数组')
    }

    if (context === null || context === undefined) {
        context = window
    } else {
        context = Object(context)
    }

    const specialPrototype = Symbol('sp')

    context[specialPrototype] = this;

    let result = context[specialPrototype](...argsArry); // 通过隐式绑定执行函数并传递参数

    delete context[specialPrototype]; // 删除上下文对象的属性

    return result; // 返回函数执行结果
}

fn.myApply(obj)

