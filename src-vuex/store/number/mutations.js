
import {
    INCREMENT
} from './const'
const mutations = {
    //mutations里的方法能接收到state
    [INCREMENT] ( state, payload ) {
        state.number += payload.num;
    },
    reduce ( state ) {
        state.number --;
    }

}

export default mutations


