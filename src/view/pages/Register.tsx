import { useRegisterController } from "@/view/presentation/controllers/useRegisterController";

import { SessionLayout } from "@/view/layouts/SessionLayout";

import { Input } from "@/view/components/Input";
import { Button } from "@/view/components/Button";

export function Register() {
  const {
    handleSubmit,
    register,
    errors,
    hasFormError,
    hasRequestError,
    isLoading,
  } = useRegisterController();

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

        <Button
          type="submit"
          disabled={hasFormError}
          isLoading={isLoading}
          className="mt-2"
        >
          {hasRequestError ? "Tentar novamente" : "Criar conta"}
        </Button>
      </form>
    </SessionLayout>
  );
}
