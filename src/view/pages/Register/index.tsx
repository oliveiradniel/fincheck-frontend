import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Register() {
  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold tracking-[-1px] text-gray-900">
          Crie sua conta
        </h1>

        <p className="space-x-2 tracking-[-0.5px]">
          <span className="text-gray-700">Já possui uma conta?</span>
          <Link to="/login" className="font-medium text-moss-green">
            Fazer login
          </Link>
        </p>
      </header>

      <form action="" className="mt-[60px] flex flex-col gap-4">
        <Input type="text" placeholder="Nome" name="name" />
        <Input type="email" placeholder="E-mail" name="email" />
        <Input type="password" placeholder="Senha" name="password" />

        <Button type="submit" className="mt-2">
          Criar conta
        </Button>
      </form>
    </>
  );
}
