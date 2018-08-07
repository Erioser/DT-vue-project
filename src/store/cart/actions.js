
import axios from 'axios'
import {
    CHANGE_CART_GOODS
} from './const'
const actions  = {
    
    action_add_good_in_cart (context, params) {
        //在这里应该去发送ajax请求,在这里模拟后端和数据库
        //调用后端接口，成功之后，后端返回这个用户操作之后的购物车数据
        backend.add_good_in_cart(params).then(res => {
            let goods = res.data.goods
            //将最新的购物车数据同步到state里
            context.commit({
                type: CHANGE_CART_GOODS,
                goods
            })
        })

    },
    action_get_user_cart (context) { //获取到购物车的数据
        backend.get_user_cart().then(res => {
            let goods = res.data.goods
            context.commit({
                type: CHANGE_CART_GOODS,
                goods
            })
        })
    },
    action_reduce_good_from_cart (context, params) {//从购物车减去商品
        backend.reduce_good_in_cart(params).then(res => {
            let goods = res.data.goods
            //将最新的购物车数据同步到state里
            context.commit({
                type: CHANGE_CART_GOODS,
                goods
            })
        })
    }

}

//模拟后端，数据库用webStorage来模拟
const backend = {
    get_goods_in_cart () { // 获取购物车
        return JSON.parse( localStorage.goods ? localStorage.goods : '[]' )
    },
    get_user_cart () {
        let back = this
        return new Promise(function (resolve) {
            setTimeout(() => {
                let goods = back.get_goods_in_cart()
                //返回给前端
                resolve({
                    code: 200,
                    data: {
                        goods
                    }
                })
            }, 500)
        })
    },
    add_good_in_cart ({ good_id, name, price, num = 1 }) {//加入购物车
        let back = this
        return new Promise(function (resolve, rejected) {
            setTimeout(() => {//假设这是一个网络请求
                let goods = back.get_goods_in_cart()//获取到数据库里的购物车数据

                //判断是否有这个商品，有的话更改数量
                let isHas = goods.some(good => {
                    if ( good.good_id === good_id ) {
                        good.num += num;
                        return true
                    }
                    return false
                });
                //如果没有这个商品就添加这个商品
                if ( !isHas ) {
                    goods.push({
                        good_id, name, price, num
                    })
                }

                //同步到数据库里
                localStorage.goods = JSON.stringify(goods)
                //返回给前端
                resolve({
                    code: 200,
                    data: {
                        goods
                    }
                })
            }, 500)
        })
    },
    reduce_good_in_cart ({ good_id }) {//加入购物车
        let back = this
        return new Promise(function (resolve, rejected) {
            setTimeout(() => {//假设这是一个网络请求
                let goods = back.get_goods_in_cart()//获取到数据库里的购物车数据
                for (let i = 0; i < goods.length; i++) {
                    const good = goods[i];
                    if ( good.good_id === good_id ) {
                        good.num --;
                        if ( good.num <= 0 ) {
                            goods.splice(i,1)
                        }
                        break;
                    }
                }

                //同步到数据库里
                localStorage.goods = JSON.stringify(goods)
                //返回给前端
                resolve({
                    code: 200,
                    data: {
                        goods
                    }
                })
            }, 500)
        })
    }
}


export default actions