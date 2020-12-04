<template>
  <div id='home'>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <home-recommend-view :recommends='recommends'></home-recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {getHomeMultidata} from 'network/home'
import HomeSwiper from 'views/home/childComps/HomeSwiper.vue'
import HomeRecommendView from 'views/home/childComps/HomeRecommendView.vue'
export default {
  name:"Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView
    },
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  created(){
    getHomeMultidata().then(res => {
      this.banners=res.data.banner.list
      this.recommends=res.data.recommend.list
    })
  }
}

</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color:white;
  }
</style>