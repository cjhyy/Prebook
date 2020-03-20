# HTML

## 1.从规范的角度理解`HTML`，从分类和语义的角度使用标签

```html
根元素:<html>
文档元数据:<link>、<meta>、<style>、<style>
内容分区:<header>、<nav>、 <section>、<aside> 、<footer> 、<h1>~<h6> 、<article> 、<address>、<hgroup>
文本内容:<main>、<div>、<p>、<pre>、<ol>、 <ul>、<li>、<dl>、<br>、<dt>、<dd>、<figure> 、<figcaption>、<blockquote> 、<hr>
内联文本语义:<span>、<a>、<strong>、<em>、<q>、<br>、<mark>、<code>、<abbr>、<b>、<bdi>、<bdo>、<sub>、<sup>、<time>、<i>、<u>、<cite>、<data>、<kbd>、<nobr>、<s>、<samp>、<tt>、<var>、<wbr>、<rp>、<rt>、<rtc>、<ruby>
图片和多媒体:<img><audio> <video><track><map><area>
内嵌内容:<iframe>、<embed>、<object> 、<param>、<picture>、<source>
脚本:<canvas>、<noscript>、<script>
编辑标识:<del>、<ins>
表格内容:<table>、<caption>、<thead>、<tbody>、<tfoot>、<tr>、、<col><colgroup>、<th>、<td>
表单:<form> 、<input>、<textarea> 、<label>、<button>、<datalist>、<fieldset>、<legend>、<meter>、<optgroup>、<option>、<output>、<progress>、<select>
交互元素<details>、<summary>、<dialog>、<menu>
Web 组件:<slot>、<template>
```

## 2.常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式

[详情](https://blog.csdn.net/zxcv19961204/article/details/90671662)

## 3.元信息类标签(`head`、`title`、`meta`)的使用目的和配置方法

#### 一、head

##### head中的全局属性

> base标签：base标签指定了一个url地址作为基准，那么当前文档中的所有超链接都遵循这一规则，在a中设置访问目标的相对地址，浏览器会自动解析出一个完整的链接地址，若a的href为空，浏览器也会根据base所给的url进行访问。

```html
<head>
  <base href="https://cloud.baidu.com/" target="_blank">
</head>
<body>
  <a href="solution/marketing.html">可以跳到百度云数字营销解决方案</a>
</body>
```

> Link标签:用于引入外部的文档，常用到引用css样式或icon图标 
>
> 其中：rel属性是link标签的核心(**rel 属性规定当前文档与被链接文档之间的关系**)只有 rel 属性的 "stylesheet"(外部样式表) 值得到了所有浏览器的支持

```html
<head>
  <link rel="stylesheet" type="text/css" href="theme.css" />
</head>
```

#### 二、title

> 浏览器会以特殊的方式来使用标题，当把文档加入链接列表或收藏夹时，文档标题将成为该链接的默认名称<title> 标签是 <head> 标签中唯一要求包含的东西

```
1.dir
属性为rtl和ltr规定元素中内容的文本方向-正向和反向。
2.lang
规定元素中内容的语言代码
3.xml:lang
规定 XHTML 文档中元素内容的语言代码
```

#### 三、meta

> name属性：主要用于描述网页，与之对应的属性值为content,content中的内容主要是便于搜索引擎机器人查找信息和分类信息用的.

```html
<meta name="keywords"content="science,education,culture,politics,ecnomics，relationships,entertaiment,human">//keywords用来告诉搜索引擎你网页的关键字是什么
<meta name="description"content="这是一个学习的网站">
<meta name="viewport" //手机端很重要
content="
width=device-width,  //viewport的高度
initial-scle=1.0,  //初始的缩放比例
maximum-scale=1.0,  //允许用户缩放到的最小比例
minimum-scale=1.0, //允许用户缩放到的最大比例
user-scalable=no" //用户是否可以手动缩放
/>
```

> http-equiv属性:http-equiv顾名思义，相当于http的文件头作用，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性值为content，content中的内容其实就是各个参数的变量值。

```html
<meta http-equiv="expires"content="Fri,01Jan201618:18:18GMT">//2.Expires 期限 可以用于设定网页的到期时间，一旦网页过期，必须到服务器上重新传输
<meta http-equiv="Pragma" content="no-cache">//禁止浏览器从本地计算机的缓存中访问页面内容。
注意：这样设定，访问者将无法脱机浏览。
<meta http-equiv="Refresh" content="2;URL=http://www.jb51.net">//自动刷新并指向新页面 注意：其中的2是指停留2秒钟后自动刷新到URL网址。
<meta http-equiv="Set-Cookie"content="cookievalue=xxx;expires=Friday,12-Jan-200118:18:18GMT；path=/">//如果网页过期，那么存盘的cookie将被删除 注意：必须使用GMT的时间格式。
<meta http-equiv="Window-target" content="_blank">//强制页面在当前窗口以独立页面显示。注意：用来防止别人在框架里调用自己的页面。
```

## 4.`HTML5`离线缓存原理



