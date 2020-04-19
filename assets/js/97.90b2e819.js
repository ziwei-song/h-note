(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{404:function(t,v,_){"use strict";_.r(v);var i=_(19),a=Object(i.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"html-06定位-bfc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#html-06定位-bfc"}},[t._v("#")]),t._v(" html-06定位 BFC")]),t._v(" "),_("h2",{attrs:{id:"一、-相对定位position：relative"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、-相对定位position：relative"}},[t._v("#")]),t._v(" 一、 相对定位position：relative")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("只给一个元素加相对定位，不加具体的位置，对这个元素本身没有任何影响。")])]),t._v(" "),_("li",[_("p",[t._v("相对于原来的位置进行定位的，原来的位置还占位。")])]),t._v(" "),_("li",[_("p",[t._v("配合top,left,right,bottom使用")])]),t._v(" "),_("li",[_("p",[t._v("提升层级")])])]),t._v(" "),_("h2",{attrs:{id:"二、提升层级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、提升层级"}},[t._v("#")]),t._v(" 二、提升层级")]),t._v(" "),_("p",[t._v("z-index:改变元素层级，只用在加了定位的元素上，数值越高层级越大，正常文档流层级是0。")]),t._v(" "),_("h2",{attrs:{id:"三、绝对定位：position-absolute"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、绝对定位：position-absolute"}},[t._v("#")]),t._v(" 三、绝对定位：position:absolute;")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("相对于初始包含块定位，根据用户代理的不同，初始包含块可能是html，也可能是画布，脱离文档流不占位。")])]),t._v(" "),_("li",[_("p",[t._v("配合top,left,right,bottom使用")])]),t._v(" "),_("li",[_("p",[t._v("通常情况下绝对定位和相对定位配合使用，子元素用绝对定位，父元素用相对定位（子绝父相）。")])]),t._v(" "),_("li",[_("p",[t._v("加了绝对定位的元素，先看父元素有没有定位（绝对定位，相对定位，固定定位），如果父元素有定位，就相对于父元素定位，父元素没有定位，就看爷爷，爷爷有定位就相对于爷爷定位")])]),t._v(" "),_("li",[_("p",[t._v("提升层级")])])]),t._v(" "),_("h2",{attrs:{id:"四、-固定定位：position：fixed。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、-固定定位：position：fixed。"}},[t._v("#")]),t._v(" 四、 固定定位：position：fixed。")]),t._v(" "),_("ol",[_("li",[t._v("相对于浏览器进行定位，定位之后脱离文档流不占位。")]),t._v(" "),_("li",[t._v("提升层级")]),t._v(" "),_("li",[t._v("配合top,left,right,bottom使用")])]),t._v(" "),_("p",[t._v("添加fixed需要添加-webkit-transform: translateZ(0) 防止webkit抖动；")]),t._v(" "),_("h2",{attrs:{id:"五、粘合定位"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、粘合定位"}},[t._v("#")]),t._v(" 五、粘合定位")]),t._v(" "),_("p",[t._v("position: sticky；")]),t._v(" "),_("p",[t._v("是relative和fixed的结合体；")]),t._v(" "),_("p",[t._v("当元素在屏幕内，表现为relative，当溢出屏幕，表现为fixed；")]),t._v(" "),_("p",[t._v("作用：特别适合导航的跟随定位效果；")]),t._v(" "),_("h2",{attrs:{id:"六、-脱离文档流的属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、-脱离文档流的属性"}},[t._v("#")]),t._v(" 六、 脱离文档流的属性")]),t._v(" "),_("ol",[_("li",[t._v("float:left;")]),t._v(" "),_("li",[t._v("float:right;")]),t._v(" "),_("li",[t._v("position:absolute;")]),t._v(" "),_("li",[t._v("position:fixed;")])]),t._v(" "),_("p",[t._v("浮动，脱离文档流但是不脱离文本流。")]),t._v(" "),_("p",[t._v("定位：既脱离文档流，也脱离文本流。")]),t._v(" "),_("p",[t._v("脱离文档流的元素就不区分块还是内联，都可以设置宽高等盒模型的样式。")]),t._v(" "),_("h2",{attrs:{id:"七、-bfc-块级格式化上下文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#七、-bfc-块级格式化上下文"}},[t._v("#")]),t._v(" 七、 BFC(块级格式化上下文)")]),t._v(" "),_("ol",[_("li",[t._v("什么是BFC")])]),t._v(" "),_("p",[t._v("Block Formatting Context：指页面中的一个渲染区域，并且拥有一套渲染规则，他决定了其子标签如何定位，以及与其他标签的相互关系和作用。")]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("如何生成BFC")])]),t._v(" "),_("p",[t._v("既然BFC是一块渲染区域，那这块渲染区域到底在哪，它又是有多大，这些由生成BFC的标签决定，CSS2.1中规定满足下列CSS声明之一的标签便会生成BFC。")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("1. 根标签 html\n2. float的值不为none(为left/right)。\n3. overflow的值不为visible（为hidden/scroll/auto都行）\n4. display的值为inline-block\n5. position的值为absolute或fixed\n")])])]),_("ol",{attrs:{start:"3"}},[_("li",[_("p",[t._v("BFC的特性")]),t._v(" "),_("ol",[_("li",[t._v("内部的标签会在垂直方向上一个接一个的放置")]),t._v(" "),_("li",[t._v("垂直方向上的距离由margin决定，属于同一个BFC的两个相邻标签的margin会发生重叠")]),t._v(" "),_("li",[t._v("每个标签的左外边距与包含块的左边界相接触（从左向右），即使浮动标签也是如此。")]),t._v(" "),_("li",[t._v("BFC的区域不会与float的标签区域重叠")]),t._v(" "),_("li",[t._v("计算BFC的高度时，浮动子标签也参与计算")]),t._v(" "),_("li",[t._v("BFC就是页面上的一个隔离的独立容器，容器里面的子标签不会影响到外面标签，反之亦然")])])]),t._v(" "),_("li",[_("p",[t._v("BFC解决的问题")])])]),t._v(" "),_("p",[t._v("1）外边距折叠 (margin重叠的问题)")]),t._v(" "),_("p",[t._v("2）自适应两栏或三栏布局。")]),t._v(" "),_("p",[t._v("3）防止字体环绕")]),t._v(" "),_("p",[t._v("4）清除浮动")]),t._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[t._v("margin塌陷问题")])]),t._v(" "),_("h2",{attrs:{id:"面试题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试题"}},[t._v("#")]),t._v(" 面试题")]),t._v(" "),_("p",[t._v("● 如何让盒子水平垂直居中？")]),t._v(" "),_("p",[t._v("● 简述BFC规则，及解决的问题？")])])}),[],!1,null,null,null);v.default=a.exports}}]);