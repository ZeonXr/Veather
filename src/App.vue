<template>
  <div id="app">
    <transition name="slidefade">
      <router-view />
    </transition>
    <transition name="fade">
      <loading v-show="$store.state.loadingTip"></loading>
    </transition>
  </div>
</template>

<script>
import Loading from "@/components/content/Loading";

export default {
  name: "APP",
  mounted() {
    this.$store.dispatch("getWeather", this.$store.state.cityid);
  },
  components:{
    Loading
  }
};
</script>

<style lang="scss">
@import "./assets/css/base.css";

$bgc: rgb(169, 207, 250) 0%, rgb(240, 190, 213) 100%;

#app {
  font-family: "Rubik-Regular";
  @keyframes rbgr {
    @for $i from 0 through 100 {
      #{$i + "%"} {
        background: linear-gradient(($i/100) * 360 + deg, $bgc);
      }
    }
  }

  &::before {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -20;
    content: "";
    width: 100%;
    height: 100%;
    animation: rbgr 60s infinite linear;
  }

  @media screen and (max-width: 300px) {
    width: 300px;
  }
}
</style>
