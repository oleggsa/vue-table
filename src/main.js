import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import vuex from 'vuex'
import store from './store'
import router from './router/router'
import debounce from './utils/debounce'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

createApp(App)
    .use(vuex)
    .use(store)
    .use(ElementPlus)
    .use(router)
    .use(debounce)
    .mount('#app')