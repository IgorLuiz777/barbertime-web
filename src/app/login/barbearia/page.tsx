"use client"
import { login } from "@/app/actions/barbearia/login";
import { Icon } from "@/components/Icon";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

interface FormState {
    messageNome: string;
}

export default function TelaLogin() {
    const initialState: FormState = {
        messageNome: '',
    };

    const [state, setState] = useState<FormState>(initialState); 

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        try {
            await login(state, formData); 
        } catch (error) {
            console.error('Failed to submit form:', error);
        }
    };

    return (
        <main className="flex min-h-screen p-24">
            <div className="flex flex-col mx-auto pt-12">
                <Icon />
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-6 m-6 rounded min-w-[500px]">
                    <h2 className="text-3xl font-bold text-stone-700">LOGIN</h2>
                    <Input
                        key="email"
                        label="Email"
                        name="email"
                        labelPlacement={"outside"}
                        placeholder="Digite o email da barbearia"
                        variant="underlined"
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}
                    />
                    <Input
                        key="senha"
                        label="Senha"
                        name="senha"
                        type="password"
                        labelPlacement={"outside"}
                        placeholder="Digite a senha"
                        variant="underlined"
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}
                    />
                    <div className="flex justify-around mt-4">
                        < SubmitButton name="Logar"/>
                        <Link href="/register/barbearia/">
                            <Button className="bg-cerulean-blue-700 text-2xl" variant="shadow">Não possuo cadastro</Button>
                        </Link>
                    </div>
                </form>
            </div>
            <div className=""><img src="/image2.png" alt="barber" className="w-11/12" /></div>
        </main>
    );

}