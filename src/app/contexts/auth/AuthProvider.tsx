import { useCallback, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { AuthContext } from "./AuthContext";

import { makeUsersService } from "@/app/factories/makeUsersService";

import { localStorageKeys } from "@/app/config/localStorageKeys";

import type { AccessToken } from "@/@types/auth/AccessToken";
import type { User } from "@/@types/user/User";
import { LaunchScreen } from "@/view/components/LaunchScreen";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const queryClient = useQueryClient();

  const [loggedUser, setLoggedUser] = useState({} as User);

  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const hasStoragedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN,
    );

    return !!hasStoragedAccessToken;
  });

  const { isFetching } = useQuery({
    staleTime: Infinity,
    enabled: signedIn,
    queryKey: ["authenticatedUser"],
    queryFn: async () => {
      const usersService = makeUsersService(clearSession);

      const user = await usersService.getAuthenticatedUser();

      setLoggedUser(user);

      return user;
    },
  });

  const createSession = useCallback(async (accessToken: AccessToken) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const clearSession = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    queryClient.clear();
    setSignedIn(false);
  }, [queryClient]);

  return (
    <AuthContext.Provider
      value={{ loggedUser, signedIn, createSession, clearSession }}
    >
      <LaunchScreen isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
