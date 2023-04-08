<template>
    <div class="todo">
        <i class="material-icons todo__fav" :class="{favorite: taskData.isFav}" @click="taskData.isFav = !taskData.isFav">favorite</i>
        <span class="todo__task">{{ taskData.task }}</span>
        <span class="todo__priority" :class="taskData.importance">{{ taskData.importance }}</span>
    </div>
</template>

<script setup>
    const props = defineProps({
        taskData: Object
    })

    console.log(props.taskData)
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
        background-color: rgba(63, 158, 236, 0.664);
        margin-bottom: 0.5rem;

        &__task {

        }

        &__priority {

        }

        .Low {
            color: green;
        }

        .Medium {
            color: orange;
        }

        .High {
            color: red
        }
    }
</style>