import {
    CHANGE_CART_GOODS
} from './const'
const mutations = {
   [CHANGE_CART_GOODS] (state, payload) {
       state.goods = payload.goods
   }
}

export default mutations