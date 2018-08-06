
<template>
    <div class="app-header">
        <a @click = "$router.go(-1)"><i class="fa fa-angle-left"></i></a>
        <slot></slot>
        <a></a>
    </div>
</template>
<script>
export default {
    name: 'app-header'
}
</script>
<style lang="scss" scoped>
@import '../../stylesheets/_base.scss';
    .app-header {
        position: fixed;
        top: 0;width: 100%;
        padding: 0px 0.15rem;
        height: 0.5rem;
        line-height: 0.5rem;   
        background: #fff; 
        display: flex;
        justify-content: space-between; 
        font-size: 0.16rem;  
        a {
            color: $base-color;
            font-size: 0.24rem;
        }
    }
</style>

