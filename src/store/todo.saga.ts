import {call, put, takeEvery} from 'redux-saga/effects'
import {addTask, deleteTask, editTask, searchTodo} from '../common/api/todo.api';
import {TodoDto} from "../common/models/todo.dto";
import {select} from 'redux-saga/effects'


function* loadItemsRequest() {
    try {
        const searchText: string = yield select((state: any) => state.todoReducer.searchText);
        yield put({type: 'SET_IS_LOADING_NEW_ITEMS', payload: true})
        const todos: TodoDto[] = yield call(searchTodo, searchText);
        yield put({type: 'SET_IS_LOADING_NEW_ITEMS', payload: false})
        yield put({type: 'SET_TODO', payload: todos})
    } catch (e: any) {
        yield put({type: 'GET_USERS_FAILED', message: e.message})
    }
}

function* addTaskRequest(action: any) {
    try {
        yield put({type: 'SET_IS_LOADING_NEW_ITEMS', payload: true})
        yield call(addTask, action.payload);
        yield put({type: 'LOAD_ITEMS_REQUEST'})
    } catch (e: any) {
        yield put({type: 'GET_USERS_FAILED', message: e.message})
    }
}

function* deleteTaskRequest(action: any) {
    try {
        yield put({type: 'SET_IS_LOADING_NEW_ITEMS', payload: true})
        yield call(deleteTask, action.payload);
        yield put({type: 'LOAD_ITEMS_REQUEST'})
    } catch (e: any) {
        yield put({type: 'GET_USERS_FAILED', message: e.message})
    }
}

function* editTaskRequest(action: any) {
    try {
        yield put({type: 'SET_IS_LOADING_NEW_ITEMS', payload: true})
        yield call(editTask, action.payload.id, action.payload.editName);
        yield put({type: 'LOAD_ITEMS_REQUEST'})
    } catch (e: any) {
        yield put({type: 'GET_USERS_FAILED', message: e.message})
    }
}

export default function * todoSaga () {
    yield takeEvery('LOAD_ITEMS_REQUEST', loadItemsRequest)
    yield takeEvery('ADD_TASK_REQUEST', addTaskRequest)
    yield takeEvery('DELETE_TASK_REQUEST', deleteTaskRequest)
    yield takeEvery('EDIT_TASK', editTaskRequest)
}
