import useAppStore from '@/stores/app'
import { onMounted, onUnmounted } from 'vue'

const { body } = document

export function useResizeHandler() {
  const appStore = useAppStore()

  function isMobile() {
    const rect = +body.getBoundingClientRect().width
    if (rect < 768) {
      appStore.hiddenSidebar = true
      return true
    } else if (rect < 992) {
      appStore.hiddenSidebar = false
      return true
    } else {
      appStore.hiddenSidebar = false
    }
  }

  function resizeHandler() {
    if (!document.hidden) {
      const res = isMobile()
      if (res) {
        appStore.toggleDevice('mobile')
        appStore.closeSidebar({ withoutAnimation: true })
      } else {
        appStore.toggleDevice('desktop')
        if (!appStore.sidebar.opened) {
          appStore.sidebar.opened = true
          console.log('open sidebar')
        }
      }
    }
  }

  onMounted(() => {
    if (!document.hidden) {
      const res = isMobile()
      if (res) {
        appStore.toggleDevice('mobile')
        appStore.closeSidebar({ withoutAnimation: true })
      }
    }
    window.addEventListener('resize', resizeHandler)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', resizeHandler)
  })
}
