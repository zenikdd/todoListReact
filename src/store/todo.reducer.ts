

const initialState = {
    todo: [],
    isLoadingNewItems: false
}

export default function todoReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_TODO':
            return {
                ...state,
                todo: action.payload,
            }
        case 'SET_IS_LOADING_NEW_ITEMS':
            return {
                ...state,
                isLoadingNewItems: action.payload,
            }
        default:
            return state
    }
}
