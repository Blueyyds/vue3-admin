<template>
  <div
    style="
      background-color: #fcfcfc;
      padding: 10px;
      display: flex;
      align-items: center;
      height: 52px;
    "
    :style="{ 'justify-content': isCollapse ? 'center' : 'space-between' }"
  >
    <div style="display: flex; align-items: center" v-show="!isCollapse">
      <img
        style="height: 30px; margin-right: 8px"
        src="https://demo.buildadmin.com/assets/logo.8000aeec.png"
        alt=""
      />
      <span class="title">LabAdmin</span>
    </div>
    <el-icon
      style="cursor: pointer"
      :size="22"
      color="rgb(64 158 255)"
      @click="toggleSidebar"
    >
      <Fold v-show="!isCollapse" />
      <Expand v-show="isCollapse" />
    </el-icon>
  </div>
</template>

<script setup>
import useAppStore from '@/stores/app'
import { computed } from 'vue'

const appStore = useAppStore()

const toggleSidebar = () => {
  appStore.toggleSidebar()
}

const isCollapse = computed(() => {
  return !appStore.sidebar.opened
})
</script>

<style lang="scss" scoped>
$main-color: rgb(64 158 255);

.title {
  font-size: 20px;
  color: $main-color;
}
</style>
