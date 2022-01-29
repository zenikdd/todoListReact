import React, {useState} from "react"
import './App.scss';
import {BrowserRouter, Route, useHistory} from "react-router-dom";
import AddTodos from "./component/add-todos.component";
import LoginPage from "./component/login.page";
import RegisterPage from "./component/register.page";


const App = () => {


    return (
        <BrowserRouter>
            <Route exact path='/todos'>
                <AddTodos/>
            </Route>
            <Route path='/'>
                <LoginPage></LoginPage>
            </Route>
            <Route exact path='/register'>
                <RegisterPage></RegisterPage>
            </Route>
        </BrowserRouter>
    );
}

export default App;
