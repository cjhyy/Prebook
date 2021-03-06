# 语法和API

## 1.理解`ECMAScript`和`JavaScript`的关系

一个常见的问题是，ECMAScript 和 JavaScript 到底是什么关系？

要讲清楚这个问题，需要回顾历史。1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。

该标准从一开始就是针对 JavaScript 语言制定的，但是之所以不叫 JavaScript，有两个原因。一是商标，Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，且 JavaScript 本身也已经被 Netscape 公司注册为商标。二是想体现这门语言的制定者是 ECMA，不是 Netscape，这样有利于保证这门语言的开放性和中立性。

因此，ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。

## 2.熟练运用`es5`、`es6`提供的语法规范



## 3.熟练掌握`JavaScript`提供的全局对象（例如`Date`、`Math`）、全局函数（例如`decodeURI`、`isNaN`）、全局属性（例如`Infinity`、`undefined`）

new Date()

Math.floor()

isNaN()

decodeURI()不知道什么意思

Infinity 无穷大

undefined

## 4.熟练应用`map`、`reduce`、`filter` 等高阶函数解决问题

map的用法

reduce的用法

filter的用法

## 5.`setInterval`需要注意的点，使用`setTimeout`实现`setInterval`

##### 用setTimeout实现setInterval

下面我们就一起来实现这个有趣的问题
 思路是使用递归函数，不断地去执行setTimeout从而达到setInterval的效果，看代码

```
function mySetInterval(fn, millisec){
  function interval(){
    setTimeout(interval, millisec);
    fn();
  }
  setTimeout(interval, millisec)
}
```

这个`mySetInterval`函数有一个叫做`interval`的内部函数，它通过`setTimeout`来自动被调用，在`interval`中有一个闭包，调用了回调函数并通过`setTimeout`再次调用了`interval`。

## 6.`JavaScript`提供的正则表达式`API`、可以使用正则表达式（邮箱校验、`URL`解析、去重等）解决常见问题

参考：[2019 年常用 JavaScript 正则大全](https://juejin.im/post/5d245d4151882555300feb77?utm_source=gold_browser_extension)

## 7.`JavaScript`异常处理的方式，统一的异常处理方案

[异常处理](https://blog.csdn.net/sreddouilyongxia/article/details/78188992)