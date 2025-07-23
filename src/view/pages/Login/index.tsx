import { SessionLayout } from "../../layouts/SessionLayout";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
  return (
    <SessionLayout type="login">
      <form action="" className="mt-[60px] flex flex-col gap-4">
        <Input type="email" placeholder="E-mail" name="email" />
        <Input type="password" placeholder="Senha" name="password" />

        <Button type="submit" className="mt-2">
          Entrar
        </Button>
      </form>
    </SessionLayout>
  );
}
