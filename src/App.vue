<template>
  <div id="app">

    <keep-alive include="AppHome">
      <router-view></router-view>
    </keep-alive>
    

  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // 初始化的去获取全局所需要使用的category_list数据
    this.$store.dispatch('action_get_category_list')
    //如果已经登录了，就去获取用户购物车的数据
    if ( this.$store.state.commons.user_state ) {
      this.$store.dispatch('action_get_user_cart')
    }   
  }
}

//使用了keepalive之后，组件的切换就不会将组件完全销毁，而是将组件的状态、数据做了一个保存，下次切换回来的时候就可以直接使用这些状态、数据
//可以使用include、exclude属性来指定哪些组件会被缓存或者是哪些不会被缓存
//被缓存的组件，切换出去的时候，不会执行生命周期中销毁阶段的钩子函数，重新切换回来的时候也不会很执行初始化阶段的钩子函数
//提供了activated.deactivated供我们在切换进来和切换出去的时候使用。
</script>

<style>

</style>
