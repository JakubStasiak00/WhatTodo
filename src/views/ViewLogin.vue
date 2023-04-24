<template>
    <div class="wrap" v-if="!userStore.uid">
        <h2>Login</h2>
        <form action="" name="login" class="login" @submit.prevent="handleLogin">

            <input type="email" name="email" id="email" required v-model="email" placeholder="email">

            <input type="password" name="password" id="password" required v-model="passwd" placeholder="password">

            <button> Login </button>
        </form>
        <div class="go-to-register">No account yet ? <router-link to="/register"> Register </router-link></div>
        <div v-if="error"> {{ error }} </div>
    </div>
</template>

<script setup>

import { onBeforeUnmount, ref } from 'vue'
import useLogin from '../composables/userLogin'
import { useUserStore } from '../stores/userStore'
import { useRouter } from 'vue-router'
import { auth } from '../assets/firebase/main'
import { onAuthStateChanged } from '@firebase/auth'

const userStore = useUserStore()
const email = ref(null)
const passwd = ref(null)
const { loginUser, error } = useLogin()
const router = useRouter()

const handleLogin = async () => {
    await loginUser(email.value, passwd.value)
}

const stateAuth = onAuthStateChanged(auth, user => {
    if (user) {
        router.push('/')
    }
})

onBeforeUnmount(() => {
    stateAuth()
})

</script>

<style lang="scss" scoped>

.wrap {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    input, button {
        width: 100%;
    }
}
</style>