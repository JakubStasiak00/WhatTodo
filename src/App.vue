<template>
    <header class="header">
        <h1 @click="isLog" class="header__logo">What Todo ?</h1>
        <nav class="nav">
            <ul class="nav__list">
                <li v-if="username" class="nav__item"> {{ username }} </li>
                <li v-if="username" class="nav__item"> Logout </li>
                <li v-if="!username" class="nav__item"> Login </li>
                <li v-if="!username" class="nav__item"> Register </li>
            </ul>
        </nav>
    </header>

    <main class="main">
        <RouterView />
    </main>
</template>

<script setup>
import { useUserStore } from './stores/userStore';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { username } = storeToRefs(userStore)

</script>

<style lang="scss" scoped>
.header {

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

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
    }
}
</style>