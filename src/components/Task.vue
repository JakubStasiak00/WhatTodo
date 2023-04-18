<template>
    <div class="todo">
        <i class="material-icons todo__fav" :class="{favorite: taskData.isFav}" @click="$emit('add-to-fav', {id: taskData.id, fav: taskData.isFav})">favorite</i>
        <span class="todo__task" @click="$emit('delete-task', taskData.id)" :title="compiledDate ? shortenDate : text">{{ taskData.task }}</span>
        <i class="material-icons-outlined todo-info" :class="taskData.importance" :title="taskData.importance">priority_high</i>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        taskData: Object
    })

    const compiledDate = props.taskData.dueTo.toDate().getTime()
    const shortenDate = props.taskData.dueTo.toDate().toDateString()
    const text = 'no Date was set'

    const showInfo = ref(false)
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
</style>