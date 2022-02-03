import React, {useState} from 'react'
import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import TodoList from './component/todo-list.component';
import LoginPage from './component/login.page';
import RegisterPage from './component/register.page';
import TodoContent from './component/todo-content.page';
import {useDispatch, useSelector} from 'react-redux';
import todoReducer from './store/todo.reducer';
import users from './store/users';


const App = () => {

  const isLogined = localStorage.getItem('token')

  const todoItems = useSelector(((state: any) => state.todoReducer.todoItems))
  const dispatch = useDispatch();

  const addItem = () => {
      dispatch({type: 'ADD_TODO', payload: ['12']})
  }
  return (
    <div>
      {todoItems.map((i: string) => <div>{i}</div>)}
      <div onClick={addItem}>Add item</div>
    </div>
  );
}

export default App;
