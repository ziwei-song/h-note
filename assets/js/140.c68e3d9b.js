(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{450:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress搭建个人博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress搭建个人博客"}},[s._v("#")]),s._v(" VuePress搭建个人博客")]),s._v(" "),a("h2",{attrs:{id:"全局安装vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局安装vuepress"}},[s._v("#")]),s._v(" 全局安装vuepress")]),s._v(" "),a("p",[a("code",[s._v("yarn global add vuepress")])]),s._v(" "),a("h2",{attrs:{id:"创建vuepress目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建vuepress目录"}},[s._v("#")]),s._v(" 创建vuepress目录")]),s._v(" "),a("p",[a("code",[s._v(".vuepress")]),s._v("可以使用cmd来创建，"),a("code",[s._v("mkdir docs\\.vuepress")]),s._v("， 记得docs也带上；")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docs\n    .vuepress\n        dist\n        public\n        config.js\n    blog\n    README.md\npackage.json\n")])])]),a("p",[a("strong",[s._v("docs")]),s._v("  是项目根目录，")]),s._v(" "),a("p",[a("strong",[s._v("package.json")]),s._v(" 是用来一键操作代码的；")]),s._v(" "),a("p",[a("strong",[s._v("public")]),s._v("     图片放置文件夹，直接使用/logo.png就可以了；")]),s._v(" "),a("p",[a("strong",[s._v("config.js")]),s._v("   整个项目的核心，所以配置导航栏和侧边栏都在该文件；")]),s._v(" "),a("p",[a("strong",[s._v("blog")]),s._v("  自定义的文件夹；")]),s._v(" "),a("p",[a("strong",[s._v("dist")]),s._v("  打包之后的文件夹")]),s._v(" "),a("h2",{attrs:{id:"配置package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置package-json"}},[s._v("#")]),s._v(" 配置package.json")]),s._v(" "),a("p",[s._v("在package.json里面添加scripts一键操作代码，之后可以直接使用")]),s._v(" "),a("p",[a("code",[s._v("npm run docs:dev")]),s._v("    来运行开发环境")]),s._v(" "),a("p",[a("code",[s._v("npm run docs:build")]),s._v("： 打包 用来上传的;")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"配置默认主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置默认主题"}},[s._v("#")]),s._v(" 配置默认主题")]),s._v(" "),a("p",[s._v("在docs下的README.md填写以下的内容，默认排版格式的首页；")]),s._v(" "),a("p",[s._v("heroImage为首页的图片，需要自选下载，放置public文件夹；")]),s._v(" "),a("p",[s._v("注意：复制下面的代码最好使用notepad++，或者其他软件打开，不要使用typora打开，会出错；")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("home")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("heroImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /logo.png\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("heroText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 前端学习圈\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("actionText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 快速上手 →\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("actionLink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /blog/type.md\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("features")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 简洁至上\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("details")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Vue驱动\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("details")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 高性能\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("details")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" MIT Licensed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" Copyright © 2018"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("present Evan You\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://notecdn.heny.vip/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-01.png",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"创建新页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建新页面"}},[s._v("#")]),s._v(" 创建新页面")]),s._v(" "),a("p",[s._v("在docs下面，一个文件夹就相当于一个页面，可以在docs文件夹下创建新文件夹，作为一个页面，blog文件夹可以删除，自己另外创建其他页面；")]),s._v(" "),a("p",[s._v("在blog文件夹下创建md文件，开始写博客；")]),s._v(" "),a("h2",{attrs:{id:"配置config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置config-js"}},[s._v("#")]),s._v(" 配置config.js")]),s._v(" "),a("p",[s._v("位置：docs/.vuepress/config.js")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'前端学习圈'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    description"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'描述内容'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'shortcut icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"image/x-icon"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("./favicon.ico")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'项目仓库地址'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        repoLabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'仓库地址标题'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        nav"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/blog/js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        sidebarDepth"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//仅支持h2和h3标题,h1作为显示的标题;")]),s._v("\n        sidebar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/blog'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'分组标题'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                collapsable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 去掉向下箭头")]),s._v("\n                children"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'day01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'day02'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//children里面取一级标题作为显示名称,一个页面只能有一个一级标题,并且必须在第一行;")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// sidebar的结束符;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://notecdn.heny.vip/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-02.png",alt:"image"}})]),s._v(" "),a("p",[s._v("head是用来放图标的，放到public文件夹，nav是顶部导航，sliderbar是侧边栏，是blog文件夹的侧边栏，js为blog文件夹下的一个js.md文件；")]),s._v(" "),a("p",[s._v("路径：以'/'结尾的路径会被默认查找*/README.md")]),s._v(" "),a("p",[s._v("搜索：仅支持二级和三级标题的搜索，填写文章时，注意不要使用h2和h3以外的标题，不会出现在侧边栏上；")]),s._v(" "),a("h2",{attrs:{id:"常用的几个yaml语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用的几个yaml语法"}},[s._v("#")]),s._v(" 常用的几个YAML语法")]),s._v(" "),a("p",[s._v("以下的内容都是给某个md文件设置的选项；")]),s._v(" "),a("p",[s._v("自动生成侧边栏，仅仅包含当前页面标题的链接侧边栏，不会有其他侧边栏存在")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sidebar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动生成侧边栏;  ")]),s._v("\n    如果在config配置"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("auto需要带引号：sidebar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'auto'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sidebar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false  ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用侧边栏;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("navbar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false   ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用导航栏;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("layout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" custom "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改用其他组件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n")])])]),a("p",[s._v("以上是普通配置，更多配置请查看官方文档；")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"侧边栏增强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#侧边栏增强"}},[s._v("#")]),s._v(" 侧边栏增强")]),s._v(" "),a("p",[s._v("1、侧边栏分组，针对所有页面都使用该侧边栏")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("sidebar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'group1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("collapsable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("children"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'group1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("2、多个侧边栏，不同页面不同侧边栏")]),s._v(" "),a("p",[s._v("使用带目录的，添加链接时不需要带文件夹的路径；")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("sidebar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/bar/'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'one'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'two'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'自定义标题名称;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//里面也可以填写分组;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/foo/'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("若没有指定标题名称，则标题使用一级标题的名称；")]),s._v(" "),a("h2",{attrs:{id:"分组导航栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组导航栏"}},[s._v("#")]),s._v(" 分组导航栏")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("nav"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'编程语言'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    items"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'java'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以在items继续套分组;")]),s._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://notecdn.heny.vip/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-03.png",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"新增markedown用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增markedown用法"}},[s._v("#")]),s._v(" 新增markedown用法")]),s._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[s._v("::: tip\nThis is a tip\n:::\n\n::: warning\nThis is a warning\n:::\n\n::: danger\nThis is a dangerous warning\n:::\n\n::: danger STOP    //stop自定义的标题,\nDanger zone, do not proceed\n:::\n")])])]),a("p",[a("img",{attrs:{src:"http://notecdn.heny.vip/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-04.png",alt:"image"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"http://notecdn.heny.vip/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-05.png",alt:"image"}})]),s._v(" "),a("p",[s._v("代码块中的行高亮")]),s._v(" "),a("div",{staticClass:"language-markdow extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("​``` js{4}  //第四行高亮\n")])])]),a("h2",{attrs:{id:"vuepress中注册组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress中注册组件"}},[s._v("#")]),s._v(" vuepress中注册组件")]),s._v(" "),a("p",[s._v("在.vuepress下面创建一个enhanceApp.js文件，该文件相当于main.js，是入口文件，里面可以下载Element,Mini组件等等；")]),s._v(" "),a("p",[s._v("element组件可以直接在docs根目录下进行安装；")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/enhanceApp.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全局注册 Element 组件库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Element "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'element-ui'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'element-ui/lib/theme-chalk/index.css'")]),s._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Vue\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h2",{attrs:{id:"vuepress使用vue文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress使用vue文件"}},[s._v("#")]),s._v(" vuepress使用vue文件")]),s._v(" "),a("p",[s._v("1、第一种方式：")]),s._v(" "),a("p",[s._v("在.vuepress文件夹下创建一个components文件夹，里面的.vue文件会被注册成全局的组件，可以直接在md文件当引入,以文件名字为组件名；")]),s._v(" "),a("p",[s._v("注意目录路径；")]),s._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[s._v("// docs/.vuepres/components/hello.vue\n// docs/blog/test.md\nthis is "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("hello")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("   // 会自动将hello.vue的可显示内容显示到页面上;\n")])])]),a("p",[s._v("2、第二种方式：")]),s._v(" "),a("p",[s._v("不包含头部，直接是一个单文件；")]),s._v(" "),a("p",[s._v("创建文件夹，并创建README.md文件")]),s._v(" "),a("p",[s._v("写入以下代码：")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("layout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" custom //填写components文件夹下的文件名字\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n")])])]),a("h2",{attrs:{id:"使用element组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用element组件"}},[s._v("#")]),s._v(" 使用element组件")]),s._v(" "),a("blockquote",[a("p",[s._v("需要完成注册Element组件库")])]),s._v(" "),a("p",[s._v("在根目录docs下，任意一个目录创建一个.md文件，里面直接填写vue的代码，")]),s._v(" "),a("p",[s._v("可以直接使用element的组件，也可以直接使用component下的全局组件；")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://notecdn.heny.vip/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-06.png",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"部署github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署github"}},[s._v("#")]),s._v(" 部署github")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("在github新建一个项目，不要初始化仓库，")])]),s._v(" "),a("li",[a("p",[s._v("打开git bash工具，")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin 地址  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进行连接;")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("修改base，找到.vuepress/config.js")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("base"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/<name>/'")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//将创建的项目名称填入,双斜杠不能删除;")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("下载gh-pages包")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gh-pages\n")])])])]),s._v(" "),a("li",[a("p",[s._v("在package.json文件添加脚本命令")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gh-pages -d ./docs/.vuepress/dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run docs:build && gh-pages -d ./docs/.vuepress/dist"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("运行："),a("code",[s._v("npm run deploy:build")])])]),s._v(" "),a("li",[a("p",[s._v("打开你的github地址，"),a("code",[s._v("https://<name>/github.io/<repo>")])])])]),s._v(" "),a("h2",{attrs:{id:"转发域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转发域名"}},[s._v("#")]),s._v(" 转发域名")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://notecdn.heny.vip/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-08.png",alt:"image"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"http://notecdn.heny.vip/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-09.png",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"遇到的问题总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题总结"}},[s._v("#")]),s._v(" 遇到的问题总结")]),s._v(" "),a("p",[s._v("不显示侧边栏的情况：检查文件夹或者目录名是否有正确")])])}),[],!1,null,null,null);t.default=e.exports}}]);