
<template>
    <div class="control-number">
        <p class="buttons-row">
            <button @click="_reduce" class="button button-round">-</button>
            <button @click="INCREMENT({ num: 1 })" class="button button-round">+</button>
        </p>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'control-number',
    //这样使用了之后，就可以让组件中拥有increment方法，并且在这个方法中会自动的掉调用mutations的increment方法
    methods: {
        ...mapMutations( ['INCREMENT'] ),
        ...mapMutations({
            _reduce: 'reduce'
        })
    }
}
</script>
<style lang="scss">
    .control-number {
        
    }
</style>


