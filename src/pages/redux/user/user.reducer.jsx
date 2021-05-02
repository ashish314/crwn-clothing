const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            const test = {
                ...state,
                currentUser: action.payload
            }
            return test;
        
        default:
            return state;
    }
}

export default userReducer;