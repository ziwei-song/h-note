(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{423:function(t,s,a){"use strict";a.r(s);var n=a(19),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jq-02-选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jq-02-选择器"}},[t._v("#")]),t._v(" jq-02 选择器")]),t._v(" "),a("h2",{attrs:{id:"一、-css方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-css方法"}},[t._v("#")]),t._v(" 一、.css方法")]),t._v(" "),a("ol",[a("li",[a("p",[t._v('$("li").css("color","red");将所有的li标签的颜色都修改为红色，不需要for循环遍历所有的li标签，')])]),t._v(" "),a("li",[a("p",[t._v("设置多个css样式：")])])]),t._v(" "),a("p",[t._v('.css({"width":"100px","height":"100px","background":"red"});   //可以直接放到一个对象当中；')]),t._v(" "),a("h2",{attrs:{id:"二、选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、选择器"}},[t._v("#")]),t._v(" 二、选择器")]),t._v(" "),a("p",[t._v("1.css选择器")]),t._v(" "),a("p",[t._v("可以使用所有的样式选择器；")]),t._v(" "),a("p",[t._v("#id    获取id名")]),t._v(" "),a("p",[t._v(".class    获取class类名")]),t._v(" "),a("p",[t._v("div    获取标签名")]),t._v(" "),a("p",[t._v("div,p,li    群组选择器")]),t._v(" "),a("p",[t._v("div.red    获取class为red的div标签；")]),t._v(" "),a("p",[t._v("div>span    获取div下的直接子元素span；")]),t._v(" "),a("p",[t._v("div span    div下的所有子元素span标签；")]),t._v(" "),a("p",[t._v("div~span  选择下面所有的；")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("基本筛选选择器")])]),t._v(" "),a("p",[t._v(":first 第一个")]),t._v(" "),a("p",[t._v(":last 最后一个")]),t._v(" "),a("p",[t._v(":eq(index),指定第一个，下标从0开始；")]),t._v(" "),a("p",[t._v(":not()    除了小括号的标签；")]),t._v(" "),a("p",[t._v(":odd    下标为奇数的标签，下标是从0开始的，所以选择的是偶数标签；")]),t._v(" "),a("p",[t._v(":even    下标为偶数的标签")]),t._v(" "),a("p",[t._v(":gt(1)    下标大于1的元素")]),t._v(" "),a("p",[t._v(":lt(1)    下标小于1的元素；")]),t._v(" "),a("p",[t._v(":header    所有h标签；")]),t._v(" "),a("p",[t._v(":root    选中html标签；")]),t._v(" "),a("p",[t._v(":animated    匹配所有正在执行动画效果的元素；")]),t._v(" "),a("p",[t._v('$("div:not(:animated)").animate({"width":"+=200"}) //给没有在动画的div，加长')]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("内容选择器")])]),t._v(" "),a("p",[t._v(":contains(我)    选择内容有我的标签")]),t._v(" "),a("p",[t._v(":empty    选择内容为空的标签，有空格或标签都不为空；")]),t._v(" "),a("p",[t._v(":parent    选择有内容的标签；")]),t._v(" "),a("p",[t._v(":has(span)    选择有span标签的标签；")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("隐藏看见")])]),t._v(" "),a("p",[t._v(":hidden    获取看不见的标签(在页面中不显示的标签)")]),t._v(" "),a("p",[t._v('type="hidden"和display:none；')]),t._v(" "),a("p",[t._v(":visible     获取可以看见的标签，页面中显示的")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("属性选择器")])]),t._v(" "),a("p",[t._v("div[class]    有class属性的")]),t._v(" "),a("p",[t._v("div[class=box]    div的class属性值为box的；")]),t._v(" "),a("p",[t._v("div[class^=box]    以box开头的")]),t._v(" "),a("p",[t._v("div[class$=box]     以box结尾的")]),t._v(" "),a("p",[t._v("div[class*=box]     包含box的；")]),t._v(" "),a("p",[t._v("div[class][title]      有class属性并且有title属性的；")]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[t._v("子元素选择器\nul li:first-child    选择所有父元素中第一个li")]),t._v(" "),a("p",[t._v("first的区别：第一个父元素下所有li中的第一个li")])])]),t._v(" "),a("p",[t._v("ul li:last-child    选择所有ul下的最后一个li；")]),t._v(" "),a("p",[t._v(":nth-child()        选择指定的第几个标签，从1开始")]),t._v(" "),a("p",[t._v(":first-of-type     选择第一次出现的；")]),t._v(" "),a("p",[t._v(":last-of-type      最后一次出现的；")]),t._v(" "),a("p",[t._v(":nth-of-type()    指定的第几个标签；")]),t._v(" "),a("p",[t._v("child：是从第一个孩子开始找；")]),t._v(" "),a("p",[t._v("of-type：是从第一次出现的孩子找的；")]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("表单选择器")])]),t._v(" "),a("p",[t._v(":input    选中所有表单标签，包括select、textarea；")]),t._v(" "),a("p",[t._v("选中具体某个input标签可以冒号type类型，select直接使用标签选择器；")]),t._v(" "),a("p",[t._v("例：    :text    选中单文本框；")]),t._v(" "),a("p",[t._v('.attr("checked",true)；设置复选框被选中状态')]),t._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[t._v("表单对象属性")])]),t._v(" "),a("p",[t._v(":enabled    选中所有可用的；")]),t._v(" "),a("p",[t._v(":disabled    选中所有禁用的；")]),t._v(" "),a("p",[t._v(":checked    选中的；")]),t._v(" "),a("p",[t._v(":selected    下拉框被选中的；")]),t._v(" "),a("h2",{attrs:{id:"三、操作数组或对象的方法：（常用）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、操作数组或对象的方法：（常用）"}},[t._v("#")]),t._v(" 三、操作数组或对象的方法：（常用）")]),t._v(" "),a("ol",[a("li",[t._v("$.each()，括号两个参数：变量，函数；")])]),t._v(" "),a("p",[t._v('循环元素时也可以：$("li").each(function(){})；循环每一个li；')]),t._v(" "),a("p",[t._v("函数两个形参：下标，值，一个形参为下标；")]),t._v(" "),a("p",[t._v("（1）、循环数组时：")]),t._v(" "),a("p",[t._v("数组是单个时：a表示下标，b表示值")]),t._v(" "),a("p",[t._v("数组套数组时(二维数组)：b[0]表示每个小数组的第一个值；")]),t._v(" "),a("p",[t._v("数组套对象时：b.name取所有的name值")]),t._v(" "),a("p",[t._v("（2）、循环对象时：")]),t._v(" "),a("p",[t._v("a表示键名，b表示键值；")]),t._v(" "),a("p",[t._v("循环所有的li，执行里面的条件；")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"li"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这样调用的this指向window，")]),t._v("\n也可以：\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"li"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这样调用的this指向li；")]),t._v("\n")])])]),a("p",[t._v("循环元素时，b是dom元素，这里面的this是b，如果想使用jquery的方法，需要$(b)包一下;")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("$.map(循环变量，function(a,b){});，第一个a表示数据，b表示下标；")])]),t._v(" "),a("p",[t._v("当map操作数组返回null和undefined时，不会保存在新的数组中；")]),t._v(" "),a("p",[t._v("从1.6版本开始，map才能用来循环对象，a表示键名，b表示键值，this代表b；")]),t._v(" "),a("p",[t._v("$.map不能直接$(b).map(function(){});")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" aa "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//[1,2,3]，4满足条件，返回空；")]),t._v("\n")])])]),a("p",[t._v("这里的aa是dom元素的，如果$(ary).map调用的话直接将类型转换jquery元素了；低版本浏览器会发生不兼容；标准调用方法是$.map(ary,function(){});")]),t._v(" "),a("h2",{attrs:{id:"四、extend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、extend"}},[t._v("#")]),t._v(" 四、extend")]),t._v(" "),a("ol",[a("li",[t._v("扩展：$.extend(obj,obj1,obj2)；将obj1和obj2扩展到obj中，一般obj是一个空对象{}；")])]),t._v(" "),a("p",[t._v("例：var obj3 = $.extend({},obj1,obj2),将obj1和obj2合并到obj3中；")]),t._v(" "),a("p",[t._v("好处：可以用这个扩展的变量直接调用另外两个的键值；")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("深拷贝：复制地址和数据")])]),t._v(" "),a("p",[t._v("原理：根据地址找到内容，并复制内容在堆中重新存储，返回新的地址；新的值修改的地址不影响旧的值；")]),t._v(" "),a("p",[t._v("例：var obj2 = $.extend(true,{},obj3);")]),t._v(" "),a("p",[t._v("默认是false(浅拷贝)；true深拷贝；如果不用true相当于声明了两个变量(加载慢)；如果用true就是拷贝；")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("obj4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ls")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//zs")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("浅拷贝(原生方法)：只复制地址，不复制数据；修改新变量的值，旧变量的值也一起修改了；")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj4"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj5"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("obj4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ls")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ls")]),t._v("\n")])])]),a("p",[t._v("原理：复制了obj4的地址，数据没有复制，所以修改了内容，obj4的地址也是那个内容，所以obj4就是obj5的内容；")]),t._v(" "),a("h2",{attrs:{id:"五、方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、方法"}},[t._v("#")]),t._v(" 五、方法")]),t._v(" "),a("p",[t._v('所有事件的调用：$("button").click(function(){});')]),t._v(" "),a("p",[t._v("直接去掉on；直接括号函数，")]),t._v(" "),a("p",[t._v(".index()；元素的下标；")]),t._v(" "),a("p",[t._v("jquery选项卡")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".box div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"active"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("siblings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("siblings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//链式调用，可以一直写点，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//隐式循环，不用循环，隐式调用循环；")]),t._v("\n")])])]),a("h2",{attrs:{id:"高频面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高频面试题"}},[t._v("#")]),t._v(" 高频面试题")]),t._v(" "),a("p",[t._v("● $(document).ready() 方法和 window.onload 有什么区别？")]),t._v(" "),a("p",[t._v("● jQuery 的属性拷贝 (extend) 的实现原理是什么，如何实现深拷贝？")])])}),[],!1,null,null,null);s.default=p.exports}}]);