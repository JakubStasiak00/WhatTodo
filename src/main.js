import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import App from './App.vue'
import ViewHome from './views/ViewHome.vue'
import ViewLogin from './views/ViewLogin.vue'
import ViewRegister from './views/ViewRegister.vue'

import './assets/styles/main.scss';
import 'material-icons/iconfont/material-icons.css';

import { auth } from './assets/firebase/main'

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

router.beforeEach((to, from, next) => {
    auth.onAuthStateChanged(user => {
      if (user && (to.path === '/login' || to.path === '/register')) {
        next('/')
        return
      } else if (!user && to.path === '/' ) {
        next('/login')
        return
      }
      next()
    })
  })


createApp(App).use(createPinia()).use(router).mount('#app')

