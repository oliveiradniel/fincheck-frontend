import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "@/app/hook/useAuthContext";

import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/app/schemas/auth/RegisterSchema";

import { authService } from "@/app/factories/makeAuthService";

import { isEmptyObject } from "@/app/utils/isEmptyObject";

import type { RegisterData, SignUpParams } from "@/@types/auth/Register";

export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (credentials: SignUpParams) => {
      return authService.signup(credentials);
    },
  });

  const { createSession } = useAuthContext();

  const handleSubmit = hookFormHandleSubmit(async (credentials) => {
    if (isPending) return;

    const { accessToken } = await mutateAsync(credentials);

    createSession({ accessToken });
  });

  return {
    handleSubmit,
    register,
    errors,
    hasError: !isEmptyObject(errors),
    isPending,
  };
}
