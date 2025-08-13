import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthMutation } from "@/app/hooks/mutations/useAuthMutation";

import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/app/schemas/auth/RegisterSchema";

import { authService } from "@/app/factories/makeAuthService";

import { isEmptyObject } from "@/app/utils/isEmptyObject";
import { handleAuthErrors } from "@/app/utils/handleAuthErrors";

import type { RegisterData } from "@/@types/auth/Register";

export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });

  const [requestErrorMessage, setRequestErrorMessage] = useState<string | null>(
    null,
  );

  const { authenticate, isAuthenticating, hasAuthenticateError } =
    useAuthMutation();

  const handleSubmit = hookFormHandleSubmit(async (credentials) => {
    if (isAuthenticating) return;

    setRequestErrorMessage(null);

    try {
      await authenticate({
        action: () => authService.signup(credentials),
      });
    } catch (error) {
      const errorMessage = handleAuthErrors({ type: "signup", error });

      if (errorMessage) {
        setRequestErrorMessage(errorMessage);
      }
    }
  });

  return {
    handleSubmit,
    register,
    requestErrorMessage,
    formErrors: errors,
    hasFormError: !isEmptyObject(errors),
    isAuthenticating,
    hasAuthenticateError,
  };
}
