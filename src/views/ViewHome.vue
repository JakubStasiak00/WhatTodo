<template>
    <div class="wrapper">
        <button class="" @click="isAddOpen = !isAddOpen">Create New Todo</button>

        <form class="add-todo" @submit.prevent="handleAddingTodo(formData)" v-if="isAddOpen">
            <label for="task">Task: </label>
            <input required type="text" name="task" id="task" v-model="formData.task">

            <label for="priority">Priority: </label>
            <select required name="priority" id="priority" v-model="formData.priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <label for="">Due to: </label>
            <input type="date" name="" id="" v-model="formData.date">

            <button>Add Todo</button>
        </form>
        <Task @add-to-fav="handleAddingToFav" @delete-task="handleDeletingTask" v-for="task in tasks" :key="task.id"
            :taskData="task" />
    </div>
</template>

<script setup>

import { collection, onSnapshot, doc, setDoc, updateDoc, deleteDoc } from '@firebase/firestore';
import { useUserStore } from '../stores/userStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { auth, db } from '../assets/firebase/main';
import { onBeforeUnmount, ref } from 'vue';
import Task from '../components/Task.vue';
import { onAuthStateChanged } from '@firebase/auth';

const userStore = useUserStore();
const { username, uid } = storeToRefs(userStore)
const router = useRouter()
const tasks = ref([])
const isAddOpen = ref(false)
const formData = ref({
    task: '',
    priority: '',
    date: null
})

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

const loadTodos = async (uid) => {
    const taskRef = collection(db, uid)
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

const stateAuth = onAuthStateChanged(auth, user => {
    if(user){
        loadTodos(user.uid)
    } else {
        router.push('/login')
    }
})

onBeforeUnmount(() => {
    stateAuth()
})

</script>

<style lang="scss" scoped>
.wrapper {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;

    .add-todo {
        display: flex;
        flex-direction: column;
        margin-inline: auto;

        input,
        select {
            max-width: 12rem;
            align-self: stretch;
        }
    }
}
</style>