(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{358:function(v,_,t){"use strict";t.r(_);var l=t(19),i=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"server-02-linux-简单操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-02-linux-简单操作"}},[v._v("#")]),v._v(" Server-02 linux 简单操作")]),v._v(" "),t("h2",{attrs:{id:"一、linux的注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、linux的注意事项"}},[v._v("#")]),v._v(" 一、linux的注意事项")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("linux严格区分大小写")])]),v._v(" "),t("li",[t("p",[v._v("linux中所有内容都以文件形式保存，包括硬件；")]),v._v(" "),t("p",[v._v("硬盘文件是：/dev/sd[a-p]")]),v._v(" "),t("p",[v._v("光盘文件是：/dev/sr0等")])]),v._v(" "),t("li",[t("p",[v._v("linux支持类型：")])])]),v._v(" "),t("p",[v._v("压缩包：.gz、.bz2. .tar.bz2. .tgz等")]),v._v(" "),t("p",[v._v("二进制软件包：.rpm")]),v._v(" "),t("p",[v._v("网页文件：.html、.php")]),v._v(" "),t("p",[v._v("脚本文件：.sh")]),v._v(" "),t("p",[v._v("配置文件：.conf")]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v("linux所有存储设备都必须挂载之后用户才能使用，包括硬盘、u盘和光盘")]),v._v(" "),t("li",[v._v("windows的应用程序不能直接在linux下运行；")])]),v._v(" "),t("h2",{attrs:{id:"二、各目录的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、各目录的作用"}},[v._v("#")]),v._v(" 二、各目录的作用")]),v._v(" "),t("ol",[t("li",[v._v("/bin/：存放系统命令的目录")]),v._v(" "),t("li",[v._v("/sbin/：系统环境设置相关的命令，只有超级用户能使用这些命令；")]),v._v(" "),t("li",[v._v("/usr/bin/：存放系统命令的目录；存放根文件系统不必要的系统管理命令；只有超级用户能使用；")]),v._v(" "),t("li",[v._v("/boot/：系统启动目录；")]),v._v(" "),t("li",[v._v("/dev/：设备文件保存位置")]),v._v(" "),t("li",[v._v("/etc/：配置文件保存位置；")]),v._v(" "),t("li",[v._v("/home/：普通用户的家目录；")]),v._v(" "),t("li",[v._v("/lib/：系统调用的函数库保存位置；")]),v._v(" "),t("li",[v._v("/lost+found/：系统出现意外的文件碎片存放位置；")]),v._v(" "),t("li",[v._v("/media/：挂载目录")]),v._v(" "),t("li",[v._v("/mnt/：挂载目录，建议挂载额外设备，比如u盘、光盘；")]),v._v(" "),t("li",[v._v("/misc/：挂载目录，建议用来挂载NFS服务的共享目录")]),v._v(" "),t("li",[v._v("/opt/：第三方安装的软件保存位置；")]),v._v(" "),t("li",[v._v("/proc/：虚拟文件系统，该目录的数据保存在内存当中；")]),v._v(" "),t("li",[v._v("/sys/：虚拟文件系统，主要是保存内核相关信息")]),v._v(" "),t("li",[v._v("/root/：超级用户的家目录；")]),v._v(" "),t("li",[v._v("/srv/：服务数据目录")]),v._v(" "),t("li",[v._v("/tmp/：临时目录，建议每次系统启动清空一下；")]),v._v(" "),t("li",[v._v("/usr/：系统软件资源目录，是（Unix Softwre Resource）;\n20、/var/：动态数据保存位置，主要是缓存、日志")])]),v._v(" "),t("h2",{attrs:{id:"三、服务器注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、服务器注意事项"}},[v._v("#")]),v._v(" 三、服务器注意事项")]),v._v(" "),t("ol",[t("li",[v._v("远程服务不允许关机，只能重启；")]),v._v(" "),t("li",[v._v("重启时应该关闭服务")]),v._v(" "),t("li",[v._v("不要在服务器访问高峰运行高负载命令；")]),v._v(" "),t("li",[v._v("远程配置防火墙时，不要把自己踢出服务器；")]),v._v(" "),t("li",[v._v("指定合理的密码规范并定期更新；")]),v._v(" "),t("li",[v._v("合理分配权限")]),v._v(" "),t("li",[v._v("定期备份重要数据和日志；")])]),v._v(" "),t("h2",{attrs:{id:"四、ls命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、ls命令"}},[v._v("#")]),v._v(" 四、ls命令")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("ls：显示目录文件（/bin/ls），选项[-ald] [文件或目录]")]),v._v(" "),t("p",[v._v("例：ls -a /home")])])]),v._v(" "),t("p",[v._v("-a 显示所有文件，包括隐藏文件")]),v._v(" "),t("p",[v._v("-l 详细信息显示")]),v._v(" "),t("p",[v._v("-d 查看目录属性；")]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("基本属性")])]),v._v(" "),t("p",[v._v("文件类型：（- 文件 d 目录 l 软链接文件）")]),v._v(" "),t("p",[v._v("u 所有者 g所属组 o其他人；")]),v._v(" "),t("p",[v._v("r 读 w 写 x执行；  x执行：可以执行文件或进入目录等；")]),v._v(" "),t("h2",{attrs:{id:"五、-文件操作命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、-文件操作命令"}},[v._v("#")]),v._v(" 五、 文件操作命令")]),v._v(" "),t("ol",[t("li",[v._v("命令格式：命令 [-选项] [参数]")])]),v._v(" "),t("p",[v._v("创建目录：mkdir (-p可以递归创建)")]),v._v(" "),t("p",[v._v("创建文件：touch")]),v._v(" "),t("p",[v._v("生成链接文件：ln -s [old][new]  -s生成软链接；")]),v._v(" "),t("p",[v._v("类似window快捷方式；软链接的文件权限都是rwxrwxrwx；")]),v._v(" "),t("p",[v._v("删除空目录：rmdir")]),v._v(" "),t("p",[v._v("删除文件：rm -rf 文件或目录   r强行删除，f强制执行；")]),v._v(" "),t("p",[v._v("shopt -s extglob执行之后可以执行：rm -rf !(排除的某个文件不被删除)")]),v._v(" "),t("p",[v._v("shopt -s ，查看extglob是否为on")]),v._v(" "),t("p",[v._v("复制：cp -rp [old][new]   r复制p保留文件属性；")]),v._v(" "),t("p",[v._v("剪切或重命名：mv [old][new]")]),v._v(" "),t("p",[v._v("查看命令：")]),v._v(" "),t("p",[v._v("cd 切换目录；")]),v._v(" "),t("p",[v._v("pwd 显示当前目录")]),v._v(" "),t("p",[v._v("ls 显示所有文件")]),v._v(" "),t("p",[v._v("ll 显示所以文件包含文件属性；")]),v._v(" "),t("p",[v._v("显示文件内容")]),v._v(" "),t("p",[v._v("cat 正序显示； -n显示行号；")]),v._v(" "),t("p",[v._v("tac 反向列示")]),v._v(" "),t("p",[v._v("more 分页显示（f或空格翻页，enter换行，q或Q退出）")]),v._v(" "),t("p",[v._v("less 分页显示，可以向上翻页；")]),v._v(" "),t("p",[v._v("head 显示文件前面几行；（在文件前面添加-n，指定行数）")]),v._v(" "),t("p",[v._v("tail 显示文件后面几行（-n，指定行数）")]),v._v(" "),t("h2",{attrs:{id:"六、权限管理命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、权限管理命令"}},[v._v("#")]),v._v(" 六、权限管理命令")]),v._v(" "),t("ol",[t("li",[v._v("chmod：改变文件或目录权限（/bin/chmod）")])]),v._v(" "),t("p",[v._v("chmod [{ugoa}{+-=}{rwx}] [文件或目录]")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v("[mode=421] [文件或目录]\n\n-R 递归修改；\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[v._v("权限的数字表示：r=4  w=2 x=1； 示例：rwxrw-r--   764")])]),v._v(" "),t("p",[v._v("示例：chmod g+w testfile    赋予testfile文件所属组添加写权限")]),v._v(" "),t("p",[v._v("chmod -R 777 testdir    修改testdir目录下所有文件具有全部权限；")]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("chown：改变文件或目录的所有者（/bin/chown）")])]),v._v(" "),t("p",[v._v("chown [用户] [文件或目录]")]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v("chgrp：改变文件或目录的所属组（/bin/chgrp）")])]),v._v(" "),t("p",[v._v("chgrp [用户组] [文件或目录]")]),v._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[v._v("umask：显示、设置文件的缺省权限（shell内置）")])]),v._v(" "),t("p",[v._v("umask [S]    -S以 rwx形式显示新建文件缺省权限")]),v._v(" "),t("h2",{attrs:{id:"七、搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、搜索"}},[v._v("#")]),v._v(" 七、搜索")]),v._v(" "),t("ol",[t("li",[t("code",[v._v("find")]),v._v("：文件搜索（/bin/find）")])]),v._v(" "),t("p",[v._v("find [搜索范围] [匹配条件]")]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("find /etc -name init")])]),v._v(" "),t("p",[v._v("在目录etc查找文件init    -iname可以不区分大小写")]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("find / -size +204800")])]),v._v(" "),t("p",[v._v("在根目录下查找大于100M的文件    +n 大于 -n 小于 n 等于")]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v("find /home -user shenchao")])]),v._v(" "),t("p",[v._v("在根目录下查找所有者为shencao的文件    -group根据所属组找")]),v._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[v._v("find /etc -cmin -5")])]),v._v(" "),t("p",[v._v("在etc下查找5分钟内被修改过属性的文件和目录")]),v._v(" "),t("p",[v._v("-amin 访问时间    -cmin 文件属性    -mmin 文件内容")]),v._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[v._v("find /etc -size +163840 -a -size -204800")])]),v._v(" "),t("p",[v._v("查找大于80MB小于100MB文件      -a 两个条件同时满足    -o满足一个")]),v._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[v._v("find /etc -name inittab -exec ls -l {} ;")])]),v._v(" "),t("p",[v._v("查找initab文件并显示其详细信息        -exec/-ok  命令    {} \\对搜索结果执行操作")]),v._v(" "),t("ol",{attrs:{start:"8"}},[t("li",[t("p",[v._v("-type 根据文件类型查找；  f文件 d目录 l软链接\n-inum 根据i节点查找；")])]),v._v(" "),t("li",[t("p",[v._v("locate：在文件资源库中查找（/usr/bin/locate）")])])]),v._v(" "),t("p",[v._v("locate 文件名")]),v._v(" "),t("ol",{attrs:{start:"12"}},[t("li",[v._v("grep：在文件中搜寻字串匹配的行并输出")])]),v._v(" "),t("p",[v._v("grep -iv [指定字串] [文件]     -i不区别大小写 -v排队指定字串")]),v._v(" "),t("h2",{attrs:{id:"八、帮助命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、帮助命令"}},[v._v("#")]),v._v(" 八、帮助命令")]),v._v(" "),t("ol",[t("li",[v._v("which 命令                        搜索命令所在目录及别名信息；")]),v._v(" "),t("li",[v._v("whereis [命令名称]            搜索命令所在目录及帮助文档路径；")]),v._v(" "),t("li",[v._v("man [命令或配置文件]        获得帮助信息；")]),v._v(" "),t("li",[v._v("help 命令                           获得内置shell命令的帮助信息；")])]),v._v(" "),t("p",[v._v("九、用户管理命令")]),v._v(" "),t("ol",[t("li",[v._v("useradd 用户名            添加新用户，root用户执行；")]),v._v(" "),t("li",[v._v("passwd 用户名             设置用户密码；")]),v._v(" "),t("li",[v._v("who                             查看登录用户信息；")]),v._v(" "),t("li",[v._v("w                                 查看登录用户详细信息；")])]),v._v(" "),t("h2",{attrs:{id:"十、压缩解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十、压缩解压"}},[v._v("#")]),v._v(" 十、压缩解压")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("gzip [文件]                                     压缩文件，压缩后格式.gz；")]),v._v(" "),t("p",[v._v("gunzip [压缩文件]                           解压压缩.gz的文件；")])]),v._v(" "),t("li",[t("p",[v._v("tar [-zcf] [压缩后文件名] [目录]       打包目录，格式.tar.gz")])])]),v._v(" "),t("ul",[t("li",[v._v("c  创建tar包")]),v._v(" "),t("li",[v._v("v  显示详细信息")]),v._v(" "),t("li",[v._v("f  指定文件名")]),v._v(" "),t("li",[v._v("z  通过gzip压缩或解压")]),v._v(" "),t("li",[v._v("t  不解压查看包内容")])]),v._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("#解压：x 解包，z解压缩，-f，-v；")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 压缩: ")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("tar")]),v._v(" -zcvf build.tar.gz ./build\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 解压:")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("tar")]),v._v(" -zxvf build.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 打包当前文件夹所有文件")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("tar")]),v._v(" -cvf build.tar *\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 查看当前包的内容")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("tar")]),v._v(" -tvf build.tar\n")])])]),t("p",[v._v("注意：添加了z，手动打开压缩包看到的只是一个文件，该文件需要再次解压，如果是直接输入zxvf命令解压则不用在意；")]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[v._v("zip [-r] [压缩后的文件名] [文件或目录]        压缩文件或目录，格式zip；\n-r 压缩目录；\n解压：unzip [压缩文件]")])]),v._v(" "),t("li",[t("p",[v._v("bzip2 [-k] [文件]                          压缩后格式.bz2；-k产生压缩文件后保留原文件；\n解压：bunzip2 [-k] [压缩文件]     -k解压缩后保留原文件；\ntar -xjf Japan.tar.bz2    j可以解压bzip2的文件；")])]),v._v(" "),t("li",[t("p",[v._v("解压rar文件")])])]),v._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[v._v("wget")]),v._v(" http://www.rarlab.com/rar/rarlinux-x64-5.3.0.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("tar")]),v._v(" -xf rarlinux-x64-5.3.0.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[v._v("cd")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("rar")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("make")]),v._v("\n")])])]),t("p",[v._v("解压: rar x 压缩文件\n解压: rar a 生成的压缩文件的名字 待压缩的文件或目录")]),v._v(" "),t("h2",{attrs:{id:"十一、网络命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十一、网络命令"}},[v._v("#")]),v._v(" 十一、网络命令")]),v._v(" "),t("ol",[t("li",[v._v("write  用户名          给用户发信息，以ctrl+d保存结束；")]),v._v(" "),t("li",[v._v("wall  [message]     发广播信息，给广播发信息；")]),v._v(" "),t("li",[v._v("ping [-c] ip地址     测试网络连通性，-c指定发送次数；")]),v._v(" "),t("li",[v._v("mail [用户名]         查看发送电子邮件")]),v._v(" "),t("li",[v._v("last                        列出目前与过去登入系统的用户信息；")]),v._v(" "),t("li",[v._v("lastlog                   检查某特定用户上次登录的时间")])]),v._v(" "),t("p",[v._v("lastlog -u 500；      通过uid查看指定用户的登录信息；")]),v._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[t("p",[v._v("traceroute 地址          显示数据包到主机间的路径；")])]),v._v(" "),t("li",[t("p",[v._v("netstat [选项]             显示网络相关信息；")]),v._v(" "),t("p",[v._v("-t TCP协议；-u UDP协议；-l 监听；-r 路由 -n 显示ip地址和端口号")]),v._v(" "),t("p",[v._v("示例：netstat -tlun 查看本地监听的端口")]),v._v(" "),t("p",[v._v("netstat -an   查看本机所有的网络连接；")]),v._v(" "),t("p",[v._v("netstat -rn   查看本机路由表；")])]),v._v(" "),t("li",[t("p",[v._v("setup        配置网络；")])]),v._v(" "),t("li",[t("p",[v._v("mount [-t文件系统] 设备文件名 挂载点")])])]),v._v(" "),t("p",[v._v("mount -t iso9660 /dev/sr0 /mnt/cdrom；")]),v._v(" "),t("h2",{attrs:{id:"十二、关机开机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十二、关机开机"}},[v._v("#")]),v._v(" 十二、关机开机")]),v._v(" "),t("h2",{attrs:{id:"十三、vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十三、vim"}},[v._v("#")]),v._v(" 十三、vim")]),v._v(" "),t("p",[v._v("vi为黑色，vim为红色")]),v._v(" "),t("ol",[t("li",[v._v("三种状态：")])]),v._v(" "),t("ul",[t("li",[t("p",[t("code",[v._v("Command")]),v._v("：任何输入都会作为编辑命令，而不会出现在屏幕上，任何输入都引起立即反映")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("Insert")]),v._v("：任何输入的数据都置于编辑寄存器，按ESC，可跳回command方式")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("Escape")]),v._v("：以':'或者'/'为前导的指令，出现在屏幕的最下一行，任何输入都被当成特别的指令")])])]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("离开命令")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("ZZ 保存当前文件并退出Vi")])]),v._v(" "),t("li",[t("p",[v._v(":q!     离开vi，并放弃刚在缓存区编辑的内容")])]),v._v(" "),t("li",[t("p",[v._v(":wq   将缓冲区内的资料写入磁盘中，并离开vi")])]),v._v(" "),t("li",[t("p",[v._v(":x    同:wq（:X是文件加密，需要区分一下）")])])]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("进入输入模式")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("a   光标之后输入")])]),v._v(" "),t("li",[t("p",[v._v("A  行末输入")])]),v._v(" "),t("li",[t("p",[v._v("i    光标之前输入")])]),v._v(" "),t("li",[t("p",[v._v("I   行首输入")])]),v._v(" "),t("li",[t("p",[v._v("o  向下新增一行")])]),v._v(" "),t("li",[t("p",[v._v("O 向上新增一行")])])]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v("删除、修改、撤销\n"),t("ul",[t("li",[v._v("x  删除光标下的字")]),v._v(" "),t("li",[v._v("X  删除光标之前的字")]),v._v(" "),t("li",[v._v("D 删除当前光标至行尾的内容")]),v._v(" "),t("li",[v._v("dd 删除整行")]),v._v(" "),t("li",[v._v("dgg 删除当前光标至文件头的内容")])])])]),v._v(" "),t("ul",[t("li",[v._v(":10,20d  删除第10行至20行的资料")]),v._v(" "),t("li",[v._v(":10d  删除第10行")]),v._v(" "),t("li",[v._v(":%d  删除整个编辑缓冲区")]),v._v(" "),t("li",[v._v("cc 修改整行的内容")]),v._v(" "),t("li",[v._v("r   修改当前光标的文字")]),v._v(" "),t("li",[v._v("R  进入修改模式直到ESC退出为止")]),v._v(" "),t("li",[v._v("u 恢复最后一个指令之前的结果")]),v._v(" "),t("li",[v._v("U 恢复光标该行的所有改变")]),v._v(" "),t("li",[v._v("ctrl+r  恢复撤消前的内容")])]),v._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[v._v("光标移动")])]),v._v(" "),t("ul",[t("li",[v._v("m"),t("code",[v._v("<a-z>")]),v._v(" 设置书签"),t("code",[v._v("<a-z>")])]),v._v(" "),t("li",[t("code",[v._v("<a-z>")]),v._v(" 移至书签"),t("code",[v._v("<a-z>")]),v._v("处")]),v._v(" "),t("li",[v._v("0 移至行首")]),v._v(" "),t("li",[v._v("$ 移至行末")]),v._v(" "),t("li",[v._v("e 移到下个字的最后一个字母")]),v._v(" "),t("li",[v._v("w 移动到下个字的第一个字母")]),v._v(" "),t("li",[v._v("b 移动到上个字的第一个字母")]),v._v(" "),t("li",[v._v("^ 移至该行的第一个字")]),v._v(" "),t("li",[v._v("H 移至视窗的第一行")]),v._v(" "),t("li",[v._v("M 移至视窗的中间那行")]),v._v(" "),t("li",[v._v("L 移至视察的最后一行")]),v._v(" "),t("li",[v._v("G  移至该文件的最后一行")]),v._v(" "),t("li",[t("ul",[t("li",[v._v("移至下一列的第一个字")])])]),v._v(" "),t("li",[t("ul",[t("li",[v._v("移至上一列的第一个字")])])]),v._v(" "),t("li",[v._v(":n  移至该文件的第n列")]),v._v(" "),t("li",[v._v("n+ 移至光标所在位置之后的第n列")]),v._v(" "),t("li",[v._v("n-  移至光标所在位置之前的第n列")]),v._v(" "),t("li",[t("code",[v._v("<ctrl><g>")]),v._v(" 显示该行之行号、文件名称、文件中最末行之行号、光标所在行号占总行号之百分比")])]),v._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[v._v("视窗的移动")])]),v._v(" "),t("ul",[t("li",[v._v("ctrl+f    视窗往下卷一页")]),v._v(" "),t("li",[v._v("ctrl+b   视窗往上卷一页")]),v._v(" "),t("li",[v._v("ctrl+d  视窗往下卷半页")]),v._v(" "),t("li",[v._v("ctrl+u  视窗往上卷半页")]),v._v(" "),t("li",[v._v("ctrl+e  视窗往下卷一行")]),v._v(" "),t("li",[v._v("ctrl+y  视窗往上卷一行")])]),v._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[v._v("选择、复制、剪切、删除")])]),v._v(" "),t("ul",[t("li",[v._v("v  从光标当前位置开始，经过的地方会被选中，再按v结束")]),v._v(" "),t("li",[v._v("V  从光标当前行开始，光标经过的行都会被选中，再按一下V结束")]),v._v(" "),t("li",[v._v("ctrl+v  从光标当前位置开始，选中光标起点和终点所构成的矩形区域，再按ctrl+v结束")]),v._v(" "),t("li",[v._v("ggVG  选中全部的文本，其中gg为跳到行首，V选中整行，G末尾")]),v._v(" "),t("li",[v._v("d  剪切")]),v._v(" "),t("li",[v._v("y  复制")]),v._v(" "),t("li",[v._v("p  粘贴")]),v._v(" "),t("li",[v._v("yy 复制光标当前行")])]),v._v(" "),t("ol",{attrs:{start:"8"}},[t("li",[v._v("查找与替换")])]),v._v(" "),t("ul",[t("li",[v._v("/字串   光标之后寻找")]),v._v(" "),t("li",[v._v("?字串   光标之前寻找")]),v._v(" "),t("li",[v._v("n   往下继续寻找下一个相同的字串")]),v._v(" "),t("li",[v._v("N  往上继续寻找下一个相同的字串")]),v._v(" "),t("li",[v._v("%  查找'(',')','{','}'的配对符")]),v._v(" "),t("li",[v._v("s  搜寻某行列范围")]),v._v(" "),t("li",[v._v("g  搜寻整个编辑缓冲区的资料")]),v._v(" "),t("li",[v._v(":1,$s/old/new/g    将文件中所有old改成new")]),v._v(" "),t("li",[v._v(":10,20s/%^/ /  将10行至20行资料的最前面插入5个空白")]),v._v(" "),t("li",[v._v("/字符串   后边输入查询内容可保存至缓冲区，可用箭头上下进行以往内容选择")]),v._v(" "),t("li",[v._v("将光标移动在选定单词下方按*，则可以选中此单词作为查询字符")])]),v._v(" "),t("ol",{attrs:{start:"9"}},[t("li",[v._v("环境的设定")])]),v._v(" "),t("ul",[t("li",[v._v(":set all  可设置的环境变量列表")]),v._v(" "),t("li",[v._v(":set   环境变量的当前值")]),v._v(" "),t("li",[v._v(":set nu   设定资料的行号。")]),v._v(" "),t("li",[v._v(":set nonu  取消行号设定。")]),v._v(" "),t("li",[v._v(":set ai   自动内缩。")]),v._v(" "),t("li",[v._v(":set noai   取消自动内缩。")])]),v._v(" "),t("p",[v._v("(vim)")]),v._v(" "),t("ul",[t("li",[v._v(":set ruler  会在屏幕右下角显示当前光标所处位置，并随光移动而改变，占用屏幕空间较小，使用也比较方便，推荐使用。")]),v._v(" "),t("li",[v._v(":set hlsearch 在使用查找功能时，会高亮显示所有匹配的内容。")]),v._v(" "),t("li",[v._v(":set nohlsearch  关闭此功能。")]),v._v(" "),t("li",[v._v(":set incsearch  使Vim在输入字符串的过程中，光标就可定位显示匹配点。")]),v._v(" "),t("li",[v._v(":set nowrapscan 关闭查找自动回环功能，即查找到文件结尾处，结束查找；默认状态是自动回环")])]),v._v(" "),t("h2",{attrs:{id:"十四、linux修改中文系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十四、linux修改中文系统"}},[v._v("#")]),v._v(" 十四、linux修改中文系统")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("locale -a查看是否有zh_CN.UTF-8，如果有则进行下一步，没有自行百度安装")])]),v._v(" "),t("li",[t("p",[v._v("使用vim打开locale.conf文件")])])]),v._v(" "),t("p",[v._v("vim /etc/locale.conf")]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("编辑文件后保存退出")])]),v._v(" "),t("p",[v._v('LANG="zh_CN.UTF-8" // en_US.UTF-8为英文')]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v("最后重启 reboot")])])])}),[],!1,null,null,null);_.default=i.exports}}]);