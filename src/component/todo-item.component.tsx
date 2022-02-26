import React, {useState} from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './todo-item.component.scss';
import CheckIcon from '@mui/icons-material/Check';
import {Link} from "@mui/material";
import {TodoDto} from "../common/models/todo.dto";

const TodoItem = ({item, onDelete, onEdit}: { item: TodoDto, onDelete: () => void, onEdit: (editName: string) => void }) => {

    const [isEditMode, setIsEditMode] = useState(false);
    const [editedTodoName, setEditedTodoName] = useState('');

    const changeTodoName = (e: any) => {
        setEditedTodoName(e.target.value)
    }


    const enableEditMode = () => {
        setIsEditMode(true)
    }

    const disableEditMode = () => {
        setIsEditMode(false)
        onEdit(editedTodoName)
    }

    return (
        <div className='todo-item'>
            {
                isEditMode ?
                    <input value={editedTodoName} onChange={changeTodoName}/>
                    : <Link href={`/todo/${item.id}`} >{item.name}</Link>

            }
            <div>
                {
                    isEditMode ?
                        <CheckIcon onClick={disableEditMode}/>
                        : <EditIcon onClick={enableEditMode}/>

                }
                <DeleteIcon onClick={onDelete}/>
            </div>
        </div>
    );
}

export default TodoItem;
