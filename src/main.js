// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'// 根组件

//全局的配置
import './modules/config'
import store from './store'
import router from './router'
/* eslint-disable no-new */
// 根实例
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  // 因为根实例里其实仅仅只放入了根组件，所以可以这样指定根实例的模板就是根组件
  template: '<App/>'
})
