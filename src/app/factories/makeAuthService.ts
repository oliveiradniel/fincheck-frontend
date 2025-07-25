import { AuthService } from "@/app/core/services/contracts/AuthService";
import { makeAxiosHttpClient } from "./makeAxiosHttpClient";

import { env } from "@/app/config/env";

export function makeAuthService() {
  return new AuthService(makeAxiosHttpClient(env.API_URL));
}

export const authService = makeAuthService();
