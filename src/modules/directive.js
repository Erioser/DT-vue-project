import Vue from 'vue'

Vue.directive('infinite-scroll', {
    bind (el, binding) { //指令第一次绑定在元素身上的时候生效
        let distance = el.getAttribute('scroll-distance')
        //在指令中要执行
        let screenHeight = document.documentElement.clientHeight//屏幕高度
        el.listenscroll = (e) => {
            console.log('scroll')
            let scrollTop = document.documentElement.scrollTop
            let pageHeight = document.documentElement.offsetHeight
            if ( pageHeight - screenHeight - scrollTop < distance) { //距离底部已经不到50
                binding.value()
            }
        }
        window.addEventListener('scroll', el.listenscroll) 
    },
    unbind (el, binding) { //当组件销毁的时候，指令会与元素解绑
        window.removeEventListener('scroll', el.listenscroll)
    }
})


// 距离底部的 距离  + 屏幕的高度 + 已经滚动的距离  =  页面的高度