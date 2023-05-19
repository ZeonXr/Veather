<template>
  <card title="每日预报">
    <ul class="day7-forecast">
      <li v-for="(day, index) in $store.state.forecast.days" :key="index">
        <span class="wdate">
          <span>
            {{ $store.state.forecast.weekdays[index] }}
          </span>
          <i class="split"></i>
          <span>
            {{
              $store.state.forecast.days[index].fxDate
                .substr(5, 5)
                .replace('-', '/')
            }}
          </span>
        </span>
        <span class="wicon">
          <img
            :src="
              require(`@/assets/img/wicon/${$store.state.forecast.wcode[index]}.png`)
            "
          />
        </span>
        <span class="wtemp">
          {{ $store.state.forecast.days[index].tempMin }}° -
          {{ $store.state.forecast.days[index].tempMax }}°
        </span>
      </li>
    </ul>
  </card>
</template>

<script>
import Card from './card.vue'

export default {
  components: { Card },
}
</script>

<style>
.day7-forecast li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 0;
  height: 26px;
  width: 100%;
  color: #414141;
  font-size: 18px;
}

i.split {
  display: inline-block;
  margin: 0 14px;
  margin-top: 2px;
  width: 2px;
  height: 80%;
  border-radius: 1px;
  background-color: #20202080;
}
.day7-forecast li .wdate {
  display: flex;
  align-items: center;
  height: 100%;
}

.day7-forecast li .wicon img {
  width: 24px;
  height: 24px;
  vertical-align: top;
}

.day7-forecast li .wtemp {
  text-align: right;
}
</style>
