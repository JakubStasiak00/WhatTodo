<template>
    <button @click="isAddOpen = !isAddOpen">Create New Todo</button>

    <form class="add-todo" @submit.prevent="handleAddingTodo(formData)" v-if="isAddOpen">
        <label for="">Task: </label>
        <input type="text" name="" id="" v-model="formData.task"><br>

        <label for="">Priority: </label>
        <select name="" id="" v-model="formData.priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select><br>

        <label for="">Due to: </label>
        <input type="date" name="" id="" v-model="formData.date"><br>

        <button>Add Todo</button>
    </form>
    <Task @add-to-fav="handleAddingToFav" @delete-task="handleDeletingTask" v-for="task in tasks" :key="task.id" :taskData="task" />
</template>

<script setup>

import { collection, onSnapshot, doc, setDoc, updateDoc, deleteDoc } from '@firebase/firestore';
import { useUserStore } from '../stores/userStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { db } from '../assets/firebase/main';
import { onMounted, ref } from 'vue';
import Task from '../components/Task.vue';

const userStore = useUserStore();
const router = useRouter()
const { username, uid } = storeToRefs(userStore)
const tasks = ref([])
const isAddOpen = ref(false)
const formData = ref({
    task: '',
    priority: '',
    date: null
})

if (!username.value) {
    router.push('/login')
}

const handleAddingTodo = async (d) => {
    const collectionRef = collection(db, uid.value)
    const dueDate = new Date(d.date)
    console.log(d, dueDate, collectionRef)

    await setDoc(doc(collectionRef), {
        task: d.task,
        importance: d.priority,
        dueTo: dueDate,
        isFav: false
    })
}

const handleAddingToFav = async data => {
    const docRef = doc(db, uid.value, data.id)
    
    await updateDoc(docRef, {
        isFav: !data.fav
    })
}

const handleDeletingTask = async id => {
    await deleteDoc(doc(db, uid.value, id))
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