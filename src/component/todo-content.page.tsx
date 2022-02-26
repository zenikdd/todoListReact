import React, {useEffect} from "react"
import './todo-item.component.scss';
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
