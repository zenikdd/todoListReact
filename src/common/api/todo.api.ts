import { axios } from './default-axios.api'
import {AddTaskDto} from "../models/add-task.dto";
import {TodoDto} from "../models/todo.dto";
import {EditTodoDto} from "../models/edit-todo.dto";

export const loadTodo = async (): Promise<TodoDto[]> => {
    try {
        const response = await axios.get<TodoDto[]>('todo/getAll')
        return response.data
    } catch (err: any) {
        console.log(err)
        return  []
    }
}

export const addTask = async (newTodoName: string) => {
    try {
        const addTaskDto: AddTaskDto = {
            name: newTodoName
        }
        const updateTopic = await axios.post('todo/add', addTaskDto)
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}

export const deleteTask = async (taskId: string) => {
    try {
        const updateTopic = await axios.delete(`todo/${taskId}`)
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}

export const editTask = async (id: number, name: string) => {
    try {
        const editTodoDto: EditTodoDto = {
            id, name
        }
        const updateTopic = await axios.patch(`todo/edit`,editTodoDto )
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}

export const loadSingleTodo = async (todoId: string) => {
    try {
        const token = localStorage.getItem('token')
        const updateTopic = await axios.delete(`task/${todoId}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}


