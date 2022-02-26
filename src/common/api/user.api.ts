import { axios } from './default-axios.api'
import {RegisterUserDto} from '../models/register-user.dto';

export const loginUser = async (data: any) => {
    try {
        const updateTopic = await axios.post('user/login', data)
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}

export const registerUser = async (data: RegisterUserDto) => {
    try {
        const updateTopic = await axios.post('user/register', data)
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}

