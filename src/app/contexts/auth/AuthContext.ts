import { createContext } from "react";

import type { AccessToken } from "@/@types/auth/AccessToken";

interface AuthContextResponse {
  signedIn: boolean;
  createSession: ({ accessToken }: AccessToken) => void;
  clearSession: () => void;
}

export const AuthContext = createContext({} as AuthContextResponse);
