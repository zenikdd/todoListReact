import {combineReducers} from "redux";
import users from './users'
import todoReducer from './todo.reducer'

const rootReducer = combineReducers({
    users,
    todoReducer
})

export default  rootReducer
