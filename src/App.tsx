import React, {useState} from "react"
import './App.scss';
import {BrowserRouter, Route} from "react-router-dom";
import TodoList from "./component/todo-list.component";
import LoginPage from "./component/login.page";
import RegisterPage from "./component/register.page";
import TodoContent from "./component/todo-content.page";
import {useSelector} from "react-redux";

const isCookieJWTAvailable = () => !!localStorage.getItem('token');

const App = () => {

  const isLogined = isCookieJWTAvailable();

  return (
    <BrowserRouter>
      {
        isLogined &&
        <>
            <Route exact path='/todo/:id'>
                <TodoContent/>
            </Route>
            <Route exact path='/'>
                <TodoList/>
            </Route>
        </>
      }

      <Route exact path='/register'>
        <RegisterPage></RegisterPage>
      </Route>

      <Route exact path='/login'>
        <LoginPage></LoginPage>
      </Route>

    </BrowserRouter>
  );
}

export default App;
