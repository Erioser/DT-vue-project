<template>
    <div class="app-home-special">
        <ui-title-box title = "专题">
            <app-home-special-box
                v-for = " (special, i) in specials "
                :key = "i"
                :data = "special"
            ></app-home-special-box>
        </ui-title-box>
    </div>
</template>

<script>
import AppHomeSpecialBox from './Special/SpecialBox'
export default {
    name: 'app-home-special',
    data () {
        return {
            specials: []
        }
    },
    methods: {
        getSpecials () {
            this.$http.get('/dt/napi/buy/index/popular/list/?limit=5&start=0&timestamp=1533021994000').then(res => {
                this.specials = this.specials.concat(res.data.data.object_list)
            })
            this.$http.get('/dt/napi/buy/index/popular/list/?limit=5&start=5&timestamp=1533023345000').then(res => {
                this.specials = this.specials.concat(res.data.data.object_list)
            })
        }
    },
    created () {
        this.getSpecials()
    },
    components: {
        AppHomeSpecialBox
    }
}
</script>

<style lang="scss" scoped>
.app-home-special {

}
</style>

