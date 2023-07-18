

const Authenticate = (state = null, action) => {
    switch (action.type) {
        case 'signup':
            return action.payload
        case 'login':
            return action.payload
        case 'authorized':
            return action.payload
        default:
            return state

    }
}

export default Authenticate