import { defineStore } from 'pinia'
import settings from '@/settings'
let { showSettings, tagsView, fixedHeader, sidebarLogo } = settings
import i18n from '@/locale'

const useSettingStore = defineStore('Setting', {
  state: () => ({
    showSettings,
    tagsView,
    fixedHeader,
    sidebarLogo,
    locale: i18n.global.locale,
  }),
  getters: {},
  actions: {
    toggleLanguage() {
      this.locale = this.locale === 'zhCn' ? 'en' : 'zhCn'
    },
  },
})

export default useSettingStore
