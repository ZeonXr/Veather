<template>
  <div class="home">
    <transition name="fade">
      <div
        class="mask"
        v-show="$store.state.menuState"
        @click="maskClick"
      ></div>
    </transition>

    <side-menu></side-menu>
    <weather-nav></weather-nav>
    <div class="pd-lr">
      <main-board></main-board>
      <detlpage></detlpage>
      <life-guide></life-guide>
      <day7-forecast></day7-forecast>
    </div>
    <page-footer></page-footer>
    <!-- <transition name="fade">
      <loading v-show="$store.state.loadingTip"></loading>
    </transition> -->
  </div>
</template>

<script>
import SideMenu from '@/components/content/SideMenu'
import WeatherNav from '@/components/content/WeatherNav'
import MainBoard from '@/components/content/MainBoard'
import day7Forecast from '@/components/child/Day7'
import detlpage from '@/components/child/DetlPage'
import LifeGuide from '@/components/child/LifeGuide'
import PageFooter from '@/components/content/PageFooter'
// import Loading from "@/components/content/Loading";

export default {
  components: {
    SideMenu,
    WeatherNav,
    MainBoard,
    detlpage,
    day7Forecast,
    LifeGuide,
    PageFooter,
    // Loading,
  },
  methods: {
    maskClick() {
      this.$store.state.menuState = false
    },
  },
}
</script>

<style lang="scss">
.home {
  .pd-lr {
    margin: 0 3vw;
    @media screen and (min-width: 1080px) {
      margin: 0 auto;
      width: 1014px;
    }
  }
  .nav-bar {
    position: sticky;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 90;
    width: 100%;
    height: 100%;
    background-color: #0000005b;
    // backdrop-filter: saturate(180%) blur(4px);
    // transition: opacity 0.3s;
  }
}
</style>
