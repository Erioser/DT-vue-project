<template>
    <ul class="category-list">
        <router-link 
            tag = "li"
            :to = "{name: 'list-two', params: { category_id: item.id }}"
            v-for = "item in data"
            :key = "item.id"
        class="category-item">
            {{item.name}}
        </router-link>
    </ul>
</template>
<script>
export default {
    name: 'category-list',
    props: ['data']
}
</script>
<style lang="scss" scoped>
.category-list  {
    display: flex;flex-wrap: wrap;
}
.category-item {
    width: 33.33%;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.14rem;
}
</style>


