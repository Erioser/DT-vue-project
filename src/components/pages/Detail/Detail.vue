<template>
    <div class="app-detail page-top">
        <app-header>详情</app-header>
        <div v-if = "good_detail" class="good-detail">
            <h2>{{good_detail.caption}}</h2>
            <p>{{good_detail.name}}</p>
            <p>价格：{{good_detail.inventories[$route.params.inventory_id].sale_price}}</p>

            <div class="btns">
                <div class="control_nul">
                    <button @click = "num -= (num === 1 ? 0: 1)">-</button>
                    <span>{{num}}</span>
                    <button @click = "num++">+</button>
                </div>
                <button @click = "checkIsLogin">加入购物车</button>
            </div>

            
        </div>
        <div v-if = "commons.detail_common_info" class="common-info">
            <div v-html = "commons.detail_common_info.fhtz"></div>
            <div v-html = "commons.detail_common_info.gmxz"></div>
        </div>
        
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'app-detail',
    data () {
        return {
            good_detail: null,
            num: 1
        }
    },
    computed: mapState(['commons', 'cart']),
    methods: {
        getGoodDetail () {
            this.$http.get('/dt/napi/buy/spu/detail/', {
                params: {
                    inventory_id: this.$route.params.inventory_id,
                    timestamp: Date.now()
                }
            }).then(res => {
                this.good_detail = res.data.data
            })
        },
        checkIsLogin () {
            if (!this.commons.user_state) {
                this.$router.push({name: 'login'})
            }else {
                //加入购物车, 其实是要和服务器交互，并在store中管理
                //既然数据都会保持在数据库里，所有的组件都可以通过与服务器交互来操作、查找数据，为什么还要在store中管理？

                //用户操作之后->调用actions方法，在actions中与服务端交互达到操作数据库的目的，再去调用mutations操作store中的数据
                this.$store.dispatch('action_add_good_in_cart', {
                    good_id: this.$route.params.inventory_id,
                    price:   this.good_detail.inventories[this.$route.params.inventory_id].sale_price,
                    name:    this.good_detail.name,
                    num: this.num
                })

            }
        }
    },
    created () {
        this.getGoodDetail()
        if ( !this.commons.detail_common_info ) {
            this.$store.dispatch('action_get_detail_common_info')
        }
    }
}
</script>
<style lang="scss">
.app-detail {
    .good-detail , .common-inf{
        margin-top: .15rem;
    }

    .btns {
        display: flex;
        padding: 0px .15rem;
        justify-content: space-between;
        align-items: center;
    }
}
</style>

