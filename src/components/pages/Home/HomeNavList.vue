<template>
    <div class="app-home-nav-list">
        <ul class="nav-list" v-if = "commons.category_list">
            <router-link tag="li" :to="{name:'list-one', params:{category_id: nav.id}}"  v-for = "nav in commons.category_list" :key = "nav.id" class="nav-item">
                <img :src="nav.background_img" alt="">
                <span>{{nav.name}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'app-home-nav-list',
    data () {
        return {
            navs: []
        }
    },
    computed: mapState(['commons'])
}
</script>

<style lang="scss" scoped>
    .app-home-nav-list {
        width: 100%;
        height: 1.68rem;
        background: #fff;
        .nav-list {
            padding-bottom: 0.14rem;
            display: flex;
            flex-wrap: wrap;
            .nav-item {
                width: 0.75rem;height: 0.77rem;
                padding: 0.13rem 0px 0.05rem;
                display: flex;flex-flow:column;
                align-items: center; justify-content: space-between;

                img {
                    width: 0.36rem;height: 0.36rem;
                }
                span {
                    color: #444; font-size: 13px;
                }
            }
        }

    }
</style>


