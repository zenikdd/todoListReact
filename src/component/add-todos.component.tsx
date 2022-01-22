import React, {useState} from "react"
import './add-todos.component.scss';
import TodoItem from "./todo-item.component";
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import {BrowserRouter, Route} from "react-router-dom";


const AddTodos = () => {
    const [todo, setTodo] = useState(['купить хлеб']);
    const [newTodoName, setNewTodoName] = useState('');

    // const [name, setName] = useState('test')

    // const changeName = (e) => {
    //     setName(e.target.value)
    // }

    const updateTodo = (todo: any[]) => {
        setTodo(todo);
        localStorage.setItem('todo', JSON.stringify(todo));
    }

    const changeNewTodoName = (e: any) => {
        setNewTodoName(e.target.value)
    }

    const handleAddNewTodo = () => {
        updateTodo([...todo, newTodoName])
        setNewTodoName('');
    }

    const handleDelete = (indexToRemove: any) => {
        updateTodo(todo.filter((item: any, index: any) => index !== indexToRemove ))
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
        // <BrowserRouter>
        //     <Route exact path='/'>
        //         {/*<LoginPage setToken={setToken}/>*/}
        //     </Route>
        // </BrowserRouter>
        <div className='test'>

            {
                todo.map((item: any, index: any) => <TodoItem
                    item={item}
                    onDelete={() => handleDelete(index)}
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
