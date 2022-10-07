import { defineStore } from 'pinia'

const useTagsViewStore = defineStore('TagsView', {
  state: () => ({
    visitedViews: [],
    cachedViews: [],
  }),
  getters: {},
  actions: {
    addVisitedView(view) {
      if (this.visitedViews.some(v => v.path === view.path)) return
      this.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || 'no-name',
        })
      )
    },
  },
})

export default useTagsViewStore
