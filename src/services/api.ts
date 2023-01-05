import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'
import { signOut } from '../contexts/AuthContext';

let cookies = parseCookies();

export const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${cookies['my-admin.token']}`
    }
})

api.interceptors.response.use(response => {
    return response;
}, (error: AxiosError) => {
    const unauthorized = 401;

    if (error.response.status === unauthorized) {
        console.error('Token inválido, usuário não autorizado...', error.response);
        signOut();
    }
})