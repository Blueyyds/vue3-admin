<template>
  <div class="sidebar-container">
    <Logo />
    <el-scrollbar :height="height">
      <el-menu default-active="2" :collapse="isCollapse">
        <el-menu-item index="1">
          <el-icon><Location /></el-icon>
          <span>Navigator One</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><IconMenu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><Document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><Setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import useAppStore from '@/stores/app'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { computed, ref } from 'vue'
import Logo from './logo.vue'

const height = ref(window.innerHeight - 85)
const appStore = useAppStore()
const isCollapse = computed(() => {
  return !appStore.sidebar.opened
})
</script>

<style lang="scss">
.sidebar-container {
  .el-scrollbar {
    padding: 0 !important;
    background-color: #fff !important;

    .el-menu {
      border-radius: 4px;
      border-right: none;
    }
  }
}
</style>
