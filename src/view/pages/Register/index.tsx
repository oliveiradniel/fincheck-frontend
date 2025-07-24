import { useRegisterController } from "./useRegisterController";

import { SessionLayout } from "../../layouts/SessionLayout";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Register() {
  const { handleSubmit, register, errors, isValid } = useRegisterController();

  return (
    <SessionLayout type="register">
      <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Nome"
          error={errors.name?.message}
          {...register("name")}
        />

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
          Criar conta
        </Button>
      </form>
    </SessionLayout>
  );
}
