<template>
    <form action="" name="register" class="register" @submit.prevent="handleRegister">

        <input type="email" name="email" id="email" required v-model="email" placeholder="email">

        <input type="password" name="password" id="password" required v-model="passwd" placeholder="password">

        <input type="password" name="repeatPassword" id="repeatPassword" required v-model="repPasswd"
            placeholder="repeat password">

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
const repPasswd = ref(null)
const { createUser, error } = useSignup()
const router = useRouter()

const handleRegister = async () => {
    try {
        if (passwd.value !== repPasswd.value) {
            throw new Error("both password fields have to match !")
        }
        await createUser(email.value, passwd.value)

        if (!error.value) {
            router.push('/')
        }
    } catch(err) {
        error.value = err.message
    }
        
    }

const goToLogin = () => {
    router.push('/login')
}

</script>

<style lang="scss" scoped></style>