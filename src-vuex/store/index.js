import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

// import state from './state'
// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'

import number from './number'

const store = new Vuex.Store({
    // state, // state中保存的就是store需要管理的全局的状态
    // mutations, //mutations中的方法可以更改state
    // actions, //actions可以进行异步操作
    // getters
    modules: {
        number
    }
})

export default store