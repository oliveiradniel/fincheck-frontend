import { AxiosHttpClient } from "../infra/http/AxiosHttpClient";

export function makeAxiosHttpClient(baseURL: string) {
  return new AxiosHttpClient(baseURL);
}
