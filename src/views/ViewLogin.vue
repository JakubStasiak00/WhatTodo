<template>
    <h2>Login</h2>
    <form action="" name="login" class="login" @submit.prevent="handleLogin">

        <input type="email" name="email" id="email" required v-model="email" placeholder="email">

        <input type="password" name="password" id="password" required v-model="passwd" placeholder="password">

        <label for="persist">Remember me</label>
        <input type="checkbox" name="persist" id="persist" v-model="isPersisting">

        <button> Login </button>
    </form>
    <div class="go-to-register">No account yet ? <span @click="goToRegister"> Register </span></div>
    <div v-if="error"> {{ error }} </div>
</template>

<script setup>

import { onBeforeUnmount, ref } from 'vue'
import useLogin from '../composables/userLogin'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'
import { auth } from '../assets/firebase/main'
import { storeToRefs } from 'pinia'
import { browserLocalPersistence, onAuthStateChanged, setPersistence } from '@firebase/auth'

const email = ref(null)
const passwd = ref(null)
const { loginUser, error } = useLogin()
const router = useRouter()
const userStore = useUserStore()
const { username, uid, isAuth } = storeToRefs(userStore)
const isPersisting = ref(false)

const handleLogin = async () => {
    await loginUser(email.value, passwd.value)
}

const goToRegister = () => {
    router.push('/register')
}

const stateAuth = onAuthStateChanged(auth, user => {
    if(!user){
        console.log("ok")
    } else {
        router.push('/')
    }
})

onBeforeUnmount(() => {
    stateAuth()
})

</script>

<style lang="scss" scoped></style>