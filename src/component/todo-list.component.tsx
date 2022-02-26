import React, {useEffect, useState} from "react"
import './todo-list.component.scss';
import TodoItem from "./todo-item.component";
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import {useDispatch, useSelector} from 'react-redux';
import {TodoDto} from "../common/models/todo.dto";


const TodoList = () => {
    const todo: TodoDto[] = useSelector((state: any) => state.todoReducer.todo)
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

    const handleDelete = async (id: number) => {
        dispatch({
            type: 'DELETE_TASK_REQUEST',
            payload: id
        })
    }

    const handleEdit = async (id: number, editName: string) => {
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
                    : todo.map((item: TodoDto) => <TodoItem
                        item={item}
                        onDelete={() => handleDelete(item.id)}
                        onEdit={(editName: string) => handleEdit(item.id, editName)}
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
