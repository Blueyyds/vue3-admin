import jsCookie from 'js-cookie'
import { defineStore } from 'pinia'

const useAppStore = defineStore('App', {
  state: () => ({
    sidebar: {
      opened: false,
    },
  }),
  getters: {},
  actions: {},
})

export default useAppStore
