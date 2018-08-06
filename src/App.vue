<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // 初始化的去获取全局所需要使用的category_list数据
    this.$store.dispatch('action_get_category_list')
  }
}
</script>

<style>

</style>
