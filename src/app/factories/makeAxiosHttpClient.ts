import { AxiosHttpClient } from "@/app/core/infra/http/AxiosHttpClient";

import type { ClearSession } from "../contexts/auth/AuthContext";

export function makeAxiosHttpClient(
  baseURL: string,
  onClearSession?: ClearSession,
) {
  return new AxiosHttpClient(baseURL, onClearSession);
}
