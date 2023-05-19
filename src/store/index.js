import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import {
  getCitylist,
  getNowData,
  get7DaysData,
  getLifestyle,
} from '@/network/request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuState: false,
    city: 'null', // 默认城市
    cityid: '101230501',
    // positionCity: {
    //   cityname: null,
    //   poscityid: null
    // },
    now: {
      windDir: '北',
      humidity: '50',
      pressure: '1003',
      temperature: '10',
      tempMax: '30',
      tempMin: '20',
      weathername: '晴',
      weathericoncode: '101',
      updatetime: null,
    },
    forecast: {
      days: [],
      weekdays: [],
      wcode: [],
    },
    lifestyle: [],
    selectedCitys: [],
    loadingTip: false,
    posError: false,
  },

  mutations: {
    updateWeather(state, payload) {
      state.city = payload.ctn.data.location[0].name
      state.cityid = payload.ctn.data.location[0].id
      state.now.temperature = payload.res1.data.now.temp
      state.now.weathername = payload.res1.data.now.text
      state.now.windDir = payload.res1.data.now.windDir
      state.now.humidity = payload.res1.data.now.humidity
      state.now.pressure = payload.res1.data.now.pressure
      state.now.weathericoncode = payload.res1.data.now.icon
      state.now.updatetime = new Date().toTimeString().substr(0, 5)
      state.forecast.days = payload.res2.data.daily
      state.now.tempMax = state.forecast.days[0].tempMax
      state.now.tempMin = state.forecast.days[0].tempMin

      state.forecast.wcode = [] // 清空原数组 避免误触发多次 造成数组污染
      state.forecast.weekdays = ['今天', '明天']
      const weekDay = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

      for (let i = 2; i < state.forecast.days.length; i++) {
        state.forecast.weekdays.push(
          weekDay[new Date(state.forecast.days[i].fxDate).getDay()]
        )
      }
      for (let i = 0; i < state.forecast.days.length; i++) {
        state.forecast.wcode.push(state.forecast.days[i].iconDay)
      }
      state.lifestyle = payload.res3.data.daily
      setTimeout(() => {
        this.state.loadingTip = false
      }, 800)
    },
  },
  actions: {
    getWeather(context, pos) {
      this.state.loadingTip = true
      axios
        .all([
          getCitylist(pos),
          getNowData(pos),
          get7DaysData(pos),
          getLifestyle(pos),
        ])
        .then(
          axios.spread((ctn, res1, res2, res3) => {
            context.commit('updateWeather', {
              ctn,
              res1,
              res2,
              res3,
            })
          }),
          (err) => {
            setTimeout(() => {
              this.state.loadingTip = false
              alert('更新失败，请检查网络\n' + err)
            }, 2500)
          }
        )
    },
  },
})
