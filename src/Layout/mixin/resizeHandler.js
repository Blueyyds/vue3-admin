import useAppStore from '@/stores/app'

const { body } = document
const WIDTH = 992

export default {
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    const appStore = useAppStore()
    console.log(appStore.device)
    const isMobile = this.$_isMobile()
    if (isMobile) {
      appStore.closeSidebar({ withoutAnimation: true })
      appStore.toggleDevice('mobile')
    }
  },
  watch: {
    $route() {
      const appStore = useAppStore()
      // console.log(appStore)
      if (appStore.device === 'mobile' && appStore.sidebar.opened) {
        appStore.closeSidebar({ withoutAnimation: false })
      }
    },
  },
  methods: {
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_resizeHandler() {
      const appStore = useAppStore()
      console.log(appStore.sidebar)
      if (!document.hidden) {
        const isMobile = this.$_isMobile()
        appStore.toggleDevice(isMobile ? 'mobile' : 'desktop')
        if (isMobile) {
          console.log('closeSidebar')
          appStore.closeSidebar({ withoutAnimation: true })
        }
      }
      console.log(appStore.device)
    },
  },
}
