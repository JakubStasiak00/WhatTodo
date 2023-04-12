<template>
    <form action="" name="register" class="register" @submit.prevent="handleRegister">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required v-model="email">

        <label for="password">Password</label>
        <input type="password" name="password" id="password" required v-model="passwd">

        <button> Register </button>
    </form>
    <div class="go-to-login"> Already have an account ? <span @click="goToLogin"> Login </span></div>
    <div v-if="error"> {{ error }} </div>
</template>

<script setup>
import { ref } from 'vue';
import useSignup from '../composables/userRegister'
import { useRouter } from 'vue-router'

    const email = ref(null)
    const passwd = ref(null)
    const { createUser, error } = useSignup()
    const router = useRouter()

    const handleRegister = async () => {
        await createUser(email.value, passwd.value)
        
        if(!error.value) {
            router.push('/')
        }
    }

    const goToLogin = () => {
        router.push('/login')
    }

</script>

<style lang="scss" scoped>

</style>