import React, {useState} from "react"
import './App.scss';
import TodoItem from "./component/todo-item.component";
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';


const App = () => {
    const [todo, setTodo] = useState(['купить хлеб', 'купить молоко']);
    const [newTodoName, setNewTodoName] = useState('');

    // const [name, setName] = useState('test')

    // const changeName = (e) => {
    //     setName(e.target.value)
    // }

    const changeNewTodoName = (e: any) => {
        setNewTodoName(e.target.value)
    }

    const handleAddNewTodo = () => {
        setTodo([...todo, newTodoName])
        setNewTodoName('');
    }

    const handleDelete = (indexToRemove: any) => {
        setTodo(todo.filter((item, index) => index !== indexToRemove ))
    }

    return (
        <div className='test'>

            {
                todo.map((item, index) => <TodoItem
                    item={item}
                    onDelete={() => handleDelete(index)}
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

export default App;
