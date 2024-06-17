'use server'

import axios from "axios";
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'

export async function login(prevState: any, formData: FormData) {

    const data = {
        email: formData.get("email"),
        senha: formData.get("senha")
    }
    try {
        await axios.post(`${process.env.API_BASE_URL}/barbearia/login`, data)
            .then((response) => {
                const data = response.data;
                cookies().set("acessToken", data.acessToken)
            })

        redirect("/home/barbearia");
    } catch (error) {
        console.error('Failed to login:', error);
        throw error;
    }
}