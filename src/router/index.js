import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/About.vue'),
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import('@/views/Portfolio.vue'),
    },
    {
        path: '/process',
        name: 'Process',
        component: () => import('@/views/Process.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
    },
    {
        path: '/messageboard',
        name: 'MessageBoard',
        component: () => import('@/views/MessageBoard.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'a',
    base: process.env.BASE_URL,
    routes,
})

export default router
