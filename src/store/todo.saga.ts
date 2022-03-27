import {call, put, takeEvery} from 'redux-saga/effects'
import {addTask, deleteTask, editTask, getAmountPagesByCriteria, searchTodo} from '../common/api/todo.api';
import {TodoDto} from "../common/models/todo.dto";
import {select} from 'redux-saga/effects'


function* loadItemsRequest(action: any) {
    try {
        let page: number | undefined;

        if(action.payload) {
            page = action.payload.page;
        }

        const searchText: string = yield select((state: any) => state.todoReducer.searchText);
        const currentPageFromReducer: number =  yield select((state: any) => state.todoReducer.currentPage);

        const currentPage = page || currentPageFromReducer;

        yield put({type: 'SET_IS_LOADING_NEW_ITEMS', payload: true})
        const todos: TodoDto[] = yield call(searchTodo, searchText, currentPage);
        const amountAvailablePage: number = yield call(getAmountPagesByCriteria, searchText, currentPage);
        yield put({type: 'SET_IS_LOADING_NEW_ITEMS', payload: false})
        yield put({type: 'SET_TODO', payload: todos})
        yield put({type: 'SET_PAGE_AMOUNT', payload: amountAvailablePage})

        if(currentPage > amountAvailablePage) {
            yield put({type: 'SET_PAGE', payload: amountAvailablePage})
        }
    } catch (e: any) {

    }
}

function* addTaskRequest(action: any) {
    try {
        yield put({type: 'SET_IS_LOADING_NEW_ITEMS', payload: true})
        yield call(addTask, action.payload);
        yield put({type: 'LOAD_ITEMS_REQUEST'})
    } catch (e: any) {

    }
}

function* deleteTaskRequest(action: any) {
    try {
        yield put({type: 'SET_IS_LOADING_NEW_ITEMS', payload: true})
        yield call(deleteTask, action.payload);
        yield put({type: 'LOAD_ITEMS_REQUEST'})
    } catch (e: any) {

    }
}

function* editTaskRequest(action: any) {
    try {
        yield put({type: 'SET_IS_LOADING_NEW_ITEMS', payload: true})
        yield call(editTask, action.payload.id, action.payload.editName);
        yield put({type: 'LOAD_ITEMS_REQUEST'})
    } catch (e: any) {

    }
}

function* setPage(action: any) {
    try {
        yield put({type: 'LOAD_ITEMS_REQUEST', payload: {page: action.payload}})
    } catch (e: any) {

    }
}

export default function * todoSaga () {
    yield takeEvery('LOAD_ITEMS_REQUEST', loadItemsRequest)
    yield takeEvery('ADD_TASK_REQUEST', addTaskRequest)
    yield takeEvery('DELETE_TASK_REQUEST', deleteTaskRequest)
    yield takeEvery('EDIT_TASK', editTaskRequest)
    yield takeEvery('SET_PAGE', setPage)
}
