import defaultAxios from 'axios'

export const axios = defaultAxios.create({
  baseURL: process.env.APP_URL,
  headers: { 'Content-Type': 'application/json' }
})

export default { axios }
