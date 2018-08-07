
import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import commons from './commons'
import cart from './cart'

const store = new Vuex.Store({
    modules: {
        commons,
        cart
    }
})

export default store