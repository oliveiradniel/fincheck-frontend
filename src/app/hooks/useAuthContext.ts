import { useContext } from "react";

import { AuthContext } from "../contexts/auth/AuthContext";

export function useAuthContext() {
  return useContext(AuthContext);
}
