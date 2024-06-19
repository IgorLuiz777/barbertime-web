import { getBarbearias } from "@/app/actions/barbearia/get";
import { cookies } from "next/headers";
import { BarbeariaItem } from "./BarbeariaItem";
import NavBar from "@/components/NavBar";

interface Servico {
  id: number;
  nome: string;
  valor: number;
}

interface Barbearia {
  id: number;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  cnpj: string;
  teste: string;
  servicos: Servico[];
}

const fetchData = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  const isLoggedIn = !!accessToken;
  const barbearias: Barbearia[] = await getBarbearias();

  return { barbearias };
};

export default async function Barbearias() {
  const { barbearias } = await fetchData();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar/>
      <section className="bg-slate-700 rounded min-w-[500px] p-6 m-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">Barbearias Cadastradas</h2>
        </div>

        <div id="data">
          {barbearias.map(barbearia => (
            <BarbeariaItem key={barbearia.id} barbearia={barbearia} />
          ))}
        </div>
      </section>
    </main>
  );
}
