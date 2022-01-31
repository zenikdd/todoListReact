import React, {useState} from "react"
import './App.scss';
import {BrowserRouter, Route} from "react-router-dom";
import TodoList from "./component/todo-list.component";
import LoginPage from "./component/login.page";
import RegisterPage from "./component/register.page";
import TodoContent from "./component/todo-content.page";
import {useDispatch} from "react-redux";



const App = () => {

    const isLogined = localStorage.getItem('token')
    const dispatch = useDispatch();


    return (
        <div onClick={() => dispatch({type: 'GET_USERS_REQUESTED'})}>
asdsad
        </div>
    );
}

export default App;
