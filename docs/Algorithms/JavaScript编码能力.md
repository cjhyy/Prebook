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



## 3.手写函数柯里化工具函数、并理解其应用场景和优势



## 4.手写防抖和节流工具函数、并理解其内部原理和应用场景



## 5.实现一个`sleep`函数

