import { axios } from './default-axios.api'
import {AddTaskDto} from "../models/add-task.dto";

export const loadTodo = async () => {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.get('task', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (err: any) {
        console.log(err)
    }
}

export const addTask = async (newTodoName: string) => {
    try {
        const token = localStorage.getItem('token')
        const addTaskDto: AddTaskDto = {
            description: newTodoName
        }
        const updateTopic = await axios.post('task', addTaskDto,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}

export const deleteTask = async (taskId: string) => {
    try {
        const token = localStorage.getItem('token')
        const updateTopic = await axios.delete(`task/${taskId}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
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


