import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/app/schemas/auth/RegisterSchema";

import { authService } from "@/app/factories/makeAuthService";

import type { RegisterData, SignUpParams } from "@/@types/auth/Register";

export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SignUpParams) => {
      return authService.signup(data);
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    if (isPending) return;

    await mutateAsync(data);
  });

  return {
    handleSubmit,
    register,
    errors,
    isValid,
    isPending,
  };
}
