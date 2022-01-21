import React, {useState} from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './todo-item.component.scss';

const TodoItem = ({item, onDelete}: any) => {

    return (
        <div className='todo-item'>
            <div>{item}</div>
            <div>
                <EditIcon/>
                <DeleteIcon onClick={onDelete}/>
            </div>
        </div>
    );
}

export default TodoItem;
