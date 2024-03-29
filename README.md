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
#   C o p y U 5 
 
 

// 用户如何根据不同的权限，查看不同的页面
1.ajax role ->menList json 展示有权限的菜单

react=router
1.onEnter
...js
<Router path="/home/" componte = {App onEnter({nexState,replace}=>{
if(nexState.location.pathename !=='1/'{
// 根据参数参数用户的信息
const uid =utils.getUrlParams(nexState,'uid')
if(!uid){
replace('/')
}else{
// XXX
}
})
}}>

## React.createClass VS extends Component

1.语法使用区别
2.proType getDefaultProps 1.create Class：propTypes getDefaultProps()
2.React.Component:propTpyes defaultProps
3.createClass:getIniialState()
4.Componet:constructor
mixin
1.createClass:mixins 添加属性
2.Component:不可使用

## React 时间 和普通 Html 有什么区别

1.事件名称：
原生：全小写
react:onClick 小驼峰
事件函数出来
原生：字符串
react:onclick={}
阻止游览器本身的默认行为
原生：return false
rect:preventDefault()

VDOM 合成事件 模拟原生 DOM 的行为 cross platform react 所有事件全部存放在数组里

## 受控组件 非受控组件

input select react 能否知道当前的状态修改

## 使用数组而不是对象

const [count,setCount] = useState(0);

// 数组结构
const foo = [1,2,3];
const [on,te] = foo;

// 对象结构
const user = {
id:123,
name:'chenghuai
}

const {id,name} = user;
console.log(id,name);

## React refs

refs 可以允许用户直接访问 DOM
(this.refs.userName.value)
<input type="text" ref = "userName></input>
