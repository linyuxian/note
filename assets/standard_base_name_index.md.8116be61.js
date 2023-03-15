import{_ as s,o as a,c as n,N as l}from"./chunks/framework.1bd30c58.js";const d=JSON.parse('{"title":"前端规范","description":"前端规范","frontmatter":{"lang":"zh-CN","title":"前端规范","description":"前端规范"},"headers":[{"level":2,"title":"命名规范","slug":"命名规范","link":"#命名规范","children":[{"level":3,"title":"项目命名","slug":"项目命名","link":"#项目命名","children":[]},{"level":3,"title":"目录命名","slug":"目录命名","link":"#目录命名","children":[]},{"level":3,"title":"JS、CSS、SCSS、HTML、PNG 文件命名","slug":"js、css、scss、html、png-文件命名","link":"#js、css、scss、html、png-文件命名","children":[]},{"level":3,"title":"命名严谨性","slug":"命名严谨性","link":"#命名严谨性","children":[]}]},{"level":2,"title":"HTML 规范 （Vue Template 同样适用）","slug":"html-规范-vue-template-同样适用","link":"#html-规范-vue-template-同样适用","children":[{"level":3,"title":"HTML 类型","slug":"html-类型","link":"#html-类型","children":[]},{"level":3,"title":"缩进","slug":"缩进","link":"#缩进","children":[]},{"level":3,"title":"分块注释","slug":"分块注释","link":"#分块注释","children":[]},{"level":3,"title":"语义化标签","slug":"语义化标签","link":"#语义化标签","children":[]},{"level":3,"title":"引号","slug":"引号","link":"#引号","children":[]}]},{"level":2,"title":"CSS 规范","slug":"css-规范","link":"#css-规范","children":[{"level":3,"title":"命名规范","slug":"命名规范-1","link":"#命名规范-1","children":[]},{"level":3,"title":"选择器","slug":"选择器","link":"#选择器","children":[]},{"level":3,"title":"尽量使用缩写属性","slug":"尽量使用缩写属性","link":"#尽量使用缩写属性","children":[]},{"level":3,"title":"每个选择器及属性独占一行","slug":"每个选择器及属性独占一行","link":"#每个选择器及属性独占一行","children":[]},{"level":3,"title":"省略 0 后面的单位","slug":"省略-0-后面的单位","link":"#省略-0-后面的单位","children":[]},{"level":3,"title":"避免使用 ID 选择器及全局标签选择器防止污染全局样式","slug":"避免使用-id-选择器及全局标签选择器防止污染全局样式","link":"#避免使用-id-选择器及全局标签选择器防止污染全局样式","children":[]}]},{"level":2,"title":"LESS 规范","slug":"less-规范","link":"#less-规范","children":[{"level":3,"title":"代码组织","slug":"代码组织","link":"#代码组织","children":[]},{"level":3,"title":"避免嵌套层级过多","slug":"避免嵌套层级过多","link":"#避免嵌套层级过多","children":[]}]}],"relativePath":"standard/base/name/index.md","lastUpdated":1678867896000}'),p={name:"standard/base/name/index.md"},e=l(`<h1 id="规范" tabindex="-1">规范 <a class="header-anchor" href="#规范" aria-hidden="true">#</a></h1><blockquote><p>规范的目的是为了编写高质量的代码，让你的团队成员每天得心情都是愉悦的，大家在一起是快乐的。此规范根据阿里最新前端规范整理，如有雷同，纯属巧合。</p></blockquote><p>引自《阿里规约》的开头片段：</p><p><em>现代软件架构的复杂性需要协同开发完成，如何高效地协同呢？无规短不成方圆，无规范难以协同，比如，制订交通法规表面上是要限制行车权，实际上是保障公众的人身安全，试想如果没有限速，没有红绿灯，谁还敢上路行驶。对软件来说，适当的规范和标准绝不是消灭代码内容的创造性、优雅性，而是限制过度个性化，以一种普遍认可的统一方式一起做事，提升协作效率，降低沟通成本。代码的字里行间流淌的是软件系统的血液，质量的提升是尽可能少踩坑，杜绝踩 重复的坑，切实提升系统稳定性，码出质量。</em></p><h2 id="命名规范" tabindex="-1">命名规范 <a class="header-anchor" href="#命名规范" aria-hidden="true">#</a></h2><h3 id="项目命名" tabindex="-1">项目命名 <a class="header-anchor" href="#项目命名" aria-hidden="true">#</a></h3><p>全部采用小写方式，以中线分隔。</p><p>✅ <code>mal1-management-system</code></p><p>❌ <code>mall_management-system/malIManagementsystem</code></p><h3 id="目录命名" tabindex="-1">目录命名 <a class="header-anchor" href="#目录命名" aria-hidden="true">#</a></h3><p>全部采用小写方式， 以中划线分隔，有复数结构时，要采用复数命名法， 缩写不用复数。</p><p>✅ <code>scripts/styles/components/images/utils/layouts/demo-styles/demo-scripts/img/doc</code></p><p>❌ <code>script/style/demo_scripts/demostyles/imgs/docs</code></p><p>✅ <code>head-search/page-1oading/authorized/notice-icon</code></p><p>❌ <code>Headsearch/PageLoading</code></p><p>✅ <code>page-one/shopping-car/user-management</code></p><p>❌ <code>ShoppingCar/UserManagement</code></p><blockquote><p>【特殊】 VUEQ 的项目中的 <code>components</code> 中的组件目录，使用 <code>kebab-case</code> 命名。</p></blockquote><h3 id="js、css、scss、html、png-文件命名" tabindex="-1">JS、CSS、SCSS、HTML、PNG 文件命名 <a class="header-anchor" href="#js、css、scss、html、png-文件命名" aria-hidden="true">#</a></h3><p>全部采用小写方式， 以中划线分隔。</p><p>✅ <code>render-dom.js/signup.css/index.html/company-1ogo.png</code></p><p>❌ <code>renderDom.js/UserManagement.html</code></p><h3 id="命名严谨性" tabindex="-1">命名严谨性 <a class="header-anchor" href="#命名严谨性" aria-hidden="true">#</a></h3><p>代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。 说明：正确的 英文拼写和语法可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式也要避免采用</p><p>✅ <code>henan/1uoyang/rmb</code> 等国际通用的名称，可视同英文</p><p>❌ <code>DazhePromotion[打折/getPingfenByName（）[评分〕/int 某变量 =3</code></p><p>杜绝完全不规范的缩写，避免望文不知义：</p><p>❌ <code>Abstractclass</code>命名成 <code>AbsC1ass</code>。</p><p>❌ <code>condition</code>命名成<code>condi</code></p><p>此类随意缩写严重降低了代码的可阅读性。</p><h2 id="html-规范-vue-template-同样适用" tabindex="-1">HTML 规范 （Vue Template 同样适用） <a class="header-anchor" href="#html-规范-vue-template-同样适用" aria-hidden="true">#</a></h2><h3 id="html-类型" tabindex="-1">HTML 类型 <a class="header-anchor" href="#html-类型" aria-hidden="true">#</a></h3><p>（建议使用 <code>texthtml</code> 格式的 <code>HTML</code>。避免使用 <code>XHTML</code>。<code>XHTML</code> 以及它的属性，比如<code>application/xhtmltxml</code> 在浏览器中的应用支持与优化空间都十分有限）。</p><ul><li>规定字符编码</li><li>IE 兼容模式</li><li>规定字符编码</li><li>doctype 大写</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IE=Edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Page title</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">images/company-logo.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">alt</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Company</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="缩进" tabindex="-1">缩进 <a class="header-anchor" href="#缩进" aria-hidden="true">#</a></h3><p>缩进使用 2 个空格（一个 tab）</p><p>嵌套的节点应该缩进</p><h3 id="分块注释" tabindex="-1">分块注释 <a class="header-anchor" href="#分块注释" aria-hidden="true">#</a></h3><p>在每一个块状元素，列表元素和表格元素后，加上一对 HTML 注释。</p><h3 id="语义化标签" tabindex="-1">语义化标签 <a class="header-anchor" href="#语义化标签" aria-hidden="true">#</a></h3><p><code>HTML5</code> 中新增很多语义化标签，所以优先使用语义化标签，避免一个页面都是 <code>div</code> 或者 <code>p</code> 标 签。</p><p>✅</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>❌</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="引号" tabindex="-1">引号 <a class="header-anchor" href="#引号" aria-hidden="true">#</a></h3><p>使用双引号(&quot; &quot;) 而不是单引号(’ &#39;) 。</p><p>✅</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">c1ass</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">26ox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">&gt;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>❌</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="css-规范" tabindex="-1">CSS 规范 <a class="header-anchor" href="#css-规范" aria-hidden="true">#</a></h2><h3 id="命名规范-1" tabindex="-1">命名规范 <a class="header-anchor" href="#命名规范-1" aria-hidden="true">#</a></h3><ul><li>类名使用小写字母，以中划线分隔</li><li>id 采用驼峰式命名</li><li>scss 中的变量、函数、混合、<code>placeholder</code> 采用驼峰式命名</li></ul><blockquote><p>ID 和 class 的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和晦涩难懂的名称。</p></blockquote><p>❌</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">fw-800</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">800</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">red</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>✅</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">heavy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">800</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">important</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="选择器" tabindex="-1">选择器 <a class="header-anchor" href="#选择器" aria-hidden="true">#</a></h3><ol><li>css 选择器中避免使用标签名</li></ol><p>从结构、表现、行为分离的原则来看，应该尽量避免 css 中出现 HTML 标签，并且在 css 选择器中出现标签名会存在潜在的问题。</p><ol start="2"><li>使用直接子选择器</li></ol><p>很多前端开发人员写选择器链的时候不使用 直接子选择器(注：直接子选择器和后代选择器的区别）。有时，这可能会号致疼痛的设计问题并且有时候可能会很耗性能。然而，在任何情况下，</p><p>这是一个非常不好的做法。如果你不写很通用的，需要匹配到 DOM 末端的选择器，你应该总 是考虑直接子选择器。</p><p>❌</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">content</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">title</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2rem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>✅</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">content</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">title</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2rem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="尽量使用缩写属性" tabindex="-1">尽量使用缩写属性 <a class="header-anchor" href="#尽量使用缩写属性" aria-hidden="true">#</a></h3><p>❌</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">border-top-style</span><span style="color:#A6ACCD;">: none;</span></span>
<span class="line"><span style="color:#FFCB6B;">font-family</span><span style="color:#A6ACCD;">: palatino</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> georgia</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> serif;</span></span>
<span class="line"><span style="color:#FFCB6B;">font-size</span><span style="color:#A6ACCD;">: 100%;</span></span>
<span class="line"><span style="color:#FFCB6B;">line-height</span><span style="color:#A6ACCD;">: 1.6;</span></span>
<span class="line"><span style="color:#FFCB6B;">padding-bottom</span><span style="color:#A6ACCD;">: 2em;</span></span>
<span class="line"><span style="color:#FFCB6B;">padding-left</span><span style="color:#A6ACCD;">: 1em;</span></span>
<span class="line"><span style="color:#FFCB6B;">padding-right</span><span style="color:#A6ACCD;">: 1em;</span></span>
<span class="line"><span style="color:#FFCB6B;">padding-top</span><span style="color:#A6ACCD;">: 0;</span></span>
<span class="line"></span></code></pre></div><p>✅</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">border-top</span><span style="color:#A6ACCD;">: 0;</span></span>
<span class="line"><span style="color:#FFCB6B;">font</span><span style="color:#A6ACCD;">: 100%/1</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;"> palatino</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> georgia</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> serif;</span></span>
<span class="line"><span style="color:#A6ACCD;">padding: 0 1em 2em;</span></span>
<span class="line"></span></code></pre></div><h3 id="每个选择器及属性独占一行" tabindex="-1">每个选择器及属性独占一行 <a class="header-anchor" href="#每个选择器及属性独占一行" aria-hidden="true">#</a></h3><p>❌</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">00a0e9</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>✅</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">00a0e9</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="省略-0-后面的单位" tabindex="-1">省略 0 后面的单位 <a class="header-anchor" href="#省略-0-后面的单位" aria-hidden="true">#</a></h3><p>❌</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>✅</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="避免使用-id-选择器及全局标签选择器防止污染全局样式" tabindex="-1">避免使用 ID 选择器及全局标签选择器防止污染全局样式 <a class="header-anchor" href="#避免使用-id-选择器及全局标签选择器防止污染全局样式" aria-hidden="true">#</a></h3><p>❌</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>✅</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="less-规范" tabindex="-1">LESS 规范 <a class="header-anchor" href="#less-规范" aria-hidden="true">#</a></h2><h3 id="代码组织" tabindex="-1">代码组织 <a class="header-anchor" href="#代码组织" aria-hidden="true">#</a></h3><ol><li>将公共 <code>less</code> 文件放置在 <code>style/less/common</code> 文件夹</li></ol><p>例: <code>//color.less,common.less</code></p><ol start="2"><li><p>按以下顺序组织</p><p>2.1 @import;</p><p>2.2 变量声明;</p><p>2.3 样式声明;</p></li></ol><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mixins/size.less</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">default-text-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> #333</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">page</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">960px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="避免嵌套层级过多" tabindex="-1">避免嵌套层级过多 <a class="header-anchor" href="#避免嵌套层级过多" aria-hidden="true">#</a></h3><p>将嵌套深度限制在 3 级。对于超过 4 级的嵌套，给子重新评估。这可以避免出现过于详实的 CSS 选择器。避免大量的嵌套规则。当可读性受到影响时，将多于 20 行的嵌套规则出现。</p><p>❌</p><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">title</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> #fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>推荐：</strong></p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">main-title</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  .</span><span style="color:#B2CCD6;">name</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,102),o=[e];function t(c,r,i,D,F,y){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};
