<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nav-bar {
  user-select: none;
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  text-align: center;
  background: #ffffff8c;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid #ffffff6c;

  .left,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    img {
      padding: 6px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    img.back-icon {
      height: 18px;
    }
  }
  .center {
    flex: 1;
    color: #414141;
  }

  .back-icon {
    height: 18px;
  }
}
</style>