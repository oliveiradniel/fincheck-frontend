import { useForm } from "react-hook-form";
import { useAuthMutation } from "@/app/hooks/mutations/useAuthMutation";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/app/schemas/auth/LoginSchema";

import { authService } from "@/app/factories/makeAuthService";

import { isEmptyObject } from "@/app/utils/isEmptyObject";

import type { LoginData } from "@/@types/auth/Login";

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(LoginSchema) });

  const { mutate, isLoading, isError } = useAuthMutation();

  const handleSubmit = hookFormHandleSubmit(async (credentials) => {
    if (isLoading) return;

    mutate({ type: "signin", action: () => authService.signin(credentials) });
  });

  return {
    handleSubmit,
    register,
    errors,
    hasFormError: !isEmptyObject(errors),
    hasRequestError: isError,
    isLoading,
  };
}
