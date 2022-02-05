import React, {useEffect, useState} from "react"
import './todo-list.component.scss';
import TodoItem from "./todo-item.component";
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import {addTask, deleteTask, loadTodo} from "../common/api/todo.api";
import CircularProgress from '@mui/material/CircularProgress';
import {useDispatch, useSelector} from 'react-redux';
import TodoItemDTO from '../common/models/todo-item';


const TodoList = () => {
    const todo: TodoItemDTO[] = useSelector((state: any) => state.todoReducer.todo)
    const isLoadingNewItems = useSelector((state: any) => state.todoReducer.isLoadingNewItems);
    const dispatch = useDispatch();

    const [newTodoName, setNewTodoName] = useState('');

    const loadItems = () => {

        dispatch({
            type: 'LOAD_ITEMS_REQUEST'
        })
    }

    useEffect(() => loadItems(), [])

    const changeNewTodoName = (e: any) => {
        setNewTodoName(e.target.value)
    }

    const handleAddNewTodo = async () => {
        dispatch({
            type: 'ADD_TASK_REQUEST',
            payload: newTodoName
        })
        setNewTodoName('');
    }

    const handleDelete = async (id: string) => {
        dispatch({
            type: 'DELETE_TASK_REQUEST',
            payload: id
        })
    }

    const handleEdit = async (id: string, editName: string) => {
        dispatch({
            type: 'EDIT_TASK',
            payload: {
                id,
                editName
            }
        })
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
