import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthMutation } from "@/app/hooks/mutations/useAuthMutation";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/app/schemas/auth/LoginSchema";

import { authService } from "@/app/factories/makeAuthService";

import { isEmptyObject } from "@/app/utils/isEmptyObject";
import { handleAuthErrors } from "@/app/utils/handleAuthErrors";

import type { LoginData } from "@/@types/auth/Login";

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(LoginSchema) });

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
        action: () => authService.signin(credentials),
      });
    } catch (error) {
      const errorMessage = handleAuthErrors({ type: "signin", error });

      if (errorMessage) {
        setRequestErrorMessage(errorMessage);
      }
    }
  });

  return {
    handleSubmit,
    register,
    requestErrorMessage,
    errors,
    hasFormError: !isEmptyObject(errors),
    hasAuthenticateError,
    isAuthenticating,
  };
}
