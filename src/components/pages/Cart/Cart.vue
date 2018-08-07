

<template>
    <div class="app-cart page-top">
        <p v-if = "!commons.user_state"> 请 <router-link :to="{name: 'login'}">登录</router-link>后查看 </p>
        <div v-else>
            <p v-if = "!cart.goods.length">购物车空空如也，快去 <router-link :to = "{name: 'classify'}">挑选</router-link> 想要的商品的</p>
            <div v-else>

                <ul>
                    <li v-for = "good in cart.goods" :key = "good.good_id">
                        <div>
                            <p>{{good.name}}</p>
                            <p>{{good.price}}</p>
                        </div>
                        <p>
                            <button @click="reduce(good.good_id)">-</button>
                            <span>{{good.num}}</span>
                            <button @click = "add(good.good_id)">+</button>
                        </p>
                    </li>
                </ul>

                <p>总价钱： {{all_num_and_price.all_price}};总数量: {{all_num_and_price.all_num}}</p>
                
            </div>
        </div>

        <app-nav></app-nav>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'app-cart',
    computed: {
        ...mapState(['commons', 'cart']),
        ...mapGetters(['all_num_and_price'])
    },
    methods: {
        reduce (good_id) {
            this.$store.dispatch('action_reduce_good_from_cart', { good_id })
        },
        add (good_id) {
            this.$store.dispatch('action_add_good_in_cart', {
                good_id
            })
        }
    }
}

//支付逻辑

//首先： 大部分情况下都会使用第三方支付功能，第三方支付需要公司进行申请成为开发者
// 前端用户点击支付之后，发生请求到后端，后端生成订单号之类的，请求第三方后端，第三方返回链接或者其他的信息给后端，后端给前端，前端打开新的标签页，并且做出等待状态
// 当用户在新标签页里支付完成后，回到页面中点击支付完成，前端发送验证信息到后端，后端去第三方进行验证是否支付，支付成功后显示支付完成的状态


</script>

<style lang="scss">
    .app-cart {
        li {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #333;
        }
    }
</style>

