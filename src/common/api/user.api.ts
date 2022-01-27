import { axios } from './default-axios.api'

export const loginUser = async (data: any) => {
  try {
    const updateTopic = await axios.post('user/login', data)
    return updateTopic.data
  } catch (err: any) {
    console.log(err)
  }
}
