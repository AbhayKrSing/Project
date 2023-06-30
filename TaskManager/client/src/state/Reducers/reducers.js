const changetheme = (state = 'white', action) => {
    switch (action.type) {
        case 'red':
            return 'red'
        case 'yellow':
            return 'yellow'
        case 'green':
            return 'green'
        case 'grey':
            return 'grey'
        case 'blue':
            return 'white'
        default:
            return state

    }
}

export default changetheme