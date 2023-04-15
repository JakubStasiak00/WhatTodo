<template>
    <h2> Register </h2>
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
import { onBeforeUnmount, ref } from 'vue';
import useSignup from '../composables/userRegister'
import { useRouter } from 'vue-router'
import { auth } from '../assets/firebase/main';
import { useUserStore } from '../stores/userStore';
import { onAuthStateChanged } from '@firebase/auth';

const email = ref(null)
const passwd = ref(null)
const repPasswd = ref(null)
const { createUser, error } = useSignup()
const router = useRouter()
const { username, uid, isAuth } = useUserStore()


const handleRegister = async () => {
    try {
        if (passwd.value !== repPasswd.value) {
            throw new Error("both password fields have to match !")
        }
        await createUser(email.value, passwd.value)

        if (!error.value) {
            username.value = auth.currentUser.email
            uid.value = auth.currentUser.uid
            isAuth.value = true
            router.push('/')
        }
    } catch (err) {
        error.value = err.message
    }

}

const goToLogin = () => {
    router.push('/login')
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