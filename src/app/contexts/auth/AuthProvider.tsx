import { useCallback, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { AuthContext } from "./AuthContext";

import { localStorageKeys } from "@/app/config/localStorageKeys";

import type { AccessToken } from "@/@types/auth/AccessToken";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const queryClient = useQueryClient();

  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const hasStoragedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN,
    );

    return !!hasStoragedAccessToken;
  });

  const createSession = useCallback(({ accessToken }: AccessToken) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const clearSession = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    queryClient.clear();
    setSignedIn(false);
  }, [queryClient]);

  return (
    <AuthContext.Provider value={{ createSession, clearSession, signedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
