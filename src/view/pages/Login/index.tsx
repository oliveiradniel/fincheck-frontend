import { useLoginController } from "./useLoginController";

import { SessionLayout } from "../../layouts/SessionLayout";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
  const { handleSubmit, register, errors, isValid } = useLoginController();

  return (
    <SessionLayout type="login">
      <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register("password")}
        />

        <Button type="submit" disabled={!isValid} className="mt-2">
          Entrar
        </Button>
      </form>
    </SessionLayout>
  );
}
