<template>
    <div class="app-classify page page-bottom">
        <app-classify-item
            v-for = "category in commons.category_list"
            :key = "category.id"
            :data = "category"
        ></app-classify-item>
        <app-nav></app-nav>
    </div>
</template>
<script>
import AppClassifyItem from './ClassifyItem'
import { mapState } from 'vuex'
export default {
    name: 'app-classify',
    components: {
        AppClassifyItem
    },
    computed: mapState(['commons'])
}
</script>

<style lang="scss">
    
</style>

