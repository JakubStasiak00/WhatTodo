<template>
    <div class="todo">
        <div class="todo__icons">
            <i class="material-icons todo__fav" :class="{favorite: taskData.isFav}" @click="$emit('add-to-fav', {id: taskData.id, fav: taskData.isFav})">favorite</i>
            <i class="material-icons-outlined todo-info" @click="toggleInfo" :class="taskData.importance">info</i>
        </div>
        <span class="todo__task">{{ taskData.task }}</span>
        <i class="material-icons-outlined todo__delete" @click="$emit('delete-task', taskData.id)">delete</i>
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
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        padding: 1rem;
        background-color: rgba(63, 158, 236, 0.342);
        margin-bottom: 0.5rem;
        gap: 1.5rem;

        &  i {
            cursor: pointer;
        }

        &  i:hover {
            transform: scale(1.2);
        }

        &__task {
            text-align: center;
        }   

        &__icons {
            display: flex;
            gap: 0.5rem;
        }

        &__delete:hover {
            color: red;
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