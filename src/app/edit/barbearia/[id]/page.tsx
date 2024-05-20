"use client"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "../../../edit/barbearia/[id]/EditForm";
import { getById } from "@/app/actions/barbearia/get-by-id";


export default async function EditarBarbearia({params}: Params) {
  const { id } = params

  const barbearia: Barbearia = await getById(id)

  return (
    <main className="flex min-h-screen flex-col items-center ">

      <EditForm {...barbearia} />

    </main>
  );
}
