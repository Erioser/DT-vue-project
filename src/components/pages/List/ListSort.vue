<template>
    <div class="app-list-sort">
        <div 
            v-for = "sort in sorts"
            :key = "sort.id"
            @click = "changeSortBy(sort.sort_by)"
        class="sort-item " :class="sort_by === sort.sort_by ? 'active' :''" >
            {{ sort.title }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'app-list-sort',
    props: ['sort_by', 'changeSortBy'],
    data () {
        return {
            sorts: [
                { id: 1, title: '默认', sort_by: '' },
                { id: 2, title: '热度', sort_by: 'heat' },
                { id: 3, title: '新品', sort_by: 'create_datetime' },
                { id: 4, title: '价格', sort_by: 'sale_price' }
            ] 
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../../stylesheets/_base.scss';
    .app-list-sort {
        margin-top: 0.12rem;
        height: 0.44rem;
        font-size: 0.14rem;
        color: #777;
        text-align: center;
        line-height: 0.44rem;
        padding: 0 0.12rem;
        display: flex;
        .sort-item {
            width: 25%;
            line-height: .44rem;
            text-align: center;
            &.active {
                color: $base-color;
            }
        }
    }
</style>

