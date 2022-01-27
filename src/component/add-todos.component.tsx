import React, {useEffect, useState} from "react"
import './add-todos.component.scss';
import TodoItem from "./todo-item.component";
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import {BrowserRouter, Route} from "react-router-dom";
import {addTask, deleteTask, loadTodo} from "../common/api/todo.api";
import {AddTaskDto} from "../common/models/add-task.dto";


const AddTodos = () => {
    const [todo, setTodo] = useState<string[]>([]);
    const [newTodoName, setNewTodoName] = useState('');

    useEffect(() => {
        loadTodo()
            .then(
                (res: any) => {
                    setTodo(res.data)
                });


    },[])

    const updateTodo = (todo: any[]) => {
        setTodo(todo);
    }

    const changeNewTodoName = (e: any) => {
        setNewTodoName(e.target.value)
    }

    const handleAddNewTodo = async () => {
        const addTaskDto: AddTaskDto = {
            description: newTodoName
        }
        await addTask(addTaskDto)
        // updateTodo([...todo, newTodoName])
        setNewTodoName('');
    }

    const handleDelete = async (id: string) => {
        await deleteTask(id);
        updateTodo(todo.filter((item: any) => item._id !== id ))
    }

    const handleEdit = (indexToEdit: any, editName: any) => {
        const editedTodos = todo.map((item: any, index: any) => {
            if(index === indexToEdit) {
                return editName
            }

            return item
        })

        updateTodo(editedTodos);
    }

    return (
        <div className='test'>

            {
                todo.map((item: any, index: any) => <TodoItem
                    item={item.description}
                    onDelete={() => handleDelete(item._id)}
                    onEdit={(editName: any) => handleEdit(index, editName)}
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


            {/*<div>{name}</div>*/}
            {/*<input value={name} onChange={changeName}/>*/}
            {/*<div>*/}
            {/*    test*/}
            {/*</div>*/}
        </div>
    );
}

export default AddTodos;
