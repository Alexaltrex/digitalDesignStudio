import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development'
        ? process.env.REACT_APP_API_DEV
        : process.env.REACT_APP_API_PROD,
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