import { EditForm } from "../../../edit/barbearia/[id]/EditForm";
import { getById } from "@/app/actions/barbearia/get-by-id";

interface RouteParams {
  id: number;
}

export default async function EditarBarbearia({ params }: { params: RouteParams }) {
  const { id } = params;

  const barbearia: Barbearia = await getById(id);

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <EditForm {...barbearia} />
    </main>
  );
}
