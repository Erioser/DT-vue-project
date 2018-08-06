
import Vue  from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/pages/Home/Home'
import Classify from '../components/pages/Classify/Classify'
import Mine from '../components/pages/Mine/Mine'
import Login from '../components/pages/Login/Login'
import ListOne from '../components/pages/List/ListOne'

import store from '../store'

// 路由 表
const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/classify', name: 'classify', component: Classify },
    { 
        path: '/mine', name: 'mine', component: Mine,
        //在进入这个路由的时候会执行
        //to身上有要跳转过去的路由的信息, from是来的路由的信息
        //next代表下一个动作, 执行的时候跳转到要去的路由，可以传入path来控制
        // beforeEnter: (to, from ,next) => {
        //     // console.log('哈哈', to, from)
        //     // next('/login')
        //     if ( !store.state.commons.user_state ){
        //         next('/login')
        //     }else {
        //         next()
        //     }
        // }
    },
    { path: '/login', name: 'login', component: Login },
    { path: '/list-one/:category_id', name: 'list-one', component: ListOne }
]

const router = new VueRouter({
    mode: 'history',
    routes
})


//全局路由守卫

let need_user_state = [ 'mine' ]

router.beforeEach((to, from ,next) => {
    //是否需要判断登陆状态
    let need_us = need_user_state.some(name => to.name === name)
    if ( need_us && !store.state.commons.user_state ) {
        next('/login');return false;
    }
    next();
})


export default router