'use server'

import { redirect } from "next/navigation";
import { cookies } from 'next/headers'

export async function logOut() {

    try {
        cookies().delete("accessToken")
        redirect("./home/barbearia")
    } catch (error) {
        console.error('Failed to logOut:', error);
        throw error;
    }
}