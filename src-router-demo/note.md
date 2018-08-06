

## Vue-Router

vue中提供了vue-router路由工具，我们可以利用这个工具来实现单页面应用开发

vue-router的原理：

vue-router会去监听浏览器地址栏的变化，当地址栏变化之后，进行对应组件的切换

下载vue-router  ： npm install vue-router --save

使用步骤：

1. 创建路由实例

    里面配置路由表、路由模式等等

2. 将路由实例注入到 根实例中

3. 配置路由出口，其实就是利用router-view指定路由在哪里切换

4. 路由模式
   
配置好路由之后，发现浏览器地址中出现了hash值，并且当hash值变化的时候vue-router会去根据路由表来切换组件

    vue-router路由的模式有两种 ，一种是hash模式，默认
    一直是history模式

    在路由配置中，利用mode参数来切换模式，当我们切换为history模式，路径不会变成正常路径，利用h5的history api进行的跳转切换，但是如果我们直接访问某一个路径的话http://www.baidu.com/mine，web后端就会以为我们在请求这个接口，后端没有这个接口就会返回404之类的东西，所以如果需要使用history模式的话需要让后端进行配置去忽略我们这几种请求情况

    http://www.baidu.com/
    http://www.baidu.com/mine
    http://www.baidu.com/concat

    而上面这几种请求都只是前端自己在做路由切换，让后端去忽略这几类请求


5. 使用router-link设置路由跳转的锚点标签，需要一个to属性，to属性可以直接设置要跳转的path，

    router-link被渲染之后是一个a标签，但是使用的跳转方式已经是history api的跳转了

    如果需要给组件内部的最外层的根元素添加事件的时候，可以通过给组件添加事件.native来解决
     @click.native = "activeName = nav.name"


     $route上有很多关于路由的属性，比如当前路由的path、name、params，而且当路由改变的时候，$route的属性也会跟着改变


     router-link上的active-class可以指定在路由切换的时候切换哪个类名

     默认情况下，router-link匹配路由的时候采用的不是严格模式，例如：
     现在path为  /a/b, 这个时候 /a/b 可以匹配成功，但是/a也能匹配成功，/也能匹配成功


     有的时候跳转不准备使用router-link，就需要使用编程式导航，也就是使用router实例上的push、replace、go等方法进行跳转，在组件中直接this.$router...

     二级路由在一级路由里写children，路由出口依然为router-view

     path为''则为默认路由

     路由传参：

     路由的参数分为两种，一种是路径参数，需要先在路由表中配置，而且必须传

        /detail/:id，接收参数的时候利用this.$route来接收

    第二种参数为search参数，不需要配置也不一定非得传，依靠的是querystring字符串



//还有一个是路由钩子（路由守卫）
