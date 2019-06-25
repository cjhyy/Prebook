# HTML结构详解

> 备注：
>
> - 所有的浏览器默认情况下都会忽略空格和空行
> - 每个标签都有私有属性。也都有公有属性。
> - html中表示长度的单位都是**像素**。HTML只有一种单位就是像素。

HTML标签通常是成对出现的（**双边标记**），比如 `<div>` 和 `</div>`，也有单独呈现的标签（**单边标记**），如：`<br />`、`<hr />`和`<img src=“images/1.jpg” />`等。

属性与标记之间、各属性之间需要以空格隔开。属性值以双引号括起来。

#### 使用`Emmet`插件快速生成html的骨架

新建html，输入`!`后，按 `Tab`键后，自动生成的代码如下：

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

</body>
</html>
```

### 1、文档声明头

任何一个标准的HTML页面，第一行一定是一个以

```
<!DOCTYPE ……
```

开头的语句。 这一行，就是文档声明头，DocType Declaration，简称DTD。此标签可告知浏览器文档使用哪种 HTML 或 XHTML 规范。

#### HTML4.01有哪些规范呢？

首先我们先确定一件事儿，我们现在学习的是**HTML4.01**这个版本，这个版本是IE6开始兼容的。**HTML5是IE9开开始兼容的**。但是IE6、7、8这些浏览器还不能过早的淘汰，所以这几年网页还是应该用HTML4.01来制作。如今，手机、移动端的网页，就可以使用HTML5了，因为其兼容性更高。

说个题外话，html1 至 html3 是美国军方以及高等研究所用的，并未对外公开。

HTML4.01里面有两大种规范，每大种规范里面又各有3种小规范。所以一共6种规范（见下面）：

> HTML4.01里面规定了**普通**和**XHTML**两大种规范。

> HTML觉得自己有一些规定不严谨，比如，标签是否可以用大写字母呢？`<H1></H1>`

> 所以，HTML就觉得，把一些规范严格的标准，又制定了一个XHTML1.0。在XHTML中的字母X，表示“严格的”。

目前Html5中都使用

```
<!DOCTYPE html>
```

### 2、头标签

头标签都放在头部分之间。包括：`<title>`、`<base>`、`<meta>`、`<link>`

- `<title>`：指定整个网页的标题，在浏览器最上方显示。
- `<base>`：为页面上的所有链接规标题栏显示的内容定默认地址或默认目标。
- `<meta>`：提供有关页面的基本信息
- `<body>`：用于定义HTML文档所要显示的内容，也称为主体标签。我们所写的代码必须放在此标签內。
- `<link>`：定义文档与外部资源的关系。

我们打开EditPlus软件，新建一个html文件，自动生成的代码如下：

```
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>
 </head>
 <body>

 </body>
</html>
```

上面的`<meta>`标签都不用记，但是另外还有一个`<meta>`标签是需要记住的：

```
<meta http-equiv="refresh" content="3;http://www.baidu.com">
```

上面这个标签的意思是说，3秒之后，自动跳转到百度页面。

我们接下来对各个头标签进行介绍。

#### （1）字符集 charset

我们发现，在头标签中，有下面这种标签：

```
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
```

字符集用meta标签中的`charset`定义，meta表示“元”。“元”配置，就是表示基本的配置项目。

charset就是charactor set（即“字符集”），这里采用的是。这个meta不用背，用sublime生成就行。

浏览器就是通过meta来看网页是什么字符集的。比如你保存的时候，meta写的和声明的不匹配，那么浏览器就是乱码。

#### （2）定义“关键词”

举例如下：

```
<meta name="Keywords" content="网易,邮箱,游戏,新闻,体育,娱乐,女性,亚运,论坛,短信" />
```

这些关键词，就是告诉搜索引擎，这个网页是干嘛的，能够提高搜索命中率。让别人能够找到你，搜索到你。

#### （3）定义“页面描述”

meta除了可以设置字符集，还可以设置关键字和页面描述。

我们把含有`meta`标签的这一行代码抽象一下：

```
<meta name=" " content=" ">
```

name即“名字”，content即“内容”。

只要设置Description页面描述，那么百度搜索结果，就能够显示这些语句，这个技术叫做**SEO**（search engine optimization，搜索引擎优化）。

设置页面描述的举例：

```
<meta name="Description" content="网易是中国领先的互联网技术公司，为用户提供免费邮箱、游戏、搜索引擎服务，开设新闻、娱乐、体育等30多个内容频道，及博客、视频、论坛等互动交流，网聚人的力量。" />
```

#### （4）title标签

```
		<title>网页的标题</title>
```

title也是有助于SEO搜索引擎优化的。

#### html的完整骨架：

综上所述，html的比较完整的骨架是这样：

```
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		<meta name="Keywords" content="223" />
		<meta name="Description" content="123。" />
		<title>Document</title>
	</head>
	<body>

	</body>
	</html>
```

面试题：

- 问：网页的head标签里面，表示的是页面的配置，有什么配置？
- 答：字符集、关键词、页面描述、页面标题。（今后我们还能看见一些其他的配置：IE适配、视口、iPhone小图标等等）

### 3、`<body>`标签的属性

其属性有：

- `bgcolor`：设置整个网页的背景颜色。
- `background`：设置整个网页的背景图片。
- `text`：设置网页中的文本颜色。
- `leftmargin`：网页的左边距。IE浏览器默认是8个像素。
- `topmargin`：网页的上边距。
- `rightmargin`：网页的右边距。
- `bottommargin`：网页的下边距。

#### `<body>`标签中就是我们网页的内容。下一章列举一下`<body>`标签中常用的标签

### 4、`<link>`标签的属性

> <link> 标签定义文档与外部资源的关系。
> <link> 标签最常见的用途是链接样式表。

链接一个外部样式表

```html
<head>
<link rel="stylesheet" type="text/css" href="theme.css" />
</head>
```