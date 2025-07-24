import { useLoginController } from "./useLoginController";

import { SessionLayout } from "../../layouts/SessionLayout";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
  const { handleSubmit, register } = useLoginController();

  return (
    <SessionLayout type="login">
      <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input type="email" placeholder="E-mail" {...register("email")} />
        <Input type="password" placeholder="Senha" {...register("password")} />

        <Button type="submit" className="mt-2">
          Entrar
        </Button>
      </form>
    </SessionLayout>
  );
}
