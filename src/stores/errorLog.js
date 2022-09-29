import { defineStore } from 'pinia'

const useErrorLogStore = defineStore('ErrorLog', {
  state: () => ({
    logs: [],
  }),
  getters: {},
  actions: {
    addErrorLog: log => {
      this.logs.push(log)
    },
    clearErrorLog: () => {
      this.logs.splice(0)
    },
  },
})

export default useErrorLogStore
