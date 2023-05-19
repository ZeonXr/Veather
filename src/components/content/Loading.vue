<template>
  <div class="loading">
    <div class="toast">
      <img :src="icon" />
      <div class="tips">获取天气数据 ...</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: require('@/assets/img/app/loading.png'),
    }
  },
}
</script>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 100;
  color: #414141;

  background: #ffffff05;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.toast {
  padding-bottom: 30px;
}
.toast img {
  height: 30px;
  width: 30px;
  margin-bottom: 10px;
  animation: rotate 1.2s linear infinite;
}
.toast .tips {
  text-indent: 14px;
  font-size: 14px;
}
</style>
