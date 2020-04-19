(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{319:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"微信防撤回"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#微信防撤回"}},[t._v("#")]),t._v(" 微信防撤回")]),t._v(" "),n("ol",[n("li",[t._v("下载："),n("a",{attrs:{href:"https://www.lanzous.com/iax19pi",target:"_blank",rel:"noopener noreferrer"}},[t._v("蓝奏云"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("手动修改WeChatWin.dll")]),t._v(" "),n("p",[t._v("Offsets: 16 进制")]),t._v(" "),n("p",[t._v("28FB79:        74 → EB")]),t._v(" "),n("p",[t._v("7EA8A5:        74 → EB")]),t._v(" "),n("h2",{attrs:{id:"印象云笔记转md"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#印象云笔记转md"}},[t._v("#")]),t._v(" 印象云笔记转md")]),t._v(" "),n("p",[t._v("安装："),n("code",[t._v("npm install enex-dump -g")])]),t._v(" "),n("p",[t._v("转换："),n("code",[t._v("enex-dump --src ./my-notes.enex")])]),t._v(" "),n("h2",{attrs:{id:"坚果云同步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#坚果云同步"}},[t._v("#")]),t._v(" 坚果云同步")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("路径：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\\Users\\hny\\AppData\\Roaming\\Nutstore\\db\n")])])])]),t._v(" "),n("li",[n("p",[t._v("创建"),n("code",[t._v("customExtRules.conf")]),t._v("文件，放进上面的路径里面，可以为其他的路径，重点为"),n("code",[t._v("Nutstore\\db")]),t._v("，里面如果包含以下三个文件应该就是该文件夹了：")]),t._v(" "),n("ul",[n("li",[t._v("event.db")]),t._v(" "),n("li",[t._v("ga.data")]),t._v(" "),n("li",[t._v("nustore.db")])]),t._v(" "),n("p",[t._v("内容写以下")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 坚果云自定义同步规则")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 详细使用说明: http://help.jianguoyun.com/?p=1825 ")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 示例:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略所有扩展名为 .bak 的文件, 删除下一行行首的 '#' 即可 (保留行首空格不影响配置文件)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# *.bak")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略 D:\\work\\test 文件夹, 删除下一行行首的 '#' 即可 (保留行首空格不影响配置文件)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# D:\\work\\test")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强制同步所有扩展名为 .lock 的文件, 删除下一行行首的 '#' 即可 (保留行首空格不影响配置文件)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# !*.lock")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果 .lock 文件已经包含在选择性同步的路径中，则此类型文件不会被同步")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果在配置文件中同时存在 *.lock 和 !*.lock，则此类型文件不会被同步")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置开始")]),t._v("\n*.bak\nE:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("note"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("node_modules "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁止同步具体路径文件夹")]),t._v("\n")])])]),n("p",[t._v("如果上面的内容不行，写下面的内容")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 坚果云自定义忽略同步规则")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 警告:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该文件用来自定义坚果云的忽略同步规则, 文件编码必须为 UTF-8.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于用户修改了自定义忽略规则导致坚果云无法正常工作的问题由用户自己负责.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 说明:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每行一条规则. 以 # 开头的行将被忽略.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每条规则必须以英文半角句号开头, 否则会忽略")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 无效的规则会被忽略, 并在坚果云日志文件中提示.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意事项:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略规则仅影响文件, 不影响文件夹")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略规则会且仅会在 *上传* 时生效")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每次修改需要重启客户端才能生效.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该规则文件不会自动同步到其他设备.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例子:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略所有扩展名为 *.bak 的文件, 规则为 .bak")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# disabled/blacklist/whitelist 三选一")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# disabled 禁用该功能")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# blacklist 黑名单模式, 列出的文件类型都不会被上传")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# whitelist 白名单模式, 只上传列出的文件类型")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("mode")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("blacklist\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 规则开始")]),t._v("\n.bak\nE:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("note"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("node_modules "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁止同步具体路径文件夹")]),t._v("\nE:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("note"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".vuepress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("dist\n")])])]),n("p",[t._v("修改完成需要重启坚果云")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);