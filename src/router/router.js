import { createRouter, createWebHistory } from 'vue-router'
const Main = () => import('../pages/Main')
const UserList = () => import('../pages/UserList')
const About = () => import('../pages/About')

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