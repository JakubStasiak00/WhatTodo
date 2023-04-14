<template>
    <h2>Login</h2>
    <form action="" name="login" class="login" @submit.prevent="handleLogin">

        <input type="email" name="email" id="email" required v-model="email" placeholder="email">

        <input type="password" name="password" id="password" required v-model="passwd" placeholder="password">

        <input type="checkbox" name="persist" id="persist" v-model="isPersisting">

        <button> Login </button>
    </form>
    <div class="go-to-register">No account yet ? <span @click="goToRegister"> Register </span></div>
    <div v-if="error"> {{ error }} </div>
</template>

<script setup>

import { ref } from 'vue'
import useLogin from '../composables/userLogin'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'
import { auth } from '../assets/firebase/main'
import { storeToRefs } from 'pinia'
import { browserLocalPersistence, setPersistence } from '@firebase/auth'

const email = ref(null)
const passwd = ref(null)
const { loginUser, error } = useLogin()
const router = useRouter()
const userStore = useUserStore()
const { username, uid } = storeToRefs(userStore)
const isPersisting = ref(false)


const handleLogin = async () => {
    await loginUser(email.value, passwd.value)

    try {
        if (isPersisting) {
            setPersistence(auth, browserLocalPersistence)
                .then(() => {
                    console.log('persistance set succesfully')
                })
                .catch(err => {
                    error.value = err.message
                })
        }
        username.value = auth.currentUser.email
        uid.value = auth.currentUser.uid
        router.push('/')
    }
    catch (err) {
        error.value = err.message
    }
}

const goToRegister = () => {
    router.push('/register')
}
</script>

<style lang="scss" scoped></style>