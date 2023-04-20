<template>
    <div class="todo">
        <i class="material-icons todo__fav" :class="{favorite: taskData.isFav}" @click="$emit('add-to-fav', {id: taskData.id, fav: taskData.isFav})">favorite</i>
        <span class="todo__task" @click="$emit('delete-task', taskData.id)" >{{ taskData.task }}</span>
        <i class="material-icons-outlined todo-info" @click="toggleInfo" :class="taskData.importance">info</i>
    </div>
    <div class="additional-info" v-if="showInfo">
        <div><span> Priority: </span> {{ taskData.importance }} </div>
        <div v-if="isDate"><span> Due to: </span> {{ formatDate }}</div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        taskData: Object
    })

    const emits = defineEmits(['add-to-fav', 'delete-task'])

    const isDate = ref(false)
    const formatDate = ref('')

    const hasDate = () =>{
        if(props.taskData.dueTo){
            isDate.value = true
            formatDate.value = props.taskData.dueTo
        }
    }
    const showInfo = ref(false)

    const toggleInfo = () => {
        hasDate()
        showInfo.value = !showInfo.value
    }
</script>

<style lang="scss" scoped>
    .favorite {
        color: rgb(228, 42, 88);
    }

    .todo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: rgba(63, 158, 236, 0.342);
        margin-bottom: 0.5rem;

        & > * {
            cursor: pointer;
        }

        &__task {
            max-width: 60%;
            text-align: center;
        }

        &__task:hover {
            text-decoration: line-through;
            cursor: pointer;
        }
        
        .low {
            color: green;
        }

        .medium {
            color: orange;
        }

        .high {
            color: red
        }
    }

    .additional-info {
        display: flex;
        justify-content: space-evenly;
        border-bottom: 1px solid black;
        padding-block: 0.5rem ;
        margin-bottom: 0.5rem;
        span {
            color: #4529c2;
            font-weight: bold;
        }
    }
</style>