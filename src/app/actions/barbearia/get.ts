// export async function getBarbearias() {
//     try {
//       const resp = await fetch(`${process.env.API_BASE_URL}/barbearia`, { next: { revalidate: 0 } });
//       const data = await resp.json();
//       return data._embedded.barbeariaList;
//     } catch (error) {
//       console.error('Failed to fetch barbearias:', error);
//       throw error;
//     }
//   }

import axios from "axios";

export function getBarbearias() {
  return axios.get(`${process.env.API_BASE_URL}/barbearia`)
    .then((response) => {
      const data = response.data;
      return data._embedded.barbeariaResponseList;
    })
    .catch((error) => {
      console.error('Failed to get barbearias:', error);
      throw error;
    });
}
