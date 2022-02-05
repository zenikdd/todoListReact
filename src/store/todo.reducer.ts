import TodoItem from '../common/models/todo-item';
import TodoItemDTO from '../common/models/todo-item';

interface reducerState {
    todo: TodoItemDTO[],
    isLoadingNewItems: boolean
}


const initialState: reducerState = {
    todo: [],
    isLoadingNewItems: false
}

export default function todoReducer(state: reducerState = initialState, action: any): reducerState {
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
