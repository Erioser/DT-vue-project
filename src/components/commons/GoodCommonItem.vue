<template>
    <router-link :to = "{name: 'detail', params: {inventory_id: data.id}}" tage = "div" class="good-common-item">
        <div class="img-box loading-img">
            <img :src="data.pictures[0] | formatImage('middle')" alt="">
        </div>
        <div class="title">{{data.inventory_caption}}</div>
        <p class="desc">{{data.inventory_name}}</p>
        <p class="sale">已售 {{data.sold_quantity}}</p>
        <div class="price">￥{{data.sale_price}}</div>
    </router-link>
</template>
<script>
export default {
    name: 'good-common-item',
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    .good-common-item {
        width: 1.68rem;
        height: 3.2rem;

        .img-box {
            width: 100%;height: 1.68rem;
            img {
                width: 100%
            }
        }

        .title {
            margin-top: 0.12rem;
            font-size: 0.13rem;
            line-height: 0.15rem;
            font-weight: 700;
            color: #444;
            height: 0.15rem;
            overflow: hidden;
        }

        .desc {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-top: 0.04rem;
            font-size: 0.13rem;
            line-height: 0.15rem;
            color: #aaa;
            height: 0.3rem;
            text-overflow: ellipsis;
        }

        .sale {
            margin-top: 0.18rem;
            font-size: 0.11rem;
            line-height: 0.15rem;
            color: #aaa;
        }

        .price {
                margin-top: 0.04rem;
                font-size: 0.13rem;
                line-height: 0.21rem;
                color: #ff5959;
        }
    }
</style>

