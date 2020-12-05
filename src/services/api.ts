import axios from 'axios'
const API_URL = process.env.API_URL
const token = 'token';


const api = axios.create({
    baseURL: API_URL, 
    headers: {'Authorization': `bearer ${token}` } 
})

export default api