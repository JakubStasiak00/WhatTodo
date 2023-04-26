<template>
    <div class="wrapper" v-if="uid">
        <button class="" @click="isAddOpen = !isAddOpen">Create New Todo</button>

        <form class="add-todo" ref="addTodoForm" @submit.prevent="handleAddingTodo(formData)" v-if="isAddOpen">
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
        <div class="sort-todos">
            <div>
                <label for="searchBy">Sort by:</label>
                <select name="searchBy" id="searchBy" v-model="sortBy">
                    <option value=""></option>
                    <option value="priority">Priority</option>
                    <option value="favourites">Favourites</option>
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                </select>
            </div>
            <div>
                <label for="findTask">Search:</label>
                <input type="input" name="findTask" id="findTask" v-model="findTask">
            </div>
        </div>
            <Task @add-to-fav="handleAddingToFav" @delete-task="handleDeletingTask" v-for="task in formatedTasks" :key="task.id" :taskData="task" />
    </div>
</template>

<script setup>

import { collection, onSnapshot, doc, setDoc, updateDoc, deleteDoc } from '@firebase/firestore';
import { useUserStore } from '../stores/userStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { db } from '../assets/firebase/main';
import { ref, onBeforeMount } from 'vue';
import Task from '../components/Task.vue';
import { computed } from '@vue/reactivity';

const userStore = useUserStore();
const { uid } = storeToRefs(userStore)
const router = useRouter()
const tasks = ref([])
const isAddOpen = ref(false)
const formData = ref({
    task: '',
    priority: '',
    date: null
})
const sortBy = ref('')
const findTask = ref('')
const addTodoForm = ref(null)

const comparePrio = (a, b) => {
    if ((a.importance === 'high' && b.importance !== 'high') || (a.importance === 'medium' && b.importance === 'low')) {
        return -1
    } else if ((b.importance === 'high' && a.importance !== 'high') || (b.importance === 'medium' && a.importance === 'low')) {
        return 1
    } else {
        return 0
    }
}

const compareName = (a, b) => {
    let aTask = a.task
    let bTask = b.task

    aTask = typeof aTask === 'string' ? aTask.toLowerCase() : aTask.toString();
    bTask = typeof bTask === 'string' ? bTask.toLowerCase() : bTask.toString();

    return aTask.localeCompare(bTask);
}

const compareDate = (a, b) => {
    let dateOne = new Date(a.dueTo)
    let dateTwo = new Date(b.dueTo)

    console.log(dateOne)

    return dateOne - dateTwo
}

const formatedTasks = computed(() => {
    let tasksBeforeFormat = [...tasks.value]
    let tasksToFormat = [];

    switch (sortBy.value) {
        case 'priority': tasksToFormat = tasksBeforeFormat.sort(comparePrio)
            break

        case 'name': tasksToFormat = tasksBeforeFormat.sort(compareName)
            break

        case 'date': tasksToFormat = tasksBeforeFormat.filter(a => a.dueTo).sort(compareDate) // filtering out dates that were assigned by firebase if user didnt choose due date
            break

        case 'favourites': tasksToFormat = tasksBeforeFormat.sort((a)=> (a.isFav ? -1 : 1)) // filtering out dates that were assigned by firebase if user didnt choose due date
            break

        case '': tasksToFormat = tasks.value
    }

    if (findTask.value) {
        tasksToFormat = tasksToFormat.filter(a => a.task.toLowerCase().includes(findTask.value.toLowerCase()))
    }

    return tasksToFormat
})

const handleAddingTodo = async (d) => {
    const collectionRef = collection(db, uid.value)

    if(d.date) {
        await setDoc(doc(collectionRef), {
        task: d.task,
        importance: d.priority,
        dueTo: d.date,
        isFav: false
    })
    } else {
        await setDoc(doc(collectionRef), {
        task: d.task,
        importance: d.priority,
        isFav: false
    })
    }

    formData.value = {
        task: '',
        priority: '',
        date: null
    }

    isAddOpen.value = false
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

onBeforeMount(() => {
    if (uid.value) {
        loadTodos(uid.value)
    } else {
        router.push('/login')
    }
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

    .sort-todos {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;

        &>div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }
}
</style>