import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/services',
        name: 'Services',
        component: () => import('../views/Services.vue')
    },
    {
        path: '/works',
        name: 'Works',
        component: () => import('../views/Works.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
})


export default router;