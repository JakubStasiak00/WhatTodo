import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import App from './App.vue'
import ViewHome from './views/ViewHome.vue'
import ViewLogin from './views/ViewLogin.vue'
import ViewRegister from './views/ViewRegister.vue'

import './assets/styles/main.scss';
import 'material-icons/iconfont/material-icons.css';

const routes = [
    {
        name: 'ViewHome',
        path: "/",
        component: ViewHome
    },
    {
        name: 'ViewLogin',
        path: "/login",
        component: ViewLogin
    },
    {
        name: 'ViewRegister',
        path: "/register",
        component: ViewRegister
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(createPinia()).use(router).mount('#app')

