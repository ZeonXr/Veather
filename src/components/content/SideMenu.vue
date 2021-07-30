<template>
  <div class="side-menu" :class="{ 'menu-open': $store.state.menuState }">
    <div class="menu-btn" @click="menuClick">
      <img class="menu-icon" src="@/assets/img/navbar/menu.svg" />
    </div>
    <div class="links">
      <div class="link" @click="cityClick">
        <img :src="subscribeIconUrl" class="sub-icon" />
        订阅城市
      </div>
      <div class="link" @click="about">
        <img :src="aboutIconUrl" class="about-icon" />
        关于
      </div>
    </div>
    <a href="https://github.com/ZevilL" class="developer" target="_blank">
      开发者 · ZeviL
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setIconUrl: require("@/assets/img/menu/setting.svg"),
      aboutIconUrl: require("@/assets/img/menu/about.svg"),
      subscribeIconUrl: require("@/assets/img/menu/subscribe.svg"),
    };
  },

  methods: {
    menuClick() {
      this.$store.state.menuState = false;
    },
    cityClick() {
      this.$router.push("/CityChoose");
    },
    about() {
      this.$router.push("/About");
    },
  },
};
</script>

<style lang="scss" scoped>
.side-menu {
  height: 100%;
  width: 260px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 90;
  overflow: hidden;
  color: #414141;
  background: #ffffffee;
  transition: all 600ms cubic-bezier(0.8, 0, 0.33, 1);
  transform: translateX(-260px);
  border-radius: 0% 0% 100% 50%;

  .menu-btn {
    position: absolute;
    right: 10px;
    top: 6px;
    text-align: center;
    cursor: pointer;
    .menu-icon {
      padding: 6px;
      width: 20px;
      height: 20px;
    }
  }
  .links {
    padding-top: 44px;
    height: 100%;
    .link {
      margin: 10px 0;
      padding: 16px 0 16px 60px;
      text-decoration: none;
      font-size: 20px;
      cursor: pointer;

      .about-icon,
      .sub-icon {
        margin-right: 10px;
        height: 23px;
        vertical-align: sub;
      }
    }
  }
  .developer {
    position: absolute;
    right: calc(50% - 50px);
    top:calc(100vh - 50px);
    padding: 6px 12px;
    background: #1494d92a;
    border-radius: 12px;
    font-size: 10px;
    text-decoration: none;
    color: #414141;
  }
  &.menu-open {
    border-radius: 0% 0% 0% 0%;
    transform: translateX(0px);
  }
}
</style>