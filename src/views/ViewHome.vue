<template>
    <Task v-for="task in tasks" :key="task.id" :taskData="task" />
</template>

<script setup>

import { collection, onSnapshot } from '@firebase/firestore';
import { useUserStore } from '../stores/userStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { db } from '../assets/firebase/main';
import { onMounted, ref } from 'vue';
import Task from '../components/Task.vue'

const userStore = useUserStore();
const router = useRouter()
const { username, uid } = storeToRefs(userStore)
const tasks = ref([])

if (!username.value) {
    router.push('/login')
}

onMounted(async () => {
    if (!username.value) {
        router.push('/login')
    } else {
        console.log(username, uid)
        const taskRef = collection(db, uid.value)
        const unsubscribe = onSnapshot(taskRef, querySnapshot => {
            tasks.value = []
            querySnapshot.forEach(doc => {
                tasks.value.push({
                    id: doc.id,
                    task: doc.data().task,
                    isFav: doc.data().isFav,
                    dueTo: doc.data().dueTo,
                    importance: doc.data().importance
                })
            })
        })
    }
})

</script>

<style lang="scss" scoped></style>