---
lang: zh-CN
title: 前端规范
description: 前端规范
---

# 规范

> 规范的目的是为了编写高质量的代码，让你的团队成员每天得心情都是愉悦的，大家在一起是快乐的。此规范根据阿里最新前端规范整理，如有雷同，纯属巧合。

引自《阿里规约》的开头片段：

_现代软件架构的复杂性需要协同开发完成，如何高效地协同呢？无规短不成方圆，无规范难以协同，比如，制订交通法规表面上是要限制行车权，实际上是保障公众的人身安全，试想如果没有限速，没有红绿灯，谁还敢上路行驶。对软件来说，适当的规范和标准绝不是消灭代码内容的创造性、优雅性，而是限制过度个性化，以一种普遍认可的统一方式一起做事，提升协作效率，降低沟通成本。代码的字里行间流淌的是软件系统的血液，质量的提升是尽可能少踩坑，杜绝踩 重复的坑，切实提升系统稳定性，码出质量。_

## 命名规范

### 项目命名

全部采用小写方式，以中线分隔。

✅ `mal1-management-system`

❌ `mall_management-system/malIManagementsystem`

### 目录命名

全部采用小写方式， 以中划线分隔，有复数结构时，要采用复数命名法， 缩写不用复数。

✅ `scripts/styles/components/images/utils/layouts/demo-styles/demo-scripts/img/doc`

❌ `script/style/demo_scripts/demostyles/imgs/docs`

✅ `head-search/page-1oading/authorized/notice-icon`

❌ `Headsearch/PageLoading`

✅ `page-one/shopping-car/user-management`

❌ `ShoppingCar/UserManagement`

> 【特殊】 VUEQ 的项目中的 `components` 中的组件目录，使用 `kebab-case` 命名。

### JS、CSS、SCSS、HTML、PNG 文件命名

全部采用小写方式， 以中划线分隔。

✅ `render-dom.js/signup.css/index.html/company-1ogo.png`

❌ `renderDom.js/UserManagement.html`

### 命名严谨性

代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。 说明：正确的 英文拼写和语法可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式也要避免采用

✅ `henan/1uoyang/rmb` 等国际通用的名称，可视同英文

❌ `DazhePromotion[打折/getPingfenByName（）[评分〕/int 某变量 =3`

杜绝完全不规范的缩写，避免望文不知义：

❌ `Abstractclass`命名成 `AbsC1ass`。

❌ `condition`命名成`condi`

此类随意缩写严重降低了代码的可阅读性。

## HTML 规范 （Vue Template 同样适用）

### HTML 类型

（建议使用 `texthtml` 格式的 `HTML`。避免使用 `XHTML`。`XHTML` 以及它的属性，比如`application/xhtmltxml` 在浏览器中的应用支持与优化空间都十分有限）。

- 规定字符编码
- IE 兼容模式
- 规定字符编码
- doctype 大写

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta charset="UTF-8" />
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company" />
  </body>
</html>
```

### 缩进

缩进使用 2 个空格（一个 tab）

嵌套的节点应该缩进

### 分块注释

在每一个块状元素，列表元素和表格元素后，加上一对 HTML 注释。

### 语义化标签

`HTML5` 中新增很多语义化标签，所以优先使用语义化标签，避免一个页面都是 `div` 或者 `p` 标 签。

✅

```html
<header></header>
<footer></footer>
```

❌

```html
<div>
  <p></p>
</div>
```

### 引号

使用双引号(" ") 而不是单引号(’ ') 。

✅

```html
<div c1ass="26ox">></div>
```

❌

```html
<div class="box"></div>
```

## CSS 规范

### 命名规范

- 类名使用小写字母，以中划线分隔
- id 采用驼峰式命名
- scss 中的变量、函数、混合、`placeholder` 采用驼峰式命名

> ID 和 class 的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和晦涩难懂的名称。

❌

```css
fw-800 {
  font-weight: 800;
}
.red {
  color: red;
}
```

✅

```css
.heavy {
  font-weight: 800;
}
.important {
  color: red;
}
```

### 选择器

1. css 选择器中避免使用标签名

从结构、表现、行为分离的原则来看，应该尽量避免 css 中出现 HTML 标签，并且在 css 选择器中出现标签名会存在潜在的问题。

2. 使用直接子选择器

很多前端开发人员写选择器链的时候不使用 直接子选择器(注：直接子选择器和后代选择器的区别）。有时，这可能会号致疼痛的设计问题并且有时候可能会很耗性能。然而，在任何情况下，

这是一个非常不好的做法。如果你不写很通用的，需要匹配到 DOM 末端的选择器，你应该总
是考虑直接子选择器。

❌

```css
.content .title {
  font-size: 2rem;
}
```

✅

```css
.content > .title {
  font-size: 2rem;
}
```

### 尽量使用缩写属性

❌

```css
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
```

✅

```css
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```

### 每个选择器及属性独占一行

❌

```css
button {
  width: 100px;
  height: 50px;
  color: #fff;
  background: #00a0e9;
}
```

✅

```css
button {
  width: 100px;
  height: 50px;
  color: #fff;
  background: #00a0e9;
}
```

### 省略 0 后面的单位

❌

```css
div {
  padding-bottom: 0px;
  margin: 0em;
}
```

✅

```css
div {
  padding-bottom: 0;
  margin: 0;
}
```

### 避免使用 ID 选择器及全局标签选择器防止污染全局样式

❌

```css
#header {
  padding-bottom: 0px;
  margin: 0em;
}
```

✅

```css
.header {
  padding-bottom: 0px;
  margin: 0em;
}
```

## LESS 规范

### 代码组织

1. 将公共 `less` 文件放置在 `style/less/common` 文件夹

例: `//color.less,common.less`

2. 按以下顺序组织

   2.1 @import;

   2.2 变量声明;

   2.3 样式声明;

```less
@import "mixins/size.less";
@default-text-color: #333;
.page {
  width: 960px;
  margin: 0 auto;
}
```

### 避免嵌套层级过多

将嵌套深度限制在 3 级。对于超过 4 级的嵌套，给子重新评估。这可以避免出现过于详实的 CSS 选择器。避免大量的嵌套规则。当可读性受到影响时，将多于 20 行的嵌套规则出现。

❌

```less
.main {
  .title {
    .name {
      color: #fff;
    }
  }
}
```

**推荐：**

```css
.main-title {
  .name {
    color: #fff;
  }
}
```
