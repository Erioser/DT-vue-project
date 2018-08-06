
import axios from 'axios'
import { INCREMENT } from './const'
const actions = {
    asyncIncrement ( context ) {
        setTimeout(() => {
            let num = Math.ceil(Math.random()*10)

            //调用mutations的方法去进行更改
            // context.commit('increment', {
            //     num
            // })
            context.commit({
                type: INCREMENT,//指定调用哪个方法
                num // payload里面的参数
            })

        },1000)
    }
}

export default actions