<template>
    <div class="ui-title-box">
        <div class="title">
            <div class="title-span">{{title}}</div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ui-title-box',
    props: ['title']
}
</script>

<style lang="scss" scoped>
    .ui-title-box {
        background: #fff;
        margin-top: 0.12rem;
        .title {
           height: 0.64rem;
            text-align: center;
            position: relative;
            background-color: #fff;

            .title-span {
                display: inline-block;
                height: 0.24rem;
                line-height: 0.24rem;
                font-size: 0.17rem;
                color: #444;
                margin: 0.18rem 0.09rem 0.22rem 0.12rem;
                letter-spacing: 3px;
            }
        }
    }
</style>


