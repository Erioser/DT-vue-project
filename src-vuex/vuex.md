### vuex 状态管理工具

当项目较为庞大，组件结构较复杂的时候，多组件的状态共享会比较麻烦，而且如果只使用普通的组件通信方法根本无法做到高效的维护，所以vue给我们提供了一个 状态管理工具vuex，来帮助我们实现这样的功能

采用集中式存储管理应用的所有需要多组件共享的状态


在使用vuex的时候，其实核心的功能都是通过store来实现的，所以我们应该先去搞一个store

1. store中又可以分为多个小的部分：

state，getters，actions，mutations

state负责保存状态

在组件中使用状态的时候，可以通过this.$store.state来使用，但是有的时候，我们希望自己定义一条数据来接收store中的状态的话，为了实现响应式，要使用computed, 而且也可以使用mapState辅助函数

2. 将store传入到根实例中

这样组件中就可以使用this.$store来调用store的api了

3. 想要更改状态只有一种办法，就是通过mutations的方法，利用mapMutations可以帮助我们在组件的methods中设置调用mutations方法的方法

    调用mutations的时候，希望我们在commit里传入一个对象

4. 如果组件产生用户操作后需要发送一个异步的请求，需要让组件去调用actions的方法，actions中进行异步操作后再去调用mutations来更改状态

    在组件中利用this.$store.dispatch方法来调用actions的方法，执行完以后操作后，actions的方法会接收到一个context参数，它身上有commit方法，直接用这个commit方法调用mutations的方法

    也可以使用mapMutations来给组件身上挂载一些actions的方法

5. getters

    根据一条现有状态，派生出一条新状态

    我们现在已经有一条状态，比如，购物车数据，但是我们现在还需要一条新的状态，总数量和总价钱，总数这个状态，其实就根据购物车状态派生出来的

5. modules

    vuex中store只能有一个，但是为了开发方便，允许我们在vuex中配置模块，每一个模块中都有自己独立的state、getters、mutations、actions，然后再合并到一起，但是需要注意的是，各个模块的state不会合并，而是按照模块去存放数据





### 整理

vuex是一个状态管理工具，解决多组件间的状态共享

vuex里面有一个核心的大store，而且一个项目里只能有一个store，唯一数据源

vuex 中store需要配置几种小玩意儿：

1. state，是一个纯对象，存储需要管理的状态

组件如何使用state中管理的状态？

因为已经将store注入到根实例里，所以在组件可以利用this.$store.state来使用state中管理的状态

为了做到响应式（state中数据改变，组件中使用的也改变），vuex要求我们使用计算属性来接收state中的数据

computed: {
    number () { return this.$store.state.number }
}

也可以使用mapState辅助函数来帮助组件使用state中的状态

computed: mapState(['number'])
computed: mapState({
    number: state => state.number,
    number: 'number'
})

computed: {
    //...自己的计算属性
    ...mapState(['number'])
}

2. mutations, 更改state只有唯一的一种方式！！！！就是利用mutations的方法来进行更改

    mutations也是一个纯纯的对象，身上有一些方法，这些方法能接收到state，并且进行更改

    mutations = {
        increment (state) {
            state.number ++;
        }
    }

    当mutations的方法被调用的时候，状态就会更新

    在组件中视图store中的commit方法来调用

    this.$store.commit('increment')

    传参数的时候推荐我们传入一个对象（payload）
    mutations = {
        increment (state, payload) {
            state.number += payload.num ;
        }
    }

    this.$store.commit('increment', { num: 2 })

    调用的方式还有一种，就是直接搞一个对象进来

    this.$store.commit({ type: 'increment', num: 2 }) //这种最棒棒！

    最好把方法的名字搞成常量

    const INCREMENT = 'INCREMENT'

    mutations = {
        [INCREMENT] (state, payload) {
            state.number += payload.num ;
        }
    }
    this.$store.commit({ type: INCREMENT, num: 2 })


    在组件中调用mutations的时候其实还可以用mapMutations辅助函数来帮我们将mutations'中的方法放入到组件的methods中

    methods: mapMutations([INCREMENT])//其他的用法不写啦，和mapState基本一样

3. actions， 注意！mutations里面不能放入异步操作，所以异步操作需要放在actions

    actions是一个纯纯的对象，里面放了很多的方法，这些方法会接收到一个context的对象，这个对象上有commit方法，我们就可以在做完异步操作后，调用commit方法来调用mutations的方法更改状态

    actions = {
        asyncIncrement (context, payload) {
            axios.get('/random').then(res => {
                let num = res.data.num
                //准备调用mutations的INCREMENT方法来更改状态
                context.commit({
                    type: INCREMENT,
                    num
                })
            })
        }
    }

    在组件中调用actions的方法需要使用store的dispatch

    this.$store.dispatch('asyncIncrement',{n:1})

    也可以使用mapActions将actions的方法放入组件中

4. getters， 有的时候需要根据一条现有的状态派生新状态，比如，根据 当前用户的购物车里的商品数据，需要得到用户购物车的总价钱，我们就可以利用getters来派生数据

    getters = {
        doubleNumber (state) {
            return state.number * 2
        }
    }

    在组件中通过this.$store.getters来使用getters的数据，也可以使用mapGetters辅助函数

    这样的话当state中的状态改变，派生出来的getters也会改变

5. modules

    做项目的时候，可能要同时管理A,B,C这三个状态，因为开发者不一样，就会在一个state上保存可能毫不相关的多个状态，容易引起冲突等，因为store只能有一个，VUEX就做了模块的处理，也就是说，可以将某一种状态管理所需要的state，getters，actions，mutations写在一个模块中，然后在创建store的时候进行配置

    这样的话开发的时候可以在各自的模块中进行管理，store就会对模块中的数据进行合并，但是state的数据依然是分开模块的，例如，我们现在有a，b两个模块，他们中都有number数据，我们使用的时候就是这样的：

    this.$store.state.a.number
    this.$store.state.b.number
