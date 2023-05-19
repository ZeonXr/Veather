<template>
  <nav-bar>
    <div slot="left">
      <img
        class="menu-icon"
        src="@/assets/img/navbar/menu.svg"
        @click="openMenu"
      />
    </div>
    <div slot="center">Veather</div>
    <div slot="right">
      <img
        class="plus-icon"
        src="@/assets/img/navbar/plus.png"
        @click="cityClick"
      />
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '../common/NavBar'
import { mapMutations } from 'vuex'

export default {
  components: {
    NavBar,
  },
  methods: {
    ...mapMutations(['switchMenu']),
    openMenu() {
      this.$store.state.menuState = true
    },
    cityClick() {
      this.$router.push('/CityChoose')
    },
  },
}
</script>
