import { auth } from '../assets/firebase/main'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

const error = ref(null)
const isPending = ref(false)

const loginUser = async (email, password) => {

    error.value = null
    isPending.value = true


    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        if(!response) {
            throw new Error('login failed, try again later')
        }
        error.value = null
        isPending.value = false
    } catch (err) {
        console.log(err.message)
        error.value = err.message
        isPending.value = false
    }

}

const useLogin = () => {
    return { error, isPending, loginUser}
}

export default useLogin