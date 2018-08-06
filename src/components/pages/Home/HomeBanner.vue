<template>
  <div ref = "el" class="app-home-banner swiper-container" >
    <div class="swiper-wrapper">
        <div
            v-for = " (banner, i) in banners "
            :key = " i "
        class="swiper-slide loading-img">
            <img :src="banner.image_url | formatImage" alt="">
        </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper'
export default {
  name: 'AppHomeBanner',
  data () {
    return {
        banners: []
    }
  },
  methods: {
        getBanners () {
            this.$http.get('/dt/napi/ad/banner/list/', {
                params: {
                        ad_id: 'COM001',
                        limit: 5,
                        start: 0,
                        timestamp: '1532999765000'
                }
            }).then(res => {
                this.banners = res.data.data.object_list
                Vue.nextTick(() => {
                     new Swiper(this.$refs.el, {
                         pagination: {
                            el: '.swiper-pagination'                        
                         }
                     })
                })
            })
        }
  },
  created () {
      this.getBanners()
  }
}
</script>
<style lang = "scss">
    .app-home-banner {
        .swiper-wrapper {
            width: 100%;
            height: 1.875rem;
        }
        .swiper-slide {
            img {width: 100%; }
        }
        .swiper-pagination  {
            .swiper-pagination-bullet {
                width: 5px; height: 5px;
            }
            .swiper-pagination-bullet-active {
                background: #fff;
            }
        }
    }
    
</style>
