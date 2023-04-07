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
        path: "/", 
        component: ViewHome
    },
    {
        path: "/login", 
        component: ViewLogin
    },
    {
        path: "/register", 
        component: ViewRegister
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).use(createPinia()).mount('#app')

