import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('/@/views/home/index.vue')
    },
    {
        path: '/defineProperty',
        name: 'defineProperty',
        component: () => import('/@/views/DefineProperty.vue')
    },
    {
        path: '/definePropertyArray',
        name: 'definePropertyArray',
        component: () => import('/@/views/DefinePropertyArray.vue')
    },
    {
        path: '/definePropertyObject',
        name: 'definePropertyObject',
        component: () => import('/@/views/DefinePropertyObject.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router;
