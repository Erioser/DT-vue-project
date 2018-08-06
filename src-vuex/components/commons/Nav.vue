<template>
    <footer class="app-nav">
        <nav class="bar bar-tab">
            <router-link exact :to = "nav.path" v-for = " nav in navs " :key = "nav.id" class="tab-item external" 
             active-class="active">
                <span :class="['icon', 'icon-' + nav.icon]"></span>
                <span class="tab-label">{{ nav.title }}</span>
            </router-link>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'app-nav',
    data () {
        return {
            navs: [
                { id: 1, title: '首页', icon: 'home', path: '/', name: 'home' },
                { id: 2, title: '联系人', icon: 'star', path: '/concat', name: 'concat' },
                { id: 3, title: '我的', icon: 'me', path: '/mine', name: 'mine' }
            ]
        }
    },
    mounted () {
        console.log(this.$route.name)
    }
}
</script>
<style lang="scss" scoped>

</style>
