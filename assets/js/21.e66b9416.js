(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{328:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js-11-事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-11-事件对象"}},[t._v("#")]),t._v(" js-11 事件对象")]),t._v(" "),a("h2",{attrs:{id:"一、事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、事件"}},[t._v("#")]),t._v(" 一、事件")]),t._v(" "),a("p",[t._v("事件函数：事件要调用的函数；")]),t._v(" "),a("p",[t._v("事件处理函数：事件触发时要执行的函数；")]),t._v(" "),a("p",[t._v("事件对象：事件发生时，与这个事件有关的信息保存的一个对象；")]),t._v(" "),a("p",[t._v("当一个事件发生时，将有关信息保存在事件函数的内置全局对象event当中，可以直接使用，包括事件类型，操作对象，鼠标位置；")]),t._v(" "),a("p",[t._v("常用的内置对象：")]),t._v(" "),a("p",[t._v("type：获取事件类型；")]),t._v(" "),a("p",[t._v("target(srcElement(ie8-))：获取触发事件的对象；")]),t._v(" "),a("p",[t._v("clientX/Y,鼠标到可视区的距离；")]),t._v(" "),a("p",[t._v("pageX/Y,鼠标到文档的距离，包括滚动的地方；ie8以下没有；")]),t._v(" "),a("p",[t._v("e.button 0是鼠标左键，1是滚动按下  2是鼠标右键")]),t._v(" "),a("p",[t._v("IE/谷歌：使用事件函数内的内置对象；")]),t._v(" "),a("p",[t._v("标准浏览器：使用事件函数的第一个参数形参；")]),t._v(" "),a("p",[t._v("做兼容：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果不做ie8兼容，就可以不用写")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"二、事件绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、事件绑定"}},[t._v("#")]),t._v(" 二、事件绑定")]),t._v(" "),a("ol",[a("li",[t._v("定义：在一个元素上绑定多个事件，不会覆盖，都会执行；")]),t._v(" "),a("li",[a("code",[t._v('obj.addEventListener("click",fn,false)')]),t._v(";   标准，true(捕获)，false(冒泡)；this指向自己；")])]),t._v(" "),a("p",[t._v("事件不需要加on，事件处理函数，布尔值)； 缺点：不兼容IE；")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("元素.attachEvent(事件(要加on)，事件处理函数)；只有冒泡；倒序执行；IE8及以下；非标准；this指向window；")])]),t._v(" "),a("p",[t._v("做兼容：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("even"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//元素，事件，事件处理函数；")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attachEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" even"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("even"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("标准浏览器的事件绑定和 ie 浏览器的事件绑定的区别：")]),t._v(" "),a("p",[t._v("（1）ie 没有捕获，标准有捕获")]),t._v(" "),a("p",[t._v("（2）ie 的事件名称前面有 on，标准没有")]),t._v(" "),a("p",[t._v("（3）标准的 ie 会根据事件的顺序正序执行，非 ie 标准逆序，标准正序")]),t._v(" "),a("p",[t._v("（4）ie 的 this 是 window，标准的是触发这个事件的对象")]),t._v(" "),a("p",[t._v("（4）标准浏览器的事件绑定和 ie 浏览器的事件绑定是不共存的，因此我们需要进行一个兼容的操作，一般情况下，如果是两个方法的兼容，那么就拿出其中一个方法，在各个浏览器中查看获取的值，标准浏览器和 ie 浏览器会得到不一样的结果。")]),t._v(" "),a("h2",{attrs:{id:"三、取消事件绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、取消事件绑定"}},[t._v("#")]),t._v(" 三、取消事件绑定")]),t._v(" "),a("p",[t._v("取消事件绑定最好明确函数的名字，不然会有很多不确定的因素；")]),t._v(" "),a("ol",[a("li",[t._v("普通的：元素.onclick = null；")]),t._v(" "),a("li",[t._v('addEventListener事件函数：removeEventListener("事件",事件处理函数)；')]),t._v(" "),a("li",[t._v('attachEvent事件函数：detachEvent("事件",事件处理函数)；')])]),t._v(" "),a("h2",{attrs:{id:"四、事件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、事件流"}},[t._v("#")]),t._v(" 四、事件流")]),t._v(" "),a("p",[a("strong",[t._v("捕获")]),t._v("： 当父元素和子元素都绑定了事件，先触发父元素，再触发子元素，从外到内；")]),t._v(" "),a("p",[a("strong",[t._v("冒泡")]),t._v("： 先触发子元素再触发父元素，从内到外；")]),t._v(" "),a("p",[t._v("事件发生时会在元素节点与根节点之间按照特定的顺序传播，路径所经过的所有节点都会收到该事件，这个传播过程即 DOM 事件流。")]),t._v(" "),a("p",[t._v("DOM 事件流会有 3 个阶段：")]),t._v(" "),a("p",[t._v("事件捕获阶段：事件的传播是从最不特定的事件目标到最特定的事件目标。即从 DOM树的根到叶子。")]),t._v(" "),a("p",[t._v("确定目标阶段：通过捕获确定具体触发事件的元素")]),t._v(" "),a("p",[t._v("事件冒泡阶段：事件的传播是从最特定的事件目标到最不特定的事件目标。即从 DOM树的叶子到根。")]),t._v(" "),a("h2",{attrs:{id:"五、阻止冒泡事件（掌握）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、阻止冒泡事件（掌握）"}},[t._v("#")]),t._v(" 五、阻止冒泡事件（掌握）")]),t._v(" "),a("p",[t._v("问题：子元素设置事件，再给其父元素设置事件，当触发子元素事件的时候，其父元素的事件也触发了，子元素监听到触发事件，所有包含事件的父元素都会触发；")]),t._v(" "),a("p",[t._v("阻止：")]),t._v(" "),a("p",[t._v("event.stopPropagation()；IE8以下不兼容； Propagation 传播传递")]),t._v(" "),a("p",[t._v("event.cancelBubble=true；IE8以下兼容； Bubble冒泡，cancel取消;")]),t._v(" "),a("p",[t._v("做兼容：")]),t._v(" "),a("p",[t._v("event.stopPropagation ? event.stopPropagation() : window.event.cancelBubble = true;")]),t._v(" "),a("p",[t._v("注意：不是所有的事件都能冒泡，blur、focus、load、unload不能冒泡；")]),t._v(" "),a("h2",{attrs:{id:"六、事件委托"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、事件委托"}},[t._v("#")]),t._v(" 六、事件委托")]),t._v(" "),a("ol",[a("li",[t._v("将子元素要做的事情委托给父元素；event.target;")]),t._v(" "),a("li",[t._v("使用场景：子元素很多，事件相同的使用，后添加的相同元素会有相同的脚本；")]),t._v(" "),a("li",[t._v("原理：事件委托是利用事件冒泡原理来实现的，因为点击子元素会冒泡到父元素，那么给父元素做点击事件，里面的元素做点击事件时，都会冒泡到父元素身上，这就是事件委托，委托它们的父级代为执行事件；")]),t._v(" "),a("li",[t._v("事件委托实现：将事件添加到父元素上，当事件发生时，父元素会找到对应触发事件的子元素去处理，后期添加的子元素，依然有这个事件。")])]),t._v(" "),a("p",[t._v("事件源不兼容IE8-，IE8支持：event.srcElement；")]),t._v(" "),a("p",[t._v("事件源兼容：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("srcElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"七、取消事件默认行为"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、取消事件默认行为"}},[t._v("#")]),t._v(" 七、取消事件默认行为")]),t._v(" "),a("ol",[a("li",[t._v("return false；对事件绑定设置的不起作用，也可以直接使用以下的两种；")]),t._v(" "),a("li",[t._v("事件绑定的阻止默认行为：event.preventDefault()；")]),t._v(" "),a("li",[t._v("IE事件绑定：event.returnValue = false；")])]),t._v(" "),a("p",[t._v("总结：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("事件绑定")]),t._v(" "),a("th",[t._v("取消事件绑定")]),t._v(" "),a("th",[t._v("阻止事件冒泡")]),t._v(" "),a("th",[t._v("事件委托")]),t._v(" "),a("th",[t._v("取消默认行为")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("通常")]),t._v(" "),a("td",[t._v("obj.事件=函数")]),t._v(" "),a("td",[t._v("onclick = null")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("return false")])]),t._v(" "),a("tr",[a("td",[t._v("标准浏览器")]),t._v(" "),a("td",[t._v("addEventListener")]),t._v(" "),a("td",[t._v("removeEventListener")]),t._v(" "),a("td",[t._v("stopPropagation")]),t._v(" "),a("td",[t._v("event.target")]),t._v(" "),a("td",[t._v("event.preventDefault()")])]),t._v(" "),a("tr",[a("td",[t._v("非标准浏览器")]),t._v(" "),a("td",[t._v("attachEvent")]),t._v(" "),a("td",[t._v("detachEvent")]),t._v(" "),a("td",[t._v("cancelBubble")]),t._v(" "),a("td",[t._v("event.srcElement")]),t._v(" "),a("td",[t._v("event.returnValue = false；")])])])]),t._v(" "),a("h2",{attrs:{id:"八、键盘事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八、键盘事件"}},[t._v("#")]),t._v(" 八、键盘事件")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("onkeydown")]),t._v("；按下；不区分大小写")]),t._v(" "),a("li",[a("code",[t._v("onkeyup")]),t._v("；抬起；")]),t._v(" "),a("li",[a("code",[t._v("onkeypress")]),t._v("；比onkeydown后触发，区分大小写，只能包含数字和字母，大小写是反过来的；不能获取到功能键，如箭头；")])]),t._v(" "),a("p",[t._v("键盘值：\n"),a("code",[t._v("event.key")]),t._v("   获得按下的键；")]),t._v(" "),a("p",[a("code",[t._v("event.keyCode")]),t._v("    获得按下的键码值，字母为大写的Unicode码；")]),t._v(" "),a("p",[a("code",[t._v("event.shiftKey")]),t._v("；是否按下shift键，返回布尔值；")]),t._v(" "),a("p",[a("code",[t._v("event.ctrlKey")]),t._v("；是否按下ctrl键；")]),t._v(" "),a("p",[a("code",[t._v("event.altKey")]),t._v("；是否按下alt键；")]),t._v(" "),a("ul",[a("li",[t._v("扩展")])]),t._v(" "),a("p",[a("code",[t._v("compositionstart")]),t._v(" 中文输入法输入开始时触发。")]),t._v(" "),a("p",[a("code",[t._v("compositionend")]),t._v(" 中文输入法输入结束时触发。")]),t._v(" "),a("h2",{attrs:{id:"九、鼠标滚轮事件："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#九、鼠标滚轮事件："}},[t._v("#")]),t._v(" 九、鼠标滚轮事件：")]),t._v(" "),a("p",[a("code",[t._v("元素.onmousewheel")]),t._v("    滚动的时候触发；")]),t._v(" "),a("p",[a("code",[t._v("event.wheelDelta")]),t._v("：120向上滚动；-120向下滚动；")]),t._v(" "),a("p",[t._v("火狐浏览器需要通过绑定事件获取：")]),t._v(" "),a("p",[a("code",[t._v('div.addEventListener("DOMMouseScroll"，事件处理函数)')]),t._v("；")]),t._v(" "),a("p",[a("code",[t._v("event.detail")]),t._v("：-3向上滚动，3向下滚动；")]),t._v(" "),a("h2",{attrs:{id:"十、customevent事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十、customevent事件"}},[t._v("#")]),t._v(" 十、customEvent事件")]),t._v(" "),a("p",[t._v("自定义事件，就跟vue里面的on跟emit一样")]),t._v(" "),a("p",[t._v("监听自定义事件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'follow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {name:'前端'}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("派发自定义事件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'follow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    detail"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'前端'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" div "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("click")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'被点击了111111'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" click "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("click"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"十一、监控事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十一、监控事件"}},[t._v("#")]),t._v(" 十一、监控事件")]),t._v(" "),a("ul",[a("li",[t._v("使用 monitorEvents() 侦听特定类型的事件。")]),t._v(" "),a("li",[t._v("使用 unmonitorEvents() 停止侦听。")]),t._v(" "),a("li",[t._v("使用 getEventListeners() 获取 DOM 元素的侦听器。")]),t._v(" "),a("li",[t._v("使用“Event Listeners Inspector”面板获取有关事件侦听器的信息。")])]),t._v(" "),a("p",[t._v("获取元素绑定的事件对象：getEventListeners(元素)；     需要在控制台打印：")]),t._v(" "),a("p",[t._v("监控元素上的事件命令： monitorEvents 和 unmonitorEvents")]),t._v(" "),a("p",[t._v("monitorEvents(元素，[可选的事件名字])")]),t._v(" "),a("p",[t._v("monitorEvents(document,'click')")]),t._v(" "),a("h2",{attrs:{id:"十二、try-catch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十二、try-catch"}},[t._v("#")]),t._v(" 十二、try  catch")]),t._v(" "),a("p",[t._v("用来捕获出错的代码，try..catch只能捕获同步代码，不能捕获异步代码的错误；")]),t._v(" "),a("p",[t._v("如果出错了，则不能执行下面的步骤，因此可以使用try来捕获错误")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可能成功的事件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//捕获错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 无论成功于否都会执行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"高频面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高频面试题"}},[t._v("#")]),t._v(" 高频面试题")]),t._v(" "),a("p",[t._v("● 事件、IE 与火狐的事件机制有什么区别？")]),t._v(" "),a("p",[t._v("● 如何阻止冒泡？")]),t._v(" "),a("p",[t._v("● 事件绑定和普通事件有什么区别。")]),t._v(" "),a("p",[t._v("● 如何用原生 js 给元素绑定两个 click 事件？")]),t._v(" "),a("p",[t._v("● 解释一下事件流？")]),t._v(" "),a("p",[t._v("● 事件委托是什么。")]),t._v(" "),a("p",[t._v("● 给 10000 个 li 添加点击事件。")])])}),[],!1,null,null,null);s.default=e.exports}}]);