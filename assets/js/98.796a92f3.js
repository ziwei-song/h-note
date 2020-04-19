(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{407:function(t,a,s){"use strict";s.r(a);var n=s(19),p=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"html-07-布局方式-ie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-07-布局方式-ie"}},[t._v("#")]),t._v(" html-07 布局方式 IE")]),t._v(" "),s("h2",{attrs:{id:"一、有效区以外出现白条问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、有效区以外出现白条问题"}},[t._v("#")]),t._v(" 一、有效区以外出现白条问题")]),t._v(" "),s("p",[t._v("当浏览器的宽度小于有效区的宽度的时候，出现滚动条，滚动条右侧的背景图片或背景颜色会没有，所以出现了白条")]),t._v(" "),s("p",[t._v("解决办法：给100%的盒子设置最小宽度是有效区的宽度，min-width")]),t._v(" "),s("p",[t._v("解决办法二；给有效区也加背景颜色")]),t._v(" "),s("h2",{attrs:{id:"二、圣杯布局（中间自适应）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、圣杯布局（中间自适应）"}},[t._v("#")]),t._v(" 二、圣杯布局（中间自适应）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. 三栏布局，左边宽度固定，右边宽度固定，中间自适应。\n2. 大的父元素里面包含左中右三栏，先写中间的栏目，在写左右\n3. 给中间的栏目设置宽度是100%；左右两侧的栏目宽度是固定。\n4. 给三个栏目设置浮动。\n5. 给左边的栏目加margin-left:-100%;\n6. 给右边的栏目加margin-left:-右边栏目宽度；\n7. 给大的父元素设置padding值：0 右边栏目宽度 0 左边栏目的宽度，把元素都挤到中间。\n8. 给左边的栏目写定位：position:relative; left:-左边栏目的宽度；\n9. 给右边栏目写定位：position:relative; right:-右边栏目的宽度；\n10. 当浏览器的宽度小的时候，出现左右栏目掉下来的问题，给大的父元素设置最小宽度，需要是大于左右两栏的宽度总和。\n")])])]),s("h2",{attrs:{id:"三、双飞翼布局。（中间自适应）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、双飞翼布局。（中间自适应）"}},[t._v("#")]),t._v(" 三、双飞翼布局。（中间自适应）")]),t._v(" "),s("p",[t._v("三栏布局，左右宽度固定，")]),t._v(" "),s("p",[t._v("1-5点如同圣杯布局。")]),t._v(" "),s("p",[t._v("给中间的center加一个子元素，给子元素设置padding值:0 右侧栏目的宽度 0 左侧栏目的宽度。")]),t._v(" "),s("p",[t._v("也可以设置margin值。")]),t._v(" "),s("h2",{attrs:{id:"四、等高布局一、"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、等高布局一、"}},[t._v("#")]),t._v(" 四、等高布局一、")]),t._v(" "),s("p",[t._v("三栏的等高布局：第一栏宽度30%，第二栏宽度40%，第三栏宽度30%，写几栏的等高布局，就要写几个100%的大盒子，还要写几个小盒子，并给几个盒子写浮动。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. 给爷爷爸爸儿子都设置成宽度是100%；\n2. 给爸爸设置相对于原来位置向左侧移动30%，这个时候就漏出爷爷的30%。\n3. 给儿子相对于原来位置向左侧移动40%，就漏出爸爸的40%，儿子也漏出30%。\n4. 给儿子里面的right设置相对于原来的位置向右侧移动70%。\n5. 给儿子里面的center设置如第4点。\n6. 给儿子里面的left设置如第4点。\n")])])]),s("h2",{attrs:{id:"五、等高布局二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、等高布局二"}},[t._v("#")]),t._v(" 五、等高布局二")]),t._v(" "),s("p",[t._v("padding和margin互怼，")]),t._v(" "),s("p",[t._v("三栏布局，第一栏设置300px，第二栏设置400px，第三栏是300px，三栏等高，改变其中一栏的高度，其他两栏的高度跟着改变。")]),t._v(" "),s("p",[t._v("给三栏都加padding-bottom:9999px;margin-bottom:-9999px，保证整个盒子的高度不改变，给三栏的父元素设置溢出隐藏。")]),t._v(" "),s("p",[t._v("等高布局二会出现给第三栏加边框的时候，下边框看不见，")]),t._v(" "),s("p",[t._v("解决办法一、单独写一个和边框的宽高一样的盒子，让这个盒子相对于父元素（大的盒子）进行定位。")]),t._v(" "),s("p",[t._v("解决办法二、给三栏的父元素再加一个父元素，给这个新加的父元素设置背景图片。")]),t._v(" "),s("h2",{attrs:{id:"六、等高布局三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、等高布局三"}},[t._v("#")]),t._v(" 六、等高布局三")]),t._v(" "),s("p",[t._v("边框模拟等高布局（只能写两栏或者三栏）")]),t._v(" "),s("p",[t._v("三栏等高布局，第一栏300px，第二栏400px，第三栏300px。")]),t._v(" "),s("ol",[s("li",[t._v("设置一个大盒子居中浏览器，设置一个小盒子中间的400px，")]),t._v(" "),s("li",[t._v("给中间的盒子设置左边框300px的宽度，右边框300px的宽度，实线的，颜色是左右两边的。")]),t._v(" "),s("li",[t._v("然后在中间的盒子里设置三栏，给这个三栏设置浮动，移动三栏的位置，")]),t._v(" "),s("li",[t._v("给左边的设置margin-left:-700px;，给右边的设置margin-left:-300px,之后给右边的相对定位到右边去；")]),t._v(" "),s("li",[t._v("记得给父元素清楚浮动，否则高度撑不起来，无法等高布局。")])]),t._v(" "),s("h2",{attrs:{id:"七、两栏等高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、两栏等高"}},[t._v("#")]),t._v(" 七、两栏等高")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("son son1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("son son2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".son")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".demo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".son1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -9999px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 9999px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("word-break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" break-all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".son2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -9999px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 9999px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("word-break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" break-all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"八、ie浏览器不兼容性问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、ie浏览器不兼容性问题"}},[t._v("#")]),t._v(" 八、ie浏览器不兼容性问题")]),t._v(" "),s("ol",[s("li",[t._v("在ie6及以下版本，会出现双边距的问题。")])]),t._v(" "),s("p",[t._v("问题：给元素设置浮动，再给元素设置margin-left;第一个元素的左边会出现双倍边距的问题。")]),t._v(" "),s("p",[t._v("解决办法：给浮动的元素设置_display:inline;")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("ie6以下小高度问题：")])]),t._v(" "),s("p",[t._v("问题：给元素设置小高度不行，例如：设置了1px的边框，会出现至少5px高的边框。")]),t._v(" "),s("p",[t._v("解决问题：给元素设置font-size:0; line-height:0; overflow:hidden。")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("ie7及以下版本，块元素转成内联块，不在同一行显示的问题；")])]),t._v(" "),s("p",[t._v("解决办法：给元素加*dispaly:inline; *zoom:1；")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("ie7及以下版本，给子元素设置了相对定位，再给父元素设置溢出隐藏，溢出隐藏会失效。")])]),t._v(" "),s("p",[t._v("解决办法：给父元素也设置相对定位。")]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("ie7及以下版本，li中出现两个或两个以上浮动，li与li中间会出现空白间隙问题，基线对齐；")])]),t._v(" "),s("p",[t._v("解决办法：给li设置vertical-align:top/middle/bottom；")]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("ie8里a标签包含的图片有边框问题，")])]),t._v(" "),s("p",[t._v("解决办法：给图片设置border:none;")]),t._v(" "),s("h2",{attrs:{id:"面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试题"}},[t._v("#")]),t._v(" 面试题")]),t._v(" "),s("p",[t._v("● ie浏览器都有什么不兼容的问题")]),t._v(" "),s("p",[t._v("● 写出五个布局方式")])])}),[],!1,null,null,null);a.default=p.exports}}]);