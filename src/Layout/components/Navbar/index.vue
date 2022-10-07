<template>
  <div>
    <div class="navbar" :style="styleObj">
      <div class="navbar-left" v-if="appStore.hiddenSidebar">
        <el-icon style="cursor: pointer" :size="22" color="#409EFF">
          <Expand @click="openDrawer" />
        </el-icon>
      </div>
      <div v-else></div>
      <Panel />
    </div>

    <el-drawer
      v-model="drawer"
      direction="ltr"
      :show-close="false"
      :with-header="false"
      @close="closeDrawer"
      :size="240"
    >
      <Sidebar />
    </el-drawer>
  </div>
</template>

<script setup>
import Panel from './Panel.vue'
import useAppStore from '@/stores/app'
import { computed } from 'vue'
import Sidebar from '../Sidebar/index.vue'

const appStore = useAppStore()
const styleObj = computed(() => {
  if (appStore.hiddenSidebar) {
    return {
      margin: '0 0 0 0',
      'background-color': '#FFFFFF',
    }
  } else {
    return null
  }
})
const openDrawer = () => {
  if (appStore.hiddenSidebar) {
    appStore.sidebar.opened = true
  }
}
const closeDrawer = () => {
  if (appStore.hiddenSidebar) {
    appStore.sidebar.opened = false
  }
}
const drawer = computed(() => {
  return appStore.hiddenSidebar && appStore.sidebar.opened
})
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  margin: 20px 16px 0;

  display: flex;
  justify-content: space-between;

  .navbar-left {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 16px;

    svg {
      pointer-events: all !important;
    }
  }
}
</style>

<style>
.el-drawer__body {
  padding: 0 !important;
}
</style>
