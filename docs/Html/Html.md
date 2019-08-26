# HTML

## 1.从规范的角度理解`HTML`，从分类和语义的角度使用标签

根元素:<html>
文档元数据:<link>、<meta>、<style>、<style>
内容分区:<header>、<nav>、 <section>、<aside> 、<footer> 、<h1>~<h6> 、<article> 、<address>、<hgroup>
文本内容:<main>、<div>、<p>、<pre>、<ol>、 <ul>、<li>、<dl> 、<dt>、<dd>、<figure> 、<figcaption>、<blockquote> 、<hr>
内联文本语义:<span>、<a>、<strong>、<em>、<q>、<br>、<mark>、<code>、<abbr>、<b>、<bdi>、<bdo>、<sub>、<sup>、<time>、<i>、<u>、<cite>、<data>、<kbd>、<nobr>、<s>、<samp>、<tt>、<var>、<wbr>、<rp>、<rt>、<rtc>、<ruby>
图片和多媒体:<img><audio> <video><track><map><area>
内嵌内容:<iframe>、<embed>、<object> 、<param>、<picture>、<source>
脚本:<canvas>、<noscript>、<script>
编辑标识:<del>、<ins>
表格内容:<table>、<caption>、<thead>、<tbody>、<tfoot>、<tr>、、<col><colgroup>、<th>、<td>
表单:<form> 、<input>、<textarea> 、<label>、<button>、<datalist>、<fieldset>、<legend>、<meter>、<optgroup>、<option>、<output>、<progress>、<select>
交互元素<details>、<summary>、<dialog>、<menu>
Web 组件:<slot>、<template>
过时的和弃用的元素 :<acronym><applet><basefont><bgsound><big><blink><center><command><content><dir><element><font><frame><frameset><image><isindex><keygen><listing><marquee><menuitem><multicol><nextid><nobr><noembed><noframes><plaintext><spacer><strike><shadow><tt><xmp>

## 2.常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式



## 3.元信息类标签(`head`、`title`、`meta`)的使用目的和配置方法

### 一、head



### 二、title

### 三、meta

meta标签描述了一些基本的元数据。 标签提供了元数据.元数据也不显示在页面上，但会被浏览器解析。META 元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他Web服务。

## 4.`HTML5`离线缓存原理

##### 离线缓存是Html5新特性之一，简单理解就是第一次加载后将数据缓存，在没有清除缓存前提下，下一次没有网络也可以加载，用在静态数据的网页或游戏比较好用。当然，Html5新的特性都不是所有浏览器都能支持的，离线缓存也一样。反正IE9（包括）及IE9以下的浏览器目前是不支持的。如果用在移动端，应该都能支持。检测是否支持离线缓存也是比较简单的。



## 5.可以使用`Canvas API`、`SVG`等绘制高性能的动画

