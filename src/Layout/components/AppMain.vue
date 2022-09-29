<template>
  <div class="app-main">
    <keep-alive>
      <el-scrollbar :height="height">
        <router-view></router-view>
      </el-scrollbar>
    </keep-alive>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const height = ref(window.innerHeight - 103)
</script>

<style lang="scss" scoped>
.app-main {
  .el-scrollbar {
    padding: 16px;
  }
}
</style>
