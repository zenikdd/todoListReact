import React, {useState} from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './todo-item.component.scss';
import CheckIcon from '@mui/icons-material/Check';
import {useHistory} from "react-router-dom";
import {Link} from "@mui/material";

const TodoItem = ({item, onDelete, onEdit}: any) => {

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
                    : <Link href={`/todo/${item._id}`} >{item.description}</Link>

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
