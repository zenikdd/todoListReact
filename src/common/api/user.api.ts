import { axios } from './default-axios.api'
import {RegisterDto} from '../models/register.dto';

export const loginUser = async (data: any) => {
    try {
        const updateTopic = await axios.post('user/login', data)
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}

export const registerUser = async (data: RegisterDto) => {
    try {
        const updateTopic = await axios.post('user/register', data)
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}

