import { AxiosHttpClient } from "@/app/infra/http/AxiosHttpClient";

import type { ClearSession } from "@/@types/services/HttpClientInterface";

import { env } from "../config/env";

export function makeAxiosHttpClient(
  baseURL: string,
  onClearSession?: ClearSession,
) {
  return new AxiosHttpClient((baseURL = env.API_URL), onClearSession);
}
