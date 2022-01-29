import React, {useEffect, useState} from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './todo-item.component.scss';
import CheckIcon from '@mui/icons-material/Check';
import {loadSingleTodo} from "../common/api/todo.api";
import {useParams} from "react-router-dom";

const TodoContent = ({}: any) => {
    let { id } = useParams<{id: string}>();
     console.log(id)

    useEffect(() => {
        loadSingleTodo(id)
            .then(() => {

            })
    },[])

    return (
        <div className='todo-content'>
            todoContent
        </div>
    );
}

export default TodoContent;
