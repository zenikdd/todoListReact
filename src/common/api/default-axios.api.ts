import defaultAxios from 'axios'

export const axios = defaultAxios.create({
    baseURL: process.env.APP_URL
})
