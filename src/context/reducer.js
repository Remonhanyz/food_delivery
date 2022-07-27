export const actionType = {
    SET_USER: 'SET_USER',

}

const reducer = (state, action) => {
    switch (action.type) {
        case actionType.SET_USER:
            console.log(action.user);
            return {...state, user: action.user, isAdmin: action.isAdmin}
        default: 
            return state
    }
}

export default reducer