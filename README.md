### 学习 React 18 的 useTransition 和 useDeferredValue 的用法

#### 运行代码

`npm install`

`npm run start`

#### B 站教学视频地址

https://space.bilibili.com/510528162

const 用于声明一个只读的常量。一旦一个变量被 const 声明，它的值就不能被重新赋值。但是，如果变量的值是一个对象或数组，那么你可以修改这个对象或数组的内部状态（即它的属性或元素），只是不能重新分配一个新的对象或数组给这个变量。
// 声明一个常量  
const PI = 3.14159;

// 尝试修改常量的值会抛出错误  
// PI = 3.14; // TypeError: Assignment to constant variable.

// 可以声明一个常量对象并修改其属性  
const person = { name: 'Alice' };  
person.name = 'Bob'; // 这是可以的，因为对象的内容可以被修改

// 但是不能给常量重新分配一个新的对象  
// person = { name: 'Charlie' }; // TypeError: Assignment to constant variable.

let 用于声明一个块级作用域的变量。这意味着变量只在它被声明的代码块（例如 if 语句、for 循环或任何使用 { ... } 的代码块）中有效。
if (true) {  
 let x = 10; // x 只在 if 语句块中有效  
 console.log(x); // 输出 10  
}

// 在这里尝试访问 x 会导致 ReferenceError  
// console.log(x); // ReferenceError: x is not defined

避免在函数组件体内部使用 let 或 var 来声明可能会引发组件重新渲染的变量。相反，应该使用 useState 或其他 Hooks 来管理可变状态。
const 和 let 都不会创建全局变量，除非它们在全局作用域（即在任何函数外部）中被声明。
尽可能使用 const 来声明变量，除非你有明确的理由需要改变变量的值，这时可以使用 let。这有助于保持代码清晰和可预测。
#   C o p y U 5  
 #   C o p y U 5  
 