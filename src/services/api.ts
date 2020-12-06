import axios from 'axios'
const token = localStorage.getItem('@TasksDate: token');



const api = axios.create({
    baseURL: process.env.REACT_APP_API, 
    headers: {'Authorization': `bearer ${token}` } 
})

export default api