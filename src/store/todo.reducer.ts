import {TodoDto} from "../common/models/todo.dto";

interface reducerState {
    todo: TodoDto[],
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
