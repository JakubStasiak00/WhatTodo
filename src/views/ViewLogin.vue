<template>
    <form action="" name="login" class="login" @submit.prevent="handleLogin">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required v-model="email">

        <label for="password">Password</label>
        <input type="password" name="password" id="password" required v-model="passwd">

        <button> Login </button>
    </form>
    <div v-if="error"> {{ error }} </div>
</template>

<script setup>

import { ref } from 'vue'
import useLogin from '../composables/userLogin'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'
import { auth } from '../assets/firebase/main'
import { storeToRefs } from 'pinia'

    const email = ref(null)
    const passwd = ref(null)
    const { loginUser, error } = useLogin()
    const router = useRouter()
    const userStore = useUserStore()
    const { username, uid } = storeToRefs(userStore)


    const handleLogin = async () => {
        await loginUser(email.value, passwd.value)
        
        if(!error.value) {
            username.value = auth.currentUser.email
            uid.value = auth.currentUser.uid
            router.push('/')
        }
    }
</script>

<style lang="scss" scoped>

</style>