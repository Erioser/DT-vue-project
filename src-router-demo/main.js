// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './components/commons/component'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
   // 为了让里面所有的组件的身上都能拥有$router和$route属性
   // $router主要用在我们做路由跳转、切换的时候，$route则是更多使用其身上的有关路由的属性
  router,
  components: { App },
  template: '<App/>'
})
