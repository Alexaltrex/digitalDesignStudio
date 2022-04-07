import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3333/api'
        : 'http://localhost:3333/api',
    //withCredentials: true,
});

export interface IResponse<D = {}> {
    status: 'ok' | 'error'
    data: D
    message: string
    error?: {
        field: string
        value: string
    }
}