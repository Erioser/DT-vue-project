<template>
    <div class="home">
        Home

        <show-number></show-number>
        <show-double-number></show-double-number>
        <control-number></control-number>
        <control-number-two></control-number-two>
        <control-number-async></control-number-async>
       <app-nav></app-nav>
    </div>
</template>
<script>
import ShowNumber from './ShowNumber.vue'
import ShowDoubleNumber from './ShowDoubleNumber.vue'
import ControlNumber from './ControlNumber.vue'
import ControlNumberTwo from './ControlNumberTwo.vue'
import ControlNumberAsync from './ControlNumberAsync.vue'
export default {
    name: 'app-home',
    components: {
        ControlNumber,
        ShowNumber,
        ControlNumberTwo,
        ControlNumberAsync,
        ShowDoubleNumber
    }
}
</script>
<style lang="scss" scoped>

</style>


