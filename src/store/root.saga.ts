import todoSaga from "./todo.saga";
import { spawn } from 'redux-saga/effects'
import userSaga from './user.saga';

export default function * rootSaga () {
    yield spawn(todoSaga)
    yield spawn(userSaga)
}
