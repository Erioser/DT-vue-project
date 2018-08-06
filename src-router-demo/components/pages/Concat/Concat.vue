<template>
    <div class="concat">
        <header class="bar bar-nav">
           <h1 class="title">通讯录</h1> 
        </header>
        <div class="content">
             <div class="list-block">
                <ul>
                    <router-link tag="li" :to="{ name: 'detail', params: { id: friend.id, tel: friend.tel }, query: { name: friend.name } }" v-for = "friend in friends" :key = "friend.id" class="item-content">
                    <!-- <router-link tag="li" :to="'/detail/' + friend.id" v-for = "friend in friends" :key = "friend.id" class="item-content"> -->
                        <div class="item-inner">
                            <div class="item-title">{{friend.name}}</div>
                            <div class="item-after">{{friend.tel}}</div>
                        </div>
                    </router-link>
                </ul>
            </div>
        </div>

        <app-nav></app-nav>
    </div>
</template>
<script>
export default {
    name: 'app-concat',
    data () {
        return {
            friends: [
                { id: 1, name: '李二狗', tel: 123 },
                { id: 2, name: '王铁蛋', tel: 456 },
                { id: 3, name: '翠花', tel: 789 }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


