import { AxiosHttpClient } from "@/app/infra/http/AxiosHttpClient";

import type { ClearSession } from "@/@types/services/HttpClientInterface";

export function makeAxiosHttpClient(
  baseURL: string,
  onClearSession?: ClearSession,
) {
  return new AxiosHttpClient(baseURL, onClearSession);
}
