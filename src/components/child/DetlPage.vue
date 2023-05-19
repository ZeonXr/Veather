<template>
  <card title="今日详情">
    <div class="detl">
      <div class="detl-item">
        <div class="dimg">
          <img :src="maxtemp" />
        </div>
        <div>
          <div class="dkey">最高温度</div>
          <div class="dvalue">{{ $store.state.now.tempMax }}°</div>
        </div>
      </div>
      <div class="detl-item">
        <div class="dimg">
          <img :src="temp" />
        </div>
        <div>
          <div class="dkey">当前温度</div>
          <div class="dvalue">{{ $store.state.now.temperature }}°</div>
        </div>
      </div>
      <div class="detl-item">
        <div class="dimg">
          <img :src="mintemp" />
        </div>
        <div>
          <div class="dkey">最低温度</div>
          <div class="dvalue">{{ $store.state.now.tempMin }}°</div>
        </div>
      </div>
      <div class="detl-item">
        <div class="dimg">
          <img :src="windir" />
        </div>
        <div>
          <div class="dkey">风向</div>
          <div class="dvalue">{{ $store.state.now.windDir }}</div>
        </div>
      </div>
      <div class="detl-item">
        <div class="dimg">
          <img :src="humidity" />
        </div>
        <div>
          <div class="dkey">湿度</div>
          <div class="dvalue">{{ $store.state.now.humidity }}%</div>
        </div>
      </div>
      <div class="detl-item">
        <div class="dimg">
          <img :src="airpre" />
        </div>
        <div>
          <div class="dkey">气压</div>
          <div class="dvalue">{{ $store.state.now.pressure }}hPa</div>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import Card from './card.vue'
const temp = require('@/assets/img/detlpage/temp.png')
const mintemp = require('@/assets/img/detlpage/mintemp.png')
const maxtemp = require('@/assets/img/detlpage/maxtemp.png')
const windir = require('@/assets/img/detlpage/windir.png')
const humidity = require('@/assets/img/detlpage/humidity.png')
const airpre = require('@/assets/img/detlpage/airpre.png')

export default {
  components: { Card },
  data() {
    return {
      temp,
      mintemp,
      maxtemp,
      windir,
      humidity,
      airpre,
    }
  },
}
</script>

<style lang="scss" scoped>
.detl {
  padding: 8px 0;
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .detl-item {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .dimg {
      margin-right: 2px;
      width: 24px;
      height: 24px;
      img {
        width: 100%;
      }
    }
    .dkey {
      width: 70px;
      font-size: 14px;
      color: #f88c79;
    }
    .dvalue {
      padding-top: 2px;
      font-size: 12px;
      color: #6e6e6e;
    }
  }
}
</style>
