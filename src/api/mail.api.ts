import {instance, IResponse} from "./api";

export interface ISendEmail {
    name: string
    email: string
    phone?: string
    question?: string
    order?: string
}
export interface ISendBrief {
    name: string
    email: string
}

export const mailAPI = {
    async sendEmail(data: ISendEmail) {
        const response = await instance.post<IResponse>('mail', data);
        return response.data;
    },
    async sendBrief(data: ISendBrief) {
        const response = await instance.post<IResponse>('mail/brief', data);
        return response.data;
    }
}