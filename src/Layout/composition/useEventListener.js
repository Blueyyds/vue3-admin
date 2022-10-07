import { onMounted, onUnmounted } from 'vue'

export function useEventListener(event, cb) {
  onMounted(() => {
    window.addEventListener(event, cb)
  })
  onUnmounted(() => {
    window.removeEventListener(event, cb)
  })
}
