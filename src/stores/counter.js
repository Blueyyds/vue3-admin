import { defineStore } from 'pinia'

const useCounterStore = defineStore('Counter', {
  state: () => ({
    count: 0,
  }),
  getters: {},
  actions: {},
})

export default useCounterStore
