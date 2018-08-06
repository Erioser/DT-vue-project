<template>
    <div class="detail">
        <header class="bar bar-nav">
            <a @click="$router.go(-1)" class="icon icon-left pull-left"></a>
            <h1 class="title">朋友信息</h1>
        </header>

        <div class="content">
            <h1>{{ $route.query.name }}</h1>
            <p>tel: {{$route.params.tel}} -- {{$route.params.id}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app-detail',
    methods: {
        getDetailById () {
            let id = this.$route.params.id
            //根据id去获取数据
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


