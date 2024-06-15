// "use server"

// export async function getById(id: number){

//     const resp = await fetch(`${process.env.API_BASE_URL}/barbearia/${id}`, {next: {revalidate: 0}})

//     if (!resp.ok){
//         throw new Error("Barbearia não encontrada")
//     }

//     return await resp.json()

// }

import axios from "axios";

export function getById(id: number) {
  return axios.get(`${process.env.API_BASE_URL}/barbearia/${id}`)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.error('Failed to get barbearias:', error);
      throw error;
    });
}