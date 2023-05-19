<template>
  <div class="city-choose">
    <nav-bar class="nav-bar">
      <img class="back-icon" slot="left" @click="backBtn" :src="backIconUrl" />
      <div class="title" slot="center">城市列表</div>
      <img
        class="edit-icon"
        slot="right"
        @click="editBtn"
        :src="editIconUrl"
        v-show="!editState"
        v-if="editBtnHide"
      />
      <img
        class="done-icon"
        slot="right"
        @click="editBtn"
        :src="doneIconUrl"
        v-show="editState"
        v-if="editBtnHide"
      />
    </nav-bar>

    <div class="searchbar">
      <input
        type="text"
        class="search"
        ref="search"
        @focus="getFocus"
        placeholder="输入城市名称"
        v-model.trim="keyword"
      />
      <button v-show="isShow" @click="cancelBtn">取消</button>
    </div>

    <div class="selected-city" v-show="lists == ''">
      <ul>
        <li v-if="this.$store.state.city" @click="jumpTo($store.state.cityid)">
          {{ this.$store.state.city }}
          <img :src="posIconUrl" class="pos-icon" />
          <!-- <div class="delBtn" @click.stop="posDelBtn" v-show="editState">
            删除
          </div> -->
        </li>
        <li
          v-for="(city, index) in $store.state.selectedCitys"
          :key="index"
          @click="jumpTo(city.id)"
        >
          {{ city.name }}
          <div class="delBtn" @click.stop="delBtn(index)" v-show="editState">
            删除
          </div>
        </li>
      </ul>
    </div>

    <div class="city-area" v-show="isShow" ref="resultshow">
      <ul>
        <li
          v-for="item of lists"
          :key="item.id"
          @click="addNewCity(item, item.id)"
        >
          <span>{{ item.name }}</span>
          <span v-if="item.name != item.adm2">，{{ item.adm2 }}</span>
          <span v-if="item.name != item.adm1">，{{ item.adm1 }}</span>
        </li>
        <li class="tip" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import { getCitylist } from '@/network/request'

export default {
  components: {
    NavBar,
  },

  data() {
    return {
      isShow: false,
      hasNoData: false,
      editState: false,
      // transState: false,
      editBtnHide: true,
      keyword: '',
      lists: [],
      timer: null,
      backIconUrl: require('@/assets/img/navbar/back.png'),
      editIconUrl: require('@/assets/img/citychoose/edit.png'),
      posIconUrl: require('@/assets/img/citychoose/position.png'),
      doneIconUrl: require('@/assets/img/citychoose/done.png'),
    }
  },
  methods: {
    backBtn() {
      this.$router.back(-1)
    },
    editBtn() {
      this.editState = !this.editState
    },
    getFocus() {
      this.isShow = true
      // this.transState = true;
      this.editBtnHide = false
    },

    cancelBtn() {
      this.isShow = false
      // this.transState = false;
      this.keyword = ''
      this.editBtnHide = true
    },

    addNewCity(city, cityid) {
      this.editBtnHide = true
      this.$store.state.selectedCitys.push(city)
      this.$store.dispatch('getWeather', cityid)
      this.$router.push('/Home')
      this.$store.state.menuState = false
      // this.$store.state.loadingTip = true;
      // setTimeout(() => {
      //   this.$store.state.loadingTip = false;
      // }, 1000);
    },
    jumpTo(cityid) {
      this.$store.dispatch('getWeather', cityid)
      this.$router.push('/Home')
      this.$store.state.menuState = false
      // this.$store.state.loadingTip = true;
      // setTimeout(() => {
      //   this.$store.state.loadingTip = false;
      // }, 1000);
    },
    posDelBtn() {
      this.$store.state.city = null
      this.$store.state.cityid = null
    },
    delBtn(index) {
      this.$store.state.selectedCitys.splice(index, 1)
    },
  },

  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.hasNoData = false
        this.lists = []
      }

      if (!this.keyword) {
        this.lists = []
        return
      }

      this.timer = setTimeout(() => {
        getCitylist(this.keyword).then((res) => {
          if (res.data.code == 404) {
            console.log('您输入的城市不存在')
            this.hasNoData = true
            this.lists = []
          } else {
            let result = []
            for (let i in res.data.location) {
              result.push(res.data.location[i])
            }

            if (!result.length) {
              this.hasNoData = true
            } else {
              this.lists = result
            }
          }
        })
      }, 300)
    },
  },
}
</script>

<style lang="scss" scoped>
.city-choose {
  .nav-bar {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    border-bottom: 0;
  }
}

.searchbar {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  height: 54px;

  background: #ffffff8c;
  border-bottom: 1px solid #ffffff6c;

  button {
    cursor: pointer;
    user-select: none;
    font-size: 14px;
    margin-left: 16px;
    width: 60px;
    height: 32px;
    border: 0;
    border-radius: 20px;
    color: #fff;
    background-color: #1890ff;

    transition: all 0.2s;
    &:hover {
      background-color: #1890ff;
      box-shadow: 0 0 8px 4px #319afc33;
    }

    &:active {
      background-color: #1974ec;
      box-shadow: 0 0 8px 4px #49a3f833;
    }
  }
}

.search {
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  padding-left: 32px;
  border: 1px solid #777777;
  border-radius: 16px;

  color: #414141;
  font-size: 14px;
  list-style: none;

  transition: all 0.3s;
  background: url('../assets/img/citychoose/search.png') no-repeat;
  background-size: 18px 18px;
  background-position: 8px 50%;

  &:hover {
    border-color: #40a9ff;
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #1890ff33;
    border-color: #40a9ff;
  }
}

.city-area {
  width: 100%;
  background-color: #ffffff2c;

  ul {
    li {
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding-left: 30px;
      margin: 0;
      color: #414141;
      border-bottom: 1px solid #ffffff6c;
      cursor: pointer;
    }
    li.tip {
      text-align: center;
    }
  }
}

.selected-city {
  ul {
    margin: 0 30px;

    li {
      box-sizing: border-box;
      margin: 0;
      padding-left: 10px;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ffffff6c;
      position: relative;
      color: #414141;
      cursor: pointer;
      &:first-child {
        border-top: 1px solid #ffffff6c;
      }
    }
  }
  .delBtn {
    width: 50px;
    line-height: 26px;
    text-align: center;
    position: absolute;
    top: 10px;
    right: 4px;
    color: #ff7e7e;
    font-size: 14px;
    border: 1px solid #ff7e7e;
    border-radius: 16px;
    cursor: pointer;
  }
  .pos-icon {
    margin-left: 4px;
    height: 18px;
    vertical-align: sub;
  }
}
</style>
