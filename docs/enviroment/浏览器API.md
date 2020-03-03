# 浏览器API

## 1.浏览器提供的符合`W3C`标准的`DOM`操作`API`、浏览器差异、兼容性

[答案](https://blog.csdn.net/TrackerMe/article/details/83852573)

## 2.浏览器提供的浏览器对象模型 (`BOM`)提供的所有全局`API`、浏览器差异、兼容性

[答案](https://www.cnblogs.com/sui776265233/p/8696653.html)

## 3.大量`DOM`操作、海量数据的性能优化(合并操作、`Diff`、`requestAnimationFrame`等)

[答案](https://blog.csdn.net/u013929284/article/details/56483035)

## 4.浏览器海量数据存储、操作性能优化



## 5.`DOM`事件流的具体实现机制、不同浏览器的差异、事件代理

事件流又称为事件传播，DOM2级事件规定的事件流包括三个阶段：事件捕获阶段(capture phase)、处于目标阶段(target phase)和事件冒泡阶段(bubbling phase)



> DOM事件流的具体实现机制、不同浏览器的差异、事件代理：
>
> https://www.cnblogs.com/xiaohuochai/p/5859476.html
>
> https://www.cnblogs.com/xiaohuochai/p/5859674.html
>
> https://www.cnblogs.com/xiaohuochai/p/5862775.html

## 6.前端发起网络请求的几种方式及其底层实现、可以手写原生`ajax`、`fetch`、可以熟练使用第三方库

form表单、ifream、刷新页面

Ajax - 异步网络请求的开山鼻祖

jQuery - 一个时代

fetch - Ajax的替代者

axios、request等众多开源库

#### 原生Ajax的用法：

```
var xhr = new XMLHttpRequest();

xhr.open('post','www.xxx.com',true)

// 接收返回值

xhr.onreadystatechange = function(){

if(xhr.readyState === 4 ){

if(xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){

console.log(xhr.responseText);

}

}

}

// 处理请求参数

postData = {"name1":"value1","name2":"value2"};

postData = (function(value){

var dataString = "";

for(var key in value){

dataString += key+"="+value[key]+"&";

};

return dataString;

}(postData));

// 设置请求头

xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

// 异常处理

xhr.onerror = function() {

console.log('Network request failed')

}

// 跨域携带cookie

xhr.withCredentials = true;

// 发出请求

xhr.send(postData);
```



## 7.浏览器的同源策略，如何避免同源策略，几种方式的异同点以及如何选型

浏览器的同源策略：

 

同源策略（Same origin policy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。

可以说 Web 是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。

 

它的核心就在于它认为自任何站点装载的信赖内容是不安全的。当被浏览器半信半疑的脚本运行在沙箱时，它们应该只被允许访问来自同一站点的资源，而不是那些来自其它站点可能怀有恶意的资源。

 

所谓同源是指：域名、协议、端口相同。



>  参考资料：
>  
>
> https://www.cnblogs.com/laixiangran/p/9064769.html
> 

## 8.浏览器提供的几种存储机制、优缺点、开发中正确的选择

> 参考资料：
>
> https://www.jianshu.com/p/baa0b62a372e

## 9.浏览器跨标签通信

> 参考资料：
>
> https://blog.csdn.net/meijory/article/details/76358570
>
> https://blog.csdn.net/liwenfei123/article/details/79996161
>
> https://blog.csdn.net/liwenfei123/article/details/80027155