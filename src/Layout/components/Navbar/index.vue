<template>
  <div class="navbar">
    <div></div>
    <Panel />
  </div>
</template>

<script setup>
import Panel from './components/Panel.vue'
</script>

<style lang="scss" scoped>
.navbar {
  margin: 16px;
  width: calc(100% - 32px);
  height: 50px;

  display: flex;
  justify-content: space-between;
}
</style>
