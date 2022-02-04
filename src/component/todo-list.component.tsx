import React, {useEffect, useState} from "react"
import './todo-list.component.scss';
import TodoItem from "./todo-item.component";
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import {addTask, deleteTask, loadTodo} from "../common/api/todo.api";
import CircularProgress from '@mui/material/CircularProgress';
import {useDispatch, useSelector} from 'react-redux';


const TodoList = () => {
    const todo = useSelector((state: any) => state.todoReducer.todo)
    const isLoadingNewItems = useSelector((state: any) => state.todoReducer.isLoadingNewItems);
    const dispatch = useDispatch();

    const [newTodoName, setNewTodoName] = useState('');

    const loadItems = () => {

        dispatch({
            type: 'SET_IS_LOADING_NEW_ITEMS',
            payload: true
        })

        loadTodo()
            .then(
                (res: any) => {
                    dispatch({
                        type: 'SET_TODO',
                        payload: res.data
                    })

                    dispatch({
                        type: 'SET_IS_LOADING_NEW_ITEMS',
                        payload: false
                    })
                });
    }

    useEffect(() => loadItems(), [])

    const changeNewTodoName = (e: any) => {
        setNewTodoName(e.target.value)
    }

    const handleAddNewTodo = async () => {
        await addTask(newTodoName)
        loadItems()
        setNewTodoName('');
    }

    const handleDelete = async (id: string) => {
        await deleteTask(id);
        loadItems()
    }

    const handleEdit = async (id: string, editName: any) => {
        await deleteTask(id);
        await addTask(editName)
        await loadItems();
    }

    return (
        <div className='test'>

            {
                isLoadingNewItems
                    ? <CircularProgress/>
                    : todo.map((item: any) => <TodoItem
                        item={item}
                        onDelete={() => handleDelete(item._id)}
                        onEdit={(editName: string) => handleEdit(item._id, editName)}
                    ></TodoItem>)
            }
            <div className='add-block'>
                <TextField
                    value={newTodoName}
                    onChange={changeNewTodoName}
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"/>
                <Button
                    onClick={handleAddNewTodo}
                    variant="contained">
                    Add todo
                </Button>
            </div>
        </div>
    );
}

export default TodoList;
