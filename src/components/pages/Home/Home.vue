<template>
  <div id="app-home" class="page page-bottom">
    home
    <!-- <app-home-banner></app-home-banner> -->
    <!-- <app-home-nav-list></app-home-nav-list> -->
    <!-- <app-home-update></app-home-update> -->
    <!-- <app-home-special></app-home-special> -->
    <!-- <app-home-recommond></app-home-recommond> -->

    <app-nav></app-nav>
  </div>
</template>

<script>
import AppHomeBanner from './HomeBanner'
import AppHomeNavList from './HomeNavList'
import AppHomeUpdate from './HomeUpdate'
import AppHomeSpecial from './HomeSpecial'
import AppHomeRecommond from './HomeRecommond'
export default {
  name: 'AppHome',
  components: {
    AppHomeBanner,
    AppHomeNavList,
    AppHomeUpdate,
    AppHomeSpecial,
    AppHomeRecommond
  }
}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">

</style>


// https://buy.duitang.com/napi/buy/inventory/list/by_cat/recommend/?timestamp=1533085976000