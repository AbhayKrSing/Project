import { CreateUserWithEmailAndPassword, auth, SignInWithEmailAndPassword } from '../../Firebase/Firebase'

const Authenticate = (state = '', action) => {
    switch (action.type) {
        case 'signup':
            const createduser = CreateUserWithEmailAndPassword(auth, action.payload.email, action.payload.password)
            return createduser
        case 'login':
            const loginuser = SignInWithEmailAndPassword(auth, action.payload.email, action.payload.password)
            return loginuser
        default:
            return state

    }
}

export default Authenticate