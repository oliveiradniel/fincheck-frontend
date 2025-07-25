import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/app/schemas/auth/LoginSchema";

import { authService } from "@/app/factories/makeAuthService";

import { isEmptyObject } from "@/app/utils/isEmptyObject";

import type { LoginData, SignInParams } from "@/@types/auth/Login";

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(LoginSchema) });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (credentials: SignInParams) => {
      return authService.signin(credentials);
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (credentials) => {
    if (isPending) return;

    const { accessToken } = await mutateAsync(credentials);
    console.log(accessToken);
  });

  return {
    handleSubmit,
    register,
    errors,
    hasError: !isEmptyObject(errors),
    isPending,
  };
}
