import { useRegisterController } from "./useRegisterController";

import { SessionTemplate } from "@/view/SessionTemplate";

import { Input } from "@/view/components/Input";
import { Button } from "@/view/components/Button";

export function Register() {
  const {
    handleSubmit,
    register,
    requestErrorMessage,
    formErrors,
    isAuthenticating,
    hasFormError,
    hasAuthenticateError,
  } = useRegisterController();

  return (
    <SessionTemplate type="register">
      <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Nome"
          error={formErrors.name?.message}
          {...register("name")}
        />

        <Input
          type="email"
          placeholder="E-mail"
          error={formErrors.email?.message || requestErrorMessage}
          {...register("email")}
        />

        <Input
          type="password"
          placeholder="Senha"
          error={formErrors.password?.message}
          {...register("password")}
        />

        <Button
          type="submit"
          disabled={hasFormError}
          isLoading={isAuthenticating}
          className="mt-2"
        >
          {hasAuthenticateError ? "Tentar novamente" : "Criar conta"}
        </Button>
      </form>
    </SessionTemplate>
  );
}
