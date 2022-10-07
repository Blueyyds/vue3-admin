<template>
  <div class="app-main">
    <keep-alive>
      <el-scrollbar>
        <transition name="fade-transform">
          <router-view :key="key"></router-view>
        </transition>
      </el-scrollbar>
    </keep-alive>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const key = computed(() => route.path)
</script>

<style lang="scss" scoped>
.app-main {
  height: 100%;
  .el-scrollbar {
    height: 100%;
    padding: 16px;
  }
}
</style>
