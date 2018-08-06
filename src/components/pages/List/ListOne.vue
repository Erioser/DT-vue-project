
<template>
    <div class="app-list-one page-top">
        <app-header></app-header>
        <category-list v-if = "category_list" :data = "category_list"></category-list>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'app-list-one',
    computed: {
        ...mapState(['commons']),
        category_list () {
            //得到路由中的id 
            let id = this.$route.params.category_id
            if ( !this.commons.category_list ) return null;
            let category = this.commons.category_list.filter(item => item.id == id)
            return category[0].category_list        
        }
    }
}
</script>
<style lang="scss">
    .app-list-one {
        color:#444;
    }
</style>

