import { useLoginController } from "@/view/presentation/controllers/useLoginController";

import { SessionLayout } from "@/view/layouts/SessionLayout";

import { CrossCircledIcon } from "@radix-ui/react-icons";

import { Input } from "@/view/components/Input";
import { Button } from "@/view/components/Button";

export function Login() {
  const {
    handleSubmit,
    register,
    requestErrorMessage,
    errors,
    hasFormError,
    isAuthenticating,
    hasAuthenticateError,
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

        {requestErrorMessage && (
          <div className="flex items-center gap-2 text-red-500">
            <CrossCircledIcon />
            <span className="text-xs">{requestErrorMessage}</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={hasFormError}
          isLoading={isAuthenticating}
          className="mt-2"
        >
          {hasAuthenticateError ? "Tentar novamente" : "Entrar"}
        </Button>
      </form>
    </SessionLayout>
  );
}
