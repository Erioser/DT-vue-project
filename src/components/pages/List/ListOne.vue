
<template>
    <div v-infinite-scroll = "listenScroll" scroll-distance = "50" class="app-list-one page-top">
        <app-header><span  v-if="category">{{category.name}}</span></app-header>
        <category-list v-if = "category" :data = "category.category_list"></category-list>
        <list-sort :change-sort-by = "changeSortBy" :sort_by = "sort_by"></list-sort>
         <div class="recommond-list">
            <good-common-item v-for = " item in goods " :key = "item.id" :data = "item"></good-common-item>
            
        </div>
        <p v-if = "!hasMore" class="no-more">没有更多了</p>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import ListSort from './ListSort'
import {Indicator} from 'mint-ui'
export default {
    name: 'app-list-one',
    data () {
        return {
            goods: [],
            sort_by: '',
            start: 0,
            limit: 10,
            isloading: false,
            hasMore: true
        }
    },
    components: {
        ListSort
    },
    computed: {
        ...mapState(['commons']),
        category () {//当前的一级分类的信息
            //得到路由中的id 
            let id = this.$route.params.category_id
            if ( !this.commons.category_list ) return null;
            let category = this.commons.category_list.filter(item => item.id == id)
            return category[0]      
        }
    },
    methods: {
        getGoods (clear) {// clear是否需要清空原数据
            Indicator.open({
                text: '客官请稍等...',
                spinnerType: 'fading-circle'
            });
            this.isloading = true
            this.$http.get(this.server_config.dt + '/napi/buy/inventory/list/by_datasource/', {
                params: {
                    sort_by: this.sort_by,//确定排序规则
                    sort_type: 'desc',//排序方式 降序
                    limit: this.limit,
                    start: this.start,
                    filter_id: this.category.value,
                    timestamp: Date.now()
                }
            }).then(res => {
                Indicator.close()
                if ( res.data.data.more === 0 ) this.hasMore = false
                this.isloading = false
                if ( clear ) this.goods = [];
                this.goods = this.goods.concat(res.data.data.object_list)
            })
        },
        changeSortBy (sort_by) {
            this.sort_by = sort_by;
            this.start = 0;
            this.getGoods(true)
        },
        listenScroll () {//监听滚动
            //如果已经没有更多了，或者正在加载数据的话，就不要再去获取新数据
            if ( this.isloading || !this.hasMore ) return false;
            this.start += this.limit;
            this.getGoods()
        }
    },
    watch: {
        category: {//监听vuex中分类数据
            immediate: true,// 初始化的时候也执行一次
            handler  (val) {
                if ( val ) {
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

