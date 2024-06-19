import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';

export function getBarbeariaToken(): Promise<any> {

    const token = cookies().get('accessToken')
    return axios.get(`${process.env.API_BASE_URL}/barbearia/token`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response) => {
            const data = response.data;
            return data._embedded.barbeariaResponseList;
        })
        .catch((error: AxiosError) => {
            console.error('Failed to get barbearias:', error);
            throw error;
        });
}
