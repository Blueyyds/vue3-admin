<script setup>
import { computed } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import useSettingStore from './stores/settings'

const settingStore = useSettingStore()
const locale = computed(() => (settingStore.locale === 'zhCn' ? zhCn : en))
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<style lang="scss">
.el-main {
  padding: 0;
}
</style>
