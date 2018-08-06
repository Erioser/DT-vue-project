
<template>
    <div class="show-double-number card">
        <div class="card-content">
            <div class="card-content-inner"> {{doubleNumber}} </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'show-double-number',
    computed: mapGetters(['doubleNumber'])
}

</script>
<style lang="scss">
    .show-double-number {

    }
</style>


