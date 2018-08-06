<template>
    <div class="app-home-update">
        <div v-for = "(info, i) in infos" :key = "i" class="app-home-update-item">
            <h3 class="title">{{info.enter_main_title}}</h3>
            <p>{{info.enter_sub_title}}</p>
            <img :src="info.enter_image_url" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-home-update',
    data () {
        return {
            infos: []
        }
    },
    methods: {
        getInfos () {
            this.$http.get('/dt/napi/buy/index/module/info/?type=3,4,7&timestamp=1533018643000').then(res => {
                console.log(res.data)
                this.infos = res.data.data.object_list
            })
        }
    },
    mounted () {
        this.getInfos()
    }
}
</script>

<style lang="scss" scoped>
    .app-home-update {
        background: #fff;
        display: flex;
        .app-home-update-item {
            flex-grow: 1;
            height: 1.5rem;
            display: flex; flex-flow: column;
            align-items: center;
            justify-content: space-between;

            .title {
                margin-top: 0.22rem;color: #444;font-size: 0.15rem;
            }
            p {
                margin-top: 2px; font-size: 0.12rem;
            }
            img {
                width: 0.75rem;
                height: 0.75rem;
                margin-top: 5px;
            }
        }
    }
</style>


