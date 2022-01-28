import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main'
import UserList from '../pages/UserList'
import About from '../pages/About'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/list',
        component: UserList
    },
    {
        path: '/about',
        component: About
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;