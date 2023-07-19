//Read https://www.geeksforgeeks.org/what-is-the-use-of-middleware-redux-thunk/ --->To understand how to use thunk in asynchronous operation.
import { CreateUserWithEmailAndPassword, auth, SignInWithEmailAndPassword, OnAuthStateChanged, SignOut } from '../../Firebase/Firebase'
export const signup = (email, password) => {
    return async (dispatch) => {
        try {
            const createduser = await CreateUserWithEmailAndPassword(auth, email, password)
            dispatch({          //dispatch karte hi reducer ko call jayega
                type: 'signup',
                payload: createduser
            })
        } catch (error) {
            console.log(error.message)
        }
    }

}
export const login = (email, password) => {
    return async (dispatch) => {
        try {
            const loginuser = await SignInWithEmailAndPassword(auth, email, password)
            dispatch({            //dispatch karte hi reducer ko call jayega
                type: 'login',
                payload: loginuser
            })
        } catch (error) {
            console.log(error.message)
        }
    }

}
export const logout = () => {
    return async (dispatch) => {
        try {
            await SignOut(auth)
            dispatch({
                type: 'logout',
                payload: null
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const authorize = () => {
    return (dispatch) => {
        try {
            OnAuthStateChanged(auth, (user) => {  //not unsuscribed it yet.
                dispatch({
                    type: 'authorized',
                    payload: user
                })
            })
        } catch (error) {
            console.log(error.message)
        }

    }
}


