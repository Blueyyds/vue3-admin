import { defineStore } from 'pinia'
import settings from '@/settings'
let { showSettings, tagsView, fixedHeader, sidebarLogo } = settings
import i18n from '@/locale'
import Cookies from 'js-cookie'

console.log('in store,', Cookies.get('locale'))

const useSettingStore = defineStore('Setting', {
  state: () => ({
    showSettings,
    tagsView,
    fixedHeader,
    sidebarLogo,
    locale: i18n.global.locale,
    theme: Cookies.get('theme') || 'light',
  }),
  getters: {},
  actions: {
    setLocale(locale) {
      if (this.locale === locale) return
      this.locale = locale
      i18n.global.locale = locale
    },
  },
})

export default useSettingStore
