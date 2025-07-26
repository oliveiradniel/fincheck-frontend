import { useLoginController } from "@/view/presentation/controllers/useLoginController";

import { SessionLayout } from "@/view/layouts/SessionLayout";

import { Input } from "@/view/components/Input";
import { Button } from "@/view/components/Button";

export function Login() {
  const {
    handleSubmit,
    register,
    errors,
    hasFormError,
    hasRequestError,
    isLoading,
  } = useLoginController();

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

        <Button
          type="submit"
          disabled={hasFormError}
          isLoading={isLoading}
          className="mt-2"
        >
          {hasRequestError ? "Tentar novamente" : "Entrar"}
        </Button>
      </form>
    </SessionLayout>
  );
}
