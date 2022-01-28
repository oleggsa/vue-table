import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import Vuex from 'vuex'
import store from '@/store'
import router from './router/router'
import debounce from './utils/debounce'

createApp(App)
    .use(Vuex)
    .use(store)
    .use(ElementPlus)
    .use(router)
    .use(debounce)
    .mount('#app')