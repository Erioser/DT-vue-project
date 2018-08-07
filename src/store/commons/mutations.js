import {
    CHANGE_USER_STATE,
    CHANGE_USER_INFO,
    CHANGE_CATEGORY_LIST,
    CHANGE_DETAIL_COMMON_INFO
} from './const'
const mutations = {
    [CHANGE_USER_STATE] (state, payload) {
        state.user_state = payload.user_state
        console.log(state.user_state)
    },
    [CHANGE_USER_INFO] (state, payload) {
        state.user_info = payload.user_info
    },
    [CHANGE_CATEGORY_LIST] (state, payload) {
        state.category_list = payload.category_list
    },
    [CHANGE_DETAIL_COMMON_INFO] (state, {fhtz, gmxz}) {
        state.detail_common_info = { fhtz, gmxz }
    }
}

export default mutations