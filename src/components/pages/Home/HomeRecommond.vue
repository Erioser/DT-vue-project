<template>
    <div class="app-home-recommond">
        <ui-title-box 
        v-for = " recommond in recommonds " :key = "recommond.inventory_cat_id"
        :title = "recommond.inventory_cat_name + '精选'">

            <div class="recommond-list">
                <good-common-item v-for = " item in recommond.rec_list " :key = "item.id" :data = "item"></good-common-item>
                
            </div>
            <div class="see-more">查看全部</div>
            

        </ui-title-box>
    </div>
</template>

<script>
export default {
    name: 'app-home-recommond',
    data () {
        return {
            recommonds: []
        }
    },
    methods: {
        getRecommonds () {
            this.$http.get(this.server_config.dt + '/napi/buy/inventory/list/by_cat/recommend/?timestamp=1533085976000').then(res => {
                this.recommonds = res.data.data.object_list
            })
        }
    },
    created () {
        this.getRecommonds()
    }
}
</script>

<style lang="scss" scoped>
    .app-home-recommond {

        .recommond-list {
            padding: 0px 0.15rem;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .see-more {
            height: 0.56rem;
            line-height: 0.56rem;
            color: #444;
            font-size: 0.13rem;
            width: 100%;
            text-align: center;
            background-color: #fff;
        }

    }
</style>


