import {call, put, takeEvery} from 'redux-saga/effects'
import {registerUser} from '../common/api/user.api';

function* loadItemsRequest(action: any) {
    try {
        yield call(registerUser, action.payload);
        yield put({type: 'SET_USER_AUTHENTICATED'})
        window.location.href = '/';
    } catch (e: any) {
        yield put({type: 'GET_USERS_FAILED', message: e.message})
    }
}

export default function * userSaga () {
    yield takeEvery('REGISTER_USER', loadItemsRequest)
}
