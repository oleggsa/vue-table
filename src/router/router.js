import { createRouter, createWebHistory } from 'vue-router'
const Main = () => import('../pages/Main')
const UserList = () => import('../pages/UserList')
const About = () => import('../pages/About')
const User = () => import('../pages/User')
const NotFound = () => import('../pages/NotFound')


const routes = [
    {
        path: '/',
        component: Main,
        meta: { title: 'Home Page' }
    },
    {
        path: '/list',
        component: UserList,
        meta: { title: 'User List' }
    },
    {
        path: '/list/:id',
        component: User,
        meta: { title: 'User Info' }
    },
    {
        path: '/about',
        component: About,
        meta: { title: 'About' }
    },
    {
        path: '/404',
        component: NotFound,
        meta: { title: 'Not found' }
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404'
    }
]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;