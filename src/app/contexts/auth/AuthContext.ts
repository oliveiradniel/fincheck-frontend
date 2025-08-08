import { createContext } from "react";

import type { AccessToken } from "@/@types/auth/AccessToken";
import type { User } from "@/@entities/User";

interface AuthContextResponse {
  loggedUser: User;
  signedIn: boolean;
  createSession(accessToken: AccessToken): void;
  clearSession(): void;
}

export const AuthContext = createContext({} as AuthContextResponse);
