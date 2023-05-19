<template>
  <div class="main-board">
    <div class="update-time">
      <span @click="updateBtn">
        {{ $store.state.now.updatetime }}
        <i>更新</i>
        <img :src="updateicon" class="update-icon" />
      </span>
    </div>
    <div class="weather-board">
      <div class="box-left">
        <div>
          <span class="nowtemp">
            {{ $store.state.now.temperature }}
          </span>

          <i class="degree-symbol">°C</i>
        </div>
        <div>
          <span class="location">
            <img :src="posIconUrl" />
            {{ $store.state.city }}
          </span>
          <span>
            {{ $store.state.now.weathername }}
          </span>
        </div>
      </div>

      <div class="weather-big-icon">
        <img
          :src="
            require(`@/assets/img/wicon/${$store.state.now.weathericoncode}.png`)
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updateicon: require('@/assets/img/mainboard/update.png'),
      position: require('@/assets/img/mainboard/position.png'),
      posIconUrl: require('@/assets/img/citychoose/position.png'),
    }
  },

  methods: {
    updateBtn() {
      this.$store.dispatch('getWeather', this.$store.state.cityid)
    },
  },
}
</script>

<style lang="scss" scoped>
.main-board {
  margin: 10px 0;
  width: 100%;
  font-family: 'Rubik-Regular';
  color: #414141;
}

.weather-board {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 38px;
  margin-bottom: 34px;
  width: 100%;

  .location {
    margin-right: 10px;
    font-size: 24px;

    img {
      width: 20px;
    }
  }

  .nowtemp {
    font-weight: 700;
    font-size: 4.8em;
  }
  i.degree-symbol {
    font-size: 50px;
    font-weight: 400;
    font-style: normal;
  }

  .weather-big-icon img {
    height: 100px;
    vertical-align: middle;
  }
}

.update-time {
  margin-top: 18px;
  text-align: center;

  font-size: 14px;
  text-indent: 10px;
  span {
    cursor: pointer;
    i {
      margin: 0 6px 0 2px;
      font-style: normal;
    }
  }
  .update-icon {
    height: 12px;
    vertical-align: middle;
    .iconrotate {
      animation: rotate 1s linear 1;
    }
  }
}
</style>
