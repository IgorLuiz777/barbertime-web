'use server'


// import { redirect } from "next/navigation"

// export async function create(prevState: any, formData: FormData) {

//     const data = {
//         nome: formData.get("nome"),
//         email: formData.get("email"),
//         telefone: formData.get("tel"),
//         cnpj: formData.get("cnpj")
//     }

//     const options = {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }

//     const resp = fetch(`${process.env.API_BASE_URL}/barbearia`, options)

//     if ((await resp).ok) {
//         redirect("/home/barbearia")
//     }

//     if ((await resp).status == 400) {
//         return {
//             messageNome: "Validação falhou"
//         }
//     }

// }

import axios from "axios";
import { redirect } from "next/navigation";

export async function create(prevState: any, formData: FormData) {

    const data = {
        nome: formData.get("nome"),
        email: formData.get("email"),
        senha: formData.get("senha"),
        telefone: formData.get("tel"),
        cnpj: formData.get("cnpj")
    }
  try {
    await axios.post(`${process.env.API_BASE_URL}/barbearia`, data);
    redirect("/home/barbearia");
  } catch (error) {
    console.error('Failed to create barbearia:', error);
    throw error;
  }
}

