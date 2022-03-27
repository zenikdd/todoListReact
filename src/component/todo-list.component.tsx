import React, {useEffect, useState} from "react"
import './todo-list.component.scss';
import TodoItem from "./todo-item.component";
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import {useDispatch, useSelector} from 'react-redux';
import {TodoDto} from "../common/models/todo.dto";
import {HeaderComponent} from "./header.component";
import Pagination from '@mui/material/Pagination';


const TodoList = () => {
    const todo: TodoDto[] = useSelector((state: any) => state.todoReducer.todo)
    const isLoadingNewItems = useSelector((state: any) => state.todoReducer.isLoadingNewItems);
    const pageAmount = useSelector((state: any) => state.todoReducer.pageAmount);
    const currentPage = useSelector((state: any) => state.todoReducer.currentPage);
    const search = useSelector((state: any) => state.todoReducer.searchText);
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

    const changeSearch = (e: any) => {
        dispatch({
            type: 'SET_SEARCH_TEXT',
            payload: e.target.value
        })
    }

    const handleAddNewTodo = async () => {
        dispatch({
            type: 'ADD_TASK_REQUEST',
            payload: newTodoName
        })
        setNewTodoName('');
    }

    const onSearch = async () => {
        dispatch({
            type: 'LOAD_ITEMS_REQUEST'
        })
    }

    const handleDelete = async (id: number) => {
        dispatch({
            type: 'DELETE_TASK_REQUEST',
            payload: id
        })
    }

    const onChangePage = async (e: any, value: number) => {
        dispatch({
            type: 'SET_PAGE',
            payload: value
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
        <div className='todo-list'>
            <HeaderComponent/>
            <div>
                <TextField
                    value={search}
                    onChange={changeSearch}
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"/>
                <Button
                    onClick={onSearch}
                    variant="contained">
                    Search
                </Button>
            </div>
            <div className="todo-list-container">

                {
                    isLoadingNewItems
                        ? <CircularProgress/>
                        : todo.map((item: TodoDto) => <TodoItem
                            item={item}
                            onDelete={() => handleDelete(item.id)}
                            onEdit={(editName: string) => handleEdit(item.id, editName)}
                        ></TodoItem>)
                }
                <Pagination page={currentPage} count={pageAmount} onChange={onChangePage}/>
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
        </div>
    );
}

export default TodoList;
