import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API, 
    headers: {'Authorization': `bearer ${localStorage.getItem('@TasksDate: token')}` } 
})

export default api