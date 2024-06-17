"use server";

// import { redirect } from "next/navigation"

// export async function update(formData: FormData){
//     await new Promise(r => setTimeout(r, 1000))

//     const id = formData.get("id")

//     const data = {
//       nome: formData.get("nome"),
//       email: formData.get("email"),
//       telefone: formData.get("tel"),
//       cnpj: formData.get("cnpj")
//   }

//     const options = {
//       method: "PUT",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }

//     const resp = await fetch(`${process.env.API_BASE_URL}/barbearia/${id}`, options)

//     if (resp.ok){
//       redirect(`./${id}`);
//     }

//     if (resp.status == 400){
//       return {
//         messageNome: "Validação falhou"
//       }
//     }

//     if (resp.status == 404){
//       return {
//         messageNome: "Categoria não encontrada"
//       }
//     }

//   }

import axios from "axios";
import { redirect } from "next/navigation";

export async function update(prevState: any, formData: FormData) {
  const id = formData.get("id");

  const data = {
    nome: formData.get("nome"),
    email: formData.get("email"),
    senha: formData.get("senha"),
    telefone: formData.get("tel"),
    cnpj: formData.get("cnpj"),
  };
  try {
    await axios.put(`${process.env.API_BASE_URL}/barbearia/${id}`, data);
    redirect(`./${id}`);
  } catch (error) {
    console.error("Failed to update barbearia:", error);
    throw error;
  }
}
