import {call, put, takeEvery} from 'redux-saga/effects'
import {loadTodo, addTask, deleteTask} from '../common/api/todo.api';
import {registerUser} from '../common/api/user.api';
import {RegisterResponseDto} from '../common/models/register-response.dto';

function* loadItemsRequest(action: any) {
    try {
        const res: RegisterResponseDto = yield call(registerUser, action.payload);
        localStorage.setItem('token', res.token)
    } catch (e: any) {
        yield put({type: 'GET_USERS_FAILED', message: e.message})
    }
}

export default function * userSaga () {
    yield takeEvery('REGISTER_USER', loadItemsRequest)
}
