

const initialState = {
    users: []
}
export default function users(state = initialState, action: any) {
    console.log('catch')
    switch (action.type) {
        case 'GET_USERS_SUCCESS':
            return {
                ...state,
                users: action.payload,
            }
        default:
            return state
    }
}
