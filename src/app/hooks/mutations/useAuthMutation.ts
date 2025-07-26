import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

import toast from "react-hot-toast";

import type { AuthMutationParams } from "@/@types/auth/Auth";

export function useAuthMutation() {
  const { createSession } = useAuthContext();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: ({ action }: AuthMutationParams) => {
      return action();
    },
    onSuccess: ({ accessToken }) => {
      createSession(accessToken);
    },
    onError: (_, { type }) => {
      toast.error(
        `Não foi possível ${type === "signin" ? "verificar suas credenciais" : "concluir seu cadastro"}. Tente novamente mais tarde.`,
      );
    },
  });

  return {
    mutate,
    isLoading: isPending,
    isError,
  };
}
