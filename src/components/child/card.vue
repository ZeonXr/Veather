<template>
  <div class="card">
    <h5 class="title">{{ title }}</h5>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style>
.card {
  box-sizing: border-box;
  margin: 10px 0;
  padding: 0 26px;
  padding-bottom: 14px;
  width: 100%;
  background: #ffffff80;
  box-shadow: 0 8px 32px 0 #1f26875e;
  border-radius: 18px;
  border: 1px solid #ffffff6c;
}
.card > h5.title {
  text-align: left;
  margin: 16px 0;
  color: #646464;
}
</style>