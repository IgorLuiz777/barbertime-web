interface Servico {
    id: number;
    nome: string;
    valor: number;
  }
  
  interface Barbearia {
    id: number;
    nome: string;
    senha: string;
    email: string;
    telefone: string;
    cnpj: string;
    servicos: Servico[];
  }
  