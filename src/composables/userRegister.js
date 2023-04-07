import { auth } from '../assets/firebase/main'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

const error = ref(null)
const isPending = ref(false)

const createUser = async (email, password) => {

    error.value = null
    isPending.value = true


    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        if(!response) {
            throw new Error('signup failed, try again later')
        }

        error.value = null
        isPending.value = false
    } catch (err) {
        console.log(err.message)
        error.value = err.message
        isPending.value = false
    }

}

const useSignup = () => {
    return { error, isPending, createUser}
}

export default useSignup