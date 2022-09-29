<script setup>
import { computed, ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import useSettingStore from './stores/settings'

const settingStore = useSettingStore()
const language = ref(settingStore.locale === 'zhCn' ? 'en' : 'zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
  // console.log(language.value)
  settingStore.toggleLanguage()
}
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
