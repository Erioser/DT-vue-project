
<template>
    <div class="control-number-async">
        <p class="buttons-row">
            <button class="button button-round">-async</button>
            <button @click = "asyncIncrement" class="button button-round">+async</button>
        </p>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'control-number-async',
    methods: mapActions(['asyncIncrement'])
    // methods: {
    //     asyncIncrement () {
    //         this.$store.dispatch('asyncIncrement')
    //     }
    // }
}
</script>
<style lang="scss">
    .control-number-async {
        
    }
</style>


