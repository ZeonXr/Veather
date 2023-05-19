<template>
  <div class="about">
    <nav-bar>
      <img class="back-icon" slot="left" @click="backBtn" :src="backIconUrl" />
      <div slot="center">关于</div>
    </nav-bar>
    <main>
      <div class="intro">
        <h1>欢迎</h1>
        <p>基于 Vue.js 框架开发<br />气象数据来源于和风天气 api</p>
        <a class="github-icon" href="https://github.com/ZevilL" target="_blank">
          <img :src="githubicon" />
          <span>ZeviL</span>
        </a>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      backIconUrl: require('@/assets/img/navbar/back.png'),
      githubicon: require('@/assets/img/app/github.png'),
    }
  },
  methods: {
    backBtn() {
      this.$router.back(-1)
    },
  },
}
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  text-align: center;
  color: #414141;
  .intro {
    p {
      margin: 0 auto;
      margin-bottom: 100px;
      width: 260px;
      line-height: 1.5rem;
      text-align: center;
    }
    div {
      margin: 16px 0;
      font-weight: 400;
    }
    .github-icon {
      user-select: none;
      cursor: pointer;

      display: inline-block;
      margin: 0 auto;
      padding: 4px 6px;
      height: 20px;
      border-radius: 16px;
      background-color: #ffffff80;
      text-decoration: none;
      color: #414141;
      img {
        float: left;
        height: 100%;
      }
      span {
        float: right;
        margin: 0 6px;
        margin-top: 1px;
        line-height: 20px;
        font-size: 12px;
      }
    }
  }
}
</style>
