<template>
  <card title="生活指数">
    <div class="life-guide">
      <div
        class="guide-item"
        v-for="(item, index) in $store.state.lifestyle"
        :key="index"
      >
        <div class="gkey">{{ item.name }}</div>
        <div class="gvalue">{{ item.category }}</div>
      </div>
    </div>
  </card>
</template>

<script>
import Card from './card.vue'

export default {
  components: { Card },
}
</script>

<style>
.life-guide {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.guide-item {
  margin: 8px 0;
  text-align: center;
}

.guide-item .gkey {
  font-size: 18px;
  color: #f88c79;
}

.guide-item .gvalue {
  padding-top: 8px;
  font-size: 14px;
  color: #414141;
}
</style>
