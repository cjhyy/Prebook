# CSS

## 1.`CSS`盒模型，在不同浏览器的差异

元素的总高度最终计算公式是这样的：
总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距

## 2.`CSS`所有选择器及其优先级、使用场景，哪些可以继承，如何运用`at`规则

#### 一. 常见CSS选择器

1. id选择器。`#id` 
2. class选择器.`.class` 
3. 属性选择器。如：`input[type="button"]` 
4. 组合选择器：
 - 多元素选择器“A,B”。，同时匹配所有A元素和B元素，A和B之间用逗号分隔，如：`div,p { color:red; }` 
 - 派生选择器（后代选择器）"A B"。匹配所有属于A元素后代的B元素，A和B之间用空格分隔，如：`#nav li { display:inline; }`,`li a { font-weight:bold; }` 
 - 直接子元素选择器"A>B"。匹配所有A元素的子元素B。如：`div > strong { color:#f00; }` 
 - 相邻元素选择器"A+B"。匹配所有紧随A元素之后的同级元素B，如：`p + p { color:#f00; }` 
5. 标签选择器
6.  `*`通用元素选择器。匹配页面任何元素。很少用到。
7. 伪类选择器。E:XXXXX

#### 二. 选择器的优先级

**从高到低分别是：**

1. 在属性后面使用!important会覆盖页面任何位置定义的元素样式。
2. 作为style属性写在标签里面的内联样式。
3. id选择器
4. 类选择器
5. 伪类选择器
6. 属性选择器
7. 标签选择器
8. 通配符选择器
9. 浏览器自定义
    *~选择器给得越精准权重越高。*
    *~当两个选择器权重相同，样式重叠时，后面那一个的权重高。*

#### 三. 选择器的属性的继承性

##### 一、无继承性的属性

1.display：规定元素应该生成的框的类型
2.文本属性：

vertical-align：垂直文本对齐

text-decoration：规定添加到文本的装饰

text-shadow：文本阴影效果

white-space：空白符的处理

unicode-bidi：设置文本的方向

3.盒子模型的属性：width、height、margin 、margin-top、margin-right、margin-bottom、margin-left、border、border-style、border-top-style、border-right-style、border-bottom-style、border-left-style、border-width、border-top-width、border-right-right、border-bottom-width、border-left-width、border-color、border-top-color、border-right-color、border-bottom-color、border-left-color、border-top、border-right、border-bottom、border-left、padding、padding-top、padding-right、padding-bottom、padding-left

4.背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment

5.定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index

6.生成内容属性：content、counter-reset、counter-increment

7.轮廓样式属性：outline-style、outline-width、outline-color、outline

8.页面样式属性：size、page-break-before、page-break-after

9.声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

##### 二、有继承性的属性

1.字体系列属性

font：组合字体

font-family：规定元素的字体系列

font-weight：设置字体的粗细

font-size：设置字体的尺寸

font-style：定义字体的风格

font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。

font-stretch：对当前的 font-family 进行伸缩变形。所有主流浏览器都不支持。

font-size-adjust：为某个元素规定一个 aspect 值，这样就可以保持首选字体的 x-height。

2.文本系列属性

text-indent：文本缩进

text-align：文本水平对齐

line-height：行高

word-spacing：增加或减少单词间的空白（即字间隔）

letter-spacing：增加或减少字符间的空白（字符间距）

text-transform：控制文本大小写

direction：规定文本的书写方向

color：文本颜色

3.元素可见性：visibility

4.表格布局属性：caption-side、border-collapse、border-spacing、empty-cells、table-layout

5.列表布局属性：list-style-type、list-style-image、list-style-position、list-style

6.生成内容属性：quotes

7.光标属性：cursor

8.页面样式属性：page、page-break-inside、windows、orphans

9.声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、pitch、pitch-range、stress、richness、、azimuth、elevation

##### 三、所有元素可以继承的属性

1.元素可见性：visibility

2.光标属性：cursor

##### 四、内联元素可以继承的属性

1.字体系列属性

2.除text-indent、text-align之外的文本系列属性

##### 五、块级元素可以继承的属性

1.text-indent、text-align

#### 四. CSS中的@  at 规则



## 3.`CSS`伪类和伪元素有哪些，它们的区别和实际应用

伪类用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过:hover来描述这个元素的状态。虽然它和普通的css类相似，可以为已有的元素添加样式，但是它只有处于dom树无法描述的状态下才能为元素添加样式，所以将其称为伪类。

伪元素用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过:before来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。

#### 一.伪类

（1）表示状态：

:link　　　选择未访问的链接；

:visited　 选择已访问的链接；

:hover　　选择鼠标指针移入链接；

:active　　被激活的链接，即按下单击鼠标左键但未松开；

:focus　　选择获取焦点的输入字段；

（2）结构化伪类：

:not　　　　　　否定伪类，用于匹配不符合参数选择器的元素；

:first-child　　 匹配元素的第一个子元素；

:last-child　　  匹配元素的最后一个子元素；

first-of-type　 匹配属于其父元素的首个特定类型的子元素的每个元素；

:last-of-type　 匹配元素的最后一个子元素；

:nth-child　　  :nth-child根据元素的位置匹配一个或者多个元素，它接受一个an+b形式的参数（an+b最大数为匹配元素的个数）；

:nth-last-child　　:nth-last-child与:nth-child相似，不同之处在于它是从最后一个子元素开始计数的；

:nth-of-type　   :nth-of-type与nth-child相似，不同之处在于它是只匹配特定类型的元素；

:nth-last-type    :nth-last-of-type与nth-of-type相似，不同之处在于它是从最后一个子元素开始计数的；

:only-child　　    当元素是其父元素中唯一一个子元素时，:only-child匹配该元素；

:only-of-type　　当元素是其父元素中唯一一个特定类型的子元素时，:only-child匹配该元素；

:target　　　　　  当URL带有锚名称，指向文档内某个具体的元素时，:target匹配该元素；

（3）表单相关伪类：

:checked　　匹配被选中的input元素，这个input元素包括radio和checkbox；

:default　　  匹配默认选中的元素，例如：提交按钮总是表单的默认按钮；

:disabled　  匹配禁用的表单元素；

:empty　　   匹配没有子元素的元素。如果元素中含有文本节点、HTML元素或者一个空格，则:empty不能匹配这个元素；

:enabled　　匹配没有设置disabled属性的表单元素；

:in-range    匹配在指定区域内元素；

:out-of-range　 　 与:in-range相反，它匹配不在指定区域内的元素；

:indeterminate　　indeterminate的英文意思是“不确定的”。当某组中的单选框或复选框还没有选取状态时，:indeterminate匹配该组中所有的单选框或复选框；

:valid　　 　 匹配条件验证正确的表单元素；

:invalid　　  与:valid相反，匹配条件验证错误的表单元素；

:optional　　匹配是具有optional属性的表单元素。当表单元素没有设置为required时，即为optional属性；

:required　　匹配设置了required属性的表单元素；

:read-write　　匹配处于编辑状态的元素。input，textarea和设置了contenteditable的HTML元素获取焦点时即处于编辑状态；

:scope(处于试验阶段)　　匹配处于style作用域下的元素。当style没有设置scope属性时，style内的样式会对整个html起作用；

（4）语言相关伪类：

:dir(处于实验阶段)　　匹配指定阅读方向的元素，当HTML元素中设置了dir属性时该伪类才能生效。现时支持的阅读方向有两种：ltr（从左往右）和rtl（从右往左）。目前，只有火狐浏览器支持:dir伪类，并在火狐浏览器中使用时需要添加前缀( -moz-dir() )；

:lang　　　　匹配设置了特定语言的元素，设置特定语言可以通过为了HTML元素设置lang=””属性，设置meta元素的charset=””属性，或者是在http头部上设置语言属性；

（5）其他伪类：

 :root　　匹配文档的根元素。一般的html文件的根元素是html元素，而SVG或XML文件的根元素则可能是其他元素；

:fullscreen　　匹配处于全屏模式下的元素。全屏模式不是通过按F11来打开的全屏模式，而是通过Javascript的Fullscreen API来打开的，不同的浏览器有不同的Fullscreen 　API。目前，:fullscreen需要添加前缀才能使用；

#### 二.伪元素

::before/:before　 　在某个元素之前插入一些内容；

::after/:after　　　　在某个元素之后插入一些内容；

::first-letter/:first-letter　　为某个元素中的文字的首字母或第一个字使用样式；

::first-line/:first-line　　　　为某个元素的第一行文字使用样式；

::selection　　　　 匹配用户被用户选中或者处于高亮状态的部分；

::placeholder　  　 匹配占位符的文本，只有元素设置了placeholder属性时，该伪元素才能生效；

::backdrop(处于试验阶段)　　用于改变全屏模式下的背景颜色，全屏模式的默认颜色为黑色。该伪元素只支持双冒号的形式；

## 4.`HTML`文档流的排版规则，`CSS`几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，雪碧图实现原理



## 5.水平垂直居中的方案、可以实现`6`种以上并对比它们的优缺点

https://segmentfault.com/a/1190000016389031

## 6.`BFC`实现原理，可以解决的问题，如何创建`BFC`



## 7.可使用`CSS`函数复用代码，实现特殊效果



## 8.`PostCSS`、`Sass`、`Less`的异同，以及使用配置，至少掌握一种

## 9.`CSS`模块化方案、如何配置按需加载、如何防止`CSS`阻塞渲染

## 10.熟练使用`CSS`实现常见动画，如渐变、移动、旋转、缩放等等

## 11.`CSS`浏览器兼容性写法，了解不同`API`在不同浏览器下的兼容性情况

## 12.掌握一套完整的响应式布局方案


