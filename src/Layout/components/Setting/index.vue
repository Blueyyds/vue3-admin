<template>
  <div class="drawer-container">
    <div>
      <el-divider content-position="center">Global</el-divider>
      <div class="drawer-item">
        <span>Toggle Theme</span>
        <ToggleTheme style="float: right" />
      </div>

      <div class="drawer-item">
        <span>Open Tags-View</span>
        <el-switch v-model="tagsView" class="drawer-switch" />
      </div>

      <div class="drawer-item">
        <span>Fixed Header</span>
        <el-switch v-model="fixedHeader" class="drawer-switch" />
      </div>

      <div class="drawer-item">
        <span>Sidebar Logo</span>
        <el-switch v-model="sidebarLogo" class="drawer-switch" />
      </div>
    </div>
  </div>
</template>

<script setup>
import useSettingStore from '@/stores/settings'
import ToggleTheme from '@/components/ToggleTheme/index.vue'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const settingStore = useSettingStore()
let { fixedHeader, tagsView, sidebarLogo } = storeToRefs(settingStore)
watch(fixedHeader, value => {
  fixedHeader = value
})
watch(tagsView, value => {
  tagsView = value
})
watch(sidebarLogo, value => {
  sidebarLogo = value
})
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  padding-top: 0;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right;
  }
}
</style>
