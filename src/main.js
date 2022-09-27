import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

//TODO Auto Import Vue Icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//TODO Import i18n Plugin
import i18n from '@/plugins/i18n'
app.use(i18n, {
  greetings: {
    hello: 'Blue798',
  },
})

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
