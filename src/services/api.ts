import axios from 'axios'
import { parseCookies } from 'nookies'

const cookies = parseCookies();

export const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${cookies['my-admin.token']}`
    }
})