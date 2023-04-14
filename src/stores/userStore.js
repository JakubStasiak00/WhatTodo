import { defineStore } from "pinia"

export const useUserStore = defineStore('userStore', {
    state: () => ({
        username: "",
        uid: "",
        isAuth: false
    })
})

