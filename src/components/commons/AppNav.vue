
<template>
    <div class="app-nav">
        <router-link active-class="active" exact :to = "{name: nav.name}" v-for = "nav in navs" :key = "nav.id">
            <i :class="'fa fa-' + nav.icon"></i>
            <span>{{nav.title}}</span>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'app-nav',
    data () {
        return {
            navs: [
                { id: 1, title: '首页', icon: 'home', name: 'home'},
                { id: 2, title: '分类', icon: 'bullseye', name: 'classify'},
                { id: 3, title: '我的', icon: 'user-circle-o', name: 'mine'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../stylesheets/_base.scss';
    .app-nav {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 0.5rem;
        background: #fff;
        border-top: 1px solid #e4e2e2;
        display: flex;
        padding: 0.05rem 0px;
        i {
            font-size: 0.20rem;
        }
        a {
            flex-grow: 1;
            height: 100%;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: space-around;
            &.active {
                color: $base-color;
            }
        }
    }
</style>


