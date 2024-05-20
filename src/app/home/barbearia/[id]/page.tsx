
import { Detalhar } from "./Detalhar";
import { getById } from "@/app/actions/barbearia/get-by-id";

interface RouteParams {
  id: number;
}

export default async function DetalharBarbearia({ params }: { params: RouteParams }) {
  const { id } = params

  const barbearia: Barbearia = await getById(id)

  return (
    <main className="flex min-h-screen flex-col items-center ">

      <Detalhar {...barbearia} />

    </main>
  );
}
