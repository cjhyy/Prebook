# JavaScript编码能力

## 1.多种方式实现数组去重、扁平化、对比优缺点

### 一、数组去重

#### 1.Array.filter() + indexOf

然后使用 ES6 中的 [Array.filter()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 遍历数组，并结合 indexOf 来排除重复项

```js
function distinct(arr) {
    return arr.filter((item, index)=> {
        return arr.indexOf(item) === index
    })
}
```

#### 2.双重 for 循环

最容易理解的方法，外层循环遍历元素，内层循环检查是否重复

当有重复值的时候，可以使用 push()，也可以使用 splice()

```js
function distinct(arr) {
    for (let i=0, len=arr.length; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
                len--;
                j--;
            }
        }
    }
    return arr
}
```

#### 3.for...of + includes()

双重for循环的升级版，外层用 for...of 语句替换 for 循环，把内层循环改为 includes()

先创建一个空数组，当 includes() 返回 false 的时候，就将该元素 push 到空数组中 

类似的，还可以用 indexOf() 来替代 includes()

```js
function distinct(arr) {
    let result = []
    for (let i of arr) {
        !result.includes(i) && result.push(i)
    }
    return result
}
```

#### 4.Array.sort()

首先使用 sort() 将数组进行排序

然后比较相邻元素是否相等，从而排除重复项

```js
function distinct(arr) {
    arr = arr.sort()
    let result = [arr[0]]

    for (let i=1, len=arr.length; i<len; i++) {
        arr[i] !== arr[i-1] && result.push(arr[i])
    }
    return result
}
```

#### 5.new Set()

ES6 新增了 [Set](http://es6.ruanyifeng.com/#docs/set-map) 这一数据结构，类似于数组，但 **Set 的成员具有唯一性**

基于这一特性，就非常适合用来做数组去重了

```js
function distinct(arr) {
    return Array.from(new Set(arr))
}
```

#### 6.for...of + Object

首先创建一个空对象，然后用 for 循环遍历

利用**对象的属性不会重复**这一特性，校验数组元素是否重复

```js
function distinct(arr) {
    let result = []
    let obj = {}

    for (let i of arr) {
        if (!obj[i]) {
            result.push(i)
            obj[i] = 1
        }
    }
    return result
}
```

### 二、数组扁平化

#### 1.toString

注意：如果arr数组中有空数组，不使用此方法，用下面的方法；同时得到数组的值是字符串，不是数字

```js
var newArr = arr.toString().split(',')
```


#### 2.正则表达式

2、扁平化方法二(正则表达式)

```js
var newArr1 = JSON.parse("[" +JSON.stringify(arr).replace(/(\[\]\,)|[\[\]]*/g, "") + "]");
```

#### 3、reduce

reduce() 方法对累加器和数组中的每个元素 (从左到右)应用一个函数，将其减少为单个值，reduce详细介绍

```js
function flatten(arr) {
  return arr.reduce((a, b) => [].concat(Array.isArray(a) && a ? flatten(a) : a, Array.isArray(b) && b ? flatten(b) : b), [])
  }
var newArr2 = flatten(arr)
```

#### 4.递归遍历数组

```js
var newArr3 = []
function flat(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] instanceof Array) {
            flat(arr[i])
        } else {
            newArr3.push(arr[i])
        }
    }
}

flat(arr)
```

## 2.多种方式实现深拷贝、对比优缺点

### 一、使用递归的方式实现深拷贝

```
//使用递归的方式实现数组、对象的深拷贝
function deepClone1(obj) {
  //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  var objClone = Array.isArray(obj) ? [] : {};
  //进行深拷贝的不能为空，并且是对象或者是
  if (obj && typeof obj === "object") {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone1(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
```

### 二、通过 JSON 对象实现深拷贝
```
//通过js的内置对象JSON来进行数组对象的深拷贝
function deepClone2(obj) {
  var _obj = JSON.stringify(obj),
    objClone = JSON.parse(_obj);
  return objClone;
}
```

### 三、Object.assign()拷贝

```
当对象中只有一级属性，没有二级属性的时候，此方法为深拷贝，但是对象中有对象的时候，此方法，在二级属性以后就是浅拷贝。
```

## 3.手写函数柯里化工具函数、并理解其应用场景和优势

```js

function add(...args) {
    return args.reduce((sums, i) => sums + i);
}
 
function carrying(fn, ...args1) {
    return function (...args2) {
        return fn.call(this, ...args1, ...args2);
    }
}
carrying(add,1)(2);
```

## 4.手写防抖和节流工具函数、并理解其内部原理和应用场景

#### debounce（防抖）

debounce（防抖），简单来说就是防止抖动。

当持续触发事件时，debounce会**合并事件且不会去触发事件**，**当一定时间内没有触发再这个事件时，才真正去触发事件**。

##### 1.非立即执行版

非立即执行版的意思是触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。

```js
const debounce = (func, wait, ...args) => {
  let timeout;
  return function(){
    const context = this;
    if (timeout) clearTimeout(timeoout);
    timeout = setTimeout(() => {
      func.apply(context, ...args)
    },wait);
  }
}

let flag = 0; // 记录当前函数调用次数
// 当用户滚动时被调用的函数
function foo() {
  flag++;
  console.log('Number of calls: %d', flag);
}
 
// 在 debounce 中包装我们的函数，过 2 秒触发一次
document.body.addEventListener('scroll', debounce(foo, 2000));
```

##### 2.立即执行版

立即执行版的意思是触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。

```js
const debounce = (func, wait, ...agrs) => {
  let timeout;
  return function(){
    const context = this;
    if (timeout) cleatTimeout(timeout);
    let callNow = !timeout;
    timeout = setTimeout(() => {
      timeout = null;
    },wait)
    
    if(callNow) func.apply(context,...args)
   }
}
```

#### throttle（节流）



```js

```

## 5.实现一个`sleep`函数

```

```

