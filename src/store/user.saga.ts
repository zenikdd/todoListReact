import {call, put, takeEvery} from 'redux-saga/effects'
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

interface test {
    id: number
}

function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => response.json())
        .catch((error) => {
            throw error
        })
}


function* fetchUsers(action: any) {
    try {
        const users: test = yield call(getApi);
        yield put({type: 'GET_USERS_SUCCESS', payload: users})
    } catch (e: any) {
        yield put({type: 'GET_USERS_FAILED', message: e.message})
    }
}
export default function * userSaga () {
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers)
}
