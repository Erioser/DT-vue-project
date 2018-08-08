import Vue from 'vue'
//swiper css
import 'swiper/dist/css/swiper.min.css'

// 全局通用样式
import '../stylesheets/main.scss'

//rem
import computed_rem from './rem'
 //计算rem
computed_rem()

// axios

import axios from 'axios'
Vue.prototype.$http = axios

//filters

import './filters'

//全局自定义指令

import './directive'

//全局组件

import './ui-components'

//mint-ui相关
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);

//cookies
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.prototype.$cookies.clear = function () {
    let keys = Vue.prototype.$cookies.keys()
    keys.forEach(key => {
        this.remove(key)
    });
}
// server-config
import  server_config  from './server-config'
Vue.prototype.server_config = server_config
//md5

import md5 from 'js-md5'

Vue.prototype.md5 = md5

Vue.config.productionTip = false