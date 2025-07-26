import { useForm } from "react-hook-form";
import { useAuthMutation } from "@/app/hooks/mutations/useAuthMutation";

import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/app/schemas/auth/RegisterSchema";

import { authService } from "@/app/factories/makeAuthService";

import { isEmptyObject } from "@/app/utils/isEmptyObject";

import type { RegisterData } from "@/@types/auth/Register";

export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });

  const { mutate, isLoading, isError } = useAuthMutation();

  const handleSubmit = hookFormHandleSubmit(async (credentials) => {
    if (isLoading) return;

    mutate({ type: "signup", action: () => authService.signup(credentials) });
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
