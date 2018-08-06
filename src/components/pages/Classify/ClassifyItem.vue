<template>
    <div class="app-classify-item">
        <div class="title">
            <router-link :to="{name:'list-one', params:{category_id: data.id}}"  >{{data.name}}</router-link>
        </div>
        <category-list :data = "data.category_list"></category-list>
    </div>
</template>
<script>
export default {
    name: 'app-classify-item',
    props: ['data']
}
</script>
<style lang="scss" scoped>
    .app-classify-item {
        
        background: #fff;
        margin-bottom: 0.12rem;
        .title {
            height: 1.3rem;
            display: flex;
            justify-content: center;align-items: center;
            a {
                color: #444;
                font-size: 0.18rem;
            }
        }
        
    }
</style>


