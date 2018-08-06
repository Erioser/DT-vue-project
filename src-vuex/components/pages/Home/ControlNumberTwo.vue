
<template>
    <div class="control-number">
        <p class="buttons-row">
            <button class="button button-round">-2</button>
            <button @click = "INCREMENT({ num:2 })" class="button button-round">+2</button>
        </p>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'control-number-two',
    methods: {
        ...mapMutations(['INCREMENT'])
    }
}
</script>
<style lang="scss">
    .control-number-two {
        
    }
</style>


