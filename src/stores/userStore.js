import { defineStore } from "pinia"

export const useUserStore = defineStore('userStore', {
    state: () => ({
        username: "",
        uid: "",
        isAuth: false
    }),
    actions: {

        login(username, uid) {
            this.username = username
            this.uid = uid
            this.isAuth = true
        },

        logout(){
            this.username = ''
            this.uid = ''
            this.isAuth = false
        }
    }
})

