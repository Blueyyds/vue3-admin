import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import '@/styles/index.scss';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/display.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

import './permisson'; // permission control

//TODO Auto Import Vue Icon (All Icons)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

//TODO Import SvgIcon
import 'virtual:svg-icons-register';

//TODO Registe i18n
import i18n from './locale';
app.use(i18n);

app.use(createPinia());
app.use(ElementPlus);
app.use(router);

app.mount('#app');

export default app;
