/*
 * @Author: HADES
 * @Date: 2022-03-24 16:46:05
 * @LastEditTime: 2022-03-25
 * @Description: 作用域和作用域链
 */

// 作用域

// 1.什么是作用域
// 作用域是在运行时代码中的某些特定部分中变量，函数和对象的可访问性。

//作用域就是一个独立的地盘，让变量不会外泄、暴露出去。也就是说作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突。

// 2.全局作用域和函数作用域

var outVariable = "我是最外层变量"; //最外层变量
function outFun() { //最外层函数
    var inVariable = "内层变量";
    function innerFun() { //内层函数
        console.log(inVariable);
    }
    innerFun();
}

console.log(outVariable) //我是最外层变量
outFun();


//末定义直接赋值的变量自动声明为拥有全局作用域

function fn1() {
    foo = '直接赋值的变量'
}
fn1()
console.log(foo) //直接赋值的变量


// 块语句（大括号“｛｝”中间的语句），如 if 和 switch 条件语句或 for 和 while 循环语句，不像函数，它们不会创建一个新的作用域

if (true) {
    var foo1 = '块中作用域'
}
console.log(foo1)

// 3.块级作用域

// 块级作用域可通过新增命令let和const声明，所声明的变量在指定块的作用域外无法被访问。块级作用域在如下情况被创建：
// 在一个函数内部
// 在一个代码块（由一对花括号包裹）内部

if (true) {
    let foo2 = '块中作用域'
}
//console.log(foo2) //foo2 is not defined


for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i); // abc
}

// 3.作用域链
//如果父级也没呢？再一层一层向上寻找，直到找到全局作用域还是没找到，就宣布放弃。这种一层一层的关系，就是 作用域链 。


// 4.作用域与执行上下文

// 执行上下文在运行时确定，随时可能改变；作用域在定义时就确定，并且不会改变。