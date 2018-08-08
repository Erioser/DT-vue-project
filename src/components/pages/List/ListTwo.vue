
<template>
    <div v-infinite-scroll = "listenScroll" scroll-distance = "50" class="app-list-one page-top">
        <app-header><span  v-if="category">{{category.name}}</span></app-header>
         <div class="recommond-list">
            <good-common-item v-for = " item in goods " :key = "item.id" :data = "item"></good-common-item>
            
        </div>
        <p v-if = "!hasMore" class="no-more">没有更多了</p>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'app-list-one',
    data () {
        return {
            goods: [],
            start: 0,
            limit: 10,
            isloading: false,
            hasMore: true
        }
    },
    computed: {
        ...mapState(['commons']),
        category () {//当前的一级分类的信息
            //得到路由中的id 
            let id = this.$route.params.category_id
            if ( !this.commons.category_list ) return null;
            let category = null;
            for (let i = 0; i < this.commons.category_list.length; i++) {
                let one = this.commons.category_list[i].category_list                
                for (let j = 0; j < one.length; j++) {
                    const element = one[j];
                    if ( element.id == id ) {                      
                        category = element;
                        break;
                    }
                }
            }
            return category
        }
    },
    methods: {
        getGoods (clear) {// clear是否需要清空原数据
            this.isloading = true
            this.$http.get(this.server_config.dt + '/napi/buy/inventory/list/by_datasource/', {
                params: {
                    limit: this.limit,
                    start: this.start,
                    filter_id: this.category.value,
                    timestamp: Date.now()
                }
            }).then(res => {
                if ( res.data.data.more === 0 ) this.hasMore = false
                this.isloading = false
                if ( clear ) this.goods = [];
                this.goods = this.goods.concat(res.data.data.object_list)
            })
        },
        listenScroll () {//监听滚动
            
            if ( this.isloading || !this.hasMore ) return false;
            this.start += this.limit;
            this.getGoods()
        }
    },
    watch: {
        category: {//监听vuex中分类数据
            immediate: true,// 初始化的时候也执行一次
            handler  (val) {
                console.log('获取数据了')
                if ( val ) {
                    console.log('获取数据了')
                    this.getGoods()
                }
            }
        }
    }
}

</script>
<style lang="scss">
    .app-list-one {
        color:#444;
        .recommond-list {
            padding: 0px 0.15rem;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }


        .no-more {
            height: .44rem;
            background: #fff;
            font-size: .14rem;
            text-align: center;
            line-height: .44rem;
            margin-top: .12rem;
        }
    }
</style>

