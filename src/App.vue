<template>
    <header class="header">
        <h1 @click="isLog" class="header__logo">What Todo ?</h1>
        <nav class="nav inside-header">
            <ul class="nav__list">
                <li v-if="username" class="nav__item"> {{ username }} </li>
                <li v-if="username" class="nav__item" @click="userLogout"> Logout </li>
            </ul>
        </nav>
    </header>

    <main class="main">
        <nav class="nav inside-main">
            <ul class="nav__list">
                <li v-if="username" class="nav__item"> {{ username }} </li>
                <li v-if="username" class="nav__item" @click="userLogout"> Logout </li>
            </ul>
        </nav>
        <RouterView />
    </main>
</template>

<script setup>
import { onAuthStateChanged, signOut } from '@firebase/auth';
import { useUserStore } from './stores/userStore';
import { storeToRefs } from 'pinia';
import { auth } from './assets/firebase/main';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const { username, uid, isAuth } = storeToRefs(userStore)
const router = useRouter()

const isLog = () => {
    console.log(auth.currentUser)
}

const userLogout = () => {
    signOut(auth).then(() => {
        userStore.logout()
        router.push('/login')
    }).catch(err => {

    })
}

onAuthStateChanged(auth, user => {
    if(user){
        userStore.login(user.email, user.uid)
    } else {
        router.push('/login')
    }
})

</script>

<style lang="scss" scoped>
.header {

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: sticky;
    top: 0;
    margin-bottom: 0.8rem;
    z-index: 10;
    background-color: rgb(88, 164, 235);
    border-bottom: 2px solid rgb(42, 133, 185);

    &__logo {
        font-size: clamp(1.5rem, calc(1rem + 3vw), 4rem);
        font-family: 'Black Ops One', cursive;
    }
}

.nav {
    & > ul {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
}

.inside-header {
    display: none;
}

.inside-main > ul{
    justify-content: space-evenly;
}
.main {
    margin: 0 auto;
    width: 100%;
    padding: 1rem;
}

@media screen and (min-width: 700px) {
    .header {
        display: flex;
        justify-content: space-between;
        padding-inline: 1rem;

        &__icon {
            font-size: 3rem;
        }
    }

    .main {
        max-width: 30rem;
        box-shadow: 0px 5px 10px -5px rgba(66, 68, 90, 1);
        
        &:has(.wrap){
            margin-top: 20vh
        }
    }

    .inside-header{
        display: block;
    }

    .inside-main {
        display: none;
    }
}
</style>