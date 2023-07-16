export const signup = (email, password) => {
    return {
        type: 'signup',
        payload: {
            email, password
        }
    }

}
export const login = (email, password) => {
    return {
        type: 'login',
        payload: {
            email, password
        }
    }

}

