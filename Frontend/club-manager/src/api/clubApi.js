import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://debf-42-105-120-166.ngrok-free.app'
})

export default instance;