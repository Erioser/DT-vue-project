<template>
    <div class="app-mine page page-bottom">
        app-mine
        <p> 用户名: <span v-if = "user_info">{{ user_info.nickname }}</span> </p>
        <button @click = "exit">退出登陆</button>
        <app-nav></app-nav>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'app-mine',
    computed: mapState({
        user_info : state => state.commons.user_info
    }),
    created () {
        this.$store.dispatch('action_get_user_info')
    },
    methods: {
        exit () {
            this.$store.commit({
                type: 'CHANGE_USER_STATE', user_state: null
            })
            this.$store.commit({
                type: 'CHANGE_USER_INFO', user_info: null
            })
            this.$cookies.clear()

            this.$router.replace('/login')
        }
    }
    // created () {
    //     let user_state = this.$store.state.commons.user_state
    //     if ( !user_state ) {
    //         this.$router.replace('/login')
    //     }
    // },
    // beforeRouteEnter (to, from, next) {
    //     let user_state = store.state.commons.user_state
    //     if ( !user_state ) {
    //         next('/login')
    //     }else { next() }
    // }
    // beforeRouteUpdate (to, from, next) {
    //     //当路由参数变化，或者内部的子路由切换的时候就会触发
    // },
    // beforeRouteLeave (to, from, next) {
    //     //路由跳转走的时候
    //     console.log('从mine离开了')
    // }
}
</script>

<style lang="scss">
    
</style>

