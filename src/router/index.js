import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import index from '../views/index.vue'

const routes = [
    {
        path: '',
        name: '',
        component: index
    },
    {
        path: '/index',
        name: 'index',
        component: index
    },
    {
        path: '/About',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
