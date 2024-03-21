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
#   C o p y U 5  
 