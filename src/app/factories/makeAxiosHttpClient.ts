import { AxiosHttpClient } from "@/app/infra/http/AxiosHttpClient";

export function makeAxiosHttpClient(baseURL: string) {
  return new AxiosHttpClient(baseURL);
}
