import { AuthService } from "../core/services/contracts/AuthService";
import { makeAxiosHttpClient } from "./makeAxiosHttpClient";

import { env } from "../config/env";

export function makeAuthService() {
  return new AuthService(makeAxiosHttpClient(env.API_URL));
}

export const authService = makeAuthService();
