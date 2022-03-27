import {TodoDto} from "../common/models/todo.dto";

interface reducerState {
    todo: TodoDto[],
    isLoadingNewItems: boolean
    searchText: string
    currentPage: number
    pageAmount: number
}


const initialState: reducerState = {
    todo: [],
    isLoadingNewItems: false,
    searchText: '',
    currentPage: 1,
    pageAmount: 1
}

export default function todoReducer(state: reducerState = initialState, action: any): reducerState {
    switch (action.type) {
        case 'SET_TODO':
            return {
                ...state,
                todo: action.payload,
            }
        case 'SET_PAGE':
            return {
                ...state,
                currentPage: action.payload,
            }
        case 'SET_PAGE_AMOUNT':
            return {
                ...state,
                pageAmount: action.payload,
            }
        case 'SET_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.payload,
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
