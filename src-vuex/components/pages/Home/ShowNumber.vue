
<template>
    <div class="show-number card">
        <div class="card-content">
            <div class="card-content-inner">{{number}} -- {{doubleNumber}}</div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'show-number',
    // computed: mapState({
    //     // number:(state) => state.number
    //     state_number: 'number'
    // }),
    // computed: mapState([ 'number' ]),
    computed: {
        // a () {
        //     return this.b +1
        // },
        // ...mapState(['number']),
        ...mapState({
            number: state => state.number.number
        }),
        ...mapGetters(['doubleNumber'])
    },
    mounted () {
       console.log(this.$store)
    }
}

// var a = { x:1, y:2 }

// var b = { z:3, ...a }


</script>
<style lang="scss">
    .show-number {

    }
</style>
