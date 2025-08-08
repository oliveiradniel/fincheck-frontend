import { useMutation } from "@tanstack/react-query";

import { useAuthContext } from "../useAuthContext";

import type { AuthMutationParams } from "@/@types/auth/Auth";

export function useAuthMutation() {
  const { createSession } = useAuthContext();

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: ({ action }: AuthMutationParams) => {
      return action();
    },
    onSuccess: ({ accessToken }) => {
      createSession(accessToken);
    },
  });

  return {
    authenticate: mutateAsync,
    isAuthenticating: isPending,
    hasAuthenticateError: isError,
  };
}
