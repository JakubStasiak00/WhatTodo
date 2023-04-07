<template>
    <header class="header">
        <h1 class="header__logo">What Todo ?</h1>
        <div class="header__menu">{{ userStore.user }}</div>
    </header>

    <main class="main">
        <RouterView />
    </main>
</template>

<script setup>
    import { useUserStore } from './stores/userStore'

    const userStore = useUserStore()

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