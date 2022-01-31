import userSaga from "./user.saga";
import { spawn } from 'redux-saga/effects'

export default function * rootSaga () {
    yield spawn(userSaga)
}
