(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{433:function(e,s,t){"use strict";t.r(s);var a=t(19),v=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"node-05-开放静态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-05-开放静态"}},[e._v("#")]),e._v(" node-05 开放静态")]),e._v(" "),t("h2",{attrs:{id:"一、扩展node的路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、扩展node的路由"}},[e._v("#")]),e._v(" 一、扩展node的路由")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("res.statusCode = 200，    设置状态码")])]),e._v(" "),t("li",[t("p",[e._v("res.statusMessage = 'ok'；  设置状态描述")])]),e._v(" "),t("li",[t("p",[e._v("res.setHeader('content-type','text/html')；")]),e._v(" "),t("p",[e._v("告诉浏览器接收的内容是什么类型的；")]),e._v(" "),t("p",[e._v("还可以设置响应里面的内容；")]),e._v(" "),t("p",[e._v("text/plain  纯文本；")])])]),e._v(" "),t("p",[e._v("上面三种都是res.writeHead的分开写法；")]),e._v(" "),t("h2",{attrs:{id:"二、扩展express的路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、扩展express的路由"}},[e._v("#")]),e._v(" 二、扩展express的路由")]),e._v(" "),t("ol",[t("li",[e._v("res.json()；输出json对象；")]),e._v(" "),t("li",[e._v("res.send(JSON.stringify())；输入json字符串；")]),e._v(" "),t("li",[e._v("res.set()；设置浏览器文件类型；")]),e._v(" "),t("li",[e._v("res.status()；设置状态码；可以直接链式调用send；")])]),e._v(" "),t("h2",{attrs:{id:"三、静态资源托管"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、静态资源托管"}},[e._v("#")]),e._v(" 三、静态资源托管")]),e._v(" "),t("ol",[t("li",[e._v("app.use([path],express.static(path))；")])]),e._v(" "),t("p",[e._v("第二个写要开放的目录，建议写绝对路径，可以自动查询index.html；")]),e._v(" "),t("p",[e._v("第一个可选，可以写一个路由，访问后面的目录需要带上这个路由；")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("app.use((req,res)=>{})；        等同于app.all('*')；")])]),e._v(" "),t("h2",{attrs:{id:"四、图书管项目技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、图书管项目技巧"}},[e._v("#")]),e._v(" 四、图书管项目技巧")]),e._v(" "),t("ol",[t("li",[e._v("向后台传参，可以通过点击按钮，加一个函数，调用这个函数，函数里面调用ajax；")]),e._v(" "),t("li",[e._v("可以使用fileter调用里面的数据，过滤掉其他的；")]),e._v(" "),t("li",[e._v("json文件写入需要通过json.stringify()之后写入；")]),e._v(" "),t("li",[e._v("两个相同的路由（一个访问页面，一个调接口），可以再调接口那个传入一个参数，判断是否是传入参数的这个路由，实现两个页面；")]),e._v(" "),t("li",[e._v("后端思想，需要先显示，后修改；\n显示：")])]),e._v(" "),t("p",[e._v("（1）在点击第一个页面时，将id通过查询字符串的方式传入到后台去（后台的接收地址需要写path路径来接收）；")]),e._v(" "),t("p",[e._v("（2）先将页面用.toString()读取出来，之后再用replace替换掉value值；或使用ejs模板；")]),e._v(" "),t("p",[e._v("（3）res.send输入到替换掉后的html内容；模板使用res.render()；\n6. 对于input页面不需要让用户看见或者填写的参数，使用type='hidden'，写入到value里面，这样提交到后台也能看见；\n7. 前端调用ajax的时候，可以返回一个对象，对象里面填写flag用于判断；\n8. 判断session-id是否存在，可以让sessionid为undefined的时候等于空，就好判断了，就可以给sessionid置空了；")]),e._v(" "),t("ol",{attrs:{start:"9"}},[t("li",[e._v("http是无状态的（点击跳转没有记忆能力）；")]),e._v(" "),t("li",[e._v("出错时，可以查看页面返回的响应是什么，f12--Network--点击clear按钮(一个斜杠)；之后点击出错的地方，就可以直接在network查看返回的是什么了；")])]),e._v(" "),t("h2",{attrs:{id:"五、restful-api："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、restful-api："}},[e._v("#")]),e._v(" 五、RESTful API：")]),e._v(" "),t("p",[e._v("1)、传统设计路由的形式:\n形容词+名词")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("get  /addbook\n\nget  /book\n\nget  /doaddbook\n\nget  /dodelbook\n\nget  /doupdatebook\n\nRESTful: 这个东西就是去描述 路由应该如何设计\n")])])]),t("p",[e._v("2)、RESTful这个标准 把一些路由当中的形容词给去了。用 method请求方法表示")]),e._v(" "),t("p",[e._v("GET：读取（Read）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("  get  /book/get\n")])])]),t("p",[e._v("POST：新建（Create）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("  post /book/post\n")])])]),t("p",[e._v("PUT：更新（Update）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("  put  /book/put\n")])])]),t("p",[e._v("PATCH：更新（Update），通常是部分更新")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("  patch /book\n")])])]),t("p",[e._v("DELETE：删除（Delete）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("  delete /book\n\n         /book?id=1\n\n         /book/1  \n")])])]),t("h2",{attrs:{id:"六、中间件：每一个中间都有自己的一些含义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、中间件：每一个中间都有自己的一些含义"}},[e._v("#")]),e._v(" 六、中间件：每一个中间都有自己的一些含义")]),e._v(" "),t("p",[e._v("在express所有的回调函数，都可以称为中间件，中间件可以理解为工厂当中的车间。")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("内置中间件")])]),e._v(" "),t("li",[t("p",[e._v("第三方的")])]),e._v(" "),t("li",[t("p",[e._v("自定义中间件")]),e._v(" "),t("p",[e._v("其实我们定义的路由都可是中间件")]),e._v(" "),t("p",[e._v("app.get('/book')  app.post('/user')... 都是中间件")])]),e._v(" "),t("li",[t("p",[e._v("使用中间件特定的语法")]),e._v(" "),t("p",[e._v("app.use( 中间件【函数】 )")]),e._v(" "),t("p",[e._v("使用中间件和定义路由很相像，只要匹配成功并且send了，就不会再往下匹配。")])])]),e._v(" "),t("h2",{attrs:{id:"五、图书管理系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、图书管理系统"}},[e._v("#")]),e._v(" 五、图书管理系统")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("图书管理系统有哪些功能：")]),e._v(" "),t("p",[e._v("1)关于图书的增、删、改、查")]),e._v(" "),t("p",[e._v("2)关于用户的增、删、改、查")])]),e._v(" "),t("li",[t("p",[e._v("关于图书管理系统的静态页面：")]),e._v(" "),t("p",[e._v("这些静态页面由前端已经写完了")])]),e._v(" "),t("li",[t("p",[e._v("使用express开发图书管理系统时的步骤")]),e._v(" "),t("p",[e._v("1)、有图书管理系统静态页面")]),e._v(" "),t("p",[e._v("2)、安装node、express环境")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("注意：要使用npm init 生成package.json这个文件\n")])])]),t("p",[e._v("3)、规划项目目录结构：")]),e._v(" "),t("p",[e._v("项目名称：books")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("         |---静态资源: static\n\n         |-----------------css\n\n         |-----------------js\n\n         |-----------------images\n\n         |---路由模块：routers\n\n         |---模板文件(html)：views\n\n         |---数据目录(.json文件)： data\n\n         |---入口文件：app.js\n")])])])])]),e._v(" "),t("p",[e._v("4)、设计路由：")])])}),[],!1,null,null,null);s.default=v.exports}}]);