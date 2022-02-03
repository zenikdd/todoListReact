

const initialState = {
    todoItems: ['купить хлеб']
}

export default function todoReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
              todoItems: action.payload,
            }
        default:
            return state
    }
}
