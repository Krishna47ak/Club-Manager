import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://b6c5-42-105-126-123.ngrok-free.app'
})

export default instance;